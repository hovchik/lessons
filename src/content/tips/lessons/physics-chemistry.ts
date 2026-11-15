import { tricksFor, type TipSeed } from "../types";

/** Tricks inside single lessons: physics and chemistry, grades 7–12. */
const p7 = tricksFor("physics", 7);
const p8 = tricksFor("physics", 8);
const p9 = tricksFor("physics", 9);
const p10 = tricksFor("physics", 10);
const c9 = tricksFor("chemistry", 9);
const c10 = tricksFor("chemistry", 10);
const c11 = tricksFor("chemistry", 11);
const c12 = tricksFor("chemistry", 12);

export const physicsChemistryTricks: TipSeed[] = [
  // ---------- Physics ----------
  p7("mass-volume-calculation", "millilitre-gram-water", "memory", ["Water: 1 mL = 1 cm³ = 1 g", "Ջուր․ 1 մլ = 1 սմ³ = 1 գ", "Вода: 1 мл = 1 см³ = 1 г"], {
    en: `For water three units line up exactly, which makes many problems one-step:

$$1\\ \\text{mL} = 1\\ \\text{cm}^3 \\to 1\\ \\text{g} \\qquad 1\\ \\text{L} = 1\\ \\text{dm}^3 \\to 1\\ \\text{kg} \\qquad 1\\ \\text{m}^3 \\to 1\\ \\text{t}$$

A 250 mL glass of water weighs 250 g; a 10 L bucket holds 10 kg. For another liquid, multiply by how many times it is denser than water: sunflower oil is about 0.9, so 1 L of oil is about 0.9 kg.`,
    hy: `Ջրի համար երեք միավոր ճիշտ համընկնում են, և շատ խնդիրներ լուծվում են մեկ քայլով․

$$1\\ \\text{mL} = 1\\ \\text{cm}^3 \\to 1\\ \\text{g} \\qquad 1\\ \\text{L} = 1\\ \\text{dm}^3 \\to 1\\ \\text{kg} \\qquad 1\\ \\text{m}^3 \\to 1\\ \\text{t}$$

այսինքն 1 մլ = 1 սմ³ ջուրը 1 գ է, 1 լ = 1 դմ³ ջուրը՝ 1 կգ, 1 մ³-ը՝ 1 տոննա։ 250 մլ ջրով բաժակը 250 գ է, 10 լ դույլը՝ 10 կգ։ Այլ հեղուկի համար բազմապատկիր այն թվով, քանի անգամ է այն ջրից խիտ․ արևածաղկի ձեթինը մոտ 0,9 է, ուրեմն 1 լ ձեթը մոտ 0,9 կգ է։`,
    ru: `Для воды три единицы совпадают точно, и многие задачи решаются в один шаг:

$$1\\ \\text{мл} = 1\\ \\text{см}^3 \\to 1\\ \\text{г} \\qquad 1\\ \\text{л} = 1\\ \\text{дм}^3 \\to 1\\ \\text{кг} \\qquad 1\\ \\text{м}^3 \\to 1\\ \\text{т}$$

Стакан воды 250 мл весит 250 г, ведро на 10 л — 10 кг. Для другой жидкости умножь на то, во сколько раз она плотнее воды: у подсолнечного масла это около 0,9, значит, 1 л масла весит около 0,9 кг.`,
  }),
  p7("atmospheric-pressure", "ten-metres-of-water", "memory", ["10 metres of water = 1 atmosphere", "10 մետր ջուր = 1 մթնոլորտ", "10 метров воды = 1 атмосфера"], {
    en: `The air above you presses as hard as a column of water about **10 m** tall:

$$p = \\rho g h = 1000 \\cdot 10 \\cdot 10 = 100\\,000\\ \\text{Pa} \\approx 1\\ \\text{atm}$$

So a diver at 10 m feels **2** atmospheres (air plus water), at 20 m **3**, at 30 m **4**. It also explains why a suction pump can never lift water higher than about 10 m: the air simply cannot push it further. With mercury, 13.6 times denser than water, the column is 13.6 times shorter: 760 mm.`,
    hy: `Քո վրայի օդը ճնշում է այնքան, որքան մոտ **10 մ** բարձրությամբ ջրի սյունը․

$$p = \\rho g h = 1000 \\cdot 10 \\cdot 10 = 100\\,000 \\ \\text{Pa} \\approx 1 \\ \\text{atm}$$

այսինքն մոտ 100 000 Պա։ Ուրեմն 10 մ խորության վրա ջրասուզակը զգում է **2** մթնոլորտ (օդ գումարած ջուր), 20 մ-ում՝ **3**, 30 մ-ում՝ **4**։ Սա բացատրում է նաև, թե ինչու ծծող պոմպը երբեք ջուրը չի բարձրացնի մոտ 10 մ-ից ավելի․ օդն ավելի չի կարող հրել։ Սնդիկը ջրից 13,6 անգամ խիտ է, և սյունը 13,6 անգամ կարճ է՝ 760 մմ։`,
    ru: `Воздух над тобой давит так же, как столб воды высотой около **10 м**:

$$p = \\rho g h = 1000 \\cdot 10 \\cdot 10 = 100\\,000\\ \\text{Па} \\approx 1\\ \\text{атм}$$

Поэтому водолаз на глубине 10 м испытывает **2** атмосферы (воздух плюс вода), на 20 м — **3**, на 30 м — **4**. Это объясняет и то, почему всасывающий насос не поднимет воду выше примерно 10 м: воздух дальше её не протолкнёт. Ртуть в 13,6 раза плотнее воды, и столб в 13,6 раза короче: 760 мм.`,
  }),
  p8("series-parallel", "parallel-less-than-smallest", "mentalMath", ["Parallel: the total is less than the smallest", "Զուգահեռ․ ընդհանուրը փոքրագույնից փոքր է", "Параллельно: общее меньше наименьшего"], {
    en: `Three shortcuts for parallel resistors:

- **Check:** the total is always **less than the smallest** resistor. Adding a path makes it easier for the current, never harder.
- **Equal resistors:** $n$ equal resistors $R$ in parallel give $\\frac{R}{n}$. Two 10 Ω give 5 Ω; four 20 Ω give 5 Ω.
- **Two different ones:** product over sum, $R = \\frac{R_1 R_2}{R_1 + R_2}$. $6$ Ω and $3$ Ω: $\\frac{18}{9} = 2$ Ω.

If your answer for 6 Ω and 3 Ω in parallel is 9 Ω or 4.5 Ω, you added instead of combining.`,
    hy: `Զուգահեռ ռեզիստորների երեք կարճ ճանապարհ․

- **Ստուգում․** ընդհանուր դիմադրությունը միշտ **փոքր է ամենափոքր** ռեզիստորից։ Նոր ճանապարհ ավելացնելը հոսանքի համար հեշտացնում է, երբեք չի դժվարացնում։
- **Հավասար ռեզիստորներ․** $n$ հատ հավասար $R$ զուգահեռ միացված տալիս են $\\frac{R}{n}$։ Երկու 10 Օմ՝ 5 Օմ, չորս 20 Օմ՝ 5 Օմ։
- **Երկու տարբեր․** արտադրյալը բաժանած գումարին, $R = \\frac{R_1 R_2}{R_1 + R_2}$։ 6 Օմ և 3 Օմ․ $\\frac{18}{9} = 2$ Օմ։

Եթե 6 Օմ և 3 Օմ զուգահեռի համար ստացել ես 9 Օմ կամ 4,5 Օմ, դու գումարել ես, ոչ թե զուգահեռ միացրել։`,
    ru: `Три коротких пути для параллельных резисторов:

- **Проверка:** общее сопротивление всегда **меньше наименьшего** резистора. Новый путь облегчает ток, а не затрудняет.
- **Равные резисторы:** $n$ равных $R$ параллельно дают $\\frac{R}{n}$. Два по 10 Ом — 5 Ом; четыре по 20 Ом — 5 Ом.
- **Два разных:** произведение на сумму, $R = \\frac{R_1 R_2}{R_1 + R_2}$. 6 Ом и 3 Ом: $\\frac{18}{9} = 2$ Ом.

Если для 6 Ом и 3 Ом параллельно у тебя вышло 9 Ом или 4,5 Ом, ты сложил, а не соединил параллельно.`,
  }),
  p9("sound", "thunder-three-seconds", "mentalMath", ["Thunder: every 3 seconds is 1 km", "Որոտ․ ամեն 3 վայրկյանը 1 կմ է", "Гром: каждые 3 секунды — 1 км"], {
    en: `Light from lightning reaches you almost instantly; sound travels about **340 m/s**, that is about **1 km in 3 seconds**.

See the flash, count the seconds until the thunder, divide by 3: the answer is the distance in kilometres. 6 seconds → about 2 km; 15 seconds → about 5 km.

Count again a few minutes later. If the number of seconds is getting smaller, the storm is coming towards you. The same rule works for an echo: a wall 170 m away returns your shout after about one second (there and back is 340 m).`,
    hy: `Կայծակի լույսը քեզ է հասնում գրեթե ակնթարթորեն, իսկ ձայնն անցնում է մոտ **340 մ/վ**, այսինքն մոտ **1 կմ՝ 3 վայրկյանում**։

Տեսար փայլատակումը, հաշվիր վայրկյանները մինչև որոտը, բաժանիր 3-ի․ ստացվածը հեռավորությունն է կիլոմետրերով։ 6 վայրկյան → մոտ 2 կմ, 15 վայրկյան → մոտ 5 կմ։

Մի քանի րոպե անց նորից հաշվիր։ Եթե վայրկյանները քչանում են, ամպրոպը մոտենում է։ Նույն կանոնն աշխատում է արձագանքի համար․ 170 մ հեռու պատը քո ձայնը վերադարձնում է մոտ մեկ վայրկյանում (գնալ-գալը 340 մ է)։`,
    ru: `Свет молнии доходит до тебя почти мгновенно, а звук идёт со скоростью около **340 м/с**, то есть примерно **1 км за 3 секунды**.

Увидел вспышку — считай секунды до грома и раздели на 3: получишь расстояние в километрах. 6 секунд → около 2 км; 15 секунд → около 5 км.

Посчитай снова через несколько минут. Если секунд становится меньше, гроза приближается. Так же и с эхом: стена в 170 м вернёт твой крик примерно через секунду (туда и обратно 340 м).`,
  }),
  p10("gas-laws", "iso-greek-roots", "memory", ["Isotherm, isobar, isochore: the Greek tells you what is fixed", "Իզոթերմ, իզոբար, իզոխոր․ հունարենն է ասում՝ ինչն է հաստատուն", "Изотерма, изобара, изохора: греческий подскажет, что постоянно"], {
    en: `*Iso* means "equal" in Greek, and the second half names the quantity that stays constant:

| process | Greek root | constant | law |
|---|---|---|---|
| isotherm | *thermos*, warm (thermometer) | $T$ | $pV = \\text{const}$ |
| isobar | *baros*, weight (barometer) | $p$ | $\\frac{V}{T} = \\text{const}$ |
| isochore | *chora*, space, room | $V$ | $\\frac{p}{T} = \\text{const}$ |

Then the law writes itself: put the two quantities that change into one formula. $T$ fixed → $p$ and $V$ change in opposite directions, so they multiply; $p$ or $V$ fixed → the other one grows together with $T$, so they divide.`,
    hy: `*Իզո* հունարեն նշանակում է «հավասար», իսկ երկրորդ կեսը հաստատուն մնացող մեծության անունն է․

| պրոցես | հունարեն արմատ | հաստատուն | օրենք |
|---|---|---|---|
| իզոթերմ | *թերմոս*՝ տաք (ջերմաչափ՝ թերմոմետր) | $T$ | $pV = \\text{const}$ |
| իզոբար | *բարոս*՝ ծանրություն (բարոմետր) | $p$ | $\\frac{V}{T} = \\text{const}$ |
| իզոխոր | *խորա*՝ տարածություն | $V$ | $\\frac{p}{T} = \\text{const}$ |

Հետո օրենքն ինքն է գրվում․ փոփոխվող երկու մեծությունները դիր մեկ բանաձևում։ $T$-ն հաստատուն է → $p$-ն և $V$-ն փոխվում են հակառակ ուղղությամբ, ուրեմն բազմապատկվում են, $p$-ն կամ $V$-ն հաստատուն է → մյուսը $T$-ի հետ միասին է աճում, ուրեմն բաժանվում են։`,
    ru: `*Изо* по-гречески значит «равный», а вторая половина называет величину, которая не меняется:

| процесс | греческий корень | постоянна | закон |
|---|---|---|---|
| изотерма | *термос*, тёплый (термометр) | $T$ | $pV = \\text{const}$ |
| изобара | *барос*, тяжесть (барометр) | $p$ | $\\frac{V}{T} = \\text{const}$ |
| изохора | *хора*, пространство, место | $V$ | $\\frac{p}{T} = \\text{const}$ |

Дальше закон пишется сам: две меняющиеся величины ставим в одну формулу. $T$ постоянна → $p$ и $V$ меняются в разные стороны, значит, перемножаются; постоянны $p$ или $V$ → другая растёт вместе с $T$, значит, делится на неё.`,
  }),
  p10("capacitors", "capacitors-opposite-to-resistors", "memory", ["Capacitors combine the opposite way to resistors", "Կոնդենսատորները միանում են ռեզիստորների հակառակ ձևով", "Конденсаторы соединяются «наоборот» по сравнению с резисторами"], {
    en: `Learn one set of rules and flip it:

| | resistors | capacitors (and springs' stiffness) |
|---|---|---|
| series | $R = R_1 + R_2$ | $\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}$ |
| parallel | $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$ | $C = C_1 + C_2$ |

Why: two capacitors side by side (parallel) are like **one capacitor with plates twice as big**, so capacitance adds. In series the plates are effectively **further apart**, so the total is smaller than either. Quick check: in series the total is less than the smallest $C$; in parallel it is more than the biggest.`,
    hy: `Սովորիր մեկ կանոն և շրջիր այն․

| | ռեզիստորներ | կոնդենսատորներ (և զսպանակների կոշտություն) |
|---|---|---|
| հաջորդական | $R = R_1 + R_2$ | $\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}$ |
| զուգահեռ | $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$ | $C = C_1 + C_2$ |

Ինչու․ զուգահեռ միացված երկու կոնդենսատորը նման է **երկու անգամ մեծ թիթեղներով մեկ կոնդենսատորի**, ուրեմն ունակությունները գումարվում են։ Հաջորդականում թիթեղները կարծես **ավելի հեռու են**, և ընդհանուրը փոքր է յուրաքանչյուրից։ Արագ ստուգում․ հաջորդականում ընդհանուրը փոքր է ամենափոքր $C$-ից, զուգահեռում՝ մեծ ամենամեծից։`,
    ru: `Выучи одни правила и переверни их:

| | резисторы | конденсаторы (и жёсткость пружин) |
|---|---|---|
| последовательно | $R = R_1 + R_2$ | $\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}$ |
| параллельно | $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$ | $C = C_1 + C_2$ |

Почему: два конденсатора рядом (параллельно) — как **один конденсатор с вдвое большими пластинами**, поэтому ёмкости складываются. При последовательном соединении пластины как будто **дальше друг от друга**, и общая ёмкость меньше каждой. Проверка: последовательно — меньше наименьшей $C$, параллельно — больше наибольшей.`,
  }),

  // ---------- Chemistry ----------
  c9("redox-reactions", "oil-rig", "memory", ["OIL RIG: oxidation is loss, reduction is gain", "Օքսիդացում՝ տալ, վերականգնում՝ վերցնել", "Отдал — окислился, взял — восстановился"], {
    en: `Remember **OIL RIG**: **O**xidation **I**s **L**oss, **R**eduction **I**s **G**ain (of electrons).

Then the agents are the other way round, which confuses everyone. The **reducing agent** is the one that gets **oxidised**: it gives electrons away, like a donor. The **oxidising agent** gets **reduced**: it takes electrons.

$$\\text{Zn}^0 - 2e \\to \\text{Zn}^{+2} \\quad (\\text{oxidised, reducing agent})$$

$$\\text{Cu}^{+2} + 2e \\to \\text{Cu}^0 \\quad (\\text{reduced, oxidising agent})$$

Sign check: losing negative electrons makes the oxidation state go **up**; gaining them makes it go **down** ("reduced").`,
    hy: `Հիշիր զույգը․ **էլեկտրոն տվեց՝ օքսիդացավ, վերցրեց՝ վերականգնվեց**։ Անգլերենում ասում են **OIL RIG**՝ Oxidation Is Loss, Reduction Is Gain։

Հետո նյութերի անունները հակառակն են, և դա բոլորին շփոթեցնում է։ **Վերականգնիչը** այն է, որը **օքսիդանում** է․ էլեկտրոններ է տալիս, ինչպես դոնորը։ **Օքսիդիչը** **վերականգնվում** է․ էլեկտրոններ է վերցնում։

$$\\text{Zn}^0 - 2e \\to \\text{Zn}^{+2}$$

ցինկը օքսիդանում է, վերականգնիչ է,

$$\\text{Cu}^{+2} + 2e \\to \\text{Cu}^0$$

պղնձի իոնը վերականգնվում է, օքսիդիչ է։ Նշանի ստուգում․ բացասական էլեկտրոններ տալիս օքսիդացման աստիճանը **բարձրանում** է, վերցնելիս՝ **իջնում**։`,
    ru: `Запомни пару: **отдал — окислился, взял — восстановился**. По-английски говорят **OIL RIG**: Oxidation Is Loss, Reduction Is Gain.

А названия веществ — наоборот, и это всех путает. **Восстановитель** — тот, кто **окисляется**: он отдаёт электроны, как донор. **Окислитель** **восстанавливается**: он забирает электроны.

$$\\text{Zn}^0 - 2e \\to \\text{Zn}^{+2} \\quad (\\text{окисляется, восстановитель})$$

$$\\text{Cu}^{+2} + 2e \\to \\text{Cu}^0 \\quad (\\text{восстанавливается, окислитель})$$

Проверка знаком: отдавая отрицательные электроны, степень окисления **растёт**; принимая — **понижается**.`,
  }),
  c10("alkanes", "alkane-names-count", "memory", ["Alkane names: four to learn, then Greek numbers", "Ալկանների անուններ․ չորսը սովորիր, հետո հունական թվեր", "Названия алканов: четыре выучить, дальше греческие числа"], {
    en: `Only the first four names must be learnt by heart. English pupils use "**M**onkeys **E**at **P**eanut **B**utter":

| C | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| name | **meth**ane | **eth**ane | **prop**ane | **but**ane | pentane | hexane | heptane | octane | nonane | decane |

From five carbons on, the name is just a **number**: *penta* as in pentagon, *hexa* as in hexagon, *octa* as in octopus (eight legs), *deca* as in decade. The same stems give the names of alkenes, alcohols and acids: prop**ene**, prop**anol**, prop**anoic** acid all have 3 carbons.`,
    hy: `Անգիր պետք է սովորել միայն առաջին չորս անունները․

| C | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| անուն | **մեթ**ան | **էթ**ան | **պրոպ**ան | **բութ**ան | պենտան | հեքսան | հեպտան | օկտան | նոնան | դեկան |

Հինգ ածխածնից սկսած անունը պարզապես **թիվ** է․ *պենտա*՝ ինչպես պենտագոն (հնգանկյուն), *հեքսա*՝ ինչպես հեքսագոն, *օկտա*՝ ինչպես օկտոպուս (ութոտնուկ), *դեկա*՝ ինչպես դեկադա (տասնօրյակ)։ Նույն արմատներից են կազմվում ալկենների, սպիրտների և թթուների անունները․ պրոպ**են**, պրոպ**անոլ**, պրոպ**անաթթու**՝ բոլորն ունեն 3 ածխածին։`,
    ru: `Наизусть нужно выучить только первые четыре названия:

| C | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| название | **мет**ан | **эт**ан | **проп**ан | **бут**ан | пентан | гексан | гептан | октан | нонан | декан |

С пяти атомов углерода название — это просто **число**: *пента*, как в «пентагон», *гекса* — «гексагон», *окта* — «октопус», осьминог, *дека* — «декада», десять дней. Из тех же корней строятся названия алкенов, спиртов и кислот: проп**ен**, проп**анол**, проп**ановая** кислота — у всех по 3 атома углерода.`,
  }),
  c11("ph-and-hydrolysis", "stronger-parent-wins", "memory", ["Hydrolysis: the stronger parent wins", "Հիդրոլիզ․ հաղթում է ավելի ուժեղ «ծնողը»", "Гидролиз: побеждает более сильный «родитель»"], {
    en: `Every salt has two "parents": a base and an acid. The solution takes after the **stronger** one:

| salt | parents | medium |
|---|---|---|
| Na₂CO₃ | NaOH (strong) + H₂CO₃ (weak) | **alkaline**, pH > 7 |
| NH₄Cl | NH₃·H₂O (weak) + HCl (strong) | **acidic**, pH < 7 |
| NaCl | NaOH (strong) + HCl (strong) | **neutral**, no hydrolysis |
| (NH₄)₂CO₃ | weak + weak | close to neutral, hydrolysis goes far |

And the ion that reacts with water is always the one from the **weak** parent: CO₃²⁻ in soda, NH₄⁺ in ammonium chloride.`,
    hy: `Ամեն աղ ունի երկու «ծնող»՝ հիմք և թթու։ Լուծույթը նման է **ավելի ուժեղին**․

| աղ | ծնողներ | միջավայր |
|---|---|---|
| Na₂CO₃ | NaOH (ուժեղ) + H₂CO₃ (թույլ) | **հիմնային**, pH > 7 |
| NH₄Cl | NH₃·H₂O (թույլ) + HCl (ուժեղ) | **թթվային**, pH < 7 |
| NaCl | NaOH (ուժեղ) + HCl (ուժեղ) | **չեզոք**, հիդրոլիզ չկա |
| (NH₄)₂CO₃ | թույլ + թույլ | մոտ չեզոք, հիդրոլիզը խորն է գնում |

Իսկ ջրի հետ փոխազդում է միշտ **թույլ** ծնողից եկած իոնը․ սոդայում՝ CO₃²⁻, ամոնիումի քլորիդում՝ NH₄⁺։`,
    ru: `У каждой соли два «родителя»: основание и кислота. Раствор похож на **более сильного**:

| соль | родители | среда |
|---|---|---|
| Na₂CO₃ | NaOH (сильное) + H₂CO₃ (слабая) | **щелочная**, pH > 7 |
| NH₄Cl | NH₃·H₂O (слабое) + HCl (сильная) | **кислая**, pH < 7 |
| NaCl | NaOH (сильное) + HCl (сильная) | **нейтральная**, гидролиза нет |
| (NH₄)₂CO₃ | слабое + слабая | близка к нейтральной, гидролиз глубокий |

А с водой реагирует всегда ион от **слабого** родителя: CO₃²⁻ в соде, NH₄⁺ в хлориде аммония.`,
  }),
  c12("excess-and-limiting", "divide-by-coefficient", "problemSolving", ["Which is in excess? Divide moles by coefficients", "Ո՞րն է ավելցուկով․ մոլերը բաժանիր գործակիցների", "Что в избытке? Раздели моли на коэффициенты"], {
    en: `Comparing the moles directly is a trap: 2 mol of H₂ and 1.5 mol of O₂ look like "hydrogen is in excess". Instead divide each amount by its **coefficient** in the equation:

$$2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$$

| | moles | coefficient | moles ÷ coefficient |
|---|---|---|---|
| H₂ | 2 | 2 | **1** |
| O₂ | 1.5 | 1 | 1.5 |

The **smallest** quotient marks the limiting reagent: hydrogen runs out first, oxygen is in excess. All product calculations start from hydrogen: 2 mol H₂ give 2 mol H₂O.`,
    hy: `Մոլերն ուղղակիորեն համեմատելը թակարդ է․ 2 մոլ H₂-ը և 1,5 մոլ O₂-ը թվում է, թե «ջրածինն ավելցուկով է»։ Փոխարենը յուրաքանչյուր քանակը բաժանիր հավասարման մեջ նրա **գործակցի**․

$$2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$$

| | մոլ | գործակից | մոլ / գործակից |
|---|---|---|---|
| H₂ | 2 | 2 | **1** |
| O₂ | 1,5 | 1 | 1,5 |

**Ամենափոքր** քանորդը ցույց է տալիս պակասորդով նյութը․ ջրածինն առաջինն է վերջանում, թթվածինն ավելցուկով է։ Արգասիքի բոլոր հաշվարկները սկսիր ջրածնից․ 2 մոլ H₂-ը տալիս է 2 մոլ H₂O։`,
    ru: `Сравнивать моли напрямую — ловушка: 2 моль H₂ и 1,5 моль O₂ выглядят как «водород в избытке». Вместо этого раздели каждое количество на его **коэффициент** в уравнении:

$$2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$$

| | моль | коэффициент | моль : коэффициент |
|---|---|---|---|
| H₂ | 2 | 2 | **1** |
| O₂ | 1,5 | 1 | 1,5 |

**Наименьшее** частное указывает на вещество в недостатке: водород кончится первым, кислород в избытке. Все расчёты продукта ведём по водороду: 2 моль H₂ дают 2 моль H₂O.`,
  }),
  c12("solution-problems", "mixing-cross", "problemSolving", ["Mixing two solutions: the cross rule", "Երկու լուծույթ խառնելիս․ խաչի կանոն", "Смешивание растворов: правило креста"], {
    en: `To mix a 40 % and a 10 % solution into a 20 % one, draw a cross. Put the two concentrations on the left, the target in the middle, and subtract **along the diagonals** (bigger minus smaller):

| | | |
|---|---|---|
| **40 %** | | 20 − 10 = **10** parts |
| | **20 %** | |
| **10 %** | | 40 − 20 = **20** parts |

Read across: take 10 parts of the 40 % solution and 20 parts of the 10 % solution, a **1 : 2** ratio by mass. For 300 g of 20 % solution: 100 g of 40 % and 200 g of 10 %. Check: $0.4 \\cdot 100 + 0.1 \\cdot 200 = 60$ g, and $60 : 300 = 20\\,\\%$ ✓. Pure water counts as 0 %.`,
    hy: `40 %-անոց և 10 %-անոց լուծույթներից 20 %-անոց ստանալու համար գծիր խաչ։ Ձախ կողմում գրիր երկու կոնցենտրացիաները, մեջտեղում՝ նպատակայինը, և հանիր **անկյունագծերով** (մեծից փոքրը)․

| | | |
|---|---|---|
| **40 %** | | 20 − 10 = **10** մաս |
| | **20 %** | |
| **10 %** | | 40 − 20 = **20** մաս |

Կարդա տողով․ վերցրու 40 %-անոցից 10 մաս, 10 %-անոցից՝ 20 մաս, այսինքն զանգվածով **$1 : 2$** հարաբերություն։ 300 գ 20 %-անոց լուծույթի համար՝ 100 գ 40 %-անոց և 200 գ 10 %-անոց։ Ստուգում․ $0{,}4 \\cdot 100 + 0{,}1 \\cdot 200 = 60$ գ, և $60 : 300 = 20\\,\\%$ ✓։ Մաքուր ջուրը համարվում է 0 %։`,
    ru: `Чтобы из 40-процентного и 10-процентного растворов получить 20-процентный, нарисуй крест. Слева запиши две концентрации, в середине — нужную, и вычитай **по диагоналям** (из большего меньшее):

| | | |
|---|---|---|
| **40 %** | | 20 − 10 = **10** частей |
| | **20 %** | |
| **10 %** | | 40 − 20 = **20** частей |

Читай по строкам: 10 частей 40-процентного и 20 частей 10-процентного раствора, отношение по массе **1 : 2**. Для 300 г 20-процентного раствора: 100 г 40-процентного и 200 г 10-процентного. Проверка: $0{,}4 \\cdot 100 + 0{,}1 \\cdot 200 = 60$ г, и $60 : 300 = 20\\,\\%$ ✓. Чистая вода считается как 0 %.`,
  }),
];
