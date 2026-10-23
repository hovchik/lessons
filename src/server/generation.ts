import { and, eq, ne } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import type { LessonBrief } from "./claude";

/** Collects the context Claude needs to write one lesson. */
export async function buildBrief(lessonId: string): Promise<LessonBrief | null> {
  const db = await getDb();
  const lesson = await db.select().from(schema.lessons).where(eq(schema.lessons.id, lessonId)).get();
  if (!lesson) return null;
  const unit = (await db.select().from(schema.units).where(eq(schema.units.id, lesson.unitId)).get())!;
  const course = (await db.select().from(schema.courses).where(eq(schema.courses.id, lesson.courseId)).get())!;
  const subject = (await db.select().from(schema.subjects).where(eq(schema.subjects.id, course.subjectId)).get())!;
  const neighbours = (
    await db
      .select({ title: schema.lessons.title })
      .from(schema.lessons)
      .where(and(eq(schema.lessons.unitId, unit.id), ne(schema.lessons.id, lesson.id)))
      .all()
  ).map((l) => l.title.en);
  return {
    subject: subject.name,
    grade: course.grade,
    courseTitle: course.title,
    unitTitle: unit.title,
    unitSummary: unit.summary,
    lessonTitle: lesson.title,
    curriculumNotes: course.curriculumNotes,
    neighbours,
  };
}
