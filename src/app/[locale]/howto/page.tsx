import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HowtoCard } from "@/components/site/howto-card";
import { HOWTO_BANDS, getHowtos } from "@/server/howto";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "howto" });
  return { title: t("title") };
}

/** The how-to hub: every practical-skills lesson, grouped by age. */
export default async function HowtoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [t, cards] = await Promise.all([getTranslations("howto"), getHowtos()]);
  const bands = HOWTO_BANDS.map((b) => ({ ...b, cards: cards.filter((c) => (b.grades as readonly number[]).includes(c.grade)) })).filter((b) => b.cards.length);

  return (
    <div className="mx-auto max-w-5xl space-y-8 sm:space-y-10">
      <header className="clay relative overflow-hidden p-5 sm:p-8 subject-sienna">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-60 blur-3xl" style={{ background: "var(--s-soft)" }} aria-hidden="true" />
        <div className="relative flex items-start gap-4">
          <span className="fx-pop grid size-14 shrink-0 place-items-center rounded-[20px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
            <Compass className="size-7" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-black sm:text-3xl">{t("title")}</h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t("intro")}</p>
            <p className="mt-3 text-sm font-extrabold" style={{ color: "var(--s-text)" }}>{t("count", { n: cards.length })}</p>
          </div>
        </div>
        {bands.length > 1 && (
          <nav className="relative mt-5 flex flex-wrap gap-2" aria-label={t("title")}>
            {bands.map((b) => (
              <a key={b.id} href={`#${b.id}`} className="clay-sm clay-press inline-flex min-h-11 items-center px-4 text-sm font-extrabold" style={{ color: "var(--s-text)" }}>
                {t(`bands.${b.id}`)}
              </a>
            ))}
          </nav>
        )}
      </header>

      {bands.map((b) => {
        const from = b.grades[0], to = b.grades[b.grades.length - 1];
        return (
          <section key={b.id} id={b.id} aria-labelledby={`${b.id}-title`} className="scroll-mt-24">
            <h2 id={`${b.id}-title`} className="text-xl font-extrabold sm:text-2xl">{t(`bands.${b.id}`)}</h2>
            <p className="mt-0.5 text-sm font-bold text-muted-foreground">{t("ages", { from, to, a: from + 5, b: to + 6 })}</p>
            <ul className="stagger mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {b.cards.map((c) => <HowtoCard key={`${c.grade}-${c.slug}`} card={c} />)}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
