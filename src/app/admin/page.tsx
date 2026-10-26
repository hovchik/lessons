import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdmin } from "@/server/auth";
import { getUserCount } from "@/server/progress";
import { getAdminCourses, getStats, getSubjects } from "@/server/queries";

export default async function AdminDashboard() {
  if (!(await isAdmin())) redirect("/admin/login");
  const [stats, subjects, courses, userCount] = await Promise.all([getStats(), getSubjects(), getAdminCourses(), getUserCount()]);
  const pct = stats.lessons ? Math.round((stats.published / stats.lessons) * 100) : 0;
  const claudeReady = !!process.env.ANTHROPIC_API_KEY;

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-black sm:text-3xl">Dashboard</h1>
      <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
        {[
          ["Subjects", subjects.length],
          ["Courses", stats.courses],
          ["Lessons", stats.lessons],
          ["Published", `${stats.published} (${pct}%)`],
          ["Users", userCount],
        ].map(([k, v]) => (
          <div key={String(k)} className="clay-sm p-4 sm:p-5">
            <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{k === "Users" ? <Link href="/admin/users" className="hover:text-primary">Users</Link> : k}</dt>
            <dd className="mt-1 text-2xl font-black text-primary sm:text-3xl">{v}</dd>
          </div>
        ))}
      </dl>
      <div className={`rounded-[var(--radius)] p-4 text-sm ${claudeReady ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}>
        {claudeReady
          ? "Claude generation is enabled. Open any lesson and press “Generate with Claude”, or run npm run generate for bulk generation."
          : "Set ANTHROPIC_API_KEY in .env.local to enable “Generate with Claude” and the bulk generation script."}
      </div>
      <section>
        <h2 className="text-xl font-extrabold">Content progress by subject</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {subjects.map((s) => {
            const mine = courses.filter((c) => c.course.subjectId === s.id);
            const total = mine.reduce((a, c) => a + c.lessonCount, 0);
            const ready = mine.reduce((a, c) => a + c.readyCount, 0);
            const p = total ? Math.round((ready / total) * 100) : 0;
            return (
              <li key={s.id} className={`clay-sm subject-${s.color} p-4`}>
                <div className="flex items-center justify-between">
                  <Link href={`/admin/courses?subject=${s.id}`} className="font-extrabold hover:text-primary">{s.name.en}</Link>
                  <span className="text-sm font-bold text-muted-foreground">{ready} / {total}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={p} aria-valuemin={0} aria-valuemax={100} aria-label={`${s.name.en} ${p}%`}>
                  <div className="h-full rounded-full" style={{ width: `${p}%`, background: "var(--s)" }} />
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
