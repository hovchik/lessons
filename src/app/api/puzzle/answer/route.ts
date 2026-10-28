import { NextResponse } from "next/server";
import { z } from "zod";
import { QuizResponseSchema } from "@/server/api-schemas";
import { answerPuzzle } from "@/server/puzzle";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/**
 * An answer to today's puzzle, checked here. Guests may play: they send the
 * tries they have used, and nothing is saved for them.
 */
const Body = z.object({
  level: z.enum(["junior", "senior"]),
  response: QuizResponseSchema,
  tries: z.number().int().min(0).max(5).optional(),
});

export async function POST(req: Request) {
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const user = await getCurrentUser();
  const result = await answerPuzzle({ userId: user?.id ?? null, level: parsed.data.level, response: parsed.data.response, guestTries: parsed.data.tries });
  if (!result) return NextResponse.json({ error: "invalid" }, { status: 400 });
  if (user) await touchLastSeen(user.id);
  return NextResponse.json(result);
}
