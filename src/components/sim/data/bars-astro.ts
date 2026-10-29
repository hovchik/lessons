import { t } from "../labels";
import type { BarSet } from "./bars";

const LY = t("light-years", "լուսային տարի", "св. лет");
const RSUN = t("R☉", "R☉", "R☉");
const MSUN = t("M☉", "M☉", "M☉");
const PCT = t("%", "%", "%");

/* Astronomy (grades 11–12) data sets: nearest stars, sizes of stars, black holes, the make-up of the Universe. */
export const ASTRO_BARS: Record<string, BarSet> = {
  nearstars: {
    title: t("The nearest stars (distance in light-years)", "Ամենամոտ աստղերը (հեռավորությունը լուսային տարիներով)", "Ближайшие звёзды (расстояние в световых годах)"),
    unit: LY,
    source: t("Distances from parallaxes measured by the Gaia space telescope.", "Հեռավորությունները՝ Գայա տիեզերական աստղադիտակով չափված պարալաքսներից։", "Расстояния по параллаксам, измеренным космическим телескопом Gaia."),
    rows: [
      [t("Proxima Centauri", "Պրոքսիմա Կենտավրոս", "Проксима Центавра"), 4.24, t("A red dwarf with at least one planet in its habitable zone.", "Կարմիր թզուկ՝ առնվազն մեկ մոլորակով կենսունակության գոտում։", "Красный карлик, у которого есть минимум одна планета в зоне обитаемости.")],
      [t("Alpha Centauri A and B", "Ալֆա Կենտավրոս A և B", "Альфа Центавра A и B"), 4.37, t("Two Sun-like stars circling each other every 80 years.", "Արեգակի նման երկու աստղ, որոնք միմյանց շուրջ պտտվում են 80 տարում։", "Две похожие на Солнце звезды, обращающиеся друг вокруг друга за 80 лет.")],
      [t("Barnard's Star", "Բառնարդի աստղ", "Звезда Барнарда"), 5.96, t("Moves across the sky faster than any other star.", "Երկնքում շարժվում է ավելի արագ, քան ցանկացած այլ աստղ։", "Движется по небу быстрее любой другой звезды.")],
      [t("Wolf 359", "Վոլֆ 359", "Вольф 359"), 7.86],
      [t("Sirius", "Սիրիուս", "Сириус"), 8.6, t("The brightest star of the night sky, with a white dwarf companion.", "Գիշերային երկնքի ամենապայծառ աստղը՝ սպիտակ թզուկ ուղեկցով։", "Самая яркая звезда ночного неба, со спутником — белым карликом.")],
      [t("Epsilon Eridani", "Էպսիլոն Էրիդանի", "Эпсилон Эридана"), 10.5, t("One of the first two stars checked for radio signals in 1960.", "1960 թվականին ռադիոազդանշանների համար ստուգված առաջին երկու աստղերից մեկը։", "Одна из двух первых звёзд, проверенных на радиосигналы в 1960 году.")],
      [t("Procyon", "Պրոցիոն", "Процион"), 11.5],
      [t("Tau Ceti", "Տաու Կետի", "Тау Кита"), 11.9, t("A Sun-like star also checked by Frank Drake in 1960.", "Արեգակի նման աստղ, որը նույնպես ստուգեց Ֆրենկ Դրեյքը 1960 թվականին։", "Похожая на Солнце звезда, которую тоже проверял Фрэнк Дрейк в 1960 году.")],
    ],
  },
  starradii: {
    title: t("Sizes of stars (radius compared with the Sun)", "Աստղերի չափերը (շառավիղը Արեգակի համեմատ)", "Размеры звёзд (радиус по сравнению с Солнцем)"),
    unit: RSUN,
    log: true,
    source: t("Rounded values; the sizes of giant stars are hard to measure, and estimates differ.", "Կլորացված արժեքներ. հսկա աստղերի չափերը դժվար է չափել, և գնահատականները տարբերվում են։", "Округлённые значения; размеры звёзд-гигантов трудно измерить, и оценки расходятся."),
    rows: [
      [t("Sirius B (white dwarf)", "Սիրիուս B (սպիտակ թզուկ)", "Сириус B (белый карлик)"), 0.0084, t("Smaller than the Earth, yet as heavy as the Sun.", "Երկրից փոքր է, բայց Արեգակի չափ ծանր։", "Меньше Земли, но тяжёлый, как Солнце.")],
      [t("Proxima Centauri", "Պրոքսիմա Կենտավրոս", "Проксима Центавра"), 0.15],
      [t("Sun", "Արեգակ", "Солнце"), 1],
      [t("Sirius A", "Սիրիուս A", "Сириус A"), 1.7],
      [t("Arcturus", "Արկտուր", "Арктур"), 25, t("An orange giant.", "Նարնջագույն հսկա։", "Оранжевый гигант.")],
      [t("Rigel", "Ռիգել", "Ригель"), 80, t("A blue supergiant.", "Կապույտ գերհսկա։", "Голубой сверхгигант.")],
      [t("Antares", "Անտարես", "Антарес"), 700],
      [t("Betelgeuse", "Բետելգեյզե", "Бетельгейзе"), 800, t("In place of the Sun it would reach beyond the orbit of Mars.", "Արեգակի տեղում այն կհասներ Մարսի ուղեծրից այն կողմ։", "На месте Солнца она простиралась бы за орбиту Марса.")],
    ],
  },
  blackholes: {
    title: t("Masses of black holes", "Սև խոռոչների զանգվածները", "Массы чёрных дыр"),
    unit: MSUN,
    log: true,
    rows: [
      [t("Cygnus X-1", "Կարապ X-1", "Лебедь X-1"), 21, t("The first black hole found, in 1971, in a pair with a blue supergiant.", "Առաջին հայտնաբերված սև խոռոչը (1971)՝ կապույտ գերհսկայի հետ զույգում։", "Первая найденная чёрная дыра (1971) в паре с голубым сверхгигантом.")],
      [t("After the first gravitational-wave merger (2015)", "Առաջին գրավիտացիոն-ալիքային միաձուլումից հետո (2015)", "После первого слияния, пойманного по гравволнам (2015)"), 62],
      [t("Sagittarius A*, our Galaxy", "Աղեղնավոր A*, մեր Գալակտիկա", "Стрелец A*, наша Галактика"), 4.3e6],
      [t("M87*", "M87*", "M87*"), 6.5e9, t("The first black hole whose shadow was imaged, in 2019.", "Առաջին սև խոռոչը, որի ստվերը լուսանկարվեց (2019)։", "Первая чёрная дыра, тень которой сфотографировали (2019).")],
    ],
  },
  cosmos: {
    title: t("What the Universe is made of", "Ինչից է կազմված Տիեզերքը", "Из чего состоит Вселенная"),
    unit: PCT,
    source: t("From the Planck satellite's map of the cosmic microwave background.", "Ըստ Planck արբանյակի կազմած ռելիկտային ճառագայթման քարտեզի։", "По карте реликтового излучения со спутника Planck."),
    rows: [
      [t("Ordinary matter", "Սովորական նյութ", "Обычное вещество"), 5, t("Stars, planets, gas, dust and us.", "Աստղեր, մոլորակներ, գազ, փոշի և մենք։", "Звёзды, планеты, газ, пыль и мы.")],
      [t("Dark matter", "Մութ նյութ", "Тёмная материя"), 27, t("Seen only by its gravity.", "Երևում է միայն իր ձգողությամբ։", "Заметна только по тяготению.")],
      [t("Dark energy", "Մութ էներգիա", "Тёмная энергия"), 68, t("Speeds up the expansion of the Universe.", "Արագացնում է Տիեզերքի ընդարձակումը։", "Ускоряет расширение Вселенной.")],
    ],
  },
};
