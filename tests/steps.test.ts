import { test } from "node:test";
import assert from "node:assert/strict";
import { blankRight, fadedSteps, filled, parseSteps, resultParts, stepsProblems } from "../src/lib/steps";
import { checkSimBlocks } from "../src/components/sim/validate";
import { WORKED, stepsBody, withWorked } from "../src/content/worked";
import { workedProblems } from "../src/content/worked/validate";
import { mt } from "../src/content/worked/kit";
import type { CourseSeed } from "../src/content/types";

const body = `Solve the equations.
? 2(x − 3) = 10
- Open the brackets :: 2x − [[6]] = 10
- Divide by 2 :: x = [[8]]
? 3(x + 2) = 21
- Open the brackets :: 3x + [[6]] = 21
- Divide by 3 :: x = [[5|5.0]]`;

test("a steps block reads as an intro, problems and steps", () => {
  const doc = parseSteps(body);
  assert.equal(doc.intro, "Solve the equations.");
  assert.equal(doc.problems.length, 2);
  assert.deepEqual(doc.problems[1].steps[1], { action: "Divide by 3", result: "x = [[5|5.0]]" });
  assert.deepEqual(resultParts("2x − [[6]] = 10"), ["2x − ", { blank: 0, accepted: ["6"] }, " = 10"]);
  assert.equal(filled("x = [[5|5.0]]"), "x = 5");
  assert.deepEqual(stepsProblems(body), []);
});

test("each next problem leaves more of the last steps, the last one all", () => {
  assert.deepEqual([0, 1, 2].map((k) => fadedSteps(k, 3, 3)), [0, 2, 3]);
  assert.deepEqual([0, 1, 2, 3].map((k) => fadedSteps(k, 4, 3)), [0, 1, 2, 3]);
  assert.deepEqual([0, 1].map((k) => fadedSteps(k, 2, 2)), [0, 2]);
  assert.deepEqual([0, 1, 2].map((k) => fadedSteps(k, 3, 1)), [0, 0, 1]);
});

test("a typed blank counts as a number or as text", () => {
  assert.ok(blankRight(["0,8"], "0.8"));
  assert.ok(blankRight(["0.8"], " 0,8 "));
  assert.ok(blankRight(["−5"], "-5"));
  assert.ok(blankRight(["15 000"], "15000"));
  assert.ok(blankRight(["5", "5.0"], "5"));
  assert.ok(blankRight(["went"], "Went."));
  assert.ok(!blankRight(["8"], "9"));
  assert.ok(!blankRight(["8"], " "));
});

test("broken blocks are caught, in the lesson too", () => {
  const bad = `? 1 + 1\n- Add :: 1 + 1 = [[2]]\n? 2 + 2\n- Add :: 2 + 2 = 4\n- Check :: [[4]]`;
  const p = stepsProblems(bad);
  assert.ok(p.includes("problem 2 has 2 steps, the first has 1"));
  assert.ok(p.includes("problem 2 step 1 has no [[blank]]"));
  assert.ok(stepsProblems("? only one\n- a :: [[1]]").includes("needs at least 2 problems"));
  assert.ok(stepsProblems("? a\n- [[1]]\n? b\n- x :: [[1]]").includes("problem 1 step 1 has no action before ::"));
  assert.deepEqual(checkSimBlocks(`~~~sim\nsteps\n${body}\n~~~\n`), []);
  assert.equal(checkSimBlocks(`~~~sim\nsteps\n${bad}\n~~~\n`).length, p.length);
});

test("worked sets agree across languages", () => {
  const set = {
    actions: [{ en: "Halve", hy: "Կիսի՛ր", ru: "Раздели пополам" }],
    problems: [
      { problem: mt("3 ÷ 2"), results: [mt("[[1.5]]")] },
      { problem: mt("5 ÷ 2"), results: [{ en: "[[2.5]]", hy: "[[2,6]]", ru: "[[2,5]] [[1]]" }] },
    ],
  };
  assert.deepEqual(mt("0.8 × 15 ÷ 2"), { en: "0.8 × 15 ÷ 2", hy: "0,8 × 15 : 2", ru: "0,8 · 15 : 2" });
  const p = workedProblems(set);
  assert.ok(p.some((x) => x.includes('hy blank 1 "2,6" differs from en "2.5"')));
  assert.ok(p.some((x) => x.includes("ru has 2 blanks, en has 1")));
  for (const [subject, byGrade] of Object.entries(WORKED))
    for (const [grade, bySlug] of Object.entries(byGrade))
      for (const [slug, sets] of Object.entries(bySlug)) sets.forEach((s, i) => assert.deepEqual(workedProblems(s), [], `${subject}-${grade}/${slug} set ${i + 1}`));
});

test("worked examples go before the exercises in every language", () => {
  const set = WORKED.algebra[7]["equations-with-brackets"][0];
  const lesson = {
    slug: "equations-with-brackets",
    title: { en: "E", hy: "E", ru: "E" },
    content: { en: "## Idea\nText\n\n## Exercises\n1. x", hy: "## Միտք\nՏեքստ\n\n## Վարժություններ\n1. x", ru: "## Идея\nТекст\n\n## Упражнения\n1. x" },
    quiz: [],
  };
  const course = { subject: "algebra", grade: 7, units: [{ title: lesson.title, summary: lesson.title, lessons: [lesson] }] } as unknown as CourseSeed;
  const [out] = withWorked([course]);
  const content = out.units[0].lessons[0].content!;
  for (const lang of ["en", "hy", "ru"] as const) {
    const md = content[lang];
    const at = md.indexOf("~~~sim\nsteps\n");
    assert.ok(at > md.indexOf("Text") || at > md.indexOf("Текст") || at > md.indexOf("Տեքստ"), lang);
    assert.ok(at < md.search(/## (Exercises|Վարժություններ|Упражнения)/), lang);
    assert.ok(md.includes(stepsBody(set, lang)), lang);
    assert.deepEqual(checkSimBlocks(md), [], lang);
  }
});
