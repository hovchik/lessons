import { NextResponse } from "next/server";
import { z } from "zod";
import { QuizResponseSchema } from "@/server/api-schemas";
import { syncCards } from "@/server/cards";
import { recordUnitCheck } from "@/server/mastery";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/** A handed-in unit check: the question ids and answers; the score and new mastery level are worked out here. */
const Body = z.object({
  skillId: z.string().min(1).max(200),
  token: z.string().min(1).max(200),
  answers: z
    .array(
      z.object({
        itemId: z.string().min(1).max(300),
        response: QuizResponseSchema,
        confidence: z.union([z.literal(0), z.literal(2)]).nullable().optional(),
      }),
    )
    .min(1)
    .max(30),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const result = await recordUnitCheck(user.id, parsed.data.skillId, parsed.data.answers, parsed.data.token);
  if (!result) return NextResponse.json({ error: "Unknown unit or questions" }, { status: 400 });
  await touchLastSeen(user.id);
  // A unit that just reached "proficient" deals a collectible card.
  const newCards = await syncCards(user.id);
  return NextResponse.json({ ...result, newCards: newCards.map((c) => c.id) });
}
