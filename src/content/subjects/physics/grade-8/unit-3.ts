import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Electromagnetic phenomena", "Էլեկտրամագնիսական երևույթներ", "Электромагнитные явления"),
  summary: t("Magnetic field of a current, electromagnets, permanent magnets, Earth's field, electric motor.", "Հոսանքի մագնիսական դաշտ, էլեկտրամագնիսներ, հաստատուն մագնիսներ, Երկրի դաշտ, էլեկտրաշարժիչ։", "Магнитное поле тока, электромагниты, постоянные магниты, поле Земли, электродвигатель."),
  lessons: [
    lesson(
      "magnetic-field-current",
      ["Magnetic field of a current; field lines", "Հոսանքի մագնիսական դաշտ, դաշտի գծեր", "Магнитное поле тока; магнитные линии"],
      {
        en: ["Describe Oersted's experiment", "Draw the magnetic lines of a straight wire and of a coil", "Use the rule of the right hand to find the direction of the lines"],
        hy: ["Նկարագրել Էրստեդի փորձը", "Պատկերել ուղիղ հաղորդչի և կոճի մագնիսական գծերը", "Աջ ձեռքի կանոնով որոշել գծերի ուղղությունը"],
        ru: ["Описывать опыт Эрстеда", "Изображать магнитные линии прямого провода и катушки", "Определять направление линий правилом правой руки"],
      },
      {
        en: `## Oersted's experiment

In $1820$ the Danish physicist Hans Christian Oersted put a compass under a straight wire. While the circuit was open the needle pointed north. The moment he closed the circuit the needle turned across the wire, and when he reversed the current it turned the other way.

> **Around every current there is a magnetic field.**

Electricity and magnetism, studied separately for centuries, turned out to be two sides of one thing. Oersted's small experiment began the science of electromagnetism, and with it the electric motor, the generator and the telegraph.

## How we picture a magnetic field

A magnetic field is shown by **magnetic lines**. Iron filings sprinkled on a sheet of card above a wire arrange themselves along these lines, and a small compass placed anywhere in the field turns along the line through that point.

| Conductor | Shape of the lines |
|---|---|
| Straight wire | closed circles around the wire |
| Flat coil | circles threading the coil |
| Solenoid (long coil) | like the lines of a bar magnet: out of one end, round, into the other |

Magnetic lines are always **closed** curves — they have no beginning and no end. This is a deep difference from electric field lines, which start and finish on charges.

### The right-hand rule

Grasp the wire with your right hand so that the thumb points along the current. Then your other fingers curl the way the magnetic lines go.

For a coil: curl the fingers of the right hand along the current in the turns, and the thumb points to the end that acts as the **north** pole.

## What the field depends on

The field of a current is stronger when
- the current is larger,
- you are nearer the wire,
- (for a coil) there are more turns.

### Exercises

1. What did Oersted observe when he closed the circuit?
2. What conclusion follows from his experiment?
3. What shape have the magnetic lines of a straight current?
4. How do magnetic lines differ from electric field lines?
5. How can you find the direction of the lines around a wire?
6. The current in a wire is reversed. What happens to the compass needle beside it?
7. Name two ways to make the field of a coil stronger.
8. Why does a compass beside a switched-off wire point north?

### Answers

1. The compass needle turned across the wire.
2. A magnetic field exists around any current.
3. Closed circles around the wire, in a plane perpendicular to it.
4. Magnetic lines are closed; electric lines start and end on charges.
5. By the right-hand rule: the thumb along the current, the fingers along the lines.
6. It turns to the opposite direction.
7. Increase the current; add more turns (or bring an iron core, as in the next lesson).
8. There is no current, so the only field there is the Earth's.`,
        hy: `## Էրստեդի փորձը

$1820$ թվականին դանիացի ֆիզիկոս Հանս Քրիստիան Էրստեդը կողմնացույցը դրեց ուղիղ հաղորդչի տակ։ Քանի դեռ շղթան բաց էր, սլաքը ցույց էր տալիս հյուսիս։ Հենց շղթան փակեց, սլաքը շրջվեց հաղորդչի լայնքով, իսկ երբ հոսանքի ուղղությունը փոխեց, սլաքը շրջվեց հակառակ կողմ։

> **Ամեն հոսանքի շուրջ կա մագնիսական դաշտ։**

Դարեր շարունակ առանձին ուսումնասիրված էլեկտրականությունն ու մագնիսականությունը պարզվեց՝ մեկ բանի երկու կողմերն են։ Էրստեդի փոքրիկ փորձը սկիզբ դրեց էլեկտրամագնիսականության գիտությանը, իսկ նրա հետ՝ էլեկտրաշարժիչին, գեներատորին և հեռագրին։

## Ինչպես ենք պատկերում մագնիսական դաշտը

Մագնիսական դաշտը ցույց է տրվում **մագնիսական գծերով**։ Հաղորդչի վրայի ստվարաթղթին ցանված երկաթե թեփը դասավորվում է այս գծերով, իսկ դաշտի ցանկացած կետում դրված փոքր կողմնացույցը շրջվում է այդ կետով անցնող գծի ուղղությամբ։

| Հաղորդիչ | Գծերի տեսքը |
|---|---|
| Ուղիղ հաղորդիչ | փակ շրջանագծեր հաղորդչի շուրջ |
| Հարթ կոճ | կոճի միջով անցնող շրջանագծեր |
| Սոլենոիդ (երկար կոճ) | ինչպես ձողաձև մագնիսի գծերը՝ դուրս մի ծայրից, շուրջը, ներս մյուսից |

Մագնիսական գծերը միշտ **փակ** կորեր են՝ սկիզբ և վերջ չունեն։ Սա խորը տարբերություն է էլեկտրական դաշտի գծերից, որոնք սկսվում և ավարտվում են լիցքերի վրա։

### Աջ ձեռքի կանոնը

Բռնիր հաղորդիչն աջ ձեռքով այնպես, որ բութ մատը ցույց տա հոսանքի ուղղությամբ։ Այդ ժամանակ մյուս մատները ծալվում են մագնիսական գծերի ուղղությամբ։

Կոճի համար՝ աջ ձեռքի մատները ծալիր գալարների հոսանքի ուղղությամբ, և բութ մատը ցույց կտա այն ծայրը, որը **հյուսիսային** բևեռն է։

## Ինչից է կախված դաշտը

Հոսանքի դաշտն ավելի ուժեղ է, երբ
- հոսանքն ավելի մեծ է,
- ավելի մոտ ես հաղորդչին,
- (կոճի համար) գալարներն ավելի շատ են։

### Վարժություններ

1. Ի՞նչ նկատեց Էրստեդը, երբ փակեց շղթան։
2. Ի՞նչ եզրակացություն է հետևում նրա փորձից։
3. Ի՞նչ տեսք ունեն ուղիղ հոսանքի մագնիսական գծերը։
4. Ինչո՞վ են մագնիսական գծերը տարբերվում էլեկտրական դաշտի գծերից։
5. Ինչպե՞ս կարելի է գտնել հաղորդչի շուրջ գծերի ուղղությունը։
6. Հաղորդչի հոսանքի ուղղությունը փոխվում է։ Ի՞նչ է լինում կողքի կողմնացույցի սլաքին։
7. Նշիր կոճի դաշտն ուժեղացնելու երկու եղանակ։
8. Ինչո՞ւ է անջատված հաղորդչի կողքի կողմնացույցը ցույց տալիս հյուսիս։

### Պատասխաններ

1. Կողմնացույցի սլաքը շրջվեց հաղորդչի լայնքով։
2. Ցանկացած հոսանքի շուրջ կա մագնիսական դաշտ։
3. Փակ շրջանագծեր հաղորդչի շուրջ՝ նրան ուղղահայաց հարթությունում։
4. Մագնիսական գծերը փակ են, էլեկտրականները սկսվում և ավարտվում են լիցքերի վրա։
5. Աջ ձեռքի կանոնով՝ բութ մատը հոսանքի ուղղությամբ, մատները՝ գծերի ուղղությամբ։
6. Շրջվում է հակառակ ուղղությամբ։
7. Մեծացնել հոսանքը, ավելացնել գալարները (կամ ներս տանել երկաթե միջուկ, ինչպես հաջորդ դասում)։
8. Հոսանք չկա, ուստի այնտեղ միակ դաշտն Երկրի դաշտն է։`,
        ru: `## Опыт Эрстеда

В $1820$ году датский физик Ханс Кристиан Эрстед поместил компас под прямым проводом. Пока цепь была разомкнута, стрелка показывала на север. Как только он замкнул цепь, стрелка повернулась поперёк провода, а когда он изменил направление тока, стрелка повернулась в другую сторону.

> **Вокруг каждого тока существует магнитное поле.**

Электричество и магнетизм, которые веками изучали отдельно, оказались двумя сторонами одного. Маленький опыт Эрстеда положил начало науке об электромагнетизме, а с ней — электродвигателю, генератору и телеграфу.

## Как изображают магнитное поле

Магнитное поле показывают **магнитными линиями**. Железные опилки, насыпанные на картон над проводом, укладываются вдоль этих линий, а маленький компас в любой точке поля поворачивается вдоль линии, проходящей через эту точку.

| Проводник | Вид линий |
|---|---|
| Прямой провод | замкнутые окружности вокруг провода |
| Плоская катушка | окружности, пронизывающие катушку |
| Соленоид (длинная катушка) | как линии полосового магнита: из одного конца, вокруг, в другой |

Магнитные линии всегда **замкнуты** — у них нет ни начала, ни конца. Это глубокое отличие от линий электрического поля, которые начинаются и заканчиваются на зарядах.

### Правило правой руки

Обхвати провод правой рукой так, чтобы большой палец указывал по току. Тогда остальные пальцы согнуты по направлению магнитных линий.

Для катушки: согни пальцы правой руки по току в витках, и большой палец укажет на тот конец, который является **северным** полюсом.

## От чего зависит поле

Поле тока сильнее, когда
- ток больше,
- ты ближе к проводу,
- (для катушки) витков больше.

### Упражнения

1. Что заметил Эрстед, когда замкнул цепь?
2. Какой вывод следует из его опыта?
3. Какой вид имеют магнитные линии прямого тока?
4. Чем магнитные линии отличаются от линий электрического поля?
5. Как найти направление линий вокруг провода?
6. Направление тока в проводе изменили. Что произойдёт со стрелкой компаса рядом?
7. Назови два способа усилить поле катушки.
8. Почему компас рядом с отключённым проводом показывает на север?

### Ответы

1. Стрелка компаса повернулась поперёк провода.
2. Вокруг любого тока существует магнитное поле.
3. Замкнутые окружности вокруг провода, в плоскости, перпендикулярной ему.
4. Магнитные линии замкнуты; электрические начинаются и заканчиваются на зарядах.
5. По правилу правой руки: большой палец по току, остальные пальцы по линиям.
6. Повернётся в противоположную сторону.
7. Увеличить ток; добавить витков (или ввести железный сердечник, как в следующем уроке).
8. Тока нет, поэтому там действует только поле Земли.`,
      },
      [
        q(t("Oersted's experiment showed that", "Էրստեդի փորձը ցույց տվեց, որ", "Опыт Эрстеда показал, что"), [
          t("a magnetic field exists around a current", "հոսանքի շուրջ կա մագնիսական դաշտ", "вокруг тока существует магнитное поле"),
          t("a magnet has only one pole", "մագնիսն ունի միայն մեկ բևեռ", "у магнита только один полюс"),
          t("current heats a wire", "հոսանքը տաքացնում է լարը", "ток нагревает провод"),
        ], 0),
        q(t("The magnetic lines of a straight current are", "Ուղիղ հոսանքի մագնիսական գծերը", "Магнитные линии прямого тока —"), [
          t("straight lines along the wire", "ուղիղ գծեր՝ հաղորդչի երկայնքով", "прямые вдоль провода"),
          t("closed circles around the wire", "փակ շրջանագծեր հաղորդչի շուրջ", "замкнутые окружности вокруг провода"),
          t("lines starting on the wire and going to infinity", "գծեր, որոնք սկսվում են հաղորդչից և գնում անվերջություն", "линии, начинающиеся на проводе и идущие в бесконечность"),
        ], 1),
        q(t("Magnetic lines are always", "Մագնիսական գծերը միշտ", "Магнитные линии всегда"), [
          t("straight", "ուղիղ են", "прямые"),
          t("open", "բաց են", "разомкнуты"),
          t("closed", "փակ են", "замкнуты"),
        ], 2),
        q(t("To find the direction of the lines around a wire you use", "Հաղորդչի շուրջ գծերի ուղղությունը գտնելու համար օգտագործում են", "Для направления линий вокруг провода используют"), [
          t("the right-hand rule", "աջ ձեռքի կանոնը", "правило правой руки"),
          t("Ohm's law", "Օհմի օրենքը", "закон Ома"),
          t("the Joule–Lenz law", "Ջոուլ–Լենցի օրենքը", "закон Джоуля–Ленца"),
        ], 0),
        q(t("The field of a coil becomes stronger if", "Կոճի դաշտն ուժեղանում է, եթե", "Поле катушки усиливается, если"), [
          t("the current is reduced", "հոսանքը նվազեցվի", "уменьшить ток"),
          t("more turns are added", "ավելացվեն գալարները", "добавить витков"),
          t("the coil is made of plastic", "կոճը պատրաստվի պլաստմասսայից", "сделать катушку из пластмассы"),
        ], 1),
        q(t("If the current in a wire is reversed, the compass needle beside it", "Եթե հաղորդչի հոսանքի ուղղությունը փոխվի, կողքի կողմնացույցի սլաքը", "Если изменить направление тока в проводе, стрелка компаса рядом"), [
          t("stops moving", "դադարում է շարժվել", "перестанет двигаться"),
          t("does not change", "չի փոխվում", "не изменится"),
          t("turns to the opposite direction", "շրջվում է հակառակ ուղղությամբ", "повернётся в противоположную сторону"),
        ], 2),
      ],
    ),
    lesson(
      "electromagnets",
      ["Electromagnets and their uses", "Էլեկտրամագնիսներ և դրանց կիրառումը", "Электромагниты и их применение"],
      {
        en: ["Explain how an iron core strengthens the field of a coil", "List the three ways of changing the strength of an electromagnet", "Describe an electric bell, a relay and a lifting magnet"],
        hy: ["Բացատրել, թե ինչպես է երկաթե միջուկն ուժեղացնում կոճի դաշտը", "Թվարկել էլեկտրամագնիսի ուժը փոխելու երեք եղանակը", "Նկարագրել էլեկտրական զանգը, ռելեն և բարձրացնող մագնիսը"],
        ru: ["Объяснять, как железный сердечник усиливает поле катушки", "Перечислять три способа изменить силу электромагнита", "Описывать электрический звонок, реле и подъёмный магнит"],
      },
      {
        en: `## A coil with an iron core

A coil of wire carrying a current has a magnetic field like a bar magnet, but a weak one. Push a soft iron rod inside it, and the field becomes **hundreds of times** stronger: the iron itself becomes magnetised and adds its own field to the coil's.

A coil with an iron core is an **electromagnet**. Its great advantage over a permanent magnet is that it can be switched on and off, and its strength can be changed at will.

## How to change its strength

| To make it stronger | Why |
|---|---|
| increase the current | stronger field of each turn |
| add more turns | the fields of the turns add up |
| use a core of soft iron, and a thicker one | the iron multiplies the field |

The core must be **soft** iron: it magnetises strongly but loses its magnetism as soon as the current stops. Steel keeps its magnetism and would make the magnet impossible to switch off.

## Where electromagnets are used

**Electric bell.** The current flows through the electromagnet, which pulls an iron armature with a hammer. The hammer strikes the bell, and at the same moment the armature breaks the circuit. The magnet releases it, the contact closes again, and the cycle repeats many times a second.

**Relay.** A small current in the coil of a relay pulls an armature which closes the contacts of a second, powerful circuit. This way a weak signal, say from a thermostat or a car ignition key, switches a heavy current safely. Relays also work in automatic switches and in telephone exchanges.

**Lifting magnet.** A crane at a scrapyard lifts tons of steel: switch the current on and the load sticks, switch it off and it drops exactly where wanted.

**Other uses.** Loudspeakers, headphones, microphones, electric locks, magnetic separators that pull iron out of grain or ore, and the huge magnets of particle accelerators and medical scanners.

### Exercises

1. What is an electromagnet?
2. Why is the core of an electromagnet made of soft iron and not of steel?
3. Name three ways to make an electromagnet stronger.
4. Explain why the hammer of an electric bell strikes again and again.
5. What is the use of a relay?
6. Why is a lifting magnet better than a hook for scrap steel?
7. The current in an electromagnet is doubled. Will it lift more?
8. Give three devices in a home that contain an electromagnet.

### Answers

1. A coil with an iron core, whose magnetic field exists only while the current flows.
2. Soft iron loses its magnetism when the current stops, so the magnet can be switched off.
3. More current, more turns, a thicker soft iron core.
4. Attracting the armature breaks the circuit, the magnet lets go, the contact closes, and so on.
5. A small current can switch a large one, safely and at a distance.
6. It picks up and releases shapeless loads without being attached to them.
7. Yes, a larger current makes a stronger field, up to the point where the iron saturates.
8. A doorbell, a loudspeaker, a washing machine valve, an electric lock (any three).`,
        hy: `## Կոճ՝ երկաթե միջուկով

Հոսանք կրող լարի կոճն ունի ձողաձև մագնիսի նման մագնիսական դաշտ, բայց թույլ։ Նրա ներսը մտցրու փափուկ երկաթի ձող, և դաշտը դառնում է **հարյուրավոր անգամ** ավելի ուժեղ. երկաթն ինքը մագնիսանում է և իր դաշտն ավելացնում կոճի դաշտին։

Երկաթե միջուկով կոճը **էլեկտրամագնիս** է։ Հաստատուն մագնիսի համեմատ նրա մեծ առավելությունն այն է, որ կարելի է միացնել և անջատել, իսկ ուժը փոխել ըստ ցանկության։

## Ինչպես փոխել նրա ուժը

| Ուժեղացնելու համար | Ինչու |
|---|---|
| մեծացնել հոսանքը | ամեն գալարի դաշտն ավելի ուժեղ է |
| ավելացնել գալարները | գալարների դաշտերը գումարվում են |
| օգտագործել փափուկ երկաթի միջուկ, և ավելի հաստ | երկաթը բազմապատկում է դաշտը |

Միջուկը պետք է լինի **փափուկ** երկաթից. այն ուժեղ մագնիսանում է, բայց կորցնում է մագնիսականությունը հենց հոսանքը դադարում է։ Պողպատը պահում է մագնիսականությունը, և մագնիսն անհնար կլիներ անջատել։

## Որտեղ են օգտագործվում էլեկտրամագնիսները

**Էլեկտրական զանգ։** Հոսանքն անցնում է էլեկտրամագնիսով, որը ձգում է մրճակով երկաթե խարիսխը։ Մրճակը հարվածում է զանգին, և նույն պահին խարիսխը խզում է շղթան։ Մագնիսը բաց է թողնում, հպակը նորից փակվում է, և ցիկլը կրկնվում է վայրկյանում շատ անգամ։

**Ռելե։** Ռելեի կոճի փոքր հոսանքը ձգում է խարիսխը, որը փակում է երկրորդ՝ հզոր շղթայի հպակները։ Այսպես թույլ ազդանշանը, օրինակ՝ ջերմակարգավորիչից կամ մեքենայի բանալուց, անվտանգ միացնում է մեծ հոսանք։ Ռելեներն աշխատում են նաև ավտոմատ անջատիչներում և հեռախոսային կայաններում։

**Բարձրացնող մագնիս։** Ջարդոնի բակում կռունկը բարձրացնում է տոննաներով պողպատ. հոսանքը միացնում ես՝ բեռը կպչում է, անջատում ես՝ ընկնում հենց այնտեղ, որտեղ պետք է։

**Այլ կիրառումներ։** Բարձրախոսներ, ականջակալներ, խոսափողեր, էլեկտրական կողպեքներ, մագնիսական անջատիչներ, որոնք երկաթը հանում են հացահատիկից կամ հանքաքարից, և մասնիկների արագացուցիչների ու բժշկական սկաներների հսկա մագնիսները։

### Վարժություններ

1. Ի՞նչ է էլեկտրամագնիսը։
2. Ինչո՞ւ է էլեկտրամագնիսի միջուկը փափուկ երկաթից և ոչ պողպատից։
3. Նշիր էլեկտրամագնիսն ուժեղացնելու երեք եղանակ։
4. Բացատրիր, թե ինչու է էլեկտրական զանգի մրճակը նորից ու նորից հարվածում։
5. Ինչի՞ համար է ռելեն։
6. Ինչո՞ւ է բարձրացնող մագնիսը կեռից լավը ջարդոն պողպատի համար։
7. Էլեկտրամագնիսի հոսանքը կրկնապատկվում է։ Ավելի՞ շատ կբարձրացնի։
8. Բեր տան երեք սարք, որոնք պարունակում են էլեկտրամագնիս։

### Պատասխաններ

1. Երկաթե միջուկով կոճ, որի մագնիսական դաշտը գոյություն ունի միայն հոսանքի հոսելու ընթացքում։
2. Փափուկ երկաթը կորցնում է մագնիսականությունը հոսանքի դադարելիս, ուստի մագնիսը կարելի է անջատել։
3. Ավելի մեծ հոսանք, ավելի շատ գալար, փափուկ երկաթի ավելի հաստ միջուկ։
4. Խարիսխը ձգելով խզվում է շղթան, մագնիսը բաց է թողնում, հպակը փակվում է, և այդպես շարունակ։
5. Փոքր հոսանքը կարող է միացնել մեծը՝ անվտանգ և հեռավորությունից։
6. Նա վերցնում և բաց է թողնում անորոշ ձևի բեռները՝ առանց դրանց կապվելու։
7. Այո, ավելի մեծ հոսանքն ավելի ուժեղ դաշտ է տալիս, մինչև երկաթը հասնի հագեցման։
8. Դռան զանգ, բարձրախոս, լվացքի մեքենայի փական, էլեկտրական կողպեք (ցանկացած երեքը)։`,
        ru: `## Катушка с железным сердечником

Катушка с током имеет магнитное поле, похожее на поле полосового магнита, но слабое. Вставь внутрь стержень из мягкого железа, и поле станет **в сотни раз** сильнее: железо само намагничивается и добавляет своё поле к полю катушки.

Катушка с железным сердечником — это **электромагнит**. Его большое преимущество перед постоянным магнитом в том, что его можно включать и выключать, а силу менять по желанию.

## Как изменить его силу

| Чтобы усилить | Почему |
|---|---|
| увеличить ток | поле каждого витка сильнее |
| добавить витков | поля витков складываются |
| взять сердечник из мягкого железа, и потолще | железо многократно усиливает поле |

Сердечник должен быть из **мягкого** железа: оно сильно намагничивается, но теряет магнитные свойства, едва ток прекращается. Сталь сохраняет намагниченность, и такой магнит нельзя было бы выключить.

## Где применяют электромагниты

**Электрический звонок.** Ток идёт через электромагнит, который притягивает железный якорь с молоточком. Молоточек бьёт по чашке звонка, и в тот же момент якорь разрывает цепь. Магнит отпускает его, контакт снова замыкается, и цикл повторяется много раз в секунду.

**Реле.** Малый ток в обмотке реле притягивает якорь, который замыкает контакты второй, мощной цепи. Так слабый сигнал, скажем от термостата или от ключа зажигания, безопасно включает большой ток. Реле работают и в автоматических выключателях, и на телефонных станциях.

**Подъёмный магнит.** Кран на свалке металлолома поднимает тонны стали: включил ток — груз прилип, выключил — упал точно там, где нужно.

**Другие применения.** Громкоговорители, наушники, микрофоны, электрические замки, магнитные сепараторы, вытягивающие железо из зерна или руды, и огромные магниты ускорителей частиц и медицинских томографов.

### Упражнения

1. Что такое электромагнит?
2. Почему сердечник электромагнита делают из мягкого железа, а не из стали?
3. Назови три способа усилить электромагнит.
4. Объясни, почему молоточек звонка бьёт снова и снова.
5. Для чего нужно реле?
6. Почему подъёмный магнит лучше крюка для стального лома?
7. Ток в электромагните удвоили. Поднимет ли он больше?
8. Приведи три домашних прибора, в которых есть электромагнит.

### Ответы

1. Катушка с железным сердечником, магнитное поле которой существует только пока идёт ток.
2. Мягкое железо теряет намагниченность при прекращении тока, поэтому магнит можно выключить.
3. Больший ток, больше витков, более толстый сердечник из мягкого железа.
4. Притягивая якорь, он разрывает цепь, магнит отпускает, контакт замыкается, и так далее.
5. Малым током можно включать большой, безопасно и на расстоянии.
6. Он берёт и отпускает груз неопределённой формы, не прикрепляясь к нему.
7. Да, больший ток даёт более сильное поле, пока железо не дойдёт до насыщения.
8. Дверной звонок, громкоговоритель, клапан стиральной машины, электрический замок (любые три).`,
      },
      [
        q(t("An electromagnet is", "Էլեկտրամագնիսը", "Электромагнит — это"), [
          t("a coil with an iron core carrying a current", "հոսանք կրող կոճ՝ երկաթե միջուկով", "катушка с железным сердечником, по которой идёт ток"),
          t("a piece of steel", "պողպատի կտոր", "кусок стали"),
          t("a charged body", "լիցքավորված մարմին", "заряженное тело"),
        ], 0),
        q(t("The core of an electromagnet is made of soft iron because it", "Էլեկտրամագնիսի միջուկը փափուկ երկաթից է, քանի որ այն", "Сердечник электромагнита делают из мягкого железа, потому что оно"), [
          t("keeps its magnetism for ever", "ընդմիշտ պահում է մագնիսականությունը", "сохраняет намагниченность навсегда"),
          t("loses its magnetism when the current stops", "կորցնում է մագնիսականությունը հոսանքի դադարելիս", "теряет намагниченность при прекращении тока"),
          t("conducts the current better", "ավելի լավ է հոսանք հաղորդում", "лучше проводит ток"),
        ], 1),
        q(t("The field of an electromagnet does NOT become stronger if you", "Էլեկտրամագնիսի դաշտը ՉԻ ուժեղանում, եթե", "Поле электромагнита НЕ усилится, если"), [
          t("increase the current", "մեծացնես հոսանքը", "увеличить ток"),
          t("add more turns", "ավելացնես գալարները", "добавить витков"),
          t("replace the iron core by a wooden one", "երկաթե միջուկը փոխարինես փայտյանով", "заменить железный сердечник деревянным"),
        ], 2),
        q(t("In an electric bell the circuit is broken by", "Էլեկտրական զանգում շղթան խզվում է", "В электрическом звонке цепь разрывается"), [
          t("the moving armature", "շարժվող խարիսխով", "движущимся якорем"),
          t("the fuse", "ապահովիչով", "предохранителем"),
          t("the iron core", "երկաթե միջուկով", "железным сердечником"),
        ], 0),
        q(t("A relay lets you", "Ռելեն թույլ է տալիս", "Реле позволяет"), [
          t("measure voltage", "չափել լարումը", "измерять напряжение"),
          t("switch a large current with a small one", "փոքր հոսանքով միացնել մեծ հոսանք", "включать большой ток малым"),
          t("store electric charge", "պահել էլեկտրական լիցք", "запасать электрический заряд"),
        ], 1),
        q(t("A lifting magnet at a scrapyard works because", "Ջարդոնի բակի բարձրացնող մագնիսն աշխատում է, քանի որ", "Подъёмный магнит на свалке лома работает потому, что"), [
          t("steel is heavy", "պողպատը ծանր է", "сталь тяжёлая"),
          t("the magnet is a permanent one", "մագնիսը հաստատուն է", "магнит постоянный"),
          t("it can be switched on and off", "նրան կարելի է միացնել և անջատել", "его можно включать и выключать"),
        ], 2),
      ],
    ),
    lesson(
      "permanent-magnets",
      ["Permanent magnets; Earth's magnetic field", "Հաստատուն մագնիսներ, Երկրի մագնիսական դաշտ", "Постоянные магниты; магнитное поле Земли"],
      {
        en: ["Describe the poles of a magnet and the rule of their interaction", "Explain magnetisation by the idea of tiny magnetised regions", "Describe the Earth's magnetic field, magnetic poles and magnetic storms"],
        hy: ["Նկարագրել մագնիսի բևեռները և դրանց փոխազդեցության կանոնը", "Բացատրել մագնիսացումը մագնիսացված փոքր տիրույթների գաղափարով", "Նկարագրել Երկրի մագնիսական դաշտը, մագնիսական բևեռները և մագնիսական փոթորիկները"],
        ru: ["Описывать полюсы магнита и правило их взаимодействия", "Объяснять намагничивание с помощью представления о мелких намагниченных областях", "Описывать магнитное поле Земли, магнитные полюсы и магнитные бури"],
      },
      {
        en: `## Poles

A **permanent magnet** keeps its magnetism without any current. Dip a bar magnet in iron filings: they cling in two thick bunches at the ends and almost nowhere in the middle. These ends are the **poles**, called **north** (N) and **south** (S).

> Like poles repel, unlike poles attract.

A magnet attracts iron, steel, nickel and cobalt, and does not attract copper, aluminium, wood or plastic.

**You cannot separate the poles.** Break a magnet in half and each half is a complete magnet with its own N and S. Break it again and the same happens, down to the smallest pieces.

## Why iron can be magnetised

Inside iron there are tiny regions, each already magnetised, pointing in all directions, so their fields cancel. Put the iron in a magnetic field and the regions turn to line up with it: now their fields add and the piece as a whole is a magnet.

- **Soft iron**: the regions turn back when the field is removed, so it loses its magnetism (used for cores).
- **Steel**: the regions stay turned, so it keeps the magnetism (used for permanent magnets).

Heating or striking a magnet disorders the regions and weakens it; above about $770\\ ^\\circ$C iron loses its magnetism completely.

## The Earth is a magnet

A compass needle points north because the Earth itself has a magnetic field, as if a huge magnet were inside it. The field is created by the motion of molten iron in the Earth's core.

| Fact | Detail |
|---|---|
| Geographic poles | the ends of the axis of rotation |
| Magnetic poles | not at the geographic ones; the **south** magnetic pole is near the north geographic pole |
| Declination | the angle between the compass direction and true north |
| Anomalies | regions of iron ore where a compass misleads |

The field protects life: it deflects the charged particles of the solar wind. When the Sun throws out an especially strong stream, the field shakes and a **magnetic storm** follows, with auroras in polar skies and interference in radio and power lines.

Many animals use the field: pigeons, turtles and some fish and insects navigate by it.

### Exercises

1. Which materials does a magnet attract?
2. Where is the field of a bar magnet strongest?
3. A magnet is broken in two. How many poles has each piece?
4. Why does a steel rod stay magnetised but a soft iron one does not?
5. Why does an iron nail become a magnet near a strong magnet?
6. What happens to a magnet that is heated red hot?
7. Where is the south magnetic pole of the Earth?
8. What is a magnetic storm and what causes it?

### Answers

1. Iron, steel, nickel and cobalt.
2. At its poles.
3. Two: each piece is a complete magnet with N and S.
4. In steel the magnetised regions stay lined up; in soft iron they return to disorder.
5. The field turns the nail's own magnetised regions into line.
6. The regions become disordered and it loses its magnetism.
7. Near the north geographic pole.
8. A shaking of the Earth's field caused by a strong stream of particles from the Sun.`,
        hy: `## Բևեռներ

**Հաստատուն մագնիսը** պահում է իր մագնիսականությունն առանց հոսանքի։ Ձողաձև մագնիսը մտցրու երկաթե թեփի մեջ. թեփը կպչում է երկու հաստ փնջով ծայրերին և գրեթե ոչինչ՝ մեջտեղում։ Այս ծայրերը **բևեռներն** են՝ **հյուսիսային** (N) և **հարավային** (S)։

> Համանուն բևեռները վանում են, տարանունները՝ ձգում։

Մագնիսը ձգում է երկաթ, պողպատ, նիկել և կոբալտ, և չի ձգում պղինձ, ալյումին, փայտ կամ պլաստմասսա։

**Բևեռները չի կարելի առանձնացնել։** Մագնիսը կիսիր, և ամեն կես լրիվ մագնիս է՝ իր N-ով և S-ով։ Նորից կիսիր՝ նույնն է լինում, մինչև ամենափոքր կտորները։

## Ինչու կարելի է երկաթը մագնիսացնել

Երկաթի ներսում կան փոքր տիրույթներ՝ ամեն մեկն արդեն մագնիսացված, ուղղված բոլոր կողմերը, ուստի դրանց դաշտերը կոմպենսացվում են։ Երկաթը դիր մագնիսական դաշտում, և տիրույթները շրջվում են՝ դասավորվելով դաշտի ուղղությամբ. հիմա դրանց դաշտերը գումարվում են, և կտորն ամբողջությամբ մագնիս է։

- **Փափուկ երկաթ**՝ դաշտը հեռացնելիս տիրույթները հետ են շրջվում, ուստի կորցնում է մագնիսականությունը (օգտագործվում է միջուկների համար)։
- **Պողպատ**՝ տիրույթները մնում են շրջված, ուստի պահում է մագնիսականությունը (օգտագործվում է հաստատուն մագնիսների համար)։

Մագնիսը տաքացնելը կամ հարվածելը խառնում է տիրույթները և թուլացնում նրան, մոտ $770\\ ^\\circ$C-ից բարձր երկաթը լրիվ կորցնում է մագնիսականությունը։

## Երկիրը մագնիս է

Կողմնացույցի սլաքը ցույց է տալիս հյուսիս, քանի որ Երկիրն ինքն ունի մագնիսական դաշտ, ասես նրա ներսում հսկա մագնիս լինի։ Դաշտը ստեղծվում է Երկրի միջուկում հալված երկաթի շարժմամբ։

| Փաստ | Մանրամասն |
|---|---|
| Աշխարհագրական բևեռներ | պտտման առանցքի ծայրերը |
| Մագնիսական բևեռներ | աշխարհագրականների վրա չեն, **հարավային** մագնիսական բևեռը հյուսիսային աշխարհագրականի մոտ է |
| Շեղում | անկյունը կողմնացույցի ուղղության և իսկական հյուսիսի միջև |
| Անոմալիաներ | երկաթի հանքաքարի տիրույթներ, որտեղ կողմնացույցը մոլորեցնում է |

Դաշտը պաշտպանում է կյանքը՝ շեղում է արեգակնային քամու լիցքավորված մասնիկները։ Երբ Արևը դուրս է նետում հատկապես ուժեղ հոսք, դաշտը ցնցվում է, և հետևում է **մագնիսական փոթորիկ**՝ բևեռային երկնքում բևեռափայլերով և ռադիոյի ու էլեկտրահաղորդման գծերի խանգարումներով։

Շատ կենդանիներ օգտագործում են դաշտը՝ աղավնիները, կրիաները և որոշ ձկներ ու միջատներ նրանով են կողմնորոշվում։

### Վարժություններ

1. Ո՞ր նյութերն է ձգում մագնիսը։
2. Որտե՞ղ է ձողաձև մագնիսի դաշտն ամենաուժեղը։
3. Մագնիսը կիսում են։ Քանի՞ բևեռ ունի ամեն կտորը։
4. Ինչո՞ւ պողպատե ձողը մագնիսացված է մնում, իսկ փափուկ երկաթյանը՝ ոչ։
5. Ինչո՞ւ է երկաթե մեխը մագնիս դառնում ուժեղ մագնիսի մոտ։
6. Ի՞նչ է լինում կարմիր շիկացած տաքացված մագնիսին։
7. Որտե՞ղ է Երկրի հարավային մագնիսական բևեռը։
8. Ի՞նչ է մագնիսական փոթորիկը և ինչն է նրա պատճառը։

### Պատասխաններ

1. Երկաթ, պողպատ, նիկել և կոբալտ։
2. Նրա բևեռների մոտ։
3. Երկու. ամեն կտոր լրիվ մագնիս է՝ N-ով և S-ով։
4. Պողպատում մագնիսացված տիրույթները մնում են դասավորված, փափուկ երկաթում վերադառնում են անկարգության։
5. Դաշտը մեխի սեփական մագնիսացված տիրույթները դասավորում է։
6. Տիրույթները խառնվում են, և նա կորցնում է մագնիսականությունը։
7. Հյուսիսային աշխարհագրական բևեռի մոտ։
8. Երկրի դաշտի ցնցում, որի պատճառն Արևից եկող մասնիկների ուժեղ հոսքն է։`,
        ru: `## Полюсы

**Постоянный магнит** сохраняет намагниченность без всякого тока. Опусти полосовой магнит в железные опилки: они пристают двумя густыми пучками по краям и почти не держатся в середине. Эти края — **полюсы**, **северный** (N) и **южный** (S).

> Одноимённые полюсы отталкиваются, разноимённые притягиваются.

Магнит притягивает железо, сталь, никель и кобальт и не притягивает медь, алюминий, дерево или пластмассу.

**Полюсы нельзя разделить.** Разломи магнит пополам — каждая половина окажется полным магнитом со своими N и S. Разломи снова — то же самое, вплоть до самых мелких частиц.

## Почему железо можно намагнитить

Внутри железа есть маленькие области, каждая уже намагниченная, направленные во все стороны, поэтому их поля компенсируются. Помести железо в магнитное поле, и области повернутся, выстроившись по нему: теперь их поля складываются, и весь кусок — магнит.

- **Мягкое железо**: при снятии поля области возвращаются обратно, и намагниченность исчезает (идёт на сердечники).
- **Сталь**: области остаются повёрнутыми, намагниченность сохраняется (идёт на постоянные магниты).

Нагрев или удары разупорядочивают области и ослабляют магнит; выше примерно $770\\ ^\\circ$C железо теряет намагниченность полностью.

## Земля — магнит

Стрелка компаса показывает на север, потому что у самой Земли есть магнитное поле, как будто внутри неё огромный магнит. Поле создаётся движением расплавленного железа в ядре Земли.

| Факт | Подробность |
|---|---|
| Географические полюсы | концы оси вращения |
| Магнитные полюсы | не совпадают с географическими; **южный** магнитный полюс — около северного географического |
| Магнитное склонение | угол между направлением компаса и истинным севером |
| Аномалии | области залежей железной руды, где компас обманывает |

Поле защищает жизнь: оно отклоняет заряженные частицы солнечного ветра. Когда Солнце выбрасывает особенно сильный поток, поле колеблется и наступает **магнитная буря** — с полярными сияниями и помехами в радиосвязи и линиях электропередачи.

Многие животные пользуются полем: голуби, черепахи, некоторые рыбы и насекомые ориентируются по нему.

### Упражнения

1. Какие материалы притягивает магнит?
2. Где поле полосового магнита сильнее всего?
3. Магнит разломили пополам. Сколько полюсов у каждой части?
4. Почему стальной стержень остаётся намагниченным, а из мягкого железа нет?
5. Почему железный гвоздь становится магнитом возле сильного магнита?
6. Что произойдёт с магнитом, нагретым до красного каления?
7. Где находится южный магнитный полюс Земли?
8. Что такое магнитная буря и чем она вызвана?

### Ответы

1. Железо, сталь, никель и кобальт.
2. У его полюсов.
3. Два: каждая часть — полный магнит с N и S.
4. В стали намагниченные области остаются выстроенными; в мягком железе возвращаются к беспорядку.
5. Поле выстраивает собственные намагниченные области гвоздя.
6. Области разупорядочиваются, и он теряет намагниченность.
7. Около северного географического полюса.
8. Колебания поля Земли, вызванные сильным потоком частиц от Солнца.`,
      },
      [
        q(t("Unlike poles of two magnets", "Երկու մագնիսի տարանուն բևեռները", "Разноимённые полюсы двух магнитов"), [
          t("attract", "ձգում են", "притягиваются"),
          t("repel", "վանում են", "отталкиваются"),
          t("do not interact", "չեն փոխազդում", "не взаимодействуют"),
        ], 0),
        q(t("If a bar magnet is broken in two, each piece has", "Եթե ձողաձև մագնիսը կիսվի, ամեն կտոր ունի", "Если полосовой магнит разломить, у каждой части"), [
          t("only one pole", "միայն մեկ բևեռ", "только один полюс"),
          t("two poles, N and S", "երկու բևեռ՝ N և S", "два полюса, N и S"),
          t("no poles", "բևեռներ չկան", "нет полюсов"),
        ], 1),
        q(t("A magnet does NOT attract", "Մագնիսը ՉԻ ձգում", "Магнит НЕ притягивает"), [
          t("iron", "երկաթը", "железо"),
          t("steel", "պողպատը", "сталь"),
          t("copper", "պղինձը", "медь"),
        ], 2),
        q(t("Permanent magnets are made of steel because in steel", "Հաստատուն մագնիսները պատրաստվում են պողպատից, քանի որ պողպատում", "Постоянные магниты делают из стали, потому что в стали"), [
          t("the magnetised regions stay lined up", "մագնիսացված տիրույթները մնում են դասավորված", "намагниченные области остаются выстроенными"),
          t("there are no magnetised regions", "մագնիսացված տիրույթներ չկան", "нет намагниченных областей"),
          t("the current flows better", "հոսանքն ավելի լավ է հոսում", "ток идёт лучше"),
        ], 0),
        q(t("The magnetic field of the Earth is created by", "Երկրի մագնիսական դաշտը ստեղծվում է", "Магнитное поле Земли создаётся"), [
          t("the Moon", "Լուսնով", "Луной"),
          t("the motion of molten iron in its core", "նրա միջուկում հալված երկաթի շարժմամբ", "движением расплавленного железа в её ядре"),
          t("the atmosphere", "մթնոլորտով", "атмосферой"),
        ], 1),
        q(t("A magnetic storm is caused by", "Մագնիսական փոթորիկի պատճառն է", "Магнитная буря вызвана"), [
          t("an earthquake", "երկրաշարժը", "землетрясением"),
          t("heating of the atmosphere", "մթնոլորտի տաքացումը", "нагреванием атмосферы"),
          t("a strong stream of particles from the Sun", "Արևից եկող մասնիկների ուժեղ հոսքը", "сильным потоком частиц от Солнца"),
        ], 2),
      ],
    ),
    lesson(
      "electric-motor",
      ["Force on a current; electric motor", "Հոսանքի վրա ազդող ուժ, էլեկտրաշարժիչ", "Действие поля на проводник с током; электродвигатель"],
      {
        en: ["Describe the experiment with a wire in the field of a magnet", "Explain how the coil of a motor keeps turning", "Compare an electric motor with a heat engine"],
        hy: ["Նկարագրել փորձը՝ մագնիսի դաշտում գտնվող հաղորդչով", "Բացատրել, թե ինչպես է շարժիչի կոճը շարունակում պտտվել", "Համեմատել էլեկտրաշարժիչը ջերմային շարժիչի հետ"],
        ru: ["Описывать опыт с проводом в поле магнита", "Объяснять, как рамка двигателя продолжает вращаться", "Сравнивать электродвигатель с тепловым двигателем"],
      },
      {
        en: `## A magnetic field pushes a current

Hang a straight wire between the poles of a horseshoe magnet and switch on the current: the wire jumps out of the gap. Reverse the current, and it jumps the other way. Turn the magnet round, and again the direction changes.

> A magnetic field acts with a force on a conductor carrying a current.

The force is larger when the current is larger, the field is stronger, and the part of the wire inside the field is longer. The force is perpendicular both to the wire and to the field, and it vanishes when the wire lies **along** the field.

## From a push to rotation

Put a rectangular coil, not a straight wire, into the field. The current flows one way along one side of the coil and the opposite way along the other, so the forces on the two sides push in opposite directions and the coil **turns**.

Half a turn later the coil would be pushed back. To keep it going the current must be reversed exactly at that moment. This is the job of the **commutator**: a split ring on the axle with two brushes pressing on it. Twice per revolution it swaps the connections, and the coil keeps turning in one direction.

So a motor needs
1. a magnet (permanent or an electromagnet) — the **stator**;
2. a coil on an axle — the **rotor**;
3. a commutator with brushes;
4. a source of current.

Real motors have many coils on an iron rotor, so the torque is smooth and strong.

## Why motors are everywhere

| Electric motor | Heat engine |
|---|---|
| efficiency $90\\%$ and more | $25$–$45\\%$ |
| no fuel burnt where it works, no exhaust | burns fuel, gives out gases |
| quiet, small, starts at once | noisy, needs warm-up and gears |
| needs a supply or a battery | carries its fuel easily |

Motors drive trams, trolleybuses, metro and electric trains, lifts, cranes, pumps, fans, washing machines, drills, hard disks, toys and electric cars. In a tram or an electric car the same machine can also work **backwards**: when braking, the rotor is turned by the wheels and the motor becomes a generator, returning energy to the battery.

### Exercises

1. What happens to a wire with a current placed between the poles of a magnet?
2. Name three things that make this force larger.
3. When is the force on the wire zero?
4. Why does a coil in a magnetic field turn instead of just moving?
5. What is a commutator for?
6. Name the four necessary parts of an electric motor.
7. Give two advantages of an electric motor over a petrol engine.
8. Why is braking in an electric car able to charge its battery?

### Answers

1. The field pushes it, and it moves out of the gap.
2. A larger current, a stronger field, a greater length of wire in the field.
3. When the wire lies along the magnetic field.
4. The currents in its two sides are opposite, so the forces on them are opposite and create a turning effect.
5. To reverse the current in the coil twice per revolution, so the rotation continues in one direction.
6. A magnet (stator), a coil on an axle (rotor), a commutator with brushes, a current source.
7. Much higher efficiency; no exhaust gases (also quiet, starts instantly).
8. The wheels turn the rotor, so the motor works as a generator and sends current back.`,
        hy: `## Մագնիսական դաշտը հրում է հոսանքը

Ուղիղ հաղորդիչը կախիր պայտաձև մագնիսի բևեռների միջև և միացրու հոսանքը. հաղորդիչը դուրս է թռչում բացվածքից։ Փոխիր հոսանքի ուղղությունը՝ թռչում է հակառակ կողմ։ Շրջիր մագնիսը՝ ուղղությունը նորից փոխվում է։

> Մագնիսական դաշտն ուժով ազդում է հոսանք կրող հաղորդչի վրա։

Ուժն ավելի մեծ է, երբ հոսանքն ավելի մեծ է, դաշտն ավելի ուժեղ, և դաշտում գտնվող հաղորդչի մասն ավելի երկար։ Ուժն ուղղահայաց է և՛ հաղորդչին, և՛ դաշտին, և զրոյանում է, երբ հաղորդիչը պառկած է դաշտի **երկայնքով**։

## Հրումից դեպի պտտում

Դաշտում դիր ոչ թե ուղիղ հաղորդիչ, այլ ուղղանկյուն կոճ։ Հոսանքը կոճի մի կողմով հոսում է մեկ ուղղությամբ, մյուսով՝ հակառակ, ուստի երկու կողմերի վրա ազդող ուժերը հրում են հակառակ ուղղություններով, և կոճը **պտտվում** է։

Կես պտույտ անց կոճը հետ կհրվեր։ Որ պտույտը շարունակվի, հոսանքի ուղղությունը պետք է հենց այդ պահին փոխվի։ Սա **կոլեկտորի** գործն է՝ առանցքի վրա կիսված օղակ՝ երկու խոզանակով, որոնք սեղմվում են նրան։ Պտույտի ընթացքում երկու անգամ նա փոխում է միացումները, և կոճը շարունակում է պտտվել մեկ ուղղությամբ։

Այսպիսով շարժիչին պետք է՝
1. մագնիս (հաստատուն կամ էլեկտրամագնիս)՝ **ստատոր**,
2. կոճ՝ առանցքի վրա՝ **ռոտոր**,
3. կոլեկտոր՝ խոզանակներով,
4. հոսանքի աղբյուր։

Իրական շարժիչներն ունեն երկաթե ռոտորի վրա շատ կոճեր, ուստի պտտող մոմենտը սահուն է և ուժեղ։

## Ինչու են շարժիչներն ամենուր

| Էլեկտրաշարժիչ | Ջերմային շարժիչ |
|---|---|
| ՕԳԳ $90\\%$ և ավելի | $25$–$45\\%$ |
| աշխատելու տեղում վառելիք չի այրում, արտանետում չկա | այրում է վառելիք, արձակում գազեր |
| աղմկոտ չէ, փոքր է, միանգամից գործարկվում է | աղմկոտ է, պետք է տաքացում և փոխանցման տուփ |
| պետք է ցանց կամ մարտկոց | վառելիքն իր հետ հեշտ է տանում |

Շարժիչները շարժում են տրամվայներ, տրոլեյբուսներ, մետրոն և էլեկտրագնացքները, վերելակներ, կռունկներ, պոմպեր, օդափոխիչներ, լվացքի մեքենաներ, գայլիկոններ, կոշտ սկավառակներ, խաղալիքներ և էլեկտրամոբիլներ։ Տրամվայում կամ էլեկտրամոբիլում նույն մեքենան կարող է աշխատել նաև **հակառակ**. արգելակելիս ռոտորը պտտվում է անիվներից, և շարժիչը դառնում է գեներատոր՝ էներգիան վերադարձնելով մարտկոցին։

### Վարժություններ

1. Ի՞նչ է լինում մագնիսի բևեռների միջև դրված հոսանք կրող հաղորդչին։
2. Նշիր երեք բան, որոնք մեծացնում են այս ուժը։
3. Ե՞րբ է հաղորդչի վրա ազդող ուժը զրո։
4. Ինչո՞ւ է մագնիսական դաշտում կոճը պտտվում, փոխանակ պարզապես տեղաշարժվի։
5. Ինչի՞ համար է կոլեկտորը։
6. Նշիր էլեկտրաշարժիչի չորս անհրաժեշտ մասը։
7. Բեր էլեկտրաշարժիչի երկու առավելությունը բենզինային շարժիչի համեմատ։
8. Ինչո՞ւ է էլեկտրամոբիլում արգելակումը կարող լիցքավորել մարտկոցը։

### Պատասխաններ

1. Դաշտը հրում է նրան, և նա դուրս է գալիս բացվածքից։
2. Ավելի մեծ հոսանք, ավելի ուժեղ դաշտ, դաշտում հաղորդչի ավելի մեծ երկարություն։
3. Երբ հաղորդիչը պառկած է մագնիսական դաշտի երկայնքով։
4. Նրա երկու կողմերի հոսանքները հակառակ են, ուստի դրանց վրա ազդող ուժերը հակառակ են և պտտող ազդեցություն են ստեղծում։
5. Պտույտի ընթացքում երկու անգամ կոճի հոսանքի ուղղությունը փոխելու համար, որ պտույտը շարունակվի մեկ ուղղությամբ։
6. Մագնիս (ստատոր), առանցքի վրա կոճ (ռոտոր), կոլեկտոր՝ խոզանակներով, հոսանքի աղբյուր։
7. Շատ ավելի բարձր ՕԳԳ, արտանետվող գազեր չկան (նաև՝ աղմկոտ չէ, միանգամից գործարկվում է)։
8. Անիվները պտտում են ռոտորը, ուստի շարժիչն աշխատում է որպես գեներատոր և հոսանք վերադարձնում։`,
        ru: `## Магнитное поле толкает ток

Подвесь прямой провод между полюсами дугообразного магнита и включи ток: провод выскакивает из зазора. Измени направление тока — он выскочит в другую сторону. Переверни магнит — направление снова изменится.

> Магнитное поле действует с силой на проводник с током.

Сила больше, когда больше ток, сильнее поле и длиннее часть провода, находящаяся в поле. Сила перпендикулярна и проводу, и полю, и обращается в нуль, когда провод лежит **вдоль** поля.

## От толчка к вращению

Помести в поле не прямой провод, а прямоугольную рамку. Ток идёт по одной её стороне в одну сторону, по другой — в противоположную, поэтому силы на двух сторонах направлены противоположно и рамка **поворачивается**.

Через пол-оборота рамку толкало бы назад. Чтобы вращение продолжалось, ток надо изменить на противоположный именно в этот момент. Этим занят **коллектор**: разрезанное кольцо на оси с двумя щётками, прижатыми к нему. Дважды за оборот он меняет соединения, и рамка продолжает вращаться в одну сторону.

Итак, двигателю нужны
1. магнит (постоянный или электромагнит) — **статор**;
2. рамка на оси — **ротор**;
3. коллектор со щётками;
4. источник тока.

У настоящих двигателей на железном роторе много рамок, поэтому вращающий момент плавный и сильный.

## Почему двигатели повсюду

| Электродвигатель | Тепловой двигатель |
|---|---|
| КПД $90\\%$ и выше | $25$–$45\\%$ |
| на месте работы не сжигает топливо, нет выхлопа | сжигает топливо, выпускает газы |
| тихий, малый, пускается сразу | шумный, нужен прогрев и коробка передач |
| нужна сеть или аккумулятор | легко несёт топливо с собой |

Двигатели вращают трамваи, троллейбусы, метро и электрички, лифты, краны, насосы, вентиляторы, стиральные машины, дрели, жёсткие диски, игрушки и электромобили. В трамвае или электромобиле та же машина может работать и **наоборот**: при торможении ротор вращается колёсами, и двигатель становится генератором, возвращая энергию аккумулятору.

### Упражнения

1. Что происходит с проводом с током, помещённым между полюсами магнита?
2. Назови три вещи, которые увеличивают эту силу.
3. Когда сила, действующая на провод, равна нулю?
4. Почему рамка в магнитном поле вращается, а не просто смещается?
5. Для чего нужен коллектор?
6. Назови четыре обязательные части электродвигателя.
7. Приведи два преимущества электродвигателя перед бензиновым.
8. Почему торможение в электромобиле может заряжать аккумулятор?

### Ответы

1. Поле его толкает, и он выходит из зазора.
2. Больший ток, более сильное поле, большая длина провода в поле.
3. Когда провод лежит вдоль магнитного поля.
4. Токи в двух её сторонах противоположны, поэтому силы противоположны и создают вращающее действие.
5. Чтобы дважды за оборот менять ток в рамке, и вращение продолжалось в одну сторону.
6. Магнит (статор), рамка на оси (ротор), коллектор со щётками, источник тока.
7. Намного более высокий КПД; нет выхлопных газов (а также тишина и мгновенный пуск).
8. Колёса вращают ротор, двигатель работает как генератор и отдаёт ток обратно.`,
      },
      [
        q(t("A magnetic field acts on a conductor", "Մագնիսական դաշտն ազդում է հաղորդչի վրա", "Магнитное поле действует на проводник"), [
          t("carrying a current", "որը հոսանք է կրում", "с током"),
          t("only if it is made of iron", "միայն եթե երկաթից է", "только если он железный"),
          t("only if it is charged", "միայն եթե լիցքավորված է", "только если он заряжен"),
        ], 0),
        q(t("The force on a wire in a magnetic field is zero when the wire is", "Մագնիսական դաշտում հաղորդչի վրա ազդող ուժը զրո է, երբ հաղորդիչը", "Сила, действующая на провод в магнитном поле, равна нулю, когда провод"), [
          t("perpendicular to the field", "դաշտին ուղղահայաց է", "перпендикулярен полю"),
          t("along the field", "դաշտի երկայնքով է", "лежит вдоль поля"),
          t("made of copper", "պղնձից է", "медный"),
        ], 1),
        q(t("The commutator of a motor", "Շարժիչի կոլեկտորը", "Коллектор двигателя"), [
          t("measures the current", "չափում է հոսանքը", "измеряет ток"),
          t("cools the rotor", "սառեցնում է ռոտորը", "охлаждает ротор"),
          t("reverses the current in the coil twice per revolution", "պտույտի ընթացքում երկու անգամ փոխում է կոճի հոսանքի ուղղությունը", "дважды за оборот меняет ток в рамке"),
        ], 2),
        q(t("The efficiency of an electric motor is about", "Էլեկտրաշարժիչի ՕԳԳ-ն մոտ", "КПД электродвигателя составляет около"), [
          t("90% and more", "90% և ավելի", "90% и более"),
          t("30%", "30%", "30%"),
          t("10%", "10%", "10%"),
        ], 0),
        q(t("The rotating part of a motor is called the", "Շարժիչի պտտվող մասը կոչվում է", "Вращающаяся часть двигателя называется"), [
          t("stator", "ստատոր", "статор"),
          t("rotor", "ռոտոր", "ротор"),
          t("commutator", "կոլեկտոր", "коллектор"),
        ], 1),
        q(t("When an electric car brakes, its motor can work as", "Երբ էլեկտրամոբիլն արգելակում է, նրա շարժիչը կարող է աշխատել որպես", "Когда электромобиль тормозит, его двигатель может работать как"), [
          t("a heater", "տաքացուցիչ", "нагреватель"),
          t("a fuse", "ապահովիչ", "предохранитель"),
          t("a generator", "գեներատոր", "генератор"),
        ], 2),
      ],
    ),
    lesson(
      "electromagnetic-applications",
      ["Electromagnetic devices around us", "Էլեկտրամագնիսական սարքերը մեր շուրջը", "Электромагнитные устройства вокруг нас"],
      {
        en: ["Explain how a loudspeaker, a microphone and a measuring instrument work", "Describe a generator in one sentence", "Trace the chain of energy conversions in an electromagnetic device"],
        hy: ["Բացատրել բարձրախոսի, խոսափողի և չափիչ սարքի աշխատանքը", "Մեկ նախադասությամբ նկարագրել գեներատորը", "Հետևել էներգիայի ձևափոխումների շղթային էլեկտրամագնիսական սարքում"],
        ru: ["Объяснять работу громкоговорителя, микрофона и измерительного прибора", "Описывать генератор одним предложением", "Прослеживать цепочку превращений энергии в электромагнитном устройстве"],
      },
      {
        en: `## One idea, many machines

Two facts are enough to build most of the electrical machines around you:

1. a current creates a magnetic field (Oersted);
2. a magnetic field pushes a current.

## Loudspeaker

A light coil is glued to a paper cone and hangs in the narrow gap of a strong permanent magnet. The changing current of the music makes the field push the coil in and out, the cone shakes the air, and you hear sound.

Chain of energy: electrical → mechanical → sound.

## Microphone and the dynamic effect

Reverse the loudspeaker. Sound shakes a membrane with a coil, the coil moves in the field of a magnet, and a weak current appears in it. This is the beginning of the great idea of **induction**, which you will study in grade 9: *a moving conductor in a magnetic field produces a current.*

Chain of energy: sound → mechanical → electrical.

## Generator

A **generator** is a coil turned by some outside force in the field of a magnet: the motion produces a current. It is a motor working backwards.

| Machine | Energy in | Energy out |
|---|---|---|
| Motor | electrical | mechanical |
| Generator | mechanical | electrical |

In a power station the coil is turned by a steam or water turbine; in a bicycle dynamo, by the wheel; in a wind turbine, by the wind.

## Moving-coil instrument

The pointer of an old ammeter or voltmeter is carried by a small coil between the poles of a magnet, held by a spring. The current turns the coil against the spring, and the stronger the current, the larger the angle. That is why such a scale is even: the angle is proportional to the current.

## Headphones, locks, valves, hard disks

| Device | What the magnet does |
|---|---|
| Headphones | the same as a loudspeaker, in miniature |
| Electric lock | an electromagnet pulls back the bolt |
| Washing-machine valve | an electromagnet lifts a plunger and water flows |
| Hard disk | a tiny electromagnet magnetises spots on the disk; reading is the reverse |
| Magnetic card, ticket | the strip is magnetised in a pattern of spots |

### Exercises

1. Which two facts of electromagnetism lie behind all these devices?
2. Describe the energy conversions in a loudspeaker.
3. How does a microphone differ from a loudspeaker?
4. What is a generator and where is it used?
5. Why is the scale of a moving-coil ammeter even?
6. How does an electric lock open?
7. Name two devices in a phone that contain a magnet.
8. A hair dryer contains both a heating element and a motor. Name the energy conversion in each.

### Answers

1. A current makes a magnetic field; a magnetic field pushes a current.
2. Electrical → mechanical (the coil and cone move) → sound.
3. It works the other way: sound moves the coil and a current appears.
4. A coil turned in a magnetic field, which produces a current; in power stations, bicycle dynamos, wind turbines.
5. The angle of the coil is proportional to the current.
6. An electromagnet pulls the bolt back while the current flows.
7. The loudspeaker and the microphone (also the vibration motor).
8. Heating element: electrical → internal energy (Joule–Lenz). Motor: electrical → mechanical.`,
        hy: `## Մեկ գաղափար, շատ մեքենաներ

Երկու փաստը բավական է քո շուրջ եղած էլեկտրական մեքենաների մեծ մասը կառուցելու համար՝

1. հոսանքը ստեղծում է մագնիսական դաշտ (Էրստեդ),
2. մագնիսական դաշտը հրում է հոսանքը։

## Բարձրախոս

Թեթև կոճը սոսնձված է թղթե կոնին և կախված է ուժեղ հաստատուն մագնիսի նեղ բացվածքում։ Երաժշտության փոփոխվող հոսանքը ստիպում է դաշտին կոճը ներս ու դուրս հրել, կոնը ցնցում է օդը, և դու ձայն ես լսում։

Էներգիայի շղթան՝ էլեկտրական → մեխանիկական → ձայնային։

## Խոսափող և դինամիկ ազդեցություն

Բարձրախոսը շրջիր հակառակը։ Ձայնը ցնցում է կոճով թաղանթը, կոճը շարժվում է մագնիսի դաշտում, և նրանում առաջանում է թույլ հոսանք։ Սա **ինդուկցիայի** մեծ գաղափարի սկիզբն է, որը կուսումնասիրես 9-րդ դասարանում. *մագնիսական դաշտում շարժվող հաղորդիչն առաջացնում է հոսանք։*

Էներգիայի շղթան՝ ձայնային → մեխանիկական → էլեկտրական։

## Գեներատոր

**Գեներատորը** կոճ է, որն արտաքին ուժով պտտվում է մագնիսի դաշտում. շարժումն առաջացնում է հոսանք։ Դա հակառակ աշխատող շարժիչ է։

| Մեքենա | Մտնող էներգիա | Դուրս եկող էներգիա |
|---|---|---|
| Շարժիչ | էլեկտրական | մեխանիկական |
| Գեներատոր | մեխանիկական | էլեկտրական |

Էլեկտրակայանում կոճը պտտվում է գոլորշու կամ ջրի տուրբինով, հեծանիվի դինամոյում՝ անիվով, հողմակայանում՝ քամիով։

## Մագնիսաէլեկտրական սարք

Հին ամպերաչափի կամ վոլտաչափի սլաքը կրում է մագնիսի բևեռների միջև գտնվող փոքր կոճը՝ պահված զսպանակով։ Հոսանքը կոճը պտտում է զսպանակի դեմ, և ինչքան ուժեղ է հոսանքը, այնքան մեծ է անկյունը։ Ահա թե ինչու այդպիսի սանդղակը հավասարաչափ է՝ անկյունը համեմատական է հոսանքին։

## Ականջակալներ, կողպեքներ, փականներ, կոշտ սկավառակներ

| Սարք | Ինչ է անում մագնիսը |
|---|---|
| Ականջակալներ | նույնը, ինչ բարձրախոսը՝ մանրացված |
| Էլեկտրական կողպեք | էլեկտրամագնիսը հետ է քաշում նիգը |
| Լվացքի մեքենայի փական | էլեկտրամագնիսը բարձրացնում է մխոցիկը, և ջուրը հոսում է |
| Կոշտ սկավառակ | փոքրիկ էլեկտրամագնիսը մագնիսացնում է կետեր սկավառակի վրա, ընթերցումը հակառակն է |
| Մագնիսական քարտ, տոմս | ժապավենը մագնիսացվում է կետերի պատկերով |

### Վարժություններ

1. Էլեկտրամագնիսականության ո՞ր երկու փաստը կանգնած է այս բոլոր սարքերի հետևում։
2. Նկարագրիր էներգիայի ձևափոխումները բարձրախոսում։
3. Ինչո՞վ է խոսափողը տարբերվում բարձրախոսից։
4. Ի՞նչ է գեներատորը և որտեղ է օգտագործվում։
5. Ինչո՞ւ է մագնիսաէլեկտրական ամպերաչափի սանդղակը հավասարաչափ։
6. Ինչպե՞ս է բացվում էլեկտրական կողպեքը։
7. Նշիր հեռախոսի երկու մաս, որոնք մագնիս են պարունակում։
8. Մազերի չորանոցն ունի և՛ տաքացնող տարր, և՛ շարժիչ։ Նշիր ամեն մեկի էներգիայի ձևափոխումը։

### Պատասխաններ

1. Հոսանքը ստեղծում է մագնիսական դաշտ, մագնիսական դաշտը հրում է հոսանքը։
2. Էլեկտրական → մեխանիկական (կոճն ու կոնը շարժվում են) → ձայնային։
3. Աշխատում է հակառակ ուղղությամբ. ձայնը շարժում է կոճը, և առաջանում է հոսանք։
4. Մագնիսական դաշտում պտտվող կոճ, որն առաջացնում է հոսանք, էլեկտրակայաններում, հեծանիվի դինամոներում, հողմակայաններում։
5. Կոճի անկյունը համեմատական է հոսանքին։
6. Էլեկտրամագնիսը հոսանքի հոսելու ընթացքում հետ է քաշում նիգը։
7. Բարձրախոսն ու խոսափողը (նաև՝ թրթռոցի շարժիչը)։
8. Տաքացնող տարրը՝ էլեկտրական → ներքին էներգիա (Ջոուլ–Լենց)։ Շարժիչը՝ էլեկտրական → մեխանիկական։`,
        ru: `## Одна идея, много машин

Двух фактов достаточно, чтобы построить большинство электрических машин вокруг тебя:

1. ток создаёт магнитное поле (Эрстед);
2. магнитное поле толкает ток.

## Громкоговоритель

Лёгкая катушка приклеена к бумажному конусу и висит в узком зазоре сильного постоянного магнита. Переменный ток музыки заставляет поле толкать катушку туда и обратно, конус колеблет воздух, и ты слышишь звук.

Цепочка энергии: электрическая → механическая → звуковая.

## Микрофон и динамический эффект

Переверни громкоговоритель. Звук колеблет мембрану с катушкой, катушка движется в поле магнита, и в ней появляется слабый ток. Это начало великой идеи **индукции**, которую ты будешь изучать в 9 классе: *движущийся в магнитном поле проводник создаёт ток.*

Цепочка энергии: звуковая → механическая → электрическая.

## Генератор

**Генератор** — это катушка, которую внешняя сила вращает в поле магнита: движение создаёт ток. Это двигатель, работающий наоборот.

| Машина | Энергия на входе | Энергия на выходе |
|---|---|---|
| Двигатель | электрическая | механическая |
| Генератор | механическая | электрическая |

На электростанции катушку вращает паровая или водяная турбина, в велосипедном динамо — колесо, в ветрогенераторе — ветер.

## Магнитоэлектрический прибор

Стрелку старого амперметра или вольтметра несёт маленькая рамка между полюсами магнита, удерживаемая пружиной. Ток поворачивает рамку против пружины, и чем сильнее ток, тем больше угол. Поэтому такая шкала равномерна: угол пропорционален току.

## Наушники, замки, клапаны, жёсткие диски

| Устройство | Что делает магнит |
|---|---|
| Наушники | то же, что громкоговоритель, в миниатюре |
| Электрический замок | электромагнит отводит засов |
| Клапан стиральной машины | электромагнит поднимает плунжер, и вода течёт |
| Жёсткий диск | крошечный электромагнит намагничивает точки на диске; чтение — обратный процесс |
| Магнитная карта, билет | полоса намагничена узором точек |

### Упражнения

1. Какие два факта электромагнетизма лежат в основе всех этих устройств?
2. Опиши превращения энергии в громкоговорителе.
3. Чем микрофон отличается от громкоговорителя?
4. Что такое генератор и где он применяется?
5. Почему шкала магнитоэлектрического амперметра равномерна?
6. Как открывается электрический замок?
7. Назови две части телефона, в которых есть магнит.
8. В фене есть и нагревательный элемент, и двигатель. Назови превращение энергии в каждом.

### Ответы

1. Ток создаёт магнитное поле; магнитное поле толкает ток.
2. Электрическая → механическая (двигаются катушка и конус) → звуковая.
3. Он работает в обратную сторону: звук двигает катушку, и появляется ток.
4. Катушка, вращаемая в магнитном поле и создающая ток; на электростанциях, в велосипедных динамо, в ветрогенераторах.
5. Угол поворота рамки пропорционален току.
6. Электромагнит отводит засов, пока идёт ток.
7. Громкоговоритель и микрофон (а также вибромотор).
8. Нагревательный элемент: электрическая → внутренняя (Джоуль–Ленц). Двигатель: электрическая → механическая.`,
      },
      [
        q(t("In a loudspeaker the coil moves because", "Բարձրախոսում կոճը շարժվում է, քանի որ", "В громкоговорителе катушка движется потому, что"), [
          t("the magnetic field pushes the current in it", "մագնիսական դաշտը հրում է նրա հոսանքը", "магнитное поле толкает ток в ней"),
          t("the paper cone is heavy", "թղթե կոնը ծանր է", "бумажный конус тяжёлый"),
          t("the coil is charged", "կոճը լիցքավորված է", "катушка заряжена"),
        ], 0),
        q(t("A generator converts", "Գեներատորը ձևափոխում է", "Генератор преобразует"), [
          t("electrical energy into mechanical", "էլեկտրական էներգիան մեխանիկականի", "электрическую энергию в механическую"),
          t("mechanical energy into electrical", "մեխանիկական էներգիան էլեկտրականի", "механическую энергию в электрическую"),
          t("heat into light", "ջերմությունը լույսի", "теплоту в свет"),
        ], 1),
        q(t("A microphone works", "Խոսափողն աշխատում է", "Микрофон работает"), [
          t("like a fuse", "ինչպես ապահովիչ", "как предохранитель"),
          t("like a heating element", "ինչպես տաքացնող տարր", "как нагревательный элемент"),
          t("like a loudspeaker in reverse", "ինչպես հակառակ աշխատող բարձրախոս", "как громкоговоритель наоборот"),
        ], 2),
        q(t("The scale of a moving-coil ammeter is even because", "Մագնիսաէլեկտրական ամպերաչափի սանդղակը հավասարաչափ է, քանի որ", "Шкала магнитоэлектрического амперметра равномерна, потому что"), [
          t("the angle is proportional to the current", "անկյունը համեմատական է հոսանքին", "угол пропорционален току"),
          t("the magnet is weak", "մագնիսը թույլ է", "магнит слабый"),
          t("the spring is made of steel", "զսպանակը պողպատից է", "пружина из стали"),
        ], 0),
        q(t("In an electric lock the electromagnet", "Էլեկտրական կողպեքում էլեկտրամագնիսը", "В электрическом замке электромагнит"), [
          t("heats the door", "տաքացնում է դուռը", "нагревает дверь"),
          t("pulls back the bolt", "հետ է քաշում նիգը", "отводит засов"),
          t("measures the current", "չափում է հոսանքը", "измеряет ток"),
        ], 1),
        q(t("In a heating element the energy conversion is", "Տաքացնող տարրում էներգիայի ձևափոխումն է", "В нагревательном элементе превращение энергии —"), [
          t("mechanical into electrical", "մեխանիկականից էլեկտրական", "механическая в электрическую"),
          t("electrical into sound", "էլեկտրականից ձայնային", "электрическая в звуковую"),
          t("electrical into internal energy", "էլեկտրականից ներքին էներգիա", "электрическая во внутреннюю"),
        ], 2),
      ],
    ),
  ],
};
