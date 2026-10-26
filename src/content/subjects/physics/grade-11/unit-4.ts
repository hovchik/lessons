import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Optics", "Օպտիկա", "Оптика"),
  summary: t("Reflection and refraction laws, total internal reflection, lenses and optical instruments, dispersion, interference, diffraction, polarisation.", "Անդրադարձման և բեկման օրենքներ, լրիվ ներքին անդրադարձում, ոսպնյակներ և օպտիկական սարքեր, դիսպերսիա, ինտերֆերենց, դիֆրակցիա, բևեռացում։", "Законы отражения и преломления, полное внутреннее отражение, линзы и оптические приборы, дисперсия, интерференция, дифракция, поляризация."),
  lessons: [
    lesson(
      "light-speed-reflection-refraction",
      ["Speed of light; laws of reflection and refraction", "Լույսի արագություն, անդրադարձման և բեկման օրենքներ", "Скорость света; законы отражения и преломления"],
      {
        en: ["Describe how the speed of light was measured by Roemer, Fizeau and Michelson and state its value", "Apply the law of reflection and construct images in a plane mirror", "Apply Snell's law n₁ sin α = n₂ sin β, define the refractive index n = c/v and solve refraction problems"],
        hy: ["Նկարագրել, թե ինչպես են Ռյոմերը, Ֆիզոն և Մայքելսոնը չափել լույսի արագությունը, և նշել նրա արժեքը", "Կիրառել անդրադարձման օրենքը և կառուցել պատկերները հարթ հայելում", "Կիրառել Սնելիուսի օրենքը n₁ sin α = n₂ sin β, սահմանել n = c/v բեկման ցուցիչը և լուծել բեկման խնդիրներ"],
        ru: ["Описывать, как Рёмер, Физо и Майкельсон измеряли скорость света, и называть её значение", "Применять закон отражения и строить изображения в плоском зеркале", "Применять закон Снеллиуса n₁ sin α = n₂ sin β, определять показатель преломления n = c/v и решать задачи на преломление"],
      },
      {
        en: `## Geometrical optics and the ray

Light carries energy from a source to our eyes. In a uniform medium it travels in **straight lines**: the sharp shadows of objects and the pinhole camera prove it. A **ray** is the line along which the light energy travels; geometrical optics works with rays and ignores the wave nature of light, which is a good approximation as long as the obstacles are much larger than the wavelength ($\\approx 0{.}5$ μm). Rays from different sources cross without disturbing each other (independence of light rays).

## The speed of light

Galileo tried to time light between two hilltops and found only that it is "very fast". Roemer (1676) noticed that the eclipses of Jupiter's moon Io came late when Earth was far from Jupiter: the delay of $22$ minutes was the time light needs to cross Earth's orbit, which gave $c \\approx 2{.}2 \\cdot 10^8$ m/s with the astronomical data of the time. Fizeau (1849) sent light through a gap of a rotating toothed wheel to a mirror $8{.}6$ km away and back; at the right speed of rotation the returning light was blocked by the next tooth, giving $c \\approx 3{.}1 \\cdot 10^8$ m/s. Michelson (1926) refined this with a rotating mirror between two mountains and got $299796$ km/s.

> Today $c = 299792458$ m/s **by definition** (the metre is defined through it). In problems, $c = 3 \\cdot 10^8$ m/s. In a medium light is slower: $v = \\dfrac{c}{n}$.

## Reflection

> **Law of reflection.** The incident ray, the reflected ray and the normal at the point of incidence lie in one plane; the angle of reflection equals the angle of incidence: $\\gamma = \\alpha$ (angles are measured from the normal).

Rays are **reversible**: if the light went the opposite way it would follow the same path. A smooth surface gives **specular** reflection and an image; a rough one scatters the light in all directions (**diffuse** reflection), which is how we see non-luminous objects.

**Plane mirror.** The image of a point is symmetric to the point with respect to the mirror plane. The image is **virtual** (the rays only appear to come from it), the same size as the object, upright, at the same distance behind the mirror as the object is in front, and left and right are swapped. To see your full height in a mirror you need a mirror half your height, wherever you stand.

## Refraction

Light that passes from one transparent medium into another changes direction at the boundary: a straw in a glass looks broken, a pool looks shallower than it is.

> **Snell's law.** The incident ray, the refracted ray and the normal lie in one plane, and
> $$\\dfrac{\\sin\\alpha}{\\sin\\beta} = \\dfrac{n_2}{n_1} = n_{21},$$
> where $n_1$, $n_2$ are the **absolute refractive indices** of the media, $n = \\dfrac{c}{v}$.

Refraction happens because the wave's speed changes while its frequency stays the same: the wavefront turns, like a column of soldiers walking from a road into mud at an angle. A medium with a larger $n$ is **optically denser**; entering it, the ray bends toward the normal ($\\beta < \\alpha$); leaving it, away from the normal. A ray along the normal is not deflected. Values: air $1{.}0003$, water $1{.}33$, glass $1{.}5$–$1{.}9$, diamond $2{.}42$.

A **plane-parallel plate** shifts a ray sideways without changing its direction; a **prism** deflects it toward its base.

**Example 1.** Light from the Sun takes $500$ s to reach Earth. Distance: $3 \\cdot 10^8 \\cdot 500 = 1{.}5 \\cdot 10^{11}$ m. The nearest star is $4{.}2$ light years away: $4{.}2 \\cdot 365 \\cdot 86400 \\cdot 3 \\cdot 10^8 \\approx 4 \\cdot 10^{16}$ m.

**Example 2.** In Fizeau's experiment the wheel had $720$ teeth and the light was first blocked at $12{.}6$ revolutions per second. The light's round trip of $17{.}2$ km took the time for the wheel to turn half a tooth: $t = \\dfrac{1}{2 \\cdot 720 \\cdot 12{.}6} \\approx 5{.}5 \\cdot 10^{-5}$ s, $c = \\dfrac{17200}{5{.}5 \\cdot 10^{-5}} \\approx 3{.}1 \\cdot 10^8$ m/s.

**Example 3.** A ray hits a mirror at $30°$ to its surface. The angle of incidence (from the normal) is $60°$, the angle of reflection $60°$, and the ray turns through $180° - 120° = 60°$. If the mirror is turned by $10°$, the reflected ray turns by $20°$ (used in sensitive galvanometers).

**Example 4.** A person $1{.}7$ m tall with eyes at $1{.}6$ m stands before a vertical mirror. The lower edge of the mirror must be at $\\dfrac{1{.}6}{2} = 0{.}8$ m and the upper edge at $1{.}6 + \\dfrac{0{.}1}{2} = 1{.}65$ m: a mirror $0{.}85$ m high suffices, independent of the distance.

**Example 5.** A ray enters water ($n = 1{.}33$) from air at $45°$. $\\sin\\beta = \\dfrac{\\sin 45°}{1{.}33} = 0{.}53$, $\\beta \\approx 32°$. The speed in water is $\\dfrac{3 \\cdot 10^8}{1{.}33} \\approx 2{.}26 \\cdot 10^8$ m/s, and the wavelength of $600$ nm light becomes $\\dfrac{600}{1{.}33} \\approx 450$ nm, although its colour (frequency) is unchanged.

**Example 6.** A ray passes from glass ($n = 1{.}5$) into air at $30°$. $\\sin\\beta = 1{.}5\\sin 30° = 0{.}75$, $\\beta \\approx 48{.}6°$: the ray bends away from the normal. At $45°$ we would get $\\sin\\beta = 1{.}06 > 1$: no refracted ray exists, which is the subject of the next lesson.

**Example 7.** A coin lies at the bottom of a pool $2$ m deep. Viewed from almost directly above, it seems to be at depth $\\dfrac{h}{n} = \\dfrac{2}{1{.}33} = 1{.}5$ m. Rays from the coin bend away from the normal on leaving the water, and the eye traces them back to a shallower point.

**Example 8.** Why does a glass rod disappear in a liquid with the same refractive index? Light is deflected and reflected at a boundary only if $n$ changes. With $n_1 = n_2$ there is no refraction and no reflection, so nothing marks the boundary, and the rod is invisible.

## Exercises

1. How long does light take to travel $1$ km? Around the Earth's equator ($40000$ km)?
2. A ray is incident on a mirror at $25°$ to the normal. Find the angle between the incident and reflected rays.
3. A mirror is rotated by $15°$. Through what angle does the reflected ray turn?
4. A ray passes from air into glass ($n = 1{.}5$) at $60°$. Find the angle of refraction.
5. Light enters a liquid at $50°$ and refracts at $35°$. Find the refractive index and the speed of light in the liquid.
6. A ray leaves diamond ($n = 2{.}42$) into air at $20°$. Find the angle in air.
7. Find the wavelength in glass ($n = 1{.}5$) of light whose wavelength in air is $540$ nm.
8. A fish is $1$ m below the surface. At what depth does it appear to an observer looking straight down?

### Answers

1. $3{.}3$ μs; $0{.}13$ s. 2. $50°$. 3. $30°$. 4. $\\sin\\beta = \\dfrac{0{.}866}{1{.}5} = 0{.}577$, $\\beta \\approx 35°$. 5. $n = \\dfrac{\\sin 50°}{\\sin 35°} \\approx 1{.}34$, $v \\approx 2{.}24 \\cdot 10^8$ m/s. 6. $\\sin\\beta = 2{.}42 \\cdot 0{.}342 = 0{.}83$, $\\beta \\approx 56°$. 7. $360$ nm. 8. $\\dfrac{1}{1{.}33} \\approx 0{.}75$ m.`,
        hy: `## Երկրաչափական օպտիկա և ճառագայթ

Լույսն էներգիա է տեղափոխում աղբյուրից մեր աչքերը։ Համասեռ միջավայրում այն տարածվում է **ուղղագիծ**․ առարկաների հստակ ստվերներն ու ծակ տեսախցիկն ապացուցում են դա։ **Ճառագայթն** այն գիծն է, որով տեղափոխվում է լույսի էներգիան, երկրաչափական օպտիկան աշխատում է ճառագայթներով և անտեսում լույսի ալիքային բնույթը, ինչը լավ մոտարկում է, քանի դեռ արգելքները շատ ավելի մեծ են ալիքի երկարությունից ($\\approx 0{,}5$ մկմ)։ Տարբեր աղբյուրների ճառագայթները հատվում են՝ առանց միմյանց խանգարելու (լույսի ճառագայթների անկախություն)։

## Լույսի արագությունը

Գալիլեյը փորձեց չափել լույսի ժամանակն երկու բլուրների միջև և պարզեց միայն, որ այն «շատ արագ է»։ Ռյոմերը (1676) նկատեց, որ Յուպիտերի Իո արբանյակի խավարումներն ուշանում են, երբ Երկիրը հեռու է Յուպիտերից․ $22$ րոպե ուշացումը լույսին Երկրի ուղեծիրը հատելու համար անհրաժեշտ ժամանակն էր, որն այն ժամանակվա աստղագիտական տվյալներով տվեց $c \\approx 2{,}2 \\cdot 10^8$ մ/վ։ Ֆիզոն (1849) լույսն ուղարկեց պտտվող ատամնավոր անիվի բացվածքով դեպի $8{,}6$ կմ հեռու հայելի և հետ, պտտման ճիշտ արագության դեպքում վերադարձող լույսը փակվում էր հաջորդ ատամով, որը տվեց $c \\approx 3{,}1 \\cdot 10^8$ մ/վ։ Մայքելսոնը (1926) ճշգրտեց սա երկու լեռների միջև պտտվող հայելով և ստացավ $299796$ կմ/վ։

> Այսօր $c = 299792458$ մ/վ **ըստ սահմանման** (մետրը սահմանվում է դրա միջոցով)։ Խնդիրներում $c = 3 \\cdot 10^8$ մ/վ։ Միջավայրում լույսն ավելի դանդաղ է․ $v = \\dfrac{c}{n}$։

## Անդրադարձում

> **Անդրադարձման օրենք։** Ընկնող ճառագայթը, անդրադարձած ճառագայթը և անկման կետում տարված նորմալը գտնվում են մեկ հարթության մեջ, անդրադարձման անկյունը հավասար է անկման անկյանը․ $\\gamma = \\alpha$ (անկյունները չափվում են նորմալից)։

Ճառագայթները **դարձելի** են․ եթե լույսը գնար հակառակ ուղղությամբ, կանցներ նույն ճանապարհով։ Հարթ մակերևույթը տալիս է **հայելային** անդրադարձում և պատկեր, իսկ խորդուբորդը ցրում է լույսը բոլոր ուղղություններով (**դիֆուզ** անդրադարձում), այսպես ենք տեսնում չլուսարձակող առարկաները։

**Հարթ հայելի։** Կետի պատկերը համաչափ է կետին հայելու հարթության նկատմամբ։ Պատկերը **կեղծ** է (ճառագայթները միայն թվում է, թե գալիս են նրանից), առարկայի չափի, ուղիղ, հայելու հետևում նույն հեռավորության վրա, ինչ առարկան՝ առջևում, և ձախն ու աջը փոխված են։ Հայելում ձեր ամբողջ հասակը տեսնելու համար անհրաժեշտ է ձեր հասակի կեսի չափ հայելի, որտեղ էլ որ կանգնեք։

## Բեկում

Մի թափանցիկ միջավայրից մյուսն անցնող լույսը սահմանին փոխում է ուղղությունը․ բաժակի մեջ ձողիկը կոտրված է թվում, լողավազանը թվում է ավելի ծանծաղ, քան կա։

> **Սնելիուսի օրենք։** Ընկնող ճառագայթը, բեկված ճառագայթը և նորմալը գտնվում են մեկ հարթության մեջ, և
> $$\\dfrac{\\sin\\alpha}{\\sin\\beta} = \\dfrac{n_2}{n_1} = n_{21}$$
> որտեղ $n_1$-ը, $n_2$-ը միջավայրերի **բացարձակ բեկման ցուցիչներն** են, $n = \\dfrac{c}{v}$։

Բեկումը տեղի է ունենում, քանի որ ալիքի արագությունը փոխվում է, իսկ հաճախությունը մնում է նույնը․ ալիքի ճակատը շրջվում է, ինչպես զինվորների շարասյունը, որը ճանապարհից անկյան տակ մտնում է ցեխ։ Ավելի մեծ $n$-ով միջավայրն **օպտիկապես ավելի խիտ** է, նրա մեջ մտնելիս ճառագայթը թեքվում է դեպի նորմալը ($\\beta < \\alpha$), դուրս գալիս՝ նորմալից հեռու։ Նորմալի երկայնքով ճառագայթը չի շեղվում։ Արժեքներ․ օդ՝ $1{,}0003$, ջուր՝ $1{,}33$, ապակի՝ $1{,}5$–$1{,}9$, ալմաստ՝ $2{,}42$։

**Հարթ զուգահեռ թիթեղը** ճառագայթը տեղաշարժում է կողք՝ առանց ուղղությունը փոխելու, իսկ **պրիզման** շեղում է դեպի իր հիմքը։

**Օրինակ 1։** Արևի լույսն Երկիր է հասնում $500$ վ-ում։ Հեռավորությունը՝ $3 \\cdot 10^8 \\cdot 500 = 1{,}5 \\cdot 10^{11}$ մ։ Ամենամոտ աստղը $4{,}2$ լուսատարի հեռու է․ $4{,}2 \\cdot 365 \\cdot 86400 \\cdot 3 \\cdot 10^8 \\approx 4 \\cdot 10^{16}$ մ։

**Օրինակ 2։** Ֆիզոյի փորձում անիվն ուներ $720$ ատամ, և լույսն առաջին անգամ փակվեց վայրկյանում $12{,}6$ պտույտի դեպքում։ Լույսի $17{,}2$ կմ գնալ-գալը տևեց այնքան, որքան անիվի կես ատամ պտտվելը․ $t = \\dfrac{1}{2 \\cdot 720 \\cdot 12{,}6} \\approx 5{,}5 \\cdot 10^{-5}$ վ, $c = \\dfrac{17200}{5{,}5 \\cdot 10^{-5}} \\approx 3{,}1 \\cdot 10^8$ մ/վ։

**Օրինակ 3։** Ճառագայթը հայելուն ընկնում է մակերևույթի հետ $30°$ անկյան տակ։ Անկման անկյունը (նորմալից) $60°$ է, անդրադարձման անկյունը՝ $60°$, և ճառագայթը շրջվում է $180° - 120° = 60°$-ով։ Եթե հայելին պտտվի $10°$-ով, անդրադարձած ճառագայթը կպտտվի $20°$-ով (օգտագործվում է զգայուն գալվանաչափերում)։

**Օրինակ 4։** $1{,}7$ մ հասակով, $1{,}6$ մ բարձրության վրա աչքերով մարդը կանգնած է ուղղաձիգ հայելու առջև։ Հայելու ստորին եզրը պետք է լինի $\\dfrac{1{,}6}{2} = 0{,}8$ մ-ի վրա, իսկ վերինը՝ $1{,}6 + \\dfrac{0{,}1}{2} = 1{,}65$ մ-ի վրա․ բավական է $0{,}85$ մ բարձրությամբ հայելի՝ անկախ հեռավորությունից։

**Օրինակ 5։** Ճառագայթն օդից մտնում է ջուր ($n = 1{,}33$) $45°$-ով։ $\\sin\\beta = \\dfrac{\\sin 45°}{1{,}33} = 0{,}53$, $\\beta \\approx 32°$։ Արագությունը ջրում $\\dfrac{3 \\cdot 10^8}{1{,}33} \\approx 2{,}26 \\cdot 10^8$ մ/վ է, իսկ $600$ նմ լույսի ալիքի երկարությունը դառնում է $\\dfrac{600}{1{,}33} \\approx 450$ նմ, թեև գույնը (հաճախությունը) անփոփոխ է։

**Օրինակ 6։** Ճառագայթն ապակուց ($n = 1{,}5$) անցնում է օդ $30°$-ով։ $\\sin\\beta = 1{,}5\\sin 30° = 0{,}75$, $\\beta \\approx 48{,}6°$․ ճառագայթը թեքվում է նորմալից հեռու։ $45°$-ի դեպքում կստանայինք $\\sin\\beta = 1{,}06 > 1$․ բեկված ճառագայթ գոյություն չունի, որը հաջորդ դասի թեման է։

**Օրինակ 7։** Մետաղադրամն ընկած է $2$ մ խորությամբ լողավազանի հատակին։ Գրեթե ուղիղ վերևից նայելիս այն թվում է $\\dfrac{h}{n} = \\dfrac{2}{1{,}33} = 1{,}5$ մ խորության վրա։ Մետաղադրամի ճառագայթները ջրից դուրս գալիս թեքվում են նորմալից հեռու, և աչքը դրանք հետ է տանում դեպի ավելի ծանծաղ կետ։

**Օրինակ 8։** Ինչո՞ւ է ապակե ձողն անհետանում նույն բեկման ցուցիչով հեղուկում։ Լույսը սահմանին շեղվում և անդրադառնում է միայն այն դեպքում, երբ $n$-ը փոխվում է։ $n_1 = n_2$ դեպքում ոչ բեկում կա, ոչ անդրադարձում, ուստի ոչինչ չի նշում սահմանը, և ձողն անտեսանելի է։

## Վարժություններ

1. Որքա՞ն ժամանակում է լույսն անցնում $1$ կմ։ Երկրի հասարակածի շուրջ ($40000$ կմ)։
2. Ճառագայթը հայելուն ընկնում է նորմալի հետ $25°$ անկյան տակ։ Գտեք ընկնող և անդրադարձած ճառագայթների միջև անկյունը։
3. Հայելին պտտում են $15°$-ով։ Ի՞նչ անկյունով կպտտվի անդրադարձած ճառագայթը։
4. Ճառագայթն օդից անցնում է ապակի ($n = 1{,}5$) $60°$-ով։ Գտեք բեկման անկյունը։
5. Լույսը հեղուկ է մտնում $50°$-ով և բեկվում $35°$-ով։ Գտեք բեկման ցուցիչը և լույսի արագությունը հեղուկում։
6. Ճառագայթն ալմաստից ($n = 2{,}42$) դուրս է գալիս օդ $20°$-ով։ Գտեք անկյունն օդում։
7. Գտեք ապակում ($n = 1{,}5$) այն լույսի ալիքի երկարությունը, որի երկարությունն օդում $540$ նմ է։
8. Ձուկը մակերևույթից $1$ մ ցածր է։ Ի՞նչ խորության վրա է այն երևում ուղիղ ներքև նայող դիտորդին։

### Պատասխաններ

1. $3{,}3$ մկվ, $0{,}13$ վ։ 2. $50°$։ 3. $30°$։ 4. $\\sin\\beta = \\dfrac{0{,}866}{1{,}5} = 0{,}577$, $\\beta \\approx 35°$։ 5. $n = \\dfrac{\\sin 50°}{\\sin 35°} \\approx 1{,}34$, $v \\approx 2{,}24 \\cdot 10^8$ մ/վ։ 6. $\\sin\\beta = 2{,}42 \\cdot 0{,}342 = 0{,}83$, $\\beta \\approx 56°$։ 7. $360$ նմ։ 8. $\\dfrac{1}{1{,}33} \\approx 0{,}75$ մ։`,
        ru: `## Геометрическая оптика и луч

Свет переносит энергию от источника к нашим глазам. В однородной среде он распространяется **прямолинейно**: резкие тени предметов и камера-обскура доказывают это. **Луч** — линия, вдоль которой переносится энергия света; геометрическая оптика работает с лучами и не учитывает волновую природу света, что является хорошим приближением, пока препятствия много больше длины волны ($\\approx 0{,}5$ мкм). Лучи от разных источников пересекаются, не мешая друг другу (независимость световых лучей).

## Скорость света

Галилей пытался засечь время прохождения света между двумя холмами и выяснил лишь, что он «очень быстр». Рёмер (1676) заметил, что затмения спутника Юпитера Ио запаздывают, когда Земля далеко от Юпитера: запаздывание в $22$ минуты — это время, за которое свет пересекает земную орбиту, что с тогдашними астрономическими данными дало $c \\approx 2{,}2 \\cdot 10^8$ м/с. Физо (1849) пропускал свет через зазор вращающегося зубчатого колеса к зеркалу за $8{,}6$ км и обратно; при нужной скорости вращения возвращающийся свет перекрывался следующим зубцом, что дало $c \\approx 3{,}1 \\cdot 10^8$ м/с. Майкельсон (1926) уточнил это вращающимся зеркалом между двумя горами и получил $299796$ км/с.

> Сегодня $c = 299792458$ м/с **по определению** (через неё определён метр). В задачах $c = 3 \\cdot 10^8$ м/с. В среде свет медленнее: $v = \\dfrac{c}{n}$.

## Отражение

> **Закон отражения.** Падающий луч, отражённый луч и нормаль в точке падения лежат в одной плоскости; угол отражения равен углу падения: $\\gamma = \\alpha$ (углы отсчитываются от нормали).

Лучи **обратимы**: если бы свет шёл в противоположную сторону, он прошёл бы тем же путём. Гладкая поверхность даёт **зеркальное** отражение и изображение; шероховатая рассеивает свет во все стороны (**диффузное** отражение) — так мы видим несветящиеся предметы.

**Плоское зеркало.** Изображение точки симметрично точке относительно плоскости зеркала. Изображение **мнимое** (лучи лишь кажутся исходящими из него), равное предмету по размеру, прямое, на том же расстоянии за зеркалом, что и предмет перед ним, причём левое и правое меняются местами. Чтобы увидеть себя в полный рост, нужно зеркало вдвое ниже вашего роста, где бы вы ни стояли.

## Преломление

Свет, переходящий из одной прозрачной среды в другую, на границе меняет направление: соломинка в стакане кажется сломанной, бассейн кажется мельче, чем он есть.

> **Закон Снеллиуса.** Падающий луч, преломлённый луч и нормаль лежат в одной плоскости, и
> $$\\dfrac{\\sin\\alpha}{\\sin\\beta} = \\dfrac{n_2}{n_1} = n_{21},$$
> где $n_1$, $n_2$ — **абсолютные показатели преломления** сред, $n = \\dfrac{c}{v}$.

Преломление происходит потому, что скорость волны меняется, а частота сохраняется: фронт волны поворачивается, как колонна солдат, которая с дороги под углом входит в грязь. Среда с большим $n$ **оптически плотнее**; входя в неё, луч отклоняется к нормали ($\\beta < \\alpha$); выходя — от нормали. Луч вдоль нормали не отклоняется. Значения: воздух $1{,}0003$, вода $1{,}33$, стекло $1{,}5$–$1{,}9$, алмаз $2{,}42$.

**Плоскопараллельная пластинка** смещает луч вбок, не меняя направления; **призма** отклоняет его к своему основанию.

**Пример 1.** Свет от Солнца идёт до Земли $500$ с. Расстояние: $3 \\cdot 10^8 \\cdot 500 = 1{,}5 \\cdot 10^{11}$ м. Ближайшая звезда находится в $4{,}2$ светового года: $4{,}2 \\cdot 365 \\cdot 86400 \\cdot 3 \\cdot 10^8 \\approx 4 \\cdot 10^{16}$ м.

**Пример 2.** В опыте Физо колесо имело $720$ зубцов, и свет впервые перекрывался при $12{,}6$ оборота в секунду. Путь света туда и обратно $17{,}2$ км занимал время поворота колеса на ползубца: $t = \\dfrac{1}{2 \\cdot 720 \\cdot 12{,}6} \\approx 5{,}5 \\cdot 10^{-5}$ с, $c = \\dfrac{17200}{5{,}5 \\cdot 10^{-5}} \\approx 3{,}1 \\cdot 10^8$ м/с.

**Пример 3.** Луч падает на зеркало под углом $30°$ к его поверхности. Угол падения (от нормали) $60°$, угол отражения $60°$, и луч поворачивается на $180° - 120° = 60°$. Если зеркало повернуть на $10°$, отражённый луч повернётся на $20°$ (используется в чувствительных гальванометрах).

**Пример 4.** Человек ростом $1{,}7$ м с глазами на высоте $1{,}6$ м стоит перед вертикальным зеркалом. Нижний край зеркала должен быть на высоте $\\dfrac{1{,}6}{2} = 0{,}8$ м, верхний — на $1{,}6 + \\dfrac{0{,}1}{2} = 1{,}65$ м: достаточно зеркала высотой $0{,}85$ м независимо от расстояния.

**Пример 5.** Луч входит в воду ($n = 1{,}33$) из воздуха под углом $45°$. $\\sin\\beta = \\dfrac{\\sin 45°}{1{,}33} = 0{,}53$, $\\beta \\approx 32°$. Скорость в воде $\\dfrac{3 \\cdot 10^8}{1{,}33} \\approx 2{,}26 \\cdot 10^8$ м/с, а длина волны света $600$ нм становится $\\dfrac{600}{1{,}33} \\approx 450$ нм, хотя его цвет (частота) не меняется.

**Пример 6.** Луч переходит из стекла ($n = 1{,}5$) в воздух под углом $30°$. $\\sin\\beta = 1{,}5\\sin 30° = 0{,}75$, $\\beta \\approx 48{,}6°$: луч отклоняется от нормали. При $45°$ получилось бы $\\sin\\beta = 1{,}06 > 1$: преломлённого луча нет — это тема следующего урока.

**Пример 7.** Монета лежит на дне бассейна глубиной $2$ м. Если смотреть почти вертикально сверху, она кажется на глубине $\\dfrac{h}{n} = \\dfrac{2}{1{,}33} = 1{,}5$ м. Лучи от монеты, выходя из воды, отклоняются от нормали, и глаз продолжает их назад до более мелкой точки.

**Пример 8.** Почему стеклянная палочка исчезает в жидкости с таким же показателем преломления? Свет отклоняется и отражается на границе только если $n$ меняется. При $n_1 = n_2$ нет ни преломления, ни отражения, так что ничто не отмечает границу, и палочка невидима.

## Упражнения

1. За какое время свет проходит $1$ км? Вокруг экватора Земли ($40000$ км)?
2. Луч падает на зеркало под углом $25°$ к нормали. Найдите угол между падающим и отражённым лучами.
3. Зеркало повернули на $15°$. На какой угол повернётся отражённый луч?
4. Луч переходит из воздуха в стекло ($n = 1{,}5$) под углом $60°$. Найдите угол преломления.
5. Свет входит в жидкость под углом $50°$ и преломляется под углом $35°$. Найдите показатель преломления и скорость света в жидкости.
6. Луч выходит из алмаза ($n = 2{,}42$) в воздух под углом $20°$. Найдите угол в воздухе.
7. Найдите длину волны в стекле ($n = 1{,}5$) света, длина волны которого в воздухе $540$ нм.
8. Рыба находится на $1$ м ниже поверхности. На какой глубине она кажется наблюдателю, смотрящему вертикально вниз?

### Ответы

1. $3{,}3$ мкс; $0{,}13$ с. 2. $50°$. 3. $30°$. 4. $\\sin\\beta = \\dfrac{0{,}866}{1{,}5} = 0{,}577$, $\\beta \\approx 35°$. 5. $n = \\dfrac{\\sin 50°}{\\sin 35°} \\approx 1{,}34$, $v \\approx 2{,}24 \\cdot 10^8$ м/с. 6. $\\sin\\beta = 2{,}42 \\cdot 0{,}342 = 0{,}83$, $\\beta \\approx 56°$. 7. $360$ нм. 8. $\\dfrac{1}{1{,}33} \\approx 0{,}75$ м.`,
      },
      [
        q(t("The speed of light in vacuum is about…", "Լույսի արագությունը վակուումում մոտ…", "Скорость света в вакууме около…"), [t("3 · 10⁸ m/s", "3 · 10⁸ մ/վ է", "3 · 10⁸ м/с"), t("3 · 10⁶ m/s", "3 · 10⁶ մ/վ է", "3 · 10⁶ м/с"), t("340 m/s", "340 մ/վ է", "340 м/с")], 0),
        q(t("The angle of reflection…", "Անդրադարձման անկյունը…", "Угол отражения…"), [t("equals the angle of incidence", "հավասար է անկման անկյանը", "равен углу падения"), t("is twice the angle of incidence", "անկման անկյան կրկնապատիկն է", "вдвое больше угла падения"), t("is always 45°", "միշտ 45° է", "всегда 45°")], 0),
        q(t("The image in a plane mirror is…", "Հարթ հայելու պատկերը…", "Изображение в плоском зеркале…"), [t("real and inverted", "իրական է և շրջված", "действительное и перевёрнутое"), t("virtual, upright and the same size", "կեղծ է, ուղիղ և նույն չափի", "мнимое, прямое и равное по размеру"), t("virtual and smaller", "կեղծ է և փոքր", "мнимое и уменьшенное")], 1),
        q(t("The refractive index n equals…", "Բեկման ցուցիչը n հավասար է…", "Показатель преломления n равен…"), [t("v/c", "v/c", "v/c"), t("c/v", "c/v", "c/v"), t("c · v", "c · v", "c · v")], 1),
        q(t("Entering a denser medium, a ray bends…", "Ավելի խիտ միջավայր մտնելիս ճառագայթը թեքվում է…", "Входя в более плотную среду, луч отклоняется…"), [t("toward the normal", "դեպի նորմալը", "к нормали"), t("away from the normal", "նորմալից հեռու", "от нормали"), t("not at all", "ընդհանրապես չի թեքվում", "никак")], 0),
        q(t("When light enters water, which quantity stays the same?", "Երբ լույսը մտնում է ջուր, ո՞ր մեծությունն է մնում անփոփոխ։", "Когда свет входит в воду, какая величина сохраняется?"), [t("speed", "արագությունը", "скорость"), t("wavelength", "ալիքի երկարությունը", "длина волны"), t("frequency", "հաճախությունը", "частота")], 2),
      ],
    ),
    lesson(
      "total-internal-reflection",
      ["Total internal reflection; optical fibre", "Լրիվ ներքին անդրադարձում, օպտիկամանրաթել", "Полное внутреннее отражение; световоды"],
      {
        en: ["Explain when total internal reflection occurs and compute the critical angle sin α₀ = 1/n", "Trace rays through prisms with total internal reflection (periscope, binoculars, reflectors)", "Explain how an optical fibre guides light and where fibres are used"],
        hy: ["Բացատրել, թե երբ է տեղի ունենում լրիվ ներքին անդրադարձում, և հաշվել սահմանային անկյունը sin α₀ = 1/n", "Հետևել ճառագայթների ընթացքին լրիվ ներքին անդրադարձումով պրիզմաներում (պերիսկոպ, հեռադիտակ, լուսանդրադարձիչներ)", "Բացատրել, թե ինչպես է օպտիկամանրաթելն ուղղորդում լույսը և որտեղ են մանրաթելերն օգտագործվում"],
        ru: ["Объяснять, когда происходит полное внутреннее отражение, и вычислять предельный угол sin α₀ = 1/n", "Прослеживать ход лучей в призмах с полным внутренним отражением (перископ, бинокль, катафоты)", "Объяснять, как световод направляет свет и где применяются оптические волокна"],
      },
      {
        en: `## From the denser medium into the rarer one

When light goes from glass or water into air, it bends away from the normal: $\\sin\\beta = n\\sin\\alpha$ with $n > 1$. As the angle of incidence $\\alpha$ grows, the refracted ray slides toward the surface, and at some angle $\\alpha_0$ the refracted ray grazes the surface ($\\beta = 90°$). For $\\alpha > \\alpha_0$ Snell's law would require $\\sin\\beta > 1$: there is no refracted ray at all. The light is **completely reflected** back into the denser medium.

> **Total internal reflection** occurs when light travels from an optically denser medium into a rarer one at an angle of incidence greater than the **critical angle** $\\alpha_0$:
> $$\\sin\\alpha_0 = \\dfrac{n_2}{n_1}, \\qquad \\text{into air: } \\sin\\alpha_0 = \\dfrac{1}{n}.$$

At any boundary a part of the light is reflected and a part refracted; as $\\alpha$ approaches $\\alpha_0$ the reflected share grows, and beyond $\\alpha_0$ it is $100\\%$. A totally reflecting surface is better than any metal mirror, which absorbs several per cent.

Critical angles: water $48{.}6°$, crown glass ($n = 1{.}5$) $41{.}8°$, diamond $24{.}4°$. The small critical angle of diamond, together with its strong dispersion, makes a cut diamond trap and return light through its top: this is its "fire".

## Prisms and everyday examples

A **right-angle prism** of glass ($\\alpha_0 \\approx 42°$) receives a ray perpendicular to a short face; the ray hits the hypotenuse at $45° > \\alpha_0$ and is totally reflected, turning through $90°$. Two such prisms make a **periscope**. If the ray enters through the hypotenuse, it reflects from both short faces and turns through $180°$: this is used in **binoculars** to shorten the tube and set the image upright, and in bicycle and road **reflectors**, which return light to where it came from. 

Other examples: the silvery look of air bubbles in water and of a wet-sand footprint seen from below the water surface; the mirage on a hot road, where air near the asphalt is rarer and rays from the sky are bent up into the eye; the "window" a diver sees overhead, a circle of $97°$ beyond which the surface looks like a mirror.

## Optical fibres

A **light guide** is a thin transparent fibre: light entering one end at a small angle to the axis hits the side wall at an angle greater than $\\alpha_0$ and is totally reflected again and again, following the fibre around bends until it leaves at the far end. A real fibre has a **core** of refractive index $n_1$ surrounded by a **cladding** of slightly smaller $n_2$, so that the reflecting surface is protected; a plastic jacket protects the whole.

The maximum angle at which light can enter the fibre and still be guided satisfies $\\sin\\theta_{\\max} = \\sqrt{n_1^2 - n_2^2}$ (the **numerical aperture**).

Fibres are used in **endoscopes** for looking inside the body, in decorative lamps, and above all in **communication**: a single glass fibre thinner than a hair carries laser pulses at terabits per second over tens of kilometres with losses of only $0{.}2$ dB/km, far better than copper, immune to electrical interference and impossible to tap unnoticed. The internet and intercontinental cables run on fibre.

**Example 1.** Critical angle for glass with $n = 1{.}6$: $\\sin\\alpha_0 = \\dfrac{1}{1{.}6} = 0{.}625$, $\\alpha_0 \\approx 38{.}7°$. For a glass–water boundary: $\\sin\\alpha_0 = \\dfrac{1{.}33}{1{.}6} = 0{.}83$, $\\alpha_0 \\approx 56°$. Immersing glass in water makes total reflection harder.

**Example 2.** A ray inside water hits the surface at $50°$. Since $50° > 48{.}6°$, it is totally reflected: a swimmer looking at the surface at that angle sees the bottom reflected as in a mirror. At $40°$ the ray leaves the water: $\\sin\\beta = 1{.}33\\sin 40° = 0{.}855$, $\\beta \\approx 59°$.

**Example 3.** A diver's "window": rays from the whole sky ($\\beta$ up to $90°$) enter the water within a cone of half-angle $\\alpha_0 = 48{.}6°$, so the whole hemisphere above the water appears compressed into a circle of angular diameter $97°$ overhead, surrounded by the mirror-like surface.

**Example 4.** A right-angle prism is made of plastic with $n = 1{.}3$. $\\sin\\alpha_0 = 0{.}77$, $\\alpha_0 \\approx 50° > 45°$: a ray hitting the hypotenuse at $45°$ is **not** totally reflected, most of it escapes. For a reflecting prism the material must have $n > \\sqrt2 \\approx 1{.}41$.

**Example 5.** A point source of light is at depth $h = 1$ m under water. Light escapes only through a circle of radius $r = h\\tan\\alpha_0 = 1 \\cdot \\tan 48{.}6° \\approx 1{.}13$ m on the surface; outside this circle the surface reflects the light back. The lit circle on the surface has a diameter of about $2{.}3$ m.

**Example 6.** A fibre has core $n_1 = 1{.}48$ and cladding $n_2 = 1{.}46$. The critical angle at the core–cladding boundary is $\\arcsin\\dfrac{1{.}46}{1{.}48} \\approx 80{.}6°$, so only rays within $9{.}4°$ of the axis are guided. Numerical aperture: $\\sqrt{1{.}48^2 - 1{.}46^2} \\approx 0{.}24$, acceptance half-angle in air $\\approx 14°$.

**Example 7.** A signal travels along a $50$ km fibre with $n = 1{.}48$. Time: $\\dfrac{50000 \\cdot 1{.}48}{3 \\cdot 10^8} \\approx 2{.}5 \\cdot 10^{-4}$ s. With a loss of $0{.}2$ dB/km the signal loses $10$ dB, that is $90\\%$ of its power, and is then amplified.

**Example 8.** Why does a crack in glass or a bubble in ice look silvery? Inside the crack there is air; light from the glass hits the glass–air boundary at angles mostly larger than $42°$ and is totally reflected, so the crack acts as a mirror. The same effect makes the surface of water look like mercury to a diver.

## Exercises

1. Find the critical angle for a glass with $n = 1{.}7$.
2. The critical angle of a liquid is $45°$. Find its refractive index.
3. A ray inside glass ($n = 1{.}5$) hits the surface at $35°$ and at $45°$. In which case does it leave the glass? Find the exit angle.
4. Find the critical angle for a diamond–water boundary ($2{.}42$ and $1{.}33$).
5. A lamp is $2$ m under the surface of a pool. Find the radius of the circle through which its light escapes.
6. Can a right-angle prism of water-filled glass ($n_{\\text{water}} = 1{.}33$) serve as a $90°$ reflector? Justify.
7. A fibre has $n_1 = 1{.}5$ and $n_2 = 1{.}4$. Find the critical angle at the core–cladding boundary and the numerical aperture.
8. Explain why a fibre still guides light when it is bent, and why a very sharp bend loses light.

### Answers

1. $\\sin\\alpha_0 = 0{.}588$, $\\alpha_0 \\approx 36°$. 2. $n = \\dfrac{1}{\\sin 45°} \\approx 1{.}41$. 3. $\\alpha_0 = 41{.}8°$: at $35°$ it leaves with $\\sin\\beta = 1{.}5 \\sin 35° = 0{.}86$, $\\beta \\approx 59°$; at $45°$ it is totally reflected. 4. $\\sin\\alpha_0 = \\dfrac{1{.}33}{2{.}42} = 0{.}55$, $\\alpha_0 \\approx 33°$. 5. $r = 2\\tan 48{.}6° \\approx 2{.}27$ m. 6. No: $\\alpha_0 = 48{.}6° > 45°$, the ray at $45°$ is mostly refracted out. 7. $\\sin\\alpha_0 = \\dfrac{1{.}4}{1{.}5}$, $\\alpha_0 \\approx 69°$; NA $= \\sqrt{2{.}25 - 1{.}96} \\approx 0{.}54$. 8. In a gentle bend the rays still meet the wall at angles above $\\alpha_0$; in a sharp bend some rays hit the wall at angles below $\\alpha_0$ and refract out of the core.`,
        hy: `## Խիտ միջավայրից դեպի նոսր

Երբ լույսն ապակուց կամ ջրից անցնում է օդ, այն թեքվում է նորմալից հեռու․ $\\sin\\beta = n\\sin\\alpha$, որտեղ $n > 1$։ $\\alpha$ անկման անկյան աճին զուգընթաց բեկված ճառագայթը սահում է դեպի մակերևույթը, և որոշ $\\alpha_0$ անկյան դեպքում բեկված ճառագայթը սահում է մակերևույթով ($\\beta = 90°$)։ $\\alpha > \\alpha_0$ դեպքում Սնելիուսի օրենքը կպահանջեր $\\sin\\beta > 1$․ բեկված ճառագայթ ընդհանրապես չկա։ Լույսը **ամբողջությամբ անդրադառնում է** խիտ միջավայր։

> **Լրիվ ներքին անդրադարձում** տեղի է ունենում, երբ լույսն օպտիկապես ավելի խիտ միջավայրից անցնում է ավելի նոսր՝ **սահմանային անկյունից** $\\alpha_0$ մեծ անկման անկյան տակ․
> $$\\sin\\alpha_0 = \\dfrac{n_2}{n_1}, \\qquad \\text{օդ անցնելիս} \\quad \\sin\\alpha_0 = \\dfrac{1}{n}$$

Ցանկացած սահմանին լույսի մի մասն անդրադառնում է, մի մասը՝ բեկվում, $\\alpha$-ն $\\alpha_0$-ին մոտենալիս անդրադարձած մասն աճում է, իսկ $\\alpha_0$-ից այն կողմ այն $100\\%$ է։ Լրիվ անդրադարձնող մակերևույթն ավելի լավն է, քան ցանկացած մետաղե հայելի, որը կլանում է մի քանի տոկոս։

Սահմանային անկյուններ․ ջուր՝ $48{,}6°$, կրոն ապակի ($n = 1{,}5$)՝ $41{,}8°$, ալմաստ՝ $24{,}4°$։ Ալմաստի փոքր սահմանային անկյունը նրա ուժեղ դիսպերսիայի հետ միասին ստիպում է հղկված ալմաստին լույսը բռնել և վերադարձնել իր վերևի միջով․ սա նրա «կրակն» է։

## Պրիզմաներ և առօրյա օրինակներ

Ապակե **ուղղանկյուն պրիզման** ($\\alpha_0 \\approx 42°$) ճառագայթն ընդունում է կարճ նիստին ուղղահայաց, ճառագայթը ներքնաձիգին ընկնում է $45° > \\alpha_0$ անկյան տակ և լրիվ անդրադառնում՝ շրջվելով $90°$-ով։ Երկու այդպիսի պրիզմա կազմում են **պերիսկոպ**։ Եթե ճառագայթը մտնում է ներքնաձիգով, այն անդրադառնում է երկու կարճ նիստերից և շրջվում $180°$-ով․ սա օգտագործվում է **հեռադիտակներում** խողովակը կարճացնելու և պատկերն ուղղելու համար, ինչպես նաև հեծանիվների և ճանապարհների **լուսանդրադարձիչներում**, որոնք լույսը վերադարձնում են այնտեղ, որտեղից եկել է։

Այլ օրինակներ․ ջրում օդի պղպջակների և ջրի մակերևույթի տակից տեսվող թաց ավազի հետքի արծաթափայլ տեսքը, միրաժը տաք ճանապարհին, որտեղ ասֆալտի մոտ օդն ավելի նոսր է, և երկնքի ճառագայթները թեքվում են վեր՝ դեպի աչքը, «պատուհանը», որը սուզորդը տեսնում է գլխավերևում՝ $97°$ շրջան, որից այն կողմ մակերևույթը հայելի է թվում։

## Օպտիկամանրաթելեր

**Լուսատարը** բարակ թափանցիկ մանրաթել է․ մի ծայրից առանցքի հետ փոքր անկյան տակ մտնող լույսը կողային պատին ընկնում է $\\alpha_0$-ից մեծ անկյան տակ և նորից ու նորից լրիվ անդրադառնում՝ հետևելով մանրաթելին ոլորանների շուրջ, մինչև դուրս գա մյուս ծայրից։ Իրական մանրաթելն ունի $n_1$ բեկման ցուցիչով **միջուկ**, որը շրջապատված է մի փոքր ավելի փոքր $n_2$-ով **պատյանով**, որպեսզի անդրադարձնող մակերևույթը պաշտպանված լինի, պլաստիկ թաղանթը պաշտպանում է ամբողջը։

Առավելագույն անկյունը, որով լույսը կարող է մտնել մանրաթել և դեռ ուղղորդվել, բավարարում է $\\sin\\theta_{\\max} = \\sqrt{n_1^2 - n_2^2}$ առնչությանը (**թվային բացվածք**)։

Մանրաթելերն օգտագործվում են **էնդոսկոպներում** մարմնի ներսը դիտելու համար, դեկորատիվ լամպերում և առաջին հերթին **կապի** մեջ․ մազից բարակ մեկ ապակե մանրաթելը տասնյակ կիլոմետրերի վրա տեղափոխում է լազերային իմպուլսներ վայրկյանում տերաբիթներով՝ ընդամենը $0{,}2$ դԲ/կմ կորուստներով, պղնձից շատ ավելի լավ, անձեռնմխելի էլեկտրական խանգարումներից և անհնար է աննկատ գաղտնալսել։ Համացանցն ու միջմայրցամաքային մալուխներն աշխատում են մանրաթելով։

**Օրինակ 1։** $n = 1{,}6$ ապակու սահմանային անկյունը․ $\\sin\\alpha_0 = \\dfrac{1}{1{,}6} = 0{,}625$, $\\alpha_0 \\approx 38{,}7°$։ Ապակի–ջուր սահմանի համար․ $\\sin\\alpha_0 = \\dfrac{1{,}33}{1{,}6} = 0{,}83$, $\\alpha_0 \\approx 56°$։ Ապակին ջրի մեջ ընկղմելը դժվարացնում է լրիվ անդրադարձումը։

**Օրինակ 2։** Ջրի ներսում ճառագայթը մակերևույթին ընկնում է $50°$-ով։ Քանի որ $50° > 48{,}6°$, այն լրիվ անդրադառնում է․ այդ անկյան տակ մակերևույթին նայող լողորդը հատակը տեսնում է անդրադարձած, ինչպես հայելում։ $40°$-ի դեպքում ճառագայթը դուրս է գալիս ջրից․ $\\sin\\beta = 1{,}33\\sin 40° = 0{,}855$, $\\beta \\approx 59°$։

**Օրինակ 3։** Սուզորդի «պատուհանը»․ ամբողջ երկնքի ճառագայթները ($\\beta$-ն մինչև $90°$) ջուր են մտնում $\\alpha_0 = 48{,}6°$ կես անկյունով կոնի ներսում, ուստի ջրի վերևի ամբողջ կիսագունդը գլխավերևում սեղմված է երևում $97°$ անկյունային տրամագծով շրջանի մեջ՝ շրջապատված հայելանման մակերևույթով։

**Օրինակ 4։** Ուղղանկյուն պրիզման պատրաստված է $n = 1{,}3$ պլաստիկից։ $\\sin\\alpha_0 = 0{,}77$, $\\alpha_0 \\approx 50° > 45°$․ ներքնաձիգին $45°$-ով ընկնող ճառագայթը լրիվ **չի** անդրադառնում, մեծ մասը դուրս է գալիս։ Անդրադարձնող պրիզմայի համար նյութը պետք է ունենա $n > \\sqrt2 \\approx 1{,}41$։

**Օրինակ 5։** Լույսի կետային աղբյուրը ջրի տակ $h = 1$ մ խորության վրա է։ Լույսը դուրս է գալիս միայն մակերևույթի $r = h\\tan\\alpha_0 = 1 \\cdot \\tan 48{,}6° \\approx 1{,}13$ մ շառավղով շրջանով, այդ շրջանից դուրս մակերևույթը լույսը հետ է անդրադարձնում։ Մակերևույթի լուսավորված շրջանի տրամագիծը մոտ $2{,}3$ մ է։

**Օրինակ 6։** Մանրաթելն ունի $n_1 = 1{,}48$ միջուկ և $n_2 = 1{,}46$ պատյան։ Միջուկ–պատյան սահմանի սահմանային անկյունը $\\arcsin\\dfrac{1{,}46}{1{,}48} \\approx 80{,}6°$ է, ուստի ուղղորդվում են միայն առանցքից $9{,}4°$-ի սահմաններում ճառագայթները։ Թվային բացվածքը՝ $\\sqrt{1{,}48^2 - 1{,}46^2} \\approx 0{,}24$, ընդունման կես անկյունն օդում՝ $\\approx 14°$։

**Օրինակ 7։** Ազդանշանն անցնում է $n = 1{,}48$ ցուցիչով $50$ կմ մանրաթելով։ Ժամանակը՝ $\\dfrac{50000 \\cdot 1{,}48}{3 \\cdot 10^8} \\approx 2{,}5 \\cdot 10^{-4}$ վ։ $0{,}2$ դԲ/կմ կորստի դեպքում ազդանշանը կորցնում է $10$ դԲ, այսինքն՝ իր հզորության $90\\%$-ը, և ապա ուժեղացվում է։

**Օրինակ 8։** Ինչո՞ւ է ապակու ճաքը կամ սառույցի պղպջակն արծաթափայլ երևում։ Ճաքի ներսում օդ է, ապակու լույսն ապակի–օդ սահմանին ընկնում է հիմնականում $42°$-ից մեծ անկյունների տակ և լրիվ անդրադառնում, ուստի ճաքը գործում է որպես հայելի։ Նույն երևույթը սուզորդի համար ջրի մակերևույթը սնդիկի տեսք է տալիս։

## Վարժություններ

1. Գտեք $n = 1{,}7$ ապակու սահմանային անկյունը։
2. Հեղուկի սահմանային անկյունը $45°$ է։ Գտեք նրա բեկման ցուցիչը։
3. Ապակու ($n = 1{,}5$) ներսում ճառագայթը մակերևույթին ընկնում է $35°$-ով և $45°$-ով։ Ո՞ր դեպքում է այն դուրս գալիս ապակուց։ Գտեք ելքի անկյունը։
4. Գտեք ալմաստ–ջուր սահմանի սահմանային անկյունը ($2{,}42$ և $1{,}33$)։
5. Լամպը լողավազանի մակերևույթից $2$ մ ցածր է։ Գտեք այն շրջանի շառավիղը, որով նրա լույսը դուրս է գալիս։
6. Կարո՞ղ է ջրով լցված ապակե ուղղանկյուն պրիզման ($n_{\\text{ջուր}} = 1{,}33$) ծառայել որպես $90°$ անդրադարձիչ։ Հիմնավորեք։
7. Մանրաթելն ունի $n_1 = 1{,}5$ և $n_2 = 1{,}4$։ Գտեք միջուկ–պատյան սահմանի սահմանային անկյունը և թվային բացվածքը։
8. Բացատրեք, թե ինչու է մանրաթելը ծալված վիճակում դեռ ուղղորդում լույսը, և ինչու է շատ սուր ծալքը լույս կորցնում։

### Պատասխաններ

1. $\\sin\\alpha_0 = 0{,}588$, $\\alpha_0 \\approx 36°$։ 2. $n = \\dfrac{1}{\\sin 45°} \\approx 1{,}41$։ 3. $\\alpha_0 = 41{,}8°$․ $35°$-ի դեպքում դուրս է գալիս $\\sin\\beta = 1{,}5 \\sin 35° = 0{,}86$, $\\beta \\approx 59°$ անկյունով, $45°$-ի դեպքում լրիվ անդրադառնում է։ 4. $\\sin\\alpha_0 = \\dfrac{1{,}33}{2{,}42} = 0{,}55$, $\\alpha_0 \\approx 33°$։ 5. $r = 2\\tan 48{,}6° \\approx 2{,}27$ մ։ 6. Ոչ․ $\\alpha_0 = 48{,}6° > 45°$, $45°$-ի ճառագայթը հիմնականում բեկվում և դուրս է գալիս։ 7. $\\sin\\alpha_0 = \\dfrac{1{,}4}{1{,}5}$, $\\alpha_0 \\approx 69°$, թվային բացվածքը $= \\sqrt{2{,}25 - 1{,}96} \\approx 0{,}54$։ 8. Մեղմ ծալքում ճառագայթները պատին դեռ հանդիպում են $\\alpha_0$-ից մեծ անկյունների տակ, սուր ծալքում որոշ ճառագայթներ պատին ընկնում են $\\alpha_0$-ից փոքր անկյունների տակ և բեկվելով դուրս են գալիս միջուկից։`,
        ru: `## Из более плотной среды в менее плотную

Когда свет переходит из стекла или воды в воздух, он отклоняется от нормали: $\\sin\\beta = n\\sin\\alpha$ при $n > 1$. С ростом угла падения $\\alpha$ преломлённый луч сползает к поверхности, и при некотором угле $\\alpha_0$ преломлённый луч скользит вдоль поверхности ($\\beta = 90°$). При $\\alpha > \\alpha_0$ закон Снеллиуса требовал бы $\\sin\\beta > 1$: преломлённого луча нет вовсе. Свет **полностью отражается** обратно в плотную среду.

> **Полное внутреннее отражение** происходит, когда свет идёт из оптически более плотной среды в менее плотную под углом падения, большим **предельного угла** $\\alpha_0$:
> $$\\sin\\alpha_0 = \\dfrac{n_2}{n_1}, \\qquad \\text{в воздух: } \\sin\\alpha_0 = \\dfrac{1}{n}.$$

На любой границе часть света отражается, а часть преломляется; при приближении $\\alpha$ к $\\alpha_0$ отражённая доля растёт, а за $\\alpha_0$ она равна $100\\%$. Полностью отражающая поверхность лучше любого металлического зеркала, которое поглощает несколько процентов.

Предельные углы: вода $48{,}6°$, стекло крон ($n = 1{,}5$) $41{,}8°$, алмаз $24{,}4°$. Малый предельный угол алмаза вместе с его сильной дисперсией заставляет огранённый алмаз захватывать свет и возвращать его через верх: это его «огонь».

## Призмы и бытовые примеры

**Прямоугольная призма** из стекла ($\\alpha_0 \\approx 42°$) принимает луч перпендикулярно короткой грани; луч падает на гипотенузу под углом $45° > \\alpha_0$ и полностью отражается, поворачиваясь на $90°$. Две такие призмы образуют **перископ**. Если луч входит через гипотенузу, он отражается от обеих коротких граней и поворачивается на $180°$: это используют в **биноклях**, чтобы укоротить трубу и сделать изображение прямым, и в велосипедных и дорожных **катафотах**, возвращающих свет туда, откуда он пришёл.

Другие примеры: серебристый вид пузырьков воздуха в воде и следа на мокром песке, если смотреть снизу из-под поверхности; мираж на горячей дороге, где воздух у асфальта разрежён и лучи от неба загибаются вверх в глаз; «окно», которое ныряльщик видит над головой, — круг в $97°$, за которым поверхность выглядит как зеркало.

## Световоды

**Световод** — тонкое прозрачное волокно: свет, вошедший с одного конца под малым углом к оси, падает на боковую стенку под углом больше $\\alpha_0$ и снова и снова полностью отражается, следуя за волокном на изгибах, пока не выйдет с другого конца. Настоящее волокно имеет **сердцевину** с показателем $n_1$, окружённую **оболочкой** с чуть меньшим $n_2$, так что отражающая поверхность защищена; пластиковая рубашка защищает всё целиком.

Наибольший угол, под которым свет может войти в волокно и всё ещё направляться, удовлетворяет $\\sin\\theta_{\\max} = \\sqrt{n_1^2 - n_2^2}$ (**числовая апертура**).

Волокна используют в **эндоскопах** для осмотра внутренних органов, в декоративных светильниках и прежде всего в **связи**: одно стеклянное волокно тоньше волоса переносит лазерные импульсы со скоростью терабиты в секунду на десятки километров с потерями всего $0{,}2$ дБ/км, намного лучше меди, нечувствительно к электрическим помехам, и его нельзя незаметно прослушать. Интернет и межконтинентальные кабели работают на волокне.

**Пример 1.** Предельный угол для стекла с $n = 1{,}6$: $\\sin\\alpha_0 = \\dfrac{1}{1{,}6} = 0{,}625$, $\\alpha_0 \\approx 38{,}7°$. Для границы стекло–вода: $\\sin\\alpha_0 = \\dfrac{1{,}33}{1{,}6} = 0{,}83$, $\\alpha_0 \\approx 56°$. Погружение стекла в воду затрудняет полное отражение.

**Пример 2.** Луч внутри воды падает на поверхность под углом $50°$. Поскольку $50° > 48{,}6°$, он полностью отражается: пловец, глядящий на поверхность под таким углом, видит дно отражённым, как в зеркале. При $40°$ луч выходит из воды: $\\sin\\beta = 1{,}33\\sin 40° = 0{,}855$, $\\beta \\approx 59°$.

**Пример 3.** «Окно» ныряльщика: лучи со всего неба ($\\beta$ до $90°$) входят в воду внутри конуса с половинным углом $\\alpha_0 = 48{,}6°$, так что всё полушарие над водой кажется сжатым в круг с угловым диаметром $97°$ над головой, окружённый зеркальной поверхностью.

**Пример 4.** Прямоугольная призма сделана из пластика с $n = 1{,}3$. $\\sin\\alpha_0 = 0{,}77$, $\\alpha_0 \\approx 50° > 45°$: луч, падающий на гипотенузу под $45°$, **не** отражается полностью, большая часть выходит. Для отражающей призмы материал должен иметь $n > \\sqrt2 \\approx 1{,}41$.

**Пример 5.** Точечный источник света находится под водой на глубине $h = 1$ м. Свет выходит только через круг радиусом $r = h\\tan\\alpha_0 = 1 \\cdot \\tan 48{,}6° \\approx 1{,}13$ м на поверхности; вне этого круга поверхность отражает свет обратно. Освещённый круг на поверхности имеет диаметр около $2{,}3$ м.

**Пример 6.** Волокно имеет сердцевину $n_1 = 1{,}48$ и оболочку $n_2 = 1{,}46$. Предельный угол на границе сердцевина–оболочка $\\arcsin\\dfrac{1{,}46}{1{,}48} \\approx 80{,}6°$, так что направляются только лучи в пределах $9{,}4°$ от оси. Числовая апертура: $\\sqrt{1{,}48^2 - 1{,}46^2} \\approx 0{,}24$, половинный угол приёма в воздухе $\\approx 14°$.

**Пример 7.** Сигнал идёт по волокну длиной $50$ км с $n = 1{,}48$. Время: $\\dfrac{50000 \\cdot 1{,}48}{3 \\cdot 10^8} \\approx 2{,}5 \\cdot 10^{-4}$ с. При потерях $0{,}2$ дБ/км сигнал теряет $10$ дБ, то есть $90\\%$ мощности, и затем усиливается.

**Пример 8.** Почему трещина в стекле или пузырёк во льду выглядят серебристыми? Внутри трещины воздух; свет из стекла падает на границу стекло–воздух под углами в основном больше $42°$ и полностью отражается, так что трещина действует как зеркало. Тот же эффект делает поверхность воды для ныряльщика похожей на ртуть.

## Упражнения

1. Найдите предельный угол для стекла с $n = 1{,}7$.
2. Предельный угол жидкости $45°$. Найдите её показатель преломления.
3. Луч внутри стекла ($n = 1{,}5$) падает на поверхность под $35°$ и под $45°$. В каком случае он выходит из стекла? Найдите угол выхода.
4. Найдите предельный угол для границы алмаз–вода ($2{,}42$ и $1{,}33$).
5. Лампа находится на $2$ м ниже поверхности бассейна. Найдите радиус круга, через который выходит её свет.
6. Может ли прямоугольная призма из стекла, заполненная водой ($n_{\\text{воды}} = 1{,}33$), служить отражателем на $90°$? Обоснуйте.
7. Волокно имеет $n_1 = 1{,}5$ и $n_2 = 1{,}4$. Найдите предельный угол на границе сердцевина–оболочка и числовую апертуру.
8. Объясните, почему волокно по-прежнему направляет свет при изгибе и почему очень резкий изгиб теряет свет.

### Ответы

1. $\\sin\\alpha_0 = 0{,}588$, $\\alpha_0 \\approx 36°$. 2. $n = \\dfrac{1}{\\sin 45°} \\approx 1{,}41$. 3. $\\alpha_0 = 41{,}8°$: при $35°$ выходит с $\\sin\\beta = 1{,}5 \\sin 35° = 0{,}86$, $\\beta \\approx 59°$; при $45°$ полностью отражается. 4. $\\sin\\alpha_0 = \\dfrac{1{,}33}{2{,}42} = 0{,}55$, $\\alpha_0 \\approx 33°$. 5. $r = 2\\tan 48{,}6° \\approx 2{,}27$ м. 6. Нет: $\\alpha_0 = 48{,}6° > 45°$, луч под $45°$ в основном преломляется наружу. 7. $\\sin\\alpha_0 = \\dfrac{1{,}4}{1{,}5}$, $\\alpha_0 \\approx 69°$; числовая апертура $= \\sqrt{2{,}25 - 1{,}96} \\approx 0{,}54$. 8. При плавном изгибе лучи по-прежнему встречают стенку под углами больше $\\alpha_0$; при резком изгибе часть лучей падает на стенку под углами меньше $\\alpha_0$ и преломляется наружу из сердцевины.`,
      },
      [
        q(t("Total internal reflection can occur when light goes…", "Լրիվ ներքին անդրադարձում կարող է տեղի ունենալ, երբ լույսն անցնում է…", "Полное внутреннее отражение возможно, когда свет идёт…"), [t("from air into glass", "օդից ապակի", "из воздуха в стекло"), t("from glass into air", "ապակուց օդ", "из стекла в воздух"), t("in either direction", "ցանկացած ուղղությամբ", "в любом направлении")], 1),
        q(t("The critical angle for a medium with n = 2 is…", "n = 2 միջավայրի սահմանային անկյունը…", "Предельный угол для среды с n = 2 равен…"), [t("30°", "30° է", "30°"), t("45°", "45° է", "45°"), t("60°", "60° է", "60°")], 0),
        q(t("At the critical angle the refracted ray…", "Սահմանային անկյան դեպքում բեկված ճառագայթը…", "При предельном угле преломлённый луч…"), [t("goes along the normal", "գնում է նորմալի երկայնքով", "идёт вдоль нормали"), t("grazes the surface", "սահում է մակերևույթով", "скользит вдоль поверхности"), t("disappears into the medium", "անհետանում է միջավայրում", "исчезает в среде")], 1),
        q(t("A right-angle glass prism turns a ray through 90° by…", "Ապակե ուղղանկյուն պրիզման ճառագայթը շրջում է 90°-ով…", "Прямоугольная стеклянная призма поворачивает луч на 90° за счёт…"), [t("refraction", "բեկումով", "преломления"), t("total internal reflection", "լրիվ ներքին անդրադարձումով", "полного внутреннего отражения"), t("absorption", "կլանումով", "поглощения")], 1),
        q(t("In an optical fibre the cladding has…", "Օպտիկամանրաթելում պատյանն ունի…", "В световоде оболочка имеет…"), [t("a higher refractive index than the core", "միջուկից մեծ բեկման ցուցիչ", "больший показатель преломления, чем сердцевина"), t("a lower refractive index than the core", "միջուկից փոքր բեկման ցուցիչ", "меньший показатель преломления, чем сердцевина"), t("the same index as the core", "նույն ցուցիչը, ինչ միջուկը", "такой же показатель, как сердцевина")], 1),
        q(t("The critical angle for water (n = 1.33) is about…", "Ջրի (n = 1,33) սահմանային անկյունը մոտ…", "Предельный угол для воды (n = 1,33) около…"), [t("42°", "42° է", "42°"), t("49°", "49° է", "49°"), t("90°", "90° է", "90°")], 1),
      ],
    ),
    lesson(
      "thin-lens-formula",
      ["Thin lens formula; magnification; instruments", "Բարակ ոսպնյակի բանաձև, խոշորացում, սարքեր", "Формула тонкой линзы; увеличение; оптические приборы"],
      {
        en: ["Construct images formed by converging and diverging lenses using the three standard rays", "Apply the thin lens formula 1/F = 1/d + 1/f with the sign convention, and the magnification Γ = f/d", "Explain the eye, spectacles, the magnifying glass, the microscope and the telescope"],
        hy: ["Կառուցել հավաքող և ցրող ոսպնյակների պատկերներն երեք ստանդարտ ճառագայթներով", "Կիրառել բարակ ոսպնյակի 1/F = 1/d + 1/f բանաձևը նշանների կանոնով և Γ = f/d խոշորացումը", "Բացատրել աչքը, ակնոցը, խոշորացույցը, մանրադիտակն ու աստղադիտակը"],
        ru: ["Строить изображения, даваемые собирающей и рассеивающей линзами, с помощью трёх стандартных лучей", "Применять формулу тонкой линзы 1/F = 1/d + 1/f с правилом знаков и увеличение Γ = f/d", "Объяснять устройство глаза, очков, лупы, микроскопа и телескопа"],
      },
      {
        en: `## Lenses

A **lens** is a transparent body bounded by two spherical surfaces (one may be flat). A lens that is thicker in the middle is **converging**: a beam parallel to its axis is gathered at the **focus** $F$. A lens thinner in the middle is **diverging**: a parallel beam spreads out as if from a virtual focus in front of the lens. A lens is **thin** when its thickness is small compared with the radii of its surfaces; then it has an optical centre $O$ through which rays pass undeflected.

The **focal length** $F$ is the distance from the centre to the focus; the **optical power** is $D = \\dfrac{1}{F}$, measured in **dioptres** ($1$ dpt $= 1$ m⁻¹). Converging lenses have $D > 0$, diverging $D < 0$. For a lens in air $D = (n - 1)\\left(\\dfrac{1}{R_1} + \\dfrac{1}{R_2}\\right)$.

## Constructing images

Three convenient rays from a point of the object:

1. The ray parallel to the axis passes (after refraction) through the focus.
2. The ray through the optical centre goes straight on.
3. The ray through the front focus leaves parallel to the axis.

Any two of them locate the image. For a converging lens with the object at distance $d$:

| Object position | Image |
|---|---|
| $d > 2F$ | real, inverted, reduced, between $F$ and $2F$ |
| $d = 2F$ | real, inverted, same size, at $2F$ |
| $F < d < 2F$ | real, inverted, enlarged, beyond $2F$ |
| $d = F$ | no image (rays parallel) |
| $d < F$ | virtual, upright, enlarged, on the object's side |

A diverging lens always gives a virtual, upright, reduced image between the lens and the focus.

## The thin lens formula

> $$\\dfrac{1}{F} = \\dfrac{1}{d} + \\dfrac{1}{f},$$
> where $d$ is the distance from the object to the lens and $f$ the distance from the lens to the image. **Sign rule:** $F > 0$ for converging, $F < 0$ for diverging lenses; $f > 0$ for a real image, $f < 0$ for a virtual one.

The **linear magnification** is $\\Gamma = \\dfrac{h'}{h} = \\dfrac{\\lvert f\\rvert}{d}$.

## Optical instruments

**The eye** is a converging system (cornea plus lens) that forms a real inverted image on the retina. The lens changes its curvature (**accommodation**) so that objects from infinity down to the near point ($\\approx 25$ cm for a normal eye) are focused. A **short-sighted** eye focuses in front of the retina and needs a diverging lens; a **long-sighted** eye focuses behind and needs a converging one.

**Magnifying glass:** a converging lens with the object just inside its focus gives a virtual enlarged image; its angular magnification is $\\Gamma = \\dfrac{d_0}{F}$ with $d_0 = 25$ cm.

**Microscope:** the objective (short $F_1$) forms a real enlarged image, which the eyepiece views as a magnifying glass. $\\Gamma = \\Gamma_1\\Gamma_2 \\approx \\dfrac{L d_0}{F_1 F_2}$, where $L$ is the tube length; magnifications up to $2000$, limited by diffraction.

**Telescope:** the objective (long $F_1$) forms a real image of a distant object in its focal plane, which the eyepiece (short $F_2$) magnifies: $\\Gamma = \\dfrac{F_1}{F_2}$. Reflecting telescopes use a concave mirror as objective. A **camera** is a converging lens that forms a real reduced image on a sensor.

**Example 1.** A converging lens with $F = 10$ cm, object at $d = 30$ cm. $\\dfrac{1}{f} = \\dfrac{1}{10} - \\dfrac{1}{30} = \\dfrac{2}{30}$, $f = 15$ cm: real, inverted, $\\Gamma = \\dfrac{15}{30} = 0{.}5$.

**Example 2.** The same lens, object at $d = 5$ cm. $\\dfrac{1}{f} = \\dfrac{1}{10} - \\dfrac{1}{5} = -\\dfrac{1}{10}$, $f = -10$ cm: virtual, upright, on the same side, $\\Gamma = 2$. This is the magnifying glass.

**Example 3.** A diverging lens, $F = -20$ cm, object at $40$ cm. $\\dfrac{1}{f} = -\\dfrac{1}{20} - \\dfrac{1}{40} = -\\dfrac{3}{40}$, $f \\approx -13{.}3$ cm, virtual, upright, $\\Gamma = \\dfrac{1}{3}$.

**Example 4.** A projector must give an image $2$ m wide of a slide $2$ cm wide on a screen $5$ m away: $\\Gamma = 100 = \\dfrac{f}{d}$, $f = 500$ cm, $d = 5$ cm, $\\dfrac{1}{F} = \\dfrac{1}{5} + \\dfrac{1}{500}$, $F \\approx 4{.}95$ cm. The slide sits just outside the focus.

**Example 5.** A short-sighted person's far point is $50$ cm. The spectacle lens must form a virtual image at $50$ cm of an object at infinity: $F = -50$ cm, $D = -2$ dpt. A long-sighted person with near point $1$ m wants to read at $25$ cm: $\\dfrac{1}{F} = \\dfrac{1}{0{.}25} - \\dfrac{1}{1} = 3$ dpt.

**Example 6.** A magnifying glass of $5$ dpt has $F = 20$ cm and gives $\\Gamma = \\dfrac{25}{20} = 1{.}25$: a weak one. A watchmaker's loupe with $F = 2{.}5$ cm magnifies $10$ times.

**Example 7.** A telescope has an objective of $F_1 = 1$ m and an eyepiece of $F_2 = 2$ cm: $\\Gamma = 50$, tube length $F_1 + F_2 = 1{.}02$ m. The Moon ($0{.}5°$) appears $25°$ wide. Using a $5$ mm eyepiece gives $200$ times but a dimmer, shakier image.

**Example 8.** Why is the image on a camera sensor smaller than the object but on a microscope slide larger? In the camera $d \\gg F$, so $f \\approx F$ and $\\Gamma = \\dfrac{F}{d}$ is small. In the microscope the object is just outside the objective's focus ($d$ slightly larger than $F_1$), so $f$ and $\\Gamma_1 = \\dfrac{f}{d}$ are large.

## Exercises

1. A converging lens has $F = 15$ cm. Find the image position and magnification for $d = 45$ cm, $d = 20$ cm and $d = 10$ cm, and describe each image.
2. A lens of $-4$ dpt: find $F$ and the image of an object at $50$ cm.
3. The image of a candle is real and twice as large; the lens has $F = 12$ cm. Find $d$ and $f$.
4. Find the optical power of spectacles for a far point of $25$ cm (short sight).
5. A microscope has $F_1 = 4$ mm, $F_2 = 25$ mm, tube length $160$ mm. Estimate the magnification.
6. A telescope magnifies $30$ times with an eyepiece of $F_2 = 15$ mm. Find $F_1$ and the length of the tube.
7. A camera lens of $F = 50$ mm photographs a person $1{.}8$ m tall from $6$ m. Find the image height.
8. Where must an object be placed so that a converging lens gives a real image of the same size?

### Answers

1. $f = 22{.}5$ cm, $\\Gamma = 0{.}5$, real inverted reduced; $f = 60$ cm, $\\Gamma = 3$, real inverted enlarged; $f = -30$ cm, $\\Gamma = 3$, virtual upright enlarged. 2. $F = -25$ cm, $f = -16{.}7$ cm, $\\Gamma = \\dfrac{1}{3}$. 3. $f = 2d$, $\\dfrac{1}{12} = \\dfrac{3}{2d}$, $d = 18$ cm, $f = 36$ cm. 4. $-4$ dpt. 5. $\\Gamma \\approx \\dfrac{160 \\cdot 250}{4 \\cdot 25} = 400$. 6. $F_1 = 45$ cm, length $\\approx 46{.}5$ cm. 7. $f \\approx F = 50$ mm, $\\Gamma = \\dfrac{0{.}05}{6}$, $h' = 1{.}5$ cm. 8. At $d = 2F$.`,
        hy: `## Ոսպնյակներ

**Ոսպնյակը** երկու գնդային մակերևույթներով (մեկը կարող է հարթ լինել) սահմանափակված թափանցիկ մարմին է։ Մեջտեղում ավելի հաստ ոսպնյակը **հավաքող** է․ առանցքին զուգահեռ փունջը հավաքվում է **կիզակետում** $F$։ Մեջտեղում ավելի բարակը **ցրող** է․ զուգահեռ փունջը ցրվում է, ասես ոսպնյակի առջևի կեղծ կիզակետից։ Ոսպնյակը **բարակ** է, երբ նրա հաստությունը փոքր է մակերևույթների շառավիղների համեմատ, այդ դեպքում այն ունի օպտիկական կենտրոն $O$, որով ճառագայթներն անցնում են առանց շեղվելու։

**Կիզակետային հեռավորությունը** $F$ կենտրոնից մինչև կիզակետ հեռավորությունն է, **օպտիկական ուժը**՝ $D = \\dfrac{1}{F}$, որը չափվում է **դիոպտրիաներով** ($1$ դպտր $= 1$ մ⁻¹)։ Հավաքող ոսպնյակների համար $D > 0$, ցրողների՝ $D < 0$։ Օդում ոսպնյակի համար $D = (n - 1)\\left(\\dfrac{1}{R_1} + \\dfrac{1}{R_2}\\right)$։

## Պատկերների կառուցում

Առարկայի կետից երեք հարմար ճառագայթ․

1. Առանցքին զուգահեռ ճառագայթը (բեկվելուց հետո) անցնում է կիզակետով։
2. Օպտիկական կենտրոնով անցնող ճառագայթը շարունակում է ուղիղ։
3. Առջևի կիզակետով անցնող ճառագայթը դուրս է գալիս առանցքին զուգահեռ։

Դրանցից ցանկացած երկուսը որոշում են պատկերը։ Հավաքող ոսպնյակի համար $d$ հեռավորության վրա գտնվող առարկայի դեպքում․

| Առարկայի դիրք | Պատկեր |
|---|---|
| $d > 2F$ | իրական, շրջված, փոքրացված, $F$-ի և $2F$-ի միջև |
| $d = 2F$ | իրական, շրջված, նույն չափի, $2F$-ում |
| $F < d < 2F$ | իրական, շրջված, մեծացված, $2F$-ից այն կողմ |
| $d = F$ | պատկեր չկա (ճառագայթները զուգահեռ են) |
| $d < F$ | կեղծ, ուղիղ, մեծացված, առարկայի կողմում |

Ցրող ոսպնյակը միշտ տալիս է կեղծ, ուղիղ, փոքրացված պատկեր ոսպնյակի և կիզակետի միջև։

## Բարակ ոսպնյակի բանաձևը

> $$\\dfrac{1}{F} = \\dfrac{1}{d} + \\dfrac{1}{f}$$
> որտեղ $d$-ն առարկայից մինչև ոսպնյակ հեռավորությունն է, $f$-ը՝ ոսպնյակից մինչև պատկեր։ **Նշանների կանոն․** հավաքող ոսպնյակների համար $F > 0$, ցրողների՝ $F < 0$, իրական պատկերի համար $f > 0$, կեղծի՝ $f < 0$։

**Գծային խոշորացումը** $\\Gamma = \\dfrac{h'}{h} = \\dfrac{\\lvert f\\rvert}{d}$ է։

## Օպտիկական սարքեր

**Աչքը** հավաքող համակարգ է (եղջերաթաղանթ և բյուրեղիկ), որը ցանցաթաղանթի վրա իրական շրջված պատկեր է ստեղծում։ Բյուրեղիկը փոխում է իր կորությունը (**ակոմոդացիա**), որպեսզի անվերջությունից մինչև մոտակա կետը ($\\approx 25$ սմ նորմալ աչքի համար) առարկաները կիզակետվեն։ **Կարճատես** աչքը կիզակետում է ցանցաթաղանթի առջևում և ցրող ոսպնյակ է պահանջում, **հեռատեսը**՝ հետևում և հավաքող ոսպնյակ է պահանջում։

**Խոշորացույց․** հավաքող ոսպնյակ, որի կիզակետից փոքր-ինչ ներս գտնվող առարկան տալիս է կեղծ մեծացված պատկեր, նրա անկյունային խոշորացումը $\\Gamma = \\dfrac{d_0}{F}$ է, որտեղ $d_0 = 25$ սմ։

**Մանրադիտակ․** օբյեկտիվը (կարճ $F_1$) ստեղծում է իրական մեծացված պատկեր, որն օկուլյարը դիտում է որպես խոշորացույց։ $\\Gamma = \\Gamma_1\\Gamma_2 \\approx \\dfrac{L d_0}{F_1 F_2}$, որտեղ $L$-ը խողովակի երկարությունն է, խոշորացումը մինչև $2000$՝ սահմանափակված դիֆրակցիայով։

**Աստղադիտակ․** օբյեկտիվը (երկար $F_1$) հեռավոր առարկայի իրական պատկերն է ստեղծում իր կիզակետային հարթությունում, որն օկուլյարը (կարճ $F_2$) խոշորացնում է․ $\\Gamma = \\dfrac{F_1}{F_2}$։ Անդրադարձնող աստղադիտակները որպես օբյեկտիվ օգտագործում են գոգավոր հայելի։ **Լուսանկարչական ապարատը** հավաքող ոսպնյակ է, որը տվիչի վրա իրական փոքրացված պատկեր է ստեղծում։

**Օրինակ 1։** Հավաքող ոսպնյակ $F = 10$ սմ, առարկան $d = 30$ սմ-ի վրա։ $\\dfrac{1}{f} = \\dfrac{1}{10} - \\dfrac{1}{30} = \\dfrac{2}{30}$, $f = 15$ սմ․ իրական, շրջված, $\\Gamma = \\dfrac{15}{30} = 0{,}5$։

**Օրինակ 2։** Նույն ոսպնյակը, առարկան $d = 5$ սմ-ի վրա։ $\\dfrac{1}{f} = \\dfrac{1}{10} - \\dfrac{1}{5} = -\\dfrac{1}{10}$, $f = -10$ սմ․ կեղծ, ուղիղ, նույն կողմում, $\\Gamma = 2$։ Սա խոշորացույցն է։

**Օրինակ 3։** Ցրող ոսպնյակ, $F = -20$ սմ, առարկան $40$ սմ-ի վրա։ $\\dfrac{1}{f} = -\\dfrac{1}{20} - \\dfrac{1}{40} = -\\dfrac{3}{40}$, $f \\approx -13{,}3$ սմ, կեղծ, ուղիղ, $\\Gamma = \\dfrac{1}{3}$։

**Օրինակ 4։** Պրոյեկտորը $5$ մ հեռու էկրանին պետք է տա $2$ սմ լայնությամբ սլայդի $2$ մ լայնությամբ պատկեր․ $\\Gamma = 100 = \\dfrac{f}{d}$, $f = 500$ սմ, $d = 5$ սմ, $\\dfrac{1}{F} = \\dfrac{1}{5} + \\dfrac{1}{500}$, $F \\approx 4{,}95$ սմ։ Սլայդը գտնվում է կիզակետից փոքր-ինչ դուրս։

**Օրինակ 5։** Կարճատես մարդու հեռու կետը $50$ սմ է։ Ակնոցի ոսպնյակն անվերջության առարկայի կեղծ պատկերը պետք է ստեղծի $50$ սմ-ի վրա․ $F = -50$ սմ, $D = -2$ դպտր։ $1$ մ մոտակա կետով հեռատես մարդն ուզում է կարդալ $25$ սմ-ից․ $\\dfrac{1}{F} = \\dfrac{1}{0{,}25} - \\dfrac{1}{1} = 3$ դպտր։

**Օրինակ 6։** $5$ դպտր խոշորացույցն ունի $F = 20$ սմ և տալիս է $\\Gamma = \\dfrac{25}{20} = 1{,}25$․ թույլ է։ $F = 2{,}5$ սմ ժամագործի խոշորացույցը մեծացնում է $10$ անգամ։

**Օրինակ 7։** Աստղադիտակն ունի $F_1 = 1$ մ օբյեկտիվ և $F_2 = 2$ սմ օկուլյար․ $\\Gamma = 50$, խողովակի երկարությունը $F_1 + F_2 = 1{,}02$ մ։ Լուսինը ($0{,}5°$) երևում է $25°$ լայնությամբ։ $5$ մմ օկուլյարը տալիս է $200$ անգամ, բայց ավելի մութ, ցնցվող պատկեր։

**Օրինակ 8։** Ինչո՞ւ է պատկերը ֆոտոխցիկի տվիչի վրա առարկայից փոքր, իսկ մանրադիտակի ապակու վրա՝ մեծ։ Խցիկում $d \\gg F$, ուստի $f \\approx F$ և $\\Gamma = \\dfrac{F}{d}$-ն փոքր է։ Մանրադիտակում առարկան օբյեկտիվի կիզակետից փոքր-ինչ դուրս է ($d$-ն $F_1$-ից փոքր-ինչ մեծ է), ուստի $f$-ը և $\\Gamma_1 = \\dfrac{f}{d}$-ն մեծ են։

## Վարժություններ

1. Հավաքող ոսպնյակն ունի $F = 15$ սմ։ Գտեք պատկերի դիրքն ու խոշորացումը $d = 45$ սմ, $d = 20$ սմ և $d = 10$ սմ դեպքում և նկարագրեք յուրաքանչյուր պատկերը։
2. $-4$ դպտր ոսպնյակ․ գտեք $F$-ը և $50$ սմ-ի վրա գտնվող առարկայի պատկերը։
3. Մոմի պատկերն իրական է և երկու անգամ մեծ, ոսպնյակն ունի $F = 12$ սմ։ Գտեք $d$-ն և $f$-ը։
4. Գտեք ակնոցի օպտիկական ուժը $25$ սմ հեռու կետի համար (կարճատեսություն)։
5. Մանրադիտակն ունի $F_1 = 4$ մմ, $F_2 = 25$ մմ, խողովակի երկարությունը՝ $160$ մմ։ Գնահատեք խոշորացումը։
6. Աստղադիտակը մեծացնում է $30$ անգամ $F_2 = 15$ մմ օկուլյարով։ Գտեք $F_1$-ը և խողովակի երկարությունը։
7. $F = 50$ մմ ֆոտոխցիկի ոսպնյակը $6$ մ-ից նկարում է $1{,}8$ մ հասակով մարդու։ Գտեք պատկերի բարձրությունը։
8. Որտե՞ղ պետք է տեղադրել առարկան, որպեսզի հավաքող ոսպնյակը նույն չափի իրական պատկեր տա։

### Պատասխաններ

1. $f = 22{,}5$ սմ, $\\Gamma = 0{,}5$, իրական շրջված փոքրացված, $f = 60$ սմ, $\\Gamma = 3$, իրական շրջված մեծացված, $f = -30$ սմ, $\\Gamma = 3$, կեղծ ուղիղ մեծացված։ 2. $F = -25$ սմ, $f = -16{,}7$ սմ, $\\Gamma = \\dfrac{1}{3}$։ 3. $f = 2d$, $\\dfrac{1}{12} = \\dfrac{3}{2d}$, $d = 18$ սմ, $f = 36$ սմ։ 4. $-4$ դպտր։ 5. $\\Gamma \\approx \\dfrac{160 \\cdot 250}{4 \\cdot 25} = 400$։ 6. $F_1 = 45$ սմ, երկարությունը $\\approx 46{,}5$ սմ։ 7. $f \\approx F = 50$ մմ, $\\Gamma = \\dfrac{0{,}05}{6}$, $h' = 1{,}5$ սմ։ 8. $d = 2F$-ում։`,
        ru: `## Линзы

**Линза** — прозрачное тело, ограниченное двумя сферическими поверхностями (одна может быть плоской). Линза, более толстая в середине, — **собирающая**: пучок, параллельный её оси, собирается в **фокусе** $F$. Линза, более тонкая в середине, — **рассеивающая**: параллельный пучок расходится, как будто из мнимого фокуса перед линзой. Линза **тонкая**, если её толщина мала по сравнению с радиусами поверхностей; тогда у неё есть оптический центр $O$, через который лучи проходят без отклонения.

**Фокусное расстояние** $F$ — расстояние от центра до фокуса; **оптическая сила** $D = \\dfrac{1}{F}$ измеряется в **диоптриях** ($1$ дптр $= 1$ м⁻¹). У собирающих линз $D > 0$, у рассеивающих $D < 0$. Для линзы в воздухе $D = (n - 1)\\left(\\dfrac{1}{R_1} + \\dfrac{1}{R_2}\\right)$.

## Построение изображений

Три удобных луча из точки предмета:

1. Луч, параллельный оси, после преломления проходит через фокус.
2. Луч через оптический центр идёт прямо.
3. Луч через передний фокус выходит параллельно оси.

Любые два из них определяют изображение. Для собирающей линзы при расстоянии до предмета $d$:

| Положение предмета | Изображение |
|---|---|
| $d > 2F$ | действительное, перевёрнутое, уменьшенное, между $F$ и $2F$ |
| $d = 2F$ | действительное, перевёрнутое, равное, в $2F$ |
| $F < d < 2F$ | действительное, перевёрнутое, увеличенное, за $2F$ |
| $d = F$ | изображения нет (лучи параллельны) |
| $d < F$ | мнимое, прямое, увеличенное, со стороны предмета |

Рассеивающая линза всегда даёт мнимое, прямое, уменьшенное изображение между линзой и фокусом.

## Формула тонкой линзы

> $$\\dfrac{1}{F} = \\dfrac{1}{d} + \\dfrac{1}{f},$$
> где $d$ — расстояние от предмета до линзы, $f$ — от линзы до изображения. **Правило знаков:** $F > 0$ для собирающей, $F < 0$ для рассеивающей линзы; $f > 0$ для действительного изображения, $f < 0$ для мнимого.

**Линейное увеличение** $\\Gamma = \\dfrac{h'}{h} = \\dfrac{\\lvert f\\rvert}{d}$.

## Оптические приборы

**Глаз** — собирающая система (роговица плюс хрусталик), дающая действительное перевёрнутое изображение на сетчатке. Хрусталик меняет кривизну (**аккомодация**), так что фокусируются предметы от бесконечности до ближней точки ($\\approx 25$ см для нормального глаза). **Близорукий** глаз фокусирует перед сетчаткой и нуждается в рассеивающей линзе; **дальнозоркий** — за сетчаткой и нуждается в собирающей.

**Лупа:** собирающая линза с предметом чуть ближе фокуса даёт мнимое увеличенное изображение; её угловое увеличение $\\Gamma = \\dfrac{d_0}{F}$ при $d_0 = 25$ см.

**Микроскоп:** объектив (короткое $F_1$) даёт действительное увеличенное изображение, которое окуляр рассматривает как лупа. $\\Gamma = \\Gamma_1\\Gamma_2 \\approx \\dfrac{L d_0}{F_1 F_2}$, где $L$ — длина тубуса; увеличения до $2000$, ограниченные дифракцией.

**Телескоп:** объектив (длинное $F_1$) даёт действительное изображение далёкого предмета в своей фокальной плоскости, которое окуляр (короткое $F_2$) увеличивает: $\\Gamma = \\dfrac{F_1}{F_2}$. Зеркальные телескопы используют вогнутое зеркало как объектив. **Фотоаппарат** — собирающая линза, дающая действительное уменьшенное изображение на матрице.

**Пример 1.** Собирающая линза с $F = 10$ см, предмет при $d = 30$ см. $\\dfrac{1}{f} = \\dfrac{1}{10} - \\dfrac{1}{30} = \\dfrac{2}{30}$, $f = 15$ см: действительное, перевёрнутое, $\\Gamma = \\dfrac{15}{30} = 0{,}5$.

**Пример 2.** Та же линза, предмет при $d = 5$ см. $\\dfrac{1}{f} = \\dfrac{1}{10} - \\dfrac{1}{5} = -\\dfrac{1}{10}$, $f = -10$ см: мнимое, прямое, с той же стороны, $\\Gamma = 2$. Это лупа.

**Пример 3.** Рассеивающая линза, $F = -20$ см, предмет на $40$ см. $\\dfrac{1}{f} = -\\dfrac{1}{20} - \\dfrac{1}{40} = -\\dfrac{3}{40}$, $f \\approx -13{,}3$ см, мнимое, прямое, $\\Gamma = \\dfrac{1}{3}$.

**Пример 4.** Проектор должен дать изображение шириной $2$ м слайда шириной $2$ см на экране в $5$ м: $\\Gamma = 100 = \\dfrac{f}{d}$, $f = 500$ см, $d = 5$ см, $\\dfrac{1}{F} = \\dfrac{1}{5} + \\dfrac{1}{500}$, $F \\approx 4{,}95$ см. Слайд стоит чуть дальше фокуса.

**Пример 5.** Дальняя точка близорукого человека $50$ см. Линза очков должна давать мнимое изображение предмета из бесконечности на $50$ см: $F = -50$ см, $D = -2$ дптр. Дальнозоркий человек с ближней точкой $1$ м хочет читать с $25$ см: $\\dfrac{1}{F} = \\dfrac{1}{0{,}25} - \\dfrac{1}{1} = 3$ дптр.

**Пример 6.** Лупа $5$ дптр имеет $F = 20$ см и даёт $\\Gamma = \\dfrac{25}{20} = 1{,}25$: слабая. Часовая лупа с $F = 2{,}5$ см увеличивает в $10$ раз.

**Пример 7.** Телескоп имеет объектив $F_1 = 1$ м и окуляр $F_2 = 2$ см: $\\Gamma = 50$, длина трубы $F_1 + F_2 = 1{,}02$ м. Луна ($0{,}5°$) кажется шириной $25°$. С окуляром $5$ мм получится $200$ раз, но более тусклое и дрожащее изображение.

**Пример 8.** Почему изображение на матрице фотоаппарата меньше предмета, а на предметном стекле микроскопа — больше? В фотоаппарате $d \\gg F$, так что $f \\approx F$ и $\\Gamma = \\dfrac{F}{d}$ мало. В микроскопе предмет чуть дальше фокуса объектива ($d$ немного больше $F_1$), так что $f$ и $\\Gamma_1 = \\dfrac{f}{d}$ велики.

## Упражнения

1. Собирающая линза имеет $F = 15$ см. Найдите положение изображения и увеличение при $d = 45$ см, $d = 20$ см и $d = 10$ см и опишите каждое изображение.
2. Линза $-4$ дптр: найдите $F$ и изображение предмета на $50$ см.
3. Изображение свечи действительное и вдвое больше; линза имеет $F = 12$ см. Найдите $d$ и $f$.
4. Найдите оптическую силу очков для дальней точки $25$ см (близорукость).
5. Микроскоп имеет $F_1 = 4$ мм, $F_2 = 25$ мм, длину тубуса $160$ мм. Оцените увеличение.
6. Телескоп увеличивает в $30$ раз с окуляром $F_2 = 15$ мм. Найдите $F_1$ и длину трубы.
7. Объектив фотоаппарата с $F = 50$ мм снимает человека ростом $1{,}8$ м с $6$ м. Найдите высоту изображения.
8. Где нужно поместить предмет, чтобы собирающая линза дала действительное изображение того же размера?

### Ответы

1. $f = 22{,}5$ см, $\\Gamma = 0{,}5$, действительное перевёрнутое уменьшенное; $f = 60$ см, $\\Gamma = 3$, действительное перевёрнутое увеличенное; $f = -30$ см, $\\Gamma = 3$, мнимое прямое увеличенное. 2. $F = -25$ см, $f = -16{,}7$ см, $\\Gamma = \\dfrac{1}{3}$. 3. $f = 2d$, $\\dfrac{1}{12} = \\dfrac{3}{2d}$, $d = 18$ см, $f = 36$ см. 4. $-4$ дптр. 5. $\\Gamma \\approx \\dfrac{160 \\cdot 250}{4 \\cdot 25} = 400$. 6. $F_1 = 45$ см, длина $\\approx 46{,}5$ см. 7. $f \\approx F = 50$ мм, $\\Gamma = \\dfrac{0{,}05}{6}$, $h' = 1{,}5$ см. 8. При $d = 2F$.`,
      },
      [
        q(t("The optical power of a lens with F = 25 cm is…", "F = 25 սմ ոսպնյակի օպտիկական ուժը…", "Оптическая сила линзы с F = 25 см равна…"), [t("4 dpt", "4 դպտր է", "4 дптр"), t("0.25 dpt", "0,25 դպտր է", "0,25 дптр"), t("25 dpt", "25 դպտր է", "25 дптр")], 0),
        q(t("An object between F and 2F of a converging lens gives an image that is…", "Հավաքող ոսպնյակի F-ի և 2F-ի միջև առարկան տալիս է պատկեր, որը…", "Предмет между F и 2F собирающей линзы даёт изображение…"), [t("real, inverted, enlarged", "իրական է, շրջված, մեծացված", "действительное, перевёрнутое, увеличенное"), t("virtual, upright, enlarged", "կեղծ է, ուղիղ, մեծացված", "мнимое, прямое, увеличенное"), t("real, inverted, reduced", "իրական է, շրջված, փոքրացված", "действительное, перевёрнутое, уменьшенное")], 0),
        q(t("A diverging lens always gives an image that is…", "Ցրող ոսպնյակը միշտ տալիս է պատկեր, որը…", "Рассеивающая линза всегда даёт изображение…"), [t("real and inverted", "իրական է և շրջված", "действительное и перевёрнутое"), t("virtual, upright and reduced", "կեղծ է, ուղիղ և փոքրացված", "мнимое, прямое и уменьшенное"), t("virtual and enlarged", "կեղծ է և մեծացված", "мнимое и увеличенное")], 1),
        q(t("With F = 10 cm and d = 15 cm the image is at f =", "F = 10 սմ և d = 15 սմ դեպքում պատկերը f =", "При F = 10 см и d = 15 см изображение находится на f ="), [t("6 cm", "6 սմ", "6 см"), t("30 cm", "30 սմ", "30 см"), t("25 cm", "25 սմ", "25 см")], 1),
        q(t("A short-sighted eye is corrected with…", "Կարճատես աչքը շտկվում է…", "Близорукий глаз исправляют…"), [t("a converging lens", "հավաքող ոսպնյակով", "собирающей линзой"), t("a diverging lens", "ցրող ոսպնյակով", "рассеивающей линзой"), t("a plane mirror", "հարթ հայելով", "плоским зеркалом")], 1),
        q(t("The magnification of a telescope is…", "Աստղադիտակի խոշորացումը…", "Увеличение телескопа равно…"), [t("F₁/F₂", "F₁/F₂ է", "F₁/F₂"), t("F₂/F₁", "F₂/F₁ է", "F₂/F₁"), t("F₁ · F₂", "F₁ · F₂ է", "F₁ · F₂")], 0),
      ],
    ),
    lesson(
      "dispersion-interference",
      ["Dispersion; interference of light", "Դիսպերսիա, լույսի ինտերֆերենց", "Дисперсия; интерференция света"],
      {
        en: ["Explain dispersion as the dependence of the refractive index on frequency and describe Newton's prism experiment, the rainbow and colour", "State the conditions for interference (coherence) and the conditions for maxima and minima Δ = kλ, Δ = (2k + 1)λ/2", "Analyse Young's double slit, thin-film colours and anti-reflection coatings"],
        hy: ["Բացատրել դիսպերսիան որպես բեկման ցուցիչի կախվածություն հաճախությունից և նկարագրել Նյուտոնի պրիզմայի փորձը, ծիածանն ու գույնը", "Ձևակերպել ինտերֆերենցի պայմանները (կոհերենտություն) և մաքսիմումների ու մինիմումների պայմանները Δ = kλ, Δ = (2k + 1)λ/2", "Վերլուծել Յունգի երկու ճեղքերի փորձը, բարակ թաղանթների գույներն ու հակաանդրադարձնող պատվածքները"],
        ru: ["Объяснять дисперсию как зависимость показателя преломления от частоты и описывать опыт Ньютона с призмой, радугу и цвет", "Формулировать условия интерференции (когерентность) и условия максимумов и минимумов Δ = kλ, Δ = (2k + 1)λ/2", "Анализировать опыт Юнга с двумя щелями, цвета тонких плёнок и просветление оптики"],
      },
      {
        en: `## Dispersion

Newton (1666) let a narrow beam of sunlight pass through a glass prism and saw on the wall a coloured band, the **spectrum**: red, orange, yellow, green, blue, indigo, violet. Red is deflected least, violet most. A second prism turned the other way recombined the colours into white light, and a single colour isolated by a slit could not be split further. Conclusions: white light is a mixture of colours, and the glass refracts different colours differently.

> **Dispersion** is the dependence of the refractive index (the speed of light in a medium) on the frequency of the light. In glass $n$ grows from red to violet: $n_{\\text{red}} \\approx 1{.}51$, $n_{\\text{violet}} \\approx 1{.}53$.

Colour is determined by frequency, which does not change on entering a medium; the wavelength in the medium does. Objects have colour because they reflect some frequencies and absorb others: a red cloth absorbs everything except red, a white one reflects all, a black one absorbs all. Looked at through a green filter, a red cloth appears black.

**Rainbow.** Sunlight enters a raindrop, refracts (dispersing), reflects from the back of the drop and refracts out again. The outgoing rays concentrate at $42°$ from the direction opposite the Sun for red and $40°$ for violet, so an observer with the Sun behind sees a coloured arc with red outside. A second reflection gives the fainter secondary bow at $51°$ with reversed colours.

Dispersion is a nuisance in lenses (coloured fringes, **chromatic aberration**, corrected by combining glasses) and a tool in **spectroscopy**: a prism or grating spreads light into a spectrum whose lines identify the atoms that emitted it.

## Interference

Two waves arriving at the same point add their displacements (superposition). If the crests always arrive together the amplitude doubles; if a crest always meets a trough they cancel. For a **stable** pattern the waves must be **coherent**: same frequency and a constant phase difference. Two independent lamps are not coherent (their atoms emit random wave trains), so their light simply adds in intensity. Coherent waves are obtained by **splitting one wave into two** (by two slits, by the two surfaces of a film, by a mirror) and letting the parts meet again.

> Let two coherent waves travel paths $r_1$ and $r_2$ to a point; the **path difference** is $\\Delta = r_2 - r_1$.
> **Maximum** (bright): $\\Delta = k\\lambda$, $k = 0, \\pm1, \\pm2, \\ldots$
> **Minimum** (dark): $\\Delta = (2k + 1)\\dfrac{\\lambda}{2}$.

Energy is not lost: it is redistributed from the dark places to the bright ones.

**Young's experiment (1801).** Light from one slit falls on two narrow slits a distance $d$ apart; on a screen at distance $L \\gg d$ bright and dark fringes alternate. For the point at height $x$ the path difference is $\\Delta \\approx \\dfrac{xd}{L}$, so the bright fringes are at $x_k = \\dfrac{k\\lambda L}{d}$ and the **fringe spacing** is

$$\\Delta x = \\dfrac{\\lambda L}{d}.$$

Measuring the spacing gives the wavelength of light: Young found about $0{.}5$ μm. The experiment proved that light is a wave.

## Thin films

A soap bubble, oil on a puddle, a beetle's wing case are coloured although the material is transparent: light reflected from the **front** and the **back** surfaces of the film interferes. The path difference is $2hn$ (for normal incidence), plus half a wavelength lost on reflection from the denser medium. Where the condition for a maximum holds for red, the film looks red; where it holds for blue, blue; where the film is thinnest, below $\\dfrac{\\lambda}{4}$, it looks dark. As the bubble thins, the colours drift and it finally turns black just before it bursts.

**Anti-reflection coating.** A lens is covered with a film of thickness $\\dfrac{\\lambda}{4n}$ and refractive index between air and glass; the two reflected waves have a path difference of $\\dfrac{\\lambda}{2}$ and cancel. Reflection losses drop from $4\\%$ per surface to under $0{.}5\\%$, and the faint remaining reflection is purple because the cancellation is exact only for green. Interference is also used to test the flatness of surfaces to a fraction of a wavelength and in interferometers that measure lengths with nanometre precision.

**Example 1.** A ray of white light enters a prism with angle $60°$ perpendicular to one face. For red ($n = 1{.}51$) the angle inside at the second face is $60°$ and $\\sin\\beta = 1{.}51 \\cdot 0{.}866 = 1{.}31$: total reflection. With a $30°$ prism, $\\sin\\beta = 1{.}51 \\cdot 0{.}5 = 0{.}755$, $\\beta = 49{.}0°$ for red and $1{.}53 \\cdot 0{.}5 = 0{.}765$, $\\beta = 49{.}9°$ for violet: the colours are separated by about $1°$.

**Example 2.** Two coherent sources emit $\\lambda = 600$ nm. At a point the paths differ by $1{.}5$ μm: $\\Delta = 2{.}5\\lambda = (2 \\cdot 2 + 1)\\dfrac{\\lambda}{2}$, a minimum. At a point with $\\Delta = 1{.}8$ μm, $\\Delta = 3\\lambda$, a maximum.

**Example 3.** In Young's setup $d = 0{.}2$ mm, $L = 2$ m, and the fringes are $5$ mm apart. $\\lambda = \\dfrac{\\Delta x \\cdot d}{L} = \\dfrac{5 \\cdot 10^{-3} \\cdot 2 \\cdot 10^{-4}}{2} = 5 \\cdot 10^{-7}$ m $= 500$ nm, green.

**Example 4.** With white light in Young's experiment the central fringe is white (all colours have $\\Delta = 0$ there), the first fringes are coloured with violet inside and red outside (since $\\Delta x \\propto \\lambda$), and after a few fringes the colours overlap into white again.

**Example 5.** A soap film of $n = 1{.}33$ has thickness $h = 300$ nm. The path difference in reflection is $2hn + \\dfrac{\\lambda}{2} = 798 + \\dfrac{\\lambda}{2}$ nm. Maximum when $798 = (2k + 1)\\dfrac{\\lambda}{2}$: $\\lambda = 532$ nm ($k = 1$), green, and $\\lambda = 319$ nm ($k = 2$), ultraviolet. The film looks green.

**Example 6.** A coating of $n = 1{.}38$ (magnesium fluoride) is designed for $550$ nm. Thickness $h = \\dfrac{\\lambda}{4n} = \\dfrac{550}{4 \\cdot 1{.}38} \\approx 100$ nm, a ten-thousandth of a millimetre, deposited in a vacuum.

**Example 7.** Two loudspeakers $2$ m apart emit the same $340$ Hz tone ($\\lambda = 1$ m) in phase. On a line $10$ m away the loud spots are spaced $\\dfrac{\\lambda L}{d} = 5$ m apart: walking across the room you hear the sound fade and swell. Sound interference follows the same rules as light.

**Example 8.** Why are there no interference fringes from two separate lamps, or from the two headlights of a car? Each atom emits a short wave train of about $10^{-8}$ s with a random phase; the phase difference between two lamps changes $10^8$ times a second, the fringes shift just as fast, and the eye sees a uniform average. Lasers are coherent and do show fringes.

## Exercises

1. Which colour travels faster in glass, red or violet? Which is refracted more?
2. A ray of white light enters water at $60°$. Find the angles of refraction for red ($n = 1{.}331$) and violet ($n = 1{.}343$).
3. For $\\lambda = 500$ nm decide whether $\\Delta = 1{.}25$ μm, $1{.}5$ μm and $2$ μm give a maximum or a minimum.
4. In Young's experiment $d = 0{.}5$ mm, $L = 1{.}5$ m, $\\lambda = 600$ nm. Find the fringe spacing.
5. With the same setup, red fringes ($700$ nm) are compared with blue ones ($400$ nm). Which are wider, and by what factor?
6. Find the minimum thickness of a soap film ($n = 1{.}33$) that reflects $\\lambda = 532$ nm most strongly at normal incidence.
7. Find the thickness of an anti-reflection coating with $n = 1{.}45$ for $\\lambda = 580$ nm.
8. Why does an oil film on water show colours while a thick glass plate does not?

### Answers

1. Red is faster (smaller $n$); violet is refracted more. 2. $\\sin\\beta = \\dfrac{0{.}866}{n}$: $40{.}6°$ and $40{.}2°$. 3. $2{.}5\\lambda$ minimum; $3\\lambda$ maximum; $4\\lambda$ maximum. 4. $1{.}8$ mm. 5. Red, $1{.}75$ times. 6. $2hn = \\dfrac{\\lambda}{2}$ (with the half-wave loss), $h = \\dfrac{\\lambda}{4n} = 100$ nm. 7. $h = \\dfrac{580}{4 \\cdot 1{.}45} = 100$ nm. 8. For interference the path difference must be a few wavelengths at most; in a thick plate it is thousands of wavelengths, different for every colour and every point, and the pattern averages out.`,
        hy: `## Դիսպերսիա

Նյուտոնը (1666) արևի լույսի նեղ փունջն անցկացրեց ապակե պրիզմայով և պատի վրա տեսավ գունավոր շերտ՝ **սպեկտր**․ կարմիր, նարնջագույն, դեղին, կանաչ, երկնագույն, կապույտ, մանուշակագույն։ Կարմիրն ամենաքիչն է շեղվում, մանուշակագույնը՝ ամենաշատը։ Հակառակ շրջված երկրորդ պրիզման գույները նորից միավորեց սպիտակ լույսի, իսկ ճեղքով առանձնացված մեկ գույնն այլևս չէր բաժանվում։ Եզրակացություններ․ սպիտակ լույսը գույների խառնուրդ է, և ապակին տարբեր գույները տարբեր կերպ է բեկում։

> **Դիսպերսիան** բեկման ցուցիչի (միջավայրում լույսի արագության) կախվածությունն է լույսի հաճախությունից։ Ապակում $n$-ն աճում է կարմիրից դեպի մանուշակագույն․ $n_{\\text{կարմիր}} \\approx 1{,}51$, $n_{\\text{մանուշ}} \\approx 1{,}53$։

Գույնը որոշվում է հաճախությամբ, որը միջավայր մտնելիս չի փոխվում, իսկ ալիքի երկարությունը միջավայրում փոխվում է։ Առարկաները գույն ունեն, քանի որ անդրադարձնում են որոշ հաճախություններ և կլանում մյուսները․ կարմիր կտորը կլանում է ամեն ինչ, բացի կարմիրից, սպիտակն անդրադարձնում է ամեն ինչ, սևը կլանում է ամեն ինչ։ Կանաչ զտիչով նայելիս կարմիր կտորը սև է երևում։

**Ծիածան։** Արևի լույսը մտնում է անձրևի կաթիլ, բեկվում (ցրվելով գույների), անդրադառնում կաթիլի հետևի պատից և նորից բեկվելով դուրս գալիս։ Ելքային ճառագայթները կենտրոնանում են Արևին հակառակ ուղղությունից $42°$ անկյան տակ կարմիրի և $40°$՝ մանուշակագույնի համար, ուստի մեջքին Արև ունեցող դիտորդը տեսնում է գունավոր աղեղ՝ կարմիրը դրսից։ Երկրորդ անդրադարձումը տալիս է ավելի թույլ երկրորդական ծիածանը $51°$-ի տակ՝ հակառակ գույներով։

Դիսպերսիան ոսպնյակներում խանգարող գործոն է (գունավոր եզրեր, **քրոմատիկ աբերացիա**, որը շտկվում է ապակիների համադրությամբ) և գործիք **սպեկտրոսկոպիայում**․ պրիզման կամ ցանցը լույսը բացում է սպեկտրի, որի գծերը ճանաչում են այն ճառագայթած ատոմները։

## Ինտերֆերենց

Նույն կետ հասնող երկու ալիքները գումարում են իրենց շեղումները (սուպերպոզիցիա)։ Եթե կատարները միշտ միասին են հասնում, լայնույթը կրկնապատկվում է, եթե կատարը միշտ հանդիպում է փոսին, դրանք չեզոքանում են։ **Կայուն** պատկերի համար ալիքները պետք է **կոհերենտ** լինեն․ նույն հաճախություն և հաստատուն փուլերի տարբերություն։ Երկու անկախ լամպերը կոհերենտ չեն (դրանց ատոմները պատահական ալիքային շարաններ են ճառագայթում), ուստի դրանց լույսը պարզապես գումարվում է ինտենսիվությամբ։ Կոհերենտ ալիքներ ստանում են՝ **մեկ ալիքն երկուսի բաժանելով** (երկու ճեղքով, թաղանթի երկու մակերևույթներով, հայելով) և մասերին նորից հանդիպել տալով։

> Թող երկու կոհերենտ ալիքներ մինչև կետն անցնեն $r_1$ և $r_2$ ճանապարհներ, **ընթացքների տարբերությունը** $\\Delta = r_2 - r_1$ է։
> **Մաքսիմում** (լուսավոր)․ $\\Delta = k\\lambda$, $k = 0, \\pm1, \\pm2, \\ldots$
> **Մինիմում** (մութ)․ $\\Delta = (2k + 1)\\dfrac{\\lambda}{2}$

Էներգիան չի կորչում․ այն վերաբաշխվում է մութ տեղերից լուսավորներին։

**Յունգի փորձը (1801)։** Մեկ ճեղքի լույսն ընկնում է իրարից $d$ հեռավորության վրա գտնվող երկու նեղ ճեղքերի վրա, $L \\gg d$ հեռավորության էկրանին հերթագայում են լուսավոր և մութ շերտեր։ $x$ բարձրության կետի համար ընթացքների տարբերությունը $\\Delta \\approx \\dfrac{xd}{L}$ է, ուստի լուսավոր շերտերը գտնվում են $x_k = \\dfrac{k\\lambda L}{d}$-ում, իսկ **շերտերի լայնությունը**

$$\\Delta x = \\dfrac{\\lambda L}{d}$$

Լայնության չափումը տալիս է լույսի ալիքի երկարությունը․ Յունգը գտավ մոտ $0{,}5$ մկմ։ Փորձն ապացուցեց, որ լույսն ալիք է։

## Բարակ թաղանթներ

Օճառի պղպջակը, ջրափոսի վրա յուղը, բզեզի թևածածկը գունավոր են, թեև նյութը թափանցիկ է․ թաղանթի **առջևի** և **հետևի** մակերևույթներից անդրադարձած լույսն ինտերֆերենցի է ենթարկվում։ Ընթացքների տարբերությունը $2hn$ է (ուղղահայաց անկման դեպքում), գումարած ավելի խիտ միջավայրից անդրադառնալիս կորած կես ալիք։ Որտեղ մաքսիմումի պայմանը կատարվում է կարմիրի համար, թաղանթը կարմիր է երևում, որտեղ կապույտի համար՝ կապույտ, որտեղ թաղանթն ամենաբարակն է՝ $\\dfrac{\\lambda}{4}$-ից փոքր, այն մութ է երևում։ Պղպջակի բարակելուն զուգընթաց գույները տեղաշարժվում են, և պայթելուց անմիջապես առաջ այն սևանում է։

**Հակաանդրադարձնող պատվածք։** Ոսպնյակը ծածկում են $\\dfrac{\\lambda}{4n}$ հաստությամբ և օդի ու ապակու միջև բեկման ցուցիչով թաղանթով, երկու անդրադարձած ալիքներն ունեն $\\dfrac{\\lambda}{2}$ ընթացքների տարբերություն և չեզոքանում են։ Անդրադարձման կորուստները մեկ մակերևույթի համար $4\\%$-ից իջնում են $0{,}5\\%$-ից ցածր, իսկ մնացած թույլ անդրադարձումը մանուշակագույն է, քանի որ չեզոքացումը ճշգրիտ է միայն կանաչի համար։ Ինտերֆերենցն օգտագործվում է նաև մակերևույթների հարթությունն ալիքի երկարության մասի ճշտությամբ ստուգելու և նանոմետրային ճշտությամբ երկարություններ չափող ինտերֆերաչափերում։

**Օրինակ 1։** Սպիտակ լույսի ճառագայթը $60°$ անկյունով պրիզմա է մտնում մի նիստին ուղղահայաց։ Կարմիրի համար ($n = 1{,}51$) երկրորդ նիստի ներսի անկյունը $60°$ է, և $\\sin\\beta = 1{,}51 \\cdot 0{,}866 = 1{,}31$․ լրիվ անդրադարձում։ $30°$ պրիզմայի դեպքում $\\sin\\beta = 1{,}51 \\cdot 0{,}5 = 0{,}755$, $\\beta = 49{,}0°$ կարմիրի համար և $1{,}53 \\cdot 0{,}5 = 0{,}765$, $\\beta = 49{,}9°$ մանուշակագույնի համար․ գույները բաժանված են մոտ $1°$-ով։

**Օրինակ 2։** Երկու կոհերենտ աղբյուրներ ճառագայթում են $\\lambda = 600$ նմ։ Կետում ճանապարհները տարբերվում են $1{,}5$ մկմ-ով․ $\\Delta = 2{,}5\\lambda = (2 \\cdot 2 + 1)\\dfrac{\\lambda}{2}$, մինիմում։ $\\Delta = 1{,}8$ մկմ կետում $\\Delta = 3\\lambda$, մաքսիմում։

**Օրինակ 3։** Յունգի սարքավորման մեջ $d = 0{,}2$ մմ, $L = 2$ մ, և շերտերն իրարից $5$ մմ են հեռու։ $\\lambda = \\dfrac{\\Delta x \\cdot d}{L} = \\dfrac{5 \\cdot 10^{-3} \\cdot 2 \\cdot 10^{-4}}{2} = 5 \\cdot 10^{-7}$ մ $= 500$ նմ, կանաչ։

**Օրինակ 4։** Յունգի փորձում սպիտակ լույսով կենտրոնական շերտը սպիտակ է (այնտեղ բոլոր գույներն ունեն $\\Delta = 0$), առաջին շերտերը գունավոր են՝ մանուշակագույնը ներսից, կարմիրը դրսից (քանի որ $\\Delta x \\propto \\lambda$), իսկ մի քանի շերտից հետո գույները համընկնում են նորից սպիտակի։

**Օրինակ 5։** $n = 1{,}33$ օճառի թաղանթն ունի $h = 300$ նմ հաստություն։ Անդրադարձման ընթացքների տարբերությունը $2hn + \\dfrac{\\lambda}{2} = 798 + \\dfrac{\\lambda}{2}$ նմ է։ Մաքսիմում, երբ $798 = (2k + 1)\\dfrac{\\lambda}{2}$․ $\\lambda = 532$ նմ ($k = 1$), կանաչ, և $\\lambda = 319$ նմ ($k = 2$), ուլտրամանուշակագույն։ Թաղանթը կանաչ է երևում։

**Օրինակ 6։** $n = 1{,}38$ պատվածքը (մագնեզիումի ֆտորիդ) նախատեսված է $550$ նմ-ի համար։ Հաստությունը $h = \\dfrac{\\lambda}{4n} = \\dfrac{550}{4 \\cdot 1{,}38} \\approx 100$ նմ՝ միլիմետրի տասհազարերորդ մասը, նստեցվում է վակուումում։

**Օրինակ 7։** Իրարից $2$ մ հեռու երկու բարձրախոս համափուլ ճառագայթում են նույն $340$ Հց տոնը ($\\lambda = 1$ մ)։ $10$ մ հեռու գծի վրա բարձր կետերն իրարից $\\dfrac{\\lambda L}{d} = 5$ մ են հեռու․ սենյակով անցնելիս լսում եք, թե ինչպես է ձայնը թուլանում և ուժեղանում։ Ձայնի ինտերֆերենցը հետևում է նույն կանոններին, ինչ լույսը։

**Օրինակ 8։** Ինչո՞ւ ինտերֆերենցային շերտեր չկան երկու առանձին լամպերից կամ մեքենայի երկու լուսարձակներից։ Յուրաքանչյուր ատոմ ճառագայթում է մոտ $10^{-8}$ վ կարճ ալիքային շարան պատահական փուլով, երկու լամպերի փուլերի տարբերությունը վայրկյանում $10^8$ անգամ է փոխվում, շերտերը նույնքան արագ են տեղաշարժվում, և աչքը տեսնում է համասեռ միջին։ Լազերները կոհերենտ են և շերտեր ցույց են տալիս։

## Վարժություններ

1. Ո՞ր գույնն է ապակում ավելի արագ տարածվում՝ կարմի՞րը, թե՞ մանուշակագույնը։ Ո՞րն է ավելի շատ բեկվում։
2. Սպիտակ լույսի ճառագայթը ջուր է մտնում $60°$-ով։ Գտեք բեկման անկյունները կարմիրի ($n = 1{,}331$) և մանուշակագույնի ($n = 1{,}343$) համար։
3. $\\lambda = 500$ նմ-ի համար որոշեք՝ $\\Delta = 1{,}25$ մկմ, $1{,}5$ մկմ և $2$ մկմ մաքսիմո՞ւմ են տալիս, թե՞ մինիմում։
4. Յունգի փորձում $d = 0{,}5$ մմ, $L = 1{,}5$ մ, $\\lambda = 600$ նմ։ Գտեք շերտերի լայնությունը։
5. Նույն սարքավորմամբ կարմիր շերտերը ($700$ նմ) համեմատում են կապույտների ($400$ նմ) հետ։ Որո՞նք են ավելի լայն և քանի՞ անգամ։
6. Գտեք օճառի թաղանթի ($n = 1{,}33$) նվազագույն հաստությունը, որն ուղղահայաց անկման դեպքում ամենաուժեղն անդրադարձնում է $\\lambda = 532$ նմ։
7. Գտեք $n = 1{,}45$ հակաանդրադարձնող պատվածքի հաստությունը $\\lambda = 580$ նմ-ի համար։
8. Ինչո՞ւ է ջրի վրա յուղի թաղանթը գույներ ցույց տալիս, իսկ հաստ ապակե թիթեղը՝ ոչ։

### Պատասխաններ

1. Կարմիրն ավելի արագ է (ավելի փոքր $n$), մանուշակագույնն ավելի շատ է բեկվում։ 2. $\\sin\\beta = \\dfrac{0{,}866}{n}$․ $40{,}6°$ և $40{,}2°$։ 3. $2{,}5\\lambda$՝ մինիմում, $3\\lambda$՝ մաքսիմում, $4\\lambda$՝ մաքսիմում։ 4. $1{,}8$ մմ։ 5. Կարմիրները, $1{,}75$ անգամ։ 6. $2hn = \\dfrac{\\lambda}{2}$ (կես ալիքի կորստով), $h = \\dfrac{\\lambda}{4n} = 100$ նմ։ 7. $h = \\dfrac{580}{4 \\cdot 1{,}45} = 100$ նմ։ 8. Ինտերֆերենցի համար ընթացքների տարբերությունը պետք է առավելագույնը մի քանի ալիքի երկարություն լինի, հաստ թիթեղում այն հազարավոր ալիքի երկարություն է՝ տարբեր յուրաքանչյուր գույնի և կետի համար, և պատկերը միջինանում է։`,
        ru: `## Дисперсия

Ньютон (1666) пропустил узкий пучок солнечного света через стеклянную призму и увидел на стене цветную полосу — **спектр**: красный, оранжевый, жёлтый, зелёный, голубой, синий, фиолетовый. Красный отклоняется меньше всего, фиолетовый — больше всего. Вторая призма, повёрнутая в другую сторону, снова собирала цвета в белый свет, а один цвет, выделенный щелью, дальше не разлагался. Выводы: белый свет — смесь цветов, и стекло преломляет разные цвета по-разному.

> **Дисперсия** — зависимость показателя преломления (скорости света в среде) от частоты света. В стекле $n$ растёт от красного к фиолетовому: $n_{\\text{кр}} \\approx 1{,}51$, $n_{\\text{ф}} \\approx 1{,}53$.

Цвет определяется частотой, которая при входе в среду не меняется; длина волны в среде меняется. Предметы имеют цвет, потому что отражают одни частоты и поглощают другие: красная ткань поглощает всё, кроме красного, белая отражает всё, чёрная всё поглощает. Через зелёный светофильтр красная ткань кажется чёрной.

**Радуга.** Солнечный свет входит в каплю дождя, преломляется (разлагаясь), отражается от задней стенки капли и снова преломляется на выходе. Выходящие лучи сгущаются под углом $42°$ от направления, противоположного Солнцу, для красного и $40°$ для фиолетового, так что наблюдатель с Солнцем за спиной видит цветную дугу с красным снаружи. Второе отражение даёт более слабую вторичную радугу под $51°$ с обратным порядком цветов.

Дисперсия — помеха в линзах (цветные каёмки, **хроматическая аберрация**, исправляемая сочетанием стёкол) и инструмент в **спектроскопии**: призма или решётка разворачивает свет в спектр, линии которого выдают излучившие его атомы.

## Интерференция

Две волны, приходящие в одну точку, складывают свои смещения (суперпозиция). Если гребни всегда приходят вместе, амплитуда удваивается; если гребень всегда встречает впадину, они гасятся. Для **устойчивой** картины волны должны быть **когерентными**: одна частота и постоянная разность фаз. Две независимые лампы некогерентны (их атомы излучают случайные цуги волн), поэтому их свет просто складывается по интенсивности. Когерентные волны получают, **разделяя одну волну на две** (двумя щелями, двумя поверхностями плёнки, зеркалом) и давая частям снова встретиться.

> Пусть две когерентные волны проходят до точки пути $r_1$ и $r_2$; **разность хода** $\\Delta = r_2 - r_1$.
> **Максимум** (светло): $\\Delta = k\\lambda$, $k = 0, \\pm1, \\pm2, \\ldots$
> **Минимум** (темно): $\\Delta = (2k + 1)\\dfrac{\\lambda}{2}$.

Энергия не теряется: она перераспределяется из тёмных мест в светлые.

**Опыт Юнга (1801).** Свет от одной щели падает на две узкие щели на расстоянии $d$ друг от друга; на экране на расстоянии $L \\gg d$ чередуются светлые и тёмные полосы. Для точки на высоте $x$ разность хода $\\Delta \\approx \\dfrac{xd}{L}$, так что светлые полосы находятся при $x_k = \\dfrac{k\\lambda L}{d}$, а **ширина полосы**

$$\\Delta x = \\dfrac{\\lambda L}{d}.$$

Измерение ширины даёт длину волны света: Юнг нашёл около $0{,}5$ мкм. Опыт доказал, что свет — волна.

## Тонкие плёнки

Мыльный пузырь, масло на луже, надкрылья жука окрашены, хотя вещество прозрачно: свет, отражённый от **передней** и **задней** поверхностей плёнки, интерферирует. Разность хода равна $2hn$ (при нормальном падении) плюс полволны, теряемые при отражении от более плотной среды. Где условие максимума выполнено для красного, плёнка выглядит красной; где для синего — синей; где плёнка тоньше всего, меньше $\\dfrac{\\lambda}{4}$, она выглядит тёмной. По мере утончения пузыря цвета плывут, и перед самым разрывом он чернеет.

**Просветление оптики.** Линзу покрывают плёнкой толщиной $\\dfrac{\\lambda}{4n}$ с показателем между воздухом и стеклом; две отражённые волны имеют разность хода $\\dfrac{\\lambda}{2}$ и гасятся. Потери на отражение падают с $4\\%$ на поверхность до менее $0{,}5\\%$, а слабое оставшееся отражение фиолетовое, потому что гашение точно только для зелёного. Интерференцию используют также для проверки плоскостности поверхностей с точностью до доли длины волны и в интерферометрах, измеряющих длины с нанометровой точностью.

**Пример 1.** Луч белого света входит в призму с углом $60°$ перпендикулярно одной грани. Для красного ($n = 1{,}51$) угол внутри у второй грани $60°$ и $\\sin\\beta = 1{,}51 \\cdot 0{,}866 = 1{,}31$: полное отражение. С призмой $30°$: $\\sin\\beta = 1{,}51 \\cdot 0{,}5 = 0{,}755$, $\\beta = 49{,}0°$ для красного и $1{,}53 \\cdot 0{,}5 = 0{,}765$, $\\beta = 49{,}9°$ для фиолетового: цвета разведены примерно на $1°$.

**Пример 2.** Два когерентных источника излучают $\\lambda = 600$ нм. В точке пути различаются на $1{,}5$ мкм: $\\Delta = 2{,}5\\lambda = (2 \\cdot 2 + 1)\\dfrac{\\lambda}{2}$, минимум. В точке с $\\Delta = 1{,}8$ мкм $\\Delta = 3\\lambda$, максимум.

**Пример 3.** В установке Юнга $d = 0{,}2$ мм, $L = 2$ м, полосы отстоят на $5$ мм. $\\lambda = \\dfrac{\\Delta x \\cdot d}{L} = \\dfrac{5 \\cdot 10^{-3} \\cdot 2 \\cdot 10^{-4}}{2} = 5 \\cdot 10^{-7}$ м $= 500$ нм, зелёный.

**Пример 4.** В опыте Юнга с белым светом центральная полоса белая (там у всех цветов $\\Delta = 0$), первые полосы цветные с фиолетовым внутри и красным снаружи (так как $\\Delta x \\propto \\lambda$), а через несколько полос цвета накладываются снова в белый.

**Пример 5.** Мыльная плёнка с $n = 1{,}33$ имеет толщину $h = 300$ нм. Разность хода в отражении $2hn + \\dfrac{\\lambda}{2} = 798 + \\dfrac{\\lambda}{2}$ нм. Максимум при $798 = (2k + 1)\\dfrac{\\lambda}{2}$: $\\lambda = 532$ нм ($k = 1$), зелёный, и $\\lambda = 319$ нм ($k = 2$), ультрафиолет. Плёнка выглядит зелёной.

**Пример 6.** Покрытие с $n = 1{,}38$ (фторид магния) рассчитано на $550$ нм. Толщина $h = \\dfrac{\\lambda}{4n} = \\dfrac{550}{4 \\cdot 1{,}38} \\approx 100$ нм — десятитысячная доля миллиметра, наносится в вакууме.

**Пример 7.** Два динамика на расстоянии $2$ м излучают в фазе один тон $340$ Гц ($\\lambda = 1$ м). На линии в $10$ м громкие места отстоят на $\\dfrac{\\lambda L}{d} = 5$ м: проходя по комнате, вы слышите, как звук затухает и нарастает. Интерференция звука подчиняется тем же правилам, что и света.

**Пример 8.** Почему нет интерференционных полос от двух отдельных ламп или от двух фар автомобиля? Каждый атом излучает короткий цуг волн длительностью около $10^{-8}$ с со случайной фазой; разность фаз двух ламп меняется $10^8$ раз в секунду, полосы смещаются так же быстро, и глаз видит ровное среднее. Лазеры когерентны и полосы дают.

## Упражнения

1. Какой цвет движется в стекле быстрее — красный или фиолетовый? Какой сильнее преломляется?
2. Луч белого света входит в воду под углом $60°$. Найдите углы преломления для красного ($n = 1{,}331$) и фиолетового ($n = 1{,}343$).
3. Для $\\lambda = 500$ нм определите, дают ли $\\Delta = 1{,}25$ мкм, $1{,}5$ мкм и $2$ мкм максимум или минимум.
4. В опыте Юнга $d = 0{,}5$ мм, $L = 1{,}5$ м, $\\lambda = 600$ нм. Найдите ширину полосы.
5. В той же установке сравнивают красные полосы ($700$ нм) с синими ($400$ нм). Какие шире и во сколько раз?
6. Найдите наименьшую толщину мыльной плёнки ($n = 1{,}33$), которая сильнее всего отражает $\\lambda = 532$ нм при нормальном падении.
7. Найдите толщину просветляющего покрытия с $n = 1{,}45$ для $\\lambda = 580$ нм.
8. Почему масляная плёнка на воде показывает цвета, а толстая стеклянная пластина — нет?

### Ответы

1. Красный быстрее (меньше $n$); фиолетовый преломляется сильнее. 2. $\\sin\\beta = \\dfrac{0{,}866}{n}$: $40{,}6°$ и $40{,}2°$. 3. $2{,}5\\lambda$ — минимум; $3\\lambda$ — максимум; $4\\lambda$ — максимум. 4. $1{,}8$ мм. 5. Красные, в $1{,}75$ раза. 6. $2hn = \\dfrac{\\lambda}{2}$ (с потерей полуволны), $h = \\dfrac{\\lambda}{4n} = 100$ нм. 7. $h = \\dfrac{580}{4 \\cdot 1{,}45} = 100$ нм. 8. Для интерференции разность хода должна быть не более нескольких длин волн; в толстой пластине она составляет тысячи длин волн, разная для каждого цвета и каждой точки, и картина усредняется.`,
      },
      [
        q(t("Dispersion is the dependence of the refractive index on…", "Դիսպերսիան բեկման ցուցիչի կախվածությունն է…", "Дисперсия — это зависимость показателя преломления от…"), [t("the intensity of light", "լույսի ինտենսիվությունից", "интенсивности света"), t("the frequency of light", "լույսի հաճախությունից", "частоты света"), t("the thickness of the glass", "ապակու հաստությունից", "толщины стекла")], 1),
        q(t("In a glass prism the colour deflected most is…", "Ապակե պրիզմայում ամենաշատը շեղվում է…", "В стеклянной призме сильнее всего отклоняется…"), [t("red", "կարմիրը", "красный"), t("green", "կանաչը", "зелёный"), t("violet", "մանուշակագույնը", "фиолетовый")], 2),
        q(t("A stable interference pattern requires waves that are…", "Կայուն ինտերֆերենցային պատկերի համար անհրաժեշտ են ալիքներ, որոնք…", "Для устойчивой интерференционной картины нужны волны…"), [t("coherent", "կոհերենտ են", "когерентные"), t("of different frequencies", "տարբեր հաճախությունների են", "разных частот"), t("very intense", "շատ ինտենսիվ են", "очень интенсивные")], 0),
        q(t("A path difference of 2λ gives…", "2λ ընթացքների տարբերությունը տալիս է…", "Разность хода 2λ даёт…"), [t("a maximum", "մաքսիմում", "максимум"), t("a minimum", "մինիմում", "минимум"), t("nothing special", "ոչ մի առանձնահատուկ բան", "ничего особенного")], 0),
        q(t("In Young's experiment the fringe spacing Δx equals…", "Յունգի փորձում շերտերի լայնությունը Δx հավասար է…", "В опыте Юнга ширина полосы Δx равна…"), [t("λd/L", "λd/L", "λd/L"), t("λL/d", "λL/d", "λL/d"), t("dL/λ", "dL/λ", "dL/λ")], 1),
        q(t("The colours of a soap bubble are due to…", "Օճառի պղպջակի գույները պայմանավորված են…", "Цвета мыльного пузыря обусловлены…"), [t("dispersion in the soap", "օճառի դիսպերսիայով", "дисперсией в мыле"), t("interference of light reflected from the two surfaces", "երկու մակերևույթներից անդրադարձած լույսի ինտերֆերենցով", "интерференцией света, отражённого от двух поверхностей"), t("the colour of the soap", "օճառի գույնով", "цветом мыла")], 1),
      ],
    ),
    lesson(
      "diffraction-polarisation",
      ["Diffraction; diffraction grating; polarisation", "Դիֆրակցիա, դիֆրակցիոն ցանց, բևեռացում", "Дифракция; дифракционная решётка; поляризация"],
      {
        en: ["Explain diffraction with the Huygens–Fresnel principle and state when it is noticeable", "Apply the grating equation d sin φ = kλ to find wavelengths and the number of visible orders", "Describe polarisation as proof that light is transverse, and explain polaroids, Malus's law and polarisation by reflection"],
        hy: ["Բացատրել դիֆրակցիան Հյույգենս–Ֆրենելի սկզբունքով և նշել, թե երբ է այն նկատելի", "Կիրառել ցանցի d sin φ = kλ հավասարումն ալիքի երկարություններն ու տեսանելի կարգերի թիվը գտնելու համար", "Նկարագրել բևեռացումը որպես լույսի լայնական լինելու ապացույց և բացատրել պոլարոիդները, Մալյուսի օրենքն ու անդրադարձման բևեռացումը"],
        ru: ["Объяснять дифракцию с помощью принципа Гюйгенса–Френеля и указывать, когда она заметна", "Применять уравнение решётки d sin φ = kλ для нахождения длин волн и числа видимых порядков", "Описывать поляризацию как доказательство поперечности света и объяснять поляроиды, закон Малюса и поляризацию при отражении"],
      },
      {
        en: `## Diffraction

Geometrical optics says light travels in straight lines and an opaque edge casts a sharp shadow. In fact light **bends around obstacles** and spreads into the shadow: this is **diffraction**, common to all waves. Sound bends around a corner because its wavelength is metres; light bends only slightly because its wavelength is half a micrometre, so the effect is seen when the obstacle or slit is small, comparable to the wavelength, or when one looks carefully at the edge of a shadow.

> **Huygens–Fresnel principle.** Every point of a wavefront is a source of secondary wavelets; the wave further on is the result of the **interference** of all these wavelets.

With this principle Fresnel (1818) computed the diffraction pattern of a round hole, a disc and an edge. The pattern from a disc has a bright spot in the centre of its shadow (the Poisson spot): the prediction was meant as a refutation, but the spot was found, and the wave theory won. A single slit of width $a$ sends most light into a central band of angular half-width $\\sin\\varphi \\approx \\dfrac{\\lambda}{a}$: the narrower the slit, the wider the spread.

Diffraction limits the **resolution** of every optical instrument: two points closer than about $\\dfrac{\\lambda}{D}$ in angle (where $D$ is the aperture) blur together. A microscope cannot show details smaller than about half a wavelength, which is why electron microscopes, with wavelengths thousands of times shorter, are used for atoms.

## Diffraction grating

A **diffraction grating** is a plate with many parallel slits (or grooves) at equal spacing $d$, the **grating period**, typically $100$–$1000$ per millimetre. Light passing through the slits diffracts, and the wavelets from all slits interfere. In the direction $\\varphi$ neighbouring slits have a path difference $d\\sin\\varphi$, so all slits reinforce each other when

> $$d\\sin\\varphi = k\\lambda, \\qquad k = 0, \\pm1, \\pm2, \\ldots$$

These are the **principal maxima** of order $k$; between them the light practically cancels, so the maxima are sharp. Different wavelengths go to different angles: the grating spreads white light into spectra (one for each $k \\ne 0$), with violet nearest the centre and red furthest, the opposite of a prism. Since $\\sin\\varphi \\le 1$, the highest order is $k_{\\max} \\le \\dfrac{d}{\\lambda}$. Gratings with thousands of lines give very sharp lines and are the main tool of spectroscopy; the colours of a CD and of some butterflies are grating effects.

## Polarisation

A transverse wave on a rope can oscillate vertically, horizontally or in any plane. If the rope passes through a vertical slot, only vertical oscillations get through: the slot **polarises** the wave. A longitudinal wave has no such property. Natural light contains oscillations of $\\vec E$ in all directions perpendicular to the ray; **polarised** light has $\\vec E$ in one plane.

A **polaroid** (a film of aligned long molecules) transmits only the component of $\\vec E$ along its axis. Behind one polaroid, natural light is polarised and half as intense. A second polaroid (the **analyser**) at angle $\\alpha$ to the first transmits the fraction

> **Malus's law.** $$I = I_0\\cos^2\\alpha.$$

With crossed polaroids ($\\alpha = 90°$) no light passes. Rotating one polaroid in front of another, or in front of a laptop screen, makes the light fade and return: proof that light is a transverse wave, as Maxwell's theory requires.

Light is also partly polarised by **reflection** from glass, water or asphalt (fully when the reflected and refracted rays are perpendicular, $\\tan\\alpha_B = n$, Brewster's angle) and by **scattering** in the sky. Polarised sunglasses with a vertical axis cut the horizontally polarised glare of water and roads; photographers use polarising filters to darken the sky; polaroids in 3D cinema send different images to the two eyes; the stresses in a transparent model are seen in polarised light.

**Example 1.** A slit of width $0{.}1$ mm is lit with $\\lambda = 500$ nm. The central band has half-width $\\sin\\varphi = \\dfrac{5 \\cdot 10^{-7}}{10^{-4}} = 5 \\cdot 10^{-3}$, about $0{.}3°$; on a screen $2$ m away the band is $2$ cm wide, much wider than the slit.

**Example 2.** A grating with $500$ lines per mm has $d = 2$ μm. For $\\lambda = 600$ nm the first order is at $\\sin\\varphi = 0{.}3$, $\\varphi \\approx 17{.}5°$; the second at $\\sin\\varphi = 0{.}6$, $\\varphi \\approx 37°$; the third at $0{.}9$, $64°$; the fourth would need $\\sin\\varphi = 1{.}2$: only three orders are visible on each side.

**Example 3.** In the first order of the same grating the spectrum spans from $\\sin\\varphi = \\dfrac{0{.}4}{2} = 0{.}2$ ($11{.}5°$, violet) to $\\dfrac{0{.}76}{2} = 0{.}38$ ($22{.}3°$, red): almost $11°$ wide. The second-order spectrum ($0{.}4$ to $0{.}76$) partly overlaps the third ($0{.}6$ to $1{.}14$).

**Example 4.** A laser beam through a grating gives first-order spots $15$ cm from the centre on a screen $1$ m away. $\\tan\\varphi = 0{.}15$, $\\sin\\varphi = 0{.}148$; with $d = 4{.}2$ μm, $\\lambda = 4{.}2 \\cdot 10^{-6} \\cdot 0{.}148 \\approx 620$ nm, red.

**Example 5.** Natural light of intensity $I_0$ passes two polaroids at $60°$. After the first: $\\dfrac{I_0}{2}$; after the second: $\\dfrac{I_0}{2}\\cos^2 60° = \\dfrac{I_0}{8}$. At $30°$ it would be $\\dfrac{3I_0}{8}$.

**Example 6.** Three polaroids: the first and third are crossed, the middle one at $45°$ to each. Without the middle one nothing passes. With it: $\\dfrac{I_0}{2}\\cos^2 45°\\cos^2 45° = \\dfrac{I_0}{8}$. Inserting a polaroid between crossed ones lets light through: the middle one rotates the plane of polarisation.

**Example 7.** Brewster's angle for water: $\\tan\\alpha_B = 1{.}33$, $\\alpha_B \\approx 53°$. Sunlight reflected from a lake at this angle is fully polarised horizontally and is blocked by sunglasses with a vertical axis, so the fisherman sees into the water.

**Example 8.** Why can a radio behind a hill still receive long-wave stations but not FM? Long waves ($\\lambda \\approx 1$ km) diffract around a hill of comparable size; FM waves ($3$ m) are far smaller than the hill and cast a "radio shadow". The same comparison of wavelength with obstacle size decides whether diffraction matters.

## Exercises

1. Why is the diffraction of sound noticed every day but that of light rarely?
2. A grating has $d = 4$ μm. Find the angle of the second-order maximum for $\\lambda = 500$ nm.
3. How many orders of $\\lambda = 650$ nm can a grating with $600$ lines/mm show?
4. The first-order maximum of a grating with $200$ lines/mm is at $6{.}9°$. Find $\\lambda$.
5. Find the period of a grating whose third-order maximum for $589$ nm is at $45°$.
6. Natural light passes two polaroids whose axes make $45°$. What fraction of the intensity emerges?
7. The angle between polaroid axes is changed from $0°$ to $60°$. By what factor does the transmitted intensity fall?
8. Find Brewster's angle for glass with $n = 1{.}5$. Which polarisation does the reflected light have?

### Answers

1. Sound wavelengths (centimetres to metres) are comparable with doors and corners; light's ($0{.}5$ μm) is far smaller than everyday obstacles. 2. $\\sin\\varphi = 0{.}25$, $\\varphi \\approx 14{.}5°$. 3. $d = 1{.}67$ μm, $k \\le 2{.}56$: two orders. 4. $\\lambda = 5 \\cdot 10^{-6} \\cdot \\sin 6{.}9° \\approx 600$ nm. 5. $d = \\dfrac{3 \\cdot 589}{\\sin 45°} \\approx 2{.}5$ μm. 6. $\\dfrac{1}{2}\\cos^2 45° = \\dfrac{1}{4}$. 7. $4$ times. 8. $\\alpha_B \\approx 56{.}3°$; polarised perpendicular to the plane of incidence (parallel to the surface).`,
        hy: `## Դիֆրակցիա

Երկրաչափական օպտիկան ասում է, որ լույսը տարածվում է ուղղագիծ, և անթափանց եզրը հստակ ստվեր է գցում։ Իրականում լույսը **շրջանցում է արգելքները** և տարածվում ստվերի մեջ․ սա **դիֆրակցիան** է, որը բնորոշ է բոլոր ալիքներին։ Ձայնը շրջանցում է անկյունը, քանի որ նրա ալիքի երկարությունը մետրեր է, լույսը միայն թեթևակի է թեքվում, քանի որ նրա ալիքի երկարությունը կես միկրոմետր է, ուստի երևույթը տեսանելի է, երբ արգելքը կամ ճեղքը փոքր է՝ ալիքի երկարության կարգի, կամ երբ ուշադիր նայում են ստվերի եզրին։

> **Հյույգենս–Ֆրենելի սկզբունք։** Ալիքային ճակատի յուրաքանչյուր կետ երկրորդային ալիքիկների աղբյուր է, ալիքն ավելի հեռու այդ բոլոր ալիքիկների **ինտերֆերենցի** արդյունքն է։

Այս սկզբունքով Ֆրենելը (1818) հաշվեց կլոր անցքի, սկավառակի և եզրի դիֆրակցիոն պատկերը։ Սկավառակի պատկերն ունի լուսավոր կետ իր ստվերի կենտրոնում (Պուասոնի կետ)․ կանխատեսումը մտածված էր որպես հերքում, բայց կետը գտնվեց, և ալիքային տեսությունը հաղթեց։ $a$ լայնությամբ մեկ ճեղքը լույսի մեծ մասն ուղարկում է $\\sin\\varphi \\approx \\dfrac{\\lambda}{a}$ անկյունային կես լայնությամբ կենտրոնական շերտի մեջ․ որքան նեղ է ճեղքը, այնքան լայն է տարածումը։

Դիֆրակցիան սահմանափակում է յուրաքանչյուր օպտիկական սարքի **լուծողականությունը**․ անկյունով $\\dfrac{\\lambda}{D}$-ից մոտ երկու կետ (որտեղ $D$-ն բացվածքն է) միաձուլվում են։ Մանրադիտակը չի կարող ցույց տալ մոտավորապես կես ալիքի երկարությունից փոքր մանրամասներ, այդ պատճառով ատոմների համար օգտագործվում են էլեկտրոնային մանրադիտակներ՝ հազարավոր անգամ կարճ ալիքի երկարություններով։

## Դիֆրակցիոն ցանց

**Դիֆրակցիոն ցանցը** բազմաթիվ զուգահեռ ճեղքերով (կամ ակոսներով) թիթեղ է հավասար $d$ հեռավորությամբ՝ **ցանցի պարբերություն**, սովորաբար $100$–$1000$ մեկ միլիմետրում։ Ճեղքերով անցնող լույսը դիֆրակցվում է, և բոլոր ճեղքերի ալիքիկներն ինտերֆերենցի են ենթարկվում։ $\\varphi$ ուղղությամբ հարևան ճեղքերն ունեն $d\\sin\\varphi$ ընթացքների տարբերություն, ուստի բոլոր ճեղքերն ուժեղացնում են միմյանց, երբ

> $$d\\sin\\varphi = k\\lambda, \\qquad k = 0, \\pm1, \\pm2, \\ldots$$

Սրանք $k$ կարգի **գլխավոր մաքսիմումներն** են, դրանց միջև լույսը գործնականում չեզոքանում է, ուստի մաքսիմումները սուր են։ Տարբեր ալիքի երկարությունները գնում են տարբեր անկյուններով․ ցանցը սպիտակ լույսը բացում է սպեկտրների (յուրաքանչյուր $k \\ne 0$-ի համար մեկը), մանուշակագույնը կենտրոնին ամենամոտ, կարմիրը՝ ամենահեռու, պրիզմայի հակառակը։ Քանի որ $\\sin\\varphi \\le 1$, ամենաբարձր կարգը $k_{\\max} \\le \\dfrac{d}{\\lambda}$ է։ Հազարավոր գծերով ցանցերը տալիս են շատ սուր գծեր և սպեկտրոսկոպիայի հիմնական գործիքն են, CD-ի և որոշ թիթեռների գույները ցանցի երևույթներ են։

## Բևեռացում

Պարանի լայնական ալիքը կարող է տատանվել ուղղաձիգ, հորիզոնական կամ ցանկացած հարթությունում։ Եթե պարանն անցնում է ուղղաձիգ ճեղքով, անցնում են միայն ուղղաձիգ տատանումները․ ճեղքը **բևեռացնում** է ալիքը։ Երկայնական ալիքը նման հատկություն չունի։ Բնական լույսը պարունակում է $\\vec E$-ի տատանումներ ճառագայթին ուղղահայաց բոլոր ուղղություններով, **բևեռացված** լույսն ունի $\\vec E$ մեկ հարթությունում։

**Պոլարոիդը** (հավասարեցված երկար մոլեկուլների թաղանթ) բաց է թողնում միայն իր առանցքի երկայնքով $\\vec E$-ի բաղադրիչը։ Մեկ պոլարոիդից հետո բնական լույսը բևեռացված է և կիսով չափ ինտենսիվ։ Առաջինի հետ $\\alpha$ անկյան տակ երկրորդ պոլարոիդը (**անալիզատոր**) բաց է թողնում

> **Մալյուսի օրենք։** $$I = I_0\\cos^2\\alpha$$

Խաչված պոլարոիդների դեպքում ($\\alpha = 90°$) լույս չի անցնում։ Մեկ պոլարոիդը մյուսի առջև կամ նոթբուքի էկրանի առջև պտտելիս լույսը մարում է և վերադառնում․ ապացույց, որ լույսը լայնական ալիք է, ինչպես պահանջում է Մաքսվելի տեսությունը։

Լույսը մասամբ բևեռանում է նաև ապակուց, ջրից կամ ասֆալտից **անդրադառնալիս** (լրիվ, երբ անդրադարձած և բեկված ճառագայթներն ուղղահայաց են, $\\tan\\alpha_B = n$, Բրյուստերի անկյուն) և երկնքում **ցրվելիս**։ Ուղղաձիգ առանցքով բևեռացնող արևային ակնոցները կտրում են ջրի և ճանապարհների հորիզոնական բևեռացված փայլը, լուսանկարիչները բևեռացնող զտիչներով մգացնում են երկինքը, 3D կինոյում պոլարոիդները տարբեր պատկերներ են ուղարկում երկու աչքերին, թափանցիկ մոդելի լարումները տեսանելի են բևեռացված լույսում։

**Օրինակ 1։** $0{,}1$ մմ լայնությամբ ճեղքը լուսավորված է $\\lambda = 500$ նմ-ով։ Կենտրոնական շերտի կես լայնությունը $\\sin\\varphi = \\dfrac{5 \\cdot 10^{-7}}{10^{-4}} = 5 \\cdot 10^{-3}$ է, մոտ $0{,}3°$, $2$ մ հեռու էկրանի վրա շերտը $2$ սմ լայն է՝ ճեղքից շատ ավելի լայն։

**Օրինակ 2։** Միլիմետրում $500$ գծով ցանցն ունի $d = 2$ մկմ։ $\\lambda = 600$ նմ-ի համար առաջին կարգը $\\sin\\varphi = 0{,}3$-ում է, $\\varphi \\approx 17{,}5°$, երկրորդը՝ $\\sin\\varphi = 0{,}6$, $\\varphi \\approx 37°$, երրորդը՝ $0{,}9$, $64°$, չորրորդը կպահանջեր $\\sin\\varphi = 1{,}2$․ յուրաքանչյուր կողմում տեսանելի է միայն երեք կարգ։

**Օրինակ 3։** Նույն ցանցի առաջին կարգում սպեկտրը ձգվում է $\\sin\\varphi = \\dfrac{0{,}4}{2} = 0{,}2$-ից ($11{,}5°$, մանուշակագույն) մինչև $\\dfrac{0{,}76}{2} = 0{,}38$ ($22{,}3°$, կարմիր)․ գրեթե $11°$ լայն։ Երկրորդ կարգի սպեկտրը ($0{,}4$-ից $0{,}76$) մասամբ համընկնում է երրորդի հետ ($0{,}6$-ից $1{,}14$)։

**Օրինակ 4։** Ցանցով անցնող լազերի փունջն առաջին կարգի կետեր է տալիս կենտրոնից $15$ սմ հեռու $1$ մ հեռու էկրանի վրա։ $\\tan\\varphi = 0{,}15$, $\\sin\\varphi = 0{,}148$, $d = 4{,}2$ մկմ դեպքում $\\lambda = 4{,}2 \\cdot 10^{-6} \\cdot 0{,}148 \\approx 620$ նմ, կարմիր։

**Օրինակ 5։** $I_0$ ինտենսիվությամբ բնական լույսն անցնում է $60°$ անկյան տակ երկու պոլարոիդով։ Առաջինից հետո՝ $\\dfrac{I_0}{2}$, երկրորդից հետո՝ $\\dfrac{I_0}{2}\\cos^2 60° = \\dfrac{I_0}{8}$։ $30°$ դեպքում կլիներ $\\dfrac{3I_0}{8}$։

**Օրինակ 6։** Երեք պոլարոիդ․ առաջինն ու երրորդը խաչված են, միջինը յուրաքանչյուրի հետ $45°$ է կազմում։ Առանց միջինի ոչինչ չի անցնում։ Նրա հետ՝ $\\dfrac{I_0}{2}\\cos^2 45°\\cos^2 45° = \\dfrac{I_0}{8}$։ Խաչվածների միջև պոլարոիդ տեղադրելը լույս է բաց թողնում․ միջինը պտտում է բևեռացման հարթությունը։

**Օրինակ 7։** Բրյուստերի անկյունը ջրի համար․ $\\tan\\alpha_B = 1{,}33$, $\\alpha_B \\approx 53°$։ Լճից այս անկյան տակ անդրադարձած արևի լույսը լրիվ հորիզոնական բևեռացված է և արգելափակվում է ուղղաձիգ առանցքով ակնոցներով, ուստի ձկնորսը տեսնում է ջրի մեջ։

**Օրինակ 8։** Ինչո՞ւ բլրի հետևի ռադիոն դեռ ընդունում է երկար ալիքների կայանները, բայց ոչ ՖՄ-ն։ Երկար ալիքները ($\\lambda \\approx 1$ կմ) շրջանցում են համեմատելի չափի բլուրը, ՖՄ ալիքները ($3$ մ) բլրից շատ փոքր են և «ռադիոստվեր» են գցում։ Ալիքի երկարության և արգելքի չափի նույն համեմատությունը որոշում է, թե դիֆրակցիան կարևոր է, թե ոչ։

## Վարժություններ

1. Ինչո՞ւ է ձայնի դիֆրակցիան ամեն օր նկատվում, իսկ լույսինը՝ հազվադեպ։
2. Ցանցն ունի $d = 4$ մկմ։ Գտեք երկրորդ կարգի մաքսիմումի անկյունը $\\lambda = 500$ նմ-ի համար։
3. Քանի՞ կարգ կարող է ցույց տալ $600$ գիծ/մմ ցանցը $\\lambda = 650$ նմ-ի համար։
4. $200$ գիծ/մմ ցանցի առաջին կարգի մաքսիմումը $6{,}9°$-ում է։ Գտեք $\\lambda$-ն։
5. Գտեք այն ցանցի պարբերությունը, որի երրորդ կարգի մաքսիմումը $589$ նմ-ի համար $45°$-ում է։
6. Բնական լույսն անցնում է երկու պոլարոիդով, որոնց առանցքները կազմում են $45°$։ Ինտենսիվության ո՞ր մասն է դուրս գալիս։
7. Պոլարոիդների առանցքների անկյունը $0°$-ից փոխում են $60°$։ Քանի՞ անգամ է նվազում անցած ինտենսիվությունը։
8. Գտեք Բրյուստերի անկյունը $n = 1{,}5$ ապակու համար։ Ի՞նչ բևեռացում ունի անդրադարձած լույսը։

### Պատասխաններ

1. Ձայնի ալիքի երկարությունները (սանտիմետրից մինչև մետրեր) համեմատելի են դռների և անկյունների հետ, լույսինը ($0{,}5$ մկմ) առօրյա արգելքներից շատ փոքր է։ 2. $\\sin\\varphi = 0{,}25$, $\\varphi \\approx 14{,}5°$։ 3. $d = 1{,}67$ մկմ, $k \\le 2{,}56$․ երկու կարգ։ 4. $\\lambda = 5 \\cdot 10^{-6} \\cdot \\sin 6{,}9° \\approx 600$ նմ։ 5. $d = \\dfrac{3 \\cdot 589}{\\sin 45°} \\approx 2{,}5$ մկմ։ 6. $\\dfrac{1}{2}\\cos^2 45° = \\dfrac{1}{4}$։ 7. $4$ անգամ։ 8. $\\alpha_B \\approx 56{,}3°$, բևեռացված է անկման հարթությանն ուղղահայաց (մակերևույթին զուգահեռ)։`,
        ru: `## Дифракция

Геометрическая оптика говорит, что свет идёт по прямой, а непрозрачный край отбрасывает резкую тень. На самом деле свет **огибает препятствия** и заходит в область тени: это **дифракция**, свойственная всем волнам. Звук огибает угол, потому что его длина волны — метры; свет отклоняется едва заметно, потому что его длина волны — полмикрометра, поэтому эффект виден, когда препятствие или щель малы, сравнимы с длиной волны, или когда внимательно смотрят на край тени.

> **Принцип Гюйгенса–Френеля.** Каждая точка волнового фронта — источник вторичных волн; волна дальше есть результат **интерференции** всех этих вторичных волн.

С помощью этого принципа Френель (1818) рассчитал дифракционную картину от круглого отверстия, диска и края. Картина от диска имеет светлое пятно в центре его тени (пятно Пуассона): предсказание задумывалось как опровержение, но пятно нашли, и волновая теория победила. Одна щель шириной $a$ посылает большую часть света в центральную полосу с угловой полушириной $\\sin\\varphi \\approx \\dfrac{\\lambda}{a}$: чем уже щель, тем шире разброс.

Дифракция ограничивает **разрешающую способность** любого оптического прибора: две точки, угловое расстояние между которыми меньше примерно $\\dfrac{\\lambda}{D}$ (где $D$ — апертура), сливаются. Микроскоп не может показать детали меньше примерно половины длины волны, поэтому для атомов применяют электронные микроскопы с длинами волн в тысячи раз короче.

## Дифракционная решётка

**Дифракционная решётка** — пластинка с множеством параллельных щелей (или штрихов) на равном расстоянии $d$, **периоде решётки**, обычно $100$–$1000$ на миллиметр. Свет, проходя через щели, дифрагирует, и вторичные волны от всех щелей интерферируют. В направлении $\\varphi$ соседние щели имеют разность хода $d\\sin\\varphi$, так что все щели усиливают друг друга, когда

> $$d\\sin\\varphi = k\\lambda, \\qquad k = 0, \\pm1, \\pm2, \\ldots$$

Это **главные максимумы** порядка $k$; между ними свет практически гасится, поэтому максимумы резкие. Разные длины волн идут под разными углами: решётка разворачивает белый свет в спектры (по одному на каждое $k \\ne 0$), с фиолетовым ближе к центру и красным дальше всего — наоборот по сравнению с призмой. Поскольку $\\sin\\varphi \\le 1$, наибольший порядок $k_{\\max} \\le \\dfrac{d}{\\lambda}$. Решётки с тысячами штрихов дают очень резкие линии и являются главным инструментом спектроскопии; цвета компакт-диска и некоторых бабочек — эффекты решётки.

## Поляризация

Поперечная волна на верёвке может колебаться вертикально, горизонтально или в любой плоскости. Если верёвка проходит через вертикальную щель, проходят только вертикальные колебания: щель **поляризует** волну. У продольной волны такого свойства нет. Естественный свет содержит колебания $\\vec E$ во всех направлениях, перпендикулярных лучу; **поляризованный** свет имеет $\\vec E$ в одной плоскости.

**Поляроид** (плёнка из выстроенных длинных молекул) пропускает только составляющую $\\vec E$ вдоль своей оси. За одним поляроидом естественный свет поляризован и вдвое слабее. Второй поляроид (**анализатор**) под углом $\\alpha$ к первому пропускает долю

> **Закон Малюса.** $$I = I_0\\cos^2\\alpha.$$

При скрещенных поляроидах ($\\alpha = 90°$) свет не проходит. Вращение одного поляроида перед другим или перед экраном ноутбука заставляет свет гаснуть и возвращаться: доказательство, что свет — поперечная волна, как требует теория Максвелла.

Свет частично поляризуется и при **отражении** от стекла, воды или асфальта (полностью, когда отражённый и преломлённый лучи перпендикулярны, $\\tan\\alpha_B = n$, угол Брюстера) и при **рассеянии** в небе. Поляризационные солнечные очки с вертикальной осью срезают горизонтально поляризованные блики воды и дорог; фотографы поляризационными фильтрами затемняют небо; поляроиды в 3D-кино посылают разные изображения в два глаза; напряжения в прозрачной модели видны в поляризованном свете.

**Пример 1.** Щель шириной $0{,}1$ мм освещена светом $\\lambda = 500$ нм. Центральная полоса имеет полуширину $\\sin\\varphi = \\dfrac{5 \\cdot 10^{-7}}{10^{-4}} = 5 \\cdot 10^{-3}$, около $0{,}3°$; на экране в $2$ м полоса имеет ширину $2$ см — гораздо шире щели.

**Пример 2.** Решётка с $500$ штрихами на мм имеет $d = 2$ мкм. Для $\\lambda = 600$ нм первый порядок при $\\sin\\varphi = 0{,}3$, $\\varphi \\approx 17{,}5°$; второй при $\\sin\\varphi = 0{,}6$, $\\varphi \\approx 37°$; третий при $0{,}9$, $64°$; четвёртому потребовалось бы $\\sin\\varphi = 1{,}2$: видны только три порядка с каждой стороны.

**Пример 3.** В первом порядке той же решётки спектр простирается от $\\sin\\varphi = \\dfrac{0{,}4}{2} = 0{,}2$ ($11{,}5°$, фиолетовый) до $\\dfrac{0{,}76}{2} = 0{,}38$ ($22{,}3°$, красный): почти $11°$ шириной. Спектр второго порядка ($0{,}4$ до $0{,}76$) частично перекрывается с третьим ($0{,}6$ до $1{,}14$).

**Пример 4.** Луч лазера через решётку даёт пятна первого порядка в $15$ см от центра на экране в $1$ м. $\\tan\\varphi = 0{,}15$, $\\sin\\varphi = 0{,}148$; при $d = 4{,}2$ мкм $\\lambda = 4{,}2 \\cdot 10^{-6} \\cdot 0{,}148 \\approx 620$ нм, красный.

**Пример 5.** Естественный свет интенсивности $I_0$ проходит два поляроида под $60°$. После первого: $\\dfrac{I_0}{2}$; после второго: $\\dfrac{I_0}{2}\\cos^2 60° = \\dfrac{I_0}{8}$. При $30°$ было бы $\\dfrac{3I_0}{8}$.

**Пример 6.** Три поляроида: первый и третий скрещены, средний под $45°$ к каждому. Без среднего ничего не проходит. С ним: $\\dfrac{I_0}{2}\\cos^2 45°\\cos^2 45° = \\dfrac{I_0}{8}$. Вставка поляроида между скрещенными пропускает свет: средний поворачивает плоскость поляризации.

**Пример 7.** Угол Брюстера для воды: $\\tan\\alpha_B = 1{,}33$, $\\alpha_B \\approx 53°$. Солнечный свет, отражённый от озера под этим углом, полностью поляризован горизонтально и задерживается очками с вертикальной осью, так что рыбак видит сквозь воду.

**Пример 8.** Почему радиоприёмник за холмом ещё принимает длинноволновые станции, но не FM? Длинные волны ($\\lambda \\approx 1$ км) огибают холм сравнимого размера; волны FM ($3$ м) гораздо меньше холма и образуют «радиотень». То же сравнение длины волны с размером препятствия решает, важна ли дифракция.

## Упражнения

1. Почему дифракцию звука замечают каждый день, а дифракцию света — редко?
2. Решётка имеет $d = 4$ мкм. Найдите угол максимума второго порядка для $\\lambda = 500$ нм.
3. Сколько порядков для $\\lambda = 650$ нм может показать решётка с $600$ штрихами/мм?
4. Максимум первого порядка решётки с $200$ штрихами/мм находится под $6{,}9°$. Найдите $\\lambda$.
5. Найдите период решётки, у которой максимум третьего порядка для $589$ нм находится под $45°$.
6. Естественный свет проходит два поляроида, оси которых составляют $45°$. Какая доля интенсивности выходит?
7. Угол между осями поляроидов меняют от $0°$ до $60°$. Во сколько раз падает прошедшая интенсивность?
8. Найдите угол Брюстера для стекла с $n = 1{,}5$. Какую поляризацию имеет отражённый свет?

### Ответы

1. Длины волн звука (сантиметры–метры) сравнимы с дверями и углами; длина волны света ($0{,}5$ мкм) гораздо меньше бытовых препятствий. 2. $\\sin\\varphi = 0{,}25$, $\\varphi \\approx 14{,}5°$. 3. $d = 1{,}67$ мкм, $k \\le 2{,}56$: два порядка. 4. $\\lambda = 5 \\cdot 10^{-6} \\cdot \\sin 6{,}9° \\approx 600$ нм. 5. $d = \\dfrac{3 \\cdot 589}{\\sin 45°} \\approx 2{,}5$ мкм. 6. $\\dfrac{1}{2}\\cos^2 45° = \\dfrac{1}{4}$. 7. В $4$ раза. 8. $\\alpha_B \\approx 56{,}3°$; поляризован перпендикулярно плоскости падения (параллельно поверхности).`,
      },
      [
        q(t("Diffraction of light is most noticeable when the obstacle is…", "Լույսի դիֆրակցիան առավել նկատելի է, երբ արգելքը…", "Дифракция света наиболее заметна, когда препятствие…"), [t("much larger than the wavelength", "ալիքի երկարությունից շատ մեծ է", "много больше длины волны"), t("comparable to the wavelength", "համեմատելի է ալիքի երկարության հետ", "сравнимо с длиной волны"), t("made of metal", "մետաղից է", "сделано из металла")], 1),
        q(t("The grating equation is…", "Ցանցի հավասարումն է…", "Уравнение решётки:"), [t("d sin φ = kλ", "d sin φ = kλ", "d sin φ = kλ"), t("d cos φ = kλ", "d cos φ = kλ", "d cos φ = kλ"), t("λ sin φ = kd", "λ sin φ = kd", "λ sin φ = kd")], 0),
        q(t("In a grating spectrum, which colour is furthest from the centre?", "Ցանցի սպեկտրում ո՞ր գույնն է կենտրոնից ամենահեռու։", "В спектре решётки какой цвет дальше всего от центра?"), [t("violet", "մանուշակագույնը", "фиолетовый"), t("green", "կանաչը", "зелёный"), t("red", "կարմիրը", "красный")], 2),
        q(t("Polarisation proves that light is…", "Բևեռացումն ապացուցում է, որ լույսը…", "Поляризация доказывает, что свет —"), [t("a longitudinal wave", "երկայնական ալիք է", "продольная волна"), t("a transverse wave", "լայնական ալիք է", "поперечная волна"), t("a stream of particles", "մասնիկների հոսք է", "поток частиц")], 1),
        q(t("Two polaroids at 60°: polarised light of intensity I₀ emerges with…", "Երկու պոլարոիդ 60°-ի տակ․ I₀ ինտենսիվությամբ բևեռացված լույսը դուրս է գալիս…", "Два поляроида под 60°: поляризованный свет интенсивности I₀ выходит с…"), [t("I₀/4", "I₀/4 ինտենսիվությամբ", "I₀/4"), t("I₀/2", "I₀/2 ինտենսիվությամբ", "I₀/2"), t("3I₀/4", "3I₀/4 ինտենսիվությամբ", "3I₀/4")], 0),
        q(t("Crossed polaroids (90°) transmit…", "Խաչված պոլարոիդները (90°) բաց են թողնում…", "Скрещенные поляроиды (90°) пропускают…"), [t("all the light", "ամբողջ լույսը", "весь свет"), t("half the light", "լույսի կեսը", "половину света"), t("no light", "ոչ մի լույս", "никакого света")], 2),
      ],
    ),
  ],
};
