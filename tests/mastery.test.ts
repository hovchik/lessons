import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { masteryLevel } from "../src/lib/mastery";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-mastery-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");
process.env.ADMIN_SESSION_SECRET ??= "test-secret";

type Modules = {
  client: typeof import("../src/server/db/client");
  progress: typeof import("../src/server/progress");
  mastery: typeof import("../src/server/mastery");
};
let m: Modules;
const tx = (s: string) => ({ en: s, hy: s, ru: s });
const q = (answer: number) => ({ prompt: tx(`q${answer}`), options: [tx("a"), tx("b"), tx("c"), tx("d")], answer, explanation: tx("why") });
const quiz = [q(0), q(1), q(2), q(3)];
const right = [0, 1, 2, 3];

before(async () => {
  m = {
    client: await import("../src/server/db/client"),
    progress: await import("../src/server/progress"),
    mastery: await import("../src/server/mastery"),
  };
  const db = await m.client.getDb();
  const { schema } = m.client;
  await db.insert(schema.subjects).values({ id: "math", name: tx("Math"), description: tx(""), color: "indigo", icon: "calculator" }).run();
  await db.insert(schema.courses).values({ id: "math-3", subjectId: "math", grade: 3, title: tx("Math 3"), description: tx(""), curriculumNotes: { armenia: tx(""), russia: tx("") }, hoursPerWeek: { armenia: 4, russia: 4 } }).run();
  await db.insert(schema.units).values([
    { id: "math-3-u1", courseId: "math-3", position: 1, title: tx("Tables"), summary: tx("") },
    { id: "math-3-u2", courseId: "math-3", position: 2, title: tx("Division"), summary: tx("") },
  ]).run();
  const lesson = (id: string, unitId: string, position: number) =>
    db.insert(schema.lessons).values({ id, unitId, courseId: "math-3", position, slug: id, title: tx(id), objectives: { en: [], hy: [], ru: [] }, content: tx("Body"), quiz, status: "published" }).run();
  for (const [id, unit, pos] of [["a", "math-3-u1", 1], ["b", "math-3-u1", 2], ["c", "math-3-u1", 3], ["d", "math-3-u2", 1]] as const) await lesson(id, unit, pos);
  await db.insert(schema.skills).values([
    { id: "math-3.u1", courseId: "math-3", unitId: "math-3-u1", position: 1, title: tx("Tables") },
    { id: "math-3.u2", courseId: "math-3", unitId: "math-3-u2", position: 2, title: tx("Division") },
  ]).run();
  await db.insert(schema.skillPrereqs).values({ skillId: "math-3.u2", prereqId: "math-3.u1" }).run();
  await db.insert(schema.lessonSkills).values([
    { lessonId: "a", skillId: "math-3.u1" },
    { lessonId: "b", skillId: "math-3.u1" },
    { lessonId: "c", skillId: "math-3.u1" },
    { lessonId: "d", skillId: "math-3.u2" },
  ]).run();
  await db.insert(schema.users).values([
    { id: "u1", username: "ani", displayName: "Ani", passwordHash: "x" },
    { id: "u2", username: "aram", displayName: "Aram", passwordHash: "x" },
    { id: "u3", username: "nare", displayName: "Nare", passwordHash: "x" },
  ]).run();
});

after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("levels follow coverage, accuracy and the unit check", () => {
  const e = { lessons: 3, lessonsTried: 0, cards: 0, correct: 0, lastCheck: null };
  assert.equal(masteryLevel(e), "none");
  assert.equal(masteryLevel({ ...e, lessonsTried: 1, cards: 4, correct: 4 }), "familiar", "one lesson of three is not enough");
  assert.equal(masteryLevel({ ...e, lessonsTried: 2, cards: 8, correct: 6 }), "proficient");
  assert.equal(masteryLevel({ ...e, lessonsTried: 2, cards: 8, correct: 5 }), "familiar", "too many wrong");
  assert.equal(masteryLevel({ ...e, lessonsTried: 3, cards: 12, correct: 11, lastCheck: 0.9 }), "mastered");
  assert.equal(masteryLevel({ ...e, lessonsTried: 3, cards: 12, correct: 8, lastCheck: 0.9 }), "proficient", "mastery is lost when answers go wrong later");
});

test("mastery grows with quizzes", async () => {
  const level = async () => (await m.mastery.getMastery("u1", ["math-3"])).map((s) => [s.skillId, s.level]);
  assert.deepEqual(await level(), [["math-3.u1", "none"], ["math-3.u2", "none"]]);
  await m.progress.recordQuizResult({ userId: "u1", lessonId: "a", answers: right });
  assert.deepEqual(await level(), [["math-3.u1", "familiar"], ["math-3.u2", "none"]]);
  await m.progress.recordQuizResult({ userId: "u1", lessonId: "b", answers: [0, 1, 0, 0] });
  assert.deepEqual((await level())[0], ["math-3.u1", "proficient"]);
  const s = (await m.mastery.getMastery("u1", ["math-3"]))[0].evidence;
  assert.deepEqual(s, { lessons: 3, lessonsTried: 2, cards: 8, correct: 6, lastCheck: null });
});

