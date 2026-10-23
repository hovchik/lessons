import { defineRouting } from "next-intl/routing";

export const locales = ["en", "hy", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export const localeNames: Record<Locale, string> = {
  en: "English",
  hy: "Հայերեն",
  ru: "Русский",
};
