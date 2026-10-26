import type { I18nText, TipCategory } from "@/server/db/schema";
import { t } from "../types";

export type { TipCategory };

/** A tip or trick that goes beyond the standard course for one grade of one subject. */
export type TipSeed = {
  subject: string;
  grade: number;
  slug: string;
  category: TipCategory;
  title: I18nText;
  /** Markdown body per language (GFM + KaTeX). Keep it short: one idea, one example. */
  body: I18nText;
};

/** Shorthand for one tip. */
export const tip = (
  subject: string,
  grade: number,
  slug: string,
  category: TipCategory,
  title: [en: string, hy: string, ru: string],
  body: { en: string; hy: string; ru: string },
): TipSeed => ({ subject, grade, slug, category, title: t(...title), body });
