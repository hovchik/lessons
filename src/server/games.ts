import { and, eq, max } from "drizzle-orm";
import { randomUUID } from "node:crypto";
import { getDb, schema } from "./db/client";
import { CALM_QUESTIONS, parseCalcGameId } from "@/lib/calc";
import { parseWordsGameId } from "@/lib/words";

/**
 * Speed games: each finished round is kept, and the page shows the pupil's
 * own best. There is no leaderboard on purpose (see src/lib/motivation.ts),
 * and rounds never count as answer events, so they don't feed the streak.
 */

export type GameMode = "sprint" | "calm";

export const validGameId = (id: string) => parseCalcGameId(id) !== null || parseWordsGameId(id) !== null;

/** A sprint can't honestly reach more than this in a minute (one answer every 0.3 s). */
const SPRINT_MAX = 200;

export function validRound(mode: GameMode, score: number, total: number) {
  if (!Number.isInteger(score) || !Number.isInteger(total) || score < 0 || score > total) return false;
  return mode === "calm" ? total === CALM_QUESTIONS : total <= SPRINT_MAX;
}

/** "gameId:mode" → best score, for the pupil's games. */
export async function getBests(userId: string): Promise<Record<string, number>> {
  const db = await getDb();
  const g = schema.gameScores;
  const rows = await db
    .select({ gameId: g.gameId, mode: g.mode, best: max(g.score) })
    .from(g)
    .where(eq(g.userId, userId))
    .groupBy(g.gameId, g.mode)
    .all();
  return Object.fromEntries(rows.map((r) => [`${r.gameId}:${r.mode}`, r.best ?? 0]));
}

/** Saves a finished round; says what the best was before it. */
export async function saveRound(userId: string, gameId: string, mode: GameMode, score: number, total: number): Promise<{ previousBest: number | null } | null> {
  if (!validGameId(gameId) || !validRound(mode, score, total)) return null;
  const db = await getDb();
  const g = schema.gameScores;
  const before = await db
    .select({ best: max(g.score) })
    .from(g)
    .where(and(eq(g.userId, userId), eq(g.gameId, gameId), eq(g.mode, mode)))
    .get();
  await db.insert(g).values({ id: randomUUID(), userId, gameId, mode, score, total, createdAt: new Date().toISOString() }).run();
  return { previousBest: before?.best ?? null };
}
