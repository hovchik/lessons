import assert from "node:assert/strict";
import { before, beforeEach, test } from "node:test";

// A browser-like localStorage and fetch for src/lib/outbox.ts.
const store = new Map<string, string>();
(globalThis as unknown as { localStorage: Storage }).localStorage = {
  getItem: (k: string) => store.get(k) ?? null,
  setItem: (k: string, v: string) => void store.set(k, v),
  removeItem: (k: string) => void store.delete(k),
} as Storage;
let online = false;
const sent: unknown[] = [];
globalThis.fetch = (async (_url: string, init?: RequestInit) => {
  if (!online) throw new TypeError("Failed to fetch");
  sent.push(JSON.parse(String(init?.body)));
  return new Response("{}", { status: 200 });
}) as typeof fetch;

let outbox: typeof import("../src/lib/outbox");
before(async () => {
  outbox = await import("../src/lib/outbox");
});

beforeEach(() => {
  store.clear();
  sent.length = 0;
});

test("offline saves wait in the browser and go out in order when the connection is back", async () => {
  online = false;
  assert.equal(await outbox.postOrQueue("/api/progress/quiz", { n: 1 }), "queued");
  assert.equal(await outbox.postOrQueue("/api/progress/complete", { n: 2 }), "queued");
  assert.equal(outbox.pendingCount(), 2);
  assert.equal(await outbox.flushOutbox(), 0, "still offline: nothing goes, nothing is lost");
  assert.equal(outbox.pendingCount(), 2);
  online = true;
  assert.equal(await outbox.flushOutbox(), 2);
  assert.deepEqual(sent, [{ n: 1 }, { n: 2 }]);
  assert.equal(outbox.pendingCount(), 0);
  const res = await outbox.postOrQueue("/api/progress/quiz", { n: 3 });
  assert.ok(res !== "queued" && res.ok, "online: sent straight away");
});

test("on log-out, what can't be sent is dropped rather than saved to the next account", async () => {
  online = false;
  await outbox.postOrQueue("/api/progress/quiz", { n: 1 });
  await outbox.settleOutbox();
  assert.equal(outbox.pendingCount(), 0);
  online = true;
  assert.equal(await outbox.flushOutbox(), 0);
  assert.deepEqual(sent, []);
});
