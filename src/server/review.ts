import { and, desc, eq, inArray, lte, sql } from "drizzle-orm";
import { cache } from "react";
import { getDb, schema } from "./db/client";
import type { AnswerSource, I18nText, QuizQuestion } from "./db/schema";
import { recordAnswers } from "./learner";
import { parseItemId } from "@/lib/memory";
import { displayForm, recordFor, validResponse, type Key, type QuizResponse, type Shown } from "@/lib/questions";

/**
 * Daily Review and the mistake notebook, built on the learner model
 * (learner.ts): which questions are ready, what they say, and how a review
 * answer is recorded.
 */

/** Questions in one Daily Review session (about ten minutes). */
export const REVIEW_SESSION_SIZE = 10;

/**
 * FSRS schedules in whole days, so a card due later today is ready now: a
 * question missed in the evening is in the next morning's review.
 */
const LOOKAHEAD_MS = 12 * 60 * 60 * 1000;
export const readyBy = (now: Date) => new Date(now.getTime() + LOOKAHEAD_MS);

export type ReviewItem = {
  itemId: string;
  source: AnswerSource;
  courseId: string | null;
  subjectId: string | null;
  subjectName: I18nText | null;
  subjectColor: string | null;
  grade: number | null;
  /** The lesson or exam the question comes from. */
  refTitle: I18nText;
  /** Where to read up on it. */
  href: string | null;
  /** The question as shown (order and match items mixed) and its key. */
  shown: Shown<I18nText>;
  key: Key<I18nText>;
  explanation: I18nText | null;
  lastCorrect: boolean;
  lapses: number;
};

const form = (q: QuizQuestion, itemId: string) => ({ ...displayForm(q, itemId), explanation: q.explanation ?? null });

export type CardRef = { itemId: string; courseId: string | null; lastCorrect: boolean; lapses: number };

/**
 * Looks up the question behind each card. Cards whose lesson or exam is gone,
 * or whose question no longer exists, are returned in `gone`; cards whose
 * lesson is only unpublished for now are skipped.
 */
export async function resolveItems(cards: CardRef[]): Promise<{ items: ReviewItem[]; gone: string[] }> {
  const db = await getDb();
  const parsed = cards.map((c) => ({ card: c, id: parseItemId(c.itemId) }));
  const lessonIds = [...new Set(parsed.filter((p) => p.id?.source === "quiz").map((p) => p.id!.refId))];
  const examIds = [...new Set(parsed.filter((p) => p.id?.source === "exam").map((p) => p.id!.refId))];

  const lessons = lessonIds.length
    ? await db
        .select({ id: schema.lessons.id, slug: schema.lessons.slug, title: schema.lessons.title, quiz: schema.lessons.quiz, status: schema.lessons.status, courseId: schema.lessons.courseId })
        .from(schema.lessons)
        .where(inArray(schema.lessons.id, lessonIds))
        .all()
    : [];
  const exams = examIds.length
    ? await db
        .select({ id: schema.exams.id, title: schema.exams.title, questions: schema.exams.questions, status: schema.exams.status, subjectId: schema.exams.subjectId, grade: schema.exams.grade })
        .from(schema.exams)
        .where(inArray(schema.exams.id, examIds))
        .all()
    : [];
  const courseIds = [...new Set([...lessons.map((l) => l.courseId), ...cards.map((c) => c.courseId).filter((c): c is string => !!c)])];
  const courses = courseIds.length
    ? await db
        .select({ id: schema.courses.id, grade: schema.courses.grade, subjectId: schema.subjects.id, subjectName: schema.subjects.name, subjectColor: schema.subjects.color })
        .from(schema.courses)
        .innerJoin(schema.subjects, eq(schema.courses.subjectId, schema.subjects.id))
        .where(inArray(schema.courses.id, courseIds))
        .all()
    : [];
  const lessonById = new Map(lessons.map((l) => [l.id, l]));
  const examById = new Map(exams.map((e) => [e.id, e]));
  const courseById = new Map(courses.map((c) => [c.id, c]));

  const items: ReviewItem[] = [];
  const gone: string[] = [];
  for (const { card, id } of parsed) {
    if (!id) {
      gone.push(card.itemId);
      continue;
    }
    if (id.source === "quiz") {
      const l = lessonById.get(id.refId);
      const q = l?.quiz[id.index];
      if (!l || !q) gone.push(card.itemId);
      if (!l || !q || l.status !== "published") continue;
      const c = courseById.get(l.courseId);
      items.push({
        itemId: card.itemId,
        source: "quiz",
        courseId: l.courseId,
        subjectId: c?.subjectId ?? null,
        subjectName: c?.subjectName ?? null,
        subjectColor: c?.subjectColor ?? null,
        grade: c?.grade ?? null,
        refTitle: l.title,
        href: c ? `/${c.subjectId}/${c.grade}/${l.slug}` : null,
        ...form(q, card.itemId),
        lastCorrect: card.lastCorrect,
        lapses: card.lapses,
      });
    } else if (id.source === "exam") {
      const e = examById.get(id.refId);
      const q = e?.questions[id.index];
      if (!e || !q) gone.push(card.itemId);
      if (!e || !q || e.status !== "published") continue;
      const c = card.courseId ? courseById.get(card.courseId) : undefined;
      items.push({
        itemId: card.itemId,
        source: "exam",
        courseId: card.courseId,
        subjectId: c?.subjectId ?? e.subjectId,
        subjectName: c?.subjectName ?? null,
        subjectColor: c?.subjectColor ?? null,
        grade: c?.grade ?? e.grade,
        refTitle: e.title,
        href: `/exams/${e.id}`,
        ...form(q, card.itemId),
        lastCorrect: card.lastCorrect,
        lapses: card.lapses,
      });
    }
  }
  return { items, gone };
}

