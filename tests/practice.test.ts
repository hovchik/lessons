import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { eloUpdate, pickNext, predict, priorAbility, priorDifficulty, stretchOf } from "../src/lib/elo";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-practice-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

type Modules = {
  client: typeof import("../src/server/db/client");
  progress: typeof import("../src/server/progress");
  ability: typeof import("../src/server/ability");
  practice: typeof import("../src/server/practice");
};
let m: Modules;
const tx = (s: string) => ({ en: s, hy: s, ru: s });
const q = (answer: number) => ({ prompt: tx(`q${answer}`), options: [tx("a"), tx("b"), tx("c"), tx("d")], answer, explanation: tx("why") });
const quiz = [q(0), q(1), q(2), q(3)];
const right = [0, 1, 2, 3];
// In these quizzes the right option of question #i is i.
const rightChoice = (itemId: string) => Number(itemId.split("#")[1]);

before(async () => {
  m = {
    client: await import("../src/server/db/client"),
    progress: await import("../src/server/progress"),
    ability: await import("../src/server/ability"),
    practice: await import("../src/server/practice"),
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

test("the rating model", () => {
  assert.equal(predict(0, 0), 0.5);
  assert.equal(predict(0, 0, 4), 0.625, "a quarter of the rest is a lucky guess");
  assert.ok(predict(-10, 0, 2) > 0.49, "never below the guessing chance");
  const win = eloUpdate({ ability: 0, difficulty: 0, abilityN: 0, difficultyN: 0, correct: true, options: 4 });
  assert.ok(win.ability > 0 && win.difficulty < 0);
  const loss = eloUpdate({ ability: 0, difficulty: 0, abilityN: 0, difficultyN: 0, correct: false, options: 4 });
  assert.ok(loss.ability < 0 && loss.difficulty > 0);
  assert.ok(Math.abs(loss.ability) > Math.abs(win.ability), "a miss says more than a right answer that could be a guess");
  const settled = eloUpdate({ ability: 0, difficulty: 0, abilityN: 100, difficultyN: 100, correct: true, options: 4 });
  assert.ok(settled.ability < win.ability / 3, "steps shrink as a rating settles");
  assert.deepEqual(priorDifficulty(0, 0, 4), { difficulty: 0, answers: 0 });
  assert.ok(priorDifficulty(2, 10, 4).difficulty > 1, "mostly missed: hard");
  assert.ok(priorDifficulty(10, 10, 4).difficulty < -1, "always right: easy");
  assert.equal(priorDifficulty(50, 60, 4).answers, 20);
  assert.ok(priorAbility(9, 10).ability > 1);
  assert.equal(priorAbility(0, 0).ability, 0);
  assert.deepEqual([0.9, 0.7, 0.4].map(stretchOf), ["easy", "right", "hard"]);
});

test("the picker aims for three in four and backs off after two misses", () => {
  const c = (itemId: string, p: number, extra: Partial<{ lastWrong: boolean; recent: boolean }> = {}) => ({ itemId, p, lastWrong: false, recent: false, ...extra });
  const pool = [c("easy", 0.95), c("fit", 0.73), c("hard", 0.4)];
  assert.equal(pickNext(pool)?.itemId, "fit");
  assert.equal(pickNext(pool, { struggling: true })?.itemId, "easy");
  assert.equal(pickNext([c("fit", 0.75, { recent: true }), c("ok", 0.6)])?.itemId, "ok", "just answered: others first");
  assert.equal(pickNext([c("x", 0.8), c("y", 0.7, { lastWrong: true })])?.itemId, "y", "a mistake gets a small pull forward");
  assert.equal(pickNext([]), null);
});

test("quiz answers move the pupil's ability and the questions' difficulty", async () => {
  const before = await m.ability.getSkillRatings("u1", ["math-3.u1"]);
  assert.deepEqual(before.get("math-3.u1"), { ability: 0, answers: 0, stored: false });
  // Right first tries on two questions, wrong on two, with second tries that must not count.
  await m.progress.recordQuizResult({ userId: "u1", lessonId: "a", answers: [0, 1, 0, 0], retries: [null, null, 2, 3] });
  const db = await m.client.getDb();
  const { schema } = m.client;
  const skill = await db.select().from(schema.skillRatings).all();
  assert.equal(skill.length, 1);
  assert.equal(skill[0].answers, 4, "second tries do not count");
  const items = new Map((await db.select().from(schema.itemRatings).all()).map((r) => [r.itemId, r]));
  assert.equal(items.size, 4);
  assert.ok(items.get("quiz:a#0")!.difficulty < 0 && items.get("quiz:a#2")!.difficulty > 0);
  assert.ok(items.get("quiz:a#0")!.difficulty < items.get("quiz:a#3")!.difficulty);

  // Two pupils at once both count.
  await Promise.all([m.progress.recordQuizResult({ userId: "u2", lessonId: "a", answers: right }), m.progress.recordQuizResult({ userId: "u3", lessonId: "a", answers: right })]);
  const a0 = await db.select().from(schema.itemRatings).all().then((rs) => rs.find((r) => r.itemId === "quiz:a#0")!);
  assert.equal(a0.answers, 3);
});

test("a question never rated starts from everyone's earlier answers", async () => {
  const db = await m.client.getDb();
  const { schema } = m.client;
  // Answers logged before ratings existed: lesson d's first question was mostly missed.
  await db.insert(schema.answerEvents).values(
    Array.from({ length: 10 }, (_, k) => ({ id: `old${k}`, userId: "u3", itemId: "quiz:d#0", source: "quiz" as const, refId: "d", courseId: "math-3", correct: k < 2 })),
  ).run();
  const r = (await m.ability.getItemRatings([{ itemId: "quiz:d#0", options: 4 }, { itemId: "quiz:d#1", options: 4 }]));
  assert.ok(r.get("quiz:d#0")!.difficulty > 1);
  assert.equal(r.get("quiz:d#0")!.answers, 10);
  assert.equal(r.get("quiz:d#1")!.difficulty, 0);
});

test("a pupil's first rating starts from what they already hold in memory", async () => {
  const db = await m.client.getDb();
  const { schema } = m.client;
  await db.delete(schema.skillRatings).run();
  // u2 got all four of lesson a right.
  const r = await m.ability.getSkillRatings("u2", ["math-3.u1", "math-3.u2"]);
  assert.ok(r.get("math-3.u1")!.ability > 1);
  assert.equal(r.get("math-3.u2")!.ability, 0);
});

test("practice picks questions for the pupil and hides the answer until it is given", async () => {
  const start = await m.practice.nextPracticeQuestion("u1", "math-3.u1");
  assert.ok(start?.question);
  assert.equal(start.total, 10);
  assert.ok(!("answer" in start.question) && !("explanation" in start.question));
  assert.ok(start.readiness > 0 && start.readiness < 100);
  assert.equal(await m.practice.nextPracticeQuestion("u1", "nope.u1"), null);

  assert.equal(await m.practice.answerPractice({ userId: "u1", skillId: "math-3.u1", itemId: "quiz:d#0", choice: 0 }), null, "a question from another unit");
  assert.equal(await m.practice.answerPractice({ userId: "u1", skillId: "math-3.u1", itemId: start.question.itemId, choice: 9 }), null, "an option that does not exist");

  const r = await m.practice.answerPractice({ userId: "u1", skillId: "math-3.u1", itemId: start.question.itemId, choice: rightChoice(start.question.itemId) });
  assert.ok(r);
  assert.equal(r.correct, true);
  assert.equal(r.answer, rightChoice(start.question.itemId));
  assert.ok(r.next && r.next.itemId !== start.question.itemId);
  assert.equal(r.level, null, "the round goes on");
  assert.match(r.lessonHref, /^\/math\/3\/[abc]$/);
  const db = await m.client.getDb();
  const { schema } = m.client;
  const { and, eq } = await import("drizzle-orm");
  const ev = await db.select().from(schema.answerEvents).where(and(eq(schema.answerEvents.userId, "u1"), eq(schema.answerEvents.source, "practice"))).all();
  assert.equal(ev.length, 1);
});

test("after two misses the easiest question comes next", async () => {
  const seen: string[] = [];
  const results: boolean[] = [];
  const abilityBefore = (await m.ability.getSkillRatings("u3", ["math-3.u1"])).get("math-3.u1")!.ability;
  let q = (await m.practice.nextPracticeQuestion("u3", "math-3.u1"))!.question!;
  for (let k = 0; k < 2; k++) {
    const r = (await m.practice.answerPractice({ userId: "u3", skillId: "math-3.u1", itemId: q.itemId, choice: (rightChoice(q.itemId) + 1) % 4, seen, results }))!;
    seen.push(q.itemId);
    results.push(r.correct);
    q = r.next!;
  }
  const { items, ability } = await (async () => {
    const all = ["a", "b", "c"].flatMap((l) => [0, 1, 2, 3].map((i) => `quiz:${l}#${i}`)).filter((id) => !seen.includes(id) && !id.startsWith("quiz:a#")); // u3 met lesson a minutes ago
    const items = await m.ability.getItemRatings(all.map((itemId) => ({ itemId, options: 4 })));
    const ability = (await m.ability.getSkillRatings("u3", ["math-3.u1"])).get("math-3.u1")!.ability;
    return { items, ability };
  })();
  const easiest = Math.min(...[...items.values()].map((i) => i.difficulty));
  assert.ok(Math.abs(items.get(q.itemId)!.difficulty - easiest) < 1e-9, "the easiest question left");
  assert.ok(ability < abilityBefore - 0.5, "two misses lower the ability");
});

test("a round ends after ten questions with the level and readiness", async () => {
  const seen: string[] = [];
  const results: boolean[] = [];
  const start = (await m.practice.nextPracticeQuestion("u2", "math-3.u1"))!;
  let q = start.question;
  let last = null as Awaited<ReturnType<typeof m.practice.answerPractice>>;
  while (q) {
    last = await m.practice.answerPractice({ userId: "u2", skillId: "math-3.u1", itemId: q.itemId, choice: rightChoice(q.itemId), seen, results });
    assert.ok(last);
    assert.ok(!seen.includes(q.itemId), "no question twice in a round");
    seen.push(q.itemId);
    results.push(last.correct);
    q = last.next;
  }
  assert.equal(seen.length, 10);
  assert.ok(last?.level && last.level !== "none");
  assert.ok(last!.readiness > start.readiness, "ten right answers raise the readiness");

  // A small unit ends when its questions run out.
  const small: string[] = [];
  let s = (await m.practice.nextPracticeQuestion("u2", "math-3.u2"))!.question;
  let end = null as Awaited<ReturnType<typeof m.practice.answerPractice>>;
  while (s) {
    end = await m.practice.answerPractice({ userId: "u2", skillId: "math-3.u2", itemId: s.itemId, choice: 0, seen: small });
    small.push(s.itemId);
    s = end!.next;
  }
  assert.equal(small.length, 4);
  assert.ok(end?.level);
});
