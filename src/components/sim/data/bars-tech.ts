import { t } from "../labels";
import type { BarSet } from "./bars";

/* Technology data sets: food values and energy. */
export const TECH_BARS: Record<string, BarSet> = {
  /* ---------------- grade 4 ---------------- */
  vitc: {
    title: t("Vitamin C in 100 g of raw food", "C վիտամին՝ 100 գ հում սննդում", "Витамин C в 100 г сырых продуктов"),
    unit: t("mg", "մգ", "мг"),
    source: t("USDA food tables, rounded. A child needs roughly 30–45 mg a day; cooking destroys part of it.", "ԱՄՆ գյուղատնտեսության նախարարության սննդի աղյուսակներ, կլորացված։ Երեխային օրական պետք է մոտ 30–45 մգ, իսկ եփելիս դրա մի մասը քայքայվում է։", "Таблицы Минсельхоза США, округлено. Ребёнку нужно примерно 30–45 мг в день; при варке часть витамина разрушается."),
    colors: ["#16a34a", "#dc2626", "#15803d", "#eab308", "#84cc16", "#ef4444", "#22c55e"],
    rows: [
      [t("Parsley", "Մաղադանոս", "Петрушка"), 133, t("A small bunch of herbs adds a lot of vitamin C to a salad.", "Կանաչու փոքր փունջն աղցանին շատ C վիտամին է ավելացնում։", "Небольшой пучок зелени добавляет в салат много витамина C.")],
      [t("Red sweet pepper", "Կարմիր քաղցր պղպեղ", "Красный сладкий перец"), 128, t("More than twice as much as a lemon!", "Կիտրոնից ավելի քան երկու անգամ շատ։", "Больше чем вдвое больше, чем в лимоне!")],
      [t("Broccoli", "Բրոկոլի", "Брокколи"), 89],
      [t("Lemon", "Կիտրոն", "Лимон"), 53],
      [t("Cabbage", "Կաղամբ", "Капуста"), 37],
      [t("Tomato", "Լոլիկ", "Помидор"), 14],
      [t("Cucumber", "Վարունգ", "Огурец"), 3, t("Mostly water, but crunchy and refreshing.", "Հիմնականում ջուր է, բայց խրթխրթան է և թարմացնող։", "В основном вода, зато хрустит и освежает.")],
    ],
  },
};
