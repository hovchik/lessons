import type { Metadata } from "next";
import { CheckCircle2, Clock, Flag, Lock, PlayCircle } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { buttonClasses } from "@/components/ui/button";
import { cn, pick } from "@/lib/utils";
import { getCourse, getCourses } from "@/server/queries";

type Params = Promise<{ locale: string; subject: string; grade: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, subject, grade } = await params;
  const data = await getCourse(subject, Number(grade));
  if (!data) return {};
  return { title: pick(data.course.title, locale), description: pick(data.course.description, locale) };
}

export default async function CoursePage({ params }: { params: Params }) {
  const { locale, subject, grade: g } = await params;
  setRequestLocale(locale);
  const grade = Number(g);
  const data = await getCourse(subject, grade);
  if (!data) notFound();
  const t = await getTranslations();
  const l = await getLocale();
  const { course, subject: subj, units, readyCount, totalCount } = data;
  const siblings = await getCourses({ subjectId: subject });
  const firstReady = units.flatMap((u) => u.lessons).find((x) => x.status === "published") ?? units[0]?.lessons[0];
  const hours = course.hoursPerWeek;

  return (
    <div className={cn("space-y-8 sm:space-y-10", `subject-${subj.color}`)}>
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted-foreground">
        <ol className="scroll-x -mx-4 flex items-center gap-2 whitespace-nowrap px-4 sm:mx-0 sm:flex-wrap sm:whitespace-normal sm:px-0">
          <li><Link href="/" className="inline-flex min-h-11 items-center hover:text-primary">{t("nav.home")}</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/grade/${grade}`} className="inline-flex min-h-11 items-center hover:text-primary">{t("grade.title", { grade })}</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">{pick(subj.name, l)}</li>
        </ol>
      </nav>

      <header className="clay relative overflow-hidden p-5 sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full opacity-40 blur-3xl" style={{ background: "var(--s-soft)" }} aria-hidden="true" />
        <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <span className="grid size-14 shrink-0 sm:size-16 place-items-center rounded-[20px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
            <SubjectIcon name={subj.icon} className="size-8" />
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--s-text)" }}>{pick(subj.name, l)}</p>
            <h1 className="mt-1 text-2xl font-black text-balance sm:text-4xl">{pick(course.title, l)}</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">{pick(course.description, l)}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-bold sm:mt-5 sm:gap-3">
              <span className="rounded-full bg-muted px-3 py-1">{t("course.lessonsCount", { count: totalCount })}</span>
              <span className="rounded-full bg-muted px-3 py-1">{t("course.progress", { done: readyCount, total: totalCount })}</span>
            </div>
            {firstReady && (
              <Link href={`/${subject}/${grade}/${firstReady.slug}`} className={buttonClasses({ size: "lg", className: "mt-5 w-full sm:mt-6 sm:w-auto" })}>
                <PlayCircle className="size-5" aria-hidden="true" />
                {t("course.start")}
              </Link>
            )}
          </div>
        </div>
      </header>

      <section aria-labelledby="curriculum-title" className="grid gap-4 md:grid-cols-2">
        <h2 id="curriculum-title" className="md:col-span-2 text-xl font-extrabold sm:text-2xl">{t("course.curriculum")}</h2>
        {(["armenia", "russia"] as const).map((country) => (
          <article key={country} className="clay-sm p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
              <h3 className="flex items-center gap-2 text-lg font-extrabold">
                <Flag className="size-5 text-primary" aria-hidden="true" />
                {t(`course.${country}`)}
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
                <Clock className="size-3.5" aria-hidden="true" />
                {hours[country] ? t("course.hoursPerWeek", { hours: hours[country] }) : t("course.hoursNA")}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pick(course.curriculumNotes[country], l)}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="units-title" className="space-y-6">
        <h2 id="units-title" className="text-xl font-extrabold sm:text-2xl">{t("course.units")}</h2>
        <ol className="space-y-5 stagger">
          {units.map((u, ui) => (
            <li key={u.id} className="clay overflow-hidden">
              <div className="flex items-start gap-3 p-4 sm:gap-4 sm:p-6">
                <span className="grid size-10 shrink-0 sm:size-11 place-items-center rounded-[14px] text-lg font-black text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
                  {ui + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{t("course.unit", { n: ui + 1 })}</p>
                  <h3 className="text-lg font-extrabold text-balance sm:text-xl">{pick(u.title, l)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{pick(u.summary, l)}</p>
                </div>
              </div>
              <ol className="divide-y divide-border/70 border-t border-border/70">
                {u.lessons.map((lsn, li) => {
                  const ready = lsn.status === "published";
                  return (
                    <li key={lsn.id}>
                      <Link
                        href={`/${subject}/${grade}/${lsn.slug}`}
                        className={cn("flex min-h-14 items-center gap-3 px-4 py-3 transition-colors active:bg-muted sm:gap-4 sm:px-6 sm:hover:bg-muted", !ready && "text-muted-foreground")}
                      >
                        <span className="w-6 shrink-0 text-sm font-extrabold tabular-nums text-muted-foreground sm:w-8">{li + 1}</span>
                        <span className="min-w-0 flex-1 font-semibold leading-snug">{pick(lsn.title, l)}</span>
                        {ready ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-success">
                            <CheckCircle2 className="size-4" aria-hidden="true" />
                            <span className="hidden sm:inline">{t("course.published")}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-bold">
                            <Lock className="size-4" aria-hidden="true" />
                            <span className="hidden sm:inline">{t("course.comingSoon")}</span>
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </li>
          ))}
        </ol>
      </section>

      {siblings.length > 1 && (
        <section aria-labelledby="other-grades">
          <h2 id="other-grades" className="text-lg font-extrabold">{t("course.otherGrades", { subject: pick(subj.name, l) })}</h2>
          <ol className="mt-3 flex flex-wrap gap-2">
            {siblings.map(({ course: c }) => (
              <li key={c.id}>
                <Link
                  href={`/${subject}/${c.grade}`}
                  aria-current={c.grade === grade ? "page" : undefined}
                  className={cn("clay-sm clay-press flex h-12 min-w-12 items-center justify-center px-3 font-extrabold", c.grade === grade && "ring-3 ring-primary")}
                >
                  {c.grade}
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
