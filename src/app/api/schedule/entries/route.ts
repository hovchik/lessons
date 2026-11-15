import { NextResponse } from "next/server";
import { clearEntries, createEntries, EntryInput, NewEntriesInput } from "@/server/schedule";
import { getCurrentUser } from "@/server/user-auth";

/** Adds a class to the user's own timetable, on one or several days. */
export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  const days = NewEntriesInput.safeParse(body);
  if (!days.success) return NextResponse.json({ error: "days" }, { status: 400 });
  const parsed = EntryInput.safeParse({ ...body, day: days.data.days[0] });
  if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "invalid" }, { status: 400 });
  const res = await createEntries(user.id, days.data.days, parsed.data);
  if ("error" in res) return NextResponse.json(res, { status: 400 });
  return NextResponse.json(res);
}

/** Empties the user's own timetable. */
export async function DELETE() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await clearEntries(user.id);
  return NextResponse.json({ ok: true });
}
