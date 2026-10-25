import { t, type CourseSeed } from "../../../types";
import { notes, g } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const drawingGrade5: CourseSeed = {
    subject: "drawing",
    grade: 5,
    ...g(5),
    description: t("Decorative and applied art: ornament, symbols, folk costume, art in the life of society, modern design.", "Դեկորատիվ-կիրառական արվեստ՝ զարդանախշ, նշաններ, ժողովրդական տարազ, արվեստը հասարակության կյանքում, ժամանակակից դիզայն։", "Декоративно-прикладное искусство: орнамент, символы, народный костюм, искусство в жизни общества, современный дизайн."),
    curriculumNotes: notes(
      ["Armenia grade 5 (1 h/week): ornament and its language (geometric, plant, zoomorphic), Armenian decorative arts (carpets, ceramics, metalwork, khachkars), costume, heraldry and symbols, modern applied design.", "Հայաստան, 5-րդ դասարան (1 ժ/շաբ.)՝ զարդանախշ և նրա լեզուն (երկրաչափական, բուսական, կենդանական), հայկական դեկորատիվ արվեստ (գորգ, խեցեգործություն, մետաղագործություն, խաչքար), տարազ, զինանշաններ և նշաններ, ժամանակակից կիրառական դիզայն։", "Армения, 5 класс (1 ч/нед.): орнамент и его язык (геометрический, растительный, зооморфный), армянское декоративное искусство (ковры, керамика, металл, хачкары), костюм, геральдика и символы, современный прикладной дизайн."],
      ["Russia grade 5, ИЗО («Декоративно-прикладное искусство в жизни человека», 34 h): ancient roots of folk art, links with modern life, decorative art of different epochs, decorative art in modern world.", "Ռուսաստան, 5-րդ դասարան, ИЗО («Դեկորատիվ-կիրառական արվեստը մարդու կյանքում», 34 ժ)՝ ժողովրդական արվեստի հին արմատներ, կապը ժամանակակից կյանքի հետ, տարբեր դարաշրջանների դեկորատիվ արվեստ, դեկորատիվ արվեստը ժամանակակից աշխարհում։", "Россия, 5 класс, ИЗО («Декоративно-прикладное искусство в жизни человека», 34 ч): древние корни народного искусства, связь времён в народном искусстве, декор — человек, общество, время; декоративное искусство в современном мире."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
