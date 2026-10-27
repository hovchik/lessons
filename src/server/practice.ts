import { and, eq, inArray } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import type { I18nText } from "./db/schema";
import { expectedScore, getItemRatings, getSkillRatings } from "./ability";
import { recordAnswers } from "./learner";
import { getMastery, skillQuestions, type SkillQuestion } from "./mastery";
import { pickNext, predict, stretchOf, type Stretch } from "@/lib/elo";
import { displayForm, guessCount, recordFor, validResponse, type QuizResponse, type Shown } from "@/lib/questions";

/**
 * Adaptive practice of one skill: one question at a time, each picked so the
 * pupil has about a three-in-four chance of getting it right (src/lib/elo.ts),
 * with the answer and explanation straight after.
 */

/** Questions in one practice round. */
export const PRACTICE_SESSION_SIZE = 10;

/** A question answered this recently waits until the others have had a turn. */
const RECENT_MS = 15 * 60 * 1000;

export type PracticeQuestion = { itemId: string; lessonTitle: I18nText; shown: Shown<I18nText>; stretch: Stretch };

const guesses = (q: SkillQuestion) => guessCount(displayForm(q.q, q.itemId).shown);

/** How ready the pupil is for the skill: their expected share of right first tries over all its questions, 0..100. */
async function readiness(userId: string, skillId: string, all: SkillQuestion[]) {
  const [items, skills] = await Promise.all([getItemRatings(all.map((q) => ({ itemId: q.itemId, options: guesses(q) }))), getSkillRatings(userId, [skillId])]);
  const ability = skills.get(skillId)!.ability;
  return { ability, items, percent: Math.round(expectedScore(ability, all.map((q) => ({ difficulty: items.get(q.itemId)!.difficulty, options: guesses(q) }))) * 100) };
}

/**
 * The next question for this pupil, leaving out the ones already met this
 * round (`seen`). `results` are this round's answers so far, oldest first.
 * Null when the skill does not exist; `question` is null when nothing is left.
 */
export async function nextPracticeQuestion(userId: string, skillId: string, opts: { seen?: string[]; results?: boolean[]; now?: Date } = {}) {
  const { seen = [], results = [], now = new Date() } = opts;
  const data = await skillQuestions(skillId);
  if (!data) return null;
  const all = data.byLesson.flat();
  const { ability, items, percent } = await readiness(userId, skillId, all);
  const skip = new Set(seen);
  const pool = all.filter((q) => !skip.has(q.itemId));
  const db = await getDb();
  const rc = schema.reviewCards;
  const cards = pool.length
    ? await db
        .select({ itemId: rc.itemId, lastCorrect: rc.lastCorrect, updatedAt: rc.updatedAt })
        .from(rc)
        .where(and(eq(rc.userId, userId), inArray(rc.itemId, pool.map((q) => q.itemId))))
        .all()
    : [];
  const card = new Map(cards.map((c) => [c.itemId, c]));
  const recentSince = new Date(now.getTime() - RECENT_MS).toISOString();
  const p = new Map(pool.map((q) => [q.itemId, predict(ability, items.get(q.itemId)!.difficulty, guesses(q))]));
  const struggling = results.length >= 2 && !results[results.length - 1] && !results[results.length - 2];
  const pick = pickNext(
    pool.map((q) => {
      const c = card.get(q.itemId);
      return { itemId: q.itemId, p: p.get(q.itemId)!, lastWrong: !!c && !c.lastCorrect, recent: !!c && c.updatedAt >= recentSince };
    }),
    { struggling },
  );
  const q = pick ? pool.find((x) => x.itemId === pick.itemId)! : null;
  const question: PracticeQuestion | null = q ? { itemId: q.itemId, lessonTitle: q.lessonTitle, shown: displayForm(q.q, q.itemId).shown, stretch: stretchOf(pick!.p) } : null;
  return { skill: data.skill, question, readiness: percent, total: Math.min(PRACTICE_SESSION_SIZE, all.length) };
}

/**
 * Checks one practice answer on the server, records it (moving the card and
 * both ratings) and picks the next question. `seen` and `results` are the
 * round so far, before this answer. Null for a question outside the skill or
 * an answer that does not fit it.
 */
export async function answerPractice(input: {
  userId: string;
  skillId: string;
  itemId: string;
  response: QuizResponse;
  confidence?: number | null;
  ms?: number | null;
  seen?: string[];
  results?: boolean[];
  now?: Date;
}) {
  const { userId, skillId, seen = [], results = [] } = input;
  const now = input.now ?? new Date();
  const data = await skillQuestions(skillId);
  if (!data) return null;
  const all = data.byLesson.flat();
  const q = all.find((x) => x.itemId === input.itemId);
  const form = q ? displayForm(q.q, q.itemId) : null;
  if (!q || !form || !validResponse(form.shown, input.response)) return null;
  const rec = recordFor(form.shown, form.key, input.response);
  const { correct } = rec;
  await recordAnswers(
    userId,
    [{ itemId: q.itemId, source: "practice", refId: q.lessonId, courseId: data.skill.courseId, ...rec, confidence: input.confidence ?? null, ms: input.ms ?? null }],
    now,
  );
  const round = [...new Set([...seen, q.itemId])];
  const next = round.length >= PRACTICE_SESSION_SIZE ? null : await nextPracticeQuestion(userId, skillId, { seen: round, results: [...results, correct], now });
  // At the end of the round the pupil sees where the skill stands now.
  const level = next?.question ? null : ((await getMastery(userId, [data.skill.courseId])).find((m) => m.skillId === skillId)?.level ?? "none");
  return {
    correct,
    key: form.key,
    explanation: q.q.explanation ?? null,
    lessonHref: `/${data.skill.subjectId}/${data.skill.grade}/${q.lessonSlug}`,
    next: next?.question ?? null,
    readiness: next?.readiness ?? (await readiness(userId, skillId, all)).percent,
    level,
  };
}
