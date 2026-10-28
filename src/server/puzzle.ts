import { and, desc, eq } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import type { I18nText } from "./db/schema";
import { PUZZLES, type Puzzle } from "@/content/puzzles";
import { isoDay } from "@/lib/exam-plan";
import { PUZZLE_LEVELS, PUZZLE_TRIES, puzzleIndex, puzzleNumber, puzzleStatus, puzzleStreak, type PuzzleLevel, type PuzzleState } from "@/lib/puzzle";
import { displayForm, recordFor, validResponse, type Key, type QuizResponse, type Shown } from "@/lib/questions";

/**
 * The daily puzzle on the server: which puzzle today is, checking an answer
 * (the key never reaches the page before the puzzle is over) and each
 * pupil's result and puzzle streak. Guests can play too; their tries are
 * kept in the browser and sent along with the answer.
 */

export type PuzzleView = {
  day: string;
  number: number;
  level: PuzzleLevel;
  id: string;
  theme: Puzzle["theme"];
  shown: Shown<I18nText>;
  visual: string | null;
};

/** What the page shows once the puzzle is over: the answer and why. */
export type PuzzleReveal = { key: Key<I18nText>; explanation: I18nText | null };

export function puzzleOf(day: string, level: PuzzleLevel) {
  const bank = PUZZLES[level];
  const puzzle = bank[puzzleIndex(day, bank.length)];
  const form = displayForm(puzzle.q, `puzzle:${puzzle.id}`);
  return { puzzle, ...form };
}

export function puzzleView(day: string, level: PuzzleLevel): PuzzleView {
  const { puzzle, shown } = puzzleOf(day, level);
  return { day, number: puzzleNumber(day), level, id: puzzle.id, theme: puzzle.theme, shown, visual: puzzle.visual ?? null };
}

const reveal = (day: string, level: PuzzleLevel): PuzzleReveal => {
  const { puzzle, key } = puzzleOf(day, level);
  return { key, explanation: puzzle.q.explanation ?? null };
};

async function stateOf(userId: string, day: string, level: PuzzleLevel): Promise<PuzzleState> {
  const db = await getDb();
  const p = schema.puzzleResults;
  const row = await db
    .select({ tries: p.tries, solved: p.solved })
    .from(p)
    .where(and(eq(p.userId, userId), eq(p.day, day), eq(p.level, level)))
    .get();
  return row ?? { tries: 0, solved: false };
}

/** Days with a solved puzzle (either level), newest first. */
async function solvedDays(userId: string) {
  const db = await getDb();
  const p = schema.puzzleResults;
  const rows = await db.selectDistinct({ day: p.day }).from(p).where(and(eq(p.userId, userId), eq(p.solved, true))).orderBy(desc(p.day)).limit(400).all();
  return rows.map((r) => r.day);
}

export async function getPuzzleStreak(userId: string, now = new Date()) {
  return puzzleStreak(await solvedDays(userId), isoDay(now));
}

/** Everything the puzzle page needs for one level; `state` is null for a guest (the browser keeps theirs). */
export async function getPuzzlePage(userId: string | null, level: PuzzleLevel, now = new Date()) {
  const day = isoDay(now);
  const view = puzzleView(day, level);
  if (!userId) return { view, state: null, reveal: null, hint: null, streak: 0 };
  const state = await stateOf(userId, day, level);
  const s = puzzleStatus(state);
  return {
    view,
    state,
    reveal: s.over ? reveal(day, level) : null,
    hint: s.hint && !s.over ? puzzleOf(day, level).puzzle.hint : null,
    streak: await getPuzzleStreak(userId, now),
  };
}

/** The home page card: today's number and, for a pupil, how both levels went. */
export async function getPuzzleCard(userId: string | null, now = new Date()) {
  const day = isoDay(now);
  const levels = await Promise.all(
    PUZZLE_LEVELS.map(async (level) => ({ level, theme: puzzleOf(day, level).puzzle.theme, state: userId ? await stateOf(userId, day, level) : null })),
  );
  return { day, number: puzzleNumber(day), levels, streak: userId ? await getPuzzleStreak(userId, now) : 0 };
}

export type PuzzleAnswer = {
  correct: boolean;
  state: PuzzleState;
  /** The hint, once the first try was wrong and one try is left. */
  hint: I18nText | null;
  /** The answer and explanation, once the puzzle is over. */
  reveal: PuzzleReveal | null;
  streak: number;
};

/**
 * Checks an answer to today's puzzle. A pupil's tries are counted here, so a
 * finished puzzle stays finished; a guest sends the tries they have used.
 * Null when the answer does not fit the puzzle.
 */
export async function answerPuzzle(input: { userId: string | null; level: PuzzleLevel; response: QuizResponse; guestTries?: number; now?: Date }): Promise<PuzzleAnswer | null> {
  const now = input.now ?? new Date();
  const day = isoDay(now);
  const { puzzle, shown, key } = puzzleOf(day, input.level);
  if (!validResponse(shown, input.response)) return null;
  const { correct } = recordFor(shown, key, input.response);

  let before: PuzzleState;
  if (input.userId) before = await stateOf(input.userId, day, input.level);
  else before = { tries: Math.max(0, Math.min(PUZZLE_TRIES, input.guestTries ?? 0)), solved: false };

  // An answer after the end changes nothing: the page just shows the result again.
  const after: PuzzleState = puzzleStatus(before).over ? before : { tries: before.tries + 1, solved: correct };
  if (input.userId && after !== before) {
    const db = await getDb();
    const at = now.toISOString();
    const p = schema.puzzleResults;
    // Only over the state it was read in, so a double click cannot buy a third try.
    const res = await db
      .insert(p)
      .values({ userId: input.userId, day, level: input.level, puzzleId: puzzle.id, ...after, updatedAt: at })
      .onConflictDoUpdate({ target: [p.userId, p.day, p.level], set: { ...after, updatedAt: at }, setWhere: and(eq(p.tries, before.tries), eq(p.solved, false)) })
      .run();
    if (res.rowsAffected === 0) return answerPuzzle({ ...input, now });
  }
  const s = puzzleStatus(after);
  return {
    correct: after === before ? before.solved : correct,
    state: after,
    hint: s.hint && !s.over ? puzzle.hint : null,
    reveal: s.over ? reveal(day, input.level) : null,
    streak: input.userId ? await getPuzzleStreak(input.userId, now) : 0,
  };
}
