import { and, asc, eq, gte, inArray, sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import type { I18nText } from "./db/schema";
import { getItemRatings } from "./ability";
import { recordAnswers } from "./learner";
import { getMastery, skillQuestions, type SkillQuestion } from "./mastery";
import { getExam } from "./queries";
import { getReviewSummary } from "./review";
import { newId } from "./user-auth";
import { examScope } from "@/content/exam-scope";
import { applyAnswer, bandOf, DIAG_MAX, nextSkill, startState, type Band, type DiagSkill, type DiagState } from "@/lib/diagnostic";
import { buildPlan, daysBetween, isoDay, markDone, type Activity, type PlanDay, type PlanMinutes } from "@/lib/exam-plan";
import { levelRank, type MasteryLevel } from "@/lib/mastery";
import { displayForm, guessCount, recordFor, validResponse, type QuizResponse, type Shown } from "@/lib/questions";

/**
 * A pupil's plan to one exam: a placement test over the exam's skills
 * (src/lib/diagnostic.ts), then a day-by-day plan to the exam date
 * (src/lib/exam-plan.ts) that ticks itself off from what the pupil does in
 * practice, unit checks, trials and Daily Review.
 */

export type PlanSkillInfo = {
  id: string;
  courseId: string;
  subjectId: string;
  subjectName: I18nText;
  grade: number;
  position: number;
  title: I18nText;
  prereqs: string[];
  level: MasteryLevel;
};

/** The exam's skills that have questions, prerequisites first (grade, then course, then unit). */
export async function examSkills(userId: string, examId: string) {
  const data = await getExam(examId);
  if (!data) return null;
  const courseIds = examScope(data.exam);
  if (!courseIds.length) return { ...data, skills: [] as PlanSkillInfo[] };
  const db = await getDb();
  const [mastery, courses] = await Promise.all([
    getMastery(userId, courseIds),
    db
      .select({ id: schema.courses.id, subjectId: schema.courses.subjectId, grade: schema.courses.grade, subjectName: schema.subjects.name })
      .from(schema.courses)
      .innerJoin(schema.subjects, eq(schema.courses.subjectId, schema.subjects.id))
      .where(inArray(schema.courses.id, courseIds))
      .all(),
  ]);
  const withQuestions = mastery.filter((m) => m.evidence.lessons > 0);
  const ids = withQuestions.map((m) => m.skillId);
  const links = ids.length ? await db.select().from(schema.skillPrereqs).where(inArray(schema.skillPrereqs.skillId, ids)).all() : [];
  const course = new Map(courses.map((c) => [c.id, c]));
  const skills: PlanSkillInfo[] = withQuestions
    .filter((m) => course.has(m.courseId))
    .map((m) => {
      const c = course.get(m.courseId)!;
      return {
        id: m.skillId,
        courseId: m.courseId,
        subjectId: c.subjectId,
        subjectName: c.subjectName,
        grade: c.grade,
        position: m.position,
        title: m.title,
        prereqs: links.filter((l) => l.skillId === m.skillId).map((l) => l.prereqId),
        level: m.level,
      };
    })
    .sort((a, b) => a.grade - b.grade || a.courseId.localeCompare(b.courseId) || a.position - b.position);
  return { ...data, skills };
}

const diagSkills = (skills: PlanSkillInfo[]): DiagSkill[] => skills.map((s) => ({ id: s.id, prereqs: s.prereqs }));

export async function getPlanRow(userId: string, examId: string) {
  const db = await getDb();
  const p = schema.examPlans;
  return db.select().from(p).where(and(eq(p.userId, userId), eq(p.examId, examId))).get();
}

/** The latest date a plan may aim for, from today. */
export const PLAN_MAX_DAYS = 400;

/**
 * Starts (or restarts) the placement test for an exam. Null for an unknown
 * exam, one without skills to test, or a date that is not in the next
 * PLAN_MAX_DAYS days.
 */
export async function startPlan(input: { userId: string; examId: string; examDate: string; minutesPerDay: PlanMinutes; now?: Date }) {
  const today = isoDay(input.now ?? new Date());
  const days = daysBetween(today, input.examDate);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.examDate) || !(days >= 1 && days <= PLAN_MAX_DAYS)) return null;
  const data = await examSkills(input.userId, input.examId);
  if (!data?.skills.length) return null;
  const state = startState(diagSkills(data.skills));
  const db = await getDb();
  const at = (input.now ?? new Date()).toISOString();
  const values = { examDate: input.examDate, minutesPerDay: input.minutesPerDay, startDate: today, status: "diagnostic" as const, state, updatedAt: at };
  await db
    .insert(schema.examPlans)
    .values({ id: newId(), userId: input.userId, examId: input.examId, createdAt: at, ...values })
    .onConflictDoUpdate({ target: [schema.examPlans.userId, schema.examPlans.examId], set: values })
    .run();
  return { ok: true };
}

