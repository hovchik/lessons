import { NextResponse } from "next/server";
import { z } from "zod";
import { checkCurrentPassword, deleteAccount, newPasswordProblem, setPassword } from "@/server/account";
import { tooMany } from "@/server/rate-limit";
import { createUserToken, getCurrentUser, USER_COOKIE, userCookieOptions } from "@/server/user-auth";

/**
 * The signed-in pupil's own account, always with the current password:
 * - password: a new password; other devices are signed out, this one stays in.
 * - signout: signs out every other device (the password stays the same).
 * - delete: deletes the account and all its progress, and signs out here.
 */
const current = z.string().min(1).max(200);
const Body = z.discriminatedUnion("action", [
  z.object({ action: z.literal("password"), current, password: z.string().max(200) }),
  z.object({ action: z.literal("signout"), current }),
  z.object({ action: z.literal("delete"), current }),
]);

export async function POST(req: Request) {
  const me = await getCurrentUser();
  if (!me) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const body = parsed.data;

  // A weak new password is refused before the current one is checked, so it costs no try.
  if (body.action === "password") {
    const problem = newPasswordProblem(body.password, me.username);
    if (problem) return NextResponse.json({ error: problem }, { status: 400 });
  }
  const checked = await checkCurrentPassword(req, me.id, body.current);
  if ("error" in checked) {
    if (checked.error === "too_many") return tooMany(checked.retryAfterMs ?? 60_000);
    return NextResponse.json({ error: checked.error }, { status: checked.error === "gone" ? 401 : 403 });
  }

  if (body.action === "delete") {
    await deleteAccount(me.id);
    const res = NextResponse.json({ ok: true });
    res.cookies.set(USER_COOKIE, "", { path: "/", maxAge: 0 });
    return res;
  }
  const user = await setPassword(me.id, body.action === "password" ? body.password : body.current);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(USER_COOKIE, createUserToken(user), userCookieOptions(req));
  return res;
}
