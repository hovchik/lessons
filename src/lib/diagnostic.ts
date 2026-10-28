/**
 * The placement test before an exam plan: a short adaptive walk over the
 * exam's skills that uses the prerequisite map to learn the most from each
 * question (the idea behind knowledge-space tests such as ALEKS).
 *
 * Every skill holds a chance that the pupil knows it, 0.5 at the start. A right
 * answer makes the skill and everything it builds on likely known; a wrong one
 * makes the skill and everything built on it likely weak. The next skill asked
 * is the open one whose answer would settle the most other open skills, so a
 * chain of units is searched from the middle, like a binary search.
 */

export type DiagSkill = { id: string; prereqs: string[] };
export type DiagAnswer = { skillId: string; itemId: string; correct: boolean };
/** `pending` is the question on show, so the answer that comes back must be to it. */
export type DiagState = { known: Record<string, number>; asked: DiagAnswer[]; pending?: { skillId: string; itemId: string } | null };

/** The test ends after this many questions… */
export const DIAG_MAX = 20;
/** …and never before this many (fewer when the exam has fewer skills), so one slip does not decide everything. */
export const DIAG_MIN = 8;

const RIGHT = 0.9;
const WRONG = 0.15;
/** What a right answer says about the skills under it, and a wrong one about the skills above it. */
const BELOW_RIGHT = 0.8;
const ABOVE_WRONG = 0.3;
/** A skill is still open while its chance is in between. */
const open = (p: number) => p > 0.35 && p < 0.65;

export function startState(skills: DiagSkill[]): DiagState {
  return { known: Object.fromEntries(skills.map((s) => [s.id, 0.5])), asked: [] };
}

/** Prerequisites (transitively) and dependents (transitively) of each skill, inside the exam. */
export function closures(skills: DiagSkill[]) {
  const ids = new Set(skills.map((s) => s.id));
  const down = new Map(skills.map((s) => [s.id, s.prereqs.filter((p) => ids.has(p))]));
  const up = new Map<string, string[]>(skills.map((s) => [s.id, []]));
  for (const [id, ps] of down) for (const p of ps) up.get(p)!.push(id);
  const walk = (start: string, next: Map<string, string[]>) => {
    const seen = new Set<string>();
    const stack = [...(next.get(start) ?? [])];
    while (stack.length) {
      const x = stack.pop()!;
      if (seen.has(x) || x === start) continue;
      seen.add(x);
      stack.push(...(next.get(x) ?? []));
    }
    return [...seen];
  };
  return new Map(skills.map((s) => [s.id, { below: walk(s.id, down), above: walk(s.id, up) }]));
}

/** The state after one answer. Skills the pupil answered directly keep their own result. */
export function applyAnswer(state: DiagState, skills: DiagSkill[], answer: DiagAnswer): DiagState {
  const asked = [...state.asked, answer];
  const tested = new Set(asked.map((a) => a.skillId));
  const known = { ...state.known, [answer.skillId]: answer.correct ? RIGHT : WRONG };
  const c = closures(skills).get(answer.skillId);
  if (c) {
    if (answer.correct) for (const id of c.below) if (!tested.has(id)) known[id] = Math.max(known[id] ?? 0.5, BELOW_RIGHT);
    if (!answer.correct) for (const id of c.above) if (!tested.has(id)) known[id] = Math.min(known[id] ?? 0.5, ABOVE_WRONG);
  }
  return { known, asked };
}

/**
 * The skill to ask about next, or null when the test is over: the open skill
 * whose answer settles the most open skills whichever way it goes (the smaller
 * of its open skills below and above, so a chain is cut in the middle), more
 * in all as a tie-break. Once none is open and the minimum is not reached, the
 * untested skill that reaches the most others by the same measure.
 */
export function nextSkill(state: DiagState, skills: DiagSkill[]): string | null {
  if (state.asked.length >= DIAG_MAX) return null;
  const tested = new Set(state.asked.map((a) => a.skillId));
  const untested = skills.filter((s) => !tested.has(s.id));
  if (!untested.length) return null;
  const c = closures(skills);
  const p = (id: string) => state.known[id] ?? 0.5;
  const reach = (id: string, onlyOpen: boolean) => {
    const { below, above } = c.get(id)!;
    const count = (xs: string[]) => xs.filter((x) => !tested.has(x) && (!onlyOpen || open(p(x)))).length;
    const b = count(below);
    const a = count(above);
    return Math.min(a, b) * 10_000 + a + b;
  };
  const openOnes = untested.filter((s) => open(p(s.id)));
  const pool = openOnes.length ? openOnes : state.asked.length < Math.min(DIAG_MIN, skills.length) ? untested : [];
  let best: string | null = null;
  let bestScore = -1;
  for (const s of pool) {
    const score = reach(s.id, openOnes.length > 0);
    if (score > bestScore) {
      best = s.id;
      bestScore = score;
    }
  }
  return best;
}

export type Band = "strong" | "shaky" | "weak";
export const bandOf = (p: number): Band => (p >= 0.7 ? "strong" : p >= 0.4 ? "shaky" : "weak");
