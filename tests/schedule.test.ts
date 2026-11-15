import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { alarmsBetween, buildIcs, cleanText, maskOf, nextAlarm, nowAndNext, overlaps, type Entry, type Reminder } from "../src/lib/schedule";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-schedule-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

type Modules = { client: typeof import("../src/server/db/client"); schedule: typeof import("../src/server/schedule") };
let m: Modules;

before(async () => {
  m = { client: await import("../src/server/db/client"), schedule: await import("../src/server/schedule") };
  const db = await m.client.getDb();
  await db.insert(m.client.schema.users).values([
    { id: "ani", username: "ani", displayName: "Ani", passwordHash: "x", grade: 5 },
    { id: "aram", username: "aram", displayName: "Aram", passwordHash: "x", grade: 5 },
  ]).run();
});

after(() => fs.rmSync(dir, { recursive: true, force: true }));

const input = (over: Record<string, unknown> = {}) => m.schedule.EntryInput.parse({ day: 1, start: "09:00", end: "09:45", subjectId: "math", title: "", ...over });

test("a class is added on several days with its reminder, and listed in timetable order", async () => {
  const res = await m.schedule.createEntries("ani", [3, 1, 1], input({ place: "  Room   12 ", remind: 10 }));
  if (!res.ids) throw new Error("not created");
  assert.equal(res.ids.length, 2, "the same day twice counts once");
  await m.schedule.createEntries("ani", [1], input({ start: "08:00", end: "08:45", subjectId: null, title: "Choir" }));
  const { entries, reminders } = await m.schedule.getSchedule("ani");
  assert.deepEqual(entries.map((e) => `${e.day} ${e.start} ${e.title || e.subjectId}`), ["1 08:00 Choir", "1 09:00 math", "3 09:00 math"]);
  assert.equal(entries[1].place, "Room 12");
  assert.deepEqual(reminders.map((r) => [r.kind, r.minutesBefore, r.enabled]), [["class", 10, true], ["class", 10, true]]);
});

test("bad input is refused: end before start, no name, odd times, unknown reminder length", () => {
  const bad = [{ end: "08:00" }, { subjectId: null, title: "  " }, { start: "9:00" }, { start: "24:00" }, { day: 8 }, { remind: 7 }, { subjectId: "../x" }];
  for (const over of bad) assert.equal(m.schedule.EntryInput.safeParse({ day: 1, start: "09:00", end: "09:45", subjectId: "math", ...over }).success, false, JSON.stringify(over));
  assert.equal(m.schedule.ReminderInput.safeParse({ kind: "weekly", title: "x", days: 0, time: "18:00" }).success, false);
  assert.equal(m.schedule.ReminderInput.safeParse({ kind: "once", title: "x", date: "2026-13-01", time: "18:00" }).success, false);
  assert.equal(m.schedule.ReminderInput.safeParse({ kind: "class", title: "x", entryId: "e", minutesBefore: 5 }).success, false, "class reminders are only set through the class");
});

test("nobody can read, change or delete another user's classes or reminders", async () => {
  const mine = await m.schedule.getSchedule("ani");
  const e = mine.entries[0];
  const r = mine.reminders[0];
  assert.deepEqual(await m.schedule.getSchedule("aram"), { entries: [], reminders: [] });
  assert.equal(await m.schedule.updateEntry("aram", e.id, input({ title: "Hacked" })), false);
  assert.equal(await m.schedule.deleteEntry("aram", e.id), false);
  assert.equal(await m.schedule.setReminderEnabled("aram", r.id, false), false);
  assert.equal(await m.schedule.deleteReminder("aram", r.id), false);
  assert.equal(await m.schedule.updateReminder("aram", r.id, { kind: "weekly", title: "x", days: 1, time: "10:00" }), false);
  await m.schedule.clearEntries("aram");
  assert.deepEqual(await m.schedule.getSchedule("ani"), mine, "nothing of Ani's changed");
});

test("editing a class moves it and sets, changes or removes its one reminder", async () => {
  const before = await m.schedule.getSchedule("ani");
  const e = before.entries.find((x) => x.title === "Choir")!;
  assert.equal(await m.schedule.updateEntry("ani", e.id, input({ day: 2, start: "15:00", end: "16:00", subjectId: null, title: "Choir", remind: 30 })), true);
  let s = await m.schedule.getSchedule("ani");
  assert.deepEqual(s.reminders.filter((r) => r.entryId === e.id).map((r) => r.minutesBefore), [30]);
  await m.schedule.updateEntry("ani", e.id, input({ day: 2, start: "15:00", end: "16:00", subjectId: null, title: "Choir", remind: 5 }));
  s = await m.schedule.getSchedule("ani");
  assert.deepEqual(s.reminders.filter((r) => r.entryId === e.id).map((r) => r.minutesBefore), [5], "still one reminder");
  await m.schedule.updateEntry("ani", e.id, input({ day: 2, start: "15:00", end: "16:00", subjectId: null, title: "Choir", remind: null }));
  s = await m.schedule.getSchedule("ani");
  assert.equal(s.reminders.some((r) => r.entryId === e.id), false);
  assert.equal(s.entries.find((x) => x.id === e.id)!.day, 2);
});

