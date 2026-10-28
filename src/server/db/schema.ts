import { sqliteTable, text, integer, real, index, primaryKey, uniqueIndex } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { packedJson } from "./packed";
import { TIP_CATEGORIES, type TipCategory } from "../../lib/tip-categories";
import type { QuizResponse } from "../../lib/questions";
import type { DiagState } from "../../lib/diagnostic";

export { TIP_CATEGORIES, type TipCategory };

/** A string translated into the three UI languages. */
export type I18nText = { en: string; hy: string; ru: string };

/** A multiple-choice question: the original and still the most common kind. */
export type ChoiceQuestion = {
  kind?: "choice";
  prompt: I18nText;
  options: I18nText[];
  answer: number; // index into options
  explanation?: I18nText;
};

/** Type the number. `tolerance` allows rounding (0.05 accepts 3.14 for 3.1416); `unit` is shown after the box. */
export type NumberQuestion = { kind: "number"; prompt: I18nText; answer: number; tolerance?: number; unit?: I18nText; explanation?: I18nText };

/**
 * Fill the gaps: `text` marks each gap with ___, and `gaps` holds the accepted
 * answers for each in every language, alternatives split by | ("is|'s").
 * Answers are compared ignoring case, extra spaces and end punctuation.
 */
export type GapQuestion = { kind: "gap"; prompt: I18nText; text: I18nText; gaps: I18nText[]; explanation?: I18nText };

/** Put the steps in order: `items` are written in the right order and shown mixed. */
export type OrderQuestion = { kind: "order"; prompt: I18nText; items: I18nText[]; explanation?: I18nText };

/** Match each left item with its right one: `pairs` are written matched, and the right column is shown mixed. */
export type MatchQuestion = { kind: "match"; prompt: I18nText; pairs: [I18nText, I18nText][]; explanation?: I18nText };

export type QuizQuestion = ChoiceQuestion | NumberQuestion | GapQuestion | OrderQuestion | MatchQuestion;

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
    objectives: packedJson<{ en: string[]; hy: string[]; ru: string[] }>("objectives").notNull(),
    /** Markdown (GFM + KaTeX math) body per language. Empty string = not yet written. */
    content: packedJson<I18nText>("content").notNull(),
    quiz: packedJson<QuizQuestion[]>("quiz").notNull().default([]),
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
    // Lesson counts by status (course cards, home page) read only this index. Without it SQLite
    // walks each row past the compressed content to reach `status`: 6 ms instead of under 1 ms.
    index("lessons_course_status").on(t.courseId, t.status),
  ],
);

/**
 * Small server-wide values. `content_version` goes up whenever lessons, tips or exams change
 * (admin edits, generation, seeding), so every server worker drops its cached content
 * (src/server/content-cache.ts).
 */
export const appMeta = sqliteTable("app_meta", {
  key: text("key").primaryKey(),
  value: integer("value").notNull().default(0),
});

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
    /** Learning days a week the pupil aims for: 3, 5 or 7 (src/lib/motivation.ts). */
    weeklyGoal: integer("weekly_goal").notNull().default(5),
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
/** Tips, tricks and shortcuts that go beyond the standard course for one grade of a subject. */

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
    /** draft | published | deleted (soft-deleted in the admin panel; kept so reseeding does not revive it) */
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

/** One exam question: a multiple-choice item worth `points` (default 1), optionally tagged with a topic. */
export type ExamQuestion = ChoiceQuestion & {
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

/* ------------------------------------------------------------------------- */
/* Learner model: skills, answer events and spaced-repetition memory          */
/* ------------------------------------------------------------------------- */

/**
 * A skill a pupil can master. Seeded from src/content/skills: by default one
 * skill per unit (`<courseId>.u<n>`), with prerequisite links between them.
 */
export const skills = sqliteTable(
  "skills",
  {
    id: text("id").primaryKey(), // e.g. "algebra-7.u2"
    courseId: text("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    unitId: text("unit_id").references(() => units.id, { onDelete: "set null" }),
    position: integer("position").notNull(),
    title: text("title", { mode: "json" }).$type<I18nText>().notNull(),
  },
  (t) => [index("skills_course").on(t.courseId, t.position)],
);

/** `skillId` needs `prereqId` first. */
export const skillPrereqs = sqliteTable(
  "skill_prereqs",
  {
    skillId: text("skill_id")
      .notNull()
      .references(() => skills.id, { onDelete: "cascade" }),
    prereqId: text("prereq_id")
      .notNull()
      .references(() => skills.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.skillId, t.prereqId] }), index("skill_prereqs_prereq").on(t.prereqId)],
);

