import { ArrowRight, CheckCircle2, Flame, Puzzle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/button";
import { puzzleStatus } from "@/lib/puzzle";
import { cn } from "@/lib/utils";
import type { getPuzzleCard } from "@/server/puzzle";
import { PUZZLE_THEMES } from "./puzzle-theme";

/** Today's puzzle on the home and play pages: both levels, how each went, and the puzzle streak. */
export async function PuzzleCard({ card, className }: { card: Awaited<ReturnType<typeof getPuzzleCard>>; className?: string }) {
  const t = await getTranslations("puzzle");
  return (
    <section aria-labelledby="puzzle-card-title" className={cn("clay relative overflow-hidden p-5 sm:p-7", className)}>
      <div className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-violet-200/50 blur-3xl" aria-hidden="true" />
      <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="fx-pop grid size-12 shrink-0 place-items-center rounded-[16px] bg-violet-600 text-white shadow-clay-sm sm:size-14">
            <Puzzle className="size-7" aria-hidden="true" />
          </span>
          <div>
            <h2 id="puzzle-card-title" className="text-xl font-extrabold sm:text-2xl">
              {t("cardTitle")} <span className="text-muted-foreground">#{card.number}</span>
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">{t("cardText")}</p>
            {card.streak > 0 && (
              <p className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-orange-600">
                <Flame className="size-4" aria-hidden="true" />
                {t("streak", { n: card.streak })}
              </p>
            )}
          </div>
        </div>
        <ul className="grid gap-2 lg:min-w-72">
          {card.levels.map(({ level, theme, state }) => {
            const Icon = PUZZLE_THEMES[theme].icon;
            const s = state ? puzzleStatus(state) : null;
            return (
              <li key={level}>
                <Link
                  href={`/puzzle?level=${level}`}
                  className={cn(buttonClasses({ variant: s?.over ? "secondary" : "primary", size: "md", className: "w-full justify-between" }), PUZZLE_THEMES[theme].color)}
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="size-5" aria-hidden="true" />
                    {t(`level.${level}`)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm">
                    {s?.over ? (
                      <>
                        {state!.solved && <CheckCircle2 className="size-4 text-success" aria-hidden="true" />}
                        {state!.solved ? t("cardDone") : t("cardFailed")}
                      </>
                    ) : (
                      <>
                        {t("cardOpen")}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </>
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
