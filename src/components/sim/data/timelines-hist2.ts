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
};
