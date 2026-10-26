import type { Tr } from "./spec";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });

/** Colour sets shown as swatches by the `palette` block. */
export const PALETTES: Record<string, { name: Tr; note?: Tr; colors: string[]; labels?: Tr[] }> = {
  primary: {
    name: t("Three primary colours", "Երեք հիմնական գույներ", "Три основных цвета"),
    note: t("They cannot be mixed from other paints.", "Դրանք չեն ստացվում այլ ներկերից։", "Их нельзя получить из других красок."),
    colors: ["#e0262f", "#ffd21f", "#1f5fbf"],
    labels: [t("red", "կարմիր", "красный"), t("yellow", "դեղին", "жёлтый"), t("blue", "կապույտ", "синий")],
  },
  secondary: {
    name: t("Secondary colours", "Երկրորդային գույներ", "Составные цвета"),
    note: t("Each is a mix of two primaries.", "Ամեն մեկը երկու հիմնական գույնի խառնուրդ է։", "Каждый получается из двух основных."),
    colors: ["#ff8a1f", "#2f9e44", "#7d2e8f"],
    labels: [t("orange", "նարնջագույն", "оранжевый"), t("green", "կանաչ", "зелёный"), t("violet", "մանուշակագույն", "фиолетовый")],
  },
  rainbow: {
    name: t("The rainbow", "Ծիածան", "Радуга"),
    colors: ["#e0262f", "#ff8a1f", "#ffd21f", "#2f9e44", "#4fb3e8", "#1f5fbf", "#7d2e8f"],
    labels: [t("red", "կարմիր", "красный"), t("orange", "նարնջագույն", "оранжевый"), t("yellow", "դեղին", "жёлтый"), t("green", "կանաչ", "зелёный"), t("light blue", "երկնագույն", "голубой"), t("blue", "կապույտ", "синий"), t("violet", "մանուշակագույն", "фиолетовый")],
  },
  warm: {
    name: t("Warm colours", "Տաք գույներ", "Тёплые цвета"),
    note: t("Sun, fire, sand, autumn leaves.", "Արև, կրակ, ավազ, աշնան տերևներ։", "Солнце, огонь, песок, осенние листья."),
    colors: ["#ffd21f", "#ffb01f", "#ff8a1f", "#f45a24", "#e0262f", "#a0522d"],
  },
  cold: {
    name: t("Cold colours", "Սառը գույներ", "Холодные цвета"),
    note: t("Water, ice, night sky, shade.", "Ջուր, սառույց, գիշերային երկինք, ստվեր։", "Вода, лёд, ночное небо, тень."),
    colors: ["#9ccc2b", "#2f9e44", "#1a8a96", "#4fb3e8", "#1f5fbf", "#4b3aa6", "#7d2e8f"],
  },
  pastel: {
    name: t("Quiet (pastel) colours", "Մեղմ (պաստելային) գույներ", "Тихие (пастельные) цвета"),
    colors: ["#f8c8d0", "#fde2b8", "#fff4b8", "#cdeccb", "#c8e3f8", "#ddd0f2"],
  },
  loud: {
    name: t("Loud (bright) colours", "Բարձրաձայն (վառ) գույներ", "Звонкие (яркие) цвета"),
    colors: ["#ff1f4b", "#ff8a00", "#ffe100", "#00c853", "#00a2ff", "#c800ff"],
  },
  earth: {
    name: t("Earth colours", "Հողի գույներ", "Земляные цвета"),
    note: t("Ochre, umber and sienna: the oldest paints, made from clay.", "Օխրա, ումբրա, սիենա՝ ամենահին ներկերը, պատրաստված կավից։", "Охра, умбра, сиена: самые древние краски, их делали из глины."),
    colors: ["#d9a441", "#b5651d", "#8b4513", "#6b4226", "#3e2a1e", "#e8d3a9"],
  },
  gzhel: {
    name: t("Gzhel: blue on white", "Գժել․ կապույտը սպիտակի վրա", "Гжель: синее на белом"),
    colors: ["#ffffff", "#dbe8fb", "#8fb3ea", "#2f5fc4", "#163a8a"],
  },
  khokhloma: {
    name: t("Khokhloma: gold, red, black", "Խոխլոմա․ ոսկի, կարմիր, սև", "Хохлома: золото, красный, чёрный"),
    colors: ["#e8b83a", "#d22a1e", "#1b1b1b", "#3f7d2b", "#f3d77a"],
  },
  zhostovo: {
    name: t("Zhostovo: flowers on black", "Ժոստովո․ ծաղիկներ սևի վրա", "Жостово: цветы на чёрном"),
    colors: ["#121212", "#d3313d", "#f2a7b0", "#f6e4c4", "#3f8f4a", "#e0b84a"],
  },
  dymkovo: {
    name: t("Dymkovo toy", "Դիմկովոյի խաղալիք", "Дымковская игрушка"),
    colors: ["#ffffff", "#e0262f", "#ff8a1f", "#ffd21f", "#2f9e44", "#1f5fbf", "#e85a9c"],
  },
  gorodets: {
    name: t("Gorodets painting", "Գորոդեցի նկարազարդում", "Городецкая роспись"),
    colors: ["#f2c14e", "#c8272d", "#1f4fa3", "#2e7d32", "#111111", "#ffffff"],
  },
  palekh: {
    name: t("Palekh: miniature on black lacquer", "Պալեխ․ մանրանկար սև լաքի վրա", "Палех: миниатюра на чёрном лаке"),
    colors: ["#0d0d0d", "#c9302c", "#e8b83a", "#2a6f97", "#6a994e", "#f2e8cf"],
  },
  "armenian-carpet": {
    name: t("Armenian carpet: natural dyes", "Հայկական գորգ․ բնական ներկեր", "Армянский ковёр: природные красители"),
    note: t("Red from the vordan karmir insect, blue from indigo, yellow from plants.", "Կարմիրը՝ որդան կարմիրից, կապույտը՝ ինդիգոյից, դեղինը՝ բույսերից։", "Красный из червеца (вордан кармир), синий из индиго, жёлтый из растений."),
    colors: ["#9e1b24", "#c8452c", "#1c2f5e", "#e3c27a", "#f1e6cf", "#2f5d3a", "#2a1a14"],
  },
  tuff: {
    name: t("Colours of Armenian stone", "Հայկական քարի գույները", "Цвета армянского камня"),
    note: t("Pink and orange tuff, black tuff, grey basalt.", "Վարդագույն և նարնջագույն տուֆ, սև տուֆ, մոխրագույն բազալտ։", "Розовый и оранжевый туф, чёрный туф, серый базальт."),
    colors: ["#e6a593", "#d9875f", "#b86a4b", "#4a3a3a", "#7d7a78", "#e9d8c4"],
  },
  saryan: {
    name: t("Saryan's palette: sun and shade", "Սարյանի գունապնակը․ արև և ստվեր", "Палитра Сарьяна: солнце и тень"),
    note: t("Hot orange and yellow next to deep blue and violet shadows.", "Տաք նարնջագույնն ու դեղինը՝ խոր կապույտ և մանուշակագույն ստվերների կողքին։", "Горячие оранжевый и жёлтый рядом с глубокими синими и фиолетовыми тенями."),
    colors: ["#ffcf3f", "#ff8a1f", "#e0442f", "#7d2e8f", "#2a3fa0", "#1f7a4a"],
  },
  aivazovsky: {
    name: t("Aivazovsky's sea", "Այվազովսկու ծովը", "Море Айвазовского"),
    note: t("Glowing light through green waves.", "Կանաչավուն ալիքների միջով շողացող լույս։", "Свет, просвечивающий сквозь зелёные волны."),
    colors: ["#f6e7b0", "#f2b35a", "#7fb7a4", "#2e6f73", "#173f4f", "#0c1f2c"],
  },
  shishkin: {
    name: t("Shishkin's forest", "Շիշկինի անտառը", "Лес Шишкина"),
    colors: ["#f3e3a1", "#c9b86b", "#6f8f3e", "#3f5f2a", "#6b4a2b", "#2b2a24"],
  },
  japan: {
    name: t("Japan in spring", "Ճապոնիան գարնանը", "Япония весной"),
    colors: ["#ffd7e0", "#f59ab0", "#ffffff", "#1f1f1f", "#c83a2e", "#7fa36b"],
  },
  egypt: {
    name: t("Ancient Egypt", "Հին Եգիպտոս", "Древний Египет"),
    colors: ["#e8b83a", "#1f5fa8", "#1a8a96", "#c0392b", "#f2e2c0", "#1b1b1b"],
  },
  heraldry: {
    name: t("Heraldic tinctures", "Հերալդիկ գույներ", "Геральдические цвета"),
    note: t("Two metals and five colours. A rule: never put colour on colour or metal on metal.", "Երկու մետաղ և հինգ գույն։ Կանոն՝ գույնը չդնել գույնի վրա, մետաղը՝ մետաղի։", "Два металла и пять цветов. Правило: не класть цвет на цвет, металл на металл."),
    colors: ["#e8b83a", "#e6e6e6", "#c8102e", "#1f4fa3", "#1f8a3a", "#6a2c91", "#111111"],
    labels: [t("gold", "ոսկի", "золото"), t("silver", "արծաթ", "серебро"), t("red", "կարմիր", "червлень"), t("blue", "կապույտ", "лазурь"), t("green", "կանաչ", "зелень"), t("purple", "ծիրանի", "пурпур"), t("black", "սև", "чернь")],
  },
  "armenia-flag": {
    name: t("Colours of the flag of Armenia", "Հայաստանի դրոշի գույները", "Цвета флага Армении"),
    colors: ["#d90012", "#0033a0", "#f2a800"],
    labels: [t("red", "կարմիր", "красный"), t("blue", "կապույտ", "синий"), t("apricot", "ծիրանագույն", "абрикосовый")],
  },
  "russia-flag": {
    name: t("Colours of the flag of Russia", "Ռուսաստանի դրոշի գույները", "Цвета флага России"),
    colors: ["#ffffff", "#0039a6", "#d52b1e"],
    labels: [t("white", "սպիտակ", "белый"), t("blue", "կապույտ", "синий"), t("red", "կարմիր", "красный")],
  },
  bauhaus: {
    name: t("Bauhaus: pure colours, simple forms", "Բաուհաուս․ մաքուր գույներ, պարզ ձևեր", "Баухаус: чистые цвета, простые формы"),
    colors: ["#e63022", "#f5c400", "#1d4ea3", "#111111", "#f4f1ea"],
  },
  digital: {
    name: t("A modern app palette", "Ժամանակակից հավելվածի գունապնակ", "Палитра современного приложения"),
    note: t("One main colour, one accent, calm greys.", "Մեկ հիմնական գույն, մեկ շեշտադրող, հանգիստ մոխրագույններ։", "Один основной цвет, один акцент, спокойные серые."),
    colors: ["#4f46e5", "#ea580c", "#f8fafc", "#e2e8f0", "#64748b", "#0f172a"],
  },
  eco: {
    name: t("Eco palette", "Էկո գունապնակ", "Эко-палитра"),
    colors: ["#e9e3d3", "#c2b280", "#8a9a5b", "#4f6d3a", "#7a5c3e", "#2f3e2f"],
  },
  autumn: {
    name: t("Autumn", "Աշուն", "Осень"),
    colors: ["#ffd21f", "#f2a03d", "#e0602f", "#b5262f", "#7a4a24", "#5f7f2a"],
  },
  winter: {
    name: t("Winter", "Ձմեռ", "Зима"),
    colors: ["#ffffff", "#dceefc", "#9cc7ea", "#5a7fb8", "#2c3e70", "#c9b8e8"],
  },
  spring: {
    name: t("Spring", "Գարուն", "Весна"),
    colors: ["#fff3a6", "#c8eb8a", "#7ccf6a", "#ffd0dc", "#f78fb3", "#9fd8f5"],
  },
  summer: {
    name: t("Summer", "Ամառ", "Лето"),
    colors: ["#ffe14d", "#ffa62b", "#2fbf71", "#1f8a3a", "#2b9ae8", "#ff5d73"],
  },
  skin: {
    name: t("Skin is not one colour", "Մաշկը մեկ գույն չէ", "Кожа не одного цвета"),
    note: t("Light, middle and shadow tones of one face.", "Մեկ դեմքի լույսի, միջին և ստվերի երանգները։", "Светлые, средние и теневые тона одного лица."),
    colors: ["#fbe3d0", "#f2c4a4", "#e3a37f", "#c98263", "#a0624a", "#e8a0a0"],
  },
  greys: {
    name: t("From white to black", "Սպիտակից մինչև սև", "От белого к чёрному"),
    colors: ["#ffffff", "#d9d9d9", "#b3b3b3", "#8c8c8c", "#666666", "#404040", "#1a1a1a"],
  },
  complementary: {
    name: t("Complementary pairs", "Լրացուցիչ զույգեր", "Дополнительные пары"),
    note: t("Opposite each other on the wheel: side by side they make each other brighter.", "Շրջանի վրա իրար դիմաց են․ կողք կողքի իրար ավելի վառ են դարձնում։", "Стоят напротив друг друга на круге: рядом усиливают друг друга."),
    colors: ["#e0262f", "#2f9e44", "#1f5fbf", "#ff8a1f", "#ffd21f", "#7d2e8f"],
  },
  night: {
    name: t("Night city", "Գիշերային քաղաք", "Ночной город"),
    colors: ["#0b1026", "#1b2450", "#3a3f8f", "#ffd25a", "#ff7a3d", "#57e3ff"],
  },
};
