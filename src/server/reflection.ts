import { and, eq, inArray } from "drizzle-orm";
import { getDb, schema } from "./db/client";

/**
 * "Why learn this?": the pupil's own sentence on how a unit could help them.
 * Writing it down is the point (a utility-value prompt), so nothing grades it.
 */

export const REFLECTION_MAX = 280;

/** unit id → the pupil's sentence, for the units asked about. */
export async function getReflections(userId: string, unitIds: string[]): Promise<Map<string, string>> {
  if (!unitIds.length) return new Map();
  const db = await getDb();
  const rows = await db
    .select({ unitId: schema.unitReflections.unitId, text: schema.unitReflections.text })
    .from(schema.unitReflections)
    .where(and(eq(schema.unitReflections.userId, userId), inArray(schema.unitReflections.unitId, unitIds)))
    .all();
  return new Map(rows.map((r) => [r.unitId, r.text]));
}

/** Saves (or, when empty, removes) a sentence. False when the unit doesn't exist. */
export async function saveReflection(userId: string, unitId: string, raw: string): Promise<boolean> {
  const db = await getDb();
  const unit = await db.select({ id: schema.units.id }).from(schema.units).where(eq(schema.units.id, unitId)).get();
  if (!unit) return false;
  const text = raw.replace(/\s+/g, " ").trim().slice(0, REFLECTION_MAX);
  const t = schema.unitReflections;
  if (!text) {
    await db.delete(t).where(and(eq(t.userId, userId), eq(t.unitId, unitId))).run();
    return true;
  }
  const now = new Date().toISOString();
  await db
    .insert(t)
    .values({ userId, unitId, text, updatedAt: now })
    .onConflictDoUpdate({ target: [t.userId, t.unitId], set: { text, updatedAt: now } })
    .run();
  return true;
}
