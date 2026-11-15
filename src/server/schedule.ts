import { and, asc, eq, sql } from "drizzle-orm";
import { z } from "zod";
import { getDb, schema } from "./db/client";
import { newId } from "./user-auth";
import { cleanNote, cleanText, DATE_RE, MAX_ENTRIES, MAX_REMINDERS, MINUTES_BEFORE, TIME_RE, toMinutes, type Entry, type Reminder } from "@/lib/schedule";

/**
 * A pupil's own class timetable and reminders. Every read and write is keyed
 * by the signed-in user's id, which the API routes take from the session
 * cookie and never from the request: an id from the browser only ever picks
 * among the user's own rows, so nobody can see or change another's.
 */

const time = z.string().regex(TIME_RE);

export const EntryInput = z
  .object({
    day: z.number().int().min(1).max(7),
    start: time,
    end: time,
    subjectId: z.string().max(60).regex(/^[a-z0-9-]*$/).nullable().optional(),
    title: z.string().max(200).optional(),
    place: z.string().max(200).optional(),
    note: z.string().max(1000).optional(),
    /** "Remind me N minutes before": null or 0 turns the class reminder off. */
    remind: z.number().int().nullable().optional(),
  })
  .refine((e) => toMinutes(e.start) < toMinutes(e.end), { message: "end" })
  .refine((e) => !!e.subjectId || !!e.title?.trim(), { message: "title" })
  .refine((e) => !e.remind || (MINUTES_BEFORE as readonly number[]).includes(e.remind), { message: "remind" });

/** Creating may put the same class on several days at once. */
export const NewEntriesInput = z.object({ days: z.array(z.number().int().min(1).max(7)).min(1).max(7) });

export const ReminderInput = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("weekly"), title: z.string().min(1).max(200), days: z.number().int().min(1).max(127), time }),
  z.object({ kind: z.literal("once"), title: z.string().min(1).max(200), date: z.string().regex(DATE_RE), time }),
]);

export type EntryInputT = z.infer<typeof EntryInput>;

const entryCols = {
  id: schema.scheduleEntries.id,
  day: schema.scheduleEntries.day,
  start: schema.scheduleEntries.start,
  end: schema.scheduleEntries.end,
  subjectId: schema.scheduleEntries.subjectId,
  title: schema.scheduleEntries.title,
  place: schema.scheduleEntries.place,
  note: schema.scheduleEntries.note,
};
const reminderCols = {
  id: schema.reminders.id,
  kind: schema.reminders.kind,
  entryId: schema.reminders.entryId,
  minutesBefore: schema.reminders.minutesBefore,
  title: schema.reminders.title,
  days: schema.reminders.days,
  date: schema.reminders.date,
  time: schema.reminders.time,
  enabled: schema.reminders.enabled,
};

export async function listEntries(userId: string): Promise<Entry[]> {
  const db = await getDb();
  const e = schema.scheduleEntries;
  return db.select(entryCols).from(e).where(eq(e.userId, userId)).orderBy(asc(e.day), asc(e.start), asc(e.end)).all();
}

export async function listReminders(userId: string): Promise<Reminder[]> {
  const db = await getDb();
  const r = schema.reminders;
  return db.select(reminderCols).from(r).where(eq(r.userId, userId)).orderBy(asc(r.createdAt), sql`rowid`).all();
}

export async function getSchedule(userId: string) {
  const [entries, reminders] = await Promise.all([listEntries(userId), listReminders(userId)]);
  return { entries, reminders };
}

async function count(table: typeof schema.scheduleEntries | typeof schema.reminders, userId: string) {
  const db = await getDb();
  const row = await db.select({ n: sql<number>`count(*)` }).from(table).where(eq(table.userId, userId)).get();
  return Number(row?.n ?? 0);
}

const fields = (input: EntryInputT) => ({
  start: input.start,
  end: input.end,
  subjectId: input.subjectId || null,
  title: cleanText(input.title ?? "", 60),
  place: cleanText(input.place ?? "", 60),
  note: cleanNote(input.note ?? "", 300),
});

