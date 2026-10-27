import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-warmup-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

type Modules = {
  client: typeof import("../src/server/db/client");
  progress: typeof import("../src/server/progress");
  review: typeof import("../src/server/review");
  warmup: typeof import("../src/server/warmup");
  checks: typeof import("../src/server/checks");
};
let m: Modules;
const DAY = 24 * 60 * 60 * 1000;
const tx = (s: string) => ({ en: s, hy: s, ru: s });
const q = (answer: number) => ({ prompt: tx(`q${answer}`), options: [tx("a"), tx("b"), tx("c"), tx("d")], answer, explanation: tx("why") });
const quiz = [q(0), q(1), q(2), q(3)];
const checkBody = (lang: string) => `Intro ${lang}\n\n~~~sim\ncheck answer=2 predict\nQ?\n- x\n- y\n~~~\n\nText\n\n~~~sim\nballistics\n~~~\n\n~~~sim\ncheck answer=1\nQ2?\n- x\n- y\n~~~\n`;

async function events(itemId: string) {
  const { schema } = m.client;
  const { eq } = await import("drizzle-orm");
  const db = await m.client.getDb();
  return db.select().from(schema.answerEvents).where(eq(schema.answerEvents.itemId, itemId)).orderBy(schema.answerEvents.createdAt).all();
}
async function card(itemId: string, userId = "u1") {
  const { schema } = m.client;
  const { and, eq } = await import("drizzle-orm");
  const db = await m.client.getDb();
  return db.select().from(schema.reviewCards).where(and(eq(schema.reviewCards.userId, userId), eq(schema.reviewCards.itemId, itemId))).get();
}

before(async () => {
  m = {
    client: await import("../src/server/db/client"),
    progress: await import("../src/server/progress"),
    review: await import("../src/server/review"),
    warmup: await import("../src/server/warmup"),
    checks: await import("../src/server/checks"),
  };
  const db = await m.client.getDb();
  const { schema } = m.client;
  await db.insert(schema.subjects).values([
    { id: "math", name: tx("Math"), description: tx(""), color: "indigo", icon: "calculator" },
    { id: "physics", name: tx("Physics"), description: tx(""), color: "sky", icon: "atom" },
  ]).run();
  for (const [id, subjectId] of [["math-3", "math"], ["physics-7", "physics"]]) {
    await db.insert(schema.courses).values({ id, subjectId, grade: Number(id.split("-")[1]), title: tx(id), description: tx(""), curriculumNotes: { armenia: tx(""), russia: tx("") }, hoursPerWeek: { armenia: 2, russia: 2 } }).run();
  }
  await db.insert(schema.units).values([
    { id: "math-3-u1", courseId: "math-3", position: 1, title: tx("U1"), summary: tx("") },
    { id: "math-3-u2", courseId: "math-3", position: 2, title: tx("U2"), summary: tx("") },
    { id: "physics-7-u1", courseId: "physics-7", position: 1, title: tx("P1"), summary: tx("") },
  ]).run();
  const lesson = (id: string, unitId: string, courseId: string, position: number, extra: Record<string, unknown> = {}) =>
    db.insert(schema.lessons).values({ id, unitId, courseId, position, slug: id, title: tx(id), objectives: { en: [], hy: [], ru: [] }, content: tx("Body"), quiz, status: "published", ...extra }).run();
  await lesson("m1", "math-3-u1", "math-3", 1);
  await lesson("m2", "math-3-u1", "math-3", 2);
  await lesson("m3", "math-3-u1", "math-3", 3, { status: "draft" });
  await lesson("m4", "math-3-u2", "math-3", 1);
  await lesson("p1", "physics-7-u1", "physics-7", 1, { content: { en: checkBody("en"), hy: checkBody("hy"), ru: checkBody("ru") } });
  await db.insert(schema.skills).values([
    { id: "math-3.u1", courseId: "math-3", unitId: "math-3-u1", position: 1, title: tx("U1") },
    { id: "physics-7.u1", courseId: "physics-7", unitId: "physics-7-u1", position: 1, title: tx("P1") },
  ]).run();
  await db.insert(schema.skillPrereqs).values({ skillId: "physics-7.u1", prereqId: "math-3.u1" }).run();
  await db.insert(schema.lessonSkills).values([
    { lessonId: "m1", skillId: "math-3.u1" },
    { lessonId: "m2", skillId: "math-3.u1" },
    { lessonId: "p1", skillId: "physics-7.u1" },
  ]).run();
  await db.insert(schema.users).values([
    { id: "u1", username: "ani", displayName: "Ani", passwordHash: "x" },
    { id: "u2", username: "aram", displayName: "Aram", passwordHash: "x" },
  ]).run();
});

after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("a warm-up draws from the nearest earlier published lessons, one question each", async () => {
  const items = await m.warmup.getWarmup("m4", null);
  assert.deepEqual(items.map((i) => i.itemId.split("#")[0]), ["quiz:m2", "quiz:m1"]);
  assert.equal(items[0].href, "/math/3/m2");
  assert.deepEqual(await m.warmup.getWarmup("m1", null), [], "the first lesson has nothing before it");
});

