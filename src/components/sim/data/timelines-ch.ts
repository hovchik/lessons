import { t } from "../labels";
import type { TimeEvent, TimeSet } from "./timelines";
import type { Tr } from "@/lib/art/spec";

const E = (y: number, l: Tr, n?: Tr, o: { to?: number; c?: boolean } = {}): TimeEvent => ({ y, l, n, ...o });

/** Timelines for church history, grades 7–11. Dates follow the base lessons; early dates are traditional or approximate. */
export const CH_TIMELINES: Record<string, TimeSet> = {
  /* ---------------- grade 7 ---------------- */
  conversion: {
    title: t("When countries adopted Christianity", "Երբ երկրներն ընդունեցին քրիստոնեությունը", "Когда страны приняли христианство"),
    events: [
      E(301, t("Armenia", "Հայաստան", "Армения"), t("The traditional date; some historians suggest 314. The first state to make Christianity its official religion.", "Ավանդական թվականը․ որոշ պատմաբաններ առաջարկում են 314-ը։ Առաջին պետությունը, որը քրիստոնեությունը դարձրեց պաշտոնական կրոն։", "Традиционная дата; некоторые историки предлагают 314 год. Первое государство, сделавшее христианство официальной религией.")),
      E(313, t("Edict of Milan", "Միլանի հրովարտակ", "Миланский эдикт"), t("Rome stops persecuting Christians, but does not yet make Christianity the state religion.", "Հռոմը դադարեցնում է քրիստոնյաների հալածանքը, բայց դեռ քրիստոնեությունը պետական կրոն չի դարձնում։", "Рим прекращает гонения на христиан, но ещё не делает христианство государственной религией.")),
      E(330, t("Aksum (Ethiopia)", "Աքսում (Եթովպիա)", "Аксум (Эфиопия)"), t("King Ezana's coins change the pagan sun and moon for the cross.", "Եզանա թագավորի մետաղադրամների վրա հեթանոսական արևն ու լուսինը փոխարինվում են խաչով։", "На монетах царя Эзаны языческие солнце и луна сменяются крестом."), { c: true }),
      E(337, t("Georgia", "Վրաստան", "Грузия"), t("King Mirian III is baptised after the preaching of Saint Nino.", "Միրիան III թագավորը մկրտվում է Սուրբ Նունեի քարոզությունից հետո։", "Царь Мириан III крестится после проповеди святой Нины."), { c: true }),
      E(380, t("Roman Empire", "Հռոմեական կայսրություն", "Римская империя"), t("Emperor Theodosius I makes Christianity the religion of the empire.", "Թեոդոսիոս I կայսրը քրիստոնեությունը դարձնում է կայսրության կրոն։", "Император Феодосий I делает христианство религией империи.")),
      E(496, t("The Franks", "Ֆրանկներ", "Франки"), t("King Clovis is baptised at Reims.", "Քլոդվիգ թագավորը մկրտվում է Ռեյմսում։", "Король Хлодвиг крестится в Реймсе."), { c: true }),
      E(966, t("Poland", "Լեհաստան", "Польша"), t("Prince Mieszko I is baptised.", "Մեշկո I իշխանը մկրտվում է։", "Князь Мешко I принимает крещение.")),
      E(988, t("Kievan Rus", "Կիևյան Ռուսիա", "Киевская Русь"), t("Prince Vladimir is baptised.", "Վլադիմիր իշխանը մկրտվում է։", "Князь Владимир принимает крещение.")),
      E(1000, t("Iceland", "Իսլանդիա", "Исландия"), t("The island's assembly, the Althing, decides to accept Christianity.", "Կղզու ժողովը՝ Ալթինգը, որոշում է ընդունել քրիստոնեությունը։", "Собрание острова, альтинг, решает принять христианство.")),
      E(1387, t("Lithuania", "Լիտվա", "Литва"), t("The last country in Europe to adopt Christianity.", "Եվրոպայում վերջին երկիրը, որ ընդունեց քրիստոնեությունը։", "Последняя страна Европы, принявшая христианство.")),
    ],
  },
};
