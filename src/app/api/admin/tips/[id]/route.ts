import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdmin } from "@/server/auth";
import { getDb, schema } from "@/server/db/client";
import { TIP_CATEGORIES } from "@/server/db/schema";

const i18n = z.object({ en: z.string(), hy: z.string(), ru: z.string() });
const Body = z.object({
  title: i18n.optional(),
  body: i18n.optional(),
  category: z.enum(TIP_CATEGORIES).optional(),
  position: z.number().int().min(1).optional(),
  status: z.enum(["draft", "published", "deleted"]).optional(),
});

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid body", issues: parsed.error.issues }, { status: 400 });
  const db = await getDb();
  const existing = await db.select({ id: schema.tips.id }).from(schema.tips).where(eq(schema.tips.id, id)).get();
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await db
    .update(schema.tips)
    .set({ ...parsed.data, source: "admin", updatedAt: new Date().toISOString() })
    .where(eq(schema.tips.id, id))
    .run();
  const tip = await db.select().from(schema.tips).where(eq(schema.tips.id, id)).get();
  return NextResponse.json({ tip });
}

export async function DELETE(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const db = await getDb();
  const existing = await db.select({ id: schema.tips.id, courseId: schema.tips.courseId }).from(schema.tips).where(eq(schema.tips.id, id)).get();
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  // Soft delete: the row stays with status "deleted" and source "admin", so a reseed cannot
  // bring a deliberately removed bundled tip back, and the admin can restore it later.
  await db
    .update(schema.tips)
    .set({ status: "deleted", source: "admin", updatedAt: new Date().toISOString() })
    .where(eq(schema.tips.id, id))
    .run();
  return NextResponse.json({ ok: true, courseId: existing.courseId });
}
