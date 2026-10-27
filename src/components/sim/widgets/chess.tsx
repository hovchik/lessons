"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang, Tr } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { type Board, type Kind, file, inCheck, isLight, legalMoves, parseFen, play, rank, sq, sqName, epAfter, START } from "../chess-core";
import { CHESS_SETS, chessFrames, type ChessFrame } from "../data/chess-sets";
import { Arrow, Choice, Note, Readouts, StepPlayer } from "../kit";
import { L, t, UI } from "../labels";

/**
 * A chessboard in three modes.
 *   chess set=scholar                         step through a scripted line (data/chess-sets.ts)
 *   chess mode=moves fen=8/8/8/3R4/8/8/8/8 pick=d4   tap a piece to see its moves, tap a dot to play
 *   chess mode=squares                        tap a square to read its name, or find a named square
 * Any mode takes marks= and arrows= (see data/chess-sets.ts for the syntax).
 */
const W = {
  board: t("Try it on the board", "Փորձի՛ր տախտակի վրա", "Попробуй на доске"),
  hintMoves: t("Tap a piece to see where it can go, then tap a dot to move it. A ring means a capture.", "Հպի՛ր խաղաքարին՝ տեսնելու, թե ուր կարող է գնալ, հետո հպի՛ր կետին՝ քայլ անելու համար։ Օղակը նշանակում է վերցում։", "Нажми на фигуру, чтобы увидеть, куда она может пойти, затем нажми на точку, чтобы сделать ход. Кольцо означает взятие."),
  hintSquares: t("Tap any square to read its name.", "Հպի՛ր ցանկացած դաշտի՝ նրա անունը կարդալու համար։", "Нажми на любое поле, чтобы прочитать его название."),
  explore: t("Explore", "Ուսումնասիրել", "Изучать"),
  findMode: t("Find the square", "Գտի՛ր դաշտը", "Найди поле"),
  find: t("Find the square", "Գտի՛ր դաշտը՝", "Найди поле"),
  right: t("Right!", "Ճիշտ է։", "Верно!"),
  wrong: (s: string) => t(`That is ${s}. Try again.`, `Դա ${s} դաշտն է։ Նորից փորձի՛ր։`, `Это ${s}. Попробуй ещё.`),
  found: t("Found", "Գտնված", "Найдено"),
  light: t("white square", "սպիտակ դաշտ", "белое поле"),
  dark: t("black square", "սև դաշտ", "чёрное поле"),
  fileW: t("file", "ուղղաձիգ", "вертикаль"),
  rankW: t("rank", "հորիզոնական", "горизонталь"),
  piece: t("Piece", "Խաղաքար", "Фигура"),
  count: t("Squares it can go to", "Քանի դաշտ կարող է գնալ", "Полей для хода"),
  none: t("This piece cannot move now.", "Այս խաղաքարն այժմ չի կարող քայլել։", "Эта фигура сейчас не может ходить."),
  white: t("White", "Սպիտակ", "Белый"),
  black: t("Black", "Սև", "Чёрный"),
  check: t("Check!", "Շախ։", "Шах!"),
  mate: t("Checkmate!", "Մատ։", "Мат!"),
  stalemate: t("Stalemate: a draw.", "Պատ՝ ոչ-ոքի։", "Пат: ничья."),
};

