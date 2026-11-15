import { NextResponse } from "next/server";
import { createReminder, ReminderInput } from "@/server/schedule";
import { getCurrentUser } from "@/server/user-auth";

/** Adds one of the user's own reminders (weekly or once); class reminders are set with their class. */
export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = ReminderInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const res = await createReminder(user.id, parsed.data);
  if ("error" in res) return NextResponse.json(res, { status: 400 });
  return NextResponse.json(res);
}
