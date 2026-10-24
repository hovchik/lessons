import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Atom and nucleus", "Ատոմ և միջուկ", "Строение атома и атомного ядра"),
  summary: t("Radioactivity and the three radiations, Rutherford's experiment and the planetary model, the composition of the nucleus, nuclear reactions and nuclear power, radiation and health, and the structure of the Universe.", "Ռադիոակտիվություն և երեք ճառագայթումները, Ռեզերֆորդի փորձը և մոլորակային մոդելը, միջուկի կազմությունը, միջուկային ռեակցիաները և միջուկային էներգետիկան, ճառագայթումը և առողջությունը, Տիեզերքի կառուցվածքը։", "Радиоактивность и три вида излучения, опыт Резерфорда и планетарная модель, состав ядра, ядерные реакции и ядерная энергетика, излучение и здоровье, строение Вселенной."),
  lessons: [
    lesson(
      "radioactivity",
      ["Radioactivity; alpha, beta and gamma radiation", "Ռադիոակտիվություն, ալֆա, բետա, գամմա ճառագայթում", "Радиоактивность; альфа-, бета- и гамма-излучение"],
      {
        en: ["Describe how radioactivity was discovered", "Name the three radiations and compare them", "Say what half-life means and use it in simple problems"],
        hy: ["Նկարագրել, թե ինչպես է հայտնագործվել ռադիոակտիվությունը", "Նշել երեք ճառագայթումները և համեմատել նրանք", "Ասել, թե ինչ է կիսատրոհման պարբերությունը, և կիրառել այն պարզ խնդիրներում"],
        ru: ["Описывать, как была открыта радиоактивность", "Называть три вида излучения и сравнивать их", "Говорить, что такое период полураспада, и применять его в простых задачах"],
      },
      {
        en: `## The discovery

In 1896 Henri Becquerel found that a salt of uranium left a trace on a photographic plate wrapped in black paper, without any light. Marie and Pierre Curie then found two much more active elements, polonium and radium, and gave the effect its name.

> **Radioactivity** is the spontaneous emission of radiation by the nuclei of some elements.

Two things about it are striking. It cannot be switched off, slowed down or started by heating, cooling or any chemical reaction. And it comes from the nucleus, not from the electrons, which is why it was the first window into the inside of the atom.

## The three radiations

Placed in a magnetic field, the radiation of radium splits into three parts, which tells us at once that two of them are charged and one is not.

| Radiation | What it is | Charge | Stopped by |
|---|---|---|---|
| alpha, $\\alpha$ | a helium nucleus, two protons and two neutrons | $+2$ | a sheet of paper, a few cm of air |
| beta, $\\beta$ | a fast electron | $-1$ | a few mm of aluminium |
| gamma, $\\gamma$ | an electromagnetic wave of very short length | $0$ | thick lead or concrete |

The order is reversed for the harm done inside the body: alpha particles travel the shortest distance but give up all their energy in a tiny volume, so a source swallowed or breathed in is far more dangerous than the same source held at arm's length.

**Example 1.** A beam of radiation passes a sheet of paper unchanged except for the alpha part, which the paper absorbs completely.
**Example 2.** In a magnetic field the alpha and the beta parts bend in opposite directions, and the beta part bends much more because an electron is thousands of times lighter.

## Half-life

The decay of a single nucleus cannot be predicted: it is a matter of chance. For a large number of nuclei, though, the law is exact.

> The **half-life** $T$ is the time in which half of the nuclei of a sample decay.

After $T$ half of the original nuclei are left, after $2T$ a quarter, after $3T$ an eighth, and so on. Half-lives run from fractions of a second to billions of years: $T$ is $3{.}8$ days for radon, $1600$ years for radium, $5700$ years for carbon-14 and $4{.}5$ billion years for uranium-238.

**Example 3.** Of $8$ g of a substance with $T = 2$ days, after $6$ days one eighth is left, that is $1$ g.
**Example 4.** A sample falls to a quarter of its activity in $10$ hours. Two half-lives have passed, so $T = 5$ hours.
**Example 5.** Carbon-14 in a wooden find has fallen to half its usual share, so the wood is about $5700$ years old. This is radiocarbon dating, and the same idea applied to uranium in rocks gives the age of the Earth.
**Example 6.** The long half-life of uranium is why its waste has to be stored for thousands of years, and the short half-life of some medical isotopes is why they are made in the hospital shortly before use.

### Exercises

1. Who discovered radioactivity, and who named it?
2. Define radioactivity.
3. Can radioactivity be stopped by cooling or by a chemical reaction?
4. Name the three radiations and say what each one is.
5. Which radiation is stopped by a sheet of paper, and which needs thick lead?
6. What is the half-life?
7. Of $16$ g of a substance with $T = 3$ days, how much is left after $12$ days?
8. A sample falls to an eighth of its activity in $21$ years. Find the half-life.

### Answers

1. Becquerel discovered it; Marie and Pierre Curie named it and found polonium and radium.
2. The spontaneous emission of radiation by the nuclei of some elements.
3. No, it depends on the nucleus and not on the conditions.
4. Alpha, a helium nucleus; beta, a fast electron; gamma, a very short electromagnetic wave.
5. Alpha is stopped by paper; gamma needs thick lead or concrete.
6. The time in which half of the nuclei of a sample decay.
7. Four half-lives pass, so $1$ g is left.
8. Three half-lives, so $T = 7$ years.`,
        hy: `## Հայտնագործությունը

1896 թվականին Անրի Բեքերելը գտավ, որ ուրանի աղը սև թղթով փաթաթված լուսանկարչական թիթեղի վրա հետք թողեց՝ առանց ոչ մի լույսի։ Մարիա և Պիեռ Կյուրիները հետո գտան երկու շատ ավելի ակտիվ տարրեր՝ պոլոնիում և ռադիում, և երևույթին տվեցին իր անունը։

> **Ռադիոակտիվություն** է որոշ տարրերի միջուկների կողմից ճառագայթման ինքնաբերական արձակումը։

Նրա մեջ երկու բան ապշեցուցիչ է։ Նրան չի կարելի անջատել, դանդաղեցնել կամ սկսել տաքացնելով, սառեցնելով կամ ցանկացած քիմիական ռեակցիայով։ Եվ այն գալիս է միջուկից, ոչ թե էլեկտրոններից, դրա համար էլ դարձավ ատոմի ներսի առաջին պատուհանը։

## Երեք ճառագայթումները

Մագնիսական դաշտում դրված ռադիումի ճառագայթումը բաժանվում է երեք մասի, ինչը միանգամից ասում է, որ նրանցից երկուսը լիցքավորված են, իսկ մեկը՝ ոչ։

| Ճառագայթում | Ինչ է դա | Լիցք | Ինչով է կանգնեցվում |
|---|---|---|---|
| ալֆա, $\\alpha$ | հելիումի միջուկ՝ երկու պրոտոն և երկու նեյտրոն | $+2$ | թղթի թերթիկ, մի քանի սմ օդ |
| բետա, $\\beta$ | արագ էլեկտրոն | $-1$ | մի քանի մմ ալյումին |
| գամմա, $\\gamma$ | շատ կարճ երկարության էլեկտրամագնիսական ալիք | $0$ | հաստ կապար կամ բետոն |

Մարմնի ներսում հասցված վնասի համար կարգը հակառակն է. ալֆա մասնիկներն անցնում են ամենակարճ ճանապարհը, բայց ամբողջ էներգիան տալիս են շատ փոքր ծավալում, ուստի կուլ տված կամ ներշնչված աղբյուրը շատ ավելի վտանգավոր է, քան նույն աղբյուրը ձեռքի հեռավորության վրա պահելը։

**Օրինակ 1։** Ճառագայթման փունջը թղթի թերթիկով անցնում է անփոփոխ՝ բացի ալֆա մասից, որը թուղթը լիովին կլանում է։
**Օրինակ 2։** Մագնիսական դաշտում ալֆա և բետա մասերը բեկվում են հակառակ ուղղություններով, իսկ բետա մասը բեկվում է շատ ավելի, որովհետև էլեկտրոնը հազարավոր անգամ թեթև է։

## Կիսատրոհման պարբերություն

Մեկ միջուկի տրոհումը չի կարելի կանխատեսել. դա պատահականության հարց է։ Մեծ թվով միջուկների համար, սակայն, օրենքը ճշգրիտ է։

> **Կիսատրոհման պարբերությունը** $T$ այն ժամանակն է, որում տրոհվում է նմուշի միջուկների կեսը։

$T$-ից հետո մնում է սկզբնական միջուկների կեսը, $2T$-ից հետո՝ մեկ քառորդը, $3T$-ից հետո՝ մեկ ութերորդը և այլն։ Կիսատրոհման պարբերությունները վայրկյանի մասերից մինչև միլիարդավոր տարիներ են. $T$-ն $3{,}8$ օր է ռադոնի, $1600$ տարի՝ ռադիումի, $5700$ տարի՝ ածխածին-14-ի և $4{,}5$ միլիարդ տարի՝ ուրան-238-ի համար։

**Օրինակ 3։** $T = 2$ օր ունեցող նյութի $8$ գ-ից $6$ օր հետո մնում է մեկ ութերորդը, այսինքն $1$ գ։
**Օրինակ 4։** Նմուշի ակտիվությունը $10$ ժամում նվազում է մինչև մեկ քառորդը։ Անցել է երկու կիսատրոհման պարբերություն, ուստի $T = 5$ ժամ։
**Օրինակ 5։** Փայտե գտածոյի ածխածին-14-ը նվազել է իր սովորական բաժնի կեսին, ուրեմն փայտը մոտ $5700$ տարեկան է։ Սա ռադիոածխածնային թվագրումն է, և նույն գաղափարը ժայռերի ուրանի համար տալիս է Երկրի տարիքը։
**Օրինակ 6։** Ուրանի երկար կիսատրոհման պարբերությունն այն պատճառն է, որ նրա թափոնները պետք է պահվեն հազարավոր տարիներ, իսկ որոշ բժշկական իզոտոպների կարճ պարբերությունն այն պատճառն է, որ նրանք պատրաստվում են հիվանդանոցում կիրառումից քիչ առաջ։

### Վարժություններ

1. Ո՞վ հայտնագործեց ռադիոակտիվությունը, և ո՞վ նրան անվանեց։
2. Սահմանեք ռադիոակտիվությունը։
3. Կարելի՞ է ռադիոակտիվությունը դադարեցնել սառեցնելով կամ քիմիական ռեակցիայով։
4. Նշեք երեք ճառագայթումները և ասեք, թե ինչ է յուրաքանչյուրը։
5. Ո՞ր ճառագայթումը կանգնեցվում է թղթի թերթիկով, և որի՞ն պետք է հաստ կապար։
6. Ի՞նչ է կիսատրոհման պարբերությունը։
7. $T = 3$ օր ունեցող նյութի $16$ գ-ից որքա՞ն է մնում $12$ օր հետո։
8. Նմուշի ակտիվությունը $21$ տարում նվազում է մինչև մեկ ութերորդը։ Գտեք կիսատրոհման պարբերությունը։

### Պատասխաններ

1. Բեքերելը հայտնագործեց, Մարիա և Պիեռ Կյուրիներն անվանեցին և գտան պոլոնիում և ռադիում։
2. Որոշ տարրերի միջուկների կողմից ճառագայթման ինքնաբերական արձակումը։
3. Ոչ, այն կախված է միջուկից և ոչ թե պայմաններից։
4. Ալֆա՝ հելիումի միջուկ, բետա՝ արագ էլեկտրոն, գամմա՝ շատ կարճ էլեկտրամագնիսական ալիք։
5. Ալֆան կանգնեցվում է թղթով, գամմային պետք է հաստ կապար կամ բետոն։
6. Այն ժամանակը, որում տրոհվում է նմուշի միջուկների կեսը։
7. Անցնում է չորս պարբերություն, ուստի մնում է $1$ գ։
8. Երեք պարբերություն, ուստի $T = 7$ տարի։`,
        ru: `## Открытие

В 1896 году Анри Беккерель обнаружил, что соль урана оставила след на фотографической пластинке, завёрнутой в чёрную бумагу, без всякого света. Мария и Пьер Кюри затем нашли два гораздо более активных элемента, полоний и радий, и дали явлению его название.

> **Радиоактивностью** называют самопроизвольное испускание излучения ядрами некоторых элементов.

В ней поражают две вещи. Её нельзя выключить, замедлить или начать нагреванием, охлаждением или какой-либо химической реакцией. И она исходит из ядра, а не от электронов, поэтому она и стала первым окном внутрь атома.

## Три вида излучения

Помещённое в магнитное поле излучение радия разделяется на три части, и это сразу говорит нам, что две из них заряжены, а одна нет.

| Излучение | Что это | Заряд | Чем задерживается |
|---|---|---|---|
| альфа, $\\alpha$ | ядро гелия, два протона и два нейтрона | $+2$ | листом бумаги, несколькими см воздуха |
| бета, $\\beta$ | быстрый электрон | $-1$ | несколькими мм алюминия |
| гамма, $\\gamma$ | электромагнитная волна очень малой длины | $0$ | толстым свинцом или бетоном |

Для вреда внутри тела порядок обратный: альфа-частицы проходят самый короткий путь, но отдают всю энергию в крошечном объёме, поэтому проглоченный или вдохнутый источник намного опаснее того же источника, который держат на вытянутой руке.

**Пример 1.** Пучок излучения проходит сквозь лист бумаги без изменений, кроме альфа-части, которую бумага поглощает полностью.
**Пример 2.** В магнитном поле альфа- и бета-части отклоняются в противоположные стороны, причём бета-часть отклоняется намного сильнее, так как электрон в тысячи раз легче.

## Период полураспада

Распад одного ядра предсказать нельзя: это дело случая. Но для большого числа ядер закон точен.

> **Периодом полураспада** $T$ называют время, за которое распадается половина ядер образца.

Через $T$ остаётся половина исходных ядер, через $2T$ четверть, через $3T$ одна восьмая и так далее. Периоды полураспада идут от долей секунды до миллиардов лет: $T$ равен $3{,}8$ суток у радона, $1600$ лет у радия, $5700$ лет у углерода-14 и $4{,}5$ миллиарда лет у урана-238.

**Пример 3.** Из $8$ г вещества с $T = 2$ суток через $6$ суток остаётся одна восьмая, то есть $1$ г.
**Пример 4.** Активность образца падает до четверти за $10$ часов. Прошло два периода полураспада, значит $T = 5$ часов.
**Пример 5.** Углерод-14 в деревянной находке упал до половины обычной доли, значит дереву около $5700$ лет. Это радиоуглеродное датирование, а та же мысль, приложенная к урану в породах, даёт возраст Земли.
**Пример 6.** Долгий период полураспада урана — причина того, что его отходы приходится хранить тысячи лет, а короткий период некоторых медицинских изотопов — причина того, что их изготавливают в больнице незадолго до применения.

### Упражнения

1. Кто открыл радиоактивность и кто дал ей название?
2. Определите радиоактивность.
3. Можно ли прекратить радиоактивность охлаждением или химической реакцией?
4. Назовите три вида излучения и скажите, что представляет собой каждый.
5. Какое излучение задерживается листом бумаги и какому нужен толстый свинец?
6. Что такое период полураспада?
7. Из $16$ г вещества с $T = 3$ суток сколько останется через $12$ суток?
8. Активность образца падает до одной восьмой за $21$ год. Найдите период полураспада.

### Ответы

1. Беккерель открыл; Мария и Пьер Кюри назвали и нашли полоний и радий.
2. Самопроизвольное испускание излучения ядрами некоторых элементов.
3. Нет, она зависит от ядра, а не от условий.
4. Альфа — ядро гелия, бета — быстрый электрон, гамма — очень короткая электромагнитная волна.
5. Альфа задерживается бумагой; гамме нужен толстый свинец или бетон.
6. Время, за которое распадается половина ядер образца.
7. Проходит четыре периода, значит останется $1$ г.
8. Три периода, значит $T = 7$ лет.`,
      },
      [
        q(t("Radioactivity comes from", "Ռադիոակտիվությունը գալիս է", "Радиоактивность исходит из"), [
          t("the nucleus of the atom", "ատոմի միջուկից", "ядра атома"),
          t("the electrons of the atom", "ատոմի էլեկտրոններից", "электронов атома"),
          t("the molecules of the substance", "նյութի մոլեկուլներից", "молекул вещества"),
        ], 0),
        q(t("An alpha particle is", "Ալֆա մասնիկը", "Альфа-частица — это"), [
          t("a fast electron", "արագ էլեկտրոն է", "быстрый электрон"),
          t("a helium nucleus", "հելիումի միջուկ է", "ядро гелия"),
          t("an electromagnetic wave", "էլեկտրամագնիսական ալիք է", "электромагнитная волна"),
        ], 1),
        q(t("Which radiation is not deflected in a magnetic field?", "Ո՞ր ճառագայթումը մագնիսական դաշտում չի շեղվում", "Какое излучение не отклоняется в магнитном поле?"), [
          t("alpha", "ալֆա", "альфа"),
          t("beta", "բետա", "бета"),
          t("gamma", "գամմա", "гамма"),
        ], 2),
        q(t("The half-life of a substance is the time in which", "Նյութի կիսատրոհման պարբերությունն այն ժամանակն է, որում", "Период полураспада вещества — это время, за которое"), [
          t("half of its nuclei decay", "տրոհվում է նրա միջուկների կեսը", "распадается половина его ядер"),
          t("all of its nuclei decay", "տրոհվում են նրա բոլոր միջուկները", "распадаются все его ядра"),
          t("its mass doubles", "նրա զանգվածը կրկնապատկվում է", "его масса удваивается"),
        ], 0),
        q(t("Of 32 g of a substance with a half-life of 5 days, after 15 days there remains", "5 օր կիսատրոհման պարբերությամբ նյութի 32 գ-ից 15 օր հետո մնում է", "Из 32 г вещества с периодом полураспада 5 суток через 15 суток останется"), [
          t("8 g", "8 գ", "8 г"),
          t("4 g", "4 գ", "4 г"),
          t("16 g", "16 գ", "16 г"),
        ], 1),
        q(t("Radioactivity can be slowed down by", "Ռադիոակտիվությունը կարելի է դանդաղեցնել", "Радиоактивность можно замедлить"), [
          t("cooling the substance", "նյութը սառեցնելով", "охлаждением вещества"),
          t("a chemical reaction", "քիմիական ռեակցիայով", "химической реакцией"),
          t("nothing we can do", "ոչ մի բանով", "ничем из того, что мы можем сделать"),
        ], 2),
      ],
    ),
    lesson(
      "rutherford-model",
      ["Rutherford's experiment; the planetary model", "Ռեզերֆորդի փորձ, մոլորակային մոդել", "Опыт Резерфорда; планетарная модель атома"],
      {
        en: ["Describe Rutherford's scattering experiment and its result", "State the planetary model of the atom and the size of the nucleus", "Explain what the model could not account for"],
        hy: ["Նկարագրել Ռեզերֆորդի ցրման փորձը և նրա արդյունքը", "Ձևակերպել ատոմի մոլորակային մոդելը և միջուկի չափը", "Բացատրել, թե ինչ մոդելը չկարողացավ բացատրել"],
        ru: ["Описывать опыт Резерфорда по рассеянию и его результат", "Формулировать планетарную модель атома и указывать размер ядра", "Объяснять, что эта модель не могла объяснить"],
      },
      {
        en: `## Before the experiment

By 1900 it was known that an atom contains light negative electrons and is neutral as a whole, so a positive part must exist too. Thomson pictured the atom as a sphere of positive charge with electrons stuck in it like raisins in a pudding. The picture was reasonable and completely wrong, and one experiment settled it.

## The experiment

Rutherford and his students directed a narrow beam of alpha particles at a very thin gold foil and counted the flashes made on a screen round it.

| What happened | How often |
|---|---|
| passed almost straight through | the great majority |
| deflected by a few degrees | fairly often |
| thrown back by more than $90°$ | about one in $8000$ |

The last line was the shock. An alpha particle is fast and heavy, and a pudding of thinly spread positive charge could never turn it round, any more than a sheet of tissue paper could bounce back a bullet. Rutherford's own words were that it was as surprising as firing at tissue paper and having the shell come back.

The only explanation is that the positive charge of an atom is gathered in a tiny, massive lump. Almost every alpha particle misses it and flies on; the rare one that comes close is thrown back by the electric repulsion of the concentrated charge.

## The planetary model

> Almost the whole mass of an atom and all its positive charge are gathered in a **nucleus** whose size is about $10^{-15}$ m, ten thousand times smaller than the atom. The electrons move round the nucleus, and the number of them equals the charge of the nucleus, so the atom is neutral.

The name comes from the likeness to the Solar system, where almost all the mass is in the Sun. The scale is worth a moment: if the nucleus were a cherry on the centre circle of a football pitch, the nearest electrons would be at the stands, and all the rest would be empty space.

**Example 1.** A gold atom has $79$ electrons, so the charge of its nucleus is $79$ elementary charges.
**Example 2.** Most alpha particles pass through a hundred layers of atoms without any sharp deflection, because an atom is almost entirely empty.
**Example 3.** The number of particles thrown straight back lets the size of the nucleus be estimated, and that is how the figure $10^{-15}$ m was first obtained.

## What the model could not explain

An electron going round a nucleus is an accelerated charge, so by Maxwell's theory it must radiate electromagnetic waves, lose energy and fall into the nucleus in a fraction of a second. Atoms, however, live for ever, and the light they emit comes in sharp lines and not in a continuous band.

So the planetary model, right about the nucleus, could not be the whole story. The way out came from Bohr and later from quantum physics, which allows an electron only certain orbits, each with its own energy, and lets the atom radiate only when the electron moves from one of them to another. That is also why every element has its own set of spectral lines.

**Example 4.** The one line of hydrogen's visible spectrum at $0{.}66$ µm corresponds to one definite jump of its single electron.
**Example 5.** A neon lamp glows red because the jumps available to the neon atom give exactly those frequencies.

### Exercises

1. What was Thomson's picture of the atom?
2. What did Rutherford fire at what, and what did he count?
3. Which result of the experiment was the surprise, and why?
4. What conclusion follows from the particles thrown back?
5. State the planetary model.
6. Compare the size of the nucleus with the size of the atom.
7. Why should an atom in the planetary model collapse?
8. Who found the way out, and what does it allow?

### Answers

1. A sphere of positive charge with electrons embedded in it.
2. Alpha particles at a thin gold foil; he counted the flashes at different angles.
3. That about one particle in $8000$ came back by more than $90°$; a thinly spread charge could not do that.
4. The positive charge and nearly all the mass are gathered in a tiny nucleus.
5. Nearly all the mass and the whole positive charge are in a nucleus of about $10^{-15}$ m, with the electrons moving round it.
6. The nucleus is about ten thousand times smaller.
7. The orbiting electron is accelerated, so it should radiate, lose energy and fall in.
8. Bohr and quantum physics; only certain orbits with definite energies are allowed.`,
        hy: `## Փորձից առաջ

1900 թվականին հայտնի էր, որ ատոմը պարունակում է թեթև բացասական էլեկտրոններ և ամբողջությամբ չեզոք է, ուստի պետք է գոյություն ունենա նաև դրական մաս։ Թոմսոնն ատոմը պատկերացնում էր որպես դրական լիցքի գունդ, որում էլեկտրոնները խրված են չամիչի պես պուդինգում։ Պատկերը խելամիտ էր և լիովին սխալ, և մեկ փորձը լուծեց հարցը։

## Փորձը

Ռեզերֆորդը և նրա աշակերտներն ալֆա մասնիկների նեղ փունջ ուղղեցին շատ բարակ ոսկե թերթիկին և հաշվեցին նրա շուրջն էկրանին առաջացած բռնկումները։

| Ինչ կատարվեց | Ինչքան հաճախ |
|---|---|
| անցան գրեթե ուղիղ | մեծ մասը |
| շեղվեցին մի քանի աստիճանով | բավական հաճախ |
| հետ նետվեցին $90°$-ից ավելի | մոտ $8000$-ից մեկը |

Վերջին տողը ցնցումն էր։ Ալֆա մասնիկն արագ է և ծանր, և բարակ տարածված դրական լիցքի պուդինգը նրան երբեք հետ չէր շրջի, ոչ ավելի, քան մեկ թերթիկ բարակ թուղթը կարող էր հետ վերադարձնել գնդակը։ Ռեզերֆորդի սեփական խոսքերով՝ դա այնքան զարմանալի էր, որքան բարակ թղթին կրակելը և արկի հետ վերադարձը։

Միակ բացատրությունն այն է, որ ատոմի դրական լիցքը հավաքված է շատ փոքր, զանգվածեղ կույտում։ Գրեթե ամեն ալֆա մասնիկ նրան վրիպում է և շարունակում թռիչքը, իսկ հազվագյուտը, որը մոտ է գալիս, հետ է նետվում կենտրոնացված լիցքի էլեկտրական վանողությամբ։

## Մոլորակային մոդելը

> Ատոմի գրեթե ողջ զանգվածը և նրա ամբողջ դրական լիցքը հավաքված են **միջուկում**, որի չափը մոտ $10^{-15}$ մ է՝ տասը հազար անգամ փոքր, քան ատոմը։ Էլեկտրոնները շարժվում են միջուկի շուրջը, և նրանց թիվը հավասար է միջուկի լիցքին, ուստի ատոմը չեզոք է։

Անունը գալիս է Արեգակնային համակարգին նմանությունից, որտեղ գրեթե ողջ զանգվածն Արեգակում է։ Մասշտաբը մի պահ արժե. եթե միջուկը ֆուտբոլի դաշտի կենտրոնական շրջանում կեռաս լիներ, ամենամոտ էլեկտրոնները կլինեին աստիճանների մոտ, իսկ մնացած ամեն ինչ դատարկ տարածություն կլիներ։

**Օրինակ 1։** Ոսկու ատոմն ունի $79$ էլեկտրոն, ուստի նրա միջուկի լիցքը $79$ տարրական լիցք է։
**Օրինակ 2։** Ալֆա մասնիկների մեծ մասն անցնում է ատոմների հարյուր շերտով առանց սուր շեղման, որովհետև ատոմը գրեթե ամբողջովին դատարկ է։
**Օրինակ 3։** Ուղիղ հետ նետված մասնիկների թիվը թույլ է տալիս գնահատել միջուկի չափը, և ահա այսպես առաջին անգամ ստացվեց $10^{-15}$ մ թիվը։

## Ինչ մոդելը չկարողացավ բացատրել

Միջուկի շուրջը պտտվող էլեկտրոնն արագացվող լիցք է, ուստի Մաքսվելի տեսության համաձայն պետք է ճառագայթի էլեկտրամագնիսական ալիքներ, կորցնի էներգիա և վայրկյանի մասում ընկնի միջուկի մեջ։ Ատոմները, սակայն, ապրում են հավերժ, և նրանց արձակած լույսը գալիս է սուր գծերով, ոչ թե հարթ շերտով։

Ուրեմն մոլորակային մոդելը, որը ճիշտ էր միջուկի մասին, չէր կարող ամբողջ պատմությունը լինել։ Ելքն եկավ Բորից և հետո քվանտային ֆիզիկայից, որն էլեկտրոնին թույլ է տալիս միայն որոշ ուղեծրեր՝ յուրաքանչյուրն իր էներգիայով, և ատոմին թույլ է տալիս ճառագայթել միայն այն ժամանակ, երբ էլեկտրոնը մեկից անցնում է մյուսը։ Ահա թե ինչու նաև ամեն տարր ունի սպեկտրալ գծերի իր հավաքածուն։

**Օրինակ 4։** Ջրածնի տեսանելի սպեկտրի $0{,}66$ մկմ մեկ գիծը համապատասխանում է նրա միակ էլեկտրոնի մեկ որոշակի թռիչքին։
**Օրինակ 5։** Նեոնային լամպը փայլում է կարմիր, որովհետև նեոնի ատոմին հասանելի թռիչքները տալիս են ճիշտ այդ հաճախությունները։

### Վարժություններ

1. Ի՞նչ էր Թոմսոնի ատոմի պատկերը։
2. Ռեզերֆորդն ի՞նչ ուղղեց ինչի՞ն, և ի՞նչ հաշվեց։
3. Փորձի ո՞ր արդյունքն էր անսպասելի և ինչու։
4. Ի՞նչ եզրակացություն է հետևում հետ նետված մասնիկներից։
5. Ձևակերպեք մոլորակային մոդելը։
6. Համեմատեք միջուկի չափն ատոմի չափի հետ։
7. Ինչո՞ւ մոլորակային մոդելում ատոմը պետք է փլուզվեր։
8. Ո՞վ գտավ ելքը, և ի՞նչ է այն թույլ տալիս։

### Պատասխաններ

1. Դրական լիցքի գունդ՝ նրա մեջ խրված էլեկտրոններով։
2. Ալֆա մասնիկներ՝ բարակ ոսկե թերթիկին. նա հաշվեց բռնկումները տարբեր անկյուններում։
3. Որ մոտ $8000$ մասնիկից մեկը հետ էր գալիս $90°$-ից ավելի. բարակ տարածված լիցքը չէր կարող դա անել։
4. Դրական լիցքը և գրեթե ողջ զանգվածը հավաքված են շատ փոքր միջուկում։
5. Գրեթե ողջ զանգվածը և ամբողջ դրական լիցքը մոտ $10^{-15}$ մ միջուկում են, իսկ էլեկտրոնները շարժվում են նրա շուրջը։
6. Միջուկը մոտ տասը հազար անգամ փոքր է։
7. Ուղեծրով շարժվող էլեկտրոնն արագացվում է, ուստի պետք է ճառագայթի, կորցնի էներգիա և ընկնի ներս։
8. Բորը և քվանտային ֆիզիկան. թույլատրվում են միայն որոշ ուղեծրեր՝ որոշակի էներգիաներով։`,
        ru: `## До опыта

К 1900 году было известно, что атом содержит легкие отрицательные электроны и в целом нейтрален, значит должна существовать и положительная часть. Томсон представлял атом как шар положительного заряда с электронами, вкраплёнными в него, как изюм в пудинг. Картина была разумной и совершенно неверной, и решил дело один опыт.

## Опыт

Резерфорд и его ученики направили узкий пучок альфа-частиц на очень тонкую золотую фольгу и считали вспышки на экране вокруг неё.

| Что происходило | Как часто |
|---|---|
| проходили почти прямо | подавляющее большинство |
| отклонялись на несколько градусов | довольно часто |
| отбрасывались более чем на $90°$ | примерно одна из $8000$ |

Последняя строка и была потрясением. Альфа-частица быстра и тяжела, и пудинг из тонко размазанного положительного заряда никогда не повернул бы её назад — не более, чем лист тонкой бумаги мог бы отбросить пулю. По собственным словам Резерфорда, это было так же удивительно, как стрелять по тонкой бумаге и получить снаряд обратно.

Единственное объяснение состоит в том, что положительный заряд атома собран в крошечный массивный комок. Почти каждая альфа-частица пролетает мимо него; редкая, подошедшая близко, отбрасывается электрическим отталкиванием сосредоточенного заряда.

## Планетарная модель

> Почти вся масса атома и весь его положительный заряд собраны в **ядре** размером около $10^{-15}$ м, в десять тысяч раз меньшем атома. Электроны движутся вокруг ядра, и их число равно заряду ядра, поэтому атом нейтрален.

Название идёт от сходства с Солнечной системой, где почти вся масса находится в Солнце. Масштаб стоит минуты внимания: если бы ядро было вишней в центральном круге футбольного поля, ближайшие электроны находились бы у трибун, а всё остальное было бы пустым пространством.

**Пример 1.** У атома золота $79$ электронов, значит заряд его ядра равен $79$ элементарным заряда́м.
**Пример 2.** Большинство альфа-частиц проходит сквозь сотню слоёв атомов без резкого отклонения, потому что атом почти целиком пуст.
**Пример 3.** По числу частиц, отброшенных прямо назад, можно оценить размер ядра, и именно так впервые было получено значение $10^{-15}$ м.

## Что модель объяснить не могла

Электрон, обращающийся вокруг ядра, — это ускоренно движущийся заряд, значит по теории Максвелла он должен излучать электромагнитные волны, терять энергию и за доли секунды упасть в ядро. Атомы, однако, живут вечно, а излучаемый ими свет приходит резкими линиями, а не сплошной полосой.

Значит, планетарная модель, верная насчёт ядра, не могла быть всей историей. Выход пришёл от Бора, а затем от квантовой физики, которая разрешает электрону лишь определённые орбиты, каждую со своей энергией, и позволяет атому излучать только при переходе электрона с одной из них на другую. Поэтому же у каждого элемента есть свой набор спектральных линий.

**Пример 4.** Одна линия видимого спектра водорода при $0{,}66$ мкм соответствует одному определённому переходу его единственного электрона.
**Пример 5.** Неоновая лампа светится красным, потому что доступные атому неона переходы дают именно эти частоты.

### Упражнения

1. Какой была картина атома у Томсона?
2. Чем и по чему стрелял Резерфорд и что он считал?
3. Какой результат опыта был неожиданным и почему?
4. Какой вывод следует из отброшенных назад частиц?
5. Сформулируйте планетарную модель.
6. Сравните размер ядра с размером атома.
7. Почему атом в планетарной модели должен был бы разрушиться?
8. Кто нашёл выход и что он разрешает?

### Ответы

1. Шар положительного заряда с вкраплёнными в него электронами.
2. Альфа-частицами по тонкой золотой фольге; он считал вспышки под разными углами.
3. То, что примерно одна частица из $8000$ возвращалась более чем на $90°$; тонко размазанный заряд этого сделать не мог.
4. Положительный заряд и почти вся масса собраны в крошечном ядре.
5. Почти вся масса и весь положительный заряд находятся в ядре размером около $10^{-15}$ м, а электроны движутся вокруг него.
6. Ядро примерно в десять тысяч раз меньше.
7. Обращающийся электрон ускорен, значит должен излучать, терять энергию и упасть внутрь.
8. Бор и квантовая физика; разрешены лишь определённые орбиты с определёнными энергиями.`,
      },
      [
        q(t("In Rutherford's experiment the beam was directed at", "Ռեզերֆորդի փորձում փունջն ուղղված էր", "В опыте Резерфорда пучок направляли на"), [
          t("a thin gold foil", "բարակ ոսկե թերթիկին", "тонкую золотую фольгу"),
          t("a thick lead block", "հաստ կապարե կտորին", "толстый свинцовый блок"),
          t("a glass prism", "ապակե պրիզմային", "стеклянную призму"),
        ], 0),
        q(t("The surprising result was that some alpha particles", "Անսպասելի արդյունքն այն էր, որ որոշ ալֆա մասնիկներ", "Неожиданным результатом было то, что некоторые альфа-частицы"), [
          t("stopped inside the foil", "կանգ առան թերթիկի ներսում", "остановились внутри фольги"),
          t("came back by more than 90°", "հետ եկան 90°-ից ավելի", "вернулись более чем на 90°"),
          t("turned into electrons", "դարձան էլեկտրոններ", "превратились в электроны"),
        ], 1),
        q(t("Almost the whole mass of an atom is in", "Ատոմի գրեթե ողջ զանգվածը գտնվում է", "Почти вся масса атома находится в"), [
          t("its electrons", "նրա էլեկտրոններում", "его электронах"),
          t("the space between them", "նրանց միջև տարածությունում", "пространстве между ними"),
          t("its nucleus", "նրա միջուկում", "его ядре"),
        ], 2),
        q(t("The nucleus compared with the atom is about", "Միջուկն ատոմի համեմատ մոտ", "Ядро по сравнению с атомом примерно"), [
          t("ten thousand times smaller", "տասը հազար անգամ փոքր է", "в десять тысяч раз меньше"),
          t("ten times smaller", "տասն անգամ փոքր է", "в десять раз меньше"),
          t("the same size", "նույն չափի է", "того же размера"),
        ], 0),
        q(t("The number of electrons in a neutral atom equals", "Չեզոք ատոմում էլեկտրոնների թիվը հավասար է", "Число электронов в нейтральном атоме равно"), [
          t("the mass of the nucleus", "միջուկի զանգվածին", "массе ядра"),
          t("the charge of the nucleus", "միջուկի լիցքին", "заряду ядра"),
          t("the size of the nucleus", "միջուկի չափին", "размеру ядра"),
        ], 1),
        q(t("The planetary model could not explain why an atom", "Մոլորակային մոդելը չէր կարող բացատրել, թե ինչու ատոմը", "Планетарная модель не могла объяснить, почему атом"), [
          t("is neutral", "չեզոք է", "нейтрален"),
          t("has a nucleus", "միջուկ ունի", "имеет ядро"),
          t("does not collapse", "չի փլուզվում", "не разрушается"),
        ], 2),
      ],
    ),
    lesson(
      "nucleus-structure",
      ["The composition of the nucleus; isotopes; nuclear forces", "Միջուկի կազմություն, իզոտոպներ, միջուկային ուժեր", "Состав ядра; изотопы; ядерные силы"],
      {
        en: ["Name the particles of the nucleus and read the notation of a nuclide", "Explain what isotopes are", "Describe the nuclear forces and the binding energy"],
        hy: ["Նշել միջուկի մասնիկները և կարդալ նուկլիդի նշագրությունը", "Բացատրել, թե ինչ են իզոտոպները", "Նկարագրել միջուկային ուժերը և կապի էներգիան"],
        ru: ["Называть частицы ядра и читать обозначение нуклида", "Объяснять, что такое изотопы", "Описывать ядерные силы и энергию связи"],
      },
      {
        en: `## Protons and neutrons

The nucleus is built of two kinds of particle, together called **nucleons**.

| Particle | Charge | Mass |
|---|---|---|
| proton | $+1$ elementary charge | $1$ atomic mass unit |
| neutron | $0$ | $1$ atomic mass unit, a shade more |
| (electron, outside the nucleus) | $-1$ | about $1/1840$ of that |

The proton was known from the hydrogen nucleus; the neutron was found by Chadwick in 1932, and before that the nucleus could not be made to add up. A nuclide is written

$$\\genfrac{}{}{0pt}{1}{A}{Z}X,$$

where $Z$ is the **charge number**, the number of protons, which is also the place of the element in the periodic table, and $A$ is the **mass number**, the number of nucleons. The number of neutrons is therefore $N = A - Z$.

**Example 1.** In $\\genfrac{}{}{0pt}{1}{23}{11}\\text{Na}$ there are $11$ protons, $23 - 11 = 12$ neutrons and, in the neutral atom, $11$ electrons.
**Example 2.** In $\\genfrac{}{}{0pt}{1}{238}{92}\\text{U}$ there are $92$ protons and $146$ neutrons.

## Isotopes

> **Isotopes** are nuclides of one element: they have the same number of protons and different numbers of neutrons.

Isotopes behave identically in chemistry, because chemistry is the business of the electrons, and their number is set by $Z$. In nuclear physics they can behave completely differently: $^{235}\\text{U}$ can be made to fission in a reactor and $^{238}\\text{U}$, which is $99$ per cent of natural uranium, cannot.

| Element | Isotopes |
|---|---|
| hydrogen | $^{1}\\text{H}$, $^{2}\\text{H}$ (deuterium), $^{3}\\text{H}$ (tritium) |
| carbon | $^{12}\\text{C}$, $^{13}\\text{C}$, $^{14}\\text{C}$ (radioactive) |
| uranium | $^{235}\\text{U}$, $^{238}\\text{U}$ |

**Example 3.** Heavy water is built with deuterium instead of ordinary hydrogen. It is chemically water, and it is used in some reactors.
**Example 4.** The atomic mass of chlorine in the table, $35{.}5$, is not the mass of any one nucleus: it is the average over the natural mixture of $^{35}\\text{Cl}$ and $^{37}\\text{Cl}$.

## Nuclear forces and binding energy

Protons in a nucleus are a few $10^{-15}$ m apart and repel each other electrically very strongly. Something must hold them, and it is not gravity, which is far too weak.

> The **nuclear forces** act between any two nucleons, are many times stronger than the electric repulsion, and reach only about $10^{-15}$ m, which is the size of the nucleus itself.

Because they are short-ranged, a very large nucleus is hard to hold together: the far parts of it no longer attract each other, while the electric repulsion acts across the whole nucleus. That is why the heaviest elements are all unstable.

To pull a nucleus apart into separate nucleons, work must be done, and that work is the **binding energy**. The same energy would be released if the nucleus were built out of free nucleons. The binding energy per nucleon is largest in the middle of the periodic table, near iron, and smaller at both ends, which is the reason both the splitting of heavy nuclei and the joining of light ones release energy.

**Example 5.** The binding energy per nucleon is about $1$ MeV in deuterium, about $8{.}8$ MeV near iron and about $7{.}6$ MeV in uranium.
**Example 6.** Since uranium sits below the peak, breaking it into two middle-sized nuclei releases energy, and that is exactly what a reactor does.

### Exercises

1. Name the particles of the nucleus and give their charges.
2. What do $A$ and $Z$ mean, and how is the number of neutrons found?
3. How many protons and neutrons are there in $\\genfrac{}{}{0pt}{1}{56}{26}\\text{Fe}$?
4. What are isotopes?
5. Why do isotopes of one element behave the same in chemistry?
6. Name the three isotopes of hydrogen.
7. What are the two properties of the nuclear forces?
8. Why are the heaviest elements unstable?

### Answers

1. Protons with charge $+1$ and neutrons with charge $0$.
2. $A$ is the number of nucleons, $Z$ the number of protons; $N = A - Z$.
3. $26$ protons and $30$ neutrons.
4. Nuclides of one element with the same $Z$ and different $A$.
5. Chemistry depends on the electrons, whose number is set by $Z$.
6. $^{1}\\text{H}$, deuterium and tritium.
7. They are much stronger than the electric repulsion and act only over about $10^{-15}$ m.
8. The nuclear forces are short-ranged, while the electric repulsion acts across the whole large nucleus.`,
        hy: `## Պրոտոններ և նեյտրոններ

Միջուկը կառուցված է երկու տեսակի մասնիկից, որոնք միասին կոչվում են **նուկլոններ**։

| Մասնիկ | Լիցք | Զանգված |
|---|---|---|
| պրոտոն | $+1$ տարրական լիցք | $1$ ատոմային զանգվածի միավոր |
| նեյտրոն | $0$ | $1$ ատոմային զանգվածի միավոր, մի քիչ ավելի |
| (էլեկտրոն՝ միջուկից դուրս) | $-1$ | նրա մոտ $1/1840$-ը |

Պրոտոնը հայտնի էր ջրածնի միջուկից, նեյտրոնը գտավ Չեդվիկը 1932 թվականին, և նրանից առաջ միջուկի հաշիվը չէր ստացվում։ Նուկլիդը գրվում է

$$\\genfrac{}{}{0pt}{1}{A}{Z}X,$$

որտեղ $Z$-ը **լիցքային թիվն** է՝ պրոտոնների թիվը, որը նաև տարրի տեղն է պարբերական աղյուսակում, իսկ $A$-ն **զանգվածային թիվն** է՝ նուկլոնների թիվը։ Ուստի նեյտրոնների թիվը $N = A - Z$ է։

**Օրինակ 1։** $\\genfrac{}{}{0pt}{1}{23}{11}\\text{Na}$-ում կան $11$ պրոտոն, $23 - 11 = 12$ նեյտրոն և չեզոք ատոմում $11$ էլեկտրոն։
**Օրինակ 2։** $\\genfrac{}{}{0pt}{1}{238}{92}\\text{U}$-ում կան $92$ պրոտոն և $146$ նեյտրոն։

## Իզոտոպներ

> **Իզոտոպներ** են մեկ տարրի նուկլիդները. նրանք ունեն նույն թվով պրոտոններ և տարբեր թվով նեյտրոններ։

Իզոտոպները քիմիայում վարվում են միանգամայն նույնպես, որովհետև քիմիան էլեկտրոնների գործն է, իսկ նրանց թիվն որոշվում է $Z$-ով։ Միջուկային ֆիզիկայում նրանք կարող են վարվել լիովին տարբեր. $^{235}\\text{U}$-ը կարելի է տրոհել ռեակտորում, իսկ $^{238}\\text{U}$-ը, որը բնական ուրանի $99$ տոկոսն է, ոչ։

| Տարր | Իզոտոպներ |
|---|---|
| ջրածին | $^{1}\\text{H}$, $^{2}\\text{H}$ (դեյտերիում), $^{3}\\text{H}$ (տրիտիում) |
| ածխածին | $^{12}\\text{C}$, $^{13}\\text{C}$, $^{14}\\text{C}$ (ռադիոակտիվ) |
| ուրան | $^{235}\\text{U}$, $^{238}\\text{U}$ |

**Օրինակ 3։** Ծանր ջուրը կառուցված է դեյտերիումով՝ սովորական ջրածնի փոխարեն։ Քիմիապես այն ջուր է և օգտագործվում է որոշ ռեակտորներում։
**Օրինակ 4։** Աղյուսակում քլորի ատոմային զանգվածը՝ $35{,}5$, ոչ մի առանձին միջուկի զանգվածը չէ. այն $^{35}\\text{Cl}$-ի և $^{37}\\text{Cl}$-ի բնական խառնուրդի միջինն է։

## Միջուկային ուժեր և կապի էներգիա

Միջուկի պրոտոններն իրարից մի քանի $10^{-15}$ մ հեռու են և էլեկտրականորեն շատ ուժեղ վանում են միմյանց։ Ինչ-որ բան պետք է նրանց պահի, և դա ծանրությունը չէ, որը չափազանց թույլ է։

> **Միջուկային ուժերը** ազդում են ցանկացած երկու նուկլոնի միջև, շատ անգամ ուժեղ են էլեկտրական վանողությունից և հասնում են միայն մոտ $10^{-15}$ մ՝ ինչը հենց միջուկի չափն է։

Քանի որ նրանք կարճ հասողություն ունեն, շատ մեծ միջուկը դժվար է պահել միասին. նրա հեռու մասերն այլևս չեն ձգում միմյանց, մինչդեռ էլեկտրական վանողությունն ազդում է ամբողջ միջուկով։ Դրա համար ամենածանր տարրերը բոլորն էլ անկայուն են։

Միջուկն առանձին նուկլոնների բաժանելու համար պետք է աշխատանք կատարել, և այդ աշխատանքը **կապի էներգիան** է։ Նույն էներգիան կազատվեր, եթե միջուկը կառուցվեր ազատ նուկլոններից։ Մեկ նուկլոնին բաժին ընկնող կապի էներգիան ամենամեծն է պարբերական աղյուսակի մեջտեղում՝ երկաթի մոտ, և ավելի փոքր՝ երկու ծայրերում, ինչը և պատճառն է, որ էներգիա ազատվում է և ծանր միջուկների տրոհումից, և թեթևների միացումից։

**Օրինակ 5։** Մեկ նուկլոնին բաժին ընկնող կապի էներգիան մոտ $1$ ՄէՎ է դեյտերիումում, մոտ $8{,}8$ ՄէՎ՝ երկաթի մոտ և մոտ $7{,}6$ ՄէՎ՝ ուրանում։
**Օրինակ 6։** Քանի որ ուրանը գտնվում է գագաթից ցած, նրա երկու միջին միջուկի բաժանումն ազատում է էներգիա, և ճիշտ այդ է անում ռեակտորը։

### Վարժություններ

1. Նշեք միջուկի մասնիկները և նրանց լիցքերը։
2. Ի՞նչ են նշանակում $A$-ն և $Z$-ը, և ինչպե՞ս է գտնվում նեյտրոնների թիվը։
3. Քանի՞ պրոտոն և նեյտրոն կան $\\genfrac{}{}{0pt}{1}{56}{26}\\text{Fe}$-ում։
4. Ի՞նչ են իզոտոպները։
5. Ինչո՞ւ մեկ տարրի իզոտոպները քիմիայում վարվում են նույնպես։
6. Նշեք ջրածնի երեք իզոտոպները։
7. Որո՞նք են միջուկային ուժերի երկու հատկությունները։
8. Ինչո՞ւ ամենածանր տարրերն անկայուն են։

### Պատասխաններ

1. Պրոտոններ՝ $+1$ լիցքով, և նեյտրոններ՝ $0$ լիցքով։
2. $A$-ն նուկլոնների թիվն է, $Z$-ը՝ պրոտոնների. $N = A - Z$։
3. $26$ պրոտոն և $30$ նեյտրոն։
4. Մեկ տարրի նուկլիդները՝ նույն $Z$-ով և տարբեր $A$-ով։
5. Քիմիան կախված է էլեկտրոններից, որոնց թիվն որոշվում է $Z$-ով։
6. $^{1}\\text{H}$, դեյտերիում և տրիտիում։
7. Նրանք շատ ավելի ուժեղ են էլեկտրական վանողությունից և ազդում են միայն մոտ $10^{-15}$ մ հեռավորության վրա։
8. Միջուկային ուժերը կարճ հասողություն ունեն, մինչդեռ էլեկտրական վանողությունն ազդում է ամբողջ մեծ միջուկով։`,
        ru: `## Протоны и нейтроны

Ядро построено из частиц двух видов, которые вместе называют **нуклонами**.

| Частица | Заряд | Масса |
|---|---|---|
| протон | $+1$ элементарный заряд | $1$ атомная единица массы |
| нейтрон | $0$ | $1$ атомная единица массы, чуть больше |
| (электрон, вне ядра) | $-1$ | около $1/1840$ от неё |

Протон был известен по ядру водорода; нейтрон открыл Чедвик в 1932 году, и до этого состав ядра не сходился. Нуклид записывают так:

$$\\genfrac{}{}{0pt}{1}{A}{Z}X,$$

где $Z$ — **зарядовое число**, число протонов, оно же место элемента в периодической таблице, а $A$ — **массовое число**, число нуклонов. Поэтому число нейтронов равно $N = A - Z$.

**Пример 1.** В $\\genfrac{}{}{0pt}{1}{23}{11}\\text{Na}$ есть $11$ протонов, $23 - 11 = 12$ нейтронов и, в нейтральном атоме, $11$ электронов.
**Пример 2.** В $\\genfrac{}{}{0pt}{1}{238}{92}\\text{U}$ есть $92$ протона и $146$ нейтронов.

## Изотопы

> **Изотопами** называют нуклиды одного элемента: у них одинаковое число протонов и разное число нейтронов.

В химии изотопы ведут себя совершенно одинаково, потому что химия — это дело электронов, а их число задаёт $Z$. В ядерной физике они могут вести себя совсем по-разному: $^{235}\\text{U}$ можно заставить делиться в реакторе, а $^{238}\\text{U}$, составляющий $99$ процентов природного урана, нельзя.

| Элемент | Изотопы |
|---|---|
| водород | $^{1}\\text{H}$, $^{2}\\text{H}$ (дейтерий), $^{3}\\text{H}$ (тритий) |
| углерод | $^{12}\\text{C}$, $^{13}\\text{C}$, $^{14}\\text{C}$ (радиоактивный) |
| уран | $^{235}\\text{U}$, $^{238}\\text{U}$ |

**Пример 3.** Тяжёлая вода построена с дейтерием вместо обычного водорода. Химически это вода, и её применяют в некоторых реакторах.
**Пример 4.** Атомная масса хлора в таблице, $35{,}5$, не есть масса какого-либо одного ядра: это среднее по природной смеси $^{35}\\text{Cl}$ и $^{37}\\text{Cl}$.

## Ядерные силы и энергия связи

Протоны в ядре находятся на расстоянии нескольких $10^{-15}$ м и очень сильно отталкиваются электрически. Что-то должно их удерживать, и это не тяготение, которое слишком слабо.

> **Ядерные силы** действуют между любыми двумя нуклонами, многократно сильнее электрического отталкивания и действуют лишь на расстоянии около $10^{-15}$ м, что и есть размер самого ядра.

Из-за малого радиуса действия очень большое ядро трудно удержать: его далёкие части уже не притягивают друг друга, тогда как электрическое отталкивание действует через всё ядро. Поэтому самые тяжёлые элементы все неустойчивы.

Чтобы разорвать ядро на отдельные нуклоны, надо совершить работу, и эта работа есть **энергия связи**. Та же энергия выделилась бы при сборке ядра из свободных нуклонов. Энергия связи на один нуклон наибольшая в середине периодической таблицы, около железа, и меньше на обоих концах, и это причина того, что энергия выделяется и при делении тяжёлых ядер, и при соединении лёгких.

**Пример 5.** Энергия связи на нуклон составляет около $1$ МэВ у дейтерия, около $8{,}8$ МэВ около железа и около $7{,}6$ МэВ у урана.
**Пример 6.** Так как уран лежит ниже максимума, разделение его на два средних ядра выделяет энергию, и именно это делает реактор.

### Упражнения

1. Назовите частицы ядра и укажите их заряды.
2. Что означают $A$ и $Z$ и как находят число нейтронов?
3. Сколько протонов и нейтронов в $\\genfrac{}{}{0pt}{1}{56}{26}\\text{Fe}$?
4. Что такое изотопы?
5. Почему изотопы одного элемента ведут себя в химии одинаково?
6. Назовите три изотопа водорода.
7. Каковы два свойства ядерных сил?
8. Почему самые тяжёлые элементы неустойчивы?

### Ответы

1. Протоны с зарядом $+1$ и нейтроны с зарядом $0$.
2. $A$ — число нуклонов, $Z$ — число протонов; $N = A - Z$.
3. $26$ протонов и $30$ нейтронов.
4. Нуклиды одного элемента с одинаковым $Z$ и разным $A$.
5. Химия зависит от электронов, число которых задаёт $Z$.
6. $^{1}\\text{H}$, дейтерий и тритий.
7. Они намного сильнее электрического отталкивания и действуют лишь на расстоянии около $10^{-15}$ м.
8. Ядерные силы короткодействующие, а электрическое отталкивание действует через всё большое ядро.`,
      },
      [
        q(t("The particles of the nucleus are", "Միջուկի մասնիկներն են", "Частицы ядра — это"), [
          t("protons and neutrons", "պրոտոնները և նեյտրոնները", "протоны и нейтроны"),
          t("protons and electrons", "պրոտոնները և էլեկտրոնները", "протоны и электроны"),
          t("neutrons and electrons", "նեյտրոնները և էլեկտրոնները", "нейтроны и электроны"),
        ], 0),
        q(t("In the notation of a nuclide the number Z gives", "Նուկլիդի նշագրությունում Z թիվը տալիս է", "В обозначении нуклида число Z даёт"), [
          t("the number of nucleons", "նուկլոնների թիվը", "число нуклонов"),
          t("the number of protons", "պրոտոնների թիվը", "число протонов"),
          t("the number of neutrons", "նեյտրոնների թիվը", "число нейтронов"),
        ], 1),
        q(t("How many neutrons are there in the nucleus with A = 40 and Z = 18?", "Քանի՞ նեյտրոն կա A = 40 և Z = 18 միջուկում", "Сколько нейтронов в ядре с A = 40 и Z = 18?"), [
          t("40", "40", "40"),
          t("18", "18", "18"),
          t("22", "22", "22"),
        ], 2),
        q(t("Isotopes of one element differ in the number of", "Մեկ տարրի իզոտոպները տարբերվում են ... թվով", "Изотопы одного элемента различаются числом"), [
          t("neutrons", "նեյտրոնների", "нейтронов"),
          t("protons", "պրոտոնների", "протонов"),
          t("electrons in the neutral atom", "չեզոք ատոմում էլեկտրոնների", "электронов в нейтральном атоме"),
        ], 0),
        q(t("The nuclear forces act over a distance of about", "Միջուկային ուժերն ազդում են մոտ ... հեռավորության վրա", "Ядерные силы действуют на расстоянии около"), [
          t("10⁻¹⁰ m", "10⁻¹⁰ մ", "10⁻¹⁰ м"),
          t("10⁻¹⁵ m", "10⁻¹⁵ մ", "10⁻¹⁵ м"),
          t("1 m", "1 մ", "1 м"),
        ], 1),
        q(t("The binding energy per nucleon is largest", "Մեկ նուկլոնին բաժին ընկնող կապի էներգիան ամենամեծն է", "Энергия связи на нуклон наибольшая"), [
          t("in hydrogen", "ջրածնում", "у водорода"),
          t("in uranium", "ուրանում", "у урана"),
          t("near iron", "երկաթի մոտ", "около железа"),
        ], 2),
      ],
    ),
    lesson(
      "nuclear-reactions-energy",
      ["Fission, the chain reaction, nuclear power; fusion", "Տրոհում, շղթայական ռեակցիա, միջուկային էներգետիկա, սինթեզ", "Деление ядер, цепная реакция, ядерная энергетика; синтез"],
      {
        en: ["Describe the fission of a uranium nucleus and the chain reaction", "Name the parts of a reactor and what each one does", "Compare fission with fusion and say where each is used"],
        hy: ["Նկարագրել ուրանի միջուկի տրոհումը և շղթայական ռեակցիան", "Նշել ռեակտորի մասերը և յուրաքանչյուրի դերը", "Համեմատել տրոհումը սինթեզի հետ և ասել, թե որտեղ է յուրաքանչյուրը կիրառվում"],
        ru: ["Описывать деление ядра урана и цепную реакцию", "Называть части реактора и роль каждой", "Сравнивать деление с синтезом и говорить, где применяется каждый"],
      },
      {
        en: `## Nuclear reactions

A **nuclear reaction** is a change of nuclei caused by a collision with a particle or with another nucleus. Two numbers are always conserved: the total charge and the total number of nucleons, which is what lets us complete an equation.

$$\\genfrac{}{}{0pt}{1}{14}{7}\\text{N} + \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{17}{8}\\text{O} + \\genfrac{}{}{0pt}{1}{1}{1}\\text{H}$$

This was Rutherford's reaction of 1919, the first time one element was turned into another by human hands.

**Example 1.** In $\\genfrac{}{}{0pt}{1}{27}{13}\\text{Al} + \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{30}{15}\\text{P} + X$ the missing particle has $A = 1$ and $Z = 0$, so it is a neutron.

## Fission and the chain reaction

A nucleus of $^{235}\\text{U}$ that absorbs a slow neutron becomes unstable, stretches and breaks into two middle-sized nuclei. Each fission gives out

- two or three new neutrons;
- about $200$ MeV of energy, mostly as the kinetic energy of the fragments;
- gamma radiation and radioactive fragments.

Those new neutrons can split further nuclei, and the process feeds itself. That is the **chain reaction**. Whether it dies out or runs away depends on how many of the neutrons find a new $^{235}\\text{U}$ nucleus instead of escaping or being absorbed, and so on the amount and the purity of the uranium: there is a **critical mass** below which the chain cannot be kept going.

**Example 2.** The energy of the fission of $1$ g of uranium is about the same as that of $2$ tonnes of petrol, which is the whole attraction of nuclear power.

## The reactor

| Part | What it does |
|---|---|
| fuel rods | hold the uranium, enriched in $^{235}\\text{U}$ |
| moderator (water, graphite) | slows the neutrons down, since slow ones split $^{235}\\text{U}$ best |
| control rods (boron, cadmium) | absorb neutrons, and so hold the reaction steady |
| coolant | carries the heat out to the steam generator |
| concrete and steel shielding | keeps the radiation inside |

Beyond the reactor the station is an ordinary thermal one: steam, turbine, generator. The gains are that no carbon dioxide is produced and very little fuel is needed. The costs are the radioactive waste, which must be stored for thousands of years, and the consequences of an accident, as at Chernobyl in 1986 and Fukushima in 2011.

**Example 3.** Pushing the control rods in absorbs more neutrons and the reaction slows; pulling them out speeds it up.
**Example 4.** Armenia's station at Metsamor produces a large part of the country's electricity, and Russia, France and many other countries use reactors of the same family.

## Fusion

> **Fusion** is the joining of light nuclei into a heavier one, which also releases energy because the binding energy per nucleon grows towards the middle of the table.

$$\\genfrac{}{}{0pt}{1}{2}{1}\\text{H} + \\genfrac{}{}{0pt}{1}{3}{1}\\text{H} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} + \\genfrac{}{}{0pt}{1}{1}{0}\\text{n}$$

Fusion gives several times more energy per kilogram than fission, its fuel is the hydrogen of water, and it leaves almost no long-lived waste. The difficulty is that two nuclei must be brought within $10^{-15}$ m against their electric repulsion, which needs temperatures of millions of degrees. In the Sun that is provided by gravity, and the Sun has been running on fusion for billions of years. On the Earth it works in a hydrogen bomb and, so far only in experiments, in machines such as the international ITER project.

**Example 5.** The Sun turns about $600$ million tonnes of hydrogen into helium every second, and our sunlight is the energy released.

### Exercises

1. What is a nuclear reaction, and which two numbers are conserved?
2. Complete: $\\genfrac{}{}{0pt}{1}{9}{4}\\text{Be} + \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{12}{6}\\text{C} + X$.
3. What happens when a $^{235}\\text{U}$ nucleus absorbs a slow neutron?
4. What is the chain reaction, and what is a critical mass?
5. Name four parts of a reactor and say what each does.
6. Give one advantage and one drawback of nuclear power.
7. What is fusion, and why does it release energy?
8. Why is fusion so hard to achieve on the Earth?

### Answers

1. A change of nuclei caused by a collision; the total charge and the total number of nucleons.
2. $X$ has $A = 1$, $Z = 0$: a neutron.
3. It breaks into two middle-sized nuclei, giving two or three neutrons and about $200$ MeV.
4. A reaction kept going by its own neutrons; the critical mass is the least amount of fuel that can keep it going.
5. Fuel rods hold the uranium, the moderator slows the neutrons, the control rods absorb them, the coolant carries out the heat.
6. No carbon dioxide and very little fuel; radioactive waste and the risk of an accident.
7. The joining of light nuclei; the binding energy per nucleon is larger in the product.
8. The nuclei must be forced together against their electric repulsion, which needs millions of degrees.`,
        hy: `## Միջուկային ռեակցիաներ

**Միջուկային ռեակցիա** է միջուկների փոփոխությունը՝ առաջացած մասնիկի կամ այլ միջուկի հետ բախումից։ Միշտ պահպանվում են երկու թիվ՝ ընդհանուր լիցքը և նուկլոնների ընդհանուր թիվը, ինչը և թույլ է տալիս լրացնել հավասարումը։

$$\\genfrac{}{}{0pt}{1}{14}{7}\\text{N} + \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{17}{8}\\text{O} + \\genfrac{}{}{0pt}{1}{1}{1}\\text{H}$$

Սա Ռեզերֆորդի 1919 թվականի ռեակցիան էր՝ առաջին անգամ, երբ մեկ տարրը մարդու ձեռքով դարձավ մեկ ուրիշը։

**Օրինակ 1։** $\\genfrac{}{}{0pt}{1}{27}{13}\\text{Al} + \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{30}{15}\\text{P} + X$-ում բացակայող մասնիկն ունի $A = 1$ և $Z = 0$, ուստի այն նեյտրոն է։

## Տրոհում և շղթայական ռեակցիա

$^{235}\\text{U}$-ի միջուկը, որը կլանում է դանդաղ նեյտրոն, դառնում է անկայուն, ձգվում և կտրվում երկու միջին միջուկի։ Ամեն տրոհում տալիս է

- երկու կամ երեք նոր նեյտրոն,
- մոտ $200$ ՄէՎ էներգիա՝ հիմնականում բեկորների կինետիկ էներգիայի տեսքով,
- գամմա ճառագայթում և ռադիոակտիվ բեկորներ։

Այդ նոր նեյտրոնները կարող են տրոհել հետագա միջուկներ, և պրոցեսը սնում է իրեն։ Ահա դա **շղթայական ռեակցիան** է։ Այն կմարի՞, թե՞ կփախչի, կախված է նրանից, թե նեյտրոններից քանիսը կգտնեն նոր $^{235}\\text{U}$ միջուկ՝ փոխանակ դուրս գալու կամ կլանվելու, ուրեմն և ուրանի քանակից և մաքրությունից. կա **կրիտիկական զանգված**, որից ցածր շղթան հնարավոր չէ պահել։

**Օրինակ 2։** $1$ գ ուրանի տրոհման էներգիան մոտավորապես նույնն է, ինչ $2$ տոննա բենզինի էներգիան, և սա միջուկային էներգետիկայի ողջ գրավչությունն է։

## Ռեակտորը

| Մաս | Ի՞նչ է անում |
|---|---|
| վառելիքային ձողեր | պահում են ուրանը՝ հարստացված $^{235}\\text{U}$-ով |
| դանդաղեցուցիչ (ջուր, գրաֆիտ) | դանդաղեցնում է նեյտրոնները, քանի որ դանդաղները լավագույնս տրոհում են $^{235}\\text{U}$-ը |
| կառավարող ձողեր (բոր, կադմիում) | կլանում են նեյտրոնները և այդպես ռեակցիան պահում կայուն |
| սառեցնող նյութ | ջերմությունը դուրս է տանում գոլորշու գեներատոր |
| բետոնե և պողպատե պաշտպանություն | ճառագայթումը պահում է ներսում |

Ռեակտորից դուրս կայանը սովորական ջերմային կայան է՝ գոլորշի, տուրբին, գեներատոր։ Շահն այն է, որ ածխաթթու գազ չի արտադրվում, և վառելիք շատ քիչ է պետք։ Գինը ռադիոակտիվ թափոններն են, որոնք պետք է պահվեն հազարավոր տարիներ, և վթարի հետևանքները, ինչպես 1986 թվականին Չեռնոբիլում և 2011 թվականին Ֆուկուսիմայում։

**Օրինակ 3։** Կառավարող ձողերը ներս մտցնելն ավելի շատ նեյտրոն է կլանում, և ռեակցիան դանդաղում է, դուրս հանելն արագացնում է նրան։
**Օրինակ 4։** Հայաստանի Մեծամորի կայանն արտադրում է երկրի էլեկտրականության մեծ մասը, իսկ Ռուսաստանը, Ֆրանսիան և շատ այլ երկրներ օգտագործում են նույն ընտանիքի ռեակտորներ։

## Սինթեզ

> **Սինթեզ** է թեթև միջուկների միացումն ավելի ծանրի մեջ, ինչը նույնպես ազատում է էներգիա, որովհետև մեկ նուկլոնին բաժին ընկնող կապի էներգիան աճում է աղյուսակի մեջտեղի կողմը։

$$\\genfrac{}{}{0pt}{1}{2}{1}\\text{H} + \\genfrac{}{}{0pt}{1}{3}{1}\\text{H} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} + \\genfrac{}{}{0pt}{1}{1}{0}\\text{n}$$

Սինթեզը մեկ կիլոգրամից տալիս է մի քանի անգամ ավելի շատ էներգիա, քան տրոհումը, նրա վառելիքը ջրի ջրածինն է, և այն գրեթե երկարակյաց թափոն չի թողնում։ Դժվարությունն այն է, որ երկու միջուկ պետք է մոտեցվի $10^{-15}$ մ-ից ներս՝ նրանց էլեկտրական վանողության դեմ, ինչին պետք են միլիոնավոր աստիճան ջերմաստիճաններ։ Արեգակում դա ապահովում է ձգողությունը, և Արեգակը միլիարդավոր տարիներ աշխատում է սինթեզով։ Երկրի վրա այն աշխատում է ջրածնային ռումբում և առայժմ միայն փորձերում՝ ITER միջազգային նախագծի նման մեքենաներում։

**Օրինակ 5։** Արեգակն ամեն վայրկյան մոտ $600$ միլիոն տոննա ջրածին դարձնում է հելիում, և մեր արևի լույսն ազատված էներգիան է։

### Վարժություններ

1. Ի՞նչ է միջուկային ռեակցիան, և ո՞ր երկու թիվն է պահպանվում։
2. Լրացրեք՝ $\\genfrac{}{}{0pt}{1}{9}{4}\\text{Be} + \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{12}{6}\\text{C} + X$։
3. Ի՞նչ է կատարվում, երբ $^{235}\\text{U}$-ի միջուկը կլանում է դանդաղ նեյտրոն։
4. Ի՞նչ է շղթայական ռեակցիան, և ի՞նչ է կրիտիկական զանգվածը։
5. Նշեք ռեակտորի չորս մասը և ասեք, թե յուրաքանչյուրն ինչ է անում։
6. Նշեք միջուկային էներգետիկայի մեկ առավելություն և մեկ թերություն։
7. Ի՞նչ է սինթեզը, և ինչո՞ւ է այն ազատում էներգիա։
8. Ինչո՞ւ սինթեզն այնքան դժվար է Երկրի վրա իրականացնել։

### Պատասխաններ

1. Բախումից առաջացած միջուկների փոփոխությունը. ընդհանուր լիցքը և նուկլոնների ընդհանուր թիվը։
2. $X$-ն ունի $A = 1$, $Z = 0$՝ նեյտրոն է։
3. Այն կտրվում է երկու միջին միջուկի՝ տալով երկու կամ երեք նեյտրոն և մոտ $200$ ՄէՎ։
4. Ռեակցիա, որը պահվում է իր սեփական նեյտրոններով. կրիտիկական զանգվածը վառելիքի նվազագույն քանակն է, որը կարող է նրան պահել։
5. Վառելիքային ձողերը պահում են ուրանը, դանդաղեցուցիչը դանդաղեցնում է նեյտրոնները, կառավարող ձողերը կլանում են նրանք, սառեցնողը դուրս է տանում ջերմությունը։
6. Ածխաթթու գազ չկա և վառելիք շատ քիչ է պետք, ռադիոակտիվ թափոններ և վթարի վտանգ։
7. Թեթև միջուկների միացումը. արդյունքում մեկ նուկլոնին բաժին ընկնող կապի էներգիան ավելի մեծ է։
8. Միջուկները պետք է մոտեցվեն էլեկտրական վանողության դեմ, ինչին պետք են միլիոնավոր աստիճաններ։`,
        ru: `## Ядерные реакции

**Ядерной реакцией** называют изменение ядер, вызванное столкновением с частицей или с другим ядром. Всегда сохраняются два числа: полный заряд и полное число нуклонов, и именно это позволяет дописать уравнение.

$$\\genfrac{}{}{0pt}{1}{14}{7}\\text{N} + \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{17}{8}\\text{O} + \\genfrac{}{}{0pt}{1}{1}{1}\\text{H}$$

Это реакция Резерфорда 1919 года — первый случай, когда один элемент был превращён в другой руками человека.

**Пример 1.** В $\\genfrac{}{}{0pt}{1}{27}{13}\\text{Al} + \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{30}{15}\\text{P} + X$ недостающая частица имеет $A = 1$ и $Z = 0$, значит это нейтрон.

## Деление и цепная реакция

Ядро $^{235}\\text{U}$, поглотившее медленный нейтрон, становится неустойчивым, растягивается и разрывается на два ядра средней массы. Каждое деление даёт

- два или три новых нейтрона;
- около $200$ МэВ энергии, в основном как кинетическую энергию осколков;
- гамма-излучение и радиоактивные осколки.

Эти новые нейтроны могут расщепить следующие ядра, и процесс питает сам себя. Это и есть **цепная реакция**. Погаснет она или пойдёт вразнос, зависит от того, сколько нейтронов найдут новое ядро $^{235}\\text{U}$, а не уйдут наружу и не будут поглощены, то есть от количества и чистоты урана: существует **критическая масса**, ниже которой цепь поддержать нельзя.

**Пример 2.** Энергия деления $1$ г урана примерно равна энергии $2$ тонн бензина, и в этом вся притягательность ядерной энергетики.

## Реактор

| Часть | Что делает |
|---|---|
| топливные стержни | содержат уран, обогащённый по $^{235}\\text{U}$ |
| замедлитель (вода, графит) | замедляет нейтроны, так как медленные лучше делят $^{235}\\text{U}$ |
| регулирующие стержни (бор, кадмий) | поглощают нейтроны и тем удерживают реакцию ровной |
| теплоноситель | выносит тепло к парогенератору |
| бетонная и стальная защита | удерживает излучение внутри |

За пределами реактора станция — обычная тепловая: пар, турбина, генератор. Выигрыш в том, что не выделяется углекислый газ и нужно очень мало топлива. Цена — радиоактивные отходы, которые приходится хранить тысячи лет, и последствия аварии, как в Чернобыле в 1986 году и в Фукусиме в 2011 году.

**Пример 3.** Если вдвинуть регулирующие стержни, поглощается больше нейтронов и реакция замедляется; если их выдвинуть, она ускоряется.
**Пример 4.** Армянская станция в Мецаморе вырабатывает значительную часть электричества страны, а Россия, Франция и многие другие страны используют реакторы того же семейства.

## Синтез

> **Синтезом** называют соединение лёгких ядер в более тяжёлое, которое тоже выделяет энергию, поскольку энергия связи на нуклон растёт к середине таблицы.

$$\\genfrac{}{}{0pt}{1}{2}{1}\\text{H} + \\genfrac{}{}{0pt}{1}{3}{1}\\text{H} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} + \\genfrac{}{}{0pt}{1}{1}{0}\\text{n}$$

Синтез даёт с килограмма в несколько раз больше энергии, чем деление, его топливо — водород воды, и он почти не оставляет долгоживущих отходов. Трудность в том, что два ядра надо сблизить до $10^{-15}$ м против их электрического отталкивания, а для этого нужны температуры в миллионы градусов. На Солнце это обеспечивает тяготение, и Солнце работает на синтезе миллиарды лет. На Земле он работает в водородной бомбе и пока только в опытах — в установках вроде международного проекта ITER.

**Пример 5.** Солнце каждую секунду превращает около $600$ миллионов тонн водорода в гелий, и наш солнечный свет — это выделившаяся энергия.

### Упражнения

1. Что такое ядерная реакция и какие два числа сохраняются?
2. Допишите: $\\genfrac{}{}{0pt}{1}{9}{4}\\text{Be} + \\genfrac{}{}{0pt}{1}{4}{2}\\text{He} \\rightarrow\\ \\genfrac{}{}{0pt}{1}{12}{6}\\text{C} + X$.
3. Что происходит, когда ядро $^{235}\\text{U}$ поглощает медленный нейтрон?
4. Что такое цепная реакция и что такое критическая масса?
5. Назовите четыре части реактора и скажите, что делает каждая.
6. Приведите одно достоинство и один недостаток ядерной энергетики.
7. Что такое синтез и почему он выделяет энергию?
8. Почему синтез так трудно осуществить на Земле?

### Ответы

1. Изменение ядер при столкновении; полный заряд и полное число нуклонов.
2. У $X$ будет $A = 1$, $Z = 0$: это нейтрон.
3. Оно разрывается на два ядра средней массы, давая два или три нейтрона и около $200$ МэВ.
4. Реакция, поддерживаемая своими же нейтронами; критическая масса — наименьшее количество топлива, способное её поддержать.
5. Топливные стержни содержат уран, замедлитель замедляет нейтроны, регулирующие стержни их поглощают, теплоноситель выносит тепло.
6. Нет углекислого газа и мало топлива; радиоактивные отходы и риск аварии.
7. Соединение лёгких ядер; энергия связи на нуклон у продукта больше.
8. Ядра надо сблизить против электрического отталкивания, а для этого нужны миллионы градусов.`,
      },
      [
        q(t("In a nuclear reaction the conserved quantities are", "Միջուկային ռեակցիայում պահպանվող մեծություններն են", "В ядерной реакции сохраняются"), [
          t("the charge and the number of nucleons", "լիցքը և նուկլոնների թիվը", "заряд и число нуклонов"),
          t("the number of protons alone", "միայն պրոտոնների թիվը", "только число протонов"),
          t("the number of electrons", "էլեկտրոնների թիվը", "число электронов"),
        ], 0),
        q(t("The fission of one uranium nucleus releases about", "Ուրանի մեկ միջուկի տրոհումն ազատում է մոտ", "Деление одного ядра урана выделяет около"), [
          t("2 MeV", "2 ՄէՎ", "2 МэВ"),
          t("200 MeV", "200 ՄէՎ", "200 МэВ"),
          t("200 J", "200 Ջ", "200 Дж"),
        ], 1),
        q(t("The chain reaction is kept going by", "Շղթայական ռեակցիան պահվում է", "Цепная реакция поддерживается"), [
          t("gamma rays", "գամմա ճառագայթներով", "гамма-лучами"),
          t("alpha particles", "ալֆա մասնիկներով", "альфа-частицами"),
          t("the neutrons released in fission", "տրոհման ժամանակ ազատված նեյտրոններով", "нейтронами, выделяющимися при делении"),
        ], 2),
        q(t("The control rods of a reactor", "Ռեակտորի կառավարող ձողերը", "Регулирующие стержни реактора"), [
          t("absorb neutrons", "կլանում են նեյտրոնները", "поглощают нейтроны"),
          t("slow the neutrons down", "դանդաղեցնում են նեյտրոնները", "замедляют нейтроны"),
          t("carry out the heat", "դուրս են տանում ջերմությունը", "выносят тепло"),
        ], 0),
        q(t("The moderator in a reactor", "Ռեակտորի դանդաղեցուցիչը", "Замедлитель в реакторе"), [
          t("absorbs the neutrons", "կլանում է նեյտրոնները", "поглощает нейтроны"),
          t("slows the neutrons down", "դանդաղեցնում է նեյտրոնները", "замедляет нейтроны"),
          t("shields the radiation", "պաշտպանում է ճառագայթումից", "экранирует излучение"),
        ], 1),
        q(t("The Sun's energy comes from", "Արեգակի էներգիան գալիս է", "Энергия Солнца берётся от"), [
          t("the fission of uranium", "ուրանի տրոհումից", "деления урана"),
          t("burning hydrogen chemically", "ջրածնի քիմիական այրումից", "химического горения водорода"),
          t("the fusion of light nuclei", "թեթև միջուկների սինթեզից", "синтеза лёгких ядер"),
        ], 2),
      ],
    ),
    lesson(
      "radiation-and-life",
      ["Radiation and living organisms; dosimetry", "Ճառագայթում և կենդանի օրգանիզմներ, դոզիմետրիա", "Излучение и живые организмы; дозиметрия"],
      {
        en: ["Explain how ionising radiation acts on living tissue", "Name the units of dose and the usual background level", "Name the ways of protecting oneself and the useful applications"],
        hy: ["Բացատրել, թե ինչպես է իոնացնող ճառագայթումն ազդում կենդանի հյուսվածքի վրա", "Նշել դոզայի միավորները և սովորական ֆոնի մակարդակը", "Նշել պաշտպանության ձևերը և օգտակար կիրառությունները"],
        ru: ["Объяснять, как ионизирующее излучение действует на живую ткань", "Называть единицы дозы и обычный уровень фона", "Называть способы защиты и полезные применения"],
      },
      {
        en: `## Why radiation is dangerous

Alpha, beta and gamma radiation, and X-rays too, are called **ionising** because each particle or quantum knocks electrons out of the atoms it passes. In a living cell the broken molecule may be a protein or the DNA itself.

| Dose | Usual outcome |
|---|---|
| small | the cell repairs itself; a small added risk of illness later |
| moderate | the cell dies, or divides wrongly, which can start a tumour |
| large | many cells die at once: radiation sickness |

Two features make the danger easy to underestimate. The radiation cannot be seen, smelt or felt, so only an instrument tells us it is there. And the illness it causes appears long afterwards, so the cause is hard to connect with the effect.

## Dose and its units

> The **absorbed dose** is the energy taken up by one kilogram of tissue. Its unit is the **gray**: $1$ Gy $= 1$ J/kg.

Equal energies do not do equal harm, because an alpha particle spends all of its energy in a tiny volume. The dose is therefore multiplied by a factor for the kind of radiation to give the **equivalent dose**, measured in **sieverts** (Sv). The factor is $1$ for beta and gamma and about $20$ for alpha.

| Source | Equivalent dose |
|---|---|
| natural background, a year | about $2$ to $3$ mSv |
| a chest X-ray | about $0{.}1$ mSv |
| the allowed yearly extra for the public | about $1$ mSv |
| the yearly limit for a worker | about $20$ mSv |
| a single dose of $1$ Sv | radiation sickness |
| a single dose of $5$ Sv or more | usually fatal |

The natural background comes from cosmic rays, from potassium and carbon inside our own bodies, and mostly from radon, a radioactive gas that seeps out of the ground and gathers in cellars and unventilated rooms.

**Example 1.** Flying at ten kilometres for ten hours adds about $0{.}05$ mSv, because there is less air above to absorb the cosmic rays.
**Example 2.** Airing a cellar regularly is a cheap and effective way of cutting the radon dose.

## Protection and use

Three rules cover almost everything:

- put distance between yourself and the source, since the dose falls as the square of the distance;
- put a shield in the way: paper for alpha, aluminium for beta, lead or concrete for gamma;
- spend less time near the source, and never eat, drink or breathe anything radioactive.

Against all that stands the benefit, which is large. Radiation kills tumours in radiotherapy, sterilises instruments and food, finds cracks in metal castings and welds, dates wood and rock, and lets doctors follow a labelled substance through the body. Smoke detectors use a tiny alpha source, and a dosimeter is the instrument that measures the dose a person has received.

**Example 3.** A radiographer stands behind a lead screen and leaves the room, while the patient receives one short, carefully measured exposure.
**Example 4.** A narrow beam from several directions, crossing on the tumour, gives the tumour a large dose and the healthy tissue around it a small one.
**Example 5.** After the Chernobyl accident the main danger to people far away was radioactive iodine and caesium in milk and vegetables, not the radiation itself, and that is why food was checked.

### Exercises

1. Why is this radiation called ionising?
2. What can happen to a cell that absorbs a moderate dose?
3. Why is the danger easy to underestimate?
4. What is the absorbed dose, and in what is it measured?
5. Why is the equivalent dose used, and in what is it measured?
6. What is the usual natural background dose in a year?
7. Name the three rules of protection.
8. Name three useful applications of radiation.

### Answers

1. Each particle knocks electrons out of the atoms it passes.
2. It may die or divide wrongly, which can start a tumour.
3. The radiation cannot be sensed, and the illness appears long afterwards.
4. The energy absorbed by a kilogram of tissue, in grays.
5. Because different radiations do different harm for the same energy; in sieverts.
6. About $2$ to $3$ mSv.
7. Distance, shielding and less time, and never take a source inside the body.
8. Radiotherapy, sterilising, flaw detection, dating, medical tracers.`,
        hy: `## Ինչու է ճառագայթումը վտանգավոր

Ալֆա, բետա և գամմա ճառագայթումը, ինչպես նաև ռենտգենյան ճառագայթները, կոչվում են **իոնացնող**, որովհետև ամեն մասնիկ կամ քվանտ էլեկտրոններ է դուրս հարվածում իր անցած ատոմներից։ Կենդանի բջջում կտրված մոլեկուլը կարող է լինել սպիտակուց կամ հենց ԴՆԹ-ն։

| Դոզա | Սովորական հետևանք |
|---|---|
| փոքր | բջիջը վերականգնում է իրեն, հետագայում հիվանդության փոքր ավելացած վտանգ |
| միջին | բջիջը մահանում է կամ սխալ բաժանվում, ինչը կարող է ուռուցք սկսել |
| մեծ | շատ բջիջներ միանգամից մահանում են՝ ճառագայթային հիվանդություն |

Երկու հատկանիշ վտանգը դարձնում են հեշտ թերագնահատելի։ Ճառագայթումը չի երևում, հոտ չունի և չի զգացվում, ուստի միայն սարքն է մեզ ասում, որ այն կա։ Եվ նրա առաջացրած հիվանդությունը հայտնվում է շատ հետո, ուստի պատճառը դժվար է կապել հետևանքի հետ։

## Դոզան և նրա միավորները

> **Կլանված դոզան** մեկ կիլոգրամ հյուսվածքի կողմից ընդունված էներգիան է։ Նրա միավորը **գրեյն** է. $1$ Գր $= 1$ Ջ/կգ։

Հավասար էներգիաները հավասար վնաս չեն տալիս, որովհետև ալֆա մասնիկն իր ամբողջ էներգիան ծախսում է շատ փոքր ծավալում։ Ուստի դոզան բազմապատկվում է ճառագայթման տեսակի գործակցով՝ տալով **համարժեք դոզան**, որը չափվում է **սիվերտներով** (Սվ)։ Գործակիցը $1$ է բետայի և գամմայի և մոտ $20$՝ ալֆայի համար։

| Աղբյուր | Համարժեք դոզա |
|---|---|
| բնական ֆոն՝ տարեկան | մոտ $2$-ից $3$ մՍվ |
| կրծքավանդակի ռենտգեն | մոտ $0{,}1$ մՍվ |
| բնակչության համար տարեկան թույլատրված ավելացում | մոտ $1$ մՍվ |
| աշխատողի տարեկան սահմանը | մոտ $20$ մՍվ |
| միանգամից $1$ Սվ դոզա | ճառագայթային հիվանդություն |
| միանգամից $5$ Սվ կամ ավելի | սովորաբար մահացու |

Բնական ֆոնը գալիս է տիեզերական ճառագայթներից, մեր սեփական մարմնի կալիումից և ածխածնից և հիմնականում ռադոնից՝ ռադիոակտիվ գազից, որը դուրս է հոսում գետնից և հավաքվում նկուղներում և չօդափոխվող սենյակներում։

**Օրինակ 1։** Տասը կիլոմետր բարձրության վրա տասը ժամ թռիչքն ավելացնում է մոտ $0{,}05$ մՍվ, որովհետև վերևում ավելի քիչ օդ կա տիեզերական ճառագայթները կլանելու համար։
**Օրինակ 2։** Նկուղը կանոնավոր օդափոխելը ռադոնի դոզան նվազեցնելու էժան և արդյունավետ ձև է։

## Պաշտպանություն և կիրառություն

Երեք կանոն ներառում է գրեթե ամեն ինչ՝

- հեռավորություն դրեք ձեր և աղբյուրի միջև, քանի որ դոզան նվազում է հեռավորության քառակուսու պես,
- ճանապարհին վահան դրեք՝ թուղթ ալֆայի, ալյումին բետայի, կապար կամ բետոն գամմայի համար,
- աղբյուրի մոտ ավելի քիչ ժամանակ անցկացրեք և երբեք ռադիոակտիվ բան չկերեք, չխմեք և չներշնչեք։

Այս ամենի դեմ կանգնած է օգուտը, որը մեծ է։ Ճառագայթումը ճառագայթաբուժության մեջ սպանում է ուռուցքները, ախտահանում է գործիքներ և սնունդ, գտնում է ճաքեր մետաղե ձուլվածքներում և կարերում, թվագրում է փայտ և ժայռ և բժիշկներին թույլ տալիս հետևել նշված նյութին մարմնի միջով։ Ծխի հայտնիչներն օգտագործում են շատ փոքր ալֆա աղբյուր, իսկ դոզիմետրն այն սարքն է, որը չափում է մարդու ստացած դոզան։

**Օրինակ 3։** Ռենտգենոլոգը կանգնում է կապարե վահանի հետևում և դուրս գալիս սենյակից, մինչդեռ հիվանդը ստանում է մեկ կարճ, ուշադիր չափված ճառագայթում։
**Օրինակ 4։** Մի քանի ուղղությունից նեղ փունջը, որոնք հատվում են ուռուցքի վրա, ուռուցքին տալիս է մեծ դոզա, իսկ նրա շուրջն առողջ հյուսվածքին՝ փոքր։
**Օրինակ 5։** Չեռնոբիլի վթարից հետո հեռու մարդկանց գլխավոր վտանգը կաթի և բանջարեղենի ռադիոակտիվ յոդն ու ցեզիումն էր, ոչ թե ճառագայթումն ինքը, և դրա համար սնունդը ստուգվում էր։

### Վարժություններ

1. Ինչո՞ւ է այս ճառագայթումը կոչվում իոնացնող։
2. Ի՞նչ կարող է կատարվել միջին դոզա կլանած բջջի հետ։
3. Ինչո՞ւ է վտանգը հեշտ թերագնահատելի։
4. Ի՞նչ է կլանված դոզան, և ինչո՞վ է չափվում։
5. Ինչո՞ւ է օգտագործվում համարժեք դոզան, և ինչո՞վ է չափվում։
6. Ի՞նչ է տարեկան սովորական բնական ֆոնի դոզան։
7. Նշեք պաշտպանության երեք կանոնը։
8. Նշեք ճառագայթման երեք օգտակար կիրառություն։

### Պատասխաններ

1. Ամեն մասնիկ էլեկտրոններ է դուրս հարվածում իր անցած ատոմներից։
2. Այն կարող է մահանալ կամ սխալ բաժանվել, ինչը կարող է ուռուցք սկսել։
3. Ճառագայթումը չի զգացվում, և հիվանդությունը հայտնվում է շատ հետո։
4. Մեկ կիլոգրամ հյուսվածքի կլանած էներգիան՝ գրեյներով։
5. Որովհետև տարբեր ճառագայթումներ նույն էներգիայի դեպքում տարբեր վնաս են տալիս, սիվերտներով։
6. Մոտ $2$-ից $3$ մՍվ։
7. Հեռավորություն, վահան և ավելի քիչ ժամանակ, և երբեք աղբյուրը մարմնի ներս չտանել։
8. Ճառագայթաբուժություն, ախտահանում, թերության հայտնաբերում, թվագրում, բժշկական նշիչներ։`,
        ru: `## Почему излучение опасно

Альфа-, бета- и гамма-излучение, а также рентгеновские лучи называют **ионизирующими**, потому что каждая частица или квант выбивает электроны из атомов, через которые проходит. В живой клетке разорванной молекулой может оказаться белок или сама ДНК.

| Доза | Обычное следствие |
|---|---|
| малая | клетка восстанавливается; небольшой добавочный риск болезни позже |
| средняя | клетка погибает или делится неверно, что может начать опухоль |
| большая | множество клеток погибает сразу: лучевая болезнь |

Две особенности делают опасность легко недооценимой. Излучение нельзя увидеть, почувствовать или ощутить по запаху, и только прибор говорит нам, что оно есть. А вызванная им болезнь появляется много позже, поэтому причину трудно связать со следствием.

## Доза и её единицы

> **Поглощённой дозой** называют энергию, принятую одним килограммом ткани. Её единица — **грей**: $1$ Гр $= 1$ Дж/кг.

Равные энергии наносят не равный вред, потому что альфа-частица тратит всю свою энергию в крошечном объёме. Поэтому дозу умножают на коэффициент для вида излучения и получают **эквивалентную дозу**, измеряемую в **сивертах** (Св). Коэффициент равен $1$ для бета и гамма и около $20$ для альфа.

| Источник | Эквивалентная доза |
|---|---|
| естественный фон за год | около $2$ до $3$ мСв |
| рентген грудной клетки | около $0{,}1$ мСв |
| допустимая годовая добавка для населения | около $1$ мСв |
| годовой предел для работника | около $20$ мСв |
| однократная доза $1$ Св | лучевая болезнь |
| однократная доза $5$ Св и больше | обычно смертельна |

Естественный фон идёт от космических лучей, от калия и углерода внутри наших собственных тел и главным образом от радона — радиоактивного газа, который просачивается из земли и собирается в подвалах и непроветриваемых комнатах.

**Пример 1.** Полёт на высоте десяти километров в течение десяти часов добавляет около $0{,}05$ мСв, потому что сверху меньше воздуха, поглощающего космические лучи.
**Пример 2.** Регулярное проветривание подвала — дешёвый и действенный способ снизить дозу от радона.

## Защита и применение

Три правила покрывают почти всё:

- увеличьте расстояние между собой и источником, так как доза убывает как квадрат расстояния;
- поставьте на пути защиту: бумагу для альфа, алюминий для бета, свинец или бетон для гамма;
- проводите меньше времени возле источника и никогда не ешьте, не пейте и не вдыхайте ничего радиоактивного.

Против всего этого стоит польза, и она велика. Излучение убивает опухоли при лучевой терапии, стерилизует инструменты и продукты, находит трещины в металлических отливках и сварных швах, датирует дерево и породы и позволяет врачам следить за помеченным веществом внутри тела. Датчики дыма используют крошечный альфа-источник, а дозиметр — это прибор, измеряющий полученную человеком дозу.

**Пример 3.** Рентгенолог стоит за свинцовым экраном и выходит из комнаты, а пациент получает одно короткое, тщательно отмеренное облучение.
**Пример 4.** Узкие пучки с нескольких направлений, пересекающиеся на опухоли, дают опухоли большую дозу, а здоровой ткани вокруг неё малую.
**Пример 5.** После аварии в Чернобыле главной опасностью для людей вдалеке были радиоактивные иод и цезий в молоке и овощах, а не само излучение, и поэтому продукты проверяли.

### Упражнения

1. Почему это излучение называют ионизирующим?
2. Что может случиться с клеткой, поглотившей среднюю дозу?
3. Почему опасность легко недооценить?
4. Что такое поглощённая доза и в чём её измеряют?
5. Зачем нужна эквивалентная доза и в чём её измеряют?
6. Какова обычная естественная доза фона за год?
7. Назовите три правила защиты.
8. Назовите три полезных применения излучения.

### Ответы

1. Каждая частица выбивает электроны из атомов, через которые проходит.
2. Она может погибнуть или неверно делиться, что может начать опухоль.
3. Излучение не ощущается, а болезнь появляется много позже.
4. Энергия, поглощённая килограммом ткани, в греях.
5. Потому что разные излучения при одной энергии наносят разный вред; в сивертах.
6. Около $2$ до $3$ мСв.
7. Расстояние, защита и меньше времени, и никогда не вносить источник внутрь тела.
8. Лучевая терапия, стерилизация, дефектоскопия, датирование, медицинские метки.`,
      },
      [
        q(t("Ionising radiation is dangerous because it", "Իոնացնող ճառագայթումը վտանգավոր է, որովհետև այն", "Ионизирующее излучение опасно потому, что оно"), [
          t("breaks the molecules of a cell", "կտրում է բջջի մոլեկուլները", "разрывает молекулы клетки"),
          t("heats the body strongly", "ուժեղ տաքացնում է մարմինը", "сильно нагревает тело"),
          t("makes the body magnetic", "մարմինը դարձնում է մագնիսական", "делает тело магнитным"),
        ], 0),
        q(t("The absorbed dose is measured in", "Կլանված դոզան չափվում է", "Поглощённую дозу измеряют в"), [
          t("sieverts", "սիվերտներով", "сивертах"),
          t("grays", "գրեյներով", "греях"),
          t("teslas", "տեսլաներով", "теслах"),
        ], 1),
        q(t("The equivalent dose, measured in sieverts, takes account of", "Սիվերտներով չափվող համարժեք դոզան հաշվի է առնում", "Эквивалентная доза, измеряемая в сивертах, учитывает"), [
          t("the mass of the body", "մարմնի զանգվածը", "массу тела"),
          t("the time of day", "օրվա ժամը", "время суток"),
          t("the kind of radiation", "ճառագայթման տեսակը", "вид излучения"),
        ], 2),
        q(t("The natural background dose in a year is about", "Տարեկան բնական ֆոնի դոզան մոտ", "Естественная доза фона за год составляет около"), [
          t("2 to 3 mSv", "2-ից 3 մՍվ", "2 до 3 мСв"),
          t("2 to 3 Sv", "2-ից 3 Սվ", "2 до 3 Св"),
          t("200 mSv", "200 մՍվ", "200 мСв"),
        ], 0),
        q(t("The largest part of the natural background usually comes from", "Բնական ֆոնի ամենամեծ մասը սովորաբար գալիս է", "Наибольшая часть естественного фона обычно идёт от"), [
          t("the Sun's light", "Արեգակի լույսից", "света Солнца"),
          t("radon from the ground", "գետնից դուրս եկող ռադոնից", "радона из земли"),
          t("mobile telephones", "բջջային հեռախոսներից", "мобильных телефонов"),
        ], 1),
        q(t("Which shield is needed against gamma radiation?", "Գամմա ճառագայթման դեմ ո՞ր վահանը պետք է", "Какая защита нужна от гамма-излучения?"), [
          t("a sheet of paper", "թղթի թերթիկ", "лист бумаги"),
          t("a few mm of aluminium", "մի քանի մմ ալյումին", "несколько мм алюминия"),
          t("thick lead or concrete", "հաստ կապար կամ բետոն", "толстый свинец или бетон"),
        ], 2),
      ],
    ),
    lesson(
      "universe",
      ["The Solar system, stars, galaxies and the Big Bang", "Արեգակնային համակարգ, աստղեր, գալակտիկաներ, Մեծ պայթյուն", "Солнечная система, звёзды, галактики, Большой взрыв"],
      {
        en: ["Describe the Solar system and the scale of its distances", "Say how stars are born, shine and die", "Describe our galaxy and the evidence for the expansion of the Universe"],
        hy: ["Նկարագրել Արեգակնային համակարգը և նրա հեռավորությունների մասշտաբը", "Ասել, թե ինչպես են աստղերը ծնվում, փայլում և մահանում", "Նկարագրել մեր գալակտիկան և Տիեզերքի ընդարձակման վկայությունը"],
        ru: ["Описывать Солнечную систему и масштаб её расстояний", "Говорить, как звёзды рождаются, светят и умирают", "Описывать нашу галактику и доказательства расширения Вселенной"],
      },
      {
        en: `## The Solar system

The Sun holds $99{.}8$ per cent of the mass of the system, and everything else moves round it under the law of universal gravitation.

| Group | Members |
|---|---|
| inner planets, rocky | Mercury, Venus, the Earth, Mars |
| outer planets, giants | Jupiter, Saturn, Uranus, Neptune |
| smaller bodies | moons, asteroids between Mars and Jupiter, comets, dwarf planets such as Pluto |

Distances in space are measured in units chosen to fit. The **astronomical unit** is the distance from the Earth to the Sun, $1{.}5 \\cdot 10^{11}$ m. The **light year** is the distance light covers in a year, about $9{.}5 \\cdot 10^{15}$ m.

**Example 1.** Light takes $8$ minutes from the Sun, about $5$ hours to Neptune and $4{.}2$ years from the nearest star, Proxima Centauri. So the night sky shows us the past.
**Example 2.** Jupiter is $5$ astronomical units from the Sun, so by the formula $v = \\sqrt{GM/r}$ it moves more slowly than the Earth and takes about $12$ years for one circuit.

## The life of a star

A star is a ball of gas held together by its own gravity and heated by fusion in its centre, where hydrogen is turned into helium. The two act against each other: gravity pulls in, the pressure of the hot gas pushes out, and while they balance the star is steady.

| Stage | What happens |
|---|---|
| birth | a cloud of gas and dust contracts under gravity until fusion begins |
| main life | hydrogen burns to helium for millions or billions of years |
| swelling | the hydrogen in the centre runs out; the star becomes a red giant |
| death of a light star | it throws off its outer layers and leaves a white dwarf |
| death of a heavy star | it explodes as a supernova and leaves a neutron star or a black hole |

The Sun is an ordinary star about $4{.}6$ billion years old, with roughly as long again to go. The heavy elements of the Earth, and of our own bodies, were made inside stars and spread by supernovae, so the iron in our blood was once inside a star.

**Example 3.** A star much heavier than the Sun burns its hydrogen far faster and lives only millions of years, while a small red star can outlive the present age of the Universe.

## Galaxies and the Big Bang

The Sun is one of a few hundred billion stars in our galaxy, the **Milky Way**, a flattened spiral about $100000$ light years across. We see it edgewise as a band of light in the night sky. Galaxies gather in groups, and the nearest large neighbour of ours is Andromeda, about $2{.}5$ million light years away.

In 1929 Hubble found that the light of distant galaxies is shifted towards the red end of the spectrum, and the farther the galaxy the greater the shift. A red shift means the source is moving away, so almost all galaxies are receding from us, and the more distant ones faster. The Universe is expanding, and no galaxy is at the centre: space itself is growing, as the distances between raisins grow in a rising loaf.

Running the expansion backwards leads to a hot, dense beginning about $13{.}8$ billion years ago, which is called the **Big Bang**. Two pieces of evidence support it: the proportion of helium in the Universe, which matches what a hot beginning would make, and the faint microwave radiation that reaches us from every direction, left over from that early heat.

**Example 4.** The band of the Milky Way is thickest towards the constellation Sagittarius, because that is the direction of the centre of our galaxy.
**Example 5.** The microwave background was found by chance in 1965 as a hiss that no aerial could get rid of.

### Exercises

1. What share of the mass of the Solar system is in the Sun?
2. List the planets in order from the Sun.
3. What are the astronomical unit and the light year?
4. What keeps a star steady during its main life?
5. What is the fuel of a star, and what is made from it?
6. How does a light star end, and how does a heavy one?
7. What is our galaxy called, and how large is it?
8. What does the red shift of distant galaxies show, and what does it lead to?

### Answers

1. About $99{.}8$ per cent.
2. Mercury, Venus, the Earth, Mars, Jupiter, Saturn, Uranus, Neptune.
3. The distance from the Earth to the Sun, and the distance light covers in a year.
4. Gravity pulling in balances the pressure of the hot gas pushing out.
5. Hydrogen; it is turned into helium.
6. A light star leaves a white dwarf; a heavy one explodes as a supernova and leaves a neutron star or a black hole.
7. The Milky Way, about $100000$ light years across.
8. That the galaxies are moving away and the Universe is expanding, which leads back to the Big Bang about $13{.}8$ billion years ago.`,
        hy: `## Արեգակնային համակարգը

Արեգակը պահում է համակարգի զանգվածի $99{,}8$ տոկոսը, և մնացած ամեն ինչ շարժվում է նրա շուրջը տիեզերական ձգողության օրենքով։

| Խումբ | Անդամներ |
|---|---|
| ներքին մոլորակներ՝ ժայռային | Մերկուրի, Վեներա, Երկիր, Մարս |
| արտաքին մոլորակներ՝ հսկաներ | Յուպիտեր, Սատուրն, Ուրան, Նեպտուն |
| ավելի փոքր մարմիններ | արբանյակներ, աստերոիդներ Մարսի և Յուպիտերի միջև, գիսաստղեր, թզուկ մոլորակներ՝ ինչպես Պլուտոնը |

Տարածության հեռավորությունները չափվում են հարմարեցված միավորներով։ **Աստղագիտական միավորը** Երկրից Արեգակ հեռավորությունն է՝ $1{,}5 \\cdot 10^{11}$ մ։ **Լուսատարին** այն հեռավորությունն է, որը լույսն անցնում է մեկ տարում՝ մոտ $9{,}5 \\cdot 10^{15}$ մ։

**Օրինակ 1։** Լույսն Արեգակից գալիս է $8$ րոպեում, Նեպտուն՝ մոտ $5$ ժամում, իսկ ամենամոտ աստղից՝ Պրոքսիմա Կենտավրոսից՝ $4{,}2$ տարում։ Ուրեմն գիշերային երկինքը մեզ ցույց է տալիս անցյալը։
**Օրինակ 2։** Յուպիտերն Արեգակից $5$ աստղագիտական միավոր հեռու է, ուստի $v = \\sqrt{GM/r}$ բանաձևով այն շարժվում է Երկրից ավելի դանդաղ և մեկ պտույտի համար պետք է մոտ $12$ տարի։

## Աստղի կյանքը

Աստղը գազի գունդ է, որը միասին է պահվում իր սեփական ձգողությամբ և տաքացվում կենտրոնի սինթեզով, որտեղ ջրածինը դառնում է հելիում։ Երկուսը գործում են միմյանց դեմ. ձգողությունը քաշում է ներս, տաք գազի ճնշումը հրում է դուրս, և քանի դեռ նրանք հավասարակշռված են, աստղը կայուն է։

| Փուլ | Ինչ է կատարվում |
|---|---|
| ծնունդ | գազի և փոշու ամպը ձգողությամբ սեղմվում է, մինչև սկսվի սինթեզը |
| հիմնական կյանք | ջրածինն այրվում է հելիումի՝ միլիոնավոր կամ միլիարդավոր տարիներ |
| ուռչում | կենտրոնի ջրածինը սպառվում է, աստղը դառնում է կարմիր հսկա |
| թեթև աստղի մահ | այն դուրս է նետում արտաքին շերտերը և թողնում սպիտակ թզուկ |
| ծանր աստղի մահ | այն պայթում է որպես գերնոր և թողնում նեյտրոնային աստղ կամ սև խոռոչ |

Արեգակը սովորական աստղ է՝ մոտ $4{,}6$ միլիարդ տարեկան, և նրան մնում է մոտավորապես նույնքան։ Երկրի և մեր սեփական մարմինների ծանր տարրերը ստեղծվել են աստղերի ներսում և տարածվել գերնորերով, ուստի մեր արյան երկաթը մի ժամանակ աստղի ներսում էր։

**Օրինակ 3։** Արեգակից շատ ավելի ծանր աստղն իր ջրածինն այրում է շատ ավելի արագ և ապրում ընդամենը միլիոնավոր տարիներ, մինչդեռ փոքր կարմիր աստղը կարող է ավելի երկար ապրել, քան Տիեզերքի այսօրվա տարիքն է։

## Գալակտիկաներ և Մեծ պայթյուն

Արեգակը մեր գալակտիկայի՝ **Ծիր Կաթինի**, մի քանի հարյուր միլիարդ աստղերից մեկն է՝ մոտ $100000$ լուսատարի տարածությամբ տափակած պարուրաձև գալակտիկա։ Մենք նրան տեսնում ենք կողքից՝ որպես լույսի շերտ գիշերային երկնքում։ Գալակտիկաները հավաքվում են խմբերով, և մեր ամենամոտ մեծ հարևանն Անդրոմեդան է՝ մոտ $2{,}5$ միլիոն լուսատարի հեռու։

1929 թվականին Հաբլը գտավ, որ հեռավոր գալակտիկաների լույսը շեղված է սպեկտրի կարմիր ծայրի կողմը, և որքան հեռու է գալակտիկան, այնքան մեծ է շեղումը։ Կարմիր շեղումը նշանակում է, որ աղբյուրը հեռանում է, ուստի գրեթե բոլոր գալակտիկաները հեռանում են մեզանից, իսկ ավելի հեռավորները՝ ավելի արագ։ Տիեզերքն ընդարձակվում է, և ոչ մի գալակտիկա կենտրոնում չէ. հենց տարածությունն է աճում, ինչպես բարձրացող խմորում աճում են չամիչների միջև հեռավորությունները։

Ընդարձակումը հետ պտտելը տանում է տաք, խիտ սկզբին՝ մոտ $13{,}8$ միլիարդ տարի առաջ, ինչը կոչվում է **Մեծ պայթյուն**։ Նրան աջակցում են երկու վկայություն՝ Տիեզերքում հելիումի բաժինը, որը համապատասխանում է այն, ինչ կստեղծեր տաք սկիզբը, և թույլ միկրոալիքային ճառագայթումը, որը մեզ հասնում է ամեն ուղղությունից՝ մնացած այն վաղ ջերմությունից։

**Օրինակ 4։** Ծիր Կաթինի շերտն ամենահաստն է Աղեղնավորի համաստեղության կողմը, որովհետև դա մեր գալակտիկայի կենտրոնի ուղղությունն է։
**Օրինակ 5։** Միկրոալիքային ֆոնը պատահաբար գտնվեց 1965 թվականին՝ որպես շշուկ, որից ոչ մի ալեհավաք չէր կարողանում ազատվել։

### Վարժություններ

1. Արեգակնային համակարգի զանգվածի ի՞նչ բաժինն է Արեգակում։
2. Թվարկեք մոլորակներն Արեգակից հերթականությամբ։
3. Ի՞նչ են աստղագիտական միավորը և լուսատարին։
4. Ի՞նչն է աստղը պահում կայուն նրա հիմնական կյանքի ընթացքում։
5. Ի՞նչ է աստղի վառելիքը, և ի՞նչ է նրանից ստացվում։
6. Ինչպե՞ս է ավարտվում թեթև աստղը և ինչպե՞ս՝ ծանրը։
7. Ինչպե՞ս է կոչվում մեր գալակտիկան, և ի՞նչ չափ ունի։
8. Ի՞նչ է ցույց տալիս հեռավոր գալակտիկաների կարմիր շեղումը, և ինչի՞ն է այն տանում։

### Պատասխաններ

1. Մոտ $99{,}8$ տոկոսը։
2. Մերկուրի, Վեներա, Երկիր, Մարս, Յուպիտեր, Սատուրն, Ուրան, Նեպտուն։
3. Երկրից Արեգակ հեռավորությունը և այն հեռավորությունը, որը լույսն անցնում է մեկ տարում։
4. Ներս քաշող ձգողությունը հավասարակշռում է դուրս հրող տաք գազի ճնշումը։
5. Ջրածինը. նրանից ստացվում է հելիում։
6. Թեթև աստղը թողնում է սպիտակ թզուկ, ծանրը պայթում է որպես գերնոր և թողնում նեյտրոնային աստղ կամ սև խոռոչ։
7. Ծիր Կաթին՝ մոտ $100000$ լուսատարի տարածությամբ։
8. Որ գալակտիկաները հեռանում են և Տիեզերքն ընդարձակվում է, ինչը տանում է մոտ $13{,}8$ միլիարդ տարի առաջ Մեծ պայթյունին։`,
        ru: `## Солнечная система

Солнце удерживает $99{,}8$ процента массы системы, и всё остальное движется вокруг него по закону всемирного тяготения.

| Группа | Члены |
|---|---|
| внутренние планеты, каменистые | Меркурий, Венера, Земля, Марс |
| внешние планеты, гиганты | Юпитер, Сатурн, Уран, Нептун |
| меньшие тела | спутники, астероиды между Марсом и Юпитером, кометы, карликовые планеты вроде Плутона |

Расстояния в космосе измеряют в подходящих единицах. **Астрономическая единица** — это расстояние от Земли до Солнца, $1{,}5 \\cdot 10^{11}$ м. **Световой год** — расстояние, которое свет проходит за год, около $9{,}5 \\cdot 10^{15}$ м.

**Пример 1.** Свет идёт от Солнца $8$ минут, до Нептуна около $5$ часов, а от ближайшей звезды, Проксимы Центавра, $4{,}2$ года. Значит, ночное небо показывает нам прошлое.
**Пример 2.** Юпитер находится в $5$ астрономических единицах от Солнца, поэтому по формуле $v = \\sqrt{GM/r}$ он движется медленнее Земли и совершает один оборот примерно за $12$ лет.

## Жизнь звезды

Звезда — это шар газа, который держится своим собственным тяготением и греется синтезом в центре, где водород превращается в гелий. Эти два начала действуют друг против друга: тяготение тянет внутрь, давление горячего газа толкает наружу, и пока они уравновешены, звезда устойчива.

| Стадия | Что происходит |
|---|---|
| рождение | облако газа и пыли сжимается тяготением, пока не начнётся синтез |
| основная жизнь | водород горит в гелий миллионы или миллиарды лет |
| раздувание | водород в центре кончается, звезда становится красным гигантом |
| смерть лёгкой звезды | она сбрасывает внешние слои и оставляет белый карлик |
| смерть тяжёлой звезды | она взрывается как сверхновая и оставляет нейтронную звезду или чёрную дыру |

Солнце — обычная звезда возрастом около $4{,}6$ миллиарда лет, и ей осталось примерно столько же. Тяжёлые элементы Земли и наших собственных тел были созданы внутри звёзд и разнесены сверхновыми, так что железо в нашей крови когда-то было внутри звезды.

**Пример 3.** Звезда намного тяжелее Солнца сжигает свой водород гораздо быстрее и живёт лишь миллионы лет, а маленькая красная звезда может прожить дольше нынешнего возраста Вселенной.

## Галактики и Большой взрыв

Солнце — одна из нескольких сотен миллиардов звёзд нашей галактики, **Млечного Пути**, сплюснутой спирали поперечником около $100000$ световых лет. Мы видим её с ребра как полосу света на ночном небе. Галактики собираются в группы, и наш ближайший большой сосед — Андромеда, примерно в $2{,}5$ миллиона световых лет.

В 1929 году Хаббл обнаружил, что свет далёких галактик смещён к красному концу спектра, и чем дальше галактика, тем больше смещение. Красное смещение означает, что источник удаляется, значит почти все галактики уходят от нас, а более далёкие — быстрее. Вселенная расширяется, и ни одна галактика не находится в центре: растёт само пространство, как растут расстояния между изюминками в поднимающемся тесте.

Если прокрутить расширение назад, оно ведёт к горячему плотному началу около $13{,}8$ миллиарда лет назад, и это называют **Большим взрывом**. Его подтверждают два свидетельства: доля гелия во Вселенной, совпадающая с тем, что создало бы горячее начало, и слабое микроволновое излучение, приходящее к нам со всех направлений как остаток того раннего жара.

**Пример 4.** Полоса Млечного Пути всего толще в стороне созвездия Стрельца, потому что это направление на центр нашей галактики.
**Пример 5.** Микроволновый фон был найден случайно в 1965 году как шипение, от которого не удавалось избавиться ни одной антенне.

### Упражнения

1. Какая доля массы Солнечной системы находится в Солнце?
2. Перечислите планеты по порядку от Солнца.
3. Что такое астрономическая единица и световой год?
4. Что удерживает звезду устойчивой в её основной жизни?
5. Что служит топливом звезды и что из него получается?
6. Как кончает лёгкая звезда и как тяжёлая?
7. Как называется наша галактика и каков её размер?
8. Что показывает красное смещение далёких галактик и к чему оно ведёт?

### Ответы

1. Около $99{,}8$ процента.
2. Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран, Нептун.
3. Расстояние от Земли до Солнца и расстояние, проходимое светом за год.
4. Тяготение, тянущее внутрь, уравновешивает давление горячего газа, толкающее наружу.
5. Водород; из него получается гелий.
6. Лёгкая звезда оставляет белый карлик; тяжёлая взрывается как сверхновая и оставляет нейтронную звезду или чёрную дыру.
7. Млечный Путь, поперечником около $100000$ световых лет.
8. Что галактики удаляются и Вселенная расширяется, а это ведёт к Большому взрыву около $13{,}8$ миллиарда лет назад.`,
      },
      [
        q(t("The share of the mass of the Solar system held by the Sun is about", "Արեգակնային համակարգի զանգվածի Արեգակին պատկանող բաժինը մոտ", "Доля массы Солнечной системы, приходящаяся на Солнце, около"), [
          t("99.8 per cent", "99,8 տոկոս", "99,8 процента"),
          t("50 per cent", "50 տոկոս", "50 процентов"),
          t("10 per cent", "10 տոկոս", "10 процентов"),
        ], 0),
        q(t("A light year is", "Լուսատարին", "Световой год — это"), [
          t("a unit of time", "ժամանակի միավոր է", "единица времени"),
          t("a unit of distance", "հեռավորության միավոր է", "единица расстояния"),
          t("a unit of brightness", "պայծառության միավոր է", "единица яркости"),
        ], 1),
        q(t("The energy of a star comes from", "Աստղի էներգիան գալիս է", "Энергия звезды берётся от"), [
          t("the fission of heavy nuclei", "ծանր միջուկների տրոհումից", "деления тяжёлых ядер"),
          t("chemical burning", "քիմիական այրումից", "химического горения"),
          t("the fusion of hydrogen into helium", "ջրածնի սինթեզից հելիումի", "синтеза водорода в гелий"),
        ], 2),
        q(t("A heavy star ends its life as", "Ծանր աստղն ավարտում է իր կյանքն որպես", "Тяжёлая звезда кончает жизнь как"), [
          t("a supernova", "գերնոր", "сверхновая"),
          t("a white dwarf only", "միայն սպիտակ թզուկ", "только белый карлик"),
          t("a comet", "գիսաստղ", "комета"),
        ], 0),
        q(t("Our galaxy is called", "Մեր գալակտիկան կոչվում է", "Наша галактика называется"), [
          t("Andromeda", "Անդրոմեդա", "Андромеда"),
          t("the Milky Way", "Ծիր Կաթին", "Млечный Путь"),
          t("Proxima Centauri", "Պրոքսիմա Կենտավրոս", "Проксима Центавра"),
        ], 1),
        q(t("The red shift of distant galaxies shows that", "Հեռավոր գալակտիկաների կարմիր շեղումը ցույց է տալիս, որ", "Красное смещение далёких галактик показывает, что"), [
          t("they are standing still", "նրանք կանգնած են", "они стоят на месте"),
          t("they are coming towards us", "նրանք մոտենում են մեզ", "они приближаются к нам"),
          t("the Universe is expanding", "Տիեզերքն ընդարձակվում է", "Вселенная расширяется"),
        ], 2),
      ],
    ),
  ],
};
