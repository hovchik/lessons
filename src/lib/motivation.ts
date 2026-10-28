/**
 * The motivation layer: a daily streak that forgives one missed day a week,
 * points for remembering and mastering (never for time spent), a weekly goal
 * of learning days, and badges. Pure: days are YYYY-MM-DD strings in UTC.
 */
import { addDays } from "./exam-plan";

/** Questions answered in a day for it to count as a learning day. */
export const DAY_ANSWERS = 5;
export const WEEKLY_GOALS = [3, 5, 7] as const;
export type WeeklyGoal = (typeof WEEKLY_GOALS)[number];
export const DEFAULT_WEEKLY_GOAL: WeeklyGoal = 5;

/** Points: a question answered right once a day, more when it is recalled in Daily Review, and the first pass of each unit check. */
export const POINTS = { right: 1, recalled: 2, unitPassed: 20 } as const;

/** The Monday of the day's week. */
export function weekStart(day: string): string {
  const dow = new Date(`${day}T00:00:00Z`).getUTCDay(); // 0 = Sunday
  return addDays(day, -((dow + 6) % 7));
}

export type Streak = {
  /** Learning days in the run, today included once it counts. */
  days: number;
  todayDone: boolean;
  /** Missed days the weekly freeze covered inside the run, oldest first. */
  frozen: string[];
  /** Whether this week's freeze is still unused (it is spent on the first missed day of the week). */
  freezeLeft: boolean;
};

/**
 * The current streak: learning days counted back from today (or from
 * yesterday while today is still open), where the first missed day of each
 * Monday-to-Sunday week is covered by that week's freeze and a second one
 * ends the run.
 */
export function streakOf(active: Iterable<string>, today: string): Streak {
  const days = new Set(active);
  const todayDone = days.has(today);
  const first = [...days].sort()[0];
  const usedWeeks = new Set<string>();
  const frozen: string[] = [];
  let count = 0;
  let earliest: string | null = null;
  // Before the first learning day there is nothing to keep, so the walk stops there.
  for (let d = todayDone ? today : addDays(today, -1); first && d >= first; d = addDays(d, -1)) {
    if (days.has(d)) {
      count++;
      earliest = d;
      continue;
    }
    const w = weekStart(d);
    if (usedWeeks.has(w)) break;
    usedWeeks.add(w);
    frozen.push(d);
  }
  // A freeze before the run's first learning day saved nothing, so it is not spent.
  const kept = earliest ? frozen.filter((f) => f > earliest!).reverse() : [];
  return { days: count, todayDone, frozen: kept, freezeLeft: !kept.some((f) => weekStart(f) === weekStart(today)) };
}

/** The longest streak ever, by the same rules, for the streak badges. */
export function bestStreak(active: Iterable<string>): number {
  const sorted = [...new Set(active)].sort();
  if (!sorted.length) return 0;
  const days = new Set(sorted);
  let best = 0;
  let run = 0;
  let used = new Set<string>();
  for (let d = sorted[0]; d <= sorted[sorted.length - 1]; d = addDays(d, 1)) {
    if (days.has(d)) {
      run++;
      best = Math.max(best, run);
      continue;
    }
    const w = weekStart(d);
    if (run > 0 && !used.has(w)) {
      used.add(w);
      continue;
    }
    run = 0;
    used = new Set();
  }
  return best;
}

/** The week's learning days, Monday first, and how many of them count toward the goal. */
export function weekOf(active: Iterable<string>, today: string) {
  const days = new Set(active);
  const start = weekStart(today);
  const week = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(start, i);
    return { date, done: days.has(date), future: date > today, today: date === today };
  });
  return { week, done: week.filter((d) => d.done).length };
}

/** Badges for a subject by mastered units, and for the longest streak. */
export const SUBJECT_TIERS = [1, 5, 15] as const;
export const STREAK_BADGES = [7, 30, 100] as const;
export type Tier = 0 | 1 | 2 | 3;

export function tierOf(mastered: number): { tier: Tier; next: number | null } {
  const tier = SUBJECT_TIERS.filter((t) => mastered >= t).length as Tier;
  return { tier, next: (SUBJECT_TIERS as readonly number[])[tier] ?? null };
}
