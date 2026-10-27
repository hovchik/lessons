import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-review-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

type Modules = {
  client: typeof import("../src/server/db/client");
  progress: typeof import("../src/server/progress");
  review: typeof import("../src/server/review");
};
let m: Modules;
const DAY = 24 * 60 * 60 * 1000;
const tx = (s: string) => ({ en: s, hy: s, ru: s });
const q = (answer: number, why?: string) => ({ prompt: tx(`q${answer}`), options: [tx("a"), tx("b"), tx("c")], answer, explanation: why ? tx(why) : undefined });

before(async () => {
  m = {
    client: await import("../src/server/db/client"),
    progress: await import("../src/server/progress"),
    review: await import("../src/server/review"),
  };
  const db = await m.client.getDb();
  const { schema } = m.client;
  await db.insert(schema.subjects).values([
    { id: "math", name: tx("Math"), description: tx(""), color: "indigo", icon: "calculator" },
    { id: "physics", name: tx("Physics"), description: tx(""), color: "sky", icon: "atom" },
  ]).run();
  for (const [id, subjectId] of [["math-3", "math"], ["physics-7", "physics"]]) {
    await db.insert(schema.courses).values({ id, subjectId, grade: Number(id.split("-")[1]), title: tx(id), description: tx(""), curriculumNotes: { armenia: tx(""), russia: tx("") }, hoursPerWeek: { armenia: 2, russia: 2 } }).run();
    await db.insert(schema.units).values({ id: `${id}-u1`, courseId: id, position: 1, title: tx("U1"), summary: tx("") }).run();
  }
  const lesson = (id: string, courseId: string, slug: string) =>
    db.insert(schema.lessons).values({ id, unitId: `${courseId}-u1`, courseId, position: 1, slug, title: tx(slug), objectives: { en: [], hy: [], ru: [] }, content: tx("Body"), quiz: [q(0, "because"), q(1), q(2), q(0)], status: "published" }).run();
  await lesson("math-3-tables", "math-3", "tables");
  await lesson("physics-7-speed", "physics-7", "speed");
  await db.insert(schema.users).values({ id: "u1", username: "ani", displayName: "Ani", passwordHash: "x" }).run();
});

after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("interleave takes one from each group in turn", () => {
  assert.deepEqual(m.review.interleave(["a1", "a2", "a3", "b1", "c1", "c2"], (x) => x[0]), ["a1", "b1", "c1", "a2", "c2", "a3"]);
});

test("nothing is ready right after a quiz; tomorrow the mistakes are, mixed across subjects", async () => {
  // Math: two wrong (#1, #3). Physics: one wrong (#0).
  await m.progress.recordQuizResult({ userId: "u1", lessonId: "math-3-tables", answers: [0, 0, 2, 1] });
  await m.progress.recordQuizResult({ userId: "u1", lessonId: "physics-7-speed", answers: [2, 1, 2, 0] });
  assert.equal((await m.review.getReviewQueue("u1")).length, 0);
  const summary = await m.review.getReviewSummary("u1");
  assert.equal(summary.cards, 8);
  assert.equal(summary.ready, 0);
  assert.equal(summary.mistakes, 3);

  const tomorrow = new Date(Date.now() + DAY);
  const queue = await m.review.getReviewQueue("u1", { now: tomorrow });
  assert.equal(queue.length, 3);
  assert.notEqual(queue[0].courseId, queue[1].courseId, "subjects are mixed");
  const first = queue.find((i) => i.itemId === "quiz:physics-7-speed#0")!;
  assert.equal(first.href, "/physics/7/speed");
  assert.equal(first.subjectId, "physics");
  assert.equal(first.question.answer, 0);
  assert.equal(first.question.explanation?.en, "because");
});

