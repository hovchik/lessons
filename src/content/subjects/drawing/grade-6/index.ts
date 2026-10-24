import { t, type CourseSeed } from "../../../types";
import { notes, g } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const drawingGrade6: CourseSeed = {
    subject: "drawing",
    grade: 6,
    ...g(6),
    description: t("Fine art in human life: the language of drawing and painting, still life, portrait, landscape, perspective.", "Կերպարվեստը մարդու կյանքում՝ գծանկարի և նկարչության լեզուն, նատյուրմորտ, դիմանկար, բնանկար, հեռանկար։", "Изобразительное искусство в жизни человека: язык рисунка и живописи, натюрморт, портрет, пейзаж, перспектива."),
    curriculumNotes: notes(
      ["Armenia grade 6 (1 h/week): kinds of fine art, graphic means (line, tone, texture), colour science, still life with light and shade, proportions of the face and figure, portrait, linear and aerial perspective, landscape, Armenian painters (Saryan, Aivazovsky, Bashinjaghian).", "Հայաստան, 6-րդ դասարան (1 ժ/շաբ.)՝ կերպարվեստի տեսակները, գրաֆիկական միջոցներ (գիծ, տոն, ֆակտուրա), գունագիտություն, նատյուրմորտ լույս-ստվերով, դեմքի և կազմվածքի համամասնություններ, դիմանկար, գծային և օդային հեռանկար, բնանկար, հայ նկարիչներ (Սարյան, Այվազովսկի, Բաշինջաղյան)։", "Армения, 6 класс (1 ч/нед.): виды изобразительного искусства, графические средства (линия, тон, фактура), цветоведение, натюрморт со светотенью, пропорции лица и фигуры, портрет, линейная и воздушная перспектива, пейзаж, армянские живописцы (Сарьян, Айвазовский, Башинджагян)."],
      ["Russia grade 6, ИЗО («Изобразительное искусство в жизни человека», 34 h): kinds of art and the basics of imagery, the world of our things (still life), the image of a person (portrait), man and space (landscape).", "Ռուսաստան, 6-րդ դասարան, ИЗО («Կերպարվեստը մարդու կյանքում», 34 ժ)՝ արվեստի տեսակները և պատկերային լեզվի հիմունքներ, մեր իրերի աշխարհը (նատյուրմորտ), մարդու կերպարը (դիմանկար), մարդը և տարածությունը (բնանկար)։", "Россия, 6 класс, ИЗО («Изобразительное искусство в жизни человека», 34 ч): виды изобразительного искусства и основы образного языка, мир наших вещей (натюрморт), вглядываясь в человека (портрет), человек и пространство (пейзаж)."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
