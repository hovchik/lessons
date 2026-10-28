import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { bestStreak, streakOf, tierOf, weekOf, weekStart } from "../src/lib/motivation";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-motivation-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

// 2026-11-02 is a Monday.
test("weeks run Monday to Sunday", () => {
  assert.equal(weekStart("2026-11-02"), "2026-11-02");
  assert.equal(weekStart("2026-11-08"), "2026-11-02");
  assert.equal(weekStart("2026-11-01"), "2026-10-26");
  const w = weekOf(["2026-11-02", "2026-11-04", "2026-10-30"], "2026-11-04");
  assert.equal(w.done, 2);
  assert.deepEqual(w.week.map((d) => [d.done, d.today, d.future]).slice(0, 4), [[true, false, false], [false, false, false], [true, true, false], [false, false, true]]);
});

test("a streak counts learning days and waits for today", () => {
  const s = streakOf(["2026-11-02", "2026-11-03", "2026-11-04"], "2026-11-04");
  assert.deepEqual(s, { days: 3, todayDone: true, frozen: [], freezeLeft: true });
  assert.deepEqual(streakOf(["2026-11-02", "2026-11-03", "2026-11-04"], "2026-11-05"), { days: 3, todayDone: false, frozen: [], freezeLeft: true });
  assert.equal(streakOf([], "2026-11-05").days, 0);
});

test("the weekly freeze covers one missed day a week", () => {
  // Tuesday missed: the freeze keeps the run.
  assert.deepEqual(streakOf(["2026-11-02", "2026-11-04", "2026-11-05"], "2026-11-05"), { days: 3, todayDone: true, frozen: ["2026-11-03"], freezeLeft: false });
  // Two missed days in one week end the run; the freeze is not spent on days before it.
  assert.deepEqual(streakOf(["2026-11-02", "2026-11-05"], "2026-11-05"), { days: 1, todayDone: true, frozen: [], freezeLeft: true });
  // Sunday is in the week before Monday: a miss on Friday and on Sunday share a week.
  assert.equal(streakOf(["2026-10-29", "2026-10-31", "2026-11-02"], "2026-11-02").days, 2);
  // One miss in each of two weeks is fine.
  const s = streakOf(["2026-10-30", "2026-10-31", "2026-11-02", "2026-11-04"], "2026-11-04");
  assert.equal(s.days, 4);
  assert.deepEqual(s.frozen, ["2026-11-01", "2026-11-03"]);
});

test("the best streak uses the same rules", () => {
  assert.equal(bestStreak([]), 0);
  assert.equal(bestStreak(["2026-11-02", "2026-11-03", "2026-11-05", "2026-11-06", "2026-11-09", "2026-11-10"]), 4);
  assert.equal(bestStreak(["2026-11-01", "2026-11-03", "2026-11-04"]), 3);
});

test("subject badges come at 1, 5 and 15 mastered units", () => {
  assert.deepEqual([0, 1, 4, 5, 15, 20].map((n) => tierOf(n)), [
    { tier: 0, next: 1 },
    { tier: 1, next: 5 },
    { tier: 1, next: 5 },
    { tier: 2, next: 15 },
    { tier: 3, next: null },
    { tier: 3, next: null },
  ]);
});

type Modules = { client: typeof import("../src/server/db/client"); motivation: typeof import("../src/server/motivation"); progress: typeof import("../src/server/progress") };
let m: Modules;

before(async () => {
  m = { client: await import("../src/server/db/client"), motivation: await import("../src/server/motivation"), progress: await import("../src/server/progress") };
  const db = await m.client.getDb();
  await db.insert(m.client.schema.users).values({ id: "u1", username: "ani", displayName: "Ani", passwordHash: "x" }).run();
});

after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("points reward right answers once a day, recall double, and a first unit pass", async () => {
  const db = await m.client.getDb();
  const { schema } = m.client;
  let k = 0;
  const ev = (day: string, itemId: string, source: "practice" | "review" | "diagnostic" | "quiz", correct = true) => ({
    id: `e${k++}`,
    userId: "u1",
    itemId,
    source,
    refId: "a",
    correct,
    createdAt: `${day}T10:00:0${k % 10}.000Z`,
  });
  await db.insert(schema.answerEvents).values([
    // Monday: 5 answers, 3 different right ones (one twice), one wrong: 3 points, a learning day.
    ev("2026-11-02", "quiz:a#0", "practice"),
    ev("2026-11-02", "quiz:a#0", "quiz"),
    ev("2026-11-02", "quiz:a#1", "practice"),
    ev("2026-11-02", "quiz:a#2", "practice"),
    ev("2026-11-02", "quiz:a#3", "practice", false),
    // Tuesday: 4 answers only (not a learning day); a recalled one is worth 2, the placement test nothing.
    ev("2026-11-03", "quiz:a#0", "review"),
    ev("2026-11-03", "quiz:a#5", "diagnostic"),
    ev("2026-11-03", "quiz:a#6", "diagnostic"),
    ev("2026-11-03", "quiz:a#7", "diagnostic"),
    // Wednesday: 5 answers.
    ...[0, 1, 2, 3, 4].map((i) => ev("2026-11-04", `quiz:b#${i}`, "practice")),
  ]).run();
  await m.progress.recordAttempt({ userId: "u1", kind: "unit", refId: "math-3.u1", score: 9, total: 10 });
  await m.progress.recordAttempt({ userId: "u1", kind: "unit", refId: "math-3.u1", score: 10, total: 10 });
  await m.progress.recordAttempt({ userId: "u1", kind: "unit", refId: "math-3.u2", score: 5, total: 10 });
  const today = new Date().toISOString().slice(0, 10);

  const mo = await m.motivation.getMotivation("u1", new Date("2026-11-04T18:00:00Z"));
  assert.equal(mo.hasActivity, true);
  // Tuesday had only 4 answers, so the freeze kept the run.
  assert.deepEqual(mo.streak, { days: 2, todayDone: true, frozen: ["2026-11-03"], freezeLeft: false });
  assert.deepEqual(mo.today, { answers: 5, needed: 5 });
  assert.equal(mo.week.done, 2);
  assert.equal(mo.week.goal, 5);
  // 3 + 2 + 5, and the unit pass (dated today by the database) once.
  assert.equal(mo.points.total, 3 + 2 + 5 + 20);
  assert.equal(mo.points.today, today === "2026-11-04" ? 25 : 5);
  assert.deepEqual(mo.badges.subjects, []);
  assert.deepEqual(mo.badges.streaks.map((b) => b.earned), [false, false, false]);

  await m.motivation.setWeeklyGoal("u1", 3);
  const after = await m.motivation.getMotivation("u1", new Date("2026-11-04T18:00:00Z"));
  assert.equal(after.week.goal, 3);
});
