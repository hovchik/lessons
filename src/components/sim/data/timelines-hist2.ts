import type { Tr } from "@/lib/art/spec";
import { t } from "../labels";
import type { TimeEvent, TimeSet } from "./timelines";

const E = (y: number, l: Tr, n?: Tr, o: { to?: number; c?: boolean } = {}): TimeEvent => ({ y, l, n, ...o });

/** Timelines for the Armenian history lessons added in the "more lessons" batch. Dates follow the lessons. */
export const HIST2_TIMELINES: Record<string, TimeSet> = {
  /* ---------------- grade 6 ---------------- */
  hellenism: {
    title: t("Armenia in the Hellenistic age", "Հայաստանը հելլենիստական դարաշրջանում", "Армения в эпоху эллинизма"),
    events: [
      E(-331, t("Battle of Gaugamela", "Գավգամելայի ճակատամարտը", "Битва при Гавгамелах"), t("Armenian troops fought in the Persian army.", "Հայկական զորաբանակը կռվում էր պարսկական բանակում։", "Армянский отряд сражался в персидском войске.")),
      E(-323, t("Death of Alexander; the Seleucids", "Ալեքսանդրի մահը. Սելևկյանները", "Смерть Александра; Селевкиды")),
      E(-200, t("Antiochus III conquers Greater Armenia", "Անտիոքոս III-ը նվաճում է Մեծ Հայքը", "Антиох III завоёвывает Великую Армению"), t("Yervand IV, the last Yervanduni, was killed.", "Զոհվեց վերջին Երվանդունին՝ Երվանդ IV-ը։", "Погиб последний Ервандуни, Ерванд IV."), { c: true }),
      E(-190, t("Battle of Magnesia", "Մագնեսիայի ճակատամարտը", "Битва при Магнесии"), t("Rome crushed Antiochus III.", "Հռոմը ջախջախեց Անտիոքոս III-ին։", "Рим разгромил Антиоха III.")),
      E(-188, t("Treaty of Apamea: Artashes and Zareh are kings", "Ապամեայի պայմանագիրը. Արտաշեսը և Զարեհը թագավորներ են", "Апамейский мир: Арташес и Зарех — цари")),
      E(-70, t("Antiochus I of Commagene builds Nemrut", "Կոմմագենեի Անտիոքոս I-ը կառուցում է Նեմրութը", "Антиох I Коммагенский строит Немрут"), t("He reigned until 38 BC.", "Նա թագավորեց մինչև մ.թ.ա. 38 թվականը։", "Он правил до 38 г. до н. э."), { to: -38 }),
    ],
  },
  romeparthia: {
    title: t("Between Rome and Parthia", "Հռոմի և Պարթևստանի միջև", "Между Римом и Парфией"),
    events: [
      E(-34, t("Artavazd II is seized by Mark Antony", "Մարկոս Անտոնիոսը գերում է Արտավազդ II-ին", "Марк Антоний захватывает Артавазда II")),
      E(-20, t("Augustus puts Tigran III on the throne", "Օգոստոսը գահին է նստեցնում Տիգրան III-ին", "Август сажает на престол Тиграна III")),
      E(18, t("Artashes III (Zeno) is crowned in Artashat", "Արտաշատում թագադրվում է Արտաշես III-ը (Զենոն)", "В Арташате коронован Арташес III (Зенон)"), undefined, { to: 34 }),
      E(51, t("Radamist seizes the throne", "Հռադամիզդը զավթում է գահը", "Радамист захватывает престол")),
      E(58, t("Corbulo burns Artashat", "Կորբուլոնն այրում է Արտաշատը", "Корбулон сжигает Арташат")),
      E(62, t("Paetus surrenders at Rhandeia", "Պետոսը անձնատուր է լինում Հռանդեայի մոտ", "Пет сдаётся у Рандеи")),
      E(63, t("Treaty of Rhandeia", "Հռանդեայի պայմանագիրը", "Рандейский договор"), t("An Arshakid king, crowned by the Roman emperor.", "Արշակունի թագավոր՝ Հռոմի կայսեր ձեռքով թագադրված։", "Царь из Аршакидов, коронованный римским императором.")),
      E(66, t("Trdat I is crowned in Rome", "Տրդատ I-ը թագադրվում է Հռոմում", "Трдат I коронован в Риме")),
    ],
  },
  trdat3: {
    title: t("The conversion of Armenia", "Հայաստանի քրիստոնեացումը", "Крещение Армении"),
    events: [
      E(224, t("The Sasanians take power in Persia", "Սասանյանները իշխանության են գալիս Պարսկաստանում", "Сасаниды приходят к власти в Персии")),
      E(298, t("Peace of Nisibis secures Trdat III", "Մծբինի հաշտությունն ամրապնդում է Տրդատ III-ին", "Нисибисский мир укрепляет Трдата III")),
      E(301, t("Christianity becomes the state religion", "Քրիստոնեությունը դառնում է պետական կրոն", "Христианство становится государственной религией"), t("The traditional date; some scholars suggest about 314.", "Ավանդական թվականն է. որոշ գիտնականներ առաջարկում են մոտ 314-ը։", "Традиционная дата; некоторые учёные предлагают около 314 года.")),
      E(313, t("Christianity permitted in the Roman Empire", "Քրիստոնեությունը թույլատրվում է Հռոմեական կայսրությունում", "Христианство разрешено в Римской империи")),
      E(325, t("Aristakes at the Council of Nicaea", "Արիստակեսը Նիկիայի ժողովում", "Аристакес на Никейском соборе")),
      E(380, t("Christianity becomes Rome's state religion", "Քրիստոնեությունը դառնում է Հռոմի պետական կրոն", "Христианство становится государственной религией Рима")),
      E(405, t("Mesrop Mashtots creates the alphabet", "Մեսրոպ Մաշտոցը ստեղծում է այբուբենը", "Месроп Маштоц создаёт алфавит")),
    ],
  },
  arshak2: {
    title: t("Arshak II and Pap", "Արշակ II-ը և Պապը", "Аршак II и Пап"),
    events: [
      E(350, t("Arshak II reigns", "Թագավորում է Արշակ II-ը", "Правит Аршак II"), undefined, { to: 368, c: true }),
      E(354, t("Council of Ashtishat under Nerses the Great", "Աշտիշատի ժողովը Ներսես Մեծի օրոք", "Аштишатский собор при Нерсесе Великом")),
      E(363, t("Rome's peace with Persia leaves Armenia alone", "Հռոմի հաշտությունը Պարսկաստանի հետ Հայաստանը թողնում է մենակ", "Мир Рима с Персией оставляет Армению одну")),
      E(371, t("Battle of Dzirav", "Ձիրավի ճակատամարտը", "Битва при Дзираве"), t("Mushegh Mamikonyan and Roman troops crushed the Persians.", "Մուշեղ Մամիկոնյանը հռոմեական զորքի հետ ջախջախեց պարսիկներին։", "Мушег Мамиконян с римскими войсками разгромил персов.")),
      E(374, t("Pap is murdered on the orders of Valens", "Պապը սպանվում է Վաղեսի հրամանով", "Пап убит по приказу Валента")),
      E(387, t("Rome and Persia divide Armenia", "Հռոմը և Պարսկաստանը բաժանում են Հայաստանը", "Рим и Персия делят Армению")),
    ],
  },
  /* ---------------- grade 7 ---------------- */
  byzpers: {
    title: t("Between Byzantium and Persia", "Բյուզանդիայի և Պարսկաստանի միջև", "Между Византией и Персией"),
    events: [
      E(536, t("Justinian divides his Armenian lands into four provinces", "Հուստինիանոսը իր հայկական հողերը բաժանում է չորս նահանգի", "Юстиниан делит свои армянские земли на четыре провинции")),
      E(552, t("Start of the Armenian era", "Հայոց թվականի սկիզբը", "Начало армянского летосчисления"), t("Adopted at the Second Council of Dvin in 554.", "Ընդունվեց 554 թվականին՝ Դվինի երկրորդ ժողովում։", "Принято на Втором Двинском соборе в 554 году.")),
      E(571, t("Revolt of Red Vardan", "Կարմիր Վարդանի ապստամբությունը", "Восстание Вардана Красного"), t("In 572 the rebels took Dvin.", "572-ին ապստամբները գրավեցին Դվինը։", "В 572 году восставшие взяли Двин.")),
      E(591, t("New partition: most of Armenia goes to Byzantium", "Նոր բաժանում. Հայաստանի մեծ մասն անցնում է Բյուզանդիային", "Новый раздел: большая часть Армении отходит к Византии")),
      E(640, t("The Arabs take Dvin", "Արաբները գրավում են Դվինը", "Арабы берут Двин")),
      E(643, t("Zvartnots is built", "Կառուցվում է Զվարթնոցը", "Строится Звартноц"), t("By Catholicos Nerses III the Builder.", "Կաթողիկոս Ներսես III Շինողի կողմից։", "Католикосом Нерсесом III Строителем."), { to: 652 }),
      E(652, t("Theodoros Rshtuni's treaty with Muawiya", "Թեոդորոս Ռշտունու պայմանագիրը Մուավիայի հետ", "Договор Теодороса Рштуни с Муавией")),
    ],
  },
  kingdoms1011: {
    title: t("Armenian kingdoms of the 10th–11th centuries", "10–11-րդ դարերի հայկական թագավորությունները", "Армянские царства X–XI веков"),
    events: [
      E(885, t("Ashot I restores the kingdom", "Աշոտ I-ը վերականգնում է թագավորությունը", "Ашот I восстанавливает царство")),
      E(908, t("Gagik Artsruni, king of Vaspurakan", "Գագիկ Արծրունին՝ Վասպուրականի թագավոր", "Гагик Арцруни — царь Васпуракана"), undefined, { to: 1021 }),
      E(915, t("Church of the Holy Cross on Aghtamar", "Աղթամարի Սուրբ Խաչ եկեղեցին", "Церковь Святого Креста на Ахтамаре"), t("Built in 915–921 by the architect Manuel.", "Կառուցվել է 915–921 թվականներին, ճարտարապետ՝ Մանուել։", "Построена в 915–921 годах зодчим Мануэлом."), { c: true }),
      E(963, t("Kingdom of Kars", "Կարսի թագավորությունը", "Карсское царство"), undefined, { to: 1065 }),
      E(987, t("Kingdom of Syunik", "Սյունիքի թագավորությունը", "Сюникское царство"), t("It held out until 1170.", "Այն դիմադրեց մինչև 1170 թվականը։", "Оно держалось до 1170 года."), { to: 1170 }),
      E(1021, t("Vaspurakan is given up to Byzantium", "Վասպուրականը զիջվում է Բյուզանդիային", "Васпуракан уступлен Византии")),
    ],
  },
  manzikert: {
    title: t("From the will to Manzikert", "Կտակից մինչև Մանազկերտ", "От завещания до Манцикерта"),
    events: [
      E(1022, t("Hovhannes-Smbat wills Ani to Byzantium", "Հովհաննես-Սմբատը Անին կտակում է Բյուզանդիային", "Ованнес-Смбат завещает Ани Византии")),
      E(1042, t("Gagik II is crowned", "Թագադրվում է Գագիկ II-ը", "Коронован Гагик II")),
      E(1045, t("Ani is joined to Byzantium", "Անին միացվում է Բյուզանդիային", "Ани присоединён к Византии")),
      E(1049, t("The Seljuks destroy Artsn", "Սելջուկները ավերում են Արծնը", "Сельджуки разрушают Арцн")),
      E(1064, t("Alp Arslan takes Ani", "Ալփ Արսլանը գրավում է Անին", "Алп-Арслан берёт Ани"), t("After a 25-day siege.", "25 օր պաշարումից հետո։", "После 25-дневной осады.")),
      E(1071, t("Battle of Manzikert, 26 August", "Մանազկերտի ճակատամարտը, օգոստոսի 26", "Битва при Манцикерте, 26 августа"), t("Emperor Romanos IV Diogenes was taken prisoner.", "Ռոմանոս IV Դիոգենես կայսրը գերի ընկավ։", "Император Роман IV Диоген попал в плен.")),
      E(1080, t("Ruben's principality in Cilicia", "Ռուբենի իշխանությունը Կիլիկիայում", "Княжество Рубена в Киликии")),
    ],
  },
  mongols7: {
    title: t("The Mongols and Timur", "Մոնղոլները և Լենկթեմուրը", "Монголы и Тимур"),
    events: [
      E(1220, t("First Mongol raids on the South Caucasus", "Մոնղոլների առաջին ասպատակությունները Այսրկովկասում", "Первые набеги монголов на Закавказье")),
      E(1236, t("The Mongols take Ani and Kars", "Մոնղոլները գրավում են Անին և Կարսը", "Монголы берут Ани и Карс")),
      E(1254, t("Census and new taxes; Hethum I in Karakorum", "Մարդահամար և նոր հարկեր. Հեթում I-ը Կարակորումում", "Перепись и новые налоги; Хетум I в Каракоруме")),
      E(1256, t("The Ilkhanate is created", "Ստեղծվում է Իլխանների պետությունը", "Создано государство Ильханов"), undefined, { to: 1335 }),
      E(1295, t("Ghazan Khan adopts Islam", "Ղազան խանն ընդունում է իսլամ", "Газан-хан принимает ислам")),
      E(1299, t("Stepanos Orbelian's History of Syunik", "Ստեփանոս Օրբելյանի «Սյունիքի պատմությունը»", "«История Сюника» Степаноса Орбеляна")),
      E(1386, t("Timur's invasions", "Լենկթեմուրի արշավանքները", "Нашествия Тимура"), undefined, { to: 1403 }),
    ],
  },
  /* ---------------- grade 8 ---------------- */
  meet1547: {
    title: t("The first liberation plans", "Ազատագրական առաջին ծրագրերը", "Первые освободительные планы"),
    events: [
      E(1529, t("The Ottoman army besieges Vienna", "Օսմանյան բանակը պաշարում է Վիեննան", "Османская армия осаждает Вену")),
      E(1547, t("Secret meeting at Etchmiadzin", "Էջմիածնի գաղտնի ժողովը", "Тайное собрание в Эчмиадзине"), t("Called by Catholicos Stepanos Salmastetsi.", "Հրավիրեց կաթողիկոս Ստեփանոս Սալմաստեցին։", "Созвал католикос Степанос Салмастеци.")),
      E(1562, t("Secret meeting in Sebastia", "Սեբաստիայի գաղտնի ժողովը", "Тайное собрание в Себастии"), t("Called by Catholicos Mikael Sebastatsi.", "Հրավիրեց կաթողիկոս Միքայել Սեբաստացին։", "Созвал католикос Микаэл Себастаци.")),
      E(1565, t("Abgar Tokhatetsi prints in Venice", "Աբգար Թոխաթեցին տպագրում է Վենետիկում", "Абгар Тохатеци печатает в Венеции")),
      E(1567, t("First Armenian press in Constantinople", "Առաջին հայկական տպարանը Կոստանդնուպոլսում", "Первая армянская типография в Константинополе")),
      E(1677, t("New meeting at Etchmiadzin", "Էջմիածնի նոր ժողովը", "Новое собрание в Эчмиадзине"), t("Called by Catholicos Hakob Jughayetsi; Israel Ori was in his delegation.", "Հրավիրեց կաթողիկոս Հակոբ Ջուղայեցին. Իսրայել Օրին նրա պատվիրակության անդամ էր։", "Созвал католикос Акоп Джугаеци; в его делегации был Исраэл Ори.")),
    ],
  },
  melikdoms: {
    title: t("The melikdoms of Artsakh", "Արցախի մելիքությունները", "Меликства Арцаха"),
    events: [
      E(1722, t("Revolt in Syunik; Davit Bek", "Ապստամբություն Սյունիքում. Դավիթ Բեկ", "Восстание в Сюнике; Давид Бек")),
      E(1752, t("Panah Khan builds the fortress of Shushi", "Փանահ խանը կառուցում է Շուշիի ամրոցը", "Панах-хан строит крепость Шуши"), t("With the help of Melik Shahnazar of Varanda; built in the 1750s.", "Վարանդայի մելիք Շահնազարի օգնությամբ, կառուցվել է 1750-ականներին։", "С помощью мелика Варанды Шахназара; построена в 1750-х годах."), { c: true }),
      E(1783, t("Argutyan's plan for an Armenian state", "Արղությանի ծրագիրը հայկական պետության մասին", "План Аргутинского об армянском государстве"), undefined, { c: true }),
      E(1787, t("Melik families move to Georgia", "Մելիքական ընտանիքները գաղթում են Վրաստան", "Меликские семьи переселяются в Грузию"), undefined, { c: true }),
      E(1805, t("The Karabakh khanate comes under Russia", "Ղարաբաղի խանությունն անցնում է Ռուսաստանի գերիշխանության տակ", "Карабахское ханство переходит под власть России")),
      E(1822, t("The Karabakh khanate is abolished", "Ղարաբաղի խանությունը վերացվում է", "Карабахское ханство упразднено")),
    ],
  },
  russarm: {
    title: t("Armenians in Russia", "Հայերը Ռուսաստանում", "Армяне в России"),
    events: [
      E(1660, t("The Diamond Throne is presented to the tsar", "Ադամանդե գահը նվիրվում է ցարին", "Алмазный трон преподнесён царю")),
      E(1667, t("New Julfa merchants' agreement with Russia", "Նոր Ջուղայի վաճառականների պայմանագիրը Ռուսաստանի հետ", "Договор новоджульфинских купцов с Россией"), t("Silk through Astrakhan and up the Volga.", "Մետաքսը՝ Աստրախանով և Վոլգայով։", "Шёлк через Астрахань и вверх по Волге.")),
      E(1724, t("Peter I's charter to the Armenians", "Պետրոս I-ի հրովարտակը հայերին", "Грамота Петра I армянам")),
      E(1773, t("Hovsep Argutyan heads the diocese", "Հովսեփ Արղությանը գլխավորում է թեմը", "Иосиф Аргутинский возглавляет епархию")),
      E(1779, t("New Nakhichevan is founded", "Հիմնվում է Նոր Նախիջևանը", "Основан Нор-Нахичеван")),
      E(1781, t("First Armenian press in Russia", "Առաջին հայկական տպարանը Ռուսաստանում", "Первая армянская типография в России")),
      E(1815, t("The Lazarev Institute in Moscow", "Լազարյան ճեմարանը Մոսկվայում", "Лазаревский институт в Москве")),
    ],
  },
  polis: {
    title: t("Armenians of Constantinople", "Կոստանդնուպոլսի հայերը", "Армяне Константинополя"),
    events: [
      E(1461, t("The Armenian Patriarchate of Constantinople", "Կոստանդնուպոլսի հայոց պատրիարքությունը", "Армянский патриархат Константинополя")),
      E(1567, t("Abgar Tokhatetsi's press", "Աբգար Թոխաթեցու տպարանը", "Типография Абгара Тохатеци")),
      E(1623, t("Avedis Zildjian's cymbals", "Ավետիս Զիլջյանի ծնծղաները", "Тарелки Аветиса Зилджяна"), t("The family business still works today.", "Ընտանեկան ձեռնարկությունը գործում է մինչև այսօր։", "Семейное дело работает до сих пор.")),
      E(1700, t("Mkhitar Sebastatsi begins his work", "Մխիթար Սեբաստացին սկսում է իր գործը", "Мхитар Себастаци начинает свою деятельность")),
      E(1715, t("Patriarch Hovhannes Kolot", "Հովհաննես Կոլոտ պատրիարքը", "Патриарх Ованнес Колот"), undefined, { to: 1741 }),
      E(1863, t("The Armenian National Constitution", "Ազգային սահմանադրությունը", "Национальная конституция")),
    ],
  },
  /* ---------------- grade 9 ---------------- */
  church1903: {
    title: t("Eastern Armenians, 1885–1906", "Արևելահայերը 1885–1906 թվականներին", "Восточные армяне в 1885–1906 годах"),
    events: [
      E(1885, t("Armenian parish schools are closed", "Փակվում են հայկական ծխական դպրոցները", "Закрыты армянские церковно-приходские школы"), t("They were closed again in 1896.", "Դրանք նորից փակվեցին 1896-ին։", "Их снова закрыли в 1896 году.")),
      E(1896, t("Golitsyn heads the civil administration of the Caucasus", "Գոլիցինը գլխավորում է Կովկասի քաղաքացիական կառավարումը", "Голицын возглавляет гражданское управление Кавказа"), undefined, { to: 1904 }),
      E(1903, t("Law confiscating Church property, 12 June", "Եկեղեցական գույքի բռնագրավման օրենքը, հունիսի 12", "Закон о конфискации церковного имущества, 12 июня"), t("Demonstrations followed in many towns.", "Դրան հաջորդեցին ցույցեր շատ քաղաքներում։", "За ним последовали демонстрации во многих городах.")),
      E(1905, t("Church property is returned, 1 August", "Եկեղեցական գույքը վերադարձվում է, օգոստոսի 1", "Церковное имущество возвращено, 1 августа"), t("Clashes in the South Caucasus lasted from February 1905 into 1906.", "Բախումները Այսրկովկասում տևեցին 1905-ի փետրվարից մինչև 1906 թվականը։", "Столкновения в Закавказье длились с февраля 1905 года по 1906 год.")),
    ],
  },
  may1918: {
    title: t("From the collapse of the front to independence", "Ճակատի փլուզումից մինչև անկախություն", "От развала фронта до независимости"),
    events: [
      E(1917, t("Armistice of Erzincan (December)", "Երզնկայի զինադադարը (դեկտեմբեր)", "Эрзинджанское перемирие (декабрь)")),
      E(1918, t("Brest-Litovsk (3 March), Kars falls (25 April), Alexandropol falls (15 May)", "Բրեստ-Լիտովսկ (մարտի 3), Կարսի անկումը (ապրիլի 25), Ալեքսանդրապոլի անկումը (մայիսի 15)", "Брест-Литовск (3 марта), падение Карса (25 апреля), падение Александрополя (15 мая)")),
      E(1918, t("Sardarapat, Bash-Aparan and Karakilisa; independence on 28 May", "Սարդարապատ, Բաշ-Ապարան և Ղարաքիլիսա. անկախություն՝ մայիսի 28-ին", "Сардарапат, Баш-Апаран и Каракилиса; независимость 28 мая"), t("Peace with Turkey was signed at Batum on 4 June.", "Հունիսի 4-ին Բաթումում հաշտություն կնքվեց Թուրքիայի հետ։", "4 июня в Батуме был заключён мир с Турцией.")),
      E(1968, t("The Sardarapat memorial opens", "Բացվում է Սարդարապատի հուշահամալիրը", "Открыт мемориал Сардарапат")),
    ],
  },
  war1920: {
    title: t("1920–1921", "1920–1921 թվականներ", "1920–1921 годы"),
    events: [
      E(1919, t("Paris Peace Conference", "Փարիզի խաղաղության վեհաժողովը", "Парижская мирная конференция")),
      E(1920, t("Sèvres (10 August), war, Treaty of Alexandropol and Sovietisation (2 December)", "Սևր (օգոստոսի 10), պատերազմ, Ալեքսանդրապոլի պայմանագիր և խորհրդայնացում (դեկտեմբերի 2)", "Севр (10 августа), война, Александропольский договор и советизация (2 декабря)"), t("Kars fell on 30 October and Alexandropol on 7 November.", "Կարսն ընկավ հոկտեմբերի 30-ին, Ալեքսանդրապոլը՝ նոյեմբերի 7-ին։", "Карс пал 30 октября, Александрополь — 7 ноября.")),
      E(1921, t("February uprising, Mountainous Armenia, treaties of Moscow and Kars", "Փետրվարյան ապստամբություն, Լեռնահայաստան, Մոսկվայի և Կարսի պայմանագրեր", "Февральское восстание, Горная Армения, Московский и Карсский договоры"), t("Thanks to Nzhdeh's struggle, Zangezur remained part of Armenia.", "Նժդեհի պայքարի շնորհիվ Զանգեզուրը մնաց Հայաստանի կազմում։", "Благодаря борьбе Нжде Зангезур остался в составе Армении.")),
    ],
  },
  thaw: {
    title: t("Soviet Armenia, 1953–1988", "Խորհրդային Հայաստանը 1953–1988 թվականներին", "Советская Армения в 1953–1988 годах"),
    events: [
      E(1953, t("Stalin dies; the Thaw begins", "Ստալինը մահանում է. սկսվում է ձնհալը", "Смерть Сталина; начинается оттепель")),
      E(1959, t("New Matenadaran building opens", "Բացվում է Մատենադարանի նոր շենքը", "Открыто новое здание Матенадарана")),
      E(1965, t("24 April: the 50th anniversary of the Genocide", "Ապրիլի 24. ցեղասպանության 50-րդ տարելիցը", "24 апреля: 50-летие Геноцида"), t("Tsitsernakaberd opened in 1967.", "Ծիծեռնակաբերդը բացվեց 1967-ին։", "Цицернакаберд открылся в 1967 году.")),
      E(1968, t("Erebuni-Yerevan 2750", "«Էրեբունի-Երևան» 2750", "«Эребуни-Ереван» 2750")),
      E(1976, t("The nuclear power plant at Metsamor", "Մեծամորի ատոմակայանը", "АЭС в Мецаморе")),
      E(1981, t("Arpa–Sevan tunnel and Yerevan Metro", "Արփա–Սևան թունելը և Երևանի մետրոն", "Тоннель Арпа — Севан и Ереванское метро")),
      E(1987, t("First environmental demonstrations", "Առաջին բնապահպանական ցույցերը", "Первые экологические демонстрации")),
    ],
  },
  artsakh9194: {
    title: t("The first Artsakh war", "Արցախյան առաջին պատերազմը", "Первая Арцахская война"),
    events: [
      E(1923, t("The Nagorno-Karabakh Autonomous Oblast is created", "Ստեղծվում է Լեռնային Ղարաբաղի ինքնավար մարզը", "Создана Нагорно-Карабахская автономная область")),
      E(1988, t("The Karabakh movement; Sumgait", "Ղարաբաղյան շարժումը. Սումգայիթ", "Карабахское движение; Сумгаит")),
      E(1991, t("The Nagorno-Karabakh Republic is proclaimed, 2 September", "Հռչակվում է Լեռնային Ղարաբաղի Հանրապետությունը, սեպտեմբերի 2", "Провозглашена Нагорно-Карабахская Республика, 2 сентября")),
      E(1992, t("Shushi is freed and the Lachin corridor opened (May)", "Ազատագրվում է Շուշին և բացվում է Լաչինի միջանցքը (մայիս)", "Освобождена Шуши и открыт Лачинский коридор (май)")),
      E(1994, t("Ceasefire from 12 May", "Զինադադար՝ մայիսի 12-ից", "Перемирие с 12 мая"), t("After the Bishkek Protocol.", "Բիշքեկի արձանագրությունից հետո։", "После Бишкекского протокола.")),
    ],
  },
  historians10: {
    title: t("Armenian historians, 5th–15th centuries", "Հայ պատմիչները V–XV դարերում", "Армянские историки V–XV веков"),
    events: [
      E(405, t("Mashtots creates the alphabet", "Մաշտոցը ստեղծում է այբուբենը", "Месроп Маштоц создаёт алфавит"), t("Koryun soon writes the Life of Mashtots.", "Շուտով Կորյունը գրում է «Վարք Մաշտոցի»-ն։", "Вскоре Корюн пишет «Житие Маштоца».")),
      E(460, t("Yeghishe: On Vardan and the Armenian War", "Եղիշե. «Վասն Վարդանայ և Հայոց պատերազմին»", "Егише: «О Вардане и войне армянской»"), t("Approximate date.", "Մոտավոր թվական։", "Приблизительная дата.")),
      E(500, t("Ghazar Parpetsi's History", "Ղազար Փարպեցու «Պատմություն»-ը", "«История» Газара Парпеци"), t("Written under the patronage of Vahan Mamikonyan; approximate date.", "Գրվել է Վահան Մամիկոնյանի հովանավորությամբ. մոտավոր թվական։", "Написана под покровительством Вагана Мамиконяна; дата приблизительная.")),
      E(661, t("Sebeos: the coming of the Arabs", "Սեբեոս. արաբների գալը", "Себеос: приход арабов"), t("Approximate date.", "Մոտավոր թվական։", "Приблизительная дата.")),
      E(924, t("Hovhannes Draskhanakerttsi ends his History", "Հովհաննես Դրասխանակերտցին ավարտում է իր «Պատմություն»-ը", "Ованес Драсханакертци завершает «Историю»")),
      E(1071, t("Aristakes Lastivertsi: the Seljuk raids", "Արիստակես Լաստիվերտցի. սելջուկյան արշավանքները", "Аристакес Ластивертци: набеги сельджуков")),
      E(1136, t("Matteos Urhayetsi's Chronicle ends", "Ավարտվում է Մատթեոս Ուռհայեցու «Ժամանակագրություն»-ը", "Заканчивается «Хронография» Матеоса Урхаеци")),
      E(1265, t("Kirakos Gandzaketsi: the Mongols", "Կիրակոս Գանձակեցի. մոնղոլները", "Киракос Гандзакеци: монголы"), t("Approximate date.", "Մոտավոր թվական։", "Приблизительная дата.")),
      E(1440, t("Tovma Metsopetsi: Timur and his successors", "Թովմա Մեծոփեցի. Լենկթեմուրը և նրա հաջորդները", "Товма Мецопеци: Тимур и его преемники"), t("Approximate date.", "Մոտավոր թվական։", "Приблизительная дата.")),
    ],
  },
  goshlaw: {
    title: t("Armenian law through the centuries", "Հայ իրավունքը դարերի ընթացքում", "Армянское право через века"),
    events: [
      E(1184, t("Mkhitar Gosh completes his Code of Law", "Մխիթար Գոշն ավարտում է «Դատաստանագիրք»-ը", "Мхитар Гош завершает «Судебник»"), t("Approximate date.", "Մոտավոր թվական։", "Приблизительная дата.")),
      E(1265, t("Smbat Sparapet's Code of Law in Cilicia", "Սմբատ Սպարապետի «Դատաստանագիրք»-ը Կիլիկիայում", "«Судебник» Смбата Спарапета в Киликии"), t("He also translated the Assizes of Antioch.", "Նա թարգմանեց նաև Անտիոքի ասիզները։", "Он также перевёл Антиохийские ассизы.")),
      E(1519, t("Lviv: the Polish king approves a Latin translation", "Լվով. Լեհաստանի թագավորը հաստատում է լատիներեն թարգմանությունը", "Львов: польский король утверждает латинский перевод")),
      E(1705, t("Vakhtang VI includes Gosh's laws in his collection", "Վախթանգ VI-ը Գոշի օրենքները ներառում է իր ժողովածուի մեջ", "Вахтанг VI включает законы Гоша в свой сборник"), t("Early 18th century; approximate date.", "XVIII դարի սկիզբ. մոտավոր թվական։", "Начало XVIII века; дата приблизительная.")),
      E(1765, t("The Armenian court of Astrakhan relies on Gosh", "Աստրախանի հայկական դատարանը հենվում է Գոշի վրա", "Армянский суд Астрахани опирается на Гоша"), t("18th century; approximate date.", "XVIII դար. մոտավոր թվական։", "XVIII век; дата приблизительная.")),
    ],
  },
  ciliciawest: {
    title: t("Cilicia between East and West", "Կիլիկիան Արևելքի և Արևմուտքի միջև", "Киликия между Востоком и Западом"),
    events: [
      E(1080, t("An Armenian principality arises in Cilicia", "Կիլիկիայում ստեղծվում է հայկական իշխանություն", "В Киликии возникает армянское княжество"), undefined, { to: 1198 }),
      E(1098, t("The First Crusade; Crusader states appear", "Առաջին խաչակրաց արշավանքը. ստեղծվում են խաչակիրների պետությունները", "Первый крестовый поход; возникают государства крестоносцев")),
      E(1198, t("Levon I is crowned in Tarsus, 6 January", "Լևոն I-ը թագադրվում է Տարսոնում, հունվարի 6", "Левон I коронован в Тарсе, 6 января")),
      E(1271, t("Marco Polo passes through Ayas", "Մարկո Պոլոն անցնում է Այասով", "Марко Поло проезжает через Аяс")),
      E(1291, t("The last Crusader strongholds fall", "Ընկնում են խաչակիրների վերջին ամրոցները", "Падают последние крепости крестоносцев"), t("Cilicia is left alone against the Mamluks.", "Կիլիկիան մենակ է մնում մամլուքների դեմ։", "Киликия остаётся одна против мамлюков.")),
      E(1342, t("The Lusignans come to the throne", "Գահ են բարձրանում Լուսինյանները", "На престол восходят Лузиньяны")),
      E(1375, t("The Mamluks take Sis", "Մամլուքները գրավում են Սիսը", "Мамлюки берут Сис"), t("Levon V died in Paris in 1393.", "Լևոն V-ը մահացավ Փարիզում 1393-ին։", "Левон V умер в Париже в 1393 году.")),
    ],
  },
};
