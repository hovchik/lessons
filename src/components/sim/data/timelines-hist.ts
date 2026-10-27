import type { Tr } from "@/lib/art/spec";
import { t } from "../labels";
import type { TimeEvent, TimeSet } from "./timelines";

const E = (y: number, l: Tr, n?: Tr, o: { to?: number; c?: boolean } = {}): TimeEvent => ({ y, l, n, ...o });

/** Timelines for Armenian history, grades 5–12. Dates follow the base lessons. */
export const HIST_TIMELINES: Record<string, TimeSet> = {
  /* ---------------- grade 5 ---------------- */
  armkey: {
    title: t("Key dates of Armenian history", "Հայոց պատմության կարևոր թվականներ", "Главные даты истории Армении"),
    events: [
      E(-782, t("Argishti I founds Erebuni", "Արգիշտի I-ը հիմնում է Էրեբունին", "Аргишти I основывает Эребуни"), t("In 2018 Yerevan celebrated its 2,800th birthday: 782 + 2018 = 2,800.", "2018 թվականին Երևանը նշեց իր 2800-ամյակը. 782 + 2018 = 2800։", "В 2018 году Ереван отметил 2800-летие: 782 + 2018 = 2800.")),
      E(-95, t("Reign of Tigran the Great", "Տիգրան Մեծի թագավորությունը", "Правление Тиграна Великого"), t("Armenia stretched from the Caspian Sea to the Mediterranean.", "Հայաստանը ձգվում էր Կասպից ծովից մինչև Միջերկրական ծով։", "Армения простиралась от Каспийского до Средиземного моря."), { to: -55 }),
      E(301, t("Christianity becomes the state religion", "Քրիստոնեությունը դառնում է պետական կրոն", "Христианство становится государственной религией"), t("Armenia was the first country in the world to do this.", "Հայաստանն աշխարհում առաջինն արեց դա։", "Армения сделала это первой в мире.")),
      E(405, t("Mesrop Mashtots creates the alphabet", "Մեսրոպ Մաշտոցը ստեղծում է այբուբենը", "Месроп Маштоц создаёт алфавит"), t("36 letters at first; today there are 38.", "Սկզբում՝ 36 տառ, այսօր՝ 38։", "Сначала 36 букв, сегодня 38.")),
      E(451, t("Battle of Avarayr", "Ավարայրի ճակատամարտը", "Аварайрская битва"), t("Vardan Mamikonyan and 1,036 companions fell, but the Armenians kept their faith.", "Վարդան Մամիկոնյանը և նրա 1036 ընկերները զոհվեցին, բայց հայերը պահպանեցին իրենց հավատը։", "Вардан Мамиконян и 1036 его соратников пали, но армяне сохранили веру.")),
      E(1918, t("Sardarapat and the First Republic", "Սարդարապատ և Առաջին հանրապետություն", "Сардарапат и Первая республика"), t("The republic was created on 28 May 1918.", "Հանրապետությունը ստեղծվեց 1918 թվականի մայիսի 28-ին։", "Республика была создана 28 мая 1918 года.")),
      E(1991, t("Independence referendum", "Անկախության հանրաքվե", "Референдум о независимости"), t("On 21 September 1991 the people voted for independence.", "1991 թվականի սեպտեմբերի 21-ին ժողովուրդը քվեարկեց անկախության օգտին։", "21 сентября 1991 года народ проголосовал за независимость.")),
    ],
  },
  tigran: {
    title: t("The reign of Tigran the Great", "Տիգրան Մեծի թագավորությունը", "Правление Тиграна Великого"),
    events: [
      E(-95, t("Tigran II becomes king", "Տիգրան II-ը դառնում է թագավոր", "Тигран II становится царём"), t("He reigned for 40 years, until 55 BC.", "Նա թագավորեց 40 տարի՝ մինչև մ.թ.ա. 55 թվականը։", "Он правил 40 лет, до 55 г. до н. э."), { to: -55 }),
      E(-94, t("Alliance with Mithridates VI of Pontus", "Դաշինք Պոնտոսի Միհրդատ VI-ի հետ", "Союз с Митридатом VI Понтийским")),
      E(-83, t("Tigran becomes king of Syria", "Տիգրանը դառնում է Ասորիքի թագավոր", "Тигран становится царём Сирии"), t("The Syrians themselves invited him.", "Նրան հրավիրեցին հենց ասորիները։", "Его пригласили сами сирийцы.")),
      E(-80, t("Tigranakert, the new capital", "Տիգրանակերտ՝ նոր մայրաքաղաքը", "Тигранакерт — новая столица"), t("It had palaces, gardens and a theatre.", "Այնտեղ կային պալատներ, այգիներ և թատրոն։", "Там были дворцы, сады и театр."), { c: true }),
      E(-69, t("Lucullus captures Tigranakert", "Լուկուլլոսը գրավում է Տիգրանակերտը", "Лукулл захватывает Тигранакерт")),
      E(-68, t("Armenian victory at Aratsani", "Հայերի հաղթանակը Արածանիի մոտ", "Победа армян у Арацани")),
      E(-66, t("Treaty of Artashat with Pompey", "Արտաշատի պայմանագիրը Պոմպեոսի հետ", "Арташатский договор с Помпеем"), t("Armenia lost its conquests but kept Greater Armenia and its independence.", "Հայաստանը կորցրեց նվաճումները, բայց պահպանեց Մեծ Հայքը և իր անկախությունը։", "Армения потеряла завоевания, но сохранила Великую Армению и независимость.")),
    ],
  },
  avarayr: {
    title: t("The struggle for the faith", "Պայքար հավատի համար", "Борьба за веру"),
    events: [
      E(428, t("End of the Arsacid kingdom", "Արշակունյաց թագավորության անկումը", "Конец царства Аршакидов"), t("Eastern Armenia became a marzpanate of Sasanian Persia.", "Արևելյան Հայաստանը դարձավ Սասանյան Պարսկաստանի մարզպանություն։", "Восточная Армения стала марзпанством Сасанидской Персии.")),
      E(449, t("Assembly of Artashat says no to Yazdegerd II", "Արտաշատի ժողովը մերժում է Հազկերտ II-ին", "Арташатский собор отвечает отказом Йездигерду II")),
      E(451, t("Battle of Avarayr, 26 May", "Ավարայրի ճակատամարտը, մայիսի 26", "Аварайрская битва, 26 мая"), t("Vardan Mamikonyan fell together with 1,036 companions.", "Վարդան Մամիկոնյանը զոհվեց իր 1036 ընկերների հետ։", "Вардан Мамиконян пал вместе с 1036 соратниками.")),
      E(484, t("Treaty of Nvarsak", "Նվարսակի պայմանագիրը", "Нварсакский договор"), t("After Vahan Mamikonyan's uprising Persia recognised the Armenians' religious freedom.", "Վահան Մամիկոնյանի ապստամբությունից հետո Պարսկաստանը ճանաչեց հայերի կրոնական ազատությունը։", "После восстания Вахана Мамиконяна Персия признала свободу вероисповедания армян.")),
    ],
  },
  republic: {
    title: t("From the Genocide to independence", "Ցեղասպանությունից մինչև անկախություն", "От Геноцида до независимости"),
    events: [
      E(1915, t("The Armenian Genocide", "Հայոց ցեղասպանությունը", "Геноцид армян"), t("About one and a half million Armenians were killed.", "Սպանվեց մոտ մեկուկես միլիոն հայ։", "Было убито около полутора миллионов армян.")),
      E(1918, t("Battles of Sardarapat, Bash-Aparan, Karakilisa; First Republic on 28 May", "Սարդարապատի, Բաշ-Ապարանի, Ղարաքիլիսայի ճակատամարտերը. Առաջին հանրապետությունը՝ մայիսի 28-ին", "Битвы при Сардарапате, Баш-Апаране, Каракилисе; Первая республика 28 мая"), t("Church bells called soldiers, peasants and refugees to battle.", "Եկեղեցիների զանգերը զինվորներին, գյուղացիներին և գաղթականներին կանչում էին մարտի։", "Церковные колокола созывали на бой солдат, крестьян и беженцев.")),
      E(1920, t("Armenia becomes Soviet (December)", "Հայաստանը դառնում է խորհրդային (դեկտեմբեր)", "Армения становится советской (декабрь)")),
      E(1968, t("Sardarapat memorial opens", "Բացվում է Սարդարապատի հուշահամալիրը", "Открыт мемориал Сардарапат")),
      E(1988, t("The Karabakh movement begins", "Սկսվում է Ղարաբաղյան շարժումը", "Начинается Карабахское движение")),
      E(1991, t("Referendum on 21 September: independence", "Սեպտեմբերի 21-ի հանրաքվեն՝ անկախություն", "Референдум 21 сентября: независимость")),
    ],
  },
  /* ---------------- grade 6 ---------------- */
  stoneage: {
    title: t("The Stone Age in the Armenian Highland", "Քարի դարը Հայկական լեռնաշխարհում", "Каменный век на Армянском нагорье"),
    eras: [
      { from: -10000, to: -8000, l: t("Mesolithic", "Միջին քարի դար", "Мезолит") },
      { from: -8000, to: -6000, l: t("Neolithic", "Նոր քարի դար", "Неолит") },
      { from: -6000, to: -3000, l: t("Copper Stone Age", "Պղնձաքարի դար", "Энеолит") },
    ],
    events: [
      E(-10000, t("Bow and arrows, fishing", "Աղեղ և նետեր, ձկնորսություն", "Лук и стрелы, рыболовство"), t("The Middle Stone Age begins after the Old Stone Age of hunters and gatherers.", "Միջին քարի դարը սկսվում է որսորդների և հավաքողների Հին քարի դարից հետո։", "Средний каменный век начинается после древнего каменного века охотников и собирателей."), { c: true }),
      E(-8000, t("Farming and herding: the Neolithic Revolution", "Երկրագործություն և անասնապահություն՝ նեոլիթյան հեղափոխություն", "Земледелие и скотоводство: неолитическая революция"), t("People grew wheat and barley, tamed animals and settled in villages.", "Մարդիկ աճեցնում էին ցորեն և գարի, ընտելացնում էին կենդանիներ և հաստատվում գյուղերում։", "Люди выращивали пшеницу и ячмень, приручали животных и селились в деревнях."), { c: true }),
      E(-6000, t("The first copper objects", "Պղնձե առաջին իրերը", "Первые медные предметы"), undefined, { c: true }),
      E(-4000, t("Winemaking in the Areni-1 cave", "Գինեգործություն Արենի-1 քարանձավում", "Виноделие в пещере Арени-1"), t("One of the oldest known places of winemaking, about 6,000 years old.", "Գինեգործության հայտնի ամենահին վայրերից մեկը՝ մոտ 6000 տարեկան։", "Одно из древнейших известных мест виноделия, ему около 6000 лет."), { c: true }),
      E(-3500, t("The Areni-1 leather shoe", "Արենի-1-ի կաշվե կոշիկը", "Кожаная туфля из Арени-1"), t("The oldest known leather shoe in the world, about 5,500 years old.", "Աշխարհի հայտնի ամենահին կաշվե կոշիկը՝ մոտ 5500 տարեկան։", "Древнейшая известная кожаная обувь в мире, ей около 5500 лет."), { c: true }),
    ],
  },
  bronze: {
    title: t("From the Bronze Age to the Kingdom of Van", "Բրոնզի դարից մինչև Վանի թագավորություն", "От бронзового века до Ванского царства"),
    events: [
      E(-3500, t("Shengavit settlement (Yerevan)", "Շենգավիթի բնակավայրը (Երևան)", "Поселение Шенгавит (Ереван)"), t("Round houses, a wall and granaries, 4th–3rd millennia BC.", "Կլոր տներ, պարիսպ և ամբարներ, մ.թ.ա. 4–3-րդ հազարամյակներ։", "Круглые дома, стена и зернохранилища, IV–III тысячелетия до н. э."), { to: -2500, c: true }),
      E(-1500, t("Hayasa in Hittite inscriptions", "Հայասան խեթական արձանագրություններում", "Хайаса в хеттских надписях"), t("15th–13th centuries BC, near the upper Euphrates.", "Մ.թ.ա. 15–13-րդ դարեր, Եփրատի վերին հոսանքի մոտ։", "XV–XIII века до н. э., у верховьев Евфрата."), { to: -1200 }),
      E(-1200, t("Nairi in Assyrian inscriptions", "Նաիրին ասորեստանյան արձանագրություններում", "Наири в ассирийских надписях"), t("A union of several dozen principalities against Assyria, 12th–9th centuries BC.", "Մի քանի տասնյակ իշխանությունների միություն Ասորեստանի դեմ, մ.թ.ա. 12–9-րդ դարեր։", "Союз нескольких десятков княжеств против Ассирии, XII–IX века до н. э."), { to: -850 }),
      E(-850, t("The Kingdom of Van is formed", "Կազմավորվում է Վանի թագավորությունը", "Образуется Ванское царство"), t("The lands of Nairi united into one state in the middle of the 9th century BC.", "Նաիրիի երկրները մ.թ.ա. 9-րդ դարի կեսին միավորվեցին մեկ պետության մեջ։", "Земли Наири объединились в одно государство в середине IX века до н. э."), { c: true }),
    ],
  },
  urartu: {
    title: t("The Kingdom of Van", "Վանի թագավորությունը", "Ванское царство"),
    events: [
      E(-850, t("Arame, the first known king", "Արամե՝ առաջին հայտնի թագավորը", "Араме, первый известный царь"), undefined, { c: true }),
      E(-830, t("Sardur I makes Tushpa the capital", "Սարդուրի I-ը Տուշպան դարձնում է մայրաքաղաք", "Сардури I делает Тушпу столицей"), undefined, { c: true }),
      E(-800, t("Menua's canal, more than 70 km long", "Մենուայի ջրանցքը՝ ավելի քան 70 կմ", "Канал Менуа длиной более 70 км"), t("People call it the Shamiram canal.", "Ժողովուրդն այն անվանում է Շամիրամի ջրանցք։", "Народ называет его каналом Шамирам."), { c: true }),
      E(-782, t("Argishti I founds Erebuni", "Արգիշտի I-ը հիմնում է Էրեբունին", "Аргишти I основывает Эребуни"), t("A cuneiform inscription tells of the founding.", "Սեպագիր արձանագրությունը պատմում է հիմնադրման մասին։", "Клинописная надпись рассказывает об основании.")),
      E(-776, t("Argishtikhinili is founded", "Հիմնվում է Արգիշտիխինիլին", "Основан Аргиштихинили")),
      E(-750, t("Sardur II: the kingdom at its greatest", "Սարդուրի II՝ թագավորության ամենամեծ տարածքը", "Сардури II: царство в наибольших границах"), undefined, { c: true }),
      E(-670, t("Rusa II builds Teishebaini (Karmir Blur)", "Ռուսա II-ը կառուցում է Թեյշեբաինին (Կարմիր բլուր)", "Руса II строит Тейшебаини (Кармир-Блур)"), undefined, { c: true }),
      E(-590, t("The kingdom falls", "Թագավորությունն անկում է ապրում", "Царство гибнет"), t("At the beginning of the 6th century BC, after wars with Assyria and raids of Cimmerians and Scythians.", "Մ.թ.ա. 6-րդ դարի սկզբին՝ Ասորեստանի հետ պատերազմներից և կիմերների ու սկյութների արշավանքներից հետո։", "В начале VI века до н. э., после войн с Ассирией и набегов киммерийцев и скифов."), { c: true }),
    ],
  },
  yervandids: {
    title: t("The Yervandids and the Persian Empire", "Երվանդունիները և Պարսից տերությունը", "Ервандиды и Персидская держава"),
    events: [
      E(-570, t("The Yervandids rule Armenia", "Երվանդունիները կառավարում են Հայաստանը", "Ервандиды правят Арменией"), t("From the 6th century BC to about 200 BC.", "Մ.թ.ա. 6-րդ դարից մինչև մոտ մ.թ.ա. 200 թվականը։", "С VI века до н. э. примерно до 200 г. до н. э."), { to: -200, c: true }),
      E(-550, t("Armenia becomes a Persian satrapy", "Հայաստանը դառնում է պարսկական սատրապություն", "Армения становится персидской сатрапией"), undefined, { c: true }),
      E(-520, t("Behistun inscription names \"Armina\"", "Բեհիսթունյան արձանագրությունը հիշատակում է «Արմինա»", "Бехистунская надпись называет «Армину»"), undefined, { c: true }),
      E(-401, t("Xenophon crosses Armenia", "Քսենոփոնն անցնում է Հայաստանով", "Ксенофонт проходит через Армению"), t("In the Anabasis he describes underground houses, beer and deep snow.", "«Անաբասիսում» նա նկարագրում է ստորգետնյա տներ, գարեջուր և խոր ձյուն։", "В «Анабасисе» он описывает подземные дома, пиво и глубокий снег."), { to: -400 }),
      E(-331, t("Alexander the Great destroys the Persian Empire", "Ալեքսանդր Մակեդոնացին կործանում է Պարսից տերությունը", "Александр Македонский сокрушает Персидскую державу")),
      E(-210, t("Yervand the Last founds Yervandashat", "Երվանդ Վերջինը հիմնում է Երվանդաշատը", "Ерванд Последний основывает Ервандашат"), undefined, { c: true }),
      E(-189, t("Artashes I declares independence", "Արտաշես I-ը հռչակում է անկախություն", "Арташес I провозглашает независимость"), t("A year after the Romans defeated Antiochus III at Magnesia.", "Մագնեսիայում Հռոմի կողմից Անտիոքոս III-ի պարտությունից մեկ տարի անց։", "Через год после того, как римляне разбили Антиоха III при Магнесии.")),
    ],
  },
  dynasties: {
    title: t("Ancient Armenian kingdoms", "Հին հայկական թագավորություններ", "Древние армянские царства"),
    eras: [
      { from: -850, to: -590, l: t("Van", "Վան", "Ван") },
      { from: -570, to: -200, l: t("Yervandids", "Երվանդունիներ", "Ервандиды") },
      { from: -189, to: 1, l: t("Artashesids", "Արտաշեսյաններ", "Арташесиды") },
      { from: 66, to: 428, l: t("Arshakids", "Արշակունիներ", "Аршакиды") },
    ],
    events: [
      E(-782, t("Erebuni is founded", "Հիմնվում է Էրեբունին", "Основан Эребуни")),
      E(-189, t("Artashes I, an independent king", "Արտաշես I՝ անկախ թագավոր", "Арташес I — независимый царь")),
      E(-176, t("Artashat is founded", "Հիմնվում է Արտաշատը", "Основан Арташат"), t("Hannibal is said to have advised on the site.", "Ասում են՝ վայրի ընտրության հարցում խորհուրդ է տվել Հաննիբալը։", "Говорят, место для города посоветовал Ганнибал."), { c: true }),
      E(-95, t("Tigran the Great", "Տիգրան Մեծ", "Тигран Великий"), undefined, { to: -55 }),
      E(66, t("Trdat I is crowned in Rome", "Տրդատ I-ը թագադրվում է Հռոմում", "Трдат I коронован в Риме")),
      E(301, t("Christianity, the state religion", "Քրիստոնեությունը՝ պետական կրոն", "Христианство — государственная религия")),
      E(387, t("Armenia divided between Byzantium and Persia", "Հայաստանի բաժանումը Բյուզանդիայի և Պարսկաստանի միջև", "Раздел Армении между Византией и Персией")),
      E(428, t("End of the Arsacid kingdom", "Արշակունյաց թագավորության անկումը", "Конец царства Аршакидов")),
    ],
  },
  arshakids: {
    title: t("Between Rome and Parthia", "Հռոմի և Պարթևստանի միջև", "Между Римом и Парфией"),
    events: [
      E(-55, t("Reign of Artavazd II", "Արտավազդ II-ի թագավորությունը", "Правление Артавазда II"), t("He wrote tragedies, speeches and histories in Greek.", "Նա հունարեն գրում էր ողբերգություններ, ճառեր և պատմություններ։", "Он писал по-гречески трагедии, речи и исторические сочинения."), { to: -34 }),
      E(-53, t("Parthians crush Crassus at Carrhae", "Պարթևները ջախջախում են Կրասոսին Խառանի մոտ", "Парфяне разбивают Красса при Каррах")),
      E(-34, t("Mark Antony seizes Artavazd", "Մարկոս Անտոնիոսը գերում է Արտավազդին", "Марк Антоний захватывает Артавазда")),
      E(63, t("Treaty of Rhandeia", "Հռանդեայի պայմանագիրը", "Рандейский договор"), t("An Arshakid king, crowned by Rome.", "Արշակունի թագավոր՝ թագադրված Հռոմի կողմից։", "Царь из Аршакидов, коронуемый Римом.")),
      E(66, t("Nero crowns Trdat I in Rome", "Ներոնը Հռոմում թագադրում է Տրդատ I-ին", "Нерон коронует Трдата I в Риме"), t("The start of the Arshakid dynasty in Armenia (66–428).", "Հայաստանում Արշակունիների արքայատոհմի սկիզբը (66–428)։", "Начало династии Аршакидов в Армении (66–428).")),
      E(387, t("Partition of Armenia", "Հայաստանի բաժանումը", "Раздел Армении")),
      E(428, t("The last Arshakid king is deposed", "Գահընկեց է արվում վերջին Արշակունի թագավորը", "Низложен последний царь-Аршакид"), t("Artashes IV; the marzpanate is set up.", "Արտաշես IV, հաստատվում է մարզպանությունը։", "Арташес IV; учреждено марзпанство.")),
    ],
  },
  capitals: {
    title: t("Ancient capitals of Armenia", "Հայաստանի հին մայրաքաղաքները", "Древние столицы Армении"),
    events: [
      E(-776, t("Armavir (Argishtikhinili)", "Արմավիր (Արգիշտիխինիլի)", "Армавир (Аргиштихинили)"), t("Founded in the time of the Kingdom of Van, later the capital of the Yervandids.", "Հիմնվել է Վանի թագավորության ժամանակ, հետագայում՝ Երվանդունիների մայրաքաղաք։", "Основан во времена Ванского царства, позже столица Ервандидов.")),
      E(-210, t("Yervandashat", "Երվանդաշատ", "Ервандашат"), t("Where the Araks and Akhurian meet.", "Արաքսի և Ախուրյանի միախառնման վայրում։", "У слияния Аракса и Ахуряна."), { c: true }),
      E(-176, t("Artashat", "Արտաշատ", "Арташат"), t("A centre of trade, called the Armenian Carthage.", "Առևտրի կենտրոն, որին անվանում էին Հայկական Կարթագեն։", "Центр торговли, его называли Армянским Карфагеном."), { c: true }),
      E(-80, t("Tigranakert", "Տիգրանակերտ", "Тигранакерт"), undefined, { c: true }),
      E(150, t("Vagharshapat", "Վաղարշապատ", "Вагаршапат"), t("Capital of the Arshakids from the 2nd century, later Etchmiadzin.", "Արշակունիների մայրաքաղաքը 2-րդ դարից, հետագայում՝ Էջմիածին։", "Столица Аршакидов со II века, позже Эчмиадзин."), { c: true }),
    ],
  },
};
