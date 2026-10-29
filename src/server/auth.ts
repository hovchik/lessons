import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "lessons_admin";
const TTL_SECONDS = 60 * 60 * 24 * 7;

function secret() {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s) throw new Error("ADMIN_SESSION_SECRET is not set");
  return s;
}

/**
 * The admin cookie's key depends on the admin password too, so changing
 * ADMIN_PASSWORD signs out every admin session, and a pupil cookie (same
 * secret) can never pass for an admin one.
 */
function sign(payload: string) {
  const key = createHmac("sha256", secret()).update(`admin-session\0${process.env.ADMIN_PASSWORD ?? ""}`).digest();
  return createHmac("sha256", key).update(payload).digest("base64url");
}

export function createSessionToken() {
  const exp = Math.floor(Date.now() / 1000) + TTL_SECONDS;
  const payload = `admin.${exp}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const i = token.lastIndexOf(".");
  if (i < 0) return false;
  const payload = token.slice(0, i);
  const sig = token.slice(i + 1);
  const expected = sign(payload);
  if (sig.length !== expected.length) return false;
  if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  const exp = Number(payload.split(".")[1]);
  return Number.isFinite(exp) && exp > Date.now() / 1000;
}

/** The example value from deploy/README.md: never accepted, so a copied setup can't be logged into with it. */
const PLACEHOLDER_PASSWORDS = new Set(["choose-a-long-password"]);

export function adminConfigured() {
  const p = process.env.ADMIN_PASSWORD;
  return !!p && !PLACEHOLDER_PASSWORDS.has(p) && !!process.env.ADMIN_SESSION_SECRET;
}

export function checkPassword(password: string) {
  if (!adminConfigured()) return false;
  // Compare digests so the time taken says nothing about the password's length.
  const digest = (s: string) => createHash("sha256").update(s).digest();
  return timingSafeEqual(digest(password), digest(process.env.ADMIN_PASSWORD!));
}

export async function isAdmin() {
  const store = await cookies();
  return verifySessionToken(store.get(SESSION_COOKIE)?.value);
}

/**
 * Mark cookies Secure only when the request actually came over HTTPS. A
 * production build is often opened over plain http (http://192.168.x.x:3000
 * from a phone or another computer on the home network), and browsers drop
 * Secure cookies there, so the user would be logged out right after logging in.
 */
export function isHttps(req: Request) {
  const forwarded = req.headers.get("x-forwarded-proto");
  if (forwarded) return forwarded.split(",")[0].trim() === "https";
  return new URL(req.url).protocol === "https:";
}

export function sessionCookieOptions(req: Request) {
  return { httpOnly: true, sameSite: "lax" as const, secure: isHttps(req), path: "/", maxAge: TTL_SECONDS };
}
