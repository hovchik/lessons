import { t, unit, type CourseSeed } from "../../types";
import { notes, g } from "./shared";
import { drawingGrade1 } from "./grade-1";
import { drawingGrade2 } from "./grade-2";
import { drawingGrade3 } from "./grade-3";
import { drawingGrade4 } from "./grade-4";
import { drawingGrade5 } from "./grade-5";

export const drawing: CourseSeed[] = [
  drawingGrade1,
  drawingGrade2,
  drawingGrade3,
  drawingGrade4,
  drawingGrade5,
  {
    subject: "drawing",
    grade: 6,
    ...g(6),
    description: t("Fine art in human life: the language of drawing and painting, still life, portrait, landscape, perspective.", "Կերպարվեստը մարդու կյանքում՝ գծանկարի և նկարչության լեզուն, նատյուրմորտ, դիմանկար, բնանկար, հեռանկար։", "Изобразительное искусство в жизни человека: язык рисунка и живописи, натюрморт, портрет, пейзаж, перспектива."),
    curriculumNotes: notes(
      ["Armenia grade 6 (1 h/week): kinds of fine art, graphic means (line, tone, texture), colour science, still life with light and shade, proportions of the face and figure, portrait, linear and aerial perspective, landscape, Armenian painters (Saryan, Aivazovsky, Bashinjaghian).", "Հայաստան, 6-րդ դասարան (1 ժ/շաբ.)՝ կերպարվեստի տեսակները, գրաֆիկական միջոցներ (գիծ, տոն, ֆակտուրա), գունագիտություն, նատյուրմորտ լույս-ստվերով, դեմքի և կազմվածքի համամասնություններ, դիմանկար, գծային և օդային հեռանկար, բնանկար, հայ նկարիչներ (Սարյան, Այվազովսկի, Բաշինջաղյան)։", "Армения, 6 класс (1 ч/нед.): виды изобразительного искусства, графические средства (линия, тон, фактура), цветоведение, натюрморт со светотенью, пропорции лица и фигуры, портрет, линейная и воздушная перспектива, пейзаж, армянские живописцы (Сарьян, Айвазовский, Башинджагян)."],
      ["Russia grade 6, ИЗО («Изобразительное искусство в жизни человека», 34 h): kinds of art and the basics of imagery, the world of our things (still life), the image of a person (portrait), man and space (landscape).", "Ռուսաստան, 6-րդ դասարան, ИЗО («Կերպարվեստը մարդու կյանքում», 34 ժ)՝ արվեստի տեսակները և պատկերային լեզվի հիմունքներ, մեր իրերի աշխարհը (նատյուրմորտ), մարդու կերպարը (դիմանկար), մարդը և տարածությունը (բնանկար)։", "Россия, 6 класс, ИЗО («Изобразительное искусство в жизни человека», 34 ч): виды изобразительного искусства и основы образного языка, мир наших вещей (натюрморт), вглядываясь в человека (портрет), человек и пространство (пейзаж)."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
    units: [
      unit(t("The language of fine art", "Կերպարվեստի լեզուն", "Виды изобразительного искусства и основы образного языка"), t("Drawing, painting, graphics, sculpture; line, tone, texture, colour.", "Գծանկար, նկարչություն, գրաֆիկա, քանդակ, գիծ, տոն, ֆակտուրա, գույն։", "Рисунок, живопись, графика, скульптура; линия, тон, фактура, цвет."), [
        ["kinds-of-art", "Kinds and genres of fine art", "Կերպարվեստի տեսակներն ու ժանրերը", "Виды и жанры изобразительного искусства"],
        ["line-tone-hatching", "Line, tone and hatching", "Գիծ, տոն և շտրիխ", "Линия, тон и штриховка"],
        ["colour-wheel", "Colour wheel, complementary colours, saturation", "Գունային շրջան, փոխլրացնող գույներ, հագեցվածություն", "Цветовой круг, дополнительные цвета, насыщенность"],
        ["texture-materials", "Texture and materials in sculpture", "Ֆակտուրա և նյութեր քանդակում", "Фактура и материалы в скульптуре"],
      ]),
      unit(t("The world of things: still life", "Իրերի աշխարհը․ նատյուրմորտ", "Мир наших вещей. Натюрморт"), t("Construction of objects, light and shade, still life in graphics and colour.", "Առարկաների կառուցում, լույս և ստվեր, նատյուրմորտ գրաֆիկայում և գույնով։", "Конструкция предметов, светотень, натюрморт в графике и в цвете."), [
        ["object-construction", "Geometric construction of objects", "Առարկաների երկրաչափական կառուցումը", "Понятие формы; геометрические тела"],
        ["light-and-shade", "Light and shade on a simple form", "Լույս և ստվեր պարզ ձևի վրա", "Освещение; свет и тень"],
        ["graphic-still-life", "Still life in pencil", "Նատյուրմորտ մատիտով", "Натюрморт в графике"],
        ["colour-still-life", "Still life in colour", "Նատյուրմորտ գույնով", "Цвет в натюрморте"],
      ]),
      unit(t("Looking at a person: portrait", "Նայելով մարդուն․ դիմանկար", "Вглядываясь в человека. Портрет"), t("Proportions of the head, construction, portrait in graphics and colour, self-portrait.", "Գլխի համամասնություններ, կառուցում, դիմանկար գրաֆիկայում և գույնով, ինքնանկար։", "Пропорции головы, конструкция, портрет в графике и цвете, автопортрет."), [
        ["head-proportions", "Proportions and construction of the head", "Գլխի համամասնությունները և կառուցումը", "Конструкция головы человека и её пропорции"],
        ["portrait-graphics", "Graphic portrait", "Գրաֆիկական դիմանկար", "Графический портретный рисунок"],
        ["portrait-colour", "Portrait in colour; mood", "Դիմանկար գույնով, տրամադրություն", "Портрет в живописи; роль цвета"],
        ["self-portrait", "Self-portrait", "Ինքնանկար", "Автопортрет"],
        ["great-portraits", "Great portraits: Hakob Hovnatanyan, Repin, Serov", "Մեծ դիմանկարներ․ Հակոբ Հովնաթանյան, Ռեպին, Սերով", "Великие портретисты: Овнатанян, Репин, Серов"],
      ]),
      unit(t("Man and space: landscape", "Մարդը և տարածությունը․ բնանկար", "Человек и пространство. Пейзаж"), t("Linear and aerial perspective, landscape composition, city landscape.", "Գծային և օդային հեռանկար, բնանկարի կոմպոզիցիա, քաղաքային բնանկար։", "Линейная и воздушная перспектива, композиция пейзажа, городской пейзаж."), [
        ["linear-perspective", "Linear perspective: horizon and vanishing point", "Գծային հեռանկար․ հորիզոն և անհետացման կետ", "Правила построения перспективы"],
        ["aerial-perspective", "Aerial perspective", "Օդային հեռանկար", "Воздушная перспектива"],
        ["landscape-mood", "Landscape and mood: Saryan's Armenia", "Բնանկար և տրամադրություն․ Սարյանի Հայաստանը", "Пейзаж — настроение: Армения Сарьяна"],
        ["city-landscape", "City landscape", "Քաղաքային բնանկար", "Городской пейзаж"],
      ]),
    ],
  },
  {
    subject: "drawing",
    grade: 7,
    ...g(7),
    description: t("Design and architecture in human life: composition basics, graphic design, typography, architecture, interior and the designed environment.", "Դիզայնը և ճարտարապետությունը մարդու կյանքում՝ կոմպոզիցիայի հիմունքներ, գրաֆիկական դիզայն, տառատեսակ, ճարտարապետություն, ինտերիեր և ձևավորված միջավայր։", "Дизайн и архитектура в жизни человека: основы композиции, графический дизайн, шрифт, архитектура, интерьер и проектируемая среда."),
    curriculumNotes: notes(
      ["Armenia grade 7 (1 h/week, last year of Kerparvest as a separate subject): composition laws, poster and font, book design, architecture of Armenia from Urartu to Tamanyan's Yerevan, interior and landscape design, final project. From grade 8 art continues within «Արվեստ».", "Հայաստան, 7-րդ դասարան (1 ժ/շաբ., Կերպարվեստի՝ որպես առանձին առարկայի վերջին տարին)՝ կոմպոզիցիայի օրենքներ, պաստառ և տառատեսակ, գրքի ձևավորում, Հայաստանի ճարտարապետությունը Ուրարտուից մինչև Թամանյանի Երևան, ինտերիերի և լանդշաֆտի դիզայն, ավարտական նախագիծ։ 8-րդ դասարանից արվեստը շարունակվում է «Արվեստ» առարկայի մեջ։", "Армения, 7 класс (1 ч/нед., последний год Кերպարվեստ как отдельного предмета): законы композиции, плакат и шрифт, оформление книги, архитектура Армении от Урарту до Еревана Таманяна, дизайн интерьера и ландшафта, итоговый проект. С 8 класса искусство продолжается в предмете «Արվեստ»."],
      ["Russia grade 7, ИЗО («Дизайн и архитектура в жизни человека», 34 h, last year of compulsory ИЗО): art of composition (basics of design and architecture), the world of things (from plane to volume), city and man, man in the mirror of design and architecture.", "Ռուսաստան, 7-րդ դասարան, ИЗО («Դիզայնը և ճարտարապետությունը մարդու կյանքում», 34 ժ, պարտադիր ИЗО-ի վերջին տարին)՝ կոմպոզիցիայի արվեստ, իրերի աշխարհ (հարթությունից ծավալ), քաղաքը և մարդը, մարդը դիզայնի և ճարտարապետության հայելում։", "Россия, 7 класс, ИЗО («Дизайн и архитектура в жизни человека», 34 ч, последний год обязательного ИЗО): искусство композиции — основа дизайна и архитектуры, в мире вещей и зданий, город и человек, человек в зеркале дизайна и архитектуры."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
    units: [
      unit(t("The art of composition", "Կոմպոզիցիայի արվեստ", "Искусство композиции — основа дизайна и архитектуры"), t("Balance, rhythm, contrast, dominant; font and poster; book layout.", "Հավասարակշռություն, ռիթմ, կոնտրաստ, դոմինանտ, տառատեսակ և պաստառ, գրքի մակետ։", "Равновесие, ритм, контраст, доминанта; шрифт и плакат; макет книги."), [
        ["composition-laws", "Laws of composition: balance, rhythm, dominant", "Կոմպոզիցիայի օրենքներ․ հավասարակշռություն, ռիթմ, դոմինանտ", "Основы композиции: равновесие, ритм, доминанта"],
        ["colour-in-design", "Colour in design: harmony and contrast", "Գույնը դիզայնում․ հարմոնիա և կոնտրաստ", "Цвет — элемент композиционного творчества"],
        ["typography-armenian-letters", "Font and letter: Armenian and Cyrillic typography", "Տառատեսակ և տառ․ հայկական և կիրիլիցյան տիպոգրաֆիա", "Буква — строка — текст: армянский и кириллический шрифт"],
        ["poster-design", "Poster: image plus text", "Պաստառ․ պատկեր և տեքստ", "Плакат: изображение и слово"],
        ["book-magazine-layout", "Book and magazine layout", "Գրքի և ամսագրի մակետ", "Многообразие форм полиграфического дизайна"],
      ]),
      unit(t("From plane to volume", "Հարթությունից ծավալ", "В мире вещей и зданий"), t("Volumetric composition, module, architectural models from paper, product design.", "Ծավալային կոմպոզիցիա, մոդուլ, թղթե ճարտարապետական մակետներ, արտադրանքի դիզայն։", "Объёмно-пространственная композиция, модуль, макеты из бумаги, дизайн вещи."), [
        ["volumetric-composition", "Volumetric composition from paper", "Ծավալային կոմպոզիցիա թղթից", "Объёмно-пространственная макетирование"],
        ["module-structure", "Module and structure in architecture", "Մոդուլ և կառուցվածք ճարտարապետությունում", "Конструкция: часть и целое; модуль"],
        ["building-model", "Model of a building", "Շենքի մակետ", "Макет здания"],
        ["product-design", "Designing a thing: form follows function", "Իրի դիզայն․ ձևը հետևում է գործառույթին", "Вещь: красота и целесообразность"],
      ]),
      unit(t("City and man", "Քաղաքը և մարդը", "Город и человек"), t("History of architecture, Armenian architecture from Urartu to Tamanyan, modern city, landscape design.", "Ճարտարապետության պատմություն, հայկական ճարտարապետությունը Ուրարտուից Թամանյան, ժամանակակից քաղաք, լանդշաֆտի դիզայն։", "История архитектуры, армянская архитектура от Урарту до Таманяна, современный город, ландшафтный дизайн."), [
        ["architecture-history", "Architecture through the ages", "Ճարտարապետությունը դարերի միջով", "Город сквозь времена и страны"],
        ["armenian-architecture-7", "Armenian architecture: Urartu, Ani, Tamanyan's Yerevan", "Հայկական ճարտարապետություն․ Ուրարտու, Անի, Թամանյանի Երևան", "Армянская архитектура: Урарту, Ани, Ереван Таманяна"],
        ["modern-city", "The modern city: planning and transport", "Ժամանակակից քաղաք․ պլանավորում և տրանսպորտ", "Город сегодня и завтра"],
        ["landscape-design", "Landscape design: park and courtyard", "Լանդշաֆտի դիզայն․ պուրակ և բակ", "Природа и архитектура: ландшафтный дизайн"],
        ["interior-design", "Interior: my room", "Ինտերիեր․ իմ սենյակը", "Интерьер: моя комната"],
      ]),
      unit(t("Man in the mirror of design", "Մարդը դիզայնի հայելում", "Человек в зеркале дизайна и архитектуры"), t("Costume design, image and style, final design project.", "Հագուստի դիզայն, կերպար և ոճ, ավարտական դիզայն-նախագիծ։", "Дизайн костюма, образ и стиль, итоговый дизайн-проект."), [
        ["fashion-design", "Costume design: from taraz to streetwear", "Հագուստի դիզայն․ տարազից մինչև ժամանակակից", "Мода, культура и ты"],
        ["image-style", "Image and style; brand identity basics", "Կերպար և ոճ, բրենդի հիմունքներ", "Автопортрет на каждый день; стиль"],
        ["final-design-project", "Final design project and presentation", "Ավարտական նախագիծ և ներկայացում", "Итоговый дизайн-проект и защита"],
      ]),
    ],
  },
];
