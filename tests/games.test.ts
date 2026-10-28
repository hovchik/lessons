import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  CALC_GRADES,
  CALC_TOPICS,
  TOPIC_GRADES,
  calcGameId,
  isRight,
  makeProblem,
  nextProblem,
  parseAnswer,
  parseCalcGameId,
  problemKey,
  rat,
  seeded,
  showRational,
  topicsFor,
} from "../src/lib/calc";
import { WORDS } from "../src/content/games/words";
import { nextWordRound, parseWordsGameId, wordsFor } from "../src/lib/words";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-games-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

test("answers are read as exact numbers, in any equal form", () => {
  assert.deepEqual(parseAnswer("12"), rat(12));
  assert.deepEqual(parseAnswer("−3"), rat(-3));
  assert.deepEqual(parseAnswer("0,75"), rat(3, 4));
  assert.deepEqual(parseAnswer("6/8"), rat(3, 4));
  assert.deepEqual(parseAnswer(".5"), rat(1, 2));
  assert.deepEqual(parseAnswer("-7/2"), rat(-7, 2));
  for (const bad of ["", "-", "1/0", "1.5/2", "--2", "abc", "1/2/3", "3-"]) assert.equal(parseAnswer(bad), null, bad);
  assert.equal(showRational(rat(3, 4), true), "0.75");
  assert.equal(showRational(rat(1, 3), true), "1/3");
  assert.equal(showRational(rat(-5, 2), false), "−5/2");
  assert.equal(showRational(rat(-8), false), "−8");
});

test("every grade 1–9 has topics, and every topic is somebody's", () => {
  for (const g of CALC_GRADES) assert.ok(topicsFor(g).length >= 1, `grade ${g}`);
  for (const t of CALC_TOPICS) assert.ok(CALC_GRADES.some((g) => topicsFor(g).includes(t)), t);
});

test("thousands of generated problems are well formed and their answers check out", () => {
  const rng = seeded(42);
  for (const g of CALC_GRADES) {
    for (const topic of [...topicsFor(g), "mix" as const]) {
      for (let i = 0; i < 300; i++) {
        const p = makeProblem(topic, g, rng);
        assert.ok(p.text || p.words, `${topic} ${g}: something to show`);
        assert.ok(Number.isInteger(p.answer.n) && Number.isInteger(p.answer.d) && p.answer.d > 0, `${topic} ${g}: rational answer`);
        // The shown answer is accepted, written either with a point or a comma.
        const shown = showRational(p.answer, p.decimal);
        assert.ok(isRight(p, shown), `${p.text} = ${shown}`);
        assert.ok(isRight(p, shown.replace(".", ",")), `${p.text} comma`);
        assert.equal(isRight(p, showRational(rat(p.answer.n + p.answer.d, p.answer.d), p.decimal)), false, "one more is wrong");
        // Fractions only where the topic says so; no huge numbers to type.
        if (p.topic !== "fractions" && p.topic !== "decimals") assert.equal(p.answer.d, 1, `${p.text}: whole answer`);
        assert.ok(shown.length <= 8, `${p.text} = ${shown} is short enough to type`);
        // Young grades never see negative numbers.
        if (g <= 5) {
          assert.ok(p.answer.n >= 0, `${p.text}: no negative answer in grade ${g}`);
          assert.ok(!p.text.includes("(−"), `${p.text}: no negative operand in grade ${g}`);
        }
        if (p.topic === "negatives") assert.ok(p.text.includes("−"), `${p.text}: has a negative`);
      }
    }
  }
});

test("problems stay in their grade's number range", () => {
  const rng = seeded(1);
  for (let i = 0; i < 500; i++) {
    const p = makeProblem("add", 1, rng);
    const nums = p.text.match(/\d+/g)!.map(Number);
    assert.ok(nums.every((n) => n <= 20) && p.answer.n <= 20, `grade 1: ${p.text}`);
    const t2 = makeProblem("times", 2, rng);
    assert.ok(t2.text.split(" × ").some((x) => [2, 3, 4, 5, 10].includes(Number(x))), `grade 2 tables: ${t2.text}`);
  }
  // A topic asked for outside its grades is pitched at its nearest grade.
  assert.ok(TOPIC_GRADES.add[1] === 4);
  const p = makeProblem("add", 9, seeded(3));
  assert.ok(p.answer.n <= 10000);
});

