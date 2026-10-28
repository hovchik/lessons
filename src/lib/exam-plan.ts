/**
 * A day-by-day plan from today to the exam, built from the placement test
 * (src/lib/diagnostic.ts): weak skills get two practice rounds and then a unit
 * check, shaky ones a practice round and a check, each step at least two days
 * after the one before (spacing) and several skills in turn (interleaving).
 * Every day starts with Daily Review, a trial of the exam comes every week and
 * three days before, and the last day is for review only. Pure: dates are
 * YYYY-MM-DD strings in UTC.
 */
import { bandOf } from "./diagnostic";

export type PlanSkill = { id: string; p: number };
export type TaskKind = "review" | "practice" | "check" | "trial";
export type PlanTask = { kind: TaskKind; skillId?: string; done?: boolean };
export type PlanDay = { date: string; tasks: PlanTask[]; last?: boolean };
export type Plan = { days: PlanDay[]; leftover: string[] };

export const PLAN_MINUTES = [15, 30, 45] as const;
export type PlanMinutes = (typeof PLAN_MINUTES)[number];

/** Rounds of practice that count as one practice task. */
export const PRACTICE_DONE_ANSWERS = 5;
const GAP_DAYS = 2;
const REPEAT_GAP_DAYS = 3;

export const isoDay = (d: Date) => d.toISOString().slice(0, 10);
export function addDays(day: string, n: number): string {
  const d = new Date(`${day}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return isoDay(d);
}
export const daysBetween = (from: string, to: string) => Math.round((Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86_400_000);

/**
 * `skills` come prerequisites first (the order the courses teach them), so a
 * skill's practice never starts before the skills it builds on.
 */
export function buildPlan(input: { skills: PlanSkill[]; start: string; examDate: string; minutes: PlanMinutes }): Plan {
  const n = daysBetween(input.start, input.examDate);
  if (n <= 0) return { days: [], leftover: [] };
  const slots = input.minutes / 15;
  const trialDays = new Set<number>();
  if (n >= 5) {
    // A trial every week, and one three days before the exam (the weekly ones stop a few days short of it).
    for (let i = 6; i < n - 5; i += 7) trialDays.add(i);
    trialDays.add(n - 3);
  }
  const days: PlanDay[] = Array.from({ length: n }, (_, i) => ({ date: addDays(input.start, i), tasks: [{ kind: "review" }] }));
  if (n >= 2) days[n - 1].last = true;
  for (const i of trialDays) days[i].tasks.push({ kind: "trial" });

  type Chain = { skillId: string; steps: TaskKind[]; next: number; freeFrom: number };
  const chains: Chain[] = input.skills
    .map((s) => ({ s, band: bandOf(s.p) }))
    .filter((x) => x.band !== "strong")
    .map(({ s, band }) => ({ skillId: s.id, steps: band === "weak" ? ["practice", "practice", "check"] : ["practice", "check"], next: 0, freeFrom: 0 }));

  const studyDay = (i: number) => !days[i].last && !trialDays.has(i);
  for (let i = 0; i < n; i++) {
    if (!studyDay(i)) continue;
    const used = new Set<string>();
    for (let slot = 0; slot < slots; slot++) {
      const c = chains.find((x) => x.next < x.steps.length && x.freeFrom <= i && !used.has(x.skillId));
      if (!c) break;
      days[i].tasks.push({ kind: c.steps[c.next], skillId: c.skillId });
      used.add(c.skillId);
      c.next++;
      c.freeFrom = i + GAP_DAYS;
    }
  }
  const leftover = chains.filter((c) => c.next < c.steps.length).map((c) => c.skillId);

  // Free slots left: more practice, weakest first, each unit no closer than a few days to its other tasks; with nothing weak, unit checks of the strong ones.
  const weakFirst = [...input.skills].sort((a, b) => a.p - b.p);
  const extra = weakFirst.filter((s) => bandOf(s.p) !== "strong");
  const rotation: PlanTask[] = extra.length ? extra.map((s) => ({ kind: "practice", skillId: s.id })) : weakFirst.map((s) => ({ kind: "check", skillId: s.id }));
  const used = new Map<string, number[]>();
  days.forEach((d, i) => d.tasks.forEach((t) => t.skillId && used.set(t.skillId, [...(used.get(t.skillId) ?? []), i])));
  let r = 0;
  for (let i = 0; i < n && rotation.length && !leftover.length; i++) {
    if (!studyDay(i)) continue;
    let free = slots - days[i].tasks.filter((t) => t.kind !== "review").length;
    for (let tries = 0; free > 0 && tries < rotation.length; tries++) {
      const t = rotation[r % rotation.length];
      r++;
      const near = (used.get(t.skillId!) ?? []).some((j) => Math.abs(i - j) < REPEAT_GAP_DAYS);
      if (near) continue;
      days[i].tasks.push({ ...t });
      used.set(t.skillId!, [...(used.get(t.skillId!) ?? []), i]);
      free--;
    }
  }
  return { days, leftover };
}

/** What the pupil did, by day: practice answers per skill, unit checks per skill, trials of this exam, review days. */
export type Activity = { practice: Record<string, string[]>; checks: Record<string, string[]>; trials: string[]; reviews: string[] };

/**
 * Marks each task done from what the pupil did. A task counts from its own day
 * until the next task of the same kind for the same skill, so work done a day
 * late (or early within that window) still ticks it.
 */
export function markDone(plan: Plan, act: Activity): Plan {
  const later = (kind: TaskKind, skillId: string | undefined, from: number) => {
    for (let i = from + 1; i < plan.days.length; i++) if (plan.days[i].tasks.some((t) => t.kind === kind && t.skillId === skillId)) return plan.days[i].date;
    return "9999-12-31";
  };
  const within = (dates: string[] | undefined, a: string, b: string) => (dates ?? []).filter((d) => d >= a && d < b).length;
  return {
    ...plan,
    days: plan.days.map((day, i) => ({
      ...day,
      tasks: day.tasks.map((t) => {
        const until = later(t.kind, t.skillId, i);
        const done =
          t.kind === "review"
            ? act.reviews.includes(day.date)
            : t.kind === "trial"
              ? within(act.trials, day.date, until) > 0
              : t.kind === "check"
                ? within(act.checks[t.skillId!], day.date, until) > 0
                : within(act.practice[t.skillId!], day.date, until) >= PRACTICE_DONE_ANSWERS;
        return { ...t, done };
      }),
    })),
  };
}
