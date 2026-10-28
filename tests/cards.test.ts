import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { CARDS, COLLECTIONS, collectionFor } from "../src/content/cards";
import { subjects } from "../src/content";
import { drawCard, RARITY_WEIGHT } from "../src/lib/cards";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lessons-cards-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");

test("every card is complete in three languages, with unique ids, and every subject has a collection", () => {
  const ids = new Set<string>();
  for (const c of CARDS) {
    assert.ok(!ids.has(c.id), c.id);
    ids.add(c.id);
    for (const l of ["en", "hy", "ru"] as const) assert.ok(c.name[l].trim() && c.fact[l].trim().length > 20, `${c.id} ${l}`);
    assert.ok(/։$/.test(c.fact.hy), `${c.id}: Armenian fact ends with ։`);
  }
  for (const col of COLLECTIONS) {
    const of = CARDS.filter((c) => c.collection === col.id);
    assert.equal(of.length, 16, col.id);
    assert.ok(of.some((c) => c.rarity === "epic") && of.some((c) => c.rarity === "rare"), `${col.id} rarities`);
  }
  for (const s of subjects) assert.ok(COLLECTIONS.some((c) => c.subjects.includes(s.id)), `${s.id} has a collection`);
  assert.equal(collectionFor("chess"), "numbers");
});

test("drawing deals unowned cards from the subject's collection, then from others, then none", () => {
  const owned = new Set<string>();
  const seenRarity = { common: 0, rare: 0, epic: 0 };
  for (let i = 0; i < 16; i++) {
    const c = drawCard("science", owned, `u:${i}`)!;
    assert.equal(c.collection, "science");
    assert.ok(!owned.has(c.id));
    owned.add(c.id);
  }
  const spill = drawCard("science", owned, "u:spill")!;
  assert.notEqual(spill.collection, "science", "a full collection spills into another");
  assert.equal(drawCard("science", new Set(CARDS.map((c) => c.id)), "x"), null);
  // Same seed, same card.
  assert.equal(drawCard("arts", new Set(), "a")!.id, drawCard("arts", new Set(), "a")!.id);
  // Rarity follows the weights roughly.
  for (let i = 0; i < 2000; i++) seenRarity[drawCard("nature", new Set(), `s${i}`)!.rarity]++;
  assert.ok(seenRarity.common > seenRarity.rare && seenRarity.rare > seenRarity.epic && seenRarity.epic > 0, JSON.stringify(seenRarity));
  assert.ok(Math.abs(seenRarity.epic / 2000 - RARITY_WEIGHT.epic / 100) < 0.03);
});

type Modules = { client: typeof import("../src/server/db/client"); cards: typeof import("../src/server/cards") };
let m: Modules;
before(async () => {
  m = { client: await import("../src/server/db/client"), cards: await import("../src/server/cards") };
  const db = await m.client.getDb();
  await db.insert(m.client.schema.users).values({ id: "u1", username: "ani", displayName: "Ani", passwordHash: "x" }).run();
});
after(() => fs.rmSync(dir, { recursive: true, force: true }));

test("a pupil with nothing learned has no cards, and seen marks stick", async () => {
  assert.deepEqual(await m.cards.syncCards("u1"), []);
  assert.deepEqual(await m.cards.getAlbum("u1"), []);
  const db = await m.client.getDb();
  await db.insert(m.client.schema.userCards).values({ userId: "u1", cardId: "arts-duduk", skillId: "music-1-u1", createdAt: "2026-10-28T10:00:00Z" }).run();
  assert.equal(await m.cards.countNewCards("u1"), 1);
  const album = await m.cards.getAlbum("u1");
  assert.equal(album[0].card.id, "arts-duduk");
  assert.equal(album[0].isNew, true);
  assert.equal(album[0].shiny, false);
  await m.cards.markCardsSeen("u1", ["arts-duduk"]);
  assert.equal(await m.cards.countNewCards("u1"), 0);
});