test("own reminders: weekly and once, switched off and on, edited, and a class reminder can't be turned into one", async () => {
  const w = await m.schedule.createReminder("ani", { kind: "weekly", title: "  Do   homework ", days: maskOf([1, 2, 3, 4, 5]), time: "18:00" });
  const o = await m.schedule.createReminder("ani", { kind: "once", title: "Physics test", date: "2026-11-20", time: "07:30" });
  if (!w.id || !o.id) throw new Error("not created");
  assert.equal(await m.schedule.setReminderEnabled("ani", w.id, false), true);
  assert.equal(await m.schedule.updateReminder("ani", o.id, { kind: "weekly", title: "Swim", days: maskOf([6]), time: "11:00" }), true);
  const s = await m.schedule.getSchedule("ani");
  const own = s.reminders.filter((r) => r.kind !== "class");
  assert.deepEqual(own.map((r) => [r.kind, r.title, r.days, r.date, r.time, r.enabled]), [["weekly", "Do homework", 31, null, "18:00", false], ["weekly", "Swim", 32, null, "11:00", true]]);
  const cls = s.reminders.find((r) => r.kind === "class")!;
  assert.equal(await m.schedule.updateReminder("ani", cls.id, { kind: "weekly", title: "x", days: 1, time: "10:00" }), false);
  assert.equal(await m.schedule.deleteReminder("ani", w.id), true);
});

test("deleting a class takes its reminder with it; deleting the account takes everything", async () => {
  const s = await m.schedule.getSchedule("ani");
  const withReminder = s.entries.find((e) => s.reminders.some((r) => r.entryId === e.id))!;
  assert.equal(await m.schedule.deleteEntry("ani", withReminder.id), true);
  assert.equal((await m.schedule.getSchedule("ani")).reminders.some((r) => r.entryId === withReminder.id), false);
  const db = await m.client.getDb();
  const { schema } = m.client;
  const { eq } = await import("drizzle-orm");
  await db.delete(schema.users).where(eq(schema.users.id, "ani")).run();
  assert.deepEqual(await m.schedule.getSchedule("ani"), { entries: [], reminders: [] });
  assert.equal((await db.select().from(schema.reminders).all()).length, 0);
});

test("an account keeps at most 100 classes and 60 reminders", async () => {
  for (let i = 0; i < 14; i++) await m.schedule.createEntries("aram", [1, 2, 3, 4, 5, 6, 7], input({ start: "08:00", end: "08:30", remind: i < 8 ? 5 : null }));
  assert.deepEqual(await m.schedule.createEntries("aram", [1, 2, 3], input()), { error: "limit" });
  assert.ok("ids" in (await m.schedule.createEntries("aram", [1, 2], input())));
  assert.equal((await m.schedule.listEntries("aram")).length, 100);
  for (let i = 0; i < 6; i++) await m.schedule.createReminder("aram", { kind: "once", title: `r${i}`, date: "2026-12-01", time: "10:00" });
  assert.equal((await m.schedule.listReminders("aram")).length, 60);
  assert.deepEqual(await m.schedule.createReminder("aram", { kind: "once", title: "more", date: "2026-12-01", time: "10:00" }), { error: "limit" });
});

// ---- The pure part: when reminders fire -----------------------------------

const entry = (over: Partial<Entry>): Entry => ({ id: "e1", day: 1, start: "09:00", end: "09:45", subjectId: null, title: "Math", place: "", note: "", ...over });
const rem = (over: Partial<Reminder>): Reminder => ({ id: "r1", kind: "class", entryId: "e1", minutesBefore: 10, title: "", days: 0, date: null, time: null, enabled: true, ...over });
// 16 November 2026 is a Monday.
const mon = (h: number, min = 0) => new Date(2026, 10, 16, h, min);

test("a class reminder fires its minutes before the class, every week", () => {
  const alarms = alarmsBetween([rem({})], [entry({})], mon(0), new Date(2026, 10, 30, 0, 0));
  assert.deepEqual(alarms.map((a) => [a.at.getDate(), a.at.getHours(), a.at.getMinutes(), a.title]), [[16, 8, 50, "Math"], [23, 8, 50, "Math"]]);
  assert.notEqual(alarms[0].key, alarms[1].key, "each week's reminder has its own key");
});

