import type { I18nText } from "../types";

/**
 * One set of similar problems. Every problem has the same steps (`actions`, said
 * the same way each time so the method carries over), and `results` gives the
 * line each step leads to, with [[…]] around what the pupil types once faded.
 */
export type WorkedSet = {
  intro?: I18nText;
  actions: I18nText[];
  problems: Array<{ problem: I18nText; results: I18nText[] }>;
};
/** grade → lesson slug → sets */
export type WorkedMap = Record<number, Record<string, WorkedSet[]>>;

/**
 * Text written once for all three languages from the English: hy and ru get a
 * decimal comma and ":" for division, and ru the "·" for multiplication.
 */
export function mt(en: string): I18nText {
  const comma = (s: string) => s.replace(/(\d)\.(\d)/g, "$1,$2").replace(/÷/g, ":");
  return { en, hy: comma(en), ru: comma(en).replace(/×/g, "·") };
}
