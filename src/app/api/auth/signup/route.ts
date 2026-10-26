import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb, schema } from "@/server/db/client";
import {
  accountsConfigured,
  createUserToken,
  findUserByUsername,
  hashPassword,
  MIN_PASSWORD,
  newId,
  normalizeUsername,
  toPublicUser,
  USER_COOKIE,
  USERNAME_RE,
  userCookieOptions,
} from "@/server/user-auth";

const Body = z.object({
  username: z.string().min(1).max(64),
  password: z.string().min(MIN_PASSWORD).max(200),
  displayName: z.string().trim().min(1).max(60),
  grade: z.number().int().min(1).max(12).nullable().optional(),
  locale: z.enum(["en", "hy", "ru"]).optional(),
});

export async function POST(req: Request) {
  if (!accountsConfigured()) return NextResponse.json({ error: "not_configured" }, { status: 503 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const { password, displayName, grade, locale } = parsed.data;
  const username = normalizeUsername(parsed.data.username);
  if (!USERNAME_RE.test(username)) return NextResponse.json({ error: "bad_username" }, { status: 400 });
  if (await findUserByUsername(username)) return NextResponse.json({ error: "taken" }, { status: 409 });

  const db = await getDb();
  const id = newId();
  await db
    .insert(schema.users)
    .values({ id, username, displayName, passwordHash: hashPassword(password), grade: grade ?? null, locale: locale ?? "en" })
    .run();
  const user = (await db.select().from(schema.users).where(eq(schema.users.id, id)).get())!;
  const res = NextResponse.json({ user: toPublicUser(user) });
  res.cookies.set(USER_COOKIE, createUserToken(id), userCookieOptions);
  return res;
}
