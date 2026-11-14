import { BookOpenCheck, CalendarDays, Flame, NotebookPen, Target } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { levelSwatch } from "@/components/site/mastery-badge";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { localShown } from "@/lib/questions";
import { cn, pick } from "@/lib/utils";
import { getUserMastery } from "@/server/mastery";
import { getMotivation } from "@/server/motivation";
import { getUserCourseSummaries, getUserTotals } from "@/server/progress";
import { getMistakes, getReviewSummary } from "@/server/review";

/**
 * One pupil's work as a teacher or parent sees it: the week, every course with
 * its units, the units that need work, and the latest mistakes. Read-only, and
 * nothing in it changes the pupil's data.
 */
export async function PupilReport({ userId, locale }: { userId: string; locale: string }) {
  const [t, totals, courses, mastery, motivation, review, mistakes] = await Promise.all([
    getTranslations(),
    getUserTotals(userId),
    getUserCourseSummaries(userId),
    getUserMastery(userId),
    getMotivation(userId),
    getReviewSummary(userId),
    getMistakes(userId, 6),
  ]);
  const pct = (x: number | null) => (x === null ? "–" : `${Math.round(x * 100)}%`);

  const stats = [
    { icon: Flame, value: motivation.streak.days, label: t("report.streak") },
    { icon: CalendarDays, value: `${motivation.week.done}/7`, label: t("report.thisWeek") },
    { icon: BookOpenCheck, value: totals.completed, label: t("progress.lessonsDone") },
    { icon: Target, value: pct(totals.avgScore), label: t("progress.avgScore") },
  ];
  const weak = courses.flatMap((c) =>
    (mastery.get(c.courseId) ?? [])
      .filter((s) => s.evidence.cards >= 3 && s.level !== "mastered" && s.evidence.correct / s.evidence.cards < 0.6)
      .map((s) => ({ c, s, share: s.evidence.correct / s.evidence.cards })),
  ).sort((a, b) => a.share - b.share).slice(0, 6);

  return (
    <div className="space-y-6 sm:space-y-8">
      <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="clay-sm p-4">
            <Icon className="size-5 text-primary" aria-hidden="true" />
            <dd className="mt-1 text-2xl font-black tabular-nums sm:text-3xl">{value}</dd>
            <dt className="mt-0.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">{label}</dt>
          </div>
        ))}
      </dl>
      <p className="text-sm font-semibold text-muted-foreground">
        {t("report.reviewLine", { ready: review.ready, mistakes: review.mistakes, days: review.daysThisWeek })}
      </p>

      {weak.length > 0 && (
        <section aria-labelledby="weak" className="space-y-3">
          <h2 id="weak" className="text-xl font-extrabold">{t("report.needsWork")}</h2>
          <ul className="clay divide-y divide-border/70 overflow-hidden">
            {weak.map(({ c, s, share }) => (
              <li key={s.skillId} className={cn("flex items-center gap-3 px-4 py-3", `subject-${c.subjectColor}`)}>
                <span className="grid size-9 shrink-0 place-items-center rounded-xl text-white" style={{ background: "var(--s)" }}>
                  <SubjectIcon name={c.subjectIcon} className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold">{pick(s.title, locale)}</span>
                  <span className="block text-xs font-semibold text-muted-foreground">
                    {pick(c.subjectName, locale)} · {t("grade.title", { grade: c.grade })} · {t("report.rightShare", { pct: Math.round(share * 100) })}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="courses" className="space-y-3">
        <h2 id="courses" className="text-xl font-extrabold">{t("progress.bySubject")}</h2>
        {courses.length === 0 ? (
          <p className="clay p-5 text-muted-foreground">{t("report.nothingYet")}</p>
        ) : (
          <ul className="grid gap-3 md:grid-cols-2">
            {courses.map((c) => {
              const done = c.totalLessons ? Math.min(100, Math.round((c.completed / c.totalLessons) * 100)) : 0;
              const skills = (mastery.get(c.courseId) ?? []).filter((s) => s.evidence.lessons > 0);
              return (
                <li key={c.courseId} className={cn("clay-sm p-4", `subject-${c.subjectColor}`)}>
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl text-white" style={{ background: "var(--s)" }}>
                      <SubjectIcon name={c.subjectIcon} className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1 font-bold">
                      {pick(c.subjectName, locale)} · {t("grade.title", { grade: c.grade })}
                    </span>
                    <span className="text-sm font-bold tabular-nums text-muted-foreground">{t("progress.courseLine", { done: c.completed, total: c.totalLessons })}</span>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={done} aria-valuemin={0} aria-valuemax={100} aria-label={`${pick(c.courseTitle, locale)} ${done}%`}>
                    <div className="h-full rounded-full" style={{ width: `${done}%`, background: "var(--s)" }} />
                  </div>
                  {skills.length > 0 && (
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span className="flex flex-wrap gap-1" aria-hidden="true">
                        {skills.map((s) => (
                          <span key={s.skillId} title={`${pick(s.title, locale)}: ${t(`mastery.${s.level}`)}`} className={cn("size-3.5 rounded-[4px]", levelSwatch[s.level])} />
                        ))}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground">{t("mastery.unitsMastered", { n: skills.filter((s) => s.level === "mastered").length, total: skills.length })}</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {mistakes.length > 0 && (
        <section aria-labelledby="mistakes" className="space-y-3">
          <h2 id="mistakes" className="flex items-center gap-2 text-xl font-extrabold">
            <NotebookPen className="size-5 text-primary" aria-hidden="true" />
            {t("report.mistakes")}
          </h2>
          <ul className="clay divide-y divide-border/70 overflow-hidden">
            {mistakes.map((m) => {
              const shown = localShown(m.shown, (x) => pick(x, locale));
              return (
                <li key={m.itemId} className="px-4 py-3">
                  <p className="font-semibold leading-snug">{shown.prompt}</p>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    {m.subjectName ? `${pick(m.subjectName, locale)} · ` : ""}
                    {m.href ? (
                      <Link href={m.href} className="text-primary hover:underline">
                        {pick(m.refTitle, locale)}
                      </Link>
                    ) : (
                      pick(m.refTitle, locale)
                    )}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
