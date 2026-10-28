import type { Metadata } from "next";
import { ArrowRight, Calculator, CalendarDays, Gamepad2, Languages, Layers, LogIn, Presentation, Radio, type LucideIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PuzzleCard } from "@/components/fun/puzzle-card";
import { buttonClasses } from "@/components/ui/button";
import { CARDS } from "@/content/cards";
import { cn } from "@/lib/utils";
import { syncCards, getAlbum } from "@/server/cards";
import { getBests } from "@/server/games";
import { getPuzzleCard } from "@/server/puzzle";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "play" });
  return { title: t("title") };
}

/** The best sprint over all games whose id starts with `prefix`, or null if none was played. */
function bestSprint(bests: Record<string, number>, prefix: string): number | null {
  const scores = Object.entries(bests)
    .filter(([k]) => k.startsWith(prefix) && k.endsWith(":sprint"))
    .map(([, v]) => v);
  return scores.length ? Math.max(...scores) : null;
}

function Tile({
  href,
  icon: Icon,
  color,
  title,
  text,
  stat,
  children,
}: {
  href: string;
  icon: LucideIcon;
  color: string;
  title: string;
  text: string;
  stat?: string | null;
  children?: React.ReactNode;
}) {
  return (
    <li className={cn("clay clay-press relative isolate flex flex-col overflow-hidden p-5 sm:p-6", color)}>
      <div className="pointer-events-none absolute -right-12 -top-12 -z-10 size-40 rounded-full opacity-50 blur-3xl" style={{ background: "var(--s-soft)" }} aria-hidden="true" />
      {/* Not positioned, so the title link's overlay covers the whole tile. */}
      <div className="flex flex-1 items-start gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-[16px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-extrabold sm:text-xl">
            {/* The whole tile is the link; extra actions below sit above it. */}
            <Link href={href} className="after:absolute after:inset-0 after:rounded-[inherit] hover:text-[var(--s-text)] focus-visible:after:ring-2 focus-visible:after:ring-ring focus-visible:outline-none">
              {title}
            </Link>
          </h2>
          <p className="mt-0.5 text-sm text-muted-foreground">{text}</p>
          {stat && <p className="mt-2 inline-flex rounded-full bg-muted px-3 py-1 text-xs font-extrabold">{stat}</p>}
        </div>
        <ArrowRight className="mt-1 size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
      </div>
      {children && <div className="relative z-10 mt-4 flex flex-wrap gap-2">{children}</div>}
    </li>
  );
}

export default async function PlayPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [user, t, tg, tc, tl, tr] = await Promise.all([
    getCurrentUser(),
    getTranslations("play"),
    getTranslations("games"),
    getTranslations("cards"),
    getTranslations("live"),
    getTranslations("recap"),
  ]);
  if (user) await syncCards(user.id);
  const [puzzle, bests, album] = await Promise.all([
    getPuzzleCard(user?.id ?? null),
    user ? getBests(user.id) : Promise.resolve({} as Record<string, number>),
    user ? getAlbum(user.id) : Promise.resolve([]),
  ]);
  const calcBest = bestSprint(bests, "calc:");
  const wordsBest = bestSprint(bests, "words:");

  return (
    <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
      <header className="clay relative overflow-hidden p-5 sm:p-8 subject-fuchsia">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-50 blur-3xl" style={{ background: "var(--s-soft)" }} aria-hidden="true" />
        <div className="relative flex items-start gap-4">
          <span className="fx-pop grid size-14 shrink-0 place-items-center rounded-[20px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
            <Gamepad2 className="size-7" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-black sm:text-3xl">{t("title")}</h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t("intro")}</p>
          </div>
        </div>
      </header>

      <PuzzleCard card={puzzle} />

      <ul className="stagger grid gap-4 md:grid-cols-2">
        <Tile
          href="/play/calc"
          icon={Calculator}
          color="subject-indigo"
          title={tg("calc.name")}
          text={t("calcText")}
          stat={calcBest !== null ? tg("best", { n: calcBest }) : null}
        />
        <Tile
          href="/play/words"
          icon={Languages}
          color="subject-sky"
          title={tg("words.name")}
          text={tg("words.intro")}
          stat={wordsBest !== null ? tg("best", { n: wordsBest }) : null}
        />
        <Tile href="/live" icon={Radio} color="subject-rose" title={tl("title")} text={t("liveText")}>
          <Link href="/live" className={buttonClasses({ size: "sm" })}>
            <LogIn className="size-4" aria-hidden="true" />
            {tl("join")}
          </Link>
          <Link href="/live/host" className={buttonClasses({ size: "sm", variant: "secondary" })}>
            <Presentation className="size-4" aria-hidden="true" />
            {tl("hostLink")}
          </Link>
        </Tile>
        <Tile
          href="/cards"
          icon={Layers}
          color="subject-violet"
          title={tc("title")}
          text={t("cardsText")}
          stat={user ? tc("count", { n: album.length, total: CARDS.length }) : null}
        />
        {user && <Tile href="/recap" icon={CalendarDays} color="subject-emerald" title={tr("title")} text={t("recapText")} />}
      </ul>

      <p className="text-center text-sm text-muted-foreground">{t("noRanking")}</p>
    </div>
  );
}
