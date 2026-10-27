import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade9: VisualMap[number] = {
  "population-armenia": [
    "bars set=armpop",
    closer(
      `**Read the bars.** Between 1926 and 1979 Armenia's population more than tripled: medicine improved, families were large, and Armenians from abroad came to live in Soviet Armenia. The peak came with the 1989 census, about 3.3 million. Then came the Spitak earthquake, the war and the blockade of the early 1990s, when for several winters homes had electricity for only a few hours a day. Hundreds of thousands of people left to find work, mostly in Russia, and the birth rate fell, so every census since has counted fewer people.

**A temple for the largest minority.** The Yazidis, Armenia's largest national minority, live mainly in villages of Armavir and Aragatsotn. In 2019 in the village of **Aknalich** they opened a temple, *Quba Mere Diwane*, which is the largest Yazidi temple in the world. Next to it stands an older, smaller shrine. Yazidi children in Armenia can study their own language at school, and books and newspapers are published in it.`,
      `**Կարդա՛ սյունակները։** 1926-ից 1979 թվականներին Հայաստանի բնակչությունն աճեց ավելի քան երեք անգամ․ բժշկությունը զարգացավ, ընտանիքները բազմազավակ էին, և արտերկրի հայերը գալիս էին ապրելու Խորհրդային Հայաստանում։ Գագաթնակետն եկավ 1989 թվականի մարդահամարով՝ մոտ 3,3 միլիոն։ Հետո եղան Սպիտակի երկրաշարժը, 1990-ականների սկզբի պատերազմն ու շրջափակումը, երբ մի քանի ձմեռ տներում էլեկտրականություն կար օրական ընդամենը մի քանի ժամ։ Հարյուր հազարավոր մարդիկ մեկնեցին աշխատանք գտնելու, հիմնականում Ռուսաստան, և ծնելիությունն ընկավ, ուստի այդ ժամանակվանից ամեն մարդահամար ավելի քիչ մարդ է հաշվում։

**Տաճար ամենամեծ փոքրամասնության համար։** Եզդիները՝ Հայաստանի ամենամեծ ազգային փոքրամասնությունը, ապրում են հիմնականում Արմավիրի և Արագածոտնի գյուղերում։ 2019 թվականին **Ակնալիճ** գյուղում նրանք բացեցին *Քուբա Մերե Դիվանե* տաճարը, որն աշխարհի ամենամեծ եզդիական տաճարն է։ Նրա կողքին կանգնած է ավելի հին, փոքր սրբավայր։ Հայաստանի եզդի երեխաները դպրոցում կարող են սովորել իրենց մայրենի լեզուն, որով հրատարակվում են գրքեր և թերթեր։`,
      `**Прочитай столбики.** С 1926 по 1979 год население Армении выросло больше чем втрое: развивалась медицина, семьи были большими, и армяне из-за рубежа приезжали жить в Советскую Армению. Пик пришёлся на перепись 1989 года — около 3,3 млн. Потом были Спитакское землетрясение, война и блокада начала 1990-х, когда несколько зим электричество в домах давали всего на несколько часов в сутки. Сотни тысяч людей уехали на заработки, в основном в Россию, рождаемость упала, и с тех пор каждая перепись насчитывает меньше людей.

**Храм для крупнейшего меньшинства.** Езиды, крупнейшее национальное меньшинство Армении, живут в основном в сёлах Армавира и Арагацотна. В 2019 году в селе **Акналич** они открыли храм *Куба Мере Диване* — крупнейший езидский храм в мире. Рядом стоит более старое, маленькое святилище. Езидские дети в Армении могут изучать в школе родной язык, на нём издают книги и газеты.`,
    ),
    ask(1, {
      en: ["Look at the bars. In which census was Armenia's population the largest?", ["1989", "1979", "2001", "2022"], "About 3.3 million people were counted in 1989; after that emigration and a falling birth rate reduced the population."],
      hy: ["Նայի՛ր սյունակներին։ Ո՞ր մարդահամարի ժամանակ էր Հայաստանի բնակչությունն ամենամեծը։", ["1989", "1979", "2001", "2022"], "1989 թվականին հաշվվեց մոտ 3,3 միլիոն մարդ, որից հետո արտագաղթը և ծնելիության անկումը կրճատեցին բնակչությունը։"],
      ru: ["Посмотри на столбики. По какой переписи население Армении было самым большим?", ["1989", "1979", "2001", "2022"], "В 1989 году насчитали около 3,3 млн человек; потом эмиграция и падение рождаемости сократили население."],
    }),
  ],
  "cities-yerevan": [
    "bars set=armcities",
    closer(
      `**Older than Rome.** In 1950 archaeologists digging on the hill of Arin Berd, on the south-eastern edge of Yerevan, found a stone with a cuneiform inscription. In it the Urartian king **Argishti I** says that he built the fortress of **Erebuni** for the glory of his land. The date, 782 BC, makes Yerevan 29 years older than Rome, and in 2018 the city celebrated its 2,800th birthday. The name Yerevan itself is thought to come from Erebuni.

**A city planned for 150,000.** When **Alexander Tamanyan** drew the master plan of Yerevan in 1924, the town had only a few tens of thousands of inhabitants, and he designed it for about 150,000. His plan put a ring of parks around the centre, wide avenues and the great square now called Republic Square, built of pink and yellow tuff. Today more than a million people live in Yerevan, about seven times as many as Tamanyan planned for, which is one reason for its traffic jams and shrinking green spaces.`,
      `**Հռոմից ավելի հին։** 1950 թվականին Երևանի հարավ-արևելյան եզրին գտնվող Արին բերդ բլրի վրա պեղումներ կատարող հնագետները գտան սեպագիր արձանագրությամբ քար։ Նրանում ուրարտական արքա **Արգիշտի Ա**-ն ասում է, որ **Էրեբունի** ամրոցը կառուցել է իր երկրի փառքի համար։ Այդ թվականը՝ մ.թ.ա. 782-ը, Երևանը դարձնում է Հռոմից 29 տարով ավելի հին, և 2018 թվականին քաղաքը նշեց իր 2800-ամյակը։ Ենթադրվում է, որ Երևան անունն էլ է ծագում Էրեբունիից։

**Քաղաք՝ նախագծված 150 000 մարդու համար։** Երբ **Ալեքսանդր Թամանյանը** 1924 թվականին կազմեց Երևանի գլխավոր հատակագիծը, քաղաքն ուներ ընդամենը մի քանի տասնյակ հազար բնակիչ, և նա այն նախագծեց մոտ 150 000 մարդու համար։ Նրա հատակագիծը կենտրոնի շուրջը նախատեսում էր այգիների օղակ, լայն պողոտաներ և վարդագույն ու դեղին տուֆից կառուցված մեծ հրապարակը, որն այժմ կոչվում է Հանրապետության հրապարակ։ Այսօր Երևանում ապրում է ավելի քան մեկ միլիոն մարդ՝ մոտ յոթ անգամ ավելի, քան նախատեսել էր Թամանյանը, և սա խցանումների ու կանաչ տարածքների կրճատման պատճառներից մեկն է։`,
      `**Старше Рима.** В 1950 году археологи, копавшие на холме Арин-Берд на юго-восточной окраине Еревана, нашли камень с клинописной надписью. В ней урартский царь **Аргишти I** говорит, что построил крепость **Эребуни** во славу своей страны. Дата — 782 год до н. э. — делает Ереван на 29 лет старше Рима, и в 2018 году город отметил 2800-летие. Считается, что и само название Ереван происходит от Эребуни.

**Город на 150 000 жителей.** Когда **Александр Таманян** в 1924 году составлял генеральный план Еревана, в городе было лишь несколько десятков тысяч жителей, и он рассчитал его примерно на 150 000. Его план предусматривал кольцо парков вокруг центра, широкие проспекты и большую площадь из розового и жёлтого туфа, которая теперь называется площадью Республики. Сегодня в Ереване живёт больше миллиона человек — примерно в семь раз больше, чем планировал Таманян, и это одна из причин пробок и сокращения зелени.`,
    ),
    ask(1, {
      en: ["Yerevan was founded in 782 BC and Rome in 753 BC. How many years older is Yerevan?", ["29 years", "35 years", "19 years", "782 years"], "Both dates are BC, so the difference is 782 − 753 = 29 years."],
      hy: ["Երևանը հիմնադրվել է մ.թ.ա. 782 թվականին, Հռոմը՝ մ.թ.ա. 753-ին։ Քանի՞ տարով է Երևանն ավելի հին։", ["29 տարով", "35 տարով", "19 տարով", "782 տարով"], "Երկու թվականն էլ մ.թ.ա. են, ուստի տարբերությունը 782 − 753 = 29 տարի է։"],
      ru: ["Ереван основан в 782 году до н. э., Рим — в 753 году до н. э. На сколько лет Ереван старше?", ["На 29 лет", "На 35 лет", "На 19 лет", "На 782 года"], "Обе даты до нашей эры, поэтому разница 782 − 753 = 29 лет."],
    }),
  ],
  "economy-energy": [
    "mechanism reactor",
    "mechanism hydro",
    "mechanism solar",
    closer(
      `**A nuclear plant in an earthquake zone.** The Armenian nuclear power plant near Metsamor has two reactors, of which only the second works today. After the Spitak earthquake of 1988 both were shut down for safety, even though the plant itself was not damaged. In the cold, dark winters of the early 1990s, with gas pipelines cut, the country decided to restart one reactor, and it has worked since 1995 after being strengthened against earthquakes. Its life has been extended into the 2030s, and Armenia is discussing what will replace it.

**A sunny country.** Every square metre of Armenia receives about 1,700 kWh of solar energy a year, much more than in most of Europe, where the average is about 1,000. Solar panels are now seen on roofs of houses, schools and shops, and large solar stations are being built, for example at Masrik near Lake Sevan. A household with its own panels can send the electricity it does not use into the grid and use it back later.`,
      `**Ատոմակայան երկրաշարժային գոտում։** Մեծամորի մոտ գտնվող Հայկական ատոմային էլեկտրակայանն ունի երկու ռեակտոր, որոնցից այսօր աշխատում է միայն երկրորդը։ 1988 թվականի Սպիտակի երկրաշարժից հետո երկուսն էլ անվտանգության համար կանգնեցվեցին, թեև կայանն ինքը չէր վնասվել։ 1990-ականների սկզբի ցուրտ ու մութ ձմեռներին, երբ գազատարները կտրված էին, երկիրը որոշեց վերագործարկել մեկ ռեակտոր, և այն երկրաշարժերի դեմ ամրացվելուց հետո աշխատում է 1995 թվականից։ Նրա շահագործման ժամկետն երկարացվել է մինչև 2030-ական թվականներ, և Հայաստանը քննարկում է, թե ինչով այն փոխարինել։

**Արևոտ երկիր։** Հայաստանի յուրաքանչյուր քառակուսի մետրը տարեկան ստանում է մոտ 1700 կՎտ·ժ արևային էներգիա՝ շատ ավելի, քան Եվրոպայի մեծ մասում, որտեղ միջինը մոտ 1000 է։ Արևային վահանակներն այժմ երևում են տների, դպրոցների և խանութների տանիքներին, և կառուցվում են խոշոր արևային կայաններ, օրինակ՝ Սևանա լճի մոտ Մասրիկում։ Սեփական վահանակներ ունեցող ընտանիքը կարող է չօգտագործած էլեկտրականությունն ուղարկել ցանց և ավելի ուշ ետ վերցնել։`,
      `**Атомная станция в зоне землетрясений.** У Армянской АЭС возле Мецамора два реактора, из которых сегодня работает только второй. После Спитакского землетрясения 1988 года оба остановили ради безопасности, хотя сама станция не пострадала. В холодные тёмные зимы начала 1990-х, когда газопроводы были перерезаны, страна решила перезапустить один реактор, и после усиления против землетрясений он работает с 1995 года. Срок его службы продлён до 2030-х годов, и Армения обсуждает, чем его заменить.

**Солнечная страна.** Каждый квадратный метр Армении получает около 1700 кВт·ч солнечной энергии в год — гораздо больше, чем большая часть Европы, где в среднем около 1000. Солнечные панели теперь видны на крышах домов, школ и магазинов, строятся и крупные солнечные станции, например в Масрике у озера Севан. Семья со своими панелями может отдавать неиспользованную электроэнергию в сеть и потом забирать её обратно.`,
    ),
    ask(1, {
      en: ["Which of these power stations does not need any imported fuel?", ["A hydro station on the Vorotan", "The nuclear power plant", "The gas-fired Hrazdan thermal plant", "All of them need imported fuel"], "Hydro and solar stations use Armenia's own rivers and sunshine; gas and nuclear fuel are imported."],
      hy: ["Այս էլեկտրակայաններից ո՞րը ներմուծվող վառելիքի կարիք չունի։", ["Որոտանի հիդրոկայանը", "Ատոմային էլեկտրակայանը", "Հրազդանի գազով աշխատող ջերմակայանը", "Բոլորին էլ ներմուծվող վառելիք է պետք"], "Հիդրո և արևային կայաններն օգտագործում են Հայաստանի սեփական գետերը և արևը, իսկ գազը և միջուկային վառելիքը ներմուծվում են։"],
      ru: ["Какой из этих электростанций не нужно импортное топливо?", ["ГЭС на Воротане", "Атомной электростанции", "Разданской ТЭС на газе", "Всем нужно импортное топливо"], "ГЭС и солнечные станции используют собственные реки и солнце Армении, а газ и ядерное топливо ввозятся."],
    }),
  ],
  "industry-armenia": [
    closer(
      `**The oldest winery and the oldest shoe.** In the **Areni-1** cave in Vayots Dzor, archaeologists found a clay vat for pressing grapes, jars for fermenting juice, cups and grape seeds about 6,100 years old: the oldest known winery in the world. In the same cave lay a leather shoe about 5,500 years old, laced with a leather strap and stuffed with grass, perhaps to keep its shape. The dry, cool air of the cave and a layer of sheep dung sealed it so well that it survived almost whole.

**Computers from Yerevan.** In 1956 the mathematician **Sergey Mergelyan** founded a research institute in Yerevan to design computing machines. In the 1960s it built the **Nairi** computers, named after an ancient name of Armenia, and Armenia became one of the main centres of computer engineering in the Soviet Union. That tradition, together with strong mathematics schools, helped today's IT companies grow in Yerevan, Gyumri and Vanadzor.`,
      `**Ամենահին գինեգործարանը և ամենահին կոշիկը։** Վայոց ձորի **Արենի-1** քարանձավում հնագետները գտան խաղող ճզմելու կավե ավազան, հյութը խմորելու կարասներ, գավաթներ և մոտ 6100 տարեկան խաղողի կորիզներ՝ աշխարհում հայտնի ամենահին գինեգործարանը։ Նույն քարանձավում ընկած էր մոտ 5500 տարեկան կաշվե կոշիկ՝ կաշվե քուղով կապված և խոտով լցված, գուցե ձևը պահելու համար։ Քարանձավի չոր, զով օդը և ոչխարի գոմաղբի շերտն այնքան լավ էին այն փակել, որ կոշիկը պահպանվել է գրեթե ամբողջական։

**Համակարգիչներ Երևանից։** 1956 թվականին մաթեմատիկոս **Սերգեյ Մերգելյանը** Երևանում հիմնեց հաշվողական մեքենաներ նախագծող գիտահետազոտական ինստիտուտ։ 1960-ական թվականներին այնտեղ ստեղծվեցին **«Նաիրի»** համակարգիչները՝ Հայաստանի հին անուններից մեկով, և Հայաստանը դարձավ Խորհրդային Միության համակարգչաշինության գլխավոր կենտրոններից մեկը։ Այդ ավանդույթը, ուժեղ մաթեմատիկական դպրոցների հետ միասին, օգնեց այսօրվա ՏՏ ընկերություններին աճել Երևանում, Գյումրիում և Վանաձորում։`,
      `**Древнейшая винодельня и древнейший башмак.** В пещере **Арени-1** в Вайоц Дзоре археологи нашли глиняную ванну для давки винограда, кувшины для брожения сока, чаши и виноградные косточки возрастом около 6100 лет — древнейшую известную винодельню мира. В той же пещере лежал кожаный башмак возрастом около 5500 лет, зашнурованный кожаным ремешком и набитый травой, возможно чтобы держал форму. Сухой прохладный воздух пещеры и слой овечьего навоза так хорошо его закупорили, что он сохранился почти целым.

**Компьютеры из Еревана.** В 1956 году математик **Сергей Мергелян** основал в Ереване научный институт для разработки вычислительных машин. В 1960-х годах там создали компьютеры **«Наири»** — по одному из древних названий Армении, и Армения стала одним из главных центров вычислительной техники в Советском Союзе. Эта традиция вместе с сильными математическими школами помогла сегодняшним IT-компаниям вырасти в Ереване, Гюмри и Ванадзоре.`,
    ),
    ask(1, {
      en: ["What did archaeologists find in the Areni-1 cave?", ["The oldest known winery and a 5,500-year-old shoe", "The cuneiform stone of Erebuni", "The first Nairi computer", "Copper mines of the Urartians"], "Areni-1 holds a winery about 6,100 years old and a leather shoe about 5,500 years old."],
      hy: ["Ի՞նչ գտան հնագետներն Արենի-1 քարանձավում։", ["Ամենահին հայտնի գինեգործարանը և 5500 տարեկան կոշիկ", "Էրեբունու սեպագիր քարը", "Առաջին «Նաիրի» համակարգիչը", "Ուրարտացիների պղնձահանքեր"], "Արենի-1-ում կա մոտ 6100 տարեկան գինեգործարան և մոտ 5500 տարեկան կաշվե կոշիկ։"],
      ru: ["Что археологи нашли в пещере Арени-1?", ["Древнейшую известную винодельню и башмак возрастом 5500 лет", "Клинописный камень Эребуни", "Первый компьютер «Наири»", "Медные рудники урартов"], "В Арени-1 нашли винодельню возрастом около 6100 лет и кожаный башмак возрастом около 5500 лет."],
    }),
  ],
  "agriculture-armenia": [
    closer(
      `**Water drop by drop.** In ordinary furrow irrigation water runs along ditches between the rows, and much of it evaporates or soaks away beyond the roots. **Drip irrigation** brings water through thin pipes with tiny holes straight to the root of every plant, and it can use a third to a half less water. This matters on the Ararat plain: fish farms and fields have pumped so much artesian water from underground that many wells which once flowed by themselves have dried up, and the water table has dropped.

**Fields on steps.** Only about a sixth of Armenia's territory can be ploughed; the rest is too steep, too high or too stony. For thousands of years villagers have built **terraces** on the hillsides: walls of stone hold flat strips of soil, so rain does not wash it away. Many old terraces can still be seen around villages in Vayots Dzor and Syunik. Higher up, the land is used as pasture, and every summer flocks are driven to the alpine meadows.`,
      `**Ջուր՝ կաթիլ առ կաթիլ։** Սովորական ակոսային ոռոգման ժամանակ ջուրը հոսում է շարքերի միջև գտնվող առուներով, և դրա մեծ մասը գոլորշիանում է կամ ներծծվում արմատներից այն կողմ։ **Կաթիլային ոռոգումը** ջուրը փոքր անցքերով բարակ խողովակներով հասցնում է անմիջապես յուրաքանչյուր բույսի արմատին և կարող է օգտագործել մեկ երրորդից մինչև կես անգամ պակաս ջուր։ Սա կարևոր է Արարատյան դաշտում․ ձկնաբուծարաններն ու դաշտերն այնքան արտեզյան ջուր են մղել գետնի տակից, որ ժամանակին ինքնահոս շատ հորեր ցամաքել են, և ստորերկրյա ջրերի մակարդակն իջել է։

**Դաշտեր՝ աստիճաններով։** Հայաստանի տարածքի միայն մոտ մեկ վեցերորդն է հնարավոր վարել․ մնացածը չափազանց զառիթափ է, չափազանց բարձր կամ քարքարոտ։ Հազարավոր տարիներ գյուղացիները լանջերին **դարավանդներ** են կառուցել․ քարե պատերը պահում են հողի հարթ շերտերը, որպեսզի անձրևը չլվանա դրանք։ Շատ հին դարավանդներ դեռ երևում են Վայոց ձորի և Սյունիքի գյուղերի շուրջը։ Ավելի բարձր հողերն օգտագործվում են որպես արոտ, և ամեն ամառ հոտերը քշում են ալպյան մարգագետիններ։`,
      `**Вода по капле.** При обычном бороздковом поливе вода течёт по канавкам между рядами, и значительная её часть испаряется или уходит мимо корней. **Капельное орошение** подаёт воду по тонким трубкам с крошечными отверстиями прямо к корню каждого растения и может расходовать на треть или даже вдвое меньше воды. Это важно для Араратской равнины: рыбные хозяйства и поля выкачали из-под земли столько артезианской воды, что многие скважины, когда-то бившие сами, иссякли, а уровень подземных вод упал.

**Поля ступенями.** Распахать можно лишь около шестой части территории Армении; остальное слишком круто, слишком высоко или каменисто. Тысячи лет сельчане строили на склонах **террасы**: каменные стенки держат ровные полосы почвы, чтобы дождь её не смывал. Многие старые террасы и сейчас видны вокруг сёл Вайоц Дзора и Сюника. Выше земля служит пастбищами, и каждое лето стада перегоняют на альпийские луга.`,
    ),
    ask(1, {
      en: ["Why is drip irrigation useful on the Ararat plain?", ["It brings water straight to the roots and uses much less of it", "It warms the soil in winter", "It protects the fruit from hail", "It adds salt that plants need"], "Water goes to each plant's roots instead of evaporating from ditches, which saves the plain's shrinking groundwater."],
      hy: ["Ինչո՞ւ է կաթիլային ոռոգումն օգտակար Արարատյան դաշտում։", ["Ջուրն անմիջապես հասցնում է արմատներին և շատ ավելի քիչ ջուր է ծախսում", "Ձմռանը տաքացնում է հողը", "Պտուղները պաշտպանում է կարկուտից", "Ավելացնում է բույսերին անհրաժեշտ աղ"], "Ջուրը գնում է յուրաքանչյուր բույսի արմատին՝ առուներից գոլորշիանալու փոխարեն, և դա խնայում է դաշտի նվազող ստորերկրյա ջրերը։"],
      ru: ["Чем полезно капельное орошение на Араратской равнине?", ["Подаёт воду прямо к корням и тратит её гораздо меньше", "Согревает почву зимой", "Защищает плоды от града", "Добавляет нужную растениям соль"], "Вода идёт к корням каждого растения, а не испаряется из канав, и это сберегает убывающие подземные воды равнины."],
    }),
  ],
  "transport-trade-tourism": [
    closer(
      `**One road to the north.** Most lorries between Armenia and Russia go through Georgia and cross the Greater Caucasus at **Upper Lars**, on the Georgian Military Road, the only regular road crossing on that route. In winter snowstorms and avalanches can close the pass for days, and queues of lorries stretch for kilometres. That is why Armenia is interested in every new route: through the Georgian ports of Poti and Batumi, through Iran towards the Persian Gulf, and by the North–South road from Bavra to Meghri.

**A metro under a mountain city.** The Yerevan metro opened in 1981. It has one line with 10 stations, about 13 km long, running from the Ararat plain in the south-west up to the higher districts in the north. Because the city rises steeply, parts of the line run deep under the hills and parts on the surface. Its stations are decorated with tuff, basalt and mosaics, each in its own style.`,
      `**Մեկ ճանապարհ դեպի հյուսիս։** Հայաստանի և Ռուսաստանի միջև բեռնատարների մեծ մասն անցնում է Վրաստանով և Մեծ Կովկասը հատում **Վերին Լարսում**՝ Վրացական ռազմական ճանապարհի վրա, որն այդ ուղղությամբ միակ կանոնավոր ավտոճանապարհային անցումն է։ Ձմռանը բքերը և ձնահյուսերը կարող են լեռնանցքը փակել օրերով, և բեռնատարների հերթերը ձգվում են կիլոմետրերով։ Ահա թե ինչու է Հայաստանը շահագրգռված յուրաքանչյուր նոր ուղով՝ Վրաստանի Փոթի և Բաթումի նավահանգիստներով, Իրանով դեպի Պարսից ծոց, և Բավրայից Մեղրի ձգվող Հյուսիս–Հարավ ճանապարհով։

**Մետրո լեռնային քաղաքի տակ։** Երևանի մետրոն բացվել է 1981 թվականին։ Այն ունի մեկ գիծ՝ 10 կայարանով, մոտ 13 կմ երկարությամբ, որը հարավ-արևմուտքում Արարատյան դաշտից բարձրանում է մինչև հյուսիսի ավելի բարձր թաղամասեր։ Քանի որ քաղաքը կտրուկ բարձրանում է, գծի մի մասն անցնում է բլուրների տակ խորը, իսկ մի մասը՝ մակերևույթով։ Նրա կայարանները զարդարված են տուֆով, բազալտով և խճանկարներով՝ յուրաքանչյուրն իր ոճով։`,
      `**Одна дорога на север.** Большинство грузовиков между Арменией и Россией идут через Грузию и пересекают Большой Кавказ в **Верхнем Ларсе**, на Военно-Грузинской дороге, — это единственный регулярный автомобильный переход на этом пути. Зимой метели и лавины могут закрыть перевал на несколько дней, и очереди фур тянутся на километры. Поэтому Армения заинтересована в каждом новом пути: через грузинские порты Поти и Батуми, через Иран к Персидскому заливу и по дороге Север — Юг от Бавры до Мегри.

**Метро под горным городом.** Ереванское метро открылось в 1981 году. В нём одна линия с 10 станциями длиной около 13 км, которая поднимается с Араратской равнины на юго-западе к более высоким районам на севере. Поскольку город круто поднимается, часть линии идёт глубоко под холмами, а часть — по поверхности. Станции украшены туфом, базальтом и мозаиками, каждая в своём стиле.`,
    ),
    ask(1, {
      en: ["Why does it cost more for Armenia to export goods?", ["It has no sea, so goods travel through other countries' ports and roads", "Its goods are too heavy to carry", "It has no airports", "It trades only with Antarctica"], "A landlocked country with two closed borders must send goods through Georgia or Iran, which adds distance and cost."],
      hy: ["Ինչո՞ւ է Հայաստանի համար ապրանքներ արտահանելն ավելի թանկ։", ["Ծով չունի, և ապրանքներն անցնում են այլ երկրների նավահանգիստներով և ճանապարհներով", "Նրա ապրանքները չափազանց ծանր են տեղափոխելու համար", "Օդանավակայաններ չունի", "Առևտուր է անում միայն Անտարկտիդայի հետ"], "Ծով չունեցող և երկու փակ սահմանով երկիրը պետք է ապրանքներն ուղարկի Վրաստանով կամ Իրանով, ինչն ավելացնում է հեռավորությունը և ծախսը։"],
      ru: ["Почему Армении дороже экспортировать товары?", ["У неё нет моря, и грузы идут через порты и дороги других стран", "Её товары слишком тяжёлые", "У неё нет аэропортов", "Она торгует только с Антарктидой"], "Стране без выхода к морю и с двумя закрытыми границами приходится везти грузы через Грузию или Иран, а это добавляет расстояние и расходы."],
    }),
  ],
  "northern-regions": [
    closer(
      `**Galaxies seen from Aragats.** In 1946 the astronomer **Viktor Ambartsumian** founded the **Byurakan Astrophysical Observatory** on the southern slope of Aragats, at about 1,400 m, where the air is dry and the sky is clear on many nights. Ambartsumian became famous for showing that stars are still being born in groups today. Another Byurakan astronomer, **Benjamin Markarian**, searched the sky for galaxies glowing with unusual ultraviolet light, and about 1,500 of them are still called "Markarian galaxies" all over the world.

**The black and red town.** Old Gyumri, the **Kumayri** quarter, is one of the best-preserved 19th-century town centres in the region: streets of one- and two-storey houses built of black and red tuff, with carved balconies and wooden gates. Many of them survived the earthquake of 1988, because they were low and built of heavy stone blocks. Gyumri's craftsmen, its potters, blacksmiths and carpet-weavers, and its famous jokes and humour are a proud part of the town's identity.`,
      `**Գալակտիկաներ՝ Արագածից։** 1946 թվականին աստղագետ **Վիկտոր Համբարձումյանը** Արագածի հարավային լանջին՝ մոտ 1400 մ բարձրության վրա, որտեղ օդը չոր է և շատ գիշերներ երկինքը պարզ է, հիմնեց **Բյուրականի աստղադիտարանը**։ Համբարձումյանը հայտնի դարձավ՝ ցույց տալով, որ աստղերը մինչ օրս ծնվում են խմբերով։ Բյուրականի մեկ այլ աստղագետ՝ **Բենիամին Մարգարյանը**, երկնքում փնտրում էր անսովոր ուլտրամանուշակագույն լույսով փայլող գալակտիկաներ, և դրանցից մոտ 1500-ը ամբողջ աշխարհում մինչ օրս կոչվում են «Մարգարյանի գալակտիկաներ»։

**Սև ու կարմիր քաղաքը։** Հին Գյումրին՝ **Կումայրի** թաղամասը, տարածաշրջանի 19-րդ դարի լավագույնս պահպանված քաղաքային կենտրոններից է․ սև և կարմիր տուֆից կառուցված մեկ և երկհարկանի տների փողոցներ՝ փորագրված պատշգամբներով և փայտե դարպասներով։ Դրանցից շատերը փրկվեցին 1988 թվականի երկրաշարժից, քանի որ ցածր էին և կառուցված ծանր քարե բլոկներից։ Գյումրու վարպետները՝ բրուտները, դարբինները և գորգագործները, ինչպես նաև նրա հայտնի կատակներն ու հումորը քաղաքի ինքնության հպարտ մասն են։`,
      `**Галактики с Арагаца.** В 1946 году астроном **Виктор Амбарцумян** основал **Бюраканскую астрофизическую обсерваторию** на южном склоне Арагаца, на высоте около 1400 м, где воздух сухой и небо ясное многие ночи. Амбарцумян прославился тем, что показал: звёзды рождаются группами и сегодня. Другой бюраканский астроном, **Вениамин Маркарян**, искал на небе галактики с необычным ультрафиолетовым свечением, и около 1500 из них во всём мире до сих пор называют «галактиками Маркаряна».

**Чёрно-красный город.** Старый Гюмри, квартал **Кумайри**, — один из лучше всего сохранившихся городских центров XIX века в регионе: улицы одно- и двухэтажных домов из чёрного и красного туфа с резными балконами и деревянными воротами. Многие из них пережили землетрясение 1988 года, потому что были низкими и сложены из тяжёлых каменных блоков. Гюмрийские мастера — гончары, кузнецы и ковровщицы, — а также знаменитые шутки и юмор составляют гордую часть облика города.`,
    ),
    ask(1, {
      en: ["Which observatory on the slope of Aragats was founded by Viktor Ambartsumian?", ["Byurakan", "Greenwich", "Pulkovo", "Garni"], "The Byurakan Astrophysical Observatory was founded in 1946 on the southern slope of Aragats."],
      hy: ["Արագածի լանջին ո՞ր աստղադիտարանն է հիմնել Վիկտոր Համբարձումյանը։", ["Բյուրականի", "Գրինվիչի", "Պուլկովոյի", "Գառնու"], "Բյուրականի աստղադիտարանը հիմնվել է 1946 թվականին Արագածի հարավային լանջին։"],
      ru: ["Какую обсерваторию на склоне Арагаца основал Виктор Амбарцумян?", ["Бюраканскую", "Гринвичскую", "Пулковскую", "Гарнийскую"], "Бюраканская астрофизическая обсерватория основана в 1946 году на южном склоне Арагаца."],
    }),
  ],
  "central-southern-regions": [
    closer(
      `**Standing stones of Syunik.** Near Sisian stand more than 200 upright basalt stones, some taller than a person, many of them with a round hole drilled near the top. The site is called **Zorats Karer** ("Stones of the Army") or **Karahunj**. It is several thousand years old and has burial chambers among the stones. Some researchers have suggested that the holes were used to watch the Sun and stars, like an ancient observatory; others think the site was mainly a burial ground. Scientists still argue about it, which makes it a good example of how a mystery is studied.

**A village in the rocks.** In the gorge of **Old Khndzoresk**, near Goris, the soft volcanic rock is full of caves, and for centuries people turned them into homes, stables and churches, linked by paths and ladders. People lived there until the 1950s, when the village moved up to the plateau. Today a swinging footbridge about 160 m long crosses the gorge, and visitors walk down to see the cave houses.`,
      `**Սյունիքի կանգնած քարերը։** Սիսիանի մոտ կանգնած են ավելի քան 200 ուղղաձիգ բազալտե քարեր՝ որոշները մարդուց բարձր, շատերը՝ վերին մասում փորված կլոր անցքով։ Վայրը կոչվում է **Զորաց քարեր** կամ **Քարահունջ**։ Այն մի քանի հազար տարեկան է, և քարերի միջև թաղման խցեր կան։ Որոշ հետազոտողներ ենթադրել են, որ անցքերն օգտագործվել են Արեգակին և աստղերին հետևելու համար, ինչպես հնագույն աստղադիտարանում, իսկ ուրիշները կարծում են, որ վայրը հիմնականում գերեզմանատուն է եղել։ Գիտնականները մինչ օրս վիճում են այդ մասին, և դա լավ օրինակ է, թե ինչպես են ուսումնասիրում առեղծվածը։

**Գյուղ՝ ժայռերում։** Գորիսի մոտ գտնվող **Հին Խնձորեսկի** կիրճում փափուկ հրաբխային ապարը լի է քարանձավներով, և դարեր շարունակ մարդիկ դրանք դարձնում էին տներ, գոմեր և եկեղեցիներ՝ միացված արահետներով և սանդուղքներով։ Մարդիկ այնտեղ ապրեցին մինչև 1950-ական թվականները, երբ գյուղը տեղափոխվեց սարահարթ։ Այսօր կիրճի վրայով անցնում է մոտ 160 մ երկարությամբ ճոճվող հետիոտն կամուրջ, և այցելուներն իջնում են քարանձավային տները տեսնելու։`,
      `**Стоячие камни Сюника.** У Сисиана стоят больше 200 вертикальных базальтовых камней, некоторые выше человека, у многих у верхушки просверлено круглое отверстие. Это место называют **Зорац Карер** («Камни войска») или **Караундж**. Ему несколько тысяч лет, и среди камней есть погребальные камеры. Одни исследователи предполагают, что через отверстия наблюдали за Солнцем и звёздами, как в древней обсерватории; другие считают, что это было прежде всего место погребений. Учёные спорят до сих пор, и это хороший пример того, как изучают загадку.

**Деревня в скалах.** В ущелье **Старого Хндзореска** у Гориса мягкая вулканическая порода полна пещер, и веками люди превращали их в дома, хлева и церкви, связанные тропами и лестницами. Там жили до 1950-х годов, когда село переселилось наверх, на плато. Сегодня через ущелье перекинут подвесной пешеходный мост длиной около 160 м, и туристы спускаются посмотреть на пещерные дома.`,
    ),
    ask(1, {
      en: ["Until roughly when did people live in the cave houses of Old Khndzoresk?", ["The 1950s", "The 1500s", "The year 1000", "They still live there"], "The village moved up to the plateau in the 1950s; today the caves are visited by tourists across a swinging bridge."],
      hy: ["Մոտավորապես մինչև ե՞րբ էին մարդիկ ապրում Հին Խնձորեսկի քարանձավային տներում։", ["Մինչև 1950-ական թվականները", "Մինչև 1500-ական թվականները", "Մինչև 1000 թվականը", "Մինչ օրս ապրում են"], "Գյուղը 1950-ական թվականներին տեղափոխվեց սարահարթ, իսկ այսօր քարանձավներն այցելում են զբոսաշրջիկները՝ ճոճվող կամրջով։"],
      ru: ["Примерно до какого времени люди жили в пещерных домах Старого Хндзореска?", ["До 1950-х годов", "До 1500-х годов", "До 1000 года", "Живут до сих пор"], "Село переселилось на плато в 1950-х; теперь к пещерам туристы идут по подвесному мосту."],
    }),
  ],
};
