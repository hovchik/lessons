import type { Metadata } from "next";
import { ArrowRight, BrainCircuit, CalendarCheck, NotebookPen, PartyPopper } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link, redirect } from "@/i18n/navigation";
import { ReviewSession } from "@/components/site/review-session";
import { buttonClasses } from "@/components/ui/button";
import { getReviewQueue, getReviewSummary } from "@/server/review";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "review" });
  return { title: t("title") };
}

export default async function ReviewPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ mode?: string }> }) {
  const { locale } = await params;
  const { mode: rawMode } = await searchParams;
  setRequestLocale(locale);
  const mode = rawMode === "mistakes" ? "mistakes" : "due";
  const user = await getCurrentUser();
  if (!user) redirect({ href: `/login?next=${encodeURIComponent(mode === "mistakes" ? "/review?mode=mistakes" : "/review")}`, locale });
  const u = user!;
  const [t, items, summary] = await Promise.all([getTranslations("review"), getReviewQueue(u.id, { mode }), getReviewSummary(u.id)]);
  await touchLastSeen(u.id);

  return (
    <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
      <header className="clay relative overflow-hidden p-5 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
        <div className="relative flex items-start gap-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-[18px] bg-primary text-primary-foreground shadow-clay-sm">
            {mode === "mistakes" ? <NotebookPen className="size-7" aria-hidden="true" /> : <BrainCircuit className="size-7" aria-hidden="true" />}
          </span>
          <div>
            <h1 className="text-2xl font-black text-balance sm:text-4xl">{mode === "mistakes" ? t("practiseTitle") : t("title")}</h1>
            <p className="mt-2 text-muted-foreground">{mode === "mistakes" ? t("practiseIntro") : t("intro")}</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarCheck className="size-4" aria-hidden="true" />
                {t("daysThisWeek", { n: summary.daysThisWeek })}
              </span>
              {summary.mistakes > 0 && (
                <Link href="/review/mistakes" className="inline-flex items-center gap-1.5 hover:text-primary">
                  <NotebookPen className="size-4" aria-hidden="true" />
                  {t("mistakesCount", { n: summary.mistakes })}
                </Link>
              )}
            </p>
          </div>
        </div>
      </header>

      {items.length > 0 ? (
        <ReviewSession key={mode} items={items} more={mode === "due" && summary.ready > items.length} />
      ) : (
        <section className="clay p-6 text-center sm:p-10">
          <span className="mx-auto grid size-16 place-items-center rounded-[20px] bg-muted text-primary">
            <PartyPopper className="size-8" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-extrabold">{summary.cards === 0 ? t("emptyTitle") : mode === "mistakes" ? t("noMistakesTitle") : t("caughtUp")}</h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">{summary.cards === 0 ? t("emptyText") : mode === "mistakes" ? t("noMistakesText") : t("caughtUpText")}</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            {mode === "due" && summary.mistakes > 0 && (
              <Link href="/review?mode=mistakes" className={buttonClasses({ size: "lg" })}>
                {t("practise")}
              </Link>
            )}
            <Link href={u.grade ? `/grade/${u.grade}` : "/subjects"} className={buttonClasses({ variant: mode === "due" && summary.mistakes > 0 ? "secondary" : "primary", size: "lg" })}>
              {t("learnSomethingNew")}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
