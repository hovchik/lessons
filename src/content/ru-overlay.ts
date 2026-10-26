import type { CourseSeed } from "./types";

/** Russian text for one lesson of an Armenian-first course; quiz questions keep the Armenian order and answers. */
export type RuLesson = {
  objectives: string[];
  content: string;
  quiz: [prompt: string, options: string[]][];
};

/** Russian translation of an Armenian-first course: one summary per unit and every lesson by slug. */
export type RuCourse = {
  units: string[];
  lessons: Record<string, RuLesson>;
};

/** Adds a Russian translation to a course built with hyCourse. Fails fast when the translation does not line up. */
export const withRu = (course: CourseSeed, ru: RuCourse): CourseSeed => {
  const id = `${course.subject}-${course.grade}`;
  if (ru.units.length !== course.units.length) throw new Error(`${id}: ${ru.units.length} RU unit summaries for ${course.units.length} units`);
  const slugs = new Set(course.units.flatMap((u) => u.lessons.map((l) => l.slug)));
  for (const slug of Object.keys(ru.lessons)) if (!slugs.has(slug)) throw new Error(`${id}: RU lesson "${slug}" is not in the course`);
  return {
    ...course,
    languages: [...new Set([...(course.languages ?? []), "ru" as const])],
    units: course.units.map((u, ui) => ({
      ...u,
      summary: { ...u.summary, ru: ru.units[ui] },
      lessons: u.lessons.map((l) => {
        const r = ru.lessons[l.slug];
        if (!r) throw new Error(`${id}: missing RU lesson "${l.slug}"`);
        const quiz = l.quiz ?? [];
        if (r.quiz.length !== quiz.length) throw new Error(`${id}/${l.slug}: ${r.quiz.length} RU questions for ${quiz.length}`);
        return {
          ...l,
          objectives: { en: l.objectives?.en ?? [], hy: l.objectives?.hy ?? [], ru: r.objectives },
          content: { en: l.content?.en ?? "", hy: l.content?.hy ?? "", ru: r.content },
          quiz: quiz.map((q, qi) => {
            const [prompt, options] = r.quiz[qi];
            if (options.length !== q.options.length) throw new Error(`${id}/${l.slug}: RU question ${qi + 1} has ${options.length} options for ${q.options.length}`);
            return { ...q, prompt: { ...q.prompt, ru: prompt }, options: q.options.map((o, oi) => ({ ...o, ru: options[oi] })) };
          }),
        };
      }),
    })),
  };
};
