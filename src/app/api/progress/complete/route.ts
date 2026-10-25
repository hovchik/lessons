import { NextResponse } from "next/server";
import { z } from "zod";
import { setLessonCompleted } from "@/server/progress";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

const Body = z.object({ lessonId: z.string().min(1).max(200), completed: z.boolean() });

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const progress = await setLessonCompleted(user.id, parsed.data.lessonId, parsed.data.completed);
  if (!progress) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await touchLastSeen(user.id);
  return NextResponse.json({ progress });
}
