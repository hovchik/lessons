import { and, eq, inArray, like, sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import { eloUpdate, predict, priorAbility, priorDifficulty } from "@/lib/elo";

/**
 * Ability per pupil and skill, difficulty per question (src/lib/elo.ts). Every
 * first try at a lesson question, wherever it is answered, moves both.
 */

export type RatedAnswer = { itemId: string; refId: string; correct: boolean; options?: number | null; hintUsed?: boolean };

type Rating = { value: number; answers: number; delta: number; steps: number };

/** Difficulty of each question; one never rated starts from everyone's earlier answers to it. */
export async function getItemRatings(items: { itemId: string; options?: number | null }[]) {
  const db = await getDb();
  const ids = [...new Set(items.map((i) => i.itemId))];
  const out = new Map<string, { difficulty: number; answers: number; stored: boolean }>();
  if (ids.length === 0) return out;
  const ir = schema.itemRatings;
  for (const r of await db.select().from(ir).where(inArray(ir.itemId, ids)).all()) out.set(r.itemId, { difficulty: r.difficulty, answers: r.answers, stored: true });
  const missing = ids.filter((id) => !out.has(id));
  if (missing.length) {
    const ae = schema.answerEvents;
    const seen = await db
      .select({ itemId: ae.itemId, n: sql<number>`count(*)`, right: sql<number>`sum(case when ${ae.correct} then 1 else 0 end)` })
      .from(ae)
      .where(and(inArray(ae.itemId, missing), eq(ae.hintUsed, false)))
      .groupBy(ae.itemId)
      .all();
    const byId = new Map(seen.map((s) => [s.itemId, s]));
    const options = new Map(items.map((i) => [i.itemId, i.options]));
    for (const id of missing) {
      const s = byId.get(id);
      const p = priorDifficulty(Number(s?.right ?? 0), Number(s?.n ?? 0), options.get(id));
      out.set(id, { difficulty: p.difficulty, answers: p.answers, stored: false });
    }
  }
  return out;
}

/** A pupil's ability in each skill; one never rated starts from the questions of it they already hold in memory. */
export async function getSkillRatings(userId: string, skillIds: string[]) {
  const db = await getDb();
  const ids = [...new Set(skillIds)];
  const out = new Map<string, { ability: number; answers: number; stored: boolean }>();
  if (ids.length === 0) return out;
  const sr = schema.skillRatings;
  for (const r of await db.select().from(sr).where(and(eq(sr.userId, userId), inArray(sr.skillId, ids))).all()) out.set(r.skillId, { ability: r.ability, answers: r.answers, stored: true });
  const missing = ids.filter((id) => !out.has(id));
  if (missing.length) {
    const rc = schema.reviewCards;
    const ls = schema.lessonSkills;
    const cards = await db
      .select({ skillId: ls.skillId, n: sql<number>`count(*)`, right: sql<number>`sum(case when ${rc.lastCorrect} then 1 else 0 end)` })
      .from(rc)
      .innerJoin(ls, eq(ls.lessonId, rc.refId))
      .where(and(eq(rc.userId, userId), like(rc.itemId, "quiz:%"), inArray(ls.skillId, missing)))
      .groupBy(ls.skillId)
      .all();
    const byId = new Map(cards.map((c) => [c.skillId, c]));
    for (const id of missing) {
      const c = byId.get(id);
      const p = priorAbility(Number(c?.right ?? 0), Number(c?.n ?? 0));
      out.set(id, { ability: p.ability, answers: p.answers, stored: false });
    }
  }
  return out;
}

/**
 * Moves the ratings for these answers, in order. Call it before the answers'
 * cards are rescheduled, so a new pupil rating starts from memory as it was.
 * Only first tries at lesson questions count: a second try after a hint says
 * little about either side, and exam questions have no skill.
 */
export async function updateRatings(userId: string, answers: RatedAnswer[], now = new Date()) {
  const rated = answers.filter((a) => !a.hintUsed && a.itemId.startsWith("quiz:"));
  if (rated.length === 0) return;
  const db = await getDb();
  const ls = schema.lessonSkills;
  const links = await db.select().from(ls).where(inArray(ls.lessonId, [...new Set(rated.map((a) => a.refId))])).all();
  const skillOf = new Map<string, string>();
  for (const l of links) if (!skillOf.has(l.lessonId) || l.skillId < skillOf.get(l.lessonId)!) skillOf.set(l.lessonId, l.skillId);
  const withSkill = rated.filter((a) => skillOf.has(a.refId));
  if (withSkill.length === 0) return;

  const [itemsNow, skillsNow] = await Promise.all([getItemRatings(withSkill), getSkillRatings(userId, withSkill.map((a) => skillOf.get(a.refId)!))]);
  const items = new Map<string, Rating>([...itemsNow].map(([k, v]) => [k, { value: v.difficulty, answers: v.answers, delta: 0, steps: 0 }]));
  const skills = new Map<string, Rating>([...skillsNow].map(([k, v]) => [k, { value: v.ability, answers: v.answers, delta: 0, steps: 0 }]));
  for (const a of withSkill) {
    const it = items.get(a.itemId)!;
    const sk = skills.get(skillOf.get(a.refId)!)!;
    const step = eloUpdate({
      ability: sk.value + sk.delta,
      difficulty: it.value + it.delta,
      abilityN: sk.answers + sk.steps,
      difficultyN: it.answers + it.steps,
      correct: a.correct,
      options: a.options,
    });
    sk.delta += step.ability;
    sk.steps++;
    it.delta += step.difficulty;
    it.steps++;
  }

  // Written as increments, so two submissions at once both count.
  const at = now.toISOString();
  const ir = schema.itemRatings;
  const sr = schema.skillRatings;
  const writes = [
    ...[...items].map(([itemId, r]) =>
      db
        .insert(ir)
        .values({ itemId, difficulty: r.value + r.delta, answers: r.answers + r.steps, updatedAt: at })
        .onConflictDoUpdate({ target: ir.itemId, set: { difficulty: sql`${ir.difficulty} + ${r.delta}`, answers: sql`${ir.answers} + ${r.steps}`, updatedAt: at } }),
    ),
    ...[...skills].map(([skillId, r]) =>
      db
        .insert(sr)
        .values({ userId, skillId, ability: r.value + r.delta, answers: r.answers + r.steps, updatedAt: at })
        .onConflictDoUpdate({ target: [sr.userId, sr.skillId], set: { ability: sql`${sr.ability} + ${r.delta}`, answers: sql`${sr.answers} + ${r.steps}`, updatedAt: at } }),
    ),
  ];
  await db.batch(writes as [(typeof writes)[number], ...(typeof writes)[number][]]);
}

/** The pupil's expected share of right first tries over these questions: how ready they are for the skill. */
export function expectedScore(ability: number, items: { difficulty: number; options?: number | null }[]) {
  if (items.length === 0) return 0;
  return items.reduce((s, i) => s + predict(ability, i.difficulty, i.options), 0) / items.length;
}
