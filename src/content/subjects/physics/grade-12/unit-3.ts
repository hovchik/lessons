import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Astrophysics and cosmology", "Աստղաֆիզիկա և կոսմոլոգիա", "Астрофизика и космология"),
  summary: t("Solar system, the Sun, stars and their evolution, galaxies, expanding Universe, Big Bang.", "Արեգակնային համակարգ, Արև, աստղեր և դրանց էվոլյուցիա, գալակտիկաներ, ընդարձակվող Տիեզերք, Մեծ պայթյուն։", "Солнечная система, Солнце, звёзды и их эволюция, галактики, расширяющаяся Вселенная, Большой взрыв."),
  lessons: [
    lesson(
      "solar-system",
      ["Solar system; Kepler's laws", "Արեգակնային համակարգ, Կեպլերի օրենքներ", "Солнечная система; законы Кеплера"],
      {
        en: ["Describe the structure of the Solar system: the Sun, the terrestrial and giant planets, dwarf planets, asteroids, comets and the Kuiper belt", "State Kepler's three laws and use the third law to relate orbital periods and distances", "Compute orbital speeds, periods and the masses of central bodies from the law of gravitation"],
        hy: ["Նկարագրել Արեգակնային համակարգի կառուցվածքը․ Արև, երկրային և հսկա մոլորակներ, գաճաճ մոլորակներ, աստերոիդներ, գիսաստղեր և Կոյպերի գոտի", "Ձևակերպել Կեպլերի երեք օրենքները և երրորդ օրենքով կապել ուղեծրային պարբերություններն ու հեռավորությունները", "Ձգողականության օրենքով հաշվել ուղեծրային արագությունները, պարբերությունները և կենտրոնական մարմինների զանգվածները"],
        ru: ["Описывать строение Солнечной системы: Солнце, планеты земной группы и гиганты, карликовые планеты, астероиды, кометы и пояс Койпера", "Формулировать три закона Кеплера и по третьему закону связывать периоды обращения и расстояния", "Вычислять орбитальные скорости, периоды и массы центральных тел по закону всемирного тяготения"],
      },
      {
        en: `## The Solar system

The **Sun** holds $99{.}86\\%$ of the mass of the system; everything else orbits it under gravity. Distances are measured in **astronomical units**, $1$ AU $= 1{.}496 \\cdot 10^{11}$ m, the mean Earth–Sun distance.

| Body | Distance, AU | Period | Radius (Earth = 1) | Mass (Earth = 1) |
|---|---|---|---|---|
| Mercury | 0.39 | 88 d | 0.38 | 0.055 |
| Venus | 0.72 | 225 d | 0.95 | 0.82 |
| Earth | 1.00 | 365.25 d | 1 | 1 |
| Mars | 1.52 | 1.88 yr | 0.53 | 0.11 |
| Jupiter | 5.20 | 11.9 yr | 11.2 | 318 |
| Saturn | 9.54 | 29.5 yr | 9.4 | 95 |
| Uranus | 19.2 | 84 yr | 4.0 | 14.5 |
| Neptune | 30.1 | 165 yr | 3.9 | 17 |

> - The four **terrestrial planets** are small, rocky and dense ($4$–$5{.}5$ g/cm³), with few or no moons.
> - The four **giant planets** are large, mostly hydrogen and helium (Jupiter, Saturn) or ice (Uranus, Neptune), of low density ($0{.}7$–$1{.}7$ g/cm³), with rings and dozens of moons.
> - Between Mars and Jupiter lies the **asteroid belt**; beyond Neptune the **Kuiper belt** with the dwarf planets Pluto and Eris; far out the **Oort cloud**, the source of long-period **comets**, icy bodies that grow tails when they approach the Sun.

The planets all orbit in nearly the same plane and the same direction, a relic of the rotating disc of gas and dust from which the system formed $4{.}6$ billion years ago.

## Kepler's laws

From Tycho Brahe's observations of Mars, Kepler found three laws (1609–1619):

> 1. Each planet moves on an **ellipse** with the Sun at one focus.
> 2. The line from the Sun to the planet sweeps **equal areas in equal times** (so the planet moves faster at perihelion, the nearest point, and slower at aphelion).
> 3. The squares of the periods are proportional to the cubes of the semi-major axes: $$\\dfrac{T_1^2}{T_2^2} = \\dfrac{a_1^3}{a_2^3}.$$

With $T$ in years and $a$ in AU, the third law for the Sun's planets is simply $T^2 = a^3$. The second law expresses conservation of angular momentum; the first and third follow from Newton's law of gravitation.

## Newton's form of the third law

For a circular orbit of radius $r$ around a body of mass $M$, gravity provides the centripetal force:

$$\\dfrac{G M m}{r^2} = \\dfrac{m v^2}{r} \\quad\\Rightarrow\\quad v = \\sqrt{\\dfrac{GM}{r}}, \\qquad T = 2\\pi\\sqrt{\\dfrac{r^3}{GM}}, \\qquad \\dfrac{T^2}{r^3} = \\dfrac{4\\pi^2}{GM}.$$

So measuring $T$ and $r$ of any satellite gives the **mass of the central body**: the Sun from the Earth's orbit, the Earth from the Moon, Jupiter from its moons, and the Milky Way from the Sun's orbit around its centre. ($G = 6{.}67 \\cdot 10^{-11}$ N·m²/kg².)

## Worked examples

**Example 1.** Jupiter is at $5{.}2$ AU. Its period from Kepler's third law?

$T = a^{3/2} = 5{.}2^{1{.}5} = \\sqrt{140{.}6} \\approx 11{.}9$ years.

**Example 2.** A comet has a period of $76$ years (Halley). Its semi-major axis?

$a = T^{2/3} = 76^{2/3} = \\sqrt[3]{5776} \\approx 17{.}9$ AU. Its perihelion is $0{.}59$ AU, so its aphelion is $2a - 0{.}59 \\approx 35$ AU, beyond Neptune.

**Example 3.** Mass of the Sun from the Earth's orbit ($r = 1{.}5 \\cdot 10^{11}$ m, $T = 3{.}16 \\cdot 10^7$ s).

$M = \\dfrac{4\\pi^2 r^3}{G T^2} = \\dfrac{39{.}5 \\cdot 3{.}375 \\cdot 10^{33}}{6{.}67 \\cdot 10^{-11} \\cdot 10^{15}} \\approx 2{.}0 \\cdot 10^{30}$ kg.

**Example 4.** Orbital speed of the Earth.

$v = \\dfrac{2\\pi r}{T} = \\dfrac{2\\pi \\cdot 1{.}5 \\cdot 10^{11}}{3{.}16 \\cdot 10^7} \\approx 3 \\cdot 10^4$ m/s $= 30$ km/s.

**Example 5.** Mass of the Earth from the Moon's orbit ($r = 3{.}84 \\cdot 10^8$ m, $T = 27{.}3$ days $= 2{.}36 \\cdot 10^6$ s).

$M = \\dfrac{4\\pi^2 (3{.}84 \\cdot 10^8)^3}{6{.}67 \\cdot 10^{-11} \\cdot (2{.}36 \\cdot 10^6)^2} = \\dfrac{39{.}5 \\cdot 5{.}66 \\cdot 10^{25}}{6{.}67 \\cdot 10^{-11} \\cdot 5{.}57 \\cdot 10^{12}} \\approx 6{.}0 \\cdot 10^{24}$ kg.

**Example 6.** Halley's comet moves at $55$ km/s at perihelion ($0{.}59$ AU). Speed at aphelion ($35$ AU)?

By the second law (angular momentum), $v_a r_a = v_p r_p$: $v_a = 55 \\cdot 0{.}59 / 35 \\approx 0{.}93$ km/s.

**Example 7.** Period of a satellite at height $400$ km above the Earth ($R = 6400$ km, $g = 10$ m/s²).

$GM = gR^2$, so $T = 2\\pi\\sqrt{\\dfrac{r^3}{gR^2}} = 2\\pi\\sqrt{\\dfrac{(6{.}8 \\cdot 10^6)^3}{10 \\cdot (6{.}4 \\cdot 10^6)^2}} = 2\\pi\\sqrt{\\dfrac{3{.}14 \\cdot 10^{20}}{4{.}1 \\cdot 10^{14}}} \\approx 5500$ s $\\approx 92$ minutes.

**Example 8.** A geostationary satellite has $T = 24$ h. Its orbital radius?

$r^3 = \\dfrac{gR^2 T^2}{4\\pi^2} = \\dfrac{10 \\cdot 4{.}1 \\cdot 10^{13} \\cdot (8{.}64 \\cdot 10^4)^2}{39{.}5} = 7{.}75 \\cdot 10^{22}$; $r \\approx 4{.}2 \\cdot 10^7$ m, that is $36\\,000$ km above the surface.

## Exercises

1. Which planets are terrestrial and which are giants? Give two differences between the groups.
2. Mars is at $1{.}52$ AU. Find its period in years and compare with the table.
3. An asteroid orbits with a period of $8$ years. How far from the Sun is it on average?
4. Where does a planet move fastest, at perihelion or aphelion? Which of Kepler's laws says so?
5. The Earth's orbit has eccentricity $0{.}017$; perihelion is $0{.}983$ AU. Find the aphelion distance and the ratio of speeds at the two points.
6. Jupiter's moon Io orbits at $4{.}22 \\cdot 10^8$ m with a period of $1{.}77$ days. Find the mass of Jupiter.
7. Find the orbital speed and period of a satellite just above the Earth's surface ($R = 6400$ km, $g = 10$ m/s²).
8. The Sun orbits the centre of the Galaxy at $r = 2{.}6 \\cdot 10^{20}$ m with $v = 220$ km/s. Estimate the mass inside its orbit, in solar masses.

### Answers

1. Mercury, Venus, Earth, Mars; Jupiter, Saturn, Uranus, Neptune. Terrestrial: small, rocky, dense, few moons; giants: large, gaseous or icy, low density, rings and many moons.
2. $T = 1{.}52^{1{.}5} \\approx 1{.}87$ years.
3. $a = 8^{2/3} = 4$ AU.
4. Perihelion; the second law (equal areas).
5. Aphelion $2a - r_p = 2 - 0{.}983 = 1{.}017$ AU; $v_p / v_a = 1{.}017 / 0{.}983 \\approx 1{.}035$.
6. $M = 4\\pi^2 r^3 / (G T^2) = 39{.}5 \\cdot 7{.}5 \\cdot 10^{25} / (6{.}67 \\cdot 10^{-11} \\cdot (1{.}53 \\cdot 10^5)^2) \\approx 1{.}9 \\cdot 10^{27}$ kg.
7. $v = \\sqrt{gR} = \\sqrt{10 \\cdot 6{.}4 \\cdot 10^6} = 8$ km/s; $T = 2\\pi R / v \\approx 5000$ s $\\approx 84$ min.
8. $M = v^2 r / G = (2{.}2 \\cdot 10^5)^2 \\cdot 2{.}6 \\cdot 10^{20} / 6{.}67 \\cdot 10^{-11} \\approx 1{.}9 \\cdot 10^{41}$ kg $\\approx 10^{11}$ solar masses.`,
        hy: `## Արեգակնային համակարգ

**Արեգակը** կրում է համակարգի զանգվածի $99{,}86\\%$-ը․ մնացած ամեն ինչ պտտվում է նրա շուրջ ձգողականության ազդեցությամբ։ Հեռավորությունները չափվում են **աստղագիտական միավորով**․ $1$ ա․մ․ $= 1{,}496 \\cdot 10^{11}$ մ՝ Երկիր-Արեգակ միջին հեռավորությունը։

| Մարմին | Հեռավորություն, ա․մ․ | Պարբերություն | Շառավիղ (Երկիր = 1) | Զանգված (Երկիր = 1) |
|---|---|---|---|---|
| Մերկուրի | 0,39 | 88 օր | 0,38 | 0,055 |
| Վեներա | 0,72 | 225 օր | 0,95 | 0,82 |
| Երկիր | 1,00 | 365,25 օր | 1 | 1 |
| Մարս | 1,52 | 1,88 տարի | 0,53 | 0,11 |
| Յուպիտեր | 5,20 | 11,9 տարի | 11,2 | 318 |
| Սատուրն | 9,54 | 29,5 տարի | 9,4 | 95 |
| Ուրան | 19,2 | 84 տարի | 4,0 | 14,5 |
| Նեպտուն | 30,1 | 165 տարի | 3,9 | 17 |

> - Չորս **երկրային մոլորակները** փոքր են, քարքարոտ և խիտ ($4$–$5{,}5$ գ/սմ³), քիչ արբանյակներով կամ առանց դրանց։
> - Չորս **հսկա մոլորակները** մեծ են, հիմնականում ջրածնից և հելիումից (Յուպիտեր, Սատուրն) կամ սառույցից (Ուրան, Նեպտուն), ցածր խտությամբ ($0{,}7$–$1{,}7$ գ/սմ³), օղակներով և տասնյակ արբանյակներով։
> - Մարսի և Յուպիտերի միջև **աստերոիդների գոտին** է․ Նեպտունից այն կողմ՝ **Կոյպերի գոտին** Պլուտոն և Էրիդա գաճաճ մոլորակներով․ շատ հեռու՝ **Օորտի ամպը**՝ երկարապարբերական **գիսաստղերի** աղբյուրը, սառցե մարմիններ, որոնք Արեգակին մոտենալիս պոչ են ձեռք բերում։

Բոլոր մոլորակները պտտվում են գրեթե նույն հարթությունում և նույն ուղղությամբ՝ գազի և փոշու պտտվող սկավառակի հետք, որից համակարգն առաջացել է $4{,}6$ միլիարդ տարի առաջ։

## Կեպլերի օրենքները

Տիխո Բրահեի՝ Մարսի դիտումներից Կեպլերը գտավ երեք օրենք (1609–1619)․

> 1. Յուրաքանչյուր մոլորակ շարժվում է **էլիպսով**, որի կիզակետերից մեկում Արեգակն է։
> 2. Արեգակից մոլորակին տարված ուղիղը **հավասար ժամանակներում հավասար մակերեսներ** է անցնում (ուստի մոլորակը պերիհելիումում՝ ամենամոտ կետում, ավելի արագ է շարժվում, իսկ աֆելիումում՝ ավելի դանդաղ)։
> 3. Պարբերությունների քառակուսիները համեմատական են մեծ կիսառանցքների խորանարդներին․ $$\\dfrac{T_1^2}{T_2^2} = \\dfrac{a_1^3}{a_2^3}$$

$T$-ն տարիներով և $a$-ն ա․մ․-ով վերցնելիս Արեգակի մոլորակների համար երրորդ օրենքը պարզապես $T^2 = a^3$ է։ Երկրորդ օրենքն արտահայտում է իմպուլսի մոմենտի պահպանումը․ առաջինն ու երրորդը բխում են Նյուտոնի ձգողականության օրենքից։

## Երրորդ օրենքի նյուտոնյան ձևը

$M$ զանգվածով մարմնի շուրջ $r$ շառավղով շրջանային ուղեծրի համար ձգողականությունն ապահովում է կենտրոնաձիգ ուժը․

$$\\dfrac{G M m}{r^2} = \\dfrac{m v^2}{r} \\quad\\Rightarrow\\quad v = \\sqrt{\\dfrac{GM}{r}}, \\qquad T = 2\\pi\\sqrt{\\dfrac{r^3}{GM}}, \\qquad \\dfrac{T^2}{r^3} = \\dfrac{4\\pi^2}{GM}$$

Ուստի ցանկացած արբանյակի $T$-ի և $r$-ի չափումը տալիս է **կենտրոնական մարմնի զանգվածը**․ Արեգակինը՝ Երկրի ուղեծրից, Երկրինը՝ Լուսնից, Յուպիտերինը՝ նրա արբանյակներից, Ծիր Կաթինինը՝ Արեգակի պտույտից նրա կենտրոնի շուրջ։ ($G = 6{,}67 \\cdot 10^{-11}$ Ն·մ²/կգ²։)

## Լուծված օրինակներ

**Օրինակ 1։** Յուպիտերը $5{,}2$ ա․մ․ հեռավորության վրա է։ Նրա պարբերությունը Կեպլերի երրորդ օրենքով։

$T = a^{3/2} = 5{,}2^{1{,}5} = \\sqrt{140{,}6} \\approx 11{,}9$ տարի։

**Օրինակ 2։** Գիսաստղի պարբերությունը $76$ տարի է (Հալլեյ)։ Նրա մեծ կիսառանցքը։

$a = T^{2/3} = 76^{2/3} = \\sqrt[3]{5776} \\approx 17{,}9$ ա․մ․։ Նրա պերիհելիումը $0{,}59$ ա․մ․ է, ուստի աֆելիումը $2a - 0{,}59 \\approx 35$ ա․մ․ է՝ Նեպտունից այն կողմ։

**Օրինակ 3։** Արեգակի զանգվածն Երկրի ուղեծրից ($r = 1{,}5 \\cdot 10^{11}$ մ, $T = 3{,}16 \\cdot 10^7$ վ)։

$M = \\dfrac{4\\pi^2 r^3}{G T^2} = \\dfrac{39{,}5 \\cdot 3{,}375 \\cdot 10^{33}}{6{,}67 \\cdot 10^{-11} \\cdot 10^{15}} \\approx 2{,}0 \\cdot 10^{30}$ կգ։

**Օրինակ 4։** Երկրի ուղեծրային արագությունը։

$v = \\dfrac{2\\pi r}{T} = \\dfrac{2\\pi \\cdot 1{,}5 \\cdot 10^{11}}{3{,}16 \\cdot 10^7} \\approx 3 \\cdot 10^4$ մ/վ $= 30$ կմ/վ։

**Օրինակ 5։** Երկրի զանգվածը Լուսնի ուղեծրից ($r = 3{,}84 \\cdot 10^8$ մ, $T = 27{,}3$ օր $= 2{,}36 \\cdot 10^6$ վ)։

$M = \\dfrac{4\\pi^2 (3{,}84 \\cdot 10^8)^3}{6{,}67 \\cdot 10^{-11} \\cdot (2{,}36 \\cdot 10^6)^2} = \\dfrac{39{,}5 \\cdot 5{,}66 \\cdot 10^{25}}{6{,}67 \\cdot 10^{-11} \\cdot 5{,}57 \\cdot 10^{12}} \\approx 6{,}0 \\cdot 10^{24}$ կգ։

**Օրինակ 6։** Հալլեյի գիսաստղը պերիհելիումում ($0{,}59$ ա․մ․) շարժվում է $55$ կմ/վ արագությամբ։ Արագությունն աֆելիումում ($35$ ա․մ․)։

Երկրորդ օրենքով (իմպուլսի մոմենտ)՝ $v_a r_a = v_p r_p$․ $v_a = 55 \\cdot 0{,}59 / 35 \\approx 0{,}93$ կմ/վ։

**Օրինակ 7։** Երկրից $400$ կմ բարձրության վրա արբանյակի պարբերությունը ($R = 6400$ կմ, $g = 10$ մ/վ²)։

$GM = gR^2$, ուստի $T = 2\\pi\\sqrt{\\dfrac{r^3}{gR^2}} = 2\\pi\\sqrt{\\dfrac{(6{,}8 \\cdot 10^6)^3}{10 \\cdot (6{,}4 \\cdot 10^6)^2}} = 2\\pi\\sqrt{\\dfrac{3{,}14 \\cdot 10^{20}}{4{,}1 \\cdot 10^{14}}} \\approx 5500$ վ $\\approx 92$ րոպե։

**Օրինակ 8։** Գեոստացիոնար արբանյակի $T = 24$ ժ։ Նրա ուղեծրի շառավիղը։

$r^3 = \\dfrac{gR^2 T^2}{4\\pi^2} = \\dfrac{10 \\cdot 4{,}1 \\cdot 10^{13} \\cdot (8{,}64 \\cdot 10^4)^2}{39{,}5} = 7{,}75 \\cdot 10^{22}$․ $r \\approx 4{,}2 \\cdot 10^7$ մ, այսինքն՝ մակերևույթից $36\\,000$ կմ բարձր։

## Վարժություններ

1. Ո՞ր մոլորակներն են երկրային, որո՞նք՝ հսկա։ Նշեք խմբերի երկու տարբերություն։
2. Մարսը $1{,}52$ ա․մ․ հեռավորության վրա է։ Գտեք նրա պարբերությունը տարիներով և համեմատեք աղյուսակի հետ։
3. Աստերոիդը պտտվում է $8$ տարի պարբերությամբ։ Որքա՞ն է այն միջինում հեռու Արեգակից։
4. Որտե՞ղ է մոլորակն ամենաարագ շարժվում՝ պերիհելիումո՞ւմ, թե՞ աֆելիումում։ Կեպլերի ո՞ր օրենքն է դա ասում։
5. Երկրի ուղեծրի էքսցենտրիսիտետը $0{,}017$ է․ պերիհելիումը $0{,}983$ ա․մ․։ Գտեք աֆելիումի հեռավորությունը և երկու կետերում արագությունների հարաբերությունը։
6. Յուպիտերի Իո արբանյակը պտտվում է $4{,}22 \\cdot 10^8$ մ հեռավորության վրա $1{,}77$ օր պարբերությամբ։ Գտեք Յուպիտերի զանգվածը։
7. Գտեք Երկրի մակերևույթին հենց մոտ արբանյակի ուղեծրային արագությունն ու պարբերությունը ($R = 6400$ կմ, $g = 10$ մ/վ²)։
8. Արեգակը պտտվում է Գալակտիկայի կենտրոնի շուրջ $r = 2{,}6 \\cdot 10^{20}$ մ հեռավորության վրա $v = 220$ կմ/վ արագությամբ։ Գնահատեք նրա ուղեծրի ներսում եղած զանգվածն արեգակնային զանգվածներով։

### Պատասխաններ

1. Մերկուրի, Վեներա, Երկիր, Մարս․ Յուպիտեր, Սատուրն, Ուրան, Նեպտուն։ Երկրային․ փոքր, քարքարոտ, խիտ, քիչ արբանյակ․ հսկա․ մեծ, գազային կամ սառցե, ցածր խտություն, օղակներ և շատ արբանյակներ։
2. $T = 1{,}52^{1{,}5} \\approx 1{,}87$ տարի։
3. $a = 8^{2/3} = 4$ ա․մ․։
4. Պերիհելիումում․ երկրորդ օրենքը (հավասար մակերեսներ)։
5. Աֆելիումը $2a - r_p = 2 - 0{,}983 = 1{,}017$ ա․մ․․ $v_p / v_a = 1{,}017 / 0{,}983 \\approx 1{,}035$։
6. $M = 4\\pi^2 r^3 / (G T^2) = 39{,}5 \\cdot 7{,}5 \\cdot 10^{25} / (6{,}67 \\cdot 10^{-11} \\cdot (1{,}53 \\cdot 10^5)^2) \\approx 1{,}9 \\cdot 10^{27}$ կգ։
7. $v = \\sqrt{gR} = \\sqrt{10 \\cdot 6{,}4 \\cdot 10^6} = 8$ կմ/վ․ $T = 2\\pi R / v \\approx 5000$ վ $\\approx 84$ րոպե։
8. $M = v^2 r / G = (2{,}2 \\cdot 10^5)^2 \\cdot 2{,}6 \\cdot 10^{20} / 6{,}67 \\cdot 10^{-11} \\approx 1{,}9 \\cdot 10^{41}$ կգ $\\approx 10^{11}$ արեգակնային զանգված։`,
        ru: `## Солнечная система

**Солнце** содержит $99{,}86\\%$ массы системы; всё остальное обращается вокруг него под действием тяготения. Расстояния измеряют в **астрономических единицах**: $1$ а.е. $= 1{,}496 \\cdot 10^{11}$ м, среднее расстояние Земля–Солнце.

| Тело | Расстояние, а.е. | Период | Радиус (Земля = 1) | Масса (Земля = 1) |
|---|---|---|---|---|
| Меркурий | 0,39 | 88 сут | 0,38 | 0,055 |
| Венера | 0,72 | 225 сут | 0,95 | 0,82 |
| Земля | 1,00 | 365,25 сут | 1 | 1 |
| Марс | 1,52 | 1,88 года | 0,53 | 0,11 |
| Юпитер | 5,20 | 11,9 года | 11,2 | 318 |
| Сатурн | 9,54 | 29,5 года | 9,4 | 95 |
| Уран | 19,2 | 84 года | 4,0 | 14,5 |
| Нептун | 30,1 | 165 лет | 3,9 | 17 |

> - Четыре **планеты земной группы** малы, каменисты и плотны ($4$–$5{,}5$ г/см³), с немногими спутниками или без них.
> - Четыре **планеты-гиганта** велики, состоят в основном из водорода и гелия (Юпитер, Сатурн) или льдов (Уран, Нептун), имеют низкую плотность ($0{,}7$–$1{,}7$ г/см³), кольца и десятки спутников.
> - Между Марсом и Юпитером лежит **пояс астероидов**; за Нептуном — **пояс Койпера** с карликовыми планетами Плутоном и Эридой; далеко снаружи — **облако Оорта**, источник долгопериодических **комет**, ледяных тел, отращивающих хвосты при приближении к Солнцу.

Все планеты обращаются почти в одной плоскости и в одном направлении — след вращающегося диска газа и пыли, из которого система образовалась $4{,}6$ миллиарда лет назад.

## Законы Кеплера

По наблюдениям Тихо Браге за Марсом Кеплер нашёл три закона (1609–1619):

> 1. Каждая планета движется по **эллипсу**, в одном из фокусов которого находится Солнце.
> 2. Отрезок от Солнца до планеты за **равные времена заметает равные площади** (поэтому в перигелии, ближайшей точке, планета движется быстрее, а в афелии — медленнее).
> 3. Квадраты периодов пропорциональны кубам больших полуосей: $$\\dfrac{T_1^2}{T_2^2} = \\dfrac{a_1^3}{a_2^3}.$$

Если $T$ в годах, а $a$ в а.е., третий закон для планет Солнца принимает вид $T^2 = a^3$. Второй закон выражает сохранение момента импульса; первый и третий следуют из закона тяготения Ньютона.

## Ньютоновская форма третьего закона

Для круговой орбиты радиуса $r$ вокруг тела массы $M$ тяготение создаёт центростремительную силу:

$$\\dfrac{G M m}{r^2} = \\dfrac{m v^2}{r} \\quad\\Rightarrow\\quad v = \\sqrt{\\dfrac{GM}{r}}, \\qquad T = 2\\pi\\sqrt{\\dfrac{r^3}{GM}}, \\qquad \\dfrac{T^2}{r^3} = \\dfrac{4\\pi^2}{GM}.$$

Поэтому измерение $T$ и $r$ любого спутника даёт **массу центрального тела**: Солнца — по орбите Земли, Земли — по Луне, Юпитера — по его спутникам, Млечного Пути — по обращению Солнца вокруг его центра. ($G = 6{,}67 \\cdot 10^{-11}$ Н·м²/кг².)

## Разобранные примеры

**Пример 1.** Юпитер находится на $5{,}2$ а.е. Его период по третьему закону Кеплера?

$T = a^{3/2} = 5{,}2^{1{,}5} = \\sqrt{140{,}6} \\approx 11{,}9$ года.

**Пример 2.** Период кометы $76$ лет (Галлея). Её большая полуось?

$a = T^{2/3} = 76^{2/3} = \\sqrt[3]{5776} \\approx 17{,}9$ а.е. Перигелий $0{,}59$ а.е., значит афелий $2a - 0{,}59 \\approx 35$ а.е., за Нептуном.

**Пример 3.** Масса Солнца по орбите Земли ($r = 1{,}5 \\cdot 10^{11}$ м, $T = 3{,}16 \\cdot 10^7$ с).

$M = \\dfrac{4\\pi^2 r^3}{G T^2} = \\dfrac{39{,}5 \\cdot 3{,}375 \\cdot 10^{33}}{6{,}67 \\cdot 10^{-11} \\cdot 10^{15}} \\approx 2{,}0 \\cdot 10^{30}$ кг.

**Пример 4.** Орбитальная скорость Земли.

$v = \\dfrac{2\\pi r}{T} = \\dfrac{2\\pi \\cdot 1{,}5 \\cdot 10^{11}}{3{,}16 \\cdot 10^7} \\approx 3 \\cdot 10^4$ м/с $= 30$ км/с.

**Пример 5.** Масса Земли по орбите Луны ($r = 3{,}84 \\cdot 10^8$ м, $T = 27{,}3$ сут $= 2{,}36 \\cdot 10^6$ с).

$M = \\dfrac{4\\pi^2 (3{,}84 \\cdot 10^8)^3}{6{,}67 \\cdot 10^{-11} \\cdot (2{,}36 \\cdot 10^6)^2} = \\dfrac{39{,}5 \\cdot 5{,}66 \\cdot 10^{25}}{6{,}67 \\cdot 10^{-11} \\cdot 5{,}57 \\cdot 10^{12}} \\approx 6{,}0 \\cdot 10^{24}$ кг.

**Пример 6.** Комета Галлея в перигелии ($0{,}59$ а.е.) движется со скоростью $55$ км/с. Скорость в афелии ($35$ а.е.)?

По второму закону (момент импульса) $v_a r_a = v_p r_p$: $v_a = 55 \\cdot 0{,}59 / 35 \\approx 0{,}93$ км/с.

**Пример 7.** Период спутника на высоте $400$ км над Землёй ($R = 6400$ км, $g = 10$ м/с²).

$GM = gR^2$, значит $T = 2\\pi\\sqrt{\\dfrac{r^3}{gR^2}} = 2\\pi\\sqrt{\\dfrac{(6{,}8 \\cdot 10^6)^3}{10 \\cdot (6{,}4 \\cdot 10^6)^2}} = 2\\pi\\sqrt{\\dfrac{3{,}14 \\cdot 10^{20}}{4{,}1 \\cdot 10^{14}}} \\approx 5500$ с $\\approx 92$ минуты.

**Пример 8.** У геостационарного спутника $T = 24$ ч. Радиус его орбиты?

$r^3 = \\dfrac{gR^2 T^2}{4\\pi^2} = \\dfrac{10 \\cdot 4{,}1 \\cdot 10^{13} \\cdot (8{,}64 \\cdot 10^4)^2}{39{,}5} = 7{,}75 \\cdot 10^{22}$; $r \\approx 4{,}2 \\cdot 10^7$ м, то есть $36\\,000$ км над поверхностью.

## Упражнения

1. Какие планеты относятся к земной группе, а какие — к гигантам? Назовите два различия между группами.
2. Марс находится на $1{,}52$ а.е. Найдите его период в годах и сравните с таблицей.
3. Астероид обращается с периодом $8$ лет. Как далеко в среднем он от Солнца?
4. Где планета движется быстрее всего, в перигелии или афелии? Какой закон Кеплера это утверждает?
5. Эксцентриситет орбиты Земли $0{,}017$; перигелий $0{,}983$ а.е. Найдите расстояние в афелии и отношение скоростей в двух точках.
6. Спутник Юпитера Ио обращается на расстоянии $4{,}22 \\cdot 10^8$ м с периодом $1{,}77$ сут. Найдите массу Юпитера.
7. Найдите орбитальную скорость и период спутника у самой поверхности Земли ($R = 6400$ км, $g = 10$ м/с²).
8. Солнце обращается вокруг центра Галактики на расстоянии $r = 2{,}6 \\cdot 10^{20}$ м со скоростью $v = 220$ км/с. Оцените массу внутри его орбиты в массах Солнца.

### Ответы

1. Меркурий, Венера, Земля, Марс; Юпитер, Сатурн, Уран, Нептун. Земная группа: малые, каменистые, плотные, мало спутников; гиганты: большие, газовые или ледяные, низкая плотность, кольца и много спутников.
2. $T = 1{,}52^{1{,}5} \\approx 1{,}87$ года.
3. $a = 8^{2/3} = 4$ а.е.
4. В перигелии; второй закон (равных площадей).
5. Афелий $2a - r_p = 2 - 0{,}983 = 1{,}017$ а.е.; $v_p / v_a = 1{,}017 / 0{,}983 \\approx 1{,}035$.
6. $M = 4\\pi^2 r^3 / (G T^2) = 39{,}5 \\cdot 7{,}5 \\cdot 10^{25} / (6{,}67 \\cdot 10^{-11} \\cdot (1{,}53 \\cdot 10^5)^2) \\approx 1{,}9 \\cdot 10^{27}$ кг.
7. $v = \\sqrt{gR} = \\sqrt{10 \\cdot 6{,}4 \\cdot 10^6} = 8$ км/с; $T = 2\\pi R / v \\approx 5000$ с $\\approx 84$ мин.
8. $M = v^2 r / G = (2{,}2 \\cdot 10^5)^2 \\cdot 2{,}6 \\cdot 10^{20} / 6{,}67 \\cdot 10^{-11} \\approx 1{,}9 \\cdot 10^{41}$ кг $\\approx 10^{11}$ масс Солнца.`,
      },
      [
        q(t("The giant planets are…", "Հսկա մոլորակներն են…", "Планеты-гиганты — это…"), [t("Jupiter, Saturn, Uranus, Neptune", "Յուպիտեր, Սատուրն, Ուրան, Նեպտուն", "Юпитер, Сатурн, Уран, Нептун"), t("Mercury, Venus, Earth, Mars", "Մերկուրի, Վեներա, Երկիր, Մարս", "Меркурий, Венера, Земля, Марс"), t("Pluto and Eris", "Պլուտոն և Էրիդա", "Плутон и Эрида")], 0),
        q(t("According to Kepler's first law, planets move on…", "Կեպլերի առաջին օրենքի համաձայն՝ մոլորակները շարժվում են…", "По первому закону Кеплера планеты движутся по…"), [t("ellipses with the Sun at a focus", "էլիպսներով, որոնց կիզակետում Արեգակն է", "эллипсам с Солнцем в фокусе"), t("circles centred on the Sun", "Արեգակը կենտրոն ունեցող շրջանագծերով", "окружностям с центром в Солнце"), t("straight lines", "ուղիղ գծերով", "прямым")], 0),
        q(t("A planet moves fastest at…", "Մոլորակն ամենաարագ շարժվում է…", "Планета движется быстрее всего в…"), [t("perihelion", "պերիհելիումում", "перигелии"), t("aphelion", "աֆելիումում", "афелии"), t("the same speed everywhere", "ամենուր նույն արագությամբ", "везде одинаково")], 0),
        q(t("Kepler's third law states that T² is proportional to…", "Կեպլերի երրորդ օրենքն ասում է, որ T²-ն համեմատական է…", "Третий закон Кеплера утверждает, что T² пропорционален…"), [t("a³", "a³-ին", "a³"), t("a²", "a²-ին", "a²"), t("a", "a-ին", "a")], 0),
        q(t("A planet at 4 AU from the Sun has a period of…", "Արեգակից 4 ա․մ․ հեռավորության վրա գտնվող մոլորակի պարբերությունն է…", "Планета на расстоянии 4 а.е. от Солнца имеет период…"), [t("8 years", "8 տարի", "8 лет"), t("4 years", "4 տարի", "4 года"), t("16 years", "16 տարի", "16 лет")], 0),
        q(t("The mass of the Sun can be found from…", "Արեգակի զանգվածը կարելի է գտնել…", "Массу Солнца можно найти по…"), [t("the period and radius of a planet's orbit", "մոլորակի ուղեծրի պարբերությունից և շառավղից", "периоду и радиусу орбиты планеты"), t("its colour", "նրա գույնից", "его цвету"), t("the number of sunspots", "արևաբծերի թվից", "числу солнечных пятен")], 0),
      ],
    ),
    lesson(
      "sun-stars",
      ["The Sun; stars: classification and evolution", "Արև, աստղեր․ դասակարգում և էվոլյուցիա", "Солнце; звёзды: классификация и эволюция"],
      {
        en: ["Describe the structure of the Sun (core, radiative and convective zones, photosphere, chromosphere, corona) and its activity", "Classify stars by temperature, luminosity and spectral class and read the Hertzsprung–Russell diagram", "Trace the evolution of stars of different masses: main sequence, red giant, white dwarf, supernova, neutron star, black hole"],
        hy: ["Նկարագրել Արեգակի կառուցվածքը (միջուկ, ճառագայթային և կոնվեկտիվ գոտիներ, ֆոտոսֆերա, քրոմոսֆերա, պսակ) և նրա ակտիվությունը", "Դասակարգել աստղերն ըստ ջերմաստիճանի, լուսատվության և սպեկտրային դասի և կարդալ Հերցշպրունգ-Ռասելի դիագրամը", "Հետևել տարբեր զանգվածի աստղերի էվոլյուցիային․ գլխավոր հաջորդականություն, կարմիր հսկա, սպիտակ թզուկ, գերնոր, նեյտրոնային աստղ, սև խոռոչ"],
        ru: ["Описывать строение Солнца (ядро, зоны лучистого переноса и конвекции, фотосфера, хромосфера, корона) и его активность", "Классифицировать звёзды по температуре, светимости и спектральному классу и читать диаграмму Герцшпрунга–Рассела", "Прослеживать эволюцию звёзд разной массы: главная последовательность, красный гигант, белый карлик, сверхновая, нейтронная звезда, чёрная дыра"],
      },
      {
        en: `## The Sun

The Sun is an ordinary star: a ball of plasma of radius $7 \\cdot 10^8$ m ($109$ Earths), mass $2 \\cdot 10^{30}$ kg, luminosity $3{.}8 \\cdot 10^{26}$ W, surface temperature $5800$ K, composition $73\\%$ hydrogen, $25\\%$ helium by mass. Its structure from the centre out:

| Layer | Extent | What happens |
|---|---|---|
| Core | $0$–$0{.}25\\,R$ | fusion at $1{.}5 \\cdot 10^7$ K and $150$ g/cm³ |
| Radiative zone | $0{.}25$–$0{.}7\\,R$ | energy diffuses outward as photons over $10^5$ years |
| Convective zone | $0{.}7$–$1\\,R$ | hot gas rises, cool gas sinks (granulation) |
| Photosphere | $\\approx 500$ km thick | the visible "surface", $5800$ K, sunspots |
| Chromosphere | $\\approx 2000$ km | reddish layer seen in eclipses, $10^4$ K |
| Corona | millions of km | thin gas at $10^6$ K, source of the solar wind |

**Solar activity** follows an $11$-year cycle: **sunspots** are cooler ($4000$ K) regions of strong magnetic field; **flares** and **coronal mass ejections** throw charged particles into space, which cause auroras and magnetic storms that can disturb satellites and power grids. The Sun is about $4{.}6$ billion years old and will stay on the main sequence for another $5$ billion years.

## Describing stars

> - **Luminosity** $L$: total power radiated. **Apparent brightness** depends on distance: $E = \\dfrac{L}{4\\pi r^2}$. Astronomers use **magnitudes**: a difference of $5$ magnitudes is a factor $100$ in brightness; the brightest stars are of magnitude $0$ or negative, the faintest naked-eye stars $+6$.
> - **Surface temperature** from colour: Wien's law $\\lambda_{\\max} T = 2{.}9 \\cdot 10^{-3}$ m·K. Blue stars are hot ($30\\,000$ K), red stars cool ($3000$ K).
> - **Spectral classes** in order of falling temperature: O, B, A, F, G, K, M ("Oh Be A Fine Girl, Kiss Me"). The Sun is G2.
> - **Radius** from the Stefan–Boltzmann law: $L = 4\\pi R^2 \\sigma T^4$, $\\sigma = 5{.}67 \\cdot 10^{-8}$ W/(m²·K⁴).
> - **Distance** of nearby stars by **parallax**: the shift of position as the Earth orbits; $1$ parsec $= 3{.}26$ light-years is the distance at which the parallax is one arcsecond. The nearest star, Proxima Centauri, is $4{.}2$ light-years away.

## The Hertzsprung–Russell diagram

Plotting luminosity against temperature (decreasing to the right), stars do not scatter at random:

> - About $90\\%$ lie on the **main sequence**, a diagonal band from hot bright blue stars at the top left to cool dim red dwarfs at the bottom right. These stars burn hydrogen in their cores; the position is set by the mass, from $0{.}08$ to about $100$ solar masses.
> - **Red giants and supergiants** at the top right: cool but enormous ($R$ up to $1000$ solar radii), so very luminous.
> - **White dwarfs** at the bottom left: hot but tiny (Earth-sized), so faint.

The more massive a main-sequence star, the hotter, the more luminous ($L \\propto M^{3{.}5}$) and the shorter-lived: a $20$-solar-mass star burns out in $10$ million years, the Sun lasts $10$ billion, a red dwarf trillions.

## Stellar evolution

Stars form when a cloud of gas and dust collapses under gravity until the core reaches $10^7$ K and fusion begins. What happens later depends on the mass:

> **Sun-like stars ($< 8$ solar masses).** When the core hydrogen is exhausted, the core contracts, the envelope expands and cools: a **red giant** (the Sun will swallow Mercury and Venus). Helium burns to carbon and oxygen; then the envelope is blown off as a **planetary nebula**, and the carbon–oxygen core remains as a **white dwarf**, supported by electron degeneracy pressure, of about $1$ solar mass in an Earth-sized volume (density $10^6$ g/cm³), slowly cooling for ever. Chandrasekhar's limit: a white dwarf cannot exceed $1{.}4$ solar masses.
>
> **Massive stars ($> 8$ solar masses).** Fusion proceeds through carbon, neon, oxygen and silicon up to iron, which releases no energy. The iron core collapses in a second, and the rebound blows the star apart as a **supernova** of type II, briefly outshining its galaxy and scattering the heavy elements. The core becomes a **neutron star** (mass $1{.}4$–$3$ solar, radius $10$ km, density $10^{14}$ g/cm³, often seen as a **pulsar** rotating up to hundreds of times per second) or, above about $3$ solar masses, a **black hole**, whose gravity lets nothing escape from inside the Schwarzschild radius $R_s = 2GM/c^2$.

Everything heavier than helium in the Universe, including the carbon and oxygen in our bodies, was made inside stars and spread by supernovae.

## Worked examples

**Example 1.** Temperature of a star whose spectrum peaks at $\\lambda = 290$ nm.

$T = \\dfrac{2{.}9 \\cdot 10^{-3}}{2{.}9 \\cdot 10^{-7}} = 10\\,000$ K, a white star of class A (like Sirius).

**Example 2.** Peak wavelength of the Sun ($5800$ K).

$\\lambda = 2{.}9 \\cdot 10^{-3} / 5800 = 5 \\cdot 10^{-7}$ m $= 500$ nm, green-yellow, in the middle of the visible range: our eyes evolved for sunlight.

**Example 3.** Check the Sun's luminosity from its radius and temperature.

$L = 4\\pi (7 \\cdot 10^8)^2 \\cdot 5{.}67 \\cdot 10^{-8} \\cdot 5800^4 = 6{.}16 \\cdot 10^{18} \\cdot 5{.}67 \\cdot 10^{-8} \\cdot 1{.}13 \\cdot 10^{15} \\approx 3{.}9 \\cdot 10^{26}$ W.

**Example 4.** Betelgeuse has $T = 3500$ K and $L = 10^5$ solar luminosities. Its radius in solar radii?

$R/R_\\odot = \\sqrt{L/L_\\odot} \\cdot (T_\\odot/T)^2 = \\sqrt{10^5} \\cdot (5800/3500)^2 = 316 \\cdot 2{.}75 \\approx 870$. Placed at the Sun, it would reach past Mars.

**Example 5.** Solar constant: the Sun's power per square metre at the Earth.

$E = \\dfrac{L}{4\\pi r^2} = \\dfrac{3{.}8 \\cdot 10^{26}}{4\\pi (1{.}5 \\cdot 10^{11})^2} = \\dfrac{3{.}8 \\cdot 10^{26}}{2{.}83 \\cdot 10^{23}} \\approx 1340$ W/m².

**Example 6.** A star has parallax $0{.}1$ arcsecond. Its distance?

$d = 1/0{.}1 = 10$ parsecs $= 32{.}6$ light-years.

**Example 7.** Schwarzschild radius of a black hole of $10$ solar masses.

$R_s = \\dfrac{2GM}{c^2} = \\dfrac{2 \\cdot 6{.}67 \\cdot 10^{-11} \\cdot 2 \\cdot 10^{31}}{9 \\cdot 10^{16}} \\approx 3 \\cdot 10^4$ m $= 30$ km. For the Sun it would be $3$ km; for the Earth $9$ mm.

**Example 8.** Density of a neutron star of $1{.}4$ solar masses and radius $10$ km.

$\\rho = \\dfrac{M}{\\frac{4}{3}\\pi R^3} = \\dfrac{2{.}8 \\cdot 10^{30}}{4{.}19 \\cdot 10^{12}} \\approx 7 \\cdot 10^{17}$ kg/m³, the density of an atomic nucleus; a teaspoon would weigh a billion tonnes.

## Exercises

1. Name the layers of the Sun from the centre outward and say where its energy is produced.
2. What are sunspots, and why are they dark? How long is the solar cycle?
3. A star's spectrum peaks at $725$ nm. Find its temperature and spectral class.
4. Sirius has $T = 9900$ K and $L = 25$ solar luminosities. Find its radius in solar radii.
5. Where on the H–R diagram are the Sun, a red giant and a white dwarf? Why do most stars lie on the main sequence?
6. Why does a massive star live much shorter than the Sun although it has more fuel?
7. Describe the end of the Sun's life and the end of a $20$-solar-mass star.
8. Find the Schwarzschild radius of the black hole at the centre of our Galaxy ($4 \\cdot 10^6$ solar masses) and compare it with the Earth's orbit.

### Answers

1. Core, radiative zone, convective zone, photosphere, chromosphere, corona; energy is produced by fusion in the core.
2. Regions of strong magnetic field that are cooler ($4000$ K) than the surrounding photosphere, so they look dark by contrast; $11$ years.
3. $T = 2{.}9 \\cdot 10^{-3} / 7{.}25 \\cdot 10^{-7} = 4000$ K, class K.
4. $R/R_\\odot = \\sqrt{25} \\cdot (5800/9900)^2 = 5 \\cdot 0{.}343 \\approx 1{.}7$.
5. Sun: middle of the main sequence; red giant: top right; white dwarf: bottom left. Hydrogen burning is the longest stage, so most stars are caught in it.
6. Its luminosity grows as $M^{3{.}5}$, so it burns its fuel far faster: lifetime $\\propto M / L \\propto M^{-2{.}5}$.
7. Sun: red giant, planetary nebula, white dwarf. Massive star: supergiant, fusion to iron, core collapse, supernova, neutron star or black hole.
8. $R_s = 2 \\cdot 6{.}67 \\cdot 10^{-11} \\cdot 8 \\cdot 10^{36} / 9 \\cdot 10^{16} \\approx 1{.}2 \\cdot 10^{10}$ m, about $0{.}08$ AU, well inside Mercury's orbit.`,
        hy: `## Արեգակը

Արեգակը սովորական աստղ է․ $7 \\cdot 10^8$ մ ($109$ Երկիր) շառավղով պլազմայի գունդ, զանգվածը $2 \\cdot 10^{30}$ կգ, լուսատվությունը $3{,}8 \\cdot 10^{26}$ Վտ, մակերևույթի ջերմաստիճանը $5800$ Կ, բաղադրությունն ըստ զանգվածի՝ $73\\%$ ջրածին, $25\\%$ հելիում։ Կառուցվածքը կենտրոնից դեպի դուրս․

| Շերտ | Տարածում | Ինչ է կատարվում |
|---|---|---|
| Միջուկ | $0$–$0{,}25\\,R$ | սինթեզ $1{,}5 \\cdot 10^7$ Կ-ում և $150$ գ/սմ³ խտությամբ |
| Ճառագայթային գոտի | $0{,}25$–$0{,}7\\,R$ | էներգիան ֆոտոնների տեսքով $10^5$ տարում դիֆուզիայով դուրս է գալիս |
| Կոնվեկտիվ գոտի | $0{,}7$–$1\\,R$ | տաք գազը բարձրանում է, սառը՝ իջնում (գրանուլացիա) |
| Ֆոտոսֆերա | $\\approx 500$ կմ հաստությամբ | տեսանելի «մակերևույթը», $5800$ Կ, արևաբծեր |
| Քրոմոսֆերա | $\\approx 2000$ կմ | խավարումների ժամանակ երևացող կարմրավուն շերտ, $10^4$ Կ |
| Պսակ | միլիոնավոր կմ | նոսր գազ $10^6$ Կ-ում, արեգակնային քամու աղբյուր |

**Արեգակնային ակտիվությունն** ունի $11$-ամյա ցիկլ․ **արևաբծերն** ուժեղ մագնիսական դաշտի ավելի սառը ($4000$ Կ) տիրույթներ են․ **բռնկումները** և **պսակային զանգվածի արտանետումները** լիցքավորված մասնիկներ են նետում տիեզերք, որոնք առաջացնում են բևեռափայլեր և մագնիսական փոթորիկներ, որոնք կարող են խանգարել արբանյակներին և էլեկտրացանցերին։ Արեգակը մոտ $4{,}6$ միլիարդ տարեկան է և գլխավոր հաջորդականության վրա կմնա ևս $5$ միլիարդ տարի։

## Աստղերի նկարագրություն

> - **Լուսատվություն** $L$․ ճառագայթված լրիվ հզորությունը։ **Տեսանելի պայծառությունը** կախված է հեռավորությունից․ $E = \\dfrac{L}{4\\pi r^2}$։ Աստղագետներն օգտագործում են **աստղային մեծություններ**․ $5$ մեծության տարբերությունը պայծառության $100$ անգամ տարբերություն է․ ամենապայծառ աստղերը $0$ կամ բացասական մեծության են, անզեն աչքով տեսանելի ամենաթույլը՝ $+6$։
> - **Մակերևույթի ջերմաստիճանը** գույնից․ Վինի օրենքը $\\lambda_{\\max} T = 2{,}9 \\cdot 10^{-3}$ մ·Կ։ Կապույտ աստղերը տաք են ($30\\,000$ Կ), կարմիրները՝ սառը ($3000$ Կ)։
> - **Սպեկտրային դասերը** ջերմաստիճանի նվազման կարգով․ O, B, A, F, G, K, M։ Արեգակը G2 է։
> - **Շառավիղը** Ստեֆան-Բոլցմանի օրենքից․ $L = 4\\pi R^2 \\sigma T^4$, $\\sigma = 5{,}67 \\cdot 10^{-8}$ Վտ/(մ²·Կ⁴)։
> - Մոտակա աստղերի **հեռավորությունը** **պարալաքսով**․ դիրքի տեղաշարժն Երկրի պտույտի ընթացքում․ $1$ պարսեկ $= 3{,}26$ լուսային տարի այն հեռավորությունն է, որի դեպքում պարալաքսը մեկ աղեղնային վայրկյան է։ Ամենամոտ աստղը՝ Պրոքսիմա Կենտավրոսը, $4{,}2$ լուսային տարի հեռու է։

## Հերցշպրունգ-Ռասելի դիագրամ

Լուսատվությունն ըստ ջերմաստիճանի (դեպի աջ նվազող) պատկերելիս աստղերը պատահականորեն չեն ցրվում․

> - Մոտ $90\\%$-ը գտնվում է **գլխավոր հաջորդականության** վրա՝ անկյունագծային շերտ վերևի ձախի տաք պայծառ կապույտ աստղերից մինչև ներքևի աջի սառը թույլ կարմիր թզուկներ։ Այս աստղերը միջուկում ջրածին են այրում․ դիրքը որոշվում է զանգվածով՝ $0{,}08$-ից մինչև մոտ $100$ արեգակնային զանգված։
> - **Կարմիր հսկաներն ու գերհսկաները** վերևի աջում․ սառն են, բայց հսկայական ($R$ մինչև $1000$ արեգակնային շառավիղ), ուստի շատ լուսատու։
> - **Սպիտակ թզուկները** ներքևի ձախում․ տաք են, բայց փոքրիկ (Երկրի չափ), ուստի թույլ։

Որքան զանգվածեղ է գլխավոր հաջորդականության աստղը, այնքան տաք է, լուսատու ($L \\propto M^{3{,}5}$) և կարճակյաց․ $20$ արեգակնային զանգվածով աստղն այրվում է $10$ միլիոն տարում, Արեգակը տևում է $10$ միլիարդ, կարմիր թզուկը՝ տրիլիոններ։

## Աստղերի էվոլյուցիա

Աստղերն առաջանում են, երբ գազի և փոշու ամպը ձգողականության ազդեցությամբ սեղմվում է, մինչև միջուկը հասնի $10^7$ Կ-ի և սկսվի սինթեզը։ Հետագան կախված է զանգվածից․

> **Արեգակնանման աստղեր ($< 8$ արեգակնային զանգված)։** Երբ միջուկի ջրածինը սպառվում է, միջուկը սեղմվում է, թաղանթն ընդարձակվում և սառչում է․ **կարմիր հսկա** (Արեգակը կկլանի Մերկուրին և Վեներան)։ Հելիումն այրվում է ածխածնի և թթվածնի․ ապա թաղանթը ցրվում է որպես **մոլորակային միգամածություն**, և ածխածին-թթվածնային միջուկը մնում է որպես **սպիտակ թզուկ**, որը պահում է էլեկտրոնային այլասերված գազի ճնշումը, մոտ $1$ արեգակնային զանգված Երկրի չափ ծավալում (խտությունը $10^6$ գ/սմ³), որը դանդաղ սառչում է հավերժ։ Չանդրասեկարի սահմանը․ սպիտակ թզուկը չի կարող գերազանցել $1{,}4$ արեգակնային զանգվածը։
>
> **Զանգվածեղ աստղեր ($> 8$ արեգակնային զանգված)։** Սինթեզն ընթանում է ածխածնով, նեոնով, թթվածնով և սիլիցիումով մինչև երկաթ, որն էներգիա չի անջատում։ Երկաթե միջուկը սեղմվում է մեկ վայրկյանում, և հետհարվածն աստղը ցրում է որպես II տիպի **գերնոր**, որը կարճ ժամանակով գերազանցում է իր գալակտիկայի պայծառությունը և ցրում ծանր տարրերը։ Միջուկը դառնում է **նեյտրոնային աստղ** (զանգվածը $1{,}4$–$3$ արեգակնային, շառավիղը $10$ կմ, խտությունը $10^{14}$ գ/սմ³, հաճախ երևում է որպես **պուլսար**, որը պտտվում է վայրկյանում մինչև հարյուրավոր անգամ) կամ մոտ $3$ արեգակնային զանգվածից բարձր՝ **սև խոռոչ**, որի ձգողականությունը ոչնչի թույլ չի տալիս դուրս գալ Շվարցշիլդի շառավղի $R_s = 2GM/c^2$ ներսից։

Տիեզերքում հելիումից ծանր ամեն ինչ, ներառյալ մեր մարմնի ածխածինն ու թթվածինը, ստեղծվել է աստղերի ներսում և ցրվել գերնորերով։

## Լուծված օրինակներ

**Օրինակ 1։** Աստղի ջերմաստիճանը, որի սպեկտրի առավելագույնը $\\lambda = 290$ նմ-ում է։

$T = \\dfrac{2{,}9 \\cdot 10^{-3}}{2{,}9 \\cdot 10^{-7}} = 10\\,000$ Կ, A դասի սպիտակ աստղ (ինչպես Սիրիուսը)։

**Օրինակ 2։** Արեգակի ($5800$ Կ) սպեկտրի առավելագույնի ալիքի երկարությունը։

$\\lambda = 2{,}9 \\cdot 10^{-3} / 5800 = 5 \\cdot 10^{-7}$ մ $= 500$ նմ, կանաչադեղին, տեսանելի տիրույթի մեջտեղում․ մեր աչքերը զարգացել են արևի լույսի համար։

**Օրինակ 3։** Ստուգեք Արեգակի լուսատվությունը նրա շառավղից և ջերմաստիճանից։

$L = 4\\pi (7 \\cdot 10^8)^2 \\cdot 5{,}67 \\cdot 10^{-8} \\cdot 5800^4 = 6{,}16 \\cdot 10^{18} \\cdot 5{,}67 \\cdot 10^{-8} \\cdot 1{,}13 \\cdot 10^{15} \\approx 3{,}9 \\cdot 10^{26}$ Վտ։

**Օրինակ 4։** Բեթելգեյզն ունի $T = 3500$ Կ և $L = 10^5$ արեգակնային լուսատվություն։ Շառավիղն արեգակնային շառավիղներով։

$R/R_\\odot = \\sqrt{L/L_\\odot} \\cdot (T_\\odot/T)^2 = \\sqrt{10^5} \\cdot (5800/3500)^2 = 316 \\cdot 2{,}75 \\approx 870$։ Արեգակի տեղում դրված այն կհասներ Մարսից այն կողմ։

**Օրինակ 5։** Արեգակնային հաստատունը․ Արեգակի հզորությունը մեկ քառակուսի մետրին Երկրի մոտ։

$E = \\dfrac{L}{4\\pi r^2} = \\dfrac{3{,}8 \\cdot 10^{26}}{4\\pi (1{,}5 \\cdot 10^{11})^2} = \\dfrac{3{,}8 \\cdot 10^{26}}{2{,}83 \\cdot 10^{23}} \\approx 1340$ Վտ/մ²։

**Օրինակ 6։** Աստղի պարալաքսը $0{,}1$ աղեղնային վայրկյան է։ Հեռավորությո՞ւնը։

$d = 1/0{,}1 = 10$ պարսեկ $= 32{,}6$ լուսային տարի։

**Օրինակ 7։** $10$ արեգակնային զանգվածով սև խոռոչի Շվարցշիլդի շառավիղը։

$R_s = \\dfrac{2GM}{c^2} = \\dfrac{2 \\cdot 6{,}67 \\cdot 10^{-11} \\cdot 2 \\cdot 10^{31}}{9 \\cdot 10^{16}} \\approx 3 \\cdot 10^4$ մ $= 30$ կմ։ Արեգակի համար այն $3$ կմ կլիներ, Երկրի համար՝ $9$ մմ։

**Օրինակ 8։** $1{,}4$ արեգակնային զանգվածով և $10$ կմ շառավղով նեյտրոնային աստղի խտությունը։

$\\rho = \\dfrac{M}{\\frac{4}{3}\\pi R^3} = \\dfrac{2{,}8 \\cdot 10^{30}}{4{,}19 \\cdot 10^{12}} \\approx 7 \\cdot 10^{17}$ կգ/մ³, ատոմի միջուկի խտությունը․ մեկ թեյի գդալը մեկ միլիարդ տոննա կկշռեր։

## Վարժություններ

1. Անվանեք Արեգակի շերտերը կենտրոնից դեպի դուրս և ասեք, թե որտեղ է արտադրվում նրա էներգիան։
2. Ի՞նչ են արևաբծերը, և ինչո՞ւ են մուգ։ Որքա՞ն է արեգակնային ցիկլը։
3. Աստղի սպեկտրի առավելագույնը $725$ նմ-ում է։ Գտեք նրա ջերմաստիճանը և սպեկտրային դասը։
4. Սիրիուսն ունի $T = 9900$ Կ և $L = 25$ արեգակնային լուսատվություն։ Գտեք նրա շառավիղն արեգակնային շառավիղներով։
5. Որտե՞ղ են Հ-Ռ դիագրամի վրա Արեգակը, կարմիր հսկան և սպիտակ թզուկը։ Ինչո՞ւ են աստղերի մեծ մասը գլխավոր հաջորդականության վրա։
6. Ինչո՞ւ է զանգվածեղ աստղն ապրում Արեգակից շատ ավելի քիչ, թեև ավելի շատ վառելիք ունի։
7. Նկարագրեք Արեգակի կյանքի և $20$ արեգակնային զանգվածով աստղի կյանքի ավարտը։
8. Գտեք մեր Գալակտիկայի կենտրոնի սև խոռոչի ($4 \\cdot 10^6$ արեգակնային զանգված) Շվարցշիլդի շառավիղը և համեմատեք Երկրի ուղեծրի հետ։

### Պատասխաններ

1. Միջուկ, ճառագայթային գոտի, կոնվեկտիվ գոտի, ֆոտոսֆերա, քրոմոսֆերա, պսակ․ էներգիան արտադրվում է միջուկում սինթեզով։
2. Ուժեղ մագնիսական դաշտի տիրույթներ, որոնք շրջապատող ֆոտոսֆերայից ավելի սառն են ($4000$ Կ), ուստի հակադրությամբ մուգ են երևում․ $11$ տարի։
3. $T = 2{,}9 \\cdot 10^{-3} / 7{,}25 \\cdot 10^{-7} = 4000$ Կ, K դաս։
4. $R/R_\\odot = \\sqrt{25} \\cdot (5800/9900)^2 = 5 \\cdot 0{,}343 \\approx 1{,}7$։
5. Արեգակ․ գլխավոր հաջորդականության մեջտեղում․ կարմիր հսկա․ վերևի աջում․ սպիտակ թզուկ․ ներքևի ձախում։ Ջրածնի այրումն ամենաերկար փուլն է, ուստի աստղերի մեծ մասն այդ փուլում է։
6. Նրա լուսատվությունն աճում է որպես $M^{3{,}5}$, ուստի վառելիքը շատ ավելի արագ է այրում․ կյանքի տևողությունը $\\propto M / L \\propto M^{-2{,}5}$։
7. Արեգակ․ կարմիր հսկա, մոլորակային միգամածություն, սպիտակ թզուկ։ Զանգվածեղ աստղ․ գերհսկա, սինթեզ մինչև երկաթ, միջուկի փլուզում, գերնոր, նեյտրոնային աստղ կամ սև խոռոչ։
8. $R_s = 2 \\cdot 6{,}67 \\cdot 10^{-11} \\cdot 8 \\cdot 10^{36} / 9 \\cdot 10^{16} \\approx 1{,}2 \\cdot 10^{10}$ մ, մոտ $0{,}08$ ա․մ․, Մերկուրիի ուղեծրից շատ ներս։`,
        ru: `## Солнце

Солнце — обычная звезда: шар плазмы радиусом $7 \\cdot 10^8$ м ($109$ Земель), массой $2 \\cdot 10^{30}$ кг, светимостью $3{,}8 \\cdot 10^{26}$ Вт, с температурой поверхности $5800$ К и составом по массе $73\\%$ водорода, $25\\%$ гелия. Его строение от центра наружу:

| Слой | Протяжённость | Что происходит |
|---|---|---|
| Ядро | $0$–$0{,}25\\,R$ | синтез при $1{,}5 \\cdot 10^7$ К и $150$ г/см³ |
| Зона лучистого переноса | $0{,}25$–$0{,}7\\,R$ | энергия диффундирует наружу в виде фотонов за $10^5$ лет |
| Конвективная зона | $0{,}7$–$1\\,R$ | горячий газ поднимается, холодный опускается (грануляция) |
| Фотосфера | $\\approx 500$ км толщиной | видимая «поверхность», $5800$ К, пятна |
| Хромосфера | $\\approx 2000$ км | красноватый слой, видимый при затмениях, $10^4$ К |
| Корона | миллионы км | разреженный газ при $10^6$ К, источник солнечного ветра |

**Солнечная активность** следует $11$-летнему циклу: **пятна** — более холодные ($4000$ К) области сильного магнитного поля; **вспышки** и **корональные выбросы массы** выбрасывают в космос заряженные частицы, вызывающие полярные сияния и магнитные бури, способные нарушить работу спутников и электросетей. Солнцу около $4{,}6$ миллиарда лет, и на главной последовательности оно пробудет ещё $5$ миллиардов.

## Описание звёзд

> - **Светимость** $L$: полная излучаемая мощность. **Видимая яркость** зависит от расстояния: $E = \\dfrac{L}{4\\pi r^2}$. Астрономы используют **звёздные величины**: разность в $5$ величин — это отличие яркости в $100$ раз; ярчайшие звёзды имеют величину $0$ или отрицательную, самые слабые видимые глазом — $+6$.
> - **Температура поверхности** по цвету: закон Вина $\\lambda_{\\max} T = 2{,}9 \\cdot 10^{-3}$ м·К. Голубые звёзды горячие ($30\\,000$ К), красные холодные ($3000$ К).
> - **Спектральные классы** в порядке убывания температуры: O, B, A, F, G, K, M. Солнце — G2.
> - **Радиус** по закону Стефана–Больцмана: $L = 4\\pi R^2 \\sigma T^4$, $\\sigma = 5{,}67 \\cdot 10^{-8}$ Вт/(м²·К⁴).
> - **Расстояние** до ближних звёзд по **параллаксу**: смещению положения при обращении Земли; $1$ парсек $= 3{,}26$ светового года — расстояние, при котором параллакс равен одной угловой секунде. Ближайшая звезда, Проксима Центавра, находится в $4{,}2$ светового года.

## Диаграмма Герцшпрунга–Рассела

Если отложить светимость против температуры (убывающей вправо), звёзды не рассыпаются случайно:

> - Около $90\\%$ лежат на **главной последовательности** — диагональной полосе от горячих ярких голубых звёзд вверху слева до холодных тусклых красных карликов внизу справа. Эти звёзды сжигают водород в ядре; положение задаётся массой, от $0{,}08$ до примерно $100$ масс Солнца.
> - **Красные гиганты и сверхгиганты** вверху справа: холодные, но огромные ($R$ до $1000$ радиусов Солнца), а потому очень яркие.
> - **Белые карлики** внизу слева: горячие, но крошечные (размером с Землю), а потому слабые.

Чем массивнее звезда главной последовательности, тем она горячее, ярче ($L \\propto M^{3{,}5}$) и короче живёт: звезда в $20$ масс Солнца сгорает за $10$ миллионов лет, Солнце живёт $10$ миллиардов, красный карлик — триллионы.

## Эволюция звёзд

Звёзды рождаются, когда облако газа и пыли сжимается под действием тяготения, пока ядро не достигнет $10^7$ К и не начнётся синтез. Дальнейшее зависит от массы:

> **Звёзды типа Солнца ($< 8$ масс Солнца).** Когда водород в ядре исчерпан, ядро сжимается, оболочка расширяется и остывает: **красный гигант** (Солнце поглотит Меркурий и Венеру). Гелий горит в углерод и кислород; затем оболочка сбрасывается как **планетарная туманность**, а углеродно-кислородное ядро остаётся **белым карликом**, удерживаемым давлением вырожденного электронного газа, массой около $1$ массы Солнца в объёме Земли (плотность $10^6$ г/см³), медленно остывающим вечно. Предел Чандрасекара: белый карлик не может превышать $1{,}4$ массы Солнца.
>
> **Массивные звёзды ($> 8$ масс Солнца).** Синтез идёт через углерод, неон, кислород и кремний до железа, которое энергии не выделяет. Железное ядро коллапсирует за секунду, и отдача разрывает звезду как **сверхновую** типа II, которая ненадолго затмевает свою галактику и рассеивает тяжёлые элементы. Ядро становится **нейтронной звездой** (масса $1{,}4$–$3$ солнечных, радиус $10$ км, плотность $10^{14}$ г/см³, часто видимой как **пульсар**, вращающийся до сотен раз в секунду) или, выше примерно $3$ масс Солнца, **чёрной дырой**, из-под радиуса Шварцшильда которой $R_s = 2GM/c^2$ ничто не может вырваться.

Всё тяжелее гелия во Вселенной, включая углерод и кислород в наших телах, создано внутри звёзд и рассеяно сверхновыми.

## Разобранные примеры

**Пример 1.** Температура звезды, спектр которой имеет максимум при $\\lambda = 290$ нм.

$T = \\dfrac{2{,}9 \\cdot 10^{-3}}{2{,}9 \\cdot 10^{-7}} = 10\\,000$ К, белая звезда класса A (как Сириус).

**Пример 2.** Длина волны максимума спектра Солнца ($5800$ К).

$\\lambda = 2{,}9 \\cdot 10^{-3} / 5800 = 5 \\cdot 10^{-7}$ м $= 500$ нм, зелёно-жёлтый, середина видимого диапазона: наши глаза развились под солнечный свет.

**Пример 3.** Проверьте светимость Солнца по его радиусу и температуре.

$L = 4\\pi (7 \\cdot 10^8)^2 \\cdot 5{,}67 \\cdot 10^{-8} \\cdot 5800^4 = 6{,}16 \\cdot 10^{18} \\cdot 5{,}67 \\cdot 10^{-8} \\cdot 1{,}13 \\cdot 10^{15} \\approx 3{,}9 \\cdot 10^{26}$ Вт.

**Пример 4.** У Бетельгейзе $T = 3500$ К и $L = 10^5$ светимостей Солнца. Её радиус в радиусах Солнца?

$R/R_\\odot = \\sqrt{L/L_\\odot} \\cdot (T_\\odot/T)^2 = \\sqrt{10^5} \\cdot (5800/3500)^2 = 316 \\cdot 2{,}75 \\approx 870$. На месте Солнца она простиралась бы за орбиту Марса.

**Пример 5.** Солнечная постоянная: мощность Солнца на квадратный метр у Земли.

$E = \\dfrac{L}{4\\pi r^2} = \\dfrac{3{,}8 \\cdot 10^{26}}{4\\pi (1{,}5 \\cdot 10^{11})^2} = \\dfrac{3{,}8 \\cdot 10^{26}}{2{,}83 \\cdot 10^{23}} \\approx 1340$ Вт/м².

**Пример 6.** Параллакс звезды $0{,}1$ угловой секунды. Расстояние?

$d = 1/0{,}1 = 10$ парсек $= 32{,}6$ светового года.

**Пример 7.** Радиус Шварцшильда чёрной дыры в $10$ масс Солнца.

$R_s = \\dfrac{2GM}{c^2} = \\dfrac{2 \\cdot 6{,}67 \\cdot 10^{-11} \\cdot 2 \\cdot 10^{31}}{9 \\cdot 10^{16}} \\approx 3 \\cdot 10^4$ м $= 30$ км. Для Солнца он был бы $3$ км; для Земли — $9$ мм.

**Пример 8.** Плотность нейтронной звезды массой $1{,}4$ массы Солнца и радиусом $10$ км.

$\\rho = \\dfrac{M}{\\frac{4}{3}\\pi R^3} = \\dfrac{2{,}8 \\cdot 10^{30}}{4{,}19 \\cdot 10^{12}} \\approx 7 \\cdot 10^{17}$ кг/м³, плотность атомного ядра; чайная ложка весила бы миллиард тонн.

## Упражнения

1. Назовите слои Солнца от центра наружу и скажите, где вырабатывается его энергия.
2. Что такое солнечные пятна и почему они тёмные? Какова длительность солнечного цикла?
3. Спектр звезды имеет максимум при $725$ нм. Найдите её температуру и спектральный класс.
4. У Сириуса $T = 9900$ К и $L = 25$ светимостей Солнца. Найдите его радиус в радиусах Солнца.
5. Где на диаграмме Г–Р находятся Солнце, красный гигант и белый карлик? Почему большинство звёзд лежит на главной последовательности?
6. Почему массивная звезда живёт гораздо меньше Солнца, хотя топлива у неё больше?
7. Опишите конец жизни Солнца и конец жизни звезды в $20$ масс Солнца.
8. Найдите радиус Шварцшильда чёрной дыры в центре нашей Галактики ($4 \\cdot 10^6$ масс Солнца) и сравните с орбитой Земли.

### Ответы

1. Ядро, зона лучистого переноса, конвективная зона, фотосфера, хромосфера, корона; энергия вырабатывается синтезом в ядре.
2. Области сильного магнитного поля, более холодные ($4000$ К), чем окружающая фотосфера, поэтому по контрасту выглядят тёмными; $11$ лет.
3. $T = 2{,}9 \\cdot 10^{-3} / 7{,}25 \\cdot 10^{-7} = 4000$ К, класс K.
4. $R/R_\\odot = \\sqrt{25} \\cdot (5800/9900)^2 = 5 \\cdot 0{,}343 \\approx 1{,}7$.
5. Солнце: середина главной последовательности; красный гигант: вверху справа; белый карлик: внизу слева. Горение водорода — самая долгая стадия, поэтому большинство звёзд застаём на ней.
6. Её светимость растёт как $M^{3{,}5}$, поэтому топливо сгорает гораздо быстрее: время жизни $\\propto M / L \\propto M^{-2{,}5}$.
7. Солнце: красный гигант, планетарная туманность, белый карлик. Массивная звезда: сверхгигант, синтез до железа, коллапс ядра, сверхновая, нейтронная звезда или чёрная дыра.
8. $R_s = 2 \\cdot 6{,}67 \\cdot 10^{-11} \\cdot 8 \\cdot 10^{36} / 9 \\cdot 10^{16} \\approx 1{,}2 \\cdot 10^{10}$ м, около $0{,}08$ а.е., глубоко внутри орбиты Меркурия.`,
      },
      [
        q(t("The energy of the Sun is produced in its…", "Արեգակի էներգիան արտադրվում է նրա…", "Энергия Солнца вырабатывается в его…"), [t("core, by fusion", "միջուկում՝ սինթեզով", "ядре, синтезом"), t("photosphere, by burning", "ֆոտոսֆերայում՝ այրմամբ", "фотосфере, горением"), t("corona, by fission", "պսակում՝ տրոհմամբ", "короне, делением")], 0),
        q(t("The visible surface of the Sun is called the…", "Արեգակի տեսանելի մակերևույթը կոչվում է…", "Видимая поверхность Солнца называется…"), [t("photosphere", "ֆոտոսֆերա", "фотосфера"), t("corona", "պսակ", "корона"), t("core", "միջուկ", "ядро")], 0),
        q(t("A blue star compared with a red star is…", "Կապույտ աստղը կարմիրի համեմատ…", "Голубая звезда по сравнению с красной…"), [t("hotter", "ավելի տաք է", "горячее"), t("cooler", "ավելի սառն է", "холоднее"), t("always smaller", "միշտ ավելի փոքր է", "всегда меньше")], 0),
        q(t("Most stars on the H–R diagram lie on the…", "Հ-Ռ դիագրամի վրա աստղերի մեծ մասը գտնվում է…", "Большинство звёзд на диаграмме Г–Р лежат на…"), [t("main sequence", "գլխավոր հաջորդականության վրա", "главной последовательности"), t("white dwarf branch", "սպիտակ թզուկների ճյուղում", "ветви белых карликов"), t("giant branch", "հսկաների ճյուղում", "ветви гигантов")], 0),
        q(t("The Sun will end its life as a…", "Արեգակն իր կյանքը կավարտի որպես…", "Солнце закончит жизнь как…"), [t("white dwarf", "սպիտակ թզուկ", "белый карлик"), t("black hole", "սև խոռոչ", "чёрная дыра"), t("neutron star", "նեյտրոնային աստղ", "нейтронная звезда")], 0),
        q(t("A supernova is the explosion of…", "Գերնորը … պայթյունն է։", "Сверхновая — это взрыв…"), [t("a massive star at the end of its life", "կյանքի վերջում զանգվածեղ աստղի", "массивной звезды в конце жизни"), t("a planet", "մոլորակի", "планеты"), t("a comet", "գիսաստղի", "кометы")], 0),
      ],
    ),
    lesson(
      "galaxies-byurakan",
      ["Galaxies; Byurakan observatory and V. Ambartsumian", "Գալակտիկաներ, Բյուրականի աստղադիտարան և Վ․ Համբարձումյան", "Галактики; Бюраканская обсерватория и В. Амбарцумян"],
      {
        en: ["Describe the Milky Way (size, structure, the Sun's position) and the types of galaxies: spiral, elliptical, irregular", "Explain how distances to galaxies are measured (Cepheids, supernovae) and what active galaxies and quasars are", "Describe the Byurakan observatory, Viktor Ambartsumian's ideas on stellar associations and active galactic nuclei, and the Markarian survey"],
        hy: ["Նկարագրել Ծիր Կաթինը (չափեր, կառուցվածք, Արեգակի դիրքը) և գալակտիկաների տեսակները․ պարուրաձև, էլիպսաձև, անկանոն", "Բացատրել, թե ինչպես են չափվում գալակտիկաների հեռավորությունները (ցեֆեիդներ, գերնորեր) և ինչ են ակտիվ գալակտիկաներն ու քվազարները", "Նկարագրել Բյուրականի աստղադիտարանը, Վիկտոր Համբարձումյանի գաղափարներն աստղասփյուռների և ակտիվ գալակտիկական միջուկների մասին և Մարգարյանի հետազոտությունը"],
        ru: ["Описывать Млечный Путь (размеры, строение, положение Солнца) и типы галактик: спиральные, эллиптические, неправильные", "Объяснять, как измеряют расстояния до галактик (цефеиды, сверхновые) и что такое активные галактики и квазары", "Описывать Бюраканскую обсерваторию, идеи Виктора Амбарцумяна о звёздных ассоциациях и активных ядрах галактик и обзор Маркаряна"],
      },
      {
        en: `## The Milky Way

The faint band across the night sky is our own galaxy seen edge-on from inside. The **Milky Way** is a **spiral galaxy** of about $2 \\cdot 10^{11}$ stars with a total mass near $10^{12}$ solar masses, including dark matter. Its structure:

> - a flat **disc** $100\\,000$ light-years across and about $1000$ light-years thick, containing the spiral arms, young stars, gas and dust;
> - a central **bulge** and a **bar** of old stars, with a black hole of $4$ million solar masses at the very centre (Sagittarius A*);
> - a spherical **halo** of old stars and about $150$ **globular clusters**, embedded in a much larger halo of **dark matter**.

The Sun lies in the disc, about $27\\,000$ light-years from the centre, and orbits it at $220$ km/s once every $230$ million years. Between the stars is the **interstellar medium**: gas (mostly hydrogen) and dust, where new stars form in nebulae such as Orion.

Distances in astronomy: $1$ light-year $= 9{.}46 \\cdot 10^{15}$ m; $1$ parsec (pc) $= 3{.}26$ ly; kiloparsec (kpc) and megaparsec (Mpc) for galaxies.

## Kinds of galaxies

In 1924 Hubble showed, using **Cepheid variables** in the Andromeda nebula, that it lies far outside the Milky Way: galaxies are "island universes". Hubble's classification:

| Type | Shape | Stars and gas | Example |
|---|---|---|---|
| Spiral (S, SB) | disc with arms, with or without a bar | young and old stars, much gas, star formation | Milky Way, Andromeda (M31) |
| Elliptical (E0–E7) | smooth ellipsoid | old red stars, little gas | M87 in Virgo |
| Irregular (Irr) | no symmetry | young stars, gas | Magellanic Clouds |

Galaxies gather in **groups** (our Local Group: Milky Way, Andromeda, Triangulum and some 80 dwarfs) and **clusters** of thousands (Virgo, Coma), which form **superclusters** and filaments around huge voids: the cosmic web. The observable Universe contains about $2 \\cdot 10^{12}$ galaxies.

## Measuring distances

- **Cepheids** are pulsating giant stars whose period is tied to their luminosity (Henrietta Leavitt, 1912). Measure the period, know $L$, compare with the apparent brightness, get the distance; works to about $30$ Mpc.
- **Type Ia supernovae**, exploding white dwarfs, all reach nearly the same peak luminosity ($5 \\cdot 10^9$ Suns) and are seen across billions of light-years.
- **Hubble's law** (next lesson): the redshift of a galaxy's spectrum gives its distance.

## Active galaxies and quasars

Some galaxies emit far more energy than their stars can supply, from a region smaller than the Solar system: **active galactic nuclei**. **Quasars** (1963) are the most luminous of them, up to $10^{14}$ solar luminosities, seen at distances of billions of light-years. The engine is a **supermassive black hole** of $10^6$–$10^{10}$ solar masses swallowing gas: the accretion disc heats to millions of kelvin and jets of particles shoot out at nearly the speed of light.

## Byurakan and Ambartsumian

The **Byurakan Astrophysical Observatory** was founded in 1946 on the slope of Mount Aragats, $35$ km from Yerevan, at $1500$ m altitude, by **Viktor Ambartsumian** (1908–1996), the founder of theoretical astrophysics in the Soviet Union and president of the International Astronomical Union (1961–1964). Its main instrument is the $2{.}6$-metre telescope (1976), and its $1$-metre Schmidt telescope (1960) has one of the widest fields in the world.

Ambartsumian's main ideas:

> - **Stellar associations** (1947): loose groups of young hot stars that are flying apart, which proves that star formation is still going on in the Galaxy today and that stars are born in groups.
> - **Activity of galactic nuclei** (1958): the nuclei of galaxies are sites of violent, explosive processes that eject matter, an idea confirmed later by radio galaxies, quasars and jets.
> - Theory of radiative transfer in stellar atmospheres and nebulae, and the "invariance principle" for scattering of light.

**Benjamin Markarian** (1913–1985) used the Schmidt telescope to survey the sky for galaxies with an excess of ultraviolet light: the **Markarian galaxies**, about $1500$ objects, many of which turned out to be active galaxies and starburst galaxies; the **First Byurakan Survey** remains a standard reference. Byurakan hosted the first international conference on extraterrestrial civilisations (1971) and is today a UNESCO-listed site and a working research centre.

## Worked examples

**Example 1.** How long does light take to cross the Milky Way's disc?

$100\\,000$ years, by definition of the light-year.

**Example 2.** Period of the Sun's orbit around the Galactic centre ($r = 27\\,000$ ly, $v = 220$ km/s).

$r = 27\\,000 \\cdot 9{.}46 \\cdot 10^{15} = 2{.}55 \\cdot 10^{20}$ m; $T = 2\\pi r / v = 1{.}6 \\cdot 10^{21} / 2{.}2 \\cdot 10^5 = 7{.}3 \\cdot 10^{15}$ s $\\approx 2{.}3 \\cdot 10^8$ years. The Sun has completed about 20 orbits since its birth.

**Example 3.** A Cepheid with luminosity $10^4$ solar is seen with an apparent brightness $10^{-12}$ of the Sun's. Its distance in AU and in light-years?

$E \\propto L/r^2$: $\\dfrac{r}{1\\ \\text{AU}} = \\sqrt{\\dfrac{10^4}{10^{-12}}} = 10^8$; $r = 10^8$ AU $= 1{.}5 \\cdot 10^{19}$ m $\\approx 1600$ light-years.

**Example 4.** Andromeda is $2{.}5$ million light-years away and approaches at $110$ km/s. When would the galaxies meet if the speed stayed constant?

$d = 2{.}5 \\cdot 10^6 \\cdot 9{.}46 \\cdot 10^{15} = 2{.}4 \\cdot 10^{22}$ m; $t = d/v = 2{.}4 \\cdot 10^{22} / 1{.}1 \\cdot 10^5 = 2{.}2 \\cdot 10^{17}$ s $\\approx 7$ billion years (gravity will shorten this to about $4{.}5$ billion).

**Example 5.** Angular size of Andromeda ($220\\,000$ ly across at $2{.}5$ Mly).

$\\theta = 220\\,000 / 2\\,500\\,000 = 0{.}088$ rad $\\approx 5°$, ten times the full Moon; only its bright core is visible to the eye.

**Example 6.** A quasar radiates $10^{40}$ W. How much mass must its black hole swallow per year if $10\\%$ of the rest energy is radiated?

$E$ per year $= 10^{40} \\cdot 3{.}15 \\cdot 10^7 = 3{.}15 \\cdot 10^{47}$ J; $m = E/(0{.}1 c^2) = 3{.}15 \\cdot 10^{47} / 9 \\cdot 10^{15} = 3{.}5 \\cdot 10^{31}$ kg, about $17$ solar masses a year.

**Example 7.** A quasar varies in brightness over $1$ day. What is the maximum size of the emitting region?

The region cannot be larger than the distance light travels in that time: $3 \\cdot 10^8 \\cdot 86\\,400 = 2{.}6 \\cdot 10^{13}$ m $\\approx 170$ AU, smaller than the Solar system, yet brighter than a whole galaxy.

**Example 8.** The $2{.}6$ m Byurakan telescope collects how many times more light than a $10$ cm amateur telescope?

Ratio of areas $(2{.}6 / 0{.}1)^2 = 676$ times.

## Exercises

1. Describe the three main parts of the Milky Way and say where the Sun is.
2. What is a light-year? Express $27\\,000$ ly in metres.
3. Name the three types of galaxies and give one difference in their stellar content.
4. How did Hubble prove that Andromeda is a separate galaxy?
5. A supernova Ia of luminosity $5 \\cdot 10^9$ Suns appears $10^{-20}$ times fainter than the Sun. Its distance in light-years?
6. What powers a quasar, and why must the central engine be very small?
7. What are stellar associations, and what did Ambartsumian conclude from their existence?
8. What is the Markarian survey, and what kind of objects did it find?

### Answers

1. Disc with spiral arms (young stars, gas), central bulge with a black hole, halo with globular clusters and dark matter; the Sun is in the disc, $27\\,000$ ly from the centre.
2. The distance light travels in a year, $9{.}46 \\cdot 10^{15}$ m; $27\\,000$ ly $= 2{.}55 \\cdot 10^{20}$ m.
3. Spiral (young and old stars, gas), elliptical (old stars, little gas), irregular (young stars, gas).
4. He found Cepheid variables in it, used their period–luminosity relation to find a distance of about a million light-years, far beyond the Milky Way.
5. $r/\\text{AU} = \\sqrt{5 \\cdot 10^9 / 10^{-20}} = 7 \\cdot 10^{14}$; $r = 7 \\cdot 10^{14}$ AU $\\approx 1{.}1 \\cdot 10^{10}$ light-years.
6. Gas falling into a supermassive black hole; the brightness changes within days, so the source is at most light-days across.
7. Loose expanding groups of young hot stars; star formation continues today and stars are born in groups.
8. A search with the Byurakan Schmidt telescope for galaxies with excess ultraviolet emission; it found about 1500 Markarian galaxies, many of them active galaxies and galaxies with bursts of star formation.`,
        hy: `## Ծիր Կաթին

Գիշերային երկնքով անցնող աղոտ շերտը մեր սեփական գալակտիկան է՝ ներսից, եզրով դիտված։ **Ծիր Կաթինը** **պարուրաձև գալակտիկա** է՝ մոտ $2 \\cdot 10^{11}$ աստղով և $10^{12}$ արեգակնային զանգվածի մոտ լրիվ զանգվածով՝ ներառյալ մութ նյութը։ Նրա կառուցվածքը․

> - հարթ **սկավառակ**՝ $100\\,000$ լուսային տարի տրամագծով և մոտ $1000$ լուսային տարի հաստությամբ, որը պարունակում է պարուրաձև թևերը, երիտասարդ աստղերը, գազն ու փոշին․
> - կենտրոնական **ուռուցիկություն** և հին աստղերի **ձող**, իսկ հենց կենտրոնում՝ $4$ միլիոն արեգակնային զանգվածով սև խոռոչ (Աղեղնավոր A*)․
> - հին աստղերի և մոտ $150$ **գնդային կույտերի** գնդաձև **հալո**, որը ներդրված է **մութ նյութի** շատ ավելի մեծ հալոյի մեջ։

Արեգակը սկավառակում է՝ կենտրոնից մոտ $27\\,000$ լուսային տարի հեռու, և պտտվում է նրա շուրջ $220$ կմ/վ արագությամբ՝ մեկ պտույտը $230$ միլիոն տարում։ Աստղերի միջև **միջաստղային միջավայրն** է․ գազ (հիմնականում ջրածին) և փոշի, որտեղ նոր աստղեր են ծնվում Օրիոնի նման միգամածություններում։

Հեռավորություններն աստղագիտության մեջ․ $1$ լուսային տարի $= 9{,}46 \\cdot 10^{15}$ մ․ $1$ պարսեկ (պկ) $= 3{,}26$ լ․տ․․ գալակտիկաների համար՝ կիլոպարսեկ (կպկ) և մեգապարսեկ (Մպկ)։

## Գալակտիկաների տեսակները

1924 թ․ Հաբլն Անդրոմեդայի միգամածության **ցեֆեիդների** միջոցով ցույց տվեց, որ այն Ծիր Կաթինից շատ հեռու է․ գալակտիկաները «կղզի-տիեզերքներ» են։ Հաբլի դասակարգումը․

| Տեսակ | Ձև | Աստղեր և գազ | Օրինակ |
|---|---|---|---|
| Պարուրաձև (S, SB) | թևերով սկավառակ՝ ձողով կամ առանց | երիտասարդ և հին աստղեր, շատ գազ, աստղառաջացում | Ծիր Կաթին, Անդրոմեդա (M31) |
| Էլիպսաձև (E0–E7) | հարթ էլիպսոիդ | հին կարմիր աստղեր, քիչ գազ | M87 Կույսում |
| Անկանոն (Irr) | առանց համաչափության | երիտասարդ աստղեր, գազ | Մագելանյան ամպեր |

Գալակտիկաները հավաքվում են **խմբերում** (մեր Տեղական խումբը․ Ծիր Կաթին, Անդրոմեդա, Եռանկյունի և մոտ 80 գաճաճ) և հազարավորների **կույտերում** (Կույս, Վերոնիկայի Վարսեր), որոնք կազմում են **գերկույտեր** և թելիկներ հսկայական դատարկությունների շուրջ․ տիեզերական ցանցը։ Դիտելի Տիեզերքը պարունակում է մոտ $2 \\cdot 10^{12}$ գալակտիկա։

## Հեռավորությունների չափում

- **Ցեֆեիդները** բաբախող հսկա աստղեր են, որոնց պարբերությունը կապված է լուսատվության հետ (Հենրիետա Լևիթ, 1912)։ Չափում ենք պարբերությունը, իմանում $L$-ը, համեմատում տեսանելի պայծառության հետ, ստանում հեռավորությունը․ գործում է մինչև մոտ $30$ Մպկ։
- **Ia տիպի գերնորերը**՝ պայթող սպիտակ թզուկները, բոլորը հասնում են գրեթե նույն գագաթնային լուսատվության ($5 \\cdot 10^9$ Արեգակ) և երևում են միլիարդավոր լուսային տարիների հեռավորությունից։
- **Հաբլի օրենքը** (հաջորդ դաս)․ գալակտիկայի սպեկտրի կարմիր շեղումը տալիս է նրա հեռավորությունը։

## Ակտիվ գալակտիկաներ և քվազարներ

Որոշ գալակտիկաներ Արեգակնային համակարգից փոքր տիրույթից շատ ավելի էներգիա են արձակում, քան կարող են տալ իրենց աստղերը․ **ակտիվ գալակտիկական միջուկներ**։ **Քվազարները** (1963) դրանցից ամենալուսատուն են՝ մինչև $10^{14}$ արեգակնային լուսատվություն, որոնք երևում են միլիարդավոր լուսային տարիների հեռավորությունից։ Շարժիչը գազ կլանող $10^6$–$10^{10}$ արեգակնային զանգվածով **գերզանգվածեղ սև խոռոչն** է․ ակրեցիոն սկավառակը տաքանում է մինչև միլիոնավոր կելվին, և մասնիկների շիթերը դուրս են թռչում գրեթե լույսի արագությամբ։

## Բյուրական և Համբարձումյան

**Բյուրականի աստղաֆիզիկական աստղադիտարանը** հիմնադրվել է 1946 թ․ Արագած լեռան լանջին՝ Երևանից $35$ կմ հեռու, $1500$ մ բարձրության վրա, **Վիկտոր Համբարձումյանի** (1908–1996) կողմից, ով Խորհրդային Միությունում տեսական աստղաֆիզիկայի հիմնադիրն էր և Միջազգային աստղագիտական միության նախագահը (1961–1964)։ Նրա գլխավոր գործիքը $2{,}6$ մետրանոց աստղադիտակն է (1976), իսկ $1$ մետրանոց Շմիդտի աստղադիտակն (1960) ունի աշխարհի ամենալայն տեսադաշտերից մեկը։

Համբարձումյանի գլխավոր գաղափարները․

> - **Աստղասփյուռներ** (1947)․ երիտասարդ տաք աստղերի նոսր խմբեր, որոնք իրարից հեռանում են, ինչն ապացուցում է, որ աստղառաջացումը Գալակտիկայում այսօր էլ շարունակվում է, և աստղերը ծնվում են խմբերով։
> - **Գալակտիկական միջուկների ակտիվություն** (1958)․ գալակտիկաների միջուկները բուռն, պայթյունային պրոցեսների վայրեր են, որոնք նյութ են արտանետում․ գաղափարը հետագայում հաստատվեց ռադիոգալակտիկաներով, քվազարներով և շիթերով։
> - Աստղային մթնոլորտներում և միգամածություններում ճառագայթման տեղափոխման տեսություն և լույսի ցրման «ինվարիանտության սկզբունք»։

**Բենիամին Մարգարյանը** (1913–1985) Շմիդտի աստղադիտակով երկինքը հետազոտեց ուլտրամանուշակագույն լույսի ավելցուկով գալակտիկաների համար․ **Մարգարյանի գալակտիկաներ**՝ մոտ $1500$ օբյեկտ, որոնցից շատերն ակտիվ գալակտիկաներ և աստղառաջացման պոռթկումով գալակտիկաներ դուրս եկան․ **Բյուրականի առաջին հետազոտությունը** մինչ օրս ստանդարտ աղբյուր է։ Բյուրականում անցկացվեց այլմոլորակային քաղաքակրթությունների առաջին միջազգային գիտաժողովը (1971), և այսօր այն ՅՈՒՆԵՍԿՕ-ի ցուցակում ընդգրկված վայր է և գործող գիտական կենտրոն։

## Լուծված օրինակներ

**Օրինակ 1։** Որքա՞ն ժամանակում է լույսն անցնում Ծիր Կաթինի սկավառակը։

$100\\,000$ տարում՝ լուսային տարվա սահմանման համաձայն։

**Օրինակ 2։** Արեգակի պտույտի պարբերությունը Գալակտիկայի կենտրոնի շուրջ ($r = 27\\,000$ լ․տ․, $v = 220$ կմ/վ)։

$r = 27\\,000 \\cdot 9{,}46 \\cdot 10^{15} = 2{,}55 \\cdot 10^{20}$ մ․ $T = 2\\pi r / v = 1{,}6 \\cdot 10^{21} / 2{,}2 \\cdot 10^5 = 7{,}3 \\cdot 10^{15}$ վ $\\approx 2{,}3 \\cdot 10^8$ տարի։ Արեգակն իր ծնունդից ի վեր մոտ 20 պտույտ է կատարել։

**Օրինակ 3։** $10^4$ արեգակնային լուսատվությամբ ցեֆեիդն երևում է Արեգակի տեսանելի պայծառության $10^{-12}$-ով։ Հեռավորությունն ա․մ․-ով և լուսային տարիներով։

$E \\propto L/r^2$․ $r$-ն ա․մ․-ով․ $r = \\sqrt{\\dfrac{10^4}{10^{-12}}} = 10^8$ ա․մ․ $= 1{,}5 \\cdot 10^{19}$ մ $\\approx 1600$ լուսային տարի։

**Օրինակ 4։** Անդրոմեդան $2{,}5$ միլիոն լուսային տարի հեռու է և մոտենում է $110$ կմ/վ արագությամբ։ Ե՞րբ կհանդիպեին գալակտիկաները, եթե արագությունը հաստատուն մնար։

$d = 2{,}5 \\cdot 10^6 \\cdot 9{,}46 \\cdot 10^{15} = 2{,}4 \\cdot 10^{22}$ մ․ $t = d/v = 2{,}4 \\cdot 10^{22} / 1{,}1 \\cdot 10^5 = 2{,}2 \\cdot 10^{17}$ վ $\\approx 7$ միլիարդ տարի (ձգողականությունը սա կկրճատի մինչև մոտ $4{,}5$ միլիարդ)։

**Օրինակ 5։** Անդրոմեդայի անկյունային չափը ($220\\,000$ լ․տ․ տրամագիծ $2{,}5$ Մլ․տ․ հեռավորության վրա)։

$\\theta = 220\\,000 / 2\\,500\\,000 = 0{,}088$ ռադ $\\approx 5°$, լրիվ Լուսնից տասն անգամ մեծ․ աչքով երևում է միայն նրա պայծառ միջուկը։

**Օրինակ 6։** Քվազարը ճառագայթում է $10^{40}$ Վտ։ Որքա՞ն զանգված պետք է նրա սև խոռոչը տարեկան կլանի, եթե հանգստի էներգիայի $10\\%$-ն է ճառագայթվում։

Տարեկան $E = 10^{40} \\cdot 3{,}15 \\cdot 10^7 = 3{,}15 \\cdot 10^{47}$ Ջ․ $m = E/(0{,}1 c^2) = 3{,}15 \\cdot 10^{47} / 9 \\cdot 10^{15} = 3{,}5 \\cdot 10^{31}$ կգ, տարեկան մոտ $17$ արեգակնային զանգված։

**Օրինակ 7։** Քվազարի պայծառությունը փոխվում է $1$ օրվա ընթացքում։ Որքա՞ն է ճառագայթող տիրույթի առավելագույն չափը։

Տիրույթը չի կարող մեծ լինել այն հեռավորությունից, որը լույսն անցնում է այդ ժամանակում․ $3 \\cdot 10^8 \\cdot 86\\,400 = 2{,}6 \\cdot 10^{13}$ մ $\\approx 170$ ա․մ․, Արեգակնային համակարգից փոքր, բայց ամբողջ գալակտիկայից պայծառ։

**Օրինակ 8։** Բյուրականի $2{,}6$ մ աստղադիտակը քանի՞ անգամ ավելի լույս է հավաքում, քան $10$ սմ սիրողական աստղադիտակը։

Մակերեսների հարաբերությունը $(2{,}6 / 0{,}1)^2 = 676$ անգամ։

## Վարժություններ

1. Նկարագրեք Ծիր Կաթինի երեք հիմնական մասերը և ասեք, թե որտեղ է Արեգակը։
2. Ի՞նչ է լուսային տարին։ $27\\,000$ լ․տ․-ն արտահայտեք մետրերով։
3. Անվանեք գալակտիկաների երեք տեսակները և նշեք դրանց աստղային կազմի մեկ տարբերություն։
4. Ինչպե՞ս Հաբլն ապացուցեց, որ Անդրոմեդան առանձին գալակտիկա է։
5. $5 \\cdot 10^9$ Արեգակ լուսատվությամբ Ia գերնորն երևում է Արեգակից $10^{-20}$ անգամ ավելի թույլ։ Հեռավորությունը լուսային տարիներով։
6. Ի՞նչն է սնում քվազարը, և ինչո՞ւ պետք է կենտրոնական շարժիչը շատ փոքր լինի։
7. Ի՞նչ են աստղասփյուռները, և ի՞նչ եզրակացրեց Համբարձումյանը դրանց գոյությունից։
8. Ի՞նչ է Մարգարյանի հետազոտությունը, և ի՞նչ տեսակի օբյեկտներ է այն գտել։

### Պատասխաններ

1. Սկավառակ պարուրաձև թևերով (երիտասարդ աստղեր, գազ), կենտրոնական ուռուցիկություն սև խոռոչով, հալո գնդային կույտերով և մութ նյութով․ Արեգակը սկավառակում է՝ կենտրոնից $27\\,000$ լ․տ․ հեռու։
2. Հեռավորությունը, որը լույսն անցնում է մեկ տարում․ $9{,}46 \\cdot 10^{15}$ մ․ $27\\,000$ լ․տ․ $= 2{,}55 \\cdot 10^{20}$ մ։
3. Պարուրաձև (երիտասարդ և հին աստղեր, գազ), էլիպսաձև (հին աստղեր, քիչ գազ), անկանոն (երիտասարդ աստղեր, գազ)։
4. Նա դրանում գտավ ցեֆեիդներ, նրանց պարբերություն-լուսատվություն կապով ստացավ մոտ մեկ միլիոն լուսային տարի հեռավորություն՝ Ծիր Կաթինից շատ հեռու։
5. $r$ ա․մ․-ով $= \\sqrt{5 \\cdot 10^9 / 10^{-20}} = 7 \\cdot 10^{14}$․ $r = 7 \\cdot 10^{14}$ ա․մ․ $\\approx 1{,}1 \\cdot 10^{10}$ լուսային տարի։
6. Գերզանգվածեղ սև խոռոչի մեջ ընկնող գազը․ պայծառությունը փոխվում է օրերի ընթացքում, ուստի աղբյուրն առավելագույնը լուսային օրերի չափ է։
7. Երիտասարդ տաք աստղերի նոսր ընդարձակվող խմբեր․ աստղառաջացումն այսօր էլ շարունակվում է, և աստղերը ծնվում են խմբերով։
8. Բյուրականի Շմիդտի աստղադիտակով ուլտրամանուշակագույն ավելցուկով գալակտիկաների որոնում․ այն գտավ մոտ 1500 Մարգարյանի գալակտիկա, որոնցից շատերն ակտիվ գալակտիկաներ և աստղառաջացման պոռթկումով գալակտիկաներ են։`,
        ru: `## Млечный Путь

Тусклая полоса, пересекающая ночное небо, — наша собственная галактика, видимая изнутри с ребра. **Млечный Путь** — **спиральная галактика** из примерно $2 \\cdot 10^{11}$ звёзд с полной массой около $10^{12}$ масс Солнца, включая тёмную материю. Её строение:

> - плоский **диск** поперечником $100\\,000$ световых лет и толщиной около $1000$ световых лет, содержащий спиральные рукава, молодые звёзды, газ и пыль;
> - центральный **балдж** и **бар** из старых звёзд, а в самом центре — чёрная дыра в $4$ миллиона масс Солнца (Стрелец A*);
> - сферическое **гало** из старых звёзд и около $150$ **шаровых скоплений**, погружённое в гораздо большее гало **тёмной материи**.

Солнце лежит в диске, примерно в $27\\,000$ световых лет от центра, и обращается вокруг него со скоростью $220$ км/с, совершая оборот за $230$ миллионов лет. Между звёздами находится **межзвёздная среда**: газ (в основном водород) и пыль, где в туманностях, таких как Орион, рождаются новые звёзды.

Расстояния в астрономии: $1$ световой год $= 9{,}46 \\cdot 10^{15}$ м; $1$ парсек (пк) $= 3{,}26$ св. года; для галактик — килопарсек (кпк) и мегапарсек (Мпк).

## Виды галактик

В 1924 г. Хаббл показал по **цефеидам** в туманности Андромеды, что она лежит далеко за пределами Млечного Пути: галактики — «островные вселенные». Классификация Хаббла:

| Тип | Форма | Звёзды и газ | Пример |
|---|---|---|---|
| Спиральные (S, SB) | диск с рукавами, с баром или без | молодые и старые звёзды, много газа, звездообразование | Млечный Путь, Андромеда (M31) |
| Эллиптические (E0–E7) | гладкий эллипсоид | старые красные звёзды, мало газа | M87 в Деве |
| Неправильные (Irr) | без симметрии | молодые звёзды, газ | Магеллановы Облака |

Галактики собираются в **группы** (наша Местная группа: Млечный Путь, Андромеда, Треугольник и около 80 карликов) и **скопления** из тысяч (Дева, Волосы Вероники), образующие **сверхскопления** и волокна вокруг огромных пустот: космическую паутину. Наблюдаемая Вселенная содержит около $2 \\cdot 10^{12}$ галактик.

## Измерение расстояний

- **Цефеиды** — пульсирующие гиганты, период которых связан со светимостью (Генриетта Ливитт, 1912). Измеряем период, узнаём $L$, сравниваем с видимой яркостью, получаем расстояние; работает примерно до $30$ Мпк.
- **Сверхновые типа Ia**, взрывающиеся белые карлики, достигают почти одинаковой пиковой светимости ($5 \\cdot 10^9$ Солнц) и видны на миллиарды световых лет.
- **Закон Хаббла** (следующий урок): красное смещение спектра галактики даёт её расстояние.

## Активные галактики и квазары

Некоторые галактики излучают гораздо больше энергии, чем могут дать их звёзды, из области меньше Солнечной системы: **активные ядра галактик**. **Квазары** (1963) — самые яркие из них, до $10^{14}$ светимостей Солнца, видимые на расстояниях в миллиарды световых лет. Двигатель — **сверхмассивная чёрная дыра** в $10^6$–$10^{10}$ масс Солнца, поглощающая газ: аккреционный диск нагревается до миллионов кельвинов, а струи частиц вылетают почти со скоростью света.

## Бюракан и Амбарцумян

**Бюраканская астрофизическая обсерватория** основана в 1946 г. на склоне горы Арагац, в $35$ км от Еревана, на высоте $1500$ м, **Виктором Амбарцумяном** (1908–1996), основателем теоретической астрофизики в Советском Союзе и президентом Международного астрономического союза (1961–1964). Её главный инструмент — $2{,}6$-метровый телескоп (1976), а $1$-метровый телескоп Шмидта (1960) имеет одно из самых широких полей зрения в мире.

Главные идеи Амбарцумяна:

> - **Звёздные ассоциации** (1947): рыхлые группы молодых горячих звёзд, разлетающиеся друг от друга, что доказывает: звездообразование в Галактике продолжается и сегодня, а звёзды рождаются группами.
> - **Активность ядер галактик** (1958): ядра галактик — места бурных взрывных процессов, выбрасывающих вещество; идея позже подтвердилась радиогалактиками, квазарами и струями.
> - Теория переноса излучения в звёздных атмосферах и туманностях и «принцип инвариантности» для рассеяния света.

**Вениамин Маркарян** (1913–1985) с помощью телескопа Шмидта обследовал небо в поисках галактик с избытком ультрафиолета: **галактики Маркаряна**, около $1500$ объектов, многие из которых оказались активными галактиками и галактиками со вспышкой звездообразования; **Первый Бюраканский обзор** остаётся стандартным справочником. В Бюракане прошла первая международная конференция по внеземным цивилизациям (1971); сегодня это объект, внесённый в список ЮНЕСКО, и действующий научный центр.

## Разобранные примеры

**Пример 1.** За какое время свет пересекает диск Млечного Пути?

За $100\\,000$ лет, по определению светового года.

**Пример 2.** Период обращения Солнца вокруг центра Галактики ($r = 27\\,000$ св. лет, $v = 220$ км/с).

$r = 27\\,000 \\cdot 9{,}46 \\cdot 10^{15} = 2{,}55 \\cdot 10^{20}$ м; $T = 2\\pi r / v = 1{,}6 \\cdot 10^{21} / 2{,}2 \\cdot 10^5 = 7{,}3 \\cdot 10^{15}$ с $\\approx 2{,}3 \\cdot 10^8$ лет. С рождения Солнце совершило около 20 оборотов.

**Пример 3.** Цефеида светимостью $10^4$ солнечных видна с яркостью $10^{-12}$ от солнечной. Её расстояние в а.е. и световых годах?

$E \\propto L/r^2$: $r$ в а.е. $= \\sqrt{\\dfrac{10^4}{10^{-12}}} = 10^8$; $r = 10^8$ а.е. $= 1{,}5 \\cdot 10^{19}$ м $\\approx 1600$ световых лет.

**Пример 4.** Андромеда находится в $2{,}5$ миллиона световых лет и приближается со скоростью $110$ км/с. Когда галактики встретились бы при постоянной скорости?

$d = 2{,}5 \\cdot 10^6 \\cdot 9{,}46 \\cdot 10^{15} = 2{,}4 \\cdot 10^{22}$ м; $t = d/v = 2{,}4 \\cdot 10^{22} / 1{,}1 \\cdot 10^5 = 2{,}2 \\cdot 10^{17}$ с $\\approx 7$ миллиардов лет (тяготение сократит срок примерно до $4{,}5$ миллиарда).

**Пример 5.** Угловой размер Андромеды (поперечник $220\\,000$ св. лет на расстоянии $2{,}5$ млн св. лет).

$\\theta = 220\\,000 / 2\\,500\\,000 = 0{,}088$ рад $\\approx 5°$, в десять раз больше полной Луны; глазом видно только её яркое ядро.

**Пример 6.** Квазар излучает $10^{40}$ Вт. Сколько массы должна поглощать в год его чёрная дыра, если излучается $10\\%$ энергии покоя?

$E$ за год $= 10^{40} \\cdot 3{,}15 \\cdot 10^7 = 3{,}15 \\cdot 10^{47}$ Дж; $m = E/(0{,}1 c^2) = 3{,}15 \\cdot 10^{47} / 9 \\cdot 10^{15} = 3{,}5 \\cdot 10^{31}$ кг, около $17$ масс Солнца в год.

**Пример 7.** Яркость квазара меняется за $1$ сутки. Каков максимальный размер излучающей области?

Область не может быть больше расстояния, которое свет проходит за это время: $3 \\cdot 10^8 \\cdot 86\\,400 = 2{,}6 \\cdot 10^{13}$ м $\\approx 170$ а.е., меньше Солнечной системы, но ярче целой галактики.

**Пример 8.** Во сколько раз больше света собирает $2{,}6$-метровый телескоп Бюракана, чем $10$-сантиметровый любительский?

Отношение площадей $(2{,}6 / 0{,}1)^2 = 676$ раз.

## Упражнения

1. Опишите три основные части Млечного Пути и укажите, где находится Солнце.
2. Что такое световой год? Выразите $27\\,000$ св. лет в метрах.
3. Назовите три типа галактик и укажите одно различие в их звёздном составе.
4. Как Хаббл доказал, что Андромеда — отдельная галактика?
5. Сверхновая Ia светимостью $5 \\cdot 10^9$ Солнц выглядит в $10^{-20}$ раз слабее Солнца. Её расстояние в световых годах?
6. Что питает квазар и почему центральный двигатель должен быть очень мал?
7. Что такое звёздные ассоциации и какой вывод сделал Амбарцумян из их существования?
8. Что такое обзор Маркаряна и какие объекты он нашёл?

### Ответы

1. Диск со спиральными рукавами (молодые звёзды, газ), центральный балдж с чёрной дырой, гало с шаровыми скоплениями и тёмной материей; Солнце в диске, в $27\\,000$ св. лет от центра.
2. Расстояние, проходимое светом за год, $9{,}46 \\cdot 10^{15}$ м; $27\\,000$ св. лет $= 2{,}55 \\cdot 10^{20}$ м.
3. Спиральные (молодые и старые звёзды, газ), эллиптические (старые звёзды, мало газа), неправильные (молодые звёзды, газ).
4. Он нашёл в ней цефеиды, по их зависимости период–светимость получил расстояние около миллиона световых лет, далеко за пределами Млечного Пути.
5. $r$ в а.е. $= \\sqrt{5 \\cdot 10^9 / 10^{-20}} = 7 \\cdot 10^{14}$; $r = 7 \\cdot 10^{14}$ а.е. $\\approx 1{,}1 \\cdot 10^{10}$ световых лет.
6. Газ, падающий в сверхмассивную чёрную дыру; яркость меняется за дни, поэтому источник не больше световых суток в поперечнике.
7. Рыхлые расширяющиеся группы молодых горячих звёзд; звездообразование продолжается сегодня, и звёзды рождаются группами.
8. Поиск на телескопе Шмидта в Бюракане галактик с избытком ультрафиолетового излучения; найдено около 1500 галактик Маркаряна, многие из них — активные галактики и галактики со вспышками звездообразования.`,
      },
      [
        q(t("The Milky Way is a…", "Ծիր Կաթինը … գալակտիկա է։", "Млечный Путь — это…"), [t("spiral galaxy", "պարուրաձև", "спиральная галактика"), t("elliptical galaxy", "էլիպսաձև", "эллиптическая галактика"), t("globular cluster", "գնդային կույտ", "шаровое скопление")], 0),
        q(t("The Sun is located…", "Արեգակը գտնվում է…", "Солнце находится…"), [t("in the disc, about 27 000 light-years from the centre", "սկավառակում՝ կենտրոնից մոտ 27 000 լուսային տարի հեռու", "в диске, примерно в 27 000 световых лет от центра"), t("at the centre of the Galaxy", "Գալակտիկայի կենտրոնում", "в центре Галактики"), t("in the halo", "հալոյում", "в гало")], 0),
        q(t("Distances to nearby galaxies are measured with…", "Մոտակա գալակտիկաների հեռավորությունները չափվում են…", "Расстояния до ближних галактик измеряют по…"), [t("Cepheid variable stars", "ցեֆեիդներով", "цефеидам"), t("sunspots", "արևաբծերով", "солнечным пятнам"), t("radar", "ռադարով", "радару")], 0),
        q(t("A quasar is powered by…", "Քվազարը սնվում է…", "Квазар питается…"), [t("gas falling into a supermassive black hole", "գերզանգվածեղ սև խոռոչի մեջ ընկնող գազով", "газом, падающим в сверхмассивную чёрную дыру"), t("nuclear fusion in one star", "մեկ աստղի միջուկային սինթեզով", "термоядерным синтезом в одной звезде"), t("reflected sunlight", "անդրադարձած արևի լույսով", "отражённым солнечным светом")], 0),
        q(t("The Byurakan observatory was founded by…", "Բյուրականի աստղադիտարանը հիմնադրել է…", "Бюраканскую обсерваторию основал…"), [t("Viktor Ambartsumian in 1946", "Վիկտոր Համբարձումյանը 1946 թ․", "Виктор Амбарцумян в 1946 г."), t("Edwin Hubble in 1924", "Էդվին Հաբլը 1924 թ․", "Эдвин Хаббл в 1924 г."), t("Benjamin Markarian in 1976", "Բենիամին Մարգարյանը 1976 թ․", "Вениамин Маркарян в 1976 г.")], 0),
        q(t("Stellar associations showed that…", "Աստղասփյուռները ցույց տվեցին, որ…", "Звёздные ассоциации показали, что…"), [t("star formation continues in the Galaxy today", "աստղառաջացումը Գալակտիկայում այսօր էլ շարունակվում է", "звездообразование в Галактике продолжается и сегодня"), t("all stars are the same age", "բոլոր աստղերը նույն տարիքի են", "все звёзды одного возраста"), t("the Galaxy is not rotating", "Գալակտիկան չի պտտվում", "Галактика не вращается")], 0),
      ],
    ),
    lesson(
      "cosmology",
      ["Expanding Universe; Big Bang; dark matter and energy", "Ընդարձակվող Տիեզերք, Մեծ պայթյուն, մութ նյութ և էներգիա", "Расширяющаяся Вселенная; Большой взрыв; тёмная материя и энергия"],
      {
        en: ["State Hubble's law v = H₀·d, use it to find distances and estimate the age of the Universe", "Describe the Big Bang model and its evidence: expansion, cosmic microwave background, abundance of light elements", "Explain what is known and unknown about dark matter and dark energy and the composition of the Universe"],
        hy: ["Ձևակերպել Հաբլի օրենքը v = H₀·d, դրանով գտնել հեռավորություններ և գնահատել Տիեզերքի տարիքը", "Նկարագրել Մեծ պայթյունի մոդելը և նրա ապացույցները․ ընդարձակում, ռելիկտային ճառագայթում, թեթև տարրերի առատություն", "Բացատրել, թե ինչ է հայտնի և անհայտ մութ նյութի ու մութ էներգիայի և Տիեզերքի բաղադրության մասին"],
        ru: ["Формулировать закон Хаббла v = H₀·d, находить по нему расстояния и оценивать возраст Вселенной", "Описывать модель Большого взрыва и её доказательства: расширение, реликтовое излучение, распространённость лёгких элементов", "Объяснять, что известно и неизвестно о тёмной материи и тёмной энергии и о составе Вселенной"],
      },
      {
        en: `## The expanding Universe

In 1929 Edwin Hubble compared the distances of galaxies (from Cepheids) with the shifts of lines in their spectra. Almost all spectra are shifted to the **red**, meaning the galaxies recede, and the farther the galaxy, the faster:

> **Hubble's law:** $v = H_0 \\, d$, where the Hubble constant $H_0 \\approx 70$ km/s per megaparsec ($\\approx 2{.}3 \\cdot 10^{-18}$ s⁻¹).

The redshift $z = \\dfrac{\\Delta\\lambda}{\\lambda} \\approx \\dfrac{v}{c}$ for $v \\ll c$. The recession is not a motion of galaxies through space but a stretching of **space itself**, predicted by Friedmann (1922) from Einstein's equations: every observer in every galaxy sees the same picture, like dots on an inflating balloon. There is no centre and no edge.

## The Big Bang

Running the expansion backwards, everything was together about $1/H_0 \\approx 14$ billion years ago. The Universe began in a hot, dense state, the **Big Bang**, and has been expanding and cooling ever since. The modern value of its age is $13{.}8$ billion years. Key moments:

| Time | Temperature | Event |
|---|---|---|
| $10^{-6}$ s | $10^{13}$ K | quarks combine into protons and neutrons |
| $3$ min | $10^9$ K | nucleosynthesis: $75\\%$ hydrogen, $25\\%$ helium by mass, traces of deuterium and lithium |
| $380\\,000$ yr | $3000$ K | atoms form; the Universe becomes transparent; light released then is the **cosmic microwave background** |
| $10^8$ yr | | first stars and galaxies |
| $9 \\cdot 10^9$ yr | | the Solar system forms |
| $13{.}8 \\cdot 10^9$ yr | $2{.}7$ K | today |

Three pillars of evidence:

> 1. **Expansion** according to Hubble's law.
> 2. The **cosmic microwave background** (Penzias and Wilson, 1965): radiation filling all space with a perfect black-body spectrum at $2{.}725$ K, the cooled light of the hot early Universe. Its tiny fluctuations ($10^{-5}$), mapped by the COBE, WMAP and Planck satellites, are the seeds of galaxies.
> 3. The **abundance of light elements**: the observed $25\\%$ helium and the deuterium fraction match the predictions of nucleosynthesis in the first minutes; stars alone could not have made so much helium.

## Dark matter

The rotation speed of galaxies does not fall off at large distances as Kepler's law would require for the visible mass; galaxies in clusters move too fast to be held by the visible matter (Zwicky, 1933; Rubin, 1970s); and gravitational lensing shows mass where no light is. About $85\\%$ of all matter is **dark matter**: it has gravity but emits no light and does not interact electromagnetically. Its nature is unknown; it is not made of ordinary atoms, and candidates are new elementary particles not yet found in accelerators.

## Dark energy

In 1998 observations of distant type Ia supernovae showed that the expansion is **accelerating**, not slowing down as gravity would demand. Something with negative pressure fills space: **dark energy**, possibly Einstein's cosmological constant, the energy of the vacuum. The Planck satellite gives the composition of the Universe:

| Component | Share |
|---|---|
| Dark energy | $68\\%$ |
| Dark matter | $27\\%$ |
| Ordinary matter (atoms) | $5\\%$ |
| Radiation and neutrinos | $< 0{.}1\\%$ |

Only $5\\%$ of the Universe is made of the stuff described by the Standard Model, and the stars we see are a tenth of that. The geometry of the Universe is flat, and with dark energy dominating, the expansion will apparently continue for ever.

## Worked examples

**Example 1.** A galaxy recedes at $7000$ km/s. Its distance?

$d = v/H_0 = 7000/70 = 100$ Mpc $\\approx 330$ million light-years.

**Example 2.** The hydrogen line at $656{.}3$ nm is observed at $700$ nm. Redshift, speed and distance of the galaxy?

$z = (700 - 656{.}3)/656{.}3 = 0{.}0666$; $v = zc = 0{.}0666 \\cdot 3 \\cdot 10^5 = 20\\,000$ km/s; $d = 20\\,000/70 \\approx 285$ Mpc.

**Example 3.** Estimate the age of the Universe from $H_0 = 70$ km/s/Mpc.

$1$ Mpc $= 3{.}09 \\cdot 10^{22}$ m, so $H_0 = 7 \\cdot 10^4 / 3{.}09 \\cdot 10^{22} = 2{.}27 \\cdot 10^{-18}$ s⁻¹; $t = 1/H_0 = 4{.}4 \\cdot 10^{17}$ s $\\approx 14$ billion years (the exact value with deceleration and acceleration is $13{.}8$).

**Example 4.** Peak wavelength of the cosmic microwave background ($T = 2{.}725$ K).

$\\lambda = 2{.}9 \\cdot 10^{-3} / 2{.}725 \\approx 1{.}06 \\cdot 10^{-3}$ m, about $1$ mm, in the microwave range.

**Example 5.** The background was emitted at $3000$ K and is now at $2{.}725$ K. By what factor has the Universe expanded since?

Wavelengths stretch with space and $\\lambda \\propto 1/T$: the factor is $3000/2{.}725 \\approx 1100$.

**Example 6.** Within a radius $R$ of a galaxy's centre the visible mass is $M$. What rotation speed does Kepler's law predict at $2R$, and what is observed?

$v \\propto 1/\\sqrt{r}$ outside the mass, so $v(2R) = v(R)/\\sqrt{2} \\approx 0{.}7\\,v(R)$; observed curves stay flat, $v(2R) \\approx v(R)$, which requires about twice the mass inside $2R$: dark matter.

**Example 7.** How far can we see in principle, and why?

Light has had only $13{.}8$ billion years to travel, so no object farther than about $13{.}8$ billion light-years in light-travel distance can be seen; because space expanded while the light was travelling, those objects are now about $46$ billion light-years away. This is the **observable Universe**.

**Example 8.** Number of CMB photons in a cubic metre: their density is about $4 \\cdot 10^8$ m⁻³. How does it compare with the number of atoms, about $0{.}25$ m⁻³ on average?

About $1{.}6 \\cdot 10^9$ photons per atom: the Universe is overwhelmingly radiation by number, but by energy the photons are negligible today.

## Exercises

1. State Hubble's law and explain what the redshift of a galaxy means.
2. A galaxy is at $200$ Mpc. How fast does it recede, and by what fraction are its spectral lines shifted?
3. A quasar has $z = 0{.}5$. Estimate its speed with the non-relativistic formula and say why the result is only approximate.
4. If $H_0$ were $140$ km/s/Mpc, what would be the estimated age of the Universe?
5. Name the three main pieces of evidence for the Big Bang.
6. Why could the $25\\%$ helium in the Universe not have been produced by stars?
7. What observations point to dark matter? What is its share of all matter?
8. What was discovered in 1998, and what name is given to its cause? What fraction of the Universe does it make up?

### Answers

1. $v = H_0 d$: recession speed is proportional to distance. The redshift is the stretching of light waves by the expansion of space while the light travels.
2. $v = 70 \\cdot 200 = 14\\,000$ km/s; $z = v/c \\approx 0{.}047$.
3. $v \\approx 0{.}5c = 150\\,000$ km/s; at such speeds the relativistic Doppler formula must be used, which gives $0{.}38c$.
4. $7$ billion years, younger than the oldest stars: a contradiction, which is one reason the value $70$ is accepted.
5. Hubble expansion, the cosmic microwave background at $2{.}7$ K, the abundances of helium and deuterium.
6. Stars have converted only about $1$–$2\\%$ of hydrogen to helium in $13$ billion years; such a uniform $25\\%$ everywhere requires the hot early Universe.
7. Flat rotation curves of galaxies, speeds of galaxies in clusters, gravitational lensing, the CMB fluctuations; about $85\\%$.
8. The acceleration of the expansion, from distant supernovae; dark energy; about $68\\%$.`,
        hy: `## Ընդարձակվող Տիեզերք

1929 թ․ Էդվին Հաբլը համեմատեց գալակտիկաների հեռավորությունները (ցեֆեիդներից) նրանց սպեկտրների գծերի շեղումների հետ։ Գրեթե բոլոր սպեկտրները շեղված են դեպի **կարմիր**, ինչը նշանակում է, որ գալակտիկաները հեռանում են, և որքան հեռու է գալակտիկան, այնքան ավելի արագ․

> **Հաբլի օրենք․** $v = H_0 \\, d$, որտեղ Հաբլի հաստատունը $H_0 \\approx 70$ կմ/վ մեկ մեգապարսեկին ($\\approx 2{,}3 \\cdot 10^{-18}$ վ⁻¹)։

Կարմիր շեղումը $z = \\dfrac{\\Delta\\lambda}{\\lambda} \\approx \\dfrac{v}{c}$ $v \\ll c$ դեպքում։ Հեռացումը գալակտիկաների շարժում չէ տարածության մեջ, այլ **հենց տարածության** ձգում, որը Ֆրիդմանը (1922) կանխատեսել էր Էյնշտեյնի հավասարումներից․ յուրաքանչյուր գալակտիկայի յուրաքանչյուր դիտող տեսնում է նույն պատկերը, ինչպես փչվող փուչիկի վրայի կետերը։ Կենտրոն և եզր չկա։

## Մեծ պայթյուն

Ընդարձակումը հետ պտտեցնելով՝ ամեն ինչ միասին էր մոտ $1/H_0 \\approx 14$ միլիարդ տարի առաջ։ Տիեզերքը սկսվել է տաք, խիտ վիճակից՝ **Մեծ պայթյունից**, և այդ ժամանակից ի վեր ընդարձակվում և սառչում է։ Նրա տարիքի ժամանակակից արժեքը $13{,}8$ միլիարդ տարի է։ Առանցքային պահեր․

| Ժամանակ | Ջերմաստիճան | Իրադարձություն |
|---|---|---|
| $10^{-6}$ վ | $10^{13}$ Կ | քվարկները միավորվում են պրոտոնների և նեյտրոնների |
| $3$ րոպե | $10^9$ Կ | նուկլեոսինթեզ․ ըստ զանգվածի $75\\%$ ջրածին, $25\\%$ հելիում, դեյտերիումի և լիթիումի հետքեր |
| $380\\,000$ տարի | $3000$ Կ | առաջանում են ատոմներ․ Տիեզերքը թափանցիկ է դառնում․ այդ ժամանակ ազատված լույսը **ռելիկտային ճառագայթումն** է |
| $10^8$ տարի | | առաջին աստղերն ու գալակտիկաները |
| $9 \\cdot 10^9$ տարի | | առաջանում է Արեգակնային համակարգը |
| $13{,}8 \\cdot 10^9$ տարի | $2{,}7$ Կ | այսօր |

Ապացույցների երեք հենասյուն․

> 1. **Ընդարձակումը** Հաբլի օրենքի համաձայն։
> 2. **Ռելիկտային ճառագայթումը** (Պենզիաս և Վիլսոն, 1965)․ ամբողջ տարածությունը լցնող ճառագայթում $2{,}725$ Կ-ում կատարյալ սևամարմնային սպեկտրով՝ տաք վաղ Տիեզերքի սառած լույսը։ Նրա չնչին տատանումները ($10^{-5}$), որոնք քարտեզագրել են COBE, WMAP և Planck արբանյակները, գալակտիկաների սաղմերն են։
> 3. **Թեթև տարրերի առատությունը**․ դիտվող $25\\%$ հելիումը և դեյտերիումի բաժինը համընկնում են առաջին րոպեների նուկլեոսինթեզի կանխատեսումներին․ միայն աստղերը չէին կարող այդքան հելիում ստեղծել։

## Մութ նյութ

Գալակտիկաների պտույտի արագությունը մեծ հեռավորությունների վրա չի նվազում այնպես, ինչպես Կեպլերի օրենքը կպահանջեր տեսանելի զանգվածի համար․ կույտերի գալակտիկաները շարժվում են չափազանց արագ, որ տեսանելի նյութը պահեր դրանք (Ցվիկի, 1933․ Ռուբին, 1970-ականներ)․ իսկ գրավիտացիոն ոսպնյակավորումը զանգված է ցույց տալիս այնտեղ, որտեղ լույս չկա։ Ամբողջ նյութի մոտ $85\\%$-ը **մութ նյութ** է․ այն ունի ձգողականություն, բայց լույս չի արձակում և էլեկտրամագնիսականորեն չի փոխազդում։ Նրա բնույթն անհայտ է․ այն սովորական ատոմներից կազմված չէ, և թեկնածուները դեռ արագացուցիչներում չգտնված նոր տարրական մասնիկներ են։

## Մութ էներգիա

1998 թ․ հեռավոր Ia տիպի գերնորերի դիտումները ցույց տվեցին, որ ընդարձակումն **արագանում է**, այլ ոչ թե դանդաղում, ինչպես ձգողականությունը կպահանջեր։ Տարածությունը լցված է բացասական ճնշմամբ ինչ-որ բանով․ **մութ էներգիա**, հնարավոր է՝ Էյնշտեյնի տիեզերաբանական հաստատունը՝ վակուումի էներգիան։ Planck արբանյակը տալիս է Տիեզերքի բաղադրությունը․

| Բաղադրիչ | Բաժին |
|---|---|
| Մութ էներգիա | $68\\%$ |
| Մութ նյութ | $27\\%$ |
| Սովորական նյութ (ատոմներ) | $5\\%$ |
| Ճառագայթում և նեյտրինոներ | $< 0{,}1\\%$ |

Տիեզերքի միայն $5\\%$-ն է կազմված Ստանդարտ մոդելի նկարագրած նյութից, իսկ մեր տեսած աստղերը դրա տասներորդ մասն են։ Տիեզերքի երկրաչափությունը հարթ է, և մութ էներգիայի գերակշռությամբ ընդարձակումը, ըստ երևույթին, հավերժ կշարունակվի։

## Լուծված օրինակներ

**Օրինակ 1։** Գալակտիկան հեռանում է $7000$ կմ/վ արագությամբ։ Հեռավորությո՞ւնը։

$d = v/H_0 = 7000/70 = 100$ Մպկ $\\approx 330$ միլիոն լուսային տարի։

**Օրինակ 2։** Ջրածնի $656{,}3$ նմ գիծը դիտվում է $700$ նմ-ում։ Գալակտիկայի կարմիր շեղումը, արագությունը և հեռավորությունը։

$z = (700 - 656{,}3)/656{,}3 = 0{,}0666$․ $v = zc = 0{,}0666 \\cdot 3 \\cdot 10^5 = 20\\,000$ կմ/վ․ $d = 20\\,000/70 \\approx 285$ Մպկ։

**Օրինակ 3։** Գնահատեք Տիեզերքի տարիքը $H_0 = 70$ կմ/վ/Մպկ-ից։

$1$ Մպկ $= 3{,}09 \\cdot 10^{22}$ մ, ուստի $H_0 = 7 \\cdot 10^4 / 3{,}09 \\cdot 10^{22} = 2{,}27 \\cdot 10^{-18}$ վ⁻¹․ $t = 1/H_0 = 4{,}4 \\cdot 10^{17}$ վ $\\approx 14$ միլիարդ տարի (դանդաղումով և արագացումով ճշգրիտ արժեքը $13{,}8$ է)։

**Օրինակ 4։** Ռելիկտային ճառագայթման ($T = 2{,}725$ Կ) առավելագույնի ալիքի երկարությունը։

$\\lambda = 2{,}9 \\cdot 10^{-3} / 2{,}725 \\approx 1{,}06 \\cdot 10^{-3}$ մ, մոտ $1$ մմ, միկրոալիքային տիրույթում։

**Օրինակ 5։** Ճառագայթումն արձակվել է $3000$ Կ-ում, իսկ այժմ $2{,}725$ Կ է։ Քանի՞ անգամ է Տիեզերքն այդ ժամանակից ընդարձակվել։

Ալիքի երկարությունները ձգվում են տարածության հետ, և $\\lambda \\propto 1/T$․ գործակիցը $3000/2{,}725 \\approx 1100$ է։

**Օրինակ 6։** Գալակտիկայի կենտրոնից $R$ շառավղի ներսում տեսանելի զանգվածը $M$ է։ Ի՞նչ պտույտի արագություն է Կեպլերի օրենքը կանխատեսում $2R$-ում, և ի՞նչ է դիտվում։

Զանգվածից դուրս $v \\propto 1/\\sqrt{r}$, ուստի $v(2R) = v(R)/\\sqrt{2} \\approx 0{,}7\\,v(R)$․ դիտվող կորերը մնում են հարթ, $v(2R) \\approx v(R)$, ինչը $2R$-ի ներսում մոտ կրկնակի զանգված է պահանջում․ մութ նյութ։

**Օրինակ 7։** Որքա՞ն հեռու կարող ենք սկզբունքորեն տեսնել, և ինչո՞ւ։

Լույսը ճանապարհորդելու համար ունեցել է միայն $13{,}8$ միլիարդ տարի, ուստի լույսի անցած հեռավորությամբ մոտ $13{,}8$ միլիարդ լուսային տարուց հեռու ոչ մի օբյեկտ չի կարող երևալ․ քանի որ լույսի ճանապարհորդելու ընթացքում տարածությունն ընդարձակվել է, այդ օբյեկտներն այժմ մոտ $46$ միլիարդ լուսային տարի հեռու են։ Սա **դիտելի Տիեզերքն** է։

**Օրինակ 8։** Ռելիկտային ֆոտոնների թիվը մեկ խորանարդ մետրում․ նրանց խտությունը մոտ $4 \\cdot 10^8$ մ⁻³ է։ Ինչպե՞ս է դա համեմատվում ատոմների թվի հետ՝ միջինում մոտ $0{,}25$ մ⁻³։

Մեկ ատոմին մոտ $1{,}6 \\cdot 10^9$ ֆոտոն․ Տիեզերքը քանակով ճնշող մեծամասնությամբ ճառագայթում է, բայց էներգիայով ֆոտոններն այսօր անտեսելի են։

## Վարժություններ

1. Ձևակերպեք Հաբլի օրենքը և բացատրեք, թե ինչ է նշանակում գալակտիկայի կարմիր շեղումը։
2. Գալակտիկան $200$ Մպկ հեռավորության վրա է։ Ի՞նչ արագությամբ է այն հեռանում, և ո՞ր մասով են շեղված նրա սպեկտրային գծերը։
3. Քվազարն ունի $z = 0{,}5$։ Գնահատեք նրա արագությունը ոչ ռելյատիվիստական բանաձևով և ասեք, թե ինչու է արդյունքը միայն մոտավոր։
4. Եթե $H_0$-ն $140$ կմ/վ/Մպկ լիներ, որքա՞ն կլիներ Տիեզերքի գնահատված տարիքը։
5. Անվանեք Մեծ պայթյունի երեք հիմնական ապացույցները։
6. Ինչո՞ւ Տիեզերքի $25\\%$ հելիումը չէր կարող աստղերի կողմից արտադրված լինել։
7. Ո՞ր դիտումներն են մատնանշում մութ նյութը։ Ո՞րն է նրա բաժինն ամբողջ նյութում։
8. Ի՞նչ հայտնաբերվեց 1998 թ․, և ի՞նչ անուն է տրված դրա պատճառին։ Տիեզերքի ո՞ր մասն է այն կազմում։

### Պատասխաններ

1. $v = H_0 d$․ հեռացման արագությունը համեմատական է հեռավորությանը։ Կարմիր շեղումը լույսի ալիքների ձգումն է տարածության ընդարձակմամբ լույսի ճանապարհորդելու ընթացքում։
2. $v = 70 \\cdot 200 = 14\\,000$ կմ/վ․ $z = v/c \\approx 0{,}047$։
3. $v \\approx 0{,}5c = 150\\,000$ կմ/վ․ այդպիսի արագությունների դեպքում պետք է օգտագործել Դոպլերի ռելյատիվիստական բանաձևը, որը տալիս է $0{,}38c$։
4. $7$ միլիարդ տարի՝ ամենահին աստղերից երիտասարդ․ հակասություն, որը $70$ արժեքն ընդունելու պատճառներից մեկն է։
5. Հաբլի ընդարձակումը, $2{,}7$ Կ ռելիկտային ճառագայթումը, հելիումի և դեյտերիումի առատությունները։
6. Աստղերը $13$ միլիարդ տարում ջրածնի միայն մոտ $1$–$2\\%$-ն են վերածել հելիումի․ ամենուր այդպիսի միատեսակ $25\\%$-ը պահանջում է տաք վաղ Տիեզերք։
7. Գալակտիկաների հարթ պտույտի կորերը, կույտերում գալակտիկաների արագությունները, գրավիտացիոն ոսպնյակավորումը, ռելիկտային ճառագայթման տատանումները․ մոտ $85\\%$։
8. Ընդարձակման արագացումը՝ հեռավոր գերնորերից․ մութ էներգիա․ մոտ $68\\%$։`,
        ru: `## Расширяющаяся Вселенная

В 1929 г. Эдвин Хаббл сравнил расстояния до галактик (по цефеидам) со смещениями линий в их спектрах. Почти все спектры смещены в **красную** сторону, то есть галактики удаляются, и чем дальше галактика, тем быстрее:

> **Закон Хаббла:** $v = H_0 \\, d$, где постоянная Хаббла $H_0 \\approx 70$ км/с на мегапарсек ($\\approx 2{,}3 \\cdot 10^{-18}$ с⁻¹).

Красное смещение $z = \\dfrac{\\Delta\\lambda}{\\lambda} \\approx \\dfrac{v}{c}$ при $v \\ll c$. Удаление — это не движение галактик сквозь пространство, а растяжение **самого пространства**, предсказанное Фридманом (1922) из уравнений Эйнштейна: каждый наблюдатель в каждой галактике видит ту же картину, как точки на надуваемом шарике. Нет ни центра, ни края.

## Большой взрыв

Прокручивая расширение назад, получаем, что всё было вместе около $1/H_0 \\approx 14$ миллиардов лет назад. Вселенная началась с горячего плотного состояния, **Большого взрыва**, и с тех пор расширяется и остывает. Современное значение её возраста — $13{,}8$ миллиарда лет. Ключевые моменты:

| Время | Температура | Событие |
|---|---|---|
| $10^{-6}$ с | $10^{13}$ К | кварки объединяются в протоны и нейтроны |
| $3$ мин | $10^9$ К | нуклеосинтез: по массе $75\\%$ водорода, $25\\%$ гелия, следы дейтерия и лития |
| $380\\,000$ лет | $3000$ К | образуются атомы; Вселенная становится прозрачной; свет, вышедший тогда, — **реликтовое излучение** |
| $10^8$ лет | | первые звёзды и галактики |
| $9 \\cdot 10^9$ лет | | образуется Солнечная система |
| $13{,}8 \\cdot 10^9$ лет | $2{,}7$ К | сегодня |

Три столпа доказательств:

> 1. **Расширение** по закону Хаббла.
> 2. **Реликтовое излучение** (Пензиас и Вильсон, 1965): излучение, заполняющее всё пространство, с идеальным чернотельным спектром при $2{,}725$ К, остывший свет горячей ранней Вселенной. Его крошечные флуктуации ($10^{-5}$), картированные спутниками COBE, WMAP и Planck, — зародыши галактик.
> 3. **Распространённость лёгких элементов**: наблюдаемые $25\\%$ гелия и доля дейтерия совпадают с предсказаниями нуклеосинтеза первых минут; одни звёзды не могли бы создать столько гелия.

## Тёмная материя

Скорость вращения галактик не падает на больших расстояниях, как требовал бы закон Кеплера для видимой массы; галактики в скоплениях движутся слишком быстро, чтобы их удерживало видимое вещество (Цвикки, 1933; Рубин, 1970-е); гравитационное линзирование показывает массу там, где нет света. Около $85\\%$ всего вещества — **тёмная материя**: она обладает тяготением, но не излучает света и не взаимодействует электромагнитно. Её природа неизвестна; она не состоит из обычных атомов, а кандидаты — новые элементарные частицы, ещё не найденные на ускорителях.

## Тёмная энергия

В 1998 г. наблюдения далёких сверхновых типа Ia показали, что расширение **ускоряется**, а не замедляется, как требовало бы тяготение. Пространство заполняет нечто с отрицательным давлением: **тёмная энергия**, возможно, космологическая постоянная Эйнштейна, энергия вакуума. Спутник Planck даёт состав Вселенной:

| Компонент | Доля |
|---|---|
| Тёмная энергия | $68\\%$ |
| Тёмная материя | $27\\%$ |
| Обычное вещество (атомы) | $5\\%$ |
| Излучение и нейтрино | $< 0{,}1\\%$ |

Лишь $5\\%$ Вселенной состоит из вещества, описываемого Стандартной моделью, а видимые нами звёзды — десятая часть этого. Геометрия Вселенной плоская, и при господстве тёмной энергии расширение, по-видимому, будет продолжаться вечно.

## Разобранные примеры

**Пример 1.** Галактика удаляется со скоростью $7000$ км/с. Её расстояние?

$d = v/H_0 = 7000/70 = 100$ Мпк $\\approx 330$ миллионов световых лет.

**Пример 2.** Линия водорода $656{,}3$ нм наблюдается на $700$ нм. Красное смещение, скорость и расстояние галактики?

$z = (700 - 656{,}3)/656{,}3 = 0{,}0666$; $v = zc = 0{,}0666 \\cdot 3 \\cdot 10^5 = 20\\,000$ км/с; $d = 20\\,000/70 \\approx 285$ Мпк.

**Пример 3.** Оцените возраст Вселенной по $H_0 = 70$ км/с/Мпк.

$1$ Мпк $= 3{,}09 \\cdot 10^{22}$ м, значит $H_0 = 7 \\cdot 10^4 / 3{,}09 \\cdot 10^{22} = 2{,}27 \\cdot 10^{-18}$ с⁻¹; $t = 1/H_0 = 4{,}4 \\cdot 10^{17}$ с $\\approx 14$ миллиардов лет (точное значение с учётом замедления и ускорения — $13{,}8$).

**Пример 4.** Длина волны максимума реликтового излучения ($T = 2{,}725$ К).

$\\lambda = 2{,}9 \\cdot 10^{-3} / 2{,}725 \\approx 1{,}06 \\cdot 10^{-3}$ м, около $1$ мм, в микроволновом диапазоне.

**Пример 5.** Излучение вышло при $3000$ К, а сейчас имеет $2{,}725$ К. Во сколько раз расширилась Вселенная с тех пор?

Длины волн растягиваются вместе с пространством, и $\\lambda \\propto 1/T$: множитель $3000/2{,}725 \\approx 1100$.

**Пример 6.** Внутри радиуса $R$ от центра галактики видимая масса равна $M$. Какую скорость вращения предсказывает закон Кеплера на $2R$ и что наблюдается?

Вне массы $v \\propto 1/\\sqrt{r}$, значит $v(2R) = v(R)/\\sqrt{2} \\approx 0{,}7\\,v(R)$; наблюдаемые кривые остаются плоскими, $v(2R) \\approx v(R)$, что требует вдвое большей массы внутри $2R$: тёмная материя.

**Пример 7.** Как далеко мы в принципе можем видеть и почему?

У света было лишь $13{,}8$ миллиарда лет на путь, поэтому ни один объект дальше примерно $13{,}8$ миллиарда световых лет по пройденному светом пути не виден; поскольку пространство расширялось, пока свет шёл, эти объекты сейчас находятся примерно в $46$ миллиардах световых лет. Это **наблюдаемая Вселенная**.

**Пример 8.** Число реликтовых фотонов в кубическом метре: их плотность около $4 \\cdot 10^8$ м⁻³. Как это соотносится с числом атомов, в среднем около $0{,}25$ м⁻³?

Около $1{,}6 \\cdot 10^9$ фотонов на атом: по числу Вселенная подавляюще состоит из излучения, но по энергии фотоны сегодня пренебрежимы.

## Упражнения

1. Сформулируйте закон Хаббла и объясните, что означает красное смещение галактики.
2. Галактика находится на $200$ Мпк. С какой скоростью она удаляется и на какую долю смещены её спектральные линии?
3. У квазара $z = 0{,}5$. Оцените его скорость по нерелятивистской формуле и скажите, почему результат лишь приближённый.
4. Если бы $H_0$ был равен $140$ км/с/Мпк, каким был бы оценочный возраст Вселенной?
5. Назовите три главных доказательства Большого взрыва.
6. Почему $25\\%$ гелия во Вселенной не могли быть произведены звёздами?
7. Какие наблюдения указывают на тёмную материю? Какова её доля во всём веществе?
8. Что было открыто в 1998 г. и как называют причину этого? Какую долю Вселенной она составляет?

### Ответы

1. $v = H_0 d$: скорость удаления пропорциональна расстоянию. Красное смещение — растяжение световых волн расширением пространства, пока свет в пути.
2. $v = 70 \\cdot 200 = 14\\,000$ км/с; $z = v/c \\approx 0{,}047$.
3. $v \\approx 0{,}5c = 150\\,000$ км/с; при таких скоростях нужна релятивистская формула Доплера, дающая $0{,}38c$.
4. $7$ миллиардов лет, моложе самых старых звёзд: противоречие, одна из причин, по которым принято значение $70$.
5. Расширение по Хабблу, реликтовое излучение при $2{,}7$ К, распространённость гелия и дейтерия.
6. Звёзды за $13$ миллиардов лет превратили в гелий лишь около $1$–$2\\%$ водорода; столь однородные $25\\%$ повсюду требуют горячей ранней Вселенной.
7. Плоские кривые вращения галактик, скорости галактик в скоплениях, гравитационное линзирование, флуктуации реликтового излучения; около $85\\%$.
8. Ускорение расширения, по далёким сверхновым; тёмная энергия; около $68\\%$.`,
      },
      [
        q(t("Hubble's law states that the recession speed of a galaxy is proportional to its…", "Հաբլի օրենքն ասում է, որ գալակտիկայի հեռացման արագությունը համեմատական է նրա…", "Закон Хаббла утверждает, что скорость удаления галактики пропорциональна её…"), [t("distance", "հեռավորությանը", "расстоянию"), t("mass", "զանգվածին", "массе"), t("temperature", "ջերմաստիճանին", "температуре")], 0),
        q(t("The age of the Universe is about…", "Տիեզերքի տարիքը մոտ … է։", "Возраст Вселенной около…"), [t("13.8 billion years", "13,8 միլիարդ տարի", "13,8 миллиарда лет"), t("4.6 billion years", "4,6 միլիարդ տարի", "4,6 миллиарда лет"), t("13.8 million years", "13,8 միլիոն տարի", "13,8 миллиона лет")], 0),
        q(t("The cosmic microwave background has a temperature of…", "Ռելիկտային ճառագայթման ջերմաստիճանը … է։", "Температура реликтового излучения…"), [t("2.7 K", "2,7 Կ", "2,7 К"), t("3000 K", "3000 Կ", "3000 К"), t("5800 K", "5800 Կ", "5800 К")], 0),
        q(t("In the first minutes the Universe produced mainly…", "Առաջին րոպեներին Տիեզերքը հիմնականում արտադրեց…", "В первые минуты Вселенная произвела в основном…"), [t("hydrogen and helium", "ջրածին և հելիում", "водород и гелий"), t("iron and nickel", "երկաթ և նիկել", "железо и никель"), t("carbon and oxygen", "ածխածին և թթվածին", "углерод и кислород")], 0),
        q(t("Dark matter is detected through…", "Մութ նյութը հայտնաբերվում է…", "Тёмную материю обнаруживают по…"), [t("its gravitational effects", "իր գրավիտացիոն ազդեցությամբ", "её гравитационному действию"), t("the light it emits", "իր արձակած լույսով", "излучаемому ею свету"), t("its radioactivity", "իր ռադիոակտիվությամբ", "её радиоактивности")], 0),
        q(t("The largest share of the Universe's energy content is…", "Տիեզերքի էներգիական պարունակության ամենամեծ բաժինը…", "Наибольшая доля энергетического содержания Вселенной — это…"), [t("dark energy", "մութ էներգիան է", "тёмная энергия"), t("stars", "աստղերն են", "звёзды"), t("ordinary atoms", "սովորական ատոմներն են", "обычные атомы")], 0),
      ],
    ),
  ],
};
