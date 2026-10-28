import type { Metadata } from "next";
import { Presentation } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";
import { GameHeader } from "@/components/fun/game-header";
import { LiveHost } from "@/components/fun/live-host";
import { pick } from "@/lib/utils";
import { liveCatalogue } from "@/server/live-quiz";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "live" });
  return { title: t("hostTitle") };
}

export default async function LiveHostPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const user = await getCurrentUser();
  if (!user) redirect({ href: `/login?next=${encodeURIComponent("/live/host")}`, locale });
  const [t, tg, l] = await Promise.all([getTranslations("live"), getTranslations("games"), getLocale()]);
  const catalogue = await liveCatalogue((x) => pick(x, l));
  return (
    <div className="mx-auto max-w-5xl space-y-5 sm:space-y-6">
      <GameHeader icon={Presentation} color="subject-rose" title={t("hostTitle")} intro={t("hostIntro")} back={tg("back")} />
      <LiveHost catalogue={catalogue} />
    </div>
  );
}
