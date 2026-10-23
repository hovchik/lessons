import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/button";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <div className="clay mx-auto max-w-lg p-10 text-center">
      <p className="text-6xl font-black text-primary">404</p>
      <h1 className="mt-4 text-2xl font-extrabold">{t("title")}</h1>
      <p className="mt-2 text-muted-foreground">{t("text")}</p>
      <Link href="/" className={buttonClasses({ className: "mt-6" })}>{t("home")}</Link>
    </div>
  );
}
