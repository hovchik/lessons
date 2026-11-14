import { NextResponse } from "next/server";
import { newParentLink, removeParentLink } from "@/server/classes";
import { getCurrentUser } from "@/server/user-auth";

/** A new read-only link for a parent; the old one stops working. */
export async function POST() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ token: await newParentLink(user.id) });
}

/** Turns the parent link off. */
export async function DELETE() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await removeParentLink(user.id);
  return NextResponse.json({ ok: true });
}
