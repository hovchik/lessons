import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

// A throw-away database; the client reads DATABASE_PATH when it is first imported.
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-test-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

type Modules = {
  client: typeof import("../src/server/db/client");
  progress: typeof import("../src/server/progress");
  learner: typeof import("../src/server/learner");
};
let m: Modules;
const DAY = 24 * 60 * 60 * 1000;

before(async () => {
  m = {
    client: await import("../src/server/db/client"),
    progress: await import("../src/server/progress"),
    learner: await import("../src/server/learner"),
  };
  const db = await m.client.getDb();
  const { schema } = m.client;
  const tx = (s: string) => ({ en: s, hy: s, ru: s });
  await db.insert(schema.subjects).values({ id: "math", name: tx("Math"), description: tx(""), color: "indigo", icon: "calculator" }).run();
  await db.insert(schema.courses).values({ id: "math-1", subjectId: "math", grade: 1, title: tx("Math 1"), description: tx(""), curriculumNotes: { armenia: tx(""), russia: tx("") }, hoursPerWeek: { armenia: 4, russia: 4 } }).run();
  await db.insert(schema.units).values({ id: "math-1-u1-numbers", courseId: "math-1", position: 1, title: tx("Numbers"), summary: tx("") }).run();
  const q = (answer: number) => ({ prompt: tx("?"), options: [tx("a"), tx("b"), tx("c")], answer });
  await db
    .insert(schema.lessons)
    .values({ id: "math-1-counting", unitId: "math-1-u1-numbers", courseId: "math-1", position: 1, slug: "counting", title: tx("Counting"), objectives: { en: [], hy: [], ru: [] }, content: tx("Body"), quiz: [q(0), q(1), q(2)], status: "published" })
    .run();
  await db
    .insert(schema.exams)
    .values({ id: "trial-math-1", kind: "trial", system: "both", subjectId: "math", grade: 1, title: tx("Trial"), description: tx(""), format: tx(""), questions: [q(0), q(0), q(0), q(0)] })
    .run();
  await db.insert(schema.users).values({ id: "u1", username: "ani", displayName: "Ani", passwordHash: "x" }).run();
});

after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("a finished quiz logs one answer per question and schedules each one", async () => {
  const res = await m.progress.recordQuizResult({ userId: "u1", lessonId: "math-1-counting", answers: [0, 0, 2] });
  assert.equal(res?.bestScore, 2);
  const stats = await m.learner.getMemoryStats("u1");
  assert.equal(stats.answers, 3);
  assert.equal(stats.cards, 3);
  assert.equal(stats.due, 0);
  // The wrong answer (question 2) is due tomorrow; the right ones later.
  const tomorrow = await m.learner.getDueCards("u1", new Date(Date.now() + DAY + 60_000));
  assert.deepEqual(tomorrow.map((c) => c.itemId), ["quiz:math-1-counting#1"]);
  assert.equal(tomorrow[0].lastCorrect, false);
  assert.equal(tomorrow[0].courseId, "math-1");
});

test("retaking the quiz updates the same cards instead of adding new ones", async () => {
  await m.progress.recordQuizResult({ userId: "u1", lessonId: "math-1-counting", answers: [0, 1, 2] });
  const stats = await m.learner.getMemoryStats("u1");
  assert.equal(stats.answers, 6);
  assert.equal(stats.cards, 3);
  const db = await m.client.getDb();
  const card = await db.select().from(m.client.schema.reviewCards).all();
  assert.ok(card.every((c) => c.lastCorrect));
});

test("an exam is scored on the server; blank answers are not put in memory", async () => {
  const result = await m.progress.recordExamResult({ userId: "u1", examId: "trial-math-1", answers: [0, 1, null, 0] });
  assert.equal(result?.score, 2);
  assert.equal(result?.total, 4);
  const stats = await m.learner.getMemoryStats("u1");
  assert.equal(stats.answers, 9);
  assert.equal(stats.cards, 6);
  const recent = await m.progress.getRecentAttempts("u1", 1);
  assert.equal(recent[0].kind, "exam");
  assert.equal(recent[0].examTitle?.en, "Trial");
  assert.equal(recent[0].courseId, "math-1");
});

test("overlapping submissions of the same question both count", async () => {
  const item = { itemId: "quiz:math-1-counting#0", source: "quiz" as const, refId: "math-1-counting", courseId: "math-1", correct: true, choice: 0 };
  const db = await m.client.getDb();
  const { reviewCards } = m.client.schema;
  const before = (await db.select().from(reviewCards).all()).find((c) => c.itemId === item.itemId)!;
  await Promise.all([m.learner.recordAnswers("u1", [item]), m.learner.recordAnswers("u1", [item]), m.learner.recordAnswers("u1", [{ ...item, correct: false }])]);
  const after = (await db.select().from(reviewCards).all()).find((c) => c.itemId === item.itemId)!;
  assert.equal(after.reps, before.reps + 3);
  assert.equal((await m.learner.getMemoryStats("u1")).answers, 12);
});

test("answers that do not match the quiz or exam are rejected and nothing is logged", async () => {
  assert.equal(await m.progress.recordQuizResult({ userId: "u1", lessonId: "math-1-counting", answers: [0] }), null);
  assert.equal(await m.progress.recordExamResult({ userId: "u1", examId: "trial-math-1", answers: [0, 0] }), null);
  assert.equal(await m.progress.recordExamResult({ userId: "u1", examId: "missing", answers: [0] }), null);
  assert.equal((await m.learner.getMemoryStats("u1")).answers, 12);
});
