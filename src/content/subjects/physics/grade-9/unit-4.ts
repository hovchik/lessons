import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Electromagnetic field", "Էլեկտրամագնիսական դաշտ", "Электромагнитное поле"),
  summary: t("Magnetic field and magnetic induction, the Ampere force, electromagnetic induction, alternating current, the generator and the transformer, electromagnetic waves and light as a wave.", "Մագնիսական դաշտ և մագնիսական ինդուկցիա, Ամպերի ուժ, էլեկտրամագնիսական ինդուկցիա, փոփոխական հոսանք, գեներատոր և տրանսֆորմատոր, էլեկտրամագնիսական ալիքներ և լույսն որպես ալիք։", "Магнитное поле и магнитная индукция, сила Ампера, электромагнитная индукция, переменный ток, генератор и трансформатор, электромагнитные волны и свет как волна."),
  lessons: [
    lesson(
      "magnetic-field-induction",
      ["Magnetic field; magnetic induction; the Ampere force", "Մագնիսական դաշտ, մագնիսական ինդուկցիա, Ամպերի ուժ", "Магнитное поле; магнитная индукция; сила Ампера"],
      {
        en: ["Say what a magnetic field is and what creates it", "Draw the field lines of a magnet and of a straight current", "Use the formula for the Ampere force and the left-hand rule"],
        hy: ["Ասել, թե ինչ է մագնիսական դաշտը և ինչն է նրան ստեղծում", "Գծել մագնիսի և ուղիղ հոսանքի դաշտի գծերը", "Կիրառել Ամպերի ուժի բանաձևը և ձախ ձեռքի կանոնը"],
        ru: ["Говорить, что такое магнитное поле и что его создаёт", "Изображать линии поля магнита и прямого тока", "Применять формулу силы Ампера и правило левой руки"],
      },
      {
        en: `## The field and its lines

A magnet acts on iron without touching it, and so does a wire that carries a current. The thing that passes the action on is the **magnetic field**.

> A magnetic field is created by moving electric charges, that is by currents, and it acts only on moving charges, on currents and on magnets.

A field is pictured by **magnetic lines**: closed curves whose direction at each point is the direction a small compass needle would take. Outside a magnet they run from the north pole to the south pole, and they never begin or end anywhere, unlike the lines of an electric field.

| Current | The shape of the lines |
|---|---|
| a straight wire | circles round the wire |
| a loop | lines through the loop, closing outside |
| a coil (solenoid) | like the lines of a bar magnet |

The direction is found by the **right-hand screw rule**: point the thumb of the right hand along the current, and the curled fingers show the lines round the wire. For a coil it works the other way round: the curled fingers along the current give the thumb pointing to the north pole.

**Example 1.** A current flowing up a vertical wire gives lines that run anticlockwise seen from above. A compass placed east of the wire points north-west.

**Example 2.** An electromagnet is a coil with an iron core. The iron multiplies the field many times, the field can be switched off, and that is why cranes and electric bells use electromagnets and not permanent magnets.

## Magnetic induction

> **Magnetic induction** $B$ measures the strength of a magnetic field. Its unit is the **tesla**: $1$ T is a field in which a wire of length $1$ m carrying a current of $1$ A feels a force of $1$ N.

| Field | Induction |
|---|---|
| the Earth's field | about $5 \\cdot 10^{-5}$ T |
| a school horseshoe magnet | about $0{.}1$ T |
| the magnet of a hospital scanner | $1$ T to $3$ T |

## The Ampere force

> A straight wire of length $l$ carrying a current $I$ in a field $B$ perpendicular to it feels the **Ampere force**
> $$F = BIl.$$

Its direction is given by the **left-hand rule**: hold the left hand so that the field lines enter the palm and the four fingers point along the current; the thumb then shows the force. If the wire lies along the field, the force is zero.

**Example 3.** A wire of $0{.}2$ m with $5$ A in a field of $0{.}4$ T feels $F = 0{.}4 \\cdot 5 \\cdot 0{.}2 = 0{.}4$ N.
**Example 4.** Doubling the current doubles the force; reversing the current reverses it.
**Example 5.** A loop in a field is turned by the Ampere force, because the force on one side is opposite to the force on the other. That is the whole idea of the electric motor and of the moving-coil meter.
**Example 6.** In a loudspeaker a coil in the field of a permanent magnet carries the varying current of the music, so the Ampere force moves the cone back and forth and the cone pushes the air.

### Exercises

1. What creates a magnetic field, and on what does it act?
2. How do magnetic lines differ from electric field lines?
3. What is the shape of the lines round a straight current?
4. State the right-hand screw rule for a coil.
5. What is measured in teslas, and how is the unit defined?
6. Write the formula for the Ampere force and state the left-hand rule.
7. A wire of $0{.}5$ m with $4$ A lies across a field of $0{.}3$ T. Find the force.
8. Why does a loop in a magnetic field turn?

### Answers

1. Moving charges and currents create it; it acts on moving charges, currents and magnets.
2. Magnetic lines are closed and have no beginning or end.
3. Circles round the wire.
4. The curled fingers of the right hand follow the current, and the thumb points to the north pole.
5. The magnetic induction; $1$ T gives a force of $1$ N on $1$ m of wire with $1$ A.
6. $F = BIl$; field into the palm, fingers along the current, thumb on the force.
7. $F = 0{.}6$ N.
8. The forces on its opposite sides are directed opposite ways.`,
        hy: `## Դաշտը և նրա գծերը

Մագնիսն երկաթի վրա ազդում է առանց դիպչելու, և նույնն անում է հոսանք տեղափոխող լարը։ Այն, ինչն ազդեցությունը փոխանցում է, **մագնիսական դաշտն** է։

> Մագնիսական դաշտը ստեղծվում է շարժվող էլեկտրական լիցքերով, այսինքն հոսանքներով, և ազդում է միայն շարժվող լիցքերի, հոսանքների և մագնիսների վրա։

Դաշտը պատկերվում է **մագնիսական գծերով**՝ փակ կորերով, որոնց ուղղությունն ամեն կետում այն ուղղությունն է, որը կվերցնի փոքր կողմնացույցի սլաքը։ Մագնիսից դուրս նրանք վազում են հյուսիսային բևեռից դեպի հարավային և երբեք ոչ մի տեղ չեն սկսվում կամ ավարտվում, ի տարբերություն էլեկտրական դաշտի գծերի։

| Հոսանք | Գծերի ձևը |
|---|---|
| ուղիղ լար | շրջանագծեր լարի շուրջը |
| կոնտուր | գծեր կոնտուրի միջով, որոնք փակվում են դրսում |
| կոճ (սոլենոիդ) | ձողաձև մագնիսի գծերի պես |

Ուղղությունը գտնվում է **աջ ձեռքի պտուտակի կանոնով**՝ աջ ձեռքի բթամատն ուղղեք հոսանքի երկայնքով, և ծալված մատները ցույց կտան գծերը լարի շուրջը։ Կոճի համար այն գործում է հակառակ կարգով՝ հոսանքի երկայնքով ծալված մատները տալիս են հյուսիսային բևեռին ուղղված բթամատը։

**Օրինակ 1։** Ուղղահայաց լարով վեր հոսող հոսանքը տալիս է գծեր, որոնք վերևից նայելիս վազում են ժամացույցի սլաքին հակառակ։ Լարից արևելք դրված կողմնացույցը ցույց է տալիս հյուսիս-արևմուտք։

**Օրինակ 2։** Էլեկտրամագնիսն երկաթե միջուկով կոճ է։ Երկաթը դաշտը բազմապատկում է շատ անգամ, դաշտը կարելի է անջատել, և դրա համար կռունկները և էլեկտրական զանգերն օգտագործում են էլեկտրամագնիսներ, ոչ թե մշտական մագնիսներ։

## Մագնիսական ինդուկցիա

> **Մագնիսական ինդուկցիան** $B$ չափում է մագնիսական դաշտի ուժգնությունը։ Նրա միավորը **տեսլան** է. $1$ Տ-ը այն դաշտն է, որում $1$ մ երկարությամբ, $1$ Ա հոսանք տեղափոխող լարը զգում է $1$ Ն ուժ։

| Դաշտ | Ինդուկցիա |
|---|---|
| Երկրի դաշտը | մոտ $5 \\cdot 10^{-5}$ Տ |
| դպրոցական պայտաձև մագնիսը | մոտ $0{,}1$ Տ |
| հիվանդանոցային սկաների մագնիսը | $1$ Տ-ից $3$ Տ |

## Ամպերի ուժը

> $l$ երկարությամբ ուղիղ լարը, որը $I$ հոսանք է տեղափոխում նրան ուղղահայաց $B$ դաշտում, զգում է **Ամպերի ուժ**
> $$F = BIl.$$

Նրա ուղղությունը տրվում է **ձախ ձեռքի կանոնով**՝ ձախ ձեռքը պահեք այնպես, որ դաշտի գծերը մտնեն ափի մեջ, իսկ չորս մատներն ուղղված լինեն հոսանքի երկայնքով, այդ դեպքում բթամատը ցույց է տալիս ուժը։ Եթե լարը դաշտի երկայնքով է, ուժը զրո է։

**Օրինակ 3։** $0{,}2$ մ լարը $5$ Ա հոսանքով $0{,}4$ Տ դաշտում զգում է $F = 0{,}4 \\cdot 5 \\cdot 0{,}2 = 0{,}4$ Ն։
**Օրինակ 4։** Հոսանքի կրկնապատկումը կրկնապատկում է ուժը, հոսանքի ուղղության հակադարձումը հակադարձում է նրան։
**Օրինակ 5։** Դաշտում կոնտուրը պտտվում է Ամպերի ուժի պատճառով, որովհետև մի կողմի ուժը հակառակ է մյուս կողմի ուժին։ Ահա էլեկտրական շարժիչի և շրջանակավոր չափիչի ողջ գաղափարը։
**Օրինակ 6։** Բարձրախոսում մշտական մագնիսի դաշտում գտնվող կոճը տեղափոխում է երաժշտության փոփոխվող հոսանքը, ուստի Ամպերի ուժը թաղանթը շարժում է առաջ և հետ, իսկ թաղանթը հրում է օդը։

### Վարժություններ

1. Ի՞նչն է ստեղծում մագնիսական դաշտը, և ինչի՞ վրա է այն ազդում։
2. Ինչո՞վ են մագնիսական գծերը տարբերվում էլեկտրական դաշտի գծերից։
3. Ի՞նչ ձև ունեն ուղիղ հոսանքի շուրջը գծերը։
4. Ձևակերպեք կոճի համար աջ ձեռքի պտուտակի կանոնը։
5. Ի՞նչն է չափվում տեսլաներով, և ինչպե՞ս է սահմանվում միավորը։
6. Գրեք Ամպերի ուժի բանաձևը և ձևակերպեք ձախ ձեռքի կանոնը։
7. $0{,}5$ մ լարը $4$ Ա հոսանքով գտնվում է $0{,}3$ Տ դաշտի լայնքով։ Գտեք ուժը։
8. Ինչո՞ւ է մագնիսական դաշտում կոնտուրը պտտվում։

### Պատասխաններ

1. Շարժվող լիցքերը և հոսանքները ստեղծում են նրան. այն ազդում է շարժվող լիցքերի, հոսանքների և մագնիսների վրա։
2. Մագնիսական գծերը փակ են և սկիզբ կամ վերջ չունեն։
3. Շրջանագծեր լարի շուրջը։
4. Աջ ձեռքի ծալված մատները հետևում են հոսանքին, իսկ բթամատը ցույց է տալիս հյուսիսային բևեռը։
5. Մագնիսական ինդուկցիան. $1$ Տ-ը $1$ Ա հոսանքով $1$ մ լարի վրա տալիս է $1$ Ն ուժ։
6. $F = BIl$. դաշտն ափի մեջ, մատները հոսանքի երկայնքով, բթամատը՝ ուժի վրա։
7. $F = 0{,}6$ Ն։
8. Նրա հակադիր կողմերի վրա ուժերն ուղղված են հակառակ կողմեր։`,
        ru: `## Поле и его линии

Магнит действует на железо, не касаясь его, и то же делает провод с током. То, что передаёт это действие, — **магнитное поле**.

> Магнитное поле создаётся движущимися электрическими зарядами, то есть токами, и действует только на движущиеся заряды, на токи и на магниты.

Поле изображают **магнитными линиями**: замкнутыми кривыми, направление которых в каждой точке есть направление, которое примет маленькая стрелка компаса. Вне магнита они идут от северного полюса к южному и нигде не начинаются и не заканчиваются, в отличие от линий электрического поля.

| Ток | Форма линий |
|---|---|
| прямой провод | окружности вокруг провода |
| контур | линии сквозь контур, замыкающиеся снаружи |
| катушка (соленоид) | как линии полосового магнита |

Направление находят по **правилу правого винта**: направьте большой палец правой руки по току, и согнутые пальцы покажут линии вокруг провода. Для катушки оно работает наоборот: согнутые пальцы по току дают большой палец, указывающий на северный полюс.

**Пример 1.** Ток, идущий вверх по вертикальному проводу, даёт линии, которые при взгляде сверху идут против часовой стрелки. Компас, поставленный к востоку от провода, показывает на северо-запад.

**Пример 2.** Электромагнит — это катушка с железным сердечником. Железо усиливает поле много раз, поле можно выключить, и поэтому краны и электрические звонки используют электромагниты, а не постоянные магниты.

## Магнитная индукция

> **Магнитная индукция** $B$ измеряет силу магнитного поля. Её единица — **тесла**: $1$ Тл — это поле, в котором провод длиной $1$ м с током $1$ А испытывает силу $1$ Н.

| Поле | Индукция |
|---|---|
| поле Земли | около $5 \\cdot 10^{-5}$ Тл |
| школьный дугообразный магнит | около $0{,}1$ Тл |
| магнит больничного сканера | от $1$ Тл до $3$ Тл |

## Сила Ампера

> Прямой провод длиной $l$ с током $I$ в перпендикулярном ему поле $B$ испытывает **силу Ампера**
> $$F = BIl.$$

Её направление даёт **правило левой руки**: держите левую руку так, чтобы линии поля входили в ладонь, а четыре пальца указывали по току; тогда большой палец покажет силу. Если провод лежит вдоль поля, сила равна нулю.

**Пример 3.** Провод $0{,}2$ м с током $5$ А в поле $0{,}4$ Тл испытывает $F = 0{,}4 \\cdot 5 \\cdot 0{,}2 = 0{,}4$ Н.
**Пример 4.** Удвоение тока удваивает силу; смена направления тока меняет направление силы.
**Пример 5.** Контур в поле поворачивается силой Ампера, потому что сила на одной его стороне противоположна силе на другой. В этом вся идея электродвигателя и измерительного прибора с рамкой.
**Пример 6.** В громкоговорителе катушка в поле постоянного магнита несёт меняющийся ток музыки, поэтому сила Ампера двигает диффузор вперёд и назад, а диффузор толкает воздух.

### Упражнения

1. Что создаёт магнитное поле и на что оно действует?
2. Чем магнитные линии отличаются от линий электрического поля?
3. Какова форма линий вокруг прямого тока?
4. Сформулируйте правило правого винта для катушки.
5. Что измеряют в теслах и как определяется эта единица?
6. Запишите формулу силы Ампера и сформулируйте правило левой руки.
7. Провод $0{,}5$ м с током $4$ А лежит поперёк поля $0{,}3$ Тл. Найдите силу.
8. Почему контур в магнитном поле поворачивается?

### Ответы

1. Его создают движущиеся заряды и токи; оно действует на движущиеся заряды, токи и магниты.
2. Магнитные линии замкнуты и не имеют начала и конца.
3. Окружности вокруг провода.
4. Согнутые пальцы правой руки идут по току, а большой палец указывает на северный полюс.
5. Магнитную индукцию; $1$ Тл даёт силу $1$ Н на $1$ м провода с током $1$ А.
6. $F = BIl$; поле в ладонь, пальцы по току, большой палец на силу.
7. $F = 0{,}6$ Н.
8. Силы на его противоположных сторонах направлены в разные стороны.`,
      },
      [
        q(t("A magnetic field is created by", "Մագնիսական դաշտը ստեղծվում է", "Магнитное поле создаётся"), [
          t("moving charges and currents", "շարժվող լիցքերով և հոսանքներով", "движущимися зарядами и токами"),
          t("charges at rest", "հանգստի մեջ գտնվող լիցքերով", "покоящимися зарядами"),
          t("heat", "ջերմությամբ", "теплом"),
        ], 0),
        q(t("The magnetic lines round a straight current are", "Ուղիղ հոսանքի շուրջը մագնիսական գծերը", "Магнитные линии вокруг прямого тока —"), [
          t("straight lines along the wire", "ուղիղներ լարի երկայնքով", "прямые вдоль провода"),
          t("circles round the wire", "շրջանագծեր լարի շուրջը", "окружности вокруг провода"),
          t("lines ending on the wire", "լարի վրա ավարտվող գծեր", "линии, кончающиеся на проводе"),
        ], 1),
        q(t("Magnetic induction is measured in", "Մագնիսական ինդուկցիան չափվում է", "Магнитную индукцию измеряют в"), [
          t("amperes", "ամպերներով", "амперах"),
          t("newtons", "նյուտոններով", "ньютонах"),
          t("teslas", "տեսլաներով", "теслах"),
        ], 2),
        q(t("The Ampere force on a wire equals", "Լարի վրա Ամպերի ուժը հավասար է", "Сила Ампера на провод равна"), [
          t("BIl", "BIl", "BIl"),
          t("B/Il", "B/Il", "B/Il"),
          t("Bl/I", "Bl/I", "Bl/I"),
        ], 0),
        q(t("If a wire lies along the magnetic lines, the Ampere force is", "Եթե լարը մագնիսական գծերի երկայնքով է, Ամպերի ուժը", "Если провод лежит вдоль магнитных линий, сила Ампера"), [
          t("greatest", "ամենամեծն է", "наибольшая"),
          t("zero", "զրո է", "равна нулю"),
          t("half of the greatest", "ամենամեծի կեսն է", "равна половине наибольшей"),
        ], 1),
        q(t("An electromagnet is preferred to a permanent magnet in a crane because", "Կռունկում էլեկտրամագնիսը նախընտրելի է մշտական մագնիսից, որովհետև", "В кране электромагнит предпочитают постоянному магниту потому, что"), [
          t("it is lighter", "ավելի թեթև է", "он легче"),
          t("it needs no current", "հոսանք պետք չէ", "ему не нужен ток"),
          t("its field can be switched off", "նրա դաշտը կարելի է անջատել", "его поле можно выключить"),
        ], 2),
      ],
    ),
    lesson(
      "electromagnetic-induction",
      ["Electromagnetic induction; Lenz's rule", "Էլեկտրամագնիսական ինդուկցիա, Լենցի կանոն", "Электромагнитная индукция; правило Ленца"],
      {
        en: ["Describe Faraday's experiments and state the condition for an induced current", "Say what the magnetic flux is and when it changes", "Apply Lenz's rule to find the direction of the induced current"],
        hy: ["Նկարագրել Ֆարադեյի փորձերը և ձևակերպել ինդուկցիոն հոսանքի պայմանը", "Ասել, թե ինչ է մագնիսական հոսքը և երբ է այն փոխվում", "Կիրառել Լենցի կանոնն ինդուկցիոն հոսանքի ուղղությունը գտնելու համար"],
        ru: ["Описывать опыты Фарадея и формулировать условие индукционного тока", "Говорить, что такое магнитный поток и когда он меняется", "Применять правило Ленца для нахождения направления индукционного тока"],
      },
      {
        en: `## Faraday's discovery

A current makes a magnetic field. Michael Faraday spent ten years asking the reverse question and in 1831 found the answer.

| What he did | What happened |
|---|---|
| pushed a magnet into a coil | the galvanometer needle moved |
| held the magnet still inside the coil | no current at all |
| pulled the magnet out | the needle moved the other way |
| moved the magnet faster | a larger current |

> **Electromagnetic induction** is the appearance of a current in a closed circuit when the magnetic field through it changes. A steady field, however strong, gives no current.

## The magnetic flux

The quantity that has to change is the **magnetic flux** through the circuit, which depends on three things: the induction $B$, the area $S$ of the circuit, and the angle at which the lines cross it. Roughly, the flux counts how many lines pass through the loop.

So an induced current appears when we

- move a magnet or a coil relative to the other;
- switch a neighbouring current on or off, or change it;
- change the area or turn the loop in the field.

The greater the rate at which the flux changes, the greater the induced current. A coil of many turns gives a larger current than a single loop, because every turn adds its own contribution.

**Example 1.** A coil connected to a galvanometer gives a current when a magnet is pushed in, when it is pulled out, and even when the coil itself is moved while the magnet stands still: only the relative motion matters.

**Example 2.** Two coils lie side by side with no connection. Closing the switch of the first gives a brief current in the second, and so does opening it, while a steady current gives nothing. This is how a transformer works.

## Lenz's rule

> The induced current always flows in the direction in which its own magnetic field opposes the change of the flux that caused it.

In other words, the circuit resists the change: a magnet pushed towards a coil is repelled by the induced current, and a magnet pulled away is attracted. The rule is the conservation of energy in disguise. If the induced current helped the motion instead, a magnet once nudged would speed up by itself and energy would come out of nothing.

**Example 3.** A north pole approaching a ring makes a current whose field faces it with a north pole, and the ring is pushed away. A light aluminium ring on a table jumps when a coil beneath it is switched on.

**Example 4.** A magnet dropped down a copper pipe falls far more slowly than through a plastic one. The induced currents in the copper oppose the motion all the way down, and the energy goes into heating the pipe.

**Example 5.** Turning a bicycle dynamo is hard work exactly when the lamp is connected. Without the lamp the circuit is open, no current flows, and the wheel turns easily.

**Example 6.** A metal detector sends a changing field into the ground and listens for the induced currents in buried metal, which make their own field in reply.

### Exercises

1. What is electromagnetic induction?
2. Why does a magnet standing still inside a coil give no current?
3. On what does the magnetic flux through a loop depend?
4. Name three ways of getting an induced current.
5. State Lenz's rule.
6. Why is a magnet approaching a ring pushed away by the induced current?
7. Why does a magnet fall slowly through a copper pipe?
8. Why is a bicycle dynamo harder to turn when its lamp is on?

### Answers

1. The appearance of a current in a closed circuit when the magnetic flux through it changes.
2. The flux is not changing.
3. On the induction, the area and the angle at which the lines cross the loop.
4. Moving a magnet or the coil, switching a neighbouring current, turning or resizing the loop.
5. The induced current's own field opposes the change that caused it.
6. Because its field meets the magnet with a like pole, as Lenz's rule requires.
7. The induced currents in the copper oppose the motion and turn the energy into heat.
8. The circuit is closed, so an induced current flows and opposes the turning.`,
        hy: `## Ֆարադեյի հայտնագործությունը

Հոսանքը ստեղծում է մագնիսական դաշտ։ Մայքլ Ֆարադեյը տասը տարի տվեց հակառակ հարցը և 1831 թվականին գտավ պատասխանը։

| Ինչ արեց | Ինչ կատարվեց |
|---|---|
| մագնիսը մտցրեց կոճի մեջ | գալվանոմետրի սլաքը շարժվեց |
| մագնիսն անշարժ պահեց կոճի մեջ | հոսանք ընդհանրապես չկար |
| մագնիսը դուրս հանեց | սլաքը շարժվեց հակառակ կողմ |
| մագնիսը շարժեց ավելի արագ | ավելի մեծ հոսանք |

> **Էլեկտրամագնիսական ինդուկցիա** է հոսանքի հայտնվելը փակ շղթայում, երբ նրա միջով մագնիսական դաշտը փոխվում է։ Հաստատուն դաշտը, որքան էլ ուժեղ, հոսանք չի տալիս։

## Մագնիսական հոսքը

Այն մեծությունը, որը պետք է փոխվի, շղթայի միջով **մագնիսական հոսքն** է, որը կախված է երեք բանից՝ ինդուկցիայից $B$, շղթայի մակերեսից $S$ և այն անկյունից, որով գծերը հատում են նրան։ Կոպիտ ասած՝ հոսքը հաշվում է, թե քանի գիծ է անցնում կոնտուրի միջով։

Ուրեմն ինդուկցիոն հոսանք հայտնվում է, երբ մենք

- մագնիսը կամ կոճը շարժում ենք մեկը մյուսի նկատմամբ,
- միացնում կամ անջատում ենք հարևան հոսանքը կամ փոխում ենք նրան,
- փոխում ենք մակերեսը կամ պտտում ենք կոնտուրը դաշտում։

Որքան մեծ է հոսքի փոփոխության արագությունը, այնքան մեծ է ինդուկցիոն հոսանքը։ Շատ փաթույթ ունեցող կոճը տալիս է ավելի մեծ հոսանք, քան մեկ կոնտուրը, որովհետև ամեն փաթույթ ավելացնում է իր բաժինը։

**Օրինակ 1։** Գալվանոմետրին միացված կոճը հոսանք է տալիս, երբ մագնիսը մտցնում են, երբ դուրս հանում են, և նույնիսկ երբ կոճն իրեն շարժում են, իսկ մագնիսը կանգնած է. կարևոր է միայն հարաբերական շարժումը։

**Օրինակ 2։** Երկու կոճ դրված են կողք կողքի առանց կապի։ Առաջինի բանալին փակելն երկրորդում տալիս է կարճ հոսանք, և նույնն անում է բացելը, մինչդեռ հաստատուն հոսանքն ոչինչ չի տալիս։ Ահա այսպես է աշխատում տրանսֆորմատորը։

## Լենցի կանոնը

> Ինդուկցիոն հոսանքը միշտ հոսում է այն ուղղությամբ, որով նրա սեփական մագնիսական դաշտը հակադրվում է իրեն առաջացրած հոսքի փոփոխությանը։

Այլ կերպ ասած՝ շղթան դիմադրում է փոփոխությանը. կոճին մոտեցվող մագնիսն ինդուկցիոն հոսանքով հրվում է, իսկ հեռացվող մագնիսը՝ ձգվում։ Կանոնը ծպտված էներգիայի պահպանումն է։ Եթե ինդուկցիոն հոսանքն ընդհակառակն օգներ շարժմանը, մեկ անգամ հրված մագնիսն ինքնուրույն կարագանար, և էներգիան կգար ոչնչից։

**Օրինակ 3։** Օղակին մոտենող հյուսիսային բևեռը ստեղծում է հոսանք, որի դաշտը նրան դիմավորում է հյուսիսային բևեռով, և օղակը հրվում է։ Սեղանի վրա թեթև ալյումինե օղակը ցատկում է, երբ նրա տակի կոճը միացվում է։

**Օրինակ 4։** Պղնձե խողովակով ցած գցված մագնիսն ընկնում է շատ ավելի դանդաղ, քան պլաստիկե խողովակով։ Պղնձի ինդուկցիոն հոսանքներն ամբողջ ճանապարհին հակադրվում են շարժմանը, և էներգիան գնում է խողովակը տաքացնելուն։

**Օրինակ 5։** Հեծանիվի դինամոն պտտելը ծանր աշխատանք է ճիշտ այն ժամանակ, երբ լապտերը միացված է։ Առանց լապտերի շղթան բաց է, հոսանք չի հոսում, և անիվը հեշտ է պտտվում։

**Օրինակ 6։** Մետաղի հայտնիչը գետնի մեջ ուղարկում է փոփոխվող դաշտ և լսում թաղված մետաղի ինդուկցիոն հոսանքները, որոնք ի պատասխան ստեղծում են իրենց դաշտը։

### Վարժություններ

1. Ի՞նչ է էլեկտրամագնիսական ինդուկցիան։
2. Ինչո՞ւ կոճի մեջ անշարժ կանգնած մագնիսը հոսանք չի տալիս։
3. Կոնտուրի միջով մագնիսական հոսքն ինչի՞ց է կախված։
4. Նշեք ինդուկցիոն հոսանք ստանալու երեք ձև։
5. Ձևակերպեք Լենցի կանոնը։
6. Ինչո՞ւ օղակին մոտենող մագնիսն ինդուկցիոն հոսանքով հրվում է։
7. Ինչո՞ւ մագնիսը պղնձե խողովակով ընկնում է դանդաղ։
8. Ինչո՞ւ հեծանիվի դինամոն ավելի դժվար է պտտվում, երբ նրա լապտերը միացված է։

### Պատասխաններ

1. Հոսանքի հայտնվելը փակ շղթայում, երբ նրա միջով մագնիսական հոսքը փոխվում է։
2. Հոսքը չի փոխվում։
3. Ինդուկցիայից, մակերեսից և այն անկյունից, որով գծերը հատում են կոնտուրը։
4. Մագնիսի կամ կոճի շարժումը, հարևան հոսանքի միացումը, կոնտուրի պտտումը կամ մակերեսի փոփոխումը։
5. Ինդուկցիոն հոսանքի սեփական դաշտը հակադրվում է իրեն առաջացրած փոփոխությանը։
6. Որովհետև նրա դաշտը մագնիսին դիմավորում է համանուն բևեռով, ինչպես պահանջում է Լենցի կանոնը։
7. Պղնձի ինդուկցիոն հոսանքները հակադրվում են շարժմանը և էներգիան դարձնում ջերմություն։
8. Շղթան փակ է, ուստի հոսում է ինդուկցիոն հոսանք և հակադրվում պտտմանը։`,
        ru: `## Открытие Фарадея

Ток создаёт магнитное поле. Майкл Фарадей десять лет задавал обратный вопрос и в 1831 году нашёл ответ.

| Что он делал | Что получалось |
|---|---|
| вдвигал магнит в катушку | стрелка гальванометра отклонялась |
| держал магнит неподвижно внутри катушки | тока не было вовсе |
| выдвигал магнит | стрелка отклонялась в другую сторону |
| двигал магнит быстрее | ток был больше |

> **Электромагнитная индукция** — это возникновение тока в замкнутой цепи, когда магнитное поле через неё меняется. Постоянное поле, каким бы сильным оно ни было, тока не даёт.

## Магнитный поток

Величина, которая должна меняться, — это **магнитный поток** через цепь, зависящий от трёх вещей: от индукции $B$, от площади $S$ цепи и от угла, под которым линии её пересекают. Грубо говоря, поток считает, сколько линий проходит через контур.

Значит, индукционный ток появляется, когда мы

- двигаем магнит или катушку друг относительно друга;
- включаем или выключаем соседний ток либо меняем его;
- меняем площадь или поворачиваем контур в поле.

Чем быстрее меняется поток, тем больше индукционный ток. Катушка из многих витков даёт больший ток, чем один контур, потому что каждый виток добавляет свою долю.

**Пример 1.** Катушка, присоединённая к гальванометру, даёт ток, когда магнит вдвигают, когда его выдвигают и даже когда двигают саму катушку при неподвижном магните: важно только относительное движение.

**Пример 2.** Две катушки лежат рядом без соединения. Замыкание ключа первой даёт короткий ток во второй, и то же делает размыкание, а постоянный ток не даёт ничего. Так работает трансформатор.

## Правило Ленца

> Индукционный ток всегда течёт в таком направлении, что его собственное магнитное поле противодействует изменению потока, вызвавшему этот ток.

Иначе говоря, цепь сопротивляется изменению: магнит, приближаемый к катушке, индукционным током отталкивается, а удаляемый — притягивается. Это правило есть переодетый закон сохранения энергии. Если бы индукционный ток, наоборот, помогал движению, однажды подтолкнутый магнит разгонялся бы сам и энергия возникала бы из ничего.

**Пример 3.** Северный полюс, приближающийся к кольцу, создаёт ток, поле которого встречает его северным полюсом, и кольцо отталкивается. Лёгкое алюминиевое кольцо на столе подпрыгивает, когда включают катушку под ним.

**Пример 4.** Магнит, брошенный в медную трубу, падает намного медленнее, чем в пластиковой. Индукционные токи в меди всю дорогу противодействуют движению, а энергия уходит на нагрев трубы.

**Пример 5.** Крутить велосипедное динамо тяжело именно тогда, когда лампа подключена. Без лампы цепь разомкнута, ток не течёт, и колесо вращается легко.

**Пример 6.** Металлоискатель посылает в землю меняющееся поле и слушает индукционные токи в закопанном металле, которые в ответ создают своё поле.

### Упражнения

1. Что такое электромагнитная индукция?
2. Почему неподвижный магнит внутри катушки не даёт тока?
3. От чего зависит магнитный поток через контур?
4. Назовите три способа получить индукционный ток.
5. Сформулируйте правило Ленца.
6. Почему приближаемый к кольцу магнит отталкивается индукционным током?
7. Почему магнит медленно падает в медной трубе?
8. Почему велосипедное динамо труднее крутить при включённой лампе?

### Ответы

1. Возникновение тока в замкнутой цепи при изменении магнитного потока через неё.
2. Поток не меняется.
3. От индукции, площади и угла, под которым линии пересекают контур.
4. Движение магнита или катушки, включение соседнего тока, поворот или изменение площади контура.
5. Собственное поле индукционного тока противодействует вызвавшему его изменению.
6. Потому что его поле встречает магнит одноимённым полюсом, как требует правило Ленца.
7. Индукционные токи в меди противодействуют движению и превращают энергию в тепло.
8. Цепь замкнута, поэтому течёт индукционный ток и противодействует вращению.`,
      },
      [
        q(t("An induced current appears in a closed circuit when", "Փակ շղթայում ինդուկցիոն հոսանք հայտնվում է, երբ", "Индукционный ток возникает в замкнутой цепи, когда"), [
          t("the magnetic flux through it changes", "նրա միջով մագնիսական հոսքը փոխվում է", "магнитный поток через неё меняется"),
          t("a strong steady field surrounds it", "նրան շրջապատում է ուժեղ հաստատուն դաշտ", "её окружает сильное постоянное поле"),
          t("it is warmed up", "նրան տաքացնում են", "её нагревают"),
        ], 0),
        q(t("A magnet held still inside a coil gives", "Կոճի մեջ անշարժ պահված մագնիսը տալիս է", "Неподвижный магнит внутри катушки даёт"), [
          t("a large current", "մեծ հոսանք", "большой ток"),
          t("no current", "ոչ մի հոսանք", "никакого тока"),
          t("a current that grows", "աճող հոսանք", "растущий ток"),
        ], 1),
        q(t("Electromagnetic induction was discovered by", "Էլեկտրամագնիսական ինդուկցիան հայտնագործել է", "Электромагнитную индукцию открыл"), [
          t("Ampere", "Ամպերը", "Ампер"),
          t("Lenz", "Լենցը", "Ленц"),
          t("Faraday", "Ֆարադեյը", "Фарадей"),
        ], 2),
        q(t("Lenz's rule says that the induced current's own field", "Լենցի կանոնն ասում է, որ ինդուկցիոն հոսանքի սեփական դաշտը", "Правило Ленца говорит, что собственное поле индукционного тока"), [
          t("opposes the change that caused it", "հակադրվում է իրեն առաջացրած փոփոխությանը", "противодействует вызвавшему его изменению"),
          t("helps the change that caused it", "օգնում է իրեն առաջացրած փոփոխությանը", "помогает вызвавшему его изменению"),
          t("is always zero", "միշտ զրո է", "всегда равно нулю"),
        ], 0),
        q(t("A magnet dropped down a copper pipe falls", "Պղնձե խողովակով ցած գցված մագնիսն ընկնում է", "Магнит, брошенный в медную трубу, падает"), [
          t("faster than in air", "օդից ավելի արագ", "быстрее, чем в воздухе"),
          t("much more slowly", "շատ ավելի դանդաղ", "намного медленнее"),
          t("at exactly the same speed", "ճիշտ նույն արագությամբ", "точно с той же скоростью"),
        ], 1),
        q(t("Lenz's rule is in effect a form of", "Լենցի կանոնն ըստ էության ... ձև է", "Правило Ленца по сути есть форма"), [
          t("the law of inertia", "իներցիայի օրենքի", "закона инерции"),
          t("Ohm's law", "Օհմի օրենքի", "закона Ома"),
          t("the conservation of energy", "էներգիայի պահպանման օրենքի", "закона сохранения энергии"),
        ], 2),
      ],
    ),
    lesson(
      "alternating-current",
      ["Alternating current; the generator; the transformer", "Փոփոխական հոսանք, գեներատոր, տրանսֆորմատոր", "Переменный ток; генератор; трансформатор"],
      {
        en: ["Describe how a generator produces an alternating current", "Name the frequency and the voltage of the mains", "Use the transformer ratio and say why power lines use high voltage"],
        hy: ["Նկարագրել, թե ինչպես է գեներատորը ստեղծում փոփոխական հոսանք", "Նշել ցանցի հաճախությունը և լարումը", "Կիրառել տրանսֆորմատորի հարաբերությունը և ասել, թե ինչու են էլեկտրահաղորդման գծերը բարձր լարում օգտագործում"],
        ru: ["Описывать, как генератор создаёт переменный ток", "Называть частоту и напряжение сети", "Применять коэффициент трансформации и объяснять, почему в линиях используют высокое напряжение"],
      },
      {
        en: `## The generator

Turn a loop of wire in a magnetic field and the flux through it changes all the time, so an induced current flows. Twice in every turn the loop lies along the field and the current is zero, and twice it crosses the field and the current is greatest. The current therefore changes both its size and its direction smoothly.

> An **alternating current** is a current that changes its direction periodically. A machine that produces it by turning a coil in a magnetic field is a **generator**.

In a real power station the coil is held still and the magnet turns, which saves sliding contacts, and the magnet is driven by a water turbine, a steam turbine or a wind rotor. The electricity is not made out of nothing: the generator turns mechanical energy into electrical energy, which is why a heavier load makes the turbine harder to turn.

| Mains | Value |
|---|---|
| frequency in Armenia and Russia | $50$ Hz |
| one period | $0{.}02$ s |
| household voltage | $220$ V |
| changes of direction per second | $100$ |

**Example 1.** At $50$ Hz the current reverses a hundred times a second, far too fast for the eye, though a lamp does flicker slightly.

**Example 2.** The current in a lamp has an amplitude larger than the $220$ V figure, which is an average used so that the heating effect comes out right.

## The transformer

A steady current gives no induction, but an alternating one changes all the time, so it can induce a current in a second coil without any wire between them. That is a **transformer**: two coils on one iron core.

> $$\\frac{U_1}{U_2} = \\frac{N_1}{N_2},$$
> where $N_1$ and $N_2$ are the numbers of turns in the primary and the secondary coils.

A coil with more turns gives the higher voltage. The transformer changes the voltage, not the energy: it raises the voltage and lowers the current in the same proportion, minus small losses in the iron and the wire.

**Example 3.** A transformer has $1000$ turns in the primary and $50$ in the secondary, with $220$ V in. The output is $220 \\cdot 50/1000 = 11$ V, suitable for a doorbell.

**Example 4.** To get $22000$ V from $220$ V the secondary must have a hundred times more turns than the primary.

## Why power lines use high voltage

A line heats up according to $I^2R$, so the loss grows as the square of the current. Sending the same power at a hundred times the voltage needs a hundredth of the current and loses ten thousand times less heat.

**Example 5.** A station raises its voltage to hundreds of kilovolts for the long line, and transformers at the other end step it down to $220$ V for houses. Power lines are therefore dangerous at a distance, and nobody should climb a pylon or fly a kite near one.

**Example 6.** The small transformer in a phone charger does the same job in reverse order of size: it steps $220$ V down to about $5$ V, and it is warm because some energy is lost in the iron.

### Exercises

1. What is an alternating current?
2. How does a generator produce it, and what energy does it convert?
3. What is the frequency and the voltage of the mains where you live?
4. How many times a second does a $50$ Hz current reverse?
5. Write the transformer formula.
6. A transformer has $400$ turns in the primary and $20$ in the secondary, with $220$ V in. Find the output.
7. How many turns must the secondary have to raise $220$ V to $4400$ V with a primary of $500$ turns?
8. Why is electricity sent along lines at a high voltage?

### Answers

1. A current that changes its direction periodically.
2. By turning a coil in a magnetic field, or a magnet near a coil; it converts mechanical energy into electrical energy.
3. $50$ Hz and $220$ V.
4. A hundred times.
5. $U_1/U_2 = N_1/N_2$.
6. $U_2 = 220 \\cdot 20/400 = 11$ V.
7. $N_2 = 500 \\cdot 4400/220 = 10000$ turns.
8. A higher voltage means a smaller current, and the heat loss falls as the square of the current.`,
        hy: `## Գեներատորը

Պտտեք լարի կոնտուրը մագնիսական դաշտում, և նրա միջով հոսքն անընդհատ կփոխվի, ուստի կհոսի ինդուկցիոն հոսանք։ Ամեն պտույտի մեջ երկու անգամ կոնտուրը գտնվում է դաշտի երկայնքով, և հոսանքը զրո է, և երկու անգամ հատում է դաշտը, և հոսանքն ամենամեծն է։ Ուրեմն հոսանքը հարթ փոխում է և իր մեծությունը, և ուղղությունը։

> **Փոփոխական հոսանք** է այն հոսանքը, որը պարբերաբար փոխում է իր ուղղությունը։ Այն մեքենան, որը ստեղծում է նրան՝ մագնիսական դաշտում կոճ պտտելով, **գեներատոր** է։

Իրական էլեկտրակայանում կոճը պահվում է անշարժ, իսկ մագնիսը պտտվում է, ինչը խնայում է սահող հպակները, և մագնիսը շարժվում է ջրային տուրբինով, գոլորշու տուրբինով կամ հողմային ռոտորով։ Էլեկտրականությունն ոչնչից չի ստեղծվում. գեներատորը մեխանիկական էներգիան դարձնում է էլեկտրական, դրա համար ավելի մեծ բեռը տուրբինն ավելի դժվար է դարձնում պտտելու համար։

| Ցանց | Արժեք |
|---|---|
| հաճախությունը Հայաստանում և Ռուսաստանում | $50$ Հց |
| մեկ պարբերություն | $0{,}02$ վ |
| կենցաղային լարում | $220$ Վ |
| ուղղության փոփոխություններ վայրկյանում | $100$ |

**Օրինակ 1։** $50$ Հց-ում հոսանքը վայրկյանում հարյուր անգամ փոխում է ուղղությունը՝ աչքի համար շատ արագ, թեև լամպը մի քիչ թրթռում է։

**Օրինակ 2։** Լամպի հոսանքի ամպլիտուդն ավելի մեծ է, քան $220$ Վ թիվը, որը միջին արժեք է՝ վերցված այնպես, որ ջերմային ազդեցությունը ճիշտ ստացվի։

## Տրանսֆորմատորը

Հաստատուն հոսանքն ինդուկցիա չի տալիս, բայց փոփոխականն անընդհատ փոխվում է, ուստի կարող է հոսանք մակածել երկրորդ կոճում՝ առանց նրանց միջև ոչ մի լարի։ Ահա դա **տրանսֆորմատոր** է՝ երկու կոճ մեկ երկաթե միջուկի վրա։

> $$\\frac{U_1}{U_2} = \\frac{N_1}{N_2},$$
> որտեղ $N_1$-ը և $N_2$-ը առաջնային և երկրորդային կոճերի փաթույթների թվերն են։

Ավելի շատ փաթույթ ունեցող կոճը տալիս է ավելի բարձր լարում։ Տրանսֆորմատորը փոխում է լարումը, ոչ թե էներգիան. այն բարձրացնում է լարումը և նույն հարաբերությամբ նվազեցնում հոսանքը՝ հանած երկաթի և լարի փոքր կորուստները։

**Օրինակ 3։** Տրանսֆորմատորի առաջնայինում $1000$ փաթույթ է, երկրորդայինում՝ $50$, մուտքում $220$ Վ։ Ելքը $220 \\cdot 50/1000 = 11$ Վ է՝ հարմար դռան զանգի համար։

**Օրինակ 4։** $220$ Վ-ից $22000$ Վ ստանալու համար երկրորդայինը պետք է ունենա հարյուր անգամ ավելի շատ փաթույթ, քան առաջնայինը։

## Ինչու են էլեկտրահաղորդման գծերը բարձր լարում օգտագործում

Գիծը տաքանում է $I^2R$-ի համաձայն, ուստի կորուստն աճում է հոսանքի քառակուսու պես։ Նույն հզորությունը հարյուր անգամ ավելի բարձր լարումով ուղարկելու համար պետք է հոսանքի հարյուրերորդ մասը, և ջերմության կորուստը տասը հազար անգամ փոքր է։

**Օրինակ 5։** Կայանն երկար գծի համար լարումը բարձրացնում է հարյուրավոր կիլովոլտ, իսկ մյուս ծայրի տրանսֆորմատորները նրան իջեցնում են $220$ Վ՝ տների համար։ Ուստի էլեկտրահաղորդման գծերը վտանգավոր են նույնիսկ հեռվից, և ոչ ոք չպետք է բարձրանա հենասյուն կամ նրա մոտ օդապարիկ թռցնի։

**Օրինակ 6։** Հեռախոսի լիցքավորիչի փոքր տրանսֆորմատորը նույն գործն անում է չափսերի հակառակ կարգով. այն $220$ Վ իջեցնում է մոտ $5$ Վ, և տաք է, որովհետև որոշ էներգիա կորչում է երկաթում։

### Վարժություններ

1. Ի՞նչ է փոփոխական հոսանքը։
2. Ինչպե՞ս է գեներատորը ստեղծում նրան, և ի՞նչ էներգիա է այն փոխակերպում։
3. Ի՞նչ հաճախություն և լարում ունի ցանցը ձեր բնակավայրում։
4. Վայրկյանում քանի՞ անգամ է $50$ Հց հոսանքը փոխում ուղղությունը։
5. Գրեք տրանսֆորմատորի բանաձևը։
6. Տրանսֆորմատորի առաջնայինում $400$ փաթույթ է, երկրորդայինում՝ $20$, մուտքում $220$ Վ։ Գտեք ելքը։
7. Քանի՞ փաթույթ պետք է ունենա երկրորդայինը, որ $220$ Վ-ը բարձրացվի $4400$ Վ՝ $500$ փաթույթով առաջնայինի դեպքում։
8. Ինչո՞ւ էլեկտրականությունը գծերով ուղարկվում է բարձր լարումով։

### Պատասխաններ

1. Այն հոսանքը, որը պարբերաբար փոխում է ուղղությունը։
2. Մագնիսական դաշտում կոճ կամ կոճի մոտ մագնիս պտտելով. այն մեխանիկական էներգիան դարձնում է էլեկտրական։
3. $50$ Հց և $220$ Վ։
4. Հարյուր անգամ։
5. $U_1/U_2 = N_1/N_2$։
6. $U_2 = 220 \\cdot 20/400 = 11$ Վ։
7. $N_2 = 500 \\cdot 4400/220 = 10000$ փաթույթ։
8. Ավելի բարձր լարումը նշանակում է ավելի փոքր հոսանք, իսկ ջերմային կորուստը նվազում է հոսանքի քառակուսու պես։`,
        ru: `## Генератор

Поверните контур из провода в магнитном поле, и поток через него будет всё время меняться, поэтому потечёт индукционный ток. Дважды за каждый оборот контур лежит вдоль поля и ток равен нулю, и дважды он пересекает поле и ток наибольший. Значит, ток плавно меняет и величину, и направление.

> **Переменным током** называют ток, периодически меняющий своё направление. Машина, которая создаёт его вращением катушки в магнитном поле, — это **генератор**.

На настоящей электростанции катушку держат неподвижно, а вращают магнит, что избавляет от скользящих контактов, и магнит вращает водяная турбина, паровая турбина или ветровой ротор. Электричество не возникает из ничего: генератор превращает механическую энергию в электрическую, поэтому при большей нагрузке турбину труднее вращать.

| Сеть | Значение |
|---|---|
| частота в Армении и России | $50$ Гц |
| один период | $0{,}02$ с |
| бытовое напряжение | $220$ В |
| смен направления в секунду | $100$ |

**Пример 1.** При $50$ Гц ток меняет направление сто раз в секунду — слишком быстро для глаза, хотя лампа слегка мерцает.

**Пример 2.** Амплитуда тока в лампе больше числа $220$ В, которое является средним значением, выбранным так, чтобы верно получался тепловой эффект.

## Трансформатор

Постоянный ток индукции не даёт, а переменный меняется всё время, поэтому он может навести ток во второй катушке без всякого провода между ними. Это и есть **трансформатор**: две катушки на одном железном сердечнике.

> $$\\frac{U_1}{U_2} = \\frac{N_1}{N_2},$$
> где $N_1$ и $N_2$ — числа витков первичной и вторичной обмоток.

Обмотка с большим числом витков даёт большее напряжение. Трансформатор меняет напряжение, а не энергию: он повышает напряжение и во столько же раз понижает ток, если не считать небольших потерь в железе и проводе.

**Пример 3.** У трансформатора $1000$ витков в первичной обмотке и $50$ во вторичной, на входе $220$ В. На выходе $220 \\cdot 50 : 1000 = 11$ В, что подходит для дверного звонка.

**Пример 4.** Чтобы получить из $220$ В напряжение $22000$ В, во вторичной обмотке должно быть в сто раз больше витков, чем в первичной.

## Почему в линиях используют высокое напряжение

Линия нагревается по закону $I^2R$, поэтому потери растут как квадрат тока. Чтобы передать ту же мощность при напряжении в сто раз выше, нужна сотая часть тока, и тепловые потери становятся в десять тысяч раз меньше.

**Пример 5.** Станция повышает напряжение до сотен киловольт для длинной линии, а трансформаторы на другом конце понижают его до $220$ В для домов. Поэтому линии электропередачи опасны даже на расстоянии, и никому не следует забираться на опору или запускать рядом воздушного змея.

**Пример 6.** Маленький трансформатор в зарядном устройстве телефона делает ту же работу в обратном порядке величин: он понижает $220$ В примерно до $5$ В и греется, потому что часть энергии теряется в железе.

### Упражнения

1. Что такое переменный ток?
2. Как генератор его создаёт и какую энергию он преобразует?
3. Какая частота и какое напряжение у сети там, где вы живёте?
4. Сколько раз в секунду меняет направление ток частотой $50$ Гц?
5. Запишите формулу трансформатора.
6. У трансформатора $400$ витков в первичной обмотке и $20$ во вторичной, на входе $220$ В. Найдите выходное напряжение.
7. Сколько витков должно быть во вторичной обмотке, чтобы поднять $220$ В до $4400$ В при первичной обмотке в $500$ витков?
8. Почему электричество передают по линиям при высоком напряжении?

### Ответы

1. Ток, периодически меняющий направление.
2. Вращением катушки в магнитном поле или магнита возле катушки; он превращает механическую энергию в электрическую.
3. $50$ Гц и $220$ В.
4. Сто раз.
5. $U_1 : U_2 = N_1 : N_2$.
6. $U_2 = 220 \\cdot 20 : 400 = 11$ В.
7. $N_2 = 500 \\cdot 4400 : 220 = 10000$ витков.
8. Более высокое напряжение означает меньший ток, а тепловые потери убывают как квадрат тока.`,
      },
      [
        q(t("An alternating current is one that", "Փոփոխական հոսանքն այն հոսանքն է, որը", "Переменный ток — это ток, который"), [
          t("changes its direction periodically", "պարբերաբար փոխում է ուղղությունը", "периодически меняет направление"),
          t("flows only one way", "հոսում է միայն մի ուղղությամբ", "течёт только в одну сторону"),
          t("never changes its size", "երբեք չի փոխում իր մեծությունը", "никогда не меняет величину"),
        ], 0),
        q(t("The frequency of the mains in Armenia and Russia is", "Հայաստանում և Ռուսաստանում ցանցի հաճախությունը", "Частота сети в Армении и России равна"), [
          t("100 Hz", "100 Հց", "100 Гц"),
          t("50 Hz", "50 Հց", "50 Гц"),
          t("220 Hz", "220 Հց", "220 Гц"),
        ], 1),
        q(t("A generator turns", "Գեներատորը փոխակերպում է", "Генератор превращает"), [
          t("electrical energy into heat", "էլեկտրական էներգիան ջերմության", "электрическую энергию в тепло"),
          t("heat into mechanical energy", "ջերմությունը մեխանիկական էներգիայի", "тепло в механическую энергию"),
          t("mechanical energy into electrical energy", "մեխանիկական էներգիան էլեկտրականի", "механическую энергию в электрическую"),
        ], 2),
        q(t("A transformer works only with", "Տրանսֆորմատորն աշխատում է միայն", "Трансформатор работает только с"), [
          t("alternating current", "փոփոխական հոսանքով", "переменным током"),
          t("direct current", "հաստատուն հոսանքով", "постоянным током"),
          t("no current at all", "ընդհանրապես առանց հոսանքի", "без тока вовсе"),
        ], 0),
        q(t("If the secondary coil has fewer turns than the primary, the voltage is", "Եթե երկրորդային կոճն ունի ավելի քիչ փաթույթ, քան առաջնայինը, լարումը", "Если во вторичной обмотке меньше витков, чем в первичной, напряжение"), [
          t("raised", "բարձրանում է", "повышается"),
          t("lowered", "իջնում է", "понижается"),
          t("unchanged", "չի փոխվում", "не меняется"),
        ], 1),
        q(t("A high voltage is used in power lines because it", "Էլեկտրահաղորդման գծերում բարձր լարում օգտագործվում է, որովհետև այն", "В линиях электропередачи используют высокое напряжение потому, что оно"), [
          t("makes the wires lighter", "լարերն ավելի թեթև է դարձնում", "делает провода легче"),
          t("raises the power sent", "ավելացնում է ուղարկվող հզորությունը", "увеличивает передаваемую мощность"),
          t("cuts the heat loss in the wires", "նվազեցնում է լարերի ջերմային կորուստը", "снижает тепловые потери в проводах"),
        ], 2),
      ],
    ),
    lesson(
      "em-waves",
      ["Electromagnetic waves; the spectrum", "Էլեկտրամագնիսական ալիքներ, սպեկտր", "Электромагнитные волны; шкала электромагнитных волн"],
      {
        en: ["Say what an electromagnetic wave is and how fast it travels", "Name the parts of the electromagnetic spectrum in order", "Explain how radio communication works"],
        hy: ["Ասել, թե ինչ է էլեկտրամագնիսական ալիքը և ինչ արագությամբ է տարածվում", "Նշել էլեկտրամագնիսական սպեկտրի մասերը հերթականությամբ", "Բացատրել, թե ինչպես է աշխատում ռադիոկապը"],
        ru: ["Говорить, что такое электромагнитная волна и с какой скоростью она распространяется", "Называть по порядку участки электромагнитного спектра", "Объяснять, как работает радиосвязь"],
      },
      {
        en: `## The electromagnetic field

A changing magnetic field creates an electric field, as Faraday showed. Maxwell added the reverse: a changing electric field creates a magnetic one. The two then keep creating each other and travel away together.

> An **electromagnetic wave** is a changing electromagnetic field spreading through space. Unlike a sound wave it needs no medium, and in a vacuum it travels at
> $$c = 3 \\cdot 10^8 \\text{ m/s}.$$

That is the greatest speed in nature, and the formula $\\lambda = c/\\nu$ connects the wavelength with the frequency as for any wave. A wave is radiated whenever charges are accelerated, which in practice means by an aerial carrying an alternating current. Maxwell predicted these waves in 1865, and Hertz produced and detected them in his laboratory about twenty years later.

**Example 1.** A radio wave of frequency $100$ MHz has $\\lambda = 3 \\cdot 10^8/10^8 = 3$ m, which is why an FM aerial is about a metre long.
**Example 2.** Light from the Sun takes $8$ minutes to reach us, since $1{.}5 \\cdot 10^{11}/3 \\cdot 10^8 = 500$ s.
**Example 3.** A radar pulse returns from an aeroplane $60$ km away after $4 \\cdot 10^{-4}$ s, which the set measures to find the distance.

## The spectrum

All the waves below are the same thing and differ only in frequency, yet that difference changes everything about how they behave.

| Waves | Wavelength | Where we meet them |
|---|---|---|
| radio waves | from kilometres to a metre | radio, television, mobile telephones |
| microwaves | centimetres to millimetres | radar, satellite links, microwave ovens |
| infrared | from millimetres to $0{.}8$ µm | warmth from a stove, night cameras, remote controls |
| visible light | $0{.}8$ µm to $0{.}4$ µm | everything we see |
| ultraviolet | $0{.}4$ µm to a few nm | sunburn, sterilising lamps |
| X-rays | nanometres | medical pictures, flaw detection |
| gamma rays | shorter still | from nuclei, used in medicine |

Visible light is a narrow strip in the middle. Going up the table the waves pass through walls more easily; going down they carry more energy in each portion, and from ultraviolet onwards they become dangerous to living tissue.

## Radio communication

A speaking voice has frequencies of a few kilohertz, far too low to radiate well. So a transmitter makes a steady high-frequency wave, the **carrier**, and the sound is used to vary it, which is called modulation. The aerial radiates the result.

A receiver does the reverse. Its circuit is tuned by resonance to one carrier frequency, so one station is picked out of many; then the sound is separated from the carrier and sent to the loudspeaker.

**Example 4.** A microwave oven uses waves of about $12$ cm, which water molecules absorb strongly, so the food heats from within while the air stays cool.
**Example 5.** A mobile telephone is both a small transmitter and a receiver, which is why it needs a mast nearby and runs its battery down where the signal is weak.
**Example 6.** A thunderstorm radiates radio waves over a wide band, which is heard as crackling on an AM receiver.

### Exercises

1. What is an electromagnetic wave, and who predicted it?
2. How fast do electromagnetic waves travel in a vacuum?
3. What radiates an electromagnetic wave?
4. Find the wavelength of a wave of frequency $150$ MHz.
5. List the spectrum from radio waves to gamma rays.
6. Which of the waves in the spectrum can our eyes see?
7. What is a carrier wave, and what is modulation?
8. How does a receiver pick out one station?

### Answers

1. A changing electromagnetic field spreading through space; Maxwell predicted it and Hertz produced it.
2. At $3 \\cdot 10^8$ m/s.
3. Accelerated charges, in practice an aerial with an alternating current.
4. $\\lambda = 3 \\cdot 10^8/1{.}5 \\cdot 10^8 = 2$ m.
5. Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.
6. Only the narrow band of visible light.
7. A steady high-frequency wave; modulation is varying it with the sound signal.
8. By resonance: its circuit is tuned to that carrier's frequency.`,
        hy: `## Էլեկտրամագնիսական դաշտը

Փոփոխվող մագնիսական դաշտը ստեղծում է էլեկտրական դաշտ, ինչպես ցույց տվեց Ֆարադեյը։ Մաքսվելն ավելացրեց հակառակը՝ փոփոխվող էլեկտրական դաշտը ստեղծում է մագնիսական։ Այնուհետև երկուսը շարունակում են ստեղծել միմյանց և միասին հեռանում։

> **Էլեկտրամագնիսական ալիք** է տարածությունում տարածվող փոփոխվող էլեկտրամագնիսական դաշտը։ Ի տարբերություն ձայնային ալիքի՝ նրան միջավայր պետք չէ, և վակուումում այն տարածվում է
> $$c = 3 \\cdot 10^8 \\text{ մ/վ}$$
> արագությամբ։

Դա բնության ամենամեծ արագությունն է, և $\\lambda = c/\\nu$ բանաձևն ալիքի երկարությունը կապում է հաճախության հետ՝ ինչպես ցանկացած ալիքի համար։ Ալիք ճառագայթվում է ամեն անգամ, երբ լիցքերն արագացվում են, ինչը գործնականում նշանակում է փոփոխական հոսանք տեղափոխող ալեհավաք։ Մաքսվելն այս ալիքները կանխատեսեց 1865 թվականին, իսկ Հերցը մոտ քսան տարի անց ստեղծեց և հայտնաբերեց նրանք իր լաբորատորիայում։

**Օրինակ 1։** $100$ ՄՀց հաճախությամբ ռադիոալիքն ունի $\\lambda = 3 \\cdot 10^8/10^8 = 3$ մ, դրա համար FM ալեհավաքը մոտ մեկ մետր երկարություն ունի։
**Օրինակ 2։** Արեգակի լույսը մեզ հասնում է $8$ րոպեում, քանի որ $1{,}5 \\cdot 10^{11}/3 \\cdot 10^8 = 500$ վ։
**Օրինակ 3։** Ռադարի ազդակը $60$ կմ հեռու ինքնաթիռից վերադառնում է $4 \\cdot 10^{-4}$ վ հետո, ինչը սարքը չափում է հեռավորությունը գտնելու համար։

## Սպեկտրը

Ներքևի բոլոր ալիքները նույն բանն են և տարբերվում են միայն հաճախությամբ, բայց այդ տարբերությունն ամեն ինչ փոխում է նրանց վարքում։

| Ալիքներ | Ալիքի երկարություն | Որտեղ ենք հանդիպում |
|---|---|---|
| ռադիոալիքներ | կիլոմետրերից մինչև մեկ մետր | ռադիո, հեռուստատեսություն, բջջային հեռախոսներ |
| միկրոալիքներ | սանտիմետրերից մինչև միլիմետրեր | ռադար, արբանյակային կապ, միկրոալիքային վառարաններ |
| ինֆրակարմիր | միլիմետրերից մինչև $0{,}8$ մկմ | վառարանի ջերմությունը, գիշերային տեսախցիկներ, հեռակառավարիչներ |
| տեսանելի լույս | $0{,}8$ մկմ-ից $0{,}4$ մկմ | ամեն ինչ, որ տեսնում ենք |
| ուլտրամանուշակագույն | $0{,}4$ մկմ-ից մինչև մի քանի նմ | արևայրուք, ախտահանող լամպեր |
| ռենտգենյան ճառագայթներ | նանոմետրեր | բժշկական նկարներ, թերության հայտնաբերում |
| գամմա ճառագայթներ | ավելի կարճ | միջուկներից, օգտագործվում են բժշկության մեջ |

Տեսանելի լույսը մեջտեղում նեղ շերտ է։ Աղյուսակով վեր բարձրանալիս ալիքներն ավելի հեշտ են անցնում պատերով, ներքև իջնելիս ամեն բաժնում կրում են ավելի շատ էներգիա, և ուլտրամանուշակագույնից սկսած դառնում են վտանգավոր կենդանի հյուսվածքի համար։

## Ռադիոկապ

Խոսող ձայնն ունի մի քանի կիլոհերց հաճախություն՝ շատ ցածր լավ ճառագայթվելու համար։ Ուստի հաղորդիչը ստեղծում է հաստատուն բարձր հաճախության ալիք՝ **կրող ալիքը**, և ձայնն օգտագործվում է նրան փոփոխելու համար, ինչը կոչվում է մոդուլյացիա։ Ալեհավաքը ճառագայթում է արդյունքը։

Ընդունիչն անում է հակառակը։ Նրա շղթան ռեզոնանսով լարվում է մեկ կրող հաճախության, ուստի մեկ կայան ընտրվում է շատերից, հետո ձայնն առանձնացվում է կրող ալիքից և ուղարկվում բարձրախոս։

**Օրինակ 4։** Միկրոալիքային վառարանն օգտագործում է մոտ $12$ սմ ալիքներ, որոնք ջրի մոլեկուլներն ուժեղ կլանում են, ուստի սնունդը տաքանում է ներսից, մինչ օդը մնում է սառն։
**Օրինակ 5։** Բջջային հեռախոսը և փոքր հաղորդիչ է, և ընդունիչ, դրա համար նրան պետք է մոտակա աշտարակ, և մարտկոցն արագ սպառվում է, որտեղ ազդանշանը թույլ է։
**Օրինակ 6։** Ամպրոպը ճառագայթում է ռադիոալիքներ լայն շերտում, ինչը AM ընդունիչում լսվում է որպես ճռճռոց։

### Վարժություններ

1. Ի՞նչ է էլեկտրամագնիսական ալիքը, և ո՞վ է նրան կանխատեսել։
2. Ի՞նչ արագությամբ են էլեկտրամագնիսական ալիքները տարածվում վակուումում։
3. Ի՞նչն է ճառագայթում էլեկտրամագնիսական ալիք։
4. Գտեք $150$ ՄՀց հաճախությամբ ալիքի երկարությունը։
5. Թվարկեք սպեկտրը ռադիոալիքներից մինչև գամմա ճառագայթներ։
6. Սպեկտրի ալիքներից որո՞նք կարող են տեսնել մեր աչքերը։
7. Ի՞նչ է կրող ալիքը, և ի՞նչ է մոդուլյացիան։
8. Ինչպե՞ս է ընդունիչն ընտրում մեկ կայան։

### Պատասխաններ

1. Տարածությունում տարածվող փոփոխվող էլեկտրամագնիսական դաշտը. Մաքսվելը կանխատեսեց, իսկ Հերցը ստեղծեց նրան։
2. $3 \\cdot 10^8$ մ/վ արագությամբ։
3. Արագացվող լիցքերը, գործնականում՝ փոփոխական հոսանքով ալեհավաքը։
4. $\\lambda = 3 \\cdot 10^8/1{,}5 \\cdot 10^8 = 2$ մ։
5. Ռադիոալիքներ, միկրոալիքներ, ինֆրակարմիր, տեսանելի լույս, ուլտրամանուշակագույն, ռենտգենյան, գամմա ճառագայթներ։
6. Միայն տեսանելի լույսի նեղ շերտը։
7. Հաստատուն բարձր հաճախության ալիքը. մոդուլյացիան նրան ձայնային ազդանշանով փոփոխելն է։
8. Ռեզոնանսով. նրա շղթան լարվում է այդ կրող ալիքի հաճախության։`,
        ru: `## Электромагнитное поле

Меняющееся магнитное поле создаёт электрическое, как показал Фарадей. Максвелл добавил обратное: меняющееся электрическое поле создаёт магнитное. Дальше они создают друг друга и уходят вместе.

> **Электромагнитная волна** — это меняющееся электромагнитное поле, распространяющееся в пространстве. В отличие от звуковой волны ей не нужна среда, и в вакууме она идёт со скоростью
> $$c = 3 \\cdot 10^8 \\text{ м/с}.$$

Это наибольшая скорость в природе, а формула $\\lambda = c/\\nu$ связывает длину волны с частотой, как и для любой волны. Волна излучается всякий раз, когда заряды движутся с ускорением, что на практике означает антенну с переменным током. Максвелл предсказал эти волны в 1865 году, а Герц примерно через двадцать лет получил и обнаружил их в лаборатории.

**Пример 1.** Радиоволна частотой $100$ МГц имеет $\\lambda = 3 \\cdot 10^8 : 10^8 = 3$ м, поэтому антенна FM имеет длину около метра.
**Пример 2.** Свет Солнца доходит до нас за $8$ минут, так как $1{,}5 \\cdot 10^{11} : 3 \\cdot 10^8 = 500$ с.
**Пример 3.** Импульс радара возвращается от самолёта в $60$ км через $4 \\cdot 10^{-4}$ с, и прибор измеряет это время, чтобы найти расстояние.

## Шкала электромагнитных волн

Все волны ниже — одно и то же и различаются только частотой, но это различие меняет всё в их поведении.

| Волны | Длина волны | Где встречаем |
|---|---|---|
| радиоволны | от километров до метра | радио, телевидение, мобильные телефоны |
| микроволны | от сантиметров до миллиметров | радар, спутниковая связь, микроволновые печи |
| инфракрасные | от миллиметров до $0{,}8$ мкм | тепло от печки, ночные камеры, пульты |
| видимый свет | от $0{,}8$ мкм до $0{,}4$ мкм | всё, что мы видим |
| ультрафиолетовые | от $0{,}4$ мкм до нескольких нм | загар и ожоги, бактерицидные лампы |
| рентгеновские | нанометры | медицинские снимки, дефектоскопия |
| гамма-лучи | ещё короче | от ядер, применяются в медицине |

Видимый свет — узкая полоска посередине. Вверх по таблице волны легче проходят через стены; вниз по ней каждая порция несёт больше энергии, и начиная с ультрафиолета они опасны для живой ткани.

## Радиосвязь

У говорящего голоса частоты в несколько килогерц — слишком низкие, чтобы хорошо излучаться. Поэтому передатчик создаёт постоянную волну высокой частоты, **несущую**, а звуком её изменяют, и это называют модуляцией. Антенна излучает результат.

Приёмник делает обратное. Его контур резонансом настраивают на одну несущую частоту, и из множества станций выделяется одна; затем звук отделяют от несущей и подают на громкоговоритель.

**Пример 4.** Микроволновая печь использует волны около $12$ см, которые сильно поглощают молекулы воды, поэтому пища греется изнутри, а воздух остаётся прохладным.
**Пример 5.** Мобильный телефон — это и маленький передатчик, и приёмник, поэтому ему нужна вышка поблизости, а батарея быстрее садится там, где сигнал слабый.
**Пример 6.** Гроза излучает радиоволны в широкой полосе, что слышно как треск в приёмнике AM.

### Упражнения

1. Что такое электромагнитная волна и кто её предсказал?
2. С какой скоростью электромагнитные волны идут в вакууме?
3. Что излучает электромагнитную волну?
4. Найдите длину волны частотой $150$ МГц.
5. Перечислите шкалу от радиоволн до гамма-лучей.
6. Какие из волн шкалы видят наши глаза?
7. Что такое несущая волна и что такое модуляция?
8. Как приёмник выделяет одну станцию?

### Ответы

1. Меняющееся электромагнитное поле, распространяющееся в пространстве; Максвелл предсказал, Герц получил.
2. Со скоростью $3 \\cdot 10^8$ м/с.
3. Заряды, движущиеся с ускорением, на практике антенна с переменным током.
4. $\\lambda = 3 \\cdot 10^8 : 1{,}5 \\cdot 10^8 = 2$ м.
5. Радиоволны, микроволны, инфракрасные, видимый свет, ультрафиолетовые, рентгеновские, гамма-лучи.
6. Только узкую полосу видимого света.
7. Постоянная волна высокой частоты; модуляция — это её изменение звуковым сигналом.
8. Резонансом: его контур настроен на частоту этой несущей.`,
      },
      [
        q(t("Electromagnetic waves in a vacuum travel at", "Վակուումում էլեկտրամագնիսական ալիքները տարածվում են", "Электромагнитные волны в вакууме идут со скоростью"), [
          t("3 · 10⁸ m/s", "3 · 10⁸ մ/վ", "3 · 10⁸ м/с"),
          t("340 m/s", "340 մ/վ", "340 м/с"),
          t("1500 m/s", "1500 մ/վ", "1500 м/с"),
        ], 0),
        q(t("Electromagnetic waves were predicted by", "Էլեկտրամագնիսական ալիքները կանխատեսել է", "Электромагнитные волны предсказал"), [
          t("Faraday", "Ֆարադեյը", "Фарадей"),
          t("Maxwell", "Մաքսվելը", "Максвелл"),
          t("Lenz", "Լենցը", "Ленц"),
        ], 1),
        q(t("An electromagnetic wave needs a medium", "Էլեկտրամագնիսական ալիքին միջավայր պետք է", "Электромагнитной волне среда нужна"), [
          t("always", "միշտ", "всегда"),
          t("only in water", "միայն ջրում", "только в воде"),
          t("never", "երբեք", "никогда"),
        ], 2),
        q(t("Which waves in the spectrum have the shortest wavelength?", "Սպեկտրի ո՞ր ալիքներն ունեն ամենակարճ ալիքի երկարություն", "У каких волн шкалы самая короткая длина волны?"), [
          t("gamma rays", "գամմա ճառագայթներ", "гамма-лучи"),
          t("radio waves", "ռադիոալիքներ", "радиоволны"),
          t("microwaves", "միկրոալիքներ", "микроволны"),
        ], 0),
        q(t("A wave of frequency 300 MHz has a wavelength of", "300 ՄՀց հաճախությամբ ալիքի երկարությունը", "Волна частотой 300 МГц имеет длину"), [
          t("3 m", "3 մ", "3 м"),
          t("1 m", "1 մ", "1 м"),
          t("30 m", "30 մ", "30 м"),
        ], 1),
        q(t("A radio receiver picks out one station by", "Ռադիոընդունիչը մեկ կայան ընտրում է", "Радиоприёмник выделяет одну станцию с помощью"), [
          t("modulation", "մոդուլյացիայով", "модуляции"),
          t("induction", "ինդուկցիայով", "индукции"),
          t("resonance", "ռեզոնանսով", "резонанса"),
        ], 2),
      ],
    ),
    lesson(
      "light-wave-dispersion",
      ["Light as a wave; dispersion; spectra", "Լույսն որպես ալիք, դիսպերսիա, սպեկտրներ", "Свет как волна; дисперсия; спектры"],
      {
        en: ["Say where visible light sits in the electromagnetic spectrum", "Explain dispersion and the rainbow", "Tell a line spectrum from a continuous one and say what it is used for"],
        hy: ["Ասել, թե որտեղ է տեսանելի լույսն էլեկտրամագնիսական սպեկտրում", "Բացատրել դիսպերսիան և ծիածանը", "Տարբերել գծային սպեկտրը հարթից և ասել, թե ինչի համար է այն օգտագործվում"],
        ru: ["Говорить, где видимый свет расположен в электромагнитном спектре", "Объяснять дисперсию и радугу", "Отличать линейчатый спектр от сплошного и говорить, для чего он нужен"],
      },
      {
        en: `## Light is an electromagnetic wave

Visible light is a narrow band of the electromagnetic spectrum, with wavelengths in a vacuum from about $0{.}76$ µm for red to about $0{.}40$ µm for violet. Its colour is decided by its frequency, and the frequency does not change when the light passes from one medium into another.

| Colour | Wavelength in a vacuum |
|---|---|
| red | about $0{.}70$ µm |
| yellow | about $0{.}58$ µm |
| green | about $0{.}53$ µm |
| blue | about $0{.}47$ µm |
| violet | about $0{.}41$ µm |

In glass or water light travels more slowly than in a vacuum, and the slower it travels the more it is bent when it enters at an angle. This is the refraction met in grade 8, and now we can add the fact that the slowing is not the same for all colours.

**Example 1.** Green light of $0{.}53$ µm has a frequency $\\nu = 3 \\cdot 10^8/5{.}3 \\cdot 10^{-7} \\approx 5{.}7 \\cdot 10^{14}$ Hz, about a million million times the frequency of a mains current.

## Dispersion

> **Dispersion** is the dependence of the speed of light in a medium, and so of its refraction, on the colour of the light.

Violet light is slowed the most and bent the most; red light the least. So a narrow beam of white light passing through a glass prism comes out spread into a band of colours, red at one end and violet at the other. Newton did this experiment and then the decisive second half of it: he passed the band through a second prism and brought the colours back together into white light. White light is therefore a mixture, and the prism only sorts it.

**Example 2.** A rainbow is dispersion in raindrops: the light enters a drop, is reflected inside it and leaves bent by an angle that differs slightly for each colour.
**Example 3.** A thick lens gives coloured edges to the image for the same reason, and a camera lens is built of several glasses to cancel the effect.
**Example 4.** A compact disc shows colours because its fine grooves sort the light in a different way, but the eye sees the same band of colours.

## Spectra

The band of colours obtained from a source is its **spectrum**, and it is as good as a signature.

| Spectrum | What it looks like | Where it comes from |
|---|---|---|
| continuous | all colours merging | hot solids and liquids, the filament of a lamp |
| line emission | a few bright lines | a hot rarefied gas |
| line absorption | dark lines on a continuous band | a cool gas in front of a hot source |

Every chemical element gives its own set of lines, always in the same places. So a spectrum tells us what a substance is made of, without touching it. This is **spectral analysis**, and it works at any distance.

**Example 5.** The element helium was found in the spectrum of the Sun before it was found on the Earth, which is where its name comes from.
**Example 6.** Dark lines in the Sun's spectrum, first mapped by Fraunhofer, are made by the cooler gases of its outer layers, and they tell us which elements are there. The same method shows the composition of stars thousands of light years away.

### Exercises

1. Where does visible light sit in the electromagnetic spectrum?
2. Which has the longer wavelength, red light or violet light?
3. What decides the colour of light?
4. Define dispersion.
5. Which colour is bent most by a prism, and which least?
6. Why do we say that white light is a mixture?
7. Name the three kinds of spectra and say where each comes from.
8. What is spectral analysis used for?

### Answers

1. In a narrow band from about $0{.}76$ µm to about $0{.}40$ µm.
2. Red light.
3. Its frequency.
4. The dependence of the speed of light in a medium, and of its refraction, on the colour.
5. Violet most, red least.
6. Because a second prism brings the separated colours back into white light.
7. Continuous from hot solids and liquids, line emission from hot rarefied gases, line absorption from a cool gas in front of a hot source.
8. For finding out what a substance, including a distant star, is made of.`,
        hy: `## Լույսն էլեկտրամագնիսական ալիք է

Տեսանելի լույսն էլեկտրամագնիսական սպեկտրի նեղ շերտ է՝ վակուումում ալիքի երկարություններով կարմիրի համար մոտ $0{,}76$ մկմ-ից մինչև մանուշակագույնի համար մոտ $0{,}40$ մկմ։ Նրա գույնն որոշվում է հաճախությամբ, իսկ հաճախությունը չի փոխվում, երբ լույսը մի միջավայրից անցնում է մյուսը։

| Գույն | Ալիքի երկարությունը վակուումում |
|---|---|
| կարմիր | մոտ $0{,}70$ մկմ |
| դեղին | մոտ $0{,}58$ մկմ |
| կանաչ | մոտ $0{,}53$ մկմ |
| կապույտ | մոտ $0{,}47$ մկմ |
| մանուշակագույն | մոտ $0{,}41$ մկմ |

Ապակու կամ ջրի մեջ լույսը տարածվում է ավելի դանդաղ, քան վակուումում, և որքան դանդաղ է տարածվում, այնքան ավելի է բեկվում, երբ անկյան տակ մտնում է։ Սա 8-րդ դասարանում հանդիպած բեկումն է, և այժմ կարող ենք ավելացնել, որ դանդաղեցումը բոլոր գույների համար նույնը չէ։

**Օրինակ 1։** $0{,}53$ մկմ կանաչ լույսն ունի $\\nu = 3 \\cdot 10^8/5{,}3 \\cdot 10^{-7} \\approx 5{,}7 \\cdot 10^{14}$ Հց հաճախություն՝ մոտ միլիոն միլիոն անգամ ավելի, քան ցանցի հոսանքի հաճախությունը։

## Դիսպերսիա

> **Դիսպերսիա** է միջավայրում լույսի արագության, ուրեմն և նրա բեկման, կախվածությունը լույսի գույնից։

Մանուշակագույն լույսն ամենաշատն է դանդաղեցվում և ամենաշատը բեկվում, կարմիրը՝ ամենաքիչը։ Ուստի ապակե պրիզմայով անցնող սպիտակ լույսի նեղ փունջը դուրս է գալիս գույների շերտի տարածված՝ մի ծայրում կարմիր, մյուսում՝ մանուշակագույն։ Նյուտոնը կատարեց այս փորձը և հետո նրա վճռական երկրորդ կեսը. շերտն անցկացրեց երկրորդ պրիզմայով և գույները նորից միացրեց սպիտակ լույսի մեջ։ Ուրեմն սպիտակ լույսը խառնուրդ է, իսկ պրիզման միայն տեսակավորում է նրան։

**Օրինակ 2։** Ծիածանը դիսպերսիա է անձրևի կաթիլներում. լույսը մտնում է կաթիլ, ներսում արտացոլվում և դուրս գալիս բեկված այն անկյունով, որը յուրաքանչյուր գույնի համար մի քիչ տարբեր է։
**Օրինակ 3։** Հաստ ոսպնյակը նույն պատճառով պատկերին տալիս է գունավոր եզրեր, և լուսանկարչական ոսպնյակը կառուցվում է մի քանի ապակիներից՝ այդ ազդեցությունը չեզոքացնելու համար։
**Օրինակ 4։** Սկավառակը ցույց է տալիս գույներ, որովհետև նրա մանր ակոսները լույսը տեսակավորում են այլ ձևով, բայց աչքը տեսնում է գույների նույն շերտը։

## Սպեկտրներ

Աղբյուրից ստացված գույների շերտը նրա **սպեկտրն** է, և այն ստորագրության պես լավն է։

| Սպեկտր | Ինչպիսի՞ն է երևում | Որտեղից է գալիս |
|---|---|---|
| հարթ | բոլոր գույները միաձուլված | տաք պինդ մարմիններ և հեղուկներ, լամպի թել |
| գծային ճառագայթման | մի քանի պայծառ գծեր | տաք նոսր գազ |
| գծային կլանման | մուգ գծեր հարթ շերտի վրա | սառն գազ տաք աղբյուրի դիմաց |

Ամեն քիմիական տարր տալիս է իր սեփական գծերի հավաքածուն՝ միշտ նույն տեղերում։ Ուստի սպեկտրը մեզ ասում է, թե ինչից է կազմված նյութը՝ առանց դիպչելու։ Սա **սպեկտրալ վերլուծությունն** է, և այն աշխատում է ցանկացած հեռավորության վրա։

**Օրինակ 5։** Հելիում տարրը գտնվեց Արեգակի սպեկտրում, նախքան գտնվեր Երկրի վրա, որտեղից և նրա անունը։
**Օրինակ 6։** Արեգակի սպեկտրի մուգ գծերը, որոնք առաջինը քարտեզագրեց Ֆրաունհոֆերը, ստեղծվում են նրա արտաքին շերտերի ավելի սառն գազերով և մեզ ասում, թե ինչ տարրեր կան այնտեղ։ Նույն մեթոդը ցույց է տալիս հազարավոր լուսատարի հեռու աստղերի կազմությունը։

### Վարժություններ

1. Որտե՞ղ է տեսանելի լույսն էլեկտրամագնիսական սպեկտրում։
2. Ո՞րն ունի ավելի մեծ ալիքի երկարություն՝ կարմիր, թե՞ մանուշակագույն լույսը։
3. Ի՞նչն է որոշում լույսի գույնը։
4. Սահմանեք դիսպերսիան։
5. Պրիզմայով ո՞ր գույնն է ամենաշատը բեկվում և ո՞րը՝ ամենաքիչը։
6. Ինչո՞ւ ասում ենք, որ սպիտակ լույսը խառնուրդ է։
7. Նշեք սպեկտրների երեք տեսակը և ասեք, թե որտեղից է գալիս յուրաքանչյուրը։
8. Ինչի՞ համար է օգտագործվում սպեկտրալ վերլուծությունը։

### Պատասխաններ

1. Մոտ $0{,}76$ մկմ-ից մինչև մոտ $0{,}40$ մկմ նեղ շերտում։
2. Կարմիր լույսը։
3. Նրա հաճախությունը։
4. Միջավայրում լույսի արագության և նրա բեկման կախվածությունը գույնից։
5. Մանուշակագույնը՝ ամենաշատը, կարմիրը՝ ամենաքիչը։
6. Որովհետև երկրորդ պրիզման բաժանված գույները նորից միացնում է սպիտակ լույսի մեջ։
7. Հարթը՝ տաք պինդ մարմիններից և հեղուկներից, գծային ճառագայթման՝ տաք նոսր գազերից, գծային կլանման՝ տաք աղբյուրի դիմաց սառն գազից։
8. Նյութի, ներառյալ հեռավոր աստղի, կազմությունը պարզելու համար։`,
        ru: `## Свет — электромагнитная волна

Видимый свет — узкая полоса электромагнитного спектра с длинами волн в вакууме примерно от $0{,}76$ мкм для красного до $0{,}40$ мкм для фиолетового. Его цвет определяется частотой, а частота не меняется при переходе света из одной среды в другую.

| Цвет | Длина волны в вакууме |
|---|---|
| красный | около $0{,}70$ мкм |
| жёлтый | около $0{,}58$ мкм |
| зелёный | около $0{,}53$ мкм |
| синий | около $0{,}47$ мкм |
| фиолетовый | около $0{,}41$ мкм |

В стекле или воде свет идёт медленнее, чем в вакууме, и чем медленнее он идёт, тем сильнее преломляется, входя под углом. Это преломление, знакомое с 8 класса, и теперь можно добавить, что замедление для разных цветов не одинаково.

**Пример 1.** Зелёный свет $0{,}53$ мкм имеет частоту $\\nu = 3 \\cdot 10^8 : 5{,}3 \\cdot 10^{-7} \\approx 5{,}7 \\cdot 10^{14}$ Гц — примерно в миллион миллионов раз больше частоты сетевого тока.

## Дисперсия

> **Дисперсией** называют зависимость скорости света в среде, а значит и его преломления, от цвета света.

Фиолетовый свет замедляется и преломляется сильнее всего, красный — слабее всего. Поэтому узкий пучок белого света, прошедший через стеклянную призму, выходит растянутым в полосу цветов: красный на одном краю, фиолетовый на другом. Ньютон проделал этот опыт, а затем и решающую вторую его половину: он пропустил полосу через вторую призму и вновь собрал цвета в белый свет. Значит, белый свет — это смесь, а призма лишь сортирует её.

**Пример 2.** Радуга — это дисперсия в капельках дождя: свет входит в каплю, отражается внутри и выходит преломлённым на угол, слегка разный для каждого цвета.
**Пример 3.** Толстая линза по той же причине даёт изображению цветные края, и объектив фотоаппарата собирают из нескольких стёкол, чтобы погасить этот эффект.
**Пример 4.** Компакт-диск показывает цвета потому, что его мелкие дорожки сортируют свет иначе, но глаз видит ту же полосу цветов.

## Спектры

Полоса цветов, полученная от источника, — это его **спектр**, и он не хуже подписи.

| Спектр | Как выглядит | Откуда берётся |
|---|---|---|
| сплошной | все цвета, переходящие друг в друга | горячие твёрдые тела и жидкости, нить лампы |
| линейчатый испускания | несколько ярких линий | горячий разреженный газ |
| линейчатый поглощения | тёмные линии на сплошной полосе | холодный газ перед горячим источником |

Каждый химический элемент даёт свой набор линий, всегда на тех же местах. Поэтому спектр говорит нам, из чего состоит вещество, без всякого прикосновения. Это **спектральный анализ**, и он работает на любом расстоянии.

**Пример 5.** Элемент гелий нашли в спектре Солнца раньше, чем на Земле, откуда и его название.
**Пример 6.** Тёмные линии в спектре Солнца, впервые описанные Фраунгофером, создают более холодные газы его внешних слоёв, и они говорят нам, какие элементы там есть. Тот же метод показывает состав звёзд, удалённых на тысячи световых лет.

### Упражнения

1. Где расположен видимый свет в электромагнитном спектре?
2. У какого света длина волны больше — у красного или у фиолетового?
3. Что определяет цвет света?
4. Определите дисперсию.
5. Какой цвет преломляется призмой сильнее всего и какой слабее всего?
6. Почему мы говорим, что белый свет — это смесь?
7. Назовите три вида спектров и скажите, откуда берётся каждый.
8. Для чего применяют спектральный анализ?

### Ответы

1. В узкой полосе примерно от $0{,}76$ мкм до $0{,}40$ мкм.
2. У красного.
3. Его частота.
4. Зависимость скорости света в среде и его преломления от цвета.
5. Фиолетовый сильнее всего, красный слабее всего.
6. Потому что вторая призма вновь собирает разделённые цвета в белый свет.
7. Сплошной от горячих твёрдых тел и жидкостей, линейчатый испускания от горячих разреженных газов, линейчатый поглощения от холодного газа перед горячим источником.
8. Для определения состава вещества, в том числе далёкой звезды.`,
      },
      [
        q(t("The colour of light is decided by", "Լույսի գույնն որոշվում է", "Цвет света определяется"), [
          t("its frequency", "նրա հաճախությամբ", "его частотой"),
          t("its brightness", "նրա պայծառությամբ", "его яркостью"),
          t("the medium it is in", "այն միջավայրով, որում գտնվում է", "средой, в которой он находится"),
        ], 0),
        q(t("Which light has the longer wavelength?", "Ո՞ր լույսն ունի ավելի մեծ ալիքի երկարություն", "У какого света длина волны больше?"), [
          t("violet", "մանուշակագույնը", "у фиолетового"),
          t("red", "կարմիրը", "у красного"),
          t("green", "կանաչը", "у зелёного"),
        ], 1),
        q(t("Dispersion is the dependence of the refraction of light on", "Դիսպերսիան լույսի բեկման կախվածությունն է", "Дисперсия — это зависимость преломления света от"), [
          t("the brightness", "պայծառությունից", "яркости"),
          t("the thickness of the prism", "պրիզմայի հաստությունից", "толщины призмы"),
          t("the colour", "գույնից", "цвета"),
        ], 2),
        q(t("A prism bends most strongly the", "Պրիզման ամենաուժեղ բեկում է", "Призма сильнее всего преломляет"), [
          t("violet light", "մանուշակագույն լույսը", "фиолетовый свет"),
          t("red light", "կարմիր լույսը", "красный свет"),
          t("yellow light", "դեղին լույսը", "жёлтый свет"),
        ], 0),
        q(t("A hot rarefied gas gives a", "Տաք նոսր գազը տալիս է", "Горячий разреженный газ даёт"), [
          t("continuous spectrum", "հարթ սպեկտր", "сплошной спектр"),
          t("line emission spectrum", "գծային ճառագայթման սպեկտր", "линейчатый спектр испускания"),
          t("no spectrum at all", "ոչ մի սպեկտր", "вовсе никакого спектра"),
        ], 1),
        q(t("Spectral analysis makes it possible to find out", "Սպեկտրալ վերլուծությունը հնարավորություն է տալիս պարզել", "Спектральный анализ позволяет узнать"), [
          t("the distance to a star", "աստղի հեռավորությունը", "расстояние до звезды"),
          t("the age of a lamp", "լամպի տարիքը", "возраст лампы"),
          t("what a substance is made of", "ինչից է կազմված նյութը", "из чего состоит вещество"),
        ], 2),
      ],
    ),
  ],
};
