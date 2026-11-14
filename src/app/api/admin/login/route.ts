import { NextResponse } from "next/server";
import { checkPassword, createSessionToken, SESSION_COOKIE, sessionCookieOptions } from "@/server/auth";
import { clientIp, LIMITS, refund, take } from "@/server/rate-limit";

export async function POST(req: Request) {
  const { password } = (await req.json().catch(() => ({}))) as { password?: string };
  // Counted before the check (and given back on success), so parallel guesses are all counted.
  const key = `admin-ip:${clientIp(req)}`;
  const wait = await take(key, LIMITS.adminIp);
  if (wait) {
    const minutes = Math.ceil(wait / 60_000);
    return NextResponse.json({ error: `Too many wrong passwords. Try again in ${minutes} min.` }, { status: 429, headers: { "retry-after": String(Math.ceil(wait / 1000)) } });
  }
  if (typeof password !== "string" || !password || password.length > 500 || !checkPassword(password)) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }
  await refund(key);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, createSessionToken(), sessionCookieOptions(req));
  return res;
}
