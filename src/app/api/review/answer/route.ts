import { NextResponse } from "next/server";
import { z } from "zod";
import { answerItem } from "@/server/review";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/**
 * One answer to a question met before, in Daily Review or a lesson warm-up: the
 * client sends the question id and the chosen option; correctness is decided here.
 */
const Body = z.object({
  itemId: z.string().min(1).max(300),
  choice: z.number().int().min(0).max(50),
  source: z.enum(["review", "warmup"]).optional(),
  /** 0 guessing, 2 sure. */
  confidence: z.union([z.literal(0), z.literal(2)]).nullable().optional(),
  ms: z.number().int().min(0).max(3_600_000).nullable().optional(),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const result = await answerItem({ userId: user.id, ...parsed.data });
  if (!result) return NextResponse.json({ error: "Unknown question" }, { status: 400 });
  await touchLastSeen(user.id);
  return NextResponse.json(result);
}
