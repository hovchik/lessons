import type { Metadata } from "next";
import { HeartHandshake } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PupilReport } from "@/components/site/pupil-report";
import { pupilForToken } from "@/server/classes";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { robots: { index: false, follow: false }, referrer: "no-referrer" };

/** What a parent sees through the pupil's link: read-only, no account needed. */
export default async function ParentPage({ params }: { params: Promise<{ locale: string; token: string }> }) {
  const { locale, token } = await params;
  setRequestLocale(locale);
  const pupil = await pupilForToken(token);
  if (!pupil) notFound();
  const [t, tg] = await Promise.all([getTranslations("classes"), getTranslations("grade")]);
  return (
    <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
      <header className="clay flex items-center gap-4 p-5 sm:p-8">
        <span className="grid size-14 shrink-0 place-items-center rounded-[18px] bg-primary text-primary-foreground shadow-clay-sm">
          <HeartHandshake className="size-7" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-primary">{t("parentHeader")}</p>
          <h1 className="text-2xl font-black sm:text-4xl">
            {pupil.displayName}
            {pupil.grade ? <span className="text-muted-foreground"> · {tg("title", { grade: pupil.grade })}</span> : null}
          </h1>
        </div>
      </header>
      <PupilReport userId={pupil.userId} locale={locale} />
      <p className="text-sm text-muted-foreground">{t("parentFooter")}</p>
    </div>
  );
}