export type DiagQuestion = { itemId: string; skillTitle: I18nText; subjectName: I18nText; grade: number; shown: Shown<I18nText>; n: number; max: number };

/**
 * The question for a skill: one of middle difficulty for this pupil's peers,
 * so a right answer says the skill is known and a wrong one does not just mean
 * a hard question. Questions with only two options are a coin toss, so they
 * are used only when there is nothing else.
 */
async function pickQuestion(skillId: string, skip: Set<string>): Promise<SkillQuestion | null> {
  const data = await skillQuestions(skillId);
  if (!data) return null;
  const all = data.byLesson.flat().filter((q) => !skip.has(q.itemId));
  if (!all.length) return null;
  const guesses = (q: SkillQuestion) => guessCount(displayForm(q.q, q.itemId).shown);
  const fair = all.filter((q) => guesses(q) !== 2);
  const pool = fair.length ? fair : all;
  const ratings = await getItemRatings(pool.map((q) => ({ itemId: q.itemId, options: guesses(q) })));
  const sorted = [...pool].sort((a, b) => ratings.get(a.itemId)!.difficulty - ratings.get(b.itemId)!.difficulty || a.itemId.localeCompare(b.itemId));
  return sorted[Math.floor((sorted.length - 1) / 2)];
}

/**
 * Moves the test on: picks and stores the next question, or, when the test is
 * over, turns the plan ready with today as its first day. A question on show
 * stays the same until it is answered, so reloading the page does not change it.
 */
async function advance(userId: string, examId: string, state: DiagState, skills: PlanSkillInfo[], now: Date): Promise<DiagQuestion | null> {
  const db = await getDb();
  const p = schema.examPlans;
  const where = and(eq(p.userId, userId), eq(p.examId, examId));
  const ds = diagSkills(skills);
  const asked = new Set(state.asked.map((a) => a.itemId));
  let pending = state.pending ?? null;
  // A skill whose questions are all gone (unpublished since) is marked as tried, so the test can move past it.
  let s = state;
  while (!pending) {
    const skillId = nextSkill(s, ds);
    if (!skillId) break;
    const q = await pickQuestion(skillId, asked);
    if (q) pending = { skillId, itemId: q.itemId };
    else s = { ...s, asked: [...s.asked, { skillId, itemId: "", correct: false }], known: { ...s.known, [skillId]: s.known[skillId] ?? 0.5 } };
  }
  if (!pending) {
    await db.update(p).set({ status: "ready", startDate: isoDay(now), state: { ...s, pending: null }, updatedAt: now.toISOString() }).where(where).run();
    return null;
  }
  if (pending !== state.pending) await db.update(p).set({ state: { ...s, pending }, updatedAt: now.toISOString() }).where(where).run();
  const data = await skillQuestions(pending.skillId);
  const q = data?.byLesson.flat().find((x) => x.itemId === pending.itemId);
  const info = skills.find((x) => x.id === pending.skillId);
  if (!q || !info) {
    // The question went away between two visits: drop it and pick again.
    return advance(userId, examId, { ...s, pending: null }, skills, now);
  }
  return {
    itemId: q.itemId,
    skillTitle: info.title,
    subjectName: info.subjectName,
    grade: info.grade,
    shown: displayForm(q.q, q.itemId).shown,
    n: s.asked.filter((a) => a.itemId).length + 1,
    max: Math.min(DIAG_MAX, skills.length),
  };
}

/**
 * One answer in the placement test. `response` null is "I don't know", which
 * counts as wrong. The answer is logged and moves the ratings but makes no
 * review card: the pupil is told nothing until the end, so there is nothing
 * to remember yet. Null when there is no test running or the answer is not to
 * the question on show.
 */
