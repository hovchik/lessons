/**
 * Seeds the skill map (`skills`, `skill_prereqs`, `lesson_skills`) from src/content/skills.
 * Called from scripts/seed.ts after courses, units and lessons. The map is derived
 * from the content alone, so it is rebuilt in full on every run.
 */
import { getDb, schema } from "../src/server/db/client";
import { courses } from "../src/content";
import { buildSkillMap } from "../src/content/skills";

const chunk = <T,>(xs: T[], n: number) => Array.from({ length: Math.ceil(xs.length / n) }, (_, i) => xs.slice(i * n, i * n + n));

export async function seedSkills() {
  const db = await getDb();
  const map = buildSkillMap(courses);
  const units = await db.select({ id: schema.units.id, courseId: schema.units.courseId, position: schema.units.position }).from(schema.units).all();
  const unitAt = new Map(units.map((u) => [`${u.courseId}#${u.position}`, u.id]));
  const lessonIds = new Set((await db.select({ id: schema.lessons.id }).from(schema.lessons).all()).map((l) => l.id));

  const skillRows = map.map((s) => ({ id: s.id, courseId: s.courseId, unitId: unitAt.get(`${s.courseId}#${s.position}`) ?? null, position: s.position, title: s.title }));
  const prereqRows = map.flatMap((s) => s.prereqs.map((p) => ({ skillId: s.id, prereqId: p })));
  const lessonRows = map.flatMap((s) => s.lessonIds.filter((id) => lessonIds.has(id)).map((lessonId) => ({ lessonId, skillId: s.id })));

  await db.batch([
    db.delete(schema.lessonSkills),
    db.delete(schema.skillPrereqs),
    db.delete(schema.skills),
    ...chunk(skillRows, 100).map((rows) => db.insert(schema.skills).values(rows)),
    ...chunk(prereqRows, 200).map((rows) => db.insert(schema.skillPrereqs).values(rows)),
    ...chunk(lessonRows, 200).map((rows) => db.insert(schema.lessonSkills).values(rows)),
  ]);
  return { skills: skillRows.length, prereqs: prereqRows.length, lessons: lessonRows.length };
}
