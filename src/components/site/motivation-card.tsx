import { Award, Flame, Medal, Snowflake, Star } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { cn, pick } from "@/lib/utils";
import type { Motivation } from "@/server/motivation";
import { GoalPicker } from "./goal-picker";

const asDate = (d: string) => new Date(`${d}T00:00:00Z`);

/** "This week": the streak and its freeze, the weekly goal as seven day dots, and points. */
export async function MotivationCard({ m, className }: { m: Motivation; className?: string }) {
  const [t, l] = await Promise.all([getTranslations("motivation"), getLocale()]);
  const narrow = new Intl.DateTimeFormat(l, { weekday: "short", timeZone: "UTC" });
  const dayFmt = new Intl.DateTimeFormat(l, { weekday: "long", timeZone: "UTC" });
  const { streak, week } = m;
  const goalMet = week.done >= week.goal;
  const frozenThisWeek = streak.frozen.filter((f) => week.week.some((d) => d.date === f));

  return (
    <section aria-labelledby="motivation-title" className={cn("clay p-5 sm:p-7", className)}>
      <h2 id="motivation-title" className="text-xl font-extrabold sm:text-2xl">{t("title")}</h2>
      <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_1.4fr_0.9fr] lg:gap-6">
        <div className="flex items-start gap-3">
          <span className={cn("fx-pop grid size-14 shrink-0 place-items-center rounded-[18px] shadow-clay-sm", streak.todayDone ? "bg-orange-500 text-white" : "bg-orange-50 text-orange-600")}>
            <Flame className={cn("size-8", streak.todayDone && "fx-flame")} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-2xl font-black tabular-nums">{t("streak", { n: streak.days })}</p>
            <p className={cn("text-sm font-bold", streak.todayDone ? "text-success" : "text-muted-foreground")}>
              {streak.todayDone ? t("todayDone") : t("todayLeft", { done: Math.min(m.today.answers, m.today.needed), needed: m.today.needed })}
            </p>
            <p className="mt-1 flex items-start gap-1.5 text-xs font-semibold text-muted-foreground">
              <Snowflake className="mt-0.5 size-3.5 shrink-0 text-sky-600" aria-hidden="true" />
              {frozenThisWeek.length ? t("freezeUsed", { day: dayFmt.format(asDate(frozenThisWeek[0])) }) : t("freezeLeft")}
            </p>
            {m.best > streak.days && <p className="mt-1 text-xs font-bold text-muted-foreground">{t("best", { n: m.best })}</p>}
          </div>
        </div>

        <div>
          <p className="flex flex-wrap items-baseline justify-between gap-x-3 font-extrabold">
            <span>{t("goal")}</span>
            <span className={cn("text-sm", goalMet ? "text-success" : "text-muted-foreground")}>{goalMet ? t("goalDone") : t("goalLine", { done: week.done, goal: week.goal })}</span>
          </p>
          <ol className="mt-2 grid grid-cols-7 gap-1.5" aria-label={t("goalLine", { done: week.done, goal: week.goal })}>
            {week.week.map((d, k) => {
              const frozen = streak.frozen.includes(d.date);
              return (
                <li key={d.date} className="text-center">
                  <span
                    style={d.done || frozen ? { animationDelay: `${150 + k * 60}ms` } : undefined}
                    className={cn(
                      "mx-auto grid size-9 place-items-center rounded-full text-xs font-black sm:size-10",
                      (d.done || frozen) && "fx-pop",
                      d.today && !d.done && !frozen && "fx-breathe",
                      d.done ? "bg-orange-500 text-white" : frozen ? "bg-sky-100 text-sky-700" : d.today ? "border-2 border-dashed border-orange-400 text-orange-600" : "bg-muted text-muted-foreground",
                      d.future && "opacity-60",
                    )}
                  >
                    {d.done ? <Flame className="size-4" aria-hidden="true" /> : frozen ? <Snowflake className="size-4" aria-hidden="true" /> : null}
                    <span className="sr-only">{d.done ? t("dayDone") : frozen ? t("dayFrozen") : t("dayOpen")}</span>
                  </span>
                  <span className={cn("mt-1 block text-[11px] font-bold capitalize", d.today ? "text-foreground" : "text-muted-foreground")}>{narrow.format(asDate(d.date))}</span>
                </li>
              );
            })}
          </ol>
          <div className="mt-3">
            <GoalPicker goal={week.goal} />
          </div>
        </div>

        <div className="flex items-start gap-3 lg:flex-col lg:gap-1">
          <span className="grid size-14 shrink-0 place-items-center rounded-[18px] bg-amber-50 text-amber-600 shadow-clay-sm lg:hidden">
            <Star className="size-8" aria-hidden="true" />
          </span>
          <div>
            <p className="font-extrabold">{t("points")}</p>
            <p className="text-2xl font-black tabular-nums text-amber-700">{t("pointsWeek", { n: m.points.week })}</p>
            <p className="text-sm font-bold text-muted-foreground">{t("pointsTotal", { n: m.points.total })}</p>
          </div>
        </div>
      </div>
      <p className="mt-4 border-t border-border/70 pt-3 text-xs leading-relaxed text-muted-foreground">{t("how", { n: m.today.needed })}</p>
    </section>
  );
}

