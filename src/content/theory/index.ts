/**
 * "Going deeper": the theory layer.
 *
 * Each lesson keeps its own text; this layer adds one deeper section per lesson in every
 * language, placed after the main explanation and before the exercises. A section explains
 * where the rules and formulas come from: derivations, proofs, the reasons behind a
 * phenomenon, the history of the idea and the usual mistakes. The heading is added here so it
 * reads the same in every course.
 */
import type { CourseSeed, I18nText } from "../types";
import { placeBlocks } from "../visuals";
import { chemistryTheory } from "./chemistry";
import { geometryTheory } from "./geometry";

/** grade → lesson slug → Markdown body of the section (use ### for its own sub-headings). */
export type TheoryMap = Record<number, Record<string, I18nText>>;

export const THEORY: Record<string, TheoryMap> = {
  chemistry: chemistryTheory,
  geometry: geometryTheory,
};

export const THEORY_HEADING: I18nText = { en: "Going deeper", hy: "Ավելի խորը", ru: "Углубляемся" };

/** The full section as it is inserted into one language. */
export function theorySection(body: string, lang: keyof I18nText): string {
  return `## ${THEORY_HEADING[lang]}\n\n${body.trim()}`;
}

/** Adds the deeper sections to the lessons that have them. */
export function withTheory(courses: CourseSeed[]): CourseSeed[] {
  return courses.map((c) => {
    const map = THEORY[c.subject]?.[c.grade];
    if (!map) return c;
    return {
      ...c,
      units: c.units.map((u) => ({
        ...u,
        lessons: u.lessons.map((l) => {
          const body = map[l.slug];
          if (!body || !l.content) return l;
          const content = { ...l.content };
          for (const lang of ["en", "hy", "ru"] as const) {
            if (!body[lang]?.trim() || !content[lang]?.trim()) continue;
            content[lang] = placeBlocks(content[lang], [{ md: { en: "", hy: "", ru: "", [lang]: theorySection(body[lang], lang) } }], lang);
          }
          return { ...l, content };
        }),
      })),
    };
  });
}

/** Problems with the theory maps: unknown courses or lessons, missing languages. */
export function theoryProblems(courses: CourseSeed[]): string[] {
  const out: string[] = [];
  for (const [subject, byGrade] of Object.entries(THEORY)) {
    for (const [grade, bySlug] of Object.entries(byGrade)) {
      const c = courses.find((x) => x.subject === subject && x.grade === Number(grade));
      if (!c) { out.push(`theory ${subject}-${grade}: no such course`); continue; }
      const lessons = c.units.flatMap((u) => u.lessons);
      for (const [slug, body] of Object.entries(bySlug)) {
        if (!lessons.some((l) => l.slug === slug && l.content)) out.push(`theory ${subject}-${grade}: no written lesson "${slug}"`);
        for (const lang of ["en", "hy", "ru"] as const) if (!body[lang]?.trim()) out.push(`theory ${subject}-${grade}/${slug}: missing ${lang}`);
        if (/^#{1,2} /m.test(Object.values(body).join("\n"))) out.push(`theory ${subject}-${grade}/${slug}: use ### inside a section, the ## heading is added`);
      }
    }
  }
  return out;
}
