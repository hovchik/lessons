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
 * Walks the days from the first learning day to `to` in order. Each missed
 * day inside a run spends that week's freeze (the first miss of the week, in
 * time order); a miss in a week whose freeze is spent ends the run. Misses
 * while no run is going spend nothing.
 */
function walk(days: Set<string>, to: string) {
  const first = [...days].sort()[0];
  let run = 0;
  let best = 0;
  let used = new Set<string>();
  let frozen: string[] = [];
  for (let d = first; first && d <= to; d = addDays(d, 1)) {
    if (days.has(d)) {
      run++;
      best = Math.max(best, run);
      continue;
    }
    const w = weekStart(d);
    if (run > 0 && !used.has(w)) {
      used.add(w);
      frozen.push(d);
      continue;
    }
    run = 0;
    used = new Set();
    frozen = [];
  }
  return { run, best, frozen };
}

/**
 * The current streak: the run of learning days up to today (or up to
 * yesterday while today is still open), by the freeze rules of `walk`.
 */
export function streakOf(active: Iterable<string>, today: string): Streak {
  const days = new Set(active);
  const todayDone = days.has(today);
  const { run, frozen } = walk(days, todayDone ? today : addDays(today, -1));
  return { days: run, todayDone, frozen: run ? frozen : [], freezeLeft: !frozen.some((f) => weekStart(f) === weekStart(today)) || !run };
}

/** The longest streak ever, by the same rules, for the streak badges. */
export function bestStreak(active: Iterable<string>): number {
  const days = new Set(active);
  const last = [...days].sort().at(-1);
  return last ? walk(days, last).best : 0;
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
