/**
 * Visual and interactive blocks for science and geometry lessons.
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

export type VisualBlock =
  | string
  | {
      spec: string;
      /** Where to put it: before the n-th heading (1-based, ## and ###), "top" (before the first heading) or "end". Default: before the exercises. */
      at?: number | "top" | "end";
      prompt?: I18nText;
    };
/** grade → lesson slug → blocks */
export type VisualMap = Record<number, Record<string, VisualBlock[]>>;

export const VISUALS: Record<string, VisualMap> = {
  physics: physicsVisuals,
  chemistry: chemistryVisuals,
  geometry: geometryVisuals,
};

const EXERCISES = /^#{2,3} (Exercises|Упражнения|Վարժություններ|Առաջադրանքներ)\s*$/m;
const HEADING = /^#{2,3} /gm;

function fence(spec: string, prompt?: string) {
  return `~~~sim\n${spec}${prompt?.trim() ? `\n${prompt.trim()}` : ""}\n~~~`;
}

/** Inserts the blocks into one Markdown body. */
export function placeBlocks(md: string, blocks: VisualBlock[], lang: keyof I18nText): string {
  if (!md.trim() || !blocks.length) return md;
  const heads = [...md.matchAll(HEADING)].map((m) => m.index!);
  const ex = md.match(EXERCISES)?.index;
  const inserts: Array<{ pos: number; text: string; order: number }> = [];
  blocks.forEach((b, order) => {
    const { spec, at, prompt } = typeof b === "string" ? { spec: b, at: undefined, prompt: undefined } : b;
    let pos: number;
    if (at === "top") pos = heads[0] ?? md.length;
    else if (at === "end") pos = md.length;
    else if (typeof at === "number") pos = heads[at - 1] ?? ex ?? md.length;
    else pos = ex ?? md.length;
    inserts.push({ pos, text: fence(spec, prompt?.[lang]), order });
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
