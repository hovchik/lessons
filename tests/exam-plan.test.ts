import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { applyAnswer, bandOf, closures, DIAG_MAX, nextSkill, startState, type DiagSkill, type DiagState } from "../src/lib/diagnostic";
import { addDays, buildPlan, daysBetween, markDone, type Plan } from "../src/lib/exam-plan";
import { EXAM_SCOPE, examScope } from "../src/content/exam-scope";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-plan-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

/** s1 ← s2 ← … ← s9: each needs the one before. */
const chain: DiagSkill[] = Array.from({ length: 9 }, (_, i) => ({ id: `s${i + 1}`, prereqs: i ? [`s${i}`] : [] }));
const answer = (s: DiagState, skills: DiagSkill[], id: string, correct: boolean) => applyAnswer(s, skills, { skillId: id, itemId: `q-${id}`, correct });

test("the placement test cuts a chain of units in the middle", () => {
  const c = closures(chain);
  assert.deepEqual(c.get("s3")!.below.sort(), ["s1", "s2"]);
  assert.equal(c.get("s3")!.above.length, 6);
  let s = startState(chain);
  assert.equal(nextSkill(s, chain), "s5");
  s = answer(s, chain, "s5", true);
  // A right answer makes everything under it likely known; the test moves up.
  assert.ok(["s1", "s2", "s3", "s4"].every((id) => s.known[id] >= 0.8));
  assert.equal(nextSkill(s, chain), "s7");
  s = answer(s, chain, "s7", false);
  // A wrong one makes everything above it likely weak, but not what was answered directly.
  assert.ok(s.known.s8 <= 0.3 && s.known.s9 <= 0.3);
  assert.equal(s.known.s5, 0.9);
  assert.equal(nextSkill(s, chain), "s6");
  s = answer(s, chain, "s6", true);
  // Nothing is open now, but the test asks at least 8 questions before it stops.
  const asked = new Set(s.asked.map((a) => a.skillId));
  for (let k = 3; k < 8; k++) {
    const id = nextSkill(s, chain)!;
    assert.ok(id && !asked.has(id));
    asked.add(id);
    s = answer(s, chain, id, true);
  }
  assert.equal(nextSkill(s, chain), null);
  assert.deepEqual([bandOf(0.9), bandOf(0.5), bandOf(0.15)], ["strong", "shaky", "weak"]);
});

test("the placement test never asks more than its maximum", () => {
  const many: DiagSkill[] = Array.from({ length: 40 }, (_, i) => ({ id: `k${i}`, prereqs: [] }));
  let s = startState(many);
  for (let k = 0; k < DIAG_MAX; k++) s = answer(s, many, nextSkill(s, many)!, k % 2 === 0);
  assert.equal(nextSkill(s, many), null);
  assert.equal(new Set(s.asked.map((a) => a.skillId)).size, DIAG_MAX);
});

const start = "2026-11-02";
const tasks = (plan: Plan, kind: string, skillId?: string) => plan.days.flatMap((d, i) => d.tasks.filter((t) => t.kind === kind && (!skillId || t.skillId === skillId)).map(() => i));

test("a plan spaces practice, then a check, for each weak or shaky unit", () => {
  const plan = buildPlan({ skills: [{ id: "a", p: 0.15 }, { id: "b", p: 0.5 }, { id: "c", p: 0.9 }], start, examDate: addDays(start, 21), minutes: 30 });
  assert.equal(plan.days.length, 21);
  assert.equal(plan.days[0].date, start);
  assert.ok(plan.days.every((d) => d.tasks[0].kind === "review"));
  const last = plan.days[20];
  assert.ok(last.last && last.tasks.length === 1);
  assert.deepEqual(tasks(plan, "trial"), [6, 13, 18]);
  // Weak: two practice rounds, then a check, each at least two days apart.
  const a = plan.days.flatMap((d, i) => d.tasks.filter((t) => t.skillId === "a").map((t) => [i, t.kind] as const));
  assert.deepEqual(a.slice(0, 3).map((x) => x[1]), ["practice", "practice", "check"]);
  for (let k = 1; k < 3; k++) assert.ok(a[k][0] - a[k - 1][0] >= 2);
  // Shaky: one round, then a check.
  const b = plan.days.flatMap((d, i) => d.tasks.filter((t) => t.skillId === "b").map((t) => [i, t.kind] as const));
  assert.deepEqual(b.slice(0, 2).map((x) => x[1]), ["practice", "check"]);
  // The strong unit is not practised, and nothing is left over.
  assert.deepEqual(tasks(plan, "practice", "c"), []);
  assert.deepEqual(plan.leftover, []);
  // No day holds more than the daily time, or the same unit twice.
  for (const d of plan.days) {
    const work = d.tasks.filter((t) => t.kind === "practice" || t.kind === "check");
    assert.ok(work.length <= 2);
    assert.equal(new Set(work.map((t) => t.skillId)).size, work.length);
  }
});