/** Cards for questions that no longer exist only get in the way; drop them. */
async function dropGone(userId: string, gone: string[]) {
  if (gone.length === 0) return;
  const db = await getDb();
  const rc = schema.reviewCards;
  await db.delete(rc).where(and(eq(rc.userId, userId), inArray(rc.itemId, gone))).run();
}

/** Mixes subjects: one question from each course in turn, keeping each course's own order. */
export function interleave<T>(xs: T[], key: (x: T) => string): T[] {
  const groups = new Map<string, T[]>();
  for (const x of xs) {
    const k = key(x);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k)!.push(x);
  }
  const lists = [...groups.values()];
  const out: T[] = [];
  for (let i = 0; out.length < xs.length; i++) for (const list of lists) if (i < list.length) out.push(list[i]);
  return out;
}

/**
 * The questions for one session. `due`: what is ready today, most overdue
 * first; `mistakes`: the mistake notebook, latest first. Subjects are mixed.
 */
export async function getReviewQueue(userId: string, opts: { mode?: "due" | "mistakes"; now?: Date; size?: number } = {}) {
  const { mode = "due", now = new Date(), size = REVIEW_SESSION_SIZE } = opts;
  const db = await getDb();
  const rc = schema.reviewCards;
  const cards = await db
    .select({ itemId: rc.itemId, courseId: rc.courseId, lastCorrect: rc.lastCorrect, lapses: rc.lapses })
    .from(rc)
    .where(mode === "due" ? and(eq(rc.userId, userId), lte(rc.due, readyBy(now).toISOString())) : and(eq(rc.userId, userId), eq(rc.lastCorrect, false)))
    .orderBy(mode === "due" ? rc.due : desc(rc.updatedAt))
    .limit(300)
    .all();
  const { items, gone } = await resolveItems(cards);
  await dropGone(userId, gone);
  return interleave(items, (i) => i.courseId ?? i.itemId).slice(0, size);
}

/** Everything in the mistake notebook, with the pupil's answer last time and whether they were sure of it. */
export async function getMistakes(userId: string, limit = 200) {
  const db = await getDb();
  const rc = schema.reviewCards;
  const cards = await db
    .select({ itemId: rc.itemId, courseId: rc.courseId, lastCorrect: rc.lastCorrect, lapses: rc.lapses })
    .from(rc)
    .where(and(eq(rc.userId, userId), eq(rc.lastCorrect, false)))
    .orderBy(desc(rc.updatedAt))
    .limit(limit)
    .all();
  const { items, gone } = await resolveItems(cards);
  await dropGone(userId, gone);
  const ae = schema.answerEvents;
  const last = items.length
    ? await db
        .select({ itemId: ae.itemId, choice: ae.choice, response: ae.response, confidence: ae.confidence, at: sql<string>`max(${ae.createdAt})` })
        .from(ae)
        // A second try after a hint does not move the card, so it is not "the answer last time".
        .where(and(eq(ae.userId, userId), eq(ae.hintUsed, false), inArray(ae.itemId, items.map((i) => i.itemId))))
        .groupBy(ae.itemId)
        .all()
    : [];
  // SQLite returns the bare columns from the row that holds the max(), so these are from the latest answer.
  const latest = new Map(last.map((r) => [r.itemId, r]));
  return items.map((i) => {
    const l = latest.get(i.itemId);
    return { ...i, lastResponse: (l?.response ?? l?.choice ?? null) as QuizResponse | null, wasSure: l?.confidence === 2 };
  });
}

