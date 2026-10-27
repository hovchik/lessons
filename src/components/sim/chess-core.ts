/*
 * A small chess rules engine for the chess widget and for content:check.
 * Squares are numbered 0–63: a1 = 0, h1 = 7, a8 = 56. Castling is a king move of two files
 * (the rook follows), en passant is a pawn moving diagonally onto an empty square.
 */

export type Color = "w" | "b";
export type Kind = "k" | "q" | "r" | "b" | "n" | "p";
export type Piece = { t: Kind; c: Color };
export type Board = Array<Piece | null>;

export const file = (i: number) => i % 8;
export const rank = (i: number) => Math.floor(i / 8);
export const sqName = (i: number) => `${String.fromCharCode(97 + file(i))}${rank(i) + 1}`;
export function sq(name: string): number {
  const f = name.charCodeAt(0) - 97, r = Number(name[1]) - 1;
  return f >= 0 && f < 8 && r >= 0 && r < 8 && name.length === 2 ? r * 8 + f : -1;
}
export const isLight = (i: number) => (file(i) + rank(i)) % 2 === 1;
export const other = (c: Color): Color => (c === "w" ? "b" : "w");

export const START = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

/** The piece placement field of a FEN (ranks 8 to 1, "/" between them). */
export function parseFen(fen: string): Board | null {
  const rows = fen.split("/");
  if (rows.length !== 8) return null;
  const b: Board = Array(64).fill(null);
  for (let r = 0; r < 8; r++) {
    let f = 0;
    for (const ch of rows[r]) {
      if (/[1-8]/.test(ch)) f += Number(ch);
      else if (/[kqrbnp]/i.test(ch)) {
        if (f > 7) return null;
        b[(7 - r) * 8 + f] = { t: ch.toLowerCase() as Kind, c: ch === ch.toUpperCase() ? "w" : "b" };
        f++;
      } else return null;
    }
    if (f !== 8) return null;
  }
  return b;
}

const DIRS: Record<"r" | "b" | "k" | "n", Array<[number, number]>> = {
  r: [[1, 0], [-1, 0], [0, 1], [0, -1]],
  b: [[1, 1], [1, -1], [-1, 1], [-1, -1]],
  k: [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
  n: [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]],
};

function ray(b: Board, i: number, dirs: Array<[number, number]>, slide: boolean): number[] {
  const out: number[] = [];
  for (const [df, dr] of dirs) {
    let f = file(i) + df, r = rank(i) + dr;
    while (f >= 0 && f < 8 && r >= 0 && r < 8) {
      const j = r * 8 + f;
      out.push(j);
      if (b[j] || !slide) break;
      f += df;
      r += dr;
    }
  }
  return out;
}

/** Squares the piece on i attacks (for a pawn: its two diagonal squares). */
export function attacks(b: Board, i: number): number[] {
  const p = b[i];
  if (!p) return [];
  switch (p.t) {
    case "r": return ray(b, i, DIRS.r, true);
    case "b": return ray(b, i, DIRS.b, true);
    case "q": return [...ray(b, i, DIRS.r, true), ...ray(b, i, DIRS.b, true)];
    case "k": return ray(b, i, DIRS.k, false);
    case "n": return ray(b, i, DIRS.n, false);
    case "p": {
      const dr = p.c === "w" ? 1 : -1, r = rank(i) + dr;
      if (r < 0 || r > 7) return [];
      return [-1, 1].filter((df) => file(i) + df >= 0 && file(i) + df < 8).map((df) => r * 8 + file(i) + df);
    }
  }
}

export function attacked(b: Board, target: number, by: Color): boolean {
  return b.some((p, i) => p?.c === by && attacks(b, i).includes(target));
}

export const kingOf = (b: Board, c: Color) => b.findIndex((p) => p?.t === "k" && p.c === c);
export function inCheck(b: Board, c: Color): boolean {
  const k = kingOf(b, c);
  return k >= 0 && attacked(b, k, other(c));
}

/** Moves ignoring checks. `ep` is the en passant target square, if any. */
export function pseudoMoves(b: Board, i: number, ep = -1): number[] {
  const p = b[i];
  if (!p) return [];
  if (p.t !== "p") {
    const out = attacks(b, i).filter((j) => b[j]?.c !== p.c);
    if (p.t === "k") {
      const home = p.c === "w" ? 4 : 60;
      if (i === home && !inCheck(b, p.c)) {
        for (const [rook, between, pass] of [[home + 3, [home + 1, home + 2], [home + 1, home + 2]], [home - 4, [home - 1, home - 2, home - 3], [home - 1, home - 2]]] as const) {
          const r = b[rook];
          if (r?.t === "r" && r.c === p.c && between.every((j) => !b[j]) && pass.every((j) => !attacked(b, j, other(p.c)))) out.push(pass[1]);
        }
      }
    }
    return out;
  }
  const dr = p.c === "w" ? 1 : -1, start = p.c === "w" ? 1 : 6;
  const out: number[] = [];
  const one = i + 8 * dr;
  if (one >= 0 && one < 64 && !b[one]) {
    out.push(one);
    const two = i + 16 * dr;
    if (rank(i) === start && !b[two]) out.push(two);
  }
  for (const j of attacks(b, i)) if ((b[j] && b[j]!.c !== p.c) || j === ep) out.push(j);
  return out;
}

/** Plays a move like e2e4 or e7e8q (castling and en passant included); returns a new board. */
export function play(b: Board, from: number, to: number, promo: Kind = "q"): Board {
  const n = b.slice();
  const p = n[from];
  if (!p) return n;
  if (p.t === "p" && file(from) !== file(to) && !n[to]) n[rank(from) * 8 + file(to)] = null;
  if (p.t === "k" && Math.abs(file(to) - file(from)) === 2) {
    const kingside = file(to) > file(from);
    const rf = rank(from) * 8 + (kingside ? 7 : 0), rt = rank(from) * 8 + (kingside ? 5 : 3);
    n[rt] = n[rf];
    n[rf] = null;
  }
  n[to] = p.t === "p" && (rank(to) === 7 || rank(to) === 0) ? { t: promo, c: p.c } : p;
  n[from] = null;
  return n;
}

export function legalMoves(b: Board, i: number, ep = -1): number[] {
  const p = b[i];
  if (!p) return [];
  return pseudoMoves(b, i, ep).filter((j) => !inCheck(play(b, i, j), p.c));
}

export function hasMove(b: Board, c: Color, ep = -1): boolean {
  return b.some((p, i) => p?.c === c && legalMoves(b, i, ep).length > 0);
}
export const isMate = (b: Board, c: Color) => inCheck(b, c) && !hasMove(b, c);
export const isStalemate = (b: Board, c: Color) => !inCheck(b, c) && !hasMove(b, c);

/** Parses "e2e4" or "e7e8n" into squares. */
export function parseMove(m: string): { from: number; to: number; promo?: Kind } | null {
  const from = sq(m.slice(0, 2)), to = sq(m.slice(2, 4));
  if (from < 0 || to < 0 || m.length > 5) return null;
  const promo = m[4] as Kind | undefined;
  if (promo && !"qrbn".includes(promo)) return null;
  return { from, to, promo };
}

/** The en passant square left by a two-square pawn move, or −1. */
export function epAfter(b: Board, from: number, to: number): number {
  return b[from]?.t === "p" && Math.abs(to - from) === 16 ? (from + to) / 2 : -1;
}