export async function answerDiagnostic(input: { userId: string; examId: string; itemId: string; response: QuizResponse | null; ms?: number | null; now?: Date }) {
  const now = input.now ?? new Date();
  const plan = await getPlanRow(input.userId, input.examId);
  if (!plan || plan.status !== "diagnostic" || plan.state.pending?.itemId !== input.itemId) return null;
  const { skillId } = plan.state.pending;
  const data = await skillQuestions(skillId);
  const q = data?.byLesson.flat().find((x) => x.itemId === input.itemId);
  if (!data || !q) return null;
  const form = displayForm(q.q, q.itemId);
  if (input.response !== null && !validResponse(form.shown, input.response)) return null;
  const rec = input.response === null ? { correct: false, choice: null, response: null, options: guessCount(form.shown) } : recordFor(form.shown, form.key, input.response);
  await recordAnswers(
    input.userId,
    [{ itemId: q.itemId, source: "diagnostic", refId: q.lessonId, courseId: data.skill.courseId, ...rec, ms: input.ms ?? null, schedule: false }],
    now,
  );
  const skills = await examSkills(input.userId, input.examId);
  if (!skills) return null;
  const state = applyAnswer(plan.state, diagSkills(skills.skills), { skillId, itemId: q.itemId, correct: rec.correct });
  const next = await advance(input.userId, input.examId, state, skills.skills, now);
  return { next };
}

/**
 * The pupil's chance per skill as the plan sees it: the placement test, raised
 * by what they have shown since (a mastered unit is known, a proficient one
 * nearly so).
 */
function currentKnown(state: DiagState, skills: PlanSkillInfo[]) {
  const known: Record<string, number> = {};
  for (const s of skills) {
    let p = state.known[s.id] ?? 0.5;
    if (s.level === "mastered") p = Math.max(p, 0.9);
    else if (levelRank(s.level) >= levelRank("proficient")) p = Math.max(p, 0.75);
    known[s.id] = p;
  }
  return known;
}

/** Rebuilds the plan from today with what the pupil knows now, and optionally a new date or daily time. */
export async function updatePlan(input: { userId: string; examId: string; examDate?: string; minutesPerDay?: PlanMinutes; now?: Date }) {
  const now = input.now ?? new Date();
  const plan = await getPlanRow(input.userId, input.examId);
  if (!plan || plan.status !== "ready") return null;
  const examDate = input.examDate ?? plan.examDate;
  const days = daysBetween(isoDay(now), examDate);
  if (input.examDate && !(days >= 1 && days <= PLAN_MAX_DAYS)) return null;
  const data = await examSkills(input.userId, input.examId);
  if (!data) return null;
  const db = await getDb();
  const p = schema.examPlans;
  await db
    .update(p)
    .set({ examDate, minutesPerDay: input.minutesPerDay ?? plan.minutesPerDay, startDate: isoDay(now), state: { ...plan.state, known: currentKnown(plan.state, data.skills) }, updatedAt: now.toISOString() })
    .where(eq(p.id, plan.id))
    .run();
  return { ok: true };
}

export async function removePlan(userId: string, examId: string) {
  const db = await getDb();
  const p = schema.examPlans;
  await db.delete(p).where(and(eq(p.userId, userId), eq(p.examId, examId))).run();
}

/** What the pupil did since `from` (a YYYY-MM-DD day), by UTC day, for ticking off the plan. */
async function activitySince(userId: string, examId: string, skillIds: string[], from: string): Promise<Activity> {
  const db = await getDb();
  const ae = schema.answerEvents;
  const a = schema.attempts;
  const day = (col: typeof ae.createdAt | typeof a.createdAt) => sql<string>`substr(${col}, 1, 10)`;
  const [practice, checks, trials, reviews] = await Promise.all([
    skillIds.length
      ? db
          .select({ skillId: schema.lessonSkills.skillId, day: day(ae.createdAt), n: sql<number>`count(*)` })
          .from(ae)
          .innerJoin(schema.lessonSkills, eq(schema.lessonSkills.lessonId, ae.refId))
          .where(and(eq(ae.userId, userId), eq(ae.source, "practice"), inArray(schema.lessonSkills.skillId, skillIds), gte(day(ae.createdAt), from)))
          .groupBy(schema.lessonSkills.skillId, day(ae.createdAt))
          .all()
      : [],
    skillIds.length
      ? db
          .select({ skillId: a.refId, day: day(a.createdAt) })
          .from(a)
          .where(and(eq(a.userId, userId), eq(a.kind, "unit"), inArray(a.refId, skillIds), gte(day(a.createdAt), from)))
          .all()
      : [],
    db
      .select({ day: day(a.createdAt) })
      .from(a)
      .where(and(eq(a.userId, userId), eq(a.kind, "exam"), eq(a.refId, examId), gte(day(a.createdAt), from)))
      .all(),
    db
      .selectDistinct({ day: day(ae.createdAt) })
      .from(ae)
      .where(and(eq(ae.userId, userId), eq(ae.source, "review"), gte(day(ae.createdAt), from)))
      .all(),
  ]);
  const act: Activity = { practice: {}, checks: {}, trials: trials.map((t) => t.day), reviews: reviews.map((r) => r.day) };
  for (const r of practice) (act.practice[r.skillId] ??= []).push(...Array<string>(Number(r.n)).fill(r.day));
  for (const r of checks) (act.checks[r.skillId] ??= []).push(r.day);
  return act;
}

