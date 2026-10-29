import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Stars", "Աստղեր", "Звёзды"),
  summary: t("Annual parallax and the parsec, absolute magnitudes, spectral classes and the Hertzsprung–Russell diagram, double stars and stellar masses, variable stars and supernovae, the birth and death of stars.", "Տարեկան պարալաքս և պարսեկ, բացարձակ աստղային մեծություններ, սպեկտրալ դասեր և Հերցշպրունգ-Ռասելի դիագրամ, կրկնակի աստղեր և աստղերի զանգվածներ, փոփոխական աստղեր և գերնոր աստղեր, աստղերի ծնունդն ու մահը։", "Годичный параллакс и парсек, абсолютные звёздные величины, спектральные классы и диаграмма Герцшпрунга–Рассела, двойные звёзды и массы звёзд, переменные звёзды и сверхновые, рождение и смерть звёзд."),
  lessons: [
    lesson(
      "star-distances",
      ["Distances to the stars", "Աստղերի հեռավորությունները", "Расстояния до звёзд"],
      {
        en: ["Explain the annual parallax and define the parsec", "Find distances from parallaxes, and convert between parsecs and light-years", "Use apparent and absolute magnitudes to compare the true luminosities of stars"],
        hy: ["Բացատրել տարեկան պարալաքսը և սահմանել պարսեկը", "Գտնել հեռավորությունները պարալաքսներից, փոխարկել պարսեկներն ու լուսային տարիները", "Տեսանելի և բացարձակ աստղային մեծություններով համեմատել աստղերի իրական լուսատվությունները"],
        ru: ["Объяснять годичный параллакс и определять парсек", "Находить расстояния по параллаксам, переводить парсеки в световые годы", "С помощью видимых и абсолютных звёздных величин сравнивать истинные светимости звёзд"],
      },
      {
        en: `## Annual parallax

The Earth's radius is far too short a base for the stars. Astronomers use the **orbit of the Earth**: a near star is observed from opposite sides of the orbit, six months apart, and it shifts slightly against much more distant stars. The **annual parallax** $\\pi$ is the angle at which the radius of the Earth's orbit, $1$ AU, would be seen from the star.

The angles are tiny: even the nearest star, Proxima Centauri, has $\\pi = 0{.}77''$, the width of a coin seen from $5$ km. For this reason the first parallax, of the star 61 Cygni ($0{.}29''$), was measured only in 1838 by Friedrich Bessel; Vasily Struve in Russia measured Vega's at about the same time.

## The parsec

The distance from which $1$ AU is seen at $1''$ is the **parsec** (from "parallax of one second"). Then simply

$$d \\,(\\text{pc}) = \\dfrac{1}{\\pi''}, \\qquad 1 \\text{ pc} = 206\\,265 \\text{ AU} = 3{.}26 \\text{ ly}.$$

From the ground parallaxes can be measured out to about $100$ pc. The **Gaia** space telescope (2013–2025) measured parallaxes of nearly two billion stars with an accuracy of millionths of an arcsecond and mapped a large part of our Galaxy in three dimensions.

## Apparent and absolute magnitude

How bright a star looks, its **apparent magnitude** $m$, depends both on its true power and on its distance: brightness falls as $\\dfrac{1}{d^2}$. To compare stars fairly, astronomers imagine them all at the same distance, $10$ pc. The magnitude a star would have there is its **absolute magnitude** $M$:

$$M = m + 5 - 5 \\lg d, \\qquad d \\text{ in parsecs}.$$

The Sun's absolute magnitude is $M_\\odot = 4{.}8$: from $10$ pc it would be a faint star. The luminosity of a star in solar units follows from the difference: $$\\dfrac{L}{L_\\odot} = 10^{0{.}4\\,(4{.}8 - M)}.$$

## Worked examples

**Example 1.** Sirius has $\\pi = 0{.}379''$. Its distance?

$d = \\dfrac{1}{0{.}379} \\approx 2{.}64$ pc $\\approx 8{.}6$ light-years.

**Example 2.** Sirius has $m = -1{.}46$. Its absolute magnitude and luminosity?

$M = -1{.}46 + 5 - 5 \\lg 2{.}64 = 3{.}54 - 2{.}11 \\approx 1{.}4$; $\\dfrac{L}{L_\\odot} = 10^{0{.}4 \\cdot 3{.}4} \\approx 23$.

**Example 3.** A star has $M = 0$ and $m = 10$. How far is it?

$\\lg d = \\dfrac{m - M + 5}{5} = 3$, $d = 1000$ pc.

## Exercises

1. Proxima Centauri has $\\pi = 0{.}768''$. Find its distance in parsecs and light-years.
2. A star has a parallax of $0{.}01''$. How far is it in light-years?
3. Why cannot parallaxes be measured for very distant stars from the ground?
4. Vega has $m = 0{.}03$ and $d = 7{.}7$ pc. Find its absolute magnitude and its luminosity in solar units.
5. A star is moved twice as far away. How does its apparent magnitude change?
6. What would the apparent magnitude of the Sun be seen from Proxima Centauri ($1{.}30$ pc)?

### Answers

1. $d = 1/0{.}768 \\approx 1{.}30$ pc $\\approx 4{.}24$ ly.
2. $100$ pc $\\approx 326$ ly.
3. The angles become smaller than the blurring caused by the air; from space Gaia reaches much farther.
4. $M = 0{.}03 + 5 - 5 \\lg 7{.}7 \\approx 0{.}6$; $L / L_\\odot = 10^{0{.}4 \\cdot 4{.}2} \\approx 48$.
5. It grows by $5 \\lg 2 \\approx 1{.}5$: the star looks fainter.
6. $m = M - 5 + 5 \\lg d = 4{.}8 - 5 + 5 \\lg 1{.}30 \\approx 0{.}4$, as bright as the brightest stars in our sky.`,
        hy: `## Տարեկան պարալաքս

Երկրի շառավիղը աստղերի համար չափազանց կարճ հիմք է։ Աստղագետներն օգտագործում են **Երկրի ուղեծիրը**․ մոտ աստղը դիտվում է ուղեծրի հակադիր կողմերից՝ վեց ամիս տարբերությամբ, և այն մի փոքր տեղաշարժվում է շատ ավելի հեռավոր աստղերի նկատմամբ։ **Տարեկան պարալաքսը**՝ $\\pi$-ն, այն անկյունն է, որի տակ աստղից կերևար Երկրի ուղեծրի շառավիղը՝ $1$ ա․մ․։

Անկյունները չնչին են․ նույնիսկ ամենամոտ աստղը՝ Պրոքսիմա Կենտավրոսը, ունի $\\pi = 0{,}77''$՝ $5$ կմ հեռավորությունից երևացող մետաղադրամի լայնությունը։ Ահա թե ինչու առաջին պարալաքսը՝ 61 Կարապի աստղինը ($0{,}29''$), չափվեց միայն 1838 թվականին Ֆրիդրիխ Բեսելի կողմից, Ռուսաստանում Վասիլի Ստրուվեն գրեթե նույն ժամանակ չափեց Վեգայինը։

## Պարսեկը

Այն հեռավորությունը, որից $1$ ա․մ․-ը երևում է $1''$ անկյան տակ, **պարսեկն** է («մեկ վայրկյանի պարալաքս»)։ Այդ դեպքում պարզապես

$$d \\,(\\text{պկ}) = \\dfrac{1}{\\pi''},$$

իսկ $1$ պկ $= 206\\,265$ ա․մ․ $= 3{,}26$ լուսային տարի։

Երկրից պարալաքսները կարելի է չափել մինչև մոտ $100$ պկ։ **Գայա** տիեզերական աստղադիտակը (2013–2025) չափեց համարյա երկու միլիարդ աստղերի պարալաքսներ աղեղային վայրկյանի միլիոներորդականների ճշտությամբ և մեր Գալակտիկայի մեծ մասի եռաչափ քարտեզը կազմեց։

## Տեսանելի և բացարձակ աստղային մեծություն

Թե որքան պայծառ է երևում աստղը՝ նրա **տեսանելի աստղային մեծությունը**՝ $m$-ը, կախված է և՛ իրական հզորությունից, և՛ հեռավորությունից․ պայծառությունը նվազում է $\\dfrac{1}{d^2}$-ի պես։ Աստղերն արդարացի համեմատելու համար աստղագետները պատկերացնում են դրանք բոլորը նույն՝ $10$ պկ հեռավորության վրա։ Այնտեղ աստղի ունենալիք մեծությունը նրա **բացարձակ աստղային մեծությունն** է՝ $M$-ը․

$$M = m + 5 - 5 \\lg d, \\qquad d\\text{-ն պարսեկներով}$$

Արեգակի բացարձակ մեծությունը $M_\\odot = 4{,}8$ է․ $10$ պկ-ից այն աղոտ աստղ կլիներ։ Աստղի լուսատվությունն արեգակնային միավորներով բխում է տարբերությունից․ $$\\dfrac{L}{L_\\odot} = 10^{0{,}4\\,(4{,}8 - M)}$$

## Լուծված օրինակներ

**Օրինակ 1։** Սիրիուսի համար $\\pi = 0{,}379''$։ Որքա՞ն է նրա հեռավորությունը։

$d = \\dfrac{1}{0{,}379} \\approx 2{,}64$ պկ $\\approx 8{,}6$ լուսային տարի։

**Օրինակ 2։** Սիրիուսի համար $m = -1{,}46$։ Որքա՞ն են նրա բացարձակ մեծությունը և լուսատվությունը։

$M = -1{,}46 + 5 - 5 \\lg 2{,}64 = 3{,}54 - 2{,}11 \\approx 1{,}4$, $\\dfrac{L}{L_\\odot} = 10^{0{,}4 \\cdot 3{,}4} \\approx 23$։

**Օրինակ 3։** Աստղի համար $M = 0$ և $m = 10$։ Որքա՞ն հեռու է այն։

$\\lg d = \\dfrac{m - M + 5}{5} = 3$, $d = 1000$ պկ։

## Վարժություններ

1. Պրոքսիմա Կենտավրոսի համար $\\pi = 0{,}768''$։ Գտեք նրա հեռավորությունը պարսեկներով և լուսային տարիներով։
2. Աստղի պարալաքսը $0{,}01''$ է։ Որքա՞ն հեռու է այն լուսային տարիներով։
3. Ինչո՞ւ շատ հեռավոր աստղերի պարալաքսները հնարավոր չէ չափել Երկրից։
4. Վեգայի համար $m = 0{,}03$ և $d = 7{,}7$ պկ։ Գտեք նրա բացարձակ մեծությունը և լուսատվությունն արեգակնային միավորներով։
5. Աստղը տեղափոխվում է երկու անգամ ավելի հեռու։ Ինչպե՞ս է փոխվում նրա տեսանելի մեծությունը։
6. Ինչպիսի՞ն կլիներ Արեգակի տեսանելի մեծությունը Պրոքսիմա Կենտավրոսից ($1{,}30$ պկ) դիտելիս։

### Պատասխաններ

1. $d = 1/0{,}768 \\approx 1{,}30$ պկ $\\approx 4{,}24$ լ․տ․։
2. $100$ պկ $\\approx 326$ լ․տ․։
3. Անկյունները դառնում են օդի պատճառած աղոտությունից փոքր, տիեզերքից Գայան շատ ավելի հեռու է հասնում։
4. $M = 0{,}03 + 5 - 5 \\lg 7{,}7 \\approx 0{,}6$, $L / L_\\odot = 10^{0{,}4 \\cdot 4{,}2} \\approx 48$։
5. Այն մեծանում է $5 \\lg 2 \\approx 1{,}5$-ով․ աստղն ավելի աղոտ է երևում։
6. $m = M - 5 + 5 \\lg d = 4{,}8 - 5 + 5 \\lg 1{,}30 \\approx 0{,}4$՝ մեր երկնքի ամենապայծառ աստղերի պես։`,
        ru: `## Годичный параллакс

Радиус Земли — слишком короткий базис для звёзд. Астрономы используют **орбиту Земли**: близкую звезду наблюдают с противоположных сторон орбиты с промежутком в полгода, и она слегка смещается относительно гораздо более далёких звёзд. **Годичный параллакс** $\\pi$ — угол, под которым со звезды был бы виден радиус земной орбиты, $1$ а. е.

Углы крошечные: даже у ближайшей звезды, Проксимы Центавра, $\\pi = 0{,}77''$ — ширина монеты, видимой с $5$ км. Поэтому первый параллакс, звезды 61 Лебедя ($0{,}29''$), измерил лишь в 1838 году Фридрих Бессель; Василий Струве в России почти одновременно измерил параллакс Веги.

## Парсек

Расстояние, с которого $1$ а. е. видна под углом $1''$, — **парсек** (от «параллакс-секунда»). Тогда просто

$$d \\,(\\text{пк}) = \\dfrac{1}{\\pi''}, \\qquad 1 \\text{ пк} = 206\\,265 \\text{ а.е.} = 3{,}26 \\text{ св. года}.$$

С Земли параллаксы удаётся измерить примерно до $100$ пк. Космический телескоп **Gaia** (2013–2025) измерил параллаксы почти двух миллиардов звёзд с точностью до миллионных долей угловой секунды и составил трёхмерную карту значительной части нашей Галактики.

## Видимая и абсолютная звёздная величина

Насколько яркой выглядит звезда — её **видимая звёздная величина** $m$ — зависит и от истинной мощности, и от расстояния: блеск убывает как $\\dfrac{1}{d^2}$. Чтобы честно сравнивать звёзды, астрономы мысленно ставят их все на одно расстояние — $10$ пк. Величина, которую звезда имела бы там, — её **абсолютная звёздная величина** $M$:

$$M = m + 5 - 5 \\lg d, \\qquad d \\text{ в парсеках}.$$

Абсолютная величина Солнца $M_\\odot = 4{,}8$: с $10$ пк оно было бы слабой звездой. Светимость звезды в солнечных единицах следует из разности: $$\\dfrac{L}{L_\\odot} = 10^{0{,}4\\,(4{,}8 - M)}.$$

## Разобранные примеры

**Пример 1.** У Сириуса $\\pi = 0{,}379''$. Расстояние до него?

$d = \\dfrac{1}{0{,}379} \\approx 2{,}64$ пк $\\approx 8{,}6$ светового года.

**Пример 2.** У Сириуса $m = -1{,}46$. Его абсолютная величина и светимость?

$M = -1{,}46 + 5 - 5 \\lg 2{,}64 = 3{,}54 - 2{,}11 \\approx 1{,}4$; $\\dfrac{L}{L_\\odot} = 10^{0{,}4 \\cdot 3{,}4} \\approx 23$.

**Пример 3.** У звезды $M = 0$ и $m = 10$. Как далеко она?

$\\lg d = \\dfrac{m - M + 5}{5} = 3$, $d = 1000$ пк.

## Упражнения

1. У Проксимы Центавра $\\pi = 0{,}768''$. Найдите расстояние до неё в парсеках и световых годах.
2. Параллакс звезды $0{,}01''$. Как далеко она в световых годах?
3. Почему параллаксы очень далёких звёзд нельзя измерить с Земли?
4. У Веги $m = 0{,}03$ и $d = 7{,}7$ пк. Найдите её абсолютную величину и светимость в солнечных единицах.
5. Звезду отодвинули вдвое дальше. Как изменится её видимая величина?
6. Какой была бы видимая звёздная величина Солнца для наблюдателя у Проксимы Центавра ($1{,}30$ пк)?

### Ответы

1. $d = 1/0{,}768 \\approx 1{,}30$ пк $\\approx 4{,}24$ св. года.
2. $100$ пк $\\approx 326$ св. лет.
3. Углы становятся меньше размытия, вызванного воздухом; из космоса Gaia достаёт гораздо дальше.
4. $M = 0{,}03 + 5 - 5 \\lg 7{,}7 \\approx 0{,}6$; $L / L_\\odot = 10^{0{,}4 \\cdot 4{,}2} \\approx 48$.
5. Она увеличится на $5 \\lg 2 \\approx 1{,}5$: звезда будет казаться слабее.
6. $m = M - 5 + 5 \\lg d = 4{,}8 - 5 + 5 \\lg 1{,}30 \\approx 0{,}4$ — как у самых ярких звёзд нашего неба.`,
      },
      [
        q(t("The annual parallax of a star is the angle at which … would be seen from the star.", "Աստղի տարեկան պարալաքսն այն անկյունն է, որի տակ աստղից կերևար…", "Годичный параллакс звезды — угол, под которым со звезды был бы виден…"), [t("the radius of the Earth's orbit", "Երկրի ուղեծրի շառավիղը", "радиус орбиты Земли"), t("the radius of the Earth", "Երկրի շառավիղը", "радиус Земли"), t("the diameter of the Sun", "Արեգակի տրամագիծը", "диаметр Солнца")], 0),
        q(t("A star with a parallax of 0.1″ is at…", "0,1″ պարալաքսով աստղը գտնվում է…", "Звезда с параллаксом 0,1″ находится на расстоянии…"), [t("10 pc", "10 պկ հեռավորության վրա", "10 пк"), t("0.1 pc", "0,1 պկ հեռավորության վրա", "0,1 пк"), t("100 pc", "100 պկ հեռավորության վրա", "100 пк")], 0),
        q(t("One parsec equals about…", "Մեկ պարսեկը մոտավորապես…", "Один парсек равен примерно…"), [t("3.26 light-years", "3,26 լուսային տարի է", "3,26 светового года"), t("1 light-year", "1 լուսային տարի է", "1 световому году"), t("206 265 km", "206 265 կմ է", "206 265 км")], 0),
        q(t("Who measured the first stellar parallax, in 1838?", "Ո՞վ չափեց աստղի առաջին պարալաքսը 1838 թվականին։", "Кто измерил первый параллакс звезды в 1838 году?"), [t("Friedrich Bessel", "Ֆրիդրիխ Բեսելը", "Фридрих Бессель"), t("Galileo Galilei", "Գալիլեո Գալիլեյը", "Галилео Галилей"), t("Edwin Hubble", "Էդվին Հաբլը", "Эдвин Хаббл")], 0),
        q(t("The absolute magnitude is the magnitude a star would have at a distance of…", "Բացարձակ աստղային մեծությունն այն մեծությունն է, որը աստղը կունենար … հեռավորության վրա։", "Абсолютная звёздная величина — это величина, которую звезда имела бы на расстоянии…"), [t("10 pc", "10 պկ", "10 пк"), t("1 AU", "1 ա․մ․", "1 а. е."), t("1 light-year", "1 լուսային տարի", "1 светового года")], 0),
        q(t("If a star is moved twice as far away, it looks…", "Եթե աստղը տեղափոխվի երկու անգամ ավելի հեռու, այն կերևա…", "Если звезду отодвинуть вдвое дальше, она будет казаться…"), [t("4 times fainter", "4 անգամ ավելի աղոտ", "в 4 раза слабее"), t("2 times fainter", "2 անգամ ավելի աղոտ", "в 2 раза слабее"), t("just as bright", "նույնքան պայծառ", "такой же яркой")], 0),
      ],
    ),
    lesson(
      "star-properties",
      ["Colours, spectra and sizes of stars", "Աստղերի գույները, սպեկտրները և չափերը", "Цвета, спектры и размеры звёзд"],
      {
        en: ["Name the spectral classes O, B, A, F, G, K, M and link them with temperature and colour", "Find the radius of a star from its luminosity and temperature", "Read the Hertzsprung–Russell diagram and name its main groups of stars"],
        hy: ["Թվարկել O, B, A, F, G, K, M սպեկտրալ դասերը և կապել դրանք ջերմաստիճանի ու գույնի հետ", "Գտնել աստղի շառավիղը նրա լուսատվությունից և ջերմաստիճանից", "Կարդալ Հերցշպրունգ-Ռասելի դիագրամը և անվանել աստղերի հիմնական խմբերը"],
        ru: ["Называть спектральные классы O, B, A, F, G, K, M и связывать их с температурой и цветом", "Находить радиус звезды по её светимости и температуре", "Читать диаграмму Герцшпрунга–Рассела и называть основные группы звёзд"],
      },
      {
        en: `## Colour is temperature

Look at Orion on a winter night: Betelgeuse is clearly orange-red, Rigel bluish-white. A star shines almost like a hot body, and the hotter it is, the shorter the wavelength of its strongest light (Wien's law, $\\lambda_{\\max} = \\dfrac{2{.}9 \\cdot 10^{-3}}{T}$ m). Cool stars are red, the Sun is yellowish-white, the hottest stars are blue.

## Spectral classes

Around 1900 at Harvard Observatory, Annie Jump Cannon and her colleagues sorted hundreds of thousands of stellar spectra by their dark lines. The classes, from hot to cool, are

| Class | Temperature, K | Colour | Example |
|---|---|---|---|
| O | over $30\\,000$ | blue | Mintaka in Orion's belt |
| B | $10\\,000$–$30\\,000$ | bluish-white | Rigel, Spica |
| A | $7500$–$10\\,000$ | white | Sirius, Vega |
| F | $6000$–$7500$ | yellowish-white | Procyon |
| G | $5200$–$6000$ | yellow | the Sun |
| K | $3700$–$5200$ | orange | Arcturus |
| M | under $3700$ | red | Betelgeuse, Antares |

Students remember the order with "Oh Be A Fine Girl/Guy, Kiss Me". The Sun is a G2 star with $T \\approx 5800$ K.

The lines differ mainly because of temperature, not composition. In 1925 Cecilia Payne showed that almost all stars are made of the same thing: about three quarters hydrogen and one quarter helium by mass, with only a sprinkle of heavier elements.

## Size from luminosity and temperature

Every square metre of a star's surface radiates $\\sigma T^4$ (Stefan–Boltzmann law), so the whole star gives $L = 4\\pi R^2 \\sigma T^4$. Comparing with the Sun:

$$\\dfrac{R}{R_\\odot} = \\sqrt{\\dfrac{L}{L_\\odot}} \\cdot \\left(\\dfrac{T_\\odot}{T}\\right)^2.$$

A star that is very luminous but cool must be huge; a star that is hot but faint must be tiny.

## The Hertzsprung–Russell diagram

Around 1911–1913 Ejnar Hertzsprung and Henry Norris Russell plotted stars by temperature (hot on the left) and luminosity (bright at the top). The stars do not fill the picture at random:

- About $90\\%$ lie on the **main sequence**, a band from hot bright stars to cool faint ones. These stars burn hydrogen in their cores; the Sun is one of them.
- Above it on the right are **giants** and **supergiants**: cool but very luminous, so enormous.
- Below on the left are **white dwarfs**: hot but faint, so about the size of the Earth.

The diagram is the key to stellar life stories: a star's position shows what stage of life it is in.

## Worked examples

**Example 1.** Betelgeuse has $L \\approx 100\\,000\\, L_\\odot$ and $T \\approx 3600$ K. Its radius?

$\\dfrac{R}{R_\\odot} = \\sqrt{100\\,000} \\cdot \\left(\\dfrac{5800}{3600}\\right)^2 \\approx 316 \\cdot 2{.}6 \\approx 820$. Put in place of the Sun, it would reach beyond the orbit of Mars.

**Example 2.** A white dwarf has $L = 0{.}01\\, L_\\odot$ and $T = 11\\,600$ K. Its radius?

$\\dfrac{R}{R_\\odot} = 0{.}1 \\cdot \\left(\\dfrac{1}{2}\\right)^2 = 0{.}025$, about $17\\,000$ km: less than three Earth radii.

**Example 3.** Where on the H–R diagram is a star of class M with $L = 0{.}001\\, L_\\odot$?

Bottom right: a cool, faint main-sequence star, a **red dwarf** like Proxima Centauri.

## Exercises

1. Arrange the classes G, B, M, A from hottest to coolest.
2. Which star is hotter, the orange Arcturus or the white Sirius?
3. A star has the Sun's radius and twice its temperature. How many times more luminous is it?
4. A star has the Sun's temperature and $L = 100\\, L_\\odot$. Its radius?
5. Rigel has $L \\approx 100\\,000\\, L_\\odot$ and $T \\approx 11\\,600$ K. Find its radius.
6. Two stars have the same temperature; one is $10\\,000$ times more luminous. How do their radii compare?

### Answers

1. B, A, G, M.
2. Sirius (class A, about $10\\,000$ K; Arcturus about $4300$ K).
3. $2^4 = 16$ times.
4. $R = \\sqrt{100}\\, R_\\odot = 10\\, R_\\odot$.
5. $\\sqrt{100\\,000} \\cdot (1/2)^2 \\approx 316 \\cdot 0{.}25 \\approx 80\\, R_\\odot$: a blue supergiant.
6. The radius of the luminous star is $\\sqrt{10\\,000} = 100$ times larger.`,
        hy: `## Գույնը ջերմաստիճան է

Ձմռան գիշերը նայեք Օրիոնին․ Բետելգեյզեն հստակ նարնջակարմիր է, Ռիգելը՝ կապտասպիտակ։ Աստղը լուսարձակում է համարյա տաք մարմնի պես, և որքան տաք է այն, այնքան կարճ է նրա ամենաուժեղ լույսի ալիքի երկարությունը (Վինի օրենք, $\\lambda_{\\max} = \\dfrac{2{,}9 \\cdot 10^{-3}}{T}$ մ)։ Սառը աստղերը կարմիր են, Արեգակը՝ դեղնասպիտակ, ամենատաք աստղերը՝ կապույտ։

## Սպեկտրալ դասեր

Մոտ 1900 թվականին Հարվարդի աստղադիտարանում Էննի Ջամփ Քենոնը և նրա գործընկերները հարյուր հազարավոր աստղային սպեկտրներ դասակարգեցին ըստ դրանց մութ գծերի։ Դասերը՝ տաքից սառը, հետևյալն են․

| Դաս | Ջերմաստիճան, Կ | Գույն | Օրինակ |
|---|---|---|---|
| O | $30\\,000$-ից բարձր | կապույտ | Մինթաքան Օրիոնի գոտում |
| B | $10\\,000$–$30\\,000$ | կապտասպիտակ | Ռիգել, Սպիկա |
| A | $7500$–$10\\,000$ | սպիտակ | Սիրիուս, Վեգա |
| F | $6000$–$7500$ | դեղնասպիտակ | Պրոցիոն |
| G | $5200$–$6000$ | դեղին | Արեգակ |
| K | $3700$–$5200$ | նարնջագույն | Արկտուր |
| M | $3700$-ից ցածր | կարմիր | Բետելգեյզե, Անտարես |

Արեգակը G2 դասի աստղ է, $T \\approx 5800$ Կ։

Գծերը տարբերվում են հիմնականում ջերմաստիճանի, ոչ թե կազմի պատճառով։ 1925 թվականին Սեսիլիա Փեյնը ցույց տվեց, որ գրեթե բոլոր աստղերը նույն նյութից են․ զանգվածով մոտ երեք քառորդը ջրածին է, մեկ քառորդը՝ հելիում, ծանր տարրերը շատ քիչ են։

## Չափը՝ լուսատվությունից և ջերմաստիճանից

Աստղի մակերևույթի յուրաքանչյուր քառակուսի մետր ճառագայթում է $\\sigma T^4$ (Ստեֆան-Բոլցմանի օրենք), ուստի ամբողջ աստղը տալիս է $L = 4\\pi R^2 \\sigma T^4$։ Արեգակի հետ համեմատելով․

$$\\dfrac{R}{R_\\odot} = \\sqrt{\\dfrac{L}{L_\\odot}} \\cdot \\left(\\dfrac{T_\\odot}{T}\\right)^2$$

Շատ լուսավոր, բայց սառը աստղը պետք է հսկայական լինի, տաք, բայց աղոտ աստղը՝ փոքրիկ։

## Հերցշպրունգ-Ռասելի դիագրամը

1911–1913 թվականներին Էյնար Հերցշպրունգը և Հենրի Նորիս Ռասելը աստղերը պատկերեցին ըստ ջերմաստիճանի (տաքերը՝ ձախում) և լուսատվության (պայծառները՝ վերևում)։ Աստղերը պատկերը պատահականորեն չեն լցնում․

- Մոտ $90\\%$-ը գտնվում է **գլխավոր հաջորդականության** վրա՝ տաք պայծառ աստղերից դեպի սառը աղոտները ձգվող շերտի։ Այս աստղերն իրենց միջուկում ջրածին են այրում, Արեգակը դրանցից մեկն է։
- Նրանից վեր՝ աջում, **հսկաներն** ու **գերհսկաներն** են․ սառը, բայց շատ լուսավոր, ուրեմն վիթխարի։
- Ներքևում՝ ձախում, **սպիտակ թզուկներն** են․ տաք, բայց աղոտ, ուրեմն Երկրի չափի։

Դիագրամն աստղերի կյանքի պատմության բանալին է․ աստղի դիրքը ցույց է տալիս, թե կյանքի որ փուլում է այն։

## Լուծված օրինակներ

**Օրինակ 1։** Բետելգեյզեի համար $L \\approx 100\\,000\\, L_\\odot$ և $T \\approx 3600$ Կ։ Որքա՞ն է նրա շառավիղը։

$\\dfrac{R}{R_\\odot} = \\sqrt{100\\,000} \\cdot \\left(\\dfrac{5800}{3600}\\right)^2 \\approx 316 \\cdot 2{,}6 \\approx 820$։ Արեգակի տեղում այն կհասներ Մարսի ուղեծրից այն կողմ։

**Օրինակ 2։** Սպիտակ թզուկի համար $L = 0{,}01\\, L_\\odot$ և $T = 11\\,600$ Կ։ Որքա՞ն է նրա շառավիղը։

$\\dfrac{R}{R_\\odot} = 0{,}1 \\cdot \\left(\\dfrac{1}{2}\\right)^2 = 0{,}025$, մոտ $17\\,000$ կմ՝ Երկրի երեք շառավղից պակաս։

**Օրինակ 3։** Հ-Ռ դիագրամի ո՞ր մասում է M դասի $L = 0{,}001\\, L_\\odot$ լուսատվությամբ աստղը։

Ներքևի աջ մասում․ սառը, աղոտ գլխավոր հաջորդականության աստղ է՝ **կարմիր թզուկ**, ինչպես Պրոքսիմա Կենտավրոսը։

## Վարժություններ

1. Դասավորեք G, B, M, A դասերն ամենատաքից դեպի ամենասառը։
2. Ո՞ր աստղն է ավելի տաք՝ նարնջագույն Արկտուրը, թե սպիտակ Սիրիուսը։
3. Աստղն ունի Արեգակի շառավիղը և նրա կրկնակի ջերմաստիճանը։ Քանի՞ անգամ է այն ավելի լուսավոր։
4. Աստղն ունի Արեգակի ջերմաստիճանը և $L = 100\\, L_\\odot$։ Որքա՞ն է նրա շառավիղը։
5. Ռիգելի համար $L \\approx 100\\,000\\, L_\\odot$ և $T \\approx 11\\,600$ Կ։ Գտեք նրա շառավիղը։
6. Երկու աստղ ունեն նույն ջերմաստիճանը, մեկը $10\\,000$ անգամ ավելի լուսավոր է։ Ինչպե՞ս են հարաբերվում նրանց շառավիղները։

### Պատասխաններ

1. B, A, G, M։
2. Սիրիուսը (A դաս, մոտ $10\\,000$ Կ, Արկտուրը՝ մոտ $4300$ Կ)։
3. $2^4 = 16$ անգամ։
4. $R = \\sqrt{100}\\, R_\\odot = 10\\, R_\\odot$։
5. $\\sqrt{100\\,000} \\cdot (1/2)^2 \\approx 316 \\cdot 0{,}25 \\approx 80\\, R_\\odot$՝ կապույտ գերհսկա։
6. Լուսավոր աստղի շառավիղը $\\sqrt{10\\,000} = 100$ անգամ մեծ է։`,
        ru: `## Цвет — это температура

Посмотрите зимним вечером на Орион: Бетельгейзе явно оранжево-красная, Ригель — голубовато-белый. Звезда светит почти как нагретое тело, и чем она горячее, тем короче длина волны её самого сильного излучения (закон Вина, $\\lambda_{\\max} = \\dfrac{2{,}9 \\cdot 10^{-3}}{T}$ м). Холодные звёзды красные, Солнце — желтовато-белое, самые горячие звёзды — голубые.

## Спектральные классы

Около 1900 года в Гарвардской обсерватории Энни Джамп Кэннон с коллегами разложили по классам сотни тысяч звёздных спектров по их тёмным линиям. Классы — от горячих к холодным:

| Класс | Температура, К | Цвет | Пример |
|---|---|---|---|
| O | выше $30\\,000$ | голубой | Минтака в поясе Ориона |
| B | $10\\,000$–$30\\,000$ | голубовато-белый | Ригель, Спика |
| A | $7500$–$10\\,000$ | белый | Сириус, Вега |
| F | $6000$–$7500$ | желтовато-белый | Процион |
| G | $5200$–$6000$ | жёлтый | Солнце |
| K | $3700$–$5200$ | оранжевый | Арктур |
| M | ниже $3700$ | красный | Бетельгейзе, Антарес |

Солнце — звезда класса G2, $T \\approx 5800$ К.

Линии различаются в основном из-за температуры, а не состава. В 1925 году Сесилия Пейн показала, что почти все звёзды состоят из одного и того же: по массе примерно на три четверти из водорода и на четверть из гелия, тяжёлых элементов совсем немного.

## Размер по светимости и температуре

Каждый квадратный метр поверхности звезды излучает $\\sigma T^4$ (закон Стефана–Больцмана), поэтому вся звезда даёт $L = 4\\pi R^2 \\sigma T^4$. Сравнивая с Солнцем:

$$\\dfrac{R}{R_\\odot} = \\sqrt{\\dfrac{L}{L_\\odot}} \\cdot \\left(\\dfrac{T_\\odot}{T}\\right)^2.$$

Очень яркая, но холодная звезда должна быть огромной; горячая, но тусклая — крошечной.

## Диаграмма Герцшпрунга–Рассела

В 1911–1913 годах Эйнар Герцшпрунг и Генри Норрис Рассел нанесли звёзды на график: температура (горячие слева) и светимость (яркие вверху). Звёзды заполняют его не случайно:

- Около $90\\%$ лежат на **главной последовательности** — полосе от горячих ярких звёзд к холодным тусклым. Эти звёзды сжигают водород в ядре; Солнце — одна из них.
- Выше и правее — **гиганты** и **сверхгиганты**: холодные, но очень яркие, значит, громадные.
- Внизу слева — **белые карлики**: горячие, но тусклые, значит, размером с Землю.

Диаграмма — ключ к истории жизни звёзд: положение звезды показывает, на каком этапе жизни она находится.

## Разобранные примеры

**Пример 1.** У Бетельгейзе $L \\approx 100\\,000\\, L_\\odot$ и $T \\approx 3600$ К. Её радиус?

$\\dfrac{R}{R_\\odot} = \\sqrt{100\\,000} \\cdot \\left(\\dfrac{5800}{3600}\\right)^2 \\approx 316 \\cdot 2{,}6 \\approx 820$. На месте Солнца она простиралась бы за орбиту Марса.

**Пример 2.** У белого карлика $L = 0{,}01\\, L_\\odot$ и $T = 11\\,600$ К. Его радиус?

$\\dfrac{R}{R_\\odot} = 0{,}1 \\cdot \\left(\\dfrac{1}{2}\\right)^2 = 0{,}025$, около $17\\,000$ км — меньше трёх радиусов Земли.

**Пример 3.** Где на диаграмме Г–Р звезда класса M со светимостью $L = 0{,}001\\, L_\\odot$?

Внизу справа: холодная тусклая звезда главной последовательности — **красный карлик**, как Проксима Центавра.

## Упражнения

1. Расположите классы G, B, M, A от самого горячего к самому холодному.
2. Какая звезда горячее — оранжевый Арктур или белый Сириус?
3. У звезды радиус Солнца и вдвое большая температура. Во сколько раз она ярче?
4. У звезды температура Солнца и $L = 100\\, L_\\odot$. Её радиус?
5. У Ригеля $L \\approx 100\\,000\\, L_\\odot$ и $T \\approx 11\\,600$ К. Найдите его радиус.
6. У двух звёзд одинаковая температура, одна в $10\\,000$ раз ярче. Как соотносятся их радиусы?

### Ответы

1. B, A, G, M.
2. Сириус (класс A, около $10\\,000$ К; Арктур — около $4300$ К).
3. В $2^4 = 16$ раз.
4. $R = \\sqrt{100}\\, R_\\odot = 10\\, R_\\odot$.
5. $\\sqrt{100\\,000} \\cdot (1/2)^2 \\approx 316 \\cdot 0{,}25 \\approx 80\\, R_\\odot$ — голубой сверхгигант.
6. Радиус яркой звезды в $\\sqrt{10\\,000} = 100$ раз больше.`,
      },
      [
        q(t("Which spectral class is the hottest?", "Ո՞ր սպեկտրալ դասն է ամենատաքը։", "Какой спектральный класс самый горячий?"), [t("O", "O", "O"), t("G", "G", "G"), t("M", "M", "M")], 0),
        q(t("The Sun belongs to the spectral class…", "Արեգակը պատկանում է … սպեկտրալ դասին։", "Солнце относится к спектральному классу…"), [t("G", "G", "G"), t("B", "B", "B"), t("M", "M", "M")], 0),
        q(t("A red star compared with a blue one is…", "Կարմիր աստղը կապույտի համեմատ…", "Красная звезда по сравнению с голубой…"), [t("cooler", "ավելի սառն է", "холоднее"), t("hotter", "ավելի տաք է", "горячее"), t("always smaller", "միշտ ավելի փոքր է", "всегда меньше")], 0),
        q(t("Cecilia Payne showed in 1925 that stars are made mostly of…", "Սեսիլիա Փեյնը 1925 թվականին ցույց տվեց, որ աստղերը հիմնականում կազմված են…", "Сесилия Пейн в 1925 году показала, что звёзды состоят в основном из…"), [t("hydrogen and helium", "ջրածնից և հելիումից", "водорода и гелия"), t("iron and nickel", "երկաթից և նիկելից", "железа и никеля"), t("carbon and oxygen", "ածխածնից և թթվածնից", "углерода и кислорода")], 0),
        q(t("About 90% of stars on the H–R diagram lie…", "Հ-Ռ դիագրամի աստղերի մոտ 90%-ը գտնվում է…", "Около 90% звёзд на диаграмме Г–Р лежат…"), [t("on the main sequence", "գլխավոր հաջորդականության վրա", "на главной последовательности"), t("among the giants", "հսկաների շարքում", "среди гигантов"), t("among the white dwarfs", "սպիտակ թզուկների շարքում", "среди белых карликов")], 0),
        q(t("A star that is hot but very faint must be…", "Տաք, բայց շատ աղոտ աստղը պետք է լինի…", "Горячая, но очень тусклая звезда должна быть…"), [t("very small, like a white dwarf", "շատ փոքր, ինչպես սպիտակ թզուկը", "очень маленькой, как белый карлик"), t("a supergiant", "գերհսկա", "сверхгигантом"), t("very far away only", "միայն շատ հեռու", "только очень далёкой")], 0),
      ],
    ),
    lesson(
      "binary-stars",
      ["Double stars and the masses of stars", "Կրկնակի աստղեր և աստղերի զանգվածները", "Двойные звёзды и массы звёзд"],
      {
        en: ["Tell visual, spectroscopic and eclipsing binaries apart", "Find the total mass of a binary star from its period and orbit with Kepler's third law", "Use the mass–luminosity relation to estimate how long a star lives"],
        hy: ["Տարբերել տեսողական, սպեկտրալ և խավարող կրկնակի աստղերը", "Կեպլերի երրորդ օրենքով գտնել կրկնակի աստղի ընդհանուր զանգվածը նրա պարբերությունից և ուղեծրից", "Զանգված-լուսատվություն կապով գնահատել, թե որքան է ապրում աստղը"],
        ru: ["Различать визуально-двойные, спектрально-двойные и затменные звёзды", "Находить суммарную массу двойной звезды по периоду и орбите с помощью третьего закона Кеплера", "Оценивать по зависимости «масса–светимость», сколько живёт звезда"],
      },
      {
        en: `## Stars in pairs

About half of the stars like the Sun have a companion. Two stars bound by gravity circle their common centre of mass. Depending on how we notice the pair, binaries are of three kinds.

- **Visual binaries.** Both stars are seen separately in a telescope, and over years one moves round the other. The first, Mizar in the Big Dipper's handle, was split in 1650.
- **Spectroscopic binaries.** The stars are too close to be seen apart, but their spectral lines shift back and forth (the Doppler effect) or even split in two, with a fixed period.
- **Eclipsing binaries.** The orbit is seen almost edge-on, and the stars pass in front of each other. The brightness drops regularly. Algol in Perseus fades every $2{.}87$ days from magnitude $2{.}1$ to $3{.}4$ for several hours; in 1782 the young deaf astronomer John Goodricke explained why.

## Weighing stars

Binary stars are the only direct way to weigh a star. Newton's form of Kepler's third law, in convenient units, is

$$M_1 + M_2 = \\dfrac{a^3}{T^2},$$

with the masses in solar masses, the size of the orbit $a$ in AU and the period $T$ in years. For a visual binary, the angular size of the orbit $a''$ and the parallax $\\pi''$ give $a = \\dfrac{a''}{\\pi''}$ AU.

Star masses turn out to lie between about $0{.}08$ and $150$ solar masses. Lighter bodies cannot start hydrogen fusion; they are **brown dwarfs**.

## Mass rules the star

For main-sequence stars, luminosity grows very steeply with mass:

$$\\dfrac{L}{L_\\odot} \\approx \\left(\\dfrac{M}{M_\\odot}\\right)^{3{.}5}.$$

A star's supply of fuel is proportional to its mass, but it spends it in proportion to $L$. The Sun will stay on the main sequence for about $10^{10}$ years, so for other stars

$$t \\approx 10^{10} \\cdot \\left(\\dfrac{M}{M_\\odot}\\right)^{-2{.}5} \\text{ years}.$$

Massive stars live fast and die young; red dwarfs will shine for trillions of years.

## Worked examples

**Example 1.** Sirius A and B circle each other in $T = 50{.}1$ years; the orbit is seen as $a'' = 7{.}5''$, and the parallax is $0{.}379''$. The total mass?

$a = \\dfrac{7{.}5}{0{.}379} \\approx 19{.}8$ AU, $M_1 + M_2 = \\dfrac{19{.}8^3}{50{.}1^2} \\approx \\dfrac{7760}{2510} \\approx 3{.}1\\, M_\\odot$.

**Example 2.** Alpha Centauri A and B: $T = 79{.}9$ years, $a = 23{.}4$ AU. The total mass?

$\\dfrac{23{.}4^3}{79{.}9^2} \\approx \\dfrac{12\\,800}{6380} \\approx 2{.}0\\, M_\\odot$: two stars much like the Sun.

**Example 3.** How long does a star of $10\\, M_\\odot$ live, and how bright is it?

$L \\approx 10^{3{.}5} \\approx 3200\\, L_\\odot$; $t \\approx 10^{10} \\cdot 10^{-2{.}5} \\approx 3 \\cdot 10^7$ years: only about $30$ million years.

## Exercises

1. Two stars circle each other with $a = 4$ AU and $T = 4$ years. Find their total mass.
2. A pair has a total mass of $1\\, M_\\odot$ and $a = 1$ AU. What is the period?
3. Estimate the luminosity and lifetime of a star of $3\\, M_\\odot$.
4. Why does the brightness of Algol drop every $2{.}87$ days?
5. How can a binary be found if the two stars cannot be seen separately even in the largest telescopes?
6. A visual binary has $a'' = 2''$, $\\pi'' = 0{.}1''$ and $T = 50$ years. Find the total mass.

### Answers

1. $\\dfrac{4^3}{4^2} = 4\\, M_\\odot$.
2. $T = 1$ year, like the Earth and the Sun.
3. $L \\approx 3^{3{.}5} \\approx 47\\, L_\\odot$; $t \\approx 10^{10} / 3^{2{.}5} \\approx 6 \\cdot 10^8$ years.
4. The fainter star passes in front of the brighter one and blocks part of its light.
5. By the periodic Doppler shifts or doubling of the lines in the spectrum, or by regular eclipses.
6. $a = 20$ AU, $M_1 + M_2 = \\dfrac{8000}{2500} = 3{.}2\\, M_\\odot$.`,
        hy: `## Զույգերով աստղեր

Արեգակի նման աստղերի մոտ կեսն ունի ուղեկից։ Ձգողությամբ կապված երկու աստղերը պտտվում են իրենց զանգվածների ընդհանուր կենտրոնի շուրջ։ Կախված նրանից, թե ինչպես ենք նկատում զույգը, կրկնակի աստղերը լինում են երեք տեսակի։

- **Տեսողական կրկնակի աստղեր։** Երկու աստղերն էլ աստղադիտակում երևում են առանձին, և տարիների ընթացքում մեկը պտտվում է մյուսի շուրջ։ Առաջինը՝ Միցարը Մեծ Արջի «կոթում», բաժանվեց 1650 թվականին։
- **Սպեկտրալ կրկնակի աստղեր։** Աստղերը չափազանց մոտ են, որ առանձին երևան, բայց նրանց սպեկտրալ գծերը որոշակի պարբերությամբ տեղաշարժվում են այս ու այն կողմ (Դոպլերի էֆեկտ) կամ նույնիսկ երկատվում։
- **Խավարող կրկնակի աստղեր։** Ուղեծիրը երևում է համարյա կողից, և աստղերն անցնում են միմյանց առջևով։ Պայծառությունը պարբերաբար նվազում է։ Պերսևսի Ալգոլը յուրաքանչյուր $2{,}87$ օրը մեկ մի քանի ժամով $2{,}1$ մեծությունից թուլանում է մինչև $3{,}4$։ 1782 թվականին երիտասարդ խուլ աստղագետ Ջոն Գուդրայքը բացատրեց պատճառը։

## Աստղերի կշռումը

Կրկնակի աստղերը աստղը կշռելու միակ ուղիղ միջոցն են։ Կեպլերի երրորդ օրենքի Նյուտոնյան տեսքը հարմար միավորներով այսպիսին է․

$$M_1 + M_2 = \\dfrac{a^3}{T^2},$$

որտեղ զանգվածներն արեգակնային զանգվածներով են, ուղեծրի չափը՝ $a$-ն, աստղագիտական միավորներով, պարբերությունը՝ $T$-ն, տարիներով։ Տեսողական կրկնակի աստղի համար ուղեծրի անկյունային չափը՝ $a''$-ը, և պարալաքսը՝ $\\pi''$-ը, տալիս են $a = \\dfrac{a''}{\\pi''}$ ա․մ․։

Պարզվում է, որ աստղերի զանգվածները մոտ $0{,}08$-ից $150$ արեգակնային զանգված են։ Ավելի թեթև մարմինները չեն կարող սկսել ջրածնի միաձուլումը․ դրանք **շագանակագույն թզուկներ** են։

## Զանգվածն է կառավարում աստղը

Գլխավոր հաջորդականության աստղերի լուսատվությունը շատ արագ է աճում զանգվածի հետ․

$$\\dfrac{L}{L_\\odot} \\approx \\left(\\dfrac{M}{M_\\odot}\\right)^{3{,}5}$$

Աստղի վառելիքի պաշարը համեմատական է նրա զանգվածին, իսկ ծախսը՝ $L$-ին։ Արեգակը գլխավոր հաջորդականության վրա կմնա մոտ $10^{10}$ տարի, ուստի մյուս աստղերի համար

$$t \\approx 10^{10} \\cdot \\left(\\dfrac{M}{M_\\odot}\\right)^{-2{,}5} \\text{ տարի}$$

Զանգվածեղ աստղերն արագ են ապրում և երիտասարդ մահանում, կարմիր թզուկները կփայլեն տրիլիոնավոր տարիներ։

## Լուծված օրինակներ

**Օրինակ 1։** Սիրիուս A-ն և B-ն միմյանց շուրջ պտտվում են $T = 50{,}1$ տարում, ուղեծիրը երևում է $a'' = 7{,}5''$, պարալաքսը $0{,}379''$ է։ Որքա՞ն է ընդհանուր զանգվածը։

$a = \\dfrac{7{,}5}{0{,}379} \\approx 19{,}8$ ա․մ․, $M_1 + M_2 = \\dfrac{19{,}8^3}{50{,}1^2} \\approx \\dfrac{7760}{2510} \\approx 3{,}1\\, M_\\odot$։

**Օրինակ 2։** Ալֆա Կենտավրոս A և B՝ $T = 79{,}9$ տարի, $a = 23{,}4$ ա․մ․։ Որքա՞ն է ընդհանուր զանգվածը։

$\\dfrac{23{,}4^3}{79{,}9^2} \\approx \\dfrac{12\\,800}{6380} \\approx 2{,}0\\, M_\\odot$՝ երկու աստղ, որոնք շատ նման են Արեգակին։

**Օրինակ 3։** Որքա՞ն է ապրում $10\\, M_\\odot$ զանգվածով աստղը, և որքա՞ն է այն պայծառ։

$L \\approx 10^{3{,}5} \\approx 3200\\, L_\\odot$, $t \\approx 10^{10} \\cdot 10^{-2{,}5} \\approx 3 \\cdot 10^7$ տարի՝ ընդամենը մոտ $30$ միլիոն տարի։

## Վարժություններ

1. Երկու աստղ միմյանց շուրջ պտտվում են $a = 4$ ա․մ․ և $T = 4$ տարի պարամետրերով։ Գտեք դրանց ընդհանուր զանգվածը։
2. Զույգի ընդհանուր զանգվածը $1\\, M_\\odot$ է, $a = 1$ ա․մ․։ Որքա՞ն է պարբերությունը։
3. Գնահատեք $3\\, M_\\odot$ զանգվածով աստղի լուսատվությունը և կյանքի տևողությունը։
4. Ինչո՞ւ է Ալգոլի պայծառությունը նվազում յուրաքանչյուր $2{,}87$ օրը մեկ։
5. Ինչպե՞ս կարելի է հայտնաբերել կրկնակի աստղը, եթե երկու աստղերը չեն երևում առանձին նույնիսկ ամենամեծ աստղադիտակներում։
6. Տեսողական կրկնակի աստղի համար $a'' = 2''$, $\\pi'' = 0{,}1''$ և $T = 50$ տարի։ Գտեք ընդհանուր զանգվածը։

### Պատասխաններ

1. $\\dfrac{4^3}{4^2} = 4\\, M_\\odot$։
2. $T = 1$ տարի, ինչպես Երկրի և Արեգակի դեպքում։
3. $L \\approx 3^{3{,}5} \\approx 47\\, L_\\odot$, $t \\approx 10^{10} / 3^{2{,}5} \\approx 6 \\cdot 10^8$ տարի։
4. Ավելի աղոտ աստղն անցնում է պայծառի առջևով և ծածկում նրա լույսի մի մասը։
5. Սպեկտրի գծերի պարբերական դոպլերյան տեղաշարժերով կամ երկատումով կամ կանոնավոր խավարումներով։
6. $a = 20$ ա․մ․, $M_1 + M_2 = \\dfrac{8000}{2500} = 3{,}2\\, M_\\odot$։`,
        ru: `## Звёзды парами

Примерно у половины звёзд, похожих на Солнце, есть спутник. Две звезды, связанные тяготением, обращаются вокруг общего центра масс. В зависимости от того, как мы замечаем пару, двойные звёзды бывают трёх видов.

- **Визуально-двойные.** Обе звезды видны в телескоп по отдельности, и за годы одна обходит вокруг другой. Первую, Мицар в ручке ковша Большой Медведицы, разделили в 1650 году.
- **Спектрально-двойные.** Звёзды слишком близки, чтобы увидеть их раздельно, но их спектральные линии с постоянным периодом смещаются туда-сюда (эффект Доплера) или даже раздваиваются.
- **Затменные.** Орбита видна почти с ребра, и звёзды проходят одна перед другой. Блеск регулярно падает. Алголь в Персее каждые $2{,}87$ суток на несколько часов ослабевает с $2{,}1$ до $3{,}4$ звёздной величины; в 1782 году юный глухой астроном Джон Гудрайк объяснил почему.

## Как взвесить звезду

Двойные звёзды — единственный прямой способ взвесить звезду. Третий закон Кеплера в форме Ньютона в удобных единицах:

$$M_1 + M_2 = \\dfrac{a^3}{T^2},$$

где массы в массах Солнца, размер орбиты $a$ в астрономических единицах, период $T$ в годах. Для визуально-двойной угловой размер орбиты $a''$ и параллакс $\\pi''$ дают $a = \\dfrac{a''}{\\pi''}$ а. е.

Массы звёзд оказываются в пределах примерно от $0{,}08$ до $150$ масс Солнца. Более лёгкие тела не могут запустить синтез водорода — это **коричневые карлики**.

## Масса управляет звездой

У звёзд главной последовательности светимость очень круто растёт с массой:

$$\\dfrac{L}{L_\\odot} \\approx \\left(\\dfrac{M}{M_\\odot}\\right)^{3{,}5}.$$

Запас топлива звезды пропорционален её массе, а тратит она его пропорционально $L$. Солнце пробудет на главной последовательности около $10^{10}$ лет, поэтому для других звёзд

$$t \\approx 10^{10} \\cdot \\left(\\dfrac{M}{M_\\odot}\\right)^{-2{,}5} \\text{ лет}.$$

Массивные звёзды живут быстро и умирают молодыми; красные карлики будут светить триллионы лет.

## Разобранные примеры

**Пример 1.** Сириус A и B обращаются друг вокруг друга за $T = 50{,}1$ года; орбита видна размером $a'' = 7{,}5''$, параллакс $0{,}379''$. Суммарная масса?

$a = \\dfrac{7{,}5}{0{,}379} \\approx 19{,}8$ а. е., $M_1 + M_2 = \\dfrac{19{,}8^3}{50{,}1^2} \\approx \\dfrac{7760}{2510} \\approx 3{,}1\\, M_\\odot$.

**Пример 2.** Альфа Центавра A и B: $T = 79{,}9$ года, $a = 23{,}4$ а. е. Суммарная масса?

$\\dfrac{23{,}4^3}{79{,}9^2} \\approx \\dfrac{12\\,800}{6380} \\approx 2{,}0\\, M_\\odot$: две звезды, очень похожие на Солнце.

**Пример 3.** Сколько живёт звезда массой $10\\, M_\\odot$ и насколько она яркая?

$L \\approx 10^{3{,}5} \\approx 3200\\, L_\\odot$; $t \\approx 10^{10} \\cdot 10^{-2{,}5} \\approx 3 \\cdot 10^7$ лет — всего около $30$ миллионов лет.

## Упражнения

1. Две звезды обращаются друг вокруг друга с $a = 4$ а. е. и $T = 4$ года. Найдите их суммарную массу.
2. Суммарная масса пары $1\\, M_\\odot$, $a = 1$ а. е. Каков период?
3. Оцените светимость и время жизни звезды массой $3\\, M_\\odot$.
4. Почему блеск Алголя падает каждые $2{,}87$ суток?
5. Как обнаружить двойную звезду, если её компоненты не видны раздельно даже в крупнейшие телескопы?
6. У визуально-двойной $a'' = 2''$, $\\pi'' = 0{,}1''$ и $T = 50$ лет. Найдите суммарную массу.

### Ответы

1. $\\dfrac{4^3}{4^2} = 4\\, M_\\odot$.
2. $T = 1$ год, как у Земли и Солнца.
3. $L \\approx 3^{3{,}5} \\approx 47\\, L_\\odot$; $t \\approx 10^{10} / 3^{2{,}5} \\approx 6 \\cdot 10^8$ лет.
4. Более тусклая звезда проходит перед яркой и закрывает часть её света.
5. По периодическим доплеровским смещениям или раздвоению линий в спектре либо по регулярным затмениям.
6. $a = 20$ а. е., $M_1 + M_2 = \\dfrac{8000}{2500} = 3{,}2\\, M_\\odot$.`,
      },
      [
        q(t("In an eclipsing binary, the brightness drops because…", "Խավարող կրկնակի աստղում պայծառությունը նվազում է, որովհետև…", "У затменной двойной блеск падает, потому что…"), [t("one star passes in front of the other", "մի աստղն անցնում է մյուսի առջևով", "одна звезда проходит перед другой"), t("the stars cool down", "աստղերը սառչում են", "звёзды остывают"), t("a planet blocks the light", "մոլորակը ծածկում է լույսը", "свет закрывает планета")], 0),
        q(t("Spectroscopic binaries are found by…", "Սպեկտրալ կրկնակի աստղերը հայտնաբերում են…", "Спектрально-двойные звёзды обнаруживают…"), [t("periodic Doppler shifts of their lines", "գծերի պարբերական դոպլերյան տեղաշարժերով", "по периодическим доплеровским смещениям линий"), t("their colour", "իրենց գույնով", "по их цвету"), t("their parallax", "իրենց պարալաքսով", "по их параллаксу")], 0),
        q(t("With a in AU and T in years, the total mass of a binary in solar masses is…", "Եթե a-ն աստղագիտական միավորներով է, իսկ T-ն՝ տարիներով, կրկնակի աստղի ընդհանուր զանգվածն արեգակնային զանգվածներով…", "Если a в а. е., а T в годах, суммарная масса двойной в массах Солнца равна…"), [t("a³/T²", "a³/T² է", "a³/T²"), t("a²/T³", "a²/T³ է", "a²/T³"), t("a/T", "a/T է", "a/T")], 0),
        q(t("A star twice as massive as the Sun on the main sequence is about … times more luminous.", "Գլխավոր հաջորդականության վրա Արեգակից երկու անգամ զանգվածեղ աստղը մոտ … անգամ ավելի լուսավոր է։", "Звезда главной последовательности вдвое массивнее Солнца ярче его примерно в … раз."), [t("11", "11", "11"), t("2", "2", "2"), t("4", "4", "4")], 0),
        q(t("Which stars live the longest?", "Ո՞ր աստղերն են ամենաերկարը ապրում։", "Какие звёзды живут дольше всех?"), [t("red dwarfs", "կարմիր թզուկները", "красные карлики"), t("blue giants", "կապույտ հսկաները", "голубые гиганты"), t("stars like the Sun", "Արեգակի նման աստղերը", "звёзды вроде Солнца")], 0),
        q(t("Bodies lighter than about 0.08 solar masses that cannot start hydrogen fusion are…", "Մոտ 0,08 արեգակնային զանգվածից թեթև մարմինները, որոնք չեն կարող սկսել ջրածնի միաձուլումը…", "Тела легче примерно 0,08 массы Солнца, не способные запустить синтез водорода, — это…"), [t("brown dwarfs", "շագանակագույն թզուկներ են", "коричневые карлики"), t("white dwarfs", "սպիտակ թզուկներ են", "белые карлики"), t("neutron stars", "նեյտրոնային աստղեր են", "нейтронные звёзды")], 0),
      ],
    ),
    lesson(
      "variable-stars",
      ["Variable stars, novae and supernovae", "Փոփոխական աստղեր, նոր և գերնոր աստղեր", "Переменные звёзды, новые и сверхновые"],
      {
        en: ["Describe pulsating, flare and exploding variable stars", "Use the period–luminosity law of Cepheids to measure distances", "Tell a nova from a supernova and name famous supernovae in history"],
        hy: ["Նկարագրել պուլսացող, բռնկվող և պայթող փոփոխական աստղերը", "Ցեֆեիդների պարբերություն-լուսատվություն օրենքով չափել հեռավորություններ", "Տարբերել նոր աստղը գերնորից և անվանել պատմության հայտնի գերնոր աստղերը"],
        ru: ["Описывать пульсирующие, вспыхивающие и взрывные переменные звёзды", "Измерять расстояния по зависимости «период–светимость» цефеид", "Отличать новую звезду от сверхновой и называть знаменитые сверхновые в истории"],
      },
      {
        en: `## Stars that change

Most stars shine steadily for millions of years, but some change their brightness. In **eclipsing binaries** the change is only geometry. **Physical variables** really change: they swell and shrink, flare or explode.

## Cepheids: the cosmic yardsticks

**Cepheids** are yellow supergiants that pulsate: they swell and shrink with a strict period of $1$ to $100$ days. They are named after Delta Cephei (period $5{.}37$ days); the Pole Star is also a Cepheid, with a period of about $4$ days.

In 1912 Henrietta Leavitt at Harvard studied Cepheids in the Small Magellanic Cloud, which are all at about the same distance from us. She found that **the longer the period, the more luminous the star**. Today the law reads approximately

$$M \\approx -2{.}8 \\lg P - 1{.}4, \\qquad P \\text{ in days}.$$

This makes Cepheids **standard candles**: measure the period, get $M$; measure $m$, get the distance from $m - M = 5 \\lg d - 5$. With Cepheids Edwin Hubble proved in 1924 that the Andromeda nebula is a separate galaxy.

## Other variables

- **Mira** (Omicron Ceti), the "wonderful" star: a red giant that pulsates in about $332$ days from magnitude $2$–$3$, visible to the eye, to about $10$.
- **Flare stars**: red dwarfs whose brightness jumps in minutes, because of giant flares like solar ones. In the 1950s–1970s observers at the Byurakan Observatory, under Viktor Ambartsumian, found hundreds of flare stars in the Pleiades and in Orion and showed that flaring is a sign of young stars.

## Novae and supernovae

A **nova** is not a new star. In a close pair, a white dwarf pulls hydrogen from its companion; when the layer is thick enough, it explodes like a hydrogen bomb on the surface. The star brightens by $10$–$15$ magnitudes and later can flare again.

A **supernova** is the explosion of a whole star. For a few weeks it can outshine an entire galaxy of billions of stars.

- **Type Ia**: a white dwarf in a pair grows beyond about $1{.}4$ solar masses and is blown apart. All such explosions are nearly equally powerful, so they are standard candles for the farthest galaxies.
- **Type II**: the core of a massive star collapses at the end of its life (next lesson).

Supernovae in our Galaxy were seen in 1006, **1054** (recorded by Chinese astronomers; its remnant is the Crab Nebula), **1572** (Tycho Brahe's star) and **1604** (Kepler's). The nearest in modern times, **SN 1987A** in the Large Magellanic Cloud, was the first whose neutrinos were caught on Earth.

## Worked examples

**Example 1.** A Cepheid in a distant galaxy has $P = 10$ days and $m = 20$. How far is the galaxy?

$M \\approx -2{.}8 \\cdot 1 - 1{.}4 = -4{.}2$; $\\lg d = \\dfrac{m - M + 5}{5} = \\dfrac{29{.}2}{5} = 5{.}84$, $d \\approx 690\\,000$ pc $\\approx 2{.}3$ million light-years: close to the distance of the Andromeda galaxy.

**Example 2.** A nova brightens by $10$ magnitudes. How many times does its brightness grow?

$5$ magnitudes are $100$ times, so $10$ magnitudes are $100^2 = 10\\,000$ times.

**Example 3.** Two Cepheids have the same period, but one looks $5$ magnitudes fainter. Compare their distances.

Same period, so same luminosity. It is $100$ times fainter, so $\\sqrt{100} = 10$ times farther.

## Exercises

1. What is the absolute magnitude of a Cepheid with a period of $1$ day?
2. A Cepheid with $P = 10$ days has $m = 15$. Find its distance in kiloparsecs.
3. Why are Cepheids called standard candles?
4. What is the main difference between a nova and a supernova?
5. Which supernova left the Crab Nebula?
6. Why are type Ia supernovae used to measure distances to the farthest galaxies, rather than Cepheids?

### Answers

1. $M \\approx -1{.}4$.
2. $\\lg d = \\dfrac{15 + 4{.}2 + 5}{5} = 4{.}84$, $d \\approx 69\\,000$ pc $= 69$ kpc.
3. Their luminosity is known from the period, so their distance follows from how bright they look.
4. In a nova only a surface layer of a white dwarf explodes and the star survives; a supernova destroys or collapses the whole star.
5. The supernova of 1054.
6. They are millions of times more luminous than Cepheids, so they can be seen in galaxies billions of light-years away.`,
        hy: `## Փոփոխվող աստղեր

Աստղերի մեծ մասը միլիոնավոր տարիներ փայլում է հավասարաչափ, բայց որոշները փոխում են իրենց պայծառությունը։ **Խավարող կրկնակի աստղերում** փոփոխությունը միայն երկրաչափություն է։ **Ֆիզիկական փոփոխականներն** իրոք փոխվում են․ ուռչում ու կծկվում են, բռնկվում կամ պայթում։

## Ցեֆեիդներ՝ տիեզերական քանոններ

**Ցեֆեիդները** պուլսացող դեղին գերհսկաներ են․ դրանք ուռչում ու կծկվում են $1$-ից $100$ օր խիստ պարբերությամբ։ Անվանվել են Դելտա Ցեփեյի պատվին (պարբերությունը՝ $5{,}37$ օր), Բևեռային աստղը նույնպես ցեֆեիդ է՝ մոտ $4$ օր պարբերությամբ։

1912 թվականին Հարվարդում Հենրիետա Լևիթը ուսումնասիրեց Փոքր Մագելանյան Ամպի ցեֆեիդները, որոնք բոլորը մեզանից մոտավորապես նույն հեռավորության վրա են։ Նա պարզեց, որ **որքան երկար է պարբերությունը, այնքան լուսավոր է աստղը**։ Այսօր օրենքը մոտավորապես այսպիսին է․

$$M \\approx -2{,}8 \\lg P - 1{,}4, \\qquad P\\text{-ն օրերով}$$

Սա ցեֆեիդներին դարձնում է **ստանդարտ մոմեր**․ չափում ենք պարբերությունը, ստանում $M$-ը, չափում ենք $m$-ը, հեռավորությունը ստանում $m - M = 5 \\lg d - 5$-ից։ Ցեֆեիդներով Էդվին Հաբլը 1924 թվականին ապացուցեց, որ Անդրոմեդայի միգամածությունն առանձին գալակտիկա է։

## Այլ փոփոխականներ

- **Միրան** (Օմիկրոն Կետի)՝ «զարմանահրաշ» աստղը․ կարմիր հսկա է, որը մոտ $332$ օրում պուլսացիայով $2$–$3$ մեծությունից, որն աչքով երևում է, թուլանում է մինչև մոտ $10$։
- **Բռնկվող աստղեր**՝ կարմիր թզուկներ, որոնց պայծառությունը րոպեների ընթացքում թռիչքով աճում է արեգակնայինի նման հսկա բռնկումների պատճառով։ 1950–1970-ական թվականներին Բյուրականի աստղադիտարանի դիտորդները՝ Վիկտոր Համբարձումյանի ղեկավարությամբ, Պլեյադներում և Օրիոնում հայտնաբերեցին հարյուրավոր բռնկվող աստղեր և ցույց տվեցին, որ բռնկումները երիտասարդ աստղերի նշան են։

## Նոր և գերնոր աստղեր

**Նոր աստղը** նոր աստղ չէ։ Մոտ զույգում սպիտակ թզուկն իր ուղեկցից ջրածին է ձգում․ երբ շերտը բավականաչափ հաստանում է, այն մակերևույթին պայթում է ջրածնային ռումբի պես։ Աստղի պայծառությունն աճում է $10$–$15$ մեծությամբ, իսկ հետո այն կարող է նորից բռնկվել։

**Գերնոր աստղն** ամբողջ աստղի պայթյունն է։ Մի քանի շաբաթ այն կարող է գերազանցել միլիարդավոր աստղերից կազմված ամբողջ գալակտիկայի պայծառությանը։

- **Ia տիպ**․ զույգի սպիտակ թզուկն աճում է մոտ $1{,}4$ արեգակնային զանգվածից ավելի և պայթում է։ Բոլոր այսպիսի պայթյունները համարյա նույնքան հզոր են, ուստի դրանք ստանդարտ մոմեր են ամենահեռավոր գալակտիկաների համար։
- **II տիպ**․ զանգվածեղ աստղի միջուկը կյանքի վերջում փլուզվում է (հաջորդ դասում)։

Մեր Գալակտիկայի գերնոր աստղեր երևացել են 1006, **1054** (գրանցել են չինացի աստղագետները, նրա մնացորդը Խեցգետնաձև միգամածությունն է), **1572** (Տիխո Բրահեի աստղը) և **1604** (Կեպլերինը) թվականներին։ Նոր ժամանակների ամենամոտը՝ **SN 1987A**-ն Մեծ Մագելանյան Ամպում, առաջինն էր, որի նեյտրինոները որսացվեցին Երկրի վրա։

## Լուծված օրինակներ

**Օրինակ 1։** Հեռավոր գալակտիկայի ցեֆեիդի համար $P = 10$ օր և $m = 20$։ Որքա՞ն հեռու է գալակտիկան։

$M \\approx -2{,}8 \\cdot 1 - 1{,}4 = -4{,}2$, $\\lg d = \\dfrac{m - M + 5}{5} = \\dfrac{29{,}2}{5} = 5{,}84$, $d \\approx 690\\,000$ պկ $\\approx 2{,}3$ միլիոն լուսային տարի՝ Անդրոմեդայի գալակտիկայի հեռավորությանը մոտ։

**Օրինակ 2։** Նոր աստղի պայծառությունն աճում է $10$ մեծությամբ։ Քանի՞ անգամ է աճում պայծառությունը։

$5$ մեծությունը $100$ անգամ է, ուստի $10$ մեծությունը՝ $100^2 = 10\\,000$ անգամ։

**Օրինակ 3։** Երկու ցեֆեիդ ունեն նույն պարբերությունը, բայց մեկը $5$ մեծությամբ ավելի աղոտ է երևում։ Համեմատեք դրանց հեռավորությունները։

Նույն պարբերությունը, ուրեմն նույն լուսատվությունը։ Այն $100$ անգամ ավելի աղոտ է, ուրեմն $\\sqrt{100} = 10$ անգամ ավելի հեռու։

## Վարժություններ

1. Որքա՞ն է $1$ օր պարբերությամբ ցեֆեիդի բացարձակ մեծությունը։
2. $P = 10$ օր պարբերությամբ ցեֆեիդի համար $m = 15$։ Գտեք նրա հեռավորությունը կիլոպարսեկներով։
3. Ինչո՞ւ են ցեֆեիդներին անվանում ստանդարտ մոմեր։
4. Ո՞րն է նոր և գերնոր աստղերի հիմնական տարբերությունը։
5. Ո՞ր գերնոր աստղից է մնացել Խեցգետնաձև միգամածությունը։
6. Ինչո՞ւ են ամենահեռավոր գալակտիկաների հեռավորությունները չափում Ia տիպի գերնորերով, ոչ թե ցեֆեիդներով։

### Պատասխաններ

1. $M \\approx -1{,}4$։
2. $\\lg d = \\dfrac{15 + 4{,}2 + 5}{5} = 4{,}84$, $d \\approx 69\\,000$ պկ $= 69$ կպկ։
3. Նրանց լուսատվությունը հայտնի է պարբերությունից, ուստի հեռավորությունը բխում է նրանից, թե որքան պայծառ են երևում։
4. Նոր աստղում պայթում է միայն սպիտակ թզուկի մակերևութային շերտը, և աստղը պահպանվում է, գերնորը ոչնչացնում կամ փլուզում է ամբողջ աստղը։
5. 1054 թվականի գերնորից։
6. Դրանք միլիոնավոր անգամ ավելի լուսավոր են, քան ցեֆեիդները, ուստի երևում են միլիարդավոր լուսային տարի հեռու գալակտիկաներում։`,
        ru: `## Звёзды, которые меняются

Большинство звёзд миллионы лет светят ровно, но некоторые меняют блеск. У **затменных двойных** изменение — лишь геометрия. **Физические переменные** меняются по-настоящему: раздуваются и сжимаются, вспыхивают или взрываются.

## Цефеиды — космические линейки

**Цефеиды** — пульсирующие жёлтые сверхгиганты: они раздуваются и сжимаются со строгим периодом от $1$ до $100$ суток. Названы по Дельте Цефея (период $5{,}37$ суток); Полярная звезда — тоже цефеида с периодом около $4$ суток.

В 1912 году Генриетта Ливитт в Гарварде изучала цефеиды Малого Магелланова Облака, которые все находятся примерно на одном расстоянии от нас. Она обнаружила: **чем длиннее период, тем больше светимость звезды**. Сегодня закон выглядит примерно так:

$$M \\approx -2{,}8 \\lg P - 1{,}4, \\qquad P \\text{ в сутках}.$$

Это делает цефеиды **стандартными свечами**: измеряем период — получаем $M$; измеряем $m$ — получаем расстояние из $m - M = 5 \\lg d - 5$. С помощью цефеид Эдвин Хаббл в 1924 году доказал, что туманность Андромеды — отдельная галактика.

## Другие переменные

- **Мира** (Омикрон Кита), «Удивительная»: красный гигант, пульсирующий с периодом около $332$ суток — от $2$–$3$ величины, видимой глазом, до примерно $10$-й.
- **Вспыхивающие звёзды**: красные карлики, блеск которых за минуты подскакивает из-за гигантских вспышек, похожих на солнечные. В 1950–1970-х годах наблюдатели Бюраканской обсерватории под руководством Виктора Амбарцумяна открыли сотни вспыхивающих звёзд в Плеядах и в Орионе и показали, что вспышки — признак молодых звёзд.

## Новые и сверхновые

**Новая звезда** — вовсе не новая. В тесной паре белый карлик перетягивает водород с соседки; когда слой становится достаточно толстым, он взрывается на поверхности, как водородная бомба. Блеск звезды растёт на $10$–$15$ величин, а позже она может вспыхнуть снова.

**Сверхновая** — взрыв целой звезды. На несколько недель она может затмить целую галактику из миллиардов звёзд.

- **Тип Ia**: белый карлик в паре набирает массу больше примерно $1{,}4$ массы Солнца и разлетается. Все такие взрывы почти одинаково мощные, поэтому они — стандартные свечи для самых далёких галактик.
- **Тип II**: в конце жизни коллапсирует ядро массивной звезды (следующий урок).

Сверхновые в нашей Галактике видели в 1006, **1054** (её записали китайские астрономы; остаток — Крабовидная туманность), **1572** (звезда Тихо Браге) и **1604** (Кеплера) годах. Ближайшая в новое время, **SN 1987A** в Большом Магеллановом Облаке, стала первой, чьи нейтрино поймали на Земле.

## Разобранные примеры

**Пример 1.** У цефеиды в далёкой галактике $P = 10$ суток и $m = 20$. Как далеко галактика?

$M \\approx -2{,}8 \\cdot 1 - 1{,}4 = -4{,}2$; $\\lg d = \\dfrac{m - M + 5}{5} = \\dfrac{29{,}2}{5} = 5{,}84$, $d \\approx 690\\,000$ пк $\\approx 2{,}3$ млн световых лет — близко к расстоянию до галактики Андромеды.

**Пример 2.** Блеск новой вырос на $10$ звёздных величин. Во сколько раз?

$5$ величин — это $100$ раз, значит, $10$ величин — $100^2 = 10\\,000$ раз.

**Пример 3.** У двух цефеид одинаковый период, но одна кажется на $5$ величин слабее. Сравните расстояния.

Период одинаков — значит, одинакова светимость. Она в $100$ раз слабее, значит, в $\\sqrt{100} = 10$ раз дальше.

## Упражнения

1. Какова абсолютная величина цефеиды с периодом $1$ сутки?
2. У цефеиды с $P = 10$ суток $m = 15$. Найдите расстояние до неё в килопарсеках.
3. Почему цефеиды называют стандартными свечами?
4. В чём главное отличие новой звезды от сверхновой?
5. Какая сверхновая оставила Крабовидную туманность?
6. Почему расстояния до самых далёких галактик измеряют по сверхновым типа Ia, а не по цефеидам?

### Ответы

1. $M \\approx -1{,}4$.
2. $\\lg d = \\dfrac{15 + 4{,}2 + 5}{5} = 4{,}84$, $d \\approx 69\\,000$ пк $= 69$ кпк.
3. Их светимость известна по периоду, поэтому расстояние следует из того, насколько яркими они кажутся.
4. У новой взрывается лишь поверхностный слой белого карлика, и звезда сохраняется; сверхновая разрушает звезду целиком или вызывает её коллапс.
5. Сверхновая 1054 года.
6. Они в миллионы раз ярче цефеид, поэтому видны в галактиках за миллиарды световых лет.`,
      },
      [
        q(t("Who discovered the period–luminosity law of Cepheids in 1912?", "Ո՞վ հայտնաբերեց ցեֆեիդների պարբերություն-լուսատվություն օրենքը 1912 թվականին։", "Кто открыл зависимость «период–светимость» цефеид в 1912 году?"), [t("Henrietta Leavitt", "Հենրիետա Լևիթը", "Генриетта Ливитт"), t("Cecilia Payne", "Սեսիլիա Փեյնը", "Сесилия Пейн"), t("Annie Jump Cannon", "Էննի Ջամփ Քենոնը", "Энни Джамп Кэннон")], 0),
        q(t("The longer the period of a Cepheid, …", "Որքան երկար է ցեֆեիդի պարբերությունը, …", "Чем длиннее период цефеиды, …"), [t("the more luminous it is", "այնքան լուսավոր է այն", "тем больше её светимость"), t("the cooler it is", "այնքան սառն է այն", "тем она холоднее"), t("the closer it is", "այնքան մոտ է այն", "тем она ближе")], 0),
        q(t("A nova is…", "Նոր աստղը…", "Новая звезда — это…"), [t("an explosion on the surface of a white dwarf in a close pair", "մոտ զույգում սպիտակ թզուկի մակերևույթի պայթյուն է", "взрыв на поверхности белого карлика в тесной паре"), t("a newly born star", "նոր ծնված աստղ է", "только что родившаяся звезда"), t("the collapse of a massive star", "զանգվածեղ աստղի փլուզում է", "коллапс массивной звезды")], 0),
        q(t("The Crab Nebula is the remnant of the supernova of…", "Խեցգետնաձև միգամածությունը … թվականի գերնորի մնացորդն է։", "Крабовидная туманность — остаток сверхновой … года."), [t("1054", "1054", "1054"), t("1572", "1572", "1572"), t("1987", "1987", "1987")], 0),
        q(t("Byurakan astronomers found that flare stars are…", "Բյուրականի աստղագետները պարզեցին, որ բռնկվող աստղերը…", "Бюраканские астрономы установили, что вспыхивающие звёзды…"), [t("young red dwarfs", "երիտասարդ կարմիր թզուկներ են", "молодые красные карлики"), t("old white dwarfs", "ծեր սպիտակ թզուկներ են", "старые белые карлики"), t("blue supergiants", "կապույտ գերհսկաներ են", "голубые сверхгиганты")], 0),
        q(t("A brightness change of 5 magnitudes means a factor of…", "5 մեծության փոփոխությունը նշանակում է…", "Изменение блеска на 5 звёздных величин означает изменение в…"), [t("100", "100 անգամ", "100 раз"), t("5", "5 անգամ", "5 раз"), t("10", "10 անգամ", "10 раз")], 0),
      ],
    ),
    lesson(
      "star-evolution",
      ["Birth and death of stars", "Աստղերի ծնունդն ու մահը", "Рождение и смерть звёзд"],
      {
        en: ["Describe how stars are born in cold gas clouds", "Trace the life of a star like the Sun and of a massive star to their ends", "Calculate the Schwarzschild radius of a black hole"],
        hy: ["Նկարագրել, թե ինչպես են աստղերը ծնվում սառը գազային ամպերում", "Հետևել Արեգակի նման և զանգվածեղ աստղի կյանքին մինչև վերջ", "Հաշվել սև խոռոչի Շվարցշիլդի շառավիղը"],
        ru: ["Описывать, как звёзды рождаются в холодных газовых облаках", "Прослеживать жизнь звезды вроде Солнца и массивной звезды до конца", "Вычислять шварцшильдовский радиус чёрной дыры"],
      },
      {
        en: `## Star nurseries

Between the stars float giant **molecular clouds** of gas and dust, as cold as $10$–$20$ K. When part of a cloud becomes dense enough, gravity wins and it begins to collapse. The falling gas heats up and forms a **protostar**, often wrapped in a dusty disc where planets may grow. When the centre reaches about $10$ million kelvin, hydrogen fusion starts and a new star joins the main sequence. The Orion Nebula is such a nursery, visible even in binoculars.

In 1947 Viktor Ambartsumian at Byurakan discovered **stellar associations**: loose groups of hot young stars that are flying apart. They cannot hold together and must be only a few million years old. This proved that stars are being born today, and born in groups.

## The life of a star like the Sun

1. **Main sequence**, about $10$ billion years: hydrogen turns into helium in the core. The Sun is halfway through.
2. **Red giant**: when hydrogen in the core runs out, the core shrinks and heats up, and the outer layers swell to $100$–$200$ times the Sun's radius. Mercury and Venus will be swallowed. Then helium burns into carbon and oxygen.
3. **Planetary nebula**: the outer layers drift away as a glowing shell, like the Ring Nebula in Lyra.
4. **White dwarf**: the bare core, about the size of the Earth. A teaspoon of it would weigh tonnes. It slowly cools. A white dwarf cannot be heavier than about $1{.}4\\, M_\\odot$ (Chandrasekhar's limit).

## The life of a massive star

A star of more than about $8\\, M_\\odot$ burns ever heavier elements: helium, carbon, oxygen, silicon, until the core is **iron**. Fusing iron does not release energy, so the fire goes out. In a fraction of a second the core collapses and the star explodes as a **type II supernova**. What remains is

- a **neutron star**: about $1{.}4$–$2\\, M_\\odot$ in a ball some $20$ km across. Spinning neutron stars with beams of radio waves are **pulsars**; the first was found by Jocelyn Bell in 1967. The Crab pulsar spins $30$ times a second.
- or, if the core is heavier than about $3\\, M_\\odot$, a **black hole**: nothing, not even light, can leave it. The size of its boundary (event horizon) is the **Schwarzschild radius**

$$r_s = \\dfrac{2GM}{c^2}.$$

## Seeing the invisible

In 2015 the LIGO detectors caught **gravitational waves** from two merging black holes; in 2017 two merging neutron stars were seen both in gravitational waves and in light (a kilonova), and gold and platinum were found forming there. In 2019 and 2022 the Event Horizon Telescope showed images of the shadows of the black holes in the galaxy M87 and in the centre of our Galaxy.

The carbon in our cells, the oxygen we breathe and the iron in our blood were made inside stars and scattered by their deaths. We are made of star stuff.

## Worked examples

**Example 1.** Find the Schwarzschild radius of the Sun ($M = 2 \\cdot 10^{30}$ kg).

$r_s = \\dfrac{2 \\cdot 6{.}67 \\cdot 10^{-11} \\cdot 2 \\cdot 10^{30}}{(3 \\cdot 10^8)^2} \\approx 3000$ m $= 3$ km. Squeezed this small, the Sun would become a black hole.

**Example 2.** And for the Earth ($6 \\cdot 10^{24}$ kg)?

$r_s$ is proportional to mass: $3 \\text{ km} \\cdot \\dfrac{6 \\cdot 10^{24}}{2 \\cdot 10^{30}} = 9 \\cdot 10^{-3}$ m, about $9$ mm: the size of a cherry stone.

**Example 3.** A white dwarf has $0{.}6\\, M_\\odot$ and the Earth's volume, $1{.}1 \\cdot 10^{21}$ m³. Its density?

$\\rho = \\dfrac{1{.}2 \\cdot 10^{30}}{1{.}1 \\cdot 10^{21}} \\approx 10^9$ kg/m³: a tonne per cubic centimetre.

## Exercises

1. Find the Schwarzschild radius of a black hole of $10\\, M_\\odot$.
2. What single property of a star decides how it will end?
3. Put in order the stages of the Sun's life: white dwarf, main sequence, planetary nebula, red giant.
4. Why does fusion in a massive star stop at iron?
5. A neutron star has $1{.}4\\, M_\\odot$ ($2{.}8 \\cdot 10^{30}$ kg) and a radius of $10$ km. Estimate its density.
6. What did Ambartsumian's discovery of stellar associations show?

### Answers

1. $r_s = 10 \\cdot 3 \\text{ km} = 30$ km.
2. Its mass.
3. Main sequence, red giant, planetary nebula, white dwarf.
4. Fusing iron into heavier elements absorbs energy instead of releasing it.
5. $V = \\dfrac{4}{3}\\pi (10^4)^3 \\approx 4{.}2 \\cdot 10^{12}$ m³, $\\rho \\approx 7 \\cdot 10^{17}$ kg/m³: hundreds of millions of tonnes per cubic centimetre.
6. That stars are still being born today, in groups that then drift apart.`,
        hy: `## Աստղերի «մանկապարտեզներ»

Աստղերի միջև լողում են գազի և փոշու հսկա **մոլեկուլային ամպեր**՝ $10$–$20$ Կ ցուրտ։ Երբ ամպի մի մասը բավականաչափ խիտ է դառնում, ձգողությունը հաղթում է, և այն սկսում է սեղմվել։ Ընկնող գազը տաքանում է և առաջացնում **նախաաստղ**, որը հաճախ փաթաթված է փոշեկուտ սկավառակով, որտեղ կարող են մոլորակներ աճել։ Երբ կենտրոնը հասնում է մոտ $10$ միլիոն կելվինի, սկսվում է ջրածնի միաձուլումը, և նոր աստղը միանում է գլխավոր հաջորդականությանը։ Օրիոնի միգամածությունն այդպիսի «մանկապարտեզ» է, որ երևում է նույնիսկ հեռադիտակով։

1947 թվականին Վիկտոր Համբարձումյանը Բյուրականում հայտնաբերեց **աստղասփյուռները**՝ միմյանցից հեռացող տաք երիտասարդ աստղերի ազատ խմբեր։ Դրանք չեն կարող միասին մնալ և պետք է ընդամենը մի քանի միլիոն տարեկան լինեն։ Սա ապացուցեց, որ աստղերը ծնվում են այսօր էլ, և ծնվում են խմբերով։

## Արեգակի նման աստղի կյանքը

1. **Գլխավոր հաջորդականություն**՝ մոտ $10$ միլիարդ տարի․ միջուկում ջրածինը վերածվում է հելիումի։ Արեգակն անցել է ճանապարհի կեսը։
2. **Կարմիր հսկա**․ երբ միջուկում ջրածինը սպառվում է, միջուկը սեղմվում և տաքանում է, իսկ արտաքին շերտերն ուռչում են մինչև Արեգակի $100$–$200$ շառավիղ։ Մերկուրին և Վեներան կկլանվեն։ Հետո հելիումն այրվում է՝ վերածվելով ածխածնի և թթվածնի։
3. **Մոլորակաձև միգամածություն**․ արտաքին շերտերը հեռանում են որպես լուսավոր թաղանթ, ինչպես Քնարի Օղակաձև միգամածությունը։
4. **Սպիտակ թզուկ**․ մերկ միջուկը՝ մոտավորապես Երկրի չափ։ Նրա մեկ թեյի գդալը տոննաներ կկշռեր։ Այն դանդաղ սառչում է։ Սպիտակ թզուկը չի կարող մոտ $1{,}4\\, M_\\odot$-ից ծանր լինել (Չանդրասեկարի սահման)։

## Զանգվածեղ աստղի կյանքը

Մոտ $8\\, M_\\odot$-ից ավելի զանգվածով աստղն այրում է ավելի ու ավելի ծանր տարրեր՝ հելիում, ածխածին, թթվածին, սիլիցիում, մինչև միջուկը դառնում է **երկաթ**։ Երկաթի միաձուլումը էներգիա չի անջատում, ուստի «կրակը» հանգչում է։ Վայրկյանի մի մասում միջուկը փլուզվում է, և աստղը պայթում է որպես **II տիպի գերնոր**։ Մնում է

- **նեյտրոնային աստղ**․ մոտ $1{,}4$–$2\\, M_\\odot$ զանգված մոտ $20$ կմ տրամագծով գնդում։ Ռադիոճառագայթների փնջերով պտտվող նեյտրոնային աստղերը **պուլսարներ** են, առաջինը հայտնաբերեց Ջոսլին Բելը 1967 թվականին։ Խեցգետնաձև միգամածության պուլսարը պտտվում է վայրկյանում $30$ անգամ։
- կամ, եթե միջուկը մոտ $3\\, M_\\odot$-ից ծանր է, **սև խոռոչ**․ ոչինչ, նույնիսկ լույսը, չի կարող դուրս գալ նրանից։ Նրա սահմանի (իրադարձությունների հորիզոնի) չափը **Շվարցշիլդի շառավիղն** է․

$$r_s = \\dfrac{2GM}{c^2}$$

## Տեսնել անտեսանելին

2015 թվականին LIGO դետեկտորները որսացին **գրավիտացիոն ալիքներ** երկու միաձուլվող սև խոռոչներից, 2017 թվականին երկու միաձուլվող նեյտրոնային աստղեր երևացին և՛ գրավիտացիոն ալիքներում, և՛ լույսում (կիլոնոր), և այնտեղ հայտնաբերվեց ոսկու ու պլատինի առաջացումը։ 2019 և 2022 թվականներին «Իրադարձությունների հորիզոն» աստղադիտակը ցույց տվեց M87 գալակտիկայի և մեր Գալակտիկայի կենտրոնի սև խոռոչների ստվերների պատկերները։

Մեր բջիջների ածխածինը, մեր շնչած թթվածինը և արյան երկաթը ստեղծվել են աստղերի ներսում և ցրվել նրանց մահով։ Մենք աստղային նյութից ենք։

## Լուծված օրինակներ

**Օրինակ 1։** Գտեք Արեգակի ($M = 2 \\cdot 10^{30}$ կգ) Շվարցշիլդի շառավիղը։

$r_s = \\dfrac{2 \\cdot 6{,}67 \\cdot 10^{-11} \\cdot 2 \\cdot 10^{30}}{(3 \\cdot 10^8)^2} \\approx 3000$ մ $= 3$ կմ։ Այդքան սեղմվելով՝ Արեգակը կդառնար սև խոռոչ։

**Օրինակ 2։** Իսկ Երկրի՞ համար ($6 \\cdot 10^{24}$ կգ)։

$r_s$-ը համեմատական է զանգվածին․ $3 \\text{ կմ} \\cdot \\dfrac{6 \\cdot 10^{24}}{2 \\cdot 10^{30}} = 9 \\cdot 10^{-3}$ մ, մոտ $9$ մմ՝ բալի կորիզի չափ։

**Օրինակ 3։** Սպիտակ թզուկն ունի $0{,}6\\, M_\\odot$ զանգված և Երկրի ծավալը՝ $1{,}1 \\cdot 10^{21}$ մ³։ Որքա՞ն է նրա խտությունը։

$\\rho = \\dfrac{1{,}2 \\cdot 10^{30}}{1{,}1 \\cdot 10^{21}} \\approx 10^9$ կգ/մ³՝ տոննա մեկ խորանարդ սանտիմետրում։

## Վարժություններ

1. Գտեք $10\\, M_\\odot$ զանգվածով սև խոռոչի Շվարցշիլդի շառավիղը։
2. Աստղի ո՞ր մեկ հատկությունն է որոշում, թե ինչպես այն կավարտվի։
3. Դասավորեք Արեգակի կյանքի փուլերը․ սպիտակ թզուկ, գլխավոր հաջորդականություն, մոլորակաձև միգամածություն, կարմիր հսկա։
4. Ինչո՞ւ է զանգվածեղ աստղում միաձուլումը կանգ առնում երկաթի վրա։
5. Նեյտրոնային աստղն ունի $1{,}4\\, M_\\odot$ ($2{,}8 \\cdot 10^{30}$ կգ) զանգված և $10$ կմ շառավիղ։ Գնահատեք նրա խտությունը։
6. Ի՞նչ ցույց տվեց Համբարձումյանի կողմից աստղասփյուռների հայտնաբերումը։

### Պատասխաններ

1. $r_s = 10 \\cdot 3 \\text{ կմ} = 30$ կմ։
2. Նրա զանգվածը։
3. Գլխավոր հաջորդականություն, կարմիր հսկա, մոլորակաձև միգամածություն, սպիտակ թզուկ։
4. Երկաթից ավելի ծանր տարրերի միաձուլումը էներգիա կլանում է, ոչ թե անջատում։
5. $V = \\dfrac{4}{3}\\pi (10^4)^3 \\approx 4{,}2 \\cdot 10^{12}$ մ³, $\\rho \\approx 7 \\cdot 10^{17}$ կգ/մ³՝ հարյուրավոր միլիոն տոննա մեկ խորանարդ սանտիմետրում։
6. Որ աստղերը ծնվում են այսօր էլ, խմբերով, որոնք հետո ցրվում են։`,
        ru: `## Звёздные «ясли»

Между звёздами плавают гигантские **молекулярные облака** из газа и пыли с температурой всего $10$–$20$ К. Когда часть облака становится достаточно плотной, тяготение побеждает, и она начинает сжиматься. Падающий газ нагревается и образует **протозвезду**, часто окутанную пылевым диском, где могут вырасти планеты. Когда в центре достигается около $10$ миллионов кельвинов, начинается синтез водорода, и новая звезда выходит на главную последовательность. Туманность Ориона — такие «ясли», видные даже в бинокль.

В 1947 году Виктор Амбарцумян в Бюракане открыл **звёздные ассоциации** — рыхлые группы горячих молодых звёзд, разлетающихся в стороны. Они не могут удержаться вместе и должны быть возрастом всего несколько миллионов лет. Это доказало, что звёзды рождаются и сегодня, и рождаются группами.

## Жизнь звезды вроде Солнца

1. **Главная последовательность**, около $10$ миллиардов лет: в ядре водород превращается в гелий. Солнце прошло половину пути.
2. **Красный гигант**: когда водород в ядре кончается, ядро сжимается и нагревается, а внешние слои раздуваются до $100$–$200$ радиусов Солнца. Меркурий и Венера будут поглощены. Затем гелий сгорает в углерод и кислород.
3. **Планетарная туманность**: внешние слои уходят светящейся оболочкой, как туманность Кольцо в Лире.
4. **Белый карлик**: обнажённое ядро размером примерно с Землю. Чайная ложка его вещества весила бы тонны. Он медленно остывает. Белый карлик не может быть тяжелее примерно $1{,}4\\, M_\\odot$ (предел Чандрасекара).

## Жизнь массивной звезды

Звезда массой больше примерно $8\\, M_\\odot$ сжигает всё более тяжёлые элементы — гелий, углерод, кислород, кремний, — пока ядро не станет **железным**. Синтез железа не выделяет энергию, и «огонь» гаснет. За доли секунды ядро коллапсирует, и звезда взрывается как **сверхновая II типа**. Остаётся

- **нейтронная звезда**: около $1{,}4$–$2\\, M_\\odot$ в шаре поперечником около $20$ км. Вращающиеся нейтронные звёзды с пучками радиоизлучения — **пульсары**; первый открыла Джоселин Белл в 1967 году. Пульсар в Крабовидной туманности делает $30$ оборотов в секунду.
- или, если ядро тяжелее примерно $3\\, M_\\odot$, **чёрная дыра**: ничто, даже свет, не может её покинуть. Размер её границы (горизонта событий) — **радиус Шварцшильда**

$$r_s = \\dfrac{2GM}{c^2}.$$

## Увидеть невидимое

В 2015 году детекторы LIGO поймали **гравитационные волны** от слияния двух чёрных дыр; в 2017 году слияние двух нейтронных звёзд увидели и в гравитационных волнах, и в свете (килоновая), и обнаружили, что там образуются золото и платина. В 2019 и 2022 годах Телескоп горизонта событий показал изображения теней чёрных дыр в галактике M87 и в центре нашей Галактики.

Углерод в наших клетках, кислород, которым мы дышим, и железо в крови образовались внутри звёзд и были рассеяны их гибелью. Мы сделаны из звёздного вещества.

## Разобранные примеры

**Пример 1.** Найдите радиус Шварцшильда Солнца ($M = 2 \\cdot 10^{30}$ кг).

$r_s = \\dfrac{2 \\cdot 6{,}67 \\cdot 10^{-11} \\cdot 2 \\cdot 10^{30}}{(3 \\cdot 10^8)^2} \\approx 3000$ м $= 3$ км. Сжавшись до такого размера, Солнце стало бы чёрной дырой.

**Пример 2.** А для Земли ($6 \\cdot 10^{24}$ кг)?

$r_s$ пропорционален массе: $3 \\text{ км} \\cdot \\dfrac{6 \\cdot 10^{24}}{2 \\cdot 10^{30}} = 9 \\cdot 10^{-3}$ м, около $9$ мм — размер вишнёвой косточки.

**Пример 3.** У белого карлика масса $0{,}6\\, M_\\odot$ и объём Земли, $1{,}1 \\cdot 10^{21}$ м³. Его плотность?

$\\rho = \\dfrac{1{,}2 \\cdot 10^{30}}{1{,}1 \\cdot 10^{21}} \\approx 10^9$ кг/м³ — тонна в кубическом сантиметре.

## Упражнения

1. Найдите радиус Шварцшильда чёрной дыры массой $10\\, M_\\odot$.
2. Какое одно свойство звезды решает, как она закончит жизнь?
3. Расположите по порядку этапы жизни Солнца: белый карлик, главная последовательность, планетарная туманность, красный гигант.
4. Почему синтез в массивной звезде останавливается на железе?
5. У нейтронной звезды масса $1{,}4\\, M_\\odot$ ($2{,}8 \\cdot 10^{30}$ кг) и радиус $10$ км. Оцените её плотность.
6. Что показало открытие Амбарцумяном звёздных ассоциаций?

### Ответы

1. $r_s = 10 \\cdot 3 \\text{ км} = 30$ км.
2. Её масса.
3. Главная последовательность, красный гигант, планетарная туманность, белый карлик.
4. Синтез элементов тяжелее железа поглощает энергию, а не выделяет её.
5. $V = \\dfrac{4}{3}\\pi (10^4)^3 \\approx 4{,}2 \\cdot 10^{12}$ м³, $\\rho \\approx 7 \\cdot 10^{17}$ кг/м³ — сотни миллионов тонн в кубическом сантиметре.
6. Что звёзды рождаются и сегодня — группами, которые затем разлетаются.`,
      },
      [
        q(t("Stars are born in…", "Աստղերը ծնվում են…", "Звёзды рождаются в…"), [t("cold molecular clouds", "սառը մոլեկուլային ամպերում", "холодных молекулярных облаках"), t("the cores of planets", "մոլորակների միջուկներում", "ядрах планет"), t("black holes", "սև խոռոչներում", "чёрных дырах")], 0),
        q(t("What did Ambartsumian discover in 1947?", "Ի՞նչ հայտնաբերեց Համբարձումյանը 1947 թվականին։", "Что открыл Амбарцумян в 1947 году?"), [t("stellar associations of young stars", "երիտասարդ աստղերի աստղասփյուռներ", "звёздные ассоциации молодых звёзд"), t("the first pulsar", "առաջին պուլսարը", "первый пульсар"), t("the expansion of the Universe", "Տիեզերքի ընդարձակումը", "расширение Вселенной")], 0),
        q(t("The Sun will end its life as…", "Արեգակն իր կյանքը կավարտի որպես…", "Солнце закончит жизнь как…"), [t("a white dwarf", "սպիտակ թզուկ", "белый карлик"), t("a black hole", "սև խոռոչ", "чёрная дыра"), t("a neutron star", "նեյտրոնային աստղ", "нейтронная звезда")], 0),
        q(t("Fusion in the core of a massive star stops at…", "Զանգվածեղ աստղի միջուկում միաձուլումը կանգ է առնում…", "Синтез в ядре массивной звезды останавливается на…"), [t("iron", "երկաթի վրա", "железе"), t("helium", "հելիումի վրա", "гелии"), t("gold", "ոսկու վրա", "золоте")], 0),
        q(t("A pulsar is…", "Պուլսարը…", "Пульсар — это…"), [t("a spinning neutron star", "պտտվող նեյտրոնային աստղ է", "вращающаяся нейтронная звезда"), t("a pulsating red giant", "պուլսացող կարմիր հսկա է", "пульсирующий красный гигант"), t("a young protostar", "երիտասարդ նախաաստղ է", "молодая протозвезда")], 0),
        q(t("The Schwarzschild radius of the Sun is about…", "Արեգակի Շվարցշիլդի շառավիղը մոտավորապես…", "Радиус Шварцшильда Солнца примерно…"), [t("3 km", "3 կմ է", "3 км"), t("3000 km", "3000 կմ է", "3000 км"), t("3 m", "3 մ է", "3 м")], 0),
      ],
    ),
  ],
};