test("a review answer is checked on the server and moves the card", async () => {
  const later = new Date(Date.now() + DAY);
  const right = await m.review.answerReviewItem({ userId: "u1", itemId: "quiz:math-3-tables#1", choice: 1, now: later });
  assert.deepEqual(right && { correct: right.correct, answer: right.answer }, { correct: true, answer: 1 });
  assert.ok(right!.nextInDays >= 1);
  const wrong = await m.review.answerReviewItem({ userId: "u1", itemId: "quiz:math-3-tables#3", choice: 2, now: later });
  assert.equal(wrong?.correct, false);
  assert.equal(wrong?.nextInDays, 1);
  const queue = await m.review.getReviewQueue("u1", { now: later });
  assert.deepEqual(queue.map((i) => i.itemId).sort(), ["quiz:physics-7-speed#0"]);
  const s = await m.review.getReviewSummary("u1", later);
  assert.equal(s.mistakes, 2);
  assert.equal(s.daysThisWeek, 1);
});

test("unknown questions, wrong option numbers and other pupils' questions are refused", async () => {
  assert.equal(await m.review.answerReviewItem({ userId: "u1", itemId: "quiz:math-3-tables#9", choice: 0 }), null);
  assert.equal(await m.review.answerReviewItem({ userId: "u1", itemId: "quiz:math-3-tables#0", choice: 7 }), null);
  const db = await m.client.getDb();
  await db.insert(m.client.schema.users).values({ id: "u2", username: "aram", displayName: "Aram", passwordHash: "x" }).run();
  assert.equal(await m.review.answerReviewItem({ userId: "u2", itemId: "quiz:math-3-tables#0", choice: 0 }), null);
});

test("the mistake notebook lists wrong answers with the option chosen last", async () => {
  const notebook = await m.review.getMistakes("u1");
  const byId = new Map(notebook.map((n) => [n.itemId, n]));
  assert.deepEqual([...byId.keys()].sort(), ["quiz:math-3-tables#3", "quiz:physics-7-speed#0"]);
  assert.equal(byId.get("quiz:math-3-tables#3")!.lastChoice, 2);
  assert.equal(byId.get("quiz:physics-7-speed#0")!.lastChoice, 2);
  const practice = await m.review.getReviewQueue("u1", { mode: "mistakes" });
  assert.equal(practice.length, 2);
});

test("cards for questions that were removed are dropped", async () => {
  const db = await m.client.getDb();
  const { schema } = m.client;
  const { eq } = await import("drizzle-orm");
  await db.update(schema.lessons).set({ quiz: [q(0)] }).where(eq(schema.lessons.id, "physics-7-speed")).run();
  await m.review.getReviewQueue("u1", { now: new Date(Date.now() + 400 * DAY) });
  const left = await db.select({ itemId: schema.reviewCards.itemId }).from(schema.reviewCards).where(eq(schema.reviewCards.refId, "physics-7-speed")).all();
  assert.deepEqual(left.map((r) => r.itemId), ["quiz:physics-7-speed#0"]);
});

test("counts skip unpublished lessons, and their cards come back when it is published again", async () => {
  const db = await m.client.getDb();
  const { schema } = m.client;
  const { eq } = await import("drizzle-orm");
  const later = new Date(Date.now() + 400 * DAY);
  const counts = async () => {
    const s = await m.review.getReviewSummary("u1", later);
    const queue = await m.review.getReviewQueue("u1", { now: later, size: 100 });
    const mistakes = await m.review.getMistakes("u1");
    return { s, queue: queue.length, mistakes: mistakes.length };
  };
  const before = await counts();
  assert.equal(before.s.ready, before.queue);
  assert.equal(before.s.mistakes, before.mistakes);
  assert.ok(before.queue > 1);

  await db.update(schema.lessons).set({ status: "draft" }).where(eq(schema.lessons.id, "math-3-tables")).run();
  const hidden = await counts();
  assert.equal(hidden.s.ready, hidden.queue);
  assert.equal(hidden.s.mistakes, hidden.mistakes);
  assert.ok(hidden.queue < before.queue);
  const kept = await db.select({ itemId: schema.reviewCards.itemId }).from(schema.reviewCards).where(eq(schema.reviewCards.refId, "math-3-tables")).all();
  assert.ok(kept.length > 0, "unpublished cards are kept");

  await db.update(schema.lessons).set({ status: "published" }).where(eq(schema.lessons.id, "math-3-tables")).run();
  assert.equal((await counts()).s.ready, before.s.ready);
});