test("a reminder for a class just after midnight fires the evening before", () => {
  const alarms = alarmsBetween([rem({ minutesBefore: 30 })], [entry({ day: 2, start: "00:10", end: "00:50" })], mon(23), mon(23, 59));
  assert.deepEqual(alarms.map((a) => [a.at.getDate(), a.at.getHours(), a.at.getMinutes()]), [[16, 23, 40]]);
});

test("weekly, once and switched-off reminders", () => {
  const weekly = rem({ id: "w", kind: "weekly", entryId: null, title: "Homework", days: maskOf([1, 3]), time: "18:00" });
  const once = rem({ id: "o", kind: "once", entryId: null, title: "Test", date: "2026-11-17", time: "07:30" });
  const alarms = alarmsBetween([weekly, once, rem({ enabled: false })], [entry({})], mon(0), new Date(2026, 10, 22, 23, 59));
  assert.deepEqual(alarms.map((a) => `${a.title} ${a.at.getDate()} ${a.at.getHours()}:${a.at.getMinutes()}`), ["Homework 16 18:0", "Test 17 7:30", "Homework 18 18:0"]);
  assert.equal(nextAlarm(once, [], new Date(2026, 10, 18))?.getTime(), undefined, "a past one-off never fires again");
  assert.equal(nextAlarm(once, [], new Date(2026, 5, 1))?.getDate(), 17, "a far one-off is still found");
  assert.equal(nextAlarm(weekly, [], mon(19))?.getDate(), 18);
  assert.equal(alarmsBetween([rem({})], [], mon(0), mon(23)).length, 0, "a reminder whose class is gone is silent");
});

test("now and next, and overlapping classes", () => {
  const list = [entry({ id: "a" }), entry({ id: "b", start: "10:00", end: "10:45", title: "Art" }), entry({ id: "c", day: 3, title: "PE" })];
  let nn = nowAndNext(list, mon(9, 20));
  assert.deepEqual([nn.current?.id, nn.next?.id, nn.today.length], ["a", "b", 2]);
  nn = nowAndNext(list, mon(11));
  assert.deepEqual([nn.current, nn.next?.id], [null, "c"]);
  nn = nowAndNext(list, new Date(2026, 10, 20, 12, 0));
  assert.equal(nn.next?.id, "a", "after the week's last class the next is Monday's first");
  assert.deepEqual([...overlaps([...list, entry({ id: "d", start: "09:30", end: "10:00" })])].sort(), ["a", "d"]);
});

test("the calendar file has a weekly event per class with its alarm, escaped and folded", () => {
  const ics = buildIcs({
    entries: [entry({ place: "Room 1, left; wing", note: "Bring\nthe atlas" }), entry({ id: "e2", day: 5, title: "Հայոց լեզու և գրականություն, շատ երկար անվանումով դաս" })],
    reminders: [rem({}), rem({ id: "w", kind: "weekly", entryId: null, title: "Homework", days: maskOf([1, 3]), time: "18:00" }), rem({ id: "o", kind: "once", entryId: null, title: "Test", date: "2026-11-17", time: "07:30" })],
    titleOf: (e) => e.title,
    calendarName: "Timetable",
    today: new Date(2026, 10, 18),
    host: "lessons",
    stamp: new Date(Date.UTC(2026, 10, 18, 12, 0, 0)),
  });
  assert.ok(ics.startsWith("BEGIN:VCALENDAR\r\n") && ics.endsWith("END:VCALENDAR\r\n"));
  assert.equal(ics.match(/BEGIN:VEVENT/g)?.length, 4);
  assert.ok(ics.includes("DTSTART:20261116T090000\r\nDTEND:20261116T094500\r\nRRULE:FREQ=WEEKLY;BYDAY=MO"));
  assert.ok(ics.includes("LOCATION:Room 1\\, left\\; wing") && ics.includes("DESCRIPTION:Bring\\nthe atlas"));
  assert.ok(ics.includes("TRIGGER:-PT10M"));
  assert.ok(ics.includes("RRULE:FREQ=WEEKLY;BYDAY=MO,WE") && ics.includes("DTSTART:20261117T073000"));
  assert.ok(ics.includes("DTSTAMP:20261118T120000Z"));
  for (const line of ics.split("\r\n")) assert.ok(new TextEncoder().encode(line).length <= 75, line);
  assert.equal(ics.split("\r\n").filter((l) => l.startsWith(" ")).length > 0, true, "the long Armenian title is folded");
});

test("typed text loses hidden and direction characters", () => {
  assert.equal(cleanText("  Ma‮th​   club ", 60), "Math club");
});
