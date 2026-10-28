import { NextResponse } from "next/server";
import { z } from "zod";
import { joinGame } from "@/server/live-quiz";

/** A pupil joins with the PIN and a nickname; no account needed. */
const Body = z.object({ pin: z.string().regex(/^\d{6}$/), name: z.string().max(80) });

export async function POST(req: Request) {
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const r = await joinGame(parsed.data.pin, parsed.data.name);
  if ("error" in r) return NextResponse.json(r, { status: r.error === "nogame" ? 404 : 400 });
  return NextResponse.json(r);
}
