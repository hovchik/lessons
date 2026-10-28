import { NextResponse } from "next/server";
import { z } from "zod";
import { setWeeklyGoal } from "@/server/motivation";
import { getCurrentUser } from "@/server/user-auth";

/** Sets how many learning days a week the pupil aims for. */
const Body = z.object({ goal: z.union([z.literal(3), z.literal(5), z.literal(7)]) });

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  await setWeeklyGoal(user.id, parsed.data.goal);
  return NextResponse.json({ ok: true });
}
