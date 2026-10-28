import type { I18nText, QuizQuestion } from "@/server/db/schema";

/**
 * The question kinds beyond multiple choice, in one place: how a question is
 * shown (order items and match answers mixed), what a pupil's answer looks
 * like, and how it is checked. Pages that keep the answer from the browser
 * send only the `Shown` part; the `Key` checks the answer, on the server or,
 * where the answer is shown straight after anyway, in the browser.
 */

export type QuestionKind = "choice" | "number" | "gap" | "order" | "match";

/**
 * A pupil's answer: the option index (choice), the typed text (number), one
 * text per gap (gap), the shown items in the pupil's order (order), or for
 * each left item the index of the shown right item picked, -1 for none (match).
 */
export type QuizResponse = number | string | string[] | number[];

export type Shown<T> =
  | { kind: "choice"; prompt: T; options: T[] }
  | { kind: "number"; prompt: T; unit?: T }
  | { kind: "gap"; prompt: T; text: T; gaps: number }
  | { kind: "order"; prompt: T; items: T[] }
  | { kind: "match"; prompt: T; left: T[]; right: T[] };

export type Key<T> =
  | { kind: "choice"; answer: number }
  | { kind: "number"; answer: number; tolerance: number }
  | { kind: "gap"; accepted: T[] }
  /** The shown items' indices in the right order. */
  | { kind: "order"; answer: number[] }
  /** For each left item, the index of its shown right item. */
  | { kind: "match"; answer: number[] };

export const kindOf = (q: { kind?: QuestionKind }): QuestionKind => q.kind ?? "choice";

/** The gap marker in a gap question's text. */
export const GAP = "___";

/**
 * A fixed mix of 0..n-1 for one question, the same on every page and visit:
 * position i shows original item perm[i]. Never the written order, which is
 * the answer.
 */
export function displayOrder(seed: string, n: number): number[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619) >>> 0;
  const perm = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822519) >>> 0;
    const j = h % (i + 1);
    [perm[i], perm[j]] = [perm[j], perm[i]];
  }
  // A shuffle can land on the answer itself; turning it by one never does.
  if (n > 1 && perm.every((p, i) => p === i)) return perm.map((_, i) => (i + 1) % n);
  return perm;
}

const inverse = (perm: number[]) => perm.reduce<number[]>((inv, p, i) => ((inv[p] = i), inv), []);

/** How a question is shown and checked. `seed` (its item id) fixes how order and match items are mixed. */
export function displayForm(q: QuizQuestion, seed: string): { shown: Shown<I18nText>; key: Key<I18nText> } {
  switch (q.kind) {
    case "number":
      return { shown: { kind: "number", prompt: q.prompt, ...(q.unit ? { unit: q.unit } : {}) }, key: { kind: "number", answer: q.answer, tolerance: q.tolerance ?? 0 } };
    case "gap":
      return { shown: { kind: "gap", prompt: q.prompt, text: q.text, gaps: q.gaps.length }, key: { kind: "gap", accepted: q.gaps } };
    case "order": {
      const perm = displayOrder(seed, q.items.length);
      return { shown: { kind: "order", prompt: q.prompt, items: perm.map((p) => q.items[p]) }, key: { kind: "order", answer: inverse(perm) } };
    }
    case "match": {
      const perm = displayOrder(seed, q.pairs.length);
      return { shown: { kind: "match", prompt: q.prompt, left: q.pairs.map((p) => p[0]), right: perm.map((p) => q.pairs[p][1]) }, key: { kind: "match", answer: inverse(perm) } };
    }
    default:
      return { shown: { kind: "choice", prompt: q.prompt, options: q.options }, key: { kind: "choice", answer: q.answer } };
  }
}

