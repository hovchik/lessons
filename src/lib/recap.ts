import { addDays } from "./exam-plan";
import { DAY_ANSWERS, weekStart } from "./motivation";

/**
 * The weekly recap, worked out from a week's numbers: the days, the best
 * day and how the week compares with the one before. Only the pupil's own
 * weeks are compared, never other pupils. Pure; days are UTC.
 */

export type RecapWeek = { start: string; end: string; days: string[] };

/** "this" is the week so far; "last" the whole week before it. */
export function recapWeek(today: string, which: "this" | "last"): RecapWeek {
  const start = which === "this" ? weekStart(today) : addDays(weekStart(today), -7);
  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i));
  return { start, end: addDays(start, 7), days };
}

export type DayCount = { day: string; answers: number };

export function bestDay(counts: DayCount[]): DayCount | null {
  return counts.reduce<DayCount | null>((best, c) => (c.answers > 0 && (!best || c.answers > best.answers) ? c : best), null);
}

export const learningDaysIn = (counts: DayCount[]) => counts.filter((c) => c.answers >= DAY_ANSWERS).length;

/** Change from the week before, as a whole percentage; null when there is nothing to compare with. */
export function change(now: number, before: number): number | null {
  if (before <= 0) return null;
  return Math.round(((now - before) / before) * 100);
}
