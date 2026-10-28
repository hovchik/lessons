"use client";

import { LogOut } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { notifyChanged } from "@/lib/live";
import { buttonClasses } from "@/components/ui/button";

export function LogoutLink() {
  const t = useTranslations("nav");
  const router = useRouter();
  return (
    <button
      type="button"
      className={buttonClasses({ variant: "secondary", size: "sm", className: "self-start" })}
      onClick={async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/");
        notifyChanged();
      }}
    >
      <LogOut className="size-4" aria-hidden="true" />
      {t("logout")}
    </button>
  );
}
