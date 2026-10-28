import { NextResponse } from "next/server";
import { z } from "zod";
import { removePlan } from "@/server/exam-plan";
import { getCurrentUser } from "@/server/user-auth";

/** Deletes a plan (its test answers stay in the pupil's history). */
const Body = z.object({ examId: z.string().min(1).max(200) });

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  await removePlan(user.id, parsed.data.examId);
  return NextResponse.json({ ok: true });
}
