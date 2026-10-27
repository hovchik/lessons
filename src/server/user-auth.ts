import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { cache } from "react";
import { isHttps } from "./auth";
import { getDb, schema } from "./db/client";
import type { User } from "./db/schema";

/**
 * Student accounts. Separate from the admin login (src/server/auth.ts): a pupil
 * signs up with a username and password, gets a signed cookie, and the cookie
 * is checked against the users table on every request so an admin can disable
 * an account immediately.
 */
export const USER_COOKIE = "lessons_user";
const TTL_SECONDS = 60 * 60 * 24 * 30;

export const USERNAME_RE = /^[a-z0-9_.-]{3,24}$/;
export const MIN_PASSWORD = 4;

function secret() {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s) throw new Error("ADMIN_SESSION_SECRET is not set");
  return s;
}

export function accountsConfigured() {
  return !!process.env.ADMIN_SESSION_SECRET;
}

/* ---------------------------------------------------------------- passwords */

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("base64url");
  const hash = scryptSync(password.normalize("NFKC"), salt, 32).toString("base64url");
  return `scrypt$${salt}$${hash}`;
}

export function verifyPassword(password: string, stored: string) {
  const [algo, salt, hash] = stored.split("$");
  if (algo !== "scrypt" || !salt || !hash) return false;
  const expected = Buffer.from(hash, "base64url");
  const actual = scryptSync(password.normalize("NFKC"), salt, expected.length);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

/* ------------------------------------------------------------------ tokens */

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

/** Signs a payload with the server secret (for values the browser must hand back unchanged). */
export function signValue(payload: string) {
  return sign(payload);
}

/** True when `sig` is the server's signature of `payload`. */
export function checkSignature(payload: string, sig: string) {
  if (!accountsConfigured()) return false;
  const expected = sign(payload);
  return sig.length === expected.length && timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}

export function createUserToken(userId: string) {
  const exp = Math.floor(Date.now() / 1000) + TTL_SECONDS;
  const payload = `user.${userId}.${exp}`;
  return `${payload}.${sign(payload)}`;
}

/** Returns the user id when the token is well formed, correctly signed and not expired. */
export function verifyUserToken(token: string | undefined): string | null {
  if (!token || !accountsConfigured()) return null;
  const i = token.lastIndexOf(".");
  if (i < 0) return null;
  const payload = token.slice(0, i);
  const sig = token.slice(i + 1);
  const expected = sign(payload);
  if (sig.length !== expected.length) return null;
  if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  const parts = payload.split(".");
  if (parts.length !== 3 || parts[0] !== "user") return null;
  const exp = Number(parts[2]);
  if (!Number.isFinite(exp) || exp <= Date.now() / 1000) return null;
  return parts[1];
}

/** Secure only over HTTPS; see isHttps in ./auth for why. */
export function userCookieOptions(req: Request) {
  return { httpOnly: true, sameSite: "lax" as const, secure: isHttps(req), path: "/", maxAge: TTL_SECONDS };
}

/* ------------------------------------------------------------------- users */

export function newId() {
  return randomBytes(12).toString("base64url");
}

export function normalizeUsername(raw: string) {
  return raw.trim().toLowerCase();
}

/** What the UI is allowed to see about a signed-in user (never the password hash). */
export type PublicUser = Pick<User, "id" | "username" | "displayName" | "grade" | "locale" | "role">;

export function toPublicUser(u: User): PublicUser {
  return { id: u.id, username: u.username, displayName: u.displayName, grade: u.grade, locale: u.locale, role: u.role };
}

export async function findUserByUsername(username: string) {
  const db = await getDb();
  return db.select().from(schema.users).where(eq(schema.users.username, normalizeUsername(username))).get();
}

export async function findUserById(id: string) {
  const db = await getDb();
  return db.select().from(schema.users).where(eq(schema.users.id, id)).get();
}

/**
 * The signed-in student for the current request, or null. Cached per request
 * so layout, header and page share one lookup. Disabled accounts are treated
 * as signed out.
 */
export const getCurrentUser = cache(async (): Promise<PublicUser | null> => {
  const store = await cookies();
  const id = verifyUserToken(store.get(USER_COOKIE)?.value);
  if (!id) return null;
  const user = await findUserById(id);
  if (!user || user.disabled) return null;
  return toPublicUser(user);
});

/** Stamp last_seen_at at most once a minute per user (cheap, best-effort). */
const lastSeenStamp = new Map<string, number>();
export async function touchLastSeen(userId: string) {
  const now = Date.now();
  if ((lastSeenStamp.get(userId) ?? 0) > now - 60_000) return;
  lastSeenStamp.set(userId, now);
  const db = await getDb();
  await db.update(schema.users).set({ lastSeenAt: new Date(now).toISOString() }).where(eq(schema.users.id, userId)).run();
}
