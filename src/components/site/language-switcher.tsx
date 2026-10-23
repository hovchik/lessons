"use client";

import { useLocale, useTranslations } from "next-intl";
import { Check, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    // pointerdown covers mouse, pen and touch alike.
    const onDoc = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language")}
        onClick={() => setOpen((o) => !o)}
        className="clay-sm clay-press inline-flex h-11 max-w-[40vw] items-center gap-2 px-3 text-sm font-bold sm:max-w-none"
      >
        <Globe className="size-4 text-primary" aria-hidden="true" />
        <span className="truncate">{localeNames[locale as keyof typeof localeNames]}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t("language")}
          className="clay absolute right-0 z-50 mt-2 min-w-48 overflow-hidden p-1.5"
        >
          {routing.locales.map((l) => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button
                type="button"
                lang={l}
                onClick={() => {
                  setOpen(false);
                  router.replace(pathname, { locale: l });
                }}
                className={cn(
                  "flex h-12 w-full items-center justify-between rounded-[12px] px-3.5 text-base font-semibold hover:bg-muted",
                  l === locale && "text-primary",
                )}
              >
                {localeNames[l]}
                {l === locale && <Check className="size-4" aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
