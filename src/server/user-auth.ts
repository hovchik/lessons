import { createHash, createHmac, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
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
/** For new passwords; older, shorter ones keep working. */
export const MIN_PASSWORD = 6;

function secret() {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s) throw new Error("ADMIN_SESSION_SECRET is not set");
  return s;
}

export function accountsConfigured() {
  return !!process.env.ADMIN_SESSION_SECRET;
}

/* ---------------------------------------------------------------- passwords */

// Async so a login doesn't hold up every other request while it hashes (about 45 ms).
const scryptAsync = promisify(scrypt) as (password: string, salt: string, keylen: number) => Promise<Buffer>;

export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("base64url");
  const hash = (await scryptAsync(password.normalize("NFKC"), salt, 32)).toString("base64url");
  return `scrypt$${salt}$${hash}`;
}

export async function verifyPassword(password: string, stored: string) {
  const [algo, salt, hash] = stored.split("$");
  if (algo !== "scrypt" || !salt || !hash) return false;
  const expected = Buffer.from(hash, "base64url");
  const actual = await scryptAsync(password.normalize("NFKC"), salt, expected.length);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

/** Checked against when the username doesn't exist, so a wrong username takes as long as a wrong password. */
const DUMMY_HASH = `scrypt$${randomBytes(16).toString("base64url")}$${randomBytes(32).toString("base64url")}`;
export async function burnPasswordCheck(password: string) {
  await verifyPassword(password, DUMMY_HASH);
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

/**
 * A short fingerprint of the password hash, carried in the cookie: a new
 * password (the pupil's or an admin reset) changes it and so signs out every
 * other device.
 */
function passwordVersion(passwordHash: string) {
  return createHash("sha256").update(passwordHash).digest("base64url").slice(0, 10);
}

export function createUserToken(user: Pick<User, "id" | "passwordHash">) {
  const exp = Math.floor(Date.now() / 1000) + TTL_SECONDS;
  const payload = `user.${user.id}.${exp}.${passwordVersion(user.passwordHash)}`;
  return `${payload}.${sign(payload)}`;
}

/**
 * The user id (and password fingerprint) when the token is well formed,
 * correctly signed and not expired. Tokens from before the fingerprint have
 * no `version`; they run out on their own within 30 days.
 */
export function verifyUserToken(token: string | undefined): { id: string; version: string | null } | null {
  if (!token || !accountsConfigured()) return null;
  const i = token.lastIndexOf(".");
  if (i < 0) return null;
  const payload = token.slice(0, i);
  const sig = token.slice(i + 1);
  const expected = sign(payload);
  if (sig.length !== expected.length) return null;
  if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  const parts = payload.split(".");
  if ((parts.length !== 3 && parts.length !== 4) || parts[0] !== "user") return null;
  const exp = Number(parts[2]);
  if (!Number.isFinite(exp) || exp <= Date.now() / 1000) return null;
  return { id: parts[1], version: parts[3] ?? null };
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
 * so layout, header and page share one lookup. Disabled accounts, and cookies
 * from before a password change, are treated as signed out.
 */
export const getCurrentUser = cache(async (): Promise<PublicUser | null> => {
  const store = await cookies();
  const token = verifyUserToken(store.get(USER_COOKIE)?.value);
  if (!token) return null;
  const user = await findUserById(token.id);
  if (!user || user.disabled) return null;
  if (token.version !== null && token.version !== passwordVersion(user.passwordHash)) return null;
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
