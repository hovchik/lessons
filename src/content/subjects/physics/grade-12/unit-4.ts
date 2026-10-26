import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Physics and technology", "Ֆիզիկա և տեխնոլոգիա", "Физика и технологии"),
  summary: t("Semiconductor electronics, lasers and fibre optics, renewable energy, physics of the modern world.", "Կիսահաղորդչային էլեկտրոնիկա, լազերներ և օպտիկամանրաթել, վերականգնվող էներգիա, ժամանակակից աշխարհի ֆիզիկա։", "Полупроводниковая электроника, лазеры и оптоволокно, возобновляемая энергия, физика современного мира."),
  lessons: [
    lesson(
      "electronics",
      ["From transistor to microchip", "Տրանզիստորից միկրոսխեմա", "От транзистора к микросхеме"],
      {
        en: ["Explain how a p–n junction rectifies current and how a bipolar and a field-effect transistor amplify and switch", "Describe logic gates, binary numbers and how a microprocessor is built from millions of transistors", "Explain Moore's law, the physical limits of miniaturisation and the role of lithography"],
        hy: ["Բացատրել, թե ինչպես է p–n անցումն ուղղում հոսանքը և ինչպես են երկբևեռ և դաշտային տրանզիստորներն ուժեղացնում ու փոխանջատում", "Նկարագրել տրամաբանական տարրերը, երկուական թվերը և թե ինչպես է միկրոպրոցեսորը կառուցված միլիոնավոր տրանզիստորներից", "Բացատրել Մուրի օրենքը, մանրացման ֆիզիկական սահմանները և լիտոգրաֆիայի դերը"],
        ru: ["Объяснять, как p–n-переход выпрямляет ток и как биполярный и полевой транзисторы усиливают и переключают", "Описывать логические элементы, двоичные числа и то, как микропроцессор построен из миллионов транзисторов", "Объяснять закон Мура, физические пределы миниатюризации и роль литографии"],
      },
      {
        en: `## The p–n junction

Silicon doped with phosphorus (5 valence electrons) has free **electrons**: n-type. Doped with boron (3 valence electrons) it has **holes**: p-type. Where the two meet, electrons and holes recombine and leave a thin **depletion layer** with a built-in field of about $0{.}7$ V. The junction is a **diode**:

> - **Forward bias** (plus on p): the barrier shrinks, current flows freely above $0{.}7$ V.
> - **Reverse bias** (plus on n): the barrier grows, only a microampere of leakage flows.

A diode turns alternating current into pulsing direct current (**rectifier**); four diodes in a bridge use both half-waves. A **light-emitting diode (LED)** emits a photon at each recombination, its colour set by the band gap ($1{.}8$ eV red, $2{.}3$ eV green, $3$ eV blue, the blue LED of 1993 earning a Nobel prize); a **photodiode** and a **solar cell** do the reverse.

## The transistor

Invented in 1947 by Bardeen, Brattain and Shockley at Bell Labs, the transistor replaced the fragile, hot vacuum tube.

> **Bipolar transistor (n-p-n):** a thin p-layer, the **base**, between the **emitter** and the **collector**. A small base current $I_B$ controls a collector current $I_C = \\beta I_B$ with $\\beta \\approx 100$: a small signal is amplified.
>
> **Field-effect transistor (MOSFET):** a voltage on the **gate**, insulated by a layer of silicon oxide, creates or removes a conducting channel between **source** and **drain**. It draws almost no input current and is the building block of all microchips.

Two uses: as an **amplifier** (radio, audio, sensors) and as a **switch**: closed, it passes current ("1"); open, it blocks it ("0"). Switching takes less than a nanosecond.

## Logic and the microchip

Computers store everything as **binary** digits: $13 = 1101_2 = 8 + 4 + 1$. Transistors are combined into **logic gates**:

| Gate | Output is 1 when… | Transistors (CMOS) |
|---|---|---|
| NOT | input is 0 | 2 |
| AND | both inputs are 1 | 6 |
| OR | at least one input is 1 | 6 |
| NAND | not both inputs are 1 | 4 |

Any computation can be built from NAND gates alone: adders, memory cells (a **flip-flop** of two cross-coupled gates stores one bit), multiplexers and so on. In 1958 Kilby and Noyce made the first **integrated circuit**: all transistors, resistors and wires on one piece of silicon. A modern **microprocessor** holds $10^{10}$–$10^{11}$ transistors on a chip of about $1$ cm², clocked at $3$–$5$ GHz; a **memory chip** (DRAM) stores each bit as the charge on a tiny capacitor that must be refreshed thousands of times a second; **flash** memory stores charge on an insulated floating gate for years.

## Making chips: lithography

A chip is built layer by layer. The silicon wafer is coated with light-sensitive **photoresist**; a pattern is projected through a mask with ultraviolet light; the exposed resist is washed off; the open areas are etched or doped; the process is repeated some 100 times. The smallest feature is limited by diffraction, about $\\lambda/2$; so the industry moved from mercury lamps ($365$ nm) to excimer lasers ($193$ nm) and, since 2019, to **extreme ultraviolet** at $13{.}5$ nm, produced by vaporising tin droplets with a laser and focused by multilayer mirrors, since no lens is transparent at that wavelength.

## Moore's law and its limits

Gordon Moore noted in 1965 that the number of transistors per chip doubles about every two years; this held for over fifty years, from $2000$ transistors (Intel 4004, 1971) to $10^{11}$. The limits are physical: gates are now about $20$ nm, some $100$ atoms, across; electrons **tunnel** through insulating layers a few atoms thick, causing leakage; heat of $100$ W from $1$ cm² must be removed; and a signal at $5$ GHz travels only $6$ cm per cycle. Progress now comes from 3D stacking, many cores working in parallel, specialised chips for graphics and neural networks, and research on quantum computers that use superposition of quantum bits.

## Worked examples

**Example 1.** A silicon diode in series with a $1$ kΩ resistor is connected to $5$ V forward. Current?

$I = (5 - 0{.}7)/1000 = 4{.}3$ mA.

**Example 2.** The same circuit with the battery reversed.

The diode blocks; the current is the leakage, about $10^{-6}$ A, practically zero.

**Example 3.** A transistor with $\\beta = 120$ has base current $50$ μA. Collector current?

$I_C = 120 \\cdot 50 \\cdot 10^{-6} = 6$ mA.

**Example 4.** Convert $45$ to binary and $101101_2$ to decimal.

$45 = 32 + 8 + 4 + 1 = 101101_2$; and $101101_2 = 32 + 8 + 4 + 1 = 45$.

**Example 5.** How many different values can a byte (8 bits) hold? How many bytes in a $16$ GB memory?

$2^8 = 256$ values; $16 \\cdot 2^{30} \\approx 1{.}7 \\cdot 10^{10}$ bytes, that is $1{.}4 \\cdot 10^{11}$ bits, each stored on its own capacitor.

**Example 6.** A chip has $2 \\cdot 10^{10}$ transistors on $1$ cm². Average area per transistor and its side.

$A = 10^{-4} / 2 \\cdot 10^{10} = 5 \\cdot 10^{-15}$ m²; side $\\sqrt{A} \\approx 7 \\cdot 10^{-8}$ m $= 70$ nm, about $300$ silicon atoms.

**Example 7.** Moore's law: starting from $2300$ transistors in 1971, how many doublings and what count by 2021 at one doubling per two years?

$25$ doublings; $2300 \\cdot 2^{25} \\approx 2300 \\cdot 3{.}4 \\cdot 10^7 \\approx 8 \\cdot 10^{10}$, close to real chips.

**Example 8.** Resolution limit of lithography with $193$ nm light and with $13{.}5$ nm EUV.

About $\\lambda/2$: $97$ nm and $7$ nm. Clever tricks (immersion in water, multiple patterning) pushed $193$ nm down to about $40$ nm; EUV reaches below $10$ nm.

## Exercises

1. What is the difference between n-type and p-type silicon? What is a hole?
2. Why does a diode conduct in one direction only? Sketch in words what the depletion layer does under forward and reverse bias.
3. A diode with $0{.}7$ V drop and a $470$ Ω resistor are connected to $12$ V. Find the current and the power dissipated in the resistor.
4. A transistor has $\\beta = 80$. What base current gives $I_C = 4$ mA?
5. Name the three terminals of a bipolar transistor and of a MOSFET.
6. Write $100$ in binary and $11111111_2$ in decimal. Why is a byte able to hold numbers from $0$ to $255$?
7. Give the truth table of a NAND gate and show how a NOT gate can be made from it.
8. Name three physical obstacles to making transistors ever smaller.

### Answers

1. n-type has donor atoms (phosphorus) giving free electrons; p-type has acceptor atoms (boron) giving holes. A hole is a missing electron in a bond that behaves as a positive mobile charge.
2. Forward bias pushes electrons and holes toward the junction, narrowing the depletion layer so current flows; reverse bias pulls them away, widening the insulating layer.
3. $I = 11{.}3/470 \\approx 24$ mA; $P = I^2 R = (0{.}024)^2 \\cdot 470 \\approx 0{.}27$ W.
4. $I_B = 4/80 = 0{.}05$ mA $= 50$ μA.
5. Emitter, base, collector; source, gate, drain.
6. $100 = 1100100_2$; $11111111_2 = 255$. Eight bits give $2^8 = 256$ combinations.
7. Output is 0 only when both inputs are 1, otherwise 1. Joining both inputs together gives NOT.
8. Tunnelling through thin insulators, heat removal, atomic size of features, cost and resolution of lithography.`,
        hy: `## p–n անցում

Ֆոսֆորով (5 վալենտային էլեկտրոն) լեգիրված սիլիցիումն ունի ազատ **էլեկտրոններ**․ n-տիպ։ Բորով (3 վալենտային էլեկտրոն) լեգիրվածն ունի **խոռոչներ**․ p-տիպ։ Որտեղ երկուսը հանդիպում են, էլեկտրոններն ու խոռոչները ռեկոմբինացվում են և թողնում բարակ **աղքատացված շերտ**՝ մոտ $0{,}7$ Վ ներքին դաշտով։ Անցումը **դիոդ** է․

> - **Ուղիղ շեղում** (պլյուսը p-ի վրա)․ պատնեշը փոքրանում է, հոսանքն ազատ հոսում է $0{,}7$ Վ-ից բարձր։
> - **Հակառակ շեղում** (պլյուսը n-ի վրա)․ պատնեշը մեծանում է, հոսում է միայն միկրոամպերի կարգի արտահոսք։

Դիոդը փոփոխական հոսանքը վերածում է բաբախող հաստատուն հոսանքի (**ուղղիչ**)․ կամրջակով միացված չորս դիոդ օգտագործում են երկու կիսաալիքները։ **Լուսադիոդը (LED)** յուրաքանչյուր ռեկոմբինացիայի ժամանակ ֆոտոն է արձակում, որի գույնը որոշում է արգելված գոտու լայնությունը ($1{,}8$ էՎ կարմիր, $2{,}3$ էՎ կանաչ, $3$ էՎ կապույտ․ 1993 թ․ կապույտ լուսադիոդը Նոբելյան մրցանակի արժանացավ)․ **ֆոտոդիոդն** ու **արևային էլեմենտը** հակառակն են անում։

## Տրանզիստոր

1947 թ․ Bell Labs-ում Բարդինի, Բրատեյնի և Շոքլիի հայտնագործած տրանզիստորը փոխարինեց փխրուն, տաք էլեկտրոնային լամպին։

> **Երկբևեռ տրանզիստոր (n-p-n)․** բարակ p-շերտ՝ **բազա**, **էմիտերի** և **կոլեկտորի** միջև։ Փոքր բազայի հոսանքը $I_B$ կառավարում է կոլեկտորի հոսանքը $I_C = \\beta I_B$, որտեղ $\\beta \\approx 100$․ փոքր ազդանշանն ուժեղանում է։
>
> **Դաշտային տրանզիստոր (MOSFET)․** սիլիցիումի օքսիդի շերտով մեկուսացված **փականի** վրա լարումը ստեղծում կամ վերացնում է հաղորդող կապուղի **ակունքի** և **ելքի** միջև։ Այն գրեթե մուտքային հոսանք չի սպառում և բոլոր միկրոսխեմաների շինանյութն է։

Երկու կիրառություն․ որպես **ուժեղարար** (ռադիո, աուդիո, սենսորներ) և որպես **փոխանջատիչ**․ փակ վիճակում հոսանք է անցկացնում («1»), բաց վիճակում՝ արգելում («0»)։ Փոխանջատումը նանովայրկյանից պակաս է տևում։

## Տրամաբանություն և միկրոսխեմա

Համակարգիչներն ամեն ինչ պահում են **երկուական** թվանշաններով․ $13 = 1101_2 = 8 + 4 + 1$։ Տրանզիստորները միավորվում են **տրամաբանական տարրերի**․

| Տարր | Ելքը 1 է, երբ… | Տրանզիստորներ (CMOS) |
|---|---|---|
| ՈՉ (NOT) | մուտքը 0 է | 2 |
| ԵՎ (AND) | երկու մուտքերն էլ 1 են | 6 |
| ԿԱՄ (OR) | առնվազն մեկ մուտք 1 է | 6 |
| ԵՎ-ՈՉ (NAND) | ոչ թե երկու մուտքերն էլ 1 են | 4 |

Ցանկացած հաշվարկ կարելի է կառուցել միայն NAND տարրերից․ գումարիչներ, հիշողության բջիջներ (երկու խաչաձև միացված տարրերից **տրիգերը** պահում է մեկ բիթ), մուլտիպլեքսորներ և այլն։ 1958 թ․ Քիլբին և Նոյսը ստեղծեցին առաջին **ինտեգրալ սխեման**․ բոլոր տրանզիստորները, ռեզիստորներն ու լարերը սիլիցիումի մեկ կտորի վրա։ Ժամանակակից **միկրոպրոցեսորը** մոտ $1$ սմ² բյուրեղի վրա պարունակում է $10^{10}$–$10^{11}$ տրանզիստոր՝ $3$–$5$ ԳՀց տակտով․ **հիշողության բյուրեղը** (DRAM) յուրաքանչյուր բիթ պահում է որպես փոքրիկ կոնդենսատորի լիցք, որը վայրկյանում հազարավոր անգամ պետք է թարմացվի․ **ֆլեշ** հիշողությունը լիցքը տարիներով պահում է մեկուսացված լողացող փականի վրա։

## Բյուրեղների արտադրություն․ լիտոգրաֆիա

Բյուրեղը կառուցվում է շերտ առ շերտ։ Սիլիցիումի թիթեղը պատվում է լուսազգայուն **ֆոտոռեզիստով**․ դիմակի միջով ուլտրամանուշակագույն լույսով պատկեր է պրոյեկտվում․ լուսավորված ռեզիստը լվացվում է․ բաց տեղերը փորագրվում կամ լեգիրվում են․ պրոցեսը կրկնվում է մոտ 100 անգամ։ Ամենափոքր տարրը սահմանափակված է դիֆրակցիայով՝ մոտ $\\lambda/2$․ ուստի արդյունաբերությունը սնդիկային լամպերից ($365$ նմ) անցավ էքսիմերային լազերների ($193$ նմ) և 2019 թ․-ից՝ **ծայրահեղ ուլտրամանուշակագույնի** $13{,}5$ նմ-ում, որը ստացվում է անագի կաթիլները լազերով գոլորշիացնելով և կիզակետվում բազմաշերտ հայելիներով, քանի որ այդ ալիքի երկարության համար ոչ մի ոսպնյակ թափանցիկ չէ։

## Մուրի օրենքը և նրա սահմանները

Գորդոն Մուրը 1965 թ․ նկատեց, որ մեկ բյուրեղի տրանզիստորների թիվը մոտ երկու տարին մեկ կրկնապատկվում է․ դա պահպանվեց ավելի քան հիսուն տարի՝ $2000$ տրանզիստորից (Intel 4004, 1971) մինչև $10^{11}$։ Սահմաններն արդեն ֆիզիկական են․ փականներն այժմ մոտ $20$ նմ են՝ մոտ $100$ ատոմ․ էլեկտրոնները **թունելով** անցնում են մի քանի ատոմ հաստությամբ մեկուսիչ շերտերով՝ առաջացնելով արտահոսք․ $1$ սմ²-ից պետք է հեռացնել $100$ Վտ ջերմություն․ իսկ $5$ ԳՀց ազդանշանը մեկ ցիկլում անցնում է ընդամենը $6$ սմ։ Առաջընթացն այժմ գալիս է եռաչափ դասավորումից, զուգահեռ աշխատող բազմաթիվ միջուկներից, գրաֆիկայի և նեյրոնային ցանցերի մասնագիտացված բյուրեղներից և քվանտային բիթերի սուպերպոզիցիա օգտագործող քվանտային համակարգիչների հետազոտություններից։

## Լուծված օրինակներ

**Օրինակ 1։** $1$ կՕմ ռեզիստորին հաջորդաբար միացված սիլիցիումային դիոդը միացված է $5$ Վ-ի ուղիղ ուղղությամբ։ Հոսա՞նքը։

$I = (5 - 0{,}7)/1000 = 4{,}3$ մԱ։

**Օրինակ 2։** Նույն շղթան մարտկոցը շրջելով։

Դիոդն արգելում է․ հոսանքն արտահոսքն է՝ մոտ $10^{-6}$ Ա, գործնականում զրո։

**Օրինակ 3։** $\\beta = 120$ տրանզիստորի բազայի հոսանքը $50$ մկԱ է։ Կոլեկտորի հոսա՞նքը։

$I_C = 120 \\cdot 50 \\cdot 10^{-6} = 6$ մԱ։

**Օրինակ 4։** $45$-ը փոխակերպեք երկուականի, իսկ $101101_2$-ը՝ տասականի։

$45 = 32 + 8 + 4 + 1 = 101101_2$․ և $101101_2 = 32 + 8 + 4 + 1 = 45$։

**Օրինակ 5։** Քանի՞ տարբեր արժեք կարող է պահել բայթը (8 բիթ)։ Քանի՞ բայթ կա $16$ ԳԲ հիշողության մեջ։

$2^8 = 256$ արժեք․ $16 \\cdot 2^{30} \\approx 1{,}7 \\cdot 10^{10}$ բայթ, այսինքն՝ $1{,}4 \\cdot 10^{11}$ բիթ, յուրաքանչյուրն իր կոնդենսատորի վրա։

**Օրինակ 6։** Բյուրեղն ունի $2 \\cdot 10^{10}$ տրանզիստոր $1$ սմ²-ի վրա։ Մեկ տրանզիստորի միջին մակերեսը և նրա կողմը։

$A = 10^{-4} / 2 \\cdot 10^{10} = 5 \\cdot 10^{-15}$ մ²․ կողմը $\\sqrt{A} \\approx 7 \\cdot 10^{-8}$ մ $= 70$ նմ, մոտ $300$ սիլիցիումի ատոմ։

**Օրինակ 7։** Մուրի օրենք․ 1971 թ․ $2300$ տրանզիստորից սկսած՝ քանի՞ կրկնապատկում և ի՞նչ քանակ մինչև 2021 թ․՝ երկու տարին մեկ կրկնապատկումով։

$25$ կրկնապատկում․ $2300 \\cdot 2^{25} \\approx 2300 \\cdot 3{,}4 \\cdot 10^7 \\approx 8 \\cdot 10^{10}$, մոտ է իրական բյուրեղներին։

**Օրինակ 8։** Լիտոգրաֆիայի լուծունակության սահմանը $193$ նմ լույսով և $13{,}5$ նմ ծայրահեղ ուլտրամանուշակագույնով։

Մոտ $\\lambda/2$․ $97$ նմ և $7$ նմ։ Հնարքները (ջրի մեջ ընկղմում, բազմակի նախշավորում) $193$ նմ-ը հասցրին մոտ $40$ նմ-ի․ ծայրահեղ ուլտրամանուշակագույնը հասնում է $10$ նմ-ից ցածր։

## Վարժություններ

1. Ո՞րն է n-տիպի և p-տիպի սիլիցիումի տարբերությունը։ Ի՞նչ է խոռոչը։
2. Ինչո՞ւ է դիոդը հաղորդում միայն մեկ ուղղությամբ։ Բառերով նկարագրեք, թե ինչ է անում աղքատացված շերտն ուղիղ և հակառակ շեղման դեպքում։
3. $0{,}7$ Վ անկումով դիոդը և $470$ Օմ ռեզիստորը միացված են $12$ Վ-ի։ Գտեք հոսանքը և ռեզիստորում անջատվող հզորությունը։
4. Տրանզիստորի $\\beta = 80$։ Բազայի ի՞նչ հոսանք է տալիս $I_C = 4$ մԱ։
5. Անվանեք երկբևեռ տրանզիստորի և MOSFET-ի երեք ելուստները։
6. Գրեք $100$-ը երկուականով և $11111111_2$-ը տասականով։ Ինչո՞ւ կարող է բայթը պահել $0$-ից $255$ թվերը։
7. Տվեք NAND տարրի ճշմարտության աղյուսակը և ցույց տվեք, թե ինչպես կարելի է դրանից NOT տարր ստանալ։
8. Նշեք տրանզիստորներն ավելի փոքր դարձնելու երեք ֆիզիկական խոչընդոտ։

### Պատասխաններ

1. n-տիպն ունի դոնոր ատոմներ (ֆոսֆոր), որոնք ազատ էլեկտրոններ են տալիս․ p-տիպն ունի ակցեպտոր ատոմներ (բոր), որոնք խոռոչներ են տալիս։ Խոռոչը կապում բացակայող էլեկտրոնն է, որն իրեն պահում է որպես դրական շարժուն լիցք։
2. Ուղիղ շեղումն էլեկտրոններն ու խոռոչները մղում է դեպի անցումը՝ նեղացնելով աղքատացված շերտը, և հոսանքը հոսում է․ հակառակ շեղումը հեռացնում է դրանք՝ լայնացնելով մեկուսիչ շերտը։
3. $I = 11{,}3/470 \\approx 24$ մԱ․ $P = I^2 R = (0{,}024)^2 \\cdot 470 \\approx 0{,}27$ Վտ։
4. $I_B = 4/80 = 0{,}05$ մԱ $= 50$ մկԱ։
5. Էմիտեր, բազա, կոլեկտոր․ ակունք, փական, ելք։
6. $100 = 1100100_2$․ $11111111_2 = 255$։ Ութ բիթը տալիս է $2^8 = 256$ համակցություն։
7. Ելքը 0 է միայն, երբ երկու մուտքերն էլ 1 են, այլապես՝ 1։ Երկու մուտքերը միացնելով՝ ստացվում է NOT։
8. Թունելացում բարակ մեկուսիչների միջով, ջերմության հեռացում, տարրերի ատոմային չափ, լիտոգրաֆիայի արժեք և լուծունակություն։`,
        ru: `## p–n-переход

Кремний, легированный фосфором (5 валентных электронов), имеет свободные **электроны**: n-тип. Легированный бором (3 валентных электрона) — **дырки**: p-тип. Там, где они встречаются, электроны и дырки рекомбинируют и оставляют тонкий **обеднённый слой** со встроенным полем около $0{,}7$ В. Переход — это **диод**:

> - **Прямое смещение** (плюс на p): барьер уменьшается, ток свободно течёт выше $0{,}7$ В.
> - **Обратное смещение** (плюс на n): барьер растёт, течёт лишь микроамперная утечка.

Диод превращает переменный ток в пульсирующий постоянный (**выпрямитель**); четыре диода в мосте используют обе полуволны. **Светодиод (LED)** испускает фотон при каждой рекомбинации, его цвет задаётся шириной запрещённой зоны ($1{,}8$ эВ красный, $2{,}3$ эВ зелёный, $3$ эВ синий; синий светодиод 1993 г. принёс Нобелевскую премию); **фотодиод** и **солнечный элемент** делают обратное.

## Транзистор

Изобретённый в 1947 г. Бардином, Браттейном и Шокли в Bell Labs, транзистор заменил хрупкую горячую электронную лампу.

> **Биполярный транзистор (n-p-n):** тонкий p-слой, **база**, между **эмиттером** и **коллектором**. Малый ток базы $I_B$ управляет током коллектора $I_C = \\beta I_B$ при $\\beta \\approx 100$: малый сигнал усиливается.
>
> **Полевой транзистор (MOSFET):** напряжение на **затворе**, изолированном слоем оксида кремния, создаёт или убирает проводящий канал между **истоком** и **стоком**. Он почти не потребляет входного тока и является строительным блоком всех микросхем.

Два применения: как **усилитель** (радио, звук, датчики) и как **ключ**: замкнутый, он пропускает ток («1»); разомкнутый — блокирует («0»). Переключение занимает меньше наносекунды.

## Логика и микросхема

Компьютеры хранят всё в **двоичных** цифрах: $13 = 1101_2 = 8 + 4 + 1$. Транзисторы объединяются в **логические элементы**:

| Элемент | Выход равен 1, когда… | Транзисторов (КМОП) |
|---|---|---|
| НЕ (NOT) | вход равен 0 | 2 |
| И (AND) | оба входа равны 1 | 6 |
| ИЛИ (OR) | хотя бы один вход равен 1 | 6 |
| И-НЕ (NAND) | не оба входа равны 1 | 4 |

Любое вычисление можно построить из одних элементов И-НЕ: сумматоры, ячейки памяти (**триггер** из двух перекрёстно соединённых элементов хранит один бит), мультиплексоры и так далее. В 1958 г. Килби и Нойс сделали первую **интегральную схему**: все транзисторы, резисторы и провода на одном куске кремния. Современный **микропроцессор** содержит $10^{10}$–$10^{11}$ транзисторов на кристалле около $1$ см² с тактовой частотой $3$–$5$ ГГц; **микросхема памяти** (DRAM) хранит каждый бит как заряд крошечного конденсатора, который нужно обновлять тысячи раз в секунду; **флеш**-память хранит заряд на изолированном плавающем затворе годами.

## Изготовление микросхем: литография

Микросхема строится слой за слоем. Кремниевую пластину покрывают светочувствительным **фоторезистом**; через маску ультрафиолетом проецируют рисунок; засвеченный резист смывают; открытые участки травят или легируют; процесс повторяют около 100 раз. Наименьший элемент ограничен дифракцией, около $\\lambda/2$; поэтому промышленность перешла от ртутных ламп ($365$ нм) к эксимерным лазерам ($193$ нм) и с 2019 г. — к **экстремальному ультрафиолету** $13{,}5$ нм, получаемому испарением капель олова лазером и фокусируемому многослойными зеркалами, поскольку ни одна линза на этой длине волны не прозрачна.

## Закон Мура и его пределы

Гордон Мур в 1965 г. заметил, что число транзисторов на кристалле удваивается примерно каждые два года; это выполнялось больше пятидесяти лет, от $2000$ транзисторов (Intel 4004, 1971) до $10^{11}$. Пределы теперь физические: затворы имеют около $20$ нм, примерно $100$ атомов; электроны **туннелируют** через изолирующие слои толщиной в несколько атомов, создавая утечки; тепло в $100$ Вт с $1$ см² нужно отводить; сигнал на $5$ ГГц проходит за такт всего $6$ см. Прогресс теперь идёт от трёхмерной компоновки, множества ядер, работающих параллельно, специализированных микросхем для графики и нейросетей и исследований квантовых компьютеров, использующих суперпозицию квантовых битов.

## Разобранные примеры

**Пример 1.** Кремниевый диод последовательно с резистором $1$ кОм подключён к $5$ В в прямом направлении. Ток?

$I = (5 - 0{,}7)/1000 = 4{,}3$ мА.

**Пример 2.** Та же цепь с перевёрнутой батареей.

Диод заперт; ток — утечка, около $10^{-6}$ А, практически нуль.

**Пример 3.** У транзистора с $\\beta = 120$ ток базы $50$ мкА. Ток коллектора?

$I_C = 120 \\cdot 50 \\cdot 10^{-6} = 6$ мА.

**Пример 4.** Переведите $45$ в двоичную систему, а $101101_2$ — в десятичную.

$45 = 32 + 8 + 4 + 1 = 101101_2$; и $101101_2 = 32 + 8 + 4 + 1 = 45$.

**Пример 5.** Сколько разных значений может хранить байт (8 бит)? Сколько байтов в памяти $16$ ГБ?

$2^8 = 256$ значений; $16 \\cdot 2^{30} \\approx 1{,}7 \\cdot 10^{10}$ байт, то есть $1{,}4 \\cdot 10^{11}$ бит, каждый на своём конденсаторе.

**Пример 6.** На кристалле $1$ см² $2 \\cdot 10^{10}$ транзисторов. Средняя площадь на транзистор и её сторона.

$A = 10^{-4} / 2 \\cdot 10^{10} = 5 \\cdot 10^{-15}$ м²; сторона $\\sqrt{A} \\approx 7 \\cdot 10^{-8}$ м $= 70$ нм, около $300$ атомов кремния.

**Пример 7.** Закон Мура: начиная с $2300$ транзисторов в 1971 г., сколько удвоений и какое число к 2021 г. при удвоении раз в два года?

$25$ удвоений; $2300 \\cdot 2^{25} \\approx 2300 \\cdot 3{,}4 \\cdot 10^7 \\approx 8 \\cdot 10^{10}$, близко к реальным микросхемам.

**Пример 8.** Предел разрешения литографии со светом $193$ нм и с ЭУФ $13{,}5$ нм.

Около $\\lambda/2$: $97$ нм и $7$ нм. Ухищрения (иммерсия в воде, многократное экспонирование) довели $193$ нм примерно до $40$ нм; ЭУФ достигает меньше $10$ нм.

## Упражнения

1. В чём разница между кремнием n-типа и p-типа? Что такое дырка?
2. Почему диод проводит только в одну сторону? Опишите словами, что делает обеднённый слой при прямом и обратном смещении.
3. Диод с падением $0{,}7$ В и резистор $470$ Ом подключены к $12$ В. Найдите ток и мощность, выделяемую на резисторе.
4. У транзистора $\\beta = 80$. Какой ток базы даёт $I_C = 4$ мА?
5. Назовите три вывода биполярного транзистора и полевого транзистора.
6. Запишите $100$ в двоичной системе и $11111111_2$ в десятичной. Почему байт может хранить числа от $0$ до $255$?
7. Приведите таблицу истинности элемента И-НЕ и покажите, как из него сделать элемент НЕ.
8. Назовите три физических препятствия дальнейшему уменьшению транзисторов.

### Ответы

1. В n-типе донорные атомы (фосфор) дают свободные электроны; в p-типе акцепторные атомы (бор) дают дырки. Дырка — недостающий электрон в связи, ведущий себя как положительный подвижный заряд.
2. Прямое смещение гонит электроны и дырки к переходу, сужая обеднённый слой, и ток течёт; обратное оттягивает их, расширяя изолирующий слой.
3. $I = 11{,}3/470 \\approx 24$ мА; $P = I^2 R = (0{,}024)^2 \\cdot 470 \\approx 0{,}27$ Вт.
4. $I_B = 4/80 = 0{,}05$ мА $= 50$ мкА.
5. Эмиттер, база, коллектор; исток, затвор, сток.
6. $100 = 1100100_2$; $11111111_2 = 255$. Восемь бит дают $2^8 = 256$ комбинаций.
7. Выход равен 0, только когда оба входа равны 1, иначе 1. Соединив оба входа вместе, получаем НЕ.
8. Туннелирование через тонкие изоляторы, отвод тепла, атомный размер элементов, стоимость и разрешение литографии.`,
      },
      [
        q(t("A p–n junction conducts current well when…", "p–n անցումը լավ է հաղորդում հոսանքը, երբ…", "p–n-переход хорошо проводит ток, когда…"), [t("the plus is connected to the p-side (forward bias)", "պլյուսը միացված է p-կողմին (ուղիղ շեղում)", "плюс подключён к p-области (прямое смещение)"), t("the plus is connected to the n-side", "պլյուսը միացված է n-կողմին", "плюс подключён к n-области"), t("there is no voltage", "լարում չկա", "напряжения нет")], 0),
        q(t("The transistor was invented in…", "Տրանզիստորը հայտնագործվել է…", "Транзистор был изобретён в…"), [t("1947", "1947 թ․", "1947 г."), t("1905", "1905 թ․", "1905 г."), t("1991", "1991 թ․", "1991 г.")], 0),
        q(t("In a bipolar transistor the collector current equals…", "Երկբևեռ տրանզիստորում կոլեկտորի հոսանքը հավասար է…", "В биполярном транзисторе ток коллектора равен…"), [t("β times the base current", "բազայի հոսանքի β-ապատիկին", "току базы, умноженному на β"), t("the base current", "բազայի հոսանքին", "току базы"), t("zero", "զրոյի", "нулю")], 0),
        q(t("The number 13 in binary is…", "13 թիվն երկուականով է…", "Число 13 в двоичной системе…"), [t("1101", "1101", "1101"), t("1011", "1011", "1011"), t("1110", "1110", "1110")], 0),
        q(t("Moore's law says the number of transistors per chip doubles about every…", "Մուրի օրենքն ասում է, որ մեկ բյուրեղի տրանզիստորների թիվը կրկնապատկվում է մոտ ամեն…", "Закон Мура гласит, что число транзисторов на кристалле удваивается примерно каждые…"), [t("two years", "երկու տարին մեկ", "два года"), t("twenty years", "քսան տարին մեկ", "двадцать лет"), t("two months", "երկու ամիսը մեկ", "два месяца")], 0),
        q(t("Chip patterns are printed with…", "Բյուրեղի նախշերը տպվում են…", "Рисунок микросхемы печатают с помощью…"), [t("ultraviolet lithography", "ուլտրամանուշակագույն լիտոգրաֆիայով", "ультрафиолетовой литографии"), t("mechanical engraving", "մեխանիկական փորագրությամբ", "механической гравировки"), t("radio waves", "ռադիոալիքներով", "радиоволн")], 0),
      ],
    ),
    lesson(
      "renewable-energy",
      ["Renewable energy: solar, wind, hydro in Armenia", "Վերականգնվող էներգիա․ արև, քամի, հիդրո Հայաստանում", "Возобновляемая энергетика: солнце, ветер, гидро в Армении"],
      {
        en: ["Explain how a solar cell, a wind turbine and a hydroelectric plant convert energy, and compute their power from physical data", "Compare the energy sources by power density, efficiency, capacity factor and environmental impact", "Describe Armenia's energy mix: hydro cascades, the growth of solar power, the nuclear plant and imported gas"],
        hy: ["Բացատրել, թե ինչպես են արևային էլեմենտը, հողմային տուրբինը և հիդրոէլեկտրակայանն էներգիա կերպափոխում, և ֆիզիկական տվյալներից հաշվել դրանց հզորությունը", "Համեմատել էներգիայի աղբյուրներն ըստ հզորության խտության, ՕԳԳ-ի, հզորության օգտագործման գործակցի և շրջակա միջավայրի վրա ազդեցության", "Նկարագրել Հայաստանի էներգետիկ հաշվեկշիռը․ հիդրոկասկադներ, արևային էներգետիկայի աճ, ատոմակայան և ներկրվող գազ"],
        ru: ["Объяснять, как солнечный элемент, ветротурбина и ГЭС преобразуют энергию, и вычислять их мощность по физическим данным", "Сравнивать источники энергии по плотности мощности, КПД, коэффициенту использования мощности и влиянию на среду", "Описывать энергобаланс Армении: гидрокаскады, рост солнечной энергетики, атомная станция и импортный газ"],
      },
      {
        en: `## Why renewables

Humanity uses about $18$ TW of power, $80\\%$ of it from coal, oil and gas, whose combustion adds $35$ billion tonnes of CO₂ a year to the atmosphere and drives climate change. **Renewable sources** draw on flows that nature replenishes: sunlight, wind, rivers, heat of the Earth, biomass. Ultimately almost all of them are solar energy: the Sun delivers $1{.}7 \\cdot 10^{17}$ W to the Earth, ten thousand times our consumption.

## Solar energy

> **Photovoltaic cell:** a large p–n junction. Photons with energy above the band gap ($1{.}1$ eV for silicon) create electron–hole pairs; the junction's field separates them, giving a voltage of about $0{.}6$ V per cell and a current proportional to the light. Cells are wired in series into panels of $300$–$600$ W.

Efficiency of commercial silicon panels is $20$–$23\\%$ (theoretical limit about $33\\%$ for one junction; multi-junction cells reach $47\\%$). The **solar constant** above the atmosphere is $1360$ W/m²; at the ground on a clear day about $1000$ W/m², averaging over day, night and clouds $150$–$250$ W/m² in sunny countries. Since 2010 the price of panels has fallen tenfold, making solar the cheapest electricity in much of the world. **Solar thermal** collectors heat water directly with $60$–$70\\%$ efficiency.

## Wind energy

A turbine of blade radius $R$ sweeps an area $A = \\pi R^2$; the air passing through it per second has mass $\\rho A v$ and kinetic energy

$$P = \\tfrac{1}{2} \\rho A v^3.$$

The cubic dependence means doubling the wind speed gives eight times the power, so sites and heights matter. **Betz's limit** shows that a turbine can extract at most $59\\%$ of this power (the air must keep moving to leave); real turbines reach $40$–$50\\%$. Modern turbines have $R = 60$–$120$ m and power $3$–$15$ MW each.

## Hydroelectric power

Water falling through a height $h$ at a flow rate $Q$ (m³/s) gives

$$P = \\eta \\rho g Q h,$$

with turbine-generator efficiency $\\eta \\approx 0{.}9$, the highest of all power plants. Hydro supplies $16\\%$ of world electricity and can be switched on in seconds, which makes it ideal for balancing solar and wind. **Pumped storage** plants pump water uphill when power is cheap and release it at peak demand.

## Comparing sources

| Source | Efficiency | Capacity factor | Land, km² per GW average | CO₂, g/kWh |
|---|---|---|---|---|
| Coal | 35–40 % | 60–80 % | 10 (plus mines) | 800–1000 |
| Gas | 50–60 % | 40–60 % | 5 | 400–500 |
| Nuclear | 33 % | 90 % | 3 | 10–20 |
| Hydro | 90 % | 40–50 % | 100–1000 (reservoir) | 10–30 |
| Wind | 40–50 % | 25–45 % | 50–100 (shared with farming) | 10–15 |
| Solar PV | 20 % | 15–25 % | 20–50 | 30–50 |

The **capacity factor** is the average output divided by the rated power: a $1$ MW solar plant delivers on average $0{.}2$ MW. Sun and wind are variable, so a grid with much of them needs storage (batteries, pumped hydro, hydrogen), flexible hydro or gas, and long transmission lines.

## Energy in Armenia

Armenia has no coal, oil or gas of its own and imports natural gas (from Russia and Iran) for about a third of its electricity and most of its heating. The rest of its electricity comes from:

> - **Hydro** ($\\approx 30\\%$): the **Sevan–Hrazdan cascade** of seven plants built in 1930–1962 along the Hrazdan river, using the $1000$ m drop from Lake Sevan to the Ararat plain; the **Vorotan cascade** of three plants ($404$ MW) in Syunik; and some $190$ small hydro plants.
> - **Nuclear** ($\\approx 30$–$40\\%$): the Metsamor plant.
> - **Solar**: Armenia has $1700$–$1900$ kWh/m² of annual solar irradiation, among the highest in Europe; from almost nothing in 2017, solar reached about $10\\%$ of generation in the mid-2020s through utility plants such as Masrik-1 ($55$ MW) and tens of thousands of rooftop systems; the government targets $15\\%$ by 2030.
> - **Wind**: good resources on mountain passes (Pushkin pass, Zod); still only a few megawatts installed.

Armenia exports electricity to Iran in exchange for gas and is linked with Georgia. Energy independence through renewables and the nuclear plant is a strategic goal.

## Worked examples

**Example 1.** A $2$ m² panel with $20\\%$ efficiency in $1000$ W/m² sunlight. Power?

$P = 0{.}2 \\cdot 1000 \\cdot 2 = 400$ W.

**Example 2.** How much energy does a $5$ kW rooftop system produce per year in Yerevan with a capacity factor of $18\\%$?

$E = 5 \\cdot 0{.}18 \\cdot 8760 \\approx 7900$ kWh, more than a household's yearly consumption of $3000$–$5000$ kWh.

**Example 3.** Area of solar panels needed to supply Armenia's $8$ TWh a year at $200$ kWh per m² per year.

$A = 8 \\cdot 10^9 / 200 = 4 \\cdot 10^7$ m² $= 40$ km², about $0{.}13\\%$ of the country's area.

**Example 4.** Power in the wind through a turbine with $R = 50$ m at $v = 10$ m/s ($\\rho = 1{.}2$ kg/m³).

$A = \\pi \\cdot 2500 = 7850$ m²; $P = 0{.}5 \\cdot 1{.}2 \\cdot 7850 \\cdot 1000 = 4{.}7$ MW; with $45\\%$ efficiency the turbine gives about $2{.}1$ MW.

**Example 5.** The same turbine at $5$ m/s.

$P$ falls by $2^3 = 8$ times to $0{.}26$ MW. This is why the capacity factor of wind is $25$–$45\\%$.

**Example 6.** A hydro plant with head $h = 100$ m and flow $Q = 50$ m³/s, $\\eta = 0{.}9$.

$P = 0{.}9 \\cdot 1000 \\cdot 10 \\cdot 50 \\cdot 100 = 4{.}5 \\cdot 10^7$ W $= 45$ MW.

**Example 7.** Lake Sevan is about $1900$ m above sea level and the Ararat plain $900$ m. How much energy does $1$ m³ of water release falling through the cascade at $\\eta = 0{.}85$?

$E = 0{.}85 \\cdot 1000 \\cdot 10 \\cdot 1000 = 8{.}5 \\cdot 10^6$ J $\\approx 2{.}4$ kWh per cubic metre.

**Example 8.** How much CO₂ does replacing $1$ TWh of gas generation ($450$ g/kWh) with solar ($40$ g/kWh) save?

$(450 - 40) \\cdot 10^9$ g $= 4{.}1 \\cdot 10^{11}$ g $= 410\\,000$ tonnes a year.

## Exercises

1. Why do silicon solar cells not use the energy of infrared photons below $1{.}1$ eV, and why do they waste part of the energy of blue photons?
2. A $400$ W panel has an area of $2$ m². Find its efficiency at $1000$ W/m².
3. A village needs an average of $50$ kW. What solar capacity must be installed if the capacity factor is $20\\%$?
4. Compare the power of a turbine at $8$ m/s and at $12$ m/s.
5. A wind turbine with $R = 40$ m runs at $12$ m/s with $40\\%$ efficiency. Its electrical power?
6. Find the flow rate needed for a $100$ MW hydro plant with a head of $250$ m and $\\eta = 0{.}9$.
7. Why is hydro power so useful for a grid with much solar and wind?
8. List Armenia's main sources of electricity and explain why solar power is especially attractive there.

### Answers

1. Photons below the band gap cannot create electron–hole pairs and pass through; photons far above it give the pair only $1{.}1$ eV and the rest becomes heat.
2. $400 / (1000 \\cdot 2) = 20\\%$.
3. $50 / 0{.}2 = 250$ kW, plus storage for nights.
4. $(12/8)^3 = 3{.}4$ times more at $12$ m/s.
5. $P = 0{.}4 \\cdot 0{.}5 \\cdot 1{.}2 \\cdot \\pi \\cdot 1600 \\cdot 1728 \\approx 2{.}1$ MW.
6. $Q = P / (\\eta \\rho g h) = 10^8 / (0{.}9 \\cdot 1000 \\cdot 10 \\cdot 250) \\approx 44$ m³/s.
7. It can change output within seconds and store energy in reservoirs, compensating the variability of sun and wind.
8. Imported gas, hydro cascades (Sevan–Hrazdan, Vorotan, small plants), the Metsamor nuclear plant, growing solar; high irradiation, no fossil fuels of its own, falling panel prices.`,
        hy: `## Ինչու վերականգնվող

Մարդկությունն օգտագործում է մոտ $18$ ՏՎտ հզորություն, որի $80\\%$-ը՝ ածխից, նավթից և գազից, որոնց այրումը մթնոլորտին տարեկան ավելացնում է $35$ միլիարդ տոննա CO₂ և կլիմայի փոփոխության պատճառ է։ **Վերականգնվող աղբյուրներն** օգտագործում են այն հոսքերը, որոնք բնությունը վերականգնում է․ արևի լույս, քամի, գետեր, Երկրի ջերմություն, կենսազանգված։ Վերջին հաշվով դրանք գրեթե բոլորն արեգակնային էներգիա են․ Արեգակն Երկրին հասցնում է $1{,}7 \\cdot 10^{17}$ Վտ՝ մեր սպառումից տասը հազար անգամ ավելի։

## Արևային էներգիա

> **Ֆոտովոլտային էլեմենտ․** մեծ p–n անցում։ Արգելված գոտուց (սիլիցիումի համար $1{,}1$ էՎ) բարձր էներգիայով ֆոտոնները ստեղծում են էլեկտրոն-խոռոչ զույգեր․ անցման դաշտը բաժանում է դրանք՝ տալով մոտ $0{,}6$ Վ լարում մեկ էլեմենտին և լույսին համեմատական հոսանք։ Էլեմենտները հաջորդաբար միացվում են $300$–$600$ Վտ պանելների մեջ։

Առևտրային սիլիցիումային պանելների ՕԳԳ-ն $20$–$23\\%$ է (տեսական սահմանը մեկ անցման համար մոտ $33\\%$․ բազմանցումային էլեմենտները հասնում են $47\\%$-ի)։ **Արեգակնային հաստատունը** մթնոլորտից վեր $1360$ Վտ/մ² է․ գետնի մոտ պարզ օրը մոտ $1000$ Վտ/մ², իսկ օրվա, գիշերվա և ամպերի միջինով արևոտ երկրներում՝ $150$–$250$ Վտ/մ²։ 2010 թ․-ից պանելների գինը տասն անգամ նվազել է՝ արևայինն աշխարհի մեծ մասում դարձնելով ամենաէժան էլեկտրաէներգիան։ **Արևային ջերմային** կոլեկտորները ջուրն անմիջապես տաքացնում են $60$–$70\\%$ ՕԳԳ-ով։

## Հողմային էներգիա

$R$ թիակի շառավղով տուրբինը ծածկում է $A = \\pi R^2$ մակերես․ նրա միջով վայրկյանում անցնող օդն ունի $\\rho A v$ զանգված և կինետիկ էներգիա

$$P = \\tfrac{1}{2} \\rho A v^3$$

Խորանարդային կախվածությունը նշանակում է, որ քամու արագության կրկնապատկումն ութ անգամ ավելի հզորություն է տալիս, ուստի տեղանքն ու բարձրությունը կարևոր են։ **Բեցի սահմանը** ցույց է տալիս, որ տուրբինը կարող է վերցնել այդ հզորության առավելագույնը $59\\%$-ը (օդը պետք է շարունակի շարժվել՝ հեռանալու համար)․ իրական տուրբինները հասնում են $40$–$50\\%$-ի։ Ժամանակակից տուրբիններն ունեն $R = 60$–$120$ մ և $3$–$15$ ՄՎտ հզորություն յուրաքանչյուրը։

## Հիդրոէներգետիկա

$h$ բարձրությունից $Q$ (մ³/վ) ծախսով ընկնող ջուրը տալիս է

$$P = \\eta \\rho g Q h$$

որտեղ տուրբին-գեներատորի ՕԳԳ-ն $\\eta \\approx 0{,}9$ է՝ ամենաբարձրը բոլոր էլեկտրակայանների մեջ։ Հիդրոն տալիս է աշխարհի էլեկտրաէներգիայի $16\\%$-ը և կարող է միացվել վայրկյանների ընթացքում, ինչն այն իդեալական է դարձնում արևայինն ու հողմայինը հավասարակշռելու համար։ **Պոմպակուտակիչ** կայանները ջուրը վեր են մղում, երբ էներգիան էժան է, և բաց թողնում պիկային պահանջարկի ժամանակ։

## Աղբյուրների համեմատություն

| Աղբյուր | ՕԳԳ | Օգտագործման գործակից | Հող, կմ² մեկ ԳՎտ միջինին | CO₂, գ/կՎտ·ժ |
|---|---|---|---|---|
| Ածուխ | 35–40 % | 60–80 % | 10 (գումարած հանքեր) | 800–1000 |
| Գազ | 50–60 % | 40–60 % | 5 | 400–500 |
| Միջուկային | 33 % | 90 % | 3 | 10–20 |
| Հիդրո | 90 % | 40–50 % | 100–1000 (ջրամբար) | 10–30 |
| Հողմային | 40–50 % | 25–45 % | 50–100 (կիսվում է գյուղատնտեսության հետ) | 10–15 |
| Արևային | 20 % | 15–25 % | 20–50 | 30–50 |

**Օգտագործման գործակիցը** միջին արտադրանքն է՝ բաժանած անվանական հզորության վրա․ $1$ ՄՎտ արևային կայանը միջինում տալիս է $0{,}2$ ՄՎտ։ Արևն ու քամին փոփոխական են, ուստի դրանցից շատ ունեցող ցանցին պետք են կուտակիչներ (մարտկոցներ, պոմպակուտակիչ հիդրո, ջրածին), ճկուն հիդրո կամ գազ և երկար հաղորդման գծեր։

## Էներգետիկան Հայաստանում

Հայաստանը սեփական ածուխ, նավթ կամ գազ չունի և ներկրում է բնական գազ (Ռուսաստանից և Իրանից) էլեկտրաէներգիայի մոտ մեկ երրորդի և ջեռուցման մեծ մասի համար։ Էլեկտրաէներգիայի մնացած մասը գալիս է․

> - **Հիդրո** ($\\approx 30\\%$)․ Հրազդան գետի երկայնքով 1930–1962 թթ․ կառուցված յոթ կայանից բաղկացած **Սևան-Հրազդան կասկադը**, որն օգտագործում է Սևանա լճից Արարատյան դաշտ $1000$ մ անկումը․ Սյունիքի երեք կայանից բաղկացած **Որոտանի կասկադը** ($404$ ՄՎտ)․ և մոտ $190$ փոքր հիդրոկայան։
> - **Միջուկային** ($\\approx 30$–$40\\%$)․ Մեծամորի կայանը։
> - **Արևային**․ Հայաստանն ունի $1700$–$1900$ կՎտ·ժ/մ² տարեկան արևային ճառագայթում՝ Եվրոպայում ամենաբարձրերից։ 2017 թ․ գրեթե զրոյից արևայինը 2020-ականների կեսին հասավ արտադրության մոտ $10\\%$-ի՝ Մասրիկ-1-ի ($55$ ՄՎտ) նման կայանների և տասնյակ հազարավոր տանիքային համակարգերի շնորհիվ․ կառավարության նպատակը $15\\%$ է մինչև 2030 թ․։
> - **Հողմային**․ լավ ռեսուրսներ լեռնանցքներում (Պուշկինի լեռնանցք, Զոդ)․ դեռ միայն մի քանի մեգավատ է տեղադրված։

Հայաստանն էլեկտրաէներգիա է արտահանում Իրան գազի դիմաց և կապված է Վրաստանի հետ։ Էներգետիկ անկախությունը վերականգնվող աղբյուրների և ատոմակայանի միջոցով ռազմավարական նպատակ է։

## Լուծված օրինակներ

**Օրինակ 1։** $2$ մ² պանել $20\\%$ ՕԳԳ-ով $1000$ Վտ/մ² արևի լույսի տակ։ Հզորությո՞ւնը։

$P = 0{,}2 \\cdot 1000 \\cdot 2 = 400$ Վտ։

**Օրինակ 2։** Որքա՞ն էներգիա է տարեկան արտադրում $5$ կՎտ տանիքային համակարգն Երևանում $18\\%$ օգտագործման գործակցով։

$E = 5 \\cdot 0{,}18 \\cdot 8760 \\approx 7900$ կՎտ·ժ, ավելի, քան տնային տնտեսության տարեկան $3000$–$5000$ կՎտ·ժ սպառումը։

**Օրինակ 3։** Արևային պանելների մակերեսը, որն անհրաժեշտ է Հայաստանի տարեկան $8$ ՏՎտ·ժ-ն ապահովելու համար՝ տարեկան $200$ կՎտ·ժ մեկ մ²-ին։

$A = 8 \\cdot 10^9 / 200 = 4 \\cdot 10^7$ մ² $= 40$ կմ², երկրի տարածքի մոտ $0{,}13\\%$-ը։

**Օրինակ 4։** Քամու հզորությունը $R = 50$ մ տուրբինի միջով $v = 10$ մ/վ դեպքում ($\\rho = 1{,}2$ կգ/մ³)։

$A = \\pi \\cdot 2500 = 7850$ մ²․ $P = 0{,}5 \\cdot 1{,}2 \\cdot 7850 \\cdot 1000 = 4{,}7$ ՄՎտ․ $45\\%$ ՕԳԳ-ով տուրբինը տալիս է մոտ $2{,}1$ ՄՎտ։

**Օրինակ 5։** Նույն տուրբինը $5$ մ/վ դեպքում։

$P$-ն նվազում է $2^3 = 8$ անգամ՝ մինչև $0{,}26$ ՄՎտ։ Ահա թե ինչու է հողմայինի օգտագործման գործակիցը $25$–$45\\%$։

**Օրինակ 6։** Հիդրոկայան $h = 100$ մ ճնշումով և $Q = 50$ մ³/վ ծախսով, $\\eta = 0{,}9$։

$P = 0{,}9 \\cdot 1000 \\cdot 10 \\cdot 50 \\cdot 100 = 4{,}5 \\cdot 10^7$ Վտ $= 45$ ՄՎտ։

**Օրինակ 7։** Սևանա լիճը ծովի մակարդակից մոտ $1900$ մ բարձր է, Արարատյան դաշտը՝ $900$ մ։ Որքա՞ն էներգիա է անջատում $1$ մ³ ջուրը կասկադով ընկնելիս $\\eta = 0{,}85$ դեպքում։

$E = 0{,}85 \\cdot 1000 \\cdot 10 \\cdot 1000 = 8{,}5 \\cdot 10^6$ Ջ $\\approx 2{,}4$ կՎտ·ժ մեկ խորանարդ մետրին։

**Օրինակ 8։** Որքա՞ն CO₂ է խնայում $1$ ՏՎտ·ժ գազային արտադրության ($450$ գ/կՎտ·ժ) փոխարինումն արևայինով ($40$ գ/կՎտ·ժ)։

$(450 - 40) \\cdot 10^9$ գ $= 4{,}1 \\cdot 10^{11}$ գ $= 410\\,000$ տոննա տարեկան։

## Վարժություններ

1. Ինչո՞ւ սիլիցիումային արևային էլեմենտները չեն օգտագործում $1{,}1$ էՎ-ից ցածր ինֆրակարմիր ֆոտոնների էներգիան, և ինչո՞ւ են վատնում կապույտ ֆոտոնների էներգիայի մի մասը։
2. $400$ Վտ պանելն ունի $2$ մ² մակերես։ Գտեք նրա ՕԳԳ-ն $1000$ Վտ/մ² դեպքում։
3. Գյուղին միջինում $50$ կՎտ է պետք։ Ի՞նչ արևային հզորություն պետք է տեղադրել, եթե օգտագործման գործակիցը $20\\%$ է։
4. Համեմատեք տուրբինի հզորությունը $8$ մ/վ և $12$ մ/վ դեպքում։
5. $R = 40$ մ հողմային տուրբինն աշխատում է $12$ մ/վ դեպքում $40\\%$ ՕԳԳ-ով։ Նրա էլեկտրական հզորությո՞ւնը։
6. Գտեք $250$ մ ճնշումով և $\\eta = 0{,}9$ ՕԳԳ-ով $100$ ՄՎտ հիդրոկայանի համար անհրաժեշտ ծախսը։
7. Ինչո՞ւ է հիդրոէներգիան այդքան օգտակար շատ արևային և հողմային ունեցող ցանցի համար։
8. Թվարկեք Հայաստանի էլեկտրաէներգիայի հիմնական աղբյուրները և բացատրեք, թե ինչու է արևային էներգիան այնտեղ հատկապես գրավիչ։

### Պատասխաններ

1. Արգելված գոտուց ցածր ֆոտոնները չեն կարող էլեկտրոն-խոռոչ զույգ ստեղծել և անցնում են միջով․ դրանից շատ բարձր ֆոտոնները զույգին տալիս են միայն $1{,}1$ էՎ, իսկ մնացածը դառնում է ջերմություն։
2. $400 / (1000 \\cdot 2) = 20\\%$։
3. $50 / 0{,}2 = 250$ կՎտ, գումարած կուտակիչ գիշերների համար։
4. $(12/8)^3 = 3{,}4$ անգամ ավելի $12$ մ/վ դեպքում։
5. $P = 0{,}4 \\cdot 0{,}5 \\cdot 1{,}2 \\cdot \\pi \\cdot 1600 \\cdot 1728 \\approx 2{,}1$ ՄՎտ։
6. $Q = P / (\\eta \\rho g h) = 10^8 / (0{,}9 \\cdot 1000 \\cdot 10 \\cdot 250) \\approx 44$ մ³/վ։
7. Այն կարող է վայրկյանների ընթացքում փոխել արտադրանքը և էներգիա կուտակել ջրամբարներում՝ փոխհատուցելով արևի և քամու փոփոխականությունը։
8. Ներկրվող գազ, հիդրոկասկադներ (Սևան-Հրազդան, Որոտան, փոքր կայաններ), Մեծամորի ատոմակայան, աճող արևային․ բարձր ճառագայթում, սեփական հանածո վառելիքի բացակայություն, պանելների նվազող գներ։`,
        ru: `## Зачем возобновляемые источники

Человечество использует около $18$ ТВт мощности, $80\\%$ из них — от угля, нефти и газа, сжигание которых добавляет в атмосферу $35$ миллиардов тонн CO₂ в год и вызывает изменение климата. **Возобновляемые источники** черпают из потоков, которые природа восполняет: солнечный свет, ветер, реки, тепло Земли, биомасса. В конечном счёте почти все они — солнечная энергия: Солнце доставляет Земле $1{,}7 \\cdot 10^{17}$ Вт, в десять тысяч раз больше нашего потребления.

## Солнечная энергия

> **Фотоэлектрический элемент:** большой p–n-переход. Фотоны с энергией выше запрещённой зоны ($1{,}1$ эВ для кремния) создают электронно-дырочные пары; поле перехода разделяет их, давая напряжение около $0{,}6$ В на элемент и ток, пропорциональный свету. Элементы соединяют последовательно в панели по $300$–$600$ Вт.

КПД промышленных кремниевых панелей $20$–$23\\%$ (теоретический предел для одного перехода около $33\\%$; многопереходные элементы достигают $47\\%$). **Солнечная постоянная** над атмосферой $1360$ Вт/м²; у земли в ясный день около $1000$ Вт/м², а в среднем по дню, ночи и облакам в солнечных странах $150$–$250$ Вт/м². С 2010 г. цена панелей упала в десять раз, сделав солнечную энергию самой дешёвой в большей части мира. **Солнечные тепловые** коллекторы греют воду напрямую с КПД $60$–$70\\%$.

## Энергия ветра

Турбина с радиусом лопастей $R$ ометает площадь $A = \\pi R^2$; воздух, проходящий через неё за секунду, имеет массу $\\rho A v$ и кинетическую энергию

$$P = \\tfrac{1}{2} \\rho A v^3.$$

Кубическая зависимость означает, что удвоение скорости ветра даёт в восемь раз больше мощности, поэтому место и высота важны. **Предел Беца** показывает, что турбина может отобрать не более $59\\%$ этой мощности (воздух должен продолжать двигаться, чтобы уйти); реальные турбины достигают $40$–$50\\%$. Современные турбины имеют $R = 60$–$120$ м и мощность $3$–$15$ МВт каждая.

## Гидроэнергетика

Вода, падающая с высоты $h$ при расходе $Q$ (м³/с), даёт

$$P = \\eta \\rho g Q h,$$

где КПД турбины с генератором $\\eta \\approx 0{,}9$ — наивысший среди всех электростанций. ГЭС дают $16\\%$ мировой электроэнергии и включаются за секунды, что делает их идеальными для балансировки солнца и ветра. **Гидроаккумулирующие** станции качают воду наверх, когда энергия дешева, и сбрасывают её в пик спроса.

## Сравнение источников

| Источник | КПД | Коэффициент использования | Земля, км² на средний ГВт | CO₂, г/кВт·ч |
|---|---|---|---|---|
| Уголь | 35–40 % | 60–80 % | 10 (плюс шахты) | 800–1000 |
| Газ | 50–60 % | 40–60 % | 5 | 400–500 |
| Атом | 33 % | 90 % | 3 | 10–20 |
| Гидро | 90 % | 40–50 % | 100–1000 (водохранилище) | 10–30 |
| Ветер | 40–50 % | 25–45 % | 50–100 (совместно с сельским хозяйством) | 10–15 |
| Солнце | 20 % | 15–25 % | 20–50 | 30–50 |

**Коэффициент использования мощности** — средняя выработка, делённая на номинальную мощность: солнечная станция на $1$ МВт даёт в среднем $0{,}2$ МВт. Солнце и ветер переменчивы, поэтому сети с их большой долей нужны накопители (батареи, ГАЭС, водород), гибкие гидро или газ и длинные линии передачи.

## Энергетика Армении

У Армении нет своих угля, нефти и газа; она импортирует природный газ (из России и Ирана) примерно для трети электроэнергии и большей части отопления. Остальная электроэнергия поступает от:

> - **Гидро** ($\\approx 30\\%$): **Севан-Разданский каскад** из семи станций, построенных в 1930–1962 гг. вдоль реки Раздан и использующих перепад $1000$ м от озера Севан до Араратской равнины; **Воротанский каскад** из трёх станций ($404$ МВт) в Сюнике; и около $190$ малых ГЭС.
> - **Атом** ($\\approx 30$–$40\\%$): Мецаморская АЭС.
> - **Солнце**: в Армении $1700$–$1900$ кВт·ч/м² годовой солнечной радиации, одна из самых высоких в Европе; почти с нуля в 2017 г. солнечная энергетика достигла к середине 2020-х около $10\\%$ выработки благодаря станциям вроде Масрик-1 ($55$ МВт) и десяткам тысяч крышных систем; правительство ставит цель $15\\%$ к 2030 г.
> - **Ветер**: хорошие ресурсы на горных перевалах (Пушкинский перевал, Зод); установлено пока лишь несколько мегаватт.

Армения экспортирует электроэнергию в Иран в обмен на газ и связана с Грузией. Энергетическая независимость через возобновляемые источники и АЭС — стратегическая цель.

## Разобранные примеры

**Пример 1.** Панель $2$ м² с КПД $20\\%$ при солнечном свете $1000$ Вт/м². Мощность?

$P = 0{,}2 \\cdot 1000 \\cdot 2 = 400$ Вт.

**Пример 2.** Сколько энергии в год даёт крышная система $5$ кВт в Ереване при коэффициенте использования $18\\%$?

$E = 5 \\cdot 0{,}18 \\cdot 8760 \\approx 7900$ кВт·ч, больше годового потребления домохозяйства $3000$–$5000$ кВт·ч.

**Пример 3.** Площадь солнечных панелей, нужная, чтобы покрыть $8$ ТВт·ч в год Армении при $200$ кВт·ч с м² в год.

$A = 8 \\cdot 10^9 / 200 = 4 \\cdot 10^7$ м² $= 40$ км², около $0{,}13\\%$ площади страны.

**Пример 4.** Мощность ветра через турбину с $R = 50$ м при $v = 10$ м/с ($\\rho = 1{,}2$ кг/м³).

$A = \\pi \\cdot 2500 = 7850$ м²; $P = 0{,}5 \\cdot 1{,}2 \\cdot 7850 \\cdot 1000 = 4{,}7$ МВт; при КПД $45\\%$ турбина даёт около $2{,}1$ МВт.

**Пример 5.** Та же турбина при $5$ м/с.

$P$ падает в $2^3 = 8$ раз до $0{,}26$ МВт. Вот почему коэффициент использования ветра $25$–$45\\%$.

**Пример 6.** ГЭС с напором $h = 100$ м и расходом $Q = 50$ м³/с, $\\eta = 0{,}9$.

$P = 0{,}9 \\cdot 1000 \\cdot 10 \\cdot 50 \\cdot 100 = 4{,}5 \\cdot 10^7$ Вт $= 45$ МВт.

**Пример 7.** Озеро Севан лежит на высоте около $1900$ м, Араратская равнина — $900$ м. Сколько энергии отдаёт $1$ м³ воды, падая через каскад при $\\eta = 0{,}85$?

$E = 0{,}85 \\cdot 1000 \\cdot 10 \\cdot 1000 = 8{,}5 \\cdot 10^6$ Дж $\\approx 2{,}4$ кВт·ч на кубометр.

**Пример 8.** Сколько CO₂ экономит замена $1$ ТВт·ч газовой генерации ($450$ г/кВт·ч) на солнечную ($40$ г/кВт·ч)?

$(450 - 40) \\cdot 10^9$ г $= 4{,}1 \\cdot 10^{11}$ г $= 410\\,000$ тонн в год.

## Упражнения

1. Почему кремниевые солнечные элементы не используют энергию инфракрасных фотонов ниже $1{,}1$ эВ и почему теряют часть энергии синих фотонов?
2. Панель $400$ Вт имеет площадь $2$ м². Найдите её КПД при $1000$ Вт/м².
3. Селу нужно в среднем $50$ кВт. Какую солнечную мощность надо установить при коэффициенте использования $20\\%$?
4. Сравните мощность турбины при $8$ м/с и при $12$ м/с.
5. Ветротурбина с $R = 40$ м работает при $12$ м/с с КПД $40\\%$. Её электрическая мощность?
6. Найдите расход, нужный для ГЭС $100$ МВт с напором $250$ м и $\\eta = 0{,}9$.
7. Почему гидроэнергия так полезна для сети с большой долей солнца и ветра?
8. Перечислите основные источники электроэнергии Армении и объясните, почему солнечная энергия там особенно привлекательна.

### Ответы

1. Фотоны ниже запрещённой зоны не могут создать электронно-дырочную пару и проходят насквозь; фотоны много выше неё отдают паре лишь $1{,}1$ эВ, а остальное становится теплом.
2. $400 / (1000 \\cdot 2) = 20\\%$.
3. $50 / 0{,}2 = 250$ кВт, плюс накопитель на ночь.
4. $(12/8)^3 = 3{,}4$ раза больше при $12$ м/с.
5. $P = 0{,}4 \\cdot 0{,}5 \\cdot 1{,}2 \\cdot \\pi \\cdot 1600 \\cdot 1728 \\approx 2{,}1$ МВт.
6. $Q = P / (\\eta \\rho g h) = 10^8 / (0{,}9 \\cdot 1000 \\cdot 10 \\cdot 250) \\approx 44$ м³/с.
7. Она меняет выработку за секунды и запасает энергию в водохранилищах, компенсируя изменчивость солнца и ветра.
8. Импортный газ, гидрокаскады (Севан-Раздан, Воротан, малые ГЭС), Мецаморская АЭС, растущая солнечная; высокая инсоляция, отсутствие собственного ископаемого топлива, падающие цены панелей.`,
      },
      [
        q(t("A solar cell converts light into electricity using…", "Արևային էլեմենտը լույսը վերածում է էլեկտրաէներգիայի՝ օգտագործելով…", "Солнечный элемент превращает свет в электричество с помощью…"), [t("a p–n junction", "p–n անցում", "p–n-перехода"), t("a steam turbine", "գոլորշու տուրբին", "паровой турбины"), t("a transformer", "տրանսֆորմատոր", "трансформатора")], 0),
        q(t("The power of the wind through a turbine is proportional to…", "Տուրբինի միջով քամու հզորությունը համեմատական է…", "Мощность ветра через турбину пропорциональна…"), [t("the cube of the wind speed", "քամու արագության խորանարդին", "кубу скорости ветра"), t("the wind speed", "քամու արագությանը", "скорости ветра"), t("the square root of the wind speed", "քամու արագության քառակուսի արմատին", "квадратному корню из скорости ветра")], 0),
        q(t("The highest efficiency among power plants belongs to…", "Էլեկտրակայանների մեջ ամենաբարձր ՕԳԳ-ն ունի…", "Наивысший КПД среди электростанций имеет…"), [t("hydroelectric plants", "հիդրոէլեկտրակայանը", "гидроэлектростанция"), t("coal plants", "ածխային կայանը", "угольная станция"), t("solar panels", "արևային պանելը", "солнечная панель")], 0),
        q(t("The capacity factor of a solar plant is typically…", "Արևային կայանի օգտագործման գործակիցը սովորաբար … է։", "Коэффициент использования мощности солнечной станции обычно…"), [t("15–25 %", "15–25 %", "15–25 %"), t("90 %", "90 %", "90 %"), t("100 %", "100 %", "100 %")], 0),
        q(t("The Sevan–Hrazdan cascade produces electricity from…", "Սևան-Հրազդան կասկադն էլեկտրաէներգիա է արտադրում…", "Севан-Разданский каскад вырабатывает электроэнергию за счёт…"), [t("water falling from Lake Sevan", "Սևանա լճից ընկնող ջրից", "воды, падающей из озера Севан"), t("imported gas", "ներկրվող գազից", "импортного газа"), t("wind", "քամուց", "ветра")], 0),
        q(t("Armenia has a high potential for solar power because…", "Հայաստանն արևային էներգիայի բարձր ներուժ ունի, քանի որ…", "Армения имеет высокий потенциал солнечной энергетики, потому что…"), [t("its annual solar irradiation is among the highest in Europe", "նրա տարեկան արևային ճառագայթումն Եվրոպայում ամենաբարձրերից է", "её годовая солнечная радиация — одна из самых высоких в Европе"), t("it has large coal reserves", "ունի ածխի մեծ պաշարներ", "у неё большие запасы угля"), t("it lies on the equator", "գտնվում է հասարակածի վրա", "она лежит на экваторе")], 0),
      ],
    ),
    lesson(
      "physics-everyday-tech",
      ["Physics in everyday technology: GPS, MRI, smartphones", "Ֆիզիկան ամենօրյա տեխնոլոգիայում․ GPS, ՄՌՏ, սմարթֆոն", "Физика в повседневной технике: GPS, МРТ, смартфон"],
      {
        en: ["Explain how GPS finds a position from satellite signals and why it needs relativistic corrections", "Describe the physics of MRI (nuclear magnetic resonance), X-ray CT and ultrasound imaging", "Identify the physical principles inside a smartphone: touch screen, accelerometer, camera, radio, lithium-ion battery"],
        hy: ["Բացատրել, թե ինչպես է GPS-ը գտնում դիրքն արբանյակային ազդանշաններից և ինչու են նրան ռելյատիվիստական ուղղումներ պետք", "Նկարագրել ՄՌՏ-ի (միջուկային մագնիսական ռեզոնանս), ռենտգենյան ԿՏ-ի և ուլտրաձայնային պատկերման ֆիզիկան", "Որոշել սմարթֆոնի ներսում գործող ֆիզիկական սկզբունքները․ հպէկրան, արագացումաչափ, խցիկ, ռադիո, լիթիում-իոնային մարտկոց"],
        ru: ["Объяснять, как GPS находит положение по сигналам спутников и почему ему нужны релятивистские поправки", "Описывать физику МРТ (ядерный магнитный резонанс), рентгеновской КТ и ультразвуковой визуализации", "Указывать физические принципы внутри смартфона: сенсорный экран, акселерометр, камера, радио, литий-ионный аккумулятор"],
      },
      {
        en: `## GPS: clocks in orbit

The Global Positioning System uses about $30$ satellites at $20\\,200$ km altitude, each carrying atomic clocks accurate to a nanosecond and broadcasting its position and time. A receiver measures the arrival time of each signal; the delay $\\Delta t$ gives the distance $d = c\\,\\Delta t$. Three distances fix a point on the Earth (**trilateration**); a fourth satellite removes the error of the receiver's cheap clock. Since $1$ ns of error means $30$ cm of distance, the satellite clocks must be right to a few nanoseconds, and relativity cannot be ignored:

> - Special relativity: the satellites move at $3{.}9$ km/s, so their clocks run **slow** by $7$ μs per day.
> - General relativity: higher in the Earth's gravity, their clocks run **fast** by $45$ μs per day.
> - Net: the clocks gain $38$ μs per day; uncorrected, positions would drift by $10$ km a day. The satellite clocks are therefore set to tick slightly slow before launch.

Other systems: GLONASS (Russia), Galileo (EU), BeiDou (China). Accuracy is a few metres, centimetres with correction signals.

## Medical imaging

> **X-ray computed tomography (CT):** an X-ray tube rotates around the patient; detectors measure the attenuation $I = I_0 e^{-\\mu x}$ along thousands of lines; a computer reconstructs the cross-section. Bone absorbs strongly, soft tissue weakly. Dose $5$–$10$ mSv per scan.
>
> **Magnetic resonance imaging (MRI):** hydrogen nuclei are tiny magnets. In a strong field ($1{.}5$–$3$ T, superconducting coils) they precess at the Larmor frequency $f = 42{.}6$ MHz per tesla. A radio pulse at this frequency tips them; as they relax they emit a radio signal whose strength and decay time depend on the tissue (water, fat, tumour). Gradient fields make the frequency depend on position, so the signal can be mapped. No ionising radiation; excellent for the brain, joints and soft tissue; cannot be used with metal implants.
>
> **Ultrasound:** a piezoelectric crystal emits $2$–$15$ MHz sound pulses; echoes from boundaries between tissues of different acoustic impedance return after a time $t = 2d/v$ ($v \\approx 1540$ m/s in tissue). Safe, cheap, real-time; the Doppler shift of echoes from blood measures its flow.
>
> **PET:** positron-emitting tracers, see the lesson on antiparticles.

## Inside a smartphone

| Component | Physics |
|---|---|
| Capacitive touch screen | a grid of transparent electrodes; a finger changes the local capacitance, which the controller locates to a fraction of a millimetre |
| LCD or OLED display | liquid crystals rotate the polarisation of backlight between polarisers, or organic LEDs emit light directly; millions of pixels, each with three subpixels |
| Accelerometer and gyroscope | a microscopic silicon mass on springs (MEMS); its displacement under acceleration changes a capacitance; a vibrating structure senses rotation by the Coriolis force |
| Camera | a lens a few millimetres wide forms an image on a CMOS sensor of $10^7$ photodiodes; each converts photons to charge (photoelectric effect) |
| Radio | antennas for 4G/5G ($0{.}7$–$6$ GHz), Wi-Fi ($2{.}4$ and $5$ GHz), Bluetooth, GPS ($1{.}575$ GHz), NFC ($13{.}56$ MHz induction) |
| Battery | lithium-ion cell, $3{.}7$ V, $10$–$20$ Wh; lithium ions shuttle between a graphite anode and a cobalt-oxide cathode |
| Processor | $10^{10}$ transistors, $3$ GHz, $5$ nm technology |
| Magnetometer | Hall-effect sensors measure the Earth's field: the compass |

The phone contains, in a device that fits in a hand, the physics of electrostatics, optics, mechanics, electromagnetic waves, electrochemistry, quantum mechanics and relativity (via GPS).

## Worked examples

**Example 1.** A GPS signal arrives $70$ ms after transmission. Distance to the satellite?

$d = c t = 3 \\cdot 10^8 \\cdot 0{.}07 = 2{.}1 \\cdot 10^7$ m $= 21\\,000$ km.

**Example 2.** A receiver's clock is wrong by $1$ μs. Error in distance?

$3 \\cdot 10^8 \\cdot 10^{-6} = 300$ m. Hence the fourth satellite to solve for the clock error.

**Example 3.** Time dilation of a GPS satellite clock ($v = 3{.}9$ km/s) per day.

$\\Delta t / t \\approx v^2 / 2c^2 = (3{.}9 \\cdot 10^3)^2 / (2 \\cdot 9 \\cdot 10^{16}) = 8{.}4 \\cdot 10^{-11}$; per day $8{.}4 \\cdot 10^{-11} \\cdot 86\\,400 \\approx 7{.}3$ μs slow.

**Example 4.** Larmor frequency of protons in a $3$ T MRI scanner.

$f = 42{.}6 \\cdot 3 = 128$ MHz, in the FM radio band; the scanner room must be shielded from radio waves.

**Example 5.** An ultrasound echo returns $130$ μs after the pulse. Depth of the reflecting organ?

$d = vt/2 = 1540 \\cdot 1{.}3 \\cdot 10^{-4} / 2 \\approx 0{.}1$ m $= 10$ cm.

**Example 6.** X-rays passing through $4$ cm of bone with $\\mu = 0{.}5$ cm⁻¹. What fraction is transmitted?

$I/I_0 = e^{-0{.}5 \\cdot 4} = e^{-2} \\approx 0{.}135$, that is $13{.}5\\%$; through $4$ cm of soft tissue ($\\mu = 0{.}2$ cm⁻¹) $e^{-0{.}8} = 45\\%$: the contrast that makes the image.

**Example 7.** A phone battery of $4000$ mAh at $3{.}7$ V. Stored energy, and how long it lasts at an average drain of $0{.}5$ W.

$E = 3{.}7 \\cdot 4 = 14{.}8$ Wh $\\approx 53$ kJ; $t = 14{.}8 / 0{.}5 \\approx 30$ h.

**Example 8.** A phone camera lens has focal length $5$ mm and the sensor is $6$ mm wide. Angular field of view?

$\\tan(\\theta/2) = 3/5 = 0{.}6$, so $\\theta/2 = 31°$, $\\theta \\approx 62°$, a typical wide-angle view.

## Exercises

1. Why does a GPS receiver need at least four satellites?
2. The two relativistic effects on GPS clocks have opposite signs. Which wins, and by how much per day?
3. A GPS satellite is $25\\,000$ km away. How long does its signal take to arrive?
4. What is the Larmor frequency of protons at $1{.}5$ T? Why does MRI not use ionising radiation?
5. An ultrasound pulse returns from a depth of $5$ cm. After what time?
6. Why does bone appear white and air black on an X-ray image?
7. Explain how a capacitive touch screen knows where your finger is and why it does not work with a glove.
8. List five physical phenomena used inside a smartphone and name the component in which each is used.

### Answers

1. Three for the three coordinates and one more to determine the receiver's clock error.
2. The gravitational effect ($+45$ μs) wins over the velocity effect ($-7$ μs): $+38$ μs per day.
3. $2{.}5 \\cdot 10^7 / 3 \\cdot 10^8 \\approx 83$ ms.
4. $64$ MHz; it uses radio waves and magnetic fields, whose photons ($10^{-7}$ eV) cannot ionise atoms.
5. $t = 2 \\cdot 0{.}05 / 1540 \\approx 65$ μs.
6. Bone absorbs X-rays strongly, so few reach the detector behind it; the image is a negative, so it appears white. Air absorbs almost nothing.
7. The finger, a conductor, adds capacitance to the electrodes nearest to it; the controller reads which rows and columns changed. An insulating glove keeps the finger too far from the electrodes.
8. For example: photoelectric effect (camera sensor), capacitance (touch screen), electromagnetic induction (NFC, wireless charging), Hall effect (compass), Coriolis force (gyroscope), electrochemistry (battery), polarisation of light (LCD), semiconductors (processor).`,
        hy: `## GPS․ ժամացույցներ ուղեծրում

Գլոբալ դիրքորոշման համակարգն օգտագործում է մոտ $30$ արբանյակ $20\\,200$ կմ բարձրության վրա, որոնցից յուրաքանչյուրը կրում է նանովայրկյանի ճշտության ատոմային ժամացույցներ և հեռարձակում իր դիրքն ու ժամանակը։ Ընդունիչը չափում է յուրաքանչյուր ազդանշանի հասնելու ժամանակը․ $\\Delta t$ ուշացումը տալիս է հեռավորությունը $d = c\\,\\Delta t$։ Երեք հեռավորություն որոշում են կետն Երկրի վրա (**եռակողմավորում**)․ չորրորդ արբանյակը վերացնում է ընդունիչի էժան ժամացույցի սխալը։ Քանի որ $1$ նվ սխալը նշանակում է $30$ սմ հեռավորություն, արբանյակների ժամացույցները պետք է ճիշտ լինեն մի քանի նանովայրկյանի ճշտությամբ, և հարաբերականությունն անտեսել չի կարելի․

> - Հարաբերականության հատուկ տեսություն․ արբանյակները շարժվում են $3{,}9$ կմ/վ արագությամբ, ուստի դրանց ժամացույցներն օրական $7$ մկվ **հետ են մնում**։
> - Հարաբերականության ընդհանուր տեսություն․ Երկրի ձգողականության դաշտում ավելի բարձր գտնվելով՝ դրանց ժամացույցներն օրական $45$ մկվ **առաջ են ընկնում**։
> - Ընդհանուր․ ժամացույցներն օրական $38$ մկվ առաջ են ընկնում․ առանց ուղղման դիրքերը կշեղվեին օրական $10$ կմ-ով։ Ուստի արբանյակների ժամացույցները թռիչքից առաջ կարգավորվում են մի փոքր դանդաղ աշխատելու։

Այլ համակարգեր․ ГЛОНАСС (Ռուսաստան), Galileo (ԵՄ), BeiDou (Չինաստան)։ Ճշտությունը մի քանի մետր է, ուղղիչ ազդանշաններով՝ սանտիմետրեր։

## Բժշկական պատկերում

> **Ռենտգենյան համակարգչային տոմոգրաֆիա (ԿՏ)․** ռենտգենյան խողովակը պտտվում է հիվանդի շուրջ․ դետեկտորները չափում են թուլացումը $I = I_0 e^{-\\mu x}$ հազարավոր գծերի երկայնքով․ համակարգիչը վերակառուցում է լայնական կտրվածքը։ Ոսկորն ուժեղ է կլանում, փափուկ հյուսվածքը՝ թույլ։ Դոզան $5$–$10$ մԶվ մեկ հետազոտությանը։
>
> **Մագնիսառեզոնանսային տոմոգրաֆիա (ՄՌՏ)․** ջրածնի միջուկները փոքրիկ մագնիսներ են։ Ուժեղ դաշտում ($1{,}5$–$3$ Տ, գերհաղորդիչ կոճեր) դրանք պրեցեսիա են կատարում Լարմորի հաճախությամբ $f = 42{,}6$ ՄՀց մեկ տեսլային։ Այդ հաճախության ռադիոիմպուլսը թեքում է դրանք․ հանգստանալիս դրանք արձակում են ռադիոազդանշան, որի ուժն ու մարման ժամանակը կախված են հյուսվածքից (ջուր, ճարպ, ուռուցք)։ Գրադիենտային դաշտերը հաճախությունը դարձնում են դիրքից կախված, ուստի ազդանշանը կարելի է քարտեզագրել։ Իոնացնող ճառագայթում չկա․ գերազանց է ուղեղի, հոդերի և փափուկ հյուսվածքների համար․ հնարավոր չէ օգտագործել մետաղական իմպլանտների դեպքում։
>
> **Ուլտրաձայն․** պիեզոէլեկտրական բյուրեղն արձակում է $2$–$15$ ՄՀց ձայնային իմպուլսներ․ տարբեր ակուստիկ դիմադրությամբ հյուսվածքների սահմաններից արձագանքները վերադառնում են $t = 2d/v$ ժամանակից հետո ($v \\approx 1540$ մ/վ հյուսվածքում)։ Անվտանգ է, էժան, իրական ժամանակում․ արյունից արձագանքների Դոպլերի շեղումը չափում է նրա հոսքը։
>
> **ՊԷՏ․** պոզիտրոն արձակող նշիչներ, տե՛ս հակամասնիկների դասը։

## Սմարթֆոնի ներսում

| Բաղադրիչ | Ֆիզիկա |
|---|---|
| Ունակային հպէկրան | թափանցիկ էլեկտրոդների ցանց․ մատը փոխում է տեղային ունակությունը, որը կառավարիչը տեղորոշում է միլիմետրի մասի ճշտությամբ |
| LCD կամ OLED էկրան | հեղուկ բյուրեղները բևեռարարների միջև պտտում են հետին լույսի բևեռացումը, կամ օրգանական լուսադիոդներն անմիջապես լույս են արձակում․ միլիոնավոր պիքսել՝ յուրաքանչյուրն երեք ենթապիքսելով |
| Արագացումաչափ և գիրոսկոպ | զսպանակների վրա մանրադիտակային սիլիցիումային զանգված (MEMS)․ արագացման ազդեցությամբ նրա տեղաշարժը փոխում է ունակությունը․ տատանվող կառույցը պտույտը զգում է Կորիոլիսի ուժով |
| Խցիկ | մի քանի միլիմետր լայնությամբ ոսպնյակը պատկեր է կազմում $10^7$ ֆոտոդիոդից բաղկացած CMOS սենսորի վրա․ յուրաքանչյուրը ֆոտոնները լիցքի է վերածում (ֆոտոէֆեկտ) |
| Ռադիո | ալեհավաքներ 4G/5G-ի ($0{,}7$–$6$ ԳՀց), Wi-Fi-ի ($2{,}4$ և $5$ ԳՀց), Bluetooth-ի, GPS-ի ($1{,}575$ ԳՀց), NFC-ի ($13{,}56$ ՄՀց ինդուկցիա) համար |
| Մարտկոց | լիթիում-իոնային էլեմենտ, $3{,}7$ Վ, $10$–$20$ Վտ·ժ․ լիթիումի իոնները տեղաշարժվում են գրաֆիտե անոդի և կոբալտի օքսիդի կաթոդի միջև |
| Պրոցեսոր | $10^{10}$ տրանզիստոր, $3$ ԳՀց, $5$ նմ տեխնոլոգիա |
| Մագնիսաչափ | Հոլի էֆեկտի սենսորները չափում են Երկրի դաշտը․ կողմնացույց |

Հեռախոսը ձեռքի ափում տեղավորվող սարքում պարունակում է էլեկտրաստատիկայի, օպտիկայի, մեխանիկայի, էլեկտրամագնիսական ալիքների, էլեկտրաքիմիայի, քվանտային մեխանիկայի և հարաբերականության (GPS-ի միջոցով) ֆիզիկան։

## Լուծված օրինակներ

**Օրինակ 1։** GPS ազդանշանը հասնում է հաղորդումից $70$ մվ հետո։ Հեռավորությունն արբանյակից։

$d = c t = 3 \\cdot 10^8 \\cdot 0{,}07 = 2{,}1 \\cdot 10^7$ մ $= 21\\,000$ կմ։

**Օրինակ 2։** Ընդունիչի ժամացույցը $1$ մկվ-ով սխալ է։ Հեռավորության սխալը։

$3 \\cdot 10^8 \\cdot 10^{-6} = 300$ մ։ Ահա թե ինչու է պետք չորրորդ արբանյակը ժամացույցի սխալը լուծելու համար։

**Օրինակ 3։** GPS արբանյակի ժամացույցի ժամանակի դանդաղումը ($v = 3{,}9$ կմ/վ) օրական։

$\\Delta t / t \\approx v^2 / 2c^2 = (3{,}9 \\cdot 10^3)^2 / (2 \\cdot 9 \\cdot 10^{16}) = 8{,}4 \\cdot 10^{-11}$․ օրական $8{,}4 \\cdot 10^{-11} \\cdot 86\\,400 \\approx 7{,}3$ մկվ հետ է մնում։

**Օրինակ 4։** Պրոտոնների Լարմորի հաճախությունը $3$ Տ ՄՌՏ սկաներում։

$f = 42{,}6 \\cdot 3 = 128$ ՄՀց, FM ռադիոյի տիրույթում․ սկաների սենյակը պետք է պաշտպանված լինի ռադիոալիքներից։

**Օրինակ 5։** Ուլտրաձայնային արձագանքը վերադառնում է իմպուլսից $130$ մկվ հետո։ Անդրադարձնող օրգանի խորությունը։

$d = vt/2 = 1540 \\cdot 1{,}3 \\cdot 10^{-4} / 2 \\approx 0{,}1$ մ $= 10$ սմ։

**Օրինակ 6։** Ռենտգենյան ճառագայթներն անցնում են $4$ սմ ոսկորով, որտեղ $\\mu = 0{,}5$ սմ⁻¹։ Ո՞ր մասն է անցնում։

$I/I_0 = e^{-0{,}5 \\cdot 4} = e^{-2} \\approx 0{,}135$, այսինքն՝ $13{,}5\\%$․ $4$ սմ փափուկ հյուսվածքով ($\\mu = 0{,}2$ սմ⁻¹)՝ $e^{-0{,}8} = 45\\%$․ հակադրություն, որը ստեղծում է պատկերը։

**Օրինակ 7։** Հեռախոսի մարտկոցը $4000$ մԱ·ժ է $3{,}7$ Վ-ում։ Կուտակված էներգիան և որքան է այն տևում $0{,}5$ Վտ միջին սպառման դեպքում։

$E = 3{,}7 \\cdot 4 = 14{,}8$ Վտ·ժ $\\approx 53$ կՋ․ $t = 14{,}8 / 0{,}5 \\approx 30$ ժ։

**Օրինակ 8։** Հեռախոսի խցիկի ոսպնյակի կիզակետային հեռավորությունը $5$ մմ է, սենսորը՝ $6$ մմ լայն։ Անկյունային տեսադա՞շտը։

$\\tan(\\theta/2) = 3/5 = 0{,}6$, ուստի $\\theta/2 = 31°$, $\\theta \\approx 62°$՝ տիպիկ լայնանկյուն տեսադաշտ։

## Վարժություններ

1. Ինչո՞ւ է GPS ընդունիչին առնվազն չորս արբանյակ պետք։
2. GPS ժամացույցների վրա երկու ռելյատիվիստական էֆեկտները հակառակ նշան ունեն։ Ո՞րն է հաղթում, և որքանո՞վ օրական։
3. GPS արբանյակը $25\\,000$ կմ հեռու է։ Որքա՞ն ժամանակում է նրա ազդանշանը հասնում։
4. Ո՞րն է պրոտոնների Լարմորի հաճախությունը $1{,}5$ Տ-ում։ Ինչո՞ւ ՄՌՏ-ն իոնացնող ճառագայթում չի օգտագործում։
5. Ուլտրաձայնային իմպուլսը վերադառնում է $5$ սմ խորությունից։ Ի՞նչ ժամանակից հետո։
6. Ինչո՞ւ է ոսկորը ռենտգենյան պատկերում սպիտակ երևում, իսկ օդը՝ սև։
7. Բացատրեք, թե ինչպես է ունակային հպէկրանն իմանում, թե որտեղ է ձեր մատը, և ինչու այն ձեռնոցով չի աշխատում։
8. Թվարկեք սմարթֆոնի ներսում օգտագործվող հինգ ֆիզիկական երևույթ և անվանեք այն բաղադրիչը, որտեղ յուրաքանչյուրն օգտագործվում է։

### Պատասխաններ

1. Երեքը՝ երեք կոորդինատների համար, և ևս մեկը՝ ընդունիչի ժամացույցի սխալը որոշելու համար։
2. Գրավիտացիոն էֆեկտը ($+45$ մկվ) հաղթում է արագության էֆեկտին ($-7$ մկվ)․ օրական $+38$ մկվ։
3. $2{,}5 \\cdot 10^7 / 3 \\cdot 10^8 \\approx 83$ մվ։
4. $64$ ՄՀց․ այն օգտագործում է ռադիոալիքներ և մագնիսական դաշտեր, որոնց ֆոտոնները ($10^{-7}$ էՎ) չեն կարող ատոմներ իոնացնել։
5. $t = 2 \\cdot 0{,}05 / 1540 \\approx 65$ մկվ։
6. Ոսկորն ուժեղ է կլանում ռենտգենյան ճառագայթները, ուստի քչերն են հասնում նրա հետևի դետեկտորին․ պատկերը նեգատիվ է, ուստի այն սպիտակ է երևում։ Օդը գրեթե ոչինչ չի կլանում։
7. Մատը՝ հաղորդիչ, ունակություն է ավելացնում իրեն ամենամոտ էլեկտրոդներին․ կառավարիչը կարդում է, թե որ տողերն ու սյուներն են փոխվել։ Մեկուսիչ ձեռնոցը մատը չափազանց հեռու է պահում էլեկտրոդներից։
8. Օրինակ․ ֆոտոէֆեկտ (խցիկի սենսոր), ունակություն (հպէկրան), էլեկտրամագնիսական ինդուկցիա (NFC, անլար լիցքավորում), Հոլի էֆեկտ (կողմնացույց), Կորիոլիսի ուժ (գիրոսկոպ), էլեկտրաքիմիա (մարտկոց), լույսի բևեռացում (LCD), կիսահաղորդիչներ (պրոցեսոր)։`,
        ru: `## GPS: часы на орбите

Глобальная система позиционирования использует около $30$ спутников на высоте $20\\,200$ км, каждый из которых несёт атомные часы с наносекундной точностью и передаёт своё положение и время. Приёмник измеряет время прихода каждого сигнала; задержка $\\Delta t$ даёт расстояние $d = c\\,\\Delta t$. Три расстояния определяют точку на Земле (**трилатерация**); четвёртый спутник убирает ошибку дешёвых часов приёмника. Поскольку $1$ нс ошибки означает $30$ см расстояния, часы спутников должны быть точны до нескольких наносекунд, и теорией относительности пренебречь нельзя:

> - Специальная теория относительности: спутники движутся со скоростью $3{,}9$ км/с, поэтому их часы **отстают** на $7$ мкс в сутки.
> - Общая теория относительности: находясь выше в поле тяготения Земли, их часы **спешат** на $45$ мкс в сутки.
> - Итог: часы уходят вперёд на $38$ мкс в сутки; без поправки положение уплывало бы на $10$ км в день. Поэтому часы спутников перед запуском настраивают идти чуть медленнее.

Другие системы: ГЛОНАСС (Россия), Galileo (ЕС), BeiDou (Китай). Точность — несколько метров, с корректирующими сигналами — сантиметры.

## Медицинская визуализация

> **Рентгеновская компьютерная томография (КТ):** рентгеновская трубка вращается вокруг пациента; детекторы измеряют ослабление $I = I_0 e^{-\\mu x}$ вдоль тысяч линий; компьютер восстанавливает поперечный срез. Кость поглощает сильно, мягкие ткани слабо. Доза $5$–$10$ мЗв за исследование.
>
> **Магнитно-резонансная томография (МРТ):** ядра водорода — крошечные магниты. В сильном поле ($1{,}5$–$3$ Тл, сверхпроводящие катушки) они прецессируют с ларморовской частотой $f = 42{,}6$ МГц на тесла. Радиоимпульс этой частоты отклоняет их; релаксируя, они излучают радиосигнал, сила и время затухания которого зависят от ткани (вода, жир, опухоль). Градиентные поля делают частоту зависящей от положения, так что сигнал можно картировать. Нет ионизирующего излучения; отлично для мозга, суставов и мягких тканей; нельзя применять при металлических имплантах.
>
> **Ультразвук:** пьезоэлектрический кристалл испускает звуковые импульсы $2$–$15$ МГц; эхо от границ тканей с разным акустическим сопротивлением возвращается через время $t = 2d/v$ ($v \\approx 1540$ м/с в ткани). Безопасно, дёшево, в реальном времени; доплеровский сдвиг эха от крови измеряет её поток.
>
> **ПЭТ:** позитронные метки, см. урок об античастицах.

## Внутри смартфона

| Компонент | Физика |
|---|---|
| Ёмкостный сенсорный экран | сетка прозрачных электродов; палец меняет местную ёмкость, которую контроллер локализует с точностью до долей миллиметра |
| Дисплей LCD или OLED | жидкие кристаллы поворачивают поляризацию подсветки между поляризаторами, либо органические светодиоды излучают свет напрямую; миллионы пикселей, каждый с тремя субпикселями |
| Акселерометр и гироскоп | микроскопическая кремниевая масса на пружинах (MEMS); её смещение при ускорении меняет ёмкость; вибрирующая структура чувствует вращение по силе Кориолиса |
| Камера | объектив шириной несколько миллиметров строит изображение на КМОП-матрице из $10^7$ фотодиодов; каждый превращает фотоны в заряд (фотоэффект) |
| Радио | антенны для 4G/5G ($0{,}7$–$6$ ГГц), Wi-Fi ($2{,}4$ и $5$ ГГц), Bluetooth, GPS ($1{,}575$ ГГц), NFC ($13{,}56$ МГц, индукция) |
| Аккумулятор | литий-ионный элемент, $3{,}7$ В, $10$–$20$ Вт·ч; ионы лития перемещаются между графитовым анодом и катодом из оксида кобальта |
| Процессор | $10^{10}$ транзисторов, $3$ ГГц, технология $5$ нм |
| Магнитометр | датчики Холла измеряют поле Земли: компас |

Телефон вмещает в устройство размером с ладонь физику электростатики, оптики, механики, электромагнитных волн, электрохимии, квантовой механики и теории относительности (через GPS).

## Разобранные примеры

**Пример 1.** Сигнал GPS приходит через $70$ мс после передачи. Расстояние до спутника?

$d = c t = 3 \\cdot 10^8 \\cdot 0{,}07 = 2{,}1 \\cdot 10^7$ м $= 21\\,000$ км.

**Пример 2.** Часы приёмника ошибаются на $1$ мкс. Ошибка расстояния?

$3 \\cdot 10^8 \\cdot 10^{-6} = 300$ м. Отсюда четвёртый спутник для нахождения ошибки часов.

**Пример 3.** Замедление часов спутника GPS ($v = 3{,}9$ км/с) за сутки.

$\\Delta t / t \\approx v^2 / 2c^2 = (3{,}9 \\cdot 10^3)^2 / (2 \\cdot 9 \\cdot 10^{16}) = 8{,}4 \\cdot 10^{-11}$; за сутки $8{,}4 \\cdot 10^{-11} \\cdot 86\\,400 \\approx 7{,}3$ мкс отставания.

**Пример 4.** Ларморовская частота протонов в МРТ-сканере на $3$ Тл.

$f = 42{,}6 \\cdot 3 = 128$ МГц, в диапазоне FM-радио; помещение сканера должно быть экранировано от радиоволн.

**Пример 5.** Ультразвуковое эхо возвращается через $130$ мкс после импульса. Глубина отражающего органа?

$d = vt/2 = 1540 \\cdot 1{,}3 \\cdot 10^{-4} / 2 \\approx 0{,}1$ м $= 10$ см.

**Пример 6.** Рентгеновские лучи проходят $4$ см кости с $\\mu = 0{,}5$ см⁻¹. Какая доля проходит?

$I/I_0 = e^{-0{,}5 \\cdot 4} = e^{-2} \\approx 0{,}135$, то есть $13{,}5\\%$; через $4$ см мягкой ткани ($\\mu = 0{,}2$ см⁻¹) $e^{-0{,}8} = 45\\%$: контраст, создающий изображение.

**Пример 7.** Аккумулятор телефона $4000$ мА·ч при $3{,}7$ В. Запасённая энергия и на сколько её хватит при среднем потреблении $0{,}5$ Вт.

$E = 3{,}7 \\cdot 4 = 14{,}8$ Вт·ч $\\approx 53$ кДж; $t = 14{,}8 / 0{,}5 \\approx 30$ ч.

**Пример 8.** Объектив камеры телефона имеет фокусное расстояние $5$ мм, матрица шириной $6$ мм. Угол поля зрения?

$\\tan(\\theta/2) = 3/5 = 0{,}6$, значит $\\theta/2 = 31°$, $\\theta \\approx 62°$, типичный широкоугольный обзор.

## Упражнения

1. Почему приёмнику GPS нужно не меньше четырёх спутников?
2. Два релятивистских эффекта для часов GPS имеют противоположные знаки. Какой побеждает и на сколько в сутки?
3. Спутник GPS находится в $25\\,000$ км. За какое время приходит его сигнал?
4. Какова ларморовская частота протонов при $1{,}5$ Тл? Почему МРТ не использует ионизирующее излучение?
5. Ультразвуковой импульс возвращается с глубины $5$ см. Через какое время?
6. Почему кость на рентгеновском снимке выглядит белой, а воздух — чёрным?
7. Объясните, как ёмкостный сенсорный экран узнаёт, где ваш палец, и почему он не работает в перчатке.
8. Перечислите пять физических явлений, используемых в смартфоне, и назовите компонент, где применяется каждое.

### Ответы

1. Три для трёх координат и ещё один для определения ошибки часов приёмника.
2. Гравитационный эффект ($+45$ мкс) побеждает скоростной ($-7$ мкс): $+38$ мкс в сутки.
3. $2{,}5 \\cdot 10^7 / 3 \\cdot 10^8 \\approx 83$ мс.
4. $64$ МГц; используются радиоволны и магнитные поля, фотоны которых ($10^{-7}$ эВ) не могут ионизовать атомы.
5. $t = 2 \\cdot 0{,}05 / 1540 \\approx 65$ мкс.
6. Кость сильно поглощает рентгеновские лучи, поэтому до детектора за ней доходит мало; снимок — негатив, поэтому она белая. Воздух почти ничего не поглощает.
7. Палец, проводник, добавляет ёмкость ближайшим электродам; контроллер считывает, какие строки и столбцы изменились. Изолирующая перчатка держит палец слишком далеко от электродов.
8. Например: фотоэффект (матрица камеры), ёмкость (сенсорный экран), электромагнитная индукция (NFC, беспроводная зарядка), эффект Холла (компас), сила Кориолиса (гироскоп), электрохимия (аккумулятор), поляризация света (LCD), полупроводники (процессор).`,
      },
      [
        q(t("A GPS receiver finds its position by measuring…", "GPS ընդունիչն իր դիրքը գտնում է՝ չափելով…", "Приёмник GPS находит своё положение, измеряя…"), [t("the travel time of signals from satellites", "արբանյակների ազդանշանների հասնելու ժամանակը", "время прохождения сигналов от спутников"), t("the Earth's magnetic field", "Երկրի մագնիսական դաշտը", "магнитное поле Земли"), t("the brightness of the Sun", "Արեգակի պայծառությունը", "яркость Солнца")], 0),
        q(t("Without relativistic corrections GPS positions would drift by about…", "Առանց ռելյատիվիստական ուղղումների GPS դիրքերը կշեղվեին մոտ…", "Без релятивистских поправок положения GPS уплывали бы примерно на…"), [t("10 km per day", "10 կմ օրական", "10 км в сутки"), t("1 mm per year", "1 մմ տարեկան", "1 мм в год"), t("nothing at all", "ոչնչով", "нисколько")], 0),
        q(t("MRI uses…", "ՄՌՏ-ն օգտագործում է…", "МРТ использует…"), [t("strong magnetic fields and radio waves", "ուժեղ մագնիսական դաշտեր և ռադիոալիքներ", "сильные магнитные поля и радиоволны"), t("X-rays", "ռենտգենյան ճառագայթներ", "рентгеновские лучи"), t("gamma rays", "գամմա ճառագայթներ", "гамма-лучи")], 0),
        q(t("Ultrasound imaging locates organs by…", "Ուլտրաձայնային պատկերումն օրգանները գտնում է…", "Ультразвуковая визуализация находит органы по…"), [t("the time of echoes", "արձագանքների ժամանակով", "времени эха"), t("their radioactivity", "դրանց ռադիոակտիվությամբ", "их радиоактивности"), t("their colour", "դրանց գույնով", "их цвету")], 0),
        q(t("A capacitive touch screen detects a finger because the finger…", "Ունակային հպէկրանը մատը հայտնաբերում է, քանի որ մատը…", "Ёмкостный сенсорный экран обнаруживает палец, потому что палец…"), [t("changes the local capacitance", "փոխում է տեղային ունակությունը", "меняет местную ёмкость"), t("heats the glass", "տաքացնում է ապակին", "нагревает стекло"), t("emits light", "լույս է արձակում", "излучает свет")], 0),
        q(t("The camera sensor of a phone works on the…", "Հեռախոսի խցիկի սենսորն աշխատում է…", "Матрица камеры телефона работает на…"), [t("photoelectric effect", "ֆոտոէֆեկտի սկզբունքով", "фотоэффекте"), t("Doppler effect", "Դոպլերի էֆեկտի սկզբունքով", "эффекте Доплера"), t("Hall effect", "Հոլի էֆեկտի սկզբունքով", "эффекте Холла")], 0),
      ],
    ),
  ],
};
