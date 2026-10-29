import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdmin } from "@/server/auth";
import { getDb, schema } from "@/server/db/client";
import { hashPassword, MIN_PASSWORD, toPublicUser } from "@/server/user-auth";

const Body = z.object({
  displayName: z.string().trim().min(1).max(60).optional(),
  grade: z.number().int().min(1).max(12).nullable().optional(),
  disabled: z.boolean().optional(),
  /** Set a new password (e.g. when a pupil forgot theirs). */
  password: z.string().min(MIN_PASSWORD).max(200).optional(),
});

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid body", issues: parsed.error.issues }, { status: 400 });
  const db = await getDb();
  const existing = await db.select({ id: schema.users.id }).from(schema.users).where(eq(schema.users.id, id)).get();
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const { password, ...rest } = parsed.data;
  // A new password also signs the pupil out on every device (see createUserToken).
  await db
    .update(schema.users)
    .set({ ...rest, ...(password ? { passwordHash: await hashPassword(password) } : {}) })
    .where(eq(schema.users.id, id))
    .run();
  const user = (await db.select().from(schema.users).where(eq(schema.users.id, id)).get())!;
  return NextResponse.json({ user: { ...toPublicUser(user), disabled: user.disabled } });
}

export async function DELETE(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const db = await getDb();
  await db.delete(schema.users).where(eq(schema.users.id, id)).run();
  return NextResponse.json({ ok: true });
}
