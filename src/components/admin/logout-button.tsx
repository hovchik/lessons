"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
      }}
      className="flex h-11 items-center gap-2 rounded-xl px-3 text-sm font-bold text-muted-foreground hover:bg-muted md:mt-auto"
    >
      <LogOut className="size-4" aria-hidden="true" /> <span className="hidden sm:inline">Log out</span>
    </button>
  );
}
