import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";
import { ScheduleBoard } from "@/components/site/schedule-board";
import { pick } from "@/lib/utils";
import { getSubjects } from "@/server/queries";
import { getSchedule } from "@/server/schedule";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "schedule" });
  return { title: t("title"), robots: { index: false } };
}

/** The signed-in user's own weekly timetable and reminders. Nobody else's is ever read here. */
export default async function SchedulePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const user = await getCurrentUser();
  if (!user) redirect({ href: "/login?next=/schedule", locale });
  const u = user!;
  const [t, l, schedule, subjects] = await Promise.all([getTranslations("schedule"), getLocale(), getSchedule(u.id), getSubjects()]);
  const list = subjects.map((s) => ({ id: s.id, name: pick(s.name, l), color: s.color, icon: s.icon })).sort((a, b) => a.name.localeCompare(b.name, l));

  return (
    <div className="space-y-6 sm:space-y-8">
      <header className="clay relative overflow-hidden p-5 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-secondary/30 blur-3xl" aria-hidden="true" />
        <div className="relative flex items-center gap-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-[18px] bg-primary text-primary-foreground shadow-clay-sm">
            <CalendarDays className="size-7" aria-hidden="true" />
          </span>
          <div>
            <h1 className="text-2xl font-black sm:text-4xl">{t("title")}</h1>
            <p className="mt-1 text-muted-foreground">{t("intro")}</p>
          </div>
        </div>
      </header>
      <ScheduleBoard entries={schedule.entries} reminders={schedule.reminders} subjects={list} />
    </div>
  );
}
