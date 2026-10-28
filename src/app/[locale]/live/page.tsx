import type { Metadata } from "next";
import { Radio } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { GameHeader } from "@/components/fun/game-header";
import { LivePlayer } from "@/components/fun/live-player";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "live" });
  return { title: t("title") };
}

export default async function LivePage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ pin?: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [{ pin }, t, tg] = await Promise.all([searchParams, getTranslations("live"), getTranslations("games")]);
  return (
    <div className="mx-auto max-w-3xl space-y-5 sm:space-y-6">
      <GameHeader icon={Radio} color="subject-rose" title={t("title")} intro={t("joinIntro")} back={tg("back")} />
      <LivePlayer initialPin={/^\d{6}$/.test(pin ?? "") ? pin! : ""} />
      <p className="text-center text-sm text-muted-foreground">
        {t("teacher")}{" "}
        <Link href="/live/host" className="font-bold text-primary hover:underline">{t("hostLink")}</Link>
      </p>
    </div>
  );
}
