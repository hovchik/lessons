import type { I18nText } from "../types";

/**
 * "Why learn this?": one line per unit linking it to everyday life, shown on
 * the course page with room for the pupil's own sentence (a utility-value
 * prompt, Hulleman & Harackiewicz 2009). grade → one line per unit, in unit order.
 */
export type RelevanceMap = Record<number, I18nText[]>;

/** Shorthand: [en, hy, ru]. */
export const r = (en: string, hy: string, ru: string): I18nText => ({ en, hy, ru });
