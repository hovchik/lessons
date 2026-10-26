import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdmin } from "@/server/auth";
import { getDb, schema } from "@/server/db/client";

const i18n = z.object({ en: z.string(), hy: z.string(), ru: z.string() });
const Body = z.object({
  title: i18n.optional(),
  description: i18n.optional(),
  format: i18n.optional(),
  questions: z
    .array(
      z.object({
        prompt: i18n,
        options: z.array(i18n).min(2),
        answer: z.number().int().min(0),
        explanation: i18n.optional(),
        points: z.number().int().min(1).max(20).optional(),
        topic: i18n.optional(),
      }),
    )
    .min(1)
    .optional(),
  durationMin: z.number().int().min(5).max(300).optional(),
  passPercent: z.number().int().min(1).max(99).optional(),
  scale: z.enum(["am20", "ru5", "mixed"]).optional(),
  status: z.enum(["draft", "published"]).optional(),
});

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid body", issues: parsed.error.issues }, { status: 400 });
  const bad = parsed.data.questions?.findIndex((q) => q.answer >= q.options.length);
  if (bad !== undefined && bad >= 0) return NextResponse.json({ error: `Question ${bad + 1}: answer index is out of range` }, { status: 400 });
  const db = await getDb();
  const existing = await db.select({ id: schema.exams.id }).from(schema.exams).where(eq(schema.exams.id, id)).get();
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await db
    .update(schema.exams)
    .set({ ...parsed.data, source: "admin", updatedAt: new Date().toISOString() })
    .where(eq(schema.exams.id, id))
    .run();
  const exam = await db.select().from(schema.exams).where(eq(schema.exams.id, id)).get();
  return NextResponse.json({ exam });
}
