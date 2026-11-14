import { ArrowRight, Compass, Landmark, Sparkles } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { GradePicker } from "@/components/site/grade-picker";
import { HowtoCard } from "@/components/site/howto-card";
import { MotivationCard } from "@/components/site/motivation-card";
import { PuzzleCard } from "@/components/fun/puzzle-card";
import { RecapTeaser } from "@/components/fun/recap-teaser";
import { ReviewCard } from "@/components/site/review-card";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { buttonClasses } from "@/components/ui/button";
import { cn, pick } from "@/lib/utils";
import { getHowtos } from "@/server/howto";
import { getStats, getSubjectGradeRanges, getSubjects } from "@/server/queries";
import { getMotivation } from "@/server/motivation";
import { getPuzzleCard } from "@/server/puzzle";
import { getRecap } from "@/server/recap";
import { getReviewSummaryCached } from "@/server/review";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const l = await getLocale();
  const [subjects, rangeRows, stats, user, howtos] = await Promise.all([getSubjects(), getSubjectGradeRanges(), getStats(), getCurrentUser(), getHowtos()]);
  // Three how-tos a day, a different set each day, from different ages.
  const day = Math.floor(Date.now() / 86_400_000);
  const featured = howtos.length ? [0, 1, 2].map((k) => howtos[(day * 7 + k * Math.ceil(howtos.length / 3)) % howtos.length]).filter((c, i, a) => a.indexOf(c) === i) : [];
  const [review, motivation] = user ? await Promise.all([getReviewSummaryCached(user.id), getMotivation(user.id)]) : [null, null];
  const puzzle = await getPuzzleCard(user?.id ?? null);
  // Early in the week the recap looks back at last week; later it shows this week so far.
  const early = [1, 2].includes(new Date().getUTCDay());
  const recap = user && motivation?.hasActivity ? await getRecap(user.id, early ? "last" : "this") : null;
  const ranges = new Map(rangeRows.map((r) => [r.subjectId, r]));

  return (
    <div className="space-y-10 sm:space-y-14">
      {review && review.ready > 0 && <ReviewCard summary={review} />}
      {motivation?.hasActivity && <MotivationCard m={motivation} />}
      {user && <PuzzleCard card={puzzle} />}
      {recap && recap.answers > 0 && <RecapTeaser recap={recap} />}
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

      {!user && <PuzzleCard card={puzzle} />}

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
                  <span className="fx-chip grid size-12 place-items-center rounded-[16px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
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

      {featured.length > 0 && (
        <section aria-labelledby="howto-title" className="subject-sienna">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 id="howto-title" className="flex items-center gap-2 text-2xl font-extrabold sm:text-3xl">
                <Compass className="size-7 shrink-0" style={{ color: "var(--s)" }} aria-hidden="true" />
                {t("howto.homeTitle")}
              </h2>
              <p className="mt-1 text-muted-foreground">{t("howto.homeText")}</p>
            </div>
            <Link href="/howto" className="hidden min-h-11 shrink-0 font-bold sm:inline-flex sm:items-center sm:gap-1" style={{ color: "var(--s-text)" }}>
              {t("howto.all")}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="stagger mt-5 grid gap-3 sm:mt-6 md:grid-cols-3">
            {featured.map((c) => <HowtoCard key={`${c.grade}-${c.slug}`} card={c} />)}
          </ul>
          <Link href="/howto" className={cn(buttonClasses({ variant: "secondary" }), "mt-4 w-full sm:hidden")}>
            {t("howto.all")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </section>
      )}

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
