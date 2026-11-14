import { NextResponse } from "next/server";
import { deleteClass } from "@/server/classes";
import { getCurrentUser } from "@/server/user-auth";

/** The teacher deletes the class; pupils' own progress stays theirs. */
export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  if (!(await deleteClass(user.id, id))) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
