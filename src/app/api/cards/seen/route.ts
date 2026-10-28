import { NextResponse } from "next/server";
import { z } from "zod";
import { markCardsSeen } from "@/server/cards";
import { getCurrentUser } from "@/server/user-auth";

/** The pupil turned these new cards over. */
const Body = z.object({ cardIds: z.array(z.string().min(1).max(80)).min(1).max(100) });

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  await markCardsSeen(user.id, parsed.data.cardIds);
  return NextResponse.json({ ok: true });
}
