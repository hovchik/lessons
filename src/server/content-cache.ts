import { sql } from "drizzle-orm";
import { getDb, schema } from "./db/client";

/**
 * Course content (subjects, courses, lessons, tips, exams) kept in memory between requests.
 *
 * Content only changes when an admin edits it, Claude generates a lesson, or the seed runs, and
 * each of those calls contentChanged(). That raises `content_version` in the database, so every
 * server worker (server.mjs runs several) notices within a second and starts afresh; the worker
 * that made the change starts afresh at once.
 *
 * Callers share the cached objects: treat them as read-only.
 */

const KEY = "content_version";
const CHECK_MS = 1000;

type Store = { version: number | null; checkedAt: number; checking: Promise<void> | null; groups: Map<string, Map<string, Promise<unknown>>> };
// One store per worker process, even when Next bundles this module into several chunks.
const g = globalThis as unknown as { __contentCache?: Store };
const store: Store = (g.__contentCache ??= { version: null, checkedAt: 0, checking: null, groups: new Map() });

async function readVersion() {
  const db = await getDb();
  const row = await db.select({ value: schema.appMeta.value }).from(schema.appMeta).where(sql`${schema.appMeta.key} = ${KEY}`).get();
  return row?.value ?? 0;
}

/** Drops everything when another worker (or the seed) changed the content. Checks at most once a second. */
async function sync() {
  if (Date.now() - store.checkedAt < CHECK_MS) return;
  store.checking ??= (async () => {
    try {
      const v = await readVersion();
      if (v !== store.version) {
        store.groups.clear();
        store.version = v;
      }
      store.checkedAt = Date.now();
    } finally {
      store.checking = null;
    }
  })();
  await store.checking;
}

/**
 * Returns the cached result of `load` for this key, loading it once. A group keeps at most `max`
 * entries and drops the least recently used one beyond that.
 */
export async function cachedContent<T>(group: string, key: string, max: number, load: () => Promise<T>): Promise<T> {
  await sync();
  let entries = store.groups.get(group);
  if (!entries) store.groups.set(group, (entries = new Map()));
  const hit = entries.get(key) as Promise<T> | undefined;
  if (hit) {
    entries.delete(key);
    entries.set(key, hit);
    return hit;
  }
  const version = store.version;
  const p = load();
  entries.set(key, p);
  // A failed load is not kept, and neither is one that raced with a content change.
  p.then(
    () => version !== store.version && entries.get(key) === p && entries.delete(key),
    () => entries.get(key) === p && entries.delete(key),
  );
  if (entries.size > max) entries.delete(entries.keys().next().value!);
  return p;
}

/** Call after any change to subjects, courses, units, lessons, tips or exams. */
export async function contentChanged() {
  const db = await getDb();
  await db
    .insert(schema.appMeta)
    .values({ key: KEY, value: 1 })
    .onConflictDoUpdate({ target: schema.appMeta.key, set: { value: sql`${schema.appMeta.value} + 1` } })
    .run();
  store.groups.clear();
  store.version = await readVersion();
  store.checkedAt = Date.now();
}
