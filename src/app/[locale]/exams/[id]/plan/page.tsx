import type { Metadata } from "next";
import { ArrowRight, CalendarCheck, CheckCircle2, ChevronDown, ClipboardCheck, Gauge, History, Timer, TriangleAlert } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link, redirect } from "@/i18n/navigation";
import { DiagnosticRunner, PlanActions, PlanSetup } from "@/components/site/exam-plan";
import { buttonClasses } from "@/components/ui/button";
import { DIAG_MAX } from "@/lib/diagnostic";
import { addDays, isoDay, type PlanDay, type PlanTask } from "@/lib/exam-plan";
import { cn, pick } from "@/lib/utils";
import { getPlanView, PLAN_MAX_DAYS } from "@/server/exam-plan";
import { getExam } from "@/server/queries";
import { getCurrentUser, touchLastSeen } from "@/server/user-auth";

export const dynamic = "force-dynamic";

type Params = Promise<{ locale: string; id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, id } = await params;
  const data = await getExam(id);
  if (!data) return {};
  const t = await getTranslations({ locale, namespace: "plan" });
  return { title: t("metaTitle", { exam: pick(data.exam.title, locale) }) };
}

/** The next 1 June that is at least a week away: when most school exams start. */
function defaultExamDate(today: string) {
  const year = Number(today.slice(0, 4));
  const thisYear = `${year}-06-01`;
  return thisYear >= addDays(today, 7) ? thisYear : `${year + 1}-06-01`;
}

const TASK_ICON = { review: History, practice: Gauge, check: ClipboardCheck, trial: Timer } as const;

