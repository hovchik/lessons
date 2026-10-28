import { NextResponse } from "next/server";
import { getLiveUser } from "@/server/live";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

/** The header's live numbers (streak, review queue), re-read after each saved answer. */
export async function GET() {
  const user = await getCurrentUser();
  const live = user ? await getLiveUser(user.id) : null;
  return NextResponse.json({ live }, { headers: { "cache-control": "no-store" } });
}
