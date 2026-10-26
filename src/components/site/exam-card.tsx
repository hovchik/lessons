import { ArrowRight, Award, ClipboardCheck, Clock } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { cn, pick } from "@/lib/utils";
import type { ExamListItem } from "@/server/queries";

export async function ExamCard({ item, compact = false }: { item: ExamListItem; compact?: boolean }) {
  const { exam, subject } = item;
  const l = await getLocale();
  const t = await getTranslations("exam");
  const Icon = exam.kind === "state" ? Award : ClipboardCheck;
  return (
    <Link href={`/exams/${exam.id}`} className={cn("clay clay-press flex h-full flex-col gap-3 p-4 sm:p-5", subject && `subject-${subject.color}`)}>
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-[14px] text-white shadow-clay-sm" style={{ background: subject ? "var(--s)" : "var(--primary)" }}>
          {subject ? <SubjectIcon name={subject.icon} className="size-5" /> : <Icon className="size-5" aria-hidden="true" />}
        </span>
        <span className="rounded-full px-2.5 py-1 text-xs font-extrabold" style={{ background: subject ? "var(--s-soft)" : "var(--muted)", color: subject ? "var(--s-text)" : "var(--primary)" }}>
          {t(`kind.${exam.kind}`)}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="font-extrabold leading-snug text-balance">{pick(exam.title, l)}</h3>
        {!compact && <p className="mt-1.5 line-clamp-3 text-sm text-muted-foreground">{pick(exam.description, l)}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-muted-foreground">
        <span className="rounded-full bg-muted px-2.5 py-1">{t("questionsCount", { n: exam.questionCount })}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1"><Clock className="size-3.5" aria-hidden="true" />{t("duration", { min: exam.durationMin })}</span>
        <ArrowRight className="ml-auto size-4 text-primary" aria-hidden="true" />
      </div>
    </Link>
  );
}