export default async function ExamPlanPage({ params }: { params: Params }) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const user = await getCurrentUser();
  if (!user) redirect({ href: `/login?next=${encodeURIComponent(`/exams/${id}/plan`)}`, locale });
  const u = user!;
  const view = await getPlanView(u.id, id);
  if (!view) notFound();
  await touchLastSeen(u.id);
  const [t, tg, l] = await Promise.all([getTranslations("plan"), getTranslations("grade"), getLocale()]);
  const { exam, subject } = view;
  const today = isoDay(new Date());
  const min = addDays(today, 1);
  const max = addDays(today, PLAN_MAX_DAYS);
  const dayFmt = new Intl.DateTimeFormat(l, { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" });
  const longFmt = new Intl.DateTimeFormat(l, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  const asDate = (d: string) => new Date(`${d}T00:00:00Z`);

  const header = (
    <header className="clay relative overflow-hidden p-5 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="grid size-14 shrink-0 place-items-center rounded-[20px] text-white shadow-clay-sm" style={{ background: subject ? "var(--s)" : "var(--primary)" }}>
          <CalendarCheck className="size-7" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-wide" style={{ color: subject ? "var(--s-text)" : "var(--primary)" }}>{t("title")}</p>
          <h1 className="mt-1 text-2xl font-black text-balance sm:text-3xl">{pick(exam.title, l)}</h1>
          {view.status === "ready" && (
            <p className="mt-2 font-bold text-muted-foreground">{t("examOn", { date: longFmt.format(asDate(view.examDate)), min: view.minutesPerDay })}</p>
          )}
        </div>
      </div>
    </header>
  );

  const shell = (children: React.ReactNode) => (
    <div className={cn("mx-auto max-w-3xl space-y-6", subject && `subject-${subject.color}`)}>
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted-foreground">
        <Link href={`/exams/${exam.id}`} className="inline-flex min-h-11 items-center hover:text-primary">
          {pick(exam.title, l)}
        </Link>
      </nav>
      {header}
      {children}
    </div>
  );

  if (view.skillCount === 0) return shell(<p className="clay p-6 text-center text-muted-foreground">{t("noSkills")}</p>);
  if (view.status === "none")
    return shell(<PlanSetup examId={exam.id} defaultDate={defaultExamDate(today)} min={min} max={max} questions={Math.min(DIAG_MAX, view.skillCount)} />);
  if (view.status === "diagnostic") return shell(<DiagnosticRunner examId={exam.id} first={view.question} />);

  const skill = (sid?: string) => (sid ? view.skills[sid] : undefined);
  const taskHref = (task: PlanTask) =>
    task.kind === "review" ? "/review" : task.kind === "trial" ? `/exams/${exam.id}` : task.kind === "check" ? skill(task.skillId)?.checkHref : skill(task.skillId)?.practiceHref;
  const course = (sid?: string) => {
    const s = skill(sid);
    return s ? `${pick(s.subjectName, l)} · ${tg("title", { grade: s.grade })}` : "";
  };

  const TaskRow = ({ task }: { task: PlanTask }) => {
    const Icon = TASK_ICON[task.kind];
    const s = skill(task.skillId);
    const href = taskHref(task);
    return (
      <li className={cn("flex items-center gap-3 px-4 py-3 sm:px-5", task.done && "bg-emerald-50/60")}>
        <span className={cn("grid size-10 shrink-0 place-items-center rounded-2xl", task.done ? "bg-emerald-100 text-success" : "bg-muted")} aria-hidden="true">
          {task.done ? <CheckCircle2 className="size-5" /> : <Icon className="size-5" />}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-extrabold">
            {t(`task.${task.kind}`)}
            {s && <span className="font-bold">: {pick(s.title, l)}</span>}
          </p>
          <p className="text-sm text-muted-foreground">{s ? `${course(task.skillId)} · ` : ""}{t(`taskHint.${task.kind}`)}</p>
        </div>
        {task.done ? (
          <span className="shrink-0 text-sm font-extrabold text-success">{t("done")}</span>
        ) : (
          href && (
            <Link href={href} className={buttonClasses({ size: "sm", className: "shrink-0" })} aria-label={`${t("go")}: ${t(`task.${task.kind}`)}${s ? ` ${pick(s.title, l)}` : ""}`}>
              {t("go")}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          )
        )}
      </li>
    );
  };

  const DayChips = ({ day }: { day: PlanDay }) => (
    <ul className="mt-1.5 flex flex-wrap gap-1.5">
      {day.tasks.map((task, i) => {
        const s = skill(task.skillId);
        return (
          <li key={i} className={cn("rounded-xl px-2.5 py-1 text-xs font-bold leading-snug", task.done ? "bg-emerald-100 text-success" : "bg-muted")}>
            {task.done && <CheckCircle2 className="-mt-0.5 mr-1 inline size-3.5" aria-hidden="true" />}
            {t(`task.${task.kind}`)}
            {s && <span className="font-semibold"> · {pick(s.title, l)}</span>}
          </li>
        );
      })}
    </ul>
  );

  const over = view.daysLeft <= 0;
  const todayDone = view.today ? view.today.tasks.every((x) => x.done) : false;

  return shell(
    <>
      <section className="clay p-5 sm:p-7" aria-labelledby="plan-summary">
        <h2 id="plan-summary" className="text-2xl font-black sm:text-3xl">{over ? t("examOver") : t("daysLeft", { n: view.daysLeft })}</h2>
        {view.earlier.total > 0 && <p className="mt-1 font-bold text-muted-foreground">{t("doneSoFar", { done: view.earlier.done, total: view.earlier.total })}</p>}
        {view.leftover.length > 0 && !over && (
          <p className="mt-3 flex items-start gap-2 rounded-[var(--radius)] bg-amber-50 p-3 text-sm font-bold text-amber-900">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {t("tooMuch", { n: view.leftover.length })}
          </p>
        )}
      </section>

      {!over && (
        <section aria-labelledby="plan-today" className="space-y-3">
          <h2 id="plan-today" className="text-lg font-extrabold">
            {t("today")} <span className="font-bold text-muted-foreground">· {dayFmt.format(asDate(today))}</span>
          </h2>
          {view.today?.last && <p className="text-muted-foreground">{t("lastDay")}</p>}
          {view.today ? (
            <ul className="clay divide-y divide-border/70 overflow-hidden">
              {view.today.tasks.map((task, i) => (
                <TaskRow key={i} task={task} />
              ))}
            </ul>
          ) : (
            <p className="clay p-5 text-muted-foreground">{t("noToday")}</p>
          )}
          {todayDone && (
            <p role="status" className="font-extrabold text-success">{t("todayAllDone")}</p>
          )}
        </section>
      )}

      {view.ahead.length > 0 && (
        <section aria-labelledby="plan-ahead" className="space-y-3">
          <h2 id="plan-ahead" className="text-lg font-extrabold">{t("ahead")}</h2>
          <ol className="clay divide-y divide-border/70 overflow-hidden">
            {view.ahead.map((day) => (
              <li key={day.date} className="px-4 py-3 sm:px-5">
                <p className="text-sm font-extrabold capitalize">{dayFmt.format(asDate(day.date))}</p>
                <DayChips day={day} />
              </li>
            ))}
          </ol>
        </section>
      )}

      <section aria-labelledby="plan-skills" className="space-y-3">
        <div>
          <h2 id="plan-skills" className="text-lg font-extrabold">{t("groupsTitle")}</h2>
          <p className="text-sm text-muted-foreground">{t("groupsIntro", { n: view.tested })}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {(["weak", "shaky", "strong"] as const).map((band) => (
            <details key={band} className="clay-sm group p-4" open={band !== "strong" && view.groups[band].length <= 8}>
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 font-extrabold">
                <span className="inline-flex items-center gap-2">
                  <span className={cn("size-3 rounded-full", band === "weak" ? "bg-rose-500" : band === "shaky" ? "bg-amber-500" : "bg-emerald-500")} aria-hidden="true" />
                  {t(`groups.${band}`)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-sm tabular-nums">{view.groups[band].length}</span>
                  {view.groups[band].length > 0 && <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />}
                </span>
              </summary>
              <ul className="mt-2 space-y-2 text-sm">
                {view.groups[band].map((sid) => (
                  <li key={sid}>
                    <Link href={skill(sid)!.practiceHref} className="block rounded-lg py-1 hover:text-primary">
                      <span className="font-bold">{pick(skill(sid)!.title, l)}</span>
                      <span className="block text-xs text-muted-foreground">{course(sid)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <PlanActions examId={exam.id} examDate={view.examDate} minutes={view.minutesPerDay} min={min} max={max} />
    </>,
  );
}
