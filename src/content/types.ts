import type { ChoiceQuestion, GapQuestion, I18nText, MatchQuestion, NumberQuestion, OrderQuestion, QuizQuestion } from "@/server/db/schema";

export type { I18nText, QuizQuestion };

export type LessonSeed = {
  slug: string;
  title: I18nText;
  objectives?: { en: string[]; hy: string[]; ru: string[] };
  /** Markdown body per language. Omit when the lesson is an outline entry to be generated later. */
  content?: I18nText;
  quiz?: QuizQuestion[];
  durationMin?: number;
};

export type UnitSeed = {
  title: I18nText;
  summary: I18nText;
  lessons: LessonSeed[];
};

export type CourseSeed = {
  subject: string;
  grade: number;
  title: I18nText;
  description: I18nText;
  curriculumNotes: { armenia: I18nText; russia: I18nText };
  hoursPerWeek: { armenia: number | null; russia: number | null };
  units: UnitSeed[];
  /**
   * Languages the lesson bodies, objectives and quizzes are written in. Defaults to all three.
   * Titles of courses, units and lessons are always trilingual so navigation works in every locale;
   * a lesson missing the visitor's language falls back to Armenian with a notice.
   */
  languages?: Array<"en" | "hy" | "ru">;
};

export type SubjectSeed = {
  id: string;
  name: I18nText;
  description: I18nText;
  color: string;
  icon: string;
  sortOrder: number;
};

/** Shorthand for a trilingual string. */
export const t = (en: string, hy: string, ru: string): I18nText => ({ en, hy, ru });

/** Shorthand for a unit made only of lesson titles (content generated later). */
export const unit = (
  title: I18nText,
  summary: I18nText,
  lessonTitles: Array<[slug: string, en: string, hy: string, ru: string]>,
): UnitSeed => ({
  title,
  summary,
  lessons: lessonTitles.map(([slug, en, hy, ru]) => ({ slug, title: t(en, hy, ru) })),
});

/** Multiple-choice quiz question shorthand. */
export const q = (
  prompt: I18nText,
  options: I18nText[],
  answer: number,
  explanation?: I18nText,
): ChoiceQuestion => ({ prompt, options, answer, explanation });

/** Type-the-number question: `tolerance` for rounded answers, `unit` shown after the box. */
export const num = (prompt: I18nText, answer: number, opts: { tolerance?: number; unit?: I18nText; explanation?: I18nText } = {}): NumberQuestion => ({
  kind: "number",
  prompt,
  answer,
  ...opts,
});

/** Fill-the-gaps question: `text` marks each gap with ___; each gap's answers per language, alternatives split by |. */
export const gap = (prompt: I18nText, text: I18nText, gaps: I18nText[], explanation?: I18nText): GapQuestion => ({ kind: "gap", prompt, text, gaps, ...(explanation ? { explanation } : {}) });

/** Put-in-order question: `items` in the right order (they are shown mixed). */
export const order = (prompt: I18nText, items: I18nText[], explanation?: I18nText): OrderQuestion => ({ kind: "order", prompt, items, ...(explanation ? { explanation } : {}) });

/** Match-the-pairs question: `pairs` written matched (the right column is shown mixed). */
export const match = (prompt: I18nText, pairs: [I18nText, I18nText][], explanation?: I18nText): MatchQuestion => ({ kind: "match", prompt, pairs, ...(explanation ? { explanation } : {}) });

/** Full lesson shorthand: trilingual title, objectives, markdown body and quiz. */
export const lesson = (
  slug: string,
  title: [en: string, hy: string, ru: string],
  objectives: { en: string[]; hy: string[]; ru: string[] },
  content: { en: string; hy: string; ru: string },
  quiz: QuizQuestion[],
  durationMin = 40,
): LessonSeed => ({ slug, title: t(...title), objectives, content, quiz, durationMin });

/** Armenian-only text: English and Russian are filled in later. */
export const hyText = (hy: string): I18nText => ({ en: "", hy, ru: "" });

/** Armenian-only quiz question: [prompt, options, index of the correct option]. */
export type HyQuestion = [prompt: string, options: string[], answer: number];

/**
 * Full lesson written in Armenian only (English and Russian versions to follow).
 * Title stays trilingual for navigation; objectives, body and quiz are Armenian.
 */
export const hyLesson = (
  slug: string,
  title: [en: string, hy: string, ru: string],
  objectives: string[],
  content: string,
  quiz: HyQuestion[],
  durationMin = 40,
): LessonSeed => ({
  slug,
  title: t(...title),
  objectives: { en: [], hy: objectives, ru: [] },
  content: hyText(content),
  quiz: quiz.map(([prompt, options, answer]) => ({ prompt: hyText(prompt), options: options.map(hyText), answer })),
  durationMin,
});
