import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Electric phenomena", "Էլեկտրական երևույթներ", "Электрические явления"),
  summary: t("Charge, electric field, current, voltage, resistance, Ohm's law, circuits, work and power.", "Լիցք, էլեկտրական դաշտ, հոսանք, լարում, դիմադրություն, Օհմի օրենք, շղթաներ, աշխատանք և հզորություն։", "Заряд, электрическое поле, ток, напряжение, сопротивление, закон Ома, цепи, работа и мощность."),
  lessons: [
    lesson(
      "electrisation",
      ["Electrisation; two kinds of charge", "Էլեկտրականացում, լիցքի երկու տեսակ", "Электризация тел; два рода зарядов"],
      {
        en: ["Describe electrisation by friction and by contact", "State the rule of attraction and repulsion of charges", "Explain how an electroscope works"],
        hy: ["Նկարագրել էլեկտրականացումը շփմամբ և հպմամբ", "Ձևակերպել լիցքերի ձգման և վանման կանոնը", "Բացատրել էլեկտրաչափի աշխատանքը"],
        ru: ["Описывать электризацию трением и соприкосновением", "Формулировать правило притяжения и отталкивания зарядов", "Объяснять, как работает электроскоп"],
      },
      {
        en: `## A comb that lifts paper

Comb dry hair, then hold the comb over small pieces of paper: they jump to it. Rub a plastic ruler on wool and it attracts a thin stream of water. The comb and the ruler have become **electrified**: they have an **electric charge**.

Electrisation happens

- **by friction** — rubbing glass with silk, ebonite or plastic with wool;
- **by contact** — touching an uncharged body with a charged one;
- **by influence** — bringing a charged body near, without touching.

## Two kinds of charge

Experiments show there are exactly two kinds. Following Benjamin Franklin we call the charge on glass rubbed with silk **positive** $(+)$ and the charge on ebonite rubbed with wool **negative** $(-)$.

> **Like charges repel, unlike charges attract.**

Two balloons rubbed on the same sweater push each other apart: they carry the same kind of charge.

During friction nothing is created. Part of the negative charge simply moves from one body to the other: one body gets a surplus and becomes negative, the other a deficit and becomes positive. **The charges are always equal in size and opposite in sign** — this is the law of conservation of charge.

## Unit of charge

Charge is denoted $q$ and measured in **coulombs** (C), named after Charles Coulomb. One coulomb is a very large charge; the charge a comb picks up is about $10^{-8}$ C.

## The electroscope

An **electroscope** is a metal rod with two light leaves of foil in a glass case. Touch the rod with a charged body: the charge spreads onto both leaves, they repel each other and spread apart. The bigger the angle, the bigger the charge.

Touch the rod with your finger and the leaves fall: the charge runs away through your body to the ground. This is called **earthing**.

### Conductors and insulators

| Conductors | Insulators (dielectrics) |
|---|---|
| metals, graphite, salt solutions, the human body, damp soil | dry air, rubber, glass, porcelain, plastic, oil, dry wood |

A metal ball on a plastic handle keeps its charge; held in a bare hand it loses it at once.

In damp weather electrisation experiments fail, because a film of water on every surface conducts the charge away.

### Exercises

1. How can a plastic ruler be electrified?
2. Two charged balls repel. What can you say about their charges?
3. A glass rod rubbed with silk gets a $+$ charge. What charge does the silk get?
4. Why do the leaves of an electroscope spread apart?
5. Why does a charged metal ball lose its charge when you touch it, but a charged plastic ruler does not?
6. Why are electrisation experiments hard to repeat on a rainy day?
7. A $+$ charged ball is brought near a small piece of paper, which is uncharged. Why does the paper still jump to the ball?
8. Name three conductors and three insulators.

### Answers

1. By rubbing it on wool or hair, or by touching it with an already charged body.
2. They are of the same kind (both $+$ or both $-$).
3. A negative charge of the same size.
4. They receive like charges and repel each other.
5. The metal conducts the charge through the body to the ground; plastic does not conduct.
6. The damp air and wet surfaces conduct the charge away.
7. The ball attracts the negative charge of the paper closer to itself and pushes the positive away, so attraction wins over repulsion.
8. Conductors: copper, graphite, salt water. Insulators: rubber, glass, dry air.`,
        hy: `## Սանր, որը թուղթ է բարձրացնում

Սանրիր չոր մազերդ, հետո սանրը պահիր թղթի մանր կտորների վրա՝ դրանք ցատկում են նրան։ Պլաստմասսե քանոնը շփիր բրդի վրա, և այն կձգի ջրի բարակ շիթը։ Սանրն ու քանոնը **էլեկտրականացել** են՝ ունեն **էլեկտրական լիցք**։

Էլեկտրականացումը տեղի է ունենում

- **շփմամբ**՝ ապակին մետաքսով, էբոնիտը կամ պլաստմասսան բրդով շփելիս,
- **հպմամբ**՝ չլիցքավորված մարմնին լիցքավորվածով դիպչելիս,
- **ազդեցությամբ**՝ լիցքավորված մարմինը մոտ բերելիս, առանց դիպչելու։

## Լիցքի երկու տեսակ

Փորձերը ցույց են տալիս, որ կան ճիշտ երկու տեսակ։ Բենջամին ֆրանկլինին հետևելով՝ մետաքսով շփված ապակու լիցքը կոչում ենք **դրական** $(+)$, իսկ բրդով շփված էբոնիտի լիցքը՝ **բացասական** $(-)$։

> **Համանուն լիցքերը վանում են, տարանուն լիցքերը՝ ձգում։**

Նույն սվիտերի վրա շփված երկու փուչիկ հրում են միմյանց՝ դրանք կրում են նույն տեսակի լիցք։

Շփման ժամանակ ոչինչ չի ստեղծվում։ Բացասական լիցքի մի մասը պարզապես տեղափոխվում է մեկ մարմնից մյուսը. մեկ մարմինը ստանում է ավելցուկ և դառնում բացասական, մյուսը՝ պակասորդ և դառնում դրական։ **Լիցքերը միշտ հավասար են մեծությամբ և հակադիր՝ նշանով**։ Սա լիցքի պահպանման օրենքն է։

## Լիցքի միավոր

Լիցքը նշանակվում է $q$ և չափվում **կուլոններով** (Կլ)՝ Շառլ Կուլոնի անունով։ Մեկ կուլոնը շատ մեծ լիցք է, սանրի ստացած լիցքը մոտ $10^{-8}$ Կլ է։

## Էլեկտրաչափ

**Էլեկտրաչափը** մետաղե ձող է՝ ապակե պատյանում, երկու թեթև թերթիկով։ Ձողին դիպչիր լիցքավորված մարմնով. լիցքը տարածվում է երկու թերթիկի վրա, դրանք վանում են միմյանց և բացվում։ Ինչքան մեծ է անկյունը, այնքան մեծ է լիցքը։

Ձողին դիպչիր մատով, և թերթիկներն իջնում են՝ լիցքը փախչում է մարմնովդ գետին։ Սա կոչվում է **հողանցում**։

### Հաղորդիչներ և մեկուսիչներ

| Հաղորդիչներ | Մեկուսիչներ (դիէլեկտրիկներ) |
|---|---|
| մետաղներ, գրաֆիտ, աղի լուծույթներ, մարդու մարմին, խոնավ հող | չոր օդ, ռետին, ապակի, ճենապակի, պլաստմասսա, յուղ, չոր փայտ |

Պլաստմասսե բռնակի վրա մետաղե գնդիկը պահում է իր լիցքը, բաց ափի մեջ պահելիս՝ միանգամից կորցնում։

Խոնավ եղանակին էլեկտրականացման փորձերը ձախողվում են, քանի որ ամեն մակերևույթի վրայի ջրի թաղանթը լիցքը տանում է։

### Վարժություններ

1. Ինչպե՞ս կարելի է էլեկտրականացնել պլաստմասսե քանոնը։
2. Երկու լիցքավորված գնդիկ վանում են միմյանց։ Ի՞նչ կարող ես ասել նրանց լիցքերի մասին։
3. Մետաքսով շփված ապակե ձողը ստանում է $+$ լիցք։ Ի՞նչ լիցք է ստանում մետաքսը։
4. Ինչո՞ւ են էլեկտրաչափի թերթիկները բացվում։
5. Ինչո՞ւ լիցքավորված մետաղե գնդիկը կորցնում է լիցքը, երբ դիպչում ես, իսկ լիցքավորված պլաստմասսե քանոնը՝ ոչ։
6. Ինչո՞ւ են անձրևոտ օրն էլեկտրականացման փորձերը դժվար կրկնվում։
7. $+$ լիցքավորված գնդիկը մոտ են բերում չլիցքավորված թղթի մանր կտորին։ Ինչո՞ւ է թուղթը, այնուամենայնիվ, ցատկում գնդիկին։
8. Նշիր երեք հաղորդիչ և երեք մեկուսիչ։

### Պատասխաններ

1. Բրդի կամ մազերի վրա շփելով, կամ արդեն լիցքավորված մարմնով դիպչելով։
2. Նրանք նույն տեսակի են (երկուսն էլ $+$ կամ երկուսն էլ $-$)։
3. Նույն մեծության բացասական լիցք։
4. Դրանք ստանում են համանուն լիցքեր և վանում միմյանց։
5. Մետաղը լիցքը մարմնովդ հաղորդում է գետին, պլաստմասսան չի հաղորդում։
6. Խոնավ օդն ու թաց մակերևույթները լիցքը տանում են։
7. Գնդիկը թղթի բացասական լիցքն իրեն ավելի մոտ է ձգում, դրականը՝ հրում, ուստի ձգումը հաղթում է վանմանը։
8. Հաղորդիչներ՝ պղինձ, գրաֆիտ, աղի ջուր։ Մեկուսիչներ՝ ռետին, ապակի, չոր օդ։`,
        ru: `## Расчёска, поднимающая бумажки

Расчеши сухие волосы, затем поднеси расчёску к мелким бумажкам: они прыгают к ней. Потри пластмассовую линейку о шерсть, и она притянет тонкую струйку воды. Расчёска и линейка **электризовались**: у них появился **электрический заряд**.

Электризация происходит

- **трением** — стекло о шёлк, эбонит или пластмассу о шерсть;
- **соприкосновением** — когда незаряженного тела касаются заряженным;
- **влиянием** — когда заряженное тело подносят, не касаясь.

## Два рода зарядов

Опыты показывают, что родов ровно два. Следуя Бенджамину Франклину, заряд натёртого шёлком стекла называют **положительным** $(+)$, а заряд натёртого шерстью эбонита — **отрицательным** $(-)$.

> **Одноимённые заряды отталкиваются, разноимённые притягиваются.**

Два шарика, натёртые об один и тот же свитер, расходятся: на них заряд одного рода.

При трении ничего не создаётся. Часть отрицательного заряда просто переходит с одного тела на другое: у одного появляется избыток и оно становится отрицательным, у другого недостаток и оно становится положительным. **Заряды всегда равны по величине и противоположны по знаку** — это закон сохранения заряда.

## Единица заряда

Заряд обозначают $q$ и измеряют в **кулонах** (Кл), в честь Шарля Кулона. Один кулон — очень большой заряд; расчёска получает примерно $10^{-8}$ Кл.

## Электроскоп

**Электроскоп** — металлический стержень с двумя лёгкими листочками фольги в стеклянном корпусе. Коснись стержня заряженным телом: заряд растекается по обоим листочкам, они отталкиваются и расходятся. Чем больше угол, тем больше заряд.

Коснись стержня пальцем, и листочки опадут: заряд уходит через твоё тело в землю. Это называют **заземлением**.

### Проводники и изоляторы

| Проводники | Изоляторы (диэлектрики) |
|---|---|
| металлы, графит, растворы солей, тело человека, сырая земля | сухой воздух, резина, стекло, фарфор, пластмасса, масло, сухое дерево |

Металлический шарик на пластмассовой ручке сохраняет заряд; в голой руке он теряет его сразу.

В сырую погоду опыты по электризации не получаются: плёнка воды на каждой поверхности уводит заряд.

### Упражнения

1. Как можно электризовать пластмассовую линейку?
2. Два заряженных шарика отталкиваются. Что можно сказать об их зарядах?
3. Стеклянная палочка, натёртая шёлком, получает заряд $+$. Какой заряд получает шёлк?
4. Почему листочки электроскопа расходятся?
5. Почему заряженный металлический шарик теряет заряд от прикосновения, а заряженная пластмассовая линейка нет?
6. Почему в дождливый день опыты по электризации трудно повторить?
7. Положительно заряженный шарик подносят к незаряженной бумажке. Почему бумажка всё равно прыгает к шарику?
8. Назови три проводника и три изолятора.

### Ответы

1. Трением о шерсть или волосы либо прикосновением уже заряженного тела.
2. Они одного рода (оба $+$ или оба $-$).
3. Отрицательный заряд такой же величины.
4. Они получают одноимённые заряды и отталкиваются.
5. Металл проводит заряд через тело в землю; пластмасса не проводит.
6. Сырой воздух и влажные поверхности уводят заряд.
7. Шарик притягивает к себе отрицательный заряд бумажки и отталкивает положительный, поэтому притяжение побеждает отталкивание.
8. Проводники: медь, графит, солёная вода. Изоляторы: резина, стекло, сухой воздух.`,
      },
      [
        q(t("Like charges", "Համանուն լիցքերը", "Одноимённые заряды"), [
          t("repel", "վանում են", "отталкиваются"),
          t("attract", "ձգում են", "притягиваются"),
          t("do not interact", "չեն փոխազդում", "не взаимодействуют"),
        ], 0),
        q(t("The charge of ebonite rubbed with wool is called", "Բրդով շփված էբոնիտի լիցքը կոչվում է", "Заряд эбонита, натёртого шерстью, называют"), [
          t("positive", "դրական", "положительным"),
          t("negative", "բացասական", "отрицательным"),
          t("neutral", "չեզոք", "нейтральным"),
        ], 1),
        q(t("The unit of electric charge is", "Էլեկտրական լիցքի միավորն է", "Единица электрического заряда —"), [
          t("the ampere", "ամպերը", "ампер"),
          t("the volt", "վոլտը", "вольт"),
          t("the coulomb", "կուլոնը", "кулон"),
        ], 2),
        q(t("An insulator in this list is", "Այս ցանկում մեկուսիչն է", "Изолятор в этом списке —"), [
          t("rubber", "ռետինը", "резина"),
          t("copper", "պղինձը", "медь"),
          t("salt water", "աղի ջուրը", "солёная вода"),
        ], 0),
        q(t("When two bodies are rubbed together, the charges they receive are", "Երբ երկու մարմին շփվում են, նրանց ստացած լիցքերը", "Когда два тела трут друг о друга, полученные ими заряды"), [
          t("both positive", "երկուսն էլ դրական են", "оба положительные"),
          t("equal in size and opposite in sign", "մեծությամբ հավասար և նշանով հակադիր են", "равны по величине и противоположны по знаку"),
          t("always different in size", "միշտ տարբեր են մեծությամբ", "всегда разные по величине"),
        ], 1),
        q(t("The leaves of a charged electroscope fall when you touch the rod with a finger because", "Լիցքավորված էլեկտրաչափի թերթիկներն իջնում են ձողին մատով դիպչելիս, քանի որ", "Листочки заряженного электроскопа опадают при прикосновении пальца, потому что"), [
          t("the charge doubles", "լիցքը կրկնապատկվում է", "заряд удваивается"),
          t("the finger is an insulator", "մատը մեկուսիչ է", "палец — изолятор"),
          t("the charge flows away through the body to the ground", "լիցքը մարմնով հոսում է գետին", "заряд уходит через тело в землю"),
        ], 2),
      ],
    ),
    lesson(
      "electric-field-atom",
      ["Electric field; structure of the atom", "Էլեկտրական դաշտ, ատոմի կառուցվածք", "Электрическое поле; строение атома"],
      {
        en: ["Describe the electric field around a charge", "Name the particles of an atom and their charges", "Explain a negative or positive ion and the electrisation of a body in terms of electrons"],
        hy: ["Նկարագրել լիցքի շուրջ էլեկտրական դաշտը", "Անվանել ատոմի մասնիկներն ու նրանց լիցքերը", "Էլեկտրոնների լեզվով բացատրել բացասական և դրական իոնը և մարմնի էլեկտրականացումը"],
        ru: ["Описывать электрическое поле вокруг заряда", "Называть частицы атома и их заряды", "Объяснять отрицательный и положительный ион и электризацию тела на языке электронов"],
      },
      {
        en: `## How does a charge act at a distance?

A charged comb attracts paper without touching it. Around every charged body there is an **electric field** — a special kind of matter that acts with a force on any charge placed in it.

Properties of the field:
- it exists around any charge, in air and in vacuum;
- it is stronger nearer the charge and weaker further away;
- it acts on a charge with a force, and this is how we detect it.

We draw a field as **field lines**: they start on positive charges and end on negative ones, and at each point they show the direction of the force on a small positive charge.

## The smallest charge

An electric charge cannot be divided endlessly. The smallest charge found in nature is the charge of the **electron**:

$$e = 1.6 \\cdot 10^{-19}\\ \\text{C}$$

Any charge is a whole number of these: $q = Ne$.

## Inside the atom

| Particle | Charge | Mass | Where |
|---|---|---|---|
| Proton | $+e$ | $1$ a.m.u. | nucleus |
| Neutron | $0$ | $1$ a.m.u. | nucleus |
| Electron | $-e$ | $1/1840$ a.m.u. | around the nucleus |

In a **neutral** atom the number of electrons equals the number of protons, so the charges cancel exactly. The nucleus is $100\\,000$ times smaller than the atom, yet it holds almost all of its mass.

The number of protons is the number of the element in the periodic table: hydrogen has $1$, helium $2$, oxygen $8$.

### Ions

- An atom that **loses** an electron becomes a **positive ion**.
- An atom that **gains** an extra electron becomes a **negative ion**.

## Electrisation explained

Electrons on the outside of an atom are held weakly and can move from one body to another. Now we can say exactly what happens when you rub a ruler on wool:

- electrons pass from the wool to the ruler;
- the ruler has a surplus of electrons → negative;
- the wool has a deficit → positive.

Nothing is created or destroyed: only electrons change owners. In a metal some electrons are **free** — they wander through the whole piece — which is why metals conduct. In a dielectric all electrons stay with their atoms.

### Exercises

1. What acts on a piece of paper to make it jump to a charged comb?
2. Where is the field of a charged ball stronger: near it or far from it?
3. Name the three particles of an atom and their charges.
4. An atom has $11$ protons and $11$ electrons. What is its total charge?
5. An atom lost two electrons. What is its charge now, and what is it called?
6. A body received a charge $q = -3.2 \\cdot 10^{-19}$ C. How many extra electrons does it have?
7. A ruler rubbed on wool becomes negative. Which way did the electrons go?
8. Why does a metal conduct electricity and glass not?

### Answers

1. The electric field of the comb.
2. Near it.
3. Proton $+e$, neutron $0$, electron $-e$.
4. Zero, it is neutral.
5. $+2e$; it is a positive ion.
6. $N = 3.2 \\cdot 10^{-19}/1.6 \\cdot 10^{-19} = 2$ electrons.
7. From the wool to the ruler.
8. A metal has free electrons that can move through it; in glass every electron is bound to its atom.`,
        hy: `## Ինչպե՞ս է լիցքն ազդում հեռավորության վրա

Լիցքավորված սանրը ձգում է թուղթը՝ առանց դիպչելու։ Ամեն լիցքավորված մարմնի շուրջ կա **էլեկտրական դաշտ**՝ նյութի հատուկ տեսակ, որն ուժով ազդում է նրանում դրված ցանկացած լիցքի վրա։

Դաշտի հատկությունները՝
- գոյություն ունի ամեն լիցքի շուրջ՝ օդում և վակուումում,
- լիցքին ավելի մոտ ավելի ուժեղ է, հեռու՝ ավելի թույլ,
- լիցքի վրա ազդում է ուժով, և հենց դրանով ենք նրան հայտնաբերում։

Դաշտը պատկերում ենք **դաշտի գծերով**՝ դրանք սկսվում են դրական լիցքերից և ավարտվում բացասականների վրա, իսկ ամեն կետում ցույց են տալիս փոքր դրական լիցքի վրա ազդող ուժի ուղղությունը։

## Ամենափոքր լիցքը

Էլեկտրական լիցքը չի կարելի անվերջ բաժանել։ Բնության մեջ հայտնաբերված ամենափոքր լիցքը **էլեկտրոնի** լիցքն է՝

$$e = 1{,}6 \\cdot 10^{-19}\\ \\text{Կլ}$$

Ցանկացած լիցք դրանց ամբողջ թիվն է՝ $q = Ne$։

## Ատոմի ներսում

| Մասնիկ | Լիցք | Զանգված | Որտեղ |
|---|---|---|---|
| Պրոտոն | $+e$ | $1$ ա.զ.մ. | միջուկում |
| Նեյտրոն | $0$ | $1$ ա.զ.մ. | միջուկում |
| Էլեկտրոն | $-e$ | $1/1840$ ա.զ.մ. | միջուկի շուրջ |

**Չեզոք** ատոմում էլեկտրոնների թիվը հավասար է պրոտոնների թվին, ուստի լիցքերը ճիշտ կոմպենսացվում են։ Միջուկն ատոմից $100\\,000$ անգամ փոքր է, բայց պահում է նրա զանգվածի գրեթե ամբողջը։

Պրոտոնների թիվը պարբերական աղյուսակում տարրի համարն է՝ ջրածինն ունի $1$, հելիումը՝ $2$, թթվածինը՝ $8$։

### Իոններ

- Էլեկտրոն **կորցրած** ատոմը դառնում է **դրական իոն**։
- Ավելորդ էլեկտրոն **ստացած** ատոմը դառնում է **բացասական իոն**։

## Էլեկտրականացման բացատրությունը

Ատոմի արտաքին էլեկտրոնները թույլ են պահվում և կարող են անցնել մեկ մարմնից մյուսը։ Հիմա կարող ենք ճշգրիտ ասել, թե ինչ է կատարվում, երբ քանոնը շփում ես բրդի վրա՝

- էլեկտրոնները բրդից անցնում են քանոնին,
- քանոնն ունի էլեկտրոնների ավելցուկ → բացասական է,
- բրդն ունի պակասորդ → դրական է։

Ոչինչ չի ստեղծվում և չի ոչնչանում՝ միայն էլեկտրոնները տեր են փոխում։ Մետաղում էլեկտրոնների մի մասը **ազատ** է՝ թափառում է ամբողջ կտորով, ահա թե ինչու մետաղները հաղորդում են։ Դիէլեկտրիկում բոլոր էլեկտրոնները մնում են իրենց ատոմների մոտ։

### Վարժություններ

1. Ի՞նչն է ազդում թղթի կտորի վրա, որ նա ցատկի լիցքավորված սանրին։
2. Որտե՞ղ է լիցքավորված գնդի դաշտն ավելի ուժեղ՝ նրա մո՞տ, թե՞ հեռու։
3. Անվանիր ատոմի երեք մասնիկն ու նրանց լիցքերը։
4. Ատոմն ունի $11$ պրոտոն և $11$ էլեկտրոն։ Որքա՞ն է նրա լրիվ լիցքը։
5. Ատոմը կորցրել է երկու էլեկտրոն։ Որքա՞ն է նրա լիցքը հիմա, և ինչպե՞ս է այն կոչվում։
6. Մարմինը ստացել է $q = -3{,}2 \\cdot 10^{-19}$ Կլ լիցք։ Քանի՞ ավելորդ էլեկտրոն ունի։
7. Բրդի վրա շփված քանոնը դառնում է բացասական։ Ո՞ր ուղղությամբ են շարժվել էլեկտրոնները։
8. Ինչո՞ւ է մետաղն էլեկտրականություն հաղորդում, իսկ ապակին՝ ոչ։

### Պատասխաններ

1. Սանրի էլեկտրական դաշտը։
2. Նրա մոտ։
3. Պրոտոն՝ $+e$, նեյտրոն՝ $0$, էլեկտրոն՝ $-e$։
4. Զրո, այն չեզոք է։
5. $+2e$, դա դրական իոն է։
6. $N = 3{,}2 \\cdot 10^{-19}/1{,}6 \\cdot 10^{-19} = 2$ էլեկտրոն։
7. Բրդից դեպի քանոնը։
8. Մետաղն ունի ազատ էլեկտրոններ, որոնք կարող են շարժվել նրա մեջ, ապակում ամեն էլեկտրոն կապված է իր ատոմին։`,
        ru: `## Как заряд действует на расстоянии?

Заряженная расчёска притягивает бумажку, не касаясь её. Вокруг каждого заряженного тела есть **электрическое поле** — особый вид материи, действующий с силой на любой заряд, помещённый в него.

Свойства поля:
- оно существует вокруг любого заряда, в воздухе и в вакууме;
- оно сильнее ближе к заряду и слабее дальше от него;
- оно действует на заряд с силой, и именно так мы его обнаруживаем.

Поле изображают **линиями поля**: они начинаются на положительных зарядах и заканчиваются на отрицательных, а в каждой точке показывают направление силы, действующей на маленький положительный заряд.

## Наименьший заряд

Электрический заряд нельзя делить бесконечно. Наименьший заряд, найденный в природе, — заряд **электрона**:

$$e = 1{,}6 \\cdot 10^{-19}\\ \\text{Кл}$$

Любой заряд — целое число таких: $q = Ne$.

## Внутри атома

| Частица | Заряд | Масса | Где |
|---|---|---|---|
| Протон | $+e$ | $1$ а.е.м. | в ядре |
| Нейтрон | $0$ | $1$ а.е.м. | в ядре |
| Электрон | $-e$ | $1/1840$ а.е.м. | вокруг ядра |

В **нейтральном** атоме число электронов равно числу протонов, поэтому заряды точно компенсируются. Ядро в $100\\,000$ раз меньше атома, но в нём почти вся его масса.

Число протонов — это номер элемента в периодической таблице: у водорода $1$, у гелия $2$, у кислорода $8$.

### Ионы

- Атом, **потерявший** электрон, становится **положительным ионом**.
- Атом, **получивший** лишний электрон, становится **отрицательным ионом**.

## Объяснение электризации

Внешние электроны атома удерживаются слабо и могут переходить с одного тела на другое. Теперь можно точно сказать, что происходит, когда ты трёшь линейку о шерсть:

- электроны переходят с шерсти на линейку;
- у линейки избыток электронов → она отрицательна;
- у шерсти недостаток → она положительна.

Ничто не создаётся и не уничтожается: электроны лишь меняют хозяина. В металле часть электронов **свободна** — они блуждают по всему куску, поэтому металлы проводят. В диэлектрике все электроны остаются при своих атомах.

### Упражнения

1. Что действует на бумажку, заставляя её прыгнуть к заряженной расчёске?
2. Где поле заряженного шарика сильнее: вблизи него или далеко?
3. Назови три частицы атома и их заряды.
4. У атома $11$ протонов и $11$ электронов. Каков его полный заряд?
5. Атом потерял два электрона. Каков его заряд теперь и как он называется?
6. Тело получило заряд $q = -3{,}2 \\cdot 10^{-19}$ Кл. Сколько у него лишних электронов?
7. Линейка, натёртая о шерсть, стала отрицательной. Куда перешли электроны?
8. Почему металл проводит электричество, а стекло нет?

### Ответы

1. Электрическое поле расчёски.
2. Вблизи него.
3. Протон $+e$, нейтрон $0$, электрон $-e$.
4. Нуль, он нейтрален.
5. $+2e$; это положительный ион.
6. $N = 3{,}2 \\cdot 10^{-19}/1{,}6 \\cdot 10^{-19} = 2$ электрона.
7. С шерсти на линейку.
8. У металла есть свободные электроны, способные двигаться; в стекле каждый электрон связан со своим атомом.`,
      },
      [
        q(t("An electric field exists", "Էլեկտրական դաշտ գոյություն ունի", "Электрическое поле существует"), [
          t("around every charged body", "ամեն լիցքավորված մարմնի շուրջ", "вокруг каждого заряженного тела"),
          t("only inside metals", "միայն մետաղների ներսում", "только внутри металлов"),
          t("only in water", "միայն ջրում", "только в воде"),
        ], 0),
        q(t("The charge of an electron is", "Էլեկտրոնի լիցքն է", "Заряд электрона равен"), [
          t("+1.6 · 10⁻¹⁹ C", "+1,6 · 10⁻¹⁹ Կլ", "+1,6 · 10⁻¹⁹ Кл"),
          t("-1.6 · 10⁻¹⁹ C", "-1,6 · 10⁻¹⁹ Կլ", "-1,6 · 10⁻¹⁹ Кл"),
          t("0", "0", "0"),
        ], 1),
        q(t("The particle of the nucleus with no charge is the", "Միջուկի՝ լիցք չունեցող մասնիկը", "Частица ядра без заряда — это"), [
          t("proton", "պրոտոնն է", "протон"),
          t("electron", "էլեկտրոնն է", "электрон"),
          t("neutron", "նեյտրոնն է", "нейтрон"),
        ], 2),
        q(t("An atom that lost one electron is", "Մեկ էլեկտրոն կորցրած ատոմը", "Атом, потерявший один электрон, —"), [
          t("a positive ion", "դրական իոն է", "положительный ион"),
          t("a negative ion", "բացասական իոն է", "отрицательный ион"),
          t("still neutral", "դեռ չեզոք է", "по-прежнему нейтрален"),
        ], 0),
        q(t("In a neutral atom", "Չեզոք ատոմում", "В нейтральном атоме"), [
          t("there are no electrons", "էլեկտրոններ չկան", "нет электронов"),
          t("the numbers of electrons and protons are equal", "էլեկտրոնների և պրոտոնների թվերը հավասար են", "числа электронов и протонов равны"),
          t("there are more protons", "պրոտոններն ավելի շատ են", "протонов больше"),
        ], 1),
        q(t("A metal conducts electricity because it has", "Մետաղը հաղորդում է էլեկտրականություն, քանի որ ունի", "Металл проводит электричество, потому что в нём есть"), [
          t("many neutrons", "շատ նեյտրոններ", "много нейтронов"),
          t("no charges at all", "ընդհանրապես լիցքեր չկան", "вовсе нет зарядов"),
          t("free electrons", "ազատ էլեկտրոններ", "свободные электроны"),
        ], 2),
      ],
    ),
    lesson(
      "electric-current",
      ["Electric current; sources; circuit", "Էլեկտրական հոսանք, աղբյուրներ, շղթա", "Электрический ток; источники; электрическая цепь"],
      {
        en: ["Define electric current and state the conditions for it to exist", "Name the kinds of current sources and what they convert", "Draw a simple circuit diagram with the standard symbols"],
        hy: ["Սահմանել էլեկտրական հոսանքը և ձևակերպել նրա գոյության պայմանները", "Անվանել հոսանքի աղբյուրների տեսակները և նրանց ձևափոխած էներգիան", "Գծել պարզ շղթայի սխեմա՝ ստանդարտ նշաններով"],
        ru: ["Определять электрический ток и условия его существования", "Называть виды источников тока и что они преобразуют", "Чертить простую схему цепи стандартными обозначениями"],
      },
      {
        en: `## What current is

**Electric current** is the ordered (directed) motion of charged particles.

In a metal the moving particles are free electrons; in a solution of salt or acid they are ions of both signs; in a gas they are ions and electrons.

For a current to exist two conditions are needed:
1. free charged particles in the substance;
2. an electric field inside it, which makes them move in one direction.

Without a field the free electrons in a wire still move, but chaotically, and there is no current.

### Direction of the current

By an old agreement, **the direction of the current is the direction in which positive charges would move**: from $+$ to $-$ outside the source. Electrons actually drift the other way, but every textbook and instrument keeps the old convention.

## Current sources

A **current source** keeps a field in the circuit by separating charges. Inside it, some other kind of energy becomes electrical energy:

| Source | Energy converted |
|---|---|
| Galvanic cell, battery | chemical → electrical |
| Accumulator (rechargeable) | chemical → electrical, and back when charging |
| Thermocouple | internal (heat) → electrical |
| Photocell, solar panel | light → electrical |
| Generator in a power station | mechanical → electrical |

In Volta's cell two different metals in acid give about $1$ V; a modern AA cell gives $1.5$ V and a car accumulator $12$ V.

## The circuit

An **electric circuit** must contain
- a source,
- consumers (a lamp, a motor, a heater),
- connecting wires,
- and usually a switch.

Current flows only in a **closed** circuit. A break anywhere — an open switch, a broken wire, a burnt-out lamp — stops the current everywhere in it.

### Symbols

| Element | Symbol in words |
|---|---|
| Cell | long thin line $+$, short thick line $-$ |
| Battery of cells | several cells in a row |
| Lamp | circle with a cross |
| Switch | a line with a hinged end |
| Ammeter | circle with A |
| Voltmeter | circle with V |
| Resistor | rectangle |

A drawing made of these symbols is a **circuit diagram**. Engineers everywhere read the same diagram, whatever language they speak.

### Exercises

1. What is electric current?
2. What two conditions are needed for a current to exist in a conductor?
3. Which particles carry the current in a metal? In a salt solution?
4. What direction has been chosen for the current?
5. What energy becomes electrical energy in a solar panel? In a battery?
6. Why does a lamp go out when one wire comes loose?
7. Draw a circuit diagram with a cell, a switch and two lamps in a row.
8. A pupil says "there is current in the wire because it has electrons". Correct the statement.

### Answers

1. The ordered motion of charged particles.
2. Free charged particles and an electric field inside the conductor.
3. Free electrons; ions of both signs.
4. The direction in which positive charges would move, from $+$ to $-$ outside the source.
5. Light; chemical energy.
6. The circuit is broken, so the current stops in the whole circuit.
7. Cell, then switch, then the two lamps one after the other, back to the cell.
8. Electrons alone are not enough — they must move in an ordered way, which needs a field, that is, a source and a closed circuit.`,
        hy: `## Ի՞նչ է հոսանքը

**Էլեկտրական հոսանքը** լիցքավորված մասնիկների կարգավորված (ուղղորդված) շարժումն է։

Մետաղում շարժվող մասնիկներն ազատ էլեկտրոններն են, աղի կամ թթվի լուծույթում՝ երկու նշանի իոնները, գազում՝ իոններն ու էլեկտրոնները։

Հոսանքի գոյության համար պետք է երկու պայման՝
1. նյութում ազատ լիցքավորված մասնիկներ,
2. նրա ներսում էլեկտրական դաշտ, որը դրանք շարժում է մեկ ուղղությամբ։

Առանց դաշտի լարի ազատ էլեկտրոնները նույնպես շարժվում են, բայց քաոսային, և հոսանք չկա։

### Հոսանքի ուղղությունը

Հին համաձայնությամբ՝ **հոսանքի ուղղությունն այն ուղղությունն է, որով կշարժվեին դրական լիցքերը**՝ աղբյուրից դուրս՝ $+$-ից $-$։ Էլեկտրոններն իրականում շարժվում են հակառակ կողմ, բայց բոլոր դասագրքերն ու սարքերը պահում են հին պայմանավորվածությունը։

## Հոսանքի աղբյուրներ

**Հոսանքի աղբյուրը** շղթայում դաշտ է պահում՝ լիցքերը բաժանելով։ Նրա ներսում էներգիայի մեկ այլ տեսակ դառնում է էլեկտրական էներգիա՝

| Աղբյուր | Ձևափոխվող էներգիա |
|---|---|
| Գալվանական տարր, մարտկոց | քիմիական → էլեկտրական |
| Ակումուլյատոր (լիցքավորվող) | քիմիական → էլեկտրական և հակառակը՝ լիցքավորելիս |
| Ջերմազույգ | ներքին (ջերմային) → էլեկտրական |
| Լուսատարր, արևային մարտկոց | լույս → էլեկտրական |
| Էլեկտրակայանի գեներատոր | մեխանիկական → էլեկտրական |

Վոլտայի տարրում թթվի մեջ դրված երկու տարբեր մետաղ տալիս են մոտ $1$ Վ, ժամանակակից AA տարրը՝ $1{,}5$ Վ, իսկ ավտոմոբիլի ակումուլյատորը՝ $12$ Վ։

## Շղթա

**Էլեկտրական շղթան** պետք է պարունակի՝
- աղբյուր,
- սպառիչներ (լամպ, շարժիչ, տաքացուցիչ),
- միացնող լարեր,
- և սովորաբար բանալի։

Հոսանքը հոսում է միայն **փակ** շղթայում։ Ցանկացած տեղի խզումը՝ բաց բանալի, կտրված լար, վառված լամպ, դադարեցնում է հոսանքն ամբողջ շղթայում։

### Նշաններ

| Տարր | Նշանը բառերով |
|---|---|
| Տարր | երկար բարակ գիծը՝ $+$, կարճ հաստը՝ $-$ |
| Տարրերի մարտկոց | մի քանի տարր իրար հետևից |
| Լամպ | շրջան՝ խաչով |
| Բանալի | գիծ՝ ծալվող ծայրով |
| Ամպերաչափ | շրջան՝ A տառով |
| Վոլտաչափ | շրջան՝ V տառով |
| Դիմադրություն | ուղղանկյուն |

Այս նշաններից կազմված նկարը **շղթայի սխեմա** է։ Աշխարհի ամեն ինժեներ կարդում է նույն սխեման՝ ինչ լեզվով էլ խոսի։

### Վարժություններ

1. Ի՞նչ է էլեկտրական հոսանքը։
2. Ո՞ր երկու պայմանն է պետք, որ հաղորդչում հոսանք լինի։
3. Ո՞ր մասնիկներն են հոսանք կրում մետաղում։ Իսկ աղի լուծույթում։
4. Ի՞նչ ուղղություն է ընտրված հոսանքի համար։
5. Ի՞նչ էներգիա է դառնում էլեկտրական արևային մարտկոցում։ Իսկ մարտկոցում։
6. Ինչո՞ւ է լամպը հանգչում, երբ լարերից մեկը պոկվում է։
7. Գծիր շղթայի սխեմա՝ տարրով, բանալիով և իրար հետևից դրված երկու լամպով։
8. Աշակերտն ասում է՝ «լարում հոսանք կա, քանի որ նրա մեջ էլեկտրոններ կան»։ Ուղղիր պնդումը։

### Պատասխաններ

1. Լիցքավորված մասնիկների կարգավորված շարժումը։
2. Ազատ լիցքավորված մասնիկներ և հաղորդչի ներսում էլեկտրական դաշտ։
3. Ազատ էլեկտրոնները, երկու նշանի իոնները։
4. Այն ուղղությունը, որով կշարժվեին դրական լիցքերը՝ աղբյուրից դուրս՝ $+$-ից $-$։
5. Լույսը, քիմիական էներգիան։
6. Շղթան խզվում է, ուստի հոսանքը դադարում է ամբողջ շղթայում։
7. Տարր, հետո բանալի, հետո երկու լամպ՝ իրար հետևից, և հետ՝ տարրին։
8. Միայն էլեկտրոնները բավական չեն՝ դրանք պետք է կարգավորված շարժվեն, իսկ դրա համար պետք է դաշտ, այսինքն՝ աղբյուր և փակ շղթա։`,
        ru: `## Что такое ток

**Электрический ток** — это упорядоченное (направленное) движение заряженных частиц.

В металле движутся свободные электроны; в растворе соли или кислоты — ионы обоих знаков; в газе — ионы и электроны.

Для существования тока нужны два условия:
1. свободные заряженные частицы в веществе;
2. электрическое поле внутри него, заставляющее их двигаться в одну сторону.

Без поля свободные электроны в проводе тоже движутся, но хаотически, и тока нет.

### Направление тока

По старому соглашению **за направление тока принимают то направление, в котором двигались бы положительные заряды**: вне источника от $+$ к $-$. Электроны в действительности дрейфуют в другую сторону, но все учебники и приборы сохраняют старую договорённость.

## Источники тока

**Источник тока** поддерживает поле в цепи, разделяя заряды. Внутри него какой-то другой вид энергии становится электрической:

| Источник | Преобразуемая энергия |
|---|---|
| Гальванический элемент, батарейка | химическая → электрическая |
| Аккумулятор (перезаряжаемый) | химическая → электрическая и обратно при зарядке |
| Термопара | внутренняя (тепловая) → электрическая |
| Фотоэлемент, солнечная батарея | световая → электрическая |
| Генератор на электростанции | механическая → электрическая |

В элементе Вольты два разных металла в кислоте дают около $1$ В; современный элемент AA даёт $1{,}5$ В, а автомобильный аккумулятор $12$ В.

## Цепь

**Электрическая цепь** должна содержать
- источник,
- потребители (лампа, двигатель, нагреватель),
- соединительные провода,
- и обычно ключ.

Ток идёт только в **замкнутой** цепи. Разрыв в любом месте — открытый ключ, оборванный провод, перегоревшая лампа — прекращает ток во всей цепи.

### Обозначения

| Элемент | Обозначение словами |
|---|---|
| Элемент | длинная тонкая черта — $+$, короткая толстая — $-$ |
| Батарея элементов | несколько элементов подряд |
| Лампа | кружок с крестом |
| Ключ | линия с откидным концом |
| Амперметр | кружок с буквой A |
| Вольтметр | кружок с буквой V |
| Резистор | прямоугольник |

Рисунок из этих обозначений — **схема цепи**. Инженеры по всему миру читают одну и ту же схему, на каком бы языке они ни говорили.

### Упражнения

1. Что такое электрический ток?
2. Какие два условия нужны, чтобы в проводнике был ток?
3. Какие частицы несут ток в металле? А в растворе соли?
4. Какое направление выбрано за направление тока?
5. Какая энергия становится электрической в солнечной батарее? А в батарейке?
6. Почему лампа гаснет, когда отходит один провод?
7. Начерти схему цепи с элементом, ключом и двумя лампами подряд.
8. Ученик говорит: «в проводе есть ток, потому что в нём есть электроны». Исправь утверждение.

### Ответы

1. Упорядоченное движение заряженных частиц.
2. Свободные заряженные частицы и электрическое поле внутри проводника.
3. Свободные электроны; ионы обоих знаков.
4. Направление, в котором двигались бы положительные заряды: вне источника от $+$ к $-$.
5. Световая; химическая.
6. Цепь разрывается, и ток прекращается во всей цепи.
7. Элемент, затем ключ, затем две лампы одна за другой и обратно к элементу.
8. Одних электронов мало — они должны двигаться упорядоченно, а для этого нужно поле, то есть источник и замкнутая цепь.`,
      },
      [
        q(t("Electric current is", "Էլեկտրական հոսանքը", "Электрический ток — это"), [
          t("the ordered motion of charged particles", "լիցքավորված մասնիկների կարգավորված շարժումն է", "упорядоченное движение заряженных частиц"),
          t("any motion of molecules", "մոլեկուլների ցանկացած շարժումն է", "любое движение молекул"),
          t("the heating of a wire", "լարի տաքացումն է", "нагревание провода"),
        ], 0),
        q(t("In a metal the current is carried by", "Մետաղում հոսանքը կրում են", "В металле ток несут"), [
          t("ions", "իոնները", "ионы"),
          t("free electrons", "ազատ էլեկտրոնները", "свободные электроны"),
          t("neutrons", "նեյտրոնները", "нейтроны"),
        ], 1),
        q(t("A current source converts", "Հոսանքի աղբյուրը ձևափոխում է", "Источник тока преобразует"), [
          t("electrical energy into light", "էլեկտրական էներգիան լույսի", "электрическую энергию в световую"),
          t("heat into mechanical work only", "ջերմությունը միայն մեխանիկական աշխատանքի", "теплоту только в механическую работу"),
          t("another kind of energy into electrical energy", "էներգիայի այլ տեսակն էլեկտրական էներգիայի", "другой вид энергии в электрическую"),
        ], 2),
        q(t("Current flows in a circuit only if the circuit is", "Շղթայում հոսանք հոսում է միայն այն դեպքում, երբ շղթան", "Ток идёт в цепи только если цепь"), [
          t("closed", "փակ է", "замкнута"),
          t("open", "բաց է", "разомкнута"),
          t("made of iron", "երկաթից է", "сделана из железа"),
        ], 0),
        q(t("In a solar panel the energy converted is", "Արևային մարտկոցում ձևափոխվող էներգիան է", "В солнечной батарее преобразуется энергия"), [
          t("chemical", "քիմիականը", "химическая"),
          t("light", "լուսայինը", "световая"),
          t("mechanical", "մեխանիկականը", "механическая"),
        ], 1),
        q(t("The chosen direction of the current outside the source is", "Աղբյուրից դուրս հոսանքի ընտրված ուղղությունն է", "Выбранное направление тока вне источника —"), [
          t("from - to +", "--ից +", "от - к +"),
          t("there is no direction", "ուղղություն չկա", "направления нет"),
          t("from + to -", "+-ից -", "от + к -"),
        ], 2),
      ],
    ),
    lesson(
      "current-strength",
      ["Current strength; ammeter", "Հոսանքի ուժ, ամպերաչափ", "Сила тока; амперметр"],
      {
        en: ["Use the formula I = q/t and the unit ampere", "Convert between amperes, milliamperes and microamperes", "Connect an ammeter correctly and read its scale"],
        hy: ["Կիրառել I = q/t բանաձևը և ամպեր միավորը", "Կատարել անցում ամպերի, միլիամպերի և միկրոամպերի միջև", "Ճիշտ միացնել ամպերաչափը և կարդալ նրա սանդղակը"],
        ru: ["Применять формулу I = q/t и единицу ампер", "Переходить между амперами, миллиамперами и микроамперами", "Правильно включать амперметр и читать его шкалу"],
      },
      {
        en: `## How much charge passes?

Two lamps may both be lit, but one glows brighter: more charge passes through it each second. The quantity that measures this is the **current strength** $I$:

$$I = \\frac{q}{t}$$

where $q$ is the charge that passes through the cross-section of the conductor in time $t$.

The unit is the **ampere** (A), named after André-Marie Ampère. From the formula, $q = I t$, so a current of $1$ A carries $1$ C of charge each second.

| Prefix | Meaning | Example |
|---|---|---|
| $1$ mA (milliampere) | $0.001$ A | a pocket calculator |
| $1\\ \\mu$A (microampere) | $0.000001$ A | nerve signals |
| $1$ A | | a $230$ W lamp |
| $100$ A and more | | a car starter, a welding machine |

## Safety

The human body is a conductor. A current of $1$ mA is felt, $10$ mA makes the muscles contract so that a person cannot let go, and $100$ mA through the chest is deadly. Never touch bare wires, never put anything into a socket, and never use an electrical appliance with wet hands.

## Measuring: the ammeter

An **ammeter** measures current strength. Rules:

1. Connect it **in series** with the element whose current you measure, so the same current flows through both.
2. Connect the $+$ terminal to the wire that comes from the $+$ pole of the source.
3. Never connect an ammeter straight to the poles of a source: it has almost no resistance and will be destroyed.
4. Choose a range larger than the expected current.

The ammeter's own resistance must be very small, so that it does not change the current it is measuring.

## Worked example 1

> A charge of $60$ C passes through a lamp in $2$ minutes. Find the current.

$$t = 120\\ \\text{s},\\qquad I = \\frac{q}{t} = \\frac{60}{120} = 0.5\\ \\text{A}$$

## Worked example 2

> A current of $0.2$ A flows for $5$ minutes. What charge passed, and how many electrons is that?

$$q = I t = 0.2 \\cdot 300 = 60\\ \\text{C},\\qquad N = \\frac{q}{e} = \\frac{60}{1.6 \\cdot 10^{-19}} = 3.75 \\cdot 10^{20}$$

### Exercises

1. Write the formula for current strength and name its unit.
2. Express in amperes: $250$ mA, $20$ mA, $500\\ \\mu$A.
3. Express in milliamperes: $0.4$ A, $1.5$ A.
4. A charge of $120$ C passes through a wire in $1$ minute. Find the current.
5. A current of $2$ A flows for half an hour. Find the charge.
6. How should an ammeter be connected, and why must its resistance be small?
7. A pupil connects an ammeter directly to a battery. What will happen?
8. A current of $0.5$ A flows through a lamp for $10$ s. How many electrons pass through it?

### Answers

1. $I = q/t$; the ampere.
2. $0.25$ A, $0.02$ A, $0.0005$ A.
3. $400$ mA, $1500$ mA.
4. $I = 120/60 = 2$ A.
5. $q = 2 \\cdot 1800 = 3600$ C.
6. In series with the element; a small resistance keeps the current almost unchanged.
7. The current will be enormous, and the ammeter (and possibly the battery) will be damaged.
8. $q = 0.5 \\cdot 10 = 5$ C; $N = 5/(1.6 \\cdot 10^{-19}) \\approx 3.1 \\cdot 10^{19}$.`,
        hy: `## Որքա՞ն լիցք է անցնում

Երկու լամպ կարող են վառված լինել, բայց մեկն ավելի պայծառ է փայլում. նրանով ամեն վայրկյան ավելի շատ լիցք է անցնում։ Այս բանը չափող մեծությունը **հոսանքի ուժն** է՝ $I$՝

$$I = \\frac{q}{t}$$

որտեղ $q$-ն $t$ ժամանակում հաղորդչի լայնական հատույթով անցած լիցքն է։

Միավորը **ամպերն** է (Ա)՝ Անդրե Մարի Ամպերի անունով։ Բանաձևից $q = I t$, ուստի $1$ Ա հոսանքն ամեն վայրկյան տանում է $1$ Կլ լիցք։

| Նախածանց | Իմաստը | Օրինակ |
|---|---|---|
| $1$ մԱ (միլիամպեր) | $0{,}001$ Ա | գրպանի հաշվիչ |
| $1\\ \\mu$Ա (միկրոամպեր) | $0{,}000001$ Ա | նյարդային ազդանշաններ |
| $1$ Ա | | $230$ Վտ լամպ |
| $100$ Ա և ավելի | | ավտոմեքենայի ստարտեր, եռակցման սարք |

## Անվտանգություն

Մարդու մարմինը հաղորդիչ է։ $1$ մԱ հոսանքը զգացվում է, $10$ մԱ-ն մկանները կծկում է այնպես, որ մարդը չի կարողանում բաց թողնել, իսկ կրծքով անցնող $100$ մԱ-ն մահացու է։ Երբեք չդիպչես բաց լարերին, երբեք ոչինչ չմտցնես վարդակի մեջ և երբեք թաց ձեռքերով էլեկտրական սարք չօգտագործես։

## Չափում՝ ամպերաչափ

**Ամպերաչափը** չափում է հոսանքի ուժը։ Կանոնները՝

1. Միացրու այն **հաջորդաբար** այն տարրի հետ, որի հոսանքը չափում ես, որ նույն հոսանքը հոսի երկուսով։
2. $+$ սեղմակը միացրու այն լարին, որը գալիս է աղբյուրի $+$ բևեռից։
3. Երբեք ամպերաչափը չմիացնես ուղղակի աղբյուրի բևեռներին. նա գրեթե դիմադրություն չունի և կփչանա։
4. Ընտրիր սպասվող հոսանքից մեծ չափման սահման։

Ամպերաչափի սեփական դիմադրությունը պետք է շատ փոքր լինի, որ նա չփոխի այն հոսանքը, որը չափում է։

## Լուծված օրինակ 1

> $2$ րոպեում լամպով անցնում է $60$ Կլ լիցք։ Գտիր հոսանքի ուժը։

$$t = 120\\ \\text{վ},\\qquad I = \\frac{q}{t} = \\frac{60}{120} = 0{,}5\\ \\text{Ա}$$

## Լուծված օրինակ 2

> $0{,}2$ Ա հոսանքը հոսում է $5$ րոպե։ Որքա՞ն լիցք է անցել և քանի՞ էլեկտրոն է դա։

$$q = I t = 0{,}2 \\cdot 300 = 60\\ \\text{Կլ},\\qquad N = \\frac{q}{e} = \\frac{60}{1{,}6 \\cdot 10^{-19}} = 3{,}75 \\cdot 10^{20}$$

### Վարժություններ

1. Գրիր հոսանքի ուժի բանաձևը և անվանիր նրա միավորը։
2. Արտահայտիր ամպերով՝ $250$ մԱ, $20$ մԱ, $500\\ \\mu$Ա։
3. Արտահայտիր միլիամպերով՝ $0{,}4$ Ա, $1{,}5$ Ա։
4. $1$ րոպեում լարով անցնում է $120$ Կլ լիցք։ Գտիր հոսանքի ուժը։
5. $2$ Ա հոսանքը հոսում է կես ժամ։ Գտիր լիցքը։
6. Ինչպե՞ս պետք է միացվի ամպերաչափը, և ինչո՞ւ պետք է նրա դիմադրությունը փոքր լինի։
7. Աշակերտն ամպերաչափը միացնում է ուղղակի մարտկոցին։ Ի՞նչ կլինի։
8. $0{,}5$ Ա հոսանքը լամպով հոսում է $10$ վ։ Քանի՞ էլեկտրոն է անցնում նրանով։

### Պատասխաններ

1. $I = q/t$, ամպերը։
2. $0{,}25$ Ա, $0{,}02$ Ա, $0{,}0005$ Ա։
3. $400$ մԱ, $1500$ մԱ։
4. $I = 120/60 = 2$ Ա։
5. $q = 2 \\cdot 1800 = 3600$ Կլ։
6. Հաջորդաբար տարրի հետ, փոքր դիմադրությունը հոսանքը թողնում է գրեթե անփոփոխ։
7. Հոսանքը կլինի հսկայական, և ամպերաչափը (հնարավոր է՝ նաև մարտկոցը) կփչանա։
8. $q = 0{,}5 \\cdot 10 = 5$ Կլ, $N = 5/(1{,}6 \\cdot 10^{-19}) \\approx 3{,}1 \\cdot 10^{19}$։`,
        ru: `## Сколько заряда проходит?

Две лампы могут гореть, но одна светит ярче: через неё за каждую секунду проходит больше заряда. Величина, которая это измеряет, — **сила тока** $I$:

$$I = \\frac{q}{t}$$

где $q$ — заряд, прошедший через поперечное сечение проводника за время $t$.

Единица — **ампер** (А), в честь Андре Мари Ампера. Из формулы $q = I t$, поэтому ток $1$ А переносит $1$ Кл заряда каждую секунду.

| Приставка | Значение | Пример |
|---|---|---|
| $1$ мА (миллиампер) | $0{,}001$ А | карманный калькулятор |
| $1\\ \\mu$А (микроампер) | $0{,}000001$ А | нервные сигналы |
| $1$ А | | лампа $230$ Вт |
| $100$ А и больше | | стартер автомобиля, сварочный аппарат |

## Безопасность

Тело человека — проводник. Ток $1$ мА ощущается, $10$ мА сводит мышцы так, что человек не может разжать руку, а $100$ мА через грудную клетку смертельны. Никогда не касайся оголённых проводов, не суй ничего в розетку и не пользуйся электроприбором мокрыми руками.

## Измерение: амперметр

**Амперметр** измеряет силу тока. Правила:

1. Включай его **последовательно** с тем элементом, ток которого измеряешь, чтобы через оба шёл один ток.
2. Клемму $+$ соединяй с проводом, идущим от $+$ полюса источника.
3. Никогда не подключай амперметр прямо к полюсам источника: у него почти нет сопротивления, и он сгорит.
4. Выбирай предел измерения больше ожидаемого тока.

Собственное сопротивление амперметра должно быть очень малым, чтобы он не изменял измеряемый ток.

## Разобранный пример 1

> Через лампу за $2$ минуты проходит заряд $60$ Кл. Найди силу тока.

$$t = 120\\ \\text{с},\\qquad I = \\frac{q}{t} = \\frac{60}{120} = 0{,}5\\ \\text{А}$$

## Разобранный пример 2

> Ток $0{,}2$ А идёт $5$ минут. Какой заряд прошёл и сколько это электронов?

$$q = I t = 0{,}2 \\cdot 300 = 60\\ \\text{Кл},\\qquad N = \\frac{q}{e} = \\frac{60}{1{,}6 \\cdot 10^{-19}} = 3{,}75 \\cdot 10^{20}$$

### Упражнения

1. Запиши формулу силы тока и назови её единицу.
2. Вырази в амперах: $250$ мА, $20$ мА, $500\\ \\mu$А.
3. Вырази в миллиамперах: $0{,}4$ А, $1{,}5$ А.
4. Через провод за $1$ минуту проходит заряд $120$ Кл. Найди силу тока.
5. Ток $2$ А идёт полчаса. Найди заряд.
6. Как надо включать амперметр и почему его сопротивление должно быть малым?
7. Ученик подключил амперметр прямо к батарейке. Что произойдёт?
8. Ток $0{,}5$ А идёт через лампу $10$ с. Сколько электронов проходит через неё?

### Ответы

1. $I = q/t$; ампер.
2. $0{,}25$ А, $0{,}02$ А, $0{,}0005$ А.
3. $400$ мА, $1500$ мА.
4. $I = 120/60 = 2$ А.
5. $q = 2 \\cdot 1800 = 3600$ Кл.
6. Последовательно с элементом; малое сопротивление оставляет ток почти неизменным.
7. Ток будет огромным, и амперметр (возможно, и батарейка) выйдет из строя.
8. $q = 0{,}5 \\cdot 10 = 5$ Кл; $N = 5/(1{,}6 \\cdot 10^{-19}) \\approx 3{,}1 \\cdot 10^{19}$.`,
      },
      [
        q(t("The formula for current strength is", "Հոսանքի ուժի բանաձևն է", "Формула силы тока —"), [
          t("I = q/t", "I = q/t", "I = q/t"),
          t("I = qt", "I = qt", "I = qt"),
          t("I = t/q", "I = t/q", "I = t/q"),
        ], 0),
        q(t("250 mA in amperes is", "250 մԱ-ն ամպերով է", "250 мА в амперах — это"), [
          t("2.5 A", "2,5 Ա", "2,5 А"),
          t("0.25 A", "0,25 Ա", "0,25 А"),
          t("0.025 A", "0,025 Ա", "0,025 А"),
        ], 1),
        q(t("An ammeter must be connected", "Ամպերաչափը պետք է միացվի", "Амперметр надо включать"), [
          t("in parallel with the element", "տարրին զուգահեռ", "параллельно элементу"),
          t("straight to the poles of the source", "ուղղակի աղբյուրի բևեռներին", "прямо к полюсам источника"),
          t("in series with the element", "տարրի հետ հաջորդաբար", "последовательно с элементом"),
        ], 2),
        q(t("A charge of 30 C passes in 10 s. The current is", "10 վ-ում անցնում է 30 Կլ լիցք։ Հոսանքի ուժն է", "За 10 с проходит заряд 30 Кл. Сила тока равна"), [
          t("3 A", "3 Ա", "3 А"),
          t("300 A", "300 Ա", "300 А"),
          t("0.3 A", "0,3 Ա", "0,3 А"),
        ], 0),
        q(t("The resistance of an ammeter should be", "Ամպերաչափի դիմադրությունը պետք է լինի", "Сопротивление амперметра должно быть"), [
          t("very large", "շատ մեծ", "очень большим"),
          t("very small", "շատ փոքր", "очень малым"),
          t("exactly 1 ohm", "ճիշտ 1 օհմ", "ровно 1 ом"),
        ], 1),
        q(t("A current of 1 A flowing for 1 minute carries a charge of", "1 րոպե հոսող 1 Ա հոսանքը տանում է լիցք", "Ток 1 А за 1 минуту переносит заряд"), [
          t("1 C", "1 Կլ", "1 Кл"),
          t("600 C", "600 Կլ", "600 Кл"),
          t("60 C", "60 Կլ", "60 Кл"),
        ], 2),
      ],
    ),
    lesson(
      "voltage",
      ["Voltage; voltmeter", "Լարում, վոլտաչափ", "Напряжение; вольтметр"],
      {
        en: ["Explain voltage as work per unit charge", "Use the formula U = A/q and the unit volt", "Connect a voltmeter correctly and compare it with an ammeter"],
        hy: ["Բացատրել լարումն որպես միավոր լիցքի վրա կատարված աշխատանք", "Կիրառել U = A/q բանաձևը և վոլտ միավորը", "Ճիշտ միացնել վոլտաչափը և համեմատել ամպերաչափի հետ"],
        ru: ["Объяснять напряжение как работу на единицу заряда", "Применять формулу U = A/q и единицу вольт", "Правильно включать вольтметр и сравнивать его с амперметром"],
      },
      {
        en: `## Why current alone is not enough

The same current of $0.5$ A can flow through a torch lamp and through a room lamp, yet the room lamp shines far brighter. The difference is how much work the field does on each coulomb of charge.

**Voltage** $U$ between two points shows the work done by the electric field in moving a charge of $1$ C from one point to the other:

$$U = \\frac{A}{q},\\qquad A = qU = IUt$$

The unit is the **volt** (V), after Alessandro Volta. A voltage of $1$ V means the field does $1$ J of work on each coulomb.

| Where | Voltage |
|---|---|
| AA cell | $1.5$ V |
| Car accumulator | $12$ V |
| Mains socket | $220$–$230$ V |
| Trolleybus wire | $600$ V |
| Overhead power line | up to $750\\,000$ V |
| Lightning | about $10^8$ V |

Voltages above $36$ V are dangerous for a human; the "safe" voltage used in damp places is $12$ V.

## The voltmeter

A **voltmeter** measures voltage. Rules:

1. Connect it **in parallel** with the element across which you measure, that is, to the two ends of that element.
2. Observe the polarity: $+$ to the side nearer the $+$ pole.
3. Its resistance must be very **large**, so that it takes almost no current and does not disturb the circuit.

| | Ammeter | Voltmeter |
|---|---|---|
| Measures | current strength | voltage |
| Connected | in series | in parallel |
| Own resistance | very small | very large |

## Worked example 1

> The field does $18$ J of work moving $3$ C through a lamp. Find the voltage.

$$U = \\frac{A}{q} = \\frac{18}{3} = 6\\ \\text{V}$$

## Worked example 2

> How much work does the field do in a lamp at $230$ V through which a charge of $5$ C passes?

$$A = qU = 5 \\cdot 230 = 1150\\ \\text{J}$$

## Worked example 3

> A current of $0.4$ A flows through a $6$ V lamp for $2$ minutes. Find the work of the current.

$$A = IUt = 0.4 \\cdot 6 \\cdot 120 = 288\\ \\text{J}$$

### Exercises

1. What does a voltage of $1$ V mean?
2. Write two formulas for the work of the current.
3. The field does $60$ J on a charge of $4$ C. Find the voltage.
4. Find the work done on a charge of $0.5$ C at a voltage of $230$ V.
5. A current of $2$ A flows through a $12$ V motor for $1$ minute. Find the work.
6. How is a voltmeter connected, and why must its resistance be large?
7. A pupil connects a voltmeter in series with a lamp. What will the lamp do?
8. Three AA cells are joined in a row $(+$ to $-)$. What is the total voltage?

### Answers

1. The field does $1$ J of work on each coulomb of charge.
2. $A = qU$ and $A = IUt$.
3. $U = 60/4 = 15$ V.
4. $A = 0.5 \\cdot 230 = 115$ J.
5. $A = 2 \\cdot 12 \\cdot 60 = 1440$ J.
6. In parallel with the element; a large resistance keeps it from taking current and changing the circuit.
7. Almost no current will flow (the voltmeter's resistance is huge), and the lamp will not light.
8. $3 \\cdot 1.5 = 4.5$ V.`,
        hy: `## Ինչու միայն հոսանքը բավական չէ

Նույն $0{,}5$ Ա հոսանքը կարող է հոսել և՛ լապտերի, և՛ սենյակի լամպով, բայց սենյակի լամպը շատ ավելի պայծառ է փայլում։ Տարբերությունն այն է, թե դաշտն որքան աշխատանք է կատարում լիցքի ամեն կուլոնի վրա։

Երկու կետերի միջև **լարումը** $U$ ցույց է տալիս էլեկտրական դաշտի կատարած աշխատանքը՝ $1$ Կլ լիցքը մեկ կետից մյուսը տեղափոխելիս՝

$$U = \\frac{A}{q},\\qquad A = qU = IUt$$

Միավորը **վոլտն** է (Վ)՝ Ալեսանդրո Վոլտայի անունով։ $1$ Վ լարում նշանակում է, որ դաշտն ամեն կուլոնի վրա կատարում է $1$ Ջ աշխատանք։

| Որտեղ | Լարում |
|---|---|
| AA տարր | $1{,}5$ Վ |
| Ավտոմեքենայի ակումուլյատոր | $12$ Վ |
| Ցանցի վարդակ | $220$–$230$ Վ |
| Տրոլեյբուսի լար | $600$ Վ |
| Օդային էլեկտրահաղորդման գիծ | մինչև $750\\,000$ Վ |
| Կայծակ | մոտ $10^8$ Վ |

$36$ Վ-ից բարձր լարումները վտանգավոր են մարդու համար, խոնավ տեղերում օգտագործվող «անվտանգ» լարումը $12$ Վ է։

## Վոլտաչափ

**Վոլտաչափը** չափում է լարումը։ Կանոնները՝

1. Միացրու այն **զուգահեռ** այն տարրին, որի վրայի լարումը չափում ես, այսինքն՝ այդ տարրի երկու ծայրերին։
2. Պահպանիր բևեռայնությունը՝ $+$-ը $+$ բևեռին ավելի մոտ կողմին։
3. Նրա դիմադրությունը պետք է շատ **մեծ** լինի, որ գրեթե հոսանք չվերցնի և շղթան չխանգարի։

| | Ամպերաչափ | Վոլտաչափ |
|---|---|---|
| Չափում է | հոսանքի ուժը | լարումը |
| Միացվում է | հաջորդաբար | զուգահեռ |
| Սեփական դիմադրությունը | շատ փոքր | շատ մեծ |

## Լուծված օրինակ 1

> Դաշտը $18$ Ջ աշխատանք է կատարում՝ լամպով $3$ Կլ տեղափոխելիս։ Գտիր լարումը։

$$U = \\frac{A}{q} = \\frac{18}{3} = 6\\ \\text{Վ}$$

## Լուծված օրինակ 2

> Որքա՞ն աշխատանք է կատարում դաշտը $230$ Վ լամպում, որով անցնում է $5$ Կլ լիցք։

$$A = qU = 5 \\cdot 230 = 1150\\ \\text{Ջ}$$

## Լուծված օրինակ 3

> $0{,}4$ Ա հոսանքը $6$ Վ լամպով հոսում է $2$ րոպե։ Գտիր հոսանքի աշխատանքը։

$$A = IUt = 0{,}4 \\cdot 6 \\cdot 120 = 288\\ \\text{Ջ}$$

### Վարժություններ

1. Ի՞նչ է նշանակում $1$ Վ լարում։
2. Գրիր հոսանքի աշխատանքի երկու բանաձև։
3. Դաշտը $4$ Կլ լիցքի վրա կատարում է $60$ Ջ։ Գտիր լարումը։
4. Գտիր $230$ Վ լարման դեպքում $0{,}5$ Կլ լիցքի վրա կատարված աշխատանքը։
5. $2$ Ա հոսանքը $12$ Վ շարժիչով հոսում է $1$ րոպե։ Գտիր աշխատանքը։
6. Ինչպե՞ս է միացվում վոլտաչափը և ինչո՞ւ պետք է նրա դիմադրությունը մեծ լինի։
7. Աշակերտը վոլտաչափը միացնում է լամպի հետ հաջորդաբար։ Ի՞նչ կանի լամպը։
8. Երեք AA տարր միացված են իրար հետևից ($+$-ը $-$-ին)։ Որքա՞ն է լրիվ լարումը։

### Պատասխաններ

1. Դաշտը լիցքի ամեն կուլոնի վրա կատարում է $1$ Ջ աշխատանք։
2. $A = qU$ և $A = IUt$։
3. $U = 60/4 = 15$ Վ։
4. $A = 0{,}5 \\cdot 230 = 115$ Ջ։
5. $A = 2 \\cdot 12 \\cdot 60 = 1440$ Ջ։
6. Տարրին զուգահեռ, մեծ դիմադրությունը թույլ չի տալիս հոսանք վերցնել և շղթան փոխել։
7. Հոսանք գրեթե չի հոսի (վոլտաչափի դիմադրությունը հսկայական է), և լամպը չի վառվի։
8. $3 \\cdot 1{,}5 = 4{,}5$ Վ։`,
        ru: `## Почему одного тока мало

Один и тот же ток $0{,}5$ А может идти и через лампочку фонарика, и через комнатную лампу, но комнатная светит гораздо ярче. Разница в том, сколько работы поле совершает над каждым кулоном заряда.

**Напряжение** $U$ между двумя точками показывает работу электрического поля при перемещении заряда $1$ Кл из одной точки в другую:

$$U = \\frac{A}{q},\\qquad A = qU = IUt$$

Единица — **вольт** (В), в честь Алессандро Вольты. Напряжение $1$ В означает, что поле совершает $1$ Дж работы над каждым кулоном.

| Где | Напряжение |
|---|---|
| Элемент AA | $1{,}5$ В |
| Автомобильный аккумулятор | $12$ В |
| Розетка сети | $220$–$230$ В |
| Провод троллейбуса | $600$ В |
| Воздушная линия электропередачи | до $750\\,000$ В |
| Молния | около $10^8$ В |

Напряжения выше $36$ В опасны для человека; «безопасное» напряжение для сырых помещений — $12$ В.

## Вольтметр

**Вольтметр** измеряет напряжение. Правила:

1. Включай его **параллельно** тому элементу, напряжение на котором измеряешь, то есть к двум его концам.
2. Соблюдай полярность: $+$ к стороне, ближней к $+$ полюсу.
3. Его сопротивление должно быть очень **большим**, чтобы он почти не брал тока и не вмешивался в цепь.

| | Амперметр | Вольтметр |
|---|---|---|
| Измеряет | силу тока | напряжение |
| Включается | последовательно | параллельно |
| Своё сопротивление | очень малое | очень большое |

## Разобранный пример 1

> Поле совершает $18$ Дж работы, перемещая $3$ Кл через лампу. Найди напряжение.

$$U = \\frac{A}{q} = \\frac{18}{3} = 6\\ \\text{В}$$

## Разобранный пример 2

> Какую работу совершает поле в лампе при $230$ В, через которую проходит заряд $5$ Кл?

$$A = qU = 5 \\cdot 230 = 1150\\ \\text{Дж}$$

## Разобранный пример 3

> Ток $0{,}4$ А идёт через лампу на $6$ В в течение $2$ минут. Найди работу тока.

$$A = IUt = 0{,}4 \\cdot 6 \\cdot 120 = 288\\ \\text{Дж}$$

### Упражнения

1. Что означает напряжение $1$ В?
2. Запиши две формулы работы тока.
3. Поле совершает $60$ Дж над зарядом $4$ Кл. Найди напряжение.
4. Найди работу над зарядом $0{,}5$ Кл при напряжении $230$ В.
5. Ток $2$ А идёт через двигатель на $12$ В в течение $1$ минуты. Найди работу.
6. Как включают вольтметр и почему его сопротивление должно быть большим?
7. Ученик включил вольтметр последовательно с лампой. Что будет с лампой?
8. Три элемента AA соединены подряд ($+$ к $-$). Каково общее напряжение?

### Ответы

1. Поле совершает $1$ Дж работы над каждым кулоном заряда.
2. $A = qU$ и $A = IUt$.
3. $U = 60/4 = 15$ В.
4. $A = 0{,}5 \\cdot 230 = 115$ Дж.
5. $A = 2 \\cdot 12 \\cdot 60 = 1440$ Дж.
6. Параллельно элементу; большое сопротивление не даёт ему брать ток и менять цепь.
7. Ток почти не пойдёт (сопротивление вольтметра огромно), и лампа не загорится.
8. $3 \\cdot 1{,}5 = 4{,}5$ В.`,
      },
      [
        q(t("Voltage shows", "Լարումը ցույց է տալիս", "Напряжение показывает"), [
          t("the work of the field on a charge of 1 C", "դաշտի աշխատանքը 1 Կլ լիցքի վրա", "работу поля над зарядом 1 Кл"),
          t("the charge passing in 1 s", "1 վ-ում անցնող լիցքը", "заряд, проходящий за 1 с"),
          t("the resistance of the conductor", "հաղորդչի դիմադրությունը", "сопротивление проводника"),
        ], 0),
        q(t("The unit of voltage is", "Լարման միավորն է", "Единица напряжения —"), [
          t("the ampere", "ամպերը", "ампер"),
          t("the volt", "վոլտը", "вольт"),
          t("the coulomb", "կուլոնը", "кулон"),
        ], 1),
        q(t("A voltmeter is connected", "Վոլտաչափը միացվում է", "Вольтметр включают"), [
          t("in series with the element", "տարրի հետ հաջորդաբար", "последовательно с элементом"),
          t("instead of the source", "աղբյուրի փոխարեն", "вместо источника"),
          t("in parallel with the element", "տարրին զուգահեռ", "параллельно элементу"),
        ], 2),
        q(t("The field does 20 J on a charge of 4 C. The voltage is", "Դաշտը 4 Կլ լիցքի վրա կատարում է 20 Ջ։ Լարումն է", "Поле совершает 20 Дж над зарядом 4 Кл. Напряжение равно"), [
          t("5 V", "5 Վ", "5 В"),
          t("80 V", "80 Վ", "80 В"),
          t("0.2 V", "0,2 Վ", "0,2 В"),
        ], 0),
        q(t("The resistance of a voltmeter should be", "Վոլտաչափի դիմադրությունը պետք է լինի", "Сопротивление вольтметра должно быть"), [
          t("very small", "շատ փոքր", "очень малым"),
          t("very large", "շատ մեծ", "очень большим"),
          t("equal to that of the lamp", "լամպի դիմադրությանը հավասար", "равным сопротивлению лампы"),
        ], 1),
        q(t("The work of the current is given by", "Հոսանքի աշխատանքը տրվում է", "Работа тока даётся формулой"), [
          t("A = I/U", "A = I/U", "A = I/U"),
          t("A = U/q", "A = U/q", "A = U/q"),
          t("A = IUt", "A = IUt", "A = IUt"),
        ], 2),
      ],
    ),
    lesson(
      "resistance-ohms-law",
      ["Resistance; Ohm's law", "Դիմադրություն, Օհմի օրենք", "Сопротивление; закон Ома"],
      {
        en: ["Explain the cause of resistance in a metal", "State and apply Ohm's law for a part of a circuit", "Find any one of I, U, R from the other two"],
        hy: ["Բացատրել մետաղում դիմադրության պատճառը", "Ձևակերպել և կիրառել Օհմի օրենքը շղթայի հատվածի համար", "Երկուսից գտնել I, U, R մեծություններից ցանկացածը"],
        ru: ["Объяснять причину сопротивления в металле", "Формулировать и применять закон Ома для участка цепи", "Находить любую из величин I, U, R по двум другим"],
      },
      {
        en: `## Why conductors resist

Free electrons moving through a metal keep colliding with the ions of the lattice. Each collision slows them down and warms the metal. This opposition to the current is called **electrical resistance** $R$.

Different conductors resist differently: a thin nichrome wire resists far more than a thick copper one of the same length.

The unit of resistance is the **ohm** ($\\Omega$), after Georg Ohm. A conductor has a resistance of $1\\ \\Omega$ if a voltage of $1$ V across it gives a current of $1$ A.

## Ohm's law

Experiments with a wire and a set of cells show two things:

- if $R$ is kept the same, the current grows in proportion to the voltage;
- if $U$ is kept the same, the current falls in proportion to the resistance.

> **Ohm's law for a part of a circuit:** the current in a part of a circuit is directly proportional to the voltage across it and inversely proportional to its resistance.

$$I = \\frac{U}{R},\\qquad U = IR,\\qquad R = \\frac{U}{I}$$

The third form is a way to *measure* $R$, not an explanation of it: the resistance of a wire is a property of that wire and does not change when you change the voltage.

## Worked examples

> A lamp of resistance $12\\ \\Omega$ is at $6$ V. Find the current.

$$I = \\frac{6}{12} = 0.5\\ \\text{A}$$

> A current of $0.2$ A flows through a resistor of $50\\ \\Omega$. Find the voltage.

$$U = 0.2 \\cdot 50 = 10\\ \\text{V}$$

> An ammeter reads $2$ A and a voltmeter $4.6$ V on a lamp. Find its resistance.

$$R = \\frac{4.6}{2} = 2.3\\ \\Omega$$

## A graph

If you plot $I$ against $U$ for a wire you get a straight line through the origin. A steeper line means a smaller resistance. Two wires on one graph are easy to compare: at the same voltage, the one with the larger current has the smaller resistance.

### Exercises

1. What causes resistance in a metal?
2. State Ohm's law and write its three forms.
3. $U = 12$ V, $R = 4\\ \\Omega$. Find $I$.
4. $I = 0.3$ A, $R = 20\\ \\Omega$. Find $U$.
5. $U = 230$ V, $I = 0.5$ A. Find $R$.
6. The voltage on a resistor is doubled. What happens to the current? And if the resistance is doubled instead?
7. Two wires are at the same voltage; in the first the current is $3$ A, in the second $1$ A. Which has the larger resistance, and by how many times?
8. A lamp has $R = 500\\ \\Omega$ and works at $230$ V. Find the current, and the charge passing in $1$ minute.

### Answers

1. Collisions of the free electrons with the ions of the crystal lattice.
2. $I$ is proportional to $U$ and inversely proportional to $R$: $I = U/R$, $U = IR$, $R = U/I$.
3. $I = 12/4 = 3$ A.
4. $U = 0.3 \\cdot 20 = 6$ V.
5. $R = 230/0.5 = 460\\ \\Omega$.
6. The current doubles; if the resistance doubles the current halves.
7. The second, three times larger.
8. $I = 230/500 = 0.46$ A; $q = 0.46 \\cdot 60 = 27.6$ C.`,
        hy: `## Ինչու են հաղորդիչները դիմադրում

Մետաղում շարժվող ազատ էլեկտրոնները մշտապես բախվում են վանդակի իոնների հետ։ Ամեն բախում դանդաղեցնում է դրանք և տաքացնում մետաղը։ Հոսանքին այս հակազդումը կոչվում է **էլեկտրական դիմադրություն** $R$։

Տարբեր հաղորդիչներ տարբեր են դիմադրում. նիքրոմե բարակ լարը շատ ավելի է դիմադրում, քան նույն երկարության հաստ պղնձե լարը։

Դիմադրության միավորը **օհմն** է ($\\Omega$)՝ Գեորգ Օհմի անունով։ Հաղորդիչն ունի $1\\ \\Omega$ դիմադրություն, եթե նրա վրա $1$ Վ լարումը տալիս է $1$ Ա հոսանք։

## Օհմի օրենք

Լարի և տարրերի հավաքածուի հետ փորձերը ցույց են տալիս երկու բան՝

- եթե $R$-ը նույնն է մնում, հոսանքն աճում է լարման համեմատ,
- եթե $U$-ն նույնն է մնում, հոսանքը նվազում է դիմադրության համեմատ։

> **Օհմի օրենքը շղթայի հատվածի համար**՝ շղթայի հատվածում հոսանքի ուժն ուղիղ համեմատական է հատվածի վրայի լարմանը և հակադարձ համեմատական նրա դիմադրությանը։

$$I = \\frac{U}{R},\\qquad U = IR,\\qquad R = \\frac{U}{I}$$

Երրորդ տեսքը $R$-ը *չափելու* եղանակ է, ոչ թե նրա բացատրությունը. լարի դիմադրությունն այդ լարի հատկությունն է և չի փոխվում լարումը փոխելիս։

## Լուծված օրինակներ

> $12\\ \\Omega$ դիմադրությամբ լամպը $6$ Վ-ի տակ է։ Գտիր հոսանքի ուժը։

$$I = \\frac{6}{12} = 0{,}5\\ \\text{Ա}$$

> $0{,}2$ Ա հոսանքը հոսում է $50\\ \\Omega$ դիմադրությամբ ռեզիստորով։ Գտիր լարումը։

$$U = 0{,}2 \\cdot 50 = 10\\ \\text{Վ}$$

> Ամպերաչափը ցույց է տալիս $2$ Ա, վոլտաչափը՝ $4{,}6$ Վ լամպի վրա։ Գտիր նրա դիմադրությունը։

$$R = \\frac{4{,}6}{2} = 2{,}3\\ \\Omega$$

## Գրաֆիկ

Եթե լարի համար $I$-ն կառուցես $U$-ի նկատմամբ, կստացվի սկզբնակետով անցնող ուղիղ։ Ավելի թեք ուղիղը նշանակում է ավելի փոքր դիմադրություն։ Մեկ գրաֆիկի վրա երկու լար հեշտ է համեմատել. նույն լարման դեպքում ավելի մեծ հոսանք ունեցողն ունի ավելի փոքր դիմադրություն։

### Վարժություններ

1. Ի՞նչն է առաջացնում դիմադրությունը մետաղում։
2. Ձևակերպիր Օհմի օրենքը և գրիր նրա երեք տեսքը։
3. $U = 12$ Վ, $R = 4\\ \\Omega$։ Գտիր $I$-ն։
4. $I = 0{,}3$ Ա, $R = 20\\ \\Omega$։ Գտիր $U$-ն։
5. $U = 230$ Վ, $I = 0{,}5$ Ա։ Գտիր $R$-ը։
6. Ռեզիստորի վրայի լարումը կրկնապատկվում է։ Ի՞նչ է լինում հոսանքին։ Իսկ եթե դրա փոխարեն կրկնապատկվի դիմադրությունը։
7. Երկու լար նույն լարման տակ են. առաջինում հոսանքը $3$ Ա է, երկրորդում՝ $1$ Ա։ Ո՞րն ունի ավելի մեծ դիմադրություն և քանի՞ անգամ։
8. Լամպն ունի $R = 500\\ \\Omega$ և աշխատում է $230$ Վ-ի տակ։ Գտիր հոսանքի ուժը և $1$ րոպեում անցնող լիցքը։

### Պատասխաններ

1. Ազատ էլեկտրոնների բախումները բյուրեղավանդակի իոնների հետ։
2. $I$-ն համեմատական է $U$-ին և հակադարձ համեմատական $R$-ին՝ $I = U/R$, $U = IR$, $R = U/I$։
3. $I = 12/4 = 3$ Ա։
4. $U = 0{,}3 \\cdot 20 = 6$ Վ։
5. $R = 230/0{,}5 = 460\\ \\Omega$։
6. Հոսանքը կրկնապատկվում է, եթե դիմադրությունը կրկնապատկվի, հոսանքը կիսվում է։
7. Երկրորդը՝ երեք անգամ ավելի մեծ։
8. $I = 230/500 = 0{,}46$ Ա, $q = 0{,}46 \\cdot 60 = 27{,}6$ Կլ։`,
        ru: `## Почему проводники сопротивляются

Свободные электроны, движущиеся в металле, постоянно сталкиваются с ионами решётки. Каждое столкновение их замедляет и нагревает металл. Это противодействие току называют **электрическим сопротивлением** $R$.

Разные проводники сопротивляются по-разному: тонкая нихромовая проволока сопротивляется гораздо сильнее толстой медной той же длины.

Единица сопротивления — **ом** ($\\Omega$), в честь Георга Ома. У проводника сопротивление $1\\ \\Omega$, если напряжение $1$ В на нём даёт ток $1$ А.

## Закон Ома

Опыты с проволокой и набором элементов показывают две вещи:

- если $R$ не меняется, ток растёт пропорционально напряжению;
- если $U$ не меняется, ток падает пропорционально сопротивлению.

> **Закон Ома для участка цепи:** сила тока на участке цепи прямо пропорциональна напряжению на нём и обратно пропорциональна его сопротивлению.

$$I = \\frac{U}{R},\\qquad U = IR,\\qquad R = \\frac{U}{I}$$

Третья форма — способ *измерить* $R$, а не объяснение: сопротивление проволоки есть свойство самой проволоки и не меняется при изменении напряжения.

## Разобранные примеры

> Лампа сопротивлением $12\\ \\Omega$ включена на $6$ В. Найди ток.

$$I = \\frac{6}{12} = 0{,}5\\ \\text{А}$$

> Ток $0{,}2$ А идёт через резистор $50\\ \\Omega$. Найди напряжение.

$$U = 0{,}2 \\cdot 50 = 10\\ \\text{В}$$

> Амперметр показывает $2$ А, вольтметр на лампе — $4{,}6$ В. Найди её сопротивление.

$$R = \\frac{4{,}6}{2} = 2{,}3\\ \\Omega$$

## График

Если построить $I$ в зависимости от $U$ для проволоки, получится прямая через начало координат. Более крутая прямая означает меньшее сопротивление. Две проволоки на одном графике легко сравнить: при одном напряжении у той, где ток больше, сопротивление меньше.

### Упражнения

1. Что вызывает сопротивление в металле?
2. Сформулируй закон Ома и запиши его три формы.
3. $U = 12$ В, $R = 4\\ \\Omega$. Найди $I$.
4. $I = 0{,}3$ А, $R = 20\\ \\Omega$. Найди $U$.
5. $U = 230$ В, $I = 0{,}5$ А. Найди $R$.
6. Напряжение на резисторе удвоили. Что станет с током? А если вместо этого удвоить сопротивление?
7. Две проволоки под одним напряжением: в первой ток $3$ А, во второй $1$ А. У какой сопротивление больше и во сколько раз?
8. У лампы $R = 500\\ \\Omega$, она работает при $230$ В. Найди ток и заряд, проходящий за $1$ минуту.

### Ответы

1. Столкновения свободных электронов с ионами кристаллической решётки.
2. $I$ пропорционален $U$ и обратно пропорционален $R$: $I = U/R$, $U = IR$, $R = U/I$.
3. $I = 12/4 = 3$ А.
4. $U = 0{,}3 \\cdot 20 = 6$ В.
5. $R = 230/0{,}5 = 460\\ \\Omega$.
6. Ток удвоится; если удвоить сопротивление, ток уменьшится вдвое.
7. У второй, в три раза.
8. $I = 230/500 = 0{,}46$ А; $q = 0{,}46 \\cdot 60 = 27{,}6$ Кл.`,
      },
      [
        q(t("Ohm's law for a part of a circuit is", "Օհմի օրենքը շղթայի հատվածի համար է", "Закон Ома для участка цепи —"), [
          t("I = U/R", "I = U/R", "I = U/R"),
          t("I = UR", "I = UR", "I = UR"),
          t("I = R/U", "I = R/U", "I = R/U"),
        ], 0),
        q(t("The unit of resistance is", "Դիմադրության միավորն է", "Единица сопротивления —"), [
          t("the volt", "վոլտը", "вольт"),
          t("the ohm", "օհմը", "ом"),
          t("the ampere", "ամպերը", "ампер"),
        ], 1),
        q(t("Resistance in a metal appears because", "Մետաղում դիմադրությունն առաջանում է, քանի որ", "Сопротивление в металле возникает потому, что"), [
          t("the metal is cold", "մետաղը սառն է", "металл холодный"),
          t("electrons stand still", "էլեկտրոնները կանգ են առնում", "электроны стоят на месте"),
          t("free electrons collide with the ions of the lattice", "ազատ էլեկտրոնները բախվում են վանդակի իոնների հետ", "свободные электроны сталкиваются с ионами решётки"),
        ], 2),
        q(t("U = 9 V and R = 3 Ω. The current is", "U = 9 Վ և R = 3 Ω։ Հոսանքն է", "U = 9 В и R = 3 Ω. Ток равен"), [
          t("3 A", "3 Ա", "3 А"),
          t("27 A", "27 Ա", "27 А"),
          t("0.33 A", "0,33 Ա", "0,33 А"),
        ], 0),
        q(t("If the voltage stays the same and the resistance is tripled, the current", "Եթե լարումը նույնն է, իսկ դիմադրությունն եռապատկվում է, հոսանքը", "Если напряжение то же, а сопротивление утроить, ток"), [
          t("is tripled", "եռապատկվում է", "утроится"),
          t("becomes three times smaller", "դառնում է երեք անգամ փոքր", "уменьшится втрое"),
          t("does not change", "չի փոխվում", "не изменится"),
        ], 1),
        q(t("The graph of I against U for a metal wire is", "Մետաղե լարի համար I-ի գրաֆիկը U-ի նկատմամբ", "График I от U для металлической проволоки —"), [
          t("a parabola", "պարաբոլ է", "парабола"),
          t("a horizontal line", "հորիզոնական ուղիղ է", "горизонтальная прямая"),
          t("a straight line through the origin", "սկզբնակետով անցնող ուղիղ է", "прямая через начало координат"),
        ], 2),
      ],
    ),
    lesson(
      "resistivity-rheostat",
      ["Resistivity; rheostats", "Տեսակարար դիմադրություն, ռեոստատ", "Удельное сопротивление; реостаты"],
      {
        en: ["Use the formula R = \ρl/S", "Read a table of resistivities and choose a material for a wire", "Explain how a rheostat changes the current"],
        hy: ["Կիրառել R = \ρl/S բանաձևը", "Կարդալ տեսակարար դիմադրությունների աղյուսակը և նյութ ընտրել լարի համար", "Բացատրել, թե ինչպես է ռեոստատը փոխում հոսանքը"],
        ru: ["Применять формулу R = \ρl/S", "Читать таблицу удельных сопротивлений и выбирать материал для провода", "Объяснять, как реостат меняет ток"],
      },
      {
        en: `## What the resistance of a wire depends on

Three experiments with wires of the same material show:

- a **longer** wire has a larger resistance (twice the length, twice the resistance);
- a **thicker** wire has a smaller resistance (twice the area, half the resistance);
- different **materials** differ, even at the same length and thickness.

$$R = \\rho\\,\\frac{l}{S}$$

Here $l$ is the length in metres, $S$ the area of the cross-section in m², and $\\rho$ (rho) the **resistivity** of the material: the resistance of a wire of that material $1$ m long with a cross-section of $1$ m².

| Material | $\\rho$, $\\Omega\\cdot$mm²/m |
|---|---|
| Silver | $0.016$ |
| Copper | $0.017$ |
| Aluminium | $0.028$ |
| Iron | $0.10$ |
| Nichrome | $1.1$ |

In practice areas are given in mm², so $\\rho$ is written in $\\Omega\\cdot$mm²/m and then $R = \\rho l / S$ with $S$ in mm².

- Wires that must carry current without heating are made of **copper** or **aluminium** (small $\\rho$).
- Heating elements of kettles, irons and heaters are made of **nichrome**, whose $\\rho$ is about $65$ times larger than copper's and which stands red heat.

## Worked example 1

> Find the resistance of a copper wire $200$ m long with a cross-section of $0.5$ mm².

$$R = \\frac{0.017 \\cdot 200}{0.5} = 6.8\\ \\Omega$$

## Worked example 2

> A nichrome wire of cross-section $0.2$ mm² must have a resistance of $55\\ \\Omega$. How long must it be?

$$l = \\frac{RS}{\\rho} = \\frac{55 \\cdot 0.2}{1.1} = 10\\ \\text{m}$$

## The rheostat

A **rheostat** is a device for changing the resistance in a circuit, and hence the current.

A slider rheostat is a nichrome wire wound on a porcelain tube with a sliding contact. Moving the slider changes the length of wire the current passes through, so $R$ changes smoothly from almost zero to its maximum. A rheostat is always connected **in series** with the consumer.

Volume controls, light dimmers and the speed control of a model motor all work on this principle.

### Exercises

1. On what three things does the resistance of a wire depend?
2. Write the formula for resistance and name every letter in it.
3. Which has the larger resistance: a copper wire $10$ m long or the same wire $20$ m long?
4. Find the resistance of an iron wire $50$ m long with a cross-section of $0.5$ mm².
5. Find the length of a nichrome wire of cross-section $0.1$ mm² that has $22\\ \\Omega$.
6. Why are power lines made of aluminium and heating elements of nichrome?
7. How is a rheostat connected, and what happens to the current when the slider moves so that more wire is used?
8. Two copper wires have the same length, but the second is twice as thick. Compare their resistances.

### Answers

1. Its length, its cross-sectional area, and the material.
2. $R = \\rho l/S$: $R$ resistance, $\\rho$ resistivity, $l$ length, $S$ area of cross-section.
3. The $20$ m wire, twice as much.
4. $R = 0.10 \\cdot 50/0.5 = 10\\ \\Omega$.
5. $l = 22 \\cdot 0.1/1.1 = 2$ m.
6. Aluminium has a small resistivity and is light and cheap; nichrome has a large resistivity and withstands high temperature.
7. In series with the consumer; using more wire raises $R$, so the current falls.
8. The thicker one has half the resistance.`,
        hy: `## Ինչից է կախված լարի դիմադրությունը

Նույն նյութի լարերով երեք փորձ ցույց են տալիս՝

- **ավելի երկար** լարն ունի ավելի մեծ դիմադրություն (երկու անգամ երկար՝ երկու անգամ մեծ դիմադրություն),
- **ավելի հաստ** լարն ունի ավելի փոքր դիմադրություն (երկու անգամ մեծ մակերես՝ կիսով չափ փոքր դիմադրություն),
- տարբեր **նյութեր** տարբեր են նույն երկարության և հաստության դեպքում էլ։

$$R = \\rho\\,\\frac{l}{S}$$

Այստեղ $l$-ը երկարությունն է մետրերով, $S$-ը՝ լայնական հատույթի մակերեսը մ²-ով, իսկ $\\rho$-ն (ռո) նյութի **տեսակարար դիմադրությունն** է՝ այդ նյութի $1$ մ երկարության և $1$ մ² հատույթի լարի դիմադրությունը։

| Նյութ | $\\rho$, $\\Omega\\cdot$մմ²/մ |
|---|---|
| Արծաթ | $0{,}016$ |
| Պղինձ | $0{,}017$ |
| Ալյումին | $0{,}028$ |
| Երկաթ | $0{,}10$ |
| Նիքրոմ | $1{,}1$ |

Գործնականում մակերեսները տրվում են մմ²-ով, ուստի $\\rho$-ն գրվում է $\\Omega\\cdot$մմ²/մ-ով, և $R = \\rho l / S$՝ $S$-ը մմ²-ով։

- Հոսանքն առանց տաքանալու տանող լարերը պատրաստվում են **պղնձից** կամ **ալյումինից** (փոքր $\\rho$)։
- Թեյնիկների, արդուկների և տաքացուցիչների տաքացնող տարրերը պատրաստվում են **նիքրոմից**, որի $\\rho$-ն պղնձից մոտ $65$ անգամ մեծ է և որը դիմանում է կարմիր շիկացմանը։

## Լուծված օրինակ 1

> Գտիր $200$ մ երկարության և $0{,}5$ մմ² հատույթի պղնձե լարի դիմադրությունը։

$$R = \\frac{0{,}017 \\cdot 200}{0{,}5} = 6{,}8\\ \\Omega$$

## Լուծված օրինակ 2

> $0{,}2$ մմ² հատույթի նիքրոմե լարը պետք է ունենա $55\\ \\Omega$ դիմադրություն։ Որքա՞ն երկար պետք է լինի։

$$l = \\frac{RS}{\\rho} = \\frac{55 \\cdot 0{,}2}{1{,}1} = 10\\ \\text{մ}$$

## Ռեոստատ

**Ռեոստատը** սարք է՝ շղթայում դիմադրությունը, հետևաբար և հոսանքը փոխելու համար։

Սահող ռեոստատը ճենապակե խողովակի վրա փաթաթված նիքրոմե լար է՝ սահող հպակով։ Սահիչը տեղաշարժելով փոխվում է այն լարի երկարությունը, որով անցնում է հոսանքը, ուստի $R$-ը սահուն փոխվում է գրեթե զրոյից մինչև առավելագույնը։ Ռեոստատը միշտ միացվում է սպառիչի հետ **հաջորդաբար**։

Ձայնի կարգավորիչները, լույսի պայծառության կարգավորիչները և մոդելի շարժիչի արագության կարգավորումն աշխատում են այս սկզբունքով։

### Վարժություններ

1. Ո՞ր երեք բանից է կախված լարի դիմադրությունը։
2. Գրիր դիմադրության բանաձևը և անվանիր նրա ամեն տառը։
3. Ո՞րն ունի ավելի մեծ դիմադրություն՝ $10$ մ երկարության պղնձե լա՞րը, թե՞ նույն լարի $20$ մ-ը։
4. Գտիր $50$ մ երկարության և $0{,}5$ մմ² հատույթի երկաթե լարի դիմադրությունը։
5. Գտիր $0{,}1$ մմ² հատույթի նիքրոմե լարի երկարությունը, որն ունի $22\\ \\Omega$։
6. Ինչո՞ւ են էլեկտրահաղորդման գծերն ալյումինից, իսկ տաքացնող տարրերը՝ նիքրոմից։
7. Ինչպե՞ս է միացվում ռեոստատը, և ի՞նչ է լինում հոսանքին, երբ սահիչն այնպես է շարժվում, որ ավելի շատ լար օգտագործվի։
8. Երկու պղնձե լար ունեն նույն երկարությունը, բայց երկրորդն երկու անգամ հաստ է։ Համեմատիր նրանց դիմադրությունները։

### Պատասխաններ

1. Երկարությունից, լայնական հատույթի մակերեսից և նյութից։
2. $R = \\rho l/S$՝ $R$-ը դիմադրությունն է, $\\rho$-ն՝ տեսակարար դիմադրությունը, $l$-ը՝ երկարությունը, $S$-ը՝ հատույթի մակերեսը։
3. $20$ մ լարը՝ երկու անգամ ավելի։
4. $R = 0{,}10 \\cdot 50/0{,}5 = 10\\ \\Omega$։
5. $l = 22 \\cdot 0{,}1/1{,}1 = 2$ մ։
6. Ալյումինն ունի փոքր տեսակարար դիմադրություն և թեթև ու էժան է, նիքրոմն ունի մեծ տեսակարար դիմադրություն և դիմանում է բարձր ջերմաստիճանին։
7. Սպառիչի հետ հաջորդաբար, ավելի շատ լար օգտագործելով $R$-ը մեծանում է, ուստի հոսանքը նվազում է։
8. Ավելի հաստն ունի կիսով չափ փոքր դիմադրություն։`,
        ru: `## От чего зависит сопротивление проволоки

Три опыта с проволоками из одного материала показывают:

- **более длинная** проволока имеет большее сопротивление (вдвое длиннее — вдвое больше);
- **более толстая** проволока имеет меньшее сопротивление (вдвое больше площадь — вдвое меньше сопротивление);
- разные **материалы** различаются даже при одинаковой длине и толщине.

$$R = \\rho\\,\\frac{l}{S}$$

Здесь $l$ — длина в метрах, $S$ — площадь поперечного сечения в м², а $\\rho$ (ро) — **удельное сопротивление** материала: сопротивление проволоки из этого материала длиной $1$ м с сечением $1$ м².

| Материал | $\\rho$, $\\Omega\\cdot$мм²/м |
|---|---|
| Серебро | $0{,}016$ |
| Медь | $0{,}017$ |
| Алюминий | $0{,}028$ |
| Железо | $0{,}10$ |
| Нихром | $1{,}1$ |

На практике площади дают в мм², поэтому $\\rho$ записывают в $\\Omega\\cdot$мм²/м, и тогда $R = \\rho l / S$ с $S$ в мм².

- Провода, которые должны нести ток без нагрева, делают из **меди** или **алюминия** (малое $\\rho$).
- Нагревательные элементы чайников, утюгов и обогревателей делают из **нихрома**: его $\\rho$ примерно в $65$ раз больше, чем у меди, и он выдерживает красное каление.

## Разобранный пример 1

> Найди сопротивление медного провода длиной $200$ м с сечением $0{,}5$ мм².

$$R = \\frac{0{,}017 \\cdot 200}{0{,}5} = 6{,}8\\ \\Omega$$

## Разобранный пример 2

> Нихромовая проволока сечением $0{,}2$ мм² должна иметь сопротивление $55\\ \\Omega$. Какой длины она должна быть?

$$l = \\frac{RS}{\\rho} = \\frac{55 \\cdot 0{,}2}{1{,}1} = 10\\ \\text{м}$$

## Реостат

**Реостат** — прибор для изменения сопротивления в цепи, а значит, и тока.

Ползунковый реостат — нихромовая проволока, намотанная на фарфоровую трубку, со скользящим контактом. Передвигая ползунок, меняют длину проволоки, по которой идёт ток, поэтому $R$ плавно меняется от почти нуля до максимума. Реостат всегда включают **последовательно** с потребителем.

Регуляторы громкости, диммеры освещения и регулировка скорости модельного двигателя работают по этому принципу.

### Упражнения

1. От каких трёх вещей зависит сопротивление проволоки?
2. Запиши формулу сопротивления и назови каждую букву в ней.
3. У какой проволоки сопротивление больше: у медной длиной $10$ м или у той же длиной $20$ м?
4. Найди сопротивление железной проволоки длиной $50$ м с сечением $0{,}5$ мм².
5. Найди длину нихромовой проволоки сечением $0{,}1$ мм², имеющей $22\\ \\Omega$.
6. Почему линии электропередачи делают из алюминия, а нагревательные элементы из нихрома?
7. Как включают реостат и что происходит с током, когда ползунок двигают так, что используется больше проволоки?
8. Две медные проволоки одной длины, но вторая вдвое толще. Сравни их сопротивления.

### Ответы

1. От длины, площади поперечного сечения и материала.
2. $R = \\rho l/S$: $R$ — сопротивление, $\\rho$ — удельное сопротивление, $l$ — длина, $S$ — площадь сечения.
3. У проволоки длиной $20$ м, вдвое больше.
4. $R = 0{,}10 \\cdot 50/0{,}5 = 10\\ \\Omega$.
5. $l = 22 \\cdot 0{,}1/1{,}1 = 2$ м.
6. У алюминия малое удельное сопротивление, он лёгкий и дешёвый; у нихрома большое удельное сопротивление и он выдерживает высокую температуру.
7. Последовательно с потребителем; при большей длине проволоки $R$ растёт, поэтому ток падает.
8. У более толстой сопротивление вдвое меньше.`,
      },
      [
        q(t("The formula for the resistance of a wire is", "Լարի դիմադրության բանաձևն է", "Формула сопротивления проволоки —"), [
          t("R = ρl/S", "R = ρl/S", "R = ρl/S"),
          t("R = ρS/l", "R = ρS/l", "R = ρS/l"),
          t("R = lS/ρ", "R = lS/ρ", "R = lS/ρ"),
        ], 0),
        q(t("If a wire is made twice as long, its resistance", "Եթե լարը դարձնենք երկու անգամ երկար, նրա դիմադրությունը", "Если проволоку сделать вдвое длиннее, её сопротивление"), [
          t("halves", "կիսվում է", "уменьшится вдвое"),
          t("doubles", "կրկնապատկվում է", "удвоится"),
          t("does not change", "չի փոխվում", "не изменится"),
        ], 1),
        q(t("Heating elements are made of nichrome because its resistivity is", "Տաքացնող տարրերը նիքրոմից են, քանի որ նրա տեսակարար դիմադրությունը", "Нагревательные элементы делают из нихрома, потому что его удельное сопротивление"), [
          t("the smallest of all metals", "բոլոր մետաղներից ամենափոքրն է", "наименьшее среди металлов"),
          t("equal to copper's", "պղնձի հետ հավասար է", "равно медному"),
          t("much larger than copper's", "պղնձից շատ ավելի մեծ է", "намного больше медного"),
        ], 2),
        q(t("A copper wire 100 m long with S = 0.5 mm² has a resistance of about", "100 մ երկարության և S = 0,5 մմ² պղնձե լարն ունի մոտ", "Медный провод длиной 100 м с S = 0,5 мм² имеет сопротивление около"), [
          t("3.4 Ω", "3,4 Ω", "3,4 Ω"),
          t("34 Ω", "34 Ω", "34 Ω"),
          t("0.34 Ω", "0,34 Ω", "0,34 Ω"),
        ], 0),
        q(t("A rheostat is connected", "Ռեոստատը միացվում է", "Реостат включают"), [
          t("in parallel with the consumer", "սպառիչին զուգահեռ", "параллельно потребителю"),
          t("in series with the consumer", "սպառիչի հետ հաջորդաբար", "последовательно с потребителем"),
          t("instead of the source", "աղբյուրի փոխարեն", "вместо источника"),
        ], 1),
        q(t("Moving the slider of a rheostat so that more wire is in the circuit makes the current", "Ռեոստատի սահիչն այնպես շարժելով, որ շղթայում ավելի շատ լար լինի, հոսանքը", "Если двигать ползунок реостата так, чтобы в цепи было больше проволоки, ток"), [
          t("grow", "մեծանում է", "вырастет"),
          t("stay the same", "նույնն է մնում", "не изменится"),
          t("fall", "նվազում է", "упадёт"),
        ], 2),
      ],
    ),
    lesson(
      "series-parallel",
      ["Series and parallel connection", "Հաջորդական և զուգահեռ միացում", "Последовательное и параллельное соединение"],
      {
        en: ["State the rules for current, voltage and resistance in series and in parallel", "Compute the total resistance of two or three consumers", "Explain why house wiring uses parallel connection"],
        hy: ["Ձևակերպել հոսանքի, լարման և դիմադրության կանոնները հաջորդական և զուգահեռ միացման դեպքում", "Հաշվել երկու կամ երեք սպառիչի լրիվ դիմադրությունը", "Բացատրել, թե ինչու տան հաղորդալարերում օգտագործվում է զուգահեռ միացում"],
        ru: ["Формулировать правила для тока, напряжения и сопротивления при последовательном и параллельном соединении", "Вычислять общее сопротивление двух-трёх потребителей", "Объяснять, почему в доме применяют параллельное соединение"],
      },
      {
        en: `## Series connection

Consumers are joined one after another, so there is only one path for the current.

$$I = I_1 = I_2,\\qquad U = U_1 + U_2,\\qquad R = R_1 + R_2$$

- The same current flows through all of them.
- The voltages add up to the total.
- The resistances add up, so the total is always **larger** than each one.

A string of Christmas lights of the old kind is in series: one bulb burns out and the whole string goes dark.

## Parallel connection

Consumers are joined to the same two points, so the current has several paths.

$$U = U_1 = U_2,\\qquad I = I_1 + I_2,\\qquad \\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$$

- The voltage is the same on all of them.
- The currents add up to the current in the main wire.
- The total resistance is always **smaller** than the smallest one.

For two consumers it is convenient to write

$$R = \\frac{R_1 R_2}{R_1 + R_2}$$

and for $n$ *equal* resistances $R_1$: $R = R_1/n$.

Everything in a flat is connected in parallel: each lamp gets the full $230$ V, each can be switched on alone, and switching on a kettle does not darken the room.

## Worked examples

> Two resistors, $4\\ \\Omega$ and $6\\ \\Omega$, are in series at $20$ V. Find $R$, $I$ and the voltage on each.

$$R = 4 + 6 = 10\\ \\Omega,\\quad I = 20/10 = 2\\ \\text{A},\\quad U_1 = 2 \\cdot 4 = 8\\ \\text{V},\\quad U_2 = 2 \\cdot 6 = 12\\ \\text{V}$$

Check: $8 + 12 = 20$ V.

> The same two resistors are in parallel at $12$ V. Find $R$, each current and the total current.

$$R = \\frac{4 \\cdot 6}{4 + 6} = 2.4\\ \\Omega,\\quad I_1 = 12/4 = 3\\ \\text{A},\\quad I_2 = 12/6 = 2\\ \\text{A},\\quad I = 5\\ \\text{A}$$

Check: $I = U/R = 12/2.4 = 5$ A.

### Exercises

1. Write the three rules for a series connection.
2. Write the three rules for a parallel connection.
3. Three resistors of $2\\ \\Omega$, $3\\ \\Omega$ and $5\\ \\Omega$ are in series. Find $R$.
4. Two lamps of $60\\ \\Omega$ each are in parallel. Find $R$.
5. Resistors of $3\\ \\Omega$ and $6\\ \\Omega$ are in parallel at $18$ V. Find both currents and the total.
6. Two resistors in series at $24$ V give a current of $2$ A; one of them is $5\\ \\Omega$. Find the other.
7. Why are the lamps in a flat connected in parallel and not in series?
8. An ammeter in the main wire of two parallel lamps reads $0.9$ A; one lamp takes $0.5$ A. What does the other take?

### Answers

1. $I$ is the same everywhere, $U = U_1 + U_2$, $R = R_1 + R_2$.
2. $U$ is the same on each, $I = I_1 + I_2$, $1/R = 1/R_1 + 1/R_2$.
3. $R = 10\\ \\Omega$.
4. $R = 60/2 = 30\\ \\Omega$.
5. $I_1 = 6$ A, $I_2 = 3$ A, $I = 9$ A.
6. $R = 24/2 = 12\\ \\Omega$, so the other is $12 - 5 = 7\\ \\Omega$.
7. So that each gets the full voltage, can be switched on separately, and one failing does not switch off the rest.
8. $0.9 - 0.5 = 0.4$ A.`,
        hy: `## Հաջորդական միացում

Սպառիչները միացված են իրար հետևից, ուստի հոսանքի համար կա միայն մեկ ուղի։

$$I = I_1 = I_2,\\qquad U = U_1 + U_2,\\qquad R = R_1 + R_2$$

- Բոլորով հոսում է նույն հոսանքը։
- Լարումները գումարվում են և տալիս լրիվը։
- Դիմադրությունները գումարվում են, ուստի լրիվը միշտ **ավելի մեծ** է, քան ամեն մեկը։

Հին տիպի տոնածառի լամպերի շարանը հաջորդաբար է միացված. մեկ լամպը վառվում է, և ամբողջ շարանը մարում է։

## Զուգահեռ միացում

Սպառիչները միացված են նույն երկու կետին, ուստի հոսանքն ունի մի քանի ուղի։

$$U = U_1 = U_2,\\qquad I = I_1 + I_2,\\qquad \\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$$

- Լարումը բոլորի վրա նույնն է։
- Հոսանքները գումարվում են և տալիս գլխավոր լարի հոսանքը։
- Լրիվ դիմադրությունը միշտ **ավելի փոքր** է, քան ամենափոքրը։

Երկու սպառիչի համար հարմար է գրել

$$R = \\frac{R_1 R_2}{R_1 + R_2}$$

իսկ $n$ *հավասար* $R_1$ դիմադրությունների համար՝ $R = R_1/n$։

Բնակարանում ամեն ինչ միացված է զուգահեռ. ամեն լամպ ստանում է լրիվ $230$ Վ, ամեն մեկը կարելի է միացնել առանձին, և թեյնիկի միացումը սենյակը չի մգացնում։

## Լուծված օրինակներ

> $4\\ \\Omega$ և $6\\ \\Omega$ երկու ռեզիստոր միացված են հաջորդաբար $20$ Վ-ի տակ։ Գտիր $R$-ը, $I$-ն և ամեն մեկի վրայի լարումը։

$$R = 4 + 6 = 10\\ \\Omega,\\quad I = 20/10 = 2\\ \\text{Ա},\\quad U_1 = 2 \\cdot 4 = 8\\ \\text{Վ},\\quad U_2 = 2 \\cdot 6 = 12\\ \\text{Վ}$$

Ստուգում՝ $8 + 12 = 20$ Վ։

> Նույն երկու ռեզիստորը միացված են զուգահեռ $12$ Վ-ի տակ։ Գտիր $R$-ը, ամեն հոսանքը և լրիվ հոսանքը։

$$R = \\frac{4 \\cdot 6}{4 + 6} = 2{,}4\\ \\Omega,\\quad I_1 = 12/4 = 3\\ \\text{Ա},\\quad I_2 = 12/6 = 2\\ \\text{Ա},\\quad I = 5\\ \\text{Ա}$$

Ստուգում՝ $I = U/R = 12/2{,}4 = 5$ Ա։

### Վարժություններ

1. Գրիր հաջորդական միացման երեք կանոնը։
2. Գրիր զուգահեռ միացման երեք կանոնը։
3. $2\\ \\Omega$, $3\\ \\Omega$ և $5\\ \\Omega$ երեք ռեզիստոր միացված են հաջորդաբար։ Գտիր $R$-ը։
4. Երկու $60\\ \\Omega$ լամպ միացված են զուգահեռ։ Գտիր $R$-ը։
5. $3\\ \\Omega$ և $6\\ \\Omega$ ռեզիստորները միացված են զուգահեռ $18$ Վ-ի տակ։ Գտիր երկու հոսանքն ու լրիվը։
6. Հաջորդաբար միացված երկու ռեզիստորը $24$ Վ-ի տակ տալիս են $2$ Ա հոսանք, դրանցից մեկը $5\\ \\Omega$ է։ Գտիր մյուսը։
7. Ինչո՞ւ են բնակարանի լամպերը միացված զուգահեռ և ոչ հաջորդաբար։
8. Երկու զուգահեռ լամպի գլխավոր լարի ամպերաչափը ցույց է տալիս $0{,}9$ Ա, մի լամպը վերցնում է $0{,}5$ Ա։ Որքա՞ն է վերցնում մյուսը։

### Պատասխաններ

1. $I$-ն ամենուր նույնն է, $U = U_1 + U_2$, $R = R_1 + R_2$։
2. $U$-ն ամեն մեկի վրա նույնն է, $I = I_1 + I_2$, $1/R = 1/R_1 + 1/R_2$։
3. $R = 10\\ \\Omega$։
4. $R = 60/2 = 30\\ \\Omega$։
5. $I_1 = 6$ Ա, $I_2 = 3$ Ա, $I = 9$ Ա։
6. $R = 24/2 = 12\\ \\Omega$, ուստի մյուսը $12 - 5 = 7\\ \\Omega$ է։
7. Որ ամեն մեկը ստանա լրիվ լարումը, միանա առանձին, և մեկի փչանալը մյուսները չանջատի։
8. $0{,}9 - 0{,}5 = 0{,}4$ Ա։`,
        ru: `## Последовательное соединение

Потребители соединены один за другим, поэтому для тока есть только один путь.

$$I = I_1 = I_2,\\qquad U = U_1 + U_2,\\qquad R = R_1 + R_2$$

- Через все идёт один и тот же ток.
- Напряжения складываются и дают общее.
- Сопротивления складываются, поэтому общее всегда **больше** каждого.

Старая гирлянда соединена последовательно: перегорела одна лампочка — погасла вся гирлянда.

## Параллельное соединение

Потребители присоединены к одним и тем же двум точкам, поэтому у тока несколько путей.

$$U = U_1 = U_2,\\qquad I = I_1 + I_2,\\qquad \\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$$

- Напряжение на всех одинаково.
- Токи складываются и дают ток в главном проводе.
- Общее сопротивление всегда **меньше** наименьшего.

Для двух потребителей удобно записать

$$R = \\frac{R_1 R_2}{R_1 + R_2}$$

а для $n$ *одинаковых* сопротивлений $R_1$: $R = R_1/n$.

В квартире всё соединено параллельно: каждая лампа получает полные $230$ В, каждую можно включить отдельно, и включение чайника не затемняет комнату.

## Разобранные примеры

> Два резистора, $4\\ \\Omega$ и $6\\ \\Omega$, соединены последовательно при $20$ В. Найди $R$, $I$ и напряжение на каждом.

$$R = 4 + 6 = 10\\ \\Omega,\\quad I = 20/10 = 2\\ \\text{А},\\quad U_1 = 2 \\cdot 4 = 8\\ \\text{В},\\quad U_2 = 2 \\cdot 6 = 12\\ \\text{В}$$

Проверка: $8 + 12 = 20$ В.

> Те же два резистора соединены параллельно при $12$ В. Найди $R$, каждый ток и общий ток.

$$R = \\frac{4 \\cdot 6}{4 + 6} = 2{,}4\\ \\Omega,\\quad I_1 = 12/4 = 3\\ \\text{А},\\quad I_2 = 12/6 = 2\\ \\text{А},\\quad I = 5\\ \\text{А}$$

Проверка: $I = U/R = 12/2{,}4 = 5$ А.

### Упражнения

1. Запиши три правила последовательного соединения.
2. Запиши три правила параллельного соединения.
3. Три резистора $2\\ \\Omega$, $3\\ \\Omega$ и $5\\ \\Omega$ соединены последовательно. Найди $R$.
4. Две лампы по $60\\ \\Omega$ соединены параллельно. Найди $R$.
5. Резисторы $3\\ \\Omega$ и $6\\ \\Omega$ соединены параллельно при $18$ В. Найди оба тока и общий.
6. Два резистора последовательно при $24$ В дают ток $2$ А; один из них $5\\ \\Omega$. Найди другой.
7. Почему лампы в квартире соединены параллельно, а не последовательно?
8. Амперметр в главном проводе двух параллельных ламп показывает $0{,}9$ А; одна лампа берёт $0{,}5$ А. Сколько берёт другая?

### Ответы

1. $I$ везде одинаков, $U = U_1 + U_2$, $R = R_1 + R_2$.
2. $U$ на каждом одинаково, $I = I_1 + I_2$, $1/R = 1/R_1 + 1/R_2$.
3. $R = 10\\ \\Omega$.
4. $R = 60/2 = 30\\ \\Omega$.
5. $I_1 = 6$ А, $I_2 = 3$ А, $I = 9$ А.
6. $R = 24/2 = 12\\ \\Omega$, значит другой $12 - 5 = 7\\ \\Omega$.
7. Чтобы каждая получала полное напряжение, включалась отдельно и выход из строя одной не отключал остальные.
8. $0{,}9 - 0{,}5 = 0{,}4$ А.`,
      },
      [
        q(t("In a series connection the same for all consumers is", "Հաջորդական միացման դեպքում բոլոր սպառիչների համար նույնն է", "При последовательном соединении у всех потребителей одинаков"), [
          t("the current", "հոսանքը", "ток"),
          t("the voltage", "լարումը", "напряжение"),
          t("the resistance", "դիմադրությունը", "сопротивление"),
        ], 0),
        q(t("In a parallel connection the same for all consumers is", "Զուգահեռ միացման դեպքում բոլոր սպառիչների համար նույնն է", "При параллельном соединении у всех потребителей одинаково"), [
          t("the current", "հոսանքը", "ток"),
          t("the voltage", "լարումը", "напряжение"),
          t("the power", "հզորությունը", "мощность"),
        ], 1),
        q(t("Two 10 Ω resistors in parallel give a total resistance of", "Երկու 10 Ω ռեզիստոր զուգահեռ տալիս են լրիվ դիմադրություն", "Два резистора по 10 Ω параллельно дают общее сопротивление"), [
          t("20 Ω", "20 Ω", "20 Ω"),
          t("10 Ω", "10 Ω", "10 Ω"),
          t("5 Ω", "5 Ω", "5 Ω"),
        ], 2),
        q(t("Two resistors of 3 Ω and 7 Ω in series give", "3 Ω և 7 Ω ռեզիստորները հաջորդաբար տալիս են", "Резисторы 3 Ω и 7 Ω последовательно дают"), [
          t("10 Ω", "10 Ω", "10 Ω"),
          t("2.1 Ω", "2,1 Ω", "2,1 Ω"),
          t("4 Ω", "4 Ω", "4 Ω"),
        ], 0),
        q(t("In a flat the lamps are connected", "Բնակարանում լամպերը միացված են", "В квартире лампы соединены"), [
          t("in series", "հաջորդաբար", "последовательно"),
          t("in parallel", "զուգահեռ", "параллельно"),
          t("one through another", "մեկը մյուսի միջով", "одна через другую"),
        ], 1),
        q(t("The total resistance of a parallel connection is always", "Զուգահեռ միացման լրիվ դիմադրությունը միշտ", "Общее сопротивление параллельного соединения всегда"), [
          t("larger than each one", "ավելի մեծ է, քան ամեն մեկը", "больше каждого"),
          t("equal to their sum", "հավասար է նրանց գումարին", "равно их сумме"),
          t("smaller than the smallest one", "ավելի փոքր է, քան ամենափոքրը", "меньше наименьшего"),
        ], 2),
      ],
    ),
    lesson(
      "electric-work-power",
      ["Work and power of current; Joule–Lenz law", "Հոսանքի աշխատանք և հզորություն, Ջոուլ–Լենցի օրենք", "Работа и мощность тока; закон Джоуля–Ленца"],
      {
        en: ["Use A = IUt and P = IU with their units", "Apply the Joule–Lenz law Q = I²Rt", "Read an electricity meter and compute the cost of energy used"],
        hy: ["Կիրառել A = IUt և P = IU բանաձևերը՝ իրենց միավորներով", "Կիրառել Ջոուլ–Լենցի օրենքը՝ Q = I²Rt", "Կարդալ էլեկտրահաշվիչը և հաշվել ծախսված էներգիայի գինը"],
        ru: ["Применять A = IUt и P = IU с их единицами", "Применять закон Джоуля–Ленца Q = I²Rt", "Читать электросчётчик и вычислять стоимость израсходованной энергии"],
      },
      {
        en: `## Work and power

The work of the current in a part of a circuit is

$$A = IUt$$

and the **power** of the current, the work per second, is

$$P = \\frac{A}{t} = IU$$

Power is measured in **watts**: $1$ W $= 1$ V $\\cdot\\ 1$ A. Every appliance has its power written on it:

| Appliance | Power |
|---|---|
| LED lamp | $8$ W |
| Laptop | $60$ W |
| Refrigerator | $150$ W |
| Iron | $1000$ W |
| Electric kettle | $2000$ W |

Using Ohm's law we can write the power in three ways:

$$P = IU = I^2 R = \\frac{U^2}{R}$$

## The Joule–Lenz law

In a conductor with no motor and no chemical reaction, all the work of the current becomes heat:

$$Q = I^2 R t$$

> The heat released in a conductor is proportional to the square of the current, to the resistance and to the time.

The square is important: doubling the current gives **four times** the heat. That is why a thin wire in a circuit with a large current becomes dangerously hot while the thick wires stay cool.

Uses: the heating element of a kettle, an iron, a soldering iron, an incandescent lamp, an electric stove, a fuse.

## Energy and the bill

The joule is too small for household use, so electricity is sold in **kilowatt-hours**:

$$1\\ \\text{kW}\\cdot\\text{h} = 1000\\ \\text{W} \\cdot 3600\\ \\text{s} = 3\\,600\\,000\\ \\text{J}$$

An **electricity meter** counts kilowatt-hours. To find the cost: energy in kW·h $\\times$ price per kW·h.

## Worked examples

> A kettle of $2000$ W works for $5$ minutes. Find the work of the current.

$$A = Pt = 2000 \\cdot 300 = 600\\,000\\ \\text{J} = 0.6\\ \\text{MJ}$$

> A lamp at $230$ V takes $0.4$ A. Find its power and the energy used in $10$ hours, in kW·h.

$$P = 230 \\cdot 0.4 = 92\\ \\text{W},\\qquad W = 0.092 \\cdot 10 = 0.92\\ \\text{kW}\\cdot\\text{h}$$

> How much heat does a current of $3$ A give in a resistance of $20\\ \\Omega$ in $2$ minutes?

$$Q = I^2 R t = 9 \\cdot 20 \\cdot 120 = 21\\,600\\ \\text{J}$$

### Exercises

1. Write the formulas for the work and the power of the current.
2. Write the Joule–Lenz law in words and in symbols.
3. A motor at $12$ V takes $2.5$ A. Find its power.
4. An iron of $1200$ W works for half an hour. Find the energy in joules and in kW·h.
5. Find the heat released by a current of $2$ A in $15\\ \\Omega$ in $1$ minute.
6. A $100$ W lamp burns $4$ hours a day for $30$ days. Find the energy and the cost at $50$ drams per kW·h.
7. Why does a thin connecting wire heat up more than a thick one carrying the same current?
8. Two lamps, $40$ W and $100$ W, work at the same voltage. Which has the larger resistance?

### Answers

1. $A = IUt$; $P = IU = I^2R = U^2/R$.
2. The heat is proportional to $I^2$, to $R$ and to $t$: $Q = I^2Rt$.
3. $P = 12 \\cdot 2.5 = 30$ W.
4. $A = 1200 \\cdot 1800 = 2\\,160\\,000$ J $= 0.6$ kW·h.
5. $Q = 4 \\cdot 15 \\cdot 60 = 3600$ J.
6. $W = 0.1 \\cdot 4 \\cdot 30 = 12$ kW·h; cost $12 \\cdot 50 = 600$ drams.
7. Its resistance is larger, and $Q = I^2Rt$ grows with $R$.
8. The $40$ W lamp, because $R = U^2/P$ is larger when $P$ is smaller.`,
        hy: `## Աշխատանք և հզորություն

Շղթայի հատվածում հոսանքի աշխատանքն է

$$A = IUt$$

իսկ հոսանքի **հզորությունը**՝ մեկ վայրկյանում կատարվող աշխատանքը՝

$$P = \\frac{A}{t} = IU$$

Հզորությունը չափվում է **վատտերով**՝ $1$ Վտ $= 1$ Վ $\\cdot\\ 1$ Ա։ Ամեն սարքի վրա գրված է նրա հզորությունը՝

| Սարք | Հզորություն |
|---|---|
| LED լամպ | $8$ Վտ |
| Նոթբուք | $60$ Վտ |
| Սառնարան | $150$ Վտ |
| Արդուկ | $1000$ Վտ |
| Էլեկտրական թեյնիկ | $2000$ Վտ |

Օհմի օրենքով հզորությունը կարող ենք գրել երեք ձևով՝

$$P = IU = I^2 R = \\frac{U^2}{R}$$

## Ջոուլ–Լենցի օրենք

Հաղորդչում, որտեղ շարժիչ և քիմիական ռեակցիա չկա, հոսանքի ամբողջ աշխատանքը դառնում է ջերմություն՝

$$Q = I^2 R t$$

> Հաղորդչում արձակված ջերմությունը համեմատական է հոսանքի ուժի քառակուսուն, դիմադրությանը և ժամանակին։

Քառակուսին կարևոր է. հոսանքը կրկնապատկելիս ջերմությունը դառնում է **չորս անգամ** ավելի։ Ահա թե ինչու մեծ հոսանքի շղթայում բարակ լարը վտանգավոր տաքանում է, իսկ հաստ լարերը մնում են սառը։

Կիրառումներ՝ թեյնիկի տաքացնող տարր, արդուկ, զոդիչ, շիկացման լամպ, էլեկտրական սալօջախ, ապահովիչ։

## Էներգիան և վճարը

Ջոուլը կենցաղում շատ փոքր է, ուստի էլեկտրականությունը վաճառվում է **կիլովատտ-ժամերով**՝

$$1\\ \\text{կՎտ}\\cdot\\text{ժ} = 1000\\ \\text{Վտ} \\cdot 3600\\ \\text{վ} = 3\\,600\\,000\\ \\text{Ջ}$$

**Էլեկտրահաշվիչը** հաշվում է կիլովատտ-ժամերը։ Գինը գտնելու համար՝ էներգիան կՎտ·ժ-ով $\\times$ մեկ կՎտ·ժ-ի գինը։

## Լուծված օրինակներ

> $2000$ Վտ թեյնիկն աշխատում է $5$ րոպե։ Գտիր հոսանքի աշխատանքը։

$$A = Pt = 2000 \\cdot 300 = 600\\,000\\ \\text{Ջ} = 0{,}6\\ \\text{ՄՋ}$$

> $230$ Վ-ի տակ լամպը վերցնում է $0{,}4$ Ա։ Գտիր նրա հզորությունը և $10$ ժամում ծախսված էներգիան՝ կՎտ·ժ-ով։

$$P = 230 \\cdot 0{,}4 = 92\\ \\text{Վտ},\\qquad W = 0{,}092 \\cdot 10 = 0{,}92\\ \\text{կՎտ}\\cdot\\text{ժ}$$

> Որքա՞ն ջերմություն է տալիս $3$ Ա հոսանքը $20\\ \\Omega$ դիմադրության մեջ $2$ րոպեում։

$$Q = I^2 R t = 9 \\cdot 20 \\cdot 120 = 21\\,600\\ \\text{Ջ}$$

### Վարժություններ

1. Գրիր հոսանքի աշխատանքի և հզորության բանաձևերը։
2. Գրիր Ջոուլ–Լենցի օրենքը բառերով և նշաններով։
3. $12$ Վ-ի տակ շարժիչը վերցնում է $2{,}5$ Ա։ Գտիր նրա հզորությունը։
4. $1200$ Վտ արդուկն աշխատում է կես ժամ։ Գտիր էներգիան ջոուլներով և կՎտ·ժ-ով։
5. Գտիր $2$ Ա հոսանքի արձակած ջերմությունը $15\\ \\Omega$-ում $1$ րոպեում։
6. $100$ Վտ լամպը վառվում է օրը $4$ ժամ՝ $30$ օր։ Գտիր էներգիան և գինը՝ $50$ դրամ մեկ կՎտ·ժ-ի դիմաց։
7. Ինչո՞ւ է նույն հոսանքը տանող բարակ միացնող լարն ավելի շատ տաքանում, քան հաստը։
8. $40$ Վտ և $100$ Վտ երկու լամպ աշխատում են նույն լարման տակ։ Ո՞րն ունի ավելի մեծ դիմադրություն։

### Պատասխաններ

1. $A = IUt$, $P = IU = I^2R = U^2/R$։
2. Ջերմությունը համեմատական է $I^2$-ին, $R$-ին և $t$-ին՝ $Q = I^2Rt$։
3. $P = 12 \\cdot 2{,}5 = 30$ Վտ։
4. $A = 1200 \\cdot 1800 = 2\\,160\\,000$ Ջ $= 0{,}6$ կՎտ·ժ։
5. $Q = 4 \\cdot 15 \\cdot 60 = 3600$ Ջ։
6. $W = 0{,}1 \\cdot 4 \\cdot 30 = 12$ կՎտ·ժ, գինը՝ $12 \\cdot 50 = 600$ դրամ։
7. Նրա դիմադրությունն ավելի մեծ է, իսկ $Q = I^2Rt$-ն աճում է $R$-ի հետ։
8. $40$ Վտ լամպը, քանի որ $R = U^2/P$-ն ավելի մեծ է, երբ $P$-ն փոքր է։`,
        ru: `## Работа и мощность

Работа тока на участке цепи равна

$$A = IUt$$

а **мощность** тока, работа за секунду, —

$$P = \\frac{A}{t} = IU$$

Мощность измеряют в **ваттах**: $1$ Вт $= 1$ В $\\cdot\\ 1$ А. На каждом приборе написана его мощность:

| Прибор | Мощность |
|---|---|
| Светодиодная лампа | $8$ Вт |
| Ноутбук | $60$ Вт |
| Холодильник | $150$ Вт |
| Утюг | $1000$ Вт |
| Электрочайник | $2000$ Вт |

По закону Ома мощность можно записать тремя способами:

$$P = IU = I^2 R = \\frac{U^2}{R}$$

## Закон Джоуля–Ленца

В проводнике, где нет двигателя и химической реакции, вся работа тока переходит в теплоту:

$$Q = I^2 R t$$

> Теплота, выделяемая в проводнике, пропорциональна квадрату силы тока, сопротивлению и времени.

Квадрат важен: при удвоении тока теплота становится **в четыре раза** больше. Поэтому тонкий провод в цепи с большим током опасно нагревается, а толстые провода остаются холодными.

Применения: нагревательный элемент чайника, утюг, паяльник, лампа накаливания, электроплита, предохранитель.

## Энергия и счёт за свет

Джоуль для быта слишком мал, поэтому электричество продают в **киловатт-часах**:

$$1\\ \\text{кВт}\\cdot\\text{ч} = 1000\\ \\text{Вт} \\cdot 3600\\ \\text{с} = 3\\,600\\,000\\ \\text{Дж}$$

**Электросчётчик** считает киловатт-часы. Чтобы найти стоимость: энергия в кВт·ч $\\times$ цена одного кВт·ч.

## Разобранные примеры

> Чайник мощностью $2000$ Вт работает $5$ минут. Найди работу тока.

$$A = Pt = 2000 \\cdot 300 = 600\\,000\\ \\text{Дж} = 0{,}6\\ \\text{МДж}$$

> Лампа при $230$ В берёт $0{,}4$ А. Найди её мощность и энергию за $10$ часов в кВт·ч.

$$P = 230 \\cdot 0{,}4 = 92\\ \\text{Вт},\\qquad W = 0{,}092 \\cdot 10 = 0{,}92\\ \\text{кВт}\\cdot\\text{ч}$$

> Сколько теплоты даст ток $3$ А в сопротивлении $20\\ \\Omega$ за $2$ минуты?

$$Q = I^2 R t = 9 \\cdot 20 \\cdot 120 = 21\\,600\\ \\text{Дж}$$

### Упражнения

1. Запиши формулы работы и мощности тока.
2. Запиши закон Джоуля–Ленца словами и в обозначениях.
3. Двигатель при $12$ В берёт $2{,}5$ А. Найди его мощность.
4. Утюг мощностью $1200$ Вт работает полчаса. Найди энергию в джоулях и в кВт·ч.
5. Найди теплоту, выделенную током $2$ А в $15\\ \\Omega$ за $1$ минуту.
6. Лампа $100$ Вт горит $4$ часа в день $30$ дней. Найди энергию и стоимость по $50$ драмов за кВт·ч.
7. Почему тонкий соединительный провод нагревается сильнее толстого при том же токе?
8. Две лампы, $40$ Вт и $100$ Вт, работают при одном напряжении. У какой сопротивление больше?

### Ответы

1. $A = IUt$; $P = IU = I^2R = U^2/R$.
2. Теплота пропорциональна $I^2$, $R$ и $t$: $Q = I^2Rt$.
3. $P = 12 \\cdot 2{,}5 = 30$ Вт.
4. $A = 1200 \\cdot 1800 = 2\\,160\\,000$ Дж $= 0{,}6$ кВт·ч.
5. $Q = 4 \\cdot 15 \\cdot 60 = 3600$ Дж.
6. $W = 0{,}1 \\cdot 4 \\cdot 30 = 12$ кВт·ч; стоимость $12 \\cdot 50 = 600$ драмов.
7. У него больше сопротивление, а $Q = I^2Rt$ растёт с $R$.
8. У лампы $40$ Вт, потому что $R = U^2/P$ больше при меньшей $P$.`,
      },
      [
        q(t("The power of the current is", "Հոսանքի հզորությունն է", "Мощность тока равна"), [
          t("P = IU", "P = IU", "P = IU"),
          t("P = I/U", "P = I/U", "P = I/U"),
          t("P = IUt", "P = IUt", "P = IUt"),
        ], 0),
        q(t("The Joule–Lenz law is", "Ջոուլ–Լենցի օրենքն է", "Закон Джоуля–Ленца —"), [
          t("Q = IRt", "Q = IRt", "Q = IRt"),
          t("Q = I²Rt", "Q = I²Rt", "Q = I²Rt"),
          t("Q = U²t", "Q = U²t", "Q = U²t"),
        ], 1),
        q(t("One kilowatt-hour equals", "Մեկ կիլովատտ-ժամը հավասար է", "Один киловатт-час равен"), [
          t("1000 J", "1000 Ջ", "1000 Дж"),
          t("3600 J", "3600 Ջ", "3600 Дж"),
          t("3 600 000 J", "3 600 000 Ջ", "3 600 000 Дж"),
        ], 2),
        q(t("A device at 230 V takes 2 A. Its power is", "230 Վ-ի տակ սարքը վերցնում է 2 Ա։ Նրա հզորությունն է", "Прибор при 230 В берёт 2 А. Его мощность —"), [
          t("460 W", "460 Վտ", "460 Вт"),
          t("115 W", "115 Վտ", "115 Вт"),
          t("232 W", "232 Վտ", "232 Вт"),
        ], 0),
        q(t("If the current in a conductor is doubled, the heat released in the same time becomes", "Եթե հաղորդչում հոսանքը կրկնապատկվի, նույն ժամանակում արձակված ջերմությունը դառնում է", "Если ток в проводнике удвоить, теплота за то же время станет"), [
          t("twice as large", "երկու անգամ ավելի", "вдвое больше"),
          t("four times as large", "չորս անգամ ավելի", "в четыре раза больше"),
          t("the same", "նույնը", "такой же"),
        ], 1),
        q(t("Of two lamps at the same voltage, the one with the smaller power has", "Նույն լարման տակ երկու լամպից ավելի փոքր հզորություն ունեցողն ունի", "Из двух ламп при одном напряжении у лампы с меньшей мощностью"), [
          t("the smaller resistance", "ավելի փոքր դիմադրություն", "меньшее сопротивление"),
          t("the same resistance", "նույն դիմադրությունը", "такое же сопротивление"),
          t("the larger resistance", "ավելի մեծ դիմադրություն", "большее сопротивление"),
        ], 2),
      ],
    ),
    lesson(
      "safety-short-circuit",
      ["Fuses, short circuits and electrical safety", "Ապահովիչներ, կարճ միացում, անվտանգություն", "Предохранители, короткое замыкание и безопасность"],
      {
        en: ["Explain what a short circuit is and why it is dangerous", "Describe how a fuse and a circuit breaker protect a circuit", "List the rules of electrical safety at home"],
        hy: ["Բացատրել, թե ինչ է կարճ միացումը և ինչու է վտանգավոր", "Նկարագրել, թե ինչպես են ապահովիչն ու ավտոմատ անջատիչը պաշտպանում շղթան", "Թվարկել տան էլեկտրաանվտանգության կանոնները"],
        ru: ["Объяснять, что такое короткое замыкание и почему оно опасно", "Описывать, как предохранитель и автомат защищают цепь", "Перечислять правила электробезопасности в доме"],
      },
      {
        en: `## A short circuit

Imagine the two wires leading to a lamp touch each other before the lamp. The current now has a path with almost no resistance, and by Ohm's law

$$I = \\frac{U}{R}$$

a very small $R$ gives a huge $I$. By the Joule–Lenz law the heat $Q = I^2Rt$ in the wires grows enormously, the insulation melts and a fire can start. This is a **short circuit**.

Causes: damaged insulation, a nail driven into a wall wire, water on a socket, too many appliances on one extension lead.

## Fuses and breakers

A **fuse** is a thin lead wire in a porcelain or glass holder, connected in series with the circuit. Its wire is calculated to melt when the current exceeds a safe value, say $10$ A. Melting breaks the circuit and everything switches off.

A modern **circuit breaker** does the same with an electromagnet and a bimetal strip, and can be switched back on by hand once the fault is repaired.

Never replace a fuse with a nail or a thick copper wire: the protection disappears and the wiring itself becomes the fuse.

## Why current is dangerous to a person

The danger comes from the **current through the body**, not from the voltage alone. Dry skin has a large resistance, wet skin a small one, and that is why wet hands make a shock far worse. Remember from the lesson on current:

| Current | Effect |
|---|---|
| $1$ mA | felt |
| $10$ mA | muscles contract, the hand cannot let go |
| $100$ mA | deadly if it crosses the chest |

## Rules at home

1. Never touch bare wires or a socket with any object.
2. Never use an appliance with wet hands or in a bath.
3. Pull a plug by the plug, never by the cord.
4. Do not switch on an appliance with a damaged cord.
5. Do not plug many powerful appliances into one extension lead.
6. Do not put out a burning appliance with water — switch off the power first.
7. If a person is being shocked, switch off the power first, do not pull them with bare hands.
8. Leave repairs of house wiring to an electrician.

Metal cases of appliances are **earthed** by the third pin of the plug, so that if a live wire touches the case the current goes to the ground and the breaker trips instead of a person being shocked.

### Exercises

1. What is a short circuit, and why is the current in it so large?
2. Why does the wire of a fuse melt and the house wiring not?
3. Why is it forbidden to replace a fuse with a nail?
4. Why is a shock from the same socket worse with wet hands?
5. What does the third pin of a plug do?
6. Name four rules of electrical safety.
7. A person touches a live wire. What is the first thing to do?
8. Why should water not be used on a burning appliance?

### Answers

1. A connection of the wires with almost no resistance; $I = U/R$ is huge when $R$ is tiny.
2. The fuse wire is thin and made of a metal with a low melting point, so it melts first.
3. A nail does not melt, so the current keeps growing and the wiring itself overheats and catches fire.
4. Wet skin has a much smaller resistance, so the current through the body is larger.
5. It earths the metal case, so a fault current goes to the ground and the breaker trips.
6. Any four from the list above.
7. Switch off the power at the breaker, without touching the person with bare hands.
8. Water conducts, so the current could reach the person holding it.`,
        hy: `## Կարճ միացում

Պատկերացրու, որ լամպին տանող երկու լարերը դիպչում են միմյանց լամպից առաջ։ Հոսանքն այժմ ունի գրեթե առանց դիմադրության ուղի, և Օհմի օրենքով

$$I = \\frac{U}{R}$$

շատ փոքր $R$-ը տալիս է հսկայական $I$։ Ջոուլ–Լենցի օրենքով լարերում $Q = I^2Rt$ ջերմությունը չափազանց մեծանում է, մեկուսացումը հալվում է, և կարող է հրդեհ սկսվել։ Սա **կարճ միացումն** է։

Պատճառները՝ վնասված մեկուսացում, պատի լարի մեջ խփված մեխ, վարդակի վրա ջուր, մեկ երկարացուցիչին միացված չափազանց շատ սարք։

## Ապահովիչներ և ավտոմատներ

**Ապահովիչը** ճենապակե կամ ապակե պատյանում բարակ կապարե լար է՝ միացված շղթային հաջորդաբար։ Նրա լարը հաշվարկված է այնպես, որ հալվի, երբ հոսանքը գերազանցի անվտանգ արժեքը, օրինակ՝ $10$ Ա։ Հալվելով խզում է շղթան, և ամեն ինչ անջատվում է։

Ժամանակակից **ավտոմատ անջատիչը** նույնն անում է էլեկտրամագնիսով և բիմետաղական թիթեղով, և վնասը վերացնելուց հետո կարելի է ձեռքով նորից միացնել։

Երբեք ապահովիչը չփոխարինես մեխով կամ հաստ պղնձե լարով. պաշտպանությունն անհետանում է, և ապահովիչ է դառնում հենց հաղորդալարը։

## Ինչու է հոսանքը վտանգավոր մարդու համար

Վտանգը գալիս է **մարմնով անցնող հոսանքից**, ոչ միայն լարումից։ Չոր մաշկն ունի մեծ դիմադրություն, թացը՝ փոքր, ահա թե ինչու թաց ձեռքերը հարվածը շատ ավելի վտանգավոր են դարձնում։ Հիշիր հոսանքի դասից՝

| Հոսանք | Ազդեցություն |
|---|---|
| $1$ մԱ | զգացվում է |
| $10$ մԱ | մկանները կծկվում են, ձեռքը չի կարողանում բաց թողնել |
| $100$ մԱ | մահացու է, եթե անցնում է կրծքով |

## Կանոններ տանը

1. Երբեք չդիպչես բաց լարերին և վարդակի մեջ ոչինչ չմտցնես։
2. Երբեք սարք չօգտագործես թաց ձեռքերով կամ լոգարանում։
3. Խրոցը հանիր բռնելով խրոցից, երբեք ոչ՝ լարից։
4. Վնասված լարով սարք չմիացնես։
5. Մեկ երկարացուցիչին շատ հզոր սարքեր չմիացնես։
6. Վառվող սարքը ջրով չհանգցնես՝ նախ անջատիր հոսանքը։
7. Եթե մարդուն հոսանք է հարվածում, նախ անջատիր հոսանքը, բաց ձեռքերով նրան չքաշես։
8. Տան հաղորդալարերի վերանորոգումը թող էլեկտրիկին։

Սարքերի մետաղե պատյանները **հողանցվում** են խրոցի երրորդ ելուստով, որ եթե լարվածության տակ գտնվող լարը դիպչի պատյանին, հոսանքը գնա գետին և ավտոմատն անջատվի, փոխանակ մարդուն հարվածի։

### Վարժություններ

1. Ի՞նչ է կարճ միացումը և ինչո՞ւ է նրանում հոսանքն այնքան մեծ։
2. Ինչո՞ւ է ապահովիչի լարը հալվում, իսկ տան հաղորդալարը՝ ոչ։
3. Ինչո՞ւ է արգելված ապահովիչը մեխով փոխարինելը։
4. Ինչո՞ւ է նույն վարդակից հարվածն ավելի ուժեղ թաց ձեռքերով։
5. Ի՞նչ է անում խրոցի երրորդ ելուստը։
6. Նշիր էլեկտրաանվտանգության չորս կանոն։
7. Մարդը դիպչել է լարվածության տակ գտնվող լարին։ Ի՞նչն է առաջին անելիքը։
8. Ինչո՞ւ չի կարելի վառվող սարքի վրա ջուր լցնել։

### Պատասխաններ

1. Լարերի միացում՝ գրեթե առանց դիմադրության, $I = U/R$-ը հսկայական է, երբ $R$-ը չնչին է։
2. Ապահովիչի լարը բարակ է և ցածր հալման ջերմաստիճան ունեցող մետաղից, ուստի հալվում է առաջինը։
3. Մեխը չի հալվում, ուստի հոսանքը շարունակում է աճել, և գերտաքանում ու բռնկվում է հենց հաղորդալարը։
4. Թաց մաշկն ունի շատ ավելի փոքր դիմադրություն, ուստի մարմնով անցնող հոսանքն ավելի մեծ է։
5. Հողանցում է մետաղե պատյանը, որ վնասի հոսանքը գնա գետին և ավտոմատն անջատվի։
6. Վերևի ցանկից ցանկացած չորսը։
7. Անջատել հոսանքն ավտոմատից՝ առանց բաց ձեռքերով մարդուն դիպչելու։
8. Ջուրը հաղորդում է, ուստի հոսանքը կարող է հասնել այն պահող մարդուն։`,
        ru: `## Короткое замыкание

Представь, что два провода, идущие к лампе, касаются друг друга раньше лампы. У тока теперь есть путь почти без сопротивления, и по закону Ома

$$I = \\frac{U}{R}$$

очень малое $R$ даёт огромный $I$. По закону Джоуля–Ленца теплота $Q = I^2Rt$ в проводах растёт чрезвычайно, изоляция плавится и может начаться пожар. Это **короткое замыкание**.

Причины: повреждённая изоляция, гвоздь, забитый в провод в стене, вода на розетке, слишком много приборов на одном удлинителе.

## Предохранители и автоматы

**Предохранитель** — тонкая свинцовая проволочка в фарфоровом или стеклянном патроне, включённая в цепь последовательно. Её рассчитывают так, чтобы она плавилась, когда ток превысит безопасное значение, скажем $10$ А. Расплавившись, она разрывает цепь, и всё отключается.

Современный **автоматический выключатель** делает то же с помощью электромагнита и биметаллической пластины, и после устранения неисправности его можно включить рукой.

Никогда не заменяй предохранитель гвоздём или толстой медной проволокой: защита исчезает, и предохранителем становится сама проводка.

## Почему ток опасен для человека

Опасность — в **токе через тело**, а не в одном напряжении. У сухой кожи сопротивление большое, у влажной малое, поэтому мокрые руки делают удар намного тяжелее. Вспомни урок о силе тока:

| Ток | Действие |
|---|---|
| $1$ мА | ощущается |
| $10$ мА | мышцы сводит, рука не разжимается |
| $100$ мА | смертелен, если идёт через грудную клетку |

## Правила в доме

1. Никогда не касайся оголённых проводов и не суй в розетку никакие предметы.
2. Никогда не пользуйся прибором мокрыми руками или в ванной.
3. Вынимай вилку, держа за вилку, а не за шнур.
4. Не включай прибор с повреждённым шнуром.
5. Не включай много мощных приборов в один удлинитель.
6. Не туши горящий прибор водой — сначала отключи питание.
7. Если человека бьёт током, сначала отключи питание, не тяни его голыми руками.
8. Ремонт домашней проводки оставь электрику.

Металлические корпуса приборов **заземляют** третьим контактом вилки, чтобы при касании фазного провода к корпусу ток ушёл в землю и сработал автомат, а не ударило человека.

### Упражнения

1. Что такое короткое замыкание и почему ток в нём так велик?
2. Почему проволочка предохранителя плавится, а домашняя проводка нет?
3. Почему нельзя заменять предохранитель гвоздём?
4. Почему удар из той же розетки сильнее мокрыми руками?
5. Что делает третий контакт вилки?
6. Назови четыре правила электробезопасности.
7. Человек коснулся провода под напряжением. Что сделать первым?
8. Почему нельзя тушить горящий прибор водой?

### Ответы

1. Соединение проводов почти без сопротивления; $I = U/R$ огромен при крошечном $R$.
2. Проволочка предохранителя тонкая и из металла с низкой температурой плавления, поэтому плавится первой.
3. Гвоздь не плавится, ток продолжает расти, и перегревается и загорается сама проводка.
4. У влажной кожи сопротивление намного меньше, поэтому ток через тело больше.
5. Заземляет металлический корпус, так что ток повреждения уходит в землю и срабатывает автомат.
6. Любые четыре из списка выше.
7. Отключить питание автоматом, не касаясь человека голыми руками.
8. Вода проводит, и ток может дойти до того, кто её льёт.`,
      },
      [
        q(t("A short circuit is dangerous because", "Կարճ միացումը վտանգավոր է, քանի որ", "Короткое замыкание опасно потому, что"), [
          t("the resistance becomes almost zero and the current huge", "դիմադրությունը դառնում է գրեթե զրո, իսկ հոսանքը՝ հսկայական", "сопротивление становится почти нулевым, а ток огромным"),
          t("the voltage disappears", "լարումն անհետանում է", "напряжение исчезает"),
          t("the current becomes very small", "հոսանքը դառնում է շատ փոքր", "ток становится очень малым"),
        ], 0),
        q(t("A fuse protects a circuit because its wire", "Ապահովիչը պաշտպանում է շղթան, քանի որ նրա լարը", "Предохранитель защищает цепь, потому что его проволочка"), [
          t("conducts better than copper", "պղնձից լավ է հաղորդում", "проводит лучше меди"),
          t("melts when the current is too large", "հալվում է, երբ հոսանքը չափազանց մեծ է", "плавится, когда ток слишком велик"),
          t("stores charge", "լիցք է պահում", "запасает заряд"),
        ], 1),
        q(t("Replacing a fuse with a nail is forbidden because", "Ապահովիչը մեխով փոխարինելն արգելված է, քանի որ", "Заменять предохранитель гвоздём нельзя, потому что"), [
          t("a nail is expensive", "մեխը թանկ է", "гвоздь дорогой"),
          t("a nail does not conduct", "մեխը չի հաղորդում", "гвоздь не проводит"),
          t("it does not melt, so the wiring overheats instead", "նա չի հալվում, ուստի գերտաքանում է հաղորդալարը", "он не плавится, и вместо него перегревается проводка"),
        ], 2),
        q(t("A shock with wet hands is worse because wet skin has", "Թաց ձեռքերով հարվածն ավելի ուժեղ է, քանի որ թաց մաշկն ունի", "Удар мокрыми руками тяжелее, потому что у влажной кожи"), [
          t("a much smaller resistance", "շատ ավելի փոքր դիմադրություն", "намного меньшее сопротивление"),
          t("a much larger resistance", "շատ ավելի մեծ դիմադրություն", "намного большее сопротивление"),
          t("no resistance at all", "ընդհանրապես դիմադրություն չկա", "вовсе нет сопротивления"),
        ], 0),
        q(t("The third pin of a plug is for", "Խրոցի երրորդ ելուստը նախատեսված է", "Третий контакт вилки нужен для"), [
          t("extra power", "լրացուցիչ հզորության համար", "дополнительной мощности"),
          t("earthing the metal case", "մետաղե պատյանը հողանցելու համար", "заземления металлического корпуса"),
          t("holding the plug in place", "խրոցը տեղում պահելու համար", "удержания вилки на месте"),
        ], 1),
        q(t("If a person is being shocked, the first action is to", "Եթե մարդուն հոսանք է հարվածում, առաջին գործողությունն է", "Если человека бьёт током, первое действие —"), [
          t("pull them away by the hand", "ձեռքից քաշել հեռացնել", "оттащить его за руку"),
          t("pour water on them", "նրա վրա ջուր լցնել", "полить его водой"),
          t("switch off the power", "անջատել հոսանքը", "отключить питание"),
        ], 2),
      ],
    ),
  ],
};