/**
 * Cards whose lesson or exam is published, as the queue and notebook see them,
 * so the counts never promise questions the review page then hides.
 */
const available = sql`(
  (${schema.reviewCards.itemId} like 'quiz:%' and exists (select 1 from ${schema.lessons} where ${schema.lessons.id} = ${schema.reviewCards.refId} and ${schema.lessons.status} = 'published'))
  or (${schema.reviewCards.itemId} like 'exam:%' and exists (select 1 from ${schema.exams} where ${schema.exams.id} = ${schema.reviewCards.refId} and ${schema.exams.status} = 'published'))
)`;

/** Counts for the review entry points: ready now, in the notebook, and review days this week. */
export async function getReviewSummary(userId: string, now = new Date()) {
  const db = await getDb();
  const rc = schema.reviewCards;
  const row = await db
    .select({
      cards: sql<number>`count(*)`,
      ready: sql<number>`coalesce(sum(case when ${rc.due} <= ${readyBy(now).toISOString()} then 1 else 0 end), 0)`,
      mistakes: sql<number>`coalesce(sum(case when ${rc.lastCorrect} = 0 then 1 else 0 end), 0)`,
    })
    .from(rc)
    .where(and(eq(rc.userId, userId), available))
    .get();
  const ae = schema.answerEvents;
  const weekAgo = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const days = await db
    .select({ n: sql<number>`count(distinct substr(${ae.createdAt}, 1, 10))` })
    .from(ae)
    .where(and(eq(ae.userId, userId), eq(ae.source, "review"), sql`substr(${ae.createdAt}, 1, 10) >= ${weekAgo}`))
    .get();
  return { cards: Number(row?.cards ?? 0), ready: Number(row?.ready ?? 0), mistakes: Number(row?.mistakes ?? 0), daysThisWeek: Number(days?.n ?? 0) };
}

/** The summary for one pupil, computed once per request (header, tab bar and page share it). */
export const getReviewSummaryCached = cache((userId: string) => getReviewSummary(userId));

/**
 * Records one answer to a question met before: in Daily Review (only questions
 * the pupil already has a card for) or in a lesson's warm-up (any published quiz
 * question, so a card may be created). The question is looked up on the server,
 * so the client only sends its answer. Returns null for an unknown or retired
 * question, or an answer that does not fit it.
 */
export async function answerItem(input: {
  userId: string;
  itemId: string;
  response: QuizResponse;
  source?: "review" | "warmup";
  confidence?: number | null;
  ms?: number | null;
  now?: Date;
}) {
  const { source = "review" } = input;
  const now = input.now ?? new Date();
  const db = await getDb();
  const rc = schema.reviewCards;
  const known = await db
    .select({ itemId: rc.itemId, courseId: rc.courseId, lastCorrect: rc.lastCorrect, lapses: rc.lapses })
    .from(rc)
    .where(and(eq(rc.userId, input.userId), eq(rc.itemId, input.itemId)))
    .get();
  // Daily Review only shows questions the pupil has met; a warm-up may be the first time.
  if (!known && source === "review") return null;
  const ref = parseItemId(input.itemId);
  if (!known && ref?.source !== "quiz") return null;
  const { items } = await resolveItems([known ?? { itemId: input.itemId, courseId: null, lastCorrect: false, lapses: 0 }]);
  const item = items[0];
  if (!item || !ref || !validResponse(item.shown, input.response)) return null;
  const rec = recordFor(item.shown, item.key, input.response);
  const [card] = await recordAnswers(
    input.userId,
    [{ itemId: item.itemId, source, refId: ref.refId, courseId: item.courseId, ...rec, confidence: input.confidence ?? null, ms: input.ms ?? null }],
    now,
  );
  const days = card ? Math.max(1, Math.round((new Date(card.due).getTime() - now.getTime()) / (24 * 60 * 60 * 1000))) : null;
  return { correct: rec.correct, nextInDays: days };
}
