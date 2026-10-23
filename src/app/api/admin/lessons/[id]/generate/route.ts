import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { isAdmin } from "@/server/auth";
import { getDb, schema } from "@/server/db/client";
import { buildBrief } from "@/server/generation";
import { generateLesson } from "@/server/claude";

export const maxDuration = 300;

export async function POST(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const brief = await buildBrief(id);
  if (!brief) return NextResponse.json({ error: "Not found" }, { status: 404 });
  try {
    const generated = await generateLesson(brief);
    const db = await getDb();
    await db
      .update(schema.lessons)
      .set({ ...generated, source: "claude", updatedAt: new Date().toISOString() })
      .where(eq(schema.lessons.id, id))
      .run();
    const lesson = await db.select().from(schema.lessons).where(eq(schema.lessons.id, id)).get();
    return NextResponse.json({ lesson });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Generation failed";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
