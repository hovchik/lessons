/**
 * Daily puzzles for grades 1–6. Written in week-long runs of the seven
 * themes (numbers, logic, words, chess, shapes, nature, teaser), so a pupil
 * meets a different kind each day. Ids never change; add new ones at the end.
 */
import { gap, match, num, order, q, t } from "../types";
import { mateInOne, type Puzzle } from "./types";

export const juniorPuzzles: Puzzle[] = [
  // Week 1
  {
    id: "j01",
    theme: "numbers",
    q: num(t("I'm thinking of a number. If I add 7 to it, I get 15. What is my number?", "Ես մի թիվ եմ մտապահել։ Եթե նրան գումարեմ 7, կստացվի 15։ Ո՞րն է իմ թիվը։", "Я задумал число. Если прибавить к нему 7, получится 15. Какое число я задумал?"), 8, {
      explanation: t("15 − 7 = 8. Check: 8 + 7 = 15.", "15 − 7 = 8։ Ստուգում՝ 8 + 7 = 15։", "15 − 7 = 8. Проверка: 8 + 7 = 15."),
    }),
    hint: t("Go backwards: take 7 away from 15.", "Գնա՛ հետ․ 15-ից հանի՛ր 7։", "Иди назад: отними 7 от 15."),
  },
  {
    id: "j02",
    theme: "logic",
    q: q(
      t("Ani is taller than Aram. Aram is taller than Davit. Who is the shortest?", "Անին Արամից բարձրահասակ է։ Արամը Դավիթից բարձրահասակ է։ Ո՞վ է ամենացածրահասակը։", "Ани выше Арама. Арам выше Давида. Кто самый низкий?"),
      [t("Ani", "Անին", "Ани"), t("Aram", "Արամը", "Арам"), t("Davit", "Դավիթը", "Давид")],
      2,
      t("From tallest to shortest: Ani, Aram, Davit. So Davit is the shortest.", "Ամենաբարձրից ամենացածր․ Անի, Արամ, Դավիթ։ Ուրեմն ամենացածրը Դավիթն է։", "От самого высокого к самому низкому: Ани, Арам, Давид. Значит, самый низкий — Давид."),
    ),
    hint: t("Line them up from tallest to shortest.", "Շարի՛ր նրանց ամենաբարձրից ամենացածր։", "Поставь их в ряд от самого высокого к самому низкому."),
  },
  {
    id: "j03",
    theme: "words",
    q: q(
      t("Riddle: what gets wetter the more it dries?", "Հանելուկ․ ի՞նչն է ավելի թրջվում, որքան շատ է չորացնում։", "Загадка: что становится мокрее, чем больше сушит?"),
      [t("A towel", "Սրբիչը", "Полотенце"), t("The sun", "Արևը", "Солнце"), t("A sponge cake", "Բիսկվիթը", "Бисквит"), t("The wind", "Քամին", "Ветер")],
      0,
      t("A towel dries you, and the water goes into the towel, so it gets wetter and wetter.", "Սրբիչը չորացնում է քեզ, իսկ ջուրն անցնում է սրբիչին, և այն ավելի ու ավելի է թրջվում։", "Полотенце вытирает тебя насухо, а вода уходит в полотенце, и оно становится всё мокрее."),
    ),
    hint: t("You use it after a bath.", "Այն օգտագործում ես լոգանքից հետո։", "Им пользуются после ванны."),
  },
  mateInOne(
    "j04",
    "6k1/5ppp/8/8/8/8/8/R5K1",
    ["a1a7", "a1a8", "g1f2", "a1e1"],
    1,
    t("The black king is shut in by its own pawns. Look at the top row.", "Սև արքան փակված է իր իսկ զինվորներով։ Նայի՛ր վերին շարքին։", "Чёрный король заперт своими же пешками. Посмотри на верхний ряд."),
    t("Rook to a8 gives check along the top row. The king can't step forward, because its own pawns stand on f7, g7 and h7, and f8 and h8 are on the rook's row. This is called a back-rank mate.", "Նավակը a8-ում շախ է տալիս վերին շարքով։ Արքան չի կարող առաջ գնալ, քանի որ f7, g7 և h7 դաշտերում իր զինվորներն են, իսկ f8-ն ու h8-ը նավակի շարքում են։ Սա կոչվում է վերջին շարքի մատ։", "Ладья на a8 даёт шах по верхнему ряду. Король не может шагнуть вперёд: на f7, g7 и h7 стоят его же пешки, а f8 и h8 — на линии ладьи. Это мат по последней горизонтали."),
  ),
  {
    id: "j05",
    theme: "shapes",
    q: num(t("A triangle and a square lie on the table. How many corners do they have together?", "Սեղանին դրված են մի եռանկյուն և մի քառակուսի։ Միասին քանի՞ անկյուն ունեն։", "На столе лежат треугольник и квадрат. Сколько у них углов вместе?"), 7, {
      explanation: t("A triangle has 3 corners and a square has 4: 3 + 4 = 7.", "Եռանկյունն ունի 3 անկյուն, քառակուսին՝ 4․ 3 + 4 = 7։", "У треугольника 3 угла, у квадрата 4: 3 + 4 = 7."),
    }),
    hint: t("Count each shape on its own. A triangle has 3 corners.", "Հաշվի՛ր ամեն պատկերն առանձին։ Եռանկյունն ունի 3 անկյուն։", "Посчитай углы у каждой фигуры отдельно. У треугольника 3 угла."),
  },
  {
    id: "j06",
    theme: "nature",
    q: q(
      t("Which of these animals is a mammal (feeds its babies with milk)?", "Այս կենդանիներից ո՞րն է կաթնասուն (ձագերին կաթով է կերակրում)։", "Какое из этих животных — млекопитающее (кормит детёнышей молоком)?"),
      [t("Shark", "Շնաձուկը", "Акула"), t("Whale", "Կետը", "Кит"), t("Trout", "Իշխանը", "Форель"), t("Octopus", "Ութոտնուկը", "Осьминог")],
      1,
      t("A whale lives in the sea, but it breathes air and feeds its calf with milk, so it is a mammal, not a fish.", "Կետն ապրում է ծովում, բայց շնչում է օդով և ձագին կաթով է կերակրում, ուստի կաթնասուն է, ոչ թե ձուկ։", "Кит живёт в море, но дышит воздухом и кормит детёныша молоком, поэтому он млекопитающее, а не рыба."),
    ),
    hint: t("It breathes air through a hole on top of its head.", "Այն օդ է շնչում գլխի վերևի անցքով։", "Оно дышит воздухом через отверстие на макушке."),
  },
  {
    id: "j07",
    theme: "teaser",
    q: num(t("A hen lays 1 egg a day. How many eggs do 5 hens lay in 3 days?", "Հավը օրը 1 ձու է ածում։ Քանի՞ ձու կածեն 5 հավը 3 օրում։", "Курица несёт 1 яйцо в день. Сколько яиц снесут 5 кур за 3 дня?"), 15, {
      explanation: t("5 hens lay 5 eggs a day, and 5 × 3 = 15.", "5 հավը օրը 5 ձու է ածում, իսկ 5 × 3 = 15։", "5 кур несут 5 яиц в день, а 5 × 3 = 15."),
    }),
    hint: t("First find how many eggs all the hens lay in one day.", "Նախ գտի՛ր, թե բոլոր հավերը մեկ օրում քանի ձու են ածում։", "Сначала узнай, сколько яиц все куры несут за один день."),
  },

  // Week 2
  {
    id: "j08",
    theme: "numbers",
    q: q(
      t("What number comes next? 2, 4, 8, 16, …", "Ո՞ր թիվն է հաջորդը․ 2, 4, 8, 16, …", "Какое число следующее? 2, 4, 8, 16, …"),
      [t("18", "18", "18"), t("24", "24", "24"), t("32", "32", "32"), t("20", "20", "20")],
      2,
      t("Each number is double the one before: 16 × 2 = 32.", "Յուրաքանչյուր թիվ նախորդի կրկնապատիկն է․ 16 × 2 = 32։", "Каждое число вдвое больше предыдущего: 16 × 2 = 32."),
    ),
    hint: t("Look at how each number grows: 2 → 4 → 8.", "Նայի՛ր, թե ինչպես է աճում թիվը․ 2 → 4 → 8։", "Посмотри, как растёт число: 2 → 4 → 8."),
  },
  {
    id: "j09",
    theme: "logic",
    q: q(
      t("The cat sits to the left of the dog. The rabbit sits to the right of the dog. Who is in the middle?", "Կատուն նստած է շան ձախ կողմում։ Ճագարը նստած է շան աջ կողմում։ Ո՞վ է մեջտեղում։", "Кошка сидит слева от собаки. Кролик сидит справа от собаки. Кто посередине?"),
      [t("The cat", "Կատուն", "Кошка"), t("The dog", "Շունը", "Собака"), t("The rabbit", "Ճագարը", "Кролик")],
      1,
      t("The order is cat, dog, rabbit, so the dog is in the middle.", "Հերթականությունն է՝ կատու, շուն, ճագար, ուրեմն մեջտեղում շունն է։", "По порядку: кошка, собака, кролик. Посередине собака."),
    ),
    hint: t("Draw three seats and put the dog in first.", "Նկարի՛ր երեք աթոռ և նախ շանը նստեցրու։", "Нарисуй три места и сначала посади собаку."),
  },
  {
    id: "j10",
    theme: "words",
    q: gap(
      t("Unscramble the letters to make a fruit: P P L E A", "Դասավորի՛ր տառերն այնպես, որ մի միրգ ստացվի․ Ձ Ն Ր Խ Ո", "Переставь буквы, чтобы получился фрукт: Г Р Ш А У"),
      t("___", "___", "___"),
      [t("apple", "խնձոր", "груша")],
      t("PPLEA → APPLE.", "ՁՆՐԽՈ → ԽՆՁՈՐ։", "ГРШАУ → ГРУША."),
    ),
    hint: t("It is red or green, grows on a tree, and starts with A.", "Կարմիր կամ կանաչ է, աճում է ծառի վրա և սկսվում է Խ տառով։", "Растёт на дереве, похожа на лампочку и начинается на Г."),
  },
  mateInOne(
    "j11",
    "k7/8/1K6/8/8/8/8/2Q5",
    ["c1a3", "c1c7", "c1c8", "b6a6"],
    2,
    t("Your king already guards a7 and b7. Find a check the black king can't run from.", "Քո արքան արդեն պաշտպանում է a7-ն և b7-ը։ Գտի՛ր շախ, որից սև արքան չի կարող փախչել։", "Твой король уже держит a7 и b7. Найди шах, от которого чёрный король не убежит."),
    t("Queen to c8 checks along the top row and also covers b8 and b7, while your king guards a7. The king has no square left: checkmate. Careful: queen to c7 is not check, and the black king has no move at all — that is stalemate, a draw!", "Թագուհին c8-ում շախ է տալիս վերին շարքով և հսկում է b8-ն ու b7-ը, իսկ քո արքան պաշտպանում է a7-ը։ Արքան ազատ դաշտ չունի․ մատ։ Զգո՛ւյշ․ թագուհին c7-ում շախ չի տալիս, իսկ սև արքան ընդհանրապես քայլ չունի․ դա պատ է՝ ոչ-ոքի։", "Ферзь на c8 даёт шах по верхнему ряду и держит b8 и b7, а твой король — a7. Королю некуда идти: мат. Осторожно: ферзь на c7 не даёт шаха, а у чёрного короля нет ни одного хода — это пат, ничья!"),
  ),
  {
    id: "j12",
    theme: "shapes",
    q: q(
      t("A big square is cut into 4 small squares (2 by 2). How many squares can you see in all?", "Մեծ քառակուսին բաժանված է 4 փոքր քառակուսիների (2-ը 2-ի վրա)։ Ընդամենը քանի՞ քառակուսի ես տեսնում։", "Большой квадрат разрезан на 4 маленьких квадрата (2 на 2). Сколько всего квадратов ты видишь?"),
      [t("4", "4", "4"), t("5", "5", "5"), t("6", "6", "6"), t("8", "8", "8")],
      1,
      t("4 small squares plus the big one around them: 5.", "4 փոքր քառակուսի և դրանց շուրջը մեծը․ 5։", "4 маленьких квадрата и один большой вокруг них: 5."),
    ),
    hint: t("Don't forget the big square around all four.", "Մի՛ մոռացիր չորսի շուրջը եղած մեծ քառակուսին։", "Не забудь большой квадрат вокруг всех четырёх."),
  },
  {
    id: "j13",
    theme: "nature",
    q: q(
      t("Which planet is closest to the Sun?", "Ո՞ր մոլորակն է ամենամոտը Արեգակին։", "Какая планета ближе всех к Солнцу?"),
      [t("Earth", "Երկիրը", "Земля"), t("Mars", "Մարսը", "Марс"), t("Mercury", "Մերկուրին", "Меркурий"), t("Venus", "Վեներան", "Венера")],
      2,
      t("The order from the Sun is Mercury, Venus, Earth, Mars… Mercury is also the smallest planet.", "Արեգակից հերթականությունն է՝ Մերկուրի, Վեներա, Երկիր, Մարս… Մերկուրին նաև ամենափոքր մոլորակն է։", "По порядку от Солнца: Меркурий, Венера, Земля, Марс… Меркурий ещё и самая маленькая планета."),
    ),
    hint: t("It is the smallest planet and is named after a fast messenger god.", "Ամենափոքր մոլորակն է և կոչվել է արագոտն աստվածների սուրհանդակի անունով։", "Это самая маленькая планета, названная в честь быстрого бога-вестника."),
  },
  {
    id: "j14",
    theme: "teaser",
    q: q(
      t("Which is heavier: a kilogram of feathers or a kilogram of stones?", "Ո՞րն է ավելի ծանր․ մեկ կիլոգրամ փետո՞ւրը, թե՞ մեկ կիլոգրամ քարը։", "Что тяжелее: килограмм перьев или килограмм камней?"),
      [t("The feathers", "Փետուրը", "Перья"), t("The stones", "Քարը", "Камни"), t("They weigh the same", "Նույնքան են կշռում", "Они весят одинаково")],
      2,
      t("A kilogram is a kilogram! The feathers just take up much more space.", "Կիլոգրամը կիլոգրամ է։ Պարզապես փետուրն ավելի շատ տեղ է զբաղեցնում։", "Килограмм есть килограмм! Просто перья занимают гораздо больше места."),
    ),
    hint: t("Read the question again: how much of each is there?", "Կրկին կարդա՛ հարցը․ որքա՞ն կա յուրաքանչյուրից։", "Перечитай вопрос: сколько там того и другого?"),
  },

  // Week 3
  {
    id: "j15",
    theme: "numbers",
    q: num(t("Lilit has 12 sweets. She gives half to her brother, then eats 2. How many sweets does she have left?", "Լիլիթն ունի 12 կոնֆետ։ Կեսը տալիս է եղբորը, հետո ուտում է 2-ը։ Քանի՞ կոնֆետ մնաց։", "У Лилит 12 конфет. Половину она отдаёт брату, потом съедает 2. Сколько конфет у неё осталось?"), 4, {
      explanation: t("Half of 12 is 6; 6 − 2 = 4.", "12-ի կեսը 6 է․ 6 − 2 = 4։", "Половина от 12 — это 6; 6 − 2 = 4."),
    }),
    hint: t("Do it step by step: first find half of 12.", "Քայլ առ քայլ․ նախ գտի՛ր 12-ի կեսը։", "По шагам: сначала найди половину от 12."),
  },
  {
    id: "j16",
    theme: "logic",
    q: q(
      t("Today is Friday. What day will it be in 3 days?", "Այսօր ուրբաթ է։ Ի՞նչ օր կլինի 3 օր հետո։", "Сегодня пятница. Какой день будет через 3 дня?"),
      [t("Sunday", "Կիրակի", "Воскресенье"), t("Monday", "Երկուշաբթի", "Понедельник"), t("Tuesday", "Երեքշաբթի", "Вторник"), t("Saturday", "Շաբաթ", "Суббота")],
      1,
      t("Friday → Saturday (1) → Sunday (2) → Monday (3).", "Ուրբաթ → շաբաթ (1) → կիրակի (2) → երկուշաբթի (3)։", "Пятница → суббота (1) → воскресенье (2) → понедельник (3)."),
    ),
    hint: t("Count on your fingers: Saturday is one day later.", "Հաշվի՛ր մատներով․ շաբաթը մեկ օր հետո է։", "Посчитай на пальцах: суббота — через один день."),
  },
  {
    id: "j17",
    theme: "words",
    q: q(
      t("Which word is the odd one out?", "Ո՞ր բառն է ավելորդ։", "Какое слово лишнее?"),
      [t("cat", "կատու", "кошка"), t("dog", "շուն", "собака"), t("rose", "վարդ", "роза"), t("horse", "ձի", "лошадь")],
      2,
      t("A cat, a dog and a horse are animals; a rose is a flower.", "Կատուն, շունը և ձին կենդանիներ են, իսկ վարդը ծաղիկ է։", "Кошка, собака и лошадь — животные, а роза — цветок."),
    ),
    hint: t("Three of them can run.", "Նրանցից երեքը կարող են վազել։", "Трое из них умеют бегать."),
  },
  mateInOne(
    "j18",
    "4k3/R7/8/8/8/8/8/1R4K1",
    ["a7a8", "b1e1", "b1b8", "a7e7"],
    2,
    t("One rook already holds the 7th row like a fence. Use the other one.", "Մի նավակն արդեն ցանկապատի պես փակել է 7-րդ շարքը։ Օգտագործի՛ր մյուսը։", "Одна ладья уже держит 7-й ряд, как забор. Используй другую."),
    t("Rook to b8 checks along the top row, and the rook on a7 guards every square of the 7th row. The king is stuck: this is the two-rook \"ladder\" mate.", "Նավակը b8-ում շախ է տալիս վերին շարքով, իսկ a7-ի նավակը հսկում է 7-րդ շարքի բոլոր դաշտերը։ Արքան փակված է․ սա երկու նավակով «սանդուղք» մատն է։", "Ладья на b8 даёт шах по верхнему ряду, а ладья a7 держит весь 7-й ряд. Королю некуда деться: это «лесенка» двумя ладьями."),
  ),
  {
    id: "j19",
    theme: "shapes",
    q: num(t("Each side of a square is 3 cm long. How long is its perimeter, in centimetres?", "Քառակուսու յուրաքանչյուր կողմը 3 սմ է։ Քանի՞ սանտիմետր է նրա պարագիծը։", "Сторона квадрата 3 см. Сколько сантиметров его периметр?"), 12, {
      unit: t("cm", "սմ", "см"),
      explanation: t("A square has 4 equal sides: 3 + 3 + 3 + 3 = 4 × 3 = 12 cm.", "Քառակուսին ունի 4 հավասար կողմ․ 3 + 3 + 3 + 3 = 4 × 3 = 12 սմ։", "У квадрата 4 равные стороны: 3 + 3 + 3 + 3 = 4 × 3 = 12 см."),
    }),
    hint: t("The perimeter is the walk all the way round. How many sides are there?", "Պարագիծը շուրջբոլորը քայլելու ճանապարհն է։ Քանի՞ կողմ կա։", "Периметр — это путь вокруг фигуры. Сколько у неё сторон?"),
  },
  {
    id: "j20",
    theme: "nature",
    q: q(
      t("At what temperature does water freeze into ice?", "Ո՞ր ջերմաստիճանում է ջուրը սառչում և դառնում սառույց։", "При какой температуре вода замерзает и превращается в лёд?"),
      [t("100 °C", "100 °C", "100 °C"), t("0 °C", "0 °C", "0 °C"), t("10 °C", "10 °C", "10 °C"), t("37 °C", "37 °C", "37 °C")],
      1,
      t("Water freezes at 0 °C and boils at 100 °C; 37 °C is the temperature of a healthy person.", "Ջուրը սառչում է 0 °C-ում և եռում 100 °C-ում, իսկ 37 °C-ն առողջ մարդու ջերմաստիճանն է։", "Вода замерзает при 0 °C и кипит при 100 °C, а 37 °C — температура здорового человека."),
    ),
    hint: t("The Celsius scale starts its counting at this point.", "Ցելսիուսի սանդղակը հաշվարկը սկսում է հենց այս կետից։", "С этой точки начинается отсчёт по шкале Цельсия."),
  },
  {
    id: "j21",
    theme: "teaser",
    q: num(t("A brick weighs 1 kg plus half a brick. How many kilograms does a whole brick weigh?", "Աղյուսը կշռում է 1 կգ և ևս կես աղյուս։ Քանի՞ կիլոգրամ է կշռում ամբողջ աղյուսը։", "Кирпич весит 1 кг и ещё полкирпича. Сколько килограммов весит целый кирпич?"), 2, {
      unit: t("kg", "կգ", "кг"),
      explanation: t("Half a brick plus 1 kg makes the whole brick, so the other half is 1 kg. Two halves: 2 kg.", "Կես աղյուսը և 1 կգ-ը միասին ամբողջ աղյուսն են, ուրեմն մյուս կեսը 1 կգ է։ Երկու կես՝ 2 կգ։", "Полкирпича и 1 кг вместе — это целый кирпич, значит, вторая половина весит 1 кг. Две половины: 2 кг."),
    }),
    hint: t("A whole brick is two halves. One half is the \"half a brick\"; what is the other half?", "Ամբողջ աղյուսը երկու կես է։ Մի կեսը «կես աղյուսն» է, իսկ ի՞նչ է մյուս կեսը։", "Целый кирпич — это две половины. Одна — «полкирпича», а что вторая?"),
  },

  // Week 4
  {
    id: "j22",
    theme: "numbers",
    q: num(t("In a magic square every row, column and diagonal adds up to 15. The middle number is 5 and one corner is 2. What number is in the opposite corner?", "Կախարդական քառակուսում յուրաքանչյուր տողի, սյան և անկյունագծի գումարը 15 է։ Կենտրոնի թիվը 5 է, մի անկյունում 2 է։ Ո՞ր թիվն է հակադիր անկյունում։", "В магическом квадрате сумма каждой строки, столбца и диагонали равна 15. В центре 5, в одном углу 2. Какое число в противоположном углу?"), 8, {
      explanation: t("The two corners and the middle lie on one diagonal: 2 + 5 + 8 = 15.", "Երկու անկյուններն ու կենտրոնը մեկ անկյունագծի վրա են․ 2 + 5 + 8 = 15։", "Два угла и центр лежат на одной диагонали: 2 + 5 + 8 = 15."),
    }),
    hint: t("Opposite corners and the middle make a diagonal.", "Հակադիր անկյուններն ու կենտրոնը կազմում են անկյունագիծ։", "Противоположные углы и центр образуют диагональ."),
  },
  {
    id: "j23",
    theme: "logic",
    q: q(
      t("Aram, Ani and Gor have a cat, a dog and a fish, one pet each. Aram can't have pets with fur. Ani's pet barks. Who has the cat?", "Արամը, Անին և Գոռը ունեն կատու, շուն և ձուկ՝ մեկական։ Արամը չի կարող մորթով կենդանի պահել։ Անիի կենդանին հաչում է։ Ո՞ւմն է կատուն։", "У Арама, Ани и Гора есть кошка, собака и рыбка, у каждого по одному питомцу. Араму нельзя держать животных с шерстью. Питомец Ани лает. У кого кошка?"),
      [t("Aram", "Արամինը", "У Арама"), t("Ani", "Անիինը", "У Ани"), t("Gor", "Գոռինը", "У Гора")],
      2,
      t("Ani's pet barks, so Ani has the dog. Aram can't have fur, so he has the fish. The cat is left for Gor.", "Անիի կենդանին հաչում է, ուրեմն Անին ունի շունը։ Արամը մորթով կենդանի չի կարող պահել, ուրեմն նրանն է ձուկը։ Կատուն մնում է Գոռին։", "Питомец Ани лает — у неё собака. Араму нельзя шерсть — у него рыбка. Кошка остаётся Гору."),
    ),
    hint: t("Start with the easy clue: which pet barks?", "Սկսի՛ր հեշտ հուշումից․ ո՞ր կենդանին է հաչում։", "Начни с простой подсказки: кто лает?"),
  },
  {
    id: "j24",
    theme: "words",
    q: gap(
      t("Which word means both a flying animal and the stick you hit a ball with?", "Ո՞ր բառն է նշանակում և՛ կաթի երեսին գոյացող յուղոտ շերտը, և՛ ուժեղ, ջերմ զգացմունքը։", "Какое слово означает и то, чем открывают дверь, и родник, из которого бьёт вода?"),
      t("___", "___", "___"),
      [t("bat", "սեր", "ключ")],
      t("A bat is a flying mammal, and a bat is also used in cricket and baseball. Words like this are called homonyms.", "Սերը կաթի երեսի յուղոտ շերտն է, և սերը նաև սիրո զգացումն է։ Այսպիսի բառերը կոչվում են համանուններ։", "Ключ открывает замок, а ещё ключом называют родник. Такие слова называются омонимами."),
    ),
    hint: t("It has three letters and starts with B.", "Երեք տառ ունի և սկսվում է Ս-ով։", "В нём пять букв, и оно начинается на К."),
  },
  mateInOne(
    "j25",
    "7k/8/5K2/8/8/8/8/6Q1",
    ["g1g8", "g1g6", "g1g7", "g1h1"],
    2,
    t("The queen can go right next to the king if your own king protects her.", "Թագուհին կարող է կանգնել արքայի կողքին, եթե քո արքան պաշտպանում է նրան։", "Ферзь может встать прямо рядом с королём, если его защищает твой король."),
    t("Queen to g7 checks, and the black king can't take her because your king on f6 protects g7. The queen also covers g8 and h7: checkmate. Queen to g6 would leave Black with no move but no check: stalemate, a draw.", "Թագուհին g7-ում շախ է տալիս, և սև արքան չի կարող վերցնել նրան, քանի որ f6-ի քո արքան պաշտպանում է g7-ը։ Թագուհին հսկում է նաև g8-ը և h7-ը․ մատ։ Թագուհին g6-ում կթողներ սևերին առանց քայլի, բայց առանց շախի․ պատ՝ ոչ-ոքի։", "Ферзь на g7 даёт шах, и чёрный король не может его взять: g7 защищает твой король с f6. Ферзь держит ещё g8 и h7 — мат. Ферзь на g6 оставил бы чёрных без ходов, но без шаха: пат, ничья."),
  ),
  {
    id: "j26",
    theme: "shapes",
    q: q(
      t("How many faces does a cube have?", "Քանի՞ նիստ ունի խորանարդը։", "Сколько граней у куба?"),
      [t("4", "4", "4"), t("6", "6", "6"), t("8", "8", "8"), t("12", "12", "12")],
      1,
      t("A cube has 6 square faces, like a dice: top, bottom, front, back, left and right.", "Խորանարդն ունի 6 քառակուսի նիստ, ինչպես զառը․ վերև, ներքև, առջև, հետև, ձախ և աջ։", "У куба 6 квадратных граней, как у игрального кубика: верх, низ, перед, зад, левая и правая."),
    ),
    hint: t("Think of a dice: it shows the numbers 1 to …?", "Մտածի՛ր զառի մասին․ դրա վրա թվերը 1-ից մինչև…՞", "Вспомни игральный кубик: на нём числа от 1 до …?"),
  },
  {
    id: "j27",
    theme: "nature",
    q: q(
      t("Which of these is NOT an insect?", "Սրանցից ո՞րը միջատ ՉԷ։", "Кто из них НЕ насекомое?"),
      [t("Ant", "Մրջյունը", "Муравей"), t("Bee", "Մեղուն", "Пчела"), t("Spider", "Սարդը", "Паук"), t("Butterfly", "Թիթեռը", "Бабочка")],
      2,
      t("Insects have 6 legs. A spider has 8 legs, so it is an arachnid, not an insect.", "Միջատներն ունեն 6 ոտք։ Սարդն ունի 8 ոտք, ուստի սարդակերպ է, ոչ թե միջատ։", "У насекомых 6 ног. У паука 8 ног, поэтому он паукообразное, а не насекомое."),
    ),
    hint: t("Count the legs: insects have 6.", "Հաշվի՛ր ոտքերը․ միջատներն ունեն 6 ոտք։", "Посчитай ноги: у насекомых их 6."),
  },
  {
    id: "j28",
    theme: "teaser",
    q: q(
      t("A snail climbs a 5-metre wall. Every day it climbs up 3 m, and every night it slides back 2 m. On which day does it reach the top?", "Խխունջը բարձրանում է 5 մետրանոց պատով։ Ամեն ցերեկ բարձրանում է 3 մ, իսկ ամեն գիշեր սահում է 2 մ ներքև։ Ո՞ր օրը կհասնի գագաթին։", "Улитка ползёт на стену высотой 5 метров. Днём она поднимается на 3 м, а ночью сползает на 2 м. В какой день она доберётся до верха?"),
      [t("Day 2", "2-րդ օրը", "На 2-й день"), t("Day 3", "3-րդ օրը", "На 3-й день"), t("Day 4", "4-րդ օրը", "На 4-й день"), t("Day 5", "5-րդ օրը", "На 5-й день")],
      1,
      t("Day 1: up to 3 m, night: back to 1 m. Day 2: up to 4 m, night: 2 m. Day 3: up to 5 m — the top! It doesn't slide back once it is there.", "1-ին օր՝ մինչև 3 մ, գիշերը՝ 1 մ։ 2-րդ օր՝ մինչև 4 մ, գիշերը՝ 2 մ։ 3-րդ օր՝ մինչև 5 մ․ գագաթն է։ Այնտեղ հասնելուց հետո այլևս չի սահում։", "День 1: до 3 м, ночью — 1 м. День 2: до 4 м, ночью — 2 м. День 3: до 5 м — это верх! Добравшись, она уже не сползает."),
    ),
    hint: t("Write down where the snail is each morning and each evening.", "Գրի՛ր, թե խխունջը որտեղ է ամեն առավոտ և ամեն երեկո։", "Записывай, где улитка каждое утро и каждый вечер."),
  },

  // Week 5
  {
    id: "j29",
    theme: "numbers",
    q: num(t("Using each of the digits 5, 0 and 3 once, make the smallest three-digit number.", "5, 0 և 3 թվանշաններից յուրաքանչյուրը մեկ անգամ օգտագործելով՝ կազմի՛ր ամենափոքր եռանիշ թիվը։", "Используя цифры 5, 0 и 3 по одному разу, составь самое маленькое трёхзначное число."), 305, {
      explanation: t("A three-digit number can't start with 0, so the smallest start is 3. Then the smallest digit, 0, then 5: 305.", "Եռանիշ թիվը չի կարող սկսվել 0-ով, ուրեմն ամենափոքր սկիզբը 3-ն է։ Հետո ամենափոքր թվանշանը՝ 0, հետո 5․ 305։", "Трёхзначное число не может начинаться с 0, поэтому начнём с 3. Потом самая маленькая цифра 0, потом 5: 305."),
    }),
    hint: t("It can't start with 0. Which digit is the next smallest?", "Չի կարող սկսվել 0-ով։ Ո՞ր թվանշանն է հաջորդ ամենափոքրը։", "Начать с 0 нельзя. Какая цифра следующая по величине?"),
  },
  {
    id: "j30",
    theme: "logic",
    q: q(
      t("All bloops are razzies. All razzies are lazzies. Are all bloops lazzies?", "Բոլոր բլուպները ռազիներ են։ Բոլոր ռազիները լազիներ են։ Բոլոր բլուպները լազինե՞ր են։", "Все блупы — раззи. Все раззи — лаззи. Все ли блупы — лаззи?"),
      [t("Yes", "Այո", "Да"), t("No", "Ոչ", "Нет"), t("We can't tell", "Հնարավոր չէ ասել", "Сказать нельзя")],
      0,
      t("Picture three circles, one inside the other: bloops inside razzies, razzies inside lazzies. Every bloop is inside the lazzies circle too.", "Պատկերացրու երեք շրջան՝ մեկը մյուսի մեջ․ բլուպները ռազիների մեջ, ռազիները՝ լազիների։ Ամեն բլուպ նույնպես լազիների շրջանի մեջ է։", "Представь три круга, один внутри другого: блупы внутри раззи, раззи внутри лаззи. Каждый блуп тоже оказывается внутри круга лаззи."),
    ),
    hint: t("The funny words don't matter. Draw circles inside circles.", "Զվարճալի բառերը կարևոր չեն։ Նկարի՛ր շրջաններ շրջանների մեջ։", "Смешные слова не важны. Нарисуй круги внутри кругов."),
  },
  {
    id: "j31",
    theme: "words",
    q: q(
      t("Which word fits before all three: ___ball, ___man, ___flake?", "Ո՞ր բառից են կազմված ձնագնդի, ձնեմարդ և ձնափաթիլ բառերը։", "От какого слова образованы снежок, снеговик и снежинка?"),
      [t("rain", "ձուկ", "сено"), t("snow", "ձյուն", "снег"), t("sun", "ձի", "сон"), t("foot", "ձմեռ", "сеть")],
      1,
      t("Snowball, snowman, snowflake: all three are made from \"snow\".", "Ձնագնդի, ձնեմարդ, ձնափաթիլ․ երեքն էլ կազմված են «ձյուն» բառից։", "Снежок, снеговик, снежинка — все три слова от слова «снег»."),
    ),
    hint: t("All three things are white and cold.", "Երեքն էլ սպիտակ են և սառը։", "Все три — белые и холодные."),
  },
  mateInOne(
    "j32",
    "k7/8/K7/8/8/8/8/1Q6",
    ["b1b8", "b1b6", "b1h7", "b1b7"],
    3,
    t("Your king on a6 can protect the queen if she comes close.", "a6-ի քո արքան կարող է պաշտպանել թագուհուն, եթե նա մոտենա։", "Твой король на a6 защитит ферзя, если тот подойдёт поближе."),
    t("Queen to b7 checks, and your king on a6 protects her, so the black king can't take. It can't go to b8 or a7 either: checkmate. Queen to b8 can just be taken, and queen to b6 is stalemate.", "Թագուհին b7-ում շախ է տալիս, և a6-ի քո արքան պաշտպանում է նրան, ուստի սև արքան չի կարող վերցնել։ b8 և a7 նույնպես չի կարող գնալ․ մատ։ Թագուհին b8-ում պարզապես կվերցվի, իսկ b6-ում պատ է։", "Ферзь на b7 даёт шах, и его защищает король с a6, поэтому взять нельзя. На b8 и a7 тоже не уйти — мат. Ферзя на b8 просто съедят, а ферзь на b6 — это пат."),
  ),
  {
    id: "j33",
    theme: "shapes",
    q: num(t("A line goes from the top corner of a triangle down to its bottom side. How many triangles can you see now?", "Եռանկյան վերին գագաթից մի գիծ է տարված դեպի ներքևի կողմը։ Այժմ քանի՞ եռանկյուն ես տեսնում։", "Из верхней вершины треугольника провели линию к нижней стороне. Сколько теперь треугольников?"), 3, {
      explanation: t("Two small triangles, one on each side of the line, and the big one they make together: 3.", "Երկու փոքր եռանկյուն՝ գծի երկու կողմերում, և մեծը, որ նրանք միասին կազմում են․ 3։", "Два маленьких треугольника по обе стороны от линии и один большой, который они образуют вместе: 3."),
    }),
    hint: t("Count the small ones, then remember the big one.", "Հաշվի՛ր փոքրերը, հետո հիշի՛ր մեծի մասին։", "Посчитай маленькие, а потом вспомни про большой."),
  },
  {
    id: "j34",
    theme: "nature",
    q: q(
      t("Which is the largest lake in Armenia?", "Ո՞րն է Հայաստանի ամենամեծ լիճը։", "Какое озеро самое большое в Армении?"),
      [t("Arpi", "Արփի", "Арпи"), t("Kari", "Քարի", "Кари"), t("Sevan", "Սևան", "Севан"), t("Parz", "Պարզ", "Парз")],
      2,
      t("Lake Sevan lies about 1900 m above sea level and is one of the largest high-mountain freshwater lakes in the world.", "Սևանա լիճը գտնվում է ծովի մակերևույթից մոտ 1900 մ բարձրության վրա և աշխարհի ամենամեծ բարձրլեռնային քաղցրահամ լճերից է։", "Озеро Севан лежит на высоте около 1900 м над уровнем моря и входит в число крупнейших высокогорных пресных озёр мира."),
    ),
    hint: t("It is called \"the blue pearl of Armenia\".", "Այն կոչում են «Հայաստանի կապույտ մարգարիտ»։", "Его называют «голубой жемчужиной Армении»."),
  },
  {
    id: "j35",
    theme: "teaser",
    q: num(t("How many legs do 3 dogs and 2 chickens have altogether?", "Քանի՞ ոտք ունեն 3 շունը և 2 հավը միասին։", "Сколько всего ног у 3 собак и 2 кур?"), 16, {
      explanation: t("3 dogs × 4 legs = 12, 2 chickens × 2 legs = 4, and 12 + 4 = 16.", "3 շուն × 4 ոտք = 12, 2 հավ × 2 ոտք = 4, և 12 + 4 = 16։", "3 собаки × 4 ноги = 12, 2 курицы × 2 ноги = 4, и 12 + 4 = 16."),
    }),
    hint: t("A dog has 4 legs and a chicken has 2.", "Շունն ունի 4 ոտք, իսկ հավը՝ 2։", "У собаки 4 ноги, у курицы 2."),
  },

  // Week 6
  {
    id: "j36",
    theme: "numbers",
    q: num(t("Gor puts 50 dram into his piggy bank every day for one week. How many dram does he save?", "Գոռը մեկ շաբաթ ամեն օր իր խնայատուփի մեջ 50 դրամ է գցում։ Քանի՞ դրամ կխնայի։", "Гор каждый день целую неделю кладёт в копилку 50 драмов. Сколько драмов он накопит?"), 350, {
      unit: t("dram", "դրամ", "драмов"),
      explanation: t("A week has 7 days: 50 × 7 = 350 dram.", "Շաբաթն ունի 7 օր․ 50 × 7 = 350 դրամ։", "В неделе 7 дней: 50 × 7 = 350 драмов."),
    }),
    hint: t("How many days are there in a week?", "Քանի՞ օր կա շաբաթում։", "Сколько дней в неделе?"),
  },
  {
    id: "j37",
    theme: "logic",
    q: q(
      t("A mother is 30 and her daughter is 6. How old will the mother be when she is exactly twice as old as her daughter?", "Մայրը 30 տարեկան է, իսկ դուստրը՝ 6։ Քանի՞ տարեկան կլինի մայրը, երբ ճիշտ երկու անգամ մեծ լինի դստերից։", "Маме 30 лет, а дочке 6. Сколько лет будет маме, когда она станет ровно вдвое старше дочки?"),
      [t("36", "36", "36"), t("42", "42", "42"), t("48", "48", "48"), t("60", "60", "60")],
      2,
      t("The difference in age is always 24 years. Twice as old means the daughter is 24 and the mother is 48.", "Տարիքների տարբերությունը միշտ 24 տարի է։ Երկու անգամ մեծ նշանակում է՝ դուստրը 24 է, իսկ մայրը՝ 48։", "Разница в возрасте всегда 24 года. «Вдвое старше» значит: дочке 24, а маме 48."),
    ),
    hint: t("The difference between their ages never changes. What is it?", "Նրանց տարիքների տարբերությունը երբեք չի փոխվում։ Որքա՞ն է այն։", "Разница в их возрасте никогда не меняется. Какая она?"),
  },
  {
    id: "j38",
    theme: "words",
    q: q(
      t("Which word is spelled correctly?", "Ո՞ր բառն է ճիշտ գրված։", "Какое слово написано правильно?"),
      [t("freind", "գռիչ", "сабака"), t("friend", "գրիչ", "собака"), t("frend", "քրիչ", "сабоко"), t("friendd", "գրիճ", "собако")],
      1,
      t("\"Friend\": i comes before e here. A handy rhyme: a friend to the END.", "«Գրիչ»՝ գրել բայից, որի մեջ ր է, ոչ թե ռ։", "«Собака» — словарное слово: его надо запомнить, проверить безударную «о» нельзя."),
    ),
    hint: t("A friend is with you to the end: the word ends in -end.", "Մտածի՛ր «գրել» բառի մասին։", "Это словарное слово: первая буква после «с» — «о»."),
  },
  mateInOne(
    "j39",
    "6k1/5ppp/8/8/8/8/1B6/6QK",
    ["b2f6", "g1g7", "g1g5", "g1a1"],
    1,
    t("Look at the long diagonal of your bishop. Which black pawn does it aim at?", "Նայի՛ր փղիդ երկար անկյունագծին։ Սևերի ո՞ր զինվորին է այն նշան բռնում։", "Посмотри на длинную диагональ слона. В какую чёрную пешку она целится?"),
    t("Queen takes on g7 with check. The bishop on b2 protects her along the long diagonal, so the king can't take, and f8 and h8 are covered by the queen: checkmate.", "Թագուհին վերցնում է g7-ը շախով։ b2-ի փիղը պաշտպանում է նրան երկար անկյունագծով, ուստի արքան չի կարող վերցնել, իսկ f8-ն ու h8-ը հսկում է թագուհին․ մատ։", "Ферзь бьёт на g7 с шахом. Слон с b2 защищает его по длинной диагонали, поэтому король взять не может, а f8 и h8 держит ферзь — мат."),
  ),
  {
    id: "j40",
    theme: "shapes",
    q: q(
      t("Which shape has no corners?", "Ո՞ր պատկերը անկյուն չունի։", "У какой фигуры нет углов?"),
      [t("Square", "Քառակուսին", "Квадрат"), t("Circle", "Շրջանը", "Круг"), t("Triangle", "Եռանկյունը", "Треугольник"), t("Rectangle", "Ուղղանկյունը", "Прямоугольник")],
      1,
      t("A circle is one smooth, round line, so it has no corners at all.", "Շրջանը մեկ սահուն, կլոր գիծ է, ուստի ընդհանրապես անկյուն չունի։", "Круг — это одна плавная круглая линия, поэтому углов у него нет."),
    ),
    hint: t("Think of a wheel.", "Մտածի՛ր անիվի մասին։", "Вспомни колесо."),
  },
  {
    id: "j41",
    theme: "nature",
    q: q(
      t("Which part of a plant takes in water from the soil?", "Բույսի ո՞ր մասն է ջուր կլանում հողից։", "Какая часть растения берёт воду из почвы?"),
      [t("The leaf", "Տերևը", "Лист"), t("The flower", "Ծաղիկը", "Цветок"), t("The root", "Արմատը", "Корень"), t("The fruit", "Պտուղը", "Плод")],
      2,
      t("Roots grow under the ground and drink water with minerals; the stem carries it up to the leaves.", "Արմատներն աճում են գետնի տակ և ջուր ու հանքային նյութեր են կլանում, իսկ ցողունն այն տանում է դեպի տերևները։", "Корни растут под землёй и всасывают воду с минеральными веществами, а стебель несёт её к листьям."),
    ),
    hint: t("It is the part you can't see, under the ground.", "Դա այն մասն է, որը չես տեսնում, գետնի տակ է։", "Это та часть, которую не видно, — под землёй."),
  },
  {
    id: "j42",
    theme: "teaser",
    q: q(
      t("If yesterday was Tuesday, what day is tomorrow?", "Եթե երեկ երեքշաբթի էր, ի՞նչ օր է վաղը։", "Если вчера был вторник, какой день будет завтра?"),
      [t("Wednesday", "Չորեքշաբթի", "Среда"), t("Thursday", "Հինգշաբթի", "Четверг"), t("Friday", "Ուրբաթ", "Пятница"), t("Monday", "Երկուշաբթի", "Понедельник")],
      1,
      t("Yesterday Tuesday, so today is Wednesday and tomorrow is Thursday.", "Երեկ երեքշաբթի էր, ուրեմն այսօր չորեքշաբթի է, իսկ վաղը՝ հինգշաբթի։", "Вчера был вторник, значит, сегодня среда, а завтра четверг."),
    ),
    hint: t("First work out what day it is today.", "Նախ պարզի՛ր, թե այսօր ինչ օր է։", "Сначала выясни, какой день сегодня."),
  },

  // Week 7
  {
    id: "j43",
    theme: "numbers",
    q: num(t("How many minutes are there in two and a half hours?", "Քանի՞ րոպե կա երկուսուկես ժամում։", "Сколько минут в двух с половиной часах?"), 150, {
      unit: t("min", "րոպե", "мин"),
      explanation: t("2 hours = 120 minutes, half an hour = 30 minutes: 120 + 30 = 150.", "2 ժամ = 120 րոպե, կես ժամ = 30 րոպե․ 120 + 30 = 150։", "2 часа = 120 минут, полчаса = 30 минут: 120 + 30 = 150."),
    }),
    hint: t("An hour has 60 minutes. Half an hour has …?", "Ժամն ունի 60 րոպե։ Կես ժամը՝ …՞", "В часе 60 минут. А в получасе …?"),
  },
  {
    id: "j44",
    theme: "logic",
    q: order(
      t("Put the animals in order from the smallest to the largest.", "Դասավորի՛ր կենդանիներին ամենափոքրից ամենամեծ։", "Расставь животных от самого маленького до самого большого."),
      [t("Ant", "Մրջյուն", "Муравей"), t("Mouse", "Մուկ", "Мышь"), t("Cat", "Կատու", "Кошка"), t("Horse", "Ձի", "Лошадь"), t("Elephant", "Փիղ", "Слон")],
      t("Ant, mouse, cat, horse, elephant: an elephant can weigh as much as about 10 horses.", "Մրջյուն, մուկ, կատու, ձի, փիղ․ փիղը կարող է կշռել մոտ 10 ձիու չափ։", "Муравей, мышь, кошка, лошадь, слон: слон может весить примерно как 10 лошадей."),
    ),
    hint: t("Which one could sit on your finger? Start with it.", "Ո՞րը կարող է նստել քո մատին։ Սկսի՛ր նրանից։", "Кто поместится у тебя на пальце? С него и начни."),
  },
  {
    id: "j45",
    theme: "words",
    q: match(
      t("Match each baby animal with its parent.", "Միացրու՛ յուրաքանչյուր ձագին իր ծնողի հետ։", "Соедини каждого детёныша с его родителем."),
      [
        [t("lamb", "գառ", "ягнёнок"), t("sheep", "ոչխար", "овца")],
        [t("calf", "հորթ", "телёнок"), t("cow", "կով", "корова")],
        [t("foal", "քուռակ", "жеребёнок"), t("horse", "ձի", "лошадь")],
        [t("puppy", "քոթոթ", "щенок"), t("dog", "շուն", "собака")],
      ],
      t("Lamb → sheep, calf → cow, foal → horse, puppy → dog.", "Գառ → ոչխար, հորթ → կով, քուռակ → ձի, քոթոթ → շուն։", "Ягнёнок → овца, телёнок → корова, жеребёнок → лошадь, щенок → собака."),
    ),
    hint: t("A puppy says \"woof\", just like its mum.", "Քոթոթը հաչում է, ինչպես իր մայրը։", "Щенок тявкает, как его мама."),
  },
  mateInOne(
    "j46",
    "4k3/Q7/4K3/8/8/8/8/8",
    ["a7c7", "e6f6", "a7e7", "a7a1"],
    2,
    t("Bring the queen right up to the king, where your own king can protect her.", "Թագուհուն մոտեցրու հենց արքային, որտեղ քո արքան կարող է պաշտպանել նրան։", "Подведи ферзя прямо к королю — туда, где его защитит твой король."),
    t("Queen to e7 checks. The black king can't take her (your king on e6 protects her), and every square around it is covered: d8 and f8 by the queen, d7 and f7 by both kings' neighbour squares. Checkmate.", "Թագուհին e7-ում շախ է տալիս։ Սև արքան չի կարող վերցնել նրան (e6-ի քո արքան պաշտպանում է), իսկ շուրջը բոլոր դաշտերը հսկվում են․ d8-ն ու f8-ը՝ թագուհով, d7-ն ու f7-ը՝ քո արքայով և թագուհով։ Մատ։", "Ферзь на e7 даёт шах. Взять его нельзя (защищает король с e6), а все поля вокруг под ударом: d8 и f8 — ферзя, d7 и f7 — короля и ферзя. Мат."),
  ),
  {
    id: "j47",
    theme: "shapes",
    q: num(t("How many edges does a cube have?", "Քանի՞ կող ունի խորանարդը։", "Сколько рёбер у куба?"), 12, {
      explanation: t("4 edges around the top, 4 around the bottom and 4 standing up: 12.", "4 կող վերևում, 4-ը՝ ներքևում և 4-ը՝ ուղղահայաց․ 12։", "4 ребра сверху, 4 снизу и 4 вертикальных: 12."),
    }),
    hint: t("Count the top square, the bottom square and the edges that join them.", "Հաշվի՛ր վերևի քառակուսին, ներքևի քառակուսին և դրանք միացնող կողերը։", "Посчитай верхний квадрат, нижний квадрат и рёбра между ними."),
  },
  {
    id: "j48",
    theme: "nature",
    q: q(
      t("Which is the highest mountain in Armenia?", "Ո՞րն է Հայաստանի ամենաբարձր լեռը։", "Какая гора самая высокая в Армении?"),
      [t("Azhdahak", "Աժդահակ", "Аждаак"), t("Kaputjugh", "Կապուտջուղ", "Капутджух"), t("Aragats", "Արագած", "Арагац"), t("Hatis", "Հատիս", "Атис")],
      2,
      t("The northern peak of Aragats is 4090 m high. Ararat is higher, but today it stands outside Armenia's borders.", "Արագածի հյուսիսային գագաթը 4090 մ է։ Արարատն ավելի բարձր է, բայց այսօր Հայաստանի սահմաններից դուրս է։", "Северная вершина Арагаца — 4090 м. Арарат выше, но сегодня он находится за пределами Армении."),
    ),
    hint: t("It has four peaks and snow on top for much of the year.", "Այն ունի չորս գագաթ, և տարվա մեծ մասը գագաթին ձյուն կա։", "У неё четыре вершины, и снег на них лежит большую часть года."),
  },
  {
    id: "j49",
    theme: "teaser",
    q: q(
      t("How many months of the year have 28 days?", "Տարվա քանի՞ ամիս ունի 28 օր։", "Во скольких месяцах года есть 28 дней?"),
      [t("1", "1", "1"), t("2", "2", "2"), t("6", "6", "6"), t("All 12", "Բոլոր 12-ը", "Во всех 12")],
      3,
      t("Every month has at least 28 days, so all 12 have a 28th day. Only February stops there (or at 29).", "Յուրաքանչյուր ամիս ունի առնվազն 28 օր, ուրեմն բոլոր 12-ն էլ ունեն 28-րդ օր։ Միայն փետրվարն է այդտեղ ավարտվում (կամ 29-ում)։", "В каждом месяце не меньше 28 дней, значит, 28-е число есть во всех 12. Только февраль на нём и заканчивается (или на 29-м)."),
    ),
    hint: t("The question isn't \"only 28 days\".", "Հարցը «միայն 28 օր» չէ։", "В вопросе не сказано «только 28 дней»."),
  },
];
