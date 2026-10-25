import { NextResponse } from "next/server";
import { z } from "zod";
import { recordQuizResult } from "@/server/progress";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

const Body = z.object({
  lessonId: z.string().min(1).max(200),
  score: z.number().int().min(0).max(500),
  total: z.number().int().min(1).max(500),
  answers: z.array(z.number().int().min(0).max(50)).max(500).optional(),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success || parsed.data.score > parsed.data.total) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const progress = await recordQuizResult({ userId: user.id, ...parsed.data });
  if (!progress) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await touchLastSeen(user.id);
  return NextResponse.json({ progress });
}
