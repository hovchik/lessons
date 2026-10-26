import { sqliteTable, text, integer, index, primaryKey } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

/** A string translated into the three UI languages. */
export type I18nText = { en: string; hy: string; ru: string };

export type QuizQuestion = {
  prompt: I18nText;
  options: I18nText[];
  answer: number; // index into options
  explanation?: I18nText;
};

export const subjects = sqliteTable("subjects", {
  id: text("id").primaryKey(), // slug, e.g. "math"
  name: text("name", { mode: "json" }).$type<I18nText>().notNull(),
  description: text("description", { mode: "json" }).$type<I18nText>().notNull(),
  color: text("color").notNull(), // token name, e.g. "indigo"
  icon: text("icon").notNull(), // lucide icon name
  sortOrder: integer("sort_order").notNull().default(0),
});

export const courses = sqliteTable(
  "courses",
  {
    id: text("id").primaryKey(), // `${subjectId}-${grade}`
    subjectId: text("subject_id")
      .notNull()
      .references(() => subjects.id, { onDelete: "cascade" }),
    grade: integer("grade").notNull(), // 1..12
    title: text("title", { mode: "json" }).$type<I18nText>().notNull(),
    description: text("description", { mode: "json" }).$type<I18nText>().notNull(),
    /** Research notes: how this grade maps onto the Armenian and Russian curricula. */
    curriculumNotes: text("curriculum_notes", { mode: "json" })
      .$type<{ armenia: I18nText; russia: I18nText }>()
      .notNull(),
    hoursPerWeek: text("hours_per_week", { mode: "json" })
      .$type<{ armenia: number | null; russia: number | null }>()
      .notNull(),
    published: integer("published", { mode: "boolean" }).notNull().default(true),
  },
  (t) => [index("courses_subject_grade").on(t.subjectId, t.grade)],
);

