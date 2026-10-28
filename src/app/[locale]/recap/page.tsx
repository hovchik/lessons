import type { Metadata } from "next";
import { BookCheck, CalendarDays, CheckCircle2, Gamepad2, Layers, Puzzle, Sparkles, Star, TrendingDown, TrendingUp } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Link, redirect } from "@/i18n/navigation";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { buttonClasses } from "@/components/ui/button";
import { DAY_ANSWERS } from "@/lib/motivation";
import { addDays } from "@/lib/exam-plan";
import { cn, pick } from "@/lib/utils";
import { getRecap } from "@/server/recap";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "recap" });
  return { title: t("title") };
}

export default async function RecapPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ week?: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const user = await getCurrentUser();
  if (!user) redirect({ href: `/login?next=${encodeURIComponent("/recap")}`, locale });
  const [{ week: w }, t, l] = await Promise.all([searchParams, getTranslations("recap"), getLocale()]);
  const which = w === "last" ? "last" : "this";
  const r = await getRecap(user!.id, which);
  const fmtDay = new Intl.DateTimeFormat(l, { day: "numeric", month: "long", timeZone: "UTC" });
  const fmtDow = new Intl.DateTimeFormat(l, { weekday: "short", timeZone: "UTC" });
  const fmtDowLong = new Intl.DateTimeFormat(l, { weekday: "long", timeZone: "UTC" });
  const at = (d: string) => new Date(`${d}T00:00:00Z`);
  const max = Math.max(DAY_ANSWERS * 2, ...r.days.map((d) => d.answers));
  const pct = r.answers ? Math.round((r.correct / r.answers) * 100) : 0;
  const empty = r.answers === 0 && r.lessons === 0 && r.puzzlesSolved === 0 && r.gameRounds === 0;
  const today = new Date().toISOString().slice(0, 10);

  const tiles = [
    { icon: CheckCircle2, label: t("answers"), value: r.answers, sub: r.answers ? t("right", { pct }) : null, tone: "text-success" },
    { icon: CalendarDays, label: t("learningDays"), value: `${r.learningDays}/${r.goal}`, sub: t("goal"), tone: "text-orange-600" },
    { icon: Star, label: t("points"), value: r.points, sub: null, tone: "text-amber-600" },
    { icon: BookCheck, label: t("lessons"), value: r.lessons, sub: null, tone: "text-primary" },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <header className="clay relative overflow-hidden p-5 sm:p-8 subject-orange">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-50 blur-3xl" style={{ background: "var(--s-soft)" }} aria-hidden="true" />
        <div className="relative">
          <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--s-text)" }}>
            {fmtDay.format(at(r.week.start))} – {fmtDay.format(at(addDays(r.week.end, -1)))}
          </p>
          <h1 className="mt-1 text-2xl font-black sm:text-3xl">{which === "this" ? t("thisWeek") : t("lastWeek")}</h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t("intro", { name: user!.displayName })}</p>
        </div>
        <nav aria-label={t("weeks")} className="relative mt-4 grid grid-cols-2 gap-2 rounded-2xl bg-muted p-1 sm:inline-grid">
          {(["this", "last"] as const).map((k) => (
            <Link
              key={k}
              href={k === "this" ? "/recap" : "/recap?week=last"}
              aria-current={k === which ? "page" : undefined}
              className={cn("inline-flex min-h-11 items-center justify-center rounded-xl px-4 text-sm font-extrabold", k === which ? "bg-card shadow-clay-sm" : "text-muted-foreground hover:text-foreground")}
            >
              {k === "this" ? t("thisWeek") : t("lastWeek")}
            </Link>
          ))}
        </nav>
      </header>

      {empty ? (
        <section className="clay space-y-4 p-6 text-center sm:p-10">
          <p className="text-4xl" aria-hidden="true">🌱</p>
          <h2 className="text-xl font-extrabold">{which === "this" ? t("emptyThis") : t("emptyLast")}</h2>
          <p className="text-muted-foreground">{t("emptyHint")}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/review" className={buttonClasses({ size: "lg" })}>{t("startReview")}</Link>
            <Link href="/play" className={buttonClasses({ size: "lg", variant: "secondary" })}>{t("play")}</Link>
          </div>
        </section>
      ) : (
        <>
          <ul className="grid grid-cols-2 gap-3 stagger lg:grid-cols-4">
            {tiles.map(({ icon: Icon, label, value, sub, tone }) => (
              <li key={label} className="clay-sm p-4">
                <p className={cn("flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide", tone)}>
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </p>
                <p className="mt-1 text-3xl font-black tabular-nums">{value}</p>
                {sub && <p className="text-xs font-bold text-muted-foreground">{sub}</p>}
              </li>
            ))}
          </ul>

          <section aria-labelledby="days-title" className="clay p-4 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="days-title" className="text-lg font-extrabold">{t("dayByDay")}</h2>
              {r.best && <p className="text-sm font-bold text-muted-foreground">{t("bestDay", { day: fmtDowLong.format(at(r.best.day)), n: r.best.answers })}</p>}
            </div>
            <ol className="mt-4 grid h-40 grid-cols-7 items-end gap-2 sm:gap-4">
              {r.days.map((d) => {
                const counts = d.answers >= DAY_ANSWERS;
                const future = d.day > today;
                return (
                  <li key={d.day} className="flex h-full flex-col items-center justify-end gap-1" aria-label={t("dayLabel", { day: fmtDowLong.format(at(d.day)), n: d.answers })}>
                    <span className="text-xs font-bold tabular-nums text-muted-foreground" aria-hidden="true">{d.answers || ""}</span>
                    <span
                      className={cn("w-full max-w-12 rounded-t-[10px] rounded-b-[4px]", counts ? "bg-orange-500" : d.answers ? "bg-orange-200" : "bg-muted", future && "opacity-40")}
                      style={{ height: `${Math.max(6, (d.answers / max) * 100)}%` }}
                      aria-hidden="true"
                    />
                    <span className={cn("text-xs font-extrabold", d.day === today && "text-primary")} aria-hidden="true">{fmtDow.format(at(d.day))}</span>
                  </li>
                );
              })}
            </ol>
            <p className="mt-3 flex items-center gap-2 text-xs font-bold text-muted-foreground">
              <span className="size-3 rounded-sm bg-orange-500" aria-hidden="true" />
              {t("countsAsDay", { n: DAY_ANSWERS })}
            </p>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <section aria-labelledby="highlights-title" className="clay space-y-3 p-4 sm:p-6">
              <h2 id="highlights-title" className="flex items-center gap-2 text-lg font-extrabold">
                <Sparkles className="size-5 text-amber-500" aria-hidden="true" />
                {t("highlights")}
              </h2>
              <ul className="space-y-3 text-sm">
                {r.vsLastWeek.answers !== null && r.vsLastWeek.answers !== 0 && (
                  <li className="flex items-start gap-2">
                    {r.vsLastWeek.answers > 0 ? <TrendingUp className="size-5 shrink-0 text-success" aria-hidden="true" /> : <TrendingDown className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />}
                    <span className="font-semibold">{r.vsLastWeek.answers > 0 ? t("moreThanBefore", { pct: r.vsLastWeek.answers }) : t("lessThanBefore", { pct: -r.vsLastWeek.answers })}</span>
                  </li>
                )}
                {r.unitsPassed.map((u) => (
                  <li key={u.href} className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 shrink-0 text-success" aria-hidden="true" />
                    <span>
                      {t("unitPassed")}{" "}
                      <Link href={u.href} className="font-bold text-primary hover:underline">{pick(u.title, l)}</Link>
                    </span>
                  </li>
                ))}
                {r.cards.length > 0 && (
                  <li className="flex items-start gap-2">
                    <Layers className="size-5 shrink-0 text-violet-600" aria-hidden="true" />
                    <span>
                      <Link href="/cards" className="font-bold text-primary hover:underline">{t("cardsWon", { n: r.cards.length })}</Link>{" "}
                      <span aria-hidden="true">{r.cards.map((c) => c.emoji).join(" ")}</span>
                    </span>
                  </li>
                )}
                {r.puzzlesSolved > 0 && (
                  <li className="flex items-start gap-2">
                    <Puzzle className="size-5 shrink-0 text-sky-600" aria-hidden="true" />
                    <span className="font-semibold">{t("puzzles", { n: r.puzzlesSolved })}</span>
                  </li>
                )}
                {r.gameRounds > 0 && (
                  <li className="flex items-start gap-2">
                    <Gamepad2 className="size-5 shrink-0 text-orange-600" aria-hidden="true" />
                    <span className="font-semibold">{t("games", { n: r.gameRounds })}</span>
                  </li>
                )}
                {r.learningDays >= r.goal && (
                  <li className="flex items-start gap-2">
                    <Star className="size-5 shrink-0 fill-amber-400 text-amber-500" aria-hidden="true" />
                    <span className="font-semibold">{t("goalMet")}</span>
                  </li>
                )}
              </ul>
            </section>

            <section aria-labelledby="subjects-title" className="clay space-y-3 p-4 sm:p-6">
              <h2 id="subjects-title" className="text-lg font-extrabold">{t("subjects")}</h2>
              {r.subjects.length === 0 ? (
                <p className="text-sm text-muted-foreground">{t("noSubjects")}</p>
              ) : (
                <ul className="space-y-3">
                  {r.subjects.slice(0, 6).map((s) => (
                    <li key={s.subjectId} className={cn("text-sm", `subject-${s.color}`)}>
                      <div className="flex items-center justify-between gap-2 font-bold">
                        <span className="inline-flex items-center gap-2">
                          <SubjectIcon name={s.icon} className="size-4" style={{ color: "var(--s)" }} />
                          {pick(s.name, l)}
                        </span>
                        <span className="tabular-nums text-muted-foreground">{s.answers}</span>
                      </div>
                      <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
                        <div className="h-full rounded-full" style={{ width: `${(s.answers / r.subjects[0].answers) * 100}%`, background: "var(--s)" }} />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </>
      )}
    </div>
  );
}
