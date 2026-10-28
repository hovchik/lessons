import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { bestDay, change, learningDaysIn, recapWeek } from "../src/lib/recap";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-recap-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

test("weeks run Monday to Sunday, this week or the one before", () => {
  // 2026-10-28 is a Wednesday.
  assert.deepEqual(recapWeek("2026-10-28", "this").days, ["2026-10-26", "2026-10-27", "2026-10-28", "2026-10-29", "2026-10-30", "2026-10-31", "2026-11-01"]);
  assert.equal(recapWeek("2026-10-28", "this").end, "2026-11-02");
  assert.equal(recapWeek("2026-10-28", "last").start, "2026-10-19");
  assert.equal(recapWeek("2026-11-01", "this").start, "2026-10-26", "Sunday belongs to the week before it");
});

test("best day, learning days and the change from last week", () => {
  const days = [
    { day: "a", answers: 3 },
    { day: "b", answers: 12 },
    { day: "c", answers: 12 },
    { day: "d", answers: 5 },
  ];
  assert.equal(bestDay(days)!.day, "b", "ties go to the earlier day");
  assert.equal(bestDay([{ day: "a", answers: 0 }]), null);
  assert.equal(learningDaysIn(days), 3);
  assert.equal(change(15, 10), 50);
  assert.equal(change(5, 10), -50);
  assert.equal(change(5, 0), null);
});

type Modules = { client: typeof import("../src/server/db/client"); recap: typeof import("../src/server/recap") };
let m: Modules;
before(async () => {
  m = { client: await import("../src/server/db/client"), recap: await import("../src/server/recap") };
  const db = await m.client.getDb();
  const s = m.client.schema;
  await db.insert(s.users).values({ id: "u1", username: "ani", displayName: "Ani", passwordHash: "x", weeklyGoal: 3 }).run();
  const ev = (id: string, at: string, correct: boolean) => ({ id, userId: "u1", itemId: `quiz:${id}`, source: "quiz" as const, refId: "l1", correct, createdAt: at });
  const rows = [
    ...Array.from({ length: 6 }, (_, i) => ev(`m${i}`, "2026-10-26T09:00:00Z", i < 5)),
    ...Array.from({ length: 2 }, (_, i) => ev(`t${i}`, "2026-10-27T09:00:00Z", true)),
    ...Array.from({ length: 4 }, (_, i) => ev(`p${i}`, "2026-10-20T09:00:00Z", true)),
  ];
  await db.insert(s.answerEvents).values(rows).run();
  await db.insert(s.userCards).values({ userId: "u1", cardId: "arts-duduk", skillId: "music-1.u1", createdAt: "2026-10-27T10:00:00Z" }).run();
  await db.insert(s.gameScores).values({ id: "g1", userId: "u1", gameId: "calc:times:3", mode: "sprint", score: 20, total: 22, createdAt: "2026-10-28T08:00:00Z" }).run();
  await db.insert(s.puzzleResults).values({ userId: "u1", day: "2026-10-28", level: "junior", tries: 1, solved: true, puzzleId: "j01" }).run();
});
after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("the recap counts only the chosen week", async () => {
  const now = new Date("2026-10-28T12:00:00Z");
  const r = await m.recap.getRecap("u1", "this", now);
  assert.equal(r.answers, 8);
  assert.equal(r.correct, 7);
  assert.equal(r.learningDays, 1);
  assert.equal(r.goal, 3);
  assert.equal(r.best!.day, "2026-10-26");
  assert.deepEqual(r.cards.map((c) => c.id), ["arts-duduk"]);
  assert.equal(r.gameRounds, 1);
  assert.equal(r.puzzlesSolved, 1);
  assert.equal(r.vsLastWeek.answers, 100);
  const last = await m.recap.getRecap("u1", "last", now);
  assert.equal(last.answers, 4);
  assert.equal(last.cards.length, 0);
});
