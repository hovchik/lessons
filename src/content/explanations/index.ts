/**
 * Explanations for quiz questions that were written without one, kept apart
 * from the lesson files (like the questions and visuals maps) and added when
 * the courses are loaded. Written by `npm run explain` (scripts/explain.ts) with
 * Claude, one JSON file per subject, and meant to be read over before merging.
 *
 * Each entry is keyed by "grade/slug#index" (the question's place in the final
 * quiz) and carries `q`, a fingerprint of the question: when the question is
 * rewritten the fingerprint stops matching and the old explanation is ignored
 * (content:check lists those).
 */
import type { CourseSeed, I18nText, QuizQuestion } from "../types";
import { FILES } from "./files";

export type Explanation = I18nText & { q: string };
/** "grade/slug#index" → explanation */
export type ExplanationMap = Record<string, Explanation>;

export const EXPLANATIONS: Record<string, ExplanationMap> = FILES;

export const explanationKey = (grade: number, slug: string, index: number) => `${grade}/${slug}#${index}`;

const fnv = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h.toString(36);
};

/** A fingerprint of what a question asks and what its answer is (in English, or Armenian for Armenian-only courses). */
export function questionPrint(q: QuizQuestion): string {
  const t = (x: I18nText | undefined) => (x ? x.en?.trim() || x.hy : "");
  const body =
    q.kind === "number" ? String(q.answer)
    : q.kind === "gap" ? [q.text, ...q.gaps].map(t).join("|")
    : q.kind === "order" ? q.items.map(t).join("|")
    : q.kind === "match" ? q.pairs.flat().map(t).join("|")
    : t(q.options[q.answer]);
  return fnv(`${t(q.prompt)}|${body}`);
}

/** Adds the stored explanations to questions that have none. */
export function withExplanations(courses: CourseSeed[]): CourseSeed[] {
  return courses.map((c) => {
    const map = EXPLANATIONS[c.subject];
    if (!map) return c;
    return {
      ...c,
      units: c.units.map((u) => ({
        ...u,
        lessons: u.lessons.map((l) => {
          if (!l.quiz?.length) return l;
          let changed = false;
          const quiz = l.quiz.map((q, i) => {
            const e = map[explanationKey(c.grade, l.slug, i)];
            if (q.explanation || !e || e.q !== questionPrint(q)) return q;
            changed = true;
            return { ...q, explanation: { en: e.en, hy: e.hy, ru: e.ru } };
          });
          return changed ? { ...l, quiz } : l;
        }),
      })),
    };
  });
}
