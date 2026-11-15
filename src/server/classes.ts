import { randomBytes, randomInt } from "node:crypto";
import { and, asc, desc, eq, inArray, sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import { resolveItems, type ReviewItem } from "./review";
import { newId } from "./user-auth";
import { cleanText } from "@/lib/account";
import { isoDay } from "@/lib/exam-plan";
import { DAY_ANSWERS, streakOf } from "@/lib/motivation";

/**
 * Classes and parent links: the two ways a grown-up sees a pupil's work.
 *
 * - Any account can open a class and give its code out; a pupil who joins
 *   shows their progress to the class owner (and only to them). Either side can
 *   end it: the pupil leaves, or the owner removes them or deletes the class.
 * - A pupil can make one read-only parent link (a long random token); making a
 *   new one or turning it off stops the old one.
 */

export const MAX_CLASSES = 20;
export const MAX_MEMBERS = 200;
// No 0/O, 1/I/L: the code is read off a board and typed on a phone.
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const DAY = 24 * 60 * 60 * 1000;

export const normalizeCode = (code: string) => code.toUpperCase().replace(/[^A-Z0-9]/g, "");
const newCode = () => Array.from({ length: 6 }, () => ALPHABET[randomInt(ALPHABET.length)]).join("");

export async function createClass(ownerId: string, name: string) {
  const db = await getDb();
  const clean = cleanText(name, 60);
  if (!clean) return { error: "name" as const };
  const owned = await db.select({ n: sql<number>`count(*)` }).from(schema.classes).where(eq(schema.classes.ownerId, ownerId)).get();
  if (Number(owned?.n ?? 0) >= MAX_CLASSES) return { error: "limit" as const };
  for (let i = 0; i < 5; i++) {
    const row = { id: newId(), ownerId, name: clean, code: newCode() };
    const res = await db.insert(schema.classes).values(row).onConflictDoNothing().run();
    if (res.rowsAffected) return { class: row };
  }
  throw new Error("could not find a free class code");
}

export async function joinClass(userId: string, code: string) {
  const db = await getDb();
  const c = await db.select().from(schema.classes).where(eq(schema.classes.code, normalizeCode(code))).get();
  if (!c) return { error: "code" as const };
  if (c.ownerId === userId) return { error: "own" as const };
  const n = await db.select({ n: sql<number>`count(*)` }).from(schema.classMembers).where(eq(schema.classMembers.classId, c.id)).get();
  if (Number(n?.n ?? 0) >= MAX_MEMBERS) return { error: "full" as const };
  await db.insert(schema.classMembers).values({ classId: c.id, userId }).onConflictDoNothing().run();
  return { class: { id: c.id, name: c.name } };
}

/** The pupil leaves, or the owner removes them. */
export async function removeMember(actorId: string, classId: string, userId: string) {
  const db = await getDb();
  const c = await db.select({ ownerId: schema.classes.ownerId }).from(schema.classes).where(eq(schema.classes.id, classId)).get();
  if (!c || (actorId !== userId && actorId !== c.ownerId)) return false;
  await db.delete(schema.classMembers).where(and(eq(schema.classMembers.classId, classId), eq(schema.classMembers.userId, userId))).run();
  return true;
}

export async function deleteClass(ownerId: string, classId: string) {
  const db = await getDb();
  const res = await db.delete(schema.classes).where(and(eq(schema.classes.id, classId), eq(schema.classes.ownerId, ownerId))).run();
  return res.rowsAffected > 0;
}

/** Classes the account owns, with how many pupils each has. */
export async function ownClasses(ownerId: string) {
  const db = await getDb();
  const cm = schema.classMembers;
  return db
    .select({ id: schema.classes.id, name: schema.classes.name, code: schema.classes.code, members: sql<number>`(select count(*) from ${cm} where ${cm.classId} = ${schema.classes.id})` })
    .from(schema.classes)
    .where(eq(schema.classes.ownerId, ownerId))
    .orderBy(asc(schema.classes.createdAt))
    .all();
}

/** Classes the pupil is in, with who sees their work. */
export async function joinedClasses(userId: string) {
  const db = await getDb();
  return db
    .select({ id: schema.classes.id, name: schema.classes.name, teacher: schema.users.displayName })
    .from(schema.classMembers)
    .innerJoin(schema.classes, eq(schema.classes.id, schema.classMembers.classId))
    .innerJoin(schema.users, eq(schema.users.id, schema.classes.ownerId))
    .where(eq(schema.classMembers.userId, userId))
    .orderBy(asc(schema.classMembers.joinedAt))
    .all();
}

/** The class if this account owns it. */
export async function ownedClass(ownerId: string, classId: string) {
  const db = await getDb();
  return (await db.select().from(schema.classes).where(and(eq(schema.classes.id, classId), eq(schema.classes.ownerId, ownerId))).get()) ?? null;
}

/** Whether the owner may see this pupil: they are in one of the owner's classes. */
export async function canSeePupil(ownerId: string, classId: string, userId: string) {
  const db = await getDb();
  const row = await db
    .select({ id: schema.classMembers.userId })
    .from(schema.classMembers)
    .innerJoin(schema.classes, eq(schema.classes.id, schema.classMembers.classId))
    .where(and(eq(schema.classMembers.classId, classId), eq(schema.classMembers.userId, userId), eq(schema.classes.ownerId, ownerId)))
    .get();
  return !!row;
}

export type PupilRow = {
  userId: string;
  displayName: string;
  username: string;
  grade: number | null;
  lastSeenAt: string | null;
  streak: number;
  /** Days with enough answers to count, in the last 7. */
  activeDays: number;
  /** Questions answered (first tries) and the share right, in the last 7 days. */
  answers7: number;
  accuracy7: number | null;
  lessonsDone7: number;
  lessonsDone: number;
  /** Questions waiting in Daily Review. */
  due: number;
  mistakes: number;
};

export type MissedQuestion = { item: ReviewItem; pupils: number; wrong: number; answers: number };

/** The class at a glance: each pupil's week, and the questions most of them got wrong lately. */
export async function classReport(classId: string, now = new Date()) {
  const db = await getDb();
  const members = await db
    .select({ userId: schema.users.id, displayName: schema.users.displayName, username: schema.users.username, grade: schema.users.grade, lastSeenAt: schema.users.lastSeenAt })
    .from(schema.classMembers)
    .innerJoin(schema.users, eq(schema.users.id, schema.classMembers.userId))
    .where(eq(schema.classMembers.classId, classId))
    .orderBy(asc(schema.users.displayName))
    .all();
  if (members.length === 0) return { pupils: [] as PupilRow[], missed: [] as MissedQuestion[] };
  const ids = members.map((m) => m.userId);
  const ae = schema.answerEvents;
  const today = isoDay(now);
  const weekAgo = new Date(now.getTime() - 6 * DAY).toISOString().slice(0, 10);
  const monthAgo = new Date(now.getTime() - 30 * DAY).toISOString();
  const day = sql<string>`substr(${ae.createdAt}, 1, 10)`;

  const [byDay, lp, cards, missedRows] = await Promise.all([
    db
      // All answers count towards a learning day (as for the streak); the right share is of first tries only.
      .select({
        userId: ae.userId,
        day,
        n: sql<number>`count(*)`,
        first: sql<number>`sum(case when ${ae.hintUsed} then 0 else 1 end)`,
        right: sql<number>`sum(case when ${ae.correct} and not ${ae.hintUsed} then 1 else 0 end)`,
      })
      .from(ae)
      .where(inArray(ae.userId, ids))
      .groupBy(ae.userId, day)
      .all(),
    db
      .select({
        userId: schema.lessonProgress.userId,
        done: sql<number>`sum(case when ${schema.lessonProgress.completedAt} is not null then 1 else 0 end)`,
        done7: sql<number>`sum(case when substr(${schema.lessonProgress.completedAt}, 1, 10) >= ${weekAgo} then 1 else 0 end)`,
      })
      .from(schema.lessonProgress)
      .where(inArray(schema.lessonProgress.userId, ids))
      .groupBy(schema.lessonProgress.userId)
      .all(),
    db
      .select({
        userId: schema.reviewCards.userId,
        due: sql<number>`sum(case when ${schema.reviewCards.due} <= ${new Date(now.getTime() + 12 * 60 * 60 * 1000).toISOString()} then 1 else 0 end)`,
        mistakes: sql<number>`sum(case when ${schema.reviewCards.lastCorrect} = 0 then 1 else 0 end)`,
      })
      .from(schema.reviewCards)
      .where(inArray(schema.reviewCards.userId, ids))
      .groupBy(schema.reviewCards.userId)
      .all(),
    // First tries only: a second try after a hint is logged with hint_used.
    db
      .select({
        itemId: ae.itemId,
        courseId: sql<string | null>`max(${ae.courseId})`,
        pupils: sql<number>`count(distinct case when ${ae.correct} = 0 then ${ae.userId} end)`,
        wrong: sql<number>`sum(case when ${ae.correct} = 0 then 1 else 0 end)`,
        answers: sql<number>`count(*)`,
      })
      .from(ae)
      .where(and(inArray(ae.userId, ids), eq(ae.hintUsed, false), sql`${ae.createdAt} >= ${monthAgo}`, sql`(${ae.itemId} like 'quiz:%' or ${ae.itemId} like 'exam:%')`))
      .groupBy(ae.itemId)
      .having(sql`count(distinct case when ${ae.correct} = 0 then ${ae.userId} end) >= ${members.length >= 4 ? 2 : 1}`)
      .orderBy(desc(sql`count(distinct case when ${ae.correct} = 0 then ${ae.userId} end)`), desc(sql`sum(case when ${ae.correct} = 0 then 1 else 0 end)`))
      .limit(8)
      .all(),
  ]);

  const days = new Map<string, { day: string; n: number; first: number; right: number }[]>();
  for (const r of byDay) days.set(r.userId, [...(days.get(r.userId) ?? []), { day: r.day, n: Number(r.n), first: Number(r.first ?? 0), right: Number(r.right ?? 0) }]);
  const lpBy = new Map(lp.map((r) => [r.userId, r]));
  const cardsBy = new Map(cards.map((r) => [r.userId, r]));

  const pupils: PupilRow[] = members.map((m) => {
    const d = days.get(m.userId) ?? [];
    const learning = d.filter((x) => x.n >= DAY_ANSWERS).map((x) => x.day).sort();
    const week = d.filter((x) => x.day >= weekAgo);
    const answers7 = week.reduce((a, x) => a + x.first, 0);
    const right7 = week.reduce((a, x) => a + x.right, 0);
    return {
      ...m,
      streak: streakOf(learning, today).days,
      activeDays: week.filter((x) => x.n >= DAY_ANSWERS).length,
      answers7,
      accuracy7: answers7 ? right7 / answers7 : null,
      lessonsDone7: Number(lpBy.get(m.userId)?.done7 ?? 0),
      lessonsDone: Number(lpBy.get(m.userId)?.done ?? 0),
      due: Number(cardsBy.get(m.userId)?.due ?? 0),
      mistakes: Number(cardsBy.get(m.userId)?.mistakes ?? 0),
    };
  });

  const { items } = await resolveItems(missedRows.map((r) => ({ itemId: r.itemId, courseId: r.courseId, lastCorrect: false, lapses: 0 })));
  const byItem = new Map(items.map((i) => [i.itemId, i]));
  const missed = missedRows.flatMap((r) => {
    const item = byItem.get(r.itemId);
    return item ? [{ item, pupils: Number(r.pupils), wrong: Number(r.wrong), answers: Number(r.answers) }] : [];
  });
  return { pupils, missed };
}

/** The pupil's name for a report header. */
export async function pupilName(userId: string) {
  const db = await getDb();
  return (await db.select({ displayName: schema.users.displayName, username: schema.users.username, grade: schema.users.grade }).from(schema.users).where(eq(schema.users.id, userId)).get()) ?? null;
}

// ---- Parent links ----

export async function getParentLink(userId: string) {
  const db = await getDb();
  return (await db.select({ token: schema.parentLinks.token, createdAt: schema.parentLinks.createdAt }).from(schema.parentLinks).where(eq(schema.parentLinks.userId, userId)).get()) ?? null;
}

/** A new link; the old one, if any, stops working. */
export async function newParentLink(userId: string) {
  const db = await getDb();
  const token = randomBytes(18).toString("base64url");
  await db
    .insert(schema.parentLinks)
    .values({ userId, token })
    .onConflictDoUpdate({ target: schema.parentLinks.userId, set: { token, createdAt: sql`(current_timestamp)` } })
    .run();
  return token;
}

export async function removeParentLink(userId: string) {
  const db = await getDb();
  await db.delete(schema.parentLinks).where(eq(schema.parentLinks.userId, userId)).run();
}

/** The pupil behind a parent link, or null for an unknown or turned-off one. */
export async function pupilForToken(token: string) {
  if (!/^[A-Za-z0-9_-]{20,40}$/.test(token)) return null;
  const db = await getDb();
  const row = await db
    .select({ userId: schema.users.id, displayName: schema.users.displayName, grade: schema.users.grade, disabled: schema.users.disabled })
    .from(schema.parentLinks)
    .innerJoin(schema.users, eq(schema.users.id, schema.parentLinks.userId))
    .where(eq(schema.parentLinks.token, token))
    .get();
  return row && !row.disabled ? row : null;
}

