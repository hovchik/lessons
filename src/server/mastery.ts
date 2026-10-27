import { and, asc, eq, inArray, like, sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import type { I18nText, QuizQuestion } from "./db/schema";
import { recordAnswers } from "./learner";
import { recordAttempt } from "./progress";
import { checkSignature, signValue } from "./user-auth";
import { levelRank, masteryLevel, UNIT_CHECK_PASS, UNIT_CHECK_SIZE, type MasteryLevel, type SkillEvidence } from "@/lib/mastery";
import { parseItemId, quizItemId } from "@/lib/memory";

/**
 * Mastery per skill and the unit check. A skill is one unit of a course; its
 * questions are the quizzes of the unit's published lessons (lesson_skills).
 */

export type SkillMastery = { skillId: string; courseId: string; unitId: string | null; position: number; title: I18nText; level: MasteryLevel; evidence: SkillEvidence };

const DAY = 24 * 60 * 60 * 1000;

/** Mastery of every skill in the given courses, in course and unit order. */
export async function getMastery(userId: string, courseIds: string[]): Promise<SkillMastery[]> {
  if (courseIds.length === 0) return [];
  const db = await getDb();
  const sk = schema.skills;
  const ls = schema.lessonSkills;
  const l = schema.lessons;
  const skills = await db.select().from(sk).where(inArray(sk.courseId, courseIds)).orderBy(asc(sk.courseId), asc(sk.position)).all();
  if (skills.length === 0) return [];
  const ids = skills.map((s) => s.id);
  const lessons = await db
    .select({ skillId: ls.skillId, n: sql<number>`count(*)` })
    .from(ls)
    .innerJoin(l, eq(ls.lessonId, l.id))
    .where(and(inArray(ls.skillId, ids), eq(l.status, "published"), sql`json_array_length(${l.quiz}) > 0`))
    .groupBy(ls.skillId)
    .all();
  const rc = schema.reviewCards;
  const cards = await db
    .select({ skillId: ls.skillId, cards: sql<number>`count(*)`, correct: sql<number>`sum(case when ${rc.lastCorrect} then 1 else 0 end)`, tried: sql<number>`count(distinct ${rc.refId})` })
    .from(rc)
    .innerJoin(ls, eq(ls.lessonId, rc.refId))
    .innerJoin(l, eq(l.id, rc.refId))
    .where(and(eq(rc.userId, userId), like(rc.itemId, "quiz:%"), inArray(ls.skillId, ids), eq(l.status, "published")))
    .groupBy(ls.skillId)
    .all();
  const a = schema.attempts;
  // SQLite returns the bare columns from the row that holds the max(), so score and total are from the
  // latest check (rowid, because two checks can share a created_at second).
  const checks = await db
    .select({ skillId: a.refId, score: a.score, total: a.total, last: sql<number>`max(${a}.rowid)` })
    .from(a)
    .where(and(eq(a.userId, userId), eq(a.kind, "unit"), inArray(a.refId, ids), sql`${a.total} > 0`))
    .groupBy(a.refId)
    .all();
  const lessonsBy = new Map(lessons.map((r) => [r.skillId, Number(r.n)]));
  const cardsBy = new Map(cards.map((r) => [r.skillId, r]));
  const checkBy = new Map(checks.map((r) => [r.skillId, r.score / r.total]));
  return skills.map((s) => {
    const c = cardsBy.get(s.id);
    const evidence: SkillEvidence = {
      lessons: lessonsBy.get(s.id) ?? 0,
      lessonsTried: Number(c?.tried ?? 0),
      cards: Number(c?.cards ?? 0),
      correct: Number(c?.correct ?? 0),
      lastCheck: checkBy.get(s.id) ?? null,
    };
    return { skillId: s.id, courseId: s.courseId, unitId: s.unitId, position: s.position, title: s.title, level: masteryLevel(evidence), evidence };
  });
}

/** Mastery for the courses a pupil has worked in, for the progress page. */
export async function getUserMastery(userId: string) {
  const db = await getDb();
  const rc = schema.reviewCards;
  const touched = await db.selectDistinct({ courseId: rc.courseId }).from(rc).where(eq(rc.userId, userId)).all();
  const all = await getMastery(userId, touched.map((r) => r.courseId).filter((c): c is string => !!c));
  const byCourse = new Map<string, SkillMastery[]>();
  for (const s of all) byCourse.set(s.courseId, [...(byCourse.get(s.courseId) ?? []), s]);
  return byCourse;
}

export type SkillQuestion = { itemId: string; lessonId: string; lessonTitle: I18nText; lessonSlug: string; q: QuizQuestion };

/** The skill, its course and every question it can be checked with, in lesson order. */
export async function skillQuestions(skillId: string) {
  const db = await getDb();
  const skill = await db
    .select({ id: schema.skills.id, courseId: schema.skills.courseId, position: schema.skills.position, title: schema.skills.title, subjectId: schema.courses.subjectId, grade: schema.courses.grade })
    .from(schema.skills)
    .innerJoin(schema.courses, eq(schema.skills.courseId, schema.courses.id))
    .where(eq(schema.skills.id, skillId))
    .get();
  if (!skill) return null;
  const l = schema.lessons;
  const lessons = await db
    .select({ id: l.id, title: l.title, slug: l.slug, quiz: l.quiz, unitPosition: schema.units.position, position: l.position })
    .from(schema.lessonSkills)
    .innerJoin(l, eq(schema.lessonSkills.lessonId, l.id))
    .leftJoin(schema.units, eq(l.unitId, schema.units.id))
    .where(and(eq(schema.lessonSkills.skillId, skillId), eq(l.status, "published")))
    .orderBy(asc(schema.units.position), asc(l.position))
    .all();
  const byLesson: SkillQuestion[][] = lessons
    .filter((x) => x.quiz.length > 0)
    .map((x) => x.quiz.map((q, i) => ({ itemId: quizItemId(x.id, i), lessonId: x.id, lessonTitle: x.title, lessonSlug: x.slug, q })));
  return { skill, byLesson };
}

/** A small deterministic shuffle, so a check is mixed but stable for the day. */
function shuffle<T>(xs: T[], seed: number): T[] {
  const out = [...xs];
  let s = seed % 2147483647 || 1;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export type UnitCheckQuestion = { itemId: string; lessonTitle: I18nText; prompt: I18nText; options: I18nText[] };

/** How long a pupil has to hand in a check after it was put together. */
const CHECK_TTL_MS = 6 * 60 * 60 * 1000;
const checkPayload = (userId: string, skillId: string, exp: number, itemIds: string[]) => `unit.${userId}.${skillId}.${exp}.${[...itemIds].sort().join(",")}`;

/**
 * A signed note of which questions a check holds, so a handed-in check must
 * answer exactly those (not, say, one easy question) to count.
 */
function checkToken(userId: string, skillId: string, itemIds: string[], now: Date) {
  const exp = now.getTime() + CHECK_TTL_MS;
  return `${exp}.${signValue(checkPayload(userId, skillId, exp, itemIds))}`;
}

function validCheckToken(token: string, userId: string, skillId: string, itemIds: string[], now: Date) {
  const i = token.indexOf(".");
  const exp = Number(token.slice(0, i));
  if (i < 0 || !Number.isFinite(exp) || exp < now.getTime()) return false;
  return checkSignature(checkPayload(userId, skillId, exp, itemIds), token.slice(i + 1));
}

/**
 * The questions for one unit check: one lesson after another in turn, so the
 * whole unit is covered, preferring what the pupil got wrong last time, then
 * questions not met yet, then the ones due soonest. Answers are not included;
 * they come back when the check is handed in.
 */
export async function buildUnitCheck(userId: string, skillId: string, now = new Date(), size = UNIT_CHECK_SIZE): Promise<{ questions: UnitCheckQuestion[]; token: string } | null> {
  const data = await skillQuestions(skillId);
  if (!data) return null;
  const db = await getDb();
  const rc = schema.reviewCards;
  const all = data.byLesson.flat();
  const cards = all.length
    ? await db
        .select({ itemId: rc.itemId, lastCorrect: rc.lastCorrect, due: rc.due })
        .from(rc)
        .where(and(eq(rc.userId, userId), inArray(rc.itemId, all.map((q) => q.itemId))))
        .all()
    : [];
  const card = new Map(cards.map((c) => [c.itemId, c]));
  const day = Math.floor(now.getTime() / DAY);
  const rank = (q: SkillQuestion) => {
    const c = card.get(q.itemId);
    return !c ? 1 : !c.lastCorrect ? 0 : 2;
  };
  const queues = data.byLesson.map((qs, k) =>
    shuffle(qs, day * 31 + k + 1).sort((x, y) => rank(x) - rank(y) || (card.get(x.itemId)?.due ?? "").localeCompare(card.get(y.itemId)?.due ?? "")),
  );
  const picked: SkillQuestion[] = [];
  for (let round = 0; picked.length < size && queues.some((q) => q.length > round); round++)
    for (const q of queues) if (picked.length < size && q[round]) picked.push(q[round]);
  const questions = shuffle(picked, day + 7).map((q) => ({ itemId: q.itemId, lessonTitle: q.lessonTitle, prompt: q.q.prompt, options: q.q.options }));
  return { questions, token: checkToken(userId, skillId, questions.map((q) => q.itemId), now) };
}

export type UnitCheckAnswer = { itemId: string; choice: number; confidence?: number | null };

/**
 * Scores a handed-in unit check on the server (it must answer exactly the
 * questions `token` was issued for), moves the review cards, logs it
 * as an attempt and says what changed: the level before and after, the lessons
 * to go over, and the earlier skills that are not solid yet.
 */
export async function recordUnitCheck(userId: string, skillId: string, answers: UnitCheckAnswer[], token: string, now = new Date()) {
  if (answers.length === 0 || !validCheckToken(token, userId, skillId, answers.map((a) => a.itemId), now)) return null;
  const data = await skillQuestions(skillId);
  if (!data) return null;
  const byId = new Map(data.byLesson.flat().map((q) => [q.itemId, q]));
  const seen = new Set<string>();
  for (const a of answers) {
    const q = byId.get(a.itemId);
    if (!q || seen.has(a.itemId) || a.choice >= q.q.options.length) return null;
    seen.add(a.itemId);
  }
  const { skill } = data;
  const [before] = await getMastery(userId, [skill.courseId]).then((ms) => ms.filter((m) => m.skillId === skillId));
  const results = answers.map((a) => {
    const q = byId.get(a.itemId)!;
    return { itemId: a.itemId, choice: a.choice, correct: a.choice === q.q.answer, answer: q.q.answer, explanation: q.q.explanation ?? null, prompt: q.q.prompt, options: q.q.options, lessonId: q.lessonId, lessonTitle: q.lessonTitle, lessonSlug: q.lessonSlug };
  });
  await recordAnswers(
    userId,
    results.map((r, i) => ({ itemId: r.itemId, source: "unit" as const, refId: parseItemId(r.itemId)!.refId, courseId: skill.courseId, correct: r.correct, choice: r.choice, confidence: answers[i].confidence ?? null, options: r.options.length })),
  );
  const score = results.filter((r) => r.correct).length;
  await recordAttempt({ userId, kind: "unit", refId: skillId, courseId: skill.courseId, score, total: results.length, answers: answers.map((a) => [a.itemId, a.choice]) });

  const after = (await getMastery(userId, [skill.courseId])).find((m) => m.skillId === skillId)!;
  const passed = score / results.length >= UNIT_CHECK_PASS;
  const weakLessons = [...new Map(results.filter((r) => !r.correct).map((r) => [r.lessonId, { id: r.lessonId, title: r.lessonTitle, href: `/${skill.subjectId}/${skill.grade}/${r.lessonSlug}` }])).values()];
  return { score, total: results.length, passed, before: before?.level ?? "none", after: after.level, results, weakLessons, weakPrereqs: passed ? [] : await weakPrerequisites(userId, skillId) };
}

/** Prerequisite skills of `skillId` the pupil is not yet Proficient in, with where to practise them. */
export async function weakPrerequisites(userId: string, skillId: string) {
  const db = await getDb();
  const prereqs = await db
    .select({ id: schema.skills.id, courseId: schema.skills.courseId, position: schema.skills.position, title: schema.skills.title, subjectId: schema.courses.subjectId, grade: schema.courses.grade })
    .from(schema.skillPrereqs)
    .innerJoin(schema.skills, eq(schema.skillPrereqs.prereqId, schema.skills.id))
    .innerJoin(schema.courses, eq(schema.skills.courseId, schema.courses.id))
    .where(eq(schema.skillPrereqs.skillId, skillId))
    .all();
  if (prereqs.length === 0) return [];
  const mastery = await getMastery(userId, [...new Set(prereqs.map((p) => p.courseId))]);
  const level = new Map(mastery.map((m) => [m.skillId, m]));
  return prereqs
    .map((p) => ({ ...p, level: level.get(p.id)?.level ?? ("none" as MasteryLevel), lessons: level.get(p.id)?.evidence.lessons ?? 0 }))
    .filter((p) => p.lessons > 0 && levelRank(p.level) < levelRank("proficient"))
    .map((p) => ({ skillId: p.id, title: p.title, level: p.level, subjectId: p.subjectId, grade: p.grade, unit: p.position, href: `/${p.subjectId}/${p.grade}#unit-${p.position}` }));
}
