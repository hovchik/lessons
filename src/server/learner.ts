import { and, eq, inArray, lte, sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import type { AnswerSource } from "./db/schema";
import { newId } from "./user-auth";
import { scheduleAnswer } from "@/lib/memory";

/**
 * The learner model: every answered question is logged in `answer_events` and
 * moves its spaced-repetition card in `review_cards`. Scores and lesson
 * completion stay in progress.ts; this file only knows about single questions.
 */

export type AnswerInput = {
  itemId: string;
  source: AnswerSource;
  refId: string;
  courseId?: string | null;
  correct: boolean;
  choice?: number | null;
  confidence?: number | null;
  ms?: number | null;
  hintUsed?: boolean;
};

/** Logs the answers and reschedules their cards. Safe to call with an empty list. */
export async function recordAnswers(userId: string, answers: AnswerInput[], now = new Date()) {
  if (answers.length === 0) return;
  const db = await getDb();
  const rc = schema.reviewCards;
  const itemIds = [...new Set(answers.map((a) => a.itemId))];
  const existing = await db
    .select({ itemId: rc.itemId, card: rc.card })
    .from(rc)
    .where(and(eq(rc.userId, userId), inArray(rc.itemId, itemIds)))
    .all();
  const cards = new Map(existing.map((r) => [r.itemId, r.card]));
  const at = now.toISOString();

  const writes = answers.flatMap((a) => {
    // The same question twice in one call (not expected, but cheap to get right): chain the cards.
    const card = scheduleAnswer(cards.get(a.itemId) ?? null, a.correct, now, a.confidence);
    cards.set(a.itemId, card);
    const row = { due: card.due, card, reps: card.reps, lapses: card.lapses, lastCorrect: a.correct, updatedAt: at };
    return [
      db.insert(schema.answerEvents).values({
        id: newId(),
        userId,
        itemId: a.itemId,
        source: a.source,
        refId: a.refId,
        courseId: a.courseId ?? null,
        correct: a.correct,
        choice: a.choice ?? null,
        confidence: a.confidence ?? null,
        ms: a.ms ?? null,
        hintUsed: a.hintUsed ?? false,
        createdAt: at,
      }),
      db
        .insert(rc)
        .values({ userId, itemId: a.itemId, source: a.source, refId: a.refId, courseId: a.courseId ?? null, ...row })
        .onConflictDoUpdate({ target: [rc.userId, rc.itemId], set: row }),
    ];
  });
  // One transaction: the log and the cards never disagree.
  await db.batch(writes as [(typeof writes)[number], ...(typeof writes)[number][]]);
}

/** How many questions the pupil holds in memory, and how many are due for review now. */
export async function getMemoryStats(userId: string, now = new Date()) {
  const db = await getDb();
  const rc = schema.reviewCards;
  const row = await db
    .select({
      cards: sql<number>`count(*)`,
      due: sql<number>`sum(case when ${rc.due} <= ${now.toISOString()} then 1 else 0 end)`,
      lapses: sql<number>`coalesce(sum(${rc.lapses}), 0)`,
    })
    .from(rc)
    .where(eq(rc.userId, userId))
    .get();
  const answers = (await db.select({ n: sql<number>`count(*)` }).from(schema.answerEvents).where(eq(schema.answerEvents.userId, userId)).get())?.n ?? 0;
  return { cards: Number(row?.cards ?? 0), due: Number(row?.due ?? 0), lapses: Number(row?.lapses ?? 0), answers: Number(answers) };
}

/** Cards due by `now`, most overdue first. The Daily Review builds its queue from these. */
export async function getDueCards(userId: string, now = new Date(), limit = 50) {
  const db = await getDb();
  const rc = schema.reviewCards;
  return db
    .select()
    .from(rc)
    .where(and(eq(rc.userId, userId), lte(rc.due, now.toISOString())))
    .orderBy(rc.due)
    .limit(limit)
    .all();
}
