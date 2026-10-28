import { NextResponse } from "next/server";

/**
 * Small in-memory rate limits against password guessing and PIN guessing.
 * Counted per server process: with several workers (WEB_CONCURRENCY) each
 * keeps its own counts, which only makes the limits a few times looser.
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

type Bucket = { count: number; resetAt: number };
const MAX_KEYS = 50_000;
const buckets = ((globalThis as { __rateBuckets?: Map<string, Bucket> }).__rateBuckets ??= new Map<string, Bucket>());

function sweep(now: number) {
  for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k);
  // Still full (a flood of distinct keys): drop the oldest.
  for (const k of buckets.keys()) {
    if (buckets.size <= MAX_KEYS * 0.9) break;
    buckets.delete(k);
  }
}

/** Milliseconds until `key` may try again, or 0 when it is under its limit. */
export function blockedFor(key: string, limit: Limit, now = Date.now()): number {
  const b = buckets.get(key);
  if (!b || b.resetAt <= now) return 0;
  return b.count >= limit.max ? b.resetAt - now : 0;
}

/** Counts one try against `key`. */
export function hit(key: string, limit: Limit, now = Date.now()) {
  const b = buckets.get(key);
  if (b && b.resetAt > now) {
    b.count++;
    return;
  }
  if (buckets.size >= MAX_KEYS) sweep(now);
  buckets.set(key, { count: 1, resetAt: now + limit.windowMs });
}

/** Forgets the tries counted against `key`. */
export function clear(key: string) {
  buckets.delete(key);
}

/** For tests. */
export function resetRateLimits() {
  buckets.clear();
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