const TIER = ["bg-muted text-muted-foreground", "bg-orange-100 text-orange-800", "bg-slate-200 text-slate-700", "bg-amber-200 text-amber-900"] as const;

/** Subject badges (by mastered units) and streak badges. */
export async function BadgesSection({ m }: { m: Motivation }) {
  const [t, l] = await Promise.all([getTranslations("motivation"), getLocale()]);
  const subjects = m.badges.subjects;
  return (
    <section aria-labelledby="badges-title" className="space-y-4">
      <div>
        <h2 id="badges-title" className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
          <Medal className="size-6 text-primary" aria-hidden="true" />
          {t("badges")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{t("badgesIntro")}</p>
      </div>
      <ul className="stagger flex flex-wrap gap-2">
        {m.badges.streaks.map((b) => (
          <li key={b.days} className={cn("inline-flex min-h-11 items-center gap-2 rounded-full px-3.5 text-sm font-extrabold", b.earned ? "fx-shine bg-orange-500 text-white shadow-clay-sm" : "bg-muted text-muted-foreground")}>
            <Flame className="size-4" aria-hidden="true" />
            {t("streakBadge", { n: b.days })}
            <span className="sr-only">{b.earned ? t("earned") : t("notYet")}</span>
          </li>
        ))}
      </ul>
      {subjects.length > 0 ? (
        <ul className="stagger grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <li key={s.subjectId} className={cn("clay-sm flex items-center gap-3 p-4", s.tier > 0 && "fx-shine", `subject-${s.color}`)}>
              <span className="relative grid size-12 shrink-0 place-items-center rounded-[16px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
                <SubjectIcon name={s.icon} className="size-6" />
                {s.tier > 0 && (
                  <span className={cn("fx-pop absolute -bottom-1.5 -right-1.5 grid size-6 place-items-center rounded-full ring-2 ring-card", TIER[s.tier])} style={{ animationDelay: "300ms" }}>
                    <Award className="size-3.5" aria-hidden="true" />
                  </span>
                )}
              </span>
              <div className="min-w-0">
                <p className="truncate font-extrabold">{pick(s.name, l)}</p>
                <p className="text-sm font-bold">
                  <span className={cn("rounded-full px-2 py-0.5 text-xs", TIER[s.tier])}>{t(`tier.${s.tier}`)}</span>{" "}
                  <span className="text-muted-foreground">{t("masteredN", { n: s.mastered })}</span>
                </p>
                {s.next !== null && <p className="mt-0.5 text-xs font-semibold text-muted-foreground">{t("nextTier", { n: s.next - s.mastered })}</p>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="clay-sm p-4 text-sm text-muted-foreground">{t("noBadges")}</p>
      )}
    </section>
  );
}
