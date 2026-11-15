import { eq } from "drizzle-orm";
import { weakPassword } from "@/lib/account";
import { getDb, schema } from "./db/client";
import { clientIp, LIMITS, refund, take } from "./rate-limit";
import { findUserById, hashPassword, MIN_PASSWORD, verifyPassword } from "./user-auth";
import type { User } from "./db/schema";

/**
 * What a signed-in pupil can do to their own account: a new password, signing
 * out every other device, and deleting the account. Each one asks for the
 * current password first, so a borrowed phone or a copied cookie isn't enough.
 */

export type AccountError = "wrong_current" | "too_many" | "password_short" | "password_common" | "gone";
type Checked = { user: User } | { error: AccountError; retryAfterMs?: number };

/** The account when `current` is its password; tries count against the same limits as logging in. */
export async function checkCurrentPassword(req: Request, userId: string, current: string): Promise<Checked> {
  const user = await findUserById(userId);
  if (!user || user.disabled) return { error: "gone" };
  const ipKey = `login-ip:${clientIp(req)}`;
  const userKey = `login-user:${user.username}`;
  const ipWait = await take(ipKey, LIMITS.loginIp);
  if (ipWait) return { error: "too_many", retryAfterMs: ipWait };
  const userWait = await take(userKey, LIMITS.loginUser);
  if (userWait) {
    await refund(ipKey);
    return { error: "too_many", retryAfterMs: userWait };
  }
  if (!(await verifyPassword(current, user.passwordHash))) return { error: "wrong_current" };
  await Promise.all([refund(ipKey), refund(userKey)]);
  return { user };
}

/** Why a new password won't do, or null. */
export function newPasswordProblem(password: string, username: string): AccountError | null {
  if (password.length < MIN_PASSWORD) return "password_short";
  return weakPassword(password, username);
}

/**
 * Stores a new hash for the password. The cookie carries a fingerprint of the
 * hash, so every device but the one that gets the new cookie is signed out,
 * even when the password itself stays the same (a new salt, a new hash).
 */
export async function setPassword(userId: string, password: string): Promise<User> {
  const db = await getDb();
  await db.update(schema.users).set({ passwordHash: await hashPassword(password) }).where(eq(schema.users.id, userId)).run();
  return (await findUserById(userId))!;
}

/** Deletes the account and, through the foreign keys, everything kept about it. */
export async function deleteAccount(userId: string) {
  const db = await getDb();
  await db.delete(schema.users).where(eq(schema.users.id, userId)).run();
}
