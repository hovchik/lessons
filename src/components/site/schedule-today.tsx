"use client";

import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { isoWeekday, nowAndNext, type Entry } from "@/lib/schedule";
import { cn } from "@/lib/utils";
import { useNow, useScheduleFormat, type ScheduleSubject } from "./schedule-format";

/**
 * Home-page card for a signed-in pupil: today's classes with the one going on
 * now, or an invitation to make a timetable. "Today" is the pupil's own day,
 * so the list appears once the browser's clock has been read.
 */
export function ScheduleToday({ entries, subjects }: { entries: Entry[]; subjects: ScheduleSubject[] }) {
  const t = useTranslations("schedule");
  const f = useScheduleFormat(subjects);
  const now = useNow();

  if (entries.length === 0)
    return (
      <Link href="/schedule" className="clay clay-press flex min-h-16 items-center gap-4 p-4 sm:p-5">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary" aria-hidden="true">
          <CalendarDays className="size-6" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-extrabold">{t("homeEmptyTitle")}</span>
          <span className="block text-sm text-muted-foreground">{t("homeEmptyText")}</span>
        </span>
        <ArrowRight className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
      </Link>
    );

  const nn = now ? nowAndNext(entries, now) : null;
  const today = now ? isoWeekday(now) : null;
  return (
    <section aria-labelledby="today-title" className="clay p-5 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <h2 id="today-title" className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
          <CalendarDays className="size-6 text-primary" aria-hidden="true" />
          <span>
            {t("todayTitle")}
            {today && <span className="block text-sm font-bold capitalize text-muted-foreground sm:ml-2 sm:inline sm:text-base">{f.dayLong(today)}</span>}
          </span>
        </h2>
        <Link href="/schedule" className="inline-flex min-h-11 shrink-0 items-center gap-1 rounded-xl px-2 text-sm font-bold text-primary hover:bg-muted">
          {t("wholeWeek")}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      {/* Room for two rows while the clock is read, so the page below does not jump much. */}
      <div className="mt-3 min-h-24">
        {nn &&
          (nn.today.length === 0 ? (
            <p className="fx-in text-muted-foreground">
              {t("todayEmpty")}
              {nn.next && <span className="mt-1 block font-bold text-foreground">{t("nextLineDay", { title: f.titleOf(nn.next), day: f.dayLong(nn.next.day), time: nn.next.start })}</span>}
            </p>
          ) : (
            <ul className="fx-in grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {nn.today.map((e) => {
                const s = e.subjectId ? f.subject.get(e.subjectId) : undefined;
                const state = nn.current?.id === e.id ? "now" : nn.next?.id === e.id && nn.next.day === today ? "next" : null;
                const over = now !== null && e.end <= f.hhmm(now);
                return (
                  <li key={e.id} className={cn("relative flex items-center gap-3 overflow-hidden rounded-2xl border border-border/70 py-2 pl-4 pr-3", s && `subject-${s.color}`, state === "now" && "ring-2 ring-primary", over && "opacity-55")}>
                    <span className="absolute inset-y-0 left-0 w-1.5" style={{ background: s ? "var(--s)" : "var(--primary)" }} aria-hidden="true" />
                    <span className="w-11 shrink-0 text-sm font-black tabular-nums text-muted-foreground">{e.start}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-bold">{f.titleOf(e)}</span>
                      {e.place && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="size-3 shrink-0" aria-hidden="true" />
                          <span className="truncate">{e.place}</span>
                        </span>
                      )}
                    </span>
                    {state && <span className={cn("shrink-0 rounded-full px-2 py-px text-[11px] font-black uppercase", state === "now" ? "bg-primary text-primary-foreground" : "bg-muted text-primary")}>{t(state)}</span>}
                  </li>
                );
              })}
            </ul>
          ))}
      </div>
    </section>
  );
}
