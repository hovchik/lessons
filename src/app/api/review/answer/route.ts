import { NextResponse } from "next/server";
import { z } from "zod";
import { answerReviewItem } from "@/server/review";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/** One Daily Review answer: the client sends the question id and the chosen option; correctness is decided here. */
const Body = z.object({
  itemId: z.string().min(1).max(300),
  choice: z.number().int().min(0).max(50),
  ms: z.number().int().min(0).max(3_600_000).nullable().optional(),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const result = await answerReviewItem({ userId: user.id, ...parsed.data });
  if (!result) return NextResponse.json({ error: "Unknown question" }, { status: 400 });
  await touchLastSeen(user.id);
  return NextResponse.json(result);
}
