import { NextResponse } from "next/server";
import { z } from "zod";
import { deleteReminder, ReminderInput, setReminderEnabled, updateReminder } from "@/server/schedule";
import { getCurrentUser } from "@/server/user-auth";

type Ctx = { params: Promise<{ id: string }> };

/** Changes one of the user's own reminders: `{ enabled }` turns it on or off, a full reminder replaces it. */
export async function PUT(req: Request, { params }: Ctx) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => null);
  const { id } = await params;
  const toggle = z.object({ enabled: z.boolean() }).strict().safeParse(body);
  let ok: boolean;
  if (toggle.success) ok = await setReminderEnabled(user.id, id, toggle.data.enabled);
  else {
    const parsed = ReminderInput.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
    ok = await updateReminder(user.id, id, parsed.data);
  }
  if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  if (!(await deleteReminder(user.id, id))) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
