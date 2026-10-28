import { NextResponse } from "next/server";
import { z } from "zod";
import { saveRound } from "@/server/games";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/** A finished speed-game round. Guests keep their bests in the browser instead. */
const Body = z.object({
  gameId: z.string().min(1).max(60),
  mode: z.enum(["sprint", "calm"]),
  score: z.number().int().min(0),
  total: z.number().int().min(0),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const { gameId, mode, score, total } = parsed.data;
  const saved = await saveRound(user.id, gameId, mode, score, total);
  if (!saved) return NextResponse.json({ error: "invalid" }, { status: 400 });
  await touchLastSeen(user.id);
  return NextResponse.json(saved);
}