export type PlanView = Awaited<ReturnType<typeof getPlanView>>;

/**
 * Everything the plan page shows: the test question while it runs, otherwise
 * the plan with today's tasks ticked off, the days ahead and the skills
 * grouped by how well the pupil knows them.
 */
export async function getPlanView(userId: string, examId: string, now = new Date()) {
  const data = await examSkills(userId, examId);
  if (!data) return null;
  const plan = await getPlanRow(userId, examId);
  const base = { exam: data.exam, subject: data.subject, skillCount: data.skills.length };
  if (!plan) return { ...base, status: "none" as const };
  if (plan.status === "diagnostic") {
    const question = await advance(userId, examId, plan.state, data.skills, now);
    if (question) return { ...base, status: "diagnostic" as const, question };
    // The test just ended (nothing left to ask): fall through to the plan.
  }
  const row = (await getPlanRow(userId, examId))!;
  const today = isoDay(now);
  const known = row.state.known;
  const inPlan = data.skills.map((s) => ({ id: s.id, p: known[s.id] ?? 0.5 }));
  const built = buildPlan({ skills: inPlan, start: row.startDate, examDate: row.examDate, minutes: row.minutesPerDay as PlanMinutes });
  const act = await activitySince(userId, examId, data.skills.map((s) => s.id), row.startDate);
  // With nothing due, Daily Review has nothing to ask, so today's review task is already done.
  if ((await getReviewSummary(userId, now)).ready === 0 && !act.reviews.includes(today)) act.reviews.push(today);
  const done = markDone(built, act);
  const at = done.days.findIndex((d) => d.date >= today);
  const past = at < 0 ? done.days : done.days.slice(0, at);
  const todayDay: PlanDay | null = at >= 0 && done.days[at].date === today ? done.days[at] : null;
  const ahead = at < 0 ? [] : done.days.slice(todayDay ? at + 1 : at, (todayDay ? at + 1 : at) + 7);
  // Review tasks are left out of the tally: whether anything was due on a past day is not known.
  const earlier = past.flatMap((d) => d.tasks.filter((t) => t.kind !== "review"));
  const skillInfo = Object.fromEntries(
    data.skills.map((s) => [
      s.id,
      { title: s.title, subjectName: s.subjectName, grade: s.grade, level: s.level, practiceHref: `/${s.subjectId}/${s.grade}/practice/${s.position}`, checkHref: `/${s.subjectId}/${s.grade}/check/${s.position}` },
    ]),
  );
  const groups: Record<Band, string[]> = { weak: [], shaky: [], strong: [] };
  for (const s of inPlan) groups[bandOf(s.p)].push(s.id);
  return {
    ...base,
    status: "ready" as const,
    examDate: row.examDate,
    minutesPerDay: row.minutesPerDay as PlanMinutes,
    startDate: row.startDate,
    daysLeft: daysBetween(today, row.examDate),
    today: todayDay,
    ahead,
    earlier: { done: earlier.filter((t) => t.done).length, total: earlier.length },
    leftover: done.leftover,
    groups,
    skills: skillInfo,
    tested: row.state.asked.filter((a) => a.itemId).length,
  };
}

/** The pupil's plans, newest first, for the progress page. */
export async function listPlans(userId: string, now = new Date()) {
  const db = await getDb();
  const p = schema.examPlans;
  const rows = await db
    .select({ examId: p.examId, examDate: p.examDate, status: p.status, title: schema.exams.title, subjectId: schema.exams.subjectId })
    .from(p)
    .innerJoin(schema.exams, eq(schema.exams.id, p.examId))
    .where(and(eq(p.userId, userId), eq(schema.exams.status, "published")))
    .orderBy(asc(p.examDate))
    .all();
  const today = isoDay(now);
  return rows.map((r) => ({ ...r, daysLeft: daysBetween(today, r.examDate) }));
}