/** The shown question in one language. */
export function localShown<T>(s: Shown<T>, f: (t: T) => string): Shown<string> {
  switch (s.kind) {
    case "choice":
      return { kind: "choice", prompt: f(s.prompt), options: s.options.map(f) };
    case "number":
      return { kind: "number", prompt: f(s.prompt), ...(s.unit ? { unit: f(s.unit) } : {}) };
    case "gap":
      return { kind: "gap", prompt: f(s.prompt), text: f(s.text), gaps: s.gaps };
    case "order":
      return { kind: "order", prompt: f(s.prompt), items: s.items.map(f) };
    case "match":
      return { kind: "match", prompt: f(s.prompt), left: s.left.map(f), right: s.right.map(f) };
  }
}

/** The key in one language (only gap answers are text). */
export const localKey = <T,>(k: Key<T>, f: (t: T) => string): Key<string> => (k.kind === "gap" ? { kind: "gap", accepted: k.accepted.map(f) } : k);

/** Typed text as compared with an accepted answer: case, spacing, curly quotes, ё and end punctuation do not count. */
export function normalizeAnswer(s: string) {
  return s
    .normalize("NFC")
    .toLowerCase()
    .replace(/[’‘ʼ`]/g, "'")
    .replace(/ё/g, "е")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.,!?;:։․՞՜]+$/u, "")
    .trim();
}

/** Every accepted answer for one gap, in any language: a pupil may type the one they know. */
function acceptedFor(a: string | I18nText): Set<string> {
  const texts = typeof a === "string" ? [a] : [a.en, a.hy, a.ru];
  return new Set(texts.flatMap((t) => t.split("|")).map(normalizeAnswer).filter(Boolean));
}

/** A typed number: decimal point or comma, spaces between thousands and a typographic minus are fine. NaN if it is not a number. */
export function parseNumber(s: string): number {
  let t = s.replace(/[\s  ]/g, "").replace(/[−–]/g, "-");
  t = t.includes(".") ? t.replace(/,/g, "") : t.replace(",", ".");
  return /^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(t) ? Number(t) : NaN;
}

const isPermutation = (r: unknown, n: number) => Array.isArray(r) && r.length === n && new Set(r).size === n && r.every((x) => Number.isInteger(x) && x >= 0 && x < n);

/** Whether `r` has the shape this question takes (not whether it is right). */
export function validResponse(s: Shown<unknown>, r: unknown): r is QuizResponse {
  switch (s.kind) {
    case "choice":
      return Number.isInteger(r) && (r as number) >= 0 && (r as number) < s.options.length;
    case "number":
      return typeof r === "string" && r.length <= 40;
    case "gap":
      return Array.isArray(r) && r.length === s.gaps && r.every((x) => typeof x === "string" && x.length <= 80);
    case "order":
      return isPermutation(r, s.items.length);
    case "match":
      return Array.isArray(r) && r.length === s.left.length && r.every((x) => Number.isInteger(x) && x >= -1 && x < s.right.length);
  }
}

/** Whether an answer is right. A wrong shape is simply wrong. */
export function isRight(k: Key<string | I18nText>, r: QuizResponse | null | undefined): boolean {
  if (r === null || r === undefined) return false;
  switch (k.kind) {
    case "choice":
      return r === k.answer;
    case "number": {
      const x = typeof r === "string" ? parseNumber(r) : NaN;
      return Number.isFinite(x) && Math.abs(x - k.answer) <= k.tolerance + 1e-9 * Math.max(1, Math.abs(k.answer));
    }
    case "gap":
      return Array.isArray(r) && r.length === k.accepted.length && k.accepted.every((a, i) => typeof r[i] === "string" && acceptedFor(a).has(normalizeAnswer(r[i] as string)));
    case "order":
    case "match":
      return Array.isArray(r) && r.length === k.answer.length && k.answer.every((a, i) => r[i] === a);
  }
}

/** Checks an answer to a stored question (on the server). */
export function gradeQuestion(q: QuizQuestion, seed: string, r: QuizResponse | null | undefined) {
  return isRight(displayForm(q, seed).key, r);
}

/** Which parts of an order or match answer are right (for colouring them); gap: each gap. */
export function partsRight(k: Key<string | I18nText>, r: QuizResponse | undefined): boolean[] {
  if (!Array.isArray(r)) return [];
  if (k.kind === "gap") return k.accepted.map((a, i) => typeof r[i] === "string" && acceptedFor(a).has(normalizeAnswer(r[i] as string)));
  if (k.kind === "order" || k.kind === "match") return k.answer.map((a, i) => r[i] === a);
  return [];
}

/**
 * How many answers a pupil could pick from blindly, so the ratings know how
 * likely a lucky guess is: the options, or every possible order. Typed answers
 * cannot be guessed (null).
 */
export function guessCount(s: Shown<unknown>): number | null {
  if (s.kind === "choice") return s.options.length;
  if (s.kind === "number" || s.kind === "gap") return null;
  const n = s.kind === "order" ? s.items.length : s.left.length;
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

/** A number written the local way: a decimal comma in Armenian and Russian. */
export const formatNumber = (x: number, locale: string) => (locale === "en" ? String(x) : String(x).replace(".", ","));

const fillGaps = (text: string, parts: string[]) => {
  let i = 0;
  return text.replace(/_{3,}/g, () => parts[i++] || "…");
};

/** The right answer as one line of text. */
export function answerText(s: Shown<string>, k: Key<string>, locale: string): string {
  if (s.kind === "choice" && k.kind === "choice") return s.options[k.answer] ?? "";
  if (s.kind === "number" && k.kind === "number") return `${formatNumber(k.answer, locale)}${s.unit ? ` ${s.unit}` : ""}`;
  if (s.kind === "gap" && k.kind === "gap") return fillGaps(s.text, k.accepted.map((a) => a.split("|")[0]));
  if (s.kind === "order" && k.kind === "order") return k.answer.map((d) => s.items[d]).join(" → ");
  if (s.kind === "match" && k.kind === "match") return s.left.map((l, i) => `${l} — ${s.right[k.answer[i]]}`).join("; ");
  return "";
}

/** A pupil's answer as one line of text (for "your answer"). */
export function responseText(s: Shown<string>, r: QuizResponse | null | undefined): string {
  if (r === null || r === undefined) return "";
  if (s.kind === "choice") return typeof r === "number" ? (s.options[r] ?? "") : "";
  if (s.kind === "number") return typeof r === "string" ? `${r}${s.unit ? ` ${s.unit}` : ""}` : "";
  if (!Array.isArray(r)) return "";
  if (s.kind === "gap") return fillGaps(s.text, r.map(String));
  if (s.kind === "order") return r.map((d) => s.items[d as number] ?? "").join(" → ");
  return s.left.map((l, i) => `${l} — ${s.right[r[i] as number] ?? "…"}`).join("; ");
}

/** Whether an answer is complete enough to check: an option picked, a box filled in, every gap and pair. */
export function isComplete(s: Shown<unknown>, r: QuizResponse | undefined): boolean {
  switch (s.kind) {
    case "choice":
      return typeof r === "number";
    case "number":
      return typeof r === "string" && Number.isFinite(parseNumber(r));
    case "gap":
      return Array.isArray(r) && r.length === s.gaps && r.every((x) => typeof x === "string" && x.trim() !== "");
    case "order":
      // The items start in the shown order, which is an answer too.
      return true;
    case "match":
      return Array.isArray(r) && r.length === s.left.length && r.every((x) => typeof x === "number" && x >= 0);
  }
}

/** The answer to send for an order question nobody moved: the items as shown. */
export const defaultResponse = (s: Shown<unknown>, r: QuizResponse | undefined): QuizResponse | undefined =>
  r === undefined && s.kind === "order" ? s.items.map((_, i) => i) : r;

/** What an answer event stores for one answer: right or not, and the option (choice) or the response (any other kind). */
export function recordFor(s: Shown<unknown>, k: Key<string | I18nText>, r: QuizResponse) {
  const choice = s.kind === "choice";
  return { correct: isRight(k, r), choice: choice && typeof r === "number" ? r : null, response: choice ? null : r, options: guessCount(s) };
}

/** The same, for a stored question. */
export function answerRecord(q: QuizQuestion, seed: string, r: QuizResponse) {
  const { shown, key } = displayForm(q, seed);
  return recordFor(shown, key, r);
}
