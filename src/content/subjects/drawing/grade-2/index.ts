import { t, type CourseSeed } from "../../../types";
import { notes, g } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const drawingGrade2: CourseSeed = {
    subject: "drawing",
    grade: 2,
    ...g(2),
    description: t("Art materials and techniques, colour moods, drawing from nature, folk art of Armenia and Russia.", "Նյութեր և տեխնիկաներ, գույնի տրամադրություն, նկարել բնությունից, Հայաստանի և Ռուսաստանի ժողովրդական արվեստ։", "Художественные материалы и техники, настроение цвета, рисование с натуры, народное искусство Армении и России."),
    curriculumNotes: notes(
      ["Armenia grade 2 (1 h/week): gouache, watercolour, pastel; colour moods; drawing from nature (fruit, leaves, toys); illustration of Armenian fairy tales (H. Tumanyan); carpet ornaments; clay modelling.", "Հայաստան, 2-րդ դասարան (1 ժ/շաբ.)՝ գուաշ, ջրաներկ, պաստել, գույնի տրամադրություն, նկարել բնությունից (միրգ, տերև, խաղալիք), Թումանյանի հեքիաթների նկարազարդում, գորգի զարդանախշեր, կավե ծեփ։", "Армения, 2 класс (1 ч/нед.): гуашь, акварель, пастель; настроение цвета; рисование с натуры (фрукты, листья, игрушки); иллюстрации к сказкам О. Туманяна; ковровые орнаменты; лепка из глины."],
      ["Russia grade 2, ИЗО («Искусство и ты», 34 h): how and with what artists work; reality and fantasy; what art says; how art speaks (colour, line, rhythm, proportion).", "Ռուսաստան, 2-րդ դասարան, ИЗО («Արվեստը և դու», 34 ժ)՝ ինչպես և ինչով են աշխատում նկարիչները, իրականություն և երևակայություն, ինչ է ասում արվեստը, ինչպես է խոսում արվեստը (գույն, գիծ, ռիթմ, համամասնություն)։", "Россия, 2 класс, ИЗО («Искусство и ты», 34 ч): как и чем работают художники; реальность и фантазия; о чём говорит искусство; как говорит искусство (цвет, линия, ритм, пропорции)."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
