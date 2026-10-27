import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade6: VisualMap[number] = {
  "earth-in-space": [
    "mechanism seasons",
    "diagram solarsystem",
    closer(
      `**A stick, a well and the size of the Earth.** Around 240 BC **Eratosthenes**, the head of the great library of Alexandria, heard that at noon on the longest day of the year the Sun shone straight down a deep well in Syene (today Aswan), so there were no shadows. At the same moment a vertical stick in Alexandria cast a short shadow: the Sun stood about 7° from the top of the sky, one fiftieth of a full circle. The distance between the two cities was about 5,000 stadia, so the whole circle of the Earth had to be 50 × 5,000 = 250,000 stadia. With nothing but shadows and arithmetic he came remarkably close to the real 40,000 km.

**The seasons are not about distance.** Surprisingly, the Earth is closest to the Sun in early **January** (about 147 million km) and farthest in early **July** (about 152 million km). The real reason for the seasons is the tilt of the axis. In June the Northern Hemisphere leans towards the Sun: the Sun climbs high, its rays fall steeply and the days are long. At Yerevan's latitude (40°) the noon Sun rises about 73° above the horizon on 22 June, but only about 26.5° on 22 December. Low rays spread the same sunlight over a much larger area, so it warms each square metre less.`,
      `**Փայտ, ջրհոր և Երկրի չափը։** Մոտ մ.թ.ա. 240 թվականին Ալեքսանդրիայի մեծ գրադարանի ղեկավար **Էրատոսթենեսը** իմացավ, որ տարվա ամենաերկար օրվա կեսօրին Արեգակը լուսավորում է Սիենայի (այժմ՝ Ասուան) խոր ջրհորի հատակը, այսինքն՝ ստվերներ չկան։ Նույն պահին Ալեքսանդրիայում ուղղահայաց փայտը կարճ ստվեր էր գցում․ Արեգակն երկնքի գագաթից մոտ 7°-ով շեղված էր, որը լրիվ շրջանի մեկ հիսուներորդն է։ Երկու քաղաքների միջև հեռավորությունը մոտ 5000 ստադիոն էր, ուրեմն Երկրի ամբողջ շրջագիծը պետք է լիներ 50 · 5000 = 250 000 ստադիոն։ Միայն ստվերների և թվաբանության օգնությամբ նա զարմանալիորեն մոտեցավ իրական 40 000 կմ-ին։

**Եղանակները կախված չեն հեռավորությունից։** Զարմանալի է, բայց Երկիրն Արեգակին ամենամոտն է **հունվարի** սկզբին (մոտ 147 միլիոն կմ), իսկ ամենահեռուն՝ **հուլիսի** սկզբին (մոտ 152 միլիոն կմ)։ Եղանակների իրական պատճառն առանցքի թեքությունն է։ Հունիսին Հյուսիսային կիսագունդը թեքված է դեպի Արեգակը․ Արեգակը բարձր է բարձրանում, ճառագայթներն ընկնում են ուղղաձիգ, և օրերն երկար են։ Երևանի լայնության վրա (40°) կեսօրվա Արեգակը հունիսի 22-ին բարձրանում է հորիզոնից մոտ 73°, իսկ դեկտեմբերի 22-ին՝ ընդամենը մոտ 26,5°։ Թեք ճառագայթները նույն արևի լույսը տարածում են շատ ավելի մեծ մակերեսի վրա, ուստի յուրաքանչյուր քառակուսի մետրը պակաս են տաքացնում։`,
      `**Палка, колодец и размер Земли.** Около 240 года до н. э. **Эратосфен**, глава великой Александрийской библиотеки, узнал, что в полдень самого длинного дня года Солнце освещает дно глубокого колодца в Сиене (ныне Асуан), то есть теней нет. В тот же момент вертикальная палка в Александрии отбрасывала короткую тень: Солнце отстояло от зенита примерно на 7°, это одна пятидесятая полного круга. Расстояние между городами было около 5000 стадиев, значит, вся окружность Земли — 50 · 5000 = 250 000 стадиев. С помощью одних теней и арифметики он удивительно близко подошёл к настоящим 40 000 км.

**Времена года — не из-за расстояния.** Удивительно, но ближе всего к Солнцу Земля в начале **января** (около 147 млн км), а дальше всего — в начале **июля** (около 152 млн км). Настоящая причина смены времён года — наклон оси. В июне Северное полушарие наклонено к Солнцу: Солнце поднимается высоко, лучи падают круто, дни длинные. На широте Еревана (40°) полуденное Солнце 22 июня поднимается над горизонтом примерно на 73°, а 22 декабря — всего на 26,5°. Косые лучи распределяют тот же солнечный свет по гораздо большей площади и меньше греют каждый квадратный метр.`,
    ),
    ask(1, {
      en: ["When is the Earth closest to the Sun?", ["In early January", "In late March", "In late June", "In late September"], "In early January, about 147 million km away. The seasons come from the tilt of the axis, not from the distance."],
      hy: ["Ե՞րբ է Երկիրն Արեգակին ամենամոտը։", ["Հունվարի սկզբին", "Մարտի վերջին", "Հունիսի վերջին", "Սեպտեմբերի վերջին"], "Հունվարի սկզբին՝ մոտ 147 միլիոն կմ հեռավորության վրա։ Եղանակները պայմանավորված են առանցքի թեքությամբ, ոչ թե հեռավորությամբ։"],
      ru: ["Когда Земля ближе всего к Солнцу?", ["В начале января", "В конце марта", "В конце июня", "В конце сентября"], "В начале января, примерно в 147 млн км. Времена года зависят от наклона оси, а не от расстояния."],
    }),
  ],
  "globe-coordinates": [
    "diagram globegrid",
    "geocalc mode=meridian",
    closer(
      `**Latitude from a star, longitude from a clock.** Latitude is easy to find: the height of the **Pole Star** above the horizon equals your latitude, about 40° in Yerevan. Longitude was a puzzle for centuries, because it needs exact time: every 15° of longitude is one hour of difference in local time. Ships that lost their longitude ran aground, so in 1714 the British Parliament offered a prize of £20,000 for a solution. A carpenter turned clockmaker, **John Harrison**, built a sea clock that lost only about five seconds on a voyage of more than two months to Jamaica. Comparing it with local noon, sailors could finally work out how far east or west they were.

**Why a degree of longitude shrinks.** 1° of a meridian is always about 111 km. But meridians come together at the poles, so the distance covered by 1° of **longitude** depends on the latitude: about 111 km on the equator, about 85 km at Yerevan's latitude, about 55 km at 60° and zero at the pole. That is why the method in this lesson, degrees × 111 km, works only for two points on the **same meridian**.`,
      `**Լայնությունը՝ աստղից, երկայնությունը՝ ժամացույցից։** Լայնությունը գտնելը հեշտ է․ **Բևեռային աստղի** բարձրությունը հորիզոնից հավասար է քո լայնությանը, Երևանում՝ մոտ 40°։ Երկայնությունը դարեր շարունակ հանելուկ էր, քանի որ դրա համար ճշգրիտ ժամանակ է պետք․ երկայնության յուրաքանչյուր 15°-ը տեղական ժամանակի մեկ ժամ տարբերություն է։ Երկայնությունը կորցրած նավերը խրվում էին ծանծաղուտներում, ուստի 1714 թվականին Բրիտանիայի խորհրդարանը լուծման համար 20 000 ֆունտ մրցանակ սահմանեց։ Ատաղձագործից ժամագործ դարձած **Ջոն Հարիսոնը** ծովային ժամացույց կառուցեց, որը Ջամայկա կատարած ավելի քան երկու ամսվա ճանապարհորդության ընթացքում ետ մնաց ընդամենը մոտ հինգ վայրկյանով։ Այն համեմատելով տեղական կեսօրի հետ՝ նավաստիները վերջապես կարողացան հաշվել, թե որքան են արևելք կամ արևմուտք գնացել։

**Ինչու է կարճանում երկայնության աստիճանը։** Միջօրեականի 1°-ը միշտ մոտ 111 կմ է։ Բայց միջօրեականները բևեռներում միանում են, ուստի **երկայնության** 1°-ի հեռավորությունը կախված է լայնությունից․ հասարակածի վրա՝ մոտ 111 կմ, Երևանի լայնության վրա՝ մոտ 85 կմ, 60°-ի վրա՝ մոտ 55 կմ, իսկ բևեռում՝ զրո։ Ահա թե ինչու այս դասի եղանակը՝ աստիճաններ · 111 կմ, ճիշտ է միայն **նույն միջօրեականի** վրա գտնվող երկու կետի համար։`,
      `**Широта по звезде, долгота по часам.** Широту найти легко: высота **Полярной звезды** над горизонтом равна твоей широте, в Ереване — около 40°. Долгота веками оставалась загадкой, потому что для неё нужно точное время: каждые 15° долготы — это час разницы местного времени. Корабли, потерявшие долготу, садились на мель, и в 1714 году британский парламент назначил премию в 20 000 фунтов за решение. Плотник, ставший часовщиком, **Джон Гаррисон** построил морские часы, которые за плавание длиной больше двух месяцев на Ямайку отстали всего примерно на пять секунд. Сравнивая их с местным полднем, моряки наконец смогли вычислить, насколько они ушли на восток или запад.

**Почему градус долготы короче.** 1° меридиана всегда около 111 км. Но меридианы сходятся у полюсов, поэтому длина 1° **долготы** зависит от широты: около 111 км на экваторе, около 85 км на широте Еревана, около 55 км на 60° и ноль на полюсе. Поэтому способ из этого урока, градусы · 111 км, работает только для двух точек на **одном меридиане**.`,
    ),
    ask(1, {
      en: ["At night the Pole Star stands 40° above the horizon. What is your latitude?", ["40° N", "50° N", "40° S", "44.5° E"], "The height of the Pole Star above the horizon equals the latitude of the place: this is Yerevan's latitude."],
      hy: ["Գիշերը Բևեռային աստղը հորիզոնից 40° բարձր է։ Որքա՞ն է քո լայնությունը։", ["40° հ. լ.", "50° հ. լ.", "40° հվ. լ.", "44,5° ա. ե."], "Բևեռային աստղի բարձրությունը հորիզոնից հավասար է տեղի լայնությանը․ սա Երևանի լայնությունն է։"],
      ru: ["Ночью Полярная звезда стоит на 40° над горизонтом. Какова твоя широта?", ["40° с. ш.", "50° с. ш.", "40° ю. ш.", "44,5° в. д."], "Высота Полярной звезды над горизонтом равна широте места: это широта Еревана."],
    }),
  ],
  "plan-scale": [
    "geocalc mode=scale",
    closer(
      `**Draw a plan of your schoolyard.** You do not need a tape measure: count steps. An average pupil's step is about 60 cm, so 100 steps are about 60 m. Choose a scale that fits your page, for example 1 : 1,000 (1 cm to 10 m): then the 60 m path becomes a 6 cm line. Mark north with an arrow, draw the school, trees and paths with symbols, and add a key. Real surveyors started the same way: Roman surveyors measured roads in thousands of double steps, and the word "mile" comes from the Latin *mille passuum*, a thousand paces.

**A compass does not point exactly north.** The needle turns towards the **magnetic** pole, which is not where the Earth's axis is. The north magnetic pole wanders: in the 20th century it was in the Canadian Arctic, and now it is moving across the Arctic Ocean towards Siberia by tens of kilometres a year. The angle between true north and the needle is called **magnetic declination**. In Armenia it is only a few degrees, but near the poles it can be huge, so accurate maps print the declination in the margin.`,
      `**Գծիր քո դպրոցի բակի հատակագիծը։** Չափերիզ պետք չէ․ քայլերը հաշվիր։ Աշակերտի միջին քայլը մոտ 60 սմ է, ուրեմն 100 քայլը մոտ 60 մ է։ Ընտրիր թղթին համապատասխան մասշտաբ, օրինակ՝ 1 ։ 1000 (1 սմ-ում 10 մ)․ այդ դեպքում 60 մ արահետը կդառնա 6 սմ գիծ։ Սլաքով նշիր հյուսիսը, պայմանական նշաններով գծիր դպրոցը, ծառերը և արահետները, ավելացրու լեգենդ։ Իսկական հողաչափներն էլ այդպես են սկսել․ հռոմեացի հողաչափները ճանապարհները չափում էին հազարավոր կրկնակի քայլերով, իսկ անգլերեն *mile* (մղոն) բառը ծագում է լատիներեն *mille passuum*՝ «հազար քայլ» արտահայտությունից։

**Կողմնացույցը ճիշտ հյուսիս ցույց չի տալիս։** Սլաքը դառնում է դեպի **մագնիսական** բևեռը, որն Երկրի առանցքի տեղում չէ։ Հյուսիսային մագնիսական բևեռը տեղաշարժվում է․ 20-րդ դարում այն Կանադայի Արկտիկայում էր, իսկ այժմ Հյուսիսային սառուցյալ օվկիանոսով շարժվում է դեպի Սիբիր՝ տարեկան տասնյակ կիլոմետրերով։ Իսկական հյուսիսի և սլաքի միջև անկյունը կոչվում է **մագնիսական շեղում**։ Հայաստանում այն ընդամենը մի քանի աստիճան է, բայց բևեռների մոտ կարող է շատ մեծ լինել, ուստի ճշգրիտ քարտեզների եզրին նշվում է շեղումը։`,
      `**Начерти план школьного двора.** Рулетка не нужна: считай шаги. Средний шаг школьника около 60 см, значит, 100 шагов — около 60 м. Выбери масштаб под размер листа, например 1 : 1000 (в 1 см 10 м): тогда дорожка в 60 м станет линией в 6 см. Отметь север стрелкой, нарисуй условными знаками школу, деревья и дорожки, добавь легенду. Настоящие землемеры начинали так же: римляне мерили дороги тысячами двойных шагов, и английское слово «миля» происходит от латинского *mille passuum* — «тысяча шагов».

**Компас показывает не точно на север.** Стрелка поворачивается к **магнитному** полюсу, а он не совпадает с осью Земли. Северный магнитный полюс блуждает: в XX веке он был в Канадской Арктике, а теперь движется через Северный Ледовитый океан к Сибири на десятки километров в год. Угол между истинным севером и стрелкой называют **магнитным склонением**. В Армении оно всего несколько градусов, но у полюсов бывает огромным, поэтому на точных картах склонение печатают на полях.`,
    ),
    ask(1, {
      en: ["On a plan with a scale of 1 : 1,000, how long is a 60 m path?", ["6 cm", "60 cm", "0.6 cm", "600 cm"], "1 : 1,000 means 1 cm to 10 m, so 60 m is 60 / 10 = 6 cm."],
      hy: ["1 ։ 1000 մասշտաբով հատակագծում որքա՞ն երկար է 60 մ արահետը։", ["6 սմ", "60 սմ", "0,6 սմ", "600 սմ"], "1 ։ 1000 նշանակում է 1 սմ-ում 10 մ, ուրեմն 60 մ-ը 60 ։ 10 = 6 սմ է։"],
      ru: ["Какой длины будет дорожка в 60 м на плане масштаба 1 : 1000?", ["6 см", "60 см", "0,6 см", "600 см"], "1 : 1000 — это 1 см к 10 м, значит, 60 м — это 60 : 10 = 6 см."],
    }),
  ],
  maps: [
    "diagram contour",
    closer(
      `**The oldest maps.** A Babylonian clay tablet from about 600 BC, now in the British Museum, shows the world as a flat disc with Babylon in the middle, ringed by a "bitter river", the ocean. In the 2nd century AD **Ptolemy** of Alexandria listed the coordinates of about 8,000 places, so that maps could be redrawn from numbers. In the 7th century the Armenian scholar **Anania Shirakatsi** described the known world and the provinces of Armenia in the *Ashkharhatsuyts* ("Showing of the World"), one of the earliest geographies of the region.

**Why every flat map is a little wrong.** A sphere cannot be flattened without stretching it, just as an orange peel tears when you press it flat. Every **map projection** chooses what to keep correct: shapes, areas or distances. The Mercator projection, used by most online maps, keeps shapes and directions, which is perfect for navigation, but it swells areas towards the poles. On it Greenland looks as big as Africa, although Africa is about **14 times** larger. Only a globe shows sizes, shapes and distances correctly at the same time.`,
      `**Ամենահին քարտեզները։** Մոտ մ.թ.ա. 600 թվականի բաբելոնյան կավե սալիկը, որն այժմ Բրիտանական թանգարանում է, աշխարհը ցույց է տալիս որպես հարթ սկավառակ՝ մեջտեղում Բաբելոնը, շուրջը՝ «դառը գետ», այսինքն՝ օվկիանոս։ Մ.թ. 2-րդ դարում ալեքսանդրացի **Պտղոմեոսը** կազմեց մոտ 8000 վայրի կոորդինատների ցանկ, որպեսզի քարտեզները կարելի լինի վերագծել թվերով։ 7-րդ դարում հայ գիտնական **Անանիա Շիրակացին** «Աշխարհացույց»-ում նկարագրեց հայտնի աշխարհը և Հայաստանի նահանգները․ դա տարածաշրջանի ամենավաղ աշխարհագրական երկերից է։

**Ինչու է ամեն հարթ քարտեզ մի քիչ սխալ։** Գունդը չի կարելի հարթեցնել առանց ձգելու, ինչպես նարնջի կեղևը պատռվում է, երբ փորձում ես այն սեղմել հարթ։ Յուրաքանչյուր **քարտեզագրական պրոյեկցիա** ընտրում է, թե ինչը ճիշտ պահի՝ ձևերը, մակերեսները, թե հեռավորությունները։ Մերկատորի պրոյեկցիան, որն օգտագործում են առցանց քարտեզների մեծ մասը, պահպանում է ձևերն ու ուղղությունները, ինչը հիանալի է նավագնացության համար, բայց դեպի բևեռներ ուռճացնում է մակերեսները։ Նրա վրա Գրենլանդիան Աֆրիկայի չափ է թվում, թեև Աֆրիկան մոտ **14 անգամ** մեծ է։ Միայն գլոբուսն է միաժամանակ ճիշտ ցույց տալիս չափերը, ձևերը և հեռավորությունները։`,
      `**Самые древние карты.** Вавилонская глиняная табличка около 600 года до н. э., хранящаяся в Британском музее, изображает мир плоским диском с Вавилоном в центре, окружённым «горькой рекой» — океаном. Во II веке н. э. **Птолемей** из Александрии составил список координат около 8000 мест, чтобы карты можно было перерисовывать по числам. В VII веке армянский учёный **Анания Ширакаци** описал известный мир и области Армении в «Ашхарацуйце» («Показе мира») — одном из древнейших географических трудов региона.

**Почему любая плоская карта немного неверна.** Шар нельзя развернуть на плоскость без растяжения, как апельсиновая кожура рвётся, если её прижать к столу. Каждая **картографическая проекция** выбирает, что сохранить верным: формы, площади или расстояния. Проекция Меркатора, на которой построено большинство онлайн-карт, сохраняет формы и направления — это идеально для навигации, но раздувает площади к полюсам. На ней Гренландия кажется размером с Африку, хотя Африка примерно в **14 раз** больше. Только глобус одновременно верно передаёт размеры, формы и расстояния.`,
    ),
    ask(1, {
      en: ["Why does Greenland look as big as Africa on many world maps?", ["A sphere cannot be made flat without stretching", "Greenland is covered with ice", "Greenland is drawn at a larger scale by mistake", "Africa is shown without its deserts"], "Every projection distorts something; the Mercator projection stretches areas more and more towards the poles."],
      hy: ["Ինչո՞ւ է աշխարհի շատ քարտեզներում Գրենլանդիան Աֆրիկայի չափ երևում։", ["Գունդը չի կարելի հարթեցնել առանց ձգելու", "Գրենլանդիան ծածկված է սառույցով", "Գրենլանդիան սխալմամբ գծված է ավելի մեծ մասշտաբով", "Աֆրիկան ցույց է տրված առանց անապատների"], "Ամեն պրոյեկցիա ինչ-որ բան աղավաղում է․ Մերկատորի պրոյեկցիան դեպի բևեռներ ավելի ու ավելի է ձգում մակերեսները։"],
      ru: ["Почему на многих картах мира Гренландия кажется размером с Африку?", ["Шар нельзя сделать плоским без растяжения", "Гренландия покрыта льдом", "Гренландию по ошибке рисуют в более крупном масштабе", "Африку показывают без пустынь"], "Любая проекция что-то искажает; проекция Меркатора всё сильнее растягивает площади к полюсам."],
    }),
  ],
  "earth-structure-relief": [
    "diagram earthlayers",
    "diagram volcano",
    closer(
      `**How do we know what is inside?** Nobody has ever been below the crust. The deepest hole ever drilled, the **Kola Superdeep Borehole** in northern Russia, reached 12,262 m, only about 0.2% of the way to the centre, and the rock there was already about 180 °C. Instead, scientists "x-ray" the planet with **earthquake waves**. One kind of wave (S-waves) cannot pass through liquid, and on the far side of the Earth from a big earthquake these waves never arrive. That shadow showed that the outer core is liquid.

**Black glass of the Armenian Highlands.** When lava cools very quickly, crystals have no time to grow, and it hardens into **obsidian**, a shiny volcanic glass. Its broken edge is sharper than a steel blade. The Armenian Highlands are one of the richest obsidian regions in the world: for many thousands of years people made knives, scrapers and arrowheads from it, and obsidian from Armenian deposits has been found at ancient sites hundreds of kilometres away. Its chemistry is like a fingerprint, so archaeologists can tell which volcano a tool came from.`,
      `**Ինչպե՞ս ենք իմանում, թե ինչ կա ներսում։** Ոչ ոք երբևէ երկրակեղևից ներքև չի եղել։ Երբևէ հորատված ամենախոր անցքը՝ Ռուսաստանի հյուսիսում գտնվող **Կոլայի գերխոր հորատանցքը**, հասավ 12 262 մ-ի, այսինքն՝ կենտրոն տանող ճանապարհի ընդամենը մոտ 0,2%-ին, և այնտեղ ապարն արդեն մոտ 180 °C էր։ Փոխարենը գիտնականները մոլորակը «լուսանկարում» են **երկրաշարժի ալիքներով**։ Ալիքների մի տեսակը (S-ալիքները) չի կարող անցնել հեղուկի միջով, և ուժեղ երկրաշարժից Երկրի հակառակ կողմում այդ ալիքները չեն հասնում։ Հենց այդ «ստվերը» ցույց տվեց, որ արտաքին միջուկը հեղուկ է։

**Հայկական լեռնաշխարհի սև ապակին։** Երբ լավան շատ արագ է սառչում, բյուրեղները չեն հասցնում աճել, և այն պնդանում է՝ դառնալով **օբսիդիան** (վանակատ), փայլուն հրաբխային ապակի։ Նրա կոտրված եզրն ավելի սուր է, քան պողպատե շեղբը։ Հայկական լեռնաշխարհն աշխարհի օբսիդիանով ամենահարուստ շրջաններից է․ հազարավոր տարիներ մարդիկ դրանից դանակներ, քերիչներ և նետերի ծայրեր էին պատրաստում, իսկ հայկական հանքավայրերի օբսիդիան գտնվել է հարյուրավոր կիլոմետր հեռու գտնվող հնավայրերում։ Նրա քիմիական կազմը մատնահետքի պես է, ուստի հնագետները կարող են որոշել, թե գործիքն որ հրաբխից է։`,
      `**Откуда мы знаем, что внутри?** Никто никогда не был глубже коры. Самая глубокая скважина в истории, **Кольская сверхглубокая** на севере России, достигла 12 262 м — лишь около 0,2% пути до центра, и порода там была уже около 180 °C. Вместо этого учёные «просвечивают» планету **сейсмическими волнами**. Один вид волн (S-волны) не проходит через жидкость, и на противоположной от сильного землетрясения стороне Земли эти волны не появляются. Эта «тень» показала, что внешнее ядро жидкое.

**Чёрное стекло Армянского нагорья.** Когда лава остывает очень быстро, кристаллы не успевают вырасти, и она застывает **обсидианом** — блестящим вулканическим стеклом. Его скол острее стального лезвия. Армянское нагорье — один из самых богатых обсидианом районов мира: многие тысячи лет люди делали из него ножи, скребки и наконечники стрел, а обсидиан армянских месторождений находят на древних стоянках за сотни километров. Его химический состав как отпечаток пальца, поэтому археологи могут определить, из какого вулкана орудие.`,
    ),
    ask(1, {
      en: ["How did scientists find out that the outer core is liquid?", ["From earthquake waves that cannot pass through it", "From samples taken by the deepest borehole", "From lava that comes out of volcanoes", "From photographs taken by satellites"], "S-waves do not travel through liquid, and they vanish behind the core. No borehole goes deeper than about 12 km."],
      hy: ["Ինչպե՞ս իմացան գիտնականները, որ արտաքին միջուկը հեղուկ է։", ["Երկրաշարժի ալիքներից, որոնք չեն անցնում նրա միջով", "Ամենախոր հորատանցքի նմուշներից", "Հրաբուխներից դուրս եկող լավայից", "Արբանյակների լուսանկարներից"], "S-ալիքները չեն անցնում հեղուկի միջով և անհետանում են միջուկի ետևում։ Ոչ մի հորատանցք մոտ 12 կմ-ից խոր չէ։"],
      ru: ["Как учёные узнали, что внешнее ядро жидкое?", ["По сейсмическим волнам, которые через него не проходят", "По образцам из самой глубокой скважины", "По лаве, выходящей из вулканов", "По снимкам со спутников"], "S-волны не идут через жидкость и пропадают за ядром. Ни одна скважина не глубже примерно 12 км."],
    }),
  ],
  "world-ocean": [
    "bars set=salinity",
    "mechanism watercycle",
    closer(
      `**Deeper than Everest is high.** In January 1960 **Jacques Piccard** and **Don Walsh** sank in the bathyscaphe *Trieste* to the bottom of the Challenger Deep in the Mariana Trench, almost 11,000 m down. If Everest (8,849 m) were placed there, its summit would still be about 2 km under water. The pressure at the bottom is more than a thousand times the air pressure at the surface, and the window of the cabin cracked on the way down. They spent only twenty minutes on the bottom and saw a flat fish-like creature in the beam of their lamp.

**An ocean heating system.** The Gulf Stream carries dozens of times more water than all the rivers of the world together, and it brings tropical warmth far to the north-east as the North Atlantic Current. Thanks to it the Russian port of **Murmansk**, beyond the Arctic Circle, stays free of ice all winter, while harbours in Canada far to the south of it freeze over. The water cycle is powered by the Sun as well: every year about half a million cubic kilometres of water evaporate, and the same amount falls back as precipitation.`,
      `**Ավելի խոր, քան Էվերեստը՝ բարձր։** 1960 թվականի հունվարին **Ժակ Պիկարը** և **Դոն Ուոլշը** «Տրիեստ» բատիսկաֆով իջան Մարիանյան խորջրափի Չելենջերի անդունդի հատակը՝ գրեթե 11 000 մ խորություն։ Եթե Էվերեստը (8849 մ) դրվեր այնտեղ, նրա գագաթը դեռ մոտ 2 կմ ջրի տակ կլիներ։ Հատակին ճնշումը հազար անգամից ավելի մեծ է, քան մակերևույթին օդի ճնշումը, և իջնելիս խցիկի պատուհանը ճաք տվեց։ Նրանք հատակին մնացին ընդամենը քսան րոպե և լապտերի լույսի տակ տեսան տափակ, ձկան նման մի արարած։

**Օվկիանոսի ջեռուցման համակարգը։** Գոլֆստրիմը տասնյակ անգամ ավելի շատ ջուր է տեղափոխում, քան աշխարհի բոլոր գետերը միասին, և որպես Հյուսիսատլանտյան հոսանք՝ արևադարձային ջերմությունը տանում է հեռու դեպի հյուսիս-արևելք։ Նրա շնորհիվ Ռուսաստանի **Մուրմանսկ** նավահանգիստը, որը բևեռային շրջանից այն կողմ է, ամբողջ ձմեռ չի սառչում, մինչդեռ նրանից շատ ավելի հարավ գտնվող Կանադայի նավահանգիստները սառցակալում են։ Ջրի շրջապտույտն էլ է շարժվում Արեգակի էներգիայով․ ամեն տարի գոլորշիանում է մոտ կես միլիոն խորանարդ կիլոմետր ջուր, և նույնքան էլ վերադառնում է տեղումների ձևով։`,
      `**Глубже, чем Эверест высок.** В январе 1960 года **Жак Пикар** и **Дон Уолш** опустились в батискафе «Триест» на дно впадины Челленджер в Марианском жёлобе, почти на 11 000 м. Если поставить туда Эверест (8849 м), его вершина всё равно оказалась бы примерно в 2 км под водой. Давление на дне больше чем в тысячу раз превышает давление воздуха на поверхности, и по пути вниз иллюминатор кабины дал трещину. На дне они пробыли всего двадцать минут и увидели в луче фонаря плоское, похожее на рыбу существо.

**Система отопления океана.** Гольфстрим переносит в десятки раз больше воды, чем все реки мира вместе, и как Северо-Атлантическое течение несёт тропическое тепло далеко на северо-восток. Благодаря ему российский порт **Мурманск** за Полярным кругом всю зиму свободен ото льда, а гавани Канады намного южнее замерзают. Круговорот воды тоже движет Солнце: каждый год испаряется около полумиллиона кубических километров воды, и столько же возвращается осадками.`,
    ),
    ask(1, {
      en: ["How many grams of salt are in 1 l of Red Sea water with a salinity of 41‰?", ["41 g", "4.1 g", "410 g", "35 g"], "‰ means grams of salt per litre (per 1,000 g) of water, so 41‰ is 41 g in a litre."],
      hy: ["Քանի՞ գրամ աղ կա Կարմիր ծովի 1 լ ջրում, եթե աղիությունը 41‰ է։", ["41 գ", "4,1 գ", "410 գ", "35 գ"], "‰-ը նշանակում է գրամ աղ մեկ լիտր (1000 գ) ջրում, ուրեմն 41‰-ը 41 գ է մեկ լիտրում։"],
      ru: ["Сколько граммов соли в 1 л воды Красного моря при солёности 41‰?", ["41 г", "4,1 г", "410 г", "35 г"], "‰ — это граммы соли на литр (1000 г) воды, значит, 41‰ — это 41 г в литре."],
    }),
  ],
  "land-waters": [
    "diagram river",
    "bars set=rivers",
    "bars set=lakesdeep",
    closer(
      `**Twenty-eight rivers in, one river out.** About 28 rivers and streams flow into **Lake Sevan**, but only one flows out of it: the **Hrazdan**. From the 1930s Sevan's water was let out through the Hrazdan to turn the turbines of a chain of hydro stations and to irrigate the Ararat plain, and the level of the lake fell by about 19 m. To save it, a 48 km tunnel was cut through the mountains, and since 1981 the **Arpa–Sevan tunnel** has brought water from the Arpa river into the lake. Today the release of water from Sevan is limited by law.

**The river that makes its own weather.** The **Amazon** collects water from a basin of about 7 million km², almost the size of Australia, and carries about a fifth of all the river water that reaches the oceans. Its mouth is so wide and its flow so strong that sailors once found fresh water far out at sea, beyond sight of land. Most of the rain that feeds it evaporates from the forest itself and falls again further west, so cutting the forest also takes water away from the river.`,
      `**Քսանութ գետ՝ ներս, մեկ գետ՝ դուրս։** **Սևանա լիճ** է թափվում մոտ 28 գետ ու առու, բայց նրանից դուրս է հոսում միայն մեկը՝ **Հրազդանը**։ 1930-ական թվականներից Սևանի ջուրը Հրազդանով բաց էին թողնում՝ հիդրոկայանների շղթայի տուրբինները պտտելու և Արարատյան դաշտն ոռոգելու համար, և լճի մակարդակն իջավ մոտ 19 մ-ով։ Այն փրկելու համար լեռների միջով 48 կմ թունել փորեցին, և 1981 թվականից **Արփա–Սևան թունելը** Արփա գետի ջուրը բերում է լիճ։ Այսօր Սևանից ջրի բացթողումը սահմանափակված է օրենքով։

**Գետը, որն ինքն է ստեղծում իր եղանակը։** **Ամազոնը** ջուր է հավաքում մոտ 7 միլիոն կմ² ավազանից, որը գրեթե Ավստրալիայի չափ է, և տանում է օվկիանոսներ հասնող ամբողջ գետային ջրի մոտ մեկ հինգերորդը։ Նրա գետաբերանն այնքան լայն է, իսկ հոսքն այնքան ուժեղ, որ ժամանակին նավաստիները քաղցրահամ ջուր էին գտնում բաց ծովում, որտեղից ցամաքն արդեն չէր երևում։ Նրան սնող անձրևի մեծ մասը գոլորշիանում է հենց անտառից և նորից տեղում է ավելի արևմուտք, ուստի անտառը հատելը ջուր է խլում նաև գետից։`,
      `**Двадцать восемь рек втекают, одна вытекает.** В **озеро Севан** впадает около 28 рек и ручьёв, а вытекает лишь одна — **Раздан**. С 1930-х годов воду Севана спускали по Раздану, чтобы вращать турбины каскада ГЭС и орошать Араратскую равнину, и уровень озера упал примерно на 19 м. Чтобы спасти его, сквозь горы прорубили тоннель длиной 48 км, и с 1981 года **тоннель Арпа — Севан** подаёт в озеро воду реки Арпа. Сегодня спуск воды из Севана ограничен законом.

**Река, которая сама создаёт себе погоду.** **Амазонка** собирает воду с бассейна около 7 млн км², почти размером с Австралию, и несёт примерно пятую часть всей речной воды, попадающей в океаны. Её устье так широко, а течение так мощно, что моряки когда-то набирали пресную воду в открытом море, вне видимости берега. Большая часть дождей, питающих её, испаряется с самого леса и выпадает снова западнее, поэтому вырубка леса отнимает воду и у реки.`,
    ),
    ask(1, {
      en: ["How many rivers flow out of Lake Sevan?", ["One, the Hrazdan", "None", "Two, the Hrazdan and the Arpa", "About 28"], "About 28 rivers and streams flow in, but only the Hrazdan flows out. The Arpa is brought into the lake through a tunnel."],
      hy: ["Քանի՞ գետ է դուրս հոսում Սևանա լճից։", ["Մեկը՝ Հրազդանը", "Ոչ մեկը", "Երկուսը՝ Հրազդանը և Արփան", "Մոտ 28"], "Թափվում է մոտ 28 գետ ու առու, բայց դուրս է հոսում միայն Հրազդանը։ Արփայի ջուրը լիճ է բերվում թունելով։"],
      ru: ["Сколько рек вытекает из озера Севан?", ["Одна — Раздан", "Ни одной", "Две — Раздан и Арпа", "Около 28"], "Впадает около 28 рек и ручьёв, а вытекает только Раздан. Воду Арпы подают в озеро по тоннелю."],
    }),
  ],
  atmosphere: [
    "diagram atmoslayers",
    "geocalc mode=height",
    "mechanism breeze",
    closer(
      `**Weighing the air with mercury.** In 1643 the Italian scientist **Evangelista Torricelli** filled a glass tube with mercury, closed it with his finger and turned it upside down into a bowl of mercury. The mercury in the tube dropped and stopped at a height of about 76 cm: the weight of the air pressing on the bowl held it up. That is where "760 mm of mercury" comes from. Five years later, on **Blaise Pascal**'s request, a barometer was carried up the Puy de Dôme mountain in France, and the column became several centimetres shorter. This proved that there is less air above us the higher we climb.

**Why tea is cooler in the mountains.** Water boils when its vapour can push back against the air pressure. At sea level that takes 100 °C, but higher up the pressure is lower, so water boils sooner: in Yerevan at about 96–97 °C, on the summit of Aragats at about 86 °C and on Everest at only about 70 °C. Food in boiling water cooks more slowly in the mountains, which is why climbers use pressure cookers.`,
      `**Օդը կշռել սնդիկով։** 1643 թվականին իտալացի գիտնական **Էվանջելիստա Տորիչելին** ապակե խողովակը լցրեց սնդիկով, մատով փակեց և շրջեց սնդիկով լի ամանի մեջ։ Խողովակում սնդիկն իջավ և կանգ առավ մոտ 76 սմ բարձրության վրա․ ամանի վրա ճնշող օդի կշիռն էր այն պահում։ Հենց այստեղից է «սնդիկի սյան 760 մմ»-ը։ Հինգ տարի անց **Բլեզ Պասկալի** խնդրանքով բարոմետրը բարձրացրին Ֆրանսիայի Պյուի դը Դոմ լեռը, և սյունը մի քանի սանտիմետրով կարճացավ։ Դա ապացուցեց, որ որքան բարձր ենք բարձրանում, այնքան քիչ օդ կա մեր վերևում։

**Ինչու է լեռներում թեյն ավելի սառը։** Ջուրն եռում է, երբ նրա գոլորշին կարողանում է հաղթահարել օդի ճնշումը։ Ծովի մակարդակին դրա համար պետք է 100 °C, բայց բարձրում ճնշումն ավելի ցածր է, ուստի ջուրն ավելի շուտ է եռում․ Երևանում՝ մոտ 96–97 °C-ում, Արագածի գագաթին՝ մոտ 86 °C-ում, իսկ Էվերեստի վրա՝ ընդամենը մոտ 70 °C-ում։ Լեռներում եռացող ջրում սնունդն ավելի դանդաղ է եփվում, ուստի լեռնագնացներն օգտագործում են ճնշումային կաթսաներ։`,
      `**Взвесить воздух ртутью.** В 1643 году итальянский учёный **Эванджелиста Торричелли** наполнил стеклянную трубку ртутью, закрыл пальцем и опрокинул в чашу с ртутью. Ртуть в трубке опустилась и остановилась на высоте около 76 см: её держал вес воздуха, давящего на чашу. Отсюда и «760 мм ртутного столба». Через пять лет по просьбе **Блеза Паскаля** барометр подняли на гору Пюи-де-Дом во Франции, и столб стал на несколько сантиметров короче. Это доказало, что чем выше мы поднимаемся, тем меньше воздуха над нами.

**Почему в горах чай холоднее.** Вода кипит, когда её пар может преодолеть давление воздуха. У моря для этого нужно 100 °C, а выше давление меньше, и вода закипает раньше: в Ереване примерно при 96–97 °C, на вершине Арагаца — около 86 °C, а на Эвересте — всего около 70 °C. В горах еда в кипятке варится дольше, поэтому альпинисты берут скороварки.`,
    ),
    ask(1, {
      en: ["At sea level the pressure is 760 mm. Roughly what is it at a height of 210 m?", ["740 mm", "750 mm", "720 mm", "780 mm"], "Pressure falls by about 1 mm for every 10.5 m: 210 / 10.5 = 20 mm, and 760 − 20 = 740 mm."],
      hy: ["Ծովի մակարդակին ճնշումը 760 մմ է։ Մոտավորապես որքա՞ն է այն 210 մ բարձրության վրա։", ["740 մմ", "750 մմ", "720 մմ", "780 մմ"], "Ճնշումն ընկնում է մոտ 1 մմ յուրաքանչյուր 10,5 մ-ում․ 210 ։ 10,5 = 20 մմ, և 760 − 20 = 740 մմ։"],
      ru: ["На уровне моря давление 760 мм. Примерно каким оно будет на высоте 210 м?", ["740 мм", "750 мм", "720 мм", "780 мм"], "Давление падает примерно на 1 мм на каждые 10,5 м: 210 : 10,5 = 20 мм, 760 − 20 = 740 мм."],
    }),
  ],
  "weather-climate": [
    "climate city=yerevan,london,moscow",
    closer(
      `**Read the graphs.** Switch between the three cities. London's annual range of temperature is only about 13 °C, Moscow's about 26 °C and Yerevan's almost 30 °C: the farther a place is from the ocean, and the drier its air, the hotter its summers and the colder its winters. London has rain in every month, while Yerevan gets only about 300 mm a year, half as much, and its summers are almost dry. That is why Ararat plain farmers depend on irrigation.

**The captain who invented the forecast.** **Robert FitzRoy**, the captain of the *Beagle* on which Darwin sailed round the world, later became the head of Britain's new weather office. In 1861 he began publishing daily weather predictions in *The Times* and called them **forecasts**, a word he made up. He collected telegraph reports from coastal stations and warned ships of storms. Today forecasts are made on supercomputers from millions of measurements by satellites, weather stations and balloons, and they become about a day more accurate every ten years.`,
      `**Կարդա՛ գրաֆիկները։** Փոխիր երեք քաղաքները։ Լոնդոնում ջերմաստիճանի տարեկան տատանումն ընդամենը մոտ 13 °C է, Մոսկվայում՝ մոտ 26 °C, իսկ Երևանում՝ գրեթե 30 °C․ որքան տեղն օվկիանոսից հեռու է և որքան չոր է նրա օդը, այնքան շոգ է ամառը և ցուրտ՝ ձմեռը։ Լոնդոնում անձրև է գալիս ամեն ամիս, իսկ Երևանում տարեկան տեղում է ընդամենը մոտ 300 մմ՝ կրկնակի պակաս, և ամառը գրեթե չոր է։ Ահա թե ինչու Արարատյան դաշտի հողագործները կախված են ոռոգումից։

**Նավապետը, որը հորինեց կանխատեսումը։** **Ռոբերտ Ֆից Ռոյը**, «Բիգլ» նավի նավապետը, որով Դարվինը շրջեց աշխարհով մեկ, հետագայում դարձավ Բրիտանիայի նոր օդերևութաբանական գրասենյակի ղեկավար։ 1861 թվականին նա սկսեց «Թայմս» թերթում տպագրել եղանակի ամենօրյա կանխագուշակումներ և դրանք անվանեց **forecast**՝ կանխատեսում, իր իսկ հորինած բառով։ Նա հավաքում էր ափամերձ կայանների հեռագրային հաղորդումները և նավերին զգուշացնում փոթորիկների մասին։ Այսօր կանխատեսումները կազմվում են գերհամակարգիչներով՝ արբանյակների, օդերևութաբանական կայանների և օդապարիկների միլիոնավոր չափումներից, և ամեն տասը տարին մեկ դրանք դառնում են մոտ մեկ օրով ավելի ճշգրիտ։`,
      `**Прочитай графики.** Переключай три города. В Лондоне годовая амплитуда температуры всего около 13 °C, в Москве — около 26 °C, а в Ереване — почти 30 °C: чем дальше место от океана и чем суше воздух, тем жарче лето и холоднее зима. В Лондоне дожди идут каждый месяц, а в Ереване выпадает всего около 300 мм в год, вдвое меньше, и лето почти сухое. Поэтому земледельцы Араратской равнины зависят от орошения.

**Капитан, который придумал прогноз.** **Роберт Фицрой**, капитан «Бигля», на котором Дарвин обошёл вокруг света, позже возглавил новое метеорологическое ведомство Британии. В 1861 году он начал печатать в газете «Таймс» ежедневные предсказания погоды и назвал их **forecast** — «прогноз», придумав это слово. Он собирал телеграфные сводки с прибрежных станций и предупреждал корабли о штормах. Сегодня прогнозы рассчитывают суперкомпьютеры по миллионам измерений со спутников, метеостанций и зондов, и каждые десять лет они становятся точнее примерно на сутки.`,
    ),
    ask(1, {
      en: ["Which of the three cities has the smallest annual temperature range?", ["London", "Moscow", "Yerevan", "They are all the same"], "The ocean warms and cools slowly, so seaside places have mild winters and cool summers."],
      hy: ["Երեք քաղաքներից որի՞ ջերմաստիճանի տարեկան տատանումն է ամենափոքրը։", ["Լոնդոնի", "Մոսկվայի", "Երևանի", "Բոլորինը նույնն է"], "Օվկիանոսը դանդաղ է տաքանում և դանդաղ սառչում, ուստի ծովամերձ վայրերում ձմեռը մեղմ է, իսկ ամառը՝ զով։"],
      ru: ["У какого из трёх городов самая маленькая годовая амплитуда температуры?", ["У Лондона", "У Москвы", "У Еревана", "У всех одинаковая"], "Океан медленно нагревается и медленно остывает, поэтому у моря зима мягкая, а лето прохладное."],
    }),
  ],
  "biosphere-natural-zones": [
    "climate city=manaus,cairo,yakutsk",
    closer(
      `**Three climates, three zones.** Compare the graphs. **Manaus**, in the rainforest, is hot in every month and gets about 2,300 mm of rain a year, so plants grow all year round and the forest has many layers. **Cairo** gets about 25 mm a year, less than Manaus in a single wet afternoon, and outside the Nile valley almost nothing grows. **Yakutsk** has a range of almost 60 °C, from about −39 °C in January to about +19 °C in July: the summer is short but warm enough for larch taiga, and below the town the ground is frozen to a depth of hundreds of metres, so houses stand on piles.

**The tsar of soils.** A centimetre of fertile soil can take from a hundred to a thousand years to form, but it can be washed away in one heavy storm if the ground is bare. In 1883 the Russian scientist **Vasily Dokuchaev** published a famous study of chernozem and showed that soil is a natural body formed by climate, rock, plants, animals and time, the beginning of soil science. He called chernozem the "tsar of soils": its dark layer, rich in humus, can be more than a metre thick.`,
      `**Երեք կլիմա, երեք գոտի։** Համեմատիր գրաֆիկները։ Անձրևային անտառի **Մանաուսում** ամեն ամիս շոգ է, և տարեկան տեղում է մոտ 2300 մմ անձրև, ուստի բույսերն աճում են ամբողջ տարին, և անտառը բազմահարկ է։ **Կահիրեում** տարեկան տեղում է մոտ 25 մմ՝ ավելի քիչ, քան Մանաուսում մեկ անձրևոտ կեսօրին, և Նեղոսի հովտից դուրս գրեթե ոչինչ չի աճում։ **Յակուտսկում** տատանումը գրեթե 60 °C է՝ հունվարի մոտ −39 °C-ից մինչև հուլիսի մոտ +19 °C․ ամառը կարճ է, բայց բավական տաք՝ խեժափիճու տայգայի համար, իսկ քաղաքի տակ հողը սառած է հարյուրավոր մետր խորությամբ, ուստի տները կանգնած են ցցասյուների վրա։

**Հողերի արքան։** Մեկ սանտիմետր բերրի հողի առաջացման համար կարող է պահանջվել հարյուրից հազար տարի, բայց եթե գետինը մերկ է, այն կարող է լվացվել մեկ ուժեղ տեղատարափից։ 1883 թվականին ռուս գիտնական **Վասիլի Դոկուչաևը** հրատարակեց սևահողի մասին հայտնի աշխատություն և ցույց տվեց, որ հողը բնական մարմին է, որը ձևավորվում է կլիմայի, ապարների, բույսերի, կենդանիների և ժամանակի ազդեցությամբ․ դրանով սկիզբ դրվեց հողագիտությանը։ Նա սևահողն անվանեց «հողերի արքա»․ հումուսով հարուստ նրա մուգ շերտը կարող է մեկ մետրից ավելի հաստ լինել։`,
      `**Три климата, три зоны.** Сравни графики. В **Манаусе**, во влажном лесу, жарко каждый месяц и выпадает около 2300 мм дождей в год, поэтому растения растут круглый год, а лес многоярусный. В **Каире** выпадает около 25 мм в год — меньше, чем в Манаусе за один дождливый день, и вне долины Нила почти ничего не растёт. В **Якутске** амплитуда почти 60 °C, от около −39 °C в январе до около +19 °C в июле: лето короткое, но достаточно тёплое для лиственничной тайги, а под городом земля промёрзла на сотни метров, поэтому дома стоят на сваях.

**Царь почв.** Сантиметр плодородной почвы может формироваться от ста до тысячи лет, а смыть его, если земля голая, может один сильный ливень. В 1883 году русский учёный **Василий Докучаев** издал знаменитый труд о чернозёме и показал, что почва — природное тело, которое создают климат, горные породы, растения, животные и время; так началось почвоведение. Он называл чернозём «царём почв»: его тёмный слой, богатый гумусом, бывает толще метра.`,
    ),
    ask(1, {
      en: ["Which place in the graphs has an annual temperature range of almost 60 °C?", ["Yakutsk", "Manaus", "Cairo", "None of them"], "Yakutsk, deep inside Eurasia, goes from about −39 °C in January to about +19 °C in July."],
      hy: ["Գրաֆիկներից ո՞ր վայրում է ջերմաստիճանի տարեկան տատանումը գրեթե 60 °C։", ["Յակուտսկում", "Մանաուսում", "Կահիրեում", "Ոչ մեկում"], "Եվրասիայի խորքում գտնվող Յակուտսկում հունվարի մոտ −39 °C-ից ջերմաստիճանը հասնում է հուլիսի մոտ +19 °C-ի։"],
      ru: ["В каком месте на графиках годовая амплитуда температуры почти 60 °C?", ["В Якутске", "В Манаусе", "В Каире", "Ни в одном"], "В Якутске, в глубине Евразии, от около −39 °C в январе до около +19 °C в июле."],
    }),
  ],
};
