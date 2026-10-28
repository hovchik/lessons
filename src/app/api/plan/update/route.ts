import { NextResponse } from "next/server";
import { z } from "zod";
import { updatePlan } from "@/server/exam-plan";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/** Rebuilds a plan from today, with a new exam date or daily time when given. */
const Body = z.object({
  examId: z.string().min(1).max(200),
  examDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  minutesPerDay: z.union([z.literal(15), z.literal(30), z.literal(45)]).optional(),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const result = await updatePlan({ userId: user.id, ...parsed.data });
  if (!result) return NextResponse.json({ error: "No plan to update, or a date out of range" }, { status: 400 });
  await touchLastSeen(user.id);
  return NextResponse.json(result);
}
