import type { Metadata } from "next";
import { Gauge, Lightbulb } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link, redirect } from "@/i18n/navigation";
import { MasteryBadge } from "@/components/site/mastery-badge";
import { PracticeSession } from "@/components/site/practice-session";
import { cn, pick } from "@/lib/utils";
import { relevanceFor } from "@/content/relevance";
import { getMastery } from "@/server/mastery";
import { nextPracticeQuestion } from "@/server/practice";
import { getCourse } from "@/server/queries";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

type Params = Promise<{ locale: string; subject: string; grade: string; unit: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, unit } = await params;
  const t = await getTranslations({ locale, namespace: "practice" });
  return { title: t("title", { n: Number(unit) }) };
}

export default async function PracticePage({ params }: { params: Params }) {
  const { locale, subject, grade: g, unit: n } = await params;
  setRequestLocale(locale);
  const grade = Number(g);
  const position = Number(n);
  const data = await getCourse(subject, grade);
  if (!data || !Number.isInteger(position)) notFound();
  const user = await getCurrentUser();
  if (!user) redirect({ href: `/login?next=${encodeURIComponent(`/${subject}/${grade}/practice/${position}`)}`, locale });
  const u = user!;
  const [t, tm, tg, l] = await Promise.all([getTranslations("practice"), getTranslations("mastery"), getTranslations("grade"), getLocale()]);
  const tw = await getTranslations("why");
  const skill = (await getMastery(u.id, [data.course.id])).find((s) => s.position === position);
  if (!skill) notFound();
  const unit = data.units.find((x) => x.id === skill.unitId);
  const start = await nextPracticeQuestion(u.id, skill.skillId);
  const courseHref = `/${subject}/${grade}`;
  const why = relevanceFor(subject, grade, position);

  return (
    <div className={cn("mx-auto max-w-3xl space-y-6", `subject-${data.subject.color}`)}>
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted-foreground">
        <Link href={`${courseHref}#unit-${position}`} className="inline-flex min-h-11 items-center hover:text-primary">
          {pick(data.subject.name, l)} · {tg("title", { grade })}
        </Link>
      </nav>
      <header className="clay p-5 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-[20px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
            <Gauge className="size-7" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--s-text)" }}>{t("title", { n: position })}</p>
            <h1 className="mt-1 text-2xl font-black text-balance sm:text-3xl">{pick(unit?.title ?? skill.title, l)}</h1>
            <p className="mt-2 text-muted-foreground">{t("intro")}</p>
            <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-bold">
              <span className="inline-flex items-center gap-2">
                {tm("yourLevel")} <MasteryBadge level={skill.level} />
              </span>
              {start?.question && <span className="text-muted-foreground">{t("readiness", { pct: start.readiness })}</span>}
            </p>
          </div>
        </div>
        {why && (
          <p className="mt-4 flex items-start gap-2 rounded-[var(--radius)] bg-muted p-3 text-sm leading-relaxed">
            <Lightbulb className="mt-0.5 size-4 shrink-0" style={{ color: "var(--s-text)" }} aria-hidden="true" />
            <span>
              <span className="font-extrabold">{tw("title")} </span>
              {pick(why, l)}
            </span>
          </p>
        )}
      </header>
      {start?.question ? (
        <PracticeSession
          skillId={skill.skillId}
          first={start.question}
          total={start.total}
          readiness={start.readiness}
          courseHref={courseHref}
          checkHref={`${courseHref}/check/${position}`}
        />
      ) : (
        <p className="clay p-6 text-center text-muted-foreground">{tm("noQuestions")}</p>
      )}
    </div>
  );
}
