import { createEmptyCard, fsrs, generatorParameters, Rating, type Card } from "ts-fsrs";
import type { AnswerSource, StoredCard } from "@/server/db/schema";

/**
 * Spaced-repetition scheduling with FSRS (https://github.com/open-spaced-repetition).
 * Every question a pupil answers becomes a card; a right answer pushes the next
 * review further out, a wrong one brings it back by tomorrow at the latest.
 */

/** Stable id of a question: lesson quizzes and exams are addressed by position. */
export const quizItemId = (lessonId: string, index: number) => `quiz:${lessonId}#${index}`;
export const examItemId = (examId: string, index: number) => `exam:${examId}#${index}`;

/** Splits an item id back into where it lives. */
export function parseItemId(itemId: string): { source: AnswerSource; refId: string; index: number } | null {
  const m = /^(quiz|exam|check):(.+)#(\d+)$/.exec(itemId);
  return m ? { source: m[1] as AnswerSource, refId: m[2], index: Number(m[3]) } : null;
}

/**
 * School material is reviewed within a school year, so no interval goes past
 * 180 days. Short-term (minute) steps are off: the app reviews once a day.
 */
const scheduler = fsrs(generatorParameters({ enable_short_term: false, enable_fuzz: false, maximum_interval: 180, request_retention: 0.9 }));

const DAY = 24 * 60 * 60 * 1000;

/** How an answer counts for FSRS. Confidence (0 guessing, 1 unsure, 2 sure) refines a right answer. */
export function ratingFor(correct: boolean, confidence?: number | null) {
  if (!correct) return Rating.Again;
  if (confidence === 0) return Rating.Hard;
  return Rating.Good;
}

const toStored = (c: Card): StoredCard => ({
  due: c.due.toISOString(),
  stability: c.stability,
  difficulty: c.difficulty,
  elapsed_days: c.elapsed_days,
  scheduled_days: c.scheduled_days,
  learning_steps: c.learning_steps,
  reps: c.reps,
  lapses: c.lapses,
  state: c.state,
  last_review: c.last_review ? c.last_review.toISOString() : null,
});

const fromStored = (s: StoredCard): Card => ({
  ...s,
  due: new Date(s.due),
  last_review: s.last_review ? new Date(s.last_review) : undefined,
});

/** The card after one answer. `prev` is null the first time the pupil meets the question. */
export function scheduleAnswer(prev: StoredCard | null, correct: boolean, now: Date, confidence?: number | null): StoredCard {
  const card = prev ? fromStored(prev) : createEmptyCard(now);
  const next = scheduler.next(card, now, ratingFor(correct, confidence)).card;
  // A forgotten question comes back by tomorrow, even if FSRS would wait longer.
  if (!correct && next.due.getTime() > now.getTime() + DAY) next.due = new Date(now.getTime() + DAY);
  return toStored(next);
}

/** Chance (0..1) that the pupil still remembers the item at `now`. */
export function recallChance(card: StoredCard, now: Date): number {
  return scheduler.get_retrievability(fromStored(card), now, false);
}
