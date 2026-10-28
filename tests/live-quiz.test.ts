import { before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { LIVE_MAX_PLAYERS, cleanName, leaderboard, livePoints, makePin, questionOver, uniqueName } from "../src/lib/live-quiz";
import type { LiveQuestion } from "../src/server/live-quiz";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-live-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");
let live: typeof import("../src/server/live-quiz");
before(async () => {
  live = await import("../src/server/live-quiz");
});

test("points reward right answers, and speed only on top of being right", () => {
  assert.equal(livePoints(false, 0, 20000), 0);
  assert.equal(livePoints(true, 0, 20000), 1000);
  assert.equal(livePoints(true, 10000, 20000), 750);
  assert.equal(livePoints(true, 25000, 20000), 500);
});

test("names are tidied and made unique", () => {
  assert.equal(cleanName("  Ani \n  B. "), "Ani B.");
  assert.equal(cleanName("\u0000\u0007"), "");
  assert.equal([...cleanName("x".repeat(50))].length, 20);
  assert.equal(uniqueName("Ani", ["ani"]), "Ani 2");
  assert.equal(uniqueName("Ani", ["Ani", "Ani 2"]), "Ani 3");
  assert.ok(uniqueName("x".repeat(20), ["x".repeat(20)]).length <= 20);
});

test("leaderboard shares ranks on equal scores and breaks ties by who joined first", () => {
  const b = leaderboard([
    { id: "a", name: "A", score: 500, joinedAt: 2 },
    { id: "b", name: "B", score: 900, joinedAt: 3 },
    { id: "c", name: "C", score: 500, joinedAt: 1 },
  ]);
  assert.deepEqual(b.map((x) => [x.id, x.rank]), [["b", 1], ["c", 2], ["a", 2]]);
  assert.equal(questionOver(5, 10, 2, 2), true);
  assert.equal(questionOver(5, 10, 1, 2), false);
  assert.equal(questionOver(10, 10, 0, 2), true);
  assert.equal(questionOver(5, 10, 0, 0), false);
  for (let i = 0; i < 50; i++) assert.match(makePin(), /^[1-9]\d{5}$/);
});

const t = (s: string) => ({ en: s, hy: s, ru: s });
const questions: LiveQuestion[] = [
  { prompt: t("2 + 2"), options: [t("3"), t("4"), t("5"), t("6")], answer: 1 },
  { prompt: t("3 × 3"), options: [t("9"), t("6")], answer: 0 },
  { prompt: t("10 − 7"), options: [t("2"), t("3"), t("4")], answer: 1 },
];

test("a whole game: lobby, questions, reveals and podium, with the key hidden until each reveal", async () => {
  const { answer, hostAct, hostView, joinGame, openGame, playerView, resetLiveGames } = live;
  await resetLiveGames();
  let now = 1_000_000;
  const { pin, hostToken } = (await openGame("teacher", t("Sums"), questions, 20, now));
  assert.equal((await hostAct(pin, hostToken, "start", undefined, now)).error, "empty", "no one to play with yet");
  const ani = (await joinGame(pin, "Ani", now)) as { token: string; playerId: string };
  const ani2 = (await joinGame(pin, "ani", now + 1)) as { token: string; name: string };
  assert.equal(ani2.name, "ani 2");
  assert.equal((await joinGame("000000", "X")).error, "nogame");
  assert.equal((await joinGame(pin, "   ")).error, "name");
  assert.equal((await hostAct(pin, "wrong-token", "start")).error, "nogame", "only the host moves the game");

  assert.equal((await hostAct(pin, hostToken, "start", undefined, now)).ok, true);
  let pv = (await playerView(pin, ani.token, now))!;
  assert.ok(!pv.kicked);
  assert.equal(pv.phase, "question");
  assert.equal(JSON.stringify(pv).includes('"answer"'), false, "no key while the question is open");

  now += 5000;
  assert.equal((await answer(pin, ani.token, 1, now)).ok, true);
  assert.equal((await answer(pin, ani.token, 2, now)).error, "closed", "one answer per question");
  assert.equal((await hostView(pin, hostToken, now))!.phase, "question", "still waiting for ani 2");
  await answer(pin, ani2.token, 0, now);
  const hv = (await hostView(pin, hostToken, now))!;
  assert.equal(hv.phase, "reveal", "closes once everyone answered");
  assert.deepEqual(hv.reveal!.counts, [1, 1, 0, 0]);
  pv = (await playerView(pin, ani.token, now))! as typeof pv;
  assert.equal(pv.reveal!.points, 875);
  assert.equal(pv.me.rank, 1);

  await hostAct(pin, hostToken, "next", undefined, now);
  now += 21000; // nobody answers in time
  assert.equal((await hostView(pin, hostToken, now))!.phase, "reveal", "time up closes the question");
  assert.equal((await answer(pin, ani.token, 0, now)).error, "closed");
  await hostAct(pin, hostToken, "next", undefined, now);
  await hostAct(pin, hostToken, "kick", (ani2 as unknown as { playerId: string }).playerId, now);
  assert.deepEqual((await playerView(pin, ani2.token, now)), { kicked: true });
  await hostAct(pin, hostToken, "reveal", undefined, now);
  await hostAct(pin, hostToken, "next", undefined, now);
  const end = (await playerView(pin, ani.token, now))! as typeof pv;
  assert.equal(end.phase, "podium");
  assert.deepEqual(end.podium!.map((p) => p.name), ["Ani"]);
  assert.equal((await joinGame(pin, "Late")).error, "over");
});

test("answers sent at the same moment are all counted, in a full game (games are shared by every server worker)", async () => {
  const { answer, hostAct, hostView, joinGame, openGame } = live;
  const now = 2_000_000;
  const { pin, hostToken } = await openGame("teacher", t("Sums"), questions, 20, now);
  const players = await Promise.all(Array.from({ length: LIVE_MAX_PLAYERS }, (_, i) => joinGame(pin, `P${i}`, now)));
  assert.equal(new Set(players.map((p) => p.name)).size, LIVE_MAX_PLAYERS);
  await hostAct(pin, hostToken, "start", undefined, now);
  const results = await Promise.all(players.map((p, i) => answer(pin, p.token!, i % 2, now + 1000)));
  assert.ok(results.every((r) => r.ok));
  const hv = (await hostView(pin, hostToken, now + 1000))!;
  assert.equal(hv.phase, "reveal");
  assert.equal(hv.players.length, LIVE_MAX_PLAYERS);
  assert.deepEqual(hv.reveal!.counts, [LIVE_MAX_PLAYERS / 2, LIVE_MAX_PLAYERS / 2, 0, 0]);
});
