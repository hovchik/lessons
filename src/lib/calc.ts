/**
 * Auto-generated calculation practice for grades 1–9: every topic makes
 * endless problems at the pupil's grade, checked exactly (fractions and
 * decimals are compared as rationals, so 0.5 and 1/2 are both right).
 * Pure: the play page and the tests share it.
 *
 * Prompt text is plain: × ÷ and the true minus sign −, fractions written
 * a/b (the page draws them stacked; "/" never means divide), decimals with
 * a point (the page shows a comma in Armenian and Russian).
 */

export const CALC_TOPICS = ["add", "times", "divide", "multiply", "order", "fractions", "decimals", "negatives", "percent", "powers", "equations"] as const;
export type CalcTopic = (typeof CALC_TOPICS)[number];
export type CalcChoice = CalcTopic | "mix";

/** The grades each topic is made for. */
export const TOPIC_GRADES: Record<CalcTopic, [number, number]> = {
  add: [1, 4],
  times: [2, 5],
  divide: [3, 5],
  multiply: [4, 6],
  order: [3, 7],
  fractions: [4, 7],
  decimals: [5, 7],
  negatives: [6, 8],
  percent: [6, 9],
  powers: [7, 9],
  equations: [7, 9],
};

export const CALC_GRADES = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export const SPRINT_SECONDS = 60;
export const CALM_QUESTIONS = 20;

export function topicsFor(grade: number): CalcTopic[] {
  return CALC_TOPICS.filter((t) => grade >= TOPIC_GRADES[t][0] && grade <= TOPIC_GRADES[t][1]);
}

/** A problem worded in the page's language: these few need words around the numbers. */
export type Words = { key: "percentOf" | "percentUp" | "percentDown" | "whatPercent"; p?: number; n: number; m?: number };

export type Problem = {
  topic: CalcTopic;
  /** The sum to show, e.g. "3/4 + 1/8" or "3x + 5 = 20"; empty when `words` says it. */
  text: string;
  words?: Words;
  /** What is asked for: "x" for equations, "%" for a percentage, otherwise the result. */
  ask?: "x" | "%";
  answer: Rational;
  /** Whether the answer is a fraction (the pad then offers "/"). */
  fraction: boolean;
  /** Whether the answer may have a decimal point. */
  decimal: boolean;
};

// ---------- rationals ----------

export type Rational = { n: number; d: number };
const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));
export function rat(n: number, d = 1): Rational {
  if (d === 0) throw new Error("zero denominator");
  if (d < 0) return rat(-n, -d);
  const g = gcd(n, d) || 1;
  return { n: n / g, d: d / g };
}
const add = (a: Rational, b: Rational) => rat(a.n * b.d + b.n * a.d, a.d * b.d);
const sub = (a: Rational, b: Rational) => rat(a.n * b.d - b.n * a.d, a.d * b.d);
const mul = (a: Rational, b: Rational) => rat(a.n * b.n, a.d * b.d);
const div = (a: Rational, b: Rational) => rat(a.n * b.d, a.d * b.n);
export const same = (a: Rational, b: Rational) => a.n === b.n && a.d === b.d;

/** The answer as the pupil would write it: an integer, a fraction or a short decimal. */
export function showRational(r: Rational, decimal: boolean): string {
  const sign = r.n < 0 ? "−" : "";
  const n = Math.abs(r.n);
  if (r.d === 1) return sign + n;
  if (decimal) {
    // Only 2s and 5s in the denominator: a terminating decimal.
    let d = r.d;
    let places = 0;
    while (d % 10 === 0 || d % 2 === 0 || d % 5 === 0) {
      if (d % 10 === 0) d /= 10;
      else if (d % 2 === 0) d /= 2;
      else d /= 5;
      places++;
    }
    if (d === 1) return sign + (n / r.d).toFixed(Math.min(places, 6)).replace(/\.?0+$/, "");
  }
  return `${sign}${n}/${r.d}`;
}

/**
 * Reads what the pupil typed: "12", "−3", "0,75", "3/4", "-7/2". A comma is
 * a decimal comma. Anything else (two signs, "1/0", letters) is null.
 */