/** Which skills a lesson (and so every question of its quiz) practises. */
export const lessonSkills = sqliteTable(
  "lesson_skills",
  {
    lessonId: text("lesson_id")
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    skillId: text("skill_id")
      .notNull()
      .references(() => skills.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.lessonId, t.skillId] }), index("lesson_skills_skill").on(t.skillId)],
);

/**
 * Where an answer was given. `warmup`: the questions from earlier lessons at the top of a lesson; `unit`: a unit check;
 * `practice`: adaptive practice of one skill; `diagnostic`: the placement test before an exam plan.
 */
export type AnswerSource = "quiz" | "exam" | "review" | "warmup" | "unit" | "check" | "practice" | "diagnostic";

/**
 * One row per question a pupil answers, anywhere in the app. `itemId` names the
 * question (see src/lib/memory.ts: `quiz:<lessonId>#<index>`, `exam:<examId>#<index>`).
 */
export const answerEvents = sqliteTable(
  "answer_events",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    itemId: text("item_id").notNull(),
    source: text("source").$type<AnswerSource>().notNull(),
    /** The lesson or exam the question belongs to. */
    refId: text("ref_id").notNull(),
    courseId: text("course_id").references(() => courses.id, { onDelete: "set null" }),
    correct: integer("correct", { mode: "boolean" }).notNull(),
    /** Chosen option index, when the question is multiple choice. */
    choice: integer("choice"),
    /** The answer to any other kind of question: typed text, gap texts, an order or pairs (src/lib/questions.ts). */
    response: text("response", { mode: "json" }).$type<QuizResponse>(),
    /** Pupil's confidence before seeing the answer: 0 guessing, 1 unsure, 2 sure. */
    confidence: integer("confidence"),
    /** Time from showing the question to answering, in milliseconds. */
    ms: integer("ms"),
    hintUsed: integer("hint_used", { mode: "boolean" }).notNull().default(false),
    createdAt: text("created_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [
    index("answer_events_user_item").on(t.userId, t.itemId, t.createdAt),
    index("answer_events_user_time").on(t.userId, t.createdAt),
    // Seeds a question's difficulty from everyone's earlier answers (src/server/ability.ts).
    index("answer_events_item").on(t.itemId),
  ],
);

/** FSRS card as stored: dates are ISO strings. */
export type StoredCard = {
  due: string;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  learning_steps: number;
  reps: number;
  lapses: number;
  state: number;
  last_review?: string | null;
};

/**
 * Spaced-repetition memory: one FSRS card per (pupil, question) they have met.
 * `due` is copied out of the card so "what is due today" is one indexed query.
 */
export const reviewCards = sqliteTable(
  "review_cards",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    itemId: text("item_id").notNull(),
    source: text("source").$type<AnswerSource>().notNull(),
    refId: text("ref_id").notNull(),
    courseId: text("course_id").references(() => courses.id, { onDelete: "set null" }),
    due: text("due").notNull(),
    card: text("card", { mode: "json" }).$type<StoredCard>().notNull(),
    reps: integer("reps").notNull().default(0),
    lapses: integer("lapses").notNull().default(0),
    lastCorrect: integer("last_correct", { mode: "boolean" }).notNull(),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [primaryKey({ columns: [t.userId, t.itemId] }), index("review_cards_user_due").on(t.userId, t.due), index("review_cards_user_course").on(t.userId, t.courseId)],
);

/**
 * How hard each question is, on the same logit scale as the pupils' ability
 * (src/lib/elo.ts). Shared by everyone and refined by every first try.
 */
export const itemRatings = sqliteTable("item_ratings", {
  itemId: text("item_id").primaryKey(),
  difficulty: real("difficulty").notNull(),
  /** Answers the rating has seen (including the prior's worth); the more, the smaller each step. */
  answers: integer("answers").notNull().default(0),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`(current_timestamp)`),
});

/** A pupil's ability in one skill, on the item difficulty scale. */
export const skillRatings = sqliteTable(
  "skill_ratings",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    // No foreign key: the seed rebuilds `skills` with the same ids, and that must not wipe the ratings.
    skillId: text("skill_id").notNull(),
    ability: real("ability").notNull(),
    answers: integer("answers").notNull().default(0),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [primaryKey({ columns: [t.userId, t.skillId] })],
);

