import { NextResponse } from "next/server";
import { z } from "zod";
import { recordExamResult } from "@/server/progress";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/** The client sends the chosen option per question (null = left blank); the score is computed from the stored exam. */
const Body = z.object({
  examId: z.string().min(1).max(200),
  answers: z.array(z.number().int().min(0).max(50).nullable()).min(1).max(500),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const result = await recordExamResult({ userId: user.id, ...parsed.data });
  if (!result) return NextResponse.json({ error: "Exam not found or answers do not match it" }, { status: 400 });
  await touchLastSeen(user.id);
  return NextResponse.json({ result });
}
