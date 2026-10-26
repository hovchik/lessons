import { hyText, t, type CourseSeed, type LessonSeed, type UnitSeed } from "./types";

/** Unit for an Armenian-first course: trilingual title, Armenian summary, full lessons. */
export const hyUnit = (title: [en: string, hy: string, ru: string], summary: string, lessons: LessonSeed[]): UnitSeed => ({
  title: t(...title),
  summary: hyText(summary),
  lessons,
});

/**
 * Course whose lessons are written in Armenian first. Titles, description and curriculum notes
 * are trilingual; lesson bodies, objectives and quizzes are Armenian until translated.
 */
export const hyCourse = (opts: {
  subject: string;
  grade: number;
  name: [en: string, hy: string, ru: string];
  description: [en: string, hy: string, ru: string];
  armenia: [en: string, hy: string, ru: string];
  russia: [en: string, hy: string, ru: string];
  hours: { armenia: number | null; russia: number | null };
  units: UnitSeed[];
}): CourseSeed => ({
  subject: opts.subject,
  grade: opts.grade,
  title: t(`${opts.name[0]} · Grade ${opts.grade}`, `${opts.name[1]} · ${opts.grade}${opts.grade === 1 ? "-ին" : "-րդ"} դասարան`, `${opts.name[2]} · ${opts.grade} класс`),
  description: t(...opts.description),
  curriculumNotes: { armenia: t(...opts.armenia), russia: t(...opts.russia) },
  hoursPerWeek: opts.hours,
  units: opts.units,
  languages: ["hy"],
});
