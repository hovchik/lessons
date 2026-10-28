/**
 * The live class quiz, without any storage: phases, scoring and the
 * leaderboard. The teacher's screen shows the question; pupils answer on
 * their phones with four coloured buttons. Pure, so the tests can drive a
 * whole game with a fake clock.
 */

export type LivePhase = "lobby" | "question" | "reveal" | "podium";

export const LIVE_SECONDS = [10, 20, 30] as const;
export const LIVE_COUNTS = [5, 10, 15] as const;
export const LIVE_MAX_PLAYERS = 60;
export const NAME_MAX = 20;
/** The four answer colours and shapes, in option order (shapes help colour-blind pupils). */
export const LIVE_SHAPES = ["triangle", "diamond", "circle", "square"] as const;

/**
 * Points for an answer: nothing when wrong; when right, 500 plus up to 500
 * more for speed, so a right answer always beats a fast wrong one.
 */
export function livePoints(correct: boolean, elapsedMs: number, limitMs: number): number {
  if (!correct) return 0;
  const left = Math.max(0, Math.min(1, 1 - elapsedMs / limitMs));
  return 500 + Math.round(500 * left);
}

/** A tidy nickname: trimmed, spaces squeezed, at most NAME_MAX characters; empty if nothing is left. */
export function cleanName(raw: string): string {
  return [...raw.replace(/[\u0000-\u001f\u007f]/g, "").replace(/\s+/g, " ").trim()].slice(0, NAME_MAX).join("").trim();
}

/** A name not yet taken in the game: "Ani", then "Ani 2", "Ani 3"… */
export function uniqueName(name: string, taken: string[]): string {
  const lower = new Set(taken.map((n) => n.toLowerCase()));
  if (!lower.has(name.toLowerCase())) return name;
  for (let i = 2; ; i++) {
    const n = `${[...name].slice(0, NAME_MAX - String(i).length - 1).join("")} ${i}`;
    if (!lower.has(n.toLowerCase())) return n;
  }
}

export type Standing = { id: string; name: string; score: number; joinedAt: number };

/** Best score first; on a tie, whoever joined first. Ranks are shared on equal scores. */
export function leaderboard<T extends Standing>(players: T[]): (T & { rank: number })[] {
  const sorted = [...players].sort((a, b) => b.score - a.score || a.joinedAt - b.joinedAt);
  let rank = 0;
  return sorted.map((p, i) => {
    if (i === 0 || p.score !== sorted[i - 1].score) rank = i + 1;
    return { ...p, rank };
  });
}

/** Whether an open question should close: time is up, or everyone has answered. */
export function questionOver(now: number, endsAt: number, answered: number, players: number): boolean {
  return now >= endsAt || (players > 0 && answered >= players);
}

/** A 6-digit game PIN that doesn't start with 0 (easier to read out). */
export function makePin(random: () => number = Math.random): string {
  return String(100000 + Math.floor(random() * 900000));
}
