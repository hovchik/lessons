import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Direct current", "Հաստատուն հոսանք", "Законы постоянного тока"),
  summary: t("Ohm's law for a complete circuit, EMF, Kirchhoff's rules basics, current in metals, electrolytes, gases, semiconductors.", "Օհմի օրենք լրիվ շղթայի համար, ԷլՇՈւ, Կիրխհոֆի կանոնների հիմունքներ, հոսանքը մետաղներում, էլեկտրոլիտներում, գազերում, կիսահաղորդիչներում։", "Закон Ома для полной цепи, ЭДС, основы правил Кирхгофа, ток в металлах, электролитах, газах, полупроводниках."),
  lessons: [
    lesson(
      "ohm-full-circuit",
      ["EMF; Ohm's law for a complete circuit", "ԷլՇՈւ, Օհմի օրենք լրիվ շղթայի համար", "ЭДС; закон Ома для полной цепи"],
      {
        en: ["Explain why a source needs outside forces and define the electromotive force ε", "Apply Ohm's law for a complete circuit I = ε/(R + r), find the terminal voltage, the short-circuit current and the internal resistance", "Analyse the power and efficiency of a source and connect cells in series and in parallel"],
        hy: ["Բացատրել, թե ինչու է աղբյուրին անհրաժեշտ կողմնակի ուժեր, և սահմանել էլեկտրաշարժ ուժը ε", "Կիրառել Օհմի օրենքը լրիվ շղթայի համար I = ε/(R + r), գտնել սեղմակների լարումը, կարճ միացման հոսանքը և ներքին դիմադրությունը", "Վերլուծել աղբյուրի հզորությունն ու ՕԳԳ-ն, միացնել տարրերը հաջորդաբար և զուգահեռ"],
        ru: ["Объяснять, зачем источнику нужны сторонние силы, и определять электродвижущую силу ε", "Применять закон Ома для полной цепи I = ε/(R + r), находить напряжение на зажимах, ток короткого замыкания и внутреннее сопротивление", "Анализировать мощность и КПД источника, соединять элементы последовательно и параллельно"],
      },
      {
        en: `## Outside forces and EMF

Electrostatic forces alone cannot keep a current flowing: they would quickly equalise the potentials. Inside a **source** (battery, generator) **outside forces** of non-electrostatic origin (chemical, magnetic) carry positive charges from the negative terminal to the positive one, against the electric field.

> The **electromotive force** (EMF) of a source is the work of the outside forces per unit charge moved through the source: $\\varepsilon = \\dfrac{A_{\\text{out}}}{q}$. Unit: volt.

The source also has an **internal resistance** $r$: the current heats the electrolyte or the winding.

## Ohm's law for a complete circuit

The work of the outside forces $\\varepsilon q$ is converted in time $t$ into heat in the external resistance $R$ and inside the source: $\\varepsilon I t = I^2 R t + I^2 r t$, hence

> $$I = \\dfrac{\\varepsilon}{R + r}.$$

The **terminal voltage** (voltage on the external circuit) is $U = IR = \\varepsilon - Ir$: smaller than the EMF by the drop inside the source. Two limiting cases: in an **open circuit** ($R \\to \\infty$) $I = 0$ and $U = \\varepsilon$, which is how a voltmeter measures the EMF; in a **short circuit** ($R = 0$) $I_{\\text{sc}} = \\dfrac{\\varepsilon}{r}$, often dangerously large.

## Power and efficiency

The source produces the total power $P = \\varepsilon I$; the useful part $P_R = I^2 R = \\dfrac{\\varepsilon^2 R}{(R + r)^2}$ is greatest when $R = r$ and then equals $\\dfrac{\\varepsilon^2}{4r}$. The efficiency is $\\eta = \\dfrac{U}{\\varepsilon} = \\dfrac{R}{R + r}$: high efficiency needs $R \\gg r$, maximum power needs $R = r$; one cannot have both.

**Cells in series**: EMFs and internal resistances add. **Identical cells in parallel**: the EMF is that of one cell, the internal resistance is divided by the number of cells.

**Example 1.** $\\varepsilon = 12$ V, $r = 1$ Ω, $R = 5$ Ω. $I = \\dfrac{12}{6} = 2$ A, $U = IR = 10$ V; the remaining $2$ V drop inside the battery.

**Example 2.** For the same battery the short-circuit current is $\\dfrac{12}{1} = 12$ A, and the open-circuit terminal voltage is $12$ V. A car battery with $r = 0{.}01$ Ω would give $1200$ A when shorted: wires melt.

**Example 3.** Finding $r$. A cell shows $1{.}5$ V on an open circuit and $1{.}2$ V when a $2$ Ω resistor is connected. $I = \\dfrac{1{.}2}{2} = 0{.}6$ A, $r = \\dfrac{\\varepsilon - U}{I} = \\dfrac{0{.}3}{0{.}6} = 0{.}5$ Ω.

**Example 4.** $\\varepsilon = 12$ V, $r = 1$ Ω. For $R = 5$ Ω: $I = 2$ A, $P_R = 20$ W, $\\eta = \\dfrac{5}{6} \\approx 83\\%$. For $R = 1$ Ω: $I = 6$ A, $P_R = 36$ W (the maximum), $\\eta = 50\\%$. For $R = 0{.}5$ Ω: $I = 8$ A, $P_R = 32$ W, $\\eta = 33\\%$.

**Example 5.** Two cells, $1{.}5$ V and $0{.}3$ Ω each, in series with a $2{.}4$ Ω lamp: $\\varepsilon = 3$ V, $r = 0{.}6$ Ω, $I = \\dfrac{3}{3} = 1$ A, $U = 2{.}4$ V.

**Example 6.** The same two cells in parallel with the same lamp: $\\varepsilon = 1{.}5$ V, $r = 0{.}15$ Ω, $I = \\dfrac{1{.}5}{2{.}55} \\approx 0{.}59$ A. Parallel connection is useful when the load resistance is small compared with $r$.

**Example 7.** $\\varepsilon = 12$ V, $r = 0{.}5$ Ω, $I = 4$ A. The external resistance is $R = \\dfrac{\\varepsilon}{I} - r = 2{.}5$ Ω, the useful power $I^2 R = 40$ W, the internal loss $I^2 r = 8$ W, the total $\\varepsilon I = 48$ W.

**Example 8.** A car battery ($\\varepsilon = 12$ V, $r = 0{.}01$ Ω) drives a starter of $0{.}05$ Ω: $I = \\dfrac{12}{0{.}06} = 200$ A, $U = 12 - 2 = 10$ V. The headlights dim while the starter runs because the terminal voltage drops.

### Exercises

1. $\\varepsilon = 9$ V, $r = 0{.}5$ Ω, $R = 4$ Ω. Find $I$ and $U$.
2. Find the short-circuit current of a source with $\\varepsilon = 4{.}5$ V and $r = 1{.}5$ Ω.
3. A source shows $6$ V when open and $5$ V with a $10$ Ω load. Find $r$.
4. $\\varepsilon = 10$ V, $r = 2$ Ω. For which $R$ is the useful power greatest, and what is it?
5. Three cells of $1{.}5$ V and $0{.}2$ Ω in series feed a $3{.}9$ Ω resistor. Find the current.
6. $\\varepsilon = 6$ V, $r = 1$ Ω, $R = 5$ Ω. Find the efficiency.
7. $\\varepsilon = 12$ V; a $3$ Ω resistor has $9$ V across it. Find $r$.
8. Why do the headlights dim when the starter is switched on?

### Answers

1. $2$ A; $8$ V. 2. $3$ A. 3. $I = 0{.}5$ A, $r = \\dfrac{1}{0{.}5} = 2$ Ω. 4. $R = 2$ Ω; $P = \\dfrac{100}{8} = 12{.}5$ W. 5. $\\varepsilon = 4{.}5$ V, $r = 0{.}6$ Ω, $I = 1$ A. 6. $\\dfrac{5}{6} \\approx 83\\%$. 7. $I = 3$ A, $r = \\dfrac{12 - 9}{3} = 1$ Ω. 8. The large starter current causes a big drop $Ir$ inside the battery, so the terminal voltage falls.`,
        hy: `## Կողմնակի ուժեր և ԷլՇՈւ

Միայն էլեկտրաստատիկ ուժերը չեն կարող պահել հոսանքը․ դրանք արագ կհավասարեցնեին պոտենցիալները։ **Աղբյուրի** (մարտկոց, գեներատոր) ներսում ոչ էլեկտրաստատիկ ծագման **կողմնակի ուժերը** (քիմիական, մագնիսական) դրական լիցքերը տանում են բացասական սեղմակից դրականին՝ էլեկտրական դաշտի դեմ։

> Աղբյուրի **էլեկտրաշարժ ուժը** (ԷլՇՈւ) կողմնակի ուժերի աշխատանքն է աղբյուրով անցկացված միավոր լիցքի համար․ $\\varepsilon = \\dfrac{A_{\\text{կողմն}}}{q}$։ Միավորը՝ վոլտ։

Աղբյուրն ունի նաև **ներքին դիմադրություն** $r$․ հոսանքը տաքացնում է էլեկտրոլիտը կամ փաթույթը։

## Օհմի օրենքը լրիվ շղթայի համար

Կողմնակի ուժերի $\\varepsilon q$ աշխատանքը $t$ ժամանակում դառնում է ջերմություն արտաքին $R$ դիմադրությունում և աղբյուրի ներսում․ $\\varepsilon I t = I^2 R t + I^2 r t$, հետևաբար

> $$I = \\dfrac{\\varepsilon}{R + r}$$

**Սեղմակների լարումը** (լարումն արտաքին շղթայի վրա) $U = IR = \\varepsilon - Ir$ է․ ԷլՇՈւ-ից փոքր աղբյուրի ներսի անկման չափով։ Երկու սահմանային դեպք․ **բաց շղթայում** ($R \\to \\infty$) $I = 0$ և $U = \\varepsilon$, այսպես է վոլտմետրը չափում ԷլՇՈւ-ն, **կարճ միացման** դեպքում ($R = 0$) $I_{\\text{կմ}} = \\dfrac{\\varepsilon}{r}$՝ հաճախ վտանգավոր մեծ։

## Հզորություն և ՕԳԳ

Աղբյուրն արտադրում է $P = \\varepsilon I$ լրիվ հզորություն, օգտակար մասը $P_R = I^2 R = \\dfrac{\\varepsilon^2 R}{(R + r)^2}$ ամենամեծն է, երբ $R = r$, և այդ դեպքում հավասար է $\\dfrac{\\varepsilon^2}{4r}$։ ՕԳԳ-ն $\\eta = \\dfrac{U}{\\varepsilon} = \\dfrac{R}{R + r}$ է․ բարձր ՕԳԳ-ն պահանջում է $R \\gg r$, առավելագույն հզորությունը՝ $R = r$, երկուսը միասին հնարավոր չէ։

**Հաջորդաբար միացված տարրեր**․ ԷլՇՈւ-ներն ու ներքին դիմադրությունները գումարվում են։ **Զուգահեռ միացված միատեսակ տարրեր**․ ԷլՇՈւ-ն մեկ տարրինն է, ներքին դիմադրությունը բաժանվում է տարրերի թվի վրա։

**Օրինակ 1։** $\\varepsilon = 12$ Վ, $r = 1$ Օմ, $R = 5$ Օմ։ $I = \\dfrac{12}{6} = 2$ Ա, $U = IR = 10$ Վ, մնացած $2$ Վ-ն ընկնում է մարտկոցի ներսում։

**Օրինակ 2։** Նույն մարտկոցի համար կարճ միացման հոսանքը $\\dfrac{12}{1} = 12$ Ա է, իսկ բաց շղթայի սեղմակների լարումը՝ $12$ Վ։ $r = 0{,}01$ Օմ մեքենայի մարտկոցը կարճ միացման դեպքում կտար $1200$ Ա․ լարերը հալվում են։

**Օրինակ 3։** $r$-ի որոշում։ Տարրը բաց շղթայում ցույց է տալիս $1{,}5$ Վ, իսկ $2$ Օմ ռեզիստոր միացնելիս՝ $1{,}2$ Վ։ $I = \\dfrac{1{,}2}{2} = 0{,}6$ Ա, $r = \\dfrac{\\varepsilon - U}{I} = \\dfrac{0{,}3}{0{,}6} = 0{,}5$ Օմ։

**Օրինակ 4։** $\\varepsilon = 12$ Վ, $r = 1$ Օմ։ $R = 5$ Օմ դեպքում․ $I = 2$ Ա, $P_R = 20$ Վտ, $\\eta = \\dfrac{5}{6} \\approx 83\\%$։ $R = 1$ Օմ դեպքում․ $I = 6$ Ա, $P_R = 36$ Վտ (առավելագույնը), $\\eta = 50\\%$։ $R = 0{,}5$ Օմ դեպքում․ $I = 8$ Ա, $P_R = 32$ Վտ, $\\eta = 33\\%$։

**Օրինակ 5։** Երկու տարր, յուրաքանչյուրը $1{,}5$ Վ և $0{,}3$ Օմ, հաջորդաբար $2{,}4$ Օմ լամպի հետ․ $\\varepsilon = 3$ Վ, $r = 0{,}6$ Օմ, $I = \\dfrac{3}{3} = 1$ Ա, $U = 2{,}4$ Վ։

**Օրինակ 6։** Նույն երկու տարրերը զուգահեռ նույն լամպի հետ․ $\\varepsilon = 1{,}5$ Վ, $r = 0{,}15$ Օմ, $I = \\dfrac{1{,}5}{2{,}55} \\approx 0{,}59$ Ա։ Զուգահեռ միացումն օգտակար է, երբ բեռի դիմադրությունը փոքր է $r$-ի համեմատ։

**Օրինակ 7։** $\\varepsilon = 12$ Վ, $r = 0{,}5$ Օմ, $I = 4$ Ա։ Արտաքին դիմադրությունը $R = \\dfrac{\\varepsilon}{I} - r = 2{,}5$ Օմ է, օգտակար հզորությունը $I^2 R = 40$ Վտ, ներքին կորուստը $I^2 r = 8$ Վտ, լրիվը՝ $\\varepsilon I = 48$ Վտ։

**Օրինակ 8։** Մեքենայի մարտկոցը ($\\varepsilon = 12$ Վ, $r = 0{,}01$ Օմ) սնում է $0{,}05$ Օմ ստարտերը․ $I = \\dfrac{12}{0{,}06} = 200$ Ա, $U = 12 - 2 = 10$ Վ։ Լուսարձակները ստարտերի աշխատելիս աղոտանում են, որովհետև սեղմակների լարումն ընկնում է։

### Վարժություններ

1. $\\varepsilon = 9$ Վ, $r = 0{,}5$ Օմ, $R = 4$ Օմ։ Գտեք $I$-ն և $U$-ն։
2. Գտեք $\\varepsilon = 4{,}5$ Վ և $r = 1{,}5$ Օմ աղբյուրի կարճ միացման հոսանքը։
3. Աղբյուրը բաց վիճակում ցույց է տալիս $6$ Վ, իսկ $10$ Օմ բեռով՝ $5$ Վ։ Գտեք $r$-ը։
4. $\\varepsilon = 10$ Վ, $r = 2$ Օմ։ Ո՞ր $R$-ի դեպքում է օգտակար հզորությունն ամենամեծը, և որքա՞ն է այն։
5. Երեք $1{,}5$ Վ և $0{,}2$ Օմ տարր հաջորդաբար սնում են $3{,}9$ Օմ ռեզիստոր։ Գտեք հոսանքը։
6. $\\varepsilon = 6$ Վ, $r = 1$ Օմ, $R = 5$ Օմ։ Գտեք ՕԳԳ-ն։
7. $\\varepsilon = 12$ Վ, $3$ Օմ ռեզիստորի վրա $9$ Վ է։ Գտեք $r$-ը։
8. Ինչո՞ւ են լուսարձակներն աղոտանում ստարտերը միացնելիս։

### Պատասխաններ

1. $2$ Ա, $8$ Վ։ 2. $3$ Ա։ 3. $I = 0{,}5$ Ա, $r = \\dfrac{1}{0{,}5} = 2$ Օմ։ 4. $R = 2$ Օմ, $P = \\dfrac{100}{8} = 12{,}5$ Վտ։ 5. $\\varepsilon = 4{,}5$ Վ, $r = 0{,}6$ Օմ, $I = 1$ Ա։ 6. $\\dfrac{5}{6} \\approx 83\\%$։ 7. $I = 3$ Ա, $r = \\dfrac{12 - 9}{3} = 1$ Օմ։ 8. Ստարտերի մեծ հոսանքը մարտկոցի ներսում առաջացնում է մեծ $Ir$ անկում, ուստի սեղմակների լարումն ընկնում է։`,
        ru: `## Сторонние силы и ЭДС

Одни электростатические силы не могут поддерживать ток: они быстро выровняли бы потенциалы. Внутри **источника** (батарея, генератор) **сторонние силы** неэлектростатического происхождения (химические, магнитные) переносят положительные заряды от отрицательного полюса к положительному против электрического поля.

> **Электродвижущая сила** (ЭДС) источника — работа сторонних сил по переносу единичного заряда через источник: $\\varepsilon = \\dfrac{A_{\\text{стор}}}{q}$. Единица: вольт.

У источника есть и **внутреннее сопротивление** $r$: ток нагревает электролит или обмотку.

## Закон Ома для полной цепи

Работа сторонних сил $\\varepsilon q$ за время $t$ превращается в теплоту во внешнем сопротивлении $R$ и внутри источника: $\\varepsilon I t = I^2 R t + I^2 r t$, откуда

> $$I = \\dfrac{\\varepsilon}{R + r}.$$

**Напряжение на зажимах** (напряжение на внешней цепи) $U = IR = \\varepsilon - Ir$: меньше ЭДС на падение внутри источника. Два предельных случая: в **разомкнутой цепи** ($R \\to \\infty$) $I = 0$ и $U = \\varepsilon$ — так вольтметр измеряет ЭДС; при **коротком замыкании** ($R = 0$) $I_{\\text{кз}} = \\dfrac{\\varepsilon}{r}$, часто опасно большой.

## Мощность и КПД

Источник развивает полную мощность $P = \\varepsilon I$; полезная часть $P_R = I^2 R = \\dfrac{\\varepsilon^2 R}{(R + r)^2}$ наибольшая при $R = r$ и равна тогда $\\dfrac{\\varepsilon^2}{4r}$. КПД $\\eta = \\dfrac{U}{\\varepsilon} = \\dfrac{R}{R + r}$: высокий КПД требует $R \\gg r$, максимальная мощность — $R = r$; получить и то и другое нельзя.

**Элементы последовательно**: ЭДС и внутренние сопротивления складываются. **Одинаковые элементы параллельно**: ЭДС — как у одного элемента, внутреннее сопротивление делится на число элементов.

**Пример 1.** $\\varepsilon = 12$ В, $r = 1$ Ом, $R = 5$ Ом. $I = \\dfrac{12}{6} = 2$ А, $U = IR = 10$ В; остальные $2$ В падают внутри батареи.

**Пример 2.** Для той же батареи ток короткого замыкания $\\dfrac{12}{1} = 12$ А, а напряжение на зажимах в разомкнутой цепи $12$ В. Автомобильный аккумулятор с $r = 0{,}01$ Ом дал бы при замыкании $1200$ А: провода плавятся.

**Пример 3.** Нахождение $r$. Элемент показывает $1{,}5$ В в разомкнутой цепи и $1{,}2$ В при подключении резистора $2$ Ом. $I = \\dfrac{1{,}2}{2} = 0{,}6$ А, $r = \\dfrac{\\varepsilon - U}{I} = \\dfrac{0{,}3}{0{,}6} = 0{,}5$ Ом.

**Пример 4.** $\\varepsilon = 12$ В, $r = 1$ Ом. При $R = 5$ Ом: $I = 2$ А, $P_R = 20$ Вт, $\\eta = \\dfrac{5}{6} \\approx 83\\%$. При $R = 1$ Ом: $I = 6$ А, $P_R = 36$ Вт (максимум), $\\eta = 50\\%$. При $R = 0{,}5$ Ом: $I = 8$ А, $P_R = 32$ Вт, $\\eta = 33\\%$.

**Пример 5.** Два элемента по $1{,}5$ В и $0{,}3$ Ом последовательно с лампой $2{,}4$ Ом: $\\varepsilon = 3$ В, $r = 0{,}6$ Ом, $I = \\dfrac{3}{3} = 1$ А, $U = 2{,}4$ В.

**Пример 6.** Те же два элемента параллельно с той же лампой: $\\varepsilon = 1{,}5$ В, $r = 0{,}15$ Ом, $I = \\dfrac{1{,}5}{2{,}55} \\approx 0{,}59$ А. Параллельное соединение полезно, когда сопротивление нагрузки мало по сравнению с $r$.

**Пример 7.** $\\varepsilon = 12$ В, $r = 0{,}5$ Ом, $I = 4$ А. Внешнее сопротивление $R = \\dfrac{\\varepsilon}{I} - r = 2{,}5$ Ом, полезная мощность $I^2 R = 40$ Вт, внутренние потери $I^2 r = 8$ Вт, полная $\\varepsilon I = 48$ Вт.

**Пример 8.** Автомобильный аккумулятор ($\\varepsilon = 12$ В, $r = 0{,}01$ Ом) питает стартер $0{,}05$ Ом: $I = \\dfrac{12}{0{,}06} = 200$ А, $U = 12 - 2 = 10$ В. Фары тускнеют, пока работает стартер, потому что напряжение на зажимах падает.

### Упражнения

1. $\\varepsilon = 9$ В, $r = 0{,}5$ Ом, $R = 4$ Ом. Найдите $I$ и $U$.
2. Найдите ток короткого замыкания источника с $\\varepsilon = 4{,}5$ В и $r = 1{,}5$ Ом.
3. Источник показывает $6$ В в разомкнутом состоянии и $5$ В с нагрузкой $10$ Ом. Найдите $r$.
4. $\\varepsilon = 10$ В, $r = 2$ Ом. При каком $R$ полезная мощность наибольшая и чему она равна?
5. Три элемента по $1{,}5$ В и $0{,}2$ Ом последовательно питают резистор $3{,}9$ Ом. Найдите ток.
6. $\\varepsilon = 6$ В, $r = 1$ Ом, $R = 5$ Ом. Найдите КПД.
7. $\\varepsilon = 12$ В; на резисторе $3$ Ом напряжение $9$ В. Найдите $r$.
8. Почему фары тускнеют при включении стартера?

### Ответы

1. $2$ А; $8$ В. 2. $3$ А. 3. $I = 0{,}5$ А, $r = \\dfrac{1}{0{,}5} = 2$ Ом. 4. $R = 2$ Ом; $P = \\dfrac{100}{8} = 12{,}5$ Вт. 5. $\\varepsilon = 4{,}5$ В, $r = 0{,}6$ Ом, $I = 1$ А. 6. $\\dfrac{5}{6} \\approx 83\\%$. 7. $I = 3$ А, $r = \\dfrac{12 - 9}{3} = 1$ Ом. 8. Большой ток стартера создаёт большое падение $Ir$ внутри аккумулятора, и напряжение на зажимах падает.`,
      },
      [
        q(t("The EMF of a source is…", "Աղբյուրի ԷլՇՈւ-ն…", "ЭДС источника — это…"), [t("the work of outside forces per unit charge", "կողմնակի ուժերի աշխատանքն է միավոր լիցքի հաշվով", "работа сторонних сил на единицу заряда"), t("the current in the circuit", "հոսանքն է շղթայում", "ток в цепи"), t("the internal resistance", "ներքին դիմադրությունն է", "внутреннее сопротивление")], 0),
        q(t("Ohm's law for a complete circuit reads…", "Օհմի օրենքը լրիվ շղթայի համար է…", "Закон Ома для полной цепи имеет вид…"), [t("I = ε/R", "I = ε/R", "I = ε/R"), t("I = ε/(R + r)", "I = ε/(R + r)", "I = ε/(R + r)"), t("I = εR", "I = εR", "I = εR")], 1),
        q(t("The terminal voltage of a source under load is…", "Բեռնված աղբյուրի սեղմակների լարումը…", "Напряжение на зажимах нагруженного источника…"), [t("greater than the EMF", "ԷլՇՈւ-ից մեծ է", "больше ЭДС"), t("equal to the EMF", "հավասար է ԷլՇՈւ-ին", "равно ЭДС"), t("less than the EMF", "ԷլՇՈւ-ից փոքր է", "меньше ЭДС")], 2),
        q(t("ε = 12 V, r = 1 Ω, R = 5 Ω. The current is…", "ε = 12 Վ, r = 1 Օմ, R = 5 Օմ։ Հոսանքը…", "ε = 12 В, r = 1 Ом, R = 5 Ом. Ток равен…"), [t("2.4 A", "2,4 Ա է", "2,4 А"), t("2 A", "2 Ա է", "2 А"), t("12 A", "12 Ա է", "12 А")], 1),
        q(t("The useful power of a source is greatest when…", "Աղբյուրի օգտակար հզորությունն ամենամեծն է, երբ…", "Полезная мощность источника наибольшая, когда…"), [t("R = r", "R = r", "R = r"), t("R = 0", "R = 0", "R = 0"), t("R is as large as possible", "R-ը հնարավորինս մեծ է", "R как можно больше")], 0),
        q(t("Two identical cells in series have…", "Հաջորդաբար միացված երկու միատեսակ տարր ունեն…", "Два одинаковых элемента последовательно имеют…"), [t("double EMF and double internal resistance", "կրկնակի ԷլՇՈւ և կրկնակի ներքին դիմադրություն", "удвоенную ЭДС и удвоенное внутреннее сопротивление"), t("the same EMF and half the internal resistance", "նույն ԷլՇՈւ և կիսով չափ ներքին դիմադրություն", "ту же ЭДС и вдвое меньшее внутреннее сопротивление"), t("double EMF and the same internal resistance", "կրկնակի ԷլՇՈւ և նույն ներքին դիմադրություն", "удвоенную ЭДС и то же внутреннее сопротивление")], 0),
      ],
    ),
    lesson(
      "circuits-analysis",
      ["Analysing circuits; measuring instruments", "Շղթաների վերլուծություն, չափիչ սարքեր", "Расчёт цепей; измерительные приборы"],
      {
        en: ["Reduce series, parallel and mixed resistor networks and find the current and voltage in every element", "Apply Kirchhoff's junction rule and loop rule to circuits with several sources", "Connect an ammeter and a voltmeter correctly and extend their ranges with a shunt and a multiplier"],
        hy: ["Պարզեցնել հաջորդական, զուգահեռ և խառը դիմադրությունների շղթաները և գտնել հոսանքն ու լարումն ամեն տարրում", "Կիրառել Կիրխհոֆի հանգույցի և կոնտուրի կանոնները մի քանի աղբյուրով շղթաներում", "Ճիշտ միացնել ամպերմետրն ու վոլտմետրը և ընդլայնել դրանց սահմանները շունտով և հավելյալ դիմադրությամբ"],
        ru: ["Сворачивать последовательные, параллельные и смешанные цепи резисторов и находить ток и напряжение на каждом элементе", "Применять правило узлов и правило контуров Кирхгофа к цепям с несколькими источниками", "Правильно включать амперметр и вольтметр и расширять их пределы шунтом и добавочным сопротивлением"],
      },
      {
        en: `## Series and parallel

| connection | current | voltage | resistance |
|---|---|---|---|
| series | the same $I$ | $U = U_1 + U_2$ | $R = R_1 + R_2$ |
| parallel | $I = I_1 + I_2$ | the same $U$ | $\\dfrac1R = \\dfrac1{R_1} + \\dfrac1{R_2}$ |

For two resistors in parallel $R = \\dfrac{R_1 R_2}{R_1 + R_2}$; $n$ equal resistors in parallel give $\\dfrac{R_1}{n}$. A mixed circuit is reduced step by step: replace each series or parallel group by one resistor, find the total current, then go back and distribute currents and voltages.

## Kirchhoff's rules

For circuits that cannot be reduced, two rules follow from charge conservation and from the potential nature of the field:

> **Junction rule.** The sum of currents entering a junction equals the sum of currents leaving it.
> **Loop rule.** Around any closed loop the sum of the EMFs equals the sum of the voltage drops $IR$ (including $Ir$ inside the sources), with signs given by the chosen direction of travel.

## Measuring instruments

An **ammeter** is connected **in series** and must have a very small resistance, so as not to change the current. A **voltmeter** is connected **in parallel** to the element and must have a very large resistance, so as to take almost no current. The ideal ammeter has $R_A = 0$, the ideal voltmeter $R_V = \\infty$.

To let an ammeter measure a current $n$ times larger than its range, a **shunt** is connected in parallel: $R_{\\text{sh}} = \\dfrac{R_A}{n - 1}$. To let a voltmeter measure a voltage $n$ times larger, a **multiplier** is connected in series: $R_{\\text{m}} = R_V (n - 1)$.

**Example 1.** Resistors $2$, $3$ and $5$ Ω in series across $20$ V: $R = 10$ Ω, $I = 2$ A, voltages $4$ V, $6$ V and $10$ V. The largest resistor takes the largest voltage.

**Example 2.** $6$ Ω and $3$ Ω in parallel across $12$ V: $R = \\dfrac{18}{9} = 2$ Ω. Currents $I_1 = \\dfrac{12}{6} = 2$ A and $I_2 = 4$ A, total $6$ A. The smaller resistor takes the larger current.

**Example 3.** A $4$ Ω resistor in series with a parallel pair $6$ Ω and $3$ Ω, source $12$ V without internal resistance. The pair is $2$ Ω, the total $6$ Ω, $I = 2$ A. Voltage on the pair $U = 2 \\cdot 2 = 4$ V, so the branches carry $\\dfrac{4}{6} \\approx 0{.}67$ A and $\\dfrac{4}{3} \\approx 1{.}33$ A; the $4$ Ω resistor has $8$ V.

**Example 4.** Currents of $3$ A and $2$ A flow into a junction and $4$ A flows out along one wire. By the junction rule the fourth wire carries $3 + 2 - 4 = 1$ A out of the junction.

**Example 5.** Two sources, $\\varepsilon_1 = 12$ V and $\\varepsilon_2 = 6$ V with $r_1 = r_2 = 0{.}5$ Ω, are connected in one loop with a $2$ Ω resistor so that they oppose each other. Loop rule: $12 - 6 = I(2 + 0{.}5 + 0{.}5)$, $I = 2$ A in the direction set by the larger EMF; the $6$ V source is being charged.

**Example 6.** An ammeter with $R_A = 0{.}1$ Ω reads up to $1$ A. To measure up to $10$ A ($n = 10$): $R_{\\text{sh}} = \\dfrac{0{.}1}{9} \\approx 0{.}011$ Ω in parallel; nine tenths of the current go through the shunt.

**Example 7.** A voltmeter with $R_V = 1000$ Ω reads up to $10$ V. To measure up to $100$ V ($n = 10$): $R_{\\text{m}} = 1000 \\cdot 9 = 9000$ Ω in series; nine tenths of the voltage fall on the multiplier.

**Example 8.** Two $10$ kΩ resistors in series are fed by $20$ V; a voltmeter with $R_V = 10$ kΩ is connected across one of them. Without the voltmeter each has $10$ V. With it, the measured resistor and the voltmeter form $5$ kΩ, the total is $15$ kΩ, $I = \\dfrac{20}{15} \\approx 1{.}33$ mA and the voltmeter reads $\\approx 6{.}7$ V instead of $10$ V. A real instrument disturbs the circuit; a good voltmeter has $R_V$ far larger than the circuit resistances.

### Exercises

1. Resistors $1$, $4$ and $5$ Ω in series across $30$ V. Find the current and the voltages.
2. $4$ Ω and $12$ Ω in parallel across $24$ V. Find the total resistance and the currents.
3. A $2$ Ω resistor in series with two $4$ Ω resistors in parallel, source $16$ V. Find all currents.
4. $5$ A enters a junction; $2$ A and $1$ A leave through two wires. Find the current in the third.
5. Sources $9$ V and $3$ V ($r = 0{.}5$ Ω each) oppose each other in a loop with a $1$ Ω resistor. Find the current.
6. An ammeter with $R_A = 0{.}2$ Ω and range $2$ A must measure up to $20$ A. Find the shunt.
7. A voltmeter with $R_V = 2$ kΩ and range $5$ V must measure up to $50$ V. Find the multiplier.
8. Why must an ammeter have a small resistance?

### Answers

1. $3$ A; $3$ V, $12$ V, $15$ V. 2. $3$ Ω; $6$ A and $2$ A. 3. Pair $2$ Ω, total $4$ Ω, $I = 4$ A, $2$ A in each branch. 4. $2$ A out. 5. $I = \\dfrac{6}{2} = 3$ A. 6. $\\dfrac{0{.}2}{9} \\approx 0{.}022$ Ω. 7. $2 \\cdot 9 = 18$ kΩ. 8. It is in series with the circuit, so its resistance would reduce the current it is meant to measure.`,
        hy: `## Հաջորդական և զուգահեռ

| միացում | հոսանք | լարում | դիմադրություն |
|---|---|---|---|
| հաջորդական | նույն $I$ | $U = U_1 + U_2$ | $R = R_1 + R_2$ |
| զուգահեռ | $I = I_1 + I_2$ | նույն $U$ | $\\dfrac1R = \\dfrac1{R_1} + \\dfrac1{R_2}$ |

Զուգահեռ երկու ռեզիստորի համար $R = \\dfrac{R_1 R_2}{R_1 + R_2}$, զուգահեռ $n$ հավասար ռեզիստոր տալիս է $\\dfrac{R_1}{n}$։ Խառը շղթան պարզեցվում է քայլ առ քայլ․ ամեն հաջորդական կամ զուգահեռ խումբը փոխարինել մեկ ռեզիստորով, գտնել լրիվ հոսանքը, ապա հետ գնալ և բաշխել հոսանքներն ու լարումները։

## Կիրխհոֆի կանոնները

Չպարզեցվող շղթաների համար լիցքի պահպանումից և դաշտի պոտենցիալային բնույթից բխում են երկու կանոն․

> **Հանգույցի կանոն։** Հանգույց մտնող հոսանքների գումարը հավասար է նրանից դուրս եկող հոսանքների գումարին։
> **Կոնտուրի կանոն։** Ցանկացած փակ կոնտուրում ԷլՇՈւ-ների գումարը հավասար է $IR$ լարման անկումների գումարին (ներառյալ աղբյուրների ներսի $Ir$-ը), նշաններն ըստ ընտրված շրջանցման ուղղության։

## Չափիչ սարքեր

**Ամպերմետրը** միացվում է **հաջորդաբար** և պետք է շատ փոքր դիմադրություն ունենա, որ հոսանքը չփոխի։ **Վոլտմետրը** միացվում է տարրին **զուգահեռ** և պետք է շատ մեծ դիմադրություն ունենա, որ համարյա հոսանք չվերցնի։ Իդեալական ամպերմետրն ունի $R_A = 0$, իդեալական վոլտմետրը՝ $R_V = \\infty$։

Որ ամպերմետրը չափի իր սահմանից $n$ անգամ մեծ հոսանք, զուգահեռ միացվում է **շունտ**․ $R_{\\text{շ}} = \\dfrac{R_A}{n - 1}$։ Որ վոլտմետրը չափի $n$ անգամ մեծ լարում, հաջորդաբար միացվում է **հավելյալ դիմադրություն**․ $R_{\\text{հ}} = R_V (n - 1)$։

**Օրինակ 1։** $2$, $3$ և $5$ Օմ ռեզիստորները հաջորդաբար $20$ Վ լարման տակ․ $R = 10$ Օմ, $I = 2$ Ա, լարումները $4$ Վ, $6$ Վ և $10$ Վ։ Մեծ ռեզիստորը վերցնում է մեծ լարումը։

**Օրինակ 2։** $6$ Օմ և $3$ Օմ զուգահեռ $12$ Վ լարման տակ․ $R = \\dfrac{18}{9} = 2$ Օմ։ Հոսանքները $I_1 = \\dfrac{12}{6} = 2$ Ա և $I_2 = 4$ Ա, ընդամենը $6$ Ա։ Փոքր ռեզիստորը վերցնում է մեծ հոսանքը։

**Օրինակ 3։** $4$ Օմ ռեզիստոր հաջորդաբար $6$ Օմ և $3$ Օմ զուգահեռ զույգի հետ, աղբյուրը $12$ Վ առանց ներքին դիմադրության։ Զույգը $2$ Օմ է, լրիվը՝ $6$ Օմ, $I = 2$ Ա։ Զույգի վրա լարումը $U = 2 \\cdot 2 = 4$ Վ, ուստի ճյուղերով հոսում է $\\dfrac{4}{6} \\approx 0{,}67$ Ա և $\\dfrac{4}{3} \\approx 1{,}33$ Ա, $4$ Օմ ռեզիստորի վրա $8$ Վ է։

**Օրինակ 4։** Հանգույց են մտնում $3$ Ա և $2$ Ա հոսանքներ, մի լարով դուրս է գալիս $4$ Ա։ Հանգույցի կանոնով չորրորդ լարով հանգույցից դուրս է գալիս $3 + 2 - 4 = 1$ Ա։

**Օրինակ 5։** Երկու աղբյուր, $\\varepsilon_1 = 12$ Վ և $\\varepsilon_2 = 6$ Վ, $r_1 = r_2 = 0{,}5$ Օմ, միացված են մեկ կոնտուրում $2$ Օմ ռեզիստորի հետ այնպես, որ հակադրվում են միմյանց։ Կոնտուրի կանոն․ $12 - 6 = I(2 + 0{,}5 + 0{,}5)$, $I = 2$ Ա մեծ ԷլՇՈւ-ի տված ուղղությամբ, $6$ Վ աղբյուրը լիցքավորվում է։

**Օրինակ 6։** $R_A = 0{,}1$ Օմ ամպերմետրը չափում է մինչև $1$ Ա։ Մինչև $10$ Ա չափելու համար ($n = 10$)․ $R_{\\text{շ}} = \\dfrac{0{,}1}{9} \\approx 0{,}011$ Օմ զուգահեռ, հոսանքի ինը տասնորդն անցնում է շունտով։

**Օրինակ 7։** $R_V = 1000$ Օմ վոլտմետրը չափում է մինչև $10$ Վ։ Մինչև $100$ Վ չափելու համար ($n = 10$)․ $R_{\\text{հ}} = 1000 \\cdot 9 = 9000$ Օմ հաջորդաբար, լարման ինը տասնորդն ընկնում է հավելյալ դիմադրության վրա։

**Օրինակ 8։** Երկու $10$ կՕմ ռեզիստոր հաջորդաբար սնվում են $20$ Վ-ով, $R_V = 10$ կՕմ վոլտմետրը միացված է դրանցից մեկին։ Առանց վոլտմետրի յուրաքանչյուրի վրա $10$ Վ է։ Վոլտմետրով չափվող ռեզիստորն ու վոլտմետրը կազմում են $5$ կՕմ, լրիվը $15$ կՕմ է, $I = \\dfrac{20}{15} \\approx 1{,}33$ մԱ, և վոլտմետրը ցույց է տալիս $\\approx 6{,}7$ Վ $10$ Վ-ի փոխարեն։ Իրական սարքը խանգարում է շղթան, լավ վոլտմետրի $R_V$-ն շղթայի դիմադրություններից շատ մեծ է։

### Վարժություններ

1. $1$, $4$ և $5$ Օմ ռեզիստորները հաջորդաբար $30$ Վ լարման տակ։ Գտեք հոսանքը և լարումները։
2. $4$ Օմ և $12$ Օմ զուգահեռ $24$ Վ լարման տակ։ Գտեք լրիվ դիմադրությունը և հոսանքները։
3. $2$ Օմ ռեզիստոր հաջորդաբար երկու զուգահեռ $4$ Օմ ռեզիստորների հետ, աղբյուրը $16$ Վ։ Գտեք բոլոր հոսանքները։
4. Հանգույց է մտնում $5$ Ա, երկու լարով դուրս է գալիս $2$ Ա և $1$ Ա։ Գտեք հոսանքն երրորդում։
5. $9$ Վ և $3$ Վ աղբյուրները (յուրաքանչյուրը $r = 0{,}5$ Օմ) հակադրվում են միմյանց $1$ Օմ ռեզիստորով կոնտուրում։ Գտեք հոսանքը։
6. $R_A = 0{,}2$ Օմ և $2$ Ա սահմանով ամպերմետրը պետք է չափի մինչև $20$ Ա։ Գտեք շունտը։
7. $R_V = 2$ կՕմ և $5$ Վ սահմանով վոլտմետրը պետք է չափի մինչև $50$ Վ։ Գտեք հավելյալ դիմադրությունը։
8. Ինչո՞ւ պետք է ամպերմետրը փոքր դիմադրություն ունենա։

### Պատասխաններ

1. $3$ Ա, $3$ Վ, $12$ Վ, $15$ Վ։ 2. $3$ Օմ, $6$ Ա և $2$ Ա։ 3. Զույգը $2$ Օմ, լրիվը $4$ Օմ, $I = 4$ Ա, ամեն ճյուղում $2$ Ա։ 4. $2$ Ա դուրս։ 5. $I = \\dfrac{6}{2} = 3$ Ա։ 6. $\\dfrac{0{,}2}{9} \\approx 0{,}022$ Օմ։ 7. $2 \\cdot 9 = 18$ կՕմ։ 8. Այն շղթայի հետ հաջորդաբար է, ուստի նրա դիմադրությունը կփոքրացներ հոսանքը, որը պետք է չափի։`,
        ru: `## Последовательное и параллельное

| соединение | ток | напряжение | сопротивление |
|---|---|---|---|
| последовательное | один $I$ | $U = U_1 + U_2$ | $R = R_1 + R_2$ |
| параллельное | $I = I_1 + I_2$ | одно $U$ | $\\dfrac1R = \\dfrac1{R_1} + \\dfrac1{R_2}$ |

Для двух резисторов параллельно $R = \\dfrac{R_1 R_2}{R_1 + R_2}$; $n$ одинаковых резисторов параллельно дают $\\dfrac{R_1}{n}$. Смешанную цепь сворачивают шаг за шагом: заменяют каждую последовательную или параллельную группу одним резистором, находят общий ток, затем возвращаются и распределяют токи и напряжения.

## Правила Кирхгофа

Для цепей, которые нельзя свернуть, из сохранения заряда и потенциальности поля следуют два правила:

> **Правило узлов.** Сумма токов, входящих в узел, равна сумме токов, выходящих из него.
> **Правило контуров.** В любом замкнутом контуре сумма ЭДС равна сумме падений напряжения $IR$ (включая $Ir$ внутри источников), со знаками по выбранному направлению обхода.

## Измерительные приборы

**Амперметр** включают **последовательно**, и он должен иметь очень малое сопротивление, чтобы не изменять ток. **Вольтметр** включают **параллельно** элементу, и он должен иметь очень большое сопротивление, чтобы почти не брать ток. Идеальный амперметр имеет $R_A = 0$, идеальный вольтметр $R_V = \\infty$.

Чтобы амперметр измерял ток в $n$ раз больше своего предела, параллельно включают **шунт**: $R_{\\text{ш}} = \\dfrac{R_A}{n - 1}$. Чтобы вольтметр измерял напряжение в $n$ раз больше, последовательно включают **добавочное сопротивление**: $R_{\\text{д}} = R_V (n - 1)$.

**Пример 1.** Резисторы $2$, $3$ и $5$ Ом последовательно под $20$ В: $R = 10$ Ом, $I = 2$ А, напряжения $4$ В, $6$ В и $10$ В. Больший резистор берёт большее напряжение.

**Пример 2.** $6$ Ом и $3$ Ом параллельно под $12$ В: $R = \\dfrac{18}{9} = 2$ Ом. Токи $I_1 = \\dfrac{12}{6} = 2$ А и $I_2 = 4$ А, всего $6$ А. Меньший резистор берёт больший ток.

**Пример 3.** Резистор $4$ Ом последовательно с параллельной парой $6$ Ом и $3$ Ом, источник $12$ В без внутреннего сопротивления. Пара — $2$ Ом, всего $6$ Ом, $I = 2$ А. Напряжение на паре $U = 2 \\cdot 2 = 4$ В, так что по ветвям идут $\\dfrac{4}{6} \\approx 0{,}67$ А и $\\dfrac{4}{3} \\approx 1{,}33$ А; на резисторе $4$ Ом — $8$ В.

**Пример 4.** В узел входят токи $3$ А и $2$ А, по одному проводу выходит $4$ А. По правилу узлов четвёртый провод уносит из узла $3 + 2 - 4 = 1$ А.

**Пример 5.** Два источника, $\\varepsilon_1 = 12$ В и $\\varepsilon_2 = 6$ В с $r_1 = r_2 = 0{,}5$ Ом, соединены в один контур с резистором $2$ Ом так, что противодействуют друг другу. Правило контуров: $12 - 6 = I(2 + 0{,}5 + 0{,}5)$, $I = 2$ А в направлении, задаваемом большей ЭДС; источник $6$ В заряжается.

**Пример 6.** Амперметр с $R_A = 0{,}1$ Ом измеряет до $1$ А. Чтобы измерять до $10$ А ($n = 10$): $R_{\\text{ш}} = \\dfrac{0{,}1}{9} \\approx 0{,}011$ Ом параллельно; девять десятых тока идут через шунт.

**Пример 7.** Вольтметр с $R_V = 1000$ Ом измеряет до $10$ В. Чтобы измерять до $100$ В ($n = 10$): $R_{\\text{д}} = 1000 \\cdot 9 = 9000$ Ом последовательно; девять десятых напряжения падают на добавочном сопротивлении.

**Пример 8.** Два резистора по $10$ кОм последовательно питаются от $20$ В; вольтметр с $R_V = 10$ кОм подключён к одному из них. Без вольтметра на каждом $10$ В. С ним измеряемый резистор и вольтметр образуют $5$ кОм, всего $15$ кОм, $I = \\dfrac{20}{15} \\approx 1{,}33$ мА, и вольтметр показывает $\\approx 6{,}7$ В вместо $10$ В. Реальный прибор возмущает цепь; у хорошего вольтметра $R_V$ много больше сопротивлений цепи.

### Упражнения

1. Резисторы $1$, $4$ и $5$ Ом последовательно под $30$ В. Найдите ток и напряжения.
2. $4$ Ом и $12$ Ом параллельно под $24$ В. Найдите общее сопротивление и токи.
3. Резистор $2$ Ом последовательно с двумя параллельными резисторами по $4$ Ом, источник $16$ В. Найдите все токи.
4. В узел входит $5$ А; по двум проводам выходят $2$ А и $1$ А. Найдите ток в третьем.
5. Источники $9$ В и $3$ В ($r = 0{,}5$ Ом каждый) противодействуют друг другу в контуре с резистором $1$ Ом. Найдите ток.
6. Амперметр с $R_A = 0{,}2$ Ом и пределом $2$ А должен измерять до $20$ А. Найдите шунт.
7. Вольтметр с $R_V = 2$ кОм и пределом $5$ В должен измерять до $50$ В. Найдите добавочное сопротивление.
8. Почему амперметр должен иметь малое сопротивление?

### Ответы

1. $3$ А; $3$ В, $12$ В, $15$ В. 2. $3$ Ом; $6$ А и $2$ А. 3. Пара $2$ Ом, всего $4$ Ом, $I = 4$ А, по $2$ А в каждой ветви. 4. $2$ А наружу. 5. $I = \\dfrac{6}{2} = 3$ А. 6. $\\dfrac{0{,}2}{9} \\approx 0{,}022$ Ом. 7. $2 \\cdot 9 = 18$ кОм. 8. Он включён последовательно с цепью, поэтому его сопротивление уменьшало бы ток, который он должен измерить.`,
      },
      [
        q(t("Resistors in parallel have…", "Զուգահեռ միացված ռեզիստորներն ունեն…", "У резисторов, соединённых параллельно,…"), [t("the same current", "նույն հոսանքը", "одинаковый ток"), t("the same voltage", "նույն լարումը", "одинаковое напряжение"), t("the same resistance", "նույն դիմադրությունը", "одинаковое сопротивление")], 1),
        q(t("6 Ω and 3 Ω in parallel give…", "Զուգահեռ 6 Օմ և 3 Օմ տալիս են…", "6 Ом и 3 Ом параллельно дают…"), [t("9 Ω", "9 Օմ", "9 Ом"), t("2 Ω", "2 Օմ", "2 Ом"), t("4.5 Ω", "4,5 Օմ", "4,5 Ом")], 1),
        q(t("The junction rule follows from…", "Հանգույցի կանոնը բխում է…", "Правило узлов следует из…"), [t("conservation of charge", "լիցքի պահպանումից", "сохранения заряда"), t("conservation of energy", "էներգիայի պահպանումից", "сохранения энергии"), t("Coulomb's law", "Կուլոնի օրենքից", "закона Кулона")], 0),
        q(t("An ammeter is connected…", "Ամպերմետրը միացվում է…", "Амперметр включают…"), [t("in series and has a small resistance", "հաջորդաբար և ունի փոքր դիմադրություն", "последовательно, и он имеет малое сопротивление"), t("in parallel and has a large resistance", "զուգահեռ և ունի մեծ դիմադրություն", "параллельно, и он имеет большое сопротивление"), t("in parallel and has a small resistance", "զուգահեռ և ունի փոքր դիմադրություն", "параллельно, и он имеет малое сопротивление")], 0),
        q(t("To extend the range of a voltmeter one connects…", "Վոլտմետրի սահմանն ընդլայնելու համար միացնում են…", "Чтобы расширить предел вольтметра, включают…"), [t("a shunt in parallel", "շունտ զուգահեռ", "шунт параллельно"), t("a multiplier in series", "հավելյալ դիմադրություն հաջորդաբար", "добавочное сопротивление последовательно"), t("a capacitor in series", "կոնդենսատոր հաջորդաբար", "конденсатор последовательно")], 1),
        q(t("An ammeter with R_A = 0.1 Ω and range 1 A must measure 10 A. The shunt is…", "R_A = 0,1 Օմ և 1 Ա սահմանով ամպերմետրը պետք է չափի 10 Ա։ Շունտը…", "Амперметр с R_A = 0,1 Ом и пределом 1 А должен измерять 10 А. Шунт равен…"), [t("0.9 Ω", "0,9 Օմ է", "0,9 Ом"), t("0.1/9 Ω", "0,1/9 Օմ է", "0,1/9 Ом"), t("1 Ω", "1 Օմ է", "1 Ом")], 1),
      ],
    ),
    lesson(
      "current-in-metals",
      ["Current in metals; superconductivity", "Հոսանքը մետաղներում, գերհաղորդականություն", "Электрический ток в металлах; сверхпроводимость"],
      {
        en: ["Describe the electron gas model of a metal and compute the drift speed of electrons from I = enSv", "Use the temperature dependence of resistance R = R₀(1 + αΔt) for conductors and resistance thermometers", "Describe superconductivity: critical temperature, properties and applications"],
        hy: ["Նկարագրել մետաղի էլեկտրոնային գազի մոդելը և հաշվել էլեկտրոնների դրեյֆի արագությունը I = enSv-ից", "Օգտագործել դիմադրության ջերմաստիճանային կախումը R = R₀(1 + αΔt) հաղորդիչների և դիմադրության ջերմաչափերի համար", "Նկարագրել գերհաղորդականությունը․ կրիտիկական ջերմաստիճան, հատկություններ և կիրառություններ"],
        ru: ["Описывать модель электронного газа в металле и вычислять скорость дрейфа электронов из I = enSv", "Использовать температурную зависимость сопротивления R = R₀(1 + αΔt) для проводников и термометров сопротивления", "Описывать сверхпроводимость: критическая температура, свойства и применения"],
      },
      {
        en: `## Electron gas

In a metal the outer electrons of the atoms are not bound to any particular atom: they form an **electron gas** moving chaotically between the positive ions of the crystal lattice at speeds of about $10^5$ m/s. The experiments of Mandelstam and Papaleksi and of Tolman and Stewart (a rapidly rotating coil braked sharply produces a current pulse) proved that the carriers in metals are **electrons**.

When a field is applied, the electrons acquire a small ordered **drift velocity** $v$ along the wire, superimposed on their chaotic motion. For a wire of cross-section $S$ with $n$ free electrons per cubic metre,
$$I = e n S v.$$
The drift speed is tiny, fractions of a millimetre per second; the lamp lights instantly because the electric field is established along the whole wire at nearly the speed of light, so electrons everywhere start drifting at once.

## Resistance and temperature

Electrons are scattered by the vibrating ions. Heating makes the vibrations stronger, so for metals the resistance grows almost linearly with temperature:
$$R = R_0 (1 + \\alpha\\,\\Delta t), \\qquad \\rho = \\rho_0 (1 + \\alpha\\,\\Delta t),$$
where $R_0$ is the resistance at $0$ °C and $\\alpha$ is the **temperature coefficient of resistance**, about $0{.}004$ K⁻¹ $\\approx \\dfrac{1}{273}$ for pure metals. This is the basis of **resistance thermometers** (platinum, $\\alpha = 0{.}0039$ K⁻¹). Alloys such as constantan have $\\alpha \\approx 0$ and are used for standard resistors.

## Superconductivity

> In 1911 Kamerlingh Onnes found that the resistance of mercury drops **to exactly zero** at $4{.}2$ K. Below its **critical temperature** $T_c$ a **superconductor** has no resistance: a current started in a ring circulates for years without a source and without heating.

Critical temperatures: mercury $4{.}2$ K, lead $7{.}2$ K, niobium-titanium alloys about $10$ K; ceramic **high-temperature superconductors** discovered in 1986 reach $90$ K to $130$ K and can be cooled with liquid nitrogen ($77$ K). Superconducting magnets are used in MRI scanners, particle accelerators and magnetic levitation trains; superconducting power lines would carry current without losses. A strong magnetic field or a large current destroys superconductivity.

**Example 1.** Copper wire, $S = 1$ mm², $I = 1$ A, $n = 8{.}5 \\cdot 10^{28}$ m⁻³. $v = \\dfrac{I}{enS} = \\dfrac{1}{1{.}6 \\cdot 10^{-19} \\cdot 8{.}5 \\cdot 10^{28} \\cdot 10^{-6}} \\approx 7 \\cdot 10^{-5}$ m/s, about $0{.}07$ mm/s. An electron needs some four hours to drift one metre.

**Example 2.** A copper wire has $10$ Ω at $20$ °C. At $120$ °C: $R = 10(1 + 0{.}004 \\cdot 100) = 14$ Ω. Motor windings and cables are rated for this growth.

**Example 3.** A tungsten lamp filament has $30$ Ω cold ($20$ °C) and works at $2500$ °C ($\\alpha = 0{.}0045$ K⁻¹): $R \\approx 30(1 + 0{.}0045 \\cdot 2480) \\approx 365$ Ω. At switch-on the current is twelve times the working current, which is why lamps usually burn out at the moment of switching on.

**Example 4.** A platinum resistance thermometer has $100$ Ω at $0$ °C and reads $139$ Ω. $\\Delta t = \\dfrac{R/R_0 - 1}{\\alpha} = \\dfrac{0{.}39}{0{.}0039} = 100$ °C: the sensor is in boiling water.

**Example 5.** A copper coil has $5$ Ω at $0$ °C and $6$ Ω in operation. Its temperature is $t = \\dfrac{6/5 - 1}{0{.}004} = 50$ °C. Measuring the resistance is a convenient way to find the temperature inside a motor.

**Example 6.** How many electrons pass through a cross-section per second at $I = 1$ A? $N = \\dfrac{It}{e} = \\dfrac{1}{1{.}6 \\cdot 10^{-19}} \\approx 6 \\cdot 10^{18}$. The charge of one coulomb is six billion billion electrons.

**Example 7.** Chaotic speed versus drift: $10^5$ m/s against $10^{-4}$ m/s, a ratio of $10^9$. The electron gas is like a swarm of fast bees drifting very slowly with the wind.

**Example 8.** A superconducting magnet coil carries $100$ A with zero resistance; the power lost to heat is $I^2 R = 0$. The same coil of copper with $R = 1$ Ω would dissipate $10$ kW and need heavy cooling; this is why MRI magnets are superconducting, kept in liquid helium.

### Exercises

1. Find the drift speed in a wire with $S = 2$ mm² at $I = 3{.}4$ A ($n = 8{.}5 \\cdot 10^{28}$ m⁻³).
2. A copper wire has $20$ Ω at $0$ °C. Find its resistance at $50$ °C.
3. The resistance of a copper wire grows from $100$ Ω to $110$ Ω. By how much did the temperature rise?
4. A platinum thermometer has $100$ Ω at $0$ °C and reads $119{.}5$ Ω ($\\alpha = 0{.}0039$ K⁻¹). Find the temperature.
5. A tungsten filament has $40$ Ω at $20$ °C and $500$ Ω when lit ($\\alpha = 0{.}0045$ K⁻¹). Estimate its temperature.
6. How many electrons pass through a cross-section per second at $0{.}16$ A?
7. Why does the resistance of a metal grow with temperature?
8. Which has the higher critical temperature: mercury, lead or a ceramic superconductor?

### Answers

1. $v = \\dfrac{3{.}4}{1{.}6 \\cdot 10^{-19} \\cdot 8{.}5 \\cdot 10^{28} \\cdot 2 \\cdot 10^{-6}} \\approx 1{.}25 \\cdot 10^{-4}$ m/s. 2. $24$ Ω. 3. $\\Delta t = \\dfrac{0{.}1}{0{.}004} = 25$ °C. 4. $50$ °C. 5. $\\Delta t = \\dfrac{500/40 - 1}{0{.}0045} \\approx 2560$ °C, so about $2580$ °C. 6. $10^{18}$. 7. The ions vibrate more strongly and scatter the electrons more often. 8. The ceramic superconductor, about $90$ K and above.`,
        hy: `## Էլեկտրոնային գազ

Մետաղում ատոմների արտաքին էլեկտրոնները կապված չեն որոշակի ատոմի․ դրանք կազմում են **էլեկտրոնային գազ**, որը բյուրեղային ցանցի դրական իոնների միջև քաոսային շարժվում է մոտ $10^5$ մ/վ արագությամբ։ Մանդելշտամի և Պապալեքսիի, Տոլմենի և Ստյուարտի փորձերը (սրընթաց պտտվող կոճը խիստ արգելակելիս հոսանքի իմպուլս է տալիս) ապացուցեցին, որ մետաղներում կրիչները **էլեկտրոններն** են։

Դաշտ կիրառելիս էլեկտրոնները ստանում են փոքր կարգավորված **դրեյֆի արագություն** $v$ լարի երկայնքով, որը գումարվում է դրանց քաոսային շարժմանը։ $S$ կտրվածքով լարի համար, որն ունի $n$ ազատ էլեկտրոն խորանարդ մետրում,
$$I = e n S v$$
Դրեյֆի արագությունը չնչին է, վայրկյանում միլիմետրի մասեր, լամպն անմիջապես է վառվում, որովհետև էլեկտրական դաշտն ամբողջ լարի երկայնքով հաստատվում է համարյա լույսի արագությամբ, ուստի էլեկտրոններն ամենուր միաժամանակ են սկսում դրեյֆել։

## Դիմադրություն և ջերմաստիճան

Էլեկտրոնները ցրվում են տատանվող իոնների վրա։ Տաքացումն ուժեղացնում է տատանումները, ուստի մետաղների դիմադրությունը ջերմաստիճանի հետ աճում է համարյա գծայնորեն․
$$R = R_0 (1 + \\alpha\\,\\Delta t), \\qquad \\rho = \\rho_0 (1 + \\alpha\\,\\Delta t)$$
որտեղ $R_0$-ն դիմադրությունն է $0$ °C-ում, իսկ $\\alpha$-ն **դիմադրության ջերմաստիճանային գործակիցն** է՝ մաքուր մետաղների համար մոտ $0{,}004$ Կ⁻¹ $\\approx \\dfrac{1}{273}$։ Սա **դիմադրության ջերմաչափերի** հիմքն է (պլատին, $\\alpha = 0{,}0039$ Կ⁻¹)։ Կոնստանտանի նման համաձուլվածքներն ունեն $\\alpha \\approx 0$ և օգտագործվում են էտալոնային ռեզիստորների համար։

## Գերհաղորդականություն

> 1911 թվականին Կամերլինգ-Օննեսը հայտնաբերեց, որ սնդիկի դիմադրությունը $4{,}2$ Կ-ում իջնում է **ճիշտ զրոյի**։ Իր **կրիտիկական ջերմաստիճանից** $T_c$ ցածր **գերհաղորդիչը** դիմադրություն չունի․ օղակում սկսված հոսանքը տարիներով շրջանառում է առանց աղբյուրի և առանց տաքանալու։

Կրիտիկական ջերմաստիճաններ․ սնդիկ $4{,}2$ Կ, կապար $7{,}2$ Կ, նիոբիում-տիտանի համաձուլվածքներ՝ մոտ $10$ Կ, 1986 թվականին հայտնաբերված կերամիկական **բարձրջերմաստիճանային գերհաղորդիչները** հասնում են $90$ Կ-ից $130$ Կ և կարելի է սառեցնել հեղուկ ազոտով ($77$ Կ)։ Գերհաղորդիչ մագնիսներն օգտագործվում են ՄՌՏ սկաներներում, մասնիկների արագացուցիչներում և մագնիսական լևիտացիայի գնացքներում, գերհաղորդիչ հոսանքագծերը հոսանք կփոխանցեին առանց կորուստների։ Ուժեղ մագնիսական դաշտը կամ մեծ հոսանքը քանդում է գերհաղորդականությունը։

**Օրինակ 1։** Պղնձե լար, $S = 1$ մմ², $I = 1$ Ա, $n = 8{,}5 \\cdot 10^{28}$ մ⁻³։ $v = \\dfrac{I}{enS} = \\dfrac{1}{1{,}6 \\cdot 10^{-19} \\cdot 8{,}5 \\cdot 10^{28} \\cdot 10^{-6}} \\approx 7 \\cdot 10^{-5}$ մ/վ՝ մոտ $0{,}07$ մմ/վ։ Էլեկտրոնին մեկ մետր դրեյֆելու համար մոտ չորս ժամ է պետք։

**Օրինակ 2։** Պղնձե լարն ունի $10$ Օմ $20$ °C-ում։ $120$ °C-ում․ $R = 10(1 + 0{,}004 \\cdot 100) = 14$ Օմ։ Շարժիչների փաթույթներն ու մալուխները հաշվարկված են այս աճի համար։

**Օրինակ 3։** Վոլֆրամե լամպի թելիկն ունի $30$ Օմ սառը վիճակում ($20$ °C) և աշխատում է $2500$ °C-ում ($\\alpha = 0{,}0045$ Կ⁻¹)․ $R \\approx 30(1 + 0{,}0045 \\cdot 2480) \\approx 365$ Օմ։ Միացնելու պահին հոսանքն աշխատանքայինի տասներկուապատիկն է, դրա համար լամպերը սովորաբար այրվում են միացնելու պահին։

**Օրինակ 4։** Պլատինե դիմադրության ջերմաչափն ունի $100$ Օմ $0$ °C-ում և ցույց է տալիս $139$ Օմ։ $\\Delta t = \\dfrac{R/R_0 - 1}{\\alpha} = \\dfrac{0{,}39}{0{,}0039} = 100$ °C է․ սենսորն եռացող ջրի մեջ է։

**Օրինակ 5։** Պղնձե կոճն ունի $5$ Օմ $0$ °C-ում և $6$ Օմ աշխատելիս։ Նրա ջերմաստիճանը $t = \\dfrac{6/5 - 1}{0{,}004} = 50$ °C է։ Դիմադրության չափումը շարժիչի ներսի ջերմաստիճանը գտնելու հարմար եղանակ է։

**Օրինակ 6։** Քանի՞ էլեկտրոն է անցնում կտրվածքով վայրկյանում $I = 1$ Ա դեպքում։ $N = \\dfrac{It}{e} = \\dfrac{1}{1{,}6 \\cdot 10^{-19}} \\approx 6 \\cdot 10^{18}$։ Մեկ կուլոն լիցքը վեց միլիարդ միլիարդ էլեկտրոն է։

**Օրինակ 7։** Քաոսային արագությունն ընդդեմ դրեյֆի․ $10^5$ մ/վ ընդդեմ $10^{-4}$ մ/վ, հարաբերությունը $10^9$։ Էլեկտրոնային գազն արագ մեղուների պարսի նման է, որը քամու հետ շատ դանդաղ է տարվում։

**Օրինակ 8։** Գերհաղորդիչ մագնիսի կոճով անցնում է $100$ Ա զրո դիմադրությամբ, ջերմության կորուստը $I^2 R = 0$ է։ Նույն կոճը պղնձից $R = 1$ Օմ դիմադրությամբ կարձակեր $10$ կՎտ և կպահանջեր ուժեղ հովացում, դրա համար ՄՌՏ մագնիսները գերհաղորդիչ են՝ պահված հեղուկ հելիումի մեջ։

### Վարժություններ

1. Գտեք դրեյֆի արագությունը $S = 2$ մմ² լարում $I = 3{,}4$ Ա դեպքում ($n = 8{,}5 \\cdot 10^{28}$ մ⁻³)։
2. Պղնձե լարն ունի $20$ Օմ $0$ °C-ում։ Գտեք դիմադրությունը $50$ °C-ում։
3. Պղնձե լարի դիմադրությունն աճում է $100$ Օմ-ից $110$ Օմ։ Որքա՞ն է բարձրացել ջերմաստիճանը։
4. Պլատինե ջերմաչափն ունի $100$ Օմ $0$ °C-ում և ցույց է տալիս $119{,}5$ Օմ ($\\alpha = 0{,}0039$ Կ⁻¹)։ Գտեք ջերմաստիճանը։
5. Վոլֆրամե թելիկն ունի $40$ Օմ $20$ °C-ում և $500$ Օմ վառված վիճակում ($\\alpha = 0{,}0045$ Կ⁻¹)։ Գնահատեք նրա ջերմաստիճանը։
6. Քանի՞ էլեկտրոն է անցնում կտրվածքով վայրկյանում $0{,}16$ Ա դեպքում։
7. Ինչո՞ւ է մետաղի դիմադրությունն աճում ջերմաստիճանի հետ։
8. Ո՞րն ունի ավելի բարձր կրիտիկական ջերմաստիճան՝ սնդիկը, կապարը, թե՞ կերամիկական գերհաղորդիչը։

### Պատասխաններ

1. $v = \\dfrac{3{,}4}{1{,}6 \\cdot 10^{-19} \\cdot 8{,}5 \\cdot 10^{28} \\cdot 2 \\cdot 10^{-6}} \\approx 1{,}25 \\cdot 10^{-4}$ մ/վ։ 2. $24$ Օմ։ 3. $\\Delta t = \\dfrac{0{,}1}{0{,}004} = 25$ °C-ով։ 4. $50$ °C է։ 5. $\\Delta t = \\dfrac{500/40 - 1}{0{,}0045} \\approx 2560$ °C, ուստի մոտ $2580$ °C է։ 6. $10^{18}$։ 7. Իոններն ավելի ուժեղ են տատանվում և ավելի հաճախ ցրում էլեկտրոնները։ 8. Կերամիկական գերհաղորդիչը՝ մոտ $90$ Կ և ավելի։`,
        ru: `## Электронный газ

В металле внешние электроны атомов не связаны с конкретным атомом: они образуют **электронный газ**, хаотически движущийся между положительными ионами кристаллической решётки со скоростями около $10^5$ м/с. Опыты Мандельштама и Папалекси, Толмена и Стюарта (резко заторможенная быстро вращающаяся катушка даёт импульс тока) доказали, что носители в металлах — **электроны**.

При наложении поля электроны приобретают малую упорядоченную **скорость дрейфа** $v$ вдоль провода, наложенную на хаотическое движение. Для провода сечением $S$ с $n$ свободными электронами в кубическом метре
$$I = e n S v.$$
Скорость дрейфа ничтожна, доли миллиметра в секунду; лампа загорается мгновенно, потому что электрическое поле устанавливается вдоль всего провода почти со скоростью света, и электроны везде начинают дрейфовать одновременно.

## Сопротивление и температура

Электроны рассеиваются на колеблющихся ионах. Нагревание усиливает колебания, поэтому у металлов сопротивление растёт почти линейно с температурой:
$$R = R_0 (1 + \\alpha\\,\\Delta t), \\qquad \\rho = \\rho_0 (1 + \\alpha\\,\\Delta t),$$
где $R_0$ — сопротивление при $0$ °C, а $\\alpha$ — **температурный коэффициент сопротивления**, около $0{,}004$ К⁻¹ $\\approx \\dfrac{1}{273}$ для чистых металлов. На этом основаны **термометры сопротивления** (платина, $\\alpha = 0{,}0039$ К⁻¹). Сплавы вроде константана имеют $\\alpha \\approx 0$ и используются для эталонных резисторов.

## Сверхпроводимость

> В 1911 году Камерлинг-Оннес обнаружил, что сопротивление ртути падает **точно до нуля** при $4{,}2$ К. Ниже своей **критической температуры** $T_c$ **сверхпроводник** не имеет сопротивления: ток, запущенный в кольце, циркулирует годами без источника и без нагрева.

Критические температуры: ртуть $4{,}2$ К, свинец $7{,}2$ К, сплавы ниобий-титан около $10$ К; керамические **высокотемпературные сверхпроводники**, открытые в 1986 году, достигают $90$ К — $130$ К и могут охлаждаться жидким азотом ($77$ К). Сверхпроводящие магниты используются в МРТ-томографах, ускорителях частиц и поездах на магнитной подушке; сверхпроводящие линии электропередачи переносили бы ток без потерь. Сильное магнитное поле или большой ток разрушают сверхпроводимость.

**Пример 1.** Медный провод, $S = 1$ мм², $I = 1$ А, $n = 8{,}5 \\cdot 10^{28}$ м⁻³. $v = \\dfrac{I}{enS} = \\dfrac{1}{1{,}6 \\cdot 10^{-19} \\cdot 8{,}5 \\cdot 10^{28} \\cdot 10^{-6}} \\approx 7 \\cdot 10^{-5}$ м/с, около $0{,}07$ мм/с. Электрону нужно около четырёх часов, чтобы продрейфовать один метр.

**Пример 2.** Медный провод имеет $10$ Ом при $20$ °C. При $120$ °C: $R = 10(1 + 0{,}004 \\cdot 100) = 14$ Ом. Обмотки двигателей и кабели рассчитывают на этот рост.

**Пример 3.** Вольфрамовая нить лампы имеет $30$ Ом в холодном состоянии ($20$ °C) и работает при $2500$ °C ($\\alpha = 0{,}0045$ К⁻¹): $R \\approx 30(1 + 0{,}0045 \\cdot 2480) \\approx 365$ Ом. При включении ток в двенадцать раз больше рабочего, поэтому лампы обычно перегорают в момент включения.

**Пример 4.** Платиновый термометр сопротивления имеет $100$ Ом при $0$ °C и показывает $139$ Ом. $\\Delta t = \\dfrac{R/R_0 - 1}{\\alpha} = \\dfrac{0{,}39}{0{,}0039} = 100$ °C: датчик в кипящей воде.

**Пример 5.** Медная катушка имеет $5$ Ом при $0$ °C и $6$ Ом в работе. Её температура $t = \\dfrac{6/5 - 1}{0{,}004} = 50$ °C. Измерение сопротивления — удобный способ узнать температуру внутри двигателя.

**Пример 6.** Сколько электронов проходит через сечение за секунду при $I = 1$ А? $N = \\dfrac{It}{e} = \\dfrac{1}{1{,}6 \\cdot 10^{-19}} \\approx 6 \\cdot 10^{18}$. Заряд в один кулон — шесть миллиардов миллиардов электронов.

**Пример 7.** Хаотическая скорость против дрейфа: $10^5$ м/с против $10^{-4}$ м/с, отношение $10^9$. Электронный газ похож на рой быстрых пчёл, очень медленно сносимый ветром.

**Пример 8.** Катушка сверхпроводящего магнита несёт $100$ А при нулевом сопротивлении; мощность тепловых потерь $I^2 R = 0$. Та же катушка из меди с $R = 1$ Ом рассеивала бы $10$ кВт и требовала мощного охлаждения; поэтому магниты МРТ сверхпроводящие и хранятся в жидком гелии.

### Упражнения

1. Найдите скорость дрейфа в проводе с $S = 2$ мм² при $I = 3{,}4$ А ($n = 8{,}5 \\cdot 10^{28}$ м⁻³).
2. Медный провод имеет $20$ Ом при $0$ °C. Найдите его сопротивление при $50$ °C.
3. Сопротивление медного провода растёт со $100$ Ом до $110$ Ом. На сколько поднялась температура?
4. Платиновый термометр имеет $100$ Ом при $0$ °C и показывает $119{,}5$ Ом ($\\alpha = 0{,}0039$ К⁻¹). Найдите температуру.
5. Вольфрамовая нить имеет $40$ Ом при $20$ °C и $500$ Ом в горящем состоянии ($\\alpha = 0{,}0045$ К⁻¹). Оцените её температуру.
6. Сколько электронов проходит через сечение за секунду при $0{,}16$ А?
7. Почему сопротивление металла растёт с температурой?
8. У кого критическая температура выше: у ртути, свинца или керамического сверхпроводника?

### Ответы

1. $v = \\dfrac{3{,}4}{1{,}6 \\cdot 10^{-19} \\cdot 8{,}5 \\cdot 10^{28} \\cdot 2 \\cdot 10^{-6}} \\approx 1{,}25 \\cdot 10^{-4}$ м/с. 2. $24$ Ом. 3. $\\Delta t = \\dfrac{0{,}1}{0{,}004} = 25$ °C. 4. $50$ °C. 5. $\\Delta t = \\dfrac{500/40 - 1}{0{,}0045} \\approx 2560$ °C, то есть около $2580$ °C. 6. $10^{18}$. 7. Ионы колеблются сильнее и чаще рассеивают электроны. 8. У керамического сверхпроводника, около $90$ К и выше.`,
      },
      [
        q(t("The carriers of current in metals are…", "Մետաղներում հոսանքի կրիչներն են…", "Носители тока в металлах — это…"), [t("positive ions", "դրական իոնները", "положительные ионы"), t("free electrons", "ազատ էլեկտրոնները", "свободные электроны"), t("both ions and electrons", "և իոնները, և էլեկտրոնները", "и ионы, и электроны")], 1),
        q(t("The drift speed of electrons in a wire is about…", "Լարում էլեկտրոնների դրեյֆի արագությունը մոտ…", "Скорость дрейфа электронов в проводе порядка…"), [t("the speed of light", "լույսի արագությունն է", "скорости света"), t("10⁵ m/s", "10⁵ մ/վ է", "10⁵ м/с"), t("a fraction of a millimetre per second", "վայրկյանում միլիմետրի մաս է", "доли миллиметра в секунду")], 2),
        q(t("When a metal is heated, its resistance…", "Մետաղը տաքացնելիս նրա դիմադրությունը…", "При нагревании металла его сопротивление…"), [t("grows", "աճում է", "растёт"), t("falls", "փոքրանում է", "падает"), t("does not change", "չի փոխվում", "не меняется")], 0),
        q(t("A copper wire with 10 Ω at 0 °C is heated by 100 °C (α = 0.004 K⁻¹). Its resistance becomes…", "0 °C-ում 10 Օմ պղնձե լարը տաքացվում է 100 °C-ով (α = 0,004 Կ⁻¹)։ Նրա դիմադրությունը դառնում է…", "Медный провод с 10 Ом при 0 °C нагревают на 100 °C (α = 0,004 К⁻¹). Его сопротивление становится…"), [t("10.4 Ω", "10,4 Օմ", "10,4 Ом"), t("14 Ω", "14 Օմ", "14 Ом"), t("40 Ω", "40 Օմ", "40 Ом")], 1),
        q(t("Below the critical temperature a superconductor has…", "Կրիտիկական ջերմաստիճանից ցածր գերհաղորդիչն ունի…", "Ниже критической температуры сверхпроводник имеет…"), [t("zero resistance", "զրո դիմադրություն", "нулевое сопротивление"), t("very large resistance", "շատ մեծ դիմադրություն", "очень большое сопротивление"), t("negative resistance", "բացասական դիմադրություն", "отрицательное сопротивление")], 0),
        q(t("Superconductivity was discovered by…", "Գերհաղորդականությունը հայտնաբերել է…", "Сверхпроводимость открыл…"), [t("Ohm", "Օհմը", "Ом"), t("Kamerlingh Onnes", "Կամերլինգ-Օննեսը", "Камерлинг-Оннес"), t("Faraday", "Ֆարադեյը", "Фарадей")], 1),
      ],
    ),
    lesson(
      "semiconductors",
      ["Semiconductors; diode and transistor", "Կիսահաղորդիչներ, դիոդ և տրանզիստոր", "Полупроводники; диод и транзистор"],
      {
        en: ["Explain intrinsic conductivity of semiconductors through electrons and holes and why it grows with temperature and light", "Distinguish donor (n-type) and acceptor (p-type) doping and describe the p-n junction and the diode", "Describe the transistor as an amplifier and the uses of thermistors, photoresistors and solar cells"],
        hy: ["Բացատրել կիսահաղորդիչների սեփական հաղորդականությունն էլեկտրոնների և խոռոչների միջոցով և թե ինչու է այն աճում ջերմաստիճանի և լույսի հետ", "Տարբերել դոնորային (n-տիպ) և ակցեպտորային (p-տիպ) խառնուրդները և նկարագրել p-n անցումը և դիոդը", "Նկարագրել տրանզիստորը որպես ուժեղարար և թերմիստորների, ֆոտոռեզիստորների ու արևային էլեմենտների կիրառությունները"],
        ru: ["Объяснять собственную проводимость полупроводников через электроны и дырки и почему она растёт с температурой и освещением", "Различать донорную (n-тип) и акцепторную (p-тип) примеси и описывать p-n переход и диод", "Описывать транзистор как усилитель и применение терморезисторов, фоторезисторов и солнечных элементов"],
      },
      {
        en: `## Intrinsic conductivity

**Semiconductors** (silicon, germanium, many compounds) conduct far worse than metals but far better than insulators, and, unlike metals, their resistance **falls** sharply when they are heated or illuminated.

In a pure crystal every valence electron is bound in a covalent bond. Thermal energy or a photon can break a bond: the freed **electron** moves through the crystal, and the vacancy, a **hole**, behaves like a positive carrier, since a neighbouring electron can jump into it. Current in a pure semiconductor is carried by equal numbers of electrons and holes; this is **intrinsic conductivity**. To break a bond in silicon takes $1{.}1$ eV, about forty times the thermal energy at room temperature, so few pairs exist, and their number grows very quickly with temperature.

## Impurity conductivity

| impurity | valence | gives | type | main carriers |
|---|---|---|---|---|
| phosphorus, arsenic | 5 | an extra electron (**donor**) | n | electrons |
| boron, indium | 3 | a missing bond (**acceptor**) | p | holes |

One impurity atom per million makes the conductivity thousands of times greater, and its type is chosen by the engineer.

## The p-n junction and the diode

At the contact of p- and n-regions electrons and holes diffuse across and recombine, leaving a thin **depletion layer** with a built-in field that stops further diffusion. Connecting the p-side to **plus** (forward bias) pushes carriers into the layer and the current flows freely; connecting it to minus (reverse bias) widens the layer and only a tiny current flows.

> A **diode** is a p-n junction: it conducts in one direction only. It is used to **rectify** alternating current (one diode passes half of every period, a bridge of four gives both halves), to protect circuits and, as an LED, to emit light.

## The transistor and other devices

A **transistor** is two junctions, n-p-n or p-n-p: emitter, thin base, collector. A small base current controls a collector current $\\beta$ times larger ($\\beta \\approx 50$ to $500$): the transistor **amplifies** and **switches**. Billions of them form every processor. A **thermistor** uses the fall of resistance with temperature, a **photoresistor** the fall with light, a **solar cell** is a p-n junction in which light creates carriers and a voltage of about $0{.}6$ V.

**Example 1.** Thermal energy at $300$ K is $kT \\approx 0{.}026$ eV, while breaking a silicon bond takes $1{.}1$ eV. Only a tiny fraction of bonds is broken, so pure silicon has about $10^{16}$ carriers per m³ against $10^{29}$ in copper. Warming by a few tens of degrees multiplies the number many times.

**Example 2.** A thermistor has $10$ kΩ at $20$ °C and $1$ kΩ at $80$ °C: the resistance falls ten times, while a copper wire would gain $24\\%$. Thermistors measure temperature in cars, fridges and thermometers for the body.

**Example 3.** Silicon has $5 \\cdot 10^{28}$ atoms per m³. Doping with one arsenic atom per million gives $5 \\cdot 10^{22}$ free electrons per m³, a million times more than the intrinsic carriers: the sample is strongly n-type.

**Example 4.** A diode with a forward drop of $0{.}6$ V is connected in series with $R = 54$ Ω to a $6$ V source. $I = \\dfrac{6 - 0{.}6}{54} = 0{.}1$ A. Reversed, the diode passes only microamperes and the resistor has almost no voltage.

**Example 5.** A single diode in series with a load fed by alternating current passes only the half-periods when its anode is positive: the load gets pulses of one sign, a **half-wave rectifier**. Four diodes in a bridge steer both half-periods through the load in the same direction; a capacitor smooths the pulses.

**Example 6.** A transistor with $\\beta = 100$: a base current of $1$ mA produces a collector current of $100$ mA. A microphone signal of a milliwatt can thus control a loudspeaker; in a computer the base signal switches the collector current fully on or off.

**Example 7.** A photoresistor has $1$ MΩ in darkness and $1$ kΩ in daylight. Connected to $10$ V, its current is $10$ μA at night and $10$ mA by day: an electronic circuit senses the change and switches street lamps on at dusk.

**Example 8.** A solar panel of $1{.}6$ m² delivers $300$ W under sunlight of $1000$ W/m². Efficiency: $\\dfrac{300}{1600} \\approx 19\\%$. Sixty cells in series give about $36$ V; the current is $\\dfrac{300}{36} \\approx 8$ A.

### Exercises

1. Why does the resistance of a semiconductor fall when it is heated?
2. What type of semiconductor is silicon doped with phosphorus? With boron?
3. A diode with a $0{.}7$ V drop and an $83$ Ω resistor are connected to $9$ V. Find the current.
4. A transistor has $\\beta = 50$; the base current is $2$ mA. Find the collector current.
5. A photoresistor has $500$ kΩ in darkness and $2$ kΩ in light. Find its current at $10$ V in both cases.
6. Which way does a diode conduct?
7. A solar panel of $2$ m² with $\\eta = 20\\%$ is lit by $1000$ W/m². Find its power.
8. A thermistor halves its resistance for every $20$ °C of heating. From $8$ kΩ at $20$ °C, what is it at $60$ °C?

### Answers

1. More bonds are broken, so more electron-hole pairs carry current. 2. n-type; p-type. 3. $\\dfrac{9 - 0{.}7}{83} = 0{.}1$ A. 4. $100$ mA. 5. $20$ μA; $5$ mA. 6. From the p-side to the n-side, when the p-side is connected to plus. 7. $400$ W. 8. $2$ kΩ.`,
        hy: `## Սեփական հաղորդականություն

**Կիսահաղորդիչները** (սիլիցիում, գերմանիում, բազմաթիվ միացություններ) հաղորդում են մետաղներից շատ վատ, բայց մեկուսիչներից շատ լավ, և, ի տարբերություն մետաղների, դրանց դիմադրությունը տաքացնելիս կամ լուսավորելիս խիստ **փոքրանում է**։

Մաքուր բյուրեղում ամեն վալենտային էլեկտրոն կապված է կովալենտ կապում։ Ջերմային էներգիան կամ ֆոտոնը կարող են խզել կապը․ ազատված **էլեկտրոնը** շարժվում է բյուրեղով, իսկ դատարկ տեղը՝ **խոռոչը**, վարվում է դրական կրիչի նման, քանի որ հարևան էլեկտրոնը կարող է թռչել նրա մեջ։ Մաքուր կիսահաղորդչում հոսանքը կրում են հավասար թվով էլեկտրոններ և խոռոչներ, դա **սեփական հաղորդականությունն** է։ Սիլիցիումում կապ խզելու համար պետք է $1{,}1$ էՎ՝ սենյակային ջերմաստիճանում ջերմային էներգիայի մոտ քառասնապատիկը, ուստի զույգերը քիչ են, և դրանց թիվը ջերմաստիճանի հետ շատ արագ աճում է։

## Խառնուրդային հաղորդականություն

| խառնուրդ | վալենտություն | տալիս է | տիպ | հիմնական կրիչներ |
|---|---|---|---|---|
| ֆոսֆոր, արսեն | 5 | հավելյալ էլեկտրոն (**դոնոր**) | n | էլեկտրոններ |
| բոր, ինդիում | 3 | պակասող կապ (**ակցեպտոր**) | p | խոռոչներ |

Մեկ խառնուրդային ատոմը միլիոնի հաշվով հաղորդականությունը հազարավոր անգամ մեծացնում է, և նրա տիպն ընտրում է ինժեները։

## p-n անցումը և դիոդը

p- և n-տիրույթների հպման տեղում էլեկտրոններն ու խոռոչները դիֆուզիայով անցնում են և ռեկոմբինացվում՝ թողնելով բարակ **աղքատացած շերտ** ներքին դաշտով, որը կանգնեցնում է հետագա դիֆուզիան։ p-կողմը **պլյուսին** միացնելը (ուղիղ միացում) կրիչները հրում է շերտի մեջ, և հոսանքն ազատ հոսում է, մինուսին միացնելը (հակառակ միացում) լայնացնում է շերտը, և հոսում է միայն չնչին հոսանք։

> **Դիոդը** p-n անցում է․ այն հաղորդում է միայն մեկ ուղղությամբ։ Օգտագործվում է փոփոխական հոսանքը **ուղղելու** համար (մեկ դիոդն անցկացնում է ամեն պարբերության կեսը, չորս դիոդի կամուրջը՝ երկու կեսերը), շղթաները պաշտպանելու և, որպես լուսադիոդ, լույս արձակելու համար։

## Տրանզիստորը և այլ սարքեր

**Տրանզիստորը** երկու անցում է, n-p-n կամ p-n-p․ էմիտեր, բարակ բազա, կոլեկտոր։ Բազայի փոքր հոսանքը կառավարում է $\\beta$ անգամ մեծ կոլեկտորի հոսանք ($\\beta \\approx 50$-ից $500$)․ տրանզիստորը **ուժեղացնում է** և **անջատում-միացնում**։ Միլիարդավորները կազմում են ամեն պրոցեսոր։ **Թերմիստորն** օգտագործում է դիմադրության անկումը ջերմաստիճանի հետ, **ֆոտոռեզիստորը**՝ լույսի հետ, **արևային էլեմենտը** p-n անցում է, որում լույսը ստեղծում է կրիչներ և մոտ $0{,}6$ Վ լարում։

**Օրինակ 1։** Ջերմային էներգիան $300$ Կ-ում $kT \\approx 0{,}026$ էՎ է, իսկ սիլիցիումի կապ խզելու համար պետք է $1{,}1$ էՎ։ Կապերի միայն չնչին մասն է խզված, ուստի մաքուր սիլիցիումն ունի մոտ $10^{16}$ կրիչ մ³-ում՝ պղնձի $10^{29}$-ի դիմաց։ Մի քանի տասնյակ աստիճանով տաքացումը թիվը բազմապատկում է շատ անգամ։

**Օրինակ 2։** Թերմիստորն ունի $10$ կՕմ $20$ °C-ում և $1$ կՕմ $80$ °C-ում․ դիմադրությունն իջնում է տասն անգամ, մինչդեռ պղնձե լարը կաճեր $24\\%$։ Թերմիստորները չափում են ջերմաստիճանը մեքենաներում, սառնարաններում և մարմնի ջերմաչափերում։

**Օրինակ 3։** Սիլիցիումն ունի $5 \\cdot 10^{28}$ ատոմ մ³-ում։ Մեկ արսենի ատոմ միլիոնի հաշվով խառնելը տալիս է $5 \\cdot 10^{22}$ ազատ էլեկտրոն մ³-ում՝ սեփական կրիչներից միլիոն անգամ ավելի․ նմուշը խիստ n-տիպի է։

**Օրինակ 4։** $0{,}6$ Վ ուղիղ անկմամբ դիոդը հաջորդաբար $R = 54$ Օմ-ի հետ միացված է $6$ Վ աղբյուրին։ $I = \\dfrac{6 - 0{,}6}{54} = 0{,}1$ Ա։ Հակառակ միացված դիոդն անցկացնում է միայն միկրոամպերներ, և ռեզիստորի վրա համարյա լարում չկա։

**Օրինակ 5։** Փոփոխական հոսանքով սնվող բեռի հետ հաջորդաբար մեկ դիոդն անցկացնում է միայն այն կիսապարբերությունները, երբ նրա անոդը դրական է․ բեռը ստանում է մեկ նշանի իմպուլսներ՝ **կիսաալիքային ուղղիչ**։ Կամրջով չորս դիոդ երկու կիսապարբերություններն էլ բեռով անցկացնում են նույն ուղղությամբ, կոնդենսատորը հարթեցնում է իմպուլսները։

**Օրինակ 6։** $\\beta = 100$ տրանզիստոր․ $1$ մԱ բազայի հոսանքը տալիս է $100$ մԱ կոլեկտորի հոսանք։ Միլիվատտ խոսափողի ազդանշանն այսպես կարող է կառավարել բարձրախոս, համակարգչում բազայի ազդանշանը կոլեկտորի հոսանքը լրիվ միացնում կամ անջատում է։

**Օրինակ 7։** Ֆոտոռեզիստորն ունի $1$ ՄՕմ մթության մեջ և $1$ կՕմ ցերեկային լույսի տակ։ $10$ Վ-ի միացված նրա հոսանքը գիշերը $10$ մկԱ է, ցերեկը՝ $10$ մԱ․ էլեկտրոնային շղթան զգում է փոփոխությունը և մթնշաղին միացնում է փողոցային լամպերը։

**Օրինակ 8։** $1{,}6$ մ² արևային վահանակը $1000$ Վտ/մ² արևի լույսի տակ տալիս է $300$ Վտ։ ՕԳԳ․ $\\dfrac{300}{1600} \\approx 19\\%$։ Հաջորդաբար վաթսուն էլեմենտ տալիս են մոտ $36$ Վ, հոսանքը $\\dfrac{300}{36} \\approx 8$ Ա է։

### Վարժություններ

1. Ինչո՞ւ է կիսահաղորդչի դիմադրությունը տաքացնելիս փոքրանում։
2. Ի՞նչ տիպի կիսահաղորդիչ է ֆոսֆորով խառնված սիլիցիումը։ Բորո՞վ։
3. $0{,}7$ Վ անկմամբ դիոդն ու $83$ Օմ ռեզիստորը միացված են $9$ Վ-ի։ Գտեք հոսանքը։
4. Տրանզիստորն ունի $\\beta = 50$, բազայի հոսանքը $2$ մԱ է։ Գտեք կոլեկտորի հոսանքը։
5. Ֆոտոռեզիստորն ունի $500$ կՕմ մթության մեջ և $2$ կՕմ լույսի տակ։ Գտեք նրա հոսանքը $10$ Վ-ի դեպքում երկու դեպքում էլ։
6. Ո՞ր ուղղությամբ է հաղորդում դիոդը։
7. $2$ մ² արևային վահանակը $\\eta = 20\\%$ ՕԳԳ-ով լուսավորված է $1000$ Վտ/մ²-ով։ Գտեք նրա հզորությունը։
8. Թերմիստորն ամեն $20$ °C տաքացման դեպքում կիսում է դիմադրությունը։ $20$ °C-ում $8$ կՕմ-ից ի՞նչ է այն $60$ °C-ում։

### Պատասխաններ

1. Ավելի շատ կապեր են խզվում, ուստի ավելի շատ էլեկտրոն-խոռոչ զույգեր են կրում հոսանքը։ 2. n-տիպ, p-տիպ։ 3. $\\dfrac{9 - 0{,}7}{83} = 0{,}1$ Ա։ 4. $100$ մԱ։ 5. $20$ մկԱ, $5$ մԱ։ 6. p-կողմից n-կողմ, երբ p-կողմը միացված է պլյուսին։ 7. $400$ Վտ։ 8. $2$ կՕմ։`,
        ru: `## Собственная проводимость

**Полупроводники** (кремний, германий, многие соединения) проводят гораздо хуже металлов, но гораздо лучше изоляторов, и, в отличие от металлов, их сопротивление резко **падает** при нагревании или освещении.

В чистом кристалле каждый валентный электрон связан в ковалентной связи. Тепловая энергия или фотон могут разорвать связь: освободившийся **электрон** движется по кристаллу, а вакансия — **дырка** — ведёт себя как положительный носитель, поскольку соседний электрон может перескочить в неё. Ток в чистом полупроводнике переносят равные числа электронов и дырок; это **собственная проводимость**. Чтобы разорвать связь в кремнии, нужно $1{,}1$ эВ, примерно в сорок раз больше тепловой энергии при комнатной температуре, поэтому пар мало, а их число очень быстро растёт с температурой.

## Примесная проводимость

| примесь | валентность | даёт | тип | основные носители |
|---|---|---|---|---|
| фосфор, мышьяк | 5 | лишний электрон (**донор**) | n | электроны |
| бор, индий | 3 | недостающую связь (**акцептор**) | p | дырки |

Один атом примеси на миллион делает проводимость в тысячи раз больше, а её тип выбирает инженер.

## p-n переход и диод

На контакте p- и n-областей электроны и дырки диффундируют навстречу и рекомбинируют, оставляя тонкий **обеднённый слой** со встроенным полем, которое останавливает дальнейшую диффузию. Подключение p-стороны к **плюсу** (прямое включение) вталкивает носители в слой, и ток течёт свободно; подключение к минусу (обратное включение) расширяет слой, и течёт лишь ничтожный ток.

> **Диод** — это p-n переход: он проводит только в одном направлении. Его используют для **выпрямления** переменного тока (один диод пропускает половину каждого периода, мост из четырёх — обе половины), для защиты цепей и, в виде светодиода, для излучения света.

## Транзистор и другие приборы

**Транзистор** — два перехода, n-p-n или p-n-p: эмиттер, тонкая база, коллектор. Малый ток базы управляет током коллектора в $\\beta$ раз больше ($\\beta \\approx 50$ — $500$): транзистор **усиливает** и **переключает**. Миллиарды их образуют каждый процессор. **Терморезистор** использует падение сопротивления с температурой, **фоторезистор** — с освещением, **солнечный элемент** — p-n переход, в котором свет создаёт носители и напряжение около $0{,}6$ В.

**Пример 1.** Тепловая энергия при $300$ К $kT \\approx 0{,}026$ эВ, а разрыв связи в кремнии требует $1{,}1$ эВ. Разорвана лишь ничтожная доля связей, поэтому в чистом кремнии около $10^{16}$ носителей на м³ против $10^{29}$ в меди. Нагрев на несколько десятков градусов умножает это число во много раз.

**Пример 2.** Терморезистор имеет $10$ кОм при $20$ °C и $1$ кОм при $80$ °C: сопротивление падает в десять раз, тогда как медный провод прибавил бы $24\\%$. Терморезисторы измеряют температуру в автомобилях, холодильниках и медицинских термометрах.

**Пример 3.** В кремнии $5 \\cdot 10^{28}$ атомов на м³. Легирование одним атомом мышьяка на миллион даёт $5 \\cdot 10^{22}$ свободных электронов на м³, в миллион раз больше собственных носителей: образец сильно n-типа.

**Пример 4.** Диод с прямым падением $0{,}6$ В включён последовательно с $R = 54$ Ом к источнику $6$ В. $I = \\dfrac{6 - 0{,}6}{54} = 0{,}1$ А. В обратном включении диод пропускает лишь микроамперы, и на резисторе почти нет напряжения.

**Пример 5.** Один диод последовательно с нагрузкой, питаемой переменным током, пропускает только полупериоды, когда его анод положителен: нагрузка получает импульсы одного знака — **однополупериодный выпрямитель**. Четыре диода в мосте направляют оба полупериода через нагрузку в одну сторону; конденсатор сглаживает импульсы.

**Пример 6.** Транзистор с $\\beta = 100$: ток базы $1$ мА создаёт ток коллектора $100$ мА. Сигнал микрофона в милливатт может так управлять громкоговорителем; в компьютере сигнал базы полностью включает или выключает ток коллектора.

**Пример 7.** Фоторезистор имеет $1$ МОм в темноте и $1$ кОм при дневном свете. Подключённый к $10$ В, он даёт ток $10$ мкА ночью и $10$ мА днём: электронная схема чувствует изменение и включает уличные фонари в сумерках.

**Пример 8.** Солнечная панель площадью $1{,}6$ м² даёт $300$ Вт при солнечном свете $1000$ Вт/м². КПД: $\\dfrac{300}{1600} \\approx 19\\%$. Шестьдесят элементов последовательно дают около $36$ В; ток $\\dfrac{300}{36} \\approx 8$ А.

### Упражнения

1. Почему сопротивление полупроводника падает при нагревании?
2. Какого типа полупроводник — кремний с примесью фосфора? С примесью бора?
3. Диод с падением $0{,}7$ В и резистор $83$ Ом подключены к $9$ В. Найдите ток.
4. У транзистора $\\beta = 50$; ток базы $2$ мА. Найдите ток коллектора.
5. Фоторезистор имеет $500$ кОм в темноте и $2$ кОм на свету. Найдите его ток при $10$ В в обоих случаях.
6. В какую сторону проводит диод?
7. Солнечная панель $2$ м² с $\\eta = 20\\%$ освещена потоком $1000$ Вт/м². Найдите её мощность.
8. Терморезистор уменьшает сопротивление вдвое на каждые $20$ °C нагрева. С $8$ кОм при $20$ °C — сколько при $60$ °C?

### Ответы

1. Разрывается больше связей, поэтому больше электронно-дырочных пар переносят ток. 2. n-тип; p-тип. 3. $\\dfrac{9 - 0{,}7}{83} = 0{,}1$ А. 4. $100$ мА. 5. $20$ мкА; $5$ мА. 6. От p-стороны к n-стороне, когда p-сторона подключена к плюсу. 7. $400$ Вт. 8. $2$ кОм.`,
      },
      [
        q(t("When a semiconductor is heated, its resistance…", "Կիսահաղորդիչը տաքացնելիս նրա դիմադրությունը…", "При нагревании полупроводника его сопротивление…"), [t("grows", "աճում է", "растёт"), t("falls", "փոքրանում է", "падает"), t("does not change", "չի փոխվում", "не меняется")], 1),
        q(t("A hole in a semiconductor behaves like…", "Խոռոչը կիսահաղորդչում վարվում է ինչպես…", "Дырка в полупроводнике ведёт себя как…"), [t("a positive carrier", "դրական կրիչ", "положительный носитель"), t("a negative carrier", "բացասական կրիչ", "отрицательный носитель"), t("a neutral atom", "չեզոք ատոմ", "нейтральный атом")], 0),
        q(t("Silicon doped with phosphorus (valence 5) is…", "Ֆոսֆորով (վալենտություն 5) խառնված սիլիցիումը…", "Кремний с примесью фосфора (валентность 5) — это…"), [t("p-type", "p-տիպ է", "p-тип"), t("n-type", "n-տիպ է", "n-тип"), t("an insulator", "մեկուսիչ է", "изолятор")], 1),
        q(t("A diode conducts when…", "Դիոդը հաղորդում է, երբ…", "Диод проводит, когда…"), [t("its p-side is connected to plus", "նրա p-կողմը միացված է պլյուսին", "его p-сторона подключена к плюсу"), t("its p-side is connected to minus", "նրա p-կողմը միացված է մինուսին", "его p-сторона подключена к минусу"), t("in both directions equally", "երկու ուղղությամբ հավասարապես", "в обе стороны одинаково")], 0),
        q(t("A diode is used to…", "Դիոդն օգտագործվում է…", "Диод используют для…"), [t("rectify alternating current", "փոփոխական հոսանքն ուղղելու համար", "выпрямления переменного тока"), t("store charge", "լիցք պահելու համար", "накопления заряда"), t("measure temperature", "ջերմաստիճան չափելու համար", "измерения температуры")], 0),
        q(t("A transistor with β = 100 and base current 1 mA has a collector current of…", "β = 100 և 1 մԱ բազայի հոսանքով տրանզիստորի կոլեկտորի հոսանքը…", "Транзистор с β = 100 и током базы 1 мА имеет ток коллектора…"), [t("1 mA", "1 մԱ է", "1 мА"), t("100 mA", "100 մԱ է", "100 мА"), t("0.01 mA", "0,01 մԱ է", "0,01 мА")], 1),
      ],
    ),
    lesson(
      "current-electrolytes-gases",
      ["Current in electrolytes, gases and vacuum", "Հոսանքն էլեկտրոլիտներում, գազերում և վակուումում", "Ток в электролитах, газах и вакууме"],
      {
        en: ["Explain electrolytic dissociation and electrolysis and apply Faraday's law m = (1/F)(M/n)It", "Describe ionisation of gases, non-self-sustained and self-sustained discharges (glow, spark, arc, corona) and plasma", "Explain thermionic emission and current in vacuum and compute the speed of electrons in an electron beam"],
        hy: ["Բացատրել էլեկտրոլիտային դիսոցումը և էլեկտրոլիզը, կիրառել Ֆարադեյի օրենքը m = (1/F)(M/n)It", "Նկարագրել գազերի իոնացումը, անինքնուրույն և ինքնուրույն պարպումները (մարմրող, կայծային, աղեղային, պսակաձև) և պլազման", "Բացատրել ջերմաէլեկտրոնային էմիսիան և հոսանքը վակուումում, հաշվել էլեկտրոնների արագությունն էլեկտրոնային փնջում"],
        ru: ["Объяснять электролитическую диссоциацию и электролиз, применять закон Фарадея m = (1/F)(M/n)It", "Описывать ионизацию газов, несамостоятельный и самостоятельный разряды (тлеющий, искровой, дуговой, коронный) и плазму", "Объяснять термоэлектронную эмиссию и ток в вакууме, вычислять скорость электронов в электронном пучке"],
      },
      {
        en: `## Electrolytes

Solutions and melts of salts, acids and bases conduct: in water the polar molecules pull the substance apart into positive and negative **ions** (**electrolytic dissociation**). In a field the ions drift to the electrodes and give up their charge there: metal and hydrogen are deposited on the cathode, oxygen, chlorine or a dissolved anode at the anode. This is **electrolysis**; it obeys Ohm's law, and the conductivity grows with temperature because dissociation increases.

> **Faraday's law of electrolysis.** The mass deposited is proportional to the charge passed:
> $$m = kIt = \\dfrac{1}{F}\\cdot\\dfrac{M}{n}\\, I t, \\qquad F = eN_A = 96\\,500\\ \\text{C/mol},$$
> where $M$ is the molar mass and $n$ the valence of the ion. One mole of singly charged ions carries the charge $F$.

Applications: electroplating (chromium, nickel, gold), refining of copper, production of aluminium, hydrogen and chlorine, electroforming, batteries and accumulators.

## Gases

A gas of neutral molecules is an insulator. It conducts after **ionisation** by heat, ultraviolet light, X-rays or radioactivity, which produces electrons and positive ions (electrons often attach to molecules and form negative ions). A **non-self-sustained discharge** stops when the ioniser is removed; at large voltage all the ions produced reach the electrodes and the current **saturates**. When the field is strong enough, electrons gain enough energy between collisions to ionise molecules themselves (**impact ionisation**), the discharge becomes **self-sustained**. In air the breakdown field is about $3 \\cdot 10^6$ V/m, that is $3$ kV per millimetre.

| discharge | conditions | examples |
|---|---|---|
| glow | low pressure, hundreds of volts | neon signs, fluorescent lamps |
| spark | high voltage, normal pressure, short | lightning, ignition plug |
| arc | large current, hot electrodes | welding, arc lamps, furnaces |
| corona | sharp points, strong field | glow on power lines and masts |

A strongly ionised gas is **plasma**, the fourth state of matter: stars, lightning, the ionosphere, discharge tubes.

## Vacuum

A vacuum contains no carriers. A current flows only if electrons are supplied, usually by **thermionic emission** from a heated cathode. A **vacuum diode** conducts only when the anode is positive; in a cathode-ray tube the electrons are accelerated by $U$ to $v = \\sqrt{\\dfrac{2eU}{m}}$, focused into a beam and deflected to draw an image; the same beam works in electron microscopes and X-ray tubes.

**Example 1.** Copper plating ($M = 0{.}064$ kg/mol, $n = 2$) at $I = 2$ A for one hour: $m = \\dfrac{1}{96\\,500} \\cdot \\dfrac{0{.}064}{2} \\cdot 2 \\cdot 3600 \\approx 2{.}4 \\cdot 10^{-3}$ kg $= 2{.}4$ g.

**Example 2.** Silver has $k = 1{.}12 \\cdot 10^{-6}$ kg/C. To deposit $5$ g at $1$ A takes $t = \\dfrac{0{.}005}{1{.}12 \\cdot 10^{-6}} \\approx 4500$ s, about $75$ min.

**Example 3.** Electrolysis of water at $1$ A for one hour releases hydrogen ($M = 0{.}002$, $n = 2$): $m = \\dfrac{0{.}001}{96\\,500} \\cdot 3600 \\approx 3{.}7 \\cdot 10^{-5}$ kg $= 37$ mg, about $0{.}4$ L at normal conditions, and half as many moles of oxygen.

**Example 4.** Aluminium ($M = 0{.}027$, $n = 3$). One kilogram needs the charge $Q = \\dfrac{m n F}{M} = \\dfrac{1 \\cdot 3 \\cdot 96\\,500}{0{.}027} \\approx 1{.}1 \\cdot 10^7$ C; at about $4$ V this is $4{.}3 \\cdot 10^7$ J $\\approx 12$ kWh. Aluminium plants stand next to big power stations, and recycling saves most of this energy.

**Example 5.** Two electrodes $1$ cm apart in air. A spark jumps when $U \\approx 3 \\cdot 10^6 \\cdot 0{.}01 = 30$ kV. A lightning stroke several kilometres long needs hundreds of millions of volts; the current reaches $10^5$ A for a fraction of a millisecond.

**Example 6.** A welding arc runs at $40$ V and $200$ A: $P = 8$ kW concentrated in a spot a few millimetres across, with a temperature of about $5000$ K, enough to melt any metal. The arc is self-sustained: the hot cathode emits electrons thermionically.

**Example 7.** In a fluorescent lamp a glow discharge in mercury vapour at low pressure emits ultraviolet light, which the phosphor coating turns into visible light. A neon sign is the same discharge with the colour set by the gas: red for neon, blue for argon with mercury.

**Example 8.** Electrons in a cathode-ray tube are accelerated through $10$ kV: $v = \\sqrt{\\dfrac{2 \\cdot 1{.}6 \\cdot 10^{-19} \\cdot 10^4}{9{.}1 \\cdot 10^{-31}}} \\approx 5{.}9 \\cdot 10^7$ m/s, one fifth of the speed of light. A beam current of $1$ mA carries $6 \\cdot 10^{15}$ electrons per second.

### Exercises

1. How much copper is deposited by $5$ A in $30$ min?
2. How long does it take to deposit $2$ g of silver at $0{.}5$ A ($k = 1{.}12 \\cdot 10^{-6}$ kg/C)?
3. What charge releases one mole of hydrogen gas H₂?
4. How much nickel ($M = 0{.}059$ kg/mol, $n = 2$) is deposited by $10$ A in one hour?
5. Find the breakdown voltage of a $5$ mm air gap.
6. An arc at $40$ V and $150$ A burns for $10$ min. Find the energy released.
7. Why does a flame make the air between two charged plates conducting?
8. Find the speed of electrons accelerated through $2$ kV.

### Answers

1. $\\dfrac{0{.}032}{96\\,500} \\cdot 5 \\cdot 1800 \\approx 3 \\cdot 10^{-3}$ kg $= 3$ g. 2. $t = \\dfrac{0{.}002}{1{.}12 \\cdot 10^{-6} \\cdot 0{.}5} \\approx 3600$ s, one hour. 3. Each molecule needs $2$ electrons: $Q = 2F = 193\\,000$ C. 4. $\\dfrac{0{.}0295}{96\\,500} \\cdot 36\\,000 \\approx 0{.}011$ kg $= 11$ g. 5. $15$ kV. 6. $6000 \\cdot 600 = 3{.}6 \\cdot 10^6$ J. 7. The heat ionises the air, creating electrons and ions. 8. $\\sqrt{\\dfrac{2 \\cdot 1{.}6 \\cdot 10^{-19} \\cdot 2000}{9{.}1 \\cdot 10^{-31}}} \\approx 2{.}7 \\cdot 10^7$ m/s.`,
        hy: `## Էլեկտրոլիտներ

Աղերի, թթուների և հիմքերի լուծույթներն ու հալույթները հաղորդում են․ ջրում բևեռային մոլեկուլները նյութը տրոհում են դրական և բացասական **իոնների** (**էլեկտրոլիտային դիսոցում**)։ Դաշտում իոնները դրեյֆում են էլեկտրոդներին և այնտեղ տալիս իրենց լիցքը․ կաթոդի վրա նստում են մետաղ և ջրածին, անոդի մոտ՝ թթվածին, քլոր կամ լուծվում է անոդը։ Դա **էլեկտրոլիզն** է, այն ենթարկվում է Օհմի օրենքին, և հաղորդականությունն աճում է ջերմաստիճանի հետ, որովհետև դիսոցումն ուժեղանում է։

> **Ֆարադեյի էլեկտրոլիզի օրենք։** Նստած զանգվածը համեմատական է անցած լիցքին․
> $$m = kIt = \\dfrac{1}{F}\\cdot\\dfrac{M}{n}\\, I t, \\qquad F = eN_A = 96\\,500\\ \\text{Կլ/մոլ}$$
> որտեղ $M$-ը մոլային զանգվածն է, $n$-ը՝ իոնի վալենտությունը։ Մեկ մոլ միալիցք իոն կրում է $F$ լիցք։

Կիրառություններ․ գալվանապատում (քրոմ, նիկել, ոսկի), պղնձի զտում, ալյումինի, ջրածնի և քլորի արտադրություն, գալվանապլաստիկա, մարտկոցներ և կուտակիչներ։

## Գազեր

Չեզոք մոլեկուլների գազը մեկուսիչ է։ Այն հաղորդում է ջերմությամբ, ուլտրամանուշակագույն լույսով, ռենտգենյան ճառագայթներով կամ ռադիոակտիվությամբ **իոնացումից** հետո, որն առաջացնում է էլեկտրոններ և դրական իոններ (էլեկտրոնները հաճախ կպչում են մոլեկուլներին և կազմում բացասական իոններ)։ **Անինքնուրույն պարպումը** դադարում է, երբ իոնացուցիչը հեռացվում է, մեծ լարման դեպքում բոլոր առաջացած իոնները հասնում են էլեկտրոդներին, և հոսանքը **հագենում է**։ Երբ դաշտը բավական ուժեղ է, էլեկտրոնները բախումների միջև այնքան էներգիա են ստանում, որ իրենք իոնացնում են մոլեկուլներ (**հարվածային իոնացում**), պարպումը դառնում է **ինքնուրույն**։ Օդում ծակման դաշտը մոտ $3 \\cdot 10^6$ Վ/մ է, այսինքն $3$ կՎ միլիմետրին։

| պարպում | պայմաններ | օրինակներ |
|---|---|---|
| մարմրող | ցածր ճնշում, հարյուրավոր վոլտ | նեոնային ցուցանակներ, լյումինեսցենտ լամպեր |
| կայծային | բարձր լարում, նորմալ ճնշում, կարճատև | կայծակ, բռնկման մոմ |
| աղեղային | մեծ հոսանք, տաք էլեկտրոդներ | եռակցում, աղեղային լամպեր, վառարաններ |
| պսակաձև | սուր ծայրեր, ուժեղ դաշտ | փայլ հոսանքագծերի և կայմերի վրա |

Ուժեղ իոնացված գազը **պլազմա** է՝ նյութի չորրորդ վիճակը․ աստղեր, կայծակ, իոնոսֆերա, պարպման խողովակներ։

## Վակուում

Վակուումում կրիչներ չկան։ Հոսանք հոսում է միայն, եթե էլեկտրոններ են մատակարարվում, սովորաբար տաքացված կաթոդի **ջերմաէլեկտրոնային էմիսիայով**։ **Վակուումային դիոդը** հաղորդում է միայն, երբ անոդը դրական է, էլեկտրոնաճառագայթային խողովակում էլեկտրոնները $U$ լարմամբ արագացվում են մինչև $v = \\sqrt{\\dfrac{2eU}{m}}$, կիզակետվում փնջի և շեղվում պատկեր գծելու համար, նույն փունջն աշխատում է էլեկտրոնային մանրադիտակներում և ռենտգենյան խողովակներում։

**Օրինակ 1։** Պղնձապատում ($M = 0{,}064$ կգ/մոլ, $n = 2$) $I = 2$ Ա հոսանքով մեկ ժամում․ $m = \\dfrac{1}{96\\,500} \\cdot \\dfrac{0{,}064}{2} \\cdot 2 \\cdot 3600 \\approx 2{,}4 \\cdot 10^{-3}$ կգ $= 2{,}4$ գ։

**Օրինակ 2։** Արծաթն ունի $k = 1{,}12 \\cdot 10^{-6}$ կգ/Կլ։ $5$ գ նստեցնելու համար $1$ Ա հոսանքով պետք է $t = \\dfrac{0{,}005}{1{,}12 \\cdot 10^{-6}} \\approx 4500$ վ՝ մոտ $75$ րոպե։

**Օրինակ 3։** Ջրի էլեկտրոլիզը $1$ Ա հոսանքով մեկ ժամում արձակում է ջրածին ($M = 0{,}002$, $n = 2$)․ $m = \\dfrac{0{,}001}{96\\,500} \\cdot 3600 \\approx 3{,}7 \\cdot 10^{-5}$ կգ $= 37$ մգ՝ մոտ $0{,}4$ լ նորմալ պայմաններում, և կիսով չափ քիչ մոլ թթվածին։

**Օրինակ 4։** Ալյումին ($M = 0{,}027$, $n = 3$)։ Մեկ կիլոգրամի համար պետք է $Q = \\dfrac{m n F}{M} = \\dfrac{1 \\cdot 3 \\cdot 96\\,500}{0{,}027} \\approx 1{,}1 \\cdot 10^7$ Կլ լիցք, մոտ $4$ Վ լարմամբ դա $4{,}3 \\cdot 10^7$ Ջ $\\approx 12$ կՎտ·ժ է։ Ալյումինի գործարանները կանգնած են մեծ էլեկտրակայանների կողքին, և վերամշակումը խնայում է այս էներգիայի մեծ մասը։

**Օրինակ 5։** Երկու էլեկտրոդ օդում $1$ սմ հեռավորության վրա։ Կայծը թռչում է, երբ $U \\approx 3 \\cdot 10^6 \\cdot 0{,}01 = 30$ կՎ։ Մի քանի կիլոմետր երկարությամբ կայծակի հարվածին պետք է հարյուրավոր միլիոն վոլտ, հոսանքը հասնում է $10^5$ Ա միլիվայրկյանի մասի ընթացքում։

**Օրինակ 6։** Եռակցման աղեղն աշխատում է $40$ Վ և $200$ Ա․ $P = 8$ կՎտ, կենտրոնացված մի քանի միլիմետր կետում, մոտ $5000$ Կ ջերմաստիճանով՝ բավական ցանկացած մետաղ հալելու։ Աղեղն ինքնուրույն է․ տաք կաթոդն էլեկտրոններ է արձակում ջերմաէլեկտրոնային էմիսիայով։

**Օրինակ 7։** Լյումինեսցենտ լամպում ցածր ճնշման սնդիկի գոլորշում մարմրող պարպումն արձակում է ուլտրամանուշակագույն լույս, որը լյումինոֆորի շերտը դարձնում է տեսանելի լույս։ Նեոնային ցուցանակը նույն պարպումն է, գույնը որոշում է գազը․ կարմիր նեոնի դեպքում, կապույտ՝ արգոնի և սնդիկի։

**Օրինակ 8։** Էլեկտրոնաճառագայթային խողովակում էլեկտրոններն արագացվում են $10$ կՎ լարմամբ․ $v = \\sqrt{\\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-19} \\cdot 10^4}{9{,}1 \\cdot 10^{-31}}} \\approx 5{,}9 \\cdot 10^7$ մ/վ՝ լույսի արագության մեկ հինգերորդը։ $1$ մԱ փնջի հոսանքը վայրկյանում կրում է $6 \\cdot 10^{15}$ էլեկտրոն։

### Վարժություններ

1. Որքա՞ն պղինձ է նստեցնում $5$ Ա հոսանքը $30$ րոպեում։
2. Որքա՞ն ժամանակ է պետք $2$ գ արծաթ նստեցնելու $0{,}5$ Ա հոսանքով ($k = 1{,}12 \\cdot 10^{-6}$ կգ/Կլ)։
3. Ի՞նչ լիցք է արձակում մեկ մոլ ջրածին գազ H₂։
4. Որքա՞ն նիկել ($M = 0{,}059$ կգ/մոլ, $n = 2$) է նստեցնում $10$ Ա հոսանքը մեկ ժամում։
5. Գտեք $5$ մմ օդային բացի ծակման լարումը։
6. $40$ Վ և $150$ Ա աղեղը վառվում է $10$ րոպե։ Գտեք արձակված էներգիան։
7. Ինչո՞ւ է բոցն երկու լիցքավորված թիթեղների միջև օդը դարձնում հաղորդիչ։
8. Գտեք $2$ կՎ լարմամբ արագացված էլեկտրոնների արագությունը։

### Պատասխաններ

1. $\\dfrac{0{,}032}{96\\,500} \\cdot 5 \\cdot 1800 \\approx 3 \\cdot 10^{-3}$ կգ $= 3$ գ։ 2. $t = \\dfrac{0{,}002}{1{,}12 \\cdot 10^{-6} \\cdot 0{,}5} \\approx 3600$ վ՝ մեկ ժամ։ 3. Ամեն մոլեկուլին պետք է $2$ էլեկտրոն․ $Q = 2F = 193\\,000$ Կլ։ 4. $\\dfrac{0{,}0295}{96\\,500} \\cdot 36\\,000 \\approx 0{,}011$ կգ $= 11$ գ։ 5. $15$ կՎ։ 6. $6000 \\cdot 600 = 3{,}6 \\cdot 10^6$ Ջ։ 7. Ջերմությունն իոնացնում է օդը՝ առաջացնելով էլեկտրոններ և իոններ։ 8. $\\sqrt{\\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-19} \\cdot 2000}{9{,}1 \\cdot 10^{-31}}} \\approx 2{,}7 \\cdot 10^7$ մ/վ։`,
        ru: `## Электролиты

Растворы и расплавы солей, кислот и оснований проводят ток: в воде полярные молекулы растаскивают вещество на положительные и отрицательные **ионы** (**электролитическая диссоциация**). В поле ионы дрейфуют к электродам и отдают там заряд: на катоде выделяются металл и водород, у анода — кислород, хлор или растворяется сам анод. Это **электролиз**; он подчиняется закону Ома, а проводимость растёт с температурой, потому что усиливается диссоциация.

> **Закон Фарадея для электролиза.** Выделившаяся масса пропорциональна прошедшему заряду:
> $$m = kIt = \\dfrac{1}{F}\\cdot\\dfrac{M}{n}\\, I t, \\qquad F = eN_A = 96\\,500\\ \\text{Кл/моль},$$
> где $M$ — молярная масса, $n$ — валентность иона. Один моль однозарядных ионов несёт заряд $F$.

Применения: гальваностегия (хромирование, никелирование, золочение), рафинирование меди, производство алюминия, водорода и хлора, гальванопластика, батареи и аккумуляторы.

## Газы

Газ из нейтральных молекул — изолятор. Он проводит после **ионизации** нагревом, ультрафиолетом, рентгеновскими лучами или радиоактивностью, которая создаёт электроны и положительные ионы (электроны часто прилипают к молекулам, образуя отрицательные ионы). **Несамостоятельный разряд** прекращается, когда ионизатор убирают; при большом напряжении все образующиеся ионы достигают электродов, и ток **насыщается**. Когда поле достаточно сильно, электроны между столкновениями набирают энергию, достаточную, чтобы самим ионизовать молекулы (**ударная ионизация**), и разряд становится **самостоятельным**. В воздухе поле пробоя около $3 \\cdot 10^6$ В/м, то есть $3$ кВ на миллиметр.

| разряд | условия | примеры |
|---|---|---|
| тлеющий | низкое давление, сотни вольт | неоновые вывески, люминесцентные лампы |
| искровой | высокое напряжение, нормальное давление, кратковременный | молния, свеча зажигания |
| дуговой | большой ток, горячие электроды | сварка, дуговые лампы, печи |
| коронный | острия, сильное поле | свечение на линиях электропередачи и мачтах |

Сильно ионизованный газ — **плазма**, четвёртое состояние вещества: звёзды, молния, ионосфера, газоразрядные трубки.

## Вакуум

В вакууме нет носителей. Ток идёт, только если электроны поставляются, обычно **термоэлектронной эмиссией** с нагретого катода. **Вакуумный диод** проводит, только когда анод положителен; в электронно-лучевой трубке электроны ускоряются напряжением $U$ до $v = \\sqrt{\\dfrac{2eU}{m}}$, фокусируются в пучок и отклоняются, рисуя изображение; тот же пучок работает в электронных микроскопах и рентгеновских трубках.

**Пример 1.** Меднение ($M = 0{,}064$ кг/моль, $n = 2$) при $I = 2$ А в течение часа: $m = \\dfrac{1}{96\\,500} \\cdot \\dfrac{0{,}064}{2} \\cdot 2 \\cdot 3600 \\approx 2{,}4 \\cdot 10^{-3}$ кг $= 2{,}4$ г.

**Пример 2.** У серебра $k = 1{,}12 \\cdot 10^{-6}$ кг/Кл. Чтобы выделить $5$ г при $1$ А, нужно $t = \\dfrac{0{,}005}{1{,}12 \\cdot 10^{-6}} \\approx 4500$ с, около $75$ мин.

**Пример 3.** Электролиз воды при $1$ А в течение часа выделяет водород ($M = 0{,}002$, $n = 2$): $m = \\dfrac{0{,}001}{96\\,500} \\cdot 3600 \\approx 3{,}7 \\cdot 10^{-5}$ кг $= 37$ мг, около $0{,}4$ л при нормальных условиях, и вдвое меньше молей кислорода.

**Пример 4.** Алюминий ($M = 0{,}027$, $n = 3$). На один килограмм нужен заряд $Q = \\dfrac{m n F}{M} = \\dfrac{1 \\cdot 3 \\cdot 96\\,500}{0{,}027} \\approx 1{,}1 \\cdot 10^7$ Кл; при напряжении около $4$ В это $4{,}3 \\cdot 10^7$ Дж $\\approx 12$ кВт·ч. Алюминиевые заводы стоят рядом с крупными электростанциями, а переработка экономит большую часть этой энергии.

**Пример 5.** Два электрода в воздухе на расстоянии $1$ см. Искра проскакивает при $U \\approx 3 \\cdot 10^6 \\cdot 0{,}01 = 30$ кВ. Молнии длиной в несколько километров нужны сотни миллионов вольт; ток достигает $10^5$ А за доли миллисекунды.

**Пример 6.** Сварочная дуга горит при $40$ В и $200$ А: $P = 8$ кВт, сосредоточенные в пятне в несколько миллиметров, с температурой около $5000$ К — достаточно, чтобы расплавить любой металл. Дуга самостоятельна: горячий катод испускает электроны термоэлектронной эмиссией.

**Пример 7.** В люминесцентной лампе тлеющий разряд в парах ртути при низком давлении излучает ультрафиолет, который слой люминофора превращает в видимый свет. Неоновая вывеска — тот же разряд, цвет задаёт газ: красный у неона, синий у аргона с ртутью.

**Пример 8.** Электроны в электронно-лучевой трубке ускоряются напряжением $10$ кВ: $v = \\sqrt{\\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-19} \\cdot 10^4}{9{,}1 \\cdot 10^{-31}}} \\approx 5{,}9 \\cdot 10^7$ м/с, пятая часть скорости света. Ток пучка $1$ мА переносит $6 \\cdot 10^{15}$ электронов в секунду.

### Упражнения

1. Сколько меди выделяет ток $5$ А за $30$ мин?
2. Сколько времени нужно, чтобы выделить $2$ г серебра при $0{,}5$ А ($k = 1{,}12 \\cdot 10^{-6}$ кг/Кл)?
3. Какой заряд выделяет один моль газообразного водорода H₂?
4. Сколько никеля ($M = 0{,}059$ кг/моль, $n = 2$) выделяет ток $10$ А за час?
5. Найдите напряжение пробоя воздушного зазора $5$ мм.
6. Дуга при $40$ В и $150$ А горит $10$ мин. Найдите выделившуюся энергию.
7. Почему пламя делает воздух между двумя заряженными пластинами проводящим?
8. Найдите скорость электронов, ускоренных напряжением $2$ кВ.

### Ответы

1. $\\dfrac{0{,}032}{96\\,500} \\cdot 5 \\cdot 1800 \\approx 3 \\cdot 10^{-3}$ кг $= 3$ г. 2. $t = \\dfrac{0{,}002}{1{,}12 \\cdot 10^{-6} \\cdot 0{,}5} \\approx 3600$ с, один час. 3. Каждой молекуле нужно $2$ электрона: $Q = 2F = 193\\,000$ Кл. 4. $\\dfrac{0{,}0295}{96\\,500} \\cdot 36\\,000 \\approx 0{,}011$ кг $= 11$ г. 5. $15$ кВ. 6. $6000 \\cdot 600 = 3{,}6 \\cdot 10^6$ Дж. 7. Тепло ионизует воздух, создавая электроны и ионы. 8. $\\sqrt{\\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-19} \\cdot 2000}{9{,}1 \\cdot 10^{-31}}} \\approx 2{,}7 \\cdot 10^7$ м/с.`,
      },
      [
        q(t("The carriers of current in electrolytes are…", "Էլեկտրոլիտներում հոսանքի կրիչներն են…", "Носители тока в электролитах — это…"), [t("free electrons", "ազատ էլեկտրոնները", "свободные электроны"), t("positive and negative ions", "դրական և բացասական իոնները", "положительные и отрицательные ионы"), t("holes", "խոռոչները", "дырки")], 1),
        q(t("According to Faraday's law the mass deposited is proportional to…", "Ֆարադեյի օրենքով նստած զանգվածը համեմատական է…", "По закону Фарадея выделившаяся масса пропорциональна…"), [t("the voltage", "լարմանը", "напряжению"), t("the charge passed", "անցած լիցքին", "прошедшему заряду"), t("the resistance", "դիմադրությանը", "сопротивлению")], 1),
        q(t("The Faraday constant is approximately…", "Ֆարադեյի հաստատունը մոտավորապես…", "Постоянная Фарадея приблизительно равна…"), [t("96 500 C/mol", "96 500 Կլ/մոլ է", "96 500 Кл/моль"), t("6 · 10²³ C/mol", "6 · 10²³ Կլ/մոլ է", "6 · 10²³ Кл/моль"), t("1.6 · 10⁻¹⁹ C/mol", "1,6 · 10⁻¹⁹ Կլ/մոլ է", "1,6 · 10⁻¹⁹ Кл/моль")], 0),
        q(t("A gas discharge that continues after the external ioniser is removed is called…", "Արտաքին իոնացուցիչը հեռացնելուց հետո շարունակվող գազային պարպումը կոչվում է…", "Газовый разряд, продолжающийся после удаления внешнего ионизатора, называется…"), [t("non-self-sustained", "անինքնուրույն", "несамостоятельным"), t("self-sustained", "ինքնուրույն", "самостоятельным"), t("saturated", "հագեցած", "насыщенным")], 1),
        q(t("Lightning is an example of … discharge.", "Կայծակը … պարպման օրինակ է։", "Молния — пример … разряда."), [t("glow", "մարմրող", "тлеющего"), t("spark", "կայծային", "искрового"), t("corona", "պսակաձև", "коронного")], 1),
        q(t("Current in vacuum is possible only if…", "Հոսանքը վակուումում հնարավոր է միայն, եթե…", "Ток в вакууме возможен, только если…"), [t("the gas is ionised", "գազն իոնացված է", "газ ионизован"), t("electrons are supplied, for example by a heated cathode", "էլեկտրոններ են մատակարարվում, օրինակ տաքացված կաթոդից", "электроны поставляются, например нагретым катодом"), t("the voltage is low", "լարումը ցածր է", "напряжение мало")], 1),
      ],
    ),
  ],
};