export function parseAnswer(raw: string): Rational | null {
  const s = raw.replace(/\s+/g, "").replace(/[−–]/g, "-").replace(",", ".");
  const m = /^(-?)(\d+(?:\.\d+)?|\.\d+)(?:\/(\d+))?$/.exec(s);
  if (!m) return null;
  const [, sign, num, den] = m;
  const [whole, frac = ""] = num.split(".");
  const top = Number((whole || "0") + frac);
  const scale = 10 ** frac.length;
  if (den !== undefined) {
    if (frac || Number(den) === 0) return null; // "1.5/2" is not a way to write a fraction
    return rat((sign ? -1 : 1) * top, Number(den));
  }
  return rat((sign ? -1 : 1) * top, scale);
}

export const isRight = (p: Problem, raw: string) => {
  const r = parseAnswer(raw);
  return r !== null && same(r, p.answer);
};

// ---------- random helpers ----------

export type Rng = () => number;
/** A small seeded generator (mulberry32) so tests can replay problems. */
export function seeded(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const int = (rng: Rng, lo: number, hi: number) => lo + Math.floor(rng() * (hi - lo + 1));
const pick = <T,>(rng: Rng, xs: readonly T[]): T => xs[Math.floor(rng() * xs.length)];
const nonZero = (rng: Rng, lo: number, hi: number) => {
  let x = 0;
  while (x === 0) x = int(rng, lo, hi);
  return x;
};

/** A number in a sum: negatives after an operator go in brackets. */
const num = (x: number, first = false) => (x < 0 ? (first ? `−${-x}` : `(−${-x})`) : String(x));
const dec = (x: number) => String(Math.round(x * 1e6) / 1e6);
const fr = (r: Rational) => (r.d === 1 ? String(r.n) : `${r.n}/${r.d}`);

const plain = (topic: CalcTopic, text: string, answer: Rational, extra: Partial<Problem> = {}): Problem => ({
  topic,
  text,
  answer,
  fraction: false,
  decimal: false,
  ...extra,
});

// ---------- generators ----------

function addSub(g: number, rng: Rng): Problem {
  const max = g <= 1 ? 20 : g === 2 ? 100 : g === 3 ? 1000 : 10000;
  const minA = g <= 1 ? 0 : g === 2 ? 10 : g === 3 ? 100 : 1000;
  if (rng() < 0.5) {
    const a = int(rng, minA, max - (g <= 1 ? 0 : 1));
    const b = int(rng, g <= 1 ? 0 : 1, max - a);
    return plain("add", `${a} + ${b}`, rat(a + b));
  }
  const a = int(rng, Math.max(minA, 1), max);
  const b = int(rng, 0, a);
  return plain("add", `${a} − ${b}`, rat(a - b));
}

function times(g: number, rng: Rng): Problem {
  const tables = g <= 2 ? [2, 3, 4, 5, 10] : [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const a = pick(rng, tables);
  const b = int(rng, g <= 3 ? 1 : 2, 10);
  return rng() < 0.5 ? plain("times", `${a} × ${b}`, rat(a * b)) : plain("times", `${b} × ${a}`, rat(a * b));
}

function divide(g: number, rng: Rng): Problem {
  if (g <= 3 || rng() < 0.4) {
    const b = int(rng, 2, 10);
    const q = int(rng, 1, 10);
    return plain("divide", `${b * q} ÷ ${b}`, rat(q));
  }
  if (g === 4) {
    const b = int(rng, 2, 9);
    const q = int(rng, 11, Math.floor(99 / b));
    return plain("divide", `${b * q} ÷ ${b}`, rat(q));
  }
  if (rng() < 0.5) {
    const b = int(rng, 2, 9);
    const q = int(rng, Math.ceil(100 / b), Math.floor(999 / b));
    return plain("divide", `${b * q} ÷ ${b}`, rat(q));
  }
  const b = pick(rng, [11, 12, 15, 20, 25]);
  const q = int(rng, 2, 12);
  return plain("divide", `${b * q} ÷ ${b}`, rat(q));
}

function multiply(g: number, rng: Rng): Problem {
  const r = rng();
  if (r < 0.25) {
    const a = int(rng, 2, g <= 4 ? 99 : 999);
    const k = pick(rng, g <= 4 ? [10, 100] : [10, 100, 1000]);
    return plain("multiply", `${a} × ${k}`, rat(a * k));
  }
  if (g <= 4 || r < 0.6) {
    const a = int(rng, 12, 99);
    const b = int(rng, 2, 9);
    return plain("multiply", `${a} × ${b}`, rat(a * b));
  }
  const a = int(rng, 11, g === 5 ? 25 : 40);
  const b = int(rng, 11, g === 5 ? 19 : 30);
  return plain("multiply", `${a} × ${b}`, rat(a * b));
}

function order(g: number, rng: Rng): Problem {
  const s = g <= 3 ? 9 : g <= 5 ? 12 : 20;
  const a = int(rng, 1, s);
  const b = int(rng, 2, Math.min(9, s));
  const c = int(rng, 2, Math.min(9, s));
  const forms: (() => Problem)[] = [
    () => plain("order", `${a} + ${b} × ${c}`, rat(a + b * c)),
    () => plain("order", `${b} × ${c} − ${Math.min(a, b * c)}`, rat(b * c - Math.min(a, b * c))),
  ];
  if (g >= 4) {
    forms.push(
      () => plain("order", `(${a} + ${b}) × ${c}`, rat((a + b) * c)),
      () => plain("order", `${a * c + b} − ${a * c} ÷ ${c}`, rat(b + a * c - a)),
      () => plain("order", `${c} × (${a + b} − ${b})`, rat(c * a)),
    );
  }
  if (g >= 6) {
    const d = int(rng, 2, 9);
    forms.push(
      () => plain("order", `${a} × (${Math.max(b, c) + 1} − ${Math.min(b, c)}) + ${d}`, rat(a * (Math.max(b, c) + 1 - Math.min(b, c)) + d)),
      () => plain("order", `${d * b} ÷ ${b} + ${a} × ${c}`, rat(d + a * c)),
      () => plain("order", `${b * b + a} − ${b}²`, rat(a)),
    );
  }
  return pick(rng, forms)();
}

function fractions(g: number, rng: Rng): Problem {
  const frac = (x: Rational, ex: Partial<Problem> = {}) => ({ fraction: true, ...ex, answer: x });
  if (g === 4) {
    const d = pick(rng, [3, 4, 5, 6, 8, 10, 12]);
    const a = int(rng, 1, d - 1);
    const b = int(rng, 1, d - 1);
    if (rng() < 0.5 || a === b) return plain("fractions", `${a}/${d} + ${b}/${d}`, rat(a + b, d), frac(rat(a + b, d)));
    const [hi, lo] = a > b ? [a, b] : [b, a];
    return plain("fractions", `${hi}/${d} − ${lo}/${d}`, rat(hi - lo, d), frac(rat(hi - lo, d)));
  }
  const dens = [2, 3, 4, 5, 6, 8, 10, 12];
  const one = () => {
    const d = pick(rng, dens);
    return rat(int(rng, 1, d - 1), d);
  };
  const x = one();
  let y = one();
  while (same(x, y)) y = one();
  const kinds = g === 5 ? ["add", "sub", "of"] : ["add", "sub", "mul", "div", "of"];
  const k = pick(rng, kinds);
  if (k === "add") return plain("fractions", `${fr(x)} + ${fr(y)}`, add(x, y), frac(add(x, y)));
  if (k === "sub") {
    const [hi, lo] = x.n * y.d > y.n * x.d ? [x, y] : [y, x];
    return plain("fractions", `${fr(hi)} − ${fr(lo)}`, sub(hi, lo), frac(sub(hi, lo)));
  }
  if (k === "mul") return plain("fractions", `${fr(x)} × ${fr(y)}`, mul(x, y), frac(mul(x, y)));
  if (k === "div") return plain("fractions", `${fr(x)} ÷ ${fr(y)}`, div(x, y), frac(div(x, y)));
  // A fraction of a whole number with a whole answer.
  const n = x.d * int(rng, 1, g === 5 ? 6 : 12);
  return plain("fractions", `${fr(x)} × ${n}`, mul(x, rat(n)), frac(mul(x, rat(n))));
}

function decimals(g: number, rng: Rng): Problem {
  const d1 = () => int(rng, 1, 99) / 10;
  const d2 = () => int(rng, 1, 999) / 100;
  const asRat = (x: number) => parseAnswer(dec(x))!;
  const ex = { decimal: true };
  const forms: (() => Problem)[] = [
    () => {
      const a = d1();
      const b = d1();
      return plain("decimals", `${dec(a)} + ${dec(b)}`, add(asRat(a), asRat(b)), ex);
    },
    () => {
      const a = d1();
      const b = d1();
      const [hi, lo] = a >= b ? [a, b] : [b, a];
      return plain("decimals", `${dec(hi)} − ${dec(lo)}`, sub(asRat(hi), asRat(lo)), ex);
    },
    () => {
      const a = d2();
      const k = pick(rng, [10, 100]);
      return plain("decimals", `${dec(a)} × ${k}`, mul(asRat(a), rat(k)), ex);
    },
    () => {
      const a = int(rng, 1, 999) / 10;
      const k = pick(rng, [10, 100]);
      return plain("decimals", `${dec(a)} ÷ ${k}`, div(asRat(a), rat(k)), ex);
    },
  ];
  if (g >= 6) {
    forms.push(
      () => {
        const a = d1();
        const k = int(rng, 2, 9);
        return plain("decimals", `${dec(a)} × ${k}`, mul(asRat(a), rat(k)), ex);
      },
      () => {
        const a = int(rng, 1, 9) / 10;
        const b = int(rng, 1, 9) / 10;
        return plain("decimals", `${dec(a)} × ${dec(b)}`, mul(asRat(a), asRat(b)), ex);
      },
      () => {
        const k = int(rng, 2, 9);
        const q = int(rng, 1, 99) / 10;
        return plain("decimals", `${dec(q * k)} ÷ ${k}`, asRat(q), ex);
      },
    );
  }
  return pick(rng, forms)();
}

function negatives(g: number, rng: Rng): Problem {
  const s = g === 6 ? 20 : 30;
  // At least one negative number, or it is just ordinary arithmetic.
  const a = nonZero(rng, -s, s);
  const b = a > 0 ? -int(rng, 1, s) : nonZero(rng, -s, s);
  const forms: (() => Problem)[] = [
    () => plain("negatives", `${num(a, true)} + ${num(b)}`, rat(a + b)),
    () => plain("negatives", `${num(a, true)} − ${num(b)}`, rat(a - b)),
  ];
  if (g >= 7) {
    const x = nonZero(rng, -12, 12);
    const y = x > 0 ? -int(rng, 1, 12) : nonZero(rng, -12, 12);
    forms.push(
      () => plain("negatives", `${num(x, true)} × ${num(y)}`, rat(x * y)),
      () => plain("negatives", `${num(x * y, true)} ÷ ${num(y)}`, rat(x)),
    );
  }
  if (g >= 8) {
    const c = nonZero(rng, -9, 9);
    forms.push(() => plain("negatives", `${num(a, true)} + ${num(b)} × ${num(c)}`, rat(a + b * c)));
  }
  return pick(rng, forms)();
}

function percent(g: number, rng: Rng): Problem {
  if (g === 6) {
    const p = pick(rng, [10, 20, 25, 50, 75]);
    const n = (100 / gcd(p, 100)) * int(rng, 1, 20);
    return plain("percent", "", rat((p * n) / 100), { words: { key: "percentOf", p, n } });
  }
  const k = pick(rng, g === 7 ? ["of", "of", "up", "down"] : ["of", "up", "down", "what"]);
  const p = pick(rng, [5, 10, 15, 20, 25, 30, 40, 50, 60, 75]);
  const n = (100 / gcd(p, 100)) * int(rng, 1, g === 7 ? 12 : 30);
  if (k === "of") return plain("percent", "", rat((p * n) / 100), { words: { key: "percentOf", p, n } });
  if (k === "up") return plain("percent", "", rat(n + (p * n) / 100), { words: { key: "percentUp", p, n } });
  if (k === "down") return plain("percent", "", rat(n - (p * n) / 100), { words: { key: "percentDown", p, n } });
  // "What percent of m is n?"
  const m = pick(rng, [20, 25, 40, 50, 80, 200, 400, 500]);
  const part = (m * p) / 100;
  if (!Number.isInteger(part)) return plain("percent", "", rat((p * n) / 100), { words: { key: "percentOf", p, n } });
  return plain("percent", "", rat(p), { words: { key: "whatPercent", n: part, m }, ask: "%" });
}

function powers(g: number, rng: Rng): Problem {
  const forms: (() => Problem)[] = [
    () => {
      const a = int(rng, 2, g === 7 ? 15 : 20);
      return plain("powers", `${a}²`, rat(a * a));
    },
    () => {
      const a = int(rng, 1, 5);
      return plain("powers", `${a}³`, rat(a ** 3));
    },
    () => {
      const e = int(rng, 2, 10);
      return plain("powers", `2${sup(e)}`, rat(2 ** e));
    },
    () => {
      const e = int(rng, 1, 6);
      return plain("powers", `10${sup(e)}`, rat(10 ** e));
    },
  ];
  if (g >= 8) {
    forms.push(
      () => {
        const a = int(rng, 1, 20);
        return plain("powers", `√${a * a}`, rat(a));
      },
      () => {
        const a = int(rng, 2, 9);
        return plain("powers", `(−${a})²`, rat(a * a));
      },
      () => {
        const a = int(rng, 2, 9);
        return plain("powers", `−${a}²`, rat(-a * a));
      },
      () => plain("powers", `${int(rng, 2, 99)}⁰`, rat(1)),
    );
  }
  if (g >= 9) {
    forms.push(
      () => {
        const m = int(rng, 1, 4);
        const n = int(rng, 1, 4);
        return plain("powers", `2${sup(m)} × 2${sup(n)}`, rat(2 ** (m + n)));
      },
      () => {
        const a = pick(rng, [4, 9, 16, 25]);
        const b = pick(rng, [4, 9, 16, 25, 36, 49]);
        return plain("powers", `√(${a} × ${b})`, rat(Math.sqrt(a * b)));
      },
      () => {
        const m = int(rng, 4, 8);
        const n = int(rng, 1, m - 1);
        return plain("powers", `3${sup(m)} ÷ 3${sup(n)}`, rat(3 ** (m - n)));
      },
    );
  }
  return pick(rng, forms)();
}
const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const sup = (n: number) => [...String(n)].map((c) => SUP[Number(c)]).join("");

function equations(g: number, rng: Rng): Problem {
  const x = nonZero(rng, -10, 10);
  const a = int(rng, 2, 9);
  const b = nonZero(rng, -20, 20);
  const lin = (k: number, c: number) => `${k === 1 ? "" : k === -1 ? "−" : num(k, true)}x${c === 0 ? "" : c > 0 ? ` + ${c}` : ` − ${-c}`}`;
  const eq = (text: string): Problem => plain("equations", text, rat(x), { ask: "x" });
  const forms: (() => Problem)[] = [() => eq(`${lin(a, b)} = ${num(a * x + b, true)}`)];
  if (g === 7) forms.push(() => eq(`${lin(1, b)} = ${num(x + b, true)}`));
  if (g >= 8) {
    const c = int(rng, 1, a - 1);
    const d = a * x + b - c * x;
    forms.push(() => eq(`${lin(a, b)} = ${lin(c, d)}`));
  }
  if (g >= 9) {
    forms.push(
      () => eq(`${a}(x${b > 0 ? ` + ${b}` : ` − ${-b}`}) = ${num(a * (x + b), true)}`),
      () => {
        const q = nonZero(rng, -6, 6);
        // x / a + b = c with a whole x: build x as a multiple of a.
        const xx = q * a;
        return { ...plain("equations", `x/${a} ${b > 0 ? "+" : "−"} ${Math.abs(b)} = ${num(q + b, true)}`, rat(xx)), ask: "x" as const };
      },
    );
  }
  return pick(rng, forms)();
}

const GENERATORS: Record<CalcTopic, (g: number, rng: Rng) => Problem> = {
  add: addSub,
  times,
  divide,
  multiply,
  order,
  fractions,
  decimals,
  negatives,
  percent,
  powers,
  equations,
};

/**
 * One problem for a grade. A topic outside the grade's range is clamped to
 * its nearest grade, so the difficulty never jumps; "mix" draws from all of
 * the grade's topics.
 */
export function makeProblem(choice: CalcChoice, grade: number, rng: Rng = Math.random): Problem {
  const topic = choice === "mix" ? pick(rng, topicsFor(grade)) : choice;
  const [lo, hi] = TOPIC_GRADES[topic];
  return GENERATORS[topic](Math.min(hi, Math.max(lo, grade)), rng);
}

/** The next problem, avoiding the last few so the same sum doesn't come right back. */
export function nextProblem(choice: CalcChoice, grade: number, recent: string[], rng: Rng = Math.random): Problem {
  let p = makeProblem(choice, grade, rng);
  for (let i = 0; i < 12 && recent.includes(problemKey(p)); i++) p = makeProblem(choice, grade, rng);
  return p;
}
export const problemKey = (p: Problem) => p.text || JSON.stringify(p.words);

/** The id a score is saved under, e.g. "calc:times:3". */
export const calcGameId = (choice: CalcChoice, grade: number) => `calc:${choice}:${grade}`;
export function parseCalcGameId(id: string): { choice: CalcChoice; grade: number } | null {
  const m = /^calc:([a-z]+):([1-9])$/.exec(id);
  if (!m) return null;
  const choice = m[1] as CalcChoice;
  if (choice !== "mix" && !CALC_TOPICS.includes(choice)) return null;
  return { choice, grade: Number(m[2]) };
}
