import type { Metadata } from "next";
import { ClipboardCheck } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link, redirect } from "@/i18n/navigation";
import { MasteryBadge } from "@/components/site/mastery-badge";
import { UnitCheck } from "@/components/site/unit-check";
import { UNIT_CHECK_PASS } from "@/lib/mastery";
import { cn, pick } from "@/lib/utils";
import { buildUnitCheck, getMastery } from "@/server/mastery";
import { getCourse } from "@/server/queries";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

type Params = Promise<{ locale: string; subject: string; grade: string; unit: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, unit } = await params;
  const t = await getTranslations({ locale, namespace: "mastery" });
  return { title: t("checkTitle", { n: Number(unit) }) };
}

export default async function UnitCheckPage({ params }: { params: Params }) {
  const { locale, subject, grade: g, unit: n } = await params;
  setRequestLocale(locale);
  const grade = Number(g);
  const position = Number(n);
  const data = await getCourse(subject, grade);
  if (!data || !Number.isInteger(position)) notFound();
  const user = await getCurrentUser();
  if (!user) redirect({ href: `/login?next=${encodeURIComponent(`/${subject}/${grade}/check/${position}`)}`, locale });
  const u = user!;
  const [t, tg, l] = await Promise.all([getTranslations("mastery"), getTranslations("grade"), getLocale()]);
  const skills = await getMastery(u.id, [data.course.id]);
  const skill = skills.find((s) => s.position === position);
  if (!skill) notFound();
  const unit = data.units.find((x) => x.id === skill.unitId);
  const check = await buildUnitCheck(u.id, skill.skillId);
  const questions = check?.questions ?? [];
  const courseHref = `/${subject}/${grade}`;

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
            <ClipboardCheck className="size-7" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--s-text)" }}>{t("checkTitle", { n: position })}</p>
            <h1 className="mt-1 text-2xl font-black text-balance sm:text-3xl">{pick(unit?.title ?? skill.title, l)}</h1>
            <p className="mt-2 text-muted-foreground">{t("intro", { n: questions.length, pct: Math.round(UNIT_CHECK_PASS * 100) })}</p>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm font-bold">
              {t("yourLevel")} <MasteryBadge level={skill.level} />
            </p>
          </div>
        </div>
      </header>
      {questions.length > 0 ? (
        <UnitCheck skillId={skill.skillId} questions={questions} token={check!.token} courseHref={courseHref} passPct={Math.round(UNIT_CHECK_PASS * 100)} />
      ) : (
        <p className="clay p-6 text-center text-muted-foreground">{t("noQuestions")}</p>
      )}
    </div>
  );
}
