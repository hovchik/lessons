import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdmin } from "@/server/auth";
import { getDb, schema } from "@/server/db/client";
import { TIP_CATEGORIES } from "@/server/db/schema";

const Body = z.object({
  courseId: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/, "lowercase letters, digits and dashes"),
  category: z.enum(TIP_CATEGORIES).default("study"),
});

/** Creates an empty draft tip for a course; the admin fills it in the editor. */
export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid body", issues: parsed.error.issues }, { status: 400 });
  const { courseId, slug, category } = parsed.data;
  const db = await getDb();
  const course = await db.select({ id: schema.courses.id }).from(schema.courses).where(eq(schema.courses.id, courseId)).get();
  if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 });
  const id = `${courseId}-${slug}`;
  const exists = await db.select({ id: schema.tips.id }).from(schema.tips).where(eq(schema.tips.id, id)).get();
  if (exists) return NextResponse.json({ error: "A tip with this slug already exists" }, { status: 409 });
  const siblings = await db.select({ position: schema.tips.position }).from(schema.tips).where(eq(schema.tips.courseId, courseId)).all();
  const position = siblings.reduce((m, s) => Math.max(m, s.position), 0) + 1;
  await db
    .insert(schema.tips)
    .values({
      id,
      courseId,
      position,
      slug,
      category,
      title: { en: "", hy: "", ru: "" },
      body: { en: "", hy: "", ru: "" },
      status: "draft",
      source: "admin",
      updatedAt: new Date().toISOString(),
    })
    .run();
  const tip = await db.select().from(schema.tips).where(eq(schema.tips.id, id)).get();
  return NextResponse.json({ tip }, { status: 201 });
}
