import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Exam review", "Քննական ամփոփում", "Повторение к экзамену"),
  summary: t("Systematic review of mechanics, thermodynamics, electrodynamics, optics and quantum physics.", "Մեխանիկայի, թերմոդինամիկայի, էլեկտրադինամիկայի, օպտիկայի և քվանտային ֆիզիկայի համակարգված ամփոփում։", "Системное повторение механики, термодинамики, электродинамики, оптики и квантовой физики."),
  lessons: [
    lesson(
      "review-mechanics",
      ["Review: mechanics", "Ամփոփում․ մեխանիկա", "Повторение: механика"],
      {
        en: ["Recall the key formulas of kinematics, dynamics, statics and conservation laws in one table", "Apply a standard problem-solving procedure: diagram, laws, equations, units, check", "Solve typical exam problems on motion, forces, energy, momentum and gravitation"],
        hy: ["Հիշել կինեմատիկայի, դինամիկայի, ստատիկայի և պահպանման օրենքների հիմնական բանաձևերը մեկ աղյուսակում", "Կիրառել խնդիրների լուծման ստանդարտ ընթացակարգ․ գծագիր, օրենքներ, հավասարումներ, միավորներ, ստուգում", "Լուծել շարժման, ուժերի, էներգիայի, իմպուլսի և ձգողականության տիպիկ քննական խնդիրներ"],
        ru: ["Вспомнить ключевые формулы кинематики, динамики, статики и законов сохранения в одной таблице", "Применять стандартную процедуру решения: рисунок, законы, уравнения, единицы, проверка", "Решать типичные экзаменационные задачи на движение, силы, энергию, импульс и тяготение"],
      },
      {
        en: `## Formula sheet

In all problems $g = 10$ m/s² unless stated otherwise.

| Topic | Formulas |
|---|---|
| Uniform motion | $x = x_0 + vt$ |
| Uniform acceleration | $v = v_0 + at$, $s = v_0 t + \\dfrac{at^2}{2}$, $v^2 - v_0^2 = 2as$ |
| Free fall, projectile | $h = \\dfrac{gt^2}{2}$; horizontal $x = v_0 t$, vertical $y = \\dfrac{gt^2}{2}$; range at angle $\\alpha$: $L = \\dfrac{v_0^2 \\sin 2\\alpha}{g}$ |
| Circular motion | $a = \\dfrac{v^2}{r} = \\omega^2 r$, $v = \\omega r = \\dfrac{2\\pi r}{T}$ |
| Newton's laws | $\\sum \\vec F = m\\vec a$; $\\vec F_{12} = -\\vec F_{21}$ |
| Forces | $F_g = mg$; $F_{\\text{fr}} = \\mu N$; $F_{\\text{el}} = kx$; $F = G\\dfrac{m_1 m_2}{r^2}$ |
| Momentum | $\\vec p = m\\vec v$; $\\vec F \\Delta t = \\Delta \\vec p$; $\\sum \\vec p = \\text{const}$ in a closed system |
| Work, energy, power | $A = Fs\\cos\\alpha$; $E_k = \\dfrac{mv^2}{2}$; $E_p = mgh$; $E_p = \\dfrac{kx^2}{2}$; $P = \\dfrac{A}{t} = Fv$ |
| Conservation of energy | $E_k + E_p = \\text{const}$ without friction; $A_{\\text{fr}} = \\Delta E$ with friction |
| Statics | $\\sum \\vec F = 0$, $\\sum M = 0$, $M = Fl$ |
| Gravitation | $g = \\dfrac{GM}{R^2}$; $v_1 = \\sqrt{gR} = 7{.}9$ km/s; $v_2 = \\sqrt{2gR} = 11{.}2$ km/s; $T^2 \\propto r^3$ |

## How to solve a mechanics problem

> 1. **Draw** the situation; mark all forces on the body (gravity, normal force, friction, tension, elastic force).
> 2. **Choose axes**: one along the acceleration; project Newton's second law on each axis.
> 3. **Decide the tool**: constant force → Newton's laws and kinematics; a collision or explosion → momentum; heights and speeds without time → energy.
> 4. **Solve in symbols**, then substitute numbers with SI units.
> 5. **Check**: dimensions, sign, order of magnitude (a car does not accelerate at $100$ m/s²).

## Worked examples

**Example 1.** A car brakes from $72$ km/h to rest over $50$ m. Deceleration and braking time?

$v_0 = 20$ m/s; $a = \\dfrac{v_0^2}{2s} = \\dfrac{400}{100} = 4$ m/s²; $t = v_0/a = 5$ s.

**Example 2.** A stone is thrown horizontally from a $45$ m cliff at $10$ m/s. Where and when does it land, and at what speed?

$t = \\sqrt{2h/g} = 3$ s; $x = 30$ m; $v_y = gt = 30$ m/s, $v = \\sqrt{10^2 + 30^2} \\approx 31{.}6$ m/s.

**Example 3.** A $2$ kg block is pulled along a floor ($\\mu = 0{.}3$) by a horizontal force of $10$ N. Acceleration?

$N = mg = 20$ N; friction $6$ N; $a = (10 - 6)/2 = 2$ m/s².

**Example 4.** A block slides down a $30°$ incline with $\\mu = 0{.}2$. Acceleration?

$a = g(\\sin\\alpha - \\mu\\cos\\alpha) = 10(0{.}5 - 0{.}2 \\cdot 0{.}866) = 3{.}3$ m/s².

**Example 5.** A $0{.}5$ kg cart at $4$ m/s collides and sticks to a $1{.}5$ kg cart at rest. Final speed and energy lost?

$v = \\dfrac{0{.}5 \\cdot 4}{2} = 1$ m/s; $E_{\\text{before}} = 4$ J, $E_{\\text{after}} = 1$ J; $3$ J become heat.

**Example 6.** A pendulum bob is released from a height $0{.}2$ m above the lowest point. Speed at the bottom and tension there if $m = 0{.}1$ kg and $l = 1$ m?

$v = \\sqrt{2gh} = 2$ m/s; $T = mg + \\dfrac{mv^2}{l} = 1 + 0{.}4 = 1{.}4$ N.

**Example 7.** A uniform beam of $4$ m and $20$ kg rests on two supports at its ends; a $60$ kg person stands $1$ m from the left end. Forces on the supports?

Torques about the left end: $N_2 \\cdot 4 = 200 \\cdot 2 + 600 \\cdot 1 = 1000$, $N_2 = 250$ N; $N_1 = 800 - 250 = 550$ N.

**Example 8.** Find the orbital speed and period of a satellite at height $R$ above the Earth's surface ($R = 6400$ km).

$v = \\sqrt{\\dfrac{GM}{2R}} = \\sqrt{\\dfrac{gR}{2}} = \\dfrac{7{.}9}{\\sqrt2} \\approx 5{.}6$ km/s; $T = \\dfrac{2\\pi \\cdot 2R}{v} = \\dfrac{8 \\cdot 10^7}{5600} \\approx 1{.}4 \\cdot 10^4$ s $\\approx 4$ h.

## Exercises

1. A body starts from rest with $a = 2$ m/s². Find its speed and distance after $6$ s, and the distance in the sixth second alone.
2. A ball is thrown upward at $20$ m/s. Find the maximum height, the time to return, and the speed at $15$ m height.
3. A projectile is launched at $40$ m/s at $30°$. Find the range, the maximum height and the flight time.
4. An elevator of $500$ kg accelerates upward at $2$ m/s². Find the cable tension. What does a $60$ kg passenger's scale show?
5. Two masses $3$ kg and $2$ kg hang over a frictionless pulley. Find the acceleration and the tension.
6. A $10$ g bullet at $400$ m/s embeds in a $2$ kg block hanging on a string. How high does the block rise?
7. A $1000$ kg car climbs a $5\\%$ slope at a steady $20$ m/s with friction force $300$ N. Engine power?
8. At what height above the Earth is $g$ four times smaller than at the surface?

### Answers

1. $v = 12$ m/s; $s = 36$ m; $s_6 = 36 - 25 = 11$ m.
2. $h = 20$ m; $t = 4$ s; $v = \\sqrt{400 - 300} = 10$ m/s.
3. $L = 1600 \\cdot 0{.}866/10 \\approx 139$ m; $H = (20)^2/20 = 20$ m; $t = 2 \\cdot 20/10 = 4$ s.
4. $T = m(g + a) = 6000$ N; scale shows $60 \\cdot 12 = 720$ N (apparent weight $72$ kg).
5. $a = g\\dfrac{3 - 2}{3 + 2} = 2$ m/s²; $T = 2(g + a) = 24$ N.
6. $v = \\dfrac{0{.}01 \\cdot 400}{2{.}01} \\approx 2$ m/s; $h = v^2/2g = 0{.}2$ m.
7. $F = mg \\sin\\alpha + F_{\\text{fr}} = 10\\,000 \\cdot 0{.}05 + 300 = 800$ N; $P = Fv = 16$ kW.
8. $(R + h)^2 = 4R^2$, $h = R = 6400$ km.`,
        hy: `## Բանաձևերի աղյուսակ

Բոլոր խնդիրներում $g = 10$ մ/վ², եթե այլ բան նշված չէ։

| Թեմա | Բանաձևեր |
|---|---|
| Հավասարաչափ շարժում | $x = x_0 + vt$ |
| Հավասարաչափ արագացող շարժում | $v = v_0 + at$, $s = v_0 t + \\dfrac{at^2}{2}$, $v^2 - v_0^2 = 2as$ |
| Ազատ անկում, նետված մարմին | $h = \\dfrac{gt^2}{2}$․ հորիզոնական $x = v_0 t$, ուղղաձիգ $y = \\dfrac{gt^2}{2}$․ թռիչքի հեռավորությունն $\\alpha$ անկյան տակ․ $L = \\dfrac{v_0^2 \\sin 2\\alpha}{g}$ |
| Շրջանագծային շարժում | $a = \\dfrac{v^2}{r} = \\omega^2 r$, $v = \\omega r = \\dfrac{2\\pi r}{T}$ |
| Նյուտոնի օրենքներ | $\\sum \\vec F = m\\vec a$․ $\\vec F_{12} = -\\vec F_{21}$ |
| Ուժեր | $F_g = mg$․ $F_{\\text{շփ}} = \\mu N$․ $F_{\\text{առ}} = kx$․ $F = G\\dfrac{m_1 m_2}{r^2}$ |
| Իմպուլս | $\\vec p = m\\vec v$․ $\\vec F \\Delta t = \\Delta \\vec p$․ $\\sum \\vec p = \\text{const}$ փակ համակարգում |
| Աշխատանք, էներգիա, հզորություն | $A = Fs\\cos\\alpha$․ $E_k = \\dfrac{mv^2}{2}$․ $E_p = mgh$․ $E_p = \\dfrac{kx^2}{2}$․ $P = \\dfrac{A}{t} = Fv$ |
| Էներգիայի պահպանում | $E_k + E_p = \\text{const}$ առանց շփման․ $A_{\\text{շփ}} = \\Delta E$ շփման դեպքում |
| Ստատիկա | $\\sum \\vec F = 0$, $\\sum M = 0$, $M = Fl$ |
| Ձգողականություն | $g = \\dfrac{GM}{R^2}$․ $v_1 = \\sqrt{gR} = 7{,}9$ կմ/վ․ $v_2 = \\sqrt{2gR} = 11{,}2$ կմ/վ․ $T^2 \\propto r^3$ |

## Ինչպես լուծել մեխանիկայի խնդիր

> 1. **Գծեք** իրավիճակը․ նշեք մարմնի վրա ազդող բոլոր ուժերը (ծանրության ուժ, հենման ռեակցիա, շփում, լարվածություն, առաձգական ուժ)։
> 2. **Ընտրեք առանցքներ**․ մեկն արագացման ուղղությամբ․ Նյուտոնի երկրորդ օրենքը պրոյեկտեք յուրաքանչյուր առանցքի վրա։
> 3. **Որոշեք գործիքը**․ հաստատուն ուժ → Նյուտոնի օրենքներ և կինեմատիկա․ բախում կամ պայթյուն → իմպուլս․ բարձրություններ և արագություններ առանց ժամանակի → էներգիա։
> 4. **Լուծեք տառային տեսքով**, ապա տեղադրեք թվերը ՄՀ միավորներով։
> 5. **Ստուգեք**․ չափողականություն, նշան, մեծության կարգ (մեքենան $100$ մ/վ² արագացումով չի շարժվում)։

## Լուծված օրինակներ

**Օրինակ 1։** Մեքենան $72$ կմ/ժ-ից արգելակում է մինչև կանգ $50$ մ-ում։ Դանդաղո՞ւմը և արգելակման ժամանա՞կը։

$v_0 = 20$ մ/վ․ $a = \\dfrac{v_0^2}{2s} = \\dfrac{400}{100} = 4$ մ/վ²․ $t = v_0/a = 5$ վ։

**Օրինակ 2։** Քարը $45$ մ ժայռից հորիզոնական նետվում է $10$ մ/վ արագությամբ։ Որտե՞ղ և ե՞րբ է այն ընկնում, և ի՞նչ արագությամբ։

$t = \\sqrt{2h/g} = 3$ վ․ $x = 30$ մ․ $v_y = gt = 30$ մ/վ, $v = \\sqrt{10^2 + 30^2} \\approx 31{,}6$ մ/վ։

**Օրինակ 3։** $2$ կգ կոճղը հատակով ($\\mu = 0{,}3$) քաշում են $10$ Ն հորիզոնական ուժով։ Արագացո՞ւմը։

$N = mg = 20$ Ն․ շփումը $6$ Ն․ $a = (10 - 6)/2 = 2$ մ/վ²։

**Օրինակ 4։** Կոճղը սահում է $30°$ թեք հարթությամբ $\\mu = 0{,}2$ դեպքում։ Արագացո՞ւմը։

$a = g(\\sin\\alpha - \\mu\\cos\\alpha) = 10(0{,}5 - 0{,}2 \\cdot 0{,}866) = 3{,}3$ մ/վ²։

**Օրինակ 5։** $4$ մ/վ արագությամբ $0{,}5$ կգ սայլակը բախվում և կպչում է հանգստի վիճակում գտնվող $1{,}5$ կգ սայլակին։ Վերջնական արագությո՞ւնը և կորցրած էներգիա՞ն։

$v = \\dfrac{0{,}5 \\cdot 4}{2} = 1$ մ/վ․ $E_{\\text{առաջ}} = 4$ Ջ, $E_{\\text{հետո}} = 1$ Ջ․ $3$ Ջ դառնում է ջերմություն։

**Օրինակ 6։** Ճոճանակի գնդիկը բաց են թողնում ամենացածր կետից $0{,}2$ մ բարձրությունից։ Արագությունը ներքևում և լարվածությունն այնտեղ, եթե $m = 0{,}1$ կգ և $l = 1$ մ։

$v = \\sqrt{2gh} = 2$ մ/վ․ $T = mg + \\dfrac{mv^2}{l} = 1 + 0{,}4 = 1{,}4$ Ն։

**Օրինակ 7։** $4$ մ և $20$ կգ համասեռ հեծանը հենված է ծայրերի երկու հենարանի վրա․ $60$ կգ մարդը կանգնած է ձախ ծայրից $1$ մ հեռու։ Ուժերը հենարանների վրա։

Մոմենտները ձախ ծայրի նկատմամբ․ $N_2 \\cdot 4 = 200 \\cdot 2 + 600 \\cdot 1 = 1000$, $N_2 = 250$ Ն․ $N_1 = 800 - 250 = 550$ Ն։

**Օրինակ 8։** Գտեք Երկրի մակերևույթից $R$ բարձրության վրա արբանյակի ուղեծրային արագությունն ու պարբերությունը ($R = 6400$ կմ)։

$v = \\sqrt{\\dfrac{GM}{2R}} = \\sqrt{\\dfrac{gR}{2}} = \\dfrac{7{,}9}{\\sqrt2} \\approx 5{,}6$ կմ/վ․ $T = \\dfrac{2\\pi \\cdot 2R}{v} = \\dfrac{8 \\cdot 10^7}{5600} \\approx 1{,}4 \\cdot 10^4$ վ $\\approx 4$ ժ։

## Վարժություններ

1. Մարմինը հանգստի վիճակից սկսում է շարժվել $a = 2$ մ/վ² արագացումով։ Գտեք արագությունն ու ճանապարհը $6$ վ-ից հետո և միայն վեցերորդ վայրկյանում անցած ճանապարհը։
2. Գնդակը վեր է նետվում $20$ մ/վ արագությամբ։ Գտեք առավելագույն բարձրությունը, վերադարձի ժամանակը և արագությունը $15$ մ բարձրության վրա։
3. Արկն արձակվում է $40$ մ/վ արագությամբ $30°$ անկյան տակ։ Գտեք թռիչքի հեռավորությունը, առավելագույն բարձրությունը և թռիչքի ժամանակը։
4. $500$ կգ վերելակն արագանում է վեր $2$ մ/վ² արագացումով։ Գտեք ճոպանի լարվածությունը։ Ի՞նչ է ցույց տալիս $60$ կգ ուղևորի կշեռքը։
5. $3$ կգ և $2$ կգ զանգվածները կախված են անշփում ճախարակից։ Գտեք արագացումն ու լարվածությունը։
6. $400$ մ/վ արագությամբ $10$ գ գնդակը խրվում է թելից կախված $2$ կգ կոճղի մեջ։ Որքա՞ն է բարձրանում կոճղը։
7. $1000$ կգ մեքենան $5\\%$ թեքությամբ բարձրանում է հաստատուն $20$ մ/վ արագությամբ $300$ Ն շփման ուժի դեպքում։ Շարժիչի հզորությո՞ւնը։
8. Երկրից ի՞նչ բարձրության վրա է $g$-ն չորս անգամ փոքր, քան մակերևույթին։

### Պատասխաններ

1. $v = 12$ մ/վ․ $s = 36$ մ․ $s_6 = 36 - 25 = 11$ մ։
2. $h = 20$ մ․ $t = 4$ վ․ $v = \\sqrt{400 - 300} = 10$ մ/վ։
3. $L = 1600 \\cdot 0{,}866/10 \\approx 139$ մ․ $H = (20)^2/20 = 20$ մ․ $t = 2 \\cdot 20/10 = 4$ վ։
4. $T = m(g + a) = 6000$ Ն․ կշեռքը ցույց է տալիս $60 \\cdot 12 = 720$ Ն (թվացյալ կշիռ $72$ կգ)։
5. $a = g\\dfrac{3 - 2}{3 + 2} = 2$ մ/վ²․ $T = 2(g + a) = 24$ Ն։
6. $v = \\dfrac{0{,}01 \\cdot 400}{2{,}01} \\approx 2$ մ/վ․ $h = v^2/2g = 0{,}2$ մ։
7. $F = mg \\sin\\alpha + F_{\\text{շփ}} = 10\\,000 \\cdot 0{,}05 + 300 = 800$ Ն․ $P = Fv = 16$ կՎտ։
8. $(R + h)^2 = 4R^2$, $h = R = 6400$ կմ։`,
        ru: `## Таблица формул

Во всех задачах $g = 10$ м/с², если не сказано иное.

| Тема | Формулы |
|---|---|
| Равномерное движение | $x = x_0 + vt$ |
| Равноускоренное движение | $v = v_0 + at$, $s = v_0 t + \\dfrac{at^2}{2}$, $v^2 - v_0^2 = 2as$ |
| Свободное падение, бросок | $h = \\dfrac{gt^2}{2}$; по горизонтали $x = v_0 t$, по вертикали $y = \\dfrac{gt^2}{2}$; дальность под углом $\\alpha$: $L = \\dfrac{v_0^2 \\sin 2\\alpha}{g}$ |
| Движение по окружности | $a = \\dfrac{v^2}{r} = \\omega^2 r$, $v = \\omega r = \\dfrac{2\\pi r}{T}$ |
| Законы Ньютона | $\\sum \\vec F = m\\vec a$; $\\vec F_{12} = -\\vec F_{21}$ |
| Силы | $F_g = mg$; $F_{\\text{тр}} = \\mu N$; $F_{\\text{упр}} = kx$; $F = G\\dfrac{m_1 m_2}{r^2}$ |
| Импульс | $\\vec p = m\\vec v$; $\\vec F \\Delta t = \\Delta \\vec p$; $\\sum \\vec p = \\text{const}$ в замкнутой системе |
| Работа, энергия, мощность | $A = Fs\\cos\\alpha$; $E_k = \\dfrac{mv^2}{2}$; $E_p = mgh$; $E_p = \\dfrac{kx^2}{2}$; $P = \\dfrac{A}{t} = Fv$ |
| Сохранение энергии | $E_k + E_p = \\text{const}$ без трения; $A_{\\text{тр}} = \\Delta E$ при трении |
| Статика | $\\sum \\vec F = 0$, $\\sum M = 0$, $M = Fl$ |
| Тяготение | $g = \\dfrac{GM}{R^2}$; $v_1 = \\sqrt{gR} = 7{,}9$ км/с; $v_2 = \\sqrt{2gR} = 11{,}2$ км/с; $T^2 \\propto r^3$ |

## Как решать задачу по механике

> 1. **Нарисуйте** ситуацию; отметьте все силы, действующие на тело (тяжесть, реакция опоры, трение, натяжение, упругость).
> 2. **Выберите оси**: одну вдоль ускорения; спроецируйте второй закон Ньютона на каждую ось.
> 3. **Выберите инструмент**: постоянная сила → законы Ньютона и кинематика; столкновение или взрыв → импульс; высоты и скорости без времени → энергия.
> 4. **Решите в общем виде**, затем подставьте числа в единицах СИ.
> 5. **Проверьте**: размерность, знак, порядок величины (автомобиль не разгоняется с $100$ м/с²).

## Разобранные примеры

**Пример 1.** Автомобиль тормозит с $72$ км/ч до остановки на $50$ м. Замедление и время торможения?

$v_0 = 20$ м/с; $a = \\dfrac{v_0^2}{2s} = \\dfrac{400}{100} = 4$ м/с²; $t = v_0/a = 5$ с.

**Пример 2.** Камень брошен горизонтально с обрыва высотой $45$ м со скоростью $10$ м/с. Где и когда он упадёт и с какой скоростью?

$t = \\sqrt{2h/g} = 3$ с; $x = 30$ м; $v_y = gt = 30$ м/с, $v = \\sqrt{10^2 + 30^2} \\approx 31{,}6$ м/с.

**Пример 3.** Брусок $2$ кг тянут по полу ($\\mu = 0{,}3$) горизонтальной силой $10$ Н. Ускорение?

$N = mg = 20$ Н; трение $6$ Н; $a = (10 - 6)/2 = 2$ м/с².

**Пример 4.** Брусок скользит по наклонной плоскости $30°$ при $\\mu = 0{,}2$. Ускорение?

$a = g(\\sin\\alpha - \\mu\\cos\\alpha) = 10(0{,}5 - 0{,}2 \\cdot 0{,}866) = 3{,}3$ м/с².

**Пример 5.** Тележка $0{,}5$ кг со скоростью $4$ м/с сталкивается и сцепляется с покоящейся тележкой $1{,}5$ кг. Конечная скорость и потерянная энергия?

$v = \\dfrac{0{,}5 \\cdot 4}{2} = 1$ м/с; $E_{\\text{до}} = 4$ Дж, $E_{\\text{после}} = 1$ Дж; $3$ Дж переходят в тепло.

**Пример 6.** Шарик маятника отпускают с высоты $0{,}2$ м над нижней точкой. Скорость внизу и натяжение там при $m = 0{,}1$ кг и $l = 1$ м?

$v = \\sqrt{2gh} = 2$ м/с; $T = mg + \\dfrac{mv^2}{l} = 1 + 0{,}4 = 1{,}4$ Н.

**Пример 7.** Однородная балка $4$ м и $20$ кг лежит на двух опорах по концам; человек $60$ кг стоит в $1$ м от левого конца. Силы на опоры?

Моменты относительно левого конца: $N_2 \\cdot 4 = 200 \\cdot 2 + 600 \\cdot 1 = 1000$, $N_2 = 250$ Н; $N_1 = 800 - 250 = 550$ Н.

**Пример 8.** Найдите орбитальную скорость и период спутника на высоте $R$ над поверхностью Земли ($R = 6400$ км).

$v = \\sqrt{\\dfrac{GM}{2R}} = \\sqrt{\\dfrac{gR}{2}} = \\dfrac{7{,}9}{\\sqrt2} \\approx 5{,}6$ км/с; $T = \\dfrac{2\\pi \\cdot 2R}{v} = \\dfrac{8 \\cdot 10^7}{5600} \\approx 1{,}4 \\cdot 10^4$ с $\\approx 4$ ч.

## Упражнения

1. Тело начинает движение из покоя с $a = 2$ м/с². Найдите скорость и путь через $6$ с и путь за одну шестую секунду.
2. Мяч брошен вверх со скоростью $20$ м/с. Найдите максимальную высоту, время возвращения и скорость на высоте $15$ м.
3. Снаряд выпущен со скоростью $40$ м/с под углом $30°$. Найдите дальность, максимальную высоту и время полёта.
4. Лифт массой $500$ кг разгоняется вверх с $2$ м/с². Найдите натяжение троса. Что показывают весы под пассажиром $60$ кг?
5. Грузы $3$ кг и $2$ кг висят через блок без трения. Найдите ускорение и натяжение.
6. Пуля $10$ г со скоростью $400$ м/с застревает в бруске $2$ кг, висящем на нити. На какую высоту поднимется брусок?
7. Автомобиль $1000$ кг поднимается по уклону $5\\%$ с постоянной скоростью $20$ м/с при силе трения $300$ Н. Мощность двигателя?
8. На какой высоте над Землёй $g$ в четыре раза меньше, чем на поверхности?

### Ответы

1. $v = 12$ м/с; $s = 36$ м; $s_6 = 36 - 25 = 11$ м.
2. $h = 20$ м; $t = 4$ с; $v = \\sqrt{400 - 300} = 10$ м/с.
3. $L = 1600 \\cdot 0{,}866/10 \\approx 139$ м; $H = (20)^2/20 = 20$ м; $t = 2 \\cdot 20/10 = 4$ с.
4. $T = m(g + a) = 6000$ Н; весы показывают $60 \\cdot 12 = 720$ Н (кажущийся вес $72$ кг).
5. $a = g\\dfrac{3 - 2}{3 + 2} = 2$ м/с²; $T = 2(g + a) = 24$ Н.
6. $v = \\dfrac{0{,}01 \\cdot 400}{2{,}01} \\approx 2$ м/с; $h = v^2/2g = 0{,}2$ м.
7. $F = mg \\sin\\alpha + F_{\\text{тр}} = 10\\,000 \\cdot 0{,}05 + 300 = 800$ Н; $P = Fv = 16$ кВт.
8. $(R + h)^2 = 4R^2$, $h = R = 6400$ км.`,
      },
      [
        q(t("For uniformly accelerated motion from rest, the distance is…", "Հանգստի վիճակից հավասարաչափ արագացող շարժման ճանապարհն է…", "При равноускоренном движении из покоя путь равен…"), [t("at²/2", "at²/2", "at²/2"), t("at", "at", "at"), t("a²t", "a²t", "a²t")], 0),
        q(t("A body in free fall for 3 s (g = 10 m/s²) covers…", "3 վ ազատ անկման ընթացքում (g = 10 մ/վ²) մարմինն անցնում է…", "Тело за 3 с свободного падения (g = 10 м/с²) проходит…"), [t("45 m", "45 մ", "45 м"), t("30 m", "30 մ", "30 м"), t("90 m", "90 մ", "90 м")], 0),
        q(t("In a perfectly inelastic collision…", "Բացարձակ ոչ առաձգական բախման ժամանակ…", "При абсолютно неупругом ударе…"), [t("momentum is conserved but kinetic energy is not", "իմպուլսը պահպանվում է, կինետիկ էներգիան՝ ոչ", "импульс сохраняется, а кинетическая энергия нет"), t("both momentum and kinetic energy are conserved", "պահպանվում են և՛ իմպուլսը, և՛ կինետիկ էներգիան", "сохраняются и импульс, и кинетическая энергия"), t("neither is conserved", "ոչ մեկը չի պահպանվում", "не сохраняется ни то, ни другое")], 0),
        q(t("The first cosmic velocity for the Earth is about…", "Երկրի համար առաջին տիեզերական արագությունը մոտ … է։", "Первая космическая скорость для Земли около…"), [t("7.9 km/s", "7,9 կմ/վ", "7,9 км/с"), t("11.2 km/s", "11,2 կմ/վ", "11,2 км/с"), t("300 000 km/s", "300 000 կմ/վ", "300 000 км/с")], 0),
        q(t("The power of a force F moving a body at speed v is…", "v արագությամբ մարմին շարժող F ուժի հզորությունն է…", "Мощность силы F, движущей тело со скоростью v, равна…"), [t("Fv", "Fv", "Fv"), t("F/v", "F/v", "F/v"), t("Fv²", "Fv²", "Fv²")], 0),
        q(t("A body is in equilibrium when…", "Մարմինը հավասարակշռության մեջ է, երբ…", "Тело находится в равновесии, когда…"), [t("the sum of forces and the sum of torques are both zero", "ուժերի գումարը և մոմենտների գումարն երկուսն էլ զրո են", "сумма сил и сумма моментов равны нулю"), t("only the sum of forces is zero", "միայն ուժերի գումարն է զրո", "только сумма сил равна нулю"), t("it moves at constant acceleration", "այն շարժվում է հաստատուն արագացումով", "оно движется с постоянным ускорением")], 0),
      ],
    ),
    lesson(
      "review-thermo",
      ["Review: molecular physics and thermodynamics", "Ամփոփում․ մոլեկուլային ֆիզիկա և թերմոդինամիկա", "Повторение: молекулярная физика и термодинамика"],
      {
        en: ["Recall the key formulas of molecular-kinetic theory, the ideal gas, thermodynamics and heat engines in one table", "Choose the right tool: gas laws for a fixed mass, the first law for energy accounting, the heat balance for mixing", "Solve typical exam problems on gases, phase changes, efficiency and humidity"],
        hy: ["Հիշել մոլեկուլային-կինետիկ տեսության, իդեալական գազի, թերմոդինամիկայի և ջերմային մեքենաների հիմնական բանաձևերը մեկ աղյուսակում", "Ընտրել հարմար գործիքը․ գազային օրենքներ հաստատուն զանգվածի համար, առաջին օրենք էներգիայի հաշվառման համար, ջերմային հաշվեկշիռ խառնման համար", "Լուծել գազերի, ֆազային անցումների, ՕԳԳ-ի և խոնավության տիպիկ քննական խնդիրներ"],
        ru: ["Вспомнить ключевые формулы МКТ, идеального газа, термодинамики и тепловых машин в одной таблице", "Выбирать нужный инструмент: газовые законы для постоянной массы, первое начало для учёта энергии, уравнение теплового баланса для смешивания", "Решать типичные экзаменационные задачи на газы, фазовые переходы, КПД и влажность"],
      },
      {
        en: `## Formula sheet

Constants: $k = 1{.}38 \\cdot 10^{-23}$ J/K, $N_A = 6{.}02 \\cdot 10^{23}$ mol⁻¹, $R = 8{.}31$ J/(mol·K), normal pressure $10^5$ Pa, $0$ °C $= 273$ K.

| Topic | Formulas |
|---|---|
| Amount of substance | $\\nu = \\dfrac{m}{M} = \\dfrac{N}{N_A}$ |
| Basic MKT equation | $p = \\dfrac{1}{3} n m_0 \\bar{v^2} = \\dfrac{2}{3} n \\bar E_k$, $\\bar E_k = \\dfrac{3}{2} kT$ |
| Mean square speed | $\\bar v = \\sqrt{\\dfrac{3kT}{m_0}} = \\sqrt{\\dfrac{3RT}{M}}$ |
| Ideal gas law | $pV = \\nu RT = \\dfrac{m}{M} RT$; $p = nkT$ |
| Isoprocesses | $T = \\text{const}$: $pV = \\text{const}$; $p = \\text{const}$: $\\dfrac{V}{T} = \\text{const}$; $V = \\text{const}$: $\\dfrac{p}{T} = \\text{const}$ |
| Internal energy (monatomic) | $U = \\dfrac{3}{2} \\nu RT = \\dfrac{3}{2} pV$ |
| Work of gas | $A = p\\Delta V$ at constant pressure; area under the $p(V)$ graph |
| First law | $Q = \\Delta U + A$ (heat received = change of internal energy + work done by gas) |
| Heat | $Q = cm\\Delta T$; $Q = \\lambda m$ (melting); $Q = Lm$ (vaporization); $Q = qm$ (fuel) |
| Heat engine | $\\eta = \\dfrac{A}{Q_1} = \\dfrac{Q_1 - Q_2}{Q_1}$; Carnot $\\eta_{\\max} = \\dfrac{T_1 - T_2}{T_1}$ |
| Humidity | $\\varphi = \\dfrac{p}{p_{\\text{sat}}} \\cdot 100\\% = \\dfrac{\\rho}{\\rho_{\\text{sat}}} \\cdot 100\\%$ |

## How to solve a thermodynamics problem

> 1. **Identify the system**: a fixed mass of gas, a body being heated, a mixture reaching equilibrium, or a cyclic engine.
> 2. **Fixed mass of gas, two states** → write $\\dfrac{p_1 V_1}{T_1} = \\dfrac{p_2 V_2}{T_2}$ and cancel what stays constant. Temperatures always in kelvin.
> 3. **Energy accounting** → the first law $Q = \\Delta U + A$. For an isochoric process $A = 0$; for an isothermal process $\\Delta U = 0$; for an adiabatic process $Q = 0$.
> 4. **Mixing or phase change** → heat balance: heat given off equals heat absorbed, including $\\lambda m$ and $Lm$ terms.
> 5. **Check** units (J, Pa, m³, K) and sign: a compressed gas has negative work done by it.

## Worked examples

**Example 1 (gas law).** A gas at $27$ °C and $2 \\cdot 10^5$ Pa is heated at constant volume to $127$ °C. Find the pressure.

$T_1 = 300$ K, $T_2 = 400$ K. Isochoric: $\\dfrac{p_1}{T_1} = \\dfrac{p_2}{T_2}$, so $p_2 = 2 \\cdot 10^5 \\cdot \\dfrac{400}{300} \\approx 2{.}67 \\cdot 10^5$ Pa.

**Example 2 (ideal gas equation).** What is the mass of oxygen ($M = 32$ g/mol) in a $40$ L cylinder at $150$ atm and $300$ K?

$m = \\dfrac{pVM}{RT} = \\dfrac{1{.}5 \\cdot 10^7 \\cdot 0{.}04 \\cdot 0{.}032}{8{.}31 \\cdot 300} \\approx 7{.}7$ kg.

**Example 3 (MKT).** Find the mean kinetic energy and the mean square speed of nitrogen molecules ($M = 28$ g/mol) at $300$ K.

$\\bar E_k = \\dfrac{3}{2} kT = 1{.}5 \\cdot 1{.}38 \\cdot 10^{-23} \\cdot 300 \\approx 6{.}2 \\cdot 10^{-21}$ J. $\\bar v = \\sqrt{\\dfrac{3 \\cdot 8{.}31 \\cdot 300}{0{.}028}} \\approx 517$ m/s.

**Example 4 (first law).** A monatomic gas of $2$ mol is heated at constant pressure so that its temperature rises by $100$ K. Find the work done by the gas, the change of internal energy and the heat received.

$A = p\\Delta V = \\nu R \\Delta T = 2 \\cdot 8{.}31 \\cdot 100 = 1662$ J. $\\Delta U = \\dfrac{3}{2} \\nu R \\Delta T = 2493$ J. $Q = \\Delta U + A = 4155$ J: at constant pressure only $60\\%$ of the heat goes into internal energy, the rest into work.

**Example 5 (heat balance).** How much ice at $0$ °C must be added to $2$ kg of water at $60$ °C to cool it to $20$ °C? ($c = 4200$ J/(kg·K), $\\lambda = 3{.}3 \\cdot 10^5$ J/kg.)

Heat given off: $4200 \\cdot 2 \\cdot 40 = 336\\,000$ J. Each kilogram of ice takes $3{.}3 \\cdot 10^5 + 4200 \\cdot 20 = 4{.}14 \\cdot 10^5$ J. So $m = \\dfrac{336\\,000}{414\\,000} \\approx 0{.}81$ kg.

**Example 6 (heat engine).** An engine receives $10$ kJ per cycle from the heater and gives $7$ kJ to the cooler. Find the efficiency and the work per cycle. Could the heater be at $400$ K and the cooler at $300$ K?

$A = 3$ kJ, $\\eta = 30\\%$. Carnot limit $\\dfrac{400 - 300}{400} = 25\\%$. The claimed engine would exceed the Carnot limit, so it is impossible.

**Example 7 (graph work).** A gas expands from $1$ L to $3$ L while its pressure drops linearly from $3 \\cdot 10^5$ Pa to $1 \\cdot 10^5$ Pa. Find the work.

Area of a trapezoid under $p(V)$: $A = \\dfrac{3 + 1}{2} \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 400$ J.

**Example 8 (humidity).** At $20$ °C the saturated vapour pressure is $2{.}33$ kPa. Relative humidity is $60\\%$. Find the partial pressure of vapour and say whether dew forms when the air cools to $12$ °C (saturated pressure $1{.}40$ kPa).

$p = 0{.}6 \\cdot 2{.}33 = 1{.}40$ kPa. At $12$ °C this equals the saturated pressure, so $12$ °C is exactly the dew point: dew starts to form.

### Exercises

1. A gas at $3 \\cdot 10^5$ Pa occupies $6$ L. It is compressed isothermally to $2$ L. Find the new pressure.
2. A balloon of $2$ m³ at $300$ K is heated to $360$ K at constant pressure. Find the new volume.
3. How many molecules are in $1$ cm³ of air at normal conditions ($10^5$ Pa, $273$ K)?
4. Find the density of helium ($M = 4$ g/mol) at $10^5$ Pa and $300$ K.
5. A monatomic gas at constant volume receives $600$ J. Find $\\Delta U$ and $A$.
6. How much heat is needed to turn $0{.}5$ kg of ice at $-10$ °C into steam at $100$ °C? ($c_{\\text{ice}} = 2100$, $c_{\\text{water}} = 4200$ J/(kg·K), $\\lambda = 3{.}3 \\cdot 10^5$, $L = 2{.}3 \\cdot 10^6$ J/kg.)
7. A Carnot engine works between $500$ K and $300$ K and receives $2$ kJ per cycle. Find the work and the heat given to the cooler.
8. Air at $25$ °C has relative humidity $50\\%$ (saturated pressure $3{.}17$ kPa). Find the vapour pressure and the approximate dew point if saturated pressure is $1{.}60$ kPa at $14$ °C.

### Answers

1. $p_2 = 3 \\cdot 10^5 \\cdot 6/2 = 9 \\cdot 10^5$ Pa.
2. $V_2 = 2 \\cdot 360/300 = 2{.}4$ m³.
3. $N = \\dfrac{pV}{kT} = \\dfrac{10^5 \\cdot 10^{-6}}{1{.}38 \\cdot 10^{-23} \\cdot 273} \\approx 2{.}7 \\cdot 10^{19}$.
4. $\\rho = \\dfrac{pM}{RT} = \\dfrac{10^5 \\cdot 0{.}004}{8{.}31 \\cdot 300} \\approx 0{.}16$ kg/m³.
5. $A = 0$, $\\Delta U = 600$ J.
6. $Q = 0{.}5(2100 \\cdot 10 + 3{.}3 \\cdot 10^5 + 4200 \\cdot 100 + 2{.}3 \\cdot 10^6) \\approx 1{.}53 \\cdot 10^6$ J.
7. $\\eta = 40\\%$; $A = 800$ J; $Q_2 = 1200$ J.
8. $p \\approx 1{.}59$ kPa; dew point about $14$ °C.`,
        hy: `## Բանաձևերի թերթիկ

Հաստատուններ․ $k = 1{,}38 \\cdot 10^{-23}$ Ջ/Կ, $N_A = 6{,}02 \\cdot 10^{23}$ մոլ⁻¹, $R = 8{,}31$ Ջ/(մոլ·Կ), նորմալ ճնշում $10^5$ Պա, $0$ °C $= 273$ Կ։

| Թեմա | Բանաձևեր |
|---|---|
| Նյութի քանակ | $\\nu = \\dfrac{m}{M} = \\dfrac{N}{N_A}$ |
| ՄԿՏ հիմնական հավասարում | $p = \\dfrac{1}{3} n m_0 \\bar{v^2} = \\dfrac{2}{3} n \\bar E_k$, $\\bar E_k = \\dfrac{3}{2} kT$ |
| Միջին քառակուսային արագություն | $\\bar v = \\sqrt{\\dfrac{3kT}{m_0}} = \\sqrt{\\dfrac{3RT}{M}}$ |
| Իդեալական գազի օրենք | $pV = \\nu RT = \\dfrac{m}{M} RT$; $p = nkT$ |
| Իզոպրոցեսներ | $T = \\text{const}$․ $pV = \\text{const}$; $p = \\text{const}$․ $\\dfrac{V}{T} = \\text{const}$; $V = \\text{const}$․ $\\dfrac{p}{T} = \\text{const}$ |
| Ներքին էներգիա (միատոմ) | $U = \\dfrac{3}{2} \\nu RT = \\dfrac{3}{2} pV$ |
| Գազի աշխատանք | $A = p\\Delta V$ հաստատուն ճնշման դեպքում; $p(V)$ գրաֆիկի տակի մակերես |
| Առաջին օրենք | $Q = \\Delta U + A$ (ստացված ջերմություն = ներքին էներգիայի փոփոխություն + գազի կատարած աշխատանք) |
| Ջերմաքանակ | $Q = cm\\Delta T$; $Q = \\lambda m$ (հալում); $Q = Lm$ (գոլորշիացում); $Q = qm$ (վառելիք) |
| Ջերմային մեքենա | $\\eta = \\dfrac{A}{Q_1} = \\dfrac{Q_1 - Q_2}{Q_1}$; Կառնո $\\eta_{\\max} = \\dfrac{T_1 - T_2}{T_1}$ |
| Խոնավություն | $\\varphi = \\dfrac{p}{p_{\\text{հ}}} \\cdot 100\\% = \\dfrac{\\rho}{\\rho_{\\text{հ}}} \\cdot 100\\%$ |

## Ինչպես լուծել թերմոդինամիկայի խնդիր

> 1. **Որոշեք համակարգը**․ գազի հաստատուն զանգված, տաքացվող մարմին, հավասարակշռության հասնող խառնուրդ կամ ցիկլային մեքենա։
> 2. **Գազի հաստատուն զանգված, երկու վիճակ** → գրեք $\\dfrac{p_1 V_1}{T_1} = \\dfrac{p_2 V_2}{T_2}$ և կրճատեք այն, ինչ հաստատուն է։ Ջերմաստիճանը միշտ կելվինով։
> 3. **Էներգիայի հաշվառում** → առաջին օրենքը $Q = \\Delta U + A$։ Իզոխոր պրոցեսում $A = 0$, իզոթերմ պրոցեսում $\\Delta U = 0$, ադիաբատ պրոցեսում $Q = 0$։
> 4. **Խառնում կամ ֆազային անցում** → ջերմային հաշվեկշիռ․ տրված ջերմությունը հավասար է կլանվածին՝ ներառյալ $\\lambda m$ և $Lm$ անդամները։
> 5. **Ստուգեք** միավորները (Ջ, Պա, մ³, Կ) և նշանը․ սեղմվող գազի կատարած աշխատանքը բացասական է։

## Լուծված օրինակներ

**Օրինակ 1 (գազային օրենք)։** $27$ °C և $2 \\cdot 10^5$ Պա գազը հաստատուն ծավալով տաքացվում է մինչև $127$ °C։ Գտնել ճնշումը։

$T_1 = 300$ Կ, $T_2 = 400$ Կ։ Իզոխոր․ $\\dfrac{p_1}{T_1} = \\dfrac{p_2}{T_2}$, ուստի $p_2 = 2 \\cdot 10^5 \\cdot \\dfrac{400}{300} \\approx 2{,}67 \\cdot 10^5$ Պա։

**Օրինակ 2 (իդեալական գազի հավասարում)։** Որքա՞ն է թթվածնի ($M = 32$ գ/մոլ) զանգվածը $40$ լ բալոնում $150$ ատմ ճնշման և $300$ Կ ջերմաստիճանի դեպքում։

$m = \\dfrac{pVM}{RT} = \\dfrac{1{,}5 \\cdot 10^7 \\cdot 0{,}04 \\cdot 0{,}032}{8{,}31 \\cdot 300} \\approx 7{,}7$ կգ։

**Օրինակ 3 (ՄԿՏ)։** Գտնել ազոտի մոլեկուլների ($M = 28$ գ/մոլ) միջին կինետիկ էներգիան և միջին քառակուսային արագությունը $300$ Կ-ում։

$\\bar E_k = \\dfrac{3}{2} kT = 1{,}5 \\cdot 1{,}38 \\cdot 10^{-23} \\cdot 300 \\approx 6{,}2 \\cdot 10^{-21}$ Ջ։ $\\bar v = \\sqrt{\\dfrac{3 \\cdot 8{,}31 \\cdot 300}{0{,}028}} \\approx 517$ մ/վ։

**Օրինակ 4 (առաջին օրենք)։** $2$ մոլ միատոմ գազը տաքացվում է հաստատուն ճնշման դեպքում այնպես, որ ջերմաստիճանը բարձրանում է $100$ Կ-ով։ Գտնել գազի կատարած աշխատանքը, ներքին էներգիայի փոփոխությունը և ստացված ջերմությունը։

$A = p\\Delta V = \\nu R \\Delta T = 2 \\cdot 8{,}31 \\cdot 100 = 1662$ Ջ։ $\\Delta U = \\dfrac{3}{2} \\nu R \\Delta T = 2493$ Ջ։ $Q = \\Delta U + A = 4155$ Ջ․ հաստատուն ճնշման դեպքում ջերմության միայն $60\\%$-ն է գնում ներքին էներգիայի, մնացածը՝ աշխատանքի։

**Օրինակ 5 (ջերմային հաշվեկշիռ)։** Որքա՞ն $0$ °C սառույց պետք է ավելացնել $60$ °C $2$ կգ ջրին, որ այն սառչի մինչև $20$ °C։ ($c = 4200$ Ջ/(կգ·Կ), $\\lambda = 3{,}3 \\cdot 10^5$ Ջ/կգ։)

Տրված ջերմություն․ $4200 \\cdot 2 \\cdot 40 = 336\\,000$ Ջ։ Յուրաքանչյուր կիլոգրամ սառույցը վերցնում է $3{,}3 \\cdot 10^5 + 4200 \\cdot 20 = 4{,}14 \\cdot 10^5$ Ջ։ Ուստի $m = \\dfrac{336\\,000}{414\\,000} \\approx 0{,}81$ կգ։

**Օրինակ 6 (ջերմային մեքենա)։** Մեքենան մեկ ցիկլում տաքացուցիչից ստանում է $10$ կՋ և սառնարանին տալիս $7$ կՋ։ Գտնել ՕԳԳ-ն և աշխատանքը մեկ ցիկլում։ Կարո՞ղ է տաքացուցիչը լինել $400$ Կ, իսկ սառնարանը՝ $300$ Կ։

$A = 3$ կՋ, $\\eta = 30\\%$։ Կառնոյի սահմանը $\\dfrac{400 - 300}{400} = 25\\%$։ Նշված մեքենան գերազանցում է Կառնոյի սահմանը, ուստի անհնար է։

**Օրինակ 7 (աշխատանք գրաֆիկով)։** Գազը լայնանում է $1$ լ-ից $3$ լ, իսկ ճնշումը գծայնորեն նվազում է $3 \\cdot 10^5$ Պա-ից $1 \\cdot 10^5$ Պա։ Գտնել աշխատանքը։

$p(V)$ գրաֆիկի տակի սեղանի մակերեսը․ $A = \\dfrac{3 + 1}{2} \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 400$ Ջ։

**Օրինակ 8 (խոնավություն)։** $20$ °C-ում հագեցած գոլորշու ճնշումը $2{,}33$ կՊա է։ Հարաբերական խոնավությունը $60\\%$ է։ Գտնել գոլորշու մասնակի ճնշումը և ասել, թե ցող կառաջանա՞, երբ օդը սառչի մինչև $12$ °C (հագեցած ճնշումը՝ $1{,}40$ կՊա)։

$p = 0{,}6 \\cdot 2{,}33 = 1{,}40$ կՊա։ $12$ °C-ում սա հավասար է հագեցած ճնշմանը, ուստի $12$ °C-ը հենց ցողի կետն է․ ցողը սկսում է առաջանալ։

### Վարժություններ

1. $3 \\cdot 10^5$ Պա գազը զբաղեցնում է $6$ լ։ Այն իզոթերմ սեղմվում է մինչև $2$ լ։ Գտնել նոր ճնշումը։
2. $300$ Կ ջերմաստիճանի $2$ մ³ փուչիկը հաստատուն ճնշման դեպքում տաքացվում է մինչև $360$ Կ։ Գտնել նոր ծավալը։
3. Քանի՞ մոլեկուլ է $1$ սմ³ օդում նորմալ պայմաններում ($10^5$ Պա, $273$ Կ)։
4. Գտնել հելիումի ($M = 4$ գ/մոլ) խտությունը $10^5$ Պա և $300$ Կ դեպքում։
5. Միատոմ գազը հաստատուն ծավալով ստանում է $600$ Ջ։ Գտնել $\\Delta U$-ն և $A$-ն։
6. Որքա՞ն ջերմություն է անհրաժեշտ $-10$ °C $0{,}5$ կգ սառույցը $100$ °C գոլորշու վերածելու համար։ ($c_{\\text{ս}} = 2100$, $c_{\\text{ջ}} = 4200$ Ջ/(կգ·Կ), $\\lambda = 3{,}3 \\cdot 10^5$, $L = 2{,}3 \\cdot 10^6$ Ջ/կգ։)
7. Կառնոյի մեքենան աշխատում է $500$ Կ-ի և $300$ Կ-ի միջև և ցիկլում ստանում $2$ կՋ։ Գտնել աշխատանքը և սառնարանին տրված ջերմությունը։
8. $25$ °C օդի հարաբերական խոնավությունը $50\\%$ է (հագեցած ճնշումը՝ $3{,}17$ կՊա)։ Գտնել գոլորշու ճնշումը և մոտավոր ցողի կետը, եթե $14$ °C-ում հագեցած ճնշումը $1{,}60$ կՊա է։

### Պատասխաններ

1. $p_2 = 3 \\cdot 10^5 \\cdot 6/2 = 9 \\cdot 10^5$ Պա։
2. $V_2 = 2 \\cdot 360/300 = 2{,}4$ մ³։
3. $N = \\dfrac{pV}{kT} = \\dfrac{10^5 \\cdot 10^{-6}}{1{,}38 \\cdot 10^{-23} \\cdot 273} \\approx 2{,}7 \\cdot 10^{19}$։
4. $\\rho = \\dfrac{pM}{RT} = \\dfrac{10^5 \\cdot 0{,}004}{8{,}31 \\cdot 300} \\approx 0{,}16$ կգ/մ³։
5. $A = 0$, $\\Delta U = 600$ Ջ։
6. $Q = 0{,}5(2100 \\cdot 10 + 3{,}3 \\cdot 10^5 + 4200 \\cdot 100 + 2{,}3 \\cdot 10^6) \\approx 1{,}53 \\cdot 10^6$ Ջ։
7. $\\eta = 40\\%$; $A = 800$ Ջ; $Q_2 = 1200$ Ջ։
8. $p \\approx 1{,}59$ կՊա; ցողի կետը մոտ $14$ °C։`,
        ru: `## Лист формул

Постоянные: $k = 1{,}38 \\cdot 10^{-23}$ Дж/К, $N_A = 6{,}02 \\cdot 10^{23}$ моль⁻¹, $R = 8{,}31$ Дж/(моль·К), нормальное давление $10^5$ Па, $0$ °C $= 273$ К.

| Тема | Формулы |
|---|---|
| Количество вещества | $\\nu = \\dfrac{m}{M} = \\dfrac{N}{N_A}$ |
| Основное уравнение МКТ | $p = \\dfrac{1}{3} n m_0 \\bar{v^2} = \\dfrac{2}{3} n \\bar E_k$, $\\bar E_k = \\dfrac{3}{2} kT$ |
| Средняя квадратичная скорость | $\\bar v = \\sqrt{\\dfrac{3kT}{m_0}} = \\sqrt{\\dfrac{3RT}{M}}$ |
| Уравнение состояния | $pV = \\nu RT = \\dfrac{m}{M} RT$; $p = nkT$ |
| Изопроцессы | $T = \\text{const}$: $pV = \\text{const}$; $p = \\text{const}$: $\\dfrac{V}{T} = \\text{const}$; $V = \\text{const}$: $\\dfrac{p}{T} = \\text{const}$ |
| Внутренняя энергия (одноатомный газ) | $U = \\dfrac{3}{2} \\nu RT = \\dfrac{3}{2} pV$ |
| Работа газа | $A = p\\Delta V$ при постоянном давлении; площадь под графиком $p(V)$ |
| Первое начало | $Q = \\Delta U + A$ (полученное тепло = изменение внутренней энергии + работа газа) |
| Теплота | $Q = cm\\Delta T$; $Q = \\lambda m$ (плавление); $Q = Lm$ (парообразование); $Q = qm$ (топливо) |
| Тепловая машина | $\\eta = \\dfrac{A}{Q_1} = \\dfrac{Q_1 - Q_2}{Q_1}$; Карно $\\eta_{\\max} = \\dfrac{T_1 - T_2}{T_1}$ |
| Влажность | $\\varphi = \\dfrac{p}{p_{\\text{н}}} \\cdot 100\\% = \\dfrac{\\rho}{\\rho_{\\text{н}}} \\cdot 100\\%$ |

## Как решать задачу по термодинамике

> 1. **Определите систему**: постоянная масса газа, нагреваемое тело, смесь, приходящая к равновесию, или циклическая машина.
> 2. **Постоянная масса газа, два состояния** → запишите $\\dfrac{p_1 V_1}{T_1} = \\dfrac{p_2 V_2}{T_2}$ и сократите то, что постоянно. Температура всегда в кельвинах.
> 3. **Учёт энергии** → первое начало $Q = \\Delta U + A$. В изохорном процессе $A = 0$, в изотермическом $\\Delta U = 0$, в адиабатном $Q = 0$.
> 4. **Смешивание или фазовый переход** → уравнение теплового баланса: отданное тепло равно полученному, включая члены $\\lambda m$ и $Lm$.
> 5. **Проверьте** единицы (Дж, Па, м³, К) и знак: работа сжимаемого газа отрицательна.

## Разобранные примеры

**Пример 1 (газовый закон).** Газ при $27$ °C и $2 \\cdot 10^5$ Па нагревают при постоянном объёме до $127$ °C. Найдите давление.

$T_1 = 300$ К, $T_2 = 400$ К. Изохорный процесс: $\\dfrac{p_1}{T_1} = \\dfrac{p_2}{T_2}$, откуда $p_2 = 2 \\cdot 10^5 \\cdot \\dfrac{400}{300} \\approx 2{,}67 \\cdot 10^5$ Па.

**Пример 2 (уравнение состояния).** Какова масса кислорода ($M = 32$ г/моль) в баллоне $40$ л при $150$ атм и $300$ К?

$m = \\dfrac{pVM}{RT} = \\dfrac{1{,}5 \\cdot 10^7 \\cdot 0{,}04 \\cdot 0{,}032}{8{,}31 \\cdot 300} \\approx 7{,}7$ кг.

**Пример 3 (МКТ).** Найдите среднюю кинетическую энергию и среднюю квадратичную скорость молекул азота ($M = 28$ г/моль) при $300$ К.

$\\bar E_k = \\dfrac{3}{2} kT = 1{,}5 \\cdot 1{,}38 \\cdot 10^{-23} \\cdot 300 \\approx 6{,}2 \\cdot 10^{-21}$ Дж. $\\bar v = \\sqrt{\\dfrac{3 \\cdot 8{,}31 \\cdot 300}{0{,}028}} \\approx 517$ м/с.

**Пример 4 (первое начало).** Одноатомный газ, $2$ моль, нагревают при постоянном давлении так, что температура растёт на $100$ К. Найдите работу газа, изменение внутренней энергии и полученное тепло.

$A = p\\Delta V = \\nu R \\Delta T = 2 \\cdot 8{,}31 \\cdot 100 = 1662$ Дж. $\\Delta U = \\dfrac{3}{2} \\nu R \\Delta T = 2493$ Дж. $Q = \\Delta U + A = 4155$ Дж: при постоянном давлении лишь $60\\%$ тепла идёт во внутреннюю энергию, остальное — в работу.

**Пример 5 (тепловой баланс).** Сколько льда при $0$ °C надо добавить к $2$ кг воды при $60$ °C, чтобы охладить её до $20$ °C? ($c = 4200$ Дж/(кг·К), $\\lambda = 3{,}3 \\cdot 10^5$ Дж/кг.)

Отданное тепло: $4200 \\cdot 2 \\cdot 40 = 336\\,000$ Дж. Каждый килограмм льда забирает $3{,}3 \\cdot 10^5 + 4200 \\cdot 20 = 4{,}14 \\cdot 10^5$ Дж. Значит $m = \\dfrac{336\\,000}{414\\,000} \\approx 0{,}81$ кг.

**Пример 6 (тепловая машина).** Машина за цикл получает от нагревателя $10$ кДж и отдаёт холодильнику $7$ кДж. Найдите КПД и работу за цикл. Может ли нагреватель иметь $400$ К, а холодильник $300$ К?

$A = 3$ кДж, $\\eta = 30\\%$. Предел Карно $\\dfrac{400 - 300}{400} = 25\\%$. Такая машина превысила бы предел Карно, значит она невозможна.

**Пример 7 (работа по графику).** Газ расширяется от $1$ л до $3$ л, а давление линейно падает от $3 \\cdot 10^5$ Па до $1 \\cdot 10^5$ Па. Найдите работу.

Площадь трапеции под $p(V)$: $A = \\dfrac{3 + 1}{2} \\cdot 10^5 \\cdot 2 \\cdot 10^{-3} = 400$ Дж.

**Пример 8 (влажность).** При $20$ °C давление насыщенного пара $2{,}33$ кПа. Относительная влажность $60\\%$. Найдите парциальное давление пара и выясните, выпадет ли роса при охлаждении воздуха до $12$ °C (давление насыщенного пара $1{,}40$ кПа).

$p = 0{,}6 \\cdot 2{,}33 = 1{,}40$ кПа. При $12$ °C это равно давлению насыщенного пара, значит $12$ °C — точка росы: роса начинает выпадать.

### Упражнения

1. Газ при $3 \\cdot 10^5$ Па занимает $6$ л. Его изотермически сжимают до $2$ л. Найдите новое давление.
2. Шар объёмом $2$ м³ при $300$ К нагревают до $360$ К при постоянном давлении. Найдите новый объём.
3. Сколько молекул в $1$ см³ воздуха при нормальных условиях ($10^5$ Па, $273$ К)?
4. Найдите плотность гелия ($M = 4$ г/моль) при $10^5$ Па и $300$ К.
5. Одноатомный газ при постоянном объёме получает $600$ Дж. Найдите $\\Delta U$ и $A$.
6. Сколько тепла нужно, чтобы $0{,}5$ кг льда при $-10$ °C превратить в пар при $100$ °C? ($c_{\\text{л}} = 2100$, $c_{\\text{в}} = 4200$ Дж/(кг·К), $\\lambda = 3{,}3 \\cdot 10^5$, $L = 2{,}3 \\cdot 10^6$ Дж/кг.)
7. Машина Карно работает между $500$ К и $300$ К и получает за цикл $2$ кДж. Найдите работу и тепло, отданное холодильнику.
8. Воздух при $25$ °C имеет относительную влажность $50\\%$ (давление насыщенного пара $3{,}17$ кПа). Найдите давление пара и примерную точку росы, если при $14$ °C давление насыщенного пара $1{,}60$ кПа.

### Ответы

1. $p_2 = 3 \\cdot 10^5 \\cdot 6/2 = 9 \\cdot 10^5$ Па.
2. $V_2 = 2 \\cdot 360/300 = 2{,}4$ м³.
3. $N = \\dfrac{pV}{kT} = \\dfrac{10^5 \\cdot 10^{-6}}{1{,}38 \\cdot 10^{-23} \\cdot 273} \\approx 2{,}7 \\cdot 10^{19}$.
4. $\\rho = \\dfrac{pM}{RT} = \\dfrac{10^5 \\cdot 0{,}004}{8{,}31 \\cdot 300} \\approx 0{,}16$ кг/м³.
5. $A = 0$, $\\Delta U = 600$ Дж.
6. $Q = 0{,}5(2100 \\cdot 10 + 3{,}3 \\cdot 10^5 + 4200 \\cdot 100 + 2{,}3 \\cdot 10^6) \\approx 1{,}53 \\cdot 10^6$ Дж.
7. $\\eta = 40\\%$; $A = 800$ Дж; $Q_2 = 1200$ Дж.
8. $p \\approx 1{,}59$ кПа; точка росы около $14$ °C.`,
      },
      [
        q(t("The mean kinetic energy of a molecule of an ideal gas is proportional to…", "Իդեալական գազի մոլեկուլի միջին կինետիկ էներգիան համեմատական է…", "Средняя кинетическая энергия молекулы идеального газа пропорциональна…"), [t("the absolute temperature", "բացարձակ ջերմաստիճանին", "абсолютной температуре"), t("the pressure only", "միայն ճնշմանը", "только давлению"), t("the volume", "ծավալին", "объёму")], 0),
        q(t("In an isothermal process of an ideal gas…", "Իդեալական գազի իզոթերմ պրոցեսում…", "В изотермическом процессе идеального газа…"), [t("pV = const", "pV = const", "pV = const"), t("V/T = const", "V/T = const", "V/T = const"), t("p/T = const", "p/T = const", "p/T = const")], 0),
        q(t("In an isochoric process the work done by the gas is…", "Իզոխոր պրոցեսում գազի կատարած աշխատանքը…", "В изохорном процессе работа газа…"), [t("zero", "զրո է", "равна нулю"), t("equal to Q", "հավասար է Q-ին", "равна Q"), t("equal to ΔU", "հավասար է ΔU-ին", "равна ΔU")], 0),
        q(t("The maximum efficiency of a heat engine between 600 K and 300 K is…", "600 Կ-ի և 300 Կ-ի միջև ջերմային մեքենայի առավելագույն ՕԳԳ-ն է…", "Максимальный КПД тепловой машины между 600 К и 300 К равен…"), [t("50%", "50%", "50%"), t("100%", "100%", "100%"), t("25%", "25%", "25%")], 0),
        q(t("During melting at the melting point, the temperature of the substance…", "Հալման կետում հալման ընթացքում նյութի ջերմաստիճանը…", "Во время плавления при температуре плавления температура вещества…"), [t("stays constant", "մնում է հաստատուն", "остаётся постоянной"), t("rises", "բարձրանում է", "растёт"), t("falls", "նվազում է", "падает")], 0),
        q(t("Relative humidity of 100% means…", "100% հարաբերական խոնավությունը նշանակում է…", "Относительная влажность 100% означает…"), [t("the vapour is saturated", "գոլորշին հագեցած է", "пар насыщенный"), t("there is no vapour in the air", "օդում գոլորշի չկա", "в воздухе нет пара"), t("the air is dry", "օդը չոր է", "воздух сухой")], 0),
      ],
    ),
    lesson(
      "review-electrodynamics",
      ["Review: electrodynamics", "Ամփոփում․ էլեկտրադինամիկա", "Повторение: электродинамика"],
      {
        en: ["Recall the key formulas of electrostatics, direct current, magnetism, induction and alternating current in one table", "Choose the right tool: Coulomb and field for charges, Kirchhoff and Ohm for circuits, flux and EMF for induction", "Solve typical exam problems on fields, capacitors, circuits, Lorentz force, induction and transformers"],
        hy: ["Հիշել էլեկտրաստատիկայի, հաստատուն հոսանքի, մագնիսականության, ինդուկցիայի և փոփոխական հոսանքի հիմնական բանաձևերը մեկ աղյուսակում", "Ընտրել հարմար գործիքը․ Կուլոն և դաշտ լիցքերի համար, Օհմ և Կիրխհոֆ շղթաների համար, հոսք և ԷլՇՈւ ինդուկցիայի համար", "Լուծել դաշտերի, կոնդենսատորների, շղթաների, Լորենցի ուժի, ինդուկցիայի և տրանսֆորմատորների տիպիկ քննական խնդիրներ"],
        ru: ["Вспомнить ключевые формулы электростатики, постоянного тока, магнетизма, индукции и переменного тока в одной таблице", "Выбирать нужный инструмент: Кулон и поле для зарядов, Ом и Кирхгоф для цепей, поток и ЭДС для индукции", "Решать типичные экзаменационные задачи на поля, конденсаторы, цепи, силу Лоренца, индукцию и трансформаторы"],
      },
      {
        en: `## Formula sheet

Constants: $k = 9 \\cdot 10^9$ N·m²/C², $e = 1{.}6 \\cdot 10^{-19}$ C, $\\varepsilon_0 = 8{.}85 \\cdot 10^{-12}$ F/m, $\\mu_0 = 4\\pi \\cdot 10^{-7}$ H/m.

| Topic | Formulas |
|---|---|
| Coulomb's law, field | $F = k\\dfrac{\\lvert q_1 q_2\\rvert}{\\varepsilon r^2}$; $E = \\dfrac{F}{q} = k\\dfrac{\\lvert q\\rvert}{r^2}$; uniform field $E = \\dfrac{U}{d}$ |
| Potential, work | $\\varphi = k\\dfrac{q}{r}$; $A = q(\\varphi_1 - \\varphi_2) = qU$ |
| Capacitor | $C = \\dfrac{q}{U} = \\dfrac{\\varepsilon \\varepsilon_0 S}{d}$; $W = \\dfrac{CU^2}{2} = \\dfrac{q^2}{2C}$; parallel $C = \\sum C_i$, series $\\dfrac{1}{C} = \\sum \\dfrac{1}{C_i}$ |
| Current, resistance | $I = \\dfrac{q}{t}$; $R = \\rho\\dfrac{l}{S}$; series $R = \\sum R_i$, parallel $\\dfrac{1}{R} = \\sum \\dfrac{1}{R_i}$ |
| Ohm's law | $I = \\dfrac{U}{R}$; full circuit $I = \\dfrac{\\mathcal{E}}{R + r}$; short-circuit $I = \\dfrac{\\mathcal{E}}{r}$ |
| Work, power, heat | $A = UIt$; $P = UI = I^2 R = \\dfrac{U^2}{R}$; $Q = I^2 R t$ |
| Magnetic field | $F_A = BIl\\sin\\alpha$; $F_L = \\lvert q\\rvert vB\\sin\\alpha$; circle $r = \\dfrac{mv}{\\lvert q\\rvert B}$, $T = \\dfrac{2\\pi m}{\\lvert q\\rvert B}$ |
| Induction | $\\Phi = BS\\cos\\alpha$; $\\mathcal{E}_i = -\\dfrac{\\Delta\\Phi}{\\Delta t}$; moving rod $\\mathcal{E} = Blv$; $\\mathcal{E}_s = -L\\dfrac{\\Delta I}{\\Delta t}$; $W = \\dfrac{LI^2}{2}$ |
| Alternating current | $i = I_m \\sin\\omega t$; $I = \\dfrac{I_m}{\\sqrt 2}$; $X_L = \\omega L$; $X_C = \\dfrac{1}{\\omega C}$; $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$, $T = 2\\pi\\sqrt{LC}$ |
| Transformer | $\\dfrac{U_1}{U_2} = \\dfrac{N_1}{N_2}$; $U_1 I_1 \\approx U_2 I_2$ |

## How to solve an electrodynamics problem

> 1. **Charges at rest** → Coulomb's law and superposition of fields (vectors!), or energy via potential.
> 2. **A circuit** → redraw it, collapse series and parallel groups, apply Ohm's law for the whole circuit, then work back to each element. Power with $P = I^2 R$ when the current is known, $P = U^2/R$ when the voltage is known.
> 3. **A moving charge or a current in a magnetic field** → Lorentz or Ampere force; the Lorentz force does no work and bends the path into a circle.
> 4. **Something changes with time** → induction: compute the flux before and after, divide by the time, then use Ohm's law for the induced current.
> 5. **Check**: signs of charges, that voltages across parallel branches match, and that energy is conserved.

## Worked examples

**Example 1 (Coulomb).** Two charges $+2$ nC and $-2$ nC are $6$ cm apart. Find the field strength at the midpoint.

Each charge gives $E = k\\dfrac{q}{r^2} = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-9}}{(0{.}03)^2} = 2 \\cdot 10^4$ V/m, both pointing from $+$ to $-$, so they add: $E = 4 \\cdot 10^4$ V/m.

**Example 2 (capacitor).** A $4$ µF capacitor charged to $200$ V is connected to an uncharged $2$ µF capacitor. Find the final voltage and the energy lost.

$q = 8 \\cdot 10^{-4}$ C stays the same. $U = \\dfrac{q}{C_1 + C_2} = \\dfrac{8 \\cdot 10^{-4}}{6 \\cdot 10^{-6}} \\approx 133$ V. Energy: before $\\dfrac{4 \\cdot 10^{-6} \\cdot 200^2}{2} = 0{.}08$ J, after $\\dfrac{6 \\cdot 10^{-6} \\cdot 133^2}{2} \\approx 0{.}053$ J. Lost $\\approx 0{.}027$ J (heat and radiation in the wires).

**Example 3 (full circuit).** A battery with $\\mathcal{E} = 12$ V and $r = 1$ Ω feeds two resistors $6$ Ω and $3$ Ω in parallel. Find the current through each resistor and the terminal voltage.

Parallel: $R = \\dfrac{6 \\cdot 3}{9} = 2$ Ω. $I = \\dfrac{12}{2 + 1} = 4$ A. Terminal voltage $U = IR = 8$ V. Currents: $\\dfrac{8}{6} \\approx 1{.}33$ A and $\\dfrac{8}{3} \\approx 2{.}67$ A.

**Example 4 (power).** A heater is marked $220$ V, $1100$ W. Find its resistance and the heat it produces in $10$ minutes if the mains voltage drops to $200$ V.

$R = \\dfrac{U^2}{P} = \\dfrac{220^2}{1100} = 44$ Ω. At $200$ V: $P = \\dfrac{200^2}{44} \\approx 909$ W, $Q = 909 \\cdot 600 \\approx 5{.}5 \\cdot 10^5$ J.

**Example 5 (Lorentz force).** A proton ($m = 1{.}67 \\cdot 10^{-27}$ kg) moves at $2 \\cdot 10^6$ m/s perpendicular to a $0{.}5$ T field. Find the radius and the period.

$r = \\dfrac{mv}{eB} = \\dfrac{1{.}67 \\cdot 10^{-27} \\cdot 2 \\cdot 10^6}{1{.}6 \\cdot 10^{-19} \\cdot 0{.}5} \\approx 4{.}2$ cm. $T = \\dfrac{2\\pi m}{eB} \\approx 1{.}3 \\cdot 10^{-7}$ s, independent of the speed.

**Example 6 (induction).** A coil of $200$ turns and area $50$ cm² is in a field that drops from $0{.}4$ T to zero in $0{.}1$ s, perpendicular to the coil. Find the EMF and the charge that flows if the resistance is $5$ Ω.

$\\mathcal{E} = N\\dfrac{\\Delta\\Phi}{\\Delta t} = 200 \\cdot \\dfrac{0{.}4 \\cdot 5 \\cdot 10^{-3}}{0{.}1} = 4$ V. $I = 0{.}8$ A, $q = It = 0{.}08$ C. (Note $q = \\dfrac{N\\Delta\\Phi}{R}$ does not depend on the time.)

**Example 7 (oscillating circuit).** A circuit has $L = 4$ mH and $C = 1$ µF. Find the period and the maximum current if the capacitor is charged to $10$ V.

$T = 2\\pi\\sqrt{4 \\cdot 10^{-3} \\cdot 10^{-6}} \\approx 4 \\cdot 10^{-4}$ s. Energy: $\\dfrac{CU_m^2}{2} = \\dfrac{LI_m^2}{2}$, so $I_m = U_m\\sqrt{\\dfrac{C}{L}} = 10 \\cdot \\sqrt{\\dfrac{10^{-6}}{4 \\cdot 10^{-3}}} \\approx 0{.}16$ A.

**Example 8 (transformer and line).** A $10$ kW load is fed through a line of resistance $2$ Ω. Compare the losses at $220$ V and at $11$ kV.

At $220$ V: $I = 45{.}5$ A, loss $I^2 R \\approx 4{.}1$ kW (41 %). At $11$ kV: $I = 0{.}91$ A, loss $\\approx 1{.}7$ W. Raising the voltage $50$ times cuts the loss $2500$ times, which is why power lines use high voltage.

### Exercises

1. Two equal charges repel with $0{.}9$ N at $10$ cm. Find the charges.
2. An electron is accelerated from rest through $100$ V. Find its speed ($m_e = 9{.}1 \\cdot 10^{-31}$ kg).
3. A parallel-plate capacitor with $S = 100$ cm² and $d = 1$ mm is filled with glass ($\\varepsilon = 7$). Find $C$.
4. Resistors $2$, $3$ and $6$ Ω are connected in parallel and then in series with $4$ Ω to a $12$ V source. Find the total current and the voltage across the $4$ Ω resistor.
5. A battery of $\\mathcal{E} = 6$ V has short-circuit current $12$ A. Find $r$ and the current through a $2$ Ω load.
6. A straight wire $0{.}5$ m long carries $4$ A at $30°$ to a $0{.}2$ T field. Find the force.
7. A rod of length $0{.}4$ m moves at $5$ m/s perpendicular to a $0{.}3$ T field. Find the EMF and the current if the circuit resistance is $0{.}2$ Ω.
8. A step-down transformer has $N_1 = 2200$, $N_2 = 120$ and primary voltage $220$ V. Find the secondary voltage and the primary current when the secondary current is $5$ A (ideal transformer).

### Answers

1. $q = r\\sqrt{F/k} = 0{.}1 \\cdot \\sqrt{0{.}9 / (9 \\cdot 10^9)} = 10^{-6}$ C.
2. $v = \\sqrt{2eU/m} \\approx 5{.}9 \\cdot 10^6$ m/s.
3. $C = \\dfrac{7 \\cdot 8{.}85 \\cdot 10^{-12} \\cdot 10^{-2}}{10^{-3}} \\approx 6{.}2 \\cdot 10^{-10}$ F $= 0{.}62$ nF.
4. Parallel group $1$ Ω; $R = 5$ Ω; $I = 2{.}4$ A; $U_4 = 9{.}6$ V.
5. $r = 0{.}5$ Ω; $I = 6/2{.}5 = 2{.}4$ A.
6. $F = 0{.}2 \\cdot 4 \\cdot 0{.}5 \\cdot 0{.}5 = 0{.}2$ N.
7. $\\mathcal{E} = 0{.}3 \\cdot 0{.}4 \\cdot 5 = 0{.}6$ V; $I = 3$ A.
8. $U_2 = 12$ V; $I_1 = 5 \\cdot 12/220 \\approx 0{.}27$ A.`,
        hy: `## Բանաձևերի թերթիկ

Հաստատուններ․ $k = 9 \\cdot 10^9$ Ն·մ²/Կլ², $e = 1{,}6 \\cdot 10^{-19}$ Կլ, $\\varepsilon_0 = 8{,}85 \\cdot 10^{-12}$ Ֆ/մ, $\\mu_0 = 4\\pi \\cdot 10^{-7}$ Հն/մ։

| Թեմա | Բանաձևեր |
|---|---|
| Կուլոնի օրենք, դաշտ | $F = k\\dfrac{\\lvert q_1 q_2\\rvert}{\\varepsilon r^2}$; $E = \\dfrac{F}{q} = k\\dfrac{\\lvert q\\rvert}{r^2}$; համասեռ դաշտ $E = \\dfrac{U}{d}$ |
| Պոտենցիալ, աշխատանք | $\\varphi = k\\dfrac{q}{r}$; $A = q(\\varphi_1 - \\varphi_2) = qU$ |
| Կոնդենսատոր | $C = \\dfrac{q}{U} = \\dfrac{\\varepsilon \\varepsilon_0 S}{d}$; $W = \\dfrac{CU^2}{2} = \\dfrac{q^2}{2C}$; զուգահեռ $C = \\sum C_i$, հաջորդական $\\dfrac{1}{C} = \\sum \\dfrac{1}{C_i}$ |
| Հոսանք, դիմադրություն | $I = \\dfrac{q}{t}$; $R = \\rho\\dfrac{l}{S}$; հաջորդական $R = \\sum R_i$, զուգահեռ $\\dfrac{1}{R} = \\sum \\dfrac{1}{R_i}$ |
| Օհմի օրենք | $I = \\dfrac{U}{R}$; լրիվ շղթա $I = \\dfrac{\\mathcal{E}}{R + r}$; կարճ միացում $I = \\dfrac{\\mathcal{E}}{r}$ |
| Աշխատանք, հզորություն, ջերմություն | $A = UIt$; $P = UI = I^2 R = \\dfrac{U^2}{R}$; $Q = I^2 R t$ |
| Մագնիսական դաշտ | $F_A = BIl\\sin\\alpha$; $F_L = \\lvert q\\rvert vB\\sin\\alpha$; շրջանագիծ $r = \\dfrac{mv}{\\lvert q\\rvert B}$, $T = \\dfrac{2\\pi m}{\\lvert q\\rvert B}$ |
| Ինդուկցիա | $\\Phi = BS\\cos\\alpha$; $\\mathcal{E}_i = -\\dfrac{\\Delta\\Phi}{\\Delta t}$; շարժվող հաղորդիչ $\\mathcal{E} = Blv$; $\\mathcal{E}_s = -L\\dfrac{\\Delta I}{\\Delta t}$; $W = \\dfrac{LI^2}{2}$ |
| Փոփոխական հոսանք | $i = I_m \\sin\\omega t$; $I = \\dfrac{I_m}{\\sqrt 2}$; $X_L = \\omega L$; $X_C = \\dfrac{1}{\\omega C}$; $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$, $T = 2\\pi\\sqrt{LC}$ |
| Տրանսֆորմատոր | $\\dfrac{U_1}{U_2} = \\dfrac{N_1}{N_2}$; $U_1 I_1 \\approx U_2 I_2$ |

## Ինչպես լուծել էլեկտրադինամիկայի խնդիր

> 1. **Անշարժ լիցքեր** → Կուլոնի օրենք և դաշտերի վերադրում (վեկտորներ), կամ էներգիա պոտենցիալի միջոցով։
> 2. **Շղթա** → վերագծեք այն, միավորեք հաջորդական և զուգահեռ խմբերը, կիրառեք Օհմի օրենքը լրիվ շղթայի համար, ապա վերադարձեք յուրաքանչյուր տարրին։ Հզորություն՝ $P = I^2 R$, երբ հոսանքը հայտնի է, $P = U^2/R$, երբ լարումն է հայտնի։
> 3. **Շարժվող լիցք կամ հոսանք մագնիսական դաշտում** → Լորենցի կամ Ամպերի ուժ․ Լորենցի ուժն աշխատանք չի կատարում և հետագիծը շրջանագծի է վերածում։
> 4. **Ինչ-որ բան փոխվում է ժամանակի մեջ** → ինդուկցիա․ հաշվեք հոսքը նախքան և հետո, բաժանեք ժամանակի վրա, ապա կիրառեք Օհմի օրենքն ինդուկցիոն հոսանքի համար։
> 5. **Ստուգեք**․ լիցքերի նշանները, որ զուգահեռ ճյուղերի լարումները համընկնում են, և որ էներգիան պահպանվում է։

## Լուծված օրինակներ

**Օրինակ 1 (Կուլոն)։** $+2$ նԿլ և $-2$ նԿլ լիցքերը միմյանցից $6$ սմ հեռավորության վրա են։ Գտնել դաշտի լարվածությունը միջնակետում։

Յուրաքանչյուր լիցք տալիս է $E = k\\dfrac{q}{r^2} = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-9}}{(0{,}03)^2} = 2 \\cdot 10^4$ Վ/մ, երկուսն էլ ուղղված են $+$-ից $-$, ուստի գումարվում են․ $E = 4 \\cdot 10^4$ Վ/մ։

**Օրինակ 2 (կոնդենսատոր)։** $200$ Վ-ով լիցքավորված $4$ մկՖ կոնդենսատորը միացվում է չլիցքավորված $2$ մկՖ կոնդենսատորին։ Գտնել վերջնական լարումը և կորսված էներգիան։

$q = 8 \\cdot 10^{-4}$ Կլ-ը մնում է անփոփոխ։ $U = \\dfrac{q}{C_1 + C_2} = \\dfrac{8 \\cdot 10^{-4}}{6 \\cdot 10^{-6}} \\approx 133$ Վ։ Էներգիա․ նախքան՝ $\\dfrac{4 \\cdot 10^{-6} \\cdot 200^2}{2} = 0{,}08$ Ջ, հետո՝ $\\dfrac{6 \\cdot 10^{-6} \\cdot 133^2}{2} \\approx 0{,}053$ Ջ։ Կորուստ՝ $\\approx 0{,}027$ Ջ (ջերմություն և ճառագայթում հաղորդալարերում)։

**Օրինակ 3 (լրիվ շղթա)։** $\\mathcal{E} = 12$ Վ և $r = 1$ Օմ մարտկոցը սնում է զուգահեռ միացված $6$ Օմ և $3$ Օմ դիմադրությունները։ Գտնել հոսանքը յուրաքանչյուր դիմադրությունում և սեղմակների լարումը։

Զուգահեռ․ $R = \\dfrac{6 \\cdot 3}{9} = 2$ Օմ։ $I = \\dfrac{12}{2 + 1} = 4$ Ա։ Սեղմակների լարումը $U = IR = 8$ Վ։ Հոսանքներ․ $\\dfrac{8}{6} \\approx 1{,}33$ Ա և $\\dfrac{8}{3} \\approx 2{,}67$ Ա։

**Օրինակ 4 (հզորություն)։** Տաքացուցիչի վրա նշված է $220$ Վ, $1100$ Վտ։ Գտնել դիմադրությունը և $10$ րոպեում արտադրված ջերմությունը, եթե ցանցի լարումն իջնում է $200$ Վ։

$R = \\dfrac{U^2}{P} = \\dfrac{220^2}{1100} = 44$ Օմ։ $200$ Վ-ում․ $P = \\dfrac{200^2}{44} \\approx 909$ Վտ, $Q = 909 \\cdot 600 \\approx 5{,}5 \\cdot 10^5$ Ջ։

**Օրինակ 5 (Լորենցի ուժ)։** Պրոտոնը ($m = 1{,}67 \\cdot 10^{-27}$ կգ) շարժվում է $2 \\cdot 10^6$ մ/վ արագությամբ $0{,}5$ Տ դաշտին ուղղահայաց։ Գտնել շառավիղը և պարբերությունը։

$r = \\dfrac{mv}{eB} = \\dfrac{1{,}67 \\cdot 10^{-27} \\cdot 2 \\cdot 10^6}{1{,}6 \\cdot 10^{-19} \\cdot 0{,}5} \\approx 4{,}2$ սմ։ $T = \\dfrac{2\\pi m}{eB} \\approx 1{,}3 \\cdot 10^{-7}$ վ, արագությունից անկախ։

**Օրինակ 6 (ինդուկցիա)։** $200$ գալար և $50$ սմ² մակերես ունեցող կոճը գտնվում է դաշտում, որը $0{,}1$ վ-ում $0{,}4$ Տ-ից նվազում է մինչև զրո և ուղղահայաց է կոճին։ Գտնել ԷլՇՈւ-ն և անցած լիցքը, եթե դիմադրությունը $5$ Օմ է։

$\\mathcal{E} = N\\dfrac{\\Delta\\Phi}{\\Delta t} = 200 \\cdot \\dfrac{0{,}4 \\cdot 5 \\cdot 10^{-3}}{0{,}1} = 4$ Վ։ $I = 0{,}8$ Ա, $q = It = 0{,}08$ Կլ։ (Նկատեք, որ $q = \\dfrac{N\\Delta\\Phi}{R}$ ժամանակից կախված չէ։)

**Օրինակ 7 (տատանողական կոնտուր)։** Կոնտուրում $L = 4$ մՀն և $C = 1$ մկՖ։ Գտնել պարբերությունը և առավելագույն հոսանքը, եթե կոնդենսատորը լիցքավորված է $10$ Վ-ով։

$T = 2\\pi\\sqrt{4 \\cdot 10^{-3} \\cdot 10^{-6}} \\approx 4 \\cdot 10^{-4}$ վ։ Էներգիա․ $\\dfrac{CU_m^2}{2} = \\dfrac{LI_m^2}{2}$, ուստի $I_m = U_m\\sqrt{\\dfrac{C}{L}} = 10 \\cdot \\sqrt{\\dfrac{10^{-6}}{4 \\cdot 10^{-3}}} \\approx 0{,}16$ Ա։

**Օրինակ 8 (տրանսֆորմատոր և գիծ)։** $10$ կՎտ բեռը սնվում է $2$ Օմ դիմադրությամբ գծով։ Համեմատել կորուստները $220$ Վ-ի և $11$ կՎ-ի դեպքում։

$220$ Վ-ում․ $I = 45{,}5$ Ա, կորուստ $I^2 R \\approx 4{,}1$ կՎտ (41 %)։ $11$ կՎ-ում․ $I = 0{,}91$ Ա, կորուստ $\\approx 1{,}7$ Վտ։ Լարումը $50$ անգամ բարձրացնելը կորուստը փոքրացնում է $2500$ անգամ․ այդ պատճառով էլեկտրահաղորդման գծերը բարձր լարում են օգտագործում։

### Վարժություններ

1. Երկու հավասար լիցքեր $10$ սմ-ի վրա վանում են միմյանց $0{,}9$ Ն ուժով։ Գտնել լիցքերը։
2. Էլեկտրոնը հանգստից արագանում է $100$ Վ լարման միջով։ Գտնել արագությունը ($m_e = 9{,}1 \\cdot 10^{-31}$ կգ)։
3. $S = 100$ սմ² և $d = 1$ մմ հարթ կոնդենսատորը լցված է ապակով ($\\varepsilon = 7$)։ Գտնել $C$-ն։
4. $2$, $3$ և $6$ Օմ դիմադրությունները միացված են զուգահեռ, ապա հաջորդաբար $4$ Օմ-ի հետ $12$ Վ աղբյուրին։ Գտնել ընդհանուր հոսանքը և $4$ Օմ դիմադրության լարումը։
5. $\\mathcal{E} = 6$ Վ մարտկոցի կարճ միացման հոսանքը $12$ Ա է։ Գտնել $r$-ը և հոսանքը $2$ Օմ բեռի միջով։
6. $0{,}5$ մ երկարության ուղիղ հաղորդալարով անցնում է $4$ Ա հոսանք $0{,}2$ Տ դաշտի նկատմամբ $30°$ անկյան տակ։ Գտնել ուժը։
7. $0{,}4$ մ երկարության հաղորդիչը շարժվում է $5$ մ/վ արագությամբ $0{,}3$ Տ դաշտին ուղղահայաց։ Գտնել ԷլՇՈւ-ն և հոսանքը, եթե շղթայի դիմադրությունը $0{,}2$ Օմ է։
8. Իջեցնող տրանսֆորմատորի $N_1 = 2200$, $N_2 = 120$, առաջնային լարումը $220$ Վ։ Գտնել երկրորդային լարումը և առաջնային հոսանքը, եթե երկրորդային հոսանքը $5$ Ա է (իդեալական տրանսֆորմատոր)։

### Պատասխաններ

1. $q = r\\sqrt{F/k} = 0{,}1 \\cdot \\sqrt{0{,}9 / (9 \\cdot 10^9)} = 10^{-6}$ Կլ։
2. $v = \\sqrt{2eU/m} \\approx 5{,}9 \\cdot 10^6$ մ/վ։
3. $C = \\dfrac{7 \\cdot 8{,}85 \\cdot 10^{-12} \\cdot 10^{-2}}{10^{-3}} \\approx 6{,}2 \\cdot 10^{-10}$ Ֆ $= 0{,}62$ նՖ։
4. Զուգահեռ խումբը $1$ Օմ; $R = 5$ Օմ; $I = 2{,}4$ Ա; $U_4 = 9{,}6$ Վ։
5. $r = 0{,}5$ Օմ; $I = 6/2{,}5 = 2{,}4$ Ա։
6. $F = 0{,}2 \\cdot 4 \\cdot 0{,}5 \\cdot 0{,}5 = 0{,}2$ Ն։
7. $\\mathcal{E} = 0{,}3 \\cdot 0{,}4 \\cdot 5 = 0{,}6$ Վ; $I = 3$ Ա։
8. $U_2 = 12$ Վ; $I_1 = 5 \\cdot 12/220 \\approx 0{,}27$ Ա։`,
        ru: `## Лист формул

Постоянные: $k = 9 \\cdot 10^9$ Н·м²/Кл², $e = 1{,}6 \\cdot 10^{-19}$ Кл, $\\varepsilon_0 = 8{,}85 \\cdot 10^{-12}$ Ф/м, $\\mu_0 = 4\\pi \\cdot 10^{-7}$ Гн/м.

| Тема | Формулы |
|---|---|
| Закон Кулона, поле | $F = k\\dfrac{\\lvert q_1 q_2\\rvert}{\\varepsilon r^2}$; $E = \\dfrac{F}{q} = k\\dfrac{\\lvert q\\rvert}{r^2}$; однородное поле $E = \\dfrac{U}{d}$ |
| Потенциал, работа | $\\varphi = k\\dfrac{q}{r}$; $A = q(\\varphi_1 - \\varphi_2) = qU$ |
| Конденсатор | $C = \\dfrac{q}{U} = \\dfrac{\\varepsilon \\varepsilon_0 S}{d}$; $W = \\dfrac{CU^2}{2} = \\dfrac{q^2}{2C}$; параллельно $C = \\sum C_i$, последовательно $\\dfrac{1}{C} = \\sum \\dfrac{1}{C_i}$ |
| Ток, сопротивление | $I = \\dfrac{q}{t}$; $R = \\rho\\dfrac{l}{S}$; последовательно $R = \\sum R_i$, параллельно $\\dfrac{1}{R} = \\sum \\dfrac{1}{R_i}$ |
| Закон Ома | $I = \\dfrac{U}{R}$; полная цепь $I = \\dfrac{\\mathcal{E}}{R + r}$; короткое замыкание $I = \\dfrac{\\mathcal{E}}{r}$ |
| Работа, мощность, тепло | $A = UIt$; $P = UI = I^2 R = \\dfrac{U^2}{R}$; $Q = I^2 R t$ |
| Магнитное поле | $F_A = BIl\\sin\\alpha$; $F_L = \\lvert q\\rvert vB\\sin\\alpha$; окружность $r = \\dfrac{mv}{\\lvert q\\rvert B}$, $T = \\dfrac{2\\pi m}{\\lvert q\\rvert B}$ |
| Индукция | $\\Phi = BS\\cos\\alpha$; $\\mathcal{E}_i = -\\dfrac{\\Delta\\Phi}{\\Delta t}$; движущийся проводник $\\mathcal{E} = Blv$; $\\mathcal{E}_s = -L\\dfrac{\\Delta I}{\\Delta t}$; $W = \\dfrac{LI^2}{2}$ |
| Переменный ток | $i = I_m \\sin\\omega t$; $I = \\dfrac{I_m}{\\sqrt 2}$; $X_L = \\omega L$; $X_C = \\dfrac{1}{\\omega C}$; $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$, $T = 2\\pi\\sqrt{LC}$ |
| Трансформатор | $\\dfrac{U_1}{U_2} = \\dfrac{N_1}{N_2}$; $U_1 I_1 \\approx U_2 I_2$ |

## Как решать задачу по электродинамике

> 1. **Покоящиеся заряды** → закон Кулона и суперпозиция полей (векторы!), либо энергия через потенциал.
> 2. **Цепь** → перерисуйте её, сверните последовательные и параллельные группы, примените закон Ома для полной цепи, затем вернитесь к каждому элементу. Мощность: $P = I^2 R$, когда известен ток, $P = U^2/R$, когда известно напряжение.
> 3. **Движущийся заряд или ток в магнитном поле** → сила Лоренца или Ампера; сила Лоренца не совершает работы и искривляет траекторию в окружность.
> 4. **Что-то меняется со временем** → индукция: вычислите поток до и после, разделите на время, затем примените закон Ома для индукционного тока.
> 5. **Проверьте**: знаки зарядов, совпадение напряжений на параллельных ветвях и сохранение энергии.

## Разобранные примеры

**Пример 1 (Кулон).** Заряды $+2$ нКл и $-2$ нКл находятся на расстоянии $6$ см. Найдите напряжённость поля в середине.

Каждый заряд даёт $E = k\\dfrac{q}{r^2} = 9 \\cdot 10^9 \\cdot \\dfrac{2 \\cdot 10^{-9}}{(0{,}03)^2} = 2 \\cdot 10^4$ В/м, оба направлены от $+$ к $-$, поэтому складываются: $E = 4 \\cdot 10^4$ В/м.

**Пример 2 (конденсатор).** Конденсатор $4$ мкФ, заряженный до $200$ В, соединяют с незаряженным конденсатором $2$ мкФ. Найдите конечное напряжение и потерянную энергию.

$q = 8 \\cdot 10^{-4}$ Кл сохраняется. $U = \\dfrac{q}{C_1 + C_2} = \\dfrac{8 \\cdot 10^{-4}}{6 \\cdot 10^{-6}} \\approx 133$ В. Энергия: до $\\dfrac{4 \\cdot 10^{-6} \\cdot 200^2}{2} = 0{,}08$ Дж, после $\\dfrac{6 \\cdot 10^{-6} \\cdot 133^2}{2} \\approx 0{,}053$ Дж. Потеряно $\\approx 0{,}027$ Дж (тепло и излучение в проводах).

**Пример 3 (полная цепь).** Батарея с $\\mathcal{E} = 12$ В и $r = 1$ Ом питает параллельно соединённые резисторы $6$ Ом и $3$ Ом. Найдите ток через каждый резистор и напряжение на зажимах.

Параллельно: $R = \\dfrac{6 \\cdot 3}{9} = 2$ Ом. $I = \\dfrac{12}{2 + 1} = 4$ А. Напряжение на зажимах $U = IR = 8$ В. Токи: $\\dfrac{8}{6} \\approx 1{,}33$ А и $\\dfrac{8}{3} \\approx 2{,}67$ А.

**Пример 4 (мощность).** На нагревателе написано $220$ В, $1100$ Вт. Найдите его сопротивление и тепло за $10$ минут, если напряжение сети упало до $200$ В.

$R = \\dfrac{U^2}{P} = \\dfrac{220^2}{1100} = 44$ Ом. При $200$ В: $P = \\dfrac{200^2}{44} \\approx 909$ Вт, $Q = 909 \\cdot 600 \\approx 5{,}5 \\cdot 10^5$ Дж.

**Пример 5 (сила Лоренца).** Протон ($m = 1{,}67 \\cdot 10^{-27}$ кг) движется со скоростью $2 \\cdot 10^6$ м/с перпендикулярно полю $0{,}5$ Тл. Найдите радиус и период.

$r = \\dfrac{mv}{eB} = \\dfrac{1{,}67 \\cdot 10^{-27} \\cdot 2 \\cdot 10^6}{1{,}6 \\cdot 10^{-19} \\cdot 0{,}5} \\approx 4{,}2$ см. $T = \\dfrac{2\\pi m}{eB} \\approx 1{,}3 \\cdot 10^{-7}$ с, независимо от скорости.

**Пример 6 (индукция).** Катушка из $200$ витков площадью $50$ см² находится в поле, которое за $0{,}1$ с падает от $0{,}4$ Тл до нуля, перпендикулярно катушке. Найдите ЭДС и заряд, прошедший при сопротивлении $5$ Ом.

$\\mathcal{E} = N\\dfrac{\\Delta\\Phi}{\\Delta t} = 200 \\cdot \\dfrac{0{,}4 \\cdot 5 \\cdot 10^{-3}}{0{,}1} = 4$ В. $I = 0{,}8$ А, $q = It = 0{,}08$ Кл. (Заметьте: $q = \\dfrac{N\\Delta\\Phi}{R}$ не зависит от времени.)

**Пример 7 (колебательный контур).** В контуре $L = 4$ мГн и $C = 1$ мкФ. Найдите период и максимальный ток, если конденсатор заряжен до $10$ В.

$T = 2\\pi\\sqrt{4 \\cdot 10^{-3} \\cdot 10^{-6}} \\approx 4 \\cdot 10^{-4}$ с. Энергия: $\\dfrac{CU_m^2}{2} = \\dfrac{LI_m^2}{2}$, откуда $I_m = U_m\\sqrt{\\dfrac{C}{L}} = 10 \\cdot \\sqrt{\\dfrac{10^{-6}}{4 \\cdot 10^{-3}}} \\approx 0{,}16$ А.

**Пример 8 (трансформатор и линия).** Нагрузка $10$ кВт питается по линии сопротивлением $2$ Ом. Сравните потери при $220$ В и при $11$ кВ.

При $220$ В: $I = 45{,}5$ А, потери $I^2 R \\approx 4{,}1$ кВт (41 %). При $11$ кВ: $I = 0{,}91$ А, потери $\\approx 1{,}7$ Вт. Повышение напряжения в $50$ раз снижает потери в $2500$ раз, поэтому линии электропередачи работают на высоком напряжении.

### Упражнения

1. Два равных заряда на расстоянии $10$ см отталкиваются с силой $0{,}9$ Н. Найдите заряды.
2. Электрон разгоняется из покоя напряжением $100$ В. Найдите его скорость ($m_e = 9{,}1 \\cdot 10^{-31}$ кг).
3. Плоский конденсатор с $S = 100$ см² и $d = 1$ мм заполнен стеклом ($\\varepsilon = 7$). Найдите $C$.
4. Резисторы $2$, $3$ и $6$ Ом соединены параллельно, а затем последовательно с $4$ Ом к источнику $12$ В. Найдите общий ток и напряжение на резисторе $4$ Ом.
5. Батарея с $\\mathcal{E} = 6$ В имеет ток короткого замыкания $12$ А. Найдите $r$ и ток через нагрузку $2$ Ом.
6. Прямой провод длиной $0{,}5$ м с током $4$ А расположен под углом $30°$ к полю $0{,}2$ Тл. Найдите силу.
7. Проводник длиной $0{,}4$ м движется со скоростью $5$ м/с перпендикулярно полю $0{,}3$ Тл. Найдите ЭДС и ток, если сопротивление цепи $0{,}2$ Ом.
8. Понижающий трансформатор имеет $N_1 = 2200$, $N_2 = 120$ и первичное напряжение $220$ В. Найдите вторичное напряжение и первичный ток, если вторичный ток $5$ А (идеальный трансформатор).

### Ответы

1. $q = r\\sqrt{F/k} = 0{,}1 \\cdot \\sqrt{0{,}9 / (9 \\cdot 10^9)} = 10^{-6}$ Кл.
2. $v = \\sqrt{2eU/m} \\approx 5{,}9 \\cdot 10^6$ м/с.
3. $C = \\dfrac{7 \\cdot 8{,}85 \\cdot 10^{-12} \\cdot 10^{-2}}{10^{-3}} \\approx 6{,}2 \\cdot 10^{-10}$ Ф $= 0{,}62$ нФ.
4. Параллельная группа $1$ Ом; $R = 5$ Ом; $I = 2{,}4$ А; $U_4 = 9{,}6$ В.
5. $r = 0{,}5$ Ом; $I = 6/2{,}5 = 2{,}4$ А.
6. $F = 0{,}2 \\cdot 4 \\cdot 0{,}5 \\cdot 0{,}5 = 0{,}2$ Н.
7. $\\mathcal{E} = 0{,}3 \\cdot 0{,}4 \\cdot 5 = 0{,}6$ В; $I = 3$ А.
8. $U_2 = 12$ В; $I_1 = 5 \\cdot 12/220 \\approx 0{,}27$ А.`,
      },
      [
        q(t("Doubling the distance between two point charges changes the Coulomb force by a factor of…", "Երկու կետային լիցքերի հեռավորությունը կրկնապատկելիս Կուլոնի ուժը փոխվում է … անգամ։", "При удвоении расстояния между двумя точечными зарядами сила Кулона изменяется в … раз."), [t("1/4", "1/4", "1/4"), t("1/2", "1/2", "1/2"), t("2", "2", "2")], 0),
        q(t("For resistors in parallel, the total resistance is…", "Զուգահեռ միացված դիմադրությունների ընդհանուր դիմադրությունը…", "Общее сопротивление параллельно соединённых резисторов…"), [t("smaller than the smallest of them", "փոքր է ամենափոքրից", "меньше наименьшего из них"), t("the sum of all", "բոլորի գումարն է", "равно сумме всех"), t("the largest of them", "ամենամեծն է", "равно наибольшему из них")], 0),
        q(t("The Lorentz force on a charge moving along the field lines is…", "Դաշտի գծերի երկայնքով շարժվող լիցքի վրա Լորենցի ուժը…", "Сила Лоренца на заряд, движущийся вдоль линий поля, …"), [t("zero", "զրո է", "равна нулю"), t("maximal", "առավելագույն է", "максимальна"), t("equal to qvB", "հավասար է qvB-ին", "равна qvB")], 0),
        q(t("The induced EMF in a loop is proportional to…", "Կոնտուրում ինդուկցիայի ԷլՇՈւ-ն համեմատական է…", "ЭДС индукции в контуре пропорциональна…"), [t("the rate of change of magnetic flux", "մագնիսական հոսքի փոփոխման արագությանը", "скорости изменения магнитного потока"), t("the magnetic flux itself", "մագնիսական հոսքին", "самому магнитному потоку"), t("the area of the loop only", "միայն կոնտուրի մակերեսին", "только площади контура")], 0),
        q(t("The effective value of an alternating current with amplitude 10 A is about…", "10 Ա ամպլիտուդով փոփոխական հոսանքի գործող արժեքը մոտ … է։", "Действующее значение переменного тока с амплитудой 10 А около…"), [t("7.1 A", "7,1 Ա", "7,1 А"), t("10 A", "10 Ա", "10 А"), t("14.1 A", "14,1 Ա", "14,1 А")], 0),
        q(t("A step-up transformer…", "Բարձրացնող տրանսֆորմատորը…", "Повышающий трансформатор…"), [t("raises the voltage and lowers the current", "բարձրացնում է լարումը և փոքրացնում հոսանքը", "повышает напряжение и понижает ток"), t("raises both voltage and current", "բարձրացնում է և՛ լարումը, և՛ հոսանքը", "повышает и напряжение, и ток"), t("works with direct current", "աշխատում է հաստատուն հոսանքով", "работает на постоянном токе")], 0),
      ],
    ),
    lesson(
      "review-optics-quantum",
      ["Review: optics and quantum physics", "Ամփոփում․ օպտիկա և քվանտային ֆիզիկա", "Повторение: оптика и квантовая физика"],
      {
        en: ["Recall the key formulas of geometric optics, wave optics, photons, the Bohr atom and nuclear physics in one table", "Choose the right tool: ray construction for lenses and mirrors, path difference for interference, energy balance for photons", "Solve typical exam problems on refraction, lenses, diffraction gratings, the photoeffect, spectra and radioactive decay"],
        hy: ["Հիշել երկրաչափական օպտիկայի, ալիքային օպտիկայի, ֆոտոնների, Բորի ատոմի և միջուկային ֆիզիկայի հիմնական բանաձևերը մեկ աղյուսակում", "Ընտրել հարմար գործիքը․ ճառագայթների կառուցում ոսպնյակների և հայելիների համար, ընթացքի տարբերություն ինտերֆերենցի համար, էներգիայի հաշվեկշիռ ֆոտոնների համար", "Լուծել բեկման, ոսպնյակների, դիֆրակցիոն ցանցի, ֆոտոէֆեկտի, սպեկտրների և ռադիոակտիվ տրոհման տիպիկ քննական խնդիրներ"],
        ru: ["Вспомнить ключевые формулы геометрической оптики, волновой оптики, фотонов, атома Бора и ядерной физики в одной таблице", "Выбирать нужный инструмент: построение лучей для линз и зеркал, разность хода для интерференции, баланс энергии для фотонов", "Решать типичные экзаменационные задачи на преломление, линзы, дифракционную решётку, фотоэффект, спектры и радиоактивный распад"],
      },
      {
        en: `## Formula sheet

Constants: $c = 3 \\cdot 10^8$ m/s, $h = 6{.}63 \\cdot 10^{-34}$ J·s, $1$ eV $= 1{.}6 \\cdot 10^{-19}$ J, $hc \\approx 1240$ eV·nm.

| Topic | Formulas |
|---|---|
| Reflection, refraction | angle of incidence = angle of reflection; $\\dfrac{\\sin\\alpha}{\\sin\\beta} = \\dfrac{n_2}{n_1} = \\dfrac{v_1}{v_2}$; total reflection $\\sin\\alpha_0 = \\dfrac{1}{n}$ |
| Thin lens | $\\dfrac{1}{d} + \\dfrac{1}{f} = \\dfrac{1}{F}$; $D = \\dfrac{1}{F}$ (dioptres); magnification $\\Gamma = \\dfrac{f}{d} = \\dfrac{H}{h}$ |
| Wave | $v = \\lambda\\nu$; in a medium $\\lambda = \\dfrac{\\lambda_0}{n}$ |
| Interference | maxima $\\Delta = k\\lambda$, minima $\\Delta = (2k + 1)\\dfrac{\\lambda}{2}$ |
| Diffraction grating | $d\\sin\\varphi = k\\lambda$; $d = \\dfrac{1}{N}$ (lines per unit length) |
| Photon | $E = h\\nu = \\dfrac{hc}{\\lambda}$; $p = \\dfrac{h}{\\lambda} = \\dfrac{E}{c}$ |
| Photoeffect | $h\\nu = A + \\dfrac{mv_{\\max}^2}{2}$; red limit $\\nu_{\\min} = \\dfrac{A}{h}$; stopping voltage $eU_s = \\dfrac{mv_{\\max}^2}{2}$ |
| Bohr atom | $h\\nu = E_n - E_m$; hydrogen $E_n = -\\dfrac{13{.}6}{n^2}$ eV; $r_n = n^2 r_1$, $r_1 = 0{.}053$ nm |
| De Broglie | $\\lambda = \\dfrac{h}{mv}$ |
| Nucleus | $\\Delta m = Zm_p + Nm_n - M$; $E_b = \\Delta m c^2 = \\Delta m \\cdot 931{.}5$ MeV (with $\\Delta m$ in u) |
| Decay | $N = N_0 \\cdot 2^{-t/T}$; $A = \\lambda N = \\dfrac{\\ln 2}{T} N$ |
| Relativity | $E = mc^2$; $E_k = (\\gamma - 1)mc^2$; $\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}}$ |

## How to solve an optics or quantum problem

> 1. **Rays** → draw the principal rays through the lens or mirror, then confirm with the lens formula; a real image has $f > 0$, a virtual one $f < 0$.
> 2. **Waves** → identify the path difference or the grating condition; count maxima with $k \\le \\dfrac{d}{\\lambda}$.
> 3. **Photons** → write the energy balance; convert everything to eV with $hc = 1240$ eV·nm.
> 4. **Nuclei** → balance charge and mass numbers in the reaction, then compute the mass defect or use the half-life rule.
> 5. **Check**: the sign of the image distance, that $\\sin\\varphi \\le 1$, and that energies in eV are of the right order ($1$–$10$ eV for atoms, MeV for nuclei).

## Worked examples

**Example 1 (refraction).** A ray enters water ($n = 1{.}33$) from air at $45°$. Find the angle of refraction and the critical angle for the reverse direction.

$\\sin\\beta = \\dfrac{\\sin 45°}{1{.}33} = 0{.}53$, $\\beta \\approx 32°$. Critical angle: $\\sin\\alpha_0 = \\dfrac{1}{1{.}33} = 0{.}75$, $\\alpha_0 \\approx 49°$.

**Example 2 (lens).** An object $4$ cm tall stands $30$ cm from a converging lens with $F = 20$ cm. Find the image position, size and type.

$\\dfrac{1}{f} = \\dfrac{1}{20} - \\dfrac{1}{30} = \\dfrac{1}{60}$, $f = 60$ cm. $\\Gamma = \\dfrac{60}{30} = 2$, so $H = 8$ cm. The image is real, inverted and enlarged.

**Example 3 (grating).** A grating has $500$ lines per mm. Light of $600$ nm falls normally. Find the angle of the second maximum and the highest observable order.

$d = 2 \\cdot 10^{-6}$ m. $\\sin\\varphi_2 = \\dfrac{2 \\cdot 6 \\cdot 10^{-7}}{2 \\cdot 10^{-6}} = 0{.}6$, $\\varphi_2 \\approx 37°$. $k_{\\max} \\le \\dfrac{d}{\\lambda} = 3{.}3$, so $k_{\\max} = 3$.

**Example 4 (photon energy).** Find the energy and momentum of a photon of wavelength $500$ nm. How many such photons per second does a $1$ mW laser emit?

$E = \\dfrac{1240}{500} = 2{.}48$ eV $\\approx 4 \\cdot 10^{-19}$ J. $p = \\dfrac{E}{c} \\approx 1{.}3 \\cdot 10^{-27}$ kg·m/s. $N = \\dfrac{10^{-3}}{4 \\cdot 10^{-19}} = 2{.}5 \\cdot 10^{15}$ per second.

**Example 5 (photoeffect).** The work function of caesium is $1{.}9$ eV. Light of $400$ nm falls on it. Find the maximum kinetic energy of the electrons, the stopping voltage and the red limit.

Photon energy $\\dfrac{1240}{400} = 3{.}1$ eV. $E_k = 3{.}1 - 1{.}9 = 1{.}2$ eV, so $U_s = 1{.}2$ V. Red limit $\\lambda_{\\max} = \\dfrac{1240}{1{.}9} \\approx 650$ nm.

**Example 6 (Bohr).** A hydrogen atom jumps from $n = 3$ to $n = 2$. Find the energy and wavelength of the photon.

$E = 13{.}6\\left(\\dfrac{1}{4} - \\dfrac{1}{9}\\right) = 1{.}89$ eV. $\\lambda = \\dfrac{1240}{1{.}89} \\approx 656$ nm, the red line of the Balmer series.

**Example 7 (binding energy).** Find the binding energy of \${}^{4}_{2}\\text{He}$ ($m_p = 1{.}00728$ u, $m_n = 1{.}00866$ u, $M = 4{.}00151$ u).

$\\Delta m = 2 \\cdot 1{.}00728 + 2 \\cdot 1{.}00866 - 4{.}00151 = 0{.}03037$ u. $E_b = 0{.}03037 \\cdot 931{.}5 \\approx 28{.}3$ MeV, about $7{.}1$ MeV per nucleon.

**Example 8 (decay).** Iodine-131 has a half-life of $8$ days. A sample of $64$ mg is stored for $32$ days. How much iodine-131 remains, and by what factor does the activity fall?

$32/8 = 4$ half-lives. $m = 64 \\cdot 2^{-4} = 4$ mg. Activity falls $16$ times, since $A \\propto N$.

### Exercises

1. Light passes from glass ($n = 1{.}5$) into air at $30°$. Find the refraction angle. Is total reflection possible at $45°$?
2. A diverging lens has $D = -4$ dioptres. An object is $50$ cm away. Find the image position and magnification.
3. In a two-slit experiment with $\\lambda = 500$ nm the path difference at a point is $1{.}25$ µm. Maximum or minimum?
4. A grating with $d = 4$ µm gives the first maximum of some light at $8{.}6°$. Find the wavelength.
5. Find the wavelength of an X-ray photon of energy $12{.}4$ keV.
6. Zinc has work function $4{.}2$ eV. Will light of $350$ nm cause photoemission? What about $250$ nm, and with what maximum energy?
7. Find the wavelength of the photon emitted when hydrogen jumps from $n = 2$ to $n = 1$.
8. The activity of a sample falls to one eighth in $45$ minutes. Find the half-life. What fraction remains after $2$ hours?

### Answers

1. $\\sin\\beta = 1{.}5 \\cdot 0{.}5 = 0{.}75$, $\\beta \\approx 49°$. At $45°$: $1{.}5 \\sin 45° = 1{.}06 > 1$, total reflection.
2. $F = -25$ cm; $\\dfrac{1}{f} = -\\dfrac{1}{25} - \\dfrac{1}{50} = -\\dfrac{3}{50}$, $f \\approx -16{.}7$ cm (virtual); $\\Gamma = \\dfrac{1}{3}$.
3. $\\Delta/\\lambda = 2{.}5$, a half-integer: minimum.
4. $\\lambda = 4 \\cdot 10^{-6} \\cdot \\sin 8{.}6° \\approx 6 \\cdot 10^{-7}$ m $= 600$ nm.
5. $\\lambda = \\dfrac{1240}{12\\,400} = 0{.}1$ nm.
6. $350$ nm: $3{.}54$ eV $< 4{.}2$ eV, no emission. $250$ nm: $4{.}96$ eV, $E_k = 0{.}76$ eV.
7. $E = 13{.}6 \\cdot \\dfrac{3}{4} = 10{.}2$ eV; $\\lambda \\approx 122$ nm (ultraviolet).
8. $1/8 = 2^{-3}$, so $T = 15$ min. After $120$ min ($8$ half-lives): $2^{-8} = \\dfrac{1}{256}$.`,
        hy: `## Բանաձևերի թերթիկ

Հաստատուններ․ $c = 3 \\cdot 10^8$ մ/վ, $h = 6{,}63 \\cdot 10^{-34}$ Ջ·վ, $1$ էՎ $= 1{,}6 \\cdot 10^{-19}$ Ջ, $hc \\approx 1240$ էՎ·նմ։

| Թեմա | Բանաձևեր |
|---|---|
| Անդրադարձում, բեկում | անկման անկյուն = անդրադարձման անկյուն; $\\dfrac{\\sin\\alpha}{\\sin\\beta} = \\dfrac{n_2}{n_1} = \\dfrac{v_1}{v_2}$; լրիվ անդրադարձում $\\sin\\alpha_0 = \\dfrac{1}{n}$ |
| Բարակ ոսպնյակ | $\\dfrac{1}{d} + \\dfrac{1}{f} = \\dfrac{1}{F}$; $D = \\dfrac{1}{F}$ (դիոպտրիա); խոշորացում $\\Gamma = \\dfrac{f}{d} = \\dfrac{H}{h}$ |
| Ալիք | $v = \\lambda\\nu$; միջավայրում $\\lambda = \\dfrac{\\lambda_0}{n}$ |
| Ինտերֆերենց | մաքսիմումներ $\\Delta = k\\lambda$, մինիմումներ $\\Delta = (2k + 1)\\dfrac{\\lambda}{2}$ |
| Դիֆրակցիոն ցանց | $d\\sin\\varphi = k\\lambda$; $d = \\dfrac{1}{N}$ (շտրիխներ երկարության միավորում) |
| Ֆոտոն | $E = h\\nu = \\dfrac{hc}{\\lambda}$; $p = \\dfrac{h}{\\lambda} = \\dfrac{E}{c}$ |
| Ֆոտոէֆեկտ | $h\\nu = A + \\dfrac{mv_{\\max}^2}{2}$; կարմիր սահման $\\nu_{\\min} = \\dfrac{A}{h}$; փակող լարում $eU_s = \\dfrac{mv_{\\max}^2}{2}$ |
| Բորի ատոմ | $h\\nu = E_n - E_m$; ջրածին $E_n = -\\dfrac{13{,}6}{n^2}$ էՎ; $r_n = n^2 r_1$, $r_1 = 0{,}053$ նմ |
| Դը Բրոյլ | $\\lambda = \\dfrac{h}{mv}$ |
| Միջուկ | $\\Delta m = Zm_p + Nm_n - M$; $E_{\\text{կ}} = \\Delta m c^2 = \\Delta m \\cdot 931{,}5$ ՄէՎ (որտեղ $\\Delta m$-ն զ․ա․մ․-ով է) |
| Տրոհում | $N = N_0 \\cdot 2^{-t/T}$; $A = \\lambda N = \\dfrac{\\ln 2}{T} N$ |
| Հարաբերականություն | $E = mc^2$; $E_k = (\\gamma - 1)mc^2$; $\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}}$ |

## Ինչպես լուծել օպտիկայի կամ քվանտային խնդիր

> 1. **Ճառագայթներ** → կառուցեք գլխավոր ճառագայթները ոսպնյակի կամ հայելու միջով, ապա ստուգեք ոսպնյակի բանաձևով․ իրական պատկերի դեպքում $f > 0$, կեղծի դեպքում՝ $f < 0$։
> 2. **Ալիքներ** → որոշեք ընթացքի տարբերությունը կամ ցանցի պայմանը, մաքսիմումները հաշվեք $k \\le \\dfrac{d}{\\lambda}$ պայմանով։
> 3. **Ֆոտոններ** → գրեք էներգիայի հաշվեկշիռը, ամեն ինչ արտահայտեք էՎ-ով $hc = 1240$ էՎ·նմ օգնությամբ։
> 4. **Միջուկներ** → ռեակցիայում հավասարեցրեք լիցքի և զանգվածի թվերը, ապա հաշվեք զանգվածի պակասորդը կամ կիրառեք կիսատրոհման կանոնը։
> 5. **Ստուգեք**․ պատկերի հեռավորության նշանը, որ $\\sin\\varphi \\le 1$, և որ էՎ-ով էներգիաները ճիշտ կարգի են ($1$–$10$ էՎ ատոմների, ՄէՎ միջուկների համար)։

## Լուծված օրինակներ

**Օրինակ 1 (բեկում)։** Ճառագայթն օդից անցնում է ջուր ($n = 1{,}33$) $45°$ անկյան տակ։ Գտնել բեկման անկյունը և հակառակ ուղղության սահմանային անկյունը։

$\\sin\\beta = \\dfrac{\\sin 45°}{1{,}33} = 0{,}53$, $\\beta \\approx 32°$։ Սահմանային անկյուն․ $\\sin\\alpha_0 = \\dfrac{1}{1{,}33} = 0{,}75$, $\\alpha_0 \\approx 49°$։

**Օրինակ 2 (ոսպնյակ)։** $4$ սմ բարձրության առարկան գտնվում է $F = 20$ սմ հավաքող ոսպնյակից $30$ սմ-ի վրա։ Գտնել պատկերի դիրքը, չափը և տեսակը։

$\\dfrac{1}{f} = \\dfrac{1}{20} - \\dfrac{1}{30} = \\dfrac{1}{60}$, $f = 60$ սմ։ $\\Gamma = \\dfrac{60}{30} = 2$, ուստի $H = 8$ սմ։ Պատկերն իրական է, շրջված և խոշորացված։

**Օրինակ 3 (ցանց)։** Ցանցն ունի $500$ շտրիխ մեկ մմ-ում։ $600$ նմ լույսն ընկնում է ուղղահայաց։ Գտնել երկրորդ մաքսիմումի անկյունը և դիտվող ամենաբարձր կարգը։

$d = 2 \\cdot 10^{-6}$ մ։ $\\sin\\varphi_2 = \\dfrac{2 \\cdot 6 \\cdot 10^{-7}}{2 \\cdot 10^{-6}} = 0{,}6$, $\\varphi_2 \\approx 37°$։ $k_{\\max} \\le \\dfrac{d}{\\lambda} = 3{,}3$, ուստի $k_{\\max} = 3$։

**Օրինակ 4 (ֆոտոնի էներգիա)։** Գտնել $500$ նմ ալիքի երկարության ֆոտոնի էներգիան և իմպուլսը։ Քանի՞ այդպիսի ֆոտոն է վայրկյանում արձակում $1$ մՎտ լազերը։

$E = \\dfrac{1240}{500} = 2{,}48$ էՎ $\\approx 4 \\cdot 10^{-19}$ Ջ։ $p = \\dfrac{E}{c} \\approx 1{,}3 \\cdot 10^{-27}$ կգ·մ/վ։ $N = \\dfrac{10^{-3}}{4 \\cdot 10^{-19}} = 2{,}5 \\cdot 10^{15}$ վայրկյանում։

**Օրինակ 5 (ֆոտոէֆեկտ)։** Ցեզիումի ելքի աշխատանքը $1{,}9$ էՎ է։ Նրա վրա ընկնում է $400$ նմ լույս։ Գտնել էլեկտրոնների առավելագույն կինետիկ էներգիան, փակող լարումը և կարմիր սահմանը։

Ֆոտոնի էներգիան $\\dfrac{1240}{400} = 3{,}1$ էՎ։ $E_k = 3{,}1 - 1{,}9 = 1{,}2$ էՎ, ուստի $U_s = 1{,}2$ Վ։ Կարմիր սահմանը $\\lambda_{\\max} = \\dfrac{1240}{1{,}9} \\approx 650$ նմ։

**Օրինակ 6 (Բոր)։** Ջրածնի ատոմն անցնում է $n = 3$-ից $n = 2$։ Գտնել ֆոտոնի էներգիան և ալիքի երկարությունը։

$E = 13{,}6\\left(\\dfrac{1}{4} - \\dfrac{1}{9}\\right) = 1{,}89$ էՎ։ $\\lambda = \\dfrac{1240}{1{,}89} \\approx 656$ նմ՝ Բալմերի սերիայի կարմիր գիծը։

**Օրինակ 7 (կապի էներգիա)։** Գտնել \${}^{4}_{2}\\text{He}$-ի կապի էներգիան ($m_p = 1{,}00728$, $m_n = 1{,}00866$, $M = 4{,}00151$ զ․ա․մ․)։

$\\Delta m = 2 \\cdot 1{,}00728 + 2 \\cdot 1{,}00866 - 4{,}00151 = 0{,}03037$ զ․ա․մ․։ $E_{\\text{կ}} = 0{,}03037 \\cdot 931{,}5 \\approx 28{,}3$ ՄէՎ, մոտ $7{,}1$ ՄէՎ մեկ նուկլոնին։

**Օրինակ 8 (տրոհում)։** Յոդ-131-ի կիսատրոհման պարբերությունը $8$ օր է։ $64$ մգ նմուշը պահվում է $32$ օր։ Որքա՞ն յոդ-131 է մնում և քանի՞ անգամ է նվազում ակտիվությունը։

$32/8 = 4$ կիսատրոհման պարբերություն։ $m = 64 \\cdot 2^{-4} = 4$ մգ։ Ակտիվությունը նվազում է $16$ անգամ, քանի որ $A \\propto N$։

### Վարժություններ

1. Լույսն ապակուից ($n = 1{,}5$) անցնում է օդ $30°$ անկյան տակ։ Գտնել բեկման անկյունը։ Հնարավո՞ր է լրիվ անդրադարձում $45°$-ի դեպքում։
2. Ցրող ոսպնյակի $D = -4$ դիոպտրիա։ Առարկան $50$ սմ հեռու է։ Գտնել պատկերի դիրքը և խոշորացումը։
3. Երկու ճեղքով փորձում $\\lambda = 500$ նմ, իսկ ընթացքի տարբերությունը որևէ կետում $1{,}25$ մկմ է։ Մաքսիմու՞մ է, թե՞ մինիմում։
4. $d = 4$ մկմ ցանցը որոշ լույսի առաջին մաքսիմումը տալիս է $8{,}6°$-ում։ Գտնել ալիքի երկարությունը։
5. Գտնել $12{,}4$ կէՎ էներգիայի ռենտգենյան ֆոտոնի ալիքի երկարությունը։
6. Ցինկի ելքի աշխատանքը $4{,}2$ էՎ է։ $350$ նմ լույսը ֆոտոէֆեկտ կառաջացնի՞։ Իսկ $250$ նմ-ը, և ի՞նչ առավելագույն էներգիայով։
7. Գտնել ֆոտոնի ալիքի երկարությունը, որն արձակվում է ջրածնի $n = 2$-ից $n = 1$ անցման ժամանակ։
8. Նմուշի ակտիվությունը $45$ րոպեում նվազում է ութ անգամ։ Գտնել կիսատրոհման պարբերությունը։ Ի՞նչ մաս է մնում $2$ ժամ հետո։

### Պատասխաններ

1. $\\sin\\beta = 1{,}5 \\cdot 0{,}5 = 0{,}75$, $\\beta \\approx 49°$։ $45°$-ի դեպքում․ $1{,}5 \\sin 45° = 1{,}06 > 1$, լրիվ անդրադարձում։
2. $F = -25$ սմ; $\\dfrac{1}{f} = -\\dfrac{1}{25} - \\dfrac{1}{50} = -\\dfrac{3}{50}$, $f \\approx -16{,}7$ սմ (կեղծ); $\\Gamma = \\dfrac{1}{3}$։
3. $\\Delta/\\lambda = 2{,}5$՝ կես-ամբողջ թիվ․ մինիմում։
4. $\\lambda = 4 \\cdot 10^{-6} \\cdot \\sin 8{,}6° \\approx 6 \\cdot 10^{-7}$ մ $= 600$ նմ։
5. $\\lambda = \\dfrac{1240}{12\\,400} = 0{,}1$ նմ։
6. $350$ նմ․ $3{,}54$ էՎ $< 4{,}2$ էՎ, ֆոտոէֆեկտ չկա։ $250$ նմ․ $4{,}96$ էՎ, $E_k = 0{,}76$ էՎ։
7. $E = 13{,}6 \\cdot \\dfrac{3}{4} = 10{,}2$ էՎ; $\\lambda \\approx 122$ նմ (ուլտրամանուշակագույն)։
8. $1/8 = 2^{-3}$, ուստի $T = 15$ ր։ $120$ ր հետո ($8$ պարբերություն)․ $2^{-8} = \\dfrac{1}{256}$։`,
        ru: `## Лист формул

Постоянные: $c = 3 \\cdot 10^8$ м/с, $h = 6{,}63 \\cdot 10^{-34}$ Дж·с, $1$ эВ $= 1{,}6 \\cdot 10^{-19}$ Дж, $hc \\approx 1240$ эВ·нм.

| Тема | Формулы |
|---|---|
| Отражение, преломление | угол падения = угол отражения; $\\dfrac{\\sin\\alpha}{\\sin\\beta} = \\dfrac{n_2}{n_1} = \\dfrac{v_1}{v_2}$; полное отражение $\\sin\\alpha_0 = \\dfrac{1}{n}$ |
| Тонкая линза | $\\dfrac{1}{d} + \\dfrac{1}{f} = \\dfrac{1}{F}$; $D = \\dfrac{1}{F}$ (дптр); увеличение $\\Gamma = \\dfrac{f}{d} = \\dfrac{H}{h}$ |
| Волна | $v = \\lambda\\nu$; в среде $\\lambda = \\dfrac{\\lambda_0}{n}$ |
| Интерференция | максимумы $\\Delta = k\\lambda$, минимумы $\\Delta = (2k + 1)\\dfrac{\\lambda}{2}$ |
| Дифракционная решётка | $d\\sin\\varphi = k\\lambda$; $d = \\dfrac{1}{N}$ (штрихов на единицу длины) |
| Фотон | $E = h\\nu = \\dfrac{hc}{\\lambda}$; $p = \\dfrac{h}{\\lambda} = \\dfrac{E}{c}$ |
| Фотоэффект | $h\\nu = A + \\dfrac{mv_{\\max}^2}{2}$; красная граница $\\nu_{\\min} = \\dfrac{A}{h}$; задерживающее напряжение $eU_s = \\dfrac{mv_{\\max}^2}{2}$ |
| Атом Бора | $h\\nu = E_n - E_m$; водород $E_n = -\\dfrac{13{,}6}{n^2}$ эВ; $r_n = n^2 r_1$, $r_1 = 0{,}053$ нм |
| Де Бройль | $\\lambda = \\dfrac{h}{mv}$ |
| Ядро | $\\Delta m = Zm_p + Nm_n - M$; $E_{\\text{св}} = \\Delta m c^2 = \\Delta m \\cdot 931{,}5$ МэВ ($\\Delta m$ в а.е.м.) |
| Распад | $N = N_0 \\cdot 2^{-t/T}$; $A = \\lambda N = \\dfrac{\\ln 2}{T} N$ |
| Относительность | $E = mc^2$; $E_k = (\\gamma - 1)mc^2$; $\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}}$ |

## Как решать задачу по оптике или квантовой физике

> 1. **Лучи** → постройте главные лучи через линзу или зеркало, затем проверьте формулой линзы; для действительного изображения $f > 0$, для мнимого $f < 0$.
> 2. **Волны** → найдите разность хода или условие решётки; максимумы считайте по $k \\le \\dfrac{d}{\\lambda}$.
> 3. **Фотоны** → запишите баланс энергии; всё переводите в эВ через $hc = 1240$ эВ·нм.
> 4. **Ядра** → уравняйте зарядовые и массовые числа в реакции, затем вычислите дефект массы или примените правило периода полураспада.
> 5. **Проверьте**: знак расстояния до изображения, что $\\sin\\varphi \\le 1$, и что энергии в эВ правильного порядка ($1$–$10$ эВ для атомов, МэВ для ядер).

## Разобранные примеры

**Пример 1 (преломление).** Луч входит из воздуха в воду ($n = 1{,}33$) под углом $45°$. Найдите угол преломления и предельный угол для обратного направления.

$\\sin\\beta = \\dfrac{\\sin 45°}{1{,}33} = 0{,}53$, $\\beta \\approx 32°$. Предельный угол: $\\sin\\alpha_0 = \\dfrac{1}{1{,}33} = 0{,}75$, $\\alpha_0 \\approx 49°$.

**Пример 2 (линза).** Предмет высотой $4$ см стоит в $30$ см от собирающей линзы с $F = 20$ см. Найдите положение, размер и тип изображения.

$\\dfrac{1}{f} = \\dfrac{1}{20} - \\dfrac{1}{30} = \\dfrac{1}{60}$, $f = 60$ см. $\\Gamma = \\dfrac{60}{30} = 2$, значит $H = 8$ см. Изображение действительное, перевёрнутое, увеличенное.

**Пример 3 (решётка).** Решётка имеет $500$ штрихов на мм. Свет $600$ нм падает нормально. Найдите угол второго максимума и наибольший наблюдаемый порядок.

$d = 2 \\cdot 10^{-6}$ м. $\\sin\\varphi_2 = \\dfrac{2 \\cdot 6 \\cdot 10^{-7}}{2 \\cdot 10^{-6}} = 0{,}6$, $\\varphi_2 \\approx 37°$. $k_{\\max} \\le \\dfrac{d}{\\lambda} = 3{,}3$, значит $k_{\\max} = 3$.

**Пример 4 (энергия фотона).** Найдите энергию и импульс фотона с длиной волны $500$ нм. Сколько таких фотонов в секунду излучает лазер мощностью $1$ мВт?

$E = \\dfrac{1240}{500} = 2{,}48$ эВ $\\approx 4 \\cdot 10^{-19}$ Дж. $p = \\dfrac{E}{c} \\approx 1{,}3 \\cdot 10^{-27}$ кг·м/с. $N = \\dfrac{10^{-3}}{4 \\cdot 10^{-19}} = 2{,}5 \\cdot 10^{15}$ в секунду.

**Пример 5 (фотоэффект).** Работа выхода цезия $1{,}9$ эВ. На него падает свет $400$ нм. Найдите максимальную кинетическую энергию электронов, задерживающее напряжение и красную границу.

Энергия фотона $\\dfrac{1240}{400} = 3{,}1$ эВ. $E_k = 3{,}1 - 1{,}9 = 1{,}2$ эВ, значит $U_s = 1{,}2$ В. Красная граница $\\lambda_{\\max} = \\dfrac{1240}{1{,}9} \\approx 650$ нм.

**Пример 6 (Бор).** Атом водорода переходит с $n = 3$ на $n = 2$. Найдите энергию и длину волны фотона.

$E = 13{,}6\\left(\\dfrac{1}{4} - \\dfrac{1}{9}\\right) = 1{,}89$ эВ. $\\lambda = \\dfrac{1240}{1{,}89} \\approx 656$ нм — красная линия серии Бальмера.

**Пример 7 (энергия связи).** Найдите энергию связи \${}^{4}_{2}\\text{He}$ ($m_p = 1{,}00728$ а.е.м., $m_n = 1{,}00866$ а.е.м., $M = 4{,}00151$ а.е.м.).

$\\Delta m = 2 \\cdot 1{,}00728 + 2 \\cdot 1{,}00866 - 4{,}00151 = 0{,}03037$ а.е.м. $E_{\\text{св}} = 0{,}03037 \\cdot 931{,}5 \\approx 28{,}3$ МэВ, около $7{,}1$ МэВ на нуклон.

**Пример 8 (распад).** Период полураспада йода-131 равен $8$ суткам. Образец $64$ мг хранят $32$ суток. Сколько йода-131 останется и во сколько раз упадёт активность?

$32/8 = 4$ периода. $m = 64 \\cdot 2^{-4} = 4$ мг. Активность падает в $16$ раз, так как $A \\propto N$.

### Упражнения

1. Свет переходит из стекла ($n = 1{,}5$) в воздух под углом $30°$. Найдите угол преломления. Возможно ли полное отражение при $45°$?
2. Рассеивающая линза имеет $D = -4$ дптр. Предмет в $50$ см. Найдите положение изображения и увеличение.
3. В опыте с двумя щелями $\\lambda = 500$ нм, разность хода в точке $1{,}25$ мкм. Максимум или минимум?
4. Решётка с $d = 4$ мкм даёт первый максимум некоторого света под углом $8{,}6°$. Найдите длину волны.
5. Найдите длину волны рентгеновского фотона с энергией $12{,}4$ кэВ.
6. Работа выхода цинка $4{,}2$ эВ. Вызовет ли свет $350$ нм фотоэффект? А $250$ нм, и с какой максимальной энергией?
7. Найдите длину волны фотона, излучаемого при переходе водорода с $n = 2$ на $n = 1$.
8. Активность образца за $45$ минут падает в восемь раз. Найдите период полураспада. Какая доля останется через $2$ часа?

### Ответы

1. $\\sin\\beta = 1{,}5 \\cdot 0{,}5 = 0{,}75$, $\\beta \\approx 49°$. При $45°$: $1{,}5 \\sin 45° = 1{,}06 > 1$, полное отражение.
2. $F = -25$ см; $\\dfrac{1}{f} = -\\dfrac{1}{25} - \\dfrac{1}{50} = -\\dfrac{3}{50}$, $f \\approx -16{,}7$ см (мнимое); $\\Gamma = \\dfrac{1}{3}$.
3. $\\Delta/\\lambda = 2{,}5$ — полуцелое: минимум.
4. $\\lambda = 4 \\cdot 10^{-6} \\cdot \\sin 8{,}6° \\approx 6 \\cdot 10^{-7}$ м $= 600$ нм.
5. $\\lambda = \\dfrac{1240}{12\\,400} = 0{,}1$ нм.
6. $350$ нм: $3{,}54$ эВ $< 4{,}2$ эВ, эмиссии нет. $250$ нм: $4{,}96$ эВ, $E_k = 0{,}76$ эВ.
7. $E = 13{,}6 \\cdot \\dfrac{3}{4} = 10{,}2$ эВ; $\\lambda \\approx 122$ нм (ультрафиолет).
8. $1/8 = 2^{-3}$, значит $T = 15$ мин. Через $120$ мин ($8$ периодов): $2^{-8} = \\dfrac{1}{256}$.`,
      },
      [
        q(t("When light passes from air into glass, its speed…", "Օդից ապակի անցնելիս լույսի արագությունը…", "При переходе света из воздуха в стекло его скорость…"), [t("decreases", "նվազում է", "уменьшается"), t("increases", "մեծանում է", "увеличивается"), t("does not change", "չի փոխվում", "не меняется")], 0),
        q(t("A converging lens gives a real enlarged image when the object is…", "Հավաքող ոսպնյակն իրական խոշորացված պատկեր է տալիս, երբ առարկան…", "Собирающая линза даёт действительное увеличенное изображение, когда предмет…"), [t("between F and 2F", "F-ի և 2F-ի միջև է", "между F и 2F"), t("beyond 2F", "2F-ից հեռու է", "дальше 2F"), t("closer than F", "F-ից մոտ է", "ближе F")], 0),
        q(t("The condition for a maximum of a diffraction grating is…", "Դիֆրակցիոն ցանցի մաքսիմումի պայմանն է…", "Условие максимума дифракционной решётки…"), [t("d sin φ = kλ", "d sin φ = kλ", "d sin φ = kλ"), t("d cos φ = kλ", "d cos φ = kλ", "d cos φ = kλ"), t("d = kλ sin φ", "d = kλ sin φ", "d = kλ sin φ")], 0),
        q(t("The energy of a photon is proportional to…", "Ֆոտոնի էներգիան համեմատական է…", "Энергия фотона пропорциональна…"), [t("its frequency", "նրա հաճախությանը", "его частоте"), t("its wavelength", "նրա ալիքի երկարությանը", "его длине волны"), t("the light intensity", "լույսի ինտենսիվությանը", "интенсивности света")], 0),
        q(t("Increasing the intensity of light in the photoeffect increases…", "Ֆոտոէֆեկտում լույսի ինտենսիվության մեծացումը մեծացնում է…", "Увеличение интенсивности света при фотоэффекте увеличивает…"), [t("the number of emitted electrons, not their maximum energy", "արձակված էլեկտրոնների թիվը, ոչ թե առավելագույն էներգիան", "число вылетающих электронов, а не их максимальную энергию"), t("the maximum energy of the electrons", "էլեկտրոնների առավելագույն էներգիան", "максимальную энергию электронов"), t("the work function", "ելքի աշխատանքը", "работу выхода")], 0),
        q(t("After three half-lives the number of undecayed nuclei is…", "Երեք կիսատրոհման պարբերությունից հետո չտրոհված միջուկների թիվը…", "После трёх периодов полураспада число нераспавшихся ядер…"), [t("1/8 of the original", "սկզբնականի 1/8-ն է", "1/8 исходного"), t("1/3 of the original", "սկզբնականի 1/3-ն է", "1/3 исходного"), t("1/6 of the original", "սկզբնականի 1/6-ն է", "1/6 исходного")], 0),
      ],
    ),
    lesson(
      "physics-mock-exam",
      ["Mock exam", "Փորձնական քննություն", "Пробный экзамен"],
      {
        en: ["Sit a full-length physics paper under exam conditions: 120 minutes, 12 problems from all five areas", "Check the solutions against a marking scheme and find the slips that cost points", "Plan the last weeks of revision from the topics that went wrong"],
        hy: ["Հանձնել ֆիզիկայի լրիվ քննական աշխատանք քննական պայմաններում․ 120 րոպե, 12 խնդիր բոլոր հինգ բաժիններից", "Ստուգել լուծումները գնահատման սխեմայով և գտնել միավոր արժեցող սխալները", "Վերջին շաբաթների կրկնությունը պլանավորել սխալ լուծված թեմաներից ելնելով"],
        ru: ["Написать полную экзаменационную работу по физике в условиях экзамена: 120 минут, 12 задач из всех пяти разделов", "Проверить решения по схеме оценивания и найти ошибки, стоившие баллов", "Спланировать последние недели повторения по темам, в которых были ошибки"],
      },
      {
        en: `Set a timer for **120 minutes**. Use only a calculator, a pen and the formula sheets from the four review lessons. Part A problems are worth 1 point each, Part B problems 2 points, Part C problems 3 points. Total: 20 points. Take $g = 10$ m/s², $c = 3 \\cdot 10^8$ m/s, $hc = 1240$ eV·nm, $k = 9 \\cdot 10^9$ N·m²/C², $R = 8{.}31$ J/(mol·K).

## Part A (short answer)

**A1.** A car brakes from $20$ m/s to rest over $50$ m. Find the deceleration and the braking time.

**A2.** A gas at $300$ K and $10^5$ Pa is heated at constant volume to $450$ K. Find the pressure.

**A3.** Three resistors of $6$ Ω each are connected: two in parallel, then in series with the third. Find the total resistance.

**A4.** A proton moves at $10^6$ m/s perpendicular to a $0{.}1$ T field. Find the Lorentz force ($e = 1{.}6 \\cdot 10^{-19}$ C).

**A5.** Find the energy in eV of a photon with wavelength $310$ nm.

**A6.** How many half-lives are needed for the activity of a sample to fall below $5\\%$ of its initial value?

## Part B (full solution)

**B1.** A $0{.}2$ kg ball is thrown from the ground at $20$ m/s at $60°$ to the horizontal. Find the maximum height, the range and the kinetic energy at the top of the trajectory.

**B2.** $3$ mol of a monatomic ideal gas expand at constant pressure $2 \\cdot 10^5$ Pa from $30$ L to $50$ L. Find the work done, the temperature change, the change in internal energy and the heat received.

**B3.** A battery with $\\mathcal{E} = 24$ V and $r = 2$ Ω feeds a $10$ Ω resistor. Find the current, the useful power, the power lost in the battery and the efficiency of the source.

**B4.** A diffraction grating has $400$ lines per mm. Light of two wavelengths, $450$ nm and $600$ nm, falls on it normally. Find the angles of the first maxima and the highest order in which the $600$ nm line is still visible.

## Part C (multi-step)

**C1.** A $0{.}5$ kg block slides down a frictionless slope from a height of $1{.}8$ m and then moves along a horizontal surface with $\\mu = 0{.}2$, where it hits a spring with $k = 200$ N/m after $2$ m. Find the speed at the bottom of the slope, the speed just before the spring, and the maximum compression (neglect friction during compression).

**C2.** A photocathode with work function $2{.}0$ eV is illuminated with $400$ nm light. (a) Find the maximum speed of the emitted electrons ($m_e = 9{.}1 \\cdot 10^{-31}$ kg). (b) Find the stopping voltage. (c) The electrons then enter a $10^{-3}$ T magnetic field perpendicular to their velocity. Find the radius of their path.

## Solutions

**A1.** $a = \\dfrac{v^2}{2s} = \\dfrac{400}{100} = 4$ m/s²; $t = \\dfrac{v}{a} = 5$ s.

**A2.** $p_2 = 10^5 \\cdot \\dfrac{450}{300} = 1{.}5 \\cdot 10^5$ Pa.

**A3.** Parallel pair $3$ Ω; total $9$ Ω.

**A4.** $F = evB = 1{.}6 \\cdot 10^{-19} \\cdot 10^6 \\cdot 0{.}1 = 1{.}6 \\cdot 10^{-14}$ N.

**A5.** $E = \\dfrac{1240}{310} = 4$ eV.

**A6.** $2^{-4} = 6{.}25\\%$, $2^{-5} = 3{.}1\\%$: five half-lives.

**B1.** $v_y = 20\\sin 60° = 17{.}3$ m/s, $v_x = 10$ m/s. $H = \\dfrac{v_y^2}{2g} = 15$ m. Flight time $t = \\dfrac{2v_y}{g} = 3{.}46$ s, range $L = v_x t = 34{.}6$ m (or $\\dfrac{v_0^2\\sin 120°}{g} = 34{.}6$ m). At the top only $v_x$ remains: $E_k = \\dfrac{0{.}2 \\cdot 100}{2} = 10$ J.

**B2.** $A = p\\Delta V = 2 \\cdot 10^5 \\cdot 0{.}02 = 4000$ J. $\\Delta T = \\dfrac{A}{\\nu R} = \\dfrac{4000}{3 \\cdot 8{.}31} \\approx 160$ K. $\\Delta U = \\dfrac{3}{2}A = 6000$ J. $Q = \\Delta U + A = 10\\,000$ J.

**B3.** $I = \\dfrac{24}{12} = 2$ A. $P_{\\text{useful}} = I^2 R = 40$ W. $P_{\\text{lost}} = I^2 r = 8$ W. $\\eta = \\dfrac{R}{R + r} = 83\\%$.

**B4.** $d = 2{.}5$ µm. $\\sin\\varphi_1 = \\dfrac{0{.}45}{2{.}5} = 0{.}18$, $\\varphi_1 \\approx 10{.}4°$; $\\sin\\varphi_1 = \\dfrac{0{.}6}{2{.}5} = 0{.}24$, $\\varphi_1 \\approx 13{.}9°$. $k_{\\max} \\le \\dfrac{2{.}5}{0{.}6} = 4{.}17$, so fourth order.

**C1.** Bottom of slope: $v_1 = \\sqrt{2gh} = 6$ m/s. Friction work over $2$ m: $\\mu m g s = 0{.}2 \\cdot 5 \\cdot 2 = 2$ J; kinetic energy $9 - 2 = 7$ J, so $v_2 = \\sqrt{\\dfrac{2 \\cdot 7}{0{.}5}} \\approx 5{.}3$ m/s. Compression: $\\dfrac{kx^2}{2} = 7$, $x = \\sqrt{\\dfrac{14}{200}} \\approx 0{.}26$ m.

**C2.** (a) Photon $3{.}1$ eV, $E_k = 1{.}1$ eV $= 1{.}76 \\cdot 10^{-19}$ J; $v = \\sqrt{\\dfrac{2E_k}{m}} \\approx 6{.}2 \\cdot 10^5$ m/s. (b) $U_s = 1{.}1$ V. (c) $r = \\dfrac{mv}{eB} = \\dfrac{9{.}1 \\cdot 10^{-31} \\cdot 6{.}2 \\cdot 10^5}{1{.}6 \\cdot 10^{-19} \\cdot 10^{-3}} \\approx 3{.}5$ mm.

## Marking scheme and common slips

- **Part A**: 1 point for the correct number with a unit. A wrong unit or a missing power of ten costs the point.
- **Part B**: 1 point for the correct law and set-up, 1 point for the result. Writing $\\Delta U = \\dfrac{3}{2}\\nu R\\Delta T$ but forgetting that $A = \\nu R \\Delta T$ at constant pressure is the classic B2 slip.
- **Part C**: 1 point per stage. In C1 most students forget that friction acts only on the horizontal part, or use $\\sqrt{2gh}$ for the speed before the spring. In C2 the common slip is leaving the kinetic energy in eV when computing the speed.
- Celsius instead of kelvin in gas problems, degrees instead of sines, and $\\sin$ confused with $\\cos$ in projectile motion together account for most lost points.
- **Grade bands**: 17–20 excellent, 13–16 good, 9–12 pass. Below 9: go back to the review lessons of the parts where you scored lowest.

### Exercises

A second short paper for self-check.

1. A stone falls from a $45$ m cliff. Find its time of fall and the speed at impact.
2. A $2$ kg body on a rope is lifted with acceleration $3$ m/s². Find the tension.
3. $1$ mol of gas at $400$ K occupies $20$ L. Find the pressure.
4. How much heat is needed to melt $2$ kg of ice at $0$ °C ($\\lambda = 3{.}3 \\cdot 10^5$ J/kg) and heat the water to $50$ °C ($c = 4200$ J/(kg·K))?
5. A $100$ W bulb works at $220$ V for $5$ hours. Find the current and the energy in kilowatt-hours.
6. A coil of $100$ turns and area $20$ cm² is turned so that the flux through it changes from $BS$ to $0$ in $0{.}05$ s with $B = 0{.}5$ T. Find the EMF.
7. Light of $500$ nm falls on a metal with work function $2{.}1$ eV. Find the stopping voltage.
8. Complete the reaction \${}^{14}_{7}\\text{N} + {}^{4}_{2}\\text{He} \\to {}^{17}_{8}\\text{O} + \\,?$ and name the product.

### Answers

1. $t = 3$ s; $v = 30$ m/s.
2. $T = m(g + a) = 26$ N.
3. $p = \\dfrac{\\nu RT}{V} = \\dfrac{8{.}31 \\cdot 400}{0{.}02} \\approx 1{.}66 \\cdot 10^5$ Pa.
4. $Q = 6{.}6 \\cdot 10^5 + 4{.}2 \\cdot 10^5 = 1{.}08 \\cdot 10^6$ J.
5. $I \\approx 0{.}45$ A; $0{.}5$ kWh.
6. $\\mathcal{E} = N\\dfrac{BS}{\\Delta t} = 100 \\cdot \\dfrac{0{.}5 \\cdot 2 \\cdot 10^{-3}}{0{.}05} = 2$ V.
7. Photon $2{.}48$ eV; $U_s = 0{.}38$ V.
8. \${}^{1}_{1}\\text{H}$, a proton (Rutherford's 1919 reaction).`,
        hy: `Դրեք ժամաչափ **120 րոպեի** վրա։ Օգտվեք միայն հաշվիչից, գրիչից և չորս ամփոփիչ դասերի բանաձևերի թերթիկներից։ Ա մասի խնդիրները 1 միավոր են, Բ մասի խնդիրները՝ 2, Գ մասի խնդիրները՝ 3։ Ընդամենը՝ 20 միավոր։ Ընդունեք $g = 10$ մ/վ², $c = 3 \\cdot 10^8$ մ/վ, $hc = 1240$ էՎ·նմ, $k = 9 \\cdot 10^9$ Ն·մ²/Կլ², $R = 8{,}31$ Ջ/(մոլ·Կ)։

## Ա մաս (կարճ պատասխան)

**Ա1.** Ավտոմեքենան $20$ մ/վ-ից դանդաղում է մինչև կանգ $50$ մ-ում։ Գտնել դանդաղեցումը և արգելակման ժամանակը։

**Ա2.** $300$ Կ և $10^5$ Պա գազը հաստատուն ծավալով տաքացվում է մինչև $450$ Կ։ Գտնել ճնշումը։

**Ա3.** $6$ Օմ երեք դիմադրություն միացված են․ երկուսը զուգահեռ, ապա հաջորդաբար երրորդի հետ։ Գտնել ընդհանուր դիմադրությունը։

**Ա4.** Պրոտոնը շարժվում է $10^6$ մ/վ արագությամբ $0{,}1$ Տ դաշտին ուղղահայաց։ Գտնել Լորենցի ուժը ($e = 1{,}6 \\cdot 10^{-19}$ Կլ)։

**Ա5.** Գտնել $310$ նմ ալիքի երկարության ֆոտոնի էներգիան էՎ-ով։

**Ա6.** Քանի՞ կիսատրոհման պարբերություն է անհրաժեշտ, որ նմուշի ակտիվությունն իջնի սկզբնականի $5\\%$-ից ցածր։

## Բ մաս (լրիվ լուծում)

**Բ1.** $0{,}2$ կգ գնդակը նետվում է հողից $20$ մ/վ արագությամբ հորիզոնի նկատմամբ $60°$ անկյան տակ։ Գտնել առավելագույն բարձրությունը, թռիչքի հեռավորությունը և կինետիկ էներգիան հետագծի գագաթում։

**Բ2.** $3$ մոլ միատոմ իդեալական գազը $2 \\cdot 10^5$ Պա հաստատուն ճնշման դեպքում լայնանում է $30$ լ-ից $50$ լ։ Գտնել կատարված աշխատանքը, ջերմաստիճանի փոփոխությունը, ներքին էներգիայի փոփոխությունը և ստացված ջերմությունը։

**Բ3.** $\\mathcal{E} = 24$ Վ և $r = 2$ Օմ մարտկոցը սնում է $10$ Օմ դիմադրություն։ Գտնել հոսանքը, օգտակար հզորությունը, մարտկոցում կորսված հզորությունը և աղբյուրի ՕԳԳ-ն։

**Բ4.** Դիֆրակցիոն ցանցն ունի $400$ շտրիխ մեկ մմ-ում։ Նրա վրա ուղղահայաց ընկնում է երկու ալիքի երկարության լույս՝ $450$ նմ և $600$ նմ։ Գտնել առաջին մաքսիմումների անկյունները և ամենաբարձր կարգը, որում $600$ նմ գիծը դեռ տեսանելի է։

## Գ մաս (բազմաքայլ)

**Գ1.** $0{,}5$ կգ զանգվածով մարմինը սահում է անշփում թեք հարթությունից $1{,}8$ մ բարձրությունից, ապա շարժվում է $\\mu = 0{,}2$ հորիզոնական մակերեսով, որտեղ $2$ մ անց բախվում է $k = 200$ Ն/մ զսպանակին։ Գտնել արագությունը թեքության ստորոտում, արագությունը զսպանակից անմիջապես առաջ և առավելագույն սեղմումը (սեղմման ընթացքում շփումն անտեսել)։

**Գ2.** $2{,}0$ էՎ ելքի աշխատանքով ֆոտոկատոդը լուսավորվում է $400$ նմ լույսով։ (ա) Գտնել արձակված էլեկտրոնների առավելագույն արագությունը ($m_e = 9{,}1 \\cdot 10^{-31}$ կգ)։ (բ) Գտնել փակող լարումը։ (գ) Էլեկտրոնները մտնում են իրենց արագությանն ուղղահայաց $10^{-3}$ Տ մագնիսական դաշտ։ Գտնել հետագծի շառավիղը։

## Լուծումներ

**Ա1.** $a = \\dfrac{v^2}{2s} = \\dfrac{400}{100} = 4$ մ/վ²; $t = \\dfrac{v}{a} = 5$ վ։

**Ա2.** $p_2 = 10^5 \\cdot \\dfrac{450}{300} = 1{,}5 \\cdot 10^5$ Պա։

**Ա3.** Զուգահեռ զույգը $3$ Օմ; ընդհանուր $9$ Օմ։

**Ա4.** $F = evB = 1{,}6 \\cdot 10^{-19} \\cdot 10^6 \\cdot 0{,}1 = 1{,}6 \\cdot 10^{-14}$ Ն։

**Ա5.** $E = \\dfrac{1240}{310} = 4$ էՎ։

**Ա6.** $2^{-4} = 6{,}25\\%$, $2^{-5} = 3{,}1\\%$․ հինգ պարբերություն։

**Բ1.** $v_y = 20\\sin 60° = 17{,}3$ մ/վ, $v_x = 10$ մ/վ։ $H = \\dfrac{v_y^2}{2g} = 15$ մ։ Թռիչքի ժամանակը $t = \\dfrac{2v_y}{g} = 3{,}46$ վ, հեռավորությունը $L = v_x t = 34{,}6$ մ (կամ $\\dfrac{v_0^2\\sin 120°}{g} = 34{,}6$ մ)։ Գագաթում մնում է միայն $v_x$-ը․ $E_k = \\dfrac{0{,}2 \\cdot 100}{2} = 10$ Ջ։

**Բ2.** $A = p\\Delta V = 2 \\cdot 10^5 \\cdot 0{,}02 = 4000$ Ջ։ $\\Delta T = \\dfrac{A}{\\nu R} = \\dfrac{4000}{3 \\cdot 8{,}31} \\approx 160$ Կ։ $\\Delta U = \\dfrac{3}{2}A = 6000$ Ջ։ $Q = \\Delta U + A = 10\\,000$ Ջ։

**Բ3.** $I = \\dfrac{24}{12} = 2$ Ա։ $P_{\\text{օգտ}} = I^2 R = 40$ Վտ։ $P_{\\text{կոր}} = I^2 r = 8$ Վտ։ $\\eta = \\dfrac{R}{R + r} = 83\\%$։

**Բ4.** $d = 2{,}5$ մկմ։ $\\sin\\varphi_1 = \\dfrac{0{,}45}{2{,}5} = 0{,}18$, $\\varphi_1 \\approx 10{,}4°$; $\\sin\\varphi_1 = \\dfrac{0{,}6}{2{,}5} = 0{,}24$, $\\varphi_1 \\approx 13{,}9°$։ $k_{\\max} \\le \\dfrac{2{,}5}{0{,}6} = 4{,}17$, ուստի չորրորդ կարգ։

**Գ1.** Թեքության ստորոտում․ $v_1 = \\sqrt{2gh} = 6$ մ/վ։ Շփման աշխատանքը $2$ մ-ում․ $\\mu m g s = 0{,}2 \\cdot 5 \\cdot 2 = 2$ Ջ; կինետիկ էներգիան $9 - 2 = 7$ Ջ, ուստի $v_2 = \\sqrt{\\dfrac{2 \\cdot 7}{0{,}5}} \\approx 5{,}3$ մ/վ։ Սեղմում․ $\\dfrac{kx^2}{2} = 7$, $x = \\sqrt{\\dfrac{14}{200}} \\approx 0{,}26$ մ։

**Գ2.** (ա) Ֆոտոնը $3{,}1$ էՎ, $E_k = 1{,}1$ էՎ $= 1{,}76 \\cdot 10^{-19}$ Ջ; $v = \\sqrt{\\dfrac{2E_k}{m}} \\approx 6{,}2 \\cdot 10^5$ մ/վ։ (բ) $U_s = 1{,}1$ Վ։ (գ) $r = \\dfrac{mv}{eB} = \\dfrac{9{,}1 \\cdot 10^{-31} \\cdot 6{,}2 \\cdot 10^5}{1{,}6 \\cdot 10^{-19} \\cdot 10^{-3}} \\approx 3{,}5$ մմ։

## Գնահատման սխեման և տարածված սխալները

- **Ա մաս**․ 1 միավոր ճիշտ թվի և միավորի համար։ Սխալ միավորը կամ բաց թողնված տասի աստիճանն արժե միավորը։
- **Բ մաս**․ 1 միավոր ճիշտ օրենքի և դրվածքի, 1 միավոր արդյունքի համար։ $\\Delta U = \\dfrac{3}{2}\\nu R\\Delta T$ գրելն ու մոռանալը, որ հաստատուն ճնշման դեպքում $A = \\nu R \\Delta T$, Բ2-ի դասական սխալն է։
- **Գ մաս**․ 1 միավոր յուրաքանչյուր փուլի համար։ Գ1-ում շատերը մոռանում են, որ շփումը գործում է միայն հորիզոնական մասում, կամ զսպանակից առաջ արագության համար օգտագործում են $\\sqrt{2gh}$։ Գ2-ում տարածված սխալն արագությունը հաշվելիս կինետիկ էներգիան էՎ-ով թողնելն է։
- Գազերի խնդիրներում Ցելսիուս կելվինի փոխարեն, աստիճաններ սինուսի փոխարեն և նետված մարմնի շարժման մեջ $\\sin$-ի ու $\\cos$-ի շփոթումը միասին կազմում են կորսված միավորների մեծ մասը։
- **Գնահատականների միջակայքեր**․ 17–20՝ գերազանց, 13–16՝ լավ, 9–12՝ բավարար։ 9-ից ցածր․ վերադարձեք այն մասերի ամփոփիչ դասերին, որտեղ ամենացածր միավորն եք ստացել։

### Վարժություններ

Երկրորդ կարճ աշխատանք ինքնաստուգման համար։

1. Քարն ընկնում է $45$ մ ժայռից։ Գտնել անկման ժամանակը և արագությունը հարվածի պահին։
2. $2$ կգ մարմինը պարանով բարձրացվում է $3$ մ/վ² արագացումով։ Գտնել լարվածությունը։
3. $400$ Կ $1$ մոլ գազը զբաղեցնում է $20$ լ։ Գտնել ճնշումը։
4. Որքա՞ն ջերմություն է անհրաժեշտ $0$ °C $2$ կգ սառույցը հալելու ($\\lambda = 3{,}3 \\cdot 10^5$ Ջ/կգ) և ջուրը մինչև $50$ °C տաքացնելու համար ($c = 4200$ Ջ/(կգ·Կ))։
5. $100$ Վտ լամպն աշխատում է $220$ Վ-ով $5$ ժամ։ Գտնել հոսանքը և էներգիան կիլովատտ-ժամով։
6. $100$ գալար և $20$ սմ² մակերես ունեցող կոճը շրջվում է այնպես, որ նրա միջով հոսքը $0{,}05$ վ-ում $BS$-ից դառնում է $0$, որտեղ $B = 0{,}5$ Տ։ Գտնել ԷլՇՈւ-ն։
7. $500$ նմ լույսն ընկնում է $2{,}1$ էՎ ելքի աշխատանքով մետաղի վրա։ Գտնել փակող լարումը։
8. Լրացրեք ռեակցիան \${}^{14}_{7}\\text{N} + {}^{4}_{2}\\text{He} \\to {}^{17}_{8}\\text{O} + \\,?$ և անվանեք արգասիքը։

### Պատասխաններ

1. $t = 3$ վ; $v = 30$ մ/վ։
2. $T = m(g + a) = 26$ Ն։
3. $p = \\dfrac{\\nu RT}{V} = \\dfrac{8{,}31 \\cdot 400}{0{,}02} \\approx 1{,}66 \\cdot 10^5$ Պա։
4. $Q = 6{,}6 \\cdot 10^5 + 4{,}2 \\cdot 10^5 = 1{,}08 \\cdot 10^6$ Ջ։
5. $I \\approx 0{,}45$ Ա; $0{,}5$ կՎտ·ժ։
6. $\\mathcal{E} = N\\dfrac{BS}{\\Delta t} = 100 \\cdot \\dfrac{0{,}5 \\cdot 2 \\cdot 10^{-3}}{0{,}05} = 2$ Վ։
7. Ֆոտոնը $2{,}48$ էՎ; $U_s = 0{,}38$ Վ։
8. \${}^{1}_{1}\\text{H}$՝ պրոտոն (Ռեզերֆորդի 1919 թվականի ռեակցիան)։`,
        ru: `Поставьте таймер на **120 минут**. Пользуйтесь только калькулятором, ручкой и листами формул из четырёх уроков повторения. Задачи части А стоят по 1 баллу, части Б — по 2, части В — по 3. Всего 20 баллов. Примите $g = 10$ м/с², $c = 3 \\cdot 10^8$ м/с, $hc = 1240$ эВ·нм, $k = 9 \\cdot 10^9$ Н·м²/Кл², $R = 8{,}31$ Дж/(моль·К).

## Часть А (краткий ответ)

**А1.** Автомобиль тормозит с $20$ м/с до остановки на $50$ м. Найдите замедление и время торможения.

**А2.** Газ при $300$ К и $10^5$ Па нагревают при постоянном объёме до $450$ К. Найдите давление.

**А3.** Три резистора по $6$ Ом соединены: два параллельно, затем последовательно с третьим. Найдите общее сопротивление.

**А4.** Протон движется со скоростью $10^6$ м/с перпендикулярно полю $0{,}1$ Тл. Найдите силу Лоренца ($e = 1{,}6 \\cdot 10^{-19}$ Кл).

**А5.** Найдите энергию в эВ фотона с длиной волны $310$ нм.

**А6.** Сколько периодов полураспада нужно, чтобы активность образца упала ниже $5\\%$ начальной?

## Часть Б (полное решение)

**Б1.** Мяч массой $0{,}2$ кг бросают с земли со скоростью $20$ м/с под углом $60°$ к горизонту. Найдите максимальную высоту, дальность и кинетическую энергию в верхней точке траектории.

**Б2.** $3$ моль одноатомного идеального газа расширяются при постоянном давлении $2 \\cdot 10^5$ Па от $30$ л до $50$ л. Найдите работу, изменение температуры, изменение внутренней энергии и полученное тепло.

**Б3.** Батарея с $\\mathcal{E} = 24$ В и $r = 2$ Ом питает резистор $10$ Ом. Найдите ток, полезную мощность, мощность потерь в батарее и КПД источника.

**Б4.** Дифракционная решётка имеет $400$ штрихов на мм. На неё нормально падает свет двух длин волн, $450$ нм и $600$ нм. Найдите углы первых максимумов и наибольший порядок, в котором линия $600$ нм ещё видна.

## Часть В (многошаговые задачи)

**В1.** Брусок массой $0{,}5$ кг соскальзывает с гладкой горки высотой $1{,}8$ м и движется по горизонтальной поверхности с $\\mu = 0{,}2$, где через $2$ м ударяется о пружину с $k = 200$ Н/м. Найдите скорость у подножия горки, скорость перед пружиной и максимальное сжатие (трением при сжатии пренебречь).

**В2.** Фотокатод с работой выхода $2{,}0$ эВ освещают светом $400$ нм. (а) Найдите максимальную скорость вылетающих электронов ($m_e = 9{,}1 \\cdot 10^{-31}$ кг). (б) Найдите задерживающее напряжение. (в) Электроны влетают в магнитное поле $10^{-3}$ Тл перпендикулярно скорости. Найдите радиус траектории.

## Решения

**А1.** $a = \\dfrac{v^2}{2s} = \\dfrac{400}{100} = 4$ м/с²; $t = \\dfrac{v}{a} = 5$ с.

**А2.** $p_2 = 10^5 \\cdot \\dfrac{450}{300} = 1{,}5 \\cdot 10^5$ Па.

**А3.** Параллельная пара $3$ Ом; всего $9$ Ом.

**А4.** $F = evB = 1{,}6 \\cdot 10^{-19} \\cdot 10^6 \\cdot 0{,}1 = 1{,}6 \\cdot 10^{-14}$ Н.

**А5.** $E = \\dfrac{1240}{310} = 4$ эВ.

**А6.** $2^{-4} = 6{,}25\\%$, $2^{-5} = 3{,}1\\%$: пять периодов.

**Б1.** $v_y = 20\\sin 60° = 17{,}3$ м/с, $v_x = 10$ м/с. $H = \\dfrac{v_y^2}{2g} = 15$ м. Время полёта $t = \\dfrac{2v_y}{g} = 3{,}46$ с, дальность $L = v_x t = 34{,}6$ м (или $\\dfrac{v_0^2\\sin 120°}{g} = 34{,}6$ м). В верхней точке остаётся только $v_x$: $E_k = \\dfrac{0{,}2 \\cdot 100}{2} = 10$ Дж.

**Б2.** $A = p\\Delta V = 2 \\cdot 10^5 \\cdot 0{,}02 = 4000$ Дж. $\\Delta T = \\dfrac{A}{\\nu R} = \\dfrac{4000}{3 \\cdot 8{,}31} \\approx 160$ К. $\\Delta U = \\dfrac{3}{2}A = 6000$ Дж. $Q = \\Delta U + A = 10\\,000$ Дж.

**Б3.** $I = \\dfrac{24}{12} = 2$ А. $P_{\\text{полезн}} = I^2 R = 40$ Вт. $P_{\\text{потерь}} = I^2 r = 8$ Вт. $\\eta = \\dfrac{R}{R + r} = 83\\%$.

**Б4.** $d = 2{,}5$ мкм. $\\sin\\varphi_1 = \\dfrac{0{,}45}{2{,}5} = 0{,}18$, $\\varphi_1 \\approx 10{,}4°$; $\\sin\\varphi_1 = \\dfrac{0{,}6}{2{,}5} = 0{,}24$, $\\varphi_1 \\approx 13{,}9°$. $k_{\\max} \\le \\dfrac{2{,}5}{0{,}6} = 4{,}17$, значит четвёртый порядок.

**В1.** У подножия: $v_1 = \\sqrt{2gh} = 6$ м/с. Работа трения на $2$ м: $\\mu m g s = 0{,}2 \\cdot 5 \\cdot 2 = 2$ Дж; кинетическая энергия $9 - 2 = 7$ Дж, откуда $v_2 = \\sqrt{\\dfrac{2 \\cdot 7}{0{,}5}} \\approx 5{,}3$ м/с. Сжатие: $\\dfrac{kx^2}{2} = 7$, $x = \\sqrt{\\dfrac{14}{200}} \\approx 0{,}26$ м.

**В2.** (а) Фотон $3{,}1$ эВ, $E_k = 1{,}1$ эВ $= 1{,}76 \\cdot 10^{-19}$ Дж; $v = \\sqrt{\\dfrac{2E_k}{m}} \\approx 6{,}2 \\cdot 10^5$ м/с. (б) $U_s = 1{,}1$ В. (в) $r = \\dfrac{mv}{eB} = \\dfrac{9{,}1 \\cdot 10^{-31} \\cdot 6{,}2 \\cdot 10^5}{1{,}6 \\cdot 10^{-19} \\cdot 10^{-3}} \\approx 3{,}5$ мм.

## Схема оценивания и типичные ошибки

- **Часть А**: 1 балл за верное число с единицей. Неверная единица или потерянная степень десяти стоит балла.
- **Часть Б**: 1 балл за верный закон и постановку, 1 балл за результат. Записать $\\Delta U = \\dfrac{3}{2}\\nu R\\Delta T$ и забыть, что при постоянном давлении $A = \\nu R \\Delta T$, — классическая ошибка в Б2.
- **Часть В**: 1 балл за каждый этап. В В1 многие забывают, что трение действует только на горизонтальном участке, или берут $\\sqrt{2gh}$ для скорости перед пружиной. В В2 типичная ошибка — оставить кинетическую энергию в эВ при расчёте скорости.
- Цельсий вместо кельвинов в газовых задачах, градусы вместо синусов и путаница $\\sin$ с $\\cos$ в движении брошенного тела вместе дают большую часть потерянных баллов.
- **Границы оценок**: 17–20 отлично, 13–16 хорошо, 9–12 удовлетворительно. Ниже 9: вернитесь к урокам повторения тех частей, где набрано меньше всего.

### Упражнения

Вторая короткая работа для самопроверки.

1. Камень падает со скалы высотой $45$ м. Найдите время падения и скорость при ударе.
2. Тело массой $2$ кг поднимают на верёвке с ускорением $3$ м/с². Найдите натяжение.
3. $1$ моль газа при $400$ К занимает $20$ л. Найдите давление.
4. Сколько тепла нужно, чтобы расплавить $2$ кг льда при $0$ °C ($\\lambda = 3{,}3 \\cdot 10^5$ Дж/кг) и нагреть воду до $50$ °C ($c = 4200$ Дж/(кг·К))?
5. Лампа $100$ Вт работает при $220$ В $5$ часов. Найдите ток и энергию в киловатт-часах.
6. Катушку из $100$ витков площадью $20$ см² поворачивают так, что поток через неё за $0{,}05$ с меняется от $BS$ до $0$ при $B = 0{,}5$ Тл. Найдите ЭДС.
7. Свет $500$ нм падает на металл с работой выхода $2{,}1$ эВ. Найдите задерживающее напряжение.
8. Дополните реакцию \${}^{14}_{7}\\text{N} + {}^{4}_{2}\\text{He} \\to {}^{17}_{8}\\text{O} + \\,?$ и назовите продукт.

### Ответы

1. $t = 3$ с; $v = 30$ м/с.
2. $T = m(g + a) = 26$ Н.
3. $p = \\dfrac{\\nu RT}{V} = \\dfrac{8{,}31 \\cdot 400}{0{,}02} \\approx 1{,}66 \\cdot 10^5$ Па.
4. $Q = 6{,}6 \\cdot 10^5 + 4{,}2 \\cdot 10^5 = 1{,}08 \\cdot 10^6$ Дж.
5. $I \\approx 0{,}45$ А; $0{,}5$ кВт·ч.
6. $\\mathcal{E} = N\\dfrac{BS}{\\Delta t} = 100 \\cdot \\dfrac{0{,}5 \\cdot 2 \\cdot 10^{-3}}{0{,}05} = 2$ В.
7. Фотон $2{,}48$ эВ; $U_s = 0{,}38$ В.
8. \${}^{1}_{1}\\text{H}$ — протон (реакция Резерфорда 1919 года).`,
      },
      [
        q(t("A car brakes from 20 m/s to rest over 50 m. Its deceleration is…", "Ավտոմեքենան 20 մ/վ-ից կանգ է առնում 50 մ-ում։ Դանդաղեցումն է…", "Автомобиль тормозит с 20 м/с до остановки на 50 м. Замедление равно…"), [t("4 m/s²", "4 մ/վ²", "4 м/с²"), t("2 m/s²", "2 մ/վ²", "2 м/с²"), t("8 m/s²", "8 մ/վ²", "8 м/с²")], 0),
        q(t("Heating a gas at constant volume from 300 K to 450 K multiplies the pressure by…", "Հաստատուն ծավալով գազը 300 Կ-ից 450 Կ տաքացնելիս ճնշումը մեծանում է … անգամ։", "Нагрев газа при постоянном объёме от 300 К до 450 К увеличивает давление в … раз."), [t("1.5", "1,5", "1,5"), t("2", "2", "2"), t("150", "150", "150")], 0),
        q(t("Two 6 Ω resistors in parallel, in series with a third 6 Ω, give…", "Զուգահեռ միացված երկու 6 Օմ և հաջորդաբար երրորդ 6 Օմ-ը տալիս են…", "Два резистора по 6 Ом параллельно, последовательно с третьим 6 Ом, дают…"), [t("9 Ω", "9 Օմ", "9 Ом"), t("18 Ω", "18 Օմ", "18 Ом"), t("2 Ω", "2 Օմ", "2 Ом")], 0),
        q(t("A photon of 310 nm has energy about…", "310 նմ ֆոտոնի էներգիան մոտ … է։", "Фотон 310 нм имеет энергию около…"), [t("4 eV", "4 էՎ", "4 эВ"), t("2 eV", "2 էՎ", "2 эВ"), t("40 eV", "40 էՎ", "40 эВ")], 0),
        q(t("The efficiency of a source with r = 2 Ω feeding R = 10 Ω is…", "r = 2 Օմ աղբյուրի ՕԳԳ-ն R = 10 Օմ բեռի դեպքում է…", "КПД источника с r = 2 Ом при нагрузке R = 10 Ом равен…"), [t("about 83%", "մոտ 83%", "около 83%"), t("about 20%", "մոտ 20%", "около 20%"), t("100%", "100%", "100%")], 0),
        q(t("In the reaction ¹⁴N + ⁴He → ¹⁷O + ?, the missing particle is…", "¹⁴N + ⁴He → ¹⁷O + ? ռեակցիայում բացակայող մասնիկն է…", "В реакции ¹⁴N + ⁴He → ¹⁷O + ? недостающая частица…"), [t("a proton", "պրոտոն", "протон"), t("a neutron", "նեյտրոն", "нейтрон"), t("an electron", "էլեկտրոն", "электрон")], 0),
      ],
    ),
  ],
};
