import { blanksIn, stepsProblems } from "@/lib/steps";
import { parseNumber } from "@/lib/questions";
import { stepsBody, type WorkedSet } from "./index";

const LANGS = ["en", "hy", "ru"] as const;

/** What is wrong with a worked set: each language on its own, then whether the languages agree. */
export function workedProblems(set: WorkedSet): string[] {
  const out: string[] = [];
  set.problems.forEach((p, pi) => {
    if (p.results.length !== set.actions.length) out.push(`problem ${pi + 1} has ${p.results.length} results for ${set.actions.length} actions`);
  });
  if (out.length) return out;
  for (const lang of LANGS) {
    for (const t of [set.intro, ...set.actions, ...set.problems.flatMap((p) => [p.problem, ...p.results])]) {
      if (t && /\n|::/.test(t[lang])) out.push(`[${lang}] "${t[lang]}" has a line break or ::`);
    }
    for (const e of stepsProblems(stepsBody(set, lang))) out.push(`[${lang}] ${e}`);
  }
  // The same blanks in every language, and numbers that mean the same number.
  set.problems.forEach((p, pi) =>
    p.results.forEach((r, si) => {
      const [en, ...rest] = LANGS.map((l) => blanksIn(r[l]));
      rest.forEach((b, li) => {
        if (b.length !== en.length) out.push(`problem ${pi + 1} step ${si + 1}: ${LANGS[li + 1]} has ${b.length} blanks, en has ${en.length}`);
        b.forEach((alts, bi) => {
          const x = parseNumber(alts[0]);
          const y = parseNumber(en[bi]?.[0] ?? "");
          if (Number.isFinite(x) !== Number.isFinite(y) || (Number.isFinite(x) && x !== y)) out.push(`problem ${pi + 1} step ${si + 1}: ${LANGS[li + 1]} blank ${bi + 1} "${alts[0]}" differs from en "${en[bi]?.[0]}"`);
        });
      });
    }),
  );
  return out;
}
