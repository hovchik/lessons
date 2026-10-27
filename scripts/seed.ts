/**
 * Seeds the SQLite database from the TypeScript content in src/content.
 * Safe to re-run: subjects, courses, units and lessons are upserted by id.
 * Lessons edited in the admin panel (source = "admin") are never overwritten.
 * Seed lessons and empty units that are no longer in the content (for example after
 * an outline was rewritten into a full course) are removed, so they do not show up
 * as stale, empty units.
 */
import fs from "node:fs";
import { and, eq, notInArray, sql } from "drizzle-orm";
import { DB_PATH, getDb, schema } from "../src/server/db/client";
import { courses, subjects, courseId } from "../src/content";
import { exams } from "../src/content/exams";
import { seedTips } from "./seed-tips";
import { seedSkills } from "./seed-skills";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

async function run() {
  const db = await getDb();
  // Thousands of small writes: let WAL batch the disk syncs (still safe against crashes).
  await db.run(sql`PRAGMA synchronous = NORMAL`);
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

  // Exams: state exams and year-end trials. Admin-edited exams are kept.
  const seededExamIds: string[] = [];
  for (const [i, e] of exams.entries()) {
    seededExamIds.push(e.id);
    const existing = await db.select({ source: schema.exams.source }).from(schema.exams).where(eq(schema.exams.id, e.id)).get();
    if (existing && existing.source !== "seed") {
      await db.update(schema.exams).set({ position: e.position ?? i + 1 }).where(eq(schema.exams.id, e.id)).run();
      continue;
    }
    const row = {
      kind: e.kind,
      system: e.system,
      subjectId: e.subject,
      grade: e.grade,
      position: e.position ?? i + 1,
      title: e.title,
      description: e.description,
      format: e.format,
      questions: e.questions,
      durationMin: e.durationMin,
      scale: e.scale,
      passPercent: e.passPercent,
      status: "published" as const,
      source: "seed" as const,
      updatedAt: new Date().toISOString(),
    };
    await db.insert(schema.exams).values({ id: e.id, ...row }).onConflictDoUpdate({ target: schema.exams.id, set: row }).run();
  }
  if (seededExamIds.length > 0) {
    await db.delete(schema.exams).where(and(eq(schema.exams.source, "seed"), notInArray(schema.exams.id, seededExamIds))).run();
  }
  const examQuestions = exams.reduce((a, e) => a + e.questions.length, 0);

  console.log(
    `Seeded ${exams.length} exams (${exams.filter((e) => e.kind === "state").length} state, ${exams.filter((e) => e.kind === "trial").length} trials, ${examQuestions} questions).`,
  );
  const tipStats = await seedTips();
  console.log(`Seeded ${tipStats.tips} tips across ${tipStats.courses} courses.`);
  const skillStats = await seedSkills();
  console.log(`Seeded ${skillStats.skills} skills, ${skillStats.prereqs} prerequisite links, ${skillStats.lessons} lessons mapped to skills.`);
  console.log(
    `Seeded ${subjects.length} subjects, ${courses.length} courses, ${unitsCount} units, ${lessonsCount} lessons (${withContent} with full content, ${lessonsCount - withContent} outlines).`,
  );

  // Rewritten rows leave free pages behind and the write-ahead log grows; compact the file.
  await db.run(sql`PRAGMA wal_checkpoint(TRUNCATE)`);
  await db.run(sql`VACUUM`);
  await db.run(sql`PRAGMA wal_checkpoint(TRUNCATE)`);
  console.log(`Database: ${(fs.statSync(DB_PATH).size / 1024 / 1024).toFixed(1)} MB (${DB_PATH}).`);
}

run().then(() => process.exit(0), (e) => {
  console.error(e);
  process.exit(1);
});
