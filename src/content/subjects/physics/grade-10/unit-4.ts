import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Electrostatics", "Էլեկտրաստատիկա", "Электростатика"),
  summary: t("Coulomb's law, electric field strength, potential, capacitors.", "Կուլոնի օրենք, էլեկտրական դաշտի լարվածություն, պոտենցիալ, կոնդենսատորներ։", "Закон Кулона, напряжённость электрического поля, потенциал, конденсаторы."),
  lessons: [
    lesson(
      "coulombs-law",
      ["Charge conservation; Coulomb's law", "Լիցքի պահպանում, Կուլոնի օրենք", "Закон сохранения заряда; закон Кулона"],
      {
        en: ["Describe electric charge: two kinds, the elementary charge, quantisation and the law of conservation of charge", "Apply Coulomb's law F = kq₁q₂/r² in vacuum and in a medium with permittivity ε", "Use the superposition principle to find the net force from several charges"],
        hy: ["Նկարագրել էլեկտրական լիցքը․ երկու տեսակ, տարրական լիցք, քվանտացում և լիցքի պահպանման օրենք", "Կիրառել Կուլոնի օրենքը F = kq₁q₂/r² վակուումում և ε դիէլեկտրիկ թափանցելիությամբ միջավայրում", "Օգտագործել սուպերպոզիցիայի սկզբունքը մի քանի լիցքերի արդյունարար ուժը գտնելու համար"],
        ru: ["Описывать электрический заряд: два рода, элементарный заряд, квантование и закон сохранения заряда", "Применять закон Кулона F = kq₁q₂/r² в вакууме и в среде с диэлектрической проницаемостью ε", "Использовать принцип суперпозиции для нахождения результирующей силы от нескольких зарядов"],
      },
      {
        en: `## Electric charge

Bodies rubbed together become **electrified**: they attract light objects and act on each other. There are two kinds of charge, **positive** and **negative**; like charges repel, unlike attract. Charge is measured in **coulombs** (C).

> The **elementary charge** $e = 1{.}6 \\cdot 10^{-19}$ C is the charge of a proton; an electron has $-e$. Any charge is a whole multiple of $e$: $q = \\pm Ne$ (quantisation).

A body is charged negatively when it has extra electrons and positively when it lacks them. Rubbing does not create charge: electrons simply pass from one body to the other.

> **Law of conservation of charge.** In a closed system the algebraic sum of charges does not change.

A body can also be charged **by induction**: a charged rod brought near a conductor separates its charges without touching it. When two identical conducting balls touch, their total charge is shared equally.

## Coulomb's law

> The force between two point charges at rest is proportional to the product of the charges and inversely proportional to the square of the distance between them:
> $$F = k\\dfrac{\\lvert q_1 q_2\\rvert}{r^2}, \\qquad k = 9 \\cdot 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2.$$

The force acts along the line joining the charges. In a medium with **permittivity** $\\varepsilon$ the force is $\\varepsilon$ times smaller: water $\\varepsilon = 81$, kerosene $\\varepsilon = 2$, air $\\varepsilon \\approx 1$. The law has the same form as the law of gravitation, but the electric force can be attractive or repulsive and is enormously stronger.

**Superposition.** The force on a charge from several charges is the vector sum of the forces from each one separately.

**Example 1.** A body has a charge of $-1$ μC. The number of excess electrons is $\\dfrac{10^{-6}}{1{.}6 \\cdot 10^{-19}} \\approx 6 \\cdot 10^{12}$: six thousand billion electrons, a tiny fraction of those present.

**Example 2.** Charges $2$ μC and $3$ μC are $30$ cm apart in air: $F = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-6} \\cdot 3 \\cdot 10^{-6}}{0{.}09} = 0{.}6$ N. In water the force would be $\\dfrac{0{.}6}{81} \\approx 7 \\cdot 10^{-3}$ N.

**Example 3.** Two identical balls carry $5$ nC and $-3$ nC at $10$ cm. Before touching they attract with $F = 9 \\cdot 10^9 \\cdot \\dfrac{15 \\cdot 10^{-18}}{0{.}01} = 1{.}35 \\cdot 10^{-5}$ N. After touching each has $\\dfrac{5 - 3}{2} = 1$ nC and at the same distance they repel with $9 \\cdot 10^{-7}$ N.

**Example 4.** In a hydrogen atom the electron is $0{.}53 \\cdot 10^{-10}$ m from the proton. Electric force: $9 \\cdot 10^9 \\cdot \\dfrac{(1{.}6 \\cdot 10^{-19})^2}{2{.}8 \\cdot 10^{-21}} \\approx 8 \\cdot 10^{-8}$ N. Gravitational force: $6{.}67 \\cdot 10^{-11} \\cdot \\dfrac{9{.}1 \\cdot 10^{-31} \\cdot 1{.}67 \\cdot 10^{-27}}{2{.}8 \\cdot 10^{-21}} \\approx 4 \\cdot 10^{-47}$ N, about $10^{39}$ times weaker. Gravity is negligible inside atoms.

**Example 5.** Charges $1$ μC and $4$ μC are $30$ cm apart. Where on the line between them is the force on a test charge zero? $\\dfrac{k q_1}{x^2} = \\dfrac{k q_2}{(0{.}3 - x)^2}$, $\\dfrac{0{.}3 - x}{x} = 2$, $x = 10$ cm from the smaller charge.

**Example 6.** Three charges $q = 1$ μC sit at the corners of an equilateral triangle with side $10$ cm. Each pair force is $k\\dfrac{q^2}{a^2} = 9 \\cdot 10^9 \\cdot \\dfrac{10^{-12}}{0{.}01} = 0{.}9$ N; the two forces on one charge are at $60°$, so the resultant is $0{.}9\\sqrt3 \\approx 1{.}56$ N, directed away from the centre.

**Example 7.** Charges $+q$ at $x = 0$ and $+q$ at $x = 2a$, with a charge $Q$ in the middle: the two forces are equal and opposite, the net force is zero. If $Q$ is shifted slightly along the line it is pushed back, but if shifted sideways it escapes: the equilibrium is unstable.

**Example 8.** How does the force change if both charges are doubled and the distance is doubled too? The product grows $4$ times, $r^2$ grows $4$ times: the force is unchanged. Halving the distance alone makes the force $4$ times greater.

### Exercises

1. How many elementary charges make up $3{.}2 \\cdot 10^{-18}$ C?
2. Find the force between $4$ μC and $5$ μC at $20$ cm in air.
3. At what distance do two $1$ μC charges repel with a force of $9$ N?
4. Identical balls with $8$ nC and $-2$ nC touch and are placed $5$ cm apart. Find the force.
5. A ball loses $10^{10}$ electrons. Find its charge.
6. Charges $2$ μC and $8$ μC are $30$ cm apart. Where between them is the net force on a test charge zero?
7. Two charges attract with $1$ N in vacuum. Find the force in kerosene ($\\varepsilon = 2$).
8. A $1$ μC charge is repelled with $0{.}9$ N by a charge $10$ cm away. Find that charge.

### Answers

1. $20$. 2. $9 \\cdot 10^9 \\cdot \\dfrac{20 \\cdot 10^{-12}}{0{.}04} = 4{.}5$ N. 3. $r^2 = \\dfrac{9 \\cdot 10^9 \\cdot 10^{-12}}{9} = 10^{-3}$, $r \\approx 3{.}2$ cm. 4. $3$ nC each; $9 \\cdot 10^9 \\cdot \\dfrac{9 \\cdot 10^{-18}}{0{.}0025} \\approx 3{.}2 \\cdot 10^{-5}$ N. 5. $+1{.}6 \\cdot 10^{-9}$ C. 6. $10$ cm from the $2$ μC charge. 7. $0{.}5$ N. 8. $q = \\dfrac{0{.}9 \\cdot 0{.}01}{9 \\cdot 10^9 \\cdot 10^{-6}} = 10^{-6}$ C $= 1$ μC.`,
        hy: `## Էլեկտրական լիցք

Միմյանց շփված մարմինները **էլեկտրականանում են**․ ձգում են թեթև առարկաներ և ազդում միմյանց վրա։ Լիցքն երկու տեսակ է՝ **դրական** և **բացասական**, նույնանուն լիցքերը վանում են, տարանունները՝ ձգում։ Լիցքը չափվում է **կուլոնով** (Կլ)։

> **Տարրական լիցքը** $e = 1{,}6 \\cdot 10^{-19}$ Կլ պրոտոնի լիցքն է, էլեկտրոնն ունի $-e$։ Ցանկացած լիցք $e$-ի ամբողջ պատիկ է․ $q = \\pm Ne$ (քվանտացում)։

Մարմինը բացասական է լիցքավորված, երբ ունի ավելորդ էլեկտրոններ, և դրական, երբ դրանք պակասում են։ Շփումը լիցք չի ստեղծում․ էլեկտրոնները պարզապես անցնում են մի մարմնից մյուսին։

> **Լիցքի պահպանման օրենք։** Փակ համակարգում լիցքերի հանրահաշվական գումարը չի փոխվում։

Մարմինը կարելի է լիցքավորել նաև **ինդուկցիայով**․ հաղորդչին մոտեցված լիցքավորված ձողը բաժանում է նրա լիցքերն առանց հպվելու։ Երկու միատեսակ հաղորդիչ գնդիկներ հպվելիս դրանց ընդհանուր լիցքը հավասար է բաժանվում։

## Կուլոնի օրենք

> Հանգստի վիճակում երկու կետային լիցքերի միջև ուժը համեմատական է լիցքերի արտադրյալին և հակադարձ համեմատական նրանց միջև հեռավորության քառակուսուն․
> $$F = k\\dfrac{\\lvert q_1 q_2\\rvert}{r^2}, \\qquad k = 9 \\cdot 10^9\\ \\text{Ն}\\cdot\\text{մ}^2/\\text{Կլ}^2$$

Ուժն ազդում է լիցքերը միացնող ուղղի երկայնքով։ $\\varepsilon$ **դիէլեկտրիկ թափանցելիությամբ** միջավայրում ուժը $\\varepsilon$ անգամ փոքր է․ ջուր $\\varepsilon = 81$, կերոսին $\\varepsilon = 2$, օդ $\\varepsilon \\approx 1$։ Օրենքն ունի տիեզերական ձգողության օրենքի տեսքը, բայց էլեկտրական ուժը կարող է լինել ձգող կամ վանող և անհամեմատ ավելի ուժեղ է։

**Սուպերպոզիցիա։** Մի քանի լիցքերի կողմից լիցքի վրա ազդող ուժը յուրաքանչյուրից առանձին ազդող ուժերի վեկտորական գումարն է։

**Օրինակ 1։** Մարմինն ունի $-1$ մկԿլ լիցք։ Ավելորդ էլեկտրոնների թիվը $\\dfrac{10^{-6}}{1{,}6 \\cdot 10^{-19}} \\approx 6 \\cdot 10^{12}$ է․ վեց հազար միլիարդ էլեկտրոն՝ առկաների չնչին մասը։

**Օրինակ 2։** $2$ մկԿլ և $3$ մկԿլ լիցքերն օդում $30$ սմ հեռավորության վրա են․ $F = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-6} \\cdot 3 \\cdot 10^{-6}}{0{,}09} = 0{,}6$ Ն։ Ջրում ուժը կլիներ $\\dfrac{0{,}6}{81} \\approx 7 \\cdot 10^{-3}$ Ն։

**Օրինակ 3։** Երկու միատեսակ գնդիկներ կրում են $5$ նԿլ և $-3$ նԿլ $10$ սմ հեռավորության վրա։ Հպվելուց առաջ դրանք ձգվում են $F = 9 \\cdot 10^9 \\cdot \\dfrac{15 \\cdot 10^{-18}}{0{,}01} = 1{,}35 \\cdot 10^{-5}$ Ն ուժով։ Հպվելուց հետո յուրաքանչյուրն ունի $\\dfrac{5 - 3}{2} = 1$ նԿլ և նույն հեռավորության վրա վանվում են $9 \\cdot 10^{-7}$ Ն ուժով։

**Օրինակ 4։** Ջրածնի ատոմում էլեկտրոնը պրոտոնից $0{,}53 \\cdot 10^{-10}$ մ հեռավորության վրա է։ Էլեկտրական ուժ․ $9 \\cdot 10^9 \\cdot \\dfrac{(1{,}6 \\cdot 10^{-19})^2}{2{,}8 \\cdot 10^{-21}} \\approx 8 \\cdot 10^{-8}$ Ն։ Ձգողության ուժ․ $6{,}67 \\cdot 10^{-11} \\cdot \\dfrac{9{,}1 \\cdot 10^{-31} \\cdot 1{,}67 \\cdot 10^{-27}}{2{,}8 \\cdot 10^{-21}} \\approx 4 \\cdot 10^{-47}$ Ն, մոտ $10^{39}$ անգամ թույլ։ Ատոմների ներսում ձգողությունն անտեսելի է։

**Օրինակ 5։** $1$ մկԿլ և $4$ մկԿլ լիցքերը $30$ սմ հեռավորության վրա են։ Դրանց միջև ուղղի ո՞ր կետում է փորձնական լիցքի վրա ուժը զրո։ $\\dfrac{k q_1}{x^2} = \\dfrac{k q_2}{(0{,}3 - x)^2}$, $\\dfrac{0{,}3 - x}{x} = 2$, $x = 10$ սմ փոքր լիցքից։

**Օրինակ 6։** Երեք $q = 1$ մկԿլ լիցքեր գտնվում են $10$ սմ կողմով հավասարակողմ եռանկյան գագաթներում։ Ամեն զույգի ուժը $k\\dfrac{q^2}{a^2} = 9 \\cdot 10^9 \\cdot \\dfrac{10^{-12}}{0{,}01} = 0{,}9$ Ն է, մեկ լիցքի վրա երկու ուժերը $60°$ անկյան տակ են, ուստի արդյունարարը $0{,}9\\sqrt3 \\approx 1{,}56$ Ն է՝ ուղղված կենտրոնից դուրս։

**Օրինակ 7։** $+q$ լիցքեր $x = 0$-ում և $x = 2a$-ում, մեջտեղում՝ $Q$ լիցք․ երկու ուժերը հավասար են և հակառակ, արդյունարար ուժը զրո է։ Եթե $Q$-ն փոքր-ինչ շեղվի ուղղի երկայնքով, այն հետ է հրվում, բայց կողք շեղվելիս՝ հեռանում․ հավասարակշռությունն անկայուն է։

**Օրինակ 8։** Ինչպե՞ս է փոխվում ուժը, եթե երկու լիցքերն էլ կրկնապատկվեն և հեռավորությունը նույնպես կրկնապատկվի։ Արտադրյալն աճում է $4$ անգամ, $r^2$-ը՝ $4$ անգամ․ ուժը չի փոխվում։ Միայն հեռավորությունը կիսելն ուժը $4$ անգամ մեծացնում է։

### Վարժություններ

1. Քանի՞ տարրական լիցք է կազմում $3{,}2 \\cdot 10^{-18}$ Կլ։
2. Գտեք ուժը $4$ մկԿլ և $5$ մկԿլ լիցքերի միջև օդում $20$ սմ հեռավորության վրա։
3. Ի՞նչ հեռավորության վրա են երկու $1$ մկԿլ լիցքերը վանվում $9$ Ն ուժով։
4. $8$ նԿլ և $-2$ նԿլ լիցքերով միատեսակ գնդիկները հպվում են և տեղադրվում $5$ սմ հեռավորության վրա։ Գտեք ուժը։
5. Գնդիկը կորցնում է $10^{10}$ էլեկտրոն։ Գտեք նրա լիցքը։
6. $2$ մկԿլ և $8$ մկԿլ լիցքերը $30$ սմ հեռավորության վրա են։ Դրանց միջև որտե՞ղ է փորձնական լիցքի վրա արդյունարար ուժը զրո։
7. Երկու լիցքեր վակուումում ձգվում են $1$ Ն ուժով։ Գտեք ուժը կերոսինում ($\\varepsilon = 2$)։
8. $1$ մկԿլ լիցքը $10$ սմ հեռավորության վրա գտնվող լիցքից վանվում է $0{,}9$ Ն ուժով։ Գտեք այդ լիցքը։

### Պատասխաններ

1. $20$։ 2. $9 \\cdot 10^9 \\cdot \\dfrac{20 \\cdot 10^{-12}}{0{,}04} = 4{,}5$ Ն։ 3. $r^2 = \\dfrac{9 \\cdot 10^9 \\cdot 10^{-12}}{9} = 10^{-3}$, $r \\approx 3{,}2$ սմ։ 4. $3$ նԿլ յուրաքանչյուրը, $9 \\cdot 10^9 \\cdot \\dfrac{9 \\cdot 10^{-18}}{0{,}0025} \\approx 3{,}2 \\cdot 10^{-5}$ Ն։ 5. $+1{,}6 \\cdot 10^{-9}$ Կլ։ 6. $10$ սմ $2$ մկԿլ լիցքից։ 7. $0{,}5$ Ն։ 8. $q = \\dfrac{0{,}9 \\cdot 0{,}01}{9 \\cdot 10^9 \\cdot 10^{-6}} = 10^{-6}$ Կլ $= 1$ մկԿլ։`,
        ru: `## Электрический заряд

Потёртые друг о друга тела **электризуются**: притягивают лёгкие предметы и действуют друг на друга. Есть два рода заряда, **положительный** и **отрицательный**; одноимённые заряды отталкиваются, разноимённые притягиваются. Заряд измеряется в **кулонах** (Кл).

> **Элементарный заряд** $e = 1{,}6 \\cdot 10^{-19}$ Кл — заряд протона; у электрона $-e$. Любой заряд кратен $e$: $q = \\pm Ne$ (квантование).

Тело заряжено отрицательно, когда у него избыток электронов, и положительно, когда их недостаёт. Трение не создаёт заряд: электроны просто переходят с одного тела на другое.

> **Закон сохранения заряда.** В замкнутой системе алгебраическая сумма зарядов не меняется.

Тело можно зарядить и **через влияние**: поднесённая к проводнику заряженная палочка разделяет его заряды, не касаясь его. Когда два одинаковых проводящих шарика соприкасаются, их общий заряд делится поровну.

## Закон Кулона

> Сила взаимодействия двух покоящихся точечных зарядов пропорциональна произведению зарядов и обратно пропорциональна квадрату расстояния между ними:
> $$F = k\\dfrac{\\lvert q_1 q_2\\rvert}{r^2}, \\qquad k = 9 \\cdot 10^9\\ \\text{Н}\\cdot\\text{м}^2/\\text{Кл}^2.$$

Сила направлена вдоль прямой, соединяющей заряды. В среде с **диэлектрической проницаемостью** $\\varepsilon$ сила в $\\varepsilon$ раз меньше: вода $\\varepsilon = 81$, керосин $\\varepsilon = 2$, воздух $\\varepsilon \\approx 1$. Закон имеет тот же вид, что закон тяготения, но электрическая сила может быть и притягивающей, и отталкивающей и неизмеримо сильнее.

**Суперпозиция.** Сила, действующая на заряд со стороны нескольких зарядов, равна векторной сумме сил от каждого из них отдельно.

**Пример 1.** Тело имеет заряд $-1$ мкКл. Число избыточных электронов $\\dfrac{10^{-6}}{1{,}6 \\cdot 10^{-19}} \\approx 6 \\cdot 10^{12}$: шесть тысяч миллиардов электронов — ничтожная доля имеющихся.

**Пример 2.** Заряды $2$ мкКл и $3$ мкКл находятся на расстоянии $30$ см в воздухе: $F = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-6} \\cdot 3 \\cdot 10^{-6}}{0{,}09} = 0{,}6$ Н. В воде сила была бы $\\dfrac{0{,}6}{81} \\approx 7 \\cdot 10^{-3}$ Н.

**Пример 3.** Два одинаковых шарика несут $5$ нКл и $-3$ нКл на расстоянии $10$ см. До соприкосновения они притягиваются с силой $F = 9 \\cdot 10^9 \\cdot \\dfrac{15 \\cdot 10^{-18}}{0{,}01} = 1{,}35 \\cdot 10^{-5}$ Н. После соприкосновения у каждого $\\dfrac{5 - 3}{2} = 1$ нКл, и на том же расстоянии они отталкиваются с силой $9 \\cdot 10^{-7}$ Н.

**Пример 4.** В атоме водорода электрон находится в $0{,}53 \\cdot 10^{-10}$ м от протона. Электрическая сила: $9 \\cdot 10^9 \\cdot \\dfrac{(1{,}6 \\cdot 10^{-19})^2}{2{,}8 \\cdot 10^{-21}} \\approx 8 \\cdot 10^{-8}$ Н. Гравитационная сила: $6{,}67 \\cdot 10^{-11} \\cdot \\dfrac{9{,}1 \\cdot 10^{-31} \\cdot 1{,}67 \\cdot 10^{-27}}{2{,}8 \\cdot 10^{-21}} \\approx 4 \\cdot 10^{-47}$ Н, примерно в $10^{39}$ раз слабее. Внутри атомов тяготением можно пренебречь.

**Пример 5.** Заряды $1$ мкКл и $4$ мкКл находятся на расстоянии $30$ см. Где на прямой между ними сила на пробный заряд равна нулю? $\\dfrac{k q_1}{x^2} = \\dfrac{k q_2}{(0{,}3 - x)^2}$, $\\dfrac{0{,}3 - x}{x} = 2$, $x = 10$ см от меньшего заряда.

**Пример 6.** Три заряда $q = 1$ мкКл находятся в вершинах равностороннего треугольника со стороной $10$ см. Сила каждой пары $k\\dfrac{q^2}{a^2} = 9 \\cdot 10^9 \\cdot \\dfrac{10^{-12}}{0{,}01} = 0{,}9$ Н; две силы на один заряд образуют $60°$, поэтому результирующая $0{,}9\\sqrt3 \\approx 1{,}56$ Н направлена от центра.

**Пример 7.** Заряды $+q$ при $x = 0$ и $+q$ при $x = 2a$, посередине заряд $Q$: две силы равны и противоположны, результирующая равна нулю. Если $Q$ слегка сдвинуть вдоль прямой, его возвращает назад, но при сдвиге вбок он уходит: равновесие неустойчиво.

**Пример 8.** Как изменится сила, если оба заряда удвоить и расстояние тоже удвоить? Произведение растёт в $4$ раза, $r^2$ растёт в $4$ раза: сила не меняется. Уменьшение вдвое только расстояния делает силу в $4$ раза больше.

### Упражнения

1. Сколько элементарных зарядов составляют $3{,}2 \\cdot 10^{-18}$ Кл?
2. Найдите силу между $4$ мкКл и $5$ мкКл на расстоянии $20$ см в воздухе.
3. На каком расстоянии два заряда по $1$ мкКл отталкиваются с силой $9$ Н?
4. Одинаковые шарики с $8$ нКл и $-2$ нКл соприкасаются и помещаются на расстоянии $5$ см. Найдите силу.
5. Шарик теряет $10^{10}$ электронов. Найдите его заряд.
6. Заряды $2$ мкКл и $8$ мкКл находятся на расстоянии $30$ см. Где между ними результирующая сила на пробный заряд равна нулю?
7. Два заряда притягиваются с силой $1$ Н в вакууме. Найдите силу в керосине ($\\varepsilon = 2$).
8. Заряд $1$ мкКл отталкивается с силой $0{,}9$ Н зарядом, находящимся в $10$ см. Найдите этот заряд.

### Ответы

1. $20$. 2. $9 \\cdot 10^9 \\cdot \\dfrac{20 \\cdot 10^{-12}}{0{,}04} = 4{,}5$ Н. 3. $r^2 = \\dfrac{9 \\cdot 10^9 \\cdot 10^{-12}}{9} = 10^{-3}$, $r \\approx 3{,}2$ см. 4. По $3$ нКл; $9 \\cdot 10^9 \\cdot \\dfrac{9 \\cdot 10^{-18}}{0{,}0025} \\approx 3{,}2 \\cdot 10^{-5}$ Н. 5. $+1{,}6 \\cdot 10^{-9}$ Кл. 6. В $10$ см от заряда $2$ мкКл. 7. $0{,}5$ Н. 8. $q = \\dfrac{0{,}9 \\cdot 0{,}01}{9 \\cdot 10^9 \\cdot 10^{-6}} = 10^{-6}$ Кл $= 1$ мкКл.`,
      },
      [
        q(t("The elementary charge is approximately…", "Տարրական լիցքը մոտավորապես…", "Элементарный заряд приблизительно равен…"), [t("1.6 · 10⁻¹⁹ C", "1,6 · 10⁻¹⁹ Կ է", "1,6 · 10⁻¹⁹ Кл"), t("9 · 10⁹ C", "9 · 10⁹ Կ է", "9 · 10⁹ Кл"), t("6 · 10²³ C", "6 · 10²³ Կ է", "6 · 10²³ Кл")], 0),
        q(t("A body is charged negatively when it…", "Մարմինը բացասական է լիցքավորված, երբ…", "Тело заряжено отрицательно, когда оно…"), [t("has extra electrons", "ունի ավելորդ էլեկտրոններ", "имеет избыток электронов"), t("lacks electrons", "էլեկտրոնների պակաս ունի", "испытывает недостаток электронов"), t("has extra protons", "ունի ավելորդ պրոտոններ", "имеет избыток протонов")], 0),
        q(t("When two identical conducting balls with 6 nC and −2 nC touch, each gets…", "Երբ 6 նԿլ և −2 նԿլ լիցքերով երկու միատեսակ հաղորդիչ գնդիկներ հպվում են, յուրաքանչյուրը ստանում է…", "Когда два одинаковых проводящих шарика с 6 нКл и −2 нКл соприкасаются, каждый получает…"), [t("4 nC", "4 նԿլ", "4 нКл"), t("2 nC", "2 նԿլ", "2 нКл"), t("8 nC", "8 նԿլ", "8 нКл")], 1),
        q(t("If the distance between two charges is tripled, the force…", "Եթե երկու լիցքերի հեռավորությունն եռապատկվի, ուժը…", "Если расстояние между двумя зарядами утроить, сила…"), [t("becomes 3 times smaller", "3 անգամ կփոքրանա", "уменьшится в 3 раза"), t("becomes 9 times smaller", "9 անգամ կփոքրանա", "уменьшится в 9 раз"), t("becomes 3 times larger", "3 անգամ կմեծանա", "увеличится в 3 раза")], 1),
        q(t("In water (ε = 81) the Coulomb force is…", "Ջրում (ε = 81) Կուլոնի ուժը…", "В воде (ε = 81) сила Кулона…"), [t("81 times greater than in vacuum", "վակուումից 81 անգամ մեծ է", "в 81 раз больше, чем в вакууме"), t("81 times smaller than in vacuum", "վակուումից 81 անգամ փոքր է", "в 81 раз меньше, чем в вакууме"), t("the same as in vacuum", "նույնն է, ինչ վակուումում", "такая же, как в вакууме")], 1),
        q(t("The force between 1 μC and 1 μC at 1 m is…", "1 մկԿլ և 1 մկԿլ լիցքերի միջև ուժը 1 մ հեռավորության վրա…", "Сила между 1 мкКл и 1 мкКл на расстоянии 1 м равна…"), [t("9 · 10⁻³ N", "9 · 10⁻³ Ն է", "9 · 10⁻³ Н"), t("9 · 10⁹ N", "9 · 10⁹ Ն է", "9 · 10⁹ Н"), t("9 N", "9 Ն է", "9 Н")], 0),
      ],
    ),
    lesson(
      "field-strength",
      ["Electric field strength; field lines", "Էլեկտրական դաշտի լարվածություն, դաշտի գծեր", "Напряжённость электрического поля; силовые линии"],
      {
        en: ["Define the electric field and its strength E = F/q and compute the field of a point charge and of a charged sphere", "Apply the superposition principle to find the field of several charges", "Draw and read field line pictures, including the uniform field between plates, and compute the motion of a charge in a field"],
        hy: ["Սահմանել էլեկտրական դաշտը և նրա լարվածությունը E = F/q, հաշվել կետային լիցքի և լիցքավորված գնդի դաշտը", "Կիրառել սուպերպոզիցիայի սկզբունքը մի քանի լիցքերի դաշտը գտնելու համար", "Գծել և կարդալ ուժագծերի պատկերներ, այդ թվում թիթեղների միջև համասեռ դաշտը, հաշվել լիցքի շարժումը դաշտում"],
        ru: ["Определять электрическое поле и его напряжённость E = F/q, вычислять поле точечного заряда и заряженной сферы", "Применять принцип суперпозиции для нахождения поля нескольких зарядов", "Строить и читать картины силовых линий, включая однородное поле между пластинами, и рассчитывать движение заряда в поле"],
      },
      {
        en: `## The electric field

Charges act on each other at a distance through the **electric field**: every charge creates a field in the surrounding space, and the field acts on any other charge placed in it. The field is real: it carries energy and propagates at the speed of light.

> The **field strength** $\\vec E$ at a point is the force acting on a unit positive charge placed there:
> $$\\vec E = \\dfrac{\\vec F}{q}, \\qquad F = qE.$$
> Unit: N/C, which is the same as V/m.

The direction of $\\vec E$ is the direction of the force on a positive charge; a negative charge is pushed against the field. From Coulomb's law the field of a **point charge** $Q$ at distance $r$ is
$$E = k\\dfrac{\\lvert Q\\rvert}{r^2},$$
directed away from a positive charge and towards a negative one. A uniformly charged **sphere** creates outside itself the same field as a point charge at its centre, and **zero field inside**.

**Superposition.** The field of several charges is the vector sum of their separate fields: $\\vec E = \\vec E_1 + \\vec E_2 + \\dots$

## Field lines

**Field lines** are drawn so that the tangent at each point gives the direction of $\\vec E$. They start on positive charges and end on negative ones (or go to infinity), never cross, and are denser where the field is stronger. Between two large parallel plates with opposite charges the lines are parallel and equally spaced: the field is **uniform**, the same at every point.

A charge $q$ of mass $m$ in a uniform field moves with constant acceleration $a = \\dfrac{qE}{m}$, exactly like a body in the field of gravity.

**Example 1.** A $2$ μC charge in a field of $500$ N/C experiences $F = 2 \\cdot 10^{-6} \\cdot 500 = 10^{-3}$ N along the field. A $-2$ μC charge feels the same force against the field.

**Example 2.** Field of a $5$ nC charge at $30$ cm: $E = 9 \\cdot 10^9 \\cdot \\dfrac{5 \\cdot 10^{-9}}{0{.}09} = 500$ N/C, pointing away from the charge.

**Example 3.** Charges $+4$ nC and $-4$ nC are $20$ cm apart. At the midpoint both fields point from the positive to the negative charge: $E = 2 \\cdot 9 \\cdot 10^9 \\cdot \\dfrac{4 \\cdot 10^{-9}}{0{.}01} = 7200$ N/C. For two equal positive charges the field at the midpoint would be zero.

**Example 4.** Charges $1$ nC and $4$ nC are $30$ cm apart. The field vanishes between them where $\\dfrac{k q_1}{x^2} = \\dfrac{k q_2}{(0{.}3 - x)^2}$, that is $0{.}3 - x = 2x$, $x = 10$ cm from the $1$ nC charge.

**Example 5.** Charges $+2$ nC at $(-10; 0)$ cm and $+2$ nC at $(10; 0)$ cm; find $\\vec E$ at $(0; 10)$ cm. Each charge is $10\\sqrt2$ cm away and gives $E_1 = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-9}}{0{.}02} = 900$ N/C at $45°$ to the vertical. The horizontal components cancel; $E = 2 \\cdot 900 \\cos 45° \\approx 1270$ N/C, directed upwards.

**Example 6.** A metal sphere of radius $10$ cm carries $2$ nC. At the surface $E = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-9}}{0{.}01} = 1800$ N/C; at $20$ cm from the centre $E = 450$ N/C; at $5$ cm from the centre, inside, $E = 0$.

**Example 7.** An electron enters a uniform field $E = 1000$ N/C. $F = 1{.}6 \\cdot 10^{-19} \\cdot 1000 = 1{.}6 \\cdot 10^{-16}$ N, $a = \\dfrac{F}{m} = \\dfrac{1{.}6 \\cdot 10^{-16}}{9{.}1 \\cdot 10^{-31}} \\approx 1{.}8 \\cdot 10^{14}$ m/s², directed against the field. Gravity ($10$ m/s²) is utterly negligible here.

**Example 8.** A dust particle of mass $1{.}6 \\cdot 10^{-15}$ kg carrying $5$ elementary charges hangs motionless between horizontal plates. $qE = mg$: $E = \\dfrac{1{.}6 \\cdot 10^{-15} \\cdot 10}{5 \\cdot 1{.}6 \\cdot 10^{-19}} = 2 \\cdot 10^4$ N/C, with the field pointing upwards if the particle is positive. This is the idea of Millikan's experiment that measured $e$.

### Exercises

1. Find the force on a $3$ μC charge in a field of $2000$ N/C.
2. Find the field of a $2$ nC charge at $10$ cm.
3. Find the field at the midpoint between $+3$ nC and $-3$ nC placed $20$ cm apart.
4. Charges $1$ nC and $9$ nC are $40$ cm apart. Where between them is $E = 0$?
5. At what distance from an $8$ nC charge is the field $200$ N/C?
6. A sphere of radius $5$ cm carries $1$ nC. Find $E$ at the surface, at $10$ cm from the centre and at $2$ cm from the centre.
7. Find the acceleration of a proton ($m = 1{.}67 \\cdot 10^{-27}$ kg) in a field of $500$ N/C.
8. What field holds a particle of mass $3{.}2 \\cdot 10^{-15}$ kg with charge $2e$ at rest against gravity?

### Answers

1. $6 \\cdot 10^{-3}$ N. 2. $1800$ N/C. 3. $2 \\cdot 9 \\cdot 10^9 \\cdot \\dfrac{3 \\cdot 10^{-9}}{0{.}01} = 5400$ N/C. 4. $10$ cm from the $1$ nC charge. 5. $r^2 = \\dfrac{9 \\cdot 10^9 \\cdot 8 \\cdot 10^{-9}}{200} = 0{.}36$, $r = 60$ cm. 6. $3600$ N/C; $900$ N/C; $0$. 7. $a = \\dfrac{1{.}6 \\cdot 10^{-19} \\cdot 500}{1{.}67 \\cdot 10^{-27}} \\approx 4{.}8 \\cdot 10^{10}$ m/s². 8. $E = \\dfrac{mg}{2e} = \\dfrac{3{.}2 \\cdot 10^{-14}}{3{.}2 \\cdot 10^{-19}} = 10^5$ N/C.`,
        hy: `## Էլեկտրական դաշտը

Լիցքերը միմյանց վրա ազդում են հեռավորության վրա **էլեկտրական դաշտի** միջոցով․ ամեն լիցք շրջապատող տարածության մեջ ստեղծում է դաշտ, և դաշտն ազդում է նրանում տեղադրված ցանկացած այլ լիցքի վրա։ Դաշտն իրական է․ այն էներգիա է կրում և տարածվում է լույսի արագությամբ։

> Կետում դաշտի **լարվածությունը** $\\vec E$ այնտեղ տեղադրված միավոր դրական լիցքի վրա ազդող ուժն է․
> $$\\vec E = \\dfrac{\\vec F}{q}, \\qquad F = qE$$
> Միավորը՝ Ն/Կլ, որը նույնն է, ինչ Վ/մ։

$\\vec E$-ի ուղղությունը դրական լիցքի վրա ազդող ուժի ուղղությունն է, բացասական լիցքը հրվում է դաշտին հակառակ։ Կուլոնի օրենքից $Q$ **կետային լիցքի** դաշտը $r$ հեռավորության վրա
$$E = k\\dfrac{\\lvert Q\\rvert}{r^2}$$
ուղղված է դրական լիցքից հեռու և դեպի բացասականը։ Համասեռ լիցքավորված **գունդն** իրենից դուրս ստեղծում է նույն դաշտը, ինչ նրա կենտրոնում կետային լիցքը, իսկ **ներսում՝ զրոյական դաշտ**։

**Սուպերպոզիցիա։** Մի քանի լիցքերի դաշտը դրանց առանձին դաշտերի վեկտորական գումարն է․ $\\vec E = \\vec E_1 + \\vec E_2 + \\dots$

## Ուժագծեր

**Ուժագծերը** գծվում են այնպես, որ ամեն կետում շոշափողը տա $\\vec E$-ի ուղղությունը։ Դրանք սկսվում են դրական լիցքերից և ավարտվում բացասականների վրա (կամ գնում են անվերջություն), երբեք չեն հատվում և ավելի խիտ են այնտեղ, որտեղ դաշտն ավելի ուժեղ է։ Հակառակ լիցքերով երկու մեծ զուգահեռ թիթեղների միջև գծերը զուգահեռ են և հավասարաչափ բաշխված․ դաշտը **համասեռ է**, ամեն կետում նույնը։

Համասեռ դաշտում $m$ զանգվածով $q$ լիցքը շարժվում է $a = \\dfrac{qE}{m}$ հաստատուն արագացմամբ՝ ճիշտ ինչպես մարմինը ծանրության դաշտում։

**Օրինակ 1։** $500$ Ն/Կլ դաշտում $2$ մկԿլ լիցքի վրա ազդում է $F = 2 \\cdot 10^{-6} \\cdot 500 = 10^{-3}$ Ն ուժ՝ դաշտի ուղղությամբ։ $-2$ մկԿլ լիցքը զգում է նույն ուժը դաշտին հակառակ։

**Օրինակ 2։** $5$ նԿլ լիցքի դաշտը $30$ սմ հեռավորության վրա․ $E = 9 \\cdot 10^9 \\cdot \\dfrac{5 \\cdot 10^{-9}}{0{,}09} = 500$ Ն/Կլ՝ ուղղված լիցքից հեռու։

**Օրինակ 3։** $+4$ նԿլ և $-4$ նԿլ լիցքերը $20$ սմ հեռավորության վրա են։ Միջնակետում երկու դաշտերն էլ ուղղված են դրականից դեպի բացասական լիցքը․ $E = 2 \\cdot 9 \\cdot 10^9 \\cdot \\dfrac{4 \\cdot 10^{-9}}{0{,}01} = 7200$ Ն/Կլ։ Երկու հավասար դրական լիցքերի դեպքում միջնակետում դաշտը զրո կլիներ։

**Օրինակ 4։** $1$ նԿլ և $4$ նԿլ լիցքերը $30$ սմ հեռավորության վրա են։ Դաշտը զրո է դրանց միջև այնտեղ, որտեղ $\\dfrac{k q_1}{x^2} = \\dfrac{k q_2}{(0{,}3 - x)^2}$, այսինքն $0{,}3 - x = 2x$, $x = 10$ սմ $1$ նԿլ լիցքից։

**Օրինակ 5։** $+2$ նԿլ լիցքեր $(-10; 0)$ սմ և $(10; 0)$ սմ կետերում, գտնել $\\vec E$-ն $(0; 10)$ սմ կետում։ Ամեն լիցք $10\\sqrt2$ սմ հեռավորության վրա է և տալիս է $E_1 = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-9}}{0{,}02} = 900$ Ն/Կլ ուղղաձիգի հետ $45°$ անկյան տակ։ Հորիզոնական բաղադրիչները կրճատվում են, $E = 2 \\cdot 900 \\cos 45° \\approx 1270$ Ն/Կլ՝ ուղղված վերև։

**Օրինակ 6։** $10$ սմ շառավղով մետաղե գունդը կրում է $2$ նԿլ։ Մակերևույթին $E = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-9}}{0{,}01} = 1800$ Ն/Կլ, կենտրոնից $20$ սմ-ում $E = 450$ Ն/Կլ, կենտրոնից $5$ սմ-ում, ներսում, $E = 0$։

**Օրինակ 7։** Էլեկտրոնը մտնում է $E = 1000$ Ն/Կլ համասեռ դաշտ։ $F = 1{,}6 \\cdot 10^{-19} \\cdot 1000 = 1{,}6 \\cdot 10^{-16}$ Ն, $a = \\dfrac{F}{m} = \\dfrac{1{,}6 \\cdot 10^{-16}}{9{,}1 \\cdot 10^{-31}} \\approx 1{,}8 \\cdot 10^{14}$ մ/վ²՝ ուղղված դաշտին հակառակ։ Ծանրությունն ($10$ մ/վ²) այստեղ բոլորովին անտեսելի է։

**Օրինակ 8։** $5$ տարրական լիցք կրող $1{,}6 \\cdot 10^{-15}$ կգ զանգվածով փոշեհատիկն անշարժ կախված է հորիզոնական թիթեղների միջև։ $qE = mg$․ $E = \\dfrac{1{,}6 \\cdot 10^{-15} \\cdot 10}{5 \\cdot 1{,}6 \\cdot 10^{-19}} = 2 \\cdot 10^4$ Ն/Կլ, դաշտն ուղղված է վերև, եթե մասնիկը դրական է։ Սա $e$-ն չափած Միլիկենի փորձի գաղափարն է։

### Վարժություններ

1. Գտեք $2000$ Ն/Կլ դաշտում $3$ մկԿլ լիցքի վրա ազդող ուժը։
2. Գտեք $2$ նԿլ լիցքի դաշտը $10$ սմ հեռավորության վրա։
3. Գտեք դաշտը $20$ սմ հեռավորության վրա տեղադրված $+3$ նԿլ և $-3$ նԿլ լիցքերի միջնակետում։
4. $1$ նԿլ և $9$ նԿլ լիցքերը $40$ սմ հեռավորության վրա են։ Դրանց միջև որտե՞ղ է $E = 0$։
5. $8$ նԿլ լիցքից ի՞նչ հեռավորության վրա է դաշտը $200$ Ն/Կլ։
6. $5$ սմ շառավղով գունդը կրում է $1$ նԿլ։ Գտեք $E$-ն մակերևույթին, կենտրոնից $10$ սմ-ում և կենտրոնից $2$ սմ-ում։
7. Գտեք պրոտոնի ($m = 1{,}67 \\cdot 10^{-27}$ կգ) արագացումը $500$ Ն/Կլ դաշտում։
8. Ի՞նչ դաշտ է $2e$ լիցքով $3{,}2 \\cdot 10^{-15}$ կգ զանգվածով մասնիկը պահում անշարժ ծանրության դեմ։

### Պատասխաններ

1. $6 \\cdot 10^{-3}$ Ն։ 2. $1800$ Ն/Կլ։ 3. $2 \\cdot 9 \\cdot 10^9 \\cdot \\dfrac{3 \\cdot 10^{-9}}{0{,}01} = 5400$ Ն/Կլ։ 4. $10$ սմ $1$ նԿլ լիցքից։ 5. $r^2 = \\dfrac{9 \\cdot 10^9 \\cdot 8 \\cdot 10^{-9}}{200} = 0{,}36$, $r = 60$ սմ։ 6. $3600$ Ն/Կլ, $900$ Ն/Կլ, $0$։ 7. $a = \\dfrac{1{,}6 \\cdot 10^{-19} \\cdot 500}{1{,}67 \\cdot 10^{-27}} \\approx 4{,}8 \\cdot 10^{10}$ մ/վ²։ 8. $E = \\dfrac{mg}{2e} = \\dfrac{3{,}2 \\cdot 10^{-14}}{3{,}2 \\cdot 10^{-19}} = 10^5$ Ն/Կլ։`,
        ru: `## Электрическое поле

Заряды действуют друг на друга на расстоянии через **электрическое поле**: каждый заряд создаёт поле в окружающем пространстве, а поле действует на любой другой заряд, помещённый в него. Поле реально: оно несёт энергию и распространяется со скоростью света.

> **Напряжённость** поля $\\vec E$ в точке — сила, действующая на помещённый туда единичный положительный заряд:
> $$\\vec E = \\dfrac{\\vec F}{q}, \\qquad F = qE.$$
> Единица: Н/Кл, что то же самое, что В/м.

Направление $\\vec E$ — направление силы на положительный заряд; отрицательный заряд толкает против поля. Из закона Кулона поле **точечного заряда** $Q$ на расстоянии $r$
$$E = k\\dfrac{\\lvert Q\\rvert}{r^2}$$
направлено от положительного заряда и к отрицательному. Равномерно заряженная **сфера** создаёт вне себя такое же поле, как точечный заряд в её центре, и **нулевое поле внутри**.

**Суперпозиция.** Поле нескольких зарядов — векторная сумма их отдельных полей: $\\vec E = \\vec E_1 + \\vec E_2 + \\dots$

## Силовые линии

**Силовые линии** проводят так, чтобы касательная в каждой точке давала направление $\\vec E$. Они начинаются на положительных зарядах и заканчиваются на отрицательных (или уходят в бесконечность), никогда не пересекаются и гуще там, где поле сильнее. Между двумя большими параллельными пластинами с противоположными зарядами линии параллельны и равноотстоят: поле **однородно**, одинаково во всех точках.

Заряд $q$ массой $m$ в однородном поле движется с постоянным ускорением $a = \\dfrac{qE}{m}$, точно как тело в поле тяжести.

**Пример 1.** На заряд $2$ мкКл в поле $500$ Н/Кл действует $F = 2 \\cdot 10^{-6} \\cdot 500 = 10^{-3}$ Н вдоль поля. Заряд $-2$ мкКл испытывает такую же силу против поля.

**Пример 2.** Поле заряда $5$ нКл на расстоянии $30$ см: $E = 9 \\cdot 10^9 \\cdot \\dfrac{5 \\cdot 10^{-9}}{0{,}09} = 500$ Н/Кл, направлено от заряда.

**Пример 3.** Заряды $+4$ нКл и $-4$ нКл находятся на расстоянии $20$ см. В середине оба поля направлены от положительного заряда к отрицательному: $E = 2 \\cdot 9 \\cdot 10^9 \\cdot \\dfrac{4 \\cdot 10^{-9}}{0{,}01} = 7200$ Н/Кл. Для двух равных положительных зарядов поле в середине было бы нулевым.

**Пример 4.** Заряды $1$ нКл и $4$ нКл находятся на расстоянии $30$ см. Поле обращается в нуль между ними там, где $\\dfrac{k q_1}{x^2} = \\dfrac{k q_2}{(0{,}3 - x)^2}$, то есть $0{,}3 - x = 2x$, $x = 10$ см от заряда $1$ нКл.

**Пример 5.** Заряды $+2$ нКл в точках $(-10; 0)$ см и $(10; 0)$ см; найти $\\vec E$ в точке $(0; 10)$ см. Каждый заряд удалён на $10\\sqrt2$ см и даёт $E_1 = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-9}}{0{,}02} = 900$ Н/Кл под $45°$ к вертикали. Горизонтальные составляющие сокращаются; $E = 2 \\cdot 900 \\cos 45° \\approx 1270$ Н/Кл, направлено вверх.

**Пример 6.** Металлическая сфера радиусом $10$ см несёт $2$ нКл. На поверхности $E = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-9}}{0{,}01} = 1800$ Н/Кл; в $20$ см от центра $E = 450$ Н/Кл; в $5$ см от центра, внутри, $E = 0$.

**Пример 7.** Электрон влетает в однородное поле $E = 1000$ Н/Кл. $F = 1{,}6 \\cdot 10^{-19} \\cdot 1000 = 1{,}6 \\cdot 10^{-16}$ Н, $a = \\dfrac{F}{m} = \\dfrac{1{,}6 \\cdot 10^{-16}}{9{,}1 \\cdot 10^{-31}} \\approx 1{,}8 \\cdot 10^{14}$ м/с², направлено против поля. Тяжесть ($10$ м/с²) здесь совершенно пренебрежима.

**Пример 8.** Пылинка массой $1{,}6 \\cdot 10^{-15}$ кг с зарядом $5$ элементарных зарядов неподвижно висит между горизонтальными пластинами. $qE = mg$: $E = \\dfrac{1{,}6 \\cdot 10^{-15} \\cdot 10}{5 \\cdot 1{,}6 \\cdot 10^{-19}} = 2 \\cdot 10^4$ Н/Кл, поле направлено вверх, если пылинка положительна. Это идея опыта Милликена, измерившего $e$.

### Упражнения

1. Найдите силу на заряд $3$ мкКл в поле $2000$ Н/Кл.
2. Найдите поле заряда $2$ нКл на расстоянии $10$ см.
3. Найдите поле в середине между $+3$ нКл и $-3$ нКл, расположенными на расстоянии $20$ см.
4. Заряды $1$ нКл и $9$ нКл находятся на расстоянии $40$ см. Где между ними $E = 0$?
5. На каком расстоянии от заряда $8$ нКл поле равно $200$ Н/Кл?
6. Сфера радиусом $5$ см несёт $1$ нКл. Найдите $E$ на поверхности, в $10$ см от центра и в $2$ см от центра.
7. Найдите ускорение протона ($m = 1{,}67 \\cdot 10^{-27}$ кг) в поле $500$ Н/Кл.
8. Какое поле удерживает частицу массой $3{,}2 \\cdot 10^{-15}$ кг с зарядом $2e$ в покое против тяжести?

### Ответы

1. $6 \\cdot 10^{-3}$ Н. 2. $1800$ Н/Кл. 3. $2 \\cdot 9 \\cdot 10^9 \\cdot \\dfrac{3 \\cdot 10^{-9}}{0{,}01} = 5400$ Н/Кл. 4. В $10$ см от заряда $1$ нКл. 5. $r^2 = \\dfrac{9 \\cdot 10^9 \\cdot 8 \\cdot 10^{-9}}{200} = 0{,}36$, $r = 60$ см. 6. $3600$ Н/Кл; $900$ Н/Кл; $0$. 7. $a = \\dfrac{1{,}6 \\cdot 10^{-19} \\cdot 500}{1{,}67 \\cdot 10^{-27}} \\approx 4{,}8 \\cdot 10^{10}$ м/с². 8. $E = \\dfrac{mg}{2e} = \\dfrac{3{,}2 \\cdot 10^{-14}}{3{,}2 \\cdot 10^{-19}} = 10^5$ Н/Кл.`,
      },
      [
        q(t("The field strength is defined as…", "Դաշտի լարվածությունը սահմանվում է որպես…", "Напряжённость поля определяется как…"), [t("F · q", "F · q", "F · q"), t("F / q", "F / q", "F / q"), t("q / F", "q / F", "q / F")], 1),
        q(t("The field of a point charge decreases with distance as…", "Կետային լիցքի դաշտը հեռավորության հետ նվազում է ինչպես…", "Поле точечного заряда убывает с расстоянием как…"), [t("1/r", "1/r", "1/r"), t("1/r²", "1/r²", "1/r²"), t("1/r³", "1/r³", "1/r³")], 1),
        q(t("Inside a uniformly charged conducting sphere the field is…", "Համասեռ լիցքավորված հաղորդիչ գնդի ներսում դաշտը…", "Внутри равномерно заряженной проводящей сферы поле…"), [t("zero", "զրո է", "равно нулю"), t("the same as at the surface", "նույնն է, ինչ մակերևույթին", "такое же, как на поверхности"), t("infinite", "անվերջ է", "бесконечно")], 0),
        q(t("Field lines…", "Ուժագծերը…", "Силовые линии…"), [t("start on negative charges", "սկսվում են բացասական լիցքերից", "начинаются на отрицательных зарядах"), t("never cross", "երբեք չեն հատվում", "никогда не пересекаются"), t("are always closed", "միշտ փակ են", "всегда замкнуты")], 1),
        q(t("The field at the midpoint between two equal positive charges is…", "Երկու հավասար դրական լիցքերի միջնակետում դաշտը…", "Поле в середине между двумя равными положительными зарядами…"), [t("zero", "զրո է", "равно нулю"), t("twice the field of one charge", "մեկ լիցքի դաշտի կրկնապատիկն է", "вдвое больше поля одного заряда"), t("directed towards one of the charges", "ուղղված է լիցքերից մեկին", "направлено к одному из зарядов")], 0),
        q(t("A negative charge in an electric field is pushed…", "Էլեկտրական դաշտում բացասական լիցքը հրվում է…", "Отрицательный заряд в электрическом поле толкает…"), [t("along the field", "դաշտի ուղղությամբ", "вдоль поля"), t("against the field", "դաշտին հակառակ", "против поля"), t("perpendicular to the field", "դաշտին ուղղահայաց", "перпендикулярно полю")], 1),
      ],
    ),
    lesson(
      "conductors-dielectrics",
      ["Conductors and dielectrics in a field", "Հաղորդիչներ և դիէլեկտրիկներ դաշտում", "Проводники и диэлектрики в электрическом поле"],
      {
        en: ["Explain why the field inside a conductor is zero and why the charge of a conductor sits on its surface; describe electrostatic shielding", "Describe the polarisation of polar and non-polar dielectrics and the meaning of the permittivity ε", "Compute the field in a dielectric as E = E₀/ε and explain the attraction of neutral bodies to charged ones"],
        hy: ["Բացատրել, թե ինչու է հաղորդչի ներսում դաշտը զրո և ինչու է հաղորդչի լիցքը նրա մակերևույթին, նկարագրել էլեկտրաստատիկ պաշտպանությունը", "Նկարագրել բևեռային և ոչ բևեռային դիէլեկտրիկների բևեռացումը և ε դիէլեկտրիկ թափանցելիության իմաստը", "Հաշվել դաշտը դիէլեկտրիկում որպես E = E₀/ε և բացատրել չեզոք մարմինների ձգվելը լիցքավորվածներին"],
        ru: ["Объяснять, почему поле внутри проводника равно нулю и почему заряд проводника находится на его поверхности; описывать электростатическую защиту", "Описывать поляризацию полярных и неполярных диэлектриков и смысл диэлектрической проницаемости ε", "Вычислять поле в диэлектрике как E = E₀/ε и объяснять притяжение нейтральных тел к заряженным"],
      },
      {
        en: `## Conductors in an electrostatic field

Conductors (metals, electrolytes) contain **free charges**: in a metal, the conduction electrons. Placed in an external field $\\vec E_0$, the free electrons shift against the field in a tiny fraction of a second, pile up on one side and leave the other side positive. These **induced charges** create their own field, which inside the conductor exactly cancels $\\vec E_0$.

> In electrostatic equilibrium the field **inside a conductor is zero**, all the excess charge is on the **surface**, and at the surface the field is perpendicular to it. The charge density is largest on sharp points.

Consequences: a hollow conductor shields its interior from external fields (**Faraday cage**): sensitive instruments and cables are enclosed in metal, a car protects its passengers from lightning. The charge given to a hollow sphere spreads over its outer surface only. Charging **by induction**: bring a charged rod near a conductor, ground the conductor, remove the ground, then the rod; the conductor keeps a charge of the opposite sign.

## Dielectrics in a field

Dielectrics (glass, plastics, oil, pure water) have no free charges. Their molecules are either **polar** (a permanent dipole, like water) or **non-polar** (the electron cloud is symmetric, like oxygen). In a field polar molecules turn along it and non-polar ones become dipoles: the dielectric is **polarised**. **Bound charges** appear on its surfaces and weaken the field inside:
$$E = \\dfrac{E_0}{\\varepsilon}.$$

> The **permittivity** $\\varepsilon$ shows how many times the field inside a dielectric is weaker than in vacuum.

| substance | $\\varepsilon$ | substance | $\\varepsilon$ |
|---|---|---|---|
| air | $1{.}0006$ | glass | $7$ |
| kerosene | $2$ | ethanol | $25$ |
| paper | $2{.}5$ | water | $81$ |

Both conductors and dielectrics are attracted to a charged body: the induced or bound charge of the opposite sign is nearer to the body, where the field is stronger, so the attraction wins over the repulsion. This is why a comb picks up bits of paper.

**Example 1.** A uniform field of $3000$ N/C fills a region; a glass slab ($\\varepsilon = 7$) is inserted. Inside the glass $E = \\dfrac{3000}{7} \\approx 430$ N/C; outside the field is unchanged.

**Example 2.** A metal plate is placed in a field of $3000$ N/C perpendicular to it. Electrons move to one face, which becomes negative, the other face becomes positive; their field inside the plate is $3000$ N/C against $\\vec E_0$, so the total field in the metal is zero. The field outside the plate is still $3000$ N/C.

**Example 3.** A charge of $5$ nC is given to a hollow metal sphere; a small ball is touched to its inner surface and taken out: the ball carries **no** charge, because all the charge sits on the outer surface (Faraday's experiment). Touching the outer surface takes some charge away.

**Example 4.** Field of a $2$ nC charge at $10$ cm: in air $E_0 = 1800$ N/C, in kerosene $E = 900$ N/C, in water $E \\approx 22$ N/C. Coulomb's force between two charges in water is $81$ times weaker, which is why salts dissociate into ions in water.

**Example 5.** The field between two plates drops from $6000$ to $1500$ N/C when a slab is inserted that fills the gap. $\\varepsilon = \\dfrac{6000}{1500} = 4$: the material could be dry paper or bakelite.

**Example 6.** A positively charged rod is brought near an insulated neutral metal ball. The near side of the ball becomes negative, the far side positive; the ball is attracted. If the ball is touched with a finger while the rod is near, electrons come from the Earth; after removing the finger and then the rod, the ball is left negative.

**Example 7.** A mobile phone wrapped in aluminium foil loses its signal: the foil is a Faraday cage, and the electric field of the radio wave cannot enter. A microwave oven's door has a metal mesh for the same reason, in the opposite direction.

**Example 8.** A lightning rod is a pointed conductor connected to the ground. Near a sharp point the surface charge density and the field are so high that the air becomes conducting; the charge of the cloud leaks away quietly, or the lightning strikes the rod and goes safely into the Earth.

### Exercises

1. A field of $5000$ N/C enters a dielectric with $\\varepsilon = 2{.}5$. Find the field inside.
2. What is the field inside a charged metal ball?
3. The force between two charges drops from $0{.}81$ N to $0{.}01$ N when they are immersed in a liquid. Find $\\varepsilon$.
4. Find the field of a $4$ nC charge at $20$ cm in glass ($\\varepsilon = 7$).
5. Where does the charge of a charged solid conductor sit?
6. Inserting a slab between plates reduces the field from $6000$ to $1500$ N/C. Find $\\varepsilon$.
7. Which molecules are polar: water or oxygen?
8. Why is it safe to sit in a car during a thunderstorm?

### Answers

1. $2000$ N/C. 2. Zero. 3. $81$, water. 4. $\\dfrac{900}{7} \\approx 130$ N/C. 5. On its surface, most densely on sharp points. 6. $4$. 7. Water. 8. The metal body is a Faraday cage: the charge flows over the outer surface and the field inside is zero.`,
        hy: `## Հաղորդիչներն էլեկտրաստատիկ դաշտում

Հաղորդիչները (մետաղներ, էլեկտրոլիտներ) պարունակում են **ազատ լիցքեր**․ մետաղում՝ հաղորդականության էլեկտրոններ։ Արտաքին $\\vec E_0$ դաշտում տեղադրվելիս ազատ էլեկտրոնները վայրկյանի չնչին մասում տեղաշարժվում են դաշտին հակառակ, կուտակվում մի կողմում և մյուս կողմը թողնում դրական։ Այս **մակածված լիցքերը** ստեղծում են իրենց դաշտը, որը հաղորդչի ներսում ճիշտ հավասարակշռում է $\\vec E_0$-ն։

> Էլեկտրաստատիկ հավասարակշռության դեպքում **հաղորդչի ներսում դաշտը զրո է**, ամբողջ ավելորդ լիցքը **մակերևույթին** է, և մակերևույթին դաշտն ուղղահայաց է նրան։ Լիցքի խտությունն ամենամեծն է սուր ծայրերում։

Հետևանքներ․ սնամեջ հաղորդիչը պաշտպանում է իր ներսն արտաքին դաշտերից (**Ֆարադեյի վանդակ**)․ զգայուն սարքերն ու մալուխները փակվում են մետաղի մեջ, մեքենան պաշտպանում է ուղևորներին կայծակից։ Սնամեջ գնդին տրված լիցքը տարածվում է միայն նրա արտաքին մակերևույթով։ Լիցքավորում **ինդուկցիայով**․ լիցքավորված ձողը մոտեցնել հաղորդչին, հաղորդիչը հողանցել, հեռացնել հողանցումը, ապա ձողը, հաղորդիչը պահում է հակառակ նշանի լիցք։

## Դիէլեկտրիկները դաշտում

Դիէլեկտրիկները (ապակի, պլաստմասսա, յուղ, մաքուր ջուր) ազատ լիցքեր չունեն։ Դրանց մոլեկուլները կամ **բևեռային** են (մշտական դիպոլ, ինչպես ջուրը), կամ **ոչ բևեռային** (էլեկտրոնային ամպը համաչափ է, ինչպես թթվածնինը)։ Դաշտում բևեռային մոլեկուլները շրջվում են նրա երկայնքով, իսկ ոչ բևեռայինները դառնում են դիպոլներ․ դիէլեկտրիկը **բևեռանում է**։ Նրա մակերևույթներին առաջանում են **կապված լիցքեր**, որոնք թուլացնում են ներսի դաշտը․
$$E = \\dfrac{E_0}{\\varepsilon}$$

> **Դիէլեկտրիկ թափանցելիությունը** $\\varepsilon$ ցույց է տալիս, թե քանի անգամ է դիէլեկտրիկի ներսում դաշտը թույլ վակուումի համեմատ։

| նյութ | $\\varepsilon$ | նյութ | $\\varepsilon$ |
|---|---|---|---|
| օդ | $1{,}0006$ | ապակի | $7$ |
| կերոսին | $2$ | էթանոլ | $25$ |
| թուղթ | $2{,}5$ | ջուր | $81$ |

Եվ հաղորդիչները, և դիէլեկտրիկները ձգվում են լիցքավորված մարմնին․ հակառակ նշանի մակածված կամ կապված լիցքն ավելի մոտ է մարմնին, որտեղ դաշտն ավելի ուժեղ է, ուստի ձգումը հաղթում է վանմանը։ Դրա համար սանրը վերցնում է թղթի կտորներ։

**Օրինակ 1։** $3000$ Ն/Կլ համասեռ դաշտը լցնում է տիրույթը, ներս է մտցվում ապակե սալ ($\\varepsilon = 7$)։ Ապակու ներսում $E = \\dfrac{3000}{7} \\approx 430$ Ն/Կլ, դրսում դաշտն անփոփոխ է։

**Օրինակ 2։** Մետաղե թիթեղը տեղադրված է $3000$ Ն/Կլ դաշտում՝ նրան ուղղահայաց։ Էլեկտրոնները շարժվում են մի երեսին, որը դառնում է բացասական, մյուս երեսը դառնում է դրական, դրանց դաշտը թիթեղի ներսում $3000$ Ն/Կլ է $\\vec E_0$-ին հակառակ, ուստի մետաղում լրիվ դաշտը զրո է։ Թիթեղից դուրս դաշտը դեռ $3000$ Ն/Կլ է։

**Օրինակ 3։** Սնամեջ մետաղե գնդին տրվում է $5$ նԿլ լիցք, փոքրիկ գնդիկը հպում են նրա ներքին մակերևույթին և հանում․ գնդիկը **ոչ մի** լիցք չի կրում, որովհետև ամբողջ լիցքն արտաքին մակերևույթին է (Ֆարադեյի փորձ)։ Արտաքին մակերևույթին հպվելը լիցքի մի մասը տանում է։

**Օրինակ 4։** $2$ նԿլ լիցքի դաշտը $10$ սմ-ում․ օդում $E_0 = 1800$ Ն/Կլ, կերոսինում $E = 900$ Ն/Կլ, ջրում $E \\approx 22$ Ն/Կլ։ Ջրում երկու լիցքերի միջև Կուլոնի ուժը $81$ անգամ թույլ է, դրա համար աղերը ջրում տրոհվում են իոնների։

**Օրինակ 5։** Երկու թիթեղների միջև դաշտը $6000$-ից իջնում է $1500$ Ն/Կլ, երբ ներս է մտցվում բացը լցնող սալ։ $\\varepsilon = \\dfrac{6000}{1500} = 4$․ նյութը կարող է լինել չոր թուղթ կամ բակելիտ։

**Օրինակ 6։** Դրական լիցքավորված ձողը մոտեցվում է մեկուսացված չեզոք մետաղե գնդիկին։ Գնդիկի մոտ կողմը դառնում է բացասական, հեռու կողմը՝ դրական, գնդիկը ձգվում է։ Եթե ձողի մոտ լինելու ժամանակ գնդիկին մատով հպվեն, էլեկտրոններ են գալիս Երկրից, մատը, ապա ձողը հեռացնելուց հետո գնդիկը մնում է բացասական։

**Օրինակ 7։** Ալյումինե փայլաթիթեղով փաթաթված բջջային հեռախոսը կորցնում է ազդանշանը․ փայլաթիթեղը Ֆարադեյի վանդակ է, և ռադիոալիքի էլեկտրական դաշտը ներս մտնել չի կարող։ Միկրոալիքային վառարանի դուռը նույն պատճառով, հակառակ ուղղությամբ, մետաղե ցանց ունի։

**Օրինակ 8։** Շանթարգելը հողին միացված սրածայր հաղորդիչ է։ Սուր ծայրի մոտ մակերևութային լիցքի խտությունն ու դաշտն այնքան մեծ են, որ օդը դառնում է հաղորդիչ, ամպի լիցքը հանգիստ արտահոսում է, կամ կայծակը հարվածում է շանթարգելին և անվտանգ անցնում Երկիր։

### Վարժություններ

1. $5000$ Ն/Կլ դաշտը մտնում է $\\varepsilon = 2{,}5$ դիէլեկտրիկ։ Գտեք դաշտը ներսում։
2. Ի՞նչ է դաշտը լիցքավորված մետաղե գնդի ներսում։
3. Երկու լիցքերի միջև ուժը $0{,}81$ Ն-ից իջնում է $0{,}01$ Ն, երբ դրանք ընկղմվում են հեղուկի մեջ։ Գտեք $\\varepsilon$-ը։
4. Գտեք $4$ նԿլ լիցքի դաշտը $20$ սմ-ում ապակու մեջ ($\\varepsilon = 7$)։
5. Որտե՞ղ է գտնվում լիցքավորված հոծ հաղորդչի լիցքը։
6. Թիթեղների միջև սալ մտցնելը դաշտը $6000$-ից իջեցնում է $1500$ Ն/Կլ։ Գտեք $\\varepsilon$-ը։
7. Ո՞ր մոլեկուլներն են բևեռային՝ ջրի՞նը, թե՞ թթվածնինը։
8. Ինչո՞ւ է անվտանգ ամպրոպի ժամանակ մեքենայում նստելը։

### Պատասխաններ

1. $2000$ Ն/Կլ։ 2. Զրո։ 3. $81$, ջուր։ 4. $\\dfrac{900}{7} \\approx 130$ Ն/Կլ։ 5. Նրա մակերևույթին, ամենախիտը՝ սուր ծայրերում։ 6. $4$։ 7. Ջրինը։ 8. Մետաղե թափքը Ֆարադեյի վանդակ է․ լիցքը հոսում է արտաքին մակերևույթով, և ներսում դաշտը զրո է։`,
        ru: `## Проводники в электростатическом поле

Проводники (металлы, электролиты) содержат **свободные заряды**: в металле — электроны проводимости. Помещённые во внешнее поле $\\vec E_0$, свободные электроны за ничтожную долю секунды смещаются против поля, скапливаются на одной стороне и оставляют другую сторону положительной. Эти **индуцированные заряды** создают собственное поле, которое внутри проводника в точности компенсирует $\\vec E_0$.

> В электростатическом равновесии поле **внутри проводника равно нулю**, весь избыточный заряд находится на **поверхности**, а у поверхности поле перпендикулярно ей. Плотность заряда наибольшая на остриях.

Следствия: полый проводник защищает своё внутреннее пространство от внешних полей (**клетка Фарадея**): чувствительные приборы и кабели заключают в металл, автомобиль защищает пассажиров от молнии. Заряд, сообщённый полой сфере, распределяется только по её внешней поверхности. Зарядка **через влияние**: поднести заряженную палочку к проводнику, заземлить проводник, убрать заземление, затем палочку; проводник сохраняет заряд противоположного знака.

## Диэлектрики в поле

Диэлектрики (стекло, пластмассы, масло, чистая вода) не имеют свободных зарядов. Их молекулы либо **полярные** (постоянный диполь, как у воды), либо **неполярные** (электронное облако симметрично, как у кислорода). В поле полярные молекулы поворачиваются вдоль него, а неполярные становятся диполями: диэлектрик **поляризуется**. На его поверхностях появляются **связанные заряды**, ослабляющие поле внутри:
$$E = \\dfrac{E_0}{\\varepsilon}.$$

> **Диэлектрическая проницаемость** $\\varepsilon$ показывает, во сколько раз поле внутри диэлектрика слабее, чем в вакууме.

| вещество | $\\varepsilon$ | вещество | $\\varepsilon$ |
|---|---|---|---|
| воздух | $1{,}0006$ | стекло | $7$ |
| керосин | $2$ | этанол | $25$ |
| бумага | $2{,}5$ | вода | $81$ |

И проводники, и диэлектрики притягиваются к заряженному телу: индуцированный или связанный заряд противоположного знака ближе к телу, где поле сильнее, поэтому притяжение побеждает отталкивание. Поэтому расчёска поднимает клочки бумаги.

**Пример 1.** Однородное поле $3000$ Н/Кл заполняет область; вносят стеклянную пластину ($\\varepsilon = 7$). Внутри стекла $E = \\dfrac{3000}{7} \\approx 430$ Н/Кл; снаружи поле не изменилось.

**Пример 2.** Металлическую пластину помещают в поле $3000$ Н/Кл перпендикулярно ему. Электроны переходят на одну грань, которая становится отрицательной, другая грань становится положительной; их поле внутри пластины равно $3000$ Н/Кл против $\\vec E_0$, так что полное поле в металле равно нулю. Поле снаружи пластины по-прежнему $3000$ Н/Кл.

**Пример 3.** Полой металлической сфере сообщают $5$ нКл; маленьким шариком касаются её внутренней поверхности и вынимают: шарик **не** несёт заряда, потому что весь заряд сидит на внешней поверхности (опыт Фарадея). Касание внешней поверхности уносит часть заряда.

**Пример 4.** Поле заряда $2$ нКл на $10$ см: в воздухе $E_0 = 1800$ Н/Кл, в керосине $E = 900$ Н/Кл, в воде $E \\approx 22$ Н/Кл. Сила Кулона между двумя зарядами в воде в $81$ раз слабее, поэтому соли в воде распадаются на ионы.

**Пример 5.** Поле между двумя пластинами падает с $6000$ до $1500$ Н/Кл, когда вставляют пластину, заполняющую зазор. $\\varepsilon = \\dfrac{6000}{1500} = 4$: материал может быть сухой бумагой или бакелитом.

**Пример 6.** Положительно заряженную палочку подносят к изолированному нейтральному металлическому шарику. Ближняя сторона шарика становится отрицательной, дальняя — положительной; шарик притягивается. Если при поднесённой палочке коснуться шарика пальцем, электроны приходят из Земли; после удаления пальца, а затем палочки шарик остаётся отрицательным.

**Пример 7.** Мобильный телефон, завёрнутый в алюминиевую фольгу, теряет сигнал: фольга — клетка Фарадея, и электрическое поле радиоволны не может проникнуть внутрь. Дверца микроволновой печи по той же причине, в обратную сторону, имеет металлическую сетку.

**Пример 8.** Молниеотвод — заострённый проводник, соединённый с землёй. Вблизи острия поверхностная плотность заряда и поле так велики, что воздух становится проводящим; заряд облака тихо стекает, или молния бьёт в молниеотвод и безопасно уходит в Землю.

### Упражнения

1. Поле $5000$ Н/Кл входит в диэлектрик с $\\varepsilon = 2{,}5$. Найдите поле внутри.
2. Каково поле внутри заряженного металлического шара?
3. Сила между двумя зарядами падает с $0{,}81$ Н до $0{,}01$ Н при погружении в жидкость. Найдите $\\varepsilon$.
4. Найдите поле заряда $4$ нКл на расстоянии $20$ см в стекле ($\\varepsilon = 7$).
5. Где находится заряд заряженного сплошного проводника?
6. Вставка пластины между пластинами уменьшает поле с $6000$ до $1500$ Н/Кл. Найдите $\\varepsilon$.
7. Какие молекулы полярны: воды или кислорода?
8. Почему безопасно сидеть в автомобиле во время грозы?

### Ответы

1. $2000$ Н/Кл. 2. Нулевое. 3. $81$, вода. 4. $\\dfrac{900}{7} \\approx 130$ Н/Кл. 5. На его поверхности, гуще всего на остриях. 6. $4$. 7. Воды. 8. Металлический кузов — клетка Фарадея: заряд стекает по внешней поверхности, а поле внутри равно нулю.`,
      },
      [
        q(t("In electrostatic equilibrium the field inside a conductor is…", "Էլեկտրաստատիկ հավասարակշռության դեպքում հաղորդչի ներսում դաշտը…", "В электростатическом равновесии поле внутри проводника…"), [t("zero", "զրո է", "равно нулю"), t("equal to the external field", "հավասար է արտաքին դաշտին", "равно внешнему полю"), t("twice the external field", "արտաքին դաշտի կրկնապատիկն է", "вдвое больше внешнего поля")], 0),
        q(t("The excess charge of a conductor sits…", "Հաղորդչի ավելորդ լիցքը գտնվում է…", "Избыточный заряд проводника находится…"), [t("at its centre", "նրա կենտրոնում", "в его центре"), t("on its surface", "նրա մակերևույթին", "на его поверхности"), t("uniformly throughout its volume", "հավասարաչափ ամբողջ ծավալում", "равномерно по всему объёму")], 1),
        q(t("A Faraday cage…", "Ֆարադեյի վանդակը…", "Клетка Фарадея…"), [t("strengthens the field inside", "ուժեղացնում է դաշտը ներսում", "усиливает поле внутри"), t("shields the interior from external fields", "պաշտպանում է ներսն արտաքին դաշտերից", "защищает внутреннее пространство от внешних полей"), t("stores charge inside", "լիցք է պահում ներսում", "хранит заряд внутри")], 1),
        q(t("Inside a dielectric with permittivity ε the field is…", "ε թափանցելիությամբ դիէլեկտրիկի ներսում դաշտը…", "Внутри диэлектрика с проницаемостью ε поле…"), [t("ε times stronger", "ε անգամ ուժեղ է", "в ε раз сильнее"), t("ε times weaker", "ε անգամ թույլ է", "в ε раз слабее"), t("zero", "զրո է", "равно нулю")], 1),
        q(t("A water molecule is…", "Ջրի մոլեկուլը…", "Молекула воды…"), [t("polar", "բևեռային է", "полярная"), t("non-polar", "ոչ բևեռային է", "неполярная"), t("a free charge", "ազատ լիցք է", "свободный заряд")], 0),
        q(t("A neutral piece of paper is attracted to a charged comb because…", "Չեզոք թղթի կտորը ձգվում է լիցքավորված սանրին, որովհետև…", "Нейтральный клочок бумаги притягивается к заряженной расчёске, потому что…"), [t("paper is a conductor", "թուղթը հաղորդիչ է", "бумага — проводник"), t("it becomes polarised and its nearer charges are attracted more strongly", "այն բևեռանում է, և նրա մոտ լիցքերն ավելի ուժեղ են ձգվում", "она поляризуется, и её ближние заряды притягиваются сильнее"), t("paper has a permanent negative charge", "թուղթը մշտական բացասական լիցք ունի", "бумага имеет постоянный отрицательный заряд")], 1),
      ],
    ),
    lesson(
      "potential",
      ["Potential and potential difference", "Պոտենցիալ և պոտենցիալների տարբերություն", "Потенциал и разность потенциалов"],
      {
        en: ["Compute the work of the electrostatic field and explain why it does not depend on the path", "Define potential and potential difference (voltage), compute the potential of a point charge and of several charges", "Relate E and U in a uniform field (E = U/d), use equipotential surfaces and the electronvolt, and find the speed of an accelerated particle"],
        hy: ["Հաշվել էլեկտրաստատիկ դաշտի աշխատանքը և բացատրել, թե ինչու այն կախված չէ ուղուց", "Սահմանել պոտենցիալը և պոտենցիալների տարբերությունը (լարում), հաշվել կետային լիցքի և մի քանի լիցքերի պոտենցիալը", "Կապել E-ն և U-ն համասեռ դաշտում (E = U/d), օգտագործել հավասարապոտենցիալ մակերևույթները և էլեկտրոնվոլտը, գտնել արագացված մասնիկի արագությունը"],
        ru: ["Вычислять работу электростатического поля и объяснять, почему она не зависит от пути", "Определять потенциал и разность потенциалов (напряжение), вычислять потенциал точечного заряда и нескольких зарядов", "Связывать E и U в однородном поле (E = U/d), использовать эквипотенциальные поверхности и электронвольт, находить скорость ускоренной частицы"],
      },
      {
        en: `## Work of the field

In a uniform field a charge $q$ moved a distance $d$ along the field lines experiences the work $A = qEd$. If the charge moves at an angle, only the displacement along the field counts. Like gravity, the electrostatic field is **potential**: its work does not depend on the path, and the work along a closed path is zero. Therefore the charge has a **potential energy** $W$ in the field, and $A = W_1 - W_2$.

## Potential

> The **potential** of a point is the potential energy of a unit positive charge placed there: $\\varphi = \\dfrac{W}{q}$. The **potential difference** (**voltage**) between two points is the work of the field per unit charge moved between them:
> $$U = \\varphi_1 - \\varphi_2 = \\dfrac{A}{q}, \\qquad A = qU.$$
> Unit: volt, $1$ V $= 1$ J/C.

The potential of a **point charge** $Q$ at distance $r$ (with $\\varphi = 0$ at infinity) is $\\varphi = k\\dfrac{Q}{r}$; it is positive for a positive charge and negative for a negative one. Potentials of several charges simply **add** as numbers, which is far easier than adding field vectors. A conductor in equilibrium has the same potential at all its points.

In a **uniform field** $A = qEd = qU$, so
$$E = \\dfrac{U}{d},$$
which is why $E$ is measured in V/m. The field points from higher to lower potential. **Equipotential surfaces** (same $\\varphi$) are perpendicular to the field lines: spheres around a point charge, planes between parallel plates; moving a charge along them costs no work.

The **electronvolt** is the energy gained by an elementary charge accelerated through $1$ V: $1$ eV $= 1{.}6 \\cdot 10^{-19}$ J. For a particle accelerated from rest, $qU = \\dfrac{mv^2}{2}$.

**Example 1.** Moving a $2$ μC charge through a voltage of $100$ V, the field does $A = 2 \\cdot 10^{-6} \\cdot 100 = 2 \\cdot 10^{-4}$ J of work, along any path between the two points.

**Example 2.** Between plates $4$ cm apart the field is $500$ V/m. $U = Ed = 500 \\cdot 0{.}04 = 20$ V. Halfway between the plates the potential is $10$ V above the lower plate.

**Example 3.** Potential of a $3$ nC charge at $30$ cm: $\\varphi = 9 \\cdot 10^9 \\cdot \\dfrac{3 \\cdot 10^{-9}}{0{.}3} = 90$ V; at $10$ cm it is $270$ V. To bring a $1$ nC charge from $30$ cm to $10$ cm against the repulsion one must do $10^{-9} \\cdot 180 = 1{.}8 \\cdot 10^{-7}$ J of work.

**Example 4.** An electron is accelerated from rest through $100$ V. Its kinetic energy is $100$ eV $= 1{.}6 \\cdot 10^{-17}$ J, and $v = \\sqrt{\\dfrac{2 \\cdot 1{.}6 \\cdot 10^{-17}}{9{.}1 \\cdot 10^{-31}}} \\approx 5{.}9 \\cdot 10^6$ m/s, two percent of the speed of light.

**Example 5.** A proton through $1000$ V gains $1$ keV $= 1{.}6 \\cdot 10^{-16}$ J; $v = \\sqrt{\\dfrac{2 \\cdot 1{.}6 \\cdot 10^{-16}}{1{.}67 \\cdot 10^{-27}}} \\approx 4{.}4 \\cdot 10^5$ m/s, much slower than the electron because it is $1840$ times heavier.

**Example 6.** Two charges $+4$ nC are $20$ cm apart. At the midpoint the field is zero but the potential is $2 \\cdot 9 \\cdot 10^9 \\cdot \\dfrac{4 \\cdot 10^{-9}}{0{.}1} = 720$ V. For charges $+4$ nC and $-4$ nC the midpoint has $\\varphi = 0$ but a strong field of $7200$ V/m: field and potential are different things.

**Example 7.** A charge is carried from $A$ to $B$ along a straight line and back along a curve. The total work is zero: the field is potential. On a metal sphere all points have the same potential, so moving a charge over its surface costs nothing.

**Example 8.** A dust particle with $q = 10^{-9}$ C and $m = 10^{-6}$ kg starts from rest at a plate and reaches the other plate; $U = 1000$ V. $\\dfrac{mv^2}{2} = qU = 10^{-6}$ J, $v = \\sqrt{\\dfrac{2 \\cdot 10^{-6}}{10^{-6}}} \\approx 1{.}4$ m/s.

### Exercises

1. Find the work of the field moving $5$ μC through $200$ V.
2. Find the voltage between plates $3$ cm apart in a field of $2000$ V/m.
3. Find the potential of a $6$ nC charge at $20$ cm.
4. An electron is accelerated through $400$ V. Find its energy in eV and in joules and its speed.
5. What voltage accelerates a proton from rest to $10^5$ m/s?
6. Find the potential at the midpoint between two $+2$ nC charges $10$ cm apart.
7. The voltage across a gap of $2$ mm is $12$ V. Find the field.
8. Express $5$ keV in joules.

### Answers

1. $10^{-3}$ J. 2. $60$ V. 3. $270$ V. 4. $400$ eV $= 6{.}4 \\cdot 10^{-17}$ J; $v \\approx 1{.}2 \\cdot 10^7$ m/s. 5. $U = \\dfrac{mv^2}{2e} = \\dfrac{1{.}67 \\cdot 10^{-27} \\cdot 10^{10}}{3{.}2 \\cdot 10^{-19}} \\approx 52$ V. 6. $720$ V. 7. $6000$ V/m. 8. $8 \\cdot 10^{-16}$ J.`,
        hy: `## Դաշտի աշխատանքը

Համասեռ դաշտում ուժագծերի երկայնքով $d$ հեռավորություն տեղափոխված $q$ լիցքի վրա կատարվում է $A = qEd$ աշխատանք։ Եթե լիցքը շարժվում է անկյան տակ, հաշվի է առնվում միայն դաշտի երկայնքով տեղափոխությունը։ Ծանրության նման էլեկտրաստատիկ դաշտը **պոտենցիալային** է․ նրա աշխատանքը կախված չէ ուղուց, և փակ ուղով աշխատանքը զրո է։ Հետևաբար լիցքը դաշտում ունի **պոտենցիալ էներգիա** $W$, և $A = W_1 - W_2$։

## Պոտենցիալ

> Կետի **պոտենցիալն** այնտեղ տեղադրված միավոր դրական լիցքի պոտենցիալ էներգիան է․ $\\varphi = \\dfrac{W}{q}$։ Երկու կետերի **պոտենցիալների տարբերությունը** (**լարումը**) դրանց միջև տեղափոխված միավոր լիցքի համար դաշտի աշխատանքն է․
> $$U = \\varphi_1 - \\varphi_2 = \\dfrac{A}{q}, \\qquad A = qU$$
> Միավորը՝ վոլտ, $1$ Վ $= 1$ Ջ/Կլ։

$Q$ **կետային լիցքի** պոտենցիալը $r$ հեռավորության վրա (անվերջությունում $\\varphi = 0$) $\\varphi = k\\dfrac{Q}{r}$ է, դրական է դրական լիցքի և բացասական՝ բացասականի համար։ Մի քանի լիցքերի պոտենցիալները պարզապես **գումարվում են** որպես թվեր, որը շատ ավելի հեշտ է, քան դաշտի վեկտորների գումարումը։ Հավասարակշռության մեջ հաղորդիչն իր բոլոր կետերում նույն պոտենցիալն ունի։

**Համասեռ դաշտում** $A = qEd = qU$, ուստի
$$E = \\dfrac{U}{d}$$
դրա համար $E$-ն չափվում է Վ/մ-ով։ Դաշտն ուղղված է բարձր պոտենցիալից ցածրին։ **Հավասարապոտենցիալ մակերևույթները** (նույն $\\varphi$) ուղղահայաց են ուժագծերին․ կետային լիցքի շուրջ՝ գնդեր, զուգահեռ թիթեղների միջև՝ հարթություններ, դրանց երկայնքով լիցք տեղափոխելն աշխատանք չի պահանջում։

**Էլեկտրոնվոլտը** $1$ Վ լարմամբ արագացված տարրական լիցքի ստացած էներգիան է․ $1$ էՎ $= 1{,}6 \\cdot 10^{-19}$ Ջ։ Հանգստից արագացված մասնիկի համար $qU = \\dfrac{mv^2}{2}$։

**Օրինակ 1։** $2$ մկԿլ լիցքը $100$ Վ լարմամբ տեղափոխելիս դաշտը կատարում է $A = 2 \\cdot 10^{-6} \\cdot 100 = 2 \\cdot 10^{-4}$ Ջ աշխատանք՝ երկու կետերի միջև ցանկացած ուղով։

**Օրինակ 2։** $4$ սմ հեռավորության վրա թիթեղների միջև դաշտը $500$ Վ/մ է։ $U = Ed = 500 \\cdot 0{,}04 = 20$ Վ։ Թիթեղների մեջտեղում պոտենցիալը ներքին թիթեղից $10$ Վ բարձր է։

**Օրինակ 3։** $3$ նԿլ լիցքի պոտենցիալը $30$ սմ-ում․ $\\varphi = 9 \\cdot 10^9 \\cdot \\dfrac{3 \\cdot 10^{-9}}{0{,}3} = 90$ Վ, $10$ սմ-ում՝ $270$ Վ։ $1$ նԿլ լիցքը $30$ սմ-ից $10$ սմ բերելու համար վանման դեմ պետք է կատարել $10^{-9} \\cdot 180 = 1{,}8 \\cdot 10^{-7}$ Ջ աշխատանք։

**Օրինակ 4։** Էլեկտրոնը հանգստից արագացվում է $100$ Վ լարմամբ։ Նրա կինետիկ էներգիան $100$ էՎ $= 1{,}6 \\cdot 10^{-17}$ Ջ է, և $v = \\sqrt{\\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-17}}{9{,}1 \\cdot 10^{-31}}} \\approx 5{,}9 \\cdot 10^6$ մ/վ՝ լույսի արագության երկու տոկոսը։

**Օրինակ 5։** Պրոտոնը $1000$ Վ լարմամբ ստանում է $1$ կէՎ $= 1{,}6 \\cdot 10^{-16}$ Ջ, $v = \\sqrt{\\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-16}}{1{,}67 \\cdot 10^{-27}}} \\approx 4{,}4 \\cdot 10^5$ մ/վ՝ էլեկտրոնից շատ դանդաղ, որովհետև $1840$ անգամ ծանր է։

**Օրինակ 6։** Երկու $+4$ նԿլ լիցքեր $20$ սմ հեռավորության վրա են։ Միջնակետում դաշտը զրո է, բայց պոտենցիալը $2 \\cdot 9 \\cdot 10^9 \\cdot \\dfrac{4 \\cdot 10^{-9}}{0{,}1} = 720$ Վ է։ $+4$ նԿլ և $-4$ նԿլ լիցքերի դեպքում միջնակետում $\\varphi = 0$, բայց ուժեղ $7200$ Վ/մ դաշտ է․ դաշտն ու պոտենցիալը տարբեր բաներ են։

**Օրինակ 7։** Լիցքը $A$-ից $B$ տեղափոխվում է ուղիղ գծով և հետ՝ կորով։ Լրիվ աշխատանքը զրո է․ դաշտը պոտենցիալային է։ Մետաղե գնդի բոլոր կետերը նույն պոտենցիալն ունեն, ուստի լիցքը նրա մակերևույթով տեղափոխելն աշխատանք չի պահանջում։

**Օրինակ 8։** $q = 10^{-9}$ Կլ և $m = 10^{-6}$ կգ փոշեհատիկը հանգստից սկսում է թիթեղից և հասնում մյուս թիթեղին, $U = 1000$ Վ։ $\\dfrac{mv^2}{2} = qU = 10^{-6}$ Ջ, $v = \\sqrt{\\dfrac{2 \\cdot 10^{-6}}{10^{-6}}} \\approx 1{,}4$ մ/վ։

### Վարժություններ

1. Գտեք դաշտի աշխատանքը $5$ մկԿլ լիցքը $200$ Վ լարմամբ տեղափոխելիս։
2. Գտեք լարումը $3$ սմ հեռավորության վրա թիթեղների միջև $2000$ Վ/մ դաշտում։
3. Գտեք $6$ նԿլ լիցքի պոտենցիալը $20$ սմ-ում։
4. Էլեկտրոնն արագացվում է $400$ Վ լարմամբ։ Գտեք նրա էներգիան էՎ-ով և ջոուլով և արագությունը։
5. Ի՞նչ լարում է պրոտոնը հանգստից արագացնում $10^5$ մ/վ արագության։
6. Գտեք պոտենցիալը $10$ սմ հեռավորության վրա երկու $+2$ նԿլ լիցքերի միջնակետում։
7. $2$ մմ բացի լարումը $12$ Վ է։ Գտեք դաշտը։
8. $5$ կէՎ-ն արտահայտեք ջոուլով։

### Պատասխաններ

1. $10^{-3}$ Ջ։ 2. $60$ Վ։ 3. $270$ Վ։ 4. $400$ էՎ $= 6{,}4 \\cdot 10^{-17}$ Ջ, $v \\approx 1{,}2 \\cdot 10^7$ մ/վ։ 5. $U = \\dfrac{mv^2}{2e} = \\dfrac{1{,}67 \\cdot 10^{-27} \\cdot 10^{10}}{3{,}2 \\cdot 10^{-19}} \\approx 52$ Վ։ 6. $720$ Վ։ 7. $6000$ Վ/մ։ 8. $8 \\cdot 10^{-16}$ Ջ։`,
        ru: `## Работа поля

В однородном поле над зарядом $q$, перемещённым на расстояние $d$ вдоль силовых линий, совершается работа $A = qEd$. Если заряд движется под углом, учитывается только перемещение вдоль поля. Как и поле тяжести, электростатическое поле **потенциально**: его работа не зависит от пути, а работа по замкнутому пути равна нулю. Поэтому заряд в поле обладает **потенциальной энергией** $W$, и $A = W_1 - W_2$.

## Потенциал

> **Потенциал** точки — потенциальная энергия помещённого в неё единичного положительного заряда: $\\varphi = \\dfrac{W}{q}$. **Разность потенциалов** (**напряжение**) между двумя точками — работа поля при перемещении между ними единичного заряда:
> $$U = \\varphi_1 - \\varphi_2 = \\dfrac{A}{q}, \\qquad A = qU.$$
> Единица: вольт, $1$ В $= 1$ Дж/Кл.

Потенциал **точечного заряда** $Q$ на расстоянии $r$ (при $\\varphi = 0$ на бесконечности) $\\varphi = k\\dfrac{Q}{r}$; он положителен для положительного заряда и отрицателен для отрицательного. Потенциалы нескольких зарядов просто **складываются** как числа, что гораздо проще сложения векторов поля. Проводник в равновесии имеет один и тот же потенциал во всех точках.

В **однородном поле** $A = qEd = qU$, поэтому
$$E = \\dfrac{U}{d},$$
отчего $E$ измеряют в В/м. Поле направлено от большего потенциала к меньшему. **Эквипотенциальные поверхности** (одинаковый $\\varphi$) перпендикулярны силовым линиям: сферы вокруг точечного заряда, плоскости между параллельными пластинами; перемещение заряда вдоль них не требует работы.

**Электронвольт** — энергия, которую приобретает элементарный заряд, ускоренный напряжением $1$ В: $1$ эВ $= 1{,}6 \\cdot 10^{-19}$ Дж. Для частицы, ускоренной из покоя, $qU = \\dfrac{mv^2}{2}$.

**Пример 1.** При перемещении заряда $2$ мкКл через напряжение $100$ В поле совершает работу $A = 2 \\cdot 10^{-6} \\cdot 100 = 2 \\cdot 10^{-4}$ Дж по любому пути между двумя точками.

**Пример 2.** Между пластинами на расстоянии $4$ см поле равно $500$ В/м. $U = Ed = 500 \\cdot 0{,}04 = 20$ В. Посередине между пластинами потенциал на $10$ В выше, чем у нижней пластины.

**Пример 3.** Потенциал заряда $3$ нКл на $30$ см: $\\varphi = 9 \\cdot 10^9 \\cdot \\dfrac{3 \\cdot 10^{-9}}{0{,}3} = 90$ В; на $10$ см он равен $270$ В. Чтобы перенести заряд $1$ нКл с $30$ см на $10$ см против отталкивания, нужно совершить работу $10^{-9} \\cdot 180 = 1{,}8 \\cdot 10^{-7}$ Дж.

**Пример 4.** Электрон ускоряется из покоя напряжением $100$ В. Его кинетическая энергия $100$ эВ $= 1{,}6 \\cdot 10^{-17}$ Дж, и $v = \\sqrt{\\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-17}}{9{,}1 \\cdot 10^{-31}}} \\approx 5{,}9 \\cdot 10^6$ м/с — два процента скорости света.

**Пример 5.** Протон, прошедший $1000$ В, получает $1$ кэВ $= 1{,}6 \\cdot 10^{-16}$ Дж; $v = \\sqrt{\\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-16}}{1{,}67 \\cdot 10^{-27}}} \\approx 4{,}4 \\cdot 10^5$ м/с, гораздо медленнее электрона, так как он в $1840$ раз тяжелее.

**Пример 6.** Два заряда $+4$ нКл находятся на расстоянии $20$ см. В середине поле равно нулю, но потенциал равен $2 \\cdot 9 \\cdot 10^9 \\cdot \\dfrac{4 \\cdot 10^{-9}}{0{,}1} = 720$ В. Для зарядов $+4$ нКл и $-4$ нКл в середине $\\varphi = 0$, но сильное поле $7200$ В/м: поле и потенциал — разные вещи.

**Пример 7.** Заряд переносят из $A$ в $B$ по прямой и обратно по кривой. Полная работа равна нулю: поле потенциально. На металлической сфере все точки имеют один потенциал, поэтому перемещение заряда по её поверхности ничего не стоит.

**Пример 8.** Пылинка с $q = 10^{-9}$ Кл и $m = 10^{-6}$ кг начинает движение из покоя у пластины и достигает другой пластины; $U = 1000$ В. $\\dfrac{mv^2}{2} = qU = 10^{-6}$ Дж, $v = \\sqrt{\\dfrac{2 \\cdot 10^{-6}}{10^{-6}}} \\approx 1{,}4$ м/с.

### Упражнения

1. Найдите работу поля при перемещении $5$ мкКл через $200$ В.
2. Найдите напряжение между пластинами на расстоянии $3$ см в поле $2000$ В/м.
3. Найдите потенциал заряда $6$ нКл на расстоянии $20$ см.
4. Электрон ускоряется напряжением $400$ В. Найдите его энергию в эВ и в джоулях и скорость.
5. Какое напряжение ускоряет протон из покоя до $10^5$ м/с?
6. Найдите потенциал в середине между двумя зарядами $+2$ нКл на расстоянии $10$ см.
7. Напряжение на зазоре $2$ мм равно $12$ В. Найдите поле.
8. Выразите $5$ кэВ в джоулях.

### Ответы

1. $10^{-3}$ Дж. 2. $60$ В. 3. $270$ В. 4. $400$ эВ $= 6{,}4 \\cdot 10^{-17}$ Дж; $v \\approx 1{,}2 \\cdot 10^7$ м/с. 5. $U = \\dfrac{mv^2}{2e} = \\dfrac{1{,}67 \\cdot 10^{-27} \\cdot 10^{10}}{3{,}2 \\cdot 10^{-19}} \\approx 52$ В. 6. $720$ В. 7. $6000$ В/м. 8. $8 \\cdot 10^{-16}$ Дж.`,
      },
      [
        q(t("The work of the electrostatic field along a closed path is…", "Էլեկտրաստատիկ դաշտի աշխատանքը փակ ուղով…", "Работа электростатического поля по замкнутому пути…"), [t("zero", "զրո է", "равна нулю"), t("qE", "qE է", "qE"), t("always positive", "միշտ դրական է", "всегда положительна")], 0),
        q(t("The potential difference equals…", "Պոտենցիալների տարբերությունը հավասար է…", "Разность потенциалов равна…"), [t("A · q", "A · q", "A · q"), t("A / q", "A / q", "A / q"), t("q / A", "q / A", "q / A")], 1),
        q(t("In a uniform field E and U are related by…", "Համասեռ դաշտում E-ն և U-ն կապված են…", "В однородном поле E и U связаны соотношением…"), [t("E = U · d", "E = U · d", "E = U · d"), t("E = U / d", "E = U / d", "E = U / d"), t("E = d / U", "E = d / U", "E = d / U")], 1),
        q(t("The potential of a point charge decreases with distance as…", "Կետային լիցքի պոտենցիալը հեռավորության հետ նվազում է ինչպես…", "Потенциал точечного заряда убывает с расстоянием как…"), [t("1/r", "1/r", "1/r"), t("1/r²", "1/r²", "1/r²"), t("r", "r", "r")], 0),
        q(t("Equipotential surfaces are…", "Հավասարապոտենցիալ մակերևույթները…", "Эквипотенциальные поверхности…"), [t("parallel to the field lines", "զուգահեռ են ուժագծերին", "параллельны силовым линиям"), t("perpendicular to the field lines", "ուղղահայաց են ուժագծերին", "перпендикулярны силовым линиям"), t("always spheres", "միշտ գնդեր են", "всегда сферы")], 1),
        q(t("1 eV equals…", "1 էՎ հավասար է…", "1 эВ равен…"), [t("1.6 · 10⁻¹⁹ J", "1,6 · 10⁻¹⁹ Ջ", "1,6 · 10⁻¹⁹ Дж"), t("1 J", "1 Ջ", "1 Дж"), t("9 · 10⁹ J", "9 · 10⁹ Ջ", "9 · 10⁹ Дж")], 0),
      ],
    ),
    lesson(
      "capacitors",
      ["Capacitance; capacitors; energy of a charged capacitor", "Ունակություն, կոնդենսատորներ, լիցքավորված կոնդենսատորի էներգիա", "Электроёмкость; конденсаторы; энергия заряженного конденсатора"],
      {
        en: ["Define capacitance C = q/U and compute the capacitance of a parallel-plate capacitor C = εε₀S/d", "Compute the energy of a charged capacitor and analyse what changes when the plates are moved or a dielectric is inserted", "Find the capacitance, charges and voltages for capacitors connected in series and in parallel"],
        hy: ["Սահմանել ունակությունը C = q/U և հաշվել հարթ կոնդենսատորի ունակությունը C = εε₀S/d", "Հաշվել լիցքավորված կոնդենսատորի էներգիան և վերլուծել, թե ինչ է փոխվում թիթեղները շարժելիս կամ դիէլեկտրիկ մտցնելիս", "Գտնել հաջորդաբար և զուգահեռ միացված կոնդենսատորների ունակությունը, լիցքերը և լարումները"],
        ru: ["Определять ёмкость C = q/U и вычислять ёмкость плоского конденсатора C = εε₀S/d", "Вычислять энергию заряженного конденсатора и анализировать, что меняется при сдвиге пластин или внесении диэлектрика", "Находить ёмкость, заряды и напряжения конденсаторов при последовательном и параллельном соединении"],
      },
      {
        en: `## Capacitance

> A **capacitor** is two conductors (plates) separated by a dielectric. Its **capacitance** is the charge of one plate per unit voltage between the plates:
> $$C = \\dfrac{q}{U}.$$
> Unit: farad, $1$ F $= 1$ C/V. Practical values: pF, nF, μF.

The capacitance depends only on the geometry and the dielectric, not on $q$ or $U$. For a **parallel-plate capacitor** with plate area $S$ and gap $d$
$$C = \\dfrac{\\varepsilon \\varepsilon_0 S}{d}, \\qquad \\varepsilon_0 = 8{.}85 \\cdot 10^{-12}\\ \\text{F/m}.$$
A larger area, a smaller gap or a dielectric with large $\\varepsilon$ increases the capacitance. The field between the plates is uniform, $E = \\dfrac{U}{d}$.

## Energy of a charged capacitor

Charging a capacitor means moving charge against a growing voltage; the work done is stored as the energy of the electric field:
$$W = \\dfrac{qU}{2} = \\dfrac{CU^2}{2} = \\dfrac{q^2}{2C}.$$
Which form to use depends on what is kept constant: $q$ when the capacitor is disconnected from the source, $U$ when it stays connected.

## Connections

| connection | capacitance | shared quantity |
|---|---|---|
| parallel | $C = C_1 + C_2$ | same $U$, charges add |
| series | $\\dfrac1C = \\dfrac1{C_1} + \\dfrac1{C_2}$ | same $q$, voltages add |

In series the voltages divide inversely to the capacitances. Capacitors store energy for camera flashes and defibrillators, smooth out voltage in power supplies, tune radio circuits and sense touch on screens.

**Example 1.** A plate carries $2$ μC when the voltage is $100$ V: $C = \\dfrac{2 \\cdot 10^{-6}}{100} = 2 \\cdot 10^{-8}$ F $= 20$ nF.

**Example 2.** Plates of area $100$ cm² $= 0{.}01$ m² at $1$ mm in air: $C = \\dfrac{8{.}85 \\cdot 10^{-12} \\cdot 0{.}01}{10^{-3}} \\approx 8{.}9 \\cdot 10^{-11}$ F $\\approx 89$ pF. With glass ($\\varepsilon = 7$) between the plates, $\\approx 620$ pF. One farad would need plates of about $100$ km² at this gap, which is why real capacitors use very thin dielectric layers and rolled foils.

**Example 3.** A $10$ μF capacitor charged to $200$ V stores $W = \\dfrac{10^{-5} \\cdot 4 \\cdot 10^4}{2} = 0{.}2$ J. Its charge is $2 \\cdot 10^{-3}$ C.

**Example 4.** $2$ μF and $3$ μF in parallel: $5$ μF. In series: $\\dfrac1C = \\dfrac12 + \\dfrac13 = \\dfrac56$, $C = 1{.}2$ μF, less than the smaller one.

**Example 5.** A $4$ μF capacitor is charged to $100$ V and **disconnected**; then the gap is doubled. The charge $q = 4 \\cdot 10^{-4}$ C stays, $C$ halves to $2$ μF, so $U = \\dfrac{q}{C} = 200$ V and the energy grows from $0{.}02$ J to $0{.}04$ J: the extra energy is the work done against the attraction of the plates.

**Example 6.** The same capacitor stays **connected** to the $100$ V source while the gap is doubled. Now $U$ is fixed, $C$ halves, the charge halves to $2 \\cdot 10^{-4}$ C and the energy halves to $0{.}01$ J; the surplus charge flows back into the source.

**Example 7.** A camera flash uses a $1000$ μF capacitor at $300$ V: $W = \\dfrac{10^{-3} \\cdot 9 \\cdot 10^4}{2} = 45$ J. Released in $1$ ms, this gives a power of $45$ kW, far more than the battery could supply directly.

**Example 8.** $6$ μF and $3$ μF in series are connected to $90$ V. $C = 2$ μF, $q = 2 \\cdot 10^{-6} \\cdot 90 = 1{.}8 \\cdot 10^{-4}$ C on each; $U_1 = \\dfrac{q}{C_1} = 30$ V, $U_2 = 60$ V. The smaller capacitor takes the larger voltage.

### Exercises

1. A capacitor holds $5 \\cdot 10^{-5}$ C at $250$ V. Find $C$.
2. Find the capacitance of plates of $0{.}02$ m² at $0{.}5$ mm with a dielectric $\\varepsilon = 2$.
3. Find the energy of a $20$ μF capacitor at $50$ V.
4. Find the capacitance of $6$ μF and $3$ μF in series and in parallel.
5. Find the charge of a $100$ pF capacitor at $12$ V.
6. A capacitor charged to $100$ V is disconnected, and a dielectric with $\\varepsilon = 4$ fills the gap. Find the new voltage and how the energy changes.
7. Find the energy of a $2000$ μF capacitor at $400$ V.
8. $4$ μF and $12$ μF in series are connected to $80$ V. Find the charge and the voltages.

### Answers

1. $0{.}2$ μF. 2. $\\dfrac{8{.}85 \\cdot 10^{-12} \\cdot 2 \\cdot 0{.}02}{5 \\cdot 10^{-4}} \\approx 7 \\cdot 10^{-10}$ F $= 0{.}7$ nF. 3. $0{.}025$ J. 4. $2$ μF; $9$ μF. 5. $1{.}2 \\cdot 10^{-9}$ C. 6. $C$ grows $4$ times, $q$ is fixed: $U = 25$ V, the energy drops to one quarter. 7. $160$ J. 8. $C = 3$ μF, $q = 2{.}4 \\cdot 10^{-4}$ C; $U_1 = 60$ V, $U_2 = 20$ V.`,
        hy: `## Ունակություն

> **Կոնդենսատորը** դիէլեկտրիկով բաժանված երկու հաղորդիչ է (թիթեղներ)։ Նրա **ունակությունը** մեկ թիթեղի լիցքն է թիթեղների միջև միավոր լարման հաշվով․
> $$C = \\dfrac{q}{U}$$
> Միավորը՝ ֆարադ, $1$ Ֆ $= 1$ Կլ/Վ։ Գործնական արժեքներ․ պՖ, նՖ, մկՖ։

Ունակությունը կախված է միայն երկրաչափությունից և դիէլեկտրիկից, ոչ $q$-ից կամ $U$-ից։ $S$ թիթեղի մակերեսով և $d$ բացով **հարթ կոնդենսատորի** համար
$$C = \\dfrac{\\varepsilon \\varepsilon_0 S}{d}, \\qquad \\varepsilon_0 = 8{,}85 \\cdot 10^{-12}\\ \\text{Ֆ/մ}$$
Մեծ մակերեսը, փոքր բացը կամ մեծ $\\varepsilon$-ով դիէլեկտրիկը մեծացնում են ունակությունը։ Թիթեղների միջև դաշտը համասեռ է, $E = \\dfrac{U}{d}$։

## Լիցքավորված կոնդենսատորի էներգիան

Կոնդենսատորը լիցքավորելը նշանակում է լիցք տեղափոխել աճող լարման դեմ, կատարված աշխատանքը պահվում է որպես էլեկտրական դաշտի էներգիա․
$$W = \\dfrac{qU}{2} = \\dfrac{CU^2}{2} = \\dfrac{q^2}{2C}$$
Որ տեսքն օգտագործել, կախված է նրանից, թե ինչ է մնում հաստատուն․ $q$-ն, երբ կոնդենսատորն անջատված է աղբյուրից, $U$-ն, երբ այն մնում է միացված։

## Միացումներ

| միացում | ունակություն | ընդհանուր մեծություն |
|---|---|---|
| զուգահեռ | $C = C_1 + C_2$ | նույն $U$, լիցքերը գումարվում են |
| հաջորդական | $\\dfrac1C = \\dfrac1{C_1} + \\dfrac1{C_2}$ | նույն $q$, լարումները գումարվում են |

Հաջորդական միացման դեպքում լարումները բաժանվում են ունակություններին հակադարձ համեմատական։ Կոնդենսատորներն էներգիա են պահում լուսանկարչական բռնկիչների և դեֆիբրիլյատորների համար, հարթեցնում են լարումը սնուցման աղբյուրներում, կարգավորում են ռադիոշղթաները և զգում են հպումն էկրաններին։

**Օրինակ 1։** Թիթեղը կրում է $2$ մկԿլ, երբ լարումը $100$ Վ է․ $C = \\dfrac{2 \\cdot 10^{-6}}{100} = 2 \\cdot 10^{-8}$ Ֆ $= 20$ նՖ։

**Օրինակ 2։** $100$ սմ² $= 0{,}01$ մ² մակերեսով թիթեղներ $1$ մմ բացով օդում․ $C = \\dfrac{8{,}85 \\cdot 10^{-12} \\cdot 0{,}01}{10^{-3}} \\approx 8{,}9 \\cdot 10^{-11}$ Ֆ $\\approx 89$ պՖ։ Թիթեղների միջև ապակով ($\\varepsilon = 7$)՝ $\\approx 620$ պՖ։ Մեկ ֆարադի համար այս բացով կպահանջվեին մոտ $100$ կմ² թիթեղներ, դրա համար իրական կոնդենսատորներն օգտագործում են շատ բարակ դիէլեկտրիկ շերտեր և փաթաթված փայլաթիթեղներ։

**Օրինակ 3։** $200$ Վ լիցքավորված $10$ մկՖ կոնդենսատորը պահում է $W = \\dfrac{10^{-5} \\cdot 4 \\cdot 10^4}{2} = 0{,}2$ Ջ։ Նրա լիցքը $2 \\cdot 10^{-3}$ Կլ է։

**Օրինակ 4։** $2$ մկՖ և $3$ մկՖ զուգահեռ․ $5$ մկՖ։ Հաջորդաբար․ $\\dfrac1C = \\dfrac12 + \\dfrac13 = \\dfrac56$, $C = 1{,}2$ մկՖ՝ փոքրից փոքր։

**Օրինակ 5։** $4$ մկՖ կոնդենսատորը լիցքավորվում է $100$ Վ և **անջատվում**, ապա բացը կրկնապատկվում է։ $q = 4 \\cdot 10^{-4}$ Կլ լիցքը մնում է, $C$-ն կիսվում է մինչև $2$ մկՖ, ուստի $U = \\dfrac{q}{C} = 200$ Վ, և էներգիան $0{,}02$ Ջ-ից աճում է $0{,}04$ Ջ․ հավելյալ էներգիան թիթեղների ձգողության դեմ կատարված աշխատանքն է։

**Օրինակ 6։** Նույն կոնդենսատորը մնում է **միացված** $100$ Վ աղբյուրին, մինչ բացը կրկնապատկվում է։ Այժմ $U$-ն հաստատուն է, $C$-ն կիսվում է, լիցքը կիսվում է մինչև $2 \\cdot 10^{-4}$ Կլ, և էներգիան կիսվում է մինչև $0{,}01$ Ջ, ավելորդ լիցքը հետ է հոսում աղբյուր։

**Օրինակ 7։** Լուսանկարչական բռնկիչն օգտագործում է $1000$ մկՖ կոնդենսատոր $300$ Վ լարմամբ․ $W = \\dfrac{10^{-3} \\cdot 9 \\cdot 10^4}{2} = 45$ Ջ։ $1$ մվ-ում արձակվելիս դա տալիս է $45$ կՎտ հզորություն՝ շատ ավելի, քան մարտկոցն ուղղակիորեն կարող էր տալ։

**Օրինակ 8։** Հաջորդաբար միացված $6$ մկՖ և $3$ մկՖ միացվում են $90$ Վ-ի։ $C = 2$ մկՖ, $q = 2 \\cdot 10^{-6} \\cdot 90 = 1{,}8 \\cdot 10^{-4}$ Կլ յուրաքանչյուրի վրա, $U_1 = \\dfrac{q}{C_1} = 30$ Վ, $U_2 = 60$ Վ։ Փոքր կոնդենսատորը վերցնում է մեծ լարումը։

### Վարժություններ

1. Կոնդենսատորը $250$ Վ լարմամբ պահում է $5 \\cdot 10^{-5}$ Կլ։ Գտեք $C$-ն։
2. Գտեք $0{,}02$ մ² թիթեղների ունակությունը $0{,}5$ մմ բացով և $\\varepsilon = 2$ դիէլեկտրիկով։
3. Գտեք $20$ մկՖ կոնդենսատորի էներգիան $50$ Վ լարմամբ։
4. Գտեք $6$ մկՖ-ի և $3$ մկՖ-ի ունակությունը հաջորդաբար և զուգահեռ միացման դեպքում։
5. Գտեք $100$ պՖ կոնդենսատորի լիցքը $12$ Վ լարմամբ։
6. $100$ Վ լիցքավորված կոնդենսատորն անջատվում է, և բացը լցվում է $\\varepsilon = 4$ դիէլեկտրիկով։ Գտեք նոր լարումը և էներգիայի փոփոխությունը։
7. Գտեք $2000$ մկՖ կոնդենսատորի էներգիան $400$ Վ լարմամբ։
8. Հաջորդաբար միացված $4$ մկՖ և $12$ մկՖ միացվում են $80$ Վ-ի։ Գտեք լիցքը և լարումները։

### Պատասխաններ

1. $0{,}2$ մկՖ։ 2. $\\dfrac{8{,}85 \\cdot 10^{-12} \\cdot 2 \\cdot 0{,}02}{5 \\cdot 10^{-4}} \\approx 7 \\cdot 10^{-10}$ Ֆ $= 0{,}7$ նՖ։ 3. $0{,}025$ Ջ։ 4. $2$ մկՖ, $9$ մկՖ։ 5. $1{,}2 \\cdot 10^{-9}$ Կլ։ 6. $C$-ն աճում է $4$ անգամ, $q$-ն հաստատուն է․ $U = 25$ Վ, էներգիան իջնում է մեկ քառորդի։ 7. $160$ Ջ։ 8. $C = 3$ մկՖ, $q = 2{,}4 \\cdot 10^{-4}$ Կլ, $U_1 = 60$ Վ, $U_2 = 20$ Վ։`,
        ru: `## Электроёмкость

> **Конденсатор** — два проводника (обкладки), разделённые диэлектриком. Его **ёмкость** — заряд одной обкладки на единицу напряжения между обкладками:
> $$C = \\dfrac{q}{U}.$$
> Единица: фарад, $1$ Ф $= 1$ Кл/В. Практические значения: пФ, нФ, мкФ.

Ёмкость зависит только от геометрии и диэлектрика, а не от $q$ или $U$. Для **плоского конденсатора** с площадью обкладок $S$ и зазором $d$
$$C = \\dfrac{\\varepsilon \\varepsilon_0 S}{d}, \\qquad \\varepsilon_0 = 8{,}85 \\cdot 10^{-12}\\ \\text{Ф/м}.$$
Большая площадь, меньший зазор или диэлектрик с большим $\\varepsilon$ увеличивают ёмкость. Поле между обкладками однородно, $E = \\dfrac{U}{d}$.

## Энергия заряженного конденсатора

Зарядить конденсатор — значит переносить заряд против растущего напряжения; совершённая работа запасается как энергия электрического поля:
$$W = \\dfrac{qU}{2} = \\dfrac{CU^2}{2} = \\dfrac{q^2}{2C}.$$
Какую форму использовать, зависит от того, что остаётся постоянным: $q$, когда конденсатор отключён от источника, $U$, когда он остаётся подключённым.

## Соединения

| соединение | ёмкость | общая величина |
|---|---|---|
| параллельное | $C = C_1 + C_2$ | одно $U$, заряды складываются |
| последовательное | $\\dfrac1C = \\dfrac1{C_1} + \\dfrac1{C_2}$ | один $q$, напряжения складываются |

При последовательном соединении напряжения делятся обратно пропорционально ёмкостям. Конденсаторы запасают энергию для фотовспышек и дефибрилляторов, сглаживают напряжение в блоках питания, настраивают радиоцепи и чувствуют касание на экранах.

**Пример 1.** Обкладка несёт $2$ мкКл при напряжении $100$ В: $C = \\dfrac{2 \\cdot 10^{-6}}{100} = 2 \\cdot 10^{-8}$ Ф $= 20$ нФ.

**Пример 2.** Обкладки площадью $100$ см² $= 0{,}01$ м² на расстоянии $1$ мм в воздухе: $C = \\dfrac{8{,}85 \\cdot 10^{-12} \\cdot 0{,}01}{10^{-3}} \\approx 8{,}9 \\cdot 10^{-11}$ Ф $\\approx 89$ пФ. Со стеклом ($\\varepsilon = 7$) между обкладками $\\approx 620$ пФ. Для одного фарада при таком зазоре нужны обкладки около $100$ км², поэтому реальные конденсаторы используют очень тонкие слои диэлектрика и свёрнутые фольги.

**Пример 3.** Конденсатор $10$ мкФ, заряженный до $200$ В, запасает $W = \\dfrac{10^{-5} \\cdot 4 \\cdot 10^4}{2} = 0{,}2$ Дж. Его заряд $2 \\cdot 10^{-3}$ Кл.

**Пример 4.** $2$ мкФ и $3$ мкФ параллельно: $5$ мкФ. Последовательно: $\\dfrac1C = \\dfrac12 + \\dfrac13 = \\dfrac56$, $C = 1{,}2$ мкФ, меньше меньшей.

**Пример 5.** Конденсатор $4$ мкФ заряжают до $100$ В и **отключают**; затем зазор удваивают. Заряд $q = 4 \\cdot 10^{-4}$ Кл сохраняется, $C$ уменьшается вдвое до $2$ мкФ, поэтому $U = \\dfrac{q}{C} = 200$ В, а энергия растёт с $0{,}02$ Дж до $0{,}04$ Дж: добавка — работа против притяжения обкладок.

**Пример 6.** Тот же конденсатор остаётся **подключённым** к источнику $100$ В, пока зазор удваивают. Теперь $U$ фиксировано, $C$ уменьшается вдвое, заряд уменьшается вдвое до $2 \\cdot 10^{-4}$ Кл и энергия уменьшается вдвое до $0{,}01$ Дж; лишний заряд уходит обратно в источник.

**Пример 7.** Фотовспышка использует конденсатор $1000$ мкФ при $300$ В: $W = \\dfrac{10^{-3} \\cdot 9 \\cdot 10^4}{2} = 45$ Дж. Выделенные за $1$ мс, они дают мощность $45$ кВт — гораздо больше, чем могла бы дать батарейка напрямую.

**Пример 8.** $6$ мкФ и $3$ мкФ последовательно подключены к $90$ В. $C = 2$ мкФ, $q = 2 \\cdot 10^{-6} \\cdot 90 = 1{,}8 \\cdot 10^{-4}$ Кл на каждом; $U_1 = \\dfrac{q}{C_1} = 30$ В, $U_2 = 60$ В. Меньший конденсатор берёт большее напряжение.

### Упражнения

1. Конденсатор удерживает $5 \\cdot 10^{-5}$ Кл при $250$ В. Найдите $C$.
2. Найдите ёмкость обкладок площадью $0{,}02$ м² на расстоянии $0{,}5$ мм с диэлектриком $\\varepsilon = 2$.
3. Найдите энергию конденсатора $20$ мкФ при $50$ В.
4. Найдите ёмкость $6$ мкФ и $3$ мкФ при последовательном и параллельном соединении.
5. Найдите заряд конденсатора $100$ пФ при $12$ В.
6. Конденсатор, заряженный до $100$ В, отключают, и зазор заполняют диэлектриком с $\\varepsilon = 4$. Найдите новое напряжение и как меняется энергия.
7. Найдите энергию конденсатора $2000$ мкФ при $400$ В.
8. $4$ мкФ и $12$ мкФ последовательно подключены к $80$ В. Найдите заряд и напряжения.

### Ответы

1. $0{,}2$ мкФ. 2. $\\dfrac{8{,}85 \\cdot 10^{-12} \\cdot 2 \\cdot 0{,}02}{5 \\cdot 10^{-4}} \\approx 7 \\cdot 10^{-10}$ Ф $= 0{,}7$ нФ. 3. $0{,}025$ Дж. 4. $2$ мкФ; $9$ мкФ. 5. $1{,}2 \\cdot 10^{-9}$ Кл. 6. $C$ растёт в $4$ раза, $q$ фиксирован: $U = 25$ В, энергия падает до четверти. 7. $160$ Дж. 8. $C = 3$ мкФ, $q = 2{,}4 \\cdot 10^{-4}$ Кл; $U_1 = 60$ В, $U_2 = 20$ В.`,
      },
      [
        q(t("Capacitance is defined as…", "Ունակությունը սահմանվում է որպես…", "Ёмкость определяется как…"), [t("q · U", "q · U", "q · U"), t("q / U", "q / U", "q / U"), t("U / q", "U / q", "U / q")], 1),
        q(t("Halving the gap of a parallel-plate capacitor makes its capacitance…", "Հարթ կոնդենսատորի բացը կիսելն ունակությունը…", "Уменьшение зазора плоского конденсатора вдвое делает его ёмкость…"), [t("twice smaller", "երկու անգամ փոքրացնում է", "вдвое меньше"), t("twice larger", "երկու անգամ մեծացնում է", "вдвое больше"), t("unchanged", "չի փոխում", "неизменной")], 1),
        q(t("The energy of a charged capacitor is…", "Լիցքավորված կոնդենսատորի էներգիան…", "Энергия заряженного конденсатора равна…"), [t("CU", "CU է", "CU"), t("CU²/2", "CU²/2 է", "CU²/2"), t("CU²", "CU² է", "CU²")], 1),
        q(t("Two capacitors of 2 μF and 3 μF in parallel have capacitance…", "Զուգահեռ միացված 2 մկՖ և 3 մկՖ կոնդենսատորների ունակությունը…", "Два конденсатора 2 мкФ и 3 мкФ параллельно имеют ёмкость…"), [t("1.2 μF", "1,2 մկՖ է", "1,2 мкФ"), t("5 μF", "5 մկՖ է", "5 мкФ"), t("6 μF", "6 մկՖ է", "6 мкФ")], 1),
        q(t("In a series connection the capacitors share…", "Հաջորդական միացման դեպքում կոնդենսատորներն ունեն ընդհանուր…", "При последовательном соединении у конденсаторов общий…"), [t("the same voltage", "լարում", "напряжение"), t("the same charge", "լիցք", "заряд"), t("the same energy", "էներգիա", "энергия")], 1),
        q(t("A disconnected charged capacitor has its gap doubled. Its voltage…", "Անջատված լիցքավորված կոնդենսատորի բացը կրկնապատկվում է։ Նրա լարումը…", "У отключённого заряженного конденсатора удваивают зазор. Его напряжение…"), [t("doubles", "կրկնապատկվում է", "удваивается"), t("halves", "կիսվում է", "уменьшается вдвое"), t("does not change", "չի փոխվում", "не меняется")], 0),
      ],
    ),
  ],
};
