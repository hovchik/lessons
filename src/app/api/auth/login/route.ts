import { NextResponse } from "next/server";
import { z } from "zod";
import { blockedFor, clientIp, hit, LIMITS, tooMany } from "@/server/rate-limit";
import {
  accountsConfigured,
  burnPasswordCheck,
  createUserToken,
  findUserByUsername,
  normalizeUsername,
  toPublicUser,
  touchLastSeen,
  USER_COOKIE,
  userCookieOptions,
  verifyPassword,
} from "@/server/user-auth";

const Body = z.object({ username: z.string().min(1).max(64), password: z.string().min(1).max(200) });

export async function POST(req: Request) {
  if (!accountsConfigured()) return NextResponse.json({ error: "not_configured" }, { status: 503 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const ipKey = `login-ip:${clientIp(req)}`;
  const userKey = `login-user:${normalizeUsername(parsed.data.username)}`;
  const wait = Math.max(blockedFor(ipKey, LIMITS.loginIp), blockedFor(userKey, LIMITS.loginUser));
  if (wait) return tooMany(wait);
  const user = await findUserByUsername(parsed.data.username);
  const ok = user ? await verifyPassword(parsed.data.password, user.passwordHash) : (await burnPasswordCheck(parsed.data.password), false);
  if (!user || !ok) {
    hit(ipKey, LIMITS.loginIp);
    hit(userKey, LIMITS.loginUser);
    return NextResponse.json({ error: "wrong_credentials" }, { status: 401 });
  }
  if (user.disabled) return NextResponse.json({ error: "disabled" }, { status: 403 });
  await touchLastSeen(user.id);
  const res = NextResponse.json({ user: toPublicUser(user) });
  res.cookies.set(USER_COOKIE, createUserToken(user), userCookieOptions(req));
  return res;
}
