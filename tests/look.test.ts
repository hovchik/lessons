import assert from "node:assert/strict";
import test from "node:test";
import { findText, lessonPassages, lookBack, lookTokens } from "../src/lib/lesson-look";

const body = `Plants make their own food. This process is called **photosynthesis**.

## How it works

Leaves take in carbon dioxide from the air, and roots take in water. Using the energy of sunlight, the leaf turns them into sugar and gives off **oxygen**.

- The green pigment **chlorophyll**
  catches the light.
- Water travels up through the stem.

| Part | Job |
|---|---|
| root | takes in water |
| leaf | makes food |

## Exercises

1. Which gas do plants give off? Oxygen is the answer to remember.

## Answers

1. Oxygen.`;

test("passages skip the exercises and answers, join list continuation lines, and keep table rows with their header", () => {
  const ps = lessonPassages(body).map((p) => p.markdown);
  assert.ok(ps.some((p) => p.includes("chlorophyll") && p.includes("catches the light")), "a list item continues on the next line");
  assert.ok(ps.some((p) => p.startsWith("| Part | Job |") && p.endsWith("| leaf | makes food |")));
  assert.equal(ps.some((p) => p.includes("remember")), false, "nothing from Exercises");
  assert.equal(ps.some((p) => p === "Oxygen."), false, "nothing from Answers");
});

test("the passage that teaches the right answer is chosen, and a question the lesson doesn't cover gets none", () => {
  const [gas, pigment, row, offTopic] = lookBack(body, [
    { prompt: "Which gas do leaves give off in sunlight?", right: ["oxygen"], wrong: ["nitrogen", "carbon dioxide"] },
    { prompt: "Which pigment catches the light?", right: ["chlorophyll"], wrong: ["melanin", "keratin"] },
    { prompt: "What does the root do?", right: ["takes in water"], wrong: ["makes food"] },
    { prompt: "Who painted the Mona Lisa?", right: ["Leonardo"], wrong: ["Raphael"] },
  ]);
  assert.match(gas!.markdown, /gives off \*\*oxygen\*\*/);
  assert.match(pigment!.markdown, /chlorophyll/);
  assert.match(row!.markdown, /\| root \| takes in water \|/);
  assert.deepEqual(findText(row!.markdown), ["root takes in water"], "a table row is found by its own text, not the shared header");
  assert.equal(offTopic, null);
});

test("Armenian and Russian endings still match, and the Armenian question mark doesn't split a word", () => {
  assert.deepEqual(lookTokens("Որտե՞ղ"), lookTokens("Որտեղ"));
  const hy = "Սայաթ-Նովան ծնվել է **Թիֆլիսում**։ Նա գրել է երգեր երեք լեզվով։\n\nԱշուղները երգում էին քաղաքներում և գյուղերում։";
  const [p] = lookBack(hy, [{ prompt: "Որտե՞ղ է ծնվել Սայաթ-Նովան։", right: ["Թիֆլիսում"], wrong: ["Երևանում", "Գյումրիում"] }]);
  assert.match(p!.markdown, /Թիֆլիսում/);
  const ru = "Вода — **полярная** молекула. Молекулы воды связаны **водородными связями**.\n\nЛёд легче воды и плавает на поверхности.";
  const [r] = lookBack(ru, [{ prompt: "Какие связи образуются между молекулами воды?", right: ["Водородные"], wrong: ["Ионные", "Металлические"] }]);
  assert.match(r!.markdown, /водородными связями/);
});

test("math is not used to find a passage on the page, and a long paragraph is cut to a two-sentence window", () => {
  assert.deepEqual(findText("The area is $S = a \\cdot b$, so a 5 by 4 rectangle has area 20."), [", so a 5 by 4 rectangle has area 20.", "The area is"]);
  const animals = ["lions", "eagles", "sharks", "camels", "wolves", "parrots", "turtles", "beavers"];
  const long = animals.map((a) => (a === "sharks" ? "Sharks hunt fish in the deep ocean." : `This sentence tells a story about ${a} living somewhere far away.`)).join(" ");
  const [p] = lookBack(long, [{ prompt: "Which animals hunt in the deep ocean?", right: ["sharks"], wrong: ["camels"] }]);
  assert.ok(p && p.markdown.length < long.length && /sharks/i.test(p.markdown));
});

test("a quoted passage keeps the greater-than signs of its formulas", () => {
  const md = "Derivatives tell us about graphs.\n\n> If $f'(x) > 0$ at every point of an interval, $f$ **increases** on it.\n> If $f'(x) < 0$, $f$ **decreases** on it.\n\nSecond derivatives tell us about bending.";
  const [p] = lookBack(md, [{ prompt: "What happens to f on an interval where the derivative is positive?", right: ["f increases"], wrong: ["f decreases"] }]);
  assert.ok(p && p.markdown.includes("$f'(x) > 0$"), p?.markdown);
  assert.ok(!p.markdown.startsWith(">"));
});
