import { t, type CourseSeed } from "../../../types";
import { notes, g } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const drawingGrade7: CourseSeed = {
    subject: "drawing",
    grade: 7,
    ...g(7),
    description: t("Design and architecture in human life: composition basics, graphic design, typography, architecture, interior and the designed environment.", "Դիզայնը և ճարտարապետությունը մարդու կյանքում՝ կոմպոզիցիայի հիմունքներ, գրաֆիկական դիզայն, տառատեսակ, ճարտարապետություն, ինտերիեր և ձևավորված միջավայր։", "Дизайн и архитектура в жизни человека: основы композиции, графический дизайн, шрифт, архитектура, интерьер и проектируемая среда."),
    curriculumNotes: notes(
      ["Armenia grade 7 (1 h/week, last year of Kerparvest as a separate subject): composition laws, poster and font, book design, architecture of Armenia from Urartu to Tamanyan's Yerevan, interior and landscape design, final project. From grade 8 art continues within «Արվեստ».", "Հայաստան, 7-րդ դասարան (1 ժ/շաբ., Կերպարվեստի՝ որպես առանձին առարկայի վերջին տարին)՝ կոմպոզիցիայի օրենքներ, պաստառ և տառատեսակ, գրքի ձևավորում, Հայաստանի ճարտարապետությունն Ուրարտուից մինչև Թամանյանի Երևան, ինտերիերի և լանդշաֆտի դիզայն, ավարտական նախագիծ։ 8-րդ դասարանից արվեստը շարունակվում է «Արվեստ» առարկայի մեջ։", "Армения, 7 класс (1 ч/нед., последний год «Կերպարվեստ» как отдельного предмета): законы композиции, плакат и шрифт, оформление книги, архитектура Армении от Урарту до Еревана Таманяна, дизайн интерьера и ландшафта, итоговый проект. С 8 класса искусство продолжается в предмете «Արվեստ»."],
      ["Russia grade 7, ИЗО («Дизайн и архитектура в жизни человека», 34 h, last year of compulsory ИЗО): art of composition (basics of design and architecture), the world of things (from plane to volume), city and man, man in the mirror of design and architecture.", "Ռուսաստան, 7-րդ դասարան, ИЗО («Դիզայնը և ճարտարապետությունը մարդու կյանքում», 34 ժ, պարտադիր ИЗО-ի վերջին տարին)՝ կոմպոզիցիայի արվեստ, իրերի աշխարհ (հարթությունից ծավալ), քաղաքը և մարդը, մարդը դիզայնի և ճարտարապետության հայելում։", "Россия, 7 класс, ИЗО («Дизайн и архитектура в жизни человека», 34 ч, последний год обязательного ИЗО): искусство композиции — основа дизайна и архитектуры, в мире вещей и зданий, город и человек, человек в зеркале дизайна и архитектуры."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
