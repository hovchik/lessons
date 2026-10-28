import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { RELEVANCE, relevanceFor } from "../src/content/relevance";
import { courses } from "../src/content";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-reflection-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

test("every unit of every course has a 'why learn this' line in all three languages", () => {
  for (const c of courses) {
    const lines = RELEVANCE[c.subject]?.[c.grade];
    assert.ok(lines, `${c.subject}-${c.grade} has lines`);
    assert.equal(lines.length, c.units.length, `${c.subject}-${c.grade}: one line per unit`);
    for (const line of lines) for (const l of ["en", "hy", "ru"] as const) assert.ok(line[l].trim().length > 20, `${c.subject}-${c.grade}: ${l}`);
  }
  assert.equal(relevanceFor("math", 1, 1), RELEVANCE.math[1][0]);
  assert.equal(relevanceFor("math", 1, 99), null);
  assert.equal(relevanceFor("nope", 1, 1), null);
});

type Modules = { client: typeof import("../src/server/db/client"); reflection: typeof import("../src/server/reflection") };
let m: Modules;
before(async () => {
  m = { client: await import("../src/server/db/client"), reflection: await import("../src/server/reflection") };
  const db = await m.client.getDb();
  const s = m.client.schema;
  const t = { en: "x", hy: "x", ru: "x" };
  await db.insert(s.users).values({ id: "u1", username: "ani", displayName: "Ani", passwordHash: "x" }).run();
  await db.insert(s.subjects).values({ id: "math", name: t, description: t, color: "indigo", icon: "calculator" }).run();
  await db
    .insert(s.courses)
    .values({ id: "math-1", subjectId: "math", grade: 1, title: t, description: t, curriculumNotes: { armenia: t, russia: t }, hoursPerWeek: { armenia: 4, russia: 4 } })
    .run();
  await db.insert(s.units).values({ id: "math-1-u1", courseId: "math-1", position: 1, title: t, summary: t }).run();
});
after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("a pupil's sentence is saved, tidied, replaced and removed", async () => {
  const { saveReflection, getReflections, REFLECTION_MAX } = m.reflection;
  assert.equal(await saveReflection("u1", "math-1-u9", "hi"), false, "unknown unit");
  assert.equal(await saveReflection("u1", "math-1-u1", "  When I   buy\nbread  "), true);
  assert.equal((await getReflections("u1", ["math-1-u1"])).get("math-1-u1"), "When I buy bread");
  await saveReflection("u1", "math-1-u1", "x".repeat(REFLECTION_MAX + 50));
  assert.equal((await getReflections("u1", ["math-1-u1"])).get("math-1-u1")!.length, REFLECTION_MAX);
  await saveReflection("u1", "math-1-u1", "   ");
  assert.equal((await getReflections("u1", ["math-1-u1"])).size, 0);
  assert.equal((await getReflections("u1", [])).size, 0);
});
