import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CalcGame } from "@/components/fun/calc-game";
import { GameHeader } from "@/components/fun/game-header";
import { CALC_TOPICS, topicsFor, type CalcChoice } from "@/lib/calc";
import { getBests } from "@/server/games";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });
  return { title: t("calc.name") };
}

type Search = Promise<{ grade?: string; topic?: string; mode?: string }>;

export default async function CalcPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Search }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [q, user, t] = await Promise.all([searchParams, getCurrentUser(), getTranslations("games")]);
  // The pupil's own grade by default; from grade 10 on, the hardest set.
  const asked = Number(q.grade);
  const grade = Number.isInteger(asked) && asked >= 1 && asked <= 9 ? asked : Math.min(9, user?.grade ?? 3);
  const topic = q.topic as CalcChoice | undefined;
  const choice: CalcChoice = topic && (topic === "mix" || (CALC_TOPICS.includes(topic) && topicsFor(grade).includes(topic))) ? topic : "mix";
  const mode = q.mode === "calm" ? "calm" : "sprint";
  const bests = user ? await getBests(user.id) : {};

  return (
    <div className="mx-auto max-w-3xl space-y-5 sm:space-y-6">
      <GameHeader icon={Calculator} color="subject-indigo" title={t("calc.name")} intro={t("calc.intro")} back={t("back")} />
      <CalcGame initial={{ grade, choice, mode }} bests={bests} signedIn={!!user} />
    </div>
  );
}
