import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { quizPick } from "./shown";
import { answerText, leaks, lessonForPrompt, rightText, secrets, tutorPrompt } from "../src/lib/tutor";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-tutor-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

test("a hint that names the right answer is caught, a whole word at a time", () => {
  assert.equal(leaks("The gas plants give off is Oxygen.", ["oxygen"]), true);
  assert.equal(leaks("Think about which gas you breathe in.", ["oxygen"]), false);
  assert.equal(leaks("Is the solution acidic?", ["acid"]), false, "a longer word is not the answer");
  assert.equal(leaks("Divide 150 by 2 to get 75.", ["75"]), true);
  assert.equal(leaks("Divide 150 by 2.", ["75"]), false);
  assert.equal(leaks("Ответ: 2,7 г/см³", ["2.7"]), true, "a decimal comma is the same number");
  assert.equal(leaks("Մտածիր, որտեղ է ծնվել աշուղը", ["Թիֆլիսում"]), false);
  assert.equal(leaks("Նա ծնվել է «Թիֆլիսում»", ["Թիֆլիսում"]), true);
  assert.equal(leaks("Look at the word that names a pair of things", ["The Sun and the Moon"]), false);
  assert.equal(leaks("It is the sun and the moon!", ["The Sun and the Moon"]), true, "a phrase answer, case and punctuation aside");
  assert.equal(leaks("I think a is the best start", ["a"]), false, "a one-letter answer can't be told from a word");
});

test("the pupil's answer and the right one are put in words as they were shown", () => {
  const choice = { kind: "choice" as const, prompt: "Which gas?", options: ["nitrogen", "oxygen", "argon"] };
  assert.equal(answerText(choice, 0), "nitrogen");
  assert.equal(rightText(choice, { kind: "choice", answer: 1 }), "oxygen");
  assert.deepEqual(secrets(choice, { kind: "choice", answer: 1 }), ["oxygen"]);
  const num = { kind: "number" as const, prompt: "Speed?", unit: "km/h" };
  assert.equal(answerText(num, "70"), "70 km/h");
  assert.equal(rightText(num, { kind: "number", answer: 75, tolerance: 0 }), "75 km/h");
  const gap = { kind: "gap" as const, prompt: "Fill in", text: "Water boils at ___ °C and freezes at ___ °C.", gaps: 2 };
  assert.equal(answerText(gap, ["90", "0"]), "Water boils at [90] °C and freezes at [0] °C.");
  const order = { kind: "order" as const, prompt: "Order", items: ["b", "c", "a"] };
  assert.equal(rightText(order, { kind: "order", answer: [2, 0, 1] }), "a → b → c");
});

test("the prompt says which language, keeps the answer for the tutor only, and asks for a bigger step on level 2", () => {
  const base = {
    mode: "hint" as const,
    level: 1 as const,
    locale: "hy",
    grade: 7,
    subject: "Physics",
    lessonTitle: "Speed",
    lesson: lessonForPrompt("Speed is distance over time.\n\n~~~sim\nwidget: x\n~~~\n\n![a car](car.png)"),
    shown: { kind: "number" as const, prompt: "A car covers 150 km in 2 h. Speed?", unit: "km/h" },
    answer: "300 km/h",
    right: "75 km/h",
  };
  const p1 = tutorPrompt(base);
  assert.match(p1, /Write in Armenian/);
  assert.match(p1, /never reveal it\): 75 km\/h/);
  assert.match(p1, /level 1 HINT/);
  assert.doesNotMatch(p1, /widget|car\.png/, "widgets and pictures are left out of the lesson text");
  const p2 = tutorPrompt({ ...base, level: 2, previous: "Speed is distance divided by time." });
  assert.match(p2, /level 2 HINT.*Speed is distance divided by time/);
  assert.match(tutorPrompt({ ...base, mode: "why" }), /already shown to the pupil[\s\S]*Explain WHY/);
});

type Modules = { client: typeof import("../src/server/db/client"); tutor: typeof import("../src/server/tutor") };
let m: Modules;
const tx = (s: string) => ({ en: s, hy: `${s} (hy)`, ru: `${s} (ru)` });

before(async () => {
  m = { client: await import("../src/server/db/client"), tutor: await import("../src/server/tutor") };
  const db = await m.client.getDb();
  const { schema } = m.client;
  await db.insert(schema.subjects).values({ id: "science", name: tx("Science"), description: tx(""), color: "emerald", icon: "leaf" }).run();
  await db.insert(schema.courses).values({ id: "science-5", subjectId: "science", grade: 5, title: tx("Science 5"), description: tx(""), curriculumNotes: { armenia: tx(""), russia: tx("") }, hoursPerWeek: { armenia: 2, russia: 2 } }).run();
  await db.insert(schema.units).values({ id: "science-5-u1", courseId: "science-5", position: 1, title: tx("Plants"), summary: tx("") }).run();
  const quiz = [{ prompt: tx("Which gas do leaves give off?"), options: [tx("oxygen"), tx("nitrogen"), tx("argon")], answer: 0 }];
  await db.insert(schema.lessons).values({ id: "photo", unitId: "science-5-u1", courseId: "science-5", position: 1, slug: "photo", title: tx("Photosynthesis"), objectives: { en: [], hy: [], ru: [] }, content: tx("Leaves give off **oxygen** in sunlight."), quiz, status: "published" }).run();
});

after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("a hint is asked once per wrong answer, a leaking hint is replaced, and level 2 sees level 1", async () => {
  const wrong = quizPick("photo", 0, 1, 3); // the shown position of "nitrogen"
  const calls: string[] = [];
  const replies = ["The answer is oxygen.", "Think of the gas you breathe in."];
  const call = async (_system: string, user: string) => {
    calls.push(user);
    return replies.shift() ?? "Second hint";
  };
  const ask = (level: 1 | 2, userId = "u1") => m.tutor.askTutor({ userId, itemId: "quiz:photo#0", mode: "hint", level, locale: "en", response: wrong }, call);

  assert.deepEqual(await ask(1), { text: "Think of the gas you breathe in." });
  assert.equal(calls.length, 2, "the first hint named the answer, so it was asked again");
  assert.match(calls[0], /The pupil answered: nitrogen/);
  assert.match(calls[0], /Leaves give off \*\*oxygen\*\*/, "the lesson text goes with the question");
  assert.match(calls[1], /named the right answer/);

  assert.deepEqual(await ask(1, "u2"), { text: "Think of the gas you breathe in." });
  assert.equal(calls.length, 2, "the same wrong answer is answered from the cache, for any pupil");

  assert.deepEqual(await ask(2), { text: "Second hint" });
  assert.match(calls[2], /level 2 HINT.*Think of the gas you breathe in/);
});

test("a hint that still names the answer is dropped, and unknown items are refused", async () => {
  const wrong = quizPick("photo", 0, 2, 3);
  const leaky = async () => "It is Oxygen.";
  assert.deepEqual(await m.tutor.askTutor({ userId: "u1", itemId: "quiz:photo#0", mode: "hint", level: 1, locale: "en", response: wrong }, leaky), { error: "failed" });
  // Explaining a shown answer may name it.
  assert.deepEqual(await m.tutor.askTutor({ userId: "u1", itemId: "quiz:photo#0", mode: "why", level: 1, locale: "ru", response: wrong }, leaky), { text: "It is Oxygen." });
  assert.deepEqual(await m.tutor.askTutor({ userId: "u1", itemId: "quiz:nope#0", mode: "hint", level: 1, locale: "en", response: 0 }, leaky), { error: "unknown" });
});
