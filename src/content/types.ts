import type { I18nText, QuizQuestion } from "@/server/db/schema";

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
): QuizQuestion => ({ prompt, options, answer, explanation });
