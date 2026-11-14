import { NextResponse } from "next/server";
import { removeMember } from "@/server/classes";
import { getCurrentUser } from "@/server/user-auth";

/** A pupil leaves the class ("me"), or its teacher removes a pupil. */
export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string; userId: string }> }) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id, userId } = await params;
  const who = userId === "me" ? user.id : userId;
  if (!(await removeMember(user.id, id, who))) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
