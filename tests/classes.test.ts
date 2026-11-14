import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-classes-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

type Modules = { client: typeof import("../src/server/db/client"); classes: typeof import("../src/server/classes"); learner: typeof import("../src/server/learner") };
let m: Modules;
const tx = (s: string) => ({ en: s, hy: s, ru: s });

before(async () => {
  m = { client: await import("../src/server/db/client"), classes: await import("../src/server/classes"), learner: await import("../src/server/learner") };
  const db = await m.client.getDb();
  const { schema } = m.client;
  await db.insert(schema.subjects).values({ id: "math", name: tx("Math"), description: tx(""), color: "indigo", icon: "calculator" }).run();
  await db.insert(schema.courses).values({ id: "math-3", subjectId: "math", grade: 3, title: tx("Math 3"), description: tx(""), curriculumNotes: { armenia: tx(""), russia: tx("") }, hoursPerWeek: { armenia: 4, russia: 4 } }).run();
  await db.insert(schema.units).values({ id: "math-3-u1", courseId: "math-3", position: 1, title: tx("Tables"), summary: tx("") }).run();
  const quiz = [0, 1, 2].map((i) => ({ prompt: tx(`What is ${i} x 2?`), options: [tx(String(i * 2)), tx("7"), tx("9")], answer: 0 }));
  await db.insert(schema.lessons).values({ id: "math-3-times", unitId: "math-3-u1", courseId: "math-3", position: 1, slug: "times", title: tx("Times"), objectives: { en: [], hy: [], ru: [] }, content: tx("Body"), quiz, status: "published" }).run();
  await db.insert(schema.users).values([
    { id: "teacher", username: "teacher", displayName: "Ms Teacher", passwordHash: "x" },
    { id: "ani", username: "ani", displayName: "Ani", passwordHash: "x", grade: 3 },
    { id: "aram", username: "aram", displayName: "Aram", passwordHash: "x", grade: 3 },
    { id: "other", username: "other", displayName: "Other", passwordHash: "x" },
  ]).run();
});

after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("a class is joined by its code, typed any old way, and only once", async () => {
  const res = await m.classes.createClass("teacher", "  3A   Monday ");
  const c = "class" in res ? res.class : undefined;
  if (!c) throw new Error("class not created");
  assert.equal(c.name, "3A Monday");
  assert.match(c.code, /^[A-HJKMNP-Z2-9]{6}$/);
  const typed = `${c.code.slice(0, 3).toLowerCase()} ${c.code.slice(3)}`;
  assert.deepEqual(await m.classes.joinClass("ani", typed), { class: { id: c.id, name: "3A Monday" } });
  assert.deepEqual(await m.classes.joinClass("ani", c.code), { class: { id: c.id, name: "3A Monday" } }, "joining again changes nothing");
  await m.classes.joinClass("aram", c.code);
  assert.deepEqual(await m.classes.joinClass("teacher", c.code), { error: "own" });
  assert.deepEqual(await m.classes.joinClass("ani", "ZZZZZZ"), { error: "code" });
  assert.deepEqual((await m.classes.ownClasses("teacher")).map((x) => Number(x.members)), [2]);
  assert.deepEqual((await m.classes.joinedClasses("ani")).map((x) => x.teacher), ["Ms Teacher"]);
});

test("only the owner sees a pupil, and only while the pupil is in the class", async () => {
  const c = (await m.classes.ownClasses("teacher"))[0]!;
  assert.equal(await m.classes.canSeePupil("teacher", c.id, "ani"), true);
  assert.equal(await m.classes.canSeePupil("other", c.id, "ani"), false, "someone else's class");
  assert.equal(await m.classes.canSeePupil("teacher", c.id, "other"), false, "not a member");
  assert.equal(await m.classes.ownedClass("other", c.id), null);
  assert.equal(await m.classes.removeMember("other", c.id, "aram"), false, "a stranger can't remove a pupil");
  assert.equal(await m.classes.deleteClass("other", c.id), false);
});

test("the class report shows each pupil's week and the questions several got wrong", async () => {
  const c = (await m.classes.ownClasses("teacher"))[0]!;
  const now = new Date();
  const answer = (i: number, correct: boolean) => ({ itemId: `quiz:math-3-times#${i}`, source: "quiz" as const, refId: "math-3-times", courseId: "math-3", correct });
  await m.learner.recordAnswers("ani", [answer(0, true), answer(1, false), answer(2, true), answer(0, true), answer(2, true), { ...answer(1, true), hintUsed: true, schedule: false }], now);
  await m.learner.recordAnswers("aram", [answer(1, false), answer(2, false)], now);
  await m.learner.recordAnswers("other", [answer(2, false)], now);
  const r = await m.classes.classReport(c.id, now);
  assert.deepEqual(r.pupils.map((p) => p.displayName), ["Ani", "Aram"]);
  const ani = r.pupils[0];
  assert.equal(ani.answers7, 5, "a second try after a hint is not a new answer");
  assert.equal(ani.accuracy7, 0.8);
  assert.equal(ani.activeDays, 1, "five answers make a learning day");
  assert.equal(ani.streak, 1);
  assert.equal(r.pupils[1].activeDays, 0);
  assert.equal(r.missed[0].item.itemId, "quiz:math-3-times#1", "both pupils missed question 2");
  assert.equal(r.missed[0].pupils, 2);
  assert.ok(r.missed.every((x) => x.item.itemId !== "quiz:math-3-times#0"), "nobody missed question 1");
  assert.equal(r.missed.find((x) => x.item.itemId === "quiz:math-3-times#2")?.pupils, 1, "a pupil outside the class doesn't count");
});

test("a pupil can leave, and deleting the class ends it for everyone", async () => {
  const c = (await m.classes.ownClasses("teacher"))[0]!;
  assert.equal(await m.classes.removeMember("aram", c.id, "aram"), true);
  assert.equal(await m.classes.canSeePupil("teacher", c.id, "aram"), false);
  assert.equal(await m.classes.deleteClass("teacher", c.id), true);
  assert.deepEqual(await m.classes.joinedClasses("ani"), []);
});

test("a parent link works until the pupil makes a new one or turns it off", async () => {
  assert.equal(await m.classes.getParentLink("ani"), null);
  const first = await m.classes.newParentLink("ani");
  assert.equal((await m.classes.pupilForToken(first))?.userId, "ani");
  const second = await m.classes.newParentLink("ani");
  assert.notEqual(first, second);
  assert.equal(await m.classes.pupilForToken(first), null, "the old link stops");
  assert.equal((await m.classes.pupilForToken(second))?.displayName, "Ani");
  assert.equal(await m.classes.pupilForToken("short"), null);
  await m.classes.removeParentLink("ani");
  assert.equal(await m.classes.pupilForToken(second), null);
});
