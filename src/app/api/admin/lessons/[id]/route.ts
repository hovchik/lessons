import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdmin } from "@/server/auth";
import { db, schema } from "@/server/db/client";

const i18n = z.object({ en: z.string(), hy: z.string(), ru: z.string() });
const Body = z.object({
  title: i18n.optional(),
  objectives: z.object({ en: z.array(z.string()), hy: z.array(z.string()), ru: z.array(z.string()) }).optional(),
  content: i18n.optional(),
  quiz: z
    .array(z.object({ prompt: i18n, options: z.array(i18n).min(2), answer: z.number().int().min(0), explanation: i18n.optional() }))
    .optional(),
  durationMin: z.number().int().min(5).max(180).optional(),
  status: z.enum(["draft", "published"]).optional(),
});

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid body", issues: parsed.error.issues }, { status: 400 });
  const existing = db.select({ id: schema.lessons.id }).from(schema.lessons).where(eq(schema.lessons.id, id)).get();
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  db.update(schema.lessons)
    .set({ ...parsed.data, source: "admin", updatedAt: new Date().toISOString() })
    .where(eq(schema.lessons.id, id))
    .run();
  const lesson = db.select().from(schema.lessons).where(eq(schema.lessons.id, id)).get();
  return NextResponse.json({ lesson });
}
