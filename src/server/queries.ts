import { and, asc, count, eq, ne, sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";

export type Locale = "en" | "hy" | "ru";

export const GRADES = Array.from({ length: 12 }, (_, i) => i + 1);

export async function getSubjects() {
  const db = await getDb();
  return db.select().from(schema.subjects).orderBy(asc(schema.subjects.sortOrder)).all();
}

export async function getSubject(id: string) {
  const db = await getDb();
  return db.select().from(schema.subjects).where(eq(schema.subjects.id, id)).get();
}

export async function getStats() {
  const db = await getDb();
  const courses = (await db.select({ n: count() }).from(schema.courses).get())?.n ?? 0;
  const lessons = (await db.select({ n: count() }).from(schema.lessons).get())?.n ?? 0;
  const published =
    (await db.select({ n: count() }).from(schema.lessons).where(eq(schema.lessons.status, "published")).get())?.n ?? 0;
  return { courses, lessons, published };
}

/** Courses with subject info and lesson counts, optionally filtered by grade or subject. */
export async function getCourses(filter: { grade?: number; subjectId?: string } = {}) {
  const db = await getDb();
  const where = [eq(schema.courses.published, true)];
  if (filter.grade) where.push(eq(schema.courses.grade, filter.grade));
  if (filter.subjectId) where.push(eq(schema.courses.subjectId, filter.subjectId));
  return db
    .select({
      course: schema.courses,
      subject: schema.subjects,
      lessonCount: sql<number>`(select count(*) from lessons l where l.course_id = ${schema.courses.id})`,
      readyCount: sql<number>`(select count(*) from lessons l where l.course_id = ${schema.courses.id} and l.status = 'published')`,
    })
    .from(schema.courses)
    .innerJoin(schema.subjects, eq(schema.courses.subjectId, schema.subjects.id))
    .where(and(...where))
    .orderBy(asc(schema.subjects.sortOrder), asc(schema.courses.grade))
    .all();
}

export async function getSubjectGradeRanges() {
  const db = await getDb();
  return db
    .select({ subjectId: schema.courses.subjectId, min: sql<number>`min(${schema.courses.grade})`, max: sql<number>`max(${schema.courses.grade})`, n: count() })
    .from(schema.courses)
    .groupBy(schema.courses.subjectId)
    .all();
}

export async function getCourse(subjectId: string, grade: number) {
  const db = await getDb();
  const course = await db
    .select()
    .from(schema.courses)
    .where(and(eq(schema.courses.subjectId, subjectId), eq(schema.courses.grade, grade)))
    .get();
  if (!course) return null;
  const subject = (await getSubject(subjectId))!;
  const units = await db.select().from(schema.units).where(eq(schema.units.courseId, course.id)).orderBy(asc(schema.units.position)).all();
  const lessons = await db
    .select({
      id: schema.lessons.id,
      unitId: schema.lessons.unitId,
      position: schema.lessons.position,
      slug: schema.lessons.slug,
      title: schema.lessons.title,
      status: schema.lessons.status,
      durationMin: schema.lessons.durationMin,
    })
    .from(schema.lessons)
    .where(eq(schema.lessons.courseId, course.id))
    .orderBy(asc(schema.lessons.position))
    .all();
  return {
    course,
    subject,
    units: units.map((u) => ({ ...u, lessons: lessons.filter((l) => l.unitId === u.id) })),
    readyCount: lessons.filter((l) => l.status === "published").length,
    totalCount: lessons.length,
  };
}

export async function getLesson(subjectId: string, grade: number, slug: string) {
  const data = await getCourse(subjectId, grade);
  if (!data) return null;
  const db = await getDb();
  const lesson = await db
    .select()
    .from(schema.lessons)
    .where(and(eq(schema.lessons.courseId, data.course.id), eq(schema.lessons.slug, slug)))
    .get();
  if (!lesson) return null;
  const flat = data.units.flatMap((u) => u.lessons.map((l) => ({ ...l, unit: u })));
  const idx = flat.findIndex((l) => l.id === lesson.id);
  return {
    ...data,
    lesson,
    unit: flat[idx]?.unit,
    unitIndex: data.units.findIndex((u) => u.id === lesson.unitId) + 1,
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}

export async function getLessonById(id: string) {
  const db = await getDb();
  return db.select().from(schema.lessons).where(eq(schema.lessons.id, id)).get();
}

export async function getCourseById(id: string) {
  const db = await getDb();
  return db.select().from(schema.courses).where(eq(schema.courses.id, id)).get();
}

export async function getAdminCourses() {
  const db = await getDb();
  return db
    .select({
      course: schema.courses,
      subject: schema.subjects,
      lessonCount: sql<number>`(select count(*) from lessons l where l.course_id = ${schema.courses.id})`,
      readyCount: sql<number>`(select count(*) from lessons l where l.course_id = ${schema.courses.id} and l.status = 'published')`,
    })
    .from(schema.courses)
    .innerJoin(schema.subjects, eq(schema.courses.subjectId, schema.subjects.id))
    .orderBy(asc(schema.subjects.sortOrder), asc(schema.courses.grade))
    .all();
}

/** Published tips for a course, in seed order. */
export async function getCourseTips(courseId: string) {
  const db = await getDb();
  return db
    .select()
    .from(schema.tips)
    .where(and(eq(schema.tips.courseId, courseId), eq(schema.tips.status, "published")))
    .orderBy(asc(schema.tips.position))
    .all();
}

/** All tips for a course (admin). */
export async function getAdminCourseTips(courseId: string) {
  const db = await getDb();
  return db.select().from(schema.tips).where(eq(schema.tips.courseId, courseId)).orderBy(asc(schema.tips.position)).all();
}

export async function getTipById(id: string) {
  const db = await getDb();
  return db.select().from(schema.tips).where(eq(schema.tips.id, id)).get();
}

/** Tip counts per course (admin dashboards). */
export async function getTipCounts() {
  const db = await getDb();
  const rows = await db
    .select({ courseId: schema.tips.courseId, n: count() })
    .from(schema.tips)
    .where(ne(schema.tips.status, "deleted"))
    .groupBy(schema.tips.courseId)
    .all();
  return new Map(rows.map((r) => [r.courseId, r.n]));
}
