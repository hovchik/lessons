import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock, Hammer, ListChecks } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Markdown } from "@/components/site/markdown";
import { Quiz } from "@/components/site/quiz";
import { buttonClasses } from "@/components/ui/button";
import { cn, hasContent, pick } from "@/lib/utils";
import { getLesson } from "@/server/queries";

type Params = Promise<{ locale: string; subject: string; grade: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, subject, grade, slug } = await params;
  const data = getLesson(subject, Number(grade), slug);
  if (!data) return {};
  return { title: `${pick(data.lesson.title, locale)} · ${pick(data.course.title, locale)}` };
}

export default async function LessonPage({ params }: { params: Params }) {
  const { locale, subject, grade: g, slug } = await params;
  setRequestLocale(locale);
  const grade = Number(g);
  const data = getLesson(subject, grade, slug);
  if (!data) notFound();
  const t = await getTranslations();
  const l = await getLocale();
  const { lesson, course, subject: subj, unit, unitIndex, prev, next } = data;
  const body = pick(lesson.content, l);
  const ready = lesson.status === "published" && hasContent(lesson.content);
  const objectives = lesson.objectives?.[l as "en" | "hy" | "ru"] ?? lesson.objectives?.en ?? [];

  return (
    <article className={cn("mx-auto max-w-3xl space-y-8", `subject-${subj.color}`)}>
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href={`/grade/${grade}`} className="hover:text-primary">{t("grade.title", { grade })}</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/${subject}/${grade}`} className="hover:text-primary">{pick(subj.name, l)}</Link></li>
          {unit && (
            <>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">{t("lesson.inUnit", { n: unitIndex, title: pick(unit.title, l) })}</li>
            </>
          )}
        </ol>
      </nav>

      <header>
        <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--s-text)" }}>{pick(course.title, l)}</p>
        <h1 className="mt-2 text-3xl font-black leading-tight text-balance sm:text-4xl">{pick(lesson.title, l)}</h1>
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-bold text-muted-foreground">
          <Clock className="size-4" aria-hidden="true" />
          {t("lesson.duration", { min: lesson.durationMin })}
        </p>
      </header>

      {ready && objectives.length > 0 && (
        <section aria-labelledby="objectives-title" className="clay-sm p-5" style={{ background: "var(--s-soft)" }}>
          <h2 id="objectives-title" className="flex items-center gap-2 font-extrabold" style={{ color: "var(--s-text)" }}>
            <ListChecks className="size-5" aria-hidden="true" />
            {t("lesson.objectives")}
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm">
            {objectives.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </section>
      )}

      {ready ? (
        <div className="clay p-6 sm:p-10">
          <Markdown>{body}</Markdown>
        </div>
      ) : (
        <div className="clay p-10 text-center">
          <span className="mx-auto grid size-16 place-items-center rounded-[20px] bg-muted text-primary">
            <Hammer className="size-8" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-extrabold">{t("lesson.comingSoonTitle")}</h2>
          <p className="mt-2 text-muted-foreground">{t("lesson.comingSoonText")}</p>
          <Link href={`/${subject}/${grade}`} className={buttonClasses({ variant: "secondary", className: "mt-6" })}>
            {t("lesson.backToCourse")}
          </Link>
        </div>
      )}

      {ready && lesson.quiz.length > 0 && <Quiz questions={lesson.quiz} />}

      <nav aria-label="Lesson navigation" className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link href={`/${subject}/${grade}/${prev.slug}`} className="clay-sm clay-press flex items-center gap-3 p-4">
            <ArrowLeft className="size-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-wide text-muted-foreground">{t("lesson.prev")}</span>
              <span className="block truncate font-bold">{pick(prev.title, l)}</span>
            </span>
          </Link>
        ) : <span />}
        {next && (
          <Link href={`/${subject}/${grade}/${next.slug}`} className="clay-sm clay-press flex items-center justify-end gap-3 p-4 text-right">
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-wide text-muted-foreground">{t("lesson.next")}</span>
              <span className="block truncate font-bold">{pick(next.title, l)}</span>
            </span>
            <ArrowRight className="size-5 shrink-0 text-primary" aria-hidden="true" />
          </Link>
        )}
      </nav>
    </article>
  );
}
