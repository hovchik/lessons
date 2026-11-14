import { th } from "../kit";

/** Chemistry 10: the reasons behind the rules of organic chemistry. */
export const chemistry10 = {
  "structure-theory": th(
    `### Why carbon forms four bonds

In its ground state carbon has the configuration 1s² 2s² 2p², with only two unpaired electrons, so you might expect it to form two bonds. But when one 2s electron moves up into the empty 2p orbital, carbon has **four unpaired electrons** and can form four bonds. Two extra bonds release far more energy than the small cost of moving the electron, so the trade pays off. The four orbitals then mix into four equal **sp³ hybrid orbitals** that point to the corners of a tetrahedron. That is why all four C–H bonds in methane are identical and the angle between them is 109.5°.

### Why carbon, and not silicon, builds chains

| Bond | Energy, kJ/mol |
|---|---|
| C–C | 348 |
| C–H | 413 |
| C–O | 358 |
| Si–Si | 226 |
| Si–O | 452 |

A C–C bond is almost as strong as C–H and C–O bonds, so a carbon chain survives in air and water. For silicon, Si–Si bonds are much weaker than Si–O bonds, so silicon chains readily turn into SiO₂ and silicates. That is why life is built on carbon and rocks on silicon.

### How fast the number of isomers grows

| Alkane | Structural isomers |
|---|---|
| C₄H₁₀ | 2 |
| C₅H₁₂ | 3 |
| C₆H₁₄ | 5 |
| C₈H₁₈ | 18 |
| C₁₀H₂₂ | 75 |
| C₂₀H₄₂ | 366 319 |

Each new carbon atom can be attached in many new places, so the number of possible structures grows explosively. This is why a handful of elements gives millions of organic compounds.

### Reading rings and multiple bonds from a formula

For a hydrocarbon CₓHᵧ the **degree of unsaturation** is

D = (2x + 2 − y) / 2.

Each ring or double bond adds 1, each triple bond adds 2. For C₆H₆, D = (14 − 6) / 2 = 4: one ring and three double bonds (or the aromatic ring that is equivalent to them). For C₄H₁₀, D = 0: an open chain with only single bonds. The rule works because an open saturated chain, CₓH₂ₓ₊₂, holds the largest possible number of hydrogens, and every ring or π bond takes away two of them.`,
    `### Ինչու է ածխածինն առաջացնում չորս կապ

Հիմնական վիճակում ածխածնի էլեկտրոնային բանաձևն է 1s² 2s² 2p², և նա ունի ընդամենը երկու չզույգված էլեկտրոն, ուստի կարելի էր սպասել, որ կառաջացնի երկու կապ։ Սակայն երբ 2s էլեկտրոններից մեկն անցնում է ազատ 2p օրբիտալ, ածխածինն ունենում է **չորս չզույգված էլեկտրոն** և կարող է չորս կապ առաջացնել։ Երկու լրացուցիչ կապն անջատում է շատ ավելի մեծ էներգիա, քան ծախսվում է էլեկտրոնի տեղափոխման վրա, ուստի «գործարքը» շահավետ է։ Այնուհետև չորս օրբիտալները խառնվում են և դառնում չորս միատեսակ **sp³ հիբրիդային օրբիտալ**, որոնք ուղղված են քառանիստի գագաթներին։ Ահա թե ինչու են մեթանի չորս C–H կապերը միանման, իսկ դրանց միջև անկյունը 109,5° է։

### Ինչու են շղթաներ կառուցում ածխածնի, այլ ոչ թե սիլիցիումի ատոմները

| Կապ | Էներգիա, կՋ/մոլ |
|---|---|
| C–C | 348 |
| C–H | 413 |
| C–O | 358 |
| Si–Si | 226 |
| Si–O | 452 |

C–C կապը գրեթե նույնքան ամուր է, որքան C–H և C–O կապերը, ուստի ածխածնային շղթան պահպանվում է օդում և ջրում։ Սիլիցիումի Si–Si կապերը շատ ավելի թույլ են, քան Si–O կապերը, և սիլիցիումային շղթաները հեշտությամբ վերածվում են SiO₂-ի ու սիլիկատների։ Ահա թե ինչու է կյանքը կառուցված ածխածնի, իսկ ապարները՝ սիլիցիումի հիմքի վրա։

### Որքան արագ է աճում իզոմերների թիվը

| Ալկան | Կառուցվածքային իզոմերներ |
|---|---|
| C₄H₁₀ | 2 |
| C₅H₁₂ | 3 |
| C₆H₁₄ | 5 |
| C₈H₁₈ | 18 |
| C₁₀H₂₂ | 75 |
| C₂₀H₄₂ | 366 319 |

Ամեն նոր ածխածնի ատոմ կարող է միանալ շատ նոր տեղերում, ուստի հնարավոր կառուցվածքների թիվը պայթյունավոր աճում է։ Ահա թե ինչու են մի քանի տարրից առաջանում միլիոնավոր օրգանական միացություններ։

### Ինչպես բանաձևից «կարդալ» օղակներն ու բազմակի կապերը

CₓHᵧ ածխաջրածնի **չհագեցվածության աստիճանն** է

D = (2x + 2 − y) / 2։

Յուրաքանչյուր օղակ կամ կրկնակի կապ ավելացնում է 1, իսկ եռակի կապը՝ 2։ C₆H₆-ի համար D = (14 − 6) / 2 = 4․ մեկ օղակ և երեք կրկնակի կապ (կամ դրանց համարժեք արոմատիկ օղակ)։ C₄H₁₀-ի համար D = 0․ բաց շղթա՝ միայն հասարակ կապերով։ Կանոնը ճիշտ է, քանի որ բաց հագեցած շղթան՝ CₓH₂ₓ₊₂, պարունակում է ջրածնի ատոմների առավելագույն թիվը, իսկ ամեն օղակ կամ π կապ նրանից հանում է երկու ատոմ։`,
    `### Почему углерод образует четыре связи

В основном состоянии электронная формула углерода 1s² 2s² 2p², неспаренных электронов только два — можно было бы ждать двух связей. Но когда один 2s-электрон переходит на свободную 2p-орбиталь, у углерода становится **четыре неспаренных электрона**, и он образует четыре связи. Две лишние связи дают гораздо больше энергии, чем стоит переход электрона, поэтому «сделка» выгодна. Затем четыре орбитали смешиваются в четыре одинаковые **sp³-гибридные орбитали**, направленные к вершинам тетраэдра. Поэтому все четыре связи C–H в метане одинаковы, а угол между ними 109,5°.

### Почему цепи строит углерод, а не кремний

| Связь | Энергия, кДж/моль |
|---|---|
| C–C | 348 |
| C–H | 413 |
| C–O | 358 |
| Si–Si | 226 |
| Si–O | 452 |

Связь C–C почти так же прочна, как C–H и C–O, поэтому углеродная цепь сохраняется на воздухе и в воде. У кремния связи Si–Si гораздо слабее, чем Si–O, и кремниевые цепи легко превращаются в SiO₂ и силикаты. Поэтому жизнь построена на углероде, а горные породы — на кремнии.

### Как быстро растёт число изомеров

| Алкан | Структурных изомеров |
|---|---|
| C₄H₁₀ | 2 |
| C₅H₁₂ | 3 |
| C₆H₁₄ | 5 |
| C₈H₁₈ | 18 |
| C₁₀H₂₂ | 75 |
| C₂₀H₄₂ | 366 319 |

Каждый новый атом углерода можно присоединить во многих новых местах, поэтому число возможных структур растёт взрывообразно. Вот почему из горстки элементов получаются миллионы органических соединений.

### Как «прочитать» кольца и кратные связи по формуле

Для углеводорода CₓHᵧ **степень ненасыщенности** равна

D = (2x + 2 − y) / 2.

Каждое кольцо или двойная связь добавляет 1, тройная связь — 2. Для C₆H₆ D = (14 − 6) / 2 = 4: одно кольцо и три двойные связи (или равноценное им ароматическое кольцо). Для C₄H₁₀ D = 0: открытая цепь только с одинарными связями. Правило работает, потому что открытая насыщенная цепь CₓH₂ₓ₊₂ содержит наибольшее возможное число атомов водорода, а каждое кольцо или π-связь отнимает два из них.`,
  ),
  alkanes: th(
    `### How chlorine replaces hydrogen: a chain reaction

Methane and chlorine can be kept together in the dark for a long time, but in sunlight the mixture can react explosively. Light starts a **free-radical chain**:

1. **Initiation.** A photon splits a chlorine molecule into two atoms, each with an unpaired electron (radicals): Cl₂ → 2Cl·
2. **Propagation.** Cl· + CH₄ → HCl + ·CH₃, then ·CH₃ + Cl₂ → CH₃Cl + Cl·. The chlorine atom comes back and starts the cycle again.
3. **Termination.** Two radicals meet: Cl· + Cl· → Cl₂, or ·CH₃ + Cl· → CH₃Cl.

One photon can make thousands of CH₃Cl molecules before its chain stops. This is why a little light is enough, and why the reaction is hard to stop after one step: CH₃Cl, CH₂Cl₂, CHCl₃ and CCl₄ form as a mixture.

### Why alkanes are "little affinity" compounds

The old name *paraffin* means "little affinity". All the bonds in an alkane are σ bonds, and C–C and C–H are almost non-polar (the electronegativities of C and H are 2.5 and 2.1). There is no electron-rich double bond for an attacking particle to grab, and no charged end to pull on. To react, a strong bond must be broken, and that needs light or high temperature.

### Boiling points: length and shape

Alkane molecules attract each other only by weak dispersion forces, which grow with the area of contact.

- A longer chain has a larger surface and a higher boiling point: methane −162 °C, butane −0.5 °C, octane 126 °C.
- Branching makes a molecule compact, like a ball, with less contact: pentane boils at 36 °C, 2-methylbutane at 28 °C, 2,2-dimethylpropane at 9.5 °C, although all three are C₅H₁₂.

### Not all hydrogens are equal

Propane, CH₃–CH₂–CH₃, has six hydrogens at the ends and two in the middle. If chlorine chose at random, 1-chloropropane would form three times as often as 2-chloropropane. In fact, at room temperature the two form in roughly equal amounts: a hydrogen on the middle (secondary) carbon is replaced three to four times more easily, because the radical formed there is more stable. A hydrogen on a tertiary carbon, bonded to three other carbons, is replaced most easily of all.`,
    `### Ինչպես է քլորը տեղակալում ջրածնին․ շղթայական ռեակցիա

Մեթանը և քլորը մթության մեջ կարող են երկար մնալ միասին, բայց արևի լույսի տակ խառնուրդը կարող է փոխազդել պայթյունով։ Լույսը սկիզբ է դնում **ռադիկալային շղթայի**․

1. **Հարուցում։** Ֆոտոնը քլորի մոլեկուլը տրոհում է երկու ատոմի, որոնցից յուրաքանչյուրն ունի մեկ չզույգված էլեկտրոն (ռադիկալներ)․ Cl₂ → 2Cl·
2. **Զարգացում։** Cl· + CH₄ → HCl + ·CH₃, այնուհետև ·CH₃ + Cl₂ → CH₃Cl + Cl·։ Քլորի ատոմը վերադառնում է և նորից սկսում ցիկլը։
3. **Ընդհատում։** Երկու ռադիկալ հանդիպում են․ Cl· + Cl· → Cl₂ կամ ·CH₃ + Cl· → CH₃Cl։

Մեկ ֆոտոնը կարող է առաջացնել CH₃Cl-ի հազարավոր մոլեկուլներ, մինչև շղթան ընդհատվի։ Ահա թե ինչու է բավական քիչ լույսը, և ինչու է դժվար ռեակցիան կանգնեցնել առաջին փուլում․ առաջանում է CH₃Cl, CH₂Cl₂, CHCl₃ և CCl₄ նյութերի խառնուրդ։

### Ինչու են ալկանները «քիչ խնամակցություն» ունեցող նյութեր

*Պարաֆին* հին անվանումը նշանակում է «քիչ խնամակցություն»։ Ալկանի բոլոր կապերը σ կապեր են, իսկ C–C և C–H կապերը գրեթե ոչ բևեռային են (C-ի և H-ի էլեկտրաբացասականություններն են 2,5 և 2,1)։ Չկա էլեկտրոններով հարուստ կրկնակի կապ, որը կարող էր «բռնել» գրոհող մասնիկը, և չկա լիցքավորված ծայր, որը կարելի էր քաշել։ Փոխազդելու համար պետք է խզել ամուր կապ, իսկ դրա համար պետք են լույս կամ բարձր ջերմաստիճան։

### Եռման ջերմաստիճան․ երկարություն և ձև

Ալկանների մոլեկուլներն իրար ձգում են միայն թույլ դիսպերսիոն ուժերով, որոնք աճում են հպման մակերեսին զուգընթաց։

- Ավելի երկար շղթան ունի ավելի մեծ մակերես և ավելի բարձր եռման ջերմաստիճան․ մեթան՝ −162 °C, բութան՝ −0,5 °C, օկտան՝ 126 °C։
- Ճյուղավորումը մոլեկուլը դարձնում է կոմպակտ, գնդաձև, և հպումը փոքրանում է․ պենտանը եռում է 36 °C-ում, 2-մեթիլբութանը՝ 28 °C-ում, 2,2-դիմեթիլպրոպանը՝ 9,5 °C-ում, թեև երեքն էլ C₅H₁₂ են։

### Ոչ բոլոր ջրածիններն են հավասար

Պրոպանն՝ CH₃–CH₂–CH₃, ունի վեց ջրածին ծայրերում և երկուսը՝ մեջտեղում։ Եթե քլորը ընտրեր պատահականորեն, 1-քլորպրոպանը կառաջանար երեք անգամ ավելի հաճախ, քան 2-քլորպրոպանը։ Իրականում սենյակային ջերմաստիճանում երկուսն առաջանում են մոտավորապես հավասար քանակներով․ միջին (երկրորդային) ածխածնի ջրածինը տեղակալվում է երեքից չորս անգամ ավելի հեշտ, քանի որ այնտեղ առաջացող ռադիկալն ավելի կայուն է։ Ամենահեշտը տեղակալվում է երրորդային ածխածնի ջրածինը, որը կապված է երեք այլ ածխածինների հետ։`,
    `### Как хлор замещает водород: цепная реакция

Метан и хлор можно долго хранить вместе в темноте, но на солнечном свету смесь может прореагировать со взрывом. Свет запускает **свободнорадикальную цепь**:

1. **Зарождение.** Фотон расщепляет молекулу хлора на два атома, у каждого — неспаренный электрон (радикалы): Cl₂ → 2Cl·
2. **Развитие.** Cl· + CH₄ → HCl + ·CH₃, затем ·CH₃ + Cl₂ → CH₃Cl + Cl·. Атом хлора возвращается и снова запускает цикл.
3. **Обрыв.** Встречаются два радикала: Cl· + Cl· → Cl₂ или ·CH₃ + Cl· → CH₃Cl.

Один фотон может дать тысячи молекул CH₃Cl, прежде чем его цепь оборвётся. Поэтому хватает немного света и поэтому реакцию трудно остановить на первой стадии: образуется смесь CH₃Cl, CH₂Cl₂, CHCl₃ и CCl₄.

### Почему алканы — «малосродные» вещества

Старое название *парафин* означает «малое сродство». Все связи в алкане — σ-связи, а C–C и C–H почти неполярны (электроотрицательности C и H — 2,5 и 2,1). Нет богатой электронами двойной связи, за которую могла бы «ухватиться» атакующая частица, и нет заряженного конца, за который можно потянуть. Чтобы реагировать, нужно разорвать прочную связь, а для этого нужны свет или высокая температура.

### Температуры кипения: длина и форма

Молекулы алканов притягиваются друг к другу только слабыми дисперсионными силами, которые растут с площадью контакта.

- Чем длиннее цепь, тем больше поверхность и выше температура кипения: метан −162 °C, бутан −0,5 °C, октан 126 °C.
- Разветвление делает молекулу компактной, похожей на шар, и контакт уменьшается: пентан кипит при 36 °C, 2-метилбутан — при 28 °C, 2,2-диметилпропан — при 9,5 °C, хотя все три — C₅H₁₂.

### Не все атомы водорода равны

В пропане CH₃–CH₂–CH₃ шесть атомов водорода на концах и два в середине. Если бы хлор выбирал случайно, 1-хлорпропан получался бы втрое чаще, чем 2-хлорпропан. На деле при комнатной температуре они образуются примерно поровну: водород у среднего (вторичного) атома углерода замещается в три-четыре раза легче, потому что образующийся там радикал устойчивее. Легче всего замещается водород у третичного атома углерода, связанного с тремя другими атомами углерода.`,
  ),
  alkenes: th(
    `### Two kinds of bond inside one double bond

The carbon atoms of ethene are **sp² hybridised**: three hybrid orbitals lie in one plane at 120°, and one p orbital stands upright. Hybrid orbitals overlap end to end and form σ bonds. The two upright p orbitals overlap side by side, above and below the plane, and form the **π bond**.

| Bond | Length, pm | Energy, kJ/mol |
|---|---|---|
| C–C | 154 | 348 |
| C=C | 134 | 614 |

A double bond is not twice as strong as a single one: the π part adds only about 266 kJ/mol. Its electrons lie away from the line joining the nuclei, where an attacking particle can easily reach them. This is the source of alkene reactivity.

### How bromine adds, step by step

1. As a Br₂ molecule comes close to the π cloud, it becomes polarised: Brᵟ⁺–Brᵟ⁻.
2. The π electrons attack the positive bromine atom; the Br–Br bond breaks, Br⁻ leaves, and a positively charged intermediate forms.
3. Br⁻ joins the positive carbon.

The attacking particle is looking for electrons, so this is called **electrophilic addition**. Evidence for the two steps: if the reaction is carried out in a solution of NaCl, some CH₂Br–CH₂Cl also forms. A chloride ion has attacked the intermediate, so the two bromine atoms do not arrive at the same moment.

### Markovnikov's rule and why it works

When HBr adds to propene, two products are possible, but almost only one forms:

CH₃–CH=CH₂ + HBr → CH₃–CHBr–CH₃

V. Markovnikov (1869): hydrogen goes to the carbon that already has more hydrogens. The reason is the intermediate. H⁺ adds first, and a positive charge appears on the other carbon. A charge on the middle carbon is supported by two neighbouring carbon groups that push electrons towards it; a charge on the end carbon has only one such neighbour. The more stable intermediate forms faster and decides the product.

### Why there are two but-2-enes

A π bond needs its two p orbitals to stay parallel, so groups cannot rotate around a double bond. In CH₃–CH=CH–CH₃ the two CH₃ groups can be on the same side (**cis**-but-2-ene, boils at 4 °C) or on opposite sides (**trans**-but-2-ene, boils at 1 °C). They are different substances with the same structural formula: this is **cis–trans (geometric) isomerism**. Around a single bond rotation is free, so butane has no such isomers.`,
    `### Երկու տեսակի կապ մեկ կրկնակի կապի ներսում

Էթենի ածխածնի ատոմներն **sp² հիբրիդացված** են․ երեք հիբրիդային օրբիտալ դասավորված են մեկ հարթության մեջ՝ 120° անկյան տակ, իսկ մեկ p օրբիտալ ուղղահայաց է հարթությանը։ Հիբրիդային օրբիտալները ծածկվում են ծայրերով և առաջացնում σ կապեր։ Երկու ուղղահայաց p օրբիտալները ծածկվում են կողքերով՝ հարթությունից վեր և վար, և առաջացնում **π կապը**։

| Կապ | Երկարություն, պմ | Էներգիա, կՋ/մոլ |
|---|---|---|
| C–C | 154 | 348 |
| C=C | 134 | 614 |

Կրկնակի կապը երկու անգամ ամուր չէ հասարակից․ π մասը ավելացնում է ընդամենը մոտ 266 կՋ/մոլ։ Նրա էլեկտրոնները գտնվում են միջուկները միացնող գծից դուրս, որտեղ գրոհող մասնիկը հեշտությամբ հասնում է նրանց։ Սա է ալկենների ռեակցունակության աղբյուրը։

### Ինչպես է բրոմը միանում՝ քայլ առ քայլ

1. Երբ Br₂ մոլեկուլը մոտենում է π ամպին, այն բևեռացվում է․ Brᵟ⁺–Brᵟ⁻։
2. π էլեկտրոնները գրոհում են դրական բրոմի ատոմը, Br–Br կապը խզվում է, Br⁻-ը հեռանում է, և առաջանում է դրական լիցքավորված միջանկյալ մասնիկ։
3. Br⁻-ը միանում է դրական ածխածնին։

Գրոհող մասնիկը «փնտրում է» էլեկտրոններ, ուստի սա կոչվում է **էլեկտրոֆիլ միացում**։ Երկու փուլի ապացույցը․ եթե ռեակցիան իրականացվի NaCl-ի լուծույթում, առաջանում է նաև CH₂Br–CH₂Cl։ Քլորիդ իոնը գրոհել է միջանկյալ մասնիկը, ուրեմն բրոմի երկու ատոմները միաժամանակ չեն միանում։

### Մարկովնիկովի կանոնը և ինչու է այն գործում

Երբ HBr-ը միանում է պրոպենին, հնարավոր է երկու արգասիք, բայց առաջանում է գրեթե միայն մեկը․

CH₃–CH=CH₂ + HBr → CH₃–CHBr–CH₃

Վ. Մարկովնիկով (1869 թ.)․ ջրածինը միանում է այն ածխածնին, որն արդեն ավելի շատ ջրածին ունի։ Պատճառը միջանկյալ մասնիկն է։ Սկզբում միանում է H⁺-ը, և դրական լիցքը հայտնվում է մյուս ածխածնի վրա։ Միջին ածխածնի լիցքին «աջակցում» են երկու հարևան ածխածնային խմբեր, որոնք էլեկտրոններ են մղում դեպի այն, իսկ ծայրային ածխածնի լիցքն ունի միայն մեկ այդպիսի հարևան։ Ավելի կայուն միջանկյալ մասնիկն առաջանում է ավելի արագ և որոշում է արգասիքը։

### Ինչու կա երկու բութ-2-են

π կապի համար անհրաժեշտ է, որ երկու p օրբիտալները մնան զուգահեռ, ուստի խմբերը չեն կարող պտտվել կրկնակի կապի շուրջ։ CH₃–CH=CH–CH₃ մոլեկուլում երկու CH₃ խմբերը կարող են լինել նույն կողմում (**ցիս**-բութ-2-են, եռում է 4 °C-ում) կամ հակառակ կողմերում (**տրանս**-բութ-2-են, եռում է 1 °C-ում)։ Դրանք նույն կառուցվածքային բանաձևով տարբեր նյութեր են․ սա **ցիս-տրանս (երկրաչափական) իզոմերիա** է։ Հասարակ կապի շուրջ պտույտն ազատ է, ուստի բութանը նման իզոմերներ չունի։`,
    `### Два вида связи внутри одной двойной

Атомы углерода в этене **sp²-гибридизованы**: три гибридные орбитали лежат в одной плоскости под углом 120°, а одна p-орбиталь стоит перпендикулярно. Гибридные орбитали перекрываются «лоб в лоб» и образуют σ-связи. Две вертикальные p-орбитали перекрываются боками, над и под плоскостью, и образуют **π-связь**.

| Связь | Длина, пм | Энергия, кДж/моль |
|---|---|---|
| C–C | 154 | 348 |
| C=C | 134 | 614 |

Двойная связь не вдвое прочнее одинарной: π-часть добавляет лишь около 266 кДж/моль. Её электроны находятся вне линии, соединяющей ядра, там, где атакующая частица легко до них дотягивается. В этом источник реакционной способности алкенов.

### Как присоединяется бром, шаг за шагом

1. Когда молекула Br₂ подходит к π-облаку, она поляризуется: Brᵟ⁺–Brᵟ⁻.
2. π-электроны атакуют положительный атом брома, связь Br–Br рвётся, Br⁻ уходит, и образуется положительно заряженная промежуточная частица.
3. Br⁻ присоединяется к положительному атому углерода.

Атакующая частица «ищет» электроны, поэтому это называется **электрофильным присоединением**. Доказательство двух стадий: если вести реакцию в растворе NaCl, образуется и CH₂Br–CH₂Cl. Хлорид-ион атаковал промежуточную частицу — значит, два атома брома присоединяются не одновременно.

### Правило Марковникова и почему оно работает

При присоединении HBr к пропену возможны два продукта, но образуется почти только один:

CH₃–CH=CH₂ + HBr → CH₃–CHBr–CH₃

В. Марковников (1869): водород идёт к тому атому углерода, у которого водородов уже больше. Причина — в промежуточной частице. Сначала присоединяется H⁺, и положительный заряд возникает на другом атоме углерода. Заряд на среднем атоме «поддерживают» две соседние углеродные группы, смещающие к нему электроны; у заряда на крайнем атоме такой сосед один. Более устойчивая частица образуется быстрее и определяет продукт.

### Почему бутенов-2 два

π-связи нужно, чтобы две p-орбитали оставались параллельными, поэтому вокруг двойной связи группы вращаться не могут. В CH₃–CH=CH–CH₃ две группы CH₃ могут быть по одну сторону (**цис**-бутен-2, кипит при 4 °C) или по разные (**транс**-бутен-2, кипит при 1 °C). Это разные вещества с одной структурной формулой — **цис-транс (геометрическая) изомерия**. Вокруг одинарной связи вращение свободно, поэтому у бутана таких изомеров нет.`,
  ),
  "alkynes-dienes-rubber": th(
    `### A straight molecule

The carbon atoms of acetylene are **sp hybridised**: two hybrid orbitals point in opposite directions (180°), and the two remaining p orbitals on each carbon form two π bonds at right angles to each other. So H–C≡C–H is a straight line. The C≡C bond is the shortest carbon–carbon bond: 120 pm, compared with 134 pm for C=C and 154 pm for C–C.

### The acidic hydrogen of acetylene

An sp orbital is half s, and s electrons stay close to the nucleus. So an sp carbon holds the C–H bond electrons tightly, the bond is polarised, and the hydrogen can be replaced by a metal:

HC≡CH + 2[Ag(NH₃)₂]OH → AgC≡CAg↓ + 4NH₃ + 2H₂O

A pale yellow precipitate of silver acetylide forms. Alkanes and alkenes do not react, and neither do alkynes with the triple bond inside the chain, such as CH₃–C≡C–CH₃, because they have no hydrogen on a triple-bonded carbon. This test tells but-1-yne from but-2-yne. (Dry silver acetylide explodes on impact.)

### Why Kucherov's reaction gives an aldehyde

Water adds to acetylene just as to ethene, and the first product should be vinyl alcohol, CH₂=CH–OH. But an –OH group on a double-bonded carbon is unstable: the hydrogen moves to the neighbouring carbon, and the double bond moves to the oxygen:

CH₂=CH–OH → CH₃–CH=O

So the final product is acetaldehyde. With other alkynes the same shift gives ketones: propyne gives acetone.

### Why the acetylene flame is so hot

Acetylene is an **endothermic** compound: making it from carbon and hydrogen absorbs 227 kJ/mol. When it burns, this stored energy is released together with the heat of combustion. Also, burning acetylene forms little water (one H₂O for two CO₂), so less heat goes into warming water vapour. The result is up to 3000 °C in oxygen.

### What makes rubber stretchy

Rubber chains are long and coiled like a tangle of string. Pulling straightens them; when you let go, thermal motion coils them up again. Raw rubber, however, slowly flows, because whole chains slide past each other; it turns sticky in heat and brittle in cold. In vulcanisation sulfur atoms form **bridges** between chains (–S–S–). Now the chains can stretch but cannot slide away, so the material springs back. A few bridges give soft rubber, many give hard ebonite.

The shape of each chain matters too. In natural rubber every double bond has the cis form, which bends the chain and keeps it coiled. Gutta-percha is the same polymer with trans double bonds: its straight chains pack tightly, and it is hard rather than elastic.`,
    `### Ուղիղ մոլեկուլ

Ացետիլենի ածխածնի ատոմներն **sp հիբրիդացված** են․ երկու հիբրիդային օրբիտալ ուղղված են հակառակ կողմեր (180°), իսկ յուրաքանչյուր ածխածնի մնացած երկու p օրբիտալներն առաջացնում են երկու π կապ՝ իրար ուղղահայաց։ Այդ պատճառով H–C≡C–H մոլեկուլն ուղիղ գիծ է։ C≡C կապն ածխածին-ածխածին ամենակարճ կապն է․ 120 պմ, մինչդեռ C=C կապինը 134 պմ է, իսկ C–C-ինը՝ 154 պմ։

### Ացետիլենի «թթվային» ջրածինը

sp օրբիտալի կեսը s է, իսկ s էլեկտրոնները մնում են միջուկին մոտ։ Ուստի sp ածխածինն ամուր է պահում C–H կապի էլեկտրոնները, կապը բևեռացվում է, և ջրածինը կարող է տեղակալվել մետաղով․

HC≡CH + 2[Ag(NH₃)₂]OH → AgC≡CAg↓ + 4NH₃ + 2H₂O

Առաջանում է արծաթի ացետիլենիդի բաց դեղին նստվածք։ Ալկանները և ալկենները չեն փոխազդում, ինչպես նաև այն ալկինները, որոնց եռակի կապը շղթայի ներսում է (օրինակ՝ CH₃–C≡C–CH₃), քանի որ նրանց եռակի կապով ածխածինը ջրածին չունի։ Այս փորձով բութ-1-ինը տարբերում են բութ-2-ինից։ (Չոր արծաթի ացետիլենիդը հարվածից պայթում է։)

### Ինչու է Կուչերովի ռեակցիան տալիս ալդեհիդ

Ջուրը միանում է ացետիլենին այնպես, ինչպես էթենին, և առաջին արգասիքը պետք է լինի վինիլային սպիրտը՝ CH₂=CH–OH։ Սակայն կրկնակի կապով ածխածնի վրա գտնվող –OH խումբն անկայուն է․ ջրածինն անցնում է հարևան ածխածնին, իսկ կրկնակի կապը՝ թթվածնին․

CH₂=CH–OH → CH₃–CH=O

Այսպիսով՝ վերջնական արգասիքը քացախալդեհիդն է։ Այլ ալկինների դեպքում նույն տեղաշարժը տալիս է կետոններ․ պրոպինից ստացվում է ացետոն։

### Ինչու է ացետիլենի բոցն այդքան տաք

Ացետիլենը **էնդոթերմ** միացություն է․ ածխածնից և ջրածնից նրա առաջացումը կլանում է 227 կՋ/մոլ։ Այրվելիս այդ պահեստավորված էներգիան անջատվում է այրման ջերմության հետ միասին։ Բացի այդ, ացետիլենի այրումից քիչ ջուր է առաջանում (մեկ H₂O երկու CO₂-ի դիմաց), ուստի քիչ ջերմություն է ծախսվում ջրային գոլորշին տաքացնելու վրա։ Արդյունքում թթվածնի մեջ բոցը հասնում է մինչև 3000 °C-ի։

### Ինչն է կաուչուկը դարձնում առաձգական

Կաուչուկի շղթաները երկար են և ոլորված, ինչպես թելերի կծիկը։ Ձգելիս դրանք ուղղվում են, իսկ բաց թողնելիս ջերմային շարժումը նորից ոլորում է դրանք։ Սակայն հում կաուչուկը դանդաղ «հոսում» է, քանի որ ամբողջական շղթաները սահում են իրար վրայով․ տաքում այն կպչուն է դառնում, ցրտում՝ փխրուն։ Վուլկանացման ժամանակ ծծմբի ատոմներն առաջացնում են **կամուրջներ** շղթաների միջև (–S–S–)։ Հիմա շղթաները կարող են ձգվել, բայց չեն կարող սահել, և նյութը վերադառնում է նախկին ձևին։ Քիչ կամուրջները տալիս են փափուկ ռետին, շատերը՝ կարծր էբոնիտ։

Կարևոր է նաև յուրաքանչյուր շղթայի ձևը։ Բնական կաուչուկում բոլոր կրկնակի կապերն ունեն ցիս ձև, որը ծռում է շղթան և պահում այն ոլորված։ Գուտապերչան նույն պոլիմերն է՝ տրանս կրկնակի կապերով․ նրա ուղիղ շղթաները խիտ են դասավորվում, և այն ոչ թե առաձգական է, այլ կարծր։`,
    `### Прямая молекула

Атомы углерода в ацетилене **sp-гибридизованы**: две гибридные орбитали направлены в противоположные стороны (180°), а две оставшиеся p-орбитали каждого атома образуют две π-связи, перпендикулярные друг другу. Поэтому H–C≡C–H — прямая линия. Связь C≡C — самая короткая углерод-углеродная связь: 120 пм против 134 пм у C=C и 154 пм у C–C.

### «Кислый» водород ацетилена

sp-орбиталь наполовину s, а s-электроны держатся близко к ядру. Поэтому sp-атом углерода крепко удерживает электроны связи C–H, связь поляризуется, и водород можно заместить металлом:

HC≡CH + 2[Ag(NH₃)₂]OH → AgC≡CAg↓ + 4NH₃ + 2H₂O

Выпадает бледно-жёлтый осадок ацетиленида серебра. Алканы и алкены не реагируют, как и алкины с тройной связью внутри цепи, например CH₃–C≡C–CH₃: у них нет водорода при атоме углерода с тройной связью. Этой реакцией отличают бутин-1 от бутина-2. (Сухой ацетиленид серебра взрывается от удара.)

### Почему реакция Кучерова даёт альдегид

Вода присоединяется к ацетилену так же, как к этену, и первым продуктом должен быть виниловый спирт CH₂=CH–OH. Но группа –OH у атома углерода с двойной связью неустойчива: водород переходит к соседнему атому углерода, а двойная связь — к кислороду:

CH₂=CH–OH → CH₃–CH=O

Поэтому конечный продукт — уксусный альдегид. У других алкинов такая же перестройка даёт кетоны: из пропина получается ацетон.

### Почему пламя ацетилена такое горячее

Ацетилен — **эндотермическое** соединение: его образование из углерода и водорода поглощает 227 кДж/моль. При горении эта запасённая энергия выделяется вместе с теплотой сгорания. Кроме того, при горении ацетилена образуется мало воды (одна H₂O на два CO₂), и меньше теплоты уходит на нагрев водяного пара. В итоге в кислороде пламя достигает 3000 °C.

### Почему каучук тянется

Цепи каучука длинные и свёрнуты, как клубок ниток. При растяжении они распрямляются, а когда отпускаешь, тепловое движение снова сворачивает их. Но сырой каучук медленно «течёт»: целые цепи проскальзывают друг относительно друга; в жару он липнет, на морозе становится хрупким. При вулканизации атомы серы образуют **мостики** между цепями (–S–S–). Теперь цепи могут растягиваться, но не могут уползти, и материал пружинит обратно. Мало мостиков — мягкая резина, много — твёрдый эбонит.

Важна и форма каждой цепи. В натуральном каучуке все двойные связи имеют цис-форму, которая изгибает цепь и держит её свёрнутой. Гуттаперча — тот же полимер с транс-связями: её прямые цепи плотно упаковываются, и она не эластична, а тверда.`,
  ),
  "benzene-arenes": th(
    `### The energy evidence

Adding hydrogen to cyclohexene (one double bond in a six-membered ring) releases 120 kJ/mol. If benzene really had three separate double bonds, adding hydrogen to it should release 3 × 120 = 360 kJ/mol. The measured value is only 208 kJ/mol. So benzene is **152 kJ/mol more stable** than a ring with three ordinary double bonds. This extra stability, the **aromatic stabilisation**, comes from six π electrons spread over the whole ring.

### The bond-length evidence

X-ray studies show that all six C–C bonds in benzene have the same length, 139 pm, between a single bond (154 pm) and a double bond (134 pm). Kekulé's formula would have three short and three long bonds. Another clue: with fixed double bonds there should be two different 1,2-dibromobenzenes (the bromines on a single or on a double bond), but only one has ever been found. Kekulé suggested that the double bonds "oscillate"; quantum chemistry later showed that the six electrons simply belong to the whole ring.

### Why benzene prefers substitution

In an addition the ring would lose its aromatic system and the 152 kJ/mol bonus. In a substitution the ring keeps all six π electrons, and only an outer hydrogen is exchanged. That is why bromination needs a catalyst (FeBr₃ polarises Br₂ so strongly that it acts like Br⁺) and the product is C₆H₅Br, not C₆H₆Br₂.

### Groups on the ring steer the next attack

A group already on the ring changes how the ring reacts:

- **–CH₃, –OH, –NH₂** push electrons into the ring. The ring becomes more reactive, and new groups go to the **ortho and para** positions (2, 4, 6). Toluene is nitrated easily and finally gives 2,4,6-trinitrotoluene (TNT).
- **–NO₂, –COOH** pull electrons out. The ring becomes less reactive, and new groups go to the **meta** position (3).

So chemists who make medicines and dyes plan carefully which group to put on first.

### The 4n + 2 rule

In 1931 E. Hückel showed that a flat ring of p orbitals is especially stable when it holds 2, 6, 10… (4n + 2) π electrons. Benzene has 6. Cyclobutadiene, with 4, is so unstable that it can only be kept at very low temperatures.`,
    `### Էներգետիկ ապացույցը

Ցիկլոհեքսենին (վեցանդամ օղակ՝ մեկ կրկնակի կապով) ջրածին միացնելիս անջատվում է 120 կՋ/մոլ։ Եթե բենզոլն իսկապես ունենար երեք առանձին կրկնակի կապ, ջրածին միացնելիս պետք է անջատվեր 3 × 120 = 360 կՋ/մոլ։ Չափված արժեքն ընդամենը 208 կՋ/մոլ է։ Ուրեմն բենզոլը **152 կՋ/մոլ-ով ավելի կայուն է**, քան երեք սովորական կրկնակի կապով օղակը։ Այդ լրացուցիչ կայունությունը՝ **արոմատիկ կայունացումը**, պայմանավորված է վեց π էլեկտրոնով, որոնք բաշխված են ամբողջ օղակով։

### Կապերի երկարության ապացույցը

Ռենտգենյան հետազոտությունները ցույց են տալիս, որ բենզոլի բոլոր վեց C–C կապերն ունեն նույն երկարությունը՝ 139 պմ, որը հասարակ (154 պմ) և կրկնակի (134 պմ) կապերի միջև է։ Կեկուլեի բանաձևով պետք է լինեին երեք կարճ և երեք երկար կապ։ Եվս մեկ հուշում․ ֆիքսված կրկնակի կապերի դեպքում պետք է լինեին երկու տարբեր 1,2-դիբրոմբենզոլ (բրոմները՝ հասարակ կամ կրկնակի կապի ծայրերին), բայց երբևէ գտնվել է միայն մեկը։ Կեկուլեն ենթադրում էր, որ կրկնակի կապերը «տատանվում» են, իսկ քվանտային քիմիան հետագայում ցույց տվեց, որ վեց էլեկտրոնները պարզապես պատկանում են ամբողջ օղակին։

### Ինչու է բենզոլը «նախընտրում» տեղակալումը

Միացման ռեակցիայի ժամանակ օղակը կկորցներ արոմատիկ համակարգը և 152 կՋ/մոլ «բոնուսը»։ Տեղակալման ժամանակ օղակը պահպանում է բոլոր վեց π էլեկտրոնները, և փոխվում է միայն արտաքին ջրածինը։ Ահա թե ինչու է բրոմացման համար պետք կատալիզատոր (FeBr₃-ը Br₂-ն այնքան է բևեռացնում, որ այն գործում է Br⁺-ի պես), և արգասիքը C₆H₅Br է, այլ ոչ թե C₆H₆Br₂։

### Օղակի վրայի խմբերն ուղղորդում են հաջորդ գրոհը

Օղակի վրա արդեն գտնվող խումբը փոխում է օղակի վարքը․

- **–CH₃, –OH, –NH₂** խմբերը էլեկտրոններ են մղում օղակի մեջ։ Օղակը դառնում է ավելի ակտիվ, իսկ նոր խմբերը գնում են **օրթո և պարա** դիրքեր (2, 4, 6)։ Տոլուոլը հեշտությամբ նիտրացվում է և վերջում տալիս 2,4,6-տրինիտրոտոլուոլ (տրոտիլ)։
- **–NO₂, –COOH** խմբերը էլեկտրոններ են քաշում օղակից։ Օղակը դառնում է պակաս ակտիվ, իսկ նոր խմբերը գնում են **մետա** դիրք (3)։

Այդ պատճառով դեղեր և ներկանյութեր ստացող քիմիկոսները զգուշորեն պլանավորում են, թե որ խումբը տեղադրել առաջինը։

### 4n + 2 կանոնը

1931 թ. Է. Հյուկելը ցույց տվեց, որ p օրբիտալների հարթ օղակը հատկապես կայուն է, երբ պարունակում է 2, 6, 10… (4n + 2) π էլեկտրոն։ Բենզոլն ունի 6։ Ցիկլոբութադիենը՝ 4 էլեկտրոնով, այնքան անկայուն է, որ այն կարելի է պահել միայն շատ ցածր ջերմաստիճաններում։`,
    `### Энергетическое доказательство

Присоединение водорода к циклогексену (шестичленное кольцо с одной двойной связью) выделяет 120 кДж/моль. Если бы в бензоле действительно было три отдельные двойные связи, гидрирование должно было бы дать 3 × 120 = 360 кДж/моль. Измеренное значение — всего 208 кДж/моль. Значит, бензол **на 152 кДж/моль устойчивее** кольца с тремя обычными двойными связями. Эта добавочная устойчивость — **ароматическая стабилизация** — возникает от шести π-электронов, распределённых по всему кольцу.

### Доказательство по длинам связей

Рентгеноструктурный анализ показывает, что все шесть связей C–C в бензоле одинаковы — 139 пм, между одинарной (154 пм) и двойной (134 пм). По формуле Кекуле было бы три коротких и три длинных связи. Ещё подсказка: при фиксированных двойных связях должно было бы существовать два разных 1,2-дибромбензола (атомы брома на концах одинарной или двойной связи), но найден только один. Кекуле предполагал, что двойные связи «колеблются»; позже квантовая химия показала, что шесть электронов просто принадлежат всему кольцу.

### Почему бензол «предпочитает» замещение

При присоединении кольцо потеряло бы ароматическую систему и «бонус» в 152 кДж/моль. При замещении кольцо сохраняет все шесть π-электронов, и меняется только внешний водород. Поэтому для бромирования нужен катализатор (FeBr₃ так сильно поляризует Br₂, что он действует как Br⁺), а продукт — C₆H₅Br, а не C₆H₆Br₂.

### Заместители направляют следующую атаку

Группа, уже стоящая в кольце, меняет его поведение:

- **–CH₃, –OH, –NH₂** подают электроны в кольцо. Кольцо становится активнее, а новые группы идут в **орто- и пара-** положения (2, 4, 6). Толуол легко нитруется и в итоге даёт 2,4,6-тринитротолуол (тротил).
- **–NO₂, –COOH** оттягивают электроны. Кольцо становится менее активным, а новые группы идут в **мета-** положение (3).

Поэтому химики, получающие лекарства и красители, тщательно планируют, какую группу вводить первой.

### Правило 4n + 2

В 1931 г. Э. Хюккель показал, что плоское кольцо из p-орбиталей особенно устойчиво, когда в нём 2, 6, 10… (4n + 2) π-электронов. У бензола их 6. Циклобутадиен с 4 электронами настолько неустойчив, что существует только при очень низких температурах.`,
  ),
  "oil-gas-coal": th(
    `### Why fractional distillation works

Each extra CH₂ group raises the boiling point of an alkane by roughly 20–30 °C, so the hundreds of hydrocarbons in oil spread over a wide range of temperatures. In a distillation column the vapour rises through trays that are hottest at the bottom and coolest at the top. On each tray the heavier molecules condense and the lighter ones keep rising. The column works like many small distillations stacked one above another, so each fraction has a narrow range of boiling points.

### What the octane number means

In an engine the fuel–air mixture is squeezed and then lit by a spark. Straight-chain alkanes can ignite by themselves from compression, too early. This **knocking** wastes energy and damages the engine. Branched alkanes resist it.

The scale has two fixed points: heptane = 0 and isooctane (2,2,4-trimethylpentane) = 100. Petrol "95" knocks like a mixture of 95 % isooctane and 5 % heptane. Refineries raise the octane number by catalytic cracking and isomerisation, which turn straight chains into branched ones and into aromatic rings.

### Comparing fuels with numbers

| Fuel | Heat of combustion | Heat per gram | CO₂ per 1000 kJ |
|---|---|---|---|
| methane, CH₄ | 890 kJ/mol | 890 / 16 ≈ 56 kJ | 44 / 890 × 1000 ≈ 49 g |
| octane, C₈H₁₈ | 5470 kJ/mol | 5470 / 114 ≈ 48 kJ | 8 × 44 / 5470 × 1000 ≈ 64 g |
| coal (carbon), C | 393 kJ/mol | 393 / 12 ≈ 33 kJ | 44 / 393 × 1000 ≈ 112 g |

Natural gas gives the most heat per gram and the least CO₂ per unit of energy, because much of its energy comes from burning hydrogen, which gives water, not CO₂. Coal is the opposite: it is almost pure carbon. Hydrogen itself gives about 143 kJ per gram and no CO₂ at all.

### Where oil came from

Oil formed over tens of millions of years from the remains of tiny sea organisms (plankton) buried in mud without air. Heat and pressure at a depth of 2–5 km broke down their fats and other compounds into hydrocarbons. Evidence: oil contains molecules with the carbon skeletons of chlorophyll and of cholesterol, which only living things make. Because it formed so slowly, oil is a **non-renewable** resource: we burn in one year what took about a million years to form.`,
    `### Ինչու է աշխատում թորումը ֆրակցիաների

Ամեն լրացուցիչ CH₂ խումբ ալկանի եռման ջերմաստիճանը բարձրացնում է մոտ 20–30 °C-ով, ուստի նավթի հարյուրավոր ածխաջրածինները բաշխվում են ջերմաստիճանների լայն միջակայքում։ Թորման սյունում գոլորշին բարձրանում է սկուտեղներով, որոնք ամենատաքն են ներքևում և ամենասառը՝ վերևում։ Յուրաքանչյուր սկուտեղի վրա ավելի ծանր մոլեկուլները խտանում են, իսկ թեթևները շարունակում են բարձրանալ։ Սյունն աշխատում է իրար վրա դրված բազմաթիվ փոքր թորումների պես, ուստի ամեն ֆրակցիա ունի եռման ջերմաստիճանների նեղ միջակայք։

### Ինչ է ցույց տալիս օկտանային թիվը

Շարժիչում վառելիք-օդ խառնուրդը սեղմվում է, ապա բռնկվում կայծից։ Ուղիղ շղթայով ալկանները կարող են ինքնաբռնկվել սեղմումից՝ շատ վաղ։ Այդ **դետոնացիան** էներգիա է կորցնում և վնասում շարժիչը։ Ճյուղավորված ալկանները դիմադրում են դրան։

Սանդղակն ունի երկու հաստատուն կետ․ հեպտան = 0 և իզոօկտան (2,2,4-տրիմեթիլպենտան) = 100։ «95» բենզինը դետոնացվում է այնպես, ինչպես 95 % իզոօկտանի և 5 % հեպտանի խառնուրդը։ Նավթավերամշակման գործարանները օկտանային թիվը բարձրացնում են կատալիտիկ կրեկինգով և իզոմերացմամբ, որոնք ուղիղ շղթաները վերածում են ճյուղավորվածների և արոմատիկ օղակների։

### Վառելիքների համեմատությունը թվերով

| Վառելիք | Այրման ջերմություն | Ջերմություն 1 գրամից | CO₂ 1000 կՋ-ի դիմաց |
|---|---|---|---|
| մեթան, CH₄ | 890 կՋ/մոլ | 890 / 16 ≈ 56 կՋ | 44 / 890 × 1000 ≈ 49 գ |
| օկտան, C₈H₁₈ | 5470 կՋ/մոլ | 5470 / 114 ≈ 48 կՋ | 8 × 44 / 5470 × 1000 ≈ 64 գ |
| ածուխ (ածխածին), C | 393 կՋ/մոլ | 393 / 12 ≈ 33 կՋ | 44 / 393 × 1000 ≈ 112 գ |

Բնական գազը տալիս է ամենաշատ ջերմությունը մեկ գրամից և ամենաքիչ CO₂-ը էներգիայի միավորի դիմաց, քանի որ նրա էներգիայի մեծ մասը ստացվում է ջրածնի այրումից, որը տալիս է ջուր, այլ ոչ թե CO₂։ Ածուխը հակառակն է․ այն գրեթե մաքուր ածխածին է։ Ջրածինն ինքը տալիս է մոտ 143 կՋ մեկ գրամից և ընդհանրապես CO₂ չի տալիս։

### Որտեղից է առաջացել նավթը

Նավթն առաջացել է տասնյակ միլիոնավոր տարիների ընթացքում մանր ծովային օրգանիզմների (պլանկտոնի) մնացորդներից, որոնք թաղվել են տիղմի մեջ՝ առանց օդի։ 2–5 կմ խորության վրա ջերմությունը և ճնշումը նրանց ճարպերը և այլ միացությունները քայքայել են մինչև ածխաջրածիններ։ Ապացույցը․ նավթը պարունակում է մոլեկուլներ՝ քլորոֆիլի և խոլեստերոլի ածխածնային կմախքով, որոնք ստեղծում են միայն կենդանի օրգանիզմները։ Քանի որ նավթը գոյացել է այդքան դանդաղ, այն **չվերականգնվող** պաշար է․ մեկ տարում մենք այրում ենք այն, ինչ գոյացել է մոտ մեկ միլիոն տարում։`,
    `### Почему работает фракционная перегонка

Каждая лишняя группа CH₂ повышает температуру кипения алкана примерно на 20–30 °C, поэтому сотни углеводородов нефти распределяются по широкому интервалу температур. В ректификационной колонне пар поднимается через тарелки: внизу они горячее всего, наверху холоднее всего. На каждой тарелке более тяжёлые молекулы конденсируются, а лёгкие поднимаются дальше. Колонна работает как множество маленьких перегонок, поставленных друг на друга, поэтому у каждой фракции узкий интервал температур кипения.

### Что означает октановое число

В двигателе топливно-воздушная смесь сжимается и затем поджигается искрой. Алканы с прямой цепью могут воспламениться сами от сжатия — слишком рано. Эта **детонация** тратит энергию впустую и разрушает двигатель. Разветвлённые алканы ей сопротивляются.

У шкалы две опорные точки: гептан = 0 и изооктан (2,2,4-триметилпентан) = 100. Бензин «95» детонирует как смесь 95 % изооктана и 5 % гептана. Октановое число повышают каталитическим крекингом и изомеризацией, которые превращают прямые цепи в разветвлённые и в ароматические кольца.

### Сравним виды топлива в числах

| Топливо | Теплота сгорания | Теплота с 1 г | CO₂ на 1000 кДж |
|---|---|---|---|
| метан, CH₄ | 890 кДж/моль | 890 / 16 ≈ 56 кДж | 44 / 890 × 1000 ≈ 49 г |
| октан, C₈H₁₈ | 5470 кДж/моль | 5470 / 114 ≈ 48 кДж | 8 × 44 / 5470 × 1000 ≈ 64 г |
| уголь (углерод), C | 393 кДж/моль | 393 / 12 ≈ 33 кДж | 44 / 393 × 1000 ≈ 112 г |

Природный газ даёт больше всего теплоты с грамма и меньше всего CO₂ на единицу энергии: значительная часть его энергии получается от сгорания водорода, а это вода, а не CO₂. Уголь — наоборот: это почти чистый углерод. Сам водород даёт около 143 кДж с грамма и вовсе не даёт CO₂.

### Откуда взялась нефть

Нефть образовалась за десятки миллионов лет из остатков мельчайших морских организмов (планктона), погребённых в иле без доступа воздуха. Тепло и давление на глубине 2–5 км разложили их жиры и другие соединения до углеводородов. Доказательство: в нефти есть молекулы с углеродным скелетом хлорофилла и холестерина, а их создают только живые организмы. Поскольку нефть образовывалась так медленно, это **невозобновимый** ресурс: за год мы сжигаем то, что образовывалось около миллиона лет.`,
  ),
  alcohols: th(
    `### Hydrogen bonds explain the numbers

In the O–H group oxygen pulls the shared electrons strongly (electronegativity 3.5 against 2.1 for hydrogen), so the hydrogen gets a partial positive charge and is attracted to the oxygen of a neighbouring molecule. Such a **hydrogen bond** is about 20 kJ/mol, more than ten times weaker than a covalent bond, but every molecule has several of them.

| Substance | M | Boiling point |
|---|---|---|
| propane, C₃H₈ | 44 | −42 °C |
| dimethyl ether, CH₃–O–CH₃ | 46 | −24 °C |
| ethanol, C₂H₅OH | 46 | 78 °C |

Ethanol and dimethyl ether have the same formula, C₂H₆O, but only ethanol has an O–H group and can form hydrogen bonds. That alone makes a difference of about 100 °C.

### Why long alcohols do not mix with water

| Alcohol | Dissolves in 100 g of water |
|---|---|
| methanol, ethanol, propanol | in any amount |
| butanol | 7.7 g |
| pentanol | 2.2 g |
| hexanol | 0.6 g |

The –OH group is attracted to water, but the hydrocarbon tail is not. In short molecules the –OH group wins; as the tail grows, the molecule becomes more and more like a hydrocarbon.

### Alcohols are weaker acids than water

Sodium reacts with ethanol much more calmly than with water. And sodium ethoxide is completely destroyed by water:

C₂H₅ONa + H₂O → C₂H₅OH + NaOH

A stronger acid (water) gives its H⁺ to the anion of a weaker one. The C₂H₅ group pushes electrons towards the oxygen, so the oxygen holds its hydrogen more tightly than in water.

### Primary, secondary, tertiary

How an alcohol is oxidised depends on how many hydrogens sit on the carbon that carries the –OH group:

- **primary**, R–CH₂OH → aldehyde R–CHO → acid R–COOH;
- **secondary**, R–CH(OH)–R′ → ketone R–CO–R′;
- **tertiary**, such as (CH₃)₃C–OH: that carbon has no hydrogen, so mild oxidants do not touch it.

Early police breathalysers used this: orange dichromate (Cr₂O₇²⁻) oxidised the ethanol in breath and turned green (Cr³⁺), and the length of the green zone showed how much alcohol there was.

### Why methanol is so poisonous

Methanol itself is not very toxic. The danger is what the liver makes of it: the enzyme that oxidises alcohols turns it into formaldehyde and then formic acid, which damage the optic nerve. The same enzyme prefers ethanol, so doctors treat methanol poisoning with ethanol or with a drug that blocks the enzyme. While the enzyme is busy, methanol leaves the body unchanged.`,
    `### Ջրածնային կապերը բացատրում են թվերը

O–H խմբում թթվածինն ուժեղ է ձգում ընդհանուր էլեկտրոնները (էլեկտրաբացասականությունը 3,5 է, ջրածնինը՝ 2,1), ուստի ջրածինը ստանում է մասնակի դրական լիցք և ձգվում հարևան մոլեկուլի թթվածնի կողմը։ Այդպիսի **ջրածնային կապը** մոտ 20 կՋ/մոլ է՝ կովալենտ կապից ավելի քան տասն անգամ թույլ, բայց ամեն մոլեկուլ ունի մի քանի այդպիսի կապ։

| Նյութ | M | Եռման ջերմաստիճան |
|---|---|---|
| պրոպան, C₃H₈ | 44 | −42 °C |
| դիմեթիլեթեր, CH₃–O–CH₃ | 46 | −24 °C |
| էթանոլ, C₂H₅OH | 46 | 78 °C |

Էթանոլը և դիմեթիլեթերն ունեն նույն բանաձևը՝ C₂H₆O, բայց միայն էթանոլն ունի O–H խումբ և կարող է ջրածնային կապեր առաջացնել։ Միայն դա տալիս է մոտ 100 °C տարբերություն։

### Ինչու երկար սպիրտները չեն խառնվում ջրի հետ

| Սպիրտ | Լուծվում է 100 գ ջրում |
|---|---|
| մեթանոլ, էթանոլ, պրոպանոլ | ցանկացած քանակով |
| բութանոլ | 7,7 գ |
| պենտանոլ | 2,2 գ |
| հեքսանոլ | 0,6 գ |

–OH խումբը ձգվում է դեպի ջուրը, իսկ ածխաջրածնային «պոչը»՝ ոչ։ Կարճ մոլեկուլներում հաղթում է –OH խումբը, իսկ պոչի աճին զուգընթաց մոլեկուլն ավելի ու ավելի է նմանվում ածխաջրածնի։

### Սպիրտները ջրից թույլ թթուներ են

Նատրիումը էթանոլի հետ փոխազդում է շատ ավելի հանգիստ, քան ջրի հետ։ Իսկ նատրիումի էթիլատը ջրով ամբողջովին քայքայվում է․

C₂H₅ONa + H₂O → C₂H₅OH + NaOH

Ավելի ուժեղ թթուն (ջուրը) իր H⁺-ը տալիս է ավելի թույլ թթվի անիոնին։ C₂H₅ խումբը էլեկտրոններ է մղում դեպի թթվածինը, ուստի թթվածինն իր ջրածինն ավելի ամուր է պահում, քան ջրում։

### Առաջնային, երկրորդային, երրորդային

Թե ինչպես է սպիրտն օքսիդանում, կախված է նրանից, թե քանի ջրածին կա –OH խումբը կրող ածխածնի վրա․

- **առաջնային**՝ R–CH₂OH → ալդեհիդ R–CHO → թթու R–COOH,
- **երկրորդային**՝ R–CH(OH)–R′ → կետոն R–CO–R′,
- **երրորդային**, օրինակ՝ (CH₃)₃C–OH․ այդ ածխածինը ջրածին չունի, և մեղմ օքսիդիչները նրան չեն ազդում։

Ոստիկանության առաջին ալկոթեստերն օգտագործում էին հենց դա․ նարնջագույն դիքրոմատը (Cr₂O₇²⁻) օքսիդացնում էր արտաշնչված օդի էթանոլը և կանաչում (Cr³⁺), իսկ կանաչ գոտու երկարությունը ցույց էր տալիս սպիրտի քանակը։

### Ինչու է մեթանոլն այդքան թունավոր

Մեթանոլն ինքնին շատ թունավոր չէ։ Վտանգն այն է, ինչ նրանից ստեղծում է լյարդը․ սպիրտներն օքսիդացնող ֆերմենտը նրան վերածում է ֆորմալդեհիդի, ապա մրջնաթթվի, որոնք վնասում են տեսողական նյարդը։ Նույն ֆերմենտը «նախընտրում է» էթանոլը, ուստի բժիշկները մեթանոլով թունավորումը բուժում են էթանոլով կամ ֆերմենտն արգելափակող դեղով։ Քանի դեռ ֆերմենտը զբաղված է, մեթանոլը դուրս է գալիս օրգանիզմից անփոփոխ։`,
    `### Водородные связи объясняют числа

В группе O–H кислород сильно притягивает общие электроны (электроотрицательность 3,5 против 2,1 у водорода), поэтому водород получает частичный положительный заряд и притягивается к кислороду соседней молекулы. Такая **водородная связь** — около 20 кДж/моль, более чем в десять раз слабее ковалентной, но у каждой молекулы их несколько.

| Вещество | M | Температура кипения |
|---|---|---|
| пропан, C₃H₈ | 44 | −42 °C |
| диметиловый эфир, CH₃–O–CH₃ | 46 | −24 °C |
| этанол, C₂H₅OH | 46 | 78 °C |

У этанола и диметилового эфира одна формула, C₂H₆O, но только у этанола есть группа O–H и водородные связи. Одно это даёт разницу около 100 °C.

### Почему длинные спирты не смешиваются с водой

| Спирт | Растворяется в 100 г воды |
|---|---|
| метанол, этанол, пропанол | в любых количествах |
| бутанол | 7,7 г |
| пентанол | 2,2 г |
| гексанол | 0,6 г |

Группа –OH тянется к воде, а углеводородный «хвост» — нет. В коротких молекулах побеждает –OH, а с ростом хвоста молекула всё больше похожа на углеводород.

### Спирты — более слабые кислоты, чем вода

Натрий реагирует с этанолом гораздо спокойнее, чем с водой. А этилат натрия водой полностью разрушается:

C₂H₅ONa + H₂O → C₂H₅OH + NaOH

Более сильная кислота (вода) отдаёт свой H⁺ аниону более слабой. Группа C₂H₅ подаёт электроны к кислороду, и кислород держит свой водород крепче, чем в воде.

### Первичные, вторичные, третичные

Как окисляется спирт, зависит от того, сколько атомов водорода у атома углерода с группой –OH:

- **первичный** R–CH₂OH → альдегид R–CHO → кислота R–COOH;
- **вторичный** R–CH(OH)–R′ → кетон R–CO–R′;
- **третичный**, например (CH₃)₃C–OH: у этого атома углерода нет водорода, и мягкие окислители его не трогают.

На этом были основаны первые полицейские алкотестеры: оранжевый дихромат (Cr₂O₇²⁻) окислял этанол из выдыхаемого воздуха и зеленел (Cr³⁺), а длина зелёной зоны показывала количество спирта.

### Почему метанол так ядовит

Сам метанол не очень токсичен. Опасно то, что из него делает печень: фермент, окисляющий спирты, превращает его в формальдегид, а затем в муравьиную кислоту, которые поражают зрительный нерв. Тот же фермент «предпочитает» этанол, поэтому отравление метанолом лечат этанолом или препаратом, блокирующим фермент. Пока фермент занят, метанол выходит из организма неизменённым.`,
  ),
  "polyols-phenol": th(
    `### The acidity ladder

| Substance | with Na | with NaOH | with NaHCO₃ |
|---|---|---|---|
| ethanol | reacts | no | no |
| phenol | reacts | reacts | no |
| acetic acid | reacts | reacts | reacts, CO₂ given off |

So acidity grows in the order: ethanol < water < phenol < carbonic acid < acetic acid. Proof that phenol is weaker than carbonic acid: when CO₂ is bubbled through a clear solution of sodium phenoxide, the liquid turns cloudy as free phenol separates:

C₆H₅ONa + CO₂ + H₂O → C₆H₅OH + NaHCO₃

### Why the ring makes phenol acidic

When phenol loses H⁺, the negative charge does not stay on the oxygen: it spreads into the π system of the ring, onto carbons 2, 4 and 6. A spread-out charge is more stable than a concentrated one, so the phenoxide ion forms more easily. In the ethoxide ion, C₂H₅O⁻, the charge has nowhere to go.

### Why the ring of phenol is so reactive

The influence works both ways. A lone pair of the oxygen is pushed into the ring, and carbons 2, 4 and 6 become rich in electrons. Benzene reacts with bromine only with a catalyst; phenol reacts with bromine water at once, and all three positions are substituted:

C₆H₅OH + 3Br₂ → C₆H₂Br₃OH↓ + 3HBr

This is a clear example of Butlerov's third idea: atoms in a molecule influence each other. The ring makes the –OH more acidic, and the –OH makes the ring more reactive.

### How glycerol dissolves copper hydroxide

In glycerol and ethylene glycol two –OH groups sit on neighbouring carbons. Their oxygens can grip one Cu²⁺ ion from two sides, like a claw, and form a ring-shaped **chelate** complex that is bright blue and soluble (from the Greek *chele*, claw). Ethanol has only one –OH group per molecule and cannot hold the ion this way. Glucose, which also has –OH groups on neighbouring carbons, gives the same blue colour.

### Antifreeze: lowering the freezing point

Particles dissolved in water get in the way of ice crystals, so a solution freezes at a lower temperature. Ethylene glycol mixes with water in any ratio, and both its –OH groups bind to water: a 50 % mixture freezes only at about −37 °C. A car engine cooled by pure water would crack in the first frost, because water expands by 9 % when it freezes.`,
    `### Թթվայնության սանդուղքը

| Նյութ | Na-ի հետ | NaOH-ի հետ | NaHCO₃-ի հետ |
|---|---|---|---|
| էթանոլ | փոխազդում է | ոչ | ոչ |
| ֆենոլ | փոխազդում է | փոխազդում է | ոչ |
| քացախաթթու | փոխազդում է | փոխազդում է | փոխազդում է, անջատվում է CO₂ |

Ուրեմն թթվայնությունն աճում է հետևյալ կարգով․ էթանոլ < ջուր < ֆենոլ < ածխաթթու < քացախաթթու։ Ապացույց, որ ֆենոլն ածխաթթվից թույլ է․ երբ CO₂ են անցկացնում նատրիումի ֆենոլատի թափանցիկ լուծույթով, հեղուկը պղտորվում է, քանի որ անջատվում է ազատ ֆենոլ․

C₆H₅ONa + CO₂ + H₂O → C₆H₅OH + NaHCO₃

### Ինչու է օղակը ֆենոլին թթվային դարձնում

Երբ ֆենոլը կորցնում է H⁺, բացասական լիցքը չի մնում թթվածնի վրա․ այն տարածվում է օղակի π համակարգով՝ 2, 4 և 6 ածխածինների վրա։ Բաշխված լիցքն ավելի կայուն է, քան կենտրոնացվածը, ուստի ֆենոլատ իոնն ավելի հեշտ է առաջանում։ Էթիլատ իոնում՝ C₂H₅O⁻, լիցքը տարածվելու տեղ չունի։

### Ինչու է ֆենոլի օղակն այդքան ակտիվ

Ազդեցությունը փոխադարձ է։ Թթվածնի չբաժանված էլեկտրոնային զույգը մղվում է օղակի մեջ, և 2, 4, 6 ածխածինները հարստանում են էլեկտրոններով։ Բենզոլը բրոմի հետ փոխազդում է միայն կատալիզատորով, իսկ ֆենոլը բրոմաջրի հետ փոխազդում է անմիջապես, և տեղակալվում են բոլոր երեք դիրքերը․

C₆H₅OH + 3Br₂ → C₆H₂Br₃OH↓ + 3HBr

Սա Բուտլերովի երրորդ դրույթի պարզ օրինակ է․ մոլեկուլում ատոմները փոխադարձաբար ազդում են իրար վրա։ Օղակը –OH-ը դարձնում է ավելի թթվային, իսկ –OH-ը օղակը՝ ավելի ակտիվ։

### Ինչպես է գլիցերինը լուծում պղնձի հիդրօքսիդը

Գլիցերինում և էթիլենգլիկոլում երկու –OH խումբ գտնվում են հարևան ածխածինների վրա։ Նրանց թթվածինները կարող են մեկ Cu²⁺ իոնը բռնել երկու կողմից, ինչպես ճանկով, և առաջացնել օղակաձև **խելատային** կոմպլեքս, որը վառ կապույտ է և լուծելի (հունարեն *chele*՝ ճանկ)։ Էթանոլն ամեն մոլեկուլում ունի միայն մեկ –OH խումբ և չի կարող իոնն այդպես պահել։ Գլյուկոզը, որը նույնպես ունի –OH խմբեր հարևան ածխածինների վրա, տալիս է նույն կապույտ գույնը։

### Հակասառիչ․ սառեցման ջերմաստիճանի իջեցում

Ջրում լուծված մասնիկները խանգարում են սառույցի բյուրեղների առաջացմանը, ուստի լուծույթը սառչում է ավելի ցածր ջերմաստիճանում։ Էթիլենգլիկոլը ջրի հետ խառնվում է ցանկացած հարաբերությամբ, և նրա երկու –OH խմբերն էլ կապվում են ջրի հետ․ 50 %-անոց խառնուրդը սառչում է միայն մոտ −37 °C-ում։ Մաքուր ջրով սառեցվող մեքենայի շարժիչը կճաքեր առաջին սառնամանիքին, քանի որ սառչելիս ջուրն ընդարձակվում է 9 %-ով։`,
    `### Лестница кислотности

| Вещество | с Na | с NaOH | с NaHCO₃ |
|---|---|---|---|
| этанол | реагирует | нет | нет |
| фенол | реагирует | реагирует | нет |
| уксусная кислота | реагирует | реагирует | реагирует, выделяется CO₂ |

Значит, кислотность растёт в ряду: этанол < вода < фенол < угольная кислота < уксусная кислота. Доказательство того, что фенол слабее угольной кислоты: если пропускать CO₂ через прозрачный раствор фенолята натрия, жидкость мутнеет — выделяется свободный фенол:

C₆H₅ONa + CO₂ + H₂O → C₆H₅OH + NaHCO₃

### Почему кольцо делает фенол кислотой

Когда фенол теряет H⁺, отрицательный заряд не остаётся на кислороде: он растекается по π-системе кольца, на атомы углерода 2, 4 и 6. Рассредоточенный заряд устойчивее сосредоточенного, поэтому фенолят-ион образуется легче. В этилат-ионе C₂H₅O⁻ заряду деваться некуда.

### Почему кольцо фенола так активно

Влияние взаимно. Неподелённая пара кислорода смещается в кольцо, и атомы углерода 2, 4 и 6 обогащаются электронами. Бензол реагирует с бромом только с катализатором, а фенол с бромной водой — сразу, и замещаются все три положения:

C₆H₅OH + 3Br₂ → C₆H₂Br₃OH↓ + 3HBr

Это наглядный пример третьего положения Бутлерова: атомы в молекуле влияют друг на друга. Кольцо делает –OH кислее, а –OH делает кольцо активнее.

### Как глицерин растворяет гидроксид меди

В глицерине и этиленгликоле две группы –OH стоят у соседних атомов углерода. Их атомы кислорода могут схватить один ион Cu²⁺ с двух сторон, как клешнёй, и образовать кольцевой **хелатный** комплекс — ярко-синий и растворимый (от греч. *chele* — клешня). У этанола в молекуле только одна группа –OH, и так удержать ион он не может. Глюкоза, у которой тоже есть группы –OH у соседних атомов углерода, даёт такой же синий цвет.

### Антифриз: понижение температуры замерзания

Растворённые частицы мешают образованию кристаллов льда, поэтому раствор замерзает при более низкой температуре. Этиленгликоль смешивается с водой в любых соотношениях, и обе его группы –OH связываются с водой: 50 %-ная смесь замерзает лишь около −37 °C. Двигатель, охлаждаемый чистой водой, треснул бы при первом морозе, потому что вода при замерзании расширяется на 9 %.`,
  ),
  aldehydes: th(
    `### The carbonyl group is polar

Oxygen pulls the electrons of the C=O bond towards itself: Cᵟ⁺=Oᵟ⁻. So, unlike the C=C bond of alkenes, which is attacked by particles looking for electrons, the carbon of C=O is attacked by particles that **bring** electrons: water, alcohols, hydrogen, the CN⁻ ion. This is called **nucleophilic addition**. For example, hydrogen adds to C=O and gives an alcohol.

### A ladder of oxidation states

The oxidation state of carbon shows how far a compound has gone on the way to CO₂:

| Compound | CH₄ | CH₃OH | HCHO | HCOOH | CO₂ |
|---|---|---|---|---|---|
| Oxidation state of C | −4 | −2 | 0 | +2 | +4 |

Each step up is an oxidation by two electrons. An aldehyde stands in the middle of the ladder: it can be reduced to an alcohol or oxidised to an acid.

### Why aldehydes are oxidised and ketones are not

In an aldehyde the carbonyl carbon carries a hydrogen. Oxidation simply turns that C–H into C–OH: R–CHO → R–COOH. In a ketone the carbonyl carbon is bonded only to other carbons. To oxidise it, a C–C bond would have to break, and mild oxidants such as Ag⁺ and Cu²⁺ cannot do that. That is why the silver mirror and the Cu(OH)₂ tests tell aldehydes from ketones.

### Counting electrons in the silver mirror

In ethanal the carbonyl carbon is +1; in acetic acid that carbon is +3. It gives two electrons, and each Ag⁺ takes one, so **1 mol of ethanal gives 2 mol of silver**.

Formaldehyde is special. HCHO is first oxidised to HCOOH, and formic acid still has a hydrogen on its carbon, so it is oxidised further, to CO₂. Carbon goes from 0 to +4, so **1 mol of HCHO gives 4 mol of silver**. This is a favourite trap in exam problems.

### No hydrogen bonds, low boiling points

Aldehyde molecules have no O–H group, so they do not form hydrogen bonds with each other: ethanal boils at 20 °C, ethanol at 78 °C. But the oxygen of C=O accepts hydrogen bonds from water molecules, so formaldehyde, ethanal and acetone mix with water easily.`,
    `### Կարբոնիլ խումբը բևեռային է

Թթվածինը C=O կապի էլեկտրոնները ձգում է դեպի իրեն․ Cᵟ⁺=Oᵟ⁻։ Ուստի, ի տարբերություն ալկենների C=C կապի, որը գրոհում են էլեկտրոններ «փնտրող» մասնիկները, C=O-ի ածխածինը գրոհում են էլեկտրոններ **բերող** մասնիկները՝ ջուրը, սպիրտները, ջրածինը, CN⁻ իոնը։ Սա կոչվում է **նուկլեոֆիլ միացում**։ Օրինակ՝ ջրածինը միանում է C=O-ին և տալիս սպիրտ։

### Օքսիդացման աստիճանների սանդուղքը

Ածխածնի օքսիդացման աստիճանը ցույց է տալիս, թե միացությունը որքան է առաջ գնացել դեպի CO₂ տանող ճանապարհին․

| Միացություն | CH₄ | CH₃OH | HCHO | HCOOH | CO₂ |
|---|---|---|---|---|---|
| C-ի օքսիդացման աստիճան | −4 | −2 | 0 | +2 | +4 |

Վերև յուրաքանչյուր քայլը երկու էլեկտրոնով օքսիդացում է։ Ալդեհիդը սանդուղքի մեջտեղում է․ այն կարող է վերականգնվել մինչև սպիրտ կամ օքսիդանալ մինչև թթու։

### Ինչու են ալդեհիդներն օքսիդանում, իսկ կետոնները՝ ոչ

Ալդեհիդում կարբոնիլային ածխածինը կրում է ջրածին։ Օքսիդացումը պարզապես այդ C–H-ը դարձնում է C–OH․ R–CHO → R–COOH։ Կետոնում կարբոնիլային ածխածինը կապված է միայն այլ ածխածինների հետ։ Այն օքսիդացնելու համար պետք է խզվեր C–C կապը, իսկ Ag⁺-ի և Cu²⁺-ի նման մեղմ օքսիդիչներն ի վիճակի չեն դա անել։ Ահա թե ինչու «արծաթե հայելու» և Cu(OH)₂-ի փորձերով ալդեհիդները տարբերում են կետոններից։

### Էլեկտրոնների հաշվարկը «արծաթե հայելում»

Էթանալում կարբոնիլային ածխածինը +1 է, իսկ քացախաթթվում նույն ածխածինը +3 է։ Այն տալիս է երկու էլեկտրոն, իսկ ամեն Ag⁺ վերցնում է մեկը, ուստի **1 մոլ էթանալը տալիս է 2 մոլ արծաթ**։

Ֆորմալդեհիդը բացառություն է։ HCHO-ն սկզբում օքսիդանում է մինչև HCOOH, իսկ մրջնաթթուն իր ածխածնի վրա դեռ ջրածին ունի, ուստի այն օքսիդանում է ավելի՝ մինչև CO₂։ Ածխածինն անցնում է 0-ից +4, ուստի **1 մոլ HCHO-ն տալիս է 4 մոլ արծաթ**։ Սա քննական խնդիրների սիրված «թակարդն» է։

### Չկան ջրածնային կապեր՝ ցածր եռման ջերմաստիճան

Ալդեհիդների մոլեկուլները չունեն O–H խումբ, ուստի իրար հետ ջրածնային կապեր չեն առաջացնում․ էթանալը եռում է 20 °C-ում, էթանոլը՝ 78 °C-ում։ Սակայն C=O-ի թթվածինն «ընդունում» է ջրի մոլեկուլների ջրածնային կապերը, ուստի ֆորմալդեհիդը, էթանալը և ացետոնը հեշտությամբ խառնվում են ջրի հետ։`,
    `### Карбонильная группа полярна

Кислород оттягивает к себе электроны связи C=O: Cᵟ⁺=Oᵟ⁻. Поэтому, в отличие от связи C=C алкенов, которую атакуют частицы, «ищущие» электроны, углерод C=O атакуют частицы, которые электроны **приносят**: вода, спирты, водород, ион CN⁻. Это называется **нуклеофильным присоединением**. Например, водород присоединяется к C=O и даёт спирт.

### Лестница степеней окисления

Степень окисления углерода показывает, как далеко соединение продвинулось по пути к CO₂:

| Соединение | CH₄ | CH₃OH | HCHO | HCOOH | CO₂ |
|---|---|---|---|---|---|
| Степень окисления C | −4 | −2 | 0 | +2 | +4 |

Каждая ступень вверх — окисление на два электрона. Альдегид стоит посередине лестницы: его можно восстановить до спирта или окислить до кислоты.

### Почему альдегиды окисляются, а кетоны нет

В альдегиде у карбонильного атома углерода есть водород. Окисление просто превращает эту C–H в C–OH: R–CHO → R–COOH. В кетоне карбонильный атом углерода связан только с другими атомами углерода. Чтобы окислить его, пришлось бы разорвать связь C–C, а мягким окислителям вроде Ag⁺ и Cu²⁺ это не под силу. Поэтому реакции «серебряного зеркала» и с Cu(OH)₂ отличают альдегиды от кетонов.

### Считаем электроны в «серебряном зеркале»

В этанале карбонильный атом углерода имеет степень +1, в уксусной кислоте тот же атом — +3. Он отдаёт два электрона, а каждый Ag⁺ принимает один, поэтому **1 моль этаналя даёт 2 моль серебра**.

Формальдегид — особый случай. HCHO сначала окисляется до HCOOH, а у муравьиной кислоты при углероде ещё есть водород, поэтому она окисляется дальше, до CO₂. Углерод переходит от 0 к +4, и **1 моль HCHO даёт 4 моль серебра**. Это любимая «ловушка» экзаменационных задач.

### Нет водородных связей — низкие температуры кипения

У молекул альдегидов нет группы O–H, поэтому между собой они водородных связей не образуют: этаналь кипит при 20 °C, этанол — при 78 °C. Но кислород C=O принимает водородные связи от молекул воды, поэтому формальдегид, этаналь и ацетон легко смешиваются с водой.`,
  ),
  "carboxylic-acids": th(
    `### Why –COOH is acidic and –OH is not

When an acid loses H⁺, the carboxylate ion R–COO⁻ has two oxygens to share the negative charge. Measurements prove it: in sodium acetate both C–O bonds have the same length, 127 pm, between a double C=O bond (about 121 pm) and a single C–O bond (about 134 pm). A charge shared by two oxygens is much more stable than a charge on one oxygen, as in the ethoxide ion. That is why acetic acid is about 10¹¹ times stronger than ethanol.

### How much of the acid is ionised

For acetic acid the ionisation constant is

K = [H⁺][CH₃COO⁻] / [CH₃COOH] = 1.8 × 10⁻⁵.

In a solution of 0.1 mol/L almost all the acid stays as molecules, so [H⁺]² ≈ 1.8 × 10⁻⁵ × 0.1 = 1.8 × 10⁻⁶, and [H⁺] ≈ 1.3 × 10⁻³ mol/L. Only **1.3 %** of the molecules are ionised, and the pH is about 2.9. Hydrochloric acid of the same concentration is ionised completely, pH 1: it has about 75 times more H⁺ ions.

### Neighbours change the strength

| Acid | K |
|---|---|
| acetic, CH₃COOH | 1.8 × 10⁻⁵ |
| formic, HCOOH | 1.8 × 10⁻⁴ |
| chloroacetic, ClCH₂COOH | 1.4 × 10⁻³ |
| trichloroacetic, Cl₃CCOOH | about 0.2 |

The CH₃ group pushes electrons towards –COO⁻ and makes its charge less stable, so acetic acid is ten times weaker than formic acid. Chlorine atoms pull electrons away and help spread the charge: trichloroacetic acid is almost as strong as a mineral acid. Once again, atoms in a molecule influence each other.

### Acids that pair up

Acetic acid (M = 60) boils at 118 °C, while propan-1-ol (also M = 60) boils at 97 °C. Two acid molecules form **two** hydrogen bonds with each other and make a stable pair, a dimer; even in the vapour much of acetic acid is in pairs. Pure acetic acid freezes at 17 °C into ice-like crystals, so it is called "glacial".`,
    `### Ինչու է –COOH խումբը թթվային, իսկ –OH-ը՝ ոչ

Երբ թթուն կորցնում է H⁺, կարբօքսիլատ իոնն՝ R–COO⁻, ունի երկու թթվածին, որոնք կիսում են բացասական լիցքը։ Չափումներն ապացուցում են դա․ նատրիումի ացետատում երկու C–O կապերն ունեն նույն երկարությունը՝ 127 պմ, կրկնակի C=O կապի (մոտ 121 պմ) և հասարակ C–O կապի (մոտ 134 պմ) միջև։ Երկու թթվածնով կիսված լիցքը շատ ավելի կայուն է, քան մեկ թթվածնի վրայինը, ինչպես էթիլատ իոնում։ Ահա թե ինչու է քացախաթթուն մոտ 10¹¹ անգամ ուժեղ էթանոլից։

### Թթվի որ մասն է իոնացված

Քացախաթթվի իոնացման հաստատունն է

K = [H⁺][CH₃COO⁻] / [CH₃COOH] = 1,8 × 10⁻⁵։

0,1 մոլ/լ լուծույթում թթուն գրեթե ամբողջությամբ մնում է մոլեկուլների ձևով, ուստի [H⁺]² ≈ 1,8 × 10⁻⁵ × 0,1 = 1,8 × 10⁻⁶, և [H⁺] ≈ 1,3 × 10⁻³ մոլ/լ։ Իոնացված է մոլեկուլների ընդամենը **1,3 %-ը**, և pH-ը մոտ 2,9 է։ Նույն կոնցենտրացիայի աղաթթուն իոնացված է ամբողջությամբ, pH-ը 1 է․ նրանում H⁺ իոնները մոտ 75 անգամ ավելի շատ են։

### Հարևաններն ազդում են ուժի վրա

| Թթու | K |
|---|---|
| քացախաթթու, CH₃COOH | 1,8 × 10⁻⁵ |
| մրջնաթթու, HCOOH | 1,8 × 10⁻⁴ |
| քլորքացախաթթու, ClCH₂COOH | 1,4 × 10⁻³ |
| տրիքլորքացախաթթու, Cl₃CCOOH | մոտ 0,2 |

CH₃ խումբը էլեկտրոններ է մղում դեպի –COO⁻ և նրա լիցքը դարձնում պակաս կայուն, ուստի քացախաթթուն տասն անգամ թույլ է մրջնաթթվից։ Քլորի ատոմները էլեկտրոններ են քաշում և օգնում բաշխել լիցքը․ տրիքլորքացախաթթուն գրեթե նույնքան ուժեղ է, որքան հանքային թթուները։ Եվս մեկ անգամ՝ մոլեկուլում ատոմներն ազդում են իրար վրա։

### Զույգեր կազմող թթուներ

Քացախաթթուն (M = 60) եռում է 118 °C-ում, մինչդեռ պրոպան-1-ոլը (նույնպես M = 60)՝ 97 °C-ում։ Թթվի երկու մոլեկուլ իրար հետ առաջացնում են **երկու** ջրածնային կապ և կազմում կայուն զույգ՝ դիմեր․ նույնիսկ գոլորշում քացախաթթվի զգալի մասը զույգերով է։ Մաքուր քացախաթթուն 17 °C-ում սառչում է սառույցանման բյուրեղների, ուստի այն կոչվում է «սառցային»։`,
    `### Почему –COOH кислотная, а –OH нет

Когда кислота теряет H⁺, у карбоксилат-иона R–COO⁻ есть два атома кислорода, которые делят отрицательный заряд. Измерения это подтверждают: в ацетате натрия обе связи C–O одинаковы — 127 пм, между двойной C=O (около 121 пм) и одинарной C–O (около 134 пм). Заряд, поделённый между двумя атомами кислорода, гораздо устойчивее заряда на одном кислороде, как в этилат-ионе. Поэтому уксусная кислота примерно в 10¹¹ раз сильнее этанола.

### Какая часть кислоты ионизирована

Для уксусной кислоты константа ионизации

K = [H⁺][CH₃COO⁻] / [CH₃COOH] = 1,8 × 10⁻⁵.

В растворе 0,1 моль/л почти вся кислота остаётся в виде молекул, поэтому [H⁺]² ≈ 1,8 × 10⁻⁵ × 0,1 = 1,8 × 10⁻⁶ и [H⁺] ≈ 1,3 × 10⁻³ моль/л. Ионизировано лишь **1,3 %** молекул, pH около 2,9. Соляная кислота той же концентрации ионизирована полностью, pH 1: ионов H⁺ в ней примерно в 75 раз больше.

### Соседи меняют силу

| Кислота | K |
|---|---|
| уксусная, CH₃COOH | 1,8 × 10⁻⁵ |
| муравьиная, HCOOH | 1,8 × 10⁻⁴ |
| хлоруксусная, ClCH₂COOH | 1,4 × 10⁻³ |
| трихлоруксусная, Cl₃CCOOH | около 0,2 |

Группа CH₃ подаёт электроны к –COO⁻ и делает его заряд менее устойчивым, поэтому уксусная кислота в десять раз слабее муравьиной. Атомы хлора оттягивают электроны и помогают рассредоточить заряд: трихлоруксусная кислота почти так же сильна, как минеральные. И снова: атомы в молекуле влияют друг на друга.

### Кислоты, которые объединяются в пары

Уксусная кислота (M = 60) кипит при 118 °C, а пропанол-1 (тоже M = 60) — при 97 °C. Две молекулы кислоты образуют друг с другом **две** водородные связи и устойчивую пару — димер; даже в паре значительная часть уксусной кислоты существует парами. Чистая уксусная кислота замерзает при 17 °C в похожие на лёд кристаллы, поэтому её называют «ледяной».`,
  ),
  "esters-fats-soap": th(
    `### Who loses what: an experiment with labelled atoms

Esterification gives water, but from which parts? Does the acid lose –OH and the alcohol lose H, or the other way round? In the 1930s chemists answered this with alcohol whose oxygen was the heavy isotope ¹⁸O. The ¹⁸O ended up in the ester, not in the water:

CH₃CO–OH + H–¹⁸O–C₂H₅ ⇄ CH₃CO–¹⁸O–C₂H₅ + H₂O

So the acid gives up its –OH group and the alcohol gives up only its hydrogen.

### How far the reaction goes

Esterification is an equilibrium with a constant of about 4:

K = [ester][water] / ([acid][alcohol]) ≈ 4.

Start with 1 mol of acid and 1 mol of alcohol and let x mol of ester form. Then x² / (1 − x)² = 4, so x / (1 − x) = 2 and x = 2/3. Only two thirds of the acid becomes ester. To get more:

- take excess alcohol: with 3 mol of alcohol per 1 mol of acid, x² / ((1 − x)(3 − x)) = 4 gives x ≈ 0.9;
- remove the water: concentrated H₂SO₄ binds it;
- distil off the ester as it forms (ethyl acetate boils at 77 °C).

This is Le Chatelier's principle at work.

### Why saponification goes to the end

Hydrolysis of an ester in acid is just esterification in reverse, and it stops at the same equilibrium. In alkali the acid that forms turns at once into its salt, RCOO⁻Na⁺. A carboxylate ion cannot react with an alcohol, so there is no way back. That is why soap is made by boiling fat with NaOH, not with acid.

### How soap traps dirt

Above a certain concentration, soap ions gather into tiny spheres called **micelles**: the hydrocarbon tails point inwards, the –COO⁻ heads outwards, into the water. A drop of grease is pulled into the core of a micelle and carried away with the water. All micelles are negatively charged on the outside, so they repel each other and do not stick back together on the fabric.

### Liquid oils, solid fats, and trans fats

The double bonds in natural unsaturated acids have the cis form, which bends the chain. Bent chains cannot pack closely, so the fat stays liquid. Saturated chains are straight and pack like pencils in a box, so the fat is solid. Hydrogenation straightens the chains and turns oil into margarine. Partial hydrogenation, however, flips some double bonds into the straight **trans** form. Trans fats raise the level of "bad" cholesterol in blood, and many countries now limit them in food.`,
    `### Ով ինչ է կորցնում․ փորձ «պիտակավորված» ատոմներով

Էսթերացման ժամանակ առաջանում է ջուր, բայց ո՞ր մասերից։ Թթուն է կորցնում –OH-ը, իսկ սպիրտը՝ H-ը, թե՞ հակառակը։ 1930-ական թթ. քիմիկոսները պատասխանեցին այս հարցին՝ օգտագործելով սպիրտ, որի թթվածինը ծանր իզոտոպն էր՝ ¹⁸O։ ¹⁸O-ն հայտնվեց էսթերում, այլ ոչ թե ջրում․

CH₃CO–OH + H–¹⁸O–C₂H₅ ⇄ CH₃CO–¹⁸O–C₂H₅ + H₂O

Ուրեմն թթուն տալիս է իր –OH խումբը, իսկ սպիրտը՝ միայն ջրածինը։

### Որքան է ընթանում ռեակցիան

Էսթերացումը հավասարակշռություն է, որի հաստատունը մոտ 4 է․

K = [էսթեր][ջուր] / ([թթու][սպիրտ]) ≈ 4։

Վերցնենք 1 մոլ թթու և 1 մոլ սպիրտ, և թող առաջանա x մոլ էսթեր։ Այդ դեպքում x² / (1 − x)² = 4, ուստի x / (1 − x) = 2 և x = 2/3։ Թթվի միայն երկու երրորդն է դառնում էսթեր։ Ավելին ստանալու համար․

- վերցնում են սպիրտի ավելցուկ․ 1 մոլ թթվին 3 մոլ սպիրտի դեպքում x² / ((1 − x)(3 − x)) = 4 հավասարումից x ≈ 0,9,
- հեռացնում են ջուրը․ խիտ H₂SO₄-ը կապում է այն,
- թորում են էսթերը՝ առաջանալուն պես (էթիլացետատը եռում է 77 °C-ում)։

Սա Լե Շատելիեի սկզբունքի կիրառությունն է։

### Ինչու է օճառացումն ընթանում մինչև վերջ

Էսթերի հիդրոլիզը թթվային միջավայրում պարզապես հակադարձ էսթերացում է և կանգ է առնում նույն հավասարակշռության վրա։ Ալկալիում առաջացող թթուն անմիջապես վերածվում է իր աղի՝ RCOO⁻Na⁺։ Կարբօքսիլատ իոնը չի կարող փոխազդել սպիրտի հետ, ուստի հետդարձի ճանապարհ չկա։ Ահա թե ինչու օճառ ստանում են ճարպը NaOH-ի, այլ ոչ թե թթվի հետ եռացնելով։

### Ինչպես է օճառը «որսում» կեղտը

Որոշակի կոնցենտրացիայից բարձր օճառի իոնները հավաքվում են փոքրիկ գնդիկների մեջ, որոնք կոչվում են **միցելներ**․ ածխաջրածնային պոչերն ուղղված են ներս, իսկ –COO⁻ «գլուխները»՝ դուրս՝ դեպի ջուրը։ Ճարպի կաթիլը քաշվում է միցելի միջուկ և ջրի հետ տարվում։ Բոլոր միցելները դրսից բացասական լիցք ունեն, ուստի վանում են իրար և նորից չեն կպչում գործվածքին։

### Հեղուկ յուղեր, պինդ ճարպեր և տրանս-ճարպեր

Բնական չհագեցած թթուների կրկնակի կապերն ունեն ցիս ձև, որը ծռում է շղթան։ Ծռված շղթաները չեն կարող խիտ դասավորվել, ուստի ճարպը մնում է հեղուկ։ Հագեցած շղթաներն ուղիղ են և դասավորվում են տուփի մեջ մատիտների պես, ուստի ճարպը պինդ է։ Հիդրոգենացումն ուղղում է շղթաները և յուղը դարձնում մարգարին։ Սակայն մասնակի հիդրոգենացման ժամանակ որոշ կրկնակի կապեր շրջվում են ուղիղ **տրանս** ձևի։ Տրանս-ճարպերը բարձրացնում են արյան մեջ «վատ» խոլեստերոլի մակարդակը, և շատ երկրներ այժմ սահմանափակում են դրանք սննդում։`,
    `### Кто что теряет: опыт с «мечеными» атомами

При этерификации образуется вода, но из каких частей? Кислота теряет –OH, а спирт — H, или наоборот? В 1930-х годах химики ответили на это, взяв спирт, кислород которого был тяжёлым изотопом ¹⁸O. ¹⁸O оказался в сложном эфире, а не в воде:

CH₃CO–OH + H–¹⁸O–C₂H₅ ⇄ CH₃CO–¹⁸O–C₂H₅ + H₂O

Значит, кислота отдаёт свою группу –OH, а спирт — только водород.

### Насколько идёт реакция

Этерификация — равновесие с константой около 4:

K = [эфир][вода] / ([кислота][спирт]) ≈ 4.

Возьмём 1 моль кислоты и 1 моль спирта, и пусть образуется x моль эфира. Тогда x² / (1 − x)² = 4, откуда x / (1 − x) = 2 и x = 2/3. Только две трети кислоты превращаются в эфир. Чтобы получить больше:

- берут избыток спирта: при 3 моль спирта на 1 моль кислоты уравнение x² / ((1 − x)(3 − x)) = 4 даёт x ≈ 0,9;
- удаляют воду: её связывает концентрированная H₂SO₄;
- отгоняют эфир по мере образования (этилацетат кипит при 77 °C).

Это принцип Ле Шателье в действии.

### Почему омыление идёт до конца

Кислотный гидролиз сложного эфира — просто обратная этерификация, и он останавливается на том же равновесии. В щёлочи образующаяся кислота сразу превращается в соль RCOO⁻Na⁺. Карбоксилат-ион не может реагировать со спиртом, поэтому пути назад нет. Вот почему мыло получают, кипятя жир с NaOH, а не с кислотой.

### Как мыло «ловит» грязь

Выше определённой концентрации ионы мыла собираются в крошечные шарики — **мицеллы**: углеводородные хвосты направлены внутрь, «головы» –COO⁻ — наружу, в воду. Капля жира втягивается в ядро мицеллы и уносится водой. Все мицеллы снаружи заряжены отрицательно, поэтому отталкиваются друг от друга и не прилипают обратно к ткани.

### Жидкие масла, твёрдые жиры и трансжиры

Двойные связи в природных ненасыщенных кислотах имеют цис-форму, которая изгибает цепь. Изогнутые цепи не могут плотно упаковаться, поэтому жир остаётся жидким. Насыщенные цепи прямые и укладываются, как карандаши в коробке, — жир твёрдый. Гидрирование выпрямляет цепи и превращает масло в маргарин. Но при частичном гидрировании часть двойных связей переходит в прямую **транс**-форму. Трансжиры повышают уровень «плохого» холестерина в крови, и многие страны теперь ограничивают их в продуктах.`,
  ),
  carbohydrates: th(
    `### Glucose is mostly a ring

In solution less than 0.1 % of glucose molecules have the open-chain form with a free aldehyde group. The –OH group on carbon 5 adds to the C=O group of carbon 1 and closes a six-membered ring. The new –OH group on carbon 1 can point down (**α-glucose**, about 36 %) or up (**β-glucose**, about 64 %). The forms turn into each other through the open chain, so the aldehyde tests still work: as the open form is used up, more of it forms.

### One small difference, two different materials

Starch and cellulose are both made of glucose units. They differ only in how the units are linked:

- in **starch**, α-glucose units are linked so that the chain twists into a spiral (a helix). Iodine molecules fit inside the helix, which gives the blue colour;
- in **cellulose**, β-glucose units are linked so that every other unit is turned over, and the chain is straight. Straight chains lie side by side and are held together by many hydrogen bonds, forming strong fibres. Cotton is almost pure cellulose.

Our digestive enzymes fit the α link and cannot break the β link. Cows and termites digest cellulose with the help of microbes that live in their gut.

### Why sucrose gives no silver mirror

In sucrose, glucose and fructose are joined through exactly the carbon atoms that could open up into an aldehyde (or keto) group. Both rings are locked, so sucrose is not a reducing sugar. Maltose and lactose keep one ring free to open and do give the silver mirror. After hydrolysis, sucrose gives glucose and fructose, and the test becomes positive.

### Energy stored from the Sun

Photosynthesis stores about 2800 kJ in each mole of glucose (180 g), and respiration gives it back:

C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 2800 kJ

That is about 16 kJ per gram, less than fat (about 38 kJ per gram), because glucose is already partly oxidised: every carbon atom in it already carries an oxygen.

A typical calculation for fermentation: 180 g of glucose (1 mol) gives 2 mol of ethanol, that is 2 × 46 = 92 g, and 2 mol of CO₂, that is 44.8 L at normal conditions.`,
    `### Գլյուկոզը հիմնականում օղակ է

Լուծույթում գլյուկոզի մոլեկուլների 0,1 %-ից պակասն ունի բաց շղթայի ձև՝ ազատ ալդեհիդային խմբով։ 5-րդ ածխածնի –OH խումբը միանում է 1-ին ածխածնի C=O խմբին և փակում վեցանդամ օղակ։ 1-ին ածխածնի նոր –OH խումբը կարող է ուղղված լինել ներքև (**α-գլյուկոզ**, մոտ 36 %) կամ վերև (**β-գլյուկոզ**, մոտ 64 %)։ Ձևերը բաց շղթայի միջոցով փոխարկվում են իրար, ուստի ալդեհիդային փորձերը դարձյալ ստացվում են․ բաց ձևը ծախսվելուն պես նորից է առաջանում։

### Մեկ փոքր տարբերություն՝ երկու տարբեր նյութ

Օսլան և թաղանթանյութը (ցելյուլոզը) երկուսն էլ կազմված են գլյուկոզի մնացորդներից։ Դրանք տարբերվում են միայն մնացորդների միացման ձևով․

- **օսլայում** α-գլյուկոզի մնացորդներն այնպես են միացած, որ շղթան ոլորվում է պարույրի (սպիրալի)։ Յոդի մոլեկուլները տեղավորվում են պարույրի ներսում, ինչն էլ տալիս է կապույտ գույնը,
- **թաղանթանյութում** β-գլյուկոզի մնացորդներն այնպես են միացած, որ ամեն երկրորդ մնացորդը շրջված է, և շղթան ուղիղ է։ Ուղիղ շղթաները դասավորվում են կողք կողքի և պահվում բազմաթիվ ջրածնային կապերով՝ առաջացնելով ամուր թելեր։ Բամբակը գրեթե մաքուր թաղանթանյութ է։

Մեր մարսողական ֆերմենտները «հարմարված» են α կապին և չեն կարող խզել β կապը։ Կովերը և տերմիտները թաղանթանյութը մարսում են իրենց աղիքներում ապրող մանրէների օգնությամբ։

### Ինչու սախարոզը չի տալիս «արծաթե հայելի»

Սախարոզում գլյուկոզը և ֆրուկտոզը միացած են հենց այն ածխածնի ատոմներով, որոնք կարող էին բացվել և առաջացնել ալդեհիդային (կամ կետո) խումբ։ Երկու օղակներն էլ «կողպված» են, ուստի սախարոզը վերականգնող շաքար չէ։ Մալթոզը և լակտոզը պահպանում են մեկ ազատ օղակ, որը կարող է բացվել, և տալիս են «արծաթե հայելի»։ Հիդրոլիզից հետո սախարոզը տալիս է գլյուկոզ և ֆրուկտոզ, և փորձը դառնում է դրական։

### Արևից պահեստավորված էներգիա

Ֆոտոսինթեզը յուրաքանչյուր մոլ գլյուկոզում (180 գ) պահեստավորում է մոտ 2800 կՋ, իսկ շնչառությունն այն վերադարձնում է․

C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 2800 կՋ

Դա մոտ 16 կՋ է մեկ գրամին, ավելի քիչ, քան ճարպինը (մոտ 38 կՋ մեկ գրամին), քանի որ գլյուկոզն արդեն մասամբ օքսիդացված է․ նրա յուրաքանչյուր ածխածնի ատոմ արդեն կրում է թթվածին։

Խմորման տիպային հաշվարկ․ 180 գ գլյուկոզը (1 մոլ) տալիս է 2 մոլ էթանոլ՝ 2 × 46 = 92 գ, և 2 մոլ CO₂՝ 44,8 լ նորմալ պայմաններում։`,
    `### Глюкоза — в основном кольцо

В растворе менее 0,1 % молекул глюкозы имеют открытую цепь со свободной альдегидной группой. Группа –OH пятого атома углерода присоединяется к группе C=O первого и замыкает шестичленное кольцо. Новая группа –OH у первого атома может смотреть вниз (**α-глюкоза**, около 36 %) или вверх (**β-глюкоза**, около 64 %). Формы превращаются друг в друга через открытую цепь, поэтому альдегидные реакции всё равно идут: по мере расходования открытой формы она образуется снова.

### Одна мелкая разница — два разных материала

И крахмал, и целлюлоза построены из остатков глюкозы. Различаются они только способом соединения остатков:

- в **крахмале** остатки α-глюкозы соединены так, что цепь закручивается в спираль. Молекулы иода входят внутрь спирали — отсюда синее окрашивание;
- в **целлюлозе** остатки β-глюкозы соединены так, что каждый второй остаток перевёрнут, и цепь прямая. Прямые цепи ложатся рядом и удерживаются множеством водородных связей, образуя прочные волокна. Хлопок — почти чистая целлюлоза.

Наши пищеварительные ферменты «подогнаны» под α-связь и не могут разорвать β-связь. Коровы и термиты переваривают целлюлозу с помощью микробов, живущих в их кишечнике.

### Почему сахароза не даёт «серебряного зеркала»

В сахарозе глюкоза и фруктоза соединены именно теми атомами углерода, которые могли бы раскрыться в альдегидную (или кетонную) группу. Оба кольца «заперты», поэтому сахароза — невосстанавливающий сахар. Мальтоза и лактоза сохраняют одно свободное кольцо, способное раскрыться, и дают «серебряное зеркало». После гидролиза сахароза даёт глюкозу и фруктозу, и проба становится положительной.

### Энергия, запасённая от Солнца

Фотосинтез запасает около 2800 кДж в каждом моле глюкозы (180 г), а дыхание возвращает её:

C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 2800 кДж

Это около 16 кДж на грамм — меньше, чем у жира (около 38 кДж на грамм), потому что глюкоза уже частично окислена: каждый её атом углерода уже несёт кислород.

Типичный расчёт для брожения: 180 г глюкозы (1 моль) дают 2 моль этанола, то есть 2 × 46 = 92 г, и 2 моль CO₂, то есть 44,8 л при нормальных условиях.`,
  ),
};
