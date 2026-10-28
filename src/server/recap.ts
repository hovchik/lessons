import { and, eq, gte, lt, sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import type { I18nText } from "./db/schema";
import { pointsByDay } from "./motivation";
import { cardById, type Card } from "@/content/cards";
import { isoDay } from "@/lib/exam-plan";
import { UNIT_CHECK_PASS } from "@/lib/mastery";
import { bestDay, change, learningDaysIn, recapWeek, type DayCount, type RecapWeek } from "@/lib/recap";

/**
 * A pupil's week in numbers: what they answered and got right, the lessons
 * they finished, the units they passed, cards won, puzzles solved and games
 * played, with the week before for comparison.
 */

export type Recap = {
  week: RecapWeek;
  which: "this" | "last";
  days: DayCount[];
  learningDays: number;
  goal: number;
  answers: number;
  correct: number;
  points: number;
  lessons: number;
  unitsPassed: { title: I18nText; href: string }[];
  subjects: { subjectId: string; name: I18nText; color: string; icon: string; answers: number }[];
  cards: Card[];
  puzzlesSolved: number;
  gameRounds: number;
  best: DayCount | null;
  vsLastWeek: { answers: number | null; learningDays: number };
};

const dayOf = (col: Parameters<typeof sql>[1]) => sql<string>`substr(${col}, 1, 10)`;

export async function getRecap(userId: string, which: "this" | "last", now = new Date()): Promise<Recap> {
  const db = await getDb();
  const week = recapWeek(isoDay(now), which);
  const prev = recapWeek(week.start, "last");
  const ae = schema.answerEvents;
  const inWeek = (w: RecapWeek) => and(eq(ae.userId, userId), gte(ae.createdAt, w.start), lt(ae.createdAt, w.end));

  const [perDay, prevPerDay, bySubject, points, user] = await Promise.all([
    db
      .select({ day: dayOf(ae.createdAt), n: sql<number>`count(*)`, right: sql<number>`sum(case when ${ae.correct} then 1 else 0 end)` })
      .from(ae)
      .where(inWeek(week))
      .groupBy(dayOf(ae.createdAt))
      .all(),
    db.select({ day: dayOf(ae.createdAt), n: sql<number>`count(*)` }).from(ae).where(inWeek(prev)).groupBy(dayOf(ae.createdAt)).all(),
    db
      .select({ subjectId: schema.subjects.id, name: schema.subjects.name, color: schema.subjects.color, icon: schema.subjects.icon, n: sql<number>`count(*)` })
      .from(ae)
      .innerJoin(schema.courses, eq(ae.courseId, schema.courses.id))
      .innerJoin(schema.subjects, eq(schema.courses.subjectId, schema.subjects.id))
      .where(inWeek(week))
      .groupBy(schema.subjects.id)
      .all(),
    pointsByDay(userId),
    db.select({ weeklyGoal: schema.users.weeklyGoal }).from(schema.users).where(eq(schema.users.id, userId)).get(),
  ]);

  const lp = schema.lessonProgress;
  const lessons = await db
    .select({ n: sql<number>`count(*)` })
    .from(lp)
    .where(and(eq(lp.userId, userId), gte(lp.completedAt, week.start), lt(lp.completedAt, week.end)))
    .get();

  const a = schema.attempts;
  const passes = await db
    .select({ skillId: a.refId, title: schema.skills.title, courseId: schema.skills.courseId, position: schema.skills.position, first: sql<string>`min(${a.createdAt})` })
    .from(a)
    .innerJoin(schema.skills, eq(schema.skills.id, a.refId))
    .where(and(eq(a.userId, userId), eq(a.kind, "unit"), sql`${a.total} > 0 and ${a.score} >= ${a.total} * ${UNIT_CHECK_PASS}`))
    .groupBy(a.refId)
    .all();
  const unitsPassed = passes
    .filter((p) => p.first >= week.start && p.first < week.end)
    .map((p) => {
      const [, subject, grade] = /^(.*)-(\d+)$/.exec(p.courseId) ?? [];
      return { title: p.title, href: `/${subject}/${grade}#unit-${p.position}` };
    });

  const uc = schema.userCards;
  const cardRows = await db
    .select({ cardId: uc.cardId })
    .from(uc)
    .where(and(eq(uc.userId, userId), gte(uc.createdAt, week.start), lt(uc.createdAt, week.end)))
    .all();

  const pr = schema.puzzleResults;
  const puzzles = await db
    .select({ n: sql<number>`count(*)` })
    .from(pr)
    .where(and(eq(pr.userId, userId), eq(pr.solved, true), gte(pr.day, week.start), lt(pr.day, week.end)))
    .get();

  const gs = schema.gameScores;
  const rounds = await db
    .select({ n: sql<number>`count(*)` })
    .from(gs)
    .where(and(eq(gs.userId, userId), gte(gs.createdAt, week.start), lt(gs.createdAt, week.end)))
    .get();

  const byDay = new Map(perDay.map((r) => [r.day, Number(r.n)]));
  const days = week.days.map((day) => ({ day, answers: byDay.get(day) ?? 0 }));
  const prevDays = prev.days.map((day) => ({ day, answers: Number(prevPerDay.find((r) => r.day === day)?.n ?? 0) }));
  const answers = days.reduce((s, d) => s + d.answers, 0);
  const prevAnswers = prevDays.reduce((s, d) => s + d.answers, 0);
  const learningDays = learningDaysIn(days);

  return {
    week,
    which,
    days,
    learningDays,
    goal: user?.weeklyGoal ?? 5,
    answers,
    correct: perDay.reduce((s, r) => s + Number(r.right ?? 0), 0),
    points: [...points].filter(([d]) => d >= week.start && d < week.end).reduce((s, [, p]) => s + p, 0),
    lessons: Number(lessons?.n ?? 0),
    unitsPassed,
    subjects: bySubject.map((s) => ({ subjectId: s.subjectId, name: s.name, color: s.color, icon: s.icon, answers: Number(s.n) })).sort((x, y) => y.answers - x.answers),
    cards: cardRows.map((r) => cardById(r.cardId)).filter((c): c is Card => !!c),
    puzzlesSolved: Number(puzzles?.n ?? 0),
    gameRounds: Number(rounds?.n ?? 0),
    best: bestDay(days),
    vsLastWeek: { answers: change(answers, prevAnswers), learningDays: learningDays - learningDaysIn(prevDays) },
  };
}
