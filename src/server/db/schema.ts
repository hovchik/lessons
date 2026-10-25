import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
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

/** Tips, tricks and shortcuts that go beyond the standard course for one grade of a subject. */
export const TIP_CATEGORIES = ["mentalMath", "memory", "problemSolving", "language", "exam", "study"] as const;
export type TipCategory = (typeof TIP_CATEGORIES)[number];

export const tips = sqliteTable(
  "tips",
  {
    id: text("id").primaryKey(), // `${courseId}-${slug}`
    courseId: text("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    position: integer("position").notNull(),
    slug: text("slug").notNull(),
    category: text("category").$type<TipCategory>().notNull().default("study"),
    title: text("title", { mode: "json" }).$type<I18nText>().notNull(),
    /** Markdown (GFM + KaTeX math) body per language. */
    body: text("body", { mode: "json" }).$type<I18nText>().notNull(),
    /** draft | published */
    status: text("status").notNull().default("published"),
    /** seed | admin — who last wrote the text */
    source: text("source").notNull().default("seed"),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [index("tips_course").on(t.courseId)],
);

export type Tip = typeof tips.$inferSelect;
