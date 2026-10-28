import { NextResponse } from "next/server";
import { z } from "zod";
import { hostAct } from "@/server/live-quiz";

/** The teacher moves the game on: start, show the answer, next question, finish, or remove a player. */
const Body = z.object({
  pin: z.string().regex(/^\d{6}$/),
  hostToken: z.string().min(10).max(60),
  action: z.enum(["start", "reveal", "next", "end", "kick"]),
  playerId: z.string().max(20).optional(),
});

export async function POST(req: Request) {
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const { pin, hostToken, action, playerId } = parsed.data;
  const r = hostAct(pin, hostToken, action, playerId);
  if ("error" in r) return NextResponse.json(r, { status: r.error === "nogame" ? 404 : 409 });
  return NextResponse.json(r);
}
