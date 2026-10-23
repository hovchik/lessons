import { t, type CourseSeed } from "../../../types";
import { notes, g } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const drawingGrade4: CourseSeed = {
    subject: "drawing",
    grade: 4,
    ...g(4),
    description: t("Every nation is an artist: landscape and people of Armenia and Russia, ancient cities, art of other peoples, heroes and holidays.", "Յուրաքանչյուր ժողովուրդ նկարիչ է՝ Հայաստանի և Ռուսաստանի բնապատկերն ու մարդիկ, հին քաղաքներ, այլ ժողովուրդների արվեստ, հերոսներ և տոներ։", "Каждый народ — художник: природа и люди Армении и России, древние города, искусство других народов, герои и праздники."),
    curriculumNotes: notes(
      ["Armenia grade 4 (1 h/week): landscape of the native land, national costume (taraz), village and city, medieval Armenian miniature (Toros Roslin), art of neighbouring peoples, heroes of Armenian epic (David of Sassoun), holidays (Vardavar, Trndez).", "Հայաստան, 4-րդ դասարան (1 ժ/շաբ.)՝ հայրենի երկրի բնապատկեր, տարազ, գյուղ և քաղաք, միջնադարյան հայկական մանրանկարչություն (Թորոս Ռոսլին), հարևան ժողովուրդների արվեստ, հայկական էպոսի հերոսներ (Սասունցի Դավիթ), տոներ (Վարդավառ, Տրնդեզ)։", "Армения, 4 класс (1 ч/нед.): пейзаж родной земли, национальный костюм (тараз), село и город, средневековая армянская миниатюра (Торос Рослин), искусство соседних народов, герои армянского эпоса (Давид Сасунский), праздники (Вардавар, Трндез)."],
      ["Russia grade 4, ИЗО («Каждый народ — художник», 34 h): origins of native art (landscape, village, beauty of a person), ancient cities of the land, every nation is an artist (Japan, mountain and steppe peoples, Central Asia, Ancient Greece, medieval Europe), art unites nations.", "Ռուսաստան, 4-րդ դասարան, ИЗО («Յուրաքանչյուր ժողովուրդ նկարիչ է», 34 ժ)՝ հայրենի արվեստի ակունքներ, հին քաղաքներ, այլ ժողովուրդների արվեստ (Ճապոնիա, լեռնային և տափաստանային ժողովուրդներ, Միջին Ասիա, Հին Հունաստան, միջնադարյան Եվրոպա), արվեստը միավորում է ժողովուրդներին։", "Россия, 4 класс, ИЗО («Каждый народ — художник», 34 ч): истоки родного искусства (пейзаж, деревня, красота человека), древние города нашей земли, каждый народ — художник (Япония, народы гор и степей, Средняя Азия, Древняя Греция, средневековая Европа), искусство объединяет народы."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
