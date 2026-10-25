import { and, asc, desc, eq, sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import { newId } from "./user-auth";

/**
 * Progress tracking. Two layers:
 *  - `attempts`: an append-only log of every scored activity (quiz today,
 *    exams later via `kind = "exam"`).
 *  - `lesson_progress`: one summary row per (user, lesson) that the progress
 *    page and the lesson page read.
 */

export type ActivityKind = "quiz" | "exam";

export async function recordAttempt(input: {
  userId: string;
  kind: ActivityKind;
  refId: string;
  courseId?: string | null;
  score: number;
  total: number;
  answers?: unknown;
}) {
  const db = await getDb();
  const id = newId();
  await db
    .insert(schema.attempts)
    .values({ id, userId: input.userId, kind: input.kind, refId: input.refId, courseId: input.courseId ?? null, score: input.score, total: input.total, answers: input.answers ?? null })
    .run();
  return id;
}

/** Record a finished lesson quiz: logs the attempt and marks the lesson completed. */
export async function recordQuizResult(input: { userId: string; lessonId: string; score: number; total: number; answers?: unknown }) {
  const db = await getDb();
  const lesson = await db.select({ id: schema.lessons.id, courseId: schema.lessons.courseId }).from(schema.lessons).where(eq(schema.lessons.id, input.lessonId)).get();
  if (!lesson) return null;
  await recordAttempt({ userId: input.userId, kind: "quiz", refId: lesson.id, courseId: lesson.courseId, score: input.score, total: input.total, answers: input.answers });
  const now = new Date().toISOString();
  const existing = await getLessonProgress(input.userId, lesson.id);
  const bestPct = existing?.bestTotal ? existing.bestScore! / existing.bestTotal : -1;
  const isBest = input.total > 0 && input.score / input.total >= bestPct;
  await db
    .insert(schema.lessonProgress)
    .values({
      userId: input.userId,
      lessonId: lesson.id,
      courseId: lesson.courseId,
      completedAt: now,
      bestScore: input.score,
      bestTotal: input.total,
      lastScore: input.score,
      lastTotal: input.total,
      attempts: 1,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: [schema.lessonProgress.userId, schema.lessonProgress.lessonId],
      set: {
        completedAt: sql`coalesce(${schema.lessonProgress.completedAt}, ${now})`,
        lastScore: input.score,
        lastTotal: input.total,
        ...(isBest ? { bestScore: input.score, bestTotal: input.total } : {}),
        attempts: sql`${schema.lessonProgress.attempts} + 1`,
        updatedAt: now,
      },
    })
    .run();
  return getLessonProgress(input.userId, lesson.id);
}

/** Mark a lesson as done (or not) without a quiz, e.g. drawing lessons. */
export async function setLessonCompleted(userId: string, lessonId: string, completed: boolean) {
  const db = await getDb();
  const lesson = await db.select({ id: schema.lessons.id, courseId: schema.lessons.courseId }).from(schema.lessons).where(eq(schema.lessons.id, lessonId)).get();
  if (!lesson) return null;
  const now = new Date().toISOString();
  await db
    .insert(schema.lessonProgress)
    .values({ userId, lessonId: lesson.id, courseId: lesson.courseId, completedAt: completed ? now : null, updatedAt: now })
    .onConflictDoUpdate({
      target: [schema.lessonProgress.userId, schema.lessonProgress.lessonId],
      set: { completedAt: completed ? sql`coalesce(${schema.lessonProgress.completedAt}, ${now})` : null, updatedAt: now },
    })
    .run();
  return getLessonProgress(userId, lesson.id);
}

export async function getLessonProgress(userId: string, lessonId: string) {
  const db = await getDb();
  return db
    .select()
    .from(schema.lessonProgress)
    .where(and(eq(schema.lessonProgress.userId, userId), eq(schema.lessonProgress.lessonId, lessonId)))
    .get();
}

/** Completed lesson ids and best scores for one course (for the course outline). */
export async function getCourseProgress(userId: string, courseId: string) {
  const db = await getDb();
  const rows = await db
    .select()
    .from(schema.lessonProgress)
    .where(and(eq(schema.lessonProgress.userId, userId), eq(schema.lessonProgress.courseId, courseId)))
    .all();
  return new Map(rows.map((r) => [r.lessonId, r]));
}

export type CourseSummary = {
  courseId: string;
  subjectId: string;
  grade: number;
  courseTitle: schema.I18nText;
  subjectName: schema.I18nText;
  subjectColor: string;
  subjectIcon: string;
  /** Lessons in the course that are published (what a pupil can actually do). */
  totalLessons: number;
  completed: number;
  /** Sum of best scores / sum of best totals over quizzes taken, 0..1, or null if none. */
  avgScore: number | null;
  quizzesTaken: number;
  lastActivity: string | null;
};

/** Per-course summary for the progress page, only courses the user touched. */
export async function getUserCourseSummaries(userId: string): Promise<CourseSummary[]> {
  const db = await getDb();
  const lp = schema.lessonProgress;
  const rows = await db
    .select({
      courseId: schema.courses.id,
      subjectId: schema.courses.subjectId,
      grade: schema.courses.grade,
      courseTitle: schema.courses.title,
      subjectName: schema.subjects.name,
      subjectColor: schema.subjects.color,
      subjectIcon: schema.subjects.icon,
      totalLessons: sql<number>`(select count(*) from lessons l where l.course_id = ${schema.courses.id} and l.status = 'published')`,
      completed: sql<number>`sum(case when ${lp.completedAt} is not null then 1 else 0 end)`,
      bestScore: sql<number>`sum(coalesce(${lp.bestScore}, 0))`,
      bestTotal: sql<number>`sum(coalesce(${lp.bestTotal}, 0))`,
      quizzesTaken: sql<number>`sum(case when ${lp.bestTotal} is not null then 1 else 0 end)`,
      lastActivity: sql<string | null>`max(${lp.updatedAt})`,
    })
    .from(lp)
    .innerJoin(schema.courses, eq(lp.courseId, schema.courses.id))
    .innerJoin(schema.subjects, eq(schema.courses.subjectId, schema.subjects.id))
    .where(eq(lp.userId, userId))
    .groupBy(schema.courses.id)
    .orderBy(asc(schema.subjects.sortOrder), asc(schema.courses.grade))
    .all();
  return rows.map((r) => ({
    courseId: r.courseId,
    subjectId: r.subjectId,
    grade: r.grade,
    courseTitle: r.courseTitle,
    subjectName: r.subjectName,
    subjectColor: r.subjectColor,
    subjectIcon: r.subjectIcon,
    totalLessons: Number(r.totalLessons),
    completed: Number(r.completed),
    avgScore: Number(r.bestTotal) > 0 ? Number(r.bestScore) / Number(r.bestTotal) : null,
    quizzesTaken: Number(r.quizzesTaken),
    lastActivity: r.lastActivity,
  }));
}

export async function getUserTotals(userId: string) {
  const db = await getDb();
  const lp = schema.lessonProgress;
  const row = await db
    .select({
      completed: sql<number>`sum(case when ${lp.completedAt} is not null then 1 else 0 end)`,
      bestScore: sql<number>`sum(coalesce(${lp.bestScore}, 0))`,
      bestTotal: sql<number>`sum(coalesce(${lp.bestTotal}, 0))`,
      courses: sql<number>`count(distinct ${lp.courseId})`,
    })
    .from(lp)
    .where(eq(lp.userId, userId))
    .get();
  const attempts = (await db.select({ n: sql<number>`count(*)` }).from(schema.attempts).where(eq(schema.attempts.userId, userId)).get())?.n ?? 0;
  return {
    completed: Number(row?.completed ?? 0),
    courses: Number(row?.courses ?? 0),
    avgScore: Number(row?.bestTotal ?? 0) > 0 ? Number(row!.bestScore) / Number(row!.bestTotal) : null,
    attempts: Number(attempts),
  };
}

/** Most recent attempts with lesson/course info (for "recent activity"). */
export async function getRecentAttempts(userId: string, limit = 10) {
  const db = await getDb();
  return db
    .select({
      id: schema.attempts.id,
      kind: schema.attempts.kind,
      refId: schema.attempts.refId,
      score: schema.attempts.score,
      total: schema.attempts.total,
      createdAt: schema.attempts.createdAt,
      lessonTitle: schema.lessons.title,
      lessonSlug: schema.lessons.slug,
      courseId: schema.courses.id,
      subjectId: schema.courses.subjectId,
      grade: schema.courses.grade,
      subjectName: schema.subjects.name,
    })
    .from(schema.attempts)
    .leftJoin(schema.lessons, and(eq(schema.attempts.kind, "quiz"), eq(schema.attempts.refId, schema.lessons.id)))
    .leftJoin(schema.courses, eq(schema.attempts.courseId, schema.courses.id))
    .leftJoin(schema.subjects, eq(schema.courses.subjectId, schema.subjects.id))
    .where(eq(schema.attempts.userId, userId))
    .orderBy(desc(schema.attempts.createdAt))
    .limit(limit)
    .all();
}

/* ------------------------------------------------------------------ admin */

export async function getAdminUsers(query = "") {
  const db = await getDb();
  const u = schema.users;
  const q = query.trim().toLowerCase();
  const rows = await db
    .select({
      user: u,
      completed: sql<number>`(select count(*) from lesson_progress p where p.user_id = ${u.id} and p.completed_at is not null)`,
      attempts: sql<number>`(select count(*) from attempts a where a.user_id = ${u.id})`,
      bestScore: sql<number>`(select coalesce(sum(best_score), 0) from lesson_progress p where p.user_id = ${u.id})`,
      bestTotal: sql<number>`(select coalesce(sum(best_total), 0) from lesson_progress p where p.user_id = ${u.id})`,
    })
    .from(u)
    .where(q ? sql`(lower(${u.username}) like ${"%" + q + "%"} or lower(${u.displayName}) like ${"%" + q + "%"})` : undefined)
    .orderBy(desc(u.createdAt))
    .all();
  return rows.map((r) => ({
    ...r.user,
    completed: Number(r.completed),
    attempts: Number(r.attempts),
    avgScore: Number(r.bestTotal) > 0 ? Number(r.bestScore) / Number(r.bestTotal) : null,
  }));
}

export async function getUserCount() {
  const db = await getDb();
  return (await db.select({ n: sql<number>`count(*)` }).from(schema.users).get())?.n ?? 0;
}
