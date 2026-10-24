import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Light phenomena", "Լուսային երևույթներ", "Световые явления"),
  summary: t("Sources of light, rectilinear propagation, reflection, mirrors, refraction, lenses, the eye.", "Լույսի աղբյուրներ, ուղղագիծ տարածում, անդրադարձում, հայելիներ, բեկում, ոսպնյակներ, աչք։", "Источники света, прямолинейное распространение, отражение, зеркала, преломление, линзы, глаз."),
  lessons: [
    lesson(
      "light-sources-propagation",
      ["Light sources; rectilinear propagation; eclipses", "Լույսի աղբյուրներ, ուղղագիծ տարածում, խավարումներ", "Источники света; прямолинейное распространение; затмения"],
      {
        en: ["Distinguish natural and artificial, luminous and illuminated bodies", "State the law of rectilinear propagation and explain shadow and penumbra", "Explain solar and lunar eclipses"],
        hy: ["Տարբերել բնական և արհեստական, լուսատու և լուսավորված մարմինները", "Ձևակերպել ուղղագիծ տարածման օրենքը և բացատրել ստվերն ու կիսաստվերը", "Բացատրել Արեգակի և Լուսնի խավարումները"],
        ru: ["Различать естественные и искусственные, светящиеся и освещённые тела", "Формулировать закон прямолинейного распространения и объяснять тень и полутень", "Объяснять солнечные и лунные затмения"],
      },
      {
        en: `## Sources of light

A body that emits light itself is a **light source**.

| | Natural | Artificial |
|---|---|---|
| Examples | the Sun, stars, lightning, fireflies, glowing lava | lamp, candle, torch, LED, screen |

The Moon, a wall or this page are **not** sources: we see them because they reflect light that comes from elsewhere. They are **illuminated** bodies.

A source may be a **point** source (small compared with the distance, like a star) or an **extended** one (a long lamp, the sky).

Light travels in vacuum at

$$c = 300\\,000\\ \\text{km/s} = 3 \\cdot 10^8\\ \\text{m/s}$$

the greatest speed in nature. Sunlight takes $8$ minutes to reach us; light from the nearest star, more than four years.

## Rectilinear propagation

> In a uniform transparent medium light travels in straight lines.

Proofs are everywhere: a sunbeam in dusty air, the straight edge of a shadow, the fact that you cannot see round a corner. This is why we draw light as **rays** — straight lines with arrows.

Surveyors line up poles by eye, and a carpenter checks a board by looking along it, both using the straightness of light.

## Shadow and penumbra

A point source behind an opaque body gives a sharp **shadow**: the region where no light arrives.

An extended source gives a shadow surrounded by a **penumbra**, a region reached by light from part of the source only. That is why shadows outdoors have soft edges, and why a lamp with a large shade makes gentler shadows than a bare bulb.

## Eclipses

| Eclipse | What happens |
|---|---|
| **Solar** | the Moon comes between the Sun and the Earth; its shadow falls on a small spot of the Earth, and observers there see the Sun covered |
| **Lunar** | the Earth comes between the Sun and the Moon, and the Moon enters the Earth's shadow |

A solar eclipse is total only in a narrow band a few hundred kilometres wide, and around it the eclipse is partial, because there the Moon's penumbra falls. A lunar eclipse is visible at the same time from the whole night side of the Earth, since it is the Moon itself that is darkened.

### Exercises

1. Which of these are light sources: the Sun, the Moon, a candle, a mirror, a firefly?
2. What is the speed of light in vacuum?
3. State the law of rectilinear propagation of light.
4. What is a penumbra and when does it appear?
5. Why are shadows in sunlight not perfectly sharp?
6. Explain a solar eclipse in two sentences.
7. Why can a lunar eclipse be seen by many more people at once than a solar one?
8. The Sun is about $150$ million km away. How long does its light take to reach us?

### Answers

1. The Sun, a candle and a firefly. The Moon and a mirror only reflect.
2. $300\\,000$ km/s, that is $3 \\cdot 10^8$ m/s.
3. In a uniform transparent medium light travels in straight lines.
4. A region lit by part of an extended source only; it appears when the source is not a point.
5. The Sun is an extended source, so there is a penumbra around the shadow.
6. The Moon passes between the Sun and the Earth. Its shadow falls on a part of the Earth, and from there the Sun looks covered.
7. The Moon itself is darkened, so everyone on the night side sees it; a solar eclipse is visible only where the Moon's small shadow falls.
8. $t = 150\\,000\\,000/300\\,000 = 500$ s, about $8$ minutes.`,
        hy: `## Լույսի աղբյուրներ

Մարմինը, որն ինքն է լույս արձակում, **լույսի աղբյուր** է։

| | Բնական | Արհեստական |
|---|---|---|
| Օրինակներ | Արեգակ, աստղեր, կայծակ, լուսատտիկներ, շիկացած լավա | լամպ, մոմ, լապտեր, LED, էկրան |

Լուսինը, պատը կամ այս էջը **չեն** աղբյուրներ. մենք դրանք տեսնում ենք, որովհետև դրանք արտացոլում են այլ տեղից եկած լույսը։ Դրանք **լուսավորված** մարմիններ են։

Աղբյուրը կարող է լինել **կետային** (հեռավորության համեմատ փոքր, ինչպես աստղը) կամ **տարածված** (երկար լամպ, երկինք)։

Լույսը վակուումում տարածվում է

$$c = 300\\,000\\ \\text{կմ/վ} = 3 \\cdot 10^8\\ \\text{մ/վ}$$

արագությամբ՝ բնության ամենամեծ արագությամբ։ Արեգակի լույսը մեզ հասնում է $8$ րոպեում, մոտակա աստղի լույսը՝ ավելի քան չորս տարում։

## Ուղղագիծ տարածում

> Համասեռ թափանցիկ միջավայրում լույսը տարածվում է ուղիղ գծերով։

Ապացույցներն ամենուր են՝ փոշոտ օդում արևի շերտը, ստվերի ուղիղ եզրը, այն փաստը, որ չես կարող անկյունից այն կողմ տեսնել։ Ահա թե ինչու լույսը պատկերում ենք **ճառագայթներով**՝ սլաքներով ուղիղ գծերով։

Գեոդեզիստները ցցերը շարում են աչքով, իսկ ատաղձագործը տախտակը ստուգում է՝ նրա երկայնքով նայելով. երկուսն էլ օգտագործում են լույսի ուղղագծությունը։

## Ստվեր և կիսաստվեր

Անթափանց մարմնի հետևում կետային աղբյուրը տալիս է սուր **ստվեր**՝ տիրույթ, որտեղ լույս չի հասնում։

Տարածված աղբյուրը տալիս է ստվեր՝ շրջապատված **կիսաստվերով**՝ տիրույթ, որտեղ հասնում է լույս աղբյուրի միայն մի մասից։ Ահա թե ինչու բացօթյա ստվերներն ունեն փափուկ եզրեր, և ինչու մեծ աբաժուրով լամպն ավելի մեղմ ստվերներ է տալիս, քան բաց լամպը։

## Խավարումներ

| Խավարում | Ինչ է կատարվում |
|---|---|
| **Արեգակի** | Լուսինը գալիս է Արեգակի և Երկրի միջև, նրա ստվերն ընկնում է Երկրի փոքր տեղամասին, և այնտեղի դիտողները տեսնում են ծածկված Արեգակ |
| **Լուսնի** | Երկիրը գալիս է Արեգակի և Լուսնի միջև, և Լուսինը մտնում է Երկրի ստվերը |

Արեգակի խավարումը լրիվ է միայն մի քանի հարյուր կիլոմետր լայնությամբ նեղ գոտում, իսկ նրա շուրջ խավարումը մասնակի է, քանի որ այնտեղ ընկնում է Լուսնի կիսաստվերը։ Լուսնի խավարումը միաժամանակ տեսանելի է Երկրի ամբողջ գիշերային կողմից, քանի որ մգանում է հենց Լուսինը։

### Վարժություններ

1. Սրանցից որո՞նք են լույսի աղբյուրներ՝ Արեգակը, Լուսինը, մոմը, հայելին, լուսատտիկը։
2. Որքա՞ն է լույսի արագությունը վակուումում։
3. Ձևակերպիր լույսի ուղղագիծ տարածման օրենքը։
4. Ի՞նչ է կիսաստվերը և ե՞րբ է առաջանում։
5. Ինչո՞ւ արևի լույսի ստվերները կատարյալ սուր չեն։
6. Երկու նախադասությամբ բացատրիր Արեգակի խավարումը։
7. Ինչո՞ւ Լուսնի խավարումը միաժամանակ կարող են տեսնել շատ ավելի շատ մարդիկ, քան Արեգակի խավարումը։
8. Արեգակը մոտ $150$ միլիոն կմ հեռու է։ Որքա՞ն ժամանակում է նրա լույսը մեզ հասնում։

### Պատասխաններ

1. Արեգակը, մոմը և լուսատտիկը։ Լուսինն ու հայելին միայն արտացոլում են։
2. $300\\,000$ կմ/վ, այսինքն՝ $3 \\cdot 10^8$ մ/վ։
3. Համասեռ թափանցիկ միջավայրում լույսը տարածվում է ուղիղ գծերով։
4. Տիրույթ, որը լուսավորված է տարածված աղբյուրի միայն մի մասից, առաջանում է, երբ աղբյուրը կետային չէ։
5. Արեգակը տարածված աղբյուր է, ուստի ստվերի շուրջ կա կիսաստվեր։
6. Լուսինն անցնում է Արեգակի և Երկրի միջև։ Նրա ստվերն ընկնում է Երկրի մի մասին, և այնտեղից Արեգակը ծածկված է երևում։
7. Մգանում է հենց Լուսինը, ուստի նրան տեսնում են բոլորը գիշերային կողմում, իսկ Արեգակի խավարումը տեսանելի է միայն այնտեղ, որտեղ ընկնում է Լուսնի փոքր ստվերը։
8. $t = 150\\,000\\,000/300\\,000 = 500$ վ, մոտ $8$ րոպե։`,
        ru: `## Источники света

Тело, которое само излучает свет, — **источник света**.

| | Естественные | Искусственные |
|---|---|---|
| Примеры | Солнце, звёзды, молния, светлячки, раскалённая лава | лампа, свеча, фонарь, светодиод, экран |

Луна, стена или эта страница — **не** источники: мы их видим, потому что они отражают свет, пришедший откуда-то ещё. Это **освещённые** тела.

Источник может быть **точечным** (малым по сравнению с расстоянием, как звезда) или **протяжённым** (длинная лампа, небо).

Свет распространяется в вакууме со скоростью

$$c = 300\\,000\\ \\text{км/с} = 3 \\cdot 10^8\\ \\text{м/с}$$

это наибольшая скорость в природе. Свет Солнца доходит до нас за $8$ минут, свет ближайшей звезды — более чем за четыре года.

## Прямолинейное распространение

> В однородной прозрачной среде свет распространяется по прямым линиям.

Доказательства повсюду: солнечный луч в пыльном воздухе, прямой край тени, невозможность увидеть за угол. Поэтому свет изображают **лучами** — прямыми со стрелками.

Геодезисты выставляют вехи на глаз, а столяр проверяет доску, глядя вдоль неё: и те и другой используют прямолинейность света.

## Тень и полутень

Точечный источник за непрозрачным телом даёт резкую **тень** — область, куда свет не попадает.

Протяжённый источник даёт тень, окружённую **полутенью** — областью, куда приходит свет лишь от части источника. Поэтому тени на улице имеют размытые края, и поэтому лампа с большим абажуром даёт более мягкие тени, чем голая лампочка.

## Затмения

| Затмение | Что происходит |
|---|---|
| **Солнечное** | Луна оказывается между Солнцем и Землёй; её тень падает на небольшой участок Земли, и наблюдатели там видят закрытое Солнце |
| **Лунное** | Земля оказывается между Солнцем и Луной, и Луна входит в тень Земли |

Солнечное затмение полное только в узкой полосе шириной несколько сотен километров, а вокруг неё затмение частное, потому что там падает полутень Луны. Лунное затмение видно одновременно со всей ночной стороны Земли, ведь темнеет сама Луна.

### Упражнения

1. Что из перечисленного — источники света: Солнце, Луна, свеча, зеркало, светлячок?
2. Какова скорость света в вакууме?
3. Сформулируй закон прямолинейного распространения света.
4. Что такое полутень и когда она возникает?
5. Почему тени при солнечном свете не идеально резкие?
6. Объясни солнечное затмение двумя предложениями.
7. Почему лунное затмение одновременно могут видеть гораздо больше людей, чем солнечное?
8. Солнце находится примерно в $150$ млн км. За какое время его свет доходит до нас?

### Ответы

1. Солнце, свеча и светлячок. Луна и зеркало только отражают.
2. $300\\,000$ км/с, то есть $3 \\cdot 10^8$ м/с.
3. В однородной прозрачной среде свет распространяется по прямым линиям.
4. Область, освещённая лишь частью протяжённого источника; появляется, когда источник не точечный.
5. Солнце — протяжённый источник, поэтому вокруг тени есть полутень.
6. Луна проходит между Солнцем и Землёй. Её тень падает на часть Земли, и оттуда Солнце кажется закрытым.
7. Темнеет сама Луна, поэтому её видят все на ночной стороне; солнечное затмение видно только там, куда падает небольшая тень Луны.
8. $t = 150\\,000\\,000/300\\,000 = 500$ с, около $8$ минут.`,
      },
      [
        q(t("A light source among these is", "Սրանցից լույսի աղբյուր է", "Источник света среди этих —"), [
          t("a candle", "մոմը", "свеча"),
          t("the Moon", "Լուսինը", "Луна"),
          t("a mirror", "հայելին", "зеркало"),
        ], 0),
        q(t("The speed of light in vacuum is", "Լույսի արագությունը վակուումում", "Скорость света в вакууме равна"), [
          t("340 m/s", "340 մ/վ", "340 м/с"),
          t("300 000 km/s", "300 000 կմ/վ", "300 000 км/с"),
          t("300 km/s", "300 կմ/վ", "300 км/с"),
        ], 1),
        q(t("In a uniform transparent medium light travels", "Համասեռ թափանցիկ միջավայրում լույսը տարածվում է", "В однородной прозрачной среде свет распространяется"), [
          t("in circles", "շրջանագծերով", "по окружностям"),
          t("along any curve", "ցանկացած կորով", "по любой кривой"),
          t("in straight lines", "ուղիղ գծերով", "по прямым линиям"),
        ], 2),
        q(t("A penumbra appears when the source is", "Կիսաստվերն առաջանում է, երբ աղբյուրը", "Полутень появляется, когда источник"), [
          t("extended, not a point", "տարածված է, ոչ կետային", "протяжённый, а не точечный"),
          t("a point one", "կետային է", "точечный"),
          t("very far away", "շատ հեռու է", "очень далёкий"),
        ], 0),
        q(t("During a solar eclipse", "Արեգակի խավարման ժամանակ", "При солнечном затмении"), [
          t("the Earth is between the Sun and the Moon", "Երկիրն Արեգակի և Լուսնի միջև է", "Земля находится между Солнцем и Луной"),
          t("the Moon is between the Sun and the Earth", "Լուսինն Արեգակի և Երկրի միջև է", "Луна находится между Солнцем и Землёй"),
          t("the Sun passes behind the Earth", "Արեգակն անցնում է Երկրի հետևով", "Солнце проходит за Землёй"),
        ], 1),
        q(t("A lunar eclipse is seen at the same time", "Լուսնի խավարումը միաժամանակ տեսանելի է", "Лунное затмение видно одновременно"), [
          t("only in a narrow band", "միայն նեղ գոտում", "только в узкой полосе"),
          t("only from one country", "միայն մեկ երկրից", "только из одной страны"),
          t("from the whole night side of the Earth", "Երկրի ամբողջ գիշերային կողմից", "со всей ночной стороны Земли"),
        ], 2),
      ],
    ),
    lesson(
      "reflection-mirrors",
      ["Reflection of light; plane mirror", "Լույսի անդրադարձում, հարթ հայելի", "Отражение света; плоское зеркало"],
      {
        en: ["State the law of reflection and use the angles", "Distinguish specular and diffuse reflection", "Describe the image in a plane mirror and its properties"],
        hy: ["Ձևակերպել անդրադարձման օրենքը և օգտագործել անկյունները", "Տարբերել հայելային և ցրված անդրադարձումը", "Նկարագրել հարթ հայելու պատկերը և նրա հատկությունները"],
        ru: ["Формулировать закон отражения и работать с углами", "Различать зеркальное и рассеянное отражение", "Описывать изображение в плоском зеркале и его свойства"],
      },
      {
        en: `## The law of reflection

Send a narrow beam onto a mirror. Draw the **normal** — the perpendicular to the surface at the point where the beam lands. Then

- the **angle of incidence** $\\alpha$ is between the incoming ray and the normal;
- the **angle of reflection** $\\beta$ is between the outgoing ray and the normal.

> The incident ray, the reflected ray and the normal lie in one plane, and $\\beta = \\alpha$.

A ray falling **along** the normal $(\\alpha = 0)$ comes straight back. If the beam falls at $30^\\circ$ to the mirror surface, the angle of incidence is $90^\\circ - 30^\\circ = 60^\\circ$, and so is the angle of reflection — a favourite trap in problems.

## Two kinds of reflection

| Specular (mirror) reflection | Diffuse reflection |
|---|---|
| smooth surface: mirror, still water, polished metal | rough surface: paper, wall, cloth, snow |
| parallel rays stay parallel | parallel rays scatter in all directions |
| you see an image | you see the surface itself |

Thanks to diffuse reflection we see objects from any side. A sheet of white paper scatters almost all the light, black velvet almost none — that is why it looks black.

## The plane mirror

Light from a point of an object reflects off the mirror and reaches the eye as if it came from a point **behind** the mirror. That point is the **image**.

Properties of the image in a plane mirror:

1. it is **virtual** — no light really gathers there, and it cannot be caught on a screen;
2. it is the same size as the object;
3. it is as far behind the mirror as the object is in front;
4. it is **laterally inverted**: your right hand looks like a left hand, and text reads backwards. Ambulances therefore carry mirror-written signs.

### Uses

Mirrors in rooms and shops, the rear-view and wing mirrors of a car, a periscope (two mirrors at $45^\\circ$), the mirrors of reflecting telescopes, reflectors on bicycles and road signs.

### Exercises

1. State the law of reflection.
2. The angle of incidence is $25^\\circ$. What is the angle of reflection, and the angle between the two rays?
3. A ray falls on a mirror at $20^\\circ$ to its surface. Find the angle of incidence.
4. Why can you see a wall from any point in a room but your face only in a mirror?
5. Name four properties of the image in a plane mirror.
6. You stand $0.5$ m from a mirror. How far is your image from you?
7. A clock seen in a mirror shows what looks like $8{:}00$. What time is it really?
8. Why is the lettering on an ambulance written in mirror writing?

### Answers

1. The incident and reflected rays and the normal are in one plane, and the angle of reflection equals the angle of incidence.
2. $25^\\circ$; the angle between the rays is $50^\\circ$.
3. $90^\\circ - 20^\\circ = 70^\\circ$.
4. The wall reflects light diffusely in all directions; a mirror reflects it specularly, so it gives an image instead.
5. Virtual, the same size, as far behind as the object is in front, laterally inverted.
6. $0.5 + 0.5 = 1$ m.
7. $4{:}00$ (the mirror reverses the dial left to right).
8. So that a driver looking in the rear-view mirror reads it the right way round.`,
        hy: `## Անդրադարձման օրենքը

Նեղ շիթ ուղղիր հայելուն։ Տար **նորմալը**՝ մակերևույթին ուղղահայացն այն կետում, որտեղ շիթն ընկնում է։ Այդ դեպքում

- **անկման անկյունը** $\\alpha$ ընկնող ճառագայթի և նորմալի միջև է,
- **անդրադարձման անկյունը** $\\beta$ դուրս եկող ճառագայթի և նորմալի միջև է։

> Ընկնող ճառագայթը, անդրադարձած ճառագայթը և նորմալը գտնվում են մեկ հարթությունում, և $\\beta = \\alpha$։

Նորմալի **երկայնքով** ընկնող ճառագայթը $(\\alpha = 0)$ վերադառնում է ուղիղ հետ։ Եթե շիթն ընկնում է հայելու մակերևույթին $30^\\circ$ անկյան տակ, անկման անկյունը $90^\\circ - 30^\\circ = 60^\\circ$ է, նույնպես և անդրադարձման անկյունը. սա խնդիրների սիրված թակարդն է։

## Անդրադարձման երկու տեսակ

| Հայելային անդրադարձում | Ցրված անդրադարձում |
|---|---|
| հարթ մակերևույթ՝ հայելի, հանգիստ ջուր, հղկված մետաղ | խորդուբորդ մակերևույթ՝ թուղթ, պատ, կտոր, ձյուն |
| զուգահեռ ճառագայթները մնում են զուգահեռ | զուգահեռ ճառագայթները ցրվում են բոլոր ուղղություններով |
| տեսնում ես պատկեր | տեսնում ես հենց մակերևույթը |

Ցրված անդրադարձման շնորհիվ ենք առարկաները տեսնում ցանկացած կողմից։ Սպիտակ թղթի թերթը ցրում է լույսի գրեթե ամբողջը, սև թավիշը՝ գրեթե ոչինչ, ահա թե ինչու է նա սև երևում։

## Հարթ հայելի

Առարկայի կետից եկած լույսն անդրադարձվում է հայելուց և հասնում աչքին այնպես, կարծես եկել է հայելու **հետևի** կետից։ Այդ կետը **պատկերն** է։

Հարթ հայելու պատկերի հատկությունները՝

1. այն **կարծական** է՝ այնտեղ իրականում լույս չի հավաքվում, և էկրանի վրա այն չես բռնի,
2. առարկայի չափի է,
3. հայելու հետևում այնքան հեռու է, որքան առարկան՝ առջևում,
4. **կողմերով շրջված** է՝ աջ ձեռքդ երևում է որպես ձախ, իսկ տեքստը կարդացվում է հակառակ։ Ահա թե ինչու շտապօգնության մեքենաները կրում են հայելային գրությամբ ցուցանակ։

### Կիրառումներ

Սենյակների և խանութների հայելիներ, մեքենայի ներքին և կողային հայելիներ, պերիսկոպ (երկու հայելի $45^\\circ$-ի տակ), անդրադարձնող աստղադիտակների հայելիներ, հեծանիվների և ճանապարհային նշանների լուսանդրադարձիչներ։

### Վարժություններ

1. Ձևակերպիր անդրադարձման օրենքը։
2. Անկման անկյունը $25^\\circ$ է։ Որքա՞ն է անդրադարձման անկյունը և երկու ճառագայթների միջև անկյունը։
3. Ճառագայթն ընկնում է հայելուն նրա մակերևույթին $20^\\circ$ անկյան տակ։ Գտիր անկման անկյունը։
4. Ինչո՞ւ պատը տեսնում ես սենյակի ցանկացած կետից, իսկ դեմքդ՝ միայն հայելու մեջ։
5. Նշիր հարթ հայելու պատկերի չորս հատկությունը։
6. Կանգնած ես հայելուց $0{,}5$ մ հեռու։ Որքա՞ն հեռու է պատկերդ քեզանից։
7. Հայելու մեջ ժամացույցն երևում է որպես $8{:}00$։ Իրականում ժամը քանի՞սն է։
8. Ինչո՞ւ է շտապօգնության մեքենայի գրությունը հայելային։

### Պատասխաններ

1. Ընկնող և անդրադարձած ճառագայթներն ու նորմալը մեկ հարթությունում են, և անդրադարձման անկյունը հավասար է անկման անկյանը։
2. $25^\\circ$, ճառագայթների միջև անկյունը $50^\\circ$ է։
3. $90^\\circ - 20^\\circ = 70^\\circ$։
4. Պատը լույսը ցրված անդրադարձնում է բոլոր ուղղություններով, հայելին՝ հայելային, ուստի դրա փոխարեն պատկեր է տալիս։
5. Կարծական է, նույն չափի, հետևում այնքան հեռու, որքան առարկան՝ առջևում, կողմերով շրջված։
6. $0{,}5 + 0{,}5 = 1$ մ։
7. $4{:}00$ (հայելին ցուցատախտակը շրջում է ձախից աջ)։
8. Որ ներքին հայելու մեջ նայող վարորդը կարդա ճիշտ ուղղությամբ։`,
        ru: `## Закон отражения

Направь узкий пучок на зеркало. Проведи **нормаль** — перпендикуляр к поверхности в точке падения. Тогда

- **угол падения** $\\alpha$ — между падающим лучом и нормалью;
- **угол отражения** $\\beta$ — между отражённым лучом и нормалью.

> Падающий луч, отражённый луч и нормаль лежат в одной плоскости, и $\\beta = \\alpha$.

Луч, падающий **по** нормали $(\\alpha = 0)$, возвращается прямо назад. Если пучок падает под $30^\\circ$ к поверхности зеркала, угол падения равен $90^\\circ - 30^\\circ = 60^\\circ$, и таким же будет угол отражения — любимая ловушка задач.

## Два вида отражения

| Зеркальное отражение | Рассеянное отражение |
|---|---|
| гладкая поверхность: зеркало, спокойная вода, полированный металл | шероховатая: бумага, стена, ткань, снег |
| параллельные лучи остаются параллельными | параллельные лучи расходятся во все стороны |
| видно изображение | видна сама поверхность |

Благодаря рассеянному отражению мы видим предметы с любой стороны. Лист белой бумаги рассеивает почти весь свет, чёрный бархат почти ничего — поэтому он выглядит чёрным.

## Плоское зеркало

Свет от точки предмета отражается от зеркала и попадает в глаз так, как будто пришёл из точки **за** зеркалом. Эта точка — **изображение**.

Свойства изображения в плоском зеркале:

1. оно **мнимое** — свет там на самом деле не собирается, и на экране его не поймать;
2. оно равно предмету по размеру;
3. оно за зеркалом на таком же расстоянии, как предмет перед ним;
4. оно **перевёрнуто слева направо**: правая рука выглядит левой, а текст читается наоборот. Поэтому на машинах скорой помощи надпись зеркальная.

### Применения

Зеркала в комнатах и магазинах, салонное и боковые зеркала автомобиля, перископ (два зеркала под $45^\\circ$), зеркала телескопов-рефлекторов, отражатели на велосипедах и дорожных знаках.

### Упражнения

1. Сформулируй закон отражения.
2. Угол падения $25^\\circ$. Каков угол отражения и угол между двумя лучами?
3. Луч падает на зеркало под $20^\\circ$ к его поверхности. Найди угол падения.
4. Почему стену видно из любой точки комнаты, а своё лицо — только в зеркале?
5. Назови четыре свойства изображения в плоском зеркале.
6. Ты стоишь в $0{,}5$ м от зеркала. На каком расстоянии от тебя твоё изображение?
7. Часы в зеркале показывают то, что выглядит как $8{:}00$. Сколько времени на самом деле?
8. Почему надпись на скорой помощи сделана зеркальной?

### Ответы

1. Падающий и отражённый лучи и нормаль лежат в одной плоскости, и угол отражения равен углу падения.
2. $25^\\circ$; угол между лучами $50^\\circ$.
3. $90^\\circ - 20^\\circ = 70^\\circ$.
4. Стена отражает свет рассеянно во все стороны; зеркало отражает зеркально и поэтому даёт изображение.
5. Мнимое, того же размера, за зеркалом на том же расстоянии, перевёрнуто слева направо.
6. $0{,}5 + 0{,}5 = 1$ м.
7. $4{:}00$ (зеркало переворачивает циферблат слева направо).
8. Чтобы водитель, глядящий в салонное зеркало, прочёл её правильно.`,
      },
      [
        q(t("The law of reflection says that", "Անդրադարձման օրենքն ասում է, որ", "Закон отражения гласит, что"), [
          t("the angle of reflection equals the angle of incidence", "անդրադարձման անկյունը հավասար է անկման անկյանը", "угол отражения равен углу падения"),
          t("the angle of reflection is twice the angle of incidence", "անդրադարձման անկյունն անկման անկյան կրկնապատիկն է", "угол отражения вдвое больше угла падения"),
          t("the two angles add up to 90°", "երկու անկյունների գումարը 90° է", "сумма двух углов равна 90°"),
        ], 0),
        q(t("A ray falls at 30° to the surface of a mirror. The angle of incidence is", "Ճառագայթն ընկնում է հայելու մակերևույթին 30° անկյան տակ։ Անկման անկյունն է", "Луч падает под 30° к поверхности зеркала. Угол падения равен"), [
          t("30°", "30°", "30°"),
          t("60°", "60°", "60°"),
          t("90°", "90°", "90°"),
        ], 1),
        q(t("We see a wall from every point of a room thanks to", "Պատը սենյակի ամեն կետից տեսնում ենք շնորհիվ", "Стену видно из любой точки комнаты благодаря"), [
          t("specular reflection", "հայելային անդրադարձման", "зеркальному отражению"),
          t("refraction", "բեկման", "преломлению"),
          t("diffuse reflection", "ցրված անդրադարձման", "рассеянному отражению"),
        ], 2),
        q(t("The image in a plane mirror is", "Հարթ հայելու պատկերը", "Изображение в плоском зеркале —"), [
          t("virtual and the same size as the object", "կարծական է և առարկայի չափի", "мнимое и равное предмету"),
          t("real and larger", "իրական է և ավելի մեծ", "действительное и больше"),
          t("real and smaller", "իրական է և ավելի փոքր", "действительное и меньше"),
        ], 0),
        q(t("You stand 2 m from a mirror. Your image is behind the mirror at", "Կանգնած ես հայելուց 2 մ հեռու։ Պատկերդ հայելու հետևում է", "Ты стоишь в 2 м от зеркала. Твоё изображение за зеркалом на расстоянии"), [
          t("1 m", "1 մ", "1 м"),
          t("2 m", "2 մ", "2 м"),
          t("4 m", "4 մ", "4 м"),
        ], 1),
        q(t("A plane mirror reverses the object", "Հարթ հայելին առարկան շրջում է", "Плоское зеркало переворачивает предмет"), [
          t("top to bottom", "վերևից ներքև", "сверху вниз"),
          t("not at all", "ընդհանրապես ոչ", "вовсе не переворачивает"),
          t("left to right", "ձախից աջ", "слева направо"),
        ], 2),
      ],
    ),
    lesson(
      "refraction",
      ["Refraction of light", "Լույսի բեկում", "Преломление света"],
      {
        en: ["Describe refraction at the boundary of two media", "Compare the angle of refraction with the angle of incidence for glass and water", "Explain everyday effects: a broken spoon, a shallow-looking pool, a mirage"],
        hy: ["Նկարագրել բեկումն երկու միջավայրերի սահմանին", "Համեմատել բեկման անկյունն անկման անկյան հետ ապակու և ջրի համար", "Բացատրել կենցաղային երևույթներ՝ կտրված գդալ, ծանծաղ թվացող լողավազան, միրաժ"],
        ru: ["Описывать преломление на границе двух сред", "Сравнивать угол преломления с углом падения для стекла и воды", "Объяснять бытовые эффекты: сломанная ложка, кажущийся мелким бассейн, мираж"],
      },
      {
        en: `## A bent beam

Put a pencil in a glass of water and look from the side: it seems broken at the surface. Aim a beam of light at the flat side of a glass block and you see the same thing — the beam changes direction at the boundary.

> **Refraction** is the change of the direction of light when it passes from one transparent medium into another.

The reason is the change of the **speed of light**. In vacuum light travels at $c = 3 \\cdot 10^8$ m/s, in water at about $0.75c$, in glass at about $0.67c$, in diamond at $0.41c$.

## The rule of the angles

Let $\\alpha$ be the angle of incidence and $\\gamma$ the angle of refraction, both measured from the normal.

| Passing | Speed | Angles |
|---|---|---|
| air → water or glass | becomes smaller | $\\gamma < \\alpha$: the ray bends **towards** the normal |
| water or glass → air | becomes larger | $\\gamma > \\alpha$: the ray bends **away** from the normal |
| along the normal $(\\alpha = 0)$ | changes | $\\gamma = 0$: no bending |

Part of the light is always reflected at the boundary as well, which is why a window shows both the street and your own faint image.

## What refraction explains

- **The broken spoon.** Light from the part under water bends on leaving the water, and the eye traces it back along a straight line, so that part looks displaced upward.
- **A pool looks shallower** than it is, for the same reason. The bottom appears at about three quarters of its true depth.
- **A coin seems to rise** when water is poured into the cup that holds it.
- **The Sun is still visible** when it has in fact just set: the atmosphere refracts its light over the horizon.
- **A mirage** in a desert or over a hot road: layers of air of different temperature refract light so strongly that the sky is seen as if reflected on the ground.
- **A rainbow**: refraction in raindrops, which bend the colours of white light by different amounts.

### Total internal reflection

When light goes from glass into air at a large angle, the refracted ray disappears and all the light is reflected back into the glass. This **total internal reflection** keeps the light inside the glass fibres of an optical cable, through which all long-distance internet traffic now travels.

### Exercises

1. What is refraction, and what causes it?
2. A ray passes from air into glass. Is the angle of refraction larger or smaller than the angle of incidence?
3. A ray passes from water into air. Which way does it bend?
4. A ray falls along the normal. What happens to it?
5. Why does a pencil in a glass of water look broken?
6. Why does a pond look shallower than it is?
7. Why can we see the Sun for a few minutes after it has really set?
8. What keeps light inside an optical fibre?

### Answers

1. The change of direction of light at the boundary of two media, caused by the change of its speed.
2. Smaller: the ray bends towards the normal.
3. Away from the normal.
4. It passes straight on without bending.
5. Light from the submerged part is refracted as it leaves the water, so the eye sees it displaced.
6. Light from the bottom is refracted away from the normal, and the eye traces it back to a point higher up.
7. The atmosphere refracts its light over the horizon.
8. Total internal reflection at the walls of the fibre.`,
        hy: `## Ծալվող շիթ

Մատիտը դիր ջրով բաժակի մեջ և նայիր կողքից՝ մակերևույթի մոտ նա կարծես կտրված է։ Լույսի շիթն ուղղիր ապակե զանգվածի հարթ կողմին, և կտեսնես նույնը՝ շիթը սահմանի վրա փոխում է ուղղությունը։

> **Բեկումը** լույսի ուղղության փոփոխությունն է, երբ նա մեկ թափանցիկ միջավայրից անցնում է մյուսը։

Պատճառը **լույսի արագության** փոփոխությունն է։ Վակուումում լույսը տարածվում է $c = 3 \\cdot 10^8$ մ/վ արագությամբ, ջրում՝ մոտ $0{,}75c$, ապակում՝ մոտ $0{,}67c$, ադամանդում՝ $0{,}41c$։

## Անկյունների կանոնը

Թող $\\alpha$-ն անկման անկյունն է, $\\gamma$-ն՝ բեկման անկյունը, երկուսն էլ՝ նորմալից չափված։

| Անցում | Արագություն | Անկյուններ |
|---|---|---|
| օդ → ջուր կամ ապակի | փոքրանում է | $\\gamma < \\alpha$՝ ճառագայթը ծալվում է **դեպի** նորմալը |
| ջուր կամ ապակի → օդ | մեծանում է | $\\gamma > \\alpha$՝ ճառագայթը ծալվում է նորմալից **հեռու** |
| նորմալի երկայնքով $(\\alpha = 0)$ | փոխվում է | $\\gamma = 0$՝ ծալում չկա |

Սահմանի վրա լույսի մի մասը միշտ նաև անդրադարձվում է, ահա թե ինչու պատուհանը ցույց է տալիս և՛ փողոցը, և՛ քո աղոտ պատկերը։

## Ինչ է բացատրում բեկումը

- **Կտրված գդալը։** Ջրի տակ գտնվող մասից եկած լույսը ջրից դուրս գալիս ծալվում է, իսկ աչքը նրան հետ է հետագծում ուղիղ գծով, ուստի այդ մասն երևում է վեր տեղաշարժված։
- **Լողավազանն ավելի ծանծաղ է երևում**, քան է, նույն պատճառով։ Հատակն երևում է իսկական խորության մոտ երեք քառորդի վրա։
- **Մետաղադրամը կարծես բարձրանում է**, երբ նրան պահող բաժակի մեջ ջուր են լցնում։
- **Արեգակը դեռ տեսանելի է**, երբ իրականում նոր է մտել. մթնոլորտը նրա լույսը բեկում է հորիզոնից այն կողմ։
- **Միրաժ** անապատում կամ տաք ճանապարհի վրա՝ տարբեր ջերմաստիճանի օդի շերտերն այնքան ուժեղ են բեկում լույսը, որ երկինքն երևում է ասես գետնին արտացոլված։
- **Ծիածան**՝ բեկում անձրևի կաթիլներում, որոնք սպիտակ լույսի գույները ծալում են տարբեր չափով։

### Լրիվ ներքին անդրադարձում

Երբ լույսն ապակուց օդ է անցնում մեծ անկյան տակ, բեկված ճառագայթն անհետանում է, և ամբողջ լույսն անդրադարձվում է հետ՝ ապակու մեջ։ Այս **լրիվ ներքին անդրադարձումը** լույսը պահում է օպտիկական մալուխի ապակե մանրաթելերի ներսում, որոնցով այսօր անցնում է ամբողջ միջքաղաքային ինտերնետ հոսքը։

### Վարժություններ

1. Ի՞նչ է բեկումը և ի՞նչն է նրա պատճառը։
2. Ճառագայթն օդից անցնում է ապակի։ Բեկման անկյունն անկման անկյունից մե՞ծ է, թե՞ փոքր։
3. Ճառագայթը ջրից անցնում է օդ։ Ո՞ր կողմ է ծալվում։
4. Ճառագայթն ընկնում է նորմալի երկայնքով։ Ի՞նչ է լինում նրան։
5. Ինչո՞ւ է ջրով բաժակի մատիտը կտրված երևում։
6. Ինչո՞ւ է լճակն ավելի ծանծաղ երևում, քան է։
7. Ինչո՞ւ ենք Արեգակը տեսնում մի քանի րոպե այն բանից հետո, երբ նա իրականում մտել է։
8. Ի՞նչն է լույսը պահում օպտիկական մանրաթելի ներսում։

### Պատասխաններ

1. Երկու միջավայրերի սահմանին լույսի ուղղության փոփոխությունը, որի պատճառը նրա արագության փոփոխությունն է։
2. Փոքր՝ ճառագայթը ծալվում է դեպի նորմալը։
3. Նորմալից հեռու։
4. Անցնում է ուղիղ, առանց ծալվելու։
5. Ջրի տակ գտնվող մասից եկած լույսը ջրից դուրս գալիս բեկվում է, ուստի աչքը նրան տեղաշարժված է տեսնում։
6. Հատակից եկած լույսը բեկվում է նորմալից հեռու, և աչքը նրան հետ է հետագծում ավելի վերև գտնվող կետին։
7. Մթնոլորտը նրա լույսը բեկում է հորիզոնից այն կողմ։
8. Մանրաթելի պատերի վրա լրիվ ներքին անդրադարձումը։`,
        ru: `## Изломанный пучок

Опусти карандаш в стакан с водой и посмотри сбоку: у поверхности он кажется сломанным. Направь пучок света на плоскую сторону стеклянного бруска — увидишь то же самое: на границе пучок меняет направление.

> **Преломление** — изменение направления света при переходе из одной прозрачной среды в другую.

Причина — изменение **скорости света**. В вакууме свет идёт со скоростью $c = 3 \\cdot 10^8$ м/с, в воде около $0{,}75c$, в стекле около $0{,}67c$, в алмазе $0{,}41c$.

## Правило углов

Пусть $\\alpha$ — угол падения, $\\gamma$ — угол преломления, оба отсчитаны от нормали.

| Переход | Скорость | Углы |
|---|---|---|
| воздух → вода или стекло | уменьшается | $\\gamma < \\alpha$: луч отклоняется **к** нормали |
| вода или стекло → воздух | увеличивается | $\\gamma > \\alpha$: луч отклоняется **от** нормали |
| по нормали $(\\alpha = 0)$ | меняется | $\\gamma = 0$: отклонения нет |

Часть света на границе всегда и отражается, поэтому окно показывает и улицу, и твоё слабое отражение.

## Что объясняет преломление

- **Сломанная ложка.** Свет от подводной части преломляется, выходя из воды, а глаз продолжает его прямой линией назад, поэтому эта часть кажется сдвинутой вверх.
- **Бассейн кажется более мелким**, чем есть, по той же причине. Дно видно примерно на трёх четвертях истинной глубины.
- **Монета словно поднимается**, когда в чашку с ней наливают воду.
- **Солнце ещё видно**, когда оно фактически уже село: атмосфера преломляет его свет за горизонт.
- **Мираж** в пустыне или над горячей дорогой: слои воздуха разной температуры преломляют свет так сильно, что небо видно как бы отражённым на земле.
- **Радуга**: преломление в капельках дождя, которые отклоняют цвета белого света по-разному.

### Полное внутреннее отражение

Когда свет идёт из стекла в воздух под большим углом, преломлённый луч исчезает и весь свет отражается обратно в стекло. Это **полное внутреннее отражение** держит свет внутри стеклянных волокон оптического кабеля, по которым сегодня идёт весь дальний интернет-трафик.

### Упражнения

1. Что такое преломление и чем оно вызвано?
2. Луч переходит из воздуха в стекло. Угол преломления больше или меньше угла падения?
3. Луч переходит из воды в воздух. Куда он отклоняется?
4. Луч падает по нормали. Что с ним происходит?
5. Почему карандаш в стакане с водой кажется сломанным?
6. Почему пруд кажется более мелким, чем он есть?
7. Почему мы видим Солнце несколько минут после того, как оно действительно село?
8. Что держит свет внутри оптического волокна?

### Ответы

1. Изменение направления света на границе двух сред, вызванное изменением его скорости.
2. Меньше: луч отклоняется к нормали.
3. От нормали.
4. Проходит прямо, не отклоняясь.
5. Свет от подводной части преломляется при выходе из воды, и глаз видит её сдвинутой.
6. Свет от дна отклоняется от нормали, и глаз продолжает его назад в точку выше.
7. Атмосфера преломляет его свет за горизонт.
8. Полное внутреннее отражение от стенок волокна.`,
      },
      [
        q(t("Refraction is caused by the change of", "Բեկման պատճառն է փոփոխությունը", "Преломление вызвано изменением"), [
          t("the speed of light in the new medium", "լույսի արագության՝ նոր միջավայրում", "скорости света в новой среде"),
          t("the colour of light", "լույսի գույնի", "цвета света"),
          t("the brightness of light", "լույսի պայծառության", "яркости света"),
        ], 0),
        q(t("A ray passing from air into water bends", "Օդից ջուր անցնող ճառագայթը ծալվում է", "Луч, переходящий из воздуха в воду, отклоняется"), [
          t("away from the normal", "նորմալից հեռու", "от нормали"),
          t("towards the normal", "դեպի նորմալը", "к нормали"),
          t("not at all", "ընդհանրապես ոչ", "никуда"),
        ], 1),
        q(t("A ray falling along the normal to the surface", "Մակերևույթին նորմալի երկայնքով ընկնող ճառագայթը", "Луч, падающий по нормали к поверхности,"), [
          t("is reflected back", "անդրադարձվում է հետ", "отражается назад"),
          t("bends by 90°", "ծալվում է 90°-ով", "отклоняется на 90°"),
          t("passes straight on", "անցնում է ուղիղ", "проходит прямо"),
        ], 2),
        q(t("A pool looks shallower than it is because of", "Լողավազանն ավելի ծանծաղ է երևում՝ պատճառով", "Бассейн кажется более мелким из-за"), [
          t("refraction of light leaving the water", "ջրից դուրս եկող լույսի բեկման", "преломления света, выходящего из воды"),
          t("the colour of the water", "ջրի գույնի", "цвета воды"),
          t("the shadow of the walls", "պատերի ստվերի", "тени от стен"),
        ], 0),
        q(t("Light inside an optical fibre is kept by", "Օպտիկական մանրաթելի ներսում լույսը պահվում է", "Свет внутри оптического волокна удерживается"), [
          t("diffuse reflection", "ցրված անդրադարձմամբ", "рассеянным отражением"),
          t("total internal reflection", "լրիվ ներքին անդրադարձմամբ", "полным внутренним отражением"),
          t("a magnetic field", "մագնիսական դաշտով", "магнитным полем"),
        ], 1),
        q(t("A rainbow appears because raindrops", "Ծիածանն առաջանում է, քանի որ անձրևի կաթիլները", "Радуга появляется потому, что капли дождя"), [
          t("reflect all colours equally", "բոլոր գույները հավասար արտացոլում են", "отражают все цвета одинаково"),
          t("absorb the blue colour", "կլանում են կապույտ գույնը", "поглощают синий цвет"),
          t("refract the colours of white light by different amounts", "սպիտակ լույսի գույները բեկում են տարբեր չափով", "преломляют цвета белого света по-разному"),
        ], 2),
      ],
    ),
    lesson(
      "lenses",
      ["Lenses; focal length; optical power", "Ոսպնյակներ, կիզակետային հեռավորություն, օպտիկական ուժ", "Линзы; фокусное расстояние; оптическая сила"],
      {
        en: ["Distinguish converging and diverging lenses", "Use the terms optical centre, focus and focal length", "Compute optical power with D = 1/F"],
        hy: ["Տարբերել հավաքող և ցրող ոսպնյակները", "Օգտագործել օպտիկական կենտրոն, կիզակետ և կիզակետային հեռավորություն հասկացությունները", "Հաշվել օպտիկական ուժը D = 1/F բանաձևով"],
        ru: ["Различать собирающие и рассеивающие линзы", "Пользоваться понятиями оптический центр, фокус и фокусное расстояние", "Вычислять оптическую силу по формуле D = 1/F"],
      },
      {
        en: `## Two kinds of lens

A **lens** is a transparent body bounded by two curved surfaces (or one curved and one flat). Refraction happens twice, at the entry and at the exit, and the result is that the lens changes the direction of a whole beam at once.

| Converging (convex) lens | Diverging (concave) lens |
|---|---|
| thicker in the middle | thinner in the middle |
| a parallel beam is gathered to one point | a parallel beam is spread apart |
| can burn paper in the Sun | can never gather light |
| used in magnifiers, cameras, long-sight glasses | used in short-sight glasses, viewfinders |

## Words to know

- **Principal axis** — the straight line through the centres of both surfaces.
- **Optical centre** $O$ — the middle of the lens on that axis; a ray through it goes on almost without bending.
- **Principal focus** $F$ — the point on the axis where a beam parallel to the axis is gathered by a converging lens. There are two foci, one on each side, at equal distances.
- **Focal length** $F$ — the distance from the optical centre to the focus, in metres.

A diverging lens has a **virtual** focus: the outgoing rays only *seem* to come from a point on the near side.

## Optical power

The **optical power** of a lens is

$$D = \\frac{1}{F}$$

measured in **dioptres** (D): $1$ D is the power of a lens with a focal length of $1$ m. The shorter the focal length, the more strongly the lens bends light and the larger its power.

By agreement the power of a converging lens is **positive** and that of a diverging lens **negative**. That is why a prescription for glasses reads, for example, $+2$ D for long sight or $-1.5$ D for short sight.

## Worked examples

> A lens has $F = 25$ cm. Find its optical power.

$$F = 0.25\\ \\text{m},\\qquad D = \\frac{1}{0.25} = 4\\ \\text{D}$$

> Glasses are marked $-2.5$ D. Find the focal length and the kind of lens.

$$F = \\frac{1}{-2.5} = -0.4\\ \\text{m}$$

A diverging lens with a focal length of $40$ cm.

### Exercises

1. How can you tell a converging lens from a diverging one by touch?
2. What is the principal focus of a lens?
3. Where does a ray through the optical centre go?
4. A lens has $F = 50$ cm. Find $D$.
5. A lens has $D = 5$ D. Find $F$ in centimetres.
6. Which lens has the larger power: one of $F = 10$ cm or one of $F = 40$ cm?
7. Glasses are marked $+3$ D. Which kind of lens is it and what is $F$?
8. Why can a converging lens set paper alight in the Sun but a diverging one cannot?

### Answers

1. A converging lens is thicker in the middle, a diverging one thinner.
2. The point where a beam parallel to the principal axis is gathered.
3. Straight on, almost without changing direction.
4. $D = 1/0.5 = 2$ D.
5. $F = 1/5 = 0.2$ m $= 20$ cm.
6. The one with $F = 10$ cm: $10$ D against $2.5$ D.
7. A converging lens; $F = 1/3 \\approx 0.33$ m.
8. It gathers the Sun's energy into a tiny spot at the focus; a diverging lens spreads it out.`,
        hy: `## Ոսպնյակի երկու տեսակ

**Ոսպնյակը** թափանցիկ մարմին է՝ սահմանափակված երկու կոր մակերևույթով (կամ մեկ կորով և մեկ հարթով)։ Բեկումը տեղի է ունենում երկու անգամ՝ մտնելիս և դուրս գալիս, և արդյունքում ոսպնյակը միանգամից փոխում է ամբողջ շիթի ուղղությունը։

| Հավաքող (ուռուցիկ) ոսպնյակ | Ցրող (գոգավոր) ոսպնյակ |
|---|---|
| մեջտեղում ավելի հաստ | մեջտեղում ավելի բարակ |
| զուգահեռ շիթը հավաքվում է մեկ կետում | զուգահեռ շիթը ցրվում է |
| արևի տակ կարող է թուղթ վառել | երբեք չի կարող լույս հավաքել |
| օգտագործվում է խոշորացույցներում, ֆոտոխցիկներում, հեռատեսության ակնոցներում | օգտագործվում է մոտատեսության ակնոցներում, տեսադաշտերում |

## Հասկացություններ

- **Գլխավոր օպտիկական առանցք**՝ երկու մակերևույթների կենտրոններով անցնող ուղիղը։
- **Օպտիկական կենտրոն** $O$՝ ոսպնյակի մեջտեղն այդ առանցքի վրա. նրանով անցնող ճառագայթը գնում է գրեթե առանց ծալվելու։
- **Գլխավոր կիզակետ** $F$՝ առանցքի կետը, որտեղ հավաքող ոսպնյակը հավաքում է առանցքին զուգահեռ շիթը։ Կիզակետներն երկուսն են՝ մեկը յուրաքանչյուր կողմում, հավասար հեռավորությունների վրա։
- **Կիզակետային հեռավորություն** $F$՝ օպտիկական կենտրոնից կիզակետ հեռավորությունը՝ մետրերով։

Ցրող ոսպնյակն ունի **կարծական** կիզակետ. դուրս եկող ճառագայթները միայն *կարծես* գալիս են մոտիկ կողմի կետից։

## Օպտիկական ուժ

Ոսպնյակի **օպտիկական ուժն** է

$$D = \\frac{1}{F}$$

չափվում է **դիոպտրիաներով** (դպտր)՝ $1$ դպտր-ը $1$ մ կիզակետային հեռավորություն ունեցող ոսպնյակի ուժն է։ Ինչքան կարճ է կիզակետային հեռավորությունը, այնքան ուժեղ է ոսպնյակը ծալում լույսը և այնքան մեծ է նրա ուժը։

Համաձայնությամբ հավաքող ոսպնյակի ուժը **դրական** է, ցրողի՝ **բացասական**։ Ահա թե ինչու ակնոցի դեղատոմսում գրված է, օրինակ, $+2$ դպտր՝ հեռատեսության, կամ $-1{,}5$ դպտր՝ մոտատեսության համար։

## Լուծված օրինակներ

> Ոսպնյակն ունի $F = 25$ սմ։ Գտիր նրա օպտիկական ուժը։

$$F = 0{,}25\\ \\text{մ},\\qquad D = \\frac{1}{0{,}25} = 4\\ \\text{դպտր}$$

> Ակնոցի վրա գրված է $-2{,}5$ դպտր։ Գտիր կիզակետային հեռավորությունը և ոսպնյակի տեսակը։

$$F = \\frac{1}{-2{,}5} = -0{,}4\\ \\text{մ}$$

Ցրող ոսպնյակ՝ $40$ սմ կիզակետային հեռավորությամբ։

### Վարժություններ

1. Ինչպե՞ս կարելի է հպումով տարբերել հավաքող ոսպնյակը ցրողից։
2. Ի՞նչ է ոսպնյակի գլխավոր կիզակետը։
3. Ո՞ւր է գնում օպտիկական կենտրոնով անցնող ճառագայթը։
4. Ոսպնյակն ունի $F = 50$ սմ։ Գտիր $D$-ն։
5. Ոսպնյակն ունի $D = 5$ դպտր։ Գտիր $F$-ը սանտիմետրերով։
6. Ո՞ր ոսպնյակն ունի ավելի մեծ ուժ՝ $F = 10$ սմ, թե՞ $F = 40$ սմ։
7. Ակնոցի վրա գրված է $+3$ դպտր։ Ի՞նչ տեսակի ոսպնյակ է և որքա՞ն է $F$-ը։
8. Ինչո՞ւ հավաքող ոսպնյակն արևի տակ կարող է թուղթ վառել, իսկ ցրողը՝ ոչ։

### Պատասխաններ

1. Հավաքող ոսպնյակը մեջտեղում ավելի հաստ է, ցրողը՝ ավելի բարակ։
2. Կետը, որտեղ հավաքվում է գլխավոր առանցքին զուգահեռ շիթը։
3. Ուղիղ առաջ՝ գրեթե առանց ուղղությունը փոխելու։
4. $D = 1/0{,}5 = 2$ դպտր։
5. $F = 1/5 = 0{,}2$ մ $= 20$ սմ։
6. $F = 10$ սմ ունեցողը՝ $10$ դպտր՝ $2{,}5$ դպտր-ի դիմաց։
7. Հավաքող ոսպնյակ, $F = 1/3 \\approx 0{,}33$ մ։
8. Նա Արեգակի էներգիան հավաքում է կիզակետի փոքրիկ բծում, ցրող ոսպնյակը նրան ցրում է։`,
        ru: `## Два вида линз

**Линза** — прозрачное тело, ограниченное двумя кривыми поверхностями (или одной кривой и одной плоской). Преломление происходит дважды — на входе и на выходе, и в итоге линза меняет направление целого пучка сразу.

| Собирающая (выпуклая) линза | Рассеивающая (вогнутая) линза |
|---|---|
| толще в середине | тоньше в середине |
| параллельный пучок собирается в одну точку | параллельный пучок расходится |
| на солнце может зажечь бумагу | никогда не собирает свет |
| в лупах, фотоаппаратах, очках при дальнозоркости | в очках при близорукости, в видоискателях |

## Понятия

- **Главная оптическая ось** — прямая через центры обеих поверхностей.
- **Оптический центр** $O$ — середина линзы на этой оси; луч через него идёт почти без отклонения.
- **Главный фокус** $F$ — точка на оси, в которой собирающая линза собирает пучок, параллельный оси. Фокусов два, по одному с каждой стороны, на равных расстояниях.
- **Фокусное расстояние** $F$ — расстояние от оптического центра до фокуса, в метрах.

У рассеивающей линзы фокус **мнимый**: выходящие лучи лишь *кажутся* идущими из точки на ближней стороне.

## Оптическая сила

**Оптическая сила** линзы равна

$$D = \\frac{1}{F}$$

и измеряется в **диоптриях** (дптр): $1$ дптр — сила линзы с фокусным расстоянием $1$ м. Чем короче фокусное расстояние, тем сильнее линза отклоняет свет и тем больше её сила.

По соглашению сила собирающей линзы **положительна**, а рассеивающей **отрицательна**. Поэтому в рецепте на очки пишут, например, $+2$ дптр при дальнозоркости или $-1{,}5$ дптр при близорукости.

## Разобранные примеры

> У линзы $F = 25$ см. Найди её оптическую силу.

$$F = 0{,}25\\ \\text{м},\\qquad D = \\frac{1}{0{,}25} = 4\\ \\text{дптр}$$

> На очках написано $-2{,}5$ дптр. Найди фокусное расстояние и вид линзы.

$$F = \\frac{1}{-2{,}5} = -0{,}4\\ \\text{м}$$

Рассеивающая линза с фокусным расстоянием $40$ см.

### Упражнения

1. Как на ощупь отличить собирающую линзу от рассеивающей?
2. Что такое главный фокус линзы?
3. Куда идёт луч, проходящий через оптический центр?
4. У линзы $F = 50$ см. Найди $D$.
5. У линзы $D = 5$ дптр. Найди $F$ в сантиметрах.
6. У какой линзы сила больше: с $F = 10$ см или с $F = 40$ см?
7. На очках написано $+3$ дптр. Какая это линза и чему равно $F$?
8. Почему собирающая линза на солнце может зажечь бумагу, а рассеивающая нет?

### Ответы

1. Собирающая линза толще в середине, рассеивающая тоньше.
2. Точка, в которой собирается пучок, параллельный главной оси.
3. Прямо, почти не меняя направления.
4. $D = 1/0{,}5 = 2$ дптр.
5. $F = 1/5 = 0{,}2$ м $= 20$ см.
6. С $F = 10$ см: $10$ дптр против $2{,}5$ дптр.
7. Собирающая; $F = 1/3 \\approx 0{,}33$ м.
8. Она собирает энергию Солнца в крошечное пятно в фокусе; рассеивающая её разбрасывает.`,
      },
      [
        q(t("A converging lens is", "Հավաքող ոսպնյակն է", "Собирающая линза"), [
          t("thicker in the middle", "մեջտեղում ավելի հաստ", "толще в середине"),
          t("thinner in the middle", "մեջտեղում ավելի բարակ", "тоньше в середине"),
          t("always flat", "միշտ հարթ", "всегда плоская"),
        ], 0),
        q(t("The optical power of a lens with F = 0.5 m is", "F = 0,5 մ ոսպնյակի օպտիկական ուժն է", "Оптическая сила линзы с F = 0,5 м равна"), [
          t("0.5 D", "0,5 դպտր", "0,5 дптр"),
          t("2 D", "2 դպտր", "2 дптр"),
          t("5 D", "5 դպտր", "5 дптр"),
        ], 1),
        q(t("The unit of optical power is", "Օպտիկական ուժի միավորն է", "Единица оптической силы —"), [
          t("the metre", "մետրը", "метр"),
          t("the watt", "վատտը", "ватт"),
          t("the dioptre", "դիոպտրիան", "диоптрия"),
        ], 2),
        q(t("A lens marked -2 D is", "-2 դպտր նշված ոսպնյակը", "Линза, помеченная -2 дптр, —"), [
          t("diverging with F = 0.5 m", "ցրող է՝ F = 0,5 մ", "рассеивающая с F = 0,5 м"),
          t("converging with F = 2 m", "հավաքող է՝ F = 2 մ", "собирающая с F = 2 м"),
          t("converging with F = 0.5 m", "հավաքող է՝ F = 0,5 մ", "собирающая с F = 0,5 м"),
        ], 0),
        q(t("A ray through the optical centre of a lens", "Ոսպնյակի օպտիկական կենտրոնով անցնող ճառագայթը", "Луч, идущий через оптический центр линзы,"), [
          t("is reflected", "անդրադարձվում է", "отражается"),
          t("goes on almost without bending", "գնում է գրեթե առանց ծալվելու", "идёт почти без отклонения"),
          t("goes to the focus", "գնում է կիզակետ", "идёт в фокус"),
        ], 1),
        q(t("Glasses for short sight use", "Մոտատեսության ակնոցներում օգտագործվում են", "В очках при близорукости применяют"), [
          t("flat glass", "հարթ ապակի", "плоское стекло"),
          t("converging lenses", "հավաքող ոսպնյակներ", "собирающие линзы"),
          t("diverging lenses", "ցրող ոսպնյակներ", "рассеивающие линзы"),
        ], 2),
      ],
    ),
    lesson(
      "lens-images",
      ["Images formed by lenses", "Ոսպնյակով ստացվող պատկերներ", "Изображения, даваемые линзой"],
      {
        en: ["Construct an image with the two standard rays", "Tell when the image is real or virtual, enlarged or reduced, upright or inverted", "Connect each case with a device: projector, camera, magnifier"],
        hy: ["Կառուցել պատկերն երկու ստանդարտ ճառագայթով", "Որոշել՝ պատկերն իրակա՞ն է, թե՞ կարծական, խոշորացա՞ծ, թե՞ փոքրացած, ուղի՞ղ, թե՞ շրջված", "Ամեն դեպքը կապել սարքի հետ՝ պրոյեկտոր, ֆոտոխցիկ, խոշորացույց"],
        ru: ["Строить изображение двумя стандартными лучами", "Определять, действительное изображение или мнимое, увеличенное или уменьшенное, прямое или перевёрнутое", "Связывать каждый случай с прибором: проектор, фотоаппарат, лупа"],
      },
      {
        en: `## Two rays are enough

To find the image of a point with a converging lens, draw two rays from it:

1. a ray **parallel to the principal axis** — after the lens it passes through the focus $F$;
2. a ray **through the optical centre** $O$ — it goes on without bending.

Where the two rays meet is the image of that point. For an object standing on the axis it is enough to construct the image of its top.

## The four cases for a converging lens

Let $d$ be the distance from the object to the lens.

| Position of the object | Image | Where it is used |
|---|---|---|
| $d > 2F$ | real, inverted, reduced | camera, eye |
| $d = 2F$ | real, inverted, the same size | copying a drawing |
| $F < d < 2F$ | real, inverted, enlarged | projector, cinema, microscope objective |
| $d < F$ | **virtual**, upright, enlarged | magnifying glass |

At $d = F$ the rays come out parallel and there is no image at all: this is how a searchlight or a lighthouse makes a parallel beam.

A **real** image is made by rays that really meet, so it can be caught on a screen. A **virtual** image is only the point from which the rays *seem* to come, and a screen there shows nothing.

A diverging lens always gives a virtual, upright, reduced image, wherever the object is.

## Why a film is upside down in the projector

In a cinema the film is between $F$ and $2F$ of the lens, so the image on the screen is real, enlarged and **inverted**. For the audience to see it the right way up, the film is put into the projector upside down.

## Worked example

> A lamp stands $60$ cm from a lens of focal length $20$ cm. What kind of image appears?

$2F = 40$ cm, and $60 > 40$, so $d > 2F$: the image is real, inverted and reduced, and can be caught on a screen on the far side.

### Exercises

1. Which two rays are used to construct an image in a converging lens?
2. What is the difference between a real and a virtual image?
3. An object is at $d > 2F$. Describe the image.
4. An object is between $F$ and $2F$. Describe the image and name a device that uses this case.
5. An object is nearer than $F$. Describe the image.
6. What happens when the object is exactly at the focus?
7. Why is a slide put into a projector upside down?
8. A lens has $F = 10$ cm, and the object is $15$ cm away. Real or virtual? Enlarged or reduced?

### Answers

1. One parallel to the axis (it passes through the focus afterwards) and one through the optical centre.
2. A real image is made where rays really meet and can be caught on a screen; a virtual one only seems to be there.
3. Real, inverted, reduced.
4. Real, inverted, enlarged; a projector or a cinema (also a microscope objective).
5. Virtual, upright, enlarged — a magnifying glass.
6. The rays leave the lens parallel and no image is formed.
7. The image on the screen is inverted, so the slide must be inverted too.
8. $F < 15 < 2F = 20$, so the image is real, inverted and enlarged.`,
        hy: `## Երկու ճառագայթը բավական է

Հավաքող ոսպնյակով կետի պատկերը գտնելու համար նրանից տար երկու ճառագայթ՝

1. **գլխավոր առանցքին զուգահեռ** ճառագայթ՝ ոսպնյակից հետո այն անցնում է $F$ կիզակետով,
2. **օպտիկական կենտրոնով** $O$ անցնող ճառագայթ՝ նա գնում է առանց ծալվելու։

Որտեղ երկու ճառագայթները հանդիպում են, այդ կետի պատկերն է։ Առանցքի վրա կանգնած առարկայի համար բավական է կառուցել նրա գագաթի պատկերը։

## Հավաքող ոսպնյակի չորս դեպքը

Թող $d$-ն առարկայից ոսպնյակ հեռավորությունն է։

| Առարկայի դիրքը | Պատկերը | Որտեղ է օգտագործվում |
|---|---|---|
| $d > 2F$ | իրական, շրջված, փոքրացած | ֆոտոխցիկ, աչք |
| $d = 2F$ | իրական, շրջված, նույն չափի | նկարի պատճենում |
| $F < d < 2F$ | իրական, շրջված, խոշորացած | պրոյեկտոր, կինո, մանրադիտակի օբյեկտիվ |
| $d < F$ | **կարծական**, ուղիղ, խոշորացած | խոշորացույց |

$d = F$-ի դեպքում ճառագայթները դուրս են գալիս զուգահեռ, և պատկեր ընդհանրապես չկա. այսպես է լուսարձակը կամ փարոսը ստեղծում զուգահեռ շիթ։

**Իրական** պատկերը ստեղծվում է իրականում հանդիպող ճառագայթներով, ուստի կարելի է բռնել էկրանի վրա։ **Կարծական** պատկերը միայն այն կետն է, որտեղից ճառագայթները *կարծես* գալիս են, և այնտեղ դրված էկրանն ոչինչ ցույց չի տալիս։

Ցրող ոսպնյակը միշտ տալիս է կարծական, ուղիղ, փոքրացած պատկեր, որտեղ էլ լինի առարկան։

## Ինչու է ֆիլմը շրջված պրոյեկտորում

Կինոյում ֆիլմն ոսպնյակի $F$-ի և $2F$-ի միջև է, ուստի էկրանի պատկերն իրական է, խոշորացած և **շրջված**։ Որ հանդիսատեսը տեսնի ճիշտ ուղղությամբ, ֆիլմը պրոյեկտորի մեջ դրվում է շրջված։

## Լուծված օրինակ

> Լամպը կանգնած է $20$ սմ կիզակետային հեռավորություն ունեցող ոսպնյակից $60$ սմ հեռու։ Ի՞նչ պատկեր կստացվի։

$2F = 40$ սմ, և $60 > 40$, ուստի $d > 2F$՝ պատկերն իրական է, շրջված և փոքրացած, և կարելի է բռնել հակառակ կողմի էկրանին։

### Վարժություններ

1. Ո՞ր երկու ճառագայթն են օգտագործվում հավաքող ոսպնյակում պատկեր կառուցելու համար։
2. Ո՞րն է տարբերությունն իրական և կարծական պատկերի միջև։
3. Առարկան $d > 2F$-ի դեպքում է։ Նկարագրիր պատկերը։
4. Առարկան $F$-ի և $2F$-ի միջև է։ Նկարագրիր պատկերը և անվանիր այս դեպքն օգտագործող սարք։
5. Առարկան $F$-ից ավելի մոտ է։ Նկարագրիր պատկերը։
6. Ի՞նչ է լինում, երբ առարկան ճիշտ կիզակետում է։
7. Ինչո՞ւ է սլայդը պրոյեկտորի մեջ դրվում շրջված։
8. Ոսպնյակն ունի $F = 10$ սմ, առարկան $15$ սմ հեռու է։ Իրակա՞ն, թե՞ կարծական։ Խոշորացա՞ծ, թե՞ փոքրացած։

### Պատասխաններ

1. Առանցքին զուգահեռ մեկը (որը հետո անցնում է կիզակետով) և օպտիկական կենտրոնով անցնողը։
2. Իրական պատկերը ստեղծվում է այնտեղ, որտեղ ճառագայթներն իրականում հանդիպում են, և կարելի է բռնել էկրանին, կարծականը միայն կարծես այնտեղ է։
3. Իրական, շրջված, փոքրացած։
4. Իրական, շրջված, խոշորացած, պրոյեկտոր կամ կինո (նաև՝ մանրադիտակի օբյեկտիվ)։
5. Կարծական, ուղիղ, խոշորացած՝ խոշորացույց։
6. Ճառագայթներն ոսպնյակից դուրս են գալիս զուգահեռ, և պատկեր չի առաջանում։
7. Էկրանի պատկերը շրջված է, ուստի սլայդը նույնպես պետք է շրջված լինի։
8. $F < 15 < 2F = 20$, ուստի պատկերն իրական է, շրջված և խոշորացած։`,
        ru: `## Двух лучей достаточно

Чтобы найти изображение точки в собирающей линзе, проведи из неё два луча:

1. луч, **параллельный главной оси** — после линзы он проходит через фокус $F$;
2. луч **через оптический центр** $O$ — он идёт без отклонения.

Там, где два луча встретятся, и есть изображение этой точки. Для предмета, стоящего на оси, достаточно построить изображение его вершины.

## Четыре случая для собирающей линзы

Пусть $d$ — расстояние от предмета до линзы.

| Положение предмета | Изображение | Где применяется |
|---|---|---|
| $d > 2F$ | действительное, перевёрнутое, уменьшенное | фотоаппарат, глаз |
| $d = 2F$ | действительное, перевёрнутое, того же размера | копирование чертежа |
| $F < d < 2F$ | действительное, перевёрнутое, увеличенное | проектор, кино, объектив микроскопа |
| $d < F$ | **мнимое**, прямое, увеличенное | лупа |

При $d = F$ лучи выходят параллельно, и изображения нет вовсе: так прожектор или маяк создаёт параллельный пучок.

**Действительное** изображение создают лучи, которые действительно сходятся, поэтому его можно поймать на экран. **Мнимое** изображение — лишь точка, из которой лучи *кажутся* исходящими, и экран там ничего не покажет.

Рассеивающая линза всегда даёт мнимое, прямое, уменьшенное изображение, где бы ни находился предмет.

## Почему плёнка в проекторе перевёрнута

В кино плёнка находится между $F$ и $2F$ линзы, поэтому изображение на экране действительное, увеличенное и **перевёрнутое**. Чтобы зрители видели его правильно, плёнку вставляют в проектор перевёрнутой.

## Разобранный пример

> Лампа стоит в $60$ см от линзы с фокусным расстоянием $20$ см. Какое получится изображение?

$2F = 40$ см, и $60 > 40$, значит $d > 2F$: изображение действительное, перевёрнутое и уменьшенное, его можно поймать на экран с другой стороны.

### Упражнения

1. Какие два луча используют для построения изображения в собирающей линзе?
2. Чем действительное изображение отличается от мнимого?
3. Предмет находится при $d > 2F$. Опиши изображение.
4. Предмет между $F$ и $2F$. Опиши изображение и назови прибор, использующий этот случай.
5. Предмет ближе, чем $F$. Опиши изображение.
6. Что происходит, когда предмет точно в фокусе?
7. Почему слайд вставляют в проектор перевёрнутым?
8. У линзы $F = 10$ см, предмет в $15$ см. Действительное или мнимое? Увеличенное или уменьшенное?

### Ответы

1. Параллельный оси (после линзы он идёт через фокус) и идущий через оптический центр.
2. Действительное возникает там, где лучи реально сходятся, и его можно поймать на экран; мнимое лишь кажется существующим.
3. Действительное, перевёрнутое, уменьшенное.
4. Действительное, перевёрнутое, увеличенное; проектор или кино (а также объектив микроскопа).
5. Мнимое, прямое, увеличенное — лупа.
6. Лучи выходят из линзы параллельно, и изображение не образуется.
7. Изображение на экране перевёрнуто, поэтому и слайд должен быть перевёрнут.
8. $F < 15 < 2F = 20$, значит изображение действительное, перевёрнутое и увеличенное.`,
      },
      [
        q(t("To construct an image in a lens you use a ray parallel to the axis and a ray", "Ոսպնյակում պատկեր կառուցելու համար օգտագործում են առանցքին զուգահեռ ճառագայթ և ճառագայթ", "Для построения изображения в линзе берут луч, параллельный оси, и луч"), [
          t("through the optical centre", "օպտիկական կենտրոնով", "через оптический центр"),
          t("along the edge of the lens", "ոսպնյակի եզրով", "по краю линзы"),
          t("reflected from the lens", "ոսպնյակից անդրադարձած", "отражённый от линзы"),
        ], 0),
        q(t("A magnifying glass shows an image that is", "Խոշորացույցը ցույց է տալիս պատկեր, որը", "Лупа даёт изображение"), [
          t("real and inverted", "իրական է և շրջված", "действительное и перевёрнутое"),
          t("virtual, upright and enlarged", "կարծական է, ուղիղ և խոշորացած", "мнимое, прямое и увеличенное"),
          t("real and reduced", "իրական է և փոքրացած", "действительное и уменьшенное"),
        ], 1),
        q(t("An object at d > 2F of a converging lens gives an image that is", "Հավաքող ոսպնյակի d > 2F դեպքում առարկան տալիս է պատկեր, որը", "Предмет при d > 2F собирающей линзы даёт изображение"), [
          t("virtual and enlarged", "կարծական է և խոշորացած", "мнимое и увеличенное"),
          t("real and enlarged", "իրական է և խոշորացած", "действительное и увеличенное"),
          t("real, inverted and reduced", "իրական է, շրջված և փոքրացած", "действительное, перевёрнутое и уменьшенное"),
        ], 2),
        q(t("A projector works with the object placed", "Պրոյեկտորն աշխատում է, երբ առարկան դրված է", "Проектор работает, когда предмет помещён"), [
          t("between F and 2F", "F-ի և 2F-ի միջև", "между F и 2F"),
          t("nearer than F", "F-ից ավելի մոտ", "ближе, чем F"),
          t("much farther than 2F", "2F-ից շատ հեռու", "намного дальше 2F"),
        ], 0),
        q(t("If the object is exactly at the focus, the rays after the lens are", "Եթե առարկան ճիշտ կիզակետում է, ոսպնյակից հետո ճառագայթները", "Если предмет точно в фокусе, лучи после линзы"), [
          t("gathered at one point", "հավաքվում են մեկ կետում", "собираются в одну точку"),
          t("parallel, so there is no image", "զուգահեռ են, ուստի պատկեր չկա", "параллельны, и изображения нет"),
          t("reflected back", "անդրադարձվում են հետ", "отражаются назад"),
        ], 1),
        q(t("A diverging lens always gives an image that is", "Ցրող ոսպնյակը միշտ տալիս է պատկեր, որը", "Рассеивающая линза всегда даёт изображение"), [
          t("real and enlarged", "իրական է և խոշորացած", "действительное и увеличенное"),
          t("real and inverted", "իրական է և շրջված", "действительное и перевёрнутое"),
          t("virtual, upright and reduced", "կարծական է, ուղիղ և փոքրացած", "мнимое, прямое и уменьшенное"),
        ], 2),
      ],
    ),
    lesson(
      "eye-vision",
      ["The eye and vision; glasses", "Աչք և տեսողություն, ակնոց", "Глаз и зрение; очки"],
      {
        en: ["Name the parts of the eye and their optical roles", "Explain accommodation and the nearest point of clear vision", "Explain short and long sight and the lenses that correct them"],
        hy: ["Անվանել աչքի մասերը և նրանց օպտիկական դերը", "Բացատրել հարմարվողականությունը և պարզ տեսողության մոտակա կետը", "Բացատրել մոտատեսությունն ու հեռատեսությունը և դրանք ուղղող ոսպնյակները"],
        ru: ["Называть части глаза и их оптическую роль", "Объяснять аккомодацию и ближайшую точку ясного зрения", "Объяснять близорукость и дальнозоркость и линзы, их исправляющие"],
      },
      {
        en: `## The eye as an optical instrument

| Part | What it does |
|---|---|
| Cornea and the transparent liquids | most of the refraction |
| Iris with the pupil | changes the opening, so less light enters in bright surroundings |
| Lens (crystalline) | a converging lens whose curvature the muscles can change |
| Retina | the screen, with about $130$ million light-sensitive cells |
| Optic nerve | carries the signals to the brain |

The eye works like a camera: the lens gives a **real, inverted, reduced** image on the retina. The brain learns from the first months of life to see that image the right way up.

## Accommodation

To see things at different distances sharply, the muscles squeeze the lens and change its focal length. This is **accommodation**.

- The **far point** of a healthy eye is at infinity: a relaxed eye sees distant objects sharply.
- The **nearest point of clear vision** is about $10$ cm for a child and $25$ cm for an adult; the standard **distance of clear vision** for reading is taken as $25$ cm.

Looking at a screen or a book for hours keeps the muscles tense. Look at something far away every twenty minutes, keep a book at $30$–$40$ cm and work in good light.

## Two common defects

**Short sight (myopia).** The eye is too long, or the lens refracts too strongly, so the image of a distant object falls *in front of* the retina. Distant things look blurred. The remedy is a **diverging** lens, with a negative power, which spreads the beam a little before it enters the eye.

**Long sight (hypermetropia).** The eye is too short, or the lens too weak, so the image falls *behind* the retina and near things are blurred. The remedy is a **converging** lens with a positive power. With age the lens loses its flexibility, so almost everyone needs reading glasses after about forty-five.

| Defect | Image falls | Correcting lens | Prescription |
|---|---|---|---|
| Short sight | in front of the retina | diverging | $-1$ D, $-2.5$ D … |
| Long sight | behind the retina | converging | $+1$ D, $+2$ D … |

## Two eyes

Each eye sees a slightly different picture, and the brain uses the difference to judge distance. That is **stereoscopic** vision; it is also the principle of $3$D films, which send a different image to each eye.

### Exercises

1. Name the part of the eye that plays the role of a screen.
2. What kind of image forms on the retina?
3. What is accommodation and which part of the eye performs it?
4. What is the standard distance of clear vision?
5. In short sight, where does the image of a distant object fall, and which lens corrects it?
6. In long sight, where does it fall, and which lens corrects it?
7. Glasses are marked $-1.5$ D. Which defect do they correct?
8. Why do we judge distance better with two eyes than with one?

### Answers

1. The retina.
2. Real, inverted and reduced.
3. The change of the curvature of the lens by the muscles, so that objects at different distances are sharp.
4. About $25$ cm.
5. In front of the retina; a diverging lens.
6. Behind the retina; a converging lens.
7. Short sight (the power is negative, so the lens is diverging).
8. The two eyes give slightly different pictures, and the brain uses the difference to estimate distance.`,
        hy: `## Աչքն որպես օպտիկական սարք

| Մաս | Ինչ է անում |
|---|---|
| Եղջերաթաղանթ և թափանցիկ հեղուկներ | բեկման մեծ մասը |
| Ծիածանաթաղանթ՝ բիբով | փոխում է բացվածքը, որ պայծառ միջավայրում ավելի քիչ լույս մտնի |
| Բյուրեղյա ոսպնյակ | հավաքող ոսպնյակ, որի կորությունը մկանները կարող են փոխել |
| Ցանցաթաղանթ | էկրանը՝ մոտ $130$ միլիոն լուսազգայուն բջիջով |
| Տեսողական նյարդ | ազդանշանները տանում է ուղեղ |

Աչքն աշխատում է ֆոտոխցիկի նման. ոսպնյակը ցանցաթաղանթի վրա տալիս է **իրական, շրջված, փոքրացած** պատկեր։ Ուղեղը կյանքի առաջին ամիսներից սովորում է այդ պատկերը տեսնել ճիշտ ուղղությամբ։

## Հարմարվողականություն

Տարբեր հեռավորությունների առարկաները պարզ տեսնելու համար մկանները սեղմում են ոսպնյակը և փոխում նրա կիզակետային հեռավորությունը։ Սա **հարմարվողականությունն** է։

- Առողջ աչքի **հեռավոր կետը** անվերջությունում է. հանգիստ աչքը հեռավոր առարկաները տեսնում է պարզ։
- **Պարզ տեսողության մոտակա կետը** երեխայի համար մոտ $10$ սմ է, չափահասի՝ $25$ սմ, իսկ ընթերցանության **պարզ տեսողության հեռավորությունը** ընդունված է $25$ սմ։

Ժամերով էկրանին կամ գրքին նայելը մկանները լարված է պահում։ Ամեն քսան րոպեն մեկ նայիր հեռու, գիրքը պահիր $30$–$40$ սմ հեռու և աշխատիր լավ լուսավորության տակ։

## Երկու տարածված արատ

**Մոտատեսություն։** Աչքը չափազանց երկար է, կամ ոսպնյակը չափազանց ուժեղ է բեկում, ուստի հեռավոր առարկայի պատկերն ընկնում է ցանցաթաղանթի *առջև*։ Հեռավոր առարկաները լղոզված են երևում։ Ուղղումը **ցրող** ոսպնյակն է՝ բացասական ուժով, որը շիթը մի քիչ ցրում է աչքին մտնելուց առաջ։

**Հեռատեսություն։** Աչքը չափազանց կարճ է, կամ ոսպնյակը՝ չափազանց թույլ, ուստի պատկերն ընկնում է ցանցաթաղանթի *հետևում*, և մոտիկ առարկաները լղոզված են։ Ուղղումը **հավաքող** ոսպնյակն է՝ դրական ուժով։ Տարիքի հետ ոսպնյակը կորցնում է ճկունությունը, ուստի մոտ քառասունհինգից հետո գրեթե բոլորին պետք են ընթերցանության ակնոցներ։

| Արատ | Պատկերն ընկնում է | Ուղղող ոսպնյակ | Դեղատոմս |
|---|---|---|---|
| Մոտատեսություն | ցանցաթաղանթի առջև | ցրող | $-1$ դպտր, $-2{,}5$ դպտր … |
| Հեռատեսություն | ցանցաթաղանթի հետևում | հավաքող | $+1$ դպտր, $+2$ դպտր … |

## Երկու աչք

Ամեն աչք տեսնում է մի քիչ տարբեր պատկեր, և ուղեղն օգտագործում է տարբերությունը՝ հեռավորությունը գնահատելու համար։ Սա **տարածական** տեսողությունն է, նաև $3$D ֆիլմերի սկզբունքը, որոնք ամեն աչքին ուղարկում են տարբեր պատկեր։

### Վարժություններ

1. Անվանիր աչքի այն մասը, որն էկրանի դեր է կատարում։
2. Ի՞նչ պատկեր է առաջանում ցանցաթաղանթի վրա։
3. Ի՞նչ է հարմարվողականությունը և աչքի ո՞ր մասն է դա կատարում։
4. Որքա՞ն է պարզ տեսողության ընդունված հեռավորությունը։
5. Մոտատեսության դեպքում ո՞ւր է ընկնում հեռավոր առարկայի պատկերը և ո՞ր ոսպնյակն է ուղղում։
6. Հեռատեսության դեպքում ո՞ւր է ընկնում և ո՞ր ոսպնյակն է ուղղում։
7. Ակնոցի վրա գրված է $-1{,}5$ դպտր։ Ո՞ր արատն է ուղղում։
8. Ինչո՞ւ ենք երկու աչքով հեռավորությունը գնահատում ավելի լավ, քան մեկով։

### Պատասխաններ

1. Ցանցաթաղանթը։
2. Իրական, շրջված և փոքրացած։
3. Մկանների կողմից ոսպնյակի կորության փոփոխությունը, որ տարբեր հեռավորությունների առարկաները պարզ լինեն։
4. Մոտ $25$ սմ։
5. Ցանցաթաղանթի առջև, ցրող ոսպնյակը։
6. Ցանցաթաղանթի հետևում, հավաքող ոսպնյակը։
7. Մոտատեսությունը (ուժը բացասական է, ուստի ոսպնյակը ցրող է)։
8. Երկու աչքերը տալիս են մի քիչ տարբեր պատկերներ, և ուղեղն օգտագործում է տարբերությունը՝ հեռավորությունը գնահատելու համար։`,
        ru: `## Глаз как оптический прибор

| Часть | Что делает |
|---|---|
| Роговица и прозрачные жидкости | большая часть преломления |
| Радужка со зрачком | меняет отверстие, чтобы при ярком свете внутрь попадало меньше света |
| Хрусталик | собирающая линза, кривизну которой мышцы могут менять |
| Сетчатка | экран, около $130$ миллионов светочувствительных клеток |
| Зрительный нерв | передаёт сигналы в мозг |

Глаз работает как фотоаппарат: хрусталик даёт на сетчатке **действительное, перевёрнутое, уменьшенное** изображение. Мозг с первых месяцев жизни учится видеть это изображение правильно.

## Аккомодация

Чтобы резко видеть предметы на разных расстояниях, мышцы сжимают хрусталик и меняют его фокусное расстояние. Это **аккомодация**.

- **Дальняя точка** здорового глаза — в бесконечности: расслабленный глаз резко видит далёкие предметы.
- **Ближайшая точка ясного зрения** — около $10$ см у ребёнка и $25$ см у взрослого; стандартное **расстояние ясного зрения** для чтения принимают равным $25$ см.

Часами смотреть на экран или в книгу — значит держать мышцы в напряжении. Каждые двадцать минут смотри вдаль, держи книгу в $30$–$40$ см и работай при хорошем свете.

## Два частых недостатка

**Близорукость (миопия).** Глаз слишком длинный или хрусталик преломляет слишком сильно, поэтому изображение далёкого предмета падает *перед* сетчаткой. Далёкое видно размытым. Исправляет **рассеивающая** линза с отрицательной силой, немного расходящая пучок до входа в глаз.

**Дальнозоркость (гиперметропия).** Глаз слишком короткий или хрусталик слишком слабый, изображение падает *за* сетчаткой, и размытым становится близкое. Исправляет **собирающая** линза с положительной силой. С возрастом хрусталик теряет гибкость, поэтому после примерно сорока пяти лет очки для чтения нужны почти всем.

| Недостаток | Изображение падает | Исправляющая линза | Рецепт |
|---|---|---|---|
| Близорукость | перед сетчаткой | рассеивающая | $-1$ дптр, $-2{,}5$ дптр … |
| Дальнозоркость | за сетчаткой | собирающая | $+1$ дптр, $+2$ дптр … |

## Два глаза

Каждый глаз видит немного другую картину, и мозг по разнице судит о расстоянии. Это **стереоскопическое** зрение; на нём же основаны $3$D-фильмы, посылающие каждому глазу своё изображение.

### Упражнения

1. Назови часть глаза, играющую роль экрана.
2. Какое изображение образуется на сетчатке?
3. Что такое аккомодация и какая часть глаза её выполняет?
4. Чему равно стандартное расстояние ясного зрения?
5. При близорукости куда падает изображение далёкого предмета и какая линза это исправляет?
6. При дальнозоркости куда оно падает и какая линза исправляет?
7. На очках написано $-1{,}5$ дптр. Какой недостаток они исправляют?
8. Почему двумя глазами мы оцениваем расстояние лучше, чем одним?

### Ответы

1. Сетчатка.
2. Действительное, перевёрнутое и уменьшенное.
3. Изменение кривизны хрусталика мышцами, чтобы предметы на разных расстояниях были резкими.
4. Около $25$ см.
5. Перед сетчаткой; рассеивающая линза.
6. За сетчаткой; собирающая линза.
7. Близорукость (сила отрицательная, значит линза рассеивающая).
8. Глаза дают немного разные картины, и мозг по разнице оценивает расстояние.`,
      },
      [
        q(t("The screen of the eye is", "Աչքի էկրանն է", "Экран глаза — это"), [
          t("the retina", "ցանցաթաղանթը", "сетчатка"),
          t("the pupil", "բիբը", "зрачок"),
          t("the cornea", "եղջերաթաղանթը", "роговица"),
        ], 0),
        q(t("The image on the retina is", "Ցանցաթաղանթի պատկերն է", "Изображение на сетчатке —"), [
          t("virtual and upright", "կարծական և ուղիղ", "мнимое и прямое"),
          t("real, inverted and reduced", "իրական, շրջված և փոքրացած", "действительное, перевёрнутое и уменьшенное"),
          t("real and enlarged", "իրական և խոշորացած", "действительное и увеличенное"),
        ], 1),
        q(t("Accommodation of the eye is", "Աչքի հարմարվողականությունը", "Аккомодация глаза — это"), [
          t("the change of the size of the pupil", "բիբի չափի փոփոխությունը", "изменение размера зрачка"),
          t("the motion of the eyeball", "ակնագնդի շարժումը", "движение глазного яблока"),
          t("the change of the curvature of the lens", "ոսպնյակի կորության փոփոխությունը", "изменение кривизны хрусталика"),
        ], 2),
        q(t("In short sight the image of a distant object falls", "Մոտատեսության դեպքում հեռավոր առարկայի պատկերն ընկնում է", "При близорукости изображение далёкого предмета падает"), [
          t("in front of the retina", "ցանցաթաղանթի առջև", "перед сетчаткой"),
          t("behind the retina", "ցանցաթաղանթի հետևում", "за сетчаткой"),
          t("exactly on the retina", "ճիշտ ցանցաթաղանթի վրա", "точно на сетчатке"),
        ], 0),
        q(t("Long sight is corrected by", "Հեռատեսությունն ուղղվում է", "Дальнозоркость исправляют"), [
          t("a diverging lens", "ցրող ոսպնյակով", "рассеивающей линзой"),
          t("a converging lens", "հավաքող ոսպնյակով", "собирающей линзой"),
          t("flat glass", "հարթ ապակով", "плоским стеклом"),
        ], 1),
        q(t("The standard distance of clear vision is", "Պարզ տեսողության ընդունված հեռավորությունն է", "Стандартное расстояние ясного зрения —"), [
          t("10 cm", "10 սմ", "10 см"),
          t("50 cm", "50 սմ", "50 см"),
          t("25 cm", "25 սմ", "25 см"),
        ], 2),
      ],
    ),
  ],
};
