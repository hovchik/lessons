/**
 * Worked examples with fading, added to lessons when the courses are loaded
 * (like the visuals maps): each set becomes a ~~~sim steps block before the
 * exercises, in every language. See src/lib/steps.ts for what the pupil sees.
 */
import type { CourseSeed, I18nText } from "../types";
import type { WorkedMap, WorkedSet } from "./kit";
import { placeBlocks } from "../visuals";
import { mathWorked, algebraWorked, geometryWorked } from "./math";
import { physicsWorked, chemistryWorked } from "./science";

export type { WorkedMap, WorkedSet } from "./kit";

type Lang = keyof I18nText;

export const WORKED: Record<string, WorkedMap> = {
  math: mathWorked,
  algebra: algebraWorked,
  geometry: geometryWorked,
  physics: physicsWorked,
  chemistry: chemistryWorked,
};

/** The block's body in one language. */
export function stepsBody(set: WorkedSet, lang: Lang): string {
  const lines = set.intro?.[lang]?.trim() ? [set.intro[lang].trim()] : [];
  for (const p of set.problems) {
    lines.push(`? ${p.problem[lang]}`);
    set.actions.forEach((a, i) => lines.push(`- ${a[lang]} :: ${p.results[i][lang]}`));
  }
  return lines.join("\n");
}

const fence = (set: WorkedSet, lang: Lang) => `~~~sim\nsteps\n${stepsBody(set, lang)}\n~~~`;

/** Adds the worked examples to the lessons that have them. */
export function withWorked(courses: CourseSeed[]): CourseSeed[] {
  return courses.map((c) => {
    const map = WORKED[c.subject]?.[c.grade];
    if (!map) return c;
    return {
      ...c,
      units: c.units.map((u) => ({
        ...u,
        lessons: u.lessons.map((l) => {
          const sets = map[l.slug];
          if (!sets?.length || !l.content) return l;
          const content = { ...l.content };
          for (const lang of ["en", "hy", "ru"] as const) {
            content[lang] = placeBlocks(content[lang] ?? "", sets.map((s) => ({ md: { en: "", hy: "", ru: "", [lang]: fence(s, lang) } })), lang);
          }
          return { ...l, content };
        }),
      })),
    };
  });
}
