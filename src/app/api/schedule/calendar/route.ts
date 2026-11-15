import { getTranslations } from "next-intl/server";
import { NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { buildIcs } from "@/lib/schedule";
import { pick } from "@/lib/utils";
import { getSubjects } from "@/server/queries";
import { getSchedule } from "@/server/schedule";
import { getCurrentUser } from "@/server/user-auth";

/**
 * The user's own timetable as a calendar file (.ics). Opened on a phone it goes
 * into the calendar app, which then reminds them even when the site is closed.
 */
export async function GET(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const asked = new URL(req.url).searchParams.get("locale") ?? "";
  const locale = (routing.locales as readonly string[]).includes(asked) ? asked : routing.defaultLocale;
  const [{ entries, reminders }, subjects, t] = await Promise.all([getSchedule(user.id), getSubjects(), getTranslations({ locale, namespace: "schedule" })]);
  const names = new Map(subjects.map((s) => [s.id, pick(s.name, locale)]));
  const now = new Date();
  const ics = buildIcs({
    entries,
    reminders,
    titleOf: (e) => e.title || names.get(e.subjectId ?? "") || t("untitled"),
    calendarName: t("calendarName"),
    today: now,
    host: "lessons",
    stamp: now,
  });
  return new NextResponse(ics, {
    headers: {
      "content-type": "text/calendar; charset=utf-8",
      "content-disposition": 'attachment; filename="schedule.ics"',
      "cache-control": "private, no-store",
    },
  });
}
