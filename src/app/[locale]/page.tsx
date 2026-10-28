import { ArrowRight, Landmark, Sparkles } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { GradePicker } from "@/components/site/grade-picker";
import { MotivationCard } from "@/components/site/motivation-card";
import { ReviewCard } from "@/components/site/review-card";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { buttonClasses } from "@/components/ui/button";
import { cn, pick } from "@/lib/utils";
import { getStats, getSubjectGradeRanges, getSubjects } from "@/server/queries";
import { getMotivation } from "@/server/motivation";
import { getReviewSummaryCached } from "@/server/review";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const l = await getLocale();
  const [subjects, rangeRows, stats, user] = await Promise.all([getSubjects(), getSubjectGradeRanges(), getStats(), getCurrentUser()]);
  const [review, motivation] = user ? await Promise.all([getReviewSummaryCached(user.id), getMotivation(user.id)]) : [null, null];
  const ranges = new Map(rangeRows.map((r) => [r.subjectId, r]));

  return (
    <div className="space-y-10 sm:space-y-14">
      {review && review.ready > 0 && <ReviewCard summary={review} />}
      {motivation?.hasActivity && <MotivationCard m={motivation} />}
      <section className="clay relative overflow-hidden px-5 py-8 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-secondary/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-bold text-primary">
            <Sparkles className="size-4" aria-hidden="true" />
            {t("app.tagline")}
          </p>
          <h1 className="mt-4 text-[1.9rem] font-black leading-[1.12] tracking-tight text-balance sm:text-5xl">{t("home.heroTitle")}</h1>
          <p className="mt-4 text-base text-muted-foreground sm:mt-5 sm:text-lg">{t("home.heroText")}</p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link href="/grade/1" className={buttonClasses({ size: "lg" })}>
              {t("home.ctaGrade", { grade: 1 })}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <Link href="/subjects" className={buttonClasses({ variant: "secondary", size: "lg" })}>
              {t("home.browseSubjects")}
            </Link>
          </div>
          <dl className="mt-8 grid max-w-md grid-cols-3 gap-3 sm:mt-10 sm:gap-4">
            {[
              [stats.courses, t("home.stats.courses")],
              [stats.lessons, t("home.stats.lessons")],
              [3, t("home.stats.languages")],
            ].map(([n, label]) => (
              <div key={String(label)}>
                <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{label}</dt>
                <dd className="text-2xl font-black text-primary sm:text-3xl">{n}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="grades-title">
        <h2 id="grades-title" className="text-2xl font-extrabold sm:text-3xl">{t("home.pickGrade")}</h2>
        <div className="mt-5 sm:mt-6">
          <GradePicker />
        </div>
      </section>

      <section aria-labelledby="subjects-title">
        <div className="flex items-end justify-between gap-4">
          <h2 id="subjects-title" className="text-2xl font-extrabold sm:text-3xl">{t("home.browseSubjects")}</h2>
          <Link href="/subjects" className="hidden min-h-11 font-bold text-primary sm:inline-flex sm:items-center sm:gap-1">
            {t("subject.title")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-5 grid grid-cols-1 gap-3 stagger min-[420px]:grid-cols-2 sm:mt-6 sm:gap-4 lg:grid-cols-4">
          {subjects.map((s) => {
            const r = ranges.get(s.id);
            return (
              <li key={s.id} className={cn(`subject-${s.color}`)}>
                <Link href={`/${s.id}/${r?.min ?? 1}`} className="clay clay-press flex h-full flex-col gap-2.5 p-4 sm:gap-3 sm:p-5">
                  <span className="grid size-12 place-items-center rounded-[16px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
                    <SubjectIcon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="text-base font-extrabold sm:text-lg">{pick(s.name, l)}</h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground max-[419px]:line-clamp-none">{pick(s.description, l)}</p>
                  {r && (
                    <p className="mt-auto text-sm font-bold" style={{ color: "var(--s-text)" }}>
                      {t("subject.grades", { from: r.min, to: r.max })}
                    </p>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="clay flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-10">
        <span className="grid size-16 shrink-0 place-items-center rounded-[20px] bg-accent text-accent-foreground shadow-clay-sm">
          <Landmark className="size-8" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-extrabold sm:text-2xl">{t("home.curriculumTitle")}</h2>
          <p className="mt-2 text-muted-foreground">{t("home.curriculumText")}</p>
        </div>
      </section>
    </div>
  );
}
