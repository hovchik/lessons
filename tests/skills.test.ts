import { test } from "node:test";
import assert from "node:assert/strict";
import { courses } from "../src/content";
import { buildSkillMap, checkSkillMap, prerequisiteChain, type SkillSeed } from "../src/content/skills";

const map = buildSkillMap(courses);

test("every unit is a skill and every lesson belongs to one", () => {
  const units = courses.reduce((a, c) => a + c.units.length, 0);
  const lessons = courses.reduce((a, c) => a + c.units.reduce((b, u) => b + u.lessons.length, 0), 0);
  assert.equal(map.length, units);
  const mapped = map.flatMap((s) => s.lessonIds);
  assert.equal(mapped.length, lessons);
  assert.equal(new Set(mapped).size, lessons);
});

test("the content's skill map is valid", () => {
  assert.deepEqual(checkSkillMap(map), []);
});

test("unmapped skills need the previous unit; mapped ones use their own list", () => {
  const first = map.find((s) => s.id === "chemistry-8.u1");
  const second = map.find((s) => s.id === "chemistry-8.u2");
  if (first && second) {
    assert.deepEqual(first.prereqs, []);
    assert.deepEqual(second.prereqs, ["chemistry-8.u1"]);
  }
  assert.deepEqual(map.find((s) => s.id === "math-1.u6")?.prereqs, ["math-1.u1"]);
});

test("quadratic equations build on square roots, powers and expressions", () => {
  const chain = prerequisiteChain(map, "algebra-8.u3");
  for (const id of ["algebra-8.u2", "algebra-7.u6", "algebra-7.u4", "algebra-7.u1", "math-6.u5"]) assert.ok(chain.includes(id), id);
  assert.ok(chain.indexOf("algebra-8.u2") < chain.indexOf("math-6.u5"), "nearest first");
});

test("the checker catches unknown ids, later grades and cycles", () => {
  const s = (id: string, grade: number, prereqs: string[]): SkillSeed => ({ id, courseId: id.split(".")[0], subject: "x", grade, position: 1, title: { en: id, hy: id, ru: id }, prereqs, lessonIds: [] });
  const errors = checkSkillMap([s("x-1.u1", 1, ["x-1.u2"]), s("x-1.u2", 1, ["x-1.u1"]), s("x-2.u1", 2, ["nope"]), s("x-1.u3", 1, ["x-2.u1"])], { "ghost.u1": [] });
  assert.ok(errors.some((e) => e.includes("cycle")), "cycle");
  assert.ok(errors.some((e) => e.includes("unknown skill nope")), "unknown");
  assert.ok(errors.some((e) => e.includes("later grade")), "later grade");
  assert.ok(errors.some((e) => e.includes("ghost.u1")), "authored unknown");
});