/** Sets (or removes, with 0/null) the reminder before one of the user's classes. */
async function setClassReminder(userId: string, entryId: string, minutes: number | null | undefined) {
  if (minutes === undefined) return;
  const db = await getDb();
  const r = schema.reminders;
  if (!minutes) {
    await db.delete(r).where(and(eq(r.userId, userId), eq(r.entryId, entryId))).run();
    return;
  }
  const existing = await db.select({ id: r.id }).from(r).where(and(eq(r.userId, userId), eq(r.entryId, entryId))).get();
  if (existing) {
    await db.update(r).set({ minutesBefore: minutes, enabled: true }).where(and(eq(r.id, existing.id), eq(r.userId, userId))).run();
    return;
  }
  if ((await count(r, userId)) >= MAX_REMINDERS) return;
  await db.insert(r).values({ id: newId(), userId, kind: "class", entryId, minutesBefore: minutes }).onConflictDoNothing().run();
}

/** Adds a class on each of `days`. */
export async function createEntries(userId: string, days: number[], input: EntryInputT) {
  const unique = [...new Set(days)].sort();
  if ((await count(schema.scheduleEntries, userId)) + unique.length > MAX_ENTRIES) return { error: "limit" as const };
  const db = await getDb();
  const ids: string[] = [];
  for (const day of unique) {
    const id = newId();
    await db.insert(schema.scheduleEntries).values({ id, userId, day, ...fields(input) }).run();
    await setClassReminder(userId, id, input.remind);
    ids.push(id);
  }
  return { ids };
}

export async function updateEntry(userId: string, id: string, input: EntryInputT) {
  const db = await getDb();
  const e = schema.scheduleEntries;
  const res = await db.update(e).set({ day: input.day, ...fields(input) }).where(and(eq(e.id, id), eq(e.userId, userId))).run();
  if (!res.rowsAffected) return false;
  await setClassReminder(userId, id, input.remind);
  return true;
}

/** Removes the class and (by the foreign key) its reminder. */
export async function deleteEntry(userId: string, id: string) {
  const db = await getDb();
  const e = schema.scheduleEntries;
  const res = await db.delete(e).where(and(eq(e.id, id), eq(e.userId, userId))).run();
  return res.rowsAffected > 0;
}

/** Clears the whole timetable (the pupil's own reminders stay). */
export async function clearEntries(userId: string) {
  const db = await getDb();
  await db.delete(schema.scheduleEntries).where(eq(schema.scheduleEntries.userId, userId)).run();
}

export async function createReminder(userId: string, input: z.infer<typeof ReminderInput>) {
  if ((await count(schema.reminders, userId)) >= MAX_REMINDERS) return { error: "limit" as const };
  const db = await getDb();
  const id = newId();
  const title = cleanText(input.title, 80);
  if (!title) return { error: "title" as const };
  await db
    .insert(schema.reminders)
    .values(
      input.kind === "weekly"
        ? { id, userId, kind: "weekly", title, days: input.days, time: input.time }
        : { id, userId, kind: "once", title, date: input.date, time: input.time },
    )
    .run();
  return { id };
}

export async function updateReminder(userId: string, id: string, input: z.infer<typeof ReminderInput>) {
  const db = await getDb();
  const r = schema.reminders;
  const title = cleanText(input.title, 80);
  if (!title) return false;
  // A class reminder is changed through its class; only the pupil's own ones here.
  const set =
    input.kind === "weekly"
      ? { kind: "weekly" as const, title, days: input.days, time: input.time, date: null }
      : { kind: "once" as const, title, date: input.date, time: input.time, days: 0 };
  const res = await db
    .update(r)
    .set({ ...set, enabled: true })
    .where(and(eq(r.id, id), eq(r.userId, userId), sql`${r.kind} != 'class'`))
    .run();
  return res.rowsAffected > 0;
}

export async function setReminderEnabled(userId: string, id: string, enabled: boolean) {
  const db = await getDb();
  const r = schema.reminders;
  const res = await db.update(r).set({ enabled }).where(and(eq(r.id, id), eq(r.userId, userId))).run();
  return res.rowsAffected > 0;
}

export async function deleteReminder(userId: string, id: string) {
  const db = await getDb();
  const r = schema.reminders;
  const res = await db.delete(r).where(and(eq(r.id, id), eq(r.userId, userId))).run();
  return res.rowsAffected > 0;
}
