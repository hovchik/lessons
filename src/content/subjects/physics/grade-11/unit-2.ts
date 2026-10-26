import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Oscillations and alternating current", "Տատանումներ և փոփոխական հոսանք", "Колебания и переменный ток"),
  summary: t("Harmonic oscillations, pendulums, oscillating circuit, AC, resonance, transformer, power transmission.", "Հարմոնիկ տատանումներ, ճոճանակներ, տատանողական կոնտուր, փոփոխական հոսանք, ռեզոնանս, տրանսֆորմատոր, էներգիայի հաղորդում։", "Гармонические колебания, маятники, колебательный контур, переменный ток, резонанс, трансформатор, передача энергии."),
  lessons: [
    lesson(
      "harmonic-oscillations",
      ["Harmonic oscillations: equation, energy", "Հարմոնիկ տատանումներ․ հավասարում, էներգիա", "Гармонические колебания: уравнение, энергия"],
      {
        en: ["Write the equation x = A cos(ωt + φ₀) of a harmonic oscillation and read off amplitude, period, frequency and phase", "Derive the periods of a spring pendulum T = 2π√(m/k) and a simple pendulum T = 2π√(l/g)", "Describe the transformations of energy during oscillations and explain damped and forced oscillations and resonance"],
        hy: ["Գրել հարմոնիկ տատանման x = A cos(ωt + φ₀) հավասարումը և որոշել լայնույթը, պարբերությունը, հաճախությունն ու փուլը", "Արտածել զսպանակավոր ճոճանակի T = 2π√(m/k) և մաթեմատիկական ճոճանակի T = 2π√(l/g) պարբերությունները", "Նկարագրել էներգիայի փոխակերպումները տատանումների ընթացքում և բացատրել մարող և հարկադրական տատանումներն ու ռեզոնանսը"],
        ru: ["Записывать уравнение гармонического колебания x = A cos(ωt + φ₀) и определять амплитуду, период, частоту и фазу", "Выводить периоды пружинного маятника T = 2π√(m/k) и математического маятника T = 2π√(l/g)", "Описывать превращения энергии при колебаниях и объяснять затухающие и вынужденные колебания и резонанс"],
      },
      {
        en: `## Oscillations

An **oscillation** is a motion that repeats itself: a swing, a vibrating string, a weight on a spring, the voltage in a wall socket. **Free oscillations** happen in a system left to itself after a push; **forced oscillations** are driven by a periodic external force.

A system oscillates freely when it has a stable equilibrium position, a **restoring force** that pulls it back toward that position, and inertia that carries it past the position.

## Harmonic oscillations

The simplest oscillation is **harmonic**: the coordinate changes as a cosine or sine of time.

> $$x = A\\cos(\\omega t + \\varphi_0).$$
> $A$ is the **amplitude** (maximum displacement), $\\omega$ the **cyclic frequency**, $\\varphi_0$ the **initial phase**; $\\omega t + \\varphi_0$ is the phase.

The motion repeats after the **period** $T = \\dfrac{2\\pi}{\\omega}$; the **frequency** $\\nu = \\dfrac{1}{T}$ is the number of oscillations per second (hertz). Velocity and acceleration are also harmonic:

$$v = -A\\omega\\sin(\\omega t + \\varphi_0), \\qquad a = -A\\omega^2\\cos(\\omega t + \\varphi_0) = -\\omega^2 x.$$

The maximum speed is $v_{\\max} = A\\omega$ (at the equilibrium position) and the maximum acceleration $a_{\\max} = A\\omega^2$ (at the extreme positions). The key property is $a = -\\omega^2 x$: the acceleration is proportional to the displacement and opposite to it. Any system in which the restoring force is proportional to the displacement, $F = -kx$, oscillates harmonically with $\\omega^2 = \\dfrac{k}{m}$.

## Spring and simple pendulums

**Spring pendulum.** A mass $m$ on a spring of stiffness $k$: Hooke's force $F = -kx$, so

$$T = 2\\pi\\sqrt{\\dfrac{m}{k}}.$$

The period does not depend on the amplitude or on $g$; a heavier mass or a softer spring gives a longer period.

**Simple (mathematical) pendulum.** A point mass on a weightless thread of length $l$. For small angles the restoring force along the arc is $F \\approx -mg\\dfrac{x}{l}$, that is $k = \\dfrac{mg}{l}$, so

$$T = 2\\pi\\sqrt{\\dfrac{l}{g}}.$$

The period does not depend on the mass or (for small swings) on the amplitude. Galileo used this to time the pulse; Huygens built the pendulum clock. A pendulum can measure $g$.

## Energy

In a spring pendulum the energy passes back and forth between kinetic and potential: $E = \\dfrac{kx^2}{2} + \\dfrac{mv^2}{2} = \\dfrac{kA^2}{2} = \\dfrac{mv_{\\max}^2}{2}$. At the extremes all the energy is potential, at the equilibrium position all is kinetic. The total energy is proportional to the square of the amplitude.

## Damped and forced oscillations; resonance

Friction takes energy from the system, the amplitude decreases and the oscillations are **damped**. To sustain them, a periodic force is applied: these **forced oscillations** have the frequency of the force, not the natural frequency. When the driving frequency approaches the natural frequency $\\omega_0$ the amplitude rises sharply: **resonance**. Resonance is used in musical instruments and radio tuning, and avoided in bridges, engines and buildings. The smaller the friction, the sharper and higher the resonance peak.

**Example 1.** $x = 0{.}05\\cos(4\\pi t)$ (SI units). Amplitude $5$ cm, $\\omega = 4\\pi$ rad/s, $T = 0{.}5$ s, $\\nu = 2$ Hz. $v_{\\max} = 0{.}05 \\cdot 4\\pi \\approx 0{.}63$ m/s, $a_{\\max} = 0{.}05 \\cdot 16\\pi^2 \\approx 7{.}9$ m/s².

**Example 2.** A $200$ g mass on a spring of stiffness $50$ N/m: $T = 2\\pi\\sqrt{\\dfrac{0{.}2}{50}} = 2\\pi \\cdot 0{.}063 \\approx 0{.}4$ s, $\\nu \\approx 2{.}5$ Hz.

**Example 3.** A pendulum of length $1$ m on Earth ($g \\approx 9{.}8$ m/s²): $T = 2\\pi\\sqrt{\\dfrac{1}{9{.}8}} \\approx 2{.}0$ s. On the Moon ($g = 1{.}6$ m/s²) the same pendulum has $T \\approx 5{.}0$ s. A pendulum clock would run slow there.

**Example 4.** A pendulum makes $50$ oscillations in $100$ s, so $T = 2$ s. Its length: $l = \\dfrac{gT^2}{4\\pi^2} = \\dfrac{9{.}8 \\cdot 4}{39{.}5} \\approx 0{.}99$ m. If the measured period were $2{.}01$ s with $l = 1{.}000$ m, then $g = \\dfrac{4\\pi^2 l}{T^2} \\approx 9{.}77$ m/s².

**Example 5.** A spring pendulum has amplitude $4$ cm and $k = 100$ N/m. Total energy $E = \\dfrac{100 \\cdot 0{.}0016}{2} = 0{.}08$ J. At $x = 2$ cm the potential energy is $0{.}02$ J and the kinetic energy $0{.}06$ J. If the amplitude is doubled, the energy grows four times.

**Example 6.** How does the period change if the mass on a spring is quadrupled? $T \\propto \\sqrt m$, so it doubles. If a pendulum is made $4$ times shorter, its period halves.

**Example 7.** Two springs of stiffness $k$ each are joined in series: the total stiffness is $\\dfrac{k}{2}$ and the period grows $\\sqrt2$ times. In parallel: stiffness $2k$, period shrinks $\\sqrt2$ times.

**Example 8.** Soldiers crossing a bridge are ordered to break step. Marching in step is a periodic force; if its frequency matches a natural frequency of the bridge, resonance can build up a dangerous amplitude (the Angers bridge collapse, 1850). Washing machines "jump" when the drum speed passes through the resonance frequency of the suspension.

## Exercises

1. For $x = 0{.}1\\cos(10\\pi t + \\pi/3)$ find the amplitude, period, frequency and initial phase.
2. Find $v_{\\max}$ and $a_{\\max}$ for the oscillation in Exercise 1.
3. Find the period of a $500$ g mass on a spring of stiffness $20$ N/m.
4. Find the length of a simple pendulum with period $1$ s ($g = 9{.}8$ m/s²).
5. A pendulum has a period of $3$ s on an unknown planet and $2$ s on Earth. Find $g$ on that planet.
6. A spring pendulum with $k = 40$ N/m oscillates with amplitude $5$ cm. Find the total energy and the speed at the equilibrium position if $m = 0{.}1$ kg.
7. How many times does the period of a pendulum change if its length is increased $9$ times?
8. Why does a glass sometimes shatter when a singer holds a particular note?

### Answers

1. $A = 0{.}1$ m, $T = 0{.}2$ s, $\\nu = 5$ Hz, $\\varphi_0 = \\pi/3$. 2. $v_{\\max} = \\pi \\approx 3{.}14$ m/s, $a_{\\max} = 10\\pi^2 \\approx 99$ m/s². 3. $T = 2\\pi\\sqrt{0{.}025} \\approx 0{.}99$ s. 4. $l = \\dfrac{9{.}8}{4\\pi^2} \\approx 0{.}25$ m. 5. $g \\propto \\dfrac{1}{T^2}$: $g = 9{.}8 \\cdot \\dfrac{4}{9} \\approx 4{.}4$ m/s². 6. $E = 0{.}05$ J, $v = \\sqrt{\\dfrac{2E}{m}} = 1$ m/s. 7. It triples. 8. The note's frequency matches a natural frequency of the glass, and resonance makes the amplitude of the glass walls large enough to break.`,
        hy: `## Տատանումներ

**Տատանումը** կրկնվող շարժում է․ ճոճանակ, թրթռացող լար, զսպանակից կախված բեռ, վարդակի լարումը։ **Ազատ տատանումները** տեղի են ունենում հրումից հետո ինքն իրեն թողնված համակարգում, իսկ **հարկադրական տատանումները** առաջանում են պարբերական արտաքին ուժի ազդեցությամբ։

Համակարգն ազատ տատանվում է, երբ ունի կայուն հավասարակշռության դիրք, **վերադարձնող ուժ**, որն այն քաշում է դեպի այդ դիրքը, և իներտություն, որն այն տանում է դիրքից այն կողմ։

## Հարմոնիկ տատանումներ

Ամենապարզ տատանումը **հարմոնիկն** է․ կոորդինատը փոխվում է ժամանակի կոսինուսի կամ սինուսի օրենքով։

> $$x = A\\cos(\\omega t + \\varphi_0)$$
> $A$-ն **լայնույթն** է (առավելագույն շեղումը), $\\omega$-ն՝ **ցիկլային հաճախությունը**, $\\varphi_0$-ն՝ **սկզբնական փուլը**, իսկ $\\omega t + \\varphi_0$-ն՝ փուլը։

Շարժումը կրկնվում է $T = \\dfrac{2\\pi}{\\omega}$ **պարբերությունից** հետո, իսկ $\\nu = \\dfrac{1}{T}$ **հաճախությունը** տատանումների թիվն է մեկ վայրկյանում (հերց)։ Արագությունն ու արագացումը նույնպես հարմոնիկ են․

$$v = -A\\omega\\sin(\\omega t + \\varphi_0), \\qquad a = -A\\omega^2\\cos(\\omega t + \\varphi_0) = -\\omega^2 x$$

Առավելագույն արագությունը $v_{\\max} = A\\omega$ է (հավասարակշռության դիրքում), առավելագույն արագացումը՝ $a_{\\max} = A\\omega^2$ (ծայրային դիրքերում)։ Հիմնական հատկությունը $a = -\\omega^2 x$ է․ արագացումը համեմատական է շեղմանը և հակառակ է նրան։ Ցանկացած համակարգ, որտեղ վերադարձնող ուժը համեմատական է շեղմանը՝ $F = -kx$, տատանվում է հարմոնիկ՝ $\\omega^2 = \\dfrac{k}{m}$։

## Զսպանակավոր և մաթեմատիկական ճոճանակներ

**Զսպանակավոր ճոճանակ։** $k$ կոշտությամբ զսպանակի վրա $m$ զանգված․ Հուկի ուժը $F = -kx$ է, ուստի

$$T = 2\\pi\\sqrt{\\dfrac{m}{k}}$$

Պարբերությունը կախված չէ լայնույթից և $g$-ից, ավելի ծանր զանգվածը կամ ավելի փափուկ զսպանակը տալիս է ավելի մեծ պարբերություն։

**Մաթեմատիկական ճոճանակ։** Նյութական կետ $l$ երկարությամբ անկշիռ թելի վրա։ Փոքր անկյունների դեպքում աղեղի երկայնքով վերադարձնող ուժը $F \\approx -mg\\dfrac{x}{l}$ է, այսինքն՝ $k = \\dfrac{mg}{l}$, ուստի

$$T = 2\\pi\\sqrt{\\dfrac{l}{g}}$$

Պարբերությունը կախված չէ զանգվածից և (փոքր ճոճումների դեպքում) լայնույթից։ Գալիլեյն այն օգտագործել է զարկերակը չափելու համար, Հյույգենսը կառուցել է ճոճանակավոր ժամացույցը։ Ճոճանակով կարելի է չափել $g$-ն։

## Էներգիա

Զսպանակավոր ճոճանակում էներգիան անընդհատ անցնում է կինետիկից պոտենցիալի և հակառակը․ $E = \\dfrac{kx^2}{2} + \\dfrac{mv^2}{2} = \\dfrac{kA^2}{2} = \\dfrac{mv_{\\max}^2}{2}$։ Ծայրային դիրքերում ամբողջ էներգիան պոտենցիալ է, հավասարակշռության դիրքում՝ կինետիկ։ Լրիվ էներգիան համեմատական է լայնույթի քառակուսուն։

## Մարող և հարկադրական տատանումներ, ռեզոնանս

Շփումն էներգիա է խլում համակարգից, լայնույթը նվազում է, և տատանումները **մարում են**։ Դրանք պահպանելու համար կիրառում են պարբերական ուժ․ այդ **հարկադրական տատանումներն** ունեն ուժի հաճախությունը, ոչ թե սեփականը։ Երբ հարկադրող հաճախությունը մոտենում է $\\omega_0$ սեփական հաճախությանը, լայնույթը կտրուկ աճում է․ **ռեզոնանս**։ Ռեզոնանսն օգտագործվում է երաժշտական գործիքներում և ռադիոյի կարգավորման մեջ, իսկ կամուրջներում, շարժիչներում և շենքերում՝ խուսափում են դրանից։ Որքան փոքր է շփումը, այնքան սուր և բարձր է ռեզոնանսային գագաթը։

**Օրինակ 1։** $x = 0{,}05\\cos(4\\pi t)$ (ՄՀ միավորներով)։ Լայնույթը $5$ սմ, $\\omega = 4\\pi$ ռադ/վ, $T = 0{,}5$ վ, $\\nu = 2$ Հց։ $v_{\\max} = 0{,}05 \\cdot 4\\pi \\approx 0{,}63$ մ/վ, $a_{\\max} = 0{,}05 \\cdot 16\\pi^2 \\approx 7{,}9$ մ/վ²։

**Օրինակ 2։** $50$ Ն/մ կոշտությամբ զսպանակի վրա $200$ գ զանգված․ $T = 2\\pi\\sqrt{\\dfrac{0{,}2}{50}} = 2\\pi \\cdot 0{,}063 \\approx 0{,}4$ վ, $\\nu \\approx 2{,}5$ Հց։

**Օրինակ 3։** $1$ մ երկարությամբ ճոճանակ Երկրի վրա ($g \\approx 9{,}8$ մ/վ²)․ $T = 2\\pi\\sqrt{\\dfrac{1}{9{,}8}} \\approx 2{,}0$ վ։ Լուսնի վրա ($g = 1{,}6$ մ/վ²) նույն ճոճանակի համար $T \\approx 5{,}0$ վ։ Ճոճանակավոր ժամացույցն այնտեղ հետ կմնար։

**Օրինակ 4։** Ճոճանակը $100$ վ-ում կատարում է $50$ տատանում, ուստի $T = 2$ վ։ Երկարությունը՝ $l = \\dfrac{gT^2}{4\\pi^2} = \\dfrac{9{,}8 \\cdot 4}{39{,}5} \\approx 0{,}99$ մ։ Եթե չափված պարբերությունը լիներ $2{,}01$ վ, իսկ $l = 1{,}000$ մ, ապա $g = \\dfrac{4\\pi^2 l}{T^2} \\approx 9{,}77$ մ/վ²։

**Օրինակ 5։** Զսպանակավոր ճոճանակն ունի $4$ սմ լայնույթ և $k = 100$ Ն/մ։ Լրիվ էներգիան $E = \\dfrac{100 \\cdot 0{,}0016}{2} = 0{,}08$ Ջ։ $x = 2$ սմ դեպքում պոտենցիալ էներգիան $0{,}02$ Ջ է, կինետիկը՝ $0{,}06$ Ջ։ Լայնույթը կրկնապատկելիս էներգիան աճում է չորս անգամ։

**Օրինակ 6։** Ինչպե՞ս կփոխվի պարբերությունը, եթե զսպանակի զանգվածը քառապատկվի։ $T \\propto \\sqrt m$, ուստի կկրկնապատկվի։ Եթե ճոճանակը $4$ անգամ կարճացվի, պարբերությունը կկիսվի։

**Օրինակ 7։** $k$-ական կոշտությամբ երկու զսպանակ միացված են հաջորդաբար․ ընդհանուր կոշտությունը $\\dfrac{k}{2}$ է, պարբերությունն աճում է $\\sqrt2$ անգամ։ Զուգահեռ միացման դեպքում կոշտությունը $2k$ է, պարբերությունը փոքրանում է $\\sqrt2$ անգամ։

**Օրինակ 8։** Կամրջով անցնող զինվորներին հրամայում են խախտել քայլքը։ Համաքայլ երթը պարբերական ուժ է․ եթե նրա հաճախությունը համընկնի կամրջի սեփական հաճախությանը, ռեզոնանսը կարող է վտանգավոր լայնույթ առաջացնել (Անժեի կամրջի փլուզումը, 1850)։ Լվացքի մեքենաները «ցատկում» են, երբ թմբուկի արագությունն անցնում է կախոցի ռեզոնանսային հաճախությամբ։

## Վարժություններ

1. $x = 0{,}1\\cos(10\\pi t + \\pi/3)$ տատանման համար գտեք լայնույթը, պարբերությունը, հաճախությունն ու սկզբնական փուլը։
2. Գտեք $v_{\\max}$-ը և $a_{\\max}$-ը 1-ին վարժության տատանման համար։
3. Գտեք $20$ Ն/մ կոշտությամբ զսպանակի վրա $500$ գ զանգվածի պարբերությունը։
4. Գտեք $1$ վ պարբերությամբ մաթեմատիկական ճոճանակի երկարությունը ($g = 9{,}8$ մ/վ²)։
5. Ճոճանակի պարբերությունն անհայտ մոլորակի վրա $3$ վ է, Երկրի վրա՝ $2$ վ։ Գտեք $g$-ն այդ մոլորակի վրա։
6. $k = 40$ Ն/մ զսպանակավոր ճոճանակը տատանվում է $5$ սմ լայնույթով։ Գտեք լրիվ էներգիան և արագությունը հավասարակշռության դիրքում, եթե $m = 0{,}1$ կգ։
7. Քանի՞ անգամ կփոխվի ճոճանակի պարբերությունը, եթե երկարությունը մեծացվի $9$ անգամ։
8. Ինչո՞ւ է բաժակն երբեմն փշրվում, երբ երգիչը որոշակի նոտա է պահում։

### Պատասխաններ

1. $A = 0{,}1$ մ, $T = 0{,}2$ վ, $\\nu = 5$ Հց, $\\varphi_0 = \\pi/3$։ 2. $v_{\\max} = \\pi \\approx 3{,}14$ մ/վ, $a_{\\max} = 10\\pi^2 \\approx 99$ մ/վ²։ 3. $T = 2\\pi\\sqrt{0{,}025} \\approx 0{,}99$ վ։ 4. $l = \\dfrac{9{,}8}{4\\pi^2} \\approx 0{,}25$ մ։ 5. $g \\propto \\dfrac{1}{T^2}$․ $g = 9{,}8 \\cdot \\dfrac{4}{9} \\approx 4{,}4$ մ/վ²։ 6. $E = 0{,}05$ Ջ, $v = \\sqrt{\\dfrac{2E}{m}} = 1$ մ/վ։ 7. Եռապատկվում է։ 8. Նոտայի հաճախությունը համընկնում է բաժակի սեփական հաճախությանը, և ռեզոնանսը բաժակի պատերի լայնույթն այնքան է մեծացնում, որ այն փշրվում է։`,
        ru: `## Колебания

**Колебание** — это движение, которое повторяется: качели, вибрирующая струна, груз на пружине, напряжение в розетке. **Свободные колебания** происходят в системе, предоставленной самой себе после толчка; **вынужденные колебания** поддерживаются периодической внешней силой.

Система колеблется свободно, когда у неё есть устойчивое положение равновесия, **возвращающая сила**, тянущая её к этому положению, и инертность, которая проносит её мимо этого положения.

## Гармонические колебания

Простейшее колебание — **гармоническое**: координата меняется по закону косинуса или синуса времени.

> $$x = A\\cos(\\omega t + \\varphi_0).$$
> $A$ — **амплитуда** (наибольшее отклонение), $\\omega$ — **циклическая частота**, $\\varphi_0$ — **начальная фаза**; $\\omega t + \\varphi_0$ — фаза.

Движение повторяется через **период** $T = \\dfrac{2\\pi}{\\omega}$; **частота** $\\nu = \\dfrac{1}{T}$ — число колебаний в секунду (герц). Скорость и ускорение тоже гармонические:

$$v = -A\\omega\\sin(\\omega t + \\varphi_0), \\qquad a = -A\\omega^2\\cos(\\omega t + \\varphi_0) = -\\omega^2 x.$$

Наибольшая скорость $v_{\\max} = A\\omega$ (в положении равновесия), наибольшее ускорение $a_{\\max} = A\\omega^2$ (в крайних положениях). Ключевое свойство — $a = -\\omega^2 x$: ускорение пропорционально смещению и противоположно ему. Любая система, в которой возвращающая сила пропорциональна смещению, $F = -kx$, колеблется гармонически с $\\omega^2 = \\dfrac{k}{m}$.

## Пружинный и математический маятники

**Пружинный маятник.** Масса $m$ на пружине жёсткостью $k$: сила Гука $F = -kx$, поэтому

$$T = 2\\pi\\sqrt{\\dfrac{m}{k}}.$$

Период не зависит ни от амплитуды, ни от $g$; большая масса или мягкая пружина дают больший период.

**Математический маятник.** Точечная масса на невесомой нити длиной $l$. При малых углах возвращающая сила вдоль дуги $F \\approx -mg\\dfrac{x}{l}$, то есть $k = \\dfrac{mg}{l}$, и

$$T = 2\\pi\\sqrt{\\dfrac{l}{g}}.$$

Период не зависит от массы и (при малых качаниях) от амплитуды. Галилей использовал это для измерения пульса; Гюйгенс построил маятниковые часы. Маятником можно измерить $g$.

## Энергия

В пружинном маятнике энергия переходит из кинетической в потенциальную и обратно: $E = \\dfrac{kx^2}{2} + \\dfrac{mv^2}{2} = \\dfrac{kA^2}{2} = \\dfrac{mv_{\\max}^2}{2}$. В крайних положениях вся энергия потенциальная, в положении равновесия — кинетическая. Полная энергия пропорциональна квадрату амплитуды.

## Затухающие и вынужденные колебания; резонанс

Трение отбирает у системы энергию, амплитуда убывает, колебания **затухают**. Чтобы их поддерживать, прикладывают периодическую силу: такие **вынужденные колебания** имеют частоту силы, а не собственную. Когда частота вынуждающей силы приближается к собственной частоте $\\omega_0$, амплитуда резко растёт: **резонанс**. Резонанс используют в музыкальных инструментах и настройке радио и избегают в мостах, двигателях и зданиях. Чем меньше трение, тем острее и выше резонансный пик.

**Пример 1.** $x = 0{,}05\\cos(4\\pi t)$ (единицы СИ). Амплитуда $5$ см, $\\omega = 4\\pi$ рад/с, $T = 0{,}5$ с, $\\nu = 2$ Гц. $v_{\\max} = 0{,}05 \\cdot 4\\pi \\approx 0{,}63$ м/с, $a_{\\max} = 0{,}05 \\cdot 16\\pi^2 \\approx 7{,}9$ м/с².

**Пример 2.** Груз $200$ г на пружине жёсткостью $50$ Н/м: $T = 2\\pi\\sqrt{\\dfrac{0{,}2}{50}} = 2\\pi \\cdot 0{,}063 \\approx 0{,}4$ с, $\\nu \\approx 2{,}5$ Гц.

**Пример 3.** Маятник длиной $1$ м на Земле ($g \\approx 9{,}8$ м/с²): $T = 2\\pi\\sqrt{\\dfrac{1}{9{,}8}} \\approx 2{,}0$ с. На Луне ($g = 1{,}6$ м/с²) тот же маятник имеет $T \\approx 5{,}0$ с. Маятниковые часы там отставали бы.

**Пример 4.** Маятник совершает $50$ колебаний за $100$ с, так что $T = 2$ с. Его длина: $l = \\dfrac{gT^2}{4\\pi^2} = \\dfrac{9{,}8 \\cdot 4}{39{,}5} \\approx 0{,}99$ м. Если бы измеренный период был $2{,}01$ с при $l = 1{,}000$ м, то $g = \\dfrac{4\\pi^2 l}{T^2} \\approx 9{,}77$ м/с².

**Пример 5.** Пружинный маятник имеет амплитуду $4$ см и $k = 100$ Н/м. Полная энергия $E = \\dfrac{100 \\cdot 0{,}0016}{2} = 0{,}08$ Дж. При $x = 2$ см потенциальная энергия $0{,}02$ Дж, кинетическая $0{,}06$ Дж. Если амплитуду удвоить, энергия вырастет вчетверо.

**Пример 6.** Как изменится период, если массу на пружине увеличить вчетверо? $T \\propto \\sqrt m$, значит, удвоится. Если маятник укоротить в $4$ раза, его период уменьшится вдвое.

**Пример 7.** Две пружины жёсткостью $k$ каждая соединены последовательно: общая жёсткость $\\dfrac{k}{2}$, период растёт в $\\sqrt2$ раз. Параллельно: жёсткость $2k$, период уменьшается в $\\sqrt2$ раз.

**Пример 8.** Солдатам, идущим по мосту, приказывают сбить шаг. Марш в ногу — периодическая сила; если её частота совпадёт с собственной частотой моста, резонанс может раскачать его до опасной амплитуды (обрушение моста в Анже, 1850). Стиральная машина «прыгает», когда скорость барабана проходит через резонансную частоту подвески.

## Упражнения

1. Для $x = 0{,}1\\cos(10\\pi t + \\pi/3)$ найдите амплитуду, период, частоту и начальную фазу.
2. Найдите $v_{\\max}$ и $a_{\\max}$ для колебания из упражнения 1.
3. Найдите период груза $500$ г на пружине жёсткостью $20$ Н/м.
4. Найдите длину математического маятника с периодом $1$ с ($g = 9{,}8$ м/с²).
5. Период маятника на неизвестной планете $3$ с, на Земле $2$ с. Найдите $g$ на этой планете.
6. Пружинный маятник с $k = 40$ Н/м колеблется с амплитудой $5$ см. Найдите полную энергию и скорость в положении равновесия, если $m = 0{,}1$ кг.
7. Во сколько раз изменится период маятника, если его длину увеличить в $9$ раз?
8. Почему бокал иногда лопается, когда певец тянет определённую ноту?

### Ответы

1. $A = 0{,}1$ м, $T = 0{,}2$ с, $\\nu = 5$ Гц, $\\varphi_0 = \\pi/3$. 2. $v_{\\max} = \\pi \\approx 3{,}14$ м/с, $a_{\\max} = 10\\pi^2 \\approx 99$ м/с². 3. $T = 2\\pi\\sqrt{0{,}025} \\approx 0{,}99$ с. 4. $l = \\dfrac{9{,}8}{4\\pi^2} \\approx 0{,}25$ м. 5. $g \\propto \\dfrac{1}{T^2}$: $g = 9{,}8 \\cdot \\dfrac{4}{9} \\approx 4{,}4$ м/с². 6. $E = 0{,}05$ Дж, $v = \\sqrt{\\dfrac{2E}{m}} = 1$ м/с. 7. Увеличится втрое. 8. Частота ноты совпадает с собственной частотой бокала, и резонанс увеличивает амплитуду стенок настолько, что они разрушаются.`,
      },
      [
        q(t("In x = A cos(ωt + φ₀) the quantity A is the…", "x = A cos(ωt + φ₀) հավասարման մեջ A-ն…", "В x = A cos(ωt + φ₀) величина A — это…"), [t("period", "պարբերությունն է", "период"), t("amplitude", "լայնույթն է", "амплитуда"), t("phase", "փուլն է", "фаза")], 1),
        q(t("The period of a spring pendulum depends on…", "Զսպանակավոր ճոճանակի պարբերությունը կախված է…", "Период пружинного маятника зависит от…"), [t("the amplitude", "լայնույթից", "амплитуды"), t("mass and stiffness", "զանգվածից և կոշտությունից", "массы и жёсткости"), t("g", "g-ից", "g")], 1),
        q(t("If the length of a simple pendulum is quadrupled, its period…", "Եթե մաթեմատիկական ճոճանակի երկարությունը քառապատկվի, պարբերությունը…", "Если длину математического маятника увеличить вчетверо, период…"), [t("doubles", "կկրկնապատկվի", "удвоится"), t("quadruples", "կքառապատկվի", "увеличится вчетверо"), t("does not change", "չի փոխվի", "не изменится")], 0),
        q(t("The speed of a harmonic oscillator is greatest…", "Հարմոնիկ տատանակի արագությունը մեծագույնն է…", "Скорость гармонического осциллятора наибольшая…"), [t("at the extreme positions", "ծայրային դիրքերում", "в крайних положениях"), t("at the equilibrium position", "հավասարակշռության դիրքում", "в положении равновесия"), t("everywhere the same", "ամենուր նույնն է", "везде одинакова")], 1),
        q(t("If the amplitude is doubled, the total energy…", "Եթե լայնույթը կրկնապատկվի, լրիվ էներգիան…", "Если амплитуду удвоить, полная энергия…"), [t("doubles", "կկրկնապատկվի", "удвоится"), t("quadruples", "կքառապատկվի", "увеличится вчетверо"), t("does not change", "չի փոխվի", "не изменится")], 1),
        q(t("Resonance occurs when the driving frequency…", "Ռեզոնանսն առաջանում է, երբ հարկադրող հաճախությունը…", "Резонанс наступает, когда частота вынуждающей силы…"), [t("equals the natural frequency", "հավասար է սեփական հաճախությանը", "равна собственной частоте"), t("is much larger than the natural frequency", "շատ մեծ է սեփական հաճախությունից", "много больше собственной"), t("is zero", "զրո է", "равна нулю")], 0),
      ],
    ),
    lesson(
      "oscillating-circuit",
      ["Oscillating circuit; Thomson's formula", "Տատանողական կոնտուր, Թոմսոնի բանաձև", "Колебательный контур; формула Томсона"],
      {
        en: ["Describe the free electromagnetic oscillations in an LC circuit and the exchange between electric and magnetic energy", "Apply Thomson's formula T = 2π√(LC) and compute the frequency of a circuit", "Use the analogy between mechanical and electromagnetic oscillations and write q(t), I(t), U(t)"],
        hy: ["Նկարագրել LC կոնտուրում ազատ էլեկտրամագնիսական տատանումները և էլեկտրական ու մագնիսական էներգիաների փոխանակումը", "Կիրառել Թոմսոնի T = 2π√(LC) բանաձևը և հաշվել կոնտուրի հաճախությունը", "Օգտագործել մեխանիկական և էլեկտրամագնիսական տատանումների համանմանությունը և գրել q(t), I(t), U(t)"],
        ru: ["Описывать свободные электромагнитные колебания в LC-контуре и обмен между электрической и магнитной энергией", "Применять формулу Томсона T = 2π√(LC) и вычислять частоту контура", "Использовать аналогию между механическими и электромагнитными колебаниями и записывать q(t), I(t), U(t)"],
      },
      {
        en: `## The oscillating circuit

An **oscillating circuit** is a capacitor $C$ connected to a coil $L$. Charge the capacitor and close the circuit: it discharges through the coil, but the coil's self-induction does not let the current stop when the charge reaches zero. The current keeps flowing and recharges the capacitor with the opposite polarity, and the process repeats. The circuit performs **free electromagnetic oscillations**.

Over one period:

1. The capacitor is fully charged, $I = 0$, all the energy is in the electric field: $W = \\dfrac{q_m^2}{2C}$.
2. After a quarter period the capacitor is discharged and the current is at its maximum; all the energy is in the magnetic field of the coil: $W = \\dfrac{LI_m^2}{2}$.
3. After half a period the capacitor is charged again with reversed polarity.
4. After three quarters the current is maximal in the opposite direction, and after a full period the initial state returns.

Energy conservation (without resistance): $$\\dfrac{q^2}{2C} + \\dfrac{LI^2}{2} = \\dfrac{q_m^2}{2C} = \\dfrac{LI_m^2}{2}.$$

## Analogy with the spring pendulum

| Mechanical | Electromagnetic |
|---|---|
| displacement $x$ | charge $q$ |
| velocity $v$ | current $I$ |
| mass $m$ | inductance $L$ |
| stiffness $k$ | $1/C$ |
| potential energy $kx^2/2$ | electric energy $q^2/(2C)$ |
| kinetic energy $mv^2/2$ | magnetic energy $LI^2/2$ |

The coil's inertia (it resists changes of current) plays the role of mass; the capacitor's "elasticity" plays the role of the spring. Substituting into $T = 2\\pi\\sqrt{m/k}$ gives

> **Thomson's formula.** $$T = 2\\pi\\sqrt{LC}, \\qquad \\nu = \\dfrac{1}{2\\pi\\sqrt{LC}}, \\qquad \\omega_0 = \\dfrac{1}{\\sqrt{LC}}.$$

The charge, current and voltage change harmonically:

$$q = q_m\\cos\\omega_0 t, \\qquad I = -q_m\\omega_0\\sin\\omega_0 t, \\qquad U = \\dfrac{q}{C} = U_m\\cos\\omega_0 t,$$

with $I_m = q_m\\omega_0 = \\dfrac{q_m}{\\sqrt{LC}}$. The current is a quarter period ahead of the charge.

## Damping and real circuits

Every coil and wire has resistance, so part of the energy turns into heat each period and the oscillations die out. To keep them going, energy is fed in from a source in step with the oscillations (a transistor generator). The frequency is tuned by changing $C$ (a variable capacitor in old radios) or $L$. Small circuits give megahertz, which is the basis of radio.

**Example 1.** $L = 1$ mH, $C = 10$ nF. $T = 2\\pi\\sqrt{10^{-3} \\cdot 10^{-8}} = 2\\pi \\cdot 10^{-5{.}5} \\approx 2 \\cdot 10^{-5}$ s, $\\nu \\approx 50$ kHz.

**Example 2.** A radio circuit must oscillate at $1$ MHz with $L = 100$ μH. $C = \\dfrac{1}{4\\pi^2\\nu^2 L} = \\dfrac{1}{39{.}5 \\cdot 10^{12} \\cdot 10^{-4}} \\approx 2{.}5 \\cdot 10^{-10}$ F $= 250$ pF.

**Example 3.** A capacitor of $2$ μF charged to $100$ V is connected to a coil of $0{.}5$ H. Energy $W = \\dfrac{CU^2}{2} = 0{.}01$ J, maximum current $I_m = U_m\\sqrt{\\dfrac{C}{L}} = 100 \\cdot \\sqrt{4 \\cdot 10^{-6}} = 0{.}2$ A, period $T = 2\\pi\\sqrt{10^{-6}} \\approx 6{.}3$ ms.

**Example 4.** How does the frequency change if the capacitance is increased $4$ times? $\\nu \\propto \\dfrac{1}{\\sqrt C}$, so it halves. To double the frequency, $LC$ must be made $4$ times smaller.

**Example 5.** In a circuit $q = 10^{-6}\\cos(10^4 t)$ C. Then $\\omega_0 = 10^4$ rad/s, $T = 2\\pi \\cdot 10^{-4} \\approx 6{.}3 \\cdot 10^{-4}$ s, $I_m = q_m\\omega_0 = 10^{-2}$ A, and $I = -10^{-2}\\sin(10^4 t)$ A. If $C = 1$ μF then $L = \\dfrac{1}{\\omega_0^2 C} = 10^{-2}$ H and $U_m = 1$ V.

**Example 6.** At the moment when the charge is half its maximum, what fraction of the energy is magnetic? Electric energy is $\\dfrac{q^2}{2C} = \\dfrac{1}{4}$ of the total, so the magnetic part is $\\dfrac{3}{4}$, and $I = \\dfrac{\\sqrt3}{2}I_m$.

**Example 7.** A circuit with $C = 400$ pF has $\\nu = 500$ kHz. $L = \\dfrac{1}{4\\pi^2\\nu^2 C} = \\dfrac{1}{39{.}5 \\cdot 2{.}5 \\cdot 10^{11} \\cdot 4 \\cdot 10^{-10}} \\approx 2{.}5 \\cdot 10^{-4}$ H $= 0{.}25$ mH. Rotating the variable capacitor to $100$ pF doubles the frequency to $1$ MHz, covering the whole medium-wave band.

**Example 8.** The analogy explains why a circuit cannot oscillate without a coil: a capacitor discharging through a resistor only loses its charge, as a mass without a spring does not oscillate. Without inertia (inductance) there is nothing to carry the system past the equilibrium state.

## Exercises

1. Find the period and frequency of a circuit with $L = 4$ mH and $C = 1$ μF.
2. What inductance gives $\\nu = 100$ kHz with $C = 1$ nF?
3. A capacitor of $5$ μF charged to $20$ V oscillates with a $20$ mH coil. Find the total energy and the maximum current.
4. The capacitance of a circuit is increased $9$ times. How does the period change?
5. In a circuit $q = 2 \\cdot 10^{-6}\\cos(2 \\cdot 10^3 t)$ C. Find $T$ and $I_m$.
6. At the moment the current is half its maximum, what fraction of the energy is electric?
7. A circuit with $L = 2$ μH must cover $88$–$108$ MHz. Find the range of $C$.
8. Explain, using the analogy, which element of the circuit plays the role of mass and why.

### Answers

1. $T = 2\\pi\\sqrt{4 \\cdot 10^{-9}} \\approx 4 \\cdot 10^{-4}$ s, $\\nu \\approx 2{.}5$ kHz. 2. $L = \\dfrac{1}{4\\pi^2 \\cdot 10^{10} \\cdot 10^{-9}} \\approx 2{.}5$ mH. 3. $W = 10^{-3}$ J, $I_m = \\sqrt{\\dfrac{2W}{L}} \\approx 0{.}32$ A. 4. Triples. 5. $T \\approx 3{.}1$ ms, $I_m = 4 \\cdot 10^{-3}$ A. 6. Magnetic $= \\dfrac{1}{4}$, electric $= \\dfrac{3}{4}$. 7. $C = \\dfrac{1}{4\\pi^2\\nu^2 L}$: from about $1{.}1$ pF to $1{.}6$ pF. 8. The coil: its self-induction resists changes of current as mass resists changes of velocity.`,
        hy: `## Տատանողական կոնտուր

**Տատանողական կոնտուրը** $L$ կոճին միացված $C$ կոնդենսատոր է։ Լիցքավորենք կոնդենսատորը և փակենք շղթան․ այն լիցքաթափվում է կոճով, բայց կոճի ինքնաինդուկցիան թույլ չի տալիս հոսանքին կանգ առնել, երբ լիցքը հասնում է զրոյի։ Հոսանքը շարունակում է հոսել և հակառակ բևեռականությամբ նորից լիցքավորում է կոնդենսատորը, և գործընթացը կրկնվում է։ Կոնտուրը կատարում է **ազատ էլեկտրամագնիսական տատանումներ**։

Մեկ պարբերության ընթացքում․

1. Կոնդենսատորը լրիվ լիցքավորված է, $I = 0$, ամբողջ էներգիան էլեկտրական դաշտում է․ $W = \\dfrac{q_m^2}{2C}$։
2. Քառորդ պարբերությունից հետո կոնդենսատորը լիցքաթափված է, հոսանքն առավելագույնն է, ամբողջ էներգիան կոճի մագնիսական դաշտում է․ $W = \\dfrac{LI_m^2}{2}$։
3. Կես պարբերությունից հետո կոնդենսատորը նորից լիցքավորված է՝ հակառակ բևեռականությամբ։
4. Երեք քառորդից հետո հոսանքն առավելագույնն է հակառակ ուղղությամբ, իսկ լրիվ պարբերությունից հետո վերադառնում է սկզբնական վիճակը։

Էներգիայի պահպանումը (առանց դիմադրության)․ $$\\dfrac{q^2}{2C} + \\dfrac{LI^2}{2} = \\dfrac{q_m^2}{2C} = \\dfrac{LI_m^2}{2}$$

## Համանմանությունը զսպանակավոր ճոճանակի հետ

| Մեխանիկական | Էլեկտրամագնիսական |
|---|---|
| շեղում $x$ | լիցք $q$ |
| արագություն $v$ | հոսանք $I$ |
| զանգված $m$ | ինդուկտիվություն $L$ |
| կոշտություն $k$ | $1/C$ |
| պոտենցիալ էներգիա $kx^2/2$ | էլեկտրական էներգիա $q^2/(2C)$ |
| կինետիկ էներգիա $mv^2/2$ | մագնիսական էներգիա $LI^2/2$ |

Կոճի իներտությունը (այն դիմադրում է հոսանքի փոփոխությանը) զանգվածի դեր է կատարում, իսկ կոնդենսատորի «առաձգականությունը»՝ զսպանակի։ Տեղադրելով $T = 2\\pi\\sqrt{m/k}$ բանաձևի մեջ՝ ստանում ենք

> **Թոմսոնի բանաձև։** $$T = 2\\pi\\sqrt{LC}, \\qquad \\nu = \\dfrac{1}{2\\pi\\sqrt{LC}}, \\qquad \\omega_0 = \\dfrac{1}{\\sqrt{LC}}$$

Լիցքը, հոսանքն ու լարումը փոխվում են հարմոնիկ օրենքով․

$$q = q_m\\cos\\omega_0 t, \\qquad I = -q_m\\omega_0\\sin\\omega_0 t, \\qquad U = \\dfrac{q}{C} = U_m\\cos\\omega_0 t$$

որտեղ $I_m = q_m\\omega_0 = \\dfrac{q_m}{\\sqrt{LC}}$։ Հոսանքը լիցքից առաջ է քառորդ պարբերությամբ։

## Մարում և իրական կոնտուրներ

Յուրաքանչյուր կոճ և լար ունի դիմադրություն, ուստի էներգիայի մի մասն ամեն պարբերության ընթացքում վերածվում է ջերմության, և տատանումները մարում են։ Դրանք պահպանելու համար էներգիան աղբյուրից մատակարարվում է տատանումների հետ համաքայլ (տրանզիստորային գեներատոր)։ Հաճախությունը կարգավորում են՝ փոխելով $C$-ն (հին ռադիոընդունիչների փոփոխական կոնդենսատորը) կամ $L$-ը։ Փոքր կոնտուրները տալիս են մեգահերցեր, ինչը ռադիոյի հիմքն է։

**Օրինակ 1։** $L = 1$ մՀն, $C = 10$ նՖ։ $T = 2\\pi\\sqrt{10^{-3} \\cdot 10^{-8}} = 2\\pi \\cdot 10^{-5{,}5} \\approx 2 \\cdot 10^{-5}$ վ, $\\nu \\approx 50$ կՀց։

**Օրինակ 2։** Ռադիոկոնտուրը պետք է տատանվի $1$ ՄՀց հաճախությամբ $L = 100$ մկՀն դեպքում։ $C = \\dfrac{1}{4\\pi^2\\nu^2 L} = \\dfrac{1}{39{,}5 \\cdot 10^{12} \\cdot 10^{-4}} \\approx 2{,}5 \\cdot 10^{-10}$ Ֆ $= 250$ պՖ։

**Օրինակ 3։** Մինչև $100$ Վ լիցքավորված $2$ մկՖ կոնդենսատորը միացնում են $0{,}5$ Հն կոճին։ Էներգիան $W = \\dfrac{CU^2}{2} = 0{,}01$ Ջ, առավելագույն հոսանքը $I_m = U_m\\sqrt{\\dfrac{C}{L}} = 100 \\cdot \\sqrt{4 \\cdot 10^{-6}} = 0{,}2$ Ա, պարբերությունը $T = 2\\pi\\sqrt{10^{-6}} \\approx 6{,}3$ մվ։

**Օրինակ 4։** Ինչպե՞ս կփոխվի հաճախությունը, եթե ունակությունը մեծացվի $4$ անգամ։ $\\nu \\propto \\dfrac{1}{\\sqrt C}$, ուստի կկիսվի։ Հաճախությունը կրկնապատկելու համար $LC$-ն պետք է փոքրացնել $4$ անգամ։

**Օրինակ 5։** Կոնտուրում $q = 10^{-6}\\cos(10^4 t)$ Կլ։ Այդ դեպքում $\\omega_0 = 10^4$ ռադ/վ, $T = 2\\pi \\cdot 10^{-4} \\approx 6{,}3 \\cdot 10^{-4}$ վ, $I_m = q_m\\omega_0 = 10^{-2}$ Ա, և $I = -10^{-2}\\sin(10^4 t)$ Ա։ Եթե $C = 1$ մկՖ, ապա $L = \\dfrac{1}{\\omega_0^2 C} = 10^{-2}$ Հն և $U_m = 1$ Վ։

**Օրինակ 6։** Այն պահին, երբ լիցքն առավելագույնի կեսն է, էներգիայի ո՞ր մասն է մագնիսական։ Էլեկտրական էներգիան $\\dfrac{q^2}{2C}$ լրիվի $\\dfrac{1}{4}$-ն է, ուստի մագնիսական մասը $\\dfrac{3}{4}$ է, և $I = \\dfrac{\\sqrt3}{2}I_m$։

**Օրինակ 7։** $C = 400$ պՖ կոնտուրն ունի $\\nu = 500$ կՀց։ $L = \\dfrac{1}{4\\pi^2\\nu^2 C} = \\dfrac{1}{39{,}5 \\cdot 2{,}5 \\cdot 10^{11} \\cdot 4 \\cdot 10^{-10}} \\approx 2{,}5 \\cdot 10^{-4}$ Հն $= 0{,}25$ մՀն։ Փոփոխական կոնդենսատորը մինչև $100$ պՖ պտտելով՝ հաճախությունը կրկնապատկվում է մինչև $1$ ՄՀց՝ ընդգրկելով ամբողջ միջին ալիքների տիրույթը։

**Օրինակ 8։** Համանմանությունը բացատրում է, թե ինչու կոնտուրը չի կարող տատանվել առանց կոճի․ ռեզիստորով լիցքաթափվող կոնդենսատորը միայն կորցնում է լիցքը, ինչպես առանց զսպանակի զանգվածը չի տատանվում։ Առանց իներտության (ինդուկտիվության) ոչինչ չկա, որ համակարգը տանի հավասարակշռության վիճակից այն կողմ։

## Վարժություններ

1. Գտեք $L = 4$ մՀն և $C = 1$ մկՖ կոնտուրի պարբերությունն ու հաճախությունը։
2. Ի՞նչ ինդուկտիվություն է տալիս $\\nu = 100$ կՀց $C = 1$ նՖ դեպքում։
3. Մինչև $20$ Վ լիցքավորված $5$ մկՖ կոնդենսատորը տատանվում է $20$ մՀն կոճի հետ։ Գտեք լրիվ էներգիան և առավելագույն հոսանքը։
4. Կոնտուրի ունակությունը մեծացվում է $9$ անգամ։ Ինչպե՞ս կփոխվի պարբերությունը։
5. Կոնտուրում $q = 2 \\cdot 10^{-6}\\cos(2 \\cdot 10^3 t)$ Կլ։ Գտեք $T$-ն և $I_m$-ը։
6. Այն պահին, երբ հոսանքն առավելագույնի կեսն է, էներգիայի ո՞ր մասն է էլեկտրական։
7. $L = 2$ մկՀն կոնտուրը պետք է ընդգրկի $88$–$108$ ՄՀց։ Գտեք $C$-ի տիրույթը։
8. Համանմանությամբ բացատրեք, թե կոնտուրի որ տարրն է զանգվածի դեր կատարում և ինչու։

### Պատասխաններ

1. $T = 2\\pi\\sqrt{4 \\cdot 10^{-9}} \\approx 4 \\cdot 10^{-4}$ վ, $\\nu \\approx 2{,}5$ կՀց։ 2. $L = \\dfrac{1}{4\\pi^2 \\cdot 10^{10} \\cdot 10^{-9}} \\approx 2{,}5$ մՀն։ 3. $W = 10^{-3}$ Ջ, $I_m = \\sqrt{\\dfrac{2W}{L}} \\approx 0{,}32$ Ա։ 4. Եռապատկվում է։ 5. $T \\approx 3{,}1$ մվ, $I_m = 4 \\cdot 10^{-3}$ Ա։ 6. Մագնիսական՝ $\\dfrac{1}{4}$, էլեկտրական՝ $\\dfrac{3}{4}$։ 7. $C = \\dfrac{1}{4\\pi^2\\nu^2 L}$․ մոտ $1{,}1$ պՖ-ից մինչև $1{,}6$ պՖ։ 8. Կոճը․ նրա ինքնաինդուկցիան դիմադրում է հոսանքի փոփոխությանը, ինչպես զանգվածը՝ արագության փոփոխությանը։`,
        ru: `## Колебательный контур

**Колебательный контур** — это конденсатор $C$, соединённый с катушкой $L$. Зарядим конденсатор и замкнём цепь: он разряжается через катушку, но самоиндукция катушки не даёт току остановиться, когда заряд дошёл до нуля. Ток продолжает течь и перезаряжает конденсатор с противоположной полярностью, и процесс повторяется. Контур совершает **свободные электромагнитные колебания**.

За один период:

1. Конденсатор полностью заряжен, $I = 0$, вся энергия в электрическом поле: $W = \\dfrac{q_m^2}{2C}$.
2. Через четверть периода конденсатор разряжен, ток максимален; вся энергия в магнитном поле катушки: $W = \\dfrac{LI_m^2}{2}$.
3. Через полпериода конденсатор снова заряжен, но с обратной полярностью.
4. Через три четверти ток максимален в обратном направлении, а через полный период возвращается начальное состояние.

Сохранение энергии (без сопротивления): $$\\dfrac{q^2}{2C} + \\dfrac{LI^2}{2} = \\dfrac{q_m^2}{2C} = \\dfrac{LI_m^2}{2}.$$

## Аналогия с пружинным маятником

| Механические | Электромагнитные |
|---|---|
| смещение $x$ | заряд $q$ |
| скорость $v$ | ток $I$ |
| масса $m$ | индуктивность $L$ |
| жёсткость $k$ | $1/C$ |
| потенциальная энергия $kx^2/2$ | электрическая энергия $q^2/(2C)$ |
| кинетическая энергия $mv^2/2$ | магнитная энергия $LI^2/2$ |

Инертность катушки (она сопротивляется изменению тока) играет роль массы; «упругость» конденсатора — роль пружины. Подстановка в $T = 2\\pi\\sqrt{m/k}$ даёт

> **Формула Томсона.** $$T = 2\\pi\\sqrt{LC}, \\qquad \\nu = \\dfrac{1}{2\\pi\\sqrt{LC}}, \\qquad \\omega_0 = \\dfrac{1}{\\sqrt{LC}}.$$

Заряд, ток и напряжение меняются гармонически:

$$q = q_m\\cos\\omega_0 t, \\qquad I = -q_m\\omega_0\\sin\\omega_0 t, \\qquad U = \\dfrac{q}{C} = U_m\\cos\\omega_0 t,$$

причём $I_m = q_m\\omega_0 = \\dfrac{q_m}{\\sqrt{LC}}$. Ток опережает заряд на четверть периода.

## Затухание и реальные контуры

У любой катушки и провода есть сопротивление, поэтому часть энергии каждый период переходит в тепло, и колебания затухают. Чтобы поддерживать их, энергию подводят от источника в такт колебаниям (генератор на транзисторе). Частоту настраивают, меняя $C$ (конденсатор переменной ёмкости в старых приёмниках) или $L$. Малые контуры дают мегагерцы — на этом основано радио.

**Пример 1.** $L = 1$ мГн, $C = 10$ нФ. $T = 2\\pi\\sqrt{10^{-3} \\cdot 10^{-8}} = 2\\pi \\cdot 10^{-5{,}5} \\approx 2 \\cdot 10^{-5}$ с, $\\nu \\approx 50$ кГц.

**Пример 2.** Радиоконтур должен колебаться на $1$ МГц при $L = 100$ мкГн. $C = \\dfrac{1}{4\\pi^2\\nu^2 L} = \\dfrac{1}{39{,}5 \\cdot 10^{12} \\cdot 10^{-4}} \\approx 2{,}5 \\cdot 10^{-10}$ Ф $= 250$ пФ.

**Пример 3.** Конденсатор $2$ мкФ, заряженный до $100$ В, подключают к катушке $0{,}5$ Гн. Энергия $W = \\dfrac{CU^2}{2} = 0{,}01$ Дж, наибольший ток $I_m = U_m\\sqrt{\\dfrac{C}{L}} = 100 \\cdot \\sqrt{4 \\cdot 10^{-6}} = 0{,}2$ А, период $T = 2\\pi\\sqrt{10^{-6}} \\approx 6{,}3$ мс.

**Пример 4.** Как изменится частота, если ёмкость увеличить в $4$ раза? $\\nu \\propto \\dfrac{1}{\\sqrt C}$, значит, уменьшится вдвое. Чтобы удвоить частоту, $LC$ нужно уменьшить в $4$ раза.

**Пример 5.** В контуре $q = 10^{-6}\\cos(10^4 t)$ Кл. Тогда $\\omega_0 = 10^4$ рад/с, $T = 2\\pi \\cdot 10^{-4} \\approx 6{,}3 \\cdot 10^{-4}$ с, $I_m = q_m\\omega_0 = 10^{-2}$ А, и $I = -10^{-2}\\sin(10^4 t)$ А. Если $C = 1$ мкФ, то $L = \\dfrac{1}{\\omega_0^2 C} = 10^{-2}$ Гн и $U_m = 1$ В.

**Пример 6.** В момент, когда заряд равен половине наибольшего, какая доля энергии магнитная? Электрическая энергия $\\dfrac{q^2}{2C}$ составляет $\\dfrac{1}{4}$ полной, значит, магнитная часть $\\dfrac{3}{4}$, и $I = \\dfrac{\\sqrt3}{2}I_m$.

**Пример 7.** Контур с $C = 400$ пФ имеет $\\nu = 500$ кГц. $L = \\dfrac{1}{4\\pi^2\\nu^2 C} = \\dfrac{1}{39{,}5 \\cdot 2{,}5 \\cdot 10^{11} \\cdot 4 \\cdot 10^{-10}} \\approx 2{,}5 \\cdot 10^{-4}$ Гн $= 0{,}25$ мГн. Поворот переменного конденсатора до $100$ пФ удваивает частоту до $1$ МГц, перекрывая весь средневолновый диапазон.

**Пример 8.** Аналогия объясняет, почему контур не может колебаться без катушки: конденсатор, разряжающийся через резистор, лишь теряет заряд, как масса без пружины не колеблется. Без инертности (индуктивности) нечему пронести систему мимо состояния равновесия.

## Упражнения

1. Найдите период и частоту контура с $L = 4$ мГн и $C = 1$ мкФ.
2. Какая индуктивность даёт $\\nu = 100$ кГц при $C = 1$ нФ?
3. Конденсатор $5$ мкФ, заряженный до $20$ В, колеблется с катушкой $20$ мГн. Найдите полную энергию и наибольший ток.
4. Ёмкость контура увеличили в $9$ раз. Как изменится период?
5. В контуре $q = 2 \\cdot 10^{-6}\\cos(2 \\cdot 10^3 t)$ Кл. Найдите $T$ и $I_m$.
6. В момент, когда ток равен половине наибольшего, какая доля энергии электрическая?
7. Контур с $L = 2$ мкГн должен перекрывать $88$–$108$ МГц. Найдите диапазон $C$.
8. Объясните с помощью аналогии, какой элемент контура играет роль массы и почему.

### Ответы

1. $T = 2\\pi\\sqrt{4 \\cdot 10^{-9}} \\approx 4 \\cdot 10^{-4}$ с, $\\nu \\approx 2{,}5$ кГц. 2. $L = \\dfrac{1}{4\\pi^2 \\cdot 10^{10} \\cdot 10^{-9}} \\approx 2{,}5$ мГн. 3. $W = 10^{-3}$ Дж, $I_m = \\sqrt{\\dfrac{2W}{L}} \\approx 0{,}32$ А. 4. Увеличится втрое. 5. $T \\approx 3{,}1$ мс, $I_m = 4 \\cdot 10^{-3}$ А. 6. Магнитная $= \\dfrac{1}{4}$, электрическая $= \\dfrac{3}{4}$. 7. $C = \\dfrac{1}{4\\pi^2\\nu^2 L}$: примерно от $1{,}1$ пФ до $1{,}6$ пФ. 8. Катушка: её самоиндукция сопротивляется изменению тока, как масса — изменению скорости.`,
      },
      [
        q(t("An oscillating circuit consists of…", "Տատանողական կոնտուրը բաղկացած է…", "Колебательный контур состоит из…"), [t("a capacitor and a coil", "կոնդենսատորից և կոճից", "конденсатора и катушки"), t("a resistor and a capacitor", "ռեզիստորից և կոնդենսատորից", "резистора и конденсатора"), t("two resistors", "երկու ռեզիստորից", "двух резисторов")], 0),
        q(t("Thomson's formula is T =", "Թոմսոնի բանաձևն է T =", "Формула Томсона: T ="), [t("2π√(L/C)", "2π√(L/C)", "2π√(L/C)"), t("2π√(LC)", "2π√(LC)", "2π√(LC)"), t("2π/√(LC)", "2π/√(LC)", "2π/√(LC)")], 1),
        q(t("When the capacitor is fully charged, the current in the circuit is…", "Երբ կոնդենսատորը լրիվ լիցքավորված է, կոնտուրի հոսանքը…", "Когда конденсатор полностью заряжен, ток в контуре…"), [t("maximal", "առավելագույնն է", "максимален"), t("zero", "զրո է", "равен нулю"), t("half of maximal", "առավելագույնի կեսն է", "равен половине максимального")], 1),
        q(t("In the mechanical analogy, inductance corresponds to…", "Մեխանիկական համանմանությամբ ինդուկտիվությունը համապատասխանում է…", "В механической аналогии индуктивности соответствует…"), [t("stiffness", "կոշտությանը", "жёсткость"), t("mass", "զանգվածին", "масса"), t("displacement", "շեղմանը", "смещение")], 1),
        q(t("If the capacitance is increased 4 times, the frequency…", "Եթե ունակությունը մեծացվի 4 անգամ, հաճախությունը…", "Если ёмкость увеличить в 4 раза, частота…"), [t("halves", "կկիսվի", "уменьшится вдвое"), t("doubles", "կկրկնապատկվի", "удвоится"), t("decreases 4 times", "կփոքրանա 4 անգամ", "уменьшится в 4 раза")], 0),
        q(t("The energy of the magnetic field is greatest when…", "Մագնիսական դաշտի էներգիան մեծագույնն է, երբ…", "Энергия магнитного поля наибольшая, когда…"), [t("the capacitor is fully charged", "կոնդենսատորը լրիվ լիցքավորված է", "конденсатор полностью заряжен"), t("the capacitor is discharged", "կոնդենսատորը լիցքաթափված է", "конденсатор разряжен"), t("the current is zero", "հոսանքը զրո է", "ток равен нулю")], 1),
      ],
    ),
    lesson(
      "ac-circuit-elements",
      ["AC; resistor, capacitor, inductor in AC circuit", "Փոփոխական հոսանք, ռեզիստոր, կոնդենսատոր, կոճ", "Переменный ток; резистор, конденсатор, катушка в цепи"],
      {
        en: ["Describe how an alternating EMF is generated by a rotating frame and write u = Uₘ sin ωt", "Define the effective (RMS) values of current and voltage and relate them to the amplitudes", "Compute the capacitive and inductive reactances and explain the phase shifts in R, C and L elements"],
        hy: ["Նկարագրել, թե ինչպես է պտտվող շրջանակն առաջացնում փոփոխական ԷլՇՈւ, և գրել u = Uₘ sin ωt", "Սահմանել հոսանքի և լարման գործող արժեքները և կապել լայնույթների հետ", "Հաշվել ունակային և ինդուկտիվ դիմադրությունները և բացատրել փուլերի շեղումները R, C և L տարրերում"],
        ru: ["Описывать, как вращающаяся рамка создаёт переменную ЭДС, и записывать u = Uₘ sin ωt", "Определять действующие значения тока и напряжения и связывать их с амплитудами", "Вычислять ёмкостное и индуктивное сопротивления и объяснять сдвиги фаз в элементах R, C и L"],
      },
      {
        en: `## Alternating current

**Alternating current** (AC) is a current that changes harmonically in time. It is a forced electromagnetic oscillation driven by an alternating EMF. Almost all electricity is generated and transmitted as AC, because its voltage can be changed easily with transformers.

**Generator.** A frame of area $S$ with $N$ turns rotates with angular velocity $\\omega$ in a uniform field $B$. The flux $\\Phi = BS\\cos\\omega t$ changes, and by Faraday's law the EMF is

$$e = -N\\dfrac{\\Delta\\Phi}{\\Delta t} = NBS\\omega\\sin\\omega t = \\varepsilon_m\\sin\\omega t.$$

The amplitude $\\varepsilon_m = NBS\\omega$ grows with the field, the area, the number of turns and the rotation speed. In a real generator the coils are fixed and the magnet (rotor) turns, driven by a turbine. The mains frequency is $50$ Hz in Europe and Armenia ($60$ Hz in America): $\\omega = 2\\pi \\cdot 50 \\approx 314$ rad/s.

In a circuit the voltage and current are $u = U_m\\sin\\omega t$ and $i = I_m\\sin(\\omega t + \\varphi)$, where $\\varphi$ is the **phase shift** between current and voltage, which depends on the elements of the circuit.

## Effective values

The instantaneous power $p = i^2 R$ pulses; the mean power of a sinusoidal current is $P = \\dfrac{I_m^2 R}{2}$. The **effective** (RMS) value of the current is the direct current that would produce the same heat:

> $$I = \\dfrac{I_m}{\\sqrt2}, \\qquad U = \\dfrac{U_m}{\\sqrt2}.$$

AC meters show effective values. The $220$ V of the mains is an effective value; the amplitude is $220\\sqrt2 \\approx 311$ V. Insulation and capacitors must withstand the amplitude.

## Resistor, capacitor and coil in an AC circuit

**Resistor** (active resistance $R$). $i = \\dfrac{u}{R}$ at each instant, so current and voltage are **in phase**. $I = \\dfrac{U}{R}$, mean power $P = UI = I^2 R$.

**Capacitor.** Direct current cannot pass through a capacitor, but an alternating one charges and discharges it continuously, so a current flows in the circuit. $q = Cu = CU_m\\sin\\omega t$, and the current, the rate of change of charge, is $i = CU_m\\omega\\cos\\omega t = I_m\\sin(\\omega t + \\dfrac{\\pi}{2})$. The current **leads** the voltage by a quarter period. The amplitude relation $I_m = \\omega C U_m$ defines the **capacitive reactance**:

$$X_C = \\dfrac{1}{\\omega C}.$$

It decreases with frequency: a capacitor lets high frequencies pass and blocks low ones and DC. The mean power in a capacitor is zero: it stores energy for a quarter period and returns it in the next.

**Coil** (inductance $L$, negligible resistance). The self-induction EMF balances the applied voltage: $u = L\\dfrac{\\Delta i}{\\Delta t}$. For $i = I_m\\sin\\omega t$ we get $u = LI_m\\omega\\cos\\omega t$, so the voltage **leads** the current by $\\dfrac{\\pi}{2}$ (the current lags). The **inductive reactance** is

$$X_L = \\omega L,$$

growing with frequency: a coil lets DC and low frequencies through and blocks high frequencies. Its mean power is also zero.

| Element | Reactance | Phase of current relative to voltage | Mean power |
|---|---|---|---|
| $R$ | $R$ | in phase | $UI$ |
| $C$ | $1/(\\omega C)$ | leads by $\\pi/2$ | $0$ |
| $L$ | $\\omega L$ | lags by $\\pi/2$ | $0$ |

**Example 1.** A frame with $N = 100$ turns and area $0{.}02$ m² rotates at $50$ revolutions per second in a field of $0{.}1$ T. $\\varepsilon_m = 100 \\cdot 0{.}1 \\cdot 0{.}02 \\cdot 314 \\approx 63$ V; effective EMF about $44$ V.

**Example 2.** A heater of resistance $48{.}4$ Ω is plugged into $220$ V. $I = \\dfrac{220}{48{.}4} \\approx 4{.}5$ A, $I_m \\approx 6{.}4$ A, $P = UI = 1000$ W. The instantaneous power pulses between $0$ and $2000$ W at $100$ Hz, which is why filament lamps flicker slightly.

**Example 3.** A capacitor of $10$ μF is connected to the $220$ V, $50$ Hz mains. $X_C = \\dfrac{1}{314 \\cdot 10^{-5}} \\approx 318$ Ω, $I = \\dfrac{220}{318} \\approx 0{.}69$ A. At $5$ kHz the reactance would be $100$ times smaller and the current $100$ times larger.

**Example 4.** A coil of $0{.}5$ H and negligible resistance in the same mains: $X_L = 314 \\cdot 0{.}5 = 157$ Ω, $I = \\dfrac{220}{157} \\approx 1{.}4$ A. In a DC circuit of $220$ V the current would be limited only by the wire resistance and would burn the coil out.

**Example 5.** $u = 100\\sin(1000t)$ V is applied to a capacitor of $2$ μF. $X_C = \\dfrac{1}{1000 \\cdot 2 \\cdot 10^{-6}} = 500$ Ω, $I_m = \\dfrac{100}{500} = 0{.}2$ A, $i = 0{.}2\\sin(1000t + \\pi/2)$ A.

**Example 6.** The same voltage is applied to a coil of $0{.}1$ H: $X_L = 100$ Ω, $I_m = 1$ A, $i = \\sin(1000t - \\pi/2)$ A. Check: at the moment $u$ is maximal, $i = 0$ and is growing fastest, consistent with $u = L\\dfrac{\\Delta i}{\\Delta t}$.

**Example 7.** At what frequency do a $0{.}1$ H coil and a $10$ μF capacitor have equal reactances? $\\omega L = \\dfrac{1}{\\omega C}$, $\\omega = \\dfrac{1}{\\sqrt{LC}} = \\dfrac{1}{\\sqrt{10^{-6}}} = 1000$ rad/s, $\\nu \\approx 159$ Hz. This is the circuit's natural frequency, which matters for resonance.

**Example 8.** Why is a capacitor in series with a loudspeaker called a "high-pass filter"? Its reactance is large for low frequencies (bass is blocked) and small for high ones (treble passes), so only the treble reaches the small speaker. A coil in series does the opposite and feeds the bass speaker.

## Exercises

1. A frame with $200$ turns and area $0{.}01$ m² rotates in a field of $0{.}2$ T at $\\omega = 100\\pi$ rad/s. Find the amplitude and the effective EMF.
2. The amplitude of the mains voltage is $311$ V. Find the effective voltage.
3. A $60$ W lamp works at $220$ V. Find the effective and the amplitude current.
4. Find the reactance of a $4$ μF capacitor at $50$ Hz and at $5000$ Hz.
5. Find the reactance of a $20$ mH coil at $50$ Hz and at $50$ kHz.
6. $u = 50\\sin(500t)$ V is applied to a $5$ μF capacitor. Write $i(t)$.
7. The same voltage is applied to a $0{.}2$ H coil. Write $i(t)$.
8. At what frequency does a $2$ mH coil have the same reactance as a $500$ nF capacitor?

### Answers

1. $\\varepsilon_m = 200 \\cdot 0{.}2 \\cdot 0{.}01 \\cdot 314 \\approx 126$ V, $\\varepsilon \\approx 89$ V. 2. $220$ V. 3. $I \\approx 0{.}27$ A, $I_m \\approx 0{.}39$ A. 4. $X_C \\approx 796$ Ω and $\\approx 8$ Ω. 5. $X_L \\approx 6{.}3$ Ω and $\\approx 6280$ Ω. 6. $X_C = 400$ Ω, $i = 0{.}125\\sin(500t + \\pi/2)$ A. 7. $X_L = 100$ Ω, $i = 0{.}5\\sin(500t - \\pi/2)$ A. 8. $\\omega = \\dfrac{1}{\\sqrt{10^{-9}}} \\approx 3{.}2 \\cdot 10^4$ rad/s, $\\nu \\approx 5$ kHz.`,
        hy: `## Փոփոխական հոսանք

**Փոփոխական հոսանքը** ժամանակի ընթացքում հարմոնիկ օրենքով փոփոխվող հոսանք է։ Այն փոփոխական ԷլՇՈւ-ով առաջացված հարկադրական էլեկտրամագնիսական տատանում է։ Գրեթե ամբողջ էլեկտրաէներգիան արտադրվում և հաղորդվում է որպես փոփոխական հոսանք, քանի որ նրա լարումը հեշտությամբ փոխվում է տրանսֆորմատորներով։

**Գեներատոր։** $S$ մակերեսով, $N$ գալարով շրջանակը $\\omega$ անկյունային արագությամբ պտտվում է համասեռ $B$ դաշտում։ $\\Phi = BS\\cos\\omega t$ հոսքը փոխվում է, և ըստ Ֆարադեյի օրենքի՝ ԷլՇՈւ-ն

$$e = -N\\dfrac{\\Delta\\Phi}{\\Delta t} = NBS\\omega\\sin\\omega t = \\varepsilon_m\\sin\\omega t$$

$\\varepsilon_m = NBS\\omega$ լայնույթն աճում է դաշտի, մակերեսի, գալարների թվի և պտտման արագության հետ։ Իրական գեներատորում կոճերն անշարժ են, իսկ մագնիսը (ռոտորը) պտտվում է տուրբինով։ Ցանցի հաճախությունն Եվրոպայում և Հայաստանում $50$ Հց է (Ամերիկայում՝ $60$ Հց)․ $\\omega = 2\\pi \\cdot 50 \\approx 314$ ռադ/վ։

Շղթայում լարումն ու հոսանքը $u = U_m\\sin\\omega t$ և $i = I_m\\sin(\\omega t + \\varphi)$ են, որտեղ $\\varphi$-ն հոսանքի և լարման միջև **փուլերի շեղումն** է, որը կախված է շղթայի տարրերից։

## Գործող արժեքներ

Ակնթարթային $p = i^2 R$ հզորությունը բաբախում է, իսկ սինուսոիդական հոսանքի միջին հզորությունը $P = \\dfrac{I_m^2 R}{2}$ է։ Հոսանքի **գործող** արժեքն այն հաստատուն հոսանքն է, որը նույն ջերմությունը կանջատեր․

> $$I = \\dfrac{I_m}{\\sqrt2}, \\qquad U = \\dfrac{U_m}{\\sqrt2}$$

Փոփոխական հոսանքի չափիչները ցույց են տալիս գործող արժեքները։ Ցանցի $220$ Վ-ը գործող արժեք է, լայնույթը $220\\sqrt2 \\approx 311$ Վ է։ Մեկուսիչը և կոնդենսատորները պետք է դիմանան լայնույթին։

## Ռեզիստորը, կոնդենսատորը և կոճը փոփոխական հոսանքի շղթայում

**Ռեզիստոր** (ակտիվ դիմադրություն $R$)։ Յուրաքանչյուր պահի $i = \\dfrac{u}{R}$, ուստի հոսանքն ու լարումը **համափուլ** են։ $I = \\dfrac{U}{R}$, միջին հզորությունը՝ $P = UI = I^2 R$։

**Կոնդենսատոր։** Հաստատուն հոսանքը չի կարող անցնել կոնդենսատորով, բայց փոփոխականն անընդհատ լիցքավորում և լիցքաթափում է այն, ուստի շղթայում հոսանք է հոսում։ $q = Cu = CU_m\\sin\\omega t$, իսկ հոսանքը՝ լիցքի փոփոխման արագությունը, $i = CU_m\\omega\\cos\\omega t = I_m\\sin(\\omega t + \\dfrac{\\pi}{2})$ է։ Հոսանքը լարումից **առաջ** է քառորդ պարբերությամբ։ $I_m = \\omega C U_m$ լայնույթների առնչությունը սահմանում է **ունակային դիմադրությունը**․

$$X_C = \\dfrac{1}{\\omega C}$$

Այն նվազում է հաճախության աճի հետ․ կոնդենսատորը թողնում է բարձր հաճախությունները և արգելափակում ցածրերն ու հաստատուն հոսանքը։ Կոնդենսատորի միջին հզորությունը զրո է․ այն քառորդ պարբերություն էներգիա է կուտակում և հաջորդում վերադարձնում։

**Կոճ** ($L$ ինդուկտիվություն, աննշան դիմադրություն)։ Ինքնաինդուկցիայի ԷլՇՈւ-ն հավասարակշռում է կիրառված լարումը․ $u = L\\dfrac{\\Delta i}{\\Delta t}$։ $i = I_m\\sin\\omega t$ դեպքում ստանում ենք $u = LI_m\\omega\\cos\\omega t$, ուստի լարումը հոսանքից **առաջ** է $\\dfrac{\\pi}{2}$-ով (հոսանքը հետ է մնում)։ **Ինդուկտիվ դիմադրությունը**

$$X_L = \\omega L$$

աճում է հաճախության հետ․ կոճը թողնում է հաստատուն հոսանքն ու ցածր հաճախությունները և արգելափակում բարձրերը։ Նրա միջին հզորությունը նույնպես զրո է։

| Տարր | Դիմադրություն | Հոսանքի փուլը լարման նկատմամբ | Միջին հզորություն |
|---|---|---|---|
| $R$ | $R$ | համափուլ | $UI$ |
| $C$ | $1/(\\omega C)$ | առաջ է $\\pi/2$-ով | $0$ |
| $L$ | $\\omega L$ | հետ է $\\pi/2$-ով | $0$ |

**Օրինակ 1։** $N = 100$ գալարով, $0{,}02$ մ² մակերեսով շրջանակը $0{,}1$ Տ դաշտում պտտվում է վայրկյանում $50$ պտույտ։ $\\varepsilon_m = 100 \\cdot 0{,}1 \\cdot 0{,}02 \\cdot 314 \\approx 63$ Վ, գործող ԷլՇՈւ-ն՝ մոտ $44$ Վ։

**Օրինակ 2։** $48{,}4$ Օմ դիմադրությամբ ջեռուցիչը միացնում են $220$ Վ-ի։ $I = \\dfrac{220}{48{,}4} \\approx 4{,}5$ Ա, $I_m \\approx 6{,}4$ Ա, $P = UI = 1000$ Վտ։ Ակնթարթային հզորությունը բաբախում է $0$-ից $2000$ Վտ $100$ Հց հաճախությամբ, այդ պատճառով շիկացման լամպերը թեթևակի թարթում են։

**Օրինակ 3։** $10$ մկՖ կոնդենսատորը միացնում են $220$ Վ, $50$ Հց ցանցին։ $X_C = \\dfrac{1}{314 \\cdot 10^{-5}} \\approx 318$ Օմ, $I = \\dfrac{220}{318} \\approx 0{,}69$ Ա։ $5$ կՀց-ի դեպքում դիմադրությունը $100$ անգամ փոքր կլիներ, իսկ հոսանքը՝ $100$ անգամ մեծ։

**Օրինակ 4։** $0{,}5$ Հն և աննշան դիմադրությամբ կոճը նույն ցանցում․ $X_L = 314 \\cdot 0{,}5 = 157$ Օմ, $I = \\dfrac{220}{157} \\approx 1{,}4$ Ա։ $220$ Վ հաստատուն հոսանքի շղթայում հոսանքը կսահմանափակվեր միայն լարի դիմադրությամբ և կայրեր կոճը։

**Օրինակ 5։** $2$ մկՖ կոնդենսատորին կիրառված է $u = 100\\sin(1000t)$ Վ։ $X_C = \\dfrac{1}{1000 \\cdot 2 \\cdot 10^{-6}} = 500$ Օմ, $I_m = \\dfrac{100}{500} = 0{,}2$ Ա, $i = 0{,}2\\sin(1000t + \\pi/2)$ Ա։

**Օրինակ 6։** Նույն լարումը կիրառված է $0{,}1$ Հն կոճին․ $X_L = 100$ Օմ, $I_m = 1$ Ա, $i = \\sin(1000t - \\pi/2)$ Ա։ Ստուգում․ այն պահին, երբ $u$-ն առավելագույնն է, $i = 0$ և ամենաարագն է աճում, ինչը համապատասխանում է $u = L\\dfrac{\\Delta i}{\\Delta t}$-ին։

**Օրինակ 7։** Ի՞նչ հաճախության դեպքում $0{,}1$ Հն կոճն ու $10$ մկՖ կոնդենսատորն ունեն հավասար դիմադրություններ։ $\\omega L = \\dfrac{1}{\\omega C}$, $\\omega = \\dfrac{1}{\\sqrt{LC}} = \\dfrac{1}{\\sqrt{10^{-6}}} = 1000$ ռադ/վ, $\\nu \\approx 159$ Հց։ Սա կոնտուրի սեփական հաճախությունն է, որը կարևոր է ռեզոնանսի համար։

**Օրինակ 8։** Ինչո՞ւ է բարձրախոսին հաջորդաբար միացված կոնդենսատորը կոչվում «բարձր հաճախությունների զտիչ»։ Նրա դիմադրությունը մեծ է ցածր հաճախությունների համար (բասն արգելափակվում է) և փոքր՝ բարձրերի համար (բարձր ձայներն անցնում են), ուստի փոքր բարձրախոսին հասնում են միայն բարձր ձայները։ Հաջորդաբար միացված կոճն անում է հակառակը և սնում է բասի բարձրախոսը։

## Վարժություններ

1. $200$ գալարով, $0{,}01$ մ² մակերեսով շրջանակը պտտվում է $0{,}2$ Տ դաշտում $\\omega = 100\\pi$ ռադ/վ արագությամբ։ Գտեք ԷլՇՈւ-ի լայնույթն ու գործող արժեքը։
2. Ցանցի լարման լայնույթը $311$ Վ է։ Գտեք գործող լարումը։
3. $60$ Վտ լամպն աշխատում է $220$ Վ-ով։ Գտեք հոսանքի գործող արժեքն ու լայնույթը։
4. Գտեք $4$ մկՖ կոնդենսատորի դիմադրությունը $50$ Հց և $5000$ Հց դեպքում։
5. Գտեք $20$ մՀն կոճի դիմադրությունը $50$ Հց և $50$ կՀց դեպքում։
6. $5$ մկՖ կոնդենսատորին կիրառված է $u = 50\\sin(500t)$ Վ։ Գրեք $i(t)$-ն։
7. Նույն լարումը կիրառված է $0{,}2$ Հն կոճին։ Գրեք $i(t)$-ն։
8. Ի՞նչ հաճախության դեպքում $2$ մՀն կոճն ունի նույն դիմադրությունը, ինչ $500$ նՖ կոնդենսատորը։

### Պատասխաններ

1. $\\varepsilon_m = 200 \\cdot 0{,}2 \\cdot 0{,}01 \\cdot 314 \\approx 126$ Վ, $\\varepsilon \\approx 89$ Վ։ 2. $220$ Վ։ 3. $I \\approx 0{,}27$ Ա, $I_m \\approx 0{,}39$ Ա։ 4. $X_C \\approx 796$ Օմ և $\\approx 8$ Օմ։ 5. $X_L \\approx 6{,}3$ Օմ և $\\approx 6280$ Օմ։ 6. $X_C = 400$ Օմ, $i = 0{,}125\\sin(500t + \\pi/2)$ Ա։ 7. $X_L = 100$ Օմ, $i = 0{,}5\\sin(500t - \\pi/2)$ Ա։ 8. $\\omega = \\dfrac{1}{\\sqrt{10^{-9}}} \\approx 3{,}2 \\cdot 10^4$ ռադ/վ, $\\nu \\approx 5$ կՀց։`,
        ru: `## Переменный ток

**Переменный ток** — это ток, гармонически меняющийся во времени. Это вынужденное электромагнитное колебание, создаваемое переменной ЭДС. Почти вся электроэнергия вырабатывается и передаётся в виде переменного тока, потому что его напряжение легко изменить трансформатором.

**Генератор.** Рамка площадью $S$ с $N$ витками вращается с угловой скоростью $\\omega$ в однородном поле $B$. Поток $\\Phi = BS\\cos\\omega t$ меняется, и по закону Фарадея ЭДС равна

$$e = -N\\dfrac{\\Delta\\Phi}{\\Delta t} = NBS\\omega\\sin\\omega t = \\varepsilon_m\\sin\\omega t.$$

Амплитуда $\\varepsilon_m = NBS\\omega$ растёт с полем, площадью, числом витков и скоростью вращения. В настоящем генераторе катушки неподвижны, а вращается магнит (ротор), приводимый турбиной. Частота сети в Европе и Армении $50$ Гц (в Америке $60$ Гц): $\\omega = 2\\pi \\cdot 50 \\approx 314$ рад/с.

В цепи напряжение и ток равны $u = U_m\\sin\\omega t$ и $i = I_m\\sin(\\omega t + \\varphi)$, где $\\varphi$ — **сдвиг фаз** между током и напряжением, зависящий от элементов цепи.

## Действующие значения

Мгновенная мощность $p = i^2 R$ пульсирует; средняя мощность синусоидального тока $P = \\dfrac{I_m^2 R}{2}$. **Действующее** значение тока — это постоянный ток, который выделил бы то же тепло:

> $$I = \\dfrac{I_m}{\\sqrt2}, \\qquad U = \\dfrac{U_m}{\\sqrt2}.$$

Приборы переменного тока показывают действующие значения. $220$ В сети — действующее значение; амплитуда $220\\sqrt2 \\approx 311$ В. Изоляция и конденсаторы должны выдерживать амплитуду.

## Резистор, конденсатор и катушка в цепи переменного тока

**Резистор** (активное сопротивление $R$). В каждый момент $i = \\dfrac{u}{R}$, поэтому ток и напряжение **совпадают по фазе**. $I = \\dfrac{U}{R}$, средняя мощность $P = UI = I^2 R$.

**Конденсатор.** Постоянный ток через конденсатор пройти не может, а переменный непрерывно заряжает и разряжает его, так что в цепи течёт ток. $q = Cu = CU_m\\sin\\omega t$, а ток, скорость изменения заряда, равен $i = CU_m\\omega\\cos\\omega t = I_m\\sin(\\omega t + \\dfrac{\\pi}{2})$. Ток **опережает** напряжение на четверть периода. Соотношение амплитуд $I_m = \\omega C U_m$ определяет **ёмкостное сопротивление**:

$$X_C = \\dfrac{1}{\\omega C}.$$

Оно убывает с частотой: конденсатор пропускает высокие частоты и задерживает низкие и постоянный ток. Средняя мощность на конденсаторе равна нулю: четверть периода он запасает энергию и в следующую четверть отдаёт.

**Катушка** (индуктивность $L$, пренебрежимое сопротивление). ЭДС самоиндукции уравновешивает приложенное напряжение: $u = L\\dfrac{\\Delta i}{\\Delta t}$. Для $i = I_m\\sin\\omega t$ получаем $u = LI_m\\omega\\cos\\omega t$, так что напряжение **опережает** ток на $\\dfrac{\\pi}{2}$ (ток отстаёт). **Индуктивное сопротивление**

$$X_L = \\omega L$$

растёт с частотой: катушка пропускает постоянный ток и низкие частоты и задерживает высокие. Её средняя мощность тоже равна нулю.

| Элемент | Сопротивление | Фаза тока относительно напряжения | Средняя мощность |
|---|---|---|---|
| $R$ | $R$ | совпадает | $UI$ |
| $C$ | $1/(\\omega C)$ | опережает на $\\pi/2$ | $0$ |
| $L$ | $\\omega L$ | отстаёт на $\\pi/2$ | $0$ |

**Пример 1.** Рамка с $N = 100$ витками и площадью $0{,}02$ м² вращается с частотой $50$ оборотов в секунду в поле $0{,}1$ Тл. $\\varepsilon_m = 100 \\cdot 0{,}1 \\cdot 0{,}02 \\cdot 314 \\approx 63$ В; действующая ЭДС около $44$ В.

**Пример 2.** Нагреватель сопротивлением $48{,}4$ Ом включают в $220$ В. $I = \\dfrac{220}{48{,}4} \\approx 4{,}5$ А, $I_m \\approx 6{,}4$ А, $P = UI = 1000$ Вт. Мгновенная мощность пульсирует между $0$ и $2000$ Вт с частотой $100$ Гц, поэтому лампы накаливания слегка мерцают.

**Пример 3.** Конденсатор $10$ мкФ подключают к сети $220$ В, $50$ Гц. $X_C = \\dfrac{1}{314 \\cdot 10^{-5}} \\approx 318$ Ом, $I = \\dfrac{220}{318} \\approx 0{,}69$ А. При $5$ кГц сопротивление было бы в $100$ раз меньше, а ток — в $100$ раз больше.

**Пример 4.** Катушка $0{,}5$ Гн с пренебрежимым сопротивлением в той же сети: $X_L = 314 \\cdot 0{,}5 = 157$ Ом, $I = \\dfrac{220}{157} \\approx 1{,}4$ А. В цепи постоянного тока $220$ В ток ограничивался бы только сопротивлением провода и сжёг бы катушку.

**Пример 5.** К конденсатору $2$ мкФ приложено $u = 100\\sin(1000t)$ В. $X_C = \\dfrac{1}{1000 \\cdot 2 \\cdot 10^{-6}} = 500$ Ом, $I_m = \\dfrac{100}{500} = 0{,}2$ А, $i = 0{,}2\\sin(1000t + \\pi/2)$ А.

**Пример 6.** То же напряжение приложено к катушке $0{,}1$ Гн: $X_L = 100$ Ом, $I_m = 1$ А, $i = \\sin(1000t - \\pi/2)$ А. Проверка: в момент, когда $u$ максимально, $i = 0$ и растёт быстрее всего, что согласуется с $u = L\\dfrac{\\Delta i}{\\Delta t}$.

**Пример 7.** При какой частоте катушка $0{,}1$ Гн и конденсатор $10$ мкФ имеют равные сопротивления? $\\omega L = \\dfrac{1}{\\omega C}$, $\\omega = \\dfrac{1}{\\sqrt{LC}} = \\dfrac{1}{\\sqrt{10^{-6}}} = 1000$ рад/с, $\\nu \\approx 159$ Гц. Это собственная частота контура, важная для резонанса.

**Пример 8.** Почему конденсатор, включённый последовательно с динамиком, называют «фильтром верхних частот»? Его сопротивление велико для низких частот (басы задерживаются) и мало для высоких (верхние частоты проходят), поэтому до маленького динамика доходят только высокие звуки. Катушка, включённая последовательно, делает обратное и питает басовый динамик.

## Упражнения

1. Рамка с $200$ витками и площадью $0{,}01$ м² вращается в поле $0{,}2$ Тл с $\\omega = 100\\pi$ рад/с. Найдите амплитуду и действующее значение ЭДС.
2. Амплитуда напряжения сети $311$ В. Найдите действующее напряжение.
3. Лампа $60$ Вт работает при $220$ В. Найдите действующий и амплитудный ток.
4. Найдите сопротивление конденсатора $4$ мкФ при $50$ Гц и при $5000$ Гц.
5. Найдите сопротивление катушки $20$ мГн при $50$ Гц и при $50$ кГц.
6. К конденсатору $5$ мкФ приложено $u = 50\\sin(500t)$ В. Запишите $i(t)$.
7. То же напряжение приложено к катушке $0{,}2$ Гн. Запишите $i(t)$.
8. При какой частоте катушка $2$ мГн имеет такое же сопротивление, как конденсатор $500$ нФ?

### Ответы

1. $\\varepsilon_m = 200 \\cdot 0{,}2 \\cdot 0{,}01 \\cdot 314 \\approx 126$ В, $\\varepsilon \\approx 89$ В. 2. $220$ В. 3. $I \\approx 0{,}27$ А, $I_m \\approx 0{,}39$ А. 4. $X_C \\approx 796$ Ом и $\\approx 8$ Ом. 5. $X_L \\approx 6{,}3$ Ом и $\\approx 6280$ Ом. 6. $X_C = 400$ Ом, $i = 0{,}125\\sin(500t + \\pi/2)$ А. 7. $X_L = 100$ Ом, $i = 0{,}5\\sin(500t - \\pi/2)$ А. 8. $\\omega = \\dfrac{1}{\\sqrt{10^{-9}}} \\approx 3{,}2 \\cdot 10^4$ рад/с, $\\nu \\approx 5$ кГц.`,
      },
      [
        q(t("The effective value of a sinusoidal current is…", "Սինուսոիդական հոսանքի գործող արժեքը…", "Действующее значение синусоидального тока равно…"), [t("Iₘ/√2", "Iₘ/√2 է", "Iₘ/√2"), t("Iₘ/2", "Iₘ/2 է", "Iₘ/2"), t("Iₘ√2", "Iₘ√2 է", "Iₘ√2")], 0),
        q(t("The amplitude of the 220 V mains voltage is about…", "220 Վ ցանցի լարման լայնույթը մոտ…", "Амплитуда сетевого напряжения 220 В примерно…"), [t("155 V", "155 Վ է", "155 В"), t("311 V", "311 Վ է", "311 В"), t("440 V", "440 Վ է", "440 В")], 1),
        q(t("In a capacitor the current…", "Կոնդենսատորում հոսանքը…", "В конденсаторе ток…"), [t("leads the voltage by π/2", "լարումից առաջ է π/2-ով", "опережает напряжение на π/2"), t("lags the voltage by π/2", "լարումից հետ է π/2-ով", "отстаёт от напряжения на π/2"), t("is in phase with the voltage", "համափուլ է լարման հետ", "совпадает по фазе с напряжением")], 0),
        q(t("Capacitive reactance X_C equals…", "Ունակային դիմադրությունը X_C հավասար է…", "Ёмкостное сопротивление X_C равно…"), [t("ωC", "ωC", "ωC"), t("1/(ωC)", "1/(ωC)", "1/(ωC)"), t("ωL", "ωL", "ωL")], 1),
        q(t("As the frequency grows, the reactance of a coil…", "Հաճախության աճին զուգընթաց կոճի դիմադրությունը…", "С ростом частоты сопротивление катушки…"), [t("grows", "աճում է", "растёт"), t("decreases", "նվազում է", "убывает"), t("does not change", "չի փոխվում", "не меняется")], 0),
        q(t("The mean power dissipated in an ideal coil is…", "Իդեալական կոճում անջատվող միջին հզորությունը…", "Средняя мощность, выделяемая в идеальной катушке,…"), [t("UI", "UI է", "равна UI"), t("zero", "զրո է", "равна нулю"), t("I²X_L", "I²X_L է", "равна I²X_L")], 1),
      ],
    ),
    lesson(
      "ac-resonance-power",
      ["Resonance; power in AC; transformer; power lines", "Ռեզոնանս, հզորություն, տրանսֆորմատոր, հոսանքագծեր", "Резонанс; мощность переменного тока; трансформатор; ЛЭП"],
      {
        en: ["Find the impedance and the resonance frequency of a series RLC circuit and explain voltage resonance", "Compute the mean power P = UI cos φ and interpret the power factor", "Explain the transformer, k = N₂/N₁, and why high voltage is used to transmit electrical energy"],
        hy: ["Գտնել հաջորդական RLC շղթայի լրիվ դիմադրությունն ու ռեզոնանսային հաճախությունը և բացատրել լարումների ռեզոնանսը", "Հաշվել միջին հզորությունը P = UI cos φ բանաձևով և մեկնաբանել հզորության գործակիցը", "Բացատրել տրանսֆորմատորը, k = N₂/N₁, և թե ինչու է էլեկտրաէներգիան հաղորդվում բարձր լարումով"],
        ru: ["Находить полное сопротивление и резонансную частоту последовательной RLC-цепи и объяснять резонанс напряжений", "Вычислять среднюю мощность P = UI cos φ и объяснять смысл коэффициента мощности", "Объяснять трансформатор, k = N₂/N₁, и почему электроэнергию передают при высоком напряжении"],
      },
      {
        en: `## Series RLC circuit and resonance

Connect a resistor, a coil and a capacitor in series to an alternating voltage. The same current flows through all three, but the voltages across them are shifted in phase: $U_R$ is in phase with the current, $U_L$ leads it by $90°$, $U_C$ lags by $90°$. The voltages across the coil and the capacitor are opposite in phase and partly cancel. Adding the three as vectors:

$$U_m = \\sqrt{U_{Rm}^2 + (U_{Lm} - U_{Cm})^2} = I_m\\sqrt{R^2 + (\\omega L - \\dfrac{1}{\\omega C})^2}.$$

> The **impedance** of the circuit is $$Z = \\sqrt{R^2 + \\left(\\omega L - \\dfrac{1}{\\omega C}\\right)^2},$$ and $I = \\dfrac{U}{Z}$. The phase shift satisfies $\\tan\\varphi = \\dfrac{\\omega L - 1/(\\omega C)}{R}$.

When $\\omega L = \\dfrac{1}{\\omega C}$, that is at $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$, the reactances cancel, $Z = R$ is smallest and the current is greatest: **resonance**. At resonance the voltages across the coil and the capacitor are equal, opposite and can be far larger than the applied voltage (each is $\\dfrac{\\omega_0 L}{R}$ times $U$), which is why this is called **voltage resonance**. A radio receiver tunes to a station by setting its circuit's resonance frequency equal to the station's frequency; the wanted signal creates a large current, the others do not.

## Power in an AC circuit

The instantaneous power $p = ui$ with $u = U_m\\sin\\omega t$, $i = I_m\\sin(\\omega t - \\varphi)$ averages to

> $$P = UI\\cos\\varphi,$$

where $U$, $I$ are effective values and $\\cos\\varphi = \\dfrac{R}{Z}$ is the **power factor**. For a pure resistor $\\cos\\varphi = 1$ and $P = UI$; for a pure coil or capacitor $\\cos\\varphi = 0$ and no energy is consumed on average, although current flows and heats the supply wires. Electric motors (inductive loads) have $\\cos\\varphi \\approx 0{.}7$–$0{.}9$; factories add capacitors to raise it toward $1$ and reduce losses in the lines.

## Transformer

A **transformer** is two coils on a common closed iron core. An alternating current in the **primary** ($N_1$ turns) creates an alternating flux in the core; the same flux passes through every turn of the **secondary** ($N_2$ turns) and induces an EMF in it. Since the EMF per turn is the same in both coils,

> $$\\dfrac{U_1}{U_2} = \\dfrac{N_1}{N_2}, \\qquad k = \\dfrac{N_2}{N_1}$$ is the transformation ratio. $k > 1$: step-up; $k < 1$: step-down.

With no load the primary draws only a small magnetising current. When the secondary delivers current $I_2$, the primary current grows so that the powers are equal (efficiency up to $99\\%$): $U_1 I_1 \\approx U_2 I_2$, hence $\\dfrac{I_1}{I_2} \\approx \\dfrac{N_2}{N_1}$. Raising the voltage $k$ times lowers the current $k$ times. A transformer does not work on DC: a constant flux induces nothing.

## Transmission of electrical energy

A line of resistance $R$ carrying current $I$ loses power $P_{\\text{loss}} = I^2 R$. For a given transmitted power $P = UI$ the current is $I = \\dfrac{P}{U}$, so

$$P_{\\text{loss}} = \\dfrac{P^2 R}{U^2}.$$

Raising the voltage $10$ times cuts the losses $100$ times. That is why power stations step the voltage up to $110$–$750$ kV for long lines, and substations near the consumers step it down to $220$ V. The whole system, from generator to socket, works only because transformers make AC voltage easy to change.

**Example 1.** $R = 30$ Ω, $L = 0{.}2$ H, $C = 50$ μF at $\\omega = 314$ rad/s. $X_L = 62{.}8$ Ω, $X_C = \\dfrac{1}{314 \\cdot 5 \\cdot 10^{-5}} = 63{.}7$ Ω, $Z = \\sqrt{900 + 0{.}8} \\approx 30$ Ω. The circuit is nearly at resonance ($\\omega_0 = \\dfrac{1}{\\sqrt{10^{-5}}} = 316$ rad/s).

**Example 2.** $R = 10$ Ω, $L = 0{.}1$ H, $C = 10$ μF, $U = 100$ V at resonance. $\\omega_0 = 1000$ rad/s, $I = \\dfrac{100}{10} = 10$ A, $U_L = U_C = I\\omega_0 L = 10 \\cdot 100 = 1000$ V, ten times the supply voltage. Capacitors in such a circuit must be rated for $1{.}4$ kV amplitude.

**Example 3.** A motor draws $5$ A from $220$ V with $\\cos\\varphi = 0{.}8$. Power consumed: $P = 220 \\cdot 5 \\cdot 0{.}8 = 880$ W. The "apparent power" $UI = 1100$ VA is what the wiring must carry.

**Example 4.** A transformer with $N_1 = 1100$, $N_2 = 60$ on $220$ V gives $U_2 = 220 \\cdot \\dfrac{60}{1100} = 12$ V. If the secondary supplies $5$ A, the primary draws about $I_1 = 5 \\cdot \\dfrac{60}{1100} \\approx 0{.}27$ A.

**Example 5.** A welding transformer must give $40$ V and $200$ A. Primary at $220$ V: $k = \\dfrac{40}{220} \\approx 0{.}18$, $I_1 = 200 \\cdot 0{.}18 \\approx 36$ A. The secondary is a few turns of thick copper bar.

**Example 6.** A station sends $P = 10$ MW over a line of resistance $R = 10$ Ω. At $U = 10$ kV: $I = 1000$ A, loss $I^2R = 10$ MW, everything is lost. At $U = 100$ kV: $I = 100$ A, loss $0{.}1$ MW, that is $1\\%$. At $500$ kV the loss is $4$ kW.

**Example 7.** The current in a series circuit lags the voltage by $60°$ with $U = 120$ V and $I = 2$ A. $P = 120 \\cdot 2 \\cdot \\cos 60° = 120$ W, $R = \\dfrac{P}{I^2} = 30$ Ω, $Z = 60$ Ω, $X_L - X_C = \\sqrt{3600 - 900} \\approx 52$ Ω.

**Example 8.** Why is the core of a transformer made of iron sheets, and why does it hum? Iron ($\\mu$ in the thousands) concentrates the flux so that nearly all of it links both coils; sheets with insulating layers break up eddy currents. The $50$ Hz magnetisation makes the sheets expand and contract slightly $100$ times per second (magnetostriction), which we hear as a $100$ Hz hum.

## Exercises

1. Find $Z$ and $I$ for $R = 40$ Ω, $X_L = 80$ Ω, $X_C = 50$ Ω, $U = 100$ V.
2. Find the resonance frequency of a circuit with $L = 50$ mH and $C = 20$ μF.
3. A circuit with $R = 5$ Ω, $L = 0{.}05$ H, $C = 20$ μF is at resonance with $U = 10$ V. Find $I$, $U_L$ and $U_C$.
4. A load draws $10$ A from $220$ V with $\\cos\\varphi = 0{.}6$. Find the power consumed.
5. A transformer has $N_1 = 500$ and $N_2 = 2500$ and is fed $220$ V. Find $U_2$ and $k$. Is it step-up or step-down?
6. A step-down transformer gives $6$ V, $2$ A from $220$ V. Find the primary current (ideal transformer).
7. A line of resistance $20$ Ω transmits $2$ MW. Find the losses at $20$ kV and at $200$ kV.
8. Why can a transformer not change the voltage of a battery?

### Answers

1. $Z = \\sqrt{1600 + 900} = 50$ Ω, $I = 2$ A. 2. $\\omega_0 = 1000$ rad/s, $\\nu_0 \\approx 159$ Hz. 3. $I = 2$ A, $\\omega_0 = 1000$ rad/s, $U_L = U_C = 2 \\cdot 50 = 100$ V. 4. $1320$ W. 5. $U_2 = 1100$ V, $k = 5$, step-up. 6. $I_1 = \\dfrac{6 \\cdot 2}{220} \\approx 0{.}055$ A. 7. $I = 100$ A, loss $200$ kW ($10\\%$); $I = 10$ A, loss $2$ kW ($0{.}1\\%$). 8. A battery gives a constant current and a constant flux, which induces no EMF in the secondary.`,
        hy: `## Հաջորդական RLC շղթա և ռեզոնանս

Ռեզիստորը, կոճը և կոնդենսատորը հաջորդաբար միացնենք փոփոխական լարման։ Երեքով էլ անցնում է նույն հոսանքը, բայց դրանց լարումները փուլով շեղված են․ $U_R$-ը համափուլ է հոսանքի հետ, $U_L$-ը նրանից առաջ է $90°$-ով, $U_C$-ն հետ է $90°$-ով։ Կոճի և կոնդենսատորի լարումները հակառակ փուլով են և մասամբ իրար չեզոքացնում են։ Գումարելով երեքը որպես վեկտորներ․

$$U_m = \\sqrt{U_{Rm}^2 + (U_{Lm} - U_{Cm})^2} = I_m\\sqrt{R^2 + (\\omega L - \\dfrac{1}{\\omega C})^2}$$

> Շղթայի **լրիվ դիմադրությունը** $$Z = \\sqrt{R^2 + \\left(\\omega L - \\dfrac{1}{\\omega C}\\right)^2}$$ է, և $I = \\dfrac{U}{Z}$։ Փուլերի շեղումը բավարարում է $\\tan\\varphi = \\dfrac{\\omega L - 1/(\\omega C)}{R}$ առնչությանը։

Երբ $\\omega L = \\dfrac{1}{\\omega C}$, այսինքն՝ $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$ դեպքում, ռեակտիվ դիմադրությունները չեզոքանում են, $Z = R$-ն փոքրագույնն է, իսկ հոսանքը՝ մեծագույնը․ **ռեզոնանս**։ Ռեզոնանսի դեպքում կոճի և կոնդենսատորի լարումները հավասար են, հակառակ և կարող են շատ անգամ մեծ լինել կիրառված լարումից (յուրաքանչյուրը $U$-ի $\\dfrac{\\omega_0 L}{R}$-ապատիկն է), այդ պատճառով սա կոչվում է **լարումների ռեզոնանս**։ Ռադիոընդունիչը կարգավորվում է կայանի վրա՝ իր կոնտուրի ռեզոնանսային հաճախությունը հավասարեցնելով կայանի հաճախությանը, ցանկալի ազդանշանը մեծ հոսանք է ստեղծում, մյուսները՝ ոչ։

## Հզորությունը փոփոխական հոսանքի շղթայում

$u = U_m\\sin\\omega t$, $i = I_m\\sin(\\omega t - \\varphi)$ դեպքում ակնթարթային $p = ui$ հզորության միջինը

> $$P = UI\\cos\\varphi$$

է, որտեղ $U$-ն, $I$-ն գործող արժեքներ են, իսկ $\\cos\\varphi = \\dfrac{R}{Z}$-ը՝ **հզորության գործակիցը**։ Մաքուր ռեզիստորի համար $\\cos\\varphi = 1$ և $P = UI$, մաքուր կոճի կամ կոնդենսատորի համար $\\cos\\varphi = 0$, և միջին հաշվով էներգիա չի սպառվում, թեև հոսանք է հոսում և տաքացնում սնուցող լարերը։ Էլեկտրաշարժիչներն (ինդուկտիվ բեռներ) ունեն $\\cos\\varphi \\approx 0{,}7$–$0{,}9$, գործարանները կոնդենսատորներ են ավելացնում՝ այն $1$-ին մոտեցնելու և գծերի կորուստները նվազեցնելու համար։

## Տրանսֆորմատոր

**Տրանսֆորմատորը** ընդհանուր փակ երկաթե միջուկի վրա երկու կոճ է։ **Առաջնային** կոճի ($N_1$ գալար) փոփոխական հոսանքը միջուկում փոփոխական հոսք է ստեղծում, նույն հոսքն անցնում է **երկրորդային** կոճի ($N_2$ գալար) յուրաքանչյուր գալարով և նրանում ԷլՇՈւ է մակածում։ Քանի որ մեկ գալարի ԷլՇՈւ-ն երկու կոճերում նույնն է,

> $$\\dfrac{U_1}{U_2} = \\dfrac{N_1}{N_2}, \\qquad k = \\dfrac{N_2}{N_1}$$ տրանսֆորմացման գործակիցն է։ $k > 1$՝ բարձրացնող, $k < 1$՝ իջեցնող։

Առանց բեռի առաջնային կոճը միայն փոքր մագնիսացնող հոսանք է սպառում։ Երբ երկրորդայինը $I_2$ հոսանք է տալիս, առաջնայինի հոսանքն աճում է այնպես, որ հզորությունները հավասար լինեն (ՕԳԳ-ն մինչև $99\\%$)․ $U_1 I_1 \\approx U_2 I_2$, որտեղից $\\dfrac{I_1}{I_2} \\approx \\dfrac{N_2}{N_1}$։ Լարումը $k$ անգամ բարձրացնելը հոսանքը $k$ անգամ իջեցնում է։ Տրանսֆորմատորը չի աշխատում հաստատուն հոսանքով․ հաստատուն հոսքը ոչինչ չի մակածում։

## Էլեկտրաէներգիայի հաղորդում

$I$ հոսանքով $R$ դիմադրությամբ գիծը կորցնում է $P_{\\text{կոր}} = I^2 R$ հզորություն։ Տրված $P = UI$ հաղորդվող հզորության դեպքում հոսանքը $I = \\dfrac{P}{U}$ է, ուստի

$$P_{\\text{կոր}} = \\dfrac{P^2 R}{U^2}$$

Լարումը $10$ անգամ բարձրացնելը կորուստները $100$ անգամ փոքրացնում է։ Այդ պատճառով էլեկտրակայաններն երկար գծերի համար լարումը բարձրացնում են մինչև $110$–$750$ կՎ, իսկ սպառողների մոտ ենթակայաններն իջեցնում են մինչև $220$ Վ։ Ամբողջ համակարգը՝ գեներատորից մինչև վարդակ, աշխատում է միայն այն պատճառով, որ տրանսֆորմատորները հեշտացնում են փոփոխական լարման փոփոխումը։

**Օրինակ 1։** $R = 30$ Օմ, $L = 0{,}2$ Հն, $C = 50$ մկՖ, $\\omega = 314$ ռադ/վ։ $X_L = 62{,}8$ Օմ, $X_C = \\dfrac{1}{314 \\cdot 5 \\cdot 10^{-5}} = 63{,}7$ Օմ, $Z = \\sqrt{900 + 0{,}8} \\approx 30$ Օմ։ Շղթան գրեթե ռեզոնանսի մեջ է ($\\omega_0 = \\dfrac{1}{\\sqrt{10^{-5}}} = 316$ ռադ/վ)։

**Օրինակ 2։** $R = 10$ Օմ, $L = 0{,}1$ Հն, $C = 10$ մկՖ, $U = 100$ Վ ռեզոնանսի դեպքում։ $\\omega_0 = 1000$ ռադ/վ, $I = \\dfrac{100}{10} = 10$ Ա, $U_L = U_C = I\\omega_0 L = 10 \\cdot 100 = 1000$ Վ՝ սնուցման լարման տասնապատիկը։ Նման շղթայի կոնդենսատորները պետք է նախատեսված լինեն $1{,}4$ կՎ լայնույթի համար։

**Օրինակ 3։** Շարժիչը $220$ Վ-ից սպառում է $5$ Ա՝ $\\cos\\varphi = 0{,}8$։ Սպառվող հզորությունը՝ $P = 220 \\cdot 5 \\cdot 0{,}8 = 880$ Վտ։ «Լրիվ հզորությունը» $UI = 1100$ ՎԱ այն է, ինչ պետք է տանեն լարերը։

**Օրինակ 4։** $N_1 = 1100$, $N_2 = 60$ տրանսֆորմատորը $220$ Վ-ից տալիս է $U_2 = 220 \\cdot \\dfrac{60}{1100} = 12$ Վ։ Եթե երկրորդայինը տալիս է $5$ Ա, առաջնայինը սպառում է մոտ $I_1 = 5 \\cdot \\dfrac{60}{1100} \\approx 0{,}27$ Ա։

**Օրինակ 5։** Եռակցման տրանսֆորմատորը պետք է տա $40$ Վ և $200$ Ա։ Առաջնայինը $220$ Վ-ին․ $k = \\dfrac{40}{220} \\approx 0{,}18$, $I_1 = 200 \\cdot 0{,}18 \\approx 36$ Ա։ Երկրորդայինը հաստ պղնձե ձողի մի քանի գալար է։

**Օրինակ 6։** Կայանը $P = 10$ ՄՎտ է ուղարկում $R = 10$ Օմ դիմադրությամբ գծով։ $U = 10$ կՎ դեպքում՝ $I = 1000$ Ա, կորուստը՝ $I^2R = 10$ ՄՎտ, ամեն ինչ կորչում է։ $U = 100$ կՎ դեպքում՝ $I = 100$ Ա, կորուստը՝ $0{,}1$ ՄՎտ, այսինքն՝ $1\\%$։ $500$ կՎ դեպքում կորուստը $4$ կՎտ է։

**Օրինակ 7։** Հաջորդական շղթայում հոսանքը լարումից հետ է $60°$-ով, $U = 120$ Վ և $I = 2$ Ա։ $P = 120 \\cdot 2 \\cdot \\cos 60° = 120$ Վտ, $R = \\dfrac{P}{I^2} = 30$ Օմ, $Z = 60$ Օմ, $X_L - X_C = \\sqrt{3600 - 900} \\approx 52$ Օմ։

**Օրինակ 8։** Ինչո՞ւ է տրանսֆորմատորի միջուկը պատրաստվում երկաթե թիթեղներից, և ինչո՞ւ է այն բզզում։ Երկաթը ($\\mu$-ն հազարների կարգի է) խտացնում է հոսքն այնպես, որ գրեթե ամբողջն անցնում է երկու կոճերով, իսկ մեկուսիչ շերտերով թիթեղները կոտրում են մրրկային հոսանքները։ $50$ Հց մագնիսացումը թիթեղները վայրկյանում $100$ անգամ թեթևակի ընդարձակում և սեղմում է (մագնիսաստրիկցիա), որը լսում ենք որպես $100$ Հց բզզոց։

## Վարժություններ

1. Գտեք $Z$-ն և $I$-ն $R = 40$ Օմ, $X_L = 80$ Օմ, $X_C = 50$ Օմ, $U = 100$ Վ դեպքում։
2. Գտեք $L = 50$ մՀն և $C = 20$ մկՖ կոնտուրի ռեզոնանսային հաճախությունը։
3. $R = 5$ Օմ, $L = 0{,}05$ Հն, $C = 20$ մկՖ շղթան ռեզոնանսի մեջ է $U = 10$ Վ դեպքում։ Գտեք $I$-ն, $U_L$-ը և $U_C$-ն։
4. Բեռը $220$ Վ-ից սպառում է $10$ Ա՝ $\\cos\\varphi = 0{,}6$։ Գտեք սպառվող հզորությունը։
5. Տրանսֆորմատորն ունի $N_1 = 500$ և $N_2 = 2500$ և սնվում է $220$ Վ-ով։ Գտեք $U_2$-ը և $k$-ն։ Բարձրացնո՞ղ է, թե՞ իջեցնող։
6. Իջեցնող տրանսֆորմատորը $220$ Վ-ից տալիս է $6$ Վ, $2$ Ա։ Գտեք առաջնայինի հոսանքը (իդեալական տրանսֆորմատոր)։
7. $20$ Օմ դիմադրությամբ գիծը հաղորդում է $2$ ՄՎտ։ Գտեք կորուստները $20$ կՎ և $200$ կՎ դեպքում։
8. Ինչո՞ւ տրանսֆորմատորը չի կարող փոխել մարտկոցի լարումը։

### Պատասխաններ

1. $Z = \\sqrt{1600 + 900} = 50$ Օմ, $I = 2$ Ա։ 2. $\\omega_0 = 1000$ ռադ/վ, $\\nu_0 \\approx 159$ Հց։ 3. $I = 2$ Ա, $\\omega_0 = 1000$ ռադ/վ, $U_L = U_C = 2 \\cdot 50 = 100$ Վ։ 4. $1320$ Վտ։ 5. $U_2 = 1100$ Վ, $k = 5$, բարձրացնող։ 6. $I_1 = \\dfrac{6 \\cdot 2}{220} \\approx 0{,}055$ Ա։ 7. $I = 100$ Ա, կորուստը $200$ կՎտ ($10\\%$), $I = 10$ Ա, կորուստը $2$ կՎտ ($0{,}1\\%$)։ 8. Մարտկոցը տալիս է հաստատուն հոսանք և հաստատուն հոսք, որն երկրորդայինում ԷլՇՈւ չի մակածում։`,
        ru: `## Последовательная RLC-цепь и резонанс

Соединим резистор, катушку и конденсатор последовательно и подключим к переменному напряжению. Через все три течёт один ток, но напряжения на них сдвинуты по фазе: $U_R$ совпадает по фазе с током, $U_L$ опережает его на $90°$, $U_C$ отстаёт на $90°$. Напряжения на катушке и конденсаторе противоположны по фазе и частично гасят друг друга. Складывая три напряжения как векторы:

$$U_m = \\sqrt{U_{Rm}^2 + (U_{Lm} - U_{Cm})^2} = I_m\\sqrt{R^2 + (\\omega L - \\dfrac{1}{\\omega C})^2}.$$

> **Полное сопротивление** цепи $$Z = \\sqrt{R^2 + \\left(\\omega L - \\dfrac{1}{\\omega C}\\right)^2},$$ и $I = \\dfrac{U}{Z}$. Сдвиг фаз удовлетворяет $\\tan\\varphi = \\dfrac{\\omega L - 1/(\\omega C)}{R}$.

Когда $\\omega L = \\dfrac{1}{\\omega C}$, то есть при $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$, реактивные сопротивления взаимно уничтожаются, $Z = R$ наименьшее, а ток наибольший: **резонанс**. При резонансе напряжения на катушке и конденсаторе равны, противоположны и могут намного превышать приложенное напряжение (каждое в $\\dfrac{\\omega_0 L}{R}$ раз больше $U$), поэтому это называется **резонансом напряжений**. Радиоприёмник настраивают на станцию, делая резонансную частоту контура равной частоте станции: нужный сигнал создаёт большой ток, остальные — нет.

## Мощность в цепи переменного тока

Мгновенная мощность $p = ui$ при $u = U_m\\sin\\omega t$, $i = I_m\\sin(\\omega t - \\varphi)$ в среднем равна

> $$P = UI\\cos\\varphi,$$

где $U$, $I$ — действующие значения, а $\\cos\\varphi = \\dfrac{R}{Z}$ — **коэффициент мощности**. Для чистого резистора $\\cos\\varphi = 1$ и $P = UI$; для чистой катушки или конденсатора $\\cos\\varphi = 0$, и энергия в среднем не потребляется, хотя ток течёт и греет подводящие провода. У электродвигателей (индуктивная нагрузка) $\\cos\\varphi \\approx 0{,}7$–$0{,}9$; на заводах добавляют конденсаторы, чтобы приблизить его к $1$ и уменьшить потери в линиях.

## Трансформатор

**Трансформатор** — две катушки на общем замкнутом железном сердечнике. Переменный ток в **первичной** обмотке ($N_1$ витков) создаёт в сердечнике переменный поток; тот же поток проходит через каждый виток **вторичной** обмотки ($N_2$ витков) и наводит в ней ЭДС. Поскольку ЭДС на один виток в обеих обмотках одинакова,

> $$\\dfrac{U_1}{U_2} = \\dfrac{N_1}{N_2}, \\qquad k = \\dfrac{N_2}{N_1}$$ — коэффициент трансформации. $k > 1$: повышающий; $k < 1$: понижающий.

Без нагрузки первичная обмотка потребляет лишь малый ток намагничивания. Когда вторичная отдаёт ток $I_2$, ток первичной растёт так, что мощности равны (КПД до $99\\%$): $U_1 I_1 \\approx U_2 I_2$, откуда $\\dfrac{I_1}{I_2} \\approx \\dfrac{N_2}{N_1}$. Повышение напряжения в $k$ раз понижает ток в $k$ раз. На постоянном токе трансформатор не работает: постоянный поток ничего не наводит.

## Передача электроэнергии

Линия сопротивлением $R$ с током $I$ теряет мощность $P_{\\text{пот}} = I^2 R$. При заданной передаваемой мощности $P = UI$ ток равен $I = \\dfrac{P}{U}$, поэтому

$$P_{\\text{пот}} = \\dfrac{P^2 R}{U^2}.$$

Повышение напряжения в $10$ раз уменьшает потери в $100$ раз. Поэтому электростанции повышают напряжение до $110$–$750$ кВ для длинных линий, а подстанции у потребителей понижают его до $220$ В. Вся система от генератора до розетки работает лишь потому, что трансформаторы позволяют легко менять напряжение переменного тока.

**Пример 1.** $R = 30$ Ом, $L = 0{,}2$ Гн, $C = 50$ мкФ при $\\omega = 314$ рад/с. $X_L = 62{,}8$ Ом, $X_C = \\dfrac{1}{314 \\cdot 5 \\cdot 10^{-5}} = 63{,}7$ Ом, $Z = \\sqrt{900 + 0{,}8} \\approx 30$ Ом. Цепь почти в резонансе ($\\omega_0 = \\dfrac{1}{\\sqrt{10^{-5}}} = 316$ рад/с).

**Пример 2.** $R = 10$ Ом, $L = 0{,}1$ Гн, $C = 10$ мкФ, $U = 100$ В при резонансе. $\\omega_0 = 1000$ рад/с, $I = \\dfrac{100}{10} = 10$ А, $U_L = U_C = I\\omega_0 L = 10 \\cdot 100 = 1000$ В — в десять раз больше питающего напряжения. Конденсаторы в такой цепи должны быть рассчитаны на амплитуду $1{,}4$ кВ.

**Пример 3.** Двигатель потребляет $5$ А от $220$ В при $\\cos\\varphi = 0{,}8$. Потребляемая мощность: $P = 220 \\cdot 5 \\cdot 0{,}8 = 880$ Вт. «Полная мощность» $UI = 1100$ ВА — то, что должна выдерживать проводка.

**Пример 4.** Трансформатор с $N_1 = 1100$, $N_2 = 60$ от $220$ В даёт $U_2 = 220 \\cdot \\dfrac{60}{1100} = 12$ В. Если вторичная обмотка отдаёт $5$ А, первичная потребляет около $I_1 = 5 \\cdot \\dfrac{60}{1100} \\approx 0{,}27$ А.

**Пример 5.** Сварочный трансформатор должен давать $40$ В и $200$ А. Первичная обмотка на $220$ В: $k = \\dfrac{40}{220} \\approx 0{,}18$, $I_1 = 200 \\cdot 0{,}18 \\approx 36$ А. Вторичная обмотка — несколько витков толстой медной шины.

**Пример 6.** Станция передаёт $P = 10$ МВт по линии сопротивлением $R = 10$ Ом. При $U = 10$ кВ: $I = 1000$ А, потери $I^2R = 10$ МВт, теряется всё. При $U = 100$ кВ: $I = 100$ А, потери $0{,}1$ МВт, то есть $1\\%$. При $500$ кВ потери $4$ кВт.

**Пример 7.** В последовательной цепи ток отстаёт от напряжения на $60°$ при $U = 120$ В и $I = 2$ А. $P = 120 \\cdot 2 \\cdot \\cos 60° = 120$ Вт, $R = \\dfrac{P}{I^2} = 30$ Ом, $Z = 60$ Ом, $X_L - X_C = \\sqrt{3600 - 900} \\approx 52$ Ом.

**Пример 8.** Почему сердечник трансформатора набирают из железных пластин и почему он гудит? Железо ($\\mu$ порядка тысяч) концентрирует поток так, что почти весь он сцеплен с обеими обмотками; пластины с изолирующими прослойками разрывают вихревые токи. Намагничивание с частотой $50$ Гц заставляет пластины слегка расширяться и сжиматься $100$ раз в секунду (магнитострикция), что мы слышим как гул на $100$ Гц.

## Упражнения

1. Найдите $Z$ и $I$ при $R = 40$ Ом, $X_L = 80$ Ом, $X_C = 50$ Ом, $U = 100$ В.
2. Найдите резонансную частоту контура с $L = 50$ мГн и $C = 20$ мкФ.
3. Цепь с $R = 5$ Ом, $L = 0{,}05$ Гн, $C = 20$ мкФ находится в резонансе при $U = 10$ В. Найдите $I$, $U_L$ и $U_C$.
4. Нагрузка потребляет $10$ А от $220$ В при $\\cos\\varphi = 0{,}6$. Найдите потребляемую мощность.
5. Трансформатор имеет $N_1 = 500$ и $N_2 = 2500$ и питается от $220$ В. Найдите $U_2$ и $k$. Повышающий он или понижающий?
6. Понижающий трансформатор даёт $6$ В, $2$ А от $220$ В. Найдите ток первичной обмотки (идеальный трансформатор).
7. Линия сопротивлением $20$ Ом передаёт $2$ МВт. Найдите потери при $20$ кВ и при $200$ кВ.
8. Почему трансформатор не может изменить напряжение батареи?

### Ответы

1. $Z = \\sqrt{1600 + 900} = 50$ Ом, $I = 2$ А. 2. $\\omega_0 = 1000$ рад/с, $\\nu_0 \\approx 159$ Гц. 3. $I = 2$ А, $\\omega_0 = 1000$ рад/с, $U_L = U_C = 2 \\cdot 50 = 100$ В. 4. $1320$ Вт. 5. $U_2 = 1100$ В, $k = 5$, повышающий. 6. $I_1 = \\dfrac{6 \\cdot 2}{220} \\approx 0{,}055$ А. 7. $I = 100$ А, потери $200$ кВт ($10\\%$); $I = 10$ А, потери $2$ кВт ($0{,}1\\%$). 8. Батарея даёт постоянный ток и постоянный поток, который не наводит ЭДС во вторичной обмотке.`,
      },
      [
        q(t("At resonance in a series RLC circuit the impedance equals…", "Հաջորդական RLC շղթայում ռեզոնանսի դեպքում լրիվ դիմադրությունը հավասար է…", "При резонансе в последовательной RLC-цепи полное сопротивление равно…"), [t("R", "R", "R"), t("ωL", "ωL", "ωL"), t("zero", "զրոյի", "нулю")], 0),
        q(t("The mean power in an AC circuit is P =", "Փոփոխական հոսանքի շղթայում միջին հզորությունը P =", "Средняя мощность в цепи переменного тока P ="), [t("UI", "UI", "UI"), t("UI cos φ", "UI cos φ", "UI cos φ"), t("UI sin φ", "UI sin φ", "UI sin φ")], 1),
        q(t("A transformer with N₁ = 100 and N₂ = 1000 is…", "N₁ = 100 և N₂ = 1000 տրանսֆորմատորը…", "Трансформатор с N₁ = 100 и N₂ = 1000 —"), [t("step-down", "իջեցնող է", "понижающий"), t("step-up", "բարձրացնող է", "повышающий"), t("does not change the voltage", "չի փոխում լարումը", "не меняет напряжение")], 1),
        q(t("An ideal transformer that raises the voltage 10 times…", "Լարումը 10 անգամ բարձրացնող իդեալական տրանսֆորմատորը…", "Идеальный трансформатор, повышающий напряжение в 10 раз,…"), [t("raises the current 10 times", "հոսանքը բարձրացնում է 10 անգամ", "повышает ток в 10 раз"), t("lowers the current 10 times", "հոսանքն իջեցնում է 10 անգամ", "понижает ток в 10 раз"), t("raises the power 10 times", "հզորությունը բարձրացնում է 10 անգամ", "повышает мощность в 10 раз")], 1),
        q(t("If the transmission voltage is raised 10 times, the losses in the line…", "Եթե հաղորդման լարումը բարձրացվի 10 անգամ, գծի կորուստները…", "Если напряжение передачи повысить в 10 раз, потери в линии…"), [t("fall 10 times", "կփոքրանան 10 անգամ", "уменьшатся в 10 раз"), t("fall 100 times", "կփոքրանան 100 անգամ", "уменьшатся в 100 раз"), t("do not change", "չեն փոխվի", "не изменятся")], 1),
        q(t("A transformer does not work on direct current because…", "Տրանսֆորմատորը չի աշխատում հաստատուն հոսանքով, քանի որ…", "Трансформатор не работает на постоянном токе, потому что…"), [t("a constant flux induces no EMF", "հաստատուն հոսքն ԷլՇՈւ չի մակածում", "постоянный поток не наводит ЭДС"), t("the core melts", "միջուկը հալվում է", "сердечник плавится"), t("the resistance is too high", "դիմադրությունը չափազանց մեծ է", "сопротивление слишком велико")], 0),
      ],
    ),
  ],
};
