import { NextResponse } from "next/server";
import { z } from "zod";
import { accountsConfigured, createUserToken, findUserByUsername, toPublicUser, touchLastSeen, USER_COOKIE, userCookieOptions, verifyPassword } from "@/server/user-auth";

const Body = z.object({ username: z.string().min(1).max(64), password: z.string().min(1).max(200) });

export async function POST(req: Request) {
  if (!accountsConfigured()) return NextResponse.json({ error: "not_configured" }, { status: 503 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const user = await findUserByUsername(parsed.data.username);
  if (!user || !verifyPassword(parsed.data.password, user.passwordHash)) {
    return NextResponse.json({ error: "wrong_credentials" }, { status: 401 });
  }
  if (user.disabled) return NextResponse.json({ error: "disabled" }, { status: 403 });
  await touchLastSeen(user.id);
  const res = NextResponse.json({ user: toPublicUser(user) });
  res.cookies.set(USER_COOKIE, createUserToken(user.id), userCookieOptions);
  return res;
}