test("the next problem avoids the ones just seen", () => {
  const rng = seeded(9);
  const recent: string[] = [];
  for (let i = 0; i < 200; i++) {
    const p = nextProblem("times", 3, recent, rng);
    assert.ok(!recent.slice(0, 4).includes(problemKey(p)), `repeat ${problemKey(p)}`);
    recent.unshift(problemKey(p));
    recent.length = Math.min(recent.length, 8);
  }
});

test("game ids are parsed strictly", () => {
  assert.deepEqual(parseCalcGameId(calcGameId("times", 3)), { choice: "times", grade: 3 });
  assert.deepEqual(parseCalcGameId("calc:mix:9"), { choice: "mix", grade: 9 });
  for (const bad of ["calc:times:10", "calc:nope:3", "calc:times", "words:1"]) assert.equal(parseCalcGameId(bad), null, bad);
  assert.deepEqual(parseWordsGameId("words:2"), { level: 2 });
  assert.equal(parseWordsGameId("words:3"), null);
});

test("the word bank is complete, and each round has four different words from one theme", () => {
  const seen = new Set<string>();
  for (const w of WORDS) {
    assert.ok(!seen.has(w.en), `${w.en} once`);
    seen.add(w.en);
    assert.ok(w.emoji && w.hy.trim() && w.ru.trim(), w.en);
    assert.ok(/[Ա-֏]/.test(w.hy) && /[Ѐ-ӿ]/.test(w.ru), `${w.en}: scripts`);
  }
  for (const level of [1, 2] as const) {
    const pool = wordsFor(level);
    const themes = new Set(pool.map((w) => w.theme));
    for (const th of themes) assert.ok(pool.filter((w) => w.theme === th).length >= 4, `level ${level} ${th} has 4+ words`);
    const rng = seeded(level);
    for (let i = 0; i < 300; i++) {
      const r = nextWordRound(level, [], rng);
      assert.equal(new Set(r.options).size, 4);
      assert.ok(r.options.includes(r.word.en));
      for (const o of r.options) assert.equal(pool.find((w) => w.en === o)!.theme, r.word.theme);
    }
  }
});

type Modules = { client: typeof import("../src/server/db/client"); games: typeof import("../src/server/games") };
let m: Modules;
before(async () => {
  m = { client: await import("../src/server/db/client"), games: await import("../src/server/games") };
  const db = await m.client.getDb();
  await db.insert(m.client.schema.users).values({ id: "u1", username: "ani", displayName: "Ani", passwordHash: "x" }).run();
});
after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("rounds are saved and the best is the pupil's own", async () => {
  const { saveRound, getBests } = m.games;
  assert.deepEqual(await saveRound("u1", "calc:times:3", "sprint", 18, 20), { previousBest: null });
  assert.deepEqual(await saveRound("u1", "calc:times:3", "sprint", 15, 15), { previousBest: 18 });
  assert.deepEqual(await saveRound("u1", "calc:times:3", "sprint", 22, 25), { previousBest: 18 });
  assert.deepEqual(await saveRound("u1", "words:1", "calm", 17, 20), { previousBest: null });
  assert.deepEqual(await getBests("u1"), { "calc:times:3:sprint": 22, "words:1:calm": 17 });
  // Nonsense is refused.
  assert.equal(await saveRound("u1", "calc:times:3", "sprint", 5, 4), null);
  assert.equal(await saveRound("u1", "calc:times:3", "calm", 5, 12), null);
  assert.equal(await saveRound("u1", "calc:times:3", "sprint", 300, 300), null);
  assert.equal(await saveRound("u1", "chess:1", "sprint", 1, 1), null);
});
