/**
 * Seeds the SQLite database from the TypeScript content in src/content.
 * Safe to re-run: subjects, courses, units and lessons are upserted by id.
 * Lessons edited in the admin panel (source = "admin") are never overwritten.
 * Seed lessons and empty units that are no longer in the content (for example after
 * an outline was rewritten into a full course) are removed, so they do not show up
 * as stale, empty units.
 */
import { and, eq, notInArray } from "drizzle-orm";
import { getDb, schema } from "../src/server/db/client";
import { courses, subjects, courseId } from "../src/content";
import { seedTips } from "./seed-tips";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

async function run() {
  const db = await getDb();
  let unitsCount = 0;
  let lessonsCount = 0;
  let withContent = 0;

  for (const s of subjects) {
    await db
      .insert(schema.subjects)
      .values({ id: s.id, name: s.name, description: s.description, color: s.color, icon: s.icon, sortOrder: s.sortOrder })
      .onConflictDoUpdate({
        target: schema.subjects.id,
        set: { name: s.name, description: s.description, color: s.color, icon: s.icon, sortOrder: s.sortOrder },
      })
      .run();
  }

  for (const c of courses) {
    const id = courseId(c.subject, c.grade);
    await db
      .insert(schema.courses)
      .values({
        id,
        subjectId: c.subject,
        grade: c.grade,
        title: c.title,
        description: c.description,
        curriculumNotes: c.curriculumNotes,
        hoursPerWeek: c.hoursPerWeek,
        published: true,
      })
      .onConflictDoUpdate({
        target: schema.courses.id,
        set: {
          title: c.title,
          description: c.description,
          curriculumNotes: c.curriculumNotes,
          hoursPerWeek: c.hoursPerWeek,
        },
      })
      .run();

    const seededUnitIds: string[] = [];
    const seededLessonIds: string[] = [];
    for (const [ui, u] of c.units.entries()) {
      const unitId = `${id}-u${ui + 1}-${slugify(u.title.en).slice(0, 40)}`;
      await db
        .insert(schema.units)
        .values({ id: unitId, courseId: id, position: ui + 1, title: u.title, summary: u.summary })
        .onConflictDoUpdate({ target: schema.units.id, set: { position: ui + 1, title: u.title, summary: u.summary } })
        .run();
      unitsCount++;
      seededUnitIds.push(unitId);

      for (const [li, l] of u.lessons.entries()) {
        const lessonId = `${id}-${l.slug}`;
        seededLessonIds.push(lessonId);
        const hasContent = !!l.content && Object.values(l.content).some((v) => v && v.trim().length > 0);
        if (hasContent) withContent++;
        lessonsCount++;

        const existing = await db
          .select({ source: schema.lessons.source })
          .from(schema.lessons)
          .where(eq(schema.lessons.id, lessonId))
          .get();
        if (existing && existing.source !== "seed") {
          // Keep admin or Claude-authored edits; only make sure ordering is current.
          await db
            .update(schema.lessons)
            .set({ position: li + 1, unitId })
            .where(eq(schema.lessons.id, lessonId))
            .run();
          continue;
        }

        const row = {
          unitId,
          courseId: id,
          position: li + 1,
          slug: l.slug,
          title: l.title,
          objectives: l.objectives ?? { en: [], hy: [], ru: [] },
          content: l.content ?? { en: "", hy: "", ru: "" },
          quiz: l.quiz ?? [],
          durationMin: l.durationMin ?? 45,
          status: (hasContent ? "published" : "draft") as "published" | "draft",
          source: "seed" as const,
          updatedAt: new Date().toISOString(),
        };
        await db
          .insert(schema.lessons)
          .values({ id: lessonId, ...row })
          .onConflictDoUpdate({ target: schema.lessons.id, set: row })
          .run();
      }
    }

    // Remove leftovers from earlier versions of this course.
    if (seededLessonIds.length > 0) {
      await db
        .delete(schema.lessons)
        .where(
          and(
            eq(schema.lessons.courseId, id),
            eq(schema.lessons.source, "seed"),
            notInArray(schema.lessons.id, seededLessonIds),
          ),
        )
        .run();
    }
    if (seededUnitIds.length > 0) {
      const staleUnits = await db
        .select({ id: schema.units.id })
        .from(schema.units)
        .where(and(eq(schema.units.courseId, id), notInArray(schema.units.id, seededUnitIds)))
        .all();
      for (const su of staleUnits) {
        const kept = await db
          .select({ id: schema.lessons.id })
          .from(schema.lessons)
          .where(eq(schema.lessons.unitId, su.id))
          .get();
        // A stale unit that still holds an admin-edited lesson is kept.
        if (!kept) await db.delete(schema.units).where(eq(schema.units.id, su.id)).run();
      }
    }
  }

  const tipStats = await seedTips();
  console.log(`Seeded ${tipStats.tips} tips across ${tipStats.courses} courses.`);
  console.log(
    `Seeded ${subjects.length} subjects, ${courses.length} courses, ${unitsCount} units, ${lessonsCount} lessons (${withContent} with full content, ${lessonsCount - withContent} outlines).`,
  );
}

run().then(() => process.exit(0), (e) => {
  console.error(e);
  process.exit(1);
});