/**
 * A pupil's plan to one exam: the placement test while `status` is
 * "diagnostic" (its answers so far in `state`), then a day-by-day plan rebuilt
 * from `state` and the exam date (src/server/exam-plan.ts).
 */
export const examPlans = sqliteTable(
  "exam_plans",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    // No foreign key: the seed rebuilds `exams`, and that must not wipe the plans.
    examId: text("exam_id").notNull(),
    examDate: text("exam_date").notNull(), // YYYY-MM-DD
    minutesPerDay: integer("minutes_per_day").notNull(),
    /** The first day of the plan: the day the test ended, or the day it was updated. */
    startDate: text("start_date").notNull(),
    status: text("status").$type<"diagnostic" | "ready">().notNull(),
    state: text("state", { mode: "json" }).$type<DiagState>().notNull(),
    createdAt: text("created_at")
      .notNull()
      .default(sql`(current_timestamp)`),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [uniqueIndex("exam_plans_user_exam").on(t.userId, t.examId)],
);

export type Skill = typeof skills.$inferSelect;
export type AnswerEvent = typeof answerEvents.$inferSelect;
export type ReviewCard = typeof reviewCards.$inferSelect;

/* ------------------------------------------------------------------------- */
/* Fun: daily puzzle, speed games, unit reflections and collectible cards    */
/* ------------------------------------------------------------------------- */

/** Daily puzzle level: grades 1–6 or 7–12. Both are open to everyone. */
export type PuzzleLevel = "junior" | "senior";

/** A pupil's go at one day's puzzle (src/lib/puzzle.ts). Days are UTC, like the streak. */
export const puzzleResults = sqliteTable(
  "puzzle_results",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    day: text("day").notNull(), // YYYY-MM-DD
    level: text("level").$type<PuzzleLevel>().notNull(),
    puzzleId: text("puzzle_id").notNull(),
    /** Answers sent so far (at most PUZZLE_TRIES). */
    tries: integer("tries").notNull().default(0),
    solved: integer("solved", { mode: "boolean" }).notNull().default(false),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [primaryKey({ columns: [t.userId, t.day, t.level] })],
);

/** One finished round of a speed game (src/lib/games.ts); the best is worked out from these. */
export const gameScores = sqliteTable(
  "game_scores",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    gameId: text("game_id").notNull(),
    /** sprint: one minute on the clock; calm: 20 questions, no clock. */
    mode: text("mode").$type<"sprint" | "calm">().notNull(),
    /** Right answers. */
    score: integer("score").notNull(),
    /** Questions answered. */
    total: integer("total").notNull(),
    createdAt: text("created_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [index("game_scores_user_game").on(t.userId, t.gameId, t.mode)],
);

/** What a pupil wrote about why a unit matters to them ("Why learn this?" on the course page). */
export const unitReflections = sqliteTable(
  "unit_reflections",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    // No foreign key: the seed rebuilds `units`, and that must not wipe what pupils wrote.
    unitId: text("unit_id").notNull(),
    text: text("text").notNull(),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (t) => [primaryKey({ columns: [t.userId, t.unitId] })],
);

/** A collectible card a pupil won by mastering a unit (src/content/cards). */
export const userCards = sqliteTable(
  "user_cards",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    cardId: text("card_id").notNull(),
    /** The mastered unit's skill that won it. No foreign key, like skill_ratings. */
    skillId: text("skill_id").notNull(),
    createdAt: text("created_at")
      .notNull()
      .default(sql`(current_timestamp)`),
    /** When the pupil first saw it turned over; null shows it as new. */
    seenAt: text("seen_at"),
  },
  (t) => [primaryKey({ columns: [t.userId, t.cardId] }), uniqueIndex("user_cards_user_skill").on(t.userId, t.skillId)],
);

/**
 * A running live class quiz (src/server/live-quiz.ts). The whole game is one JSON value, written
 * with a version check so several server workers can share it. Nicknames only, no accounts;
 * rows are deleted three hours after the game was last used.
 */
export const liveGames = sqliteTable(
  "live_games",
  {
    pin: text("pin").primaryKey(),
    state: text("state").notNull(),
    version: integer("version").notNull().default(0),
    touchedAt: integer("touched_at").notNull(),
  },
  (t) => [index("live_games_touched").on(t.touchedAt)],
);

export type PuzzleResult = typeof puzzleResults.$inferSelect;
export type GameScore = typeof gameScores.$inferSelect;
export type UserCard = typeof userCards.$inferSelect;