test("a plan says what does not fit before the exam", () => {
  const skills = Array.from({ length: 8 }, (_, i) => ({ id: `w${i}`, p: 0.1 }));
  const plan = buildPlan({ skills, start, examDate: addDays(start, 6), minutes: 15 });
  assert.equal(daysBetween(start, addDays(start, 6)), 6);
  assert.ok(plan.leftover.length > 0);
  assert.deepEqual(buildPlan({ skills, start, examDate: start, minutes: 15 }), { days: [], leftover: [] });
});

test("tasks tick off from what the pupil did, a day late too", () => {
  const plan = buildPlan({ skills: [{ id: "a", p: 0.15 }], start, examDate: addDays(start, 14), minutes: 15 });
  const [p1, p2] = tasks(plan, "practice", "a");
  const day = (i: number) => plan.days[i].date;
  const done = markDone(plan, {
    practice: { a: [...Array(5).fill(day(p1 + 1)), ...Array(4).fill(day(p2))] },
    checks: {},
    trials: [day(6)],
    reviews: [day(0), day(2)],
  });
  const t = (i: number, kind: string) => done.days[i].tasks.find((x) => x.kind === kind)!;
  assert.equal(t(p1, "practice").done, true);
  assert.equal(t(p2, "practice").done, false); // only 4 answers
  assert.equal(t(6, "trial").done, true);
  assert.equal(t(0, "review").done, true);
  assert.equal(t(1, "review").done, false);
});

test("every state exam has its courses", async () => {
  const { exams } = await import("../src/content/exams");
  const { courses, courseId } = await import("../src/content");
  const ids = new Set(courses.map((c) => courseId(c.subject, c.grade)));
  for (const e of exams.filter((x) => x.kind === "state")) {
    assert.ok(EXAM_SCOPE[e.id]?.length, e.id);
    for (const c of EXAM_SCOPE[e.id]) assert.ok(ids.has(c), `${e.id}: ${c}`);
  }
  assert.deepEqual(examScope({ id: "trial-math-3", kind: "trial", subjectId: "math", grade: 3 }), ["math-3"]);
});

type Modules = { client: typeof import("../src/server/db/client"); plan: typeof import("../src/server/exam-plan"); learner: typeof import("../src/server/learner") };
let m: Modules;
const tx = (s: string) => ({ en: s, hy: s, ru: s });
const q = (answer: number) => ({ prompt: tx(`q${answer}`), options: [tx("a"), tx("b"), tx("c"), tx("d")], answer });

before(async () => {
  m = { client: await import("../src/server/db/client"), plan: await import("../src/server/exam-plan"), learner: await import("../src/server/learner") };
  const db = await m.client.getDb();
  const { schema } = m.client;
  await db.insert(schema.subjects).values({ id: "math", name: tx("Math"), description: tx(""), color: "indigo", icon: "calculator" }).run();
  await db.insert(schema.courses).values({ id: "math-3", subjectId: "math", grade: 3, title: tx("Math 3"), description: tx(""), curriculumNotes: { armenia: tx(""), russia: tx("") }, hoursPerWeek: { armenia: 4, russia: 4 } }).run();
  await db.insert(schema.units).values([
    { id: "math-3-u1", courseId: "math-3", position: 1, title: tx("Tables"), summary: tx("") },
    { id: "math-3-u2", courseId: "math-3", position: 2, title: tx("Division"), summary: tx("") },
  ]).run();
  for (const [id, unitId] of [["a", "math-3-u1"], ["b", "math-3-u2"]] as const)
    await db.insert(schema.lessons).values({ id, unitId, courseId: "math-3", position: 1, slug: id, title: tx(id), objectives: { en: [], hy: [], ru: [] }, content: tx("Body"), quiz: [q(0), q(1), q(2)], status: "published" }).run();
  await db.insert(schema.skills).values([
    { id: "math-3.u1", courseId: "math-3", unitId: "math-3-u1", position: 1, title: tx("Tables") },
    { id: "math-3.u2", courseId: "math-3", unitId: "math-3-u2", position: 2, title: tx("Division") },
  ]).run();
  await db.insert(schema.skillPrereqs).values({ skillId: "math-3.u2", prereqId: "math-3.u1" }).run();
  await db.insert(schema.lessonSkills).values([{ lessonId: "a", skillId: "math-3.u1" }, { lessonId: "b", skillId: "math-3.u2" }]).run();
  await db.insert(schema.exams).values({ id: "trial-math-3", kind: "trial", system: "both", subjectId: "math", grade: 3, title: tx("Math 3 trial"), description: tx(""), format: tx("") }).run();
  await db.insert(schema.users).values({ id: "u1", username: "ani", displayName: "Ani", passwordHash: "x" }).run();
});

