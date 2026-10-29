import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("The Universe and life", "Տիեզերքը և կյանքը", "Вселенная и жизнь"),
  summary: t("The expanding Universe and Hubble's law, the Big Bang and the cosmic microwave background, dark energy, planets around other stars and the search for life, and a review of the whole course.", "Ընդարձակվող Տիեզերքը և Հաբլի օրենքը, Մեծ պայթյունը և ռելիկտային ճառագայթումը, մութ էներգիան, այլ աստղերի մոլորակները և կյանքի որոնումը, ամբողջ դասընթացի կրկնություն։", "Расширяющаяся Вселенная и закон Хаббла, Большой взрыв и реликтовое излучение, тёмная энергия, планеты у других звёзд и поиск жизни, повторение всего курса."),
  lessons: [
    lesson(
      "expanding-universe",
      ["The expanding Universe", "Ընդարձակվող Տիեզերքը", "Расширяющаяся Вселенная"],
      {
        en: ["State Hubble's law and use it to find distances and speeds of galaxies", "Explain that space itself expands and the expansion has no centre", "Estimate the age of the Universe from the Hubble constant"],
        hy: ["Ձևակերպել Հաբլի օրենքը և դրանով գտնել գալակտիկաների հեռավորություններն ու արագությունները", "Բացատրել, որ ընդարձակվում է հենց տարածությունը, և ընդարձակումը կենտրոն չունի", "Հաբլի հաստատունով գնահատել Տիեզերքի տարիքը"],
        ru: ["Формулировать закон Хаббла и находить с его помощью расстояния и скорости галактик", "Объяснять, что расширяется само пространство и у расширения нет центра", "Оценивать возраст Вселенной по постоянной Хаббла"],
      },
      {
        en: `## Galaxies running away

From 1912 Vesto Slipher measured the spectra of spiral nebulae and found that almost all of them are redshifted: they move away from us, some at hundreds of kilometres per second. In 1929 Edwin Hubble compared these speeds with the distances he had found from Cepheids and saw a simple rule, **Hubble's law**:

$$v = H_0 \\, d.$$

The farther a galaxy, the faster it recedes. The **Hubble constant** is $H_0 \\approx 70$ km/s per megaparsec: a galaxy $1$ Mpc away ($3{.}26$ million light-years) recedes at about $70$ km/s. Different methods give slightly different values, $67$ to $73$, and this "Hubble tension" is one of today's open puzzles.

## Space itself is stretching

The equations of Einstein's general relativity allow a Universe that expands. Alexander Friedmann in Petrograd found such solutions in 1922, and Georges Lemaître in Belgium in 1927, before Hubble's measurements.

Galaxies are not flying through space from an explosion point; space between them is stretching. Think of a raisin bun rising in the oven: every raisin sees all others moving away, and the farther one moves faster. No raisin is at the centre. In the same way, the expansion of the Universe has no centre. Light travelling through stretching space is stretched too: that is the **cosmological redshift**.

Inside galaxies and groups, gravity wins over expansion. That is why Andromeda can come towards us.

## How old is the Universe?

If galaxies have always moved at today's speeds, then they were all together a time $t = \\dfrac{d}{v} = \\dfrac{1}{H_0}$ ago. With $H_0 = 70$ km/s/Mpc this is about $14$ billion years, very close to the modern value of $13{.}8$ billion years.

## Why is the night sky dark?

If the Universe were infinite, eternal and unchanging, every line of sight would end on a star and the whole sky would blaze like the Sun. This is **Olbers' paradox** (1823). The answer: the Universe has a finite age, so light from very distant regions has not reached us yet, and the expansion stretches and weakens the light of distant galaxies.

## Worked examples

**Example 1.** A galaxy is $100$ Mpc away. How fast does it recede?

$v = 70 \\cdot 100 = 7000$ km/s.

**Example 2.** A galaxy recedes at $14\\,000$ km/s. How far is it?

$d = \\dfrac{14\\,000}{70} = 200$ Mpc $\\approx 650$ million light-years.

**Example 3.** Estimate the age $\\dfrac{1}{H_0}$ in years. ($1$ Mpc $= 3{.}09 \\cdot 10^{19}$ km.)

$\\dfrac{1}{H_0} = \\dfrac{3{.}09 \\cdot 10^{19}}{70} \\approx 4{.}4 \\cdot 10^{17}$ s $\\approx 1{.}4 \\cdot 10^{10}$ years.

## Exercises

1. How fast does a galaxy $50$ Mpc away recede?
2. A galaxy has $z = 0{.}01$. Find its speed and distance.
3. If $H_0$ were $50$ km/s/Mpc, what age would $\\dfrac{1}{H_0}$ give?
4. Why does the Andromeda galaxy not obey Hubble's law?
5. Where is the centre of the expansion of the Universe?
6. Give two reasons why the night sky is dark.

### Answers

1. $3500$ km/s.
2. $v = cz = 3000$ km/s; $d = \\dfrac{3000}{70} \\approx 43$ Mpc.
3. $\\dfrac{3{.}09 \\cdot 10^{19}}{50} \\approx 6{.}2 \\cdot 10^{17}$ s $\\approx 20$ billion years.
4. It is close and bound to our Galaxy by gravity, which is stronger than the expansion at such distances.
5. Nowhere: every galaxy sees the others moving away; space stretches everywhere.
6. The Universe has a finite age, so light from far away has not arrived yet; the expansion stretches and weakens the light of distant galaxies.`,
        hy: `## Փախչող գալակտիկաներ

1912 թվականից Վեստո Սլայֆերը չափում էր պարուրաձև միգամածությունների սպեկտրները և պարզեց, որ համարյա բոլորն ունեն կարմիր շեղում․ դրանք հեռանում են մեզանից, որոշները՝ վայրկյանում հարյուրավոր կիլոմետր արագությամբ։ 1929 թվականին Էդվին Հաբլը համեմատեց այդ արագությունները ցեֆեիդներով իր գտած հեռավորությունների հետ և տեսավ պարզ կանոն՝ **Հաբլի օրենքը**․

$$v = H_0 \\, d$$

Որքան հեռու է գալակտիկան, այնքան արագ է այն հեռանում։ **Հաբլի հաստատունը** $H_0 \\approx 70$ կմ/վ է մեկ մեգապարսեկի համար․ $1$ Մպկ ($3{,}26$ միլիոն լուսային տարի) հեռավորությամբ գալակտիկան հեռանում է մոտ $70$ կմ/վ արագությամբ։ Տարբեր եղանակներ տալիս են մի փոքր տարբեր արժեքներ՝ $67$-ից $73$, և այդ «Հաբլի լարվածությունը» այսօրվա բաց հանելուկներից է։

## Ձգվում է հենց տարածությունը

Այնշտայնի հարաբերականության ընդհանուր տեսության հավասարումները թույլ են տալիս ընդարձակվող Տիեզերք։ Ալեքսանդր Ֆրիդմանը Պետրոգրադում նման լուծումներ գտավ 1922 թվականին, Ժորժ Լեմետրը Բելգիայում՝ 1927 թվականին, Հաբլի չափումներից առաջ։

Գալակտիկաները տարածության միջով չեն թռչում պայթյունի կետից․ ձգվում է նրանց միջև եղած տարածությունը։ Պատկերացրեք ջեռոցում բարձրացող չամիչով բուլկի․ յուրաքանչյուր չամիչ տեսնում է, որ մյուսները հեռանում են, և որքան հեռու է մեկը, այնքան արագ։ Ոչ մի չամիչ կենտրոնում չէ։ Նույն կերպ Տիեզերքի ընդարձակումը կենտրոն չունի։ Ձգվող տարածության միջով անցնող լույսը նույնպես ձգվում է․ սա **կոսմոլոգիական կարմիր շեղումն** է։

Գալակտիկաների և խմբերի ներսում ձգողությունը հաղթում է ընդարձակմանը։ Ահա թե ինչու Անդրոմեդան կարող է մոտենալ մեզ։

## Որքա՞ն է Տիեզերքի տարիքը

Եթե գալակտիկաները միշտ շարժվել են այսօրվա արագություններով, ապա դրանք բոլորը միասին են եղել $t = \\dfrac{d}{v} = \\dfrac{1}{H_0}$ ժամանակ առաջ։ $H_0 = 70$ կմ/վ/Մպկ-ի դեպքում սա մոտ $14$ միլիարդ տարի է՝ շատ մոտ $13{,}8$ միլիարդ տարվա ժամանակակից արժեքին։

## Ինչո՞ւ է գիշերային երկինքը մութ

Եթե Տիեզերքն անվերջ, հավերժական և անփոփոխ լիներ, տեսողության յուրաքանչյուր գիծ կավարտվեր աստղի վրա, և ամբողջ երկինքը կշողար Արեգակի պես։ Սա **Օլբերսի պարադոքսն** է (1823)։ Պատասխանը․ Տիեզերքն ունի վերջավոր տարիք, ուստի շատ հեռավոր տիրույթների լույսը դեռ չի հասել մեզ, իսկ ընդարձակումը ձգում և թուլացնում է հեռավոր գալակտիկաների լույսը։

## Լուծված օրինակներ

**Օրինակ 1։** Գալակտիկան $100$ Մպկ հեռու է։ Ինչ արագությամբ է այն հեռանում։

$v = 70 \\cdot 100 = 7000$ կմ/վ։

**Օրինակ 2։** Գալակտիկան հեռանում է $14\\,000$ կմ/վ արագությամբ։ Որքա՞ն հեռու է այն։

$d = \\dfrac{14\\,000}{70} = 200$ Մպկ $\\approx 650$ միլիոն լուսային տարի։

**Օրինակ 3։** Գնահատեք $\\dfrac{1}{H_0}$ տարիքը տարիներով։ ($1$ Մպկ $= 3{,}09 \\cdot 10^{19}$ կմ)

$\\dfrac{1}{H_0} = \\dfrac{3{,}09 \\cdot 10^{19}}{70} \\approx 4{,}4 \\cdot 10^{17}$ վ $\\approx 1{,}4 \\cdot 10^{10}$ տարի։

## Վարժություններ

1. Ինչ արագությամբ է հեռանում $50$ Մպկ հեռավորությամբ գալակտիկան։
2. Գալակտիկայի համար $z = 0{,}01$։ Գտեք նրա արագությունը և հեռավորությունը։
3. Եթե $H_0$-ն լիներ $50$ կմ/վ/Մպկ, ի՞նչ տարիք կտար $\\dfrac{1}{H_0}$-ը։
4. Ինչո՞ւ Անդրոմեդայի գալակտիկան չի ենթարկվում Հաբլի օրենքին։
5. Որտե՞ղ է Տիեզերքի ընդարձակման կենտրոնը։
6. Նշեք երկու պատճառ, թե ինչու է գիշերային երկինքը մութ։

### Պատասխաններ

1. $3500$ կմ/վ։
2. $v = cz = 3000$ կմ/վ, $d = \\dfrac{3000}{70} \\approx 43$ Մպկ։
3. $\\dfrac{3{,}09 \\cdot 10^{19}}{50} \\approx 6{,}2 \\cdot 10^{17}$ վ $\\approx 20$ միլիարդ տարի։
4. Այն մոտ է և ձգողությամբ կապված մեր Գալակտիկային, իսկ այդպիսի հեռավորություններում ձգողությունն ավելի ուժեղ է, քան ընդարձակումը։
5. Ոչ մի տեղ․ յուրաքանչյուր գալակտիկա տեսնում է, որ մյուսները հեռանում են, տարածությունը ձգվում է ամենուր։
6. Տիեզերքն ունի վերջավոր տարիք, ուստի հեռվից լույսը դեռ չի հասել, ընդարձակումը ձգում և թուլացնում է հեռավոր գալակտիկաների լույսը։`,
        ru: `## Разбегающиеся галактики

С 1912 года Весто Слайфер измерял спектры спиральных туманностей и обнаружил, что почти у всех линии смещены к красному концу: они удаляются от нас, некоторые — со скоростями в сотни километров в секунду. В 1929 году Эдвин Хаббл сопоставил эти скорости с расстояниями, найденными им по цефеидам, и увидел простое правило — **закон Хаббла**:

$$v = H_0 \\, d.$$

Чем дальше галактика, тем быстрее она удаляется. **Постоянная Хаббла** $H_0 \\approx 70$ км/с на мегапарсек: галактика на расстоянии $1$ Мпк ($3{,}26$ миллиона световых лет) удаляется со скоростью около $70$ км/с. Разные методы дают немного разные значения — от $67$ до $73$, и это «хаббловское напряжение» — одна из нерешённых загадок сегодняшнего дня.

## Растягивается само пространство

Уравнения общей теории относительности Эйнштейна допускают расширяющуюся Вселенную. Александр Фридман в Петрограде нашёл такие решения в 1922 году, Жорж Леметр в Бельгии — в 1927 году, ещё до измерений Хаббла.

Галактики не летят сквозь пространство от точки взрыва — растягивается пространство между ними. Представьте булочку с изюмом, поднимающуюся в духовке: каждая изюминка видит, что все остальные удаляются, причём дальние — быстрее. Ни одна изюминка не находится в центре. Так же и у расширения Вселенной нет центра. Свет, идущий через растягивающееся пространство, тоже растягивается — это **космологическое красное смещение**.

Внутри галактик и групп тяготение сильнее расширения. Поэтому Андромеда может приближаться к нам.

## Сколько лет Вселенной?

Если галактики всегда двигались с нынешними скоростями, то все они были вместе время $t = \\dfrac{d}{v} = \\dfrac{1}{H_0}$ назад. При $H_0 = 70$ км/с/Мпк это около $14$ миллиардов лет — очень близко к современному значению $13{,}8$ миллиарда лет.

## Почему ночное небо тёмное?

Будь Вселенная бесконечной, вечной и неизменной, каждый луч зрения упирался бы в звезду, и всё небо сияло бы, как Солнце. Это **парадокс Ольберса** (1823). Ответ: у Вселенной конечный возраст, поэтому свет из очень далёких областей ещё не дошёл до нас, а расширение растягивает и ослабляет свет далёких галактик.

## Разобранные примеры

**Пример 1.** Галактика находится в $100$ Мпк. С какой скоростью она удаляется?

$v = 70 \\cdot 100 = 7000$ км/с.

**Пример 2.** Галактика удаляется со скоростью $14\\,000$ км/с. Как далеко она?

$d = \\dfrac{14\\,000}{70} = 200$ Мпк $\\approx 650$ миллионов световых лет.

**Пример 3.** Оцените возраст $\\dfrac{1}{H_0}$ в годах. ($1$ Мпк $= 3{,}09 \\cdot 10^{19}$ км.)

$\\dfrac{1}{H_0} = \\dfrac{3{,}09 \\cdot 10^{19}}{70} \\approx 4{,}4 \\cdot 10^{17}$ с $\\approx 1{,}4 \\cdot 10^{10}$ лет.

## Упражнения

1. С какой скоростью удаляется галактика на расстоянии $50$ Мпк?
2. У галактики $z = 0{,}01$. Найдите её скорость и расстояние.
3. Если бы $H_0$ была $50$ км/с/Мпк, какой возраст дала бы $\\dfrac{1}{H_0}$?
4. Почему галактика Андромеды не подчиняется закону Хаббла?
5. Где центр расширения Вселенной?
6. Назовите две причины, почему ночное небо тёмное.

### Ответы

1. $3500$ км/с.
2. $v = cz = 3000$ км/с; $d = \\dfrac{3000}{70} \\approx 43$ Мпк.
3. $\\dfrac{3{,}09 \\cdot 10^{19}}{50} \\approx 6{,}2 \\cdot 10^{17}$ с $\\approx 20$ миллиардов лет.
4. Она близко и связана с нашей Галактикой тяготением, которое на таких расстояниях сильнее расширения.
5. Нигде: каждая галактика видит, что остальные удаляются; пространство растягивается везде.
6. У Вселенной конечный возраст, и свет издалека ещё не дошёл; расширение растягивает и ослабляет свет далёких галактик.`,
      },
      [
        q(t("Hubble's law says that the speed at which a galaxy recedes is…", "Հաբլի օրենքի համաձայն՝ գալակտիկայի հեռանալու արագությունը…", "По закону Хаббла скорость удаления галактики…"), [t("proportional to its distance", "համեմատական է նրա հեռավորությանը", "пропорциональна расстоянию до неё"), t("the same for all galaxies", "նույնն է բոլոր գալակտիկաների համար", "одинакова для всех галактик"), t("proportional to its mass", "համեմատական է նրա զանգվածին", "пропорциональна её массе")], 0),
        q(t("The Hubble constant is about…", "Հաբլի հաստատունը մոտավորապես…", "Постоянная Хаббла примерно равна…"), [t("70 km/s per Mpc", "70 կմ/վ է մեկ Մպկ-ի համար", "70 км/с на Мпк"), t("70 km/s per light-year", "70 կմ/վ է մեկ լուսային տարու համար", "70 км/с на световой год"), t("300 000 km/s", "300 000 կմ/վ է", "300 000 км/с")], 0),
        q(t("Who first found expanding-universe solutions of Einstein's equations, in 1922?", "Ո՞վ առաջինը գտավ Այնշտայնի հավասարումների ընդարձակվող տիեզերքի լուծումները 1922 թվականին։", "Кто первым нашёл решения уравнений Эйнштейна для расширяющейся Вселенной в 1922 году?"), [t("Alexander Friedmann", "Ալեքսանդր Ֆրիդմանը", "Александр Фридман"), t("Edwin Hubble", "Էդվին Հաբլը", "Эдвин Хаббл"), t("Isaac Newton", "Իսահակ Նյուտոնը", "Исаак Ньютон")], 0),
        q(t("The expansion of the Universe has its centre…", "Տիեզերքի ընդարձակման կենտրոնը…", "Центр расширения Вселенной находится…"), [t("nowhere: space stretches everywhere", "ոչ մի տեղ չէ․ տարածությունը ձգվում է ամենուր", "нигде: пространство растягивается везде"), t("at the Sun", "Արեգակի մոտ է", "у Солнца"), t("at the centre of the Milky Way", "Ծիր Կաթինի կենտրոնում է", "в центре Млечного Пути")], 0),
        q(t("1/H₀ gives an age of the Universe of about…", "1/H₀-ն տալիս է Տիեզերքի տարիքը մոտավորապես…", "1/H₀ даёт возраст Вселенной около…"), [t("14 billion years", "14 միլիարդ տարի", "14 миллиардов лет"), t("4.6 billion years", "4,6 միլիարդ տարի", "4,6 миллиарда лет"), t("6000 years", "6000 տարի", "6000 лет")], 0),
        q(t("Olbers' paradox asks…", "Օլբերսի պարադոքսը հարցնում է…", "Парадокс Ольберса спрашивает…"), [t("why the night sky is dark", "ինչու է գիշերային երկինքը մութ", "почему ночное небо тёмное"), t("why the sky is blue", "ինչու է երկինքը կապույտ", "почему небо голубое"), t("why stars twinkle", "ինչու են աստղերը առկայծում", "почему мерцают звёзды")], 0),
      ],
    ),
    lesson(
      "big-bang",
      ["The Big Bang and the history of the Universe", "Մեծ պայթյունը և Տիեզերքի պատմությունը", "Большой взрыв и история Вселенной"],
      {
        en: ["Describe the main stages of the history of the Universe from the Big Bang", "Explain what the cosmic microwave background is and why it proves a hot early Universe", "Name the parts of the Universe: ordinary matter, dark matter and dark energy"],
        hy: ["Նկարագրել Տիեզերքի պատմության հիմնական փուլերը Մեծ պայթյունից ի վեր", "Բացատրել, թե ինչ է ռելիկտային ճառագայթումը և ինչու է այն ապացուցում վաղ տաք Տիեզերքը", "Անվանել Տիեզերքի բաղադրիչները՝ սովորական նյութ, մութ նյութ և մութ էներգիա"],
        ru: ["Описывать основные этапы истории Вселенной от Большого взрыва", "Объяснять, что такое реликтовое излучение и почему оно доказывает горячую раннюю Вселенную", "Называть составляющие Вселенной: обычное вещество, тёмную материю и тёмную энергию"],
      },
      {
        en: `## Running the film backwards

If galaxies are moving apart, then in the past they were closer, and long ago all the matter of the Universe was squeezed together, very hot and dense. Lemaître called it the "primeval atom" (1931); Fred Hoyle, who did not believe in it, mockingly called it the **Big Bang** (1949), and the name stuck. The Big Bang was not an explosion at a point in space, but the hot, dense beginning of the expansion of space everywhere, $13{.}8$ billion years ago.

## A short history of everything

- **First seconds**: the Universe is a hot soup of particles and light; protons and neutrons form.
- **First minutes**: nuclei of helium form. When this ends, about $75\\%$ of the mass is hydrogen and $25\\%$ helium, exactly what we find in the oldest stars.
- **About $380\\,000$ years**: the Universe cools to about $3000$ K, electrons join nuclei into atoms, and light can travel freely for the first time.
- **Dark ages**, then the **first stars** after some $100$–$200$ million years, and the first galaxies.
- **$9{.}2$ billion years** after the Big Bang, $4{.}6$ billion years ago, the Sun and the Earth form from gas enriched by earlier generations of stars.

## The echo of the Big Bang

In 1948 George Gamow and his colleagues predicted that the light released at $380\\,000$ years should still fill the Universe, cooled by the expansion to a few kelvin. In 1965 Arno Penzias and Robert Wilson at Bell Labs found a weak radio "hiss" that came from every direction and would not go away (Nobel Prize, 1978). It was the **cosmic microwave background**, with $T = 2{.}725$ K.

Since that light was released, space has stretched about $1100$ times, and the light's wavelength with it. The satellites COBE, WMAP and Planck mapped tiny differences in its temperature, about $1$ part in $100\\,000$: the seeds from which galaxies grew.

## What the Universe is made of

Measurements of the background radiation, of galaxies and of supernovae agree on a surprising recipe:

- about $5\\%$ **ordinary matter**: all stars, planets, gas and us;
- about $27\\%$ **dark matter**: unseen, felt only by its gravity;
- about $68\\%$ **dark energy**: in 1998 two teams studying type Ia supernovae found that the expansion is **speeding up** (Nobel Prize, 2011). Something pushes space apart. In 2024–2025 the DESI survey found hints that dark energy may be changing with time; this is still being checked.

## Worked examples

**Example 1.** At what wavelength does the cosmic background shine most strongly?

$\\lambda_{\\max} = \\dfrac{2{.}9 \\cdot 10^{-3}}{2{.}725} \\approx 1{.}1 \\cdot 10^{-3}$ m $\\approx 1$ mm: microwaves.

**Example 2.** The light was released at about $3000$ K. How many times has the Universe stretched since?

$\\dfrac{3000}{2{.}725} \\approx 1100$ times: the temperature falls as the wavelength grows.

**Example 3.** Squeeze the history of the Universe into one year: the Big Bang at midnight on 1 January. When did the Sun form?

$\\dfrac{4{.}6}{13{.}8} = \\dfrac{1}{3}$ of a year before the end, so about the beginning of September. All of human history fits in the last few minutes of 31 December.

## Exercises

1. Who discovered the cosmic microwave background, and when?
2. The background light was emitted at $3000$ K, but today it is microwaves. Why?
3. At what wavelength did it shine most strongly when it was released?
4. What share of the Universe is the ordinary matter we are made of?
5. On the "cosmic calendar", how long before the end of the year did the dinosaurs die out ($66$ million years ago)?
6. What did astronomers discover in 1998 using type Ia supernovae?

### Answers

1. Arno Penzias and Robert Wilson, in 1965.
2. The expansion of space has stretched its wavelength about $1100$ times.
3. $\\lambda_{\\max} = \\dfrac{2{.}9 \\cdot 10^{-3}}{3000} \\approx 10^{-6}$ m $= 1$ μm, near infrared.
4. About $5\\%$.
5. $\\dfrac{66 \\cdot 10^6}{13{.}8 \\cdot 10^9} \\cdot 365 \\approx 1{.}7$ days: on 30 December.
6. That the expansion of the Universe is speeding up, which led to the idea of dark energy.`,
        hy: `## Ֆիլմը հետ պտտելով

Եթե գալակտիկաները հեռանում են միմյանցից, ապա անցյալում դրանք ավելի մոտ էին, իսկ շատ վաղուց Տիեզերքի ողջ նյութը սեղմված էր միասին՝ շատ տաք և խիտ։ Լեմետրն այն անվանեց «նախնական ատոմ» (1931), Ֆրեդ Հոյլը, որը չէր հավատում դրան, ծաղրանքով այն կոչեց **Մեծ պայթյուն** (1949), և անունը մնաց։ Մեծ պայթյունը տարածության մի կետում տեղի ունեցած պայթյուն չէր, այլ ամենուր տարածության ընդարձակման տաք, խիտ սկիզբը՝ $13{,}8$ միլիարդ տարի առաջ։

## Ամեն ինչի կարճ պատմություն

- **Առաջին վայրկյանները**․ Տիեզերքը մասնիկների և լույսի տաք «ապուր» է, առաջանում են պրոտոններ և նեյտրոններ։
- **Առաջին րոպեները**․ առաջանում են հելիումի միջուկներ։ Երբ սա ավարտվում է, զանգվածի մոտ $75\\%$-ը ջրածին է, $25\\%$-ը՝ հելիում, ճիշտ այնպես, ինչպես գտնում ենք ամենածեր աստղերում։
- **Մոտ $380\\,000$ տարի**․ Տիեզերքը սառչում է մինչև մոտ $3000$ Կ, էլեկտրոնները միանում են միջուկներին՝ առաջացնելով ատոմներ, և լույսն առաջին անգամ կարող է ազատ տարածվել։
- **Մութ դարեր**, հետո մոտ $100$–$200$ միլիոն տարի անց **առաջին աստղերը** և առաջին գալակտիկաները։
- Մեծ պայթյունից **$9{,}2$ միլիարդ տարի** անց, $4{,}6$ միլիարդ տարի առաջ, Արեգակն ու Երկիրը ձևավորվում են աստղերի նախորդ սերունդներով հարստացված գազից։

## Մեծ պայթյունի արձագանքը

1948 թվականին Գեորգի Գամովը և նրա գործընկերները կանխատեսեցին, որ $380\\,000$ տարեկանում արձակված լույսը դեռ պետք է լցնի Տիեզերքը՝ ընդարձակումից սառած մինչև մի քանի կելվին։ 1965 թվականին Առնո Պենզիասը և Ռոբերտ Վիլսոնը Բելլի լաբորատորիաներում գտան թույլ ռադիո«շշուկ», որը գալիս էր բոլոր ուղղություններից և չէր անհետանում (Նոբելյան մրցանակ, 1978)։ Դա **ռելիկտային (միկրոալիքային ֆոնային) ճառագայթումն** էր՝ $T = 2{,}725$ Կ ջերմաստիճանով։

Այդ լույսի արձակումից ի վեր տարածությունը ձգվել է մոտ $1100$ անգամ, և նրա հետ՝ լույսի ալիքի երկարությունը։ COBE, WMAP և Planck արբանյակները քարտեզագրեցին նրա ջերմաստիճանի չնչին տարբերությունները՝ մոտ $1$ մաս $100\\,000$-ից․ դրանք այն «սերմերն» են, որոնցից աճել են գալակտիկաները։

## Ինչից է կազմված Տիեզերքը

Ֆոնային ճառագայթման, գալակտիկաների և գերնոր աստղերի չափումները համաձայնեցվում են մի զարմանալի «բաղադրատոմսի» շուրջ․

- մոտ $5\\%$ **սովորական նյութ**՝ բոլոր աստղերը, մոլորակները, գազը և մենք,
- մոտ $27\\%$ **մութ նյութ**՝ անտեսանելի, զգացվում է միայն ձգողությամբ,
- մոտ $68\\%$ **մութ էներգիա**․ 1998 թվականին Ia տիպի գերնորերն ուսումնասիրող երկու խումբ պարզեցին, որ ընդարձակումը **արագանում է** (Նոբելյան մրցանակ, 2011)։ Ինչ-որ բան հրում է տարածությունը։ 2024–2025 թվականներին DESI հետազոտությունը նշաններ գտավ, որ մութ էներգիան կարող է ժամանակի հետ փոխվել․ դա դեռ ստուգվում է։

## Լուծված օրինակներ

**Օրինակ 1։** Ո՞ր ալիքի երկարության վրա է ֆոնային ճառագայթումն ամենաուժեղը։

$\\lambda_{\\max} = \\dfrac{2{,}9 \\cdot 10^{-3}}{2{,}725} \\approx 1{,}1 \\cdot 10^{-3}$ մ $\\approx 1$ մմ՝ միկրոալիքներ։

**Օրինակ 2։** Լույսն արձակվել է մոտ $3000$ Կ-ում։ Քանի՞ անգամ է Տիեզերքը ձգվել այդ ժամանակից ի վեր։

$\\dfrac{3000}{2{,}725} \\approx 1100$ անգամ․ ջերմաստիճանը նվազում է, երբ ալիքի երկարությունը մեծանում է։

**Օրինակ 3։** Սեղմենք Տիեզերքի պատմությունը մեկ տարվա մեջ․ Մեծ պայթյունը՝ հունվարի 1-ի կեսգիշերին։ Ե՞րբ ձևավորվեց Արեգակը։

Տարվա ավարտից $\\dfrac{4{,}6}{13{,}8} = \\dfrac{1}{3}$ տարի առաջ, այսինքն՝ մոտավորապես սեպտեմբերի սկզբին։ Մարդկության ողջ պատմությունը տեղավորվում է դեկտեմբերի 31-ի վերջին մի քանի րոպեներում։

## Վարժություններ

1. Ո՞վ և ե՞րբ հայտնաբերեց ռելիկտային ճառագայթումը։
2. Ֆոնային լույսն արձակվել է $3000$ Կ-ում, բայց այսօր այն միկրոալիքներ է։ Ինչո՞ւ։
3. Ո՞ր ալիքի երկարության վրա էր այն ամենաուժեղը արձակման պահին։
4. Տիեզերքի ո՞ր մասն է կազմում սովորական նյութը, որից մենք ենք կազմված։
5. «Տիեզերական օրացույցում» տարվա ավարտից որքա՞ն առաջ վերացան դինոզավրերը ($66$ միլիոն տարի առաջ)։
6. Ի՞նչ հայտնաբերեցին աստղագետները 1998 թվականին Ia տիպի գերնորերի օգնությամբ։

### Պատասխաններ

1. Առնո Պենզիասը և Ռոբերտ Վիլսոնը՝ 1965 թվականին։
2. Տարածության ընդարձակումը մոտ $1100$ անգամ ձգել է նրա ալիքի երկարությունը։
3. $\\lambda_{\\max} = \\dfrac{2{,}9 \\cdot 10^{-3}}{3000} \\approx 10^{-6}$ մ $= 1$ մկմ՝ մոտ ինֆրակարմիր։
4. Մոտ $5\\%$։
5. $\\dfrac{66 \\cdot 10^6}{13{,}8 \\cdot 10^9} \\cdot 365 \\approx 1{,}7$ օր՝ դեկտեմբերի 30-ին։
6. Որ Տիեզերքի ընդարձակումն արագանում է, ինչը հանգեցրեց մութ էներգիայի գաղափարին։`,
        ru: `## Прокрутим фильм назад

Если галактики разлетаются, значит, в прошлом они были ближе, а очень давно всё вещество Вселенной было сжато вместе — очень горячее и плотное. Леметр назвал это «первичным атомом» (1931); Фред Хойл, не веривший в это, насмешливо назвал это **Большим взрывом** (1949), и название прижилось. Большой взрыв — не взрыв в точке пространства, а горячее плотное начало расширения пространства всюду, $13{,}8$ миллиарда лет назад.

## Краткая история всего

- **Первые секунды**: Вселенная — горячий «суп» из частиц и света; образуются протоны и нейтроны.
- **Первые минуты**: образуются ядра гелия. Когда это заканчивается, по массе около $75\\%$ — водород и $25\\%$ — гелий, ровно как в самых старых звёздах.
- **Около $380\\,000$ лет**: Вселенная остывает примерно до $3000$ К, электроны соединяются с ядрами в атомы, и свет впервые может свободно распространяться.
- **Тёмные века**, затем через $100$–$200$ миллионов лет **первые звёзды** и первые галактики.
- Через **$9{,}2$ миллиарда лет** после Большого взрыва, $4{,}6$ миллиарда лет назад, Солнце и Земля образуются из газа, обогащённого прежними поколениями звёзд.

## Эхо Большого взрыва

В 1948 году Георгий Гамов с коллегами предсказал, что свет, освободившийся в $380\\,000$ лет, до сих пор должен заполнять Вселенную, остыв из-за расширения до нескольких кельвинов. В 1965 году Арно Пензиас и Роберт Вильсон в Bell Labs нашли слабый радио«шум», шедший со всех сторон и никак не исчезавший (Нобелевская премия 1978 года). Это было **реликтовое излучение** с $T = 2{,}725$ К.

С тех пор как этот свет освободился, пространство растянулось примерно в $1100$ раз, а с ним и длина волны света. Спутники COBE, WMAP и Planck нанесли на карту крошечные различия его температуры — около $1$ части на $100\\,000$: «семена», из которых выросли галактики.

## Из чего состоит Вселенная

Измерения реликтового излучения, галактик и сверхновых сходятся на удивительном «рецепте»:

- около $5\\%$ — **обычное вещество**: все звёзды, планеты, газ и мы;
- около $27\\%$ — **тёмная материя**: невидимая, ощущается только по тяготению;
- около $68\\%$ — **тёмная энергия**: в 1998 году две группы, изучавшие сверхновые типа Ia, обнаружили, что расширение **ускоряется** (Нобелевская премия 2011 года). Что-то расталкивает пространство. В 2024–2025 годах обзор DESI нашёл признаки того, что тёмная энергия может меняться со временем; это ещё проверяется.

## Разобранные примеры

**Пример 1.** На какой длине волны реликтовое излучение сильнее всего?

$\\lambda_{\\max} = \\dfrac{2{,}9 \\cdot 10^{-3}}{2{,}725} \\approx 1{,}1 \\cdot 10^{-3}$ м $\\approx 1$ мм — микроволны.

**Пример 2.** Свет освободился при температуре около $3000$ К. Во сколько раз с тех пор растянулась Вселенная?

$\\dfrac{3000}{2{,}725} \\approx 1100$ раз: температура падает по мере роста длины волны.

**Пример 3.** Сожмём историю Вселенной в один год: Большой взрыв — в полночь 1 января. Когда образовалось Солнце?

За $\\dfrac{4{,}6}{13{,}8} = \\dfrac{1}{3}$ года до конца, то есть примерно в начале сентября. Вся история человечества умещается в последние минуты 31 декабря.

## Упражнения

1. Кто и когда открыл реликтовое излучение?
2. Реликтовый свет испущен при $3000$ К, а сегодня это микроволны. Почему?
3. На какой длине волны оно было сильнее всего в момент испускания?
4. Какую долю Вселенной составляет обычное вещество, из которого состоим мы?
5. По «космическому календарю» за сколько до конца года вымерли динозавры ($66$ миллионов лет назад)?
6. Что открыли астрономы в 1998 году с помощью сверхновых типа Ia?

### Ответы

1. Арно Пензиас и Роберт Вильсон в 1965 году.
2. Расширение пространства растянуло его длину волны примерно в $1100$ раз.
3. $\\lambda_{\\max} = \\dfrac{2{,}9 \\cdot 10^{-3}}{3000} \\approx 10^{-6}$ м $= 1$ мкм — ближний инфракрасный.
4. Около $5\\%$.
5. $\\dfrac{66 \\cdot 10^6}{13{,}8 \\cdot 10^9} \\cdot 365 \\approx 1{,}7$ суток — 30 декабря.
6. Что расширение Вселенной ускоряется; так появилась идея тёмной энергии.`,
      },
      [
        q(t("The age of the Universe is about…", "Տիեզերքի տարիքը մոտավորապես…", "Возраст Вселенной около…"), [t("13.8 billion years", "13,8 միլիարդ տարի է", "13,8 миллиарда лет"), t("4.6 billion years", "4,6 միլիարդ տարի է", "4,6 миллиарда лет"), t("138 billion years", "138 միլիարդ տարի է", "138 миллиардов лет")], 0),
        q(t("The cosmic microwave background has a temperature of about…", "Ռելիկտային ճառագայթման ջերմաստիճանը մոտավորապես…", "Температура реликтового излучения около…"), [t("2.7 K", "2,7 Կ է", "2,7 К"), t("270 K", "270 Կ է", "270 К"), t("3000 K", "3000 Կ է", "3000 К")], 0),
        q(t("The cosmic background light was released when the Universe was about…", "Ռելիկտային լույսն արձակվեց, երբ Տիեզերքը մոտ…", "Реликтовый свет освободился, когда Вселенной было около…"), [t("380 000 years old", "380 000 տարեկան էր", "380 000 лет"), t("3 minutes old", "3 րոպեական էր", "3 минут"), t("1 billion years old", "1 միլիարդ տարեկան էր", "1 миллиарда лет")], 0),
        q(t("Right after the first minutes, the mass of ordinary matter was about…", "Առաջին րոպեներից անմիջապես հետո սովորական նյութի զանգվածը մոտավորապես…", "Сразу после первых минут масса обычного вещества составляла примерно…"), [t("75% hydrogen and 25% helium", "75% ջրածին և 25% հելիում էր", "75% водорода и 25% гелия"), t("50% iron and 50% carbon", "50% երկաթ և 50% ածխածին էր", "50% железа и 50% углерода"), t("100% helium", "100% հելիում էր", "100% гелия")], 0),
        q(t("The largest part of the Universe is…", "Տիեզերքի ամենամեծ մասը…", "Самая большая часть Вселенной — это…"), [t("dark energy", "մութ էներգիան է", "тёмная энергия"), t("ordinary matter", "սովորական նյութն է", "обычное вещество"), t("stars", "աստղերն են", "звёзды")], 0),
        q(t("In 1998 astronomers found that the expansion of the Universe is…", "1998 թվականին աստղագետները պարզեցին, որ Տիեզերքի ընդարձակումը…", "В 1998 году астрономы обнаружили, что расширение Вселенной…"), [t("speeding up", "արագանում է", "ускоряется"), t("slowing to a stop", "դանդաղում է մինչև կանգ", "замедляется до остановки"), t("reversing", "փոխում է ուղղությունը", "сменяется сжатием")], 0),
      ],
    ),
    lesson(
      "exoplanets-life",
      ["Exoplanets and life in the Universe", "Էկզոմոլորակներ և կյանքը Տիեզերքում", "Экзопланеты и жизнь во Вселенной"],
      {
        en: ["Describe the main methods of finding planets around other stars", "Find the size of a planet from a transit and the habitable zone of a star", "Discuss the search for life and for other civilisations, including the Drake equation"],
        hy: ["Նկարագրել այլ աստղերի մոլորակները հայտնաբերելու հիմնական եղանակները", "Գտնել մոլորակի չափը տարանցումից և աստղի կենսունակության գոտին", "Քննարկել կյանքի և այլ քաղաքակրթությունների որոնումը, այդ թվում՝ Դրեյքի հավասարումը"],
        ru: ["Описывать основные методы поиска планет у других звёзд", "Находить размер планеты по транзиту и зону обитаемости звезды", "Обсуждать поиск жизни и других цивилизаций, включая уравнение Дрейка"],
      },
      {
        en: `## Other worlds

For centuries people wondered whether other stars have planets. The first were found in 1992, around a pulsar. In 1995 Michel Mayor and Didier Queloz found **51 Pegasi b**, a giant planet circling a Sun-like star in just $4{.}2$ days, much closer than Mercury to the Sun (Nobel Prize, 2019). Today more than $6000$ **exoplanets** are confirmed, and it seems that most stars have planets.

## How to find a planet you cannot see

- **Radial velocity (Doppler) method.** A planet and its star circle their common centre of mass, so the star wobbles. Its spectral lines shift back and forth. Jupiter makes the Sun move at about $12$ m/s; the Earth only $9$ cm/s.
- **Transit method.** If we see the orbit edge-on, the planet passes in front of the star and dims it a little, once every orbit. The dip in brightness is $\\dfrac{\\Delta F}{F} = \\left(\\dfrac{R_p}{R_*}\\right)^2$. The Kepler telescope (2009–2018) found thousands of planets this way; TESS continues since 2018.
- **Direct imaging**: blocking the glare of the star to photograph young, hot giant planets far from it.
- **Microlensing**: a star with a planet acts as a gravitational lens for a more distant star.

## Where life could exist

Life as we know it needs **liquid water**. The **habitable zone** is the range of distances from a star where a planet can have it. Around a fainter star it is closer:

$$d_{\\text{HZ}} \\approx \\sqrt{\\dfrac{L}{L_\\odot}} \\text{ AU}.$$

Famous examples: **Proxima Centauri b** (2016), around our nearest star, and the red dwarf **TRAPPIST-1**, with seven Earth-sized planets (2017), three of them in the habitable zone. The James Webb telescope now studies the atmospheres of such planets, looking for water, carbon dioxide or methane.

In the Solar system, life is searched for on Mars, which had rivers and lakes billions of years ago, and in the oceans under the ice of Jupiter's moon Europa and Saturn's moon Enceladus.

## Are we alone?

In 1960 Frank Drake made the first radio search for signals from other civilisations. To guess how many civilisations might be talking in our Galaxy, he wrote the **Drake equation**:

$$N = R_* \\cdot f_p \\cdot n_e \\cdot f_l \\cdot f_i \\cdot f_c \\cdot L,$$

the rate of star formation, times the share of stars with planets, the number of suitable planets per system, the shares where life, intelligence and radio technology appear, and $L$, how long a civilisation keeps sending signals. Only the first factors are now known.

Armenia played a part: in **1964** the Byurakan Observatory held the first Soviet conference on extraterrestrial civilisations, where Nikolai Kardashev proposed his famous scale of civilisations by the energy they use. In **1971** Byurakan hosted the first international conference on the subject, with Soviet and American scientists including Carl Sagan and Frank Drake. So far no signal has been found.

## Worked examples

**Example 1.** How much does Jupiter ($R_J \\approx 0{.}1\\, R_\\odot$) dim the Sun in a transit? And the Earth ($R_E \\approx R_\\odot / 109$)?

Jupiter: $(0{.}1)^2 = 0{.}01$, that is $1\\%$. Earth: $\\left(\\dfrac{1}{109}\\right)^2 \\approx 8{.}4 \\cdot 10^{-5}$, less than one ten-thousandth.

**Example 2.** Where is the habitable zone of a red dwarf with $L = 0{.}25\\, L_\\odot$?

$d \\approx \\sqrt{0{.}25} = 0{.}5$ AU, closer than Mercury is to the Sun.

**Example 3.** Take $R_* = 2$ per year, $f_p = 1$, $n_e = 0{.}2$, $f_l = 0{.}5$, $f_i = 0{.}1$, $f_c = 0{.}1$, $L = 10\\,000$ years. Find $N$.

$N = 2 \\cdot 1 \\cdot 0{.}2 \\cdot 0{.}5 \\cdot 0{.}1 \\cdot 0{.}1 \\cdot 10\\,000 = 20$ civilisations.

## Exercises

1. A planet dims a Sun-like star by $0{.}01\\%$ in a transit. Find its radius ($R_\\odot = 696\\,000$ km).
2. Where is the habitable zone of a star with $L = 9\\, L_\\odot$?
3. Why does the transit method most easily find large planets close to their stars?
4. Which method was used to find 51 Pegasi b?
5. Name two places in the Solar system where life is searched for, and why.
6. In example 3, what is $N$ if civilisations last only $1000$ years?

### Answers

1. $\\left(\\dfrac{R_p}{R_\\odot}\\right)^2 = 10^{-4}$, $R_p = 0{.}01\\, R_\\odot \\approx 7000$ km: a bit larger than the Earth.
2. $d \\approx \\sqrt{9} = 3$ AU.
3. A large planet blocks more light; a close one transits often, and its orbit is more likely to line up with our view.
4. The radial velocity (Doppler) method.
5. For example Mars (water flowed there in the past) and Europa or Enceladus (liquid oceans under the ice).
6. $N = 2$.`,
        hy: `## Այլ աշխարհներ

Դարեր շարունակ մարդիկ մտածում էին՝ այլ աստղեր մոլորակներ ունե՞ն։ Առաջինները հայտնաբերվեցին 1992 թվականին՝ պուլսարի շուրջ։ 1995 թվականին Միշել Մայորը և Դիդիե Կելոզը գտան **51 Պեգասի b**-ն՝ հսկա մոլորակ, որը Արեգակի նման աստղի շուրջ պտտվում է ընդամենը $4{,}2$ օրում, Արեգակից Մերկուրիի հեռավորությունից շատ ավելի մոտ (Նոբելյան մրցանակ, 2019)։ Այսօր հաստատված է ավելի քան $6000$ **էկզոմոլորակ**, և թվում է, որ աստղերի մեծ մասն ունի մոլորակներ։

## Ինչպես գտնել մոլորակ, որը չես տեսնում

- **Ճառագայթային արագության (դոպլերյան) եղանակ։** Մոլորակը և նրա աստղը պտտվում են զանգվածների ընդհանուր կենտրոնի շուրջ, ուստի աստղը «օրորվում» է։ Նրա սպեկտրալ գծերը տեղաշարժվում են այս ու այն կողմ։ Յուպիտերը Արեգակին ստիպում է շարժվել մոտ $12$ մ/վ արագությամբ, Երկիրը՝ ընդամենը $9$ սմ/վ։
- **Տարանցման եղանակ։** Եթե ուղեծիրը տեսնում ենք կողից, մոլորակը յուրաքանչյուր պտույտի ժամանակ անցնում է աստղի առջևով և մի փոքր թուլացնում նրա լույսը։ Պայծառության անկումը $\\dfrac{\\Delta F}{F} = \\left(\\dfrac{R_p}{R_*}\\right)^2$ է։ Կեպլեր աստղադիտակն (2009–2018) այս եղանակով հազարավոր մոլորակներ գտավ, TESS-ը շարունակում է 2018 թվականից։
- **Ուղիղ պատկերում**․ աստղի փայլը ծածկելով՝ լուսանկարում են նրանից հեռու գտնվող երիտասարդ, տաք հսկա մոլորակները։
- **Միկրոոսպնյակավորում**․ մոլորակով աստղը գործում է որպես գրավիտացիոն ոսպնյակ ավելի հեռավոր աստղի համար։

## Որտեղ կարող է կյանք լինել

Մեզ հայտնի կյանքին անհրաժեշտ է **հեղուկ ջուր**։ **Կենսունակության գոտին** աստղից այն հեռավորությունների տիրույթն է, որտեղ մոլորակը կարող է այն ունենալ։ Ավելի աղոտ աստղի շուրջ այն ավելի մոտ է․

$$d_{\\text{ԿԳ}} \\approx \\sqrt{\\dfrac{L}{L_\\odot}},$$

որտեղ $d$-ն աստղագիտական միավորներով է։

Հայտնի օրինակներ՝ **Պրոքսիմա Կենտավրոս b**-ն (2016)՝ մեր ամենամոտ աստղի շուրջ, և **TRAPPIST-1** կարմիր թզուկը՝ Երկրի չափի յոթ մոլորակով (2017), որոնցից երեքը կենսունակության գոտում են։ Ջեյմս Ուեբ աստղադիտակն այժմ ուսումնասիրում է այդպիսի մոլորակների մթնոլորտները՝ փնտրելով ջուր, ածխաթթու գազ կամ մեթան։

Արեգակնային համակարգում կյանք են փնտրում Մարսի վրա, որտեղ միլիարդավոր տարիներ առաջ գետեր և լճեր կային, և Յուպիտերի Եվրոպա ու Սատուրնի Էնցելադ արբանյակների սառույցի տակ գտնվող օվկիանոսներում։

## Մենա՞կ ենք մենք

1960 թվականին Ֆրենկ Դրեյքը կատարեց այլ քաղաքակրթությունների ազդանշանների առաջին ռադիոորոնումը։ Գնահատելու համար, թե մեր Գալակտիկայում քանի քաղաքակրթություն կարող է «խոսել», նա գրեց **Դրեյքի հավասարումը**․

$$N = R_* \\cdot f_p \\cdot n_e \\cdot f_l \\cdot f_i \\cdot f_c \\cdot L,$$

աստղառաջացման արագությունը՝ բազմապատկած մոլորակներով աստղերի բաժնով, մեկ համակարգում հարմար մոլորակների թվով, կյանքի, բանականության և ռադիոտեխնիկայի հայտնվելու բաժիններով և $L$-ով՝ թե որքան է քաղաքակրթությունն ազդանշաններ ուղարկում։ Այժմ հայտնի են միայն առաջին բազմապատկիչները։

Հայաստանն էլ իր դերն ունեցավ․ **1964** թվականին Բյուրականի աստղադիտարանում անցկացվեց արտերկրային քաղաքակրթությունների մասին առաջին խորհրդային խորհրդաժողովը, որտեղ Նիկոլայ Կարդաշևն առաջարկեց քաղաքակրթությունների իր հայտնի սանդղակը՝ ըստ նրանց օգտագործած էներգիայի։ **1971** թվականին Բյուրականը հյուրընկալեց այդ թեմայով առաջին միջազգային խորհրդաժողովը՝ խորհրդային և ամերիկացի գիտնականների մասնակցությամբ, այդ թվում՝ Կարլ Սագանի և Ֆրենկ Դրեյքի։ Առայժմ ոչ մի ազդանշան չի գտնվել։

## Լուծված օրինակներ

**Օրինակ 1։** Որքա՞ն է Յուպիտերը ($R_J \\approx 0{,}1\\, R_\\odot$) թուլացնում Արեգակի լույսը տարանցման ժամանակ։ Իսկ Երկի՞րը ($R_E \\approx R_\\odot / 109$)։

Յուպիտեր՝ $(0{,}1)^2 = 0{,}01$, այսինքն՝ $1\\%$։ Երկիր՝ $\\left(\\dfrac{1}{109}\\right)^2 \\approx 8{,}4 \\cdot 10^{-5}$՝ տասը հազարերորդականից պակաս։

**Օրինակ 2։** Որտե՞ղ է $L = 0{,}25\\, L_\\odot$ լուսատվությամբ կարմիր թզուկի կենսունակության գոտին։

$d \\approx \\sqrt{0{,}25} = 0{,}5$ ա․մ․՝ ավելի մոտ, քան Մերկուրին է Արեգակին։

**Օրինակ 3։** Վերցնենք $R_* = 2$ տարեկան, $f_p = 1$, $n_e = 0{,}2$, $f_l = 0{,}5$, $f_i = 0{,}1$, $f_c = 0{,}1$, $L = 10\\,000$ տարի։ Գտեք $N$-ը։

$N = 2 \\cdot 1 \\cdot 0{,}2 \\cdot 0{,}5 \\cdot 0{,}1 \\cdot 0{,}1 \\cdot 10\\,000 = 20$ քաղաքակրթություն։

## Վարժություններ

1. Մոլորակը տարանցման ժամանակ Արեգակի նման աստղի լույսը թուլացնում է $0{,}01\\%$-ով։ Գտեք նրա շառավիղը ($R_\\odot = 696\\,000$ կմ)։
2. Որտե՞ղ է $L = 9\\, L_\\odot$ լուսատվությամբ աստղի կենսունակության գոտին։
3. Ինչո՞ւ է տարանցման եղանակով ամենահեշտը գտնել աստղերին մոտ գտնվող մեծ մոլորակները։
4. Ո՞ր եղանակով գտնվեց 51 Պեգասի b-ն։
5. Նշեք Արեգակնային համակարգի երկու վայր, որտեղ կյանք են փնտրում, և ինչու։
6. 3-րդ օրինակում որքա՞ն կլինի $N$-ը, եթե քաղաքակրթություններն ապրեն ընդամենը $1000$ տարի։

### Պատասխաններ

1. $\\left(\\dfrac{R_p}{R_\\odot}\\right)^2 = 10^{-4}$, $R_p = 0{,}01\\, R_\\odot \\approx 7000$ կմ՝ Երկրից մի փոքր մեծ։
2. $d \\approx \\sqrt{9} = 3$ ա․մ․։
3. Մեծ մոլորակն ավելի շատ լույս է ծածկում, մոտը հաճախ է անցնում աստղի առջևով, և նրա ուղեծիրն ավելի հավանական է, որ համընկնի մեր տեսադաշտին։
4. Ճառագայթային արագության (դոպլերյան) եղանակով։
5. Օրինակ՝ Մարսը (անցյալում այնտեղ ջուր էր հոսում) և Եվրոպան կամ Էնցելադը (սառույցի տակ հեղուկ օվկիանոսներ)։
6. $N = 2$։`,
        ru: `## Другие миры

Веками люди гадали, есть ли планеты у других звёзд. Первые нашли в 1992 году — у пульсара. В 1995 году Мишель Майор и Дидье Кело обнаружили **51 Пегаса b** — планету-гигант, обращающуюся вокруг похожей на Солнце звезды всего за $4{,}2$ суток, гораздо ближе, чем Меркурий к Солнцу (Нобелевская премия 2019 года). Сегодня подтверждено более $6000$ **экзопланет**, и, похоже, у большинства звёзд есть планеты.

## Как найти планету, которую не видно

- **Метод лучевых скоростей (доплеровский).** Планета и звезда обращаются вокруг общего центра масс, поэтому звезда «покачивается». Её спектральные линии смещаются туда-сюда. Юпитер заставляет Солнце двигаться со скоростью около $12$ м/с, Земля — всего $9$ см/с.
- **Транзитный метод.** Если орбита видна с ребра, планета на каждом обороте проходит перед звездой и немного ослабляет её свет. Падение блеска $\\dfrac{\\Delta F}{F} = \\left(\\dfrac{R_p}{R_*}\\right)^2$. Телескоп «Кеплер» (2009–2018) нашёл так тысячи планет; с 2018 года работу продолжает TESS.
- **Прямое изображение**: закрыв блеск звезды, фотографируют молодые горячие планеты-гиганты вдали от неё.
- **Микролинзирование**: звезда с планетой работает как гравитационная линза для более далёкой звезды.

## Где может существовать жизнь

Жизни, какую мы знаем, нужна **жидкая вода**. **Зона обитаемости** — диапазон расстояний от звезды, где планета может её иметь. У более слабой звезды она ближе:

$$d_{\\text{ЗО}} \\approx \\sqrt{\\dfrac{L}{L_\\odot}} \\text{ а.е.}$$

Знаменитые примеры: **Проксима Центавра b** (2016) у ближайшей к нам звезды и красный карлик **TRAPPIST-1** с семью планетами размером с Землю (2017), три из которых в зоне обитаемости. Телескоп «Джеймс Уэбб» сейчас изучает атмосферы таких планет, ища воду, углекислый газ или метан.

В Солнечной системе жизнь ищут на Марсе, где миллиарды лет назад были реки и озёра, и в океанах подо льдом спутника Юпитера Европы и спутника Сатурна Энцелада.

## Одни ли мы?

В 1960 году Фрэнк Дрейк провёл первый радиопоиск сигналов других цивилизаций. Чтобы прикинуть, сколько цивилизаций могут «говорить» в нашей Галактике, он записал **уравнение Дрейка**:

$$N = R_* \\cdot f_p \\cdot n_e \\cdot f_l \\cdot f_i \\cdot f_c \\cdot L,$$

темп звездообразования, умноженный на долю звёзд с планетами, число подходящих планет в системе, доли, где появляются жизнь, разум и радиотехника, и на $L$ — как долго цивилизация посылает сигналы. Сейчас известны лишь первые множители.

Свою роль сыграла и Армения: в **1964** году в Бюраканской обсерватории прошло первое советское совещание по внеземным цивилизациям, где Николай Кардашёв предложил свою знаменитую шкалу цивилизаций по потребляемой энергии. В **1971** году Бюракан принял первую международную конференцию по этой теме с участием советских и американских учёных, среди них Карл Саган и Фрэнк Дрейк. Пока ни одного сигнала не найдено.

## Разобранные примеры

**Пример 1.** Насколько Юпитер ($R_J \\approx 0{,}1\\, R_\\odot$) ослабляет Солнце при транзите? А Земля ($R_E \\approx R_\\odot / 109$)?

Юпитер: $(0{,}1)^2 = 0{,}01$, то есть $1\\%$. Земля: $\\left(\\dfrac{1}{109}\\right)^2 \\approx 8{,}4 \\cdot 10^{-5}$ — меньше одной десятитысячной.

**Пример 2.** Где зона обитаемости красного карлика с $L = 0{,}25\\, L_\\odot$?

$d \\approx \\sqrt{0{,}25} = 0{,}5$ а. е. — ближе, чем Меркурий к Солнцу.

**Пример 3.** Возьмём $R_* = 2$ в год, $f_p = 1$, $n_e = 0{,}2$, $f_l = 0{,}5$, $f_i = 0{,}1$, $f_c = 0{,}1$, $L = 10\\,000$ лет. Найдите $N$.

$N = 2 \\cdot 1 \\cdot 0{,}2 \\cdot 0{,}5 \\cdot 0{,}1 \\cdot 0{,}1 \\cdot 10\\,000 = 20$ цивилизаций.

## Упражнения

1. Планета при транзите ослабляет звезду вроде Солнца на $0{,}01\\%$. Найдите её радиус ($R_\\odot = 696\\,000$ км).
2. Где зона обитаемости звезды с $L = 9\\, L_\\odot$?
3. Почему транзитным методом легче всего найти крупные планеты близко к звёздам?
4. Каким методом открыли 51 Пегаса b?
5. Назовите два места в Солнечной системе, где ищут жизнь, и объясните почему.
6. Каким будет $N$ в примере 3, если цивилизации живут всего $1000$ лет?

### Ответы

1. $\\left(\\dfrac{R_p}{R_\\odot}\\right)^2 = 10^{-4}$, $R_p = 0{,}01\\, R_\\odot \\approx 7000$ км — чуть больше Земли.
2. $d \\approx \\sqrt{9} = 3$ а. е.
3. Крупная планета закрывает больше света; близкая часто проходит перед звездой, и её орбита с большей вероятностью совпадает с нашим лучом зрения.
4. Методом лучевых скоростей (доплеровским).
5. Например, Марс (в прошлом там текла вода) и Европа или Энцелад (жидкие океаны подо льдом).
6. $N = 2$.`,
      },
      [
        q(t("The first planet around a Sun-like star, 51 Pegasi b, was found in…", "Արեգակի նման աստղի շուրջ առաջին մոլորակը՝ 51 Պեգասի b-ն, հայտնաբերվեց…", "Первую планету у похожей на Солнце звезды, 51 Пегаса b, открыли в…"), [t("1995", "1995 թվականին", "1995 году"), t("1965", "1965 թվականին", "1965 году"), t("2015", "2015 թվականին", "2015 году")], 0),
        q(t("The transit method notices a planet by…", "Տարանցման եղանակը մոլորակը նկատում է…", "Транзитный метод замечает планету по…"), [t("a small dip in the star's brightness", "աստղի պայծառության փոքր անկումով", "небольшому падению блеска звезды"), t("the planet's own light", "մոլորակի սեփական լույսով", "собственному свету планеты"), t("radio signals", "ռադիոազդանշաններով", "радиосигналам")], 0),
        q(t("A planet with a radius one tenth of its star's dims it in a transit by…", "Աստղի շառավղի մեկ տասներորդը կազմող շառավղով մոլորակը տարանցման ժամանակ թուլացնում է նրա լույսը…", "Планета с радиусом в одну десятую радиуса звезды при транзите ослабляет её на…"), [t("1%", "1%-ով", "1%"), t("10%", "10%-ով", "10%"), t("0.1%", "0,1%-ով", "0,1%")], 0),
        q(t("The habitable zone is where a planet can have…", "Կենսունակության գոտին այնտեղ է, որտեղ մոլորակը կարող է ունենալ…", "Зона обитаемости — там, где на планете может быть…"), [t("liquid water", "հեղուկ ջուր", "жидкая вода"), t("an iron core", "երկաթե միջուկ", "железное ядро"), t("rings", "օղակներ", "кольца")], 0),
        q(t("Around a star fainter than the Sun, the habitable zone is…", "Արեգակից աղոտ աստղի շուրջ կենսունակության գոտին…", "У звезды слабее Солнца зона обитаемости…"), [t("closer to the star", "ավելի մոտ է աստղին", "ближе к звезде"), t("farther from the star", "ավելի հեռու է աստղից", "дальше от звезды"), t("the same, at 1 AU", "նույնն է՝ 1 ա․մ․", "такая же — на 1 а. е.")], 0),
        q(t("International conferences on extraterrestrial civilisations were held in 1964 and 1971 at…", "Արտերկրային քաղաքակրթությունների մասին խորհրդաժողովներ անցկացվեցին 1964 և 1971 թվականներին…", "Конференции по внеземным цивилизациям прошли в 1964 и 1971 годах в…"), [t("Byurakan", "Բյուրականում", "Бюракане"), t("Arecibo", "Արեսիբոյում", "Аресибо"), t("Greenwich", "Գրինվիչում", "Гринвиче")], 0),
      ],
    ),
    lesson(
      "astronomy-review",
      ["Course review: the key formulas", "Դասընթացի կրկնություն․ հիմնական բանաձևերը", "Повторение курса: главные формулы"],
      {
        en: ["Recall the main formulas of the course and what each one measures", "Choose the right formula for a problem about planets, stars or galaxies", "Solve mixed problems that join several steps"],
        hy: ["Հիշել դասընթացի հիմնական բանաձևերը և թե ինչ է չափում յուրաքանչյուրը", "Ընտրել ճիշտ բանաձևը մոլորակների, աստղերի կամ գալակտիկաների մասին խնդրի համար", "Լուծել մի քանի քայլ միավորող խառը խնդիրներ"],
        ru: ["Вспомнить главные формулы курса и что измеряет каждая", "Выбирать нужную формулу для задачи о планетах, звёздах или галактиках", "Решать смешанные задачи из нескольких шагов"],
      },
      {
        en: `## The formula toolbox

| What we want | Formula | Units |
|---|---|---|
| Period of a planet | $T^2 = a^3$ | years, AU |
| Mass of a pair | $M_1 + M_2 = \\dfrac{a^3}{T^2}$ | $M_\\odot$, AU, years |
| Distance to a star | $d = \\dfrac{1}{\\pi''}$ | parsecs |
| Absolute magnitude | $M = m + 5 - 5 \\lg d$ | $d$ in parsecs |
| Luminosity | $\\dfrac{L}{L_\\odot} = 10^{0{.}4(4{.}8 - M)}$ | solar units |
| Temperature from colour | $\\lambda_{\\max} = \\dfrac{2{.}9 \\cdot 10^{-3}}{T}$ | m, K |
| Radius of a star | $\\dfrac{R}{R_\\odot} = \\sqrt{\\dfrac{L}{L_\\odot}} \\left(\\dfrac{T_\\odot}{T}\\right)^2$ | solar units |
| Size from angle | $D = d \\cdot \\alpha$ | $\\alpha$ in radians |
| Speed from spectrum | $v \\approx cz$, $z = \\dfrac{\\Delta\\lambda}{\\lambda_0}$ | small $z$ |
| Hubble's law | $v = H_0 d$, $H_0 \\approx 70$ | km/s, Mpc |
| Black hole | $r_s = \\dfrac{2GM}{c^2} \\approx 3 \\text{ km} \\cdot \\dfrac{M}{M_\\odot}$ | |

## How to attack a problem

1. Write down what is given, with units.
2. Find the quantity asked for in the left column, and what it needs.
3. If a needed value is missing, look for a formula that gives it from what you have: a chain of two or three steps is normal.
4. Check the answer against something you know: the Sun, the Earth, the nearest stars.

## Worked examples

**Example 1.** A star has $\\pi = 0{.}05''$ and $m = 6$. How far is it, and how does it compare with the Sun?

$d = 20$ pc; $M = 6 + 5 - 5 \\lg 20 \\approx 11 - 6{.}5 = 4{.}5$; $L \\approx 10^{0{.}4 \\cdot 0{.}3} \\approx 1{.}3\\, L_\\odot$: a star very much like the Sun.

**Example 2.** An asteroid has $a = 4$ AU. Its period?

$T = \\sqrt{4^3} = 8$ years.

**Example 3.** In a galaxy's spectrum the hydrogen line $656{.}3$ nm is seen at $662{.}9$ nm. How far is the galaxy?

$z = \\dfrac{6{.}6}{656{.}3} \\approx 0{.}01$; $v \\approx 3000$ km/s; $d = \\dfrac{3000}{70} \\approx 43$ Mpc $\\approx 140$ million light-years.

## Exercises

1. Mars has $a = 1{.}52$ AU. Find its period.
2. A star shines most strongly at $1$ μm. Its temperature and likely spectral class?
3. A star has a parallax of $0{.}2''$. Find its distance in light-years.
4. A star has the Sun's luminosity and half its temperature. Its radius?
5. A Cepheid with a period of $10$ days has $m = 10$. How far is it? (Use $M \\approx -4{.}2$.)
6. A galaxy recedes at $21\\,000$ km/s. How far is it in Mpc and in light-years?

### Answers

1. $T = \\sqrt{1{.}52^3} \\approx \\sqrt{3{.}51} \\approx 1{.}87$ years.
2. $T = \\dfrac{2{.}9 \\cdot 10^{-3}}{10^{-6}} = 2900$ K, class M: a red star.
3. $d = 5$ pc $\\approx 16$ ly.
4. $R = 1 \\cdot 2^2 = 4\\, R_\\odot$.
5. $\\lg d = \\dfrac{10 + 4{.}2 + 5}{5} = 3{.}84$, $d \\approx 6900$ pc $\\approx 7$ kpc: inside our Galaxy.
6. $d = 300$ Mpc $\\approx 1$ billion light-years.`,
        hy: `## Բանաձևերի «գործիքատուփը»

| Ինչ ենք ուզում | Բանաձև | Միավորներ |
|---|---|---|
| Մոլորակի պարբերություն | $T^2 = a^3$ | տարի, ա․մ․ |
| Զույգի զանգված | $M_1 + M_2 = \\dfrac{a^3}{T^2}$ | $M_\\odot$, ա․մ․, տարի |
| Հեռավորություն աստղից | $d = \\dfrac{1}{\\pi''}$ | պարսեկ |
| Բացարձակ մեծություն | $M = m + 5 - 5 \\lg d$ | $d$-ն պարսեկներով |
| Լուսատվություն | $\\dfrac{L}{L_\\odot} = 10^{0{,}4(4{,}8 - M)}$ | արեգակնային միավորներ |
| Ջերմաստիճան՝ ըստ գույնի | $\\lambda_{\\max} = \\dfrac{2{,}9 \\cdot 10^{-3}}{T}$ | մ, Կ |
| Աստղի շառավիղ | $\\dfrac{R}{R_\\odot} = \\sqrt{\\dfrac{L}{L_\\odot}} \\left(\\dfrac{T_\\odot}{T}\\right)^2$ | արեգակնային միավորներ |
| Չափ՝ ըստ անկյան | $D = d \\cdot \\alpha$ | $\\alpha$-ն ռադիաններով |
| Արագություն՝ ըստ սպեկտրի | $v \\approx cz$, $z = \\dfrac{\\Delta\\lambda}{\\lambda_0}$ | փոքր $z$ |
| Հաբլի օրենք | $v = H_0 d$, $H_0 \\approx 70$ | կմ/վ, Մպկ |
| Սև խոռոչ | $r_s = \\dfrac{2GM}{c^2} \\approx 3 \\text{ կմ} \\cdot \\dfrac{M}{M_\\odot}$ | |

## Ինչպես մոտենալ խնդրին

1. Գրեք տրվածը՝ միավորներով։
2. Ձախ սյունակում գտեք փնտրվող մեծությունը և թե ինչ է նրան անհրաժեշտ։
3. Եթե անհրաժեշտ արժեքը բացակայում է, փնտրեք բանաձև, որը այն տալիս է ձեր ունեցածից․ երկու-երեք քայլից բաղկացած շղթան սովորական է։
4. Ստուգեք պատասխանը ձեզ հայտնի որևէ բանի հետ՝ Արեգակ, Երկիր, մոտակա աստղեր։

## Լուծված օրինակներ

**Օրինակ 1։** Աստղի համար $\\pi = 0{,}05''$ և $m = 6$։ Որքա՞ն հեռու է այն, և ինչպե՞ս է համեմատվում Արեգակի հետ։

$d = 20$ պկ, $M = 6 + 5 - 5 \\lg 20 \\approx 11 - 6{,}5 = 4{,}5$, $L \\approx 10^{0{,}4 \\cdot 0{,}3} \\approx 1{,}3\\, L_\\odot$՝ Արեգակին շատ նման աստղ։

**Օրինակ 2։** Աստերոիդի համար $a = 4$ ա․մ․։ Որքա՞ն է նրա պարբերությունը։

$T = \\sqrt{4^3} = 8$ տարի։

**Օրինակ 3։** Գալակտիկայի սպեկտրում ջրածնի $656{,}3$ նմ գիծը երևում է $662{,}9$ նմ-ում։ Որքա՞ն հեռու է գալակտիկան։

$z = \\dfrac{6{,}6}{656{,}3} \\approx 0{,}01$, $v \\approx 3000$ կմ/վ, $d = \\dfrac{3000}{70} \\approx 43$ Մպկ $\\approx 140$ միլիոն լուսային տարի։

## Վարժություններ

1. Մարսի համար $a = 1{,}52$ ա․մ․։ Գտեք նրա պարբերությունը։
2. Աստղն ամենաուժեղը ճառագայթում է $1$ մկմ-ում։ Որքա՞ն է նրա ջերմաստիճանը, և ո՞ր սպեկտրալ դասին է այն հավանաբար պատկանում։
3. Աստղի պարալաքսը $0{,}2''$ է։ Գտեք նրա հեռավորությունը լուսային տարիներով։
4. Աստղն ունի Արեգակի լուսատվությունը և նրա ջերմաստիճանի կեսը։ Որքա՞ն է նրա շառավիղը։
5. $10$ օր պարբերությամբ ցեֆեիդի համար $m = 10$։ Որքա՞ն հեռու է այն։ (Օգտագործեք $M \\approx -4{,}2$)
6. Գալակտիկան հեռանում է $21\\,000$ կմ/վ արագությամբ։ Որքա՞ն հեռու է այն Մպկ-ով և լուսային տարիներով։

### Պատասխաններ

1. $T = \\sqrt{1{,}52^3} \\approx \\sqrt{3{,}51} \\approx 1{,}87$ տարի։
2. $T = \\dfrac{2{,}9 \\cdot 10^{-3}}{10^{-6}} = 2900$ Կ, M դաս՝ կարմիր աստղ։
3. $d = 5$ պկ $\\approx 16$ լ․տ․։
4. $R = 1 \\cdot 2^2 = 4\\, R_\\odot$։
5. $\\lg d = \\dfrac{10 + 4{,}2 + 5}{5} = 3{,}84$, $d \\approx 6900$ պկ $\\approx 7$ կպկ՝ մեր Գալակտիկայի ներսում։
6. $d = 300$ Մպկ $\\approx 1$ միլիարդ լուսային տարի։`,
        ru: `## «Набор инструментов» из формул

| Что ищем | Формула | Единицы |
|---|---|---|
| Период планеты | $T^2 = a^3$ | годы, а. е. |
| Масса пары | $M_1 + M_2 = \\dfrac{a^3}{T^2}$ | $M_\\odot$, а. е., годы |
| Расстояние до звезды | $d = \\dfrac{1}{\\pi''}$ | парсеки |
| Абсолютная величина | $M = m + 5 - 5 \\lg d$ | $d$ в парсеках |
| Светимость | $\\dfrac{L}{L_\\odot} = 10^{0{,}4(4{,}8 - M)}$ | солнечные единицы |
| Температура по цвету | $\\lambda_{\\max} = \\dfrac{2{,}9 \\cdot 10^{-3}}{T}$ | м, К |
| Радиус звезды | $\\dfrac{R}{R_\\odot} = \\sqrt{\\dfrac{L}{L_\\odot}} \\left(\\dfrac{T_\\odot}{T}\\right)^2$ | солнечные единицы |
| Размер по углу | $D = d \\cdot \\alpha$ | $\\alpha$ в радианах |
| Скорость по спектру | $v \\approx cz$, $z = \\dfrac{\\Delta\\lambda}{\\lambda_0}$ | малые $z$ |
| Закон Хаббла | $v = H_0 d$, $H_0 \\approx 70$ | км/с, Мпк |
| Чёрная дыра | $r_s = \\dfrac{2GM}{c^2} \\approx 3 \\text{ км} \\cdot \\dfrac{M}{M_\\odot}$ | |

## Как браться за задачу

1. Запишите, что дано, с единицами.
2. Найдите искомую величину в левом столбце и то, что для неё нужно.
3. Если нужной величины нет, ищите формулу, которая даёт её из того, что есть: цепочка из двух-трёх шагов — это нормально.
4. Сверьте ответ с чем-то знакомым: Солнцем, Землёй, ближайшими звёздами.

## Разобранные примеры

**Пример 1.** У звезды $\\pi = 0{,}05''$ и $m = 6$. Как далеко она и как соотносится с Солнцем?

$d = 20$ пк; $M = 6 + 5 - 5 \\lg 20 \\approx 11 - 6{,}5 = 4{,}5$; $L \\approx 10^{0{,}4 \\cdot 0{,}3} \\approx 1{,}3\\, L_\\odot$ — звезда, очень похожая на Солнце.

**Пример 2.** У астероида $a = 4$ а. е. Его период?

$T = \\sqrt{4^3} = 8$ лет.

**Пример 3.** В спектре галактики линия водорода $656{,}3$ нм видна на $662{,}9$ нм. Как далеко галактика?

$z = \\dfrac{6{,}6}{656{,}3} \\approx 0{,}01$; $v \\approx 3000$ км/с; $d = \\dfrac{3000}{70} \\approx 43$ Мпк $\\approx 140$ миллионов световых лет.

## Упражнения

1. У Марса $a = 1{,}52$ а. е. Найдите его период.
2. Звезда сильнее всего излучает на $1$ мкм. Какова её температура и вероятный спектральный класс?
3. Параллакс звезды $0{,}2''$. Найдите расстояние до неё в световых годах.
4. У звезды светимость Солнца и вдвое меньшая температура. Её радиус?
5. У цефеиды с периодом $10$ суток $m = 10$. Как далеко она? (Возьмите $M \\approx -4{,}2$.)
6. Галактика удаляется со скоростью $21\\,000$ км/с. Как далеко она в Мпк и в световых годах?

### Ответы

1. $T = \\sqrt{1{,}52^3} \\approx \\sqrt{3{,}51} \\approx 1{,}87$ года.
2. $T = \\dfrac{2{,}9 \\cdot 10^{-3}}{10^{-6}} = 2900$ К, класс M — красная звезда.
3. $d = 5$ пк $\\approx 16$ св. лет.
4. $R = 1 \\cdot 2^2 = 4\\, R_\\odot$.
5. $\\lg d = \\dfrac{10 + 4{,}2 + 5}{5} = 3{,}84$, $d \\approx 6900$ пк $\\approx 7$ кпк — внутри нашей Галактики.
6. $d = 300$ Мпк $\\approx 1$ миллиард световых лет.`,
      },
      [
        q(t("Which formula gives the distance to a star from its parallax?", "Ո՞ր բանաձևն է տալիս աստղի հեռավորությունը պարալաքսից։", "Какая формула даёт расстояние до звезды по параллаксу?"), [t("d = 1/π", "d = 1/π", "d = 1/π"), t("v = H₀d", "v = H₀d", "v = H₀d"), t("T² = a³", "T² = a³", "T² = a³")], 0),
        q(t("To find a star's temperature from its colour, we use…", "Աստղի ջերմաստիճանը գույնից գտնելու համար օգտագործում ենք…", "Чтобы найти температуру звезды по цвету, используют…"), [t("Wien's law", "Վինի օրենքը", "закон Вина"), t("Hubble's law", "Հաբլի օրենքը", "закон Хаббла"), t("Kepler's first law", "Կեպլերի առաջին օրենքը", "первый закон Кеплера")], 0),
        q(t("An asteroid with a = 9 AU has a period of…", "a = 9 ա․մ․ ունեցող աստերոիդի պարբերությունը…", "Период астероида с a = 9 а. е. равен…"), [t("27 years", "27 տարի է", "27 годам"), t("9 years", "9 տարի է", "9 годам"), t("81 years", "81 տարի է", "81 году")], 0),
        q(t("A galaxy 200 Mpc away recedes at about…", "200 Մպկ հեռավորությամբ գալակտիկան հեռանում է մոտ…", "Галактика на расстоянии 200 Мпк удаляется со скоростью около…"), [t("14 000 km/s", "14 000 կմ/վ արագությամբ", "14 000 км/с"), t("200 km/s", "200 կմ/վ արագությամբ", "200 км/с"), t("70 km/s", "70 կմ/վ արագությամբ", "70 км/с")], 0),
        q(t("Two stars of the same temperature; one is 100 times more luminous. Its radius is…", "Երկու աստղ ունեն նույն ջերմաստիճանը, մեկը 100 անգամ ավելի լուսավոր է։ Նրա շառավիղը…", "У двух звёзд одинаковая температура, одна в 100 раз ярче. Её радиус…"), [t("10 times larger", "10 անգամ մեծ է", "в 10 раз больше"), t("100 times larger", "100 անգամ մեծ է", "в 100 раз больше"), t("the same", "նույնն է", "такой же")], 0),
        q(t("The Schwarzschild radius of a black hole of 4 million solar masses is about…", "4 միլիոն արեգակնային զանգվածով սև խոռոչի Շվարցշիլդի շառավիղը մոտավորապես…", "Радиус Шварцшильда чёрной дыры массой 4 миллиона масс Солнца примерно…"), [t("12 million km", "12 միլիոն կմ է", "12 миллионов км"), t("12 km", "12 կմ է", "12 км"), t("12 billion km", "12 միլիարդ կմ է", "12 миллиардов км")], 0),
      ],
    ),
  ],
};
