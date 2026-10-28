/**
 * Worked examples with fading: a ~~~sim block whose spec is `steps`.
 *
 *   ~~~sim
 *   steps
 *   Solve the equations. (optional intro, Markdown)
 *   ? 2(x − 3) = 10
 *   - Open the brackets :: 2x − [[6]] = 10
 *   - Move −6 to the right side :: 2x = [[16]]
 *   - Divide both sides by 2 :: x = [[8]]
 *   ? 3(x + 2) = 21
 *   - …
 *   ~~~
 *
 * "?" starts a problem and "-" is one step: what is done, "::", then the line it
 * gives. `[[…]]` marks what the pupil types once that step is faded (answers
 * separated by "|"). The first problem is fully worked; each next one leaves
 * more of the last steps to the pupil, and the last one leaves all of them.
 */
import { normalizeAnswer, parseNumber } from "./questions";

export type Step = { action: string; result: string };
export type Problem = { problem: string; steps: Step[] };
export type StepsDoc = { intro: string; problems: Problem[] };

export const BLANK = /\[\[([^\]]*)\]\]/g;

export function parseSteps(body: string): StepsDoc {
  const intro: string[] = [];
  const problems: Problem[] = [];
  for (const raw of body.split("\n")) {
    const line = raw.trim();
    if (line.startsWith("? ")) problems.push({ problem: line.slice(2).trim(), steps: [] });
    else if (line.startsWith("- ") && problems.length) {
      const text = line.slice(2);
      const cut = text.indexOf("::");
      const [action, result] = cut === -1 ? ["", text] : [text.slice(0, cut), text.slice(cut + 2)];
      problems[problems.length - 1].steps.push({ action: action.trim(), result: result.trim() });
    } else if (!problems.length) intro.push(raw);
  }
  return { intro: intro.join("\n").trim(), problems };
}

/** A step's line cut into plain text and blanks (each blank's accepted answers). */
export function resultParts(result: string): Array<string | { blank: number; accepted: string[] }> {
  const out: Array<string | { blank: number; accepted: string[] }> = [];
  let last = 0;
  let n = 0;
  for (const m of result.matchAll(BLANK)) {
    if (m.index! > last) out.push(result.slice(last, m.index));
    out.push({ blank: n++, accepted: m[1].split("|").map((a) => a.trim()) });
    last = m.index! + m[0].length;
  }
  if (last < result.length) out.push(result.slice(last));
  return out;
}

export const blanksIn = (result: string) => [...result.matchAll(BLANK)].map((m) => m[1].split("|").map((a) => a.trim()));

/** The step's line as the worked solution shows it: each blank filled with its first answer. */
export const filled = (result: string) => result.replace(BLANK, (_m, a: string) => a.split("|")[0].trim());

/** Whether a typed blank is right: equal as a number (decimal comma, typographic minus) or as normalised text. */
export function blankRight(accepted: string[], typed: string): boolean {
  if (!typed.trim()) return false;
  const x = parseNumber(typed);
  return accepted.some((a) => {
    const y = parseNumber(a);
    if (Number.isFinite(y) && Number.isFinite(x)) return Math.abs(x - y) <= 1e-9 * Math.max(1, Math.abs(y));
    return normalizeAnswer(a) === normalizeAnswer(typed);
  });
}

/**
 * How many of the last steps problem `k` (from 0) of `n` leaves to the pupil,
 * when each has `s` steps: none in the first, all in the last, evenly between
 * (backward fading).
 */
export function fadedSteps(k: number, n: number, s: number): number {
  if (k <= 0 || n < 2) return 0;
  if (k >= n - 1) return s;
  return Math.min(s - 1, Math.max(1, Math.round((k * s) / (n - 1))));
}

/** What is wrong with a steps block's body (for content:check). */
export function stepsProblems(body: string): string[] {
  const doc = parseSteps(body);
  const out: string[] = [];
  if (doc.problems.length < 2) out.push("needs at least 2 problems");
  const s = doc.problems[0]?.steps.length ?? 0;
  doc.problems.forEach((p, pi) => {
    if (!p.problem) out.push(`problem ${pi + 1} has no text`);
    if (p.steps.length < 1 || p.steps.length > 6) out.push(`problem ${pi + 1} needs 1 to 6 steps`);
    if (p.steps.length !== s) out.push(`problem ${pi + 1} has ${p.steps.length} steps, the first has ${s}`);
    p.steps.forEach((st, si) => {
      const where = `problem ${pi + 1} step ${si + 1}`;
      if (!st.action) out.push(`${where} has no action before ::`);
      const blanks = blanksIn(st.result);
      if (!blanks.length) out.push(`${where} has no [[blank]]`);
      if (blanks.some((b) => b.some((a) => !a))) out.push(`${where} has an empty answer`);
      // The answer as written must be accepted when the pupil types it.
      for (const b of blanks) for (const a of b) if (a && !blankRight(b, a)) out.push(`${where}: "${a}" would not be accepted`);
    });
  });
  return out;
}
