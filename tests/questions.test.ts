import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  answerText,
  displayForm,
  displayOrder,
  gradeQuestion,
  guessCount,
  isComplete,
  isRight,
  localKey,
  localShown,
  parseNumber,
  partsRight,
  responseText,
  validResponse,
} from "../src/lib/questions";
import { gap, match, num, order, q } from "../src/content/types";
import { questionProblems } from "../src/content/questions/validate";
import { QUESTIONS } from "../src/content/questions";
import { QuizQuestionSchema } from "../src/server/api-schemas";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-questions-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");
process.env.ADMIN_SESSION_SECRET ??= "test-secret";

const tx = (en: string, hy = en, ru = en) => ({ en, hy, ru });
const en = (x: { en: string }) => x.en;

const steps = order(tx("Order the steps"), [tx("Wash"), tx("Cut"), tx("Cook"), tx("Eat")]);
const capitals = match(tx("Match"), [
  [tx("Armenia"), tx("Yerevan")],
  [tx("Georgia"), tx("Tbilisi")],
  [tx("France"), tx("Paris")],
]);
const speed = num(tx("Speed?"), 2.5, { unit: tx("m/s", "մ/վ", "м/с"), tolerance: 0.05 });
const verb = gap(tx("Fill in"), tx("She ___ a pupil and he ___ a teacher.", "Նա ___ է", "Она ___ и он ___"), [tx("is|'s", "աշակերտ", "ученица"), tx("is|'s", "ուսուցիչ", "учитель")]);
const verbHy = gap(tx("Fill in"), tx("She ___ a pupil and he ___ a teacher.", "Նա ___ է, նա ___ է։", "Она ___, он ___."), [tx("is|'s", "աշակերտ", "ученица"), tx("is|'s", "ուսուցիչ", "учитель")]);
const pick = q(tx("2 + 2"), [tx("3"), tx("4")], 1);

test("order and match items are mixed the same way every time, never in the answer order", () => {
  for (const seed of ["quiz:a#0", "quiz:b#4", "x"]) {
    for (const n of [2, 3, 4, 6]) {
      const p = displayOrder(seed, n);
      assert.deepEqual([...p].sort(), Array.from({ length: n }, (_, i) => i));
      assert.ok(p.some((x, i) => x !== i), `${seed}/${n} is mixed`);
      assert.deepEqual(displayOrder(seed, n), p);
    }
  }
  const { shown, key } = displayForm(steps, "quiz:l#6");
  assert.equal(shown.kind, "order");
  if (shown.kind !== "order" || key.kind !== "order") return;
  // Putting the shown items back in the written order is the answer.
  const back = ["Wash", "Cut", "Cook", "Eat"].map((w) => shown.items.findIndex((it) => it.en === w));
  assert.deepEqual(key.answer, back);
  assert.ok(gradeQuestion(steps, "quiz:l#6", back));
  assert.ok(!gradeQuestion(steps, "quiz:l#6", shown.items.map((_, i) => i)), "the order as shown is wrong");
  assert.equal(answerText(localShown(shown, en), localKey(key, en), "en"), "Wash → Cut → Cook → Eat");
  assert.deepEqual(partsRight(key, [back[0], back[1], back[3], back[2]]), [true, true, false, false]);
});

test("match answers name the shown right item for each left one", () => {
  const { shown, key } = displayForm(capitals, "quiz:geo#2");
  if (shown.kind !== "match" || key.kind !== "match") return assert.fail("match");
  const answer = ["Yerevan", "Tbilisi", "Paris"].map((c) => shown.right.findIndex((r) => r.en === c));
  assert.deepEqual(key.answer, answer);
  assert.ok(isRight(key, answer));
  assert.ok(!isRight(key, [answer[1], answer[0], answer[2]]));
  assert.equal(isComplete(shown, [answer[0], -1, answer[2]]), false);
  assert.equal(responseText(localShown(shown, en), answer), "Armenia — Yerevan; Georgia — Tbilisi; France — Paris");
  assert.equal(guessCount(shown), 6);
});

test("typed numbers accept a decimal comma, spaces and a rounding tolerance", () => {
  assert.equal(parseNumber("2,5"), 2.5);
  assert.equal(parseNumber(" 2.5 "), 2.5);
  assert.equal(parseNumber("1 000"), 1000);
  assert.equal(parseNumber("1,000.5"), 1000.5);
  assert.equal(parseNumber("−3"), -3);
  assert.ok(Number.isNaN(parseNumber("2.5 m")));
  assert.ok(Number.isNaN(parseNumber("")));
  const { shown, key } = displayForm(speed, "quiz:p#0");
  for (const r of ["2.5", "2,5", "2.54", "2.46"]) assert.ok(isRight(key, r), r);
  for (const r of ["2.6", "25", "two", ""]) assert.ok(!isRight(key, r), r);
  assert.equal(guessCount(shown), null);
  assert.equal(answerText(localShown(shown, (x) => x.ru), localKey(key, (x) => x.ru), "ru"), "2,5 м/с");
  assert.ok(validResponse(shown, "2,5"));
  assert.ok(!validResponse(shown, 2.5), "a number question takes the typed text");
  assert.ok(isRight(displayForm(num(tx("x"), 0.3), "s").key, "0.3"), "no float noise");
});

