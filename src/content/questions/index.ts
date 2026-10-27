/**
 * Questions of the newer kinds (typed numbers, gaps, order, match), added to
 * the end of a lesson's quiz when the courses are loaded. Like the visuals
 * maps, they live apart from the lesson texts, so a lesson file never has to
 * change and the existing questions keep their positions (and so their review
 * cards). Always written in all three languages.
 */
import type { CourseSeed, QuizQuestion } from "../types";
import { algebraQuestions, mathQuestions } from "./math";
import { biologyQuestions, chemistryQuestions, geographyQuestions, physicsQuestions } from "./science";
import { armenianHistoryQuestions, informaticsQuestions, worldHistoryQuestions } from "./humanities";
import { englishQuestions, russianQuestions } from "./languages";

/** grade → lesson slug → questions */
export type QuestionMap = Record<number, Record<string, QuizQuestion[]>>;

export const QUESTIONS: Record<string, QuestionMap> = {
  math: mathQuestions,
  algebra: algebraQuestions,
  physics: physicsQuestions,
  chemistry: chemistryQuestions,
  biology: biologyQuestions,
  geography: geographyQuestions,
  "world-history": worldHistoryQuestions,
  "armenian-history": armenianHistoryQuestions,
  informatics: informaticsQuestions,
  english: englishQuestions,
  russian: russianQuestions,
};

/** Appends the extra questions to the lessons that have them. */
export function withQuestions(courses: CourseSeed[]): CourseSeed[] {
  return courses.map((c) => {
    const map = QUESTIONS[c.subject]?.[c.grade];
    if (!map) return c;
    return {
      ...c,
      units: c.units.map((u) => ({
        ...u,
        lessons: u.lessons.map((l) => (map[l.slug]?.length && l.content ? { ...l, quiz: [...(l.quiz ?? []), ...map[l.slug]] } : l)),
      })),
    };
  });
}
