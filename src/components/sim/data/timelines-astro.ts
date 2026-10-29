import { t } from "../labels";
import type { TimeEvent, TimeSet } from "./timelines";
import type { Tr } from "@/lib/art/spec";

const E = (y: number, l: Tr, n?: Tr, o: { to?: number; c?: boolean } = {}): TimeEvent => ({ y, l, n, ...o });

/** Timelines for astronomy, grades 11–12. Dates follow the base lessons. */
export const ASTRO_TIMELINES: Record<string, TimeSet> = {
  astroideas: {
    title: t("How we found our place in the Universe", "Ինչպես գտանք մեր տեղը Տիեզերքում", "Как мы нашли своё место во Вселенной"),
    events: [
      E(150, t("Ptolemy's Almagest", "Պտղոմեոսի «Ալմագեստը»", "«Альмагест» Птолемея"), t("The Earth at the centre, planets on circles upon circles: the model used for 1400 years.", "Երկիրը կենտրոնում, մոլորակները՝ շրջանների վրայի շրջաններով․ այս մոդելն օգտագործվեց 1400 տարի։", "Земля в центре, планеты на кругах поверх кругов: этой моделью пользовались 1400 лет."), { c: true }),
      E(1543, t("Copernicus puts the Sun in the centre", "Կոպեռնիկոսը Արեգակը դնում է կենտրոնում", "Коперник ставит Солнце в центр")),
      E(1610, t("Galileo's telescope", "Գալիլեյի աստղադիտակը", "Телескоп Галилея"), t("Moons of Jupiter, phases of Venus, and the Milky Way made of stars.", "Յուպիտերի արբանյակները, Վեներայի փուլերը և աստղերից կազմված Ծիր Կաթինը։", "Спутники Юпитера, фазы Венеры и Млечный Путь из звёзд.")),
      E(1619, t("Kepler's three laws complete", "Կեպլերի երեք օրենքներն ամբողջական են", "Три закона Кеплера завершены"), undefined, { c: true }),
      E(1687, t("Newton's law of gravitation", "Նյուտոնի ձգողության օրենքը", "Закон тяготения Ньютона")),
      E(1838, t("The first stellar parallax", "Աստղի առաջին պարալաքսը", "Первый звёздный параллакс"), t("Bessel measures the distance to 61 Cygni.", "Բեսելը չափում է 61 Կարապի հեռավորությունը։", "Бессель измеряет расстояние до 61 Лебедя.")),
      E(1912, t("Leavitt's law of Cepheids", "Լևիթի օրենքը ցեֆեիդների համար", "Закон Ливитт для цефеид")),
      E(1924, t("Andromeda is a galaxy", "Անդրոմեդան գալակտիկա է", "Андромеда — галактика"), t("Hubble finds Cepheids in it.", "Հաբլը նրանում ցեֆեիդներ է գտնում։", "Хаббл находит в ней цефеиды.")),
      E(1929, t("Hubble's law: the Universe expands", "Հաբլի օրենքը․ Տիեզերքն ընդարձակվում է", "Закон Хаббла: Вселенная расширяется")),
      E(1965, t("The cosmic microwave background", "Ռելիկտային ճառագայթումը", "Реликтовое излучение"), t("Penzias and Wilson hear the echo of the Big Bang.", "Պենզիասը և Վիլսոնը լսում են Մեծ պայթյունի արձագանքը։", "Пензиас и Вильсон слышат эхо Большого взрыва.")),
      E(1967, t("The first pulsar", "Առաջին պուլսարը", "Первый пульсар"), t("Jocelyn Bell finds a spinning neutron star.", "Ջոսլին Բելը գտնում է պտտվող նեյտրոնային աստղ։", "Джоселин Белл находит вращающуюся нейтронную звезду.")),
      E(1995, t("A planet around a Sun-like star", "Մոլորակ Արեգակի նման աստղի շուրջ", "Планета у похожей на Солнце звезды"), t("51 Pegasi b.", "51 Պեգասի b։", "51 Пегаса b.")),
      E(1998, t("The expansion speeds up", "Ընդարձակումն արագանում է", "Расширение ускоряется"), t("Dark energy enters astronomy.", "Աստղագիտություն է մտնում մութ էներգիան։", "В астрономию входит тёмная энергия.")),
      E(2015, t("Gravitational waves", "Գրավիտացիոն ալիքներ", "Гравитационные волны"), t("LIGO hears two black holes merge.", "LIGO-ն «լսում է» երկու սև խոռոչների միաձուլումը։", "LIGO «слышит» слияние двух чёрных дыр.")),
      E(2019, t("The first image of a black hole", "Սև խոռոչի առաջին պատկերը", "Первое изображение чёрной дыры"), t("The shadow of M87*.", "M87*-ի ստվերը։", "Тень M87*.")),
      E(2021, t("The James Webb Space Telescope", "Ջեյմս Ուեբ տիեզերական աստղադիտակը", "Космический телескоп «Джеймс Уэбб»"), t("Launched on 25 December; it sees the first galaxies.", "Արձակվեց դեկտեմբերի 25-ին, տեսնում է առաջին գալակտիկաները։", "Запущен 25 декабря; видит первые галактики.")),
    ],
  },
  spaceage: {
    title: t("The space age", "Տիեզերական դարաշրջան", "Космическая эра"),
    events: [
      E(1957, t("Sputnik 1", "«Սպուտնիկ-1»", "«Спутник-1»"), t("The first artificial satellite, 4 October.", "Առաջին արհեստական արբանյակը՝ հոկտեմբերի 4-ին։", "Первый искусственный спутник, 4 октября.")),
      E(1961, t("Yuri Gagarin", "Յուրի Գագարին", "Юрий Гагарин"), t("The first person in space, 12 April.", "Տիեզերքում առաջին մարդը՝ ապրիլի 12-ին։", "Первый человек в космосе, 12 апреля.")),
      E(1965, t("The first spacewalk", "Առաջին ելքը բաց տիեզերք", "Первый выход в открытый космос"), t("Alexei Leonov.", "Ալեքսեյ Լեոնով։", "Алексей Леонов.")),
      E(1966, t("Soft landing on the Moon", "Փափուկ վայրէջք Լուսնի վրա", "Мягкая посадка на Луну"), t("Luna 9 sends the first pictures from the surface.", "«Լունա-9»-ը ուղարկում է մակերևույթի առաջին լուսանկարները։", "«Луна-9» передаёт первые снимки с поверхности.")),
      E(1969, t("People on the Moon", "Մարդիկ Լուսնի վրա", "Люди на Луне"), t("Apollo 11: Neil Armstrong and Buzz Aldrin.", "«Ապոլոն-11»՝ Նիլ Արմսթրոնգ և Բազ Օլդրին։", "«Аполлон-11»: Нил Армстронг и Базз Олдрин.")),
      E(1973, t("Orion 2 space observatory", "«Օրիոն-2» տիեզերական աստղադիտարան", "Космическая обсерватория «Орион-2»"), t("An ultraviolet telescope by Grigor Gurzadyan from Armenia flies on Soyuz 13.", "Հայաստանից Գրիգոր Գուրզադյանի ուլտրամանուշակագույն աստղադիտակը թռչում է «Սոյուզ-13»-ով։", "Ультрафиолетовый телескоп Григора Гурзадяна из Армении летит на «Союзе-13».")),
      E(1977, t("Voyagers 1 and 2", "«Վոյաջեր» 1 և 2", "«Вояджеры» 1 и 2"), t("Still flying, now beyond the Solar wind.", "Դեռ թռչում են՝ արդեն արեգակնային քամուց այն կողմ։", "Всё ещё летят, уже за пределами солнечного ветра.")),
      E(1990, t("Hubble Space Telescope", "Հաբլ տիեզերական աստղադիտակ", "Космический телескоп «Хаббл»")),
      E(1998, t("International Space Station", "Միջազգային տիեզերական կայան", "Международная космическая станция"), undefined, { c: true }),
      E(2012, t("Curiosity on Mars", "Curiosity-ն Մարսի վրա", "Curiosity на Марсе")),
      E(2015, t("New Horizons at Pluto", "New Horizons-ը Պլուտոնի մոտ", "New Horizons у Плутона")),
      E(2021, t("Perseverance and James Webb", "Perseverance և Ջեյմս Ուեբ", "Perseverance и «Джеймс Уэбб»")),
      E(2024, t("Europa Clipper launched", "Արձակվեց Europa Clipper-ը", "Запущен Europa Clipper"), t("To study the ocean under the ice of Jupiter's moon Europa.", "Յուպիտերի Եվրոպա արբանյակի սառույցի տակ գտնվող օվկիանոսն ուսումնասիրելու համար։", "Для изучения океана подо льдом спутника Юпитера Европы.")),
    ],
  },
  byurakan: {
    title: t("Byurakan Observatory", "Բյուրականի աստղադիտարան", "Бюраканская обсерватория"),
    events: [
      E(1946, t("The observatory is founded", "Հիմնվում է աստղադիտարանը", "Основана обсерватория"), t("Viktor Ambartsumian founds it on the slopes of Mount Aragats.", "Վիկտոր Համբարձումյանը այն հիմնում է Արագածի լանջին։", "Виктор Амбарцумян основывает её на склоне Арагаца.")),
      E(1947, t("Stellar associations", "Աստղասփյուռներ", "Звёздные ассоциации"), t("Stars are still being born today, in groups.", "Աստղերը ծնվում են այսօր էլ՝ խմբերով։", "Звёзды рождаются и сегодня — группами.")),
      E(1958, t("Active galactic nuclei", "Գալակտիկաների ակտիվ միջուկներ", "Активные ядра галактик"), t("Ambartsumian's report at the Solvay conference.", "Համբարձումյանի զեկուցումը Սոլվեյի կոնֆերանսում։", "Доклад Амбарцумяна на Сольвеевском конгрессе.")),
      E(1964, t("First conference on extraterrestrial civilisations", "Արտերկրային քաղաքակրթությունների առաջին խորհրդաժողովը", "Первое совещание по внеземным цивилизациям"), t("Kardashev proposes his scale.", "Կարդաշևն առաջարկում է իր սանդղակը։", "Кардашёв предлагает свою шкалу.")),
      E(1965, t("First Byurakan Survey begins", "Սկսվում է Բյուրականի առաջին հետազոտությունը", "Начинается Первый Бюраканский обзор"), t("Markarian's search for ultraviolet galaxies, until 1980.", "Մարգարյանի ուլտրամանուշակագույն գալակտիկաների որոնումը՝ մինչև 1980 թվականը։", "Поиск Маркаряном ультрафиолетовых галактик, до 1980 года."), { to: 1980 }),
      E(1971, t("International CETI conference", "CETI միջազգային խորհրդաժողով", "Международная конференция CETI"), t("Soviet and American scientists, among them Sagan and Drake.", "Խորհրդային և ամերիկացի գիտնականներ, այդ թվում՝ Սագանը և Դրեյքը։", "Советские и американские учёные, среди них Саган и Дрейк.")),
      E(1976, t("The 2.6-metre telescope", "2,6 մետրանոց աստղադիտակը", "2,6-метровый телескоп"), t("The largest telescope in Armenia starts work.", "Սկսում է աշխատել Հայաստանի ամենամեծ աստղադիտակը։", "Начинает работу крупнейший телескоп Армении.")),
    ],
  },
};
