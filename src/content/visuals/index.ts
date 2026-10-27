/**
 * Visual and interactive blocks for science, math and language lessons.
 *
 * The lesson texts stay as they are written; this layer adds ~~~sim blocks to every language
 * of a lesson when the courses are loaded, so English, Armenian and Russian (and any later
 * translation overlay) get the same simulations, step-by-step mechanisms and quick checks.
 * A block's spec line is language-independent; widgets carry their own words in all three
 * languages, and an optional prompt can be given per language.
 */
import type { CourseSeed, I18nText } from "../types";
import { chemistryVisuals } from "./chemistry";
import { geometryVisuals } from "./geometry";
import { physicsVisuals } from "./physics";
import { mathVisuals } from "./math";
import { algebraVisuals } from "./algebra";
import { armenianVisuals } from "./armenian";
import { russianVisuals } from "./russian";
import { englishVisuals } from "./english";
import { biologyVisuals } from "./biology";
import { geographyVisuals } from "./geography";
import { armenianHistoryVisuals } from "./armenian-history";
import { worldHistoryVisuals } from "./world-history";

type At = {
  /** Where to put it: before the n-th heading (1-based, ## and ###), "top" (before the first heading) or "end". Default: before the exercises. */
  at?: number | "top" | "end";
};
export type VisualBlock =
  | string
  | (At & { spec: string; prompt?: I18nText; md?: undefined })
  /** Extra Markdown in each language (explanations, facts, worked examples), placed like a block. */
  | (At & { md: I18nText; spec?: undefined; prompt?: undefined });
/** grade → lesson slug → blocks */
export type VisualMap = Record<number, Record<string, VisualBlock[]>>;

export const VISUALS: Record<string, VisualMap> = {
  physics: physicsVisuals,
  chemistry: chemistryVisuals,
  geometry: geometryVisuals,
  math: mathVisuals,
  algebra: algebraVisuals,
  armenian: armenianVisuals,
  russian: russianVisuals,
  english: englishVisuals,
  biology: biologyVisuals,
  geography: geographyVisuals,
  "armenian-history": armenianHistoryVisuals,
  "world-history": worldHistoryVisuals,
};

const EXERCISES = /^#{2,3} (Exercises|Упражнения|Задания|Վարժություններ|Առաջադրանքներ)\s*$/m;
/** Without an Exercises heading (reviews, practice pages), blocks go before the first heading that starts the tasks or answers. */
const TASKS = /^#{2,3} .*(exercises|practice|test|answers|match it|упражнения|задания|практика|проверка|ответы|соедини|վարժություն|առաջադրանք|ստուգում|պատասխան).*$/im;
const HEADING = /^#{2,3} /gm;

function fence(spec: string, prompt?: string) {
  return `~~~sim\n${spec}${prompt?.trim() ? `\n${prompt.trim()}` : ""}\n~~~`;
}

/** Inserts the blocks into one Markdown body. */
export function placeBlocks(md: string, blocks: VisualBlock[], lang: keyof I18nText): string {
  if (!md.trim() || !blocks.length) return md;
  const heads = [...md.matchAll(HEADING)].map((m) => m.index!);
  const ex = md.match(EXERCISES)?.index ?? md.match(TASKS)?.index;
  const inserts: Array<{ pos: number; text: string; order: number }> = [];
  blocks.forEach((b, order) => {
    const { spec, at, prompt, md: extra } = typeof b === "string" ? { spec: b, at: undefined, prompt: undefined, md: undefined } : b;
    if (extra && !extra[lang]?.trim()) return;
    let pos: number;
    if (at === "top") pos = heads[0] ?? md.length;
    else if (at === "end") pos = md.length;
    else if (typeof at === "number") pos = heads[at - 1] ?? ex ?? md.length;
    else pos = ex ?? md.length;
    inserts.push({ pos, text: extra ? extra[lang].trim() : fence(spec!, prompt?.[lang]), order });
  });
  inserts.sort((a, b) => b.pos - a.pos || b.order - a.order);
  let out = md;
  for (const { pos, text } of inserts) {
    const before = out.slice(0, pos).replace(/\s*$/, "");
    const after = out.slice(pos).replace(/^\s*/, "");
    out = `${before}\n\n${text}\n\n${after}`.replace(/\n+$/, "\n");
  }
  return out;
}

/** Adds the visual blocks to the courses that have them. */
export function withVisuals(courses: CourseSeed[]): CourseSeed[] {
  return courses.map((c) => {
    const map = VISUALS[c.subject]?.[c.grade];
    if (!map) return c;
    return {
      ...c,
      units: c.units.map((u) => ({
        ...u,
        lessons: u.lessons.map((l) => {
          const blocks = map[l.slug];
          if (!blocks?.length || !l.content) return l;
          const content = { ...l.content };
          for (const lang of ["en", "hy", "ru"] as const) content[lang] = placeBlocks(content[lang] ?? "", blocks, lang);
          return { ...l, content };
        }),
      })),
    };
  });
}
