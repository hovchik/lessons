import { NextResponse } from "next/server";
import { z } from "zod";
import { answer } from "@/server/live-quiz";

const Body = z.object({ pin: z.string().regex(/^\d{6}$/), token: z.string().min(10).max(60), index: z.number().int().min(0).max(100), choice: z.number().int().min(0).max(3) });

export async function POST(req: Request) {
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const r = answer(parsed.data.pin, parsed.data.token, parsed.data.index, parsed.data.choice);
  if ("error" in r) return NextResponse.json(r, { status: r.error === "nogame" || r.error === "noplayer" ? 404 : 409 });
  return NextResponse.json(r);
}
