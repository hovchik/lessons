import { test } from "node:test";
import assert from "node:assert/strict";

process.env.ADMIN_SESSION_SECRET ??= "test-secret";

const t = (s: string) => ({ en: s, hy: s, ru: s });
const questions = [
  { prompt: t("2 + 2"), options: [t("3"), t("4")], answer: 1 },
  { prompt: t("3 × 3"), options: [t("9"), t("6")], answer: 0 },
  { prompt: t("10 − 7"), options: [t("2"), t("3")], answer: 1 },
];

test("rate limits block after the budget and open again when the window passes", async () => {
  const { blockedFor, hit, resetRateLimits } = await import("../src/server/rate-limit");
  resetRateLimits();
  const limit = { max: 3, windowMs: 1000 };
  const now = 5_000;
  for (let i = 0; i < 3; i++) {
    assert.equal(blockedFor("k", limit, now), 0);
    hit("k", limit, now);
  }
  assert.equal(blockedFor("k", limit, now + 10), 990);
  assert.equal(blockedFor("other", limit, now), 0, "keys are separate");
  assert.equal(blockedFor("k", limit, now + 1000), 0);
});

test("a refunded try no longer counts", async () => {
  const { blockedFor, hit, refund, resetRateLimits } = await import("../src/server/rate-limit");
  resetRateLimits();
  const limit = { max: 2, windowMs: 1000 };
  hit("r", limit, 0);
  hit("r", limit, 0);
  assert.ok(blockedFor("r", limit, 1) > 0);
  refund("r");
  assert.equal(blockedFor("r", limit, 1), 0);
});

test("the client address is the last forwarded hop, which our own server wrote", async () => {
  const { clientIp } = await import("../src/server/rate-limit");
  const req = (xff?: string) => new Request("http://x/", { headers: xff ? { "x-forwarded-for": xff } : {} });
  assert.equal(clientIp(req("1.2.3.4, 10.0.0.1")), "10.0.0.1");
  assert.equal(clientIp(req("9.9.9.9")), "9.9.9.9");
  assert.equal(clientIp(req()), "unknown");
});

test("a pupil cookie stops working once the password changes", async () => {
  const { createUserToken, verifyUserToken, hashPassword, verifyPassword } = await import("../src/server/user-auth");
  const hash = await hashPassword("secret1");
  assert.equal(await verifyPassword("secret1", hash), true);
  assert.equal(await verifyPassword("secret2", hash), false);
  const token = createUserToken({ id: "abc", passwordHash: hash });
  const v = verifyUserToken(token)!;
  assert.equal(v.id, "abc");
  const newHash = await hashPassword("secret2");
  const fresh = verifyUserToken(createUserToken({ id: "abc", passwordHash: newHash }))!;
  assert.notEqual(v.version, fresh.version, "the old cookie carries the old fingerprint");
  assert.equal(verifyUserToken(token.replace(/.$/, (c) => (c === "A" ? "B" : "A"))), null, "a changed signature");
  assert.equal(verifyUserToken(`admin.${Math.floor(Date.now() / 1000) + 60}.x`), null);
});

test("admin sessions end when ADMIN_PASSWORD changes, and the example password never works", async () => {
  const auth = await import("../src/server/auth");
  process.env.ADMIN_PASSWORD = "first-password";
  const token = auth.createSessionToken();
  assert.equal(auth.verifySessionToken(token), true);
  assert.equal(auth.checkPassword("first-password"), true);
  assert.equal(auth.checkPassword("first-passwor"), false);
  process.env.ADMIN_PASSWORD = "second-password";
  assert.equal(auth.verifySessionToken(token), false);
  process.env.ADMIN_PASSWORD = "choose-a-long-password";
  assert.equal(auth.adminConfigured(), false);
  assert.equal(auth.checkPassword("choose-a-long-password"), false);
  delete process.env.ADMIN_PASSWORD;
});

test("a made-up live-quiz token learns nothing; a removed player is told so", async () => {
  const live = await import("../src/server/live-quiz");
  live.resetLiveGames();
  const now = 1_000_000;
  const { pin, hostToken } = live.openGame("teacher", t("Sums"), questions, 20, now);
  const ani = live.joinGame(pin, "Ani", now) as { token: string; playerId: string };
  assert.equal(live.playerView(pin, "made-up-token-123", now), null);
  assert.equal(live.answer(pin, "made-up-token-123", 0, now).error, "nogame");
  assert.equal(live.hostView(pin, "wrong-host-token", now), null);
  live.hostAct(pin, hostToken, "kick", ani.playerId, now);
  assert.deepEqual(live.playerView(pin, ani.token, now), { kicked: true });
});

test("one teacher keeps at most three open games", async () => {
  const live = await import("../src/server/live-quiz");
  live.resetLiveGames();
  const pins = [1, 2, 3, 4].map((i) => live.openGame("teacher", t("Sums"), questions, 20, 1_000 + i).pin);
  const other = live.openGame("someone-else", t("Sums"), questions, 20, 1_000).pin;
  assert.equal(live.joinGame(pins[0], "Ani", 2_000).error, "nogame", "the oldest was closed");
  for (const pin of [...pins.slice(1), other]) assert.ok(!("error" in live.joinGame(pin, "Ani", 2_000)));
});
