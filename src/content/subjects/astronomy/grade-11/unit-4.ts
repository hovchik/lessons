import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Bodies of the Solar system", "Արեգակնային համակարգի մարմինները", "Тела Солнечной системы"),
  summary: t("The Earth and the Moon, tides, the terrestrial planets, the giant planets and their moons, dwarf planets, asteroids, comets, meteors and the origin of the Solar system.", "Երկիրը և Լուսինը, մակընթացություններ, երկրային մոլորակներ, հսկա մոլորակներ և նրանց արբանյակները, գաճաճ մոլորակներ, աստերոիդներ, գիսաստղեր, ասուպներ և Արեգակնային համակարգի ծագումը։", "Земля и Луна, приливы, планеты земной группы, планеты-гиганты и их спутники, карликовые планеты, астероиды, кометы, метеоры и происхождение Солнечной системы."),
  lessons: [
    lesson(
      "earth-moon",
      ["The Earth and the Moon", "Երկիրը և Լուսինը", "Земля и Луна"],
      {
        en: ["Compare the Earth and the Moon as bodies: size, mass, density, gravity, atmosphere and temperature", "Describe the surface and the origin of the Moon and the history of its exploration", "Explain tides, spring and neap tides, and the effects of tidal friction"],
        hy: ["Համեմատել Երկիրը և Լուսինը որպես մարմիններ․ չափ, զանգված, խտություն, ձգողություն, մթնոլորտ և ջերմաստիճան", "Նկարագրել Լուսնի մակերևույթը, ծագումը և նրա հետազոտման պատմությունը", "Բացատրել մակընթացությունները, սիզիգիական և քառակուսացման մակընթացությունները և մակընթացային շփման հետևանքները"],
        ru: ["Сравнивать Землю и Луну как тела: размер, массу, плотность, тяжесть, атмосферу и температуру", "Описывать поверхность и происхождение Луны и историю её исследования", "Объяснять приливы, сизигийные и квадратурные приливы и последствия приливного трения"],
      },
      {
        en: `## The Earth as a planet

The Earth is the largest of the rocky planets. It has an iron **core**, a hot **mantle** and a thin **crust**; its mean density, $5{.}5$ g/cm³, is twice that of surface rocks, so the interior is heavy metal. Three things make it special: **liquid water** on the surface, an **atmosphere** of nitrogen and oxygen made by life, and a **magnetic field** that turns aside the charged particles of the solar wind.

## The Moon

| | Earth | Moon |
|---|---|---|
| Radius | $6371$ km | $1737$ km ($0{.}27$ of the Earth) |
| Mass | $5{.}97 \\cdot 10^{24}$ kg | $7{.}35 \\cdot 10^{22}$ kg ($\\tfrac{1}{81}$) |
| Mean density | $5{.}5$ g/cm³ | $3{.}3$ g/cm³ |
| Gravity at the surface | $9{.}8$ m/s² | $1{.}62$ m/s² (about $\\tfrac{1}{6}$) |
| Atmosphere | yes | practically none |
| Temperature | $-89$ to $+57$ °C | about $-170$ °C at night to $+120$ °C in the day |

Without air nothing softens the heat or the cold, and a lunar day lasts $29{.}5$ Earth days. The surface has dark **seas** (maria), plains of solidified lava $3$–$4$ billion years old, bright cratered **highlands**, and countless **craters** left by impacts. Everything is covered with fine broken rock, the **regolith**. Water ice survives in the permanently shadowed craters near the poles.

The Moon probably formed about $4{.}5$ billion years ago when a body the size of Mars struck the young Earth; the debris thrown into orbit gathered into the Moon. This explains why the Moon has little iron and is made of rock similar to the Earth's mantle.

Exploration: Luna 3 photographed the far side (1959), Luna 9 landed softly (1966), twelve astronauts walked on the Moon (1969–1972) and brought back $382$ kg of rock, Lunokhod 1 drove on it (1970), and the Chinese Chang'e 4 landed on the far side (2019).

## Tides

The Moon pulls the near side of the Earth more strongly than the centre, and the centre more strongly than the far side. The oceans are stretched into **two bulges**, one facing the Moon and one opposite. As the Earth turns, a place passes through both, so there are **two high tides a day**, about $12$ h $25$ min apart.

The Sun raises tides too, about half as strong. At new and full Moon the two add up: **spring tides**, the highest. At the quarters they partly cancel: **neap tides**.

Tidal friction slowly brakes the Earth's rotation (the day grows by about $2$ ms per century) and pushes the Moon away by $3{.}8$ cm a year. Long ago the same friction stopped the Moon's own spin relative to the Earth, which is why we always see one face.

## Worked examples

**Example 1.** The density of the Moon.

$V = \\dfrac{4}{3}\\pi R^3 = \\dfrac{4}{3}\\pi (1{.}737 \\cdot 10^6)^3 \\approx 2{.}2 \\cdot 10^{19}$ m³; $\\rho = \\dfrac{7{.}35 \\cdot 10^{22}}{2{.}2 \\cdot 10^{19}} \\approx 3300$ kg/m³. The Moon has only a small iron core.

**Example 2.** The gravity on the Moon.

$g = \\dfrac{GM}{R^2} = \\dfrac{6{.}67 \\cdot 10^{-11} \\cdot 7{.}35 \\cdot 10^{22}}{(1{.}737 \\cdot 10^6)^2} \\approx 1{.}62$ m/s².

**Example 3.** Why are high tides $12$ h $25$ min apart, and not $12$ h?

The Moon moves on along its orbit, so it returns to the meridian every $24$ h $50$ min; there are two high tides in that time.

## Exercises

1. Why does the Moon have almost no atmosphere?
2. Why are the day and night temperatures on the Moon so different?
3. A pupil weighs $600$ N on the Earth. What would the pupil weigh on the Moon?
4. When are tides the highest? Why?
5. On the Earth you jump $0{.}5$ m high. How high could you jump on the Moon with the same push?
6. Find the mean density of the Earth ($M = 6 \\cdot 10^{24}$ kg, $R = 6{.}37 \\cdot 10^6$ m) and compare it with surface rocks ($2{.}7$ g/cm³). What follows?

### Answers

1. Its gravity is weak (escape speed $2{.}4$ km/s), so gas molecules escape into space.
2. There is no air to keep heat or spread it, and the day and night each last about two weeks.
3. $600 \\cdot \\dfrac{1{.}62}{9{.}8} \\approx 100$ N.
4. At new and full Moon (spring tides): the tides of the Moon and the Sun add up.
5. About $0{.}5 \\cdot \\dfrac{9{.}8}{1{.}62} \\approx 3$ m.
6. $V \\approx 1{.}08 \\cdot 10^{21}$ m³, $\\rho \\approx 5500$ kg/m³, twice that of rocks: the interior contains dense matter, an iron core.`,
        hy: `## Երկիրը որպես մոլորակ

Երկիրը քարքարոտ մոլորակներից ամենամեծն է։ Այն ունի երկաթե **միջուկ**, տաք **թիկնոց** և բարակ **ընդերք**, նրա միջին խտությունը՝ $5{,}5$ գ/սմ³, երկու անգամ մեծ է մակերևութային ապարների խտությունից, ուստի ներսում ծանր մետաղ է։ Երեք բան այն դարձնում է առանձնահատուկ․ մակերևույթի վրա **հեղուկ ջուրը**, կյանքի ստեղծած ազոտից և թթվածնից կազմված **մթնոլորտը** և **մագնիսական դաշտը**, որը շեղում է արևային քամու լիցքավորված մասնիկները։

## Լուսինը

| | Երկիր | Լուսին |
|---|---|---|
| Շառավիղ | $6371$ կմ | $1737$ կմ (Երկրի $0{,}27$-ը) |
| Զանգված | $5{,}97 \\cdot 10^{24}$ կգ | $7{,}35 \\cdot 10^{22}$ կգ ($\\tfrac{1}{81}$) |
| Միջին խտություն | $5{,}5$ գ/սմ³ | $3{,}3$ գ/սմ³ |
| Ազատ անկման արագացում մակերևույթին | $9{,}8$ մ/վ² | $1{,}62$ մ/վ² (մոտ $\\tfrac{1}{6}$) |
| Մթնոլորտ | կա | գործնականում չկա |
| Ջերմաստիճան | $-89$-ից $+57$ °C | գիշերը մոտ $-170$ °C-ից ցերեկը $+120$ °C |

Առանց օդի ոչինչ չի մեղմացնում տաքն ու ցուրտը, իսկ լուսնային օրը տևում է Երկրի $29{,}5$ օր։ Մակերևույթին կան մութ **ծովեր**՝ $3$–$4$ միլիարդ տարեկան սառած լավայի հարթավայրեր, լուսավոր, խառնարաններով պատված **բարձրավանդակներ** և հարվածներից առաջացած անհամար **խառնարաններ**։ Ամեն ինչ ծածկված է մանր փշրված ապարով՝ **ռեգոլիթով**։ Բևեռների մոտ, մշտապես ստվերում գտնվող խառնարաններում պահպանվում է ջրային սառույց։

Լուսինը հավանաբար առաջացել է մոտ $4{,}5$ միլիարդ տարի առաջ, երբ Մարսի չափ մարմինը բախվել է երիտասարդ Երկրին, ուղեծիր նետված բեկորները հավաքվել են Լուսնի մեջ։ Սա բացատրում է, թե ինչու Լուսնում քիչ երկաթ կա, և նա կազմված է Երկրի թիկնոցին նման ապարից։

Հետազոտում․ «Լունա-3»-ը լուսանկարեց հակառակ կողմը (1959), «Լունա-9»-ը փափուկ վայրէջք կատարեց (1966), տասներկու տիեզերագնաց քայլեց Լուսնի վրա (1969–1972) և բերեց $382$ կգ ապար, «Լունոխոդ-1»-ը երթևեկեց նրա վրա (1970), իսկ չինական «Չանըէ-4»-ը վայրէջք կատարեց հակառակ կողմում (2019)։

## Մակընթացություններ

Լուսինը Երկրի մոտ կողմը ձգում է ավելի ուժեղ, քան կենտրոնը, իսկ կենտրոնը՝ ավելի ուժեղ, քան հեռավոր կողմը։ Օվկիանոսները ձգվում են **երկու ուռուցքի**, մեկը դեպի Լուսինը, մյուսը՝ հակառակ կողմում։ Երկրի պտտվելիս տեղանքն անցնում է երկուսի միջով, ուստի լինում է **օրական երկու մակընթացություն**՝ մոտ $12$ ժ $25$ րոպե տարբերությամբ։

Արեգակն էլ է մակընթացություններ առաջացնում՝ մոտ երկու անգամ թույլ։ Նորալուսնին և լիալուսնին դրանք գումարվում են․ **սիզիգիական մակընթացություններ**՝ ամենաբարձրները։ Քառորդներին դրանք մասամբ չեզոքացնում են իրար․ **քառակուսացման մակընթացություններ**։

Մակընթացային շփումը դանդաղ արգելակում է Երկրի պտույտը (օրը մեկ դարում երկարում է մոտ $2$ մվ-ով) և Լուսինը տարեկան $3{,}8$ սմ-ով հեռացնում է։ Վաղուց նույն շփումը կանգնեցրել է Լուսնի սեփական պտույտը Երկրի նկատմամբ, ահա թե ինչու մենք միշտ տեսնում ենք մեկ կողմը։

## Լուծված օրինակներ

**Օրինակ 1։** Լուսնի խտությունը։

$V = \\dfrac{4}{3}\\pi R^3 = \\dfrac{4}{3}\\pi (1{,}737 \\cdot 10^6)^3 \\approx 2{,}2 \\cdot 10^{19}$ մ³, $\\rho = \\dfrac{7{,}35 \\cdot 10^{22}}{2{,}2 \\cdot 10^{19}} \\approx 3300$ կգ/մ³։ Լուսինն ունի միայն փոքր երկաթե միջուկ։

**Օրինակ 2։** Ազատ անկման արագացումը Լուսնի վրա։

$g = \\dfrac{GM}{R^2} = \\dfrac{6{,}67 \\cdot 10^{-11} \\cdot 7{,}35 \\cdot 10^{22}}{(1{,}737 \\cdot 10^6)^2} \\approx 1{,}62$ մ/վ²։

**Օրինակ 3։** Ինչո՞ւ են մակընթացությունները իրարից $12$ ժ $25$ րոպե, այլ ոչ թե $12$ ժ հեռու։

Լուսինը շարունակում է շարժվել իր ուղեծրով, ուստի միջօրեականին վերադառնում է $24$ ժ $50$ րոպեն մեկ, այդ ժամանակում լինում է երկու մակընթացություն։

## Վարժություններ

1. Ինչո՞ւ Լուսինը համարյա մթնոլորտ չունի։
2. Ինչո՞ւ են Լուսնի վրա ցերեկային և գիշերային ջերմաստիճաններն այդքան տարբեր։
3. Աշակերտի կշիռը Երկրի վրա $600$ Ն է։ Որքա՞ն կլիներ այն Լուսնի վրա։
4. Ե՞րբ են մակընթացություններն ամենաբարձրը։ Ինչո՞ւ։
5. Երկրի վրա դուք ցատկում եք $0{,}5$ մ բարձրությամբ։ Որքա՞ն բարձր կցատկեիք Լուսնի վրա նույն հրումով։
6. Գտեք Երկրի միջին խտությունը ($M = 6 \\cdot 10^{24}$ կգ, $R = 6{,}37 \\cdot 10^6$ մ) և համեմատեք մակերևութային ապարների հետ ($2{,}7$ գ/սմ³)։ Ի՞նչ է բխում դրանից։

### Պատասխաններ

1. Նրա ձգողությունը թույլ է (հեռանալու արագությունը $2{,}4$ կմ/վ է), ուստի գազի մոլեկուլները հեռանում են տիեզերք։
2. Չկա օդ, որը կպահեր կամ կտարածեր ջերմությունը, իսկ ցերեկն ու գիշերը տևում են մոտ երկու շաբաթ։
3. $600 \\cdot \\dfrac{1{,}62}{9{,}8} \\approx 100$ Ն։
4. Նորալուսնին և լիալուսնին (սիզիգիական մակընթացություններ)․ Լուսնի և Արեգակի մակընթացությունները գումարվում են։
5. Մոտ $0{,}5 \\cdot \\dfrac{9{,}8}{1{,}62} \\approx 3$ մ։
6. $V \\approx 1{,}08 \\cdot 10^{21}$ մ³, $\\rho \\approx 5500$ կգ/մ³՝ ապարներից երկու անգամ մեծ․ ներսում խիտ նյութ կա՝ երկաթե միջուկ։`,
        ru: `## Земля как планета

Земля — крупнейшая из каменных планет. У неё железное **ядро**, горячая **мантия** и тонкая **кора**; её средняя плотность, $5{,}5$ г/см³, вдвое больше плотности поверхностных пород, значит, внутри тяжёлый металл. Особенной её делают три вещи: **жидкая вода** на поверхности, **атмосфера** из азота и кислорода, созданная жизнью, и **магнитное поле**, отклоняющее заряженные частицы солнечного ветра.

## Луна

| | Земля | Луна |
|---|---|---|
| Радиус | $6371$ км | $1737$ км ($0{,}27$ земного) |
| Масса | $5{,}97 \\cdot 10^{24}$ кг | $7{,}35 \\cdot 10^{22}$ кг ($\\tfrac{1}{81}$) |
| Средняя плотность | $5{,}5$ г/см³ | $3{,}3$ г/см³ |
| Ускорение свободного падения | $9{,}8$ м/с² | $1{,}62$ м/с² (около $\\tfrac{1}{6}$) |
| Атмосфера | есть | практически нет |
| Температура | от $-89$ до $+57$ °C | от около $-170$ °C ночью до $+120$ °C днём |

Без воздуха ничто не смягчает жару и холод, а лунный день длится $29{,}5$ земных суток. На поверхности есть тёмные **моря** — равнины застывшей лавы возрастом $3$–$4$ млрд лет, светлые **материки**, покрытые кратерами, и бесчисленные **кратеры** от ударов. Всё покрыто мелкой раздробленной породой — **реголитом**. В вечно затенённых кратерах у полюсов сохраняется водяной лёд.

Луна, вероятно, образовалась около $4{,}5$ млрд лет назад, когда тело размером с Марс столкнулось с молодой Землёй; выброшенные на орбиту обломки собрались в Луну. Это объясняет, почему в Луне мало железа и она сложена породами, похожими на земную мантию.

Исследования: «Луна-3» сфотографировала обратную сторону (1959), «Луна-9» совершила мягкую посадку (1966), двенадцать астронавтов прошли по Луне (1969–1972) и привезли $382$ кг пород, «Луноход-1» ездил по ней (1970), а китайский «Чанъэ-4» сел на обратной стороне (2019).

## Приливы

Луна притягивает ближнюю сторону Земли сильнее, чем центр, а центр — сильнее, чем дальнюю сторону. Океаны вытягиваются в **два горба**: один обращён к Луне, другой — в противоположную сторону. Вращаясь, Земля проносит каждое место через оба, поэтому бывает **два прилива в сутки**, с промежутком около $12$ ч $25$ мин.

Солнце тоже вызывает приливы, примерно вдвое слабее. В новолуние и полнолуние они складываются: **сизигийные приливы**, самые высокие. В четверти они частично гасят друг друга: **квадратурные приливы**.

Приливное трение медленно тормозит вращение Земли (сутки удлиняются примерно на $2$ мс за столетие) и отодвигает Луну на $3{,}8$ см в год. Давным-давно то же трение остановило собственное вращение Луны относительно Земли, поэтому мы всегда видим одну её сторону.

## Разобранные примеры

**Пример 1.** Плотность Луны.

$V = \\dfrac{4}{3}\\pi R^3 = \\dfrac{4}{3}\\pi (1{,}737 \\cdot 10^6)^3 \\approx 2{,}2 \\cdot 10^{19}$ м³; $\\rho = \\dfrac{7{,}35 \\cdot 10^{22}}{2{,}2 \\cdot 10^{19}} \\approx 3300$ кг/м³. У Луны лишь маленькое железное ядро.

**Пример 2.** Ускорение свободного падения на Луне.

$g = \\dfrac{GM}{R^2} = \\dfrac{6{,}67 \\cdot 10^{-11} \\cdot 7{,}35 \\cdot 10^{22}}{(1{,}737 \\cdot 10^6)^2} \\approx 1{,}62$ м/с².

**Пример 3.** Почему приливы разделены $12$ ч $25$ мин, а не $12$ ч?

Луна продолжает двигаться по орбите, поэтому возвращается на меридиан каждые $24$ ч $50$ мин; за это время бывает два прилива.

## Упражнения

1. Почему у Луны почти нет атмосферы?
2. Почему дневная и ночная температуры на Луне так различаются?
3. Вес ученика на Земле $600$ Н. Каким он был бы на Луне?
4. Когда приливы самые высокие? Почему?
5. На Земле вы подпрыгиваете на $0{,}5$ м. На какую высоту вы подпрыгнули бы на Луне при том же толчке?
6. Найдите среднюю плотность Земли ($M = 6 \\cdot 10^{24}$ кг, $R = 6{,}37 \\cdot 10^6$ м) и сравните с поверхностными породами ($2{,}7$ г/см³). Что из этого следует?

### Ответы

1. Её тяготение слабое (скорость убегания $2{,}4$ км/с), поэтому молекулы газа улетают в космос.
2. Нет воздуха, который сохранял бы или переносил тепло, а день и ночь длятся примерно по две недели.
3. $600 \\cdot \\dfrac{1{,}62}{9{,}8} \\approx 100$ Н.
4. В новолуние и полнолуние (сизигийные приливы): приливы от Луны и Солнца складываются.
5. Примерно на $0{,}5 \\cdot \\dfrac{9{,}8}{1{,}62} \\approx 3$ м.
6. $V \\approx 1{,}08 \\cdot 10^{21}$ м³, $\\rho \\approx 5500$ кг/м³ — вдвое больше, чем у пород: внутри плотное вещество, железное ядро.`,
      },
      [
        q(t("The mass of the Moon is about … of the Earth's mass.", "Լուսնի զանգվածը Երկրի զանգվածի մոտ … է։", "Масса Луны составляет около … массы Земли."), [t("1/81", "1/81-ն", "1/81"), t("1/6", "1/6-ն", "1/6"), t("1/2", "1/2-ն", "1/2")], 0),
        q(t("The dark 'seas' on the Moon are…", "Լուսնի մութ «ծովերը»…", "Тёмные «моря» на Луне — это…"), [t("plains of solidified lava", "սառած լավայի հարթավայրեր են", "равнины застывшей лавы"), t("real seas of water", "իսկական ջրային ծովեր են", "настоящие моря воды"), t("shadows of mountains", "լեռների ստվերներ են", "тени гор")], 0),
        q(t("The most widely accepted idea is that the Moon formed…", "Ամենաընդունված տեսակետն այն է, որ Լուսինն առաջացել է…", "Самая распространённая гипотеза: Луна образовалась…"), [t("after a giant impact on the young Earth", "երիտասարդ Երկրի հետ հսկա բախումից հետո", "после гигантского столкновения с молодой Землёй"), t("from a piece of the Sun", "Արեգակի կտորից", "из куска Солнца"), t("at the same time as the galaxy", "գալակտիկայի հետ միաժամանակ", "одновременно с Галактикой")], 0),
        q(t("How many high tides are there in a day at most places?", "Շատ վայրերում օրական քանի՞ մակընթացություն է լինում։", "Сколько приливов в сутки бывает в большинстве мест?"), [t("Two", "Երկու", "Два"), t("One", "Մեկ", "Один"), t("Four", "Չորս", "Четыре")], 0),
        q(t("Spring tides happen at…", "Սիզիգիական մակընթացությունները լինում են…", "Сизигийные приливы бывают в…"), [t("new and full Moon", "նորալուսնին և լիալուսնին", "новолуние и полнолуние"), t("the quarters", "քառորդներին", "четверти"), t("spring only", "միայն գարնանը", "только весной")], 0),
        q(t("Who first photographed the far side of the Moon?", "Ո՞վ առաջինը լուսանկարեց Լուսնի հակառակ կողմը։", "Кто первым сфотографировал обратную сторону Луны?"), [t("Luna 3, in 1959", "«Լունա-3»-ը, 1959 թվականին", "«Луна-3» в 1959 году"), t("Apollo 11, in 1969", "«Ապոլոն-11»-ը, 1969 թվականին", "«Аполлон-11» в 1969 году"), t("Galileo, in 1610", "Գալիլեյը, 1610 թվականին", "Галилей в 1610 году")], 0),
      ],
    ),
    lesson(
      "terrestrial-planets",
      ["The terrestrial planets: Mercury, Venus, Mars", "Երկրային մոլորակներ․ Մերկուրի, Վեներա, Մարս", "Планеты земной группы: Меркурий, Венера, Марс"],
      {
        en: ["Compare Mercury, Venus, the Earth and Mars: size, density, atmosphere and temperature", "Explain the runaway greenhouse effect on Venus and the loss of the Martian atmosphere", "Describe the evidence for past water on Mars and the main missions to the terrestrial planets"],
        hy: ["Համեմատել Մերկուրին, Վեներան, Երկիրը և Մարսը․ չափ, խտություն, մթնոլորտ և ջերմաստիճան", "Բացատրել Վեներայի անկառավարելի ջերմոցային էֆեկտը և Մարսի մթնոլորտի կորուստը", "Նկարագրել Մարսի վրա անցյալում ջրի գոյության ապացույցները և դեպի երկրային մոլորակներ հիմնական առաքելությունները"],
        ru: ["Сравнивать Меркурий, Венеру, Землю и Марс: размер, плотность, атмосферу и температуру", "Объяснять неуправляемый парниковый эффект на Венере и потерю атмосферы Марсом", "Описывать свидетельства существования воды на Марсе в прошлом и главные миссии к планетам земной группы"],
      },
      {
        en: `## Four rocky worlds

| | Mercury | Venus | Earth | Mars |
|---|---|---|---|---|
| Radius, km | $2440$ | $6052$ | $6371$ | $3390$ |
| Mass (Earth = 1) | $0{.}055$ | $0{.}815$ | $1$ | $0{.}107$ |
| Density, g/cm³ | $5{.}4$ | $5{.}2$ | $5{.}5$ | $3{.}9$ |
| Atmosphere | almost none | $96\\%$ CO₂, $92$ times the Earth's pressure | N₂, O₂ | $95\\%$ CO₂, $0{.}6\\%$ of the Earth's pressure |
| Surface temperature | $-180$ to $+430$ °C | about $+465$ °C | about $+15$ °C on average | about $-60$ °C on average |
| Moons | $0$ | $0$ | $1$ | $2$ (Phobos, Deimos) |

All four have an iron core, a rocky mantle and crust, and were bombarded by impacts in their youth. Their fates differ because of their **size** (a small planet cools faster and holds gas worse) and their **distance from the Sun**.

## Mercury

The smallest planet and the closest to the Sun. It is covered with craters like the Moon and has a huge iron core. It turns slowly: one solar day there lasts $176$ Earth days, so the day side bakes and the night side freezes. Ice still hides in shadowed polar craters.

## Venus: the greenhouse planet

Venus is almost the Earth's twin in size, yet it is the **hottest** planet, hotter than Mercury. Its thick carbon dioxide atmosphere lets sunlight in but traps the infrared heat radiated by the ground: a **runaway greenhouse effect**. Clouds of sulfuric acid hide the surface; it was mapped by radar. Venus rotates backwards and very slowly (once in $243$ days). Soviet Venera probes landed there: Venera 7 in 1970 and Venera 9, which sent the first photographs from the surface in 1975. They survived for only about an hour in the heat and pressure.

## Mars: the red planet

Mars is red because its dust contains iron oxide, rust. It has the highest volcano in the Solar system, **Olympus Mons** (about $22$ km), and the canyon **Valles Marineris**, $4000$ km long. Its polar caps contain water ice and frozen carbon dioxide. Dry **river valleys**, deltas and minerals that form only in water show that **liquid water** flowed on Mars billions of years ago. Being small, Mars lost its global magnetic field, and the solar wind stripped away most of its air; with the thin air the water froze or escaped.

Rovers **Curiosity** (since 2012) and **Perseverance** (since 2021) explore it; Perseverance collects samples to be brought to the Earth, and its small helicopter Ingenuity made the first powered flight on another planet.

## Worked examples

**Example 1.** How much stronger is sunlight at Venus ($0{.}72$ AU) and weaker at Mars ($1{.}52$ AU) than at the Earth?

Light falls off as $\\dfrac{1}{r^2}$: Venus $\\dfrac{1}{0{.}72^2} \\approx 1{.}9$ times stronger; Mars $\\dfrac{1}{1{.}52^2} \\approx 0{.}43$ of the Earth's.

**Example 2.** The gravity on Mars, from $M = 0{.}107 M_\\oplus$ and $R = 0{.}532 R_\\oplus$.

$g = 9{.}8 \\cdot \\dfrac{0{.}107}{0{.}532^2} \\approx 3{.}7$ m/s².

**Example 3.** Mars is $2{.}5$ AU from the Earth. How long does a command to a rover take?

$\\dfrac{2{.}5 \\cdot 1{.}5 \\cdot 10^8}{3 \\cdot 10^5} = 1250$ s, about $21$ minutes. Rovers must drive themselves.

## Exercises

1. Why is Venus hotter than Mercury, although it is farther from the Sun?
2. How many times stronger is sunlight at Mercury ($0{.}39$ AU) than at the Earth?
3. Find the gravity on Venus ($M = 0{.}815 M_\\oplus$, $R = 0{.}95 R_\\oplus$).
4. Why did Mars lose most of its atmosphere?
5. Name three pieces of evidence that water once flowed on Mars.
6. At its closest Mars is $56$ million km away. How long does a radio signal take then?

### Answers

1. The thick carbon dioxide atmosphere traps heat (the greenhouse effect).
2. $\\dfrac{1}{0{.}39^2} \\approx 6{.}6$ times.
3. $g = 9{.}8 \\cdot \\dfrac{0{.}815}{0{.}95^2} \\approx 8{.}9$ m/s².
4. It is small: weak gravity and no global magnetic field, so the solar wind stripped the air away.
5. Dry river valleys, deltas, minerals that form in water (also the ice in the polar caps).
6. $\\dfrac{5{.}6 \\cdot 10^7}{3 \\cdot 10^5} \\approx 187$ s, about $3$ minutes.`,
        hy: `## Չորս քարե աշխարհ

| | Մերկուրի | Վեներա | Երկիր | Մարս |
|---|---|---|---|---|
| Շառավիղ, կմ | $2440$ | $6052$ | $6371$ | $3390$ |
| Զանգված (Երկիր = 1) | $0{,}055$ | $0{,}815$ | $1$ | $0{,}107$ |
| Խտություն, գ/սմ³ | $5{,}4$ | $5{,}2$ | $5{,}5$ | $3{,}9$ |
| Մթնոլորտ | համարյա չկա | $96\\%$ CO₂, Երկրի ճնշումից $92$ անգամ մեծ | N₂, O₂ | $95\\%$ CO₂, Երկրի ճնշման $0{,}6\\%$-ը |
| Մակերևույթի ջերմաստիճան | $-180$-ից $+430$ °C | մոտ $+465$ °C | միջինը մոտ $+15$ °C | միջինը մոտ $-60$ °C |
| Արբանյակներ | $0$ | $0$ | $1$ | $2$ (Ֆոբոս, Դեյմոս) |

Չորսն էլ ունեն երկաթե միջուկ, քարե թիկնոց և ընդերք, և երիտասարդ տարիքում ենթարկվել են հարվածների։ Նրանց ճակատագրերը տարբեր են **չափի** (փոքր մոլորակն ավելի արագ է սառչում և վատ է պահում գազը) և **Արեգակից հեռավորության** պատճառով։

## Մերկուրի

Ամենափոքր և Արեգակին ամենամոտ մոլորակը։ Այն Լուսնի նման ծածկված է խառնարաններով և ունի հսկայական երկաթե միջուկ։ Պտտվում է դանդաղ․ այնտեղ մեկ արևային օրը տևում է Երկրի $176$ օր, ուստի ցերեկային կողմը տապակվում է, իսկ գիշերայինը՝ սառչում։ Բևեռային ստվերոտ խառնարաններում դեռ սառույց է թաքնված։

## Վեներա․ ջերմոցային մոլորակ

Վեներան չափերով համարյա Երկրի երկվորյակն է, բայց **ամենատաք** մոլորակն է՝ Մերկուրիից էլ տաք։ Նրա թանձր ածխաթթու գազային մթնոլորտը ներս է թողնում արևի լույսը, բայց պահում է գետնի ճառագայթած ինֆրակարմիր ջերմությունը․ **անկառավարելի ջերմոցային էֆեկտ**։ Ծծմբական թթվի ամպերը թաքցնում են մակերևույթը, այն քարտեզագրվել է ռադիոլոկացիայով։ Վեներան պտտվում է հակառակ ուղղությամբ և շատ դանդաղ ($243$ օրում մեկ անգամ)։ Այնտեղ վայրէջք են կատարել խորհրդային «Վեներա» զոնդերը․ «Վեներա-7»-ը՝ 1970 թվականին, և «Վեներա-9»-ը, որը 1975-ին ուղարկեց մակերևույթից առաջին լուսանկարները։ Ջերմության և ճնշման պայմաններում նրանք դիմացել են ընդամենը մոտ մեկ ժամ։

## Մարս․ կարմիր մոլորակ

Մարսը կարմիր է, որովհետև նրա փոշին պարունակում է երկաթի օքսիդ՝ ժանգ։ Այնտեղ է Արեգակնային համակարգի ամենաբարձր հրաբուխը՝ **Օլիմպոս լեռը** (մոտ $22$ կմ), և $4000$ կմ երկարությամբ **Մարիներ հովիտ** կիրճը։ Նրա բևեռային գլխարկները պարունակում են ջրային սառույց և սառած ածխաթթու գազ։ Չոր **գետահովիտները**, դելտաները և միայն ջրում առաջացող միներալները ցույց են տալիս, որ միլիարդավոր տարիներ առաջ Մարսի վրա հոսել է **հեղուկ ջուր**։ Լինելով փոքր՝ Մարսը կորցրեց իր համընդհանուր մագնիսական դաշտը, և արևային քամին քշեց նրա օդի մեծ մասը, նոսր օդի պայմաններում ջուրը սառեց կամ հեռացավ։

Այն հետազոտում են **«Քյուրիոսիթի»** (2012-ից) և **«Փերսիվիրենս»** (2021-ից) մարսագնացները․ «Փերսիվիրենսը» հավաքում է նմուշներ, որոնք պետք է բերվեն Երկիր, իսկ նրա փոքրիկ «Ինջենյուիթի» ուղղաթիռը կատարեց առաջին կառավարվող թռիչքն այլ մոլորակի վրա։

## Լուծված օրինակներ

**Օրինակ 1։** Քանի՞ անգամ է արևի լույսն ավելի ուժեղ Վեներայի մոտ ($0{,}72$ ա․մ․) և ավելի թույլ Մարսի մոտ ($1{,}52$ ա․մ․), քան Երկրի մոտ։

Լույսը թուլանում է $\\dfrac{1}{r^2}$-ի պես․ Վեներա՝ $\\dfrac{1}{0{,}72^2} \\approx 1{,}9$ անգամ ուժեղ, Մարս՝ $\\dfrac{1}{1{,}52^2} \\approx 0{,}43$ Երկրինից։

**Օրինակ 2։** Ազատ անկման արագացումը Մարսի վրա, եթե $M = 0{,}107 M_\\oplus$ և $R = 0{,}532 R_\\oplus$։

$g = 9{,}8 \\cdot \\dfrac{0{,}107}{0{,}532^2} \\approx 3{,}7$ մ/վ²։

**Օրինակ 3։** Մարսը Երկրից $2{,}5$ ա․մ․ հեռավորության վրա է։ Որքա՞ն ժամանակում է հրամանը հասնում մարսագնացին։

$\\dfrac{2{,}5 \\cdot 1{,}5 \\cdot 10^8}{3 \\cdot 10^5} = 1250$ վ, մոտ $21$ րոպե։ Մարսագնացները պետք է ինքնուրույն վարեն։

## Վարժություններ

1. Ինչո՞ւ է Վեներան ավելի տաք Մերկուրիից, թեև Արեգակից ավելի հեռու է։
2. Մերկուրիի մոտ ($0{,}39$ ա․մ․) արևի լույսը քանի՞ անգամ է ուժեղ, քան Երկրի մոտ։
3. Գտեք ազատ անկման արագացումը Վեներայի վրա ($M = 0{,}815 M_\\oplus$, $R = 0{,}95 R_\\oplus$)։
4. Ինչո՞ւ Մարսը կորցրեց իր մթնոլորտի մեծ մասը։
5. Նշեք երեք ապացույց այն բանի, որ Մարսի վրա ժամանակին ջուր է հոսել։
6. Ամենամոտ դիրքում Մարսը $56$ միլիոն կմ հեռու է։ Որքա՞ն ժամանակում է ռադիոազդանշանն այդ դեպքում հասնում։

### Պատասխաններ

1. Ածխաթթու գազի թանձր մթնոլորտը պահում է ջերմությունը (ջերմոցային էֆեկտ)։
2. $\\dfrac{1}{0{,}39^2} \\approx 6{,}6$ անգամ։
3. $g = 9{,}8 \\cdot \\dfrac{0{,}815}{0{,}95^2} \\approx 8{,}9$ մ/վ²։
4. Այն փոքր է․ թույլ ձգողություն և համընդհանուր մագնիսական դաշտի բացակայություն, ուստի արևային քամին քշեց օդը։
5. Չոր գետահովիտներ, դելտաներ, ջրում առաջացող միներալներ (նաև բևեռային գլխարկների սառույցը)։
6. $\\dfrac{5{,}6 \\cdot 10^7}{3 \\cdot 10^5} \\approx 187$ վ, մոտ $3$ րոպե։`,
        ru: `## Четыре каменных мира

| | Меркурий | Венера | Земля | Марс |
|---|---|---|---|---|
| Радиус, км | $2440$ | $6052$ | $6371$ | $3390$ |
| Масса (Земля = 1) | $0{,}055$ | $0{,}815$ | $1$ | $0{,}107$ |
| Плотность, г/см³ | $5{,}4$ | $5{,}2$ | $5{,}5$ | $3{,}9$ |
| Атмосфера | почти нет | $96\\%$ CO₂, давление в $92$ раза больше земного | N₂, O₂ | $95\\%$ CO₂, $0{,}6\\%$ земного давления |
| Температура поверхности | от $-180$ до $+430$ °C | около $+465$ °C | в среднем около $+15$ °C | в среднем около $-60$ °C |
| Спутники | $0$ | $0$ | $1$ | $2$ (Фобос, Деймос) |

У всех четырёх железное ядро, каменные мантия и кора, все в молодости подвергались ударам. Их судьбы различаются из-за **размера** (малая планета быстрее остывает и хуже удерживает газ) и **расстояния от Солнца**.

## Меркурий

Самая маленькая и самая близкая к Солнцу планета. Он покрыт кратерами, как Луна, и имеет огромное железное ядро. Вращается медленно: солнечные сутки там длятся $176$ земных суток, поэтому дневная сторона раскаляется, а ночная промерзает. В затенённых полярных кратерах до сих пор прячется лёд.

## Венера: планета-теплица

Венера почти близнец Земли по размеру, но это **самая горячая** планета, горячее Меркурия. Её плотная углекислая атмосфера пропускает солнечный свет, но задерживает инфракрасное тепло, излучаемое грунтом: **неуправляемый парниковый эффект**. Облака серной кислоты скрывают поверхность; её картировали радиолокацией. Венера вращается в обратную сторону и очень медленно (один оборот за $243$ суток). На неё садились советские «Венеры»: «Венера-7» в 1970 году и «Венера-9», передавшая в 1975 году первые снимки с поверхности. В такой жаре и давлении они работали лишь около часа.

## Марс: красная планета

Марс красный, потому что его пыль содержит оксид железа — ржавчину. Там самый высокий вулкан Солнечной системы — **гора Олимп** (около $22$ км) — и каньон **долины Маринер** длиной $4000$ км. Его полярные шапки содержат водяной лёд и замёрзший углекислый газ. Сухие **речные долины**, дельты и минералы, образующиеся только в воде, показывают, что миллиарды лет назад по Марсу текла **жидкая вода**. Будучи небольшим, Марс потерял глобальное магнитное поле, и солнечный ветер унёс большую часть его воздуха; в разреженном воздухе вода замёрзла или улетучилась.

Его исследуют марсоходы **Curiosity** (с 2012 года) и **Perseverance** (с 2021 года); Perseverance собирает образцы для доставки на Землю, а его маленький вертолёт Ingenuity совершил первый управляемый полёт на другой планете.

## Разобранные примеры

**Пример 1.** Во сколько раз солнечный свет сильнее у Венеры ($0{,}72$ а. е.) и слабее у Марса ($1{,}52$ а. е.), чем у Земли?

Свет ослабевает как $\\dfrac{1}{r^2}$: у Венеры в $\\dfrac{1}{0{,}72^2} \\approx 1{,}9$ раза сильнее; у Марса — $\\dfrac{1}{1{,}52^2} \\approx 0{,}43$ земного.

**Пример 2.** Ускорение свободного падения на Марсе при $M = 0{,}107 M_\\oplus$ и $R = 0{,}532 R_\\oplus$.

$g = 9{,}8 \\cdot \\dfrac{0{,}107}{0{,}532^2} \\approx 3{,}7$ м/с².

**Пример 3.** Марс находится в $2{,}5$ а. е. от Земли. Сколько идёт команда марсоходу?

$\\dfrac{2{,}5 \\cdot 1{,}5 \\cdot 10^8}{3 \\cdot 10^5} = 1250$ с, около $21$ минуты. Марсоходы должны ехать сами.

## Упражнения

1. Почему Венера горячее Меркурия, хотя дальше от Солнца?
2. Во сколько раз солнечный свет у Меркурия ($0{,}39$ а. е.) сильнее, чем у Земли?
3. Найдите ускорение свободного падения на Венере ($M = 0{,}815 M_\\oplus$, $R = 0{,}95 R_\\oplus$).
4. Почему Марс потерял большую часть атмосферы?
5. Назовите три свидетельства того, что когда-то по Марсу текла вода.
6. В ближайшей точке Марс находится в $56$ млн км. Сколько идёт радиосигнал в этом случае?

### Ответы

1. Плотная углекислая атмосфера задерживает тепло (парниковый эффект).
2. $\\dfrac{1}{0{,}39^2} \\approx 6{,}6$ раза.
3. $g = 9{,}8 \\cdot \\dfrac{0{,}815}{0{,}95^2} \\approx 8{,}9$ м/с².
4. Он мал: слабое тяготение и нет глобального магнитного поля, поэтому солнечный ветер унёс воздух.
5. Сухие речные долины, дельты, минералы, образующиеся в воде (также лёд полярных шапок).
6. $\\dfrac{5{,}6 \\cdot 10^7}{3 \\cdot 10^5} \\approx 187$ с, около $3$ минут.`,
      },
      [
        q(t("The hottest planet of the Solar system is…", "Արեգակնային համակարգի ամենատաք մոլորակը…", "Самая горячая планета Солнечной системы —…"), [t("Venus", "Վեներան է", "Венера"), t("Mercury", "Մերկուրին է", "Меркурий"), t("Mars", "Մարսն է", "Марс")], 0),
        q(t("Venus is so hot because of…", "Վեներան այդքան տաք է…", "Венера такая горячая из-за…"), [t("the greenhouse effect of its CO₂ atmosphere", "իր CO₂ մթնոլորտի ջերմոցային էֆեկտի պատճառով", "парникового эффекта её углекислой атмосферы"), t("its volcanoes alone", "միայն իր հրաբուխների պատճառով", "одних лишь вулканов"), t("its nearness to Jupiter", "Յուպիտերին մոտ լինելու պատճառով", "близости к Юпитеру")], 0),
        q(t("Mars looks red because its dust contains…", "Մարսը կարմիր է երևում, որովհետև նրա փոշին պարունակում է…", "Марс красный, потому что его пыль содержит…"), [t("iron oxide (rust)", "երկաթի օքսիդ (ժանգ)", "оксид железа (ржавчину)"), t("copper", "պղինձ", "медь"), t("red algae", "կարմիր ջրիմուռներ", "красные водоросли")], 0),
        q(t("The highest volcano in the Solar system is…", "Արեգակնային համակարգի ամենաբարձր հրաբուխը…", "Самый высокий вулкан Солнечной системы —…"), [t("Olympus Mons on Mars", "Մարսի Օլիմպոս լեռն է", "гора Олимп на Марсе"), t("Mount Ararat", "Արարատն է", "Арарат"), t("Maxwell on Venus", "Վեներայի Մաքսվելն է", "Максвелл на Венере")], 0),
        q(t("Which probe sent the first pictures from the surface of Venus?", "Ո՞ր զոնդն ուղարկեց Վեներայի մակերևույթից առաջին լուսանկարները։", "Какой зонд передал первые снимки с поверхности Венеры?"), [t("Venera 9", "«Վեներա-9»-ը", "«Венера-9»"), t("Apollo 11", "«Ապոլոն-11»-ը", "«Аполлон-11»"), t("Curiosity", "«Քյուրիոսիթին»", "Curiosity")], 0),
        q(t("A radio command reaches a Mars rover in…", "Ռադիոհրամանը մարսագնացին հասնում է…", "Радиокоманда доходит до марсохода за…"), [t("from about 3 to 21 minutes", "մոտ 3-ից 21 րոպեում", "от примерно 3 до 21 минуты"), t("less than a second", "մեկ վայրկյանից պակաս ժամանակում", "меньше секунды"), t("several days", "մի քանի օրում", "несколько суток")], 0),
      ],
    ),
    lesson(
      "giant-planets",
      ["The giant planets and their moons", "Հսկա մոլորակները և նրանց արբանյակները", "Планеты-гиганты и их спутники"],
      {
        en: ["Describe the composition and structure of Jupiter, Saturn, Uranus and Neptune and compare gas giants with ice giants", "Explain the nature of planetary rings and the main features of the giants: storms, fast rotation, tilted axes", "Describe the most interesting moons (Io, Europa, Ganymede, Titan, Enceladus, Triton) and why some may hide oceans"],
        hy: ["Նկարագրել Յուպիտերի, Սատուրնի, Ուրանի և Նեպտունի բաղադրությունն ու կառուցվածքը, համեմատել գազային և սառցային հսկաները", "Բացատրել մոլորակային օղակների բնույթը և հսկաների գլխավոր առանձնահատկությունները․ փոթորիկներ, արագ պտույտ, թեքված առանցքներ", "Նկարագրել ամենահետաքրքիր արբանյակները (Իո, Եվրոպա, Գանիմեդ, Տիտան, Էնցելադ, Տրիտոն) և բացատրել, թե ինչու որոշները կարող են օվկիանոսներ թաքցնել"],
        ru: ["Описывать состав и строение Юпитера, Сатурна, Урана и Нептуна и сравнивать газовые гиганты с ледяными", "Объяснять природу колец планет и главные особенности гигантов: бури, быстрое вращение, наклонённые оси", "Описывать самые интересные спутники (Ио, Европа, Ганимед, Титан, Энцелад, Тритон) и объяснять, почему некоторые могут скрывать океаны"],
      },
      {
        en: `## Giants without a surface

| | Jupiter | Saturn | Uranus | Neptune |
|---|---|---|---|---|
| Radius (Earth = 1) | $11{.}2$ | $9{.}4$ | $4{.}0$ | $3{.}9$ |
| Mass (Earth = 1) | $318$ | $95$ | $14{.}5$ | $17$ |
| Density, g/cm³ | $1{.}33$ | $0{.}69$ | $1{.}27$ | $1{.}64$ |
| Day | $9$ h $55$ min | $10$ h $33$ min | $17$ h | $16$ h |
| Known moons | over $90$ | over $270$ | about $30$ | $16$ |

Far from the Sun, beyond the "snow line", ice could freeze into the young planets, so they grew big enough to capture huge amounts of **hydrogen and helium**. Jupiter and Saturn are **gas giants**: they are mostly hydrogen and helium, which deep inside is squeezed into a liquid metal. Uranus and Neptune are **ice giants**: under their hydrogen atmospheres lie thick layers of water, ammonia and methane. None of them has a solid surface to stand on.

The giants spin fast, so they are visibly flattened, and their clouds are drawn into stripes. Jupiter's **Great Red Spot** is a storm wider than the Earth that has been seen for centuries. Neptune has the fastest winds in the Solar system, up to $2000$ km/h. **Uranus** lies on its side: its axis is tilted by $98°$, so each pole has $42$ years of day and $42$ years of night. Methane absorbs red light and makes Uranus and Neptune blue-green.

## Rings

All four giants have rings, and Saturn's are the brightest. They are not solid: they are billions of pieces of **ice** and dust, from grains to houses, each moving on its own orbit. Saturn's main rings are about $280\\,000$ km across but in most places only about $10$ m thick.

## Worlds of their own: the moons

> - **Io** (Jupiter) is the most volcanic body in the Solar system: Jupiter's tides knead and heat its interior.
> - **Europa** (Jupiter) hides a salty **ocean** under a shell of ice, with more water than all the Earth's oceans.
> - **Ganymede** (Jupiter) is the largest moon, bigger than the planet Mercury.
> - **Titan** (Saturn) has a thick nitrogen atmosphere and lakes of liquid methane; the Huygens probe landed on it in 2005.
> - **Enceladus** (Saturn) shoots geysers of water from an underground ocean into space.
> - **Triton** (Neptune) orbits backwards and is probably a captured body from the Kuiper belt.

Missions: the Voyagers flew past all four giants (1979–1989); Galileo (1995–2003) and Juno (since 2016) studied Jupiter; Cassini orbited Saturn from 2004 to 2017. The JUICE and Europa Clipper probes are now on their way to Jupiter's icy moons.

## Worked examples

**Example 1.** The density of Saturn ($M = 5{.}68 \\cdot 10^{26}$ kg, $R = 5{.}82 \\cdot 10^7$ m).

$V = \\dfrac{4}{3}\\pi R^3 \\approx 8{.}3 \\cdot 10^{23}$ m³; $\\rho = \\dfrac{5{.}68 \\cdot 10^{26}}{8{.}3 \\cdot 10^{23}} \\approx 690$ kg/m³, less than water.

**Example 2.** The speed of Jupiter's clouds at the equator ($R = 71\\,500$ km, one turn in $9{.}93$ h).

$v = \\dfrac{2\\pi R}{T} = \\dfrac{2\\pi \\cdot 71\\,500}{9{.}93} \\approx 45\\,000$ km/h $\\approx 12{.}6$ km/s.

**Example 3.** How much weaker is sunlight at Neptune ($30$ AU)?

$\\dfrac{1}{30^2} = \\dfrac{1}{900}$ of the Earth's.

## Exercises

1. Why did the planets far from the Sun grow into giants?
2. Could Saturn float in water, if there were an ocean big enough? Why?
3. How long does light take to reach Neptune from the Sun?
4. Which moons are thought to be possible homes for life, and why?
5. Uranus goes round the Sun in $84$ years. Why does a polar night on Uranus last $42$ years?
6. Ganymede has a radius of $2634$ km, Mercury $2440$ km. Which is bigger? Why is Ganymede still called a moon?

### Answers

1. Beyond the snow line ice could freeze, so big cores formed quickly and captured much hydrogen and helium.
2. Yes: its mean density, $0{.}69$ g/cm³, is less than water's.
3. $30 \\cdot 8{.}3$ min $\\approx 250$ min, about $4{.}2$ hours.
4. Europa and Enceladus (oceans of liquid water under the ice), Titan (complex organic chemistry).
5. Its axis lies almost in the plane of the orbit, so each pole faces the Sun for half the orbit and away from it for the other half.
6. Ganymede is bigger; it is a moon because it goes round a planet, Jupiter.`,
        hy: `## Հսկաներ առանց մակերևույթի

| | Յուպիտեր | Սատուրն | Ուրան | Նեպտուն |
|---|---|---|---|---|
| Շառավիղ (Երկիր = 1) | $11{,}2$ | $9{,}4$ | $4{,}0$ | $3{,}9$ |
| Զանգված (Երկիր = 1) | $318$ | $95$ | $14{,}5$ | $17$ |
| Խտություն, գ/սմ³ | $1{,}33$ | $0{,}69$ | $1{,}27$ | $1{,}64$ |
| Օր | $9$ ժ $55$ րոպե | $10$ ժ $33$ րոպե | $17$ ժ | $16$ ժ |
| Հայտնի արբանյակներ | $90$-ից ավելի | $270$-ից ավելի | մոտ $30$ | $16$ |

Արեգակից հեռու, «ձյան գծից» այն կողմ, սառույցը կարող էր սառչել երիտասարդ մոլորակների մեջ, ուստի դրանք մեծացան այնքան, որ կարողացան որսալ հսկայական քանակությամբ **ջրածին և հելիում**։ Յուպիտերն ու Սատուրնը **գազային հսկաներ** են․ դրանք հիմնականում ջրածին և հելիում են, որը խորքում սեղմվում է մինչև հեղուկ մետաղ։ Ուրանը և Նեպտունը **սառցային հսկաներ** են․ նրանց ջրածնային մթնոլորտի տակ ջրի, ամոնիակի և մեթանի հաստ շերտեր են։ Դրանցից ոչ մեկն ամուր մակերևույթ չունի, որի վրա կարելի լինի կանգնել։

Հսկաները պտտվում են արագ, ուստի նկատելիորեն սեղմված են, իսկ նրանց ամպերը ձգված են շերտերի։ Յուպիտերի **Մեծ կարմիր բիծը** Երկրից լայն փոթորիկ է, որը երևում է դարեր շարունակ։ Նեպտունն ունի Արեգակնային համակարգի ամենաուժեղ քամիները՝ մինչև $2000$ կմ/ժ։ **Ուրանը** պառկած է կողքի վրա․ նրա առանցքը թեքված է $98°$-ով, ուստի յուրաքանչյուր բևեռում $42$ տարի օր է և $42$ տարի գիշեր։ Մեթանը կլանում է կարմիր լույսը և Ուրանն ու Նեպտունը դարձնում կապտականաչավուն։

## Օղակներ

Չորս հսկաներն էլ օղակներ ունեն, Սատուրնինը ամենապայծառն են։ Դրանք ամուր չեն․ դրանք **սառույցի** և փոշու միլիարդավոր կտորներ են՝ հատիկից մինչև տան չափ, որոնցից յուրաքանչյուրը շարժվում է իր ուղեծրով։ Սատուրնի հիմնական օղակների տրամագիծը մոտ $280\\,000$ կմ է, բայց շատ տեղերում հաստությունը ընդամենը մոտ $10$ մ է։

## Ինքնուրույն աշխարհներ․ արբանյակներ

> - **Իոն** (Յուպիտեր) Արեգակնային համակարգի ամենահրաբխային մարմինն է․ Յուպիտերի մակընթացությունները ճմլում և տաքացնում են նրա ընդերքը։
> - **Եվրոպան** (Յուպիտեր) սառցե կեղևի տակ թաքցնում է աղի **օվկիանոս**, որում ավելի շատ ջուր կա, քան Երկրի բոլոր օվկիանոսներում։
> - **Գանիմեդը** (Յուպիտեր) ամենամեծ արբանյակն է՝ Մերկուրի մոլորակից մեծ։
> - **Տիտանն** (Սատուրն) ունի թանձր ազոտային մթնոլորտ և հեղուկ մեթանի լճեր, «Հյույգենս» զոնդը վայրէջք կատարեց նրա վրա 2005 թվականին։
> - **Էնցելադը** (Սատուրն) ստորգետնյա օվկիանոսից ջրի գեյզերներ է արձակում տիեզերք։
> - **Տրիտոնը** (Նեպտուն) պտտվում է հակառակ ուղղությամբ և հավանաբար Կոյպերի գոտուց որսված մարմին է։

Առաքելություններ․ «Վոյաջերները» թռան չորս հսկաների կողքով (1979–1989), «Գալիլեո»-ն (1995–2003) և «Ջունո»-ն (2016-ից) ուսումնասիրել են Յուպիտերը, «Կասինին» 2004-ից 2017 թվականները պտտվել է Սատուրնի շուրջ։ JUICE և «Եվրոպա Քլիփեր» զոնդերն այժմ ճանապարհին են դեպի Յուպիտերի սառցե արբանյակները։

## Լուծված օրինակներ

**Օրինակ 1։** Սատուրնի խտությունը ($M = 5{,}68 \\cdot 10^{26}$ կգ, $R = 5{,}82 \\cdot 10^7$ մ)։

$V = \\dfrac{4}{3}\\pi R^3 \\approx 8{,}3 \\cdot 10^{23}$ մ³, $\\rho = \\dfrac{5{,}68 \\cdot 10^{26}}{8{,}3 \\cdot 10^{23}} \\approx 690$ կգ/մ³՝ ջրից պակաս։

**Օրինակ 2։** Յուպիտերի ամպերի արագությունը հասարակածում ($R = 71\\,500$ կմ, մեկ պտույտը՝ $9{,}93$ ժ)։

$v = \\dfrac{2\\pi R}{T} = \\dfrac{2\\pi \\cdot 71\\,500}{9{,}93} \\approx 45\\,000$ կմ/ժ $\\approx 12{,}6$ կմ/վ։

**Օրինակ 3։** Քանի՞ անգամ է արևի լույսը թույլ Նեպտունի մոտ ($30$ ա․մ․)։

$\\dfrac{1}{30^2} = \\dfrac{1}{900}$ Երկրինից։

## Վարժություններ

1. Ինչո՞ւ Արեգակից հեռու մոլորակները դարձան հսկաներ։
2. Կարո՞ղ էր Սատուրնը լողալ ջրում, եթե բավականաչափ մեծ օվկիանոս լիներ։ Ինչո՞ւ։
3. Որքա՞ն ժամանակում է լույսը Արեգակից հասնում Նեպտունին։
4. Ո՞ր արբանյակներն են համարվում կյանքի հնարավոր օթևան և ինչո՞ւ։
5. Ուրանը Արեգակի շուրջ պտտվում է $84$ տարում։ Ինչո՞ւ է Ուրանի վրա բևեռային գիշերը տևում $42$ տարի։
6. Գանիմեդի շառավիղը $2634$ կմ է, Մերկուրիինը՝ $2440$ կմ։ Ո՞րն է ավելի մեծ։ Ինչո՞ւ է Գանիմեդը, այնուամենայնիվ, կոչվում արբանյակ։

### Պատասխաններ

1. Ձյան գծից այն կողմ սառույցը կարող էր սառչել, ուստի արագ առաջացան մեծ միջուկներ, որոնք որսացին շատ ջրածին և հելիում։
2. Այո․ նրա միջին խտությունը՝ $0{,}69$ գ/սմ³, ջրինից փոքր է։
3. $30 \\cdot 8{,}3$ րոպե $\\approx 250$ րոպե, մոտ $4{,}2$ ժամ։
4. Եվրոպան և Էնցելադը (սառույցի տակ հեղուկ ջրի օվկիանոսներ), Տիտանը (բարդ օրգանական քիմիա)։
5. Նրա առանցքը համարյա ուղեծրի հարթության մեջ է, ուստի յուրաքանչյուր բևեռ ուղեծրի կեսը նայում է դեպի Արեգակ, իսկ մյուս կեսը՝ նրանից հակառակ։
6. Գանիմեդն է մեծ, այն արբանյակ է, որովհետև պտտվում է մոլորակի՝ Յուպիտերի շուրջ։`,
        ru: `## Гиганты без поверхности

| | Юпитер | Сатурн | Уран | Нептун |
|---|---|---|---|---|
| Радиус (Земля = 1) | $11{,}2$ | $9{,}4$ | $4{,}0$ | $3{,}9$ |
| Масса (Земля = 1) | $318$ | $95$ | $14{,}5$ | $17$ |
| Плотность, г/см³ | $1{,}33$ | $0{,}69$ | $1{,}27$ | $1{,}64$ |
| Сутки | $9$ ч $55$ мин | $10$ ч $33$ мин | $17$ ч | $16$ ч |
| Известных спутников | более $90$ | более $270$ | около $30$ | $16$ |

Вдали от Солнца, за «линией льда», в молодые планеты мог вмерзать лёд, поэтому они выросли настолько, что захватили огромное количество **водорода и гелия**. Юпитер и Сатурн — **газовые гиганты**: они в основном состоят из водорода и гелия, которые в глубине сжаты до состояния жидкого металла. Уран и Нептун — **ледяные гиганты**: под их водородными атмосферами лежат толстые слои воды, аммиака и метана. Ни у одного нет твёрдой поверхности, на которую можно встать.

Гиганты быстро вращаются, поэтому заметно сплюснуты, а их облака вытянуты в полосы. **Большое красное пятно** Юпитера — буря шире Земли, наблюдаемая уже несколько веков. У Нептуна самые сильные ветры Солнечной системы — до $2000$ км/ч. **Уран** лежит на боку: его ось наклонена на $98°$, поэтому на каждом полюсе $42$ года день и $42$ года ночь. Метан поглощает красный свет и придаёт Урану и Нептуну сине-зелёный цвет.

## Кольца

Кольца есть у всех четырёх гигантов, самые яркие — у Сатурна. Они не сплошные: это миллиарды кусков **льда** и пыли, от песчинок до домов, каждый на своей орбите. Основные кольца Сатурна имеют поперечник около $280\\,000$ км, но во многих местах толщину всего около $10$ м.

## Миры со своим лицом: спутники

> - **Ио** (Юпитер) — самое вулканически активное тело Солнечной системы: приливы Юпитера мнут и разогревают её недра.
> - **Европа** (Юпитер) скрывает под ледяной корой солёный **океан**, в котором воды больше, чем во всех океанах Земли.
> - **Ганимед** (Юпитер) — крупнейший спутник, больше планеты Меркурий.
> - **Титан** (Сатурн) имеет плотную азотную атмосферу и озёра жидкого метана; зонд «Гюйгенс» сел на него в 2005 году.
> - **Энцелад** (Сатурн) выбрасывает в космос гейзеры воды из подземного океана.
> - **Тритон** (Нептун) обращается в обратную сторону и, вероятно, является захваченным телом из пояса Койпера.

Миссии: «Вояджеры» пролетели мимо всех четырёх гигантов (1979–1989); «Галилео» (1995–2003) и «Юнона» (с 2016 года) изучали Юпитер; «Кассини» обращался вокруг Сатурна с 2004 по 2017 год. Зонды JUICE и «Европа Клиппер» сейчас летят к ледяным спутникам Юпитера.

## Разобранные примеры

**Пример 1.** Плотность Сатурна ($M = 5{,}68 \\cdot 10^{26}$ кг, $R = 5{,}82 \\cdot 10^7$ м).

$V = \\dfrac{4}{3}\\pi R^3 \\approx 8{,}3 \\cdot 10^{23}$ м³; $\\rho = \\dfrac{5{,}68 \\cdot 10^{26}}{8{,}3 \\cdot 10^{23}} \\approx 690$ кг/м³ — меньше, чем у воды.

**Пример 2.** Скорость облаков Юпитера на экваторе ($R = 71\\,500$ км, один оборот за $9{,}93$ ч).

$v = \\dfrac{2\\pi R}{T} = \\dfrac{2\\pi \\cdot 71\\,500}{9{,}93} \\approx 45\\,000$ км/ч $\\approx 12{,}6$ км/с.

**Пример 3.** Во сколько раз слабее солнечный свет у Нептуна ($30$ а. е.)?

$\\dfrac{1}{30^2} = \\dfrac{1}{900}$ земного.

## Упражнения

1. Почему далёкие от Солнца планеты выросли в гигантов?
2. Мог бы Сатурн плавать в воде, если бы нашёлся достаточно большой океан? Почему?
3. Сколько времени свет идёт от Солнца до Нептуна?
4. Какие спутники считают возможным домом для жизни и почему?
5. Уран обходит Солнце за $84$ года. Почему полярная ночь на Уране длится $42$ года?
6. Радиус Ганимеда $2634$ км, Меркурия — $2440$ км. Кто больше? Почему Ганимед всё же называют спутником?

### Ответы

1. За линией льда мог вмерзать лёд, поэтому быстро образовались крупные ядра, захватившие много водорода и гелия.
2. Да: его средняя плотность, $0{,}69$ г/см³, меньше плотности воды.
3. $30 \\cdot 8{,}3$ мин $\\approx 250$ мин, около $4{,}2$ часа.
4. Европа и Энцелад (океаны жидкой воды подо льдом), Титан (сложная органическая химия).
5. Его ось лежит почти в плоскости орбиты, поэтому каждый полюс половину оборота обращён к Солнцу, а другую половину — от него.
6. Ганимед больше; это спутник, потому что он обращается вокруг планеты — Юпитера.`,
      },
      [
        q(t("Jupiter and Saturn are made mostly of…", "Յուպիտերն ու Սատուրնը հիմնականում կազմված են…", "Юпитер и Сатурн состоят в основном из…"), [t("hydrogen and helium", "ջրածնից և հելիումից", "водорода и гелия"), t("iron and rock", "երկաթից և ապարից", "железа и камня"), t("water only", "միայն ջրից", "одной воды")], 0),
        q(t("Saturn's rings are made of…", "Սատուրնի օղակները կազմված են…", "Кольца Сатурна состоят из…"), [t("countless pieces of ice and dust", "սառույցի և փոշու անհամար կտորներից", "бесчисленных кусков льда и пыли"), t("one solid disc of metal", "մետաղի մեկ ամուր սկավառակից", "одного сплошного металлического диска"), t("gas clouds", "գազային ամպերից", "газовых облаков")], 0),
        q(t("The largest moon in the Solar system is…", "Արեգակնային համակարգի ամենամեծ արբանյակը…", "Самый большой спутник Солнечной системы —…"), [t("Ganymede", "Գանիմեդն է", "Ганимед"), t("the Moon", "Լուսինն է", "Луна"), t("Titan", "Տիտանն է", "Титан")], 0),
        q(t("Which moon has lakes of liquid methane and a thick atmosphere?", "Ո՞ր արբանյակն ունի հեղուկ մեթանի լճեր և թանձր մթնոլորտ։", "У какого спутника есть озёра жидкого метана и плотная атмосфера?"), [t("Titan", "Տիտանը", "Титан"), t("Io", "Իոն", "Ио"), t("Phobos", "Ֆոբոսը", "Фобос")], 0),
        q(t("Which planet rotates lying on its side?", "Ո՞ր մոլորակն է պտտվում կողքի վրա պառկած։", "Какая планета вращается, лёжа на боку?"), [t("Uranus", "Ուրանը", "Уран"), t("Jupiter", "Յուպիտերը", "Юпитер"), t("Neptune", "Նեպտունը", "Нептун")], 0),
        q(t("Io is very volcanic because…", "Իոն շատ հրաբխային է, որովհետև…", "Ио очень вулканическая, потому что…"), [t("Jupiter's tides heat its interior", "Յուպիտերի մակընթացությունները տաքացնում են նրա ընդերքը", "приливы Юпитера разогревают её недра"), t("it is close to the Sun", "այն Արեգակին մոտ է", "она близко к Солнцу"), t("it is made of uranium", "այն ուրանից է կազմված", "она состоит из урана")], 0),
      ],
    ),
    lesson(
      "small-bodies",
      ["Dwarf planets, asteroids, comets and meteors", "Գաճաճ մոլորակներ, աստերոիդներ, գիսաստղեր և ասուպներ", "Карликовые планеты, астероиды, кометы и метеоры"],
      {
        en: ["State the definition of a planet and explain why Pluto is a dwarf planet", "Describe asteroids, comets, meteors and meteorites and the danger of impacts", "Explain how the Solar system formed from a rotating cloud and why small bodies are its leftovers"],
        hy: ["Ձևակերպել մոլորակի սահմանումը և բացատրել, թե ինչու է Պլուտոնը գաճաճ մոլորակ", "Նկարագրել աստերոիդները, գիսաստղերը, ասուպներն ու երկնաքարերը և բախումների վտանգը", "Բացատրել, թե ինչպես է Արեգակնային համակարգն առաջացել պտտվող ամպից, և ինչու են փոքր մարմինները նրա մնացորդները"],
        ru: ["Формулировать определение планеты и объяснять, почему Плутон — карликовая планета", "Описывать астероиды, кометы, метеоры и метеориты и опасность столкновений", "Объяснять, как Солнечная система образовалась из вращающегося облака и почему малые тела — её остатки"],
      },
      {
        en: `## What is a planet?

In 2006 the International Astronomical Union decided that a **planet** goes round the Sun, is massive enough to be **round**, and has **cleared its orbit** of other bodies. **Pluto** is round but shares its region with thousands of icy bodies of the Kuiper belt, so it became a **dwarf planet**, like Eris and Ceres. The New Horizons probe flew past Pluto in 2015 and found mountains of water ice and a vast heart-shaped plain of frozen nitrogen.

## Asteroids

Asteroids are rocky and metallic bodies, mostly in the **main belt** between Mars and Jupiter. More than a million are bigger than $1$ km, but all together they weigh less than $5\\%$ of the Moon. The largest, **Ceres** ($940$ km), is a dwarf planet. Jupiter's gravity stopped them from gathering into a planet.

Some asteroids cross the Earth's orbit. In 2022 the **DART** probe struck the small asteroid Dimorphos and changed its orbit: the first test of planetary defence. Probes have also brought back samples from the asteroids Ryugu (2020) and Bennu (2023).

## Comets

A comet is a "dirty snowball": a **nucleus** of ice and dust a few kilometres across. Far from the Sun it is frozen and invisible. Near the Sun the ice evaporates into a **coma** and **tails** millions of kilometres long. The tails always point **away from the Sun**: a straight blue ion tail blown by the solar wind and a curved yellowish dust tail pushed by sunlight.

Short-period comets come from the **Kuiper belt** beyond Neptune, long-period ones from the distant **Oort cloud**. **Halley's comet** returns every $75$–$76$ years; it was last seen in 1986 and will be back in 2061. The Rosetta probe orbited comet Churyumov–Gerasimenko in 2014–2016 and put a lander on it.

## Meteors and meteorites

A **meteoroid** is a small body in space. When it enters the air at $11$–$72$ km/s it heats up and glows at heights of about $70$–$120$ km: a **meteor**, or "shooting star". Most are grains smaller than sand. A piece that survives and falls to the ground is a **meteorite**: stony, iron or stony-iron.

When the Earth crosses the trail of dust left by a comet, we see a **meteor shower**: the Perseids around 12 August (from comet Swift–Tuttle) and the Geminids around 14 December.

Big impacts are rare but dangerous. The Tunguska explosion (1908) flattened $2000$ km² of Siberian forest; the Chelyabinsk meteor (2013), about $20$ m across, exploded in the air and broke windows across the city; an impact $66$ million years ago helped to end the age of dinosaurs.

## How the Solar system formed

About $4{.}6$ billion years ago a cloud of gas and dust collapsed under its own gravity. It spun faster and flattened into a disc; the centre became the **Sun**. In the disc, dust stuck into **planetesimals**, which merged into planets: rocky ones near the Sun, giants beyond the snow line. Asteroids, comets and dwarf planets are **leftover building blocks**. The oldest meteorites are $4{.}57$ billion years old, the age of the Solar system.

## Worked examples

**Example 1.** Ceres has $a = 2{.}77$ AU. Its period?

$T = 2{.}77^{1{.}5} \\approx 4{.}6$ years.

**Example 2.** The Chelyabinsk body had a mass of about $1{.}2 \\cdot 10^7$ kg and a speed of $19$ km/s. Its kinetic energy?

$E = \\dfrac{mv^2}{2} = \\dfrac{1{.}2 \\cdot 10^7 \\cdot (1{.}9 \\cdot 10^4)^2}{2} \\approx 2{.}2 \\cdot 10^{15}$ J, about $500$ kilotons of TNT.

## Exercises

1. Which condition of the definition of a planet does Pluto not satisfy?
2. Which way does a comet's tail point? Why?
3. What is the difference between a meteoroid, a meteor and a meteorite?
4. When can you see the Perseids, and where do their particles come from?
5. An asteroid has $a = 3{.}3$ AU. Find its period and compare it with Jupiter's ($11{.}9$ years).
6. Find the kinetic energy of a $1$ kg meteoroid at $30$ km/s. How many kilograms of TNT is that ($4{.}2 \\cdot 10^6$ J/kg)?

### Answers

1. It has not cleared its orbit of other bodies.
2. Away from the Sun: the solar wind and the pressure of sunlight push the gas and dust.
3. A meteoroid is the body in space; a meteor is the glow in the air; a meteorite is the piece that reaches the ground.
4. Around 12 August; from the dust of comet Swift–Tuttle.
5. $T = 3{.}3^{1{.}5} \\approx 6{.}0$ years, half of Jupiter's period.
6. $E = 0{.}5 \\cdot 1 \\cdot (3 \\cdot 10^4)^2 = 4{.}5 \\cdot 10^8$ J, about $107$ kg of TNT.`,
        hy: `## Ի՞նչ է մոլորակը

2006 թվականին Միջազգային աստղագիտական միությունը որոշեց, որ **մոլորակը** պտտվում է Արեգակի շուրջ, բավականաչափ զանգվածեղ է **գնդաձև** լինելու համար և **մաքրել է իր ուղեծիրը** այլ մարմիններից։ **Պլուտոնը** գնդաձև է, բայց իր տարածքը կիսում է Կոյպերի գոտու հազարավոր սառցե մարմինների հետ, ուստի դարձավ **գաճաճ մոլորակ**՝ ինչպես Էրիդան և Ցերերան։ «Նյու Հորայզընս» զոնդը 2015 թվականին թռավ Պլուտոնի կողքով և գտավ ջրային սառույցի լեռներ և սառած ազոտի սրտաձև ընդարձակ հարթավայր։

## Աստերոիդներ

Աստերոիդները քարե և մետաղական մարմիններ են, հիմնականում Մարսի և Յուպիտերի միջև գտնվող **գլխավոր գոտում**։ Մեկ միլիոնից ավելին $1$ կմ-ից մեծ են, բայց բոլորը միասին կշռում են Լուսնի $5\\%$-ից պակաս։ Ամենամեծը՝ **Ցերերան** ($940$ կմ), գաճաճ մոլորակ է։ Յուպիտերի ձգողությունը թույլ չտվեց նրանց հավաքվել մոլորակի մեջ։

Որոշ աստերոիդներ հատում են Երկրի ուղեծիրը։ 2022 թվականին **DART** զոնդը հարվածեց փոքր Դիմորֆոս աստերոիդին և փոխեց նրա ուղեծիրը․ մոլորակային պաշտպանության առաջին փորձը։ Զոնդերը նմուշներ են բերել նաև Ռյուգու (2020) և Բեննու (2023) աստերոիդներից։

## Գիսաստղեր

Գիսաստղը «կեղտոտ ձնագունդ» է՝ մի քանի կիլոմետր տրամագծով սառույցից և փոշուց կազմված **միջուկ**։ Արեգակից հեռու այն սառած է և անտեսանելի։ Արեգակի մոտ սառույցը գոլորշիանում է՝ առաջացնելով **գլուխ** և միլիոնավոր կիլոմետր երկարությամբ **պոչեր**։ Պոչերը միշտ ուղղված են **Արեգակից հակառակ**․ արևային քամուց փչվող ուղիղ կապույտ իոնային պոչ և արևի լույսից հրվող կոր դեղնավուն փոշե պոչ։

Կարճապարբերական գիսաստղերը գալիս են Նեպտունից այն կողմ գտնվող **Կոյպերի գոտուց**, երկարապարբերականները՝ հեռավոր **Օորտի ամպից**։ **Հալլեյի գիսաստղը** վերադառնում է $75$–$76$ տարին մեկ, այն վերջին անգամ երևացել է 1986 թվականին և կվերադառնա 2061-ին։ «Ռոզետա» զոնդը 2014–2016 թվականներին պտտվեց Չուրյումով-Գերասիմենկո գիսաստղի շուրջ և վայրէջքային սարք իջեցրեց նրա վրա։

## Ասուպներ և երկնաքարեր

**Մետեորոիդը** փոքր մարմին է տիեզերքում։ Երբ այն $11$–$72$ կմ/վ արագությամբ մտնում է օդ, տաքանում և լուսարձակում է մոտ $70$–$120$ կմ բարձրության վրա․ սա **ասուպն** է՝ «ընկնող աստղը»։ Մեծ մասը ավազահատիկից փոքր հատիկներ են։ Կտորը, որը չի այրվում և ընկնում է գետնին, **երկնաքար** է՝ քարե, երկաթե կամ քարաերկաթե։

Երբ Երկիրը հատում է գիսաստղի թողած փոշու հետքը, տեսնում ենք **ասուպային հոսք**․ Պերսեիդները՝ օգոստոսի 12-ի շրջակայքում (Սվիֆթ-Թաթլ գիսաստղից), և Գեմինիդները՝ դեկտեմբերի 14-ի շրջակայքում։

Մեծ բախումները հազվադեպ են, բայց վտանգավոր։ Տունգուսկայի պայթյունը (1908) տապալեց Սիբիրի $2000$ կմ² անտառ, մոտ $20$ մ տրամագծով Չելյաբինսկի ասուպը (2013) պայթեց օդում և ջարդեց ամբողջ քաղաքի պատուհանները, $66$ միլիոն տարի առաջ տեղի ունեցած բախումն օգնեց ավարտել դինոզավրերի դարաշրջանը։

## Ինչպես առաջացավ Արեգակնային համակարգը

Մոտ $4{,}6$ միլիարդ տարի առաջ գազի և փոշու ամպը սեղմվեց սեփական ձգողության ազդեցությամբ։ Այն ավելի արագ պտտվեց և տափակեց՝ դառնալով սկավառակ, կենտրոնը դարձավ **Արեգակ**։ Սկավառակում փոշին կպչում էր իրար՝ առաջացնելով **պլանետեզիմալներ**, որոնք միաձուլվեցին մոլորակների մեջ․ քարեները՝ Արեգակի մոտ, հսկաները՝ ձյան գծից այն կողմ։ Աստերոիդները, գիսաստղերը և գաճաճ մոլորակները **շինարարական մնացորդներ** են։ Ամենահին երկնաքարերը $4{,}57$ միլիարդ տարեկան են՝ Արեգակնային համակարգի տարիքի։

## Լուծված օրինակներ

**Օրինակ 1։** Ցերերայի համար $a = 2{,}77$ ա․մ․։ Որքա՞ն է նրա պարբերությունը։

$T = 2{,}77^{1{,}5} \\approx 4{,}6$ տարի։

**Օրինակ 2։** Չելյաբինսկի մարմնի զանգվածը մոտ $1{,}2 \\cdot 10^7$ կգ էր, արագությունը՝ $19$ կմ/վ։ Որքա՞ն էր նրա կինետիկ էներգիան։

$E = \\dfrac{mv^2}{2} = \\dfrac{1{,}2 \\cdot 10^7 \\cdot (1{,}9 \\cdot 10^4)^2}{2} \\approx 2{,}2 \\cdot 10^{15}$ Ջ, մոտ $500$ կիլոտոննա տրոտիլ։

## Վարժություններ

1. Մոլորակի սահմանման ո՞ր պայմանը չի բավարարում Պլուտոնը։
2. Ո՞ւր է ուղղված գիսաստղի պոչը։ Ինչո՞ւ։
3. Ի՞նչ տարբերություն կա մետեորոիդի, ասուպի և երկնաքարի միջև։
4. Ե՞րբ կարելի է տեսնել Պերսեիդները, և որտեղի՞ց են գալիս նրանց մասնիկները։
5. Աստերոիդի համար $a = 3{,}3$ ա․մ․։ Գտեք նրա պարբերությունը և համեմատեք Յուպիտերինի հետ ($11{,}9$ տարի)։
6. Գտեք $30$ կմ/վ արագությամբ $1$ կգ մետեորոիդի կինետիկ էներգիան։ Դա քանի՞ կիլոգրամ տրոտիլ է ($4{,}2 \\cdot 10^6$ Ջ/կգ)։

### Պատասխաններ

1. Այն չի մաքրել իր ուղեծիրը այլ մարմիններից։
2. Արեգակից հակառակ․ արևային քամին և արևի լույսի ճնշումը հրում են գազն ու փոշին։
3. Մետեորոիդը մարմինն է տիեզերքում, ասուպը՝ լուսարձակումն օդում, երկնաքարը՝ գետնին հասած կտորը։
4. Օգոստոսի 12-ի շրջակայքում, Սվիֆթ-Թաթլ գիսաստղի փոշուց։
5. $T = 3{,}3^{1{,}5} \\approx 6{,}0$ տարի՝ Յուպիտերի պարբերության կեսը։
6. $E = 0{,}5 \\cdot 1 \\cdot (3 \\cdot 10^4)^2 = 4{,}5 \\cdot 10^8$ Ջ, մոտ $107$ կգ տրոտիլ։`,
        ru: `## Что такое планета?

В 2006 году Международный астрономический союз решил, что **планета** обращается вокруг Солнца, достаточно массивна, чтобы быть **шарообразной**, и **расчистила свою орбиту** от других тел. **Плутон** шарообразен, но делит свою область с тысячами ледяных тел пояса Койпера, поэтому стал **карликовой планетой**, как Эрида и Церера. Зонд «Новые горизонты» пролетел мимо Плутона в 2015 году и обнаружил горы из водяного льда и огромную равнину замёрзшего азота в форме сердца.

## Астероиды

Астероиды — каменные и металлические тела, в основном в **главном поясе** между Марсом и Юпитером. Больше миллиона из них крупнее $1$ км, но все вместе они весят меньше $5\\%$ массы Луны. Крупнейший, **Церера** ($940$ км), — карликовая планета. Тяготение Юпитера не дало им собраться в планету.

Некоторые астероиды пересекают орбиту Земли. В 2022 году зонд **DART** врезался в маленький астероид Диморф и изменил его орбиту — первый опыт планетарной защиты. Зонды доставили на Землю и образцы астероидов Рюгу (2020) и Бенну (2023).

## Кометы

Комета — «грязный снежок»: **ядро** изо льда и пыли размером в несколько километров. Вдали от Солнца оно заморожено и невидимо. Вблизи Солнца лёд испаряется, образуя **голову** (кому) и **хвосты** длиной в миллионы километров. Хвосты всегда направлены **от Солнца**: прямой голубой ионный хвост выдувает солнечный ветер, а изогнутый желтоватый пылевой отталкивает солнечный свет.

Короткопериодические кометы приходят из **пояса Койпера** за Нептуном, долгопериодические — из далёкого **облака Оорта**. **Комета Галлея** возвращается каждые $75$–$76$ лет; последний раз её видели в 1986 году, а вернётся она в 2061-м. Зонд «Розетта» в 2014–2016 годах обращался вокруг кометы Чурюмова–Герасименко и посадил на неё спускаемый аппарат.

## Метеоры и метеориты

**Метеороид** — маленькое тело в космосе. Влетая в воздух со скоростью $11$–$72$ км/с, он нагревается и светится на высоте около $70$–$120$ км: это **метеор**, «падающая звезда». Большинство — крупинки меньше песчинки. Кусок, который не сгорел и упал на землю, — **метеорит**: каменный, железный или железокаменный.

Когда Земля пересекает след пыли, оставленный кометой, мы видим **метеорный поток**: Персеиды около 12 августа (от кометы Свифта–Таттла) и Геминиды около 14 декабря.

Крупные столкновения редки, но опасны. Тунгусский взрыв (1908) повалил $2000$ км² сибирской тайги; Челябинский метеор (2013) поперечником около $20$ м взорвался в воздухе и выбил окна по всему городу; удар $66$ млн лет назад помог завершить эпоху динозавров.

## Как образовалась Солнечная система

Около $4{,}6$ млрд лет назад облако газа и пыли сжалось под действием собственного тяготения. Оно вращалось всё быстрее и сплющилось в диск; центр стал **Солнцем**. В диске пылинки слипались в **планетезимали**, которые объединялись в планеты: каменные — вблизи Солнца, гиганты — за линией льда. Астероиды, кометы и карликовые планеты — **оставшиеся строительные блоки**. Древнейшим метеоритам $4{,}57$ млрд лет — это возраст Солнечной системы.

## Разобранные примеры

**Пример 1.** У Цереры $a = 2{,}77$ а. е. Её период?

$T = 2{,}77^{1{,}5} \\approx 4{,}6$ года.

**Пример 2.** Масса Челябинского тела была около $1{,}2 \\cdot 10^7$ кг, скорость — $19$ км/с. Его кинетическая энергия?

$E = \\dfrac{mv^2}{2} = \\dfrac{1{,}2 \\cdot 10^7 \\cdot (1{,}9 \\cdot 10^4)^2}{2} \\approx 2{,}2 \\cdot 10^{15}$ Дж, около $500$ килотонн тротила.

## Упражнения

1. Какому условию определения планеты не удовлетворяет Плутон?
2. Куда направлен хвост кометы? Почему?
3. В чём разница между метеороидом, метеором и метеоритом?
4. Когда можно увидеть Персеиды и откуда берутся их частицы?
5. У астероида $a = 3{,}3$ а. е. Найдите его период и сравните с периодом Юпитера ($11{,}9$ года).
6. Найдите кинетическую энергию метеороида массой $1$ кг при скорости $30$ км/с. Сколько это килограммов тротила ($4{,}2 \\cdot 10^6$ Дж/кг)?

### Ответы

1. Он не расчистил свою орбиту от других тел.
2. От Солнца: газ и пыль отталкивают солнечный ветер и давление солнечного света.
3. Метеороид — тело в космосе; метеор — свечение в воздухе; метеорит — кусок, долетевший до земли.
4. Около 12 августа; из пыли кометы Свифта–Таттла.
5. $T = 3{,}3^{1{,}5} \\approx 6{,}0$ года, половина периода Юпитера.
6. $E = 0{,}5 \\cdot 1 \\cdot (3 \\cdot 10^4)^2 = 4{,}5 \\cdot 10^8$ Дж, около $107$ кг тротила.`,
      },
      [
        q(t("Pluto is classed as…", "Պլուտոնը դասվում է…", "Плутон относят к…"), [t("a dwarf planet", "գաճաճ մոլորակների շարքին", "карликовым планетам"), t("a comet", "գիսաստղերի շարքին", "кометам"), t("a moon of Neptune", "Նեպտունի արբանյակների շարքին", "спутникам Нептуна")], 0),
        q(t("Most asteroids are found…", "Աստերոիդների մեծ մասը գտնվում է…", "Большинство астероидов находится…"), [t("between Mars and Jupiter", "Մարսի և Յուպիտերի միջև", "между Марсом и Юпитером"), t("between the Earth and the Moon", "Երկրի և Լուսնի միջև", "между Землёй и Луной"), t("inside the Sun", "Արեգակի ներսում", "внутри Солнца")], 0),
        q(t("A comet's tail always points…", "Գիսաստղի պոչը միշտ ուղղված է…", "Хвост кометы всегда направлен…"), [t("away from the Sun", "Արեգակից հակառակ", "от Солнца"), t("towards the Sun", "դեպի Արեգակ", "к Солнцу"), t("backwards along its path", "իր ուղու հակառակ ուղղությամբ", "назад по её пути")], 0),
        q(t("A meteor is…", "Ասուպը…", "Метеор — это…"), [t("the glow of a small body burning in the air", "օդում այրվող փոքր մարմնի լուսարձակումն է", "свечение сгорающего в воздухе маленького тела"), t("a stone lying on the ground", "գետնին ընկած քար է", "камень, лежащий на земле"), t("a kind of star", "աստղի տեսակ է", "вид звезды")], 0),
        q(t("Halley's comet will next return in…", "Հալլեյի գիսաստղը հաջորդ անգամ կվերադառնա…", "Комета Галлея вернётся в…"), [t("2061", "2061 թվականին", "2061 году"), t("2030", "2030 թվականին", "2030 году"), t("2100", "2100 թվականին", "2100 году")], 0),
        q(t("The Solar system formed about…", "Արեգակնային համակարգն առաջացել է մոտ…", "Солнечная система образовалась около…"), [t("4.6 billion years ago", "4,6 միլիարդ տարի առաջ", "4,6 млрд лет назад"), t("6000 years ago", "6000 տարի առաջ", "6000 лет назад"), t("66 million years ago", "66 միլիոն տարի առաջ", "66 млн лет назад")], 0),
      ],
    ),
  ],
};
