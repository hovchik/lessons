import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Relativity and quantum physics", "Հարաբերականություն և քվանտային ֆիզիկա", "СТО и квантовая физика"),
  summary: t("Postulates of special relativity, mass–energy, photoelectric effect, photons, Bohr's atom, lasers.", "Հարաբերականության հատուկ տեսության պոստուլատներ, զանգված–էներգիա, ֆոտոէֆեկտ, ֆոտոններ, Բորի ատոմ, լազերներ։", "Постулаты СТО, масса и энергия, фотоэффект, фотоны, атом Бора, лазеры."),
  lessons: [
    lesson(
      "sto-postulates",
      ["Postulates of special relativity; relativity of time and length", "ՀՏ պոստուլատներ, ժամանակի և երկարության հարաբերականություն", "Постулаты СТО; относительность времени и длины"],
      {
        en: ["State Einstein's two postulates and explain why they conflict with the classical addition of velocities", "Compute time dilation Δt = Δt₀/√(1 − v²/c²) and length contraction l = l₀√(1 − v²/c²)", "Apply the relativistic addition of velocities and explain the relativity of simultaneity"],
        hy: ["Ձևակերպել Էյնշտեյնի երկու պոստուլատները և բացատրել, թե ինչու են դրանք հակասում արագությունների դասական գումարմանը", "Հաշվել ժամանակի դանդաղումը Δt = Δt₀/√(1 − v²/c²) և երկարության կրճատումը l = l₀√(1 − v²/c²)", "Կիրառել արագությունների ռելյատիվիստական գումարումը և բացատրել միաժամանակության հարաբերականությունը"],
        ru: ["Формулировать два постулата Эйнштейна и объяснять, почему они противоречат классическому сложению скоростей", "Вычислять замедление времени Δt = Δt₀/√(1 − v²/c²) и сокращение длины l = l₀√(1 − v²/c²)", "Применять релятивистское сложение скоростей и объяснять относительность одновременности"],
      },
      {
        en: `## The problem with the speed of light

Galileo's principle of relativity says that mechanical experiments inside a ship moving uniformly cannot reveal its motion: the laws of mechanics are the same in all inertial frames. Velocities add classically: a ball thrown at $u$ from a train moving at $v$ has speed $u + v$ relative to the ground.

Maxwell's equations give light a definite speed $c$. Relative to what? Physicists supposed a medium, the **ether**, and expected the Earth's motion through it to change the measured speed of light by about $30$ km/s. Michelson and Morley (1887) looked for this change with an interferometer sensitive to a few kilometres per second and found **nothing**. Light moves at $c$ in every direction regardless of the motion of the source or the observer.

## Einstein's postulates (1905)

> 1. **Principle of relativity.** All laws of physics, not only mechanics, are the same in every inertial frame of reference.
> 2. **Constancy of the speed of light.** The speed of light in vacuum is the same in all inertial frames, independent of the motion of the source or the observer.

Both are supported by experiment; together they cannot be reconciled with the classical addition of velocities, where a light ray from a moving lamp would travel at $c + v$. Einstein concluded that it is our ideas of **space and time** that need changing: time intervals and lengths are not absolute but depend on the frame of reference.

## Relativity of simultaneity

A flash is set off in the middle of a moving carriage. For a passenger the light reaches both ends at the same moment. For an observer on the platform the rear wall moves toward the light and the front wall moves away, so the light reaches the rear first. Two events simultaneous in one frame are not simultaneous in another. There is no universal "now"; each frame has its own time.

## Time dilation

Consider a **light clock**: a flash bounces between two mirrors a distance $h$ apart; one tick is $\\Delta t_0 = \\dfrac{2h}{c}$. For an observer who sees the clock move at speed $v$, the flash travels a longer zigzag path at the same speed $c$, so the tick lasts longer:

> $$\\Delta t = \\dfrac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}}.$$

$\\Delta t_0$ is the **proper time**, measured by the clock that is at rest relative to the events. A moving clock runs slow; this is not a defect of the clock but a property of time. Confirmations: muons created in the upper atmosphere live $2{.}2$ μs at rest and should travel only $660$ m, yet they reach the ground because their time is stretched; atomic clocks flown around the world lag by nanoseconds exactly as predicted; GPS satellites' clocks are corrected for the effect every day.

## Length contraction

A rod of proper length $l_0$ (measured at rest) moving along its length is measured shorter:

> $$l = l_0\\sqrt{1 - v^2/c^2}.$$

Transverse dimensions do not change. For the muon in its own frame the atmosphere is contracted, which is the same fact seen from the other side.

## Addition of velocities

If a body moves at $u'$ relative to a frame that moves at $v$ relative to us (all along one line), its velocity relative to us is

$$u = \\dfrac{u' + v}{1 + u'v/c^2}.$$

For $u' = c$ this gives $u = c$ whatever $v$ is: light cannot be overtaken or slowed by chasing it. For small velocities the denominator is $1$ and the classical rule returns. The factor $\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}}$ is close to $1$ for everyday speeds: relativity is invisible at $1000$ km/h and dominant near $c$.

**Example 1.** A spacecraft moves at $0{.}6c$. $\\sqrt{1 - 0{.}36} = 0{.}8$. A clock on board that shows $8$ years has, for Earth, run through $10$ years. A $100$ m ship is measured as $80$ m long from Earth.

**Example 2.** At $v = 0{.}99c$, $\\gamma = \\dfrac{1}{\\sqrt{1 - 0{.}98}} \\approx 7{.}1$. A muon's $2{.}2$ μs becomes $15{.}6$ μs on Earth, enough to cover $4{.}6$ km. In the muon's frame the $10$ km of atmosphere is contracted to $1{.}4$ km.

**Example 3.** An aircraft flies at $250$ m/s for $10$ hours. $\\dfrac{v^2}{c^2} \\approx 7 \\cdot 10^{-13}$, and $\\Delta t - \\Delta t_0 \\approx \\Delta t_0\\dfrac{v^2}{2c^2} \\approx 36000 \\cdot 3{.}5 \\cdot 10^{-13} \\approx 1{.}3 \\cdot 10^{-8}$ s: $13$ nanoseconds, measurable with atomic clocks.

**Example 4.** Two ships approach each other, each at $0{.}8c$ relative to a space station. Their relative speed is $\\dfrac{0{.}8c + 0{.}8c}{1 + 0{.}64} = \\dfrac{1{.}6c}{1{.}64} \\approx 0{.}976c$, not $1{.}6c$.

**Example 5.** A rocket at $0{.}5c$ fires a probe forward at $0{.}5c$ relative to itself. Relative to Earth: $\\dfrac{0{.}5 + 0{.}5}{1 + 0{.}25}c = 0{.}8c$. The rocket switches on a headlight: its light moves at $c$ relative to the rocket and at $\\dfrac{c + 0{.}5c}{1 + 0{.}5} = c$ relative to Earth.

**Example 6.** At what speed does a clock run at half rate? $\\sqrt{1 - v^2/c^2} = \\dfrac{1}{2}$, $\\dfrac{v^2}{c^2} = \\dfrac{3}{4}$, $v = \\dfrac{\\sqrt3}{2}c \\approx 0{.}866c$. At the same speed lengths are halved.

**Example 7.** A star is $20$ light years away. A ship travelling at $0{.}99c$ reaches it after $20{.}2$ years of Earth time, but the crew ages only $\\dfrac{20{.}2}{7{.}1} \\approx 2{.}8$ years: for them the distance was contracted to $2{.}8$ light years. Interstellar travel within a lifetime is possible in principle, though the Earth would age much more (the twin paradox).

**Example 8.** Why is the effect symmetric, each observer seeing the other's clock slow, and yet the travelling twin returns younger? Symmetry holds only between inertial frames. The traveller turns around, that is, accelerates, and is not in one inertial frame throughout; the situation is not symmetric, and the calculation in the Earth frame (or any inertial frame) gives the traveller the shorter proper time.

## Exercises

1. Find $\\gamma$ for $v = 0{.}8c$, $0{.}9c$ and $0{.}999c$.
2. A particle lives $10^{-8}$ s at rest. How long does it live in the laboratory when moving at $0{.}8c$? How far does it travel?
3. A rod $1$ m long moves lengthwise at $0{.}6c$. Find its measured length. What if it moves sideways?
4. At what speed is a rod contracted to $\\dfrac{1}{3}$ of its length?
5. Two particles move toward each other at $0{.}7c$ and $0{.}7c$. Find their relative speed.
6. A ship moving at $0{.}9c$ sends a signal forward at $c$. What speed does an Earth observer measure for the signal?
7. A satellite moves at $7{.}7$ km/s. By how many seconds per day does its clock lag an Earth clock from this effect alone?
8. Explain why the muon experiment confirms both time dilation and length contraction.

### Answers

1. $1{.}67$; $2{.}29$; $22{.}4$. 2. $1{.}67 \\cdot 10^{-8}$ s; $0{.}8 \\cdot 3 \\cdot 10^8 \\cdot 1{.}67 \\cdot 10^{-8} = 4$ m. 3. $0{.}8$ m; still $1$ m. 4. $\\sqrt{1 - v^2/c^2} = \\dfrac{1}{3}$, $v = \\dfrac{2\\sqrt2}{3}c \\approx 0{.}943c$. 5. $\\dfrac{1{.}4c}{1 + 0{.}49} \\approx 0{.}94c$. 6. $c$. 7. $\\dfrac{v^2}{2c^2} \\cdot 86400 \\approx 3{.}3 \\cdot 10^{-10} \\cdot 86400 \\approx 2{.}8 \\cdot 10^{-5}$ s, about $28$ μs. 8. In the Earth frame the muon's lifetime is stretched; in the muon's frame the atmosphere is shortened; both views give the same arrival at the ground.`,
        hy: `## Լույսի արագության խնդիրը

Գալիլեյի հարաբերականության սկզբունքն ասում է, որ հավասարաչափ շարժվող նավի ներսում մեխանիկական փորձերը չեն կարող բացահայտել նրա շարժումը․ մեխանիկայի օրենքները նույնն են բոլոր իներցիալ համակարգերում։ Արագությունները գումարվում են դասական եղանակով․ $v$ արագությամբ գնացքից $u$ արագությամբ նետված գնդակը գետնի նկատմամբ ունի $u + v$ արագություն։

Մաքսվելի հավասարումները լույսին տալիս են որոշակի $c$ արագություն։ Ինչի՞ նկատմամբ։ Ֆիզիկոսներն ենթադրում էին միջավայր՝ **եթեր**, և սպասում էին, որ Երկրի շարժումը նրա միջով լույսի չափված արագությունը կփոխի մոտ $30$ կմ/վ-ով։ Մայքելսոնը և Մորլին (1887) այդ փոփոխությունը փնտրեցին վայրկյանում մի քանի կիլոմետրի զգայունությամբ ինտերֆերաչափով և **ոչինչ** չգտան։ Լույսը բոլոր ուղղություններով շարժվում է $c$ արագությամբ՝ անկախ աղբյուրի կամ դիտորդի շարժումից։

## Էյնշտեյնի պոստուլատները (1905)

> 1. **Հարաբերականության սկզբունք։** Ֆիզիկայի բոլոր օրենքները, ոչ միայն մեխանիկայինը, նույնն են բոլոր իներցիալ հաշվարկման համակարգերում։
> 2. **Լույսի արագության հաստատունություն։** Լույսի արագությունը վակուումում նույնն է բոլոր իներցիալ համակարգերում՝ անկախ աղբյուրի կամ դիտորդի շարժումից։

Երկուսն էլ հաստատված են փորձով, միասին դրանք չեն կարող համաձայնեցվել արագությունների դասական գումարման հետ, որտեղ շարժվող լամպի լույսի ճառագայթը կշարժվեր $c + v$ արագությամբ։ Էյնշտեյնն եզրակացրեց, որ փոխվելու կարիք ունեն մեր պատկերացումները **տարածության և ժամանակի** մասին․ ժամանակի միջակայքերն ու երկարությունները բացարձակ չեն, այլ կախված են հաշվարկման համակարգից։

## Միաժամանակության հարաբերականություն

Շարժվող վագոնի մեջտեղում բռնկում է տեղի ունենում։ Ուղևորի համար լույսն երկու ծայրերին հասնում է նույն պահին։ Կառամատույցի դիտորդի համար հետևի պատը շարժվում է դեպի լույսը, իսկ առջևինը՝ հեռանում, ուստի լույսն առաջինը հասնում է հետևի պատին։ Մեկ համակարգում միաժամանակյա երկու իրադարձություններ մյուսում միաժամանակյա չեն։ Համընդհանուր «հիմա» գոյություն չունի, յուրաքանչյուր համակարգ ունի իր ժամանակը։

## Ժամանակի դանդաղում

Դիտարկենք **լուսային ժամացույց**․ բռնկումն արտացոլվում է իրարից $h$ հեռավորության վրա գտնվող երկու հայելիների միջև, մեկ տիկը $\\Delta t_0 = \\dfrac{2h}{c}$ է։ Ժամացույցը $v$ արագությամբ շարժվող տեսնող դիտորդի համար բռնկումն անցնում է ավելի երկար զիգզագաձև ճանապարհ նույն $c$ արագությամբ, ուստի տիկն ավելի երկար է տևում․

> $$\\Delta t = \\dfrac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}}$$

$\\Delta t_0$-ն **սեփական ժամանակն** է, որը չափում է իրադարձությունների նկատմամբ անշարժ ժամացույցը։ Շարժվող ժամացույցը հետ է մնում, սա ժամացույցի թերություն չէ, այլ ժամանակի հատկություն։ Հաստատումներ․ մթնոլորտի վերին շերտերում ծնված մյուոններն անշարժ վիճակում ապրում են $2{,}2$ մկվ և պետք է անցնեին ընդամենը $660$ մ, սակայն հասնում են գետնին, քանի որ նրանց ժամանակը ձգված է, աշխարհի շուրջը թռցված ատոմային ժամացույցները հետ են մնում նանովայրկյաններով ճիշտ այնպես, ինչպես կանխատեսվել է, GPS արբանյակների ժամացույցներն ամեն օր ուղղվում են այս երևույթի համար։

## Երկարության կրճատում

$l_0$ սեփական երկարությամբ (անշարժ չափված) ձողը, որը շարժվում է իր երկարության ուղղությամբ, չափվում է ավելի կարճ․

> $$l = l_0\\sqrt{1 - v^2/c^2}$$

Լայնական չափերը չեն փոխվում։ Մյուոնի համար իր համակարգում մթնոլորտը կրճատված է, ինչը նույն փաստն է՝ տեսված մյուս կողմից։

## Արագությունների գումարում

Եթե մարմինը շարժվում է $u'$ արագությամբ մեր նկատմամբ $v$ արագությամբ շարժվող համակարգի նկատմամբ (բոլորը մեկ ուղղի երկայնքով), նրա արագությունը մեր նկատմամբ

$$u = \\dfrac{u' + v}{1 + u'v/c^2}$$

$u' = c$ դեպքում սա տալիս է $u = c$, ինչ էլ լինի $v$-ն․ լույսին հնարավոր չէ հասնել կամ դանդաղեցնել հետապնդելով։ Փոքր արագությունների դեպքում հայտարարը $1$ է, և վերադառնում է դասական կանոնը։ $\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}}$ գործակիցն առօրյա արագությունների համար մոտ է $1$-ի․ հարաբերականությունն անտեսանելի է $1000$ կմ/ժ-ի դեպքում և գերիշխող՝ $c$-ի մոտ։

**Օրինակ 1։** Տիեզերանավը շարժվում է $0{,}6c$ արագությամբ։ $\\sqrt{1 - 0{,}36} = 0{,}8$։ Նավի ժամացույցը, որը ցույց է տալիս $8$ տարի, Երկրի համար անցել է $10$ տարի։ $100$ մ նավն Երկրից չափվում է $80$ մ երկարությամբ։

**Օրինակ 2։** $v = 0{,}99c$ դեպքում $\\gamma = \\dfrac{1}{\\sqrt{1 - 0{,}98}} \\approx 7{,}1$։ Մյուոնի $2{,}2$ մկվ-ը Երկրի վրա դառնում է $15{,}6$ մկվ, որը բավական է $4{,}6$ կմ անցնելու համար։ Մյուոնի համակարգում մթնոլորտի $10$ կմ-ը կրճատված է մինչև $1{,}4$ կմ։

**Օրինակ 3։** Ինքնաթիռը $10$ ժամ թռչում է $250$ մ/վ արագությամբ։ $\\dfrac{v^2}{c^2} \\approx 7 \\cdot 10^{-13}$, և $\\Delta t - \\Delta t_0 \\approx \\Delta t_0\\dfrac{v^2}{2c^2} \\approx 36000 \\cdot 3{,}5 \\cdot 10^{-13} \\approx 1{,}3 \\cdot 10^{-8}$ վ․ $13$ նանովայրկյան, որը չափելի է ատոմային ժամացույցներով։

**Օրինակ 4։** Երկու նավ մոտենում են իրար՝ յուրաքանչյուրը տիեզերակայանի նկատմամբ $0{,}8c$ արագությամբ։ Նրանց հարաբերական արագությունը $\\dfrac{0{,}8c + 0{,}8c}{1 + 0{,}64} = \\dfrac{1{,}6c}{1{,}64} \\approx 0{,}976c$ է, ոչ թե $1{,}6c$։

**Օրինակ 5։** $0{,}5c$ արագությամբ հրթիռն առաջ է արձակում զոնդ՝ իր նկատմամբ $0{,}5c$ արագությամբ։ Երկրի նկատմամբ․ $\\dfrac{0{,}5 + 0{,}5}{1 + 0{,}25}c = 0{,}8c$։ Հրթիռը միացնում է լուսարձակը․ նրա լույսը շարժվում է $c$ արագությամբ հրթիռի նկատմամբ և $\\dfrac{c + 0{,}5c}{1 + 0{,}5} = c$՝ Երկրի նկատմամբ։

**Օրինակ 6։** Ի՞նչ արագության դեպքում է ժամացույցը կես արագությամբ ընթանում։ $\\sqrt{1 - v^2/c^2} = \\dfrac{1}{2}$, $\\dfrac{v^2}{c^2} = \\dfrac{3}{4}$, $v = \\dfrac{\\sqrt3}{2}c \\approx 0{,}866c$։ Նույն արագության դեպքում երկարությունները կիսվում են։

**Օրինակ 7։** Աստղը $20$ լուսատարի հեռու է։ $0{,}99c$ արագությամբ նավը նրան հասնում է Երկրի ժամանակով $20{,}2$ տարի հետո, բայց անձնակազմը ծերանում է ընդամենը $\\dfrac{20{,}2}{7{,}1} \\approx 2{,}8$ տարով․ նրանց համար հեռավորությունը կրճատվել էր մինչև $2{,}8$ լուսատարի։ Միջաստղային ճանապարհորդությունը մեկ կյանքի ընթացքում սկզբունքորեն հնարավոր է, թեև Երկիրը շատ ավելի կծերանար (երկվորյակների պարադոքս)։

**Օրինակ 8։** Ինչո՞ւ է երևույթը համաչափ, յուրաքանչյուր դիտորդ տեսնում է մյուսի ժամացույցի դանդաղումը, և սակայն ճանապարհորդող երկվորյակը վերադառնում է ավելի երիտասարդ։ Համաչափությունը գործում է միայն իներցիալ համակարգերի միջև։ Ճանապարհորդը շրջվում է, այսինքն՝ արագանում, և ամբողջ ընթացքում մեկ իներցիալ համակարգում չէ, իրավիճակը համաչափ չէ, և Երկրի համակարգում (կամ ցանկացած իներցիալ համակարգում) հաշվարկը ճանապարհորդին տալիս է ավելի կարճ սեփական ժամանակ։

## Վարժություններ

1. Գտեք $\\gamma$-ն $v = 0{,}8c$, $0{,}9c$ և $0{,}999c$ դեպքում։
2. Մասնիկն անշարժ վիճակում ապրում է $10^{-8}$ վ։ Որքա՞ն է այն ապրում լաբորատորիայում $0{,}8c$ արագությամբ շարժվելիս։ Որքա՞ն ճանապարհ է անցնում։
3. $1$ մ երկարությամբ ձողն երկայնքով շարժվում է $0{,}6c$ արագությամբ։ Գտեք նրա չափված երկարությունը։ Իսկ եթե շարժվում է լայնակի։
4. Ի՞նչ արագության դեպքում է ձողը կրճատվում իր երկարության $\\dfrac{1}{3}$-ի։
5. Երկու մասնիկներ շարժվում են իրար ընդառաջ $0{,}7c$ և $0{,}7c$ արագություններով։ Գտեք նրանց հարաբերական արագությունը։
6. $0{,}9c$ արագությամբ շարժվող նավն առաջ ազդանշան է ուղարկում $c$ արագությամբ։ Ի՞նչ արագություն է չափում Երկրի դիտորդն ազդանշանի համար։
7. Արբանյակը շարժվում է $7{,}7$ կմ/վ արագությամբ։ Միայն այս երևույթի պատճառով օրական քանի՞ վայրկյանով է նրա ժամացույցը հետ մնում Երկրի ժամացույցից։
8. Բացատրեք, թե ինչու է մյուոնի փորձը հաստատում և՛ ժամանակի դանդաղումը, և՛ երկարության կրճատումը։

### Պատասխաններ

1. $1{,}67$, $2{,}29$, $22{,}4$։ 2. $1{,}67 \\cdot 10^{-8}$ վ, $0{,}8 \\cdot 3 \\cdot 10^8 \\cdot 1{,}67 \\cdot 10^{-8} = 4$ մ։ 3. $0{,}8$ մ, նորից $1$ մ։ 4. $\\sqrt{1 - v^2/c^2} = \\dfrac{1}{3}$, $v = \\dfrac{2\\sqrt2}{3}c \\approx 0{,}943c$։ 5. $\\dfrac{1{,}4c}{1 + 0{,}49} \\approx 0{,}94c$։ 6. $c$։ 7. $\\dfrac{v^2}{2c^2} \\cdot 86400 \\approx 3{,}3 \\cdot 10^{-10} \\cdot 86400 \\approx 2{,}8 \\cdot 10^{-5}$ վ, մոտ $28$ մկվ։ 8. Երկրի համակարգում մյուոնի կյանքի տևողությունը ձգված է, մյուոնի համակարգում մթնոլորտը կրճատված է, երկու տեսակետներն էլ տալիս են գետնին նույն հասնելը։`,
        ru: `## Проблема скорости света

Принцип относительности Галилея гласит, что механические опыты внутри равномерно движущегося корабля не могут обнаружить его движение: законы механики одинаковы во всех инерциальных системах. Скорости складываются классически: мяч, брошенный со скоростью $u$ из поезда, идущего со скоростью $v$, имеет скорость $u + v$ относительно земли.

Уравнения Максвелла дают свету определённую скорость $c$. Относительно чего? Физики предполагали среду — **эфир** — и ожидали, что движение Земли сквозь него изменит измеренную скорость света примерно на $30$ км/с. Майкельсон и Морли (1887) искали это изменение интерферометром, чувствительным к нескольким километрам в секунду, и не нашли **ничего**. Свет движется со скоростью $c$ во всех направлениях независимо от движения источника или наблюдателя.

## Постулаты Эйнштейна (1905)

> 1. **Принцип относительности.** Все законы физики, а не только механики, одинаковы во всех инерциальных системах отсчёта.
> 2. **Постоянство скорости света.** Скорость света в вакууме одинакова во всех инерциальных системах и не зависит от движения источника или наблюдателя.

Оба подтверждены опытом; вместе они несовместимы с классическим сложением скоростей, по которому луч от движущейся лампы шёл бы со скоростью $c + v$. Эйнштейн заключил, что менять нужно наши представления о **пространстве и времени**: промежутки времени и длины не абсолютны, а зависят от системы отсчёта.

## Относительность одновременности

В середине движущегося вагона происходит вспышка. Для пассажира свет достигает обоих концов в один момент. Для наблюдателя на платформе задняя стенка движется навстречу свету, а передняя удаляется, поэтому свет сначала достигает задней. Два события, одновременные в одной системе, не одновременны в другой. Нет всеобщего «сейчас»; у каждой системы своё время.

## Замедление времени

Рассмотрим **световые часы**: вспышка отражается между двумя зеркалами на расстоянии $h$; один тик равен $\\Delta t_0 = \\dfrac{2h}{c}$. Для наблюдателя, видящего часы движущимися со скоростью $v$, вспышка проходит более длинный зигзагообразный путь с той же скоростью $c$, так что тик длится дольше:

> $$\\Delta t = \\dfrac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}}.$$

$\\Delta t_0$ — **собственное время**, измеренное часами, покоящимися относительно событий. Движущиеся часы отстают; это не дефект часов, а свойство времени. Подтверждения: мюоны, рождённые в верхних слоях атмосферы, живут в покое $2{,}2$ мкс и должны пролетать лишь $660$ м, но достигают земли, потому что их время растянуто; атомные часы, облетевшие Землю, отстают на наносекунды ровно как предсказано; часы спутников GPS ежедневно корректируют на этот эффект.

## Сокращение длины

Стержень собственной длины $l_0$ (измеренной в покое), движущийся вдоль своей длины, измеряется короче:

> $$l = l_0\\sqrt{1 - v^2/c^2}.$$

Поперечные размеры не меняются. Для мюона в его системе сжата атмосфера — тот же факт, увиденный с другой стороны.

## Сложение скоростей

Если тело движется со скоростью $u'$ относительно системы, движущейся относительно нас со скоростью $v$ (всё вдоль одной прямой), его скорость относительно нас равна

$$u = \\dfrac{u' + v}{1 + u'v/c^2}.$$

При $u' = c$ это даёт $u = c$ при любом $v$: свет нельзя ни догнать, ни замедлить, гонясь за ним. При малых скоростях знаменатель равен $1$, и возвращается классическое правило. Множитель $\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}}$ близок к $1$ при обычных скоростях: относительность незаметна при $1000$ км/ч и господствует вблизи $c$.

**Пример 1.** Корабль движется со скоростью $0{,}6c$. $\\sqrt{1 - 0{,}36} = 0{,}8$. Бортовые часы, показывающие $8$ лет, для Земли отсчитали $10$ лет. Корабль длиной $100$ м с Земли измеряется как $80$ м.

**Пример 2.** При $v = 0{,}99c$ $\\gamma = \\dfrac{1}{\\sqrt{1 - 0{,}98}} \\approx 7{,}1$. $2{,}2$ мкс мюона становятся $15{,}6$ мкс на Земле, достаточно, чтобы пролететь $4{,}6$ км. В системе мюона $10$ км атмосферы сжаты до $1{,}4$ км.

**Пример 3.** Самолёт летит со скоростью $250$ м/с $10$ часов. $\\dfrac{v^2}{c^2} \\approx 7 \\cdot 10^{-13}$, и $\\Delta t - \\Delta t_0 \\approx \\Delta t_0\\dfrac{v^2}{2c^2} \\approx 36000 \\cdot 3{,}5 \\cdot 10^{-13} \\approx 1{,}3 \\cdot 10^{-8}$ с: $13$ наносекунд, измеримо атомными часами.

**Пример 4.** Два корабля сближаются, каждый со скоростью $0{,}8c$ относительно станции. Их относительная скорость $\\dfrac{0{,}8c + 0{,}8c}{1 + 0{,}64} = \\dfrac{1{,}6c}{1{,}64} \\approx 0{,}976c$, а не $1{,}6c$.

**Пример 5.** Ракета на $0{,}5c$ выпускает вперёд зонд со скоростью $0{,}5c$ относительно себя. Относительно Земли: $\\dfrac{0{,}5 + 0{,}5}{1 + 0{,}25}c = 0{,}8c$. Ракета включает прожектор: его свет движется со скоростью $c$ относительно ракеты и $\\dfrac{c + 0{,}5c}{1 + 0{,}5} = c$ относительно Земли.

**Пример 6.** При какой скорости часы идут вдвое медленнее? $\\sqrt{1 - v^2/c^2} = \\dfrac{1}{2}$, $\\dfrac{v^2}{c^2} = \\dfrac{3}{4}$, $v = \\dfrac{\\sqrt3}{2}c \\approx 0{,}866c$. При той же скорости длины уменьшаются вдвое.

**Пример 7.** Звезда находится в $20$ световых годах. Корабль на $0{,}99c$ достигает её через $20{,}2$ года земного времени, но экипаж стареет лишь на $\\dfrac{20{,}2}{7{,}1} \\approx 2{,}8$ года: для них расстояние сжалось до $2{,}8$ светового года. Межзвёздное путешествие за одну жизнь в принципе возможно, хотя Земля постареет намного больше (парадокс близнецов).

**Пример 8.** Почему эффект симметричен — каждый наблюдатель видит отставание чужих часов, — и всё же путешествующий близнец возвращается моложе? Симметрия есть только между инерциальными системами. Путешественник разворачивается, то есть ускоряется, и не находится всё время в одной инерциальной системе; ситуация не симметрична, и расчёт в системе Земли (или любой инерциальной) даёт путешественнику меньшее собственное время.

## Упражнения

1. Найдите $\\gamma$ для $v = 0{,}8c$, $0{,}9c$ и $0{,}999c$.
2. Частица живёт в покое $10^{-8}$ с. Сколько она живёт в лаборатории при движении со скоростью $0{,}8c$? Какой путь проходит?
3. Стержень длиной $1$ м движется вдоль себя со скоростью $0{,}6c$. Найдите его измеренную длину. А если он движется поперёк?
4. При какой скорости стержень сокращается до $\\dfrac{1}{3}$ своей длины?
5. Две частицы движутся навстречу друг другу со скоростями $0{,}7c$ и $0{,}7c$. Найдите их относительную скорость.
6. Корабль на $0{,}9c$ посылает вперёд сигнал со скоростью $c$. Какую скорость сигнала измерит наблюдатель на Земле?
7. Спутник движется со скоростью $7{,}7$ км/с. На сколько секунд в сутки его часы отстают от земных только из-за этого эффекта?
8. Объясните, почему опыт с мюонами подтверждает и замедление времени, и сокращение длины.

### Ответы

1. $1{,}67$; $2{,}29$; $22{,}4$. 2. $1{,}67 \\cdot 10^{-8}$ с; $0{,}8 \\cdot 3 \\cdot 10^8 \\cdot 1{,}67 \\cdot 10^{-8} = 4$ м. 3. $0{,}8$ м; по-прежнему $1$ м. 4. $\\sqrt{1 - v^2/c^2} = \\dfrac{1}{3}$, $v = \\dfrac{2\\sqrt2}{3}c \\approx 0{,}943c$. 5. $\\dfrac{1{,}4c}{1 + 0{,}49} \\approx 0{,}94c$. 6. $c$. 7. $\\dfrac{v^2}{2c^2} \\cdot 86400 \\approx 3{,}3 \\cdot 10^{-10} \\cdot 86400 \\approx 2{,}8 \\cdot 10^{-5}$ с, около $28$ мкс. 8. В системе Земли время жизни мюона растянуто; в системе мюона атмосфера укорочена; обе точки зрения дают одно и то же прибытие на землю.`,
      },
      [
        q(t("The Michelson–Morley experiment showed that the speed of light…", "Մայքելսոն–Մորլիի փորձը ցույց տվեց, որ լույսի արագությունը…", "Опыт Майкельсона–Морли показал, что скорость света…"), [t("depends on the Earth's motion", "կախված է Երկրի շարժումից", "зависит от движения Земли"), t("does not depend on the motion of the observer", "կախված չէ դիտորդի շարժումից", "не зависит от движения наблюдателя"), t("is infinite", "անվերջ է", "бесконечна")], 1),
        q(t("A moving clock, as seen by an observer at rest,…", "Շարժվող ժամացույցն անշարժ դիտորդի տեսանկյունից…", "Движущиеся часы с точки зрения покоящегося наблюдателя…"), [t("runs slow", "հետ է մնում", "отстают"), t("runs fast", "առաջ է ընկնում", "спешат"), t("runs at the same rate", "նույն արագությամբ է ընթանում", "идут так же")], 0),
        q(t("At v = 0.6c the factor √(1 − v²/c²) equals…", "v = 0,6c դեպքում √(1 − v²/c²) գործակիցը հավասար է…", "При v = 0,6c множитель √(1 − v²/c²) равен…"), [t("0.6", "0,6", "0,6"), t("0.8", "0,8", "0,8"), t("0.36", "0,36", "0,36")], 1),
        q(t("A rod moving along its length is measured…", "Երկայնքով շարժվող ձողը չափվում է…", "Стержень, движущийся вдоль своей длины, измеряется…"), [t("longer", "ավելի երկար", "длиннее"), t("shorter", "ավելի կարճ", "короче"), t("the same", "նույնը", "таким же")], 1),
        q(t("A ship at 0.5c turns on a headlight. Relative to Earth the light moves at…", "0,5c արագությամբ նավը միացնում է լուսարձակը։ Երկրի նկատմամբ լույսը շարժվում է…", "Корабль на 0,5c включает прожектор. Относительно Земли свет движется со скоростью…"), [t("1.5c", "1,5c արագությամբ", "1,5c"), t("c", "c արագությամբ", "c"), t("0.5c", "0,5c արագությամբ", "0,5c")], 1),
        q(t("Two events simultaneous in one inertial frame are…", "Մեկ իներցիալ համակարգում միաժամանակյա երկու իրադարձություններ…", "Два события, одновременные в одной инерциальной системе,…"), [t("simultaneous in every frame", "միաժամանակյա են բոլոր համակարգերում", "одновременны во всех системах"), t("not necessarily simultaneous in another frame", "պարտադիր չէ, որ միաժամանակյա լինեն մեկ այլ համակարգում", "не обязательно одновременны в другой системе"), t("never simultaneous in another frame", "երբեք միաժամանակյա չեն մեկ այլ համակարգում", "никогда не одновременны в другой системе")], 1),
      ],
    ),
    lesson(
      "mass-energy",
      ["Relativistic momentum and energy; E = mc²", "Ռելյատիվիստական իմպուլս և էներգիա, E = mc²", "Релятивистские импульс и энергия; E = mc²"],
      {
        en: ["Write the relativistic momentum p = mv/√(1 − v²/c²) and explain why no body can reach the speed of light", "Interpret E = mc² as the rest energy and compute the energy released when mass decreases", "Compute the total and kinetic energy of fast particles and use the relation E² = (pc)² + (mc²)²"],
        hy: ["Գրել ռելյատիվիստական իմպուլսը p = mv/√(1 − v²/c²) և բացատրել, թե ինչու ոչ մի մարմին չի կարող հասնել լույսի արագության", "Մեկնաբանել E = mc²-ը որպես հանգստի էներգիա և հաշվել զանգվածի նվազման դեպքում անջատվող էներգիան", "Հաշվել արագ մասնիկների լրիվ և կինետիկ էներգիան և օգտագործել E² = (pc)² + (mc²)² առնչությունը"],
        ru: ["Записывать релятивистский импульс p = mv/√(1 − v²/c²) и объяснять, почему ни одно тело не может достичь скорости света", "Истолковывать E = mc² как энергию покоя и вычислять энергию, выделяющуюся при уменьшении массы", "Вычислять полную и кинетическую энергию быстрых частиц и использовать соотношение E² = (pc)² + (mc²)²"],
      },
      {
        en: `## Relativistic momentum

Newton's second law in the form $F = ma$ cannot be right at high speeds: a constant force acting for long enough would push a body past $c$. Experiments with electrons in accelerators show that as the speed approaches $c$ the body becomes harder and harder to accelerate. Momentum conservation holds in all frames only if momentum is defined as

> $$p = \\dfrac{mv}{\\sqrt{1 - v^2/c^2}} = \\gamma m v,$$

where $m$ is the **mass** of the body (the same in all frames; older books call it the rest mass). For $v \\ll c$ this is the usual $mv$; as $v \\to c$ the momentum grows without limit. Newton's law survives in the form $F = \\dfrac{\\Delta p}{\\Delta t}$: a force changes the momentum, but a growing momentum no longer means a proportionally growing speed. To reach $c$ would require infinite momentum, hence infinite work: **no body with mass can reach the speed of light.** Only massless particles (photons) move at $c$, and they always do.

## Energy

Computing the work done by a force on a body from rest, Einstein found the kinetic energy

$$E_k = mc^2\\left(\\dfrac{1}{\\sqrt{1 - v^2/c^2}} - 1\\right) = (\\gamma - 1)mc^2,$$

which for small $v$ reduces to $\\dfrac{mv^2}{2}$ (expand $\\gamma \\approx 1 + \\dfrac{v^2}{2c^2}$). The structure of this formula suggests defining the **total energy**

> $$E = \\gamma mc^2 = \\dfrac{mc^2}{\\sqrt{1 - v^2/c^2}}, \\qquad E = E_0 + E_k, \\qquad E_0 = mc^2.$$

A body at rest has the **rest energy** $E_0 = mc^2$. This is the famous relation of mass and energy: mass is a measure of the energy stored in a body. When a system loses energy $\\Delta E$ in any form (light, heat, kinetic energy of fragments), its mass decreases by $\\Delta m = \\dfrac{\\Delta E}{c^2}$. The factor $c^2 = 9 \\cdot 10^{16}$ m²/s² is enormous, so ordinary energy changes alter the mass imperceptibly, but nuclear reactions convert measurable fractions of a per cent of mass into energy: this is the energy of the Sun, of reactors and of nuclear weapons.

A useful identity links energy and momentum without the velocity:

$$E^2 = (pc)^2 + (mc^2)^2.$$

For a photon $m = 0$ and $E = pc$: light carries momentum and exerts pressure.

The unit of energy in particle physics is the **electronvolt**: $1$ eV $= 1{.}6 \\cdot 10^{-19}$ J, the energy gained by an electron through $1$ V. The rest energy of an electron is $0{.}511$ MeV, of a proton $938$ MeV.

**Example 1.** Rest energy of $1$ g of matter: $E_0 = 10^{-3} \\cdot 9 \\cdot 10^{16} = 9 \\cdot 10^{13}$ J, the output of a large power station in a day, or the energy of $20$ kilotons of TNT.

**Example 2.** The Sun radiates $3{.}8 \\cdot 10^{26}$ W. Its mass decreases by $\\dfrac{3{.}8 \\cdot 10^{26}}{9 \\cdot 10^{16}} \\approx 4{.}2 \\cdot 10^9$ kg every second, four million tonnes, yet this is only $10^{-21}$ of its mass per second.

**Example 3.** Water of mass $1$ kg is heated by $100$ K: $\\Delta E = 4200 \\cdot 100 = 4{.}2 \\cdot 10^5$ J, $\\Delta m = \\dfrac{4{.}2 \\cdot 10^5}{9 \\cdot 10^{16}} \\approx 4{.}7 \\cdot 10^{-12}$ kg. No balance can detect this; chemistry works with "conservation of mass" because the changes are so small.

**Example 4.** An electron is accelerated through $1$ MV. Its kinetic energy is $1$ MeV, almost twice its rest energy. $\\gamma = 1 + \\dfrac{E_k}{mc^2} = 1 + \\dfrac{1}{0{.}511} \\approx 2{.}96$, so $\\dfrac{v}{c} = \\sqrt{1 - \\dfrac{1}{\\gamma^2}} \\approx 0{.}94$. The classical formula would give $v = \\sqrt{\\dfrac{2E_k}{m}} \\approx 1{.}98c$, impossible.

**Example 5.** Protons in the Large Hadron Collider have $E = 6500$ GeV with $mc^2 = 0{.}938$ GeV: $\\gamma \\approx 6930$, $v \\approx c\\left(1 - \\dfrac{1}{2\\gamma^2}\\right)$, slower than light by only $3$ m/s. Their momentum is $p \\approx \\dfrac{E}{c}$, and the energy of a single proton equals that of a flying mosquito.

**Example 6.** In the fusion of four hydrogen nuclei into a helium nucleus the mass drops by $0{.}7\\%$. Per kilogram of hydrogen: $\\Delta E = 0{.}007 \\cdot 9 \\cdot 10^{16} \\approx 6 \\cdot 10^{14}$ J, enough to supply a city for weeks. Chemical burning of $1$ kg of hydrogen gives $1{.}4 \\cdot 10^8$ J, four million times less.

**Example 7.** An electron and a positron, each at rest, annihilate into two photons. Total energy $2 \\cdot 0{.}511 = 1{.}022$ MeV, so each photon has $0{.}511$ MeV and they fly apart in opposite directions to conserve momentum. PET scanners in hospitals detect exactly these photon pairs.

**Example 8.** Why does "mass increase with speed" appear in some older books? They defined $m_{\\text{rel}} = \\gamma m$ so that $p = m_{\\text{rel}}v$. Modern usage keeps $m$ constant and puts $\\gamma$ into the formulas for $p$ and $E$; what grows with speed is the energy and the momentum, not a property of the body. Both descriptions give the same numbers.

## Exercises

1. Find the rest energy of a proton ($1{.}67 \\cdot 10^{-27}$ kg) in joules and in MeV.
2. Find the relativistic momentum of an electron moving at $0{.}8c$ and compare it with $mv$.
3. Find the total and kinetic energy of a proton moving at $0{.}6c$ in MeV.
4. A nuclear reactor produces $3$ GW of heat. By how much does the mass of its fuel decrease per day?
5. What kinetic energy must an electron have for $\\gamma = 10$? What is its speed?
6. A photon has energy $2$ MeV. Find its momentum.
7. How much energy is released when $1$ mg of mass is converted? How many tonnes of water could it boil from $0$ °C?
8. Explain why $E_k = \\dfrac{mv^2}{2}$ is only an approximation and when it fails.

### Answers

1. $1{.}5 \\cdot 10^{-10}$ J $\\approx 938$ MeV. 2. $\\gamma = \\dfrac{5}{3}$, $p = \\dfrac{5}{3} \\cdot 9{.}1 \\cdot 10^{-31} \\cdot 2{.}4 \\cdot 10^8 \\approx 3{.}6 \\cdot 10^{-22}$ kg·m/s, $\\dfrac{5}{3}$ times larger than $mv$. 3. $\\gamma = 1{.}25$, $E = 1172$ MeV, $E_k = 234$ MeV. 4. $\\Delta E = 3 \\cdot 10^9 \\cdot 86400 = 2{.}6 \\cdot 10^{14}$ J, $\\Delta m \\approx 2{.}9$ g. 5. $E_k = 9 \\cdot 0{.}511 = 4{.}6$ MeV; $v = c\\sqrt{1 - 0{.}01} \\approx 0{.}995c$. 6. $p = \\dfrac{E}{c} = \\dfrac{2 \\cdot 1{.}6 \\cdot 10^{-13}}{3 \\cdot 10^8} \\approx 1{.}1 \\cdot 10^{-21}$ kg·m/s. 7. $9 \\cdot 10^{10}$ J; to boil water from $0$ °C needs $4{.}2 \\cdot 10^5 + 2{.}26 \\cdot 10^6 \\approx 2{.}7 \\cdot 10^6$ J/kg, so about $33$ tonnes. 8. It is the first term of the expansion of $(\\gamma - 1)mc^2$; it fails when $v$ is a noticeable fraction of $c$ (error $1\\%$ at about $0{.}1c$).`,
        hy: `## Ռելյատիվիստական իմպուլս

Նյուտոնի երկրորդ օրենքը $F = ma$ տեսքով չի կարող ճիշտ լինել մեծ արագությունների դեպքում․ բավական երկար գործող հաստատուն ուժը մարմնին կմղեր $c$-ից այն կողմ։ Արագացուցիչներում էլեկտրոնների հետ փորձերը ցույց են տալիս, որ արագության $c$-ին մոտենալուն զուգընթաց մարմինն ավելի ու ավելի դժվար է արագացնել։ Իմպուլսի պահպանումը բոլոր համակարգերում գործում է միայն այն դեպքում, եթե իմպուլսը սահմանվի որպես

> $$p = \\dfrac{mv}{\\sqrt{1 - v^2/c^2}} = \\gamma m v$$

որտեղ $m$-ը մարմնի **զանգվածն** է (նույնը բոլոր համակարգերում, հին գրքերում՝ հանգստի զանգված)։ $v \\ll c$ դեպքում սա սովորական $mv$-ն է, $v \\to c$ դեպքում իմպուլսն անսահման աճում է։ Նյուտոնի օրենքը պահպանվում է $F = \\dfrac{\\Delta p}{\\Delta t}$ տեսքով․ ուժը փոխում է իմպուլսը, բայց աճող իմպուլսն այլևս չի նշանակում համեմատականորեն աճող արագություն։ $c$-ին հասնելու համար անհրաժեշտ կլիներ անվերջ իմպուլս, հետևաբար՝ անվերջ աշխատանք․ **զանգված ունեցող ոչ մի մարմին չի կարող հասնել լույսի արագության։** Միայն անզանգված մասնիկները (ֆոտոնները) շարժվում են $c$ արագությամբ, և միշտ։

## Էներգիա

Հաշվելով հանգստի վիճակից մարմնի վրա ուժի կատարած աշխատանքը՝ Էյնշտեյնը գտավ կինետիկ էներգիան

$$E_k = mc^2\\left(\\dfrac{1}{\\sqrt{1 - v^2/c^2}} - 1\\right) = (\\gamma - 1)mc^2$$

որը փոքր $v$-ի դեպքում վերածվում է $\\dfrac{mv^2}{2}$-ի (վերլուծեք $\\gamma \\approx 1 + \\dfrac{v^2}{2c^2}$)։ Այս բանաձևի կառուցվածքը հուշում է սահմանել **լրիվ էներգիան**

> $$E = \\gamma mc^2 = \\dfrac{mc^2}{\\sqrt{1 - v^2/c^2}}, \\qquad E = E_0 + E_k, \\qquad E_0 = mc^2$$

Հանգստի վիճակում մարմինն ունի **հանգստի էներգիա** $E_0 = mc^2$։ Սա զանգվածի և էներգիայի հանրահայտ առնչությունն է․ զանգվածը մարմնում կուտակված էներգիայի չափն է։ Երբ համակարգը կորցնում է $\\Delta E$ էներգիա ցանկացած տեսքով (լույս, ջերմություն, բեկորների կինետիկ էներգիա), նրա զանգվածը նվազում է $\\Delta m = \\dfrac{\\Delta E}{c^2}$-ով։ $c^2 = 9 \\cdot 10^{16}$ մ²/վ² գործակիցը հսկայական է, ուստի սովորական էներգիայի փոփոխություններն աննկատելիորեն են փոխում զանգվածը, բայց միջուկային ռեակցիաները զանգվածի տոկոսի չափելի մասերը վերածում են էներգիայի․ սա Արևի, ռեակտորների և միջուկային զենքի էներգիան է։

Օգտակար նույնությունը կապում է էներգիան և իմպուլսն առանց արագության․

$$E^2 = (pc)^2 + (mc^2)^2$$

Ֆոտոնի համար $m = 0$ և $E = pc$․ լույսն իմպուլս է կրում և ճնշում է գործադրում։

Մասնիկների ֆիզիկայում էներգիայի միավորը **էլեկտրոնվոլտն** է․ $1$ էՎ $= 1{,}6 \\cdot 10^{-19}$ Ջ, էներգիան, որն էլեկտրոնը ստանում է $1$ Վ-ով անցնելիս։ Էլեկտրոնի հանգստի էներգիան $0{,}511$ ՄէՎ է, պրոտոնինը՝ $938$ ՄէՎ։

**Օրինակ 1։** $1$ գ նյութի հանգստի էներգիան․ $E_0 = 10^{-3} \\cdot 9 \\cdot 10^{16} = 9 \\cdot 10^{13}$ Ջ՝ մեծ էլեկտրակայանի մեկ օրվա արտադրանքը կամ $20$ կիլոտոննա տրոտիլի էներգիան։

**Օրինակ 2։** Արևը ճառագայթում է $3{,}8 \\cdot 10^{26}$ Վտ։ Նրա զանգվածն ամեն վայրկյան նվազում է $\\dfrac{3{,}8 \\cdot 10^{26}}{9 \\cdot 10^{16}} \\approx 4{,}2 \\cdot 10^9$ կգ-ով՝ չորս միլիոն տոննա, սակայն սա վայրկյանում նրա զանգվածի ընդամենը $10^{-21}$ մասն է։

**Օրինակ 3։** $1$ կգ զանգվածով ջուրը տաքացվում է $100$ Կ-ով․ $\\Delta E = 4200 \\cdot 100 = 4{,}2 \\cdot 10^5$ Ջ, $\\Delta m = \\dfrac{4{,}2 \\cdot 10^5}{9 \\cdot 10^{16}} \\approx 4{,}7 \\cdot 10^{-12}$ կգ։ Ոչ մի կշեռք սա չի կարող հայտնաբերել, քիմիան աշխատում է «զանգվածի պահպանմամբ», քանի որ փոփոխություններն այդքան փոքր են։

**Օրինակ 4։** Էլեկտրոնն արագացվում է $1$ ՄՎ-ով։ Նրա կինետիկ էներգիան $1$ ՄէՎ է՝ հանգստի էներգիայի գրեթե կրկնապատիկը։ $\\gamma = 1 + \\dfrac{E_k}{mc^2} = 1 + \\dfrac{1}{0{,}511} \\approx 2{,}96$, ուստի $\\dfrac{v}{c} = \\sqrt{1 - \\dfrac{1}{\\gamma^2}} \\approx 0{,}94$։ Դասական բանաձևը կտար $v = \\sqrt{\\dfrac{2E_k}{m}} \\approx 1{,}98c$, ինչն անհնար է։

**Օրինակ 5։** Մեծ հադրոնային կոլայդերում պրոտոններն ունեն $E = 6500$ ԳէՎ, իսկ $mc^2 = 0{,}938$ ԳէՎ․ $\\gamma \\approx 6930$, $v \\approx c\\left(1 - \\dfrac{1}{2\\gamma^2}\\right)$՝ լույսից ընդամենը $3$ մ/վ դանդաղ։ Նրանց իմպուլսը $p \\approx \\dfrac{E}{c}$ է, և մեկ պրոտոնի էներգիան հավասար է թռչող մոծակի էներգիային։

**Օրինակ 6։** Ջրածնի չորս միջուկների հելիումի միջուկի միաձուլման ժամանակ զանգվածը նվազում է $0{,}7\\%$-ով։ Մեկ կիլոգրամ ջրածնի համար․ $\\Delta E = 0{,}007 \\cdot 9 \\cdot 10^{16} \\approx 6 \\cdot 10^{14}$ Ջ, որը բավական է քաղաքը շաբաթներով սնելու համար։ $1$ կգ ջրածնի քիմիական այրումը տալիս է $1{,}4 \\cdot 10^8$ Ջ՝ չորս միլիոն անգամ քիչ։

**Օրինակ 7։** Հանգստի վիճակում էլեկտրոնն ու պոզիտրոնն անիհիլացվում են երկու ֆոտոնի։ Լրիվ էներգիան $2 \\cdot 0{,}511 = 1{,}022$ ՄէՎ է, ուստի յուրաքանչյուր ֆոտոն ունի $0{,}511$ ՄէՎ, և դրանք թռչում են հակառակ ուղղություններով՝ իմպուլսը պահպանելու համար։ Հիվանդանոցների ՊԷՏ սարքերը հայտնաբերում են հենց այս ֆոտոնային զույգերը։

**Օրինակ 8։** Ինչո՞ւ է որոշ հին գրքերում հայտնվում «զանգվածն աճում է արագության հետ» արտահայտությունը։ Դրանք սահմանում էին $m_{\\text{ռել}} = \\gamma m$, որպեսզի $p = m_{\\text{ռել}}v$։ Ժամանակակից գործածությունը $m$-ը պահում է հաստատուն և $\\gamma$-ն դնում $p$-ի և $E$-ի բանաձևերի մեջ, արագության հետ աճում են էներգիան և իմպուլսը, ոչ թե մարմնի հատկությունը։ Երկու նկարագրություններն էլ տալիս են նույն թվերը։

## Վարժություններ

1. Գտեք պրոտոնի ($1{,}67 \\cdot 10^{-27}$ կգ) հանգստի էներգիան ջոուլներով և ՄէՎ-ով։
2. Գտեք $0{,}8c$ արագությամբ շարժվող էլեկտրոնի ռելյատիվիստական իմպուլսը և համեմատեք $mv$-ի հետ։
3. Գտեք $0{,}6c$ արագությամբ շարժվող պրոտոնի լրիվ և կինետիկ էներգիան ՄէՎ-ով։
4. Միջուկային ռեակտորն արտադրում է $3$ ԳՎտ ջերմություն։ Որքանո՞վ է օրական նվազում նրա վառելիքի զանգվածը։
5. Ի՞նչ կինետիկ էներգիա պետք է ունենա էլեկտրոնը $\\gamma = 10$ դեպքում։ Որքա՞ն է նրա արագությունը։
6. Ֆոտոնն ունի $2$ ՄէՎ էներգիա։ Գտեք նրա իմպուլսը։
7. Որքա՞ն էներգիա է անջատվում $1$ մգ զանգվածի փոխակերպման ժամանակ։ Քանի՞ տոննա ջուր կարող է այն եռացնել $0$ °C-ից։
8. Բացատրեք, թե ինչու է $E_k = \\dfrac{mv^2}{2}$-ը միայն մոտարկում, և երբ է այն սխալ։

### Պատասխաններ

1. $1{,}5 \\cdot 10^{-10}$ Ջ $\\approx 938$ ՄէՎ։ 2. $\\gamma = \\dfrac{5}{3}$, $p = \\dfrac{5}{3} \\cdot 9{,}1 \\cdot 10^{-31} \\cdot 2{,}4 \\cdot 10^8 \\approx 3{,}6 \\cdot 10^{-22}$ կգ·մ/վ, $mv$-ից $\\dfrac{5}{3}$ անգամ մեծ։ 3. $\\gamma = 1{,}25$, $E = 1172$ ՄէՎ, $E_k = 234$ ՄէՎ։ 4. $\\Delta E = 3 \\cdot 10^9 \\cdot 86400 = 2{,}6 \\cdot 10^{14}$ Ջ, $\\Delta m \\approx 2{,}9$ գ։ 5. $E_k = 9 \\cdot 0{,}511 = 4{,}6$ ՄէՎ, $v = c\\sqrt{1 - 0{,}01} \\approx 0{,}995c$։ 6. $p = \\dfrac{E}{c} = \\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-13}}{3 \\cdot 10^8} \\approx 1{,}1 \\cdot 10^{-21}$ կգ·մ/վ։ 7. $9 \\cdot 10^{10}$ Ջ, ջուրը $0$ °C-ից եռացնելու համար անհրաժեշտ է $4{,}2 \\cdot 10^5 + 2{,}26 \\cdot 10^6 \\approx 2{,}7 \\cdot 10^6$ Ջ/կգ, ուստի մոտ $33$ տոննա։ 8. Այն $(\\gamma - 1)mc^2$-ի վերլուծության առաջին անդամն է, սխալ է, երբ $v$-ն $c$-ի նկատելի մասն է (սխալը $1\\%$ է մոտ $0{,}1c$-ի դեպքում)։`,
        ru: `## Релятивистский импульс

Второй закон Ньютона в форме $F = ma$ не может быть верен при больших скоростях: постоянная сила, действуя достаточно долго, разогнала бы тело быстрее $c$. Опыты с электронами в ускорителях показывают, что по мере приближения скорости к $c$ тело разгоняется всё труднее. Сохранение импульса выполняется во всех системах, только если импульс определить как

> $$p = \\dfrac{mv}{\\sqrt{1 - v^2/c^2}} = \\gamma m v,$$

где $m$ — **масса** тела (одна и та же во всех системах; в старых книгах — масса покоя). При $v \\ll c$ это обычное $mv$; при $v \\to c$ импульс растёт неограниченно. Закон Ньютона сохраняется в форме $F = \\dfrac{\\Delta p}{\\Delta t}$: сила меняет импульс, но растущий импульс уже не означает пропорционально растущей скорости. Чтобы достичь $c$, нужен бесконечный импульс, а значит, бесконечная работа: **ни одно тело с массой не может достичь скорости света.** Только безмассовые частицы (фотоны) движутся со скоростью $c$, и всегда.

## Энергия

Вычисляя работу силы над телом из состояния покоя, Эйнштейн нашёл кинетическую энергию

$$E_k = mc^2\\left(\\dfrac{1}{\\sqrt{1 - v^2/c^2}} - 1\\right) = (\\gamma - 1)mc^2,$$

которая при малых $v$ сводится к $\\dfrac{mv^2}{2}$ (разложите $\\gamma \\approx 1 + \\dfrac{v^2}{2c^2}$). Структура формулы подсказывает определить **полную энергию**

> $$E = \\gamma mc^2 = \\dfrac{mc^2}{\\sqrt{1 - v^2/c^2}}, \\qquad E = E_0 + E_k, \\qquad E_0 = mc^2.$$

Покоящееся тело имеет **энергию покоя** $E_0 = mc^2$. Это знаменитая связь массы и энергии: масса — мера энергии, запасённой в теле. Когда система теряет энергию $\\Delta E$ в любой форме (свет, тепло, кинетическая энергия осколков), её масса уменьшается на $\\Delta m = \\dfrac{\\Delta E}{c^2}$. Множитель $c^2 = 9 \\cdot 10^{16}$ м²/с² огромен, поэтому обычные изменения энергии меняют массу незаметно, но ядерные реакции превращают в энергию измеримые доли процента массы: это энергия Солнца, реакторов и ядерного оружия.

Полезное тождество связывает энергию и импульс без скорости:

$$E^2 = (pc)^2 + (mc^2)^2.$$

Для фотона $m = 0$ и $E = pc$: свет несёт импульс и оказывает давление.

Единица энергии в физике частиц — **электронвольт**: $1$ эВ $= 1{,}6 \\cdot 10^{-19}$ Дж, энергия, которую электрон получает, пройдя $1$ В. Энергия покоя электрона $0{,}511$ МэВ, протона $938$ МэВ.

**Пример 1.** Энергия покоя $1$ г вещества: $E_0 = 10^{-3} \\cdot 9 \\cdot 10^{16} = 9 \\cdot 10^{13}$ Дж — суточная выработка крупной электростанции или энергия $20$ килотонн тротила.

**Пример 2.** Солнце излучает $3{,}8 \\cdot 10^{26}$ Вт. Его масса уменьшается на $\\dfrac{3{,}8 \\cdot 10^{26}}{9 \\cdot 10^{16}} \\approx 4{,}2 \\cdot 10^9$ кг каждую секунду — четыре миллиона тонн, но это лишь $10^{-21}$ его массы в секунду.

**Пример 3.** Воду массой $1$ кг нагревают на $100$ К: $\\Delta E = 4200 \\cdot 100 = 4{,}2 \\cdot 10^5$ Дж, $\\Delta m = \\dfrac{4{,}2 \\cdot 10^5}{9 \\cdot 10^{16}} \\approx 4{,}7 \\cdot 10^{-12}$ кг. Никакие весы этого не обнаружат; химия работает с «сохранением массы», потому что изменения так малы.

**Пример 4.** Электрон ускоряют напряжением $1$ МВ. Его кинетическая энергия $1$ МэВ — почти вдвое больше энергии покоя. $\\gamma = 1 + \\dfrac{E_k}{mc^2} = 1 + \\dfrac{1}{0{,}511} \\approx 2{,}96$, так что $\\dfrac{v}{c} = \\sqrt{1 - \\dfrac{1}{\\gamma^2}} \\approx 0{,}94$. Классическая формула дала бы $v = \\sqrt{\\dfrac{2E_k}{m}} \\approx 1{,}98c$ — невозможно.

**Пример 5.** Протоны в Большом адронном коллайдере имеют $E = 6500$ ГэВ при $mc^2 = 0{,}938$ ГэВ: $\\gamma \\approx 6930$, $v \\approx c\\left(1 - \\dfrac{1}{2\\gamma^2}\\right)$ — медленнее света всего на $3$ м/с. Их импульс $p \\approx \\dfrac{E}{c}$, а энергия одного протона равна энергии летящего комара.

**Пример 6.** При слиянии четырёх ядер водорода в ядро гелия масса уменьшается на $0{,}7\\%$. На килограмм водорода: $\\Delta E = 0{,}007 \\cdot 9 \\cdot 10^{16} \\approx 6 \\cdot 10^{14}$ Дж — достаточно, чтобы неделями снабжать город. Химическое сжигание $1$ кг водорода даёт $1{,}4 \\cdot 10^8$ Дж, в четыре миллиона раз меньше.

**Пример 7.** Электрон и позитрон, оба покоящиеся, аннигилируют в два фотона. Полная энергия $2 \\cdot 0{,}511 = 1{,}022$ МэВ, так что каждый фотон имеет $0{,}511$ МэВ, и они разлетаются в противоположные стороны, сохраняя импульс. ПЭТ-сканеры в больницах регистрируют именно такие пары фотонов.

**Пример 8.** Почему в некоторых старых книгах «масса растёт со скоростью»? Там определяли $m_{\\text{рел}} = \\gamma m$, чтобы $p = m_{\\text{рел}}v$. Современное употребление держит $m$ постоянной и помещает $\\gamma$ в формулы для $p$ и $E$; со скоростью растут энергия и импульс, а не свойство тела. Оба описания дают одни и те же числа.

## Упражнения

1. Найдите энергию покоя протона ($1{,}67 \\cdot 10^{-27}$ кг) в джоулях и в МэВ.
2. Найдите релятивистский импульс электрона, движущегося со скоростью $0{,}8c$, и сравните его с $mv$.
3. Найдите полную и кинетическую энергию протона, движущегося со скоростью $0{,}6c$, в МэВ.
4. Ядерный реактор выделяет $3$ ГВт тепла. На сколько уменьшается масса его топлива за сутки?
5. Какую кинетическую энергию должен иметь электрон при $\\gamma = 10$? Какова его скорость?
6. Фотон имеет энергию $2$ МэВ. Найдите его импульс.
7. Сколько энергии выделяется при превращении $1$ мг массы? Сколько тонн воды она могла бы вскипятить от $0$ °C?
8. Объясните, почему $E_k = \\dfrac{mv^2}{2}$ — лишь приближение, и когда оно неприменимо.

### Ответы

1. $1{,}5 \\cdot 10^{-10}$ Дж $\\approx 938$ МэВ. 2. $\\gamma = \\dfrac{5}{3}$, $p = \\dfrac{5}{3} \\cdot 9{,}1 \\cdot 10^{-31} \\cdot 2{,}4 \\cdot 10^8 \\approx 3{,}6 \\cdot 10^{-22}$ кг·м/с, в $\\dfrac{5}{3}$ раза больше $mv$. 3. $\\gamma = 1{,}25$, $E = 1172$ МэВ, $E_k = 234$ МэВ. 4. $\\Delta E = 3 \\cdot 10^9 \\cdot 86400 = 2{,}6 \\cdot 10^{14}$ Дж, $\\Delta m \\approx 2{,}9$ г. 5. $E_k = 9 \\cdot 0{,}511 = 4{,}6$ МэВ; $v = c\\sqrt{1 - 0{,}01} \\approx 0{,}995c$. 6. $p = \\dfrac{E}{c} = \\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-13}}{3 \\cdot 10^8} \\approx 1{,}1 \\cdot 10^{-21}$ кг·м/с. 7. $9 \\cdot 10^{10}$ Дж; чтобы вскипятить воду от $0$ °C, нужно $4{,}2 \\cdot 10^5 + 2{,}26 \\cdot 10^6 \\approx 2{,}7 \\cdot 10^6$ Дж/кг, то есть около $33$ тонн. 8. Это первый член разложения $(\\gamma - 1)mc^2$; оно неприменимо, когда $v$ составляет заметную долю $c$ (ошибка $1\\%$ примерно при $0{,}1c$).`,
      },
      [
        q(t("The rest energy of a body is…", "Մարմնի հանգստի էներգիան…", "Энергия покоя тела равна…"), [t("mv²/2", "mv²/2 է", "mv²/2"), t("mc²", "mc² է", "mc²"), t("mc", "mc է", "mc")], 1),
        q(t("As a body's speed approaches c, its momentum…", "Մարմնի արագության c-ին մոտենալուն զուգընթաց իմպուլսը…", "При приближении скорости тела к c его импульс…"), [t("approaches mc", "ձգտում է mc-ի", "стремится к mc"), t("grows without limit", "անսահման աճում է", "растёт неограниченно"), t("stays constant", "մնում է հաստատուն", "остаётся постоянным")], 1),
        q(t("No body with mass can reach c because that would require…", "Զանգված ունեցող ոչ մի մարմին չի կարող հասնել c-ի, քանի որ դա կպահանջեր…", "Ни одно тело с массой не может достичь c, потому что это потребовало бы…"), [t("infinite energy", "անվերջ էներգիա", "бесконечной энергии"), t("zero mass", "զրո զանգված", "нулевой массы"), t("a vacuum", "վակուում", "вакуума")], 0),
        q(t("The rest energy of 1 kg is about…", "1 կգ-ի հանգստի էներգիան մոտ…", "Энергия покоя 1 кг примерно…"), [t("9 · 10¹⁶ J", "9 · 10¹⁶ Ջ է", "9 · 10¹⁶ Дж"), t("3 · 10⁸ J", "3 · 10⁸ Ջ է", "3 · 10⁸ Дж"), t("9 · 10⁸ J", "9 · 10⁸ Ջ է", "9 · 10⁸ Дж")], 0),
        q(t("The kinetic energy in relativity is…", "Հարաբերականության մեջ կինետիկ էներգիան…", "Кинетическая энергия в теории относительности равна…"), [t("mv²/2 exactly", "ճիշտ mv²/2 է", "в точности mv²/2"), t("(γ − 1)mc²", "(γ − 1)mc² է", "(γ − 1)mc²"), t("γmc²", "γmc² է", "γmc²")], 1),
        q(t("When a system radiates energy, its mass…", "Երբ համակարգն էներգիա է ճառագայթում, նրա զանգվածը…", "Когда система излучает энергию, её масса…"), [t("increases", "աճում է", "увеличивается"), t("decreases by ΔE/c²", "նվազում է ΔE/c²-ով", "уменьшается на ΔE/c²"), t("does not change", "չի փոխվում", "не меняется")], 1),
      ],
    ),
    lesson(
      "photoelectric-effect",
      ["Photoelectric effect; Einstein's equation", "Ֆոտոէֆեկտ, Էյնշտեյնի հավասարում", "Фотоэффект; уравнение Эйнштейна"],
      {
        en: ["Describe Stoletov's experiments and the three laws of the photoelectric effect, and explain why the wave theory cannot account for them", "Apply Einstein's equation hν = A + mv²/2, the work function and the red limit", "Compute the stopping voltage and use the photoelectric effect to find Planck's constant"],
        hy: ["Նկարագրել Ստոլետովի փորձերը և ֆոտոէֆեկտի երեք օրենքները և բացատրել, թե ինչու ալիքային տեսությունը չի կարող դրանք բացատրել", "Կիրառել Էյնշտեյնի hν = A + mv²/2 հավասարումը, ելքի աշխատանքը և կարմիր սահմանը", "Հաշվել արգելակող լարումը և ֆոտոէֆեկտով գտնել Պլանկի հաստատունը"],
        ru: ["Описывать опыты Столетова и три закона фотоэффекта и объяснять, почему волновая теория не может их объяснить", "Применять уравнение Эйнштейна hν = A + mv²/2, работу выхода и красную границу", "Вычислять задерживающее напряжение и находить постоянную Планка с помощью фотоэффекта"],
      },
      {
        en: `## Planck's hypothesis

At the end of the 19th century the spectrum of a hot body could not be explained: the wave theory predicted that a hot oven should emit infinite energy in the ultraviolet. Planck (1900) found the right formula by assuming that atoms emit light not continuously but in **portions** (quanta) of energy

> $$E = h\\nu, \\qquad h = 6{.}63 \\cdot 10^{-34} \\text{ J·s}$$

($h$ is **Planck's constant**). Planck regarded this as a mathematical trick. Einstein (1905) took it seriously: light itself consists of quanta, later called **photons**, and he used the idea to explain the photoelectric effect.

## The photoelectric effect

Hertz (1887) noticed that a spark jumps more easily when the electrodes are lit with ultraviolet light. Stoletov (1888) studied the effect quantitatively: a zinc plate connected to an electroscope loses negative charge when illuminated, but a positively charged plate keeps its charge. Light knocks **electrons** out of the metal: the **photoelectric effect**. In a vacuum tube with a lit cathode and an anode the current can be measured as a function of the voltage and of the light.

The **laws of the photoelectric effect**:

1. The number of electrons emitted per second (the saturation current) is proportional to the intensity of the light.
2. The maximum kinetic energy of the electrons depends on the **frequency** of the light, growing linearly with it, and does **not** depend on the intensity.
3. For each metal there is a **red limit**: light with frequency below $\\nu_{\\min}$ produces no electrons however intense it is.
4. The effect is practically instantaneous: electrons appear within $10^{-9}$ s of switching the light on.

The maximum energy is measured by the **stopping voltage** $U_s$: with the anode made negative, the current vanishes when $eU_s = \\dfrac{mv_{\\max}^2}{2}$.

**Why waves fail.** In the wave picture the energy given to an electron should grow with intensity and be independent of frequency; weak light should need a long time to accumulate enough energy; any frequency should work. Every one of these is contradicted by experiment.

## Einstein's equation

Suppose light arrives in photons of energy $h\\nu$ and each electron absorbs **one** photon. Part of the energy, the **work function** $A$, is spent on leaving the metal; the rest becomes kinetic energy:

> $$h\\nu = A + \\dfrac{mv_{\\max}^2}{2}.$$

All the laws follow at once. More intense light means more photons per second, so more electrons (law 1). The energy of an electron depends only on $h\\nu$ (law 2). If $h\\nu < A$ no electron can escape: the red limit is $\\nu_{\\min} = \\dfrac{A}{h}$, $\\lambda_{\\max} = \\dfrac{hc}{A}$ (law 3). A photon delivers its energy in one act, so there is no delay (law 4). Millikan (1916) measured $U_s$ against $\\nu$ for several metals, obtained straight lines with slope $\\dfrac{h}{e}$ and confirmed the equation and the value of $h$. Einstein received the Nobel Prize for this work.

Work functions: caesium $1{.}9$ eV, sodium $2{.}3$ eV, zinc $4{.}0$ eV, platinum $5{.}3$ eV. Alkali metals respond to visible light; most metals need ultraviolet.

**Applications.** Photocells and photomultipliers (light meters, automatic doors, sound tracks of old films), solar cells (the internal photoelectric effect in semiconductors), image sensors of cameras, and night-vision devices.

**Example 1.** The energy of a photon of green light ($\\lambda = 500$ nm): $E = \\dfrac{hc}{\\lambda} = \\dfrac{6{.}63 \\cdot 10^{-34} \\cdot 3 \\cdot 10^8}{5 \\cdot 10^{-7}} \\approx 4 \\cdot 10^{-19}$ J $\\approx 2{.}5$ eV. A handy formula: $E \\text{ (eV)} = \\dfrac{1240}{\\lambda \\text{ (nm)}}$.

**Example 2.** Red limit of zinc: $\\lambda_{\\max} = \\dfrac{1240}{4{.}0} = 310$ nm, ultraviolet. Visible light does not produce the effect in zinc, which is why Stoletov used an arc lamp. For caesium $\\lambda_{\\max} = \\dfrac{1240}{1{.}9} \\approx 650$ nm: all visible light works.

**Example 3.** Sodium ($A = 2{.}3$ eV) is lit with $\\lambda = 400$ nm ($3{.}1$ eV). $E_{k\\max} = 3{.}1 - 2{.}3 = 0{.}8$ eV, $U_s = 0{.}8$ V, $v_{\\max} = \\sqrt{\\dfrac{2 \\cdot 0{.}8 \\cdot 1{.}6 \\cdot 10^{-19}}{9{.}1 \\cdot 10^{-31}}} \\approx 5{.}3 \\cdot 10^5$ m/s.

**Example 4.** The light of Example 3 is made three times more intense. The number of electrons triples, the current triples, but $U_s$ stays $0{.}8$ V. Changing instead to $\\lambda = 300$ nm ($4{.}1$ eV) gives $U_s = 1{.}8$ V.

**Example 5.** Finding $h$: for a metal $U_s = 0{.}5$ V at $\\nu_1 = 6 \\cdot 10^{14}$ Hz and $U_s = 1{.}3$ V at $\\nu_2 = 8 \\cdot 10^{14}$ Hz. $e(U_2 - U_1) = h(\\nu_2 - \\nu_1)$, $h = \\dfrac{1{.}6 \\cdot 10^{-19} \\cdot 0{.}8}{2 \\cdot 10^{14}} = 6{.}4 \\cdot 10^{-34}$ J·s. The work function: $A = h\\nu_1 - eU_1 = 2{.}5 - 0{.}5 = 2{.}0$ eV.

**Example 6.** A $1$ mW laser at $633$ nm emits photons of $1{.}96$ eV $= 3{.}1 \\cdot 10^{-19}$ J, that is $\\dfrac{10^{-3}}{3{.}1 \\cdot 10^{-19}} \\approx 3 \\cdot 10^{15}$ photons per second. Light looks continuous only because the photons are so many and so small.

**Example 7.** A photocell with a caesium cathode is lit with $\\lambda = 500$ nm and gives a saturation current of $2$ μA. Electrons per second: $\\dfrac{2 \\cdot 10^{-6}}{1{.}6 \\cdot 10^{-19}} = 1{.}25 \\cdot 10^{13}$. If only one photon in $100$ ejects an electron, the light power absorbed is $100 \\cdot 1{.}25 \\cdot 10^{13} \\cdot 4 \\cdot 10^{-19} \\approx 0{.}5$ mW.

**Example 8.** Why does a sunburn come from ultraviolet and not from the much more intense visible light? A chemical change in a molecule of the skin needs several electronvolts delivered in one act; a $3$–$4$ eV ultraviolet photon can do it, a $2$ eV red photon cannot, no matter how many arrive. The same quantum logic governs photosynthesis, vision and photographic film.

## Exercises

1. Find the energy in eV of photons with $\\lambda = 200$ nm, $600$ nm and $1$ μm.
2. Find the red limit of platinum ($A = 5{.}3$ eV) and of sodium ($2{.}3$ eV).
3. Zinc is lit with $\\lambda = 250$ nm. Find the maximum kinetic energy of the electrons and the stopping voltage.
4. The stopping voltage is $2$ V for $\\lambda = 300$ nm. Find the work function in eV.
5. What happens to the photocurrent and to $U_s$ when the intensity is doubled? When the frequency is doubled?
6. For caesium, $U_s = 0{.}6$ V. Find the wavelength of the light.
7. A $60$ W lamp emits $5\\%$ of its power as visible light with mean $\\lambda = 550$ nm. How many photons per second?
8. Light of $\\lambda = 700$ nm falls on zinc for an hour at high intensity. Are any electrons emitted? Explain.

### Answers

1. $6{.}2$ eV, $2{.}07$ eV, $1{.}24$ eV. 2. $234$ nm, $539$ nm. 3. $4{.}96 - 4{.}0 = 0{.}96$ eV; $0{.}96$ V. 4. $4{.}13 - 2 = 2{.}13$ eV. 5. Current doubles, $U_s$ unchanged; current (per photon) unchanged but $E_{k\\max}$ grows to $2h\\nu - A$, so $U_s$ rises. 6. $h\\nu = 1{.}9 + 0{.}6 = 2{.}5$ eV, $\\lambda = 496$ nm. 7. $3$ W $\\div 3{.}6 \\cdot 10^{-19}$ J $\\approx 8 \\cdot 10^{18}$ per second. 8. No: $1{.}77$ eV $< 4{.}0$ eV, each photon is too weak, and intensity or time cannot help.`,
        hy: `## Պլանկի վարկածը

19-րդ դարի վերջին տաք մարմնի սպեկտրը հնարավոր չէր բացատրել․ ալիքային տեսությունը կանխատեսում էր, որ տաք վառարանը պետք է անվերջ էներգիա ճառագայթի ուլտրամանուշակագույնում։ Պլանկը (1900) գտավ ճիշտ բանաձևը՝ ենթադրելով, որ ատոմները լույս են ճառագայթում ոչ թե անընդհատ, այլ էներգիայի **բաժիններով** (քվանտներով)

> $$E = h\\nu, \\qquad h = 6{,}63 \\cdot 10^{-34} \\text{ J·s}$$

($h$-ը **Պլանկի հաստատունն** է)։ Պլանկը սա համարում էր մաթեմատիկական հնարք։ Էյնշտեյնը (1905) այն լրջորեն ընդունեց․ լույսն ինքը բաղկացած է քվանտներից, որոնք հետագայում կոչվեցին **ֆոտոններ**, և նա այդ գաղափարն օգտագործեց ֆոտոէֆեկտը բացատրելու համար։

## Ֆոտոէֆեկտ

Հերցը (1887) նկատեց, որ կայծն ավելի հեշտ է թռչում, երբ էլեկտրոդները լուսավորված են ուլտրամանուշակագույն լույսով։ Ստոլետովը (1888) երևույթն ուսումնասիրեց քանակապես․ էլեկտրաչափին միացված ցինկե թիթեղը լուսավորվելիս կորցնում է բացասական լիցքը, իսկ դրական լիցքավորված թիթեղը պահում է իր լիցքը։ Լույսը մետաղից դուրս է խփում **էլեկտրոններ**․ **ֆոտոէֆեկտ**։ Լուսավորված կատոդով և անոդով վակուումային խողովակում հոսանքը կարելի է չափել որպես լարման և լույսի ֆունկցիա։

**Ֆոտոէֆեկտի օրենքները**․

1. Վայրկյանում արձակված էլեկտրոնների թիվը (հագեցման հոսանքը) համեմատական է լույսի ինտենսիվությանը։
2. Էլեկտրոնների առավելագույն կինետիկ էներգիան կախված է լույսի **հաճախությունից**՝ գծայնորեն աճելով նրա հետ, և կախված **չէ** ինտենսիվությունից։
3. Յուրաքանչյուր մետաղի համար կա **կարմիր սահման**․ $\\nu_{\\min}$-ից ցածր հաճախությամբ լույսն էլեկտրոններ չի առաջացնում, որքան էլ ինտենսիվ լինի։
4. Երևույթը գործնականում ակնթարթային է․ էլեկտրոնները հայտնվում են լույսը միացնելուց $10^{-9}$ վ-ի ընթացքում։

Առավելագույն էներգիան չափվում է **արգելակող լարումով** $U_s$․ անոդը բացասական դարձնելիս հոսանքն անհետանում է, երբ $eU_s = \\dfrac{mv_{\\max}^2}{2}$։

**Ինչու են ալիքները ձախողվում։** Ալիքային պատկերում էլեկտրոնին տրվող էներգիան պետք է աճեր ինտենսիվության հետ և անկախ լիներ հաճախությունից, թույլ լույսին երկար ժամանակ պետք կլիներ բավարար էներգիա կուտակելու համար, ցանկացած հաճախություն պետք է աշխատեր։ Սրանցից յուրաքանչյուրը հերքվում է փորձով։

## Էյնշտեյնի հավասարումը

Ենթադրենք լույսը գալիս է $h\\nu$ էներգիայով ֆոտոններով, և յուրաքանչյուր էլեկտրոն կլանում է **մեկ** ֆոտոն։ Էներգիայի մի մասը՝ **ելքի աշխատանքը** $A$, ծախսվում է մետաղից դուրս գալու վրա, մնացածը դառնում է կինետիկ էներգիա․

> $$h\\nu = A + \\dfrac{mv_{\\max}^2}{2}$$

Բոլոր օրենքները միանգամից բխում են։ Ավելի ինտենսիվ լույս նշանակում է վայրկյանում ավելի շատ ֆոտոն, ուստի ավելի շատ էլեկտրոն (օրենք 1)։ Էլեկտրոնի էներգիան կախված է միայն $h\\nu$-ից (օրենք 2)։ Եթե $h\\nu < A$, ոչ մի էլեկտրոն չի կարող դուրս գալ․ կարմիր սահմանը $\\nu_{\\min} = \\dfrac{A}{h}$ է, $\\lambda_{\\max} = \\dfrac{hc}{A}$ (օրենք 3)։ Ֆոտոնն իր էներգիան տալիս է մեկ ակտով, ուստի ուշացում չկա (օրենք 4)։ Միլիկենը (1916) մի քանի մետաղների համար չափեց $U_s$-ը $\\nu$-ից կախված, ստացավ $\\dfrac{h}{e}$ թեքությամբ ուղիղ գծեր և հաստատեց հավասարումն ու $h$-ի արժեքը։ Էյնշտեյնն այս աշխատանքի համար ստացավ Նոբելյան մրցանակ։

Ելքի աշխատանքներ․ ցեզիում՝ $1{,}9$ էՎ, նատրիում՝ $2{,}3$ էՎ, ցինկ՝ $4{,}0$ էՎ, պլատին՝ $5{,}3$ էՎ։ Ալկալիական մետաղներն արձագանքում են տեսանելի լույսին, մետաղների մեծ մասին անհրաժեշտ է ուլտրամանուշակագույն։

**Կիրառություններ։** Ֆոտոէլեմենտներ և ֆոտոբազմապատկիչներ (լուսաչափեր, ավտոմատ դռներ, հին ֆիլմերի ձայնային ուղիներ), արևային մարտկոցներ (ներքին ֆոտոէֆեկտ կիսահաղորդիչներում), ֆոտոխցիկների պատկերային տվիչներ և գիշերային տեսողության սարքեր։

**Օրինակ 1։** Կանաչ լույսի ($\\lambda = 500$ նմ) ֆոտոնի էներգիան․ $E = \\dfrac{hc}{\\lambda} = \\dfrac{6{,}63 \\cdot 10^{-34} \\cdot 3 \\cdot 10^8}{5 \\cdot 10^{-7}} \\approx 4 \\cdot 10^{-19}$ Ջ $\\approx 2{,}5$ էՎ։ Հարմար բանաձև․ $E$ (էՎ) $= 1240 / \\lambda$ (նմ)։

**Օրինակ 2։** Ցինկի կարմիր սահմանը․ $\\lambda_{\\max} = \\dfrac{1240}{4{,}0} = 310$ նմ, ուլտրամանուշակագույն։ Տեսանելի լույսը ցինկում երևույթ չի առաջացնում, այդ պատճառով Ստոլետովն աղեղային լամպ էր օգտագործում։ Ցեզիումի համար $\\lambda_{\\max} = \\dfrac{1240}{1{,}9} \\approx 650$ նմ․ ամբողջ տեսանելի լույսն աշխատում է։

**Օրինակ 3։** Նատրիումը ($A = 2{,}3$ էՎ) լուսավորված է $\\lambda = 400$ նմ-ով ($3{,}1$ էՎ)։ $E_{k\\max} = 3{,}1 - 2{,}3 = 0{,}8$ էՎ, $U_s = 0{,}8$ Վ, $v_{\\max} = \\sqrt{\\dfrac{2 \\cdot 0{,}8 \\cdot 1{,}6 \\cdot 10^{-19}}{9{,}1 \\cdot 10^{-31}}} \\approx 5{,}3 \\cdot 10^5$ մ/վ։

**Օրինակ 4։** 3-րդ օրինակի լույսը դարձնում են երեք անգամ ավելի ինտենսիվ։ Էլեկտրոնների թիվն եռապատկվում է, հոսանքն եռապատկվում է, բայց $U_s$-ը մնում է $0{,}8$ Վ։ Փոխարենը $\\lambda = 300$ նմ-ի ($4{,}1$ էՎ) անցնելը տալիս է $U_s = 1{,}8$ Վ։

**Օրինակ 5։** $h$-ի որոշում․ մետաղի համար $U_s = 0{,}5$ Վ $\\nu_1 = 6 \\cdot 10^{14}$ Հց դեպքում և $U_s = 1{,}3$ Վ $\\nu_2 = 8 \\cdot 10^{14}$ Հց դեպքում։ $e(U_2 - U_1) = h(\\nu_2 - \\nu_1)$, $h = \\dfrac{1{,}6 \\cdot 10^{-19} \\cdot 0{,}8}{2 \\cdot 10^{14}} = 6{,}4 \\cdot 10^{-34}$ Ջ·վ։ Ելքի աշխատանքը․ $A = h\\nu_1 - eU_1 = 2{,}5 - 0{,}5 = 2{,}0$ էՎ։

**Օրինակ 6։** $633$ նմ $1$ մՎտ լազերը ճառագայթում է $1{,}96$ էՎ $= 3{,}1 \\cdot 10^{-19}$ Ջ ֆոտոններ, այսինքն՝ վայրկյանում $\\dfrac{10^{-3}}{3{,}1 \\cdot 10^{-19}} \\approx 3 \\cdot 10^{15}$ ֆոտոն։ Լույսն անընդհատ է թվում միայն այն պատճառով, որ ֆոտոններն այդքան շատ են և այդքան փոքր։

**Օրինակ 7։** Ցեզիումային կատոդով ֆոտոէլեմենտը լուսավորված է $\\lambda = 500$ նմ-ով և տալիս է $2$ մկԱ հագեցման հոսանք։ Էլեկտրոններ վայրկյանում․ $\\dfrac{2 \\cdot 10^{-6}}{1{,}6 \\cdot 10^{-19}} = 1{,}25 \\cdot 10^{13}$։ Եթե $100$ ֆոտոնից միայն մեկն է էլեկտրոն դուրս խփում, կլանված լույսի հզորությունը $100 \\cdot 1{,}25 \\cdot 10^{13} \\cdot 4 \\cdot 10^{-19} \\approx 0{,}5$ մՎտ է։

**Օրինակ 8։** Ինչո՞ւ է արևայրուքն առաջանում ուլտրամանուշակագույնից, ոչ թե շատ ավելի ինտենսիվ տեսանելի լույսից։ Մաշկի մոլեկուլում քիմիական փոփոխության համար անհրաժեշտ է մի քանի էլեկտրոնվոլտ՝ տրված մեկ ակտով, $3$–$4$ էՎ ուլտրամանուշակագույն ֆոտոնը կարող է դա անել, $2$ էՎ կարմիր ֆոտոնը՝ ոչ, որքան էլ շատ լինեն։ Նույն քվանտային տրամաբանությունն է կառավարում ֆոտոսինթեզը, տեսողությունն ու լուսանկարչական ժապավենը։

## Վարժություններ

1. Գտեք $\\lambda = 200$ նմ, $600$ նմ և $1$ մկմ ֆոտոնների էներգիան էՎ-ով։
2. Գտեք պլատինի ($A = 5{,}3$ էՎ) և նատրիումի ($2{,}3$ էՎ) կարմիր սահմանը։
3. Ցինկը լուսավորված է $\\lambda = 250$ նմ-ով։ Գտեք էլեկտրոնների առավելագույն կինետիկ էներգիան և արգելակող լարումը։
4. Արգելակող լարումը $2$ Վ է $\\lambda = 300$ նմ-ի համար։ Գտեք ելքի աշխատանքն էՎ-ով։
5. Ի՞նչ է կատարվում ֆոտոհոսանքի և $U_s$-ի հետ, երբ ինտենսիվությունը կրկնապատկվում է։ Երբ հաճախությունը կրկնապատկվում է։
6. Ցեզիումի համար $U_s = 0{,}6$ Վ։ Գտեք լույսի ալիքի երկարությունը։
7. $60$ Վտ լամպն իր հզորության $5\\%$-ը ճառագայթում է որպես տեսանելի լույս $550$ նմ միջին ալիքի երկարությամբ։ Քանի՞ ֆոտոն վայրկյանում։
8. $\\lambda = 700$ նմ լույսը մեկ ժամ մեծ ինտենսիվությամբ ընկնում է ցինկի վրա։ Արձակվո՞ւմ են էլեկտրոններ։ Բացատրեք։

### Պատասխաններ

1. $6{,}2$ էՎ, $2{,}07$ էՎ, $1{,}24$ էՎ։ 2. $234$ նմ, $539$ նմ։ 3. $4{,}96 - 4{,}0 = 0{,}96$ էՎ, $0{,}96$ Վ։ 4. $4{,}13 - 2 = 2{,}13$ էՎ։ 5. Հոսանքը կրկնապատկվում է, $U_s$-ն անփոփոխ է, հոսանքը (մեկ ֆոտոնին) անփոփոխ է, բայց $E_{k\\max}$-ն աճում է մինչև $2h\\nu - A$, ուստի $U_s$-ն աճում է։ 6. $h\\nu = 1{,}9 + 0{,}6 = 2{,}5$ էՎ, $\\lambda = 496$ նմ։ 7. $3$ Վտ $\\div 3{,}6 \\cdot 10^{-19}$ Ջ $\\approx 8 \\cdot 10^{18}$ վայրկյանում։ 8. Ոչ․ $1{,}77$ էՎ $< 4{,}0$ էՎ, յուրաքանչյուր ֆոտոն չափազանց թույլ է, և ինտենսիվությունը կամ ժամանակը չեն կարող օգնել։`,
        ru: `## Гипотеза Планка

В конце XIX века спектр нагретого тела не удавалось объяснить: волновая теория предсказывала, что горячая печь должна излучать бесконечную энергию в ультрафиолете. Планк (1900) нашёл верную формулу, предположив, что атомы излучают свет не непрерывно, а **порциями** (квантами) энергии

> $$E = h\\nu, \\qquad h = 6{,}63 \\cdot 10^{-34} \\text{ Дж·с}$$

($h$ — **постоянная Планка**). Планк считал это математическим приёмом. Эйнштейн (1905) принял его всерьёз: сам свет состоит из квантов, позже названных **фотонами**, и с помощью этой идеи объяснил фотоэффект.

## Фотоэффект

Герц (1887) заметил, что искра проскакивает легче, когда электроды освещены ультрафиолетом. Столетов (1888) исследовал явление количественно: цинковая пластинка, соединённая с электроскопом, при освещении теряет отрицательный заряд, а положительно заряженная пластинка свой заряд сохраняет. Свет выбивает из металла **электроны**: **фотоэффект**. В вакуумной трубке с освещённым катодом и анодом ток можно измерять в зависимости от напряжения и от света.

**Законы фотоэффекта**:

1. Число электронов, вылетающих в секунду (ток насыщения), пропорционально интенсивности света.
2. Максимальная кинетическая энергия электронов зависит от **частоты** света, линейно растя с ней, и **не** зависит от интенсивности.
3. Для каждого металла есть **красная граница**: свет с частотой ниже $\\nu_{\\min}$ не вызывает фотоэффекта, как бы интенсивен он ни был.
4. Эффект практически мгновенный: электроны появляются в пределах $10^{-9}$ с после включения света.

Максимальную энергию измеряют по **задерживающему напряжению** $U_s$: при отрицательном аноде ток исчезает, когда $eU_s = \\dfrac{mv_{\\max}^2}{2}$.

**Почему волны не подходят.** В волновой картине энергия, передаваемая электрону, должна расти с интенсивностью и не зависеть от частоты; слабому свету нужно было бы долго накапливать достаточную энергию; подошла бы любая частота. Каждое из этих утверждений опровергается опытом.

## Уравнение Эйнштейна

Пусть свет приходит фотонами с энергией $h\\nu$ и каждый электрон поглощает **один** фотон. Часть энергии, **работа выхода** $A$, тратится на выход из металла; остальное становится кинетической энергией:

> $$h\\nu = A + \\dfrac{mv_{\\max}^2}{2}.$$

Все законы следуют сразу. Более интенсивный свет — больше фотонов в секунду, значит, больше электронов (закон 1). Энергия электрона зависит только от $h\\nu$ (закон 2). Если $h\\nu < A$, ни один электрон выйти не может: красная граница $\\nu_{\\min} = \\dfrac{A}{h}$, $\\lambda_{\\max} = \\dfrac{hc}{A}$ (закон 3). Фотон отдаёт энергию в одном акте, так что задержки нет (закон 4). Милликен (1916) измерил $U_s$ в зависимости от $\\nu$ для нескольких металлов, получил прямые с наклоном $\\dfrac{h}{e}$ и подтвердил уравнение и значение $h$. За эту работу Эйнштейн получил Нобелевскую премию.

Работы выхода: цезий $1{,}9$ эВ, натрий $2{,}3$ эВ, цинк $4{,}0$ эВ, платина $5{,}3$ эВ. Щелочные металлы реагируют на видимый свет; большинству металлов нужен ультрафиолет.

**Применения.** Фотоэлементы и фотоумножители (экспонометры, автоматические двери, звуковые дорожки старых фильмов), солнечные батареи (внутренний фотоэффект в полупроводниках), матрицы фотокамер и приборы ночного видения.

**Пример 1.** Энергия фотона зелёного света ($\\lambda = 500$ нм): $E = \\dfrac{hc}{\\lambda} = \\dfrac{6{,}63 \\cdot 10^{-34} \\cdot 3 \\cdot 10^8}{5 \\cdot 10^{-7}} \\approx 4 \\cdot 10^{-19}$ Дж $\\approx 2{,}5$ эВ. Удобная формула: $E$ (эВ) $= 1240 / \\lambda$ (нм).

**Пример 2.** Красная граница цинка: $\\lambda_{\\max} = \\dfrac{1240}{4{,}0} = 310$ нм, ультрафиолет. Видимый свет в цинке эффекта не вызывает, поэтому Столетов использовал дуговую лампу. Для цезия $\\lambda_{\\max} = \\dfrac{1240}{1{,}9} \\approx 650$ нм: работает весь видимый свет.

**Пример 3.** Натрий ($A = 2{,}3$ эВ) освещают светом $\\lambda = 400$ нм ($3{,}1$ эВ). $E_{k\\max} = 3{,}1 - 2{,}3 = 0{,}8$ эВ, $U_s = 0{,}8$ В, $v_{\\max} = \\sqrt{\\dfrac{2 \\cdot 0{,}8 \\cdot 1{,}6 \\cdot 10^{-19}}{9{,}1 \\cdot 10^{-31}}} \\approx 5{,}3 \\cdot 10^5$ м/с.

**Пример 4.** Свет из примера 3 делают втрое интенсивнее. Число электронов утраивается, ток утраивается, но $U_s$ остаётся $0{,}8$ В. Переход же на $\\lambda = 300$ нм ($4{,}1$ эВ) даёт $U_s = 1{,}8$ В.

**Пример 5.** Нахождение $h$: для металла $U_s = 0{,}5$ В при $\\nu_1 = 6 \\cdot 10^{14}$ Гц и $U_s = 1{,}3$ В при $\\nu_2 = 8 \\cdot 10^{14}$ Гц. $e(U_2 - U_1) = h(\\nu_2 - \\nu_1)$, $h = \\dfrac{1{,}6 \\cdot 10^{-19} \\cdot 0{,}8}{2 \\cdot 10^{14}} = 6{,}4 \\cdot 10^{-34}$ Дж·с. Работа выхода: $A = h\\nu_1 - eU_1 = 2{,}5 - 0{,}5 = 2{,}0$ эВ.

**Пример 6.** Лазер $1$ мВт на $633$ нм излучает фотоны по $1{,}96$ эВ $= 3{,}1 \\cdot 10^{-19}$ Дж, то есть $\\dfrac{10^{-3}}{3{,}1 \\cdot 10^{-19}} \\approx 3 \\cdot 10^{15}$ фотонов в секунду. Свет кажется непрерывным лишь потому, что фотонов так много и они так малы.

**Пример 7.** Фотоэлемент с цезиевым катодом освещают светом $\\lambda = 500$ нм, ток насыщения $2$ мкА. Электронов в секунду: $\\dfrac{2 \\cdot 10^{-6}}{1{,}6 \\cdot 10^{-19}} = 1{,}25 \\cdot 10^{13}$. Если лишь один фотон из $100$ выбивает электрон, поглощаемая мощность света $100 \\cdot 1{,}25 \\cdot 10^{13} \\cdot 4 \\cdot 10^{-19} \\approx 0{,}5$ мВт.

**Пример 8.** Почему солнечный ожог вызывает ультрафиолет, а не гораздо более интенсивный видимый свет? Для химического изменения в молекуле кожи нужно несколько электронвольт, переданных в одном акте; ультрафиолетовый фотон в $3$–$4$ эВ может это сделать, красный в $2$ эВ — нет, сколько бы их ни пришло. Та же квантовая логика управляет фотосинтезом, зрением и фотоплёнкой.

## Упражнения

1. Найдите энергию в эВ фотонов с $\\lambda = 200$ нм, $600$ нм и $1$ мкм.
2. Найдите красную границу платины ($A = 5{,}3$ эВ) и натрия ($2{,}3$ эВ).
3. Цинк освещают светом $\\lambda = 250$ нм. Найдите максимальную кинетическую энергию электронов и задерживающее напряжение.
4. Задерживающее напряжение равно $2$ В при $\\lambda = 300$ нм. Найдите работу выхода в эВ.
5. Что происходит с фототоком и с $U_s$ при удвоении интенсивности? При удвоении частоты?
6. Для цезия $U_s = 0{,}6$ В. Найдите длину волны света.
7. Лампа $60$ Вт излучает $5\\%$ мощности в виде видимого света со средней $\\lambda = 550$ нм. Сколько фотонов в секунду?
8. Свет $\\lambda = 700$ нм падает на цинк в течение часа с большой интенсивностью. Вылетают ли электроны? Объясните.

### Ответы

1. $6{,}2$ эВ, $2{,}07$ эВ, $1{,}24$ эВ. 2. $234$ нм, $539$ нм. 3. $4{,}96 - 4{,}0 = 0{,}96$ эВ; $0{,}96$ В. 4. $4{,}13 - 2 = 2{,}13$ эВ. 5. Ток удваивается, $U_s$ не меняется; ток (на фотон) не меняется, но $E_{k\\max}$ растёт до $2h\\nu - A$, так что $U_s$ растёт. 6. $h\\nu = 1{,}9 + 0{,}6 = 2{,}5$ эВ, $\\lambda = 496$ нм. 7. $3$ Вт $\\div 3{,}6 \\cdot 10^{-19}$ Дж $\\approx 8 \\cdot 10^{18}$ в секунду. 8. Нет: $1{,}77$ эВ $< 4{,}0$ эВ, каждый фотон слишком слаб, и ни интенсивность, ни время не помогут.`,
      },
      [
        q(t("The energy of a photon is…", "Ֆոտոնի էներգիան…", "Энергия фотона равна…"), [t("hν", "hν է", "hν"), t("h/ν", "h/ν է", "h/ν"), t("hλ", "hλ է", "hλ")], 0),
        q(t("The maximum energy of photoelectrons depends on…", "Ֆոտոէլեկտրոնների առավելագույն էներգիան կախված է…", "Максимальная энергия фотоэлектронов зависит от…"), [t("the intensity of light", "լույսի ինտենսիվությունից", "интенсивности света"), t("the frequency of light", "լույսի հաճախությունից", "частоты света"), t("the time of illumination", "լուսավորման ժամանակից", "времени освещения")], 1),
        q(t("Doubling the light intensity…", "Լույսի ինտենսիվության կրկնապատկումը…", "Удвоение интенсивности света…"), [t("doubles the photocurrent", "կրկնապատկում է ֆոտոհոսանքը", "удваивает фототок"), t("doubles the electron energy", "կրկնապատկում է էլեկտրոնների էներգիան", "удваивает энергию электронов"), t("changes nothing", "ոչինչ չի փոխում", "ничего не меняет")], 0),
        q(t("The red limit is the frequency below which…", "Կարմիր սահմանն այն հաճախությունն է, որից ցածր…", "Красная граница — это частота, ниже которой…"), [t("electrons are faster", "էլեկտրոններն ավելի արագ են", "электроны быстрее"), t("no photoelectric effect occurs", "ֆոտոէֆեկտ տեղի չի ունենում", "фотоэффект не происходит"), t("the metal melts", "մետաղը հալվում է", "металл плавится")], 1),
        q(t("A photon of 4 eV hits a metal with A = 2.5 eV. The maximum electron energy is…", "4 էՎ ֆոտոնն ընկնում է A = 2,5 էՎ մետաղի վրա։ Էլեկտրոնի առավելագույն էներգիան…", "Фотон 4 эВ попадает на металл с A = 2,5 эВ. Максимальная энергия электрона…"), [t("6.5 eV", "6,5 էՎ է", "6,5 эВ"), t("1.5 eV", "1,5 էՎ է", "1,5 эВ"), t("4 eV", "4 էՎ է", "4 эВ")], 1),
        q(t("The slope of the graph of stopping voltage against frequency equals…", "Արգելակող լարման՝ հաճախությունից կախման գրաֆիկի թեքությունը հավասար է…", "Наклон графика задерживающего напряжения от частоты равен…"), [t("h/e", "h/e", "h/e"), t("e/h", "e/h", "e/h"), t("A", "A", "A")], 0),
      ],
    ),
    lesson(
      "photons",
      ["Photons; pressure of light; wave–particle duality", "Ֆոտոններ, լույսի ճնշում, ալիք–մասնիկ երկվություն", "Фотоны; давление света; корпускулярно-волновой дуализм"],
      {
        en: ["Compute the energy, momentum and mass-equivalent of a photon: E = hν, p = h/λ", "Explain the pressure of light from the photon and the wave points of view and describe Lebedev's experiment", "Describe the Compton effect and wave–particle duality, including de Broglie waves of electrons"],
        hy: ["Հաշվել ֆոտոնի էներգիան, իմպուլսն ու զանգվածային համարժեքը․ E = hν, p = h/λ", "Բացատրել լույսի ճնշումը ֆոտոնային և ալիքային տեսանկյուններից և նկարագրել Լեբեդևի փորձը", "Նկարագրել Կոմպտոնի երևույթը և ալիք–մասնիկ երկվությունը, ներառյալ էլեկտրոնների դը Բրոյլի ալիքները"],
        ru: ["Вычислять энергию, импульс и массовый эквивалент фотона: E = hν, p = h/λ", "Объяснять давление света с фотонной и волновой точек зрения и описывать опыт Лебедева", "Описывать эффект Комптона и корпускулярно-волновой дуализм, включая волны де Бройля для электронов"],
      },
      {
        en: `## The photon

Einstein's explanation of the photoelectric effect gives light a particle: the **photon**, a quantum of the electromagnetic field. Its properties:

> - energy $E = h\\nu = \\dfrac{hc}{\\lambda}$;
> - it always moves at $c$ in vacuum and has no rest mass; it cannot be stopped or slowed, only absorbed or emitted;
> - momentum, from $E = pc$: $$p = \\dfrac{h\\nu}{c} = \\dfrac{h}{\\lambda};$$
> - a "mass equivalent" $m = \\dfrac{E}{c^2} = \\dfrac{h\\nu}{c^2}$ that describes its gravitational interaction and inertia, though it is not a rest mass.

Photons are produced whenever an atom, molecule or nucleus loses energy, or a charge is accelerated; they are absorbed whole. A photon of visible light has an energy of $2$–$3$ eV and a momentum of about $10^{-27}$ kg·m/s.

## Pressure of light

If photons carry momentum, light striking a surface pushes it. A beam of intensity $I$ (power per unit area) delivers momentum $\\dfrac{I}{c}$ per second per unit area to a surface that absorbs it completely (black); a mirror, which sends the photons back, receives twice as much:

> $$p_{\\text{black}} = \\dfrac{I}{c}, \\qquad p_{\\text{mirror}} = \\dfrac{2I}{c}, \\qquad p = \\dfrac{I}{c}(1 + R)$$ in general, where $R$ is the reflectivity.

Maxwell had predicted this pressure from the wave theory: the electric field drives charges in the surface, and the magnetic field then pushes them along the direction of the wave. **Lebedev** (1899) measured it with tiny vanes on a torsion thread in a vacuum, confirming Maxwell's value, about $4 \\cdot 10^{-6}$ Pa for sunlight, a ten-billionth of atmospheric pressure. Light pressure shapes comet tails, which point away from the Sun, keeps stars from collapsing, and can propel spacecraft with **solar sails**.

## The Compton effect

In 1923 Compton scattered X-rays from graphite and found that the scattered radiation has a **longer** wavelength than the incident, by an amount depending on the angle. A wave should scatter without changing its frequency. The result is explained exactly as a collision of a photon with a free electron: the photon gives part of its energy and momentum to the electron, so its energy decreases and its wavelength grows,

$$\\Delta\\lambda = \\dfrac{h}{m_e c}(1 - \\cos\\theta), \\qquad \\dfrac{h}{m_e c} = 2{.}43 \\cdot 10^{-12} \\text{ m}.$$

Energy and momentum are conserved in each individual act, as in billiards. The Compton effect is the most direct evidence that photons are real particles with momentum.

## Wave–particle duality

Interference and diffraction show that light is a wave; the photoelectric and Compton effects show that it is a stream of particles. Both are true: light is neither a classical wave nor a classical particle but a quantum object with properties of both. In propagation (interference) the wave picture works; in emission and absorption (exchange of energy) the particle picture works. The two are connected by $E = h\\nu$ and $p = \\dfrac{h}{\\lambda}$: the wave quantities on the right, the particle quantities on the left. The intensity of the wave at a point gives the probability of finding a photon there; a double-slit pattern is built up photon by photon.

**De Broglie (1924)** proposed that the same duality holds for matter: a particle of momentum $p$ has a wave of length

$$\\lambda = \\dfrac{h}{p} = \\dfrac{h}{mv}.$$

Davisson and Germer (1927) observed the diffraction of electrons by a crystal exactly as predicted. For everyday bodies $\\lambda$ is absurdly small, but for electrons it is comparable with atomic spacings. The **electron microscope** uses electron waves thousands of times shorter than light to see viruses and atoms; the wave nature of electrons underlies the whole of atomic physics and chemistry.

**Example 1.** A photon of $\\lambda = 600$ nm: $E = \\dfrac{1240}{600} = 2{.}07$ eV $= 3{.}3 \\cdot 10^{-19}$ J, $p = \\dfrac{6{.}63 \\cdot 10^{-34}}{6 \\cdot 10^{-7}} = 1{.}1 \\cdot 10^{-27}$ kg·m/s, mass equivalent $\\dfrac{E}{c^2} = 3{.}7 \\cdot 10^{-36}$ kg, four hundred thousand times lighter than an electron.

**Example 2.** Sunlight at the Earth has $I = 1400$ W/m². Pressure on a black surface: $\\dfrac{1400}{3 \\cdot 10^8} = 4{.}7 \\cdot 10^{-6}$ Pa; on a mirror $9{.}3 \\cdot 10^{-6}$ Pa. A solar sail of $10^4$ m² (a $100$ m square) made of mirror film feels $0{.}093$ N; with a mass of $100$ kg it accelerates at $10^{-3}$ m/s², reaching $30$ km/s in a year.

**Example 3.** A $1$ kW laser beam is reflected by a mirror. The force on the mirror is $\\dfrac{2P}{c} = \\dfrac{2000}{3 \\cdot 10^8} \\approx 7 \\cdot 10^{-6}$ N, the weight of a speck of dust. Light pressure is tiny for everyday powers but enough to trap and move microscopic particles ("optical tweezers").

**Example 4.** How many photons of $\\lambda = 500$ nm must hit a mirror per second to produce a force of $1$ N? Each gives momentum $\\dfrac{2h}{\\lambda} = 2{.}65 \\cdot 10^{-27}$ kg·m/s, so $N = \\dfrac{1}{2{.}65 \\cdot 10^{-27}} \\approx 3{.}8 \\cdot 10^{26}$ per second, a beam of $150$ MW.

**Example 5.** Compton scattering at $90°$: $\\Delta\\lambda = 2{.}43 \\cdot 10^{-12}$ m $= 0{.}00243$ nm. For X-rays with $\\lambda = 0{.}07$ nm this is a $3{.}5\\%$ change, easily measured; for visible light ($500$ nm) it is $5 \\cdot 10^{-6}$ of the wavelength, undetectable, which is why the effect was discovered with X-rays.

**Example 6.** De Broglie wavelength of an electron accelerated through $100$ V: $E_k = 100$ eV $= 1{.}6 \\cdot 10^{-17}$ J, $p = \\sqrt{2mE_k} = \\sqrt{2 \\cdot 9{.}1 \\cdot 10^{-31} \\cdot 1{.}6 \\cdot 10^{-17}} = 5{.}4 \\cdot 10^{-24}$ kg·m/s, $\\lambda = \\dfrac{6{.}63 \\cdot 10^{-34}}{5{.}4 \\cdot 10^{-24}} = 1{.}2 \\cdot 10^{-10}$ m $= 0{.}12$ nm, the size of an atom: a crystal acts as a diffraction grating for such electrons.

**Example 7.** De Broglie wavelength of a tennis ball, $m = 60$ g, $v = 30$ m/s: $\\lambda = \\dfrac{6{.}63 \\cdot 10^{-34}}{1{.}8} = 3{.}7 \\cdot 10^{-34}$ m, $10^{19}$ times smaller than a nucleus. No slit could show its diffraction; large bodies behave classically.

**Example 8.** In a double-slit experiment with very weak light, single photons arrive one at a time as dots on the detector, yet after thousands of dots the interference fringes appear. Each photon "interferes with itself": the wave decides where the photon may land, the photon lands at one point. This is the central puzzle and the central fact of quantum physics.

## Exercises

1. Find the energy, momentum and mass equivalent of an X-ray photon with $\\lambda = 0{.}1$ nm.
2. Find the pressure of a $10$ W/cm² laser beam on a black surface and on a mirror.
3. What force does sunlight ($1400$ W/m²) exert on a black $1$ m² panel?
4. A $100$ W lamp radiates uniformly. Find the light pressure on a mirror $1$ m away.
5. Compton scattering at $180°$: find $\\Delta\\lambda$ and the fraction of energy lost by a $0{.}02$ nm photon.
6. Find the de Broglie wavelength of an electron at $10^6$ m/s and of a proton with the same speed.
7. Through what voltage must an electron be accelerated to have $\\lambda = 0{.}05$ nm?
8. Why can interference be observed with electrons but not with cars?

### Answers

1. $12{.}4$ keV $= 2 \\cdot 10^{-15}$ J; $6{.}6 \\cdot 10^{-24}$ kg·m/s; $2{.}2 \\cdot 10^{-32}$ kg. 2. $I = 10^5$ W/m²: $3{.}3 \\cdot 10^{-4}$ Pa and $6{.}7 \\cdot 10^{-4}$ Pa. 3. $4{.}7 \\cdot 10^{-6}$ N. 4. $I = \\dfrac{100}{4\\pi} \\approx 8$ W/m², $p = \\dfrac{2I}{c} \\approx 5 \\cdot 10^{-8}$ Pa. 5. $\\Delta\\lambda = 0{.}00486$ nm; $\\lambda' = 0{.}02486$ nm; energy fraction lost $= 1 - \\dfrac{0{.}02}{0{.}02486} \\approx 20\\%$. 6. $7{.}3 \\cdot 10^{-10}$ m; $4 \\cdot 10^{-13}$ m. 7. $p = \\dfrac{h}{\\lambda} = 1{.}33 \\cdot 10^{-23}$, $E_k = \\dfrac{p^2}{2m} = 9{.}7 \\cdot 10^{-17}$ J $\\approx 600$ V. 8. The de Broglie wavelength of a car is around $10^{-38}$ m, far smaller than any obstacle; an electron's is atomic-sized.`,
        hy: `## Ֆոտոնը

Էյնշտեյնի ֆոտոէֆեկտի բացատրությունը լույսին մասնիկ է տալիս․ **ֆոտոնը**՝ էլեկտրամագնիսական դաշտի քվանտը։ Նրա հատկությունները․

> - էներգիա՝ $E = h\\nu = \\dfrac{hc}{\\lambda}$,
> - վակուումում միշտ շարժվում է $c$ արագությամբ և հանգստի զանգված չունի, այն հնարավոր չէ կանգնեցնել կամ դանդաղեցնել, միայն կլանել կամ ճառագայթել,
> - իմպուլս, $E = pc$-ից․ $$p = \\dfrac{h\\nu}{c} = \\dfrac{h}{\\lambda}$$
> - «զանգվածային համարժեք» $m = \\dfrac{E}{c^2} = \\dfrac{h\\nu}{c^2}$, որը նկարագրում է նրա գրավիտացիոն փոխազդեցությունն ու իներտությունը, թեև հանգստի զանգված չէ։

Ֆոտոններ առաջանում են ամեն անգամ, երբ ատոմը, մոլեկուլը կամ միջուկն էներգիա է կորցնում, կամ լիցքն արագանում է, դրանք կլանվում են ամբողջությամբ։ Տեսանելի լույսի ֆոտոնն ունի $2$–$3$ էՎ էներգիա և մոտ $10^{-27}$ կգ·մ/վ իմպուլս։

## Լույսի ճնշում

Եթե ֆոտոններն իմպուլս են կրում, մակերևույթին ընկնող լույսը մղում է այն։ $I$ ինտենսիվությամբ (հզորություն միավոր մակերեսով) փունջն այն ամբողջությամբ կլանող (սև) մակերևույթին վայրկյանում միավոր մակերեսով հաղորդում է $\\dfrac{I}{c}$ իմպուլս, հայելին, որը ֆոտոնները հետ է ուղարկում, ստանում է կրկնակին․

> $$p_{\\text{սև}} = \\dfrac{I}{c}, \\qquad p_{\\text{հայելի}} = \\dfrac{2I}{c}, \\qquad p = \\dfrac{I}{c}(1 + R)$$ ընդհանուր դեպքում, որտեղ $R$-ն անդրադարձման գործակիցն է։

Մաքսվելն այս ճնշումը կանխատեսել էր ալիքային տեսությունից․ էլեկտրական դաշտը մակերևույթում շարժում է լիցքերը, իսկ մագնիսական դաշտն ապա մղում է դրանք ալիքի ուղղությամբ։ **Լեբեդևը** (1899) այն չափեց վակուումում ոլորման թելի վրա փոքրիկ թևիկներով՝ հաստատելով Մաքսվելի արժեքը, արևի լույսի համար մոտ $4 \\cdot 10^{-6}$ Պա՝ մթնոլորտային ճնշման տասը միլիարդերորդ մասը։ Լույսի ճնշումը ձևավորում է գիսաստղերի պոչերը, որոնք ուղղված են Արևից հեռու, պահում է աստղերը փլուզվելուց և կարող է տիեզերանավեր շարժել **արևային առագաստներով**։

## Կոմպտոնի երևույթը

1923 թ․ Կոմպտոնը ռենտգենյան ճառագայթներ ցրեց գրաֆիտից և գտավ, որ ցրված ճառագայթումն ունի ընկնողից **ավելի երկար** ալիքի երկարություն՝ անկյունից կախված չափով։ Ալիքը պետք է ցրվեր առանց հաճախությունը փոխելու։ Արդյունքը ճշգրիտ բացատրվում է որպես ֆոտոնի բախում ազատ էլեկտրոնի հետ․ ֆոտոնն իր էներգիայի և իմպուլսի մի մասը տալիս է էլեկտրոնին, ուստի նրա էներգիան նվազում է, իսկ ալիքի երկարությունն աճում․

$$\\Delta\\lambda = \\dfrac{h}{m_e c}(1 - \\cos\\theta), \\qquad \\dfrac{h}{m_e c} = 2{,}43 \\cdot 10^{-12} \\text{ m}$$

Էներգիան և իմպուլսը պահպանվում են յուրաքանչյուր առանձին ակտում, ինչպես բիլիարդում։ Կոմպտոնի երևույթն ամենաուղղակի վկայությունն է, որ ֆոտոններն իրական մասնիկներ են՝ իմպուլսով։

## Ալիք–մասնիկ երկվություն

Ինտերֆերենցն ու դիֆրակցիան ցույց են տալիս, որ լույսն ալիք է, ֆոտոէֆեկտն ու Կոմպտոնի երևույթը՝ որ այն մասնիկների հոսք է։ Երկուսն էլ ճիշտ են․ լույսը ոչ դասական ալիք է, ոչ դասական մասնիկ, այլ քվանտային օբյեկտ երկուսի հատկություններով։ Տարածման մեջ (ինտերֆերենց) աշխատում է ալիքային պատկերը, ճառագայթման և կլանման մեջ (էներգիայի փոխանակում)՝ մասնիկայինը։ Երկուսը կապված են $E = h\\nu$ և $p = \\dfrac{h}{\\lambda}$ առնչություններով․ ալիքային մեծություններն աջում, մասնիկայինները՝ ձախում։ Ալիքի ինտենսիվությունը կետում տալիս է այնտեղ ֆոտոն գտնելու հավանականությունը, երկու ճեղքերի պատկերը կառուցվում է ֆոտոն առ ֆոտոն։

**Դը Բրոյլը (1924)** առաջարկեց, որ նույն երկվությունը գործում է նյութի համար․ $p$ իմպուլսով մասնիկն ունի ալիք՝

$$\\lambda = \\dfrac{h}{p} = \\dfrac{h}{mv}$$

երկարությամբ։ Դևիսոնը և Ջերմերը (1927) դիտեցին էլեկտրոնների դիֆրակցիան բյուրեղից ճիշտ այնպես, ինչպես կանխատեսված էր։ Առօրյա մարմինների համար $\\lambda$-ն անհեթեթորեն փոքր է, բայց էլեկտրոնների համար այն համեմատելի է ատոմային հեռավորությունների հետ։ **Էլեկտրոնային մանրադիտակն** օգտագործում է լույսից հազարավոր անգամ կարճ էլեկտրոնային ալիքներ՝ վիրուսներ և ատոմներ տեսնելու համար, էլեկտրոնների ալիքային բնույթն ընկած է ամբողջ ատոմային ֆիզիկայի և քիմիայի հիմքում։

**Օրինակ 1։** $\\lambda = 600$ նմ ֆոտոն․ $E = \\dfrac{1240}{600} = 2{,}07$ էՎ $= 3{,}3 \\cdot 10^{-19}$ Ջ, $p = \\dfrac{6{,}63 \\cdot 10^{-34}}{6 \\cdot 10^{-7}} = 1{,}1 \\cdot 10^{-27}$ կգ·մ/վ, զանգվածային համարժեքը $\\dfrac{E}{c^2} = 3{,}7 \\cdot 10^{-36}$ կգ՝ էլեկտրոնից չորս հարյուր հազար անգամ թեթև։

**Օրինակ 2։** Արևի լույսն Երկրի մոտ ունի $I = 1400$ Վտ/մ²։ Ճնշումը սև մակերևույթի վրա․ $\\dfrac{1400}{3 \\cdot 10^8} = 4{,}7 \\cdot 10^{-6}$ Պա, հայելու վրա՝ $9{,}3 \\cdot 10^{-6}$ Պա։ Հայելային թաղանթից $10^4$ մ² ($100$ մ կողմով քառակուսի) արևային առագաստը զգում է $0{,}093$ Ն, $100$ կգ զանգվածի դեպքում այն արագանում է $10^{-3}$ մ/վ²-ով՝ մեկ տարում հասնելով $30$ կմ/վ-ի։

**Օրինակ 3։** $1$ կՎտ լազերային փունջն անդրադառնում է հայելուց։ Հայելու վրա ուժը $\\dfrac{2P}{c} = \\dfrac{2000}{3 \\cdot 10^8} \\approx 7 \\cdot 10^{-6}$ Ն է՝ փոշու հատիկի կշիռը։ Լույսի ճնշումն առօրյա հզորությունների համար չնչին է, բայց բավական է մանրադիտակային մասնիկներ բռնելու և շարժելու համար («օպտիկական ունելիներ»)։

**Օրինակ 4։** $\\lambda = 500$ նմ քանի՞ ֆոտոն պետք է վայրկյանում ընկնի հայելու վրա $1$ Ն ուժ ստեղծելու համար։ Յուրաքանչյուրը տալիս է $\\dfrac{2h}{\\lambda} = 2{,}65 \\cdot 10^{-27}$ կգ·մ/վ իմպուլս, ուստի $N = \\dfrac{1}{2{,}65 \\cdot 10^{-27}} \\approx 3{,}8 \\cdot 10^{26}$ վայրկյանում՝ $150$ ՄՎտ փունջ։

**Օրինակ 5։** Կոմպտոնյան ցրում $90°$-ով․ $\\Delta\\lambda = 2{,}43 \\cdot 10^{-12}$ մ $= 0{,}00243$ նմ։ $\\lambda = 0{,}07$ նմ ռենտգենյան ճառագայթների համար սա $3{,}5\\%$ փոփոխություն է՝ հեշտ չափելի, տեսանելի լույսի համար ($500$ նմ) այն ալիքի երկարության $5 \\cdot 10^{-6}$-ն է՝ անհայտնաբերելի, այդ պատճառով երևույթը հայտնաբերվել է ռենտգենյան ճառագայթներով։

**Օրինակ 6։** $100$ Վ-ով արագացված էլեկտրոնի դը Բրոյլի ալիքի երկարությունը․ $E_k = 100$ էՎ $= 1{,}6 \\cdot 10^{-17}$ Ջ, $p = \\sqrt{2mE_k} = \\sqrt{2 \\cdot 9{,}1 \\cdot 10^{-31} \\cdot 1{,}6 \\cdot 10^{-17}} = 5{,}4 \\cdot 10^{-24}$ կգ·մ/վ, $\\lambda = \\dfrac{6{,}63 \\cdot 10^{-34}}{5{,}4 \\cdot 10^{-24}} = 1{,}2 \\cdot 10^{-10}$ մ $= 0{,}12$ նմ՝ ատոմի չափ․ բյուրեղը նման էլեկտրոնների համար դիֆրակցիոն ցանցի դեր է կատարում։

**Օրինակ 7։** Թենիսի գնդակի դը Բրոյլի ալիքի երկարությունը, $m = 60$ գ, $v = 30$ մ/վ․ $\\lambda = \\dfrac{6{,}63 \\cdot 10^{-34}}{1{,}8} = 3{,}7 \\cdot 10^{-34}$ մ՝ միջուկից $10^{19}$ անգամ փոքր։ Ոչ մի ճեղք չէր կարող ցույց տալ նրա դիֆրակցիան, մեծ մարմիններն իրենց պահում են դասականորեն։

**Օրինակ 8։** Շատ թույլ լույսով երկու ճեղքերի փորձում առանձին ֆոտոնները դետեկտորին հասնում են մեկ առ մեկ՝ որպես կետեր, սակայն հազարավոր կետերից հետո հայտնվում են ինտերֆերենցային շերտերը։ Յուրաքանչյուր ֆոտոն «ինտերֆերենցի է ենթարկվում ինքն իր հետ»․ ալիքը որոշում է, թե որտեղ կարող է ֆոտոնն ընկնել, ֆոտոնն ընկնում է մեկ կետում։ Սա քվանտային ֆիզիկայի կենտրոնական հանելուկն ու կենտրոնական փաստն է։

## Վարժություններ

1. Գտեք $\\lambda = 0{,}1$ նմ ռենտգենյան ֆոտոնի էներգիան, իմպուլսն ու զանգվածային համարժեքը։
2. Գտեք $10$ Վտ/սմ² լազերային փնջի ճնշումը սև մակերևույթի և հայելու վրա։
3. Ի՞նչ ուժ է արևի լույսը ($1400$ Վտ/մ²) գործադրում $1$ մ² սև վահանակի վրա։
4. $100$ Վտ լամպը ճառագայթում է համաչափ։ Գտեք լույսի ճնշումը $1$ մ հեռու հայելու վրա։
5. Կոմպտոնյան ցրում $180°$-ով․ գտեք $\\Delta\\lambda$-ն և $0{,}02$ նմ ֆոտոնի կորցրած էներգիայի մասը։
6. Գտեք $10^6$ մ/վ արագությամբ էլեկտրոնի և նույն արագությամբ պրոտոնի դը Բրոյլի ալիքի երկարությունը։
7. Ի՞նչ լարումով պետք է արագացվի էլեկտրոնը, որպեսզի ունենա $\\lambda = 0{,}05$ նմ։
8. Ինչո՞ւ կարելի է ինտերֆերենց դիտել էլեկտրոններով, բայց ոչ մեքենաներով։

### Պատասխաններ

1. $12{,}4$ կէՎ $= 2 \\cdot 10^{-15}$ Ջ, $6{,}6 \\cdot 10^{-24}$ կգ·մ/վ, $2{,}2 \\cdot 10^{-32}$ կգ։ 2. $I = 10^5$ Վտ/մ²․ $3{,}3 \\cdot 10^{-4}$ Պա և $6{,}7 \\cdot 10^{-4}$ Պա։ 3. $4{,}7 \\cdot 10^{-6}$ Ն։ 4. $I = \\dfrac{100}{4\\pi} \\approx 8$ Վտ/մ², $p = \\dfrac{2I}{c} \\approx 5 \\cdot 10^{-8}$ Պա։ 5. $\\Delta\\lambda = 0{,}00486$ նմ, $\\lambda' = 0{,}02486$ նմ, կորցրած էներգիայի մասը $= 1 - \\dfrac{0{,}02}{0{,}02486} \\approx 20\\%$։ 6. $7{,}3 \\cdot 10^{-10}$ մ, $4 \\cdot 10^{-13}$ մ։ 7. $p = \\dfrac{h}{\\lambda} = 1{,}33 \\cdot 10^{-23}$, $E_k = \\dfrac{p^2}{2m} = 9{,}7 \\cdot 10^{-17}$ Ջ $\\approx 600$ Վ։ 8. Մեքենայի դը Բրոյլի ալիքի երկարությունը մոտ $10^{-38}$ մ է՝ ցանկացած արգելքից շատ փոքր, էլեկտրոնինն ատոմի չափի է։`,
        ru: `## Фотон

Объяснение фотоэффекта Эйнштейном даёт свету частицу: **фотон**, квант электромагнитного поля. Его свойства:

> - энергия $E = h\\nu = \\dfrac{hc}{\\lambda}$;
> - он всегда движется в вакууме со скоростью $c$ и не имеет массы покоя; его нельзя остановить или замедлить, только поглотить или излучить;
> - импульс, из $E = pc$: $$p = \\dfrac{h\\nu}{c} = \\dfrac{h}{\\lambda};$$
> - «массовый эквивалент» $m = \\dfrac{E}{c^2} = \\dfrac{h\\nu}{c^2}$, описывающий его гравитационное взаимодействие и инертность, хотя это не масса покоя.

Фотоны рождаются всякий раз, когда атом, молекула или ядро теряет энергию или заряд ускоряется; поглощаются они целиком. Фотон видимого света имеет энергию $2$–$3$ эВ и импульс около $10^{-27}$ кг·м/с.

## Давление света

Если фотоны несут импульс, свет, падающий на поверхность, давит на неё. Пучок интенсивности $I$ (мощность на единицу площади) передаёт полностью поглощающей (чёрной) поверхности импульс $\\dfrac{I}{c}$ в секунду на единицу площади; зеркало, отбрасывающее фотоны назад, получает вдвое больше:

> $$p_{\\text{чёрн}} = \\dfrac{I}{c}, \\qquad p_{\\text{зерк}} = \\dfrac{2I}{c}, \\qquad p = \\dfrac{I}{c}(1 + R)$$ в общем случае, где $R$ — коэффициент отражения.

Максвелл предсказал это давление из волновой теории: электрическое поле двигает заряды в поверхности, а магнитное поле затем толкает их вдоль направления волны. **Лебедев** (1899) измерил его крошечными крылышками на крутильной нити в вакууме, подтвердив значение Максвелла — около $4 \\cdot 10^{-6}$ Па для солнечного света, десятимиллиардная доля атмосферного давления. Давление света формирует хвосты комет, направленные от Солнца, удерживает звёзды от сжатия и может двигать космические аппараты с **солнечным парусом**.

## Эффект Комптона

В 1923 г. Комптон рассеивал рентгеновские лучи на графите и обнаружил, что рассеянное излучение имеет **большую** длину волны, чем падающее, причём на величину, зависящую от угла. Волна должна рассеиваться без изменения частоты. Результат точно объясняется как столкновение фотона со свободным электроном: фотон отдаёт часть энергии и импульса электрону, так что его энергия уменьшается, а длина волны растёт,

$$\\Delta\\lambda = \\dfrac{h}{m_e c}(1 - \\cos\\theta), \\qquad \\dfrac{h}{m_e c} = 2{,}43 \\cdot 10^{-12} \\text{ м}.$$

Энергия и импульс сохраняются в каждом отдельном акте, как в бильярде. Эффект Комптона — самое прямое доказательство того, что фотоны — реальные частицы с импульсом.

## Корпускулярно-волновой дуализм

Интерференция и дифракция показывают, что свет — волна; фотоэффект и эффект Комптона — что это поток частиц. Верно и то и другое: свет — ни классическая волна, ни классическая частица, а квантовый объект со свойствами обеих. При распространении (интерференция) работает волновая картина; при излучении и поглощении (обмен энергией) — корпускулярная. Их связывают $E = h\\nu$ и $p = \\dfrac{h}{\\lambda}$: волновые величины справа, корпускулярные слева. Интенсивность волны в точке даёт вероятность обнаружить там фотон; картина от двух щелей складывается фотон за фотоном.

**Де Бройль (1924)** предположил, что тот же дуализм верен для вещества: частица с импульсом $p$ имеет волну длиной

$$\\lambda = \\dfrac{h}{p} = \\dfrac{h}{mv}.$$

Дэвиссон и Джермер (1927) наблюдали дифракцию электронов на кристалле в точности как предсказано. Для обычных тел $\\lambda$ нелепо мала, но для электронов она сравнима с межатомными расстояниями. **Электронный микроскоп** использует электронные волны в тысячи раз короче световых, чтобы видеть вирусы и атомы; волновая природа электронов лежит в основе всей атомной физики и химии.

**Пример 1.** Фотон с $\\lambda = 600$ нм: $E = \\dfrac{1240}{600} = 2{,}07$ эВ $= 3{,}3 \\cdot 10^{-19}$ Дж, $p = \\dfrac{6{,}63 \\cdot 10^{-34}}{6 \\cdot 10^{-7}} = 1{,}1 \\cdot 10^{-27}$ кг·м/с, массовый эквивалент $\\dfrac{E}{c^2} = 3{,}7 \\cdot 10^{-36}$ кг — в четыреста тысяч раз легче электрона.

**Пример 2.** Солнечный свет у Земли имеет $I = 1400$ Вт/м². Давление на чёрную поверхность: $\\dfrac{1400}{3 \\cdot 10^8} = 4{,}7 \\cdot 10^{-6}$ Па; на зеркало $9{,}3 \\cdot 10^{-6}$ Па. Солнечный парус площадью $10^4$ м² (квадрат $100$ м) из зеркальной плёнки испытывает $0{,}093$ Н; при массе $100$ кг он ускоряется с $10^{-3}$ м/с², достигая $30$ км/с за год.

**Пример 3.** Лазерный пучок $1$ кВт отражается зеркалом. Сила на зеркало $\\dfrac{2P}{c} = \\dfrac{2000}{3 \\cdot 10^8} \\approx 7 \\cdot 10^{-6}$ Н — вес пылинки. Давление света ничтожно для бытовых мощностей, но достаточно, чтобы удерживать и перемещать микроскопические частицы («оптический пинцет»).

**Пример 4.** Сколько фотонов с $\\lambda = 500$ нм должно падать на зеркало в секунду, чтобы создать силу $1$ Н? Каждый даёт импульс $\\dfrac{2h}{\\lambda} = 2{,}65 \\cdot 10^{-27}$ кг·м/с, так что $N = \\dfrac{1}{2{,}65 \\cdot 10^{-27}} \\approx 3{,}8 \\cdot 10^{26}$ в секунду — пучок мощностью $150$ МВт.

**Пример 5.** Комптоновское рассеяние на $90°$: $\\Delta\\lambda = 2{,}43 \\cdot 10^{-12}$ м $= 0{,}00243$ нм. Для рентгеновских лучей с $\\lambda = 0{,}07$ нм это изменение на $3{,}5\\%$, легко измеримое; для видимого света ($500$ нм) это $5 \\cdot 10^{-6}$ длины волны, необнаружимо, поэтому эффект открыли с рентгеновскими лучами.

**Пример 6.** Длина волны де Бройля электрона, ускоренного напряжением $100$ В: $E_k = 100$ эВ $= 1{,}6 \\cdot 10^{-17}$ Дж, $p = \\sqrt{2mE_k} = \\sqrt{2 \\cdot 9{,}1 \\cdot 10^{-31} \\cdot 1{,}6 \\cdot 10^{-17}} = 5{,}4 \\cdot 10^{-24}$ кг·м/с, $\\lambda = \\dfrac{6{,}63 \\cdot 10^{-34}}{5{,}4 \\cdot 10^{-24}} = 1{,}2 \\cdot 10^{-10}$ м $= 0{,}12$ нм, размер атома: кристалл служит дифракционной решёткой для таких электронов.

**Пример 7.** Длина волны де Бройля теннисного мяча, $m = 60$ г, $v = 30$ м/с: $\\lambda = \\dfrac{6{,}63 \\cdot 10^{-34}}{1{,}8} = 3{,}7 \\cdot 10^{-34}$ м, в $10^{19}$ раз меньше ядра. Никакая щель не покажет его дифракции; большие тела ведут себя классически.

**Пример 8.** В опыте с двумя щелями при очень слабом свете отдельные фотоны приходят по одному как точки на детекторе, но после тысяч точек появляются интерференционные полосы. Каждый фотон «интерферирует сам с собой»: волна решает, куда фотон может попасть, фотон попадает в одну точку. Это центральная загадка и центральный факт квантовой физики.

## Упражнения

1. Найдите энергию, импульс и массовый эквивалент рентгеновского фотона с $\\lambda = 0{,}1$ нм.
2. Найдите давление лазерного пучка $10$ Вт/см² на чёрную поверхность и на зеркало.
3. Какую силу солнечный свет ($1400$ Вт/м²) оказывает на чёрную панель $1$ м²?
4. Лампа $100$ Вт излучает равномерно. Найдите давление света на зеркало в $1$ м от неё.
5. Комптоновское рассеяние на $180°$: найдите $\\Delta\\lambda$ и долю энергии, потерянную фотоном $0{,}02$ нм.
6. Найдите длину волны де Бройля электрона при $10^6$ м/с и протона с той же скоростью.
7. Каким напряжением нужно ускорить электрон, чтобы $\\lambda = 0{,}05$ нм?
8. Почему интерференцию можно наблюдать с электронами, но не с автомобилями?

### Ответы

1. $12{,}4$ кэВ $= 2 \\cdot 10^{-15}$ Дж; $6{,}6 \\cdot 10^{-24}$ кг·м/с; $2{,}2 \\cdot 10^{-32}$ кг. 2. $I = 10^5$ Вт/м²: $3{,}3 \\cdot 10^{-4}$ Па и $6{,}7 \\cdot 10^{-4}$ Па. 3. $4{,}7 \\cdot 10^{-6}$ Н. 4. $I = \\dfrac{100}{4\\pi} \\approx 8$ Вт/м², $p = \\dfrac{2I}{c} \\approx 5 \\cdot 10^{-8}$ Па. 5. $\\Delta\\lambda = 0{,}00486$ нм; $\\lambda' = 0{,}02486$ нм; потерянная доля энергии $= 1 - \\dfrac{0{,}02}{0{,}02486} \\approx 20\\%$. 6. $7{,}3 \\cdot 10^{-10}$ м; $4 \\cdot 10^{-13}$ м. 7. $p = \\dfrac{h}{\\lambda} = 1{,}33 \\cdot 10^{-23}$, $E_k = \\dfrac{p^2}{2m} = 9{,}7 \\cdot 10^{-17}$ Дж $\\approx 600$ В. 8. Длина волны де Бройля автомобиля около $10^{-38}$ м, гораздо меньше любого препятствия; у электрона она атомного размера.`,
      },
      [
        q(t("The momentum of a photon is…", "Ֆոտոնի իմպուլսը…", "Импульс фотона равен…"), [t("h/λ", "h/λ է", "h/λ"), t("hλ", "hλ է", "hλ"), t("mc", "mc է", "mc")], 0),
        q(t("The pressure of light on a mirror compared with a black surface is…", "Լույսի ճնշումը հայելու վրա սև մակերևույթի համեմատ…", "Давление света на зеркало по сравнению с чёрной поверхностью…"), [t("the same", "նույնն է", "такое же"), t("twice as large", "երկու անգամ մեծ է", "вдвое больше"), t("half as large", "երկու անգամ փոքր է", "вдвое меньше")], 1),
        q(t("Light pressure was first measured by…", "Լույսի ճնշումն առաջինը չափել է…", "Давление света впервые измерил…"), [t("Lebedev", "Լեբեդևը", "Лебедев"), t("Hertz", "Հերցը", "Герц"), t("Newton", "Նյուտոնը", "Ньютон")], 0),
        q(t("In the Compton effect the scattered photon has…", "Կոմպտոնի երևույթում ցրված ֆոտոնն ունի…", "В эффекте Комптона рассеянный фотон имеет…"), [t("a shorter wavelength", "ավելի կարճ ալիքի երկարություն", "меньшую длину волны"), t("a longer wavelength", "ավելի երկար ալիքի երկարություն", "большую длину волны"), t("the same wavelength", "նույն ալիքի երկարությունը", "ту же длину волны")], 1),
        q(t("The de Broglie wavelength of a particle is…", "Մասնիկի դը Բրոյլի ալիքի երկարությունը…", "Длина волны де Бройля частицы равна…"), [t("h/(mv)", "h/(mv) է", "h/(mv)"), t("mv/h", "mv/h է", "mv/h"), t("hmv", "hmv է", "hmv")], 0),
        q(t("The wave nature of electrons was confirmed by…", "Էլեկտրոնների ալիքային բնույթը հաստատվել է…", "Волновую природу электронов подтвердила…"), [t("their diffraction on crystals", "բյուրեղներից նրանց դիֆրակցիայով", "их дифракция на кристаллах"), t("the photoelectric effect", "ֆոտոէֆեկտով", "фотоэффект"), t("light pressure", "լույսի ճնշումով", "давление света")], 0),
      ],
    ),
    lesson(
      "bohr-atom-lasers",
      ["Bohr's postulates; spectra; lasers", "Բորի պոստուլատներ, սպեկտրներ, լազերներ", "Постулаты Бора; спектры; лазеры"],
      {
        en: ["State Bohr's postulates and explain why Rutherford's planetary model needed them", "Compute the energy levels of hydrogen Eₙ = −13.6/n² eV and the wavelengths of spectral lines", "Explain line spectra, spectral analysis and the working principle of a laser"],
        hy: ["Ձևակերպել Բորի պոստուլատները և բացատրել, թե ինչու Ռեզերֆորդի մոլորակային մոդելին դրանք անհրաժեշտ էին", "Հաշվել ջրածնի էներգիական մակարդակները Eₙ = −13,6/n² էՎ և սպեկտրային գծերի ալիքի երկարությունները", "Բացատրել գծային սպեկտրները, սպեկտրային վերլուծությունը և լազերի աշխատանքի սկզբունքը"],
        ru: ["Формулировать постулаты Бора и объяснять, почему планетарной модели Резерфорда они были необходимы", "Вычислять уровни энергии водорода Eₙ = −13,6/n² эВ и длины волн спектральных линий", "Объяснять линейчатые спектры, спектральный анализ и принцип работы лазера"],
      },
      {
        en: `## Rutherford's model and its trouble

In 1911 Rutherford's scattering experiment with alpha particles showed that the atom has a tiny, heavy, positive **nucleus** (about $10^{-15}$ m across) around which electrons move, like planets around the Sun. The model explained scattering but contradicted classical electrodynamics: an electron on a circular orbit accelerates, so it should radiate continuously, lose energy and fall into the nucleus within about $10^{-8}$ s. Atoms, however, are stable, and their light forms **line spectra**, not a continuous band.

## Bohr's postulates (1913)

> 1. **Stationary states.** An atom can exist only in certain states with definite energies $E_1, E_2, E_3, \\dots$; in such a state it does not radiate.
> 2. **Frequency rule.** On passing from a state with energy $E_k$ to one with energy $E_n < E_k$ the atom emits one photon with $$h\\nu = E_k - E_n.$$ Absorbing such a photon raises the atom from $E_n$ to $E_k$.
> 3. **Quantisation of orbits.** The allowed orbits are those on which the angular momentum of the electron is a multiple of $\\hbar = h/2\\pi$: $m v r = n\\hbar$, $n = 1, 2, 3, \\dots$

## Energy levels of hydrogen

Combining the third postulate with Coulomb's law gives orbit radii $r_n = n^2 r_1$ with $r_1 = 0{.}53 \\cdot 10^{-10}$ m (the Bohr radius) and energies

$$E_n = -\\dfrac{13{.}6}{n^2}\\ \\text{eV}, \\qquad n = 1, 2, 3, \\dots$$

The energy is negative because the electron is bound; $E = 0$ corresponds to a free electron at rest. The level $n = 1$ is the **ground state**, the others are **excited states**. The **ionisation energy** of hydrogen is $13{.}6$ eV. The levels get denser as $n$ grows and merge into the continuum at $E = 0$.

## Spectral series

A transition $k \\to n$ gives the wavelength

$$\\dfrac{1}{\\lambda} = R\\left(\\dfrac{1}{n^2} - \\dfrac{1}{k^2}\\right), \\qquad R = 1{.}097 \\cdot 10^7\\ \\text{m}^{-1}.$$

| Series | Final level $n$ | Region |
|---|---|---|
| Lyman | 1 | ultraviolet |
| Balmer | 2 | visible (red 656 nm, blue-green 486 nm, violet 434 nm, 410 nm) |
| Paschen | 3 | infrared |

Bohr's theory reproduces the Balmer formula, which had been found empirically in 1885, and gives the correct value of the Rydberg constant. It fails for atoms with more than one electron; the full description came with quantum mechanics (1925–1927), where Bohr's orbits are replaced by electron clouds, but the two first postulates remain exactly true.

## Kinds of spectra

| Spectrum | Source | Appearance |
|---|---|---|
| Continuous | hot solids, liquids, dense gases (filament, Sun's photosphere) | all colours without gaps |
| Line emission | rarefied gases and vapours of atoms (discharge tubes) | bright separate lines |
| Band | molecules | groups of close lines |
| Line absorption | cool gas in front of a continuous source | dark lines on a bright background (Fraunhofer lines in the solar spectrum) |

Every chemical element has its own set of lines, so a spectrum is a "fingerprint". **Spectral analysis** identifies elements in a sample from its lines; it detects as little as $10^{-10}$ g, found helium in the Sun before it was found on Earth and tells us the composition, temperature and velocity (through the Doppler shift) of stars.

## Lasers

An excited atom normally emits a photon **spontaneously**, in a random direction and phase. Einstein (1916) predicted **stimulated emission**: a passing photon of energy exactly $E_k - E_n$ makes the excited atom emit a second photon identical to it, with the same frequency, direction, phase and polarisation.

A **laser** (Light Amplification by Stimulated Emission of Radiation) needs:

> - an **active medium** in which **population inversion** is created by pumping: more atoms in the upper level than in the lower one, so that stimulated emission outweighs absorption; this requires a long-lived **metastable** level;
> - a **resonator**, two parallel mirrors (one partly transparent), which returns the light through the medium many times so that it is amplified and only the beam along the axis survives.

The first laser (Maiman, 1960) used a ruby crystal pumped by a flash lamp; the helium–neon gas laser emits red light at $632{.}8$ nm; semiconductor lasers sit in every DVD drive, laser pointer and optical-fibre link. Laser light is **monochromatic**, **coherent**, **highly directional** and can be very **intense** (pulses of $10^{12}$ W and more). Uses: cutting and welding, eye and other surgery, optical communication, distance measurement, holography, CDs and barcode readers, controlled fusion experiments.

## Worked examples

**Example 1.** Energy of the hydrogen levels $n = 2$ and $n = 3$.

$E_2 = -13{.}6/4 = -3{.}4$ eV, $E_3 = -13{.}6/9 \\approx -1{.}51$ eV.

**Example 2.** Wavelength of the photon emitted in the transition $3 \\to 2$.

$h\\nu = E_3 - E_2 = -1{.}51 - (-3{.}4) = 1{.}89$ eV $= 1{.}89 \\cdot 1{.}6 \\cdot 10^{-19} = 3{.}02 \\cdot 10^{-19}$ J. $\\lambda = \\dfrac{hc}{h\\nu} = \\dfrac{6{.}63 \\cdot 10^{-34} \\cdot 3 \\cdot 10^8}{3{.}02 \\cdot 10^{-19}} \\approx 6{.}6 \\cdot 10^{-7}$ m $= 660$ nm: the red line of the Balmer series (the exact value is 656 nm).

**Example 3.** Check with the Rydberg formula.

$\\dfrac{1}{\\lambda} = 1{.}097 \\cdot 10^7 \\left(\\dfrac{1}{4} - \\dfrac{1}{9}\\right) = 1{.}097 \\cdot 10^7 \\cdot 0{.}1389 = 1{.}524 \\cdot 10^6$ m⁻¹, so $\\lambda = 656$ nm.

**Example 4.** Minimum energy that a photon must have to ionise a hydrogen atom in the ground state, and its wavelength.

$E = 13{.}6$ eV $= 2{.}18 \\cdot 10^{-18}$ J; $\\lambda = \\dfrac{hc}{E} = \\dfrac{1{.}99 \\cdot 10^{-25}}{2{.}18 \\cdot 10^{-18}} \\approx 9{.}1 \\cdot 10^{-8}$ m $= 91$ nm (far ultraviolet).

**Example 5.** A hydrogen atom in the state $n = 3$ returns to the ground state. How many different photons can it emit?

Routes: $3 \\to 1$ directly, or $3 \\to 2 \\to 1$. Possible lines: $3 \\to 1$, $3 \\to 2$, $2 \\to 1$, that is **3** different photons. In general from level $n$ there are $n(n-1)/2$ lines.

**Example 6.** Which photons from a beam containing $10{.}2$ eV, $12{.}09$ eV and $11$ eV photons will hydrogen atoms in the ground state absorb?

The allowed absorption energies from $n = 1$ are $E_k - E_1$: $10{.}2$ eV ($k = 2$), $12{.}09$ eV ($k = 3$), $12{.}75$ eV ($k = 4$) and so on. The $10{.}2$ eV and $12{.}09$ eV photons are absorbed; the $11$ eV photon matches no transition and passes through.

**Example 7.** A helium–neon laser emits $1$ mW at $632{.}8$ nm. How many photons per second?

Photon energy $E = \\dfrac{hc}{\\lambda} = \\dfrac{1{.}99 \\cdot 10^{-25}}{6{.}328 \\cdot 10^{-7}} = 3{.}14 \\cdot 10^{-19}$ J. $N = \\dfrac{P}{E} = \\dfrac{10^{-3}}{3{.}14 \\cdot 10^{-19}} \\approx 3{.}2 \\cdot 10^{15}$ photons per second.

**Example 8.** A ruby laser pulse carries $1$ J in $10^{-9}$ s and is focused onto a spot of area $10^{-10}$ m². Power and intensity?

$P = \\dfrac{1}{10^{-9}} = 10^9$ W (one gigawatt during the pulse); $I = \\dfrac{P}{S} = \\dfrac{10^9}{10^{-10}} = 10^{19}$ W/m², enough to vaporise any material.

## Exercises

1. Why could the Rutherford atom not be stable according to classical physics? What do the first two postulates of Bohr say?
2. Compute the energies of the hydrogen levels $n = 4$ and $n = 5$.
3. Find the energy and wavelength of the photon emitted in the transition $4 \\to 2$ of hydrogen (blue-green Balmer line).
4. What is the longest wavelength in the Lyman series (transition $2 \\to 1$)? In which region of the spectrum is it?
5. A hydrogen atom in the ground state absorbs a photon of $12{.}75$ eV. To which level does it rise? How many different lines can it emit on returning to the ground state?
6. The Sun's spectrum is continuous with dark lines. Explain the origin of both parts.
7. What is population inversion and why is it impossible to make a laser on a system with only two energy levels (hint: at best half of the atoms become excited)?
8. A laser pointer of $5$ mW emits at $532$ nm. How many photons does it emit in one minute?

### Answers

1. The orbiting electron accelerates and, by Maxwell's theory, must radiate and fall onto the nucleus in about $10^{-8}$ s. Bohr: atoms exist in stationary states without radiating; radiation happens only in jumps between states, $h\\nu = E_k - E_n$.
2. $E_4 = -13{.}6/16 = -0{.}85$ eV; $E_5 = -13{.}6/25 = -0{.}54$ eV.
3. $E = -0{.}85 - (-3{.}4) = 2{.}55$ eV $= 4{.}08 \\cdot 10^{-19}$ J; $\\lambda = 1{.}99 \\cdot 10^{-25}/4{.}08 \\cdot 10^{-19} \\approx 4{.}87 \\cdot 10^{-7}$ m $= 487$ nm.
4. $E = -3{.}4 - (-13{.}6) = 10{.}2$ eV; $\\lambda = 1{.}99 \\cdot 10^{-25}/(1{.}63 \\cdot 10^{-18}) \\approx 1{.}22 \\cdot 10^{-7}$ m $= 122$ nm, ultraviolet.
5. $E_k = -13{.}6 + 12{.}75 = -0{.}85$ eV, so $k = 4$. Number of lines $4 \\cdot 3/2 = 6$.
6. The hot dense photosphere emits a continuous spectrum; the cooler gas of the solar atmosphere above it absorbs the photons whose energies match its atoms' transitions, producing dark Fraunhofer lines.
7. More atoms in the upper level than in the lower one. In a two-level system the pumping radiation is absorbed and causes stimulated emission with equal probability, so the populations can only be equalised, never inverted; a third (metastable) level is needed.
8. Photon energy $E = 1{.}99 \\cdot 10^{-25}/5{.}32 \\cdot 10^{-7} = 3{.}74 \\cdot 10^{-19}$ J; per second $N = 5 \\cdot 10^{-3}/3{.}74 \\cdot 10^{-19} = 1{.}34 \\cdot 10^{16}$; per minute $\\approx 8 \\cdot 10^{17}$ photons.`,
        hy: `## Ռեզերֆորդի մոդելը և նրա դժվարությունը

1911 թ․ Ռեզերֆորդի փորձն ալֆա մասնիկների ցրման վերաբերյալ ցույց տվեց, որ ատոմն ունի փոքրիկ, ծանր, դրական **միջուկ** (մոտ $10^{-15}$ մ չափի), որի շուրջ շարժվում են էլեկտրոնները, ինչպես մոլորակներն Արեգակի շուրջ։ Մոդելը բացատրում էր ցրումը, բայց հակասում էր դասական էլեկտրադինամիկային․ շրջանային ուղեծրով շարժվող էլեկտրոնն արագացում ունի, ուստի պետք է անընդհատ ճառագայթեր, կորցներ էներգիան և մոտ $10^{-8}$ վ-ում ընկներ միջուկի վրա։ Սակայն ատոմները կայուն են, և նրանց լույսը կազմում է **գծային սպեկտրներ**, այլ ոչ անընդհատ շերտ։

## Բորի պոստուլատները (1913)

> 1. **Ստացիոնար վիճակներ։** Ատոմը կարող է գտնվել միայն որոշակի էներգիաներով $E_1, E_2, E_3, \\dots$ վիճակներում․ այդպիսի վիճակում այն չի ճառագայթում։
> 2. **Հաճախությունների կանոն։** $E_k$ էներգիայով վիճակից $E_n < E_k$ էներգիայով վիճակին անցնելիս ատոմն արձակում է մեկ ֆոտոն․ $$h\\nu = E_k - E_n$$ Այդպիսի ֆոտոն կլանելով՝ ատոմը $E_n$-ից բարձրանում է $E_k$։
> 3. **Ուղեծրերի քվանտացում։** Թույլատրված են այն ուղեծրերը, որոնցում էլեկտրոնի իմպուլսի մոմենտը $\\hbar = h/2\\pi$-ի բազմապատիկ է․ $m v r = n\\hbar$, $n = 1, 2, 3, \\dots$

## Ջրածնի էներգիական մակարդակները

Երրորդ պոստուլատը Կուլոնի օրենքի հետ միացնելով՝ ստանում ենք ուղեծրերի շառավիղները $r_n = n^2 r_1$, որտեղ $r_1 = 0{,}53 \\cdot 10^{-10}$ մ (Բորի շառավիղ), և էներգիաները

$$E_n = -\\dfrac{13{,}6}{n^2}\\ \\text{էՎ}, \\qquad n = 1, 2, 3, \\dots$$

Էներգիան բացասական է, քանի որ էլեկտրոնը կապված է․ $E = 0$-ը համապատասխանում է հանգստի վիճակում գտնվող ազատ էլեկտրոնի։ $n = 1$ մակարդակը **հիմնական վիճակն** է, մնացածները՝ **գրգռված վիճակներ**։ Ջրածնի **իոնացման էներգիան** $13{,}6$ էՎ է։ $n$-ի աճի հետ մակարդակները խտանում են և $E = 0$-ում միաձուլվում անընդհատ սպեկտրին։

## Սպեկտրային սերիաներ

$k \\to n$ անցումը տալիս է ալիքի երկարություն

$$\\dfrac{1}{\\lambda} = R\\left(\\dfrac{1}{n^2} - \\dfrac{1}{k^2}\\right), \\qquad R = 1{,}097 \\cdot 10^7\\ \\text{մ}^{-1}$$

| Սերիա | Վերջնական մակարդակ $n$ | Տիրույթ |
|---|---|---|
| Լայմանի | 1 | ուլտրամանուշակագույն |
| Բալմերի | 2 | տեսանելի (կարմիր 656 նմ, կանաչավուն կապույտ 486 նմ, մանուշակագույն 434 նմ, 410 նմ) |
| Պաշենի | 3 | ինֆրակարմիր |

Բորի տեսությունը վերարտադրում է Բալմերի բանաձևը, որը 1885 թ․ գտնվել էր էմպիրիկ ճանապարհով, և տալիս է Ռիդբերգի հաստատունի ճիշտ արժեքը։ Այն չի գործում մեկից ավելի էլեկտրոն ունեցող ատոմների համար․ լրիվ նկարագրությունը տվեց քվանտային մեխանիկան (1925–1927), որտեղ Բորի ուղեծրերը փոխարինվում են էլեկտրոնային ամպերով, բայց առաջին երկու պոստուլատները մնում են ճշգրիտ։

## Սպեկտրների տեսակները

| Սպեկտր | Աղբյուր | Տեսք |
|---|---|---|
| Անընդհատ | տաք պինդ մարմիններ, հեղուկներ, խիտ գազեր (շիկացման թել, Արեգակի ֆոտոսֆերա) | բոլոր գույները՝ առանց բացերի |
| Գծային արձակման | ատոմների նոսր գազեր և գոլորշիներ (պարպման խողովակներ) | պայծառ առանձին գծեր |
| Շերտավոր | մոլեկուլներ | մոտիկ գծերի խմբեր |
| Գծային կլանման | սառը գազ անընդհատ աղբյուրի առջև | մութ գծեր պայծառ ֆոնի վրա (Ֆրաունհոֆերի գծերն Արեգակի սպեկտրում) |

Յուրաքանչյուր քիմիական տարր ունի գծերի իր հավաքածուն, ուստի սպեկտրը «մատնահետք» է։ **Սպեկտրային վերլուծությունը** նմուշի գծերով որոշում է նրա տարրերը․ այն հայտնաբերում է ընդամենը $10^{-10}$ գ նյութ, հելիումն Արեգակի վրա գտավ ավելի շուտ, քան Երկրի վրա, և մեզ ասում է աստղերի բաղադրությունը, ջերմաստիճանը և արագությունը (Դոպլերի շեղման միջոցով)։

## Լազերներ

Գրգռված ատոմը սովորաբար ֆոտոն արձակում է **ինքնաբերաբար**՝ պատահական ուղղությամբ և փուլով։ Էյնշտեյնը (1916) կանխատեսեց **հարկադրական արձակումը**․ ճիշտ $E_k - E_n$ էներգիայով անցնող ֆոտոնը գրգռված ատոմին ստիպում է արձակել երկրորդ, իրեն նույնական ֆոտոն՝ նույն հաճախությամբ, ուղղությամբ, փուլով և բևեռացումով։

**Լազերին** (անգլերեն՝ Light Amplification by Stimulated Emission of Radiation) անհրաժեշտ են․

> - **ակտիվ միջավայր**, որում մղման միջոցով ստեղծվում է **բնակեցվածության ինվերսիա**․ վերին մակարդակում ավելի շատ ատոմ, քան ներքևում, որպեսզի հարկադրական արձակումը գերազանցի կլանմանը․ դրա համար պետք է երկարակյաց **մետակայուն** մակարդակ․
> - **ռեզոնատոր**՝ երկու զուգահեռ հայելի (մեկը մասամբ թափանցիկ), որը լույսը բազմիցս վերադարձնում է միջավայրով, որպեսզի այն ուժեղանա և պահպանվի միայն առանցքի երկայնքով փունջը։

Առաջին լազերը (Մայման, 1960) օգտագործում էր բռնկման լամպով մղվող սուտակի բյուրեղ․ հելիում-նեոնային գազային լազերն արձակում է կարմիր լույս $632{,}8$ նմ-ի վրա․ կիսահաղորդչային լազերները կան յուրաքանչյուր DVD սարքում, լազերային ցուցիչում և օպտիկամանրաթելային կապուղում։ Լազերային լույսը **մոնոքրոմատիկ** է, **կոհերենտ**, **բարձր ուղղվածությամբ** և կարող է լինել շատ **ինտենսիվ** ($10^{12}$ Վտ և ավելի իմպուլսներ)։ Կիրառություններ․ կտրում և եռակցում, աչքի և այլ վիրահատություններ, օպտիկական կապ, հեռավորության չափում, հոլոգրաֆիա, CD-ներ և շտրիխ կոդերի ընթերցիչներ, կառավարվող միաձուլման փորձեր։

## Լուծված օրինակներ

**Օրինակ 1։** Ջրածնի $n = 2$ և $n = 3$ մակարդակների էներգիան։

$E_2 = -13{,}6/4 = -3{,}4$ էՎ, $E_3 = -13{,}6/9 \\approx -1{,}51$ էՎ։

**Օրինակ 2։** $3 \\to 2$ անցման ժամանակ արձակված ֆոտոնի ալիքի երկարությունը։

$h\\nu = E_3 - E_2 = -1{,}51 - (-3{,}4) = 1{,}89$ էՎ $= 1{,}89 \\cdot 1{,}6 \\cdot 10^{-19} = 3{,}02 \\cdot 10^{-19}$ Ջ։ $\\lambda = \\dfrac{hc}{h\\nu} = \\dfrac{6{,}63 \\cdot 10^{-34} \\cdot 3 \\cdot 10^8}{3{,}02 \\cdot 10^{-19}} \\approx 6{,}6 \\cdot 10^{-7}$ մ $= 660$ նմ․ Բալմերի սերիայի կարմիր գիծը (ճշգրիտ արժեքը 656 նմ է)։

**Օրինակ 3։** Ստուգում Ռիդբերգի բանաձևով։

$\\dfrac{1}{\\lambda} = 1{,}097 \\cdot 10^7 \\left(\\dfrac{1}{4} - \\dfrac{1}{9}\\right) = 1{,}097 \\cdot 10^7 \\cdot 0{,}1389 = 1{,}524 \\cdot 10^6$ մ⁻¹, ուստի $\\lambda = 656$ նմ։

**Օրինակ 4։** Նվազագույն էներգիան, որը պետք է ունենա ֆոտոնը հիմնական վիճակում գտնվող ջրածնի ատոմն իոնացնելու համար, և նրա ալիքի երկարությունը։

$E = 13{,}6$ էՎ $= 2{,}18 \\cdot 10^{-18}$ Ջ․ $\\lambda = \\dfrac{hc}{E} = \\dfrac{1{,}99 \\cdot 10^{-25}}{2{,}18 \\cdot 10^{-18}} \\approx 9{,}1 \\cdot 10^{-8}$ մ $= 91$ նմ (հեռավոր ուլտրամանուշակագույն)։

**Օրինակ 5։** $n = 3$ վիճակում գտնվող ջրածնի ատոմը վերադառնում է հիմնական վիճակին։ Քանի՞ տարբեր ֆոտոն կարող է այն արձակել։

Ուղիներ․ $3 \\to 1$ անմիջապես կամ $3 \\to 2 \\to 1$։ Հնարավոր գծեր․ $3 \\to 1$, $3 \\to 2$, $2 \\to 1$, այսինքն՝ **3** տարբեր ֆոտոն։ Ընդհանուր դեպքում $n$ մակարդակից կա $n(n-1)/2$ գիծ։

**Օրինակ 6։** $10{,}2$ էՎ, $12{,}09$ էՎ և $11$ էՎ ֆոտոններ պարունակող փնջից որո՞նք կկլանեն հիմնական վիճակում գտնվող ջրածնի ատոմները։

$n = 1$-ից թույլատրված կլանման էներգիաները $E_k - E_1$ են․ $10{,}2$ էՎ ($k = 2$), $12{,}09$ էՎ ($k = 3$), $12{,}75$ էՎ ($k = 4$) և այլն։ $10{,}2$ էՎ և $12{,}09$ էՎ ֆոտոնները կլանվում են․ $11$ էՎ ֆոտոնը ոչ մի անցման չի համապատասխանում և անցնում է։

**Օրինակ 7։** Հելիում-նեոնային լազերն արձակում է $1$ մՎտ $632{,}8$ նմ-ի վրա։ Քանի՞ ֆոտոն վայրկյանում։

Ֆոտոնի էներգիան $E = \\dfrac{hc}{\\lambda} = \\dfrac{1{,}99 \\cdot 10^{-25}}{6{,}328 \\cdot 10^{-7}} = 3{,}14 \\cdot 10^{-19}$ Ջ։ $N = \\dfrac{P}{E} = \\dfrac{10^{-3}}{3{,}14 \\cdot 10^{-19}} \\approx 3{,}2 \\cdot 10^{15}$ ֆոտոն վայրկյանում։

**Օրինակ 8։** Սուտակի լազերի իմպուլսը կրում է $1$ Ջ $10^{-9}$ վ-ում և կիզակետվում է $10^{-10}$ մ² մակերեսի բծի վրա։ Հզորությո՞ւնը և ինտենսիվությո՞ւնը։

$P = \\dfrac{1}{10^{-9}} = 10^9$ Վտ (մեկ գիգավատ իմպուլսի ընթացքում)․ $I = \\dfrac{P}{S} = \\dfrac{10^9}{10^{-10}} = 10^{19}$ Վտ/մ², ինչը բավական է ցանկացած նյութ գոլորշիացնելու համար։

## Վարժություններ

1. Ինչո՞ւ Ռեզերֆորդի ատոմը դասական ֆիզիկայի համաձայն չէր կարող կայուն լինել։ Ի՞նչ են ասում Բորի առաջին երկու պոստուլատները։
2. Հաշվեք ջրածնի $n = 4$ և $n = 5$ մակարդակների էներգիաները։
3. Գտեք ջրածնի $4 \\to 2$ անցման ժամանակ արձակված ֆոտոնի էներգիան և ալիքի երկարությունը (Բալմերի կանաչավուն կապույտ գիծը)։
4. Ո՞րն է Լայմանի սերիայի ամենաերկար ալիքը ($2 \\to 1$ անցում)։ Սպեկտրի ո՞ր տիրույթում է այն։
5. Հիմնական վիճակում գտնվող ջրածնի ատոմը կլանում է $12{,}75$ էՎ ֆոտոն։ Ո՞ր մակարդակին է այն բարձրանում։ Հիմնական վիճակին վերադառնալիս քանի՞ տարբեր գիծ կարող է արձակել։
6. Արեգակի սպեկտրն անընդհատ է՝ մութ գծերով։ Բացատրեք երկու մասերի ծագումը։
7. Ի՞նչ է բնակեցվածության ինվերսիան, և ինչո՞ւ անհնար է լազեր ստեղծել միայն երկու էներգիական մակարդակ ունեցող համակարգի վրա (հուշում․ լավագույն դեպքում ատոմների կեսը գրգռվում է)։
8. $5$ մՎտ լազերային ցուցիչն արձակում է $532$ նմ-ի վրա։ Քանի՞ ֆոտոն է այն արձակում մեկ րոպեում։

### Պատասխաններ

1. Ուղեծրով շարժվող էլեկտրոնն արագանում է և Մաքսվելի տեսության համաձայն պետք է ճառագայթի ու մոտ $10^{-8}$ վ-ում ընկնի միջուկի վրա։ Բոր․ ատոմները գտնվում են ստացիոնար վիճակներում՝ առանց ճառագայթելու․ ճառագայթումը տեղի է ունենում միայն վիճակների միջև թռիչքներով՝ $h\\nu = E_k - E_n$։
2. $E_4 = -13{,}6/16 = -0{,}85$ էՎ․ $E_5 = -13{,}6/25 = -0{,}54$ էՎ։
3. $E = -0{,}85 - (-3{,}4) = 2{,}55$ էՎ $= 4{,}08 \\cdot 10^{-19}$ Ջ․ $\\lambda = 1{,}99 \\cdot 10^{-25}/4{,}08 \\cdot 10^{-19} \\approx 4{,}87 \\cdot 10^{-7}$ մ $= 487$ նմ։
4. $E = -3{,}4 - (-13{,}6) = 10{,}2$ էՎ․ $\\lambda = 1{,}99 \\cdot 10^{-25}/(1{,}63 \\cdot 10^{-18}) \\approx 1{,}22 \\cdot 10^{-7}$ մ $= 122$ նմ, ուլտրամանուշակագույն։
5. $E_k = -13{,}6 + 12{,}75 = -0{,}85$ էՎ, ուստի $k = 4$։ Գծերի թիվը $4 \\cdot 3/2 = 6$։
6. Տաք խիտ ֆոտոսֆերան արձակում է անընդհատ սպեկտր․ նրա վերևում գտնվող արեգակնային մթնոլորտի ավելի սառը գազը կլանում է այն ֆոտոնները, որոնց էներգիաները համապատասխանում են իր ատոմների անցումներին՝ առաջացնելով Ֆրաունհոֆերի մութ գծերը։
7. Վերին մակարդակում ավելի շատ ատոմ, քան ներքևում։ Երկմակարդակ համակարգում մղող ճառագայթումը հավասար հավանականությամբ կլանվում է և հարկադրական արձակում է առաջացնում, ուստի բնակեցվածությունները կարող են միայն հավասարվել, բայց ոչ շրջվել․ անհրաժեշտ է երրորդ (մետակայուն) մակարդակ։
8. Ֆոտոնի էներգիան $E = 1{,}99 \\cdot 10^{-25}/5{,}32 \\cdot 10^{-7} = 3{,}74 \\cdot 10^{-19}$ Ջ․ վայրկյանում $N = 5 \\cdot 10^{-3}/3{,}74 \\cdot 10^{-19} = 1{,}34 \\cdot 10^{16}$․ րոպեում $\\approx 8 \\cdot 10^{17}$ ֆոտոն։`,
        ru: `## Модель Резерфорда и её трудность

В 1911 г. опыт Резерфорда по рассеянию альфа-частиц показал, что атом имеет крошечное тяжёлое положительное **ядро** (размером около $10^{-15}$ м), вокруг которого движутся электроны, как планеты вокруг Солнца. Модель объясняла рассеяние, но противоречила классической электродинамике: электрон на круговой орбите имеет ускорение, значит должен непрерывно излучать, терять энергию и за время около $10^{-8}$ с упасть на ядро. Однако атомы устойчивы, а их свет образует **линейчатые спектры**, а не сплошную полосу.

## Постулаты Бора (1913)

> 1. **Стационарные состояния.** Атом может находиться лишь в определённых состояниях с энергиями $E_1, E_2, E_3, \\dots$; в таком состоянии он не излучает.
> 2. **Правило частот.** При переходе из состояния с энергией $E_k$ в состояние с энергией $E_n < E_k$ атом испускает один фотон: $$h\\nu = E_k - E_n.$$ Поглотив такой фотон, атом переходит с $E_n$ на $E_k$.
> 3. **Квантование орбит.** Разрешены те орбиты, на которых момент импульса электрона кратен $\\hbar = h/2\\pi$: $m v r = n\\hbar$, $n = 1, 2, 3, \\dots$

## Уровни энергии водорода

Соединив третий постулат с законом Кулона, получаем радиусы орбит $r_n = n^2 r_1$, где $r_1 = 0{,}53 \\cdot 10^{-10}$ м (боровский радиус), и энергии

$$E_n = -\\dfrac{13{,}6}{n^2}\\ \\text{эВ}, \\qquad n = 1, 2, 3, \\dots$$

Энергия отрицательна, потому что электрон связан; $E = 0$ соответствует свободному покоящемуся электрону. Уровень $n = 1$ — **основное состояние**, остальные — **возбуждённые**. **Энергия ионизации** водорода равна $13{,}6$ эВ. С ростом $n$ уровни сгущаются и при $E = 0$ сливаются в сплошной спектр.

## Спектральные серии

Переход $k \\to n$ даёт длину волны

$$\\dfrac{1}{\\lambda} = R\\left(\\dfrac{1}{n^2} - \\dfrac{1}{k^2}\\right), \\qquad R = 1{,}097 \\cdot 10^7\\ \\text{м}^{-1}.$$

| Серия | Конечный уровень $n$ | Область |
|---|---|---|
| Лаймана | 1 | ультрафиолет |
| Бальмера | 2 | видимая (красная 656 нм, голубая 486 нм, фиолетовые 434 нм и 410 нм) |
| Пашена | 3 | инфракрасная |

Теория Бора воспроизводит формулу Бальмера, найденную эмпирически в 1885 г., и даёт верное значение постоянной Ридберга. Для атомов с несколькими электронами она не работает; полное описание дала квантовая механика (1925–1927), где орбиты Бора заменены электронными облаками, но первые два постулата остаются точными.

## Виды спектров

| Спектр | Источник | Вид |
|---|---|---|
| Сплошной | нагретые твёрдые тела, жидкости, плотные газы (нить накала, фотосфера Солнца) | все цвета без промежутков |
| Линейчатый испускания | разреженные газы и пары атомов (газоразрядные трубки) | яркие отдельные линии |
| Полосатый | молекулы | группы близких линий |
| Линейчатый поглощения | холодный газ перед сплошным источником | тёмные линии на светлом фоне (фраунгоферовы линии в спектре Солнца) |

У каждого химического элемента свой набор линий, поэтому спектр — это «отпечаток пальца». **Спектральный анализ** определяет элементы в образце по его линиям; он обнаруживает всего $10^{-10}$ г вещества, нашёл гелий на Солнце раньше, чем на Земле, и сообщает состав, температуру и скорость (по доплеровскому смещению) звёзд.

## Лазеры

Возбуждённый атом обычно испускает фотон **спонтанно**, в случайном направлении и со случайной фазой. Эйнштейн (1916) предсказал **вынужденное излучение**: пролетающий фотон с энергией точно $E_k - E_n$ заставляет возбуждённый атом испустить второй фотон, тождественный первому, с той же частотой, направлением, фазой и поляризацией.

**Лазеру** (от английского Light Amplification by Stimulated Emission of Radiation) нужны:

> - **активная среда**, в которой накачкой создана **инверсная населённость**: на верхнем уровне больше атомов, чем на нижнем, так что вынужденное излучение преобладает над поглощением; для этого нужен долгоживущий **метастабильный** уровень;
> - **резонатор** — два параллельных зеркала (одно полупрозрачное), многократно возвращающие свет в среду, чтобы он усилился и выжил только пучок вдоль оси.

Первый лазер (Мейман, 1960) использовал кристалл рубина, накачиваемый лампой-вспышкой; гелий-неоновый газовый лазер излучает красный свет с длиной волны $632{,}8$ нм; полупроводниковые лазеры стоят в каждом DVD-приводе, лазерной указке и волоконно-оптической линии. Лазерный свет **монохроматичен**, **когерентен**, **остро направлен** и может быть очень **интенсивным** (импульсы в $10^{12}$ Вт и более). Применения: резка и сварка, операции на глазах и другие, оптическая связь, измерение расстояний, голография, компакт-диски и считыватели штрихкодов, эксперименты по управляемому термоядерному синтезу.

## Разобранные примеры

**Пример 1.** Энергии уровней водорода $n = 2$ и $n = 3$.

$E_2 = -13{,}6/4 = -3{,}4$ эВ, $E_3 = -13{,}6/9 \\approx -1{,}51$ эВ.

**Пример 2.** Длина волны фотона, испущенного при переходе $3 \\to 2$.

$h\\nu = E_3 - E_2 = -1{,}51 - (-3{,}4) = 1{,}89$ эВ $= 1{,}89 \\cdot 1{,}6 \\cdot 10^{-19} = 3{,}02 \\cdot 10^{-19}$ Дж. $\\lambda = \\dfrac{hc}{h\\nu} = \\dfrac{6{,}63 \\cdot 10^{-34} \\cdot 3 \\cdot 10^8}{3{,}02 \\cdot 10^{-19}} \\approx 6{,}6 \\cdot 10^{-7}$ м $= 660$ нм: красная линия серии Бальмера (точное значение 656 нм).

**Пример 3.** Проверка по формуле Ридберга.

$\\dfrac{1}{\\lambda} = 1{,}097 \\cdot 10^7 \\left(\\dfrac{1}{4} - \\dfrac{1}{9}\\right) = 1{,}097 \\cdot 10^7 \\cdot 0{,}1389 = 1{,}524 \\cdot 10^6$ м⁻¹, откуда $\\lambda = 656$ нм.

**Пример 4.** Минимальная энергия фотона, способного ионизовать атом водорода в основном состоянии, и его длина волны.

$E = 13{,}6$ эВ $= 2{,}18 \\cdot 10^{-18}$ Дж; $\\lambda = \\dfrac{hc}{E} = \\dfrac{1{,}99 \\cdot 10^{-25}}{2{,}18 \\cdot 10^{-18}} \\approx 9{,}1 \\cdot 10^{-8}$ м $= 91$ нм (далёкий ультрафиолет).

**Пример 5.** Атом водорода в состоянии $n = 3$ возвращается в основное состояние. Сколько различных фотонов он может испустить?

Пути: $3 \\to 1$ сразу или $3 \\to 2 \\to 1$. Возможные линии: $3 \\to 1$, $3 \\to 2$, $2 \\to 1$, то есть **3** различных фотона. В общем случае с уровня $n$ получается $n(n-1)/2$ линий.

**Пример 6.** Какие фотоны из пучка, содержащего фотоны с энергиями $10{,}2$ эВ, $12{,}09$ эВ и $11$ эВ, поглотят атомы водорода в основном состоянии?

Разрешённые энергии поглощения с $n = 1$ равны $E_k - E_1$: $10{,}2$ эВ ($k = 2$), $12{,}09$ эВ ($k = 3$), $12{,}75$ эВ ($k = 4$) и так далее. Фотоны $10{,}2$ эВ и $12{,}09$ эВ поглощаются; фотон $11$ эВ не соответствует ни одному переходу и проходит сквозь газ.

**Пример 7.** Гелий-неоновый лазер излучает $1$ мВт на длине волны $632{,}8$ нм. Сколько фотонов в секунду?

Энергия фотона $E = \\dfrac{hc}{\\lambda} = \\dfrac{1{,}99 \\cdot 10^{-25}}{6{,}328 \\cdot 10^{-7}} = 3{,}14 \\cdot 10^{-19}$ Дж. $N = \\dfrac{P}{E} = \\dfrac{10^{-3}}{3{,}14 \\cdot 10^{-19}} \\approx 3{,}2 \\cdot 10^{15}$ фотонов в секунду.

**Пример 8.** Импульс рубинового лазера несёт $1$ Дж за $10^{-9}$ с и фокусируется на пятно площадью $10^{-10}$ м². Мощность и интенсивность?

$P = \\dfrac{1}{10^{-9}} = 10^9$ Вт (гигаватт в течение импульса); $I = \\dfrac{P}{S} = \\dfrac{10^9}{10^{-10}} = 10^{19}$ Вт/м², чего достаточно, чтобы испарить любой материал.

## Упражнения

1. Почему атом Резерфорда не мог быть устойчивым по классической физике? Что утверждают первые два постулата Бора?
2. Вычислите энергии уровней водорода $n = 4$ и $n = 5$.
3. Найдите энергию и длину волны фотона, испущенного при переходе $4 \\to 2$ в водороде (голубая линия Бальмера).
4. Какова наибольшая длина волны в серии Лаймана (переход $2 \\to 1$)? В какой области спектра она лежит?
5. Атом водорода в основном состоянии поглощает фотон с энергией $12{,}75$ эВ. На какой уровень он переходит? Сколько различных линий он может испустить при возвращении в основное состояние?
6. Спектр Солнца сплошной с тёмными линиями. Объясните происхождение обеих частей.
7. Что такое инверсная населённость и почему нельзя сделать лазер на системе всего с двумя уровнями энергии (подсказка: в лучшем случае возбуждается половина атомов)?
8. Лазерная указка мощностью $5$ мВт излучает на длине волны $532$ нм. Сколько фотонов она испускает за одну минуту?

### Ответы

1. Электрон на орбите ускоряется и по теории Максвелла должен излучать и упасть на ядро за время около $10^{-8}$ с. Бор: атомы находятся в стационарных состояниях, не излучая; излучение происходит только при скачках между состояниями, $h\\nu = E_k - E_n$.
2. $E_4 = -13{,}6/16 = -0{,}85$ эВ; $E_5 = -13{,}6/25 = -0{,}54$ эВ.
3. $E = -0{,}85 - (-3{,}4) = 2{,}55$ эВ $= 4{,}08 \\cdot 10^{-19}$ Дж; $\\lambda = 1{,}99 \\cdot 10^{-25}/4{,}08 \\cdot 10^{-19} \\approx 4{,}87 \\cdot 10^{-7}$ м $= 487$ нм.
4. $E = -3{,}4 - (-13{,}6) = 10{,}2$ эВ; $\\lambda = 1{,}99 \\cdot 10^{-25}/(1{,}63 \\cdot 10^{-18}) \\approx 1{,}22 \\cdot 10^{-7}$ м $= 122$ нм, ультрафиолет.
5. $E_k = -13{,}6 + 12{,}75 = -0{,}85$ эВ, значит $k = 4$. Число линий $4 \\cdot 3/2 = 6$.
6. Горячая плотная фотосфера испускает сплошной спектр; более холодный газ солнечной атмосферы над ней поглощает фотоны, энергии которых совпадают с переходами его атомов, создавая тёмные фраунгоферовы линии.
7. На верхнем уровне больше атомов, чем на нижнем. В двухуровневой системе излучение накачки с равной вероятностью поглощается и вызывает вынужденное излучение, поэтому населённости могут лишь выравняться, но не инвертироваться; нужен третий (метастабильный) уровень.
8. Энергия фотона $E = 1{,}99 \\cdot 10^{-25}/5{,}32 \\cdot 10^{-7} = 3{,}74 \\cdot 10^{-19}$ Дж; за секунду $N = 5 \\cdot 10^{-3}/3{,}74 \\cdot 10^{-19} = 1{,}34 \\cdot 10^{16}$; за минуту $\\approx 8 \\cdot 10^{17}$ фотонов.`,
      },
      [
        q(t("According to Bohr's first postulate, an atom in a stationary state…", "Բորի առաջին պոստուլատի համաձայն՝ ստացիոնար վիճակում գտնվող ատոմը…", "Согласно первому постулату Бора, атом в стационарном состоянии…"), [t("does not radiate", "չի ճառագայթում", "не излучает"), t("radiates continuously", "անընդհատ ճառագայթում է", "излучает непрерывно"), t("has zero energy", "զրո էներգիա ունի", "имеет нулевую энергию")], 0),
        q(t("The energy of the hydrogen level n = 2 is…", "Ջրածնի n = 2 մակարդակի էներգիան է…", "Энергия уровня водорода n = 2 равна…"), [t("−3.4 eV", "−3,4 էՎ", "−3,4 эВ"), t("−6.8 eV", "−6,8 էՎ", "−6,8 эВ"), t("−13.6 eV", "−13,6 էՎ", "−13,6 эВ")], 0),
        q(t("The ionisation energy of hydrogen from the ground state is…", "Հիմնական վիճակից ջրածնի իոնացման էներգիան է…", "Энергия ионизации водорода из основного состояния равна…"), [t("13.6 eV", "13,6 էՎ", "13,6 эВ"), t("3.4 eV", "3,4 էՎ", "3,4 эВ"), t("1.51 eV", "1,51 էՎ", "1,51 эВ")], 0),
        q(t("The visible lines of hydrogen belong to the series of…", "Ջրածնի տեսանելի գծերը պատկանում են … սերիային։", "Видимые линии водорода принадлежат серии…"), [t("Balmer", "Բալմերի", "Бальмера"), t("Lyman", "Լայմանի", "Лаймана"), t("Paschen", "Պաշենի", "Пашена")], 0),
        q(t("A line emission spectrum is produced by…", "Գծային արձակման սպեկտր տալիս են…", "Линейчатый спектр испускания дают…"), [t("rarefied atomic gases", "նոսր ատոմային գազերը", "разреженные атомарные газы"), t("hot solids", "տաք պինդ մարմինները", "нагретые твёрдые тела"), t("molecules", "մոլեկուլները", "молекулы")], 0),
        q(t("For a laser to work, the active medium must have…", "Լազերի աշխատանքի համար ակտիվ միջավայրը պետք է ունենա…", "Для работы лазера активная среда должна иметь…"), [t("population inversion", "բնակեցվածության ինվերսիա", "инверсную населённость"), t("all atoms in the ground state", "բոլոր ատոմները հիմնական վիճակում", "все атомы в основном состоянии"), t("zero temperature", "զրո ջերմաստիճան", "нулевую температуру")], 0),
      ],
    ),
  ],
};
