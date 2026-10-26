import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Magnetic field and induction", "Մագնիսական դաշտ և ինդուկցիա", "Магнитное поле и электромагнитная индукция"),
  summary: t("Magnetic induction vector, Ampere and Lorentz forces, Faraday's law, self-induction, magnetic field energy.", "Մագնիսական ինդուկցիայի վեկտոր, Ամպերի և Լորենցի ուժեր, Ֆարադեյի օրենք, ինքնաինդուկցիա, մագնիսական դաշտի էներգիա։", "Вектор магнитной индукции, силы Ампера и Лоренца, закон Фарадея, самоиндукция, энергия магнитного поля."),
  lessons: [
    lesson(
      "magnetic-induction-vector",
      ["Magnetic induction vector; Ampere force", "Մագնիսական ինդուկցիայի վեկտոր, Ամպերի ուժ", "Вектор магнитной индукции; сила Ампера"],
      {
        en: ["Define the magnetic induction vector B through the force on a current element and find its direction with the right-hand rule", "Compute the Ampere force F = BIl sin α and find its direction with the left-hand rule", "Analyse the torque on a current loop and the interaction of parallel currents"],
        hy: ["Սահմանել մագնիսական ինդուկցիայի B վեկտորը հոսանքակիր տարրի վրա ազդող ուժով և որոշել ուղղությունն աջ ձեռքի կանոնով", "Հաշվել Ամպերի ուժը F = BIl sin α բանաձևով և որոշել ուղղությունը ձախ ձեռքի կանոնով", "Վերլուծել հոսանքակիր շրջանակի վրա ազդող պտտող մոմենտը և զուգահեռ հոսանքների փոխազդեցությունը"],
        ru: ["Определять вектор магнитной индукции B через силу, действующую на элемент тока, и находить его направление по правилу правой руки", "Вычислять силу Ампера F = BIl sin α и находить её направление по правилу левой руки", "Анализировать вращающий момент, действующий на рамку с током, и взаимодействие параллельных токов"],
      },
      {
        en: `## Magnetic field

A magnetic field exists around magnets and around **moving charges**, that is, around currents. Oersted (1820) saw a compass needle turn near a wire with current; Ampere showed that two parallel wires attract when the currents flow the same way and repel when they flow in opposite directions. The field is detected by its action on a magnetic needle or on a current.

Magnetic field lines are drawn so that the tangent at each point gives the direction of the field (the direction of the north pole of a small needle). Unlike electric lines, they are always **closed**: there are no magnetic charges. For a straight wire the lines are circles around the wire; for a coil (solenoid) the field inside is nearly uniform and the coil behaves like a bar magnet.

> **Right-hand rule for a straight current.** Point the thumb along the current; the curled fingers show the direction of the field lines.

For a solenoid the rule is reversed: the fingers follow the current in the turns and the thumb points to the north pole.

## The magnetic induction vector

The strength of the field is characterised by the **magnetic induction** $\\vec B$. Place a short straight conductor of length $l$ carrying current $I$ in the field and orient it so that the force is greatest. The ratio

$$B = \\dfrac{F_{\\max}}{Il}$$

does not depend on the conductor: it is a property of the field at that point. The unit is the **tesla**: $1$ T is the field that acts with $1$ N on a $1$ m conductor carrying $1$ A placed across the field. Typical values: Earth $5 \\cdot 10^{-5}$ T, a fridge magnet $10^{-2}$ T, an MRI scanner $1{.}5$ T.

Magnetic induction obeys superposition: the field of several sources is the vector sum of their fields. The field of a long straight wire is $B = \\dfrac{\\mu_0 I}{2\\pi r}$, with $\\mu_0 = 4\\pi \\cdot 10^{-7}$ H/m; the field inside a long solenoid is $B = \\mu_0 n I$, where $n$ is the number of turns per metre.

## Ampere force

> The force on a straight conductor of length $l$ with current $I$ in a uniform field $B$ is
> $$F = BIl\\sin\\alpha,$$
> where $\\alpha$ is the angle between the conductor and $\\vec B$.

> **Left-hand rule.** Hold the left hand so that the field lines enter the palm and the four fingers point along the current; the extended thumb shows the direction of the force.

The force is zero for a conductor parallel to the field and greatest for one perpendicular to it. The Ampere force is always perpendicular both to the current and to $\\vec B$.

**Torque on a loop.** A rectangular loop with sides $a$ and $b$ in a uniform field experiences forces on the two sides $a$ that form a couple. The torque is $M = BIS\\sin\\varphi$, where $S = ab$ and $\\varphi$ is the angle between $\\vec B$ and the normal to the loop. This is how the electric motor and the moving-coil ammeter work: the loop turns until its normal lines up with the field.

**Example 1.** A $20$ cm conductor carrying $5$ A lies perpendicular to a field of $0{.}4$ T. $F = 0{.}4 \\cdot 5 \\cdot 0{.}2 = 0{.}4$ N. If the conductor made $30°$ with the field the force would be $0{.}4 \\cdot \\sin 30° = 0{.}2$ N.

**Example 2.** A horizontal wire of mass $10$ g and length $50$ cm hangs in a horizontal field of $0{.}5$ T directed across it. What current makes the tension in the supports zero? $BIl = mg$, $I = \\dfrac{0{.}01 \\cdot 10}{0{.}5 \\cdot 0{.}5} = 0{.}4$ A ($g = 10$ m/s²). The current must flow so that the Ampere force points upward.

**Example 3.** A straight wire carries $10$ A. The field $2$ cm away is $B = \\dfrac{4\\pi \\cdot 10^{-7} \\cdot 10}{2\\pi \\cdot 0{.}02} = 10^{-4}$ T, twice the Earth's field. A compass near the wire swings noticeably.

**Example 4.** A solenoid has $1000$ turns on a length of $20$ cm and carries $2$ A. $n = 5000$ m⁻¹, $B = 4\\pi \\cdot 10^{-7} \\cdot 5000 \\cdot 2 \\approx 1{.}26 \\cdot 10^{-2}$ T. An iron core would multiply this hundreds of times.

**Example 5.** Two long parallel wires $10$ cm apart carry $20$ A each in the same direction. The field of one wire at the other is $B = \\dfrac{\\mu_0 I}{2\\pi r} = 4 \\cdot 10^{-5}$ T; the force on $1$ m of the second wire is $F = BIl = 4 \\cdot 10^{-5} \\cdot 20 \\cdot 1 = 8 \\cdot 10^{-4}$ N, attractive. This interaction formerly defined the ampere.

**Example 6.** A square loop with side $10$ cm and $50$ turns carries $0{.}5$ A in a field of $0{.}2$ T. The maximum torque (normal perpendicular to $\\vec B$) is $M = NBIS = 50 \\cdot 0{.}2 \\cdot 0{.}5 \\cdot 0{.}01 = 0{.}05$ N·m. At $\\varphi = 30°$ the torque is half of that.

**Example 7.** A conductor of length $l$ and mass $m$ rests on horizontal rails in a vertical field $B$. The friction coefficient is $\\mu$. The current needed to start it sliding is $I = \\dfrac{\\mu m g}{Bl}$: for $m = 0{.}1$ kg, $l = 0{.}2$ m, $B = 0{.}5$ T, $\\mu = 0{.}2$ we get $I = \\dfrac{0{.}2 \\cdot 1}{0{.}1} = 2$ A.

**Example 8.** Why does an electric motor keep turning instead of stopping with its normal along the field? Every half-turn a **commutator** reverses the current in the loop, so the torque always acts in the same rotational sense. Real motors use many loops at different angles so that the torque is nearly constant.

## Exercises

1. A $40$ cm conductor carries $3$ A perpendicular to a $0{.}5$ T field. Find the force.
2. The force on a $25$ cm conductor carrying $4$ A is $0{.}3$ N when the conductor is at $90°$ to the field. Find $B$.
3. A conductor at $45°$ to a $0{.}2$ T field with current $5$ A experiences $0{.}1$ N. Find its length.
4. Find the field $5$ cm from a straight wire carrying $4$ A.
5. A solenoid with $400$ turns per $10$ cm carries $1{.}5$ A. Find $B$ inside.
6. A $30$ cm wire of mass $6$ g rests in a horizontal field of $0{.}1$ T. What current (and which direction relative to the field) makes it weightless? Take $g = 10$ m/s².
7. A loop of area $20$ cm² with $100$ turns carries $2$ A in a $0{.}3$ T field. Find the maximum torque.
8. Two parallel wires $5$ cm apart carry $10$ A and $30$ A in opposite directions. Find the force per metre and say whether they attract or repel.

### Answers

1. $0{.}6$ N. 2. $0{.}3$ T. 3. $l = \\dfrac{0{.}1}{0{.}2 \\cdot 5 \\cdot \\sin 45°} \\approx 0{.}14$ m. 4. $1{.}6 \\cdot 10^{-5}$ T. 5. $n = 4000$ m⁻¹, $B \\approx 7{.}5 \\cdot 10^{-3}$ T. 6. $I = \\dfrac{0{.}006 \\cdot 10}{0{.}1 \\cdot 0{.}3} = 2$ A, perpendicular to the field. 7. $M = 100 \\cdot 0{.}3 \\cdot 2 \\cdot 0{.}002 = 0{.}12$ N·m. 8. $B = \\dfrac{\\mu_0 \\cdot 10}{2\\pi \\cdot 0{.}05} = 4 \\cdot 10^{-5}$ T, $F/l = 4 \\cdot 10^{-5} \\cdot 30 = 1{.}2 \\cdot 10^{-3}$ N/m, they repel.`,
        hy: `## Մագնիսական դաշտ

Մագնիսական դաշտ գոյություն ունի մագնիսների և **շարժվող լիցքերի**, այսինքն՝ հոսանքների շուրջ։ Էրստեդը (1820) տեսավ, որ կողմնացույցի սլաքը շեղվում է հոսանքակիր լարի մոտ, իսկ Ամպերը ցույց տվեց, որ երկու զուգահեռ լարերը ձգվում են, երբ հոսանքները նույն ուղղությամբ են, և վանվում, երբ հակառակ ուղղությամբ են։ Դաշտը հայտնաբերվում է մագնիսական սլաքի կամ հոսանքի վրա իր ազդեցությամբ։

Մագնիսական դաշտի գծերը տարվում են այնպես, որ յուրաքանչյուր կետում շոշափողը ցույց տա դաշտի ուղղությունը (փոքր սլաքի հյուսիսային բևեռի ուղղությունը)։ Ի տարբերություն էլեկտրական գծերի, դրանք միշտ **փակ** են․ մագնիսական լիցքեր չկան։ Ուղիղ լարի համար գծերը լարի շուրջ շրջանագծեր են, իսկ կոճի (սոլենոիդի) ներսում դաշտը գրեթե համասեռ է, և կոճն իրեն պահում է ինչպես ձողաձև մագնիս։

> **Աջ ձեռքի կանոն ուղիղ հոսանքի համար։** Բթամատն ուղղեք հոսանքի ուղղությամբ, ծալված մատները ցույց կտան դաշտի գծերի ուղղությունը։

Սոլենոիդի համար կանոնը հակառակն է․ մատները հետևում են գալարների հոսանքին, իսկ բթամատը ցույց է տալիս հյուսիսային բևեռը։

## Մագնիսական ինդուկցիայի վեկտորը

Դաշտի ուժգնությունը բնութագրվում է **մագնիսական ինդուկցիայով** $\\vec B$։ Դաշտում տեղադրենք $l$ երկարությամբ, $I$ հոսանքով կարճ ուղիղ հաղորդիչ և կողմնորոշենք այնպես, որ ուժը մեծագույնը լինի։ Հարաբերությունը

$$B = \\dfrac{F_{\\max}}{Il}$$

կախված չէ հաղորդիչից․ դա դաշտի հատկությունն է տվյալ կետում։ Միավորը **տեսլան** է․ $1$ Տ-ն այն դաշտն է, որը դաշտին ուղղահայաց տեղադրված $1$ մ երկարությամբ, $1$ Ա հոսանքով հաղորդչի վրա ազդում է $1$ Ն ուժով։ Բնորոշ արժեքներ․ Երկիր՝ $5 \\cdot 10^{-5}$ Տ, սառնարանի մագնիս՝ $10^{-2}$ Տ, ՄՌՏ սարք՝ $1{,}5$ Տ։

Մագնիսական ինդուկցիան ենթարկվում է սուպերպոզիցիայի սկզբունքին․ մի քանի աղբյուրների դաշտը դրանց դաշտերի վեկտորական գումարն է։ Երկար ուղիղ լարի դաշտը $B = \\dfrac{\\mu_0 I}{2\\pi r}$ է, որտեղ $\\mu_0 = 4\\pi \\cdot 10^{-7}$ Հն/մ, իսկ երկար սոլենոիդի ներսում՝ $B = \\mu_0 n I$, որտեղ $n$-ը գալարների թիվն է մեկ մետրում։

## Ամպերի ուժ

> Համասեռ $B$ դաշտում $I$ հոսանքով $l$ երկարությամբ ուղիղ հաղորդչի վրա ազդող ուժը
> $$F = BIl\\sin\\alpha$$
> է, որտեղ $\\alpha$-ն հաղորդչի և $\\vec B$-ի միջև անկյունն է։

> **Ձախ ձեռքի կանոն։** Ձախ ձեռքը պահեք այնպես, որ դաշտի գծերը մտնեն ափի մեջ, իսկ չորս մատներն ուղղված լինեն հոսանքի ուղղությամբ, այդ դեպքում դուրս հանված բթամատը ցույց կտա ուժի ուղղությունը։

Ուժը զրո է դաշտին զուգահեռ հաղորդչի համար և մեծագույնն է՝ ուղղահայացի համար։ Ամպերի ուժը միշտ ուղղահայաց է և՛ հոսանքին, և՛ $\\vec B$-ին։

**Շրջանակի պտտող մոմենտ։** Համասեռ դաշտում $a$ և $b$ կողմերով ուղղանկյուն շրջանակի $a$ կողմերի վրա ազդում են ուժերի զույգ կազմող ուժեր։ Պտտող մոմենտը $M = BIS\\sin\\varphi$ է, որտեղ $S = ab$, իսկ $\\varphi$-ն $\\vec B$-ի և շրջանակի նորմալի միջև անկյունն է։ Այսպես են աշխատում էլեկտրաշարժիչը և մագնիսաէլեկտրական ամպերաչափը․ շրջանակը պտտվում է, մինչև նորմալը համընկնի դաշտի հետ։

**Օրինակ 1։** $5$ Ա հոսանքով $20$ սմ հաղորդիչն ուղղահայաց է $0{,}4$ Տ դաշտին։ $F = 0{,}4 \\cdot 5 \\cdot 0{,}2 = 0{,}4$ Ն։ Եթե հաղորդիչը դաշտի հետ կազմեր $30°$, ուժը կլիներ $0{,}4 \\cdot \\sin 30° = 0{,}2$ Ն։

**Օրինակ 2։** $10$ գ զանգվածով, $50$ սմ երկարությամբ հորիզոնական լարը կախված է իրեն ուղղահայաց $0{,}5$ Տ հորիզոնական դաշտում։ Ի՞նչ հոսանքի դեպքում հենարանների լարվածությունը զրո կդառնա։ $BIl = mg$, $I = \\dfrac{0{,}01 \\cdot 10}{0{,}5 \\cdot 0{,}5} = 0{,}4$ Ա ($g = 10$ մ/վ²)։ Հոսանքը պետք է հոսի այնպես, որ Ամպերի ուժն ուղղված լինի վերև։

**Օրինակ 3։** Ուղիղ լարով անցնում է $10$ Ա հոսանք։ $2$ սմ հեռավորության վրա դաշտը $B = \\dfrac{4\\pi \\cdot 10^{-7} \\cdot 10}{2\\pi \\cdot 0{,}02} = 10^{-4}$ Տ է՝ Երկրի դաշտի կրկնապատիկը։ Լարի մոտ կողմնացույցը նկատելիորեն շեղվում է։

**Օրինակ 4։** Սոլենոիդն ունի $1000$ գալար $20$ սմ երկարության վրա և $2$ Ա հոսանք։ $n = 5000$ մ⁻¹, $B = 4\\pi \\cdot 10^{-7} \\cdot 5000 \\cdot 2 \\approx 1{,}26 \\cdot 10^{-2}$ Տ։ Երկաթե միջուկը սա կմեծացներ հարյուրավոր անգամ։

**Օրինակ 5։** Իրարից $10$ սմ հեռավորության վրա գտնվող երկու երկար զուգահեռ լարերով նույն ուղղությամբ անցնում է $20$-ական Ա հոսանք։ Մեկ լարի դաշտը մյուսի տեղում $B = \\dfrac{\\mu_0 I}{2\\pi r} = 4 \\cdot 10^{-5}$ Տ է, երկրորդ լարի $1$ մ հատվածի վրա ազդող ուժը՝ $F = BIl = 4 \\cdot 10^{-5} \\cdot 20 \\cdot 1 = 8 \\cdot 10^{-4}$ Ն, ձգողական։ Այս փոխազդեցությամբ նախկինում սահմանվում էր ամպերը։

**Օրինակ 6։** $10$ սմ կողմով, $50$ գալարով քառակուսի շրջանակով անցնում է $0{,}5$ Ա հոսանք $0{,}2$ Տ դաշտում։ Մեծագույն պտտող մոմենտը (նորմալն ուղղահայաց է $\\vec B$-ին) $M = NBIS = 50 \\cdot 0{,}2 \\cdot 0{,}5 \\cdot 0{,}01 = 0{,}05$ Ն·մ է։ $\\varphi = 30°$ դեպքում մոմենտը դրա կեսն է։

**Օրինակ 7։** $l$ երկարությամբ, $m$ զանգվածով հաղորդիչը հենված է հորիզոնական ռելսերին ուղղաձիգ $B$ դաշտում։ Շփման գործակիցը $\\mu$ է։ Սահելու համար անհրաժեշտ հոսանքը $I = \\dfrac{\\mu m g}{Bl}$ է․ $m = 0{,}1$ կգ, $l = 0{,}2$ մ, $B = 0{,}5$ Տ, $\\mu = 0{,}2$ դեպքում $I = \\dfrac{0{,}2 \\cdot 1}{0{,}1} = 2$ Ա։

**Օրինակ 8։** Ինչո՞ւ է էլեկտրաշարժիչը շարունակում պտտվել՝ նորմալը դաշտի ուղղությամբ կանգ առնելու փոխարեն։ Յուրաքանչյուր կես պտույտին **կոլեկտորը** փոխում է շրջանակի հոսանքի ուղղությունը, ուստի պտտող մոմենտը միշտ գործում է նույն պտտման ուղղությամբ։ Իրական շարժիչներն ունեն տարբեր անկյուններով բազմաթիվ շրջանակներ, որպեսզի մոմենտը գրեթե հաստատուն լինի։

## Վարժություններ

1. $3$ Ա հոսանքով $40$ սմ հաղորդիչն ուղղահայաց է $0{,}5$ Տ դաշտին։ Գտեք ուժը։
2. $4$ Ա հոսանքով $25$ սմ հաղորդչի վրա ազդող ուժը $0{,}3$ Ն է, երբ հաղորդիչը դաշտի հետ կազմում է $90°$։ Գտեք $B$-ն։
3. $0{,}2$ Տ դաշտի հետ $45°$ կազմող, $5$ Ա հոսանքով հաղորդչի վրա ազդում է $0{,}1$ Ն ուժ։ Գտեք նրա երկարությունը։
4. Գտեք դաշտը $4$ Ա հոսանքով ուղիղ լարից $5$ սմ հեռավորության վրա։
5. Սոլենոիդն ունի $400$ գալար $10$ սմ-ի վրա և $1{,}5$ Ա հոսանք։ Գտեք $B$-ն ներսում։
6. $6$ գ զանգվածով $30$ սմ լարը գտնվում է $0{,}1$ Տ հորիզոնական դաշտում։ Ի՞նչ հոսանքի դեպքում (և դաշտի նկատմամբ ի՞նչ ուղղությամբ) այն անկշիռ կդառնա։ $g = 10$ մ/վ²։
7. $20$ սմ² մակերեսով, $100$ գալարով շրջանակով անցնում է $2$ Ա հոսանք $0{,}3$ Տ դաշտում։ Գտեք մեծագույն պտտող մոմենտը։
8. Իրարից $5$ սմ հեռավորության վրա գտնվող երկու զուգահեռ լարերով հակառակ ուղղություններով անցնում են $10$ Ա և $30$ Ա հոսանքներ։ Գտեք մեկ մետրին ընկնող ուժը և ասեք՝ ձգվո՞ւմ են, թե՞ վանվում։

### Պատասխաններ

1. $0{,}6$ Ն։ 2. $0{,}3$ Տ։ 3. $l = \\dfrac{0{,}1}{0{,}2 \\cdot 5 \\cdot \\sin 45°} \\approx 0{,}14$ մ։ 4. $1{,}6 \\cdot 10^{-5}$ Տ։ 5. $n = 4000$ մ⁻¹, $B \\approx 7{,}5 \\cdot 10^{-3}$ Տ։ 6. $I = \\dfrac{0{,}006 \\cdot 10}{0{,}1 \\cdot 0{,}3} = 2$ Ա՝ դաշտին ուղղահայաց։ 7. $M = 100 \\cdot 0{,}3 \\cdot 2 \\cdot 0{,}002 = 0{,}12$ Ն·մ։ 8. $B = \\dfrac{\\mu_0 \\cdot 10}{2\\pi \\cdot 0{,}05} = 4 \\cdot 10^{-5}$ Տ, $F/l = 4 \\cdot 10^{-5} \\cdot 30 = 1{,}2 \\cdot 10^{-3}$ Ն/մ, վանվում են։`,
        ru: `## Магнитное поле

Магнитное поле существует вокруг магнитов и вокруг **движущихся зарядов**, то есть вокруг токов. Эрстед (1820) увидел, что стрелка компаса поворачивается возле провода с током; Ампер показал, что два параллельных провода притягиваются, когда токи текут в одну сторону, и отталкиваются, когда в противоположные. Поле обнаруживается по его действию на магнитную стрелку или на ток.

Линии магнитного поля проводят так, чтобы касательная в каждой точке давала направление поля (направление северного полюса маленькой стрелки). В отличие от электрических линий, они всегда **замкнуты**: магнитных зарядов нет. Для прямого провода линии суть окружности вокруг провода; внутри катушки (соленоида) поле почти однородно, и катушка ведёт себя как полосовой магнит.

> **Правило правой руки для прямого тока.** Направьте большой палец вдоль тока; согнутые пальцы покажут направление линий поля.

Для соленоида правило обратное: пальцы следуют за током в витках, а большой палец указывает на северный полюс.

## Вектор магнитной индукции

Силу поля характеризует **магнитная индукция** $\\vec B$. Поместим в поле короткий прямой проводник длиной $l$ с током $I$ и расположим его так, чтобы сила была наибольшей. Отношение

$$B = \\dfrac{F_{\\max}}{Il}$$

не зависит от проводника: это свойство поля в данной точке. Единица — **тесла**: $1$ Тл — поле, действующее с силой $1$ Н на проводник длиной $1$ м с током $1$ А, расположенный поперёк поля. Характерные значения: Земля $5 \\cdot 10^{-5}$ Тл, магнит на холодильнике $10^{-2}$ Тл, томограф МРТ $1{,}5$ Тл.

Магнитная индукция подчиняется принципу суперпозиции: поле нескольких источников есть векторная сумма их полей. Поле длинного прямого провода $B = \\dfrac{\\mu_0 I}{2\\pi r}$, где $\\mu_0 = 4\\pi \\cdot 10^{-7}$ Гн/м; поле внутри длинного соленоида $B = \\mu_0 n I$, где $n$ — число витков на метр.

## Сила Ампера

> Сила, действующая на прямой проводник длиной $l$ с током $I$ в однородном поле $B$, равна
> $$F = BIl\\sin\\alpha,$$
> где $\\alpha$ — угол между проводником и $\\vec B$.

> **Правило левой руки.** Расположите левую руку так, чтобы линии поля входили в ладонь, а четыре пальца были направлены по току; отогнутый большой палец покажет направление силы.

Сила равна нулю для проводника, параллельного полю, и наибольшая для перпендикулярного. Сила Ампера всегда перпендикулярна и току, и $\\vec B$.

**Момент сил на рамку.** На две стороны $a$ прямоугольной рамки со сторонами $a$ и $b$ в однородном поле действуют силы, образующие пару. Вращающий момент $M = BIS\\sin\\varphi$, где $S = ab$, а $\\varphi$ — угол между $\\vec B$ и нормалью к рамке. Так работают электродвигатель и магнитоэлектрический амперметр: рамка поворачивается, пока её нормаль не совпадёт с полем.

**Пример 1.** Проводник длиной $20$ см с током $5$ А перпендикулярен полю $0{,}4$ Тл. $F = 0{,}4 \\cdot 5 \\cdot 0{,}2 = 0{,}4$ Н. Если бы проводник составлял с полем $30°$, сила была бы $0{,}4 \\cdot \\sin 30° = 0{,}2$ Н.

**Пример 2.** Горизонтальный провод массой $10$ г и длиной $50$ см висит в горизонтальном поле $0{,}5$ Тл, направленном поперёк него. При каком токе натяжение подвесов станет нулём? $BIl = mg$, $I = \\dfrac{0{,}01 \\cdot 10}{0{,}5 \\cdot 0{,}5} = 0{,}4$ А ($g = 10$ м/с²). Ток должен течь так, чтобы сила Ампера была направлена вверх.

**Пример 3.** По прямому проводу течёт ток $10$ А. Поле на расстоянии $2$ см равно $B = \\dfrac{4\\pi \\cdot 10^{-7} \\cdot 10}{2\\pi \\cdot 0{,}02} = 10^{-4}$ Тл — вдвое больше земного. Компас рядом с проводом заметно отклоняется.

**Пример 4.** Соленоид имеет $1000$ витков на длине $20$ см и ток $2$ А. $n = 5000$ м⁻¹, $B = 4\\pi \\cdot 10^{-7} \\cdot 5000 \\cdot 2 \\approx 1{,}26 \\cdot 10^{-2}$ Тл. Железный сердечник увеличил бы это в сотни раз.

**Пример 5.** Два длинных параллельных провода на расстоянии $10$ см несут по $20$ А в одном направлении. Поле одного провода у другого $B = \\dfrac{\\mu_0 I}{2\\pi r} = 4 \\cdot 10^{-5}$ Тл; сила на $1$ м второго провода $F = BIl = 4 \\cdot 10^{-5} \\cdot 20 \\cdot 1 = 8 \\cdot 10^{-4}$ Н, притяжение. Через это взаимодействие раньше определяли ампер.

**Пример 6.** Квадратная рамка со стороной $10$ см и $50$ витками несёт ток $0{,}5$ А в поле $0{,}2$ Тл. Наибольший момент (нормаль перпендикулярна $\\vec B$) равен $M = NBIS = 50 \\cdot 0{,}2 \\cdot 0{,}5 \\cdot 0{,}01 = 0{,}05$ Н·м. При $\\varphi = 30°$ момент вдвое меньше.

**Пример 7.** Проводник длиной $l$ и массой $m$ лежит на горизонтальных рельсах в вертикальном поле $B$. Коэффициент трения $\\mu$. Ток, при котором он начнёт скользить: $I = \\dfrac{\\mu m g}{Bl}$; при $m = 0{,}1$ кг, $l = 0{,}2$ м, $B = 0{,}5$ Тл, $\\mu = 0{,}2$ получаем $I = \\dfrac{0{,}2 \\cdot 1}{0{,}1} = 2$ А.

**Пример 8.** Почему электродвигатель продолжает вращаться, а не останавливается, когда нормаль рамки совпадает с полем? Каждые полоборота **коллектор** меняет направление тока в рамке, поэтому момент всегда действует в одну сторону вращения. В реальных двигателях много рамок под разными углами, так что момент почти постоянен.

## Упражнения

1. Проводник длиной $40$ см с током $3$ А перпендикулярен полю $0{,}5$ Тл. Найдите силу.
2. Сила, действующая на проводник длиной $25$ см с током $4$ А, равна $0{,}3$ Н при угле $90°$ к полю. Найдите $B$.
3. Проводник под углом $45°$ к полю $0{,}2$ Тл с током $5$ А испытывает силу $0{,}1$ Н. Найдите его длину.
4. Найдите поле на расстоянии $5$ см от прямого провода с током $4$ А.
5. Соленоид с $400$ витками на $10$ см несёт ток $1{,}5$ А. Найдите $B$ внутри.
6. Провод длиной $30$ см и массой $6$ г находится в горизонтальном поле $0{,}1$ Тл. При каком токе (и в каком направлении относительно поля) он станет невесомым? $g = 10$ м/с².
7. Рамка площадью $20$ см² со $100$ витками несёт ток $2$ А в поле $0{,}3$ Тл. Найдите наибольший момент сил.
8. Два параллельных провода на расстоянии $5$ см несут токи $10$ А и $30$ А в противоположных направлениях. Найдите силу на метр длины и скажите, притягиваются они или отталкиваются.

### Ответы

1. $0{,}6$ Н. 2. $0{,}3$ Тл. 3. $l = \\dfrac{0{,}1}{0{,}2 \\cdot 5 \\cdot \\sin 45°} \\approx 0{,}14$ м. 4. $1{,}6 \\cdot 10^{-5}$ Тл. 5. $n = 4000$ м⁻¹, $B \\approx 7{,}5 \\cdot 10^{-3}$ Тл. 6. $I = \\dfrac{0{,}006 \\cdot 10}{0{,}1 \\cdot 0{,}3} = 2$ А, перпендикулярно полю. 7. $M = 100 \\cdot 0{,}3 \\cdot 2 \\cdot 0{,}002 = 0{,}12$ Н·м. 8. $B = \\dfrac{\\mu_0 \\cdot 10}{2\\pi \\cdot 0{,}05} = 4 \\cdot 10^{-5}$ Тл, $F/l = 4 \\cdot 10^{-5} \\cdot 30 = 1{,}2 \\cdot 10^{-3}$ Н/м, отталкиваются.`,
      },
      [
        q(t("Magnetic field lines are…", "Մագնիսական դաշտի գծերը…", "Линии магнитного поля…"), [t("always closed", "միշտ փակ են", "всегда замкнуты"), t("start on north poles and end at infinity", "սկսվում են հյուսիսային բևեռներից և ավարտվում անվերջությունում", "начинаются на северных полюсах и уходят в бесконечность"), t("straight lines", "ուղիղ գծեր են", "прямые линии")], 0),
        q(t("The unit of magnetic induction is the…", "Մագնիսական ինդուկցիայի միավորը…", "Единица магнитной индукции —"), [t("weber", "վեբերն է", "вебер"), t("tesla", "տեսլան է", "тесла"), t("henry", "հենրին է", "генри")], 1),
        q(t("The Ampere force on a conductor parallel to the field is…", "Դաշտին զուգահեռ հաղորդչի վրա ազդող Ամպերի ուժը…", "Сила Ампера на проводник, параллельный полю,…"), [t("maximal", "մեծագույնն է", "максимальна"), t("zero", "զրո է", "равна нулю"), t("directed along the field", "ուղղված է դաշտի երկայնքով", "направлена вдоль поля")], 1),
        q(t("A 0.5 m conductor with 2 A perpendicular to a 0.3 T field experiences…", "0,3 Տ դաշտին ուղղահայաց, 2 Ա հոսանքով 0,5 մ հաղորդչի վրա ազդում է…", "На проводник длиной 0,5 м с током 2 А, перпендикулярный полю 0,3 Тл, действует сила…"), [t("0.3 N", "0,3 Ն ուժ", "0,3 Н"), t("3 N", "3 Ն ուժ", "3 Н"), t("0.03 N", "0,03 Ն ուժ", "0,03 Н")], 0),
        q(t("The direction of the Ampere force is found with the…", "Ամպերի ուժի ուղղությունը որոշվում է…", "Направление силы Ампера находят по…"), [t("right-hand rule", "աջ ձեռքի կանոնով", "правилу правой руки"), t("left-hand rule", "ձախ ձեռքի կանոնով", "правилу левой руки"), t("Lenz rule", "Լենցի կանոնով", "правилу Ленца")], 1),
        q(t("Two parallel wires with currents in the same direction…", "Նույն ուղղությամբ հոսանքներով երկու զուգահեռ լարեր…", "Два параллельных провода с токами одного направления…"), [t("attract", "ձգվում են", "притягиваются"), t("repel", "վանվում են", "отталкиваются"), t("do not interact", "չեն փոխազդում", "не взаимодействуют")], 0),
      ],
    ),
    lesson(
      "lorentz-force",
      ["Lorentz force; charged particles in fields", "Լորենցի ուժ, լիցքավորված մասնիկները դաշտերում", "Сила Лоренца; движение заряженных частиц в полях"],
      {
        en: ["Compute the Lorentz force F = qvB sin α and find its direction for positive and negative charges", "Describe the circular motion of a charge in a uniform magnetic field: radius, period and cyclotron frequency", "Explain the operation of the cyclotron, the mass spectrometer and the velocity selector"],
        hy: ["Հաշվել Լորենցի ուժը F = qvB sin α բանաձևով և որոշել ուղղությունը դրական և բացասական լիցքերի համար", "Նկարագրել լիցքի շրջանային շարժումը համասեռ մագնիսական դաշտում․ շառավիղ, պարբերություն և ցիկլոտրոնային հաճախություն", "Բացատրել ցիկլոտրոնի, զանգվածային սպեկտրոմետրի և արագությունների ընտրիչի աշխատանքը"],
        ru: ["Вычислять силу Лоренца F = qvB sin α и находить её направление для положительных и отрицательных зарядов", "Описывать движение заряда по окружности в однородном магнитном поле: радиус, период и циклотронную частоту", "Объяснять работу циклотрона, масс-спектрометра и селектора скоростей"],
      },
      {
        en: `## From the Ampere force to the Lorentz force

A current is a stream of moving charges, so the Ampere force on a conductor is the sum of forces on the individual charges. In a conductor of length $l$ with $N$ carriers of charge $q$ moving at speed $v$ the current is $I = \\dfrac{Nqv}{l}$, so $F = BIl\\sin\\alpha = NqvB\\sin\\alpha$ and each carrier feels

> **Lorentz force.** $$F_L = \\lvert q\\rvert vB\\sin\\alpha,$$ where $\\alpha$ is the angle between the velocity and $\\vec B$.

The direction is given by the left-hand rule applied to the direction of motion of a **positive** charge; for a negative charge (an electron) the force is reversed. The Lorentz force is always perpendicular to the velocity, so it **does no work**: it changes the direction of motion but not the speed or the kinetic energy.

## Motion in a uniform magnetic field

**Velocity along the field** ($\\alpha = 0$): no force, the particle moves uniformly in a straight line.

**Velocity perpendicular to the field** ($\\alpha = 90°$): the force has constant magnitude $qvB$ and is always perpendicular to the velocity, so it acts as a centripetal force. The particle moves in a circle:

$$qvB = \\dfrac{mv^2}{R} \\quad\\Rightarrow\\quad R = \\dfrac{mv}{qB}, \\qquad T = \\dfrac{2\\pi R}{v} = \\dfrac{2\\pi m}{qB}.$$

The period does not depend on the speed: faster particles move on larger circles but take the same time. The frequency $\\nu = \\dfrac{qB}{2\\pi m}$ is called the **cyclotron frequency**.

**Velocity at an arbitrary angle.** Decompose $\\vec v$ into $v_\\parallel = v\\cos\\alpha$ along the field and $v_\\perp = v\\sin\\alpha$ across it. The particle circles with radius $R = \\dfrac{mv_\\perp}{qB}$ and drifts along the field at $v_\\parallel$: its path is a **helix** with pitch $h = v_\\parallel T$. Charged particles from the Sun spiral along the Earth's field lines toward the poles and produce auroras.

## Applications

- **Cyclotron.** Two hollow D-shaped electrodes in a magnetic field; an alternating voltage at the cyclotron frequency accelerates the particle each time it crosses the gap, while the field keeps it circling with a growing radius.
- **Mass spectrometer.** Ions with the same speed enter a field; $R = \\dfrac{mv}{qB}$ sorts them by $\\dfrac{m}{q}$, which is how isotopes are separated and weighed.
- **Velocity selector.** Crossed electric and magnetic fields: a particle goes straight only when $qE = qvB$, that is $v = \\dfrac{E}{B}$.
- **Hall effect.** In a current-carrying strip in a magnetic field the carriers are pushed to one side, creating a transverse voltage used in magnetic field sensors.

**Example 1.** An electron moves at $2 \\cdot 10^6$ m/s perpendicular to a field of $0{.}01$ T. $F_L = 1{.}6 \\cdot 10^{-19} \\cdot 2 \\cdot 10^6 \\cdot 0{.}01 = 3{.}2 \\cdot 10^{-15}$ N. Its weight is $9{.}1 \\cdot 10^{-30}$ N, fifteen orders of magnitude less, so gravity is ignored.

**Example 2.** The same electron ($m = 9{.}1 \\cdot 10^{-31}$ kg) moves on a circle of radius $R = \\dfrac{9{.}1 \\cdot 10^{-31} \\cdot 2 \\cdot 10^6}{1{.}6 \\cdot 10^{-19} \\cdot 0{.}01} \\approx 1{.}1 \\cdot 10^{-3}$ m, about $1$ mm. Period: $T = \\dfrac{2\\pi m}{qB} \\approx 3{.}6 \\cdot 10^{-9}$ s.

**Example 3.** A proton ($m = 1{.}67 \\cdot 10^{-27}$ kg) accelerated through $U = 1000$ V enters a field of $0{.}1$ T perpendicularly. $v = \\sqrt{\\dfrac{2qU}{m}} = \\sqrt{\\dfrac{2 \\cdot 1{.}6 \\cdot 10^{-19} \\cdot 1000}{1{.}67 \\cdot 10^{-27}}} \\approx 4{.}4 \\cdot 10^5$ m/s, $R = \\dfrac{mv}{qB} \\approx 4{.}6$ cm.

**Example 4.** A proton and an alpha particle ($m = 4m_p$, $q = 2e$) enter the same field with the same speed. $R \\propto \\dfrac{m}{q}$, so the alpha particle's radius is $\\dfrac{4}{2} = 2$ times larger. With the same kinetic energy instead, $R = \\dfrac{\\sqrt{2mE_k}}{qB} \\propto \\dfrac{\\sqrt m}{q}$, and the ratio is $\\dfrac{2}{2} = 1$: equal radii.

**Example 5.** In a velocity selector $E = 10^4$ V/m and $B = 0{.}05$ T. Particles with $v = \\dfrac{E}{B} = 2 \\cdot 10^5$ m/s pass straight; faster ones are deflected toward the magnetic force, slower ones toward the electric force.

**Example 6.** An electron moves at $v = 10^7$ m/s at $60°$ to a field of $10^{-3}$ T. $v_\\perp = 10^7 \\sin 60° \\approx 8{.}7 \\cdot 10^6$ m/s, $v_\\parallel = 5 \\cdot 10^6$ m/s. Radius $R = \\dfrac{9{.}1 \\cdot 10^{-31} \\cdot 8{.}7 \\cdot 10^6}{1{.}6 \\cdot 10^{-19} \\cdot 10^{-3}} \\approx 4{.}9$ cm, period $T = \\dfrac{2\\pi m}{qB} \\approx 3{.}6 \\cdot 10^{-8}$ s, pitch $h = v_\\parallel T \\approx 18$ cm.

**Example 7.** In a mass spectrometer singly ionised neon atoms with the same speed hit the plate at $R_{20} = 20{.}0$ cm. Where does the isotope with mass number $22$ land? $R \\propto m$, so $R_{22} = 20{.}0 \\cdot \\dfrac{22}{20} = 22{.}0$ cm; the two spots are $2$ cm apart (the diameters differ by $4$ cm).

**Example 8.** Why does the Lorentz force not change the kinetic energy? Work is $A = F s\\cos\\beta$, and $\\beta = 90°$ between the force and the displacement at every instant, so $A = 0$. Consequently a magnetic field alone cannot accelerate a particle; accelerators use electric fields for energy and magnetic fields for steering.

## Exercises

1. Find the force on a proton moving at $5 \\cdot 10^5$ m/s perpendicular to a field of $0{.}2$ T.
2. An electron moves at $3 \\cdot 10^6$ m/s at $30°$ to a field of $0{.}02$ T. Find the Lorentz force.
3. Find the radius of the circle for an electron at $4 \\cdot 10^6$ m/s in a field of $2 \\cdot 10^{-3}$ T.
4. Find the period of revolution of a proton in a field of $1$ T. Does it depend on the speed?
5. A charged particle moves in a circle of radius $10$ cm in a field of $0{.}5$ T with speed $10^6$ m/s. Find its $\\dfrac{q}{m}$ ratio.
6. Which fields allow a particle to pass straight through a velocity selector at $3 \\cdot 10^5$ m/s if $B = 0{.}02$ T?
7. A proton accelerated through $500$ V enters a field of $0{.}05$ T perpendicularly. Find the radius.
8. An electron moves at $10^6$ m/s at $45°$ to a field of $10^{-4}$ T. Find the radius and the pitch of the helix.

### Answers

1. $1{.}6 \\cdot 10^{-14}$ N. 2. $F = 1{.}6 \\cdot 10^{-19} \\cdot 3 \\cdot 10^6 \\cdot 0{.}02 \\cdot 0{.}5 = 4{.}8 \\cdot 10^{-15}$ N. 3. $R = \\dfrac{9{.}1 \\cdot 10^{-31} \\cdot 4 \\cdot 10^6}{1{.}6 \\cdot 10^{-19} \\cdot 2 \\cdot 10^{-3}} \\approx 1{.}1$ cm. 4. $T = \\dfrac{2\\pi \\cdot 1{.}67 \\cdot 10^{-27}}{1{.}6 \\cdot 10^{-19}} \\approx 6{.}6 \\cdot 10^{-8}$ s; no. 5. $\\dfrac{q}{m} = \\dfrac{v}{RB} = 2 \\cdot 10^7$ C/kg. 6. $E = vB = 6000$ V/m, perpendicular to $\\vec B$ and to $\\vec v$. 7. $v \\approx 3{.}1 \\cdot 10^5$ m/s, $R \\approx 6{.}5$ cm. 8. $v_\\perp = v_\\parallel \\approx 7{.}1 \\cdot 10^5$ m/s, $R \\approx 4$ cm, $T \\approx 3{.}6 \\cdot 10^{-7}$ s, $h \\approx 25$ cm.`,
        hy: `## Ամպերի ուժից դեպի Լորենցի ուժ

Հոսանքը շարժվող լիցքերի հոսք է, ուստի հաղորդչի վրա ազդող Ամպերի ուժն առանձին լիցքերի վրա ազդող ուժերի գումարն է։ $l$ երկարությամբ հաղորդչում $v$ արագությամբ շարժվող $q$ լիցքով $N$ կրիչների դեպքում հոսանքը $I = \\dfrac{Nqv}{l}$ է, ուստի $F = BIl\\sin\\alpha = NqvB\\sin\\alpha$, և յուրաքանչյուր կրիչի վրա ազդում է

> **Լորենցի ուժ։** $$F_L = \\lvert q\\rvert vB\\sin\\alpha$$ ուժը, որտեղ $\\alpha$-ն արագության և $\\vec B$-ի միջև անկյունն է։

Ուղղությունը որոշվում է ձախ ձեռքի կանոնով՝ կիրառված **դրական** լիցքի շարժման ուղղությանը, իսկ բացասական լիցքի (էլեկտրոնի) համար ուժը հակառակ է։ Լորենցի ուժը միշտ ուղղահայաց է արագությանը, ուստի **աշխատանք չի կատարում**․ այն փոխում է շարժման ուղղությունը, բայց ոչ արագության մեծությունն ու կինետիկ էներգիան։

## Շարժումը համասեռ մագնիսական դաշտում

**Արագությունը դաշտի երկայնքով է** ($\\alpha = 0$)․ ուժ չկա, մասնիկը շարժվում է հավասարաչափ ուղղագիծ։

**Արագությունն ուղղահայաց է դաշտին** ($\\alpha = 90°$)․ ուժն ունի հաստատուն $qvB$ մեծություն և միշտ ուղղահայաց է արագությանը, ուստի կենտրոնաձիգ ուժի դեր է կատարում։ Մասնիկը շարժվում է շրջանագծով․

$$qvB = \\dfrac{mv^2}{R} \\quad\\Rightarrow\\quad R = \\dfrac{mv}{qB}, \\qquad T = \\dfrac{2\\pi R}{v} = \\dfrac{2\\pi m}{qB}$$

Պարբերությունը կախված չէ արագությունից․ ավելի արագ մասնիկները շարժվում են ավելի մեծ շրջանագծերով, բայց ծախսում են նույն ժամանակը։ $\\nu = \\dfrac{qB}{2\\pi m}$ հաճախությունը կոչվում է **ցիկլոտրոնային հաճախություն**։

**Արագությունը կամայական անկյան տակ է։** $\\vec v$-ն վերլուծենք դաշտի երկայնքով $v_\\parallel = v\\cos\\alpha$ և դաշտին ուղղահայաց $v_\\perp = v\\sin\\alpha$ բաղադրիչների։ Մասնիկը պտտվում է $R = \\dfrac{mv_\\perp}{qB}$ շառավղով և դաշտի երկայնքով տեղափոխվում $v_\\parallel$ արագությամբ․ հետագիծը **պարույր** է՝ $h = v_\\parallel T$ քայլով։ Արևից եկող լիցքավորված մասնիկները պարուրաձև շարժվում են Երկրի դաշտի գծերի երկայնքով դեպի բևեռները և առաջացնում բևեռափայլ։

## Կիրառություններ

- **Ցիկլոտրոն։** Մագնիսական դաշտում երկու սնամեջ D-աձև էլեկտրոդներ․ ցիկլոտրոնային հաճախությամբ փոփոխական լարումն արագացնում է մասնիկն ամեն անգամ, երբ այն անցնում է ճեղքով, իսկ դաշտը պահում է այն շրջանագծով՝ աճող շառավղով։
- **Զանգվածային սպեկտրոմետր։** Նույն արագությամբ իոնները մտնում են դաշտ, $R = \\dfrac{mv}{qB}$-ը դրանք դասավորում է ըստ $\\dfrac{m}{q}$-ի․ այսպես են բաժանվում և կշռվում իզոտոպները։
- **Արագությունների ընտրիչ։** Խաչված էլեկտրական և մագնիսական դաշտեր․ մասնիկն ուղիղ է անցնում միայն, երբ $qE = qvB$, այսինքն՝ $v = \\dfrac{E}{B}$։
- **Հոլի երևույթ։** Մագնիսական դաշտում հոսանքակիր թիթեղում կրիչները մղվում են մի կողմ՝ ստեղծելով լայնական լարում, որն օգտագործվում է մագնիսական դաշտի տվիչներում։

**Օրինակ 1։** Էլեկտրոնը շարժվում է $2 \\cdot 10^6$ մ/վ արագությամբ՝ ուղղահայաց $0{,}01$ Տ դաշտին։ $F_L = 1{,}6 \\cdot 10^{-19} \\cdot 2 \\cdot 10^6 \\cdot 0{,}01 = 3{,}2 \\cdot 10^{-15}$ Ն։ Նրա կշիռը $9{,}1 \\cdot 10^{-30}$ Ն է՝ տասնհինգ կարգ փոքր, ուստի ծանրության ուժն անտեսվում է։

**Օրինակ 2։** Նույն էլեկտրոնը ($m = 9{,}1 \\cdot 10^{-31}$ կգ) շարժվում է $R = \\dfrac{9{,}1 \\cdot 10^{-31} \\cdot 2 \\cdot 10^6}{1{,}6 \\cdot 10^{-19} \\cdot 0{,}01} \\approx 1{,}1 \\cdot 10^{-3}$ մ, մոտ $1$ մմ շառավղով շրջանագծով։ Պարբերությունը՝ $T = \\dfrac{2\\pi m}{qB} \\approx 3{,}6 \\cdot 10^{-9}$ վ։

**Օրինակ 3։** $U = 1000$ Վ լարումով արագացված պրոտոնը ($m = 1{,}67 \\cdot 10^{-27}$ կգ) ուղղահայաց մտնում է $0{,}1$ Տ դաշտ։ $v = \\sqrt{\\dfrac{2qU}{m}} = \\sqrt{\\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-19} \\cdot 1000}{1{,}67 \\cdot 10^{-27}}} \\approx 4{,}4 \\cdot 10^5$ մ/վ, $R = \\dfrac{mv}{qB} \\approx 4{,}6$ սմ։

**Օրինակ 4։** Պրոտոնը և ալֆա մասնիկը ($m = 4m_p$, $q = 2e$) նույն արագությամբ մտնում են նույն դաշտ։ $R \\propto \\dfrac{m}{q}$, ուստի ալֆա մասնիկի շառավիղը $\\dfrac{4}{2} = 2$ անգամ մեծ է։ Իսկ նույն կինետիկ էներգիայի դեպքում $R = \\dfrac{\\sqrt{2mE_k}}{qB} \\propto \\dfrac{\\sqrt m}{q}$, և հարաբերությունը $\\dfrac{2}{2} = 1$ է․ շառավիղները հավասար են։

**Օրինակ 5։** Արագությունների ընտրիչում $E = 10^4$ Վ/մ և $B = 0{,}05$ Տ։ $v = \\dfrac{E}{B} = 2 \\cdot 10^5$ մ/վ արագությամբ մասնիկներն անցնում են ուղիղ, ավելի արագները շեղվում են մագնիսական ուժի կողմը, ավելի դանդաղները՝ էլեկտրական ուժի։

**Օրինակ 6։** Էլեկտրոնը շարժվում է $v = 10^7$ մ/վ արագությամբ՝ $10^{-3}$ Տ դաշտի հետ $60°$ անկյան տակ։ $v_\\perp = 10^7 \\sin 60° \\approx 8{,}7 \\cdot 10^6$ մ/վ, $v_\\parallel = 5 \\cdot 10^6$ մ/վ։ Շառավիղը՝ $R = \\dfrac{9{,}1 \\cdot 10^{-31} \\cdot 8{,}7 \\cdot 10^6}{1{,}6 \\cdot 10^{-19} \\cdot 10^{-3}} \\approx 4{,}9$ սմ, պարբերությունը՝ $T = \\dfrac{2\\pi m}{qB} \\approx 3{,}6 \\cdot 10^{-8}$ վ, քայլը՝ $h = v_\\parallel T \\approx 18$ սմ։

**Օրինակ 7։** Զանգվածային սպեկտրոմետրում նույն արագությամբ միակի իոնացված նեոնի ատոմները թիթեղին են հասնում $R_{20} = 20{,}0$ սմ-ի վրա։ Որտե՞ղ կընկնի $22$ զանգվածային թվով իզոտոպը։ $R \\propto m$, ուստի $R_{22} = 20{,}0 \\cdot \\dfrac{22}{20} = 22{,}0$ սմ, երկու հետքերն իրարից $2$ սմ են հեռու (տրամագծերը տարբերվում են $4$ սմ-ով)։

**Օրինակ 8։** Ինչո՞ւ Լորենցի ուժը չի փոխում կինետիկ էներգիան։ Աշխատանքը $A = F s\\cos\\beta$ է, իսկ ուժի և տեղափոխության միջև անկյունն ամեն պահի $\\beta = 90°$ է, ուստի $A = 0$։ Հետևաբար միայն մագնիսական դաշտը չի կարող արագացնել մասնիկը․ արագացուցիչներն էներգիայի համար օգտագործում են էլեկտրական դաշտեր, իսկ ուղղորդման համար՝ մագնիսական։

## Վարժություններ

1. Գտեք $0{,}2$ Տ դաշտին ուղղահայաց $5 \\cdot 10^5$ մ/վ արագությամբ շարժվող պրոտոնի վրա ազդող ուժը։
2. Էլեկտրոնը շարժվում է $3 \\cdot 10^6$ մ/վ արագությամբ՝ $0{,}02$ Տ դաշտի հետ $30°$ անկյան տակ։ Գտեք Լորենցի ուժը։
3. Գտեք $2 \\cdot 10^{-3}$ Տ դաշտում $4 \\cdot 10^6$ մ/վ արագությամբ էլեկտրոնի շրջանագծի շառավիղը։
4. Գտեք պրոտոնի պտույտի պարբերությունը $1$ Տ դաշտում։ Կախվա՞ծ է այն արագությունից։
5. Լիցքավորված մասնիկը $0{,}5$ Տ դաշտում շարժվում է $10$ սմ շառավղով շրջանագծով $10^6$ մ/վ արագությամբ։ Գտեք նրա $\\dfrac{q}{m}$ հարաբերությունը։
6. Ի՞նչ դաշտերի դեպքում մասնիկը $3 \\cdot 10^5$ մ/վ արագությամբ ուղիղ կանցնի արագությունների ընտրիչով, եթե $B = 0{,}02$ Տ։
7. $500$ Վ-ով արագացված պրոտոնն ուղղահայաց մտնում է $0{,}05$ Տ դաշտ։ Գտեք շառավիղը։
8. Էլեկտրոնը շարժվում է $10^6$ մ/վ արագությամբ՝ $10^{-4}$ Տ դաշտի հետ $45°$ անկյան տակ։ Գտեք պարույրի շառավիղն ու քայլը։

### Պատասխաններ

1. $1{,}6 \\cdot 10^{-14}$ Ն։ 2. $F = 1{,}6 \\cdot 10^{-19} \\cdot 3 \\cdot 10^6 \\cdot 0{,}02 \\cdot 0{,}5 = 4{,}8 \\cdot 10^{-15}$ Ն։ 3. $R = \\dfrac{9{,}1 \\cdot 10^{-31} \\cdot 4 \\cdot 10^6}{1{,}6 \\cdot 10^{-19} \\cdot 2 \\cdot 10^{-3}} \\approx 1{,}1$ սմ։ 4. $T = \\dfrac{2\\pi \\cdot 1{,}67 \\cdot 10^{-27}}{1{,}6 \\cdot 10^{-19}} \\approx 6{,}6 \\cdot 10^{-8}$ վ, ոչ։ 5. $\\dfrac{q}{m} = \\dfrac{v}{RB} = 2 \\cdot 10^7$ Կլ/կգ։ 6. $E = vB = 6000$ Վ/մ՝ ուղղահայաց $\\vec B$-ին և $\\vec v$-ին։ 7. $v \\approx 3{,}1 \\cdot 10^5$ մ/վ, $R \\approx 6{,}5$ սմ։ 8. $v_\\perp = v_\\parallel \\approx 7{,}1 \\cdot 10^5$ մ/վ, $R \\approx 4$ սմ, $T \\approx 3{,}6 \\cdot 10^{-7}$ վ, $h \\approx 25$ սմ։`,
        ru: `## От силы Ампера к силе Лоренца

Ток — это поток движущихся зарядов, поэтому сила Ампера на проводник есть сумма сил, действующих на отдельные заряды. В проводнике длиной $l$ с $N$ носителями заряда $q$, движущимися со скоростью $v$, ток равен $I = \\dfrac{Nqv}{l}$, так что $F = BIl\\sin\\alpha = NqvB\\sin\\alpha$, и на каждый носитель действует

> **Сила Лоренца.** $$F_L = \\lvert q\\rvert vB\\sin\\alpha,$$ где $\\alpha$ — угол между скоростью и $\\vec B$.

Направление даёт правило левой руки, применённое к направлению движения **положительного** заряда; для отрицательного заряда (электрона) сила противоположна. Сила Лоренца всегда перпендикулярна скорости, поэтому она **не совершает работы**: меняет направление движения, но не модуль скорости и не кинетическую энергию.

## Движение в однородном магнитном поле

**Скорость вдоль поля** ($\\alpha = 0$): силы нет, частица движется равномерно и прямолинейно.

**Скорость перпендикулярна полю** ($\\alpha = 90°$): сила имеет постоянный модуль $qvB$ и всегда перпендикулярна скорости, то есть играет роль центростремительной. Частица движется по окружности:

$$qvB = \\dfrac{mv^2}{R} \\quad\\Rightarrow\\quad R = \\dfrac{mv}{qB}, \\qquad T = \\dfrac{2\\pi R}{v} = \\dfrac{2\\pi m}{qB}.$$

Период не зависит от скорости: более быстрые частицы движутся по окружностям большего радиуса, но за то же время. Частота $\\nu = \\dfrac{qB}{2\\pi m}$ называется **циклотронной**.

**Скорость под произвольным углом.** Разложим $\\vec v$ на $v_\\parallel = v\\cos\\alpha$ вдоль поля и $v_\\perp = v\\sin\\alpha$ поперёк. Частица вращается с радиусом $R = \\dfrac{mv_\\perp}{qB}$ и смещается вдоль поля со скоростью $v_\\parallel$: траектория — **винтовая линия** с шагом $h = v_\\parallel T$. Заряженные частицы от Солнца по спирали движутся вдоль линий земного поля к полюсам и вызывают полярные сияния.

## Применения

- **Циклотрон.** Два полых электрода в форме буквы D в магнитном поле; переменное напряжение с циклотронной частотой ускоряет частицу при каждом пересечении зазора, а поле удерживает её на окружности растущего радиуса.
- **Масс-спектрометр.** Ионы с одинаковой скоростью влетают в поле; $R = \\dfrac{mv}{qB}$ сортирует их по $\\dfrac{m}{q}$ — так разделяют и взвешивают изотопы.
- **Селектор скоростей.** Скрещённые электрическое и магнитное поля: частица летит прямо, только когда $qE = qvB$, то есть $v = \\dfrac{E}{B}$.
- **Эффект Холла.** В полоске с током в магнитном поле носители смещаются к одному краю, создавая поперечное напряжение, которое используют в датчиках магнитного поля.

**Пример 1.** Электрон движется со скоростью $2 \\cdot 10^6$ м/с перпендикулярно полю $0{,}01$ Тл. $F_L = 1{,}6 \\cdot 10^{-19} \\cdot 2 \\cdot 10^6 \\cdot 0{,}01 = 3{,}2 \\cdot 10^{-15}$ Н. Его вес $9{,}1 \\cdot 10^{-30}$ Н — на пятнадцать порядков меньше, поэтому тяжестью пренебрегают.

**Пример 2.** Тот же электрон ($m = 9{,}1 \\cdot 10^{-31}$ кг) движется по окружности радиусом $R = \\dfrac{9{,}1 \\cdot 10^{-31} \\cdot 2 \\cdot 10^6}{1{,}6 \\cdot 10^{-19} \\cdot 0{,}01} \\approx 1{,}1 \\cdot 10^{-3}$ м, около $1$ мм. Период: $T = \\dfrac{2\\pi m}{qB} \\approx 3{,}6 \\cdot 10^{-9}$ с.

**Пример 3.** Протон ($m = 1{,}67 \\cdot 10^{-27}$ кг), ускоренный напряжением $U = 1000$ В, влетает перпендикулярно в поле $0{,}1$ Тл. $v = \\sqrt{\\dfrac{2qU}{m}} = \\sqrt{\\dfrac{2 \\cdot 1{,}6 \\cdot 10^{-19} \\cdot 1000}{1{,}67 \\cdot 10^{-27}}} \\approx 4{,}4 \\cdot 10^5$ м/с, $R = \\dfrac{mv}{qB} \\approx 4{,}6$ см.

**Пример 4.** Протон и альфа-частица ($m = 4m_p$, $q = 2e$) влетают в одно поле с одинаковой скоростью. $R \\propto \\dfrac{m}{q}$, поэтому радиус альфа-частицы в $\\dfrac{4}{2} = 2$ раза больше. При одинаковой же кинетической энергии $R = \\dfrac{\\sqrt{2mE_k}}{qB} \\propto \\dfrac{\\sqrt m}{q}$, и отношение равно $\\dfrac{2}{2} = 1$: радиусы равны.

**Пример 5.** В селекторе скоростей $E = 10^4$ В/м и $B = 0{,}05$ Тл. Частицы со скоростью $v = \\dfrac{E}{B} = 2 \\cdot 10^5$ м/с проходят прямо; более быстрые отклоняются в сторону магнитной силы, более медленные — в сторону электрической.

**Пример 6.** Электрон движется со скоростью $v = 10^7$ м/с под углом $60°$ к полю $10^{-3}$ Тл. $v_\\perp = 10^7 \\sin 60° \\approx 8{,}7 \\cdot 10^6$ м/с, $v_\\parallel = 5 \\cdot 10^6$ м/с. Радиус $R = \\dfrac{9{,}1 \\cdot 10^{-31} \\cdot 8{,}7 \\cdot 10^6}{1{,}6 \\cdot 10^{-19} \\cdot 10^{-3}} \\approx 4{,}9$ см, период $T = \\dfrac{2\\pi m}{qB} \\approx 3{,}6 \\cdot 10^{-8}$ с, шаг $h = v_\\parallel T \\approx 18$ см.

**Пример 7.** В масс-спектрометре однократно ионизованные атомы неона с одинаковой скоростью попадают на пластину при $R_{20} = 20{,}0$ см. Куда попадёт изотоп с массовым числом $22$? $R \\propto m$, поэтому $R_{22} = 20{,}0 \\cdot \\dfrac{22}{20} = 22{,}0$ см; два пятна отстоят на $2$ см (диаметры различаются на $4$ см).

**Пример 8.** Почему сила Лоренца не меняет кинетическую энергию? Работа $A = F s\\cos\\beta$, а угол между силой и перемещением в каждый момент $\\beta = 90°$, так что $A = 0$. Следовательно, одно магнитное поле не может разогнать частицу; в ускорителях электрические поля дают энергию, а магнитные — управляют траекторией.

## Упражнения

1. Найдите силу, действующую на протон, движущийся со скоростью $5 \\cdot 10^5$ м/с перпендикулярно полю $0{,}2$ Тл.
2. Электрон движется со скоростью $3 \\cdot 10^6$ м/с под углом $30°$ к полю $0{,}02$ Тл. Найдите силу Лоренца.
3. Найдите радиус окружности электрона со скоростью $4 \\cdot 10^6$ м/с в поле $2 \\cdot 10^{-3}$ Тл.
4. Найдите период обращения протона в поле $1$ Тл. Зависит ли он от скорости?
5. Заряженная частица движется по окружности радиусом $10$ см в поле $0{,}5$ Тл со скоростью $10^6$ м/с. Найдите её отношение $\\dfrac{q}{m}$.
6. При каких полях частица со скоростью $3 \\cdot 10^5$ м/с пройдёт селектор скоростей прямо, если $B = 0{,}02$ Тл?
7. Протон, ускоренный напряжением $500$ В, влетает перпендикулярно в поле $0{,}05$ Тл. Найдите радиус.
8. Электрон движется со скоростью $10^6$ м/с под углом $45°$ к полю $10^{-4}$ Тл. Найдите радиус и шаг винтовой линии.

### Ответы

1. $1{,}6 \\cdot 10^{-14}$ Н. 2. $F = 1{,}6 \\cdot 10^{-19} \\cdot 3 \\cdot 10^6 \\cdot 0{,}02 \\cdot 0{,}5 = 4{,}8 \\cdot 10^{-15}$ Н. 3. $R = \\dfrac{9{,}1 \\cdot 10^{-31} \\cdot 4 \\cdot 10^6}{1{,}6 \\cdot 10^{-19} \\cdot 2 \\cdot 10^{-3}} \\approx 1{,}1$ см. 4. $T = \\dfrac{2\\pi \\cdot 1{,}67 \\cdot 10^{-27}}{1{,}6 \\cdot 10^{-19}} \\approx 6{,}6 \\cdot 10^{-8}$ с; нет. 5. $\\dfrac{q}{m} = \\dfrac{v}{RB} = 2 \\cdot 10^7$ Кл/кг. 6. $E = vB = 6000$ В/м, перпендикулярно $\\vec B$ и $\\vec v$. 7. $v \\approx 3{,}1 \\cdot 10^5$ м/с, $R \\approx 6{,}5$ см. 8. $v_\\perp = v_\\parallel \\approx 7{,}1 \\cdot 10^5$ м/с, $R \\approx 4$ см, $T \\approx 3{,}6 \\cdot 10^{-7}$ с, $h \\approx 25$ см.`,
      },
      [
        q(t("The Lorentz force on a charge moving along the field lines is…", "Դաշտի գծերի երկայնքով շարժվող լիցքի վրա ազդող Լորենցի ուժը…", "Сила Лоренца на заряд, движущийся вдоль линий поля,…"), [t("maximal", "մեծագույնն է", "максимальна"), t("zero", "զրո է", "равна нулю"), t("equal to qvB", "հավասար է qvB", "равна qvB")], 1),
        q(t("The Lorentz force does no work because it is…", "Լորենցի ուժն աշխատանք չի կատարում, քանի որ այն…", "Сила Лоренца не совершает работы, потому что она…"), [t("very small", "շատ փոքր է", "очень мала"), t("perpendicular to the velocity", "ուղղահայաց է արագությանը", "перпендикулярна скорости"), t("constant", "հաստատուն է", "постоянна")], 1),
        q(t("The radius of a charge's circle in a magnetic field is R =", "Մագնիսական դաշտում լիցքի շրջանագծի շառավիղը R =", "Радиус окружности заряда в магнитном поле R ="), [t("mv/(qB)", "mv/(qB)", "mv/(qB)"), t("qB/(mv)", "qB/(mv)", "qB/(mv)"), t("qvB/m", "qvB/m", "qvB/m")], 0),
        q(t("The period of revolution of a particle in a uniform magnetic field…", "Համասեռ մագնիսական դաշտում մասնիկի պտույտի պարբերությունը…", "Период обращения частицы в однородном магнитном поле…"), [t("grows with speed", "աճում է արագության հետ", "растёт со скоростью"), t("does not depend on speed", "կախված չէ արագությունից", "не зависит от скорости"), t("decreases with speed", "նվազում է արագության հետ", "убывает со скоростью")], 1),
        q(t("A particle passes a velocity selector straight when v =", "Մասնիկն ուղիղ է անցնում արագությունների ընտրիչով, երբ v =", "Частица проходит селектор скоростей прямо, когда v ="), [t("E · B", "E · B", "E · B"), t("B/E", "B/E", "B/E"), t("E/B", "E/B", "E/B")], 2),
        q(t("If a particle's velocity makes an angle with the field, its path is a…", "Եթե մասնիկի արագությունը դաշտի հետ անկյուն է կազմում, հետագիծը…", "Если скорость частицы составляет угол с полем, её траектория —"), [t("parabola", "պարաբոլ է", "парабола"), t("helix", "պարույր է", "винтовая линия"), t("straight line", "ուղիղ գիծ է", "прямая")], 1),
      ],
    ),
    lesson(
      "faraday-law",
      ["Magnetic flux; Faraday's law of induction", "Մագնիսական հոսք, Ֆարադեյի ինդուկցիայի օրենք", "Магнитный поток; закон электромагнитной индукции"],
      {
        en: ["Compute the magnetic flux Φ = BS cos α through a loop and recognise the three ways it can change", "Apply Faraday's law ε = −ΔΦ/Δt (with N turns) and Lenz's rule to find the induced EMF and the direction of the induced current", "Find the motional EMF ε = Blv in a moving conductor and analyse the energy balance"],
        hy: ["Հաշվել շրջանակով անցնող մագնիսական հոսքը Φ = BS cos α և ճանաչել դրա փոփոխման երեք եղանակները", "Կիրառել Ֆարադեյի օրենքը ε = −ΔΦ/Δt (N գալարի դեպքում) և Լենցի կանոնն ինդուկցիայի ԷլՇՈւ-ն և հոսանքի ուղղությունը գտնելու համար", "Գտնել շարժվող հաղորդչի ԷլՇՈւ-ն ε = Blv բանաձևով և վերլուծել էներգիայի հաշվեկշիռը"],
        ru: ["Вычислять магнитный поток Φ = BS cos α через контур и распознавать три способа его изменения", "Применять закон Фарадея ε = −ΔΦ/Δt (при N витках) и правило Ленца для нахождения ЭДС индукции и направления индукционного тока", "Находить ЭДС движущегося проводника ε = Blv и анализировать баланс энергии"],
      },
      {
        en: `## Magnetic flux

> The **magnetic flux** through a flat loop of area $S$ in a uniform field is
> $$\\Phi = BS\\cos\\alpha,$$
> where $\\alpha$ is the angle between $\\vec B$ and the normal to the loop. The unit is the **weber**: $1$ Wb $= 1$ T·m².

The flux is the "number of field lines" through the loop. It is greatest when the loop faces the field ($\\alpha = 0$) and zero when the field is parallel to the plane of the loop. The flux can change in three ways: the field $B$ changes, the area $S$ changes (the loop is stretched or a slider moves) or the orientation $\\alpha$ changes (the loop rotates).

## Electromagnetic induction

Faraday (1831) discovered that a current appears in a closed loop whenever the magnetic flux through it changes: when a magnet is pushed into a coil, when a neighbouring current is switched on or off, when the loop moves or rotates in a field. A current needs an electromotive force, so the changing flux creates an **induced EMF**.

> **Faraday's law.** The induced EMF equals the rate of change of flux with a minus sign:
> $$\\varepsilon_i = -\\dfrac{\\Delta\\Phi}{\\Delta t}.$$
> For a coil of $N$ turns $\\varepsilon_i = -N\\dfrac{\\Delta\\Phi}{\\Delta t}$.

The minus sign expresses **Lenz's rule**:

> The induced current has such a direction that its own magnetic field opposes the change of flux that produced it.

If the flux grows, the induced current's field points against $\\vec B$; if the flux shrinks, it points along $\\vec B$. Lenz's rule is a consequence of energy conservation: if the induced current helped the change, a magnet pushed into a coil would be pulled in and accelerate for free.

The induced current is $I_i = \\dfrac{\\varepsilon_i}{R}$, and the charge that passes is $q = I\\Delta t = \\dfrac{\\lvert\\Delta\\Phi\\rvert}{R}$, independent of how fast the change happens.

## Motional EMF

A conductor of length $l$ moving at speed $v$ perpendicular to a field $B$ sweeps an area $lv\\Delta t$ per $\\Delta t$, so

$$\\varepsilon = Blv.$$

The same result comes from the Lorentz force: it pushes the free electrons to one end of the rod until the electric force balances it, $eE = evB$, giving a potential difference $U = El = Blv$. If the conductor makes an angle $\\alpha$ with the velocity, $\\varepsilon = Blv\\sin\\alpha$.

## Eddy currents and applications

A changing flux induces circulating currents in any bulk conductor: **eddy currents**. They heat the metal (induction cookers, metal melting), brake moving parts (magnetic brakes on trains, damping in meters) and waste energy in transformer cores, which is why cores are laminated. Generators, microphones, card readers and wireless chargers all rely on induction.

**Example 1.** A loop of area $50$ cm² is in a field of $0{.}2$ T at $60°$ to the normal. $\\Phi = 0{.}2 \\cdot 0{.}005 \\cdot \\cos 60° = 5 \\cdot 10^{-4}$ Wb. Turned to face the field the flux would be $10^{-3}$ Wb.

**Example 2.** A coil with $200$ turns and area $20$ cm² is in a field that drops uniformly from $0{.}5$ T to zero in $0{.}1$ s. $\\varepsilon = N\\dfrac{\\Delta B \\cdot S}{\\Delta t} = 200 \\cdot \\dfrac{0{.}5 \\cdot 0{.}002}{0{.}1} = 2$ V. With resistance $4$ Ω the current is $0{.}5$ A and the charge $q = 0{.}05$ C.

**Example 3.** A magnet is pushed north-pole first into a coil. The flux increases, so the induced current creates a north pole facing the magnet (repulsion). Seen from the magnet, the current flows counter-clockwise. When the magnet is pulled out, the current reverses and the coil attracts it.

**Example 4.** A rod of length $0{.}5$ m slides at $4$ m/s on rails in a vertical field of $0{.}3$ T. $\\varepsilon = Blv = 0{.}3 \\cdot 0{.}5 \\cdot 4 = 0{.}6$ V. With the circuit resistance $0{.}2$ Ω the current is $3$ A, and the Ampere force on the rod is $F = BIl = 0{.}3 \\cdot 3 \\cdot 0{.}5 = 0{.}45$ N, directed against the motion. To keep the speed constant an external force of $0{.}45$ N is needed; its power $Fv = 1{.}8$ W equals the heat $I^2 R = 9 \\cdot 0{.}2 = 1{.}8$ W. Energy is conserved.

**Example 5.** An aeroplane with wingspan $40$ m flies at $250$ m/s where the vertical component of the Earth's field is $5 \\cdot 10^{-5}$ T. The EMF between the wing tips is $\\varepsilon = 5 \\cdot 10^{-5} \\cdot 40 \\cdot 250 = 0{.}5$ V. No current flows because the circuit is not closed.

**Example 6.** A square loop of side $10$ cm and resistance $0{.}1$ Ω is pulled out of a field of $0{.}4$ T at $2$ m/s. While the loop is leaving, only one side is in the field: $\\varepsilon = Blv = 0{.}4 \\cdot 0{.}1 \\cdot 2 = 0{.}08$ V, $I = 0{.}8$ A. The total charge passed is $q = \\dfrac{\\Delta\\Phi}{R} = \\dfrac{0{.}4 \\cdot 0{.}01}{0{.}1} = 0{.}04$ C.

**Example 7.** A ring of flux $\\Phi$ is turned through $180°$ about a diameter in time $\\Delta t$. The flux goes from $+\\Phi$ to $-\\Phi$, so $\\lvert\\Delta\\Phi\\rvert = 2\\Phi$ and $\\varepsilon_{\\text{mean}} = \\dfrac{2\\Phi}{\\Delta t}$. This is the principle of the flip-coil method for measuring $B$.

**Example 8.** Why does a copper ring hanging on a thread swing away when a magnet approaches, while a ring with a cut in it does not move? The closed ring carries an induced current whose field repels the magnet (Lenz). The cut ring has an EMF but no current, hence no force.

## Exercises

1. Find the flux through a loop of area $30$ cm² in a field of $0{.}5$ T when the normal makes $0°$, $60°$ and $90°$ with the field.
2. The flux through a coil of $50$ turns changes by $0{.}02$ Wb in $0{.}4$ s. Find the EMF.
3. A loop of resistance $2$ Ω has flux changing uniformly from $0{.}6$ Wb to $0{.}1$ Wb in $0{.}5$ s. Find the EMF, the current and the charge.
4. A rod $0{.}8$ m long moves at $5$ m/s perpendicular to a field of $0{.}25$ T. Find the EMF.
5. Which way does the induced current flow in a loop when the field through it (pointing away from you) decreases? Explain with Lenz's rule.
6. A rod slides on rails as in Example 4 with $B = 0{.}5$ T, $l = 0{.}4$ m, $v = 3$ m/s, $R = 0{.}3$ Ω. Find the current, the braking force and the mechanical power needed.
7. A coil of $500$ turns and area $10$ cm² rotates from facing the field to parallel in $0{.}05$ s in a field of $0{.}1$ T. Find the mean EMF.
8. A car with axle length $1{.}5$ m drives at $30$ m/s; the vertical component of the Earth's field is $4 \\cdot 10^{-5}$ T. Find the EMF across the axle.

### Answers

1. $1{.}5 \\cdot 10^{-3}$ Wb, $7{.}5 \\cdot 10^{-4}$ Wb, $0$. 2. $\\varepsilon = 50 \\cdot \\dfrac{0{.}02}{0{.}4} = 2{.}5$ V. 3. $\\varepsilon = 1$ V, $I = 0{.}5$ A, $q = 0{.}25$ C. 4. $1$ V. 5. Clockwise as seen by you: its field must point away from you to support the decreasing flux. 6. $\\varepsilon = 0{.}6$ V, $I = 2$ A, $F = BIl = 0{.}4$ N, $P = Fv = 1{.}2$ W. 7. $\\varepsilon = \\dfrac{500 \\cdot 0{.}1 \\cdot 0{.}001}{0{.}05} = 1$ V. 8. $\\varepsilon = 4 \\cdot 10^{-5} \\cdot 1{.}5 \\cdot 30 = 1{.}8 \\cdot 10^{-3}$ V.`,
        hy: `## Մագնիսական հոսք

> Համասեռ դաշտում $S$ մակերեսով հարթ շրջանակով անցնող **մագնիսական հոսքը**
> $$\\Phi = BS\\cos\\alpha$$
> է, որտեղ $\\alpha$-ն $\\vec B$-ի և շրջանակի նորմալի միջև անկյունն է։ Միավորը **վեբերն** է․ $1$ Վբ $= 1$ Տ·մ²։

Հոսքը շրջանակով անցնող «դաշտի գծերի թիվն» է։ Այն մեծագույնն է, երբ շրջանակը դեմ է դաշտին ($\\alpha = 0$), և զրո է, երբ դաշտը զուգահեռ է շրջանակի հարթությանը։ Հոսքը կարող է փոխվել երեք եղանակով․ փոխվում է $B$ դաշտը, փոխվում է $S$ մակերեսը (շրջանակը ձգվում է, կամ սահողը շարժվում է) կամ փոխվում է $\\alpha$ կողմնորոշումը (շրջանակը պտտվում է)։

## Էլեկտրամագնիսական ինդուկցիա

Ֆարադեյը (1831) հայտնաբերեց, որ փակ շրջանակում հոսանք է առաջանում ամեն անգամ, երբ նրանով անցնող մագնիսական հոսքը փոխվում է․ երբ մագնիսը մտցնում են կոճի մեջ, երբ հարևան հոսանքը միացնում կամ անջատում են, երբ շրջանակը շարժվում կամ պտտվում է դաշտում։ Հոսանքի համար անհրաժեշտ է էլեկտրաշարժ ուժ, ուստի փոփոխվող հոսքը ստեղծում է **ինդուկցիայի ԷլՇՈւ**։

> **Ֆարադեյի օրենք։** Ինդուկցիայի ԷլՇՈւ-ն հավասար է հոսքի փոփոխման արագությանը՝ մինուս նշանով․
> $$\\varepsilon_i = -\\dfrac{\\Delta\\Phi}{\\Delta t}$$
> $N$ գալարով կոճի համար $\\varepsilon_i = -N\\dfrac{\\Delta\\Phi}{\\Delta t}$։

Մինուս նշանն արտահայտում է **Լենցի կանոնը**․

> Ինդուկցիոն հոսանքն ունի այնպիսի ուղղություն, որ նրա սեփական մագնիսական դաշտը հակազդում է այն առաջացրած հոսքի փոփոխությանը։

Եթե հոսքն աճում է, ինդուկցիոն հոսանքի դաշտն ուղղված է $\\vec B$-ին հակառակ, եթե նվազում է՝ $\\vec B$-ի ուղղությամբ։ Լենցի կանոնն էներգիայի պահպանման հետևանք է․ եթե ինդուկցիոն հոսանքն օգներ փոփոխությանը, կոճի մեջ մտցվող մագնիսն անվճար ներս կքաշվեր և կարագանար։

Ինդուկցիոն հոսանքը $I_i = \\dfrac{\\varepsilon_i}{R}$ է, իսկ անցած լիցքը՝ $q = I\\Delta t = \\dfrac{\\lvert\\Delta\\Phi\\rvert}{R}$, որը կախված չէ փոփոխության արագությունից։

## Շարժվող հաղորդչի ԷլՇՈւ

$B$ դաշտին ուղղահայաց $v$ արագությամբ շարժվող $l$ երկարությամբ հաղորդիչը $\\Delta t$ ժամանակում անցնում է $lv\\Delta t$ մակերես, ուստի

$$\\varepsilon = Blv$$

Նույն արդյունքը ստացվում է Լորենցի ուժից․ այն ազատ էլեկտրոնները մղում է ձողի մի ծայրը, մինչև էլեկտրական ուժը հավասարակշռի այն, $eE = evB$, որից պոտենցիալների տարբերությունը $U = El = Blv$ է։ Եթե հաղորդիչն արագության հետ կազմում է $\\alpha$ անկյուն, ապա $\\varepsilon = Blv\\sin\\alpha$։

## Մրրկային հոսանքներ և կիրառություններ

Փոփոխվող հոսքը ցանկացած զանգվածեղ հաղորդչում առաջացնում է շրջանառու հոսանքներ՝ **մրրկային հոսանքներ**։ Դրանք տաքացնում են մետաղը (ինդուկցիոն սալօջախներ, մետաղի հալում), արգելակում են շարժվող մասերը (գնացքների մագնիսական արգելակներ, չափիչ սարքերի մարում) և էներգիա են վատնում տրանսֆորմատորների միջուկներում, այդ պատճառով միջուկները շերտավոր են պատրաստվում։ Գեներատորները, խոսափողները, քարտերի ընթերցիչները և անլար լիցքավորիչներն աշխատում են ինդուկցիայի շնորհիվ։

**Օրինակ 1։** $50$ սմ² մակերեսով շրջանակը գտնվում է $0{,}2$ Տ դաշտում՝ նորմալի հետ $60°$ անկյան տակ։ $\\Phi = 0{,}2 \\cdot 0{,}005 \\cdot \\cos 60° = 5 \\cdot 10^{-4}$ Վբ։ Դաշտին դեմ շրջելու դեպքում հոսքը կլիներ $10^{-3}$ Վբ։

**Օրինակ 2։** $200$ գալարով, $20$ սմ² մակերեսով կոճը գտնվում է դաշտում, որը $0{,}1$ վ-ում հավասարաչափ նվազում է $0{,}5$ Տ-ից մինչև զրո։ $\\varepsilon = N\\dfrac{\\Delta B \\cdot S}{\\Delta t} = 200 \\cdot \\dfrac{0{,}5 \\cdot 0{,}002}{0{,}1} = 2$ Վ։ $4$ Օմ դիմադրության դեպքում հոսանքը $0{,}5$ Ա է, իսկ լիցքը՝ $q = 0{,}05$ Կլ։

**Օրինակ 3։** Մագնիսը հյուսիսային բևեռով առաջ մտցնում են կոճի մեջ։ Հոսքն աճում է, ուստի ինդուկցիոն հոսանքը մագնիսի կողմում ստեղծում է հյուսիսային բևեռ (վանում)։ Մագնիսի կողմից նայելիս հոսանքը հոսում է ժամսլաքին հակառակ։ Երբ մագնիսը դուրս են հանում, հոսանքը փոխում է ուղղությունը, և կոճը ձգում է այն։

**Օրինակ 4։** $0{,}5$ մ երկարությամբ ձողը $4$ մ/վ արագությամբ սահում է ռելսերով ուղղաձիգ $0{,}3$ Տ դաշտում։ $\\varepsilon = Blv = 0{,}3 \\cdot 0{,}5 \\cdot 4 = 0{,}6$ Վ։ Շղթայի $0{,}2$ Օմ դիմադրության դեպքում հոսանքը $3$ Ա է, իսկ ձողի վրա ազդող Ամպերի ուժը՝ $F = BIl = 0{,}3 \\cdot 3 \\cdot 0{,}5 = 0{,}45$ Ն՝ ուղղված շարժմանը հակառակ։ Արագությունը հաստատուն պահելու համար անհրաժեշտ է $0{,}45$ Ն արտաքին ուժ, որի հզորությունը $Fv = 1{,}8$ Վտ հավասար է $I^2 R = 9 \\cdot 0{,}2 = 1{,}8$ Վտ ջերմությանը։ Էներգիան պահպանվում է։

**Օրինակ 5։** $40$ մ թևերի բացվածքով ինքնաթիռը թռչում է $250$ մ/վ արագությամբ այնտեղ, որտեղ Երկրի դաշտի ուղղաձիգ բաղադրիչը $5 \\cdot 10^{-5}$ Տ է։ Թևերի ծայրերի միջև ԷլՇՈւ-ն $\\varepsilon = 5 \\cdot 10^{-5} \\cdot 40 \\cdot 250 = 0{,}5$ Վ է։ Հոսանք չի հոսում, քանի որ շղթան փակ չէ։

**Օրինակ 6։** $10$ սմ կողմով, $0{,}1$ Օմ դիմադրությամբ քառակուսի շրջանակը $2$ մ/վ արագությամբ դուրս են քաշում $0{,}4$ Տ դաշտից։ Քանի դեռ շրջանակը դուրս է գալիս, դաշտում միայն մեկ կողմն է․ $\\varepsilon = Blv = 0{,}4 \\cdot 0{,}1 \\cdot 2 = 0{,}08$ Վ, $I = 0{,}8$ Ա։ Անցած ընդհանուր լիցքը $q = \\dfrac{\\Delta\\Phi}{R} = \\dfrac{0{,}4 \\cdot 0{,}01}{0{,}1} = 0{,}04$ Կլ է։

**Օրինակ 7։** $\\Phi$ հոսքով օղակը $\\Delta t$ ժամանակում տրամագծի շուրջ պտտում են $180°$-ով։ Հոսքը $+\\Phi$-ից դառնում է $-\\Phi$, ուստի $\\lvert\\Delta\\Phi\\rvert = 2\\Phi$ և $\\varepsilon_{\\text{միջ}} = \\dfrac{2\\Phi}{\\Delta t}$։ Սա $B$-ի չափման շրջվող կոճի եղանակի սկզբունքն է։

**Օրինակ 8։** Ինչո՞ւ է թելից կախված պղնձե օղակը հեռանում մագնիսի մոտենալիս, իսկ կտրվածքով օղակը չի շարժվում։ Փակ օղակով անցնում է ինդուկցիոն հոսանք, որի դաշտը վանում է մագնիսը (Լենց)։ Կտրված օղակն ունի ԷլՇՈւ, բայց ոչ հոսանք, հետևաբար՝ ոչ էլ ուժ։

## Վարժություններ

1. Գտեք $0{,}5$ Տ դաշտում $30$ սմ² մակերեսով շրջանակով անցնող հոսքը, երբ նորմալը դաշտի հետ կազմում է $0°$, $60°$ և $90°$։
2. $50$ գալարով կոճով անցնող հոսքը $0{,}4$ վ-ում փոխվում է $0{,}02$ Վբ-ով։ Գտեք ԷլՇՈւ-ն։
3. $2$ Օմ դիմադրությամբ շրջանակի հոսքը $0{,}5$ վ-ում հավասարաչափ փոխվում է $0{,}6$ Վբ-ից մինչև $0{,}1$ Վբ։ Գտեք ԷլՇՈւ-ն, հոսանքն ու լիցքը։
4. $0{,}8$ մ երկարությամբ ձողը շարժվում է $5$ մ/վ արագությամբ՝ ուղղահայաց $0{,}25$ Տ դաշտին։ Գտեք ԷլՇՈւ-ն։
5. Ո՞ր ուղղությամբ է հոսում ինդուկցիոն հոսանքը շրջանակում, երբ նրանով անցնող (ձեզնից հեռու ուղղված) դաշտը նվազում է։ Բացատրեք Լենցի կանոնով։
6. Ձողը սահում է ռելսերով, ինչպես 4-րդ օրինակում, $B = 0{,}5$ Տ, $l = 0{,}4$ մ, $v = 3$ մ/վ, $R = 0{,}3$ Օմ։ Գտեք հոսանքը, արգելակող ուժը և անհրաժեշտ մեխանիկական հզորությունը։
7. $500$ գալարով, $10$ սմ² մակերեսով կոճը $0{,}1$ Տ դաշտում $0{,}05$ վ-ում դաշտին դեմ դիրքից պտտվում է զուգահեռ դիրքի։ Գտեք միջին ԷլՇՈւ-ն։
8. $1{,}5$ մ սռնու երկարությամբ մեքենան ընթանում է $30$ մ/վ արագությամբ, Երկրի դաշտի ուղղաձիգ բաղադրիչը $4 \\cdot 10^{-5}$ Տ է։ Գտեք սռնու ծայրերի ԷլՇՈւ-ն։

### Պատասխաններ

1. $1{,}5 \\cdot 10^{-3}$ Վբ, $7{,}5 \\cdot 10^{-4}$ Վբ, $0$։ 2. $\\varepsilon = 50 \\cdot \\dfrac{0{,}02}{0{,}4} = 2{,}5$ Վ։ 3. $\\varepsilon = 1$ Վ, $I = 0{,}5$ Ա, $q = 0{,}25$ Կլ։ 4. $1$ Վ։ 5. Ձեր կողմից նայելիս՝ ժամսլաքի ուղղությամբ․ նրա դաշտը պետք է ուղղված լինի ձեզնից հեռու՝ նվազող հոսքին օգնելու համար։ 6. $\\varepsilon = 0{,}6$ Վ, $I = 2$ Ա, $F = BIl = 0{,}4$ Ն, $P = Fv = 1{,}2$ Վտ։ 7. $\\varepsilon = \\dfrac{500 \\cdot 0{,}1 \\cdot 0{,}001}{0{,}05} = 1$ Վ։ 8. $\\varepsilon = 4 \\cdot 10^{-5} \\cdot 1{,}5 \\cdot 30 = 1{,}8 \\cdot 10^{-3}$ Վ։`,
        ru: `## Магнитный поток

> **Магнитный поток** через плоский контур площадью $S$ в однородном поле равен
> $$\\Phi = BS\\cos\\alpha,$$
> где $\\alpha$ — угол между $\\vec B$ и нормалью к контуру. Единица — **вебер**: $1$ Вб $= 1$ Тл·м².

Поток — это «число линий поля», пронизывающих контур. Он наибольший, когда контур обращён к полю ($\\alpha = 0$), и равен нулю, когда поле параллельно плоскости контура. Поток может меняться тремя способами: меняется поле $B$, меняется площадь $S$ (контур растягивают или движется перемычка) или меняется ориентация $\\alpha$ (контур поворачивается).

## Электромагнитная индукция

Фарадей (1831) открыл, что в замкнутом контуре возникает ток всякий раз, когда меняется магнитный поток через него: когда магнит вдвигают в катушку, когда включают или выключают соседний ток, когда контур движется или вращается в поле. Для тока нужна электродвижущая сила, значит, меняющийся поток создаёт **ЭДС индукции**.

> **Закон Фарадея.** ЭДС индукции равна скорости изменения потока со знаком минус:
> $$\\varepsilon_i = -\\dfrac{\\Delta\\Phi}{\\Delta t}.$$
> Для катушки из $N$ витков $\\varepsilon_i = -N\\dfrac{\\Delta\\Phi}{\\Delta t}$.

Знак минус выражает **правило Ленца**:

> Индукционный ток имеет такое направление, что его собственное магнитное поле противодействует изменению потока, которым он вызван.

Если поток растёт, поле индукционного тока направлено против $\\vec B$; если поток убывает — вдоль $\\vec B$. Правило Ленца — следствие закона сохранения энергии: если бы индукционный ток помогал изменению, магнит, вдвинутый в катушку, втягивался бы и разгонялся даром.

Индукционный ток $I_i = \\dfrac{\\varepsilon_i}{R}$, а прошедший заряд $q = I\\Delta t = \\dfrac{\\lvert\\Delta\\Phi\\rvert}{R}$ не зависит от того, насколько быстро происходит изменение.

## ЭДС движущегося проводника

Проводник длиной $l$, движущийся со скоростью $v$ перпендикулярно полю $B$, за время $\\Delta t$ заметает площадь $lv\\Delta t$, поэтому

$$\\varepsilon = Blv.$$

Тот же результат даёт сила Лоренца: она смещает свободные электроны к одному концу стержня, пока электрическая сила не уравновесит её, $eE = evB$, откуда разность потенциалов $U = El = Blv$. Если проводник составляет со скоростью угол $\\alpha$, то $\\varepsilon = Blv\\sin\\alpha$.

## Вихревые токи и применения

Меняющийся поток наводит в любом массивном проводнике циркулирующие токи — **вихревые токи** (токи Фуко). Они нагревают металл (индукционные плиты, плавка металла), тормозят движущиеся части (магнитные тормоза поездов, успокоители в приборах) и теряют энергию в сердечниках трансформаторов, поэтому сердечники набирают из пластин. Генераторы, микрофоны, считыватели карт и беспроводные зарядки работают на индукции.

**Пример 1.** Контур площадью $50$ см² находится в поле $0{,}2$ Тл под углом $60°$ к нормали. $\\Phi = 0{,}2 \\cdot 0{,}005 \\cdot \\cos 60° = 5 \\cdot 10^{-4}$ Вб. Повёрнутый навстречу полю, он имел бы поток $10^{-3}$ Вб.

**Пример 2.** Катушка из $200$ витков площадью $20$ см² находится в поле, которое равномерно падает с $0{,}5$ Тл до нуля за $0{,}1$ с. $\\varepsilon = N\\dfrac{\\Delta B \\cdot S}{\\Delta t} = 200 \\cdot \\dfrac{0{,}5 \\cdot 0{,}002}{0{,}1} = 2$ В. При сопротивлении $4$ Ом ток равен $0{,}5$ А, а заряд $q = 0{,}05$ Кл.

**Пример 3.** Магнит вдвигают в катушку северным полюсом вперёд. Поток растёт, поэтому индукционный ток создаёт северный полюс со стороны магнита (отталкивание). Если смотреть со стороны магнита, ток течёт против часовой стрелки. Когда магнит вытаскивают, ток меняет направление и катушка его притягивает.

**Пример 4.** Стержень длиной $0{,}5$ м скользит по рельсам со скоростью $4$ м/с в вертикальном поле $0{,}3$ Тл. $\\varepsilon = Blv = 0{,}3 \\cdot 0{,}5 \\cdot 4 = 0{,}6$ В. При сопротивлении цепи $0{,}2$ Ом ток равен $3$ А, а сила Ампера на стержень $F = BIl = 0{,}3 \\cdot 3 \\cdot 0{,}5 = 0{,}45$ Н направлена против движения. Чтобы скорость оставалась постоянной, нужна внешняя сила $0{,}45$ Н; её мощность $Fv = 1{,}8$ Вт равна теплу $I^2 R = 9 \\cdot 0{,}2 = 1{,}8$ Вт. Энергия сохраняется.

**Пример 5.** Самолёт с размахом крыльев $40$ м летит со скоростью $250$ м/с там, где вертикальная составляющая земного поля равна $5 \\cdot 10^{-5}$ Тл. ЭДС между концами крыльев $\\varepsilon = 5 \\cdot 10^{-5} \\cdot 40 \\cdot 250 = 0{,}5$ В. Ток не течёт, потому что цепь не замкнута.

**Пример 6.** Квадратную рамку со стороной $10$ см и сопротивлением $0{,}1$ Ом вытягивают из поля $0{,}4$ Тл со скоростью $2$ м/с. Пока рамка выходит, в поле находится только одна сторона: $\\varepsilon = Blv = 0{,}4 \\cdot 0{,}1 \\cdot 2 = 0{,}08$ В, $I = 0{,}8$ А. Полный прошедший заряд $q = \\dfrac{\\Delta\\Phi}{R} = \\dfrac{0{,}4 \\cdot 0{,}01}{0{,}1} = 0{,}04$ Кл.

**Пример 7.** Кольцо с потоком $\\Phi$ поворачивают на $180°$ вокруг диаметра за время $\\Delta t$. Поток меняется с $+\\Phi$ на $-\\Phi$, так что $\\lvert\\Delta\\Phi\\rvert = 2\\Phi$ и $\\varepsilon_{\\text{ср}} = \\dfrac{2\\Phi}{\\Delta t}$. На этом основан метод измерения $B$ переворачиваемой катушкой.

**Пример 8.** Почему медное кольцо на нити отклоняется при приближении магнита, а кольцо с разрезом не двигается? В замкнутом кольце течёт индукционный ток, поле которого отталкивает магнит (Ленц). В разрезанном кольце есть ЭДС, но нет тока, а значит, нет и силы.

## Упражнения

1. Найдите поток через контур площадью $30$ см² в поле $0{,}5$ Тл, когда нормаль составляет с полем $0°$, $60°$ и $90°$.
2. Поток через катушку из $50$ витков меняется на $0{,}02$ Вб за $0{,}4$ с. Найдите ЭДС.
3. Поток через контур сопротивлением $2$ Ом равномерно меняется с $0{,}6$ Вб до $0{,}1$ Вб за $0{,}5$ с. Найдите ЭДС, ток и заряд.
4. Стержень длиной $0{,}8$ м движется со скоростью $5$ м/с перпендикулярно полю $0{,}25$ Тл. Найдите ЭДС.
5. В какую сторону течёт индукционный ток в контуре, когда поле через него (направленное от вас) убывает? Объясните по правилу Ленца.
6. Стержень скользит по рельсам, как в примере 4, при $B = 0{,}5$ Тл, $l = 0{,}4$ м, $v = 3$ м/с, $R = 0{,}3$ Ом. Найдите ток, тормозящую силу и необходимую механическую мощность.
7. Катушка из $500$ витков площадью $10$ см² в поле $0{,}1$ Тл за $0{,}05$ с поворачивается из положения навстречу полю в параллельное. Найдите среднюю ЭДС.
8. Автомобиль с длиной оси $1{,}5$ м едет со скоростью $30$ м/с; вертикальная составляющая земного поля $4 \\cdot 10^{-5}$ Тл. Найдите ЭДС на концах оси.

### Ответы

1. $1{,}5 \\cdot 10^{-3}$ Вб, $7{,}5 \\cdot 10^{-4}$ Вб, $0$. 2. $\\varepsilon = 50 \\cdot \\dfrac{0{,}02}{0{,}4} = 2{,}5$ В. 3. $\\varepsilon = 1$ В, $I = 0{,}5$ А, $q = 0{,}25$ Кл. 4. $1$ В. 5. По часовой стрелке, если смотреть с вашей стороны: его поле должно быть направлено от вас, поддерживая убывающий поток. 6. $\\varepsilon = 0{,}6$ В, $I = 2$ А, $F = BIl = 0{,}4$ Н, $P = Fv = 1{,}2$ Вт. 7. $\\varepsilon = \\dfrac{500 \\cdot 0{,}1 \\cdot 0{,}001}{0{,}05} = 1$ В. 8. $\\varepsilon = 4 \\cdot 10^{-5} \\cdot 1{,}5 \\cdot 30 = 1{,}8 \\cdot 10^{-3}$ В.`,
      },
      [
        q(t("The magnetic flux through a loop whose plane is parallel to the field is…", "Դաշտին զուգահեռ հարթությամբ շրջանակով անցնող մագնիսական հոսքը…", "Магнитный поток через контур, плоскость которого параллельна полю,…"), [t("maximal", "մեծագույնն է", "максимален"), t("zero", "զրո է", "равен нулю"), t("equal to BS", "հավասար է BS", "равен BS")], 1),
        q(t("The unit of magnetic flux is the…", "Մագնիսական հոսքի միավորը…", "Единица магнитного потока —"), [t("tesla", "տեսլան է", "тесла"), t("weber", "վեբերն է", "вебер"), t("henry", "հենրին է", "генри")], 1),
        q(t("The flux through a 100-turn coil changes by 0.01 Wb in 0.2 s. The EMF is…", "100 գալարով կոճի հոսքը 0,2 վ-ում փոխվում է 0,01 Վբ-ով։ ԷլՇՈւ-ն…", "Поток через катушку из 100 витков меняется на 0,01 Вб за 0,2 с. ЭДС равна…"), [t("5 V", "5 Վ է", "5 В"), t("0.05 V", "0,05 Վ է", "0,05 В"), t("50 V", "50 Վ է", "50 В")], 0),
        q(t("According to Lenz's rule the induced current…", "Ըստ Լենցի կանոնի՝ ինդուկցիոն հոսանքը…", "Согласно правилу Ленца индукционный ток…"), [t("supports the change of flux", "օգնում է հոսքի փոփոխությանը", "поддерживает изменение потока"), t("opposes the change of flux", "հակազդում է հոսքի փոփոխությանը", "противодействует изменению потока"), t("is always clockwise", "միշտ ժամսլաքի ուղղությամբ է", "всегда течёт по часовой стрелке")], 1),
        q(t("The EMF in a 1 m rod moving at 2 m/s across a 0.5 T field is…", "0,5 Տ դաշտին ուղղահայաց 2 մ/վ արագությամբ շարժվող 1 մ ձողի ԷլՇՈւ-ն…", "ЭДС в стержне длиной 1 м, движущемся со скоростью 2 м/с поперёк поля 0,5 Тл, равна…"), [t("0.25 V", "0,25 Վ է", "0,25 В"), t("1 V", "1 Վ է", "1 В"), t("4 V", "4 Վ է", "4 В")], 1),
        q(t("Transformer cores are made of thin insulated sheets to…", "Տրանսֆորմատորի միջուկները պատրաստվում են բարակ մեկուսացված թիթեղներից, որպեսզի…", "Сердечники трансформаторов набирают из тонких изолированных пластин, чтобы…"), [t("reduce eddy currents", "փոքրացնեն մրրկային հոսանքները", "уменьшить вихревые токи"), t("increase the flux", "մեծացնեն հոսքը", "увеличить поток"), t("make the core lighter", "միջուկը թեթևացնեն", "облегчить сердечник")], 0),
      ],
    ),
    lesson(
      "self-induction",
      ["Self-induction; inductance; field energy", "Ինքնաինդուկցիա, ինդուկտիվություն, դաշտի էներգիա", "Самоиндукция; индуктивность; энергия магнитного поля"],
      {
        en: ["Explain self-induction and define inductance through Φ = LI and ε = −L ΔI/Δt", "Describe what happens when a circuit with a coil is switched on and off", "Compute the energy of the magnetic field W = LI²/2 and compare it with the capacitor energy"],
        hy: ["Բացատրել ինքնաինդուկցիան և սահմանել ինդուկտիվությունը Φ = LI և ε = −L ΔI/Δt առնչություններով", "Նկարագրել, թե ինչ է կատարվում կոճով շղթան միացնելիս և անջատելիս", "Հաշվել մագնիսական դաշտի էներգիան W = LI²/2 բանաձևով և համեմատել կոնդենսատորի էներգիայի հետ"],
        ru: ["Объяснять самоиндукцию и определять индуктивность через Φ = LI и ε = −L ΔI/Δt", "Описывать, что происходит при включении и выключении цепи с катушкой", "Вычислять энергию магнитного поля W = LI²/2 и сравнивать её с энергией конденсатора"],
      },
      {
        en: `## Self-induction

A current in a coil creates a magnetic field, and this field produces a flux through the coil itself. If the current changes, the flux changes, and by Faraday's law an EMF appears in the same coil. This is **self-induction**: a circuit induces an EMF in itself.

The flux of a coil's own field is proportional to its current:

> $$\\Phi = LI,$$ where $L$ is the **inductance** of the coil. Unit: **henry**, $1$ H $= 1$ Wb/A.

Inductance depends only on the geometry of the circuit and on the core: for a long solenoid $L = \\mu\\mu_0 n^2 V$, where $n$ is the turns per metre, $V$ the volume and $\\mu$ the relative permeability of the core (thousands for iron). A straight wire has a negligible inductance; a coil of many turns on an iron core has a large one.

From Faraday's law the **self-induction EMF** is

> $$\\varepsilon_{si} = -L\\dfrac{\\Delta I}{\\Delta t}.$$

An inductance of $1$ H gives an EMF of $1$ V when the current changes at $1$ A per second. By Lenz's rule the EMF opposes the change of current: it slows the growth of current when the circuit is closed and keeps the current going when the circuit is opened. A coil is thus the electrical analogue of mass: it resists changes of current as mass resists changes of velocity.

## Switching on and off

**Closing the circuit.** When a battery is connected to a coil and a lamp, the current does not jump to its final value $\\dfrac{\\varepsilon}{R}$ but rises gradually, because the self-induction EMF opposes it. The characteristic time is $\\tau = \\dfrac{L}{R}$: after $\\tau$ the current reaches about $63\\%$ of its final value, after $5\\tau$ practically all of it. In a parallel circuit a lamp in series with a coil lights up noticeably later than a lamp in series with a resistor.

**Opening the circuit.** When the switch is opened the current must fall to zero quickly, $\\dfrac{\\Delta I}{\\Delta t}$ is large, and the self-induction EMF can be many times the battery voltage. It makes a spark at the switch contacts and can produce a bright flash in a lamp connected across the coil. This is how a car's ignition coil produces thousands of volts from a $12$ V battery, and why electronic circuits with relays need a protective diode.

## Energy of the magnetic field

Where does the energy of the spark come from? While the current was growing, the source did work against the self-induction EMF, and this work was stored in the magnetic field of the coil:

> $$W = \\dfrac{LI^2}{2}.$$

Compare with the capacitor: $W = \\dfrac{CU^2}{2}$. The capacitor stores energy in the electric field, the coil in the magnetic one. For a solenoid the energy can be written through the field: $W = \\dfrac{B^2}{2\\mu\\mu_0}V$, so the energy density of a magnetic field is $w = \\dfrac{B^2}{2\\mu\\mu_0}$.

**Example 1.** The current in a coil of $0{.}5$ H rises uniformly from $0$ to $4$ A in $0{.}2$ s. $\\varepsilon_{si} = 0{.}5 \\cdot \\dfrac{4}{0{.}2} = 10$ V, directed against the current.

**Example 2.** A coil carries $2$ A and has flux $0{.}04$ Wb per turn through $N = 100$ turns. The total flux linkage is $4$ Wb, so $L = \\dfrac{4}{2} = 2$ H.

**Example 3.** A solenoid of length $20$ cm, cross-section $4$ cm² and $1000$ turns has $n = 5000$ m⁻¹ and $V = 8 \\cdot 10^{-5}$ m³: $L = 4\\pi \\cdot 10^{-7} \\cdot 25 \\cdot 10^6 \\cdot 8 \\cdot 10^{-5} \\approx 2{.}5 \\cdot 10^{-3}$ H. With an iron core ($\\mu \\approx 1000$) it becomes $2{.}5$ H.

**Example 4.** A current of $10$ A in a coil of $0{.}3$ H is cut off in $1$ ms. Mean EMF: $\\varepsilon = 0{.}3 \\cdot \\dfrac{10}{0{.}001} = 3000$ V, enough to produce a spark several millimetres long in air.

**Example 5.** Energy stored in the coil of Example 4: $W = \\dfrac{0{.}3 \\cdot 100}{2} = 15$ J. The same energy in a $100$ μF capacitor would need $U = \\sqrt{\\dfrac{2W}{C}} = \\sqrt{\\dfrac{30}{10^{-4}}} \\approx 550$ V.

**Example 6.** A circuit with $L = 2$ H and $R = 4$ Ω is connected to $12$ V. Final current $3$ A, time constant $\\tau = 0{.}5$ s. After $0{.}5$ s the current is about $1{.}9$ A; after $2{.}5$ s it is essentially $3$ A. The energy finally stored is $\\dfrac{2 \\cdot 9}{2} = 9$ J.

**Example 7.** In a coil of $5$ mH the current changes according to the graph: rises from $0$ to $2$ A in $4$ ms, stays constant for $4$ ms, drops to $0$ in $2$ ms. The EMF: $-2{.}5$ V in the first interval, $0$ in the second, $+5$ V in the third (opposite sign and twice as large because the change is twice as fast).

**Example 8.** The field inside a large laboratory magnet is $2$ T in a volume of $0{.}1$ m³. Energy: $W = \\dfrac{B^2}{2\\mu_0}V = \\dfrac{4}{2 \\cdot 4\\pi \\cdot 10^{-7}} \\cdot 0{.}1 \\approx 1{.}6 \\cdot 10^5$ J, the kinetic energy of a car at $60$ km/h. Switching such magnets off must be done slowly and carefully.

## Exercises

1. The current in a $0{.}2$ H coil changes by $6$ A in $0{.}3$ s. Find the self-induction EMF.
2. A coil has $L = 4$ H and carries $0{.}5$ A. Find the flux linkage and the stored energy.
3. Find the inductance of a solenoid of $500$ turns, length $10$ cm and cross-section $2$ cm² without a core.
4. The self-induction EMF is $20$ V when the current changes at $50$ A/s. Find $L$.
5. The energy of the magnetic field of a $0{.}8$ H coil is $1{.}6$ J. Find the current.
6. A $12$ V battery is connected to a coil with $L = 0{.}6$ H and $R = 3$ Ω. Find the final current, the time constant and the final energy.
7. Explain why a lamp connected in parallel with a coil may flash brightly when the circuit is broken, and where the energy comes from.
8. In a coil of inductance $0{.}1$ H the current rises uniformly from $1$ A to $5$ A in $0{.}2$ s. Find the EMF and the change in stored energy.

### Answers

1. $4$ V. 2. $\\Phi = 2$ Wb, $W = 0{.}5$ J. 3. $n = 5000$ m⁻¹, $V = 2 \\cdot 10^{-5}$ m³, $L \\approx 6{.}3 \\cdot 10^{-4}$ H. 4. $0{.}4$ H. 5. $I = \\sqrt{\\dfrac{2 \\cdot 1{.}6}{0{.}8}} = 2$ A. 6. $4$ A, $0{.}2$ s, $4{.}8$ J. 7. The current falls quickly, so the self-induction EMF is large and drives a short strong current through the lamp; the energy was stored in the coil's magnetic field. 8. $\\varepsilon = 0{.}1 \\cdot 20 = 2$ V, $\\Delta W = \\dfrac{0{.}1}{2}(25 - 1) = 1{.}2$ J.`,
        hy: `## Ինքնաինդուկցիա

Կոճի հոսանքը ստեղծում է մագնիսական դաշտ, և այդ դաշտը հոսք է առաջացնում հենց այդ կոճով։ Եթե հոսանքը փոխվում է, հոսքը փոխվում է, և ըստ Ֆարադեյի օրենքի՝ նույն կոճում ԷլՇՈւ է առաջանում։ Սա **ինքնաինդուկցիան** է․ շղթան ինքն իր մեջ ԷլՇՈւ է մակածում։

Կոճի սեփական դաշտի հոսքը համեմատական է նրա հոսանքին․

> $$\\Phi = LI$$ որտեղ $L$-ը կոճի **ինդուկտիվությունն** է։ Միավորը՝ **հենրի**, $1$ Հն $= 1$ Վբ/Ա։

Ինդուկտիվությունը կախված է միայն շղթայի երկրաչափությունից և միջուկից․ երկար սոլենոիդի համար $L = \\mu\\mu_0 n^2 V$, որտեղ $n$-ը գալարների թիվն է մեկ մետրում, $V$-ն ծավալն է, իսկ $\\mu$-ն՝ միջուկի հարաբերական մագնիսական թափանցելիությունը (երկաթի համար՝ հազարներ)։ Ուղիղ լարն ունի աննշան ինդուկտիվություն, իսկ երկաթե միջուկով բազմագալար կոճը՝ մեծ։

Ֆարադեյի օրենքից **ինքնաինդուկցիայի ԷլՇՈւ-ն**

> $$\\varepsilon_{si} = -L\\dfrac{\\Delta I}{\\Delta t}$$

$1$ Հն ինդուկտիվությունը տալիս է $1$ Վ ԷլՇՈւ, երբ հոսանքը փոխվում է վայրկյանում $1$ Ա-ով։ Ըստ Լենցի կանոնի՝ ԷլՇՈւ-ն հակազդում է հոսանքի փոփոխությանը․ շղթան փակելիս դանդաղեցնում է հոսանքի աճը, իսկ բացելիս՝ պահում է հոսանքը։ Այսպիսով, կոճը զանգվածի էլեկտրական անալոգն է․ այն դիմադրում է հոսանքի փոփոխությանը, ինչպես զանգվածը՝ արագության փոփոխությանը։

## Միացնելը և անջատելը

**Շղթան փակելիս։** Երբ մարտկոցը միացնում են կոճին և լամպին, հոսանքը միանգամից չի հասնում իր վերջնական $\\dfrac{\\varepsilon}{R}$ արժեքին, այլ աճում է աստիճանաբար, քանի որ ինքնաինդուկցիայի ԷլՇՈւ-ն հակազդում է նրան։ Բնութագրական ժամանակը $\\tau = \\dfrac{L}{R}$ է․ $\\tau$-ից հետո հոսանքը հասնում է վերջնական արժեքի մոտ $63\\%$-ին, $5\\tau$-ից հետո՝ գործնականում ամբողջին։ Զուգահեռ շղթայում կոճին հաջորդաբար միացված լամպը վառվում է նկատելիորեն ավելի ուշ, քան ռեզիստորին հաջորդաբար միացվածը։

**Շղթան բացելիս։** Երբ անջատիչը բացում են, հոսանքը պետք է արագ ընկնի մինչև զրո, $\\dfrac{\\Delta I}{\\Delta t}$-ն մեծ է, և ինքնաինդուկցիայի ԷլՇՈւ-ն կարող է մարտկոցի լարումից շատ անգամ մեծ լինել։ Այն կայծ է առաջացնում անջատիչի կոնտակտներում և կարող է վառ բռնկում տալ կոճին զուգահեռ միացված լամպում։ Այսպես է մեքենայի բոցավառման կոճը $12$ Վ մարտկոցից ստանում հազարավոր վոլտ, և այդ պատճառով ռելեներով էլեկտրոնային շղթաներին անհրաժեշտ է պաշտպանիչ դիոդ։

## Մագնիսական դաշտի էներգիան

Որտեղի՞ց է գալիս կայծի էներգիան։ Քանի դեռ հոսանքն աճում էր, աղբյուրն աշխատանք էր կատարում ինքնաինդուկցիայի ԷլՇՈւ-ի դեմ, և այդ աշխատանքը կուտակվեց կոճի մագնիսական դաշտում․

> $$W = \\dfrac{LI^2}{2}$$

Համեմատեք կոնդենսատորի հետ․ $W = \\dfrac{CU^2}{2}$։ Կոնդենսատորն էներգիան կուտակում է էլեկտրական դաշտում, կոճը՝ մագնիսական։ Սոլենոիդի համար էներգիան կարելի է գրել դաշտի միջոցով․ $W = \\dfrac{B^2}{2\\mu\\mu_0}V$, ուստի մագնիսական դաշտի էներգիայի խտությունը $w = \\dfrac{B^2}{2\\mu\\mu_0}$ է։

**Օրինակ 1։** $0{,}5$ Հն կոճի հոսանքը $0{,}2$ վ-ում հավասարաչափ աճում է $0$-ից մինչև $4$ Ա։ $\\varepsilon_{si} = 0{,}5 \\cdot \\dfrac{4}{0{,}2} = 10$ Վ՝ ուղղված հոսանքին հակառակ։

**Օրինակ 2։** Կոճով անցնում է $2$ Ա հոսանք, և $N = 100$ գալարից յուրաքանչյուրով անցնում է $0{,}04$ Վբ հոսք։ Ընդհանուր հոսքակցումը $4$ Վբ է, ուստի $L = \\dfrac{4}{2} = 2$ Հն։

**Օրինակ 3։** $20$ սմ երկարությամբ, $4$ սմ² լայնական հատույթով, $1000$ գալարով սոլենոիդի համար $n = 5000$ մ⁻¹ և $V = 8 \\cdot 10^{-5}$ մ³․ $L = 4\\pi \\cdot 10^{-7} \\cdot 25 \\cdot 10^6 \\cdot 8 \\cdot 10^{-5} \\approx 2{,}5 \\cdot 10^{-3}$ Հն։ Երկաթե միջուկով ($\\mu \\approx 1000$) այն դառնում է $2{,}5$ Հն։

**Օրինակ 4։** $0{,}3$ Հն կոճի $10$ Ա հոսանքն անջատվում է $1$ մվ-ում։ Միջին ԷլՇՈւ-ն՝ $\\varepsilon = 0{,}3 \\cdot \\dfrac{10}{0{,}001} = 3000$ Վ, որը բավական է օդում մի քանի միլիմետր երկարությամբ կայծ առաջացնելու համար։

**Օրինակ 5։** 4-րդ օրինակի կոճում կուտակված էներգիան՝ $W = \\dfrac{0{,}3 \\cdot 100}{2} = 15$ Ջ։ Նույն էներգիան $100$ մկՖ կոնդենսատորում կպահանջեր $U = \\sqrt{\\dfrac{2W}{C}} = \\sqrt{\\dfrac{30}{10^{-4}}} \\approx 550$ Վ։

**Օրինակ 6։** $L = 2$ Հն և $R = 4$ Օմ շղթան միացնում են $12$ Վ-ի։ Վերջնական հոսանքը $3$ Ա է, ժամանակի հաստատունը՝ $\\tau = 0{,}5$ վ։ $0{,}5$ վ-ից հետո հոսանքը մոտ $1{,}9$ Ա է, $2{,}5$ վ-ից հետո՝ գործնականում $3$ Ա։ Վերջում կուտակված էներգիան $\\dfrac{2 \\cdot 9}{2} = 9$ Ջ է։

**Օրինակ 7։** $5$ մՀն կոճում հոսանքը փոխվում է ըստ գրաֆիկի․ $4$ մվ-ում աճում է $0$-ից մինչև $2$ Ա, $4$ մվ հաստատուն է մնում, $2$ մվ-ում ընկնում է մինչև $0$։ ԷլՇՈւ-ն․ առաջին միջակայքում՝ $-2{,}5$ Վ, երկրորդում՝ $0$, երրորդում՝ $+5$ Վ (հակառակ նշանով և երկու անգամ մեծ, քանի որ փոփոխությունն երկու անգամ արագ է)։

**Օրինակ 8։** Մեծ լաբորատոր մագնիսի ներսում դաշտը $2$ Տ է $0{,}1$ մ³ ծավալում։ Էներգիան՝ $W = \\dfrac{B^2}{2\\mu_0}V = \\dfrac{4}{2 \\cdot 4\\pi \\cdot 10^{-7}} \\cdot 0{,}1 \\approx 1{,}6 \\cdot 10^5$ Ջ՝ $60$ կմ/ժ արագությամբ մեքենայի կինետիկ էներգիան։ Նման մագնիսներն անջատում են դանդաղ և զգուշությամբ։

## Վարժություններ

1. $0{,}2$ Հն կոճի հոսանքը $0{,}3$ վ-ում փոխվում է $6$ Ա-ով։ Գտեք ինքնաինդուկցիայի ԷլՇՈւ-ն։
2. Կոճն ունի $L = 4$ Հն և $0{,}5$ Ա հոսանք։ Գտեք հոսքակցումը և կուտակված էներգիան։
3. Գտեք առանց միջուկի $500$ գալարով, $10$ սմ երկարությամբ, $2$ սմ² լայնական հատույթով սոլենոիդի ինդուկտիվությունը։
4. Ինքնաինդուկցիայի ԷլՇՈւ-ն $20$ Վ է, երբ հոսանքը փոխվում է $50$ Ա/վ արագությամբ։ Գտեք $L$-ը։
5. $0{,}8$ Հն կոճի մագնիսական դաշտի էներգիան $1{,}6$ Ջ է։ Գտեք հոսանքը։
6. $12$ Վ մարտկոցը միացնում են $L = 0{,}6$ Հն և $R = 3$ Օմ կոճին։ Գտեք վերջնական հոսանքը, ժամանակի հաստատունը և վերջնական էներգիան։
7. Բացատրեք, թե ինչու կարող է կոճին զուգահեռ միացված լամպը վառ բռնկվել շղթան բացելիս, և որտեղից է գալիս էներգիան։
8. $0{,}1$ Հն ինդուկտիվությամբ կոճում հոսանքը $0{,}2$ վ-ում հավասարաչափ աճում է $1$ Ա-ից մինչև $5$ Ա։ Գտեք ԷլՇՈւ-ն և կուտակված էներգիայի փոփոխությունը։

### Պատասխաններ

1. $4$ Վ։ 2. $\\Phi = 2$ Վբ, $W = 0{,}5$ Ջ։ 3. $n = 5000$ մ⁻¹, $V = 2 \\cdot 10^{-5}$ մ³, $L \\approx 6{,}3 \\cdot 10^{-4}$ Հն։ 4. $0{,}4$ Հն։ 5. $I = \\sqrt{\\dfrac{2 \\cdot 1{,}6}{0{,}8}} = 2$ Ա։ 6. $4$ Ա, $0{,}2$ վ, $4{,}8$ Ջ։ 7. Հոսանքն արագ է ընկնում, ուստի ինքնաինդուկցիայի ԷլՇՈւ-ն մեծ է և լամպով կարճ ուժեղ հոսանք է անցկացնում, էներգիան կուտակված էր կոճի մագնիսական դաշտում։ 8. $\\varepsilon = 0{,}1 \\cdot 20 = 2$ Վ, $\\Delta W = \\dfrac{0{,}1}{2}(25 - 1) = 1{,}2$ Ջ։`,
        ru: `## Самоиндукция

Ток в катушке создаёт магнитное поле, и это поле даёт поток через саму катушку. Если ток меняется, меняется поток, и по закону Фарадея в той же катушке возникает ЭДС. Это **самоиндукция**: цепь наводит ЭДС сама в себе.

Поток собственного поля катушки пропорционален её току:

> $$\\Phi = LI,$$ где $L$ — **индуктивность** катушки. Единица: **генри**, $1$ Гн $= 1$ Вб/А.

Индуктивность зависит только от геометрии цепи и от сердечника: для длинного соленоида $L = \\mu\\mu_0 n^2 V$, где $n$ — число витков на метр, $V$ — объём, $\\mu$ — относительная магнитная проницаемость сердечника (для железа тысячи). У прямого провода индуктивность ничтожна, у многовитковой катушки с железным сердечником — большая.

Из закона Фарадея **ЭДС самоиндукции**

> $$\\varepsilon_{si} = -L\\dfrac{\\Delta I}{\\Delta t}.$$

Индуктивность $1$ Гн даёт ЭДС $1$ В при изменении тока на $1$ А в секунду. По правилу Ленца ЭДС противодействует изменению тока: замедляет рост тока при замыкании цепи и поддерживает ток при размыкании. Катушка — электрический аналог массы: она сопротивляется изменению тока, как масса сопротивляется изменению скорости.

## Включение и выключение

**Замыкание цепи.** Когда батарею подключают к катушке и лампе, ток не сразу достигает конечного значения $\\dfrac{\\varepsilon}{R}$, а растёт постепенно, потому что ЭДС самоиндукции ему противодействует. Характерное время $\\tau = \\dfrac{L}{R}$: через $\\tau$ ток достигает примерно $63\\%$ конечного значения, через $5\\tau$ — практически всего. В параллельной цепи лампа, включённая последовательно с катушкой, загорается заметно позже лампы, включённой последовательно с резистором.

**Размыкание цепи.** Когда ключ размыкают, ток должен быстро упасть до нуля, $\\dfrac{\\Delta I}{\\Delta t}$ велико, и ЭДС самоиндукции может во много раз превышать напряжение батареи. Она даёт искру на контактах ключа и может вызвать яркую вспышку лампы, подключённой параллельно катушке. Так катушка зажигания автомобиля получает тысячи вольт от батареи $12$ В, и поэтому электронным схемам с реле нужен защитный диод.

## Энергия магнитного поля

Откуда берётся энергия искры? Пока ток рос, источник совершал работу против ЭДС самоиндукции, и эта работа запасалась в магнитном поле катушки:

> $$W = \\dfrac{LI^2}{2}.$$

Сравните с конденсатором: $W = \\dfrac{CU^2}{2}$. Конденсатор запасает энергию в электрическом поле, катушка — в магнитном. Для соленоида энергию можно записать через поле: $W = \\dfrac{B^2}{2\\mu\\mu_0}V$, так что плотность энергии магнитного поля $w = \\dfrac{B^2}{2\\mu\\mu_0}$.

**Пример 1.** Ток в катушке $0{,}5$ Гн равномерно растёт от $0$ до $4$ А за $0{,}2$ с. $\\varepsilon_{si} = 0{,}5 \\cdot \\dfrac{4}{0{,}2} = 10$ В, направлена против тока.

**Пример 2.** По катушке течёт $2$ А, и через каждый из $N = 100$ витков проходит поток $0{,}04$ Вб. Полное потокосцепление $4$ Вб, так что $L = \\dfrac{4}{2} = 2$ Гн.

**Пример 3.** Соленоид длиной $20$ см, сечением $4$ см² и $1000$ витков имеет $n = 5000$ м⁻¹ и $V = 8 \\cdot 10^{-5}$ м³: $L = 4\\pi \\cdot 10^{-7} \\cdot 25 \\cdot 10^6 \\cdot 8 \\cdot 10^{-5} \\approx 2{,}5 \\cdot 10^{-3}$ Гн. С железным сердечником ($\\mu \\approx 1000$) получается $2{,}5$ Гн.

**Пример 4.** Ток $10$ А в катушке $0{,}3$ Гн прерывают за $1$ мс. Средняя ЭДС: $\\varepsilon = 0{,}3 \\cdot \\dfrac{10}{0{,}001} = 3000$ В — достаточно, чтобы в воздухе проскочила искра длиной несколько миллиметров.

**Пример 5.** Энергия, запасённая в катушке из примера 4: $W = \\dfrac{0{,}3 \\cdot 100}{2} = 15$ Дж. Для той же энергии в конденсаторе $100$ мкФ понадобилось бы $U = \\sqrt{\\dfrac{2W}{C}} = \\sqrt{\\dfrac{30}{10^{-4}}} \\approx 550$ В.

**Пример 6.** Цепь с $L = 2$ Гн и $R = 4$ Ом подключают к $12$ В. Конечный ток $3$ А, постоянная времени $\\tau = 0{,}5$ с. Через $0{,}5$ с ток около $1{,}9$ А; через $2{,}5$ с — практически $3$ А. Запасённая в итоге энергия $\\dfrac{2 \\cdot 9}{2} = 9$ Дж.

**Пример 7.** В катушке $5$ мГн ток меняется по графику: растёт от $0$ до $2$ А за $4$ мс, остаётся постоянным $4$ мс, падает до $0$ за $2$ мс. ЭДС: $-2{,}5$ В на первом участке, $0$ на втором, $+5$ В на третьем (противоположного знака и вдвое больше, потому что изменение вдвое быстрее).

**Пример 8.** Поле внутри большого лабораторного магнита $2$ Тл в объёме $0{,}1$ м³. Энергия: $W = \\dfrac{B^2}{2\\mu_0}V = \\dfrac{4}{2 \\cdot 4\\pi \\cdot 10^{-7}} \\cdot 0{,}1 \\approx 1{,}6 \\cdot 10^5$ Дж — кинетическая энергия автомобиля на скорости $60$ км/ч. Выключать такие магниты нужно медленно и осторожно.

## Упражнения

1. Ток в катушке $0{,}2$ Гн меняется на $6$ А за $0{,}3$ с. Найдите ЭДС самоиндукции.
2. Катушка имеет $L = 4$ Гн и ток $0{,}5$ А. Найдите потокосцепление и запасённую энергию.
3. Найдите индуктивность соленоида из $500$ витков длиной $10$ см и сечением $2$ см² без сердечника.
4. ЭДС самоиндукции равна $20$ В при скорости изменения тока $50$ А/с. Найдите $L$.
5. Энергия магнитного поля катушки $0{,}8$ Гн равна $1{,}6$ Дж. Найдите ток.
6. Батарею $12$ В подключают к катушке с $L = 0{,}6$ Гн и $R = 3$ Ом. Найдите конечный ток, постоянную времени и конечную энергию.
7. Объясните, почему лампа, подключённая параллельно катушке, может ярко вспыхнуть при размыкании цепи, и откуда берётся энергия.
8. В катушке индуктивностью $0{,}1$ Гн ток равномерно растёт от $1$ А до $5$ А за $0{,}2$ с. Найдите ЭДС и изменение запасённой энергии.

### Ответы

1. $4$ В. 2. $\\Phi = 2$ Вб, $W = 0{,}5$ Дж. 3. $n = 5000$ м⁻¹, $V = 2 \\cdot 10^{-5}$ м³, $L \\approx 6{,}3 \\cdot 10^{-4}$ Гн. 4. $0{,}4$ Гн. 5. $I = \\sqrt{\\dfrac{2 \\cdot 1{,}6}{0{,}8}} = 2$ А. 6. $4$ А, $0{,}2$ с, $4{,}8$ Дж. 7. Ток падает быстро, поэтому ЭДС самоиндукции велика и прогоняет через лампу короткий сильный ток; энергия была запасена в магнитном поле катушки. 8. $\\varepsilon = 0{,}1 \\cdot 20 = 2$ В, $\\Delta W = \\dfrac{0{,}1}{2}(25 - 1) = 1{,}2$ Дж.`,
      },
      [
        q(t("The unit of inductance is the…", "Ինդուկտիվության միավորը…", "Единица индуктивности —"), [t("weber", "վեբերն է", "вебер"), t("tesla", "տեսլան է", "тесла"), t("henry", "հենրին է", "генри")], 2),
        q(t("The self-induction EMF is proportional to…", "Ինքնաինդուկցիայի ԷլՇՈւ-ն համեմատական է…", "ЭДС самоиндукции пропорциональна…"), [t("the current", "հոսանքին", "току"), t("the rate of change of the current", "հոսանքի փոփոխման արագությանը", "скорости изменения тока"), t("the resistance", "դիմադրությանը", "сопротивлению")], 1),
        q(t("When a circuit with a coil is closed, the current…", "Կոճով շղթան փակելիս հոսանքը…", "При замыкании цепи с катушкой ток…"), [t("rises gradually", "աճում է աստիճանաբար", "растёт постепенно"), t("jumps to its final value at once", "միանգամից հասնում է վերջնական արժեքին", "сразу достигает конечного значения"), t("first flows backwards", "սկզբում հոսում է հակառակ ուղղությամբ", "сначала течёт в обратную сторону")], 0),
        q(t("The energy of the magnetic field of a coil is W =", "Կոճի մագնիսական դաշտի էներգիան W =", "Энергия магнитного поля катушки W ="), [t("LI/2", "LI/2", "LI/2"), t("LI²/2", "LI²/2", "LI²/2"), t("L²I/2", "L²I/2", "L²I/2")], 1),
        q(t("A coil of 2 H carries 3 A. The stored energy is…", "2 Հն կոճով անցնում է 3 Ա հոսանք։ Կուտակված էներգիան…", "По катушке 2 Гн течёт ток 3 А. Запасённая энергия…"), [t("6 J", "6 Ջ է", "6 Дж"), t("9 J", "9 Ջ է", "9 Дж"), t("18 J", "18 Ջ է", "18 Дж")], 1),
        q(t("A large EMF appears at the moment a coil circuit is…", "Մեծ ԷլՇՈւ առաջանում է այն պահին, երբ կոճի շղթան…", "Большая ЭДС возникает в момент, когда цепь с катушкой…"), [t("opened", "բացում են", "размыкают"), t("carrying a steady current", "հաստատուն հոսանք է անցկացնում", "несёт постоянный ток"), t("heated", "տաքացնում են", "нагревают")], 0),
      ],
    ),
  ],
};