test("prerequisite skills from another course feed the warm-up", async () => {
  const items = await m.warmup.getWarmup("p1", null);
  assert.deepEqual(items.map((i) => i.itemId.split("#")[0]).sort(), ["quiz:m1", "quiz:m2"]);
});

test("for a pupil, questions due for review come before new ones", async () => {
  const past = new Date(Date.now() - 3 * DAY);
  const { recordAnswers } = await import("../src/server/learner");
  await recordAnswers("u2", [{ itemId: "quiz:m1#3", source: "quiz", refId: "m1", courseId: "math-3", correct: false }], past);
  const items = await m.warmup.getWarmup("m4", "u2");
  assert.equal(items[0].itemId, "quiz:m1#3");
  assert.equal(items[1].itemId.split("#")[0], "quiz:m2");
});

test("a warm-up answer creates the card where the question lives and logs the warm-up", async () => {
  const r = await m.review.answerItem({ userId: "u1", itemId: "quiz:m2#1", choice: 1, source: "warmup", confidence: 2 });
  assert.equal(r?.correct, true);
  assert.ok((r?.nextInDays ?? 0) >= 1);
  const c = await card("quiz:m2#1");
  assert.equal(c?.source, "quiz");
  const [e] = await events("quiz:m2#1");
  assert.equal(e.source, "warmup");
  assert.equal(e.confidence, 2);
  // Daily Review still needs a card the pupil already has; drafts and other kinds are refused.
  assert.equal(await m.review.answerItem({ userId: "u1", itemId: "quiz:m1#0", choice: 0 }), null);
  assert.equal(await m.review.answerItem({ userId: "u1", itemId: "quiz:m3#0", choice: 0, source: "warmup" }), null);
  assert.equal(await m.review.answerItem({ userId: "u1", itemId: "check:p1#0", choice: 0, source: "warmup" }), null);
});

test("quiz confidence and a second try are saved; only the first try counts and moves the card", async () => {
  // q0 right and sure, q1 wrong then right on the retry, q2 wrong twice, q3 a right guess.
  const progress = await m.progress.recordQuizResult({ userId: "u1", lessonId: "m4", answers: [0, 0, 0, 3], confidence: [2, 2, 0, 0], retries: [null, 1, 1, null] });
  assert.equal(progress?.lastScore, 2);
  const q1 = await events("quiz:m4#1");
  assert.deepEqual(q1.map((e) => [e.correct, e.choice, e.confidence, e.hintUsed]), [[false, 0, 2, false], [true, 1, null, true]]);
  const c1 = await card("quiz:m4#1");
  assert.equal(c1?.lastCorrect, false, "the retry does not move the card");
  assert.ok(new Date(c1!.due).getTime() <= Date.now() + DAY + 1000);
  // A right guess is rated Hard, so it comes back sooner than a sure right answer.
  const sure = await card("quiz:m4#0");
  const guess = await card("quiz:m4#3");
  assert.ok(new Date(guess!.due).getTime() < new Date(sure!.due).getTime());
  // The notebook shows the first (scheduled) answer, not the hinted retry, and flags a sure mistake.
  const notebook = await m.review.getMistakes("u1");
  const n1 = notebook.find((i) => i.itemId === "quiz:m4#1");
  assert.equal(n1?.lastChoice, 0);
  assert.equal(n1?.wasSure, true);
  assert.equal(notebook.find((i) => i.itemId === "quiz:m4#2")?.wasSure, false);
});

test("bad second tries are ignored and mismatched lists refused", async () => {
  await m.progress.recordQuizResult({ userId: "u2", lessonId: "m4", answers: [0, 0, 0, 0], retries: [1, 0, 9, null] });
  assert.equal((await events("quiz:m4#0")).filter((e) => e.userId === "u2").length, 1, "no retry after a right answer");
  assert.equal((await events("quiz:m4#1")).filter((e) => e.userId === "u2").length, 1, "a retry must pick another option");
  assert.equal((await events("quiz:m4#2")).filter((e) => e.userId === "u2").length, 1, "a retry must be a real option");
  assert.equal(await m.progress.recordQuizResult({ userId: "u2", lessonId: "m4", answers: [0, 0, 0, 0], confidence: [2] }), null);
});

test("quick checks are numbered in the body and saved without a card", async () => {
  const { numberChecks, checkAnswers } = await import("../src/lib/checks");
  const numbered = numberChecks(checkBody("en"));
  assert.match(numbered, /check answer=2 predict n=0/);
  assert.match(numbered, /check answer=1 n=1/);
  assert.doesNotMatch(numbered, /ballistics n=/);
  assert.deepEqual(checkAnswers(checkBody("ru")), [1, 0]);

  assert.deepEqual(await m.checks.recordCheck({ userId: "u1", lessonId: "p1", index: 0, choice: 1, locale: "hy" }), { correct: true });
  assert.deepEqual(await m.checks.recordCheck({ userId: "u1", lessonId: "p1", index: 1, choice: 1, locale: "en" }), { correct: false });
  assert.equal(await m.checks.recordCheck({ userId: "u1", lessonId: "p1", index: 2, choice: 0, locale: "en" }), null);
  const [e] = await events("check:p1#0");
  assert.equal(e.source, "check");
  assert.equal(await card("check:p1#0"), undefined);
});
