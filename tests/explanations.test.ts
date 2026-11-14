import assert from "node:assert/strict";
import test from "node:test";
import { EXPLANATIONS, explanationKey, questionPrint, withExplanations } from "../src/content/explanations";
import type { CourseSeed } from "../src/content/types";

const tx = (s: string) => ({ en: s, hy: `${s} hy`, ru: `${s} ru` });
const course = (): CourseSeed =>
  ({
    subject: "test-subject",
    grade: 4,
    units: [
      {
        title: tx("U"),
        lessons: [
          {
            slug: "plants",
            title: tx("Plants"),
            content: tx("Body"),
            quiz: [
              { prompt: tx("Which gas?"), options: [tx("oxygen"), tx("argon"), tx("neon")], answer: 0 },
              { prompt: tx("Written"), options: [tx("a"), tx("b"), tx("c")], answer: 1, explanation: tx("by hand") },
              { kind: "number", prompt: tx("2+2?"), answer: 4 },
            ],
          },
        ],
      },
    ],
  }) as unknown as CourseSeed;

test("generated explanations fill the questions without one, and only while the question is unchanged", () => {
  const c = course();
  const quiz = c.units[0].lessons[0].quiz!;
  EXPLANATIONS["test-subject"] = {
    [explanationKey(4, "plants", 0)]: { q: questionPrint(quiz[0]), ...tx("Leaves give off oxygen.") },
    [explanationKey(4, "plants", 1)]: { q: questionPrint(quiz[1]), ...tx("never used") },
    [explanationKey(4, "plants", 2)]: { q: "stale", ...tx("old") },
  };
  const out = withExplanations([c])[0].units[0].lessons[0].quiz!;
  assert.deepEqual(out[0].explanation, tx("Leaves give off oxygen."));
  assert.deepEqual(out[1].explanation, tx("by hand"), "a written explanation wins");
  assert.equal(out[2].explanation, undefined, "the question changed since, so the old explanation is not shown");
  assert.notEqual(questionPrint(quiz[0]), questionPrint({ ...(quiz[0] as { prompt: never; options: never[]; answer: number }), answer: 1 }), "a new right answer is a new question");
  delete EXPLANATIONS["test-subject"];
});
