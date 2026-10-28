import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { PUZZLES } from "../src/content/puzzles";
import { questionProblems } from "../src/content/questions/validate";
import { isMate, legalMoves, parseFen, parseMove, play, inCheck } from "../src/components/sim/chess-core";
import { checkSimBlocks } from "../src/components/sim/validate";
import { PUZZLE_TRIES, puzzleIndex, puzzleNumber, puzzleStatus, puzzleStreak, shareText } from "../src/lib/puzzle";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-puzzle-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

test("every puzzle is complete in all three languages", () => {
  for (const [level, bank] of Object.entries(PUZZLES)) {
    assert.ok(bank.length >= 40, `${level}: at least 40 puzzles`);
    const ids = new Set<string>();
    for (const p of bank) {
      assert.ok(!ids.has(p.id), `${p.id} is unique`);
      ids.add(p.id);
      assert.deepEqual(questionProblems(p.q, ["en", "hy", "ru"]), [], p.id);
      assert.ok(p.q.explanation, `${p.id} has an explanation`);
      for (const l of ["en", "hy", "ru"] as const) assert.ok(p.hint[l].trim(), `${p.id} hint ${l}`);
      if (p.visual) assert.deepEqual(checkSimBlocks(p.visual), [], p.id);
    }
  }
});

test("each chess puzzle has exactly one mate among its moves", () => {
  const chess = Object.values(PUZZLES).flat().filter((p) => p.chess);
  assert.ok(chess.length >= 10);
  for (const p of chess) {
    const { fen, moves, answer } = p.chess!;
    const b = parseFen(fen)!;
    assert.ok(b, `${p.id} fen`);
    assert.equal(inCheck(b, "b"), false, `${p.id}: Black is not already in check`);
    moves.forEach((m, i) => {
      const mv = parseMove(m)!;
      assert.ok(b[mv.from]?.c === "w" && legalMoves(b, mv.from).includes(mv.to), `${p.id}: ${m} is a legal White move`);
      assert.equal(isMate(play(b, mv.from, mv.to), "b"), i === answer, `${p.id}: ${m} ${i === answer ? "is" : "is not"} mate`);
    });
  }
});

test("the banks are walked one puzzle a day and start over", () => {
  assert.equal(puzzleNumber("2026-10-01"), 1);
  assert.equal(puzzleNumber("2026-10-28"), 28);
  assert.equal(puzzleIndex("2026-10-01", 49), 0);
  assert.equal(puzzleIndex("2026-10-02", 49), 1);
  assert.equal(puzzleIndex("2026-11-19", 49), 0);
  assert.equal(puzzleIndex("2026-09-30", 49), 48);
});

test("two tries, a hint after the first miss", () => {
  assert.deepEqual(puzzleStatus({ tries: 0, solved: false }), { over: false, hint: false, failed: false });
  assert.deepEqual(puzzleStatus({ tries: 1, solved: false }), { over: false, hint: true, failed: false });
  assert.deepEqual(puzzleStatus({ tries: 1, solved: true }), { over: true, hint: false, failed: false });
  assert.deepEqual(puzzleStatus({ tries: PUZZLE_TRIES, solved: false }), { over: true, hint: true, failed: true });
});

test("the puzzle streak counts solved days in a row", () => {
  assert.equal(puzzleStreak([], "2026-10-28"), 0);
  assert.equal(puzzleStreak(["2026-10-26", "2026-10-27"], "2026-10-28"), 2);
  assert.equal(puzzleStreak(["2026-10-26", "2026-10-27", "2026-10-28"], "2026-10-28"), 3);
  assert.equal(puzzleStreak(["2026-10-25", "2026-10-27"], "2026-10-28"), 1);
});

test("the shared result has squares but no answer", () => {
  const s = shareText({ title: "Daily puzzle", day: "2026-10-28", tries: 2, solved: true, streak: 3, streakLabel: "3 days in a row", url: "https://x/en/puzzle" });
  assert.equal(s, "Daily puzzle #28 🟥🟩\n🔥 3 days in a row\nhttps://x/en/puzzle");
  assert.equal(shareText({ title: "P", day: "2026-10-28", tries: 1, solved: true, streak: 0, streakLabel: "", url: "u" }), "P #28 🟩⬜\nu");
  assert.equal(shareText({ title: "P", day: "2026-10-28", tries: 2, solved: false, streak: 0, streakLabel: "", url: "u" }), "P #28 🟥🟥\nu");
});

type Modules = { client: typeof import("../src/server/db/client"); puzzle: typeof import("../src/server/puzzle") };
let m: Modules;
before(async () => {
  m = { client: await import("../src/server/db/client"), puzzle: await import("../src/server/puzzle") };
  const db = await m.client.getDb();
  await db.insert(m.client.schema.users).values({ id: "u1", username: "ani", displayName: "Ani", passwordHash: "x" }).run();
});
after(() => fs.rmSync(dir, { recursive: true, force: true }));

const at = new Date("2026-10-28T10:00:00Z");
const wrongFor = (key: ReturnType<typeof m.puzzle.puzzleOf>["key"]) => (key.kind === "choice" ? (key.answer + 1) % 2 : key.kind === "number" ? "999999" : null);
const rightFor = (key: ReturnType<typeof m.puzzle.puzzleOf>["key"]) => (key.kind === "choice" ? key.answer : key.kind === "number" ? String(key.answer) : null);

test("a pupil's tries are counted on the server, with the hint and then the answer", async () => {
  // Find a level whose puzzle that day is a choice or number question.
  const level = (["junior", "senior"] as const).find((l) => ["choice", "number"].includes(m.puzzle.puzzleOf("2026-10-28", l).key.kind))!;
  const { key } = m.puzzle.puzzleOf("2026-10-28", level);
  const first = await m.puzzle.answerPuzzle({ userId: "u1", level, response: wrongFor(key)!, now: at });
  assert.equal(first!.correct, false);
  assert.deepEqual(first!.state, { tries: 1, solved: false });
  assert.ok(first!.hint);
  assert.equal(first!.reveal, null);
  const second = await m.puzzle.answerPuzzle({ userId: "u1", level, response: rightFor(key)!, now: at });
  assert.equal(second!.correct, true);
  assert.deepEqual(second!.state, { tries: 2, solved: true });
  assert.ok(second!.reveal);
  assert.equal(second!.streak, 1);
  // Once over, another answer changes nothing.
  const again = await m.puzzle.answerPuzzle({ userId: "u1", level, response: wrongFor(key)!, now: at });
  assert.deepEqual(again!.state, { tries: 2, solved: true });
  assert.equal(again!.correct, true);
  const page = await m.puzzle.getPuzzlePage("u1", level, at);
  assert.deepEqual(page.state, { tries: 2, solved: true });
  assert.ok(page.reveal);
  // The key only reaches a guest at the end.
  const guest = await m.puzzle.answerPuzzle({ userId: null, level, response: wrongFor(key)!, guestTries: 0, now: at });
  assert.equal(guest!.reveal, null);
  const guest2 = await m.puzzle.answerPuzzle({ userId: null, level, response: wrongFor(key)!, guestTries: 1, now: at });
  assert.ok(guest2!.reveal);
  assert.equal(guest2!.state.solved, false);
});

test("an answer that does not fit the puzzle is refused", async () => {
  const level = (["junior", "senior"] as const).find((l) => m.puzzle.puzzleOf("2026-10-28", l).key.kind === "choice");
  if (level) assert.equal(await m.puzzle.answerPuzzle({ userId: "u1", level, response: 99, now: at }), null);
});
