/**
 * Adaptive practice with an Elo-style learner model (Pelánek, "Applications of
 * the Elo rating system in adaptive educational systems", 2016). Every pupil
 * has an ability per skill and every question a difficulty, on one logit scale.
 * The chance of a right answer is a logistic curve of their gap, lifted by the
 * chance of guessing among the options. After each first try both move a step
 * towards what happened; the step shrinks as a rating sees more answers.
 */

/** The chance of success practice aims for: hard enough to learn from, easy enough to keep going. */
export const PRACTICE_TARGET = 0.75;

const sigmoid = (x: number) => 1 / (1 + Math.exp(-x));
const logit = (p: number) => Math.log(p / (1 - p));
const clamp = (x: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, x));

/** The chance of guessing right among `options` choices (0 when unknown). */
export const guessChance = (options?: number | null) => (options && options > 1 ? 1 / options : 0);

/** The chance a pupil of `ability` answers a question of `difficulty` right on the first try. */
export function predict(ability: number, difficulty: number, options?: number | null) {
  const g = guessChance(options);
  return g + (1 - g) * sigmoid(ability - difficulty);
}

/** Step size for a rating that has seen `n` answers: big while it knows little, small once settled. */
export const stepSize = (n: number) => 0.8 / (1 + 0.05 * n);

/**
 * One first try: how far the pupil's ability and the question's difficulty
 * move. `abilityN` and `difficultyN` are how many answers each has seen.
 */
export function eloUpdate(input: { ability: number; difficulty: number; abilityN: number; difficultyN: number; correct: boolean; options?: number | null }) {
  const p = predict(input.ability, input.difficulty, input.options);
  const err = (input.correct ? 1 : 0) - p;
  return { p, ability: stepSize(input.abilityN) * err, difficulty: -stepSize(input.difficultyN) * err };
}

/**
 * A question's starting difficulty from earlier first tries by anyone (`right`
 * of `n`), with the guessing share taken out. With no answers it starts at 0,
 * an average question. The prior counts for at most 20 answers' worth.
 */
export function priorDifficulty(right: number, n: number, options?: number | null) {
  if (n === 0) return { difficulty: 0, answers: 0 };
  const g = guessChance(options);
  const seen = (right + 1) / (n + 2);
  const known = clamp((seen - g) / (1 - g), 0.05, 0.95);
  return { difficulty: -logit(known), answers: Math.min(n, 20) };
}

/**
 * A pupil's starting ability in a skill from the questions of it they already
 * hold in memory (`right` of `cards` answered right last time). New to the
 * skill: 0. It counts for at most 10 answers' worth.
 */
export function priorAbility(right: number, cards: number) {
  if (cards === 0) return { ability: 0, answers: 0 };
  return { ability: clamp(logit((right + 1) / (cards + 2)), -2, 2), answers: Math.min(cards, 10) };
}

/** How a question feels to this pupil, from its predicted chance of success. */
export type Stretch = "easy" | "right" | "hard";
export const stretchOf = (p: number): Stretch => (p >= 0.85 ? "easy" : p >= 0.6 ? "right" : "hard");

export type Candidate = { itemId: string; p: number; lastWrong: boolean; recent: boolean };

/**
 * The next practice question: the one closest to the target chance. Questions
 * answered in the last few minutes wait their turn; one missed last time gets a
 * small pull forward. After two misses in a row the easiest question comes next,
 * so a pupil who is stuck gets a win before the next stretch.
 */
export function pickNext(candidates: Candidate[], opts: { struggling?: boolean } = {}): Candidate | null {
  if (candidates.length === 0) return null;
  const score = (c: Candidate) => (opts.struggling ? -c.p : Math.abs(c.p - PRACTICE_TARGET) - (c.lastWrong ? 0.05 : 0)) + (c.recent ? 1 : 0);
  return candidates.reduce((best, c) => (score(c) < score(best) || (score(c) === score(best) && c.itemId < best.itemId) ? c : best));
}
