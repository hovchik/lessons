import assert from "node:assert/strict";
import test from "node:test";
import { courses } from "../src/content";
import { exams } from "../src/content/exams";
import { autoTrial } from "../src/content/exams/trials/auto";

test("every course has a year-end trial", () => {
  const have = new Set(exams.filter((e) => e.kind === "trial").map((e) => `${e.subject}-${e.grade}`));
  assert.deepEqual(courses.map((c) => `${c.subject}-${c.grade}`).filter((id) => !have.has(id)), []);
});

test("a trial drawn from lesson quizzes covers every unit, is the same each time, and points back to its lessons", () => {
  const drawn = exams.filter((e) => e.questions.some((q) => q.ref));
  assert.ok(drawn.length >= 90);
  for (const e of drawn) {
    const c = courses.find((x) => x.subject === e.subject && x.grade === e.grade)!;
    assert.equal(e.questions.length, 10, e.id);
    assert.equal(e.questions.filter((q) => q.points === 2).length, 2, e.id);
    const units = new Set(e.questions.map((q) => q.topic?.en));
    assert.equal(units.size, Math.min(10, c.units.length), `${e.id} covers every unit`);
    assert.equal(new Set(e.questions.map((q) => `${q.ref!.lessonId}#${q.ref!.index}`)).size, 10, `${e.id}: no question twice`);
    for (const q of e.questions) {
      const lesson = c.units.flatMap((u) => u.lessons).find((l) => `${e.subject}-${e.grade}-${l.slug}` === q.ref!.lessonId)!;
      assert.equal(lesson.quiz![q.ref!.index].prompt.en, q.prompt.en);
      assert.doesNotMatch(q.prompt.en, /\b(the|this) (text|picture|painting|board|table|map)\b/i, `${e.id}: ${q.prompt.en}`);
    }
    assert.deepEqual(autoTrial(c), e, "the same pick every time");
  }
});
