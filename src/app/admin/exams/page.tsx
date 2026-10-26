import { CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/server/auth";
import { getExams } from "@/server/queries";

const KINDS = [
  ["", "All"],
  ["state", "State exams"],
  ["trial", "Year-end trials"],
] as const;

export default async function AdminExams({ searchParams }: { searchParams: Promise<{ kind?: string; grade?: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { kind, grade } = await searchParams;
  const exams = (await getExams({ includeDrafts: true, kind: kind === "state" || kind === "trial" ? kind : undefined, grade: grade ? Number(grade) : undefined }));
  const query = (k: string, g: string) => `/admin/exams?${new URLSearchParams({ ...(k ? { kind: k } : {}), ...(g ? { grade: g } : {}) })}`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-2xl font-black sm:text-3xl">Exams</h1>
        <a href="/en/exams" className="inline-flex min-h-11 items-center text-sm font-bold text-primary hover:underline" target="_blank" rel="noreferrer">View on site</a>
      </div>
      <p className="max-w-3xl text-sm text-muted-foreground">
        State exams follow the real Armenian (ԳԹԿ) and Russian (ФИПИ) formats with original practice questions. Year-end trials cover one course each. Seed exams are refreshed by <code>npm run db:seed</code>; exams you edit here are kept.
      </p>
      <nav className="flex flex-wrap gap-2" aria-label="Filter by kind">
        {KINDS.map(([k, label]) => (
          <Link key={k} href={query(k, grade ?? "")} className={`clay-sm clay-press h-11 px-3 text-sm font-bold leading-[44px] ${(kind ?? "") === k ? "text-primary ring-2 ring-primary" : ""}`}>{label}</Link>
        ))}
      </nav>
      <nav className="flex flex-wrap gap-1.5" aria-label="Filter by grade">
        <Link href={query(kind ?? "", "")} className={`clay-sm clay-press h-10 px-3 text-xs font-bold leading-10 ${!grade ? "text-primary ring-2 ring-primary" : ""}`}>All grades</Link>
        {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((g) => (
          <Link key={g} href={query(kind ?? "", g)} className={`clay-sm clay-press h-10 min-w-10 px-2 text-center text-xs font-bold leading-10 ${grade === g ? "text-primary ring-2 ring-primary" : ""}`}>{g}</Link>
        ))}
      </nav>
      <div className="clay overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Exam</th>
              <th className="hidden px-4 py-3 sm:table-cell">Kind</th>
              <th className="px-4 py-3">Grade</th>
              <th className="hidden px-4 py-3 md:table-cell">Questions</th>
              <th className="hidden px-4 py-3 md:table-cell">Source</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {exams.map(({ exam, subject }) => (
              <tr key={exam.id} className="border-t border-border/60">
                <td className="px-4 py-3">
                  <span className="flex items-center gap-2 font-bold">
                    {exam.status === "published" ? <CheckCircle2 className="size-4 shrink-0 text-success" aria-label="Published" /> : <Circle className="size-4 shrink-0 text-muted-foreground" aria-label="Draft" />}
                    {exam.title.en}
                  </span>
                  <span className="block pl-6 text-xs text-muted-foreground">{exam.id}{subject ? ` · ${subject.name.en}` : ""}</span>
                </td>
                <td className="hidden px-4 py-3 capitalize sm:table-cell">{exam.kind} · {exam.system}</td>
                <td className="px-4 py-3">{exam.grade}</td>
                <td className="hidden px-4 py-3 md:table-cell">{exam.questionCount}</td>
                <td className="hidden px-4 py-3 md:table-cell">{exam.source}</td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/exams/${exam.id}`} className="inline-flex min-h-11 items-center px-2 font-bold text-primary hover:underline">Edit</Link>
                </td>
              </tr>
            ))}
            {exams.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No exams match this filter.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
