import { NextResponse } from "next/server";
import { hostView, playerView } from "@/server/live-quiz";

export const dynamic = "force-dynamic";

/** The game as the teacher (?host=token) or a pupil (?token=…) sees it; polled about once a second. */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const pin = url.searchParams.get("pin") ?? "";
  const host = url.searchParams.get("host");
  const tok = url.searchParams.get("token");
  if (!/^\d{6}$/.test(pin) || (!host && !tok)) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const view = host ? await hostView(pin, host) : await playerView(pin, tok!);
  if (!view) return NextResponse.json({ error: "nogame" }, { status: 404 });
  return NextResponse.json(view, { headers: { "cache-control": "no-store" } });
}
