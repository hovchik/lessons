import type { CourseSeed } from "../../types";
import type { ChoiceQuestion, ExamQuestion } from "@/server/db/schema";
import { trial, type ExamSeed } from "../types";

/**
 * Year-end trials for the courses that have no hand-written one (the hy-first subjects, astronomy,
 * how-to): ten questions drawn from the course's own lesson quizzes, spread over every unit, so the
 * year is retrieved in one mixed sitting. Each question keeps a reference to its lesson, so a missed
 * one shows the passage to reread (src/server/look.ts).
 *
 * The pick is fixed (a hash of the question), so the trial is the same on every seed and pupils'
 * saved answers stay valid. Questions that lean on something only the lesson shows (a text, a
 * picture, a board position) are skipped, since a trial shows the question alone.
 */

const SIZE = 10;

/** Questions that need the lesson's text, picture or widget next to them. Checked on the English text. */
const NEEDS_CONTEXT =
  /\b((the|this|these|that) (text|texts|passage|story|poem|dialogue|extract|excerpt|letter|sentence above|picture|painting|photo|image|drawing|diagram|chart|graph|map|table|board|position|lesson|example|song|melody|tune|video|recording|figure)|above|below|listen|you hear|shown|in the box)\b/i;

const hash = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h;
};

type Candidate = { q: ChoiceQuestion; unit: number; lessonId: string; slug: string; index: number; key: number; size: number };

const isChoice = (q: unknown): q is ChoiceQuestion => !!q && typeof q === "object" && !("kind" in q && (q as { kind?: string }).kind) && "options" in q;

function candidates(c: CourseSeed): Candidate[][] {
  const courseId = `${c.subject}-${c.grade}`;
  return c.units.map((u, unit) =>
    u.lessons.flatMap((l) =>
      (l.quiz ?? []).flatMap((q, index) => {
        if (!isChoice(q) || q.options.length < 3) return [];
        const en = [q.prompt.en, ...q.options.map((o) => o.en)].join(" ");
        if (!q.prompt.en?.trim() || NEEDS_CONTEXT.test(en)) return [];
        // All three languages must be there, as on every exam.
        if ([q.prompt, ...q.options].some((t) => !t.en?.trim() || !t.hy?.trim() || !t.ru?.trim())) return [];
        const lessonId = `${courseId}-${l.slug}`;
        return [{ q, unit, lessonId, slug: l.slug, index, key: hash(`${lessonId}#${index}`), size: en.length }];
      }),
    ),
  );
}

/** Ten questions over the units in turn, one lesson at most once until every lesson in reach was used. */
export function pickTrialQuestions(c: CourseSeed, size = SIZE): Candidate[] {
  const byUnit = candidates(c).map((list) => [...list].sort((a, b) => a.key - b.key));
  const total = byUnit.reduce((a, l) => a + l.length, 0);
  if (total < size) return [];
  const picked: Candidate[] = [];
  const usedLessons = new Set<string>();
  const taken = new Set<Candidate>();
  for (let round = 0; picked.length < size && round < 50; round++) {
    for (const list of byUnit) {
      if (picked.length >= size) break;
      const next = list.find((x) => !taken.has(x) && !usedLessons.has(x.lessonId)) ?? list.find((x) => !taken.has(x));
      if (!next) continue;
      picked.push(next);
      taken.add(next);
      usedLessons.add(next.lessonId);
    }
  }
  // In course order, as the year went.
  return picked.sort((a, b) => a.unit - b.unit || a.lessonId.localeCompare(b.lessonId) || a.index - b.index);
}

export function autoTrial(c: CourseSeed): ExamSeed | null {
  const picked = pickTrialQuestions(c);
  if (!picked.length) return null;
  // The two longest questions (usually the ones with a calculation or a reason) are worth 2 points.
  const heavy = new Set([...picked].sort((a, b) => b.size - a.size || a.key - b.key).slice(0, 2));
  const questions: ExamQuestion[] = picked.map((p) => ({
    prompt: p.q.prompt,
    options: p.q.options,
    answer: p.q.answer,
    ...(p.q.explanation ? { explanation: p.q.explanation } : {}),
    ...(heavy.has(p) ? { points: 2 } : {}),
    topic: c.units[p.unit].title,
    ref: { lessonId: p.lessonId, slug: p.slug, index: p.index },
  }));
  return trial(c.subject, c.grade, questions, { fromLessons: true });
}

/** Trials for every course that has no hand-written one. */
export function autoTrials(courses: CourseSeed[], existing: ExamSeed[]): ExamSeed[] {
  const have = new Set(existing.filter((e) => e.kind === "trial").map((e) => `${e.subject}-${e.grade}`));
  return courses.filter((c) => !have.has(`${c.subject}-${c.grade}`)).flatMap((c) => autoTrial(c) ?? []);
}
