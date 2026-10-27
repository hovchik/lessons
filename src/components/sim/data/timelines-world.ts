import type { Tr } from "@/lib/art/spec";
import { t } from "../labels";
import type { TimeEvent, TimeSet } from "./timelines";

const E = (y: number, l: Tr, n?: Tr, o: { to?: number; c?: boolean } = {}): TimeEvent => ({ y, l, n, ...o });

/** Timelines for world history, grades 6–12. Dates follow the base lessons. */
export const WORLD_TIMELINES: Record<string, TimeSet> = {
  /* ---------------- grade 6 ---------------- */
  civs: {
    title: t("From farming to the first civilisations", "Երկրագործությունից մինչև առաջին քաղաքակրթությունները", "От земледелия к первым цивилизациям"),
    events: [
      E(-10000, t("Farming begins in the Middle East", "Մերձավոր Արևելքում սկսվում է երկրագործությունը", "На Ближнем Востоке начинается земледелие"), undefined, { c: true }),
      E(-9600, t("Göbekli Tepe is built", "Կառուցվում է Գյոբեկլի Թեփեն", "Строится Гёбекли-Тепе"), t("Stone circles raised by hunter-gatherers, older than any city.", "Որսորդ-հավաքիչների կանգնեցրած քարե շրջաններ, որոնք ավելի հին են, քան ցանկացած քաղաք։", "Каменные круги, поставленные охотниками-собирателями, старше любого города."), { c: true }),
      E(-3500, t("First cities of Sumer", "Շումերի առաջին քաղաքները", "Первые города Шумера"), undefined, { c: true }),
      E(-3200, t("Writing: cuneiform", "Գիր. սեպագիր", "Письменность: клинопись"), undefined, { c: true }),
      E(-3100, t("Egypt is united", "Եգիպտոսը միավորվում է", "Объединение Египта"), undefined, { c: true }),
      E(-2600, t("Cities of the Indus", "Ինդոսի քաղաքները", "Города Инда"), undefined, { to: -1900, c: true }),
      E(-1600, t("Early Chinese state on the Yellow River", "Վաղ չինական պետությունը Դեղին գետի ափին", "Раннее китайское государство на Хуанхэ"), undefined, { to: -1046, c: true }),
    ],
  },
  meso: {
    title: t("Mesopotamia", "Միջագետք", "Месопотамия"),
    events: [
      E(-3500, t("Sumerian city-states", "Շումերական քաղաք-պետություններ", "Шумерские города-государства"), undefined, { c: true }),
      E(-3200, t("Cuneiform", "Սեպագիր", "Клинопись"), undefined, { c: true }),
      E(-2100, t("Great Ziggurat of Ur", "Ուրի մեծ զիկկուրատը", "Великий зиккурат Ура"), undefined, { c: true }),
      E(-1754, t("Laws of Hammurabi", "Համմուրապիի օրենքները", "Законы Хаммурапи"), t("282 articles carved on a stone pillar.", "282 հոդված՝ փորագրված քարե սյան վրա։", "282 статьи, высеченные на каменном столбе."), { c: true }),
      E(-668, t("Ashurbanipal and his library", "Աշշուրբանիպալը և նրա գրադարանը", "Ашшурбанипал и его библиотека"), undefined, { to: -631 }),
      E(-612, t("Fall of Nineveh", "Նինվեի անկումը", "Падение Ниневии")),
      E(-605, t("Nebuchadnezzar II", "Նաբուգոդոնոսոր II", "Навуходоносор II"), undefined, { to: -562 }),
      E(-539, t("Cyrus takes Babylon", "Կյուրոսը գրավում է Բաբելոնը", "Кир берёт Вавилон")),
    ],
  },
  egypt: {
    title: t("Ancient Egypt", "Հին Եգիպտոս", "Древний Египет"),
    eras: [
      { from: -2686, to: -2181, l: t("Old Kingdom", "Հին թագավորություն", "Древнее царство") },
      { from: -2055, to: -1650, l: t("Middle Kingdom", "Միջին թագավորություն", "Среднее царство") },
      { from: -1550, to: -1070, l: t("New Kingdom", "Նոր թագավորություն", "Новое царство") },
    ],
    events: [
      E(-3100, t("Upper and Lower Egypt unite", "Վերին և Ստորին Եգիպտոսը միավորվում են", "Объединение Верхнего и Нижнего Египта"), undefined, { c: true }),
      E(-2560, t("Pyramid of Khufu", "Քեոփսի բուրգը", "Пирамида Хеопса"), undefined, { c: true }),
      E(-1479, t("Thutmose III", "Թութմոս III", "Тутмос III"), undefined, { to: -1425 }),
      E(-1332, t("Tutankhamun", "Թութանհամոն", "Тутанхамон"), undefined, { to: -1323 }),
      E(-1279, t("Ramesses II", "Ռամզես II", "Рамсес II"), undefined, { to: -1213 }),
      E(1799, t("Rosetta Stone found", "Գտնվում է Ռոզետայի քարը", "Найден Розеттский камень")),
      E(1822, t("Champollion reads hieroglyphs", "Շամպոլիոնը կարդում է հիերոգլիֆները", "Шампольон читает иероглифы")),
      E(1922, t("Tutankhamun's tomb found", "Գտնվում է Թութանհամոնի դամբարանը", "Найдена гробница Тутанхамона")),
    ],
  },
  indchina: {
    title: t("Ancient India and China", "Հին Հնդկաստան և Չինաստան", "Древняя Индия и Китай"),
    events: [
      E(-2600, t("Harappa and Mohenjo-daro", "Հարապպա և Մոհենջո-Դարո", "Хараппа и Мохенджо-Даро"), undefined, { to: -1900, c: true }),
      E(-551, t("Confucius", "Կոնֆուցիուս", "Конфуций"), undefined, { to: -479 }),
      E(-500, t("The Buddha teaches", "Բուդդան քարոզում է", "Проповедь Будды"), undefined, { c: true }),
      E(-221, t("Qin Shi Huang unites China", "Ցին Շի Հուանդին միավորում է Չինաստանը", "Цинь Шихуанди объединяет Китай")),
      E(-138, t("Zhang Qian travels west", "Չժան Ցյանը ճամփորդում է դեպի արևմուտք", "Чжан Цянь отправляется на запад"), t("His journey opened the way for the Silk Road.", "Նրա ճամփորդությունը ճանապարհ բացեց Մետաքսի ճանապարհի համար։", "Его путешествие открыло путь Великому шёлковому пути."), { c: true }),
      E(105, t("Cai Lun improves paper", "Ցայ Լունը կատարելագործում է թուղթը", "Цай Лунь совершенствует бумагу")),
      E(628, t("Brahmagupta's rules for zero", "Բրահմագուպտայի կանոնները զրոյի համար", "Правила Брахмагупты для нуля")),
      E(1974, t("Terracotta Army discovered", "Հայտնաբերվում է Կավե բանակը", "Обнаружена Терракотовая армия")),
    ],
  },
  greece: {
    title: t("Ancient Greece", "Հին Հունաստան", "Древняя Греция"),
    events: [
      E(-776, t("First Olympic Games", "Առաջին Օլիմպիական խաղերը", "Первые Олимпийские игры")),
      E(-508, t("Democracy in Athens", "Ժողովրդավարություն Աթենքում", "Демократия в Афинах"), undefined, { c: true }),
      E(-490, t("Marathon", "Մարաթոն", "Марафон")),
      E(-480, t("Thermopylae and Salamis", "Թերմոպիլներ և Սալամին", "Фермопилы и Саламин")),
      E(-461, t("Age of Pericles", "Պերիկլեսի դարաշրջան", "Век Перикла"), undefined, { to: -429 }),
      E(-431, t("Peloponnesian War", "Պելոպոնեսյան պատերազմ", "Пелопоннесская война"), undefined, { to: -404 }),
      E(-336, t("Alexander the Great", "Ալեքսանդր Մակեդոնացի", "Александр Македонский"), undefined, { to: -323 }),
      E(1896, t("Modern Olympic Games in Athens", "Ժամանակակից Օլիմպիական խաղերն Աթենքում", "Современные Олимпийские игры в Афинах")),
    ],
  },
  rome: {
    title: t("Ancient Rome", "Հին Հռոմ", "Древний Рим"),
    eras: [
      { from: -753, to: -509, l: t("Kingdom", "Թագավորություն", "Царство") },
      { from: -509, to: -27, l: t("Republic", "Հանրապետություն", "Республика") },
      { from: -27, to: 476, l: t("Empire", "Կայսրություն", "Империя") },
    ],
    events: [
      E(-753, t("Founding of Rome (legend)", "Հռոմի հիմնադրումը (ավանդություն)", "Основание Рима (легенда)")),
      E(-509, t("The Republic", "Հանրապետություն", "Республика")),
      E(-264, t("Punic Wars", "Պունիկյան պատերազմներ", "Пунические войны"), undefined, { to: -146 }),
      E(-218, t("Hannibal crosses the Alps", "Հաննիբալն անցնում է Ալպերը", "Ганнибал переходит Альпы")),
      E(-44, t("Caesar is killed", "Կեսարի սպանությունը", "Убийство Цезаря")),
      E(-27, t("Augustus, the first emperor", "Օգոստոս՝ առաջին կայսրը", "Август — первый император")),
      E(79, t("Vesuvius buries Pompeii", "Վեզուվը թաղում է Պոմպեյը", "Везувий погребает Помпеи")),
      E(313, t("Christianity allowed", "Քրիստոնեությունը թույլատրվում է", "Христианство разрешено")),
      E(395, t("The empire splits", "Կայսրությունը բաժանվում է", "Раздел империи")),
      E(476, t("Fall of the Western empire", "Արևմտյան կայսրության անկումը", "Падение Западной империи")),
    ],
  },
  thinkers: {
    title: t("Thinkers and scientists of antiquity", "Հին աշխարհի մտածողներ և գիտնականներ", "Мыслители и учёные древности"),
    events: [
      E(-750, t("Homer", "Հոմերոս", "Гомер"), undefined, { c: true }),
      E(-570, t("Pythagoras", "Պյութագորաս", "Пифагор"), undefined, { to: -495, c: true }),
      E(-470, t("Socrates", "Սոկրատես", "Сократ"), undefined, { to: -399 }),
      E(-428, t("Plato", "Պլատոն", "Платон"), undefined, { to: -348, c: true }),
      E(-384, t("Aristotle", "Արիստոտել", "Аристотель"), undefined, { to: -322 }),
      E(-300, t("Euclid's Elements", "Էվկլիդեսի «Տարրեր»", "«Начала» Евклида"), undefined, { c: true }),
      E(-287, t("Archimedes", "Արքիմեդես", "Архимед"), undefined, { to: -212 }),
      E(-240, t("Eratosthenes measures the Earth", "Էրատոսթենեսը չափում է Երկիրը", "Эратосфен измеряет Землю"), undefined, { c: true }),
      E(-150, t("The Antikythera mechanism", "Անտիկիթերայի մեխանիզմը", "Антикитерский механизм"), undefined, { c: true }),
    ],
  },
};
