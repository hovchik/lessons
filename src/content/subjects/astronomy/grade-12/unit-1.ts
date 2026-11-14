import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Light and the Sun", "Լույսը և Արեգակը", "Свет и Солнце"),
  summary: t("The spectrum, the laws of thermal radiation, spectral lines and the Doppler effect; the Sun's structure, energy and activity, and space weather.", "Սպեկտր, ջերմային ճառագայթման օրենքներ, սպեկտրալ գծեր և Դոպլերի էֆեկտ, Արեգակի կառուցվածքը, էներգիան և ակտիվությունը, տիեզերական եղանակ։", "Спектр, законы теплового излучения, спектральные линии и эффект Доплера; строение, энергия и активность Солнца, космическая погода."),
  lessons: [
    lesson(
      "light-spectra",
      ["Light, the messenger of the stars", "Լույսը՝ աստղերի սուրհանդակը", "Свет — вестник звёзд"],
      {
        en: ["Describe the electromagnetic spectrum and use Wien's law and the Stefan–Boltzmann law", "Distinguish continuous, emission and absorption spectra and explain how they reveal the composition of stars", "Use the Doppler effect to find the speed of a star along the line of sight"],
        hy: ["Նկարագրել էլեկտրամագնիսական սպեկտրը, օգտագործել Վինի օրենքը և Ստեֆան-Բոլցմանի օրենքը", "Տարբերել անընդհատ, առաքման և կլանման սպեկտրները և բացատրել, թե ինչպես են դրանք բացահայտում աստղերի բաղադրությունը", "Դոպլերի էֆեկտով գտնել աստղի արագությունը տեսողական ճառագայթի ուղղությամբ"],
        ru: ["Описывать электромагнитный спектр, применять закон Вина и закон Стефана–Больцмана", "Различать сплошной, линейчатый спектры излучения и поглощения и объяснять, как они раскрывают состав звёзд", "По эффекту Доплера находить скорость звезды вдоль луча зрения"],
      },
      {
        en: `## The spectrum

Light is an electromagnetic wave. Its **wavelength** $\\lambda$ and frequency $\\nu$ are linked by $c = \\lambda \\nu$. Visible light runs from violet ($400$ nm) to red ($700$ nm); beyond it lie radio waves, infrared, ultraviolet, X-rays and gamma rays. Each kind of radiation tells a different story: radio waves come from cold gas, infrared from dust and newborn stars, X-rays from gas at millions of degrees.

## Thermal radiation

A hot, dense body glows with a **continuous spectrum**, and its colour depends only on its temperature: a heated nail turns red, then yellow, then white.

> - **Wien's law**: the wavelength of the strongest radiation is $$\\lambda_{max} = \\dfrac{b}{T}, \\qquad b = 2{.}9 \\cdot 10^{-3} \\text{ m·K}.$$ Hot stars are blue, cool stars red.
> - **Stefan–Boltzmann law**: each square metre of the surface radiates the power $$\\dfrac{P}{S} = \\sigma T^4, \\qquad \\sigma = 5{.}67 \\cdot 10^{-8} \\text{ W/(m}^2\\text{·K}^4).$$ Twice the temperature means sixteen times the power.

## Spectral lines: the fingerprints of elements

> - A thin **hot gas** gives an **emission spectrum**: bright lines at certain wavelengths.
> - A **cooler gas** in front of a hot source takes out the same wavelengths and gives an **absorption spectrum**: dark lines on a rainbow.

Each element has its own set of lines. In 1814 Fraunhofer counted hundreds of dark lines in the Sun's spectrum; in 1859 Kirchhoff and Bunsen showed that they are fingerprints of elements. **Helium** was found in the Sun's spectrum in 1868, decades before it was found on the Earth, and its name comes from Helios, the Sun. Spectra tell us the composition, temperature, pressure and magnetic fields of stars we can never visit.

## The Doppler effect

If a source moves away, its lines shift to longer wavelengths (**redshift**); if it comes closer, to shorter ones (**blueshift**):

$$\\dfrac{\\Delta \\lambda}{\\lambda} = \\dfrac{v}{c}.$$

So spectra measure how fast stars and galaxies move towards or away from us, how fast they spin, and even the tiny wobble that an unseen planet gives its star.

## Worked examples

**Example 1.** Where is the peak of the Sun's radiation ($T = 5800$ K)?

$\\lambda_{max} = \\dfrac{2{.}9 \\cdot 10^{-3}}{5800} = 5 \\cdot 10^{-7}$ m $= 500$ nm, in the middle of the visible range; our eyes are tuned to sunlight.

**Example 2.** A star radiates most strongly at $290$ nm. Its temperature?

$T = \\dfrac{2{.}9 \\cdot 10^{-3}}{2{.}9 \\cdot 10^{-7}} = 10\\,000$ K, a white-blue star.

**Example 3.** The hydrogen line $656{.}3$ nm is seen in a star at $656{.}5$ nm. How does the star move?

$v = c \\cdot \\dfrac{\\Delta\\lambda}{\\lambda} = 3 \\cdot 10^5 \\cdot \\dfrac{0{.}2}{656{.}3} \\approx 91$ km/s, away from us (redshift).

## Exercises

1. Find $\\lambda_{max}$ for the human body ($T = 310$ K). In which part of the spectrum is it?
2. Betelgeuse has $T = 3500$ K. Find $\\lambda_{max}$ and say what colour the star is.
3. How can dark lines in a star's spectrum tell us what the star is made of?
4. A line of $500{.}0$ nm is observed at $499{.}5$ nm. Find the speed and direction of the star.
5. Two stars are the same size, but one is twice as hot. How many times more power does it radiate?
6. What kind of spectrum do these give: a neon sign, a filament lamp, the Sun?

### Answers

1. $\\lambda_{max} = 2{.}9 \\cdot 10^{-3} / 310 \\approx 9{.}4 \\cdot 10^{-6}$ m, in the infrared: this is how thermal cameras see people.
2. $\\lambda_{max} \\approx 830$ nm, in the near infrared; the star looks red-orange.
3. Each element absorbs only its own wavelengths; comparing the lines with laboratory spectra identifies the elements.
4. $v = 3 \\cdot 10^5 \\cdot 0{.}5 / 500 = 300$ km/s, towards us (blueshift).
5. $2^4 = 16$ times.
6. Emission lines; continuous; absorption (continuous with dark lines).`,
        hy: `## Սպեկտրը

Լույսը էլեկտրամագնիսական ալիք է։ Նրա **ալիքի երկարությունը**՝ $\\lambda$-ն, և հաճախությունը՝ $\\nu$-ն, կապված են $c = \\lambda \\nu$ առնչությամբ։ Տեսանելի լույսը ձգվում է մանուշակագույնից ($400$ նմ) մինչև կարմիր ($700$ նմ), դրանից դուրս են ռադիոալիքները, ինֆրակարմիրը, ուլտրամանուշակագույնը, ռենտգենյան և գամմա ճառագայթները։ Ճառագայթման յուրաքանչյուր տեսակ տարբեր պատմություն է պատմում․ ռադիոալիքները գալիս են սառը գազից, ինֆրակարմիրը՝ փոշուց և նորածին աստղերից, ռենտգենյան ճառագայթները՝ միլիոնավոր աստիճան տաք գազից։

## Ջերմային ճառագայթում

Տաք, խիտ մարմինը լուսարձակում է **անընդհատ սպեկտրով**, և նրա գույնը կախված է միայն ջերմաստիճանից․ տաքացված մեխը դառնում է կարմիր, հետո դեղին, հետո սպիտակ։

> - **Վինի օրենքը**․ ամենաուժեղ ճառագայթման ալիքի երկարությունը $$\\lambda_{max} = \\dfrac{b}{T}, \\qquad b = 2{,}9 \\cdot 10^{-3} \\text{ մ·Կ}$$ Տաք աստղերը կապույտ են, սառը աստղերը՝ կարմիր։
> - **Ստեֆան-Բոլցմանի օրենքը**․ մակերևույթի յուրաքանչյուր քառակուսի մետրը ճառագայթում է $$\\dfrac{P}{S} = \\sigma T^4, \\qquad \\sigma = 5{,}67 \\cdot 10^{-8} \\text{ Վտ/(մ}^2\\text{·Կ}^4)$$ հզորություն։ Կրկնակի ջերմաստիճանը նշանակում է տասնվեց անգամ մեծ հզորություն։

## Սպեկտրալ գծեր․ տարրերի մատնահետքերը

> - Նոսր **տաք գազը** տալիս է **առաքման սպեկտր**՝ պայծառ գծեր որոշակի ալիքի երկարություններում։
> - Տաք աղբյուրի առջև գտնվող **ավելի սառը գազը** հանում է նույն ալիքի երկարությունները և տալիս **կլանման սպեկտր**՝ մութ գծեր ծիածանի վրա։

Յուրաքանչյուր տարր ունի գծերի իր հավաքածուն։ 1814 թվականին Ֆրաունհոֆերը Արեգակի սպեկտրում հաշվեց հարյուրավոր մութ գծեր, 1859-ին Կիրխհոֆը և Բունզենը ցույց տվեցին, որ դրանք տարրերի մատնահետքեր են։ **Հելիումը** գտնվեց Արեգակի սպեկտրում 1868 թվականին՝ Երկրի վրա գտնվելուց տասնամյակներ առաջ, և նրա անունը գալիս է Հելիոսից՝ Արեգակից։ Սպեկտրները պատմում են աստղերի բաղադրության, ջերմաստիճանի, ճնշման և մագնիսական դաշտերի մասին, թեև մենք երբեք չենք կարող այցելել դրանց։

## Դոպլերի էֆեկտը

Եթե աղբյուրը հեռանում է, նրա գծերը շեղվում են դեպի ավելի երկար ալիքներ (**կարմիր շեղում**), եթե մոտենում է՝ դեպի ավելի կարճ ալիքներ (**կապույտ շեղում**)․

$$\\dfrac{\\Delta \\lambda}{\\lambda} = \\dfrac{v}{c}$$

Այսպիսով, սպեկտրները չափում են, թե որքան արագ են աստղերն ու գալակտիկաները մոտենում կամ հեռանում մեզանից, որքան արագ են պտտվում և նույնիսկ այն փոքրիկ տատանումը, որը չերևացող մոլորակը հաղորդում է իր աստղին։

## Լուծված օրինակներ

**Օրինակ 1։** Որտե՞ղ է Արեգակի ($T = 5800$ Կ) ճառագայթման առավելագույնը։

$\\lambda_{max} = \\dfrac{2{,}9 \\cdot 10^{-3}}{5800} = 5 \\cdot 10^{-7}$ մ $= 500$ նմ՝ տեսանելի տիրույթի մեջտեղում․ մեր աչքերը հարմարեցված են արևի լույսին։

**Օրինակ 2։** Աստղն ամենաուժեղը ճառագայթում է $290$ նմ-ում։ Որքա՞ն է նրա ջերմաստիճանը։

$T = \\dfrac{2{,}9 \\cdot 10^{-3}}{2{,}9 \\cdot 10^{-7}} = 10\\,000$ Կ, սպիտակակապույտ աստղ։

**Օրինակ 3։** Ջրածնի $656{,}3$ նմ գիծը աստղի սպեկտրում երևում է $656{,}5$ նմ-ում։ Ինչպե՞ս է շարժվում աստղը։

$v = c \\cdot \\dfrac{\\Delta\\lambda}{\\lambda} = 3 \\cdot 10^5 \\cdot \\dfrac{0{,}2}{656{,}3} \\approx 91$ կմ/վ՝ մեզանից հեռանում է (կարմիր շեղում)։

## Վարժություններ

1. Գտեք $\\lambda_{max}$-ը մարդու մարմնի համար ($T = 310$ Կ)։ Սպեկտրի ո՞ր մասում է այն։
2. Բեթելգեյզեի համար $T = 3500$ Կ։ Գտեք $\\lambda_{max}$-ը և ասեք, թե ինչ գույնի է աստղը։
3. Ինչպե՞ս կարող են աստղի սպեկտրի մութ գծերը պատմել, թե ինչից է կազմված աստղը։
4. $500{,}0$ նմ գիծը դիտվում է $499{,}5$ նմ-ում։ Գտեք աստղի արագությունը և ուղղությունը։
5. Երկու աստղ նույն չափն ունեն, բայց մեկը երկու անգամ ավելի տաք է։ Քանի՞ անգամ ավելի մեծ հզորություն է այն ճառագայթում։
6. Ի՞նչ սպեկտր են տալիս նեոնային գովազդը, շիկացման լամպը, Արեգակը։

### Պատասխաններ

1. $\\lambda_{max} = 2{,}9 \\cdot 10^{-3} / 310 \\approx 9{,}4 \\cdot 10^{-6}$ մ՝ ինֆրակարմիր տիրույթում․ այդպես են ջերմային տեսախցիկները տեսնում մարդկանց։
2. $\\lambda_{max} \\approx 830$ նմ՝ մոտ ինֆրակարմիր տիրույթում, աստղը կարմրանարնջագույն է երևում։
3. Յուրաքանչյուր տարր կլանում է միայն իր ալիքի երկարությունները, գծերը լաբորատոր սպեկտրների հետ համեմատելով՝ որոշում են տարրերը։
4. $v = 3 \\cdot 10^5 \\cdot 0{,}5 / 500 = 300$ կմ/վ՝ դեպի մեզ (կապույտ շեղում)։
5. $2^4 = 16$ անգամ։
6. Առաքման գծային, անընդհատ, կլանման (անընդհատ՝ մութ գծերով)։`,
        ru: `## Спектр

Свет — электромагнитная волна. Её **длина волны** $\\lambda$ и частота $\\nu$ связаны соотношением $c = \\lambda \\nu$. Видимый свет простирается от фиолетового ($400$ нм) до красного ($700$ нм); за его пределами лежат радиоволны, инфракрасное, ультрафиолетовое, рентгеновское и гамма-излучение. Каждый вид излучения рассказывает своё: радиоволны идут от холодного газа, инфракрасное — от пыли и новорождённых звёзд, рентген — от газа с температурой в миллионы градусов.

## Тепловое излучение

Горячее плотное тело светится **сплошным спектром**, а его цвет зависит только от температуры: нагретый гвоздь становится красным, затем жёлтым, затем белым.

> - **Закон Вина**: длина волны самого сильного излучения $$\\lambda_{max} = \\dfrac{b}{T}, \\qquad b = 2{,}9 \\cdot 10^{-3} \\text{ м·К}.$$ Горячие звёзды голубые, холодные — красные.
> - **Закон Стефана–Больцмана**: каждый квадратный метр поверхности излучает мощность $$\\dfrac{P}{S} = \\sigma T^4, \\qquad \\sigma = 5{,}67 \\cdot 10^{-8} \\text{ Вт/(м}^2\\text{·К}^4).$$ Вдвое большая температура — в шестнадцать раз большая мощность.

## Спектральные линии — отпечатки пальцев элементов

> - Разреженный **горячий газ** даёт **спектр излучения**: яркие линии на определённых длинах волн.
> - **Более холодный газ** перед горячим источником вычитает те же длины волн и даёт **спектр поглощения**: тёмные линии на радуге.

У каждого элемента свой набор линий. В 1814 году Фраунгофер насчитал сотни тёмных линий в спектре Солнца; в 1859 году Кирхгоф и Бунзен показали, что это отпечатки элементов. **Гелий** нашли в спектре Солнца в 1868 году, за десятилетия до его открытия на Земле, и его имя происходит от Гелиоса — Солнца. Спектры сообщают состав, температуру, давление и магнитные поля звёзд, на которых мы никогда не побываем.

## Эффект Доплера

Если источник удаляется, его линии смещаются к длинным волнам (**красное смещение**), если приближается — к коротким (**синее смещение**):

$$\\dfrac{\\Delta \\lambda}{\\lambda} = \\dfrac{v}{c}.$$

Так спектры измеряют, насколько быстро звёзды и галактики приближаются к нам или удаляются, как быстро вращаются и даже крошечное покачивание, которое невидимая планета сообщает своей звезде.

## Разобранные примеры

**Пример 1.** Где находится максимум излучения Солнца ($T = 5800$ К)?

$\\lambda_{max} = \\dfrac{2{,}9 \\cdot 10^{-3}}{5800} = 5 \\cdot 10^{-7}$ м $= 500$ нм — в середине видимого диапазона; наши глаза настроены на солнечный свет.

**Пример 2.** Звезда сильнее всего излучает на $290$ нм. Её температура?

$T = \\dfrac{2{,}9 \\cdot 10^{-3}}{2{,}9 \\cdot 10^{-7}} = 10\\,000$ К, бело-голубая звезда.

**Пример 3.** Линия водорода $656{,}3$ нм видна в спектре звезды на $656{,}5$ нм. Как движется звезда?

$v = c \\cdot \\dfrac{\\Delta\\lambda}{\\lambda} = 3 \\cdot 10^5 \\cdot \\dfrac{0{,}2}{656{,}3} \\approx 91$ км/с, удаляется от нас (красное смещение).

## Упражнения

1. Найдите $\\lambda_{max}$ для тела человека ($T = 310$ К). В какой части спектра она лежит?
2. У Бетельгейзе $T = 3500$ К. Найдите $\\lambda_{max}$ и скажите, какого цвета звезда.
3. Как тёмные линии в спектре звезды рассказывают, из чего она состоит?
4. Линия $500{,}0$ нм наблюдается на $499{,}5$ нм. Найдите скорость и направление движения звезды.
5. Две звезды одного размера, но одна вдвое горячее. Во сколько раз большую мощность она излучает?
6. Какой спектр дают неоновая реклама, лампа накаливания, Солнце?

### Ответы

1. $\\lambda_{max} = 2{,}9 \\cdot 10^{-3} / 310 \\approx 9{,}4 \\cdot 10^{-6}$ м — в инфракрасной области: так тепловизоры видят людей.
2. $\\lambda_{max} \\approx 830$ нм, в ближнем инфракрасном; звезда выглядит красно-оранжевой.
3. Каждый элемент поглощает только свои длины волн; сравнивая линии с лабораторными спектрами, определяют элементы.
4. $v = 3 \\cdot 10^5 \\cdot 0{,}5 / 500 = 300$ км/с, к нам (синее смещение).
5. В $2^4 = 16$ раз.
6. Линейчатый спектр излучения; сплошной; спектр поглощения (сплошной с тёмными линиями).`,
      },
      [
        q(t("According to Wien's law, a hotter star…", "Վինի օրենքի համաձայն՝ ավելի տաք աստղը…", "По закону Вина более горячая звезда…"), [t("radiates most strongly at shorter wavelengths", "ամենաուժեղը ճառագայթում է ավելի կարճ ալիքներում", "сильнее всего излучает на более коротких волнах"), t("radiates most strongly at longer wavelengths", "ամենաուժեղը ճառագայթում է ավելի երկար ալիքներում", "сильнее всего излучает на более длинных волнах"), t("is always red", "միշտ կարմիր է", "всегда красная")], 0),
        q(t("If the temperature of a star's surface doubles, each square metre radiates…", "Եթե աստղի մակերևույթի ջերմաստիճանը կրկնապատկվի, յուրաքանչյուր քառակուսի մետրը կճառագայթի…", "Если температура поверхности звезды удвоится, каждый квадратный метр будет излучать…"), [t("16 times more", "16 անգամ ավելի շատ", "в 16 раз больше"), t("2 times more", "2 անգամ ավելի շատ", "в 2 раза больше"), t("4 times more", "4 անգամ ավելի շատ", "в 4 раза больше")], 0),
        q(t("Dark lines on a continuous spectrum form an…", "Անընդհատ սպեկտրի վրա մութ գծերը կազմում են…", "Тёмные линии на сплошном спектре образуют…"), [t("absorption spectrum", "կլանման սպեկտր", "спектр поглощения"), t("emission spectrum", "առաքման սպեկտր", "спектр излучения"), t("radio spectrum", "ռադիոսպեկտր", "радиоспектр")], 0),
        q(t("Which element was discovered in the Sun before it was found on the Earth?", "Ո՞ր տարրը հայտնաբերվեց Արեգակում, նախքան Երկրի վրա գտնվելը։", "Какой элемент открыли на Солнце раньше, чем на Земле?"), [t("Helium", "Հելիումը", "Гелий"), t("Hydrogen", "Ջրածինը", "Водород"), t("Iron", "Երկաթը", "Железо")], 0),
        q(t("The lines in a star's spectrum are shifted towards red. The star is…", "Աստղի սպեկտրի գծերը շեղված են դեպի կարմիր։ Աստղը…", "Линии в спектре звезды смещены к красному концу. Звезда…"), [t("moving away from us", "հեռանում է մեզանից", "удаляется от нас"), t("moving towards us", "մոտենում է մեզ", "приближается к нам"), t("very cold", "շատ սառն է", "очень холодная")], 0),
        q(t("The peak of the Sun's radiation lies…", "Արեգակի ճառագայթման առավելագույնը գտնվում է…", "Максимум излучения Солнца лежит…"), [t("in visible light, near 500 nm", "տեսանելի լույսում՝ 500 նմ-ի մոտ", "в видимом свете, около 500 нм"), t("in radio waves", "ռադիոալիքներում", "в радиоволнах"), t("in X-rays", "ռենտգենյան ճառագայթներում", "в рентгеновских лучах")], 0),
      ],
    ),
    lesson(
      "the-sun",
      ["The Sun: our star", "Արեգակը՝ մեր աստղը", "Солнце — наша звезда"],
      {
        en: ["Give the main data of the Sun and find its luminosity from the solar constant", "Explain the source of the Sun's energy, the proton–proton chain, and estimate how much mass the Sun loses", "Describe the layers of the Sun from the core to the corona"],
        hy: ["Տալ Արեգակի հիմնական տվյալները և գտնել նրա լուսատվությունը արեգակնային հաստատունից", "Բացատրել Արեգակի էներգիայի աղբյուրը՝ պրոտոն-պրոտոնային շղթան, և գնահատել, թե որքան զանգված է կորցնում Արեգակը", "Նկարագրել Արեգակի շերտերը՝ միջուկից մինչև պսակ"],
        ru: ["Приводить основные данные о Солнце и находить его светимость по солнечной постоянной", "Объяснять источник энергии Солнца, протон-протонный цикл, и оценивать, сколько массы теряет Солнце", "Описывать слои Солнца от ядра до короны"],
      },
      {
        en: `## The Sun in numbers

| Quantity | Value |
|---|---|
| Radius | $696\\,000$ km, $109$ Earth radii |
| Mass | $2 \\cdot 10^{30}$ kg, $333\\,000$ Earth masses |
| Mean density | $1{.}4$ g/cm³ |
| Surface temperature | about $5800$ K |
| Temperature in the core | about $15$ million K |
| Rotation | $25$ days at the equator, about $35$ near the poles |
| Composition by mass | about $73\\%$ hydrogen, $25\\%$ helium, $2\\%$ other elements |
| Age | $4{.}6$ billion years |

The Sun is an ordinary yellow star, class G2. It looks special only because it is $250\\,000$ times closer than the next star.

Above the atmosphere each square metre facing the Sun receives $S = 1361$ W: the **solar constant**. The same power passes through every square metre of a huge sphere of radius $1$ AU, so the Sun's **luminosity** (total power) is $L = 4\\pi r^2 S$.

## Where the energy comes from

Burning coal could keep the Sun shining for only a few thousand years, and contraction for tens of millions. The answer came with nuclear physics: in the core, at $15$ million K, hydrogen nuclei fuse into helium in the **proton–proton chain**:

$$4\\,{}^1\\text{H} \\to {}^4\\text{He} + 2e^+ + 2\\nu + \\text{energy}.$$

The helium nucleus is $0{.}7\\%$ lighter than four protons; this mass becomes energy by $E = mc^2$. The **neutrinos** fly straight out of the Sun, and detectors deep underground catch a few of them: proof that fusion is going on in the core right now. The Sun has fuel for about $10$ billion years in total, so it is middle-aged.

## The layers of the Sun

> - **Core**: fusion; temperature $15$ million K.
> - **Radiative zone**: energy creeps out as light, absorbed and re-emitted countless times; it takes over $100\\,000$ years to cross.
> - **Convective zone**: hot gas rises and sinks like boiling water.
> - **Photosphere**: the visible "surface", a layer a few hundred kilometres thick from which light escapes into space. It is covered with **granules**, the tops of convection cells about $1000$ km across.
> - **Chromosphere**: a thin pink layer above it.
> - **Corona**: the outer atmosphere, $1$–$2$ million K, seen as a pearly crown during a total solar eclipse. Magnetic fields heat it.

## Worked examples

**Example 1.** The luminosity of the Sun.

$L = 4\\pi r^2 S = 4\\pi (1{.}5 \\cdot 10^{11})^2 \\cdot 1361 \\approx 3{.}8 \\cdot 10^{26}$ W.

**Example 2.** How much mass does the Sun turn into energy each second?

$\\dfrac{\\Delta m}{\\Delta t} = \\dfrac{L}{c^2} = \\dfrac{3{.}8 \\cdot 10^{26}}{9 \\cdot 10^{16}} \\approx 4{.}3 \\cdot 10^9$ kg/s, about four million tonnes a second.

**Example 3.** The surface temperature from the luminosity and the radius.

$T = \\sqrt[4]{\\dfrac{L}{4\\pi R^2 \\sigma}} = \\sqrt[4]{\\dfrac{3{.}85 \\cdot 10^{26}}{4\\pi (6{.}96 \\cdot 10^8)^2 \\cdot 5{.}67 \\cdot 10^{-8}}} \\approx 5800$ K.

## Exercises

1. How many Earths would fit across the Sun's diameter? About how many would fit inside it by volume?
2. Find the solar constant at Mars ($1{.}52$ AU).
3. Why do we call the photosphere a "surface" although the Sun is all gas?
4. How much mass has the Sun turned into energy in $4{.}6$ billion years? What fraction of its mass is that?
5. In full sunlight the ground receives about $1000$ W/m². What power does a $2$ m² solar panel with $20\\%$ efficiency give?
6. When can the corona be seen without special instruments?

### Answers

1. $109$; about $109^3 \\approx 1{.}3$ million.
2. $1361 / 1{.}52^2 \\approx 590$ W/m².
3. Below it the gas is opaque; light can leave into space only from this thin layer, so it looks like a sharp edge.
4. $4{.}3 \\cdot 10^9 \\cdot 1{.}45 \\cdot 10^{17}$ s $\\approx 6 \\cdot 10^{26}$ kg, about $0{.}03\\%$ of the Sun's mass.
5. $1000 \\cdot 2 \\cdot 0{.}2 = 400$ W.
6. During a total solar eclipse.`,
        hy: `## Արեգակը թվերով

| Մեծություն | Արժեք |
|---|---|
| Շառավիղ | $696\\,000$ կմ, Երկրի $109$ շառավիղ |
| Զանգված | $2 \\cdot 10^{30}$ կգ, Երկրի $333\\,000$ զանգված |
| Միջին խտություն | $1{,}4$ գ/սմ³ |
| Մակերևույթի ջերմաստիճան | մոտ $5800$ Կ |
| Միջուկի ջերմաստիճան | մոտ $15$ միլիոն Կ |
| Պտույտ | հասարակածում $25$ օր, բևեռների մոտ՝ մոտ $35$ |
| Զանգվածային բաղադրություն | մոտ $73\\%$ ջրածին, $25\\%$ հելիում, $2\\%$ այլ տարրեր |
| Տարիք | $4{,}6$ միլիարդ տարի |

Արեգակը սովորական դեղին աստղ է՝ G2 դասի։ Այն առանձնահատուկ է թվում միայն այն պատճառով, որ հաջորդ աստղից $250\\,000$ անգամ ավելի մոտ է։

Մթնոլորտից վեր Արեգակին նայող յուրաքանչյուր քառակուսի մետրը ստանում է $S = 1361$ Վտ․ սա **արեգակնային հաստատունն** է։ Նույն հզորությունն անցնում է $1$ ա․մ․ շառավղով հսկայական գնդի յուրաքանչյուր քառակուսի մետրով, ուստի Արեգակի **լուսատվությունը** (լրիվ հզորությունը) $L = 4\\pi r^2 S$ է։

## Որտեղից է գալիս էներգիան

Այրվող ածուխը Արեգակը կարող էր լուսավոր պահել ընդամենը մի քանի հազար տարի, իսկ սեղմումը՝ տասնյակ միլիոնավոր տարիներ։ Պատասխանը եկավ միջուկային ֆիզիկայի հետ․ միջուկում, $15$ միլիոն Կ ջերմաստիճանում, ջրածնի միջուկները սինթեզվում են հելիումի **պրոտոն-պրոտոնային շղթայում**․

$$4\\,{}^1\\text{H} \\to {}^4\\text{He} + 2e^+ + 2\\nu + \\text{էներգիա}$$

Հելիումի միջուկը չորս պրոտոնից $0{,}7\\%$-ով թեթև է, այս զանգվածը դառնում է էներգիա՝ $E = mc^2$ բանաձևով։ **Նեյտրինոներն** ուղիղ դուրս են թռչում Արեգակից, և գետնի խորքում տեղադրված դետեկտորները որսում են դրանցից մի քանիսը․ ապացույց, որ սինթեզը միջուկում հենց հիմա է տեղի ունենում։ Արեգակն ընդհանուր առմամբ ունի վառելիք մոտ $10$ միլիարդ տարվա համար, ուստի նա միջին տարիքի է։

## Արեգակի շերտերը

> - **Միջուկ**․ սինթեզ, ջերմաստիճանը՝ $15$ միլիոն Կ։
> - **Ճառագայթման գոտի**․ էներգիան դեպի դուրս է շարժվում լույսի տեսքով՝ անհամար անգամներ կլանվելով և նորից ճառագայթվելով, այն անցնելու համար պահանջվում է ավելի քան $100\\,000$ տարի։
> - **Կոնվեկցիայի գոտի**․ տաք գազը բարձրանում և իջնում է եռացող ջրի նման։
> - **Ֆոտոսֆերա**․ տեսանելի «մակերևույթը», մի քանի հարյուր կիլոմետր հաստությամբ շերտ, որից լույսը դուրս է գալիս տիեզերք։ Այն ծածկված է **գրանուլներով**՝ մոտ $1000$ կմ չափի կոնվեկցիոն բջիջների գագաթներով։
> - **Քրոմոսֆերա**․ բարակ վարդագույն շերտ դրանից վեր։
> - **Պսակ**․ արտաքին մթնոլորտը՝ $1$–$2$ միլիոն Կ, որը երևում է որպես մարգարտյա թագ Արեգակի լրիվ խավարման ժամանակ։ Այն տաքացնում են մագնիսական դաշտերը։

## Լուծված օրինակներ

**Օրինակ 1։** Արեգակի լուսատվությունը։

$L = 4\\pi r^2 S = 4\\pi (1{,}5 \\cdot 10^{11})^2 \\cdot 1361 \\approx 3{,}8 \\cdot 10^{26}$ Վտ։

**Օրինակ 2։** Որքա՞ն զանգված է Արեգակն ամեն վայրկյան վերածում էներգիայի։

$\\dfrac{\\Delta m}{\\Delta t} = \\dfrac{L}{c^2} = \\dfrac{3{,}8 \\cdot 10^{26}}{9 \\cdot 10^{16}} \\approx 4{,}3 \\cdot 10^9$ կգ/վ, վայրկյանում մոտ չորս միլիոն տոննա։

**Օրինակ 3։** Մակերևույթի ջերմաստիճանը լուսատվությունից և շառավղից։

$T = \\sqrt[4]{\\dfrac{L}{4\\pi R^2 \\sigma}} = \\sqrt[4]{\\dfrac{3{,}85 \\cdot 10^{26}}{4\\pi (6{,}96 \\cdot 10^8)^2 \\cdot 5{,}67 \\cdot 10^{-8}}} \\approx 5800$ Կ։

## Վարժություններ

1. Քանի՞ Երկիր կտեղավորվեր Արեգակի տրամագծի երկայնքով։ Մոտավորապես քանի՞սը կտեղավորվեր նրա ծավալում։
2. Գտեք արեգակնային հաստատունը Մարսի մոտ ($1{,}52$ ա․մ․)։
3. Ինչո՞ւ ենք ֆոտոսֆերան անվանում «մակերևույթ», թեև Արեգակն ամբողջությամբ գազ է։
4. $4{,}6$ միլիարդ տարում որքա՞ն զանգված է Արեգակը վերածել էներգիայի։ Նրա զանգվածի ո՞ր մասն է դա։
5. Լրիվ արևի լույսի տակ գետինը ստանում է մոտ $1000$ Վտ/մ²։ Ի՞նչ հզորություն է տալիս $20\\%$ ՕԳԳ-ով $2$ մ² արևային վահանակը։
6. Ե՞րբ կարելի է պսակը տեսնել առանց հատուկ սարքերի։

### Պատասխաններ

1. $109$, մոտ $109^3 \\approx 1{,}3$ միլիոն։
2. $1361 / 1{,}52^2 \\approx 590$ Վտ/մ²։
3. Դրանից ներքև գազն անթափանց է, լույսը կարող է տիեզերք դուրս գալ միայն այս բարակ շերտից, ուստի այն սուր եզրի տեսք ունի։
4. $4{,}3 \\cdot 10^9 \\cdot 1{,}45 \\cdot 10^{17}$ վ $\\approx 6 \\cdot 10^{26}$ կգ, Արեգակի զանգվածի մոտ $0{,}03\\%$-ը։
5. $1000 \\cdot 2 \\cdot 0{,}2 = 400$ Վտ։
6. Արեգակի լրիվ խավարման ժամանակ։`,
        ru: `## Солнце в числах

| Величина | Значение |
|---|---|
| Радиус | $696\\,000$ км, $109$ радиусов Земли |
| Масса | $2 \\cdot 10^{30}$ кг, $333\\,000$ масс Земли |
| Средняя плотность | $1{,}4$ г/см³ |
| Температура поверхности | около $5800$ К |
| Температура в ядре | около $15$ млн К |
| Вращение | $25$ суток на экваторе, около $35$ у полюсов |
| Состав по массе | около $73\\%$ водорода, $25\\%$ гелия, $2\\%$ других элементов |
| Возраст | $4{,}6$ млрд лет |

Солнце — обычная жёлтая звезда класса G2. Особенным оно кажется лишь потому, что в $250\\,000$ раз ближе следующей звезды.

Над атмосферой каждый квадратный метр, обращённый к Солнцу, получает $S = 1361$ Вт — это **солнечная постоянная**. Та же мощность проходит через каждый квадратный метр огромной сферы радиусом $1$ а. е., поэтому **светимость** Солнца (полная мощность) $L = 4\\pi r^2 S$.

## Откуда берётся энергия

Горящий уголь поддерживал бы свечение Солнца лишь несколько тысяч лет, а сжатие — десятки миллионов. Ответ дала ядерная физика: в ядре при $15$ млн К ядра водорода сливаются в гелий в **протон-протонном цикле**:

$$4\\,{}^1\\text{H} \\to {}^4\\text{He} + 2e^+ + 2\\nu + \\text{энергия}.$$

Ядро гелия на $0{,}7\\%$ легче четырёх протонов; эта масса превращается в энергию по формуле $E = mc^2$. **Нейтрино** вылетают прямо из Солнца, и детекторы глубоко под землёй ловят некоторые из них — доказательство того, что синтез в ядре идёт прямо сейчас. Всего топлива у Солнца примерно на $10$ млрд лет, так что оно среднего возраста.

## Слои Солнца

> - **Ядро**: синтез; температура $15$ млн К.
> - **Зона лучистого переноса**: энергия пробирается наружу в виде света, поглощаясь и переизлучаясь бесчисленное число раз; путь через неё занимает больше $100\\,000$ лет.
> - **Конвективная зона**: горячий газ поднимается и опускается, как кипящая вода.
> - **Фотосфера**: видимая «поверхность», слой толщиной в несколько сотен километров, из которого свет уходит в космос. Она покрыта **гранулами** — вершинами конвективных ячеек размером около $1000$ км.
> - **Хромосфера**: тонкий розовый слой над ней.
> - **Корона**: внешняя атмосфера, $1$–$2$ млн К, видимая как жемчужный венец во время полного солнечного затмения. Её нагревают магнитные поля.

## Разобранные примеры

**Пример 1.** Светимость Солнца.

$L = 4\\pi r^2 S = 4\\pi (1{,}5 \\cdot 10^{11})^2 \\cdot 1361 \\approx 3{,}8 \\cdot 10^{26}$ Вт.

**Пример 2.** Сколько массы Солнце каждую секунду превращает в энергию?

$\\dfrac{\\Delta m}{\\Delta t} = \\dfrac{L}{c^2} = \\dfrac{3{,}8 \\cdot 10^{26}}{9 \\cdot 10^{16}} \\approx 4{,}3 \\cdot 10^9$ кг/с, около четырёх миллионов тонн в секунду.

**Пример 3.** Температура поверхности по светимости и радиусу.

$T = \\sqrt[4]{\\dfrac{L}{4\\pi R^2 \\sigma}} = \\sqrt[4]{\\dfrac{3{,}85 \\cdot 10^{26}}{4\\pi (6{,}96 \\cdot 10^8)^2 \\cdot 5{,}67 \\cdot 10^{-8}}} \\approx 5800$ К.

## Упражнения

1. Сколько Земель уложится вдоль диаметра Солнца? Примерно сколько поместится в его объёме?
2. Найдите солнечную постоянную у Марса ($1{,}52$ а. е.).
3. Почему фотосферу называют «поверхностью», хотя Солнце целиком газовое?
4. Сколько массы Солнце превратило в энергию за $4{,}6$ млрд лет? Какая это доля его массы?
5. При полном солнечном свете земля получает около $1000$ Вт/м². Какую мощность даёт солнечная панель площадью $2$ м² с КПД $20\\%$?
6. Когда корону можно увидеть без специальных приборов?

### Ответы

1. $109$; около $109^3 \\approx 1{,}3$ млн.
2. $1361 / 1{,}52^2 \\approx 590$ Вт/м².
3. Ниже неё газ непрозрачен; свет может уйти в космос только из этого тонкого слоя, поэтому он выглядит как резкий край.
4. $4{,}3 \\cdot 10^9 \\cdot 1{,}45 \\cdot 10^{17}$ с $\\approx 6 \\cdot 10^{26}$ кг, около $0{,}03\\%$ массы Солнца.
5. $1000 \\cdot 2 \\cdot 0{,}2 = 400$ Вт.
6. Во время полного солнечного затмения.`,
      },
      [
        q(t("The Sun's energy is produced by…", "Արեգակի էներգիան առաջանում է…", "Энергия Солнца вырабатывается…"), [t("fusion of hydrogen into helium in the core", "միջուկում ջրածնից հելիումի սինթեզով", "синтезом гелия из водорода в ядре"), t("burning of coal and gas", "ածխի և գազի այրմամբ", "горением угля и газа"), t("splitting of uranium", "ուրանի տրոհմամբ", "делением урана")], 0),
        q(t("The solar constant is about…", "Արեգակնային հաստատունը մոտ…", "Солнечная постоянная около…"), [t("1361 W/m²", "1361 Վտ/մ² է", "1361 Вт/м²"), t("100 W/m²", "100 Վտ/մ² է", "100 Вт/м²"), t("1 W/m²", "1 Վտ/մ² է", "1 Вт/м²")], 0),
        q(t("The visible surface of the Sun is the…", "Արեգակի տեսանելի մակերևույթը…", "Видимая поверхность Солнца — это…"), [t("photosphere", "ֆոտոսֆերան է", "фотосфера"), t("corona", "պսակն է", "корона"), t("core", "միջուկն է", "ядро")], 0),
        q(t("Which particles from the Sun's core prove that fusion is going on now?", "Արեգակի միջուկից եկող ո՞ր մասնիկներն են ապացուցում, որ սինթեզն այժմ ընթանում է։", "Какие частицы из ядра Солнца доказывают, что синтез идёт сейчас?"), [t("Neutrinos", "Նեյտրինոները", "Нейтрино"), t("Protons of the solar wind", "Արևային քամու պրոտոնները", "Протоны солнечного ветра"), t("Dust grains", "Փոշու հատիկները", "Пылинки")], 0),
        q(t("The temperature of the corona is about…", "Պսակի ջերմաստիճանը մոտ…", "Температура короны около…"), [t("1–2 million K", "1–2 միլիոն Կ է", "1–2 млн К"), t("5800 K", "5800 Կ է", "5800 К"), t("300 K", "300 Կ է", "300 К")], 0),
        q(t("The Sun is a star of spectral class…", "Արեգակը … սպեկտրալ դասի աստղ է։", "Солнце — звезда спектрального класса…"), [t("G", "G", "G"), t("O", "O", "O"), t("M", "M", "M")], 0),
      ],
    ),
    lesson(
      "solar-activity",
      ["Solar activity and space weather", "Արեգակնային ակտիվություն և տիեզերական եղանակ", "Солнечная активность и космическая погода"],
      {
        en: ["Describe sunspots, flares, prominences and coronal mass ejections and the 11-year cycle", "Explain the solar wind, the magnetosphere and the origin of aurorae", "Describe the effects of space weather on technology and how to observe the Sun safely"],
        hy: ["Նկարագրել արևաբծերը, բռնկումները, պրոտուբերանցները և պսակային զանգվածի արտանետումները, 11-ամյա ցիկլը", "Բացատրել արևային քամին, մագնիսոլորտը և բևեռափայլերի ծագումը", "Նկարագրել տիեզերական եղանակի ազդեցությունը տեխնիկայի վրա և Արեգակը անվտանգ դիտելու եղանակները"],
        ru: ["Описывать солнечные пятна, вспышки, протуберанцы и корональные выбросы массы, 11-летний цикл", "Объяснять солнечный ветер, магнитосферу и происхождение полярных сияний", "Описывать влияние космической погоды на технику и способы безопасно наблюдать Солнце"],
      },
      {
        en: `## Sunspots and the cycle

**Sunspots** are regions where strong magnetic fields hold back the rising heat. They are about $1500$ K cooler than the photosphere and look dark only by contrast; a single spot can be larger than the Earth. Galileo watched spots drift across the disc and concluded that the Sun rotates.

The number of spots rises and falls with a period of about **11 years** (Schwabe, 1843). At each minimum the Sun's magnetic field flips, so the full magnetic cycle lasts $22$ years. Solar cycles are numbered from 1755; cycle 25 began in December 2019 and reached its maximum around 2024–2025.

## Explosions on the Sun

> - **Flares**: sudden releases of magnetic energy near spots, which heat gas to tens of millions of degrees and send out X-rays and fast particles within minutes.
> - **Prominences**: huge loops of cooler gas held up by magnetic fields, seen at the edge of the Sun.
> - **Coronal mass ejections**: clouds of billions of tonnes of plasma thrown into space at hundreds or thousands of km/s.

## The solar wind and the Earth

The corona is so hot that it streams away into space as the **solar wind**, a flow of protons and electrons at $400$–$800$ km/s. The Earth's magnetic field deflects it and forms a protective bubble, the **magnetosphere**. Some particles are guided down along the field lines near the magnetic poles; they strike the upper air at $100$–$300$ km and make it glow: **aurorae**. Oxygen gives green and red light, nitrogen blue and purple.

When a strong ejection hits the Earth, a **magnetic storm** begins. It can disturb radio and satellite navigation, damage satellites, endanger astronauts and induce currents in long power lines. In 1859 (the Carrington event) telegraph wires sparked; in 1989 a storm caused a nine-hour blackout in Quebec. Today space-weather services watch the Sun with spacecraft and give warnings, as weather services do for storms.

## Observing the Sun safely

Never look at the Sun through a telescope, binoculars or with the naked eye: it can blind you in a moment. Project its image onto a white card behind the eyepiece, or use certified solar filters that cover the front of the instrument.

## Worked examples

**Example 1.** How long does the solar wind take to reach the Earth at $450$ km/s?

$t = \\dfrac{1{.}5 \\cdot 10^8}{450} \\approx 3{.}3 \\cdot 10^5$ s, about $4$ days.

**Example 2.** A coronal mass ejection travels at $1500$ km/s. When will it arrive?

$t = \\dfrac{1{.}5 \\cdot 10^8}{1500} = 10^5$ s, about $28$ hours: enough time to warn satellite operators.

**Example 3.** From the start of cycle 1 (1755) to the start of cycle 25 (2019), what is the mean length of a cycle?

$\\dfrac{2019 - 1755}{24} = 11$ years.

## Exercises

1. Why do sunspots look dark?
2. A spot crosses the visible disc in about $13{.}5$ days. Estimate the rotation period of the Sun as seen from the Earth.
3. Why are aurorae seen mostly near the poles?
4. Cycle 25 had its maximum around 2025. When can the next maximum be expected?
5. Name three technologies that strong solar storms can harm.
6. How can you observe sunspots safely at school?

### Answers

1. They are about $1500$ K cooler than the gas around them, so they shine less.
2. Half a turn in $13{.}5$ days, so about $27$ days.
3. The magnetic field guides the particles down along field lines near the magnetic poles.
4. About $11$ years later, around 2036.
5. Satellites and satellite navigation, radio communication, power grids (also the health of astronauts).
6. Project the image through a telescope or binoculars onto a white screen, or use a certified solar filter; never look directly.`,
        hy: `## Արևաբծեր և ցիկլ

**Արևաբծերը** տիրույթներ են, որտեղ ուժեղ մագնիսական դաշտերը պահում են բարձրացող ջերմությունը։ Դրանք ֆոտոսֆերայից մոտ $1500$ Կ-ով սառն են և մութ են երևում միայն հակադրությամբ, մեկ բիծը կարող է Երկրից մեծ լինել։ Գալիլեյը հետևում էր, թե ինչպես են բծերը շարժվում սկավառակով, և եզրակացրեց, որ Արեգակը պտտվում է։

Բծերի թիվն աճում և նվազում է մոտ **11 տարի** պարբերությամբ (Շվաբե, 1843)։ Յուրաքանչյուր նվազագույնի ժամանակ Արեգակի մագնիսական դաշտը շրջվում է, ուստի լրիվ մագնիսական ցիկլը տևում է $22$ տարի։ Արեգակնային ցիկլերը համարակալվում են 1755 թվականից, 25-րդ ցիկլը սկսվեց 2019 թվականի դեկտեմբերին և իր առավելագույնին հասավ մոտ 2024–2025 թվականներին։

## Պայթյուններ Արեգակի վրա

> - **Բռնկումներ**․ մագնիսական էներգիայի հանկարծակի ազատում բծերի մոտ, որը րոպեների ընթացքում գազը տաքացնում է մինչև տասնյակ միլիոնավոր աստիճաններ և արձակում ռենտգենյան ճառագայթներ և արագ մասնիկներ։
> - **Պրոտուբերանցներ**․ մագնիսական դաշտերով պահվող ավելի սառը գազի հսկայական օղակներ, որոնք երևում են Արեգակի եզրին։
> - **Պսակային զանգվածի արտանետումներ**․ միլիարդավոր տոննա պլազմայի ամպեր, որոնք տիեզերք են նետվում վայրկյանում հարյուրավոր կամ հազարավոր կիլոմետր արագությամբ։

## Արևային քամին և Երկիրը

Պսակն այնքան տաք է, որ հոսում է տիեզերք որպես **արևային քամի**՝ պրոտոնների և էլեկտրոնների հոսք $400$–$800$ կմ/վ արագությամբ։ Երկրի մագնիսական դաշտը շեղում է այն և առաջացնում պաշտպանիչ պղպջակ՝ **մագնիսոլորտը**։ Որոշ մասնիկներ դաշտի գծերով ուղղորդվում են ներքև՝ մագնիսական բևեռների մոտ, դրանք հարվածում են վերին օդին $100$–$300$ կմ բարձրության վրա և ստիպում այն լուսարձակել․ **բևեռափայլեր**։ Թթվածինը տալիս է կանաչ և կարմիր լույս, ազոտը՝ կապույտ և մանուշակագույն։

Երբ ուժեղ արտանետումը հարվածում է Երկրին, սկսվում է **մագնիսական փոթորիկ**։ Այն կարող է խանգարել ռադիոկապին և արբանյակային նավարկությանը, վնասել արբանյակները, վտանգել տիեզերագնացներին և հոսանքներ մակածել երկար էլեկտրահաղորդման գծերում։ 1859 թվականին (Քերինգթոնի իրադարձություն) հեռագրալարերը կայծեր էին արձակում, 1989-ին փոթորիկը Քվեբեկում ինը ժամ տևած հոսանքազրկում առաջացրեց։ Այսօր տիեզերական եղանակի ծառայությունները տիեզերական սարքերով հետևում են Արեգակին և զգուշացումներ տալիս, ինչպես եղանակի ծառայությունները՝ փոթորիկների մասին։

## Արեգակի անվտանգ դիտումը

Երբեք մի նայեք Արեգակին աստղադիտակով, հեռադիտակով կամ անզեն աչքով․ դա կարող է ակնթարթորեն կուրացնել։ Նրա պատկերը ակնադիտակի ետևում արտապատկերեք սպիտակ ստվարաթղթի վրա կամ օգտագործեք սարքի առջևը ծածկող հավաստագրված արևային զտիչներ։

## Լուծված օրինակներ

**Օրինակ 1։** Որքա՞ն ժամանակում է $450$ կմ/վ արագությամբ արևային քամին հասնում Երկիր։

$t = \\dfrac{1{,}5 \\cdot 10^8}{450} \\approx 3{,}3 \\cdot 10^5$ վ, մոտ $4$ օր։

**Օրինակ 2։** Պսակային զանգվածի արտանետումը շարժվում է $1500$ կմ/վ արագությամբ։ Ե՞րբ այն կհասնի։

$t = \\dfrac{1{,}5 \\cdot 10^8}{1500} = 10^5$ վ, մոտ $28$ ժամ․ բավական է արբանյակների օպերատորներին զգուշացնելու համար։

**Օրինակ 3։** 1-ին ցիկլի սկզբից (1755) մինչև 25-րդ ցիկլի սկիզբը (2019) որքա՞ն է ցիկլի միջին տևողությունը։

$\\dfrac{2019 - 1755}{24} = 11$ տարի։

## Վարժություններ

1. Ինչո՞ւ են արևաբծերը մութ երևում։
2. Բիծը տեսանելի սկավառակն անցնում է մոտ $13{,}5$ օրում։ Գնահատեք Արեգակի պտույտի պարբերությունը Երկրից դիտելիս։
3. Ինչո՞ւ են բևեռափայլերը երևում հիմնականում բևեռների մոտ։
4. 25-րդ ցիկլի առավելագույնը եղավ մոտ 2025 թվականին։ Ե՞րբ կարելի է սպասել հաջորդ առավելագույնը։
5. Նշեք երեք տեխնոլոգիա, որոնց կարող են վնասել ուժեղ արևային փոթորիկները։
6. Ինչպե՞ս կարելի է դպրոցում անվտանգ դիտել արևաբծերը։

### Պատասխաններ

1. Դրանք շրջակա գազից մոտ $1500$ Կ-ով սառն են, ուստի ավելի քիչ են լուսարձակում։
2. Կես պտույտ՝ $13{,}5$ օրում, ուստի մոտ $27$ օր։
3. Մագնիսական դաշտը մասնիկներն ուղղորդում է ներքև դաշտի գծերով՝ մագնիսական բևեռների մոտ։
4. Մոտ $11$ տարի անց՝ մոտ 2036 թվականին։
5. Արբանյակներ և արբանյակային նավարկություն, ռադիոկապ, էլեկտրացանցեր (նաև տիեզերագնացների առողջությունը)։
6. Աստղադիտակով կամ հեռադիտակով պատկերն արտապատկերել սպիտակ էկրանի վրա կամ օգտագործել հավաստագրված արևային զտիչ, երբեք ուղիղ չնայել։`,
        ru: `## Солнечные пятна и цикл

**Солнечные пятна** — области, где сильные магнитные поля сдерживают поднимающееся тепло. Они примерно на $1500$ К холоднее фотосферы и кажутся тёмными лишь по контрасту; одно пятно может быть больше Земли. Галилей наблюдал, как пятна перемещаются по диску, и заключил, что Солнце вращается.

Число пятен растёт и убывает с периодом около **11 лет** (Швабе, 1843). В каждый минимум магнитное поле Солнца переворачивается, поэтому полный магнитный цикл длится $22$ года. Солнечные циклы нумеруют с 1755 года; 25-й цикл начался в декабре 2019 года и достиг максимума около 2024–2025 годов.

## Взрывы на Солнце

> - **Вспышки**: внезапное высвобождение магнитной энергии вблизи пятен, за минуты разогревающее газ до десятков миллионов градусов и испускающее рентген и быстрые частицы.
> - **Протуберанцы**: огромные петли более холодного газа, удерживаемые магнитными полями, видимые на краю Солнца.
> - **Корональные выбросы массы**: облака из миллиардов тонн плазмы, выброшенные в космос со скоростью сотни и тысячи км/с.

## Солнечный ветер и Земля

Корона настолько горяча, что истекает в космос как **солнечный ветер** — поток протонов и электронов со скоростью $400$–$800$ км/с. Магнитное поле Земли отклоняет его и образует защитный пузырь — **магнитосферу**. Часть частиц направляется вниз вдоль силовых линий у магнитных полюсов; они ударяют в верхние слои воздуха на высоте $100$–$300$ км и заставляют их светиться: **полярные сияния**. Кислород даёт зелёный и красный свет, азот — синий и фиолетовый.

Когда сильный выброс достигает Земли, начинается **магнитная буря**. Она может нарушать радиосвязь и спутниковую навигацию, повреждать спутники, угрожать космонавтам и наводить токи в длинных линиях электропередачи. В 1859 году (событие Кэррингтона) искрили телеграфные провода; в 1989 году буря вызвала девятичасовое отключение электричества в Квебеке. Сегодня службы космической погоды следят за Солнцем с космических аппаратов и дают предупреждения, как метеослужбы о штормах.

## Безопасное наблюдение Солнца

Никогда не смотрите на Солнце в телескоп, бинокль или невооружённым глазом: это может мгновенно ослепить. Проецируйте его изображение на белый картон за окуляром или используйте сертифицированные солнечные фильтры, закрывающие объектив прибора.

## Разобранные примеры

**Пример 1.** За какое время солнечный ветер со скоростью $450$ км/с доходит до Земли?

$t = \\dfrac{1{,}5 \\cdot 10^8}{450} \\approx 3{,}3 \\cdot 10^5$ с, около $4$ суток.

**Пример 2.** Корональный выброс движется со скоростью $1500$ км/с. Когда он прибудет?

$t = \\dfrac{1{,}5 \\cdot 10^8}{1500} = 10^5$ с, около $28$ часов — достаточно, чтобы предупредить операторов спутников.

**Пример 3.** Какова средняя длина цикла от начала 1-го (1755) до начала 25-го (2019)?

$\\dfrac{2019 - 1755}{24} = 11$ лет.

## Упражнения

1. Почему солнечные пятна выглядят тёмными?
2. Пятно пересекает видимый диск примерно за $13{,}5$ суток. Оцените период вращения Солнца, наблюдаемый с Земли.
3. Почему полярные сияния видны в основном у полюсов?
4. Максимум 25-го цикла пришёлся примерно на 2025 год. Когда ожидать следующий максимум?
5. Назовите три технологии, которым могут навредить сильные солнечные бури.
6. Как безопасно наблюдать солнечные пятна в школе?

### Ответы

1. Они примерно на $1500$ К холоднее окружающего газа, поэтому светят слабее.
2. Пол-оборота за $13{,}5$ суток, значит, около $27$ суток.
3. Магнитное поле направляет частицы вниз вдоль силовых линий у магнитных полюсов.
4. Примерно через $11$ лет, около 2036 года.
5. Спутники и спутниковая навигация, радиосвязь, энергосети (а также здоровье космонавтов).
6. Проецировать изображение через телескоп или бинокль на белый экран или пользоваться сертифицированным солнечным фильтром; никогда не смотреть прямо.`,
      },
      [
        q(t("Sunspots are…", "Արևաբծերը…", "Солнечные пятна — это…"), [t("cooler regions with strong magnetic fields", "ուժեղ մագնիսական դաշտերով ավելի սառը տիրույթներ են", "более холодные области с сильным магнитным полем"), t("holes through the Sun", "Արեգակի միջով անցքեր են", "дыры насквозь через Солнце"), t("planets passing in front of the Sun", "Արեգակի առջևով անցնող մոլորակներ են", "планеты, проходящие перед Солнцем")], 0),
        q(t("The number of sunspots changes with a period of about…", "Արևաբծերի թիվը փոխվում է մոտ … պարբերությամբ։", "Число солнечных пятен меняется с периодом около…"), [t("11 years", "11 տարի", "11 лет"), t("1 year", "1 տարի", "1 года"), t("100 years", "100 տարի", "100 лет")], 0),
        q(t("Aurorae are caused by…", "Բևեռափայլերն առաջանում են…", "Полярные сияния вызываются…"), [t("charged particles from the Sun hitting the upper air", "Արեգակից եկող լիցքավորված մասնիկների՝ վերին օդին հարվածելուց", "заряженными частицами от Солнца, ударяющими в верхние слои воздуха"), t("light reflected from polar ice", "բևեռային սառույցից անդրադարձած լույսից", "светом, отражённым от полярного льда"), t("lightning in the clouds", "ամպերում կայծակից", "молниями в облаках")], 0),
        q(t("What protects the Earth from most of the solar wind?", "Ի՞նչն է Երկիրը պաշտպանում արևային քամու մեծ մասից։", "Что защищает Землю от большей части солнечного ветра?"), [t("The magnetosphere", "Մագնիսոլորտը", "Магнитосфера"), t("The Moon", "Լուսինը", "Луна"), t("The clouds", "Ամպերը", "Облака")], 0),
        q(t("The solar wind reaches the Earth in about…", "Արևային քամին Երկիր է հասնում մոտ…", "Солнечный ветер доходит до Земли примерно за…"), [t("2–4 days", "2–4 օրում", "2–4 суток"), t("8 minutes", "8 րոպեում", "8 минут"), t("1 year", "1 տարում", "1 год")], 0),
        q(t("What is the safe way to look at sunspots?", "Ո՞րն է արևաբծերին նայելու անվտանգ եղանակը։", "Как безопасно смотреть на солнечные пятна?"), [t("Project the image onto a white screen", "Պատկերն արտապատկերել սպիտակ էկրանի վրա", "Проецировать изображение на белый экран"), t("Look through binoculars at sunset", "Մայրամուտին նայել հեռադիտակով", "Смотреть в бинокль на закате"), t("Look through dark sunglasses", "Նայել մուգ արևային ակնոցներով", "Смотреть через тёмные солнечные очки")], 0),
      ],
    ),
  ],
};
