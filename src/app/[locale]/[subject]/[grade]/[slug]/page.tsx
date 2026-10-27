import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock, Hammer, Languages, ListChecks } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Markdown } from "@/components/site/markdown";
import { LessonChecks } from "@/components/site/lesson-checks";
import { LessonProgressCard } from "@/components/site/lesson-progress";
import { Quiz } from "@/components/site/quiz";
import { RecallPrompt } from "@/components/site/recall-prompt";
import { Warmup } from "@/components/site/warmup";
import { buttonClasses } from "@/components/ui/button";
import { numberChecks } from "@/lib/checks";
import { localQuiz } from "@/lib/quiz";
import { cn, hasContent, pick } from "@/lib/utils";
import { getLessonProgress } from "@/server/progress";
import { getLesson } from "@/server/queries";
import { getCurrentUser } from "@/server/user-auth";
import { getWarmup } from "@/server/warmup";

type Params = Promise<{ locale: string; subject: string; grade: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, subject, grade, slug } = await params;
  const data = await getLesson(subject, Number(grade), slug);
  if (!data) return {};
  return { title: `${pick(data.lesson.title, locale)} · ${pick(data.course.title, locale)}` };
}

export default async function LessonPage({ params }: { params: Params }) {
  const { locale, subject, grade: g, slug } = await params;
  setRequestLocale(locale);
  const grade = Number(g);
  const data = await getLesson(subject, grade, slug);
  if (!data) notFound();
  const [t, l, user] = await Promise.all([getTranslations(), getLocale(), getCurrentUser()]);
  const { lesson, course, subject: subj, unit, unitIndex, prev, next } = data;
  const ready = lesson.status === "published" && hasContent(lesson.content);
  const [progress, warmup] = await Promise.all([user ? getLessonProgress(user.id, lesson.id) : undefined, ready ? getWarmup(lesson.id, user?.id ?? null) : []]);
  // Quick checks are numbered so a pupil's first pick can be saved (src/lib/checks.ts).
  const body = numberChecks(pick(lesson.content, l));
  const own = lesson.objectives?.[l as "en" | "hy" | "ru"];
  const objectives = own?.length ? own : lesson.objectives?.en?.length ? lesson.objectives.en : (lesson.objectives?.hy ?? []);
  // Some courses are written in Armenian first; show that text with a notice in the other locales.
  const fallbackToArmenian = ready && l !== "hy" && !lesson.content?.[l as "en" | "ru"]?.trim() && !!lesson.content?.hy?.trim();

  return (
    <article className={cn("mx-auto max-w-3xl space-y-6 sm:space-y-8", `subject-${subj.color}`)}>
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted-foreground">
        <ol className="scroll-x -mx-4 flex items-center gap-2 whitespace-nowrap px-4 sm:mx-0 sm:flex-wrap sm:whitespace-normal sm:px-0">
          <li><Link href={`/grade/${grade}`} className="inline-flex min-h-11 items-center hover:text-primary">{t("grade.title", { grade })}</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/${subject}/${grade}`} className="inline-flex min-h-11 items-center hover:text-primary">{pick(subj.name, l)}</Link></li>
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
        <h1 className="mt-2 text-[1.65rem] font-black leading-tight text-balance sm:text-4xl">{pick(lesson.title, l)}</h1>
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-bold text-muted-foreground">
          <Clock className="size-4" aria-hidden="true" />
          {t("lesson.duration", { min: lesson.durationMin })}
        </p>
      </header>

      {ready && objectives.length > 0 && (
        <section aria-labelledby="objectives-title" className="clay-sm p-4 sm:p-5" style={{ background: "var(--s-soft)" }}>
          <h2 id="objectives-title" className="flex items-center gap-2 font-extrabold" style={{ color: "var(--s-text)" }}>
            <ListChecks className="size-5" aria-hidden="true" />
            {t("lesson.objectives")}
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm sm:pl-6">
            {objectives.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </section>
      )}

      {fallbackToArmenian && (
        <p role="note" lang={l} className="clay-sm flex items-start gap-2 p-4 text-sm font-semibold" style={{ background: "var(--s-soft)", color: "var(--s-text)" }}>
          <Languages className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          {t("lesson.armenianOnly")}
        </p>
      )}

      {ready && warmup.length > 0 && <Warmup items={warmup} signedIn={!!user} />}

      {ready ? (
        <div id="lesson-body" className="clay p-4 sm:p-10" lang={fallbackToArmenian ? "hy" : undefined}>
          <LessonChecks lessonId={user ? lesson.id : null}>
            <Markdown lang={l}>{body}</Markdown>
          </LessonChecks>
        </div>
      ) : (
        <div className="clay p-6 text-center sm:p-10">
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

      {ready && <RecallPrompt bodyId="lesson-body" objectives={objectives} hasQuiz={lesson.quiz.length > 0} />}

      {ready && lesson.quiz.length > 0 && <Quiz questions={localQuiz(lesson.quiz, l, lesson.id)} save={user ? { lessonId: lesson.id } : null} />}

      {ready && (
        <LessonProgressCard
          lessonId={lesson.id}
          signedIn={!!user}
          completed={!!progress?.completedAt}
          best={progress?.bestTotal ? { score: progress.bestScore ?? 0, total: progress.bestTotal } : null}
          returnTo={`/${subject}/${grade}/${slug}`}
        />
      )}

      <nav aria-label="Lesson navigation" className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link href={`/${subject}/${grade}/${prev.slug}`} className="clay-sm clay-press flex min-h-16 items-center gap-3 p-4">
            <ArrowLeft className="size-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-wide text-muted-foreground">{t("lesson.prev")}</span>
              <span className="line-clamp-2 font-bold leading-snug">{pick(prev.title, l)}</span>
            </span>
          </Link>
        ) : <span className="hidden sm:block" />}
        {next && (
          <Link href={`/${subject}/${grade}/${next.slug}`} className="clay-sm clay-press flex min-h-16 items-center justify-end gap-3 p-4 text-right">
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-wide text-muted-foreground">{t("lesson.next")}</span>
              <span className="line-clamp-2 font-bold leading-snug">{pick(next.title, l)}</span>
            </span>
            <ArrowRight className="size-5 shrink-0 text-primary" aria-hidden="true" />
          </Link>
        )}
      </nav>
    </article>
  );
}
