/**
 * Mastery levels for a skill (one unit of a course, see src/content/skills).
 * The level is worked out from what the learner model already holds: the
 * review card of every quiz question the pupil has met in the skill's lessons,
 * and their latest unit check. Cards keep up with forgetting (a missed Daily
 * Review question turns its card wrong), so mastery has to be kept, not just
 * earned once.
 */

export type MasteryLevel = "none" | "familiar" | "proficient" | "mastered";
export const MASTERY_LEVELS: MasteryLevel[] = ["none", "familiar", "proficient", "mastered"];

/** A unit check passes, and can make a skill Mastered, from this share of right answers. */
export const UNIT_CHECK_PASS = 0.8;
/** Questions in one unit check. */
export const UNIT_CHECK_SIZE = 10;

export type SkillEvidence = {
  /** Published lessons of the skill that have a quiz. */
  lessons: number;
  /** Of those, how many the pupil has answered at least one question of. */
  lessonsTried: number;
  /** Questions of the skill the pupil holds a review card for, and how many of them were last answered right. */
  cards: number;
  correct: number;
  /** The latest unit check, 0..1, or null if never taken. */
  lastCheck: number | null;
};

/**
 * - Familiar: has answered something in the skill.
 * - Proficient: has tried most of its lessons and gets most questions right now,
 *   or nearly passed its unit check.
 * - Mastered: passed the latest unit check and still gets at least 80% right.
 */
export function masteryLevel(e: SkillEvidence): MasteryLevel {
  if (e.cards === 0 && e.lastCheck === null) return "none";
  const accuracy = e.cards ? e.correct / e.cards : 0;
  if (e.lastCheck !== null && e.lastCheck >= UNIT_CHECK_PASS && accuracy >= 0.8) return "mastered";
  const coverage = e.lessons ? e.lessonsTried / e.lessons : 0;
  if ((coverage >= 0.6 && accuracy >= 0.7) || (e.lastCheck !== null && e.lastCheck >= 0.6 && accuracy >= 0.6)) return "proficient";
  return "familiar";
}

export const levelRank = (l: MasteryLevel) => MASTERY_LEVELS.indexOf(l);
