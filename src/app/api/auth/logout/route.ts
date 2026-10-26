import { NextResponse } from "next/server";
import { USER_COOKIE } from "@/server/user-auth";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(USER_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
