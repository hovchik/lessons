import { NextResponse } from "next/server";
import { getSubjects } from "@/server/queries";
import { getSchedule } from "@/server/schedule";
import { getCurrentUser } from "@/server/user-auth";

/** The signed-in user's own timetable and reminders (the reminder watcher reads this on every page). */
export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const [schedule, subjects] = await Promise.all([getSchedule(user.id), getSubjects()]);
  // Names of the subjects the classes use, so a reminder can name its class in the page's language.
  const used = new Set(schedule.entries.map((e) => e.subjectId));
  const names = Object.fromEntries(subjects.filter((s) => used.has(s.id)).map((s) => [s.id, s.name]));
  return NextResponse.json({ ...schedule, names }, { headers: { "cache-control": "private, no-store" } });
}
