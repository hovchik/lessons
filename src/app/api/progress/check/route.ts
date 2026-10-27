import { NextResponse } from "next/server";
import { z } from "zod";
import { recordCheck } from "@/server/checks";
import { getCurrentUser } from "@/server/user-auth";

/** The first pick on a lesson's quick check; correctness is decided here. */
const Body = z.object({
  lessonId: z.string().min(1).max(200),
  index: z.number().int().min(0).max(100),
  choice: z.number().int().min(0).max(20),
  locale: z.enum(["en", "hy", "ru"]),
  ms: z.number().int().min(0).max(3_600_000).nullable().optional(),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const result = await recordCheck({ userId: user.id, ...parsed.data });
  if (!result) return NextResponse.json({ error: "Unknown check" }, { status: 400 });
  return NextResponse.json(result);
}
