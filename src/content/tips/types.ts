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
  /** Slug of the lesson the trick belongs to. It is shown inside that lesson and marked on the course page. */
  lesson?: string;
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

/**
 * Tricks that belong to one lesson. Bind the course once, then list the tricks:
 *
 *   const tr = tricksFor("math", 3);
 *   tr("tables-6-7", "six-times-even", "memory", [en, hy, ru], { en, hy, ru })
 */
export const tricksFor =
  (subject: string, grade: number) =>
  (
    lesson: string,
    slug: string,
    category: TipCategory,
    title: [en: string, hy: string, ru: string],
    body: { en: string; hy: string; ru: string },
  ): TipSeed => ({ ...tip(subject, grade, slug, category, title, body), lesson });
