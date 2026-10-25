import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/server/auth";
import { getAdminUsers } from "@/server/progress";

export const metadata = { title: "Users" };

const fmt = (iso: string | null) => (iso ? new Date(iso.includes("T") ? iso : iso + "Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "–");

export default async function AdminUsers({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { q = "" } = await searchParams;
  const users = await getAdminUsers(q);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-black sm:text-3xl">Users</h1>
        <form className="flex gap-2" role="search">
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Search name or username"
            aria-label="Search users"
            className="h-11 w-56 rounded-[12px] border border-border bg-card px-3 text-sm focus-visible:outline-primary"
          />
          <button type="submit" className="clay-sm clay-press h-11 px-4 text-sm font-bold">Search</button>
        </form>
      </div>
      <p className="text-sm text-muted-foreground">
        {users.length} {users.length === 1 ? "account" : "accounts"}. Pupils sign up themselves on the site (<code>/en/signup</code>); here you can reset a password, disable or delete an account.
      </p>
      <div className="clay overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="hidden px-4 py-3 sm:table-cell">Grade</th>
              <th className="px-4 py-3">Done</th>
              <th className="hidden px-4 py-3 sm:table-cell">Avg score</th>
              <th className="hidden px-4 py-3 md:table-cell">Last seen</th>
              <th className="hidden px-4 py-3 md:table-cell">Joined</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr><td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">No users yet.</td></tr>
            )}
            {users.map((u) => (
              <tr key={u.id} className={`border-t border-border/60 ${u.disabled ? "opacity-60" : ""}`}>
                <td className="px-4 py-3">
                  <span className="font-bold">{u.displayName}</span>
                  {u.disabled && <span className="ml-2 rounded-full bg-red-50 px-2 py-0.5 text-xs font-bold text-destructive">disabled</span>}
                  <span className="block text-xs text-muted-foreground">@{u.username} · {u.locale}</span>
                </td>
                <td className="hidden px-4 py-3 sm:table-cell">{u.grade ?? "–"}</td>
                <td className="px-4 py-3 tabular-nums">{u.completed}</td>
                <td className="hidden px-4 py-3 tabular-nums sm:table-cell">{u.avgScore === null ? "–" : `${Math.round(u.avgScore * 100)}%`}</td>
                <td className="hidden px-4 py-3 whitespace-nowrap md:table-cell">{fmt(u.lastSeenAt)}</td>
                <td className="hidden px-4 py-3 whitespace-nowrap md:table-cell">{fmt(u.createdAt)}</td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/users/${u.id}`} className="inline-flex min-h-11 items-center px-2 font-bold text-primary hover:underline">Open</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
