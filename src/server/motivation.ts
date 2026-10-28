import { cache } from "react";
import { and, eq, inArray, ne, sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import type { I18nText } from "./db/schema";
import { getUserMastery } from "./mastery";
import { isoDay } from "@/lib/exam-plan";
import { UNIT_CHECK_PASS } from "@/lib/mastery";
import {
  bestStreak,
  DAY_ANSWERS,
  DEFAULT_WEEKLY_GOAL,
  POINTS,
  STREAK_BADGES,
  streakOf,
  tierOf,
  WEEKLY_GOALS,
  weekOf,
  weekStart,
  type Tier,
  type WeeklyGoal,
} from "@/lib/motivation";

/**
 * The pupil's streak, points, weekly goal and badges, all worked out from
 * what they answered (answer_events) and the unit checks they passed
 * (attempts), so nothing extra is stored but the goal. Days are UTC.
 */

const day = (col: typeof schema.answerEvents.createdAt | typeof schema.attempts.createdAt) => sql<string>`substr(${col}, 1, 10)`;

/** Questions answered per day. */
async function answersByDay(userId: string) {
  const db = await getDb();
  const ae = schema.answerEvents;
  const rows = await db.select({ day: day(ae.createdAt), n: sql<number>`count(*)` }).from(ae).where(eq(ae.userId, userId)).groupBy(day(ae.createdAt)).all();
  return new Map(rows.map((r) => [r.day, Number(r.n)]));
}

const learningDays = (byDay: Map<string, number>) => [...byDay].filter(([, n]) => n >= DAY_ANSWERS).map(([d]) => d);

/** The streak alone, for the header; computed once per request. */
export const getStreakCached = cache(async (userId: string) => streakOf(learningDays(await answersByDay(userId)), isoDay(new Date())));

/**
 * Points per day: each question answered right on the first try counts once a
 * day (more in Daily Review, where it was recalled after a gap), and the first
 * pass of each unit check adds a bonus. The placement test gives none.
 */
export async function pointsByDay(userId: string) {
  const db = await getDb();
  const ae = schema.answerEvents;
  const perItem = db
    .select({ day: day(ae.createdAt).as("day"), w: sql<number>`max(case when ${ae.source} = 'review' then ${POINTS.recalled} else ${POINTS.right} end)`.as("w") })
    .from(ae)
    .where(and(eq(ae.userId, userId), eq(ae.correct, true), eq(ae.hintUsed, false), ne(ae.source, "diagnostic")))
    .groupBy(day(ae.createdAt), ae.itemId)
    .as("per_item");
  const answers = await db.select({ day: perItem.day, points: sql<number>`sum(${perItem.w})` }).from(perItem).groupBy(sql`${perItem.day}`).all();
  const a = schema.attempts;
  const passes = await db
    .select({ first: sql<string>`min(${day(a.createdAt)})` })
    .from(a)
    .where(and(eq(a.userId, userId), eq(a.kind, "unit"), sql`${a.total} > 0 and ${a.score} >= ${a.total} * ${UNIT_CHECK_PASS}`))
    .groupBy(a.refId)
    .all();
  const out = new Map(answers.map((r) => [r.day, Number(r.points)]));
  for (const p of passes) out.set(p.first, (out.get(p.first) ?? 0) + POINTS.unitPassed);
  return out;
}

export type SubjectBadge = { subjectId: string; name: I18nText; icon: string; color: string; mastered: number; tier: Tier; next: number | null };

/** Everything the "This week" card and the badges show. */
export async function getMotivation(userId: string, now = new Date()) {
  const today = isoDay(now);
  const db = await getDb();
  const [byDay, points, user, mastery] = await Promise.all([
    answersByDay(userId),
    pointsByDay(userId),
    db.select({ weeklyGoal: schema.users.weeklyGoal }).from(schema.users).where(eq(schema.users.id, userId)).get(),
    getUserMastery(userId),
  ]);
  const active = learningDays(byDay);
  const goal = ((WEEKLY_GOALS as readonly number[]).includes(user?.weeklyGoal ?? 0) ? user!.weeklyGoal : DEFAULT_WEEKLY_GOAL) as WeeklyGoal;
  const monday = weekStart(today);
  const sum = (from: string) => [...points].filter(([d]) => d >= from).reduce((x, [, p]) => x + p, 0);
  const best = bestStreak(active);

  const courseIds = [...mastery.keys()];
  const courses = courseIds.length
    ? await db
        .select({ id: schema.courses.id, subjectId: schema.subjects.id, name: schema.subjects.name, icon: schema.subjects.icon, color: schema.subjects.color, sortOrder: schema.subjects.sortOrder })
        .from(schema.courses)
        .innerJoin(schema.subjects, eq(schema.courses.subjectId, schema.subjects.id))
        .where(inArray(schema.courses.id, courseIds))
        .all()
    : [];
  const bySubject = new Map<string, SubjectBadge & { order: number }>();
  for (const c of courses) {
    const s = bySubject.get(c.subjectId) ?? { subjectId: c.subjectId, name: c.name, icon: c.icon, color: c.color, mastered: 0, tier: 0 as Tier, next: null, order: c.sortOrder };
    s.mastered += (mastery.get(c.id) ?? []).filter((m) => m.level === "mastered").length;
    bySubject.set(c.subjectId, s);
  }
  const subjects: SubjectBadge[] = [...bySubject.values()]
    .sort((a, b) => b.mastered - a.mastered || a.order - b.order)
    .map((s) => ({ subjectId: s.subjectId, name: s.name, icon: s.icon, color: s.color, mastered: s.mastered, ...tierOf(s.mastered) }));

  return {
    hasActivity: byDay.size > 0,
    streak: streakOf(active, today),
    best,
    today: { answers: byDay.get(today) ?? 0, needed: DAY_ANSWERS },
    week: { ...weekOf(active, today), goal },
    points: { today: points.get(today) ?? 0, week: sum(monday), total: sum("") },
    badges: { subjects, streaks: STREAK_BADGES.map((n) => ({ days: n, earned: best >= n })) },
  };
}

export type Motivation = Awaited<ReturnType<typeof getMotivation>>;

export async function setWeeklyGoal(userId: string, goal: WeeklyGoal) {
  const db = await getDb();
  await db.update(schema.users).set({ weeklyGoal: goal }).where(eq(schema.users.id, userId)).run();
}
