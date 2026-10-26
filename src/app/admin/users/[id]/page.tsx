import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { UserActions } from "@/components/admin/user-actions";
import { isAdmin } from "@/server/auth";
import { getRecentAttempts, getUserCourseSummaries, getUserTotals } from "@/server/progress";
import { findUserById } from "@/server/user-auth";

const fmt = (iso: string | null) => (iso ? new Date(iso.includes("T") ? iso : iso + "Z").toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "–");

export default async function AdminUserPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { id } = await params;
  const user = await findUserById(id);
  if (!user) notFound();
  const [totals, courses, recent] = await Promise.all([getUserTotals(id), getUserCourseSummaries(id), getRecentAttempts(id, 20)]);

  return (
    <div className="space-y-8">
      <nav className="text-sm font-semibold text-muted-foreground">
        <Link href="/admin/users" className="hover:text-primary">Users</Link> / <span className="text-foreground">{user.displayName}</span>
      </nav>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black sm:text-3xl">
            {user.displayName}
            {user.disabled && <span className="ml-3 align-middle rounded-full bg-red-50 px-2 py-0.5 text-sm font-bold text-destructive">disabled</span>}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            @{user.username} · {user.grade ? `grade ${user.grade}` : "no grade"} · {user.locale} · joined {fmt(user.createdAt)} · last seen {fmt(user.lastSeenAt)}
          </p>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {[
          ["Lessons done", totals.completed],
          ["Avg score", totals.avgScore === null ? "–" : `${Math.round(totals.avgScore * 100)}%`],
          ["Courses", totals.courses],
          ["Quizzes", totals.attempts],
        ].map(([k, v]) => (
          <div key={String(k)} className="clay-sm p-4 sm:p-5">
            <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{k}</dt>
            <dd className="mt-1 text-2xl font-black text-primary sm:text-3xl">{v}</dd>
          </div>
        ))}
      </dl>

      <UserActions user={{ id: user.id, displayName: user.displayName, grade: user.grade, disabled: user.disabled }} />

      <section className="space-y-3">
        <h2 className="text-xl font-extrabold">Progress by course</h2>
        {courses.length === 0 ? (
          <p className="text-sm text-muted-foreground">No activity yet.</p>
        ) : (
          <div className="clay overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Course</th>
                  <th className="px-4 py-3">Completed</th>
                  <th className="px-4 py-3">Best avg</th>
                  <th className="hidden px-4 py-3 sm:table-cell">Quizzes</th>
                  <th className="hidden px-4 py-3 md:table-cell">Last activity</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c) => (
                  <tr key={c.courseId} className="border-t border-border/60">
                    <td className="px-4 py-3 font-bold">
                      <Link href={`/admin/courses/${c.courseId}`} className="hover:text-primary">{c.subjectName.en} · grade {c.grade}</Link>
                    </td>
                    <td className="px-4 py-3 tabular-nums">{c.completed} / {c.totalLessons}</td>
                    <td className="px-4 py-3 tabular-nums">{c.avgScore === null ? "–" : `${Math.round(c.avgScore * 100)}%`}</td>
                    <td className="hidden px-4 py-3 tabular-nums sm:table-cell">{c.quizzesTaken}</td>
                    <td className="hidden px-4 py-3 whitespace-nowrap md:table-cell">{fmt(c.lastActivity)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {recent.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-extrabold">Recent attempts</h2>
          <ol className="clay divide-y divide-border/70 overflow-hidden text-sm">
            {recent.map((a) => (
              <li key={a.id} className="flex items-center gap-3 px-4 py-3">
                <span className="w-14 shrink-0 font-black tabular-nums text-primary">{a.score}/{a.total}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-bold">{a.lessonTitle?.en ?? `${a.kind} ${a.refId}`}</span>
                  <span className="block text-xs text-muted-foreground">{a.subjectName ? `${a.subjectName.en} · grade ${a.grade} · ` : ""}{fmt(a.createdAt)}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
