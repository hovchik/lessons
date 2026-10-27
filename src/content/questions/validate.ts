import type { I18nText, QuizQuestion } from "../types";
import { GAP, parseNumber } from "@/lib/questions";

type Lang = keyof I18nText;

const gapsIn = (s: string) => s.split(GAP).length - 1;
const dupes = (xs: string[]) => xs.filter((x, i) => xs.indexOf(x) !== i);

/** What is wrong with one quiz question, checked in the given languages (empty when nothing). */
export function questionProblems(qq: QuizQuestion, langs: readonly Lang[]): string[] {
  const out: string[] = [];
  const text = (t: I18nText | undefined, what: string) => {
    for (const lang of langs) if (!t?.[lang]?.trim()) out.push(`${what} missing ${lang}`);
  };
  text(qq.prompt, "prompt");
  if (qq.explanation) for (const lang of langs) if (!qq.explanation[lang]?.trim()) out.push(`explanation missing ${lang}`);
  switch (qq.kind) {
    case "number":
      if (!Number.isFinite(qq.answer)) out.push("answer is not a number");
      if (qq.tolerance !== undefined && !(qq.tolerance >= 0)) out.push("tolerance must be 0 or more");
      if (qq.unit) text(qq.unit, "unit");
      // The answer as it is written must be accepted when typed.
      if (Number.isFinite(qq.answer) && parseNumber(String(qq.answer)) !== qq.answer) out.push("answer cannot be typed back");
      break;
    case "gap":
      if (qq.gaps.length === 0) out.push("no gaps");
      for (const lang of langs) {
        if (gapsIn(qq.text[lang] ?? "") !== qq.gaps.length) out.push(`${lang} text has ${gapsIn(qq.text[lang] ?? "")} ${GAP} for ${qq.gaps.length} gaps`);
        qq.gaps.forEach((g, gi) => {
          if (!g[lang]?.split("|").every((a) => a.trim())) out.push(`gap ${gi + 1} missing ${lang} answer`);
        });
      }
      break;
    case "order":
      if (qq.items.length < 3 || qq.items.length > 8) out.push("order needs 3 to 8 items");
      qq.items.forEach((it, i) => text(it, `item ${i + 1}`));
      for (const lang of langs) for (const d of dupes(qq.items.map((i) => i[lang]))) out.push(`duplicate ${lang} item "${d}"`);
      break;
    case "match":
      if (qq.pairs.length < 3 || qq.pairs.length > 8) out.push("match needs 3 to 8 pairs");
      qq.pairs.forEach(([l, r], i) => {
        text(l, `pair ${i + 1} left`);
        text(r, `pair ${i + 1} right`);
      });
      for (const lang of langs) {
        for (const d of dupes(qq.pairs.map((p) => p[0][lang]))) out.push(`duplicate ${lang} left "${d}"`);
        for (const d of dupes(qq.pairs.map((p) => p[1][lang]))) out.push(`duplicate ${lang} right "${d}"`);
      }
      break;
    default:
      if (qq.answer < 0 || qq.answer >= qq.options.length) out.push("answer out of range");
      if (qq.options.length < 2) out.push("needs at least 2 options");
      qq.options.forEach((o, oi) => text(o, `option ${oi + 1}`));
  }
  return out;
}
