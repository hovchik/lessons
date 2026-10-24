import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Thermal phenomena", "Ջերմային երևույթներ", "Тепловые явления"),
  summary: t("Internal energy, heat transfer, specific heat, melting, vaporisation, heat engines.", "Ներքին էներգիա, ջերմափոխանակում, տեսակարար ջերմունակություն, հալում, գոլորշիացում, ջերմային շարժիչներ։", "Внутренняя энергия, теплопередача, удельная теплоёмкость, плавление, парообразование, тепловые двигатели."),
  lessons: [
    lesson(
      "thermal-motion-temperature",
      ["Thermal motion; temperature", "Ջերմային շարժում, ջերմաստիճան", "Тепловое движение; температура"],
      {
        en: ["Describe the thermal motion of molecules in solids, liquids and gases", "Explain what temperature measures and how a thermometer works", "Convert between the Celsius and Kelvin scales"],
        hy: ["Նկարագրել մոլեկուլների ջերմային շարժումը պինդ մարմիններում, հեղուկներում և գազերում", "Բացատրել, թե ի՞նչ է չափում ջերմաստիճանը և ինչպես է աշխատում ջերմաչափը", "Կատարել անցում Ցելսիուսի և Կելվինի սանդղակների միջև"],
        ru: ["Описывать тепловое движение молекул в твёрдых телах, жидкостях и газах", "Объяснять, что измеряет температура и как работает термометр", "Переходить от шкалы Цельсия к шкале Кельвина и обратно"],
      },
      {
        en: `## Molecules never rest

In grade 7 you learned that every substance is made of molecules and atoms, and that they move. This motion never stops. It is called **thermal motion**, because it is what we feel as warmth.

| State | How the particles move |
|---|---|
| Solid | vibrate about fixed positions in a lattice |
| Liquid | vibrate, but also jump from place to place |
| Gas | fly freely, colliding with each other and the walls |

The motion is **chaotic**: directions and speeds are different for every molecule and change at every collision. We can only talk about the *average* speed and the *average* kinetic energy of a molecule.

## Temperature

**Temperature** is a measure of the average kinetic energy of the chaotic motion of the particles of a body.

- Hotter body → faster molecules on average → higher temperature.
- Temperature does **not** depend on how much substance there is. A cup of tea and a bucket of tea at $60\\ ^\\circ$C have the same temperature, but different amounts of hot water.

### Thermal equilibrium

Put a cold spoon in hot soup. The soup cools, the spoon warms, and after a while both have the same temperature. This state is called **thermal equilibrium**. A thermometer works exactly this way: it comes into equilibrium with the body and then shows *its own* temperature, which is now equal to the body's.

## Thermometers

A liquid thermometer uses the expansion of alcohol or mercury in a thin tube. Other kinds use the change of electrical resistance, or the radiation of a hot body (an infrared thermometer).

Rules for a good measurement:
1. The thermometer must touch the body (or see it) long enough to reach equilibrium.
2. The thermometer must be small compared with the body, so it does not change the body's temperature.
3. Read the scale with your eye level with the liquid.

## Two scales

On the **Celsius** scale $0\\ ^\\circ$C is melting ice and $100\\ ^\\circ$C is boiling water at normal pressure.

On the **Kelvin** scale the zero is **absolute zero** — the temperature at which the chaotic motion of particles would stop. There is nothing colder. One kelvin is the same size as one degree Celsius, so

$$T = t + 273,\\qquad t = T - 273$$

where $T$ is in kelvins (K) and $t$ in degrees Celsius. Absolute zero is $-273\\ ^\\circ$C $= 0$ K. Room temperature $20\\ ^\\circ$C is $293$ K.

### Diffusion and Brownian motion as proofs

Thermal motion is not a guess. Two experiments show it directly:

- **Diffusion**: a drop of ink spreads through water by itself, and faster in hot water than in cold.
- **Brownian motion**: a speck of dust in water, seen in a microscope, trembles endlessly, pushed by the molecules hitting it from all sides.

### Exercises

1. Which has higher temperature: a nail at $300$ K or a nail at $20\\ ^\\circ$C?
2. Convert to kelvins: $0\\ ^\\circ$C, $37\\ ^\\circ$C, $-40\\ ^\\circ$C.
3. Convert to degrees Celsius: $200$ K, $310$ K, $373$ K.
4. A glass of water and a bathtub of water are both at $30\\ ^\\circ$C. In which one do the molecules move faster on average?
5. Why does sugar dissolve faster in hot tea?
6. A thermometer taken out of a freezer and put in your hand shows $-5\\ ^\\circ$C, then $10\\ ^\\circ$C, then $20\\ ^\\circ$C. Explain the three readings.
7. Why can you not measure the temperature of one drop of water with a large laboratory thermometer?
8. The lowest temperature ever recorded in nature on Earth is about $-89\\ ^\\circ$C. How far is it from absolute zero?

### Answers

1. The same: $300$ K $= 27\\ ^\\circ$C, so the first is hotter by $7\\ ^\\circ$C. (Careful reading: they are *not* equal.)
2. $273$ K, $310$ K, $233$ K.
3. $-73\\ ^\\circ$C, $37\\ ^\\circ$C, $100\\ ^\\circ$C.
4. Equally fast — the average kinetic energy depends only on temperature.
5. Molecules move faster at higher temperature, so diffusion is faster.
6. It is coming into thermal equilibrium with the hand; the last reading is the hand's temperature.
7. The thermometer would take a noticeable part of the heat and change the drop's temperature.
8. $-89\\ ^\\circ$C $= 184$ K, so $184$ K above absolute zero.`,
        hy: `## Մոլեկուլներն երբեք չեն հանգստանում

7-րդ դասարանում սովորեցիր, որ ամեն նյութ կազմված է մոլեկուլներից ու ատոմներից, և որ դրանք շարժվում են։ Այս շարժումն երբեք չի դադարում։ Այն կոչվում է **ջերմային շարժում**, քանի որ հենց դա ենք զգում որպես ջերմություն։

| Վիճակ | Ինչպես են շարժվում մասնիկները |
|---|---|
| Պինդ | տատանվում են բյուրեղավանդակի ֆիքսված դիրքերի շուրջ |
| Հեղուկ | տատանվում են, բայց նաև ցատկում են տեղից տեղ |
| Գազ | ազատ թռչում են՝ բախվելով միմյանց և պատերին |

Շարժումը **քաոսային** է՝ ուղղություններն ու արագությունները տարբեր են ամեն մոլեկուլի համար և փոխվում են ամեն բախման ժամանակ։ Կարող ենք խոսել միայն մոլեկուլի *միջին* արագության և *միջին* կինետիկ էներգիայի մասին։

## Ջերմաստիճան

**Ջերմաստիճանը** մարմնի մասնիկների քաոսային շարժման միջին կինետիկ էներգիայի չափն է։

- Ավելի տաք մարմին → միջինում ավելի արագ մոլեկուլներ → ավելի բարձր ջերմաստիճան։
- Ջերմաստիճանը **կախված չէ** նյութի քանակից։ Մի բաժակ թեյը և մի դույլ թեյը $60\\ ^\\circ$C-ում ունեն նույն ջերմաստիճանը, բայց տաք ջրի տարբեր քանակ։

### Ջերմային հավասարակշռություն

Սառը գդալը դիր տաք ապուրի մեջ։ Ապուրը սառչում է, գդալը տաքանում, և որոշ ժամանակ անց երկուսն էլ ունեն նույն ջերմաստիճանը։ Այս վիճակը կոչվում է **ջերմային հավասարակշռություն**։ Ջերմաչափը ճիշտ այդպես է աշխատում՝ հավասարակշռության մեջ է մտնում մարմնի հետ և ցույց տալիս *իր* ջերմաստիճանը, որը հիմա հավասար է մարմնի ջերմաստիճանին։

## Ջերմաչափեր

Հեղուկային ջերմաչափն օգտագործում է սպիրտի կամ սնդիկի ընդարձակումը բարակ խողովակում։ Այլ տեսակներն օգտագործում են էլեկտրական դիմադրության փոփոխությունը կամ տաք մարմնի ճառագայթումը (ինֆրակարմիր ջերմաչափ)։

Լավ չափման կանոնները՝
1. Ջերմաչափը պետք է դիպչի մարմնին (կամ տեսնի այն) այնքան երկար, որ հասնի հավասարակշռության։
2. Ջերմաչափը պետք է մարմնի համեմատ փոքր լինի, որ չփոխի մարմնի ջերմաստիճանը։
3. Սանդղակը կարդա՝ աչքդ պահելով հեղուկի մակարդակին։

## Երկու սանդղակ

**Ցելսիուսի** սանդղակում $0\\ ^\\circ$C-ը հալվող սառույցն է, իսկ $100\\ ^\\circ$C-ը՝ նորմալ ճնշման տակ եռացող ջուրը։

**Կելվինի** սանդղակում զրոն **բացարձակ զրոն** է՝ այն ջերմաստիճանը, որտեղ մասնիկների քաոսային շարժումը կդադարեր։ Ավելի սառը բան չկա։ Մեկ կելվինը նույն մեծությունն ունի, ինչ մեկ Ցելսիուսի աստիճանը, ուստի

$$T = t + 273,\\qquad t = T - 273$$

որտեղ $T$-ն կելվիններով է (Կ), իսկ $t$-ն՝ Ցելսիուսի աստիճաններով։ Բացարձակ զրոն $-273\\ ^\\circ$C $= 0$ Կ է։ Սենյակային $20\\ ^\\circ$C-ը $293$ Կ է։

### Դիֆուզիան և Բրոունյան շարժումն որպես ապացույց

Ջերմային շարժումն ենթադրություն չէ։ Երկու փորձ ուղղակիորեն ցույց են տալիս այն՝

- **Դիֆուզիա**՝ թանաքի կաթիլն ինքն իրեն տարածվում է ջրում, և տաք ջրում՝ ավելի արագ, քան սառը ջրում։
- **Բրոունյան շարժում**՝ ջրի մեջ փոշու մասնիկը, մանրադիտակով դիտելիս, անդադար դողում է՝ հրված բոլոր կողմերից իրեն հարվածող մոլեկուլներից։

### Վարժություններ

1. Ո՞ր մեխի ջերմաստիճանն է ավելի բարձր՝ $300$ Կ-ի, թե՞ $20\\ ^\\circ$C-ի։
2. Արտահայտիր կելվիններով՝ $0\\ ^\\circ$C, $37\\ ^\\circ$C, $-40\\ ^\\circ$C։
3. Արտահայտիր Ցելսիուսի աստիճաններով՝ $200$ Կ, $310$ Կ, $373$ Կ։
4. Մի բաժակ ջուրն ու մի լոգարանը ջուրը $30\\ ^\\circ$C-ում են։ Ո՞րում են մոլեկուլները միջինում ավելի արագ շարժվում։
5. Ինչո՞ւ է շաքարն ավելի արագ լուծվում տաք թեյում։
6. Սառնարանից հանված և ափի մեջ դրված ջերմաչափը ցույց է տալիս $-5\\ ^\\circ$C, հետո $10\\ ^\\circ$C, հետո $20\\ ^\\circ$C։ Բացատրիր երեք ցուցմունքը։
7. Ինչո՞ւ չի կարելի ջրի մեկ կաթիլի ջերմաստիճանը չափել մեծ լաբորատոր ջերմաչափով։
8. Երկրի վրա բնության մեջ գրանցված ամենացածր ջերմաստիճանը մոտ $-89\\ ^\\circ$C է։ Որքա՞ն է այն հեռու բացարձակ զրոյից։

### Պատասխաններ

1. $300$ Կ $= 27\\ ^\\circ$C, ուստի առաջինն ավելի տաք է $7\\ ^\\circ$C-ով։ (Ուշադիր կարդա՝ դրանք հավասար *չեն*։)
2. $273$ Կ, $310$ Կ, $233$ Կ։
3. $-73\\ ^\\circ$C, $37\\ ^\\circ$C, $100\\ ^\\circ$C։
4. Նույն արագությամբ՝ միջին կինետիկ էներգիան կախված է միայն ջերմաստիճանից։
5. Բարձր ջերմաստիճանում մոլեկուլներն ավելի արագ են շարժվում, ուստի դիֆուզիան ավելի արագ է։
6. Ջերմաչափը ջերմային հավասարակշռության մեջ է մտնում ափի հետ. վերջին ցուցմունքն ափի ջերմաստիճանն է։
7. Ջերմաչափը կվերցնի ջերմության նկատելի մասը և կփոխի կաթիլի ջերմաստիճանը։
8. $-89\\ ^\\circ$C $= 184$ Կ, ուստի բացարձակ զրոյից $184$ Կ բարձր։`,
        ru: `## Молекулы никогда не отдыхают

В 7 классе ты узнал, что любое вещество состоит из молекул и атомов и что они движутся. Это движение не прекращается никогда. Его называют **тепловым движением**, потому что именно его мы ощущаем как тепло.

| Состояние | Как движутся частицы |
|---|---|
| Твёрдое | колеблются около закреплённых положений в решётке |
| Жидкое | колеблются, но ещё и перескакивают с места на место |
| Газообразное | свободно летают, сталкиваясь друг с другом и со стенками |

Движение **хаотическое**: направления и скорости у каждой молекулы свои и меняются при каждом столкновении. Говорить можно только о *средней* скорости и *средней* кинетической энергии молекулы.

## Температура

**Температура** — мера средней кинетической энергии хаотического движения частиц тела.

- Тело горячее → молекулы в среднем быстрее → температура выше.
- Температура **не** зависит от количества вещества. Чашка чая и ведро чая при $60\\ ^\\circ$C имеют одинаковую температуру, но разное количество горячей воды.

### Тепловое равновесие

Опусти холодную ложку в горячий суп. Суп остывает, ложка нагревается, и через некоторое время у обоих одна температура. Это состояние называют **тепловым равновесием**. Термометр работает именно так: он приходит в равновесие с телом и показывает *свою* температуру, которая теперь равна температуре тела.

## Термометры

Жидкостный термометр использует расширение спирта или ртути в тонкой трубке. Другие используют изменение электрического сопротивления или излучение горячего тела (инфракрасный термометр).

Правила хорошего измерения:
1. Термометр должен касаться тела (или видеть его) достаточно долго, чтобы прийти в равновесие.
2. Термометр должен быть мал по сравнению с телом, чтобы не изменить его температуру.
3. Снимай показание, расположив глаз на уровне жидкости.

## Две шкалы

По шкале **Цельсия** $0\\ ^\\circ$C — таяние льда, $100\\ ^\\circ$C — кипение воды при нормальном давлении.

По шкале **Кельвина** нуль — это **абсолютный нуль**, температура, при которой хаотическое движение частиц прекратилось бы. Холоднее не бывает. Один кельвин равен по величине одному градусу Цельсия, поэтому

$$T = t + 273,\\qquad t = T - 273$$

где $T$ — в кельвинах (К), а $t$ — в градусах Цельсия. Абсолютный нуль: $-273\\ ^\\circ$C $= 0$ К. Комнатные $20\\ ^\\circ$C — это $293$ К.

### Диффузия и броуновское движение как доказательство

Тепловое движение — не догадка. Два опыта показывают его прямо:

- **Диффузия**: капля чернил сама расходится в воде, и в горячей воде быстрее, чем в холодной.
- **Броуновское движение**: пылинка в воде под микроскопом непрерывно дрожит, толкаемая молекулами, которые бьют по ней со всех сторон.

### Упражнения

1. У какого гвоздя температура выше: при $300$ К или при $20\\ ^\\circ$C?
2. Вырази в кельвинах: $0\\ ^\\circ$C, $37\\ ^\\circ$C, $-40\\ ^\\circ$C.
3. Вырази в градусах Цельсия: $200$ К, $310$ К, $373$ К.
4. Стакан воды и ванна воды имеют температуру $30\\ ^\\circ$C. Где молекулы в среднем движутся быстрее?
5. Почему сахар растворяется в горячем чае быстрее?
6. Термометр, вынутый из морозильника и взятый в руку, показывает $-5\\ ^\\circ$C, потом $10\\ ^\\circ$C, потом $20\\ ^\\circ$C. Объясни три показания.
7. Почему нельзя измерить температуру одной капли воды большим лабораторным термометром?
8. Самая низкая температура, зарегистрированная в природе на Земле, около $-89\\ ^\\circ$C. Насколько она выше абсолютного нуля?

### Ответы

1. $300$ К $= 27\\ ^\\circ$C, значит первый горячее на $7\\ ^\\circ$C. (Читай внимательно: они *не* равны.)
2. $273$ К, $310$ К, $233$ К.
3. $-73\\ ^\\circ$C, $37\\ ^\\circ$C, $100\\ ^\\circ$C.
4. Одинаково: средняя кинетическая энергия зависит только от температуры.
5. При более высокой температуре молекулы движутся быстрее, поэтому диффузия идёт быстрее.
6. Термометр приходит в тепловое равновесие с рукой; последнее показание — температура руки.
7. Термометр забрал бы заметную часть теплоты и изменил температуру капли.
8. $-89\\ ^\\circ$C $= 184$ К, то есть на $184$ К выше абсолютного нуля.`,
      },
      [
        q(t("Temperature is a measure of", "Ջերմաստիճանը չափն է", "Температура — это мера"), [
          t("the average kinetic energy of the chaotic motion of particles", "մասնիկների քաոսային շարժման միջին կինետիկ էներգիայի", "средней кинетической энергии хаотического движения частиц"),
          t("the total energy of the body", "մարմնի լրիվ էներգիայի", "полной энергии тела"),
          t("the amount of substance in the body", "մարմնի նյութի քանակի", "количества вещества в теле"),
        ], 0),
        q(t("27 °C in kelvins is", "27 °C-ը կելվիններով է", "27 °C в кельвинах — это"), [
          t("246 K", "246 Կ", "246 К"),
          t("300 K", "300 Կ", "300 К"),
          t("273 K", "273 Կ", "273 К"),
        ], 1),
        q(t("In a solid the particles", "Պինդ մարմնում մասնիկները", "В твёрдом теле частицы"), [
          t("fly freely in all directions", "ազատ թռչում են բոլոր ուղղություններով", "свободно летают во все стороны"),
          t("do not move at all", "ընդհանրապես չեն շարժվում", "совсем не движутся"),
          t("vibrate about fixed positions", "տատանվում են ֆիքսված դիրքերի շուրջ", "колеблются около закреплённых положений"),
        ], 2),
        q(t("Absolute zero is", "Բացարձակ զրոն է", "Абсолютный нуль — это"), [
          t("-273 °C", "-273 °C", "-273 °C"),
          t("0 °C", "0 °C", "0 °C"),
          t("-100 °C", "-100 °C", "-100 °C"),
        ], 0),
        q(t("Brownian motion of a dust speck in water proves that", "Ջրում փոշու մասնիկի Բրոունյան շարժումն ապացուցում է, որ", "Броуновское движение пылинки в воде доказывает, что"), [
          t("water is heavier than dust", "ջուրը փոշուց ծանր է", "вода тяжелее пылинки"),
          t("water molecules are in constant chaotic motion", "ջրի մոլեկուլները մշտական քաոսային շարժման մեջ են", "молекулы воды находятся в постоянном хаотическом движении"),
          t("dust dissolves in water", "փոշին լուծվում է ջրում", "пылинка растворяется в воде"),
        ], 1),
        q(t("Two bodies are in thermal equilibrium when", "Երկու մարմին ջերմային հավասարակշռության մեջ են, երբ", "Два тела находятся в тепловом равновесии, когда"), [
          t("they have equal masses", "ունեն հավասար զանգվածներ", "их массы равны"),
          t("one of them is hotter", "մեկն ավելի տաք է", "одно из них горячее"),
          t("their temperatures are equal", "նրանց ջերմաստիճանները հավասար են", "их температуры равны"),
        ], 2),
      ],
    ),
    lesson(
      "internal-energy",
      ["Internal energy and ways to change it", "Ներքին էներգիա և նրա փոփոխման եղանակները", "Внутренняя энергия и способы её изменения"],
      {
        en: ["Explain what internal energy consists of", "Name the two ways of changing internal energy", "Decide in examples whether work was done or heat was transferred"],
        hy: ["Բացատրել, թե ինչից է բաղկացած ներքին էներգիան", "Նշել ներքին էներգիայի փոփոխման երկու եղանակը", "Օրինակներում որոշել՝ աշխատանք է կատարվել, թե ջերմափոխանակում է եղել"],
        ru: ["Объяснять, из чего состоит внутренняя энергия", "Называть два способа изменения внутренней энергии", "Определять в примерах, совершалась работа или происходила теплопередача"],
      },
      {
        en: `## A new kind of energy

A stone on a shelf has potential energy; a flying stone has kinetic energy. But a stone lying still on the ground also stores energy — inside itself. Its molecules move and attract each other.

**Internal energy** of a body is the sum of the kinetic energy of the chaotic motion of all its particles and the potential energy of their interaction.

Internal energy depends on:

| Depends on | Why |
|---|---|
| temperature | faster particles → more kinetic energy |
| mass (amount of substance) | more particles → more energy |
| state (solid, liquid, gas) | the potential energy of interaction differs |
| kind of substance | different particles, different bonds |

It does **not** depend on the motion of the body as a whole, nor on its height. A bullet flying at $300$ m/s and the same bullet at rest at the same temperature have equal internal energies.

## Two ways to change it

### 1. Doing work

Rub your palms together — they get warm. Bend a wire back and forth many times — the bend becomes hot. Hammer a nail — the nail warms. A bicycle pump gets hot when you compress air in it.

When work is done **on** a body, its internal energy increases. When a body itself does work (compressed air pushing out a cork), its internal energy decreases and it cools.

### 2. Heat transfer

A spoon in hot tea becomes hot without anyone doing work on it. Energy passes from the hot tea to the cold spoon simply because they touch. This process is called **heat transfer**, and the energy passed in it is called **quantity of heat**, $Q$.

Heat always flows from the hotter body to the colder one, never by itself the other way.

## Worked example

> A lead ball falls from a height and hits the floor. The ball does not bounce. What happened to the energy?

Before the fall the ball had potential energy. Just before hitting it had kinetic energy. After the hit, the ball is at rest on the floor, so both are gone. The mechanical energy did not disappear: it turned into internal energy of the ball and the floor, and both became slightly warmer.

This is the **law of conservation of energy**: energy never disappears and never appears from nothing, it only changes form.

### Exercises

1. Name the two ways of changing a body's internal energy.
2. Does the internal energy of a bullet change when it simply flies faster through the air at the same temperature? And when it hits a wall?
3. Two identical glasses hold water at $20\\ ^\\circ$C: one full, one half full. Compare their temperatures and their internal energies.
4. In which of these is internal energy changed by work, and in which by heat transfer: (a) a saw heats up while cutting; (b) a cup warms in hot water; (c) air in a pump warms when compressed; (d) snow melts in the Sun?
5. A piece of ice at $0\\ ^\\circ$C and water at $0\\ ^\\circ$C have equal masses. Which has larger internal energy?
6. Why does a satellite burn up when it enters the atmosphere?
7. A gas in a cylinder pushes the piston up. What happens to the internal energy of the gas?
8. Explain why you can light a fire by rubbing two sticks.

### Answers

1. Doing work and heat transfer.
2. Flying faster does not change it (internal energy is about the chaotic motion inside); hitting a wall turns kinetic energy into internal energy, so it increases.
3. Same temperature; the full glass has more internal energy because it has more molecules.
4. (a) work, (b) heat transfer, (c) work, (d) heat transfer.
5. Water, because melting required extra energy to break the bonds of the lattice.
6. Friction with the air does work on it, and its internal energy grows enough to melt and vaporise it.
7. The gas does work, so its internal energy decreases and it cools.
8. The work of friction increases the internal energy of the wood until it reaches ignition temperature.`,
        hy: `## Էներգիայի նոր տեսակ

Դարակի վրա դրված քարն ունի պոտենցիալ էներգիա, թռչող քարը՝ կինետիկ։ Բայց գետնին անշարժ ընկած քարն էլ էներգիա է պահում՝ իր ներսում։ Նրա մոլեկուլները շարժվում են և ձգում են միմյանց։

Մարմնի **ներքին էներգիան** նրա բոլոր մասնիկների քաոսային շարժման կինետիկ էներգիաների և դրանց փոխազդեցության պոտենցիալ էներգիաների գումարն է։

Ներքին էներգիան կախված է՝

| Կախված է | Ինչու |
|---|---|
| ջերմաստիճանից | ավելի արագ մասնիկներ → ավելի շատ կինետիկ էներգիա |
| զանգվածից (նյութի քանակից) | ավելի շատ մասնիկներ → ավելի շատ էներգիա |
| վիճակից (պինդ, հեղուկ, գազ) | փոխազդեցության պոտենցիալ էներգիան տարբեր է |
| նյութի տեսակից | տարբեր մասնիկներ, տարբեր կապեր |

Այն կախված **չէ** մարմնի՝ որպես ամբողջության շարժումից, ոչ էլ նրա բարձրությունից։ $300$ մ/վ արագությամբ թռչող գնդակը և նույն գնդակը՝ հանգստի վիճակում, նույն ջերմաստիճանում ունեն հավասար ներքին էներգիաներ։

## Փոփոխման երկու եղանակ

### 1. Աշխատանքի կատարում

Շփիր ափերդ՝ տաքանում են։ Լարը բազմիցս ծալիր ու բացիր՝ ծալքը տաքանում է։ Մեխը մեխիր՝ մեխը տաքանում է։ Հեծանիվի պոմպը տաքանում է, երբ նրանում օդ ես սեղմում։

Երբ մարմնի **վրա** աշխատանք է կատարվում, նրա ներքին էներգիան մեծանում է։ Երբ մարմինն ինքն է աշխատանք կատարում (սեղմված օդը խցանը դուրս է հրում), նրա ներքին էներգիան փոքրանում է, և այն սառչում է։

### 2. Ջերմափոխանակում

Տաք թեյի մեջ դրված գդալը տաքանում է՝ առանց որ որևէ մեկը նրա վրա աշխատանք կատարի։ Էներգիան անցնում է տաք թեյից սառը գդալին պարզապես այն պատճառով, որ դրանք դիպչում են։ Այս պրոցեսը կոչվում է **ջերմափոխանակում**, իսկ դրանում փոխանցված էներգիան՝ **ջերմաքանակ**, $Q$։

Ջերմությունը միշտ հոսում է ավելի տաք մարմնից ավելի սառին և երբեք ինքնըստինքյան՝ հակառակ ուղղությամբ։

## Լուծված օրինակ

> Կապարե գնդիկը բարձրությունից ընկնում է հատակին։ Գնդիկը չի ցատկում։ Ի՞նչ եղավ էներգիան։

Մինչև անկումը գնդիկն ուներ պոտենցիալ էներգիա։ Հատակին դիպչելուց անմիջապես առաջ՝ կինետիկ։ Հարվածից հետո գնդիկը հանգիստ պառկած է հատակին, ուստի երկուսն էլ չկան։ Մեխանիկական էներգիան չի անհետացել՝ այն վերածվել է գնդիկի և հատակի ներքին էներգիայի, և երկուսն էլ մի քիչ տաքացել են։

Սա **էներգիայի պահպանման օրենքն** է՝ էներգիան երբեք չի անհետանում և ոչնչից չի առաջանում, այլ միայն փոխում է ձևը։

### Վարժություններ

1. Նշիր մարմնի ներքին էներգիայի փոփոխման երկու եղանակը։
2. Փոխվո՞ւմ է գնդակի ներքին էներգիան, երբ այն պարզապես ավելի արագ է թռչում օդում նույն ջերմաստիճանում։ Իսկ երբ դիպչում է պատին։
3. Երկու միանման բաժակում $20\\ ^\\circ$C ջուր է՝ մեկը լիքը, մյուսը՝ կիսով չափ։ Համեմատիր դրանց ջերմաստիճաններն ու ներքին էներգիաները։
4. Որտե՞ղ է ներքին էներգիան փոխվում աշխատանքով, որտե՞ղ՝ ջերմափոխանակմամբ. ա) սղոցը տաքանում է կտրելիս, բ) բաժակը տաքանում է տաք ջրում, գ) պոմպի օդը տաքանում է սեղմվելիս, դ) ձյունը հալվում է արևի տակ։
5. $0\\ ^\\circ$C սառույցի կտորն ու $0\\ ^\\circ$C ջուրն ունեն հավասար զանգվածներ։ Ո՞ր մեկի ներքին էներգիան է մեծ։
6. Ինչո՞ւ է արբանյակն այրվում, երբ մտնում է մթնոլորտ։
7. Բալոնում գազը վեր է հրում մխոցը։ Ի՞նչ է լինում գազի ներքին էներգիային։
8. Բացատրիր, թե ինչու կարելի է կրակ վառել՝ երկու փայտ շփելով։

### Պատասխաններ

1. Աշխատանքի կատարում և ջերմափոխանակում։
2. Ավելի արագ թռչելը չի փոխում (ներքին էներգիան ներսի քաոսային շարժման մասին է), պատին դիպչելիս կինետիկ էներգիան դառնում է ներքին, ուստի մեծանում է։
3. Ջերմաստիճանը նույնն է, լիքը բաժակի ներքին էներգիան ավելի մեծ է, քանի որ մոլեկուլներն ավելի շատ են։
4. ա) աշխատանք, բ) ջերմափոխանակում, գ) աշխատանք, դ) ջերմափոխանակում։
5. Ջրի, քանի որ հալվելը պահանջել է լրացուցիչ էներգիա՝ վանդակի կապերը քանդելու համար։
6. Օդի հետ շփումն աշխատանք է կատարում նրա վրա, և ներքին էներգիան այնքան է մեծանում, որ հալեցնում ու գոլորշիացնում է այն։
7. Գազն աշխատանք է կատարում, ուստի նրա ներքին էներգիան փոքրանում է, և գազը սառչում է։
8. Շփման աշխատանքը մեծացնում է փայտի ներքին էներգիան, մինչև հասնում է բռնկման ջերմաստիճանին։`,
        ru: `## Новый вид энергии

У камня на полке есть потенциальная энергия, у летящего камня — кинетическая. Но и камень, спокойно лежащий на земле, запасает энергию — внутри себя. Его молекулы движутся и притягивают друг друга.

**Внутренняя энергия** тела — это сумма кинетических энергий хаотического движения всех его частиц и потенциальных энергий их взаимодействия.

Внутренняя энергия зависит от:

| Зависит от | Почему |
|---|---|
| температуры | частицы быстрее → больше кинетической энергии |
| массы (количества вещества) | больше частиц → больше энергии |
| состояния (твёрдое, жидкое, газ) | потенциальная энергия взаимодействия разная |
| рода вещества | разные частицы, разные связи |

Она **не** зависит от движения тела как целого и от его высоты. Пуля, летящая со скоростью $300$ м/с, и та же пуля в покое при той же температуре имеют одинаковую внутреннюю энергию.

## Два способа её изменить

### 1. Совершение работы

Потри ладони — они нагреются. Много раз согни и разогни проволоку — место сгиба станет горячим. Забей гвоздь — гвоздь нагреется. Велосипедный насос нагревается, когда ты сжимаешь в нём воздух.

Когда работа совершается **над** телом, его внутренняя энергия растёт. Когда тело само совершает работу (сжатый воздух выталкивает пробку), внутренняя энергия уменьшается и тело остывает.

### 2. Теплопередача

Ложка в горячем чае нагревается, хотя никто не совершает над ней работы. Энергия переходит от горячего чая к холодной ложке просто потому, что они соприкасаются. Этот процесс называют **теплопередачей**, а переданную в нём энергию — **количеством теплоты** $Q$.

Теплота всегда переходит от более горячего тела к более холодному и сама никогда не идёт обратно.

## Разобранный пример

> Свинцовый шарик падает с высоты на пол. Шарик не отскакивает. Что стало с энергией?

До падения у шарика была потенциальная энергия. Прямо перед ударом — кинетическая. После удара шарик спокойно лежит на полу, значит, нет ни той, ни другой. Механическая энергия не исчезла: она перешла во внутреннюю энергию шарика и пола, и оба немного нагрелись.

Это **закон сохранения энергии**: энергия никогда не исчезает и не возникает из ничего, она только меняет форму.

### Упражнения

1. Назови два способа изменить внутреннюю энергию тела.
2. Меняется ли внутренняя энергия пули, когда она просто летит быстрее при той же температуре? А когда она попадает в стену?
3. В двух одинаковых стаканах вода при $20\\ ^\\circ$C: один полный, другой наполовину. Сравни их температуры и внутренние энергии.
4. Где внутренняя энергия меняется работой, а где теплопередачей: а) пила нагревается при пилении; б) чашка нагревается в горячей воде; в) воздух в насосе нагревается при сжатии; г) снег тает на солнце?
5. Кусок льда при $0\\ ^\\circ$C и вода при $0\\ ^\\circ$C имеют равные массы. У чего внутренняя энергия больше?
6. Почему спутник сгорает при входе в атмосферу?
7. Газ в баллоне поднимает поршень. Что происходит с внутренней энергией газа?
8. Объясни, почему можно добыть огонь трением двух палочек.

### Ответы

1. Совершение работы и теплопередача.
2. От более быстрого полёта не меняется (внутренняя энергия — о хаотическом движении внутри); при ударе о стену кинетическая энергия переходит во внутреннюю, и она растёт.
3. Температура одинакова; у полного стакана внутренняя энергия больше, потому что молекул больше.
4. а) работа, б) теплопередача, в) работа, г) теплопередача.
5. У воды, потому что на плавление пошла дополнительная энергия — на разрушение связей решётки.
6. Трение о воздух совершает над ним работу, и внутренняя энергия растёт настолько, что спутник плавится и испаряется.
7. Газ совершает работу, поэтому его внутренняя энергия уменьшается и газ остывает.
8. Работа трения увеличивает внутреннюю энергию дерева, пока она не достигнет температуры воспламенения.`,
      },
      [
        q(t("Internal energy of a body depends on", "Մարմնի ներքին էներգիան կախված է", "Внутренняя энергия тела зависит от"), [
          t("its height above the ground", "գետնից նրա բարձրությունից", "его высоты над землёй"),
          t("its speed as a whole", "որպես ամբողջության նրա արագությունից", "его скорости как целого"),
          t("its temperature, mass, state and substance", "նրա ջերմաստիճանից, զանգվածից, վիճակից և նյութից", "его температуры, массы, состояния и вещества"),
        ], 2),
        q(t("A wire becomes hot where it is bent many times. Its internal energy changed by", "Լարը տաքանում է այն տեղում, որտեղ բազմիցս ծալվել է։ Նրա ներքին էներգիան փոխվել է", "Проволока нагрелась в месте многократного сгибания. Её внутренняя энергия изменилась"), [
          t("doing work on it", "նրա վրա աշխատանք կատարելով", "совершением работы над ней"),
          t("heat transfer", "ջերմափոխանակմամբ", "теплопередачей"),
          t("radiation of the Sun", "Արևի ճառագայթմամբ", "излучением Солнца"),
        ], 0),
        q(t("Heat always passes", "Ջերմությունը միշտ անցնում է", "Теплота всегда переходит"), [
          t("from the lighter body to the heavier one", "թեթև մարմնից ծանրին", "от более лёгкого тела к более тяжёлому"),
          t("from the hotter body to the colder one", "ավելի տաք մարմնից ավելի սառին", "от более горячего тела к более холодному"),
          t("from the larger body to the smaller one", "մեծ մարմնից փոքրին", "от более большого тела к меньшему"),
        ], 1),
        q(t("Two glasses hold water at the same temperature, one full and one half full. Their internal energies are", "Երկու բաժակում նույն ջերմաստիճանի ջուր է՝ մեկը լիքը, մյուսը՝ կիսով չափ։ Դրանց ներքին էներգիաները", "В двух стаканах вода одной температуры: один полный, другой наполовину. Их внутренние энергии"), [
          t("larger in the full glass", "ավելի մեծ են լիքը բաժակում", "больше у полного стакана"),
          t("equal", "հավասար են", "равны"),
          t("larger in the half-full glass", "ավելի մեծ են կիսով չափ լցված բաժակում", "больше у наполовину полного стакана"),
        ], 0),
        q(t("A gas expands and pushes a piston. The gas", "Գազն ընդարձակվում է և հրում է մխոցը։ Գազը", "Газ расширяется и толкает поршень. Газ"), [
          t("warms up", "տաքանում է", "нагревается"),
          t("cools down", "սառչում է", "остывает"),
          t("does not change its temperature", "չի փոխում իր ջերմաստիճանը", "не меняет температуру"),
        ], 1),
        q(t("A falling ball stops on the floor. Its mechanical energy", "Ընկնող գնդակը կանգ է առնում հատակին։ Նրա մեխանիկական էներգիան", "Падающий шарик останавливается на полу. Его механическая энергия"), [
          t("disappeared completely", "լրիվ անհետացել է", "полностью исчезла"),
          t("was given to the air only", "տրվել է միայն օդին", "передана только воздуху"),
          t("turned into internal energy of the ball and the floor", "վերածվել է գնդակի և հատակի ներքին էներգիայի", "перешла во внутреннюю энергию шарика и пола"),
        ], 2),
      ],
    ),
    lesson(
      "heat-transfer",
      ["Conduction, convection, radiation", "Ջերմահաղորդականություն, կոնվեկցիա, ճառագայթում", "Теплопроводность, конвекция, излучение"],
      {
        en: ["Describe the three kinds of heat transfer", "Compare the thermal conductivity of metals, liquids, gases and porous materials", "Explain everyday examples: clothes, a vacuum flask, central heating, the Sun"],
        hy: ["Նկարագրել ջերմափոխանակման երեք տեսակը", "Համեմատել մետաղների, հեղուկների, գազերի և ծակոտկեն նյութերի ջերմահաղորդականությունը", "Բացատրել կենցաղային օրինակներ՝ հագուստ, թերմոս, ջեռուցում, Արև"],
        ru: ["Описывать три вида теплопередачи", "Сравнивать теплопроводность металлов, жидкостей, газов и пористых материалов", "Объяснять бытовые примеры: одежда, термос, отопление, Солнце"],
      },
      {
        en: `## Three ways for heat to travel

| Kind | What moves | Where it happens |
|---|---|---|
| Conduction | energy from particle to particle; the particles stay | mainly solids |
| Convection | the heated substance itself moves | liquids and gases |
| Radiation | electromagnetic waves | any medium and vacuum |

## 1. Conduction

Hold an iron rod in a flame and after a while the far end becomes hot. The fast particles at the hot end collide with their neighbours and pass energy along the rod. No substance travels — only energy.

Materials differ enormously:

- **Good conductors**: silver, copper, aluminium, iron. In a metal free electrons carry energy very quickly.
- **Poor conductors (insulators)**: wood, glass, plastic, brick.
- **Very poor**: liquids (except molten metals), gases, and especially porous materials — fur, wool, down, foam, snow. They trap air, and air conducts badly.

That is why a metal spoon in tea burns your fingers but a wooden one does not; why a fur coat keeps you warm (it keeps *your* heat in, it does not make heat); and why plants under snow survive the frost.

Vacuum conducts no heat at all: with no particles, there is nothing to pass energy from one to the next.

## 2. Convection

Heat a pot of water at the bottom. The lower layer expands, becomes less dense, and floats up; cold dense water sinks to take its place. A circulation, a **convection current**, forms and the whole pot heats.

Consequences:
- A radiator is placed **low** in the room, a cooler **high**, because warm air rises.
- A window vent at the top lets hot air out, a draught at the floor brings cold air in.
- Wind, sea breezes and thunderstorms are convection in the atmosphere.

Convection is impossible in solids (particles cannot move around) and in vacuum (no substance).

## 3. Radiation

The Sun warms the Earth across $150$ million kilometres of vacuum. No conduction, no convection — only **thermal radiation**, invisible infrared waves.

Every body radiates, and the hotter it is the more it radiates. Dark rough surfaces absorb and emit radiation well; light shiny surfaces reflect it. That is why summer clothes are light-coloured, why a radiator is often painted dark, and why a fuel tank is painted silver.

### The vacuum flask

A thermos fights all three at once:
1. **Radiation** — the double walls are silvered to reflect it back.
2. **Conduction** — the gap between the walls is evacuated.
3. **Convection** — no air in the gap, so no currents; a tight stopper stops the vapour leaving.

### Exercises

1. Which kind of heat transfer carries energy through a vacuum?
2. Order by thermal conductivity, from best to worst: copper, water, wool, glass, air.
3. Why do we feel a tiled floor colder than a carpet at the same temperature?
4. Why is the freezer compartment placed at the top of a refrigerator?
5. Why does a double-glazed window insulate better than a single thick pane?
6. Why do people in hot deserts wear loose white clothes?
7. In which direction will a convection current move in a room with an open hot radiator near the floor?
8. Name the three measures used in a vacuum flask and which kind of transfer each one blocks.

### Answers

1. Radiation.
2. Copper, glass, water, wool, air (wool works thanks to the air in it).
3. Tiles conduct heat away from the foot much faster than carpet.
4. Air cooled there sinks and cools the whole volume by convection.
5. The thin layer of air (or gas) between the panes conducts badly, better than glass does.
6. White reflects the Sun's radiation, and loose clothes let convection carry sweat and heat away.
7. Up along the radiator, across the ceiling, down the opposite wall, back along the floor.
8. Silvering against radiation, vacuum against conduction, absence of air plus a stopper against convection.`,
        hy: `## Ջերմության տարածման երեք եղանակ

| Տեսակ | Ինչն է տեղաշարժվում | Որտեղ է տեղի ունենում |
|---|---|---|
| Ջերմահաղորդականություն | էներգիան՝ մասնիկից մասնիկ, մասնիկները մնում են տեղում | հիմնականում պինդ մարմիններ |
| Կոնվեկցիա | տեղաշարժվում է հենց տաքացած նյութը | հեղուկներ և գազեր |
| Ճառագայթում | էլեկտրամագնիսական ալիքներ | ցանկացած միջավայր և վակուում |

## 1. Ջերմահաղորդականություն

Երկաթե ձողը պահիր բոցի մեջ, և որոշ ժամանակ անց հեռավոր ծայրը կտաքանա։ Տաք ծայրի արագ մասնիկները բախվում են հարևաններին և էներգիան փոխանցում ձողի երկայնքով։ Նյութ չի տեղաշարժվում՝ միայն էներգիա։

Նյութերը խիստ տարբերվում են՝

- **Լավ ջերմահաղորդիչներ**՝ արծաթ, պղինձ, ալյումին, երկաթ։ Մետաղում ազատ էլեկտրոնները շատ արագ են տանում էներգիան։
- **Վատ հաղորդիչներ (մեկուսիչներ)**՝ փայտ, ապակի, պլաստմասսա, աղյուս։
- **Շատ վատ**՝ հեղուկներ (բացի հալված մետաղներից), գազեր և հատկապես ծակոտկեն նյութերը՝ մորթի, բուրդ, փետուր, փրփուր, ձյուն։ Դրանք օդ են պահում իրենց մեջ, իսկ օդը վատ է հաղորդում։

Ահա թե ինչու թեյի մեջ դրված մետաղե գդալն այրում է մատներդ, իսկ փայտյանը՝ ոչ, ինչու մորթե վերարկուն տաք է պահում (նա պահում է *քո* ջերմությունը ներսում, ջերմություն չի արտադրում), և ինչու ձյան տակ բույսերը դիմանում են ցրտին։

Վակուումն ընդհանրապես ջերմություն չի հաղորդում՝ մասնիկներ չկան, ուստի չկա մեկը, որ էներգիան փոխանցի մյուսին։

## 2. Կոնվեկցիա

Տաքացրու ջրով կաթսան ներքևից։ Ներքևի շերտն ընդարձակվում է, դառնում ավելի նվազ խիտ և վեր բարձրանում, իսկ սառը խիտ ջուրն իջնում է նրա տեղը։ Առաջանում է շրջապտույտ՝ **կոնվեկցիոն հոսք**, և ամբողջ կաթսան տաքանում է։

Հետևանքներ՝
- Ջեռուցման մարտկոցը դրվում է սենյակի **ներքևում**, օդորակիչը՝ **վերևում**, քանի որ տաք օդը բարձրանում է։
- Վերևի օդանցքը դուրս է թողնում տաք օդը, հատակի ճեղքը ներս է բերում սառն օդը։
- Քամին, ծովի զեփյուռը և ամպրոպը մթնոլորտի կոնվեկցիան են։

Կոնվեկցիան անհնար է պինդ մարմիններում (մասնիկները չեն կարող տեղաշարժվել) և վակուումում (նյութ չկա)։

## 3. Ճառագայթում

Արևը տաքացնում է Երկիրը $150$ միլիոն կիլոմետր վակուումի միջով։ Ո՛չ ջերմահաղորդականություն, ո՛չ կոնվեկցիա՝ միայն **ջերմային ճառագայթում**, անտեսանելի ինֆրակարմիր ալիքներ։

Ամեն մարմին ճառագայթում է, և ինչքան տաք է, այնքան ավելի շատ։ Մուգ, խորդուբորդ մակերևույթները լավ են կլանում և արձակում ճառագայթումը, բաց, փայլուն մակերևույթները՝ արտացոլում։ Ահա թե ինչու ամառային հագուստը բաց գույնի է, ջեռուցման մարտկոցը՝ հաճախ մուգ ներկված, իսկ վառելիքի բաքը՝ արծաթագույն։

### Թերմոս

Թերմոսը միաժամանակ պայքարում է երեքի դեմ՝
1. **Ճառագայթում**՝ կրկնակի պատերն արծաթապատված են, որ հետ արտացոլեն։
2. **Ջերմահաղորդականություն**՝ պատերի միջև օդը հանված է։
3. **Կոնվեկցիա**՝ ճեղքում օդ չկա, ուստի հոսքեր չկան, իսկ ամուր խցանը թույլ չի տալիս գոլորշուն դուրս գալ։

### Վարժություններ

1. Ջերմափոխանակման ո՞ր տեսակն էներգիա է տանում վակուումի միջով։
2. Դասավորիր ջերմահաղորդականությամբ՝ լավագույնից վատագույնը՝ պղինձ, ջուր, բուրդ, ապակի, օդ։
3. Ինչո՞ւ սալիկապատ հատակը նույն ջերմաստիճանի գորգից ավելի սառն է զգացվում։
4. Ինչո՞ւ է սառնարանի սառեցման խցիկը դրված վերևում։
5. Ինչո՞ւ կրկնակի ապակիով պատուհանն ավելի լավ է մեկուսացնում, քան մեկ հաստ ապակին։
6. Ինչո՞ւ են տաք անապատներում մարդիկ կրում ազատ, սպիտակ հագուստ։
7. Ո՞ր ուղղությամբ կշարժվի կոնվեկցիոն հոսքը սենյակում, որտեղ հատակի մոտ տաք մարտկոց կա։
8. Նշիր թերմոսի երեք միջոցը և ամեն մեկի արգելափակած փոխանակման տեսակը։

### Պատասխաններ

1. Ճառագայթումը։
2. Պղինձ, ապակի, ջուր, բուրդ, օդ (բուրդն աշխատում է իր մեջ պահած օդի շնորհիվ)։
3. Սալիկն ոտքից ջերմությունը շատ ավելի արագ է տանում, քան գորգը։
4. Այնտեղ սառեցված օդն իջնում է և կոնվեկցիայով սառեցնում ամբողջ ծավալը։
5. Ապակիների միջև օդի (կամ գազի) բարակ շերտը վատ է հաղորդում՝ ավելի վատ, քան ապակին։
6. Սպիտակն արտացոլում է Արևի ճառագայթումը, իսկ ազատ հագուստը թույլ է տալիս կոնվեկցիային տանել քրտինքն ու ջերմությունը։
7. Վեր՝ մարտկոցի երկայնքով, առաստաղով, ներքև՝ հակառակ պատով, և հետ՝ հատակով։
8. Արծաթապատում՝ ճառագայթման դեմ, վակուում՝ ջերմահաղորդականության դեմ, օդի բացակայություն և խցան՝ կոնվեկցիայի դեմ։`,
        ru: `## Три способа передачи теплоты

| Вид | Что перемещается | Где происходит |
|---|---|---|
| Теплопроводность | энергия от частицы к частице; частицы остаются на месте | в основном твёрдые тела |
| Конвекция | перемещается само нагретое вещество | жидкости и газы |
| Излучение | электромагнитные волны | любая среда и вакуум |

## 1. Теплопроводность

Подержи железный стержень в пламени, и через некоторое время дальний конец станет горячим. Быстрые частицы у горячего конца сталкиваются с соседними и передают энергию вдоль стержня. Вещество не перемещается — только энергия.

Материалы различаются очень сильно:

- **Хорошие проводники**: серебро, медь, алюминий, железо. В металле свободные электроны переносят энергию очень быстро.
- **Плохие проводники (изоляторы)**: дерево, стекло, пластмасса, кирпич.
- **Очень плохие**: жидкости (кроме расплавленных металлов), газы и особенно пористые материалы — мех, шерсть, пух, пенопласт, снег. Они удерживают воздух, а воздух проводит плохо.

Поэтому металлическая ложка в чае жжёт пальцы, а деревянная нет; поэтому шуба греет (она держит *твою* теплоту внутри, а не вырабатывает её); поэтому растения под снегом переживают морозы.

Вакуум не проводит теплоту вовсе: нет частиц — значит, некому передавать энергию дальше.

## 2. Конвекция

Нагревай кастрюлю с водой снизу. Нижний слой расширяется, становится менее плотным и всплывает; холодная плотная вода опускается на его место. Возникает круговорот — **конвекционный поток**, и вся кастрюля нагревается.

Следствия:
- Радиатор ставят **внизу** комнаты, а кондиционер — **вверху**, потому что тёплый воздух поднимается.
- Форточка сверху выпускает горячий воздух, щель у пола впускает холодный.
- Ветер, морской бриз и гроза — это конвекция в атмосфере.

Конвекция невозможна в твёрдых телах (частицы не могут перемещаться) и в вакууме (нет вещества).

## 3. Излучение

Солнце греет Землю через $150$ миллионов километров вакуума. Ни теплопроводности, ни конвекции — только **тепловое излучение**, невидимые инфракрасные волны.

Излучает каждое тело, и чем оно горячее, тем сильнее. Тёмные шероховатые поверхности хорошо поглощают и испускают излучение, светлые блестящие — отражают. Поэтому летняя одежда светлая, радиатор часто красят в тёмный цвет, а топливный бак — в серебристый.

### Термос

Термос борется со всеми тремя сразу:
1. **Излучение** — двойные стенки посеребрены, чтобы отражать его назад.
2. **Теплопроводность** — из зазора между стенками выкачан воздух.
3. **Конвекция** — в зазоре нет воздуха, значит нет и потоков; плотная пробка не выпускает пар.

### Упражнения

1. Какой вид теплопередачи переносит энергию через вакуум?
2. Расставь по теплопроводности от лучшей к худшей: медь, вода, шерсть, стекло, воздух.
3. Почему плиточный пол кажется холоднее ковра при одной температуре?
4. Почему морозильную камеру помещают в верхней части холодильника?
5. Почему окно с двойным стеклом изолирует лучше одного толстого стекла?
6. Почему в жарких пустынях носят свободную белую одежду?
7. В каком направлении пойдёт конвекционный поток в комнате с горячим радиатором у пола?
8. Назови три средства термоса и какой вид передачи каждое из них перекрывает.

### Ответы

1. Излучение.
2. Медь, стекло, вода, шерсть, воздух (шерсть работает благодаря воздуху в ней).
3. Плитка отводит теплоту от ступни намного быстрее, чем ковёр.
4. Охлаждённый там воздух опускается и конвекцией охлаждает весь объём.
5. Тонкий слой воздуха (или газа) между стёклами проводит хуже, чем стекло.
6. Белое отражает излучение Солнца, а свободная одежда позволяет конвекции уносить пот и теплоту.
7. Вверх вдоль радиатора, по потолку, вниз по противоположной стене и обратно по полу.
8. Серебрение — против излучения, вакуум — против теплопроводности, отсутствие воздуха и пробка — против конвекции.`,
      },
      [
        q(t("Convection is impossible", "Կոնվեկցիան անհնար է", "Конвекция невозможна"), [
          t("in a gas", "գազում", "в газе"),
          t("in a liquid", "հեղուկում", "в жидкости"),
          t("in a solid and in vacuum", "պինդ մարմնում և վակուումում", "в твёрдом теле и в вакууме"),
        ], 2),
        q(t("A fur coat keeps you warm because", "Մորթե վերարկուն տաք է պահում, քանի որ", "Шуба греет, потому что"), [
          t("it produces heat", "նա ջերմություն է արտադրում", "она вырабатывает теплоту"),
          t("the air trapped in the fur conducts heat badly", "մորթու մեջ պահված օդը վատ է ջերմություն հաղորդում", "воздух в мехе плохо проводит теплоту"),
          t("fur radiates strongly", "մորթին ուժեղ է ճառագայթում", "мех сильно излучает"),
        ], 1),
        q(t("Energy from the Sun reaches the Earth by", "Արևի էներգիան Երկիր է հասնում", "Энергия Солнца доходит до Земли"), [
          t("radiation", "ճառագայթմամբ", "излучением"),
          t("convection", "կոնվեկցիայով", "конвекцией"),
          t("conduction", "ջերմահաղորդականությամբ", "теплопроводностью"),
        ], 0),
        q(t("The best heat conductor in this list is", "Այս ցանկում լավագույն ջերմահաղորդիչն է", "Лучший проводник теплоты в этом списке —"), [
          t("water", "ջուրը", "вода"),
          t("copper", "պղինձը", "медь"),
          t("wool", "բուրդը", "шерсть"),
        ], 1),
        q(t("A radiator is placed low in a room because", "Մարտկոցը դրվում է սենյակի ներքևում, քանի որ", "Радиатор ставят внизу комнаты, потому что"), [
          t("it is easier to install there", "այնտեղ ավելի հեշտ է տեղադրել", "так проще установить"),
          t("warm air rises and cold air sinks", "տաք օդը բարձրանում է, սառը՝ իջնում", "тёплый воздух поднимается, а холодный опускается"),
          t("radiation goes only upwards", "ճառագայթումը գնում է միայն վերև", "излучение идёт только вверх"),
        ], 1),
        q(t("The walls of a vacuum flask are silvered in order to", "Թերմոսի պատերն արծաթապատված են, որպեսզի", "Стенки термоса посеребрены, чтобы"), [
          t("look beautiful", "գեղեցիկ տեսք ունենան", "красиво выглядеть"),
          t("conduct heat better", "ավելի լավ ջերմություն հաղորդեն", "лучше проводить теплоту"),
          t("reflect thermal radiation back", "հետ արտացոլեն ջերմային ճառագայթումը", "отражать тепловое излучение назад"),
        ], 2),
      ],
    ),
    lesson(
      "specific-heat",
      ["Quantity of heat; specific heat capacity", "Ջերմաքանակ, տեսակարար ջերմունակություն", "Количество теплоты; удельная теплоёмкость"],
      {
        en: ["Use the formula Q = cm(t₂ - t₁)", "Read a table of specific heat capacities and explain its meaning", "Solve problems on heating and cooling, including finding c, m or \Δ t"],
        hy: ["Կիրառել Q = cm(t₂ - t₁) բանաձևը", "Կարդալ տեսակարար ջերմունակությունների աղյուսակը և բացատրել նրա իմաստը", "Լուծել տաքացման և սառեցման խնդիրներ՝ ներառյալ c-ի, m-ի կամ \Δ t-ի գտնելը"],
        ru: ["Применять формулу Q = cm(t₂ - t₁)", "Читать таблицу удельных теплоёмкостей и объяснять её смысл", "Решать задачи на нагревание и охлаждение, в том числе находить c, m или \Δ t"],
      },
      {
        en: `## How much heat?

Energy passed by heat transfer is the **quantity of heat** $Q$, measured in joules (J). Experiments show that to heat a body, $Q$ must be larger when

- the mass $m$ is larger (twice the water, twice the heat),
- the change of temperature $\\Delta t = t_2 - t_1$ is larger,
- the substance is "harder to heat".

The third factor is described by the **specific heat capacity** $c$ of the substance: the quantity of heat needed to raise the temperature of $1$ kg of it by $1\\ ^\\circ$C.

$$Q = c\\,m\\,(t_2 - t_1)$$

The unit of $c$ is $\\dfrac{\\text{J}}{\\text{kg}\\cdot{}^\\circ\\text{C}}$.

| Substance | $c$, J/(kg·$^\\circ$C) |
|---|---|
| Water | $4200$ |
| Ice | $2100$ |
| Air | $1000$ |
| Aluminium | $920$ |
| Iron, steel | $460$ |
| Copper | $380$ |
| Lead | $140$ |

Water has a remarkably large $c$. That is why it is used in heating systems and car radiators, and why the sea warms and cools much more slowly than the land.

If $t_2 > t_1$ the body is heated and $Q > 0$ (it receives heat). If $t_2 < t_1$ the body cools and $Q < 0$: it gives the same amount away.

## Worked example 1

> How much heat is needed to heat $2$ kg of water from $20\\ ^\\circ$C to $100\\ ^\\circ$C?

$$Q = 4200 \\cdot 2 \\cdot (100 - 20) = 4200 \\cdot 2 \\cdot 80 = 672\\,000\\ \\text{J} = 672\\ \\text{kJ}$$

## Worked example 2

> A $0.5$ kg iron part cooled from $500\\ ^\\circ$C to $20\\ ^\\circ$C. How much heat did it give off?

$$Q = 460 \\cdot 0.5 \\cdot (500 - 20) = 460 \\cdot 0.5 \\cdot 480 = 110\\,400\\ \\text{J} \\approx 110\\ \\text{kJ}$$

## Worked example 3 (finding the substance)

> $300$ kJ heated $4$ kg of a metal by $200\\ ^\\circ$C. Which metal is it?

$$c = \\frac{Q}{m\\,\\Delta t} = \\frac{300\\,000}{4 \\cdot 200} = 375 \\approx 380\\ \\frac{\\text{J}}{\\text{kg}\\cdot{}^\\circ\\text{C}}$$

It is copper.

## The equation of heat balance

In a calorimeter (a vessel that loses almost no heat) the heat given off by the hot body equals the heat taken in by the cold one:

$$Q_{\\text{given}} = Q_{\\text{taken}}$$

> $1$ kg of water at $80\\ ^\\circ$C is mixed with $1$ kg at $20\\ ^\\circ$C. Find the final temperature $t$.

$$4200 \\cdot 1 \\cdot (80 - t) = 4200 \\cdot 1 \\cdot (t - 20) \\Rightarrow 80 - t = t - 20 \\Rightarrow t = 50\\ ^\\circ\\text{C}$$

### Exercises

1. How much heat is needed to heat $5$ kg of water by $10\\ ^\\circ$C?
2. How much heat does $200$ g of iron give off when it cools from $100\\ ^\\circ$C to $25\\ ^\\circ$C?
3. $84$ kJ heated $1$ kg of water. By how many degrees?
4. Which needs more heat: heating $1$ kg of water by $1\\ ^\\circ$C, or $1$ kg of lead by $20\\ ^\\circ$C?
5. $46$ kJ heated $2$ kg of a metal by $50\\ ^\\circ$C. Name the metal.
6. A $3$ kg aluminium pan with $2$ kg of water in it is heated from $20\\ ^\\circ$C to $70\\ ^\\circ$C. Find the total heat.
7. $2$ kg of water at $90\\ ^\\circ$C is mixed with $3$ kg of water at $20\\ ^\\circ$C. Find the final temperature.
8. Why does sand on a beach become much hotter than the sea water under the same Sun?

### Answers

1. $Q = 4200 \\cdot 5 \\cdot 10 = 210$ kJ.
2. $Q = 460 \\cdot 0.2 \\cdot 75 = 6900$ J $= 6.9$ kJ.
3. $\\Delta t = 84\\,000 / (4200 \\cdot 1) = 20\\ ^\\circ$C.
4. Water: $4200$ J against $140 \\cdot 20 = 2800$ J.
5. $c = 46\\,000/(2 \\cdot 50) = 460$ J/(kg·$^\\circ$C) — iron.
6. $Q = 920 \\cdot 3 \\cdot 50 + 4200 \\cdot 2 \\cdot 50 = 138\\,000 + 420\\,000 = 558$ kJ.
7. $2(90 - t) = 3(t - 20) \\Rightarrow 180 - 2t = 3t - 60 \\Rightarrow t = 48\\ ^\\circ$C.
8. The specific heat capacity of sand is about five times smaller, so the same heat raises its temperature far more.`,
        hy: `## Որքա՞ն ջերմություն

Ջերմափոխանակմամբ փոխանցված էներգիան **ջերմաքանակն** է՝ $Q$, չափվում է ջոուլներով (Ջ)։ Փորձերը ցույց են տալիս, որ մարմինը տաքացնելու համար $Q$-ն պետք է ավելի մեծ լինի, երբ

- զանգվածը՝ $m$-ը, ավելի մեծ է (երկու անգամ շատ ջուր՝ երկու անգամ շատ ջերմություն),
- ջերմաստիճանի փոփոխությունը՝ $\\Delta t = t_2 - t_1$-ը, ավելի մեծ է,
- նյութը «ավելի դժվար է տաքանում»։

Երրորդ գործոնը նկարագրում է նյութի **տեսակարար ջերմունակությունը** $c$՝ ջերմաքանակը, որը պետք է նրա $1$ կգ-ի ջերմաստիճանը $1\\ ^\\circ$C-ով բարձրացնելու համար։

$$Q = c\\,m\\,(t_2 - t_1)$$

$c$-ի միավորը $\\dfrac{\\text{Ջ}}{\\text{կգ}\\cdot{}^\\circ\\text{C}}$ է։

| Նյութ | $c$, Ջ/(կգ·$^\\circ$C) |
|---|---|
| Ջուր | $4200$ |
| Սառույց | $2100$ |
| Օդ | $1000$ |
| Ալյումին | $920$ |
| Երկաթ, պողպատ | $460$ |
| Պղինձ | $380$ |
| Կապար | $140$ |

Ջուրն ունի զարմանալիորեն մեծ $c$։ Ահա թե ինչու է այն օգտագործվում ջեռուցման համակարգերում և ավտոմեքենայի ռադիատորներում, և ինչու ծովը ցամաքից շատ ավելի դանդաղ է տաքանում ու սառչում։

Եթե $t_2 > t_1$, մարմինը տաքանում է և $Q > 0$ (ստանում է ջերմություն)։ Եթե $t_2 < t_1$, մարմինը սառչում է և $Q < 0$՝ նույնքան ջերմություն տալիս է։

## Լուծված օրինակ 1

> Որքա՞ն ջերմություն է պետք $2$ կգ ջուրը $20\\ ^\\circ$C-ից $100\\ ^\\circ$C տաքացնելու համար։

$$Q = 4200 \\cdot 2 \\cdot (100 - 20) = 4200 \\cdot 2 \\cdot 80 = 672\\,000\\ \\text{Ջ} = 672\\ \\text{կՋ}$$

## Լուծված օրինակ 2

> $0{,}5$ կգ երկաթե դետալը սառել է $500\\ ^\\circ$C-ից մինչև $20\\ ^\\circ$C։ Որքա՞ն ջերմություն է տվել։

$$Q = 460 \\cdot 0{,}5 \\cdot (500 - 20) = 460 \\cdot 0{,}5 \\cdot 480 = 110\\,400\\ \\text{Ջ} \\approx 110\\ \\text{կՋ}$$

## Լուծված օրինակ 3 (նյութը գտնելը)

> $300$ կՋ-ը $4$ կգ մետաղը տաքացրել է $200\\ ^\\circ$C-ով։ Ո՞ր մետաղն է։

$$c = \\frac{Q}{m\\,\\Delta t} = \\frac{300\\,000}{4 \\cdot 200} = 375 \\approx 380\\ \\frac{\\text{Ջ}}{\\text{կգ}\\cdot{}^\\circ\\text{C}}$$

Դա պղինձն է։

## Ջերմային հաշվեկցության հավասարում

Կալորիմետրում (անոթ, որը գրեթե ջերմություն չի կորցնում) տաք մարմնի տված ջերմությունը հավասար է սառը մարմնի ստացած ջերմությանը՝

$$Q_{\\text{տված}} = Q_{\\text{ստացված}}$$

> $80\\ ^\\circ$C-ի $1$ կգ ջուրը խառնում են $20\\ ^\\circ$C-ի $1$ կգ ջրի հետ։ Գտիր վերջնական $t$ ջերմաստիճանը։

$$4200 \\cdot 1 \\cdot (80 - t) = 4200 \\cdot 1 \\cdot (t - 20) \\Rightarrow 80 - t = t - 20 \\Rightarrow t = 50\\ ^\\circ\\text{C}$$

### Վարժություններ

1. Որքա՞ն ջերմություն է պետք $5$ կգ ջուրը $10\\ ^\\circ$C-ով տաքացնելու համար։
2. Որքա՞ն ջերմություն է տալիս $200$ գ երկաթը, երբ սառչում է $100\\ ^\\circ$C-ից մինչև $25\\ ^\\circ$C։
3. $84$ կՋ-ը տաքացրել է $1$ կգ ջուր։ Քանի՞ աստիճանով։
4. Ո՞րի համար ավելի շատ ջերմություն է պետք՝ $1$ կգ ջուրը $1\\ ^\\circ$C-ով, թե՞ $1$ կգ կապարը $20\\ ^\\circ$C-ով տաքացնելու։
5. $46$ կՋ-ը $2$ կգ մետաղը տաքացրել է $50\\ ^\\circ$C-ով։ Անվանիր մետաղը։
6. $3$ կգ ալյումինե կաթսան՝ $2$ կգ ջրով, տաքացվում է $20\\ ^\\circ$C-ից մինչև $70\\ ^\\circ$C։ Գտիր լրիվ ջերմաքանակը։
7. $90\\ ^\\circ$C-ի $2$ կգ ջուրը խառնում են $20\\ ^\\circ$C-ի $3$ կգ ջրի հետ։ Գտիր վերջնական ջերմաստիճանը։
8. Ինչո՞ւ է լողափի ավազը նույն արևի տակ շատ ավելի տաքանում, քան ծովի ջուրը։

### Պատասխաններ

1. $Q = 4200 \\cdot 5 \\cdot 10 = 210$ կՋ։
2. $Q = 460 \\cdot 0{,}2 \\cdot 75 = 6900$ Ջ $= 6{,}9$ կՋ։
3. $\\Delta t = 84\\,000 / (4200 \\cdot 1) = 20\\ ^\\circ$C։
4. Ջուրը՝ $4200$ Ջ՝ $140 \\cdot 20 = 2800$ Ջ-ի դիմաց։
5. $c = 46\\,000/(2 \\cdot 50) = 460$ Ջ/(կգ·$^\\circ$C)՝ երկաթ։
6. $Q = 920 \\cdot 3 \\cdot 50 + 4200 \\cdot 2 \\cdot 50 = 138\\,000 + 420\\,000 = 558$ կՋ։
7. $2(90 - t) = 3(t - 20) \\Rightarrow 180 - 2t = 3t - 60 \\Rightarrow t = 48\\ ^\\circ$C։
8. Ավազի տեսակարար ջերմունակությունը մոտ հինգ անգամ փոքր է, ուստի նույն ջերմությունը նրա ջերմաստիճանը շատ ավելի է բարձրացնում։`,
        ru: `## Сколько теплоты?

Энергия, переданная теплопередачей, — это **количество теплоты** $Q$, измеряемое в джоулях (Дж). Опыты показывают, что для нагревания тела $Q$ должно быть больше, когда

- масса $m$ больше (вдвое больше воды — вдвое больше теплоты),
- изменение температуры $\\Delta t = t_2 - t_1$ больше,
- вещество «труднее нагреть».

Третий фактор описывает **удельная теплоёмкость** $c$ вещества: количество теплоты, нужное, чтобы нагреть $1$ кг этого вещества на $1\\ ^\\circ$C.

$$Q = c\\,m\\,(t_2 - t_1)$$

Единица $c$ — $\\dfrac{\\text{Дж}}{\\text{кг}\\cdot{}^\\circ\\text{C}}$.

| Вещество | $c$, Дж/(кг·$^\\circ$C) |
|---|---|
| Вода | $4200$ |
| Лёд | $2100$ |
| Воздух | $1000$ |
| Алюминий | $920$ |
| Железо, сталь | $460$ |
| Медь | $380$ |
| Свинец | $140$ |

У воды удивительно большая $c$. Поэтому её используют в системах отопления и автомобильных радиаторах, и поэтому море нагревается и остывает намного медленнее суши.

Если $t_2 > t_1$, тело нагревается и $Q > 0$ (получает теплоту). Если $t_2 < t_1$, тело остывает и $Q < 0$: столько же теплоты оно отдаёт.

## Разобранный пример 1

> Сколько теплоты нужно, чтобы нагреть $2$ кг воды от $20\\ ^\\circ$C до $100\\ ^\\circ$C?

$$Q = 4200 \\cdot 2 \\cdot (100 - 20) = 4200 \\cdot 2 \\cdot 80 = 672\\,000\\ \\text{Дж} = 672\\ \\text{кДж}$$

## Разобранный пример 2

> Железная деталь массой $0{,}5$ кг остыла от $500\\ ^\\circ$C до $20\\ ^\\circ$C. Сколько теплоты она отдала?

$$Q = 460 \\cdot 0{,}5 \\cdot (500 - 20) = 460 \\cdot 0{,}5 \\cdot 480 = 110\\,400\\ \\text{Дж} \\approx 110\\ \\text{кДж}$$

## Разобранный пример 3 (найти вещество)

> $300$ кДж нагрели $4$ кг металла на $200\\ ^\\circ$C. Какой это металл?

$$c = \\frac{Q}{m\\,\\Delta t} = \\frac{300\\,000}{4 \\cdot 200} = 375 \\approx 380\\ \\frac{\\text{Дж}}{\\text{кг}\\cdot{}^\\circ\\text{C}}$$

Это медь.

## Уравнение теплового баланса

В калориметре (сосуде, почти не теряющем теплоту) теплота, отданная горячим телом, равна теплоте, полученной холодным:

$$Q_{\\text{отд}} = Q_{\\text{получ}}$$

> $1$ кг воды при $80\\ ^\\circ$C смешали с $1$ кг при $20\\ ^\\circ$C. Найди конечную температуру $t$.

$$4200 \\cdot 1 \\cdot (80 - t) = 4200 \\cdot 1 \\cdot (t - 20) \\Rightarrow 80 - t = t - 20 \\Rightarrow t = 50\\ ^\\circ\\text{C}$$

### Упражнения

1. Сколько теплоты нужно, чтобы нагреть $5$ кг воды на $10\\ ^\\circ$C?
2. Сколько теплоты отдаёт $200$ г железа при остывании от $100\\ ^\\circ$C до $25\\ ^\\circ$C?
3. $84$ кДж нагрели $1$ кг воды. На сколько градусов?
4. Что требует больше теплоты: нагреть $1$ кг воды на $1\\ ^\\circ$C или $1$ кг свинца на $20\\ ^\\circ$C?
5. $46$ кДж нагрели $2$ кг металла на $50\\ ^\\circ$C. Назови металл.
6. Алюминиевую кастрюлю массой $3$ кг с $2$ кг воды нагревают от $20\\ ^\\circ$C до $70\\ ^\\circ$C. Найди полное количество теплоты.
7. $2$ кг воды при $90\\ ^\\circ$C смешали с $3$ кг воды при $20\\ ^\\circ$C. Найди конечную температуру.
8. Почему песок на пляже нагревается намного сильнее морской воды под тем же солнцем?

### Ответы

1. $Q = 4200 \\cdot 5 \\cdot 10 = 210$ кДж.
2. $Q = 460 \\cdot 0{,}2 \\cdot 75 = 6900$ Дж $= 6{,}9$ кДж.
3. $\\Delta t = 84\\,000 / (4200 \\cdot 1) = 20\\ ^\\circ$C.
4. Вода: $4200$ Дж против $140 \\cdot 20 = 2800$ Дж.
5. $c = 46\\,000/(2 \\cdot 50) = 460$ Дж/(кг·$^\\circ$C) — железо.
6. $Q = 920 \\cdot 3 \\cdot 50 + 4200 \\cdot 2 \\cdot 50 = 138\\,000 + 420\\,000 = 558$ кДж.
7. $2(90 - t) = 3(t - 20) \\Rightarrow 180 - 2t = 3t - 60 \\Rightarrow t = 48\\ ^\\circ$C.
8. Удельная теплоёмкость песка примерно в пять раз меньше, поэтому та же теплота поднимает его температуру гораздо сильнее.`,
      },
      [
        q(t("The formula for the heat of heating is", "Տաքացման ջերմաքանակի բանաձևն է", "Формула количества теплоты при нагревании —"), [
          t("Q = cm(t₂ - t₁)", "Q = cm(t₂ - t₁)", "Q = cm(t₂ - t₁)"),
          t("Q = mgh", "Q = mgh", "Q = mgh"),
          t("Q = m/c", "Q = m/c", "Q = m/c"),
        ], 0),
        q(t("The specific heat capacity of water is", "Ջրի տեսակարար ջերմունակությունը", "Удельная теплоёмкость воды равна"), [
          t("460 J/(kg·°C)", "460 Ջ/(կգ·°C)", "460 Дж/(кг·°C)"),
          t("4200 J/(kg·°C)", "4200 Ջ/(կգ·°C)", "4200 Дж/(кг·°C)"),
          t("140 J/(kg·°C)", "140 Ջ/(կգ·°C)", "140 Дж/(кг·°C)"),
        ], 1),
        q(t("To heat 1 kg of water by 20 °C you need", "1 կգ ջուրը 20 °C-ով տաքացնելու համար պետք է", "Чтобы нагреть 1 кг воды на 20 °C, нужно"), [
          t("210 kJ", "210 կՋ", "210 кДж"),
          t("42 kJ", "42 կՋ", "42 кДж"),
          t("84 kJ", "84 կՋ", "84 кДж"),
        ], 2),
        q(t("1 kg of water and 1 kg of iron receive equal quantities of heat. Which warms more?", "1 կգ ջուրն ու 1 կգ երկաթը ստանում են հավասար ջերմաքանակներ։ Ո՞րն ավելի շատ կտաքանա", "1 кг воды и 1 кг железа получают равные количества теплоты. Что нагреется сильнее?"), [
          t("iron", "երկաթը", "железо"),
          t("water", "ջուրը", "вода"),
          t("they warm equally", "հավասար կտաքանան", "нагреются одинаково"),
        ], 0),
        q(t("1 kg of water at 60 °C is mixed with 1 kg at 20 °C. The final temperature is", "60 °C-ի 1 կգ ջուրը խառնում են 20 °C-ի 1 կգ-ի հետ։ Վերջնական ջերմաստիճանը", "1 кг воды при 60 °C смешали с 1 кг при 20 °C. Конечная температура —"), [
          t("30 °C", "30 °C", "30 °C"),
          t("40 °C", "40 °C", "40 °C"),
          t("50 °C", "50 °C", "50 °C"),
        ], 1),
        q(t("A body gives off heat when", "Մարմինը ջերմություն տալիս է, երբ", "Тело отдаёт теплоту, когда"), [
          t("its mass grows", "նրա զանգվածը մեծանում է", "его масса растёт"),
          t("its temperature rises", "նրա ջերմաստիճանը բարձրանում է", "его температура растёт"),
          t("its temperature falls", "նրա ջերմաստիճանը նվազում է", "его температура падает"),
        ], 2),
      ],
    ),
    lesson(
      "fuel-energy",
      ["Energy of fuel; conservation of energy in thermal processes", "Վառելիքի էներգիա, էներգիայի պահպանում", "Энергия топлива; закон сохранения энергии в тепловых процессах"],
      {
        en: ["Use the formula Q = qm for the heat of combustion", "Compare fuels by specific heat of combustion", "Apply conservation of energy to a stove, a kettle and a falling body"],
        hy: ["Կիրառել Q = qm բանաձևը՝ վառելիքի այրման ջերմության համար", "Համեմատել վառելիքները տեսակարար այրման ջերմությամբ", "Կիրառել էներգիայի պահպանումը վառարանի, թեյնիկի և ընկնող մարմնի համար"],
        ru: ["Применять формулу Q = qm для теплоты сгорания", "Сравнивать топлива по удельной теплоте сгорания", "Применять закон сохранения энергии к печи, чайнику и падающему телу"],
      },
      {
        en: `## Where the heat comes from

Burning is a chemical reaction: molecules of fuel join with oxygen, and the new molecules have less internal energy than the old ones. The difference is released as heat.

The **specific heat of combustion** $q$ of a fuel is the quantity of heat released when $1$ kg of it burns completely.

$$Q = q\\,m$$

The unit of $q$ is J/kg. Fuels are very different:

| Fuel | $q$, MJ/kg |
|---|---|
| Dry wood | $10$ |
| Coal | $27$ |
| Alcohol | $27$ |
| Petrol | $46$ |
| Natural gas | $44$ |
| Hydrogen | $120$ |

Hydrogen releases the most heat per kilogram, and its only product is water — one reason engineers study hydrogen engines.

## Worked example 1

> How much heat is released by burning $200$ g of petrol?

$$Q = q m = 46\\,000\\,000 \\cdot 0.2 = 9\\,200\\,000\\ \\text{J} = 9.2\\ \\text{MJ}$$

## Worked example 2 (two formulas in one problem)

> How much dry wood must burn to heat $20$ kg of water from $15\\ ^\\circ$C to $100\\ ^\\circ$C, if all the heat went to the water?

Heat needed: $Q = 4200 \\cdot 20 \\cdot 85 = 7\\,140\\,000$ J.

Mass of wood: $m = \\dfrac{Q}{q} = \\dfrac{7\\,140\\,000}{10\\,000\\,000} = 0.714$ kg $\\approx 714$ g.

In reality a fire gives much of its heat to the air, so you would need several times more wood. This loss is measured by **efficiency**, which you will meet in the lesson on heat engines.

## Conservation of energy in thermal processes

The law of conservation of energy holds for *all* processes, mechanical and thermal together:

> In a closed system energy does not appear and does not disappear; it only passes from one body to another and changes form.

Examples:
- A hammer strikes an anvil: kinetic energy → internal energy of hammer and anvil.
- A kettle on gas: chemical energy of gas → internal energy of water (and of the air around).
- A lead ball falls $20$ m onto sand: its potential energy $mgh$ becomes internal energy, and the temperature rises by $\\Delta t = \\dfrac{gh}{c} = \\dfrac{10 \\cdot 20}{140} \\approx 1.4\\ ^\\circ$C.

Notice: the mass cancels in the last example, so the rise does not depend on the size of the ball.

### Exercises

1. How much heat is released by burning $3$ kg of coal?
2. How much natural gas must burn to release $88$ MJ?
3. Which gives more heat: $1$ kg of wood or $0.5$ kg of petrol?
4. $4$ kg of water is heated from $20\\ ^\\circ$C to $100\\ ^\\circ$C on a gas stove. How much gas is needed if all the heat reaches the water?
5. A car burns $7$ kg of petrol per $100$ km. How much energy is that?
6. A $2$ kg lead ball falls from $14$ m and stops. By how much does its temperature rise if all the energy stays in the ball?
7. Why does a bicycle brake pad get hot on a long descent?
8. Give two examples of energy changing from mechanical to internal, and one of the reverse.

### Answers

1. $Q = 27 \\cdot 10^6 \\cdot 3 = 81$ MJ.
2. $m = 88 \\cdot 10^6 / (44 \\cdot 10^6) = 2$ kg.
3. Petrol: $0.5 \\cdot 46 = 23$ MJ against $10$ MJ.
4. $Q = 4200 \\cdot 4 \\cdot 80 = 1\\,344\\,000$ J; $m = 1\\,344\\,000/(44 \\cdot 10^6) \\approx 0.031$ kg $= 31$ g.
5. $Q = 46 \\cdot 10^6 \\cdot 7 = 322$ MJ.
6. $\\Delta t = gh/c = 10 \\cdot 14/140 = 1\\ ^\\circ$C.
7. The work of friction turns the kinetic and potential energy of the rider into internal energy of the pad.
8. Mechanical → internal: sawing wood, a falling stone. Internal → mechanical: steam pushing a piston (or hot gas launching a cork).`,
        hy: `## Որտեղից է գալիս ջերմությունը

Այրումը քիմիական ռեակցիա է՝ վառելիքի մոլեկուլները միանում են թթվածնի հետ, և նոր մոլեկուլներն ունեն ավելի քիչ ներքին էներգիա, քան հինը։ Տարբերությունն արձակվում է որպես ջերմություն։

Վառելիքի **տեսակարար այրման ջերմությունը** $q$ այն ջերմաքանակն է, որն արձակվում է նրա $1$ կգ-ի լրիվ այրման ժամանակ։

$$Q = q\\,m$$

$q$-ի միավորը Ջ/կգ է։ Վառելիքները շատ տարբեր են՝

| Վառելիք | $q$, ՄՋ/կգ |
|---|---|
| Չոր փայտ | $10$ |
| Ածուխ | $27$ |
| Սպիրտ | $27$ |
| Բենզին | $46$ |
| Բնական գազ | $44$ |
| Ջրածին | $120$ |

Ջրածինը մեկ կիլոգրամից ամենաշատ ջերմությունն է տալիս, և նրա միակ արդյունքը ջուրն է. սա ջրածնային շարժիչներն ուսումնասիրելու պատճառներից մեկն է։

## Լուծված օրինակ 1

> Որքա՞ն ջերմություն է արձակվում $200$ գ բենզին այրելիս։

$$Q = q m = 46\\,000\\,000 \\cdot 0{,}2 = 9\\,200\\,000\\ \\text{Ջ} = 9{,}2\\ \\text{ՄՋ}$$

## Լուծված օրինակ 2 (երկու բանաձև մեկ խնդրում)

> Որքա՞ն չոր փայտ պետք է այրվի $20$ կգ ջուրը $15\\ ^\\circ$C-ից $100\\ ^\\circ$C տաքացնելու համար, եթե ամբողջ ջերմությունը գնացել է ջրին։

Պետք եղած ջերմությունը՝ $Q = 4200 \\cdot 20 \\cdot 85 = 7\\,140\\,000$ Ջ։

Փայտի զանգվածը՝ $m = \\dfrac{Q}{q} = \\dfrac{7\\,140\\,000}{10\\,000\\,000} = 0{,}714$ կգ $\\approx 714$ գ։

Իրականում կրակը ջերմության մեծ մասը տալիս է օդին, ուստի մի քանի անգամ ավելի շատ փայտ պետք կգա։ Այս կորուստը չափվում է **օգտակար գործողության գործակցով**, որին կհանդիպես ջերմային շարժիչների դասում։

## Էներգիայի պահպանումը ջերմային պրոցեսներում

Էներգիայի պահպանման օրենքը ճիշտ է *բոլոր* պրոցեսների համար՝ մեխանիկական և ջերմային միասին։

> Փակ համակարգում էներգիան չի առաջանում և չի անհետանում, այլ միայն անցնում է մեկ մարմնից մյուսին և փոխում ձևը։

Օրինակներ՝
- Մրճակը հարվածում է կռանին՝ կինետիկ էներգիան → մրճակի և կռանի ներքին էներգիա։
- Թեյնիկը գազի վրա՝ գազի քիմիական էներգիան → ջրի (և շրջապատող օդի) ներքին էներգիա։
- Կապարե գնդիկն ընկնում է $20$ մ ավազի վրա՝ նրա $mgh$ պոտենցիալ էներգիան դառնում է ներքին, և ջերմաստիճանը բարձրանում է $\\Delta t = \\dfrac{gh}{c} = \\dfrac{10 \\cdot 20}{140} \\approx 1{,}4\\ ^\\circ$C-ով։

Նկատիր՝ վերջին օրինակում զանգվածը կրճատվում է, ուստի բարձրացումը կախված չէ գնդիկի մեծությունից։

### Վարժություններ

1. Որքա՞ն ջերմություն է արձակվում $3$ կգ ածուխ այրելիս։
2. Որքա՞ն բնական գազ պետք է այրվի $88$ ՄՋ արձակելու համար։
3. Ո՞րն ավելի շատ ջերմություն կտա՝ $1$ կգ փայտը, թե՞ $0{,}5$ կգ բենզինը։
4. $4$ կգ ջուրը գազօջախի վրա տաքացվում է $20\\ ^\\circ$C-ից մինչև $100\\ ^\\circ$C։ Որքա՞ն գազ է պետք, եթե ամբողջ ջերմությունը հասնում է ջրին։
5. Մեքենան $100$ կմ-ի համար այրում է $7$ կգ բենզին։ Որքա՞ն էներգիա է դա։
6. $2$ կգ կապարե գնդիկն ընկնում է $14$ մ բարձրությունից և կանգ առնում։ Որքա՞նով կբարձրանա նրա ջերմաստիճանը, եթե ամբողջ էներգիան մնա գնդիկում։
7. Ինչո՞ւ է հեծանիվի արգելակի կոճղակը տաքանում երկար իջնելիս։
8. Բեր երկու օրինակ, որտեղ էներգիան մեխանիկականից դառնում է ներքին, և մեկը՝ հակառակը։

### Պատասխաններ

1. $Q = 27 \\cdot 10^6 \\cdot 3 = 81$ ՄՋ։
2. $m = 88 \\cdot 10^6 / (44 \\cdot 10^6) = 2$ կգ։
3. Բենզինը՝ $0{,}5 \\cdot 46 = 23$ ՄՋ՝ $10$ ՄՋ-ի դիմաց։
4. $Q = 4200 \\cdot 4 \\cdot 80 = 1\\,344\\,000$ Ջ, $m = 1\\,344\\,000/(44 \\cdot 10^6) \\approx 0{,}031$ կգ $= 31$ գ։
5. $Q = 46 \\cdot 10^6 \\cdot 7 = 322$ ՄՋ։
6. $\\Delta t = gh/c = 10 \\cdot 14/140 = 1\\ ^\\circ$C։
7. Շփման աշխատանքը հեծանվորդի կինետիկ ու պոտենցիալ էներգիան դարձնում է կոճղակի ներքին էներգիա։
8. Մեխանիկականից ներքին՝ փայտ սղոցելը, ընկնող քարը։ Ներքինից մեխանիկական՝ գոլորշին հրում է մխոցը (կամ տաք գազը դուրս է նետում խցանը)։`,
        ru: `## Откуда берётся теплота

Горение — это химическая реакция: молекулы топлива соединяются с кислородом, и у новых молекул внутренняя энергия меньше, чем у прежних. Разница выделяется в виде теплоты.

**Удельная теплота сгорания** $q$ топлива — количество теплоты, выделяющееся при полном сгорании $1$ кг этого топлива.

$$Q = q\\,m$$

Единица $q$ — Дж/кг. Топлива очень разные:

| Топливо | $q$, МДж/кг |
|---|---|
| Сухие дрова | $10$ |
| Уголь | $27$ |
| Спирт | $27$ |
| Бензин | $46$ |
| Природный газ | $44$ |
| Водород | $120$ |

Водород даёт больше всего теплоты на килограмм, и его единственный продукт — вода; это одна из причин, по которым инженеры изучают водородные двигатели.

## Разобранный пример 1

> Сколько теплоты выделится при сгорании $200$ г бензина?

$$Q = q m = 46\\,000\\,000 \\cdot 0{,}2 = 9\\,200\\,000\\ \\text{Дж} = 9{,}2\\ \\text{МДж}$$

## Разобранный пример 2 (две формулы в одной задаче)

> Сколько сухих дров надо сжечь, чтобы нагреть $20$ кг воды от $15\\ ^\\circ$C до $100\\ ^\\circ$C, если вся теплота пошла воде?

Нужная теплота: $Q = 4200 \\cdot 20 \\cdot 85 = 7\\,140\\,000$ Дж.

Масса дров: $m = \\dfrac{Q}{q} = \\dfrac{7\\,140\\,000}{10\\,000\\,000} = 0{,}714$ кг $\\approx 714$ г.

На самом деле костёр отдаёт большую часть теплоты воздуху, поэтому дров понадобится в несколько раз больше. Эту потерю измеряют **КПД**, с которым ты встретишься в уроке о тепловых двигателях.

## Сохранение энергии в тепловых процессах

Закон сохранения энергии справедлив для *всех* процессов — механических и тепловых вместе:

> В замкнутой системе энергия не возникает и не исчезает; она лишь переходит от одного тела к другому и меняет форму.

Примеры:
- Молот бьёт по наковальне: кинетическая энергия → внутренняя энергия молота и наковальни.
- Чайник на газе: химическая энергия газа → внутренняя энергия воды (и окружающего воздуха).
- Свинцовый шар падает с $20$ м на песок: его потенциальная энергия $mgh$ переходит во внутреннюю, и температура растёт на $\\Delta t = \\dfrac{gh}{c} = \\dfrac{10 \\cdot 20}{140} \\approx 1{,}4\\ ^\\circ$C.

Заметь: в последнем примере масса сокращается, поэтому нагрев не зависит от размера шара.

### Упражнения

1. Сколько теплоты выделится при сгорании $3$ кг угля?
2. Сколько природного газа надо сжечь, чтобы выделить $88$ МДж?
3. Что даст больше теплоты: $1$ кг дров или $0{,}5$ кг бензина?
4. $4$ кг воды нагревают на газовой плите от $20\\ ^\\circ$C до $100\\ ^\\circ$C. Сколько нужно газа, если вся теплота доходит до воды?
5. Автомобиль сжигает $7$ кг бензина на $100$ км. Сколько это энергии?
6. Свинцовый шар массой $2$ кг падает с $14$ м и останавливается. На сколько вырастет его температура, если вся энергия останется в шаре?
7. Почему тормозная колодка велосипеда нагревается на длинном спуске?
8. Приведи два примера перехода энергии из механической во внутреннюю и один — обратного перехода.

### Ответы

1. $Q = 27 \\cdot 10^6 \\cdot 3 = 81$ МДж.
2. $m = 88 \\cdot 10^6 / (44 \\cdot 10^6) = 2$ кг.
3. Бензин: $0{,}5 \\cdot 46 = 23$ МДж против $10$ МДж.
4. $Q = 4200 \\cdot 4 \\cdot 80 = 1\\,344\\,000$ Дж; $m = 1\\,344\\,000/(44 \\cdot 10^6) \\approx 0{,}031$ кг $= 31$ г.
5. $Q = 46 \\cdot 10^6 \\cdot 7 = 322$ МДж.
6. $\\Delta t = gh/c = 10 \\cdot 14/140 = 1\\ ^\\circ$C.
7. Работа трения превращает кинетическую и потенциальную энергию велосипедиста во внутреннюю энергию колодки.
8. Механическая → внутренняя: пиление дерева, падающий камень. Внутренняя → механическая: пар толкает поршень (или горячий газ выбивает пробку).`,
      },
      [
        q(t("The specific heat of combustion is measured in", "Տեսակարար այրման ջերմությունը չափվում է", "Удельная теплота сгорания измеряется в"), [
          t("J/kg", "Ջ/կգ", "Дж/кг"),
          t("J/(kg·°C)", "Ջ/(կգ·°C)", "Дж/(кг·°C)"),
          t("J", "Ջ", "Дж"),
        ], 0),
        q(t("Burning 2 kg of coal (q = 27 MJ/kg) releases", "2 կգ ածուխ (q = 27 ՄՋ/կգ) այրելիս արձակվում է", "При сгорании 2 кг угля (q = 27 МДж/кг) выделяется"), [
          t("27 MJ", "27 ՄՋ", "27 МДж"),
          t("54 MJ", "54 ՄՋ", "54 МДж"),
          t("13.5 MJ", "13,5 ՄՋ", "13,5 МДж"),
        ], 1),
        q(t("The fuel with the largest specific heat of combustion is", "Ամենամեծ տեսակարար այրման ջերմություն ունեցող վառելիքն է", "Топливо с наибольшей удельной теплотой сгорания —"), [
          t("wood", "փայտը", "дрова"),
          t("coal", "ածուխը", "уголь"),
          t("hydrogen", "ջրածինը", "водород"),
        ], 2),
        q(t("The formula for the heat released by a burning fuel is", "Այրվող վառելիքի արձակած ջերմության բանաձևն է", "Формула теплоты, выделяемой сгорающим топливом, —"), [
          t("Q = qm", "Q = qm", "Q = qm"),
          t("Q = cmΔt", "Q = cmΔt", "Q = cmΔt"),
          t("Q = q/m", "Q = q/m", "Q = q/m"),
        ], 0),
        q(t("A stone falls and stops on the ground. The law of conservation of energy says that", "Քարն ընկնում է և կանգ առնում գետնին։ Էներգիայի պահպանման օրենքն ասում է, որ", "Камень падает и останавливается на земле. Закон сохранения энергии говорит, что"), [
          t("the energy disappeared", "էներգիան անհետացել է", "энергия исчезла"),
          t("the mechanical energy became internal energy", "մեխանիկական էներգիան դարձել է ներքին էներգիա", "механическая энергия стала внутренней"),
          t("the energy returned to the Sun", "էներգիան վերադարձել է Արևին", "энергия вернулась Солнцу"),
        ], 1),
        q(t("To release 44 MJ you must burn natural gas (q = 44 MJ/kg) of mass", "44 ՄՋ արձակելու համար պետք է այրել բնական գազ (q = 44 ՄՋ/կգ) զանգվածով", "Чтобы выделить 44 МДж, надо сжечь природного газа (q = 44 МДж/кг) массой"), [
          t("44 kg", "44 կգ", "44 кг"),
          t("10 kg", "10 կգ", "10 кг"),
          t("1 kg", "1 կգ", "1 кг"),
        ], 2),
      ],
    ),
    lesson(
      "melting-solidification",
      ["Melting and solidification", "Հալում և պնդացում", "Плавление и отвердевание"],
      {
        en: ["Describe melting and solidification in terms of the crystal lattice", "Read a melting graph and name its parts", "Use the formula Q = \λm"],
        hy: ["Նկարագրել հալումն ու պնդացումը բյուրեղավանդակի լեզվով", "Կարդալ հալման գրաֆիկը և անվանել նրա մասերը", "Կիրառել Q = \λm բանաձևը"],
        ru: ["Описывать плавление и отвердевание на языке кристаллической решётки", "Читать график плавления и называть его участки", "Применять формулу Q = \λm"],
      },
      {
        en: `## The melting point

Heat a piece of ice. Its temperature rises until it reaches $0\\ ^\\circ$C and then **stops**, although the flame keeps giving heat. The ice is melting. Only when the last crystal has melted does the temperature of the water start to rise again.

The temperature at which a crystalline solid melts is its **melting point**. The same substance **solidifies** at exactly the same temperature.

| Substance | Melting point, $^\\circ$C |
|---|---|
| Hydrogen | $-259$ |
| Mercury | $-39$ |
| Ice | $0$ |
| Tin | $232$ |
| Lead | $327$ |
| Aluminium | $660$ |
| Iron | $1539$ |
| Tungsten | $3420$ |

Mercury is liquid in a room but solid in Antarctic frost; tungsten is used for lamp filaments because it stays solid when white hot.

## Why the temperature stands still

In a crystal the particles sit in a lattice. To melt the body the lattice must be destroyed, and that takes energy — but this energy goes into the potential energy of the particles, not into their speed. So the internal energy grows while the temperature stays constant.

When the liquid solidifies the lattice forms again and exactly the same energy is given back to the surroundings.

## Specific latent heat of fusion

The **specific latent heat of fusion** $\\lambda$ is the quantity of heat needed to melt $1$ kg of a substance already at its melting point.

$$Q = \\lambda m$$

For ice $\\lambda = 340\\,000$ J/kg $= 3.4 \\cdot 10^5$ J/kg. Compare: the same $340$ kJ would heat $1$ kg of water by $81\\ ^\\circ$C. Melting ice is "expensive", which is why ice in a drink keeps it cold for a long time and why snow in spring melts slowly.

## The melting graph

A graph of temperature against time for ice taken out of a freezer has four parts:

| Part | What happens | Formula |
|---|---|---|
| rising | ice is heated to $0\\ ^\\circ$C | $Q = c_{\\text{ice}} m \\Delta t$ |
| horizontal | ice melts at $0\\ ^\\circ$C | $Q = \\lambda m$ |
| rising | water is heated | $Q = c_{\\text{water}} m \\Delta t$ |
| horizontal at $100\\ ^\\circ$C | water boils | (next lesson) |

## Worked example

> How much heat is needed to turn $2$ kg of ice at $-10\\ ^\\circ$C into water at $0\\ ^\\circ$C?

Heating the ice: $Q_1 = 2100 \\cdot 2 \\cdot 10 = 42\\,000$ J.
Melting it: $Q_2 = 340\\,000 \\cdot 2 = 680\\,000$ J.
Total: $Q = 722\\,000$ J $= 722$ kJ.

### Exercises

1. At what temperature does ice melt, and at what temperature does water freeze?
2. Why does the temperature not change while a body is melting?
3. How much heat melts $5$ kg of ice at $0\\ ^\\circ$C?
4. How much heat is needed to melt $0.5$ kg of lead already at $327\\ ^\\circ$C, if $\\lambda = 25\\,000$ J/kg?
5. Will tin melt in boiling water? Will mercury?
6. How much heat turns $1$ kg of ice at $-20\\ ^\\circ$C into water at $20\\ ^\\circ$C?
7. Why is ice better than cold water for cooling a drink?
8. Describe the parts of the graph of temperature against time for a piece of lead heated from $20\\ ^\\circ$C to $400\\ ^\\circ$C.

### Answers

1. Both at $0\\ ^\\circ$C.
2. The heat goes into destroying the crystal lattice, not into speeding up the particles.
3. $Q = 340\\,000 \\cdot 5 = 1\\,700\\,000$ J $= 1.7$ MJ.
4. $Q = 25\\,000 \\cdot 0.5 = 12\\,500$ J.
5. Tin melts at $232\\ ^\\circ$C, so no; mercury melts at $-39\\ ^\\circ$C, so it is already liquid.
6. $2100 \\cdot 1 \\cdot 20 + 340\\,000 + 4200 \\cdot 1 \\cdot 20 = 42\\,000 + 340\\,000 + 84\\,000 = 466$ kJ.
7. Melting ice absorbs $340$ kJ per kilogram without getting warmer.
8. Rising from $20\\ ^\\circ$C to $327\\ ^\\circ$C, horizontal at $327\\ ^\\circ$C while melting, then rising to $400\\ ^\\circ$C.`,
        hy: `## Հալման ջերմաստիճան

Տաքացրու սառույցի կտորը։ Նրա ջերմաստիճանը բարձրանում է, մինչև հասնում է $0\\ ^\\circ$C-ի, և հետո **կանգ առնում**, թեև բոցը շարունակում է ջերմություն տալ։ Սառույցը հալվում է։ Միայն երբ վերջին բյուրեղը հալվի, ջուրի ջերմաստիճանը նոր կսկսի նորից բարձրանալ։

Այն ջերմաստիճանը, որտեղ բյուրեղային պինդ մարմինը հալվում է, նրա **հալման ջերմաստիճանն** է։ Նույն նյութը **պնդանում** է ճիշտ նույն ջերմաստիճանում։

| Նյութ | Հալման ջերմաստիճան, $^\\circ$C |
|---|---|
| Ջրածին | $-259$ |
| Սնդիկ | $-39$ |
| Սառույց | $0$ |
| Անագ | $232$ |
| Կապար | $327$ |
| Ալյումին | $660$ |
| Երկաթ | $1539$ |
| Վոլֆրամ | $3420$ |

Սնդիկը սենյակում հեղուկ է, բայց Անտարկտիկայի ցրտին՝ պինդ, իսկ վոլֆրամն օգտագործվում է լամպի թելիկի համար, քանի որ սպիտակ շիկացած վիճակում էլ պինդ է մնում։

## Ինչու է ջերմաստիճանը տեղում կանգնում

Բյուրեղում մասնիկները նստած են վանդակում։ Մարմինը հալելու համար վանդակը պետք է քանդվի, իսկ դա էներգիա է պահանջում, բայց այս էներգիան գնում է մասնիկների պոտենցիալ էներգիային, ոչ թե նրանց արագությանը։ Ուստի ներքին էներգիան մեծանում է, իսկ ջերմաստիճանը մնում է անփոփոխ։

Երբ հեղուկը պնդանում է, վանդակը նորից առաջանում է, և ճիշտ նույն էներգիան հետ է տրվում շրջապատին։

## Հալման տեսակարար ջերմություն

**Հալման տեսակարար ջերմությունը** $\\lambda$ այն ջերմաքանակն է, որը պետք է հալման ջերմաստիճանում գտնվող նյութի $1$ կգ-ը հալելու համար։

$$Q = \\lambda m$$

Սառույցի համար $\\lambda = 340\\,000$ Ջ/կգ $= 3{,}4 \\cdot 10^5$ Ջ/կգ։ Համեմատիր՝ նույն $340$ կՋ-ը $1$ կգ ջուրը կտաքացնի $81\\ ^\\circ$C-ով։ Սառույցի հալումը «թանկ» է, ահա թե ինչու ըմպելիքի մեջ սառույցն երկար ժամանակ սառն է պահում, և ինչու գարնանը ձյունը դանդաղ է հալվում։

## Հալման գրաֆիկը

Սառնարանից հանված սառույցի ջերմաստիճան-ժամանակ գրաֆիկն ունի չորս մաս՝

| Մաս | Ինչ է կատարվում | Բանաձև |
|---|---|---|
| աճող | սառույցը տաքանում է մինչև $0\\ ^\\circ$C | $Q = c_{\\text{սառույց}} m \\Delta t$ |
| հորիզոնական | սառույցը հալվում է $0\\ ^\\circ$C-ում | $Q = \\lambda m$ |
| աճող | ջուրը տաքանում է | $Q = c_{\\text{ջուր}} m \\Delta t$ |
| հորիզոնական $100\\ ^\\circ$C-ում | ջուրն եռում է | (հաջորդ դասը) |

## Լուծված օրինակ

> Որքա՞ն ջերմություն է պետք $-10\\ ^\\circ$C-ի $2$ կգ սառույցը $0\\ ^\\circ$C ջուր դարձնելու համար։

Սառույցի տաքացումը՝ $Q_1 = 2100 \\cdot 2 \\cdot 10 = 42\\,000$ Ջ։
Հալումը՝ $Q_2 = 340\\,000 \\cdot 2 = 680\\,000$ Ջ։
Ընդամենը՝ $Q = 722\\,000$ Ջ $= 722$ կՋ։

### Վարժություններ

1. Ո՞ր ջերմաստիճանում է հալվում սառույցը և ո՞ր ջերմաստիճանում է սառչում ջուրը։
2. Ինչո՞ւ հալման ընթացքում ջերմաստիճանը չի փոխվում։
3. Որքա՞ն ջերմություն է հալեցնում $0\\ ^\\circ$C-ի $5$ կգ սառույցը։
4. Որքա՞ն ջերմություն է պետք $327\\ ^\\circ$C-ում գտնվող $0{,}5$ կգ կապարը հալելու համար, եթե $\\lambda = 25\\,000$ Ջ/կգ։
5. Անագը կհալվի՞ եռացող ջրում։ Իսկ սնդիկը։
6. Որքա՞ն ջերմություն է $-20\\ ^\\circ$C-ի $1$ կգ սառույցը դարձնում $20\\ ^\\circ$C ջուր։
7. Ինչո՞ւ է սառույցն ըմպելիքը սառեցնելու համար ավելի լավ, քան սառը ջուրը։
8. Նկարագրիր $20\\ ^\\circ$C-ից $400\\ ^\\circ$C տաքացվող կապարի կտորի ջերմաստիճան-ժամանակ գրաֆիկի մասերը։

### Պատասխաններ

1. Երկուսն էլ $0\\ ^\\circ$C-ում։
2. Ջերմությունը գնում է բյուրեղավանդակը քանդելուն, ոչ թե մասնիկներն արագացնելուն։
3. $Q = 340\\,000 \\cdot 5 = 1\\,700\\,000$ Ջ $= 1{,}7$ ՄՋ։
4. $Q = 25\\,000 \\cdot 0{,}5 = 12\\,500$ Ջ։
5. Անագը հալվում է $232\\ ^\\circ$C-ում, ուստի՝ ոչ, սնդիկը հալվում է $-39\\ ^\\circ$C-ում, ուստի արդեն հեղուկ է։
6. $2100 \\cdot 1 \\cdot 20 + 340\\,000 + 4200 \\cdot 1 \\cdot 20 = 42\\,000 + 340\\,000 + 84\\,000 = 466$ կՋ։
7. Հալվող սառույցը կիլոգրամից $340$ կՋ է կլանում՝ առանց տաքանալու։
8. Աճ $20\\ ^\\circ$C-ից $327\\ ^\\circ$C, հորիզոնական $327\\ ^\\circ$C-ում՝ հալման ընթացքում, հետո աճ մինչև $400\\ ^\\circ$C։`,
        ru: `## Температура плавления

Нагревай кусок льда. Его температура растёт, пока не дойдёт до $0\\ ^\\circ$C, и затем **останавливается**, хотя пламя продолжает давать теплоту. Лёд плавится. Только когда растает последний кристаллик, температура воды начнёт расти снова.

Температура, при которой плавится кристаллическое тело, — его **температура плавления**. То же вещество **отвердевает** точно при той же температуре.

| Вещество | Температура плавления, $^\\circ$C |
|---|---|
| Водород | $-259$ |
| Ртуть | $-39$ |
| Лёд | $0$ |
| Олово | $232$ |
| Свинец | $327$ |
| Алюминий | $660$ |
| Железо | $1539$ |
| Вольфрам | $3420$ |

Ртуть в комнате жидкая, а в антарктический мороз твёрдая; вольфрам идёт на нити лампочек, потому что остаётся твёрдым даже при белом калении.

## Почему температура стоит на месте

В кристалле частицы сидят в решётке. Чтобы расплавить тело, решётку нужно разрушить, а на это нужна энергия — но эта энергия идёт в потенциальную энергию частиц, а не в их скорость. Поэтому внутренняя энергия растёт, а температура не меняется.

Когда жидкость отвердевает, решётка собирается снова и точно такая же энергия возвращается окружающей среде.

## Удельная теплота плавления

**Удельная теплота плавления** $\\lambda$ — количество теплоты, нужное, чтобы расплавить $1$ кг вещества, уже нагретого до температуры плавления.

$$Q = \\lambda m$$

Для льда $\\lambda = 340\\,000$ Дж/кг $= 3{,}4 \\cdot 10^5$ Дж/кг. Сравни: те же $340$ кДж нагрели бы $1$ кг воды на $81\\ ^\\circ$C. Плавление льда «дорогое» — поэтому лёд в напитке долго держит холод, а снег весной тает медленно.

## График плавления

График температуры от времени для льда, вынутого из морозильника, имеет четыре участка:

| Участок | Что происходит | Формула |
|---|---|---|
| растущий | лёд нагревается до $0\\ ^\\circ$C | $Q = c_{\\text{лёд}} m \\Delta t$ |
| горизонтальный | лёд плавится при $0\\ ^\\circ$C | $Q = \\lambda m$ |
| растущий | вода нагревается | $Q = c_{\\text{вода}} m \\Delta t$ |
| горизонтальный при $100\\ ^\\circ$C | вода кипит | (следующий урок) |

## Разобранный пример

> Сколько теплоты нужно, чтобы превратить $2$ кг льда при $-10\\ ^\\circ$C в воду при $0\\ ^\\circ$C?

Нагревание льда: $Q_1 = 2100 \\cdot 2 \\cdot 10 = 42\\,000$ Дж.
Плавление: $Q_2 = 340\\,000 \\cdot 2 = 680\\,000$ Дж.
Всего: $Q = 722\\,000$ Дж $= 722$ кДж.

### Упражнения

1. При какой температуре плавится лёд и при какой замерзает вода?
2. Почему во время плавления температура не меняется?
3. Сколько теплоты расплавит $5$ кг льда при $0\\ ^\\circ$C?
4. Сколько теплоты нужно, чтобы расплавить $0{,}5$ кг свинца, уже нагретого до $327\\ ^\\circ$C, если $\\lambda = 25\\,000$ Дж/кг?
5. Расплавится ли олово в кипящей воде? А ртуть?
6. Сколько теплоты превратит $1$ кг льда при $-20\\ ^\\circ$C в воду при $20\\ ^\\circ$C?
7. Почему лёд охлаждает напиток лучше холодной воды?
8. Опиши участки графика температуры от времени для куска свинца, нагреваемого от $20\\ ^\\circ$C до $400\\ ^\\circ$C.

### Ответы

1. Оба при $0\\ ^\\circ$C.
2. Теплота идёт на разрушение кристаллической решётки, а не на ускорение частиц.
3. $Q = 340\\,000 \\cdot 5 = 1\\,700\\,000$ Дж $= 1{,}7$ МДж.
4. $Q = 25\\,000 \\cdot 0{,}5 = 12\\,500$ Дж.
5. Олово плавится при $232\\ ^\\circ$C — нет; ртуть плавится при $-39\\ ^\\circ$C, она уже жидкая.
6. $2100 \\cdot 1 \\cdot 20 + 340\\,000 + 4200 \\cdot 1 \\cdot 20 = 42\\,000 + 340\\,000 + 84\\,000 = 466$ кДж.
7. Тающий лёд поглощает $340$ кДж на килограмм, сам не нагреваясь.
8. Рост от $20\\ ^\\circ$C до $327\\ ^\\circ$C, горизонталь при $327\\ ^\\circ$C во время плавления, затем рост до $400\\ ^\\circ$C.`,
      },
      [
        q(t("While a body is melting, its temperature", "Հալման ընթացքում մարմնի ջերմաստիճանը", "Во время плавления температура тела"), [
          t("does not change", "չի փոխվում", "не меняется"),
          t("rises", "բարձրանում է", "растёт"),
          t("falls", "նվազում է", "падает"),
        ], 0),
        q(t("The specific latent heat of fusion of ice is", "Սառույցի հալման տեսակարար ջերմությունը", "Удельная теплота плавления льда равна"), [
          t("2100 J/kg", "2100 Ջ/կգ", "2100 Дж/кг"),
          t("340 000 J/kg", "340 000 Ջ/կգ", "340 000 Дж/кг"),
          t("4200 J/kg", "4200 Ջ/կգ", "4200 Дж/кг"),
        ], 1),
        q(t("Water freezes at the temperature", "Ջուրը սառչում է ջերմաստիճանում", "Вода замерзает при температуре"), [
          t("-10 °C", "-10 °C", "-10 °C"),
          t("100 °C", "100 °C", "100 °C"),
          t("0 °C", "0 °C", "0 °C"),
        ], 2),
        q(t("To melt 3 kg of ice at 0 °C you need", "0 °C-ի 3 կգ սառույցը հալելու համար պետք է", "Чтобы расплавить 3 кг льда при 0 °C, нужно"), [
          t("1020 kJ", "1020 կՋ", "1020 кДж"),
          t("340 kJ", "340 կՋ", "340 кДж"),
          t("113 kJ", "113 կՋ", "113 кДж"),
        ], 0),
        q(t("Mercury at -50 °C is", "-50 °C-ում սնդիկը", "Ртуть при -50 °C —"), [
          t("liquid", "հեղուկ է", "жидкая"),
          t("solid", "պինդ է", "твёрдая"),
          t("a gas", "գազ է", "газ"),
        ], 1),
        q(t("During solidification the substance", "Պնդացման ընթացքում նյութը", "При отвердевании вещество"), [
          t("absorbs heat", "ջերմություն է կլանում", "поглощает теплоту"),
          t("neither absorbs nor gives off heat", "ո՛չ կլանում է, ո՛չ տալիս ջերմություն", "не поглощает и не отдаёт теплоту"),
          t("gives off heat", "ջերմություն է տալիս", "отдаёт теплоту"),
        ], 2),
      ],
    ),
    lesson(
      "vaporisation-condensation",
      ["Evaporation, boiling, condensation; humidity", "Գոլորշիացում, եռում, խտացում, խոնավություն", "Испарение, кипение, конденсация; влажность"],
      {
        en: ["Explain evaporation and the factors that speed it up", "Distinguish evaporation from boiling and use Q = Lm", "Explain absolute and relative humidity and the dew point"],
        hy: ["Բացատրել գոլորշիացումը և այն արագացնող գործոնները", "Տարբերել գոլորշիացումն եռումից և կիրառել Q = Lm", "Բացատրել բացարձակ և հարաբերական խոնավությունը և ցողի կետը"],
        ru: ["Объяснять испарение и факторы, ускоряющие его", "Отличать испарение от кипения и применять Q = Lm", "Объяснять абсолютную и относительную влажность и точку росы"],
      },
      {
        en: `## Evaporation

The fastest molecules at the surface of a liquid can escape the attraction of the others and fly away. This is **evaporation**. It happens at any temperature.

Because the fastest molecules leave, the ones that remain are slower on average: **an evaporating liquid cools down**. That is why you feel cold coming out of water, why a wet towel on your forehead helps in a fever, and why a sweating body does not overheat.

Evaporation is faster when

- the temperature is higher,
- the surface area is larger (spread the washing out),
- a wind blows the vapour away,
- the liquid evaporates easily (ether and alcohol much faster than oil).

### Condensation

Vapour molecules that come back into the liquid **condense**. Condensation *releases* heat. Clouds, dew, fog and the drops on a cold bottle are condensation.

If the vessel is closed, evaporation and condensation soon balance: the vapour above the liquid is then **saturated**.

## Boiling

Heat water in a pan. Small air bubbles on the bottom fill with vapour, grow, and when the pressure inside them reaches the outside pressure they tear away and rise, bursting at the surface. This is **boiling** — vaporisation throughout the whole volume.

| Evaporation | Boiling |
|---|---|
| at any temperature | only at the boiling point |
| from the surface only | throughout the volume |
| temperature of the liquid falls | temperature stays constant |

Water boils at $100\\ ^\\circ$C at normal pressure, at about $70\\ ^\\circ$C on the top of Mount Aragats, and at $120\\ ^\\circ$C in a pressure cooker: **the boiling point rises with pressure**.

## Specific latent heat of vaporisation

$$Q = L\\,m$$

$L$ is the heat needed to turn $1$ kg of a liquid at its boiling point into vapour. For water $L = 2\\,300\\,000$ J/kg — nearly seven times more than melting ice. This is why steam burns are so dangerous: condensing on your skin, $1$ g of steam gives up $2300$ J.

## Humidity of the air

**Absolute humidity** is the mass of water vapour in $1$ m³ of air (g/m³). **Relative humidity** is

$$\\varphi = \\frac{\\rho}{\\rho_0} \\cdot 100\\%$$

the ratio of the actual vapour density to the density of saturated vapour at the same temperature. Comfortable rooms have $\\varphi = 40$–$60\\%$.

The temperature at which the air becomes saturated, so that dew starts to form, is the **dew point**. A psychrometer measures humidity with a dry and a wet thermometer: the drier the air, the faster the wet one evaporates and the lower it reads.

### Exercises

1. Why does water in a saucer disappear in a few days without being heated?
2. Why do you feel cold when you come out of the sea on a windy day?
3. Give three ways to make washing dry faster.
4. How much heat is needed to turn $2$ kg of water at $100\\ ^\\circ$C into steam?
5. Why does water boil at a lower temperature high in the mountains?
6. Which burns more severely: $100$ g of water at $100\\ ^\\circ$C or $100$ g of steam at $100\\ ^\\circ$C?
7. The air at $20\\ ^\\circ$C contains $8.6$ g/m³ of vapour; saturated vapour at $20\\ ^\\circ$C has density $17.3$ g/m³. Find the relative humidity.
8. Why do drops appear on the outside of a bottle taken from the fridge?

### Answers

1. It evaporates: fast molecules leave the surface at any temperature.
2. Evaporation takes heat from your skin, and the wind speeds it up.
3. Spread it out (larger area), hang it in the sun or a warm room, and in a draught.
4. $Q = L m = 2\\,300\\,000 \\cdot 2 = 4\\,600\\,000$ J $= 4.6$ MJ.
5. The outside pressure is lower, so bubbles can grow at a lower temperature.
6. The steam, because condensing it releases an extra $2300$ J per gram.
7. $\\varphi = 8.6/17.3 \\cdot 100\\% \\approx 50\\%$.
8. The cold glass cools the air next to it below its dew point, and the vapour condenses.`,
        hy: `## Գոլորշիացում

Հեղուկի մակերևույթի ամենաարագ մոլեկուլները կարող են հաղթահարել մյուսների ձգողությունը և դուրս թռչել։ Սա **գոլորշիացումն** է։ Այն տեղի է ունենում ցանկացած ջերմաստիճանում։

Քանի որ հեռանում են ամենաարագ մոլեկուլները, մնացածները միջինում ավելի դանդաղ են. **գոլորշիացող հեղուկը սառչում է**։ Ահա թե ինչու ես սառը զգում ջրից դուրս գալիս, ինչու է ջերմության ժամանակ ճակատին դրված թաց սրբիչն օգնում, և ինչու քրտնող մարմինը չի գերտաքանում։

Գոլորշիացումն ավելի արագ է, երբ

- ջերմաստիճանն ավելի բարձր է,
- մակերևույթի մակերեսն ավելի մեծ է (լվացքը լայն փռիր),
- քամին տանում է գոլորշին,
- հեղուկը հեշտ գոլորշիացող է (եթերն ու սպիրտը՝ յուղից շատ ավելի արագ)։

### Խտացում

Հեղուկ վերադարձող գոլորշու մոլեկուլները **խտանում** են։ Խտացումը ջերմություն *արձակում* է։ Ամպերը, ցողը, մառախուղը և սառը շշի վրայի կաթիլները խտացում են։

Եթե անոթը փակ է, գոլորշիացումն ու խտացումը շուտով հավասարակշռվում են. հեղուկի վրայի գոլորշին այդ ժամանակ **հագեցած** է։

## Եռում

Տաքացրու ջուրը կաթսայում։ Հատակի օդի մանր պղպջակները լցվում են գոլորշով, մեծանում, և երբ նրանց ներսի ճնշումը հասնում է արտաքին ճնշմանը, պոկվում են ու բարձրանում՝ պայթելով մակերևույթին։ Սա **եռումն** է՝ գոլորշիացում ամբողջ ծավալով։

| Գոլորշիացում | Եռում |
|---|---|
| ցանկացած ջերմաստիճանում | միայն եռման ջերմաստիճանում |
| միայն մակերևույթից | ամբողջ ծավալով |
| հեղուկի ջերմաստիճանը նվազում է | ջերմաստիճանը մնում է անփոփոխ |

Ջուրը նորմալ ճնշման տակ եռում է $100\\ ^\\circ$C-ում, Արագած լեռան գագաթին՝ մոտ $70\\ ^\\circ$C, իսկ ճնշումային կաթսայում՝ $120\\ ^\\circ$C-ում. **եռման ջերմաստիճանը մեծանում է ճնշման հետ**։

## Գոլորշիացման տեսակարար ջերմություն

$$Q = L\\,m$$

$L$-ը ջերմությունն է, որը պետք է եռման ջերմաստիճանում գտնվող հեղուկի $1$ կգ-ը գոլորշու վերածելու համար։ Ջրի համար $L = 2\\,300\\,000$ Ջ/կգ՝ սառույցի հալումից գրեթե յոթ անգամ ավելի։ Ահա թե ինչու գոլորշու այրվածքներն այնքան վտանգավոր են. մաշկիդ վրա խտանալով՝ $1$ գ գոլորշին տալիս է $2300$ Ջ։

## Օդի խոնավություն

**Բացարձակ խոնավությունը** $1$ մ³ օդում ջրային գոլորշու զանգվածն է (գ/մ³)։ **Հարաբերական խոնավությունը**

$$\\varphi = \\frac{\\rho}{\\rho_0} \\cdot 100\\%$$

գոլորշու իրական խտության հարաբերությունն է նույն ջերմաստիճանում հագեցած գոլորշու խտությանը։ Հարմարավետ սենյակներում $\\varphi = 40$–$60\\%$ է։

Այն ջերմաստիճանը, որտեղ օդը դառնում է հագեցած, և ցող է սկսում առաջանալ, **ցողի կետն** է։ Պսիխրոմետրը խոնավությունը չափում է չոր և թաց ջերմաչափերով. ինչքան չոր է օդը, այնքան արագ է գոլորշիանում թացինը և այնքան ցածր է նրա ցուցմունքը։

### Վարժություններ

1. Ինչո՞ւ է պնակի ջուրը մի քանի օրում անհետանում՝ առանց տաքացվելու։
2. Ինչո՞ւ ես սառը զգում, երբ քամոտ օրը դուրս ես գալիս ծովից։
3. Բեր լվացքն ավելի արագ չորացնելու երեք եղանակ։
4. Որքա՞ն ջերմություն է պետք $100\\ ^\\circ$C-ի $2$ կգ ջուրը գոլորշու վերածելու համար։
5. Ինչո՞ւ է ջուրը լեռների վրա ավելի ցածր ջերմաստիճանում եռում։
6. Ո՞րն ավելի ուժեղ կայրի՝ $100\\ ^\\circ$C-ի $100$ գ ջուրը, թե՞ $100\\ ^\\circ$C-ի $100$ գ գոլորշին։
7. $20\\ ^\\circ$C օդը պարունակում է $8{,}6$ գ/մ³ գոլորշի, $20\\ ^\\circ$C-ում հագեցած գոլորշու խտությունը $17{,}3$ գ/մ³ է։ Գտիր հարաբերական խոնավությունը։
8. Ինչո՞ւ են սառնարանից հանված շշի արտաքին մակերևույթին կաթիլներ առաջանում։

### Պատասխաններ

1. Գոլորշիանում է՝ արագ մոլեկուլները ցանկացած ջերմաստիճանում հեռանում են մակերևույթից։
2. Գոլորշիացումը ջերմություն է վերցնում մաշկից, իսկ քամին արագացնում է այն։
3. Լայն փռել (մեծ մակերես), կախել արևի տակ կամ տաք սենյակում, և քամու հոսքում։
4. $Q = L m = 2\\,300\\,000 \\cdot 2 = 4\\,600\\,000$ Ջ $= 4{,}6$ ՄՋ։
5. Արտաքին ճնշումն ավելի ցածր է, ուստի պղպջակները կարող են աճել ավելի ցածր ջերմաստիճանում։
6. Գոլորշին, քանի որ նրա խտացումը գրամից լրացուցիչ $2300$ Ջ է արձակում։
7. $\\varphi = 8{,}6/17{,}3 \\cdot 100\\% \\approx 50\\%$։
8. Սառն ապակին իրեն կպած օդը սառեցնում է ցողի կետից ցածր, և գոլորշին խտանում է։`,
        ru: `## Испарение

Самые быстрые молекулы на поверхности жидкости способны преодолеть притяжение остальных и вылететь. Это **испарение**. Оно идёт при любой температуре.

Поскольку улетают самые быстрые молекулы, оставшиеся в среднем медленнее: **испаряющаяся жидкость остывает**. Поэтому тебе холодно, когда выходишь из воды, поэтому мокрое полотенце на лбу помогает при жаре, и поэтому потеющее тело не перегревается.

Испарение идёт быстрее, когда

- температура выше,
- площадь поверхности больше (развесь бельё шире),
- ветер уносит пар,
- жидкость легко испаряется (эфир и спирт гораздо быстрее масла).

### Конденсация

Молекулы пара, возвращающиеся в жидкость, **конденсируются**. Конденсация *выделяет* теплоту. Облака, роса, туман и капли на холодной бутылке — это конденсация.

Если сосуд закрыт, испарение и конденсация вскоре уравновешиваются: пар над жидкостью тогда **насыщенный**.

## Кипение

Нагревай воду в кастрюле. Мелкие пузырьки воздуха на дне наполняются паром, растут, и когда давление внутри них достигает внешнего, отрываются и поднимаются, лопаясь на поверхности. Это **кипение** — парообразование по всему объёму.

| Испарение | Кипение |
|---|---|
| при любой температуре | только при температуре кипения |
| только с поверхности | по всему объёму |
| температура жидкости падает | температура не меняется |

Вода кипит при $100\\ ^\\circ$C при нормальном давлении, около $70\\ ^\\circ$C на вершине Арагаца и при $120\\ ^\\circ$C в скороварке: **температура кипения растёт с давлением**.

## Удельная теплота парообразования

$$Q = L\\,m$$

$L$ — теплота, нужная, чтобы обратить в пар $1$ кг жидкости при температуре кипения. Для воды $L = 2\\,300\\,000$ Дж/кг — почти в семь раз больше, чем плавление льда. Поэтому ожоги паром так опасны: конденсируясь на коже, $1$ г пара отдаёт $2300$ Дж.

## Влажность воздуха

**Абсолютная влажность** — масса водяного пара в $1$ м³ воздуха (г/м³). **Относительная влажность**

$$\\varphi = \\frac{\\rho}{\\rho_0} \\cdot 100\\%$$

это отношение действительной плотности пара к плотности насыщенного пара при той же температуре. В комфортных помещениях $\\varphi = 40$–$60\\%$.

Температура, при которой воздух становится насыщенным и начинает выпадать роса, — **точка росы**. Психрометр измеряет влажность сухим и влажным термометрами: чем суше воздух, тем быстрее испаряется с влажного и тем ниже его показание.

### Упражнения

1. Почему вода в блюдце исчезает за несколько дней без нагревания?
2. Почему тебе холодно, когда выходишь из моря в ветреный день?
3. Назови три способа высушить бельё быстрее.
4. Сколько теплоты нужно, чтобы обратить $2$ кг воды при $100\\ ^\\circ$C в пар?
5. Почему высоко в горах вода кипит при более низкой температуре?
6. Что обожжёт сильнее: $100$ г воды при $100\\ ^\\circ$C или $100$ г пара при $100\\ ^\\circ$C?
7. Воздух при $20\\ ^\\circ$C содержит $8{,}6$ г/м³ пара; плотность насыщенного пара при $20\\ ^\\circ$C равна $17{,}3$ г/м³. Найди относительную влажность.
8. Почему на бутылке, вынутой из холодильника, появляются капли снаружи?

### Ответы

1. Она испаряется: быстрые молекулы покидают поверхность при любой температуре.
2. Испарение забирает теплоту у кожи, а ветер ускоряет его.
3. Развесить шире (большая площадь), повесить на солнце или в тёплой комнате, и на сквозняке.
4. $Q = L m = 2\\,300\\,000 \\cdot 2 = 4\\,600\\,000$ Дж $= 4{,}6$ МДж.
5. Внешнее давление ниже, поэтому пузырьки могут расти при более низкой температуре.
6. Пар, потому что его конденсация выделяет дополнительно $2300$ Дж на грамм.
7. $\\varphi = 8{,}6/17{,}3 \\cdot 100\\% \\approx 50\\%$.
8. Холодное стекло охлаждает прилегающий воздух ниже точки росы, и пар конденсируется.`,
      },
      [
        q(t("Evaporation happens", "Գոլորշիացումը տեղի է ունենում", "Испарение происходит"), [
          t("at any temperature", "ցանկացած ջերմաստիճանում", "при любой температуре"),
          t("only at 100 °C", "միայն 100 °C-ում", "только при 100 °C"),
          t("only at the boiling point", "միայն եռման ջերմաստիճանում", "только при температуре кипения"),
        ], 0),
        q(t("An evaporating liquid", "Գոլորշիացող հեղուկը", "Испаряющаяся жидкость"), [
          t("warms up", "տաքանում է", "нагревается"),
          t("cools down", "սառչում է", "остывает"),
          t("does not change temperature", "ջերմաստիճանը չի փոխում", "не меняет температуру"),
        ], 1),
        q(t("The boiling point of water in a pressure cooker is", "Ճնշումային կաթսայում ջրի եռման ջերմաստիճանն է", "Температура кипения воды в скороварке"), [
          t("lower than 100 °C", "100 °C-ից ցածր", "ниже 100 °C"),
          t("exactly 100 °C", "ճիշտ 100 °C", "ровно 100 °C"),
          t("higher than 100 °C", "100 °C-ից բարձր", "выше 100 °C"),
        ], 2),
        q(t("To turn 1 kg of water at 100 °C into steam you need about", "100 °C-ի 1 կգ ջուրը գոլորշու վերածելու համար պետք է մոտ", "Чтобы обратить 1 кг воды при 100 °C в пар, нужно около"), [
          t("2.3 MJ", "2,3 ՄՋ", "2,3 МДж"),
          t("0.34 MJ", "0,34 ՄՋ", "0,34 МДж"),
          t("4.2 MJ", "4,2 ՄՋ", "4,2 МДж"),
        ], 0),
        q(t("Dew on the grass in the morning is", "Առավոտյան խոտի վրայի ցողը", "Утренняя роса на траве — это"), [
          t("evaporation", "գոլորշիացում է", "испарение"),
          t("condensation", "խտացում է", "конденсация"),
          t("boiling", "եռում է", "кипение"),
        ], 1),
        q(t("Relative humidity of 50% means that the vapour density is", "50% հարաբերական խոնավությունը նշանակում է, որ գոլորշու խտությունը", "Относительная влажность 50% означает, что плотность пара"), [
          t("equal to the saturated value", "հավասար է հագեցածի արժեքին", "равна насыщенной"),
          t("twice the saturated value", "հագեցածի արժեքից երկու անգամ մեծ է", "вдвое больше насыщенной"),
          t("half the saturated value at that temperature", "այդ ջերմաստիճանում հագեցածի արժեքի կեսն է", "вдвое меньше насыщенной при этой температуре"),
        ], 2),
      ],
    ),
    lesson(
      "heat-engines",
      ["Heat engines and efficiency", "Ջերմային շարժիչներ և ՕԳԳ", "Тепловые двигатели и КПД"],
      {
        en: ["Describe the four strokes of an internal combustion engine", "Compute efficiency as \η = A/Q \· 100\%", "Discuss the energy and environmental cost of heat engines"],
        hy: ["Նկարագրել ներքին այրման շարժիչի չորս տակտը", "Հաշվել ՕԳԳ-ն որպես \η = A/Q \· 100\%", "Քննարկել ջերմային շարժիչների էներգետիկ և բնապահպանական գինը"],
        ru: ["Описывать четыре такта двигателя внутреннего сгорания", "Вычислять КПД как \η = A/Q \· 100\%", "Обсуждать энергетическую и экологическую цену тепловых двигателей"],
      },
      {
        en: `## A machine that turns heat into motion

A **heat engine** is a machine that turns part of the internal energy of a fuel into mechanical work. Every heat engine has three parts:

1. a **heater** — the burning fuel, which gives heat $Q_1$;
2. a **working substance** — gas or steam, which expands and does work $A$;
3. a **cooler** — the air or water that takes away the unused heat $Q_2$.

$$A = Q_1 - Q_2$$

Some heat must always be thrown away: a heat engine cannot turn all the heat into work. This is a law of nature, not a fault of the designer.

## The four-stroke engine

The petrol engine of a car works in four strokes, one piston stroke each:

| Stroke | Valves | What happens |
|---|---|---|
| 1. Intake | inlet open | the piston goes down and sucks in the air–petrol mixture |
| 2. Compression | both closed | the piston goes up and compresses the mixture, which heats up |
| 3. Power | both closed | the spark ignites the mixture; the hot gas pushes the piston down and **does work** |
| 4. Exhaust | outlet open | the piston goes up and pushes the burnt gases out |

Only the third stroke does useful work; a flywheel keeps the shaft turning through the other three. Real engines have four or more cylinders, firing in turn, so the shaft is pushed continuously.

### Steam turbine

In a power station, burning fuel boils water; the steam at high pressure strikes the curved blades of a **turbine** wheel and spins it, and the wheel turns the generator. Turbines are used in power stations, large ships and aircraft engines.

## Efficiency

**Efficiency** is the fraction of the heat that becomes useful work:

$$\\eta = \\frac{A}{Q_1} \\cdot 100\\% = \\frac{Q_1 - Q_2}{Q_1} \\cdot 100\\%$$

| Engine | $\\eta$ |
|---|---|
| Steam engine (19th century) | $8$–$12\\%$ |
| Petrol engine | $25$–$30\\%$ |
| Diesel engine | $35$–$45\\%$ |
| Steam turbine in a power station | up to $40\\%$ |
| Electric motor (not a heat engine) | $90\\%$ and more |

## Worked example

> An engine burns $2$ kg of petrol and does $18$ MJ of work. Find the efficiency.

$$Q_1 = qm = 46 \\cdot 10^6 \\cdot 2 = 92\\ \\text{MJ},\\qquad \\eta = \\frac{18}{92} \\cdot 100\\% \\approx 19.6\\%$$

## The cost

Heat engines consume most of the world's fuel. They heat the atmosphere, release carbon dioxide which strengthens the greenhouse effect, and give out soot and nitrogen oxides. That is why engineers work on higher efficiency, on electric and hydrogen vehicles, and on wind, solar and hydro power, which need no fuel at all.

### Exercises

1. Name the three necessary parts of a heat engine.
2. In which stroke of a four-stroke engine is useful work done?
3. An engine receives $500$ kJ and does $150$ kJ of work. Find $\\eta$ and the heat given to the cooler.
4. An engine with $\\eta = 25\\%$ did $50$ kJ of work. How much heat did the fuel give?
5. How much petrol does an engine of efficiency $30\\%$ burn to do $69$ MJ of work?
6. Why is a flywheel needed in a single-cylinder engine?
7. Why can the efficiency of a heat engine never be $100\\%$?
8. Name two ways to reduce the harm done by road transport.

### Answers

1. Heater, working substance, cooler.
2. The third, the power stroke.
3. $\\eta = 150/500 \\cdot 100\\% = 30\\%$; $Q_2 = 500 - 150 = 350$ kJ.
4. $Q_1 = A/\\eta = 50/0.25 = 200$ kJ.
5. $Q_1 = 69/0.3 = 230$ MJ; $m = 230/46 = 5$ kg.
6. It stores energy from the power stroke and carries the piston through the other three.
7. Part of the heat must always be given to the cooler with the exhaust gases.
8. Electric or hybrid vehicles, public transport, higher engine efficiency, exhaust filters (any two).`,
        hy: `## Մեքենա, որը ջերմությունը դարձնում է շարժում

**Ջերմային շարժիչը** մեքենա է, որը վառելիքի ներքին էներգիայի մի մասը դարձնում է մեխանիկական աշխատանք։ Ամեն ջերմային շարժիչ ունի երեք մաս՝

1. **տաքացուցիչ**՝ այրվող վառելիքը, որը տալիս է $Q_1$ ջերմությունը,
2. **աշխատանքային նյութ**՝ գազ կամ գոլորշի, որն ընդարձակվում է և կատարում $A$ աշխատանք,
3. **սառեցուցիչ**՝ օդը կամ ջուրը, որը տանում է չօգտագործված $Q_2$ ջերմությունը։

$$A = Q_1 - Q_2$$

Ջերմության մի մասը միշտ պետք է դուրս նետվի. ջերմային շարժիչը չի կարող ամբողջ ջերմությունը դարձնել աշխատանք։ Սա բնության օրենք է, ոչ թե կոնստրուկտորի թերություն։

## Չորս տակտանի շարժիչ

Ավտոմեքենայի բենզինային շարժիչն աշխատում է չորս տակտով՝ յուրաքանչյուրը մխոցի մեկ ընթացք է՝

| Տակտ | Փականներ | Ինչ է կատարվում |
|---|---|---|
| 1. Ներծծում | ներածողը բաց | մխոցն իջնում է և ներս ծծում օդ-բենզին խառնուրդը |
| 2. Սեղմում | երկուսն էլ փակ | մխոցը բարձրանում է և սեղմում խառնուրդը, որը տաքանում է |
| 3. Աշխատանքային | երկուսն էլ փակ | կայծը բռնկում է խառնուրդը, տաք գազը մխոցն իջեցնում է և **աշխատանք կատարում** |
| 4. Արտանետում | արտածողը բաց | մխոցը բարձրանում է և դուրս հրում այրված գազերը |

Օգտակար աշխատանք կատարում է միայն երրորդ տակտը, մնացած երեքի ընթացքում լիսեռը պտտում է թափանիվը։ Իրական շարժիչներն ունեն չորս և ավելի գլան, որոնք հերթով բռնկվում են, ուստի լիսեռը մշտապես հրվում է։

### Գոլորշու տուրբին

Էլեկտրակայանում այրվող վառելիքն եռացնում է ջուրը, բարձր ճնշման գոլորշին հարվածում է **տուրբինի** անիվի կոր թիակներին և պտտում այն, իսկ անիվը պտտում է գեներատորը։ Տուրբիններ օգտագործվում են էլեկտրակայաններում, մեծ նավերում և ավիաշարժիչներում։

## Օգտակար գործողության գործակից

**ՕԳԳ**-ն ջերմության այն մասն է, որը դառնում է օգտակար աշխատանք՝

$$\\eta = \\frac{A}{Q_1} \\cdot 100\\% = \\frac{Q_1 - Q_2}{Q_1} \\cdot 100\\%$$

| Շարժիչ | $\\eta$ |
|---|---|
| Գոլորշու մեքենա (19-րդ դար) | $8$–$12\\%$ |
| Բենզինային շարժիչ | $25$–$30\\%$ |
| Դիզելային շարժիչ | $35$–$45\\%$ |
| Էլեկտրակայանի գոլորշու տուրբին | մինչև $40\\%$ |
| Էլեկտրաշարժիչ (ջերմային շարժիչ չէ) | $90\\%$ և ավելի |

## Լուծված օրինակ

> Շարժիչն այրում է $2$ կգ բենզին և կատարում $18$ ՄՋ աշխատանք։ Գտիր ՕԳԳ-ն։

$$Q_1 = qm = 46 \\cdot 10^6 \\cdot 2 = 92\\ \\text{ՄՋ},\\qquad \\eta = \\frac{18}{92} \\cdot 100\\% \\approx 19{,}6\\%$$

## Գինը

Ջերմային շարժիչները սպառում են աշխարհի վառելիքի մեծ մասը։ Նրանք տաքացնում են մթնոլորտը, արձակում ածխաթթու գազ, որն ուժեղացնում է ջերմոցային էֆեկտը, ինչպես նաև մուր և ազոտի օքսիդներ։ Ահա թե ինչու ինժեներներն աշխատում են ավելի բարձր ՕԳԳ-ի, էլեկտրական և ջրածնային տրանսպորտի, ինչպես նաև քամու, արևի և ջրի էներգիայի վրա, որոնք ընդհանրապես վառելիք չեն պահանջում։

### Վարժություններ

1. Նշիր ջերմային շարժիչի երեք անհրաժեշտ մասը։
2. Չորս տակտանի շարժիչի ո՞ր տակտում է կատարվում օգտակար աշխատանք։
3. Շարժիչը ստանում է $500$ կՋ և կատարում $150$ կՋ աշխատանք։ Գտիր $\\eta$-ն և սառեցուցիչին տրված ջերմությունը։
4. $\\eta = 25\\%$ շարժիչը կատարել է $50$ կՋ աշխատանք։ Որքա՞ն ջերմություն է տվել վառելիքը։
5. Որքա՞ն բենզին է այրում $30\\%$ ՕԳԳ ունեցող շարժիչը $69$ ՄՋ աշխատանք կատարելու համար։
6. Ինչո՞ւ է մեկ գլան ունեցող շարժիչին պետք թափանիվ։
7. Ինչո՞ւ ջերմային շարժիչի ՕԳԳ-ն երբեք չի կարող լինել $100\\%$։
8. Նշիր ավտոտրանսպորտի վնասը նվազեցնելու երկու եղանակ։

### Պատասխաններ

1. Տաքացուցիչ, աշխատանքային նյութ, սառեցուցիչ։
2. Երրորդում՝ աշխատանքայինում։
3. $\\eta = 150/500 \\cdot 100\\% = 30\\%$, $Q_2 = 500 - 150 = 350$ կՋ։
4. $Q_1 = A/\\eta = 50/0{,}25 = 200$ կՋ։
5. $Q_1 = 69/0{,}3 = 230$ ՄՋ, $m = 230/46 = 5$ կգ։
6. Այն պահում է աշխատանքային տակտի էներգիան և մխոցը տանում մյուս երեքի միջով։
7. Ջերմության մի մասը միշտ պետք է արտանետվող գազերի հետ տրվի սառեցուցիչին։
8. Էլեկտրական կամ հիբրիդային տրանսպորտ, հասարակական տրանսպորտ, շարժիչի ավելի բարձր ՕԳԳ, արտանետումների ֆիլտրեր (ցանկացած երկուսը)։`,
        ru: `## Машина, превращающая теплоту в движение

**Тепловой двигатель** — машина, превращающая часть внутренней энергии топлива в механическую работу. У любого теплового двигателя три части:

1. **нагреватель** — горящее топливо, дающее теплоту $Q_1$;
2. **рабочее тело** — газ или пар, который расширяется и совершает работу $A$;
3. **холодильник** — воздух или вода, уносящие неиспользованную теплоту $Q_2$.

$$A = Q_1 - Q_2$$

Часть теплоты всегда приходится выбрасывать: тепловой двигатель не может превратить в работу всю теплоту. Это закон природы, а не недостаток конструктора.

## Четырёхтактный двигатель

Бензиновый двигатель автомобиля работает в четыре такта, каждый — один ход поршня:

| Такт | Клапаны | Что происходит |
|---|---|---|
| 1. Впуск | впускной открыт | поршень идёт вниз и всасывает смесь воздуха с бензином |
| 2. Сжатие | оба закрыты | поршень идёт вверх и сжимает смесь, она нагревается |
| 3. Рабочий | оба закрыты | искра зажигает смесь; горячий газ толкает поршень вниз и **совершает работу** |
| 4. Выпуск | выпускной открыт | поршень идёт вверх и выталкивает сгоревшие газы |

Полезную работу совершает только третий такт; остальные три вал проходит за счёт маховика. У настоящих двигателей четыре и больше цилиндров, которые срабатывают по очереди, поэтому вал толкается непрерывно.

### Паровая турбина

На электростанции горящее топливо кипятит воду; пар высокого давления бьёт по изогнутым лопаткам колеса **турбины** и вращает его, а колесо вращает генератор. Турбины применяют на электростанциях, на больших судах и в авиационных двигателях.

## КПД

**КПД** — доля теплоты, которая становится полезной работой:

$$\\eta = \\frac{A}{Q_1} \\cdot 100\\% = \\frac{Q_1 - Q_2}{Q_1} \\cdot 100\\%$$

| Двигатель | $\\eta$ |
|---|---|
| Паровая машина (XIX век) | $8$–$12\\%$ |
| Бензиновый двигатель | $25$–$30\\%$ |
| Дизельный двигатель | $35$–$45\\%$ |
| Паровая турбина электростанции | до $40\\%$ |
| Электродвигатель (не тепловой) | $90\\%$ и больше |

## Разобранный пример

> Двигатель сжигает $2$ кг бензина и совершает работу $18$ МДж. Найди КПД.

$$Q_1 = qm = 46 \\cdot 10^6 \\cdot 2 = 92\\ \\text{МДж},\\qquad \\eta = \\frac{18}{92} \\cdot 100\\% \\approx 19{,}6\\%$$

## Цена

Тепловые двигатели расходуют большую часть мирового топлива. Они нагревают атмосферу, выбрасывают углекислый газ, усиливающий парниковый эффект, а также сажу и оксиды азота. Поэтому инженеры работают над повышением КПД, над электрическим и водородным транспортом, а также над энергией ветра, солнца и воды, которой топливо не нужно вовсе.

### Упражнения

1. Назови три обязательные части теплового двигателя.
2. В каком такте четырёхтактного двигателя совершается полезная работа?
3. Двигатель получает $500$ кДж и совершает $150$ кДж работы. Найди $\\eta$ и теплоту, отданную холодильнику.
4. Двигатель с $\\eta = 25\\%$ совершил $50$ кДж работы. Сколько теплоты дало топливо?
5. Сколько бензина сожжёт двигатель с КПД $30\\%$, чтобы совершить работу $69$ МДж?
6. Зачем одноцилиндровому двигателю маховик?
7. Почему КПД теплового двигателя никогда не может быть $100\\%$?
8. Назови два способа уменьшить вред от автомобильного транспорта.

### Ответы

1. Нагреватель, рабочее тело, холодильник.
2. В третьем, рабочем.
3. $\\eta = 150/500 \\cdot 100\\% = 30\\%$; $Q_2 = 500 - 150 = 350$ кДж.
4. $Q_1 = A/\\eta = 50/0{,}25 = 200$ кДж.
5. $Q_1 = 69/0{,}3 = 230$ МДж; $m = 230/46 = 5$ кг.
6. Он запасает энергию рабочего такта и проводит поршень через остальные три.
7. Часть теплоты всегда уходит холодильнику вместе с выхлопными газами.
8. Электрический или гибридный транспорт, общественный транспорт, повышение КПД, фильтры выхлопа (любые два).`,
      },
      [
        q(t("The three parts of any heat engine are", "Ցանկացած ջերմային շարժիչի երեք մասերն են", "Три части любого теплового двигателя —"), [
          t("heater, working substance, cooler", "տաքացուցիչ, աշխատանքային նյութ, սառեցուցիչ", "нагреватель, рабочее тело, холодильник"),
          t("piston, valve, spark plug", "մխոց, փական, մոմ", "поршень, клапан, свеча"),
          t("fuel, water, air", "վառելիք, ջուր, օդ", "топливо, вода, воздух"),
        ], 0),
        q(t("Useful work in a four-stroke engine is done in the", "Չորս տակտանի շարժիչում օգտակար աշխատանքը կատարվում է", "Полезная работа в четырёхтактном двигателе совершается в"), [
          t("first stroke", "առաջին տակտում", "первом такте"),
          t("third stroke", "երրորդ տակտում", "третьем такте"),
          t("fourth stroke", "չորրորդ տակտում", "четвёртом такте"),
        ], 1),
        q(t("The formula for efficiency is", "ՕԳԳ-ի բանաձևն է", "Формула КПД —"), [
          t("η = Q₁/A", "η = Q₁/A", "η = Q₁/A"),
          t("η = Q₁ Q₂", "η = Q₁ Q₂", "η = Q₁ Q₂"),
          t("η = A/Q₁ · 100%", "η = A/Q₁ · 100%", "η = A/Q₁ · 100%"),
        ], 2),
        q(t("An engine takes 400 kJ and does 100 kJ of work. Its efficiency is", "Շարժիչը վերցնում է 400 կՋ և կատարում 100 կՋ աշխատանք։ Նրա ՕԳԳ-ն է", "Двигатель получает 400 кДж и совершает 100 кДж работы. Его КПД —"), [
          t("25%", "25%", "25%"),
          t("40%", "40%", "40%"),
          t("75%", "75%", "75%"),
        ], 0),
        q(t("In a power station the generator is turned by", "Էլեկտրակայանում գեներատորը պտտվում է", "На электростанции генератор вращается"), [
          t("a petrol engine", "բենզինային շարժիչով", "бензиновым двигателем"),
          t("a steam turbine", "գոլորշու տուրբինով", "паровой турбиной"),
          t("an electric motor", "էլեկտրաշարժիչով", "электродвигателем"),
        ], 1),
        q(t("The efficiency of a heat engine cannot reach 100% because", "Ջերմային շարժիչի ՕԳԳ-ն չի կարող հասնել 100%-ի, քանի որ", "КПД теплового двигателя не может достичь 100%, потому что"), [
          t("fuel is expensive", "վառելիքը թանկ է", "топливо дорого"),
          t("the engine is made of metal", "շարժիչը մետաղից է", "двигатель сделан из металла"),
          t("part of the heat must go to the cooler", "ջերմության մի մասը պետք է գնա սառեցուցիչին", "часть теплоты обязательно уходит холодильнику"),
        ], 2),
      ],
    ),
    lesson(
      "thermal-problems",
      ["Solving thermal problems", "Ջերմային խնդիրների լուծում", "Решение задач на тепловые процессы"],
      {
        en: ["Choose the right formula for each stage of a thermal process", "Write and solve an equation of heat balance", "Include efficiency in a problem about a stove or a heater"],
        hy: ["Ջերմային պրոցեսի ամեն փուլի համար ընտրել ճիշտ բանաձևը", "Կազմել և լուծել ջերմային հաշվեկցության հավասարում", "Վառարանի կամ տաքացուցիչի խնդրում հաշվի առնել ՕԳԳ-ն"],
        ru: ["Выбирать нужную формулу для каждого этапа теплового процесса", "Составлять и решать уравнение теплового баланса", "Учитывать КПД в задаче о печи или нагревателе"],
      },
      {
        en: `## Four formulas, one table

| Process | Formula | Sign of $Q$ |
|---|---|---|
| heating or cooling | $Q = cm(t_2 - t_1)$ | $+$ heating, $-$ cooling |
| melting / solidifying | $Q = \\lambda m$ | $+$ melting, $-$ solidifying |
| vaporising / condensing | $Q = Lm$ | $+$ vaporising, $-$ condensing |
| burning fuel | $Q = qm$ | released |

Constants for water: $c_{\\text{water}} = 4200$, $c_{\\text{ice}} = 2100$ J/(kg·$^\\circ$C), $\\lambda = 3.4 \\cdot 10^5$ J/kg, $L = 2.3 \\cdot 10^6$ J/kg.

## How to plan a solution

1. Write down what is given, in SI units (grams → kilograms!).
2. Follow the substance **stage by stage** and name each stage.
3. Write the formula for each stage and add them.
4. If two bodies exchange heat, write $Q_{\\text{given}} = Q_{\\text{taken}}$.
5. If a stove or heater is mentioned, include $\\eta$.
6. Check the units and the order of magnitude of the answer.

## Worked example 1 (three stages)

> How much heat turns $0.5$ kg of ice at $-20\\ ^\\circ$C into water at $40\\ ^\\circ$C?

| Stage | Computation |
|---|---|
| heating the ice to $0\\ ^\\circ$C | $2100 \\cdot 0.5 \\cdot 20 = 21\\,000$ J |
| melting the ice | $340\\,000 \\cdot 0.5 = 170\\,000$ J |
| heating the water to $40\\ ^\\circ$C | $4200 \\cdot 0.5 \\cdot 40 = 84\\,000$ J |

$$Q = 21\\,000 + 170\\,000 + 84\\,000 = 275\\,000\\ \\text{J} = 275\\ \\text{kJ}$$

## Worked example 2 (heat balance)

> A hot iron part of mass $0.4$ kg at $300\\ ^\\circ$C is dropped into $2$ kg of water at $15\\ ^\\circ$C. Find the final temperature.

$$460 \\cdot 0.4 \\cdot (300 - t) = 4200 \\cdot 2 \\cdot (t - 15)$$
$$184(300 - t) = 8400(t - 15)$$
$$55\\,200 - 184t = 8400t - 126\\,000 \\Rightarrow 8584t = 181\\,200 \\Rightarrow t \\approx 21\\ ^\\circ\\text{C}$$

The water hardly warmed: its heat capacity is far larger.

## Worked example 3 (with efficiency)

> A stove of efficiency $40\\%$ burns wood. How much wood is needed to boil $3$ kg of water taken at $20\\ ^\\circ$C?

Useful heat: $Q = 4200 \\cdot 3 \\cdot 80 = 1\\,008\\,000$ J.
Heat from the wood: $Q_1 = Q/\\eta = 1\\,008\\,000/0.4 = 2\\,520\\,000$ J.
Mass: $m = Q_1/q = 2\\,520\\,000/10\\,000\\,000 = 0.252$ kg $\\approx 250$ g.

### Exercises

1. How much heat turns $1$ kg of ice at $0\\ ^\\circ$C into water at $100\\ ^\\circ$C?
2. How much heat turns $0.2$ kg of water at $100\\ ^\\circ$C completely into steam?
3. $1$ kg of water at $100\\ ^\\circ$C is poured onto $1$ kg of ice at $0\\ ^\\circ$C. Will all the ice melt?
4. $0.5$ kg of copper at $200\\ ^\\circ$C is put into $1$ kg of water at $20\\ ^\\circ$C. Find the final temperature.
5. A heater of efficiency $80\\%$ uses $600$ kJ of electrical energy to heat water. By how much will it heat $2$ kg of water?
6. How much coal must a stove of efficiency $25\\%$ burn to melt $10$ kg of ice at $0\\ ^\\circ$C?
7. A $200$ g aluminium kettle holds $1$ kg of water, both at $20\\ ^\\circ$C. How much heat brings both to $100\\ ^\\circ$C?
8. Why does the answer to exercise 7 change very little if the kettle is made of copper instead?

### Answers

1. $340\\,000 + 4200 \\cdot 1 \\cdot 100 = 340\\,000 + 420\\,000 = 760$ kJ.
2. $Q = 2\\,300\\,000 \\cdot 0.2 = 460$ kJ.
3. Water cooling to $0\\ ^\\circ$C gives $4200 \\cdot 100 = 420$ kJ; melting $1$ kg of ice needs $340$ kJ, so yes, all of it melts and the mixture warms a little.
4. $380 \\cdot 0.5(200 - t) = 4200 \\cdot 1(t - 20) \\Rightarrow 190(200 - t) = 4200(t-20) \\Rightarrow t \\approx 27.8\\ ^\\circ$C.
5. Useful $Q = 0.8 \\cdot 600\\,000 = 480\\,000$ J; $\\Delta t = 480\\,000/(4200 \\cdot 2) \\approx 57\\ ^\\circ$C.
6. $Q = 340\\,000 \\cdot 10 = 3.4$ MJ; $Q_1 = 3.4/0.25 = 13.6$ MJ; $m = 13.6/27 \\approx 0.5$ kg.
7. $920 \\cdot 0.2 \\cdot 80 + 4200 \\cdot 1 \\cdot 80 = 14\\,720 + 336\\,000 \\approx 351$ kJ.
8. The kettle's share is only about $4\\%$ of the total, and copper differs from aluminium by a few kilojoules only.`,
        hy: `## Չորս բանաձև, մեկ աղյուսակ

| Պրոցես | Բանաձև | $Q$-ի նշանը |
|---|---|---|
| տաքացում կամ սառեցում | $Q = cm(t_2 - t_1)$ | $+$ տաքացում, $-$ սառեցում |
| հալում / պնդացում | $Q = \\lambda m$ | $+$ հալում, $-$ պնդացում |
| գոլորշիացում / խտացում | $Q = Lm$ | $+$ գոլորշիացում, $-$ խտացում |
| վառելիքի այրում | $Q = qm$ | արձակվում է |

Ջրի հաստատունները՝ $c_{\\text{ջուր}} = 4200$, $c_{\\text{սառույց}} = 2100$ Ջ/(կգ·$^\\circ$C), $\\lambda = 3{,}4 \\cdot 10^5$ Ջ/կգ, $L = 2{,}3 \\cdot 10^6$ Ջ/կգ։

## Ինչպես պլանավորել լուծումը

1. Գրիր տվյալները ՄՀ միավորներով (գրամներ → կիլոգրամներ)։
2. Հետևիր նյութին **փուլ առ փուլ** և անվանիր ամեն փուլը։
3. Ամեն փուլի համար գրիր բանաձևը և գումարիր։
4. Եթե երկու մարմին ջերմություն են փոխանակում, գրիր $Q_{\\text{տված}} = Q_{\\text{ստացված}}$։
5. Եթե խոսք կա վառարանի կամ տաքացուցիչի մասին, հաշվի առ $\\eta$-ն։
6. Ստուգիր միավորները և պատասխանի կարգը։

## Լուծված օրինակ 1 (երեք փուլ)

> Որքա՞ն ջերմություն է $-20\\ ^\\circ$C-ի $0{,}5$ կգ սառույցը դարձնում $40\\ ^\\circ$C ջուր։

| Փուլ | Հաշվարկ |
|---|---|
| սառույցի տաքացումը մինչև $0\\ ^\\circ$C | $2100 \\cdot 0{,}5 \\cdot 20 = 21\\,000$ Ջ |
| սառույցի հալումը | $340\\,000 \\cdot 0{,}5 = 170\\,000$ Ջ |
| ջրի տաքացումը մինչև $40\\ ^\\circ$C | $4200 \\cdot 0{,}5 \\cdot 40 = 84\\,000$ Ջ |

$$Q = 21\\,000 + 170\\,000 + 84\\,000 = 275\\,000\\ \\text{Ջ} = 275\\ \\text{կՋ}$$

## Լուծված օրինակ 2 (ջերմային հաշվեկցություն)

> $300\\ ^\\circ$C-ի $0{,}4$ կգ երկաթե դետալը գցում են $15\\ ^\\circ$C-ի $2$ կգ ջրի մեջ։ Գտիր վերջնական ջերմաստիճանը։

$$460 \\cdot 0{,}4 \\cdot (300 - t) = 4200 \\cdot 2 \\cdot (t - 15)$$
$$184(300 - t) = 8400(t - 15)$$
$$55\\,200 - 184t = 8400t - 126\\,000 \\Rightarrow 8584t = 181\\,200 \\Rightarrow t \\approx 21\\ ^\\circ\\text{C}$$

Ջուրը գրեթե չտաքացավ՝ նրա ջերմունակությունը շատ ավելի մեծ է։

## Լուծված օրինակ 3 (ՕԳԳ-ով)

> $40\\%$ ՕԳԳ ունեցող վառարանը փայտ է այրում։ Որքա՞ն փայտ է պետք $20\\ ^\\circ$C-ում վերցված $3$ կգ ջուրն եռացնելու համար։

Օգտակար ջերմությունը՝ $Q = 4200 \\cdot 3 \\cdot 80 = 1\\,008\\,000$ Ջ։
Փայտի տված ջերմությունը՝ $Q_1 = Q/\\eta = 1\\,008\\,000/0{,}4 = 2\\,520\\,000$ Ջ։
Զանգվածը՝ $m = Q_1/q = 2\\,520\\,000/10\\,000\\,000 = 0{,}252$ կգ $\\approx 250$ գ։

### Վարժություններ

1. Որքա՞ն ջերմություն է $0\\ ^\\circ$C-ի $1$ կգ սառույցը դարձնում $100\\ ^\\circ$C ջուր։
2. Որքա՞ն ջերմություն է $100\\ ^\\circ$C-ի $0{,}2$ կգ ջուրը լրիվ գոլորշու վերածում։
3. $100\\ ^\\circ$C-ի $1$ կգ ջուրը լցնում են $0\\ ^\\circ$C-ի $1$ կգ սառույցի վրա։ Ամբողջ սառույցը կհալվի՞։
4. $200\\ ^\\circ$C-ի $0{,}5$ կգ պղինձը դնում են $20\\ ^\\circ$C-ի $1$ կգ ջրի մեջ։ Գտիր վերջնական ջերմաստիճանը։
5. $80\\%$ ՕԳԳ ունեցող տաքացուցիչը ջուրը տաքացնելու համար ծախսում է $600$ կՋ էլեկտրական էներգիա։ Որքա՞նով կտաքացնի $2$ կգ ջուրը։
6. Որքա՞ն ածուխ պետք է այրի $25\\%$ ՕԳԳ ունեցող վառարանը $0\\ ^\\circ$C-ի $10$ կգ սառույցը հալելու համար։
7. $200$ գ ալյումինե թեյնիկում $1$ կգ ջուր է, երկուսն էլ $20\\ ^\\circ$C։ Որքա՞ն ջերմություն է երկուսին հասցնում $100\\ ^\\circ$C։
8. Ինչո՞ւ 7-րդ վարժության պատասխանը գրեթե չի փոխվում, եթե թեյնիկն ալյումինի փոխարեն պղնձից լինի։

### Պատասխաններ

1. $340\\,000 + 4200 \\cdot 1 \\cdot 100 = 340\\,000 + 420\\,000 = 760$ կՋ։
2. $Q = 2\\,300\\,000 \\cdot 0{,}2 = 460$ կՋ։
3. Ջուրը, սառչելով մինչև $0\\ ^\\circ$C, տալիս է $4200 \\cdot 100 = 420$ կՋ, իսկ $1$ կգ սառույցի հալմանը պետք է $340$ կՋ, ուստի այո՝ ամբողջը կհալվի, և խառնուրդը մի քիչ կտաքանա։
4. $380 \\cdot 0{,}5(200 - t) = 4200 \\cdot 1(t - 20) \\Rightarrow 190(200 - t) = 4200(t-20) \\Rightarrow t \\approx 27{,}8\\ ^\\circ$C։
5. Օգտակար $Q = 0{,}8 \\cdot 600\\,000 = 480\\,000$ Ջ, $\\Delta t = 480\\,000/(4200 \\cdot 2) \\approx 57\\ ^\\circ$C։
6. $Q = 340\\,000 \\cdot 10 = 3{,}4$ ՄՋ, $Q_1 = 3{,}4/0{,}25 = 13{,}6$ ՄՋ, $m = 13{,}6/27 \\approx 0{,}5$ կգ։
7. $920 \\cdot 0{,}2 \\cdot 80 + 4200 \\cdot 1 \\cdot 80 = 14\\,720 + 336\\,000 \\approx 351$ կՋ։
8. Թեյնիկի բաժինը լրիվի մոտ $4\\%$-ն է, իսկ պղինձն ալյումինից տարբերվում է ընդամենը մի քանի կիլոջոուլով։`,
        ru: `## Четыре формулы, одна таблица

| Процесс | Формула | Знак $Q$ |
|---|---|---|
| нагревание или охлаждение | $Q = cm(t_2 - t_1)$ | $+$ нагревание, $-$ охлаждение |
| плавление / отвердевание | $Q = \\lambda m$ | $+$ плавление, $-$ отвердевание |
| парообразование / конденсация | $Q = Lm$ | $+$ парообразование, $-$ конденсация |
| сгорание топлива | $Q = qm$ | выделяется |

Постоянные для воды: $c_{\\text{вода}} = 4200$, $c_{\\text{лёд}} = 2100$ Дж/(кг·$^\\circ$C), $\\lambda = 3{,}4 \\cdot 10^5$ Дж/кг, $L = 2{,}3 \\cdot 10^6$ Дж/кг.

## Как спланировать решение

1. Выпиши данные в единицах СИ (граммы → килограммы!).
2. Проследи за веществом **этап за этапом** и назови каждый этап.
3. Для каждого этапа запиши формулу и сложи результаты.
4. Если два тела обмениваются теплотой, запиши $Q_{\\text{отд}} = Q_{\\text{получ}}$.
5. Если речь о печи или нагревателе, учти $\\eta$.
6. Проверь единицы и порядок величины ответа.

## Разобранный пример 1 (три этапа)

> Сколько теплоты превратит $0{,}5$ кг льда при $-20\\ ^\\circ$C в воду при $40\\ ^\\circ$C?

| Этап | Вычисление |
|---|---|
| нагревание льда до $0\\ ^\\circ$C | $2100 \\cdot 0{,}5 \\cdot 20 = 21\\,000$ Дж |
| плавление льда | $340\\,000 \\cdot 0{,}5 = 170\\,000$ Дж |
| нагревание воды до $40\\ ^\\circ$C | $4200 \\cdot 0{,}5 \\cdot 40 = 84\\,000$ Дж |

$$Q = 21\\,000 + 170\\,000 + 84\\,000 = 275\\,000\\ \\text{Дж} = 275\\ \\text{кДж}$$

## Разобранный пример 2 (тепловой баланс)

> Горячую железную деталь массой $0{,}4$ кг при $300\\ ^\\circ$C опускают в $2$ кг воды при $15\\ ^\\circ$C. Найди конечную температуру.

$$460 \\cdot 0{,}4 \\cdot (300 - t) = 4200 \\cdot 2 \\cdot (t - 15)$$
$$184(300 - t) = 8400(t - 15)$$
$$55\\,200 - 184t = 8400t - 126\\,000 \\Rightarrow 8584t = 181\\,200 \\Rightarrow t \\approx 21\\ ^\\circ\\text{C}$$

Вода почти не нагрелась: её теплоёмкость намного больше.

## Разобранный пример 3 (с КПД)

> Печь с КПД $40\\%$ топят дровами. Сколько дров нужно, чтобы вскипятить $3$ кг воды, взятой при $20\\ ^\\circ$C?

Полезная теплота: $Q = 4200 \\cdot 3 \\cdot 80 = 1\\,008\\,000$ Дж.
Теплота дров: $Q_1 = Q/\\eta = 1\\,008\\,000/0{,}4 = 2\\,520\\,000$ Дж.
Масса: $m = Q_1/q = 2\\,520\\,000/10\\,000\\,000 = 0{,}252$ кг $\\approx 250$ г.

### Упражнения

1. Сколько теплоты превратит $1$ кг льда при $0\\ ^\\circ$C в воду при $100\\ ^\\circ$C?
2. Сколько теплоты полностью обратит $0{,}2$ кг воды при $100\\ ^\\circ$C в пар?
3. $1$ кг воды при $100\\ ^\\circ$C выливают на $1$ кг льда при $0\\ ^\\circ$C. Весь ли лёд расплавится?
4. $0{,}5$ кг меди при $200\\ ^\\circ$C опускают в $1$ кг воды при $20\\ ^\\circ$C. Найди конечную температуру.
5. Нагреватель с КПД $80\\%$ расходует $600$ кДж электрической энергии на нагревание воды. На сколько он нагреет $2$ кг воды?
6. Сколько угля должна сжечь печь с КПД $25\\%$, чтобы расплавить $10$ кг льда при $0\\ ^\\circ$C?
7. В алюминиевом чайнике массой $200$ г находится $1$ кг воды, оба при $20\\ ^\\circ$C. Сколько теплоты доведёт их до $100\\ ^\\circ$C?
8. Почему ответ задачи 7 почти не изменится, если чайник будет медным, а не алюминиевым?

### Ответы

1. $340\\,000 + 4200 \\cdot 1 \\cdot 100 = 340\\,000 + 420\\,000 = 760$ кДж.
2. $Q = 2\\,300\\,000 \\cdot 0{,}2 = 460$ кДж.
3. Вода, остывая до $0\\ ^\\circ$C, отдаёт $4200 \\cdot 100 = 420$ кДж, а на плавление $1$ кг льда нужно $340$ кДж, значит да — весь лёд растает, и смесь немного нагреется.
4. $380 \\cdot 0{,}5(200 - t) = 4200 \\cdot 1(t - 20) \\Rightarrow 190(200 - t) = 4200(t-20) \\Rightarrow t \\approx 27{,}8\\ ^\\circ$C.
5. Полезная $Q = 0{,}8 \\cdot 600\\,000 = 480\\,000$ Дж; $\\Delta t = 480\\,000/(4200 \\cdot 2) \\approx 57\\ ^\\circ$C.
6. $Q = 340\\,000 \\cdot 10 = 3{,}4$ МДж; $Q_1 = 3{,}4/0{,}25 = 13{,}6$ МДж; $m = 13{,}6/27 \\approx 0{,}5$ кг.
7. $920 \\cdot 0{,}2 \\cdot 80 + 4200 \\cdot 1 \\cdot 80 = 14\\,720 + 336\\,000 \\approx 351$ кДж.
8. Доля чайника — около $4\\%$ от всего, а медь отличается от алюминия лишь на несколько килоджоулей.`,
      },
      [
        q(t("To find the heat of melting you use", "Հալման ջերմությունը գտնելու համար օգտագործում են", "Для теплоты плавления используют"), [
          t("Q = λm", "Q = λm", "Q = λm"),
          t("Q = cmΔt", "Q = cmΔt", "Q = cmΔt"),
          t("Q = qm", "Q = qm", "Q = qm"),
        ], 0),
        q(t("Turning 1 kg of ice at 0 °C into water at 100 °C needs", "0 °C-ի 1 կգ սառույցը 100 °C ջուր դարձնելու համար պետք է", "Превращение 1 кг льда при 0 °C в воду при 100 °C требует"), [
          t("420 kJ", "420 կՋ", "420 кДж"),
          t("760 kJ", "760 կՋ", "760 кДж"),
          t("340 kJ", "340 կՋ", "340 кДж"),
        ], 1),
        q(t("In a heat balance problem the correct equation is", "Ջերմային հաշվեկցության խնդրում ճիշտ հավասարումն է", "В задаче на тепловой баланс верное уравнение —"), [
          t("Q_{given} + Q_{taken} = 0 with both positive", "Q_{տված} + Q_{ստացված} = 0՝ երկուսն էլ դրական", "Q_{отд} + Q_{получ} = 0 при положительных обоих"),
          t("Q_{given} = 2 Q_{taken}", "Q_{տված} = 2 Q_{ստացված}", "Q_{отд} = 2 Q_{получ}"),
          t("Q_{given} = Q_{taken}", "Q_{տված} = Q_{ստացված}", "Q_{отд} = Q_{получ}"),
        ], 2),
        q(t("A heater of efficiency 50% spends 200 kJ. The water receives", "50% ՕԳԳ ունեցող տաքացուցիչը ծախսում է 200 կՋ։ Ջուրը ստանում է", "Нагреватель с КПД 50% расходует 200 кДж. Вода получает"), [
          t("100 kJ", "100 կՋ", "100 кДж"),
          t("200 kJ", "200 կՋ", "200 кДж"),
          t("400 kJ", "400 կՋ", "400 кДж"),
        ], 0),
        q(t("Before computing, masses given in grams must be", "Հաշվելուց առաջ գրամներով տրված զանգվածները պետք է", "Перед вычислением массы, данные в граммах, надо"), [
          t("left as they are", "թողնել այնպես, ինչպես են", "оставить как есть"),
          t("converted to kilograms", "վերածել կիլոգրամների", "перевести в килограммы"),
          t("converted to tonnes", "վերածել տոննաների", "перевести в тонны"),
        ], 1),
        q(t("When hot iron is dropped into water, the water warms only a little because", "Երբ տաք երկաթը գցում են ջրի մեջ, ջուրը քիչ է տաքանում, քանի որ", "Когда горячее железо опускают в воду, вода нагревается мало, потому что"), [
          t("iron gives off no heat", "երկաթը ջերմություն չի տալիս", "железо не отдаёт теплоту"),
          t("water boils at once", "ջուրն անմիջապես եռում է", "вода сразу кипит"),
          t("water has a much larger heat capacity", "ջրի ջերմունակությունը շատ ավելի մեծ է", "теплоёмкость воды намного больше"),
        ], 2),
      ],
    ),
  ],
};
