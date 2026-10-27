import { t } from "../labels";
import type { TimeEvent, TimeSet } from "./timelines";
import type { Tr } from "@/lib/art/spec";

const E = (y: number, l: Tr, n?: Tr, o: { to?: number; c?: boolean } = {}): TimeEvent => ({ y, l, n, ...o });

/** Timelines for church history, grades 7–11. Dates follow the base lessons; early dates are traditional or approximate. */
export const CH_TIMELINES: Record<string, TimeSet> = {
  /* ---------------- grade 7 ---------------- */
  conversion: {
    title: t("When countries adopted Christianity", "Երբ երկրներն ընդունեցին քրիստոնեությունը", "Когда страны приняли христианство"),
    events: [
      E(301, t("Armenia", "Հայաստան", "Армения"), t("The traditional date; some historians suggest 314. The first state to make Christianity its official religion.", "Ավանդական թվականը․ որոշ պատմաբաններ առաջարկում են 314-ը։ Առաջին պետությունը, որը քրիստոնեությունը դարձրեց պաշտոնական կրոն։", "Традиционная дата; некоторые историки предлагают 314 год. Первое государство, сделавшее христианство официальной религией.")),
      E(313, t("Edict of Milan", "Միլանի հրովարտակ", "Миланский эдикт"), t("Rome stops persecuting Christians, but does not yet make Christianity the state religion.", "Հռոմը դադարեցնում է քրիստոնյաների հալածանքը, բայց դեռ քրիստոնեությունը պետական կրոն չի դարձնում։", "Рим прекращает гонения на христиан, но ещё не делает христианство государственной религией.")),
      E(330, t("Aksum (Ethiopia)", "Աքսում (Եթովպիա)", "Аксум (Эфиопия)"), t("King Ezana's coins change the pagan sun and moon for the cross.", "Եզանա թագավորի մետաղադրամների վրա հեթանոսական արևն ու լուսինը փոխարինվում են խաչով։", "На монетах царя Эзаны языческие солнце и луна сменяются крестом."), { c: true }),
      E(337, t("Georgia", "Վրաստան", "Грузия"), t("King Mirian III is baptised after the preaching of Saint Nino.", "Միրիան III թագավորը մկրտվում է Սուրբ Նունեի քարոզությունից հետո։", "Царь Мириан III крестится после проповеди святой Нины."), { c: true }),
      E(380, t("Roman Empire", "Հռոմեական կայսրություն", "Римская империя"), t("Emperor Theodosius I makes Christianity the religion of the empire.", "Թեոդոսիոս I կայսրը քրիստոնեությունը դարձնում է կայսրության կրոն։", "Император Феодосий I делает христианство религией империи.")),
      E(496, t("The Franks", "Ֆրանկներ", "Франки"), t("King Clovis is baptised at Reims.", "Քլոդվիգ թագավորը մկրտվում է Ռեյմսում։", "Король Хлодвиг крестится в Реймсе."), { c: true }),
      E(966, t("Poland", "Լեհաստան", "Польша"), t("Prince Mieszko I is baptised.", "Մեշկո I իշխանը մկրտվում է։", "Князь Мешко I принимает крещение.")),
      E(988, t("Kievan Rus", "Կիևյան Ռուսիա", "Киевская Русь"), t("Prince Vladimir is baptised.", "Վլադիմիր իշխանը մկրտվում է։", "Князь Владимир принимает крещение.")),
      E(1000, t("Iceland", "Իսլանդիա", "Исландия"), t("The island's assembly, the Althing, decides to accept Christianity.", "Կղզու ժողովը՝ Ալթինգը, որոշում է ընդունել քրիստոնեությունը։", "Собрание острова, альтинг, решает принять христианство.")),
      E(1387, t("Lithuania", "Լիտվա", "Литва"), t("The last country in Europe to adopt Christianity.", "Եվրոպայում վերջին երկիրը, որ ընդունեց քրիստոնեությունը։", "Последняя страна Европы, принявшая христианство.")),
    ],
  },
  /* ---------------- grade 8 ---------------- */
  councils: {
    title: t("Councils that shaped the Armenian Church", "Ժողովներ, որոնք ձևավորեցին Հայ Եկեղեցին", "Соборы, определившие облик Армянской церкви"),
    events: [
      E(325, t("Nicaea", "Նիկիա", "Никея"), t("The Creed; Aristakes, the son of Gregory, takes part.", "Հավատո հանգանակը․ մասնակցում է Գրիգորի որդի Արիստակեսը։", "Символ веры; участвует сын Григория Аристакес.")),
      E(381, t("Constantinople", "Կոստանդնուպոլիս", "Константинополь"), t("The divinity of the Holy Spirit; the Creed is expanded.", "Սուրբ Հոգու աստվածությունը․ Հավատո հանգանակը լրացվում է։", "Божество Святого Духа; Символ веры дополнен.")),
      E(431, t("Ephesus", "Եփեսոս", "Эфес"), t("Christ is one person; Mary is the Mother of God.", "Քրիստոս մեկ անձ է․ Մարիամն Աստվածածին է։", "Христос — одна личность; Мария — Богородица.")),
      E(451, t("Chalcedon", "Քաղկեդոն", "Халкидон"), t("The formula of two natures. The Armenians, fighting at Avarayr that year, did not take part.", "Երկու բնության բանաձևը։ Հայերը, որոնք այդ տարի կռվում էին Ավարայրում, չմասնակցեցին։", "Формула двух природ. Армяне, сражавшиеся в тот год при Аварайре, не участвовали.")),
      E(506, t("First Council of Dvin", "Դվինի առաջին ժողով", "Первый Двинский собор"), t("Chalcedon is rejected, together with the Georgian and Albanian churches.", "Քաղկեդոնը մերժվում է՝ վրացական և աղվանական եկեղեցիների հետ միասին։", "Халкидон отвергнут вместе с грузинской и албанской церквями.")),
      E(552, t("The Armenian era begins", "Սկսվում է հայոց թվականը", "Начало армянского летосчисления")),
      E(554, t("Second Council of Dvin", "Դվինի երկրորդ ժողով", "Второй Двинский собор"), t("The rejection is confirmed and the calendar set in order.", "Մերժումը հաստատվում է, և տոմարը կարգավորվում է։", "Отказ подтверждён, календарь упорядочен.")),
    ],
  },
  seats: {
    title: t("Where the catholicos lived", "Որտեղ էր կաթողիկոսի աթոռը", "Где находился престол католикоса"),
    events: [
      E(301, t("Vagharshapat", "Վաղարշապատ", "Вагаршапат"), undefined, { to: 484 }),
      E(484, t("Dvin", "Դվին", "Двин"), t("The capital of the marzpans and later of the Arab governors.", "Մարզպանների, իսկ հետո արաբ ոստիկանների մայրաքաղաքը։", "Столица марзпанов, а позже арабских остиканов."), { to: 927 }),
      E(927, t("Aghtamar", "Աղթամար", "Ахтамар"), t("Under the protection of the Artsruni kings of Vaspurakan.", "Վասպուրականի Արծրունի թագավորների հովանու ներքո։", "Под защитой царей Васпуракана Арцруни."), { to: 947, c: true }),
      E(947, t("Argina, then Ani", "Արգինա, ապա Անի", "Аргина, затем Ани"), t("Close to the Bagratid capital.", "Բագրատունյաց մայրաքաղաքի մոտ։", "Рядом с багратидской столицей."), { to: 1065, c: true }),
      E(1065, t("Years of wandering", "Թափառման տարիներ", "Годы скитаний"), t("After the fall of Ani the catholicoi moved from place to place, towards Cilicia.", "Անիի անկումից հետո կաթողիկոսները տեղից տեղ էին տեղափոխվում՝ դեպի Կիլիկիա։", "После падения Ани католикосы переходили с места на место, ближе к Киликии."), { to: 1151, c: true }),
      E(1151, t("Hromkla", "Հռոմկլա", "Ромкла"), undefined, { to: 1292 }),
      E(1293, t("Sis", "Սիս", "Сис"), undefined, { to: 1441 }),
      E(1441, t("Etchmiadzin again", "Կրկին Էջմիածին", "Снова Эчмиадзин"), t("The Council of Vagharshapat brings the see home.", "Վաղարշապատի ժողովն աթոռը վերադարձնում է հայրենիք։", "Собор в Вагаршапате возвращает престол на родину."), { to: 2026 }),
    ],
  },
  /* ---------------- grade 10 ---------------- */
  russianchurch: {
    title: t("The Church in the Russian Empire", "Եկեղեցին Ռուսական կայսրությունում", "Церковь в Российской империи"),
    events: [
      E(1824, t("Nersisian School in Tiflis", "Ներսիսյան դպրոցը Թիֆլիսում", "Нерсисянская школа в Тифлисе")),
      E(1828, t("Treaty of Turkmenchay: Etchmiadzin in Russia", "Թուրքմենչայի պայմանագիր՝ Էջմիածինը Ռուսաստանում", "Туркманчайский договор: Эчмиадзин в России")),
      E(1836, t("The Polozhenie", "Պոլոժենիե", "Положение"), t("The tsar approves the statute on the Armenian Church.", "Ցարը հաստատում է Հայ Եկեղեցու կանոնադրությունը։", "Царь утверждает устав Армянской церкви.")),
      E(1843, t("Nerses V Ashtaraketsi becomes catholicos", "Ներսես Ե Աշտարակեցին դառնում է կաթողիկոս", "Нерсес V Аштаракеци становится католикосом")),
      E(1874, t("Gevorkian Seminary at Etchmiadzin", "Գևորգյան ճեմարանը Էջմիածնում", "Геворкянская семинария в Эчмиадзине")),
      E(1892, t("Khrimian Hayrik elected catholicos", "Խրիմյան Հայրիկն ընտրվում է կաթողիկոս", "Хримян Айрик избран католикосом")),
      E(1903, t("Law confiscating church property", "Եկեղեցական գույքի բռնագրավման օրենքը", "Закон о конфискации церковного имущества"), t("The whole people protests; in 1905 the property is returned.", "Ամբողջ ժողովուրդը բողոքում է․ 1905 թվականին գույքը վերադարձվում է։", "Весь народ протестует; в 1905 году имущество возвращают.")),
    ],
  },
  martyrs: {
    title: t("The Church through the Genocide", "Եկեղեցին Ցեղասպանության միջով", "Церковь в годы Геноцида и после"),
    events: [
      E(1915, t("24 April: clergy and intellectuals arrested", "Ապրիլի 24՝ ձերբակալվում են հոգևորականներ և մտավորականներ", "24 апреля: арест духовенства и интеллигенции"), t("Among them Komitas and Grigoris Balakian.", "Նրանց թվում՝ Կոմիտասը և Գրիգորիս Բալաքյանը։", "Среди них Комитас и Григорис Балакян.")),
      E(1921, t("Armenians leave Cilicia; the Catholicos of Sis wanders", "Հայերը լքում են Կիլիկիան․ Սսի կաթողիկոսը թափառում է", "Армяне покидают Киликию; католикос Сиса скитается")),
      E(1922, t("Balakian's \"Armenian Golgotha\" published", "Լույս է տեսնում Բալաքյանի «Հայ Գողգոթան»", "Выходит «Армянская Голгофа» Балакяна")),
      E(1930, t("The Catholicosate of Cilicia settles in Antelias", "Կիլիկիո կաթողիկոսությունը հաստատվում է Անթիլիասում", "Киликийский католикосат обосновывается в Антилиасе")),
      E(1965, t("50th anniversary: first public remembrance in Yerevan", "50-ամյակ՝ առաջին հանրային հիշատակումը Երևանում", "50-летие: первое публичное поминовение в Ереване")),
      E(2015, t("23 April: the victims are canonised", "Ապրիլի 23՝ զոհերը սրբադասվում են", "23 апреля: жертвы причислены к лику святых")),
    ],
  },
  sovietchurch: {
    title: t("The Church in Soviet times", "Եկեղեցին խորհրդային տարիներին", "Церковь в советское время"),
    events: [
      E(1920, t("Soviet rule; churches begin to close", "Խորհրդային իշխանություն․ եկեղեցիները սկսում են փակվել", "Советская власть; начинают закрывать церкви")),
      E(1932, t("Khoren I elected catholicos", "Խորեն Ա-ն ընտրվում է կաթողիկոս", "Избран католикос Хорен I")),
      E(1938, t("Khoren I killed at Etchmiadzin", "Խորեն Ա-ն սպանվում է Էջմիածնում", "Хорен I убит в Эчмиадзине")),
      E(1943, t("\"David of Sasun\" tank column", "«Սասունցի Դավիթ» տանկային շարասյունը", "Танковая колонна «Давид Сасунский»"), t("Paid for with money raised by the Church and the diaspora.", "Ֆինանսավորվեց Եկեղեցու և սփյուռքի հավաքած միջոցներով։", "Оплачена деньгами, собранными Церковью и диаспорой.")),
      E(1945, t("Gevorg VI elected; the seminary reopens", "Ընտրվում է Գևորգ Զ-ն․ ճեմարանը վերաբացվում է", "Избран Геворг VI; семинария открывается вновь")),
      E(1955, t("Vazgen I elected", "Ընտրվում է Վազգեն Ա-ն", "Избран Вазген I"), t("He leads the Church until 1994.", "Նա ղեկավարում է Եկեղեցին մինչև 1994 թվականը։", "Он возглавляет Церковь до 1994 года.")),
      E(1988, t("Spitak earthquake: the Church organises aid", "Սպիտակի երկրաշարժ․ Եկեղեցին կազմակերպում է օգնություն", "Спитакское землетрясение: Церковь организует помощь")),
    ],
  },
  church1991: {
    title: t("The Church since independence", "Եկեղեցին անկախությունից ի վեր", "Церковь после независимости"),
    events: [
      E(1991, t("Independence; churches reopen", "Անկախություն․ եկեղեցիները վերաբացվում են", "Независимость; церкви открываются вновь")),
      E(1995, t("Garegin I elected", "Ընտրվում է Գարեգին Ա-ն", "Избран Гарегин I")),
      E(1999, t("Garegin II elected", "Ընտրվում է Գարեգին Բ-ն", "Избран Гарегин II")),
      E(2000, t("Relics of St Gregory return from Naples", "Ս. Գրիգորի մասունքները վերադառնում են Նեապոլից", "Мощи св. Григория возвращаются из Неаполя")),
      E(2001, t("1,700 years; St Gregory Cathedral; John Paul II visits", "1700 տարի․ Ս. Գրիգոր տաճարը․ այցելում է Հովհաննես Պողոս II-ը", "1700 лет; собор Св. Григория; визит Иоанна Павла II")),
      E(2015, t("Canonisation of the Genocide victims", "Ցեղասպանության զոհերի սրբադասումը", "Канонизация жертв Геноцида")),
      E(2016, t("Pope Francis visits Armenia", "Ֆրանցիսկոս պապն այցելում է Հայաստան", "Папа Франциск посещает Армению")),
    ],
  },
};
