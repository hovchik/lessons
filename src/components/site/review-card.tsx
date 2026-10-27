import { ArrowRight, BrainCircuit, CalendarCheck, NotebookPen } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { getReviewSummary } from "@/server/review";

/** The Daily Review entry point shown on the home and progress pages for a signed-in pupil. */
export async function ReviewCard({ summary, className }: { summary: Awaited<ReturnType<typeof getReviewSummary>>; className?: string }) {
  const t = await getTranslations("review");
  if (summary.cards === 0) return null;
  const ready = summary.ready > 0;
  return (
    <section aria-labelledby="review-card-title" className={cn("clay relative overflow-hidden p-5 sm:p-7", ready && "ring-3 ring-primary/40", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className={cn("grid size-12 shrink-0 place-items-center rounded-[16px] shadow-clay-sm sm:size-14", ready ? "bg-primary text-primary-foreground" : "bg-muted text-primary")}>
            <BrainCircuit className="size-7" aria-hidden="true" />
          </span>
          <div>
            <h2 id="review-card-title" className="text-xl font-extrabold sm:text-2xl">{t("title")}</h2>
            <p className="mt-0.5 font-bold text-primary">{ready ? t("ready", { n: summary.ready }) : t("caughtUp")}</p>
            <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarCheck className="size-4" aria-hidden="true" />
                {t("daysThisWeek", { n: summary.daysThisWeek })}
              </span>
              {summary.mistakes > 0 && (
                <Link href="/review/mistakes" className="inline-flex min-h-6 items-center gap-1.5 hover:text-primary">
                  <NotebookPen className="size-4" aria-hidden="true" />
                  {t("mistakesCount", { n: summary.mistakes })}
                </Link>
              )}
            </p>
          </div>
        </div>
        {ready ? (
          <Link href="/review" className={buttonClasses({ size: "lg", className: "w-full sm:w-auto" })}>
            {t("start")}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        ) : (
          summary.mistakes > 0 && (
            <Link href="/review?mode=mistakes" className={buttonClasses({ variant: "secondary", size: "lg", className: "w-full sm:w-auto" })}>
              {t("practise")}
            </Link>
          )
        )}
      </div>
    </section>
  );
}
