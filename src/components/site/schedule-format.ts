"use client";

import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { DAYS, daysOf, isoWeekday, nextAlarm, type Entry, type Reminder } from "@/lib/schedule";

/** A subject as the timetable shows it: its name in the page's language, colour and icon. */
export type ScheduleSubject = { id: string; name: string; color: string; icon: string };

/**
 * The browser's clock, read after the page has loaded (the server's clock and
 * time zone may differ from the pupil's), then every 30 seconds.
 */
export function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  return now;
}

/** Weekday names, dates and reminder descriptions in the page's language. */
export function useScheduleFormat(subjects: ScheduleSubject[]) {
  const t = useTranslations("schedule");
  return useMemo(() => {
    // Names come from the app's own translations: a phone's browser may not know Armenian weekdays.
    const shorts = t("daysShort").split(",");
    const longs = t("daysLong").split(",");
    const months = t("months").split(",");
    const dayShort = (d: number) => shorts[d - 1] ?? "";
    const dayLong = (d: number) => longs[d - 1] ?? "";
    const subject = new Map(subjects.map((s) => [s.id, s]));
    const titleOf = (e: Pick<Entry, "title" | "subjectId">) => e.title || (e.subjectId && subject.get(e.subjectId)?.name) || t("untitled");
    const hhmm = (d: Date) => `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;

    const describe = (r: Reminder, entries: Entry[]) => {
      if (r.kind === "class") {
        const e = entries.find((x) => x.id === r.entryId);
        return e ? t("whenClass", { n: r.minutesBefore ?? 0, day: dayShort(e.day), time: e.start }) : "";
      }
      if (r.kind === "weekly") {
        const days = daysOf(r.days);
        if (days.length === DAYS.length) return t("whenEveryDay", { time: r.time ?? "" });
        return t("whenWeekly", { days: days.map(dayShort).join(", "), time: r.time ?? "" });
      }
      const [, m, d] = (r.date ?? "2000-01-01").split("-").map(Number);
      return t("whenOnce", { date: `${d} ${months[m - 1] ?? ""}`, time: r.time ?? "" });
    };

    /** "Tue 18:00" for the next time the reminder fires, or null once it never will. */
    const nextLabel = (r: Reminder, entries: Entry[], now: Date) => {
      const at = nextAlarm(r, entries, now);
      if (!at) return null;
      const sameDay = at.toDateString() === now.toDateString();
      return sameDay ? `${t("todayTitle")} ${hhmm(at)}` : `${dayShort(isoWeekday(at))} ${hhmm(at)}`;
    };

    return { dayShort, dayLong, titleOf, describe, nextLabel, subject, hhmm };
  }, [t, subjects]);
}
