/**
 * Bulk-generate lesson bodies with Claude.
 *
 *   npm run generate -- --course math-1            # all empty lessons of one course
 *   npm run generate -- --subject physics --grade 7
 *   npm run generate -- --lesson math-1-counting-objects
 *   npm run generate -- --limit 20                 # first 20 empty lessons overall
 *   npm run generate -- --force ...                # also overwrite lessons that already have content
 *
 * Requires ANTHROPIC_API_KEY. Lessons with source = "admin" are never overwritten.
 */
import { and, asc, eq } from "drizzle-orm";
import { getDb, schema } from "../src/server/db/client";
import { buildBrief } from "../src/server/generation";
import { generateLesson, GENERATION_MODEL } from "../src/server/claude";

const args = process.argv.slice(2);
const opt = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const flag = (name: string) => args.includes(`--${name}`);

async function main() {
  const db = await getDb();
  const courseFilter = opt("subject") || opt("grade")
    ? new Set(
        (
          await db
          .select({ id: schema.courses.id })
          .from(schema.courses)
          .where(
            and(
              ...(opt("subject") ? [eq(schema.courses.subjectId, opt("subject")!)] : []),
              ...(opt("grade") ? [eq(schema.courses.grade, Number(opt("grade")))] : []),
            ),
          )
          .all()
        ).map((c) => c.id),
      )
    : null;

  let lessons = await db.select().from(schema.lessons).orderBy(asc(schema.lessons.courseId), asc(schema.lessons.position)).all();
  if (opt("course")) lessons = lessons.filter((l) => l.courseId === opt("course"));
  if (opt("lesson")) lessons = lessons.filter((l) => l.id === opt("lesson"));
  if (courseFilter) lessons = lessons.filter((l) => courseFilter.has(l.courseId));
  lessons = lessons.filter((l) => l.source !== "admin");
  if (!flag("force")) lessons = lessons.filter((l) => !l.content.en.trim());
  const limit = Number(opt("limit") ?? 0);
  if (limit > 0) lessons = lessons.slice(0, limit);

  console.log(`Generating ${lessons.length} lesson(s) with ${GENERATION_MODEL}…`);
  let ok = 0;
  for (const lesson of lessons) {
    const brief = (await buildBrief(lesson.id))!;
    process.stdout.write(`• ${lesson.id} … `);
    try {
      const g = await generateLesson(brief);
      await db
        .update(schema.lessons)
        .set({ ...g, status: "published", source: "claude", updatedAt: new Date().toISOString() })
        .where(eq(schema.lessons.id, lesson.id))
        .run();
      ok++;
      console.log("ok");
    } catch (e) {
      console.log(`failed: ${e instanceof Error ? e.message : e}`);
    }
  }
  console.log(`Done: ${ok}/${lessons.length} generated.`);
}

main().then(() => process.exit(0), (e) => {
  console.error(e);
  process.exit(1);
});
