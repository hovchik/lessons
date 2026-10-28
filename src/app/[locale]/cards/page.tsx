import type { Metadata } from "next";
import { Layers } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CardFace, NewCards } from "@/components/fun/collect-card";
import { CARDS, COLLECTIONS } from "@/content/cards";
import { cn } from "@/lib/utils";
import { getAlbum, syncCards } from "@/server/cards";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cards" });
  return { title: t("title") };
}

export default async function CardsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [user, t] = await Promise.all([getCurrentUser(), getTranslations("cards")]);
  if (user) await syncCards(user.id);
  const album = user ? await getAlbum(user.id) : [];
  const fresh = album.filter((x) => x.isNew);
  const seen = album.filter((x) => !x.isNew);

  return (
    <div className="space-y-8">
      <header className="clay relative overflow-hidden p-5 sm:p-8 subject-violet">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-50 blur-3xl" style={{ background: "var(--s-soft)" }} aria-hidden="true" />
        <div className="relative flex items-start gap-4">
          <span className="fx-pop grid size-14 shrink-0 place-items-center rounded-[20px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
            <Layers className="size-7" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-black sm:text-3xl">{t("title")}</h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t("intro")}</p>
            <p className="mt-3 inline-flex rounded-full bg-muted px-3 py-1 text-sm font-extrabold">{t("count", { n: album.length, total: CARDS.length })}</p>
          </div>
        </div>
        {!user && (
          <p className="relative mt-4 text-sm">
            <Link href="/signup" className="font-bold text-primary hover:underline">{t("signup")}</Link> {t("signupWhy")}
          </p>
        )}
      </header>

      {fresh.length > 0 && (
        <section aria-labelledby="new-cards" className="space-y-4">
          <h2 id="new-cards" className="text-xl font-extrabold sm:text-2xl">{t("newCards", { n: fresh.length })}</h2>
          <NewCards cards={fresh.map((x) => ({ card: x.card, shiny: x.shiny }))} />
        </section>
      )}

      {COLLECTIONS.map((c) => {
        const all = CARDS.filter((x) => x.collection === c.id);
        const mine = seen.filter((x) => x.card.collection === c.id);
        const owned = album.filter((x) => x.card.collection === c.id).length;
        const locked = all.length - owned;
        return (
          <section key={c.id} aria-labelledby={`col-${c.id}`} className={cn("space-y-3", c.color)}>
            <div className="flex flex-wrap items-end justify-between gap-2">
              <h2 id={`col-${c.id}`} className="flex items-center gap-2 text-lg font-extrabold sm:text-xl">
                <span aria-hidden="true">{c.emoji}</span>
                {t(`collections.${c.id}.name`)}
              </h2>
              <span className="text-sm font-bold text-muted-foreground">{t("progress", { n: owned, total: all.length })}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t(`collections.${c.id}.about`)}</p>
            <div className="h-2 overflow-hidden rounded-full bg-muted" aria-hidden="true">
              <div className="h-full rounded-full" style={{ width: `${(owned / all.length) * 100}%`, background: "var(--s)" }} />
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {mine.map((x) => (
                <li key={x.card.id}>
                  <CardFace card={x.card} shiny={x.shiny} />
                </li>
              ))}
              {locked > 0 && (
                <li className="grid min-h-40 place-items-center rounded-[20px] border-2 border-dashed border-border p-3 text-center">
                  <span>
                    <span className="block text-3xl font-black text-muted-foreground/50" aria-hidden="true">?</span>
                    <span className="mt-1 block text-sm font-bold text-muted-foreground">{t("toFind", { n: locked })}</span>
                  </span>
                </li>
              )}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
