import { test } from "node:test";
import assert from "node:assert/strict";
import { cleanName, leaderboard, livePoints, makePin, questionOver, uniqueName } from "../src/lib/live-quiz";
import { answer, hostAct, hostView, joinGame, openGame, playerView, resetLiveGames, type LiveQuestion } from "../src/server/live-quiz";

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

test("a whole game: lobby, questions, reveals and podium, with the key hidden until each reveal", () => {
  resetLiveGames();
  let now = 1_000_000;
  const { pin, hostToken } = openGame("teacher", t("Sums"), questions, 20, now);
  assert.equal(hostAct(pin, hostToken, "start", undefined, now).error, "empty", "no one to play with yet");
  const ani = joinGame(pin, "Ani", now) as { token: string; playerId: string };
  const ani2 = joinGame(pin, "ani", now + 1) as { token: string; name: string };
  assert.equal(ani2.name, "ani 2");
  assert.equal(joinGame("000000", "X").error, "nogame");
  assert.equal(joinGame(pin, "   ").error, "name");
  assert.equal(hostAct(pin, "wrong-token", "start").error, "nogame", "only the host moves the game");

  assert.equal(hostAct(pin, hostToken, "start", undefined, now).ok, true);
  let pv = playerView(pin, ani.token, now)!;
  assert.ok(!pv.kicked);
  assert.equal(pv.phase, "question");
  assert.equal(JSON.stringify(pv).includes('"answer"'), false, "no key while the question is open");

  now += 5000;
  assert.equal(answer(pin, ani.token, 1, now).ok, true);
  assert.equal(answer(pin, ani.token, 2, now).error, "closed", "one answer per question");
  assert.equal(hostView(pin, hostToken, now)!.phase, "question", "still waiting for ani 2");
  answer(pin, ani2.token, 0, now);
  const hv = hostView(pin, hostToken, now)!;
  assert.equal(hv.phase, "reveal", "closes once everyone answered");
  assert.deepEqual(hv.reveal!.counts, [1, 1, 0, 0]);
  pv = playerView(pin, ani.token, now)! as typeof pv;
  assert.equal(pv.reveal!.points, 875);
  assert.equal(pv.me.rank, 1);

  hostAct(pin, hostToken, "next", undefined, now);
  now += 21000; // nobody answers in time
  assert.equal(hostView(pin, hostToken, now)!.phase, "reveal", "time up closes the question");
  assert.equal(answer(pin, ani.token, 0, now).error, "closed");
  hostAct(pin, hostToken, "next", undefined, now);
  hostAct(pin, hostToken, "kick", (ani2 as unknown as { playerId: string }).playerId, now);
  assert.deepEqual(playerView(pin, ani2.token, now), { kicked: true });
  hostAct(pin, hostToken, "reveal", undefined, now);
  hostAct(pin, hostToken, "next", undefined, now);
  const end = playerView(pin, ani.token, now)! as typeof pv;
  assert.equal(end.phase, "podium");
  assert.deepEqual(end.podium!.map((p) => p.name), ["Ani"]);
  assert.equal(joinGame(pin, "Late").error, "over");
});
