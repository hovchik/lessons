import { NextResponse } from "next/server";
import { deleteEntry, EntryInput, updateEntry } from "@/server/schedule";
import { getCurrentUser } from "@/server/user-auth";

type Ctx = { params: Promise<{ id: string }> };

/** Changes one of the user's own classes; someone else's id is simply not found. */
export async function PUT(req: Request, { params }: Ctx) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = EntryInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "invalid" }, { status: 400 });
  const { id } = await params;
  const res = await updateEntry(user.id, id, parsed.data);
  if (res.error === "notfound") return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (res.error) return NextResponse.json(res, { status: 400 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  if (!(await deleteEntry(user.id, id))) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
