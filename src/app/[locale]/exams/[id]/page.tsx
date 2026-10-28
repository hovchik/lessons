import type { Metadata } from "next";
import { ArrowRight, Award, CalendarCheck, ClipboardCheck, Clock, ListOrdered, Target } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ExamRunner } from "@/components/site/exam-runner";
import { StaticMarkdown } from "@/components/site/static-markdown";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { buttonClasses } from "@/components/ui/button";
import { examScope } from "@/content/exam-scope";
import { daysBetween, isoDay } from "@/lib/exam-plan";
import { examTotal } from "@/lib/exam-score";
import { cn, pick } from "@/lib/utils";
import { getPlanRow } from "@/server/exam-plan";
import { getExam, getExams } from "@/server/queries";
import { getCurrentUser } from "@/server/user-auth";

type Params = Promise<{ locale: string; id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, id } = await params;
  const data = await getExam(id);
  if (!data) return {};
  return { title: pick(data.exam.title, locale), description: pick(data.exam.description, locale) };
}

export default async function ExamPage({ params }: { params: Params }) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const data = await getExam(id);
  if (!data) notFound();
  const [t, l, user] = await Promise.all([getTranslations(), getLocale(), getCurrentUser()]);
  const { exam, subject } = data;
  const total = examTotal(exam.questions);
  const Icon = exam.kind === "state" ? Award : ClipboardCheck;
  const plannable = examScope(exam).length > 0;
  const plan = plannable && user ? await getPlanRow(user.id, exam.id) : null;
  const related = (await getExams({ grade: exam.grade })).filter((e) => e.exam.id !== exam.id && (e.exam.subjectId === exam.subjectId || e.exam.kind === exam.kind)).slice(0, 6);

  return (
    <article className={cn("mx-auto max-w-3xl space-y-6 sm:space-y-8", subject && `subject-${subject.color}`)}>
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted-foreground">
        <ol className="scroll-x -mx-4 flex items-center gap-2 whitespace-nowrap px-4 sm:mx-0 sm:flex-wrap sm:whitespace-normal sm:px-0">
          <li><Link href="/exams" className="inline-flex min-h-11 items-center hover:text-primary">{t("exam.title")}</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/grade/${exam.grade}`} className="inline-flex min-h-11 items-center hover:text-primary">{t("grade.title", { grade: exam.grade })}</Link></li>
          {subject && (
            <>
              <li aria-hidden="true">/</li>
              <li><Link href={`/${subject.id}/${exam.grade}`} className="inline-flex min-h-11 items-center hover:text-primary">{pick(subject.name, l)}</Link></li>
            </>
          )}
        </ol>
      </nav>

      <header className="clay relative overflow-hidden p-5 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-40 blur-3xl" style={{ background: subject ? "var(--s-soft)" : "var(--muted)" }} aria-hidden="true" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <span className="grid size-14 shrink-0 place-items-center rounded-[18px] text-white shadow-clay-sm" style={{ background: subject ? "var(--s)" : "var(--primary)" }}>
            {subject ? <SubjectIcon name={subject.icon} className="size-7" /> : <Icon className="size-7" aria-hidden="true" />}
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: subject ? "var(--s-text)" : "var(--primary)" }}>
              {t(`exam.kind.${exam.kind}`)} · {t(`exam.system.${exam.system}`)}
            </p>
            <h1 className="mt-1 text-2xl font-black text-balance sm:text-4xl">{pick(exam.title, l)}</h1>
            <p className="mt-3 text-muted-foreground">{pick(exam.description, l)}</p>
            <dl className="mt-4 flex flex-wrap gap-2 text-sm font-bold">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1"><ListOrdered className="size-4" aria-hidden="true" /><dt className="sr-only">{t("exam.questions")}</dt><dd>{t("exam.questionsCount", { n: exam.questions.length })}</dd></div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1"><Clock className="size-4" aria-hidden="true" /><dt className="sr-only">{t("exam.durationLabel")}</dt><dd>{t("exam.duration", { min: exam.durationMin })}</dd></div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1"><Target className="size-4" aria-hidden="true" /><dt className="sr-only">{t("exam.passLabel")}</dt><dd>{t("exam.passLine", { pass: exam.passPercent, total })}</dd></div>
            </dl>
          </div>
        </div>
      </header>

      <section aria-labelledby="format-title" className="clay p-4 sm:p-8">
        <h2 id="format-title" className="sr-only">{t("exam.aboutFormat")}</h2>
        <StaticMarkdown lang={l}>{pick(exam.format, l)}</StaticMarkdown>
      </section>

      {plannable && (
        <section aria-labelledby="plan-card" className="clay flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary" aria-hidden="true">
            <CalendarCheck className="size-6" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 id="plan-card" className="font-extrabold">
              {plan?.status === "ready" ? t("plan.cardYours", { days: Math.max(0, daysBetween(isoDay(new Date()), plan.examDate)) }) : t("plan.cardTitle")}
            </h2>
            {!plan && <p className="mt-0.5 text-sm text-muted-foreground">{t("plan.cardBody")}</p>}
          </div>
          <Link href={`/exams/${exam.id}/plan`} className={buttonClasses({ variant: plan ? "primary" : "secondary", className: "shrink-0" })}>
            {plan ? (plan.status === "ready" ? t("plan.cardContinue") : t("plan.cardTest")) : t("plan.cardOpen")}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </section>
      )}

      <ExamRunner questions={exam.questions} durationMin={exam.durationMin} scale={exam.scale} passPercent={exam.passPercent} save={user ? { examId: exam.id } : null} />

      {related.length > 0 && (
        <section aria-labelledby="related-title">
          <h2 id="related-title" className="text-lg font-extrabold">{t("exam.related")}</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {related.map((e) => (
              <li key={e.exam.id}>
                <Link href={`/exams/${e.exam.id}`} className="clay-sm clay-press inline-flex min-h-11 items-center px-3 text-sm font-bold">{pick(e.exam.title, l)}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
