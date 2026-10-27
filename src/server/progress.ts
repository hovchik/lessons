import { and, asc, desc, eq, sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import { newId } from "./user-auth";
import { recordAnswers } from "./learner";
import { examItemId, quizItemId } from "@/lib/memory";
import { scoreExam } from "@/lib/exam-score";

/**
 * Progress tracking. Two layers:
 *  - `attempts`: an append-only log of every scored activity (quiz today,
 *    exams later via `kind = "exam"`).
 *  - `lesson_progress`: one summary row per (user, lesson) that the progress
 *    page and the lesson page read.
 */

export type ActivityKind = "quiz" | "exam" | "unit";

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

/**
 * Record a finished lesson quiz: the score is computed on the server from the
 * stored questions and the chosen option indexes, logged as an attempt, and the
 * lesson is marked completed. Returns null when the lesson or its quiz does not
 * exist, or the number of answers does not match the quiz.
 */
export async function recordQuizResult(input: {
  userId: string;
  lessonId: string;
  answers: number[];
  /** Per question, how sure the pupil was before checking: 0 guessing, 2 sure. */
  confidence?: (number | null)[];
  /** Per question, the option picked on the second try after a wrong first one (null when none). */
  retries?: (number | null)[];
}) {
  const db = await getDb();
  const lesson = await db
    .select({ id: schema.lessons.id, courseId: schema.lessons.courseId, quiz: schema.lessons.quiz, status: schema.lessons.status })
    .from(schema.lessons)
    .where(eq(schema.lessons.id, input.lessonId))
    .get();
  if (!lesson || lesson.status !== "published" || lesson.quiz.length === 0 || input.answers.length !== lesson.quiz.length) return null;
  if (input.confidence && input.confidence.length !== lesson.quiz.length) return null;
  if (input.retries && input.retries.length !== lesson.quiz.length) return null;
  const total = lesson.quiz.length;
  // The score counts first tries; a second try after a hint is logged but does not count.
  const score = lesson.quiz.filter((q, i) => input.answers[i] === q.answer).length;
  await recordAttempt({ userId: input.userId, kind: "quiz", refId: lesson.id, courseId: lesson.courseId, score, total, answers: input.answers });
  const base = { source: "quiz" as const, refId: lesson.id, courseId: lesson.courseId };
  const firsts = lesson.quiz.map((q, i) => ({
    ...base,
    itemId: quizItemId(lesson.id, i),
    correct: input.answers[i] === q.answer,
    choice: input.answers[i],
    confidence: input.confidence?.[i] ?? null,
  }));
  const seconds = lesson.quiz.flatMap((q, i) => {
    const r = input.retries?.[i];
    // Only a wrong first answer gets a second try, and it must be a different option.
    if (r == null || r >= q.options.length || input.answers[i] === q.answer || r === input.answers[i]) return [];
    return [{ ...base, itemId: quizItemId(lesson.id, i), correct: r === q.answer, choice: r, hintUsed: true, schedule: false }];
  });
  await recordAnswers(input.userId, [...firsts, ...seconds]);
  const now = new Date().toISOString();
  const lp = schema.lessonProgress;
  // Best-score comparison happens inside the upsert so two overlapping
  // submissions cannot both read the same old best and overwrite each other.
  const isBetter = sql`(${lp.bestTotal} is null or ${lp.bestTotal} = 0 or ${score} * ${lp.bestTotal} >= ${lp.bestScore} * ${total})`;
  await db
    .insert(lp)
    .values({
      userId: input.userId,
      lessonId: lesson.id,
      courseId: lesson.courseId,
      completedAt: now,
      bestScore: score,
      bestTotal: total,
      lastScore: score,
      lastTotal: total,
      attempts: 1,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: [lp.userId, lp.lessonId],
      set: {
        completedAt: sql`coalesce(${lp.completedAt}, ${now})`,
        lastScore: score,
        lastTotal: total,
        bestScore: sql`case when ${isBetter} then ${score} else ${lp.bestScore} end`,
        bestTotal: sql`case when ${isBetter} then ${total} else ${lp.bestTotal} end`,
        attempts: sql`${lp.attempts} + 1`,
        updatedAt: now,
      },
    })
    .run();
  return getLessonProgress(input.userId, lesson.id);
}

/**
 * Record a finished exam or trial. The score is computed on the server; each
 * answered question goes into the learner model, unanswered ones are skipped
 * (the pupil may have stopped early). Returns null when the exam does not exist
 * or the answers do not match it.
 */
export async function recordExamResult(input: { userId: string; examId: string; answers: Array<number | null> }) {
  const db = await getDb();
  const exam = await db
    .select({ id: schema.exams.id, subjectId: schema.exams.subjectId, grade: schema.exams.grade, questions: schema.exams.questions, passPercent: schema.exams.passPercent, status: schema.exams.status })
    .from(schema.exams)
    .where(eq(schema.exams.id, input.examId))
    .get();
  if (!exam || exam.status !== "published" || exam.questions.length === 0 || input.answers.length !== exam.questions.length) return null;
  // Exams of a subject and grade that has a course count towards that course.
  const course = exam.subjectId
    ? await db.select({ id: schema.courses.id }).from(schema.courses).where(and(eq(schema.courses.subjectId, exam.subjectId), eq(schema.courses.grade, exam.grade))).get()
    : undefined;
  const courseId = course?.id ?? null;
  const chosen = Object.fromEntries(input.answers.map((a, i) => [i, a ?? undefined]));
  const result = scoreExam(exam.questions, chosen, exam.passPercent);
  await recordAttempt({ userId: input.userId, kind: "exam", refId: exam.id, courseId, score: result.score, total: result.total, answers: input.answers });
  await recordAnswers(
    input.userId,
    exam.questions.flatMap((q, i) => {
      const a = input.answers[i];
      if (a === null || a === undefined) return [];
      return [{ itemId: examItemId(exam.id, i), source: "exam" as const, refId: exam.id, courseId, correct: a === q.answer, choice: a }];
    }),
  );
  return result;
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
      completed: sql<number>`sum(case when ${lp.completedAt} is not null and ${schema.lessons.status} = 'published' then 1 else 0 end)`,
      bestScore: sql<number>`sum(coalesce(${lp.bestScore}, 0))`,
      bestTotal: sql<number>`sum(coalesce(${lp.bestTotal}, 0))`,
      quizzesTaken: sql<number>`sum(case when ${lp.bestTotal} is not null then 1 else 0 end)`,
      lastActivity: sql<string | null>`max(${lp.updatedAt})`,
    })
    .from(lp)
    .innerJoin(schema.lessons, eq(lp.lessonId, schema.lessons.id))
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
      completed: sql<number>`sum(case when ${lp.completedAt} is not null and ${schema.lessons.status} = 'published' then 1 else 0 end)`,
      bestScore: sql<number>`sum(coalesce(${lp.bestScore}, 0))`,
      bestTotal: sql<number>`sum(coalesce(${lp.bestTotal}, 0))`,
      courses: sql<number>`count(distinct ${lp.courseId})`,
    })
    .from(lp)
    .innerJoin(schema.lessons, eq(lp.lessonId, schema.lessons.id))
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
      examTitle: schema.exams.title,
      skillTitle: schema.skills.title,
      courseId: schema.courses.id,
      subjectId: schema.courses.subjectId,
      grade: schema.courses.grade,
      subjectName: schema.subjects.name,
    })
    .from(schema.attempts)
    .leftJoin(schema.lessons, and(eq(schema.attempts.kind, "quiz"), eq(schema.attempts.refId, schema.lessons.id)))
    .leftJoin(schema.exams, and(eq(schema.attempts.kind, "exam"), eq(schema.attempts.refId, schema.exams.id)))
    .leftJoin(schema.skills, and(eq(schema.attempts.kind, "unit"), eq(schema.attempts.refId, schema.skills.id)))
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
      completed: sql<number>`(select count(*) from lesson_progress p join lessons l on l.id = p.lesson_id where p.user_id = ${u.id} and p.completed_at is not null and l.status = 'published')`,
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
