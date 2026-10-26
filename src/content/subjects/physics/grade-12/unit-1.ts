import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Nuclear physics", "Միջուկային ֆիզիկա", "Физика атомного ядра"),
  summary: t("Structure of the nucleus, binding energy, radioactive decay law, nuclear reactions, fission and fusion, dosimetry.", "Միջուկի կառուցվածք, կապի էներգիա, ռադիոակտիվ տրոհման օրենք, միջուկային ռեակցիաներ, տրոհում և սինթեզ, դոզիմետրիա։", "Строение ядра, энергия связи, закон радиоактивного распада, ядерные реакции, деление и синтез, дозиметрия."),
  lessons: [
    lesson(
      "binding-energy",
      ["Nuclear forces; mass defect; binding energy", "Միջուկային ուժեր, զանգվածի պակասորդ, կապի էներգիա", "Ядерные силы; дефект массы; энергия связи"],
      {
        en: ["Describe the proton–neutron structure of the nucleus and the properties of nuclear forces", "Compute the mass defect and the binding energy of a nucleus from a table of masses, Eb = Δm·c² = Δm·931.5 MeV", "Use the specific binding energy curve to explain why fission of heavy nuclei and fusion of light nuclei release energy"],
        hy: ["Նկարագրել միջուկի պրոտոն-նեյտրոնային կառուցվածքը և միջուկային ուժերի հատկությունները", "Զանգվածների աղյուսակով հաշվել միջուկի զանգվածի պակասորդը և կապի էներգիան․ Eկ = Δm·c² = Δm·931,5 ՄէՎ", "Տեսակարար կապի էներգիայի կորով բացատրել, թե ինչու են ծանր միջուկների տրոհումը և թեթև միջուկների սինթեզն էներգիա անջատում"],
        ru: ["Описывать протонно-нейтронное строение ядра и свойства ядерных сил", "Вычислять дефект массы и энергию связи ядра по таблице масс: Eсв = Δm·c² = Δm·931,5 МэВ", "По кривой удельной энергии связи объяснять, почему деление тяжёлых ядер и синтез лёгких выделяют энергию"],
      },
      {
        en: `## Structure of the nucleus

In 1932, after Chadwick discovered the neutron, Ivanenko and Heisenberg proposed the **proton–neutron model**: a nucleus consists of $Z$ protons and $N$ neutrons, together called **nucleons**. The notation \${}^{A}_{Z}X$ gives the **charge number** $Z$ (number of protons, equal to the atomic number) and the **mass number** $A = Z + N$.

> **Isotopes** are nuclei with the same $Z$ but different $N$: \${}^{1}_{1}H$, \${}^{2}_{1}H$ (deuterium), \${}^{3}_{1}H$ (tritium); \${}^{235}_{92}U$ and \${}^{238}_{92}U$.

Nuclear radius: $R \\approx 1{.}2 \\cdot 10^{-15} A^{1/3}$ m; the nucleus is about $10^5$ times smaller than the atom, yet it carries $99{.}97\\%$ of the mass. Nuclear matter has a density of about $2 \\cdot 10^{17}$ kg/m³.

Masses are measured in **atomic mass units**: $1\\ \\text{u} = 1{.}6605 \\cdot 10^{-27}$ kg $= 931{.}5$ MeV/$c^2$. Proton $m_p = 1{.}00728$ u, neutron $m_n = 1{.}00866$ u, electron $m_e = 0{.}00055$ u.

## Nuclear forces

Protons repel each other electrically, so a nucleus can hold together only through a far stronger attraction, the **nuclear (strong) force**. Its properties:

> - it is about $100$ times stronger than the electric force at the same distance;
> - it is **short-range**: it acts only up to about $2 \\cdot 10^{-15}$ m and vanishes beyond;
> - it is **charge-independent**: proton–proton, proton–neutron and neutron–neutron forces are the same;
> - it **saturates**: each nucleon interacts only with its nearest neighbours, so the binding energy grows in proportion to $A$, not to $A^2$.

Because the electric repulsion is long-range and the nuclear attraction is not, heavy stable nuclei need more neutrons than protons ($N/Z \\approx 1{.}5$ for uranium) to dilute the repulsion.

## Mass defect and binding energy

The mass of a nucleus is **smaller** than the sum of the masses of its free nucleons. The difference is the **mass defect**:

$$\\Delta m = Z m_p + N m_n - M_{\\text{nucleus}}.$$

By Einstein's relation, this missing mass is the energy that would be needed to split the nucleus into separate nucleons, the **binding energy**:

$$E_b = \\Delta m\\, c^2 = \\Delta m\\ [\\text{u}] \\cdot 931{.}5\\ \\text{MeV}.$$

If tables list **atomic** masses $M_{\\text{atom}}$ (including electrons), use the hydrogen atom mass $m_H = 1{.}00783$ u instead of $m_p$: $\\Delta m = Z m_H + N m_n - M_{\\text{atom}}$; the electron masses cancel.

## Specific binding energy

The binding energy per nucleon $\\varepsilon = E_b / A$ shows how strongly a nucleus is bound. Plotted against $A$:

| Nucleus | $A$ | $\\varepsilon$, MeV |
|---|---|---|
| \${}^{2}H$ | 2 | 1.1 |
| \${}^{4}He$ | 4 | 7.1 |
| \${}^{12}C$ | 12 | 7.7 |
| \${}^{56}Fe$ | 56 | 8.8 |
| \${}^{120}Sn$ | 120 | 8.5 |
| \${}^{238}U$ | 238 | 7.6 |

The curve rises steeply for light nuclei, reaches a maximum of about $8{.}8$ MeV near iron ($A \\approx 56$–$62$) and slowly falls for heavy nuclei, where the Coulomb repulsion of many protons weakens the binding. Consequently:

> - **fusion** of light nuclei into heavier ones (up to iron) releases energy, because the product is more tightly bound;
> - **fission** of a heavy nucleus into two medium ones releases energy for the same reason, about $0{.}9$ MeV per nucleon, or $200$ MeV per uranium nucleus.

Both are millions of times more energetic than chemical reactions, where the energy per atom is a few eV.

## Worked examples

**Example 1.** Composition of \${}^{27}_{13}Al$, \${}^{56}_{26}Fe$ and \${}^{238}_{92}U$.

Al: 13 protons, $27 - 13 = 14$ neutrons. Fe: 26 protons, 30 neutrons. U: 92 protons, 146 neutrons.

**Example 2.** Mass defect and binding energy of \${}^{4}_{2}He$ (nuclear mass $4{.}00151$ u).

$\\Delta m = 2 \\cdot 1{.}00728 + 2 \\cdot 1{.}00866 - 4{.}00151 = 4{.}03188 - 4{.}00151 = 0{.}03037$ u. $E_b = 0{.}03037 \\cdot 931{.}5 \\approx 28{.}3$ MeV; per nucleon $7{.}07$ MeV.

**Example 3.** Binding energy of deuterium \${}^{2}_{1}H$ (nuclear mass $2{.}01355$ u).

$\\Delta m = 1{.}00728 + 1{.}00866 - 2{.}01355 = 0{.}00239$ u; $E_b = 0{.}00239 \\cdot 931{.}5 \\approx 2{.}22$ MeV, $1{.}11$ MeV per nucleon. The deuteron is weakly bound compared with helium.

**Example 4.** Using atomic masses: \${}^{12}_{6}C$ has atomic mass exactly $12$ u. Find $E_b$.

$\\Delta m = 6 \\cdot 1{.}00783 + 6 \\cdot 1{.}00866 - 12 = 6{.}04698 + 6{.}05196 - 12 = 0{.}09894$ u; $E_b = 0{.}09894 \\cdot 931{.}5 \\approx 92{.}2$ MeV, that is $7{.}68$ MeV per nucleon.

**Example 5.** Energy needed to remove one neutron from \${}^{4}_{2}He$ to leave \${}^{3}_{2}He$ (nuclear mass $3{.}01493$ u).

$E = (m_{He3} + m_n - m_{He4}) c^2 = (3{.}01493 + 1{.}00866 - 4{.}00151) \\cdot 931{.}5 = 0{.}02208 \\cdot 931{.}5 \\approx 20{.}6$ MeV. Helium-4 is exceptionally stable.

**Example 6.** Radius of the uranium-238 nucleus and ratio to the hydrogen nucleus.

$R = 1{.}2 \\cdot 10^{-15} \\cdot 238^{1/3} \\approx 1{.}2 \\cdot 10^{-15} \\cdot 6{.}2 = 7{.}4 \\cdot 10^{-15}$ m; the ratio is $238^{1/3} \\approx 6{.}2$, though the mass ratio is 238. Nuclear density is the same for all nuclei.

**Example 7.** Energy released when a uranium nucleus ($A = 238$, $\\varepsilon = 7{.}6$ MeV) splits into two fragments with $\\varepsilon \\approx 8{.}5$ MeV.

$Q \\approx A(\\varepsilon_2 - \\varepsilon_1) = 238 \\cdot 0{.}9 \\approx 214$ MeV, close to the observed $200$ MeV.

**Example 8.** Compare the energy from 1 kg of uranium-235 fission ($200$ MeV per nucleus) with burning 1 kg of coal ($30$ MJ).

Number of nuclei in 1 kg: $N = \\dfrac{1000}{235} \\cdot 6{.}02 \\cdot 10^{23} \\approx 2{.}56 \\cdot 10^{24}$. Energy $= 2{.}56 \\cdot 10^{24} \\cdot 200 \\cdot 1{.}6 \\cdot 10^{-13} = 8{.}2 \\cdot 10^{13}$ J. Ratio to coal: $8{.}2 \\cdot 10^{13} / 3 \\cdot 10^7 \\approx 2{.}7 \\cdot 10^6$, nearly three million times.

## Exercises

1. How many protons and neutrons are there in \${}^{16}_{8}O$, \${}^{60}_{27}Co$, \${}^{206}_{82}Pb$?
2. List four properties of nuclear forces. Why do heavy nuclei contain more neutrons than protons?
3. Compute the mass defect and binding energy of \${}^{7}_{3}Li$ (nuclear mass $7{.}01436$ u).
4. Find the specific binding energy of \${}^{16}_{8}O$ (nuclear mass $15{.}99052$ u).
5. The nuclear mass of \${}^{56}_{26}Fe$ is $55{.}92067$ u. Find its binding energy per nucleon and compare it with the table.
6. How much energy is needed to split \${}^{2}_{1}H$ into a proton and a neutron? Express it in MeV and in joules.
7. Explain with the specific binding energy curve why both fission of uranium and fusion of hydrogen release energy, but fission of iron would not.
8. How many times more energy per kilogram does the fusion of deuterium into helium release ($\\approx 6$ MeV per nucleon) than the fission of uranium ($\\approx 0{.}85$ MeV per nucleon)?

### Answers

1. O: 8 p, 8 n; Co: 27 p, 33 n; Pb: 82 p, 124 n.
2. Strongest known force, short range ($\\approx 2 \\cdot 10^{-15}$ m), charge-independent, saturating. Extra neutrons add attraction without adding Coulomb repulsion.
3. $\\Delta m = 3 \\cdot 1{.}00728 + 4 \\cdot 1{.}00866 - 7{.}01436 = 0{.}04212$ u; $E_b \\approx 39{.}2$ MeV.
4. $\\Delta m = 8 \\cdot 1{.}00728 + 8 \\cdot 1{.}00866 - 15{.}99052 = 0{.}137$ u; $E_b \\approx 127{.}6$ MeV; $\\varepsilon \\approx 7{.}98$ MeV.
5. $\\Delta m = 26 \\cdot 1{.}00728 + 30 \\cdot 1{.}00866 - 55{.}92067 = 0{.}52841$ u; $E_b \\approx 492$ MeV; $\\varepsilon \\approx 8{.}79$ MeV, in agreement with $8{.}8$.
6. $2{.}22$ MeV $= 2{.}22 \\cdot 1{.}6 \\cdot 10^{-13} \\approx 3{.}6 \\cdot 10^{-13}$ J.
7. Iron sits at the maximum of the curve: any split or merger of iron gives products that are less tightly bound, so energy must be supplied. Uranium is to the right of the maximum, hydrogen far to the left; moving toward iron releases energy.
8. About $6/0{.}85 \\approx 7$ times (per nucleon, hence also per kilogram).`,
        hy: `## Միջուկի կառուցվածքը

1932 թ․, երբ Չեդվիկը հայտնաբերեց նեյտրոնը, Իվանենկոն և Հայզենբերգն առաջարկեցին **պրոտոն-նեյտրոնային մոդելը**․ միջուկը բաղկացած է $Z$ պրոտոնից և $N$ նեյտրոնից, որոնք միասին կոչվում են **նուկլոններ**։ \${}^{A}_{Z}X$ գրառումը տալիս է **լիցքային թիվը** $Z$ (պրոտոնների թիվը, հավասար է ատոմային համարին) և **զանգվածային թիվը** $A = Z + N$։

> **Իզոտոպները** նույն $Z$-ով, բայց տարբեր $N$-ով միջուկներն են․ \${}^{1}_{1}H$, \${}^{2}_{1}H$ (դեյտերիում), \${}^{3}_{1}H$ (տրիտիում), \${}^{235}_{92}U$ և \${}^{238}_{92}U$։

Միջուկի շառավիղը՝ $R \\approx 1{,}2 \\cdot 10^{-15} A^{1/3}$ մ․ միջուկն ատոմից մոտ $10^5$ անգամ փոքր է, բայց կրում է զանգվածի $99{,}97\\%$-ը։ Միջուկային նյութի խտությունը մոտ $2 \\cdot 10^{17}$ կգ/մ³ է։

Զանգվածները չափվում են **ատոմային զանգվածի միավորով**․ $1$ զ․ա․մ․ $= 1{,}6605 \\cdot 10^{-27}$ կգ $= 931{,}5$ ՄէՎ/$c^2$։ Պրոտոն՝ $m_p = 1{,}00728$ զ․ա․մ․, նեյտրոն՝ $m_n = 1{,}00866$ զ․ա․մ․, էլեկտրոն՝ $m_e = 0{,}00055$ զ․ա․մ․։

## Միջուկային ուժեր

Պրոտոններն էլեկտրականորեն վանում են միմյանց, ուստի միջուկը կարող է պահվել միայն շատ ավելի ուժեղ ձգողությամբ՝ **միջուկային (ուժեղ) ուժով**։ Նրա հատկությունները․

> - նույն հեռավորության վրա մոտ $100$ անգամ ուժեղ է էլեկտրական ուժից․
> - **կարճ հեռազդեցություն ունի**․ գործում է միայն մինչև մոտ $2 \\cdot 10^{-15}$ մ և դրանից այն կողմ անհետանում է․
> - **լիցքից անկախ է**․ պրոտոն-պրոտոն, պրոտոն-նեյտրոն և նեյտրոն-նեյտրոն ուժերը նույնն են․
> - **հագեցում ունի**․ յուրաքանչյուր նուկլոն փոխազդում է միայն մոտակա հարևանների հետ, ուստի կապի էներգիան աճում է $A$-ին համեմատական, ոչ թե $A^2$-ին։

Քանի որ էլեկտրական վանողությունը հեռազդող է, իսկ միջուկային ձգողությունը՝ ոչ, ծանր կայուն միջուկներին պետք են պրոտոններից ավելի շատ նեյտրոններ (ուրանի համար $N/Z \\approx 1{,}5$), որպեսզի վանողությունը նոսրանա։

## Զանգվածի պակասորդ և կապի էներգիա

Միջուկի զանգվածը **փոքր է** նրա ազատ նուկլոնների զանգվածների գումարից։ Տարբերությունը **զանգվածի պակասորդն** է․

$$\\Delta m = Z m_p + N m_n - M_{\\text{միջ}}$$

Էյնշտեյնի առնչությամբ այդ պակասող զանգվածն այն էներգիան է, որն անհրաժեշտ կլիներ միջուկն առանձին նուկլոնների բաժանելու համար՝ **կապի էներգիան**․

$$E_{\\text{կ}} = \\Delta m\\, c^2 = \\Delta m \\cdot 931{,}5\\ \\text{ՄէՎ}$$

որտեղ $\\Delta m$-ն արտահայտված է զ․ա․մ․-ով։

Եթե աղյուսակներում տրված են **ատոմային** զանգվածներ $M_{\\text{ատ}}$ (էլեկտրոնների հետ), ապա $m_p$-ի փոխարեն օգտագործեք ջրածնի ատոմի զանգվածը $m_H = 1{,}00783$ զ․ա․մ․․ $\\Delta m = Z m_H + N m_n - M_{\\text{ատ}}$, էլեկտրոնների զանգվածները կրճատվում են։

## Տեսակարար կապի էներգիա

Մեկ նուկլոնին ընկնող կապի էներգիան $\\varepsilon = E_{\\text{կ}} / A$ ցույց է տալիս, թե որքան ամուր է կապված միջուկը։ Ըստ $A$-ի․

| Միջուկ | $A$ | $\\varepsilon$, ՄէՎ |
|---|---|---|
| \${}^{2}H$ | 2 | 1,1 |
| \${}^{4}He$ | 4 | 7,1 |
| \${}^{12}C$ | 12 | 7,7 |
| \${}^{56}Fe$ | 56 | 8,8 |
| \${}^{120}Sn$ | 120 | 8,5 |
| \${}^{238}U$ | 238 | 7,6 |

Կորը թեթև միջուկների համար կտրուկ բարձրանում է, երկաթի մոտ ($A \\approx 56$–$62$) հասնում մոտ $8{,}8$ ՄէՎ առավելագույնի և ծանր միջուկների համար դանդաղ նվազում, քանի որ բազմաթիվ պրոտոնների կուլոնյան վանողությունը թուլացնում է կապը։ Հետևաբար․

> - թեթև միջուկների **սինթեզը** ավելի ծանրերի (մինչև երկաթ) էներգիա է անջատում, քանի որ արգասիքն ավելի ամուր է կապված․
> - ծանր միջուկի **տրոհումը** երկու միջին միջուկի նույն պատճառով էներգիա է անջատում՝ մոտ $0{,}9$ ՄէՎ մեկ նուկլոնին կամ $200$ ՄէՎ ուրանի մեկ միջուկին։

Երկուսն էլ միլիոնավոր անգամ ավելի էներգատար են, քան քիմիական ռեակցիաները, որտեղ մեկ ատոմին ընկնող էներգիան մի քանի էՎ է։

## Լուծված օրինակներ

**Օրինակ 1։** \${}^{27}_{13}Al$, \${}^{56}_{26}Fe$ և \${}^{238}_{92}U$ միջուկների բաղադրությունը։

Al․ 13 պրոտոն, $27 - 13 = 14$ նեյտրոն։ Fe․ 26 պրոտոն, 30 նեյտրոն։ U․ 92 պրոտոն, 146 նեյտրոն։

**Օրինակ 2։** \${}^{4}_{2}He$-ի զանգվածի պակասորդը և կապի էներգիան (միջուկի զանգվածը $4{,}00151$ զ․ա․մ․)։

$\\Delta m = 2 \\cdot 1{,}00728 + 2 \\cdot 1{,}00866 - 4{,}00151 = 4{,}03188 - 4{,}00151 = 0{,}03037$ զ․ա․մ․։ $E_{\\text{կ}} = 0{,}03037 \\cdot 931{,}5 \\approx 28{,}3$ ՄէՎ․ մեկ նուկլոնին՝ $7{,}07$ ՄէՎ։

**Օրինակ 3։** Դեյտերիումի \${}^{2}_{1}H$ կապի էներգիան (միջուկի զանգվածը $2{,}01355$ զ․ա․մ․)։

$\\Delta m = 1{,}00728 + 1{,}00866 - 2{,}01355 = 0{,}00239$ զ․ա․մ․․ $E_{\\text{կ}} = 0{,}00239 \\cdot 931{,}5 \\approx 2{,}22$ ՄէՎ, մեկ նուկլոնին՝ $1{,}11$ ՄէՎ։ Դեյտրոնը հելիումի համեմատ թույլ է կապված։

**Օրինակ 4։** Ատոմային զանգվածներով․ \${}^{12}_{6}C$-ի ատոմային զանգվածը ճիշտ $12$ զ․ա․մ․ է։ Գտեք $E_{\\text{կ}}$-ն։

$\\Delta m = 6 \\cdot 1{,}00783 + 6 \\cdot 1{,}00866 - 12 = 6{,}04698 + 6{,}05196 - 12 = 0{,}09894$ զ․ա․մ․․ $E_{\\text{կ}} = 0{,}09894 \\cdot 931{,}5 \\approx 92{,}2$ ՄէՎ, այսինքն՝ $7{,}68$ ՄէՎ մեկ նուկլոնին։

**Օրինակ 5։** \${}^{4}_{2}He$-ից մեկ նեյտրոն պոկելու համար անհրաժեշտ էներգիան, որից մնում է \${}^{3}_{2}He$ (միջուկի զանգվածը $3{,}01493$ զ․ա․մ․)։

$E = (m_{He3} + m_n - m_{He4}) c^2 = (3{,}01493 + 1{,}00866 - 4{,}00151) \\cdot 931{,}5 = 0{,}02208 \\cdot 931{,}5 \\approx 20{,}6$ ՄէՎ։ Հելիում-4-ը բացառիկ կայուն է։

**Օրինակ 6։** Ուրան-238 միջուկի շառավիղը և հարաբերությունը ջրածնի միջուկի շառավղին։

$R = 1{,}2 \\cdot 10^{-15} \\cdot 238^{1/3} \\approx 1{,}2 \\cdot 10^{-15} \\cdot 6{,}2 = 7{,}4 \\cdot 10^{-15}$ մ․ հարաբերությունը $238^{1/3} \\approx 6{,}2$ է, թեև զանգվածների հարաբերությունը 238 է։ Միջուկային խտությունը բոլոր միջուկների համար նույնն է։

**Օրինակ 7։** Անջատված էներգիան, երբ ուրանի միջուկը ($A = 238$, $\\varepsilon = 7{,}6$ ՄէՎ) բաժանվում է երկու բեկորի՝ $\\varepsilon \\approx 8{,}5$ ՄէՎ-ով։

$Q \\approx A(\\varepsilon_2 - \\varepsilon_1) = 238 \\cdot 0{,}9 \\approx 214$ ՄէՎ, մոտ է դիտվող $200$ ՄէՎ-ին։

**Օրինակ 8։** Համեմատեք 1 կգ ուրան-235-ի տրոհման էներգիան ($200$ ՄէՎ մեկ միջուկին) 1 կգ ածխի այրման էներգիայի հետ ($30$ ՄՋ)։

Միջուկների թիվը 1 կգ-ում․ $N = \\dfrac{1000}{235} \\cdot 6{,}02 \\cdot 10^{23} \\approx 2{,}56 \\cdot 10^{24}$։ Էներգիան $= 2{,}56 \\cdot 10^{24} \\cdot 200 \\cdot 1{,}6 \\cdot 10^{-13} = 8{,}2 \\cdot 10^{13}$ Ջ։ Հարաբերությունն ածխի հետ․ $8{,}2 \\cdot 10^{13} / 3 \\cdot 10^7 \\approx 2{,}7 \\cdot 10^6$, գրեթե երեք միլիոն անգամ։

## Վարժություններ

1. Քանի՞ պրոտոն և նեյտրոն կա \${}^{16}_{8}O$, \${}^{60}_{27}Co$, \${}^{206}_{82}Pb$ միջուկներում։
2. Թվարկեք միջուկային ուժերի չորս հատկություն։ Ինչո՞ւ են ծանր միջուկները պրոտոններից ավելի շատ նեյտրոն պարունակում։
3. Հաշվեք \${}^{7}_{3}Li$-ի զանգվածի պակասորդը և կապի էներգիան (միջուկի զանգվածը $7{,}01436$ զ․ա․մ․)։
4. Գտեք \${}^{16}_{8}O$-ի տեսակարար կապի էներգիան (միջուկի զանգվածը $15{,}99052$ զ․ա․մ․)։
5. \${}^{56}_{26}Fe$-ի միջուկի զանգվածը $55{,}92067$ զ․ա․մ․ է։ Գտեք մեկ նուկլոնին ընկնող կապի էներգիան և համեմատեք աղյուսակի հետ։
6. Որքա՞ն էներգիա է անհրաժեշտ \${}^{2}_{1}H$-ը պրոտոնի և նեյտրոնի բաժանելու համար։ Արտահայտեք ՄէՎ-ով և ջոուլով։
7. Տեսակարար կապի էներգիայի կորով բացատրեք, թե ինչու են և՛ ուրանի տրոհումը, և՛ ջրածնի սինթեզն էներգիա անջատում, իսկ երկաթի տրոհումը՝ ոչ։
8. Քանի՞ անգամ ավելի էներգիա է անջատում մեկ կիլոգրամից դեյտերիումի սինթեզը հելիումի ($\\approx 6$ ՄէՎ մեկ նուկլոնին), քան ուրանի տրոհումը ($\\approx 0{,}85$ ՄէՎ մեկ նուկլոնին)։

### Պատասխաններ

1. O․ 8 պ, 8 ն․ Co․ 27 պ, 33 ն․ Pb․ 82 պ, 124 ն։
2. Հայտնի ամենաուժեղ ուժը, կարճ հեռազդեցություն ($\\approx 2 \\cdot 10^{-15}$ մ), լիցքից անկախ, հագեցող։ Լրացուցիչ նեյտրոնները ձգողություն են ավելացնում՝ առանց կուլոնյան վանողություն ավելացնելու։
3. $\\Delta m = 3 \\cdot 1{,}00728 + 4 \\cdot 1{,}00866 - 7{,}01436 = 0{,}04212$ զ․ա․մ․․ $E_{\\text{կ}} \\approx 39{,}2$ ՄէՎ։
4. $\\Delta m = 8 \\cdot 1{,}00728 + 8 \\cdot 1{,}00866 - 15{,}99052 = 0{,}137$ զ․ա․մ․․ $E_{\\text{կ}} \\approx 127{,}6$ ՄէՎ․ $\\varepsilon \\approx 7{,}98$ ՄէՎ։
5. $\\Delta m = 26 \\cdot 1{,}00728 + 30 \\cdot 1{,}00866 - 55{,}92067 = 0{,}52841$ զ․ա․մ․․ $E_{\\text{կ}} \\approx 492$ ՄէՎ․ $\\varepsilon \\approx 8{,}79$ ՄէՎ, համընկնում է $8{,}8$-ի հետ։
6. $2{,}22$ ՄէՎ $= 2{,}22 \\cdot 1{,}6 \\cdot 10^{-13} \\approx 3{,}6 \\cdot 10^{-13}$ Ջ։
7. Երկաթը կորի առավելագույնում է․ երկաթի ցանկացած բաժանում կամ միացում տալիս է ավելի թույլ կապված արգասիքներ, ուստի էներգիա պետք է ծախսել։ Ուրանն առավելագույնից աջ է, ջրածինը՝ շատ ձախ․ դեպի երկաթ շարժվելն էներգիա է անջատում։
8. Մոտ $6/0{,}85 \\approx 7$ անգամ (մեկ նուկլոնին, հետևաբար՝ նաև մեկ կիլոգրամին)։`,
        ru: `## Строение ядра

В 1932 г., после открытия нейтрона Чедвиком, Иваненко и Гейзенберг предложили **протонно-нейтронную модель**: ядро состоит из $Z$ протонов и $N$ нейтронов, вместе называемых **нуклонами**. Запись \${}^{A}_{Z}X$ указывает **зарядовое число** $Z$ (число протонов, равное атомному номеру) и **массовое число** $A = Z + N$.

> **Изотопы** — ядра с одинаковым $Z$, но разным $N$: \${}^{1}_{1}H$, \${}^{2}_{1}H$ (дейтерий), \${}^{3}_{1}H$ (тритий); \${}^{235}_{92}U$ и \${}^{238}_{92}U$.

Радиус ядра: $R \\approx 1{,}2 \\cdot 10^{-15} A^{1/3}$ м; ядро примерно в $10^5$ раз меньше атома, но несёт $99{,}97\\%$ его массы. Плотность ядерного вещества около $2 \\cdot 10^{17}$ кг/м³.

Массы измеряют в **атомных единицах массы**: $1\\ \\text{а.е.м.} = 1{,}6605 \\cdot 10^{-27}$ кг $= 931{,}5$ МэВ/$c^2$. Протон $m_p = 1{,}00728$ а.е.м., нейтрон $m_n = 1{,}00866$ а.е.м., электрон $m_e = 0{,}00055$ а.е.м.

## Ядерные силы

Протоны электрически отталкиваются, поэтому ядро может держаться только за счёт гораздо более сильного притяжения — **ядерных (сильных) сил**. Их свойства:

> - на том же расстоянии они примерно в $100$ раз сильнее электрических;
> - они **короткодействующие**: действуют лишь до расстояния около $2 \\cdot 10^{-15}$ м и дальше исчезают;
> - они **зарядово независимы**: силы протон–протон, протон–нейтрон и нейтрон–нейтрон одинаковы;
> - они обладают **насыщением**: каждый нуклон взаимодействует лишь с ближайшими соседями, поэтому энергия связи растёт пропорционально $A$, а не $A^2$.

Поскольку электрическое отталкивание дальнодействующее, а ядерное притяжение нет, тяжёлым устойчивым ядрам нужно больше нейтронов, чем протонов ($N/Z \\approx 1{,}5$ у урана), чтобы «разбавить» отталкивание.

## Дефект массы и энергия связи

Масса ядра **меньше** суммы масс его свободных нуклонов. Разность называется **дефектом массы**:

$$\\Delta m = Z m_p + N m_n - M_{\\text{я}}.$$

По соотношению Эйнштейна эта недостающая масса — энергия, которую нужно затратить, чтобы разделить ядро на отдельные нуклоны, **энергия связи**:

$$E_{\\text{св}} = \\Delta m\\, c^2 = \\Delta m\\ [\\text{а.е.м.}] \\cdot 931{,}5\\ \\text{МэВ}.$$

Если в таблицах даны **атомные** массы $M_{\\text{ат}}$ (с электронами), вместо $m_p$ берут массу атома водорода $m_H = 1{,}00783$ а.е.м.: $\\Delta m = Z m_H + N m_n - M_{\\text{ат}}$; массы электронов сокращаются.

## Удельная энергия связи

Энергия связи на один нуклон $\\varepsilon = E_{\\text{св}} / A$ показывает, насколько прочно связано ядро. В зависимости от $A$:

| Ядро | $A$ | $\\varepsilon$, МэВ |
|---|---|---|
| \${}^{2}H$ | 2 | 1,1 |
| \${}^{4}He$ | 4 | 7,1 |
| \${}^{12}C$ | 12 | 7,7 |
| \${}^{56}Fe$ | 56 | 8,8 |
| \${}^{120}Sn$ | 120 | 8,5 |
| \${}^{238}U$ | 238 | 7,6 |

Кривая круто растёт для лёгких ядер, достигает максимума около $8{,}8$ МэВ вблизи железа ($A \\approx 56$–$62$) и медленно спадает для тяжёлых ядер, где кулоновское отталкивание многих протонов ослабляет связь. Отсюда:

> - **синтез** лёгких ядер в более тяжёлые (до железа) выделяет энергию, потому что продукт связан прочнее;
> - **деление** тяжёлого ядра на два средних выделяет энергию по той же причине: около $0{,}9$ МэВ на нуклон, или $200$ МэВ на одно ядро урана.

И то и другое в миллионы раз энергичнее химических реакций, где на атом приходится несколько эВ.

## Разобранные примеры

**Пример 1.** Состав ядер \${}^{27}_{13}Al$, \${}^{56}_{26}Fe$ и \${}^{238}_{92}U$.

Al: 13 протонов, $27 - 13 = 14$ нейтронов. Fe: 26 протонов, 30 нейтронов. U: 92 протона, 146 нейтронов.

**Пример 2.** Дефект массы и энергия связи \${}^{4}_{2}He$ (масса ядра $4{,}00151$ а.е.м.).

$\\Delta m = 2 \\cdot 1{,}00728 + 2 \\cdot 1{,}00866 - 4{,}00151 = 4{,}03188 - 4{,}00151 = 0{,}03037$ а.е.м. $E_{\\text{св}} = 0{,}03037 \\cdot 931{,}5 \\approx 28{,}3$ МэВ; на нуклон $7{,}07$ МэВ.

**Пример 3.** Энергия связи дейтерия \${}^{2}_{1}H$ (масса ядра $2{,}01355$ а.е.м.).

$\\Delta m = 1{,}00728 + 1{,}00866 - 2{,}01355 = 0{,}00239$ а.е.м.; $E_{\\text{св}} = 0{,}00239 \\cdot 931{,}5 \\approx 2{,}22$ МэВ, $1{,}11$ МэВ на нуклон. Дейтрон связан слабо по сравнению с гелием.

**Пример 4.** По атомным массам: атомная масса \${}^{12}_{6}C$ равна ровно $12$ а.е.м. Найдите $E_{\\text{св}}$.

$\\Delta m = 6 \\cdot 1{,}00783 + 6 \\cdot 1{,}00866 - 12 = 6{,}04698 + 6{,}05196 - 12 = 0{,}09894$ а.е.м.; $E_{\\text{св}} = 0{,}09894 \\cdot 931{,}5 \\approx 92{,}2$ МэВ, то есть $7{,}68$ МэВ на нуклон.

**Пример 5.** Энергия, необходимая, чтобы оторвать один нейтрон от \${}^{4}_{2}He$ и получить \${}^{3}_{2}He$ (масса ядра $3{,}01493$ а.е.м.).

$E = (m_{He3} + m_n - m_{He4}) c^2 = (3{,}01493 + 1{,}00866 - 4{,}00151) \\cdot 931{,}5 = 0{,}02208 \\cdot 931{,}5 \\approx 20{,}6$ МэВ. Гелий-4 исключительно устойчив.

**Пример 6.** Радиус ядра урана-238 и его отношение к радиусу ядра водорода.

$R = 1{,}2 \\cdot 10^{-15} \\cdot 238^{1/3} \\approx 1{,}2 \\cdot 10^{-15} \\cdot 6{,}2 = 7{,}4 \\cdot 10^{-15}$ м; отношение равно $238^{1/3} \\approx 6{,}2$, хотя отношение масс 238. Плотность ядер одинакова для всех ядер.

**Пример 7.** Энергия, выделяющаяся при делении ядра урана ($A = 238$, $\\varepsilon = 7{,}6$ МэВ) на два осколка с $\\varepsilon \\approx 8{,}5$ МэВ.

$Q \\approx A(\\varepsilon_2 - \\varepsilon_1) = 238 \\cdot 0{,}9 \\approx 214$ МэВ, близко к наблюдаемым $200$ МэВ.

**Пример 8.** Сравните энергию деления 1 кг урана-235 ($200$ МэВ на ядро) с энергией сгорания 1 кг угля ($30$ МДж).

Число ядер в 1 кг: $N = \\dfrac{1000}{235} \\cdot 6{,}02 \\cdot 10^{23} \\approx 2{,}56 \\cdot 10^{24}$. Энергия $= 2{,}56 \\cdot 10^{24} \\cdot 200 \\cdot 1{,}6 \\cdot 10^{-13} = 8{,}2 \\cdot 10^{13}$ Дж. Отношение к углю: $8{,}2 \\cdot 10^{13} / 3 \\cdot 10^7 \\approx 2{,}7 \\cdot 10^6$, почти три миллиона раз.

## Упражнения

1. Сколько протонов и нейтронов в ядрах \${}^{16}_{8}O$, \${}^{60}_{27}Co$, \${}^{206}_{82}Pb$?
2. Перечислите четыре свойства ядерных сил. Почему тяжёлые ядра содержат больше нейтронов, чем протонов?
3. Вычислите дефект массы и энергию связи \${}^{7}_{3}Li$ (масса ядра $7{,}01436$ а.е.м.).
4. Найдите удельную энергию связи \${}^{16}_{8}O$ (масса ядра $15{,}99052$ а.е.м.).
5. Масса ядра \${}^{56}_{26}Fe$ равна $55{,}92067$ а.е.м. Найдите его энергию связи на нуклон и сравните с таблицей.
6. Сколько энергии нужно, чтобы разделить \${}^{2}_{1}H$ на протон и нейтрон? Выразите в МэВ и в джоулях.
7. Объясните по кривой удельной энергии связи, почему и деление урана, и синтез водорода выделяют энергию, а деление железа — нет.
8. Во сколько раз больше энергии на килограмм выделяет синтез дейтерия в гелий ($\\approx 6$ МэВ на нуклон), чем деление урана ($\\approx 0{,}85$ МэВ на нуклон)?

### Ответы

1. O: 8 p, 8 n; Co: 27 p, 33 n; Pb: 82 p, 124 n.
2. Самая сильная из известных сил, короткодействие ($\\approx 2 \\cdot 10^{-15}$ м), зарядовая независимость, насыщение. Лишние нейтроны добавляют притяжение, не добавляя кулоновского отталкивания.
3. $\\Delta m = 3 \\cdot 1{,}00728 + 4 \\cdot 1{,}00866 - 7{,}01436 = 0{,}04212$ а.е.м.; $E_{\\text{св}} \\approx 39{,}2$ МэВ.
4. $\\Delta m = 8 \\cdot 1{,}00728 + 8 \\cdot 1{,}00866 - 15{,}99052 = 0{,}137$ а.е.м.; $E_{\\text{св}} \\approx 127{,}6$ МэВ; $\\varepsilon \\approx 7{,}98$ МэВ.
5. $\\Delta m = 26 \\cdot 1{,}00728 + 30 \\cdot 1{,}00866 - 55{,}92067 = 0{,}52841$ а.е.м.; $E_{\\text{св}} \\approx 492$ МэВ; $\\varepsilon \\approx 8{,}79$ МэВ, в согласии с $8{,}8$.
6. $2{,}22$ МэВ $= 2{,}22 \\cdot 1{,}6 \\cdot 10^{-13} \\approx 3{,}6 \\cdot 10^{-13}$ Дж.
7. Железо находится в максимуме кривой: любое разделение или слияние железа даёт продукты, связанные слабее, так что энергию нужно затратить. Уран правее максимума, водород далеко слева; движение к железу выделяет энергию.
8. Примерно в $6/0{,}85 \\approx 7$ раз (на нуклон, значит и на килограмм).`,
      },
      [
        q(t("The nucleus ²⁷₁₃Al contains…", "²⁷₁₃Al միջուկը պարունակում է…", "Ядро ²⁷₁₃Al содержит…"), [t("13 protons and 14 neutrons", "13 պրոտոն և 14 նեյտրոն", "13 протонов и 14 нейтронов"), t("27 protons and 13 neutrons", "27 պրոտոն և 13 նեյտրոն", "27 протонов и 13 нейтронов"), t("14 protons and 13 neutrons", "14 պրոտոն և 13 նեյտրոն", "14 протонов и 13 нейтронов")], 0),
        q(t("Nuclear forces act…", "Միջուկային ուժերը գործում են…", "Ядерные силы действуют…"), [t("only at distances up to about 2·10⁻¹⁵ m", "միայն մինչև մոտ 2·10⁻¹⁵ մ հեռավորության վրա", "лишь на расстояниях до примерно 2·10⁻¹⁵ м"), t("at any distance, like gravity", "ցանկացած հեռավորության վրա, ինչպես ձգողականությունը", "на любом расстоянии, как гравитация"), t("only between protons", "միայն պրոտոնների միջև", "только между протонами")], 0),
        q(t("The mass of a nucleus compared with the sum of masses of its free nucleons is…", "Միջուկի զանգվածն իր ազատ նուկլոնների զանգվածների գումարի համեմատ…", "Масса ядра по сравнению с суммой масс его свободных нуклонов…"), [t("smaller", "փոքր է", "меньше"), t("larger", "մեծ է", "больше"), t("equal", "հավասար է", "равна")], 0),
        q(t("1 u of mass defect corresponds to a binding energy of…", "1 զ․ա․մ․ զանգվածի պակասորդը համապատասխանում է … կապի էներգիայի։", "Дефекту массы 1 а.е.м. соответствует энергия связи…"), [t("931.5 MeV", "931,5 ՄէՎ", "931,5 МэВ"), t("13.6 eV", "13,6 էՎ", "13,6 эВ"), t("1 J", "1 Ջ", "1 Дж")], 0),
        q(t("The specific binding energy is largest for nuclei near…", "Տեսակարար կապի էներգիան ամենամեծն է … մոտ միջուկների համար։", "Удельная энергия связи максимальна для ядер вблизи…"), [t("iron (A ≈ 56)", "երկաթի (A ≈ 56)", "железа (A ≈ 56)"), t("hydrogen (A = 1)", "ջրածնի (A = 1)", "водорода (A = 1)"), t("uranium (A ≈ 238)", "ուրանի (A ≈ 238)", "урана (A ≈ 238)")], 0),
        q(t("Fission of a uranium nucleus releases about…", "Ուրանի միջուկի տրոհումն անջատում է մոտ…", "Деление ядра урана выделяет около…"), [t("200 MeV", "200 ՄէՎ", "200 МэВ"), t("200 eV", "200 էՎ", "200 эВ"), t("200 J", "200 Ջ", "200 Дж")], 0),
      ],
    ),
    lesson(
      "decay-law",
      ["Law of radioactive decay; half-life", "Ռադիոակտիվ տրոհման օրենք, կիսատրոհման պարբերություն", "Закон радиоактивного распада; период полураспада"],
      {
        en: ["Write the displacement rules for alpha, beta and gamma decay and identify the daughter nucleus", "Apply the decay law N = N₀·2^(−t/T) to find the remaining number of nuclei, the elapsed time or the half-life", "Compute activity A = λN and explain radiocarbon and other radiometric dating"],
        hy: ["Գրել ալֆա, բետա և գամմա տրոհումների տեղաշարժի կանոնները և որոշել դուստր միջուկը", "Կիրառել տրոհման օրենքը N = N₀·2^(−t/T)՝ գտնելու մնացած միջուկների թիվը, անցած ժամանակը կամ կիսատրոհման պարբերությունը", "Հաշվել ակտիվությունը A = λN և բացատրել ռադիոածխածնային և այլ ռադիոմետրիկ թվագրումը"],
        ru: ["Записывать правила смещения при альфа-, бета- и гамма-распаде и определять дочернее ядро", "Применять закон распада N = N₀·2^(−t/T) для нахождения оставшегося числа ядер, прошедшего времени или периода полураспада", "Вычислять активность A = λN и объяснять радиоуглеродное и другие радиометрические датирования"],
      },
      {
        en: `## Radioactivity

In 1896 Becquerel found that uranium salts blacken a photographic plate through black paper; Marie and Pierre Curie discovered polonium and radium and named the phenomenon **radioactivity**: the spontaneous transformation of unstable nuclei with emission of particles. Rutherford sorted the radiation by its behaviour in a magnetic field into three kinds:

| Radiation | What it is | Charge | Penetration |
|---|---|---|---|
| $\\alpha$ | helium nucleus \${}^{4}_{2}He$ | $+2e$ | sheet of paper, a few cm of air |
| $\\beta$ | fast electron \${}^{0}_{-1}e$ (or positron) | $-e$ | a few mm of aluminium |
| $\\gamma$ | photon of very high energy | 0 | tens of cm of lead |

## Displacement rules

Both the charge number and the mass number are conserved in a decay:

> - **Alpha decay:** \${}^{A}_{Z}X \\to {}^{A-4}_{Z-2}Y + {}^{4}_{2}He$ (the element moves two places left in the periodic table).
> - **Beta decay:** \${}^{A}_{Z}X \\to {}^{A}_{Z+1}Y + {}^{0}_{-1}e + \\bar\\nu$ (a neutron turns into a proton, an electron and an antineutrino; the element moves one place right).
> - **Gamma decay:** the excited nucleus emits a photon; $A$ and $Z$ do not change.

Example: \${}^{238}_{92}U \\to {}^{234}_{90}Th + {}^{4}_{2}He$; \${}^{234}_{90}Th \\to {}^{234}_{91}Pa + {}^{0}_{-1}e + \\bar\\nu$. A chain of such decays leads uranium-238 through 14 steps to stable lead-206.

## The decay law

A single nucleus decays at an unpredictable moment, but a large number obeys a statistical law. If in time $T$ (the **half-life**) half of any sample decays, then after time $t$

$$N = N_0 \\cdot 2^{-t/T} = N_0\\, e^{-\\lambda t}, \\qquad \\lambda = \\dfrac{\\ln 2}{T} = \\dfrac{0{.}693}{T}.$$

$\\lambda$ is the **decay constant**, the probability of decay per unit time; the mean lifetime is $\\tau = 1/\\lambda = 1{.}44\\,T$. Half-lives range from microseconds to billions of years:

| Nuclide | Half-life |
|---|---|
| \${}^{238}U$ | $4{.}5 \\cdot 10^9$ years |
| \${}^{14}C$ | $5730$ years |
| \${}^{226}Ra$ | $1600$ years |
| \${}^{137}Cs$ | $30$ years |
| \${}^{131}I$ | $8$ days |
| \${}^{222}Rn$ | $3{.}8$ days |

The decay law does not depend on temperature, pressure or chemical state: nothing outside the nucleus can speed it up or slow it down.

## Activity

> The **activity** is the number of decays per second: $A = \\lambda N = \\dfrac{0{.}693\\, N}{T}$. Unit: becquerel, $1$ Bq $= 1$ decay/s; the old unit curie $1$ Ci $= 3{.}7 \\cdot 10^{10}$ Bq (the activity of 1 g of radium).

Activity decreases by the same law: $A = A_0 \\cdot 2^{-t/T}$.

## Radiometric dating

Cosmic rays keep the fraction of \${}^{14}C$ in atmospheric carbon dioxide constant; living plants and animals take it in, and when they die the \${}^{14}C$ decays with $T = 5730$ years without being replaced. Measuring the remaining fraction gives the age of wood, bone or cloth up to about $50\\,000$ years. The decay of \${}^{238}U$ to lead and of \${}^{40}K$ to argon dates rocks over billions of years; the age of the Earth, $4{.}5 \\cdot 10^9$ years, was found this way.

## Worked examples

**Example 1.** Complete the decays: \${}^{226}_{88}Ra \\to\\ ? + {}^{4}_{2}He$; \${}^{60}_{27}Co \\to\\ ? + {}^{0}_{-1}e$.

Radium: $A = 222$, $Z = 86$: \${}^{222}_{86}Rn$ (radon). Cobalt: $A = 60$, $Z = 28$: \${}^{60}_{28}Ni$.

**Example 2.** Iodine-131 ($T = 8$ days) is used in thyroid medicine. What fraction of a dose remains after 32 days?

$t/T = 4$, so $N/N_0 = 2^{-4} = 1/16 \\approx 6\\%$.

**Example 3.** A sample of radon has $8 \\cdot 10^{20}$ nuclei. How many decay in $11{.}4$ days ($T = 3{.}8$ days)?

$t/T = 3$; remaining $8 \\cdot 10^{20} / 8 = 10^{20}$; decayed $7 \\cdot 10^{20}$.

**Example 4.** The activity of a caesium-137 source has fallen to $1/8$ of its initial value. How much time has passed ($T = 30$ years)?

$2^{-t/T} = 1/8 = 2^{-3}$, so $t = 3T = 90$ years.

**Example 5.** Activity of 1 g of radium-226 ($T = 1600$ years $= 5{.}05 \\cdot 10^{10}$ s).

$N = \\dfrac{1}{226} \\cdot 6{.}02 \\cdot 10^{23} = 2{.}66 \\cdot 10^{21}$; $A = \\dfrac{0{.}693 \\cdot 2{.}66 \\cdot 10^{21}}{5{.}05 \\cdot 10^{10}} \\approx 3{.}65 \\cdot 10^{10}$ Bq, which is the definition of 1 curie.

**Example 6.** A piece of ancient wood shows a \${}^{14}C$ activity of $25\\%$ of that of fresh wood. Its age?

$2^{-t/T} = 1/4$, so $t = 2T = 11\\,460$ years.

**Example 7.** A charcoal sample has $70\\%$ of the modern \${}^{14}C$ content. Age?

$2^{-t/T} = 0{.}7$: $t = -T \\log_2 0{.}7 = 5730 \\cdot 0{.}515 \\approx 2950$ years.

**Example 8.** After 20 days the activity of a source is $1/5$ of the initial one. Half-life?

$2^{-20/T} = 0{.}2$, $20/T = \\log_2 5 = 2{.}32$, so $T \\approx 8{.}6$ days.

## Exercises

1. Which nucleus is formed in the alpha decay of \${}^{210}_{84}Po$? In the beta decay of \${}^{14}_{6}C$?
2. How many alpha and beta decays turn \${}^{238}_{92}U$ into \${}^{206}_{82}Pb$?
3. Strontium-90 has $T = 29$ years. What fraction of the strontium released in an accident remains after 87 years?
4. A sample contains $4 \\cdot 10^{18}$ nuclei of a nuclide with $T = 10$ hours. How many nuclei remain after 2 days?
5. How long does it take for the activity of iodine-131 ($T = 8$ days) to fall to $1\\%$?
6. Find the decay constant and the activity of $10^{15}$ nuclei of \${}^{60}Co$ ($T = 5{.}3$ years).
7. The bones of a mammoth contain $12{.}5\\%$ of the modern \${}^{14}C$ fraction. When did it die?
8. Why can radiocarbon dating not be used for dinosaur fossils, and what is used instead?

### Answers

1. \${}^{206}_{82}Pb$; \${}^{14}_{7}N$.
2. Mass drops by 32, so 8 alpha decays; they lower $Z$ by 16, but $Z$ falls only by 10, so 6 beta decays.
3. $t/T = 3$: $1/8 = 12{.}5\\%$.
4. $t/T = 48/10 = 4{.}8$; $N = 4 \\cdot 10^{18} \\cdot 2^{-4{.}8} \\approx 4 \\cdot 10^{18} \\cdot 0{.}036 \\approx 1{.}4 \\cdot 10^{17}$.
5. $2^{-t/T} = 0{.}01$, $t/T = \\log_2 100 = 6{.}64$, $t \\approx 53$ days.
6. $\\lambda = 0{.}693/(5{.}3 \\cdot 3{.}15 \\cdot 10^7) = 4{.}15 \\cdot 10^{-9}$ s⁻¹; $A = 4{.}15 \\cdot 10^{-9} \\cdot 10^{15} \\approx 4{.}2 \\cdot 10^6$ Bq.
7. $1/8 = 2^{-3}$, $t = 3 \\cdot 5730 \\approx 17\\,200$ years ago.
8. After $50\\,000$ years ($\\approx 9$ half-lives) too little \${}^{14}C$ remains to measure; dinosaurs lived $65$ million years ago and more. Rocks around the fossils are dated with uranium–lead or potassium–argon methods.`,
        hy: `## Ռադիոակտիվություն

1896 թ․ Բեկերելը պարզեց, որ ուրանի աղերը սև թղթի միջով սևացնում են լուսանկարչական թիթեղը․ Մարի և Պիեռ Կյուրիները հայտնաբերեցին պոլոնիումը և ռադիումը և երևույթն անվանեցին **ռադիոակտիվություն**․ անկայուն միջուկների ինքնաբերական փոխակերպում՝ մասնիկների արձակմամբ։ Ռեզերֆորդը ճառագայթումը մագնիսական դաշտում նրա վարքով բաժանեց երեք տեսակի․

| Ճառագայթում | Ինչ է | Լիցք | Թափանցելիություն |
|---|---|---|---|
| $\\alpha$ | հելիումի միջուկ \${}^{4}_{2}He$ | $+2e$ | թղթի թերթ, մի քանի սմ օդ |
| $\\beta$ | արագ էլեկտրոն \${}^{0}_{-1}e$ (կամ պոզիտրոն) | $-e$ | մի քանի մմ ալյումին |
| $\\gamma$ | շատ բարձր էներգիայի ֆոտոն | 0 | տասնյակ սմ կապար |

## Տեղաշարժի կանոններ

Տրոհման ժամանակ պահպանվում են և՛ լիցքային, և՛ զանգվածային թվերը․

> - **Ալֆա տրոհում․** \${}^{A}_{Z}X \\to {}^{A-4}_{Z-2}Y + {}^{4}_{2}He$ (տարրը պարբերական աղյուսակում տեղաշարժվում է երկու տեղ ձախ)։
> - **Բետա տրոհում․** \${}^{A}_{Z}X \\to {}^{A}_{Z+1}Y + {}^{0}_{-1}e + \\bar\\nu$ (նեյտրոնը վերածվում է պրոտոնի, էլեկտրոնի և հականեյտրինոյի․ տարրը տեղաշարժվում է մեկ տեղ աջ)։
> - **Գամմա տրոհում․** գրգռված միջուկն արձակում է ֆոտոն․ $A$-ն և $Z$-ը չեն փոխվում։

Օրինակ․ \${}^{238}_{92}U \\to {}^{234}_{90}Th + {}^{4}_{2}He$․ \${}^{234}_{90}Th \\to {}^{234}_{91}Pa + {}^{0}_{-1}e + \\bar\\nu$։ Այդպիսի տրոհումների շղթան ուրան-238-ը 14 քայլով տանում է կայուն կապար-206-ի։

## Տրոհման օրենքը

Առանձին միջուկը տրոհվում է անկանխատեսելի պահի, բայց մեծ թվով միջուկներ ենթարկվում են վիճակագրական օրենքի։ Եթե $T$ ժամանակում (**կիսատրոհման պարբերություն**) ցանկացած նմուշի կեսը տրոհվում է, ապա $t$ ժամանակից հետո

$$N = N_0 \\cdot 2^{-t/T} = N_0\\, e^{-\\lambda t}, \\qquad \\lambda = \\dfrac{\\ln 2}{T} = \\dfrac{0{,}693}{T}$$

$\\lambda$-ն **տրոհման հաստատունն** է՝ միավոր ժամանակում տրոհման հավանականությունը․ միջին կյանքի տևողությունը $\\tau = 1/\\lambda = 1{,}44\\,T$ է։ Կիսատրոհման պարբերությունները միկրովայրկյաններից մինչև միլիարդավոր տարիներ են․

| Նուկլիդ | Կիսատրոհման պարբերություն |
|---|---|
| \${}^{238}U$ | $4{,}5 \\cdot 10^9$ տարի |
| \${}^{14}C$ | $5730$ տարի |
| \${}^{226}Ra$ | $1600$ տարի |
| \${}^{137}Cs$ | $30$ տարի |
| \${}^{131}I$ | $8$ օր |
| \${}^{222}Rn$ | $3{,}8$ օր |

Տրոհման օրենքը կախված չէ ջերմաստիճանից, ճնշումից կամ քիմիական վիճակից․ միջուկից դուրս ոչինչ չի կարող այն արագացնել կամ դանդաղեցնել։

## Ակտիվություն

> **Ակտիվությունը** մեկ վայրկյանում տրոհումների թիվն է․ $A = \\lambda N = \\dfrac{0{,}693\\, N}{T}$։ Միավորը՝ բեկերել, $1$ Բք $= 1$ տրոհում/վ․ հին միավորը՝ կյուրի, $1$ Կի $= 3{,}7 \\cdot 10^{10}$ Բք (1 գ ռադիումի ակտիվությունը)։

Ակտիվությունը նվազում է նույն օրենքով․ $A = A_0 \\cdot 2^{-t/T}$։

## Ռադիոմետրիկ թվագրում

Տիեզերական ճառագայթները մթնոլորտի ածխաթթու գազում \${}^{14}C$-ի բաժինը պահում են հաստատուն․ կենդանի բույսերն ու կենդանիները կլանում են այն, իսկ մահանալուց հետո \${}^{14}C$-ը տրոհվում է $T = 5730$ տարով՝ առանց համալրվելու։ Մնացած բաժնի չափումը տալիս է փայտի, ոսկրի կամ գործվածքի տարիքը մինչև մոտ $50\\,000$ տարի։ \${}^{238}U$-ի տրոհումը կապարի և \${}^{40}K$-ի տրոհումն արգոնի թվագրում են ապարները միլիարդավոր տարիների սահմաններում․ Երկրի տարիքը՝ $4{,}5 \\cdot 10^9$ տարի, գտնվել է այս եղանակով։

## Լուծված օրինակներ

**Օրինակ 1։** Լրացրեք տրոհումները․ \${}^{226}_{88}Ra \\to\\ ? + {}^{4}_{2}He$․ \${}^{60}_{27}Co \\to\\ ? + {}^{0}_{-1}e$։

Ռադիում․ $A = 222$, $Z = 86$․ \${}^{222}_{86}Rn$ (ռադոն)։ Կոբալտ․ $A = 60$, $Z = 28$․ \${}^{60}_{28}Ni$։

**Օրինակ 2։** Յոդ-131-ը ($T = 8$ օր) օգտագործվում է վահանաձև գեղձի բուժման մեջ։ Չափաբաժնի ո՞ր մասն է մնում 32 օր հետո։

$t/T = 4$, ուստի $N/N_0 = 2^{-4} = 1/16 \\approx 6\\%$։

**Օրինակ 3։** Ռադոնի նմուշն ունի $8 \\cdot 10^{20}$ միջուկ։ Քանի՞սն են տրոհվում $11{,}4$ օրում ($T = 3{,}8$ օր)։

$t/T = 3$․ մնում է $8 \\cdot 10^{20} / 8 = 10^{20}$․ տրոհվել է $7 \\cdot 10^{20}$։

**Օրինակ 4։** Ցեզիում-137 աղբյուրի ակտիվությունն ընկել է սկզբնականի $1/8$-ին։ Որքա՞ն ժամանակ է անցել ($T = 30$ տարի)։

$2^{-t/T} = 1/8 = 2^{-3}$, ուստի $t = 3T = 90$ տարի։

**Օրինակ 5։** 1 գ ռադիում-226-ի ակտիվությունը ($T = 1600$ տարի $= 5{,}05 \\cdot 10^{10}$ վ)։

$N = \\dfrac{1}{226} \\cdot 6{,}02 \\cdot 10^{23} = 2{,}66 \\cdot 10^{21}$․ $A = \\dfrac{0{,}693 \\cdot 2{,}66 \\cdot 10^{21}}{5{,}05 \\cdot 10^{10}} \\approx 3{,}65 \\cdot 10^{10}$ Բք, ինչը 1 կյուրիի սահմանումն է։

**Օրինակ 6։** Հնագույն փայտի կտորի \${}^{14}C$ ակտիվությունը թարմ փայտի ակտիվության $25\\%$-ն է։ Տարի՞քը։

$2^{-t/T} = 1/4$, ուստի $t = 2T = 11\\,460$ տարի։

**Օրինակ 7։** Ածխի նմուշը պարունակում է ժամանակակից \${}^{14}C$ պարունակության $70\\%$-ը։ Տարի՞քը։

$2^{-t/T} = 0{,}7$․ $t = -T \\log_2 0{,}7 = 5730 \\cdot 0{,}515 \\approx 2950$ տարի։

**Օրինակ 8։** 20 օր հետո աղբյուրի ակտիվությունը սկզբնականի $1/5$-ն է։ Կիսատրոհման պարբերությո՞ւնը։

$2^{-20/T} = 0{,}2$, $20/T = \\log_2 5 = 2{,}32$, ուստի $T \\approx 8{,}6$ օր։

## Վարժություններ

1. Ո՞ր միջուկն է առաջանում \${}^{210}_{84}Po$-ի ալֆա տրոհումից։ \${}^{14}_{6}C$-ի բետա տրոհումի՞ց։
2. Քանի՞ ալֆա և բետա տրոհում է \${}^{238}_{92}U$-ը վերածում \${}^{206}_{82}Pb$-ի։
3. Ստրոնցիում-90-ի $T = 29$ տարի է։ Վթարի ժամանակ արտանետված ստրոնցիումի ո՞ր մասն է մնում 87 տարի հետո։
4. Նմուշը պարունակում է $T = 10$ ժ պարբերությամբ նուկլիդի $4 \\cdot 10^{18}$ միջուկ։ Քանի՞ միջուկ է մնում 2 օր հետո։
5. Որքա՞ն ժամանակում է յոդ-131-ի ($T = 8$ օր) ակտիվությունն ընկնում մինչև $1\\%$։
6. Գտեք \${}^{60}Co$-ի ($T = 5{,}3$ տարի) $10^{15}$ միջուկի տրոհման հաստատունը և ակտիվությունը։
7. Մամոնտի ոսկորները պարունակում են ժամանակակից \${}^{14}C$ բաժնի $12{,}5\\%$-ը։ Ե՞րբ է այն սատկել։
8. Ինչո՞ւ ռադիոածխածնային թվագրումը չի կարող կիրառվել դինոզավրերի բրածոների համար, և ի՞նչ է օգտագործվում փոխարենը։

### Պատասխաններ

1. \${}^{206}_{82}Pb$․ \${}^{14}_{7}N$։
2. Զանգվածը նվազում է 32-ով, ուստի 8 ալֆա տրոհում․ դրանք $Z$-ն իջեցնում են 16-ով, բայց $Z$-ն ընկնում է միայն 10-ով, ուստի 6 բետա տրոհում։
3. $t/T = 3$․ $1/8 = 12{,}5\\%$։
4. $t/T = 48/10 = 4{,}8$․ $N = 4 \\cdot 10^{18} \\cdot 2^{-4{,}8} \\approx 4 \\cdot 10^{18} \\cdot 0{,}036 \\approx 1{,}4 \\cdot 10^{17}$։
5. $2^{-t/T} = 0{,}01$, $t/T = \\log_2 100 = 6{,}64$, $t \\approx 53$ օր։
6. $\\lambda = 0{,}693/(5{,}3 \\cdot 3{,}15 \\cdot 10^7) = 4{,}15 \\cdot 10^{-9}$ վ⁻¹․ $A = 4{,}15 \\cdot 10^{-9} \\cdot 10^{15} \\approx 4{,}2 \\cdot 10^6$ Բք։
7. $1/8 = 2^{-3}$, $t = 3 \\cdot 5730 \\approx 17\\,200$ տարի առաջ։
8. $50\\,000$ տարի ($\\approx 9$ կիսատրոհման պարբերություն) հետո չափելու համար շատ քիչ \${}^{14}C$ է մնում․ դինոզավրերն ապրել են $65$ միլիոն և ավելի տարի առաջ։ Բրածոների շուրջ ապարները թվագրվում են ուրան-կապար կամ կալիում-արգոն մեթոդներով։`,
        ru: `## Радиоактивность

В 1896 г. Беккерель обнаружил, что соли урана засвечивают фотопластинку сквозь чёрную бумагу; Мария и Пьер Кюри открыли полоний и радий и назвали явление **радиоактивностью**: самопроизвольное превращение неустойчивых ядер с испусканием частиц. Резерфорд по поведению в магнитном поле разделил излучение на три вида:

| Излучение | Что это | Заряд | Проникающая способность |
|---|---|---|---|
| $\\alpha$ | ядро гелия \${}^{4}_{2}He$ | $+2e$ | лист бумаги, несколько см воздуха |
| $\\beta$ | быстрый электрон \${}^{0}_{-1}e$ (или позитрон) | $-e$ | несколько мм алюминия |
| $\\gamma$ | фотон очень высокой энергии | 0 | десятки см свинца |

## Правила смещения

При распаде сохраняются и зарядовое, и массовое числа:

> - **Альфа-распад:** \${}^{A}_{Z}X \\to {}^{A-4}_{Z-2}Y + {}^{4}_{2}He$ (элемент смещается на две клетки влево в таблице Менделеева).
> - **Бета-распад:** \${}^{A}_{Z}X \\to {}^{A}_{Z+1}Y + {}^{0}_{-1}e + \\bar\\nu$ (нейтрон превращается в протон, электрон и антинейтрино; элемент смещается на одну клетку вправо).
> - **Гамма-распад:** возбуждённое ядро испускает фотон; $A$ и $Z$ не меняются.

Пример: \${}^{238}_{92}U \\to {}^{234}_{90}Th + {}^{4}_{2}He$; \${}^{234}_{90}Th \\to {}^{234}_{91}Pa + {}^{0}_{-1}e + \\bar\\nu$. Цепочка таких распадов за 14 шагов превращает уран-238 в стабильный свинец-206.

## Закон распада

Отдельное ядро распадается в непредсказуемый момент, но большое их число подчиняется статистическому закону. Если за время $T$ (**период полураспада**) распадается половина любого образца, то через время $t$

$$N = N_0 \\cdot 2^{-t/T} = N_0\\, e^{-\\lambda t}, \\qquad \\lambda = \\dfrac{\\ln 2}{T} = \\dfrac{0{,}693}{T}.$$

$\\lambda$ — **постоянная распада**, вероятность распада в единицу времени; среднее время жизни $\\tau = 1/\\lambda = 1{,}44\\,T$. Периоды полураспада бывают от микросекунд до миллиардов лет:

| Нуклид | Период полураспада |
|---|---|
| \${}^{238}U$ | $4{,}5 \\cdot 10^9$ лет |
| \${}^{14}C$ | $5730$ лет |
| \${}^{226}Ra$ | $1600$ лет |
| \${}^{137}Cs$ | $30$ лет |
| \${}^{131}I$ | $8$ суток |
| \${}^{222}Rn$ | $3{,}8$ суток |

Закон распада не зависит от температуры, давления или химического состояния: ничто вне ядра не может его ускорить или замедлить.

## Активность

> **Активность** — число распадов в секунду: $A = \\lambda N = \\dfrac{0{,}693\\, N}{T}$. Единица — беккерель, $1$ Бк $= 1$ распад/с; старая единица кюри $1$ Ки $= 3{,}7 \\cdot 10^{10}$ Бк (активность 1 г радия).

Активность убывает по тому же закону: $A = A_0 \\cdot 2^{-t/T}$.

## Радиометрическое датирование

Космические лучи поддерживают постоянной долю \${}^{14}C$ в углекислом газе атмосферы; живые растения и животные поглощают его, а после смерти \${}^{14}C$ распадается с $T = 5730$ лет, не пополняясь. Измерение оставшейся доли даёт возраст дерева, кости или ткани до примерно $50\\,000$ лет. Распад \${}^{238}U$ в свинец и \${}^{40}K$ в аргон датирует горные породы на миллиарды лет; так был найден возраст Земли, $4{,}5 \\cdot 10^9$ лет.

## Разобранные примеры

**Пример 1.** Дополните распады: \${}^{226}_{88}Ra \\to\\ ? + {}^{4}_{2}He$; \${}^{60}_{27}Co \\to\\ ? + {}^{0}_{-1}e$.

Радий: $A = 222$, $Z = 86$: \${}^{222}_{86}Rn$ (радон). Кобальт: $A = 60$, $Z = 28$: \${}^{60}_{28}Ni$.

**Пример 2.** Иод-131 ($T = 8$ суток) применяют при лечении щитовидной железы. Какая доля дозы останется через 32 суток?

$t/T = 4$, значит $N/N_0 = 2^{-4} = 1/16 \\approx 6\\%$.

**Пример 3.** Образец радона содержит $8 \\cdot 10^{20}$ ядер. Сколько распадётся за $11{,}4$ суток ($T = 3{,}8$ суток)?

$t/T = 3$; осталось $8 \\cdot 10^{20} / 8 = 10^{20}$; распалось $7 \\cdot 10^{20}$.

**Пример 4.** Активность источника цезия-137 упала до $1/8$ начальной. Сколько прошло времени ($T = 30$ лет)?

$2^{-t/T} = 1/8 = 2^{-3}$, значит $t = 3T = 90$ лет.

**Пример 5.** Активность 1 г радия-226 ($T = 1600$ лет $= 5{,}05 \\cdot 10^{10}$ с).

$N = \\dfrac{1}{226} \\cdot 6{,}02 \\cdot 10^{23} = 2{,}66 \\cdot 10^{21}$; $A = \\dfrac{0{,}693 \\cdot 2{,}66 \\cdot 10^{21}}{5{,}05 \\cdot 10^{10}} \\approx 3{,}65 \\cdot 10^{10}$ Бк, что и есть определение 1 кюри.

**Пример 6.** Активность \${}^{14}C$ в куске древнего дерева составляет $25\\%$ от активности свежего. Его возраст?

$2^{-t/T} = 1/4$, значит $t = 2T = 11\\,460$ лет.

**Пример 7.** Образец угля содержит $70\\%$ современного содержания \${}^{14}C$. Возраст?

$2^{-t/T} = 0{,}7$: $t = -T \\log_2 0{,}7 = 5730 \\cdot 0{,}515 \\approx 2950$ лет.

**Пример 8.** Через 20 суток активность источника равна $1/5$ начальной. Период полураспада?

$2^{-20/T} = 0{,}2$, $20/T = \\log_2 5 = 2{,}32$, значит $T \\approx 8{,}6$ суток.

## Упражнения

1. Какое ядро образуется при альфа-распаде \${}^{210}_{84}Po$? При бета-распаде \${}^{14}_{6}C$?
2. Сколько альфа- и бета-распадов превращают \${}^{238}_{92}U$ в \${}^{206}_{82}Pb$?
3. У стронция-90 $T = 29$ лет. Какая доля стронция, выброшенного при аварии, останется через 87 лет?
4. Образец содержит $4 \\cdot 10^{18}$ ядер нуклида с $T = 10$ ч. Сколько ядер останется через 2 суток?
5. За какое время активность иода-131 ($T = 8$ суток) падает до $1\\%$?
6. Найдите постоянную распада и активность $10^{15}$ ядер \${}^{60}Co$ ($T = 5{,}3$ года).
7. Кости мамонта содержат $12{,}5\\%$ современной доли \${}^{14}C$. Когда он погиб?
8. Почему радиоуглеродное датирование нельзя применить к окаменелостям динозавров и что применяют вместо него?

### Ответы

1. \${}^{206}_{82}Pb$; \${}^{14}_{7}N$.
2. Масса уменьшается на 32, значит 8 альфа-распадов; они понижают $Z$ на 16, но $Z$ падает лишь на 10, значит 6 бета-распадов.
3. $t/T = 3$: $1/8 = 12{,}5\\%$.
4. $t/T = 48/10 = 4{,}8$; $N = 4 \\cdot 10^{18} \\cdot 2^{-4{,}8} \\approx 4 \\cdot 10^{18} \\cdot 0{,}036 \\approx 1{,}4 \\cdot 10^{17}$.
5. $2^{-t/T} = 0{,}01$, $t/T = \\log_2 100 = 6{,}64$, $t \\approx 53$ суток.
6. $\\lambda = 0{,}693/(5{,}3 \\cdot 3{,}15 \\cdot 10^7) = 4{,}15 \\cdot 10^{-9}$ с⁻¹; $A = 4{,}15 \\cdot 10^{-9} \\cdot 10^{15} \\approx 4{,}2 \\cdot 10^6$ Бк.
7. $1/8 = 2^{-3}$, $t = 3 \\cdot 5730 \\approx 17\\,200$ лет назад.
8. Через $50\\,000$ лет ($\\approx 9$ периодов) остаётся слишком мало \${}^{14}C$, чтобы его измерить; динозавры жили $65$ миллионов лет назад и раньше. Породы вокруг окаменелостей датируют уран-свинцовым или калий-аргоновым методами.`,
      },
      [
        q(t("In alpha decay the mass number of the nucleus…", "Ալֆա տրոհման ժամանակ միջուկի զանգվածային թիվը…", "При альфа-распаде массовое число ядра…"), [t("decreases by 4", "նվազում է 4-ով", "уменьшается на 4"), t("decreases by 2", "նվազում է 2-ով", "уменьшается на 2"), t("does not change", "չի փոխվում", "не меняется")], 0),
        q(t("In beta decay the charge number…", "Բետա տրոհման ժամանակ լիցքային թիվը…", "При бета-распаде зарядовое число…"), [t("increases by 1", "մեծանում է 1-ով", "увеличивается на 1"), t("decreases by 1", "նվազում է 1-ով", "уменьшается на 1"), t("decreases by 2", "նվազում է 2-ով", "уменьшается на 2")], 0),
        q(t("After three half-lives the fraction of undecayed nuclei is…", "Երեք կիսատրոհման պարբերությունից հետո չտրոհված միջուկների բաժինը…", "Через три периода полураспада доля нераспавшихся ядер равна…"), [t("1/8", "1/8", "1/8"), t("1/3", "1/3", "1/3"), t("1/6", "1/6", "1/6")], 0),
        q(t("The unit of activity is…", "Ակտիվության միավորն է…", "Единица активности…"), [t("becquerel", "բեկերել", "беккерель"), t("sievert", "զիվերտ", "зиверт"), t("electron-volt", "էլեկտրոնվոլտ", "электронвольт")], 0),
        q(t("The half-life of a nuclide…", "Նուկլիդի կիսատրոհման պարբերությունը…", "Период полураспада нуклида…"), [t("does not depend on temperature or chemical state", "կախված չէ ջերմաստիճանից կամ քիմիական վիճակից", "не зависит от температуры и химического состояния"), t("doubles when heated", "տաքացնելիս կրկնապատկվում է", "удваивается при нагревании"), t("depends on the pressure", "կախված է ճնշումից", "зависит от давления")], 0),
        q(t("Radiocarbon dating uses the decay of…", "Ռադիոածխածնային թվագրումն օգտագործում է … տրոհումը։", "Радиоуглеродное датирование использует распад…"), [t("carbon-14", "ածխածին-14-ի", "углерода-14"), t("uranium-238", "ուրան-238-ի", "урана-238"), t("iodine-131", "յոդ-131-ի", "иода-131")], 0),
      ],
    ),
    lesson(
      "nuclear-reactions-12",
      ["Nuclear reactions; energy yield", "Միջուկային ռեակցիաներ, էներգիայի ելք", "Ядерные реакции; энергетический выход"],
      {
        en: ["Balance nuclear reaction equations using conservation of charge and mass number", "Compute the energy yield Q = (m_before − m_after)·931.5 MeV and tell exothermic from endothermic reactions", "Describe the discovery of the proton, the neutron and artificial radioactivity, and the role of neutrons as projectiles"],
        hy: ["Հավասարակշռել միջուկային ռեակցիաների հավասարումները լիցքի և զանգվածային թվի պահպանմամբ", "Հաշվել էներգիայի ելքը Q = (m_առաջ − m_հետո)·931,5 ՄէՎ և տարբերել էկզոթերմ և էնդոթերմ ռեակցիաները", "Նկարագրել պրոտոնի, նեյտրոնի և արհեստական ռադիոակտիվության հայտնաբերումը և նեյտրոնների դերը որպես ռմբակոծող մասնիկ"],
        ru: ["Составлять уравнения ядерных реакций по законам сохранения заряда и массового числа", "Вычислять энергетический выход Q = (m_до − m_после)·931,5 МэВ и различать экзо- и эндотермические реакции", "Описывать открытие протона, нейтрона и искусственной радиоактивности и роль нейтронов как снарядов"],
      },
      {
        en: `## What a nuclear reaction is

> A **nuclear reaction** is a transformation of nuclei caused by their interaction with each other or with particles. Written as $a + X \\to Y + b$ or briefly $X(a, b)Y$.

Unlike radioactive decay, a reaction needs a projectile: an alpha particle, proton, neutron, deuteron or photon. Four quantities are conserved: **electric charge** (the sum of $Z$), **the number of nucleons** (the sum of $A$), **energy** (including rest energy) and **momentum**.

## Historic reactions

- **1919, Rutherford, discovery of the proton:** \${}^{14}_{7}N + {}^{4}_{2}He \\to {}^{17}_{8}O + {}^{1}_{1}H$: the first artificial transmutation of one element into another.
- **1932, Chadwick, discovery of the neutron:** \${}^{9}_{4}Be + {}^{4}_{2}He \\to {}^{12}_{6}C + {}^{1}_{0}n$.
- **1932, Cockcroft and Walton:** first reaction with accelerated protons, \${}^{7}_{3}Li + {}^{1}_{1}H \\to 2\\,{}^{4}_{2}He$, which also verified $E = mc^2$.
- **1934, Irene and Frederic Joliot-Curie, artificial radioactivity:** \${}^{27}_{13}Al + {}^{4}_{2}He \\to {}^{30}_{15}P + {}^{1}_{0}n$; the phosphorus-30 is radioactive and decays by emitting a positron.

Because it has no charge, the **neutron** is not repelled by the nucleus and enters it even at low energies; slow (thermal) neutrons are captured especially easily, as Fermi showed in 1934. Neutron capture \${}^{A}X + n \\to {}^{A+1}X + \\gamma$ makes radioactive isotopes for medicine and industry.

## Energy yield

The **energy yield** $Q$ of a reaction is the difference between the rest energies before and after:

$$Q = \\left(\\sum m_{\\text{before}} - \\sum m_{\\text{after}}\\right) c^2 = \\Delta m\\ [\\text{u}] \\cdot 931{.}5\\ \\text{MeV}.$$

> - $Q > 0$: **exothermic** reaction; energy is released as kinetic energy of the products.
> - $Q < 0$: **endothermic** reaction; it goes only if the projectile brings at least $\\lvert Q \\rvert$ of energy (a bit more, to conserve momentum).

Either atomic or nuclear masses can be used, as long as the electrons balance on both sides. $Q$ can also be found from binding energies: $Q = \\sum E_{b,\\text{after}} - \\sum E_{b,\\text{before}}$.

## Masses for calculations (atomic, u)

| Nuclide | Mass | Nuclide | Mass |
|---|---|---|---|
| $n$ | 1.00866 | \${}^{1}H$ | 1.00783 |
| \${}^{2}H$ | 2.01410 | \${}^{3}H$ | 3.01605 |
| \${}^{3}He$ | 3.01603 | \${}^{4}He$ | 4.00260 |
| \${}^{7}Li$ | 7.01600 | \${}^{9}Be$ | 9.01218 |
| \${}^{12}C$ | 12.00000 | \${}^{14}N$ | 14.00307 |
| \${}^{17}O$ | 16.99913 | \${}^{27}Al$ | 26.98154 |

## Worked examples

**Example 1.** Find the missing particle: \${}^{27}_{13}Al + {}^{1}_{0}n \\to {}^{24}_{11}Na + \\ ?$

Charge: $13 + 0 = 11 + z$, so $z = 2$; nucleons: $27 + 1 = 24 + a$, $a = 4$. The particle is \${}^{4}_{2}He$ (alpha).

**Example 2.** Complete: \${}^{14}_{7}N + {}^{1}_{0}n \\to \\ ? + {}^{1}_{1}H$.

$Z = 7 + 0 - 1 = 6$, $A = 14 + 1 - 1 = 14$: \${}^{14}_{6}C$. This reaction, caused by cosmic-ray neutrons, is the source of atmospheric carbon-14.

**Example 3.** Energy yield of Rutherford's reaction \${}^{14}N + {}^{4}He \\to {}^{17}O + {}^{1}H$.

Before: $14{.}00307 + 4{.}00260 = 18{.}00567$; after: $16{.}99913 + 1{.}00783 = 18{.}00696$. $\\Delta m = -0{.}00129$ u; $Q = -1{.}20$ MeV. Endothermic: the alpha particle must bring more than $1{.}2$ MeV (Rutherford used $7{.}7$ MeV alphas from radium).

**Example 4.** Energy yield of \${}^{7}Li + {}^{1}H \\to 2\\,{}^{4}He$.

Before: $7{.}01600 + 1{.}00783 = 8{.}02383$; after: $2 \\cdot 4{.}00260 = 8{.}00520$. $\\Delta m = 0{.}01863$ u; $Q = 17{.}35$ MeV, exothermic. Cockcroft and Walton measured the kinetic energy of the two alpha particles and found exactly this value.

**Example 5.** Deuterium–tritium fusion \${}^{2}H + {}^{3}H \\to {}^{4}He + n$.

Before: $2{.}01410 + 3{.}01605 = 5{.}03015$; after: $4{.}00260 + 1{.}00866 = 5{.}01126$. $\\Delta m = 0{.}01889$ u; $Q = 17{.}6$ MeV. Of this, $14{.}1$ MeV goes to the neutron and $3{.}5$ MeV to the alpha (momentum conservation).

**Example 6.** Chadwick's reaction \${}^{9}Be + {}^{4}He \\to {}^{12}C + n$.

Before: $9{.}01218 + 4{.}00260 = 13{.}01478$; after: $12{.}00000 + 1{.}00866 = 13{.}00866$. $Q = 0{.}00612 \\cdot 931{.}5 = 5{.}7$ MeV, exothermic.

**Example 7.** Energy yield from binding energies: \${}^{2}H + {}^{2}H \\to {}^{3}He + n$, with $E_b({}^{2}H) = 2{.}22$ MeV and $E_b({}^{3}He) = 7{.}72$ MeV.

$Q = 7{.}72 - 2 \\cdot 2{.}22 = 3{.}28$ MeV (the free neutron has zero binding energy).

**Example 8.** How much energy is released when $1$ g of deuterium–tritium mixture reacts ($Q = 17{.}6$ MeV per event, mean molar mass of the pair $5$ g)?

Number of events: $N = \\dfrac{1}{5} \\cdot 6{.}02 \\cdot 10^{23} = 1{.}2 \\cdot 10^{23}$. $E = 1{.}2 \\cdot 10^{23} \\cdot 17{.}6 \\cdot 1{.}6 \\cdot 10^{-13} \\approx 3{.}4 \\cdot 10^{11}$ J, equivalent to burning about $10$ tonnes of coal.

## Exercises

1. Find the unknown: (a) \${}^{9}_{4}Be + {}^{1}_{1}H \\to {}^{6}_{3}Li + \\ ?$; (b) \${}^{55}_{25}Mn + {}^{1}_{1}H \\to {}^{55}_{26}Fe + \\ ?$; (c) \${}^{235}_{92}U + n \\to {}^{140}_{54}Xe + {}^{94}_{38}Sr + \\ ?$
2. Write the reaction in which an alpha particle hits \${}^{10}_{5}B$ and a neutron is released.
3. Compute the energy yield of \${}^{3}He + {}^{2}H \\to {}^{4}He + {}^{1}H$.
4. Compute the energy yield of \${}^{2}H + {}^{2}H \\to {}^{3}H + {}^{1}H$. Is the reaction exothermic?
5. Is the reaction \${}^{4}He + {}^{4}He \\to {}^{8}Be$ (mass of \${}^{8}Be$ $= 8{.}00531$ u) exothermic or endothermic? What does this say about stellar helium burning?
6. Why do neutrons penetrate nuclei more easily than protons of the same energy?
7. From binding energies ($E_b({}^{4}He) = 28{.}3$ MeV, $E_b({}^{3}H) = 8{.}48$ MeV, $E_b({}^{2}H) = 2{.}22$ MeV) find $Q$ for \${}^{2}H + {}^{3}H \\to {}^{4}He + n$.
8. How much energy, in joules, is released in $10^{20}$ events of the lithium–proton reaction (example 4)?

### Answers

1. (a) \${}^{4}_{2}He$; (b) \${}^{1}_{0}n$; (c) $2\\,{}^{1}_{0}n$.
2. \${}^{10}_{5}B + {}^{4}_{2}He \\to {}^{13}_{7}N + {}^{1}_{0}n$.
3. Before $5{.}03013$, after $5{.}01043$; $\\Delta m = 0{.}0197$ u; $Q \\approx 18{.}3$ MeV.
4. Before $4{.}02820$, after $4{.}02388$; $Q = 0{.}00432 \\cdot 931{.}5 \\approx 4{.}0$ MeV, exothermic.
5. Before $8{.}00520$, after $8{.}00531$; $Q \\approx -0{.}1$ MeV, endothermic: beryllium-8 falls apart at once, so stars burn helium through the triple-alpha process, where a third helium nucleus arrives before the beryllium decays.
6. A neutron has no charge, so the Coulomb barrier of the nucleus does not repel it.
7. $Q = 28{.}3 - 8{.}48 - 2{.}22 = 17{.}6$ MeV.
8. $10^{20} \\cdot 17{.}35 \\cdot 1{.}6 \\cdot 10^{-13} \\approx 2{.}8 \\cdot 10^8$ J.`,
        hy: `## Ինչ է միջուկային ռեակցիան

> **Միջուկային ռեակցիան** միջուկների փոխակերպումն է, որն առաջանում է նրանց փոխազդեցությունից միմյանց կամ մասնիկների հետ։ Գրվում է $a + X \\to Y + b$ կամ համառոտ $X(a, b)Y$։

Ի տարբերություն ռադիոակտիվ տրոհման, ռեակցիային անհրաժեշտ է ռմբակոծող մասնիկ․ ալֆա մասնիկ, պրոտոն, նեյտրոն, դեյտրոն կամ ֆոտոն։ Պահպանվում են չորս մեծություն․ **էլեկտրական լիցքը** ($Z$-երի գումարը), **նուկլոնների թիվը** ($A$-ների գումարը), **էներգիան** (ներառյալ հանգստի էներգիան) և **իմպուլսը**։

## Պատմական ռեակցիաներ

- **1919, Ռեզերֆորդ, պրոտոնի հայտնաբերում․** \${}^{14}_{7}N + {}^{4}_{2}He \\to {}^{17}_{8}O + {}^{1}_{1}H$․ մի տարրի առաջին արհեստական փոխակերպումը մյուսի։
- **1932, Չեդվիկ, նեյտրոնի հայտնաբերում․** \${}^{9}_{4}Be + {}^{4}_{2}He \\to {}^{12}_{6}C + {}^{1}_{0}n$։
- **1932, Քոքրոֆթ և Ուոլթոն․** առաջին ռեակցիան արագացված պրոտոններով, \${}^{7}_{3}Li + {}^{1}_{1}H \\to 2\\,{}^{4}_{2}He$, որը նաև ստուգեց $E = mc^2$-ը։
- **1934, Իրեն և Ֆրեդերիկ Ժոլիո-Կյուրի, արհեստական ռադիոակտիվություն․** \${}^{27}_{13}Al + {}^{4}_{2}He \\to {}^{30}_{15}P + {}^{1}_{0}n$․ ֆոսֆոր-30-ը ռադիոակտիվ է և տրոհվում է պոզիտրոն արձակելով։

Քանի որ լիցք չունի, **նեյտրոնը** միջուկից չի վանվում և նրա մեջ է մտնում նույնիսկ ցածր էներգիաներում․ դանդաղ (ջերմային) նեյտրոնները հատկապես հեշտ են գրավվում, ինչպես 1934 թ․ ցույց տվեց Ֆերմին։ Նեյտրոնի գրավումը \${}^{A}X + n \\to {}^{A+1}X + \\gamma$ ստեղծում է ռադիոակտիվ իզոտոպներ բժշկության և արդյունաբերության համար։

## Էներգիայի ելք

Ռեակցիայի **էներգիայի ելքը** $Q$ հանգստի էներգիաների տարբերությունն է ռեակցիայից առաջ և հետո․

$$Q = \\left(\\sum m_{\\text{առաջ}} - \\sum m_{\\text{հետո}}\\right) c^2 = \\Delta m \\cdot 931{,}5\\ \\text{ՄէՎ}$$

որտեղ $\\Delta m$-ն զ․ա․մ․-ով է։

> - $Q > 0$․ **էկզոթերմ** ռեակցիա․ էներգիան անջատվում է որպես արգասիքների կինետիկ էներգիա։
> - $Q < 0$․ **էնդոթերմ** ռեակցիա․ այն ընթանում է միայն, եթե ռմբակոծող մասնիկը բերում է առնվազն $\\lvert Q \\rvert$ էներգիա (մի փոքր ավելի՝ իմպուլսի պահպանման համար)։

Կարելի է օգտագործել և՛ ատոմային, և՛ միջուկային զանգվածներ, եթե էլեկտրոններն երկու կողմում հավասարակշռված են։ $Q$-ն կարելի է գտնել նաև կապի էներգիաներից․ $Q = \\sum E_{\\text{կ,հետո}} - \\sum E_{\\text{կ,առաջ}}$։

## Զանգվածներ հաշվարկների համար (ատոմային, զ․ա․մ․)

| Նուկլիդ | Զանգված | Նուկլիդ | Զանգված |
|---|---|---|---|
| $n$ | 1,00866 | \${}^{1}H$ | 1,00783 |
| \${}^{2}H$ | 2,01410 | \${}^{3}H$ | 3,01605 |
| \${}^{3}He$ | 3,01603 | \${}^{4}He$ | 4,00260 |
| \${}^{7}Li$ | 7,01600 | \${}^{9}Be$ | 9,01218 |
| \${}^{12}C$ | 12,00000 | \${}^{14}N$ | 14,00307 |
| \${}^{17}O$ | 16,99913 | \${}^{27}Al$ | 26,98154 |

## Լուծված օրինակներ

**Օրինակ 1։** Գտեք բացակայող մասնիկը․ \${}^{27}_{13}Al + {}^{1}_{0}n \\to {}^{24}_{11}Na + \\ ?$

Լիցք․ $13 + 0 = 11 + z$, ուստի $z = 2$․ նուկլոններ․ $27 + 1 = 24 + a$, $a = 4$։ Մասնիկը \${}^{4}_{2}He$ է (ալֆա)։

**Օրինակ 2։** Լրացրեք․ \${}^{14}_{7}N + {}^{1}_{0}n \\to \\ ? + {}^{1}_{1}H$։

$Z = 7 + 0 - 1 = 6$, $A = 14 + 1 - 1 = 14$․ \${}^{14}_{6}C$։ Այս ռեակցիան, որն առաջացնում են տիեզերական ճառագայթների նեյտրոնները, մթնոլորտային ածխածին-14-ի աղբյուրն է։

**Օրինակ 3։** Ռեզերֆորդի ռեակցիայի \${}^{14}N + {}^{4}He \\to {}^{17}O + {}^{1}H$ էներգիայի ելքը։

Առաջ․ $14{,}00307 + 4{,}00260 = 18{,}00567$․ հետո․ $16{,}99913 + 1{,}00783 = 18{,}00696$։ $\\Delta m = -0{,}00129$ զ․ա․մ․․ $Q = -1{,}20$ ՄէՎ։ Էնդոթերմ է․ ալֆա մասնիկը պետք է բերի $1{,}2$ ՄէՎ-ից ավելի (Ռեզերֆորդն օգտագործում էր ռադիումի $7{,}7$ ՄէՎ ալֆա մասնիկներ)։

**Օրինակ 4։** \${}^{7}Li + {}^{1}H \\to 2\\,{}^{4}He$ ռեակցիայի էներգիայի ելքը։

Առաջ․ $7{,}01600 + 1{,}00783 = 8{,}02383$․ հետո․ $2 \\cdot 4{,}00260 = 8{,}00520$։ $\\Delta m = 0{,}01863$ զ․ա․մ․․ $Q = 17{,}35$ ՄէՎ, էկզոթերմ։ Քոքրոֆթն ու Ուոլթոնը չափեցին երկու ալֆա մասնիկների կինետիկ էներգիան և ստացան ճիշտ այս արժեքը։

**Օրինակ 5։** Դեյտերիում-տրիտիում սինթեզ \${}^{2}H + {}^{3}H \\to {}^{4}He + n$։

Առաջ․ $2{,}01410 + 3{,}01605 = 5{,}03015$․ հետո․ $4{,}00260 + 1{,}00866 = 5{,}01126$։ $\\Delta m = 0{,}01889$ զ․ա․մ․․ $Q = 17{,}6$ ՄէՎ։ Դրանից $14{,}1$ ՄէՎ բաժին է ընկնում նեյտրոնին և $3{,}5$ ՄէՎ՝ ալֆա մասնիկին (իմպուլսի պահպանում)։

**Օրինակ 6։** Չեդվիկի ռեակցիան \${}^{9}Be + {}^{4}He \\to {}^{12}C + n$։

Առաջ․ $9{,}01218 + 4{,}00260 = 13{,}01478$․ հետո․ $12{,}00000 + 1{,}00866 = 13{,}00866$։ $Q = 0{,}00612 \\cdot 931{,}5 = 5{,}7$ ՄէՎ, էկզոթերմ։

**Օրինակ 7։** Էներգիայի ելքը կապի էներգիաներից․ \${}^{2}H + {}^{2}H \\to {}^{3}He + n$, որտեղ $E_{\\text{կ}}({}^{2}H) = 2{,}22$ ՄէՎ և $E_{\\text{կ}}({}^{3}He) = 7{,}72$ ՄէՎ։

$Q = 7{,}72 - 2 \\cdot 2{,}22 = 3{,}28$ ՄէՎ (ազատ նեյտրոնի կապի էներգիան զրո է)։

**Օրինակ 8։** Որքա՞ն էներգիա է անջատվում, երբ $1$ գ դեյտերիում-տրիտիում խառնուրդ ռեակցիայի է մտնում ($Q = 17{,}6$ ՄէՎ մեկ դեպքին, զույգի միջին մոլային զանգվածը $5$ գ)։

Դեպքերի թիվը․ $N = \\dfrac{1}{5} \\cdot 6{,}02 \\cdot 10^{23} = 1{,}2 \\cdot 10^{23}$։ $E = 1{,}2 \\cdot 10^{23} \\cdot 17{,}6 \\cdot 1{,}6 \\cdot 10^{-13} \\approx 3{,}4 \\cdot 10^{11}$ Ջ, որը համարժեք է մոտ $10$ տոննա ածխի այրմանը։

## Վարժություններ

1. Գտեք անհայտը․ (ա) \${}^{9}_{4}Be + {}^{1}_{1}H \\to {}^{6}_{3}Li + \\ ?$․ (բ) \${}^{55}_{25}Mn + {}^{1}_{1}H \\to {}^{55}_{26}Fe + \\ ?$․ (գ) \${}^{235}_{92}U + n \\to {}^{140}_{54}Xe + {}^{94}_{38}Sr + \\ ?$
2. Գրեք այն ռեակցիան, որում ալֆա մասնիկը հարվածում է \${}^{10}_{5}B$-ին և անջատվում է նեյտրոն։
3. Հաշվեք \${}^{3}He + {}^{2}H \\to {}^{4}He + {}^{1}H$ ռեակցիայի էներգիայի ելքը։
4. Հաշվեք \${}^{2}H + {}^{2}H \\to {}^{3}H + {}^{1}H$ ռեակցիայի էներգիայի ելքը։ Էկզոթե՞րմ է ռեակցիան։
5. \${}^{4}He + {}^{4}He \\to {}^{8}Be$ ռեակցիան (\${}^{8}Be$-ի զանգվածը $8{,}00531$ զ․ա․մ․) էկզոթե՞րմ է, թե՞ էնդոթերմ։ Ի՞նչ է սա ասում աստղերում հելիումի այրման մասին։
6. Ինչո՞ւ են նեյտրոնները միջուկ թափանցում ավելի հեշտ, քան նույն էներգիայի պրոտոնները։
7. Կապի էներգիաներից ($E_{\\text{կ}}({}^{4}He) = 28{,}3$ ՄէՎ, $E_{\\text{կ}}({}^{3}H) = 8{,}48$ ՄէՎ, $E_{\\text{կ}}({}^{2}H) = 2{,}22$ ՄէՎ) գտեք $Q$-ն \${}^{2}H + {}^{3}H \\to {}^{4}He + n$ ռեակցիայի համար։
8. Որքա՞ն էներգիա է անջատվում ջոուլով լիթիում-պրոտոն ռեակցիայի (օրինակ 4) $10^{20}$ դեպքում։

### Պատասխաններ

1. (ա) \${}^{4}_{2}He$․ (բ) \${}^{1}_{0}n$․ (գ) $2\\,{}^{1}_{0}n$։
2. \${}^{10}_{5}B + {}^{4}_{2}He \\to {}^{13}_{7}N + {}^{1}_{0}n$։
3. Առաջ $5{,}03013$, հետո $5{,}01043$․ $\\Delta m = 0{,}0197$ զ․ա․մ․․ $Q \\approx 18{,}3$ ՄէՎ։
4. Առաջ $4{,}02820$, հետո $4{,}02388$․ $Q = 0{,}00432 \\cdot 931{,}5 \\approx 4{,}0$ ՄէՎ, էկզոթերմ։
5. Առաջ $8{,}00520$, հետո $8{,}00531$․ $Q \\approx -0{,}1$ ՄէՎ, էնդոթերմ․ բերիլիում-8-ն անմիջապես քայքայվում է, ուստի աստղերը հելիում այրում են եռալֆա պրոցեսով, որտեղ երրորդ հելիումի միջուկը հասնում է բերիլիումի տրոհումից առաջ։
6. Նեյտրոնը լիցք չունի, ուստի միջուկի կուլոնյան պատնեշը նրան չի վանում։
7. $Q = 28{,}3 - 8{,}48 - 2{,}22 = 17{,}6$ ՄէՎ։
8. $10^{20} \\cdot 17{,}35 \\cdot 1{,}6 \\cdot 10^{-13} \\approx 2{,}8 \\cdot 10^8$ Ջ։`,
        ru: `## Что такое ядерная реакция

> **Ядерная реакция** — превращение ядер, вызванное их взаимодействием друг с другом или с частицами. Записывается как $a + X \\to Y + b$ или кратко $X(a, b)Y$.

В отличие от радиоактивного распада, реакции нужен снаряд: альфа-частица, протон, нейтрон, дейтрон или фотон. Сохраняются четыре величины: **электрический заряд** (сумма $Z$), **число нуклонов** (сумма $A$), **энергия** (включая энергию покоя) и **импульс**.

## Исторические реакции

- **1919, Резерфорд, открытие протона:** \${}^{14}_{7}N + {}^{4}_{2}He \\to {}^{17}_{8}O + {}^{1}_{1}H$: первое искусственное превращение одного элемента в другой.
- **1932, Чедвик, открытие нейтрона:** \${}^{9}_{4}Be + {}^{4}_{2}He \\to {}^{12}_{6}C + {}^{1}_{0}n$.
- **1932, Кокрофт и Уолтон:** первая реакция на ускоренных протонах, \${}^{7}_{3}Li + {}^{1}_{1}H \\to 2\\,{}^{4}_{2}He$, которая заодно проверила $E = mc^2$.
- **1934, Ирен и Фредерик Жолио-Кюри, искусственная радиоактивность:** \${}^{27}_{13}Al + {}^{4}_{2}He \\to {}^{30}_{15}P + {}^{1}_{0}n$; фосфор-30 радиоактивен и распадается с испусканием позитрона.

Не имея заряда, **нейтрон** не отталкивается ядром и проникает в него даже при малых энергиях; медленные (тепловые) нейтроны захватываются особенно легко, как показал Ферми в 1934 г. Захват нейтрона \${}^{A}X + n \\to {}^{A+1}X + \\gamma$ даёт радиоактивные изотопы для медицины и промышленности.

## Энергетический выход

**Энергетический выход** $Q$ реакции — разность энергий покоя до и после неё:

$$Q = \\left(\\sum m_{\\text{до}} - \\sum m_{\\text{после}}\\right) c^2 = \\Delta m\\ [\\text{а.е.м.}] \\cdot 931{,}5\\ \\text{МэВ}.$$

> - $Q > 0$: **экзотермическая** реакция; энергия выделяется в виде кинетической энергии продуктов.
> - $Q < 0$: **эндотермическая** реакция; она идёт лишь, если снаряд приносит не меньше $\\lvert Q \\rvert$ энергии (чуть больше — ради сохранения импульса).

Можно брать как атомные, так и ядерные массы, лишь бы электроны уравновешивались с обеих сторон. $Q$ можно найти и через энергии связи: $Q = \\sum E_{\\text{св,после}} - \\sum E_{\\text{св,до}}$.

## Массы для расчётов (атомные, а.е.м.)

| Нуклид | Масса | Нуклид | Масса |
|---|---|---|---|
| $n$ | 1,00866 | \${}^{1}H$ | 1,00783 |
| \${}^{2}H$ | 2,01410 | \${}^{3}H$ | 3,01605 |
| \${}^{3}He$ | 3,01603 | \${}^{4}He$ | 4,00260 |
| \${}^{7}Li$ | 7,01600 | \${}^{9}Be$ | 9,01218 |
| \${}^{12}C$ | 12,00000 | \${}^{14}N$ | 14,00307 |
| \${}^{17}O$ | 16,99913 | \${}^{27}Al$ | 26,98154 |

## Разобранные примеры

**Пример 1.** Найдите недостающую частицу: \${}^{27}_{13}Al + {}^{1}_{0}n \\to {}^{24}_{11}Na + \\ ?$

Заряд: $13 + 0 = 11 + z$, значит $z = 2$; нуклоны: $27 + 1 = 24 + a$, $a = 4$. Частица — \${}^{4}_{2}He$ (альфа).

**Пример 2.** Дополните: \${}^{14}_{7}N + {}^{1}_{0}n \\to \\ ? + {}^{1}_{1}H$.

$Z = 7 + 0 - 1 = 6$, $A = 14 + 1 - 1 = 14$: \${}^{14}_{6}C$. Эта реакция, вызываемая нейтронами космических лучей, — источник атмосферного углерода-14.

**Пример 3.** Энергетический выход реакции Резерфорда \${}^{14}N + {}^{4}He \\to {}^{17}O + {}^{1}H$.

До: $14{,}00307 + 4{,}00260 = 18{,}00567$; после: $16{,}99913 + 1{,}00783 = 18{,}00696$. $\\Delta m = -0{,}00129$ а.е.м.; $Q = -1{,}20$ МэВ. Эндотермическая: альфа-частица должна принести больше $1{,}2$ МэВ (Резерфорд использовал альфа-частицы радия с энергией $7{,}7$ МэВ).

**Пример 4.** Энергетический выход \${}^{7}Li + {}^{1}H \\to 2\\,{}^{4}He$.

До: $7{,}01600 + 1{,}00783 = 8{,}02383$; после: $2 \\cdot 4{,}00260 = 8{,}00520$. $\\Delta m = 0{,}01863$ а.е.м.; $Q = 17{,}35$ МэВ, экзотермическая. Кокрофт и Уолтон измерили кинетическую энергию двух альфа-частиц и получили ровно это значение.

**Пример 5.** Дейтерий-тритиевый синтез \${}^{2}H + {}^{3}H \\to {}^{4}He + n$.

До: $2{,}01410 + 3{,}01605 = 5{,}03015$; после: $4{,}00260 + 1{,}00866 = 5{,}01126$. $\\Delta m = 0{,}01889$ а.е.м.; $Q = 17{,}6$ МэВ. Из них $14{,}1$ МэВ уносит нейтрон и $3{,}5$ МэВ — альфа-частица (сохранение импульса).

**Пример 6.** Реакция Чедвика \${}^{9}Be + {}^{4}He \\to {}^{12}C + n$.

До: $9{,}01218 + 4{,}00260 = 13{,}01478$; после: $12{,}00000 + 1{,}00866 = 13{,}00866$. $Q = 0{,}00612 \\cdot 931{,}5 = 5{,}7$ МэВ, экзотермическая.

**Пример 7.** Выход через энергии связи: \${}^{2}H + {}^{2}H \\to {}^{3}He + n$, где $E_{\\text{св}}({}^{2}H) = 2{,}22$ МэВ и $E_{\\text{св}}({}^{3}He) = 7{,}72$ МэВ.

$Q = 7{,}72 - 2 \\cdot 2{,}22 = 3{,}28$ МэВ (у свободного нейтрона энергия связи равна нулю).

**Пример 8.** Сколько энергии выделится при реакции $1$ г дейтерий-тритиевой смеси ($Q = 17{,}6$ МэВ на акт, средняя молярная масса пары $5$ г)?

Число актов: $N = \\dfrac{1}{5} \\cdot 6{,}02 \\cdot 10^{23} = 1{,}2 \\cdot 10^{23}$. $E = 1{,}2 \\cdot 10^{23} \\cdot 17{,}6 \\cdot 1{,}6 \\cdot 10^{-13} \\approx 3{,}4 \\cdot 10^{11}$ Дж, что равно сгоранию около $10$ тонн угля.

## Упражнения

1. Найдите неизвестное: (а) \${}^{9}_{4}Be + {}^{1}_{1}H \\to {}^{6}_{3}Li + \\ ?$; (б) \${}^{55}_{25}Mn + {}^{1}_{1}H \\to {}^{55}_{26}Fe + \\ ?$; (в) \${}^{235}_{92}U + n \\to {}^{140}_{54}Xe + {}^{94}_{38}Sr + \\ ?$
2. Запишите реакцию, в которой альфа-частица попадает в \${}^{10}_{5}B$ и вылетает нейтрон.
3. Вычислите энергетический выход \${}^{3}He + {}^{2}H \\to {}^{4}He + {}^{1}H$.
4. Вычислите энергетический выход \${}^{2}H + {}^{2}H \\to {}^{3}H + {}^{1}H$. Экзотермична ли реакция?
5. Реакция \${}^{4}He + {}^{4}He \\to {}^{8}Be$ (масса \${}^{8}Be$ равна $8{,}00531$ а.е.м.) экзо- или эндотермическая? Что это говорит о горении гелия в звёздах?
6. Почему нейтроны проникают в ядра легче, чем протоны той же энергии?
7. По энергиям связи ($E_{\\text{св}}({}^{4}He) = 28{,}3$ МэВ, $E_{\\text{св}}({}^{3}H) = 8{,}48$ МэВ, $E_{\\text{св}}({}^{2}H) = 2{,}22$ МэВ) найдите $Q$ для \${}^{2}H + {}^{3}H \\to {}^{4}He + n$.
8. Сколько энергии в джоулях выделяется в $10^{20}$ актах литий-протонной реакции (пример 4)?

### Ответы

1. (а) \${}^{4}_{2}He$; (б) \${}^{1}_{0}n$; (в) $2\\,{}^{1}_{0}n$.
2. \${}^{10}_{5}B + {}^{4}_{2}He \\to {}^{13}_{7}N + {}^{1}_{0}n$.
3. До $5{,}03013$, после $5{,}01043$; $\\Delta m = 0{,}0197$ а.е.м.; $Q \\approx 18{,}3$ МэВ.
4. До $4{,}02820$, после $4{,}02388$; $Q = 0{,}00432 \\cdot 931{,}5 \\approx 4{,}0$ МэВ, экзотермическая.
5. До $8{,}00520$, после $8{,}00531$; $Q \\approx -0{,}1$ МэВ, эндотермическая: бериллий-8 сразу разваливается, поэтому звёзды сжигают гелий в тройном альфа-процессе, где третье ядро гелия подходит раньше, чем бериллий распадётся.
6. У нейтрона нет заряда, поэтому кулоновский барьер ядра его не отталкивает.
7. $Q = 28{,}3 - 8{,}48 - 2{,}22 = 17{,}6$ МэВ.
8. $10^{20} \\cdot 17{,}35 \\cdot 1{,}6 \\cdot 10^{-13} \\approx 2{,}8 \\cdot 10^8$ Дж.`,
      },
      [
        q(t("In a nuclear reaction the sum of the mass numbers…", "Միջուկային ռեակցիայում զանգվածային թվերի գումարը…", "В ядерной реакции сумма массовых чисел…"), [t("is conserved", "պահպանվում է", "сохраняется"), t("always increases", "միշտ մեծանում է", "всегда растёт"), t("always decreases", "միշտ նվազում է", "всегда убывает")], 0),
        q(t("The proton was discovered by Rutherford in the reaction of alpha particles with…", "Պրոտոնը Ռեզերֆորդը հայտնաբերեց ալֆա մասնիկների ռեակցիայում … հետ։", "Протон был открыт Резерфордом в реакции альфа-частиц с…"), [t("nitrogen", "ազոտի", "азотом"), t("beryllium", "բերիլիումի", "бериллием"), t("uranium", "ուրանի", "ураном")], 0),
        q(t("The missing particle in ⁹₄Be + ⁴₂He → ¹²₆C + ? is…", "⁹₄Be + ⁴₂He → ¹²₆C + ? ռեակցիայի բացակայող մասնիկն է…", "Недостающая частица в ⁹₄Be + ⁴₂He → ¹²₆C + ? — это…"), [t("a neutron", "նեյտրոն", "нейтрон"), t("a proton", "պրոտոն", "протон"), t("an electron", "էլեկտրոն", "электрон")], 0),
        q(t("A reaction with Q < 0…", "Q < 0 ռեակցիան…", "Реакция с Q < 0…"), [t("needs energy from the projectile to occur", "ընթանալու համար ռմբակոծող մասնիկի էներգիա է պահանջում", "требует энергии снаряда, чтобы произойти"), t("releases energy", "էներգիա է անջատում", "выделяет энергию"), t("is impossible", "անհնար է", "невозможна")], 0),
        q(t("Neutrons enter nuclei easily because…", "Նեյտրոնները հեշտ են մտնում միջուկ, քանի որ…", "Нейтроны легко проникают в ядра, потому что…"), [t("they have no electric charge", "էլեկտրական լիցք չունեն", "у них нет электрического заряда"), t("they are very light", "շատ թեթև են", "они очень лёгкие"), t("they move at the speed of light", "շարժվում են լույսի արագությամբ", "они движутся со скоростью света")], 0),
        q(t("Artificial radioactivity was discovered by…", "Արհեստական ռադիոակտիվությունը հայտնաբերել են…", "Искусственную радиоактивность открыли…"), [t("Irene and Frederic Joliot-Curie", "Իրեն և Ֆրեդերիկ Ժոլիո-Կյուրիները", "Ирен и Фредерик Жолио-Кюри"), t("Becquerel", "Բեկերելը", "Беккерель"), t("Bohr", "Բորը", "Бор")], 0),
      ],
    ),
    lesson(
      "fission-reactors",
      ["Fission; nuclear reactors; Armenian NPP", "Տրոհում, միջուկային ռեակտորներ, Հայկական ԱԷԿ", "Деление ядер; ядерные реакторы; Армянская АЭС"],
      {
        en: ["Describe the fission of uranium-235 by slow neutrons and explain the chain reaction, the multiplication factor and the critical mass", "Name the parts of a nuclear reactor (fuel, moderator, control rods, coolant, reflector, shielding) and the role of each", "Describe the Armenian nuclear power plant at Metsamor and discuss the advantages and risks of nuclear energy"],
        hy: ["Նկարագրել ուրան-235-ի տրոհումը դանդաղ նեյտրոններով և բացատրել շղթայական ռեակցիան, բազմապատկման գործակիցը և կրիտիկական զանգվածը", "Անվանել միջուկային ռեակտորի մասերը (վառելիք, դանդաղեցուցիչ, կարգավորիչ ձողեր, ջերմակիր, անդրադարձիչ, պաշտպանություն) և յուրաքանչյուրի դերը", "Նկարագրել Հայկական ատոմային էլեկտրակայանը Մեծամորում և քննարկել միջուկային էներգետիկայի առավելություններն ու ռիսկերը"],
        ru: ["Описывать деление урана-235 медленными нейтронами и объяснять цепную реакцию, коэффициент размножения и критическую массу", "Называть части ядерного реактора (топливо, замедлитель, регулирующие стержни, теплоноситель, отражатель, защита) и роль каждой", "Описывать Армянскую АЭС в Мецаморе и обсуждать преимущества и риски ядерной энергетики"],
      },
      {
        en: `## Fission of uranium

In 1938 Hahn and Strassmann found barium among the products of uranium bombarded by neutrons; Meitner and Frisch explained it as **fission**: the nucleus, having absorbed a neutron, deforms like a liquid drop and splits into two fragments of comparable mass. A typical event:

$\${}^{235}_{92}U + {}^{1}_{0}n \\to {}^{236}_{92}U^* \\to {}^{144}_{56}Ba + {}^{89}_{36}Kr + 3\\,{}^{1}_{0}n + 200\\ \\text{MeV}.$$

> - The fragments fly apart with about $170$ MeV of kinetic energy driven by Coulomb repulsion; the rest goes to neutrons, gamma rays and later beta decays of the fragments.
> - On average $2{.}5$ **secondary neutrons** are released per fission.
> - \${}^{235}U$ fissions with neutrons of any energy, best with **slow (thermal)** ones; \${}^{238}U$ fissions only with fast neutrons above $1$ MeV and mostly just captures slow ones. Natural uranium contains $0{.}7\\%$ of \${}^{235}U$.

The fragments are neutron-rich and strongly radioactive: this is the origin of **nuclear waste**.

## Chain reaction

Since each fission releases more than one neutron, the neutrons can cause further fissions: a **chain reaction**. Its fate depends on the **multiplication factor** $k$, the ratio of neutron numbers in successive generations:

> - $k < 1$: the reaction dies out (subcritical);
> - $k = 1$: steady reaction (critical), the regime of a reactor;
> - $k > 1$: the number of fissions grows exponentially (supercritical), the regime of a bomb.

Neutrons are lost by escape through the surface and by capture without fission. Escape is proportional to the surface, production to the volume, so there is a **critical mass** below which $k < 1$: about $50$ kg for a bare sphere of pure \${}^{235}U$, less with a neutron reflector.

## The nuclear reactor

A reactor keeps $k = 1$ with slow neutrons. Its main parts:

| Part | Purpose | Materials |
|---|---|---|
| Fuel | fissile nuclei | uranium oxide enriched to $3$–$5\\%$ \${}^{235}U$, in rods |
| Moderator | slows neutrons by collisions | water, heavy water, graphite |
| Control rods | absorb neutrons, regulate $k$ | boron, cadmium |
| Coolant | carries heat away | water, gas, liquid sodium |
| Reflector | returns escaping neutrons | graphite, beryllium |
| Shielding | stops radiation | concrete, steel |

The fission energy heats the coolant; in a **pressurised water reactor (PWR, VVER)** the water of the primary circuit at $300$ °C and $160$ atm heats water of a secondary circuit into steam, which drives a turbine and generator as in a thermal plant. Thermal efficiency is about $33\\%$. A reactor needs about $1$ kg of \${}^{235}U$ per day per $1000$ MW of electrical power; a coal plant of the same power burns $10\\,000$ tonnes of coal a day. The delayed neutrons from the fragments ($0{.}7\\%$ of all) make the reactor controllable: without them the power would change in milliseconds.

## The Armenian nuclear power plant

The **Armenian NPP** at Metsamor, $30$ km west of Yerevan, has two VVER-440 pressurised water reactors with Soviet-designed cores. Unit 1 started in 1976 and unit 2 in 1980. After the 1988 Spitak earthquake both units were shut down in 1989; unit 2 was restarted in 1995 during the energy crisis and has since provided about $30$–$40\\%$ of Armenia's electricity, with an electrical output of about $400$ MW. The plant has been repeatedly modernised to extend its life, and the question of a replacement unit is a central issue of Armenian energy policy, because the country has no fossil fuel of its own.

## Pros and cons

> **Advantages:** enormous energy density, no CO₂ or smoke, fuel that is cheap to transport and store, steady output independent of weather.
>
> **Risks:** radioactive waste that stays dangerous for thousands of years; accidents (Three Mile Island 1979, Chernobyl 1986, Fukushima 2011) release radioactivity over large areas; the link to nuclear weapons; high construction costs and decommissioning.

Nuclear plants produce about $10\\%$ of the world's electricity, and in France about $70\\%$.

## Worked examples

**Example 1.** Complete the fission \${}^{235}_{92}U + n \\to {}^{140}_{54}Xe + \\ ? + 2n$.

$Z = 92 - 54 = 38$; $A = 236 - 140 - 2 = 94$: \${}^{94}_{38}Sr$.

**Example 2.** Energy of one fission: $200$ MeV in joules.

$200 \\cdot 10^6 \\cdot 1{.}6 \\cdot 10^{-19} = 3{.}2 \\cdot 10^{-11}$ J.

**Example 3.** Energy released by the complete fission of $1$ kg of \${}^{235}U$.

$N = \\dfrac{1000}{235} \\cdot 6{.}02 \\cdot 10^{23} = 2{.}56 \\cdot 10^{24}$; $E = 2{.}56 \\cdot 10^{24} \\cdot 3{.}2 \\cdot 10^{-11} = 8{.}2 \\cdot 10^{13}$ J $\\approx 2{.}3 \\cdot 10^7$ kWh, like burning $2700$ tonnes of coal.

**Example 4.** How much \${}^{235}U$ does a reactor of $400$ MW electrical power (efficiency $33\\%$) consume per day?

Thermal power $1200$ MW; energy per day $1{.}2 \\cdot 10^9 \\cdot 86\\,400 = 1{.}04 \\cdot 10^{14}$ J. Number of fissions $1{.}04 \\cdot 10^{14} / 3{.}2 \\cdot 10^{-11} = 3{.}2 \\cdot 10^{24}$; mass $3{.}2 \\cdot 10^{24} \\cdot 235 / 6{.}02 \\cdot 10^{23} \\approx 1{.}27$ kg per day.

**Example 5.** In a chain reaction with $k = 2$, how many fissions occur in the 20th generation if the first had one?

$2^{19} \\approx 5 \\cdot 10^5$. With $k = 2$ and a generation time of $10^{-8}$ s, $10^{24}$ fissions (a whole kilogram) take only $80$ generations, under a microsecond: an explosion.

**Example 6.** A reactor runs with $k = 1{.}001$ and a generation time (with delayed neutrons) of $0{.}1$ s. How long does its power take to double?

$1{.}001^n = 2$, $n = \\ln 2 / \\ln 1{.}001 \\approx 693$ generations, that is $69$ s: slow enough for control rods to respond.

**Example 7.** Why does a moderator need light nuclei?

A neutron loses the most energy in a head-on collision with a nucleus of equal mass (hydrogen): like billiard balls, it can stop in one hit. Against a heavy nucleus it bounces back with almost the same speed. Hydrogen in water, deuterium in heavy water and carbon in graphite are used; carbon needs about $110$ collisions to thermalise a neutron, hydrogen only $18$.

**Example 8.** The Armenian NPP unit produced $2{.}6$ TWh in a year. What average power is that, and what share of a yearly consumption of $8$ TWh?

$P = 2{.}6 \\cdot 10^{9}$ kWh $/ 8760$ h $\\approx 3 \\cdot 10^5$ kW $= 300$ MW; share $2{.}6 / 8 \\approx 33\\%$.

## Exercises

1. Complete: \${}^{235}_{92}U + n \\to {}^{139}_{56}Ba + \\ ? + 3n$.
2. Why does \${}^{238}U$, which makes up $99{.}3\\%$ of natural uranium, not sustain a chain reaction with slow neutrons?
3. What does the multiplication factor mean, and what is it in a steadily working reactor?
4. Explain why a piece of uranium smaller than the critical mass cannot explode, however long one waits.
5. What is the function of control rods, and from what are they made?
6. How much energy is released in the fission of $1$ g of \${}^{235}U$? Compare it with the energy from burning $1$ g of petrol ($46$ kJ).
7. A reactor with thermal power $3000$ MW works for a year. How many kilograms of \${}^{235}U$ does it fission?
8. Name two advantages and two risks of nuclear energy, and explain why it is important for Armenia.

### Answers

1. \${}^{94}_{36}Kr$.
2. It captures slow neutrons without fissioning; it fissions only with fast neutrons, which are too few to keep $k \\ge 1$.
3. The ratio of the number of neutrons in one generation to the number in the previous one; $k = 1$.
4. Too many neutrons escape through the surface, so $k < 1$ and every chain dies out.
5. To absorb neutrons and thereby lower $k$ when inserted and raise it when withdrawn; boron or cadmium.
6. $8{.}2 \\cdot 10^{10}$ J, about $1{.}8$ million times more than petrol.
7. Energy $3 \\cdot 10^9 \\cdot 3{.}15 \\cdot 10^7 = 9{.}5 \\cdot 10^{16}$ J; fissions $3 \\cdot 10^{27}$; mass $\\approx 1150$ kg.
8. For instance: no greenhouse gases and weather-independent output; waste storage and accident risk. Armenia has no oil, gas or coal of its own, so the plant supplies about a third of its electricity.`,
        hy: `## Ուրանի տրոհումը

1938 թ․ Հանը և Շտրասմանը նեյտրոններով ռմբակոծված ուրանի արգասիքների մեջ բարիում գտան․ Մայտները և Ֆրիշը դա բացատրեցին որպես **տրոհում**․ նեյտրոն կլանած միջուկը հեղուկ կաթիլի պես դեֆորմացվում է և բաժանվում համեմատելի զանգվածի երկու բեկորի։ Տիպիկ դեպք․

$\${}^{235}_{92}U + {}^{1}_{0}n \\to {}^{236}_{92}U^* \\to {}^{144}_{56}Ba + {}^{89}_{36}Kr + 3\\,{}^{1}_{0}n + 200\\ \\text{ՄէՎ}$$

> - Բեկորները կուլոնյան վանողությամբ իրարից թռչում են մոտ $170$ ՄէՎ կինետիկ էներգիայով․ մնացածը բաժին է ընկնում նեյտրոններին, գամմա ճառագայթներին և բեկորների հետագա բետա տրոհումներին։
> - Մեկ տրոհման ժամանակ միջինում անջատվում է $2{,}5$ **երկրորդային նեյտրոն**։
> - \${}^{235}U$-ը տրոհվում է ցանկացած էներգիայի նեյտրոններով, լավագույնս՝ **դանդաղ (ջերմային)** նեյտրոններով․ \${}^{238}U$-ը տրոհվում է միայն $1$ ՄէՎ-ից բարձր արագ նեյտրոններով և դանդաղները հիմնականում պարզապես գրավում է։ Բնական ուրանը պարունակում է $0{,}7\\%$ \${}^{235}U$։

Բեկորները նեյտրոններով հարուստ են և խիստ ռադիոակտիվ․ սա է **միջուկային թափոնների** ծագումը։

## Շղթայական ռեակցիա

Քանի որ յուրաքանչյուր տրոհում մեկից ավելի նեյտրոն է անջատում, նեյտրոնները կարող են նոր տրոհումներ առաջացնել․ **շղթայական ռեակցիա**։ Նրա ճակատագիրը կախված է **բազմապատկման գործակցից** $k$՝ հաջորդական սերունդների նեյտրոնների թվերի հարաբերությունից․

> - $k < 1$․ ռեակցիան մարում է (ենթակրիտիկական)․
> - $k = 1$․ կայուն ռեակցիա (կրիտիկական)՝ ռեակտորի ռեժիմ․
> - $k > 1$․ տրոհումների թիվն աճում է էքսպոնենցիալ (գերկրիտիկական)՝ ռումբի ռեժիմ։

Նեյտրոնները կորչում են մակերևույթով դուրս թռչելով և առանց տրոհման գրավվելով։ Դուրս թռիչքը համեմատական է մակերևույթին, առաջացումը՝ ծավալին, ուստի գոյություն ունի **կրիտիկական զանգված**, որից փոքրի դեպքում $k < 1$․ մաքուր \${}^{235}U$-ի մերկ գնդի համար մոտ $50$ կգ, նեյտրոնային անդրադարձիչով՝ ավելի քիչ։

## Միջուկային ռեակտոր

Ռեակտորը դանդաղ նեյտրոններով պահում է $k = 1$։ Նրա հիմնական մասերը․

| Մաս | Նշանակություն | Նյութեր |
|---|---|---|
| Վառելիք | տրոհվող միջուկներ | մինչև $3$–$5\\%$ \${}^{235}U$ հարստացված ուրանի օքսիդ՝ ձողերում |
| Դանդաղեցուցիչ | բախումներով դանդաղեցնում է նեյտրոնները | ջուր, ծանր ջուր, գրաֆիտ |
| Կարգավորիչ ձողեր | կլանում են նեյտրոնները, կարգավորում $k$-ն | բոր, կադմիում |
| Ջերմակիր | հեռացնում է ջերմությունը | ջուր, գազ, հեղուկ նատրիում |
| Անդրադարձիչ | վերադարձնում է դուրս թռչող նեյտրոնները | գրաֆիտ, բերիլիում |
| Պաշտպանություն | կանգնեցնում է ճառագայթումը | բետոն, պողպատ |

Տրոհման էներգիան տաքացնում է ջերմակիրը․ **ճնշումային ջրի ռեակտորում (PWR, ВВЭР)** առաջին շղթայի $300$ °C և $160$ մթն ջուրն երկրորդ շղթայի ջուրը վերածում է գոլորշու, որը ջերմային կայանի նման պտտեցնում է տուրբինն ու գեներատորը։ Ջերմային ՕԳԳ-ն մոտ $33\\%$ է։ Ռեակտորին $1000$ ՄՎտ էլեկտրական հզորության համար օրական մոտ $1$ կգ \${}^{235}U$ է պետք․ նույն հզորության ածխային կայանն օրական այրում է $10\\,000$ տոննա ածուխ։ Բեկորների ուշացած նեյտրոնները (բոլորի $0{,}7\\%$-ը) ռեակտորը դարձնում են կառավարելի․ առանց դրանց հզորությունը կփոխվեր միլիվայրկյաններում։

## Հայկական ատոմային էլեկտրակայանը

**Հայկական ԱԷԿ-ը** Մեծամորում՝ Երևանից $30$ կմ արևմուտք, ունի ВВЭР-440 տիպի երկու ճնշումային ջրի ռեակտոր՝ խորհրդային նախագծի։ Առաջին էներգաբլոկը գործարկվել է 1976 թ․, երկրորդը՝ 1980 թ․։ 1988 թ․ Սպիտակի երկրաշարժից հետո երկու բլոկներն էլ 1989 թ․ կանգնեցվեցին․ երկրորդ բլոկը վերագործարկվեց 1995 թ․ էներգետիկ ճգնաժամի ժամանակ և այդ ժամանակից ապահովում է Հայաստանի էլեկտրաէներգիայի մոտ $30$–$40\\%$-ը՝ մոտ $400$ ՄՎտ էլեկտրական հզորությամբ։ Կայանը բազմիցս արդիականացվել է ծառայության ժամկետն երկարացնելու համար, իսկ նոր էներգաբլոկի հարցը Հայաստանի էներգետիկ քաղաքականության կենտրոնական խնդիրն է, քանի որ երկիրը սեփական հանածո վառելիք չունի։

## Առավելություններ և թերություններ

> **Առավելություններ․** հսկայական էներգիայի խտություն, CO₂ և ծխի բացակայություն, փոխադրման ու պահպանման համար էժան վառելիք, եղանակից անկախ կայուն արտադրություն։
>
> **Ռիսկեր․** հազարավոր տարիներ վտանգավոր մնացող ռադիոակտիվ թափոններ․ վթարները (Թրի Մայլ Այլենդ 1979, Չեռնոբիլ 1986, Ֆուկուսիմա 2011) մեծ տարածքներ ռադիոակտիվությամբ են աղտոտում․ կապը միջուկային զենքի հետ․ կառուցման և շահագործումից հանելու բարձր ծախսեր։

Ատոմակայաններն արտադրում են աշխարհի էլեկտրաէներգիայի մոտ $10\\%$-ը, իսկ Ֆրանսիայում՝ մոտ $70\\%$-ը։

## Լուծված օրինակներ

**Օրինակ 1։** Լրացրեք տրոհումը․ \${}^{235}_{92}U + n \\to {}^{140}_{54}Xe + \\ ? + 2n$։

$Z = 92 - 54 = 38$․ $A = 236 - 140 - 2 = 94$․ \${}^{94}_{38}Sr$։

**Օրինակ 2։** Մեկ տրոհման էներգիան․ $200$ ՄէՎ-ը ջոուլով։

$200 \\cdot 10^6 \\cdot 1{,}6 \\cdot 10^{-19} = 3{,}2 \\cdot 10^{-11}$ Ջ։

**Օրինակ 3։** $1$ կգ \${}^{235}U$-ի լրիվ տրոհումից անջատվող էներգիան։

$N = \\dfrac{1000}{235} \\cdot 6{,}02 \\cdot 10^{23} = 2{,}56 \\cdot 10^{24}$․ $E = 2{,}56 \\cdot 10^{24} \\cdot 3{,}2 \\cdot 10^{-11} = 8{,}2 \\cdot 10^{13}$ Ջ $\\approx 2{,}3 \\cdot 10^7$ կՎտ·ժ, ինչպես $2700$ տոննա ածխի այրումը։

**Օրինակ 4։** Որքա՞ն \${}^{235}U$ է օրական սպառում $400$ ՄՎտ էլեկտրական հզորության ռեակտորը (ՕԳԳ-ն $33\\%$)։

Ջերմային հզորությունը $1200$ ՄՎտ․ օրական էներգիան $1{,}2 \\cdot 10^9 \\cdot 86\\,400 = 1{,}04 \\cdot 10^{14}$ Ջ։ Տրոհումների թիվը $1{,}04 \\cdot 10^{14} / 3{,}2 \\cdot 10^{-11} = 3{,}2 \\cdot 10^{24}$․ զանգվածը $3{,}2 \\cdot 10^{24} \\cdot 235 / 6{,}02 \\cdot 10^{23} \\approx 1{,}27$ կգ օրական։

**Օրինակ 5։** $k = 2$ շղթայական ռեակցիայում քանի՞ տրոհում է տեղի ունենում 20-րդ սերնդում, եթե առաջինում մեկն էր։

$2^{19} \\approx 5 \\cdot 10^5$։ $k = 2$-ի և $10^{-8}$ վ սերնդի ժամանակի դեպքում $10^{24}$ տրոհում (մի ամբողջ կիլոգրամ) պահանջում է ընդամենը $80$ սերունդ՝ մեկ միկրովայրկյանից պակաս․ պայթյուն։

**Օրինակ 6։** Ռեակտորն աշխատում է $k = 1{,}001$-ով և (ուշացած նեյտրոններով) $0{,}1$ վ սերնդի ժամանակով։ Որքա՞ն ժամանակում է նրա հզորությունը կրկնապատկվում։

$1{,}001^n = 2$, $n = \\ln 2 / \\ln 1{,}001 \\approx 693$ սերունդ, այսինքն՝ $69$ վ․ բավականաչափ դանդաղ, որ կարգավորիչ ձողերը հասցնեն արձագանքել։

**Օրինակ 7։** Ինչո՞ւ են դանդաղեցուցիչին թեթև միջուկներ պետք։

Նեյտրոնն ամենաշատ էներգիան կորցնում է հավասար զանգվածի միջուկի (ջրածին) հետ ճակատային բախման ժամանակ․ բիլիարդի գնդերի նման այն կարող է կանգնել մեկ հարվածից։ Ծանր միջուկից այն հետ է թռչում գրեթե նույն արագությամբ։ Օգտագործվում են ջրի ջրածինը, ծանր ջրի դեյտերիումը և գրաֆիտի ածխածինը․ ածխածնին նեյտրոնը ջերմայնացնելու համար մոտ $110$ բախում է պետք, ջրածնին՝ միայն $18$։

**Օրինակ 8։** Հայկական ԱԷԿ-ի բլոկը տարվա ընթացքում արտադրել է $2{,}6$ ՏՎտ·ժ։ Ի՞նչ միջին հզորություն է դա, և տարեկան $8$ ՏՎտ·ժ սպառման ո՞ր բաժինը։

$P = 2{,}6 \\cdot 10^{9}$ կՎտ·ժ $/ 8760$ ժ $\\approx 3 \\cdot 10^5$ կՎտ $= 300$ ՄՎտ․ բաժինը $2{,}6 / 8 \\approx 33\\%$։

## Վարժություններ

1. Լրացրեք․ \${}^{235}_{92}U + n \\to {}^{139}_{56}Ba + \\ ? + 3n$։
2. Ինչո՞ւ \${}^{238}U$-ը, որը բնական ուրանի $99{,}3\\%$-ն է, դանդաղ նեյտրոններով շղթայական ռեակցիա չի պահպանում։
3. Ի՞նչ է նշանակում բազմապատկման գործակիցը, և որքա՞ն է այն կայուն աշխատող ռեակտորում։
4. Բացատրեք, թե ինչու կրիտիկական զանգվածից փոքր ուրանի կտորը չի կարող պայթել, որքան էլ սպասենք։
5. Ո՞րն է կարգավորիչ ձողերի գործառույթը, և ինչի՞ց են դրանք պատրաստված։
6. Որքա՞ն էներգիա է անջատվում $1$ գ \${}^{235}U$-ի տրոհման ժամանակ։ Համեմատեք $1$ գ բենզինի այրման էներգիայի հետ ($46$ կՋ)։
7. $3000$ ՄՎտ ջերմային հզորության ռեակտորն աշխատում է մեկ տարի։ Քանի՞ կիլոգրամ \${}^{235}U$ է այն տրոհում։
8. Նշեք միջուկային էներգետիկայի երկու առավելություն և երկու ռիսկ և բացատրեք, թե ինչու է այն կարևոր Հայաստանի համար։

### Պատասխաններ

1. \${}^{94}_{36}Kr$։
2. Այն դանդաղ նեյտրոնները գրավում է առանց տրոհվելու․ տրոհվում է միայն արագ նեյտրոններով, որոնք շատ քիչ են $k \\ge 1$ պահելու համար։
3. Մի սերնդի նեյտրոնների թվի հարաբերությունը նախորդ սերնդի թվին․ $k = 1$։
4. Չափազանց շատ նեյտրոն է դուրս թռչում մակերևույթով, ուստի $k < 1$, և յուրաքանչյուր շղթա մարում է։
5. Կլանել նեյտրոնները և այդպիսով մտցնելիս իջեցնել $k$-ն, հանելիս՝ բարձրացնել․ բոր կամ կադմիում։
6. $8{,}2 \\cdot 10^{10}$ Ջ, բենզինից մոտ $1{,}8$ միլիոն անգամ ավելի։
7. Էներգիան $3 \\cdot 10^9 \\cdot 3{,}15 \\cdot 10^7 = 9{,}5 \\cdot 10^{16}$ Ջ․ տրոհումները $3 \\cdot 10^{27}$․ զանգվածը $\\approx 1150$ կգ։
8. Օրինակ․ ջերմոցային գազերի բացակայություն և եղանակից անկախ արտադրություն․ թափոնների պահպանում և վթարի ռիսկ։ Հայաստանը սեփական նավթ, գազ կամ ածուխ չունի, ուստի կայանն ապահովում է նրա էլեկտրաէներգիայի մոտ մեկ երրորդը։`,
        ru: `## Деление урана

В 1938 г. Ган и Штрассман нашли барий среди продуктов облучения урана нейтронами; Мейтнер и Фриш объяснили это **делением**: ядро, поглотив нейтрон, деформируется как капля жидкости и разваливается на два осколка сравнимой массы. Типичный акт:

$\${}^{235}_{92}U + {}^{1}_{0}n \\to {}^{236}_{92}U^* \\to {}^{144}_{56}Ba + {}^{89}_{36}Kr + 3\\,{}^{1}_{0}n + 200\\ \\text{МэВ}.$$

> - Осколки разлетаются с кинетической энергией около $170$ МэВ за счёт кулоновского отталкивания; остальное уносят нейтроны, гамма-кванты и последующие бета-распады осколков.
> - В среднем при одном делении освобождается $2{,}5$ **вторичных нейтрона**.
> - \${}^{235}U$ делится нейтронами любой энергии, лучше всего **медленными (тепловыми)**; \${}^{238}U$ делится лишь быстрыми нейтронами с энергией выше $1$ МэВ, а медленные в основном просто захватывает. Природный уран содержит $0{,}7\\%$ \${}^{235}U$.

Осколки перегружены нейтронами и сильно радиоактивны: таково происхождение **ядерных отходов**.

## Цепная реакция

Поскольку каждое деление освобождает больше одного нейтрона, нейтроны могут вызывать новые деления: **цепная реакция**. Её судьба зависит от **коэффициента размножения** $k$ — отношения чисел нейтронов в последовательных поколениях:

> - $k < 1$: реакция затухает (подкритический режим);
> - $k = 1$: стационарная реакция (критический режим), режим реактора;
> - $k > 1$: число делений растёт экспоненциально (надкритический режим), режим бомбы.

Нейтроны теряются при вылете через поверхность и при захвате без деления. Вылет пропорционален поверхности, рождение — объёму, поэтому существует **критическая масса**, ниже которой $k < 1$: около $50$ кг для голого шара из чистого \${}^{235}U$, меньше при наличии отражателя нейтронов.

## Ядерный реактор

Реактор поддерживает $k = 1$ на медленных нейтронах. Его основные части:

| Часть | Назначение | Материалы |
|---|---|---|
| Топливо | делящиеся ядра | оксид урана, обогащённый до $3$–$5\\%$ \${}^{235}U$, в стержнях |
| Замедлитель | замедляет нейтроны столкновениями | вода, тяжёлая вода, графит |
| Регулирующие стержни | поглощают нейтроны, регулируют $k$ | бор, кадмий |
| Теплоноситель | отводит тепло | вода, газ, жидкий натрий |
| Отражатель | возвращает вылетающие нейтроны | графит, бериллий |
| Защита | останавливает излучение | бетон, сталь |

Энергия деления нагревает теплоноситель; в **водо-водяном реакторе (ВВЭР, PWR)** вода первого контура при $300$ °C и $160$ атм превращает воду второго контура в пар, который, как на тепловой станции, вращает турбину и генератор. Тепловой КПД около $33\\%$. Реактору нужно около $1$ кг \${}^{235}U$ в сутки на $1000$ МВт электрической мощности; угольная станция той же мощности сжигает $10\\,000$ тонн угля в сутки. Запаздывающие нейтроны осколков ($0{,}7\\%$ всех) делают реактор управляемым: без них мощность менялась бы за миллисекунды.

## Армянская АЭС

**Армянская АЭС** в Мецаморе, в $30$ км к западу от Еревана, имеет два водо-водяных реактора ВВЭР-440 советской конструкции. Первый энергоблок пущен в 1976 г., второй — в 1980 г. После Спитакского землетрясения 1988 г. оба блока в 1989 г. были остановлены; второй блок вновь запущен в 1995 г. во время энергетического кризиса и с тех пор даёт около $30$–$40\\%$ электроэнергии Армении при электрической мощности около $400$ МВт. Станцию неоднократно модернизировали для продления срока службы, а вопрос о новом энергоблоке — центральный в энергетической политике Армении, поскольку у страны нет собственного ископаемого топлива.

## За и против

> **Преимущества:** огромная плотность энергии, отсутствие CO₂ и дыма, дешёвое в перевозке и хранении топливо, стабильная выработка независимо от погоды.
>
> **Риски:** радиоактивные отходы, опасные тысячи лет; аварии (Три-Майл-Айленд 1979, Чернобыль 1986, Фукусима 2011) загрязняют радиоактивностью большие территории; связь с ядерным оружием; высокая стоимость строительства и вывода из эксплуатации.

АЭС дают около $10\\%$ мировой электроэнергии, а во Франции — около $70\\%$.

## Разобранные примеры

**Пример 1.** Дополните деление \${}^{235}_{92}U + n \\to {}^{140}_{54}Xe + \\ ? + 2n$.

$Z = 92 - 54 = 38$; $A = 236 - 140 - 2 = 94$: \${}^{94}_{38}Sr$.

**Пример 2.** Энергия одного деления: $200$ МэВ в джоулях.

$200 \\cdot 10^6 \\cdot 1{,}6 \\cdot 10^{-19} = 3{,}2 \\cdot 10^{-11}$ Дж.

**Пример 3.** Энергия полного деления $1$ кг \${}^{235}U$.

$N = \\dfrac{1000}{235} \\cdot 6{,}02 \\cdot 10^{23} = 2{,}56 \\cdot 10^{24}$; $E = 2{,}56 \\cdot 10^{24} \\cdot 3{,}2 \\cdot 10^{-11} = 8{,}2 \\cdot 10^{13}$ Дж $\\approx 2{,}3 \\cdot 10^7$ кВт·ч, как при сгорании $2700$ тонн угля.

**Пример 4.** Сколько \${}^{235}U$ расходует в сутки реактор электрической мощностью $400$ МВт (КПД $33\\%$)?

Тепловая мощность $1200$ МВт; энергия за сутки $1{,}2 \\cdot 10^9 \\cdot 86\\,400 = 1{,}04 \\cdot 10^{14}$ Дж. Число делений $1{,}04 \\cdot 10^{14} / 3{,}2 \\cdot 10^{-11} = 3{,}2 \\cdot 10^{24}$; масса $3{,}2 \\cdot 10^{24} \\cdot 235 / 6{,}02 \\cdot 10^{23} \\approx 1{,}27$ кг в сутки.

**Пример 5.** Сколько делений происходит в 20-м поколении цепной реакции с $k = 2$, если в первом было одно?

$2^{19} \\approx 5 \\cdot 10^5$. При $k = 2$ и времени поколения $10^{-8}$ с на $10^{24}$ делений (целый килограмм) нужно всего $80$ поколений, меньше микросекунды: взрыв.

**Пример 6.** Реактор работает с $k = 1{,}001$ и временем поколения (с учётом запаздывающих нейтронов) $0{,}1$ с. За какое время его мощность удваивается?

$1{,}001^n = 2$, $n = \\ln 2 / \\ln 1{,}001 \\approx 693$ поколения, то есть $69$ с: достаточно медленно, чтобы регулирующие стержни успели сработать.

**Пример 7.** Почему замедлителю нужны лёгкие ядра?

Нейтрон теряет больше всего энергии при лобовом столкновении с ядром равной массы (водород): как бильярдные шары, он может остановиться за один удар. От тяжёлого ядра он отскакивает почти с той же скоростью. Используют водород воды, дейтерий тяжёлой воды и углерод графита; углероду нужно около $110$ столкновений, чтобы сделать нейтрон тепловым, водороду — только $18$.

**Пример 8.** Блок Армянской АЭС выработал за год $2{,}6$ ТВт·ч. Какова средняя мощность и какая это доля годового потребления $8$ ТВт·ч?

$P = 2{,}6 \\cdot 10^{9}$ кВт·ч $/ 8760$ ч $\\approx 3 \\cdot 10^5$ кВт $= 300$ МВт; доля $2{,}6 / 8 \\approx 33\\%$.

## Упражнения

1. Дополните: \${}^{235}_{92}U + n \\to {}^{139}_{56}Ba + \\ ? + 3n$.
2. Почему \${}^{238}U$, составляющий $99{,}3\\%$ природного урана, не поддерживает цепную реакцию на медленных нейтронах?
3. Что означает коэффициент размножения и чему он равен в стационарно работающем реакторе?
4. Объясните, почему кусок урана меньше критической массы не может взорваться, сколько ни жди.
5. Какова функция регулирующих стержней и из чего их делают?
6. Сколько энергии выделяется при делении $1$ г \${}^{235}U$? Сравните с энергией сгорания $1$ г бензина ($46$ кДж).
7. Реактор тепловой мощностью $3000$ МВт работает год. Сколько килограммов \${}^{235}U$ он делит?
8. Назовите два преимущества и два риска ядерной энергетики и объясните, почему она важна для Армении.

### Ответы

1. \${}^{94}_{36}Kr$.
2. Он захватывает медленные нейтроны без деления; делится только быстрыми нейтронами, которых слишком мало, чтобы удержать $k \\ge 1$.
3. Отношение числа нейтронов в одном поколении к числу в предыдущем; $k = 1$.
4. Слишком много нейтронов вылетает через поверхность, поэтому $k < 1$ и каждая цепочка затухает.
5. Поглощать нейтроны и тем самым понижать $k$ при введении и повышать при выведении; бор или кадмий.
6. $8{,}2 \\cdot 10^{10}$ Дж, примерно в $1{,}8$ миллиона раз больше, чем у бензина.
7. Энергия $3 \\cdot 10^9 \\cdot 3{,}15 \\cdot 10^7 = 9{,}5 \\cdot 10^{16}$ Дж; делений $3 \\cdot 10^{27}$; масса $\\approx 1150$ кг.
8. Например: нет парниковых газов и выработка не зависит от погоды; хранение отходов и риск аварии. У Армении нет своих нефти, газа и угля, поэтому станция даёт около трети её электроэнергии.`,
      },
      [
        q(t("One fission of a uranium-235 nucleus releases about…", "Ուրան-235-ի մեկ միջուկի տրոհումն անջատում է մոտ…", "Одно деление ядра урана-235 выделяет около…"), [t("200 MeV and 2–3 neutrons", "200 ՄէՎ և 2–3 նեյտրոն", "200 МэВ и 2–3 нейтрона"), t("13.6 eV and one electron", "13,6 էՎ և մեկ էլեկտրոն", "13,6 эВ и один электрон"), t("1 J and one proton", "1 Ջ և մեկ պրոտոն", "1 Дж и один протон")], 0),
        q(t("A chain reaction is steady when the multiplication factor is…", "Շղթայական ռեակցիան կայուն է, երբ բազմապատկման գործակիցը…", "Цепная реакция стационарна, когда коэффициент размножения…"), [t("equal to 1", "հավասար է 1-ի", "равен 1"), t("greater than 1", "մեծ է 1-ից", "больше 1"), t("equal to 0", "հավասար է 0-ի", "равен 0")], 0),
        q(t("The moderator in a reactor…", "Ռեակտորի դանդաղեցուցիչը…", "Замедлитель в реакторе…"), [t("slows down neutrons", "դանդաղեցնում է նեյտրոնները", "замедляет нейтроны"), t("absorbs neutrons", "կլանում է նեյտրոնները", "поглощает нейтроны"), t("produces neutrons", "նեյտրոններ է առաջացնում", "рождает нейтроны")], 0),
        q(t("Control rods are made of…", "Կարգավորիչ ձողերը պատրաստված են…", "Регулирующие стержни делают из…"), [t("boron or cadmium", "բորից կամ կադմիումից", "бора или кадмия"), t("uranium", "ուրանից", "урана"), t("graphite", "գրաֆիտից", "графита")], 0),
        q(t("The Armenian nuclear power plant is located at…", "Հայկական ատոմային էլեկտրակայանը գտնվում է…", "Армянская АЭС расположена в…"), [t("Metsamor", "Մեծամորում", "Мецаморе"), t("Gyumri", "Գյումրիում", "Гюмри"), t("Kapan", "Կապանում", "Капане")], 0),
        q(t("Below the critical mass a chain reaction…", "Կրիտիկական զանգվածից փոքր զանգվածի դեպքում շղթայական ռեակցիան…", "При массе ниже критической цепная реакция…"), [t("dies out because too many neutrons escape", "մարում է, քանի որ չափազանց շատ նեյտրոն է դուրս թռչում", "затухает, потому что слишком много нейтронов вылетает"), t("becomes explosive", "դառնում է պայթյունային", "становится взрывной"), t("runs at constant power", "ընթանում է հաստատուն հզորությամբ", "идёт с постоянной мощностью")], 0),
      ],
    ),
    lesson(
      "fusion",
      ["Thermonuclear fusion; stars and ITER", "Թերմոմիջուկային սինթեզ, աստղեր և ITER", "Термоядерный синтез; звёзды и ITER"],
      {
        en: ["Explain why fusion of light nuclei releases energy and why it requires temperatures of millions of kelvin", "Write the proton–proton chain of the Sun and the deuterium–tritium reaction and compute their energy yields", "Describe magnetic confinement (tokamak, ITER), the Lawson criterion in words and the advantages and difficulties of fusion power"],
        hy: ["Բացատրել, թե ինչու է թեթև միջուկների սինթեզն էներգիա անջատում և ինչու են դրա համար միլիոնավոր կելվին ջերմաստիճաններ պահանջվում", "Գրել Արեգակի պրոտոն-պրոտոնային շղթան և դեյտերիում-տրիտիում ռեակցիան և հաշվել դրանց էներգիայի ելքերը", "Նկարագրել մագնիսական պահումը (տոկամակ, ITER), Լոուսոնի չափանիշը բառերով և սինթեզային էներգետիկայի առավելություններն ու դժվարությունները"],
        ru: ["Объяснять, почему синтез лёгких ядер выделяет энергию и почему для него нужны температуры в миллионы кельвинов", "Записывать протон-протонную цепочку Солнца и дейтерий-тритиевую реакцию и вычислять их энергетический выход", "Описывать магнитное удержание (токамак, ITER), критерий Лоусона на словах и преимущества и трудности термоядерной энергетики"],
      },
      {
        en: `## Fusion and the Coulomb barrier

The specific binding energy curve rises steeply from hydrogen to helium, so joining light nuclei, **fusion**, releases far more energy per kilogram than fission: about $6$ MeV per nucleon against $0{.}85$ MeV. The difficulty is that nuclei are positively charged. To bring two protons to the range of the nuclear force, about $10^{-15}$ m, one must overcome the Coulomb repulsion

$$U = \\dfrac{k e^2}{r} = \\dfrac{9 \\cdot 10^9 \\cdot (1{.}6 \\cdot 10^{-19})^2}{10^{-15}} \\approx 2{.}3 \\cdot 10^{-13}\\ \\text{J} \\approx 1{.}4\\ \\text{MeV}.$$

In a gas this energy comes from thermal motion, so the reaction is called **thermonuclear**. Because of the Maxwell distribution and quantum tunnelling, the reaction goes already at a mean energy a hundred times smaller than the barrier: at $10^7$–$10^8$ K. At such temperatures matter is a fully ionised **plasma**.

## Fusion in stars

The Sun converts hydrogen into helium through the **proton–proton chain**:

$\${}^{1}H + {}^{1}H \\to {}^{2}H + e^+ + \\nu, \\qquad {}^{2}H + {}^{1}H \\to {}^{3}He + \\gamma, \\qquad {}^{3}He + {}^{3}He \\to {}^{4}He + 2\\,{}^{1}H.$$

Net result: $4\\,{}^{1}H \\to {}^{4}He + 2e^+ + 2\\nu + 26{.}7$ MeV. The central temperature of the Sun is $1{.}5 \\cdot 10^7$ K and the pressure is $2 \\cdot 10^{16}$ Pa; gravity does the confining. Every second the Sun burns $6 \\cdot 10^{11}$ kg of hydrogen and loses $4{.}3 \\cdot 10^9$ kg of mass, yet it has enough fuel for another five billion years. Heavier stars use the carbon–nitrogen cycle, and in their late stages fuse helium into carbon and oxygen and on up to iron, creating the elements of which planets and we ourselves are made.

## Fusion on Earth

The easiest reaction is **deuterium–tritium**:

$\${}^{2}H + {}^{3}H \\to {}^{4}He\\ (3{.}5\\ \\text{MeV}) + n\\ (14{.}1\\ \\text{MeV}),$$

which ignites at about $10^8$ K. Deuterium is extracted from sea water ($1$ in $6500$ hydrogen atoms); tritium is radioactive ($T = 12{.}3$ years) and is bred from lithium by the reactor's own neutrons: \${}^{6}Li + n \\to {}^{4}He + {}^{3}H$. The uncontrolled version is the **hydrogen bomb** (1952–1953), ignited by a fission bomb.

For a controlled reactor the plasma must satisfy the **Lawson criterion**: the product of density and confinement time must exceed about $10^{20}$ s/m³ at $10^8$ K. No material wall can hold such a plasma, so two routes are followed:

> - **Magnetic confinement.** In a **tokamak** (a Soviet design of the 1950s) the plasma is a ring held by a strong toroidal magnetic field plus the field of the current flowing in the plasma itself; charged particles spiral along the field lines and do not touch the walls. **ITER**, being built in Cadarache, France, by 35 countries, has a plasma volume of $840$ m³, a field of $5{.}3$ T and is designed to produce $500$ MW of fusion power from $50$ MW of heating.
> - **Inertial confinement.** Powerful lasers compress a millimetre-size pellet of fuel for a few nanoseconds (National Ignition Facility, USA, which in 2022 for the first time obtained more fusion energy than the laser energy delivered to the target).

## Why fusion is worth it

> **Advantages:** practically unlimited fuel (deuterium in the oceans), no chain reaction and no possibility of a runaway, no long-lived waste from the fuel itself (only activated reactor parts), no greenhouse gases.
>
> **Difficulties:** holding a $10^8$ K plasma stably, materials that survive $14$ MeV neutrons, breeding tritium, and the enormous cost of the machines. Commercial fusion power is expected in the second half of the 21st century.

## Worked examples

**Example 1.** Energy yield of the whole proton–proton chain from masses: $4 m_H - m_{He} = 4 \\cdot 1{.}00783 - 4{.}00260 = 0{.}02872$ u.

$Q = 0{.}02872 \\cdot 931{.}5 = 26{.}75$ MeV, of which about $0{.}5$ MeV is carried away by the neutrinos.

**Example 2.** Fraction of mass turned into energy in hydrogen burning.

$0{.}02872 / 4{.}0313 \\approx 0{.}0071$, that is $0{.}7\\%$. Fission converts about $0{.}09\\%$; burning coal $3 \\cdot 10^{-10}$.

**Example 3.** Energy from fusing $1$ kg of hydrogen into helium.

$E = 0{.}0071 \\cdot 1 \\cdot (3 \\cdot 10^8)^2 = 6{.}4 \\cdot 10^{14}$ J, about eight times more than the fission of $1$ kg of uranium.

**Example 4.** Temperature at which the mean kinetic energy $\\frac{3}{2}kT$ of a particle equals $10$ keV (typical for ignition).

$T = \\dfrac{2E}{3k} = \\dfrac{2 \\cdot 10^4 \\cdot 1{.}6 \\cdot 10^{-19}}{3 \\cdot 1{.}38 \\cdot 10^{-23}} \\approx 7{.}7 \\cdot 10^7$ K.

**Example 5.** The Sun radiates $3{.}8 \\cdot 10^{26}$ W. What mass does it lose per second, and how much hydrogen does it burn?

$\\Delta m = P/c^2 = 3{.}8 \\cdot 10^{26} / 9 \\cdot 10^{16} = 4{.}2 \\cdot 10^9$ kg/s. Hydrogen burnt: $4{.}2 \\cdot 10^9 / 0{.}0071 \\approx 6 \\cdot 10^{11}$ kg/s.

**Example 6.** How long can the Sun shine if it can burn $10\\%$ of its mass $2 \\cdot 10^{30}$ kg?

$t = \\dfrac{0{.}1 \\cdot 2 \\cdot 10^{30}}{6 \\cdot 10^{11}} = 3{.}3 \\cdot 10^{17}$ s $\\approx 10^{10}$ years. Half of this has passed.

**Example 7.** How much deuterium–tritium fuel would a $1$ GW (electrical, efficiency $40\\%$) fusion plant consume per year?

Thermal energy per year $2{.}5 \\cdot 10^9 \\cdot 3{.}15 \\cdot 10^7 = 7{.}9 \\cdot 10^{16}$ J; events $7{.}9 \\cdot 10^{16} / (17{.}6 \\cdot 1{.}6 \\cdot 10^{-13}) = 2{.}8 \\cdot 10^{28}$; mass of fuel $2{.}8 \\cdot 10^{28} \\cdot 5 / 6{.}02 \\cdot 10^{23} \\approx 230$ kg of D–T a year (against $2$ million tonnes of coal).

**Example 8.** Radius of the circle on which a deuteron with energy $10$ keV moves across a $5$ T field.

$v = \\sqrt{2E/m} = \\sqrt{2 \\cdot 1{.}6 \\cdot 10^{-15} / 3{.}34 \\cdot 10^{-27}} \\approx 9{.}8 \\cdot 10^5$ m/s; $r = \\dfrac{mv}{qB} = \\dfrac{3{.}34 \\cdot 10^{-27} \\cdot 9{.}8 \\cdot 10^5}{1{.}6 \\cdot 10^{-19} \\cdot 5} \\approx 4$ mm. The particle is tied tightly to the field lines, which is why magnetic confinement works.

## Exercises

1. Why does the fusion of two deuterons need a high temperature, while the capture of a neutron by uranium does not?
2. Write the net reaction of hydrogen burning in the Sun and state its energy yield.
3. Compute the energy yield of \${}^{2}H + {}^{2}H \\to {}^{3}He + n$ from the masses $2{.}01410$, $3{.}01603$, $1{.}00866$ u.
4. What is the ratio of the energy per kilogram of D–T fusion ($17{.}6$ MeV per $5$ u) to that of uranium fission ($200$ MeV per $235$ u)?
5. Where does tritium for a fusion reactor come from? Write the breeding reaction.
6. Explain in words why a magnetic field can hold a hot plasma away from the walls.
7. The Sun loses $4{.}2 \\cdot 10^9$ kg every second. What fraction of its mass will it lose in $5$ billion years?
8. List two advantages of fusion power over fission power and two reasons why it is not yet in use.

### Answers

1. Deuterons are positively charged and must overcome the Coulomb barrier; the neutron has no charge.
2. $4\\,{}^{1}H \\to {}^{4}He + 2e^+ + 2\\nu$; $26{.}7$ MeV.
3. $\\Delta m = 4{.}02820 - 4{.}02469 = 0{.}00351$ u; $Q \\approx 3{.}27$ MeV.
4. $(17{.}6/5) / (200/235) = 3{.}52 / 0{.}85 \\approx 4{.}1$.
5. From lithium bombarded by the reactor's neutrons: \${}^{6}Li + n \\to {}^{4}He + {}^{3}H$.
6. The Lorentz force makes charged particles spiral around field lines with a radius of millimetres, so they move along the lines, which are closed inside the torus, and do not reach the walls.
7. $4{.}2 \\cdot 10^9 \\cdot 1{.}6 \\cdot 10^{17} = 6{.}7 \\cdot 10^{26}$ kg, about $0{.}03\\%$ of $2 \\cdot 10^{30}$ kg.
8. Advantages: inexhaustible fuel, no runaway or long-lived waste. Reasons: plasma confinement at $10^8$ K is still not sustained long enough, and the materials and cost problems are not solved.`,
        hy: `## Սինթեզ և կուլոնյան պատնեշ

Տեսակարար կապի էներգիայի կորը ջրածնից մինչև հելիում կտրուկ բարձրանում է, ուստի թեթև միջուկների միացումը՝ **սինթեզը**, մեկ կիլոգրամին շատ ավելի էներգիա է անջատում, քան տրոհումը․ մոտ $6$ ՄէՎ մեկ նուկլոնին $0{,}85$ ՄէՎ-ի դիմաց։ Դժվարությունն այն է, որ միջուկները դրական լիցքավորված են։ Երկու պրոտոն միջուկային ուժի գործողության հեռավորության՝ մոտ $10^{-15}$ մ մոտեցնելու համար պետք է հաղթահարել կուլոնյան վանողությունը

$$U = \\dfrac{k e^2}{r} = \\dfrac{9 \\cdot 10^9 \\cdot (1{,}6 \\cdot 10^{-19})^2}{10^{-15}} \\approx 2{,}3 \\cdot 10^{-13}\\ \\text{Ջ} \\approx 1{,}4\\ \\text{ՄէՎ}$$

Գազում այդ էներգիան գալիս է ջերմային շարժումից, ուստի ռեակցիան կոչվում է **թերմոմիջուկային**։ Մաքսվելի բաշխման և քվանտային թունելացման շնորհիվ ռեակցիան ընթանում է արդեն պատնեշից հարյուր անգամ փոքր միջին էներգիայի դեպքում․ $10^7$–$10^8$ Կ-ում։ Այդպիսի ջերմաստիճաններում նյութը լրիվ իոնացված **պլազմա** է։

## Սինթեզն աստղերում

Արեգակը ջրածինը հելիումի է վերածում **պրոտոն-պրոտոնային շղթայով**․

$\${}^{1}H + {}^{1}H \\to {}^{2}H + e^+ + \\nu, \\qquad {}^{2}H + {}^{1}H \\to {}^{3}He + \\gamma, \\qquad {}^{3}He + {}^{3}He \\to {}^{4}He + 2\\,{}^{1}H$$

Ընդհանուր արդյունքը․ $4\\,{}^{1}H \\to {}^{4}He + 2e^+ + 2\\nu + 26{,}7$ ՄէՎ։ Արեգակի կենտրոնի ջերմաստիճանը $1{,}5 \\cdot 10^7$ Կ է, ճնշումը՝ $2 \\cdot 10^{16}$ Պա․ պահումն ապահովում է ձգողականությունը։ Ամեն վայրկյան Արեգակն այրում է $6 \\cdot 10^{11}$ կգ ջրածին և կորցնում $4{,}3 \\cdot 10^9$ կգ զանգված, բայց վառելիքը բավական է ևս հինգ միլիարդ տարի։ Ավելի ծանր աստղերն օգտագործում են ածխածին-ազոտային ցիկլը, իսկ ուշ փուլերում հելիումը միաձուլում են ածխածնի և թթվածնի, և այդպես մինչև երկաթ՝ ստեղծելով այն տարրերը, որոնցից կազմված են մոլորակները և մենք ինքներս։

## Սինթեզն Երկրի վրա

Ամենահեշտ ռեակցիան **դեյտերիում-տրիտիումն** է․

$\${}^{2}H + {}^{3}H \\to {}^{4}He\\ (3{,}5\\ \\text{ՄէՎ}) + n\\ (14{,}1\\ \\text{ՄէՎ})$$

որը բռնկվում է մոտ $10^8$ Կ-ում։ Դեյտերիումը ստացվում է ծովի ջրից ($6500$ ջրածնի ատոմից մեկը)․ տրիտիումը ռադիոակտիվ է ($T = 12{,}3$ տարի) և ստացվում է լիթիումից ռեակտորի սեփական նեյտրոններով․ \${}^{6}Li + n \\to {}^{4}He + {}^{3}H$։ Չկառավարվող տարբերակը **ջրածնային ռումբն** է (1952–1953), որը բռնկվում է տրոհման ռումբով։

Կառավարվող ռեակտորի համար պլազման պետք է բավարարի **Լոուսոնի չափանիշին**․ խտության և պահման ժամանակի արտադրյալը $10^8$ Կ-ում պետք է գերազանցի մոտ $10^{20}$ վ/մ³։ Ոչ մի նյութական պատ չի կարող այդպիսի պլազմա պահել, ուստի հետևում են երկու ճանապարհի․

> - **Մագնիսական պահում։** **Տոկամակում** (1950-ականների խորհրդային նախագիծ) պլազման օղակ է, որը պահվում է ուժեղ տորոիդալ մագնիսական դաշտով և հենց պլազմայում հոսող հոսանքի դաշտով․ լիցքավորված մասնիկները պարուրաձև շարժվում են դաշտի գծերի երկայնքով և պատերին չեն դիպչում։ **ITER-ը**, որը 35 երկիր կառուցում են Ֆրանսիայի Կադարաշում, ունի $840$ մ³ պլազմայի ծավալ, $5{,}3$ Տ դաշտ և նախագծված է $50$ ՄՎտ տաքացումից $500$ ՄՎտ սինթեզի հզորություն արտադրելու համար։
> - **Իներցիալ պահում։** Հզոր լազերները մի քանի նանովայրկյանում սեղմում են միլիմետրաչափ վառելիքի հատիկ (ԱՄՆ-ի National Ignition Facility, որը 2022 թ․ առաջին անգամ ստացավ թիրախին հասցված լազերային էներգիայից ավելի սինթեզի էներգիա)։

## Ինչու արժե սինթեզը

> **Առավելություններ․** գործնականում անսահմանափակ վառելիք (օվկիանոսների դեյտերիում), շղթայական ռեակցիայի և անվերահսկելի աճի անհնարինություն, հենց վառելիքից երկարակյաց թափոնների բացակայություն (միայն ակտիվացած ռեակտորի մասեր), ջերմոցային գազերի բացակայություն։
>
> **Դժվարություններ․** $10^8$ Կ պլազմայի կայուն պահում, $14$ ՄէՎ նեյտրոններին դիմացող նյութեր, տրիտիումի արտադրություն և սարքերի հսկայական արժեք։ Առևտրային սինթեզային էներգիա սպասվում է 21-րդ դարի երկրորդ կեսին։

## Լուծված օրինակներ

**Օրինակ 1։** Ամբողջ պրոտոն-պրոտոնային շղթայի էներգիայի ելքը զանգվածներից․ $4 m_H - m_{He} = 4 \\cdot 1{,}00783 - 4{,}00260 = 0{,}02872$ զ․ա․մ․։

$Q = 0{,}02872 \\cdot 931{,}5 = 26{,}75$ ՄէՎ, որից մոտ $0{,}5$ ՄէՎ տանում են նեյտրինոները։

**Օրինակ 2։** Ջրածնի այրման ժամանակ էներգիայի վերածված զանգվածի բաժինը։

$0{,}02872 / 4{,}0313 \\approx 0{,}0071$, այսինքն՝ $0{,}7\\%$։ Տրոհումը վերածում է մոտ $0{,}09\\%$․ ածխի այրումը՝ $3 \\cdot 10^{-10}$։

**Օրինակ 3։** $1$ կգ ջրածնի հելիումի սինթեզից ստացվող էներգիան։

$E = 0{,}0071 \\cdot 1 \\cdot (3 \\cdot 10^8)^2 = 6{,}4 \\cdot 10^{14}$ Ջ, մոտ ութ անգամ ավելի, քան $1$ կգ ուրանի տրոհումից։

**Օրինակ 4։** Ջերմաստիճանը, որի դեպքում մասնիկի միջին կինետիկ էներգիան $\\frac{3}{2}kT$ հավասար է $10$ կէՎ-ի (բռնկման համար տիպիկ)։

$T = \\dfrac{2E}{3k} = \\dfrac{2 \\cdot 10^4 \\cdot 1{,}6 \\cdot 10^{-19}}{3 \\cdot 1{,}38 \\cdot 10^{-23}} \\approx 7{,}7 \\cdot 10^7$ Կ։

**Օրինակ 5։** Արեգակը ճառագայթում է $3{,}8 \\cdot 10^{26}$ Վտ։ Ի՞նչ զանգված է այն կորցնում վայրկյանում, և որքա՞ն ջրածին է այրում։

$\\Delta m = P/c^2 = 3{,}8 \\cdot 10^{26} / 9 \\cdot 10^{16} = 4{,}2 \\cdot 10^9$ կգ/վ։ Այրված ջրածին․ $4{,}2 \\cdot 10^9 / 0{,}0071 \\approx 6 \\cdot 10^{11}$ կգ/վ։

**Օրինակ 6։** Որքա՞ն կարող է Արեգակը լուսավորել, եթե կարող է այրել իր $2 \\cdot 10^{30}$ կգ զանգվածի $10\\%$-ը։

$t = \\dfrac{0{,}1 \\cdot 2 \\cdot 10^{30}}{6 \\cdot 10^{11}} = 3{,}3 \\cdot 10^{17}$ վ $\\approx 10^{10}$ տարի։ Դրա կեսն անցել է։

**Օրինակ 7։** Որքա՞ն դեյտերիում-տրիտիում վառելիք կսպառի տարեկան $1$ ԳՎտ (էլեկտրական, ՕԳԳ-ն $40\\%$) սինթեզային կայանը։

Տարեկան ջերմային էներգիան $2{,}5 \\cdot 10^9 \\cdot 3{,}15 \\cdot 10^7 = 7{,}9 \\cdot 10^{16}$ Ջ․ դեպքերը $7{,}9 \\cdot 10^{16} / (17{,}6 \\cdot 1{,}6 \\cdot 10^{-13}) = 2{,}8 \\cdot 10^{28}$․ վառելիքի զանգվածը $2{,}8 \\cdot 10^{28} \\cdot 5 / 6{,}02 \\cdot 10^{23} \\approx 230$ կգ D–T տարեկան ($2$ միլիոն տոննա ածխի դիմաց)։

**Օրինակ 8։** Շրջանագծի շառավիղը, որով $10$ կէՎ էներգիայով դեյտրոնը շարժվում է $5$ Տ դաշտին ուղղահայաց։

$v = \\sqrt{2E/m} = \\sqrt{2 \\cdot 1{,}6 \\cdot 10^{-15} / 3{,}34 \\cdot 10^{-27}} \\approx 9{,}8 \\cdot 10^5$ մ/վ․ $r = \\dfrac{mv}{qB} = \\dfrac{3{,}34 \\cdot 10^{-27} \\cdot 9{,}8 \\cdot 10^5}{1{,}6 \\cdot 10^{-19} \\cdot 5} \\approx 4$ մմ։ Մասնիկն ամուր կապված է դաշտի գծերին, ահա թե ինչու է մագնիսական պահումն աշխատում։

## Վարժություններ

1. Ինչո՞ւ է երկու դեյտրոնի սինթեզին բարձր ջերմաստիճան պետք, իսկ ուրանի կողմից նեյտրոնի գրավմանը՝ ոչ։
2. Գրեք Արեգակում ջրածնի այրման ընդհանուր ռեակցիան և նշեք նրա էներգիայի ելքը։
3. Հաշվեք \${}^{2}H + {}^{2}H \\to {}^{3}He + n$ ռեակցիայի էներգիայի ելքը $2{,}01410$, $3{,}01603$, $1{,}00866$ զ․ա․մ․ զանգվածներից։
4. Որքա՞ն է D–T սինթեզի ($17{,}6$ ՄէՎ $5$ զ․ա․մ․-ին) և ուրանի տրոհման ($200$ ՄէՎ $235$ զ․ա․մ․-ին) մեկ կիլոգրամին ընկնող էներգիաների հարաբերությունը։
5. Որտեղի՞ց է ստացվում տրիտիումը սինթեզային ռեակտորի համար։ Գրեք արտադրման ռեակցիան։
6. Բառերով բացատրեք, թե ինչու մագնիսական դաշտը կարող է տաք պլազման պատերից հեռու պահել։
7. Արեգակն ամեն վայրկյան կորցնում է $4{,}2 \\cdot 10^9$ կգ։ Իր զանգվածի ո՞ր բաժինը կկորցնի $5$ միլիարդ տարում։
8. Նշեք սինթեզային էներգետիկայի երկու առավելություն տրոհման նկատմամբ և երկու պատճառ, թե ինչու այն դեռ չի կիրառվում։

### Պատասխաններ

1. Դեյտրոնները դրական լիցքավորված են և պետք է հաղթահարեն կուլոնյան պատնեշը․ նեյտրոնը լիցք չունի։
2. $4\\,{}^{1}H \\to {}^{4}He + 2e^+ + 2\\nu$․ $26{,}7$ ՄէՎ։
3. $\\Delta m = 4{,}02820 - 4{,}02469 = 0{,}00351$ զ․ա․մ․․ $Q \\approx 3{,}27$ ՄէՎ։
4. $(17{,}6/5) / (200/235) = 3{,}52 / 0{,}85 \\approx 4{,}1$։
5. Ռեակտորի նեյտրոններով ռմբակոծված լիթիումից․ \${}^{6}Li + n \\to {}^{4}He + {}^{3}H$։
6. Լորենցի ուժը լիցքավորված մասնիկներին ստիպում է միլիմետրերի շառավղով պարուրաձև պտտվել դաշտի գծերի շուրջ, ուստի դրանք շարժվում են գծերի երկայնքով, որոնք տորի ներսում փակ են, և պատերին չեն հասնում։
7. $4{,}2 \\cdot 10^9 \\cdot 1{,}6 \\cdot 10^{17} = 6{,}7 \\cdot 10^{26}$ կգ, $2 \\cdot 10^{30}$ կգ-ի մոտ $0{,}03\\%$-ը։
8. Առավելություններ․ անսպառ վառելիք, անվերահսկելի աճի և երկարակյաց թափոնների բացակայություն։ Պատճառներ․ $10^8$ Կ-ում պլազմայի պահումը դեռ բավականաչափ երկար չի ապահովվում, իսկ նյութերի և արժեքի խնդիրները լուծված չեն։`,
        ru: `## Синтез и кулоновский барьер

Кривая удельной энергии связи круто растёт от водорода к гелию, поэтому слияние лёгких ядер, **синтез**, выделяет на килограмм гораздо больше энергии, чем деление: около $6$ МэВ на нуклон против $0{,}85$ МэВ. Трудность в том, что ядра заряжены положительно. Чтобы сблизить два протона до радиуса действия ядерных сил, около $10^{-15}$ м, нужно преодолеть кулоновское отталкивание

$$U = \\dfrac{k e^2}{r} = \\dfrac{9 \\cdot 10^9 \\cdot (1{,}6 \\cdot 10^{-19})^2}{10^{-15}} \\approx 2{,}3 \\cdot 10^{-13}\\ \\text{Дж} \\approx 1{,}4\\ \\text{МэВ}.$$

В газе эта энергия берётся из теплового движения, поэтому реакцию называют **термоядерной**. Благодаря распределению Максвелла и квантовому туннелированию реакция идёт уже при средней энергии в сто раз меньше барьера: при $10^7$–$10^8$ К. При таких температурах вещество — полностью ионизованная **плазма**.

## Синтез в звёздах

Солнце превращает водород в гелий по **протон-протонной цепочке**:

$\${}^{1}H + {}^{1}H \\to {}^{2}H + e^+ + \\nu, \\qquad {}^{2}H + {}^{1}H \\to {}^{3}He + \\gamma, \\qquad {}^{3}He + {}^{3}He \\to {}^{4}He + 2\\,{}^{1}H.$$

Итог: $4\\,{}^{1}H \\to {}^{4}He + 2e^+ + 2\\nu + 26{,}7$ МэВ. Температура в центре Солнца $1{,}5 \\cdot 10^7$ К, давление $2 \\cdot 10^{16}$ Па; удержание обеспечивает гравитация. Каждую секунду Солнце сжигает $6 \\cdot 10^{11}$ кг водорода и теряет $4{,}3 \\cdot 10^9$ кг массы, но топлива хватит ещё на пять миллиардов лет. Более тяжёлые звёзды используют углеродно-азотный цикл, а на поздних стадиях сливают гелий в углерод и кислород и так далее до железа, создавая элементы, из которых состоят планеты и мы сами.

## Синтез на Земле

Самая лёгкая реакция — **дейтерий-тритиевая**:

$\${}^{2}H + {}^{3}H \\to {}^{4}He\\ (3{,}5\\ \\text{МэВ}) + n\\ (14{,}1\\ \\text{МэВ}),$$

которая зажигается при температуре около $10^8$ К. Дейтерий добывают из морской воды ($1$ из $6500$ атомов водорода); тритий радиоактивен ($T = 12{,}3$ года) и нарабатывается из лития собственными нейтронами реактора: \${}^{6}Li + n \\to {}^{4}He + {}^{3}H$. Неуправляемый вариант — **водородная бомба** (1952–1953), поджигаемая атомной бомбой.

Для управляемого реактора плазма должна удовлетворять **критерию Лоусона**: произведение плотности на время удержания должно превышать примерно $10^{20}$ с/м³ при $10^8$ К. Никакая материальная стенка такую плазму не удержит, поэтому идут двумя путями:

> - **Магнитное удержание.** В **токамаке** (советская разработка 1950-х) плазма — кольцо, удерживаемое сильным тороидальным магнитным полем и полем тока, текущего в самой плазме; заряженные частицы движутся по спиралям вдоль силовых линий и не касаются стенок. **ITER**, строящийся в Кадараше (Франция) 35 странами, имеет объём плазмы $840$ м³, поле $5{,}3$ Тл и рассчитан на $500$ МВт термоядерной мощности при $50$ МВт нагрева.
> - **Инерциальное удержание.** Мощные лазеры за несколько наносекунд сжимают миллиметровую капсулу топлива (National Ignition Facility, США, где в 2022 г. впервые получили больше энергии синтеза, чем энергии лазеров, доставленной на мишень).

## Чем хорош синтез

> **Преимущества:** практически неограниченное топливо (дейтерий океанов), отсутствие цепной реакции и возможности разгона, отсутствие долгоживущих отходов от самого топлива (только активированные части реактора), отсутствие парниковых газов.
>
> **Трудности:** устойчивое удержание плазмы при $10^8$ К, материалы, выдерживающие нейтроны $14$ МэВ, наработка трития и огромная стоимость установок. Промышленной термоядерной энергетики ждут во второй половине XXI века.

## Разобранные примеры

**Пример 1.** Энергетический выход всей протон-протонной цепочки по массам: $4 m_H - m_{He} = 4 \\cdot 1{,}00783 - 4{,}00260 = 0{,}02872$ а.е.м.

$Q = 0{,}02872 \\cdot 931{,}5 = 26{,}75$ МэВ, из которых около $0{,}5$ МэВ уносят нейтрино.

**Пример 2.** Доля массы, превращающейся в энергию при горении водорода.

$0{,}02872 / 4{,}0313 \\approx 0{,}0071$, то есть $0{,}7\\%$. Деление превращает около $0{,}09\\%$; сгорание угля — $3 \\cdot 10^{-10}$.

**Пример 3.** Энергия синтеза $1$ кг водорода в гелий.

$E = 0{,}0071 \\cdot 1 \\cdot (3 \\cdot 10^8)^2 = 6{,}4 \\cdot 10^{14}$ Дж, примерно в восемь раз больше, чем при делении $1$ кг урана.

**Пример 4.** Температура, при которой средняя кинетическая энергия частицы $\\frac{3}{2}kT$ равна $10$ кэВ (типично для зажигания).

$T = \\dfrac{2E}{3k} = \\dfrac{2 \\cdot 10^4 \\cdot 1{,}6 \\cdot 10^{-19}}{3 \\cdot 1{,}38 \\cdot 10^{-23}} \\approx 7{,}7 \\cdot 10^7$ К.

**Пример 5.** Солнце излучает $3{,}8 \\cdot 10^{26}$ Вт. Какую массу оно теряет в секунду и сколько водорода сжигает?

$\\Delta m = P/c^2 = 3{,}8 \\cdot 10^{26} / 9 \\cdot 10^{16} = 4{,}2 \\cdot 10^9$ кг/с. Сожжённый водород: $4{,}2 \\cdot 10^9 / 0{,}0071 \\approx 6 \\cdot 10^{11}$ кг/с.

**Пример 6.** Сколько может светить Солнце, если способно сжечь $10\\%$ своей массы $2 \\cdot 10^{30}$ кг?

$t = \\dfrac{0{,}1 \\cdot 2 \\cdot 10^{30}}{6 \\cdot 10^{11}} = 3{,}3 \\cdot 10^{17}$ с $\\approx 10^{10}$ лет. Половина этого срока уже прошла.

**Пример 7.** Сколько дейтерий-тритиевого топлива расходовала бы за год термоядерная станция мощностью $1$ ГВт (электрической, КПД $40\\%$)?

Тепловая энергия за год $2{,}5 \\cdot 10^9 \\cdot 3{,}15 \\cdot 10^7 = 7{,}9 \\cdot 10^{16}$ Дж; актов $7{,}9 \\cdot 10^{16} / (17{,}6 \\cdot 1{,}6 \\cdot 10^{-13}) = 2{,}8 \\cdot 10^{28}$; масса топлива $2{,}8 \\cdot 10^{28} \\cdot 5 / 6{,}02 \\cdot 10^{23} \\approx 230$ кг D–T в год (против $2$ миллионов тонн угля).

**Пример 8.** Радиус окружности, по которой дейтрон с энергией $10$ кэВ движется поперёк поля $5$ Тл.

$v = \\sqrt{2E/m} = \\sqrt{2 \\cdot 1{,}6 \\cdot 10^{-15} / 3{,}34 \\cdot 10^{-27}} \\approx 9{,}8 \\cdot 10^5$ м/с; $r = \\dfrac{mv}{qB} = \\dfrac{3{,}34 \\cdot 10^{-27} \\cdot 9{,}8 \\cdot 10^5}{1{,}6 \\cdot 10^{-19} \\cdot 5} \\approx 4$ мм. Частица крепко привязана к силовым линиям — поэтому магнитное удержание и работает.

## Упражнения

1. Почему синтезу двух дейтронов нужна высокая температура, а захвату нейтрона ураном — нет?
2. Запишите итоговую реакцию горения водорода на Солнце и укажите её энергетический выход.
3. Вычислите энергетический выход \${}^{2}H + {}^{2}H \\to {}^{3}He + n$ по массам $2{,}01410$, $3{,}01603$, $1{,}00866$ а.е.м.
4. Каково отношение энергии на килограмм для D–T синтеза ($17{,}6$ МэВ на $5$ а.е.м.) и для деления урана ($200$ МэВ на $235$ а.е.м.)?
5. Откуда берётся тритий для термоядерного реактора? Запишите реакцию наработки.
6. Объясните словами, почему магнитное поле может удерживать горячую плазму вдали от стенок.
7. Солнце теряет $4{,}2 \\cdot 10^9$ кг каждую секунду. Какую долю массы оно потеряет за $5$ миллиардов лет?
8. Назовите два преимущества термоядерной энергетики перед ядерной и две причины, по которым она ещё не используется.

### Ответы

1. Дейтроны заряжены положительно и должны преодолеть кулоновский барьер; у нейтрона заряда нет.
2. $4\\,{}^{1}H \\to {}^{4}He + 2e^+ + 2\\nu$; $26{,}7$ МэВ.
3. $\\Delta m = 4{,}02820 - 4{,}02469 = 0{,}00351$ а.е.м.; $Q \\approx 3{,}27$ МэВ.
4. $(17{,}6/5) / (200/235) = 3{,}52 / 0{,}85 \\approx 4{,}1$.
5. Из лития, облучаемого нейтронами реактора: \${}^{6}Li + n \\to {}^{4}He + {}^{3}H$.
6. Сила Лоренца заставляет заряженные частицы вращаться по спиралям вокруг силовых линий с радиусом в миллиметры, поэтому они движутся вдоль линий, замкнутых внутри тора, и не достигают стенок.
7. $4{,}2 \\cdot 10^9 \\cdot 1{,}6 \\cdot 10^{17} = 6{,}7 \\cdot 10^{26}$ кг, около $0{,}03\\%$ от $2 \\cdot 10^{30}$ кг.
8. Преимущества: неисчерпаемое топливо, нет разгона и долгоживущих отходов. Причины: удержание плазмы при $10^8$ К пока не обеспечивается достаточно долго, а проблемы материалов и стоимости не решены.`,
      },
      [
        q(t("Fusion requires very high temperatures because…", "Սինթեզին շատ բարձր ջերմաստիճան է պետք, քանի որ…", "Синтезу нужны очень высокие температуры, потому что…"), [t("nuclei must overcome their Coulomb repulsion", "միջուկները պետք է հաղթահարեն կուլոնյան վանողությունը", "ядра должны преодолеть кулоновское отталкивание"), t("the neutrons must be slowed down", "նեյտրոնները պետք է դանդաղեցվեն", "нейтроны нужно замедлить"), t("the fuel must melt", "վառելիքը պետք է հալվի", "топливо должно расплавиться")], 0),
        q(t("The net reaction in the Sun is…", "Արեգակի ընդհանուր ռեակցիան է…", "Итоговая реакция на Солнце…"), [t("four protons form a helium nucleus", "չորս պրոտոնից առաջանում է հելիումի միջուկ", "четыре протона образуют ядро гелия"), t("uranium splits into two fragments", "ուրանը բաժանվում է երկու բեկորի", "уран делится на два осколка"), t("helium decays into hydrogen", "հելիումը տրոհվում է ջրածնի", "гелий распадается на водород")], 0),
        q(t("The deuterium–tritium reaction yields about…", "Դեյտերիում-տրիտիում ռեակցիան տալիս է մոտ…", "Дейтерий-тритиевая реакция даёт около…"), [t("17.6 MeV", "17,6 ՄէՎ", "17,6 МэВ"), t("200 MeV", "200 ՄէՎ", "200 МэВ"), t("13.6 eV", "13,6 էՎ", "13,6 эВ")], 0),
        q(t("In a tokamak the plasma is held by…", "Տոկամակում պլազման պահվում է…", "В токамаке плазму удерживает…"), [t("a magnetic field", "մագնիսական դաշտով", "магнитное поле"), t("thick steel walls", "հաստ պողպատե պատերով", "толстые стальные стенки"), t("gravity", "ձգողականությամբ", "гравитация")], 0),
        q(t("ITER is being built in…", "ITER-ը կառուցվում է…", "ITER строится в…"), [t("France", "Ֆրանսիայում", "Франции"), t("Armenia", "Հայաստանում", "Армении"), t("Japan", "Ճապոնիայում", "Японии")], 0),
        q(t("Tritium for a fusion reactor is bred from…", "Սինթեզային ռեակտորի տրիտիումն արտադրվում է…", "Тритий для термоядерного реактора нарабатывают из…"), [t("lithium", "լիթիումից", "лития"), t("uranium", "ուրանից", "урана"), t("carbon", "ածխածնից", "углерода")], 0),
      ],
    ),
    lesson(
      "dosimetry-12",
      ["Biological effect of radiation; dosimetry", "Ճառագայթման կենսաբանական ազդեցություն, դոզիմետրիա", "Биологическое действие излучения; дозиметрия"],
      {
        en: ["Explain how ionising radiation damages living cells and why the effect depends on the kind of radiation", "Define absorbed dose (gray), equivalent dose (sievert) and the radiation weighting factor, and compute them", "Compare natural and artificial sources of exposure, state the dose limits and describe the principles of protection: time, distance, shielding"],
        hy: ["Բացատրել, թե ինչպես է իոնացնող ճառագայթումը վնասում կենդանի բջիջները և ինչու է ազդեցությունը կախված ճառագայթման տեսակից", "Սահմանել կլանված դոզան (գրեյ), համարժեք դոզան (զիվերտ) և ճառագայթման կշռային գործակիցը և հաշվել դրանք", "Համեմատել ճառագայթահարման բնական և արհեստական աղբյուրները, նշել դոզայի սահմանները և նկարագրել պաշտպանության սկզբունքները․ ժամանակ, հեռավորություն, պաշտպանիչ շերտ"],
        ru: ["Объяснять, как ионизирующее излучение повреждает живые клетки и почему эффект зависит от вида излучения", "Определять поглощённую дозу (грэй), эквивалентную дозу (зиверт) и взвешивающий коэффициент излучения и вычислять их", "Сравнивать естественные и искусственные источники облучения, называть пределы доз и описывать принципы защиты: время, расстояние, экранирование"],
      },
      {
        en: `## How radiation acts on living matter

Alpha and beta particles, gamma rays, X-rays and neutrons are **ionising radiation**: passing through matter they knock electrons out of atoms. In a cell the ions and free radicals they create break chemical bonds, above all in DNA. Consequences:

> - at large doses many cells die at once: **radiation sickness** (nausea, loss of blood cells, damage to the gut), fatal above about $6$ Sv to the whole body;
> - at small doses damaged DNA may be repaired incorrectly, raising the probability of **cancer** years later and of **hereditary defects**; there is no dose that is known to be entirely harmless.

Radiation cannot be felt by any sense, which makes dosimeters indispensable.

## Dose quantities

> **Absorbed dose** $D = \\dfrac{E}{m}$ is the energy of radiation absorbed per unit mass of tissue. Unit: **gray**, $1$ Gy $= 1$ J/kg. Old unit: $1$ rad $= 0{.}01$ Gy.

The same absorbed dose does different harm depending on the radiation: an alpha particle deposits its energy along a very short track and destroys everything there, while a gamma photon spreads it thinly. This is accounted for by the **radiation weighting factor** $w_R$:

| Radiation | $w_R$ |
|---|---|
| X-rays, gamma, beta | 1 |
| Neutrons (depending on energy) | 5–20 |
| Protons | 2–5 |
| Alpha particles | 20 |

> **Equivalent dose** $H = w_R D$. Unit: **sievert**, Sv (old unit rem, $1$ rem $= 0{.}01$ Sv). For gamma and beta, $1$ Gy gives $1$ Sv; for alpha, $1$ Gy gives $20$ Sv.

Alpha emitters are nearly harmless outside the body (the skin stops them) but very dangerous when inhaled or swallowed, as with radon or polonium.

The **dose rate** is the dose per unit time, for instance in mSv/h or μSv/h; a background dosimeter reads about $0{.}1$–$0{.}2$ μSv/h.

## Sources of exposure

The average person receives about $2{.}4$ mSv a year from natural sources: radon in buildings ($1{.}3$), cosmic rays ($0{.}4$, more at altitude and in flight), rocks and soil ($0{.}5$), potassium-40 and carbon-14 in the body ($0{.}3$). Artificial sources add medical X-rays and CT scans ($0{.}6$ on average; one chest X-ray $0{.}1$ mSv, one CT scan $5$–$10$ mSv), traces from nuclear tests and accidents, and occupational exposure.

| Dose | Effect or limit |
|---|---|
| $1$ mSv/year | limit for the public above background |
| $20$ mSv/year | limit for radiation workers |
| $100$ mSv | lowest dose with a measurable rise in cancer risk |
| $1$ Sv at once | mild radiation sickness |
| $4$–$5$ Sv at once | death of half of those exposed without treatment |

## Protection

> Three rules: shorten the **time** near a source, increase the **distance** (the dose rate from a point source falls as $1/r^2$), and put **shielding** between: paper or clothing for alpha, a few millimetres of aluminium or plastic for beta, thick lead or concrete for gamma, water or paraffin followed by boron for neutrons.

Radiation is also used deliberately: radiotherapy of tumours, sterilisation of instruments and food, radioactive tracers in medicine (technetium-99m) and industry, thickness gauges and smoke detectors.

## Worked examples

**Example 1.** A tissue of mass $0{.}5$ kg absorbs $2 \\cdot 10^{-3}$ J of gamma radiation. Absorbed and equivalent dose?

$D = 2 \\cdot 10^{-3} / 0{.}5 = 4 \\cdot 10^{-3}$ Gy $= 4$ mGy; $H = 1 \\cdot 4 = 4$ mSv.

**Example 2.** The same energy absorbed from alpha particles.

$D = 4$ mGy as before, but $H = 20 \\cdot 4 = 80$ mSv, twenty times more harmful.

**Example 3.** A worker stays $2$ hours a day in a field with dose rate $5$ μSv/h. Annual dose for $250$ working days?

$5 \\cdot 2 \\cdot 250 = 2500$ μSv $= 2{.}5$ mSv, below the $20$ mSv limit.

**Example 4.** A dosimeter shows $0{.}15$ μSv/h. Annual background from this source?

$0{.}15 \\cdot 24 \\cdot 365 \\approx 1300$ μSv $= 1{.}3$ mSv.

**Example 5.** At $1$ m from a point source the dose rate is $800$ μSv/h. At what distance does it fall to $2$ μSv/h?

$r^2 = 800/2 = 400$, $r = 20$ m.

**Example 6.** How much energy does a lethal whole-body dose of $5$ Gy deposit in a $70$ kg person? Compare with the heat capacity.

$E = 5 \\cdot 70 = 350$ J; this would warm the body by $350 / (70 \\cdot 3500) \\approx 0{.}0014$ °C. Radiation is dangerous not by its heat but by the chemical damage of ionisation.

**Example 7.** A patient receives $60$ Gy to a $0{.}2$ kg tumour in $30$ sessions. Energy per session?

Per session $2$ Gy; $E = 2 \\cdot 0{.}2 = 0{.}4$ J.

**Example 8.** A flight at $10$ km altitude gives $5$ μSv/h. How many $4$-hour flights equal one chest X-ray ($100$ μSv)?

One flight $20$ μSv; $100/20 = 5$ flights.

## Exercises

1. Why is an alpha source harmless in the hand but dangerous if inhaled?
2. A $2$ kg sample absorbs $0{.}01$ J of beta radiation. Find the absorbed and the equivalent dose.
3. Neutrons with $w_R = 10$ give an absorbed dose of $3$ mGy. Equivalent dose?
4. A dose rate of $0{.}2$ μSv/h is measured in a room. What dose does a person who spends $8$ hours a day there receive in a year?
5. Convert $300$ mrem to sieverts and compare with the yearly public limit.
6. At $2$ m from a source the dose rate is $100$ μSv/h. At what distance is it $1$ μSv/h?
7. Name the three principles of radiation protection and give an example of shielding for each kind of radiation.
8. Why do a CT scan and a year of natural background have comparable doses, yet nobody avoids living on Earth?

### Answers

1. The skin's dead outer layer stops alpha particles; inside the body they deposit all their energy in living tissue with $w_R = 20$.
2. $D = 0{.}01/2 = 5$ mGy; $H = 5$ mSv.
3. $H = 10 \\cdot 3 = 30$ mSv.
4. $0{.}2 \\cdot 8 \\cdot 365 \\approx 584$ μSv $\\approx 0{.}6$ mSv.
5. $300$ mrem $= 3$ mSv, three times the $1$ mSv limit.
6. $r^2 = 4 \\cdot 100 = 400$, $r = 20$ m.
7. Time, distance, shielding; paper for alpha, aluminium for beta, lead for gamma, water plus boron for neutrons.
8. Both are a few mSv; background exposure cannot be avoided, while a CT scan is justified by the medical benefit, which outweighs the small risk.`,
        hy: `## Ինչպես է ճառագայթումն ազդում կենդանի նյութի վրա

Ալֆա և բետա մասնիկները, գամմա ճառագայթները, ռենտգենյան ճառագայթները և նեյտրոնները **իոնացնող ճառագայթում** են․ նյութով անցնելիս դրանք ատոմներից էլեկտրոններ են դուրս խփում։ Բջջում նրանց ստեղծած իոններն ու ազատ ռադիկալները խզում են քիմիական կապերը, առաջին հերթին՝ ԴՆԹ-ում։ Հետևանքները․

> - մեծ դոզաների դեպքում միանգամից շատ բջիջ է մահանում․ **ճառագայթային հիվանդություն** (սրտխառնոց, արյան բջիջների կորուստ, աղիների վնասում), ամբողջ մարմնի համար մահացու է մոտ $6$ Զվ-ից բարձր․
> - փոքր դոզաների դեպքում վնասված ԴՆԹ-ն կարող է սխալ վերականգնվել՝ տարիներ անց բարձրացնելով **քաղցկեղի** և **ժառանգական արատների** հավանականությունը․ չկա դոզա, որը հայտնի լինի որպես լիովին անվնաս։

Ճառագայթումը ոչ մի զգայարանով չի զգացվում, ինչը դոզիմետրերն անփոխարինելի է դարձնում։

## Դոզայի մեծություններ

> **Կլանված դոզան** $D = \\dfrac{E}{m}$ հյուսվածքի միավոր զանգվածում կլանված ճառագայթման էներգիան է։ Միավորը՝ **գրեյ**, $1$ Գր $= 1$ Ջ/կգ։ Հին միավորը՝ $1$ ռադ $= 0{,}01$ Գր։

Նույն կլանված դոզան տարբեր վնաս է հասցնում կախված ճառագայթումից․ ալֆա մասնիկն իր էներգիան թողնում է շատ կարճ հետագծի երկայնքով և այնտեղ ամեն ինչ քայքայում է, իսկ գամմա ֆոտոնը բաշխում է այն նոսր։ Սա հաշվի է առնվում **ճառագայթման կշռային գործակցով** $w_R$․

| Ճառագայթում | $w_R$ |
|---|---|
| Ռենտգենյան, գամմա, բետա | 1 |
| Նեյտրոններ (կախված էներգիայից) | 5–20 |
| Պրոտոններ | 2–5 |
| Ալֆա մասնիկներ | 20 |

> **Համարժեք դոզան** $H = w_R D$։ Միավորը՝ **զիվերտ**, Զվ (հին միավորը՝ բէր, $1$ բէր $= 0{,}01$ Զվ)։ Գամմայի և բետայի համար $1$ Գր տալիս է $1$ Զվ․ ալֆայի համար $1$ Գր տալիս է $20$ Զվ։

Ալֆա ճառագայթիչները մարմնից դուրս գրեթե անվնաս են (մաշկը կանգնեցնում է դրանք), բայց շատ վտանգավոր են ներշնչելիս կամ կուլ տալիս, ինչպես ռադոնի կամ պոլոնիումի դեպքում։

**Դոզայի հզորությունը** միավոր ժամանակում ստացված դոզան է, օրինակ՝ մԶվ/ժ կամ մկԶվ/ժ․ ֆոնային դոզիմետրը ցույց է տալիս մոտ $0{,}1$–$0{,}2$ մկԶվ/ժ։

## Ճառագայթահարման աղբյուրներ

Միջին մարդը բնական աղբյուրներից տարեկան ստանում է մոտ $2{,}4$ մԶվ․ ռադոն շենքերում ($1{,}3$), տիեզերական ճառագայթներ ($0{,}4$, ավելի շատ բարձրության վրա և թռիչքի ժամանակ), ապարներ և հող ($0{,}5$), կալիում-40 և ածխածին-14 մարմնում ($0{,}3$)։ Արհեստական աղբյուրներն ավելացնում են բժշկական ռենտգեն և համակարգչային տոմոգրաֆիա (միջինում $0{,}6$․ կրծքավանդակի մեկ ռենտգեն $0{,}1$ մԶվ, մեկ ԿՏ $5$–$10$ մԶվ), միջուկային փորձարկումների և վթարների հետքեր և մասնագիտական ճառագայթահարում։

| Դոզա | Ազդեցություն կամ սահման |
|---|---|
| $1$ մԶվ/տարի | սահմանը բնակչության համար՝ ֆոնից բացի |
| $20$ մԶվ/տարի | սահմանը ճառագայթման հետ աշխատողների համար |
| $100$ մԶվ | ամենացածր դոզան, որի դեպքում քաղցկեղի ռիսկի չափելի աճ կա |
| $1$ Զվ միանգամից | թեթև ճառագայթային հիվանդություն |
| $4$–$5$ Զվ միանգամից | առանց բուժման ճառագայթահարվածների կեսի մահ |

## Պաշտպանություն

> Երեք կանոն․ կրճատել **ժամանակը** աղբյուրի մոտ, մեծացնել **հեռավորությունը** (կետային աղբյուրից դոզայի հզորությունը նվազում է $1/r^2$-ով) և միջև դնել **պաշտպանիչ շերտ**․ թուղթ կամ հագուստ ալֆայի համար, մի քանի միլիմետր ալյումին կամ պլաստիկ բետայի համար, հաստ կապար կամ բետոն գամմայի համար, ջուր կամ պարաֆին և ապա բոր նեյտրոնների համար։

Ճառագայթումն օգտագործվում է նաև նպատակային․ ուռուցքների ճառագայթային բուժում, գործիքների և սննդի մանրէազերծում, ռադիոակտիվ նշիչներ բժշկության (տեխնեցիում-99m) և արդյունաբերության մեջ, հաստության չափիչներ և ծխի դետեկտորներ։

## Լուծված օրինակներ

**Օրինակ 1։** $0{,}5$ կգ զանգվածով հյուսվածքը կլանում է $2 \\cdot 10^{-3}$ Ջ գամմա ճառագայթում։ Կլանվա՞ծ և համարժե՞ք դոզան։

$D = 2 \\cdot 10^{-3} / 0{,}5 = 4 \\cdot 10^{-3}$ Գր $= 4$ մԳր․ $H = 1 \\cdot 4 = 4$ մԶվ։

**Օրինակ 2։** Նույն էներգիան կլանված ալֆա մասնիկներից։

$D = 4$ մԳր, ինչպես առաջ, բայց $H = 20 \\cdot 4 = 80$ մԶվ, քսան անգամ ավելի վնասակար։

**Օրինակ 3։** Աշխատողն օրական $2$ ժամ մնում է $5$ մկԶվ/ժ դոզայի հզորությամբ դաշտում։ Տարեկան դոզան $250$ աշխատանքային օրվա համար։

$5 \\cdot 2 \\cdot 250 = 2500$ մկԶվ $= 2{,}5$ մԶվ, $20$ մԶվ սահմանից ցածր։

**Օրինակ 4։** Դոզիմետրը ցույց է տալիս $0{,}15$ մկԶվ/ժ։ Տարեկան ֆոնն այս աղբյուրից։

$0{,}15 \\cdot 24 \\cdot 365 \\approx 1300$ մկԶվ $= 1{,}3$ մԶվ։

**Օրինակ 5։** Կետային աղբյուրից $1$ մ հեռավորության վրա դոզայի հզորությունը $800$ մկԶվ/ժ է։ Ի՞նչ հեռավորության վրա է այն ընկնում մինչև $2$ մկԶվ/ժ։

$r^2 = 800/2 = 400$, $r = 20$ մ։

**Օրինակ 6։** Որքա՞ն էներգիա է ամբողջ մարմնի $5$ Գր մահացու դոզան թողնում $70$ կգ մարդու մեջ։ Համեմատեք ջերմունակության հետ։

$E = 5 \\cdot 70 = 350$ Ջ․ սա մարմինը կտաքացներ $350 / (70 \\cdot 3500) \\approx 0{,}0014$ °C-ով։ Ճառագայթումը վտանգավոր է ոչ թե իր ջերմությամբ, այլ իոնացման քիմիական վնասով։

**Օրինակ 7։** Հիվանդը $0{,}2$ կգ ուռուցքի վրա $30$ սեանսով ստանում է $60$ Գր։ Էներգիան մեկ սեանսում։

Մեկ սեանսում $2$ Գր․ $E = 2 \\cdot 0{,}2 = 0{,}4$ Ջ։

**Օրինակ 8։** $10$ կմ բարձրության վրա թռիչքը տալիս է $5$ մկԶվ/ժ։ Քանի՞ $4$-ժամյա թռիչք է հավասար կրծքավանդակի մեկ ռենտգենի ($100$ մկԶվ)։

Մեկ թռիչքը $20$ մկԶվ․ $100/20 = 5$ թռիչք։

## Վարժություններ

1. Ինչո՞ւ է ալֆա աղբյուրն անվնաս ձեռքում, բայց վտանգավոր ներշնչելիս։
2. $2$ կգ նմուշը կլանում է $0{,}01$ Ջ բետա ճառագայթում։ Գտեք կլանված և համարժեք դոզաները։
3. $w_R = 10$ նեյտրոնները տալիս են $3$ մԳր կլանված դոզա։ Համարժե՞ք դոզան։
4. Սենյակում չափվում է $0{,}2$ մկԶվ/ժ դոզայի հզորություն։ Ի՞նչ դոզա է տարեկան ստանում այնտեղ օրական $8$ ժամ անցկացնող մարդը։
5. $300$ մբէր-ը փոխակերպեք զիվերտի և համեմատեք բնակչության տարեկան սահմանի հետ։
6. Աղբյուրից $2$ մ հեռավորության վրա դոզայի հզորությունը $100$ մկԶվ/ժ է։ Ի՞նչ հեռավորության վրա է այն $1$ մկԶվ/ժ։
7. Նշեք ճառագայթային պաշտպանության երեք սկզբունքները և յուրաքանչյուր տեսակի ճառագայթման համար պաշտպանիչ շերտի օրինակ բերեք։
8. Ինչո՞ւ ԿՏ հետազոտությունը և մեկ տարվա բնական ֆոնը համեմատելի դոզաներ ունեն, բայց ոչ ոք չի խուսափում Երկրի վրա ապրելուց։

### Պատասխաններ

1. Մաշկի մեռած արտաքին շերտը կանգնեցնում է ալֆա մասնիկները․ մարմնի ներսում դրանք ամբողջ էներգիան թողնում են կենդանի հյուսվածքում՝ $w_R = 20$-ով։
2. $D = 0{,}01/2 = 5$ մԳր․ $H = 5$ մԶվ։
3. $H = 10 \\cdot 3 = 30$ մԶվ։
4. $0{,}2 \\cdot 8 \\cdot 365 \\approx 584$ մկԶվ $\\approx 0{,}6$ մԶվ։
5. $300$ մբէր $= 3$ մԶվ, $1$ մԶվ սահմանից երեք անգամ ավելի։
6. $r^2 = 4 \\cdot 100 = 400$, $r = 20$ մ։
7. Ժամանակ, հեռավորություն, պաշտպանիչ շերտ․ թուղթ ալֆայի, ալյումին բետայի, կապար գամմայի, ջուր և բոր նեյտրոնների համար։
8. Երկուսն էլ մի քանի մԶվ են․ ֆոնային ճառագայթահարումից հնարավոր չէ խուսափել, իսկ ԿՏ-ն արդարացված է բժշկական օգուտով, որը գերազանցում է փոքր ռիսկը։`,
        ru: `## Как излучение действует на живое вещество

Альфа- и бета-частицы, гамма-кванты, рентгеновские лучи и нейтроны — **ионизирующее излучение**: проходя через вещество, они выбивают электроны из атомов. В клетке созданные ими ионы и свободные радикалы разрывают химические связи, прежде всего в ДНК. Последствия:

> - при больших дозах сразу гибнет много клеток: **лучевая болезнь** (тошнота, потеря клеток крови, поражение кишечника), смертельна при дозе на всё тело выше примерно $6$ Зв;
> - при малых дозах повреждённая ДНК может восстановиться неверно, повышая вероятность **рака** спустя годы и **наследственных дефектов**; не известно дозы, которая была бы совершенно безвредна.

Излучение не воспринимается ни одним органом чувств, поэтому дозиметры незаменимы.

## Дозовые величины

> **Поглощённая доза** $D = \\dfrac{E}{m}$ — энергия излучения, поглощённая единицей массы ткани. Единица: **грэй**, $1$ Гр $= 1$ Дж/кг. Старая единица: $1$ рад $= 0{,}01$ Гр.

Одна и та же поглощённая доза наносит разный вред в зависимости от излучения: альфа-частица отдаёт энергию на очень коротком пути и разрушает там всё, а гамма-квант распределяет её редко. Это учитывает **взвешивающий коэффициент излучения** $w_R$:

| Излучение | $w_R$ |
|---|---|
| Рентгеновское, гамма, бета | 1 |
| Нейтроны (в зависимости от энергии) | 5–20 |
| Протоны | 2–5 |
| Альфа-частицы | 20 |

> **Эквивалентная доза** $H = w_R D$. Единица: **зиверт**, Зв (старая единица бэр, $1$ бэр $= 0{,}01$ Зв). Для гамма и бета $1$ Гр даёт $1$ Зв; для альфа $1$ Гр даёт $20$ Зв.

Альфа-излучатели почти безвредны вне тела (их останавливает кожа), но очень опасны при вдыхании или проглатывании, как радон или полоний.

**Мощность дозы** — доза в единицу времени, например в мЗв/ч или мкЗв/ч; фоновый дозиметр показывает около $0{,}1$–$0{,}2$ мкЗв/ч.

## Источники облучения

Средний человек получает от естественных источников около $2{,}4$ мЗв в год: радон в зданиях ($1{,}3$), космические лучи ($0{,}4$, больше на высоте и в полёте), горные породы и почва ($0{,}5$), калий-40 и углерод-14 в теле ($0{,}3$). Искусственные источники добавляют медицинские рентген и компьютерную томографию (в среднем $0{,}6$; один рентген грудной клетки $0{,}1$ мЗв, одна КТ $5$–$10$ мЗв), следы ядерных испытаний и аварий и профессиональное облучение.

| Доза | Эффект или предел |
|---|---|
| $1$ мЗв/год | предел для населения сверх фона |
| $20$ мЗв/год | предел для персонала |
| $100$ мЗв | наименьшая доза с измеримым ростом риска рака |
| $1$ Зв сразу | лёгкая лучевая болезнь |
| $4$–$5$ Зв сразу | гибель половины облучённых без лечения |

## Защита

> Три правила: сокращать **время** у источника, увеличивать **расстояние** (мощность дозы от точечного источника падает как $1/r^2$) и ставить **экран**: бумага или одежда для альфа, несколько миллиметров алюминия или пластика для бета, толстый свинец или бетон для гамма, вода или парафин с последующим бором для нейтронов.

Излучение применяют и намеренно: лучевая терапия опухолей, стерилизация инструментов и продуктов, радиоактивные метки в медицине (технеций-99m) и промышленности, толщиномеры и дымовые датчики.

## Разобранные примеры

**Пример 1.** Ткань массой $0{,}5$ кг поглощает $2 \\cdot 10^{-3}$ Дж гамма-излучения. Поглощённая и эквивалентная дозы?

$D = 2 \\cdot 10^{-3} / 0{,}5 = 4 \\cdot 10^{-3}$ Гр $= 4$ мГр; $H = 1 \\cdot 4 = 4$ мЗв.

**Пример 2.** Та же энергия, поглощённая от альфа-частиц.

$D = 4$ мГр, как и раньше, но $H = 20 \\cdot 4 = 80$ мЗв, в двадцать раз вреднее.

**Пример 3.** Работник находится $2$ часа в день в поле с мощностью дозы $5$ мкЗв/ч. Годовая доза за $250$ рабочих дней?

$5 \\cdot 2 \\cdot 250 = 2500$ мкЗв $= 2{,}5$ мЗв, ниже предела $20$ мЗв.

**Пример 4.** Дозиметр показывает $0{,}15$ мкЗв/ч. Годовой фон от этого источника?

$0{,}15 \\cdot 24 \\cdot 365 \\approx 1300$ мкЗв $= 1{,}3$ мЗв.

**Пример 5.** В $1$ м от точечного источника мощность дозы $800$ мкЗв/ч. На каком расстоянии она падает до $2$ мкЗв/ч?

$r^2 = 800/2 = 400$, $r = 20$ м.

**Пример 6.** Сколько энергии оставляет смертельная доза $5$ Гр на всё тело в человеке массой $70$ кг? Сравните с теплоёмкостью.

$E = 5 \\cdot 70 = 350$ Дж; это нагрело бы тело на $350 / (70 \\cdot 3500) \\approx 0{,}0014$ °C. Излучение опасно не теплом, а химическими повреждениями от ионизации.

**Пример 7.** Пациент получает $60$ Гр на опухоль массой $0{,}2$ кг за $30$ сеансов. Энергия за сеанс?

За сеанс $2$ Гр; $E = 2 \\cdot 0{,}2 = 0{,}4$ Дж.

**Пример 8.** Полёт на высоте $10$ км даёт $5$ мкЗв/ч. Сколько $4$-часовых полётов равны одному рентгену грудной клетки ($100$ мкЗв)?

Один полёт $20$ мкЗв; $100/20 = 5$ полётов.

## Упражнения

1. Почему альфа-источник безвреден в руке, но опасен при вдыхании?
2. Образец массой $2$ кг поглощает $0{,}01$ Дж бета-излучения. Найдите поглощённую и эквивалентную дозы.
3. Нейтроны с $w_R = 10$ дают поглощённую дозу $3$ мГр. Эквивалентная доза?
4. В комнате измерена мощность дозы $0{,}2$ мкЗв/ч. Какую дозу получает за год человек, проводящий там $8$ часов в день?
5. Переведите $300$ мбэр в зиверты и сравните с годовым пределом для населения.
6. В $2$ м от источника мощность дозы $100$ мкЗв/ч. На каком расстоянии она равна $1$ мкЗв/ч?
7. Назовите три принципа радиационной защиты и приведите пример экрана для каждого вида излучения.
8. Почему КТ и год естественного фона дают сопоставимые дозы, но никто не избегает жизни на Земле?

### Ответы

1. Мёртвый наружный слой кожи останавливает альфа-частицы; внутри тела они отдают всю энергию живой ткани с $w_R = 20$.
2. $D = 0{,}01/2 = 5$ мГр; $H = 5$ мЗв.
3. $H = 10 \\cdot 3 = 30$ мЗв.
4. $0{,}2 \\cdot 8 \\cdot 365 \\approx 584$ мкЗв $\\approx 0{,}6$ мЗв.
5. $300$ мбэр $= 3$ мЗв, втрое больше предела $1$ мЗв.
6. $r^2 = 4 \\cdot 100 = 400$, $r = 20$ м.
7. Время, расстояние, экранирование; бумага для альфа, алюминий для бета, свинец для гамма, вода с бором для нейтронов.
8. И то и другое — несколько мЗв; фонового облучения избежать нельзя, а КТ оправдана медицинской пользой, которая перевешивает малый риск.`,
      },
      [
        q(t("Absorbed dose is measured in…", "Կլանված դոզան չափվում է…", "Поглощённая доза измеряется в…"), [t("grays (J/kg)", "գրեյով (Ջ/կգ)", "грэях (Дж/кг)"), t("becquerels", "բեկերելով", "беккерелях"), t("electron-volts", "էլեկտրոնվոլտով", "электронвольтах")], 0),
        q(t("The radiation weighting factor of alpha particles is…", "Ալֆա մասնիկների ճառագայթման կշռային գործակիցն է…", "Взвешивающий коэффициент альфа-частиц равен…"), [t("20", "20", "20"), t("1", "1", "1"), t("0.1", "0,1", "0,1")], 0),
        q(t("Equivalent dose is measured in…", "Համարժեք դոզան չափվում է…", "Эквивалентная доза измеряется в…"), [t("sieverts", "զիվերտով", "зивертах"), t("grays", "գրեյով", "грэях"), t("curies", "կյուրիով", "кюри")], 0),
        q(t("The largest natural source of exposure for most people is…", "Մարդկանց մեծամասնության համար ճառագայթահարման ամենամեծ բնական աղբյուրն է…", "Крупнейший естественный источник облучения для большинства людей…"), [t("radon in buildings", "ռադոնը շենքերում", "радон в зданиях"), t("nuclear power plants", "ատոմակայանները", "атомные станции"), t("mobile phones", "բջջային հեռախոսները", "мобильные телефоны")], 0),
        q(t("Doubling the distance from a point source reduces the dose rate…", "Կետային աղբյուրից հեռավորության կրկնապատկումը դոզայի հզորությունը նվազեցնում է…", "Удвоение расстояния от точечного источника уменьшает мощность дозы…"), [t("4 times", "4 անգամ", "в 4 раза"), t("2 times", "2 անգամ", "в 2 раза"), t("8 times", "8 անգամ", "в 8 раз")], 0),
        q(t("Alpha particles are stopped by…", "Ալֆա մասնիկները կանգնեցնում է…", "Альфа-частицы останавливает…"), [t("a sheet of paper", "թղթի թերթը", "лист бумаги"), t("only thick lead", "միայն հաստ կապարը", "только толстый свинец"), t("nothing", "ոչինչ", "ничто")], 0),
      ],
    ),
  ],
};
