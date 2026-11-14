import { t, type CourseSeed, type LessonSeed, type QuizQuestion } from "../../types";
import { HOWTO_META } from "./meta";

/**
 * How-to lessons: practical skills for every age (make a campfire, clean river water, first aid…).
 * Each lesson is written in English, Armenian and Russian, with its ~~~sim blocks (safety card,
 * step-by-step picture, sorting game) inside the Markdown of each language.
 */

const seen = new Set<string>();

type Three<T> = { en: T; hy: T; ru: T };

export function howto(o: {
  /** Listed in ./meta.ts with its emoji and safety level; unique across grades. */
  slug: string;
  title: [en: string, hy: string, ru: string];
  goals: Three<string[]>;
  body: Three<string>;
  quiz: QuizQuestion[];
  minutes?: number;
}): LessonSeed {
  const meta = HOWTO_META[o.slug];
  if (!meta) throw new Error(`howto ${o.slug}: not listed in howto/meta.ts`);
  if (seen.has(o.slug)) throw new Error(`howto: duplicate slug ${o.slug}`);
  seen.add(o.slug);
  for (const lang of ["en", "hy", "ru"] as const) {
    const level = o.body[lang].match(/^safety level=(\w+)/m)?.[1] ?? null;
    if (level !== meta.safety) throw new Error(`howto ${o.slug} [${lang}]: safety block says ${level}, meta.ts says ${meta.safety}`);
  }
  return { slug: o.slug, title: t(...o.title), objectives: o.goals, content: o.body, quiz: o.quiz, durationMin: o.minutes ?? 30 };
}

/** Pupils start school at 6, so grade g is about ages g + 5 to g + 6. */
const age = (g: number) => `${g + 5}–${g + 6}`;

export function howtoCourse(
  grade: number,
  unit: { title: [en: string, hy: string, ru: string]; summary: [en: string, hy: string, ru: string] },
  lessons: LessonSeed[],
): CourseSeed {
  const names = lessons.map((l) => l.title);
  const list = (lang: "en" | "hy" | "ru") => names.map((n) => n[lang]).join(lang === "hy" ? ", " : "; ");
  return {
    subject: "howto",
    grade,
    title: t(`How-to · Grade ${grade}`, `Ինչպես անել · ${grade}${grade === 1 ? "-ին" : "-րդ"} դասարան`, `Как это сделать · ${grade} класс`),
    description: t(
      `Practical skills for ages ${age(grade)}: ${list("en")}.`,
      `Գործնական հմտություններ ${age(grade)} տարեկանների համար․ ${list("hy")}։`,
      `Полезные умения для ${age(grade)} лет: ${list("ru")}.`,
    ),
    curriculumNotes: {
      armenia: t(
        "Not a separate school subject. The topics support science, technology, physical education and civil-defence lessons.",
        "Առանձին դպրոցական առարկա չէ։ Թեմաները լրացնում են բնագիտության, տեխնոլոգիայի, ֆիզկուլտուրայի և քաղաքացիական պաշտպանության դասերը։",
        "Не отдельный школьный предмет. Темы дополняют уроки естествознания, технологии, физкультуры и гражданской обороны.",
      ),
      russia: t(
        "Close to OBZR (formerly OBZh, basics of life safety) and to technology lessons, but written as practical how-tos.",
        "Մոտ է ռուսական ՕԲԶՌ (նախկինում ՕԲԺ՝ կենսագործունեության անվտանգության հիմունքներ) և տեխնոլոգիայի դասերին, բայց գրված է որպես գործնական ուղեցույց։",
        "Близко к ОБЗР (ранее ОБЖ) и урокам технологии, но написано как практические инструкции.",
      ),
    },
    hoursPerWeek: { armenia: null, russia: null },
    units: [{ title: t(...unit.title), summary: t(...unit.summary), lessons }],
  };
}
