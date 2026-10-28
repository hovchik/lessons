/**
 * Daily puzzles for grades 7–12, in the same week-long runs of themes as
 * the junior ones. Ids never change; add new ones at the end.
 */
import { match, num, order, q, t } from "../types";
import { mateInOne, type Puzzle } from "./types";

export const seniorPuzzles: Puzzle[] = [
  // Week 1
  {
    id: "s01",
    theme: "numbers",
    q: num(t("Three consecutive whole numbers add up to 72. What is the largest of them?", "Երեք հաջորդական ամբողջ թվերի գումարը 72 է։ Ո՞րն է դրանցից ամենամեծը։", "Сумма трёх последовательных целых чисел равна 72. Какое из них самое большое?"), 25, {
      explanation: t("The middle number is 72 ÷ 3 = 24, so the numbers are 23, 24 and 25.", "Միջին թիվը 72 ÷ 3 = 24 է, ուրեմն թվերն են 23, 24 և 25։", "Среднее число 72 ÷ 3 = 24, значит, это 23, 24 и 25."),
    }),
    hint: t("The middle number is the average of the three.", "Միջին թիվը երեքի միջին թվաբանականն է։", "Среднее число — это среднее арифметическое всех трёх."),
  },
  {
    id: "s02",
    theme: "logic",
    q: q(
      t("On an island, knights always tell the truth and knaves always lie. A says: \"B is a knave.\" B says: \"A and I are both knights.\" Who is who?", "Կղզում ասպետները միշտ ճշմարտությունն են ասում, իսկ ստախոսները միշտ ստում են։ Ա-ն ասում է․ «Բ-ն ստախոս է»։ Բ-ն ասում է․ «Ես և Ա-ն երկուսս էլ ասպետ ենք»։ Ո՞վ ով է։", "На острове рыцари всегда говорят правду, а лжецы всегда лгут. A говорит: «B — лжец». B говорит: «Мы с A оба рыцари». Кто есть кто?"),
      [
        t("Both are knights", "Երկուսն էլ ասպետ են", "Оба рыцари"),
        t("A is a knight, B is a knave", "Ա-ն ասպետ է, Բ-ն՝ ստախոս", "A — рыцарь, B — лжец"),
        t("A is a knave, B is a knight", "Ա-ն ստախոս է, Բ-ն՝ ասպետ", "A — лжец, B — рыцарь"),
        t("Both are knaves", "Երկուսն էլ ստախոս են", "Оба лжецы"),
      ],
      1,
      t("If B were a knight, both would be knights, and then A's words \"B is a knave\" would be a lie from a knight: impossible. So B is a knave, A's statement is true, and A is a knight.", "Եթե Բ-ն ասպետ լիներ, երկուսն էլ ասպետ կլինեին, և Ա-ի «Բ-ն ստախոս է» խոսքը ասպետի սուտ կլիներ, ինչն անհնար է։ Ուրեմն Բ-ն ստախոս է, Ա-ի խոսքը ճիշտ է, և Ա-ն ասպետ է։", "Если бы B был рыцарем, оба были бы рыцарями, и слова A «B — лжец» оказались бы ложью рыцаря — так не бывает. Значит, B лжец, слова A правдивы, и A — рыцарь."),
    ),
    hint: t("Suppose B tells the truth and see whether that can work.", "Ենթադրի՛ր, որ Բ-ն ճշմարտությունն է ասում, և տե՛ս՝ դա հնարավո՞ր է։", "Предположи, что B говорит правду, и проверь, может ли так быть."),
  },
  {
    id: "s03",
    theme: "words",
    q: q(
      t("The word \"alphabet\" is made from the names of the first two letters of which alphabet?", "«Այբուբեն» բառը կազմված է ո՞ր տառերի անուններից։", "Слово «алфавит» составлено из названий первых двух букв какого алфавита?"),
      [
        t("Latin", "Լատինական «a» և «b»", "Латинского"),
        t("Greek", "Հայկական «այբ» և «բեն»", "Греческого"),
        t("Arabic", "Հունական «ալֆա» և «բետա»", "Арабского"),
        t("Hebrew", "Արաբական «ալիֆ» և «բա»", "Иврита"),
      ],
      1,
      t("Alpha + beta, the first two Greek letters, gave \"alphabet\". In Armenian the same idea gives այբուբեն: Ayb + Ben.", "Հայերենում այբուբենը կազմված է առաջին երկու տառերի՝ Այբի և Բենի անուններից։ Նույն կերպ հունարենի ալֆա և բետա տառերից առաջացել է «ալֆավիտ» բառը։", "Альфа + бета, первые две греческие буквы, дали слово «алфавит». По-армянски так же: айбубен — это Айб + Бен."),
    ),
    hint: t("Think of the letters alpha and beta.", "Հայոց այբուբենի առաջին տառը Այբն է։", "Вспомни буквы альфа и бета."),
  },
  mateInOne(
    "s04",
    "6rk/6pp/8/6N1/8/8/8/K7",
    ["g5e6", "g5h7", "g5f7", "a1b2"],
    2,
    t("The black king has no room at all. Which piece can give check by jumping?", "Սև արքան ընդհանրապես ազատ դաշտ չունի։ Ո՞ր խաղաքարը կարող է շախ տալ ցատկելով։", "У чёрного короля совсем нет места. Какая фигура даёт шах прыжком?"),
    t("Knight to f7 checks the king on h8. Its own rook and pawns fill g8, g7 and h7, and no black piece can take the knight: this is the famous smothered mate.", "Ձին f7-ում շախ է տալիս h8-ի արքային։ g8-ը, g7-ը և h7-ը զբաղեցված են իր նավակով և զինվորներով, և ոչ մի սև խաղաքար չի կարող վերցնել ձիուն․ սա հայտնի «խեղդված մատն» է։", "Конь на f7 даёт шах королю h8. Поля g8, g7 и h7 заняты своей ладьёй и пешками, и взять коня нечем: это знаменитый спёртый мат."),
  ),
  {
    id: "s05",
    theme: "shapes",
    q: num(t("The legs of a right triangle are 6 and 8. How long is the hypotenuse?", "Ուղղանկյուն եռանկյան էջերն են 6 և 8։ Որքա՞ն է ներքնաձիգը։", "Катеты прямоугольного треугольника равны 6 и 8. Чему равна гипотенуза?"), 10, {
      explanation: t("By Pythagoras: 6² + 8² = 36 + 64 = 100, and √100 = 10.", "Պյութագորասի թեորեմով․ 6² + 8² = 36 + 64 = 100, իսկ √100 = 10։", "По теореме Пифагора: 6² + 8² = 36 + 64 = 100, а √100 = 10."),
    }),
    hint: t("It is the 3–4–5 triangle, doubled.", "Սա 3–4–5 եռանկյունն է՝ կրկնապատկված։", "Это треугольник 3–4–5, только вдвое больше."),
  },
  {
    id: "s06",
    theme: "nature",
    q: q(
      t("Which gas makes up most of the air we breathe?", "Ո՞ր գազն է կազմում մեր շնչած օդի մեծ մասը։", "Какой газ составляет большую часть воздуха, которым мы дышим?"),
      [t("Oxygen", "Թթվածինը", "Кислород"), t("Nitrogen", "Ազոտը", "Азот"), t("Carbon dioxide", "Ածխաթթու գազը", "Углекислый газ"), t("Argon", "Արգոնը", "Аргон")],
      1,
      t("Air is about 78% nitrogen, 21% oxygen and 1% argon, with only about 0.04% carbon dioxide.", "Օդը մոտ 78% ազոտ է, 21%՝ թթվածին և 1%՝ արգոն, իսկ ածխաթթու գազը միայն մոտ 0,04% է։", "Воздух — это примерно 78% азота, 21% кислорода и 1% аргона, а углекислого газа всего около 0,04%."),
    ),
    hint: t("It isn't the one we need to breathe.", "Դա այն գազը չէ, որն անհրաժեշտ է շնչելու համար։", "Это не тот газ, который нужен нам для дыхания."),
  },
  {
    id: "s07",
    theme: "teaser",
    q: num(t("A pen and a notebook cost 1100 dram together. The notebook costs 1000 dram more than the pen. How much does the pen cost?", "Գրիչն ու տետրը միասին արժեն 1100 դրամ։ Տետրը 1000 դրամով թանկ է գրիչից։ Որքա՞ն արժե գրիչը։", "Ручка и тетрадь вместе стоят 1100 драмов. Тетрадь на 1000 драмов дороже ручки. Сколько стоит ручка?"), 50, {
      unit: t("dram", "դրամ", "драмов"),
      explanation: t("If the pen costs x, the notebook costs x + 1000, and x + x + 1000 = 1100, so x = 50. The quick answer \"100\" is wrong: then the notebook would cost 1100 and the total 1200.", "Եթե գրիչն արժե x, տետրն արժե x + 1000, և x + x + 1000 = 1100, ուրեմն x = 50։ Արագ պատասխանը՝ «100», սխալ է․ այդ դեպքում տետրը կարժենար 1100, իսկ ընդամենը՝ 1200։", "Если ручка стоит x, тетрадь стоит x + 1000, и x + x + 1000 = 1100, откуда x = 50. Быстрый ответ «100» неверен: тогда тетрадь стоила бы 1100, а всё вместе — 1200."),
    }),
    hint: t("Check the answer that pops into your head first: does the total come to 1100?", "Ստուգի՛ր առաջին միտքդ եկած պատասխանը․ ընդամենը 1100 ստացվո՞ւմ է։", "Проверь ответ, который пришёл в голову первым: получается ли в сумме 1100?"),
  },

  // Week 2
  {
    id: "s08",
    theme: "numbers",
    q: num(t("What is the last digit of 2¹⁰⁰?", "Ո՞րն է 2¹⁰⁰ թվի վերջին թվանշանը։", "Какая последняя цифра у числа 2¹⁰⁰?"), 6, {
      explanation: t("The last digits of powers of 2 repeat: 2, 4, 8, 6, 2, 4, 8, 6… 100 is divisible by 4, so 2¹⁰⁰ ends like 2⁴: in 6.", "2-ի աստիճանների վերջին թվանշանները կրկնվում են․ 2, 4, 8, 6, 2, 4, 8, 6… 100-ը բաժանվում է 4-ի, ուրեմն 2¹⁰⁰-ը վերջանում է 2⁴-ի պես՝ 6-ով։", "Последние цифры степеней двойки повторяются: 2, 4, 8, 6, 2, 4, 8, 6… 100 делится на 4, значит, 2¹⁰⁰ оканчивается как 2⁴ — на 6."),
    }),
    hint: t("Write the last digits of 2¹, 2², 2³, 2⁴, 2⁵… and look for a pattern.", "Գրի՛ր 2¹, 2², 2³, 2⁴, 2⁵… թվերի վերջին թվանշանները և գտի՛ր օրինաչափությունը։", "Выпиши последние цифры 2¹, 2², 2³, 2⁴, 2⁵… и найди закономерность."),
  },
  {
    id: "s09",
    theme: "logic",
    q: q(
      t("In a race you overtake the runner in second place. What place are you in now?", "Մրցավազքում դու առաջ ես անցնում երկրորդ տեղում վազողից։ Ո՞ր տեղում ես հիմա։", "В забеге ты обгоняешь бегуна, который бежит вторым. Какое у тебя теперь место?"),
      [t("First", "Առաջին", "Первое"), t("Second", "Երկրորդ", "Второе"), t("Third", "Երրորդ", "Третье")],
      1,
      t("You take the place of the runner you passed: second. The leader is still ahead of you.", "Դու զբաղեցնում ես այն վազորդի տեղը, որին անցար՝ երկրորդը։ Առաջատարը դեռ քեզնից առաջ է։", "Ты занимаешь место того, кого обогнал, — второе. Лидер всё ещё впереди."),
    ),
    hint: t("Whose place do you take when you pass someone?", "Ո՞ւմ տեղն ես զբաղեցնում, երբ մեկին առաջ ես անցնում։", "Чьё место ты занимаешь, когда кого-то обгоняешь?"),
  },
  {
    id: "s10",
    theme: "words",
    q: q(
      t("Finish the proverb: \"Don't count your chickens before they …\"", "Ավարտի՛ր առածը․ «Ճտերը … են հաշվում»։", "Закончи пословицу: «Цыплят по … считают»."),
      [t("run", "գարնանը", "весне"), t("hatch", "աշնանը", "осени"), t("sleep", "առավոտյան", "утрам"), t("fly", "ամռանը", "субботам")],
      1,
      t("Don't count your chickens before they hatch: don't be sure of a result before it happens. Armenian and Russian have the same idea: chicks are counted in autumn, when it is clear how many grew up.", "«Ճտերը աշնանն են հաշվում»․ մի՛ վստահիր արդյունքին, մինչև այն չի եղել։ Ռուսերենն ու անգլերենն ունեն նույն միտքը։", "«Цыплят по осени считают»: не радуйся результату раньше времени. Осенью ясно, сколько цыплят выросло. В армянском и английском есть такая же пословица."),
    ),
    hint: t("It happens when a chick comes out of its egg.", "Աշնանն է պարզ լինում, թե քանի ճուտ է մեծացել։", "Осенью становится ясно, сколько цыплят выросло."),
  },
  mateInOne(
    "s11",
    "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR",
    ["c4f7", "f3h5", "f3f7", "f3e3"],
    2,
    t("f7 is the weakest square in Black's camp: only the king defends it. Two of your pieces aim at it.", "f7-ը սևերի ամենաթույլ դաշտն է․ այն պաշտպանում է միայն արքան։ Քո երկու խաղաքար նշան են բռնել այդ դաշտը։", "f7 — самое слабое поле у чёрных: его защищает только король. На него нацелены две твои фигуры."),
    t("Queen takes f7: check, and the bishop on c4 protects her, so the king can't take. d8 and f8 are blocked by Black's own pieces and e7 is covered by the queen. This is the Scholar's mate. Bishop takes f7 is only check: the king steps to e7.", "Թագուհին վերցնում է f7-ը․ շախ, և c4-ի փիղը պաշտպանում է նրան, ուստի արքան չի կարող վերցնել։ d8-ն ու f8-ը փակված են սևերի իսկ խաղաքարերով, իսկ e7-ը հսկում է թագուհին։ Սա «դպրոցական մատն» է։ Փղով f7-ը վերցնելը միայն շախ է․ արքան գնում է e7։", "Ферзь бьёт f7: шах, и его защищает слон с c4, поэтому король взять не может. d8 и f8 заняты своими фигурами, e7 держит ферзь. Это «детский мат». Взятие слоном на f7 — только шах: король уходит на e7."),
  ),
  {
    id: "s12",
    theme: "shapes",
    q: num(t("What is the sum of the interior angles of a hexagon, in degrees?", "Որքա՞ն է վեցանկյան ներքին անկյունների գումարը աստիճաններով։", "Чему равна сумма внутренних углов шестиугольника в градусах?"), 720, {
      unit: t("°", "°", "°"),
      explanation: t("A polygon with n sides splits into n − 2 triangles: (6 − 2) × 180° = 720°.", "n կողմ ունեցող բազմանկյունը բաժանվում է n − 2 եռանկյունների․ (6 − 2) × 180° = 720°։", "Многоугольник с n сторонами делится на n − 2 треугольника: (6 − 2) × 180° = 720°."),
    }),
    hint: t("Cut it into triangles from one corner. How many do you get?", "Մի գագաթից կտրի՛ր եռանկյունների։ Քանի՞սն ստացվեց։", "Разрежь его на треугольники из одной вершины. Сколько получится?"),
  },
  {
    id: "s13",
    theme: "nature",
    q: q(
      t("Which element has the chemical symbol Fe?", "Ո՞ր տարրի քիմիական նշանն է Fe։", "У какого элемента химический символ Fe?"),
      [t("Fluorine", "Ֆտոր", "Фтор"), t("Iron", "Երկաթ", "Железо"), t("Lead", "Կապար", "Свинец"), t("Francium", "Ֆրանսիում", "Франций")],
      1,
      t("Fe comes from the Latin word for iron, ferrum. Fluorine is F, lead is Pb (plumbum) and francium is Fr.", "Fe-ն առաջացել է երկաթի լատիներեն անունից՝ ferrum։ Ֆտորը F է, կապարը՝ Pb (plumbum), ֆրանսիումը՝ Fr։", "Fe — от латинского названия железа, ferrum. Фтор — F, свинец — Pb (plumbum), франций — Fr."),
    ),
    hint: t("Think of the Latin word ferrum.", "Մտածի՛ր լատիներեն ferrum բառի մասին։", "Вспомни латинское слово ferrum."),
  },
  {
    id: "s14",
    theme: "teaser",
    q: num(t("5 machines make 5 gadgets in 5 minutes. How many minutes do 100 machines need to make 100 gadgets?", "5 մեքենան 5 րոպեում պատրաստում է 5 սարք։ Քանի՞ րոպե է պետք 100 մեքենային 100 սարք պատրաստելու համար։", "5 станков делают 5 деталей за 5 минут. Сколько минут нужно 100 станкам, чтобы сделать 100 деталей?"), 5, {
      unit: t("min", "րոպե", "мин"),
      explanation: t("Each machine makes one gadget in 5 minutes. 100 machines working at once make 100 gadgets in the same 5 minutes.", "Յուրաքանչյուր մեքենա 5 րոպեում մեկ սարք է պատրաստում։ 100 մեքենան միաժամանակ աշխատելով նույն 5 րոպեում կպատրաստի 100 սարք։", "Каждый станок делает одну деталь за 5 минут. 100 станков, работая одновременно, сделают 100 деталей за те же 5 минут."),
    }),
    hint: t("How long does one machine take to make one gadget?", "Որքա՞ն ժամանակում է մեկ մեքենան պատրաստում մեկ սարք։", "За сколько минут один станок делает одну деталь?"),
  },

  // Week 3
  {
    id: "s15",
    theme: "numbers",
    q: num(t("How many zeros are at the end of 10! = 1 × 2 × 3 × … × 10?", "Քանի՞ զրո կա 10! = 1 × 2 × 3 × … × 10 թվի վերջում։", "Сколько нулей в конце числа 10! = 1 × 2 × 3 × … × 10?"), 2, {
      explanation: t("Each zero needs a pair 2 × 5. Among 1…10 there are two fives (5 and 10) and plenty of twos, so 10! = 3 628 800 ends in 2 zeros.", "Յուրաքանչյուր զրոյի համար պետք է 2 × 5 զույգ։ 1…10-ում երկու հնգյակ կա (5 և 10) և շատ երկուսներ, ուրեմն 10! = 3 628 800 վերջանում է 2 զրոյով։", "Каждый ноль даёт пара 2 × 5. Среди 1…10 две пятёрки (5 и 10) и много двоек, поэтому 10! = 3 628 800 оканчивается на 2 нуля."),
    }),
    hint: t("A zero at the end comes from 10 = 2 × 5. Count the fives.", "Վերջի զրոն առաջանում է 10 = 2 × 5-ից։ Հաշվի՛ր հնգյակները։", "Ноль в конце даёт 10 = 2 × 5. Посчитай пятёрки."),
  },
  {
    id: "s16",
    theme: "logic",
    q: num(t("A farmer must take a wolf, a goat and a cabbage across a river. The boat holds the farmer and one of them. The wolf can't be left alone with the goat, nor the goat with the cabbage. What is the smallest number of crossings?", "Գյուղացին պետք է գետի մյուս ափը տանի գայլին, այծին և կաղամբը։ Նավակում տեղավորվում են գյուղացին և դրանցից մեկը։ Գայլին չի կարելի մենակ թողնել այծի հետ, ոչ էլ այծին՝ կաղամբի հետ։ Նվազագույնը քանի՞ անգամ պետք է անցնել գետը։", "Крестьянину нужно перевезти через реку волка, козу и капусту. В лодке помещаются крестьянин и кто-то один. Волка нельзя оставить с козой, а козу с капустой. Какое наименьшее число переправ?"), 7, {
      explanation: t("Goat over; back; wolf over; goat back; cabbage over; back; goat over: 7 crossings. The trick is bringing the goat back once.", "Այծը՝ այն կողմ, դատարկ՝ ետ, գայլը՝ այն կողմ, այծը՝ ետ, կաղամբը՝ այն կողմ, դատարկ՝ ետ, այծը՝ այն կողմ․ 7 անցում։ Գաղտնիքն այն է, որ այծին մեկ անգամ ետ են բերում։", "Коза туда; обратно; волк туда; коза обратно; капуста туда; обратно; коза туда — 7 переправ. Хитрость в том, чтобы один раз привезти козу обратно."),
    }),
    hint: t("The goat must go first, and at some point it has to ride back.", "Այծը պետք է գնա առաջինը, և մի պահ նրան պետք է ետ բերել։", "Коза едет первой, и в какой-то момент её придётся везти обратно."),
  },
  {
    id: "s17",
    theme: "words",
    q: num(t("How many letters did Mesrop Mashtots create for the Armenian alphabet in 405?", "Քանի՞ տառ ստեղծեց Մեսրոպ Մաշտոցը հայոց այբուբենի համար 405 թվականին։", "Сколько букв создал Месроп Маштоц для армянского алфавита в 405 году?"), 36, {
      explanation: t("Mashtots created 36 letters. Two more, Օ and Ֆ, were added in the Middle Ages, giving 38.", "Մաշտոցը ստեղծեց 36 տառ։ Միջնադարում ավելացան ևս երկուսը՝ Օ-ն և Ֆ-ն, և դարձան 38։", "Маштоц создал 36 букв. В Средние века добавили ещё две, Օ и Ֆ, и стало 38."),
    }),
    hint: t("Today the alphabet has 38 letters, and two of them were added later.", "Այսօր այբուբենն ունի 38 տառ, որոնցից երկուսը ավելացվել են ավելի ուշ։", "Сегодня в алфавите 38 букв, и две из них добавили позже."),
  },
  mateInOne(
    "s18",
    "7k/R7/5N2/8/8/8/8/K7",
    ["a7a8", "a7g7", "f6d7", "a7h7"],
    3,
    t("Your knight on f6 already guards two squares next to the king. Which are they?", "f6-ի քո ձին արդեն հսկում է արքայի կողքի երկու դաշտ։ Որո՞նք են դրանք։", "Твой конь на f6 уже держит два поля рядом с королём. Какие?"),
    t("Rook to h7 checks, and the knight on f6 protects it, so the king can't take. The knight also covers g8, and the rook covers g7: checkmate. This pattern is called the Arabian mate, one of the oldest known.", "Նավակը h7-ում շախ է տալիս, և f6-ի ձին պաշտպանում է այն, ուստի արքան չի կարող վերցնել։ Ձին հսկում է նաև g8-ը, իսկ նավակը՝ g7-ը․ մատ։ Այս ձևը կոչվում է «արաբական մատ», ամենահին հայտնիներից մեկը։", "Ладья на h7 даёт шах, и её защищает конь с f6, так что король взять не может. Конь держит ещё g8, а ладья — g7: мат. Это «арабский мат», один из древнейших известных."),
  ),
  {
    id: "s19",
    theme: "shapes",
    q: num(t("A circle has a radius of 5 cm. What is its area in cm²? Use π ≈ 3.14.", "Շրջանի շառավիղը 5 սմ է։ Որքա՞ն է նրա մակերեսը սմ²-ով։ Վերցրու՛ π ≈ 3,14։", "Радиус круга 5 см. Чему равна его площадь в см²? Возьми π ≈ 3,14."), 78.5, {
      tolerance: 0.1,
      unit: t("cm²", "սմ²", "см²"),
      explanation: t("S = πr² = 3.14 × 25 = 78.5 cm².", "S = πr² = 3,14 × 25 = 78,5 սմ²։", "S = πr² = 3,14 × 25 = 78,5 см²."),
    }),
    hint: t("The area of a circle is π times the radius squared.", "Շրջանի մակերեսը π-ի և շառավղի քառակուսու արտադրյալն է։", "Площадь круга — это π, умноженное на квадрат радиуса."),
  },
  {
    id: "s20",
    theme: "nature",
    q: q(
      t("About how long does sunlight take to reach the Earth?", "Մոտավորապես որքա՞ն ժամանակում է Արեգակի լույսը հասնում Երկիր։", "Примерно за сколько времени солнечный свет доходит до Земли?"),
      [t("8 seconds", "8 վայրկյան", "8 секунд"), t("8 minutes", "8 րոպե", "8 минут"), t("8 hours", "8 ժամ", "8 часов"), t("8 days", "8 օր", "8 дней")],
      1,
      t("The Sun is about 150 million km away and light travels about 300 000 km a second: 150 000 000 ÷ 300 000 = 500 s, a little over 8 minutes.", "Արեգակը մոտ 150 միլիոն կմ հեռու է, իսկ լույսը վայրկյանում անցնում է մոտ 300 000 կմ․ 150 000 000 ÷ 300 000 = 500 վ, մի փոքր ավելի, քան 8 րոպե։", "До Солнца около 150 млн км, а свет проходит около 300 000 км в секунду: 150 000 000 ÷ 300 000 = 500 с, чуть больше 8 минут."),
    ),
    hint: t("Divide 150 million km by 300 000 km per second.", "150 միլիոն կմ-ը բաժանի՛ր վայրկյանում 300 000 կմ-ի։", "Раздели 150 млн км на 300 000 км в секунду."),
  },
  {
    id: "s21",
    theme: "teaser",
    q: num(t("A clock shows 3:15. What is the angle between the hour hand and the minute hand, in degrees?", "Ժամացույցը ցույց է տալիս 3:15։ Քանի՞ աստիճան է ժամի և րոպեի սլաքների միջև եղած անկյունը։", "Часы показывают 3:15. Какой угол в градусах между часовой и минутной стрелками?"), 7.5, {
      tolerance: 0.01,
      unit: t("°", "°", "°"),
      explanation: t("The minute hand points at 3 (90°). In 15 minutes the hour hand has moved a quarter of the way from 3 to 4: 30° ÷ 4 = 7.5°. So the angle is 7.5°, not 0°.", "Րոպեի սլաքը ցույց է տալիս 3 (90°)։ 15 րոպեում ժամի սլաքն անցել է 3-ից 4 ճանապարհի քառորդը․ 30° ÷ 4 = 7,5°։ Ուրեմն անկյունը 7,5° է, ոչ թե 0°։", "Минутная стрелка указывает на 3 (90°). За 15 минут часовая прошла четверть пути от 3 до 4: 30° ÷ 4 = 7,5°. Значит, угол 7,5°, а не 0°."),
    }),
    hint: t("The hour hand doesn't wait on the 3: in 15 minutes it moves too.", "Ժամի սլաքը 3-ի վրա չի սպասում․ 15 րոպեում այն նույնպես շարժվում է։", "Часовая стрелка не стоит на 3: за 15 минут она тоже сдвигается."),
  },

  // Week 4
  {
    id: "s22",
    theme: "numbers",
    q: num(t("What is the first prime number after 89?", "Ո՞րն է 89-ից հետո առաջին պարզ թիվը։", "Какое первое простое число после 89?"), 97, {
      explanation: t("90, 92, 94, 96 are even; 91 = 7 × 13; 93 = 3 × 31; 95 = 5 × 19. 97 has no divisors other than 1 and itself.", "90, 92, 94, 96-ը զույգ են, 91 = 7 × 13, 93 = 3 × 31, 95 = 5 × 19։ 97-ը 1-ից և իրենից բացի բաժանարար չունի։", "90, 92, 94, 96 чётные; 91 = 7 × 13; 93 = 3 × 31; 95 = 5 × 19. У 97 нет делителей, кроме 1 и самого себя."),
    }),
    hint: t("Watch out for 91: try dividing it by 7.", "Զգո՛ւյշ 91-ի հետ․ փորձի՛ր այն բաժանել 7-ի։", "Осторожно с 91: попробуй разделить его на 7."),
  },
  {
    id: "s23",
    theme: "logic",
    q: num(t("\"In 3 years I'll be twice as old as I was 3 years ago.\" How old am I?", "«3 տարի հետո ես երկու անգամ մեծ կլինեմ, քան 3 տարի առաջ էի»։ Քանի՞ տարեկան եմ։", "«Через 3 года я буду вдвое старше, чем был 3 года назад». Сколько мне лет?"), 9, {
      explanation: t("x + 3 = 2(x − 3), so x + 3 = 2x − 6 and x = 9. Check: 12 is twice 6.", "x + 3 = 2(x − 3), ուրեմն x + 3 = 2x − 6 և x = 9։ Ստուգում՝ 12-ը 6-ի կրկնապատիկն է։", "x + 3 = 2(x − 3), то есть x + 3 = 2x − 6 и x = 9. Проверка: 12 вдвое больше 6."),
    }),
    hint: t("Call the age x and write the sentence as an equation.", "Տարիքը նշանակի՛ր x և նախադասությունը գրի՛ր հավասարման տեսքով։", "Обозначь возраст через x и запиши фразу уравнением."),
  },
  {
    id: "s24",
    theme: "words",
    q: q(
      t("Which word is NOT a synonym of \"brave\"?", "Ո՞ր բառը «քաջ» բառի հոմանիշ ՉԷ։", "Какое слово НЕ синоним слова «храбрый»?"),
      [t("bold", "խիզախ", "смелый"), t("fearless", "անվախ", "бесстрашный"), t("timid", "երկչոտ", "робкий"), t("courageous", "արի", "отважный")],
      2,
      t("Timid means shy and easily frightened: it is an antonym of brave, not a synonym.", "Երկչոտ նշանակում է վախկոտ, ամաչկոտ․ դա «քաջ» բառի հականիշն է, ոչ թե հոմանիշը։", "«Робкий» значит пугливый, несмелый — это антоним слова «храбрый», а не синоним."),
    ),
    hint: t("Look for the word that means the opposite.", "Փնտրի՛ր հակառակ իմաստ ունեցող բառը։", "Ищи слово с противоположным значением."),
  },
  mateInOne(
    "s25",
    "4k3/5p2/8/6B1/8/8/8/3R2K1",
    ["d1e1", "g5e7", "d1d8", "d1d7"],
    2,
    t("Your bishop already looks at d8 and e7. Can the rook use that?", "Քո փիղն արդեն նայում է d8-ին և e7-ին։ Կարո՞ղ է նավակն օգտվել դրանից։", "Твой слон уже смотрит на d8 и e7. Может ли ладья этим воспользоваться?"),
    t("Rook to d8 checks along the back row. The bishop on g5 protects the rook and covers e7; the rook covers d7 and f8, and f7 holds Black's own pawn: checkmate.", "Նավակը d8-ում շախ է տալիս վերջին շարքով։ g5-ի փիղը պաշտպանում է նավակին և հսկում e7-ը, նավակը հսկում է d7-ը և f8-ը, իսկ f7-ում սևերի իսկ զինվորն է․ մատ։", "Ладья на d8 даёт шах по последнему ряду. Слон g5 защищает ладью и держит e7, ладья держит d7 и f8, а на f7 стоит своя пешка — мат."),
  ),
  {
    id: "s26",
    theme: "shapes",
    q: num(t("How many diagonals does a hexagon have?", "Քանի՞ անկյունագիծ ունի վեցանկյունը։", "Сколько диагоналей у шестиугольника?"), 9, {
      explanation: t("From each of the 6 corners you can draw 3 diagonals (not to itself or its two neighbours). 6 × 3 = 18 counts each diagonal twice: 9.", "6 գագաթներից յուրաքանչյուրից կարելի է տանել 3 անկյունագիծ (ոչ իրեն և ոչ էլ երկու հարևաններին)։ 6 × 3 = 18-ում յուրաքանչյուր անկյունագիծ երկու անգամ է հաշվված․ 9։", "Из каждой из 6 вершин можно провести 3 диагонали (не к себе и не к двум соседям). В 6 × 3 = 18 каждая диагональ посчитана дважды: 9."),
    }),
    hint: t("Count the diagonals from one corner, then be careful not to count any twice.", "Հաշվի՛ր մի գագաթից ելնող անկյունագծերը և զգույշ եղիր՝ ոչ մեկը երկու անգամ չհաշվես։", "Посчитай диагонали из одной вершины и следи, чтобы не посчитать дважды."),
  },
  {
    id: "s27",
    theme: "nature",
    q: q(
      t("Roughly how fast does sound travel through air?", "Մոտավորապես ի՞նչ արագությամբ է ձայնը տարածվում օդում։", "Примерно с какой скоростью распространяется звук в воздухе?"),
      [t("34 m/s", "34 մ/վ", "34 м/с"), t("340 m/s", "340 մ/վ", "340 м/с"), t("3400 m/s", "3400 մ/վ", "3400 м/с"), t("300 000 km/s", "300 000 կմ/վ", "300 000 км/с")],
      1,
      t("About 340 m/s: count the seconds between lightning and thunder and divide by 3 to get the distance in kilometres. 300 000 km/s is the speed of light.", "Մոտ 340 մ/վ․ հաշվի՛ր կայծակի և որոտի միջև եղած վայրկյանները, բաժանի՛ր 3-ի և կստանաս հեռավորությունը կիլոմետրերով։ 300 000 կմ/վ-ն լույսի արագությունն է։", "Около 340 м/с: посчитай секунды между молнией и громом и раздели на 3 — получишь расстояние в километрах. 300 000 км/с — это скорость света."),
    ),
    hint: t("Thunder from a storm 1 km away arrives about 3 seconds after the flash.", "1 կմ հեռավորության վրա գտնվող ամպրոպից որոտը լսվում է փայլատակումից մոտ 3 վայրկյան հետո։", "Гром от грозы в 1 км приходит примерно через 3 секунды после вспышки."),
  },
  {
    id: "s28",
    theme: "teaser",
    q: q(
      t("A prize is behind one of 3 doors. You pick door 1. The host, who knows where the prize is, opens door 3: it's empty. He lets you switch to door 2. What should you do?", "Մրցանակը 3 դռներից մեկի հետևում է։ Դու ընտրում ես 1-ին դուռը։ Հաղորդավարը, որը գիտի մրցանակի տեղը, բացում է 3-րդ դուռը․ այն դատարկ է։ Նա թույլ է տալիս փոխել ընտրությունը 2-րդ դռան վրա։ Ի՞նչ պետք է անես։", "Приз за одной из 3 дверей. Ты выбираешь дверь 1. Ведущий, который знает, где приз, открывает дверь 3 — она пустая. Он предлагает поменять выбор на дверь 2. Как поступить?"),
      [
        t("It doesn't matter: each door is 50/50", "Միևնույն է․ յուրաքանչյուր դուռ 50/50 է", "Неважно: у каждой двери 50/50"),
        t("Switch: you win 2 times out of 3", "Փոխել․ կշահես 3 դեպքից 2-ում", "Поменять: выиграешь в 2 случаях из 3"),
        t("Stay: the first choice is luckier", "Մնալ․ առաջին ընտրությունն ավելի հաջողակ է", "Остаться: первый выбор удачнее"),
      ],
      1,
      t("Your first pick is right 1 time in 3, so 2 times in 3 the prize is behind one of the other doors — and the host has just shown you which one. This is the Monty Hall problem.", "Առաջին ընտրությունդ ճիշտ է 3 դեպքից 1-ում, ուրեմն 3 դեպքից 2-ում մրցանակը մյուս դռներից մեկի հետևում է, և հաղորդավարը հենց նոր ցույց տվեց, թե որի։ Սա Մոնտի Հոլի խնդիրն է։", "Первый выбор верен в 1 случае из 3, значит, в 2 случаях из 3 приз за одной из других дверей — и ведущий только что показал, за какой. Это парадокс Монти Холла."),
    ),
    hint: t("How likely was your first pick to be right, before any door opened?", "Որքա՞ն էր հավանականությունը, որ առաջին ընտրությունդ ճիշտ է, նախքան որևէ դուռ բացվելը։", "Каковы были шансы, что первый выбор верен, ещё до того, как открыли дверь?"),
  },

  // Week 5
  {
    id: "s29",
    theme: "numbers",
    q: num(t("The average of four numbers is 15. Three of them are 10, 12 and 20. What is the fourth?", "Չորս թվի միջին թվաբանականը 15 է։ Դրանցից երեքն են 10, 12 և 20։ Ո՞րն է չորրորդը։", "Среднее арифметическое четырёх чисел равно 15. Три из них — 10, 12 и 20. Каково четвёртое?"), 18, {
      explanation: t("The four numbers add up to 4 × 15 = 60. 60 − (10 + 12 + 20) = 60 − 42 = 18.", "Չորս թվերի գումարը 4 × 15 = 60 է։ 60 − (10 + 12 + 20) = 60 − 42 = 18։", "Сумма четырёх чисел 4 × 15 = 60. 60 − (10 + 12 + 20) = 60 − 42 = 18."),
    }),
    hint: t("First find the total of all four numbers.", "Նախ գտի՛ր չորս թվերի գումարը։", "Сначала найди сумму всех четырёх чисел."),
  },
  {
    id: "s30",
    theme: "logic",
    q: q(
      t("All A are B. Some B are C. Must some A be C?", "Բոլոր A-երը B են։ Որոշ B-եր C են։ Պարտադի՞ր է, որ որոշ A-եր լինեն C։", "Все A — это B. Некоторые B — это C. Обязательно ли некоторые A — это C?"),
      [t("Yes, always", "Այո, միշտ", "Да, всегда"), t("No, never", "Ոչ, երբեք", "Нет, никогда"), t("Not necessarily", "Պարտադիր չէ", "Не обязательно")],
      2,
      t("The B's that are C may all be outside A. Example: all cats are animals, some animals fly — but no cat flies.", "C եղող B-երը կարող են բոլորը A-ից դուրս լինել։ Օրինակ՝ բոլոր կատուները կենդանիներ են, որոշ կենդանիներ թռչում են, բայց ոչ մի կատու չի թռչում։", "Те B, которые C, могут все лежать вне A. Пример: все кошки — животные, некоторые животные летают, но ни одна кошка не летает."),
    ),
    hint: t("Try it with cats, animals and things that fly.", "Փորձի՛ր կատուներով, կենդանիներով և թռչողներով։", "Попробуй на кошках, животных и тех, кто летает."),
  },
  {
    id: "s31",
    theme: "words",
    q: q(
      t("The word \"algebra\" comes from the title of a book by which scholar?", "«Հանրահաշիվ» գիտության միջազգային անունը՝ «ալգեբրա», առաջացել է ո՞ր գիտնականի գրքի վերնագրից։", "Слово «алгебра» происходит от названия книги какого учёного?"),
      [t("Euclid", "Էվկլիդեսի", "Евклида"), t("Al-Khwarizmi", "Ալ-Խորեզմիի", "Аль-Хорезми"), t("Pythagoras", "Պյութագորասի", "Пифагора"), t("Anania Shirakatsi", "Անանիա Շիրակացու", "Анании Ширакаци")],
      1,
      t("Around 820 the Persian scholar al-Khwarizmi wrote a book with \"al-jabr\" (restoring) in its title. His own name gave us the word \"algorithm\".", "Մոտ 820 թվականին պարսիկ գիտնական ալ-Խորեզմին գրեց մի գիրք, որի վերնագրում կար «ալ-ջաբր» (վերականգնում) բառը։ Նրա անունից էլ առաջացել է «ալգորիթմ» բառը։", "Около 820 года персидский учёный аль-Хорезми написал книгу, в названии которой было слово «аль-джабр» (восполнение). От его имени произошло слово «алгоритм»."),
    ),
    hint: t("His name also gave us the word \"algorithm\".", "Նրա անունից է առաջացել նաև «ալգորիթմ» բառը։", "От его имени произошло и слово «алгоритм»."),
  },
  mateInOne(
    "s32",
    "5rk1/5ppp/8/6NQ/8/8/8/6K1",
    ["g5h7", "h5f7", "h5h7", "g5e6"],
    2,
    t("h7 is attacked twice and defended only by the king.", "h7-ը երկու անգամ է հարձակման տակ, իսկ պաշտպանում է միայն արքան։", "Поле h7 атаковано дважды, а защищает его только король."),
    t("Queen takes h7: check. The knight on g5 protects her, so the king can't take; f8 is blocked by the rook and the queen covers h8: checkmate. Queen takes f7 is only check, because the rook takes back.", "Թագուհին վերցնում է h7-ը․ շախ։ g5-ի ձին պաշտպանում է նրան, ուստի արքան չի կարող վերցնել, f8-ը փակված է նավակով, իսկ h8-ը հսկում է թագուհին․ մատ։ Թագուհով f7-ը վերցնելը միայն շախ է, քանի որ նավակը հետ է վերցնում։", "Ферзь бьёт h7: шах. Его защищает конь с g5, поэтому король взять не может; f8 занят ладьёй, а h8 держит ферзь — мат. Взятие ферзём на f7 — лишь шах: ладья побьёт в ответ."),
  ),
  {
    id: "s33",
    theme: "shapes",
    q: num(t("The angles of a triangle are in the ratio 1 : 2 : 3. What is the largest angle, in degrees?", "Եռանկյան անկյունները հարաբերում են ինչպես 1 ․ 2 ․ 3։ Քանի՞ աստիճան է ամենամեծ անկյունը։", "Углы треугольника относятся как 1 : 2 : 3. Чему равен наибольший угол в градусах?"), 90, {
      unit: t("°", "°", "°"),
      explanation: t("1 + 2 + 3 = 6 parts make 180°, so one part is 30° and the largest angle is 3 × 30° = 90°.", "1 + 2 + 3 = 6 մասը կազմում է 180°, ուրեմն մեկ մասը 30° է, իսկ ամենամեծ անկյունը՝ 3 × 30° = 90°։", "1 + 2 + 3 = 6 частей составляют 180°, значит, одна часть 30°, а наибольший угол 3 × 30° = 90°."),
    }),
    hint: t("The three angles of a triangle add up to 180°.", "Եռանկյան երեք անկյունների գումարը 180° է։", "Сумма трёх углов треугольника равна 180°."),
  },
  {
    id: "s34",
    theme: "nature",
    q: q(
      t("The Armenian astronomer Viktor Ambartsumian founded which observatory in 1946?", "Հայ աստղագետ Վիկտոր Համբարձումյանը 1946 թվականին ո՞ր աստղադիտարանը հիմնադրեց։", "Какую обсерваторию основал армянский астроном Виктор Амбарцумян в 1946 году?"),
      [t("Pulkovo", "Պուլկովոյի", "Пулковскую"), t("Byurakan", "Բյուրականի", "Бюраканскую"), t("Greenwich", "Գրինվիչի", "Гринвичскую"), t("Palomar", "Պալոմարի", "Паломарскую")],
      1,
      t("The Byurakan Observatory stands on the slope of Mount Aragats. Ambartsumian's work there on how stars and galaxies form made him one of the best-known astronomers of the 20th century.", "Բյուրականի աստղադիտարանը գտնվում է Արագածի լանջին։ Աստղերի և գալակտիկաների առաջացման մասին Համբարձումյանի աշխատանքները նրան դարձրին 20-րդ դարի ամենահայտնի աստղագետներից մեկը։", "Бюраканская обсерватория стоит на склоне Арагаца. Работы Амбарцумяна о рождении звёзд и галактик сделали его одним из самых известных астрономов XX века."),
    ),
    hint: t("It is on the slope of Mount Aragats.", "Այն Արագածի լանջին է։", "Она находится на склоне Арагаца."),
  },
  {
    id: "s35",
    theme: "teaser",
    q: num(t("How many times a day do the hour hand and the minute hand of a clock point in exactly the same direction?", "Օրվա ընթացքում քանի՞ անգամ են ժամացույցի ժամի և րոպեի սլաքները ճիշտ նույն ուղղությամբ ցույց տալիս։", "Сколько раз в сутки часовая и минутная стрелки указывают точно в одну сторону?"), 22, {
      explanation: t("In 12 hours the minute hand goes round 12 times and the hour hand once, so the minute hand laps it 11 times. In 24 hours: 22.", "12 ժամում րոպեի սլաքը պտտվում է 12 անգամ, իսկ ժամի սլաքը՝ մեկ անգամ, ուստի րոպեի սլաքը նրան հասնում է 11 անգամ։ 24 ժամում՝ 22։", "За 12 часов минутная стрелка делает 12 оборотов, а часовая — один, поэтому минутная догоняет её 11 раз. За сутки — 22."),
    }),
    hint: t("They don't meet between 11 and 1 except at 12 itself.", "11-ի և 1-ի միջև նրանք հանդիպում են միայն ուղիղ 12-ին։", "Между 11 и 1 они встречаются только ровно в 12."),
  },

  // Week 6
  {
    id: "s36",
    theme: "numbers",
    q: num(t("1 + 2 + 3 + … + 100 = ?", "1 + 2 + 3 + … + 100 = ?", "1 + 2 + 3 + … + 100 = ?"), 5050, {
      explanation: t("Pair the ends: 1 + 100, 2 + 99, … each pair is 101, and there are 50 pairs: 50 × 101 = 5050. Young Carl Gauss is said to have found this trick at school.", "Զույգերով․ 1 + 100, 2 + 99, … յուրաքանչյուր զույգը 101 է, իսկ զույգերը 50-ն են․ 50 × 101 = 5050։ Ասում են, որ փոքրիկ Կառլ Գաուսն այս հնարքը գտել է դպրոցում։", "Сложи по парам: 1 + 100, 2 + 99, … каждая пара даёт 101, а пар 50: 50 × 101 = 5050. Говорят, этот приём нашёл ещё школьником Карл Гаусс."),
    }),
    hint: t("Add the first and the last, the second and the second last…", "Գումարի՛ր առաջինն ու վերջինը, երկրորդն ու նախավերջինը…", "Сложи первое с последним, второе с предпоследним…"),
  },
  {
    id: "s37",
    theme: "logic",
    q: num(t("A water lily doubles in size every day. On day 30 it covers the whole pond. On which day did it cover half of the pond?", "Ջրաշուշանն ամեն օր կրկնապատկվում է։ 30-րդ օրը այն ծածկում է ամբողջ լճակը։ Ո՞ր օրն էր ծածկում լճակի կեսը։", "Кувшинка каждый день увеличивается вдвое. На 30-й день она закрывает весь пруд. В какой день она закрывала половину пруда?"), 29, {
      explanation: t("It doubles each day, so one day before the whole pond it covered half: day 29.", "Այն ամեն օր կրկնապատկվում է, ուրեմն ամբողջ լճակից մեկ օր առաջ ծածկում էր կեսը․ 29-րդ օրը։", "Она удваивается каждый день, значит, за день до всего пруда закрывала половину: на 29-й день."),
    }),
    hint: t("Go one day backwards from the full pond.", "Գնա՛ մեկ օր ետ՝ ամբողջ լճակից։", "Отступи на один день назад от полного пруда."),
  },
  {
    id: "s38",
    theme: "words",
    q: q(
      t("Which of these words is an acronym (made from the first letters of other words)?", "Ո՞րն է հապավում (կազմված այլ բառերի սկզբնատառերից)։", "Какое из этих слов — аббревиатура (составлено из первых букв других слов)?"),
      [t("table", "սեղան", "стол"), t("river", "գետ", "река"), t("radar", "ԵՊՀ", "вуз"), t("music", "տուն", "дом")],
      2,
      t("Radar = RAdio Detection And Ranging. People use it as an ordinary word and forget it was ever an acronym.", "ԵՊՀ = Երևանի պետական համալսարան։ Հապավումները կազմվում են բառերի սկզբնատառերից։", "Вуз = высшее учебное заведение. Это слово так привыкли писать строчными, что его часто не узнают как аббревиатуру."),
    ),
    hint: t("It is a machine that finds planes and ships with radio waves.", "Դա Հայաստանի ամենահին համալսարանի կրճատ անունն է։", "Так коротко называют университеты и институты."),
  },
  mateInOne(
    "s39",
    "3rkr2/8/8/8/8/8/Q7/6K1",
    ["a2e2", "a2a4", "a2e6", "a2a8"],
    2,
    t("Black's rooks stand on both sides of their king like epaulettes on a uniform. Use that.", "Սևերի նավակները կանգնած են արքայի երկու կողմերում, ինչպես ուսադիրները համազգեստի վրա։ Օգտվի՛ր դրանից։", "Чёрные ладьи стоят по бокам короля, как эполеты на мундире. Воспользуйся этим."),
    t("Queen to e6 checks down the e-file. The king can't step aside because its own rooks block d8 and f8, and the queen covers d7, e7 and f7: this is the epaulette mate.", "Թագուհին e6-ում շախ է տալիս e ուղղաձիգով։ Արքան չի կարող կողք գնալ, քանի որ d8-ն ու f8-ը փակել են իր նավակները, իսկ d7-ը, e7-ը և f7-ը հսկում է թագուհին․ սա «ուսադիրների մատն» է։", "Ферзь на e6 даёт шах по вертикали e. Отойти вбок король не может: d8 и f8 заняты его ладьями, а d7, e7 и f7 держит ферзь. Это «эполетный мат»."),
  ),
  {
    id: "s40",
    theme: "shapes",
    q: num(t("A cube has a volume of 64 cm³. What is its total surface area, in cm²?", "Խորանարդի ծավալը 64 սմ³ է։ Որքա՞ն է նրա լրիվ մակերևույթի մակերեսը սմ²-ով։", "Объём куба 64 см³. Чему равна площадь его полной поверхности в см²?"), 96, {
      unit: t("cm²", "սմ²", "см²"),
      explanation: t("The edge is the cube root of 64: 4 cm. Each face is 4 × 4 = 16 cm², and 6 faces give 96 cm².", "Կողը 64-ի խորանարդ արմատն է՝ 4 սմ։ Յուրաքանչյուր նիստ 4 × 4 = 16 սմ² է, իսկ 6 նիստը՝ 96 սմ²։", "Ребро — кубический корень из 64: 4 см. Каждая грань 4 × 4 = 16 см², а 6 граней — 96 см²."),
    }),
    hint: t("First find the edge: which number times itself three times gives 64?", "Նախ գտի՛ր կողը․ ո՞ր թիվն ինքն իրենով երեք անգամ բազմապատկելիս կտա 64։", "Сначала найди ребро: какое число, умноженное само на себя трижды, даёт 64?"),
  },
  {
    id: "s41",
    theme: "nature",
    q: q(
      t("About how many bones does an adult human skeleton have?", "Մոտավորապես քանի՞ ոսկոր ունի մեծահասակ մարդու կմախքը։", "Примерно сколько костей в скелете взрослого человека?"),
      [t("106", "106", "106"), t("206", "206", "206"), t("306", "306", "306"), t("406", "406", "406")],
      1,
      t("An adult has about 206 bones. A newborn baby has around 300, but many of them grow together as the child gets older.", "Մեծահասակն ունի մոտ 206 ոսկոր։ Նորածինն ունի մոտ 300, բայց դրանցից շատերը մեծանալիս միաձուլվում են։", "У взрослого около 206 костей. У новорождённого их около 300, но многие с возрастом срастаются."),
    ),
    hint: t("More than 200, fewer than 300.", "200-ից ավելի, 300-ից պակաս։", "Больше 200, но меньше 300."),
  },
  {
    id: "s42",
    theme: "teaser",
    q: num(t("Boiling one egg takes 3 minutes. How many minutes does it take to boil 3 eggs together in one pot?", "Մեկ ձուն եփվում է 3 րոպեում։ Քանի՞ րոպեում կեփվեն 3 ձուն միասին՝ մեկ կաթսայում։", "Одно яйцо варится 3 минуты. Сколько минут будут вариться 3 яйца вместе в одной кастрюле?"), 3, {
      unit: t("min", "րոպե", "мин"),
      explanation: t("They all boil at the same time, so it still takes 3 minutes.", "Բոլորը միաժամանակ են եփվում, ուստի դարձյալ 3 րոպե է պետք։", "Они варятся одновременно, поэтому нужно всё те же 3 минуты."),
    }),
    hint: t("Do the eggs take turns in the pot?", "Ձվերը կաթսայում հերթո՞վ են եփվում։", "Разве яйца варятся по очереди?"),
  },

  // Week 7
  {
    id: "s43",
    theme: "numbers",
    q: num(t("Find x: 2ˣ = 1024.", "Գտի՛ր x-ը․ 2ˣ = 1024։", "Найди x: 2ˣ = 1024."), 10, {
      explanation: t("2¹⁰ = 1024: that is why a kilobyte was long taken as 1024 bytes.", "2¹⁰ = 1024․ դրա համար էլ կիլոբայթը երկար ժամանակ համարվում էր 1024 բայթ։", "2¹⁰ = 1024: поэтому килобайт долго считали равным 1024 байтам."),
    }),
    hint: t("Keep doubling: 2, 4, 8, 16, 32… and count the steps.", "Կրկնապատկի՛ր․ 2, 4, 8, 16, 32… և հաշվի՛ր քայլերը։", "Удваивай: 2, 4, 8, 16, 32… и считай шаги."),
  },
  {
    id: "s44",
    theme: "logic",
    q: order(
      t("Put these inventions in time order, the oldest first.", "Դասավորի՛ր գյուտերը ըստ ժամանակի՝ ամենահնից սկսած։", "Расставь изобретения по времени, начиная с самого древнего."),
      [
        t("The wheel", "Անիվը", "Колесо"),
        t("Gutenberg's printing press", "Գուտենբերգի տպագրական մեքենան", "Печатный станок Гутенберга"),
        t("The steam engine", "Շոգեմեքենան", "Паровая машина"),
        t("The telephone", "Հեռախոսը", "Телефон"),
        t("The World Wide Web", "Համաշխարհային սարդոստայնը (WWW)", "Всемирная паутина (WWW)"),
      ],
      t("Wheel (about 5500 years ago), printing press (about 1450), steam engine (1700s), telephone (1876), World Wide Web (1989–1991).", "Անիվ (մոտ 5500 տարի առաջ), տպագրական մեքենա (մոտ 1450), շոգեմեքենա (18-րդ դար), հեռախոս (1876), WWW (1989–1991)։", "Колесо (около 5500 лет назад), печатный станок (около 1450 г.), паровая машина (XVIII век), телефон (1876), WWW (1989–1991)."),
    ),
    hint: t("Which of them could people in ancient times already use?", "Դրանցից ո՞րը կարող էին օգտագործել դեռ հին ժամանակներում։", "Чем из этого могли пользоваться ещё в древности?"),
  },
  {
    id: "s45",
    theme: "words",
    q: match(
      t("Match each writer with their native language.", "Միացրու՛ յուրաքանչյուր գրողին իր մայրենի լեզվի հետ։", "Соедини каждого писателя с его родным языком."),
      [
        [t("Hovhannes Tumanyan", "Հովհաննես Թումանյան", "Ованес Туманян"), t("Armenian", "հայերեն", "армянский")],
        [t("Alexander Pushkin", "Ալեքսանդր Պուշկին", "Александр Пушкин"), t("Russian", "ռուսերեն", "русский")],
        [t("William Shakespeare", "Ուիլյամ Շեքսպիր", "Уильям Шекспир"), t("English", "անգլերեն", "английский")],
        [t("Miguel de Cervantes", "Միգել դե Սերվանտես", "Мигель де Сервантес"), t("Spanish", "իսպաներեն", "испанский")],
      ],
      t("Tumanyan wrote \"Anush\" and \"Gikor\", Pushkin \"Eugene Onegin\", Shakespeare \"Hamlet\" and Cervantes \"Don Quixote\".", "Թումանյանը գրել է «Անուշ» և «Գիքոր», Պուշկինը՝ «Եվգենի Օնեգին», Շեքսպիրը՝ «Համլետ», Սերվանտեսը՝ «Դոն Կիխոտ»։", "Туманян написал «Ануш» и «Гикор», Пушкин — «Евгения Онегина», Шекспир — «Гамлета», Сервантес — «Дон Кихота»."),
    ),
    hint: t("Cervantes wrote \"Don Quixote\".", "Սերվանտեսը գրել է «Դոն Կիխոտը»։", "Сервантес написал «Дон Кихота»."),
  },
  mateInOne(
    "s46",
    "5rk1/6p1/6P1/7Q/8/8/8/6K1",
    ["h5h8", "h5h6", "h5h7", "g1h1"],
    2,
    t("Your pawn on g6 can protect a square right next to the king.", "g6-ի քո զինվորը կարող է պաշտպանել արքայի կողքի մի դաշտ։", "Твоя пешка на g6 может защитить поле рядом с королём."),
    t("Queen to h7 checks, and the pawn on g6 protects her. The king can't go to f8 (its own rook) or f7 (the pawn covers it), and h8 is covered by the queen: checkmate.", "Թագուհին h7-ում շախ է տալիս, և g6-ի զինվորը պաշտպանում է նրան։ Արքան չի կարող գնալ f8 (իր նավակն է) կամ f7 (զինվորն է հսկում), իսկ h8-ը հսկում է թագուհին․ մատ։", "Ферзь на h7 даёт шах, и его защищает пешка g6. Королю нельзя на f8 (своя ладья) и на f7 (бьёт пешка), а h8 держит ферзь — мат."),
  ),
  {
    id: "s47",
    theme: "shapes",
    q: num(t("How many squares of any size are there on a chessboard (8 × 8)?", "Քանի՞ քառակուսի (ցանկացած չափի) կա շախմատի տախտակի (8 × 8) վրա։", "Сколько квадратов любого размера на шахматной доске (8 × 8)?"), 204, {
      explanation: t("64 of size 1, 49 of size 2, 36 of size 3, … 1 of size 8: 64 + 49 + 36 + 25 + 16 + 9 + 4 + 1 = 204.", "1 չափի՝ 64, 2 չափի՝ 49, 3 չափի՝ 36, … 8 չափի՝ 1․ 64 + 49 + 36 + 25 + 16 + 9 + 4 + 1 = 204։", "Размера 1 — 64, размера 2 — 49, размера 3 — 36, … размера 8 — 1: 64 + 49 + 36 + 25 + 16 + 9 + 4 + 1 = 204."),
    }),
    hint: t("Count the 2 × 2 squares: there are 7 positions across and 7 down.", "Հաշվի՛ր 2 × 2 քառակուսիները․ հորիզոնական 7 դիրք կա և ուղղահայաց՝ 7։", "Посчитай квадраты 2 × 2: по горизонтали 7 положений и по вертикали 7."),
  },
  {
    id: "s48",
    theme: "nature",
    q: q(
      t("At about what temperature does water boil near the top of Mount Aragats (about 4000 m high)?", "Մոտավորապես ո՞ր ջերմաստիճանում է ջուրը եռում Արագածի գագաթի մոտ (մոտ 4000 մ բարձրություն)։", "Примерно при какой температуре кипит вода у вершины Арагаца (около 4000 м)?"),
      [t("100 °C", "100 °C", "100 °C"), t("About 87 °C", "Մոտ 87 °C", "Около 87 °C"), t("About 110 °C", "Մոտ 110 °C", "Около 110 °C"), t("0 °C", "0 °C", "0 °C")],
      1,
      t("High up the air pressure is lower, so water boils at a lower temperature: at 4000 m about 87 °C. That is why pasta cooks more slowly in the mountains.", "Բարձրում օդի ճնշումն ավելի ցածր է, ուստի ջուրը եռում է ավելի ցածր ջերմաստիճանում․ 4000 մ-ում՝ մոտ 87 °C։ Դրա համար էլ լեռներում մակարոնն ավելի դանդաղ է եփվում։", "Высоко в горах давление ниже, поэтому вода кипит при более низкой температуре: на 4000 м около 87 °C. Вот почему в горах макароны варятся дольше."),
    ),
    hint: t("Air pressure is lower in the mountains.", "Լեռներում օդի ճնշումն ավելի ցածր է։", "В горах давление воздуха ниже."),
  },
  {
    id: "s49",
    theme: "teaser",
    q: num(t("A rope ladder hangs over the side of a ship. 10 rungs are above the water, 30 cm apart. The tide rises by 90 cm. How many rungs are above the water now?", "Նավի կողից պարանե սանդուղք է կախված։ Ջրից վեր 10 աստիճան կա՝ 30 սմ իրարից հեռու։ Մակընթացությունից ջուրը բարձրանում է 90 սմ։ Քանի՞ աստիճան է հիմա ջրից վեր։", "С борта корабля свисает верёвочная лестница. Над водой 10 ступенек, расстояние между ними 30 см. Прилив поднимает воду на 90 см. Сколько ступенек теперь над водой?"), 10, {
      explanation: t("The ship floats, so it rises with the water, and so does the ladder: still 10 rungs.", "Նավը լողում է, ուստի բարձրանում է ջրի հետ, իսկ նրա հետ էլ՝ սանդուղքը․ դարձյալ 10 աստիճան։", "Корабль плавает и поднимается вместе с водой, а с ним и лестница: по-прежнему 10 ступенек."),
    }),
    hint: t("What does a ship do when the water rises?", "Ի՞նչ է անում նավը, երբ ջուրը բարձրանում է։", "Что происходит с кораблём, когда вода поднимается?"),
  },
];
