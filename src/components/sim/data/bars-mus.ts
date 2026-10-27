import { t } from "../labels";
import type { BarSet } from "./bars";

/* Music data sets: how many symphonies composers wrote, how loud everyday sounds are. */
export const MUS_BARS: Record<string, BarSet> = {
  /* ---------------- grade 6 ---------------- */
  symphonies: {
    title: t("How many symphonies did they write?", "Քանի՞ սիմֆոնիա են գրել", "Сколько симфоний они написали?"),
    unit: t("symphonies", "սիմֆոնիա", "симфоний"),
    source: t("Numbered symphonies in the usual catalogues; some composers also left unfinished or unnumbered ones.", "Համարակալված սիմֆոնիաներն՝ ըստ ընդունված ցուցակների․ որոշ կոմպոզիտորներ թողել են նաև անավարտ կամ չհամարակալված սիմֆոնիաներ։", "Пронумерованные симфонии по общепринятым каталогам; у некоторых композиторов есть также незаконченные или ненумерованные."),
    rows: [
      [t("Khachaturian", "Խաչատրյան", "Хачатурян"), 3, t("Three symphonies, written between 1934 and 1947.", "Երեք սիմֆոնիա՝ գրված 1934–1947 թվականներին։", "Три симфонии, написанные с 1934 по 1947 год.")],
      [t("Tchaikovsky", "Չայկովսկի", "Чайковский"), 6, t("The Sixth, \"Pathétique\", was his last work.", "Վեցերորդը՝ «Պաթետիկը», նրա վերջին գործն էր։", "Шестая, «Патетическая», стала его последним произведением.")],
      [t("Beethoven", "Բեթհովեն", "Бетховен"), 9, t("Nine symphonies changed what a symphony could be.", "Ինը սիմֆոնիան փոխեց պատկերացումը, թե ինչ կարող է լինել սիմֆոնիան։", "Девять симфоний изменили представление о том, какой может быть симфония.")],
      [t("Mahler", "Մալեր", "Малер"), 9, t("He finished nine; the Tenth was left unfinished.", "Նա ավարտեց ինը, իսկ Տասներորդը մնաց անավարտ։", "Он закончил девять; Десятая осталась незаконченной.")],
      [t("Shostakovich", "Շոստակովիչ", "Шостакович"), 15, t("The most of any major 20th-century Russian composer.", "20-րդ դարի խոշոր ռուս կոմպոզիտորներից ամենաշատը։", "Больше всех среди крупных русских композиторов XX века.")],
      [t("Mozart", "Մոցարտ", "Моцарт"), 41, t("Many were written as a teenager for concerts in Salzburg.", "Շատերը գրվել են պատանեկության տարիներին՝ Զալցբուրգի համերգների համար։", "Многие написаны в юности для концертов в Зальцбурге.")],
      [t("Hovhaness", "Հովհաննես", "Хованесс"), 67, t("The American-Armenian composer wrote more than almost anyone in the 20th century.", "Ամերիկահայ կոմպոզիտորը գրել է գրեթե ավելի շատ, քան 20-րդ դարում որևէ մեկը։", "Американо-армянский композитор написал больше почти всех в XX веке.")],
      [t("Haydn", "Հայդն", "Гайдн"), 104, t("\"The father of the symphony\" wrote most of them for Prince Esterházy's orchestra.", "«Սիմֆոնիայի հայրը» դրանց մեծ մասը գրել է իշխան Էստերհազիի նվագախմբի համար։", "«Отец симфонии» написал большую часть из них для оркестра князя Эстерхази.")],
    ],
  },
};