export const PIECE_NAMES: Record<Kind, Tr> = {
  k: t("king", "արքա", "король"),
  q: t("queen", "թագուհի", "ферзь"),
  r: t("rook", "նավակ", "ладья"),
  b: t("bishop", "փիղ", "слон"),
  n: t("knight", "ձի", "конь"),
  p: t("pawn", "զինվոր", "пешка"),
};
const GLYPH: Record<Kind, string> = { k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟" };

const S = 30, X0 = 16, Y0 = 4, SIZE = 8 * S;
const cx = (i: number) => X0 + file(i) * S + S / 2;
const cy = (i: number) => Y0 + (7 - rank(i)) * S + S / 2;
const ease = (p: number) => (p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2);

type Mark = { i: number; tone: "go" | "bad" | "dot" };
/** "e4 !e8 .d5 a5:d8" → squares to tint: plain green, ! red, . a blue dot; a:b fills a rectangle. */
export function parseMarks(s = ""): Mark[] {
  const out: Mark[] = [];
  for (const w of s.split(/[\s,]+/).filter(Boolean)) {
    const tone = w[0] === "!" ? "bad" : w[0] === "." ? "dot" : "go";
    const body = tone === "go" ? w : w.slice(1);
    const [a, b] = body.split(":").map(sq);
    if (b === undefined) out.push({ i: a, tone });
    else for (let f = Math.min(file(a), file(b)); f <= Math.max(file(a), file(b)); f++) for (let r = Math.min(rank(a), rank(b)); r <= Math.max(rank(a), rank(b)); r++) out.push({ i: r * 8 + f, tone });
  }
  return out;
}
/** "e2e4 !d1h5" → arrows: plain green, ! red. */
export function parseArrows(s = "") {
  return s.split(/[\s,]+/).filter(Boolean).map((w) => ({ bad: w[0] === "!", from: sq(w.replace("!", "").slice(0, 2)), to: sq(w.replace("!", "").slice(2, 4)) }));
}

function PieceGlyph({ k, c, x, y }: { k: Kind; c: "w" | "b"; x: number; y: number }) {
  return (
    <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="central" className="sim-chess-piece" fill={c === "w" ? "#fff" : "#111827"} stroke={c === "w" ? "#1f2937" : "#111827"} strokeWidth={c === "w" ? 1.6 : 0.6} paintOrder="stroke" style={{ fontSize: 26 }}>
      {GLYPH[k]}{"︎"}
    </text>
  );
}

function ChessBoard({ board, marks = [], arrows = [], last, sel, targets = [], moving, onTap, label }: {
  board: Board;
  marks?: Mark[];
  arrows?: ReturnType<typeof parseArrows>;
  last?: [number, number];
  sel?: number | null;
  targets?: number[];
  moving?: { from: number; to: number; p: number };
  onTap?: (i: number) => void;
  label: string;
}) {
  const kings = board.map((p, i) => (p?.t === "k" && inCheck(board, p.c) ? i : -1)).filter((i) => i >= 0);
  const cells = Array.from({ length: 64 }, (_, i) => i);
  return (
    <svg viewBox={`0 0 ${X0 + SIZE + 4} ${Y0 + SIZE + 16}`} className="sim-stage sim-chess" style={{ maxWidth: "22rem" }} role="img" aria-label={label}>
      <rect width={X0 + SIZE + 4} height={Y0 + SIZE + 16} fill="#fbfcff" />
      {cells.map((i) => (
        <rect key={i} x={cx(i) - S / 2} y={cy(i) - S / 2} width={S} height={S} fill={isLight(i) ? "#f0d9b5" : "#b58863"} />
      ))}
      {last ? last.map((i, k) => <rect key={`l${k}`} x={cx(i) - S / 2} y={cy(i) - S / 2} width={S} height={S} fill="#facc15" opacity={0.45} />) : null}
      {marks.filter((m) => m.tone !== "dot").map((m, k) => (
        <rect key={`m${k}`} x={cx(m.i) - S / 2} y={cy(m.i) - S / 2} width={S} height={S} fill={m.tone === "bad" ? "#ef4444" : "#22c55e"} opacity={0.5} />
      ))}
      {sel != null ? <rect x={cx(sel) - S / 2} y={cy(sel) - S / 2} width={S} height={S} fill="#38bdf8" opacity={0.55} /> : null}
      {kings.map((i) => <circle key={`k${i}`} cx={cx(i)} cy={cy(i)} r={14} fill="#ef4444" opacity={0.55} />)}
      <rect x={X0} y={Y0} width={SIZE} height={SIZE} fill="none" stroke="#7c5a3c" strokeWidth={1.5} />
      {Array.from({ length: 8 }, (_, k) => (
        <g key={`c${k}`} className="sim-tag" fill="#64748b">
          <text x={X0 + k * S + S / 2} y={Y0 + SIZE + 12} textAnchor="middle">{String.fromCharCode(97 + k)}</text>
          <text x={X0 / 2} y={Y0 + (7 - k) * S + S / 2 + 4} textAnchor="middle">{k + 1}</text>
        </g>
      ))}
      {board.map((p, i) => (p && i !== moving?.from ? <PieceGlyph key={i} k={p.t} c={p.c} x={cx(i)} y={cy(i)} /> : null))}
      {targets.map((i) => (board[i] ? <circle key={`t${i}`} cx={cx(i)} cy={cy(i)} r={13} fill="none" stroke="#0f766e" strokeWidth={3} opacity={0.75} /> : <circle key={`t${i}`} cx={cx(i)} cy={cy(i)} r={5} fill="#0f766e" opacity={0.6} />))}
      {marks.filter((m) => m.tone === "dot").map((m, k) => <circle key={`d${k}`} cx={cx(m.i)} cy={cy(m.i)} r={6} fill="#2563eb" opacity={0.75} />)}
      {moving && board[moving.from] ? (
        <PieceGlyph k={board[moving.from]!.t} c={board[moving.from]!.c} x={cx(moving.from) + (cx(moving.to) - cx(moving.from)) * ease(moving.p)} y={cy(moving.from) + (cy(moving.to) - cy(moving.from)) * ease(moving.p)} />
      ) : null}
      {arrows.map((a, k) => {
        const x1 = cx(a.from), y1 = cy(a.from), x2 = cx(a.to), y2 = cy(a.to), d = Math.hypot(x2 - x1, y2 - y1);
        return <Arrow key={`a${k}`} x1={x1} y1={y1} x2={x2 - ((x2 - x1) / d) * 6} y2={y2 - ((y2 - y1) / d) * 6} color={a.bad ? "#dc2626" : "#16a34a"} width={4} head={11} />;
      })}
      {onTap ? cells.map((i) => <rect key={`h${i}`} x={cx(i) - S / 2} y={cy(i) - S / 2} width={S} height={S} fill="transparent" style={{ cursor: "pointer" }} onClick={() => onTap(i)} aria-label={sqName(i)} />) : null}
    </svg>
  );
}

function endNote(end: ChessFrame["end"], lang: ArtLang) {
  if (!end) return null;
  return <Note tone={end === "stalemate" ? undefined : "good"}>{L(W[end], lang)}</Note>;
}

/* ---------- a scripted line, step by step ---------- */

function Lines({ spec, lang }: SimProps) {
  const set = CHESS_SETS[spec.opts.set ?? ""];
  const frames = useMemo(() => (set ? chessFrames(set) : []), [set]);
  const [i, setI] = useState(0);
  const [p, setP] = useState(Infinity);
  const prev = useRef(0);
  useEffect(() => {
    const n = frames[i]?.moves.length ?? 0;
    const forward = i === prev.current + 1;
    prev.current = i;
    if (!forward || !n) {
      setP(Infinity);
      return;
    }
    let id = 0;
    const start = performance.now();
    const tick = (now: number) => {
      // The frame time can be a little earlier than the start time.
      const v = Math.max(0, (now - start) / 600);
      setP(v);
      if (v < n) id = requestAnimationFrame(tick);
    };
    setP(0);
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [i, frames]);
  if (!set) return <pre className="art-unknown">chess {spec.opts.set}</pre>;
  const f = frames[i];
  const n = f.moves.length;
  const j = Math.max(0, Math.min(Math.floor(p), n));
  const done = j >= n;
  const board = j === 0 ? f.base : f.moves[j - 1].after;
  const mv = done ? undefined : f.moves[j];
  const lastMove = done ? f.moves[n - 1] : j > 0 ? f.moves[j - 1] : undefined;
  return (
    <ArtFrame kind="steps" title={L(set.title, lang)} body={spec.body || (set.hint ? L(set.hint, lang) : undefined)}>
      <StepPlayer lang={lang} caps={frames.map((x) => x.cap)} i={i} setI={setI}>
        <ChessBoard
          board={board}
          label={L(set.title, lang)}
          marks={done ? parseMarks(f.marks) : []}
          arrows={done ? parseArrows(f.arrows) : []}
          last={lastMove ? [lastMove.from, lastMove.to] : undefined}
          moving={mv ? { from: mv.from, to: mv.to, p: p - j } : undefined}
        />
        {done ? endNote(f.end, lang) : null}
      </StepPlayer>
    </ArtFrame>
  );
}

/* ---------- tap a piece, see its moves ---------- */

function Moves({ spec, lang }: SimProps) {
  const fen = spec.opts.fen ?? START;
  const start = useMemo(() => parseFen(fen) ?? parseFen(START)!, [fen]);
  const pick = spec.opts.pick ? sq(spec.opts.pick) : -1;
  const [board, setBoard] = useState(start);
  const [sel, setSel] = useState<number | null>(pick >= 0 ? pick : null);
  const [ep, setEp] = useState(-1);
  const [last, setLast] = useState<[number, number] | undefined>();
  const targets = sel != null ? legalMoves(board, sel, ep) : [];
  const tap = (i: number) => {
    if (sel != null && targets.includes(i)) {
      setEp(epAfter(board, sel, i));
      setBoard(play(board, sel, i));
      setLast([sel, i]);
      setSel(i);
      return;
    }
    setSel(board[i] ? i : null);
  };
  const reset = () => {
    setBoard(start);
    setSel(pick >= 0 ? pick : null);
    setEp(-1);
    setLast(undefined);
  };
  const p = sel != null ? board[sel] : null;
  return (
    <ArtFrame kind="experiment" title={L(W.board, lang)} body={spec.body || L(W.hintMoves, lang)}>
      <ChessBoard board={board} sel={sel} targets={targets} last={last} marks={parseMarks(spec.opts.marks)} arrows={parseArrows(spec.opts.arrows)} onTap={tap} label={L(W.board, lang)} />
      {p ? (
        <Readouts
          items={[
            [L(W.piece, lang), `${GLYPH[p.t]}︎ ${L(p.c === "w" ? W.white : W.black, lang)} ${L(PIECE_NAMES[p.t], lang)}, ${sqName(sel!)}`],
            [L(W.count, lang), String(targets.length)],
          ]}
        />
      ) : null}
      {p && !targets.length ? <Note>{L(W.none, lang)}</Note> : null}
      <div className="art-row">
        <button type="button" className="art-btn" onClick={reset}>{L(UI.reset, lang)}</button>
      </div>
    </ArtFrame>
  );
}

/* ---------- names of the squares ---------- */

function Squares({ spec, lang }: SimProps) {
  const board = useMemo(() => parseFen(spec.opts.fen ?? "8/8/8/8/8/8/8/8")!, [spec.opts.fen]);
  const [mode, setMode] = useState<"explore" | "find">("explore");
  const [sel, setSel] = useState<number | null>(null);
  const [goal, setGoal] = useState(() => Math.floor(Math.random() * 64));
  const [score, setScore] = useState(0);
  const [miss, setMiss] = useState<number | null>(null);
  const tap = (i: number) => {
    setSel(i);
    if (mode !== "find") return;
    if (i === goal) {
      setScore(score + 1);
      setMiss(null);
      let g = goal;
      while (g === goal) g = Math.floor(Math.random() * 64);
      setGoal(g);
    } else setMiss(i);
  };
  const info = (i: number) => `${sqName(i)}: ${L(isLight(i) ? W.light : W.dark, lang)}, ${L(W.fileW, lang)} ${sqName(i)[0]}, ${L(W.rankW, lang)} ${rank(i) + 1}`;
  return (
    <ArtFrame kind="experiment" title={L(W.board, lang)} body={spec.body || L(W.hintSquares, lang)}>
      <Choice value={mode} onChange={(m) => { setMode(m); setMiss(null); setSel(null); }} options={[["explore", L(W.explore, lang)], ["find", L(W.findMode, lang)]]} />
      {mode === "find" ? <p className="math-chart-title">{L(W.find, lang)} <b>{sqName(goal)}</b></p> : null}
      <ChessBoard board={board} sel={mode === "explore" ? sel : null} marks={[...parseMarks(spec.opts.marks), ...(miss != null ? [{ i: miss, tone: "bad" as const }] : [])]} onTap={tap} label={L(W.board, lang)} />
      {mode === "explore" && sel != null ? <Note>{info(sel)}</Note> : null}
      {mode === "find" && miss != null ? <Note tone="bad">{L(W.wrong(sqName(miss)), lang)}</Note> : null}
      {mode === "find" && miss == null && score > 0 ? <Note tone="good">{L(W.right, lang)}</Note> : null}
      {mode === "find" ? <Readouts items={[[L(W.found, lang), String(score)]]} /> : null}
    </ArtFrame>
  );
}

export default function Chess(props: SimProps) {
  const mode = props.spec.opts.mode ?? "play";
  if (mode === "moves") return <Moves {...props} />;
  if (mode === "squares") return <Squares {...props} />;
  return <Lines {...props} />;
}
