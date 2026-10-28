import { ArrowRight, CalendarHeart } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Recap } from "@/server/recap";

/** A one-line pointer to the weekly recap on the home page. */
export async function RecapTeaser({ recap }: { recap: Recap }) {
  const t = await getTranslations("recap");
  return (
    <Link href={recap.which === "last" ? "/recap?week=last" : "/recap"} className="clay-sm clay-press flex items-center gap-4 p-4 sm:p-5">
      <span className="grid size-11 shrink-0 place-items-center rounded-[14px] bg-orange-500 text-white shadow-clay-sm">
        <CalendarHeart className="size-6" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-extrabold">{recap.which === "last" ? t("lastWeek") : t("teaser")}</span>
        <span className="block text-sm text-muted-foreground">{t("teaserText", { n: recap.answers, days: recap.learningDays })}</span>
      </span>
      <ArrowRight className="size-5 shrink-0 text-primary" aria-hidden="true" />
    </Link>
  );
}
