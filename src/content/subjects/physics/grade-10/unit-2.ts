import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Molecular physics", "Մոլեկուլային ֆիզիկա", "Молекулярная физика"),
  summary: t("Molecular-kinetic theory, ideal gas, temperature, gas laws, saturated vapour, liquids and solids.", "Մոլեկուլային-կինետիկ տեսություն, իդեալական գազ, ջերմաստիճան, գազի օրենքներ, հագեցած գոլորշի, հեղուկներ և պինդ մարմիններ։", "Молекулярно-кинетическая теория, идеальный газ, температура, газовые законы, насыщенный пар, жидкости и твёрдые тела."),
  lessons: [
    lesson(
      "mkt-basics",
      ["Basic statements of MKT; mass and size of molecules", "ՄԿՏ հիմնական դրույթներ, մոլեկուլների զանգված և չափ", "Основные положения МКТ; масса и размеры молекул"],
      {
        en: ["State the three basic statements of molecular-kinetic theory and the experiments that support them", "Compute the mass of a molecule, the amount of substance and the number of molecules from the molar mass and Avogadro's number", "Estimate the size of a molecule and the mean distance between molecules in liquids and gases"],
        hy: ["Ձևակերպել մոլեկուլային-կինետիկ տեսության երեք հիմնական դրույթները և դրանք հաստատող փորձերը", "Հաշվել մոլեկուլի զանգվածը, նյութի քանակը և մոլեկուլների թիվը մոլային զանգվածից և Ավոգադրոյի թվից", "Գնահատել մոլեկուլի չափը և մոլեկուլների միջև միջին հեռավորությունը հեղուկներում և գազերում"],
        ru: ["Формулировать три основных положения молекулярно-кинетической теории и подтверждающие их опыты", "Вычислять массу молекулы, количество вещества и число молекул по молярной массе и числу Авогадро", "Оценивать размер молекулы и среднее расстояние между молекулами в жидкостях и газах"],
      },
      {
        en: `## Three statements

> **Molecular-kinetic theory (MKT)** rests on three statements:
> 1. all substances consist of particles (molecules, atoms, ions) separated by gaps;
> 2. the particles move chaotically and ceaselessly;
> 3. the particles interact: they attract at larger distances and repel when pressed together.

Evidence: **diffusion** (mixing of substances by themselves, faster when hot), **Brownian motion** (a pollen grain in water jerks randomly because molecules hit it unevenly), the compressibility of gases, the existence of the elastic force, photographs of atoms by electron and tunnelling microscopes.

## Mass of molecules; amount of substance

The **Avogadro number** $N_A = 6{.}02 \\cdot 10^{23}$ mol⁻¹ is the number of particles in one mole. The **molar mass** $M$ (kg/mol) is numerically the relative molecular mass divided by $1000$: for water $M_r = 18$, $M = 0{.}018$ kg/mol.

| quantity | formula |
|---|---|
| mass of one molecule | $m_0 = \\dfrac{M}{N_A}$ |
| amount of substance | $\\nu = \\dfrac{m}{M} = \\dfrac{N}{N_A}$ |
| number of molecules | $N = \\nu N_A = \\dfrac{m}{M} N_A$ |
| concentration | $n = \\dfrac{N}{V}$ |

One mole of any gas at normal conditions ($0$ °C, $10^5$ Pa) occupies $22{.}4$ L.

## Size of molecules

Molecules are about $10^{-10}$ m $= 0{.}1$ nm across. Two estimates: the volume per molecule in a liquid is $V_0 = \\dfrac{m_0}{\\rho}$, and $d \\approx \\sqrt[3]{V_0}$; an oil drop spread on water to a film one molecule thick has thickness $h = \\dfrac{V}{S}$.

In a gas the mean distance between molecules is $\\ell \\approx \\dfrac{1}{\\sqrt[3]{n}}$, about ten molecular diameters at normal conditions; this is why gases are easily compressed and the interaction of their molecules can often be neglected.

**Example 1.** Water molecule: $m_0 = \\dfrac{0{.}018}{6{.}02 \\cdot 10^{23}} \\approx 3{.}0 \\cdot 10^{-26}$ kg.

**Example 2.** In $1$ g of water $\\nu = \\dfrac{1}{18}$ mol $\\approx 0{.}056$ mol, $N = 0{.}056 \\cdot 6{.}02 \\cdot 10^{23} \\approx 3{.}3 \\cdot 10^{22}$ molecules. One cubic centimetre of water contains thirty three thousand billion billion molecules.

**Example 3.** Concentration of any gas at normal conditions: $n = \\dfrac{6{.}02 \\cdot 10^{23}}{0{.}0224} \\approx 2{.}7 \\cdot 10^{25}$ m⁻³ (the Loschmidt number). It is the same for hydrogen and for carbon dioxide.

**Example 4.** Carbon dioxide CO₂: $M_r = 12 + 2 \\cdot 16 = 44$, $M = 0{.}044$ kg/mol, $m_0 = \\dfrac{0{.}044}{6{.}02 \\cdot 10^{23}} \\approx 7{.}3 \\cdot 10^{-26}$ kg, about $2{.}4$ times the mass of a water molecule.

**Example 5.** Size of a water molecule: $V_0 = \\dfrac{m_0}{\\rho} = \\dfrac{3{.}0 \\cdot 10^{-26}}{1000} = 3{.}0 \\cdot 10^{-29}$ m³, $d \\approx \\sqrt[3]{3{.}0 \\cdot 10^{-29}} \\approx 3{.}1 \\cdot 10^{-10}$ m. In a liquid the molecules practically touch.

**Example 6.** An oil drop of volume $1$ mm³ $= 10^{-9}$ m³ spreads on water into a film of area $1$ m². Thickness $h = \\dfrac{10^{-9}}{1} = 10^{-9}$ m $= 1$ nm. The film cannot be thinner than one molecule, so an oil molecule is at most about $1$ nm long.

**Example 7.** How many molecules are in $2$ kg of oxygen O₂ ($M = 0{.}032$ kg/mol)? $\\nu = \\dfrac{2}{0{.}032} = 62{.}5$ mol, $N = 62{.}5 \\cdot 6{.}02 \\cdot 10^{23} \\approx 3{.}8 \\cdot 10^{25}$.

**Example 8.** Mean distance between air molecules at normal conditions: $\\ell \\approx \\dfrac{1}{\\sqrt[3]{2{.}7 \\cdot 10^{25}}} \\approx 3{.}3 \\cdot 10^{-9}$ m, roughly ten diameters. In a liquid the same estimate gives $\\ell \\approx d$.

### Exercises

1. Find the mass of a nitrogen molecule N₂ ($M = 0{.}028$ kg/mol).
2. How many molecules are in $4{.}4$ g of carbon dioxide?
3. Find the molar mass of methane CH₄.
4. How many molecules are in $1$ cm³ of water?
5. What amount of substance is $5{.}6 \\cdot 10^{24}$ molecules?
6. Estimate the diameter of a mercury atom ($\\rho = 13\\,600$ kg/m³, $M = 0{.}2$ kg/mol).
7. An oil drop of $0{.}1$ mm³ spreads into a film of $0{.}1$ m². Find the thickness.
8. $3 \\cdot 10^{24}$ molecules of gas occupy $2$ L. Find the concentration.

### Answers

1. $4{.}7 \\cdot 10^{-26}$ kg. 2. $0{.}1$ mol, $6{.}0 \\cdot 10^{22}$. 3. $12 + 4 = 16$ g/mol $= 0{.}016$ kg/mol. 4. $1$ g, $3{.}3 \\cdot 10^{22}$. 5. $\\approx 9{.}3$ mol. 6. $m_0 = 3{.}3 \\cdot 10^{-25}$ kg, $V_0 = 2{.}4 \\cdot 10^{-29}$ m³, $d \\approx 2{.}9 \\cdot 10^{-10}$ m. 7. $10^{-9}$ m. 8. $1{.}5 \\cdot 10^{27}$ m⁻³.`,
        hy: `## Երեք դրույթ

> **Մոլեկուլային-կինետիկ տեսությունը (ՄԿՏ)** հենվում է երեք դրույթի վրա․
> 1. բոլոր նյութերը կազմված են մասնիկներից (մոլեկուլներ, ատոմներ, իոններ), որոնց միջև բացեր են,
> 2. մասնիկները շարժվում են քաոսային և անդադար,
> 3. մասնիկները փոխազդում են․ մեծ հեռավորությունների վրա ձգում են, սեղմվելիս՝ վանում։

Ապացույցներ․ **դիֆուզիա** (նյութերի ինքնաբերական խառնվելը, տաք վիճակում ավելի արագ), **բրոունյան շարժում** (ջրի մեջ ծաղկափոշու հատիկը պատահական թռիչքներ է անում, որովհետև մոլեկուլներն անհավասար են հարվածում նրան), գազերի սեղմելիությունը, առաձգականության ուժի գոյությունը, ատոմների լուսանկարներն էլեկտրոնային և թունելային մանրադիտակներով։

## Մոլեկուլների զանգված, նյութի քանակ

**Ավոգադրոյի թիվը** $N_A = 6{,}02 \\cdot 10^{23}$ մոլ⁻¹ մեկ մոլում մասնիկների թիվն է։ **Մոլային զանգվածը** $M$ (կգ/մոլ) թվապես հարաբերական մոլեկուլային զանգվածն է բաժանած $1000$-ի․ ջրի համար $M_r = 18$, $M = 0{,}018$ կգ/մոլ։

| մեծություն | բանաձև |
|---|---|
| մեկ մոլեկուլի զանգված | $m_0 = \\dfrac{M}{N_A}$ |
| նյութի քանակ | $\\nu = \\dfrac{m}{M} = \\dfrac{N}{N_A}$ |
| մոլեկուլների թիվ | $N = \\nu N_A = \\dfrac{m}{M} N_A$ |
| կոնցենտրացիա | $n = \\dfrac{N}{V}$ |

Ցանկացած գազի մեկ մոլը նորմալ պայմաններում ($0$ °C, $10^5$ Պա) զբաղեցնում է $22{,}4$ լ։

## Մոլեկուլների չափը

Մոլեկուլների չափը մոտ $10^{-10}$ մ $= 0{,}1$ նմ է։ Երկու գնահատական․ հեղուկում մեկ մոլեկուլին բաժին ընկնող ծավալը $V_0 = \\dfrac{m_0}{\\rho}$ է, և $d \\approx \\sqrt[3]{V_0}$, իսկ ջրի վրա մեկ մոլեկուլ հաստությամբ թաղանթի տարածված յուղի կաթիլի հաստությունը $h = \\dfrac{V}{S}$ է։

Գազում մոլեկուլների միջև միջին հեռավորությունը $\\ell \\approx \\dfrac{1}{\\sqrt[3]{n}}$ է՝ նորմալ պայմաններում մոտ տասը մոլեկուլային տրամագիծ, դրա համար գազերը հեշտ են սեղմվում, և դրանց մոլեկուլների փոխազդեցությունը հաճախ կարելի է անտեսել։

**Օրինակ 1։** Ջրի մոլեկուլ․ $m_0 = \\dfrac{0{,}018}{6{,}02 \\cdot 10^{23}} \\approx 3{,}0 \\cdot 10^{-26}$ կգ։

**Օրինակ 2։** $1$ գ ջրում $\\nu = \\dfrac{1}{18}$ մոլ $\\approx 0{,}056$ մոլ, $N = 0{,}056 \\cdot 6{,}02 \\cdot 10^{23} \\approx 3{,}3 \\cdot 10^{22}$ մոլեկուլ։ Մեկ խորանարդ սանտիմետր ջուրը պարունակում է երեսուներեք հազար միլիարդ միլիարդ մոլեկուլ։

**Օրինակ 3։** Ցանկացած գազի կոնցենտրացիան նորմալ պայմաններում․ $n = \\dfrac{6{,}02 \\cdot 10^{23}}{0{,}0224} \\approx 2{,}7 \\cdot 10^{25}$ մ⁻³ (Լոշմիդտի թիվ)։ Այն նույնն է ջրածնի և ածխաթթու գազի համար։

**Օրինակ 4։** Ածխաթթու գազ CO₂․ $M_r = 12 + 2 \\cdot 16 = 44$, $M = 0{,}044$ կգ/մոլ, $m_0 = \\dfrac{0{,}044}{6{,}02 \\cdot 10^{23}} \\approx 7{,}3 \\cdot 10^{-26}$ կգ, ջրի մոլեկուլի զանգվածի մոտ $2{,}4$ անգամը։

**Օրինակ 5։** Ջրի մոլեկուլի չափը․ $V_0 = \\dfrac{m_0}{\\rho} = \\dfrac{3{,}0 \\cdot 10^{-26}}{1000} = 3{,}0 \\cdot 10^{-29}$ մ³, $d \\approx \\sqrt[3]{3{,}0 \\cdot 10^{-29}} \\approx 3{,}1 \\cdot 10^{-10}$ մ։ Հեղուկում մոլեկուլները գործնականում հպվում են։

**Օրինակ 6։** $1$ մմ³ $= 10^{-9}$ մ³ ծավալով յուղի կաթիլը ջրի վրա տարածվում է $1$ մ² մակերեսով թաղանթի։ Հաստությունը $h = \\dfrac{10^{-9}}{1} = 10^{-9}$ մ $= 1$ նմ։ Թաղանթը մեկ մոլեկուլից բարակ լինել չի կարող, ուստի յուղի մոլեկուլն առավելագույնը մոտ $1$ նմ երկարություն ունի։

**Օրինակ 7։** Քանի՞ մոլեկուլ է $2$ կգ թթվածնում O₂ ($M = 0{,}032$ կգ/մոլ)։ $\\nu = \\dfrac{2}{0{,}032} = 62{,}5$ մոլ, $N = 62{,}5 \\cdot 6{,}02 \\cdot 10^{23} \\approx 3{,}8 \\cdot 10^{25}$։

**Օրինակ 8։** Օդի մոլեկուլների միջև միջին հեռավորությունը նորմալ պայմաններում․ $\\ell \\approx \\dfrac{1}{\\sqrt[3]{2{,}7 \\cdot 10^{25}}} \\approx 3{,}3 \\cdot 10^{-9}$ մ, մոտավորապես տասը տրամագիծ։ Հեղուկում նույն գնահատականը տալիս է $\\ell \\approx d$։

### Վարժություններ

1. Գտեք ազոտի N₂ մոլեկուլի զանգվածը ($M = 0{,}028$ կգ/մոլ)։
2. Քանի՞ մոլեկուլ է $4{,}4$ գ ածխաթթու գազում։
3. Գտեք մեթանի CH₄ մոլային զանգվածը։
4. Քանի՞ մոլեկուլ է $1$ սմ³ ջրում։
5. Ի՞նչ քանակի նյութ է $5{,}6 \\cdot 10^{24}$ մոլեկուլը։
6. Գնահատեք սնդիկի ատոմի տրամագիծը ($\\rho = 13\\,600$ կգ/մ³, $M = 0{,}2$ կգ/մոլ)։
7. $0{,}1$ մմ³ յուղի կաթիլը տարածվում է $0{,}1$ մ² թաղանթի։ Գտեք հաստությունը։
8. Գազի $3 \\cdot 10^{24}$ մոլեկուլը զբաղեցնում է $2$ լ։ Գտեք կոնցենտրացիան։

### Պատասխաններ

1. $4{,}7 \\cdot 10^{-26}$ կգ։ 2. $0{,}1$ մոլ, $6{,}0 \\cdot 10^{22}$։ 3. $12 + 4 = 16$ գ/մոլ $= 0{,}016$ կգ/մոլ։ 4. $1$ գ, $3{,}3 \\cdot 10^{22}$։ 5. $\\approx 9{,}3$ մոլ։ 6. $m_0 = 3{,}3 \\cdot 10^{-25}$ կգ, $V_0 = 2{,}4 \\cdot 10^{-29}$ մ³, $d \\approx 2{,}9 \\cdot 10^{-10}$ մ։ 7. $10^{-9}$ մ։ 8. $1{,}5 \\cdot 10^{27}$ մ⁻³։`,
        ru: `## Три положения

> **Молекулярно-кинетическая теория (МКТ)** опирается на три положения:
> 1. все вещества состоят из частиц (молекул, атомов, ионов), между которыми есть промежутки;
> 2. частицы движутся хаотически и непрерывно;
> 3. частицы взаимодействуют: на больших расстояниях притягиваются, при сжатии отталкиваются.

Доказательства: **диффузия** (самопроизвольное перемешивание веществ, быстрее при нагревании), **броуновское движение** (пылинка в воде беспорядочно дёргается, потому что молекулы ударяют её неравномерно), сжимаемость газов, существование силы упругости, фотографии атомов электронным и туннельным микроскопами.

## Масса молекул; количество вещества

**Число Авогадро** $N_A = 6{,}02 \\cdot 10^{23}$ моль⁻¹ — число частиц в одном моле. **Молярная масса** $M$ (кг/моль) численно равна относительной молекулярной массе, делённой на $1000$: для воды $M_r = 18$, $M = 0{,}018$ кг/моль.

| величина | формула |
|---|---|
| масса одной молекулы | $m_0 = \\dfrac{M}{N_A}$ |
| количество вещества | $\\nu = \\dfrac{m}{M} = \\dfrac{N}{N_A}$ |
| число молекул | $N = \\nu N_A = \\dfrac{m}{M} N_A$ |
| концентрация | $n = \\dfrac{N}{V}$ |

Один моль любого газа при нормальных условиях ($0$ °C, $10^5$ Па) занимает $22{,}4$ л.

## Размер молекул

Молекулы имеют размер около $10^{-10}$ м $= 0{,}1$ нм. Две оценки: объём, приходящийся на молекулу в жидкости, $V_0 = \\dfrac{m_0}{\\rho}$, и $d \\approx \\sqrt[3]{V_0}$; капля масла, растёкшаяся по воде плёнкой толщиной в одну молекулу, имеет толщину $h = \\dfrac{V}{S}$.

В газе среднее расстояние между молекулами $\\ell \\approx \\dfrac{1}{\\sqrt[3]{n}}$ — около десяти молекулярных диаметров при нормальных условиях; поэтому газы легко сжимаются, а взаимодействием их молекул часто можно пренебречь.

**Пример 1.** Молекула воды: $m_0 = \\dfrac{0{,}018}{6{,}02 \\cdot 10^{23}} \\approx 3{,}0 \\cdot 10^{-26}$ кг.

**Пример 2.** В $1$ г воды $\\nu = \\dfrac{1}{18}$ моль $\\approx 0{,}056$ моль, $N = 0{,}056 \\cdot 6{,}02 \\cdot 10^{23} \\approx 3{,}3 \\cdot 10^{22}$ молекул. Один кубический сантиметр воды содержит тридцать три тысячи миллиардов миллиардов молекул.

**Пример 3.** Концентрация любого газа при нормальных условиях: $n = \\dfrac{6{,}02 \\cdot 10^{23}}{0{,}0224} \\approx 2{,}7 \\cdot 10^{25}$ м⁻³ (число Лошмидта). Она одинакова для водорода и для углекислого газа.

**Пример 4.** Углекислый газ CO₂: $M_r = 12 + 2 \\cdot 16 = 44$, $M = 0{,}044$ кг/моль, $m_0 = \\dfrac{0{,}044}{6{,}02 \\cdot 10^{23}} \\approx 7{,}3 \\cdot 10^{-26}$ кг, примерно в $2{,}4$ раза больше массы молекулы воды.

**Пример 5.** Размер молекулы воды: $V_0 = \\dfrac{m_0}{\\rho} = \\dfrac{3{,}0 \\cdot 10^{-26}}{1000} = 3{,}0 \\cdot 10^{-29}$ м³, $d \\approx \\sqrt[3]{3{,}0 \\cdot 10^{-29}} \\approx 3{,}1 \\cdot 10^{-10}$ м. В жидкости молекулы практически касаются друг друга.

**Пример 6.** Капля масла объёмом $1$ мм³ $= 10^{-9}$ м³ растекается по воде плёнкой площадью $1$ м². Толщина $h = \\dfrac{10^{-9}}{1} = 10^{-9}$ м $= 1$ нм. Плёнка не может быть тоньше одной молекулы, поэтому молекула масла имеет длину не более примерно $1$ нм.

**Пример 7.** Сколько молекул в $2$ кг кислорода O₂ ($M = 0{,}032$ кг/моль)? $\\nu = \\dfrac{2}{0{,}032} = 62{,}5$ моль, $N = 62{,}5 \\cdot 6{,}02 \\cdot 10^{23} \\approx 3{,}8 \\cdot 10^{25}$.

**Пример 8.** Среднее расстояние между молекулами воздуха при нормальных условиях: $\\ell \\approx \\dfrac{1}{\\sqrt[3]{2{,}7 \\cdot 10^{25}}} \\approx 3{,}3 \\cdot 10^{-9}$ м, примерно десять диаметров. В жидкости та же оценка даёт $\\ell \\approx d$.

### Упражнения

1. Найдите массу молекулы азота N₂ ($M = 0{,}028$ кг/моль).
2. Сколько молекул в $4{,}4$ г углекислого газа?
3. Найдите молярную массу метана CH₄.
4. Сколько молекул в $1$ см³ воды?
5. Какое количество вещества составляют $5{,}6 \\cdot 10^{24}$ молекул?
6. Оцените диаметр атома ртути ($\\rho = 13\\,600$ кг/м³, $M = 0{,}2$ кг/моль).
7. Капля масла объёмом $0{,}1$ мм³ растекается плёнкой $0{,}1$ м². Найдите толщину.
8. $3 \\cdot 10^{24}$ молекул газа занимают $2$ л. Найдите концентрацию.

### Ответы

1. $4{,}7 \\cdot 10^{-26}$ кг. 2. $0{,}1$ моль, $6{,}0 \\cdot 10^{22}$. 3. $12 + 4 = 16$ г/моль $= 0{,}016$ кг/моль. 4. $1$ г, $3{,}3 \\cdot 10^{22}$. 5. $\\approx 9{,}3$ моль. 6. $m_0 = 3{,}3 \\cdot 10^{-25}$ кг, $V_0 = 2{,}4 \\cdot 10^{-29}$ м³, $d \\approx 2{,}9 \\cdot 10^{-10}$ м. 7. $10^{-9}$ м. 8. $1{,}5 \\cdot 10^{27}$ м⁻³.`,
      },
      [
        q(t("Brownian motion is evidence that…", "Բրոունյան շարժումն ապացուցում է, որ…", "Броуновское движение — свидетельство того, что…"), [t("molecules move chaotically", "մոլեկուլները շարժվում են քաոսային", "молекулы движутся хаотически"), t("molecules attract each other", "մոլեկուլները ձգում են միմյանց", "молекулы притягиваются"), t("molecules are large", "մոլեկուլները մեծ են", "молекулы велики")], 0),
        q(t("The Avogadro number is approximately…", "Ավոգադրոյի թիվը մոտավորապես…", "Число Авогадро приблизительно равно…"), [t("6.02 · 10²³ mol⁻¹", "6,02 · 10²³ մոլ⁻¹ է", "6,02 · 10²³ моль⁻¹"), t("1.6 · 10⁻¹⁹ mol⁻¹", "1,6 · 10⁻¹⁹ մոլ⁻¹ է", "1,6 · 10⁻¹⁹ моль⁻¹"), t("3 · 10⁸ mol⁻¹", "3 · 10⁸ մոլ⁻¹ է", "3 · 10⁸ моль⁻¹")], 0),
        q(t("The mass of one molecule equals…", "Մեկ մոլեկուլի զանգվածը հավասար է…", "Масса одной молекулы равна…"), [t("M · N_A", "M · N_A", "M · N_A"), t("M / N_A", "M / N_A", "M / N_A"), t("N_A / M", "N_A / M", "N_A / M")], 1),
        q(t("The molar mass of water is…", "Ջրի մոլային զանգվածը…", "Молярная масса воды равна…"), [t("18 kg/mol", "18 կգ/մոլ է", "18 кг/моль"), t("0.018 kg/mol", "0,018 կգ/մոլ է", "0,018 кг/моль"), t("1.8 kg/mol", "1,8 կգ/մոլ է", "1,8 кг/моль")], 1),
        q(t("The size of a molecule is of the order of…", "Մոլեկուլի չափը կարգով…", "Размер молекулы порядка…"), [t("10⁻⁶ m", "10⁻⁶ մ է", "10⁻⁶ м"), t("10⁻¹⁰ m", "10⁻¹⁰ մ է", "10⁻¹⁰ м"), t("10⁻¹⁵ m", "10⁻¹⁵ մ է", "10⁻¹⁵ м")], 1),
        q(t("In a gas at normal conditions the distance between molecules is about…", "Նորմալ պայմաններում գազում մոլեկուլների միջև հեռավորությունը մոտ…", "В газе при нормальных условиях расстояние между молекулами примерно…"), [t("equal to their size", "նրանց չափին հավասար է", "равно их размеру"), t("ten times their size", "նրանց չափի տասնապատիկն է", "в десять раз больше их размера"), t("a thousand times their size", "նրանց չափի հազարապատիկն է", "в тысячу раз больше их размера")], 1),
      ],
    ),
    lesson(
      "ideal-gas-equation",
      ["Ideal gas; basic MKT equation; temperature", "Իդեալական գազ, ՄԿՏ հիմնական հավասարում, ջերմաստիճան", "Идеальный газ; основное уравнение МКТ; температура"],
      {
        en: ["Describe the ideal gas model and write the basic MKT equation p = ⅓nm₀v² = ⅔nE", "Use absolute temperature as a measure of the mean kinetic energy: E = 3kT/2, p = nkT", "Compute the root-mean-square speed of molecules from the temperature and the molar mass"],
        hy: ["Նկարագրել իդեալական գազի մոդելը և գրել ՄԿՏ հիմնական հավասարումը p = ⅓nm₀v² = ⅔nE", "Օգտագործել բացարձակ ջերմաստիճանը որպես միջին կինետիկ էներգիայի չափ․ E = 3kT/2, p = nkT", "Հաշվել մոլեկուլների միջին քառակուսային արագությունը ջերմաստիճանից և մոլային զանգվածից"],
        ru: ["Описывать модель идеального газа и записывать основное уравнение МКТ p = ⅓nm₀v² = ⅔nE", "Использовать абсолютную температуру как меру средней кинетической энергии: E = 3kT/2, p = nkT", "Вычислять среднюю квадратичную скорость молекул по температуре и молярной массе"],
      },
      {
        en: `## The ideal gas model

> An **ideal gas** is a gas whose molecules are material points that do not interact except in perfectly elastic collisions. Real gases behave like an ideal gas when they are rarefied and far from condensing: air at room conditions is a good example.

Pressure arises from the impacts of molecules on the walls. Counting the impacts gives the **basic equation of MKT**:
$$p = \\dfrac13 n m_0 \\overline{v^2} = \\dfrac23 n \\overline{E}, \\qquad \\overline{E} = \\dfrac{m_0 \\overline{v^2}}{2},$$
where $n$ is the concentration, $m_0$ the mass of a molecule, $\\overline{v^2}$ the mean square of the speed and $\\overline{E}$ the mean kinetic energy of translational motion. The root-mean-square speed is $v_{\\text{rms}} = \\sqrt{\\overline{v^2}}$.

## Temperature

Bodies in thermal contact reach **thermal equilibrium**: the quantity that becomes equal is the temperature. Experiment shows that for all rarefied gases $\\dfrac{pV}{N}$ depends on the temperature alone; this defines the **absolute temperature** $T$ (kelvin):
$$T = t + 273, \\qquad \\overline{E} = \\dfrac32 kT, \\qquad k = 1{.}38 \\cdot 10^{-23}\\ \\text{J/K}.$$

> Absolute temperature is a measure of the mean kinetic energy of molecules. At $T = 0$ K ($-273$ °C) the thermal motion would stop; this is the absolute zero, which cannot be reached.

Combining the two formulas: $p = nkT$. With $R = kN_A = 8{.}31$ J/(mol·K):
$$v_{\\text{rms}} = \\sqrt{\\dfrac{3kT}{m_0}} = \\sqrt{\\dfrac{3RT}{M}}.$$
At the same temperature lighter molecules move faster; the mean kinetic energy is the same for all gases.

**Example 1.** $27$ °C $= 300$ K, $-73$ °C $= 200$ K, $0$ K $= -273$ °C. A change of $1$ K equals a change of $1$ °C, so a temperature difference is the same in both scales.

**Example 2.** Mean kinetic energy of a molecule at $300$ K: $\\overline{E} = 1{.}5 \\cdot 1{.}38 \\cdot 10^{-23} \\cdot 300 \\approx 6{.}2 \\cdot 10^{-21}$ J, for any gas.

**Example 3.** Root-mean-square speed of oxygen ($M = 0{.}032$) at $300$ K: $v = \\sqrt{\\dfrac{3 \\cdot 8{.}31 \\cdot 300}{0{.}032}} \\approx \\sqrt{234\\,000} \\approx 480$ m/s. For hydrogen ($M = 0{.}002$): $\\approx 1900$ m/s, four times faster.

**Example 4.** Pressure at normal conditions from $p = nkT$: $n = 2{.}7 \\cdot 10^{25}$ m⁻³, $T = 273$ K, $p = 2{.}7 \\cdot 10^{25} \\cdot 1{.}38 \\cdot 10^{-23} \\cdot 273 \\approx 1{.}0 \\cdot 10^5$ Pa. The theory reproduces atmospheric pressure.

**Example 5.** Concentration of air molecules in a room at $10^5$ Pa and $300$ K: $n = \\dfrac{p}{kT} = \\dfrac{10^5}{1{.}38 \\cdot 10^{-23} \\cdot 300} \\approx 2{.}4 \\cdot 10^{25}$ m⁻³.

**Example 6.** $n = 3 \\cdot 10^{25}$ m⁻³ and $\\overline{E} = 5 \\cdot 10^{-21}$ J: $p = \\dfrac23 \\cdot 3 \\cdot 10^{25} \\cdot 5 \\cdot 10^{-21} = 10^5$ Pa. The temperature is $T = \\dfrac{2\\overline{E}}{3k} \\approx 240$ K.

**Example 7.** At which temperature is the rms speed of nitrogen ($M = 0{.}028$) equal to $500$ m/s? $T = \\dfrac{M v^2}{3R} = \\dfrac{0{.}028 \\cdot 250\\,000}{24{.}9} \\approx 280$ K $\\approx 7$ °C.

**Example 8.** A gas is heated from $300$ K to $1200$ K. The mean kinetic energy grows $4$ times, the rms speed $2$ times. If the volume is fixed, $n$ is unchanged and $p = nkT$ grows $4$ times.

### Exercises

1. Convert $127$ °C to kelvin and $100$ K to degrees Celsius.
2. Find the mean kinetic energy of a molecule at $400$ K.
3. Find the rms speed of nitrogen at $300$ K.
4. Find the concentration of molecules at $2 \\cdot 10^5$ Pa and $400$ K.
5. Find the pressure of a gas with $n = 5 \\cdot 10^{25}$ m⁻³ at $300$ K.
6. At which temperature is the mean kinetic energy of a molecule $1{.}0 \\cdot 10^{-20}$ J?
7. Find the ratio of the rms speeds of hydrogen and oxygen at the same temperature.
8. $n = 2 \\cdot 10^{25}$ m⁻³, $\\overline{E} = 6 \\cdot 10^{-21}$ J. Find the pressure.

### Answers

1. $400$ K; $-173$ °C. 2. $8{.}3 \\cdot 10^{-21}$ J. 3. $\\sqrt{\\dfrac{3 \\cdot 8{.}31 \\cdot 300}{0{.}028}} \\approx 520$ m/s. 4. $3{.}6 \\cdot 10^{25}$ m⁻³. 5. $2{.}1 \\cdot 10^5$ Pa. 6. $T = \\dfrac{2 \\cdot 10^{-20}}{3 \\cdot 1{.}38 \\cdot 10^{-23}} \\approx 480$ K. 7. $\\sqrt{\\dfrac{32}{2}} = 4$. 8. $8 \\cdot 10^4$ Pa.`,
        hy: `## Իդեալական գազի մոդելը

> **Իդեալական գազն** այն գազն է, որի մոլեկուլները նյութական կետեր են, որոնք փոխազդում են միայն բացարձակ առաձգական բախումների ժամանակ։ Իրական գազերն իդեալականի նման են վարվում, երբ նոսր են և հեռու են խտացումից․ սենյակային պայմաններում օդը լավ օրինակ է։

Ճնշումն առաջանում է պատերին մոլեկուլների հարվածներից։ Հարվածների հաշվարկը տալիս է **ՄԿՏ հիմնական հավասարումը**․
$$p = \\dfrac13 n m_0 \\overline{v^2} = \\dfrac23 n \\overline{E}, \\qquad \\overline{E} = \\dfrac{m_0 \\overline{v^2}}{2}$$
որտեղ $n$-ը կոնցենտրացիան է, $m_0$-ն մոլեկուլի զանգվածը, $\\overline{v^2}$-ը արագության քառակուսու միջինը, $\\overline{E}$-ն համընթաց շարժման միջին կինետիկ էներգիան։ Միջին քառակուսային արագությունը $v_{\\text{մք}} = \\sqrt{\\overline{v^2}}$ է։

## Ջերմաստիճան

Ջերմային հպման մեջ գտնվող մարմինները հասնում են **ջերմային հավասարակշռության**․ հավասարվող մեծությունը ջերմաստիճանն է։ Փորձը ցույց է տալիս, որ բոլոր նոսր գազերի համար $\\dfrac{pV}{N}$-ը կախված է միայն ջերմաստիճանից, դա սահմանում է **բացարձակ ջերմաստիճանը** $T$ (կելվին)․
$$T = t + 273, \\qquad \\overline{E} = \\dfrac32 kT, \\qquad k = 1{,}38 \\cdot 10^{-23}\\ \\text{Ջ/Կ}$$

> Բացարձակ ջերմաստիճանը մոլեկուլների միջին կինետիկ էներգիայի չափ է։ $T = 0$ Կ ($-273$ °C) դեպքում ջերմային շարժումը կդադարեր, դա բացարձակ զրոն է, որին հասնել հնարավոր չէ։

Երկու բանաձևերը միացնելով․ $p = nkT$։ $R = kN_A = 8{,}31$ Ջ/(մոլ·Կ) դեպքում․
$$v_{\\text{մք}} = \\sqrt{\\dfrac{3kT}{m_0}} = \\sqrt{\\dfrac{3RT}{M}}$$
Նույն ջերմաստիճանում թեթև մոլեկուլներն ավելի արագ են շարժվում, միջին կինետիկ էներգիան բոլոր գազերի համար նույնն է։

**Օրինակ 1։** $27$ °C $= 300$ Կ, $-73$ °C $= 200$ Կ, $0$ Կ $= -273$ °C է։ $1$ Կ փոփոխությունը հավասար է $1$ °C փոփոխության, ուստի ջերմաստիճանների տարբերությունն երկու սանդղակներում նույնն է։

**Օրինակ 2։** Մոլեկուլի միջին կինետիկ էներգիան $300$ Կ-ում․ $\\overline{E} = 1{,}5 \\cdot 1{,}38 \\cdot 10^{-23} \\cdot 300 \\approx 6{,}2 \\cdot 10^{-21}$ Ջ՝ ցանկացած գազի համար։

**Օրինակ 3։** Թթվածնի ($M = 0{,}032$) միջին քառակուսային արագությունը $300$ Կ-ում․ $v = \\sqrt{\\dfrac{3 \\cdot 8{,}31 \\cdot 300}{0{,}032}} \\approx \\sqrt{234\\,000} \\approx 480$ մ/վ։ Ջրածնի համար ($M = 0{,}002$)․ $\\approx 1900$ մ/վ, չորս անգամ արագ։

**Օրինակ 4։** Ճնշումը նորմալ պայմաններում $p = nkT$-ից․ $n = 2{,}7 \\cdot 10^{25}$ մ⁻³, $T = 273$ Կ, $p = 2{,}7 \\cdot 10^{25} \\cdot 1{,}38 \\cdot 10^{-23} \\cdot 273 \\approx 1{,}0 \\cdot 10^5$ Պա։ Տեսությունը վերարտադրում է մթնոլորտային ճնշումը։

**Օրինակ 5։** Օդի մոլեկուլների կոնցենտրացիան սենյակում $10^5$ Պա և $300$ Կ դեպքում․ $n = \\dfrac{p}{kT} = \\dfrac{10^5}{1{,}38 \\cdot 10^{-23} \\cdot 300} \\approx 2{,}4 \\cdot 10^{25}$ մ⁻³։

**Օրինակ 6։** $n = 3 \\cdot 10^{25}$ մ⁻³ և $\\overline{E} = 5 \\cdot 10^{-21}$ Ջ․ $p = \\dfrac23 \\cdot 3 \\cdot 10^{25} \\cdot 5 \\cdot 10^{-21} = 10^5$ Պա։ Ջերմաստիճանը $T = \\dfrac{2\\overline{E}}{3k} \\approx 240$ Կ է։

**Օրինակ 7։** Ո՞ր ջերմաստիճանում է ազոտի ($M = 0{,}028$) միջին քառակուսային արագությունը $500$ մ/վ։ $T = \\dfrac{M v^2}{3R} = \\dfrac{0{,}028 \\cdot 250\\,000}{24{,}9} \\approx 280$ Կ $\\approx 7$ °C է։

**Օրինակ 8։** Գազը տաքացվում է $300$ Կ-ից $1200$ Կ։ Միջին կինետիկ էներգիան աճում է $4$ անգամ, միջին քառակուսային արագությունը՝ $2$ անգամ։ Եթե ծավալը հաստատուն է, $n$-ը չի փոխվում, և $p = nkT$-ն աճում է $4$ անգամ։

### Վարժություններ

1. $127$ °C-ը դարձրեք կելվին, $100$ Կ-ը՝ Ցելսիուսի աստիճան։
2. Գտեք մոլեկուլի միջին կինետիկ էներգիան $400$ Կ-ում։
3. Գտեք ազոտի միջին քառակուսային արագությունը $300$ Կ-ում։
4. Գտեք մոլեկուլների կոնցենտրացիան $2 \\cdot 10^5$ Պա և $400$ Կ դեպքում։
5. Գտեք $n = 5 \\cdot 10^{25}$ մ⁻³ կոնցենտրացիայով գազի ճնշումը $300$ Կ-ում։
6. Ո՞ր ջերմաստիճանում է մոլեկուլի միջին կինետիկ էներգիան $1{,}0 \\cdot 10^{-20}$ Ջ։
7. Գտեք ջրածնի և թթվածնի միջին քառակուսային արագությունների հարաբերությունը նույն ջերմաստիճանում։
8. $n = 2 \\cdot 10^{25}$ մ⁻³, $\\overline{E} = 6 \\cdot 10^{-21}$ Ջ։ Գտեք ճնշումը։

### Պատասխաններ

1. $400$ Կ, $-173$ °C է։ 2. $8{,}3 \\cdot 10^{-21}$ Ջ։ 3. $\\sqrt{\\dfrac{3 \\cdot 8{,}31 \\cdot 300}{0{,}028}} \\approx 520$ մ/վ։ 4. $3{,}6 \\cdot 10^{25}$ մ⁻³։ 5. $2{,}1 \\cdot 10^5$ Պա։ 6. $T = \\dfrac{2 \\cdot 10^{-20}}{3 \\cdot 1{,}38 \\cdot 10^{-23}} \\approx 480$ Կ։ 7. $\\sqrt{\\dfrac{32}{2}} = 4$։ 8. $8 \\cdot 10^4$ Պա։`,
        ru: `## Модель идеального газа

> **Идеальный газ** — газ, молекулы которого являются материальными точками и взаимодействуют только при абсолютно упругих столкновениях. Реальные газы ведут себя как идеальный, когда они разрежены и далеки от конденсации: воздух при комнатных условиях — хороший пример.

Давление возникает от ударов молекул о стенки. Подсчёт ударов даёт **основное уравнение МКТ**:
$$p = \\dfrac13 n m_0 \\overline{v^2} = \\dfrac23 n \\overline{E}, \\qquad \\overline{E} = \\dfrac{m_0 \\overline{v^2}}{2},$$
где $n$ — концентрация, $m_0$ — масса молекулы, $\\overline{v^2}$ — средний квадрат скорости, $\\overline{E}$ — средняя кинетическая энергия поступательного движения. Средняя квадратичная скорость $v_{\\text{кв}} = \\sqrt{\\overline{v^2}}$.

## Температура

Тела в тепловом контакте приходят к **тепловому равновесию**: величина, которая выравнивается, — температура. Опыт показывает, что для всех разреженных газов $\\dfrac{pV}{N}$ зависит только от температуры; это определяет **абсолютную температуру** $T$ (кельвин):
$$T = t + 273, \\qquad \\overline{E} = \\dfrac32 kT, \\qquad k = 1{,}38 \\cdot 10^{-23}\\ \\text{Дж/К}.$$

> Абсолютная температура — мера средней кинетической энергии молекул. При $T = 0$ К ($-273$ °C) тепловое движение прекратилось бы; это абсолютный нуль, недостижимый на практике.

Объединяя формулы: $p = nkT$. При $R = kN_A = 8{,}31$ Дж/(моль·К):
$$v_{\\text{кв}} = \\sqrt{\\dfrac{3kT}{m_0}} = \\sqrt{\\dfrac{3RT}{M}}.$$
При одной температуре лёгкие молекулы движутся быстрее; средняя кинетическая энергия одинакова для всех газов.

**Пример 1.** $27$ °C $= 300$ К, $-73$ °C $= 200$ К, $0$ К $= -273$ °C. Изменение на $1$ К равно изменению на $1$ °C, поэтому разность температур одинакова в обеих шкалах.

**Пример 2.** Средняя кинетическая энергия молекулы при $300$ К: $\\overline{E} = 1{,}5 \\cdot 1{,}38 \\cdot 10^{-23} \\cdot 300 \\approx 6{,}2 \\cdot 10^{-21}$ Дж, для любого газа.

**Пример 3.** Средняя квадратичная скорость кислорода ($M = 0{,}032$) при $300$ К: $v = \\sqrt{\\dfrac{3 \\cdot 8{,}31 \\cdot 300}{0{,}032}} \\approx \\sqrt{234\\,000} \\approx 480$ м/с. Для водорода ($M = 0{,}002$): $\\approx 1900$ м/с, в четыре раза быстрее.

**Пример 4.** Давление при нормальных условиях из $p = nkT$: $n = 2{,}7 \\cdot 10^{25}$ м⁻³, $T = 273$ К, $p = 2{,}7 \\cdot 10^{25} \\cdot 1{,}38 \\cdot 10^{-23} \\cdot 273 \\approx 1{,}0 \\cdot 10^5$ Па. Теория воспроизводит атмосферное давление.

**Пример 5.** Концентрация молекул воздуха в комнате при $10^5$ Па и $300$ К: $n = \\dfrac{p}{kT} = \\dfrac{10^5}{1{,}38 \\cdot 10^{-23} \\cdot 300} \\approx 2{,}4 \\cdot 10^{25}$ м⁻³.

**Пример 6.** $n = 3 \\cdot 10^{25}$ м⁻³ и $\\overline{E} = 5 \\cdot 10^{-21}$ Дж: $p = \\dfrac23 \\cdot 3 \\cdot 10^{25} \\cdot 5 \\cdot 10^{-21} = 10^5$ Па. Температура $T = \\dfrac{2\\overline{E}}{3k} \\approx 240$ К.

**Пример 7.** При какой температуре средняя квадратичная скорость азота ($M = 0{,}028$) равна $500$ м/с? $T = \\dfrac{M v^2}{3R} = \\dfrac{0{,}028 \\cdot 250\\,000}{24{,}9} \\approx 280$ К $\\approx 7$ °C.

**Пример 8.** Газ нагревают от $300$ К до $1200$ К. Средняя кинетическая энергия растёт в $4$ раза, средняя квадратичная скорость — в $2$ раза. Если объём постоянен, $n$ не меняется и $p = nkT$ растёт в $4$ раза.

### Упражнения

1. Переведите $127$ °C в кельвины и $100$ К в градусы Цельсия.
2. Найдите среднюю кинетическую энергию молекулы при $400$ К.
3. Найдите среднюю квадратичную скорость азота при $300$ К.
4. Найдите концентрацию молекул при $2 \\cdot 10^5$ Па и $400$ К.
5. Найдите давление газа с $n = 5 \\cdot 10^{25}$ м⁻³ при $300$ К.
6. При какой температуре средняя кинетическая энергия молекулы равна $1{,}0 \\cdot 10^{-20}$ Дж?
7. Найдите отношение средних квадратичных скоростей водорода и кислорода при одной температуре.
8. $n = 2 \\cdot 10^{25}$ м⁻³, $\\overline{E} = 6 \\cdot 10^{-21}$ Дж. Найдите давление.

### Ответы

1. $400$ К; $-173$ °C. 2. $8{,}3 \\cdot 10^{-21}$ Дж. 3. $\\sqrt{\\dfrac{3 \\cdot 8{,}31 \\cdot 300}{0{,}028}} \\approx 520$ м/с. 4. $3{,}6 \\cdot 10^{25}$ м⁻³. 5. $2{,}1 \\cdot 10^5$ Па. 6. $T = \\dfrac{2 \\cdot 10^{-20}}{3 \\cdot 1{,}38 \\cdot 10^{-23}} \\approx 480$ К. 7. $\\sqrt{\\dfrac{32}{2}} = 4$. 8. $8 \\cdot 10^4$ Па.`,
      },
      [
        q(t("In the ideal gas model the molecules…", "Իդեալական գազի մոդելում մոլեկուլները…", "В модели идеального газа молекулы…"), [t("attract each other strongly", "ուժեղ ձգում են միմյանց", "сильно притягиваются"), t("interact only in elastic collisions", "փոխազդում են միայն առաձգական բախումների ժամանակ", "взаимодействуют только при упругих столкновениях"), t("do not move", "չեն շարժվում", "не движутся")], 1),
        q(t("Absolute temperature is a measure of…", "Բացարձակ ջերմաստիճանը չափ է…", "Абсолютная температура — мера…"), [t("the mean kinetic energy of molecules", "մոլեկուլների միջին կինետիկ էներգիայի", "средней кинетической энергии молекул"), t("the number of molecules", "մոլեկուլների թվի", "числа молекул"), t("the pressure", "ճնշման", "давления")], 0),
        q(t("27 °C equals…", "27 °C-ը հավասար է…", "27 °C равно…"), [t("27 K", "27 Կ", "27 К"), t("246 K", "246 Կ", "246 К"), t("300 K", "300 Կ", "300 К")], 2),
        q(t("At the same temperature hydrogen molecules compared with oxygen molecules…", "Նույն ջերմաստիճանում ջրածնի մոլեկուլները թթվածնի մոլեկուլների համեմատ…", "При одной температуре молекулы водорода по сравнению с молекулами кислорода…"), [t("move faster, same mean energy", "ավելի արագ են շարժվում, միջին էներգիան նույնն է", "движутся быстрее, средняя энергия та же"), t("move slower", "ավելի դանդաղ են շարժվում", "движутся медленнее"), t("have larger mean energy", "ավելի մեծ միջին էներգիա ունեն", "имеют большую среднюю энергию")], 0),
        q(t("The pressure of an ideal gas is given by…", "Իդեալական գազի ճնշումը տրվում է…", "Давление идеального газа задаётся формулой…"), [t("p = nkT", "p = nkT", "p = nkT"), t("p = nk/T", "p = nk/T", "p = nk/T"), t("p = kT/n", "p = kT/n", "p = kT/n")], 0),
        q(t("If the absolute temperature is quadrupled, the rms speed…", "Եթե բացարձակ ջերմաստիճանը քառապատկվի, միջին քառակուսային արագությունը…", "Если абсолютную температуру увеличить в 4 раза, средняя квадратичная скорость…"), [t("doubles", "կկրկնապատկվի", "удвоится"), t("quadruples", "կքառապատկվի", "вырастет в 4 раза"), t("grows 16 times", "16 անգամ կաճի", "вырастет в 16 раз")], 0),
      ],
    ),
    lesson(
      "gas-laws",
      ["Equation of state; isoprocesses", "Վիճակի հավասարում, իզոպրոցեսներ", "Уравнение состояния; изопроцессы"],
      {
        en: ["Write the Mendeleev-Clapeyron equation pV = (m/M)RT and use it for mass, volume, density of a gas", "Derive the three isoprocess laws from the equation of state and draw their graphs in the pV, pT and VT planes", "Solve problems where two or three parameters change, including bubbles under water and gas mixtures"],
        hy: ["Գրել Մենդելեև-Կլապեյրոնի հավասարումը pV = (m/M)RT և կիրառել գազի զանգվածի, ծավալի, խտության համար", "Վիճակի հավասարումից արտածել երեք իզոպրոցեսների օրենքները և գծել դրանց գրաֆիկները pV, pT և VT հարթություններում", "Լուծել խնդիրներ, որտեղ երկու կամ երեք պարամետր է փոխվում, այդ թվում ջրի տակ պղպջակների և գազային խառնուրդների մասին"],
        ru: ["Записывать уравнение Менделеева-Клапейрона pV = (m/M)RT и применять его для массы, объёма, плотности газа", "Выводить из уравнения состояния законы трёх изопроцессов и строить их графики в плоскостях pV, pT и VT", "Решать задачи, где меняются два или три параметра, в том числе о пузырьках под водой и смесях газов"],
      },
      {
        en: `## Equation of state

From $p = nkT$ and $n = \\dfrac{N}{V}$, $N = \\dfrac{m}{M} N_A$, $R = k N_A$:

> **Mendeleev-Clapeyron equation.** $pV = \\dfrac{m}{M} RT = \\nu RT$, with $R = 8{.}31$ J/(mol·K).

Useful consequences: the density of a gas $\\rho = \\dfrac{m}{V} = \\dfrac{pM}{RT}$; for a fixed mass of gas $\\dfrac{pV}{T} = \\text{const}$ (the Clapeyron equation), i.e. $\\dfrac{p_1 V_1}{T_1} = \\dfrac{p_2 V_2}{T_2}$. For a mixture, **Dalton's law**: the pressure is the sum of the partial pressures, $p = p_1 + p_2 + \\dots$

Normal conditions: $p_0 = 1{.}013 \\cdot 10^5$ Pa, $T_0 = 273$ K; one mole occupies $22{.}4$ L. In problems we round $p_0$ to $10^5$ Pa.

## Isoprocesses

| process | constant | law | graph |
|---|---|---|---|
| isothermal | $T$ | $pV = \\text{const}$ (Boyle-Mariotte) | hyperbola in $pV$ |
| isobaric | $p$ | $\\dfrac{V}{T} = \\text{const}$ (Gay-Lussac) | line through the origin in $VT$ |
| isochoric | $V$ | $\\dfrac{p}{T} = \\text{const}$ (Charles) | line through the origin in $pT$ |

In the $pV$ plane an isobar is a horizontal line and an isochore a vertical one; in the $pT$ and $VT$ planes the isotherms are vertical lines. The graphs in Celsius degrees do not pass through the origin: the straight lines point to $-273$ °C.

**Example 1.** Volume of one mole at $10^5$ Pa and $273$ K: $V = \\dfrac{RT}{p} = \\dfrac{8{.}31 \\cdot 273}{10^5} \\approx 0{.}0227$ m³ $\\approx 22{.}7$ L; with the exact $p_0$ this is $22{.}4$ L.

**Example 2.** Mass of air in a room $5 \\times 4 \\times 3$ m at $10^5$ Pa and $300$ K ($M = 0{.}029$ kg/mol): $m = \\dfrac{pVM}{RT} = \\dfrac{10^5 \\cdot 60 \\cdot 0{.}029}{8{.}31 \\cdot 300} \\approx 70$ kg. The air in a room weighs as much as a person.

**Example 3.** Isothermal compression of $6$ L of gas at $10^5$ Pa to $2$ L: $p_2 = \\dfrac{p_1 V_1}{V_2} = 3 \\cdot 10^5$ Pa. Three times smaller volume, three times greater pressure.

**Example 4.** Isochoric heating: a tyre at $27$ °C has $2 \\cdot 10^5$ Pa; at $57$ °C, $p_2 = p_1 \\dfrac{T_2}{T_1} = 2 \\cdot 10^5 \\cdot \\dfrac{330}{300} = 2{.}2 \\cdot 10^5$ Pa. Note that $57/27$ would give a wrong answer: use kelvin.

**Example 5.** Isobaric expansion: $3$ L of gas at $300$ K is heated to $400$ K at constant pressure: $V_2 = 3 \\cdot \\dfrac{400}{300} = 4$ L.

**Example 6.** All three parameters change: $p_1 = 10^5$ Pa, $V_1 = 2$ L, $T_1 = 300$ K; the gas is brought to $p_2 = 2 \\cdot 10^5$ Pa and $T_2 = 450$ K. $V_2 = \\dfrac{p_1 V_1 T_2}{T_1 p_2} = \\dfrac{10^5 \\cdot 2 \\cdot 450}{300 \\cdot 2 \\cdot 10^5} = 1{.}5$ L.

**Example 7.** Density of oxygen at normal conditions: $\\rho = \\dfrac{pM}{RT} = \\dfrac{10^5 \\cdot 0{.}032}{8{.}31 \\cdot 273} \\approx 1{.}41$ kg/m³; for air $\\approx 1{.}28$ kg/m³, for hydrogen $\\approx 0{.}09$ kg/m³. Density is proportional to the molar mass.

**Example 8.** An air bubble rises from a depth of $20$ m, where the pressure is $10^5 + 1000 \\cdot 10 \\cdot 20 = 3 \\cdot 10^5$ Pa, to the surface at the same temperature: its volume grows $3$ times. A mixture of $2$ mol O₂ and $8$ mol N₂ in $0{.}1$ m³ at $300$ K has $p = \\dfrac{10 \\cdot 8{.}31 \\cdot 300}{0{.}1} \\approx 2{.}5 \\cdot 10^5$ Pa, of which oxygen contributes one fifth, $\\approx 5 \\cdot 10^4$ Pa.

### Exercises

1. Find the volume of $2$ mol of gas at $2 \\cdot 10^5$ Pa and $400$ K.
2. Find the mass of oxygen in a $10$ L cylinder at $1{.}5 \\cdot 10^7$ Pa and $300$ K.
3. $4$ L of gas at $3 \\cdot 10^5$ Pa expands isothermally to $10^5$ Pa. Find the volume.
4. A gas at $300$ K and $10^5$ Pa is heated isochorically to $600$ K. Find the pressure.
5. $2$ L of gas at $27$ °C is heated isobarically to $327$ °C. Find the volume.
6. $p_1 = 2 \\cdot 10^5$ Pa, $V_1 = 3$ L, $T_1 = 300$ K; $V_2 = 2$ L, $T_2 = 400$ K. Find $p_2$.
7. Find the density of hydrogen at $10^5$ Pa and $300$ K.
8. A bubble doubles its volume while rising to the surface at constant temperature. From what depth did it rise?

### Answers

1. $V = \\dfrac{2 \\cdot 8{.}31 \\cdot 400}{2 \\cdot 10^5} \\approx 0{.}033$ m³ $= 33$ L. 2. $m = \\dfrac{1{.}5 \\cdot 10^7 \\cdot 0{.}01 \\cdot 0{.}032}{8{.}31 \\cdot 300} \\approx 1{.}9$ kg. 3. $12$ L. 4. $2 \\cdot 10^5$ Pa. 5. $V = 2 \\cdot \\dfrac{600}{300} = 4$ L. 6. $p_2 = \\dfrac{2 \\cdot 10^5 \\cdot 3 \\cdot 400}{2 \\cdot 300} = 4 \\cdot 10^5$ Pa. 7. $\\dfrac{10^5 \\cdot 0{.}002}{8{.}31 \\cdot 300} \\approx 0{.}08$ kg/m³. 8. The pressure was $2 \\cdot 10^5$ Pa, so $\\rho g h = 10^5$, $h = 10$ m.`,
        hy: `## Վիճակի հավասարում

$p = nkT$-ից և $n = \\dfrac{N}{V}$, $N = \\dfrac{m}{M} N_A$, $R = k N_A$-ից․

> **Մենդելեև-Կլապեյրոնի հավասարում։** $pV = \\dfrac{m}{M} RT = \\nu RT$, որտեղ $R = 8{,}31$ Ջ/(մոլ·Կ)։

Օգտակար հետևանքներ․ գազի խտությունը $\\rho = \\dfrac{m}{V} = \\dfrac{pM}{RT}$, գազի հաստատուն զանգվածի համար $\\dfrac{pV}{T} = \\text{const}$ (Կլապեյրոնի հավասարում), այսինքն $\\dfrac{p_1 V_1}{T_1} = \\dfrac{p_2 V_2}{T_2}$։ Խառնուրդի համար **Դալտոնի օրենքը**․ ճնշումը մասնակի ճնշումների գումարն է, $p = p_1 + p_2 + \\dots$

Նորմալ պայմաններ․ $p_0 = 1{,}013 \\cdot 10^5$ Պա, $T_0 = 273$ Կ, մեկ մոլը զբաղեցնում է $22{,}4$ լ։ Խնդիրներում $p_0$-ն կլորացնում ենք $10^5$ Պա։

## Իզոպրոցեսներ

| պրոցես | հաստատուն | օրենք | գրաֆիկ |
|---|---|---|---|
| իզոթերմ | $T$ | $pV = \\text{const}$ (Բոյլ-Մարիոտ) | հիպերբոլ $pV$-ում |
| իզոբար | $p$ | $\\dfrac{V}{T} = \\text{const}$ (Գեյ-Լյուսակ) | սկզբնակետով ուղիղ $VT$-ում |
| իզոխոր | $V$ | $\\dfrac{p}{T} = \\text{const}$ (Շառլ) | սկզբնակետով ուղիղ $pT$-ում |

$pV$ հարթությունում իզոբարը հորիզոնական ուղիղ է, իզոխորը՝ ուղղաձիգ, $pT$ և $VT$ հարթություններում իզոթերմերն ուղղաձիգ ուղիղներ են։ Ցելսիուսի աստիճաններով գրաֆիկները սկզբնակետով չեն անցնում․ ուղիղներն ուղղված են $-273$ °C կետին։

**Օրինակ 1։** Մեկ մոլի ծավալը $10^5$ Պա և $273$ Կ դեպքում․ $V = \\dfrac{RT}{p} = \\dfrac{8{,}31 \\cdot 273}{10^5} \\approx 0{,}0227$ մ³ $\\approx 22{,}7$ լ, ճշգրիտ $p_0$-ի դեպքում՝ $22{,}4$ լ։

**Օրինակ 2։** Օդի զանգվածը $5 \\times 4 \\times 3$ մ սենյակում $10^5$ Պա և $300$ Կ դեպքում ($M = 0{,}029$ կգ/մոլ)․ $m = \\dfrac{pVM}{RT} = \\dfrac{10^5 \\cdot 60 \\cdot 0{,}029}{8{,}31 \\cdot 300} \\approx 70$ կգ։ Սենյակի օդը կշռում է մարդու չափ։

**Օրինակ 3։** $10^5$ Պա ճնշման տակ $6$ լ գազի իզոթերմ սեղմում մինչև $2$ լ․ $p_2 = \\dfrac{p_1 V_1}{V_2} = 3 \\cdot 10^5$ Պա։ Երեք անգամ փոքր ծավալ, երեք անգամ մեծ ճնշում։

**Օրինակ 4։** Իզոխոր տաքացում․ անվադողում $27$ °C դեպքում $2 \\cdot 10^5$ Պա է, $57$ °C դեպքում $p_2 = p_1 \\dfrac{T_2}{T_1} = 2 \\cdot 10^5 \\cdot \\dfrac{330}{300} = 2{,}2 \\cdot 10^5$ Պա։ Նկատենք, որ $57/27$-ը սխալ պատասխան կտար․ օգտագործեք կելվին։

**Օրինակ 5։** Իզոբար ընդարձակում․ $300$ Կ-ում $3$ լ գազը հաստատուն ճնշման տակ տաքացվում է մինչև $400$ Կ․ $V_2 = 3 \\cdot \\dfrac{400}{300} = 4$ լ։

**Օրինակ 6։** Երեք պարամետրն էլ փոխվում են․ $p_1 = 10^5$ Պա, $V_1 = 2$ լ, $T_1 = 300$ Կ, գազը բերվում է $p_2 = 2 \\cdot 10^5$ Պա և $T_2 = 450$ Կ վիճակի։ $V_2 = \\dfrac{p_1 V_1 T_2}{T_1 p_2} = \\dfrac{10^5 \\cdot 2 \\cdot 450}{300 \\cdot 2 \\cdot 10^5} = 1{,}5$ լ։

**Օրինակ 7։** Թթվածնի խտությունը նորմալ պայմաններում․ $\\rho = \\dfrac{pM}{RT} = \\dfrac{10^5 \\cdot 0{,}032}{8{,}31 \\cdot 273} \\approx 1{,}41$ կգ/մ³, օդի համար $\\approx 1{,}28$ կգ/մ³, ջրածնի համար $\\approx 0{,}09$ կգ/մ³։ Խտությունը համեմատական է մոլային զանգվածին։

**Օրինակ 8։** Օդի պղպջակը բարձրանում է $20$ մ խորությունից, որտեղ ճնշումը $10^5 + 1000 \\cdot 10 \\cdot 20 = 3 \\cdot 10^5$ Պա է, մակերևույթ նույն ջերմաստիճանում․ ծավալն աճում է $3$ անգամ։ $2$ մոլ O₂-ի և $8$ մոլ N₂-ի խառնուրդը $0{,}1$ մ³-ում $300$ Կ-ում ունի $p = \\dfrac{10 \\cdot 8{,}31 \\cdot 300}{0{,}1} \\approx 2{,}5 \\cdot 10^5$ Պա, որից թթվածնի բաժինը մեկ հինգերորդն է, $\\approx 5 \\cdot 10^4$ Պա։

### Վարժություններ

1. Գտեք $2$ մոլ գազի ծավալը $2 \\cdot 10^5$ Պա և $400$ Կ դեպքում։
2. Գտեք թթվածնի զանգվածը $10$ լ բալոնում $1{,}5 \\cdot 10^7$ Պա և $300$ Կ դեպքում։
3. $3 \\cdot 10^5$ Պա ճնշման տակ $4$ լ գազն իզոթերմ ընդարձակվում է մինչև $10^5$ Պա։ Գտեք ծավալը։
4. $300$ Կ և $10^5$ Պա վիճակում գազն իզոխոր տաքացվում է մինչև $600$ Կ։ Գտեք ճնշումը։
5. $27$ °C ջերմաստիճանում $2$ լ գազն իզոբար տաքացվում է մինչև $327$ °C ջերմաստիճան։ Գտեք ծավալը։
6. $p_1 = 2 \\cdot 10^5$ Պա, $V_1 = 3$ լ, $T_1 = 300$ Կ, $V_2 = 2$ լ, $T_2 = 400$ Կ։ Գտեք $p_2$-ը։
7. Գտեք ջրածնի խտությունը $10^5$ Պա և $300$ Կ դեպքում։
8. Պղպջակը մակերևույթ բարձրանալիս հաստատուն ջերմաստիճանում կրկնապատկում է ծավալը։ Ի՞նչ խորությունից է այն բարձրացել։

### Պատասխաններ

1. $V = \\dfrac{2 \\cdot 8{,}31 \\cdot 400}{2 \\cdot 10^5} \\approx 0{,}033$ մ³ $= 33$ լ։ 2. $m = \\dfrac{1{,}5 \\cdot 10^7 \\cdot 0{,}01 \\cdot 0{,}032}{8{,}31 \\cdot 300} \\approx 1{,}9$ կգ։ 3. $12$ լ։ 4. $2 \\cdot 10^5$ Պա։ 5. $V = 2 \\cdot \\dfrac{600}{300} = 4$ լ։ 6. $p_2 = \\dfrac{2 \\cdot 10^5 \\cdot 3 \\cdot 400}{2 \\cdot 300} = 4 \\cdot 10^5$ Պա։ 7. $\\dfrac{10^5 \\cdot 0{,}002}{8{,}31 \\cdot 300} \\approx 0{,}08$ կգ/մ³։ 8. Ճնշումը $2 \\cdot 10^5$ Պա էր, ուստի $\\rho g h = 10^5$, $h = 10$ մ։`,
        ru: `## Уравнение состояния

Из $p = nkT$ и $n = \\dfrac{N}{V}$, $N = \\dfrac{m}{M} N_A$, $R = k N_A$:

> **Уравнение Менделеева-Клапейрона.** $pV = \\dfrac{m}{M} RT = \\nu RT$, где $R = 8{,}31$ Дж/(моль·К).

Полезные следствия: плотность газа $\\rho = \\dfrac{m}{V} = \\dfrac{pM}{RT}$; для постоянной массы газа $\\dfrac{pV}{T} = \\text{const}$ (уравнение Клапейрона), то есть $\\dfrac{p_1 V_1}{T_1} = \\dfrac{p_2 V_2}{T_2}$. Для смеси — **закон Дальтона**: давление равно сумме парциальных давлений, $p = p_1 + p_2 + \\dots$

Нормальные условия: $p_0 = 1{,}013 \\cdot 10^5$ Па, $T_0 = 273$ К; один моль занимает $22{,}4$ л. В задачах округляем $p_0$ до $10^5$ Па.

## Изопроцессы

| процесс | постоянна | закон | график |
|---|---|---|---|
| изотермический | $T$ | $pV = \\text{const}$ (Бойль-Мариотт) | гипербола в $pV$ |
| изобарный | $p$ | $\\dfrac{V}{T} = \\text{const}$ (Гей-Люссак) | прямая через начало в $VT$ |
| изохорный | $V$ | $\\dfrac{p}{T} = \\text{const}$ (Шарль) | прямая через начало в $pT$ |

В плоскости $pV$ изобара — горизонтальная прямая, изохора — вертикальная; в плоскостях $pT$ и $VT$ изотермы — вертикальные прямые. Графики в градусах Цельсия не проходят через начало координат: прямые указывают на $-273$ °C.

**Пример 1.** Объём одного моля при $10^5$ Па и $273$ К: $V = \\dfrac{RT}{p} = \\dfrac{8{,}31 \\cdot 273}{10^5} \\approx 0{,}0227$ м³ $\\approx 22{,}7$ л; при точном $p_0$ это $22{,}4$ л.

**Пример 2.** Масса воздуха в комнате $5 \\times 4 \\times 3$ м при $10^5$ Па и $300$ К ($M = 0{,}029$ кг/моль): $m = \\dfrac{pVM}{RT} = \\dfrac{10^5 \\cdot 60 \\cdot 0{,}029}{8{,}31 \\cdot 300} \\approx 70$ кг. Воздух в комнате весит столько же, сколько человек.

**Пример 3.** Изотермическое сжатие $6$ л газа при $10^5$ Па до $2$ л: $p_2 = \\dfrac{p_1 V_1}{V_2} = 3 \\cdot 10^5$ Па. Втрое меньший объём, втрое большее давление.

**Пример 4.** Изохорное нагревание: в шине при $27$ °C давление $2 \\cdot 10^5$ Па; при $57$ °C $p_2 = p_1 \\dfrac{T_2}{T_1} = 2 \\cdot 10^5 \\cdot \\dfrac{330}{300} = 2{,}2 \\cdot 10^5$ Па. Заметьте, что $57/27$ дало бы неверный ответ: нужны кельвины.

**Пример 5.** Изобарное расширение: $3$ л газа при $300$ К нагревают до $400$ К при постоянном давлении: $V_2 = 3 \\cdot \\dfrac{400}{300} = 4$ л.

**Пример 6.** Меняются все три параметра: $p_1 = 10^5$ Па, $V_1 = 2$ л, $T_1 = 300$ К; газ приводят к $p_2 = 2 \\cdot 10^5$ Па и $T_2 = 450$ К. $V_2 = \\dfrac{p_1 V_1 T_2}{T_1 p_2} = \\dfrac{10^5 \\cdot 2 \\cdot 450}{300 \\cdot 2 \\cdot 10^5} = 1{,}5$ л.

**Пример 7.** Плотность кислорода при нормальных условиях: $\\rho = \\dfrac{pM}{RT} = \\dfrac{10^5 \\cdot 0{,}032}{8{,}31 \\cdot 273} \\approx 1{,}41$ кг/м³; для воздуха $\\approx 1{,}28$ кг/м³, для водорода $\\approx 0{,}09$ кг/м³. Плотность пропорциональна молярной массе.

**Пример 8.** Пузырёк воздуха поднимается с глубины $20$ м, где давление $10^5 + 1000 \\cdot 10 \\cdot 20 = 3 \\cdot 10^5$ Па, к поверхности при той же температуре: его объём растёт в $3$ раза. Смесь $2$ моль O₂ и $8$ моль N₂ в $0{,}1$ м³ при $300$ К имеет $p = \\dfrac{10 \\cdot 8{,}31 \\cdot 300}{0{,}1} \\approx 2{,}5 \\cdot 10^5$ Па, из которых на кислород приходится пятая часть, $\\approx 5 \\cdot 10^4$ Па.

### Упражнения

1. Найдите объём $2$ моль газа при $2 \\cdot 10^5$ Па и $400$ К.
2. Найдите массу кислорода в баллоне $10$ л при $1{,}5 \\cdot 10^7$ Па и $300$ К.
3. $4$ л газа при $3 \\cdot 10^5$ Па изотермически расширяются до $10^5$ Па. Найдите объём.
4. Газ при $300$ К и $10^5$ Па изохорно нагревают до $600$ К. Найдите давление.
5. $2$ л газа при $27$ °C изобарно нагревают до $327$ °C. Найдите объём.
6. $p_1 = 2 \\cdot 10^5$ Па, $V_1 = 3$ л, $T_1 = 300$ К; $V_2 = 2$ л, $T_2 = 400$ К. Найдите $p_2$.
7. Найдите плотность водорода при $10^5$ Па и $300$ К.
8. Пузырёк, поднимаясь к поверхности при постоянной температуре, удваивает объём. С какой глубины он поднялся?

### Ответы

1. $V = \\dfrac{2 \\cdot 8{,}31 \\cdot 400}{2 \\cdot 10^5} \\approx 0{,}033$ м³ $= 33$ л. 2. $m = \\dfrac{1{,}5 \\cdot 10^7 \\cdot 0{,}01 \\cdot 0{,}032}{8{,}31 \\cdot 300} \\approx 1{,}9$ кг. 3. $12$ л. 4. $2 \\cdot 10^5$ Па. 5. $V = 2 \\cdot \\dfrac{600}{300} = 4$ л. 6. $p_2 = \\dfrac{2 \\cdot 10^5 \\cdot 3 \\cdot 400}{2 \\cdot 300} = 4 \\cdot 10^5$ Па. 7. $\\dfrac{10^5 \\cdot 0{,}002}{8{,}31 \\cdot 300} \\approx 0{,}08$ кг/м³. 8. Давление было $2 \\cdot 10^5$ Па, поэтому $\\rho g h = 10^5$, $h = 10$ м.`,
      },
      [
        q(t("The Mendeleev-Clapeyron equation reads…", "Մենդելեև-Կլապեյրոնի հավասարումն է…", "Уравнение Менделеева-Клапейрона имеет вид…"), [t("pV = (m/M)RT", "pV = (m/M)RT", "pV = (m/M)RT"), t("pT = (m/M)RV", "pT = (m/M)RV", "pT = (m/M)RV"), t("p = mRT", "p = mRT", "p = mRT")], 0),
        q(t("In an isothermal process…", "Իզոթերմ պրոցեսում…", "В изотермическом процессе…"), [t("pV = const", "pV = const", "pV = const"), t("V/T = const", "V/T = const", "V/T = const"), t("p/T = const", "p/T = const", "p/T = const")], 0),
        q(t("The graph of an isochoric process in the pT plane is…", "Իզոխոր պրոցեսի գրաֆիկը pT հարթությունում…", "График изохорного процесса в плоскости pT — это…"), [t("a hyperbola", "հիպերբոլ է", "гипербола"), t("a line through the origin", "սկզբնակետով անցնող ուղիղ է", "прямая через начало координат"), t("a horizontal line", "հորիզոնական ուղիղ է", "горизонтальная прямая")], 1),
        q(t("A gas at 300 K and 10⁵ Pa is heated at constant volume to 600 K. The pressure becomes…", "300 Կ և 10⁵ Պա վիճակում գազը հաստատուն ծավալում տաքացվում է մինչև 600 Կ։ Ճնշումը դառնում է…", "Газ при 300 К и 10⁵ Па нагревают при постоянном объёме до 600 К. Давление становится…"), [t("0.5 · 10⁵ Pa", "0,5 · 10⁵ Պա", "0,5 · 10⁵ Па"), t("10⁵ Pa", "10⁵ Պա", "10⁵ Па"), t("2 · 10⁵ Pa", "2 · 10⁵ Պա", "2 · 10⁵ Па")], 2),
        q(t("The density of a gas is proportional to…", "Գազի խտությունը համեմատական է…", "Плотность газа пропорциональна…"), [t("its molar mass and pressure", "նրա մոլային զանգվածին և ճնշմանը", "его молярной массе и давлению"), t("its temperature", "նրա ջերմաստիճանին", "его температуре"), t("its volume", "նրա ծավալին", "его объёму")], 0),
        q(t("The pressure of a gas mixture equals…", "Գազային խառնուրդի ճնշումը հավասար է…", "Давление смеси газов равно…"), [t("the largest partial pressure", "ամենամեծ մասնակի ճնշմանը", "наибольшему парциальному давлению"), t("the sum of the partial pressures", "մասնակի ճնշումների գումարին", "сумме парциальных давлений"), t("the mean of the partial pressures", "մասնակի ճնշումների միջինին", "среднему парциальных давлений")], 1),
      ],
    ),
    lesson(
      "saturated-vapour-humidity",
      ["Saturated vapour; boiling; humidity", "Հագեցած գոլորշի, եռում, խոնավություն", "Насыщенный пар; кипение; влажность"],
      {
        en: ["Explain dynamic equilibrium between a liquid and its vapour and why saturated vapour pressure depends on temperature only", "Explain boiling as evaporation throughout the volume and how the boiling point depends on pressure", "Compute absolute and relative humidity and the dew point from a table of saturated vapour density"],
        hy: ["Բացատրել հեղուկի և նրա գոլորշու դինամիկ հավասարակշռությունը և թե ինչու հագեցած գոլորշու ճնշումը կախված է միայն ջերմաստիճանից", "Բացատրել եռումը որպես գոլորշիացում ամբողջ ծավալում և եռման կետի կախումը ճնշումից", "Հաշվել բացարձակ և հարաբերական խոնավությունը և ցողի կետը հագեցած գոլորշու խտության աղյուսակով"],
        ru: ["Объяснять динамическое равновесие жидкости и её пара и почему давление насыщенного пара зависит только от температуры", "Объяснять кипение как испарение по всему объёму и зависимость температуры кипения от давления", "Вычислять абсолютную и относительную влажность и точку росы по таблице плотности насыщенного пара"],
      },
      {
        en: `## Saturated vapour

Molecules leave the surface of a liquid (**evaporation**) and return to it (**condensation**). In a closed vessel the two rates become equal: this is **dynamic equilibrium**, and the vapour is then called **saturated**.

> The pressure and density of saturated vapour depend on the temperature only, not on the volume. If the volume is reduced isothermally, part of the vapour condenses and the pressure stays the same; if the temperature rises, the pressure rises much faster than for an ideal gas, because both $n$ and $T$ grow.

An **unsaturated** vapour behaves like an ideal gas: $p = nkT$, $\\rho = \\dfrac{pM}{RT}$. Above the **critical temperature** ($374$ °C for water) a liquid cannot exist at any pressure.

## Boiling

> A liquid **boils** when the saturated vapour pressure equals the external pressure: bubbles of vapour can then grow inside the liquid, so evaporation goes on in the whole volume.

The boiling point therefore depends on pressure: water boils at $100$ °C at $10^5$ Pa, at about $90$ °C at $0{.}7 \\cdot 10^5$ Pa (3 km altitude) and at about $120$ °C at $2 \\cdot 10^5$ Pa (pressure cooker).

## Humidity

**Absolute humidity** is the density of water vapour in the air, $\\rho$ (g/m³). **Relative humidity** compares it with saturation at the same temperature:
$$\\varphi = \\dfrac{\\rho}{\\rho_{\\text{sat}}} \\cdot 100\\% = \\dfrac{p}{p_{\\text{sat}}} \\cdot 100\\%.$$
The **dew point** is the temperature at which the air with its present vapour becomes saturated when cooled. Humidity is measured with a hygrometer or a psychrometer (a dry and a wet thermometer: the drier the air, the more the wet bulb cools by evaporation).

Saturated water vapour:

| $t$, °C | 10 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|
| $\\rho_{\\text{sat}}$, g/m³ | $9{.}4$ | $12{.}8$ | $17{.}3$ | $23{.}0$ | $30{.}3$ |
| $p_{\\text{sat}}$, kPa | $1{.}23$ | $1{.}71$ | $2{.}33$ | $3{.}17$ | $4{.}24$ |

**Example 1.** At $20$ °C the air contains $10{.}4$ g/m³ of vapour. $\\varphi = \\dfrac{10{.}4}{17{.}3} \\cdot 100\\% \\approx 60\\%$.

**Example 2.** Air at $25$ °C has $\\varphi = 50\\%$. Its vapour density is $0{.}5 \\cdot 23{.}0 = 11{.}5$ g/m³. Saturation at this density occurs between $10$ °C ($9{.}4$) and $15$ °C ($12{.}8$): the dew point is about $13$ °C. Cooling a glass below $13$ °C covers it with dew.

**Example 3.** Air at $30$ °C with $\\varphi = 40\\%$ holds $0{.}4 \\cdot 30{.}3 \\approx 12{.}1$ g/m³. Cooled to $15$ °C it has $\\varphi = \\dfrac{12{.}1}{12{.}8} \\approx 95\\%$, still no dew. Cooled to $10$ °C, only $9{.}4$ g/m³ can stay in the vapour: $12{.}1 - 9{.}4 = 2{.}7$ g condenses from every cubic metre.

**Example 4.** Mass of vapour in a room of $60$ m³ at $20$ °C and $\\varphi = 60\\%$: $\\rho = 0{.}6 \\cdot 17{.}3 \\approx 10{.}4$ g/m³, $m = 10{.}4 \\cdot 60 \\approx 620$ g, more than half a litre of water in the air.

**Example 5.** Partial pressure of vapour at $20$ °C and $\\varphi = 50\\%$: $p = 0{.}5 \\cdot 2{.}33 \\approx 1{.}17$ kPa. Check with the ideal gas law: $\\rho = \\dfrac{pM}{RT} = \\dfrac{1170 \\cdot 0{.}018}{8{.}31 \\cdot 293} \\approx 8{.}6 \\cdot 10^{-3}$ kg/m³ $= 8{.}6$ g/m³, which is $0{.}5 \\cdot 17{.}3$ as expected.

**Example 6.** Saturated vapour over water is compressed isothermally to half the volume. The pressure does not change; half of the vapour becomes liquid. If the same vapour were unsaturated and far from saturation, the pressure would double.

**Example 7.** Why does a pressure cooker cook faster? At $2 \\cdot 10^5$ Pa water boils at about $120$ °C, and reactions in food go faster at higher temperature. On a high mountain tea is cooler and eggs take longer to boil.

**Example 8.** Psychrometer: dry bulb $20$ °C, wet bulb $15$ °C. Evaporation from the wet gauze cools it; the table of the instrument gives $\\varphi \\approx 59\\%$ for this pair. If the readings were equal, the air would be saturated, $\\varphi = 100\\%$.

### Exercises

1. At $25$ °C the air contains $11{.}5$ g/m³ of vapour. Find $\\varphi$.
2. Find the absolute humidity at $20$ °C and $\\varphi = 75\\%$.
3. Air at $20$ °C has $\\varphi = 55\\%$. Estimate the dew point.
4. Find the mass of vapour in a room of $50$ m³ at $25$ °C and $\\varphi = 40\\%$.
5. Air at $30$ °C with $\\varphi = 50\\%$ is cooled to $15$ °C. How much water condenses from each cubic metre?
6. Find the partial pressure of vapour at $25$ °C and $\\varphi = 60\\%$.
7. Why does water boil below $100$ °C on a mountain?
8. Saturated vapour over a liquid is expanded isothermally to three times the volume. What happens to its pressure while liquid remains?

### Answers

1. $50\\%$. 2. $0{.}75 \\cdot 17{.}3 \\approx 13$ g/m³. 3. $\\rho \\approx 9{.}5$ g/m³, dew point about $10$ °C. 4. $0{.}4 \\cdot 23{.}0 \\cdot 50 = 460$ g. 5. $15{.}2 - 12{.}8 \\approx 2{.}4$ g. 6. $0{.}6 \\cdot 3{.}17 \\approx 1{.}9$ kPa. 7. The external pressure is lower, so the saturated vapour pressure reaches it at a lower temperature. 8. It stays the same; more liquid evaporates to keep the vapour saturated.`,
        hy: `## Հագեցած գոլորշի

Մոլեկուլները հեռանում են հեղուկի մակերևույթից (**գոլորշիացում**) և վերադառնում են նրան (**խտացում**)։ Փակ անոթում երկու արագությունները հավասարվում են․ դա **դինամիկ հավասարակշռությունն** է, և գոլորշին այդ դեպքում կոչվում է **հագեցած**։

> Հագեցած գոլորշու ճնշումն ու խտությունը կախված են միայն ջերմաստիճանից, ոչ ծավալից։ Եթե ծավալն իզոթերմ փոքրացվի, գոլորշու մի մասը խտանում է, և ճնշումը մնում է նույնը, եթե ջերմաստիճանը բարձրանա, ճնշումն աճում է իդեալական գազից շատ ավելի արագ, որովհետև աճում են և $n$-ը, և $T$-ն։

**Անհագեցած** գոլորշին վարվում է իդեալական գազի նման․ $p = nkT$, $\\rho = \\dfrac{pM}{RT}$։ **Կրիտիկական ջերմաստիճանից** վեր (ջրի համար $374$ °C) հեղուկը ոչ մի ճնշման տակ գոյություն ունենալ չի կարող։

## Եռում

> Հեղուկը **եռում է**, երբ հագեցած գոլորշու ճնշումը հավասարվում է արտաքին ճնշմանը․ գոլորշու պղպջակներն այդ դեպքում կարող են աճել հեղուկի ներսում, ուստի գոլորշիացումը գնում է ամբողջ ծավալում։

Եռման կետը, հետևաբար, կախված է ճնշումից․ ջուրն եռում է $100$ °C-ում $10^5$ Պա դեպքում, մոտ $90$ °C-ում $0{,}7 \\cdot 10^5$ Պա դեպքում (3 կմ բարձրություն) և մոտ $120$ °C-ում $2 \\cdot 10^5$ Պա դեպքում (ճնշման կաթսա)։

## Խոնավություն

**Բացարձակ խոնավությունը** օդում ջրի գոլորշու խտությունն է, $\\rho$ (գ/մ³)։ **Հարաբերական խոնավությունը** համեմատում է այն նույն ջերմաստիճանում հագեցման հետ․
$$\\varphi = \\dfrac{\\rho}{\\rho_{\\text{հագ}}} \\cdot 100\\% = \\dfrac{p}{p_{\\text{հագ}}} \\cdot 100\\%$$
**Ցողի կետն** այն ջերմաստիճանն է, որում օդն իր ներկա գոլորշով սառչելիս դառնում է հագեցած։ Խոնավությունը չափում են հիգրոմետրով կամ պսիխրոմետրով (չոր և թաց ջերմաչափ․ որքան չոր է օդը, այնքան թաց ջերմաչափը գոլորշիացումից ավելի է սառչում)։

Ջրի հագեցած գոլորշի․

| $t$, °C | 10 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|
| $\\rho_{\\text{հագ}}$, գ/մ³ | $9{,}4$ | $12{,}8$ | $17{,}3$ | $23{,}0$ | $30{,}3$ |
| $p_{\\text{հագ}}$, կՊա | $1{,}23$ | $1{,}71$ | $2{,}33$ | $3{,}17$ | $4{,}24$ |

**Օրինակ 1։** $20$ °C-ում օդը պարունակում է $10{,}4$ գ/մ³ գոլորշի։ $\\varphi = \\dfrac{10{,}4}{17{,}3} \\cdot 100\\% \\approx 60\\%$։

**Օրինակ 2։** $25$ °C օդն ունի $\\varphi = 50\\%$։ Գոլորշու խտությունը $0{,}5 \\cdot 23{,}0 = 11{,}5$ գ/մ³ է։ Այս խտությամբ հագեցումը լինում է $10$ °C-ի ($9{,}4$) և $15$ °C-ի ($12{,}8$) միջև․ ցողի կետը մոտ $13$ °C է։ $13$ °C-ից ցածր սառեցված բաժակը պատվում է ցողով։

**Օրինակ 3։** $30$ °C օդը $\\varphi = 40\\%$ դեպքում պարունակում է $0{,}4 \\cdot 30{,}3 \\approx 12{,}1$ գ/մ³։ $15$ °C-ի սառչելիս այն ունի $\\varphi = \\dfrac{12{,}1}{12{,}8} \\approx 95\\%$, ցող դեռ չկա։ $10$ °C-ի սառչելիս գոլորշու մեջ կարող է մնալ միայն $9{,}4$ գ/մ³․ ամեն խորանարդ մետրից խտանում է $12{,}1 - 9{,}4 = 2{,}7$ գ։

**Օրինակ 4։** Գոլորշու զանգվածը $60$ մ³ սենյակում $20$ °C և $\\varphi = 60\\%$ դեպքում․ $\\rho = 0{,}6 \\cdot 17{,}3 \\approx 10{,}4$ գ/մ³, $m = 10{,}4 \\cdot 60 \\approx 620$ գ՝ օդում կես լիտրից ավելի ջուր։

**Օրինակ 5։** Գոլորշու մասնակի ճնշումը $20$ °C և $\\varphi = 50\\%$ դեպքում․ $p = 0{,}5 \\cdot 2{,}33 \\approx 1{,}17$ կՊա։ Ստուգում իդեալական գազի օրենքով․ $\\rho = \\dfrac{pM}{RT} = \\dfrac{1170 \\cdot 0{,}018}{8{,}31 \\cdot 293} \\approx 8{,}6 \\cdot 10^{-3}$ կգ/մ³ $= 8{,}6$ գ/մ³, որը $0{,}5 \\cdot 17{,}3$ է, ինչպես և սպասվում էր։

**Օրինակ 6։** Ջրի վերևի հագեցած գոլորշին իզոթերմ սեղմվում է մինչև կես ծավալ։ Ճնշումը չի փոխվում, գոլորշու կեսը դառնում է հեղուկ։ Եթե նույն գոլորշին անհագեցած լիներ և հագեցումից հեռու, ճնշումը կկրկնապատկվեր։

**Օրինակ 7։** Ինչո՞ւ է ճնշման կաթսան ավելի արագ եփում։ $2 \\cdot 10^5$ Պա դեպքում ջուրն եռում է մոտ $120$ °C-ում, իսկ սննդի մեջ ռեակցիաները բարձր ջերմաստիճանում ավելի արագ են գնում։ Բարձր լեռան վրա թեյն ավելի սառն է, և ձուն ավելի երկար է եփվում։

**Օրինակ 8։** Պսիխրոմետր․ չոր ջերմաչափը $20$ °C, թացը՝ $15$ °C է։ Թաց շղարշից գոլորշիացումը սառեցնում է այն, սարքի աղյուսակն այս զույգի համար տալիս է $\\varphi \\approx 59\\%$։ Եթե ցուցմունքները հավասար լինեին, օդը հագեցած կլիներ, $\\varphi = 100\\%$։

### Վարժություններ

1. $25$ °C-ում օդը պարունակում է $11{,}5$ գ/մ³ գոլորշի։ Գտեք $\\varphi$-ն։
2. Գտեք բացարձակ խոնավությունը $20$ °C և $\\varphi = 75\\%$ դեպքում։
3. $20$ °C օդն ունի $\\varphi = 55\\%$։ Գնահատեք ցողի կետը։
4. Գտեք գոլորշու զանգվածը $50$ մ³ սենյակում $25$ °C և $\\varphi = 40\\%$ դեպքում։
5. $30$ °C օդը $\\varphi = 50\\%$ դեպքում սառեցվում է մինչև $15$ °C ջերմաստիճան։ Որքա՞ն ջուր է խտանում ամեն խորանարդ մետրից։
6. Գտեք գոլորշու մասնակի ճնշումը $25$ °C և $\\varphi = 60\\%$ դեպքում։
7. Ինչո՞ւ է ջուրը լեռան վրա եռում $100$ °C-ից ցածր։
8. Հեղուկի վերևի հագեցած գոլորշին իզոթերմ ընդարձակվում է մինչև երեք անգամ մեծ ծավալ։ Ի՞նչ է լինում նրա ճնշման հետ, քանի դեռ հեղուկ կա։

### Պատասխաններ

1. $50\\%$։ 2. $0{,}75 \\cdot 17{,}3 \\approx 13$ գ/մ³։ 3. $\\rho \\approx 9{,}5$ գ/մ³, ցողի կետը մոտ $10$ °C է։ 4. $0{,}4 \\cdot 23{,}0 \\cdot 50 = 460$ գ։ 5. $15{,}2 - 12{,}8 \\approx 2{,}4$ գ։ 6. $0{,}6 \\cdot 3{,}17 \\approx 1{,}9$ կՊա։ 7. Արտաքին ճնշումն ավելի ցածր է, ուստի հագեցած գոլորշու ճնշումը նրան հասնում է ավելի ցածր ջերմաստիճանում։ 8. Մնում է նույնը, ավելի շատ հեղուկ է գոլորշիանում, որպեսզի գոլորշին հագեցած մնա։`,
        ru: `## Насыщенный пар

Молекулы покидают поверхность жидкости (**испарение**) и возвращаются в неё (**конденсация**). В закрытом сосуде обе скорости выравниваются: это **динамическое равновесие**, и пар тогда называют **насыщенным**.

> Давление и плотность насыщенного пара зависят только от температуры, а не от объёма. Если объём уменьшить изотермически, часть пара конденсируется и давление остаётся прежним; если температура растёт, давление растёт гораздо быстрее, чем у идеального газа, потому что растут и $n$, и $T$.

**Ненасыщенный** пар ведёт себя как идеальный газ: $p = nkT$, $\\rho = \\dfrac{pM}{RT}$. Выше **критической температуры** ($374$ °C для воды) жидкость не может существовать ни при каком давлении.

## Кипение

> Жидкость **кипит**, когда давление насыщенного пара равно внешнему давлению: пузырьки пара тогда могут расти внутри жидкости, и испарение идёт во всём объёме.

Поэтому температура кипения зависит от давления: вода кипит при $100$ °C при $10^5$ Па, примерно при $90$ °C при $0{,}7 \\cdot 10^5$ Па (высота 3 км) и примерно при $120$ °C при $2 \\cdot 10^5$ Па (скороварка).

## Влажность

**Абсолютная влажность** — плотность водяного пара в воздухе, $\\rho$ (г/м³). **Относительная влажность** сравнивает её с насыщением при той же температуре:
$$\\varphi = \\dfrac{\\rho}{\\rho_{\\text{нас}}} \\cdot 100\\% = \\dfrac{p}{p_{\\text{нас}}} \\cdot 100\\%.$$
**Точка росы** — температура, при которой воздух с имеющимся паром при охлаждении становится насыщенным. Влажность измеряют гигрометром или психрометром (сухой и влажный термометры: чем суше воздух, тем сильнее влажный термометр охлаждается испарением).

Насыщенный водяной пар:

| $t$, °C | 10 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|
| $\\rho_{\\text{нас}}$, г/м³ | $9{,}4$ | $12{,}8$ | $17{,}3$ | $23{,}0$ | $30{,}3$ |
| $p_{\\text{нас}}$, кПа | $1{,}23$ | $1{,}71$ | $2{,}33$ | $3{,}17$ | $4{,}24$ |

**Пример 1.** При $20$ °C воздух содержит $10{,}4$ г/м³ пара. $\\varphi = \\dfrac{10{,}4}{17{,}3} \\cdot 100\\% \\approx 60\\%$.

**Пример 2.** Воздух при $25$ °C имеет $\\varphi = 50\\%$. Плотность пара $0{,}5 \\cdot 23{,}0 = 11{,}5$ г/м³. Насыщение при такой плотности наступает между $10$ °C ($9{,}4$) и $15$ °C ($12{,}8$): точка росы около $13$ °C. Стакан, охлаждённый ниже $13$ °C, покрывается росой.

**Пример 3.** Воздух при $30$ °C с $\\varphi = 40\\%$ содержит $0{,}4 \\cdot 30{,}3 \\approx 12{,}1$ г/м³. Охлаждённый до $15$ °C, он имеет $\\varphi = \\dfrac{12{,}1}{12{,}8} \\approx 95\\%$, росы ещё нет. При охлаждении до $10$ °C в паре может остаться лишь $9{,}4$ г/м³: из каждого кубометра конденсируется $12{,}1 - 9{,}4 = 2{,}7$ г.

**Пример 4.** Масса пара в комнате объёмом $60$ м³ при $20$ °C и $\\varphi = 60\\%$: $\\rho = 0{,}6 \\cdot 17{,}3 \\approx 10{,}4$ г/м³, $m = 10{,}4 \\cdot 60 \\approx 620$ г — больше полулитра воды в воздухе.

**Пример 5.** Парциальное давление пара при $20$ °C и $\\varphi = 50\\%$: $p = 0{,}5 \\cdot 2{,}33 \\approx 1{,}17$ кПа. Проверка по уравнению идеального газа: $\\rho = \\dfrac{pM}{RT} = \\dfrac{1170 \\cdot 0{,}018}{8{,}31 \\cdot 293} \\approx 8{,}6 \\cdot 10^{-3}$ кг/м³ $= 8{,}6$ г/м³, то есть $0{,}5 \\cdot 17{,}3$, как и ожидалось.

**Пример 6.** Насыщенный пар над водой изотермически сжимают до половины объёма. Давление не меняется; половина пара превращается в жидкость. Если бы тот же пар был ненасыщенным и далёким от насыщения, давление удвоилось бы.

**Пример 7.** Почему скороварка готовит быстрее? При $2 \\cdot 10^5$ Па вода кипит примерно при $120$ °C, а реакции в пище при более высокой температуре идут быстрее. Высоко в горах чай холоднее, а яйца варятся дольше.

**Пример 8.** Психрометр: сухой термометр $20$ °C, влажный $15$ °C. Испарение с влажной марли охлаждает его; таблица прибора даёт для этой пары $\\varphi \\approx 59\\%$. Если бы показания совпали, воздух был бы насыщен, $\\varphi = 100\\%$.

### Упражнения

1. При $25$ °C воздух содержит $11{,}5$ г/м³ пара. Найдите $\\varphi$.
2. Найдите абсолютную влажность при $20$ °C и $\\varphi = 75\\%$.
3. Воздух при $20$ °C имеет $\\varphi = 55\\%$. Оцените точку росы.
4. Найдите массу пара в комнате объёмом $50$ м³ при $25$ °C и $\\varphi = 40\\%$.
5. Воздух при $30$ °C с $\\varphi = 50\\%$ охлаждают до $15$ °C. Сколько воды конденсируется из каждого кубометра?
6. Найдите парциальное давление пара при $25$ °C и $\\varphi = 60\\%$.
7. Почему в горах вода кипит ниже $100$ °C?
8. Насыщенный пар над жидкостью изотермически расширяют до втрое большего объёма. Что происходит с его давлением, пока остаётся жидкость?

### Ответы

1. $50\\%$. 2. $0{,}75 \\cdot 17{,}3 \\approx 13$ г/м³. 3. $\\rho \\approx 9{,}5$ г/м³, точка росы около $10$ °C. 4. $0{,}4 \\cdot 23{,}0 \\cdot 50 = 460$ г. 5. $15{,}2 - 12{,}8 \\approx 2{,}4$ г. 6. $0{,}6 \\cdot 3{,}17 \\approx 1{,}9$ кПа. 7. Внешнее давление ниже, поэтому давление насыщенного пара достигает его при более низкой температуре. 8. Оно не меняется; испаряется больше жидкости, чтобы пар оставался насыщенным.`,
      },
      [
        q(t("The pressure of saturated vapour depends on…", "Հագեցած գոլորշու ճնշումը կախված է…", "Давление насыщенного пара зависит от…"), [t("the volume only", "միայն ծավալից", "только от объёма"), t("the temperature only", "միայն ջերմաստիճանից", "только от температуры"), t("both volume and temperature", "և ծավալից, և ջերմաստիճանից", "и от объёма, и от температуры")], 1),
        q(t("A liquid boils when…", "Հեղուկն եռում է, երբ…", "Жидкость кипит, когда…"), [t("its temperature reaches 100 °C", "նրա ջերմաստիճանը հասնում է 100 °C", "её температура достигает 100 °C"), t("the saturated vapour pressure equals the external pressure", "հագեցած գոլորշու ճնշումը հավասարվում է արտաքին ճնշմանը", "давление насыщенного пара равно внешнему давлению"), t("all the liquid has evaporated", "ամբողջ հեղուկը գոլորշիացել է", "вся жидкость испарилась")], 1),
        q(t("In a pressure cooker water boils…", "Ճնշման կաթսայում ջուրն եռում է…", "В скороварке вода кипит…"), [t("above 100 °C", "100 °C-ից բարձր", "выше 100 °C"), t("below 100 °C", "100 °C-ից ցածր", "ниже 100 °C"), t("exactly at 100 °C", "ճիշտ 100 °C-ում", "ровно при 100 °C")], 0),
        q(t("Relative humidity is…", "Հարաբերական խոնավությունը…", "Относительная влажность — это…"), [t("the vapour density in g/m³", "գոլորշու խտությունն է գ/մ³-ով", "плотность пара в г/м³"), t("the ratio of vapour density to saturated density at the same temperature", "գոլորշու խտության հարաբերությունն է հագեցած խտությանը նույն ջերմաստիճանում", "отношение плотности пара к плотности насыщенного пара при той же температуре"), t("the temperature of the air", "օդի ջերմաստիճանն է", "температура воздуха")], 1),
        q(t("At 20 °C saturated vapour has 17.3 g/m³. Air with 8.65 g/m³ has φ equal to…", "20 °C-ում հագեցած գոլորշին 17,3 գ/մ³ է։ 8,65 գ/մ³ ունեցող օդի φ-ը հավասար է…", "При 20 °C насыщенный пар имеет 17,3 г/м³. У воздуха с 8,65 г/м³ φ равна…"), [t("25 %", "25 %", "25 %"), t("50 %", "50 %", "50 %"), t("100 %", "100 %", "100 %")], 1),
        q(t("The dew point is the temperature at which…", "Ցողի կետն այն ջերմաստիճանն է, որում…", "Точка росы — температура, при которой…"), [t("water boils", "ջուրն եռում է", "вода кипит"), t("the vapour in the air becomes saturated", "օդի գոլորշին դառնում է հագեցած", "пар в воздухе становится насыщенным"), t("water freezes", "ջուրը սառչում է", "вода замерзает")], 1),
      ],
    ),
    lesson(
      "liquids-solids",
      ["Surface tension; crystalline and amorphous bodies", "Մակերևութային լարվածություն, բյուրեղային և ամորֆ մարմիններ", "Поверхностное натяжение; кристаллические и аморфные тела"],
      {
        en: ["Explain surface tension through surface energy and compute forces on films, drops and capillary rise", "Distinguish crystalline and amorphous bodies: lattice, anisotropy, melting behaviour", "Use stress, strain, Hooke's law in the form σ = Eε and the strength limit for wires and rods"],
        hy: ["Բացատրել մակերևութային լարվածությունը մակերևութային էներգիայի միջոցով, հաշվել թաղանթների, կաթիլների ուժերը և մազանոթային բարձրացումը", "Տարբերել բյուրեղային և ամորֆ մարմինները․ ցանց, անիզոտրոպություն, հալման վարքագիծ", "Կիրառել լարումը, հարաբերական դեֆորմացիան, Հուկի օրենքը σ = Eε տեսքով և ամրության սահմանը լարերի և ձողերի համար"],
        ru: ["Объяснять поверхностное натяжение через поверхностную энергию и вычислять силы для плёнок, капель и капиллярный подъём", "Различать кристаллические и аморфные тела: решётка, анизотропия, поведение при плавлении", "Применять напряжение, относительную деформацию, закон Гука в форме σ = Eε и предел прочности для проволок и стержней"],
      },
      {
        en: `## Surface tension

Molecules on the surface of a liquid are pulled inwards by their neighbours, so the surface has extra **surface energy** $E = \\sigma S$ and behaves like a stretched film. The **surface tension coefficient** $\\sigma$ (N/m, or J/m²) is the force per unit length of the boundary:
$$F = \\sigma \\ell.$$
For water $\\sigma \\approx 0{.}07$ N/m, for soap solution $\\approx 0{.}04$ N/m, for mercury $\\approx 0{.}5$ N/m. A liquid tends to minimise its surface: free drops are spheres. Detergents and heating lower $\\sigma$.

A liquid **wets** a solid if its molecules are attracted to the solid more strongly than to each other (water on glass) and does not wet it otherwise (water on wax, mercury on glass). In a narrow tube a wetting liquid rises to the **capillary height**
$$h = \\dfrac{2\\sigma}{\\rho g r},$$
a non-wetting one is depressed by the same amount. Capillarity lifts water in soil, paper and towels.

## Crystalline and amorphous bodies

| | crystalline | amorphous |
|---|---|---|
| structure | regular lattice, long-range order | disorder, like a frozen liquid |
| melting | at a definite temperature | soften gradually |
| properties | anisotropic in a single crystal | isotropic |
| examples | salt, metals, ice, quartz | glass, resin, plastics, amber |

Metals are **polycrystals**: many tiny randomly oriented crystals, so on the whole they are isotropic. Mica and graphite split along planes of the lattice: this is anisotropy.

## Mechanical properties of solids

**Stress** $\\sigma = \\dfrac{F}{S}$ (Pa), **strain** $\\varepsilon = \\dfrac{\\Delta l}{l}$. For small deformations
$$\\sigma = E\\varepsilon, \\qquad \\Delta l = \\dfrac{F l}{E S},$$
where $E$ is **Young's modulus** (steel $2 \\cdot 10^{11}$ Pa, aluminium $0{.}7 \\cdot 10^{11}$ Pa). Beyond the **elastic limit** the deformation becomes plastic; at the **strength limit** the body breaks.

In all problems $g = 10$ m/s², $\\sigma_{\\text{water}} = 0{.}07$ N/m.

**Example 1.** A wire ring of diameter $4$ cm is lifted from water. The film clings to both sides of the wire: $F = 2\\sigma \\cdot \\pi d = 2 \\cdot 0{.}07 \\cdot 0{.}126 \\approx 0{.}018$ N $= 18$ mN, besides the weight of the ring.

**Example 2.** Capillary rise of water in a tube of radius $0{.}5$ mm: $h = \\dfrac{2 \\cdot 0{.}07}{1000 \\cdot 10 \\cdot 5 \\cdot 10^{-4}} = 0{.}028$ m $= 2{.}8$ cm. In a tube ten times thinner the water rises $28$ cm.

**Example 3.** Surface energy of a soap bubble of radius $5$ cm ($\\sigma = 0{.}04$ N/m), which has two surfaces: $E = 2\\sigma \\cdot 4\\pi R^2 = 2 \\cdot 0{.}04 \\cdot 4\\pi \\cdot 0{.}0025 \\approx 2{.}5 \\cdot 10^{-3}$ J.

**Example 4.** A drop detaches from a pipette tip of diameter $2$ mm when its weight equals $\\sigma \\pi d$: $m = \\dfrac{0{.}07 \\cdot \\pi \\cdot 0{.}002}{10} \\approx 4{.}4 \\cdot 10^{-5}$ kg $= 44$ mg. One millilitre of water gives about $23$ drops.

**Example 5.** A steel wire $2$ m long with cross-section $1$ mm² carries $100$ N. Stress $\\sigma = \\dfrac{100}{10^{-6}} = 10^8$ Pa, strain $\\varepsilon = \\dfrac{10^8}{2 \\cdot 10^{11}} = 5 \\cdot 10^{-4}$, elongation $\\Delta l = 5 \\cdot 10^{-4} \\cdot 2 = 1$ mm.

**Example 6.** Ice melts exactly at $0$ °C: while it melts, the temperature does not change. Glass has no melting point: it softens between roughly $500$ °C and $1500$ °C and can be shaped at any stage. Glass is a supercooled liquid; very old glass slowly crystallises and becomes cloudy.

**Example 7.** The strength limit of copper is about $2 \\cdot 10^8$ Pa. A wire of diameter $1$ mm has $S = \\pi \\cdot (0{.}5 \\cdot 10^{-3})^2 \\approx 7{.}9 \\cdot 10^{-7}$ m², so it breaks at $F = 2 \\cdot 10^8 \\cdot 7{.}9 \\cdot 10^{-7} \\approx 160$ N, a load of about $16$ kg.

**Example 8.** A water strider stands on water: its legs do not wet, and the surface film bends under them like a trampoline. A drop of detergent lowers $\\sigma$ and the insect sinks. A mercury drop on glass stays almost spherical because mercury does not wet glass and has a large $\\sigma$.

### Exercises

1. Find the force needed to pull a wire frame of perimeter $10$ cm out of water.
2. Find the capillary rise of water in a tube of radius $0{.}2$ mm.
3. Find the surface energy of a soap film $10 \\times 10$ cm with two surfaces ($\\sigma = 0{.}04$ N/m).
4. Find the mass of a drop falling from a tip of diameter $1$ mm.
5. A steel wire $1$ m long with cross-section $2$ mm² carries $400$ N. Find the stress, the strain and the elongation.
6. Which bodies melt at a definite temperature, crystalline or amorphous?
7. Find the breaking load for an aluminium wire of diameter $2$ mm (strength limit $10^8$ Pa).
8. Why does a mercury drop on a table stay round?

### Answers

1. $2 \\cdot 0{.}07 \\cdot 0{.}1 = 0{.}014$ N. 2. $\\dfrac{0{.}14}{1000 \\cdot 10 \\cdot 2 \\cdot 10^{-4}} = 0{.}07$ m $= 7$ cm. 3. $2 \\cdot 0{.}04 \\cdot 0{.}01 = 8 \\cdot 10^{-4}$ J. 4. $\\dfrac{0{.}07 \\cdot \\pi \\cdot 0{.}001}{10} \\approx 2{.}2 \\cdot 10^{-5}$ kg $= 22$ mg. 5. $2 \\cdot 10^8$ Pa; $10^{-3}$; $1$ mm. 6. Crystalline. 7. $S \\approx 3{.}1 \\cdot 10^{-6}$ m², $F \\approx 310$ N. 8. Mercury does not wet the table, and surface tension pulls it into the shape of least surface.`,
        hy: `## Մակերևութային լարվածություն

Հեղուկի մակերևույթի մոլեկուլները հարևանների կողմից ձգվում են դեպի ներս, ուստի մակերևույթն ունի հավելյալ **մակերևութային էներգիա** $E = \\sigma S$ և վարվում է ձգված թաղանթի նման։ **Մակերևութային լարվածության գործակիցը** $\\sigma$ (Ն/մ կամ Ջ/մ²) սահմանի միավոր երկարությանը բաժին ընկնող ուժն է․
$$F = \\sigma \\ell$$
Ջրի համար $\\sigma \\approx 0{,}07$ Ն/մ, օճառի լուծույթի համար՝ $\\approx 0{,}04$ Ն/մ, սնդիկի համար՝ $\\approx 0{,}5$ Ն/մ։ Հեղուկը ձգտում է փոքրացնել մակերևույթը․ ազատ կաթիլները գնդեր են։ Լվացող նյութերն ու տաքացումն իջեցնում են $\\sigma$-ն։

Հեղուկը **թրջում է** պինդ մարմինը, եթե նրա մոլեկուլները պինդ մարմնին ավելի ուժեղ են ձգվում, քան միմյանց (ջուրն ապակու վրա), և չի թրջում՝ հակառակ դեպքում (ջուրը մոմի վրա, սնդիկն ապակու վրա)։ Նեղ խողովակում թրջող հեղուկը բարձրանում է **մազանոթային բարձրության**
$$h = \\dfrac{2\\sigma}{\\rho g r}$$
չթրջողը նույնքան իջնում է։ Մազանոթայնությունը բարձրացնում է ջուրը հողում, թղթում և սրբիչներում։

## Բյուրեղային և ամորֆ մարմիններ

| | բյուրեղային | ամորֆ |
|---|---|---|
| կառուցվածք | կանոնավոր ցանց, հեռակա կարգ | անկարգություն, սառած հեղուկի նման |
| հալում | որոշակի ջերմաստիճանում | աստիճանաբար փափկում են |
| հատկություններ | անիզոտրոպ միաբյուրեղում | իզոտրոպ |
| օրինակներ | աղ, մետաղներ, սառույց, քվարց | ապակի, խեժ, պլաստմասսա, սաթ |

Մետաղները **բազմաբյուրեղներ** են․ բազում փոքրիկ պատահական կողմնորոշված բյուրեղներ, ուստի ամբողջությամբ իզոտրոպ են։ Միկան և գրաֆիտը շերտավորվում են ցանցի հարթությունների երկայնքով․ դա անիզոտրոպություն է։

## Պինդ մարմինների մեխանիկական հատկությունները

**Լարում** $\\sigma = \\dfrac{F}{S}$ (Պա), **հարաբերական դեֆորմացիա** $\\varepsilon = \\dfrac{\\Delta l}{l}$։ Փոքր դեֆորմացիաների դեպքում
$$\\sigma = E\\varepsilon, \\qquad \\Delta l = \\dfrac{F l}{E S}$$
որտեղ $E$-ն **Յունգի մոդուլն** է (պողպատ $2 \\cdot 10^{11}$ Պա, ալյումին $0{,}7 \\cdot 10^{11}$ Պա)։ **Առաձգականության սահմանից** այն կողմ դեֆորմացիան դառնում է պլաստիկ, **ամրության սահմանին** մարմինը քանդվում է։

Բոլոր խնդիրներում $g = 10$ մ/վ², $\\sigma_{\\text{ջուր}} = 0{,}07$ Ն/մ։

**Օրինակ 1։** $4$ սմ տրամագծով մետաղալարե օղակը բարձրացնում են ջրից։ Թաղանթը կպչում է լարի երկու կողմին․ $F = 2\\sigma \\cdot \\pi d = 2 \\cdot 0{,}07 \\cdot 0{,}126 \\approx 0{,}018$ Ն $= 18$ մՆ՝ օղակի կշռից բացի։

**Օրինակ 2։** Ջրի մազանոթային բարձրացումը $0{,}5$ մմ շառավղով խողովակում․ $h = \\dfrac{2 \\cdot 0{,}07}{1000 \\cdot 10 \\cdot 5 \\cdot 10^{-4}} = 0{,}028$ մ $= 2{,}8$ սմ։ Տասն անգամ բարակ խողովակում ջուրը բարձրանում է $28$ սմ։

**Օրինակ 3։** $5$ սմ շառավղով օճառի պղպջակի մակերևութային էներգիան ($\\sigma = 0{,}04$ Ն/մ), որն ունի երկու մակերևույթ․ $E = 2\\sigma \\cdot 4\\pi R^2 = 2 \\cdot 0{,}04 \\cdot 4\\pi \\cdot 0{,}0025 \\approx 2{,}5 \\cdot 10^{-3}$ Ջ։

**Օրինակ 4։** Կաթիլը պոկվում է $2$ մմ տրամագծով կաթոցիչի ծայրից, երբ նրա կշիռը հավասարվում է $\\sigma \\pi d$-ի․ $m = \\dfrac{0{,}07 \\cdot \\pi \\cdot 0{,}002}{10} \\approx 4{,}4 \\cdot 10^{-5}$ կգ $= 44$ մգ։ Մեկ միլիլիտր ջուրը տալիս է մոտ $23$ կաթիլ։

**Օրինակ 5։** $2$ մ երկարությամբ $1$ մմ² կտրվածքով պողպատե լարը կրում է $100$ Ն։ Լարումը $\\sigma = \\dfrac{100}{10^{-6}} = 10^8$ Պա, հարաբերական դեֆորմացիան $\\varepsilon = \\dfrac{10^8}{2 \\cdot 10^{11}} = 5 \\cdot 10^{-4}$, երկարացումը $\\Delta l = 5 \\cdot 10^{-4} \\cdot 2 = 1$ մմ։

**Օրինակ 6։** Սառույցը հալվում է ճիշտ $0$ °C-ում․ հալվելիս ջերմաստիճանը չի փոխվում։ Ապակին հալման կետ չունի․ այն փափկում է մոտավորապես $500$ °C-ից $1500$ °C և ցանկացած փուլում կարելի է ձևավորել։ Ապակին գերսառեցված հեղուկ է, շատ հին ապակին դանդաղ բյուրեղանում է և պղտորվում։

**Օրինակ 7։** Պղնձի ամրության սահմանը մոտ $2 \\cdot 10^8$ Պա է։ $1$ մմ տրամագծով լարն ունի $S = \\pi \\cdot (0{,}5 \\cdot 10^{-3})^2 \\approx 7{,}9 \\cdot 10^{-7}$ մ², ուստի այն կտրվում է $F = 2 \\cdot 10^8 \\cdot 7{,}9 \\cdot 10^{-7} \\approx 160$ Ն ուժից՝ մոտ $16$ կգ բեռ։

**Օրինակ 8։** Ջրաչափը կանգնած է ջրի վրա․ նրա ոտքերը չեն թրջվում, և մակերևութային թաղանթը ծռվում է դրանց տակ ցատկահարթակի նման։ Լվացող նյութի կաթիլն իջեցնում է $\\sigma$-ն, և միջատը խորտակվում է։ Սնդիկի կաթիլն ապակու վրա մնում է համարյա գնդաձև, որովհետև սնդիկը չի թրջում ապակին և մեծ $\\sigma$ ունի։

### Վարժություններ

1. Գտեք $10$ սմ պարագծով մետաղալարե շրջանակը ջրից դուրս հանելու համար անհրաժեշտ ուժը։
2. Գտեք ջրի մազանոթային բարձրացումը $0{,}2$ մմ շառավղով խողովակում։
3. Գտեք $10 \\times 10$ սմ երկու մակերևույթով օճառի թաղանթի մակերևութային էներգիան ($\\sigma = 0{,}04$ Ն/մ)։
4. Գտեք $1$ մմ տրամագծով ծայրից ընկնող կաթիլի զանգվածը։
5. $1$ մ երկարությամբ $2$ մմ² կտրվածքով պողպատե լարը կրում է $400$ Ն։ Գտեք լարումը, հարաբերական դեֆորմացիան և երկարացումը։
6. Ո՞ր մարմիններն են հալվում որոշակի ջերմաստիճանում՝ բյուրեղայի՞ն, թե՞ ամորֆ։
7. Գտեք $2$ մմ տրամագծով ալյումինե լարի կտրվելու բեռը (ամրության սահմանը $10^8$ Պա)։
8. Ինչո՞ւ է սեղանի վրա սնդիկի կաթիլը մնում կլոր։

### Պատասխաններ

1. $2 \\cdot 0{,}07 \\cdot 0{,}1 = 0{,}014$ Ն։ 2. $\\dfrac{0{,}14}{1000 \\cdot 10 \\cdot 2 \\cdot 10^{-4}} = 0{,}07$ մ $= 7$ սմ։ 3. $2 \\cdot 0{,}04 \\cdot 0{,}01 = 8 \\cdot 10^{-4}$ Ջ։ 4. $\\dfrac{0{,}07 \\cdot \\pi \\cdot 0{,}001}{10} \\approx 2{,}2 \\cdot 10^{-5}$ կգ $= 22$ մգ։ 5. $2 \\cdot 10^8$ Պա, $10^{-3}$, $1$ մմ։ 6. Բյուրեղայինները։ 7. $S \\approx 3{,}1 \\cdot 10^{-6}$ մ², $F \\approx 310$ Ն։ 8. Սնդիկը չի թրջում սեղանը, և մակերևութային լարվածությունն այն ձգում է նվազագույն մակերևույթի ձևի։`,
        ru: `## Поверхностное натяжение

Молекулы на поверхности жидкости притягиваются соседями внутрь, поэтому поверхность обладает дополнительной **поверхностной энергией** $E = \\sigma S$ и ведёт себя как натянутая плёнка. **Коэффициент поверхностного натяжения** $\\sigma$ (Н/м, или Дж/м²) — сила на единицу длины границы:
$$F = \\sigma \\ell.$$
Для воды $\\sigma \\approx 0{,}07$ Н/м, для мыльного раствора $\\approx 0{,}04$ Н/м, для ртути $\\approx 0{,}5$ Н/м. Жидкость стремится уменьшить поверхность: свободные капли — шары. Моющие средства и нагревание понижают $\\sigma$.

Жидкость **смачивает** твёрдое тело, если её молекулы притягиваются к нему сильнее, чем друг к другу (вода на стекле), и не смачивает в противном случае (вода на воске, ртуть на стекле). В узкой трубке смачивающая жидкость поднимается на **капиллярную высоту**
$$h = \\dfrac{2\\sigma}{\\rho g r},$$
несмачивающая опускается на столько же. Капиллярность поднимает воду в почве, бумаге и полотенцах.

## Кристаллические и аморфные тела

| | кристаллические | аморфные |
|---|---|---|
| строение | правильная решётка, дальний порядок | беспорядок, как у застывшей жидкости |
| плавление | при определённой температуре | размягчаются постепенно |
| свойства | анизотропны в монокристалле | изотропны |
| примеры | соль, металлы, лёд, кварц | стекло, смола, пластмассы, янтарь |

Металлы — **поликристаллы**: множество мелких случайно ориентированных кристаллов, поэтому в целом они изотропны. Слюда и графит расслаиваются по плоскостям решётки: это анизотропия.

## Механические свойства твёрдых тел

**Напряжение** $\\sigma = \\dfrac{F}{S}$ (Па), **относительная деформация** $\\varepsilon = \\dfrac{\\Delta l}{l}$. При малых деформациях
$$\\sigma = E\\varepsilon, \\qquad \\Delta l = \\dfrac{F l}{E S},$$
где $E$ — **модуль Юнга** (сталь $2 \\cdot 10^{11}$ Па, алюминий $0{,}7 \\cdot 10^{11}$ Па). За **пределом упругости** деформация становится пластической; при **пределе прочности** тело разрушается.

Во всех задачах $g = 10$ м/с², $\\sigma_{\\text{воды}} = 0{,}07$ Н/м.

**Пример 1.** Проволочное кольцо диаметром $4$ см поднимают из воды. Плёнка цепляется за обе стороны проволоки: $F = 2\\sigma \\cdot \\pi d = 2 \\cdot 0{,}07 \\cdot 0{,}126 \\approx 0{,}018$ Н $= 18$ мН, помимо веса кольца.

**Пример 2.** Капиллярный подъём воды в трубке радиусом $0{,}5$ мм: $h = \\dfrac{2 \\cdot 0{,}07}{1000 \\cdot 10 \\cdot 5 \\cdot 10^{-4}} = 0{,}028$ м $= 2{,}8$ см. В трубке в десять раз тоньше вода поднимается на $28$ см.

**Пример 3.** Поверхностная энергия мыльного пузыря радиусом $5$ см ($\\sigma = 0{,}04$ Н/м), у которого две поверхности: $E = 2\\sigma \\cdot 4\\pi R^2 = 2 \\cdot 0{,}04 \\cdot 4\\pi \\cdot 0{,}0025 \\approx 2{,}5 \\cdot 10^{-3}$ Дж.

**Пример 4.** Капля отрывается от носика пипетки диаметром $2$ мм, когда её вес равен $\\sigma \\pi d$: $m = \\dfrac{0{,}07 \\cdot \\pi \\cdot 0{,}002}{10} \\approx 4{,}4 \\cdot 10^{-5}$ кг $= 44$ мг. Один миллилитр воды даёт около $23$ капель.

**Пример 5.** Стальная проволока длиной $2$ м с сечением $1$ мм² несёт $100$ Н. Напряжение $\\sigma = \\dfrac{100}{10^{-6}} = 10^8$ Па, относительная деформация $\\varepsilon = \\dfrac{10^8}{2 \\cdot 10^{11}} = 5 \\cdot 10^{-4}$, удлинение $\\Delta l = 5 \\cdot 10^{-4} \\cdot 2 = 1$ мм.

**Пример 6.** Лёд плавится ровно при $0$ °C: пока он плавится, температура не меняется. У стекла нет температуры плавления: оно размягчается примерно от $500$ °C до $1500$ °C, и его можно формовать на любой стадии. Стекло — переохлаждённая жидкость; очень старое стекло медленно кристаллизуется и мутнеет.

**Пример 7.** Предел прочности меди около $2 \\cdot 10^8$ Па. Проволока диаметром $1$ мм имеет $S = \\pi \\cdot (0{,}5 \\cdot 10^{-3})^2 \\approx 7{,}9 \\cdot 10^{-7}$ м², поэтому она рвётся при $F = 2 \\cdot 10^8 \\cdot 7{,}9 \\cdot 10^{-7} \\approx 160$ Н — груз около $16$ кг.

**Пример 8.** Водомерка стоит на воде: её ножки не смачиваются, и поверхностная плёнка прогибается под ними как батут. Капля моющего средства понижает $\\sigma$, и насекомое тонет. Капля ртути на стекле остаётся почти шарообразной, потому что ртуть не смачивает стекло и имеет большое $\\sigma$.

### Упражнения

1. Найдите силу, нужную чтобы вытянуть из воды проволочную рамку периметром $10$ см.
2. Найдите капиллярный подъём воды в трубке радиусом $0{,}2$ мм.
3. Найдите поверхностную энергию мыльной плёнки $10 \\times 10$ см с двумя поверхностями ($\\sigma = 0{,}04$ Н/м).
4. Найдите массу капли, падающей с носика диаметром $1$ мм.
5. Стальная проволока длиной $1$ м с сечением $2$ мм² несёт $400$ Н. Найдите напряжение, относительную деформацию и удлинение.
6. Какие тела плавятся при определённой температуре — кристаллические или аморфные?
7. Найдите разрывающую нагрузку для алюминиевой проволоки диаметром $2$ мм (предел прочности $10^8$ Па).
8. Почему капля ртути на столе остаётся круглой?

### Ответы

1. $2 \\cdot 0{,}07 \\cdot 0{,}1 = 0{,}014$ Н. 2. $\\dfrac{0{,}14}{1000 \\cdot 10 \\cdot 2 \\cdot 10^{-4}} = 0{,}07$ м $= 7$ см. 3. $2 \\cdot 0{,}04 \\cdot 0{,}01 = 8 \\cdot 10^{-4}$ Дж. 4. $\\dfrac{0{,}07 \\cdot \\pi \\cdot 0{,}001}{10} \\approx 2{,}2 \\cdot 10^{-5}$ кг $= 22$ мг. 5. $2 \\cdot 10^8$ Па; $10^{-3}$; $1$ мм. 6. Кристаллические. 7. $S \\approx 3{,}1 \\cdot 10^{-6}$ м², $F \\approx 310$ Н. 8. Ртуть не смачивает стол, а поверхностное натяжение стягивает её в форму наименьшей поверхности.`,
      },
      [
        q(t("The surface tension force on a boundary of length ℓ is…", "ℓ երկարությամբ սահմանի վրա մակերևութային լարվածության ուժը…", "Сила поверхностного натяжения на границе длиной ℓ равна…"), [t("σℓ", "σℓ է", "σℓ"), t("σ/ℓ", "σ/ℓ է", "σ/ℓ"), t("σℓ²", "σℓ² է", "σℓ²")], 0),
        q(t("Free drops of liquid are spherical because…", "Հեղուկի ազատ կաթիլները գնդաձև են, որովհետև…", "Свободные капли жидкости шарообразны, потому что…"), [t("gravity pulls them", "ծանրությունը ձգում է դրանք", "их тянет тяжесть"), t("the liquid minimises its surface", "հեղուկը փոքրացնում է իր մակերևույթը", "жидкость уменьшает свою поверхность"), t("air presses on them equally", "օդը հավասար է ճնշում նրանց վրա", "воздух давит на них равномерно")], 1),
        q(t("The capillary rise in a tube is greater when the tube is…", "Խողովակում մազանոթային բարձրացումն ավելի մեծ է, երբ խողովակը…", "Капиллярный подъём в трубке больше, когда трубка…"), [t("wider", "ավելի լայն է", "шире"), t("narrower", "ավելի նեղ է", "уже"), t("longer", "ավելի երկար է", "длиннее")], 1),
        q(t("A body that melts at a definite temperature is…", "Որոշակի ջերմաստիճանում հալվող մարմինը…", "Тело, плавящееся при определённой температуре, —…"), [t("crystalline", "բյուրեղային է", "кристаллическое"), t("amorphous", "ամորֆ է", "аморфное"), t("a liquid", "հեղուկ է", "жидкость")], 0),
        q(t("Glass is an example of…", "Ապակին օրինակ է…", "Стекло — пример…"), [t("a single crystal", "միաբյուրեղի", "монокристалла"), t("a polycrystal", "բազմաբյուրեղի", "поликристалла"), t("an amorphous body", "ամորֆ մարմնի", "аморфного тела")], 2),
        q(t("Hooke's law for a rod in the form σ = Eε involves E, which is…", "Ձողի համար Հուկի օրենքը σ = Eε տեսքով պարունակում է E-ն, որը…", "В законе Гука для стержня σ = Eε величина E — это…"), [t("the elongation", "երկարացումն է", "удлинение"), t("Young's modulus", "Յունգի մոդուլն է", "модуль Юнга"), t("the strength limit", "ամրության սահմանն է", "предел прочности")], 1),
      ],
    ),
  ],
};
