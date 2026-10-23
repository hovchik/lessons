import { t, unit, q, type CourseSeed } from "../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const math: CourseSeed[] = [
  {
    subject: "math",
    grade: 1,
    title: t("Mathematics · Grade 1", "Մաթեմատիկա · 1-ին դասարան", "Математика · 1 класс"),
    description: t(
      "Counting to 20, comparing numbers, addition and subtraction within 20, shapes, and simple measurement.",
      "Հաշվել մինչև 20, թվերի համեմատում, գումարում և հանում 20-ի սահմաններում, ձևեր և պարզ չափումներ։",
      "Счёт до 20, сравнение чисел, сложение и вычитание в пределах 20, фигуры и простые измерения.",
    ),
    curriculumNotes: notes(
      [
        "Armenian grade 1 (new 2021 standard): numbers 0–20, place value of ten, addition and subtraction within 20, length and time, geometric shapes. Assessment is descriptive, without marks.",
        "Հայաստանի 1-ին դասարան (2021-ի նոր չափորոշիչ)՝ 0–20 թվեր, տասնյակի հասկացություն, գումարում և հանում 20-ի սահմաններում, երկարություն և ժամանակ, երկրաչափական ձևեր։ Գնահատումը նկարագրական է, առանց նիշերի։",
        "Армянский 1 класс (новый стандарт 2021): числа 0–20, понятие десятка, сложение и вычитание в пределах 20, длина и время, геометрические фигуры. Оценивание описательное, без отметок.",
      ],
      [
        "Russian grade 1 (ФГОС НОО, 4 h/week): numbers 1–20, composition of numbers, addition and subtraction within 20 (including crossing ten), word problems in one step, length in cm/dm, points, segments and polygons.",
        "Ռուսաստանի 1-ին դասարան (ФГОС НОО, 4 ժ/շաբ.)՝ 1–20 թվեր, թվի կազմություն, գումարում և հանում 20-ի սահմաններում (տասնյակի անցումով), միաքայլ խնդիրներ, երկարություն սմ/դմ, կետ, հատված, բազմանկյուն։",
        "Российский 1 класс (ФГОС НОО, 4 ч/нед.): числа 1–20, состав числа, сложение и вычитание в пределах 20 с переходом через десяток, простые текстовые задачи, длина в см/дм, точка, отрезок, многоугольник.",
      ],
    ),
    hoursPerWeek: { armenia: 5, russia: 4 },
    units: [
      {
        title: t("Numbers from 1 to 10", "Թվերը 1-ից 10", "Числа от 1 до 10"),
        summary: t(
          "Learning to count, read and write the first ten numbers and to compare them.",
          "Սովորում ենք հաշվել, կարդալ և գրել առաջին տասը թվերը և համեմատել դրանք։",
          "Учимся считать, читать и записывать первые десять чисел и сравнивать их.",
        ),
        lessons: [
          {
            slug: "counting-objects",
            title: t("Counting objects", "Առարկաներ հաշվելը", "Счёт предметов"),
            durationMin: 40,
            objectives: {
              en: ["Count up to 10 objects one by one", "Match a group of objects to a number", "Understand that the last number said tells how many"],
              hy: ["Հաշվել մինչև 10 առարկա՝ մեկ առ մեկ", "Առարկաների խումբը համապատասխանեցնել թվին", "Հասկանալ, որ վերջին ասված թիվը ցույց է տալիս քանակը"],
              ru: ["Считать до 10 предметов по одному", "Соотносить группу предметов с числом", "Понимать, что последнее названное число показывает количество"],
            },
            content: {
              en: `## Let's count!

Look around you. How many windows are in the room? How many fingers are on your hand?

When we **count**, we point to each object once and say the next number: **1, 2, 3, 4, 5, 6, 7, 8, 9, 10**.

The last number we say tells us **how many** objects there are.

### Try it

🍎 🍎 🍎 — one, two, **three** apples.

⭐ ⭐ ⭐ ⭐ ⭐ — one, two, three, four, **five** stars.

### Rules of counting

1. Touch or point to every object **once**.
2. Do not skip any object and do not count one twice.
3. Say the numbers in order.
4. The last number is the answer.

### Practice

- Count the pencils in your pencil case.
- Count the chairs at the table.
- Clap your hands 7 times. Count each clap out loud.

### Fun fact

People have counted on their fingers for thousands of years. That is one reason we use a system based on **ten**!`,
              hy: `## Եկեք հաշվենք

Նայիր շուրջդ։ Քանի՞ պատուհան է սենյակում։ Քանի՞ մատ է ձեռքիդ վրա։

Երբ **հաշվում** ենք, ցույց ենք տալիս յուրաքանչյուր առարկան մեկ անգամ և ասում ենք հաջորդ թիվը՝ **1, 2, 3, 4, 5, 6, 7, 8, 9, 10**։

Վերջին ասված թիվը ցույց է տալիս, **քանի՞** առարկա կա։

### Փորձիր

🍎 🍎 🍎 — մեկ, երկու, **երեք** խնձոր։

⭐ ⭐ ⭐ ⭐ ⭐ — մեկ, երկու, երեք, չորս, **հինգ** աստղ։

### Հաշվելու կանոնները

1. Յուրաքանչյուր առարկային դիպչիր կամ ցույց տուր **մեկ անգամ**։
2. Ոչ մի առարկա բաց մի թող և նույն առարկան երկու անգամ մի հաշվիր։
3. Թվերն ասա հերթականությամբ։
4. Վերջին թիվը պատասխանն է։

### Վարժություն

- Հաշվիր մատիտները քո մատիտատուփում։
- Հաշվիր աթոռները սեղանի շուրջ։
- Ծափ տուր 7 անգամ։ Յուրաքանչյուր ծափը բարձրաձայն հաշվիր։

### Հետաքրքիր փաստ

Մարդիկ հազարավոր տարիներ հաշվել են մատների վրա։ Դա է պատճառներից մեկը, որ մենք օգտագործում ենք **տասնյակի** վրա հիմնված համակարգ։`,
              ru: `## Давайте считать!

Посмотри вокруг. Сколько окон в комнате? Сколько пальцев на твоей руке?

Когда мы **считаем**, мы показываем на каждый предмет один раз и называем следующее число: **1, 2, 3, 4, 5, 6, 7, 8, 9, 10**.

Последнее названное число показывает, **сколько** всего предметов.

### Попробуй

🍎 🍎 🍎 — один, два, **три** яблока.

⭐ ⭐ ⭐ ⭐ ⭐ — один, два, три, четыре, **пять** звёзд.

### Правила счёта

1. Дотронься до каждого предмета или покажи на него **один раз**.
2. Не пропускай предметы и не считай один предмет дважды.
3. Называй числа по порядку.
4. Последнее число — ответ.

### Практика

- Посчитай карандаши в своём пенале.
- Посчитай стулья за столом.
- Хлопни в ладоши 7 раз. Считай каждый хлопок вслух.

### Интересный факт

Люди тысячи лет считали на пальцах. Поэтому мы и пользуемся системой, основанной на **десяти**!`,
            },
            quiz: [
              q(t("How many stars? ⭐⭐⭐⭐", "Քանի՞ աստղ կա։ ⭐⭐⭐⭐", "Сколько звёзд? ⭐⭐⭐⭐"), [t("3", "3", "3"), t("4", "4", "4"), t("5", "5", "5")], 1),
              q(
                t("What number comes after 6?", "Ո՞ր թիվն է 6-ից հետո։", "Какое число идёт после 6?"),
                [t("5", "5", "5"), t("7", "7", "7"), t("8", "8", "8")],
                1,
              ),
              q(
                t("When we count, the last number we say tells us…", "Հաշվելիս վերջին ասված թիվը ցույց է տալիս…", "Когда мы считаем, последнее названное число показывает…"),
                [t("how many objects there are", "քանի առարկա կա", "сколько всего предметов"), t("the biggest object", "ամենամեծ առարկան", "самый большой предмет"), t("nothing", "ոչինչ", "ничего")],
                0,
              ),
            ],
          },
          {
            slug: "writing-digits",
            title: t("Reading and writing digits 1–5", "1–5 թվանշանների կարդալը և գրելը", "Чтение и запись цифр 1–5"),
            durationMin: 40,
            objectives: {
              en: ["Recognise the digits 1, 2, 3, 4, 5", "Write each digit neatly in a cell", "Connect a digit to the quantity it shows"],
              hy: ["Ճանաչել 1, 2, 3, 4, 5 թվանշանները", "Յուրաքանչյուր թվանշանը կոկիկ գրել վանդակում", "Թվանշանը կապել իր ցույց տված քանակի հետ"],
              ru: ["Узнавать цифры 1, 2, 3, 4, 5", "Аккуратно писать каждую цифру в клетке", "Связывать цифру с количеством, которое она обозначает"],
            },
            content: {
              en: `## Digits are the letters of mathematics

A **digit** is a sign we write to show a number. There are only ten digits: 0 1 2 3 4 5 6 7 8 9. Today we practise the first five.

| Digit | How many | Say |
|---|---|---|
| 1 | ● | one |
| 2 | ● ● | two |
| 3 | ● ● ● | three |
| 4 | ● ● ● ● | four |
| 5 | ● ● ● ● ● | five |

### How to write each digit

- **1** — start at the top, draw a straight line down.
- **2** — a small curve to the right, then a slanted line down to the left, then a straight line along the bottom.
- **3** — two small curves, one above the other, both open to the left.
- **4** — a line down, a line to the right, then a tall line down through it.
- **5** — a line down, a curve like a belly, then a flat line on top.

Write each digit **five times** in your notebook. Keep every digit inside one square cell.

### Match it

Draw dots for each digit: next to **3**, draw three dots. Next to **5**, draw five dots.

### Remember

A digit is a *sign*. A number is the *quantity*. The digit **4** shows the number four.`,
              hy: `## Թվանշանները մաթեմատիկայի տառերն են

**Թվանշանը** նշան է, որը գրում ենք թիվ ցույց տալու համար։ Ընդամենը տասը թվանշան կա՝ 0 1 2 3 4 5 6 7 8 9։ Այսօր սովորում ենք առաջին հինգը։

| Թվանշան | Քանակ | Ասում ենք |
|---|---|---|
| 1 | ● | մեկ |
| 2 | ● ● | երկու |
| 3 | ● ● ● | երեք |
| 4 | ● ● ● ● | չորս |
| 5 | ● ● ● ● ● | հինգ |

### Ինչպես գրել յուրաքանչյուր թվանշանը

- **1** — սկսիր վերևից, ուղիղ գիծ քաշիր ներքև։
- **2** — փոքր կոր դեպի աջ, ապա թեք գիծ ներքև՝ ձախ, ապա ուղիղ գիծ ներքևի մասում։
- **3** — երկու փոքր կոր՝ մեկը մյուսի վերևում, երկուսն էլ բաց դեպի ձախ։
- **4** — գիծ ներքև, գիծ դեպի աջ, ապա բարձր գիծ ներքև՝ դրա միջով։
- **5** — գիծ ներքև, փորիկի նման կոր, ապա հարթ գիծ վերևում։

Յուրաքանչյուր թվանշանը գրիր **հինգ անգամ** տետրումդ։ Ամեն թվանշանը պահիր մեկ վանդակի մեջ։

### Համապատասխանեցրու

Յուրաքանչյուր թվանշանի կողքին կետեր նկարիր՝ **3**-ի կողքին երեք կետ, **5**-ի կողքին հինգ կետ։

### Հիշիր

Թվանշանը *նշան* է։ Թիվը *քանակ* է։ **4** թվանշանը ցույց է տալիս չորս թիվը։`,
              ru: `## Цифры — это буквы математики

**Цифра** — это знак, которым мы записываем число. Цифр всего десять: 0 1 2 3 4 5 6 7 8 9. Сегодня учим первые пять.

| Цифра | Сколько | Говорим |
|---|---|---|
| 1 | ● | один |
| 2 | ● ● | два |
| 3 | ● ● ● | три |
| 4 | ● ● ● ● | четыре |
| 5 | ● ● ● ● ● | пять |

### Как писать каждую цифру

- **1** — начни сверху, проведи прямую линию вниз.
- **2** — маленькая дуга вправо, затем наклонная линия вниз влево, затем прямая линия по низу.
- **3** — две маленькие дуги одна над другой, обе открыты влево.
- **4** — линия вниз, линия вправо, затем длинная линия вниз через неё.
- **5** — линия вниз, дуга, похожая на животик, затем ровная линия сверху.

Напиши каждую цифру **пять раз** в тетради. Каждая цифра должна помещаться в одну клетку.

### Соедини

Нарисуй точки рядом с каждой цифрой: рядом с **3** — три точки, рядом с **5** — пять точек.

### Запомни

Цифра — это *знак*. Число — это *количество*. Цифра **4** обозначает число четыре.`,
            },
            quiz: [
              q(t("Which digit shows ● ● ● ●?", "Ո՞ր թվանշանն է ցույց տալիս ● ● ● ●։", "Какая цифра обозначает ● ● ● ●?"), [t("3", "3", "3"), t("4", "4", "4"), t("5", "5", "5")], 1),
              q(t("How many digits are there in total?", "Ընդամենը քանի՞ թվանշան կա։", "Сколько всего цифр?"), [t("5", "5", "5"), t("10", "10", "10"), t("100", "100", "100")], 1),
            ],
          },
          {
            slug: "comparing-numbers",
            title: t("More, fewer, equal: comparing numbers", "Ավելի, պակաս, հավասար․ թվերի համեմատում", "Больше, меньше, равно: сравнение чисел"),
            durationMin: 40,
            objectives: {
              en: ["Compare two groups by pairing objects", "Use the signs >, < and =", "Order numbers 1–10 from smallest to largest"],
              hy: ["Համեմատել երկու խումբ՝ առարկաները զույգերով դասավորելով", "Օգտագործել >, < և = նշանները", "Դասավորել 1–10 թվերը փոքրից մեծ"],
              ru: ["Сравнивать две группы, составляя пары предметов", "Использовать знаки >, < и =", "Располагать числа 1–10 от меньшего к большему"],
            },
            content: {
              en: `## Which group has more?

Put one apple next to one pear. Keep pairing. If apples are left over, there are **more** apples. If pears are left over, there are **fewer** apples. If nothing is left over, the groups are **equal**.

### The three signs

| Sign | Read as | Example |
|---|---|---|
| **>** | is greater than | 7 > 4 |
| **<** | is less than | 2 < 6 |
| **=** | is equal to | 5 = 5 |

**Trick:** the sign is like a hungry crocodile. Its open mouth always points to the bigger number! 🐊

### The number line

Numbers live in a row:

1 — 2 — 3 — 4 — 5 — 6 — 7 — 8 — 9 — 10

A number further to the **right** is **bigger**. A number further to the **left** is **smaller**.

So 8 > 3 because 8 is to the right of 3.

### Practice

Fill in the sign:

- 3 ○ 5
- 9 ○ 2
- 6 ○ 6
- 1 ○ 10

Order from smallest to largest: 7, 2, 9, 4.`,
              hy: `## Ո՞ր խմբում է ավելի շատ

Մեկ խնձորի կողքին դիր մեկ տանձ։ Շարունակիր զույգեր կազմել։ Եթե խնձորներ են մնում, ուրեմն խնձորները **ավելի շատ** են։ Եթե տանձեր են մնում, խնձորները **ավելի քիչ** են։ Եթե ոչինչ չի մնում, խմբերը **հավասար** են։

### Երեք նշան

| Նշան | Կարդում ենք | Օրինակ |
|---|---|---|
| **>** | մեծ է | 7 > 4 |
| **<** | փոքր է | 2 < 6 |
| **=** | հավասար է | 5 = 5 |

**Հնարք․** նշանը սոված կոկորդիլոս է։ Նրա բաց բերանը միշտ նայում է ավելի մեծ թվին։ 🐊

### Թվային ճառագայթ

Թվերն ապրում են մեկ շարքում․

1 — 2 — 3 — 4 — 5 — 6 — 7 — 8 — 9 — 10

Ավելի **աջ** գտնվող թիվը **ավելի մեծ** է։ Ավելի **ձախ** գտնվող թիվը **ավելի փոքր** է։

Ուրեմն 8 > 3, որովհետև 8-ը 3-ի աջ կողմում է։

### Վարժություն

Դիր նշանը․

- 3 ○ 5
- 9 ○ 2
- 6 ○ 6
- 1 ○ 10

Դասավորիր փոքրից մեծ՝ 7, 2, 9, 4։`,
              ru: `## В какой группе больше?

Положи рядом с одним яблоком одну грушу. Продолжай составлять пары. Если остались яблоки — яблок **больше**. Если остались груши — яблок **меньше**. Если ничего не осталось, групп **равно**.

### Три знака

| Знак | Читаем | Пример |
|---|---|---|
| **>** | больше | 7 > 4 |
| **<** | меньше | 2 < 6 |
| **=** | равно | 5 = 5 |

**Хитрость:** знак похож на голодного крокодила. Его открытая пасть всегда смотрит на большее число! 🐊

### Числовой ряд

Числа живут в ряд:

1 — 2 — 3 — 4 — 5 — 6 — 7 — 8 — 9 — 10

Число, которое стоит **правее**, — **больше**. Число **левее** — **меньше**.

Значит, 8 > 3, потому что 8 стоит правее 3.

### Практика

Поставь знак:

- 3 ○ 5
- 9 ○ 2
- 6 ○ 6
- 1 ○ 10

Расставь от меньшего к большему: 7, 2, 9, 4.`,
            },
            quiz: [
              q(t("Choose the correct sign: 4 ○ 9", "Ընտրիր ճիշտ նշանը․ 4 ○ 9", "Выбери верный знак: 4 ○ 9"), [t(">", ">", ">"), t("<", "<", "<"), t("=", "=", "=")], 1),
              q(t("Which number is the largest?", "Ո՞ր թիվն է ամենամեծը։", "Какое число самое большое?"), [t("6", "6", "6"), t("10", "10", "10"), t("8", "8", "8")], 1),
              q(t("5 = 5 means the numbers are…", "5 = 5 նշանակում է, որ թվերը…", "5 = 5 означает, что числа…"), [t("equal", "հավասար են", "равны"), t("different", "տարբեր են", "разные")], 0),
            ],
          },
          {
            slug: "zero-and-ten",
            title: t("Zero and the number 10", "Զրոն և 10 թիվը", "Ноль и число 10"),
            durationMin: 40,
            objectives: {
              en: ["Understand zero as 'nothing'", "Know that 10 is one ten", "Count from 0 to 10 and back"],
              hy: ["Հասկանալ զրոն որպես «ոչինչ»", "Իմանալ, որ 10-ը մեկ տասնյակ է", "Հաշվել 0-ից 10 և հակառակ"],
              ru: ["Понимать ноль как «ничего»", "Знать, что 10 — это один десяток", "Считать от 0 до 10 и обратно"],
            },
            content: {
              en: `## Zero: the number for nothing

Imagine a plate with 3 cookies. You eat one: 2 left. Eat another: 1 left. Eat the last one: **0** cookies left.

**Zero** means there is nothing to count. We write it as **0**. On the number line, zero stands to the left of 1.

### Ten: a special number

Count your fingers: 1, 2, 3 … 10. All ten fingers together make **one ten**.

We write ten with **two digits**: a **1** and a **0**. The 1 means *one ten*, the 0 means *no extra ones*.

### Count forward and backward

Forward: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

Backward: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 — like a rocket launch! 🚀

### Practice

- Draw a box with 0 balls inside. What does it look like?
- Show 10 with your fingers. Now show 10 using two hands of a friend — 5 and 5.
- Which number is one less than 10? One more than 0?`,
              hy: `## Զրո՝ «ոչինչ»-ի թիվը

Պատկերացրու ափսե 3 թխվածքով։ Ուտում ես մեկը՝ մնում է 2։ Ուտում ես ևս մեկը՝ մնում է 1։ Ուտում ես վերջինը՝ մնում է **0** թխվածք։

**Զրոն** նշանակում է, որ հաշվելու բան չկա։ Գրում ենք **0**։ Թվային ճառագայթի վրա զրոն կանգնած է 1-ի ձախ կողմում։

### Տասը՝ հատուկ թիվ

Հաշվիր մատներդ՝ 1, 2, 3 … 10։ Բոլոր տասը մատները միասին կազմում են **մեկ տասնյակ**։

Տասը գրում ենք **երկու թվանշանով**՝ **1** և **0**։ 1-ը նշանակում է *մեկ տասնյակ*, 0-ն՝ *ոչ մի ավել միավոր*։

### Հաշվիր առաջ և հետ

Առաջ՝ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

Հետ՝ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 — ինչպես հրթիռի արձակում։ 🚀

### Վարժություն

- Նկարիր տուփ, որի մեջ 0 գնդակ է։ Ինչպիսի՞ն է այն։
- Մատներով ցույց տուր 10։ Հիմա ցույց տուր 10 ընկերոջդ երկու ձեռքով՝ 5 և 5։
- Ո՞ր թիվն է 10-ից մեկով պակաս։ 0-ից մեկով ավել։`,
              ru: `## Ноль — число для «ничего»

Представь тарелку с 3 печеньями. Съел одно — осталось 2. Съел ещё одно — осталось 1. Съел последнее — осталось **0** печений.

**Ноль** означает, что считать нечего. Записываем его как **0**. На числовом ряду ноль стоит левее 1.

### Десять — особое число

Посчитай пальцы: 1, 2, 3 … 10. Все десять пальцев вместе — это **один десяток**.

Десять записывается **двумя цифрами**: **1** и **0**. Единица означает *один десяток*, ноль — *ни одной лишней единицы*.

### Счёт вперёд и назад

Вперёд: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

Назад: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 — как запуск ракеты! 🚀

### Практика

- Нарисуй коробку, в которой 0 мячей. Как она выглядит?
- Покажи 10 на пальцах. Теперь покажи 10 двумя руками друга — 5 и 5.
- Какое число на один меньше 10? На один больше 0?`,
            },
            quiz: [
              q(t("How many digits do we use to write ten?", "Քանի՞ թվանշանով ենք գրում տասը։", "Сколькими цифрами записывается десять?"), [t("1", "1", "1"), t("2", "2", "2"), t("10", "10", "10")], 1),
              q(t("Which number means 'nothing'?", "Ո՞ր թիվը նշանակում է «ոչինչ»։", "Какое число означает «ничего»?"), [t("1", "1", "1"), t("0", "0", "0"), t("10", "10", "10")], 1),
            ],
          },
        ],
      },
      unit(
        t("Addition and subtraction within 10", "Գումարում և հանում 10-ի սահմաններում", "Сложение и вычитание в пределах 10"),
        t("The meaning of + and −, composition of numbers, and the link between adding and taking away.", "+ և − նշանների իմաստը, թվի կազմությունը և գումարման ու հանման կապը։", "Смысл знаков + и −, состав числа и связь сложения с вычитанием."),
        [
          ["meaning-of-addition", "What addition means", "Ի՞նչ է գումարումը", "Что такое сложение"],
          ["meaning-of-subtraction", "What subtraction means", "Ի՞նչ է հանումը", "Что такое вычитание"],
          ["composition-of-numbers", "Composition of numbers up to 10", "Թվերի կազմությունը 10-ի սահմաններում", "Состав чисел до 10"],
          ["adding-subtracting-1-2", "Adding and subtracting 1 and 2", "1 և 2 գումարել և հանել", "Прибавить и вычесть 1 и 2"],
          ["adding-subtracting-3-4", "Adding and subtracting 3 and 4", "3 և 4 գումարել և հանել", "Прибавить и вычесть 3 и 4"],
          ["swap-the-addends", "Swapping the addends", "Գումարելիների տեղափոխություն", "Перестановка слагаемых"],
          ["addition-subtraction-link", "How addition and subtraction are connected", "Ինչպես են կապված գումարումն ու հանումը", "Связь сложения и вычитания"],
        ],
      ),
      unit(
        t("Numbers from 11 to 20", "Թվերը 11-ից 20", "Числа от 11 до 20"),
        t("Tens and ones, reading two-digit numbers, and the number line to 20.", "Տասնյակներ և միավորներ, երկնիշ թվերի կարդալը, թվային ճառագայթ մինչև 20։", "Десятки и единицы, чтение двузначных чисел, числовой ряд до 20."),
        [
          ["ten-and-ones", "One ten and some ones", "Մեկ տասնյակ և միավորներ", "Один десяток и единицы"],
          ["reading-11-20", "Reading and writing 11–20", "11–20 թվերի կարդալն ու գրելը", "Чтение и запись чисел 11–20"],
          ["comparing-to-20", "Comparing numbers up to 20", "Թվերի համեմատում 20-ի սահմաններում", "Сравнение чисел до 20"],
          ["dm-and-cm", "Decimetre and centimetre", "Դեցիմետր և սանտիմետր", "Дециметр и сантиметр"],
        ],
      ),
      unit(
        t("Addition and subtraction within 20", "Գումարում և հանում 20-ի սահմաններում", "Сложение и вычитание в пределах 20"),
        t("Crossing the ten when adding and subtracting; the addition table.", "Տասնյակի անցումով գումարում և հանում, գումարման աղյուսակ։", "Сложение и вычитание с переходом через десяток, таблица сложения."),
        [
          ["add-without-crossing", "Adding without crossing ten", "Գումարում առանց տասնյակի անցման", "Сложение без перехода через десяток"],
          ["add-crossing-ten", "Adding by making ten", "Գումարում՝ տասնյակ կազմելով", "Сложение с переходом через десяток"],
          ["subtract-crossing-ten", "Subtracting across ten", "Հանում տասնյակի անցումով", "Вычитание с переходом через десяток"],
          ["addition-table", "The addition table", "Գումարման աղյուսակը", "Таблица сложения"],
        ],
      ),
      unit(
        t("Word problems", "Տեքստային խնդիրներ", "Текстовые задачи"),
        t("Reading a problem, finding what is known and unknown, and writing the solution.", "Խնդիրը կարդալ, գտնել հայտնին և անհայտը, գրել լուծումը։", "Чтение задачи, поиск известного и неизвестного, запись решения."),
        [
          ["parts-of-a-problem", "The parts of a problem", "Խնդրի մասերը", "Из чего состоит задача"],
          ["finding-the-sum", "Problems about finding the sum", "Գումարը գտնելու խնդիրներ", "Задачи на нахождение суммы"],
          ["finding-the-rest", "Problems about finding the remainder", "Մնացորդը գտնելու խնդիրներ", "Задачи на нахождение остатка"],
          ["more-fewer-by", "More by… / fewer by…", "…-ով ավելի, …-ով պակաս", "Больше на… / меньше на…"],
        ],
      ),
      unit(
        t("Shapes, time and measurement", "Ձևեր, ժամանակ և չափումներ", "Фигуры, время и измерения"),
        t("Points, lines and segments; triangles, squares and circles; days of the week and the clock.", "Կետ, գիծ, հատված, եռանկյուն, քառակուսի, շրջան, շաբաթվա օրեր և ժամացույց։", "Точка, линия, отрезок; треугольник, квадрат, круг; дни недели и часы."),
        [
          ["point-line-segment", "Point, line and segment", "Կետ, գիծ և հատված", "Точка, линия и отрезок"],
          ["flat-shapes", "Triangle, square, rectangle, circle", "Եռանկյուն, քառակուսի, ուղղանկյուն, շրջան", "Треугольник, квадрат, прямоугольник, круг"],
          ["measuring-length", "Measuring length with a ruler", "Երկարության չափում քանոնով", "Измерение длины линейкой"],
          ["days-and-hours", "Days of the week and whole hours", "Շաբաթվա օրերը և ամբողջ ժամերը", "Дни недели и целые часы"],
        ],
      ),
    ],
  },
  {
    subject: "math",
    grade: 2,
    title: t("Mathematics · Grade 2", "Մաթեմատիկա · 2-րդ դասարան", "Математика · 2 класс"),
    description: t(
      "Numbers to 100, written addition and subtraction, the meaning of multiplication and division, length, mass and time.",
      "Թվեր մինչև 100, գրավոր գումարում և հանում, բազմապատկման և բաժանման իմաստը, երկարություն, զանգված և ժամանակ։",
      "Числа до 100, письменное сложение и вычитание, смысл умножения и деления, длина, масса и время.",
    ),
    curriculumNotes: notes(
      ["Armenia grade 2: numbers to 100, oral and written addition/subtraction, introduction of multiplication and division, tables of 2–5, perimeter, units of length, mass and time.", "Հայաստան, 2-րդ դասարան՝ թվեր մինչև 100, բանավոր և գրավոր գումարում/հանում, բազմապատկման և բաժանման ներմուծում, 2–5-ի աղյուսակ, պարագիծ, երկարության, զանգվածի և ժամանակի միավորներ։", "Армения, 2 класс: числа до 100, устное и письменное сложение/вычитание, введение умножения и деления, таблица на 2–5, периметр, единицы длины, массы и времени."],
      ["Russia grade 2 (ФГОС): numbers 1–100, written column addition and subtraction, multiplication and division as repeated addition/sharing, tables of 2 and 3, order of operations with brackets, perimeter, rouble/kopeck, hour/minute.", "Ռուսաստան, 2-րդ դասարան (ФГОС)՝ 1–100 թվեր, սյունակով գումարում և հանում, բազմապատկում և բաժանում, 2-ի և 3-ի աղյուսակ, գործողությունների կարգ փակագծերով, պարագիծ, ժամ/րոպե։", "Россия, 2 класс (ФГОС): числа 1–100, сложение и вычитание столбиком, умножение и деление как сложение одинаковых слагаемых и деление поровну, таблица на 2 и 3, порядок действий со скобками, периметр, рубль/копейка, час/минута."],
    ),
    hoursPerWeek: { armenia: 5, russia: 4 },
    units: [
      unit(t("Numbers to 100", "Թվեր մինչև 100", "Числа до 100"), t("Counting by tens, place value, comparing two-digit numbers.", "Տասնյակներով հաշվել, կարգային արժեք, երկնիշ թվերի համեմատում։", "Счёт десятками, разряды, сравнение двузначных чисел."), [
        ["counting-by-tens", "Counting by tens to 100", "Տասնյակներով հաշվել մինչև 100", "Счёт десятками до 100"],
        ["tens-and-ones-100", "Tens and ones in two-digit numbers", "Տասնյակներ և միավորներ երկնիշ թվերում", "Десятки и единицы в двузначных числах"],
        ["compare-two-digit", "Comparing two-digit numbers", "Երկնիշ թվերի համեմատում", "Сравнение двузначных чисел"],
        ["metre", "The metre", "Մետր", "Метр"],
      ]),
      unit(t("Oral addition and subtraction", "Բանավոր գումարում և հանում", "Устное сложение и вычитание"), t("Mental strategies: round numbers, adding by parts, checking with the inverse operation.", "Մտքում հաշվելու հնարքներ՝ կլոր թվեր, մասերով գումարում, ստուգում հակադարձ գործողությամբ։", "Приёмы устного счёта: круглые числа, сложение по частям, проверка обратным действием."), [
        ["add-round-tens", "Adding and subtracting round tens", "Կլոր տասնյակների գումարում և հանում", "Сложение и вычитание круглых десятков"],
        ["add-by-parts", "Adding by parts (36 + 7)", "Մասերով գումարում (36 + 7)", "Сложение по частям (36 + 7)"],
        ["subtract-by-parts", "Subtracting by parts (42 − 5)", "Մասերով հանում (42 − 5)", "Вычитание по частям (42 − 5)"],
        ["brackets", "Brackets and the order of operations", "Փակագծեր և գործողությունների կարգ", "Скобки и порядок действий"],
        ["checking-answers", "Checking addition and subtraction", "Գումարման և հանման ստուգում", "Проверка сложения и вычитания"],
      ]),
      unit(t("Written addition and subtraction", "Գրավոր գումարում և հանում", "Письменное сложение и вычитание"), t("Column method with and without carrying/borrowing.", "Սյունակով հաշվել՝ տասնյակի անցումով և առանց։", "Вычисления столбиком с переходом и без перехода через десяток."), [
        ["column-addition", "Column addition without carrying", "Սյունակով գումարում առանց անցման", "Сложение столбиком без перехода"],
        ["column-addition-carry", "Column addition with carrying", "Սյունակով գումարում անցումով", "Сложение столбиком с переходом через десяток"],
        ["column-subtraction", "Column subtraction with borrowing", "Սյունակով հանում տասնյակի վերցնումով", "Вычитание столбиком с переходом через десяток"],
        ["equations-intro", "Finding the unknown: x + 4 = 9", "Անհայտի գտնելը․ x + 4 = 9", "Нахождение неизвестного: x + 4 = 9"],
      ]),
      unit(t("Multiplication and division", "Բազմապատկում և բաժանում", "Умножение и деление"), t("Repeated addition, sharing equally, and the first tables.", "Հավասար գումարելիներ, հավասար բաժանում և առաջին աղյուսակները։", "Сложение одинаковых слагаемых, деление поровну и первые таблицы."), [
        ["meaning-of-multiplication", "What multiplication means", "Ի՞նչ է բազմապատկումը", "Смысл умножения"],
        ["meaning-of-division", "What division means", "Ի՞նչ է բաժանումը", "Смысл деления"],
        ["table-of-2", "Multiplying and dividing by 2", "2-ով բազմապատկում և բաժանում", "Умножение и деление на 2"],
        ["table-of-3", "Multiplying and dividing by 3", "3-ով բազմապատկում և բաժանում", "Умножение и деление на 3"],
        ["tables-4-5", "Multiplying by 4 and 5", "4-ով և 5-ով բազմապատկում", "Умножение на 4 и 5"],
        ["times-1-and-0", "Multiplying by 1 and 0", "1-ով և 0-ով բազմապատկում", "Умножение на 1 и 0"],
      ]),
      unit(t("Measurement", "Չափումներ", "Измерения"), t("Length, mass, time and money; perimeter of a polygon.", "Երկարություն, զանգված, ժամանակ և գումար, բազմանկյան պարագիծ։", "Длина, масса, время и деньги; периметр многоугольника."), [
        ["perimeter", "Perimeter of a polygon", "Բազմանկյան պարագիծ", "Периметр многоугольника"],
        ["kilogram", "Mass: the kilogram", "Զանգված․ կիլոգրամ", "Масса: килограмм"],
        ["hours-minutes", "Hours and minutes", "Ժամ և րոպե", "Часы и минуты"],
        ["money", "Money: drams, roubles, coins and notes", "Գումար․ դրամ, ռուբլի, մետաղադրամ և թղթադրամ", "Деньги: драмы, рубли, монеты и купюры"],
      ]),
      unit(t("Geometry", "Երկրաչափություն", "Геометрия"), t("Angles, rectangles and squares, broken lines.", "Անկյուններ, ուղղանկյուններ և քառակուսիներ, բեկյալ գծեր։", "Углы, прямоугольники и квадраты, ломаные линии."), [
        ["angles", "Angles: right, acute, obtuse", "Անկյուններ․ ուղիղ, սուր, բութ", "Углы: прямой, острый, тупой"],
        ["rectangle-square", "Rectangle and square", "Ուղղանկյուն և քառակուսի", "Прямоугольник и квадрат"],
        ["broken-line", "Broken lines and their length", "Բեկյալ գծեր և դրանց երկարությունը", "Ломаная и её длина"],
      ]),
    ],
  },
  {
    subject: "math",
    grade: 3,
    title: t("Mathematics · Grade 3", "Մաթեմատիկա · 3-րդ դասարան", "Математика · 3 класс"),
    description: t(
      "The full multiplication table, numbers to 1000, division with remainder, area, and multi-step problems.",
      "Բազմապատկման ամբողջ աղյուսակ, թվեր մինչև 1000, բաժանում մնացորդով, մակերես, բազմաքայլ խնդիրներ։",
      "Полная таблица умножения, числа до 1000, деление с остатком, площадь, составные задачи.",
    ),
    curriculumNotes: notes(
      ["Armenia grade 3: tables up to 10, out-of-table multiplication and division, numbers to 1000, area of a rectangle, fractions of a quantity, units of time and mass.", "Հայաստան, 3-րդ դասարան՝ աղյուսակ մինչև 10, արտաաղյուսակային բազմապատկում և բաժանում, թվեր մինչև 1000, ուղղանկյան մակերես, քանակի մասեր, ժամանակի և զանգվածի միավորներ։", "Армения, 3 класс: таблица до 10, внетабличное умножение и деление, числа до 1000, площадь прямоугольника, доли величины, единицы времени и массы."],
      ["Russia grade 3 (ФГОС): tables to 9, multiplying and dividing by one-digit numbers, division with remainder, numbers to 1000, area in cm²/dm²/m², fractions (доли), problems in 2–3 steps, equations.", "Ռուսաստան, 3-րդ դասարան (ФГОС)՝ աղյուսակ մինչև 9, միանիշ թվով բազմապատկում և բաժանում, բաժանում մնացորդով, թվեր մինչև 1000, մակերես սմ²/դմ²/մ², մասեր, 2–3 քայլի խնդիրներ, հավասարումներ։", "Россия, 3 класс (ФГОС): таблица до 9, умножение и деление на однозначное число, деление с остатком, числа до 1000, площадь в см²/дм²/м², доли, задачи в 2–3 действия, уравнения."],
    ),
    hoursPerWeek: { armenia: 5, russia: 4 },
    units: [
      unit(t("The multiplication table", "Բազմապատկման աղյուսակ", "Таблица умножения"), t("Tables of 6, 7, 8 and 9; properties of multiplication.", "6, 7, 8 և 9-ի աղյուսակներ, բազմապատկման հատկություններ։", "Таблицы на 6, 7, 8 и 9; свойства умножения."), [
        ["tables-6-7", "Tables of 6 and 7", "6-ի և 7-ի աղյուսակ", "Таблица на 6 и 7"],
        ["tables-8-9", "Tables of 8 and 9", "8-ի և 9-ի աղյուսակ", "Таблица на 8 и 9"],
        ["commutative-multiplication", "Swapping the factors", "Արտադրիչների տեղափոխություն", "Перестановка множителей"],
        ["table-tricks", "Tricks for remembering the table", "Աղյուսակը հիշելու հնարքներ", "Приёмы запоминания таблицы"],
        ["order-of-operations", "Order of operations without brackets", "Գործողությունների կարգ առանց փակագծերի", "Порядок действий без скобок"],
      ]),
      unit(t("Out-of-table multiplication and division", "Արտաաղյուսակային բազմապատկում և բաժանում", "Внетабличное умножение и деление"), t("Multiplying 20 × 3, 23 × 4, dividing 96 ÷ 3, division with remainder.", "20 × 3, 23 × 4 բազմապատկում, 96 ÷ 3 բաժանում, բաժանում մնացորդով։", "Умножение 20 × 3, 23 × 4, деление 96 ÷ 3, деление с остатком."), [
        ["multiply-round-tens", "Multiplying and dividing round numbers", "Կլոր թվերի բազմապատկում և բաժանում", "Умножение и деление круглых чисел"],
        ["multiply-sum-by-number", "Multiplying a sum by a number", "Գումարի բազմապատկում թվով", "Умножение суммы на число"],
        ["divide-sum-by-number", "Dividing a sum by a number", "Գումարի բաժանում թվի", "Деление суммы на число"],
        ["division-with-remainder", "Division with remainder", "Բաժանում մնացորդով", "Деление с остатком"],
        ["checking-division", "Checking multiplication and division", "Բազմապատկման և բաժանման ստուգում", "Проверка умножения и деления"],
      ]),
      unit(t("Numbers to 1000", "Թվեր մինչև 1000", "Числа до 1000"), t("Hundreds, tens and ones; comparing and rounding three-digit numbers.", "Հարյուրյակներ, տասնյակներ, միավորներ, եռանիշ թվերի համեմատում։", "Сотни, десятки и единицы; сравнение трёхзначных чисел."), [
        ["hundreds", "Counting in hundreds", "Հարյուրյակներով հաշվել", "Счёт сотнями"],
        ["three-digit-numbers", "Reading and writing three-digit numbers", "Եռանիշ թվերի կարդալն ու գրելը", "Чтение и запись трёхзначных чисел"],
        ["compare-three-digit", "Comparing three-digit numbers", "Եռանիշ թվերի համեմատում", "Сравнение трёхзначных чисел"],
        ["roman-numerals", "Roman numerals", "Հռոմեական թվանշաններ", "Римские цифры"],
      ]),
      unit(t("Operations with three-digit numbers", "Գործողություններ եռանիշ թվերով", "Действия с трёхзначными числами"), t("Column addition and subtraction to 1000; multiplying and dividing by a one-digit number.", "Սյունակով գումարում և հանում մինչև 1000, միանիշ թվով բազմապատկում և բաժանում։", "Сложение и вычитание столбиком до 1000; умножение и деление на однозначное число."), [
        ["add-subtract-1000", "Adding and subtracting to 1000", "Գումարում և հանում 1000-ի սահմաններում", "Сложение и вычитание в пределах 1000"],
        ["multiply-three-digit", "Multiplying a three-digit number by a digit", "Եռանիշ թվի բազմապատկում միանիշով", "Умножение трёхзначного числа на однозначное"],
        ["divide-three-digit", "Dividing a three-digit number by a digit", "Եռանիշ թվի բաժանում միանիշի", "Деление трёхзначного числа на однозначное"],
      ]),
      unit(t("Fractions and area", "Մասեր և մակերես", "Доли и площадь"), t("Halves, thirds, quarters; area of a rectangle and square.", "Կես, երրորդ, քառորդ, ուղղանկյան և քառակուսու մակերես։", "Половина, треть, четверть; площадь прямоугольника и квадрата."), [
        ["fractions-of-a-whole", "Half, third, quarter", "Կես, երրորդ, քառորդ", "Половина, треть, четверть"],
        ["fraction-of-a-number", "Finding a fraction of a number", "Թվի մասի գտնելը", "Нахождение доли числа"],
        ["area-units", "Area and its units", "Մակերեսը և նրա միավորները", "Площадь и её единицы"],
        ["area-rectangle", "Area of a rectangle", "Ուղղանկյան մակերես", "Площадь прямоугольника"],
      ]),
      unit(t("Problems and quantities", "Խնդիրներ և մեծություններ", "Задачи и величины"), t("Multi-step problems, speed–time–distance, year, month, day.", "Բազմաքայլ խնդիրներ, արագություն–ժամանակ–ուղի, տարի, ամիս, օր։", "Составные задачи, скорость–время–расстояние, год, месяц, сутки."), [
        ["two-step-problems", "Two-step problems", "Երկքայլ խնդիրներ", "Задачи в два действия"],
        ["times-more-less", "Times more, times less", "Անգամ ավելի, անգամ պակաս", "Больше в… раз, меньше в… раз"],
        ["calendar", "Year, month, day, the calendar", "Տարի, ամիս, օր, օրացույց", "Год, месяц, сутки, календарь"],
        ["gram-kilogram", "Gram and kilogram", "Գրամ և կիլոգրամ", "Грамм и килограмм"],
      ]),
    ],
  },
  {
    subject: "math",
    grade: 4,
    title: t("Mathematics · Grade 4", "Մաթեմատիկա · 4-րդ դասարան", "Математика · 4 класс"),
    description: t(
      "Multi-digit numbers, written multiplication and division, speed problems, and the end-of-primary review.",
      "Բազմանիշ թվեր, գրավոր բազմապատկում և բաժանում, արագության խնդիրներ, տարրական դպրոցի ամփոփում։",
      "Многозначные числа, письменное умножение и деление, задачи на движение, итоговое повторение начальной школы.",
    ),
    curriculumNotes: notes(
      ["Armenia grade 4: numbers to a million, four operations with multi-digit numbers, speed/time/distance, area and perimeter, data in tables and diagrams. Ends with the grade 4 state assessment (20-point scale).", "Հայաստան, 4-րդ դասարան՝ թվեր մինչև միլիոն, չորս գործողություն բազմանիշ թվերով, արագություն/ժամանակ/ուղի, մակերես և պարագիծ, տվյալներ աղյուսակներում։ Ավարտվում է 4-րդ դասարանի պետական ստուգմամբ (20-բալանոց)։", "Армения, 4 класс: числа до миллиона, четыре действия с многозначными числами, скорость/время/расстояние, площадь и периметр, данные в таблицах и диаграммах. Завершается государственной проверкой за 4 класс (20-балльная шкала)."],
      ["Russia grade 4 (ФГОС): numbers beyond 1000, column multiplication and division by two- and three-digit numbers, quantities (t, ц, km², га), motion problems, equations, diagrams. Ends with ВПР (all-Russian check).", "Ռուսաստան, 4-րդ դասարան (ФГОС)՝ թվեր 1000-ից մեծ, սյունակով բազմապատկում և բաժանում երկնիշ և եռանիշ թվերով, մեծություններ (տ, ց, կմ², հա), շարժման խնդիրներ, հավասարումներ, դիագրամներ։ Ավարտվում է ВПР ստուգմամբ։", "Россия, 4 класс (ФГОС): числа больше 1000, умножение и деление столбиком на двузначное и трёхзначное число, величины (т, ц, км², га), задачи на движение, уравнения, диаграммы. Завершается ВПР."],
    ),
    hoursPerWeek: { armenia: 5, russia: 4 },
    units: [
      unit(t("Multi-digit numbers", "Բազմանիշ թվեր", "Многозначные числа"), t("Classes of thousands and millions, comparing and rounding.", "Հազարների և միլիոնների դասեր, համեմատում և կլորացում։", "Классы тысяч и миллионов, сравнение и округление."), [
        ["class-of-thousands", "The class of thousands", "Հազարների դասը", "Класс тысяч"],
        ["millions", "Millions", "Միլիոններ", "Миллионы"],
        ["rounding", "Rounding numbers", "Թվերի կլորացում", "Округление чисел"],
        ["large-units", "Tonnes, centners, km², hectares", "Տոննա, ցենտներ, կմ², հեկտար", "Тонна, центнер, км², гектар"],
      ]),
      unit(t("Addition and subtraction of multi-digit numbers", "Բազմանիշ թվերի գումարում և հանում", "Сложение и вычитание многозначных чисел"), t("Column algorithms, properties, estimation.", "Սյունակով ալգորիթմներ, հատկություններ, գնահատում։", "Алгоритмы столбиком, свойства, прикидка."), [
        ["column-add-large", "Column addition of large numbers", "Մեծ թվերի սյունակով գումարում", "Сложение многозначных чисел столбиком"],
        ["column-subtract-large", "Column subtraction of large numbers", "Մեծ թվերի սյունակով հանում", "Вычитание многозначных чисел столбиком"],
        ["estimation", "Estimating the answer", "Պատասխանի գնահատում", "Прикидка результата"],
      ]),
      unit(t("Multiplication and division by a one-digit number", "Բազմապատկում և բաժանում միանիշ թվով", "Умножение и деление на однозначное число"), t("Written algorithms and zeros in the quotient.", "Գրավոր ալգորիթմներ, զրոներ քանորդում։", "Письменные алгоритмы, нули в частном."), [
        ["multiply-by-digit", "Written multiplication by a digit", "Գրավոր բազմապատկում միանիշով", "Письменное умножение на однозначное число"],
        ["divide-by-digit", "Written division by a digit", "Գրավոր բաժանում միանիշի", "Письменное деление на однозначное число"],
        ["zeros-in-quotient", "Zeros in the quotient", "Զրոներ քանորդում", "Нули в частном"],
      ]),
      unit(t("Multiplication and division by two- and three-digit numbers", "Բազմապատկում և բաժանում երկնիշ և եռանիշ թվերով", "Умножение и деление на двузначное и трёхзначное число"), t("Multiplying by 10, 100, round numbers, and the long division algorithm.", "10-ով, 100-ով և կլոր թվերով բազմապատկում, երկար բաժանման ալգորիթմ։", "Умножение на 10, 100, круглые числа и алгоритм деления уголком."), [
        ["multiply-10-100", "Multiplying and dividing by 10, 100, 1000", "10, 100, 1000-ով բազմապատկում և բաժանում", "Умножение и деление на 10, 100, 1000"],
        ["multiply-two-digit", "Multiplying by a two-digit number", "Երկնիշ թվով բազմապատկում", "Умножение на двузначное число"],
        ["divide-two-digit", "Dividing by a two-digit number", "Երկնիշ թվի բաժանում", "Деление на двузначное число"],
        ["divide-three-digit", "Dividing by a three-digit number", "Եռանիշ թվի բաժանում", "Деление на трёхзначное число"],
      ]),
      unit(t("Speed, time and distance", "Արագություն, ժամանակ և ուղի", "Скорость, время, расстояние"), t("Motion problems: towards each other, in the same direction.", "Շարժման խնդիրներ՝ դեմ դիմաց, նույն ուղղությամբ։", "Задачи на движение: навстречу, в одном направлении."), [
        ["speed-formula", "Speed, time and distance", "Արագություն, ժամանակ և ուղի", "Скорость, время и расстояние"],
        ["towards-each-other", "Moving towards each other", "Դեմ դիմաց շարժում", "Движение навстречу друг другу"],
        ["same-direction", "Moving in the same direction", "Նույն ուղղությամբ շարժում", "Движение в одном направлении"],
      ]),
      unit(t("Geometry, data and review", "Երկրաչափություն, տվյալներ և ամփոփում", "Геометрия, данные и повторение"), t("Area of complex figures, cubes and boxes, bar charts, final review.", "Բարդ պատկերների մակերես, խորանարդ և ուղղանկյունանիստ, դիագրամներ, ամփոփում։", "Площадь составных фигур, куб и прямоугольный параллелепипед, диаграммы, итоговое повторение."), [
        ["area-complex", "Area of composite figures", "Բաղադրյալ պատկերների մակերես", "Площадь составных фигур"],
        ["cube-box", "Cube and rectangular box", "Խորանարդ և ուղղանկյունանիստ", "Куб и прямоугольный параллелепипед"],
        ["bar-charts", "Reading tables and bar charts", "Աղյուսակների և սյունակաձև դիագրամների ընթերցում", "Чтение таблиц и столбчатых диаграмм"],
        ["primary-review", "Review of primary mathematics", "Տարրական մաթեմատիկայի ամփոփում", "Повторение курса начальной школы"],
      ]),
    ],
  },
  {
    subject: "math",
    grade: 5,
    title: t("Mathematics · Grade 5", "Մաթեմատիկա · 5-րդ դասարան", "Математика · 5 класс"),
    description: t(
      "Natural numbers, divisibility, common fractions, decimals, percentages and the first steps in geometry.",
      "Բնական թվեր, բաժանելիություն, հասարակ կոտորակներ, տասնորդական կոտորակներ, տոկոսներ և երկրաչափության առաջին քայլերը։",
      "Натуральные числа, делимость, обыкновенные и десятичные дроби, проценты и первые шаги в геометрии.",
    ),
    curriculumNotes: notes(
      ["Armenia grade 5 (middle school begins; 10-point marks start): natural numbers and powers, divisibility, common fractions, decimals, percentages, angles and area/volume. Textbook tradition: Б. Нахапетян / Խ. Հայրապետյան series.", "Հայաստան, 5-րդ դասարան (սկսվում է միջին դպրոցը, 10-բալանոց նիշեր)՝ բնական թվեր և աստիճաններ, բաժանելիություն, հասարակ կոտորակներ, տասնորդականներ, տոկոսներ, անկյուններ, մակերես/ծավալ։", "Армения, 5 класс (начало средней школы, 10-балльные оценки): натуральные числа и степени, делимость, обыкновенные дроби, десятичные дроби, проценты, углы, площадь/объём."],
      ["Russia grade 5 (ФГОС ООО, 5 h/week, 175 h): natural numbers, powers, divisibility, common fractions, decimals, percentages, averages, visual geometry (angles, area, volume), text problems, elements of history of mathematics.", "Ռուսաստան, 5-րդ դասարան (ФГОС ООО, 5 ժ/շաբ., 175 ժ)՝ բնական թվեր, աստիճաններ, բաժանելիություն, հասարակ կոտորակներ, տասնորդականներ, տոկոսներ, միջին թվաբանական, ակնառու երկրաչափություն։", "Россия, 5 класс (ФГОС ООО, 5 ч/нед., 175 ч): натуральные числа, степени, делимость, обыкновенные дроби, десятичные дроби, проценты, среднее арифметическое, наглядная геометрия, текстовые задачи, история математики."],
    ),
    hoursPerWeek: { armenia: 5, russia: 5 },
    units: [
      {
        title: t("Natural numbers", "Բնական թվեր", "Натуральные числа"),
        summary: t("The decimal system, number line, comparison, rounding and powers.", "Տասնորդական համակարգ, թվային ճառագայթ, համեմատում, կլորացում և աստիճան։", "Десятичная система, координатный луч, сравнение, округление и степень."),
        lessons: [
          {
            slug: "decimal-system",
            title: t("The decimal number system", "Տասնորդական թվային համակարգը", "Десятичная система счисления"),
            objectives: {
              en: ["Read and write natural numbers of any size", "Name the classes and places of a number", "Explain why our system is called decimal"],
              hy: ["Կարդալ և գրել ցանկացած մեծության բնական թվեր", "Անվանել թվի դասերը և կարգերը", "Բացատրել, թե ինչու է համակարգը կոչվում տասնորդական"],
              ru: ["Читать и записывать натуральные числа любой величины", "Называть классы и разряды числа", "Объяснять, почему система называется десятичной"],
            },
            content: {
              en: `## Natural numbers

The numbers we use for counting — 1, 2, 3, 4, … — are called **natural numbers**. The set of natural numbers is written $\\mathbb{N}$. It has no largest member: whatever number you name, adding 1 gives a bigger one.

Zero is *not* a natural number in the Armenian and Russian school tradition, but together with 0 the natural numbers form the set $\\mathbb{N}_0$.

## Places and classes

We write numbers with ten digits: 0, 1, 2, …, 9. The **value of a digit depends on its place**. In the number 777 the first 7 means seven hundred, the second seventy, the third seven.

Places are grouped in **classes** of three:

| Class | Places |
|---|---|
| Units (ones) | hundreds · tens · ones |
| Thousands | hundreds of thousands · tens of thousands · thousands |
| Millions | hundreds of millions · tens of millions · millions |
| Billions | … |

To read **35 207 418**, split from the right into classes: 35 | 207 | 418 → *thirty-five million two hundred seven thousand four hundred eighteen*.

## Why "decimal"?

Each place is **ten times** the place to its right: 10 ones make a ten, 10 tens make a hundred, and so on. *Decem* is Latin for ten.

### Worked example

Write the number "four hundred two thousand sixty".

- Thousands class: 402
- Units class: 060 (no hundreds, 6 tens, 0 ones)

Answer: **402 060**.

### Exercises

1. Write in digits: eight million thirty thousand five.
2. Read aloud: 70 030 301.
3. In the number 582 196, what does the digit 8 stand for?
4. Write the largest six-digit number and the smallest seven-digit number.`,
              hy: `## Բնական թվեր

Թվերը, որոնցով հաշվում ենք՝ 1, 2, 3, 4, …, կոչվում են **բնական թվեր**։ Բնական թվերի բազմությունը նշանակվում է $\\mathbb{N}$։ Այն ամենամեծ անդամ չունի․ ինչ թիվ էլ անվանես, 1 գումարելով ավելի մեծ կստացվի։

Զրոն հայկական և ռուսական դպրոցական ավանդույթում բնական թիվ *չի* համարվում, իսկ 0-ի հետ միասին բնական թվերը կազմում են $\\mathbb{N}_0$ բազմությունը։

## Կարգեր և դասեր

Թվերը գրում ենք տասը թվանշանով՝ 0, 1, 2, …, 9։ **Թվանշանի արժեքը կախված է նրա կարգից**։ 777 թվում առաջին 7-ը նշանակում է յոթ հարյուր, երկրորդը՝ յոթանասուն, երրորդը՝ յոթ։

Կարգերը խմբավորվում են երեքական **դասերով**․

| Դաս | Կարգեր |
|---|---|
| Միավորների դաս | հարյուրյակ · տասնյակ · միավոր |
| Հազարների դաս | հարյուր հազար · տասը հազար · հազար |
| Միլիոնների դաս | հարյուր միլիոն · տասը միլիոն · միլիոն |
| Միլիարդների դաս | … |

**35 207 418** կարդալու համար աջից բաժանիր դասերի՝ 35 | 207 | 418 → *երեսունհինգ միլիոն երկու հարյուր յոթ հազար չորս հարյուր տասնութ*։

## Ինչու՞ «տասնորդական»

Յուրաքանչյուր կարգ իր աջ կողմի կարգից **տասն անգամ** մեծ է․ 10 միավորը տասնյակ է, 10 տասնյակը՝ հարյուրյակ և այլն։ Լատիներեն *decem* նշանակում է տասը։

### Լուծված օրինակ

Գրել «չորս հարյուր երկու հազար վաթսուն» թիվը։

- Հազարների դաս՝ 402
- Միավորների դաս՝ 060 (հարյուրյակ չկա, 6 տասնյակ, 0 միավոր)

Պատասխան՝ **402 060**։

### Վարժություններ

1. Գրիր թվանշաններով՝ ութ միլիոն երեսուն հազար հինգ։
2. Կարդա բարձրաձայն՝ 70 030 301։
3. 582 196 թվում ի՞նչ է ցույց տալիս 8 թվանշանը։
4. Գրիր ամենամեծ վեցանիշ և ամենափոքր յոթանիշ թիվը։`,
              ru: `## Натуральные числа

Числа, которыми мы считаем, — 1, 2, 3, 4, … — называются **натуральными**. Множество натуральных чисел обозначается $\\mathbb{N}$. У него нет наибольшего элемента: какое бы число ты ни назвал, прибавив 1, получишь большее.

Ноль в армянской и российской школьной традиции *не* считается натуральным числом, а вместе с 0 натуральные числа образуют множество $\\mathbb{N}_0$.

## Разряды и классы

Числа записываются десятью цифрами: 0, 1, 2, …, 9. **Значение цифры зависит от её места** — разряда. В числе 777 первая семёрка означает семьсот, вторая — семьдесят, третья — семь.

Разряды объединяются в **классы** по три:

| Класс | Разряды |
|---|---|
| Класс единиц | сотни · десятки · единицы |
| Класс тысяч | сотни тысяч · десятки тысяч · тысячи |
| Класс миллионов | сотни миллионов · десятки миллионов · миллионы |
| Класс миллиардов | … |

Чтобы прочитать **35 207 418**, разбей справа на классы: 35 | 207 | 418 → *тридцать пять миллионов двести семь тысяч четыреста восемнадцать*.

## Почему «десятичная»?

Каждый разряд в **десять раз** больше соседнего справа: 10 единиц — десяток, 10 десятков — сотня и так далее. *Decem* по-латыни — десять.

### Разобранный пример

Записать число «четыреста две тысячи шестьдесят».

- Класс тысяч: 402
- Класс единиц: 060 (сотен нет, 6 десятков, 0 единиц)

Ответ: **402 060**.

### Упражнения

1. Запиши цифрами: восемь миллионов тридцать тысяч пять.
2. Прочитай: 70 030 301.
3. Что обозначает цифра 8 в числе 582 196?
4. Запиши наибольшее шестизначное и наименьшее семизначное число.`,
            },
            quiz: [
              q(t("What does the digit 5 mean in 352 000?", "Ի՞նչ է նշանակում 5 թվանշանը 352 000 թվում։", "Что означает цифра 5 в числе 352 000?"), [t("5 thousands", "5 հազար", "5 тысяч"), t("50 thousands", "50 հազար", "50 тысяч"), t("500", "500", "500")], 1),
              q(t("Which is NOT a natural number?", "Ո՞րը բնական թիվ ՉԷ։", "Какое число НЕ натуральное?"), [t("1", "1", "1"), t("0", "0", "0"), t("1000", "1000", "1000")], 1),
              q(t("How many digits does the smallest seven-digit number have in its thousands class?", "Ամենափոքր յոթանիշ թիվը քանի՞ թվանշան ունի հազարների դասում։", "Сколько цифр в классе тысяч у наименьшего семизначного числа?"), [t("3", "3", "3"), t("1", "1", "1"), t("7", "7", "7")], 0, t("1 000 000 = 1 | 000 | 000; the thousands class is 000.", "1 000 000 = 1 | 000 | 000, հազարների դասը 000 է։", "1 000 000 = 1 | 000 | 000; класс тысяч — 000.")),
            ],
          },
          {
            slug: "number-ray",
            title: t("The number ray and comparing numbers", "Թվային ճառագայթ և թվերի համեմատում", "Координатный луч и сравнение чисел"),
            objectives: {
              en: ["Mark natural numbers on a coordinate ray", "Compare numbers using the ray and digit-by-digit", "Write double inequalities like 3 < x < 7"],
              hy: ["Նշել բնական թվերը կոորդինատային ճառագայթի վրա", "Համեմատել թվերը ճառագայթով և կարգ առ կարգ", "Գրել կրկնակի անհավասարություններ՝ 3 < x < 7"],
              ru: ["Отмечать натуральные числа на координатном луче", "Сравнивать числа с помощью луча и поразрядно", "Записывать двойные неравенства вида 3 < x < 7"],
            },
            content: {
              en: `## The coordinate ray

Draw a ray starting at point **O**. Choose a **unit segment** and mark it off again and again: O → 1 → 2 → 3 … Each natural number now has its own point. The number is the **coordinate** of the point, written $A(3)$.

$$O \\xrightarrow{\\quad 1 \\quad 2 \\quad 3 \\quad 4 \\quad 5 \\quad} $$

Of two numbers on the ray, the one further to the **right** is **greater**.

## Comparing by digits

For large numbers we do not need a ray:

1. The number with **more digits** is greater: 10 234 > 9 999.
2. If the numbers have the same length, compare **from the left**, place by place, until the digits differ: 48 **7**12 > 48 **5**99.

## Double inequalities

"$x$ is greater than 3 and less than 7" is written $3 < x < 7$. The natural solutions are 4, 5, 6.

### Worked example

Which natural numbers satisfy $998 < x \\le 1001$?

The sign $\\le$ means "less than or equal", so 1001 is included: **999, 1000, 1001**.

### Exercises

1. Draw a ray with unit 1 cm and mark points $A(2)$, $B(5)$, $C(7)$.
2. Compare: 70 001 and 69 999; 405 060 and 405 600.
3. List all natural $x$ such that $12 \\le x < 16$.
4. How many natural numbers lie between 100 and 200 (not including them)?`,
              hy: `## Կոորդինատային ճառագայթ

Գծիր ճառագայթ, որը սկսվում է **O** կետից։ Ընտրիր **միավոր հատված** և այն տեղադրիր նորից ու նորից՝ O → 1 → 2 → 3 … Այժմ յուրաքանչյուր բնական թիվ ունի իր կետը։ Թիվը կետի **կոորդինատն** է, գրում ենք $A(3)$։

$$O \\xrightarrow{\\quad 1 \\quad 2 \\quad 3 \\quad 4 \\quad 5 \\quad} $$

Ճառագայթի վրա երկու թվերից ավելի **աջ** գտնվողը **մեծ** է։

## Համեմատում կարգ առ կարգ

Մեծ թվերի համար ճառագայթ պետք չէ․

1. **Ավելի շատ թվանշան** ունեցող թիվը մեծ է․ 10 234 > 9 999։
2. Եթե երկարությունը նույնն է, համեմատիր **ձախից**՝ կարգ առ կարգ, մինչև թվանշանները տարբերվեն․ 48 **7**12 > 48 **5**99։

## Կրկնակի անհավասարություններ

«$x$-ը 3-ից մեծ է և 7-ից փոքր» գրվում է $3 < x < 7$։ Բնական լուծումները՝ 4, 5, 6։

### Լուծված օրինակ

Ո՞ր բնական թվերն են բավարարում $998 < x \\le 1001$ պայմանին։

$\\le$ նշանը նշանակում է «փոքր է կամ հավասար», ուստի 1001-ը ներառված է․ **999, 1000, 1001**։

### Վարժություններ

1. Գծիր ճառագայթ 1 սմ միավորով և նշիր $A(2)$, $B(5)$, $C(7)$ կետերը։
2. Համեմատիր՝ 70 001 և 69 999, 405 060 և 405 600։
3. Գրիր բոլոր բնական $x$-երը, որոնց համար $12 \\le x < 16$։
4. Քանի՞ բնական թիվ է գտնվում 100-ի և 200-ի միջև (առանց դրանց)։`,
              ru: `## Координатный луч

Начерти луч с началом в точке **O**. Выбери **единичный отрезок** и откладывай его снова и снова: O → 1 → 2 → 3 … Теперь каждому натуральному числу соответствует своя точка. Число — это **координата** точки, записывается $A(3)$.

$$O \\xrightarrow{\\quad 1 \\quad 2 \\quad 3 \\quad 4 \\quad 5 \\quad} $$

Из двух чисел на луче **больше** то, которое расположено **правее**.

## Поразрядное сравнение

Для больших чисел луч не нужен:

1. Больше то число, в котором **больше цифр**: 10 234 > 9 999.
2. Если длина одинакова, сравниваем **слева**, разряд за разрядом, до первой разной цифры: 48 **7**12 > 48 **5**99.

## Двойные неравенства

«$x$ больше 3 и меньше 7» записывают так: $3 < x < 7$. Натуральные решения: 4, 5, 6.

### Разобранный пример

Какие натуральные числа удовлетворяют условию $998 < x \\le 1001$?

Знак $\\le$ означает «меньше или равно», поэтому 1001 входит: **999, 1000, 1001**.

### Упражнения

1. Начерти луч с единичным отрезком 1 см и отметь точки $A(2)$, $B(5)$, $C(7)$.
2. Сравни: 70 001 и 69 999; 405 060 и 405 600.
3. Перечисли все натуральные $x$, для которых $12 \\le x < 16$.
4. Сколько натуральных чисел лежит между 100 и 200 (не включая их)?`,
            },
            quiz: [
              q(t("Which is greater?", "Ո՞րն է մեծ։", "Какое число больше?"), [t("89 999", "89 999", "89 999"), t("90 001", "90 001", "90 001")], 1),
              q(t("How many natural numbers satisfy 5 < x ≤ 9?", "Քանի՞ բնական թիվ է բավարարում 5 < x ≤ 9 պայմանին։", "Сколько натуральных чисел удовлетворяют 5 < x ≤ 9?"), [t("3", "3", "3"), t("4", "4", "4"), t("5", "5", "5")], 1, t("6, 7, 8, 9", "6, 7, 8, 9", "6, 7, 8, 9")),
            ],
          },
          {
            slug: "rounding-natural",
            title: t("Rounding natural numbers", "Բնական թվերի կլորացում", "Округление натуральных чисел"),
            objectives: {
              en: ["Round to tens, hundreds, thousands", "Use the ≈ sign correctly", "Decide when rounding up or down is appropriate in a real situation"],
              hy: ["Կլորացնել տասնյակների, հարյուրյակների, հազարների", "Ճիշտ օգտագործել ≈ նշանը", "Որոշել, երբ է իրական իրավիճակում նպատակահարմար կլորացնել վեր կամ վար"],
              ru: ["Округлять до десятков, сотен, тысяч", "Правильно использовать знак ≈", "Решать, когда в реальной ситуации округлять с избытком или с недостатком"],
            },
            content: {
              en: `## Why round?

A city has 1 048 311 inhabitants. Nobody says that — we say "about a million". Replacing a number with a nearby "round" number is **rounding**. We write $1\\,048\\,311 \\approx 1\\,000\\,000$. The sign $\\approx$ means *approximately equal*.

## The rule

To round to a given place:

1. Underline the digit in that place.
2. Look at the digit **right after** it.
3. If it is **0, 1, 2, 3, 4** — leave the underlined digit as it is (**round down**).
4. If it is **5, 6, 7, 8, 9** — increase the underlined digit by 1 (**round up**).
5. Replace all digits after the underlined one with zeros.

### Examples

- $3\\,7\\underline{4}6 \\approx 3\\,750$ (to tens; next digit is 6 → up)
- $3\\,\\underline{7}46 \\approx 3\\,700$ (to hundreds; next digit is 4 → down)
- $\\underline{3}\\,746 \\approx 4\\,000$ (to thousands; next digit is 7 → up)

## Rounding in real life

Rounding by the rule is not always right:

- 7 buses needed for 302 students if each bus holds 50? $302 \\div 50 = 6{,}04$ → you need **7** buses (round **up**, even though the rule says 6).
- With 302 drams and sweets at 50 drams each you can buy **6** sweets (round **down**).

### Exercises

1. Round 48 592 to tens, hundreds, thousands and ten-thousands.
2. Which numbers round to 600 when rounded to hundreds? Give the smallest and the largest.
3. A roll of ribbon is 95 cm; each bow needs 20 cm. How many bows?`,
              hy: `## Ինչու՞ կլորացնել

Քաղաքն ունի 1 048 311 բնակիչ։ Այդպես ոչ ոք չի ասում, ասում ենք՝ «մոտ մեկ միլիոն»։ Թիվը մոտակա «կլոր» թվով փոխարինելը **կլորացում** է։ Գրում ենք $1\\,048\\,311 \\approx 1\\,000\\,000$։ $\\approx$ նշանը նշանակում է *մոտավորապես հավասար*։

## Կանոնը

Տրված կարգով կլորացնելու համար․

1. Ընդգծիր այդ կարգի թվանշանը։
2. Նայիր **անմիջապես հաջորդ** թվանշանին։
3. Եթե այն **0, 1, 2, 3, 4** է՝ ընդգծված թվանշանը թող նույնը (**կլորացում պակասով**)։
4. Եթե **5, 6, 7, 8, 9** է՝ ընդգծված թվանշանը մեծացրու 1-ով (**կլորացում ավելիով**)։
5. Ընդգծվածից հետո բոլոր թվանշանները փոխարինիր զրոներով։

### Օրինակներ

- $3\\,7\\underline{4}6 \\approx 3\\,750$ (տասնյակների, հաջորդը 6 է → ավելիով)
- $3\\,\\underline{7}46 \\approx 3\\,700$ (հարյուրյակների, հաջորդը 4 է → պակասով)
- $\\underline{3}\\,746 \\approx 4\\,000$ (հազարների, հաջորդը 7 է → ավելիով)

## Կլորացում կյանքում

Կանոնով կլորացնելը միշտ ճիշտ չէ․

- 302 աշակերտի համար քանի՞ ավտոբուս է պետք, եթե մեկում 50 տեղ է․ $302 \\div 50 = 6{,}04$ → պետք է **7** ավտոբուս (կլորացնում ենք **ավելիով**, թեև կանոնն ասում է 6)։
- 302 դրամով, եթե կոնֆետը 50 դրամ է, կարելի է գնել **6** կոնֆետ (**պակասով**)։

### Վարժություններ

1. Կլորացրու 48 592-ը տասնյակների, հարյուրյակների, հազարների և տասհազարյակների։
2. Ո՞ր թվերը հարյուրյակների կլորացնելիս դառնում են 600։ Նշիր ամենափոքրը և ամենամեծը։
3. Ժապավենը 95 սմ է, ամեն փնջիկի համար պետք է 20 սմ։ Քանի՞ փնջիկ կստացվի։`,
              ru: `## Зачем округлять?

В городе 1 048 311 жителей. Так никто не говорит — говорят «около миллиона». Замена числа близким «круглым» числом называется **округлением**. Записываем $1\\,048\\,311 \\approx 1\\,000\\,000$. Знак $\\approx$ означает *приближённо равно*.

## Правило

Чтобы округлить до данного разряда:

1. Подчеркни цифру этого разряда.
2. Посмотри на цифру **сразу после** неё.
3. Если это **0, 1, 2, 3, 4** — подчёркнутую цифру оставляем (**округление с недостатком**).
4. Если **5, 6, 7, 8, 9** — подчёркнутую цифру увеличиваем на 1 (**округление с избытком**).
5. Все цифры после подчёркнутой заменяем нулями.

### Примеры

- $3\\,7\\underline{4}6 \\approx 3\\,750$ (до десятков; следующая цифра 6 → с избытком)
- $3\\,\\underline{7}46 \\approx 3\\,700$ (до сотен; следующая 4 → с недостатком)
- $\\underline{3}\\,746 \\approx 4\\,000$ (до тысяч; следующая 7 → с избытком)

## Округление в жизни

Округлять по правилу не всегда верно:

- Сколько автобусов нужно для 302 учеников, если в автобусе 50 мест? $302 \\div 50 = 6{,}04$ → нужно **7** автобусов (округляем **с избытком**, хотя правило говорит 6).
- На 302 драма при цене конфеты 50 драмов можно купить **6** конфет (**с недостатком**).

### Упражнения

1. Округли 48 592 до десятков, сотен, тысяч и десятков тысяч.
2. Какие числа при округлении до сотен дают 600? Назови наименьшее и наибольшее.
3. Лента длиной 95 см, на один бант нужно 20 см. Сколько бантов получится?`,
            },
            quiz: [
              q(t("Round 7 849 to hundreds.", "Կլորացրու 7 849-ը հարյուրյակների։", "Округли 7 849 до сотен."), [t("7 800", "7 800", "7 800"), t("7 900", "7 900", "7 900"), t("8 000", "8 000", "8 000")], 0),
              q(t("Round 7 849 to thousands.", "Կլորացրու 7 849-ը հազարների։", "Округли 7 849 до тысяч."), [t("7 000", "7 000", "7 000"), t("8 000", "8 000", "8 000")], 1),
            ],
          },
          {
            slug: "powers",
            title: t("Powers with a natural exponent", "Աստիճան բնական ցուցիչով", "Степень с натуральным показателем"),
            objectives: {
              en: ["Write repeated multiplication as a power", "Name base and exponent", "Compute squares and cubes of small numbers"],
              hy: ["Նույն արտադրիչների արտադրյալը գրել աստիճանի տեսքով", "Անվանել հիմքն ու ցուցիչը", "Հաշվել փոքր թվերի քառակուսին և խորանարդը"],
              ru: ["Записывать произведение одинаковых множителей степенью", "Называть основание и показатель", "Вычислять квадраты и кубы небольших чисел"],
            },
            content: {
              en: `## A shortcut for repeated multiplication

$2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Writing five twos is tedious, so we write $2^5$ and read it "two to the fifth power".

$$a^n = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{n \\text{ factors}}$$

- $a$ is the **base** — the number being multiplied.
- $n$ is the **exponent** — how many times.
- By agreement $a^1 = a$.

## Squares and cubes

- $a^2$ is "a squared": the area of a square with side $a$.
- $a^3$ is "a cubed": the volume of a cube with edge $a$.

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $n^2$ | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 |
| $n^3$ | 1 | 8 | 27 | 64 | 125 | 216 | 343 | 512 | 729 | 1000 |

Learn the squares up to 10 by heart — they come back in every later grade.

## Powers of 10

$10^2 = 100$, $10^3 = 1000$, $10^6 = 1\\,000\\,000$. The exponent equals the number of zeros. So $35\\,000 = 35 \\cdot 10^3$.

## Order of operations

Powers are computed **before** multiplication and division: $3 \\cdot 2^3 = 3 \\cdot 8 = 24$, not $6^3$.

### Exercises

1. Write as a power: $7 \\cdot 7 \\cdot 7$; $10 \\cdot 10 \\cdot 10 \\cdot 10$.
2. Compute: $4^3$, $11^2$, $2^{10}$.
3. Compare $2^5$ and $5^2$.
4. Compute $5 \\cdot 3^2 - 2^4$.`,
              hy: `## Կրկնվող բազմապատկման կարճ գրություն

$2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$։ Հինգ երկուս գրելը հոգնեցուցիչ է, դրա համար գրում ենք $2^5$ և կարդում ենք «երկուսի հինգերորդ աստիճան»։

$$a^n = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{n \\text{ արտադրիչ}}$$

- $a$-ն **հիմքն** է՝ բազմապատկվող թիվը։
- $n$-ը **ցուցիչն** է՝ քանի անգամ։
- Պայմանավորվածությամբ $a^1 = a$։

## Քառակուսի և խորանարդ

- $a^2$՝ «a-ի քառակուսի»․ $a$ կողմով քառակուսու մակերեսը։
- $a^3$՝ «a-ի խորանարդ»․ $a$ կողով խորանարդի ծավալը։

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $n^2$ | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 |
| $n^3$ | 1 | 8 | 27 | 64 | 125 | 216 | 343 | 512 | 729 | 1000 |

Քառակուսիները մինչև 10 անգիր սովորիր՝ դրանք հանդիպում են բոլոր հաջորդ դասարաններում։

## 10-ի աստիճաններ

$10^2 = 100$, $10^3 = 1000$, $10^6 = 1\\,000\\,000$։ Ցուցիչը հավասար է զրոների թվին։ Ուրեմն $35\\,000 = 35 \\cdot 10^3$։

## Գործողությունների կարգ

Աստիճանը հաշվվում է բազմապատկումից և բաժանումից **առաջ**․ $3 \\cdot 2^3 = 3 \\cdot 8 = 24$, ոչ թե $6^3$։

### Վարժություններ

1. Գրիր աստիճանի տեսքով՝ $7 \\cdot 7 \\cdot 7$; $10 \\cdot 10 \\cdot 10 \\cdot 10$։
2. Հաշվիր՝ $4^3$, $11^2$, $2^{10}$։
3. Համեմատիր $2^5$-ը և $5^2$-ը։
4. Հաշվիր $5 \\cdot 3^2 - 2^4$։`,
              ru: `## Короткая запись повторяющегося умножения

$2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Писать пять двоек долго, поэтому пишут $2^5$ и читают «два в пятой степени».

$$a^n = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{n \\text{ множителей}}$$

- $a$ — **основание** степени, то, что умножаем.
- $n$ — **показатель**, сколько раз.
- По договорённости $a^1 = a$.

## Квадрат и куб

- $a^2$ — «a в квадрате»: площадь квадрата со стороной $a$.
- $a^3$ — «a в кубе»: объём куба с ребром $a$.

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $n^2$ | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 |
| $n^3$ | 1 | 8 | 27 | 64 | 125 | 216 | 343 | 512 | 729 | 1000 |

Выучи квадраты до 10 наизусть — они встретятся во всех следующих классах.

## Степени десяти

$10^2 = 100$, $10^3 = 1000$, $10^6 = 1\\,000\\,000$. Показатель равен числу нулей. Поэтому $35\\,000 = 35 \\cdot 10^3$.

## Порядок действий

Степень вычисляется **раньше** умножения и деления: $3 \\cdot 2^3 = 3 \\cdot 8 = 24$, а не $6^3$.

### Упражнения

1. Запиши степенью: $7 \\cdot 7 \\cdot 7$; $10 \\cdot 10 \\cdot 10 \\cdot 10$.
2. Вычисли: $4^3$, $11^2$, $2^{10}$.
3. Сравни $2^5$ и $5^2$.
4. Вычисли $5 \\cdot 3^2 - 2^4$.`,
            },
            quiz: [
              q(t("What is 3⁴?", "Ի՞նչ է 3⁴։", "Чему равно 3⁴?"), [t("12", "12", "12"), t("81", "81", "81"), t("64", "64", "64")], 1),
              q(t("In 7⁵, the number 5 is the…", "7⁵ գրառման մեջ 5-ը…", "В записи 7⁵ число 5 — это…"), [t("base", "հիմքն է", "основание"), t("exponent", "ցուցիչն է", "показатель")], 1),
              q(t("2 · 5² = ?", "2 · 5² = ?", "2 · 5² = ?"), [t("100", "100", "100"), t("50", "50", "50"), t("20", "20", "20")], 1),
            ],
          },
        ],
      },
      unit(t("Operations with natural numbers", "Գործողություններ բնական թվերով", "Действия с натуральными числами"), t("Properties of the four operations, numerical and letter expressions, equations.", "Չորս գործողությունների հատկություններ, թվային և տառային արտահայտություններ, հավասարումներ։", "Свойства четырёх действий, числовые и буквенные выражения, уравнения."), [
        ["addition-properties", "Addition and its properties", "Գումարում և նրա հատկությունները", "Сложение и его свойства"],
        ["subtraction-properties", "Subtraction and its properties", "Հանում և նրա հատկությունները", "Вычитание и его свойства"],
        ["multiplication-properties", "Multiplication and the distributive law", "Բազմապատկում և բաշխական օրենք", "Умножение и распределительный закон"],
        ["division-and-remainder", "Division and division with remainder", "Բաժանում և բաժանում մնացորդով", "Деление и деление с остатком"],
        ["letter-expressions", "Letter expressions and formulas", "Տառային արտահայտություններ և բանաձևեր", "Буквенные выражения и формулы"],
        ["simple-equations", "Equations", "Հավասարումներ", "Уравнения"],
      ]),
      unit(t("Divisibility", "Բաժանելիություն", "Делимость чисел"), t("Divisors and multiples, divisibility rules, primes, GCD and LCM.", "Բաժանարարներ և բազմապատիկներ, բաժանելիության հայտանիշներ, պարզ թվեր, ԱՄԲ և ՓԸԲ։", "Делители и кратные, признаки делимости, простые числа, НОД и НОК."), [
        ["divisors-multiples", "Divisors and multiples", "Բաժանարարներ և բազմապատիկներ", "Делители и кратные"],
        ["divisibility-2-5-10", "Divisibility by 2, 5 and 10", "Բաժանելիություն 2-ի, 5-ի և 10-ի", "Признаки делимости на 2, 5 и 10"],
        ["divisibility-3-9", "Divisibility by 3 and 9", "Բաժանելիություն 3-ի և 9-ի", "Признаки делимости на 3 и 9"],
        ["primes-composites", "Prime and composite numbers", "Պարզ և բաղադրյալ թվեր", "Простые и составные числа"],
        ["prime-factorization", "Prime factorisation", "Վերլուծում պարզ արտադրիչների", "Разложение на простые множители"],
        ["gcd-lcm", "GCD and LCM", "ԱՄԲ և ՓԸԲ", "НОД и НОК"],
      ]),
      unit(t("Common fractions", "Հասարակ կոտորակներ", "Обыкновенные дроби"), t("Meaning of a fraction, comparison, equivalent fractions, addition and subtraction, mixed numbers.", "Կոտորակի իմաստը, համեմատում, հավասար կոտորակներ, գումարում և հանում, խառը թվեր։", "Смысл дроби, сравнение, равные дроби, сложение и вычитание, смешанные числа."), [
        ["fraction-meaning", "What a fraction is", "Ի՞նչ է կոտորակը", "Что такое дробь"],
        ["proper-improper", "Proper and improper fractions", "Կանոնավոր և անկանոն կոտորակներ", "Правильные и неправильные дроби"],
        ["basic-property", "The basic property of a fraction", "Կոտորակի հիմնական հատկությունը", "Основное свойство дроби"],
        ["reducing-fractions", "Reducing fractions", "Կոտորակների կրճատում", "Сокращение дробей"],
        ["common-denominator", "Common denominator and comparison", "Ընդհանուր հայտարար և համեմատում", "Общий знаменатель и сравнение"],
        ["add-subtract-fractions", "Adding and subtracting fractions", "Կոտորակների գումարում և հանում", "Сложение и вычитание дробей"],
        ["mixed-numbers", "Mixed numbers", "Խառը թվեր", "Смешанные числа"],
        ["multiply-divide-fractions", "Multiplying and dividing fractions", "Կոտորակների բազմապատկում և բաժանում", "Умножение и деление дробей"],
      ]),
      unit(t("Decimal fractions", "Տասնորդական կոտորակներ", "Десятичные дроби"), t("Reading, comparing, rounding and the four operations with decimals.", "Տասնորդականների կարդալ, համեմատել, կլորացնել և չորս գործողություն։", "Чтение, сравнение, округление и четыре действия с десятичными дробями."), [
        ["decimal-notation", "Decimal notation", "Տասնորդական գրառում", "Десятичная запись дробей"],
        ["compare-decimals", "Comparing decimals", "Տասնորդականների համեմատում", "Сравнение десятичных дробей"],
        ["add-subtract-decimals", "Adding and subtracting decimals", "Տասնորդականների գումարում և հանում", "Сложение и вычитание десятичных дробей"],
        ["multiply-decimals", "Multiplying decimals", "Տասնորդականների բազմապատկում", "Умножение десятичных дробей"],
        ["divide-decimals", "Dividing decimals", "Տասնորդականների բաժանում", "Деление десятичных дробей"],
        ["round-decimals", "Rounding decimals", "Տասնորդականների կլորացում", "Округление десятичных дробей"],
        ["arithmetic-mean", "The arithmetic mean", "Միջին թվաբանական", "Среднее арифметическое"],
      ]),
      unit(t("Percentages", "Տոկոսներ", "Проценты"), t("Percent as a hundredth, three basic problem types, charts.", "Տոկոսը որպես հարյուրերորդական, երեք հիմնական խնդիր, դիագրամներ։", "Процент как сотая часть, три типа задач, диаграммы."), [
        ["percent-meaning", "What a percent is", "Ի՞նչ է տոկոսը", "Что такое процент"],
        ["percent-of-number", "Finding a percent of a number", "Թվի տոկոսի գտնելը", "Нахождение процента от числа"],
        ["number-from-percent", "Finding a number from its percent", "Թվի գտնելն իր տոկոսով", "Нахождение числа по его проценту"],
        ["percent-ratio", "What percent one number is of another", "Ո՞ր տոկոսն է մի թիվը մյուսի", "Процентное отношение двух чисел"],
        ["pie-bar-charts", "Pie and bar charts", "Շրջանաձև և սյունակաձև դիագրամներ", "Круговые и столбчатые диаграммы"],
      ]),
      unit(t("Geometry basics", "Երկրաչափության հիմունքներ", "Наглядная геометрия"), t("Segments, angles and the protractor, area and volume, rectangular box.", "Հատված, անկյուն և անկյունաչափ, մակերես և ծավալ, ուղղանկյունանիստ։", "Отрезки, углы и транспортир, площадь и объём, прямоугольный параллелепипед."), [
        ["segments-measurement", "Segments, lengths, scales", "Հատված, երկարություն, մասշտաբ", "Отрезки, длины, масштаб"],
        ["angles-protractor", "Angles and the protractor", "Անկյուններ և անկյունաչափ", "Углы и транспортир"],
        ["triangles-types", "Types of triangles", "Եռանկյունների տեսակները", "Виды треугольников"],
        ["area-rectangle-square", "Area of rectangle and square", "Ուղղանկյան և քառակուսու մակերես", "Площадь прямоугольника и квадрата"],
        ["volume-box", "Volume of a rectangular box", "Ուղղանկյունանիստի ծավալ", "Объём прямоугольного параллелепипеда"],
      ]),
    ],
  },
  {
    subject: "math",
    grade: 6,
    title: t("Mathematics · Grade 6", "Մաթեմատիկա · 6-րդ դասարան", "Математика · 6 класс"),
    description: t(
      "Ratios and proportion, rational numbers (negative numbers), equations, coordinates, and preparation for algebra and geometry.",
      "Հարաբերություն և համեմատություն, ռացիոնալ (բացասական) թվեր, հավասարումներ, կոորդինատներ, նախապատրաստություն հանրահաշվին և երկրաչափությանը։",
      "Отношения и пропорции, рациональные (отрицательные) числа, уравнения, координаты, подготовка к алгебре и геометрии.",
    ),
    curriculumNotes: notes(
      ["Armenia grade 6: fractions review, ratios, proportions and percentages, integers and rational numbers, operations with rational numbers, linear equations, coordinate plane, circle and circumference, symmetry. Last year before algebra and geometry split.", "Հայաստան, 6-րդ դասարան՝ կոտորակների ամփոփում, հարաբերություն, համեմատություն, տոկոս, ամբողջ և ռացիոնալ թվեր, գործողություններ դրանց հետ, գծային հավասարումներ, կոորդինատային հարթություն, շրջանագիծ, համաչափություն։ Վերջին տարին մինչև հանրահաշվի և երկրաչափության բաժանումը։", "Армения, 6 класс: повторение дробей, отношения, пропорции и проценты, целые и рациональные числа, действия с ними, линейные уравнения, координатная плоскость, окружность, симметрия. Последний год перед разделением на алгебру и геометрию."],
      ["Russia grade 6 (ФГОС ООО, 5 h/week, 175 h): divisibility, fractions with different denominators, ratios and proportions, scale, circle and circumference, positive and negative numbers, rational numbers, solving equations, coordinate plane, statistics basics.", "Ռուսաստան, 6-րդ դասարան (ФГОС ООО, 5 ժ/շաբ.)՝ բաժանելիություն, տարբեր հայտարարով կոտորակներ, հարաբերություն և համեմատություն, մասշտաբ, շրջանագիծ, դրական և բացասական թվեր, ռացիոնալ թվեր, հավասարումներ, կոորդինատային հարթություն, վիճակագրության հիմունքներ։", "Россия, 6 класс (ФГОС ООО, 5 ч/нед., 175 ч): делимость, дроби с разными знаменателями, отношения и пропорции, масштаб, окружность и круг, положительные и отрицательные числа, рациональные числа, решение уравнений, координатная плоскость, элементы статистики."],
    ),
    hoursPerWeek: { armenia: 5, russia: 5 },
    units: [
      unit(t("Fractions: review and extension", "Կոտորակներ․ ամփոփում և զարգացում", "Дроби: повторение и развитие"), t("Operations with fractions of different denominators; fraction of a number and number by fraction.", "Տարբեր հայտարարով կոտորակների գործողություններ, թվի մաս և թիվ իր մասով։", "Действия с дробями с разными знаменателями; дробь от числа и число по дроби."), [
        ["lcm-denominators", "Reducing to a common denominator with LCM", "Ընդհանուր հայտարարի բերել ՓԸԲ-ով", "Приведение к общему знаменателю через НОК"],
        ["fraction-of-number", "Finding a fraction of a number", "Թվի մասի գտնելը", "Нахождение дроби от числа"],
        ["number-by-fraction", "Finding a number by its fraction", "Թվի գտնելն իր մասով", "Нахождение числа по его дроби"],
        ["reciprocals", "Reciprocal numbers", "Փոխհակադարձ թվեր", "Взаимно обратные числа"],
        ["fraction-expressions", "Fractional expressions", "Կոտորակային արտահայտություններ", "Дробные выражения"],
      ]),
      unit(t("Ratios and proportions", "Հարաբերություն և համեմատություն", "Отношения и пропорции"), t("Ratio, proportion and its basic property, direct and inverse proportionality, scale.", "Հարաբերություն, համեմատություն և նրա հիմնական հատկությունը, ուղիղ և հակադարձ համեմատականություն, մասշտաբ։", "Отношение, пропорция и её основное свойство, прямая и обратная пропорциональность, масштаб."), [
        ["ratio", "Ratios", "Հարաբերություն", "Отношения"],
        ["proportion", "Proportions and the cross-product rule", "Համեմատություն և նրա հիմնական հատկությունը", "Пропорции и основное свойство пропорции"],
        ["direct-inverse", "Direct and inverse proportionality", "Ուղիղ և հակադարձ համեմատականություն", "Прямая и обратная пропорциональность"],
        ["scale", "Scale on maps and drawings", "Մասշտաբ քարտեզների և գծագրերի վրա", "Масштаб"],
        ["circumference-area", "Circumference and area of a circle", "Շրջանագծի երկարություն և շրջանի մակերես", "Длина окружности и площадь круга"],
      ]),
      unit(t("Positive and negative numbers", "Դրական և բացասական թվեր", "Положительные и отрицательные числа"), t("Coordinates on a line, opposite numbers, absolute value, comparison.", "Կոորդինատներ ուղղի վրա, հակադիր թվեր, բացարձակ արժեք, համեմատում։", "Координаты на прямой, противоположные числа, модуль, сравнение."), [
        ["coordinate-line", "The coordinate line", "Կոորդինատային ուղիղ", "Координатная прямая"],
        ["opposite-numbers", "Opposite numbers and integers", "Հակադիր թվեր և ամբողջ թվեր", "Противоположные числа и целые числа"],
        ["absolute-value", "Absolute value (modulus)", "Թվի մոդուլ", "Модуль числа"],
        ["compare-rationals", "Comparing rational numbers", "Ռացիոնալ թվերի համեմատում", "Сравнение рациональных чисел"],
      ]),
      unit(t("Operations with rational numbers", "Գործողություններ ռացիոնալ թվերով", "Действия с рациональными числами"), t("Adding, subtracting, multiplying and dividing numbers with different signs.", "Տարբեր նշանի թվերի գումարում, հանում, բազմապատկում, բաժանում։", "Сложение, вычитание, умножение и деление чисел с разными знаками."), [
        ["add-negatives", "Adding negative numbers", "Բացասական թվերի գումարում", "Сложение отрицательных чисел"],
        ["add-different-signs", "Adding numbers with different signs", "Տարբեր նշանի թվերի գումարում", "Сложение чисел с разными знаками"],
        ["subtract-rationals", "Subtraction", "Հանում", "Вычитание"],
        ["multiply-rationals", "Multiplication: the sign rules", "Բազմապատկում․ նշանների կանոնները", "Умножение: правила знаков"],
        ["divide-rationals", "Division", "Բաժանում", "Деление"],
        ["rational-properties", "Properties of operations with rational numbers", "Գործողությունների հատկությունները ռացիոնալ թվերով", "Свойства действий с рациональными числами"],
      ]),
      unit(t("Expressions and equations", "Արտահայտություններ և հավասարումներ", "Выражения и уравнения"), t("Opening brackets, like terms, linear equations and problems solved with equations.", "Փակագծերի բացում, նման անդամներ, գծային հավասարումներ և խնդիրներ հավասարումներով։", "Раскрытие скобок, подобные слагаемые, линейные уравнения и задачи на составление уравнений."), [
        ["opening-brackets", "Opening brackets", "Փակագծերի բացում", "Раскрытие скобок"],
        ["coefficient-like-terms", "Coefficient and like terms", "Գործակից և նման անդամներ", "Коэффициент и подобные слагаемые"],
        ["solving-linear-equations", "Solving equations", "Հավասարումների լուծում", "Решение уравнений"],
        ["problems-with-equations", "Word problems solved with equations", "Խնդիրների լուծում հավասարումների միջոցով", "Решение задач с помощью уравнений"],
      ]),
      unit(t("Coordinates and geometry", "Կոորդինատներ և երկրաչափություն", "Координаты и геометрия"), t("Perpendicular and parallel lines, the coordinate plane, graphs, symmetry.", "Ուղղահայաց և զուգահեռ ուղիղներ, կոորդինատային հարթություն, գրաֆիկներ, համաչափություն։", "Перпендикулярные и параллельные прямые, координатная плоскость, графики, симметрия."), [
        ["perpendicular-parallel", "Perpendicular and parallel lines", "Ուղղահայաց և զուգահեռ ուղիղներ", "Перпендикулярные и параллельные прямые"],
        ["coordinate-plane", "The coordinate plane", "Կոորդինատային հարթություն", "Координатная плоскость"],
        ["reading-graphs", "Reading graphs and diagrams", "Գրաֆիկների և դիագրամների ընթերցում", "Чтение графиков и диаграмм"],
        ["symmetry", "Axial and central symmetry", "Առանցքային և կենտրոնային համաչափություն", "Осевая и центральная симметрия"],
        ["grade6-review", "Review: ready for algebra and geometry", "Ամփոփում․ պատրաստ ենք հանրահաշվին և երկրաչափությանը", "Повторение: готовимся к алгебре и геометрии"],
      ]),
    ],
  },
];
