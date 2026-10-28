import { NextResponse } from "next/server";
import { z } from "zod";
import { QuizResponseSchema } from "@/server/api-schemas";
import { answerDiagnostic } from "@/server/exam-plan";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/** One answer in the placement test; `response` null is "I don't know". No feedback comes back, only the next question. */
const Body = z.object({
  examId: z.string().min(1).max(200),
  itemId: z.string().min(1).max(300),
  response: QuizResponseSchema.nullable(),
  ms: z.number().int().min(0).max(3_600_000).nullable().optional(),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const result = await answerDiagnostic({ userId: user.id, ...parsed.data });
  if (!result) return NextResponse.json({ error: "Not the question on show" }, { status: 409 });
  await touchLastSeen(user.id);
  return NextResponse.json(result);
}