test("a unit check covers every lesson, puts mistakes first and hides the answers", async () => {
  const built = await m.mastery.buildUnitCheck("u1", "math-3.u1");
  assert.ok(built);
  const check = built.questions;
  assert.equal(check.length, 10);
  const lessons = new Set(check.map((c) => c.itemId.split("#")[0]));
  assert.deepEqual([...lessons].sort(), ["quiz:a", "quiz:b", "quiz:c"]);
  for (const wrong of ["quiz:b#2", "quiz:b#3"]) assert.ok(check.some((c) => c.itemId === wrong), `${wrong} was answered wrong`);
  assert.ok(check.every((c) => !("answer" in c) && !("explanation" in c)));
  assert.equal(await m.mastery.buildUnitCheck("u1", "nope.u1"), null);
});

test("passing the unit check makes the skill Mastered", async () => {
  const { questions, token } = (await m.mastery.buildUnitCheck("u1", "math-3.u1"))!;
  const answers = questions.map((c) => ({ itemId: c.itemId, response: Number(c.itemId.split("#")[1]), confidence: 2 }));
  const r = await m.mastery.recordUnitCheck("u1", "math-3.u1", answers, token);
  assert.ok(r);
  assert.equal(r.score, 10);
  assert.equal(r.passed, true);
  assert.equal(r.before, "proficient");
  assert.equal(r.after, "mastered");
  assert.deepEqual(r.weakLessons, []);
  const { schema } = m.client;
  const { eq, and } = await import("drizzle-orm");
  const db = await m.client.getDb();
  const attempt = await db.select().from(schema.attempts).where(and(eq(schema.attempts.userId, "u1"), eq(schema.attempts.kind, "unit"))).get();
  assert.equal(attempt?.refId, "math-3.u1");
  const ev = await db.select().from(schema.answerEvents).where(and(eq(schema.answerEvents.userId, "u1"), eq(schema.answerEvents.source, "unit"))).all();
  assert.equal(ev.length, 10);
});

test("failing a later check loses the mastery until the next pass", async () => {
  const { questions, token } = (await m.mastery.buildUnitCheck("u1", "math-3.u1"))!;
  const r = await m.mastery.recordUnitCheck("u1", "math-3.u1", questions.map((c, k) => {
    // Each question's right option equals its index in these quizzes; get three wrong.
    const right = Number(c.itemId.split("#")[1]);
    return { itemId: c.itemId, response: k < 3 ? (right + 1) % 4 : right };
  }), token);
  assert.ok(r);
  assert.equal(r.score, 7);
  assert.equal(r.passed, false);
  assert.equal(r.before, "mastered");
  assert.equal(r.after, "proficient");
});

test("a failed check names the lessons to go over and the weak earlier skill", async () => {
  // u2 has never worked on the tables unit, which division builds on.
  await m.progress.recordQuizResult({ userId: "u2", lessonId: "d", answers: right });
  const { questions, token } = (await m.mastery.buildUnitCheck("u2", "math-3.u2"))!;
  assert.equal(questions.length, 4, "a small unit gives a shorter check");
  const r = await m.mastery.recordUnitCheck("u2", "math-3.u2", questions.map((c) => ({ itemId: c.itemId, response: 0 })), token);
  assert.ok(r);
  assert.equal(r.passed, false);
  assert.deepEqual(r.weakLessons.map((w) => w.href), ["/math/3/d"]);
  assert.deepEqual(r.weakPrereqs.map((p) => [p.skillId, p.level, p.href]), [["math-3.u1", "none", "/math/3#unit-1"]]);
  const right1 = r.results.find((x) => !x.correct)!;
  assert.equal(right1.key.kind, "choice");
});

test("only the questions the check was issued with count", async () => {
  const { questions, token } = (await m.mastery.buildUnitCheck("u2", "math-3.u2"))!;
  const all = questions.map((c) => ({ itemId: c.itemId, response: Number(c.itemId.split("#")[1]) }));
  const r = (a: { itemId: string; response: number }[], opts: { user?: string; skill?: string; tok?: string; now?: Date } = {}) =>
    m.mastery.recordUnitCheck(opts.user ?? "u2", opts.skill ?? "math-3.u2", a, opts.tok ?? token, opts.now);
  assert.equal(await r(all.slice(0, 1)), null, "one easy question is not a check");
  assert.equal(await r([...all.slice(1), { itemId: "quiz:a#0", response: 0 }]), null, "a question from another unit");
  assert.equal(await r([...all, all[0]]), null, "a repeated question");
  assert.equal(await r(all, { user: "u1" }), null, "another pupil's check");
  assert.equal(await r(all, { tok: token.replace(/.$/, (c) => (c === "A" ? "B" : "A")) }), null, "a changed signature");
  assert.equal(await r(all, { now: new Date(Date.now() + 7 * 60 * 60 * 1000) }), null, "too late");
  assert.equal(await r(all.map((a, k) => (k === 0 ? { ...a, response: 9 } : a))), null, "an option that does not exist");
  assert.equal(await r([]), null);
  assert.equal((await r(all))?.score, all.length);
});

test("a course touched only by a unit check shows on the progress page", async () => {
  assert.deepEqual(await m.progress.getUserCourseSummaries("u3"), []);
  const { questions, token } = (await m.mastery.buildUnitCheck("u3", "math-3.u1"))!;
  await m.mastery.recordUnitCheck("u3", "math-3.u1", questions.map((c) => ({ itemId: c.itemId, response: 0 })), token);
  const rows = await m.progress.getUserCourseSummaries("u3");
  assert.deepEqual(rows.map((r) => [r.courseId, r.completed]), [["math-3", 0]]);
});