after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("a plan starts with the placement test and turns into days of tasks", async () => {
  const now = new Date("2026-11-02T09:00:00Z");
  const { plan } = m;
  assert.equal(await plan.startPlan({ userId: "u1", examId: "trial-math-3", examDate: "2026-11-01", minutesPerDay: 15, now }), null);
  assert.ok(await plan.startPlan({ userId: "u1", examId: "trial-math-3", examDate: "2026-11-23", minutesPerDay: 15, now }));
  const v1 = await plan.getPlanView("u1", "trial-math-3", now);
  assert.equal(v1?.status, "diagnostic");
  if (v1?.status !== "diagnostic") return;
  // The same question on a reload, and only that one can be answered.
  const again = await plan.getPlanView("u1", "trial-math-3", now);
  assert.equal(again?.status === "diagnostic" && again.question.itemId, v1.question.itemId);
  assert.equal(await plan.answerDiagnostic({ userId: "u1", examId: "trial-math-3", itemId: "quiz:b#0", response: 0, now }), null);
  assert.ok(v1.question.itemId.startsWith("quiz:a#"));
  const r1 = await plan.answerDiagnostic({ userId: "u1", examId: "trial-math-3", itemId: v1.question.itemId, response: null, now });
  assert.ok(r1?.next?.itemId.startsWith("quiz:b#"));
  const r2 = await plan.answerDiagnostic({ userId: "u1", examId: "trial-math-3", itemId: r1!.next!.itemId, response: 3, now });
  assert.equal(r2?.next, null);

  const db = await m.client.getDb();
  const { schema } = m.client;
  const events = await db.select().from(schema.answerEvents).all();
  assert.deepEqual(events.map((e) => [e.source, e.correct]), [["diagnostic", false], ["diagnostic", false]]);
  assert.equal((await db.select().from(schema.reviewCards).all()).length, 0);

  const v2 = await plan.getPlanView("u1", "trial-math-3", now);
  assert.equal(v2?.status, "ready");
  if (v2?.status !== "ready") return;
  assert.equal(v2.daysLeft, 21);
  assert.deepEqual(v2.groups.weak, ["math-3.u1", "math-3.u2"]);
  const todayPractice = v2.today!.tasks.find((t) => t.kind === "practice")!;
  assert.equal(todayPractice.skillId, "math-3.u1");
  assert.equal(todayPractice.done, false);

  // Five practice answers in the unit tick today's task.
  await m.learner.recordAnswers("u1", [0, 1, 2, 0, 1].map((i) => ({ itemId: `quiz:a#${i}`, source: "practice" as const, refId: "a", courseId: "math-3", correct: true })), now);
  const v3 = await plan.getPlanView("u1", "trial-math-3", now);
  assert.equal(v3?.status === "ready" && v3.today!.tasks.find((t) => t.kind === "practice")!.done, true);
  assert.deepEqual((await plan.listPlans("u1", now)).map((p) => [p.examId, p.daysLeft]), [["trial-math-3", 21]]);

  // Updating starts the plan from today with a new date.
  const later = new Date("2026-11-05T09:00:00Z");
  assert.ok(await plan.updatePlan({ userId: "u1", examId: "trial-math-3", examDate: "2026-12-01", minutesPerDay: 30, now: later }));
  const v4 = await plan.getPlanView("u1", "trial-math-3", later);
  assert.equal(v4?.status === "ready" && v4.startDate, "2026-11-05");
  await plan.removePlan("u1", "trial-math-3");
  assert.equal((await plan.getPlanView("u1", "trial-math-3", later))?.status, "none");
});
