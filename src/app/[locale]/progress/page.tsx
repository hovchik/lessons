import type { Metadata } from "next";
import { ArrowRight, BookOpenCheck, CalendarCheck, History, Sparkles, Trophy } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Link, redirect } from "@/i18n/navigation";
import { LogoutLink } from "@/components/site/logout-link";
import { levelSwatch } from "@/components/site/mastery-badge";
import { ReviewCard } from "@/components/site/review-card";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { buttonClasses } from "@/components/ui/button";
import { cn, pick } from "@/lib/utils";
import { listPlans } from "@/server/exam-plan";
import { getUserMastery } from "@/server/mastery";
import { getRecentAttempts, getUserCourseSummaries, getUserTotals } from "@/server/progress";
import { getReviewSummaryCached } from "@/server/review";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "progress" });
  return { title: t("title") };
}

export default async function ProgressPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const user = await getCurrentUser();
  if (!user) redirect({ href: "/login?next=/progress", locale });
  const u = user!;
  const [t, l, totals, courses, recent, review, mastery, plans] = await Promise.all([
    getTranslations(),
    getLocale(),
    getUserTotals(u.id),
    getUserCourseSummaries(u.id),
    getRecentAttempts(u.id, 8),
    getReviewSummaryCached(u.id),
    getUserMastery(u.id),
    listPlans(u.id),
  ]);
  await touchLastSeen(u.id);

  const pct = (x: number | null) => (x === null ? null : Math.round(x * 100));
  const bySubject = new Map<string, typeof courses>();
  for (const c of courses) bySubject.set(c.subjectId, [...(bySubject.get(c.subjectId) ?? []), c]);
  const dateFmt = new Intl.DateTimeFormat(l, { day: "numeric", month: "short" });

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="clay relative overflow-hidden p-5 sm:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-[20px] bg-accent text-accent-foreground shadow-clay-sm sm:size-16">
              <Trophy className="size-8" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-primary">{t("progress.title")}</p>
              <h1 className="mt-1 text-2xl font-black text-balance sm:text-4xl">{t("progress.hello", { name: u.displayName })}</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                @{u.username}
                {u.grade ? ` · ${t("grade.title", { grade: u.grade })}` : ""}
              </p>
            </div>
          </div>
          <LogoutLink />
        </div>
        <dl className="relative mt-6 grid grid-cols-2 gap-3 sm:mt-8 lg:grid-cols-4">
          {[
            [totals.completed, t("progress.lessonsDone")],
            [pct(totals.avgScore) === null ? "–" : `${pct(totals.avgScore)}%`, t("progress.avgScore")],
            [totals.courses, t("progress.courses")],
            [totals.attempts, t("progress.attempts")],
          ].map(([v, k]) => (
            <div key={String(k)} className="clay-sm p-4">
              <dd className="text-2xl font-black text-primary sm:text-3xl">{v}</dd>
              <dt className="mt-0.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">{k}</dt>
            </div>
          ))}
        </dl>
      </header>

      <ReviewCard summary={review} />

      {plans.length > 0 && (
        <section aria-labelledby="plans" className="space-y-4">
          <h2 id="plans" className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
            <CalendarCheck className="size-6 text-primary" aria-hidden="true" />
            {t("plan.progressTitle")}
          </h2>
          <ul className="clay divide-y divide-border/70 overflow-hidden">
            {plans.map((p) => (
              <li key={p.examId}>
                <Link href={`/exams/${p.examId}/plan`} className="flex min-h-14 items-center gap-3 px-4 py-3 active:bg-muted sm:hover:bg-muted">
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-bold">{pick(p.title, l)}</span>
                    <span className="block text-xs font-semibold text-muted-foreground">
                      {p.status === "diagnostic" ? t("plan.cardTest") : p.daysLeft > 0 ? t("plan.daysLeft", { n: p.daysLeft }) : t("plan.examOver")}
                    </span>
                  </span>
                  <ArrowRight className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {courses.length === 0 ? (
        <section className="clay p-6 text-center sm:p-10">
          <span className="mx-auto grid size-16 place-items-center rounded-[20px] bg-muted text-primary">
            <Sparkles className="size-8" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-extrabold">{t("progress.emptyTitle")}</h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">{t("progress.emptyText")}</p>
          <Link href={u.grade ? `/grade/${u.grade}` : "/"} className={buttonClasses({ size: "lg", className: "mt-6" })}>
            {u.grade ? t("home.ctaGrade", { grade: u.grade }) : t("progress.startLearning")}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </section>
      ) : (
        <section aria-labelledby="by-subject" className="space-y-5">
          <h2 id="by-subject" className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
            <BookOpenCheck className="size-6 text-primary" aria-hidden="true" />
            {t("progress.bySubject")}
          </h2>
          <ul className="grid gap-4 md:grid-cols-2 stagger">
            {[...bySubject.values()].map((list) => {
              const s = list[0];
              return (
                <li key={s.subjectId} className={cn("clay overflow-hidden", `subject-${s.subjectColor}`)}>
                  <div className="flex items-center gap-3 p-4 sm:p-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-[14px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
                      <SubjectIcon name={s.subjectIcon} className="size-6" />
                    </span>
                    <h3 className="text-lg font-extrabold">{pick(s.subjectName, l)}</h3>
                  </div>
                  <ol className="divide-y divide-border/70 border-t border-border/70">
                    {list.map((c) => {
                      const done = c.totalLessons ? Math.min(100, Math.round((c.completed / c.totalLessons) * 100)) : 0;
                      const best = pct(c.avgScore);
                      const skills = (mastery.get(c.courseId) ?? []).filter((s) => s.evidence.lessons > 0);
                      return (
                        <li key={c.courseId}>
                          <Link href={`/${c.subjectId}/${c.grade}`} className="block px-4 py-3 transition-colors active:bg-muted sm:px-5 sm:hover:bg-muted">
                            <div className="flex items-center justify-between gap-3">
                              <span className="font-bold">{t("grade.title", { grade: c.grade })}</span>
                              <span className="text-sm font-bold tabular-nums text-muted-foreground">{t("progress.courseLine", { done: c.completed, total: c.totalLessons })}</span>
                            </div>
                            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={done} aria-valuemin={0} aria-valuemax={100} aria-label={`${pick(c.courseTitle, l)} ${done}%`}>
                              <div className="h-full rounded-full transition-[width]" style={{ width: `${done}%`, background: "var(--s)" }} />
                            </div>
                            <div className="mt-1.5 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                              <span>{best === null ? t("progress.noQuiz") : t("progress.best", { pct: best })}</span>
                              <span>{done}%</span>
                            </div>
                            {skills.length > 0 && (
                              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                                <span className="flex gap-1" aria-hidden="true">
                                  {skills.map((s) => (
                                    <span key={s.skillId} title={`${pick(s.title, l)}: ${t(`mastery.${s.level}`)}`} className={cn("size-3.5 rounded-[4px]", levelSwatch[s.level])} />
                                  ))}
                                </span>
                                <span className="text-xs font-bold text-muted-foreground">
                                  {t("mastery.unitsMastered", { n: skills.filter((s) => s.level === "mastered").length, total: skills.length })}
                                </span>
                              </div>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {recent.length > 0 && (
        <section aria-labelledby="recent" className="space-y-4">
          <h2 id="recent" className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
            <History className="size-6 text-primary" aria-hidden="true" />
            {t("progress.recent")}
          </h2>
          <ol className="clay divide-y divide-border/70 overflow-hidden">
            {recent.map((a) => {
              const okPct = a.total ? a.score / a.total : 0;
              const unitN = a.kind === "unit" ? Number(a.refId.split(".u")[1]) : null;
              const href = a.lessonSlug && a.subjectId ? `/${a.subjectId}/${a.grade}/${a.lessonSlug}` : a.kind === "exam" && a.examTitle ? `/exams/${a.refId}` : unitN && a.subjectId ? `/${a.subjectId}/${a.grade}/check/${unitN}` : null;
              const inner = (
                <>
                  <span
                    className={cn("grid size-11 shrink-0 place-items-center rounded-[14px] text-sm font-black tabular-nums", okPct >= 0.8 ? "bg-emerald-50 text-success" : okPct >= 0.5 ? "bg-amber-50 text-amber-800" : "bg-red-50 text-destructive")}
                  >
                    {a.score}/{a.total}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-bold">{a.lessonTitle ? pick(a.lessonTitle, l) : a.examTitle ? pick(a.examTitle, l) : a.skillTitle ? `${t("mastery.unitCheck")}: ${pick(a.skillTitle, l)}` : t("progress.exam")}</span>
                    <span className="block text-xs font-semibold text-muted-foreground">
                      {a.subjectName ? `${pick(a.subjectName, l)} · ${t("grade.title", { grade: a.grade! })} · ` : ""}
                      {dateFmt.format(new Date(a.createdAt.endsWith("Z") || a.createdAt.includes("T") ? a.createdAt : a.createdAt + "Z"))}
                    </span>
                  </span>
                </>
              );
              return (
                <li key={a.id}>
                  {href ? (
                    <Link href={href} className="flex min-h-14 items-center gap-3 px-4 py-3 active:bg-muted sm:hover:bg-muted">{inner}</Link>
                  ) : (
                    <div className="flex min-h-14 items-center gap-3 px-4 py-3">{inner}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      )}
    </div>
  );
}
