import { NextResponse } from "next/server";
import { z } from "zod";
import { REFLECTION_MAX, saveReflection } from "@/server/reflection";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

/** Saves the pupil's "why learn this" sentence for a unit; an empty text removes it. */
const Body = z.object({ unitId: z.string().min(1).max(200), text: z.string().max(REFLECTION_MAX * 2) });

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  if (!(await saveReflection(user.id, parsed.data.unitId, parsed.data.text))) return NextResponse.json({ error: "No such unit" }, { status: 404 });
  await touchLastSeen(user.id);
  return NextResponse.json({ ok: true });
}
