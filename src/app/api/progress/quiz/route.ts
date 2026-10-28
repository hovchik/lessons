import { NextResponse } from "next/server";
import { z } from "zod";
import { QuizResponseSchema } from "@/server/api-schemas";
import { recordQuizResult } from "@/server/progress";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/** The client sends only its answer per question (an option index, typed text, an order…); the score is computed from the stored quiz. */
const Body = z.object({
  lessonId: z.string().min(1).max(200),
  answers: z.array(QuizResponseSchema).min(1).max(500),
  confidence: z.array(z.union([z.literal(0), z.literal(2)]).nullable()).max(500).optional(),
  retries: z.array(QuizResponseSchema.nullable()).max(500).optional(),
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
