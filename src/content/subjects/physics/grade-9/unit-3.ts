import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Oscillations and waves", "Տատանումներ և ալիքներ", "Механические колебания и волны. Звук"),
  summary: t("Free oscillations, pendulums, amplitude, period and frequency, damped and forced oscillations, resonance, longitudinal and transverse waves, and sound.", "Ազատ տատանումներ, ճոճանակներ, ամպլիտուդ, պարբերություն և հաճախություն, մարող և հարկադրական տատանումներ, ռեզոնանս, երկայնական և լայնական ալիքներ և ձայն։", "Свободные колебания, маятники, амплитуда, период и частота, затухающие и вынужденные колебания, резонанс, продольные и поперечные волны и звук."),
  lessons: [
    lesson(
      "oscillations-basics",
      ["Free oscillations; pendulums", "Ազատ տատանումներ, ճոճանակներ", "Свободные колебания; маятники"],
      {
        en: ["Say what an oscillation is and what conditions it needs", "Describe the spring pendulum and the thread pendulum", "Follow the exchange of energy during one swing"],
        hy: ["Ասել, թե ինչ է տատանումը և ինչ պայմաններ են նրան պետք", "Նկարագրել զսպանակավոր և թելավոր ճոճանակները", "Հետևել էներգիայի փոխանակմանը մեկ տատանման ընթացքում"],
        ru: ["Говорить, что такое колебание и какие условия для него нужны", "Описывать пружинный и нитяной маятники", "Следить за обменом энергии за одно колебание"],
      },
      {
        en: `## What an oscillation is

> **Oscillation** is a motion that repeats itself, in whole or nearly, after equal intervals of time.

A swing, a child's seesaw, a plucked guitar string, the needle of a sewing machine and the heart all oscillate. The position a body returns to and stays at when nothing disturbs it is called the **equilibrium position**.

Oscillations that happen on their own after one push, with no further help, are called **free oscillations**. Two conditions are needed for them:

- a force that always drives the body back to the equilibrium position;
- little friction, so the motion does not die out at once.

**Example 1.** A ball in a bowl rolls back and forth through the lowest point. In a bowl of honey it would stop in the middle after half a swing, because the friction is too large.

## The two school pendulums

| Pendulum | What it is | The restoring force |
|---|---|---|
| spring pendulum | a weight on a spring | the elastic force of the spring |
| thread pendulum | a small heavy ball on a long thread | the component of gravity along the arc |

A thread pendulum is treated as a **mathematical pendulum** when the thread is light and inextensible and the ball is small compared with the length. Its swings are counted from the lowest point, which is its equilibrium position.

**Example 2.** A weight hanging still on a spring is in equilibrium: the elastic force balances gravity. Pulled down and let go, it oscillates about that same position.

**Example 3.** One **full oscillation** is the motion from a point back to the same point in the same direction. A pendulum let go from the right returns to the right: that is one oscillation, not two.

## Energy during a swing

In a swing the two kinds of mechanical energy trade places twice.

| Point of the swing | Speed | Energy |
|---|---|---|
| the extreme points | zero | all potential |
| the equilibrium position | greatest | all kinetic |
| anywhere between | medium | partly both |

**Example 4.** A pendulum ball of mass $0{.}2$ kg is lifted by $0{.}05$ m when pulled aside. Its energy is $E = 0{.}2 \\cdot 10 \\cdot 0{.}05 = 0{.}1$ J, and at the lowest point all of it is kinetic, so $v = \\sqrt{2 \\cdot 10 \\cdot 0{.}05} = 1$ m/s.

**Example 5.** A spring pendulum compressed and released passes the equilibrium point fastest and stops for an instant at each end, where all its energy is in the stretched or compressed spring.

**Example 6.** Over many swings a real pendulum rises a little less each time. The lost mechanical energy has turned into heat in the air and in the suspension.

### Exercises

1. What is an oscillation?
2. What is the equilibrium position?
3. Which two conditions are needed for free oscillations?
4. Name the two school pendulums and the restoring force of each.
5. When is a thread pendulum called a mathematical pendulum?
6. What is one full oscillation?
7. At which point of a swing is the speed greatest, and at which is it zero?
8. A pendulum ball of $0{.}5$ kg is raised by $0{.}2$ m. Find its energy and the speed at the lowest point.

### Answers

1. A motion that repeats itself after equal intervals of time.
2. The position a body returns to and stays at when nothing disturbs it.
3. A force driving the body back to equilibrium, and small friction.
4. The spring pendulum, with the elastic force, and the thread pendulum, with the component of gravity.
5. When the thread is light and inextensible and the ball is small compared with the length.
6. The motion from a point back to the same point in the same direction.
7. Greatest at the equilibrium position, zero at the extreme points.
8. $E = 1$ J, $v = 2$ m/s.`,
        hy: `## Ի՞նչ է տատանումը

> **Տատանում** է այն շարժումը, որը հավասար ժամանակամիջոցներից հետո ամբողջովին կամ գրեթե կրկնվում է։

Ճոճանակը, մանկական ճոճաթիռը, քաշված կիթառի լարը, կարի մեքենայի ասեղը և սիրտը՝ բոլորը տատանվում են։ Այն դիրքը, որին մարմինը վերադառնում և որում մնում է, երբ ոչինչ նրան չի խանգարում, կոչվում է **հավասարակշռության դիրք**։

Այն տատանումները, որոնք մեկ հրումից հետո կատարվում են ինքնուրույն՝ առանց հետագա օգնության, կոչվում են **ազատ տատանումներ**։ Նրանց համար պետք է երկու պայման՝

- ուժ, որը մարմինը միշտ հետ է տանում հավասարակշռության դիրք,
- քիչ շփում, որ շարժումն անմիջապես չմարի։

**Օրինակ 1։** Թասի մեջ գնդակը գլորվում է առաջ և հետ ամենացած կետով։ Մեղրով լցված թասում այն կես տատանումից հետո կկանգներ մեջտեղում, որովհետև շփումը շատ մեծ է։

## Դպրոցական երկու ճոճանակը

| Ճոճանակ | Ինչ է դա | Վերականգնող ուժը |
|---|---|---|
| զսպանակավոր ճոճանակ | բեռ զսպանակի վրա | զսպանակի առաձգական ուժը |
| թելավոր ճոճանակ | փոքր ծանր գնդիկ երկար թելի վրա | ծանրության ուժի բաղադրիչն աղեղի երկայնքով |

Թելավոր ճոճանակը դիտվում է որպես **մաթեմատիկական ճոճանակ**, երբ թելը թեթև է և չձգվող, իսկ գնդիկը փոքր է երկարության համեմատ։ Նրա տատանումները հաշվվում են ամենացած կետից, որը նրա հավասարակշռության դիրքն է։

**Օրինակ 2։** Զսպանակից անշարժ կախված բեռը հավասարակշռության մեջ է. առաձգական ուժը հավասարակշռում է ծանրության ուժը։ Ներքև քաշված և բաց թողնված՝ այն տատանվում է ճիշտ այդ դիրքի շուրջը։

**Օրինակ 3։** Մեկ **լրիվ տատանում** է շարժումը մի կետից նույն կետ նույն ուղղությամբ։ Աջից բաց թողնված ճոճանակը վերադառնում է աջ. դա մեկ տատանում է, ոչ թե երկու։

## Էներգիան տատանման ընթացքում

Տատանման մեջ մեխանիկական էներգիայի երկու տեսակն երկու անգամ տեղ են փոխում։

| Տատանման կետը | Արագություն | Էներգիա |
|---|---|---|
| ծայրակետերը | զրո | ամբողջովին պոտենցիալ |
| հավասարակշռության դիրքը | ամենամեծ | ամբողջովին կինետիկ |
| ցանկացած միջանկյալ կետ | միջին | մասամբ երկուսն էլ |

**Օրինակ 4։** $0{,}2$ կգ զանգվածով ճոճանակի գնդիկը կողք քաշելիս բարձրանում է $0{,}05$ մ-ով։ Նրա էներգիան $E = 0{,}2 \\cdot 10 \\cdot 0{,}05 = 0{,}1$ Ջ է, և ամենացած կետում այն ամբողջովին կինետիկ է, ուստի $v = \\sqrt{2 \\cdot 10 \\cdot 0{,}05} = 1$ մ/վ։

**Օրինակ 5։** Սեղմված և բաց թողնված զսպանակավոր ճոճանակը հավասարակշռության կետն անցնում է ամենաարագ և մի պահ կանգ առնում ամեն ծայրում, որտեղ նրա ամբողջ էներգիան ձգված կամ սեղմված զսպանակում է։

**Օրինակ 6։** Բազմաթիվ տատանումների ընթացքում իրական ճոճանակն ամեն անգամ մի քիչ ավելի ցածր է բարձրանում։ Կորած մեխանիկական էներգիան դարձել է ջերմություն օդում և կախոցում։

### Վարժություններ

1. Ի՞նչ է տատանումը։
2. Ի՞նչ է հավասարակշռության դիրքը։
3. Ո՞ր երկու պայմանն է պետք ազատ տատանումների համար։
4. Նշեք դպրոցական երկու ճոճանակը և նրանցից յուրաքանչյուրի վերականգնող ուժը։
5. Ե՞րբ է թելավոր ճոճանակը կոչվում մաթեմատիկական ճոճանակ։
6. Ի՞նչ է մեկ լրիվ տատանումը։
7. Տատանման ո՞ր կետում է արագությունն ամենամեծը և որտե՞ղ է այն զրո։
8. $0{,}5$ կգ ճոճանակի գնդիկը բարձրացնում են $0{,}2$ մ-ով։ Գտեք նրա էներգիան և արագությունն ամենացած կետում։

### Պատասխաններ

1. Այն շարժումը, որը հավասար ժամանակամիջոցներից հետո կրկնվում է։
2. Այն դիրքը, որին մարմինը վերադառնում և որում մնում է, երբ ոչինչ նրան չի խանգարում։
3. Հավասարակշռության հետ տանող ուժ և փոքր շփում։
4. Զսպանակավոր ճոճանակը՝ առաձգական ուժով, և թելավոր ճոճանակը՝ ծանրության ուժի բաղադրիչով։
5. Երբ թելը թեթև է և չձգվող, իսկ գնդիկը փոքր է երկարության համեմատ։
6. Շարժումը մի կետից նույն կետ նույն ուղղությամբ։
7. Ամենամեծը՝ հավասարակշռության դիրքում, զրո՝ ծայրակետերում։
8. $E = 1$ Ջ, $v = 2$ մ/վ։`,
        ru: `## Что такое колебание

> **Колебанием** называют движение, которое через равные промежутки времени повторяется полностью или почти полностью.

Качели, детская качалка, задетая струна гитары, игла швейной машины и сердце — всё это колеблется. Положение, в которое тело возвращается и в котором остаётся, когда ничто его не тревожит, называют **положением равновесия**.

Колебания, которые после одного толчка происходят сами, без дальнейшей помощи, называют **свободными колебаниями**. Для них нужны два условия:

- сила, всегда возвращающая тело в положение равновесия;
- малое трение, чтобы движение не погасло сразу.

**Пример 1.** Шарик в чашке катается туда и обратно через нижнюю точку. В чашке с мёдом он остановился бы посередине после половины колебания, потому что трение слишком велико.

## Два школьных маятника

| Маятник | Что это | Возвращающая сила |
|---|---|---|
| пружинный маятник | груз на пружине | сила упругости пружины |
| нитяной маятник | небольшой тяжёлый шарик на длинной нити | составляющая силы тяжести вдоль дуги |

Нитяной маятник считают **математическим маятником**, когда нить лёгкая и нерастяжимая, а шарик мал по сравнению с длиной. Его колебания отсчитывают от нижней точки, которая и есть положение равновесия.

**Пример 2.** Груз, неподвижно висящий на пружине, находится в равновесии: сила упругости уравновешивает силу тяжести. Оттянутый вниз и отпущенный, он колеблется около того же положения.

**Пример 3.** Одно **полное колебание** — это движение из точки обратно в ту же точку в том же направлении. Маятник, отпущенный справа, возвращается направо: это одно колебание, а не два.

## Энергия за одно колебание

В колебании два вида механической энергии дважды меняются местами.

| Точка колебания | Скорость | Энергия |
|---|---|---|
| крайние точки | нуль | вся потенциальная |
| положение равновесия | наибольшая | вся кинетическая |
| любая промежуточная | средняя | частично и та и другая |

**Пример 4.** Шарик маятника массой $0{,}2$ кг при отведении в сторону поднимается на $0{,}05$ м. Его энергия $E = 0{,}2 \\cdot 10 \\cdot 0{,}05 = 0{,}1$ Дж, и в нижней точке она вся кинетическая, поэтому $v = \\sqrt{2 \\cdot 10 \\cdot 0{,}05} = 1$ м/с.

**Пример 5.** Сжатый и отпущенный пружинный маятник проходит положение равновесия быстрее всего и на мгновение останавливается на каждом краю, где вся его энергия находится в растянутой или сжатой пружине.

**Пример 6.** За много колебаний настоящий маятник каждый раз поднимается немного ниже. Потерянная механическая энергия перешла в тепло в воздухе и в подвесе.

### Упражнения

1. Что такое колебание?
2. Что такое положение равновесия?
3. Какие два условия нужны для свободных колебаний?
4. Назовите два школьных маятника и возвращающую силу каждого.
5. Когда нитяной маятник называют математическим?
6. Что такое одно полное колебание?
7. В какой точке колебания скорость наибольшая и в какой она равна нулю?
8. Шарик маятника массой $0{,}5$ кг поднимают на $0{,}2$ м. Найдите его энергию и скорость в нижней точке.

### Ответы

1. Движение, повторяющееся через равные промежутки времени.
2. Положение, в которое тело возвращается и в котором остаётся, когда ничто его не тревожит.
3. Сила, возвращающая тело к равновесию, и малое трение.
4. Пружинный маятник — сила упругости, нитяной маятник — составляющая силы тяжести.
5. Когда нить лёгкая и нерастяжимая, а шарик мал по сравнению с длиной.
6. Движение из точки обратно в ту же точку в том же направлении.
7. Наибольшая в положении равновесия, нулевая в крайних точках.
8. $E = 1$ Дж, $v = 2$ м/с.`,
      },
      [
        q(t("An oscillation is a motion that", "Տատանումն այն շարժումն է, որը", "Колебание — это движение, которое"), [
          t("repeats itself after equal times", "կրկնվում է հավասար ժամանակներից հետո", "повторяется через равные промежутки времени"),
          t("never repeats itself", "երբեք չի կրկնվում", "никогда не повторяется"),
          t("goes only one way", "գնում է միայն մի ուղղությամբ", "идёт только в одну сторону"),
        ], 0),
        q(t("The restoring force of a spring pendulum is", "Զսպանակավոր ճոճանակի վերականգնող ուժը", "Возвращающая сила пружинного маятника —"), [
          t("the force of friction", "շփման ուժը", "сила трения"),
          t("the elastic force of the spring", "զսպանակի առաձգական ուժը", "сила упругости пружины"),
          t("the pressure of the air", "օդի ճնշումը", "давление воздуха"),
        ], 1),
        q(t("At the extreme points of a swing the energy of a pendulum is", "Տատանման ծայրակետերում ճոճանակի էներգիան", "В крайних точках колебания энергия маятника"), [
          t("all kinetic", "ամբողջովին կինետիկ", "вся кинетическая"),
          t("zero", "զրո", "равна нулю"),
          t("all potential", "ամբողջովին պոտենցիալ", "вся потенциальная"),
        ], 2),
        q(t("The speed of a pendulum is greatest", "Ճոճանակի արագությունն ամենամեծն է", "Скорость маятника наибольшая"), [
          t("at the equilibrium position", "հավասարակշռության դիրքում", "в положении равновесия"),
          t("at the extreme points", "ծայրակետերում", "в крайних точках"),
          t("halfway to the extreme point", "ծայրակետի կեսին", "на полпути к крайней точке"),
        ], 0),
        q(t("Free oscillations die out quickly if", "Ազատ տատանումներն արագ մարում են, եթե", "Свободные колебания быстро гаснут, если"), [
          t("the mass is large", "զանգվածը մեծ է", "масса велика"),
          t("the friction is large", "շփումը մեծ է", "трение велико"),
          t("the thread is long", "թելն երկար է", "нить длинная"),
        ], 1),
        q(t("A pendulum let go from the right and back again has made", "Աջից բաց թողնված և նորից աջ վերադարձած ճոճանակը կատարել է", "Маятник, отпущенный справа и вернувшийся направо, совершил"), [
          t("half an oscillation", "կես տատանում", "половину колебания"),
          t("two oscillations", "երկու տատանում", "два колебания"),
          t("one oscillation", "մեկ տատանում", "одно колебание"),
        ], 2),
      ],
    ),
    lesson(
      "period-frequency",
      ["Amplitude, period, frequency; harmonic oscillations", "Ամպլիտուդ, պարբերություն, հաճախություն, հարմոնիկ տատանումներ", "Амплитуда, период, частота; гармонические колебания"],
      {
        en: ["Define amplitude, period and frequency", "Use the period formulas for the two pendulums", "Read an oscillation graph"],
        hy: ["Սահմանել ամպլիտուդը, պարբերությունը և հաճախությունը", "Կիրառել երկու ճոճանակների պարբերության բանաձևերը", "Կարդալ տատանման գրաֆիկը"],
        ru: ["Определять амплитуду, период и частоту", "Применять формулы периода для двух маятников", "Читать график колебаний"],
      },
      {
        en: `## The three quantities

| Quantity | Meaning | Unit |
|---|---|---|
| amplitude $A$ | the greatest distance from the equilibrium position | m |
| period $T$ | the time of one full oscillation | s |
| frequency $\\nu$ | the number of oscillations in one second | Hz |

The period and the frequency are reciprocal:
$$\\nu = \\frac{1}{T}, \\qquad T = \\frac{1}{\\nu}.$$

One **hertz** is one oscillation a second, named after Heinrich Hertz. To measure a period in class we count many oscillations and divide: $T = t/N$, which makes the error of a single reading much smaller.

**Example 1.** A pendulum makes $30$ oscillations in $60$ s. Then $T = 2$ s and $\\nu = 0{.}5$ Hz.
**Example 2.** A string sounds at $440$ Hz. Its period is $T = 1/440 \\approx 0{.}0023$ s.

## The period of the two pendulums

$$T = 2\\pi\\sqrt{\\frac{l}{g}} \\quad \\text{(thread pendulum)}, \\qquad T = 2\\pi\\sqrt{\\frac{m}{k}} \\quad \\text{(spring pendulum)}.$$

Two surprises hide in these formulas. The period of a thread pendulum does **not** depend on the mass of the ball or on the amplitude, as long as the swings are small; it depends only on the length and on $g$. And the period of a spring pendulum does not depend on $g$ at all, so it works the same on the Moon.

| Change | Effect on the period |
|---|---|
| a four times longer thread | twice as long a period |
| a heavier ball on a thread | no change |
| a four times heavier weight on a spring | twice as long a period |
| a stiffer spring (larger $k$) | shorter period |

**Example 3.** A thread pendulum $1$ m long has
$$T = 2\\pi\\sqrt{\\frac{1}{10}} \\approx 2 \\text{ s},$$
which is why a one-second pendulum in a clock is about $25$ cm long.

**Example 4.** To double the period of a thread pendulum the thread must be made four times longer, since the period grows as the square root of the length.

**Example 5.** A weight of $0{.}4$ kg on a spring of stiffness $100$ N/m has $T = 2\\pi\\sqrt{0{.}004} \\approx 0{.}4$ s, so about $2{.}5$ oscillations a second.

## The graph

An oscillation about the equilibrium position drawn against time gives a smooth wavy curve, the same shape as the sine graph in mathematics. Such oscillations are called **harmonic**.

On the graph, the amplitude is the height of a crest above the axis, and the period is the distance along the time axis between two neighbouring crests. A smaller amplitude lowers the curve without changing its period, which is the graph's way of saying that the period does not depend on the amplitude.

**Example 6.** A graph shows crests at $t = 1$ s, $3$ s and $5$ s, reaching $0{.}06$ m. Then $T = 2$ s, $\\nu = 0{.}5$ Hz and $A = 0{.}06$ m.

### Exercises

1. Define amplitude, period and frequency, and name the units.
2. A body makes $20$ oscillations in $8$ s. Find the period and the frequency.
3. A pendulum has a frequency of $4$ Hz. Find its period.
4. Write the period formula for a thread pendulum.
5. How does the period of a thread pendulum change if the thread is made nine times longer?
6. Does the period of a thread pendulum depend on the mass of the ball?
7. A weight of $0{.}1$ kg hangs on a spring of stiffness $40$ N/m. Find the period.
8. On a graph the crests are $0{.}5$ s apart and reach $3$ cm. Find $T$, $\\nu$ and $A$.

### Answers

1. The greatest displacement in metres, the time of one oscillation in seconds, the number of oscillations a second in hertz.
2. $T = 0{.}4$ s, $\\nu = 2{.}5$ Hz.
3. $T = 0{.}25$ s.
4. $T = 2\\pi\\sqrt{l/g}$.
5. It becomes three times longer.
6. No, only on the length and on $g$.
7. $T = 2\\pi\\sqrt{0{.}0025} \\approx 0{.}31$ s.
8. $T = 0{.}5$ s, $\\nu = 2$ Hz, $A = 0{.}03$ m.`,
        hy: `## Երեք մեծությունը

| Մեծություն | Իմաստը | Միավոր |
|---|---|---|
| ամպլիտուդ $A$ | ամենամեծ հեռավորությունը հավասարակշռության դիրքից | մ |
| պարբերություն $T$ | մեկ լրիվ տատանման ժամանակը | վ |
| հաճախություն $\\nu$ | տատանումների թիվը մեկ վայրկյանում | Հց |

Պարբերությունը և հաճախությունը հակադարձ են՝
$$\\nu = \\frac{1}{T}, \\qquad T = \\frac{1}{\\nu}.$$

Մեկ **հերց** վայրկյանում մեկ տատանում է, անվանված Հենրիխ Հերցի պատվին։ Դասարանում պարբերությունը չափելու համար հաշվում ենք շատ տատանումներ և բաժանում՝ $T = t/N$, ինչը շատ ավելի փոքր է դարձնում մեկ չափման սխալը։

**Օրինակ 1։** Ճոճանակը $60$ վ-ում կատարում է $30$ տատանում։ Ուրեմն $T = 2$ վ և $\\nu = 0{,}5$ Հց։
**Օրինակ 2։** Լարը հնչում է $440$ Հց հաճախությամբ։ Նրա պարբերությունը $T = 1/440 \\approx 0{,}0023$ վ է։

## Երկու ճոճանակի պարբերությունը

$$T = 2\\pi\\sqrt{\\frac{l}{g}} \\quad \\text{(թելավոր)}, \\qquad T = 2\\pi\\sqrt{\\frac{m}{k}} \\quad \\text{(զսպանակավոր)}.$$

Այս բանաձևերում թաքնված են երկու անսպասելի բան։ Թելավոր ճոճանակի պարբերությունը **չի** կախված գնդիկի զանգվածից կամ ամպլիտուդից, քանի դեռ տատանումները փոքր են. այն կախված է միայն երկարությունից և $g$-ից։ Իսկ զսպանակավոր ճոճանակի պարբերությունն ընդհանրապես կախված չէ $g$-ից, ուստի Լուսնի վրա աշխատում է նույնը։

| Փոփոխություն | Ազդեցությունը պարբերության վրա |
|---|---|
| չորս անգամ ավելի երկար թել | երկու անգամ ավելի երկար պարբերություն |
| ավելի ծանր գնդիկ թելի վրա | փոփոխություն չկա |
| չորս անգամ ավելի ծանր բեռ զսպանակի վրա | երկու անգամ ավելի երկար պարբերություն |
| ավելի կոշտ զսպանակ (մեծ $k$) | ավելի կարճ պարբերություն |

**Օրինակ 3։** $1$ մ երկարությամբ թելավոր ճոճանակն ունի
$$T = 2\\pi\\sqrt{\\frac{1}{10}} \\approx 2 \\text{ վ},$$
դրա համար ժամացույցի մեկ վայրկյանի ճոճանակը մոտ $25$ սմ երկարություն ունի։

**Օրինակ 4։** Թելավոր ճոճանակի պարբերությունը կրկնապատկելու համար թելը պետք է չորս անգամ երկարացնել, քանի որ պարբերությունն աճում է երկարության քառակուսի արմատի պես։

**Օրինակ 5։** $100$ Ն/մ կոշտությամբ զսպանակի վրա $0{,}4$ կգ բեռն ունի $T = 2\\pi\\sqrt{0{,}004} \\approx 0{,}4$ վ, ուստի վայրկյանում մոտ $2{,}5$ տատանում։

## Գրաֆիկը

Հավասարակշռության դիրքի շուրջը տատանումը, գծված ժամանակի նկատմամբ, տալիս է հարթ ալիքաձև կոր՝ նույն ձևը, ինչ մաթեմատիկայի սինուսի գրաֆիկը։ Այդպիսի տատանումները կոչվում են **հարմոնիկ**։

Գրաֆիկի վրա ամպլիտուդը գագաթի բարձրությունն է առանցքից վեր, իսկ պարբերությունը ժամանակի առանցքով երկու հարևան գագաթների միջև հեռավորությունն է։ Ավելի փոքր ամպլիտուդը ցածրացնում է կորը՝ առանց պարբերությունը փոխելու, ինչը գրաֆիկի ձևով ասում է, որ պարբերությունն ամպլիտուդից կախված չէ։

**Օրինակ 6։** Գրաֆիկը ցույց է տալիս գագաթներ $t = 1$ վ, $3$ վ և $5$ վ պահերին՝ հասնելով $0{,}06$ մ-ի։ Ուրեմն $T = 2$ վ, $\\nu = 0{,}5$ Հց և $A = 0{,}06$ մ։

### Վարժություններ

1. Սահմանեք ամպլիտուդը, պարբերությունը և հաճախությունը և նշեք միավորները։
2. Մարմինը $8$ վ-ում կատարում է $20$ տատանում։ Գտեք պարբերությունը և հաճախությունը։
3. Ճոճանակի հաճախությունը $4$ Հց է։ Գտեք նրա պարբերությունը։
4. Գրեք թելավոր ճոճանակի պարբերության բանաձևը։
5. Ինչպե՞ս փոխվում է թելավոր ճոճանակի պարբերությունը, եթե թելն ինն անգամ երկարացվի։
6. Թելավոր ճոճանակի պարբերությունը կախվա՞ծ է գնդիկի զանգվածից։
7. $40$ Ն/մ կոշտությամբ զսպանակից կախված է $0{,}1$ կգ բեռ։ Գտեք պարբերությունը։
8. Գրաֆիկի վրա գագաթները $0{,}5$ վ հեռավորության վրա են և հասնում են $3$ սմ-ի։ Գտեք $T$-ն, $\\nu$-ն և $A$-ն։

### Պատասխաններ

1. Ամենամեծ շեղումը մետրերով, մեկ տատանման ժամանակը վայրկյաններով, վայրկյանում տատանումների թիվը հերցերով։
2. $T = 0{,}4$ վ, $\\nu = 2{,}5$ Հց։
3. $T = 0{,}25$ վ։
4. $T = 2\\pi\\sqrt{l/g}$։
5. Այն դառնում է երեք անգամ ավելի երկար։
6. Ոչ, միայն երկարությունից և $g$-ից։
7. $T = 2\\pi\\sqrt{0{,}0025} \\approx 0{,}31$ վ։
8. $T = 0{,}5$ վ, $\\nu = 2$ Հց, $A = 0{,}03$ մ։`,
        ru: `## Три величины

| Величина | Смысл | Единица |
|---|---|---|
| амплитуда $A$ | наибольшее расстояние от положения равновесия | м |
| период $T$ | время одного полного колебания | с |
| частота $\\nu$ | число колебаний за одну секунду | Гц |

Период и частота взаимно обратны:
$$\\nu = \\frac{1}{T}, \\qquad T = \\frac{1}{\\nu}.$$

Один **герц** — это одно колебание в секунду, единица названа в честь Генриха Герца. Чтобы измерить период в классе, считают много колебаний и делят: $T = t : N$, и это сильно уменьшает ошибку одного отсчёта.

**Пример 1.** Маятник делает $30$ колебаний за $60$ с. Тогда $T = 2$ с и $\\nu = 0{,}5$ Гц.
**Пример 2.** Струна звучит с частотой $440$ Гц. Её период $T = 1 : 440 \\approx 0{,}0023$ с.

## Период двух маятников

$$T = 2\\pi\\sqrt{\\frac{l}{g}} \\quad \\text{(нитяной)}, \\qquad T = 2\\pi\\sqrt{\\frac{m}{k}} \\quad \\text{(пружинный)}.$$

В этих формулах скрыты две неожиданности. Период нитяного маятника **не** зависит ни от массы шарика, ни от амплитуды, пока колебания малы; он зависит только от длины и от $g$. А период пружинного маятника вовсе не зависит от $g$, поэтому на Луне он работает так же.

| Изменение | Влияние на период |
|---|---|
| нить в четыре раза длиннее | период вдвое длиннее |
| более тяжёлый шарик на нити | без изменений |
| груз на пружине в четыре раза тяжелее | период вдвое длиннее |
| более жёсткая пружина (больше $k$) | период короче |

**Пример 3.** Нитяной маятник длиной $1$ м имеет
$$T = 2\\pi\\sqrt{\\frac{1}{10}} \\approx 2 \\text{ с},$$
поэтому секундный маятник в часах имеет длину около $25$ см.

**Пример 4.** Чтобы удвоить период нитяного маятника, нить надо удлинить в четыре раза, так как период растёт как квадратный корень из длины.

**Пример 5.** Груз $0{,}4$ кг на пружине жёсткостью $100$ Н/м имеет $T = 2\\pi\\sqrt{0{,}004} \\approx 0{,}4$ с, то есть около $2{,}5$ колебания в секунду.

## График

Колебание около положения равновесия, построенное по времени, даёт плавную волнистую кривую — ту же форму, что и график синуса в математике. Такие колебания называют **гармоническими**.

На графике амплитуда — это высота гребня над осью, а период — расстояние по оси времени между двумя соседними гребнями. Меньшая амплитуда опускает кривую, не меняя периода, и это графический способ сказать, что период не зависит от амплитуды.

**Пример 6.** График показывает гребни при $t = 1$ с, $3$ с и $5$ с, достигающие $0{,}06$ м. Тогда $T = 2$ с, $\\nu = 0{,}5$ Гц и $A = 0{,}06$ м.

### Упражнения

1. Определите амплитуду, период и частоту и назовите единицы.
2. Тело делает $20$ колебаний за $8$ с. Найдите период и частоту.
3. Частота маятника равна $4$ Гц. Найдите его период.
4. Запишите формулу периода нитяного маятника.
5. Как изменится период нитяного маятника, если нить удлинить в девять раз?
6. Зависит ли период нитяного маятника от массы шарика?
7. Груз $0{,}1$ кг висит на пружине жёсткостью $40$ Н/м. Найдите период.
8. На графике гребни отстоят на $0{,}5$ с и достигают $3$ см. Найдите $T$, $\\nu$ и $A$.

### Ответы

1. Наибольшее смещение в метрах, время одного колебания в секундах, число колебаний в секунду в герцах.
2. $T = 0{,}4$ с, $\\nu = 2{,}5$ Гц.
3. $T = 0{,}25$ с.
4. $T = 2\\pi\\sqrt{l/g}$.
5. Он станет в три раза больше.
6. Нет, только от длины и от $g$.
7. $T = 2\\pi\\sqrt{0{,}0025} \\approx 0{,}31$ с.
8. $T = 0{,}5$ с, $\\nu = 2$ Гц, $A = 0{,}03$ м.`,
      },
      [
        q(t("The period and the frequency of an oscillation are", "Տատանման պարբերությունը և հաճախությունը", "Период и частота колебания"), [
          t("reciprocal", "հակադարձ", "взаимно обратны"),
          t("equal", "հավասար", "равны"),
          t("unrelated", "կապ չունեն", "не связаны"),
        ], 0),
        q(t("One hertz means", "Մեկ հերցը նշանակում է", "Один герц означает"), [
          t("one metre a second", "մեկ մետր վայրկյանում", "один метр в секунду"),
          t("one oscillation a second", "մեկ տատանում վայրկյանում", "одно колебание в секунду"),
          t("one second per oscillation", "մեկ վայրկյան մեկ տատանման համար", "одну секунду на колебание"),
        ], 1),
        q(t("The period of a thread pendulum depends on", "Թելավոր ճոճանակի պարբերությունը կախված է", "Период нитяного маятника зависит от"), [
          t("the mass of the ball", "գնդիկի զանգվածից", "массы шарика"),
          t("the amplitude", "ամպլիտուդից", "амплитуды"),
          t("the length of the thread", "թելի երկարությունից", "длины нити"),
        ], 2),
        q(t("If the thread of a pendulum is made four times longer, the period", "Եթե ճոճանակի թելը չորս անգամ երկարացվի, պարբերությունը", "Если нить маятника удлинить в четыре раза, период"), [
          t("doubles", "կրկնապատկվում է", "удвоится"),
          t("quadruples", "քառապատկվում է", "увеличится в четыре раза"),
          t("halves", "կրկնակի փոքրանում է", "уменьшится вдвое"),
        ], 0),
        q(t("The period of a spring pendulum depends on g", "Զսպանակավոր ճոճանակի պարբերությունը g-ից կախված է", "Период пружинного маятника от g зависит"), [
          t("strongly", "ուժեղ", "сильно"),
          t("not at all", "ընդհանրապես ոչ", "вовсе не зависит"),
          t("only on the Moon", "միայն Լուսնի վրա", "только на Луне"),
        ], 1),
        q(t("On an oscillation graph the period is", "Տատանման գրաֆիկի վրա պարբերությունը", "На графике колебаний период — это"), [
          t("the height of a crest", "գագաթի բարձրությունը", "высота гребня"),
          t("the depth of a trough", "հատակի խորությունը", "глубина впадины"),
          t("the distance between two crests", "երկու գագաթների միջև հեռավորությունը", "расстояние между двумя гребнями"),
        ], 2),
      ],
    ),
    lesson(
      "damped-forced-resonance",
      ["Damped and forced oscillations; resonance", "Մարող և հարկադրական տատանումներ, ռեզոնանս", "Затухающие и вынужденные колебания; резонанс"],
      {
        en: ["Explain why free oscillations die out", "Tell forced oscillations from free ones", "Describe resonance and name where it helps and where it harms"],
        hy: ["Բացատրել, թե ինչու են ազատ տատանումները մարում", "Տարբերել հարկադրական տատանումներն ազատներից", "Նկարագրել ռեզոնանսը և նշել, որտեղ է օգնում և որտեղ՝ վնասում"],
        ru: ["Объяснять, почему свободные колебания затухают", "Отличать вынужденные колебания от свободных", "Описывать резонанс и называть, где он помогает и где вредит"],
      },
      {
        en: `## Damped oscillations

A real pendulum never swings for ever. Air resistance and friction in the suspension turn its mechanical energy into heat, so each swing is a little smaller than the one before.

> Oscillations whose amplitude falls with time are called **damped**.

The period hardly changes while the amplitude dies away, which is why a clock pendulum keeps good time even as its swings grow weaker between windings. The stronger the friction, the faster the damping: a pendulum in water stops in a few swings, and in thick oil it may not complete even one.

**Example 1.** A pendulum's amplitude falls from $8$ cm to $4$ cm in a minute. Its energy, proportional to the square of the amplitude, has fallen to a quarter.

**Example 2.** The needle of a measuring instrument is deliberately damped, so that it comes to its reading quickly instead of oscillating about it for a long time.

## Forced oscillations

To keep an oscillation going, the energy lost to friction must be put back. A body pushed by an outside force that changes periodically performs **forced oscillations**.

| | Free oscillations | Forced oscillations |
|---|---|---|
| source of energy | one push at the start | a periodic outside force |
| amplitude | falls with time | steady |
| frequency | the body's own | the frequency of the outside force |

The last row is the key fact: a forced oscillation takes the frequency of the force that drives it, not the frequency the body would choose on its own. Pushing a swing twice as often does not make it swing twice as high; quite the opposite.

**Example 3.** A sewing-machine needle, the piston of an engine and a loudspeaker cone all perform forced oscillations at the frequency of what drives them.

## Resonance

> **Resonance** is the sharp growth of the amplitude of forced oscillations when the frequency of the outside force comes close to the body's own frequency.

At resonance each push arrives exactly in step with the motion, so it always adds energy and never takes it away. That is why a child on a swing is pushed once per swing, and not at random moments.

**Example 4.** A swing of period $3$ s is pushed every $3$ s and rises higher and higher. Pushed every $2$ s it is sometimes stopped by the push and stays low.

**Example 5.** Resonance is useful in a radio receiver, which is tuned so that its own frequency matches one station and ignores the others, and in musical instruments, where a body of air resonates with a string.

**Example 6.** Resonance is dangerous for structures. A column of soldiers crossing a bridge in step may drive it at its own frequency, which is why they are ordered to break step. Engines are mounted on rubber pads for the same reason, and washing machines shake worst at one particular speed of the drum.

### Exercises

1. Why do free oscillations die out?
2. What are damped oscillations?
3. Does the period of a pendulum change much while its amplitude dies away?
4. What are forced oscillations, and what sets their frequency?
5. Define resonance.
6. Why is a swing pushed once per swing and not at random?
7. Give one use of resonance and one danger of it.
8. Why are soldiers ordered to break step on a bridge?

### Answers

1. Friction and air resistance turn their mechanical energy into heat.
2. Oscillations whose amplitude falls with time.
3. No, it stays almost the same.
4. Oscillations kept going by a periodic outside force; its frequency sets theirs.
5. The sharp growth of the amplitude when the driving frequency is close to the body's own.
6. So that each push arrives in step with the motion and adds energy.
7. Use: tuning a radio receiver. Danger: a bridge or a machine shaken at its own frequency.
8. Their steps could match the bridge's own frequency and build up a dangerous amplitude.`,
        hy: `## Մարող տատանումներ

Իրական ճոճանակն երբեք հավերժ չի տատանվում։ Օդի դիմադրությունը և կախոցի շփումը նրա մեխանիկական էներգիան դարձնում են ջերմություն, ուստի ամեն տատանում մի քիչ ավելի փոքր է, քան նախորդը։

> Այն տատանումները, որոնց ամպլիտուդը ժամանակի հետ նվազում է, կոչվում են **մարող**։

Պարբերությունը գրեթե չի փոխվում, մինչ ամպլիտուդը մարում է, դրա համար ժամացույցի ճոճանակը ճիշտ ժամանակ է ցույց տալիս, նույնիսկ երբ նրա տատանումները լարումների միջև թուլանում են։ Որքան ուժեղ է շփումը, այնքան արագ է մարումը. ջրում ճոճանակը կանգ է առնում մի քանի տատանումից հետո, իսկ թանձր յուղում կարող է նույնիսկ մեկը չավարտել։

**Օրինակ 1։** Ճոճանակի ամպլիտուդը մեկ րոպեում նվազում է $8$ սմ-ից $4$ սմ։ Նրա էներգիան, որը համեմատական է ամպլիտուդի քառակուսուն, նվազել է մինչև մեկ քառորդը։

**Օրինակ 2։** Չափիչ սարքի սլաքը դիտավորյալ մարեցվում է, որ արագ հասնի իր ցուցմունքին, փոխանակ երկար տատանվի նրա շուրջը։

## Հարկադրական տատանումներ

Տատանումը շարունակելու համար շփմանը կորցրած էներգիան պետք է հետ դրվի։ Պարբերաբար փոխվող արտաքին ուժով հրված մարմինը կատարում է **հարկադրական տատանումներ**։

| | Ազատ տատանումներ | Հարկադրական տատանումներ |
|---|---|---|
| էներգիայի աղբյուրը | սկզբում մեկ հրում | պարբերական արտաքին ուժ |
| ամպլիտուդը | ժամանակի հետ նվազում է | կայուն |
| հաճախությունը | մարմնի սեփականը | արտաքին ուժի հաճախությունը |

Վերջին տողը գլխավոր փաստն է. հարկադրական տատանումը վերցնում է իրեն շարժող ուժի հաճախությունը, ոչ թե այն հաճախությունը, որը մարմինը կընտրեր ինքնուրույն։ Ճոճանակն երկու անգամ ավելի հաճախ հրելը նրան երկու անգամ բարձր չի տանում. ճիշտ հակառակը։

**Օրինակ 3։** Կարի մեքենայի ասեղը, շարժիչի մխոցը և բարձրախոսի թաղանթը բոլորն էլ կատարում են հարկադրական տատանումներ իրենց շարժողի հաճախությամբ։

## Ռեզոնանս

> **Ռեզոնանս** է հարկադրական տատանումների ամպլիտուդի կտրուկ աճը, երբ արտաքին ուժի հաճախությունը մոտենում է մարմնի սեփական հաճախությանը։

Ռեզոնանսի դեպքում ամեն հրում գալիս է ճիշտ շարժման հետ համաքայլ, ուստի միշտ էներգիա է ավելացնում և երբեք չի խլում։ Դրա համար ճոճանակի վրա երեխան հրվում է մեկ անգամ ամեն տատանման ընթացքում, ոչ թե պատահական պահերին։

**Օրինակ 4։** $3$ վ պարբերությամբ ճոճանակը հրում են ամեն $3$ վ, և այն բարձրանում է ավելի ու ավելի բարձր։ Ամեն $2$ վ հրելիս հրումն երբեմն կանգնեցնում է նրան, և այն մնում է ցածր։

**Օրինակ 5։** Ռեզոնանսն օգտակար է ռադիոընդունիչում, որը լարվում է այնպես, որ նրա սեփական հաճախությունը համապատասխանի մեկ կայանի և անտեսի մյուսները, և երաժշտական գործիքներում, որտեղ օդի ծավալը ռեզոնանսի մեջ է մտնում լարի հետ։

**Օրինակ 6։** Ռեզոնանսը վտանգավոր է կառույցների համար։ Կամուրջը համաքայլ անցնող զինվորների շարասյունը կարող է նրան շարժել սեփական հաճախությամբ, դրա համար նրանց հրամայվում է քայլը խախտել։ Շարժիչները նույն պատճառով տեղադրվում են ռետինե բարձիկների վրա, իսկ լվացքի մեքենաներն ամենաուժեղ ցնցվում են թմբուկի մեկ որոշակի արագության ժամանակ։

### Վարժություններ

1. Ինչո՞ւ են ազատ տատանումները մարում։
2. Ի՞նչ են մարող տատանումները։
3. Ճոճանակի պարբերությունը շա՞տ է փոխվում, մինչ ամպլիտուդը մարում է։
4. Ի՞նչ են հարկադրական տատանումները, և ի՞նչն է որոշում նրանց հաճախությունը։
5. Սահմանեք ռեզոնանսը։
6. Ինչո՞ւ ճոճանակը հրում են մեկ անգամ ամեն տատանման ընթացքում և ոչ պատահական։
7. Բերեք ռեզոնանսի մեկ կիրառություն և մեկ վտանգ։
8. Ինչո՞ւ զինվորներին հրամայվում է կամուրջի վրա քայլը խախտել։

### Պատասխաններ

1. Շփումը և օդի դիմադրությունը նրանց մեխանիկական էներգիան դարձնում են ջերմություն։
2. Այն տատանումները, որոնց ամպլիտուդը ժամանակի հետ նվազում է։
3. Ոչ, այն մնում է գրեթե նույնը։
4. Պարբերական արտաքին ուժով պահվող տատանումները. նրա հաճախությունն որոշում է նրանցը։
5. Ամպլիտուդի կտրուկ աճը, երբ շարժող հաճախությունը մոտ է մարմնի սեփականին։
6. Որ ամեն հրում գա շարժման հետ համաքայլ և էներգիա ավելացնի։
7. Կիրառություն՝ ռադիոընդունիչի լարումը։ Վտանգ՝ սեփական հաճախությամբ ցնցվող կամուրջ կամ մեքենա։
8. Նրանց քայլերը կարող են համապատասխանել կամուրջի սեփական հաճախությանը և ստեղծել վտանգավոր ամպլիտուդ։`,
        ru: `## Затухающие колебания

Настоящий маятник никогда не качается вечно. Сопротивление воздуха и трение в подвесе превращают его механическую энергию в тепло, поэтому каждое колебание немного меньше предыдущего.

> Колебания, амплитуда которых убывает со временем, называют **затухающими**.

Период почти не меняется, пока амплитуда гаснет, поэтому маятник часов показывает верное время, даже когда его размахи между подзаводами слабеют. Чем сильнее трение, тем быстрее затухание: в воде маятник останавливается через несколько колебаний, а в густом масле может не завершить и одного.

**Пример 1.** Амплитуда маятника за минуту убывает с $8$ см до $4$ см. Его энергия, пропорциональная квадрату амплитуды, уменьшилась до четверти.

**Пример 2.** Стрелку измерительного прибора нарочно демпфируют, чтобы она быстро приходила к своему показанию, а не долго колебалась около него.

## Вынужденные колебания

Чтобы колебание продолжалось, потерянную на трение энергию надо возвращать. Тело, которое толкает периодически меняющаяся внешняя сила, совершает **вынужденные колебания**.

| | Свободные колебания | Вынужденные колебания |
|---|---|---|
| источник энергии | один толчок в начале | периодическая внешняя сила |
| амплитуда | убывает со временем | постоянная |
| частота | собственная частота тела | частота внешней силы |

Последняя строка — главный факт: вынужденное колебание принимает частоту силы, которая его ведёт, а не ту частоту, которую тело выбрало бы само. Если толкать качели вдвое чаще, они не взлетят вдвое выше, скорее наоборот.

**Пример 3.** Игла швейной машины, поршень двигателя и диффузор громкоговорителя совершают вынужденные колебания с частотой того, что их ведёт.

## Резонанс

> **Резонансом** называют резкий рост амплитуды вынужденных колебаний, когда частота внешней силы приближается к собственной частоте тела.

При резонансе каждый толчок приходит точно в такт движению, поэтому он всегда добавляет энергию и никогда её не отнимает. Поэтому ребёнка на качелях подталкивают один раз за качание, а не в случайные моменты.

**Пример 4.** Качели с периодом $3$ с подталкивают каждые $3$ с, и они взлетают всё выше. Если толкать каждые $2$ с, толчок иногда их останавливает, и они остаются низко.

**Пример 5.** Резонанс полезен в радиоприёмнике, который настраивают так, чтобы его собственная частота совпала с одной станцией, а остальные он не замечал, и в музыкальных инструментах, где объём воздуха резонирует со струной.

**Пример 6.** Резонанс опасен для сооружений. Колонна солдат, идущая по мосту в ногу, может раскачивать его на собственной частоте, поэтому им приказывают сбить шаг. Двигатели по той же причине ставят на резиновые подушки, а стиральные машины трясёт сильнее всего при одной определённой скорости барабана.

### Упражнения

1. Почему свободные колебания затухают?
2. Что такое затухающие колебания?
3. Сильно ли меняется период маятника, пока гаснет его амплитуда?
4. Что такое вынужденные колебания и что задаёт их частоту?
5. Определите резонанс.
6. Почему качели толкают один раз за качание, а не в случайные моменты?
7. Приведите одно применение резонанса и одну его опасность.
8. Почему солдатам приказывают сбить шаг на мосту?

### Ответы

1. Трение и сопротивление воздуха превращают их механическую энергию в тепло.
2. Колебания, амплитуда которых убывает со временем.
3. Нет, он остаётся почти тем же.
4. Колебания, поддерживаемые периодической внешней силой; её частота задаёт их частоту.
5. Резкий рост амплитуды, когда частота внешней силы близка к собственной частоте тела.
6. Чтобы каждый толчок приходил в такт движению и добавлял энергию.
7. Применение: настройка радиоприёмника. Опасность: мост или машина, раскачанные на собственной частоте.
8. Их шаги могут совпасть с собственной частотой моста и создать опасную амплитуду.`,
      },
      [
        q(t("Free oscillations die out because", "Ազատ տատանումները մարում են, որովհետև", "Свободные колебания затухают потому, что"), [
          t("friction turns their energy into heat", "շփումը նրանց էներգիան դարձնում է ջերմություն", "трение превращает их энергию в тепло"),
          t("the period grows", "պարբերությունն աճում է", "период растёт"),
          t("the mass falls", "զանգվածը նվազում է", "масса убывает"),
        ], 0),
        q(t("While the amplitude of a pendulum dies away, its period", "Մինչ ճոճանակի ամպլիտուդը մարում է, նրա պարբերությունը", "Пока амплитуда маятника гаснет, его период"), [
          t("grows quickly", "արագ աճում է", "быстро растёт"),
          t("stays almost the same", "մնում է գրեթե նույնը", "остаётся почти тем же"),
          t("falls by half", "կրկնակի փոքրանում է", "уменьшается вдвое"),
        ], 1),
        q(t("The frequency of a forced oscillation is set by", "Հարկադրական տատանման հաճախությունն որոշվում է", "Частота вынужденного колебания задаётся"), [
          t("the mass of the body", "մարմնի զանգվածով", "массой тела"),
          t("the amplitude", "ամպլիտուդով", "амплитудой"),
          t("the outside force", "արտաքին ուժով", "внешней силой"),
        ], 2),
        q(t("Resonance happens when the driving frequency is", "Ռեզոնանսը տեղի է ունենում, երբ շարժող հաճախությունը", "Резонанс наступает, когда частота внешней силы"), [
          t("close to the body's own frequency", "մոտ է մարմնի սեփական հաճախությանը", "близка к собственной частоте тела"),
          t("twice the body's own frequency", "մարմնի սեփական հաճախությունից երկու անգամ մեծ", "вдвое больше собственной частоты тела"),
          t("zero", "զրո է", "равна нулю"),
        ], 0),
        q(t("Soldiers break step on a bridge in order to avoid", "Զինվորները կամուրջի վրա խախտում են քայլը, որ խուսափեն", "Солдаты сбивают шаг на мосту, чтобы избежать"), [
          t("damping", "մարումից", "затухания"),
          t("resonance", "ռեզոնանսից", "резонанса"),
          t("friction", "շփումից", "трения"),
        ], 1),
        q(t("Resonance is put to use in", "Ռեզոնանսը կիրառվում է", "Резонанс используют в"), [
          t("a car's brakes", "մեքենայի արգելակներում", "тормозах автомобиля"),
          t("a pendulum clock's case", "ճոճանակավոր ժամացույցի պատյանում", "корпусе маятниковых часов"),
          t("a radio receiver", "ռադիոընդունիչում", "радиоприёмнике"),
        ], 2),
      ],
    ),
    lesson(
      "waves",
      ["Longitudinal and transverse waves; wavelength", "Երկայնական և լայնական ալիքներ, ալիքի երկարություն", "Продольные и поперечные волны; длина волны"],
      {
        en: ["Say what a mechanical wave is and what it carries", "Tell a longitudinal wave from a transverse one", "Use the formula linking speed, wavelength and frequency"],
        hy: ["Ասել, թե ինչ է մեխանիկական ալիքը և ինչ է այն տանում", "Տարբերել երկայնական ալիքը լայնականից", "Կիրառել արագությունը, ալիքի երկարությունը և հաճախությունը կապող բանաձևը"],
        ru: ["Говорить, что такое механическая волна и что она переносит", "Отличать продольную волну от поперечной", "Применять формулу, связывающую скорость, длину волны и частоту"],
      },
      {
        en: `## What a wave is

Drop a stone into a pond and rings run outwards. A cork floating on the water bobs up and down but does not travel with the rings.

> A **mechanical wave** is an oscillation that spreads through a medium. The wave carries energy, not matter: each particle only oscillates about its own place.

A wave needs a medium with particles bound to each other, so mechanical waves cannot pass through a vacuum. The farther from the source, the later a particle starts to oscillate, and that delay is what we see as the travelling wave.

**Example 1.** A rope tied at one end and shaken at the other sends a hump along itself. The rope stays where it is, while the hump moves.

## Two kinds of wave

| | Transverse wave | Longitudinal wave |
|---|---|---|
| the particles oscillate | across the direction of travel | along the direction of travel |
| what it looks like | crests and troughs | regions of compression and rarefaction |
| where it can travel | in solids and on a surface | in solids, liquids and gases |
| example | a wave on a rope, a wave on water | sound in air, a wave in a spring |

Transverse waves need a medium that resists shearing, which is why they do not pass through the body of a liquid or a gas. Longitudinal waves need only that the medium can be compressed, and every medium can, so sound reaches us through air, water and walls.

**Example 2.** A long soft spring shaken sideways carries a transverse wave; pushed and pulled along its length it carries a longitudinal one, visible as moving places where the turns crowd together.

**Example 3.** An earthquake sends both kinds through the Earth. The longitudinal waves travel faster and arrive first, and the delay between the two arrivals tells seismologists how far away the earthquake was.

## Wavelength, speed and frequency

> The **wavelength** $\\lambda$ is the distance between two nearest points oscillating in the same way, that is between two neighbouring crests or two neighbouring compressions.

In one period the wave moves forward by exactly one wavelength, so
$$v = \\frac{\\lambda}{T} = \\lambda\\nu, \\qquad \\lambda = \\frac{v}{\\nu}.$$

The frequency of the wave is the frequency of the source, and the speed depends on the medium. So a given sound keeps its frequency when it passes from air into water, while its wavelength changes.

**Example 4.** A wave of frequency $5$ Hz travels at $20$ m/s. Its wavelength is $\\lambda = 20/5 = 4$ m.
**Example 5.** A wave of length $0{.}5$ m travels at $340$ m/s. Its frequency is $\\nu = 340/0{.}5 = 680$ Hz.
**Example 6.** Crests on a lake pass a post every $2$ s and are $6$ m apart. The wave travels at $3$ m/s.

### Exercises

1. What is a mechanical wave, and what does it carry?
2. Why can a mechanical wave not travel through a vacuum?
3. Tell a transverse wave from a longitudinal one.
4. Which kind of wave can travel through a liquid or a gas, and why?
5. Define the wavelength.
6. Write the formula linking speed, wavelength and frequency.
7. A wave of frequency $4$ Hz has a length of $3$ m. Find its speed.
8. A wave travels at $1500$ m/s with a frequency of $500$ Hz. Find its wavelength.

### Answers

1. An oscillation spreading through a medium; it carries energy, not matter.
2. There are no particles to pass the oscillation on.
3. In a transverse wave the particles oscillate across the direction of travel, in a longitudinal wave along it.
4. The longitudinal kind, because a liquid and a gas can be compressed but do not resist shearing.
5. The distance between two nearest points oscillating in the same way.
6. $v = \\lambda\\nu$.
7. $v = 12$ m/s.
8. $\\lambda = 3$ m.`,
        hy: `## Ի՞նչ է ալիքը

Նետեք քար լճակը, և շրջաններ կվազեն դուրս։ Ջրի վրա լողացող խցանը վեր-վար ցատկում է, բայց շրջանների հետ չի ճանապարհորդում։

> **Մեխանիկական ալիք** է միջավայրում տարածվող տատանումը։ Ալիքը տանում է էներգիա, ոչ թե նյութ. ամեն մասնիկ միայն տատանվում է իր տեղի շուրջը։

Ալիքին պետք է միջավայր՝ իրար հետ կապված մասնիկներով, ուստի մեխանիկական ալիքները չեն կարող անցնել վակուումով։ Որքան հեռու է աղբյուրից, այնքան ուշ է մասնիկը սկսում տատանվել, և ճիշտ այդ ուշացումն է, որ մենք տեսնում ենք որպես վազող ալիք։

**Օրինակ 1։** Մի ծայրից կապված և մյուսից թափ տված պարանն իր երկայնքով ուղարկում է բարձրություն։ Պարանը մնում է իր տեղում, մինչ բարձրությունը շարժվում է։

## Ալիքի երկու տեսակը

| | Լայնական ալիք | Երկայնական ալիք |
|---|---|---|
| մասնիկները տատանվում են | տարածման ուղղությանն ուղղահայաց | տարածման ուղղությամբ |
| ինչպիսի՞ն է երևում | գագաթներ և հատակներ | սեղմման և նոսրացման տեղեր |
| որտեղ կարող է տարածվել | պինդ մարմիններում և մակերևույթին | պինդ, հեղուկ և գազային միջավայրերում |
| օրինակ | ալիք պարանի, ալիք ջրի վրա | ձայնն օդում, ալիք զսպանակում |

Լայնական ալիքներին պետք է միջավայր, որը դիմադրում է շերտերի սահքին, դրա համար նրանք չեն անցնում հեղուկի կամ գազի ծավալով։ Երկայնական ալիքներին պետք է միայն, որ միջավայրը սեղմվի, իսկ ամեն միջավայր սեղմվում է, ուստի ձայնը մեզ հասնում է օդով, ջրով և պատերով։

**Օրինակ 2։** Երկար փափուկ զսպանակը կողք թափ տալիս տանում է լայնական ալիք, իսկ երկարությամբ հրելիս և քաշելիս՝ երկայնական, որն երևում է որպես շարժվող տեղեր, որտեղ ոլորները խտանում են։

**Օրինակ 3։** Երկրաշարժն Երկրով ուղարկում է երկու տեսակն էլ։ Երկայնական ալիքներն ավելի արագ են և հասնում են առաջինը, իսկ երկու հասնելու միջև ուշացումը սեյսմոլոգներին ասում է, թե որքան հեռու էր երկրաշարժը։

## Ալիքի երկարություն, արագություն և հաճախություն

> **Ալիքի երկարությունը** $\\lambda$ նույն ձևով տատանվող երկու մոտակա կետերի միջև հեռավորությունն է, այսինքն երկու հարևան գագաթների կամ երկու հարևան սեղմումների միջև։

Մեկ պարբերությունում ալիքն առաջ է շարժվում ճիշտ մեկ ալիքի երկարությամբ, ուստի
$$v = \\frac{\\lambda}{T} = \\lambda\\nu, \\qquad \\lambda = \\frac{v}{\\nu}.$$

Ալիքի հաճախությունն աղբյուրի հաճախությունն է, իսկ արագությունը կախված է միջավայրից։ Ուստի տրված ձայնը պահպանում է իր հաճախությունը, երբ օդից անցնում է ջուր, մինչդեռ նրա ալիքի երկարությունը փոխվում է։

**Օրինակ 4։** $5$ Հց հաճախությամբ ալիքը տարածվում է $20$ մ/վ արագությամբ։ Նրա ալիքի երկարությունը $\\lambda = 20/5 = 4$ մ է։
**Օրինակ 5։** $0{,}5$ մ երկարությամբ ալիքը տարածվում է $340$ մ/վ արագությամբ։ Նրա հաճախությունը $\\nu = 340/0{,}5 = 680$ Հց է։
**Օրինակ 6։** Լճի գագաթները սյան կողքով անցնում են ամեն $2$ վ և իրարից $6$ մ հեռու են։ Ալիքը տարածվում է $3$ մ/վ արագությամբ։

### Վարժություններ

1. Ի՞նչ է մեխանիկական ալիքը, և ի՞նչ է այն տանում։
2. Ինչո՞ւ մեխանիկական ալիքը չի կարող տարածվել վակուումով։
3. Տարբերեք լայնական ալիքն երկայնականից։
4. Ալիքի ո՞ր տեսակը կարող է տարածվել հեղուկով կամ գազով և ինչու։
5. Սահմանեք ալիքի երկարությունը։
6. Գրեք արագությունը, ալիքի երկարությունը և հաճախությունը կապող բանաձևը։
7. $4$ Հց հաճախությամբ ալիքի երկարությունը $3$ մ է։ Գտեք նրա արագությունը։
8. Ալիքը տարածվում է $1500$ մ/վ արագությամբ $500$ Հց հաճախությամբ։ Գտեք ալիքի երկարությունը։

### Պատասխաններ

1. Միջավայրում տարածվող տատանումը. այն տանում է էներգիա, ոչ թե նյութ։
2. Չկան մասնիկներ, որոնք տատանումն առաջ փոխանցեն։
3. Լայնական ալիքում մասնիկները տատանվում են տարածման ուղղությանն ուղղահայաց, երկայնականում՝ նրա երկայնքով։
4. Երկայնական տեսակը, որովհետև հեղուկը և գազը սեղմվում են, բայց շերտերի սահքին չեն դիմադրում։
5. Նույն ձևով տատանվող երկու մոտակա կետերի միջև հեռավորությունը։
6. $v = \\lambda\\nu$։
7. $v = 12$ մ/վ։
8. $\\lambda = 3$ մ։`,
        ru: `## Что такое волна

Бросьте камень в пруд, и круги побегут наружу. Пробка, плавающая на воде, подпрыгивает вверх и вниз, но не путешествует вместе с кругами.

> **Механическая волна** — это колебание, распространяющееся в среде. Волна переносит энергию, а не вещество: каждая частица лишь колеблется около своего места.

Волне нужна среда с частицами, связанными друг с другом, поэтому механические волны не проходят через вакуум. Чем дальше от источника, тем позже частица начинает колебаться, и именно это запаздывание мы видим как бегущую волну.

**Пример 1.** Верёвка, закреплённая на одном конце и встряхнутая на другом, посылает по себе горб. Верёвка остаётся на месте, а горб движется.

## Два вида волн

| | Поперечная волна | Продольная волна |
|---|---|---|
| частицы колеблются | поперёк направления распространения | вдоль направления распространения |
| как выглядит | гребни и впадины | области сжатия и разрежения |
| где может распространяться | в твёрдых телах и по поверхности | в твёрдых телах, жидкостях и газах |
| пример | волна на верёвке, волна на воде | звук в воздухе, волна в пружине |

Поперечным волнам нужна среда, сопротивляющаяся сдвигу, поэтому они не проходят сквозь объём жидкости или газа. Продольным волнам нужно только, чтобы среда сжималась, а сжимается любая среда, поэтому звук доходит до нас через воздух, воду и стены.

**Пример 2.** Длинная мягкая пружина, встряхнутая в сторону, несёт поперечную волну; если же её толкать и тянуть вдоль, она несёт продольную, видимую как движущиеся места, где витки сгущаются.

**Пример 3.** Землетрясение посылает сквозь Землю оба вида. Продольные волны быстрее и приходят первыми, а задержка между двумя приходами говорит сейсмологам, как далеко было землетрясение.

## Длина волны, скорость и частота

> **Длина волны** $\\lambda$ — это расстояние между двумя ближайшими точками, колеблющимися одинаково, то есть между двумя соседними гребнями или двумя соседними сжатиями.

За один период волна продвигается ровно на одну длину волны, поэтому
$$v = \\frac{\\lambda}{T} = \\lambda\\nu, \\qquad \\lambda = \\frac{v}{\\nu}.$$

Частота волны — это частота источника, а скорость зависит от среды. Поэтому данный звук сохраняет свою частоту, переходя из воздуха в воду, а его длина волны меняется.

**Пример 4.** Волна частотой $5$ Гц распространяется со скоростью $20$ м/с. Её длина $\\lambda = 20 : 5 = 4$ м.
**Пример 5.** Волна длиной $0{,}5$ м распространяется со скоростью $340$ м/с. Её частота $\\nu = 340 : 0{,}5 = 680$ Гц.
**Пример 6.** Гребни на озере проходят мимо столба каждые $2$ с и отстоят друг от друга на $6$ м. Волна идёт со скоростью $3$ м/с.

### Упражнения

1. Что такое механическая волна и что она переносит?
2. Почему механическая волна не может распространяться в вакууме?
3. Отличите поперечную волну от продольной.
4. Какой вид волн может распространяться в жидкости или газе и почему?
5. Определите длину волны.
6. Запишите формулу, связывающую скорость, длину волны и частоту.
7. Волна частотой $4$ Гц имеет длину $3$ м. Найдите её скорость.
8. Волна идёт со скоростью $1500$ м/с с частотой $500$ Гц. Найдите длину волны.

### Ответы

1. Колебание, распространяющееся в среде; она переносит энергию, а не вещество.
2. Нет частиц, которые передавали бы колебание дальше.
3. В поперечной волне частицы колеблются поперёк направления распространения, в продольной — вдоль него.
4. Продольный вид, потому что жидкость и газ сжимаются, но не сопротивляются сдвигу.
5. Расстояние между двумя ближайшими одинаково колеблющимися точками.
6. $v = \\lambda\\nu$.
7. $v = 12$ м/с.
8. $\\lambda = 3$ м.`,
      },
      [
        q(t("A mechanical wave carries", "Մեխանիկական ալիքը տանում է", "Механическая волна переносит"), [
          t("energy, not matter", "էներգիա, ոչ թե նյութ", "энергию, а не вещество"),
          t("matter, not energy", "նյութ, ոչ թե էներգիա", "вещество, а не энергию"),
          t("neither of them", "ոչ մեկը", "ни то, ни другое"),
        ], 0),
        q(t("In a transverse wave the particles oscillate", "Լայնական ալիքում մասնիկները տատանվում են", "В поперечной волне частицы колеблются"), [
          t("along the direction of travel", "տարածման ուղղությամբ", "вдоль направления распространения"),
          t("across the direction of travel", "տարածման ուղղությանն ուղղահայաց", "поперёк направления распространения"),
          t("in circles round the source", "շրջաններով աղբյուրի շուրջը", "по кругам вокруг источника"),
        ], 1),
        q(t("Sound in air is", "Ձայնն օդում", "Звук в воздухе —"), [
          t("a transverse wave", "լայնական ալիք է", "поперечная волна"),
          t("not a wave at all", "ընդհանրապես ալիք չէ", "вовсе не волна"),
          t("a longitudinal wave", "երկայնական ալիք է", "продольная волна"),
        ], 2),
        q(t("The wavelength is the distance between", "Ալիքի երկարությունը հեռավորությունն է", "Длина волны — это расстояние между"), [
          t("two neighbouring crests", "երկու հարևան գագաթների միջև", "двумя соседними гребнями"),
          t("a crest and the nearest trough", "գագաթի և մոտակա հատակի միջև", "гребнем и ближайшей впадиной"),
          t("the source and the first crest", "աղբյուրի և առաջին գագաթի միջև", "источником и первым гребнем"),
        ], 0),
        q(t("A wave of frequency 10 Hz and wavelength 2 m travels at", "10 Հց հաճախությամբ և 2 մ երկարությամբ ալիքը տարածվում է", "Волна частотой 10 Гц и длиной 2 м идёт со скоростью"), [
          t("5 m/s", "5 մ/վ", "5 м/с"),
          t("20 m/s", "20 մ/վ", "20 м/с"),
          t("0.2 m/s", "0,2 մ/վ", "0,2 м/с"),
        ], 1),
        q(t("A mechanical wave cannot travel through a vacuum because", "Մեխանիկական ալիքը չի կարող տարածվել վակուումով, որովհետև", "Механическая волна не может распространяться в вакууме потому, что"), [
          t("a vacuum is too cold", "վակուումը շատ սառն է", "вакуум слишком холодный"),
          t("the wave is too fast there", "ալիքն այնտեղ շատ արագ է", "волна там слишком быстрая"),
          t("there are no particles to pass it on", "չկան մասնիկներ, որ նրան փոխանցեն", "там нет частиц, которые передавали бы её"),
        ], 2),
      ],
    ),
    lesson(
      "sound",
      ["Sound: pitch, loudness, speed, echo", "Ձայն․ բարձրություն, ուժգնություն, արագություն, արձագանք", "Звук: высота, громкость, скорость, эхо"],
      {
        en: ["Name the range of audible frequencies and what lies beyond it", "Link pitch with frequency and loudness with amplitude", "Use the speed of sound for echo and distance problems"],
        hy: ["Նշել լսելի հաճախությունների տիրույթը և այն, ինչ նրանից դուրս է", "Կապել բարձրությունը հաճախության և ուժգնությունն ամպլիտուդի հետ", "Կիրառել ձայնի արագությունն արձագանքի և հեռավորության խնդիրներում"],
        ru: ["Называть диапазон слышимых частот и то, что лежит за ним", "Связывать высоту с частотой, а громкость с амплитудой", "Применять скорость звука в задачах об эхе и расстоянии"],
      },
      {
        en: `## What sound is

> **Sound** is a longitudinal mechanical wave that the human ear can hear, with frequencies from about $16$ Hz to $20000$ Hz.

A sounding body always oscillates: a string, a drum skin, a tuning fork, the air in a pipe or our vocal cords. The oscillation compresses the air next to it, the compression passes on, and our eardrum repeats the motion.

| Frequency | Name | Who hears or uses it |
|---|---|---|
| below $16$ Hz | infrasound | heard by nobody; felt before earthquakes, used by whales |
| $16$ Hz to $20000$ Hz | sound | people, and animals |
| above $20000$ Hz | ultrasound | bats, dolphins, medical scanners, flaw detectors |

**Example 1.** A bell under a glass jar grows quieter as the air is pumped out and falls silent in a vacuum, while it can still be seen to shake. Sound needs a medium; light does not.

## Pitch and loudness

| What we hear | What it depends on |
|---|---|
| pitch: a high or a low note | the frequency: a higher frequency is a higher note |
| loudness | the amplitude, and also the frequency |
| timbre: the colour of the sound | the extra frequencies that come with the main one |

That is why a thin tight string gives a high note and a thick loose one a low note, and why plucking the same string harder makes it louder without changing the note.

**Example 2.** A note of $440$ Hz is the A that an orchestra tunes to. An octave above it is $880$ Hz, exactly twice the frequency.

## The speed of sound and the echo

Sound travels fastest where the particles are most tightly bound:

| Medium | Speed |
|---|---|
| air at $0$ °C | about $331$ m/s |
| air at $20$ °C | about $340$ m/s |
| water | about $1500$ m/s |
| steel | about $5000$ m/s |

An **echo** is sound reflected from a wall, a cliff or a forest and heard again. Because the sound has to go there and back, the distance is
$$s = \\frac{vt}{2}.$$

**Example 3.** An echo comes back from a cliff after $3$ s. The cliff is $340 \\cdot 3/2 = 510$ m away.
**Example 4.** Thunder is heard $6$ s after the lightning. The storm is about $2$ km away, since light arrives practically at once.
**Example 5.** An echo sounder sends a pulse into the sea and hears it after $0{.}4$ s. The depth is $1500 \\cdot 0{.}4/2 = 300$ m.
**Example 6.** In a small room the echo returns in less than $0{.}05$ s and merges with the original sound, which is why we hear an echo outdoors and not in a bedroom.

### Exercises

1. What is sound, and between which frequencies can we hear?
2. What are infrasound and ultrasound?
3. Why does a bell fall silent under a jar from which the air is pumped out?
4. What does the pitch of a sound depend on, and what does the loudness depend on?
5. Give the speed of sound in air, in water and in steel.
6. An echo returns after $2$ s. How far is the wall?
7. Thunder is heard $9$ s after the lightning. How far is the storm?
8. An echo sounder gets its pulse back after $0{.}6$ s. Find the depth.

### Answers

1. A longitudinal wave audible to the ear, from about $16$ Hz to $20000$ Hz.
2. Oscillations below $16$ Hz and above $20000$ Hz.
3. There is no medium left to carry the longitudinal wave.
4. The pitch on the frequency, the loudness mainly on the amplitude.
5. About $340$ m/s, about $1500$ m/s and about $5000$ m/s.
6. $s = 340 \\cdot 2/2 = 340$ m.
7. About $3$ km.
8. $s = 1500 \\cdot 0{.}6/2 = 450$ m.`,
        hy: `## Ի՞նչ է ձայնը

> **Ձայն** է մարդու ականջի լսելի երկայնական մեխանիկական ալիքը՝ մոտ $16$ Հց-ից մինչև $20000$ Հց հաճախություններով։

Հնչող մարմինը միշտ տատանվում է՝ լարը, թմբուկի կաշին, հնչյունապատառաքաղը, փողի օդը կամ մեր ձայնալարերը։ Տատանումը սեղմում է կողքի օդը, սեղմումը փոխանցվում է առաջ, և մեր թմբկաթաղանթը կրկնում է շարժումը։

| Հաճախություն | Անվանումը | Ով է լսում կամ օգտագործում |
|---|---|---|
| $16$ Հց-ից ցածր | ինֆրաձայն | ոչ ոք չի լսում, զգացվում է երկրաշարժից առաջ, օգտագործում են կետերը |
| $16$ Հց-ից $20000$ Հց | ձայն | մարդիկ և կենդանիներ |
| $20000$ Հց-ից բարձր | ուլտրաձայն | չղջիկներ, դելֆիններ, բժշկական սկաներներ, թերության հայտնիչներ |

**Օրինակ 1։** Ապակե անոթի տակ զանգն ավելի ու ավելի հանդարտ է հնչում, երբ օդը դուրս է մղվում, և վակուումում լռում է, մինչդեռ դեռ երևում է, որ ցնցվում է։ Ձայնին պետք է միջավայր, լույսին՝ ոչ։

## Բարձրություն և ուժգնություն

| Ինչ ենք լսում | Ինչից է կախված |
|---|---|
| բարձրություն՝ բարձր կամ ցածր նոտա | հաճախությունից. ավելի մեծ հաճախությունն ավելի բարձր նոտա է |
| ուժգնություն | ամպլիտուդից, նաև հաճախությունից |
| տեմբր՝ ձայնի գույնը | հիմնականի հետ եկող լրացուցիչ հաճախություններից |

Դրա համար բարակ ձիգ լարը տալիս է բարձր նոտա, իսկ հաստ թույլը՝ ցածր, և դրա համար նույն լարն ավելի ուժեղ քաշելը նրան ավելի ուժգին է դարձնում՝ առանց նոտան փոխելու։

**Օրինակ 2։** $440$ Հց նոտան այն լա-ն է, որով նվագախումբը լարվում է։ Մեկ օկտավա վերև $880$ Հց է՝ ճիշտ կրկնակի հաճախություն։

## Ձայնի արագությունը և արձագանքը

Ձայնն ամենաարագ տարածվում է այնտեղ, որտեղ մասնիկներն ամենաամուր են կապված՝

| Միջավայր | Արագություն |
|---|---|
| օդ $0$ °C-ում | մոտ $331$ մ/վ |
| օդ $20$ °C-ում | մոտ $340$ մ/վ |
| ջուր | մոտ $1500$ մ/վ |
| պողպատ | մոտ $5000$ մ/վ |

**Արձագանք** է պատից, ժայռից կամ անտառից արտացոլված և նորից լսված ձայնը։ Քանի որ ձայնը պետք է գնա և վերադառնա, հեռավորությունը
$$s = \\frac{vt}{2}.$$

**Օրինակ 3։** Արձագանքը ժայռից վերադառնում է $3$ վ հետո։ Ժայռը $340 \\cdot 3/2 = 510$ մ հեռու է։
**Օրինակ 4։** Որոտը լսվում է կայծակից $6$ վ հետո։ Փոթորիկը մոտ $2$ կմ հեռու է, քանի որ լույսը հասնում է գործնականում անմիջապես։
**Օրինակ 5։** Արձագանքաչափը ծովն ուղարկում է ազդակ և լսում նրան $0{,}4$ վ հետո։ Խորությունը $1500 \\cdot 0{,}4/2 = 300$ մ է։
**Օրինակ 6։** Փոքր սենյակում արձագանքը վերադառնում է $0{,}05$ վ-ից պակաս ժամանակում և միաձուլվում սկզբնական ձայնի հետ, դրա համար արձագանք լսում ենք դրսում, ոչ թե ննջասենյակում։

### Վարժություններ

1. Ի՞նչ է ձայնը, և ի՞նչ հաճախությունների միջև ենք լսում։
2. Ի՞նչ են ինֆրաձայնը և ուլտրաձայնը։
3. Ինչո՞ւ անոթի տակ զանգը լռում է, երբ օդը դուրս է մղվում։
4. Ձայնի բարձրությունն ինչի՞ց է կախված, իսկ ուժգնությունը՝ ինչի՞ց։
5. Նշեք ձայնի արագությունն օդում, ջրում և պողպատում։
6. Արձագանքը վերադառնում է $2$ վ հետո։ Որքա՞ն հեռու է պատը։
7. Որոտը լսվում է կայծակից $9$ վ հետո։ Որքա՞ն հեռու է փոթորիկը։
8. Արձագանքաչափն ազդակը հետ է ստանում $0{,}6$ վ հետո։ Գտեք խորությունը։

### Պատասխաններ

1. Ականջին լսելի երկայնական ալիքը՝ մոտ $16$ Հց-ից մինչև $20000$ Հց։
2. $16$ Հց-ից ցածր և $20000$ Հց-ից բարձր տատանումները։
3. Չի մնում միջավայր, որն երկայնական ալիքը տանի։
4. Բարձրությունը՝ հաճախությունից, ուժգնությունը՝ հիմնականում ամպլիտուդից։
5. Մոտ $340$ մ/վ, մոտ $1500$ մ/վ և մոտ $5000$ մ/վ։
6. $s = 340 \\cdot 2/2 = 340$ մ։
7. Մոտ $3$ կմ։
8. $s = 1500 \\cdot 0{,}6/2 = 450$ մ։`,
        ru: `## Что такое звук

> **Звуком** называют продольную механическую волну, слышимую человеческим ухом, с частотами примерно от $16$ Гц до $20000$ Гц.

Звучащее тело всегда колеблется: струна, кожа барабана, камертон, воздух в трубе или наши голосовые связки. Колебание сжимает воздух рядом с собой, сжатие передаётся дальше, и наша перепонка повторяет движение.

| Частота | Название | Кто слышит или использует |
|---|---|---|
| ниже $16$ Гц | инфразвук | не слышит никто; чувствуется перед землетрясением, используется китами |
| от $16$ Гц до $20000$ Гц | звук | люди и животные |
| выше $20000$ Гц | ультразвук | летучие мыши, дельфины, медицинские сканеры, дефектоскопы |

**Пример 1.** Звонок под стеклянным колпаком звучит всё тише, пока воздух выкачивают, и умолкает в вакууме, хотя видно, что он по-прежнему дрожит. Звуку нужна среда, свету — нет.

## Высота и громкость

| Что мы слышим | От чего зависит |
|---|---|
| высота: высокая или низкая нота | от частоты: большая частота — более высокая нота |
| громкость | от амплитуды, а также от частоты |
| тембр: окраска звука | от дополнительных частот, идущих вместе с основной |

Поэтому тонкая натянутая струна даёт высокую ноту, а толстая ослабленная — низкую, и поэтому более сильный щипок той же струны делает звук громче, не меняя ноты.

**Пример 2.** Нота $440$ Гц — это ля, по которой настраивается оркестр. Октавой выше находится $880$ Гц — ровно двойная частота.

## Скорость звука и эхо

Звук идёт быстрее там, где частицы связаны крепче всего:

| Среда | Скорость |
|---|---|
| воздух при $0$ °C | около $331$ м/с |
| воздух при $20$ °C | около $340$ м/с |
| вода | около $1500$ м/с |
| сталь | около $5000$ м/с |

**Эхо** — это звук, отражённый от стены, скалы или леса и услышанный снова. Так как звук должен пройти туда и обратно, расстояние равно
$$s = \\frac{vt}{2}.$$

**Пример 3.** Эхо возвращается от скалы через $3$ с. Скала находится на расстоянии $340 \\cdot 3 : 2 = 510$ м.
**Пример 4.** Гром слышен через $6$ с после молнии. Гроза примерно в $2$ км, так как свет приходит практически мгновенно.
**Пример 5.** Эхолот посылает в море импульс и слышит его через $0{,}4$ с. Глубина равна $1500 \\cdot 0{,}4 : 2 = 300$ м.
**Пример 6.** В небольшой комнате эхо возвращается меньше чем за $0{,}05$ с и сливается с исходным звуком — поэтому эхо мы слышим на улице, а не в спальне.

### Упражнения

1. Что такое звук и между какими частотами мы слышим?
2. Что такое инфразвук и ультразвук?
3. Почему звонок под колпаком умолкает, когда воздух выкачивают?
4. От чего зависит высота звука и от чего громкость?
5. Укажите скорость звука в воздухе, в воде и в стали.
6. Эхо возвращается через $2$ с. Как далеко стена?
7. Гром слышен через $9$ с после молнии. Как далеко гроза?
8. Эхолот получает импульс обратно через $0{,}6$ с. Найдите глубину.

### Ответы

1. Продольная волна, слышимая ухом, примерно от $16$ Гц до $20000$ Гц.
2. Колебания ниже $16$ Гц и выше $20000$ Гц.
3. Не остаётся среды, которая переносила бы продольную волну.
4. Высота от частоты, громкость в основном от амплитуды.
5. Около $340$ м/с, около $1500$ м/с и около $5000$ м/с.
6. $s = 340 \\cdot 2 : 2 = 340$ м.
7. Около $3$ км.
8. $s = 1500 \\cdot 0{,}6 : 2 = 450$ м.`,
      },
      [
        q(t("Sound is", "Ձայնը", "Звук — это"), [
          t("a longitudinal wave", "երկայնական ալիք է", "продольная волна"),
          t("a transverse wave", "լայնական ալիք է", "поперечная волна"),
          t("not a wave", "ալիք չէ", "не волна"),
        ], 0),
        q(t("A human ear hears frequencies roughly from", "Մարդու ականջը լսում է հաճախություններ մոտավորապես", "Человеческое ухо слышит частоты примерно от"), [
          t("1 Hz to 100 Hz", "1 Հց-ից մինչև 100 Հց", "1 Гц до 100 Гц"),
          t("16 Hz to 20000 Hz", "16 Հց-ից մինչև 20000 Հց", "16 Гц до 20000 Гц"),
          t("20000 Hz to 50000 Hz", "20000 Հց-ից մինչև 50000 Հց", "20000 Гц до 50000 Гц"),
        ], 1),
        q(t("The pitch of a note depends on", "Նոտայի բարձրությունը կախված է", "Высота ноты зависит от"), [
          t("the amplitude", "ամպլիտուդից", "амплитуды"),
          t("the loudness", "ուժգնությունից", "громкости"),
          t("the frequency", "հաճախությունից", "частоты"),
        ], 2),
        q(t("The speed of sound in water compared with air is", "Ջրում ձայնի արագությունն օդի համեմատ", "Скорость звука в воде по сравнению с воздухом"), [
          t("much greater", "շատ ավելի մեծ", "намного больше"),
          t("much smaller", "շատ ավելի փոքր", "намного меньше"),
          t("the same", "նույնը", "такая же"),
        ], 0),
        q(t("An echo returns from a wall after 4 s. The wall is", "Արձագանքը պատից վերադառնում է 4 վ հետո։ Պատը", "Эхо возвращается от стены через 4 с. Стена находится на расстоянии"), [
          t("1360 m away", "1360 մ հեռու է", "1360 м"),
          t("680 m away", "680 մ հեռու է", "680 м"),
          t("170 m away", "170 մ հեռու է", "170 м"),
        ], 1),
        q(t("Oscillations above 20000 Hz are called", "20000 Հց-ից բարձր տատանումները կոչվում են", "Колебания выше 20000 Гц называют"), [
          t("infrasound", "ինֆրաձայն", "инфразвуком"),
          t("loud sound", "ուժգին ձայն", "громким звуком"),
          t("ultrasound", "ուլտրաձայն", "ультразвуком"),
        ], 2),
      ],
    ),
  ],
};