test("gap answers ignore case, spaces and end punctuation, and accept any language", () => {
  const { shown, key } = displayForm(verb, "quiz:e#1");
  assert.ok(isRight(key, ["is", "'s"]));
  assert.ok(isRight(key, ["  IS ", "is."]));
  assert.ok(isRight(key, ["’s", "is"]), "a curly apostrophe");
  assert.ok(isRight(key, ["աշակերտ", "Учитель"]));
  assert.ok(!isRight(key, ["are", "is"]));
  assert.ok(!isRight(key, ["is"]), "every gap");
  assert.deepEqual(partsRight(key, ["are", "is"]), [false, true]);
  assert.equal(answerText(localShown(shown, en), localKey(key, en), "en"), "She is a pupil and he is a teacher.");
  assert.equal(isComplete(shown, ["is", " "]), false);
  assert.ok(isRight(displayForm(gap(tx("x"), tx("___"), [tx("ёлка", "ёлка", "ёлка")]), "s").key, ["елка"]), "ё and е are the same");
});

test("answer shapes are checked before anything is scored", () => {
  const forms = [pick, speed, verb, steps, capitals].map((x, i) => displayForm(x, `s${i}`).shown);
  assert.deepEqual(
    forms.map((f) => validResponse(f, 1)),
    [true, false, false, false, false],
  );
  assert.ok(!validResponse(forms[0], 2), "no such option");
  assert.ok(!validResponse(forms[2], ["is"]), "one text per gap");
  assert.ok(!validResponse(forms[3], [0, 0, 1, 2]), "an order uses each item once");
  assert.ok(validResponse(forms[4], [0, -1, 2]), "a pair may be left open");
});

test("content check catches broken questions", () => {
  assert.deepEqual(questionProblems(verbHy, ["en", "hy", "ru"]), []);
  assert.ok(questionProblems(verb, ["hy"]).some((p) => p.includes("hy text has 1")));
  assert.ok(questionProblems(order(tx("x"), [tx("a"), tx("b")]), ["en"]).includes("order needs 3 to 8 items"));
  assert.ok(questionProblems(match(tx("x"), [[tx("a"), tx("1")], [tx("b"), tx("1")], [tx("c"), tx("2")]]), ["en"]).some((p) => p.includes('duplicate en right "1"')));
  assert.ok(questionProblems(num(tx("x"), NaN), ["en"]).includes("answer is not a number"));
  assert.deepEqual(questionProblems(speed, ["en", "hy", "ru"]), []);
});

test("the admin editor's quiz schema takes every kind and keeps it whole", () => {
  const all = [pick, ...Object.values(QUESTIONS).flatMap((g) => Object.values(g).flatMap((m) => Object.values(m).flat()))];
  for (const qq of all) {
    const sent = JSON.parse(JSON.stringify(qq));
    assert.deepEqual(QuizQuestionSchema.parse(sent), sent);
  }
  assert.equal(QuizQuestionSchema.safeParse({ kind: "order", prompt: tx("x"), items: [tx("a")] }).success, false);
  assert.equal(QuizQuestionSchema.safeParse({ kind: "number", prompt: tx("x"), options: [] }).success, false);
});

type Modules = {
  client: typeof import("../src/server/db/client");
  progress: typeof import("../src/server/progress");
  review: typeof import("../src/server/review");
  mastery: typeof import("../src/server/mastery");
  practice: typeof import("../src/server/practice");
};
let m: Modules;
const quiz = [pick, speed, verbHy, steps, capitals];
const form = (i: number) => displayForm(quiz[i], `quiz:mix#${i}`);
const rightAnswers = () => {
  const o = form(3).key;
  const mm = form(4).key;
  return [1, "2,5", ["is", "is"], o.kind === "order" ? o.answer : [], mm.kind === "match" ? mm.answer : []];
};

