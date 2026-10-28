/**
 * The daily puzzle: one puzzle a day for grades 1–6 (junior) and one for
 * grades 7–12 (senior), the same for everyone, like Wordle. A pupil gets two
 * tries; a wrong first try opens a hint. Pure: days are YYYY-MM-DD in UTC,
 * like the streak (src/lib/motivation.ts).
 */
import { addDays, daysBetween } from "./exam-plan";
import type { PuzzleLevel } from "@/server/db/schema";

export type { PuzzleLevel };
export const PUZZLE_LEVELS = ["junior", "senior"] as const satisfies readonly PuzzleLevel[];

/** Answers a pupil may send for one puzzle. */
export const PUZZLE_TRIES = 2;

/** Puzzle #1 was the puzzle of this day. */
export const PUZZLE_EPOCH = "2026-10-01";

/** The puzzle's number, shown as "#28" and in the shared result. */
export const puzzleNumber = (day: string) => daysBetween(PUZZLE_EPOCH, day) + 1;

/**
 * Which puzzle of a bank of `n` a day gets. The bank is walked in order, so
 * themes written next to each other (numbers, logic, words, chess…) follow
 * each other day by day, and it starts over when it runs out.
 */
export function puzzleIndex(day: string, n: number) {
  const k = daysBetween(PUZZLE_EPOCH, day);
  return ((k % n) + n) % n;
}

/** The level a pupil's grade starts on (anyone can switch). */
export const levelForGrade = (grade: number | null | undefined): PuzzleLevel => (grade && grade >= 7 ? "senior" : "junior");

export type PuzzleState = { tries: number; solved: boolean };

/** Whether the pupil can still answer, and whether the hint is open. */
export function puzzleStatus(s: PuzzleState) {
  const over = s.solved || s.tries >= PUZZLE_TRIES;
  return { over, hint: !s.solved && s.tries >= 1, failed: !s.solved && s.tries >= PUZZLE_TRIES };
}

/**
 * Days in a row with a solved puzzle (either level), up to today, or up to
 * yesterday while today's is still open. No freeze: it is a game, not the
 * learning streak.
 */
export function puzzleStreak(solvedDays: Iterable<string>, today: string) {
  const days = new Set(solvedDays);
  let d = days.has(today) ? today : addDays(today, -1);
  let n = 0;
  while (days.has(d)) {
    n++;
    d = addDays(d, -1);
  }
  return n;
}

/** The result to share, Wordle style: the number, the tries as squares, and the streak. No answer in it. */
export function shareText(o: { title: string; day: string; tries: number; solved: boolean; streak: number; streakLabel: string; url: string }) {
  const squares = Array.from({ length: PUZZLE_TRIES }, (_, i) => (i < o.tries - (o.solved ? 1 : 0) ? "🟥" : i === o.tries - 1 && o.solved ? "🟩" : "⬜")).join("");
  return `${o.title} #${puzzleNumber(o.day)} ${squares}${o.streak > 1 ? `\n🔥 ${o.streakLabel}` : ""}\n${o.url}`;
}
