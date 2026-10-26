/**
 * Seeds the `tips` table from src/content/tips. Called from scripts/seed.ts.
 * Tips are upserted by id; tips edited, reordered or deleted in the admin panel (source = "admin")
 * are left as they are, and seed tips that are no longer in the content are removed.
 */
import { and, eq, notInArray } from "drizzle-orm";
import { getDb, schema } from "../src/server/db/client";
import { tips } from "../src/content/tips";
import { courseId } from "../src/content";

export async function seedTips() {
  const db = await getDb();
  const byCourse = new Map<string, typeof tips>();
  for (const tp of tips) {
    const cid = courseId(tp.subject, tp.grade);
    if (!byCourse.has(cid)) byCourse.set(cid, []);
    byCourse.get(cid)!.push(tp);
  }

  let n = 0;
  for (const [cid, list] of byCourse) {
    const course = await db.select({ id: schema.courses.id }).from(schema.courses).where(eq(schema.courses.id, cid)).get();
    if (!course) {
      console.warn(`tips: course ${cid} does not exist, skipping ${list.length} tip(s)`);
      continue;
    }
    const ids: string[] = [];
    for (const [i, tp] of list.entries()) {
      const id = `${cid}-${tp.slug}`;
      ids.push(id);
      n++;
      const existing = await db.select({ source: schema.tips.source }).from(schema.tips).where(eq(schema.tips.id, id)).get();
      // Admin-owned rows (edited, reordered or deleted in the admin panel) are left untouched.
      if (existing && existing.source !== "seed") continue;
      const row = {
        courseId: cid,
        position: i + 1,
        slug: tp.slug,
        category: tp.category,
        title: tp.title,
        body: tp.body,
        status: "published",
        source: "seed",
        updatedAt: new Date().toISOString(),
      };
      await db.insert(schema.tips).values({ id, ...row }).onConflictDoUpdate({ target: schema.tips.id, set: row }).run();
    }
    await db
      .delete(schema.tips)
      .where(and(eq(schema.tips.courseId, cid), eq(schema.tips.source, "seed"), notInArray(schema.tips.id, ids)))
      .run();
  }
  return { tips: n, courses: byCourse.size };
}
