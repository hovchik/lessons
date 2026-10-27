import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";
import { questionProblems } from "@/content/questions/validate";
import { QuizQuestionSchema } from "@/server/api-schemas";
import { isAdmin } from "@/server/auth";
import { getDb, schema } from "@/server/db/client";

const i18n = z.object({ en: z.string(), hy: z.string(), ru: z.string() });
const Body = z.object({
  title: i18n.optional(),
  objectives: z.object({ en: z.array(z.string()), hy: z.array(z.string()), ru: z.array(z.string()) }).optional(),
  content: i18n.optional(),
  quiz: z.array(QuizQuestionSchema).optional(),
  durationMin: z.number().int().min(5).max(180).optional(),
  status: z.enum(["draft", "published"]).optional(),
});

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid body", issues: parsed.error.issues }, { status: 400 });
  // The newer kinds are always written in all three languages, and their parts must fit together (gap marks, answers that can be typed).
  const problems = (parsed.data.quiz ?? []).flatMap((q, i) => (q.kind && q.kind !== "choice" ? questionProblems(q, ["en", "hy", "ru"]).map((p) => `quiz ${i + 1}: ${p}`) : []));
  if (problems.length) return NextResponse.json({ error: "Invalid quiz", problems }, { status: 400 });
  const db = await getDb();
  const existing = await db.select({ id: schema.lessons.id }).from(schema.lessons).where(eq(schema.lessons.id, id)).get();
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await db
    .update(schema.lessons)
    .set({ ...parsed.data, source: "admin", updatedAt: new Date().toISOString() })
    .where(eq(schema.lessons.id, id))
    .run();
  const lesson = await db.select().from(schema.lessons).where(eq(schema.lessons.id, id)).get();
  return NextResponse.json({ lesson });
}
