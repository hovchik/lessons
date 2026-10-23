import { and, asc, count, eq, sql } from "drizzle-orm";
import { db, schema } from "./db/client";

export type Locale = "en" | "hy" | "ru";

export const GRADES = Array.from({ length: 12 }, (_, i) => i + 1);

export function getSubjects() {
  return db.select().from(schema.subjects).orderBy(asc(schema.subjects.sortOrder)).all();
}

export function getSubject(id: string) {
  return db.select().from(schema.subjects).where(eq(schema.subjects.id, id)).get();
}

export function getStats() {
  const courses = db.select({ n: count() }).from(schema.courses).get()?.n ?? 0;
  const lessons = db.select({ n: count() }).from(schema.lessons).get()?.n ?? 0;
  const published = db.select({ n: count() }).from(schema.lessons).where(eq(schema.lessons.status, "published")).get()?.n ?? 0;
  return { courses, lessons, published };
}

/** Courses with subject info and lesson counts, optionally filtered by grade or subject. */
export function getCourses(filter: { grade?: number; subjectId?: string } = {}) {
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

export function getSubjectGradeRanges() {
  return db
    .select({ subjectId: schema.courses.subjectId, min: sql<number>`min(${schema.courses.grade})`, max: sql<number>`max(${schema.courses.grade})`, n: count() })
    .from(schema.courses)
    .groupBy(schema.courses.subjectId)
    .all();
}

export function getCourse(subjectId: string, grade: number) {
  const course = db
    .select()
    .from(schema.courses)
    .where(and(eq(schema.courses.subjectId, subjectId), eq(schema.courses.grade, grade)))
    .get();
  if (!course) return null;
  const subject = getSubject(subjectId)!;
  const units = db.select().from(schema.units).where(eq(schema.units.courseId, course.id)).orderBy(asc(schema.units.position)).all();
  const lessons = db
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

export function getLesson(subjectId: string, grade: number, slug: string) {
  const data = getCourse(subjectId, grade);
  if (!data) return null;
  const lesson = db
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

/** Admin: every lesson in a course with full fields. */
export function getLessonById(id: string) {
  return db.select().from(schema.lessons).where(eq(schema.lessons.id, id)).get();
}

export function getAdminCourses() {
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
