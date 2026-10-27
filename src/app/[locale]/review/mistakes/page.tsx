import type { Metadata } from "next";
import { ArrowRight, BookOpen, CheckCircle2, NotebookPen, XCircle } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Link, redirect } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/button";
import { cn, pick } from "@/lib/utils";
import { getMistakes } from "@/server/review";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "review" });
  return { title: t("notebook") };
}

/** The mistake notebook: every question the pupil last got wrong, until they get it right. */
export default async function MistakesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const user = await getCurrentUser();
  if (!user) redirect({ href: `/login?next=${encodeURIComponent("/review/mistakes")}`, locale });
  const u = user!;
  const [t, tg, l, items] = await Promise.all([getTranslations("review"), getTranslations("grade"), getLocale(), getMistakes(u.id)]);
  await touchLastSeen(u.id);

  // Group by course, in the order the notebook lists them (latest mistake first).
  const groups = new Map<string, typeof items>();
  for (const it of items) {
    const k = it.courseId ?? it.refTitle.en;
    groups.set(k, [...(groups.get(k) ?? []), it]);
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
      <header className="clay relative overflow-hidden p-5 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-[18px] bg-accent text-accent-foreground shadow-clay-sm">
              <NotebookPen className="size-7" aria-hidden="true" />
            </span>
            <div>
              <h1 className="text-2xl font-black text-balance sm:text-4xl">{t("notebook")}</h1>
              <p className="mt-2 text-muted-foreground">{t("notebookIntro")}</p>
            </div>
          </div>
          {items.length > 0 && (
            <Link href="/review?mode=mistakes" className={buttonClasses({ size: "lg", className: "w-full shrink-0 sm:w-auto" })}>
              {t("practise")}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          )}
        </div>
      </header>

      {items.length === 0 ? (
        <section className="clay p-6 text-center sm:p-10">
          <h2 className="text-2xl font-extrabold">{t("noMistakesTitle")}</h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">{t("noMistakesText")}</p>
          <Link href="/review" className={buttonClasses({ variant: "secondary", size: "lg", className: "mt-6" })}>
            {t("title")}
          </Link>
        </section>
      ) : (
        [...groups.values()].map((list) => {
          const first = list[0];
          return (
            <section key={first.courseId ?? first.itemId} className={cn("space-y-3", first.subjectColor && `subject-${first.subjectColor}`)}>
              <h2 className="text-lg font-extrabold">
                {first.subjectName ? pick(first.subjectName, l) : pick(first.refTitle, l)}
                {first.grade ? <span className="text-muted-foreground"> · {tg("title", { grade: first.grade })}</span> : null}
              </h2>
              <ol className="clay divide-y divide-border/70 overflow-hidden">
                {list.map((m) => (
                  <li key={m.itemId} className="space-y-2 px-4 py-4 sm:px-5">
                    <p className="text-xs font-bold text-muted-foreground">{pick(m.refTitle, l)}</p>
                    <p className="whitespace-pre-line font-bold leading-snug">{pick(m.question.prompt, l)}</p>
                    {m.lastChoice !== null && m.lastChoice !== m.question.answer && m.question.options[m.lastChoice] && (
                      <p className="flex items-start gap-1.5 text-sm text-destructive">
                        <XCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                        <span>
                          <span className="font-bold">{t("yourAnswer")}:</span> {pick(m.question.options[m.lastChoice], l)}
                        </span>
                      </p>
                    )}
                    <p className="flex items-start gap-1.5 text-sm text-success">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      <span>
                        <span className="font-bold">{t("rightAnswer")}:</span> {pick(m.question.options[m.question.answer], l)}
                      </span>
                    </p>
                    {m.question.explanation && <p className="rounded-[var(--radius)] bg-muted p-3 text-sm leading-relaxed">{pick(m.question.explanation, l)}</p>}
                    {m.href && (
                      <Link href={m.href} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-primary">
                        <BookOpen className="size-4" aria-hidden="true" />
                        {m.source === "exam" ? t("openExam") : t("readLesson")}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          );
        })
      )}
    </div>
  );
}
