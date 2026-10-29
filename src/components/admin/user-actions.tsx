"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GRADES } from "@/lib/utils";

type U = { id: string; displayName: string; grade: number | null; disabled: boolean };

/** Admin controls for one pupil: rename, change grade, reset password, disable, delete. */
export function UserActions({ user }: { user: U }) {
  const router = useRouter();
  const [displayName, setDisplayName] = useState(user.displayName);
  const [grade, setGrade] = useState(user.grade ? String(user.grade) : "");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function patch(body: Record<string, unknown>, ok: string) {
    setBusy(true);
    setMsg(null);
    const res = await fetch(`/api/admin/users/${user.id}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
    setBusy(false);
    if (res.ok) {
      setMsg(ok);
      router.refresh();
    } else {
      setMsg((await res.json().catch(() => ({}))).error ?? "Request failed");
    }
  }

  const inputClass = "h-11 w-full rounded-[12px] border border-border bg-card px-3 text-sm focus-visible:outline-primary";

  return (
    <section className="clay space-y-5 p-5 sm:p-6">
      <h2 className="text-xl font-extrabold">Manage account</h2>
      <form
        className="grid gap-3 sm:grid-cols-[1fr_8rem_auto] sm:items-end"
        onSubmit={(e) => {
          e.preventDefault();
          patch({ displayName: displayName.trim(), grade: grade ? Number(grade) : null }, "Saved.");
        }}
      >
        <label className="text-sm font-bold">
          Name
          <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} required maxLength={60} className={`mt-1 ${inputClass}`} />
        </label>
        <label className="text-sm font-bold">
          Grade
          <select value={grade} onChange={(e) => setGrade(e.target.value)} className={`mt-1 ${inputClass}`}>
            <option value="">–</option>
            {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </label>
        <Button type="submit" size="sm" variant="secondary" disabled={busy}>Save</Button>
      </form>

      <form
        className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end"
        onSubmit={(e) => {
          e.preventDefault();
          if (password.length < 6) return setMsg("Password must be at least 6 characters.");
          patch({ password }, "Password changed.").then(() => setPassword(""));
        }}
      >
        <label className="text-sm font-bold">
          New password
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Set a new password for this pupil" autoComplete="off" className={`mt-1 ${inputClass}`} />
        </label>
        <Button type="submit" size="sm" variant="secondary" disabled={busy || !password}>Reset password</Button>
      </form>

      <div className="flex flex-wrap items-center gap-3 border-t border-border/60 pt-5">
        <Button size="sm" variant={user.disabled ? "primary" : "secondary"} disabled={busy} onClick={() => patch({ disabled: !user.disabled }, user.disabled ? "Account enabled." : "Account disabled.")}>
          {user.disabled ? "Enable account" : "Disable account"}
        </Button>
        <Button
          size="sm"
          variant="danger"
          disabled={busy}
          onClick={async () => {
            if (!confirm(`Delete ${user.displayName} and all their progress? This cannot be undone.`)) return;
            setBusy(true);
            const res = await fetch(`/api/admin/users/${user.id}`, { method: "DELETE" });
            setBusy(false);
            if (res.ok) {
              router.push("/admin/users");
              router.refresh();
            } else setMsg("Delete failed");
          }}
        >
          Delete account
        </Button>
        {msg && <p role="status" className="text-sm font-semibold text-muted-foreground">{msg}</p>}
      </div>
    </section>
  );
}
