import { and, asc, eq, inArray, like } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import { readyBy, resolveItems, type CardRef, type ReviewItem } from "./review";
import { quizItemId } from "@/lib/memory";

/**
 * The warm-up at the top of a lesson: two questions from earlier lessons of the
 * course or from the skills this lesson builds on, answered from memory before
 * reading on. For a signed-in pupil, questions due for review come first, then
 * ones not met yet, then the rest of what they know; for everyone else, a
 * question from each of the nearest earlier lessons, changing day by day.
 */

export const WARMUP_SIZE = 2;
const DAY = 24 * 60 * 60 * 1000;
/** How many earlier lessons of the course to draw from. */
const NEAREST = 5;

type Source = { id: string; courseId: string; questions: number };

/** Earlier lessons with a quiz, nearest first: the course before this lesson, then the prerequisite skills. */
async function earlierLessons(lessonId: string): Promise<Source[]> {
  const db = await getDb();
  const l = schema.lessons;
  const here = await db
    .select({ courseId: l.courseId, position: l.position, unitPosition: schema.units.position })
    .from(l)
    .innerJoin(schema.units, eq(l.unitId, schema.units.id))
    .where(eq(l.id, lessonId))
    .get();
  if (!here) return [];
  const course = await db
    .select({ id: l.id, courseId: l.courseId, quiz: l.quiz, status: l.status, position: l.position, unitPosition: schema.units.position })
    .from(l)
    .innerJoin(schema.units, eq(l.unitId, schema.units.id))
    .where(eq(l.courseId, here.courseId))
    .orderBy(asc(schema.units.position), asc(l.position))
    .all();
  const before = course
    .filter((c) => c.unitPosition < here.unitPosition || (c.unitPosition === here.unitPosition && c.position < here.position))
    // Drafts and lessons without a quiz must not use up the nearest few.
    .filter((c) => c.status === "published" && c.quiz.length > 0)
    .reverse()
    .slice(0, NEAREST);

  const ls = schema.lessonSkills;
  const skillIds = (await db.select({ id: ls.skillId }).from(ls).where(eq(ls.lessonId, lessonId)).all()).map((r) => r.id);
  const prereqIds = skillIds.length
    ? (await db.select({ id: schema.skillPrereqs.prereqId }).from(schema.skillPrereqs).where(inArray(schema.skillPrereqs.skillId, skillIds)).all()).map((r) => r.id)
    : [];
  const prereqLessons = prereqIds.length
    ? await db
        .select({ id: l.id, courseId: l.courseId, quiz: l.quiz, status: l.status })
        .from(ls)
        .innerJoin(l, eq(ls.lessonId, l.id))
        .where(inArray(ls.skillId, prereqIds))
        .all()
    : [];

  const seen = new Set<string>([lessonId]);
  const out: Source[] = [];
  for (const c of [...before, ...prereqLessons]) {
    if (seen.has(c.id) || c.status !== "published" || c.quiz.length === 0) continue;
    seen.add(c.id);
    out.push({ id: c.id, courseId: c.courseId, questions: c.quiz.length });
  }
  return out;
}

export async function getWarmup(lessonId: string, userId: string | null, now = new Date(), size = WARMUP_SIZE): Promise<ReviewItem[]> {
  const sources = await earlierLessons(lessonId);
  if (sources.length === 0) return [];
  const day = Math.floor(now.getTime() / DAY);
  const db = await getDb();
  const rc = schema.reviewCards;
  const cards = userId
    ? await db
        .select({ itemId: rc.itemId, courseId: rc.courseId, lastCorrect: rc.lastCorrect, lapses: rc.lapses, due: rc.due })
        .from(rc)
        .where(and(eq(rc.userId, userId), inArray(rc.refId, sources.map((s) => s.id)), like(rc.itemId, "quiz:%")))
        .orderBy(asc(rc.due))
        .all()
    : [];
  const met = new Set(cards.map((c) => c.itemId));
  const ready = readyBy(now).toISOString();
  // One question not met yet from each source, nearest lesson first; which one changes daily.
  const fresh: CardRef[] = [];
  sources.forEach((s, k) => {
    for (let j = 0; j < s.questions; j++) {
      const itemId = quizItemId(s.id, (day + k + j) % s.questions);
      if (met.has(itemId)) continue;
      fresh.push({ itemId, courseId: s.courseId, lastCorrect: false, lapses: 0 });
      break;
    }
  });
  const ordered = [...cards.filter((c) => c.due <= ready), ...fresh, ...cards.filter((c) => c.due > ready)];

  // Prefer questions from different lessons; resolve a few extra in case some are gone.
  const refOf = (id: string) => id.slice(0, id.lastIndexOf("#"));
  const picked: CardRef[] = [];
  const lessonsUsed = new Set<string>();
  for (const c of ordered) {
    if (picked.length >= size + 2 || lessonsUsed.has(refOf(c.itemId))) continue;
    picked.push(c);
    lessonsUsed.add(refOf(c.itemId));
  }
  for (const c of ordered) if (picked.length < size + 2 && !picked.includes(c)) picked.push(c);
  const { items } = await resolveItems(picked);
  return items.slice(0, size);
}
