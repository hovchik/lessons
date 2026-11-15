import { th } from "../kit";

/** Chemistry 8: the reasons behind the rules. */
export const chemistry8 = {
  "amount-of-substance": th(
    `### Why the Avogadro number is so strange

Why 6.02·10²³ and not a round number? Because the mole was chosen to make **grams and atomic masses match**. The atomic mass unit is 1.66·10⁻²⁴ g. How many such units fit into 1 g?

Nₐ = 1 g / 1.66·10⁻²⁴ g ≈ 6.02·10²³.

So if one atom of carbon has a mass of 12 units, then Nₐ atoms of carbon have a mass of 12 · 1.66·10⁻²⁴ · 6.02·10²³ g = **12 g**. This is why the molar mass in g/mol is **numerically equal** to Mr: the mole is the "exchange rate" between the tiny world of atoms and grams on a balance. Since 2019 the Avogadro constant is fixed exactly: 6.02214076·10²³ mol⁻¹.

### The mole is a counting unit

A dozen is 12 eggs, a ream is 500 sheets of paper. A mole is 6.02·10²³ particles. Chemists count in moles because reactions happen **particle by particle**: 2H₂ + O₂ → 2H₂O means 2 molecules to 1, and so also 2 mol to 1 mol. Grams do not show this: 4 g of hydrogen react with 32 g of oxygen.

### Everything goes through n

Every calculation passes through the amount of substance, like a bridge:

mass m ⇄ n ⇄ number of particles N (and later, gas volume V).

**Example.** What is the mass of one molecule of water? 1 mol (18 g) contains 6.02·10²³ molecules, so m = 18 / 6.02·10²³ ≈ 2.99·10⁻²³ g.

### A common mistake

"1 mol of oxygen" is ambiguous: 1 mol of atoms O (16 g) or 1 mol of molecules O₂ (32 g)? Always name the particle.`,
    `### Ինչու է Ավոգադրոյի թիվն այդքան տարօրինակ

Ինչու՞ 6,02·10²³ և ոչ թե կլոր թիվ։ Որովհետև մոլն ընտրված է այնպես, որ **գրամներն ու ատոմային զանգվածները համընկնեն**։ Ատոմային զանգվածի միավորը 1,66·10⁻²⁴ գ է։ Քանի՞ այդպիսի միավոր է տեղավորվում 1 գ-ում։

Nₐ = 1 գ ։ 1,66·10⁻²⁴ գ ≈ 6,02·10²³։

Ուրեմն եթե ածխածնի մեկ ատոմի զանգվածը 12 միավոր է, ապա Nₐ ատոմ ածխածնի զանգվածը 12 · 1,66·10⁻²⁴ · 6,02·10²³ գ = **12 գ** է։ Ահա թե ինչու մոլային զանգվածը գ/մոլ-ով **թվապես հավասար է** Mr-ին․ մոլը ատոմների փոքրիկ աշխարհի և կշեռքի գրամների միջև «փոխարժեքն» է։ 2019 թվականից Ավոգադրոյի հաստատունը ճշգրիտ ամրագրված է՝ 6,02214076·10²³ մոլ⁻¹։

### Մոլը հաշվելու միավոր է

Դյուժինը 12 ձու է, տուփը՝ 500 թերթ թուղթ։ Մոլը 6,02·10²³ մասնիկ է։ Քիմիկոսները հաշվում են մոլերով, որովհետև ռեակցիաները կատարվում են **մասնիկ առ մասնիկ**․ 2H₂ + O₂ → 2H₂O նշանակում է 2 մոլեկուլ՝ 1-ին, ուստի նաև 2 մոլ՝ 1 մոլին։ Գրամները դա ցույց չեն տալիս․ 4 գ ջրածինը փոխազդում է 32 գ թթվածնի հետ։

### Ամեն ինչ անցնում է n-ի միջով

Յուրաքանչյուր հաշվարկ կամրջի պես անցնում է նյութի քանակի միջով․

զանգված m ⇄ n ⇄ մասնիկների թիվ N (իսկ հետո՝ նաև գազի ծավալ V)։

**Օրինակ։** Որքա՞ն է ջրի մեկ մոլեկուլի զանգվածը։ 1 մոլը (18 գ) պարունակում է 6,02·10²³ մոլեկուլ, ուստի m = 18 ։ 6,02·10²³ ≈ 2,99·10⁻²³ գ։

### Տարածված սխալ

«1 մոլ թթվածին» արտահայտությունը երկիմաստ է․ 1 մոլ O ատո՞մ (16 գ), թե՞ 1 մոլ O₂ մոլեկուլ (32 գ)։ Միշտ նշիր մասնիկը։`,
    `### Почему число Авогадро такое странное

Почему 6,02·10²³, а не круглое число? Потому что моль выбран так, чтобы **граммы и атомные массы совпадали**. Атомная единица массы равна 1,66·10⁻²⁴ г. Сколько таких единиц помещается в 1 г?

Nₐ = 1 г / 1,66·10⁻²⁴ г ≈ 6,02·10²³.

Значит, если масса одного атома углерода — 12 единиц, то масса Nₐ атомов углерода равна 12 · 1,66·10⁻²⁴ · 6,02·10²³ г = **12 г**. Вот почему молярная масса в г/моль **численно равна** Mr: моль — это «обменный курс» между крошечным миром атомов и граммами на весах. С 2019 г. постоянная Авогадро зафиксирована точно: 6,02214076·10²³ моль⁻¹.

### Моль — единица счёта

Дюжина — 12 яиц, пачка — 500 листов бумаги. Моль — 6,02·10²³ частиц. Химики считают в молях, потому что реакции идут **частица за частицей**: 2H₂ + O₂ → 2H₂O означает 2 молекулы на 1, а значит, и 2 моль на 1 моль. Граммы этого не показывают: 4 г водорода реагируют с 32 г кислорода.

### Всё идёт через n

Каждый расчёт проходит через количество вещества, как через мост:

масса m ⇄ n ⇄ число частиц N (а позже и объём газа V).

**Пример.** Какова масса одной молекулы воды? 1 моль (18 г) содержит 6,02·10²³ молекул, значит, m = 18 / 6,02·10²³ ≈ 2,99·10⁻²³ г.

### Частая ошибка

«1 моль кислорода» — двусмысленно: 1 моль атомов O (16 г) или 1 моль молекул O₂ (32 г)? Всегда называйте частицу.`,
  ),

  "molar-volume-of-gases": th(
    `### Why every gas takes the same volume

In a gas the molecules are tiny compared with the distances between them: at normal conditions the molecules fill only about 0.1 % of the volume. So the volume of a gas depends not on **how big** its molecules are, but on **how many** there are and how fast they move and hit the walls (temperature and pressure). Equal numbers of molecules at the same T and p take the same volume, whether they are tiny H₂ or large CO₂. This is Avogadro's law. It does **not** hold for liquids and solids, where the particles touch: 1 mol of water is 18 cm³, 1 mol of iron is 7 cm³.

### Where 22.4 L comes from

The behaviour of a gas is described by the equation **pV = nRT**, where R = 8.31 J/(mol·K) and T is in kelvin (T = t + 273). For 1 mol at 0 °C and 101 325 Pa:

V = nRT / p = 1 · 8.31 · 273 / 101 325 ≈ 0.0224 m³ = **22.4 L**.

At room temperature (20 °C, T = 293 K) the same mole takes about **24 L**. So 22.4 L/mol is true only at normal conditions; that is why problems always say "(n.c.)".

### Density of a gas

1 mol has a mass M and takes 22.4 L, so the density at n.c. is ρ = M / 22.4 g/L. Air (M ≈ 29) has ρ ≈ 1.29 g/L. A gas lighter than air rises (helium balloons, natural gas from a leak goes up), a heavier one sinks and gathers in low places. Carbon dioxide (M = 44) collects in cellars, wells and caves; people have suffocated going into them, which is why a candle is lowered first: if it goes out, there is too little oxygen.

### Volume ratios in reactions

Because moles and volumes of gases are proportional, the coefficients give **volume** ratios too: N₂ + 3H₂ → 2NH₃ means 1 L of nitrogen + 3 L of hydrogen → 2 L of ammonia (at the same T and p).`,
    `### Ինչու են բոլոր գազերը զբաղեցնում նույն ծավալը

Գազում մոլեկուլները շատ փոքր են իրենց միջև եղած հեռավորությունների համեմատ․ նորմալ պայմաններում մոլեկուլներն զբաղեցնում են ծավալի ընդամենը մոտ 0,1 %-ը։ Ուստի գազի ծավալը կախված է ոչ թե նրանից, թե **որքան մեծ** են մոլեկուլները, այլ նրանից, թե **քանիսն** են դրանք և որքան արագ են շարժվում ու հարվածում պատերին (ջերմաստիճան և ճնշում)։ Միևնույն T-ի և p-ի դեպքում հավասար թվով մոլեկուլներն զբաղեցնում են նույն ծավալը՝ լինեն փոքրիկ H₂, թե մեծ CO₂։ Սա Ավոգադրոյի օրենքն է։ Այն **չի** գործում հեղուկների և պինդ մարմինների համար, որտեղ մասնիկները դիպչում են իրար․ 1 մոլ ջուրը 18 սմ³ է, 1 մոլ երկաթը՝ 7 սմ³։

### Որտեղից է 22,4 լ-ը

Գազի վարքը նկարագրվում է **pV = nRT** հավասարմամբ, որտեղ R = 8,31 Ջ/(մոլ·Կ), իսկ T-ն կելվիններով է (T = t + 273)։ 1 մոլի համար 0 °C-ում և 101 325 Պա ճնշման դեպքում․

V = nRT ։ p = 1 · 8,31 · 273 ։ 101 325 ≈ 0,0224 մ³ = **22,4 լ**։

Սենյակային ջերմաստիճանում (20 °C, T = 293 Կ) նույն մոլն զբաղեցնում է մոտ **24 լ**։ Ուրեմն 22,4 լ/մոլ-ը ճիշտ է միայն նորմալ պայմաններում․ ահա թե ինչու են խնդիրներում միշտ նշում «(ն․ պ․)»։

### Գազի խտություն

1 մոլն ունի M զանգված և զբաղեցնում է 22,4 լ, ուստի ն․ պ․-ում խտությունը ρ = M ։ 22,4 գ/լ է։ Օդի համար (M ≈ 29) ρ ≈ 1,29 գ/լ։ Օդից թեթև գազը բարձրանում է (հելիումով փուչիկներ, արտահոսած բնական գազը վեր է գնում), ծանրը՝ իջնում և կուտակվում ցածր տեղերում։ Ածխաթթու գազը (M = 44) կուտակվում է նկուղներում, ջրհորներում և քարանձավներում․ մարդիկ խեղդվել են դրանց մեջ մտնելիս, ուստի նախ ներքև են իջեցնում վառվող մոմ․ եթե այն հանգչում է, թթվածինը քիչ է։

### Ծավալների հարաբերությունը ռեակցիաներում

Քանի որ գազերի մոլերն ու ծավալները համեմատական են, գործակիցները տալիս են նաև **ծավալների** հարաբերությունը․ N₂ + 3H₂ → 2NH₃ նշանակում է 1 լ ազոտ + 3 լ ջրածին → 2 լ ամոնիակ (միևնույն T-ի և p-ի դեպքում)։`,
    `### Почему любой газ занимает один и тот же объём

В газе молекулы крошечные по сравнению с расстояниями между ними: при нормальных условиях молекулы занимают лишь около 0,1 % объёма. Поэтому объём газа зависит не от того, **насколько велики** его молекулы, а от того, **сколько** их и как быстро они движутся и ударяют о стенки (температура и давление). Равное число молекул при одинаковых T и p занимает один и тот же объём — будь то крошечные H₂ или крупные CO₂. Это закон Авогадро. Для жидкостей и твёрдых тел, где частицы соприкасаются, он **не** выполняется: 1 моль воды — 18 см³, 1 моль железа — 7 см³.

### Откуда берутся 22,4 л

Поведение газа описывает уравнение **pV = nRT**, где R = 8,31 Дж/(моль·К), а T в кельвинах (T = t + 273). Для 1 моль при 0 °C и 101 325 Па:

V = nRT / p = 1 · 8,31 · 273 / 101 325 ≈ 0,0224 м³ = **22,4 л**.

При комнатной температуре (20 °C, T = 293 К) тот же моль занимает около **24 л**. Значит, 22,4 л/моль верно только при нормальных условиях — поэтому в задачах всегда пишут «(н. у.)».

### Плотность газа

1 моль имеет массу M и занимает 22,4 л, поэтому плотность при н. у. ρ = M / 22,4 г/л. Для воздуха (M ≈ 29) ρ ≈ 1,29 г/л. Газ легче воздуха поднимается (шарики с гелием, природный газ при утечке уходит вверх), тяжелее — опускается и скапливается внизу. Углекислый газ (M = 44) собирается в погребах, колодцах и пещерах; люди задыхались, спускаясь туда, поэтому сначала опускают горящую свечу: если она гаснет, кислорода мало.

### Отношения объёмов в реакциях

Так как моли и объёмы газов пропорциональны, коэффициенты дают и отношения **объёмов**: N₂ + 3H₂ → 2NH₃ означает 1 л азота + 3 л водорода → 2 л аммиака (при одинаковых T и p).`,
  ),

  "solutions-mass-fraction": th(
    `### Why salt dissolves in water

A water molecule is a small dipole: its oxygen end is slightly negative, its hydrogen ends slightly positive. When a salt crystal is put in water, the water molecules turn their negative ends towards the positive ions Na⁺ and their positive ends towards the negative ions Cl⁻, pull the ions out of the crystal one by one and surround each with a "coat" of water. This is called **hydration**. Petrol and oil have no charged ends, so they cannot pull ions apart and do not mix with water: "like dissolves like".

### Dissolving can heat or cool

Breaking the crystal takes energy; hydrating the ions gives energy back. Which is larger decides the result:

- NaOH or concentrated H₂SO₄: hydration wins, the solution gets **hot**;
- ammonium nitrate NH₄NO₃: breaking the crystal wins, the solution gets **cold**. Instant cold packs for sports injuries work this way.

So dissolving is not a purely physical process: new bonds between particles and water form.

### Why gases dissolve less in warm water

Gas molecules held in water are freed by heat. A warm lake holds less oxygen, which is why fish suffer in hot summers, and warm fizzy water loses its gas quickly.

### The rule for mixing solutions

Mixing m₁ g of a solution with fraction ω₁ and m₂ g with ω₂ conserves the mass of solute:

m₁ω₁ + m₂ω₂ = (m₁ + m₂)ω.

**Example.** 200 g of 10 % salt solution + 300 g of 20 %: ω = (20 + 60) / 500 = 0.16 = 16 %. The answer always lies **between** ω₁ and ω₂, nearer the one there is more of. Adding pure water is the case ω₂ = 0; evaporating water is "adding" negative water.`,
    `### Ինչու է աղը լուծվում ջրում

Ջրի մոլեկուլը փոքրիկ դիպոլ է․ նրա թթվածնային ծայրը թույլ բացասական է, ջրածնային ծայրերը՝ թույլ դրական։ Երբ աղի բյուրեղը դնում են ջրի մեջ, ջրի մոլեկուլներն իրենց բացասական ծայրերով շրջվում են դեպի դրական Na⁺ իոնները, դրական ծայրերով՝ դեպի բացասական Cl⁻ իոնները, մեկ առ մեկ դուրս են քաշում իոնները բյուրեղից և յուրաքանչյուրը շրջապատում ջրի «վերարկուով»։ Դա կոչվում է **հիդրատացում**։ Բենզինը և յուղը լիցքավորված ծայրեր չունեն, ուստի չեն կարող իոններն իրարից պոկել և չեն խառնվում ջրի հետ․ «նմանը լուծում է նմանին»։

### Լուծվելը կարող է տաքացնել կամ սառեցնել

Բյուրեղը քանդելու համար էներգիա է ծախսվում, իսկ իոնների հիդրատացումը էներգիա է անջատում։ Արդյունքը կախված է նրանից, թե որն է մեծ․

- NaOH կամ խիտ H₂SO₄․ հիդրատացումն է հաղթում, լուծույթը **տաքանում է**,
- ամոնիումի նիտրատ NH₄NO₃․ բյուրեղի քանդումն է հաղթում, լուծույթը **սառչում է**։ Մարզական վնասվածքների համար «ակնթարթային սառը» փաթեթներն այդպես են աշխատում։

Ուրեմն լուծվելը զուտ ֆիզիկական երևույթ չէ․ առաջանում են նոր կապեր մասնիկների և ջրի միջև։

### Ինչու են գազերը տաք ջրում ավելի քիչ լուծվում

Ջրում պահվող գազի մոլեկուլներն ազատվում են ջերմությունից։ Տաք լիճն ավելի քիչ թթվածին է պարունակում, ուստի ձկները տանջվում են շոգ ամառներին, իսկ տաք գազավորված ջուրն արագ է կորցնում գազը։

### Լուծույթները խառնելու կանոնը

ω₁ բաժնով m₁ գ լուծույթը ω₂ բաժնով m₂ գ լուծույթի հետ խառնելիս լուծված նյութի զանգվածը պահպանվում է․

m₁ω₁ + m₂ω₂ = (m₁ + m₂)ω։

**Օրինակ։** 200 գ 10 %-անոց աղի լուծույթ + 300 գ 20 %-անոց․ ω = (20 + 60) ։ 500 = 0,16 = 16 %։ Պատասխանը միշտ ω₁-ի և ω₂-ի **միջև** է՝ ավելի մոտ նրան, որից ավելի շատ կա։ Մաքուր ջուր ավելացնելը ω₂ = 0 դեպքն է, իսկ ջուր գոլորշիացնելը՝ բացասական ջրի «ավելացում»։`,
    `### Почему соль растворяется в воде

Молекула воды — маленький диполь: её кислородный конец слегка отрицателен, водородные — слегка положительны. Когда кристалл соли попадает в воду, молекулы воды поворачиваются отрицательными концами к положительным ионам Na⁺, а положительными — к отрицательным ионам Cl⁻, вытаскивают ионы из кристалла один за другим и окружают каждый «шубой» из воды. Это называется **гидратацией**. У бензина и масла нет заряженных концов, поэтому они не могут растащить ионы и не смешиваются с водой: «подобное растворяется в подобном».

### Растворение может греть или охлаждать

На разрушение кристалла энергия затрачивается, а гидратация ионов её выделяет. Результат зависит от того, что больше:

- NaOH или концентрированная H₂SO₄: побеждает гидратация, раствор **нагревается**;
- нитрат аммония NH₄NO₃: побеждает разрушение кристалла, раствор **охлаждается**. Так работают «мгновенные» холодные пакеты для спортивных травм.

Значит, растворение — не чисто физический процесс: между частицами и водой образуются новые связи.

### Почему газы хуже растворяются в тёплой воде

Молекулы газа, удерживаемые водой, высвобождаются при нагревании. В тёплом озере меньше кислорода, поэтому рыбы страдают жарким летом, а тёплая газировка быстро выдыхается.

### Правило смешивания растворов

При смешивании m₁ г раствора с долей ω₁ и m₂ г с долей ω₂ масса растворённого вещества сохраняется:

m₁ω₁ + m₂ω₂ = (m₁ + m₂)ω.

**Пример.** 200 г 10 %-ного раствора соли + 300 г 20 %-ного: ω = (20 + 60) / 500 = 0,16 = 16 %. Ответ всегда лежит **между** ω₁ и ω₂, ближе к тому, чего больше. Добавление чистой воды — случай ω₂ = 0, а выпаривание воды — «добавление» отрицательной воды.`,
  ),

  oxides: th(
    `### Why metal oxides are basic and non-metal oxides acidic

The answer lies in the bond. In an oxide of an active metal (Na₂O, CaO) the bond is **ionic**: the oxide contains the ion O²⁻. This ion strongly attracts H⁺, so in water it takes a hydrogen from a water molecule: O²⁻ + H₂O → 2OH⁻. Hydroxide ions in solution mean a **base**.

In an oxide of a non-metal (SO₃, CO₂) the bonds are **covalent**, and the central atom pulls electrons away from oxygen and becomes slightly positive. A water molecule attaches to it, and the product easily gives away H⁺: SO₃ + H₂O → H₂SO₄. Hydrogen ions mean an **acid**.

### A pattern across the table

The oxides of period 3 change smoothly from left to right:

Na₂O, MgO (basic) → Al₂O₃ (amphoteric) → SiO₂, P₂O₅, SO₃, Cl₂O₇ (acidic, more and more strongly).

As metallic character falls across a period, the oxides become more acidic. The same happens **within one element** as its oxidation state rises: CrO is basic, Cr₂O₃ amphoteric, CrO₃ acidic; MnO is basic, Mn₂O₇ acidic. The more electrons an atom has given to oxygen, the more strongly it behaves like a non-metal.

### Checking the "partner" rule

Two oxides react with each other only if one is basic and the other acidic (CaO + SiO₂ → CaSiO₃ in a blast furnace). Two basic oxides or two acidic oxides do not react. A neat way to remember: the products are what you would get from the matching base and acid.

### Why CO is dangerous and "non-salt-forming"

Carbon monoxide does not react with water, acids or alkalis to give salts. But it binds to haemoglobin in blood about 200 times more firmly than oxygen does, so even a small amount stops blood carrying oxygen. That is why stoves and gas heaters need good ventilation.`,
    `### Ինչու են մետաղների օքսիդները հիմնային, իսկ ոչ մետաղներինը՝ թթվային

Պատասխանը կապի մեջ է։ Ակտիվ մետաղի օքսիդում (Na₂O, CaO) կապը **իոնային** է․ օքսիդը պարունակում է O²⁻ իոն։ Այդ իոնն ուժեղ ձգում է H⁺-ը, ուստի ջրում ջրի մոլեկուլից վերցնում է ջրածին․ O²⁻ + H₂O → 2OH⁻։ Լուծույթում հիդրօքսիդ իոններ՝ նշանակում է **հիմք**։

Ոչ մետաղի օքսիդում (SO₃, CO₂) կապերը **կովալենտային** են, և կենտրոնական ատոմը էլեկտրոնները մասամբ տալիս է թթվածնին և դառնում թույլ դրական։ Ջրի մոլեկուլը միանում է նրան, և արգասիքը հեշտությամբ տալիս է H⁺․ SO₃ + H₂O → H₂SO₄։ Ջրածնի իոններ՝ նշանակում է **թթու**։

### Օրինաչափություն աղյուսակում

3-րդ պարբերության օքսիդները ձախից աջ սահուն փոխվում են․

Na₂O, MgO (հիմնային) → Al₂O₃ (ամֆոտեր) → SiO₂, P₂O₅, SO₃, Cl₂O₇ (թթվային, գնալով ավելի ուժեղ)։

Քանի որ պարբերությունում մետաղական հատկությունները թուլանում են, օքսիդներն ավելի թթվային են դառնում։ Նույնը կատարվում է **մեկ տարրի ներսում**, երբ նրա օքսիդացման աստիճանն աճում է․ CrO-ն հիմնային է, Cr₂O₃-ը՝ ամֆոտեր, CrO₃-ը՝ թթվային, MnO-ն հիմնային է, Mn₂O₇-ը՝ թթվային։ Որքան շատ էլեկտրոն է ատոմը տվել թթվածնին, այնքան ավելի է նա իրեն ոչ մետաղի պես պահում։

### «Զույգի» կանոնը

Երկու օքսիդ իրար հետ փոխազդում են միայն այն դեպքում, երբ մեկը հիմնային է, մյուսը՝ թթվային (CaO + SiO₂ → CaSiO₃ բարձր վառարանում)։ Երկու հիմնային կամ երկու թթվային օքսիդ չեն փոխազդում։ Հիշելու հարմար ձև․ արգասիքը նույնն է, ինչ կստացվեր համապատասխան հիմքից և թթվից։

### Ինչու է CO-ն վտանգավոր և «աղ չառաջացնող»

Ածխածնի մոնօքսիդը ջրի, թթուների կամ ալկալիների հետ աղ չի առաջացնում։ Բայց այն արյան հեմոգլոբինին միանում է մոտ 200 անգամ ավելի ամուր, քան թթվածինը, ուստի նույնիսկ փոքր քանակը թույլ չի տալիս արյանը թթվածին տեղափոխել։ Ահա թե ինչու են վառարաններն ու գազային տաքացուցիչները լավ օդափոխություն պահանջում։`,
    `### Почему оксиды металлов основные, а неметаллов — кислотные

Ответ — в связи. В оксиде активного металла (Na₂O, CaO) связь **ионная**: в оксиде есть ион O²⁻. Этот ион сильно притягивает H⁺, поэтому в воде он забирает водород у молекулы воды: O²⁻ + H₂O → 2OH⁻. Гидроксид-ионы в растворе означают **основание**.

В оксиде неметалла (SO₃, CO₂) связи **ковалентные**, и центральный атом отдаёт электроны кислороду, становясь слегка положительным. К нему присоединяется молекула воды, и продукт легко отдаёт H⁺: SO₃ + H₂O → H₂SO₄. Ионы водорода означают **кислоту**.

### Закономерность в таблице

Оксиды 3-го периода плавно меняются слева направо:

Na₂O, MgO (основные) → Al₂O₃ (амфотерный) → SiO₂, P₂O₅, SO₃, Cl₂O₇ (кислотные, всё сильнее).

Так как металлические свойства в периоде ослабевают, оксиды становятся всё более кислотными. То же происходит **у одного элемента** при росте степени окисления: CrO — основный, Cr₂O₃ — амфотерный, CrO₃ — кислотный; MnO — основный, Mn₂O₇ — кислотный. Чем больше электронов атом отдал кислороду, тем сильнее он ведёт себя как неметалл.

### Правило «пары»

Два оксида реагируют друг с другом, только если один основный, а другой кислотный (CaO + SiO₂ → CaSiO₃ в доменной печи). Два основных или два кислотных оксида не реагируют. Удобно запомнить: продукт тот же, что дали бы соответствующие основание и кислота.

### Почему CO опасен и «несолеобразующий»

Угарный газ не даёт солей ни с водой, ни с кислотами, ни со щелочами. Но он связывается с гемоглобином крови примерно в 200 раз прочнее кислорода, поэтому даже небольшое его количество мешает крови переносить кислород. Вот почему печам и газовым обогревателям нужна хорошая вентиляция.`,
  ),

  bases: th(
    `### What actually makes a substance alkaline

In 1887 the Swedish chemist **S. Arrhenius** explained it: in water an alkali breaks into ions, and the ion that all alkalis share is **OH⁻**: NaOH → Na⁺ + OH⁻. The hydroxide ion is what turns phenolphthalein crimson, feels soapy and neutralises acids. So the "general properties of bases" are really the properties of **one ion**.

Insoluble bases such as Cu(OH)₂ give almost no OH⁻ ions to water. That is why they do not change the colour of indicators and do not react with salts or acidic oxides, but they still dissolve in acids: the acid's H⁺ pulls the OH⁻ out of the solid.

### Why alkalis are slippery and dangerous

An alkali reacts with the fats of the skin and turns them into soap; the slippery feeling on your fingers is your own skin dissolving. Alkalis are especially dangerous to the eyes because they keep reacting deeper into the tissue. If an alkali gets on the skin, wash with a lot of water, then with a weak acid (dilute vinegar or boric acid).

### Why strength grows down the group

LiOH < NaOH < KOH < CsOH in strength. Down group IA the metal ions get larger, so they hold the OH⁻ less tightly and release it into the water more readily. Down group IIA the hydroxides also become more soluble: Mg(OH)₂ is almost insoluble, Ca(OH)₂ slightly soluble, Ba(OH)₂ soluble.

### How an indicator works

An indicator is a weak acid whose molecule has one colour, while the ion it forms after losing H⁺ has another. In alkaline solution OH⁻ removes H⁺ from the indicator and the second colour appears. Many plant dyes behave this way: red cabbage juice is red in vinegar, purple in water and green-yellow in soda solution.`,
    `### Ինչն է իրականում նյութը դարձնում ալկալային

1887 թ. շվեդ քիմիկոս **Ս. Արենիուսը** բացատրեց դա․ ջրում ալկալին քայքայվում է իոնների, և բոլոր ալկալիների ընդհանուր իոնը **OH⁻**-ն է․ NaOH → Na⁺ + OH⁻։ Հենց հիդրօքսիդ իոնն է ֆենոլֆտալեինը մորեգույն դարձնում, «օճառային» զգացողություն տալիս և չեզոքացնում թթուները։ Ուրեմն «հիմքերի ընդհանուր հատկությունները» իրականում **մեկ իոնի** հատկություններն են։

Չլուծվող հիմքերը, օրինակ՝ Cu(OH)₂, ջրին գրեթե OH⁻ իոններ չեն տալիս։ Ահա թե ինչու դրանք չեն փոխում ինդիկատորների գույնը և չեն փոխազդում աղերի կամ թթվային օքսիդների հետ, բայց լուծվում են թթուներում․ թթվի H⁺-ը պինդ նյութից դուրս է քաշում OH⁻-ը։

### Ինչու են ալկալիները սայթաքուն և վտանգավոր

Ալկալին փոխազդում է մաշկի ճարպերի հետ և դրանք վերածում օճառի․ մատների սայթաքուն զգացողությունը քո սեփական մաշկի լուծվելն է։ Ալկալիները հատկապես վտանգավոր են աչքերի համար, որովհետև շարունակում են փոխազդել հյուսվածքի ավելի խորը շերտերի հետ։ Եթե ալկալին ընկել է մաշկին, լվա շատ ջրով, հետո թույլ թթվով (նոսր քացախ կամ բորաթթու)։

### Ինչու է ուժը խմբում վերևից ներքև աճում

Ուժով՝ LiOH < NaOH < KOH < CsOH։ IA խմբում ներքև մետաղի իոնները մեծանում են, ուստի ավելի թույլ են պահում OH⁻-ը և ավելի հեշտ են այն տալիս ջրին։ IIA խմբում ներքև հիդրօքսիդներն ավելի լուծելի են դառնում․ Mg(OH)₂-ը գրեթե չի լուծվում, Ca(OH)₂-ը քիչ է լուծվում, Ba(OH)₂-ը լուծվում է։

### Ինչպես է աշխատում ինդիկատորը

Ինդիկատորը թույլ թթու է, որի մոլեկուլն ունի մի գույն, իսկ H⁺ կորցնելուց հետո առաջացած իոնը՝ այլ գույն։ Ալկալային լուծույթում OH⁻-ը ինդիկատորից խլում է H⁺, և երևում է երկրորդ գույնը։ Շատ բուսական ներկեր այդպես են պահում իրենց․ կարմիր կաղամբի հյութը քացախում կարմիր է, ջրում՝ մանուշակագույն, սոդայի լուծույթում՝ կանաչադեղնավուն։`,
    `### Что на самом деле делает вещество щелочным

В 1887 г. шведский химик **С. Аррениус** объяснил это: в воде щёлочь распадается на ионы, и общий для всех щелочей ион — **OH⁻**: NaOH → Na⁺ + OH⁻. Именно гидроксид-ион окрашивает фенолфталеин в малиновый цвет, «мылится» и нейтрализует кислоты. Значит, «общие свойства оснований» — это на самом деле свойства **одного иона**.

Нерастворимые основания, например Cu(OH)₂, почти не дают воде ионов OH⁻. Поэтому они не меняют окраску индикаторов и не реагируют с солями и кислотными оксидами, но растворяются в кислотах: H⁺ кислоты вытаскивает OH⁻ из твёрдого вещества.

### Почему щёлочи скользкие и опасные

Щёлочь реагирует с жирами кожи и превращает их в мыло: скользкость на пальцах — это растворяется ваша собственная кожа. Особенно опасны щёлочи для глаз, потому что продолжают реагировать всё глубже в ткани. Если щёлочь попала на кожу, промойте большим количеством воды, затем слабой кислотой (разбавленным уксусом или борной кислотой).

### Почему сила растёт вниз по группе

По силе: LiOH < NaOH < KOH < CsOH. Вниз по IA группе ионы металлов становятся крупнее, поэтому слабее держат OH⁻ и легче отдают его в воду. Вниз по IIA группе гидроксиды становятся и растворимее: Mg(OH)₂ почти нерастворим, Ca(OH)₂ малорастворим, Ba(OH)₂ растворим.

### Как работает индикатор

Индикатор — слабая кислота, молекула которой имеет один цвет, а ион, образовавшийся после потери H⁺, — другой. В щелочном растворе OH⁻ отнимает у индикатора H⁺, и появляется второй цвет. Так ведут себя многие растительные красители: сок красной капусты красный в уксусе, фиолетовый в воде и зелёно-жёлтый в растворе соды.`,
  ),

  acids: th(
    `### What all acids share

Arrhenius's answer: in water every acid gives **hydrogen ions H⁺**: HCl → H⁺ + Cl⁻. The sour taste, the red litmus, the fizzing with zinc all come from H⁺. A neat proof: dry hydrogen chloride gas does **not** turn dry blue litmus red; add a drop of water and the paper turns red at once. Without water there are no free ions. (In fact H⁺ never floats alone: it joins a water molecule, H₃O⁺, but we usually write H⁺ for short.)

### Why zinc fizzes and copper does not

When zinc meets an acid, zinc atoms give electrons to H⁺ ions: Zn + 2H⁺ → Zn²⁺ + H₂. A metal can do this only if it gives up electrons **more readily than hydrogen does**: that is exactly what "to the left of hydrogen in the reactivity series" means. Copper holds its electrons more tightly, so H⁺ cannot take them.

### An important exception

Nitric acid of any strength and concentrated sulfuric acid behave differently: with metals they give **no hydrogen**. In them the strongest electron-taker is not H⁺ but the residue (NO₃⁻ or SO₄²⁻), so they even dissolve copper, giving NO, NO₂ or SO₂ and water. Cold concentrated H₂SO₄ and HNO₃ do not attack iron and aluminium at all: a thin oxide film protects the metal, so these acids are carried in steel tanks. You will study this in grade 9.

### Strong and weak acids

In a **strong** acid (HCl, HNO₃, H₂SO₄) almost every molecule gives up its H⁺. In a **weak** acid (acetic, carbonic, hydrosulfuric) only a small share does. That is why vinegar can be eaten, while hydrochloric acid of the same concentration burns. Your stomach makes dilute hydrochloric acid (about 0.3–0.5 %): it kills bacteria and helps break down proteins.`,
    `### Ինչն է ընդհանուր բոլոր թթուների համար

Արենիուսի պատասխանը․ ջրում յուրաքանչյուր թթու տալիս է **ջրածնի իոններ H⁺**․ HCl → H⁺ + Cl⁻։ Թթու համը, կարմիր լակմուսը, ցինկի հետ փրփրելը՝ բոլորը H⁺-ից են։ Հետաքրքիր ապացույց․ չոր քլորաջրածին գազը չոր կապույտ լակմուսը կարմիր **չի** դարձնում, բայց ավելացրու մեկ կաթիլ ջուր, և թուղթն անմիջապես կկարմրի։ Առանց ջրի ազատ իոններ չկան։ (Իրականում H⁺-ը երբեք մենակ չի լողում․ այն միանում է ջրի մոլեկուլին՝ H₃O⁺, բայց կարճ գրում ենք H⁺։)

### Ինչու է ցինկը փրփրում, իսկ պղինձը՝ ոչ

Երբ ցինկը հանդիպում է թթվի, ցինկի ատոմները էլեկտրոններ են տալիս H⁺ իոններին․ Zn + 2H⁺ → Zn²⁺ + H₂։ Մետաղը կարող է դա անել միայն այն դեպքում, երբ էլեկտրոնները տալիս է **ավելի հեշտ, քան ջրածինը**․ հենց դա է նշանակում «ակտիվության շարքում ջրածնից ձախ»։ Պղինձն իր էլեկտրոններն ավելի ամուր է պահում, ուստի H⁺-ը չի կարող դրանք վերցնել։

### Կարևոր բացառություն

Ցանկացած խտության ազոտական թթուն և խիտ ծծմբական թթուն այլ կերպ են պահում իրենց․ մետաղների հետ **ջրածին չեն տալիս**։ Դրանցում ամենաուժեղ էլեկտրոն վերցնողը ոչ թե H⁺-ն է, այլ թթվային մնացորդը (NO₃⁻ կամ SO₄²⁻), ուստի դրանք լուծում են նույնիսկ պղինձը՝ առաջացնելով NO, NO₂ կամ SO₂ և ջուր։ Սառը խիտ H₂SO₄-ը և HNO₃-ը ընդհանրապես չեն ազդում երկաթի և ալյումինի վրա․ օքսիդի բարակ թաղանթը պաշտպանում է մետաղը, ուստի այս թթուները փոխադրում են պողպատե ցիստեռններով։ Սա կուսումնասիրես 9-րդ դասարանում։

### Ուժեղ և թույլ թթուներ

**Ուժեղ** թթվում (HCl, HNO₃, H₂SO₄) գրեթե յուրաքանչյուր մոլեկուլ տալիս է իր H⁺-ը։ **Թույլ** թթվում (քացախաթթու, ածխաթթու, ծծմբաջրածնական թթու)՝ միայն փոքր մասը։ Ահա թե ինչու քացախը կարելի է ուտել, իսկ նույն խտության աղաթթուն այրում է։ Քո ստամոքսը նոսր աղաթթու է արտադրում (մոտ 0,3–0,5 %)․ այն ոչնչացնում է մանրէները և օգնում սպիտակուցները քայքայել։`,
    `### Что общего у всех кислот

Ответ Аррениуса: в воде каждая кислота даёт **ионы водорода H⁺**: HCl → H⁺ + Cl⁻. Кислый вкус, красный лакмус, шипение с цинком — всё это от H⁺. Наглядное доказательство: сухой газ хлороводород **не** окрашивает сухую синюю лакмусовую бумажку в красный цвет; добавьте каплю воды — и бумажка сразу покраснеет. Без воды свободных ионов нет. (На самом деле H⁺ никогда не плавает в одиночку: он присоединяется к молекуле воды, H₃O⁺, но для краткости пишут H⁺.)

### Почему цинк шипит, а медь нет

Когда цинк встречается с кислотой, атомы цинка отдают электроны ионам H⁺: Zn + 2H⁺ → Zn²⁺ + H₂. Металл может это сделать, только если отдаёт электроны **легче, чем водород**: именно это и означает «левее водорода в ряду активности». Медь держит свои электроны крепче, поэтому H⁺ не может их забрать.

### Важное исключение

Азотная кислота любой концентрации и концентрированная серная ведут себя иначе: с металлами они **не дают водорода**. В них самый сильный «захватчик» электронов — не H⁺, а кислотный остаток (NO₃⁻ или SO₄²⁻), поэтому они растворяют даже медь, выделяя NO, NO₂ или SO₂ и воду. Холодные концентрированные H₂SO₄ и HNO₃ вообще не действуют на железо и алюминий: тонкая оксидная плёнка защищает металл, поэтому эти кислоты перевозят в стальных цистернах. Это вы изучите в 9 классе.

### Сильные и слабые кислоты

В **сильной** кислоте (HCl, HNO₃, H₂SO₄) почти каждая молекула отдаёт свой H⁺. В **слабой** (уксусная, угольная, сероводородная) — лишь малая доля. Поэтому уксус можно есть, а соляная кислота той же концентрации обжигает. Ваш желудок вырабатывает разбавленную соляную кислоту (около 0,3–0,5 %): она убивает бактерии и помогает расщеплять белки.`,
  ),

  salts: th(
    `### Why some salts do not dissolve

Whether a salt dissolves is a tug of war. The ions attract **each other** in the crystal; water molecules attract **the ions**. If the ions are small and highly charged and fit together tightly, the crystal wins and the salt is insoluble: BaSO₄ (Ba²⁺ and SO₄²⁻), CaCO₃, AgCl. Ions with charge 1 (Na⁺, K⁺, NO₃⁻) are held loosely, so their salts nearly all dissolve. This is the reason behind the "rules" of the solubility table.

### Why a precipitate drives the reaction

In solution, ions are free to swap partners all the time. Mixing NaCl and KNO₃ solutions just gives a soup of four kinds of ions; nothing is removed, so we cannot say a reaction "happened". But if Ag⁺ meets Cl⁻, they lock together into solid AgCl and drop out of the solution. They can no longer swap back, so the process runs **to the end**. A gas that bubbles away or water (whose molecules hardly break into ions) removes ions in the same way.

### Recognising ions: qualitative tests

| Ion | Add | You see |
|---|---|---|
| Cl⁻ | AgNO₃ | white curdy precipitate AgCl |
| SO₄²⁻ | BaCl₂ | white precipitate BaSO₄, insoluble in acids |
| CO₃²⁻ | an acid | bubbles of CO₂ that turn limewater cloudy |
| Cu²⁺ | NaOH | blue precipitate Cu(OH)₂ |
| Fe³⁺ | NaOH | brown precipitate Fe(OH)₃ |

### Salts that are "in between"

Not every salt is metal + residue only. **Acid salts** keep some hydrogen: NaHCO₃ (baking soda), NaHSO₄. **Basic salts** keep some hydroxide groups: the green copper mineral malachite is (CuOH)₂CO₃, and the green patina on old bronze statues and copper roofs is a similar basic salt. Acid salts form when there is too little base for the acid, for example NaOH + H₂SO₄ → NaHSO₄ + H₂O.`,
    `### Ինչու որոշ աղեր չեն լուծվում

Աղի լուծվելը պարանաձգություն է։ Բյուրեղում իոնները ձգում են **իրար**, ջրի մոլեկուլները ձգում են **իոններին**։ Եթե իոնները փոքր են, մեծ լիցքով և ամուր են իրար «նստում», բյուրեղն է հաղթում, և աղը չի լուծվում․ BaSO₄ (Ba²⁺ և SO₄²⁻), CaCO₃, AgCl։ 1 լիցքով իոնները (Na⁺, K⁺, NO₃⁻) թույլ են պահվում, ուստի դրանց աղերը գրեթե բոլորը լուծվում են։ Սա է լուծելիության աղյուսակի «կանոնների» պատճառը։

### Ինչու է նստվածքն ընթացք տալիս ռեակցիային

Լուծույթում իոններն անընդհատ ազատ փոխում են զույգերին։ NaCl-ի և KNO₃-ի լուծույթները խառնելիս ստացվում է պարզապես չորս տեսակի իոնների «ապուր»․ ոչինչ չի հեռանում, ուստի չենք կարող ասել, թե ռեակցիա «կատարվեց»։ Բայց եթե Ag⁺-ը հանդիպում է Cl⁻-ին, դրանք ամուր միանում են պինդ AgCl-ի և դուրս ընկնում լուծույթից։ Այլևս չեն կարող հետ փոխվել, ուստի գործընթացն ընթանում է **մինչև վերջ**։ Դուրս թռչող գազը կամ ջուրը (որի մոլեկուլները գրեթե չեն քայքայվում իոնների) նույն կերպ հեռացնում են իոնները։

### Իոնների ճանաչում․ որակական ռեակցիաներ

| Իոն | Ավելացնում ենք | Տեսնում ենք |
|---|---|---|
| Cl⁻ | AgNO₃ | սպիտակ, շոռաձև նստվածք AgCl |
| SO₄²⁻ | BaCl₂ | սպիտակ նստվածք BaSO₄, թթուներում չի լուծվում |
| CO₃²⁻ | թթու | CO₂-ի պղպջակներ, որոնք պղտորում են կրաջուրը |
| Cu²⁺ | NaOH | կապույտ նստվածք Cu(OH)₂ |
| Fe³⁺ | NaOH | գորշ նստվածք Fe(OH)₃ |

### «Միջանկյալ» աղեր

Ոչ բոլոր աղերն են միայն մետաղ + մնացորդ։ **Թթու աղերը** պահպանում են ջրածնի մի մասը․ NaHCO₃ (խմելու սոդա), NaHSO₄։ **Հիմնային աղերը** պահպանում են հիդրօքսիդ խմբերի մի մասը․ պղնձի կանաչ միներալը՝ մալաքիտը, (CuOH)₂CO₃ է, իսկ հին բրոնզե արձանների և պղնձե տանիքների կանաչ փառը նման հիմնային աղ է։ Թթու աղերն առաջանում են, երբ թթվի համար հիմքը քիչ է, օրինակ՝ NaOH + H₂SO₄ → NaHSO₄ + H₂O։`,
    `### Почему некоторые соли не растворяются

Растворение соли — перетягивание каната. В кристалле ионы притягивают **друг друга**, молекулы воды притягивают **ионы**. Если ионы маленькие, сильно заряженные и плотно прилегают друг к другу, побеждает кристалл, и соль нерастворима: BaSO₄ (Ba²⁺ и SO₄²⁻), CaCO₃, AgCl. Ионы с зарядом 1 (Na⁺, K⁺, NO₃⁻) удерживаются слабо, поэтому их соли почти все растворимы. В этом причина «правил» таблицы растворимости.

### Почему осадок двигает реакцию

В растворе ионы всё время свободно меняют партнёров. Смешав растворы NaCl и KNO₃, получим просто «суп» из четырёх видов ионов; ничего не уходит, поэтому нельзя сказать, что реакция «произошла». Но если Ag⁺ встречается с Cl⁻, они прочно соединяются в твёрдый AgCl и выпадают из раствора. Поменяться обратно они уже не могут, поэтому процесс идёт **до конца**. Улетающий газ или вода (молекулы которой почти не распадаются на ионы) так же удаляют ионы.

### Как узнать ион: качественные реакции

| Ион | Добавляем | Видим |
|---|---|---|
| Cl⁻ | AgNO₃ | белый творожистый осадок AgCl |
| SO₄²⁻ | BaCl₂ | белый осадок BaSO₄, не растворимый в кислотах |
| CO₃²⁻ | кислоту | пузырьки CO₂, мутящие известковую воду |
| Cu²⁺ | NaOH | синий осадок Cu(OH)₂ |
| Fe³⁺ | NaOH | бурый осадок Fe(OH)₃ |

### «Промежуточные» соли

Не всякая соль — только металл + остаток. **Кислые соли** сохраняют часть водорода: NaHCO₃ (питьевая сода), NaHSO₄. **Основные соли** сохраняют часть гидроксогрупп: зелёный медный минерал малахит — это (CuOH)₂CO₃, а зелёная патина на старых бронзовых статуях и медных крышах — похожая основная соль. Кислые соли образуются, когда основания на кислоту не хватает, например NaOH + H₂SO₄ → NaHSO₄ + H₂O.`,
  ),

  "genetic-relationships": th(
    `### What stays the same along a series

In the series Ca → CaO → Ca(OH)₂ → CaCl₂ one thing never changes: the **calcium atom** and its oxidation state (+2 from CaO on). In P → P₂O₅ → H₃PO₄ → Na₃PO₄ the phosphorus is +5 from the oxide onwards. A genetic series is the story of **one element** moving from compound to compound. That is the meaning of "genetic": every member is descended from the same element. The very first step (Ca → CaO, P → P₂O₅) changes the oxidation state from 0; after that the element is only "re-dressed" by exchange reactions.

### Why some steps need a detour

CuO does not react with water, so Cu(OH)₂ cannot be made directly. Why? Copper(II) oxide is not ionic enough: its O²⁻ is held too tightly in the crystal to take H⁺ from water. The way round is through a soluble salt: CuO → CuCl₂ → Cu(OH)₂. The same holds for most metals right of magnesium in the reactivity series and for SiO₂, which does not react with water: silicic acid is made from a silicate and a stronger acid.

### Planning a synthesis backwards

Chemists often plan from the **end**. Task: make BaSO₄ from barium.

1. BaSO₄ is insoluble, so it can be made by exchange: a soluble barium salt + a soluble sulfate.
2. A soluble barium salt: BaCl₂, which comes from Ba(OH)₂ + HCl.
3. Ba(OH)₂ comes from BaO + H₂O, and BaO from 2Ba + O₂.

Reading forwards: Ba → BaO → Ba(OH)₂ → BaCl₂ → BaSO₄. Each arrow needs a reason to go: a precipitate, a gas, water, or a more active metal displacing a less active one.

### The two series meet in a salt

A metal series and a non-metal series always end at the same kind of substance: a **salt**. That is why salts can be made in so many ways (base + acid, basic oxide + acidic oxide, metal + non-metal...): each is a different meeting point of the two series.`,
    `### Ինչն է անփոփոխ մնում շարքում

Ca → CaO → Ca(OH)₂ → CaCl₂ շարքում մի բան երբեք չի փոխվում․ **կալցիումի ատոմը** և նրա օքսիդացման աստիճանը (+2՝ CaO-ից սկսած)։ P → P₂O₅ → H₃PO₄ → Na₃PO₄ շարքում ֆոսֆորը +5 է՝ օքսիդից սկսած։ Ծագումնաբանական շարքը **մեկ տարրի** պատմությունն է, որը միացությունից միացություն է անցնում։ Հենց դա է «ծագումնաբանական» բառի իմաստը․ շարքի յուրաքանչյուր անդամ սերում է նույն տարրից։ Միայն առաջին քայլը (Ca → CaO, P → P₂O₅) փոխում է օքսիդացման աստիճանը 0-ից․ դրանից հետո տարրը փոխանակման ռեակցիաներով միայն «վերազգեստավորվում» է։

### Ինչու են որոշ քայլեր շրջանցում պահանջում

CuO-ն ջրի հետ չի փոխազդում, ուստի Cu(OH)₂-ը անմիջապես ստանալ չի կարելի։ Ինչու՞։ Պղնձի(II) օքսիդը բավականաչափ իոնային չէ․ նրա O²⁻-ը բյուրեղում չափազանց ամուր է պահվում, որ ջրից H⁺ վերցնի։ Շրջանցման ճանապարհը լուծելի աղի միջով է․ CuO → CuCl₂ → Cu(OH)₂։ Նույնը վերաբերում է ակտիվության շարքում մագնեզիումից աջ գտնվող մետաղների մեծ մասին և SiO₂-ին, որը ջրի հետ չի փոխազդում․ սիլիցիումական թթուն ստանում են սիլիկատից և ավելի ուժեղ թթվից։

### Սինթեզը պլանավորել վերջից

Քիմիկոսները հաճախ պլանավորում են **վերջից**։ Խնդիր․ բարիումից ստանալ BaSO₄։

1. BaSO₄-ը չի լուծվում, ուստի այն կարելի է ստանալ փոխանակմամբ՝ բարիումի լուծելի աղ + լուծելի սուլֆատ։
2. Բարիումի լուծելի աղ՝ BaCl₂, որը ստացվում է Ba(OH)₂ + HCl-ից։
3. Ba(OH)₂-ը ստացվում է BaO + H₂O-ից, իսկ BaO-ն՝ 2Ba + O₂-ից։

Առաջ կարդալով՝ Ba → BaO → Ba(OH)₂ → BaCl₂ → BaSO₄։ Յուրաքանչյուր սլաք ընթանալու պատճառ է պահանջում՝ նստվածք, գազ, ջուր կամ ավելի ակտիվ մետաղի կողմից պակաս ակտիվի դուրս մղում։

### Երկու շարքը հանդիպում են աղում

Մետաղի և ոչ մետաղի շարքերը միշտ ավարտվում են միևնույն տեսակի նյութով՝ **աղով**։ Ահա թե ինչու աղերը կարելի է ստանալ այդքան շատ եղանակներով (հիմք + թթու, հիմնային օքսիդ + թթվային օքսիդ, մետաղ + ոչ մետաղ...)․ յուրաքանչյուրը երկու շարքերի հանդիպման տարբեր կետ է։`,
    `### Что остаётся неизменным в ряду

В ряду Ca → CaO → Ca(OH)₂ → CaCl₂ одно не меняется никогда: **атом кальция** и его степень окисления (+2, начиная с CaO). В ряду P → P₂O₅ → H₃PO₄ → Na₃PO₄ фосфор +5, начиная с оксида. Генетический ряд — история **одного элемента**, переходящего из соединения в соединение. В этом и смысл слова «генетический»: каждый член ряда происходит от одного элемента. Только первый шаг (Ca → CaO, P → P₂O₅) меняет степень окисления с 0; дальше элемент лишь «переодевается» реакциями обмена.

### Почему некоторые шаги требуют обхода

CuO не реагирует с водой, поэтому Cu(OH)₂ прямо не получить. Почему? Оксид меди(II) недостаточно ионный: его O²⁻ слишком прочно удерживается в кристалле, чтобы отнять H⁺ у воды. Обходной путь — через растворимую соль: CuO → CuCl₂ → Cu(OH)₂. То же верно для большинства металлов правее магния в ряду активности и для SiO₂, который не реагирует с водой: кремниевую кислоту получают из силиката и более сильной кислоты.

### Планируем синтез с конца

Химики часто планируют **с конца**. Задача: получить BaSO₄ из бария.

1. BaSO₄ нерастворим, значит, его можно получить обменом: растворимая соль бария + растворимый сульфат.
2. Растворимая соль бария — BaCl₂, она получается из Ba(OH)₂ + HCl.
3. Ba(OH)₂ получается из BaO + H₂O, а BaO — из 2Ba + O₂.

Читая вперёд: Ba → BaO → Ba(OH)₂ → BaCl₂ → BaSO₄. Каждой стрелке нужна причина идти: осадок, газ, вода или вытеснение менее активного металла более активным.

### Два ряда встречаются в соли

Ряд металла и ряд неметалла всегда заканчиваются одним и тем же видом вещества — **солью**. Поэтому соли можно получить столькими способами (основание + кислота, основный оксид + кислотный оксид, металл + неметалл...): каждый — это своя точка встречи двух рядов.`,
  ),

  "periodic-law": th(
    `### The prediction that convinced the world

Mendeleev did not just sort the known elements; he left **gaps** and described the missing elements in detail. Below silicon he predicted "eka-silicon". In 1886 C. Winkler discovered germanium. Compare:

| Property | Predicted (1871) | Germanium (1886) |
|---|---|---|
| atomic mass | 72 | 72.6 |
| density | 5.5 g/cm³ | 5.35 g/cm³ |
| oxide | EsO₂, density 4.7 | GeO₂, density 4.7 |
| chloride | EsCl₄, boils below 100 °C | GeCl₄, boils at 86 °C |

A theory that predicts the unknown so precisely is hard to doubt. Gallium (1875) and scandium (1879) matched his predictions too.

### When Mendeleev broke his own rule

Tellurium (Ar 127.6) is heavier than iodine (127). By mass order iodine should come first, but then iodine would fall among oxygen and sulfur, and tellurium among the halogens, against all their properties. Mendeleev trusted the properties and put tellurium first, assuming the masses were wrong. The real reason came in 1913: H. Moseley measured the **nuclear charge** of the elements with X-rays. Tellurium has charge 52 and iodine 53, so the order by charge is correct. That is why the modern law speaks of nuclear charge, not mass.

### Why properties repeat

Periodicity comes from the electrons. Each new period starts a new outer shell, and the number of outer electrons runs again from 1 to 8. Elements with the same number of outer electrons (Li, Na, K with 1; F, Cl, Br with 7) react alike. So the table is not just a convenient list: its shape is the shape of the atom's electron shells.`,
    `### Կանխատեսումը, որը համոզեց աշխարհին

Մենդելեևը միայն չդասավորեց հայտնի տարրերը․ նա թողեց **դատարկ տեղեր** և մանրամասն նկարագրեց բացակայող տարրերը։ Սիլիցիումից ներքև նա կանխատեսեց «էկասիլիցիում»։ 1886 թ. Կ. Վինկլերը հայտնաբերեց գերմանիումը։ Համեմատիր․

| Հատկություն | Կանխատեսված (1871) | Գերմանիում (1886) |
|---|---|---|
| ատոմային զանգված | 72 | 72,6 |
| խտություն | 5,5 գ/սմ³ | 5,35 գ/սմ³ |
| օքսիդ | EsO₂, խտությունը՝ 4,7 | GeO₂, խտությունը՝ 4,7 |
| քլորիդ | EsCl₄, եռում է 100 °C-ից ցածր | GeCl₄, եռում է 86 °C-ում |

Տեսությանը, որն անհայտն այդքան ճշգրիտ է կանխատեսում, դժվար է կասկածել։ Գալիումը (1875) և սկանդիումը (1879) նույնպես համապատասխանեցին նրա կանխատեսումներին։

### Երբ Մենդելեևը խախտեց իր իսկ կանոնը

Տելուրը (Ar 127,6) յոդից (127) ծանր է։ Ըստ զանգվածի՝ յոդը պետք է առաջ գար, բայց այդ դեպքում յոդը կընկներ թթվածնի ու ծծմբի կողքը, իսկ տելուրը՝ հալոգենների մեջ՝ հակառակ իրենց բոլոր հատկություններին։ Մենդելեևը վստահեց հատկություններին և տելուրը դրեց առաջ՝ ենթադրելով, որ զանգվածները սխալ են։ Իրական պատճառը պարզվեց 1913 թ.․ Հ. Մոզլին ռենտգենյան ճառագայթներով չափեց տարրերի **միջուկի լիցքը**։ Տելուրի լիցքը 52 է, յոդինը՝ 53, ուստի ըստ լիցքի կարգը ճիշտ է։ Ահա թե ինչու ժամանակակից օրենքը խոսում է միջուկի լիցքի, ոչ թե զանգվածի մասին։

### Ինչու են հատկությունները կրկնվում

Պարբերականությունը գալիս է էլեկտրոններից։ Յուրաքանչյուր նոր պարբերություն սկսում է նոր արտաքին շերտ, և արտաքին էլեկտրոնների թիվը նորից աճում է 1-ից մինչև 8։ Արտաքին էլեկտրոնների նույն թվով տարրերը (Li, Na, K՝ 1-ական, F, Cl, Br՝ 7-ական) նման են փոխազդում։ Ուրեմն աղյուսակը պարզապես հարմար ցուցակ չէ․ նրա ձևը ատոմի էլեկտրոնային շերտերի ձևն է։`,
    `### Предсказание, которое убедило мир

Менделеев не просто расставил известные элементы — он оставил **пустые места** и подробно описал недостающие элементы. Под кремнием он предсказал «экасилиций». В 1886 г. К. Винклер открыл германий. Сравните:

| Свойство | Предсказано (1871) | Германий (1886) |
|---|---|---|
| атомная масса | 72 | 72,6 |
| плотность | 5,5 г/см³ | 5,35 г/см³ |
| оксид | EsO₂, плотность 4,7 | GeO₂, плотность 4,7 |
| хлорид | EsCl₄, кипит ниже 100 °C | GeCl₄, кипит при 86 °C |

В теории, которая так точно предсказывает неизвестное, трудно сомневаться. Галлий (1875) и скандий (1879) тоже совпали с его предсказаниями.

### Когда Менделеев нарушил собственное правило

Теллур (Ar 127,6) тяжелее иода (127). По порядку масс иод должен идти первым, но тогда иод оказался бы рядом с кислородом и серой, а теллур — среди галогенов, вопреки всем их свойствам. Менделеев доверился свойствам и поставил теллур первым, предположив, что массы определены неверно. Настоящая причина выяснилась в 1913 г.: Г. Мозли измерил с помощью рентгеновских лучей **заряд ядра** элементов. У теллура заряд 52, у иода 53, так что порядок по заряду верен. Поэтому современный закон говорит о заряде ядра, а не о массе.

### Почему свойства повторяются

Периодичность идёт от электронов. Каждый новый период начинает новый внешний слой, и число внешних электронов снова растёт от 1 до 8. Элементы с одинаковым числом внешних электронов (Li, Na, K — по 1; F, Cl, Br — по 7) реагируют похоже. Значит, таблица — не просто удобный список: её форма — это форма электронных оболочек атома.`,
  ),

  "atomic-structure": th(
    `### How we know the nucleus is there

Around 1900 the atom was pictured as a "plum pudding": positive matter spread through the whole atom with electrons stuck in it. In 1909–1911 E. Rutherford's team fired **alpha particles** (small, fast, positive) at gold foil only a few hundred atoms thick. If the pudding model were right, all of them should pass straight through. Almost all did, but about **1 in 8,000** bounced back sharply. Rutherford said it was "as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you".

The only explanation: all the positive charge and nearly all the mass sit in a **tiny nucleus**, and the rest of the atom is almost empty. The nucleus is about 100,000 times smaller than the atom. If an atom were a football stadium, the nucleus would be a pea on the centre spot, and it would still hold 99.95 % of the mass.

### Why electrons are in shells

Electrons do not sit at any distance from the nucleus. Each shell has its own **energy**: electrons close to the nucleus are held tightly, those far away weakly. An atom can take in or give out energy only in fixed portions, by an electron jumping between shells. That is why each element, heated in a flame, gives light of its own colours: sodium yellow, copper green, lithium red. These line "fingerprints" let astronomers tell what stars are made of.

The limit 2n² (2, 8, 18, 32) comes from the number of places in each shell; you will see where these places come from in grade 11.

### Isotopes at work

Isotopes of one element react alike (the same electrons), but their nuclei differ. Unstable nuclei, such as carbon-14, slowly decay. A living plant keeps a steady share of carbon-14; after death the share halves every 5,730 years. Measuring it tells how old a piece of wood, bone or cloth is: **radiocarbon dating**.`,
    `### Որտեղից գիտենք, որ միջուկ կա

Մոտ 1900 թ. ատոմը պատկերացնում էին «չամիչով պուդինգի» տեսքով․ դրական նյութը տարածված է ամբողջ ատոմով, և էլեկտրոնները խրված են նրա մեջ։ 1909–1911 թթ. Է. Ռեզերֆորդի խումբը **ալֆա մասնիկներ** (փոքր, արագ, դրական) արձակեց ընդամենը մի քանի հարյուր ատոմ հաստությամբ ոսկե թիթեղի վրա։ Եթե պուդինգի մոդելը ճիշտ լիներ, դրանք բոլորը պետք է ուղիղ անցնեին։ Գրեթե բոլորն անցան, բայց մոտ **8000-ից 1-ը** կտրուկ ետ թռավ։ Ռեզերֆորդն ասաց, որ դա նման էր այն բանին, «եթե 15 դյույմանոց արկ արձակեիր ծխախոտի թղթի վրա, և այն ետ գար ու հարվածեր քեզ»։

Միակ բացատրությունը․ ամբողջ դրական լիցքը և գրեթե ամբողջ զանգվածը գտնվում են **փոքրիկ միջուկում**, իսկ ատոմի մնացած մասը գրեթե դատարկ է։ Միջուկը մոտ 100 000 անգամ փոքր է ատոմից։ Եթե ատոմը ֆուտբոլային մարզադաշտ լիներ, միջուկը կլիներ ոլոռի հատիկ դաշտի կենտրոնում, և այդ ոլոռը կպարունակեր զանգվածի 99,95 %-ը։

### Ինչու են էլեկտրոնները շերտերում

Էլեկտրոնները միջուկից ցանկացած հեռավորության վրա չեն լինում։ Յուրաքանչյուր շերտ ունի իր **էներգիան**․ միջուկին մոտ էլեկտրոններն ամուր են պահվում, հեռու գտնվողները՝ թույլ։ Ատոմը կարող է էներգիա կլանել կամ անջատել միայն որոշակի բաժիններով, երբ էլեկտրոնը թռչում է շերտից շերտ։ Ահա թե ինչու յուրաքանչյուր տարր, բոցում տաքացնելիս, տալիս է իր գույների լույսը․ նատրիումը՝ դեղին, պղինձը՝ կանաչ, լիթիումը՝ կարմիր։ Գծային այդ «մատնահետքերով» աստղագետները պարզում են, թե ինչից են կազմված աստղերը։

2n² սահմանը (2, 8, 18, 32) գալիս է յուրաքանչյուր շերտում տեղերի թվից․ թե որտեղից են այդ տեղերը, կտեսնես 11-րդ դասարանում։

### Իզոտոպներն աշխատանքի մեջ

Մեկ տարրի իզոտոպները նման են փոխազդում (նույն էլեկտրոնները), բայց նրանց միջուկները տարբեր են։ Անկայուն միջուկները, օրինակ՝ ածխածին-14-ը, դանդաղ տրոհվում են։ Կենդանի բույսը պահպանում է ածխածին-14-ի հաստատուն բաժին, իսկ մահից հետո այդ բաժինը կիսվում է յուրաքանչյուր 5730 տարին մեկ։ Այն չափելով՝ պարզում են փայտի, ոսկորի կամ գործվածքի կտորի տարիքը․ դա **ռադիոածխածնային թվագրումն** է։`,
    `### Откуда мы знаем, что ядро существует

Около 1900 г. атом представляли «пудингом с изюмом»: положительное вещество распределено по всему атому, а электроны вкраплены в него. В 1909–1911 гг. группа Э. Резерфорда обстреливала **альфа-частицами** (маленькими, быстрыми, положительными) золотую фольгу толщиной всего в несколько сотен атомов. Если бы модель пудинга была верна, все частицы прошли бы насквозь. Почти все и прошли, но примерно **1 из 8000** резко отскакивала назад. Резерфорд сказал, что это было, «как если бы вы выстрелили 15-дюймовым снарядом в папиросную бумагу, а он отскочил и попал в вас».

Единственное объяснение: весь положительный заряд и почти вся масса сосредоточены в **крошечном ядре**, а остальная часть атома почти пуста. Ядро примерно в 100 000 раз меньше атома. Если бы атом был футбольным стадионом, ядро было бы горошиной в центре поля — и эта горошина содержала бы 99,95 % массы.

### Почему электроны находятся в слоях

Электроны находятся не на любом расстоянии от ядра. У каждого слоя своя **энергия**: электроны близко к ядру удерживаются прочно, далёкие — слабо. Атом может поглощать или испускать энергию только определёнными порциями, когда электрон перескакивает между слоями. Поэтому каждый элемент, нагретый в пламени, даёт свет своих цветов: натрий — жёлтый, медь — зелёный, литий — красный. По этим линейчатым «отпечаткам» астрономы узнают, из чего состоят звёзды.

Предел 2n² (2, 8, 18, 32) происходит от числа мест в каждом слое; откуда берутся эти места, вы увидите в 11 классе.

### Изотопы за работой

Изотопы одного элемента реагируют одинаково (электроны те же), но ядра у них разные. Нестабильные ядра, например углерод-14, медленно распадаются. Живое растение поддерживает постоянную долю углерода-14; после гибели эта доля уменьшается вдвое каждые 5730 лет. Измерив её, узнают возраст куска дерева, кости или ткани — это **радиоуглеродный анализ**.`,
  ),

  "chemical-bond-oxidation-state": th(
    `### Why eight electrons

The noble gases (He, Ne, Ar...) hardly react at all. What they share is a **full outer shell**: 2 electrons for helium, 8 for the others. Such a shell is especially stable: it is hard to take an electron away and there is no room to add one. Other atoms react so as to reach the same arrangement. Sodium (2, 8, 1) loses one electron and becomes Na⁺ with the shell of neon; chlorine (2, 8, 7) gains one and becomes Cl⁻ with the shell of argon. Two chlorine atoms can also **share** a pair: each then "counts" 8 electrons around itself.

### One scale instead of four boxes

The bond types are not separate boxes but points on one scale, set by the **difference in electronegativity** (Δχ) of the two atoms:

| Δχ | Bond | Example |
|---|---|---|
| 0 | non-polar covalent | Cl–Cl (0) |
| up to about 1.7 | polar covalent | H–Cl (0.9), H–O (1.4) |
| above about 1.7 | ionic | Na–Cl (2.1), K–F (3.2) |

The boundary is not sharp: HF (Δχ = 1.9) is still covalent. As Δχ grows, the shared pair shifts further, until it effectively belongs to one atom.

### The bond decides the properties

Ionic substances (NaCl, CaO) form crystals held by strong forces in all directions: they melt at high temperatures, are brittle (a shift brings like charges face to face and they repel) and conduct electricity only when melted or dissolved, when the ions can move. Molecular substances (sugar, iodine, ice) are held together only by weak forces between molecules, so they melt easily.

### Valency and oxidation state are not the same

Valency counts bonds; oxidation state counts the charge an atom **would** have. They often match, but not always:

- N₂: valency III (triple bond), oxidation state 0;
- H₂O₂: oxygen has valency II (H–O–O–H) but oxidation state −1;
- CH₄ and CO₂: carbon has valency IV in both, but oxidation states −4 and +4.`,
    `### Ինչու ութ էլեկտրոն

Ազնիվ գազերը (He, Ne, Ar...) գրեթե չեն փոխազդում։ Նրանց ընդհանուր հատկությունը **լրացված արտաքին շերտն** է․ հելիումինը՝ 2 էլեկտրոն, մյուսներինը՝ 8։ Այդպիսի շերտը հատկապես կայուն է․ նրանից դժվար է էլեկտրոն վերցնել, և նորն ավելացնելու տեղ չկա։ Մյուս ատոմները փոխազդում են այնպես, որ հասնեն նույն դասավորությանը։ Նատրիումը (2, 8, 1) կորցնում է մեկ էլեկտրոն և դառնում Na⁺՝ նեոնի շերտով, քլորը (2, 8, 7) ընդունում է մեկը և դառնում Cl⁻՝ արգոնի շերտով։ Քլորի երկու ատոմ կարող են նաև **ընդհանրացնել** մեկ զույգ․ այդ դեպքում յուրաքանչյուրն իր շուրջը «հաշվում է» 8 էլեկտրոն։

### Չորս արկղի փոխարեն՝ մեկ սանդղակ

Կապի տեսակները առանձին արկղեր չեն, այլ մեկ սանդղակի կետեր, որոնք որոշվում են երկու ատոմների **էլեկտրաբացասականության տարբերությամբ** (Δχ)․

| Δχ | Կապ | Օրինակ |
|---|---|---|
| 0 | ոչ բևեռային կովալենտային | Cl–Cl (0) |
| մինչև մոտ 1,7 | բևեռային կովալենտային | H–Cl (0,9), H–O (1,4) |
| մոտ 1,7-ից ավելի | իոնային | Na–Cl (2,1), K–F (3,2) |

Սահմանը սուր չէ․ HF-ը (Δχ = 1,9) դեռ կովալենտային է։ Δχ-ի աճին զուգընթաց ընդհանուր զույգն ավելի ու ավելի է շեղվում, մինչև փաստորեն պատկանում է մեկ ատոմի։

### Կապը որոշում է հատկությունները

Իոնային նյութերը (NaCl, CaO) առաջացնում են բյուրեղներ, որոնք պահվում են ուժեղ ուժերով բոլոր ուղղություններով․ դրանք հալվում են բարձր ջերմաստիճաններում, փխրուն են (տեղաշարժը միանուն լիցքերը դեմ առ դեմ է բերում, և դրանք վանում են իրար) և էլեկտրական հոսանք հաղորդում են միայն հալված կամ լուծված վիճակում, երբ իոնները կարող են շարժվել։ Մոլեկուլային նյութերը (շաքար, յոդ, սառույց) իրար են պահվում միայն մոլեկուլների միջև եղած թույլ ուժերով, ուստի հեշտ են հալվում։

### Վալենտականությունը և օքսիդացման աստիճանը նույնը չեն

Վալենտականությունը հաշվում է կապերը, օքսիդացման աստիճանը՝ այն լիցքը, որը ատոմը **կունենար**։ Դրանք հաճախ համընկնում են, բայց ոչ միշտ․

- N₂․ վալենտականությունը III է (եռակի կապ), օքսիդացման աստիճանը՝ 0,
- H₂O₂․ թթվածնի վալենտականությունը II է (H–O–O–H), բայց օքսիդացման աստիճանը՝ −1,
- CH₄ և CO₂․ ածխածնի վալենտականությունը երկուսում էլ IV է, բայց օքսիդացման աստիճանները՝ −4 և +4։`,
    `### Почему восемь электронов

Благородные газы (He, Ne, Ar...) почти не вступают в реакции. Их объединяет **завершённый внешний слой**: у гелия 2 электрона, у остальных 8. Такой слой особенно устойчив: электрон из него трудно отнять, а добавить новый некуда. Другие атомы реагируют так, чтобы прийти к тому же устройству. Натрий (2, 8, 1) теряет один электрон и становится Na⁺ с оболочкой неона; хлор (2, 8, 7) принимает один и становится Cl⁻ с оболочкой аргона. Два атома хлора могут и **обобществить** пару: тогда каждый «насчитывает» вокруг себя 8 электронов.

### Одна шкала вместо четырёх коробок

Типы связи — не отдельные коробки, а точки одной шкалы, которую задаёт **разность электроотрицательностей** (Δχ) двух атомов:

| Δχ | Связь | Пример |
|---|---|---|
| 0 | ковалентная неполярная | Cl–Cl (0) |
| примерно до 1,7 | ковалентная полярная | H–Cl (0,9), H–O (1,4) |
| больше примерно 1,7 | ионная | Na–Cl (2,1), K–F (3,2) |

Граница нечёткая: HF (Δχ = 1.9) всё ещё ковалентный. С ростом Δχ общая пара смещается всё сильнее, пока фактически не начинает принадлежать одному атому.

### Связь определяет свойства

Ионные вещества (NaCl, CaO) образуют кристаллы, скреплённые сильными силами во всех направлениях: они плавятся при высоких температурах, хрупки (сдвиг ставит одноимённые заряды друг против друга, и они отталкиваются) и проводят ток только в расплаве или растворе, когда ионы могут двигаться. Молекулярные вещества (сахар, иод, лёд) удерживаются лишь слабыми силами между молекулами, поэтому легко плавятся.

### Валентность и степень окисления — не одно и то же

Валентность считает связи, степень окисления — заряд, который атом **имел бы**. Они часто совпадают, но не всегда:

- N₂: валентность III (тройная связь), степень окисления 0;
- H₂O₂: у кислорода валентность II (H–O–O–H), а степень окисления −1;
- CH₄ и CO₂: у углерода валентность IV в обоих, но степени окисления −4 и +4.`,
  ),
};
