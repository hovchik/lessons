import { NextResponse } from "next/server";
import { z } from "zod";
import { recordQuizResult } from "@/server/progress";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/** The client sends only the chosen option index per question; the score is computed from the stored quiz. */
const Body = z.object({
  lessonId: z.string().min(1).max(200),
  answers: z.array(z.number().int().min(0).max(50)).min(1).max(500),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const progress = await recordQuizResult({ userId: user.id, ...parsed.data });
  if (!progress) return NextResponse.json({ error: "Quiz not found or answers do not match it" }, { status: 400 });
  await touchLastSeen(user.id);
  return NextResponse.json({ progress });
}
