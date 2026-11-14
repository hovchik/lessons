import type { Metadata } from "next";
import { Puzzle as PuzzleIcon } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PUZZLE_THEMES } from "@/components/fun/puzzle-theme";
import { PuzzlePlay } from "@/components/fun/puzzle-play";
import { StaticMarkdown } from "@/components/site/static-markdown";
import { levelForGrade, PUZZLE_LEVELS, type PuzzleLevel } from "@/lib/puzzle";
import { cn } from "@/lib/utils";
import { getPuzzlePage } from "@/server/puzzle";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "puzzle" });
  return { title: t("title") };
}

export default async function PuzzlePage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ level?: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [{ level: asked }, user, t, l] = await Promise.all([searchParams, getCurrentUser(), getTranslations("puzzle"), getLocale()]);
  const level: PuzzleLevel = (PUZZLE_LEVELS as readonly string[]).includes(asked ?? "") ? (asked as PuzzleLevel) : levelForGrade(user?.grade);
  const data = await getPuzzlePage(user?.id ?? null, level);
  const theme = PUZZLE_THEMES[data.view.theme];
  const Icon = theme.icon;
  const dateFmt = new Intl.DateTimeFormat(l, { day: "numeric", month: "long", timeZone: "UTC" });

  return (
    <div className={cn("mx-auto max-w-3xl space-y-5 sm:space-y-6", theme.color)}>
      <header className="clay relative overflow-hidden p-5 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-50 blur-3xl" style={{ background: "var(--s-soft)" }} aria-hidden="true" />
        <div className="relative flex items-start gap-4">
          <span className="fx-pop grid size-14 shrink-0 place-items-center rounded-[20px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
            <Icon className="size-7" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--s-text)" }}>
              {t(`theme.${data.view.theme}`)} · {dateFmt.format(new Date(`${data.view.day}T00:00:00Z`))}
            </p>
            <h1 className="mt-1 flex items-center gap-2 text-2xl font-black sm:text-3xl">
              <PuzzleIcon className="size-6 text-muted-foreground" aria-hidden="true" />
              {t("heading", { n: data.view.number })}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{t("intro")}</p>
          </div>
        </div>
        <nav aria-label={t("levels")} className="relative mt-4 grid grid-cols-2 gap-2 rounded-2xl bg-muted p-1 sm:inline-grid">
          {PUZZLE_LEVELS.map((lv) => (
            <Link
              key={lv}
              href={`/puzzle?level=${lv}`}
              aria-current={lv === level ? "page" : undefined}
              className={cn("inline-flex min-h-11 items-center justify-center rounded-xl px-4 text-sm font-extrabold", lv === level ? "bg-card shadow-clay-sm" : "text-muted-foreground hover:text-foreground")}
            >
              {t(`level.${lv}`)}
            </Link>
          ))}
        </nav>
      </header>

      {data.view.visual && <StaticMarkdown lang={l}>{data.view.visual}</StaticMarkdown>}

      <PuzzlePlay
        key={`${data.view.day}:${level}`}
        view={data.view}
        signedIn={!!user}
        initial={data.state ? { state: data.state, reveal: data.reveal, hint: data.hint, streak: data.streak } : null}
      />
    </div>
  );
}
