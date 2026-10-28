import { NextResponse } from "next/server";
import { z } from "zod";
import { LIVE_COUNTS, LIVE_SECONDS } from "@/lib/live-quiz";
import { createGame } from "@/server/live-quiz";
import { blockedFor, hit, LIMITS, tooMany } from "@/server/rate-limit";
import { getCurrentUser } from "@/server/user-auth";

/** A teacher (any signed-in account) starts a live quiz on a unit and gets its PIN. */
const Body = z.object({
  skillId: z.string().min(1).max(200),
  count: z.union(LIVE_COUNTS.map((n) => z.literal(n)) as [z.ZodLiteral<5>, z.ZodLiteral<10>, z.ZodLiteral<15>]),
  seconds: z.union(LIVE_SECONDS.map((n) => z.literal(n)) as [z.ZodLiteral<10>, z.ZodLiteral<20>, z.ZodLiteral<30>]),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const key = `live-create:${user.id}`;
  const wait = blockedFor(key, LIMITS.liveCreateUser);
  if (wait) return tooMany(wait);
  hit(key, LIMITS.liveCreateUser);
  const made = await createGame(user.id, parsed.data.skillId, parsed.data.count, parsed.data.seconds);
  if ("error" in made) return NextResponse.json(made, { status: made.error === "busy" ? 503 : 400 });
  return NextResponse.json(made);
}
