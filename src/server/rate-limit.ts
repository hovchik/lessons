import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getDb } from "./db/client";

/**
 * Rate limits against password guessing and PIN guessing, kept in SQLite so
 * every server worker (WEB_CONCURRENCY) shares one count.
 *
 * A whole class often comes from one address (the school's router), so the
 * per-address limits count failures only and leave room for 30 pupils.
 */

export type Limit = { max: number; windowMs: number };

const MIN = 60_000;
export const LIMITS = {
  /** Wrong pupil passwords from one address. */
  loginIp: { max: 50, windowMs: 15 * MIN },
  /** Wrong passwords for one username, from anywhere. */
  loginUser: { max: 20, windowMs: 15 * MIN },
  /** New accounts (and "username taken" answers) from one address. */
  signupIp: { max: 100, windowMs: 60 * MIN },
  /** Wrong admin passwords from one address. */
  adminIp: { max: 10, windowMs: 15 * MIN },
  /** Wrong live-quiz PINs from one address. */
  liveJoinIp: { max: 30, windowMs: 10 * MIN },
  /** Live quizzes opened by one account. */
  liveCreateUser: { max: 30, windowMs: 60 * MIN },
} satisfies Record<string, Limit>;

// Short-lived counters, not app data, so the table makes itself instead of
// going through a drizzle migration.
let ready: Promise<Awaited<ReturnType<typeof getDb>>> | null = null;
function table() {
  ready ??= getDb().then(async (db) => {
    await db.run(sql`create table if not exists rate_limits (key text primary key, count integer not null, reset_at integer not null)`);
    return db;
  });
  return ready;
}

let sweptAt = 0;

/**
 * Counts one try against `key` and says how long it must wait: 0 when the try
 * is allowed, else the milliseconds left in the window (and the try is not
 * counted). One statement, so parallel requests can't all slip under the limit.
 */
export async function take(key: string, limit: Limit, now = Date.now()): Promise<number> {
  const db = await table();
  if (now - sweptAt > MIN) {
    sweptAt = now;
    await db.run(sql`delete from rate_limits where reset_at <= ${now}`);
  }
  const [row] = await db.all<{ count: number; reset_at: number }>(sql`
    insert into rate_limits (key, count, reset_at) values (${key}, 1, ${now + limit.windowMs})
    on conflict(key) do update set
      count = case when reset_at <= ${now} then 1 else count + 1 end,
      reset_at = case when reset_at <= ${now} then excluded.reset_at else reset_at end
    returning count, reset_at`);
  if (row.count <= limit.max) return 0;
  await refund(key);
  return row.reset_at - now;
}

/** Takes back one try counted against `key` (it was counted before a check that then passed). */
export async function refund(key: string) {
  const db = await table();
  await db.run(sql`update rate_limits set count = count - 1 where key = ${key} and count > 0`);
}

/** For tests. */
export async function resetRateLimits() {
  const db = await table();
  await db.run(sql`delete from rate_limits`);
}

/**
 * The client's address: the last X-Forwarded-For entry, which is the one our
 * own server added (Caddy behind docker-compose, or server.mjs from the
 * socket), never one a client could have typed in.
 */
export function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  const last = xff?.split(",").pop()?.trim();
  return last || req.headers.get("x-real-ip") || "unknown";
}

export function tooMany(ms: number) {
  return NextResponse.json({ error: "too_many" }, { status: 429, headers: { "retry-after": String(Math.ceil(ms / 1000)) } });
}
