import { t, unit, type CourseSeed } from "../../types";
import { notes, g } from "./shared";
import { drawingGrade1 } from "./grade-1";
import { drawingGrade2 } from "./grade-2";
import { drawingGrade3 } from "./grade-3";

export const drawing: CourseSeed[] = [
  drawingGrade1,
  drawingGrade2,
  drawingGrade3,
  {
    subject: "drawing",
    grade: 4,
    ...g(4),
    description: t("Every nation is an artist: landscape and people of Armenia and Russia, ancient cities, art of other peoples, heroes and holidays.", "Յուրաքանչյուր ժողովուրդ նկարիչ է՝ Հայաստանի և Ռուսաստանի բնապատկերն ու մարդիկ, հին քաղաքներ, այլ ժողովուրդների արվեստ, հերոսներ և տոներ։", "Каждый народ — художник: природа и люди Армении и России, древние города, искусство других народов, герои и праздники."),
    curriculumNotes: notes(
      ["Armenia grade 4 (1 h/week): landscape of the native land, national costume (taraz), village and city, medieval Armenian miniature (Toros Roslin), art of neighbouring peoples, heroes of Armenian epic (David of Sassoun), holidays (Vardavar, Trndez).", "Հայաստան, 4-րդ դասարան (1 ժ/շաբ.)՝ հայրենի երկրի բնապատկեր, տարազ, գյուղ և քաղաք, միջնադարյան հայկական մանրանկարչություն (Թորոս Ռոսլին), հարևան ժողովուրդների արվեստ, հայկական էպոսի հերոսներ (Սասունցի Դավիթ), տոներ (Վարդավառ, Տրնդեզ)։", "Армения, 4 класс (1 ч/нед.): пейзаж родной земли, национальный костюм (тараз), село и город, средневековая армянская миниатюра (Торос Рослин), искусство соседних народов, герои армянского эпоса (Давид Сасунский), праздники (Вардавар, Трндез)."],
      ["Russia grade 4, ИЗО («Каждый народ — художник», 34 h): origins of native art (landscape, village, beauty of a person), ancient cities of the land, every nation is an artist (Japan, mountain and steppe peoples, Central Asia, Ancient Greece, medieval Europe), art unites nations.", "Ռուսաստան, 4-րդ դասարան, ИЗО («Յուրաքանչյուր ժողովուրդ նկարիչ է», 34 ժ)՝ հայրենի արվեստի ակունքներ, հին քաղաքներ, այլ ժողովուրդների արվեստ (Ճապոնիա, լեռնային և տափաստանային ժողովուրդներ, Միջին Ասիա, Հին Հունաստան, միջնադարյան Եվրոպա), արվեստը միավորում է ժողովուրդներին։", "Россия, 4 класс, ИЗО («Каждый народ — художник», 34 ч): истоки родного искусства (пейзаж, деревня, красота человека), древние города нашей земли, каждый народ — художник (Япония, народы гор и степей, Средняя Азия, Древняя Греция, средневековая Европа), искусство объединяет народы."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
    units: [
      unit(t("Origins of native art", "Հայրենի արվեստի ակունքները", "Истоки родного искусства"), t("Native landscape, village, the beauty of a person, national costume.", "Հայրենի բնապատկեր, գյուղ, մարդու գեղեցկություն, ազգային տարազ։", "Родной пейзаж, деревня, красота человека, национальный костюм."), [
        ["native-landscape", "Landscape of the native land", "Հայրենի երկրի բնապատկերը", "Пейзаж родной земли"],
        ["village-architecture", "Village: wooden and stone houses", "Գյուղ․ փայտե և քարե տներ", "Деревня: деревянный и каменный дом"],
        ["national-costume", "National costume: taraz and sarafan", "Ազգային տարազ․ տարազ և սարաֆան", "Национальный костюм: тараз и сарафан"],
        ["folk-holidays", "Folk holidays: Vardavar, Maslenitsa", "Ժողովրդական տոներ․ Վարդավառ, Մասլենիցա", "Народные праздники: Вардавар, Масленица"],
      ]),
      unit(t("Ancient cities", "Հին քաղաքներ", "Древние города нашей земли"), t("Fortress towns, temples, monasteries, the medieval miniature.", "Ամրոց-քաղաքներ, տաճարներ, վանքեր, միջնադարյան մանրանկար։", "Города-крепости, храмы, монастыри, средневековая миниатюра."), [
        ["fortress-town", "A fortress town: Amberd, Novgorod kremlin", "Ամրոց-քաղաք․ Ամբերդ, Նովգորոդի կրեմլ", "Город-крепость: Амберд, Новгородский кремль"],
        ["temples-monasteries", "Temples and monasteries: Geghard, Haghpat", "Տաճարներ և վանքեր․ Գեղարդ, Հաղպատ", "Храмы и монастыри: Гегард, Ахпат"],
        ["armenian-miniature", "Armenian miniature: Toros Roslin", "Հայկական մանրանկարչություն․ Թորոս Ռոսլին", "Армянская миниатюра: Торос Рослин"],
        ["icon-fresco", "Icons and frescoes", "Սրբապատկերներ և որմնանկարներ", "Иконы и фрески"],
      ]),
      unit(t("Every nation is an artist", "Յուրաքանչյուր ժողովուրդ նկարիչ է", "Каждый народ — художник"), t("Japan, mountain and steppe peoples, Central Asia, Ancient Greece, medieval Europe.", "Ճապոնիա, լեռնային և տափաստանային ժողովուրդներ, Միջին Ասիա, Հին Հունաստան, միջնադարյան Եվրոպա։", "Япония, народы гор и степей, Средняя Азия, Древняя Греция, средневековая Европа."), [
        ["japan-art", "Art of Japan", "Ճապոնիայի արվեստ", "Страна восходящего солнца"],
        ["mountain-steppe", "Peoples of mountains and steppes", "Լեռների և տափաստանների ժողովուրդներ", "Народы гор и степей"],
        ["central-asia", "Cities of Central Asia", "Միջին Ասիայի քաղաքներ", "Города в пустыне"],
        ["ancient-greece", "Ancient Greece: temple and vase", "Հին Հունաստան․ տաճար և սափոր", "Древняя Эллада: храм и вазопись"],
        ["medieval-europe", "Medieval Europe: Gothic", "Միջնադարյան Եվրոպա․ գոթիկա", "Европейские города Средневековья"],
      ]),
      unit(t("Art unites nations", "Արվեստը միավորում է ժողովուրդներին", "Искусство объединяет народы"), t("Motherhood, old age, heroes, compassion, youth — eternal themes in art.", "Մայրություն, ծերություն, հերոսներ, գթասրտություն, երիտասարդություն՝ արվեստի հավերժական թեմաներ։", "Материнство, старость, герои, сострадание, юность — вечные темы искусства."), [
        ["motherhood", "Motherhood in art", "Մայրությունը արվեստում", "Материнство"],
        ["wisdom-of-age", "Wisdom of old age", "Ծերության իմաստնությունը", "Мудрость старости"],
        ["epic-heroes", "Heroes: David of Sassoun, Ilya Muromets", "Հերոսներ․ Սասունցի Դավիթ, Իլյա Մուրոմեց", "Герои: Давид Сасунский, Илья Муромец"],
        ["youth-dreams", "Youth and dreams; final exhibition", "Երիտասարդություն և երազանքներ, ամփոփիչ ցուցահանդես", "Юность и надежды; итоговая выставка"],
      ]),
    ],
  },
  {
    subject: "drawing",
    grade: 5,
    ...g(5),
    description: t("Decorative and applied art: ornament, symbols, folk costume, art in the life of society, modern design.", "Դեկորատիվ-կիրառական արվեստ՝ զարդանախշ, նշաններ, ժողովրդական տարազ, արվեստը հասարակության կյանքում, ժամանակակից դիզայն։", "Декоративно-прикладное искусство: орнамент, символы, народный костюм, искусство в жизни общества, современный дизайн."),
    curriculumNotes: notes(
      ["Armenia grade 5 (1 h/week): ornament and its language (geometric, plant, zoomorphic), Armenian decorative arts (carpets, ceramics, metalwork, khachkars), costume, heraldry and symbols, modern applied design.", "Հայաստան, 5-րդ դասարան (1 ժ/շաբ.)՝ զարդանախշ և նրա լեզուն (երկրաչափական, բուսական, կենդանական), հայկական դեկորատիվ արվեստ (գորգ, խեցեգործություն, մետաղագործություն, խաչքար), տարազ, զինանշաններ և նշաններ, ժամանակակից կիրառական դիզայն։", "Армения, 5 класс (1 ч/нед.): орнамент и его язык (геометрический, растительный, зооморфный), армянское декоративное искусство (ковры, керамика, металл, хачкары), костюм, геральдика и символы, современный прикладной дизайн."],
      ["Russia grade 5, ИЗО («Декоративно-прикладное искусство в жизни человека», 34 h): ancient roots of folk art, links with modern life, decorative art of different epochs, decorative art in modern world.", "Ռուսաստան, 5-րդ դասարան, ИЗО («Դեկորատիվ-կիրառական արվեստը մարդու կյանքում», 34 ժ)՝ ժողովրդական արվեստի հին արմատներ, կապը ժամանակակից կյանքի հետ, տարբեր դարաշրջանների դեկորատիվ արվեստ, դեկորատիվ արվեստը ժամանակակից աշխարհում։", "Россия, 5 класс, ИЗО («Декоративно-прикладное искусство в жизни человека», 34 ч): древние корни народного искусства, связь времён в народном искусстве, декор — человек, общество, время; декоративное искусство в современном мире."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
    units: [
      unit(t("Ancient roots of folk art", "Ժողովրդական արվեստի հին արմատները", "Древние корни народного искусства"), t("Ancient symbols, ornament structure, the peasant house and its decoration.", "Հին նշաններ, զարդանախշի կառուցվածք, գյուղացիական տուն և նրա զարդարանք։", "Древние образы, структура орнамента, крестьянский дом и его убранство."), [
        ["ancient-symbols", "Ancient symbols: sun, earth, water, tree of life", "Հին նշաններ․ արև, երկիր, ջուր, կենաց ծառ", "Древние образы: солнце, земля, вода, древо жизни"],
        ["ornament-types", "Geometric, plant and zoomorphic ornament", "Երկրաչափական, բուսական և կենդանական զարդանախշ", "Геометрический, растительный и зооморфный орнамент"],
        ["ornament-rhythm", "Rhythm and symmetry in ornament", "Ռիթմ և համաչափություն զարդանախշում", "Ритм и симметрия в орнаменте"],
        ["house-decoration", "Decoration of the traditional house", "Ավանդական տան զարդարանքը", "Убранство традиционного жилища"],
      ]),
      unit(t("Armenian decorative arts", "Հայկական դեկորատիվ արվեստ", "Армянское декоративное искусство"), t("Carpets, ceramics, metalwork, khachkar, manuscript ornament.", "Գորգեր, խեցեգործություն, մետաղագործություն, խաչքար, ձեռագրի զարդանախշ։", "Ковры, керамика, металл, хачкар, орнамент рукописей."), [
        ["armenian-carpets", "Armenian carpets: dragon carpets", "Հայկական գորգեր․ վիշապագորգեր", "Армянские ковры: вишапагорги"],
        ["ceramics-kutahya", "Ceramics: from Urartu to Kütahya", "Խեցեգործություն․ Ուրարտուից Կուտինա", "Керамика: от Урарту до Кютахьи"],
        ["khachkar-design", "Designing a khachkar composition", "Խաչքարի կոմպոզիցիայի ձևավորում", "Композиция хачкара"],
        ["manuscript-ornament", "Manuscript ornament and bird letters", "Ձեռագրի զարդանախշ և թռչնատառեր", "Орнамент рукописей и буквы-птицы"],
      ]),
      unit(t("Decoration, person, society, time", "Զարդ, մարդ, հասարակություն, ժամանակ", "Декор — человек, общество, время"), t("Costume of different epochs, heraldry, emblems.", "Տարբեր դարաշրջանների տարազ, զինանշանագիտություն, խորհրդանիշներ։", "Костюм разных эпох, геральдика, эмблемы."), [
        ["costume-epochs", "Costume tells about the epoch", "Տարազը պատմում է դարաշրջանի մասին", "Одежда говорит о человеке"],
        ["heraldry", "Heraldry: coats of arms of Armenia and Russia", "Զինանշանագիտություն․ Հայաստանի և Ռուսաստանի զինանշանները", "Геральдика: гербы Армении и России"],
        ["class-emblem", "Designing our class emblem", "Մեր դասարանի խորհրդանիշի ձևավորում", "Эмблема нашего класса"],
      ]),
      unit(t("Decorative art today", "Դեկորատիվ արվեստն այսօր", "Декоративное искусство в современном мире"), t("Modern ceramics, glass, textile, jewellery; a collective project.", "Ժամանակակից խեցեգործություն, ապակի, գործվածք, ոսկերչություն, կոլեկտիվ նախագիծ։", "Современная керамика, стекло, текстиль, ювелирное искусство; коллективный проект."), [
        ["modern-crafts", "Modern ceramics, glass and textile", "Ժամանակակից խեցեգործություն, ապակի և գործվածք", "Современное выставочное искусство"],
        ["jewellery-design", "Jewellery design", "Զարդերի դիզայն", "Ювелирное искусство"],
        ["collective-panel", "Collective decorative panel", "Կոլեկտիվ դեկորատիվ պանո", "Коллективное декоративное панно"],
      ]),
    ],
  },
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