before(async () => {
  m = {
    client: await import("../src/server/db/client"),
    progress: await import("../src/server/progress"),
    review: await import("../src/server/review"),
    mastery: await import("../src/server/mastery"),
    practice: await import("../src/server/practice"),
  };
  const db = await m.client.getDb();
  const { schema } = m.client;
  await db.insert(schema.subjects).values({ id: "physics", name: tx("Physics"), description: tx(""), color: "indigo", icon: "atom" }).run();
  await db.insert(schema.courses).values({ id: "physics-7", subjectId: "physics", grade: 7, title: tx("Physics 7"), description: tx(""), curriculumNotes: { armenia: tx(""), russia: tx("") }, hoursPerWeek: { armenia: 2, russia: 2 } }).run();
  await db.insert(schema.units).values({ id: "physics-7-u1", courseId: "physics-7", position: 1, title: tx("Motion"), summary: tx("") }).run();
  await db.insert(schema.lessons).values({ id: "mix", unitId: "physics-7-u1", courseId: "physics-7", position: 1, slug: "mix", title: tx("Mix"), objectives: { en: [], hy: [], ru: [] }, content: tx("Body"), quiz, status: "published" }).run();
  await db.insert(schema.skills).values({ id: "physics-7.u1", courseId: "physics-7", unitId: "physics-7-u1", position: 1, title: tx("Motion") }).run();
  await db.insert(schema.lessonSkills).values({ lessonId: "mix", skillId: "physics-7.u1" }).run();
  await db.insert(schema.users).values({ id: "u1", username: "ani", displayName: "Ani", passwordHash: "x" }).run();
});

after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("a quiz of every kind is scored on the server and each answer kept", async () => {
  const answers = rightAnswers();
  answers[1] = "3"; // wrong number
  const bad = await m.progress.recordQuizResult({ userId: "u1", lessonId: "mix", answers: [1, 3, ["is", "is"], answers[3], answers[4]] });
  assert.equal(bad, null, "a number question takes typed text");
  const r = await m.progress.recordQuizResult({ userId: "u1", lessonId: "mix", answers, retries: [null, "2.5", null, null, null] });
  assert.ok(r);
  const db = await m.client.getDb();
  const { schema } = m.client;
  const ev = await db.select().from(schema.answerEvents).all();
  const first = ev.filter((e) => !e.hintUsed).sort((a, b) => a.itemId.localeCompare(b.itemId));
  assert.deepEqual(first.map((e) => e.correct), [true, false, true, true, true]);
  assert.deepEqual(first.map((e) => e.choice), [1, null, null, null, null]);
  assert.deepEqual(first[1].response, "3");
  assert.deepEqual(first[2].response, ["is", "is"]);
  const retry = ev.find((e) => e.hintUsed)!;
  assert.deepEqual([retry.itemId, retry.correct, retry.response], ["quiz:mix#1", true, "2.5"]);
  const attempt = await db.select().from(schema.attempts).get();
  assert.equal(attempt?.score, 4);
});

test("review, unit checks and practice take every kind", async () => {
  const ans = rightAnswers();
  // Daily Review: the number question was missed, so it is in the notebook.
  const notebook = await m.review.getMistakes("u1");
  assert.deepEqual(notebook.map((n) => [n.itemId, n.lastResponse]), [["quiz:mix#1", "3"]]);
  assert.equal(notebook[0].shown.kind, "number");
  assert.equal((await m.review.answerItem({ userId: "u1", itemId: "quiz:mix#1", response: "2,5" }))?.correct, true);
  assert.equal(await m.review.answerItem({ userId: "u1", itemId: "quiz:mix#3", response: [0, 0, 0, 0] }), null, "not an order");

  // Unit check: the questions are shown without their answers, and each kind is scored.
  const check = (await m.mastery.buildUnitCheck("u1", "physics-7.u1"))!;
  assert.equal(check.questions.length, 5);
  for (const cq of check.questions) assert.ok(!("key" in cq) && !("answer" in cq.shown) && !("pairs" in cq.shown) && !("gaps" in cq.shown && Array.isArray(cq.shown.gaps)));
  const byId = (id: string) => ans[Number(id.split("#")[1])];
  const res = (await m.mastery.recordUnitCheck("u1", "physics-7.u1", check.questions.map((cq) => ({ itemId: cq.itemId, response: byId(cq.itemId) })), check.token))!;
  assert.equal(res.score, 5);
  const wrongOrder = await m.mastery.recordUnitCheck("u1", "physics-7.u1", check.questions.map((cq) => ({ itemId: cq.itemId, response: cq.itemId.endsWith("#3") ? [0, 1, 2] : byId(cq.itemId) })), check.token);
  assert.equal(wrongOrder, null, "an order must use every item");

  // Practice: the key comes back with the feedback.
  const start = (await m.practice.nextPracticeQuestion("u1", "physics-7.u1"))!;
  const p = (await m.practice.answerPractice({ userId: "u1", skillId: "physics-7.u1", itemId: start.question!.itemId, response: byId(start.question!.itemId) }))!;
  assert.equal(p.correct, true);
  assert.equal(p.key.kind, start.question!.shown.kind);
});

test("a typed answer cannot be guessed, so it counts for more in the ratings", async () => {
  const db = await m.client.getDb();
  const { schema } = m.client;
  const items = new Map((await db.select().from(schema.itemRatings).all()).map((r) => [r.itemId, r]));
  // Both were answered right first time by the same pupil; the two-option one moved less.
  assert.ok(Math.abs(items.get("quiz:mix#0")!.difficulty) < Math.abs(items.get("quiz:mix#2")!.difficulty));
});
