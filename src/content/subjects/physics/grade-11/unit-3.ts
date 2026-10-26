import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Waves", "Ալիքներ", "Механические и электромагнитные волны"),
  summary: t("Wave properties, sound, electromagnetic waves, radio, interference and diffraction.", "Ալիքների հատկություններ, ձայն, էլեկտրամագնիսական ալիքներ, ռադիո, ինտերֆերենց և դիֆրակցիա։", "Свойства волн, звук, электромагнитные волны, радио, интерференция и дифракция."),
  lessons: [
    lesson(
      "wave-equation",
      ["Wave equation; speed, wavelength, frequency", "Ալիքի հավասարում, արագություն, երկարություն, հաճախություն", "Уравнение волны; скорость, длина волны, частота"],
      {
        en: ["Distinguish transverse and longitudinal waves and relate speed, wavelength and frequency by v = λν", "Write the equation of a travelling wave s = A cos ω(t − x/v) and read off its parameters", "Describe sound: its speed in different media, pitch, loudness, timbre, and the Doppler effect qualitatively"],
        hy: ["Տարբերել լայնական և երկայնական ալիքները և կապել արագությունը, ալիքի երկարությունն ու հաճախությունը v = λν բանաձևով", "Գրել վազող ալիքի s = A cos ω(t − x/v) հավասարումը և որոշել նրա պարամետրերը", "Նկարագրել ձայնը․ արագությունը տարբեր միջավայրերում, բարձրություն, ուժգնություն, տեմբր և Դոպլերի երևույթը որակապես"],
        ru: ["Различать поперечные и продольные волны и связывать скорость, длину волны и частоту формулой v = λν", "Записывать уравнение бегущей волны s = A cos ω(t − x/v) и определять его параметры", "Описывать звук: его скорость в разных средах, высоту, громкость, тембр и качественно эффект Доплера"],
      },
      {
        en: `## What a wave is

Shake the end of a rope: a hump runs along it. Each piece of the rope only moves up and down, yet the disturbance travels far. A **mechanical wave** is a disturbance that propagates through an elastic medium, carrying **energy** but not the medium itself.

- In a **transverse** wave the particles move perpendicular to the direction of propagation (rope, surface of water, light).
- In a **longitudinal** wave they move along it, forming compressions and rarefactions (sound, a spring pushed along its axis).

Transverse waves exist only where the medium resists shear, so inside liquids and gases only longitudinal waves travel; both kinds travel in solids, which is how seismologists know that the Earth's outer core is liquid.

## Wavelength, speed, frequency

The source oscillates with period $T$ and frequency $\\nu$. In one period the disturbance travels a distance called the **wavelength** $\\lambda$: the distance between two nearest points oscillating in the same phase (two crests).

> $$v = \\dfrac{\\lambda}{T} = \\lambda\\nu.$$

The frequency is set by the source; the speed is set by the medium (its elasticity and density); the wavelength adjusts: $\\lambda = \\dfrac{v}{\\nu}$. When a wave passes into another medium its frequency stays the same and its wavelength changes.

Typical speeds: sound in air $340$ m/s, in water $1500$ m/s, in steel $5000$ m/s; waves on a string $v = \\sqrt{\\dfrac{F}{\\mu}}$ ($F$ tension, $\\mu$ mass per unit length).

## Equation of a travelling wave

If the source at $x = 0$ oscillates as $s = A\\cos\\omega t$, the point at distance $x$ repeats the same motion with a delay $\\dfrac{x}{v}$:

> $$s(x, t) = A\\cos\\omega\\left(t - \\dfrac{x}{v}\\right) = A\\cos(\\omega t - kx), \\qquad k = \\dfrac{2\\pi}{\\lambda}.$$

At a fixed $x$ this is a harmonic oscillation in time; at a fixed $t$ it is a cosine in space with period $\\lambda$. The phase difference between two points a distance $d$ apart is $\\Delta\\varphi = \\dfrac{2\\pi d}{\\lambda}$.

Waves carry energy: the intensity (energy per second per unit area) is proportional to $A^2\\nu^2$. A spherical wave from a point source spreads over a growing sphere, so its intensity falls as $\\dfrac{1}{r^2}$ and its amplitude as $\\dfrac{1}{r}$.

## Sound

Sound is a longitudinal wave with frequencies from $16$ Hz to $20$ kHz that the ear can perceive; below is **infrasound**, above is **ultrasound** (bats, medical scanners, sonar). Sound needs a medium: a bell in a vacuum is silent.

- **Pitch** is set by the frequency: a violin's A is $440$ Hz, the lowest piano key $27{.}5$ Hz.
- **Loudness** is set by the amplitude (intensity); it is measured in decibels on a logarithmic scale, where $+10$ dB means $10$ times the intensity.
- **Timbre** is set by the overtones mixed with the main frequency; it lets us tell a flute from a violin playing the same note.

**Doppler effect.** When a source and an observer approach each other, the observer receives more wave crests per second and hears a higher pitch; when they recede, a lower one. This is the drop in pitch of a passing siren, and the same effect for light tells astronomers that distant galaxies recede.

**Example 1.** Sound at $440$ Hz in air ($340$ m/s): $\\lambda = \\dfrac{340}{440} \\approx 0{.}77$ m. The same note in water: $\\lambda = \\dfrac{1500}{440} \\approx 3{.}4$ m. Frequency unchanged, wavelength $4{.}4$ times larger.

**Example 2.** Waves on a lake pass a fisherman's float $20$ times per minute, and neighbouring crests are $1{.}5$ m apart. $\\nu = \\dfrac{1}{3}$ Hz, $v = 1{.}5 \\cdot \\dfrac{1}{3} = 0{.}5$ m/s.

**Example 3.** Lightning is seen and the thunder arrives $6$ s later. Distance $\\approx 340 \\cdot 6 \\approx 2$ km (the light arrives practically instantly). A rule of thumb: $3$ s per kilometre.

**Example 4.** $s = 0{.}02\\cos(200\\pi t - 2\\pi x)$ (SI). $\\omega = 200\\pi$ rad/s, so $\\nu = 100$ Hz; $k = 2\\pi$ m⁻¹, so $\\lambda = 1$ m; $v = \\lambda\\nu = 100$ m/s; amplitude $2$ cm.

**Example 5.** Two points of a medium $0{.}25$ m apart along the direction of a $1$ m wave oscillate with phase difference $\\Delta\\varphi = \\dfrac{2\\pi \\cdot 0{.}25}{1} = \\dfrac{\\pi}{2}$: when one is at a crest the other is passing through equilibrium.

**Example 6.** A string of length $0{.}65$ m with mass $0{.}5$ g is tensioned by $F = 80$ N. $\\mu = \\dfrac{5 \\cdot 10^{-4}}{0{.}65} \\approx 7{.}7 \\cdot 10^{-4}$ kg/m, $v = \\sqrt{\\dfrac{80}{7{.}7 \\cdot 10^{-4}}} \\approx 322$ m/s. The fundamental mode has $\\lambda = 2l = 1{.}3$ m, so $\\nu = \\dfrac{322}{1{.}3} \\approx 248$ Hz, close to B below middle C. Tightening the string raises the pitch.

**Example 7.** An ultrasound scanner at $5$ MHz in tissue ($v \\approx 1540$ m/s) has $\\lambda \\approx 0{.}3$ mm, which sets the finest detail the image can show. A bat's $100$ kHz call in air has $\\lambda = 3{.}4$ mm, enough to detect a mosquito.

**Example 8.** Why does a sound get $10$ dB quieter when the intensity is divided by $10$, but $20$ dB quieter when divided by $100$? The decibel scale is logarithmic: $L = 10\\lg\\dfrac{I}{I_0}$. Dividing $I$ by $100 = 10^2$ subtracts $2 \\cdot 10 = 20$ dB. Doubling the intensity adds only $3$ dB, which is why two identical speakers sound barely louder than one.

## Exercises

1. Find the wavelength of a $2$ kHz sound in air ($340$ m/s) and in steel ($5000$ m/s).
2. A wave with $\\lambda = 4$ m travels at $20$ m/s. Find the period and the frequency.
3. A sea wave passes a buoy every $5$ s, and the distance between crests is $30$ m. Find the speed.
4. For $s = 0{.}1\\cos(4\\pi t - 0{.}5\\pi x)$ (SI) find $\\nu$, $\\lambda$ and $v$.
5. Two points $1{.}5$ m apart along a wave of wavelength $6$ m: find the phase difference.
6. An echo returns $1{.}2$ s after a shout. How far is the wall?
7. A string $0{.}5$ m long has mass $2$ g and tension $200$ N. Find the wave speed and the fundamental frequency.
8. A siren's pitch sounds higher as the ambulance approaches. Which quantity, frequency or wave speed, changes for the listener, and why?

### Answers

1. $0{.}17$ m, $2{.}5$ m. 2. $T = 0{.}2$ s, $\\nu = 5$ Hz. 3. $6$ m/s. 4. $\\nu = 2$ Hz, $\\lambda = 4$ m, $v = 8$ m/s. 5. $\\dfrac{\\pi}{2}$. 6. $\\dfrac{340 \\cdot 1{.}2}{2} \\approx 204$ m. 7. $\\mu = 0{.}004$ kg/m, $v = \\sqrt{50000} \\approx 224$ m/s, $\\nu = \\dfrac{v}{2l} \\approx 224$ Hz. 8. The frequency received: the crests arrive more often because the source moves toward the listener; the wave speed in air is unchanged.`,
        hy: `## Ի՞նչ է ալիքը

Թափահարեք պարանի ծայրը․ նրանով կույտ է վազում։ Պարանի յուրաքանչյուր կտոր միայն վեր ու վար է շարժվում, սակայն գրգռումը հեռու է տարածվում։ **Մեխանիկական ալիքը** առաձգական միջավայրում տարածվող գրգռում է, որը տեղափոխում է **էներգիա**, բայց ոչ հենց միջավայրը։

- **Լայնական** ալիքում մասնիկները շարժվում են տարածման ուղղությանն ուղղահայաց (պարան, ջրի մակերևույթ, լույս)։
- **Երկայնական** ալիքում՝ դրա երկայնքով՝ առաջացնելով խտացումներ և նոսրացումներ (ձայն, առանցքի երկայնքով հրված զսպանակ)։

Լայնական ալիքները գոյություն ունեն միայն այնտեղ, որտեղ միջավայրը դիմադրում է սահքին, ուստի հեղուկների և գազերի ներսում տարածվում են միայն երկայնական ալիքներ, իսկ պինդ մարմիններում՝ երկու տեսակն էլ, այսպես են սեյսմոլոգներն իմացել, որ Երկրի արտաքին միջուկը հեղուկ է։

## Ալիքի երկարություն, արագություն, հաճախություն

Աղբյուրը տատանվում է $T$ պարբերությամբ և $\\nu$ հաճախությամբ։ Մեկ պարբերության ընթացքում գրգռումն անցնում է **ալիքի երկարություն** $\\lambda$ կոչվող հեռավորություն․ նույն փուլով տատանվող երկու մոտակա կետերի (երկու կատարների) հեռավորությունը։

> $$v = \\dfrac{\\lambda}{T} = \\lambda\\nu$$

Հաճախությունը որոշվում է աղբյուրով, արագությունը՝ միջավայրով (նրա առաձգականությամբ և խտությամբ), իսկ ալիքի երկարությունը համապատասխանեցվում է․ $\\lambda = \\dfrac{v}{\\nu}$։ Երբ ալիքն անցնում է այլ միջավայր, հաճախությունը մնում է նույնը, իսկ ալիքի երկարությունը փոխվում է։

Բնորոշ արագություններ․ ձայնն օդում՝ $340$ մ/վ, ջրում՝ $1500$ մ/վ, պողպատում՝ $5000$ մ/վ, ալիքները լարի վրա՝ $v = \\sqrt{\\dfrac{F}{\\mu}}$ ($F$-ը լարվածությունն է, $\\mu$-ն՝ միավոր երկարության զանգվածը)։

## Վազող ալիքի հավասարում

Եթե $x = 0$ կետի աղբյուրը տատանվում է $s = A\\cos\\omega t$ օրենքով, ապա $x$ հեռավորության կետը կրկնում է նույն շարժումը $\\dfrac{x}{v}$ ուշացումով․

> $$s(x, t) = A\\cos\\omega\\left(t - \\dfrac{x}{v}\\right) = A\\cos(\\omega t - kx), \\qquad k = \\dfrac{2\\pi}{\\lambda}$$

Ֆիքսված $x$-ի դեպքում սա հարմոնիկ տատանում է ժամանակով, ֆիքսված $t$-ի դեպքում՝ կոսինուսոիդ տարածության մեջ՝ $\\lambda$ պարբերությամբ։ Իրարից $d$ հեռավորության վրա գտնվող երկու կետերի փուլերի տարբերությունը $\\Delta\\varphi = \\dfrac{2\\pi d}{\\lambda}$ է։

Ալիքները տեղափոխում են էներգիա․ ինտենսիվությունը (էներգիան մեկ վայրկյանում միավոր մակերեսով) համեմատական է $A^2\\nu^2$-ին։ Կետային աղբյուրի գնդային ալիքը տարածվում է աճող գնդի վրա, ուստի նրա ինտենսիվությունը նվազում է $\\dfrac{1}{r^2}$-ի, իսկ լայնույթը՝ $\\dfrac{1}{r}$-ի համեմատ։

## Ձայն

Ձայնն երկայնական ալիք է $16$ Հց-ից մինչև $20$ կՀց հաճախությամբ, որն ականջն ընկալում է, դրանից ցածրը **ինֆրաձայնն** է, բարձրը՝ **ուլտրաձայնը** (չղջիկներ, բժշկական սարքեր, սոնար)։ Ձայնին միջավայր է անհրաժեշտ․ զանգը վակուումում լուռ է։

- **Բարձրությունը** որոշվում է հաճախությամբ․ ջութակի «լյա»-ն $440$ Հց է, դաշնամուրի ամենացածր ստեղնը՝ $27{,}5$ Հց։
- **Ուժգնությունը** որոշվում է լայնույթով (ինտենսիվությամբ), այն չափվում է դեցիբելներով՝ լոգարիթմական սանդղակով, որտեղ $+10$ դԲ նշանակում է $10$ անգամ մեծ ինտենսիվություն։
- **Տեմբրը** որոշվում է հիմնական հաճախությանը խառնված երանգներով, այն թույլ է տալիս տարբերել նույն նոտան նվագող ֆլեյտան ջութակից։

**Դոպլերի երևույթ։** Երբ աղբյուրն ու դիտորդը մոտենում են իրար, դիտորդը վայրկյանում ավելի շատ ալիքի կատարներ է ընդունում և ավելի բարձր ձայն լսում, երբ հեռանում են՝ ավելի ցածր։ Սա անցնող շչակի ձայնի բարձրության անկումն է, և լույսի համար նույն երևույթն աստղագետներին ասում է, որ հեռավոր գալակտիկաները հեռանում են։

**Օրինակ 1։** $440$ Հց ձայնն օդում ($340$ մ/վ)․ $\\lambda = \\dfrac{340}{440} \\approx 0{,}77$ մ։ Նույն նոտան ջրում․ $\\lambda = \\dfrac{1500}{440} \\approx 3{,}4$ մ։ Հաճախությունն անփոփոխ է, ալիքի երկարությունը՝ $4{,}4$ անգամ մեծ։

**Օրինակ 2։** Լճի ալիքները ձկնորսի լողանի մոտով անցնում են րոպեում $20$ անգամ, իսկ հարևան կատարների հեռավորությունը $1{,}5$ մ է։ $\\nu = \\dfrac{1}{3}$ Հց, $v = 1{,}5 \\cdot \\dfrac{1}{3} = 0{,}5$ մ/վ։

**Օրինակ 3։** Կայծակը տեսնում են, իսկ որոտը հասնում է $6$ վ հետո։ Հեռավորությունը $\\approx 340 \\cdot 6 \\approx 2$ կմ (լույսը հասնում է գործնականում ակնթարթորեն)։ Գործնական կանոն․ $3$ վ մեկ կիլոմետրին։

**Օրինակ 4։** $s = 0{,}02\\cos(200\\pi t - 2\\pi x)$ (ՄՀ)։ $\\omega = 200\\pi$ ռադ/վ, ուստի $\\nu = 100$ Հց, $k = 2\\pi$ մ⁻¹, ուստի $\\lambda = 1$ մ, $v = \\lambda\\nu = 100$ մ/վ, լայնույթը $2$ սմ։

**Օրինակ 5։** $1$ մ ալիքի ուղղությամբ իրարից $0{,}25$ մ հեռավորության վրա գտնվող միջավայրի երկու կետերը տատանվում են $\\Delta\\varphi = \\dfrac{2\\pi \\cdot 0{,}25}{1} = \\dfrac{\\pi}{2}$ փուլերի տարբերությամբ․ երբ մեկը կատարին է, մյուսն անցնում է հավասարակշռության դիրքով։

**Օրինակ 6։** $0{,}65$ մ երկարությամբ, $0{,}5$ գ զանգվածով լարը ձգված է $F = 80$ Ն ուժով։ $\\mu = \\dfrac{5 \\cdot 10^{-4}}{0{,}65} \\approx 7{,}7 \\cdot 10^{-4}$ կգ/մ, $v = \\sqrt{\\dfrac{80}{7{,}7 \\cdot 10^{-4}}} \\approx 322$ մ/վ։ Հիմնական տոնն ունի $\\lambda = 2l = 1{,}3$ մ, ուստի $\\nu = \\dfrac{322}{1{,}3} \\approx 248$ Հց՝ առաջին օկտավայի «դո»-ից ցածր «սի»-ին մոտ։ Լարը ձգելը բարձրացնում է ձայնը։

**Օրինակ 7։** Հյուսվածքում ($v \\approx 1540$ մ/վ) $5$ ՄՀց ուլտրաձայնային սարքն ունի $\\lambda \\approx 0{,}3$ մմ, որը որոշում է պատկերի ամենափոքր մանրամասնությունը։ Չղջիկի $100$ կՀց կանչն օդում ունի $\\lambda = 3{,}4$ մմ, ինչը բավական է մոծակ հայտնաբերելու համար։

**Օրինակ 8։** Ինչո՞ւ է ձայնը $10$ դԲ-ով լռում, երբ ինտենսիվությունը բաժանվում է $10$-ի, բայց $20$ դԲ-ով, երբ բաժանվում է $100$-ի։ Դեցիբելային սանդղակը լոգարիթմական է․ $L = 10\\lg\\dfrac{I}{I_0}$։ $I$-ն $100 = 10^2$-ի բաժանելը հանում է $2 \\cdot 10 = 20$ դԲ։ Ինտենսիվության կրկնապատկումն ավելացնում է ընդամենը $3$ դԲ, այդ պատճառով երկու միատեսակ բարձրախոս հազիվ են ավելի բարձր հնչում, քան մեկը։

## Վարժություններ

1. Գտեք $2$ կՀց ձայնի ալիքի երկարությունն օդում ($340$ մ/վ) և պողպատում ($5000$ մ/վ)։
2. $\\lambda = 4$ մ ալիքը տարածվում է $20$ մ/վ արագությամբ։ Գտեք պարբերությունն ու հաճախությունը։
3. Ծովի ալիքը բոյի մոտով անցնում է ամեն $5$ վ-ը մեկ, իսկ կատարների հեռավորությունը $30$ մ է։ Գտեք արագությունը։
4. $s = 0{,}1\\cos(4\\pi t - 0{,}5\\pi x)$ (ՄՀ) ալիքի համար գտեք $\\nu$-ն, $\\lambda$-ն և $v$-ն։
5. $6$ մ երկարությամբ ալիքի երկայնքով իրարից $1{,}5$ մ հեռու երկու կետ․ գտեք փուլերի տարբերությունը։
6. Արձագանքը վերադառնում է բղավոցից $1{,}2$ վ հետո։ Որքա՞ն է հեռու պատը։
7. $0{,}5$ մ երկարությամբ լարն ունի $2$ գ զանգված և $200$ Ն լարվածություն։ Գտեք ալիքի արագությունն ու հիմնական հաճախությունը։
8. Շչակի ձայնն ավելի բարձր է հնչում, երբ շտապօգնությունը մոտենում է։ Ո՞ր մեծությունն է փոխվում լսողի համար՝ հաճախությո՞ւնը, թե՞ ալիքի արագությունը, և ինչու։

### Պատասխաններ

1. $0{,}17$ մ, $2{,}5$ մ։ 2. $T = 0{,}2$ վ, $\\nu = 5$ Հց։ 3. $6$ մ/վ։ 4. $\\nu = 2$ Հց, $\\lambda = 4$ մ, $v = 8$ մ/վ։ 5. $\\dfrac{\\pi}{2}$։ 6. $\\dfrac{340 \\cdot 1{,}2}{2} \\approx 204$ մ։ 7. $\\mu = 0{,}004$ կգ/մ, $v = \\sqrt{50000} \\approx 224$ մ/վ, $\\nu = \\dfrac{v}{2l} \\approx 224$ Հց։ 8. Ընդունվող հաճախությունը․ կատարներն ավելի հաճախ են հասնում, քանի որ աղբյուրը շարժվում է դեպի լսողը, ալիքի արագությունն օդում անփոփոխ է։`,
        ru: `## Что такое волна

Встряхните конец верёвки: по ней побежит горб. Каждый кусок верёвки движется только вверх и вниз, а возмущение уходит далеко. **Механическая волна** — это возмущение, распространяющееся в упругой среде и переносящее **энергию**, но не саму среду.

- В **поперечной** волне частицы движутся перпендикулярно направлению распространения (верёвка, поверхность воды, свет).
- В **продольной** — вдоль него, образуя сгущения и разрежения (звук, пружина, толкаемая вдоль оси).

Поперечные волны существуют только там, где среда сопротивляется сдвигу, поэтому внутри жидкостей и газов идут только продольные волны; в твёрдых телах — оба вида, и так сейсмологи узнали, что внешнее ядро Земли жидкое.

## Длина волны, скорость, частота

Источник колеблется с периодом $T$ и частотой $\\nu$. За один период возмущение проходит расстояние, называемое **длиной волны** $\\lambda$: расстояние между двумя ближайшими точками, колеблющимися в одной фазе (двумя гребнями).

> $$v = \\dfrac{\\lambda}{T} = \\lambda\\nu.$$

Частота задаётся источником; скорость — средой (её упругостью и плотностью); длина волны подстраивается: $\\lambda = \\dfrac{v}{\\nu}$. При переходе волны в другую среду её частота сохраняется, а длина волны меняется.

Характерные скорости: звук в воздухе $340$ м/с, в воде $1500$ м/с, в стали $5000$ м/с; волны на струне $v = \\sqrt{\\dfrac{F}{\\mu}}$ ($F$ — натяжение, $\\mu$ — масса единицы длины).

## Уравнение бегущей волны

Если источник в точке $x = 0$ колеблется по закону $s = A\\cos\\omega t$, то точка на расстоянии $x$ повторяет то же движение с запаздыванием $\\dfrac{x}{v}$:

> $$s(x, t) = A\\cos\\omega\\left(t - \\dfrac{x}{v}\\right) = A\\cos(\\omega t - kx), \\qquad k = \\dfrac{2\\pi}{\\lambda}.$$

При фиксированном $x$ это гармоническое колебание во времени; при фиксированном $t$ — косинусоида в пространстве с периодом $\\lambda$. Разность фаз двух точек на расстоянии $d$ равна $\\Delta\\varphi = \\dfrac{2\\pi d}{\\lambda}$.

Волны переносят энергию: интенсивность (энергия в секунду через единицу площади) пропорциональна $A^2\\nu^2$. Сферическая волна от точечного источника распределяется по растущей сфере, поэтому её интенсивность убывает как $\\dfrac{1}{r^2}$, а амплитуда — как $\\dfrac{1}{r}$.

## Звук

Звук — продольная волна с частотами от $16$ Гц до $20$ кГц, которые воспринимает ухо; ниже — **инфразвук**, выше — **ультразвук** (летучие мыши, медицинские сканеры, гидролокатор). Звуку нужна среда: колокольчик в вакууме беззвучен.

- **Высота** задаётся частотой: «ля» скрипки — $440$ Гц, нижняя клавиша рояля — $27{,}5$ Гц.
- **Громкость** задаётся амплитудой (интенсивностью); её измеряют в децибелах по логарифмической шкале, где $+10$ дБ означает в $10$ раз большую интенсивность.
- **Тембр** задаётся обертонами, примешанными к основной частоте; он позволяет отличить флейту от скрипки, играющих одну ноту.

**Эффект Доплера.** Когда источник и наблюдатель сближаются, наблюдатель принимает больше гребней в секунду и слышит более высокий тон; когда удаляются — более низкий. Это падение тона проезжающей сирены, а тот же эффект для света говорит астрономам, что далёкие галактики удаляются.

**Пример 1.** Звук $440$ Гц в воздухе ($340$ м/с): $\\lambda = \\dfrac{340}{440} \\approx 0{,}77$ м. Та же нота в воде: $\\lambda = \\dfrac{1500}{440} \\approx 3{,}4$ м. Частота та же, длина волны в $4{,}4$ раза больше.

**Пример 2.** Волны на озере проходят мимо поплавка $20$ раз в минуту, соседние гребни отстоят на $1{,}5$ м. $\\nu = \\dfrac{1}{3}$ Гц, $v = 1{,}5 \\cdot \\dfrac{1}{3} = 0{,}5$ м/с.

**Пример 3.** Молния видна, а гром приходит через $6$ с. Расстояние $\\approx 340 \\cdot 6 \\approx 2$ км (свет приходит практически мгновенно). Правило: $3$ с на километр.

**Пример 4.** $s = 0{,}02\\cos(200\\pi t - 2\\pi x)$ (СИ). $\\omega = 200\\pi$ рад/с, значит, $\\nu = 100$ Гц; $k = 2\\pi$ м⁻¹, значит, $\\lambda = 1$ м; $v = \\lambda\\nu = 100$ м/с; амплитуда $2$ см.

**Пример 5.** Две точки среды на расстоянии $0{,}25$ м вдоль волны длиной $1$ м колеблются с разностью фаз $\\Delta\\varphi = \\dfrac{2\\pi \\cdot 0{,}25}{1} = \\dfrac{\\pi}{2}$: когда одна на гребне, другая проходит положение равновесия.

**Пример 6.** Струна длиной $0{,}65$ м и массой $0{,}5$ г натянута силой $F = 80$ Н. $\\mu = \\dfrac{5 \\cdot 10^{-4}}{0{,}65} \\approx 7{,}7 \\cdot 10^{-4}$ кг/м, $v = \\sqrt{\\dfrac{80}{7{,}7 \\cdot 10^{-4}}} \\approx 322$ м/с. Основной тон имеет $\\lambda = 2l = 1{,}3$ м, так что $\\nu = \\dfrac{322}{1{,}3} \\approx 248$ Гц — близко к «си» малой октавы. Подтягивая струну, повышают тон.

**Пример 7.** Ультразвуковой сканер на $5$ МГц в тканях ($v \\approx 1540$ м/с) имеет $\\lambda \\approx 0{,}3$ мм, что задаёт мельчайшую различимую деталь изображения. Крик летучей мыши на $100$ кГц в воздухе имеет $\\lambda = 3{,}4$ мм — достаточно, чтобы обнаружить комара.

**Пример 8.** Почему звук становится тише на $10$ дБ, когда интенсивность делят на $10$, но на $20$ дБ, когда делят на $100$? Шкала децибел логарифмическая: $L = 10\\lg\\dfrac{I}{I_0}$. Деление $I$ на $100 = 10^2$ вычитает $2 \\cdot 10 = 20$ дБ. Удвоение интенсивности добавляет лишь $3$ дБ, поэтому две одинаковые колонки звучат едва громче одной.

## Упражнения

1. Найдите длину волны звука $2$ кГц в воздухе ($340$ м/с) и в стали ($5000$ м/с).
2. Волна с $\\lambda = 4$ м бежит со скоростью $20$ м/с. Найдите период и частоту.
3. Морская волна проходит мимо буя каждые $5$ с, расстояние между гребнями $30$ м. Найдите скорость.
4. Для $s = 0{,}1\\cos(4\\pi t - 0{,}5\\pi x)$ (СИ) найдите $\\nu$, $\\lambda$ и $v$.
5. Две точки на расстоянии $1{,}5$ м вдоль волны длиной $6$ м: найдите разность фаз.
6. Эхо возвращается через $1{,}2$ с после крика. Как далеко стена?
7. Струна длиной $0{,}5$ м имеет массу $2$ г и натяжение $200$ Н. Найдите скорость волны и основную частоту.
8. Тон сирены кажется выше, когда скорая приближается. Какая величина — частота или скорость волны — меняется для слушателя и почему?

### Ответы

1. $0{,}17$ м, $2{,}5$ м. 2. $T = 0{,}2$ с, $\\nu = 5$ Гц. 3. $6$ м/с. 4. $\\nu = 2$ Гц, $\\lambda = 4$ м, $v = 8$ м/с. 5. $\\dfrac{\\pi}{2}$. 6. $\\dfrac{340 \\cdot 1{,}2}{2} \\approx 204$ м. 7. $\\mu = 0{,}004$ кг/м, $v = \\sqrt{50000} \\approx 224$ м/с, $\\nu = \\dfrac{v}{2l} \\approx 224$ Гц. 8. Принимаемая частота: гребни приходят чаще, потому что источник движется к слушателю; скорость волны в воздухе не меняется.`,
      },
      [
        q(t("Sound in air is a…", "Ձայնն օդում…", "Звук в воздухе —"), [t("transverse wave", "լայնական ալիք է", "поперечная волна"), t("longitudinal wave", "երկայնական ալիք է", "продольная волна"), t("standing wave only", "միայն կանգուն ալիք է", "только стоячая волна")], 1),
        q(t("The wavelength equals…", "Ալիքի երկարությունը հավասար է…", "Длина волны равна…"), [t("v · ν", "v · ν", "v · ν"), t("v / ν", "v / ν", "v / ν"), t("ν / v", "ν / v", "ν / v")], 1),
        q(t("When a wave passes into another medium, what stays the same?", "Երբ ալիքն անցնում է այլ միջավայր, ի՞նչն է մնում անփոփոխ։", "При переходе волны в другую среду что остаётся неизменным?"), [t("wavelength", "ալիքի երկարությունը", "длина волны"), t("speed", "արագությունը", "скорость"), t("frequency", "հաճախությունը", "частота")], 2),
        q(t("A 340 Hz sound in air (340 m/s) has wavelength…", "340 Հց ձայնն օդում (340 մ/վ) ունի ալիքի երկարություն…", "Звук 340 Гц в воздухе (340 м/с) имеет длину волны…"), [t("1 m", "1 մ", "1 м"), t("10 m", "10 մ", "10 м"), t("0.1 m", "0,1 մ", "0,1 м")], 0),
        q(t("The pitch of a sound is determined by its…", "Ձայնի բարձրությունը որոշվում է նրա…", "Высота звука определяется его…"), [t("amplitude", "լայնույթով", "амплитудой"), t("frequency", "հաճախությամբ", "частотой"), t("speed", "արագությամբ", "скоростью")], 1),
        q(t("A wave transfers…", "Ալիքը տեղափոխում է…", "Волна переносит…"), [t("the particles of the medium", "միջավայրի մասնիկները", "частицы среды"), t("energy without transferring matter", "էներգիա՝ առանց նյութ տեղափոխելու", "энергию без переноса вещества"), t("nothing", "ոչինչ", "ничего")], 1),
      ],
    ),
    lesson(
      "em-waves-maxwell",
      ["Electromagnetic waves; Maxwell and Hertz", "Էլեկտրամագնիսական ալիքներ, Մաքսվել և Հերց", "Электромагнитные волны; Максвелл и Герц"],
      {
        en: ["State Maxwell's idea that changing electric and magnetic fields generate each other and describe the structure of an electromagnetic wave", "Describe Hertz's experiments and the properties of electromagnetic waves: speed c, transversality, reflection, refraction, energy transfer", "Place radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays on the electromagnetic spectrum"],
        hy: ["Շարադրել Մաքսվելի գաղափարը, որ փոփոխվող էլեկտրական և մագնիսական դաշտերը ծնում են միմյանց, և նկարագրել էլեկտրամագնիսական ալիքի կառուցվածքը", "Նկարագրել Հերցի փորձերը և էլեկտրամագնիսական ալիքների հատկությունները․ c արագություն, լայնականություն, անդրադարձում, բեկում, էներգիայի տեղափոխում", "Տեղադրել ռադիոալիքները, միկրոալիքները, ինֆրակարմիրը, տեսանելի լույսը, ուլտրամանուշակագույնը, ռենտգենյան և գամմա ճառագայթներն էլեկտրամագնիսական սպեկտրում"],
        ru: ["Излагать идею Максвелла о том, что переменные электрическое и магнитное поля порождают друг друга, и описывать строение электромагнитной волны", "Описывать опыты Герца и свойства электромагнитных волн: скорость c, поперечность, отражение, преломление, перенос энергии", "Располагать радиоволны, микроволны, инфракрасное, видимое, ультрафиолетовое, рентгеновское и гамма-излучение на шкале электромагнитных волн"],
      },
      {
        en: `## Maxwell's idea

Faraday showed that a changing magnetic field creates an electric field: this is what drives the induced current in a loop, and the electric field exists even where there is no loop. Maxwell (1865) proposed the symmetric statement: a **changing electric field creates a magnetic field**, just as a current does. (He called the quantity $\\varepsilon_0\\dfrac{\\Delta E}{\\Delta t}$ the displacement current; it is what "closes" the circuit through a capacitor.)

Put together, the two statements mean that the fields can sustain each other. A changing $\\vec E$ produces a changing $\\vec B$ nearby, which produces a changing $\\vec E$ further on, and so on: a disturbance of the field runs through empty space. Maxwell's equations predicted the speed of this **electromagnetic wave**:

$c = \\dfrac{1}{\\sqrt{\\varepsilon_0\\mu_0}} \\approx 3 \\cdot 10^8$ m/s,

exactly the measured speed of light. Maxwell concluded that light is an electromagnetic wave.

## Structure and properties

In an electromagnetic wave $\\vec E$ and $\\vec B$ are perpendicular to each other and to the direction of propagation: the wave is **transverse**. The two fields oscillate in phase, and $E = cB$. The wave can travel in vacuum: it needs no medium. Its energy is shared equally between the electric and magnetic fields, and the energy flux is proportional to $E^2$ (or $B^2$), so the intensity is proportional to the square of the amplitude and, for a dipole source, to $\\omega^4$: high frequencies radiate far more effectively, which is why antennas use megahertz and higher.

Radiation is produced by **accelerated charges**: a charge at rest or moving uniformly does not radiate. An alternating current in an antenna, an electron jumping between atomic levels, a hot body's vibrating molecules are all sources.

Properties shared with other waves and verified experimentally: reflection from conductors, refraction at the boundary of dielectrics, interference, diffraction, polarisation. In a medium with permittivity $\\varepsilon$ the speed is $v = \\dfrac{c}{\\sqrt{\\varepsilon}}$.

## Hertz's experiments

In 1887 Hertz produced electromagnetic waves with a spark gap connected to an induction coil (an **open oscillating circuit**: the capacitor plates are pulled apart into two rods so that the field fills the surrounding space). He detected them with a wire loop with a tiny gap several metres away: sparks jumped in the receiver when the transmitter sparked. He showed that the waves reflect from metal sheets, form standing waves (from which he measured $\\lambda$ and, knowing the frequency, found $v \\approx c$), refract in a large prism of pitch, and are polarised. Seven years later Popov and Marconi used such waves for communication.

## The electromagnetic spectrum

All electromagnetic waves have the same nature and speed in vacuum and differ only in frequency (wavelength). From long to short waves:

| Range | Wavelength | Sources and uses |
|---|---|---|
| radio waves | $> 1$ mm | antennas; broadcasting, TV, mobile phones, Wi-Fi |
| infrared | $1$ mm – $780$ nm | warm bodies; heating, remote controls, thermal imaging |
| visible light | $780$ – $380$ nm | hot bodies, lamps; vision |
| ultraviolet | $380$ – $10$ nm | the Sun, arcs; sterilisation, tanning |
| X-rays | $10$ – $0{.}01$ nm | electrons stopped on metal; medical imaging |
| gamma rays | $< 0{.}01$ nm | nuclei; cancer therapy, astrophysics |

Microwaves ($1$ mm – $30$ cm) are the short end of radio: ovens ($12$ cm), radar, satellite links. The boundaries overlap; what matters is $\\lambda\\nu = c$ for all of them.

**Example 1.** An FM station broadcasts at $100$ MHz: $\\lambda = \\dfrac{3 \\cdot 10^8}{10^8} = 3$ m. A half-wave dipole antenna for it is $1{.}5$ m long. A mobile phone at $1{.}8$ GHz uses $\\lambda = 17$ cm, which fits in the handset.

**Example 2.** Green light has $\\lambda = 500$ nm. $\\nu = \\dfrac{3 \\cdot 10^8}{5 \\cdot 10^{-7}} = 6 \\cdot 10^{14}$ Hz, six hundred trillion oscillations per second. Nothing mechanical oscillates that fast; our eye measures frequency as colour.

**Example 3.** A microwave oven works at $2{.}45$ GHz, $\\lambda = 12{.}2$ cm. Standing waves inside have nodes $6$ cm apart, where the food stays cold, which is why the plate rotates.

**Example 4.** A radar pulse returns from an aircraft $0{.}4$ ms after emission. The distance is $\\dfrac{c \\cdot t}{2} = \\dfrac{3 \\cdot 10^8 \\cdot 4 \\cdot 10^{-4}}{2} = 60$ km.

**Example 5.** Sunlight takes $\\dfrac{1{.}5 \\cdot 10^{11}}{3 \\cdot 10^8} = 500$ s $\\approx 8{.}3$ min to reach Earth. A radio message to a probe at Mars (when $2{.}3 \\cdot 10^{11}$ m away) needs about $13$ min each way, so the probe must act on its own.

**Example 6.** In glass ($\\varepsilon \\approx 2{.}25$ at optical frequencies) light travels at $v = \\dfrac{c}{\\sqrt{2{.}25}} = \\dfrac{c}{1{.}5} = 2 \\cdot 10^8$ m/s. The frequency is unchanged, so the wavelength inside is $1{.}5$ times shorter.

**Example 7.** The electric amplitude of a wave is $E_m = 3$ V/m (a strong radio signal). The magnetic amplitude is $B_m = \\dfrac{E_m}{c} = 10^{-8}$ T, tiny compared with the Earth's field but easily detected by a tuned circuit.

**Example 8.** Why does a $50$ Hz mains wire not noticeably radiate while a $100$ MHz antenna does? Radiated power grows as $\\omega^4$: the ratio of frequencies is $2 \\cdot 10^6$, so the radiation ratio is about $10^{25}$. Also, at $50$ Hz the wavelength is $6000$ km, enormously longer than any wire, so the wire is a very inefficient antenna.

## Exercises

1. Find the wavelength of a $900$ MHz mobile signal and a $27$ MHz CB radio.
2. Find the frequency of red light ($700$ nm) and of an X-ray with $\\lambda = 0{.}1$ nm.
3. A lightning flash is seen and a radio receiver clicks at the same time; the thunder comes $9$ s later. Why the difference, and how far is the storm?
4. A radar echo returns after $200$ μs. Find the distance to the target.
5. How long does a radio signal take to reach the Moon ($3{.}8 \\cdot 10^8$ m) and back?
6. Light enters water ($\\varepsilon = 1{.}77$ for light). Find its speed and the wavelength of $600$ nm light inside.
7. Which has the longer wavelength, ultraviolet or infrared? Which has the higher frequency?
8. A wave has $B_m = 2 \\cdot 10^{-9}$ T. Find $E_m$.

### Answers

1. $0{.}33$ m, $11$ m. 2. $4{.}3 \\cdot 10^{14}$ Hz, $3 \\cdot 10^{18}$ Hz. 3. Radio waves and light both travel at $c$; sound at $340$ m/s; distance $\\approx 3$ km. 4. $30$ km. 5. $\\dfrac{2 \\cdot 3{.}8 \\cdot 10^8}{3 \\cdot 10^8} \\approx 2{.}5$ s. 6. $v = \\dfrac{c}{1{.}33} \\approx 2{.}25 \\cdot 10^8$ m/s, $\\lambda \\approx 450$ nm. 7. Infrared has the longer wavelength; ultraviolet the higher frequency. 8. $E_m = cB_m = 0{.}6$ V/m.`,
        hy: `## Մաքսվելի գաղափարը

Ֆարադեյը ցույց տվեց, որ փոփոխվող մագնիսական դաշտն էլեկտրական դաշտ է ստեղծում․ հենց դա է առաջացնում ինդուկցիոն հոսանքը շրջանակում, և էլեկտրական դաշտը գոյություն ունի նույնիսկ այնտեղ, որտեղ շրջանակ չկա։ Մաքսվելը (1865) առաջարկեց համաչափ պնդումը․ **փոփոխվող էլեկտրական դաշտը մագնիսական դաշտ է ստեղծում** ճիշտ այնպես, ինչպես հոսանքը։ (Նա $\\varepsilon_0\\dfrac{\\Delta E}{\\Delta t}$ մեծությունն անվանեց շեղման հոսանք, հենց այն է «փակում» շղթան կոնդենսատորի միջով։)

Միասին վերցրած՝ երկու պնդումները նշանակում են, որ դաշտերը կարող են պահել միմյանց։ Փոփոխվող $\\vec E$-ն մոտակայքում ստեղծում է փոփոխվող $\\vec B$, որն ավելի հեռու ստեղծում է փոփոխվող $\\vec E$ և այսպես շարունակ․ դաշտի գրգռումը վազում է դատարկ տարածությամբ։ Մաքսվելի հավասարումները կանխատեսեցին այս **էլեկտրամագնիսական ալիքի** արագությունը․

$c = \\dfrac{1}{\\sqrt{\\varepsilon_0\\mu_0}} \\approx 3 \\cdot 10^8$ մ/վ

ճիշտ լույսի չափված արագությունը։ Մաքսվելն եզրակացրեց, որ լույսն էլեկտրամագնիսական ալիք է։

## Կառուցվածք և հատկություններ

Էլեկտրամագնիսական ալիքում $\\vec E$-ն և $\\vec B$-ն ուղղահայաց են միմյանց և տարածման ուղղությանը․ ալիքը **լայնական** է։ Երկու դաշտերը տատանվում են համափուլ, և $E = cB$։ Ալիքը կարող է տարածվել վակուումում․ միջավայր անհրաժեշտ չէ։ Նրա էներգիան հավասարապես բաշխված է էլեկտրական և մագնիսական դաշտերի միջև, իսկ էներգիայի հոսքը համեմատական է $E^2$-ին (կամ $B^2$-ին), ուստի ինտենսիվությունը համեմատական է լայնույթի քառակուսուն, իսկ դիպոլային աղբյուրի համար՝ $\\omega^4$-ին․ բարձր հաճախությունները շատ ավելի արդյունավետ են ճառագայթում, այդ պատճառով ալեհավաքներն օգտագործում են մեգահերցեր և ավելի բարձր։

Ճառագայթումն առաջանում է **արագացումով շարժվող լիցքերից**․ անշարժ կամ հավասարաչափ շարժվող լիցքը չի ճառագայթում։ Ալեհավաքի փոփոխական հոսանքը, ատոմային մակարդակների միջև ցատկող էլեկտրոնը, տաք մարմնի թրթռացող մոլեկուլները բոլորն աղբյուրներ են։

Այլ ալիքների հետ ընդհանուր և փորձով հաստատված հատկություններ․ անդրադարձում հաղորդիչներից, բեկում դիէլեկտրիկների սահմանին, ինտերֆերենց, դիֆրակցիա, բևեռացում։ $\\varepsilon$ թափանցելիությամբ միջավայրում արագությունը $v = \\dfrac{c}{\\sqrt{\\varepsilon}}$ է։

## Հերցի փորձերը

1887 թ․ Հերցն էլեկտրամագնիսական ալիքներ ստացավ ինդուկցիոն կոճին միացված կայծային ճեղքով (**բաց տատանողական կոնտուր**․ կոնդենսատորի թիթեղները հեռացված են երկու ձողերի տեսքով, որպեսզի դաշտը լցնի շրջապատող տարածությունը)։ Նա դրանք հայտնաբերեց մի քանի մետր հեռու գտնվող փոքրիկ ճեղքով լարե օղակով․ ընդունիչում կայծեր էին թռչում, երբ հաղորդիչը կայծ էր տալիս։ Նա ցույց տվեց, որ ալիքներն անդրադառնում են մետաղե թիթեղներից, առաջացնում կանգուն ալիքներ (որոնցից չափեց $\\lambda$-ն և, իմանալով հաճախությունը, գտավ $v \\approx c$), բեկվում են խեժի մեծ պրիզմայում և բևեռացված են։ Յոթ տարի անց Պոպովը և Մարկոնին այդպիսի ալիքներն օգտագործեցին կապի համար։

## Էլեկտրամագնիսական սպեկտրը

Բոլոր էլեկտրամագնիսական ալիքներն ունեն նույն բնույթն ու արագությունը վակուումում և տարբերվում են միայն հաճախությամբ (ալիքի երկարությամբ)։ Երկարից մինչև կարճ ալիքներ․

| Տիրույթ | Ալիքի երկարություն | Աղբյուրներ և կիրառություններ |
|---|---|---|
| ռադիոալիքներ | $> 1$ մմ | ալեհավաքներ, հեռարձակում, հեռուստատեսություն, բջջային հեռախոսներ, Wi-Fi |
| ինֆրակարմիր | $1$ մմ – $780$ նմ | տաք մարմիններ, ջեռուցում, հեռակառավարման վահանակներ, ջերմային պատկերում |
| տեսանելի լույս | $780$ – $380$ նմ | շիկացած մարմիններ, լամպեր, տեսողություն |
| ուլտրամանուշակագույն | $380$ – $10$ նմ | Արև, աղեղներ, ախտահանում, արևայրուք |
| ռենտգենյան | $10$ – $0{,}01$ նմ | մետաղի վրա կանգնեցվող էլեկտրոններ, բժշկական պատկերում |
| գամմա | $< 0{,}01$ նմ | միջուկներ, քաղցկեղի բուժում, աստղաֆիզիկա |

Միկրոալիքները ($1$ մմ – $30$ սմ) ռադիոյի կարճ ծայրն են․ վառարաններ ($12$ սմ), ռադար, արբանյակային կապ։ Սահմանները համընկնում են, կարևորն այն է, որ բոլորի համար $\\lambda\\nu = c$։

**Օրինակ 1։** FM կայանը հեռարձակում է $100$ ՄՀց-ով․ $\\lambda = \\dfrac{3 \\cdot 10^8}{10^8} = 3$ մ։ Նրա համար կիսաալիքային դիպոլային ալեհավաքը $1{,}5$ մ է։ $1{,}8$ ԳՀց բջջային հեռախոսն օգտագործում է $\\lambda = 17$ սմ, որը տեղավորվում է սարքի մեջ։

**Օրինակ 2։** Կանաչ լույսն ունի $\\lambda = 500$ նմ։ $\\nu = \\dfrac{3 \\cdot 10^8}{5 \\cdot 10^{-7}} = 6 \\cdot 10^{14}$ Հց՝ վեց հարյուր տրիլիոն տատանում վայրկյանում։ Ոչ մի մեխանիկական բան այդքան արագ չի տատանվում, մեր աչքը հաճախությունը չափում է որպես գույն։

**Օրինակ 3։** Միկրոալիքային վառարանն աշխատում է $2{,}45$ ԳՀց-ով, $\\lambda = 12{,}2$ սմ։ Ներսի կանգուն ալիքներն ունեն հանգույցներ $6$ սմ հեռավորությամբ, որտեղ սնունդը սառն է մնում, այդ պատճառով ափսեն պտտվում է։

**Օրինակ 4։** Ռադարի իմպուլսն ինքնաթիռից վերադառնում է արձակումից $0{,}4$ մվ հետո։ Հեռավորությունը $\\dfrac{c \\cdot t}{2} = \\dfrac{3 \\cdot 10^8 \\cdot 4 \\cdot 10^{-4}}{2} = 60$ կմ է։

**Օրինակ 5։** Արևի լույսն Երկիր է հասնում $\\dfrac{1{,}5 \\cdot 10^{11}}{3 \\cdot 10^8} = 500$ վ $\\approx 8{,}3$ րոպեում։ Մարսի մոտ գտնվող զոնդին ($2{,}3 \\cdot 10^{11}$ մ հեռավորության դեպքում) ռադիոհաղորդագրությունը պահանջում է մոտ $13$ րոպե յուրաքանչյուր ուղղությամբ, ուստի զոնդը պետք է ինքնուրույն գործի։

**Օրինակ 6։** Ապակում (օպտիկական հաճախությունների համար $\\varepsilon \\approx 2{,}25$) լույսը տարածվում է $v = \\dfrac{c}{\\sqrt{2{,}25}} = \\dfrac{c}{1{,}5} = 2 \\cdot 10^8$ մ/վ արագությամբ։ Հաճախությունն անփոփոխ է, ուստի ալիքի երկարությունը ներսում $1{,}5$ անգամ կարճ է։

**Օրինակ 7։** Ալիքի էլեկտրական լայնույթը $E_m = 3$ Վ/մ է (ուժեղ ռադիոազդանշան)։ Մագնիսական լայնույթը $B_m = \\dfrac{E_m}{c} = 10^{-8}$ Տ է՝ Երկրի դաշտի համեմատ չնչին, բայց կարգավորված կոնտուրով հեշտությամբ հայտնաբերվող։

**Օրինակ 8։** Ինչո՞ւ $50$ Հց ցանցային լարը նկատելիորեն չի ճառագայթում, իսկ $100$ ՄՀց ալեհավաքը՝ ճառագայթում է։ Ճառագայթվող հզորությունն աճում է $\\omega^4$-ի համեմատ․ հաճախությունների հարաբերությունը $2 \\cdot 10^6$ է, ուստի ճառագայթման հարաբերությունը մոտ $10^{25}$ է։ Բացի այդ, $50$ Հց-ի դեպքում ալիքի երկարությունը $6000$ կմ է՝ ցանկացած լարից անհամեմատ երկար, ուստի լարը շատ անարդյունավետ ալեհավաք է։

## Վարժություններ

1. Գտեք $900$ ՄՀց բջջային ազդանշանի և $27$ ՄՀց ռադիոկապի ալիքի երկարությունը։
2. Գտեք կարմիր լույսի ($700$ նմ) և $\\lambda = 0{,}1$ նմ ռենտգենյան ճառագայթի հաճախությունը։
3. Կայծակի փայլատակումը տեսնում են, և ռադիոընդունիչը միաժամանակ չխկում է, որոտը գալիս է $9$ վ հետո։ Ինչո՞ւ է տարբերությունը, և որքա՞ն է հեռու ամպրոպը։
4. Ռադարի արձագանքը վերադառնում է $200$ մկվ հետո։ Գտեք հեռավորությունը թիրախից։
5. Որքա՞ն ժամանակում է ռադիոազդանշանը հասնում Լուսին ($3{,}8 \\cdot 10^8$ մ) և վերադառնում։
6. Լույսը մտնում է ջուր (լույսի համար $\\varepsilon = 1{,}77$)։ Գտեք նրա արագությունը և $600$ նմ լույսի ալիքի երկարությունը ներսում։
7. Ո՞րն ունի ավելի մեծ ալիքի երկարություն՝ ուլտրամանուշակագո՞ւյնը, թե՞ ինֆրակարմիրը։ Ո՞րն ունի ավելի բարձր հաճախություն։
8. Ալիքն ունի $B_m = 2 \\cdot 10^{-9}$ Տ։ Գտեք $E_m$-ը։

### Պատասխաններ

1. $0{,}33$ մ, $11$ մ։ 2. $4{,}3 \\cdot 10^{14}$ Հց, $3 \\cdot 10^{18}$ Հց։ 3. Ռադիոալիքներն ու լույսը տարածվում են $c$ արագությամբ, ձայնը՝ $340$ մ/վ, հեռավորությունը $\\approx 3$ կմ։ 4. $30$ կմ։ 5. $\\dfrac{2 \\cdot 3{,}8 \\cdot 10^8}{3 \\cdot 10^8} \\approx 2{,}5$ վ։ 6. $v = \\dfrac{c}{1{,}33} \\approx 2{,}25 \\cdot 10^8$ մ/վ, $\\lambda \\approx 450$ նմ։ 7. Ինֆրակարմիրն ունի ավելի մեծ ալիքի երկարություն, ուլտրամանուշակագույնը՝ ավելի բարձր հաճախություն։ 8. $E_m = cB_m = 0{,}6$ Վ/մ։`,
        ru: `## Идея Максвелла

Фарадей показал, что переменное магнитное поле создаёт электрическое: именно оно гонит индукционный ток в контуре, и электрическое поле существует даже там, где контура нет. Максвелл (1865) предложил симметричное утверждение: **переменное электрическое поле создаёт магнитное**, как и ток. (Величину $\\varepsilon_0\\dfrac{\\Delta E}{\\Delta t}$ он назвал током смещения; именно он «замыкает» цепь через конденсатор.)

Вместе эти два утверждения означают, что поля могут поддерживать друг друга. Переменное $\\vec E$ создаёт рядом переменное $\\vec B$, которое дальше создаёт переменное $\\vec E$, и так далее: возмущение поля бежит по пустому пространству. Уравнения Максвелла предсказали скорость этой **электромагнитной волны**:

$c = \\dfrac{1}{\\sqrt{\\varepsilon_0\\mu_0}} \\approx 3 \\cdot 10^8$ м/с,

в точности измеренную скорость света. Максвелл заключил, что свет — электромагнитная волна.

## Строение и свойства

В электромагнитной волне $\\vec E$ и $\\vec B$ перпендикулярны друг другу и направлению распространения: волна **поперечная**. Оба поля колеблются в фазе, и $E = cB$. Волна может распространяться в вакууме: ей не нужна среда. Её энергия поровну делится между электрическим и магнитным полями, а поток энергии пропорционален $E^2$ (или $B^2$), так что интенсивность пропорциональна квадрату амплитуды, а для дипольного источника — $\\omega^4$: высокие частоты излучаются гораздо эффективнее, поэтому антенны работают на мегагерцах и выше.

Излучение создают **ускоренно движущиеся заряды**: покоящийся или равномерно движущийся заряд не излучает. Переменный ток в антенне, электрон, перескакивающий между уровнями атома, колеблющиеся молекулы горячего тела — всё это источники.

Свойства, общие с другими волнами и проверенные на опыте: отражение от проводников, преломление на границе диэлектриков, интерференция, дифракция, поляризация. В среде с проницаемостью $\\varepsilon$ скорость равна $v = \\dfrac{c}{\\sqrt{\\varepsilon}}$.

## Опыты Герца

В 1887 г. Герц получил электромагнитные волны с помощью искрового промежутка, подключённого к индукционной катушке (**открытый колебательный контур**: пластины конденсатора раздвинуты в два стержня, чтобы поле заполняло окружающее пространство). Он обнаруживал их проволочным кольцом с крошечным зазором в нескольких метрах: в приёмнике проскакивали искры, когда искрил передатчик. Он показал, что волны отражаются от металлических листов, образуют стоячие волны (по ним он измерил $\\lambda$ и, зная частоту, нашёл $v \\approx c$), преломляются в большой призме из смолы и поляризованы. Через семь лет Попов и Маркони использовали такие волны для связи.

## Шкала электромагнитных волн

Все электромагнитные волны имеют одну природу и скорость в вакууме и различаются только частотой (длиной волны). От длинных к коротким:

| Диапазон | Длина волны | Источники и применения |
|---|---|---|
| радиоволны | $> 1$ мм | антенны; вещание, ТВ, мобильные телефоны, Wi-Fi |
| инфракрасное | $1$ мм – $780$ нм | тёплые тела; обогрев, пульты, тепловизоры |
| видимый свет | $780$ – $380$ нм | раскалённые тела, лампы; зрение |
| ультрафиолет | $380$ – $10$ нм | Солнце, дуги; стерилизация, загар |
| рентгеновское | $10$ – $0{,}01$ нм | электроны, тормозящиеся в металле; медицинская диагностика |
| гамма | $< 0{,}01$ нм | ядра; лечение рака, астрофизика |

Микроволны ($1$ мм – $30$ см) — короткий край радиодиапазона: печи ($12$ см), радары, спутниковая связь. Границы перекрываются; важно, что для всех $\\lambda\\nu = c$.

**Пример 1.** FM-станция вещает на $100$ МГц: $\\lambda = \\dfrac{3 \\cdot 10^8}{10^8} = 3$ м. Полуволновой диполь для неё имеет длину $1{,}5$ м. Мобильный телефон на $1{,}8$ ГГц использует $\\lambda = 17$ см, которая помещается в корпусе.

**Пример 2.** Зелёный свет имеет $\\lambda = 500$ нм. $\\nu = \\dfrac{3 \\cdot 10^8}{5 \\cdot 10^{-7}} = 6 \\cdot 10^{14}$ Гц — шестьсот триллионов колебаний в секунду. Ничто механическое так быстро не колеблется; наш глаз измеряет частоту как цвет.

**Пример 3.** Микроволновая печь работает на $2{,}45$ ГГц, $\\lambda = 12{,}2$ см. У стоячих волн внутри узлы через $6$ см, где еда остаётся холодной, поэтому тарелка вращается.

**Пример 4.** Импульс радара возвращается от самолёта через $0{,}4$ мс после излучения. Расстояние $\\dfrac{c \\cdot t}{2} = \\dfrac{3 \\cdot 10^8 \\cdot 4 \\cdot 10^{-4}}{2} = 60$ км.

**Пример 5.** Солнечный свет идёт до Земли $\\dfrac{1{,}5 \\cdot 10^{11}}{3 \\cdot 10^8} = 500$ с $\\approx 8{,}3$ мин. Радиосообщение зонду у Марса (на расстоянии $2{,}3 \\cdot 10^{11}$ м) требует около $13$ мин в каждую сторону, поэтому зонд должен действовать самостоятельно.

**Пример 6.** В стекле ($\\varepsilon \\approx 2{,}25$ на оптических частотах) свет идёт со скоростью $v = \\dfrac{c}{\\sqrt{2{,}25}} = \\dfrac{c}{1{,}5} = 2 \\cdot 10^8$ м/с. Частота не меняется, поэтому длина волны внутри в $1{,}5$ раза короче.

**Пример 7.** Электрическая амплитуда волны $E_m = 3$ В/м (сильный радиосигнал). Магнитная амплитуда $B_m = \\dfrac{E_m}{c} = 10^{-8}$ Тл — ничтожна рядом с земным полем, но легко обнаруживается настроенным контуром.

**Пример 8.** Почему сетевой провод на $50$ Гц заметно не излучает, а антенна на $100$ МГц излучает? Излучаемая мощность растёт как $\\omega^4$: отношение частот $2 \\cdot 10^6$, так что отношение излучений около $10^{25}$. К тому же при $50$ Гц длина волны $6000$ км, несравнимо больше любого провода, так что провод — очень неэффективная антенна.

## Упражнения

1. Найдите длину волны мобильного сигнала $900$ МГц и радиостанции $27$ МГц.
2. Найдите частоту красного света ($700$ нм) и рентгеновского луча с $\\lambda = 0{,}1$ нм.
3. Вспышку молнии видят, и радиоприёмник щёлкает одновременно; гром приходит через $9$ с. Почему такая разница и как далеко гроза?
4. Эхо радара возвращается через $200$ мкс. Найдите расстояние до цели.
5. Сколько времени радиосигнал идёт до Луны ($3{,}8 \\cdot 10^8$ м) и обратно?
6. Свет входит в воду ($\\varepsilon = 1{,}77$ для света). Найдите его скорость и длину волны света $600$ нм внутри.
7. У какого излучения длина волны больше — у ультрафиолетового или инфракрасного? У какого выше частота?
8. Волна имеет $B_m = 2 \\cdot 10^{-9}$ Тл. Найдите $E_m$.

### Ответы

1. $0{,}33$ м, $11$ м. 2. $4{,}3 \\cdot 10^{14}$ Гц, $3 \\cdot 10^{18}$ Гц. 3. Радиоволны и свет идут со скоростью $c$; звук — $340$ м/с; расстояние $\\approx 3$ км. 4. $30$ км. 5. $\\dfrac{2 \\cdot 3{,}8 \\cdot 10^8}{3 \\cdot 10^8} \\approx 2{,}5$ с. 6. $v = \\dfrac{c}{1{,}33} \\approx 2{,}25 \\cdot 10^8$ м/с, $\\lambda \\approx 450$ нм. 7. У инфракрасного длина волны больше; у ультрафиолетового частота выше. 8. $E_m = cB_m = 0{,}6$ В/м.`,
      },
      [
        q(t("According to Maxwell, a changing electric field…", "Ըստ Մաքսվելի՝ փոփոխվող էլեկտրական դաշտը…", "По Максвеллу, переменное электрическое поле…"), [t("creates a magnetic field", "մագնիսական դաշտ է ստեղծում", "создаёт магнитное поле"), t("creates charges", "լիցքեր է ստեղծում", "создаёт заряды"), t("has no effect", "ազդեցություն չունի", "ни на что не влияет")], 0),
        q(t("An electromagnetic wave is…", "Էլեկտրամագնիսական ալիքը…", "Электромагнитная волна —"), [t("longitudinal", "երկայնական է", "продольная"), t("transverse", "լայնական է", "поперечная"), t("needs a medium", "միջավայր է պահանջում", "требует среды")], 1),
        q(t("The speed of electromagnetic waves in vacuum is about…", "Էլեկտրամագնիսական ալիքների արագությունը վակուումում մոտ…", "Скорость электромагнитных волн в вакууме около…"), [t("340 m/s", "340 մ/վ է", "340 м/с"), t("3 · 10⁸ m/s", "3 · 10⁸ մ/վ է", "3 · 10⁸ м/с"), t("3 · 10⁵ m/s", "3 · 10⁵ մ/վ է", "3 · 10⁵ м/с")], 1),
        q(t("Electromagnetic waves are radiated by…", "Էլեկտրամագնիսական ալիքներ ճառագայթում են…", "Электромагнитные волны излучают…"), [t("charges at rest", "անշարժ լիցքերը", "покоящиеся заряды"), t("charges moving uniformly", "հավասարաչափ շարժվող լիցքերը", "равномерно движущиеся заряды"), t("accelerated charges", "արագացումով շարժվող լիցքերը", "ускоренно движущиеся заряды")], 2),
        q(t("The wavelength of a 300 MHz radio wave is…", "300 ՄՀց ռադիոալիքի երկարությունը…", "Длина радиоволны 300 МГц равна…"), [t("1 m", "1 մ է", "1 м"), t("10 m", "10 մ է", "10 м"), t("1 km", "1 կմ է", "1 км")], 0),
        q(t("Which radiation has the shortest wavelength?", "Ո՞ր ճառագայթումն ունի ամենակարճ ալիքի երկարությունը։", "Какое излучение имеет самую короткую длину волны?"), [t("infrared", "ինֆրակարմիրը", "инфракрасное"), t("ultraviolet", "ուլտրամանուշակագույնը", "ультрафиолетовое"), t("gamma rays", "գամմա ճառագայթները", "гамма-излучение")], 2),
      ],
    ),
    lesson(
      "radio",
      ["Principles of radio; modulation; radar; mobile communication", "Ռադիոյի սկզբունքներ, մոդուլյացիա, ռադար, շարժական կապ", "Принципы радиосвязи; модуляция; радиолокация; мобильная связь"],
      {
        en: ["Describe the blocks of a radio transmitter and receiver: generator, modulator, antenna, tuned circuit, detector", "Explain amplitude and frequency modulation and detection, and why a high-frequency carrier is needed", "Explain how radar, television, satellite and mobile communication use electromagnetic waves"],
        hy: ["Նկարագրել ռադիոհաղորդիչի և ռադիոընդունիչի բլոկները․ գեներատոր, մոդուլյատոր, ալեհավաք, կարգավորվող կոնտուր, դետեկտոր", "Բացատրել լայնույթային և հաճախային մոդուլյացիան ու դետեկտումը, և թե ինչու է անհրաժեշտ բարձր հաճախության կրող ալիք", "Բացատրել, թե ինչպես են ռադարը, հեռուստատեսությունը, արբանյակային և բջջային կապն օգտագործում էլեկտրամագնիսական ալիքները"],
        ru: ["Описывать блоки радиопередатчика и радиоприёмника: генератор, модулятор, антенна, колебательный контур, детектор", "Объяснять амплитудную и частотную модуляцию и детектирование, а также зачем нужна высокочастотная несущая", "Объяснять, как радиолокация, телевидение, спутниковая и мобильная связь используют электромагнитные волны"],
      },
      {
        en: `## The problem of radio communication

Speech and music have frequencies of $20$ Hz to $20$ kHz. Waves of such frequencies are radiated extremely weakly (radiated power grows as $\\omega^4$) and would need antennas kilometres long ($\\lambda = 15$ km at $20$ kHz). Moreover all stations would transmit in the same band and could not be separated. The solution, found by Popov and Marconi (1895–1896) for telegraphy and developed for speech in the 1900s, is to use a **high-frequency carrier** wave and to imprint the low-frequency signal on it.

## Transmitter

1. A **generator** (an oscillating circuit with a transistor that feeds energy in step with the oscillations) produces a steady high-frequency current, the **carrier**: $i = I_m\\cos\\omega_0 t$ with $\\omega_0$ in the range of hundreds of kilohertz to gigahertz.
2. A **microphone** converts sound into a low-frequency electric signal $u(t)$.
3. The **modulator** changes a parameter of the carrier in step with $u(t)$. In **amplitude modulation** (AM) the amplitude follows the signal: $i = I_m(1 + m\\,u(t))\\cos\\omega_0 t$; the envelope of the high-frequency oscillation reproduces the sound. In **frequency modulation** (FM) the frequency is shifted by the signal while the amplitude stays constant; FM is much less sensitive to noise, which mostly affects amplitudes, and is used for high-quality broadcasting at $88$–$108$ MHz.
4. The **antenna**, an open oscillating circuit, radiates the modulated wave. Each station gets its own carrier frequency, so many stations coexist in the air.

## Receiver

1. The **receiving antenna** picks up the fields of all stations; each induces a weak current.
2. The **tuned circuit** has its resonance frequency set equal to the desired carrier (by a variable capacitor or by electronics); the chosen station produces a large current, the others a negligible one. This is resonance at work.
3. The **detector** (a diode) lets through only one half of each oscillation; a capacitor smooths the pulses, and what remains is the envelope, that is, the original low-frequency signal. This step is called **demodulation**.
4. An **amplifier** and a **loudspeaker** convert the signal back into sound.

A crystal radio, with just an antenna, a tuned circuit, a diode and earphones, needs no battery at all: the energy comes from the wave.

## Propagation

Long waves ($\\lambda > 1$ km) follow the Earth's curvature; medium and short waves ($10$–$100$ m) reflect from the ionosphere and travel around the globe, especially at night; ultra-short waves (VHF, UHF, used for FM, TV and mobile phones) travel in straight lines and need the antennas to "see" each other, hence tall masts and repeater satellites. Microwaves pass through the ionosphere and reach satellites.

## Radar, television, mobile communication

**Radar** sends short microwave pulses and receives the echo. The delay $t$ gives the distance $d = \\dfrac{ct}{2}$, the direction of the narrow beam gives the bearing, and the Doppler shift of the echo gives the speed of the target. Air traffic control, weather radar, speed cameras and the parking sensors of a car all use this.

**Television** modulates the carrier with the image signal, obtained by scanning the picture line by line, plus the sound; digital TV sends the picture as a compressed data stream.

**Mobile communication** divides the territory into **cells** of a few kilometres, each with a base station on a low-power carrier in the $0{.}8$–$3{.}5$ GHz range (and higher for 5G). Neighbouring cells use different frequencies, so the same frequencies are reused far apart and millions of phones share the spectrum. A moving phone is handed over from one cell to the next. Speech is digitised, compressed and sent in short bursts, with error correction and encryption.

**Example 1.** A medium-wave station at $1$ MHz carries speech up to $5$ kHz. The carrier makes $\\dfrac{10^6}{5000} = 200$ oscillations per period of the highest audio frequency: the envelope changes slowly compared with the carrier, as required for modulation and detection.

**Example 2.** An AM signal with $m = 0{.}5$ has its amplitude varying between $0{.}5 I_m$ and $1{.}5 I_m$. With $m > 1$ the envelope would be cut off at zero and the detected sound distorted; broadcasting keeps $m \\le 1$.

**Example 3.** A receiver's circuit has $L = 200$ μH. To receive a station at $600$ kHz the capacitance must be $C = \\dfrac{1}{4\\pi^2\\nu^2 L} = \\dfrac{1}{39{.}5 \\cdot 3{.}6 \\cdot 10^{11} \\cdot 2 \\cdot 10^{-4}} \\approx 350$ pF. Turning the knob to $88$ pF selects $1200$ kHz.

**Example 4.** Two stations broadcast at $1000$ kHz and $1010$ kHz. If each uses a $5$ kHz audio band, its signal occupies $995$–$1005$ kHz and $1005$–$1015$ kHz: they just fit. That is why AM stations are spaced $9$–$10$ kHz apart and why AM sound quality is limited.

**Example 5.** A radar with pulse length $1$ μs cannot distinguish two targets closer than $\\dfrac{c\\tau}{2} = 150$ m, because their echoes overlap. Its maximum unambiguous range with a pulse every $1$ ms is $\\dfrac{c \\cdot 10^{-3}}{2} = 150$ km.

**Example 6.** A geostationary TV satellite is $36000$ km above the equator. The signal delay from the ground station up and down is $\\dfrac{2 \\cdot 3{.}6 \\cdot 10^7}{3 \\cdot 10^8} = 0{.}24$ s, which is why satellite phone conversations have a noticeable lag.

**Example 7.** A base station's antenna at height $h = 30$ m sees a phone on the ground up to about $d = \\sqrt{2Rh} = \\sqrt{2 \\cdot 6{.}4 \\cdot 10^6 \\cdot 30} \\approx 20$ km away (geometric horizon). Cells in cities are much smaller because of buildings and the number of users.

**Example 8.** Why does a phone's signal drop in a lift or a tunnel? The metal walls of the lift act as a closed conductor (a Faraday cage): the alternating field induces currents that cancel the field inside. In a tunnel the $15$ cm waves cannot bend around the rock, so repeaters are installed inside.

## Exercises

1. Why can a $1$ kHz signal not be sent directly by radio? Give two reasons.
2. A carrier at $800$ kHz is amplitude-modulated by a $4$ kHz tone. How many carrier oscillations occur in one period of the tone?
3. What is the role of the diode in a receiver? What would be heard without it?
4. A receiver circuit has $C = 100$ pF. Find $L$ for receiving $100$ MHz.
5. A radar echo returns after $50$ μs. Find the distance. What pulse length is needed to resolve targets $30$ m apart?
6. Explain why FM broadcasting is less affected by lightning and motor noise than AM.
7. Find the signal delay between two ground stations via a geostationary satellite, if the path up and down totals $80000$ km.
8. Why do neighbouring cells of a mobile network use different frequencies, while cells far apart can use the same ones?

### Answers

1. Antennas would have to be enormous and radiation is negligible at low frequency; all stations would overlap in the same band. 2. $200$. 3. It rectifies the signal so that the envelope (the audio) can be extracted; without it the positive and negative half-waves cancel and nothing audible remains. 4. $L = \\dfrac{1}{4\\pi^2 \\cdot 10^{16} \\cdot 10^{-10}} \\approx 25$ nH. 5. $7{.}5$ km; $\\tau \\le \\dfrac{2 \\cdot 30}{c} = 0{.}2$ μs. 6. Noise mainly changes the amplitude; an FM receiver ignores amplitude changes and reads only the frequency. 7. $\\dfrac{8 \\cdot 10^7}{3 \\cdot 10^8} \\approx 0{.}27$ s. 8. Neighbours would interfere with each other; distant cells are out of range of each other's low-power transmitters, so frequencies can be reused.`,
        hy: `## Ռադիոկապի խնդիրը

Խոսքն ու երաժշտությունն ունեն $20$ Հց-ից մինչև $20$ կՀց հաճախություններ։ Այդպիսի հաճախության ալիքները չափազանց թույլ են ճառագայթվում (ճառագայթվող հզորությունն աճում է $\\omega^4$-ի համեմատ) և կպահանջեին կիլոմետրանոց ալեհավաքներ ($\\lambda = 15$ կմ $20$ կՀց-ի դեպքում)։ Բացի այդ, բոլոր կայանները կհաղորդեին նույն տիրույթում և չէին կարող տարանջատվել։ Լուծումը, որը Պոպովն ու Մարկոնին գտան (1895–1896) հեռագրության համար և 1900-ականներին զարգացրին խոսքի համար, **բարձր հաճախության կրող** ալիքի օգտագործումն է և նրա վրա ցածր հաճախության ազդանշանի դրոշմումը։

## Հաղորդիչ

1. **Գեներատորը** (տատանողական կոնտուր տրանզիստորով, որը տատանումների հետ համաքայլ էներգիա է մատակարարում) արտադրում է կայուն բարձր հաճախության հոսանք՝ **կրող ալիքը**․ $i = I_m\\cos\\omega_0 t$, որտեղ $\\omega_0$-ն հարյուրավոր կիլոհերցից մինչև գիգահերց տիրույթում է։
2. **Խոսափողը** ձայնը վերածում է ցածր հաճախության էլեկտրական $u(t)$ ազդանշանի։
3. **Մոդուլյատորը** փոխում է կրող ալիքի որևէ պարամետր $u(t)$-ի հետ համաքայլ։ **Լայնույթային մոդուլյացիայի** (ԱՄ) դեպքում լայնույթը հետևում է ազդանշանին․ $i = I_m(1 + m\\,u(t))\\cos\\omega_0 t$, բարձր հաճախության տատանման պարուրիչը վերարտադրում է ձայնը։ **Հաճախային մոդուլյացիայի** (ՖՄ) դեպքում հաճախությունը շեղվում է ազդանշանով, իսկ լայնույթը մնում է հաստատուն, ՖՄ-ն շատ ավելի քիչ զգայուն է աղմուկի նկատմամբ, որը հիմնականում ազդում է լայնույթների վրա, և օգտագործվում է բարձրորակ հեռարձակման համար $88$–$108$ ՄՀց-ով։
4. **Ալեհավաքը**՝ բաց տատանողական կոնտուրը, ճառագայթում է մոդուլացված ալիքը։ Յուրաքանչյուր կայան ստանում է իր կրող հաճախությունը, ուստի եթերում բազմաթիվ կայաններ գոյակցում են։

## Ընդունիչ

1. **Ընդունող ալեհավաքը** որսում է բոլոր կայանների դաշտերը, յուրաքանչյուրը թույլ հոսանք է մակածում։
2. **Կարգավորվող կոնտուրի** ռեզոնանսային հաճախությունը հավասարեցվում է ցանկալի կրող հաճախությանը (փոփոխական կոնդենսատորով կամ էլեկտրոնիկայով), ընտրված կայանը մեծ հոսանք է ստեղծում, մյուսները՝ աննշան։ Սա ռեզոնանսն է գործողության մեջ։
3. **Դետեկտորը** (դիոդը) բաց է թողնում յուրաքանչյուր տատանման միայն մեկ կեսը, կոնդենսատորը հարթեցնում է իմպուլսները, և մնում է պարուրիչը, այսինքն՝ սկզբնական ցածր հաճախության ազդանշանը։ Այս քայլը կոչվում է **դեմոդուլյացիա**։
4. **Ուժեղարարը** և **բարձրախոսն** ազդանշանը նորից վերածում են ձայնի։

Դետեկտորային ընդունիչը՝ ընդամենը ալեհավաքով, կարգավորվող կոնտուրով, դիոդով և ականջակալներով, ընդհանրապես մարտկոց չի պահանջում․ էներգիան գալիս է ալիքից։

## Տարածում

Երկար ալիքները ($\\lambda > 1$ կմ) հետևում են Երկրի կորությանը, միջին և կարճ ալիքները ($10$–$100$ մ) անդրադառնում են իոնոլորտից և շրջում երկրագնդով, հատկապես գիշերը, գերկարճ ալիքները (ՖՄ-ի, հեռուստատեսության և բջջային հեռախոսների համար) տարածվում են ուղղագիծ, և ալեհավաքները պետք է «տեսնեն» միմյանց, այստեղից՝ բարձր կայմերն ու վերահաղորդիչ արբանյակները։ Միկրոալիքներն անցնում են իոնոլորտով և հասնում արբանյակներին։

## Ռադար, հեռուստատեսություն, բջջային կապ

**Ռադարն** ուղարկում է կարճ միկրոալիքային իմպուլսներ և ընդունում արձագանքը։ $t$ ուշացումը տալիս է $d = \\dfrac{ct}{2}$ հեռավորությունը, նեղ փնջի ուղղությունը՝ ուղղությունը, իսկ արձագանքի դոպլերյան շեղումը՝ թիրախի արագությունը։ Օդային երթևեկության կառավարումը, եղանակային ռադարը, արագաչափ տեսախցիկները և մեքենայի կայանման տվիչները բոլորն օգտագործում են սա։

**Հեռուստատեսությունը** կրող ալիքը մոդուլացնում է պատկերի ազդանշանով, որը ստացվում է պատկերը տող առ տող սկանավորելով, գումարած ձայնը, թվային հեռուստատեսությունը պատկերն ուղարկում է որպես սեղմված տվյալների հոսք։

**Բջջային կապը** տարածքը բաժանում է մի քանի կիլոմետրանոց **բջիջների**, յուրաքանչյուրը $0{,}8$–$3{,}5$ ԳՀց տիրույթի (5G-ի համար՝ ավելի բարձր) ցածր հզորության կրող ալիքով բազային կայանով։ Հարևան բջիջներն օգտագործում են տարբեր հաճախություններ, ուստի նույն հաճախությունները կրկին օգտագործվում են հեռու, և միլիոնավոր հեռախոսներ կիսում են սպեկտրը։ Շարժվող հեռախոսը մի բջջից փոխանցվում է հաջորդին։ Խոսքը թվայնացվում, սեղմվում և ուղարկվում է կարճ փնջերով՝ սխալների ուղղումով և գաղտնագրումով։

**Օրինակ 1։** $1$ ՄՀց միջին ալիքների կայանը կրում է մինչև $5$ կՀց խոսք։ Կրող ալիքը կատարում է $\\dfrac{10^6}{5000} = 200$ տատանում ձայնային ամենաբարձր հաճախության մեկ պարբերության ընթացքում․ պարուրիչը կրող ալիքի համեմատ դանդաղ է փոխվում, ինչպես պահանջվում է մոդուլյացիայի և դետեկտման համար։

**Օրինակ 2։** $m = 0{,}5$ ԱՄ ազդանշանի լայնույթը փոխվում է $0{,}5 I_m$-ից մինչև $1{,}5 I_m$։ $m > 1$ դեպքում պարուրիչը զրոյի մոտ կկտրվեր, և դետեկտված ձայնը կաղավաղվեր, հեռարձակումը պահում է $m \\le 1$։

**Օրինակ 3։** Ընդունիչի կոնտուրն ունի $L = 200$ մկՀն։ $600$ կՀց կայանն ընդունելու համար ունակությունը պետք է լինի $C = \\dfrac{1}{4\\pi^2\\nu^2 L} = \\dfrac{1}{39{,}5 \\cdot 3{,}6 \\cdot 10^{11} \\cdot 2 \\cdot 10^{-4}} \\approx 350$ պՖ։ Բռնակը $88$ պՖ-ի պտտելն ընտրում է $1200$ կՀց։

**Օրինակ 4։** Երկու կայան հեռարձակում են $1000$ կՀց և $1010$ կՀց-ով։ Եթե յուրաքանչյուրն օգտագործում է $5$ կՀց ձայնային շերտ, նրա ազդանշանը զբաղեցնում է $995$–$1005$ կՀց և $1005$–$1015$ կՀց․ հազիվ են տեղավորվում։ Այդ պատճառով ԱՄ կայաններն իրարից $9$–$10$ կՀց հեռու են, և ԱՄ ձայնի որակը սահմանափակ է։

**Օրինակ 5։** $1$ մկվ իմպուլսի երկարությամբ ռադարը չի կարող տարբերել $\\dfrac{c\\tau}{2} = 150$ մ-ից մոտ երկու թիրախ, քանի որ նրանց արձագանքները համընկնում են։ Ամեն $1$ մվ-ը մեկ իմպուլսի դեպքում նրա առավելագույն միարժեք հեռահարությունը $\\dfrac{c \\cdot 10^{-3}}{2} = 150$ կմ է։

**Օրինակ 6։** Գեոստացիոնար հեռուստաարբանյակը հասարակածից $36000$ կմ բարձր է։ Ազդանշանի ուշացումը վերգետնյա կայանից վեր և վար $\\dfrac{2 \\cdot 3{,}6 \\cdot 10^7}{3 \\cdot 10^8} = 0{,}24$ վ է, այդ պատճառով արբանյակային հեռախոսային խոսակցություններն ունեն նկատելի ուշացում։

**Օրինակ 7։** $h = 30$ մ բարձրության բազային կայանի ալեհավաքը գետնի վրա հեռախոսը տեսնում է մինչև մոտ $d = \\sqrt{2Rh} = \\sqrt{2 \\cdot 6{,}4 \\cdot 10^6 \\cdot 30} \\approx 20$ կմ հեռավորության վրա (երկրաչափական հորիզոն)։ Քաղաքներում բջիջները շատ ավելի փոքր են շենքերի և օգտատերերի թվի պատճառով։

**Օրինակ 8։** Ինչո՞ւ է հեռախոսի ազդանշանն ընկնում վերելակում կամ թունելում։ Վերելակի մետաղե պատերը գործում են որպես փակ հաղորդիչ (Ֆարադեյի վանդակ)․ փոփոխական դաշտը մակածում է հոսանքներ, որոնք չեզոքացնում են դաշտը ներսում։ Թունելում $15$ սմ ալիքները չեն կարող շրջանցել ժայռը, ուստի ներսում վերահաղորդիչներ են տեղադրվում։

## Վարժություններ

1. Ինչո՞ւ $1$ կՀց ազդանշանը չի կարող ուղղակիորեն ուղարկվել ռադիոյով։ Բերեք երկու պատճառ։
2. $800$ կՀց կրող ալիքը լայնույթային մոդուլացված է $4$ կՀց տոնով։ Քանի՞ կրող ալիքի տատանում է տեղի ունենում տոնի մեկ պարբերության ընթացքում։
3. Ո՞րն է դիոդի դերն ընդունիչում։ Ի՞նչ կլսվեր առանց դրա։
4. Ընդունիչի կոնտուրն ունի $C = 100$ պՖ։ Գտեք $L$-ը $100$ ՄՀց ընդունելու համար։
5. Ռադարի արձագանքը վերադառնում է $50$ մկվ հետո։ Գտեք հեռավորությունը։ Ի՞նչ իմպուլսի երկարություն է անհրաժեշտ իրարից $30$ մ հեռու թիրախները տարբերելու համար։
6. Բացատրեք, թե ինչու ՖՄ հեռարձակումը կայծակից և շարժիչների աղմուկից ավելի քիչ է տուժում, քան ԱՄ-ն։
7. Գտեք ազդանշանի ուշացումն երկու վերգետնյա կայանների միջև գեոստացիոնար արբանյակով, եթե վեր և վար ճանապարհն ընդհանուր $80000$ կմ է։
8. Ինչո՞ւ են բջջային ցանցի հարևան բջիջներն օգտագործում տարբեր հաճախություններ, իսկ հեռու բջիջները կարող են օգտագործել նույնը։

### Պատասխաններ

1. Ալեհավաքները պետք է հսկայական լինեին, և ցածր հաճախության դեպքում ճառագայթումն աննշան է, բոլոր կայանները կհամընկնեին նույն տիրույթում։ 2. $200$։ 3. Այն ուղղում է ազդանշանը, որպեսզի պարուրիչը (ձայնը) հնարավոր լինի առանձնացնել, առանց դրա դրական և բացասական կիսաալիքներն իրար չեզոքացնում են, և լսելի ոչինչ չի մնում։ 4. $L = \\dfrac{1}{4\\pi^2 \\cdot 10^{16} \\cdot 10^{-10}} \\approx 25$ նՀն։ 5. $7{,}5$ կմ, $\\tau \\le \\dfrac{2 \\cdot 30}{c} = 0{,}2$ մկվ։ 6. Աղմուկը հիմնականում փոխում է լայնույթը, ՖՄ ընդունիչն անտեսում է լայնույթի փոփոխությունները և կարդում միայն հաճախությունը։ 7. $\\dfrac{8 \\cdot 10^7}{3 \\cdot 10^8} \\approx 0{,}27$ վ։ 8. Հարևանները կխանգարեին միմյանց, հեռու բջիջները միմյանց ցածր հզորության հաղորդիչների հասանելիությունից դուրս են, ուստի հաճախությունները կարող են կրկին օգտագործվել։`,
        ru: `## Задача радиосвязи

Речь и музыка имеют частоты от $20$ Гц до $20$ кГц. Волны таких частот излучаются крайне слабо (излучаемая мощность растёт как $\\omega^4$) и потребовали бы антенн длиной в километры ($\\lambda = 15$ км при $20$ кГц). К тому же все станции передавали бы в одной полосе, и их нельзя было бы разделить. Решение, найденное Поповым и Маркони (1895–1896) для телеграфа и развитое для речи в 1900-е годы, — использовать **высокочастотную несущую** волну и накладывать на неё низкочастотный сигнал.

## Передатчик

1. **Генератор** (колебательный контур с транзистором, подводящим энергию в такт колебаниям) вырабатывает устойчивый высокочастотный ток — **несущую**: $i = I_m\\cos\\omega_0 t$, где $\\omega_0$ лежит в диапазоне от сотен килогерц до гигагерц.
2. **Микрофон** превращает звук в низкочастотный электрический сигнал $u(t)$.
3. **Модулятор** меняет какой-либо параметр несущей в такт с $u(t)$. При **амплитудной модуляции** (АМ) амплитуда следует за сигналом: $i = I_m(1 + m\\,u(t))\\cos\\omega_0 t$; огибающая высокочастотного колебания воспроизводит звук. При **частотной модуляции** (ЧМ, FM) частота смещается сигналом, а амплитуда остаётся постоянной; ЧМ гораздо менее чувствительна к помехам, которые в основном искажают амплитуду, и используется для качественного вещания на $88$–$108$ МГц.
4. **Антенна**, открытый колебательный контур, излучает модулированную волну. Каждой станции отводится своя несущая частота, поэтому в эфире сосуществует множество станций.

## Приёмник

1. **Приёмная антенна** улавливает поля всех станций; каждая наводит слабый ток.
2. **Колебательный контур** настраивают так, чтобы его резонансная частота равнялась нужной несущей (переменным конденсатором или электроникой); выбранная станция создаёт большой ток, остальные — ничтожный. Это резонанс в действии.
3. **Детектор** (диод) пропускает только одну половину каждого колебания; конденсатор сглаживает импульсы, и остаётся огибающая, то есть исходный низкочастотный сигнал. Этот шаг называется **демодуляцией**.
4. **Усилитель** и **громкоговоритель** превращают сигнал обратно в звук.

Детекторный приёмник — всего лишь антенна, контур, диод и наушники — вообще не нуждается в батарее: энергия приходит с волной.

## Распространение

Длинные волны ($\\lambda > 1$ км) огибают кривизну Земли; средние и короткие ($10$–$100$ м) отражаются от ионосферы и обходят земной шар, особенно ночью; ультракороткие волны (УКВ, для FM, ТВ и мобильных телефонов) распространяются прямолинейно, и антенны должны «видеть» друг друга — отсюда высокие мачты и спутники-ретрансляторы. Микроволны проходят сквозь ионосферу и достигают спутников.

## Радиолокация, телевидение, мобильная связь

**Радиолокатор** посылает короткие микроволновые импульсы и принимает эхо. Задержка $t$ даёт расстояние $d = \\dfrac{ct}{2}$, направление узкого луча — пеленг, а доплеровский сдвиг эха — скорость цели. Управление воздушным движением, метеорадары, камеры контроля скорости и парковочные датчики автомобиля используют именно это.

**Телевидение** модулирует несущую сигналом изображения, полученным построчным сканированием картинки, плюс звуком; цифровое ТВ передаёт картинку как сжатый поток данных.

**Мобильная связь** делит территорию на **соты** размером в несколько километров, каждая с базовой станцией на маломощной несущей в диапазоне $0{,}8$–$3{,}5$ ГГц (и выше для 5G). Соседние соты используют разные частоты, поэтому одни и те же частоты повторяются на расстоянии, и миллионы телефонов делят спектр. Движущийся телефон передаётся от одной соты к следующей. Речь оцифровывается, сжимается и передаётся короткими пакетами с исправлением ошибок и шифрованием.

**Пример 1.** Средневолновая станция на $1$ МГц передаёт речь до $5$ кГц. Несущая совершает $\\dfrac{10^6}{5000} = 200$ колебаний за период наивысшей звуковой частоты: огибающая меняется медленно по сравнению с несущей, как и требуется для модуляции и детектирования.

**Пример 2.** АМ-сигнал с $m = 0{,}5$ имеет амплитуду, меняющуюся от $0{,}5 I_m$ до $1{,}5 I_m$. При $m > 1$ огибающая обрезалась бы на нуле, и детектированный звук искажался бы; в вещании держат $m \\le 1$.

**Пример 3.** Контур приёмника имеет $L = 200$ мкГн. Чтобы принять станцию на $600$ кГц, ёмкость должна быть $C = \\dfrac{1}{4\\pi^2\\nu^2 L} = \\dfrac{1}{39{,}5 \\cdot 3{,}6 \\cdot 10^{11} \\cdot 2 \\cdot 10^{-4}} \\approx 350$ пФ. Поворот ручки до $88$ пФ выбирает $1200$ кГц.

**Пример 4.** Две станции вещают на $1000$ кГц и $1010$ кГц. Если каждая использует звуковую полосу $5$ кГц, её сигнал занимает $995$–$1005$ кГц и $1005$–$1015$ кГц: они едва помещаются. Поэтому АМ-станции разнесены на $9$–$10$ кГц и качество АМ-звука ограничено.

**Пример 5.** Радар с длительностью импульса $1$ мкс не различит две цели ближе $\\dfrac{c\\tau}{2} = 150$ м, потому что их эхо перекрываются. Его наибольшая однозначная дальность при импульсе каждую $1$ мс равна $\\dfrac{c \\cdot 10^{-3}}{2} = 150$ км.

**Пример 6.** Геостационарный телеспутник висит на высоте $36000$ км над экватором. Задержка сигнала от наземной станции вверх и вниз $\\dfrac{2 \\cdot 3{,}6 \\cdot 10^7}{3 \\cdot 10^8} = 0{,}24$ с, поэтому у разговоров через спутник заметная задержка.

**Пример 7.** Антенна базовой станции на высоте $h = 30$ м видит телефон на земле примерно до $d = \\sqrt{2Rh} = \\sqrt{2 \\cdot 6{,}4 \\cdot 10^6 \\cdot 30} \\approx 20$ км (геометрический горизонт). В городах соты гораздо меньше из-за зданий и числа абонентов.

**Пример 8.** Почему сигнал телефона пропадает в лифте или в тоннеле? Металлические стенки лифта действуют как замкнутый проводник (клетка Фарадея): переменное поле наводит токи, которые гасят поле внутри. В тоннеле волны длиной $15$ см не могут обогнуть скалу, поэтому внутри ставят ретрансляторы.

## Упражнения

1. Почему сигнал $1$ кГц нельзя передать по радио напрямую? Назовите две причины.
2. Несущая $800$ кГц амплитудно модулируется тоном $4$ кГц. Сколько колебаний несущей происходит за один период тона?
3. Какова роль диода в приёмнике? Что было бы слышно без него?
4. Контур приёмника имеет $C = 100$ пФ. Найдите $L$ для приёма $100$ МГц.
5. Эхо радара возвращается через $50$ мкс. Найдите расстояние. Какая длительность импульса нужна, чтобы различить цели на расстоянии $30$ м друг от друга?
6. Объясните, почему ЧМ-вещание меньше страдает от молний и помех двигателей, чем АМ.
7. Найдите задержку сигнала между двумя наземными станциями через геостационарный спутник, если путь вверх и вниз в сумме составляет $80000$ км.
8. Почему соседние соты мобильной сети используют разные частоты, а далёкие соты могут использовать одни и те же?

### Ответы

1. Антенны были бы огромными, а излучение на низкой частоте ничтожно; все станции перекрывались бы в одной полосе. 2. $200$. 3. Он выпрямляет сигнал, чтобы можно было выделить огибающую (звук); без него положительные и отрицательные полуволны взаимно уничтожаются, и ничего слышимого не остаётся. 4. $L = \\dfrac{1}{4\\pi^2 \\cdot 10^{16} \\cdot 10^{-10}} \\approx 25$ нГн. 5. $7{,}5$ км; $\\tau \\le \\dfrac{2 \\cdot 30}{c} = 0{,}2$ мкс. 6. Помехи в основном меняют амплитуду; ЧМ-приёмник игнорирует изменения амплитуды и читает только частоту. 7. $\\dfrac{8 \\cdot 10^7}{3 \\cdot 10^8} \\approx 0{,}27$ с. 8. Соседи мешали бы друг другу; далёкие соты вне досягаемости маломощных передатчиков друг друга, поэтому частоты можно использовать повторно.`,
      },
      [
        q(t("A high-frequency carrier is needed because low-frequency waves…", "Բարձր հաճախության կրող ալիք է անհրաժեշտ, քանի որ ցածր հաճախության ալիքները…", "Высокочастотная несущая нужна, потому что низкочастотные волны…"), [t("radiate very weakly and need huge antennas", "շատ թույլ են ճառագայթվում և հսկայական ալեհավաքներ են պահանջում", "излучаются очень слабо и требуют огромных антенн"), t("travel faster", "ավելի արագ են տարածվում", "распространяются быстрее"), t("are dangerous", "վտանգավոր են", "опасны")], 0),
        q(t("In amplitude modulation the signal changes the carrier's…", "Լայնույթային մոդուլյացիայի դեպքում ազդանշանը փոխում է կրող ալիքի…", "При амплитудной модуляции сигнал меняет у несущей…"), [t("frequency", "հաճախությունը", "частоту"), t("amplitude", "լայնույթը", "амплитуду"), t("speed", "արագությունը", "скорость")], 1),
        q(t("The receiver selects a station using…", "Ընդունիչը կայանն ընտրում է…", "Приёмник выбирает станцию с помощью…"), [t("the diode", "դիոդով", "диода"), t("resonance of the tuned circuit", "կարգավորվող կոնտուրի ռեզոնանսով", "резонанса колебательного контура"), t("the loudspeaker", "բարձրախոսով", "громкоговорителя")], 1),
        q(t("The detector in a receiver…", "Ընդունիչի դետեկտորը…", "Детектор в приёмнике…"), [t("extracts the low-frequency signal from the modulated wave", "մոդուլացված ալիքից առանձնացնում է ցածր հաճախության ազդանշանը", "выделяет низкочастотный сигнал из модулированной волны"), t("amplifies the carrier", "ուժեղացնում է կրող ալիքը", "усиливает несущую"), t("radiates the wave", "ճառագայթում է ալիքը", "излучает волну")], 0),
        q(t("A radar echo returns after 100 μs. The target is at…", "Ռադարի արձագանքը վերադառնում է 100 մկվ հետո։ Թիրախը գտնվում է…", "Эхо радара возвращается через 100 мкс. Цель находится на расстоянии…"), [t("30 km", "30 կմ հեռավորության վրա", "30 км"), t("15 km", "15 կմ հեռավորության վրա", "15 км"), t("3 km", "3 կմ հեռավորության վրա", "3 км")], 1),
        q(t("FM is less sensitive to noise than AM because…", "ՖՄ-ն աղմուկի նկատմամբ ավելի քիչ զգայուն է, քան ԱՄ-ն, քանի որ…", "ЧМ менее чувствительна к помехам, чем АМ, потому что…"), [t("noise mainly changes the amplitude, which FM ignores", "աղմուկը հիմնականում փոխում է լայնույթը, որը ՖՄ-ն անտեսում է", "помехи в основном меняют амплитуду, которую ЧМ игнорирует"), t("FM waves are longer", "ՖՄ ալիքներն ավելի երկար են", "волны ЧМ длиннее"), t("FM uses no carrier", "ՖՄ-ն կրող ալիք չի օգտագործում", "ЧМ не использует несущую")], 0),
      ],
    ),
  ],
};