export const units = sqliteTable(
  "units",
  {
    id: text("id").primaryKey(), // `${courseId}-u${n}`
    courseId: text("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    position: integer("position").notNull(),
    title: text("title", { mode: "json" }).$type<I18nText>().notNull(),
    summary: text("summary", { mode: "json" }).$type<I18nText>().notNull(),
  },
  (t) => [index("units_course").on(t.courseId)],
);

export const lessons = sqliteTable(
  "lessons",
  {
    id: text("id").primaryKey(), // `${unitId}-l${n}`
    unitId: text("unit_id")
      .notNull()
      .references(() => units.id, { onDelete: "cascade" }),
    courseId: text("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    position: integer("position").notNull(),
    slug: text("slug").notNull(),
    title: text("title", { mode: "json" }).$type<I18nText>().notNull(),
    objectives: text("objectives", { mode: "json" })
      .$type<{ en: string[]; hy: string[]; ru: string[] }>()
      .notNull(),
    /** Markdown (GFM + KaTeX math) body per language. Empty string = not yet written. */
    content: text("content", { mode: "json" }).$type<I18nText>().notNull(),
    quiz: text("quiz", { mode: "json" }).$type<QuizQuestion[]>().notNull().default([]),
    durationMin: integer("duration_min").notNull().default(45),
    /** draft | published */
    status: text("status").notNull().default("draft"),
    /** seed | claude | admin — who last wrote the content */
    source: text("source").notNull().default("seed"),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [
    index("lessons_unit").on(t.unitId),
    index("lessons_course_slug").on(t.courseId, t.slug),
  ],
);

export type Subject = typeof subjects.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type Unit = typeof units.$inferSelect;
export type Lesson = typeof lessons.$inferSelect;

/* ------------------------------------------------------------------------- */
/* Student accounts and progress                                             */
/* ------------------------------------------------------------------------- */

export const users = sqliteTable(
  "users",
  {
    id: text("id").primaryKey(), // random base64url id
    /** Lower-cased login name, unique. */
    username: text("username").notNull().unique(),
    displayName: text("display_name").notNull(),
    /** `scrypt$<salt>$<hash>` (see src/server/user-auth.ts). */
    passwordHash: text("password_hash").notNull(),
    /** The pupil's own grade, 1..12; optional. */
    grade: integer("grade"),
    /** Preferred UI language (en | hy | ru). */
    locale: text("locale").notNull().default("en"),
    /** student (the only role for now; admins use the separate admin login). */
    role: text("role").notNull().default("student"),
    disabled: integer("disabled", { mode: "boolean" }).notNull().default(false),
    createdAt: text("created_at")
      .notNull()
      .default(sql`(current_timestamp)`),
    lastSeenAt: text("last_seen_at"),
  },
  (t) => [index("users_created").on(t.createdAt)],
);

/**
 * One row per (user, lesson): whether the lesson is completed and the best /
 * latest quiz result. Kept small so the progress page is a few grouped queries.
 */
export const lessonProgress = sqliteTable(
  "lesson_progress",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lessonId: text("lesson_id")
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    courseId: text("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    completedAt: text("completed_at"),
    bestScore: integer("best_score"),
    bestTotal: integer("best_total"),
    lastScore: integer("last_score"),
    lastTotal: integer("last_total"),
    attempts: integer("attempts").notNull().default(0),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [
    primaryKey({ columns: [t.userId, t.lessonId] }),
    index("lesson_progress_user_course").on(t.userId, t.courseId),
  ],
);

/**
 * Every scored activity a user finishes. `kind` + `refId` identify the thing
 * that was taken: today `kind = "quiz"` with the lesson id; exams can record
 * `kind = "exam"` with their own id without a schema change.
 */
export const attempts = sqliteTable(
  "attempts",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** quiz | exam | ... */
    kind: text("kind").notNull(),
    refId: text("ref_id").notNull(),
    courseId: text("course_id").references(() => courses.id, { onDelete: "set null" }),
    score: integer("score").notNull(),
    total: integer("total").notNull(),
    /** Chosen option index per question (or any activity-specific payload). */
    answers: text("answers", { mode: "json" }).$type<unknown>(),
    createdAt: text("created_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [index("attempts_user_kind").on(t.userId, t.kind, t.createdAt), index("attempts_ref").on(t.kind, t.refId)],
);

export type User = typeof users.$inferSelect;
export type LessonProgress = typeof lessonProgress.$inferSelect;
export type Attempt = typeof attempts.$inferSelect;

/** One exam question: a multiple-choice item worth `points` (default 1), optionally tagged with a topic. */
export type ExamQuestion = QuizQuestion & {
  points?: number;
  topic?: I18nText;
};

export type ExamKind = "state" | "trial";
export type ExamSystem = "armenia" | "russia" | "both";
/** How the raw score is reported: Armenian 20-point scale, Russian 5-point grade, or both plus percent. */
export type ExamScale = "am20" | "ru5" | "mixed";

/**
 * State exams (Armenian final/unified exams, Russian ОГЭ/ЕГЭ) and year-end trial tests.
 * Questions are original practice items in the style of the real exam, never copies.
 */
export const exams = sqliteTable(
  "exams",
  {
    id: text("id").primaryKey(), // e.g. "am-9-math", "ru-ege-physics", "trial-math-3"
    kind: text("kind").$type<ExamKind>().notNull(),
    system: text("system").$type<ExamSystem>().notNull(),
    subjectId: text("subject_id").references(() => subjects.id, { onDelete: "set null" }),
    /** Grade in the pupil's own system (Armenian 1–12; Russian ОГЭ = 9, ЕГЭ = 11). */
    grade: integer("grade").notNull(),
    position: integer("position").notNull().default(0),
    title: text("title", { mode: "json" }).$type<I18nText>().notNull(),
    description: text("description", { mode: "json" }).$type<I18nText>().notNull(),
    /** Markdown: real exam format, duration, scoring, what to expect, how to prepare. */
    format: text("format", { mode: "json" }).$type<I18nText>().notNull(),
    questions: text("questions", { mode: "json" }).$type<ExamQuestion[]>().notNull().default([]),
    durationMin: integer("duration_min").notNull().default(45),
    scale: text("scale").$type<ExamScale>().notNull().default("mixed"),
    /** Percent of the total points needed to pass. */
    passPercent: integer("pass_percent").notNull().default(40),
    /** draft | published */
    status: text("status").notNull().default("published"),
    /** seed | admin */
    source: text("source").notNull().default("seed"),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [index("exams_subject_grade").on(t.subjectId, t.grade), index("exams_kind_system").on(t.kind, t.system)],
);

export type Exam = typeof exams.$inferSelect;
