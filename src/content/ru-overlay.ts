import type { CourseSeed } from "./types";

/** Translated text (Russian or English) for one lesson of an Armenian-first course; quiz questions keep the Armenian order and answers. */
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

/** English translation of an Armenian-first course, same shape as the Russian one. */
export type EnCourse = RuCourse;

/** Adds a translation to a course built with hyCourse. Fails fast when the translation does not line up. */
const withLang = (lang: "ru" | "en") => (course: CourseSeed, ru: RuCourse): CourseSeed => {
  const id = `${course.subject}-${course.grade}`;
  const L = lang.toUpperCase();
  if (ru.units.length !== course.units.length) throw new Error(`${id}: ${ru.units.length} ${L} unit summaries for ${course.units.length} units`);
  const slugs = new Set(course.units.flatMap((u) => u.lessons.map((l) => l.slug)));
  for (const slug of Object.keys(ru.lessons)) if (!slugs.has(slug)) throw new Error(`${id}: ${L} lesson "${slug}" is not in the course`);
  return {
    ...course,
    languages: [...new Set([...(course.languages ?? []), lang])],
    units: course.units.map((u, ui) => ({
      ...u,
      summary: { ...u.summary, [lang]: ru.units[ui] },
      lessons: u.lessons.map((l) => {
        const r = ru.lessons[l.slug];
        if (!r) throw new Error(`${id}: missing ${L} lesson "${l.slug}"`);
        const quiz = l.quiz ?? [];
        if (r.quiz.length !== quiz.length) throw new Error(`${id}/${l.slug}: ${r.quiz.length} ${L} questions for ${quiz.length}`);
        return {
          ...l,
          objectives: { en: l.objectives?.en ?? [], hy: l.objectives?.hy ?? [], ru: l.objectives?.ru ?? [], [lang]: r.objectives },
          content: { en: l.content?.en ?? "", hy: l.content?.hy ?? "", ru: l.content?.ru ?? "", [lang]: r.content },
          quiz: quiz.map((q, qi) => {
            const [prompt, options] = r.quiz[qi];
            // Armenian-first courses are written as multiple choice (hyLesson).
            if (q.kind !== undefined && q.kind !== "choice") throw new Error(`${id}/${l.slug}: question ${qi + 1} is not multiple choice`);
            if (options.length !== q.options.length) throw new Error(`${id}/${l.slug}: ${L} question ${qi + 1} has ${options.length} options for ${q.options.length}`);
            return { ...q, prompt: { ...q.prompt, [lang]: prompt }, options: q.options.map((o, oi) => ({ ...o, [lang]: options[oi] })) };
          }),
        };
      }),
    })),
  };
};

/** Adds a Russian translation to a course built with hyCourse. */
export const withRu = withLang("ru");
/** Adds an English translation to a course built with hyCourse. */
export const withEn = withLang("en");
