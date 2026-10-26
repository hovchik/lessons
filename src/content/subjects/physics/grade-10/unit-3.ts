import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Thermodynamics", "Թերմոդինամիկա", "Термодинамика"),
  summary: t("Internal energy, work, first law, adiabatic process, second law, heat engines.", "Ներքին էներգիա, աշխատանք, առաջին օրենք, ադիաբատ պրոցես, երկրորդ օրենք, ջերմային շարժիչներ։", "Внутренняя энергия, работа, первый закон, адиабатный процесс, второй закон, тепловые двигатели."),
  lessons: [
    lesson(
      "internal-energy-work",
      ["Internal energy of an ideal gas; work in thermodynamics", "Իդեալական գազի ներքին էներգիա, աշխատանքը թերմոդինամիկայում", "Внутренняя энергия идеального газа; работа в термодинамике"],
      {
        en: ["Define internal energy and compute it for a monatomic ideal gas: U = 3νRT/2 = 3pV/2", "Compute the work of a gas as pΔV in an isobaric process and as the area under the p(V) graph in general", "Distinguish the two ways of changing internal energy, work and heat transfer, and compute amounts of heat"],
        hy: ["Սահմանել ներքին էներգիան և հաշվել այն միատոմ իդեալական գազի համար․ U = 3νRT/2 = 3pV/2", "Հաշվել գազի աշխատանքն իզոբար պրոցեսում pΔV-ով և ընդհանուր դեպքում p(V) գրաֆիկի տակի մակերեսով", "Տարբերել ներքին էներգիայի փոփոխման երկու եղանակը՝ աշխատանք և ջերմափոխանակություն, հաշվել ջերմաքանակներ"],
        ru: ["Определять внутреннюю энергию и вычислять её для одноатомного идеального газа: U = 3νRT/2 = 3pV/2", "Вычислять работу газа как pΔV в изобарном процессе и как площадь под графиком p(V) в общем случае", "Различать два способа изменения внутренней энергии — работу и теплопередачу, вычислять количества теплоты"],
      },
      {
        en: `## Internal energy

> The **internal energy** $U$ of a body is the sum of the kinetic energy of the chaotic motion of its molecules and the potential energy of their interaction. In an ideal gas there is no interaction, so $U$ is the total kinetic energy of the molecules.

For a **monatomic** ideal gas each molecule has $\\overline{E} = \\dfrac32 kT$, hence
$$U = \\dfrac32 N k T = \\dfrac32 \\nu R T = \\dfrac32 pV.$$
The internal energy of an ideal gas depends on its temperature only; in an isothermal process $\\Delta U = 0$. For diatomic gases (air) at ordinary temperatures $U = \\dfrac52 \\nu RT$, because the molecules also rotate.

## Work in thermodynamics

When a gas expands it pushes the piston and does **work**. At constant pressure
$$A = p\\,\\Delta V = p(V_2 - V_1) = \\nu R\\,\\Delta T.$$
In general the work of the gas equals the **area under the $p(V)$ graph**. Expansion: $A > 0$ (the gas does work); compression: $A < 0$ (work is done on the gas, $A' = -A$). In an isochoric process the work is zero. In a cycle the net work equals the area enclosed by the loop, positive if the cycle runs clockwise in the $pV$ plane.

## Heat

The internal energy can be changed in two ways: by doing work (rubbing, compressing) and by **heat transfer** (conduction, convection, radiation). The **amount of heat** for warming is $Q = cm\\,\\Delta t$; for melting $Q = \\lambda m$, for vaporisation $Q = Lm$. Constants: $c_{\\text{water}} = 4200$ J/(kg·°C), $\\lambda_{\\text{ice}} = 3{.}3 \\cdot 10^5$ J/kg, $L_{\\text{water}} = 2{.}3 \\cdot 10^6$ J/kg.

**Example 1.** Internal energy of $2$ mol of helium at $300$ K: $U = 1{.}5 \\cdot 2 \\cdot 8{.}31 \\cdot 300 \\approx 7500$ J.

**Example 2.** One mole of a monatomic gas is heated by $100$ K in any way whatsoever: $\\Delta U = 1{.}5 \\cdot 8{.}31 \\cdot 100 \\approx 1250$ J. The change does not depend on whether the process was isobaric or isochoric.

**Example 3.** A gas expands at a constant $2 \\cdot 10^5$ Pa from $1$ L to $3$ L: $A = 2 \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 400$ J.

**Example 4.** On the $p(V)$ graph the pressure rises linearly from $10^5$ to $3 \\cdot 10^5$ Pa while the volume grows from $1$ to $3$ L. The area is a trapezoid: $A = \\dfrac{10^5 + 3 \\cdot 10^5}{2} \\cdot 2 \\cdot 10^{-3} = 400$ J.

**Example 5.** One mole of a monatomic gas is heated isobarically by $50$ K. Work: $A = \\nu R\\,\\Delta T = 8{.}31 \\cdot 50 \\approx 415$ J. Change of internal energy: $\\Delta U = 1{.}5 \\cdot 415 \\approx 620$ J. The heat supplied is their sum, about $1040$ J (next lesson).

**Example 6.** A $20$ L vessel holds a monatomic gas at $1{.}5 \\cdot 10^5$ Pa: $U = 1{.}5 \\cdot 1{.}5 \\cdot 10^5 \\cdot 0{.}02 = 4500$ J, whatever the gas and the temperature.

**Example 7.** A gas runs round a rectangular cycle: isobaric expansion at $2 \\cdot 10^5$ Pa from $1$ to $3$ L, isochoric cooling to $10^5$ Pa, isobaric compression back to $1$ L, isochoric heating. Net work $= 400 - 200 = 200$ J, the area of the rectangle $10^5 \\cdot 2 \\cdot 10^{-3}$.

**Example 8.** Heat to warm $2$ kg of water from $20$ °C to $100$ °C: $Q = 4200 \\cdot 2 \\cdot 80 = 672$ kJ. To boil it all away: $Q = 2{.}3 \\cdot 10^6 \\cdot 2 = 4{.}6$ MJ, seven times more.

### Exercises

1. Find the internal energy of $3$ mol of a monatomic gas at $400$ K.
2. $2$ mol of a monatomic gas is cooled by $50$ K. Find $\\Delta U$.
3. Find the work of a gas expanding at $10^5$ Pa from $2$ L to $5$ L.
4. The pressure rises linearly from $2 \\cdot 10^5$ to $4 \\cdot 10^5$ Pa while the volume grows from $2$ to $4$ L. Find the work.
5. Find the work of $2$ mol of gas heated isobarically by $100$ K.
6. Find the internal energy of a monatomic gas in $10$ L at $3 \\cdot 10^5$ Pa.
7. Find the net work in a rectangular cycle between $10^5$ and $3 \\cdot 10^5$ Pa, $2$ and $4$ L.
8. How much heat melts $0{.}5$ kg of ice at $0$ °C and warms the water to $20$ °C?

### Answers

1. $1{.}5 \\cdot 3 \\cdot 8{.}31 \\cdot 400 \\approx 15$ kJ. 2. $-1{.}5 \\cdot 2 \\cdot 8{.}31 \\cdot 50 \\approx -1{.}25$ kJ. 3. $300$ J. 4. $\\dfrac{2 + 4}{2} \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 600$ J. 5. $2 \\cdot 8{.}31 \\cdot 100 \\approx 1{.}66$ kJ. 6. $1{.}5 \\cdot 3 \\cdot 10^5 \\cdot 0{.}01 = 4500$ J. 7. $2 \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 400$ J. 8. $3{.}3 \\cdot 10^5 \\cdot 0{.}5 + 4200 \\cdot 0{.}5 \\cdot 20 = 165 + 42 = 207$ kJ.`,
        hy: `## Ներքին էներգիա

> Մարմնի **ներքին էներգիան** $U$ նրա մոլեկուլների քաոսային շարժման կինետիկ էներգիայի և դրանց փոխազդեցության պոտենցիալ էներգիայի գումարն է։ Իդեալական գազում փոխազդեցություն չկա, ուստի $U$-ն մոլեկուլների լրիվ կինետիկ էներգիան է։

**Միատոմ** իդեալական գազի ամեն մոլեկուլն ունի $\\overline{E} = \\dfrac32 kT$, հետևաբար
$$U = \\dfrac32 N k T = \\dfrac32 \\nu R T = \\dfrac32 pV$$
Իդեալական գազի ներքին էներգիան կախված է միայն նրա ջերմաստիճանից, իզոթերմ պրոցեսում $\\Delta U = 0$։ Երկատոմ գազերի (օդ) համար սովորական ջերմաստիճաններում $U = \\dfrac52 \\nu RT$, որովհետև մոլեկուլները նաև պտտվում են։

## Աշխատանքը թերմոդինամիկայում

Ընդարձակվելիս գազը հրում է մխոցը և կատարում **աշխատանք**։ Հաստատուն ճնշման դեպքում
$$A = p\\,\\Delta V = p(V_2 - V_1) = \\nu R\\,\\Delta T$$
Ընդհանուր դեպքում գազի աշխատանքը հավասար է **$p(V)$ գրաֆիկի տակի մակերեսին**։ Ընդարձակում․ $A > 0$ (գազն աշխատանք է կատարում), սեղմում․ $A < 0$ (աշխատանք է կատարվում գազի վրա, $A' = -A$)։ Իզոխոր պրոցեսում աշխատանքը զրո է։ Ցիկլում արդյունարար աշխատանքը հավասար է օղակով պարփակված մակերեսին, դրական է, եթե ցիկլը $pV$ հարթությունում գնում է ժամսլաքի ուղղությամբ։

## Ջերմություն

Ներքին էներգիան կարելի է փոխել երկու եղանակով․ աշխատանք կատարելով (շփում, սեղմում) և **ջերմափոխանակությամբ** (ջերմահաղորդում, կոնվեկցիա, ճառագայթում)։ Տաքացման **ջերմաքանակը** $Q = cm\\,\\Delta t$ է, հալման՝ $Q = \\lambda m$, գոլորշիացման՝ $Q = Lm$։ Հաստատուններ․ $c_{\\text{ջուր}} = 4200$ Ջ/(կգ·°C), $\\lambda_{\\text{սառույց}} = 3{,}3 \\cdot 10^5$ Ջ/կգ, $L_{\\text{ջուր}} = 2{,}3 \\cdot 10^6$ Ջ/կգ։

**Օրինակ 1։** $2$ մոլ հելիումի ներքին էներգիան $300$ Կ-ում․ $U = 1{,}5 \\cdot 2 \\cdot 8{,}31 \\cdot 300 \\approx 7500$ Ջ։

**Օրինակ 2։** Մեկ մոլ միատոմ գազը ցանկացած եղանակով տաքացվում է $100$ Կ-ով․ $\\Delta U = 1{,}5 \\cdot 8{,}31 \\cdot 100 \\approx 1250$ Ջ։ Փոփոխությունը կախված չէ պրոցեսի իզոբար կամ իզոխոր լինելուց։

**Օրինակ 3։** Գազն ընդարձակվում է հաստատուն $2 \\cdot 10^5$ Պա ճնշման տակ $1$ լ-ից $3$ լ․ $A = 2 \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 400$ Ջ։

**Օրինակ 4։** $p(V)$ գրաֆիկում ճնշումը գծայնորեն աճում է $10^5$-ից $3 \\cdot 10^5$ Պա, մինչ ծավալն աճում է $1$-ից $3$ լ։ Մակերեսը սեղան է․ $A = \\dfrac{10^5 + 3 \\cdot 10^5}{2} \\cdot 2 \\cdot 10^{-3} = 400$ Ջ։

**Օրինակ 5։** Մեկ մոլ միատոմ գազն իզոբար տաքացվում է $50$ Կ-ով։ Աշխատանք․ $A = \\nu R\\,\\Delta T = 8{,}31 \\cdot 50 \\approx 415$ Ջ։ Ներքին էներգիայի փոփոխություն․ $\\Delta U = 1{,}5 \\cdot 415 \\approx 620$ Ջ։ Հաղորդված ջերմությունը դրանց գումարն է, մոտ $1040$ Ջ (հաջորդ դաս)։

**Օրինակ 6։** $20$ լ անոթում միատոմ գազ է $1{,}5 \\cdot 10^5$ Պա ճնշման տակ․ $U = 1{,}5 \\cdot 1{,}5 \\cdot 10^5 \\cdot 0{,}02 = 4500$ Ջ՝ անկախ գազից և ջերմաստիճանից։

**Օրինակ 7։** Գազն անցնում է ուղղանկյուն ցիկլ․ իզոբար ընդարձակում $2 \\cdot 10^5$ Պա ճնշման տակ $1$-ից $3$ լ, իզոխոր սառեցում մինչև $10^5$ Պա, իզոբար սեղմում հետ մինչև $1$ լ, իզոխոր տաքացում։ Արդյունարար աշխատանքը $= 400 - 200 = 200$ Ջ, ուղղանկյան մակերեսը $10^5 \\cdot 2 \\cdot 10^{-3}$։

**Օրինակ 8։** $2$ կգ ջուրը $20$ °C-ից $100$ °C տաքացնելու ջերմությունը․ $Q = 4200 \\cdot 2 \\cdot 80 = 672$ կՋ։ Ամբողջն եռացնել-գոլորշիացնելու համար․ $Q = 2{,}3 \\cdot 10^6 \\cdot 2 = 4{,}6$ ՄՋ, յոթ անգամ ավելի։

### Վարժություններ

1. Գտեք $3$ մոլ միատոմ գազի ներքին էներգիան $400$ Կ-ում։
2. $2$ մոլ միատոմ գազը սառեցվում է $50$ Կ-ով։ Գտեք $\\Delta U$-ն։
3. Գտեք $10^5$ Պա ճնշման տակ $2$ լ-ից $5$ լ ընդարձակվող գազի աշխատանքը։
4. Ճնշումը գծայնորեն աճում է $2 \\cdot 10^5$-ից $4 \\cdot 10^5$ Պա, մինչ ծավալն աճում է $2$-ից $4$ լ։ Գտեք աշխատանքը։
5. Գտեք $100$ Կ-ով իզոբար տաքացվող $2$ մոլ գազի աշխատանքը։
6. Գտեք $10$ լ ծավալում $3 \\cdot 10^5$ Պա ճնշման տակ միատոմ գազի ներքին էներգիան։
7. Գտեք արդյունարար աշխատանքը $10^5$ և $3 \\cdot 10^5$ Պա, $2$ և $4$ լ միջև ուղղանկյուն ցիկլում։
8. Որքա՞ն ջերմություն է հալեցնում $0{,}5$ կգ սառույցը $0$ °C-ում և տաքացնում ջուրը մինչև $20$ °C ջերմաստիճան։

### Պատասխաններ

1. $1{,}5 \\cdot 3 \\cdot 8{,}31 \\cdot 400 \\approx 15$ կՋ։ 2. $-1{,}5 \\cdot 2 \\cdot 8{,}31 \\cdot 50 \\approx -1{,}25$ կՋ։ 3. $300$ Ջ։ 4. $\\dfrac{2 + 4}{2} \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 600$ Ջ։ 5. $2 \\cdot 8{,}31 \\cdot 100 \\approx 1{,}66$ կՋ։ 6. $1{,}5 \\cdot 3 \\cdot 10^5 \\cdot 0{,}01 = 4500$ Ջ։ 7. $2 \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 400$ Ջ։ 8. $3{,}3 \\cdot 10^5 \\cdot 0{,}5 + 4200 \\cdot 0{,}5 \\cdot 20 = 165 + 42 = 207$ կՋ։`,
        ru: `## Внутренняя энергия

> **Внутренняя энергия** $U$ тела — сумма кинетической энергии хаотического движения его молекул и потенциальной энергии их взаимодействия. В идеальном газе взаимодействия нет, поэтому $U$ — полная кинетическая энергия молекул.

Для **одноатомного** идеального газа каждая молекула имеет $\\overline{E} = \\dfrac32 kT$, поэтому
$$U = \\dfrac32 N k T = \\dfrac32 \\nu R T = \\dfrac32 pV.$$
Внутренняя энергия идеального газа зависит только от его температуры; в изотермическом процессе $\\Delta U = 0$. Для двухатомных газов (воздух) при обычных температурах $U = \\dfrac52 \\nu RT$, так как молекулы ещё и вращаются.

## Работа в термодинамике

Расширяясь, газ толкает поршень и совершает **работу**. При постоянном давлении
$$A = p\\,\\Delta V = p(V_2 - V_1) = \\nu R\\,\\Delta T.$$
В общем случае работа газа равна **площади под графиком $p(V)$**. Расширение: $A > 0$ (газ совершает работу); сжатие: $A < 0$ (работу совершают над газом, $A' = -A$). В изохорном процессе работа равна нулю. В цикле суммарная работа равна площади, охваченной петлёй, и положительна, если цикл идёт по часовой стрелке в плоскости $pV$.

## Теплота

Внутреннюю энергию можно изменить двумя способами: совершением работы (трение, сжатие) и **теплопередачей** (теплопроводность, конвекция, излучение). **Количество теплоты** при нагревании $Q = cm\\,\\Delta t$; при плавлении $Q = \\lambda m$, при парообразовании $Q = Lm$. Константы: $c_{\\text{воды}} = 4200$ Дж/(кг·°C), $\\lambda_{\\text{льда}} = 3{,}3 \\cdot 10^5$ Дж/кг, $L_{\\text{воды}} = 2{,}3 \\cdot 10^6$ Дж/кг.

**Пример 1.** Внутренняя энергия $2$ моль гелия при $300$ К: $U = 1{,}5 \\cdot 2 \\cdot 8{,}31 \\cdot 300 \\approx 7500$ Дж.

**Пример 2.** Один моль одноатомного газа нагревают на $100$ К любым способом: $\\Delta U = 1{,}5 \\cdot 8{,}31 \\cdot 100 \\approx 1250$ Дж. Изменение не зависит от того, был процесс изобарным или изохорным.

**Пример 3.** Газ расширяется при постоянном давлении $2 \\cdot 10^5$ Па от $1$ л до $3$ л: $A = 2 \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 400$ Дж.

**Пример 4.** На графике $p(V)$ давление линейно растёт от $10^5$ до $3 \\cdot 10^5$ Па, пока объём растёт от $1$ до $3$ л. Площадь — трапеция: $A = \\dfrac{10^5 + 3 \\cdot 10^5}{2} \\cdot 2 \\cdot 10^{-3} = 400$ Дж.

**Пример 5.** Один моль одноатомного газа изобарно нагревают на $50$ К. Работа: $A = \\nu R\\,\\Delta T = 8{,}31 \\cdot 50 \\approx 415$ Дж. Изменение внутренней энергии: $\\Delta U = 1{,}5 \\cdot 415 \\approx 620$ Дж. Подведённая теплота — их сумма, около $1040$ Дж (следующий урок).

**Пример 6.** В сосуде объёмом $20$ л одноатомный газ при $1{,}5 \\cdot 10^5$ Па: $U = 1{,}5 \\cdot 1{,}5 \\cdot 10^5 \\cdot 0{,}02 = 4500$ Дж, каков бы ни был газ и его температура.

**Пример 7.** Газ совершает прямоугольный цикл: изобарное расширение при $2 \\cdot 10^5$ Па от $1$ до $3$ л, изохорное охлаждение до $10^5$ Па, изобарное сжатие обратно до $1$ л, изохорное нагревание. Суммарная работа $= 400 - 200 = 200$ Дж, площадь прямоугольника $10^5 \\cdot 2 \\cdot 10^{-3}$.

**Пример 8.** Теплота для нагревания $2$ кг воды от $20$ °C до $100$ °C: $Q = 4200 \\cdot 2 \\cdot 80 = 672$ кДж. Чтобы выпарить её целиком: $Q = 2{,}3 \\cdot 10^6 \\cdot 2 = 4{,}6$ МДж, в семь раз больше.

### Упражнения

1. Найдите внутреннюю энергию $3$ моль одноатомного газа при $400$ К.
2. $2$ моль одноатомного газа охлаждают на $50$ К. Найдите $\\Delta U$.
3. Найдите работу газа, расширяющегося при $10^5$ Па от $2$ л до $5$ л.
4. Давление линейно растёт от $2 \\cdot 10^5$ до $4 \\cdot 10^5$ Па, пока объём растёт от $2$ до $4$ л. Найдите работу.
5. Найдите работу $2$ моль газа, изобарно нагреваемого на $100$ К.
6. Найдите внутреннюю энергию одноатомного газа в $10$ л при $3 \\cdot 10^5$ Па.
7. Найдите суммарную работу в прямоугольном цикле между $10^5$ и $3 \\cdot 10^5$ Па, $2$ и $4$ л.
8. Сколько теплоты нужно, чтобы расплавить $0{,}5$ кг льда при $0$ °C и нагреть воду до $20$ °C?

### Ответы

1. $1{,}5 \\cdot 3 \\cdot 8{,}31 \\cdot 400 \\approx 15$ кДж. 2. $-1{,}5 \\cdot 2 \\cdot 8{,}31 \\cdot 50 \\approx -1{,}25$ кДж. 3. $300$ Дж. 4. $\\dfrac{2 + 4}{2} \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 600$ Дж. 5. $2 \\cdot 8{,}31 \\cdot 100 \\approx 1{,}66$ кДж. 6. $1{,}5 \\cdot 3 \\cdot 10^5 \\cdot 0{,}01 = 4500$ Дж. 7. $2 \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 400$ Дж. 8. $3{,}3 \\cdot 10^5 \\cdot 0{,}5 + 4200 \\cdot 0{,}5 \\cdot 20 = 165 + 42 = 207$ кДж.`,
      },
      [
        q(t("The internal energy of an ideal gas depends on…", "Իդեալական գազի ներքին էներգիան կախված է…", "Внутренняя энергия идеального газа зависит от…"), [t("its temperature only", "միայն նրա ջերմաստիճանից", "только от его температуры"), t("its volume only", "միայն նրա ծավալից", "только от его объёма"), t("the shape of the vessel", "անոթի ձևից", "от формы сосуда")], 0),
        q(t("The internal energy of a monatomic ideal gas equals…", "Միատոմ իդեալական գազի ներքին էներգիան հավասար է…", "Внутренняя энергия одноатомного идеального газа равна…"), [t("3νRT/2", "3νRT/2", "3νRT/2"), t("νRT", "νRT", "νRT"), t("3pV", "3pV", "3pV")], 0),
        q(t("The work of a gas in an isochoric process is…", "Գազի աշխատանքն իզոխոր պրոցեսում…", "Работа газа в изохорном процессе…"), [t("pΔV", "pΔV է", "pΔV"), t("zero", "զրո է", "равна нулю"), t("νRΔT", "νRΔT է", "νRΔT")], 1),
        q(t("On the p(V) graph the work of the gas is…", "p(V) գրաֆիկում գազի աշխատանքը…", "На графике p(V) работа газа — это…"), [t("the slope of the curve", "կորի թեքությունն է", "наклон кривой"), t("the area under the curve", "կորի տակի մակերեսն է", "площадь под кривой"), t("the length of the curve", "կորի երկարությունն է", "длина кривой")], 1),
        q(t("A gas expands at 10⁵ Pa from 2 L to 5 L. Its work is…", "Գազն ընդարձակվում է 10⁵ Պա ճնշման տակ 2 լ-ից 5 լ։ Նրա աշխատանքը…", "Газ расширяется при 10⁵ Па от 2 л до 5 л. Его работа…"), [t("300 J", "300 Ջ է", "300 Дж"), t("3000 J", "3000 Ջ է", "3000 Дж"), t("30 J", "30 Ջ է", "30 Дж")], 0),
        q(t("The two ways of changing internal energy are…", "Ներքին էներգիայի փոփոխման երկու եղանակներն են…", "Два способа изменения внутренней энергии — это…"), [t("heating and cooling", "տաքացումը և սառեցումը", "нагревание и охлаждение"), t("work and heat transfer", "աշխատանքը և ջերմափոխանակությունը", "работа и теплопередача"), t("expansion and compression", "ընդարձակումը և սեղմումը", "расширение и сжатие")], 1),
      ],
    ),
    lesson(
      "first-law",
      ["First law of thermodynamics; applications to isoprocesses", "Թերմոդինամիկայի առաջին օրենք, իզոպրոցեսներ", "Первый закон термодинамики; применение к изопроцессам"],
      {
        en: ["State the first law Q = ΔU + A and apply the sign conventions for heat, work and internal energy", "Write the first law for isothermal, isochoric, isobaric and adiabatic processes of an ideal gas", "Explain adiabatic heating and cooling and compute molar heat capacities of a monatomic gas"],
        hy: ["Ձևակերպել առաջին օրենքը Q = ΔU + A և կիրառել ջերմության, աշխատանքի և ներքին էներգիայի նշանների կանոնները", "Գրել առաջին օրենքն իդեալական գազի իզոթերմ, իզոխոր, իզոբար և ադիաբատ պրոցեսների համար", "Բացատրել ադիաբատ տաքացումն ու սառեցումը և հաշվել միատոմ գազի մոլային ջերմունակությունները"],
        ru: ["Формулировать первый закон Q = ΔU + A и применять правила знаков для теплоты, работы и внутренней энергии", "Записывать первый закон для изотермического, изохорного, изобарного и адиабатного процессов идеального газа", "Объяснять адиабатное нагревание и охлаждение и вычислять молярные теплоёмкости одноатомного газа"],
      },
      {
        en: `## The first law

> **First law of thermodynamics.** The heat $Q$ received by a system goes into the change of its internal energy and into the work done by the system on external bodies:
> $$Q = \\Delta U + A.$$

This is the law of conservation of energy for thermal processes. Signs: $Q > 0$ when heat is received, $Q < 0$ when given away; $A > 0$ when the gas expands (does work), $A < 0$ when it is compressed; $\\Delta U > 0$ when the gas warms up. With the work $A'$ done on the gas by external forces, $A' = -A$ and $\\Delta U = Q + A'$. A perpetual motion machine of the first kind, doing work without any source of energy, is impossible.

## Isoprocesses of an ideal gas

| process | what is zero | first law | heat for a monatomic gas |
|---|---|---|---|
| isothermal | $\\Delta U = 0$ | $Q = A$ | $Q = A$ |
| isochoric | $A = 0$ | $Q = \\Delta U$ | $Q = \\dfrac32 \\nu R\\,\\Delta T$ |
| isobaric | nothing | $Q = \\Delta U + p\\,\\Delta V$ | $Q = \\dfrac52 \\nu R\\,\\Delta T$ |
| adiabatic | $Q = 0$ | $A = -\\Delta U$ | $0$ |

In an **adiabatic process** there is no heat exchange with the surroundings (fast processes, insulated vessels). An adiabatically expanding gas does work at the expense of its internal energy and **cools**; a compressed gas **heats up**: a bicycle pump gets warm, the air in a diesel engine is compressed until the fuel ignites, rising air expands and cools to form clouds.

The **molar heat capacities** of a monatomic gas: $C_V = \\dfrac32 R \\approx 12{.}5$ J/(mol·K), $C_p = \\dfrac52 R \\approx 20{.}8$ J/(mol·K), with $C_p - C_V = R$: at constant pressure part of the heat goes into work.

**Example 1.** A gas receives $500$ J of heat and does $200$ J of work. $\\Delta U = Q - A = 300$ J: the gas warms.

**Example 2.** External forces compress a gas doing $300$ J of work on it, and the gas gives $100$ J of heat to the surroundings. $Q = -100$ J, $A = -300$ J, $\\Delta U = -100 + 300 = 200$ J.

**Example 3.** A gas expands isothermally and receives $800$ J of heat. Since $\\Delta U = 0$, the work is $A = 800$ J: all the heat is converted into work.

**Example 4.** One mole of a monatomic gas is heated isochorically by $100$ K: $A = 0$, $Q = \\Delta U = 1{.}5 \\cdot 8{.}31 \\cdot 100 \\approx 1250$ J.

**Example 5.** The same heating done isobarically: $\\Delta U \\approx 1250$ J, $A = \\nu R\\,\\Delta T \\approx 830$ J, $Q \\approx 2080$ J. Only $\\dfrac{830}{2080} = 40\\%$ of the heat becomes work; the rest warms the gas.

**Example 6.** Two moles of a monatomic gas expand adiabatically and do $600$ J of work. $\\Delta U = -600$ J, and $\\Delta T = \\dfrac{-600}{1{.}5 \\cdot 2 \\cdot 8{.}31} \\approx -24$ K: the gas cools by $24$ K.

**Example 7.** In a diesel engine the air is compressed about $16$ times in a few milliseconds. The process is practically adiabatic, the work of the piston turns into internal energy and the air reaches $600$ °C and more, enough to ignite the injected fuel without a spark.

**Example 8.** How much heat warms $2$ mol of a monatomic gas by $30$ K at constant pressure and at constant volume? $Q_p = 2 \\cdot 20{.}8 \\cdot 30 \\approx 1250$ J, $Q_V = 2 \\cdot 12{.}5 \\cdot 30 \\approx 750$ J. The difference, $2 \\cdot 8{.}31 \\cdot 30 \\approx 500$ J, is the work of expansion.

### Exercises

1. A gas receives $1000$ J of heat and does $400$ J of work. Find $\\Delta U$.
2. External forces do $500$ J of work on a gas and it gives away $200$ J of heat. Find $\\Delta U$.
3. A gas receives $1200$ J in an isothermal process. Find its work.
4. $2$ mol of a monatomic gas is heated isochorically by $50$ K. Find $Q$.
5. $2$ mol of a monatomic gas is heated isobarically by $50$ K. Find $A$ and $Q$.
6. One mole of a monatomic gas is compressed adiabatically; external forces do $900$ J of work. Find $\\Delta U$ and $\\Delta T$.
7. A monatomic gas expands isobarically and does $400$ J of work. Find $\\Delta U$ and $Q$.
8. Why does the air coming out of a tyre valve feel cold?

### Answers

1. $600$ J. 2. $300$ J. 3. $1200$ J. 4. $1{.}5 \\cdot 2 \\cdot 8{.}31 \\cdot 50 \\approx 1250$ J. 5. $A \\approx 830$ J; $Q \\approx 2080$ J. 6. $\\Delta U = 900$ J; $\\Delta T = \\dfrac{900}{1{.}5 \\cdot 8{.}31} \\approx 72$ K. 7. $\\Delta U = 1{.}5 A = 600$ J; $Q = 1000$ J. 8. It expands quickly, almost adiabatically, doing work at the expense of its internal energy, so it cools.`,
        hy: `## Առաջին օրենքը

> **Թերմոդինամիկայի առաջին օրենք։** Համակարգի ստացած $Q$ ջերմությունը գնում է նրա ներքին էներգիայի փոփոխության և արտաքին մարմինների վրա համակարգի կատարած աշխատանքի․
> $$Q = \\Delta U + A$$

Դա էներգիայի պահպանման օրենքն է ջերմային պրոցեսների համար։ Նշանները․ $Q > 0$, երբ ջերմություն է ստացվում, $Q < 0$, երբ տրվում է, $A > 0$, երբ գազն ընդարձակվում է (աշխատանք է կատարում), $A < 0$, երբ սեղմվում է, $\\Delta U > 0$, երբ գազը տաքանում է։ Արտաքին ուժերի՝ գազի վրա կատարած $A'$ աշխատանքով $A' = -A$ և $\\Delta U = Q + A'$։ Առաջին կարգի հավերժական շարժիչը, որն աշխատանք է կատարում առանց էներգիայի աղբյուրի, անհնար է։

## Իդեալական գազի իզոպրոցեսները

| պրոցես | ինչն է զրո | առաջին օրենք | ջերմությունը միատոմ գազի համար |
|---|---|---|---|
| իզոթերմ | $\\Delta U = 0$ | $Q = A$ | $Q = A$ |
| իզոխոր | $A = 0$ | $Q = \\Delta U$ | $Q = \\dfrac32 \\nu R\\,\\Delta T$ |
| իզոբար | ոչինչ | $Q = \\Delta U + p\\,\\Delta V$ | $Q = \\dfrac52 \\nu R\\,\\Delta T$ |
| ադիաբատ | $Q = 0$ | $A = -\\Delta U$ | $0$ |

**Ադիաբատ պրոցեսում** շրջապատի հետ ջերմափոխանակություն չկա (արագ պրոցեսներ, մեկուսացված անոթներ)։ Ադիաբատ ընդարձակվող գազն աշխատանք է կատարում ներքին էներգիայի հաշվին և **սառչում է**, սեղմվող գազը **տաքանում է**․ հեծանիվի պոմպը տաքանում է, դիզելային շարժիչում օդը սեղմվում է, մինչև վառելիքը բռնկվի, բարձրացող օդն ընդարձակվում և սառչում է՝ առաջացնելով ամպեր։

Միատոմ գազի **մոլային ջերմունակությունները**․ $C_V = \\dfrac32 R \\approx 12{,}5$ Ջ/(մոլ·Կ), $C_p = \\dfrac52 R \\approx 20{,}8$ Ջ/(մոլ·Կ), որտեղ $C_p - C_V = R$․ հաստատուն ճնշման դեպքում ջերմության մի մասը գնում է աշխատանքի։

**Օրինակ 1։** Գազը ստանում է $500$ Ջ ջերմություն և կատարում $200$ Ջ աշխատանք։ $\\Delta U = Q - A = 300$ Ջ․ գազը տաքանում է։

**Օրինակ 2։** Արտաքին ուժերը սեղմում են գազը՝ կատարելով նրա վրա $300$ Ջ աշխատանք, և գազը շրջապատին տալիս է $100$ Ջ ջերմություն։ $Q = -100$ Ջ, $A = -300$ Ջ, $\\Delta U = -100 + 300 = 200$ Ջ։

**Օրինակ 3։** Գազն իզոթերմ ընդարձակվում է և ստանում $800$ Ջ ջերմություն։ Քանի որ $\\Delta U = 0$, աշխատանքը $A = 800$ Ջ է․ ամբողջ ջերմությունը դառնում է աշխատանք։

**Օրինակ 4։** Մեկ մոլ միատոմ գազն իզոխոր տաքացվում է $100$ Կ-ով․ $A = 0$, $Q = \\Delta U = 1{,}5 \\cdot 8{,}31 \\cdot 100 \\approx 1250$ Ջ։

**Օրինակ 5։** Նույն տաքացումն իզոբար․ $\\Delta U \\approx 1250$ Ջ, $A = \\nu R\\,\\Delta T \\approx 830$ Ջ, $Q \\approx 2080$ Ջ։ Ջերմության միայն $\\dfrac{830}{2080} = 40\\%$-ն է դառնում աշխատանք, մնացածը տաքացնում է գազը։

**Օրինակ 6։** Երկու մոլ միատոմ գազն ադիաբատ ընդարձակվում է և կատարում $600$ Ջ աշխատանք։ $\\Delta U = -600$ Ջ, և $\\Delta T = \\dfrac{-600}{1{,}5 \\cdot 2 \\cdot 8{,}31} \\approx -24$ Կ․ գազը սառչում է $24$ Կ-ով։

**Օրինակ 7։** Դիզելային շարժիչում օդը մի քանի միլիվայրկյանում սեղմվում է մոտ $16$ անգամ։ Պրոցեսը գործնականում ադիաբատ է, մխոցի աշխատանքը դառնում է ներքին էներգիա, և օդը հասնում է $600$ °C և ավելի՝ բավարար, որ ներարկված վառելիքը բռնկվի առանց կայծի։

**Օրինակ 8։** Որքա՞ն ջերմություն է տաքացնում $2$ մոլ միատոմ գազը $30$ Կ-ով հաստատուն ճնշման և հաստատուն ծավալի դեպքում։ $Q_p = 2 \\cdot 20{,}8 \\cdot 30 \\approx 1250$ Ջ, $Q_V = 2 \\cdot 12{,}5 \\cdot 30 \\approx 750$ Ջ։ Տարբերությունը, $2 \\cdot 8{,}31 \\cdot 30 \\approx 500$ Ջ, ընդարձակման աշխատանքն է։

### Վարժություններ

1. Գազը ստանում է $1000$ Ջ ջերմություն և կատարում $400$ Ջ աշխատանք։ Գտեք $\\Delta U$-ն։
2. Արտաքին ուժերը գազի վրա կատարում են $500$ Ջ աշխատանք, և այն տալիս է $200$ Ջ ջերմություն։ Գտեք $\\Delta U$-ն։
3. Գազն իզոթերմ պրոցեսում ստանում է $1200$ Ջ։ Գտեք նրա աշխատանքը։
4. $2$ մոլ միատոմ գազն իզոխոր տաքացվում է $50$ Կ-ով։ Գտեք $Q$-ն։
5. $2$ մոլ միատոմ գազն իզոբար տաքացվում է $50$ Կ-ով։ Գտեք $A$-ն և $Q$-ն։
6. Մեկ մոլ միատոմ գազն ադիաբատ սեղմվում է, արտաքին ուժերը կատարում են $900$ Ջ աշխատանք։ Գտեք $\\Delta U$-ն և $\\Delta T$-ն։
7. Միատոմ գազն իզոբար ընդարձակվում է և կատարում $400$ Ջ աշխատանք։ Գտեք $\\Delta U$-ն և $Q$-ն։
8. Ինչո՞ւ է անվադողի փականից դուրս եկող օդը սառն զգացվում։

### Պատասխաններ

1. $600$ Ջ։ 2. $300$ Ջ։ 3. $1200$ Ջ։ 4. $1{,}5 \\cdot 2 \\cdot 8{,}31 \\cdot 50 \\approx 1250$ Ջ։ 5. $A \\approx 830$ Ջ, $Q \\approx 2080$ Ջ։ 6. $\\Delta U = 900$ Ջ, $\\Delta T = \\dfrac{900}{1{,}5 \\cdot 8{,}31} \\approx 72$ Կ։ 7. $\\Delta U = 1{,}5 A = 600$ Ջ, $Q = 1000$ Ջ։ 8. Այն արագ, համարյա ադիաբատ ընդարձակվում է՝ աշխատանք կատարելով ներքին էներգիայի հաշվին, ուստի սառչում է։`,
        ru: `## Первый закон

> **Первый закон термодинамики.** Теплота $Q$, полученная системой, идёт на изменение её внутренней энергии и на работу, совершаемую системой над внешними телами:
> $$Q = \\Delta U + A.$$

Это закон сохранения энергии для тепловых процессов. Знаки: $Q > 0$, когда теплота получена, $Q < 0$, когда отдана; $A > 0$, когда газ расширяется (совершает работу), $A < 0$, когда его сжимают; $\\Delta U > 0$, когда газ нагревается. Через работу $A'$ внешних сил над газом $A' = -A$ и $\\Delta U = Q + A'$. Вечный двигатель первого рода, совершающий работу без источника энергии, невозможен.

## Изопроцессы идеального газа

| процесс | что равно нулю | первый закон | теплота для одноатомного газа |
|---|---|---|---|
| изотермический | $\\Delta U = 0$ | $Q = A$ | $Q = A$ |
| изохорный | $A = 0$ | $Q = \\Delta U$ | $Q = \\dfrac32 \\nu R\\,\\Delta T$ |
| изобарный | ничего | $Q = \\Delta U + p\\,\\Delta V$ | $Q = \\dfrac52 \\nu R\\,\\Delta T$ |
| адиабатный | $Q = 0$ | $A = -\\Delta U$ | $0$ |

В **адиабатном процессе** нет теплообмена с окружением (быстрые процессы, теплоизолированные сосуды). Адиабатно расширяющийся газ совершает работу за счёт внутренней энергии и **охлаждается**; сжимаемый газ **нагревается**: велосипедный насос теплеет, воздух в дизельном двигателе сжимают, пока не воспламенится топливо, поднимающийся воздух расширяется и охлаждается, образуя облака.

**Молярные теплоёмкости** одноатомного газа: $C_V = \\dfrac32 R \\approx 12{,}5$ Дж/(моль·К), $C_p = \\dfrac52 R \\approx 20{,}8$ Дж/(моль·К), причём $C_p - C_V = R$: при постоянном давлении часть теплоты идёт на работу.

**Пример 1.** Газ получает $500$ Дж теплоты и совершает $200$ Дж работы. $\\Delta U = Q - A = 300$ Дж: газ нагревается.

**Пример 2.** Внешние силы сжимают газ, совершая над ним $300$ Дж работы, и газ отдаёт окружению $100$ Дж теплоты. $Q = -100$ Дж, $A = -300$ Дж, $\\Delta U = -100 + 300 = 200$ Дж.

**Пример 3.** Газ изотермически расширяется и получает $800$ Дж теплоты. Так как $\\Delta U = 0$, работа $A = 800$ Дж: вся теплота превращается в работу.

**Пример 4.** Один моль одноатомного газа изохорно нагревают на $100$ К: $A = 0$, $Q = \\Delta U = 1{,}5 \\cdot 8{,}31 \\cdot 100 \\approx 1250$ Дж.

**Пример 5.** То же нагревание изобарно: $\\Delta U \\approx 1250$ Дж, $A = \\nu R\\,\\Delta T \\approx 830$ Дж, $Q \\approx 2080$ Дж. Лишь $\\dfrac{830}{2080} = 40\\%$ теплоты превращается в работу; остальное нагревает газ.

**Пример 6.** Два моля одноатомного газа адиабатно расширяются и совершают $600$ Дж работы. $\\Delta U = -600$ Дж, и $\\Delta T = \\dfrac{-600}{1{,}5 \\cdot 2 \\cdot 8{,}31} \\approx -24$ К: газ охлаждается на $24$ К.

**Пример 7.** В дизельном двигателе воздух за несколько миллисекунд сжимают примерно в $16$ раз. Процесс практически адиабатный, работа поршня переходит во внутреннюю энергию, и воздух нагревается до $600$ °C и выше — достаточно, чтобы впрыснутое топливо воспламенилось без искры.

**Пример 8.** Сколько теплоты нагревает $2$ моль одноатомного газа на $30$ К при постоянном давлении и при постоянном объёме? $Q_p = 2 \\cdot 20{,}8 \\cdot 30 \\approx 1250$ Дж, $Q_V = 2 \\cdot 12{,}5 \\cdot 30 \\approx 750$ Дж. Разность, $2 \\cdot 8{,}31 \\cdot 30 \\approx 500$ Дж, — работа расширения.

### Упражнения

1. Газ получает $1000$ Дж теплоты и совершает $400$ Дж работы. Найдите $\\Delta U$.
2. Внешние силы совершают над газом $500$ Дж работы, и он отдаёт $200$ Дж теплоты. Найдите $\\Delta U$.
3. Газ получает $1200$ Дж в изотермическом процессе. Найдите его работу.
4. $2$ моль одноатомного газа изохорно нагревают на $50$ К. Найдите $Q$.
5. $2$ моль одноатомного газа изобарно нагревают на $50$ К. Найдите $A$ и $Q$.
6. Один моль одноатомного газа адиабатно сжимают; внешние силы совершают $900$ Дж работы. Найдите $\\Delta U$ и $\\Delta T$.
7. Одноатомный газ изобарно расширяется и совершает $400$ Дж работы. Найдите $\\Delta U$ и $Q$.
8. Почему воздух, выходящий из вентиля шины, кажется холодным?

### Ответы

1. $600$ Дж. 2. $300$ Дж. 3. $1200$ Дж. 4. $1{,}5 \\cdot 2 \\cdot 8{,}31 \\cdot 50 \\approx 1250$ Дж. 5. $A \\approx 830$ Дж; $Q \\approx 2080$ Дж. 6. $\\Delta U = 900$ Дж; $\\Delta T = \\dfrac{900}{1{,}5 \\cdot 8{,}31} \\approx 72$ К. 7. $\\Delta U = 1{,}5 A = 600$ Дж; $Q = 1000$ Дж. 8. Он быстро, почти адиабатно расширяется, совершая работу за счёт внутренней энергии, и поэтому охлаждается.`,
      },
      [
        q(t("The first law of thermodynamics reads…", "Թերմոդինամիկայի առաջին օրենքն է…", "Первый закон термодинамики имеет вид…"), [t("Q = ΔU + A", "Q = ΔU + A", "Q = ΔU + A"), t("Q = ΔU − A", "Q = ΔU − A", "Q = ΔU − A"), t("A = ΔU + Q", "A = ΔU + Q", "A = ΔU + Q")], 0),
        q(t("In an isothermal process of an ideal gas the heat received…", "Իդեալական գազի իզոթերմ պրոցեսում ստացված ջերմությունը…", "В изотермическом процессе идеального газа полученная теплота…"), [t("goes entirely into work", "ամբողջովին գնում է աշխատանքի", "целиком идёт на работу"), t("goes entirely into internal energy", "ամբողջովին գնում է ներքին էներգիայի", "целиком идёт во внутреннюю энергию"), t("is zero", "զրո է", "равна нулю")], 0),
        q(t("In an isochoric process…", "Իզոխոր պրոցեսում…", "В изохорном процессе…"), [t("Q = A", "Q = A", "Q = A"), t("Q = ΔU", "Q = ΔU", "Q = ΔU"), t("Q = 0", "Q = 0", "Q = 0")], 1),
        q(t("In an adiabatic expansion the gas…", "Ադիաբատ ընդարձակման դեպքում գազը…", "При адиабатном расширении газ…"), [t("heats up", "տաքանում է", "нагревается"), t("cools down", "սառչում է", "охлаждается"), t("keeps its temperature", "պահպանում է ջերմաստիճանը", "сохраняет температуру")], 1),
        q(t("A gas receives 500 J of heat and does 200 J of work. ΔU equals…", "Գազը ստանում է 500 Ջ ջերմություն և կատարում 200 Ջ աշխատանք։ ΔU-ն հավասար է…", "Газ получает 500 Дж теплоты и совершает 200 Дж работы. ΔU равно…"), [t("700 J", "700 Ջ", "700 Дж"), t("300 J", "300 Ջ", "300 Дж"), t("−300 J", "−300 Ջ", "−300 Дж")], 1),
        q(t("For a monatomic ideal gas C_p − C_V equals…", "Միատոմ իդեալական գազի համար C_p − C_V-ն հավասար է…", "Для одноатомного идеального газа C_p − C_V равно…"), [t("R", "R", "R"), t("3R/2", "3R/2", "3R/2"), t("0", "0", "0")], 0),
      ],
    ),
    lesson(
      "second-law-engines",
      ["Irreversibility; second law; Carnot efficiency", "Անդարձելիություն, երկրորդ օրենք, Կարնոյի ՕԳԳ", "Необратимость; второй закон; КПД Карно"],
      {
        en: ["Explain the irreversibility of thermal processes and state the second law of thermodynamics", "Describe the scheme of a heat engine and compute its efficiency from the heat received and given away", "Use the Carnot formula η = (T₁ − T₂)/T₁ as the upper limit of efficiency and analyse ways to raise it"],
        hy: ["Բացատրել ջերմային պրոցեսների անդարձելիությունը և ձևակերպել թերմոդինամիկայի երկրորդ օրենքը", "Նկարագրել ջերմային շարժիչի սխեման և հաշվել նրա ՕԳԳ-ն ստացված և տրված ջերմությունից", "Օգտագործել Կարնոյի բանաձևը η = (T₁ − T₂)/T₁ որպես ՕԳԳ-ի վերին սահման և վերլուծել այն բարձրացնելու եղանակները"],
        ru: ["Объяснять необратимость тепловых процессов и формулировать второй закон термодинамики", "Описывать схему теплового двигателя и вычислять его КПД по полученной и отданной теплоте", "Использовать формулу Карно η = (T₁ − T₂)/T₁ как верхний предел КПД и анализировать способы его повышения"],
      },
      {
        en: `## Irreversibility

Mechanical processes without friction are reversible: a film of them run backwards looks possible. Thermal processes are **irreversible**: a hot cup cools in the room, but a cup never warms itself at the expense of the room; a dropped ball stops and warms slightly, but a warm ball never jumps up by cooling. Energy would be conserved in the reverse process, yet it never happens: the first law alone is not enough.

> **Second law of thermodynamics** (Clausius). Heat cannot pass by itself from a colder body to a hotter one. Equivalently (Kelvin): it is impossible to build a cyclic engine that turns all the heat received from one body into work. Such a **perpetual motion machine of the second kind** would not violate energy conservation, yet it is impossible.

The deep reason is statistical: the ordered state (all molecules fast in one place) is immensely less probable than the disordered one, so systems move towards disorder.

## Heat engines

A **heat engine** works in cycles. The **working body** (gas, steam) receives heat $Q_1$ from the **heater** at temperature $T_1$, does work $A$ and gives heat $Q_2$ to the **cooler** (the atmosphere, a river) at $T_2 < T_1$. In a cycle $\\Delta U = 0$, so $A = Q_1 - Q_2$ and the **efficiency** is
$$\\eta = \\dfrac{A}{Q_1} = \\dfrac{Q_1 - Q_2}{Q_1} = 1 - \\dfrac{Q_2}{Q_1}.$$
A cooler is necessary: without $Q_2$ the engine would be a perpetual motion machine of the second kind.

> **Carnot's theorem.** No engine working between temperatures $T_1$ and $T_2$ can have an efficiency greater than
> $$\\eta_{\\max} = \\dfrac{T_1 - T_2}{T_1}.$$
> This value is reached only by the ideal Carnot cycle (two isotherms and two adiabats).

To raise the efficiency one raises $T_1$ (superheated steam, better materials) or lowers $T_2$; the lower limit of $T_2$ is the surrounding air. Real engines: steam turbine $\\approx 40\\%$, petrol engine $\\approx 25\\%$, diesel $\\approx 40\\%$. A **refrigerator** is a heat engine run backwards: work is spent to move heat from the cold inside to the warm room.

**Example 1.** An engine receives $1000$ J per cycle and gives $700$ J to the cooler. $A = 300$ J, $\\eta = 30\\%$.

**Example 2.** Heater $500$ K, cooler $300$ K: $\\eta_{\\max} = \\dfrac{200}{500} = 40\\%$. A real engine between these temperatures with $\\eta = 25\\%$ is possible; one with $\\eta = 45\\%$ is not.

**Example 3.** A steam turbine: steam at $800$ K, cooling water at $300$ K. $\\eta_{\\max} = \\dfrac{500}{800} = 62{.}5\\%$; the actual efficiency of such plants is about $40\\%$, the rest is lost to friction, incomplete expansion and heat leaks.

**Example 4.** $\\eta = 25\\%$ and $A = 500$ J per cycle. $Q_1 = \\dfrac{A}{\\eta} = 2000$ J, $Q_2 = 1500$ J: three quarters of the fuel's heat go into the atmosphere.

**Example 5.** A car engine delivers $60$ kW at $\\eta = 30\\%$. It takes heat at the rate $\\dfrac{60}{0{.}3} = 200$ kW. With the heat of combustion of petrol $4{.}6 \\cdot 10^7$ J/kg the fuel consumption is $\\dfrac{2 \\cdot 10^5}{4{.}6 \\cdot 10^7} \\approx 4{.}3$ g/s, about $16$ kg per hour.

**Example 6.** $T_1 = 600$ K, $T_2 = 300$ K: $\\eta_{\\max} = 50\\%$. Lowering $T_2$ to $280$ K gives $53\\%$; raising $T_1$ to $700$ K gives $57\\%$. Raising the heater temperature by $100$ K helps more than cooling the cooler by $20$ K, and is usually easier.

**Example 7.** A Carnot engine has $\\eta = 50\\%$ with the cooler at $300$ K. Then $T_1 = \\dfrac{T_2}{1 - \\eta} = 600$ K. If it receives $4$ kJ per cycle, it does $2$ kJ of work and dumps $2$ kJ.

**Example 8.** A refrigerator takes $300$ J from its interior per cycle and consumes $100$ J of electrical work. It releases $400$ J into the kitchen. A refrigerator with the door open therefore **warms** the room: it releases more heat than it absorbs.

### Exercises

1. An engine receives $2500$ J and gives $2000$ J to the cooler. Find the work and the efficiency.
2. Find the maximum efficiency between $400$ K and $300$ K.
3. Find the maximum efficiency between $1000$ K and $400$ K.
4. $\\eta = 40\\%$, $Q_1 = 5$ kJ. Find $A$ and $Q_2$.
5. An engine of $40$ kW has $\\eta = 25\\%$. At what rate does it receive heat, and at what rate does it heat the surroundings?
6. A Carnot engine has $\\eta = 30\\%$ with the heater at $500$ K. Find the cooler temperature.
7. Can an engine have $\\eta = 60\\%$ between $600$ K and $300$ K?
8. A refrigerator takes $600$ J from inside using $200$ J of work. How much heat goes into the room?

### Answers

1. $500$ J; $20\\%$. 2. $25\\%$. 3. $60\\%$. 4. $A = 2$ kJ; $Q_2 = 3$ kJ. 5. $160$ kW; $120$ kW. 6. $T_2 = 0{.}7 \\cdot 500 = 350$ K. 7. No: $\\eta_{\\max} = 50\\%$. 8. $800$ J.`,
        hy: `## Անդարձելիություն

Առանց շփման մեխանիկական պրոցեսները դարձելի են․ դրանց հետ պտտած ֆիլմը հնարավոր է թվում։ Ջերմային պրոցեսներն **անդարձելի** են․ տաք բաժակը սենյակում սառչում է, բայց բաժակն երբեք ինքն իրեն չի տաքանում սենյակի հաշվին, գցված գնդակը կանգնում է և թեթևակի տաքանում, բայց տաք գնդակն երբեք սառչելով վերև չի ցատկում։ Հակառակ պրոցեսում էներգիան պահպանված կլիներ, բայց այն երբեք չի լինում․ միայն առաջին օրենքը բավարար չէ։

> **Թերմոդինամիկայի երկրորդ օրենք** (Կլաուզիուս)։ Ջերմությունն ինքն իրեն չի կարող անցնել սառը մարմնից տաքին։ Համարժեք (Կելվին)․ անհնար է կառուցել ցիկլային շարժիչ, որը մեկ մարմնից ստացած ամբողջ ջերմությունը դարձնում է աշխատանք։ Այդպիսի **երկրորդ կարգի հավերժական շարժիչը** էներգիայի պահպանումը չէր խախտի, բայց անհնար է։

Խորքային պատճառը վիճակագրական է․ կարգավորված վիճակը (բոլոր մոլեկուլներն արագ, մի տեղում) անհամեմատ պակաս հավանական է, քան անկարգը, ուստի համակարգերը գնում են դեպի անկարգություն։

## Ջերմային շարժիչներ

**Ջերմային շարժիչն** աշխատում է ցիկլերով։ **Աշխատանքային մարմինը** (գազ, գոլորշի) $T_1$ ջերմաստիճանի **տաքացուցիչից** ստանում է $Q_1$ ջերմություն, կատարում $A$ աշխատանք և $T_2 < T_1$ ջերմաստիճանի **սառնարանին** (մթնոլորտ, գետ) տալիս $Q_2$ ջերմություն։ Ցիկլում $\\Delta U = 0$, ուստի $A = Q_1 - Q_2$, և **ՕԳԳ**-ն է
$$\\eta = \\dfrac{A}{Q_1} = \\dfrac{Q_1 - Q_2}{Q_1} = 1 - \\dfrac{Q_2}{Q_1}$$
Սառնարանն անհրաժեշտ է․ առանց $Q_2$-ի շարժիչն երկրորդ կարգի հավերժական շարժիչ կլիներ։

> **Կարնոյի թեորեմ։** $T_1$ և $T_2$ ջերմաստիճանների միջև աշխատող ոչ մի շարժիչ չի կարող ունենալ ՕԳԳ, որը մեծ է
> $$\\eta_{\\max} = \\dfrac{T_1 - T_2}{T_1}$$
> Այս արժեքին հասնում է միայն իդեալական Կարնոյի ցիկլը (երկու իզոթերմ և երկու ադիաբատ)։

ՕԳԳ-ն բարձրացնելու համար բարձրացնում են $T_1$-ը (գերտաքացած գոլորշի, ավելի լավ նյութեր) կամ իջեցնում $T_2$-ը, $T_2$-ի ներքին սահմանը շրջապատի օդն է։ Իրական շարժիչներ․ գոլորշու տուրբին $\\approx 40\\%$, բենզինային շարժիչ $\\approx 25\\%$, դիզել $\\approx 40\\%$։ **Սառնարանը** հակառակ ուղղությամբ աշխատող ջերմային շարժիչ է․ աշխատանք է ծախսվում ջերմությունը սառը ներսից տաք սենյակ տեղափոխելու համար։

**Օրինակ 1։** Շարժիչն ամեն ցիկլում ստանում է $1000$ Ջ և սառնարանին տալիս $700$ Ջ։ $A = 300$ Ջ, $\\eta = 30\\%$։

**Օրինակ 2։** Տաքացուցիչը $500$ Կ, սառնարանը $300$ Կ․ $\\eta_{\\max} = \\dfrac{200}{500} = 40\\%$։ Այս ջերմաստիճանների միջև $\\eta = 25\\%$ իրական շարժիչը հնարավոր է, $\\eta = 45\\%$-ով՝ ոչ։

**Օրինակ 3։** Գոլորշու տուրբին․ գոլորշին $800$ Կ, հովացնող ջուրը $300$ Կ։ $\\eta_{\\max} = \\dfrac{500}{800} = 62{,}5\\%$, այդպիսի կայանների իրական ՕԳԳ-ն մոտ $40\\%$ է, մնացածը կորչում է շփման, ոչ լրիվ ընդարձակման և ջերմության արտահոսքի պատճառով։

**Օրինակ 4։** $\\eta = 25\\%$ և $A = 500$ Ջ ամեն ցիկլում։ $Q_1 = \\dfrac{A}{\\eta} = 2000$ Ջ, $Q_2 = 1500$ Ջ․ վառելիքի ջերմության երեք քառորդը գնում է մթնոլորտ։

**Օրինակ 5։** Մեքենայի շարժիչը տալիս է $60$ կՎտ $\\eta = 30\\%$ դեպքում։ Այն ջերմություն է ստանում $\\dfrac{60}{0{,}3} = 200$ կՎտ արագությամբ։ Բենզինի այրման ջերմությունը $4{,}6 \\cdot 10^7$ Ջ/կգ դեպքում վառելիքի ծախսը $\\dfrac{2 \\cdot 10^5}{4{,}6 \\cdot 10^7} \\approx 4{,}3$ գ/վ է, մոտ $16$ կգ ժամում։

**Օրինակ 6։** $T_1 = 600$ Կ, $T_2 = 300$ Կ․ $\\eta_{\\max} = 50\\%$։ $T_2$-ը $280$ Կ իջեցնելը տալիս է $53\\%$, $T_1$-ը $700$ Կ բարձրացնելը՝ $57\\%$։ Տաքացուցիչի ջերմաստիճանը $100$ Կ-ով բարձրացնելն ավելի է օգնում, քան սառնարանը $20$ Կ-ով սառեցնելը, և սովորաբար ավելի հեշտ է։

**Օրինակ 7։** Կարնոյի շարժիչն ունի $\\eta = 50\\%$ $300$ Կ սառնարանով։ Այդ դեպքում $T_1 = \\dfrac{T_2}{1 - \\eta} = 600$ Կ։ Եթե այն ամեն ցիկլում ստանում է $4$ կՋ, կատարում է $2$ կՋ աշխատանք և $2$ կՋ տալիս սառնարանին։

**Օրինակ 8։** Սառնարանն ամեն ցիկլում ներսից վերցնում է $300$ Ջ և սպառում $100$ Ջ էլեկտրական աշխատանք։ Այն խոհանոց արձակում է $400$ Ջ։ Բաց դռնով սառնարանը, հետևաբար, **տաքացնում է** սենյակը․ այն ավելի շատ ջերմություն է արձակում, քան կլանում։

### Վարժություններ

1. Շարժիչը ստանում է $2500$ Ջ և սառնարանին տալիս $2000$ Ջ։ Գտեք աշխատանքը և ՕԳԳ-ն։
2. Գտեք առավելագույն ՕԳԳ-ն $400$ Կ-ի և $300$ Կ-ի միջև։
3. Գտեք առավելագույն ՕԳԳ-ն $1000$ Կ-ի և $400$ Կ-ի միջև։
4. $\\eta = 40\\%$, $Q_1 = 5$ կՋ։ Գտեք $A$-ն և $Q_2$-ը։
5. $40$ կՎտ շարժիչն ունի $\\eta = 25\\%$։ Ի՞նչ արագությամբ է այն ջերմություն ստանում և ի՞նչ արագությամբ տաքացնում շրջապատը։
6. Կարնոյի շարժիչն ունի $\\eta = 30\\%$ $500$ Կ տաքացուցիչով։ Գտեք սառնարանի ջերմաստիճանը։
7. Կարո՞ղ է շարժիչն ունենալ $\\eta = 60\\%$ $600$ Կ-ի և $300$ Կ-ի միջև։
8. Սառնարանը ներսից վերցնում է $600$ Ջ՝ ծախսելով $200$ Ջ աշխատանք։ Որքա՞ն ջերմություն է գնում սենյակ։

### Պատասխաններ

1. $500$ Ջ, $20\\%$։ 2. $25\\%$։ 3. $60\\%$։ 4. $A = 2$ կՋ, $Q_2 = 3$ կՋ։ 5. $160$ կՎտ, $120$ կՎտ։ 6. $T_2 = 0{,}7 \\cdot 500 = 350$ Կ։ 7. Ոչ․ $\\eta_{\\max} = 50\\%$։ 8. $800$ Ջ։`,
        ru: `## Необратимость

Механические процессы без трения обратимы: их фильм, пущенный назад, выглядит возможным. Тепловые процессы **необратимы**: горячая чашка в комнате остывает, но чашка никогда не нагревается сама за счёт комнаты; упавший мяч останавливается и слегка нагревается, но тёплый мяч никогда не подпрыгивает, охлаждаясь. В обратном процессе энергия сохранялась бы, но он никогда не происходит: одного первого закона недостаточно.

> **Второй закон термодинамики** (Клаузиус). Теплота не может сама собой переходить от более холодного тела к более горячему. Эквивалентно (Кельвин): невозможно построить циклический двигатель, превращающий в работу всю теплоту, полученную от одного тела. Такой **вечный двигатель второго рода** не нарушал бы сохранения энергии, и всё же он невозможен.

Глубинная причина статистическая: упорядоченное состояние (все молекулы быстрые и в одном месте) неизмеримо менее вероятно, чем беспорядочное, поэтому системы движутся к беспорядку.

## Тепловые двигатели

**Тепловой двигатель** работает циклами. **Рабочее тело** (газ, пар) получает теплоту $Q_1$ от **нагревателя** при температуре $T_1$, совершает работу $A$ и отдаёт теплоту $Q_2$ **холодильнику** (атмосфере, реке) при $T_2 < T_1$. За цикл $\\Delta U = 0$, поэтому $A = Q_1 - Q_2$, и **КПД** равен
$$\\eta = \\dfrac{A}{Q_1} = \\dfrac{Q_1 - Q_2}{Q_1} = 1 - \\dfrac{Q_2}{Q_1}.$$
Холодильник необходим: без $Q_2$ двигатель был бы вечным двигателем второго рода.

> **Теорема Карно.** Ни один двигатель, работающий между температурами $T_1$ и $T_2$, не может иметь КПД больше
> $$\\eta_{\\max} = \\dfrac{T_1 - T_2}{T_1}.$$
> Это значение достигается только в идеальном цикле Карно (две изотермы и две адиабаты).

Чтобы повысить КПД, повышают $T_1$ (перегретый пар, лучшие материалы) или понижают $T_2$; нижний предел $T_2$ — окружающий воздух. Реальные двигатели: паровая турбина $\\approx 40\\%$, бензиновый двигатель $\\approx 25\\%$, дизель $\\approx 40\\%$. **Холодильник** — тепловой двигатель, запущенный наоборот: работа тратится на перенос теплоты из холодной камеры в тёплую комнату.

**Пример 1.** Двигатель получает за цикл $1000$ Дж и отдаёт холодильнику $700$ Дж. $A = 300$ Дж, $\\eta = 30\\%$.

**Пример 2.** Нагреватель $500$ К, холодильник $300$ К: $\\eta_{\\max} = \\dfrac{200}{500} = 40\\%$. Реальный двигатель между этими температурами с $\\eta = 25\\%$ возможен; с $\\eta = 45\\%$ — нет.

**Пример 3.** Паровая турбина: пар при $800$ К, охлаждающая вода при $300$ К. $\\eta_{\\max} = \\dfrac{500}{800} = 62{,}5\\%$; реальный КПД таких установок около $40\\%$, остальное теряется на трение, неполное расширение и утечки тепла.

**Пример 4.** $\\eta = 25\\%$ и $A = 500$ Дж за цикл. $Q_1 = \\dfrac{A}{\\eta} = 2000$ Дж, $Q_2 = 1500$ Дж: три четверти теплоты топлива уходят в атмосферу.

**Пример 5.** Двигатель автомобиля развивает $60$ кВт при $\\eta = 30\\%$. Он получает теплоту со скоростью $\\dfrac{60}{0{,}3} = 200$ кВт. При теплоте сгорания бензина $4{,}6 \\cdot 10^7$ Дж/кг расход топлива $\\dfrac{2 \\cdot 10^5}{4{,}6 \\cdot 10^7} \\approx 4{,}3$ г/с, около $16$ кг в час.

**Пример 6.** $T_1 = 600$ К, $T_2 = 300$ К: $\\eta_{\\max} = 50\\%$. Понижение $T_2$ до $280$ К даёт $53\\%$; повышение $T_1$ до $700$ К даёт $57\\%$. Повысить температуру нагревателя на $100$ К полезнее, чем охладить холодильник на $20$ К, и обычно проще.

**Пример 7.** Двигатель Карно имеет $\\eta = 50\\%$ при холодильнике $300$ К. Тогда $T_1 = \\dfrac{T_2}{1 - \\eta} = 600$ К. Если он получает $4$ кДж за цикл, то совершает $2$ кДж работы и сбрасывает $2$ кДж.

**Пример 8.** Холодильник за цикл забирает из камеры $300$ Дж и потребляет $100$ Дж электрической работы. В кухню он выделяет $400$ Дж. Холодильник с открытой дверцей поэтому **нагревает** комнату: он выделяет больше теплоты, чем поглощает.

### Упражнения

1. Двигатель получает $2500$ Дж и отдаёт холодильнику $2000$ Дж. Найдите работу и КПД.
2. Найдите максимальный КПД между $400$ К и $300$ К.
3. Найдите максимальный КПД между $1000$ К и $400$ К.
4. $\\eta = 40\\%$, $Q_1 = 5$ кДж. Найдите $A$ и $Q_2$.
5. Двигатель мощностью $40$ кВт имеет $\\eta = 25\\%$. С какой скоростью он получает теплоту и с какой нагревает окружение?
6. Двигатель Карно имеет $\\eta = 30\\%$ при нагревателе $500$ К. Найдите температуру холодильника.
7. Может ли двигатель иметь $\\eta = 60\\%$ между $600$ К и $300$ К?
8. Холодильник забирает из камеры $600$ Дж, затрачивая $200$ Дж работы. Сколько теплоты уходит в комнату?

### Ответы

1. $500$ Дж; $20\\%$. 2. $25\\%$. 3. $60\\%$. 4. $A = 2$ кДж; $Q_2 = 3$ кДж. 5. $160$ кВт; $120$ кВт. 6. $T_2 = 0{,}7 \\cdot 500 = 350$ К. 7. Нет: $\\eta_{\\max} = 50\\%$. 8. $800$ Дж.`,
      },
      [
        q(t("According to the second law, heat by itself…", "Երկրորդ օրենքի համաձայն ջերմությունն ինքն իրեն…", "Согласно второму закону теплота сама собой…"), [t("never passes from a cold body to a hot one", "երբեք չի անցնում սառը մարմնից տաքին", "никогда не переходит от холодного тела к горячему"), t("never passes from a hot body to a cold one", "երբեք չի անցնում տաք մարմնից սառին", "никогда не переходит от горячего тела к холодному"), t("is not conserved", "չի պահպանվում", "не сохраняется")], 0),
        q(t("The efficiency of a heat engine is…", "Ջերմային շարժիչի ՕԳԳ-ն է…", "КПД теплового двигателя равен…"), [t("Q₂/Q₁", "Q₂/Q₁", "Q₂/Q₁"), t("(Q₁ − Q₂)/Q₁", "(Q₁ − Q₂)/Q₁", "(Q₁ − Q₂)/Q₁"), t("Q₁/A", "Q₁/A", "Q₁/A")], 1),
        q(t("An engine receives 1000 J and gives 700 J to the cooler. Its efficiency is…", "Շարժիչը ստանում է 1000 Ջ և սառնարանին տալիս 700 Ջ։ Նրա ՕԳԳ-ն…", "Двигатель получает 1000 Дж и отдаёт холодильнику 700 Дж. Его КПД…"), [t("70 %", "70 % է", "70 %"), t("30 %", "30 % է", "30 %"), t("43 %", "43 % է", "43 %")], 1),
        q(t("The maximum efficiency between 500 K and 300 K is…", "Առավելագույն ՕԳԳ-ն 500 Կ-ի և 300 Կ-ի միջև…", "Максимальный КПД между 500 К и 300 К равен…"), [t("40 %", "40 % է", "40 %"), t("60 %", "60 % է", "60 %"), t("167 %", "167 % է", "167 %")], 0),
        q(t("A heat engine without a cooler…", "Առանց սառնարանի ջերմային շարժիչը…", "Тепловой двигатель без холодильника…"), [t("has 100 % efficiency", "ունի 100 % ՕԳԳ", "имеет КПД 100 %"), t("is impossible", "անհնար է", "невозможен"), t("is the Carnot engine", "Կարնոյի շարժիչն է", "это двигатель Карно")], 1),
        q(t("A refrigerator with its door open…", "Բաց դռնով սառնարանը…", "Холодильник с открытой дверцей…"), [t("cools the room", "սառեցնում է սենյակը", "охлаждает комнату"), t("warms the room", "տաքացնում է սենյակը", "нагревает комнату"), t("does not change the room temperature", "չի փոխում սենյակի ջերմաստիճանը", "не меняет температуру комнаты")], 1),
      ],
    ),
  ],
};
