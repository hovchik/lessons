import type { Metadata } from "next";
import { Languages } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { GameHeader } from "@/components/fun/game-header";
import { WordsGame } from "@/components/fun/words-game";
import { wordLevelFor, type WordLevel } from "@/lib/words";
import { getBests } from "@/server/games";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });
  return { title: t("words.name") };
}

export default async function WordsPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ level?: string; mode?: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [q, user, t] = await Promise.all([searchParams, getCurrentUser(), getTranslations("games")]);
  const level: WordLevel = q.level === "1" || q.level === "2" ? (Number(q.level) as WordLevel) : wordLevelFor(user?.grade ?? null);
  const mode = q.mode === "calm" ? "calm" : "sprint";
  const bests = user ? await getBests(user.id) : {};

  return (
    <div className="mx-auto max-w-3xl space-y-5 sm:space-y-6">
      <GameHeader icon={Languages} color="subject-sky" title={t("words.name")} intro={t("words.intro")} back={t("back")} />
      <WordsGame initial={{ level, mode }} bests={bests} signedIn={!!user} />
    </div>
  );
}
