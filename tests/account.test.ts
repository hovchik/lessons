import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { NextRequest } from "next/server";
import { cleanText, weakPassword } from "../src/lib/account";
import { cleanName } from "../src/lib/live-quiz";

process.env.ADMIN_SESSION_SECRET ??= "test-secret";
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-account-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

type Modules = {
  client: typeof import("../src/server/db/client");
  account: typeof import("../src/server/account");
  auth: typeof import("../src/server/user-auth");
  classes: typeof import("../src/server/classes");
  limits: typeof import("../src/server/rate-limit");
};
let m: Modules;
const req = () => new Request("http://x/api/account", { method: "POST", headers: { "x-forwarded-for": "10.0.0.7" } });

before(async () => {
  m = {
    client: await import("../src/server/db/client"),
    account: await import("../src/server/account"),
    auth: await import("../src/server/user-auth"),
    classes: await import("../src/server/classes"),
    limits: await import("../src/server/rate-limit"),
  };
  const db = await m.client.getDb();
  await db
    .insert(m.client.schema.users)
    .values([
      { id: "ani", username: "ani", displayName: "Ani", passwordHash: await m.auth.hashPassword("blue-river-7") },
      { id: "teacher", username: "teacher", displayName: "Ms Teacher", passwordHash: "x" },
    ])
    .run();
});

after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("names lose hidden and direction characters, and a name with nothing readable is empty", () => {
  assert.equal(cleanText("  Անի   Պետրոսյան ", 60), "Անի Պետրոսյան");
  assert.equal(cleanText("An‮i​\u0007", 60), "Ani", "override, zero-width space and bell are gone");
  assert.equal(cleanText("​⁠﻿", 60), "");
  assert.equal(cleanText("...", 60), "", "no letter, digit or picture");
  assert.equal(cleanText("Аня 🙂", 60), "Аня 🙂");
  assert.equal(cleanText("x".repeat(100), 60).length, 60);
  assert.equal(cleanName("‮evilenaN"), "evilenaN", "live-quiz nicknames use the same rule");
});

test("easy passwords are refused, ordinary ones are not", () => {
  for (const p of ["123456", "QWERTY", "password1", "aaaaaaa", "abcdefg", "987654321", "йцукен", "Пароль"]) assert.equal(weakPassword(p), "password_common", p);
  assert.equal(weakPassword("ani2015", "ani"), "password_common", "the username plus a year");
  assert.equal(weakPassword("ANI123", "ani"), "password_common");
  for (const p of ["blue-river-7", "երեք կարմիր խնձոր", "tigr94Xm", "135790"]) assert.equal(weakPassword(p, "ani"), null, p);
  assert.equal(weakPassword("animals-are-great", "ani"), null, "a long password may contain the name");
});

test("a new password needs the current one, and signs out the old cookie", async () => {
  await m.limits.resetRateLimits();
  const before = (await m.auth.findUserById("ani"))!;
  const oldToken = m.auth.verifyUserToken(m.auth.createUserToken(before))!;

  assert.deepEqual(await m.account.checkCurrentPassword(req(), "ani", "wrong-guess"), { error: "wrong_current" });
  assert.equal(m.account.newPasswordProblem("abc", "ani"), "password_short");
  assert.equal(m.account.newPasswordProblem("qwerty123", "ani"), "password_common");
  assert.equal(m.account.newPasswordProblem("green-hill-42", "ani"), null);

  const ok = await m.account.checkCurrentPassword(req(), "ani", "blue-river-7");
  assert.ok("user" in ok);
  const after = await m.account.setPassword("ani", "green-hill-42");
  assert.equal(await m.auth.verifyPassword("green-hill-42", after.passwordHash), true);
  assert.equal(await m.auth.verifyPassword("blue-river-7", after.passwordHash), false);
  const newToken = m.auth.verifyUserToken(m.auth.createUserToken(after))!;
  assert.notEqual(oldToken.version, newToken.version, "the old cookie no longer matches the account");
});

test("signing out everywhere keeps the password but ends the other cookies", async () => {
  const before = (await m.auth.findUserById("ani"))!;
  const other = m.auth.verifyUserToken(m.auth.createUserToken(before))!;
  const after = await m.account.setPassword("ani", "green-hill-42");
  assert.equal(await m.auth.verifyPassword("green-hill-42", after.passwordHash), true);
  assert.notEqual(m.auth.verifyUserToken(m.auth.createUserToken(after))!.version, other.version);
});

test("guessing the current password runs into the login limit", async () => {
  await m.limits.resetRateLimits();
  let last: Awaited<ReturnType<typeof m.account.checkCurrentPassword>> | null = null;
  for (let i = 0; i <= m.limits.LIMITS.loginUser.max; i++) last = await m.account.checkCurrentPassword(req(), "ani", `guess-${i}`);
  assert.ok(last && "error" in last && last.error === "too_many" && (last.retryAfterMs ?? 0) > 0);
  const right = await m.account.checkCurrentPassword(req(), "ani", "green-hill-42");
  assert.ok("error" in right && right.error === "too_many", "even the right password waits once the limit is hit");
  await m.limits.resetRateLimits();
});

test("deleting an account removes its classes, memberships and parent link", async () => {
  const db = await m.client.getDb();
  const { schema } = m.client;
  const made = await m.classes.createClass("teacher", "5B");
  if (!("class" in made)) throw new Error("class not created");
  await m.classes.joinClass("ani", made.class.code);
  const token = await m.classes.newParentLink("ani");
  assert.ok(await m.classes.pupilForToken(token));

  await m.account.deleteAccount("ani");
  assert.equal(await m.auth.findUserById("ani"), undefined);
  assert.equal(await m.classes.pupilForToken(token), null, "the parent link stops working");
  assert.equal((await db.select().from(schema.classMembers).all()).length, 0);
  assert.deepEqual(await m.account.checkCurrentPassword(req(), "ani", "green-hill-42"), { error: "gone" });

  await m.account.deleteAccount("teacher");
  assert.equal((await db.select().from(schema.classes).all()).length, 0, "a teacher's classes go with the teacher");
});

test("an API write without a length is refused, so the size limit can't be skipped", async () => {
  const { default: middleware } = await import("../src/middleware");
  const call = (headers: Record<string, string>) => middleware(new NextRequest("http://localhost/api/reflection", { method: "POST", headers: { host: "localhost", ...headers } }));
  assert.equal(call({ "transfer-encoding": "chunked" }).status, 411);
  assert.equal(call({ "content-length": "2000000" }).status, 413);
  assert.equal(call({ "content-length": "200" }).status, 200);
  assert.equal(call({ "content-length": "200", origin: "https://evil.example" }).status, 403);
});
