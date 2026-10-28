import { NextResponse } from "next/server";
import { z } from "zod";
import { QuizResponseSchema } from "@/server/api-schemas";
import { answerPractice } from "@/server/practice";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/**
 * One answer in adaptive practice: the client sends the question and its
 * answer with the round so far; the answer is checked here and the next
 * question picked for this pupil.
 */
const Body = z.object({
  skillId: z.string().min(1).max(200),
  itemId: z.string().min(1).max(300),
  response: QuizResponseSchema,
  /** 0 guessing, 2 sure. */
  confidence: z.union([z.literal(0), z.literal(2)]).nullable().optional(),
  ms: z.number().int().min(0).max(3_600_000).nullable().optional(),
  seen: z.array(z.string().min(1).max(300)).max(30).optional(),
  results: z.array(z.boolean()).max(30).optional(),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const result = await answerPractice({ userId: user.id, ...parsed.data });
  if (!result) return NextResponse.json({ error: "Unknown question" }, { status: 400 });
  await touchLastSeen(user.id);
  return NextResponse.json(result);
}
