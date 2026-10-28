import { and, eq, lte, sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import type { AnswerSource, StoredCard } from "./db/schema";
import { updateRatings } from "./ability";
import { newId } from "./user-auth";
import { parseItemId, scheduleAnswer } from "@/lib/memory";
import type { QuizResponse } from "@/lib/questions";

/**
 * The learner model: every answered question is logged in `answer_events`,
 * moves its spaced-repetition card in `review_cards` and, for lesson questions,
 * the pupil's ability and the question's difficulty (ability.ts). Scores and lesson
 * completion stay in progress.ts; this file only knows about single questions.
 */

export type AnswerInput = {
  itemId: string;
  source: AnswerSource;
  refId: string;
  courseId?: string | null;
  correct: boolean;
  choice?: number | null;
  /** The answer to a question that is not multiple choice. */
  response?: QuizResponse | null;
  confidence?: number | null;
  ms?: number | null;
  hintUsed?: boolean;
  /** How many options the question has, so a lucky guess counts for less in the ratings. */
  options?: number | null;
  /**
   * False logs the answer without moving its card: a second try after a hint,
   * or a lesson's quick check (which Daily Review cannot show).
   */
  schedule?: boolean;
};

/**
 * Logs the answers and reschedules their cards. Safe to call with an empty list.
 * Two submissions can overlap (two tabs, a double click), so each card is
 * updated optimistically: the write only lands if the card still has the
 * repetition count it was read with, otherwise it is read again and retried.
 * Returns each answer's card as it stands after that answer (null when not scheduled).
 */
export async function recordAnswers(userId: string, answers: AnswerInput[], now = new Date()): Promise<(StoredCard | null)[]> {
  if (answers.length === 0) return [];
  const db = await getDb();
  const rc = schema.reviewCards;
  const at = now.toISOString();

  // Ratings first: a pupil's first rating in a skill starts from their cards as they were before these answers.
  await updateRatings(userId, answers, now);

  // The log is append-only, so it can go in first, in one transaction.
  const events = answers.map((a) =>
    db.insert(schema.answerEvents).values({
      id: newId(),
      userId,
      itemId: a.itemId,
      source: a.source,
      refId: a.refId,
      courseId: a.courseId ?? null,
      correct: a.correct,
      choice: a.choice ?? null,
      response: a.response ?? null,
      confidence: a.confidence ?? null,
      ms: a.ms ?? null,
      hintUsed: a.hintUsed ?? false,
      createdAt: at,
    }),
  );
  await db.batch(events as [(typeof events)[number], ...(typeof events)[number][]]);

  // Answers are applied in order, so the same question twice in one call chains its card.
  const out: (StoredCard | null)[] = [];
  for (const a of answers) {
    if (a.schedule === false) {
      out.push(null);
      continue;
    }
    for (let attempt = 0; ; attempt++) {
      const cur = await db
        .select({ card: rc.card, reps: rc.reps })
        .from(rc)
        .where(and(eq(rc.userId, userId), eq(rc.itemId, a.itemId)))
        .get();
      const card = scheduleAnswer(cur?.card ?? null, a.correct, now, a.confidence);
      const row = { due: card.due, card, reps: card.reps, lapses: card.lapses, lastCorrect: a.correct, updatedAt: at };
      const res = cur
        ? await db
            .update(rc)
            .set(row)
            .where(and(eq(rc.userId, userId), eq(rc.itemId, a.itemId), eq(rc.reps, cur.reps)))
            .run()
        : await db
            .insert(rc)
            // The card belongs to where the question lives, even when it is first met in a warm-up.
            .values({ userId, itemId: a.itemId, source: parseItemId(a.itemId)?.source ?? a.source, refId: a.refId, courseId: a.courseId ?? null, ...row })
            .onConflictDoNothing()
            .run();
      if (res.rowsAffected > 0) {
        out.push(card);
        break;
      }
      if (attempt >= 4) throw new Error(`review card ${a.itemId} kept changing while it was being updated`);
    }
  }
  return out;
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
