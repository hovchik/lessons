import { t } from "../labels";
import type { TimeEvent, TimeSet } from "./timelines";
import type { Tr } from "@/lib/art/spec";

const E = (y: number, l: Tr, n?: Tr, o: { to?: number; c?: boolean } = {}): TimeEvent => ({ y, l, n, ...o });

/** Timelines for music, grades 2–7. Dates follow the base lessons. */
export const MUS_TIMELINES: Record<string, TimeSet> = {
  /* ---------------- grade 2 ---------------- */
  anthem: {
    title: t("The anthems of Armenia", "Հայաստանի օրհներգները", "Гимны Армении"),
    events: [
      E(1859, t("Nalbandian writes \"Song of an Italian Girl\"", "Նալբանդյանը գրում է «Իտալացի աղջկա երգը»", "Налбандян пишет «Песню итальянской девушки»"), t("A poem about Italy's fight for freedom, which Armenian readers understood as a call to their own people.", "Բանաստեղծություն Իտալիայի ազատագրական պայքարի մասին, որը հայ ընթերցողները հասկացան որպես կոչ իրենց ժողովրդին։", "Стихотворение о борьбе Италии за свободу, которое армянские читатели поняли как призыв к своему народу.")),
      E(1918, t("\"Mer Hayrenik\" becomes the anthem of the First Republic", "«Մեր Հայրենիքը» դառնում է Առաջին Հանրապետության օրհներգը", "«Мер Айреник» становится гимном Первой республики"), t("With music by Barsegh Kanachyan; it was used until 1920.", "Բարսեղ Կանաչյանի երաժշտությամբ․ այն գործածվեց մինչև 1920 թվականը։", "На музыку Барсега Каначяна; он звучал до 1920 года.")),
      E(1944, t("Anthem of Soviet Armenia, music by Khachaturian", "Խորհրդային Հայաստանի օրհներգը՝ Խաչատրյանի երաժշտությամբ", "Гимн Советской Армении на музыку Хачатуряна"), t("Aram Khachaturian composed the music; the words were by the poet Sarmen.", "Երաժշտությունը գրել է Արամ Խաչատրյանը, խոսքերը՝ բանաստեղծ Սարմենը։", "Музыку написал Арам Хачатурян, слова — поэт Сармен.")),
      E(1991, t("\"Mer Hayrenik\" is adopted again", "«Մեր Հայրենիքը» կրկին ընդունվում է", "«Мер Айреник» принят вновь"), t("The independent Republic of Armenia returned to the anthem of the First Republic.", "Անկախ Հայաստանի Հանրապետությունը վերադարձավ Առաջին Հանրապետության օրհներգին։", "Независимая Республика Армения вернулась к гимну Первой республики.")),
    ],
  },
};
