import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Elementary particles", "Տարրական մասնիկներ", "Элементарные частицы"),
  summary: t("Discovery of particles, antiparticles, fundamental interactions, quarks and the Standard Model.", "Մասնիկների հայտնաբերում, հակամասնիկներ, հիմնարար փոխազդեցություններ, քվարկներ և Ստանդարտ մոդել։", "Открытие частиц, античастицы, фундаментальные взаимодействия, кварки и Стандартная модель."),
  lessons: [
    lesson(
      "particles-discovery",
      ["Three stages of particle physics; antiparticles", "Մասնիկների ֆիզիկայի երեք փուլ, հակամասնիկներ", "Три этапа развития физики частиц; античастицы"],
      {
        en: ["Outline the three stages of particle physics: electron to positron, positron to quarks, quarks to the present", "Describe antiparticles, pair production and annihilation, and compute the energies involved with E = mc²", "Explain how particles are detected: cloud and bubble chambers, Geiger counters, photographic emulsions, modern detectors"],
        hy: ["Ուրվագծել մասնիկների ֆիզիկայի երեք փուլը․ էլեկտրոնից մինչև պոզիտրոն, պոզիտրոնից մինչև քվարկներ, քվարկներից մինչև այսօր", "Նկարագրել հակամասնիկները, զույգի ծնունդը և անիհիլացիան և E = mc²-ով հաշվել համապատասխան էներգիաները", "Բացատրել, թե ինչպես են հայտնաբերվում մասնիկները․ Վիլսոնի և պղպջակային խցիկներ, Գեյգերի հաշվիչներ, լուսանկարչական էմուլսիաներ, ժամանակակից դետեկտորներ"],
        ru: ["Излагать три этапа физики частиц: от электрона до позитрона, от позитрона до кварков, от кварков до наших дней", "Описывать античастицы, рождение пар и аннигиляцию и вычислять соответствующие энергии по E = mc²", "Объяснять, как регистрируют частицы: камеры Вильсона и пузырьковые, счётчики Гейгера, фотоэмульсии, современные детекторы"],
      },
      {
        en: `## What "elementary" means

A particle is called **elementary** if it has no known internal structure. The list has changed with time: the atom, then the nucleus, then the proton were each thought elementary. Today the elementary particles are the quarks, the leptons and the carriers of the interactions; the proton and neutron are composite. The history is usually divided into three stages.

## Stage one: from the electron to the positron (1897–1932)

- **1897** Thomson discovers the **electron** in cathode rays.
- **1900–1905** Planck and Einstein: the **photon**, the quantum of light.
- **1911–1919** Rutherford: the nucleus and the **proton**.
- **1932** Chadwick: the **neutron**. Pauli (1930) predicts the **neutrino** to save energy conservation in beta decay; it is detected only in 1956.
- **1932** Anderson finds in cosmic rays a particle with the mass of the electron and positive charge, the **positron**, predicted by Dirac's relativistic equation in 1928.

With four particles (electron, proton, neutron, photon) and the neutrino, everything seemed explained: matter is made of three kinds of particle and light.

## Stage two: from the positron to quarks (1932–1964)

Cosmic rays and then accelerators revealed a flood of new particles: the **muon** (1936, a heavy electron, "who ordered that?"), **pions** (1947, predicted by Yukawa as carriers of the nuclear force), **kaons** and **hyperons** (strange particles, 1947–1953), the **antiproton** (1955) and **antineutron** (1956). By 1964 more than a hundred "elementary" particles were known, most of them living for $10^{-23}$ to $10^{-8}$ s. Order was restored when Gell-Mann and Zweig proposed in 1964 that all strongly interacting particles are built from a few **quarks**.

## Stage three: from quarks to the present (1964–)

Deep-inelastic scattering of electrons at Stanford (1968) showed point-like constituents inside the proton. The **charm** quark (1974), the tau lepton (1975), the **bottom** quark (1977), the gluons (1979), the **W and Z** bosons (1983), the **top** quark (1995) and the **Higgs boson** (2012, Large Hadron Collider) filled the Standard Model, discussed in the next lessons.

## Antiparticles

> Every particle has an **antiparticle** with the same mass, spin and lifetime but opposite electric charge (and opposite other charges). Some neutral particles, like the photon, are their own antiparticles.

Two processes connect matter and antimatter:

> - **Pair production:** a photon of energy $h\\nu \\ge 2 m_e c^2 = 1{.}022$ MeV, passing near a nucleus (needed to conserve momentum), turns into an electron and a positron.
> - **Annihilation:** an electron and a positron meeting at rest turn into two photons of $0{.}511$ MeV each, flying in opposite directions: $e^- + e^+ \\to 2\\gamma$.

In annihilation the whole rest mass becomes radiation: the most complete conversion of mass into energy possible. Why the Universe is made of matter rather than equal amounts of both is still an open question.

Antimatter is used daily in **positron emission tomography (PET)**: a patient receives a positron-emitting isotope (fluorine-18), and the pairs of back-to-back $0{.}511$ MeV photons reveal where it has accumulated.

## Detecting particles

Particles are seen through the ionisation they cause:

| Device | Principle |
|---|---|
| Geiger counter | gas discharge triggered by ionisation; counts particles |
| Cloud (Wilson) chamber, 1912 | droplets condense on ions in supersaturated vapour, showing the track |
| Bubble chamber, 1952 | bubbles form on ions in superheated liquid hydrogen |
| Photographic emulsion | silver grains along the track; found the pion |
| Scintillation counter | flash of light in a crystal, read by a photomultiplier |
| Modern detectors (ATLAS, CMS) | silicon trackers, calorimeters and muon chambers around a collision point, in a magnetic field |

In a magnetic field a track curves with radius $r = \\dfrac{mv}{qB}$: the direction of curvature gives the sign of the charge, the radius gives the momentum. Anderson identified the positron by a track curving the "wrong" way for an electron.

## Worked examples

**Example 1.** Rest energy of the electron.

$E_0 = m_e c^2 = 9{.}11 \\cdot 10^{-31} \\cdot 9 \\cdot 10^{16} = 8{.}2 \\cdot 10^{-14}$ J $= 0{.}511$ MeV.

**Example 2.** Minimum photon energy and maximum wavelength for electron–positron pair production.

$E = 2 \\cdot 0{.}511 = 1{.}022$ MeV; $\\lambda = \\dfrac{hc}{E} = \\dfrac{1{.}24 \\cdot 10^{-6}\\ \\text{eV·m}}{1{.}022 \\cdot 10^6\\ \\text{eV}} = 1{.}21 \\cdot 10^{-12}$ m, a hard gamma ray.

**Example 3.** Energy released when $1$ mg of antimatter annihilates with $1$ mg of matter.

$E = mc^2 = 2 \\cdot 10^{-6} \\cdot 9 \\cdot 10^{16} = 1{.}8 \\cdot 10^{11}$ J, like $43$ tonnes of TNT. Producing a milligram of antimatter would, however, take all the world's accelerators millions of years.

**Example 4.** A $2$ MeV photon produces a pair. What kinetic energy do the electron and positron share?

$2 - 1{.}022 = 0{.}978$ MeV.

**Example 5.** Why does annihilation at rest give two photons, not one?

The initial momentum is zero; a single photon always has momentum $E/c \\ne 0$, so momentum conservation requires at least two photons flying in opposite directions.

**Example 6.** A positron and an electron annihilate, each having $1$ MeV of kinetic energy. Total energy of the photons?

$2 \\cdot (0{.}511 + 1) = 3{.}02$ MeV.

**Example 7.** In a $0{.}5$ T field a track curves with radius $4$ cm. Momentum of a singly charged particle?

$p = qBr = 1{.}6 \\cdot 10^{-19} \\cdot 0{.}5 \\cdot 0{.}04 = 3{.}2 \\cdot 10^{-21}$ kg·m/s; in energy units $pc = 3{.}2 \\cdot 10^{-21} \\cdot 3 \\cdot 10^8 / 1{.}6 \\cdot 10^{-13} = 6$ MeV.

**Example 8.** The muon lives $2{.}2$ μs at rest. Moving at $0{.}99c$, how far does it travel in the laboratory before decaying?

$\\gamma = 1/\\sqrt{1 - 0{.}99^2} \\approx 7{.}1$; lifetime in the lab $7{.}1 \\cdot 2{.}2 = 15{.}6$ μs; distance $0{.}99 \\cdot 3 \\cdot 10^8 \\cdot 15{.}6 \\cdot 10^{-6} \\approx 4{.}6$ km. That is why muons born at $15$ km altitude reach the ground.

## Exercises

1. Name the particles discovered in the first stage and the year of each.
2. Who predicted the positron and who found it? What property of its track revealed it?
3. Find the rest energy of the proton ($m_p = 1{.}67 \\cdot 10^{-27}$ kg) in MeV.
4. What minimum energy must a photon have to create a proton–antiproton pair?
5. A $3$ MeV photon creates an electron–positron pair. Find their total kinetic energy.
6. How much energy is released when $1$ g of matter annihilates with $1$ g of antimatter? How long could it power a $1$ GW city?
7. Explain how a PET scanner finds the position of a tumour.
8. A particle's track in a cloud chamber curves to the left in a given field, an electron's to the right, with the same radius. What is the particle?

### Answers

1. Electron 1897, photon 1900–1905, proton 1919, neutron 1932, positron 1932 (neutrino predicted 1930).
2. Dirac (1928), Anderson (1932); the track curved the opposite way to an electron's in the magnetic field.
3. $1{.}67 \\cdot 10^{-27} \\cdot 9 \\cdot 10^{16} = 1{.}5 \\cdot 10^{-10}$ J $= 938$ MeV.
4. $2 \\cdot 938 = 1876$ MeV.
5. $3 - 1{.}022 \\approx 1{.}98$ MeV.
6. $E = 2 \\cdot 10^{-3} \\cdot 9 \\cdot 10^{16} = 1{.}8 \\cdot 10^{14}$ J; $t = 1{.}8 \\cdot 10^{14} / 10^9 = 1{.}8 \\cdot 10^5$ s, about two days.
7. The positron emitted by the tracer annihilates within a millimetre, giving two $0{.}511$ MeV photons in opposite directions; detectors on a ring register them in coincidence, and the line joining the two detectors passes through the source.
8. A positron: same mass and speed (same radius), opposite charge.`,
        hy: `## Ինչ է նշանակում «տարրական»

Մասնիկը կոչվում է **տարրական**, եթե այն հայտնի ներքին կառուցվածք չունի։ Ցանկը ժամանակի ընթացքում փոխվել է․ ատոմը, հետո միջուկը, հետո պրոտոնը հերթով տարրական են համարվել։ Այսօր տարրական մասնիկներն են քվարկները, լեպտոնները և փոխազդեցությունների կրողները․ պրոտոնն ու նեյտրոնը բաղադրյալ են։ Պատմությունը սովորաբար բաժանվում է երեք փուլի։

## Առաջին փուլ․ էլեկտրոնից մինչև պոզիտրոն (1897–1932)

- **1897** Թոմսոնը կաթոդային ճառագայթներում հայտնաբերում է **էլեկտրոնը**։
- **1900–1905** Պլանկ և Էյնշտեյն․ **ֆոտոնը**՝ լույսի քվանտը։
- **1911–1919** Ռեզերֆորդ․ միջուկը և **պրոտոնը**։
- **1932** Չեդվիկ․ **նեյտրոնը**։ Պաուլին (1930) կանխատեսում է **նեյտրինոն**՝ բետա տրոհման մեջ էներգիայի պահպանումը փրկելու համար․ այն հայտնաբերվում է միայն 1956 թ․։
- **1932** Անդերսոնը տիեզերական ճառագայթներում գտնում է էլեկտրոնի զանգվածով և դրական լիցքով մասնիկ՝ **պոզիտրոնը**, որը 1928 թ․ կանխատեսել էր Դիրակի ռելյատիվիստական հավասարումը։

Չորս մասնիկով (էլեկտրոն, պրոտոն, նեյտրոն, ֆոտոն) և նեյտրինոյով ամեն ինչ բացատրված էր թվում․ նյութը կազմված է երեք տեսակի մասնիկից և լույսից։

## Երկրորդ փուլ․ պոզիտրոնից մինչև քվարկներ (1932–1964)

Տիեզերական ճառագայթները, ապա արագացուցիչները բացահայտեցին նոր մասնիկների հեղեղ․ **մյուոնը** (1936, ծանր էլեկտրոն, «ո՞վ է սա պատվիրել»), **պիոնները** (1947, Յուկավայի կանխատեսած միջուկային ուժի կրողները), **կաոնները** և **հիպերոնները** (տարօրինակ մասնիկներ, 1947–1953), **հակապրոտոնը** (1955) և **հականեյտրոնը** (1956)։ 1964 թ․ հայտնի էր հարյուրից ավելի «տարրական» մասնիկ, որոնց մեծ մասն ապրում էր $10^{-23}$-ից $10^{-8}$ վ։ Կարգը վերականգնվեց, երբ Գել-Մանը և Ցվայգը 1964 թ․ առաջարկեցին, որ բոլոր ուժեղ փոխազդող մասնիկները կազմված են մի քանի **քվարկից**։

## Երրորդ փուլ․ քվարկներից մինչև այսօր (1964–)

Ստենֆորդում էլեկտրոնների խոր ոչ առաձգական ցրումը (1968) ցույց տվեց կետային բաղադրիչներ պրոտոնի ներսում։ **Հմայիչ** քվարկը (1974), տաու լեպտոնը (1975), **գեղեցիկ** քվարկը (1977), գլյուոնները (1979), **W և Z** բոզոնները (1983), **վերին** քվարկը (1995) և **Հիգսի բոզոնը** (2012, Մեծ հադրոնային կոլայդեր) լրացրին Ստանդարտ մոդելը, որը քննարկվում է հաջորդ դասերում։

## Հակամասնիկներ

> Յուրաքանչյուր մասնիկ ունի **հակամասնիկ**՝ նույն զանգվածով, սպինով և կյանքի տևողությամբ, բայց հակառակ էլեկտրական լիցքով (և հակառակ այլ լիցքերով)։ Որոշ չեզոք մասնիկներ, օրինակ՝ ֆոտոնը, իրենք իրենց հակամասնիկն են։

Նյութն ու հականյութը կապում են երկու պրոցես․

> - **Զույգի ծնունդ․** $h\\nu \\ge 2 m_e c^2 = 1{,}022$ ՄէՎ էներգիայով ֆոտոնը միջուկի մոտով անցնելիս (անհրաժեշտ է իմպուլսի պահպանման համար) վերածվում է էլեկտրոնի և պոզիտրոնի։
> - **Անիհիլացիա․** հանգստի վիճակում հանդիպող էլեկտրոնն ու պոզիտրոնը վերածվում են $0{,}511$ ՄէՎ-ական երկու ֆոտոնի, որոնք թռչում են հակառակ ուղղություններով․ $e^- + e^+ \\to 2\\gamma$։

Անիհիլացիայի ժամանակ ամբողջ հանգստի զանգվածը դառնում է ճառագայթում․ զանգվածի էներգիայի վերածման հնարավոր ամենալրիվ ձևը։ Թե ինչու է Տիեզերքը կազմված նյութից, այլ ոչ երկուսի հավասար քանակներից, դեռ բաց հարց է։

Հականյութն ամեն օր օգտագործվում է **պոզիտրոնային էմիսիոն տոմոգրաֆիայում (ՊԷՏ)**․ հիվանդին տալիս են պոզիտրոն արձակող իզոտոպ (ֆտոր-18), և հակադիր ուղղություններով թռչող $0{,}511$ ՄէՎ ֆոտոնների զույգերը ցույց են տալիս, թե որտեղ է այն կուտակվել։

## Մասնիկների հայտնաբերում

Մասնիկները տեսանելի են իրենց առաջացրած իոնացման միջոցով․

| Սարք | Սկզբունք |
|---|---|
| Գեյգերի հաշվիչ | իոնացմամբ հարուցված գազային պարպում․ հաշվում է մասնիկները |
| Վիլսոնի խցիկ, 1912 | գերհագեցած գոլորշում իոնների վրա կաթիլներ են խտանում՝ ցույց տալով հետագիծը |
| Պղպջակային խցիկ, 1952 | գերտաքացած հեղուկ ջրածնում իոնների վրա պղպջակներ են առաջանում |
| Լուսանկարչական էմուլսիա | արծաթի հատիկներ հետագծի երկայնքով․ գտել է պիոնը |
| Սցինտիլյացիոն հաշվիչ | լույսի բռնկում բյուրեղում, որը կարդում է ֆոտոբազմապատկիչը |
| Ժամանակակից դետեկտորներ (ATLAS, CMS) | սիլիցիումային հետագծիչներ, կալորիմետրեր և մյուոնային խցիկներ բախման կետի շուրջ՝ մագնիսական դաշտում |

Մագնիսական դաշտում հետագիծը կորանում է $r = \\dfrac{mv}{qB}$ շառավղով․ կորացման ուղղությունը տալիս է լիցքի նշանը, շառավիղը՝ իմպուլսը։ Անդերսոնը պոզիտրոնը ճանաչեց էլեկտրոնի համար «սխալ» կողմ կորացող հետագծով։

## Լուծված օրինակներ

**Օրինակ 1։** Էլեկտրոնի հանգստի էներգիան։

$E_0 = m_e c^2 = 9{,}11 \\cdot 10^{-31} \\cdot 9 \\cdot 10^{16} = 8{,}2 \\cdot 10^{-14}$ Ջ $= 0{,}511$ ՄէՎ։

**Օրինակ 2։** Էլեկտրոն-պոզիտրոն զույգի ծննդի համար ֆոտոնի նվազագույն էներգիան և առավելագույն ալիքի երկարությունը։

$E = 2 \\cdot 0{,}511 = 1{,}022$ ՄէՎ․ $\\lambda = \\dfrac{hc}{E} = \\dfrac{1{,}24 \\cdot 10^{-6}}{1{,}022 \\cdot 10^6}$ մ $= 1{,}21 \\cdot 10^{-12}$ մ (այստեղ $hc = 1{,}24 \\cdot 10^{-6}$ էՎ·մ), կոշտ գամմա ճառագայթ։

**Օրինակ 3։** Անջատված էներգիան, երբ $1$ մգ հականյութ անիհիլացվում է $1$ մգ նյութի հետ։

$E = mc^2 = 2 \\cdot 10^{-6} \\cdot 9 \\cdot 10^{16} = 1{,}8 \\cdot 10^{11}$ Ջ, ինչպես $43$ տոննա տրոտիլ։ Սակայն մեկ միլիգրամ հականյութ արտադրելու համար աշխարհի բոլոր արագացուցիչներին միլիոնավոր տարիներ կպահանջվեին։

**Օրինակ 4։** $2$ ՄէՎ ֆոտոնը զույգ է ծնում։ Ի՞նչ կինետիկ էներգիա են կիսում էլեկտրոնն ու պոզիտրոնը։

$2 - 1{,}022 = 0{,}978$ ՄէՎ։

**Օրինակ 5։** Ինչո՞ւ է հանգստի վիճակում անիհիլացիան տալիս երկու ֆոտոն, ոչ թե մեկ։

Սկզբնական իմպուլսը զրո է․ մեկ ֆոտոնը միշտ ունի $E/c \\ne 0$ իմպուլս, ուստի իմպուլսի պահպանումը պահանջում է առնվազն երկու ֆոտոն՝ հակառակ ուղղություններով։

**Օրինակ 6։** Պոզիտրոնն ու էլեկտրոնն անիհիլացվում են՝ յուրաքանչյուրն ունենալով $1$ ՄէՎ կինետիկ էներգիա։ Ֆոտոնների լրիվ էներգիա՞ն։

$2 \\cdot (0{,}511 + 1) = 3{,}02$ ՄէՎ։

**Օրինակ 7։** $0{,}5$ Տ դաշտում հետագիծը կորանում է $4$ սմ շառավղով։ Միալիցք մասնիկի իմպուլսը։

$p = qBr = 1{,}6 \\cdot 10^{-19} \\cdot 0{,}5 \\cdot 0{,}04 = 3{,}2 \\cdot 10^{-21}$ կգ·մ/վ․ էներգիայի միավորներով $pc = 3{,}2 \\cdot 10^{-21} \\cdot 3 \\cdot 10^8 / 1{,}6 \\cdot 10^{-13} = 6$ ՄէՎ։

**Օրինակ 8։** Մյուոնը հանգստի վիճակում ապրում է $2{,}2$ մկվ։ $0{,}99c$ արագությամբ շարժվելիս որքա՞ն է այն անցնում լաբորատորիայում մինչև տրոհվելը։

$\\gamma = 1/\\sqrt{1 - 0{,}99^2} \\approx 7{,}1$․ կյանքի տևողությունը լաբորատորիայում $7{,}1 \\cdot 2{,}2 = 15{,}6$ մկվ․ հեռավորությունը $0{,}99 \\cdot 3 \\cdot 10^8 \\cdot 15{,}6 \\cdot 10^{-6} \\approx 4{,}6$ կմ։ Ահա թե ինչու $15$ կմ բարձրության վրա ծնված մյուոնները հասնում են գետնին։

## Վարժություններ

1. Անվանեք առաջին փուլում հայտնաբերված մասնիկները և յուրաքանչյուրի տարեթիվը։
2. Ո՞վ կանխատեսեց պոզիտրոնը, և ո՞վ գտավ այն։ Հետագծի ո՞ր հատկությունը բացահայտեց այն։
3. Գտեք պրոտոնի հանգստի էներգիան ($m_p = 1{,}67 \\cdot 10^{-27}$ կգ) ՄէՎ-ով։
4. Ի՞նչ նվազագույն էներգիա պետք է ունենա ֆոտոնը պրոտոն-հակապրոտոն զույգ ստեղծելու համար։
5. $3$ ՄէՎ ֆոտոնը ստեղծում է էլեկտրոն-պոզիտրոն զույգ։ Գտեք նրանց լրիվ կինետիկ էներգիան։
6. Որքա՞ն էներգիա է անջատվում, երբ $1$ գ նյութ անիհիլացվում է $1$ գ հականյութի հետ։ Որքա՞ն ժամանակ այն կարող էր սնել $1$ ԳՎտ քաղաք։
7. Բացատրեք, թե ինչպես է ՊԷՏ սկաները գտնում ուռուցքի դիրքը։
8. Վիլսոնի խցիկում մասնիկի հետագիծը տվյալ դաշտում կորանում է ձախ, էլեկտրոնինը՝ աջ, նույն շառավղով։ Ի՞նչ մասնիկ է։

### Պատասխաններ

1. Էլեկտրոն 1897, ֆոտոն 1900–1905, պրոտոն 1919, նեյտրոն 1932, պոզիտրոն 1932 (նեյտրինոն կանխատեսվել է 1930 թ․)։
2. Դիրակ (1928), Անդերսոն (1932)․ հետագիծը մագնիսական դաշտում կորանում էր էլեկտրոնի հակառակ կողմը։
3. $1{,}67 \\cdot 10^{-27} \\cdot 9 \\cdot 10^{16} = 1{,}5 \\cdot 10^{-10}$ Ջ $= 938$ ՄէՎ։
4. $2 \\cdot 938 = 1876$ ՄէՎ։
5. $3 - 1{,}022 \\approx 1{,}98$ ՄէՎ։
6. $E = 2 \\cdot 10^{-3} \\cdot 9 \\cdot 10^{16} = 1{,}8 \\cdot 10^{14}$ Ջ․ $t = 1{,}8 \\cdot 10^{14} / 10^9 = 1{,}8 \\cdot 10^5$ վ, մոտ երկու օր։
7. Նշիչի արձակած պոզիտրոնը մեկ միլիմետրի սահմաններում անիհիլացվում է՝ տալով հակառակ ուղղություններով երկու $0{,}511$ ՄէՎ ֆոտոն․ օղակի վրա տեղադրված դետեկտորները գրանցում են դրանք համընկնումով, և երկու դետեկտորները միացնող գիծն անցնում է աղբյուրով։
8. Պոզիտրոն․ նույն զանգվածն ու արագությունը (նույն շառավիղը), հակառակ լիցքը։`,
        ru: `## Что значит «элементарная»

Частица называется **элементарной**, если у неё нет известной внутренней структуры. Список менялся со временем: атом, затем ядро, затем протон по очереди считались элементарными. Сегодня элементарные частицы — это кварки, лептоны и переносчики взаимодействий; протон и нейтрон составные. Историю обычно делят на три этапа.

## Первый этап: от электрона до позитрона (1897–1932)

- **1897** Томсон открывает **электрон** в катодных лучах.
- **1900–1905** Планк и Эйнштейн: **фотон**, квант света.
- **1911–1919** Резерфорд: ядро и **протон**.
- **1932** Чедвик: **нейтрон**. Паули (1930) предсказывает **нейтрино**, чтобы спасти закон сохранения энергии в бета-распаде; его обнаруживают лишь в 1956 г.
- **1932** Андерсон находит в космических лучах частицу с массой электрона и положительным зарядом — **позитрон**, предсказанный релятивистским уравнением Дирака в 1928 г.

С четырьмя частицами (электрон, протон, нейтрон, фотон) и нейтрино всё казалось объяснённым: вещество состоит из трёх видов частиц и света.

## Второй этап: от позитрона до кварков (1932–1964)

Космические лучи, а затем ускорители открыли поток новых частиц: **мюон** (1936, тяжёлый электрон, «кто это заказывал?»), **пионы** (1947, предсказанные Юкавой переносчики ядерных сил), **каоны** и **гипероны** (странные частицы, 1947–1953), **антипротон** (1955) и **антинейтрон** (1956). К 1964 г. было известно больше сотни «элементарных» частиц, большинство из которых живёт от $10^{-23}$ до $10^{-8}$ с. Порядок восстановился, когда Гелл-Манн и Цвейг в 1964 г. предложили, что все сильно взаимодействующие частицы построены из нескольких **кварков**.

## Третий этап: от кварков до наших дней (1964–)

Глубоконеупругое рассеяние электронов в Стэнфорде (1968) показало точечные составляющие внутри протона. **Очарованный** кварк (1974), тау-лептон (1975), **прелестный** кварк (1977), глюоны (1979), **W- и Z-бозоны** (1983), **истинный** кварк (1995) и **бозон Хиггса** (2012, Большой адронный коллайдер) заполнили Стандартную модель, о которой пойдёт речь в следующих уроках.

## Античастицы

> У каждой частицы есть **античастица** с той же массой, спином и временем жизни, но противоположным электрическим зарядом (и противоположными другими зарядами). Некоторые нейтральные частицы, например фотон, сами себе античастицы.

Вещество и антивещество связывают два процесса:

> - **Рождение пары:** фотон с энергией $h\\nu \\ge 2 m_e c^2 = 1{,}022$ МэВ, пролетая вблизи ядра (оно нужно для сохранения импульса), превращается в электрон и позитрон.
> - **Аннигиляция:** электрон и позитрон, встретившись в покое, превращаются в два фотона по $0{,}511$ МэВ, летящие в противоположные стороны: $e^- + e^+ \\to 2\\gamma$.

При аннигиляции вся масса покоя становится излучением: самое полное превращение массы в энергию из возможных. Почему Вселенная состоит из вещества, а не из равных количеств того и другого, остаётся открытым вопросом.

Антивещество ежедневно используется в **позитронно-эмиссионной томографии (ПЭТ)**: пациенту вводят изотоп, испускающий позитроны (фтор-18), и пары разлетающихся в противоположные стороны фотонов по $0{,}511$ МэВ показывают, где он накопился.

## Регистрация частиц

Частицы видны по ионизации, которую они вызывают:

| Прибор | Принцип |
|---|---|
| Счётчик Гейгера | газовый разряд, запускаемый ионизацией; считает частицы |
| Камера Вильсона, 1912 | в пересыщенном паре на ионах конденсируются капельки, показывая трек |
| Пузырьковая камера, 1952 | в перегретом жидком водороде на ионах возникают пузырьки |
| Фотоэмульсия | зёрна серебра вдоль трека; нашла пион |
| Сцинтилляционный счётчик | вспышка света в кристалле, считываемая фотоумножителем |
| Современные детекторы (ATLAS, CMS) | кремниевые трекеры, калориметры и мюонные камеры вокруг точки столкновения, в магнитном поле |

В магнитном поле трек искривляется с радиусом $r = \\dfrac{mv}{qB}$: направление искривления даёт знак заряда, радиус — импульс. Андерсон опознал позитрон по треку, искривлённому «не в ту» сторону для электрона.

## Разобранные примеры

**Пример 1.** Энергия покоя электрона.

$E_0 = m_e c^2 = 9{,}11 \\cdot 10^{-31} \\cdot 9 \\cdot 10^{16} = 8{,}2 \\cdot 10^{-14}$ Дж $= 0{,}511$ МэВ.

**Пример 2.** Минимальная энергия фотона и максимальная длина волны для рождения электрон-позитронной пары.

$E = 2 \\cdot 0{,}511 = 1{,}022$ МэВ; $\\lambda = \\dfrac{hc}{E} = \\dfrac{1{,}24 \\cdot 10^{-6}}{1{,}022 \\cdot 10^6}$ м $= 1{,}21 \\cdot 10^{-12}$ м (здесь $hc = 1{,}24 \\cdot 10^{-6}$ эВ·м), жёсткий гамма-квант.

**Пример 3.** Энергия, выделяющаяся при аннигиляции $1$ мг антивещества с $1$ мг вещества.

$E = mc^2 = 2 \\cdot 10^{-6} \\cdot 9 \\cdot 10^{16} = 1{,}8 \\cdot 10^{11}$ Дж, как $43$ тонны тротила. Однако на производство миллиграмма антивещества всем ускорителям мира потребовались бы миллионы лет.

**Пример 4.** Фотон с энергией $2$ МэВ рождает пару. Какую кинетическую энергию делят электрон и позитрон?

$2 - 1{,}022 = 0{,}978$ МэВ.

**Пример 5.** Почему аннигиляция в покое даёт два фотона, а не один?

Начальный импульс равен нулю; один фотон всегда имеет импульс $E/c \\ne 0$, поэтому сохранение импульса требует не меньше двух фотонов, летящих в противоположные стороны.

**Пример 6.** Позитрон и электрон аннигилируют, имея по $1$ МэВ кинетической энергии. Полная энергия фотонов?

$2 \\cdot (0{,}511 + 1) = 3{,}02$ МэВ.

**Пример 7.** В поле $0{,}5$ Тл трек искривлён с радиусом $4$ см. Импульс однозарядной частицы?

$p = qBr = 1{,}6 \\cdot 10^{-19} \\cdot 0{,}5 \\cdot 0{,}04 = 3{,}2 \\cdot 10^{-21}$ кг·м/с; в энергетических единицах $pc = 3{,}2 \\cdot 10^{-21} \\cdot 3 \\cdot 10^8 / 1{,}6 \\cdot 10^{-13} = 6$ МэВ.

**Пример 8.** Мюон живёт в покое $2{,}2$ мкс. Двигаясь со скоростью $0{,}99c$, какое расстояние он пролетает в лаборатории до распада?

$\\gamma = 1/\\sqrt{1 - 0{,}99^2} \\approx 7{,}1$; время жизни в лаборатории $7{,}1 \\cdot 2{,}2 = 15{,}6$ мкс; расстояние $0{,}99 \\cdot 3 \\cdot 10^8 \\cdot 15{,}6 \\cdot 10^{-6} \\approx 4{,}6$ км. Поэтому мюоны, рождённые на высоте $15$ км, долетают до земли.

## Упражнения

1. Назовите частицы, открытые на первом этапе, и год открытия каждой.
2. Кто предсказал позитрон и кто его нашёл? Какое свойство трека его выдало?
3. Найдите энергию покоя протона ($m_p = 1{,}67 \\cdot 10^{-27}$ кг) в МэВ.
4. Какую минимальную энергию должен иметь фотон, чтобы создать пару протон–антипротон?
5. Фотон с энергией $3$ МэВ создаёт электрон-позитронную пару. Найдите их суммарную кинетическую энергию.
6. Сколько энергии выделяется при аннигиляции $1$ г вещества с $1$ г антивещества? Как долго она могла бы питать город мощностью $1$ ГВт?
7. Объясните, как ПЭТ-сканер находит положение опухоли.
8. Трек частицы в камере Вильсона в данном поле искривлён влево, трек электрона — вправо, с тем же радиусом. Что это за частица?

### Ответы

1. Электрон 1897, фотон 1900–1905, протон 1919, нейтрон 1932, позитрон 1932 (нейтрино предсказано в 1930 г.).
2. Дирак (1928), Андерсон (1932); трек в магнитном поле искривлялся в сторону, противоположную электронному.
3. $1{,}67 \\cdot 10^{-27} \\cdot 9 \\cdot 10^{16} = 1{,}5 \\cdot 10^{-10}$ Дж $= 938$ МэВ.
4. $2 \\cdot 938 = 1876$ МэВ.
5. $3 - 1{,}022 \\approx 1{,}98$ МэВ.
6. $E = 2 \\cdot 10^{-3} \\cdot 9 \\cdot 10^{16} = 1{,}8 \\cdot 10^{14}$ Дж; $t = 1{,}8 \\cdot 10^{14} / 10^9 = 1{,}8 \\cdot 10^5$ с, около двух суток.
7. Позитрон, испущенный меткой, аннигилирует в пределах миллиметра, давая два фотона по $0{,}511$ МэВ в противоположных направлениях; детекторы на кольце регистрируют их на совпадение, и линия, соединяющая два детектора, проходит через источник.
8. Позитрон: та же масса и скорость (тот же радиус), противоположный заряд.`,
      },
      [
        q(t("The positron was discovered in…", "Պոզիտրոնը հայտնաբերվել է…", "Позитрон был открыт в…"), [t("1932, by Anderson", "1932 թ․, Անդերսոնի կողմից", "1932 г., Андерсоном"), t("1897, by Thomson", "1897 թ․, Թոմսոնի կողմից", "1897 г., Томсоном"), t("2012, at the LHC", "2012 թ․, ՄՀԿ-ում", "2012 г., на БАК")], 0),
        q(t("An antiparticle has the same mass as the particle and…", "Հակամասնիկն ունի մասնիկի զանգվածը և…", "Античастица имеет ту же массу, что и частица, и…"), [t("opposite electric charge", "հակառակ էլեկտրական լիցք", "противоположный электрический заряд"), t("twice the charge", "կրկնակի լիցք", "вдвое больший заряд"), t("no charge", "լիցք չունի", "не имеет заряда")], 0),
        q(t("The minimum photon energy for electron–positron pair production is…", "Էլեկտրոն-պոզիտրոն զույգի ծննդի համար ֆոտոնի նվազագույն էներգիան է…", "Минимальная энергия фотона для рождения электрон-позитронной пары…"), [t("1.022 MeV", "1,022 ՄէՎ", "1,022 МэВ"), t("0.511 MeV", "0,511 ՄէՎ", "0,511 МэВ"), t("13.6 eV", "13,6 էՎ", "13,6 эВ")], 0),
        q(t("Annihilation of an electron and a positron at rest produces…", "Հանգստի վիճակում էլեկտրոնի և պոզիտրոնի անիհիլացիան տալիս է…", "Аннигиляция электрона и позитрона в покое даёт…"), [t("two photons flying in opposite directions", "հակառակ ուղղություններով թռչող երկու ֆոտոն", "два фотона, летящих в противоположные стороны"), t("one photon", "մեկ ֆոտոն", "один фотон"), t("a neutron", "նեյտրոն", "нейтрон")], 0),
        q(t("Quarks were proposed in 1964 by…", "Քվարկները 1964 թ․ առաջարկել են…", "Кварки предложили в 1964 г.…"), [t("Gell-Mann and Zweig", "Գել-Մանը և Ցվայգը", "Гелл-Манн и Цвейг"), t("Rutherford and Bohr", "Ռեզերֆորդը և Բորը", "Резерфорд и Бор"), t("Dirac and Pauli", "Դիրակը և Պաուլին", "Дирак и Паули")], 0),
        q(t("In a cloud chamber the track of a charged particle is seen as…", "Վիլսոնի խցիկում լիցքավորված մասնիկի հետագիծն երևում է որպես…", "В камере Вильсона трек заряженной частицы виден как…"), [t("a line of condensed droplets", "խտացած կաթիլների գիծ", "линия сконденсировавшихся капелек"), t("a flash of light", "լույսի բռնկում", "вспышка света"), t("a change of colour", "գույնի փոփոխություն", "изменение цвета")], 0),
      ],
    ),
    lesson(
      "fundamental-interactions",
      ["Four fundamental interactions", "Չորս հիմնարար փոխազդեցություն", "Четыре фундаментальных взаимодействия"],
      {
        en: ["Name the four fundamental interactions, their carriers, ranges and relative strengths", "Explain the exchange picture of forces and estimate the range of an interaction from the mass of its carrier", "Identify which interaction governs a given process: nuclear binding, beta decay, atomic structure, planetary motion"],
        hy: ["Անվանել չորս հիմնարար փոխազդեցությունները, դրանց կրողները, հեռազդեցության շառավիղները և հարաբերական ուժերը", "Բացատրել ուժերի փոխանակային պատկերը և կրողի զանգվածից գնահատել փոխազդեցության շառավիղը", "Որոշել, թե որ փոխազդեցությունն է կառավարում տվյալ պրոցեսը․ միջուկի կապ, բետա տրոհում, ատոմի կառուցվածք, մոլորակների շարժում"],
        ru: ["Называть четыре фундаментальных взаимодействия, их переносчики, радиусы действия и относительные интенсивности", "Объяснять обменную картину сил и оценивать радиус взаимодействия по массе переносчика", "Определять, какое взаимодействие управляет данным процессом: связь ядра, бета-распад, строение атома, движение планет"],
      },
      {
        en: `## Four forces behind everything

All the variety of forces in nature (friction, elasticity, chemical bonds, pressure) reduces to **four fundamental interactions**:

| Interaction | Acts on | Carrier | Range | Relative strength |
|---|---|---|---|---|
| Strong | quarks, hence hadrons | gluons (8), massless | $10^{-15}$ m | 1 |
| Electromagnetic | all charged particles | photon, massless | infinite | $10^{-2}$ |
| Weak | all quarks and leptons | $W^+$, $W^-$, $Z^0$, masses $80$–$91$ GeV | $10^{-18}$ m | $10^{-6}$ |
| Gravitational | everything with energy | graviton (hypothetical) | infinite | $10^{-39}$ |

The strengths are compared for two protons at nuclear distances. Gravity is absurdly weak between particles and matters only because it is always attractive and adds up over the enormous mass of planets and stars.

## The exchange picture

In quantum field theory a force arises from the **exchange of carrier particles**: two skaters throwing a ball to each other recoil apart. The carriers are **virtual**: they exist for a time $\\Delta t$ allowed by the uncertainty relation $\\Delta E \\cdot \\Delta t \\approx \\hbar$. A carrier of mass $m$ borrows energy $\\Delta E = mc^2$, lives $\\Delta t \\approx \\hbar / mc^2$ and travels at most

$$R \\approx c\\, \\Delta t = \\dfrac{\\hbar}{mc}.$$

> A massless carrier (photon, graviton) gives an infinite range; a massive one gives a short range. From the range of nuclear forces Yukawa predicted in 1935 a carrier of about $140$ MeV, the pion, found in 1947.

Feynman diagrams draw these exchanges: two electron lines connected by a wavy photon line represent the Coulomb repulsion of two electrons.

## The strong interaction

The strong interaction binds **quarks** into protons and neutrons by exchange of **gluons**, which carry "colour charge" and interact with each other; as a result the force between quarks does not fall off with distance, and quarks cannot be pulled out of a hadron (**confinement**). The nuclear force between nucleons is a residual effect of this, like the van der Waals force between neutral atoms, which is why it is short-range and saturates. The strong force is responsible for nuclear binding, fission, fusion and the fast decays of hadrons ($10^{-23}$ s).

## The electromagnetic interaction

Carried by photons between all charged particles: it holds electrons in atoms and atoms in molecules and solids, and produces all of chemistry, friction, light and the normal forces of everyday life. Its theory, **quantum electrodynamics**, is the most precisely tested theory in physics (agreement to 12 digits for the electron's magnetic moment).

## The weak interaction

The weak interaction changes the type (flavour) of quarks and leptons. It is responsible for **beta decay** ($n \\to p + e^- + \\bar\\nu$, in which a down quark becomes an up quark by emitting a $W^-$), for the first step of the proton–proton chain in the Sun ($p + p \\to d + e^+ + \\nu$), and for all processes involving neutrinos, which feel only the weak force and can cross the whole Earth without interacting. Its carriers are nearly $100$ times heavier than the proton, so its range is $10^{-18}$ m and weak decays are slow ($10^{-10}$ s to minutes). In 1967–1968 Glashow, Weinberg and Salam unified the electromagnetic and weak interactions into the **electroweak** theory, confirmed by the discovery of the $W$ and $Z$ bosons in 1983.

## Gravitation

Universal attraction between all forms of energy, described by Einstein's general relativity as the curvature of spacetime. It dominates at astronomical scales (planets, stars, galaxies, black holes, the expansion of the Universe), and its waves were first detected in 2015 by LIGO. A quantum theory of gravity and its unification with the other three remain unsolved problems.

## Worked examples

**Example 1.** Range of the force carried by a pion ($m c^2 = 140$ MeV).

$R = \\dfrac{\\hbar c}{mc^2} = \\dfrac{197\\ \\text{MeV·fm}}{140\\ \\text{MeV}} \\approx 1{.}4$ fm $= 1{.}4 \\cdot 10^{-15}$ m, exactly the size of the nuclear force's reach.

**Example 2.** Range of the weak force carried by the $W$ boson ($80{.}4$ GeV).

$R = \\dfrac{197\\ \\text{MeV·fm}}{80\\,400\\ \\text{MeV}} \\approx 2{.}5 \\cdot 10^{-3}$ fm $= 2{.}5 \\cdot 10^{-18}$ m, a thousandth of the proton's size.

**Example 3.** Ratio of the electric to the gravitational force between two protons.

$\\dfrac{F_e}{F_g} = \\dfrac{k e^2}{G m_p^2} = \\dfrac{9 \\cdot 10^9 \\cdot (1{.}6 \\cdot 10^{-19})^2}{6{.}67 \\cdot 10^{-11} \\cdot (1{.}67 \\cdot 10^{-27})^2} \\approx 1{.}2 \\cdot 10^{36}$, independent of distance.

**Example 4.** Which interaction is responsible: (a) the Earth orbiting the Sun; (b) a chemical bond; (c) the alpha decay of uranium; (d) the beta decay of carbon-14; (e) the fusion in the Sun?

(a) gravitational; (b) electromagnetic; (c) strong (plus electromagnetic repulsion of the fragments); (d) weak; (e) strong for the fusion itself, weak for the first step $p + p \\to d + e^+ + \\nu$.

**Example 5.** Why is the neutrino so hard to detect?

It has no charge and no colour, so it feels neither the electromagnetic nor the strong force; only the weak force with its tiny range acts, and the probability of interaction is so small that a neutrino's mean free path in lead is light-years.

**Example 6.** Why do hadrons decaying by the strong interaction live about $10^{-23}$ s?

That is the time for light to cross a hadron: $10^{-15}$ m $/ 3 \\cdot 10^8$ m/s $\\approx 3 \\cdot 10^{-24}$ s. The strong interaction acts as fast as the particle's size allows.

**Example 7.** The free neutron lives about $15$ minutes, the neutral pion $10^{-16}$ s, the rho meson $10^{-23}$ s. Which interaction governs each decay?

Neutron: weak (long lifetime); neutral pion: electromagnetic (decays into two photons); rho: strong.

**Example 8.** The virtual photon exchanged between two electrons $1$ m apart: how long can it exist?

$\\Delta t = 1/c = 3{.}3 \\cdot 10^{-9}$ s; since the photon is massless the borrowed energy can be arbitrarily small, so the range is unlimited.

## Exercises

1. List the four interactions in order of decreasing strength and name their carriers.
2. Why is the gravitational force negligible between elementary particles yet decisive for galaxies?
3. Estimate the mass (in MeV) of a carrier that would give a force of range $10^{-16}$ m.
4. Which interaction holds the electrons in an atom? Which holds the protons in a nucleus despite their repulsion?
5. Why does the nuclear force saturate and have a short range if gluons are massless?
6. Which interaction is responsible for the decay of the muon ($\\mu^- \\to e^- + \\bar\\nu_e + \\nu_\\mu$)? Explain.
7. Name the theory that unified two of the four interactions, its authors and the experimental confirmation.
8. Give one example from everyday life of each of the four interactions (for the strong and weak, explain where they act indirectly).

### Answers

1. Strong (gluons), electromagnetic (photon), weak ($W^\\pm$, $Z^0$), gravitational (graviton).
2. It is $10^{36}$ times weaker than electric forces but always attractive; the electric charges of large bodies cancel while their masses add.
3. $mc^2 = \\hbar c / R = 197$ MeV·fm $/ 0{.}1$ fm $\\approx 2000$ MeV.
4. Electromagnetic; strong.
5. The force between nucleons is a residual of the colour force between confined quarks, like the van der Waals force between neutral atoms; it is mediated effectively by massive pions.
6. Weak: neutrinos appear and the lifetime is long ($2{.}2$ μs).
7. Electroweak theory, Glashow, Weinberg, Salam (1967–1968); discovery of $W$ and $Z$ bosons at CERN in 1983.
8. Gravity: falling objects; electromagnetic: friction, light, chemistry; strong: the energy of the Sun and of nuclear plants; weak: radioactive beta decay used in radiocarbon dating and the first step of solar fusion.`,
        hy: `## Չորս ուժ ամեն ինչի հիմքում

Բնության ուժերի ամբողջ բազմազանությունը (շփում, առաձգականություն, քիմիական կապեր, ճնշում) հանգում է **չորս հիմնարար փոխազդեցության**․

| Փոխազդեցություն | Ազդում է | Կրող | Շառավիղ | Հարաբերական ուժ |
|---|---|---|---|---|
| Ուժեղ | քվարկների, հետևաբար հադրոնների վրա | գլյուոններ (8), անզանգված | $10^{-15}$ մ | 1 |
| Էլեկտրամագնիսական | բոլոր լիցքավորված մասնիկների վրա | ֆոտոն, անզանգված | անվերջ | $10^{-2}$ |
| Թույլ | բոլոր քվարկների և լեպտոնների վրա | $W^+$, $W^-$, $Z^0$, զանգվածները $80$–$91$ ԳէՎ | $10^{-18}$ մ | $10^{-6}$ |
| Գրավիտացիոն | էներգիա ունեցող ամեն ինչի վրա | գրավիտոն (վարկածային) | անվերջ | $10^{-39}$ |

Ուժերը համեմատված են միջուկային հեռավորության վրա գտնվող երկու պրոտոնի համար։ Ձգողականությունը մասնիկների միջև անհեթեթորեն թույլ է և կարևոր է միայն այն պատճառով, որ միշտ ձգող է և գումարվում է մոլորակների ու աստղերի հսկայական զանգվածների վրա։

## Փոխանակային պատկերը

Քվանտային դաշտի տեսության մեջ ուժն առաջանում է **կրող մասնիկների փոխանակությունից**․ միմյանց գնդակ նետող երկու չմուշկորդ հետ են մղվում։ Կրողները **վիրտուալ** են․ նրանք գոյություն ունեն $\\Delta E \\cdot \\Delta t \\approx \\hbar$ անորոշության առնչությամբ թույլատրված $\\Delta t$ ժամանակով։ $m$ զանգվածով կրողը պարտք է վերցնում $\\Delta E = mc^2$ էներգիա, ապրում է $\\Delta t \\approx \\hbar / mc^2$ և անցնում առավելագույնը

$$R \\approx c\\, \\Delta t = \\dfrac{\\hbar}{mc}$$

> Անզանգված կրողը (ֆոտոն, գրավիտոն) տալիս է անվերջ շառավիղ․ զանգված ունեցողը՝ կարճ։ Միջուկային ուժերի շառավղից Յուկավան 1935 թ․ կանխատեսեց մոտ $140$ ՄէՎ կրող՝ պիոնը, որը գտնվեց 1947 թ․։

Ֆեյնմանի դիագրամները պատկերում են այդ փոխանակությունները․ ալիքաձև ֆոտոնային գծով միացված երկու էլեկտրոնային գիծ ներկայացնում է երկու էլեկտրոնի կուլոնյան վանողությունը։

## Ուժեղ փոխազդեցություն

Ուժեղ փոխազդեցությունը **քվարկները** կապում է պրոտոնների և նեյտրոնների մեջ **գլյուոնների** փոխանակությամբ, որոնք կրում են «գունային լիցք» և փոխազդում են միմյանց հետ․ արդյունքում քվարկների միջև ուժը հեռավորության հետ չի նվազում, և քվարկներին հնարավոր չէ հադրոնից դուրս քաշել (**բանտարկում**)։ Նուկլոնների միջև միջուկային ուժը դրա մնացորդային էֆեկտն է, ինչպես վան դեր Վաալսի ուժը չեզոք ատոմների միջև, ահա թե ինչու այն կարճ հեռազդեցություն ունի և հագենում է։ Ուժեղ ուժը պատասխանատու է միջուկի կապի, տրոհման, սինթեզի և հադրոնների արագ տրոհումների ($10^{-23}$ վ) համար։

## Էլեկտրամագնիսական փոխազդեցություն

Ֆոտոններով է փոխանցվում բոլոր լիցքավորված մասնիկների միջև․ այն պահում է էլեկտրոններն ատոմներում և ատոմները մոլեկուլներում ու պինդ մարմիններում և ստեղծում է ամբողջ քիմիան, շփումը, լույսը և առօրյա կյանքի սովորական ուժերը։ Նրա տեսությունը՝ **քվանտային էլեկտրադինամիկան**, ֆիզիկայի ամենաճշգրիտ ստուգված տեսությունն է (էլեկտրոնի մագնիսական մոմենտի համար համընկնում 12 նիշով)։

## Թույլ փոխազդեցություն

Թույլ փոխազդեցությունը փոխում է քվարկների և լեպտոնների տեսակը (բույրը)։ Այն պատասխանատու է **բետա տրոհման** համար ($n \\to p + e^- + \\bar\\nu$, որտեղ ներքին քվարկը $W^-$ արձակելով դառնում է վերին քվարկ), Արեգակի պրոտոն-պրոտոնային շղթայի առաջին քայլի համար ($p + p \\to d + e^+ + \\nu$) և նեյտրինոների մասնակցությամբ բոլոր պրոցեսների համար, որոնք զգում են միայն թույլ ուժը և կարող են անցնել ամբողջ Երկրի միջով՝ առանց փոխազդելու։ Նրա կրողները պրոտոնից գրեթե $100$ անգամ ծանր են, ուստի շառավիղը $10^{-18}$ մ է, և թույլ տրոհումները դանդաղ են ($10^{-10}$ վ-ից մինչև րոպեներ)։ 1967–1968 թթ․ Գլեշոուն, Վայնբերգը և Սալամը միավորեցին էլեկտրամագնիսական և թույլ փոխազդեցությունները **էլեկտրաթույլ** տեսության մեջ, որը հաստատվեց 1983 թ․ $W$ և $Z$ բոզոնների հայտնաբերմամբ։

## Գրավիտացիա

Համընդհանուր ձգողություն էներգիայի բոլոր ձևերի միջև, որն Էյնշտեյնի հարաբերականության ընդհանուր տեսությունը նկարագրում է որպես տարածաժամանակի կորություն։ Այն գերիշխում է աստղագիտական մասշտաբներում (մոլորակներ, աստղեր, գալակտիկաներ, սև խոռոչներ, Տիեզերքի ընդարձակում), իսկ նրա ալիքներն առաջին անգամ գրանցվեցին 2015 թ․ LIGO-ում։ Գրավիտացիայի քվանտային տեսությունը և նրա միավորումը մյուս երեքի հետ չլուծված խնդիրներ են մնում։

## Լուծված օրինակներ

**Օրինակ 1։** Պիոնի ($m c^2 = 140$ ՄէՎ) կրած ուժի շառավիղը։

$R = \\dfrac{\\hbar c}{mc^2} = \\dfrac{197}{140}$ ֆմ $\\approx 1{,}4$ ֆմ $= 1{,}4 \\cdot 10^{-15}$ մ (այստեղ $\\hbar c = 197$ ՄէՎ·ֆմ), ճիշտ միջուկային ուժի հեռազդեցության չափը։

**Օրինակ 2։** $W$ բոզոնի ($80{,}4$ ԳէՎ) կրած թույլ ուժի շառավիղը։

$R = \\dfrac{197}{80\\,400}$ ֆմ $\\approx 2{,}5 \\cdot 10^{-3}$ ֆմ $= 2{,}5 \\cdot 10^{-18}$ մ, պրոտոնի չափի հազարերորդ մասը։

**Օրինակ 3։** Երկու պրոտոնի միջև էլեկտրական և գրավիտացիոն ուժերի հարաբերությունը։

$\\dfrac{F_e}{F_g} = \\dfrac{k e^2}{G m_p^2} = \\dfrac{9 \\cdot 10^9 \\cdot (1{,}6 \\cdot 10^{-19})^2}{6{,}67 \\cdot 10^{-11} \\cdot (1{,}67 \\cdot 10^{-27})^2} \\approx 1{,}2 \\cdot 10^{36}$, հեռավորությունից անկախ։

**Օրինակ 4։** Ո՞ր փոխազդեցությունն է պատասխանատու․ (ա) Երկրի պտույտն Արեգակի շուրջ․ (բ) քիմիական կապ․ (գ) ուրանի ալֆա տրոհում․ (դ) ածխածին-14-ի բետա տրոհում․ (ե) սինթեզն Արեգակում։

(ա) գրավիտացիոն․ (բ) էլեկտրամագնիսական․ (գ) ուժեղ (գումարած բեկորների էլեկտրամագնիսական վանողությունը)․ (դ) թույլ․ (ե) ուժեղ՝ հենց սինթեզի համար, թույլ՝ $p + p \\to d + e^+ + \\nu$ առաջին քայլի համար։

**Օրինակ 5։** Ինչո՞ւ է նեյտրինոն այդքան դժվար հայտնաբերվում։

Այն լիցք և գույն չունի, ուստի չի զգում ո՛չ էլեկտրամագնիսական, ո՛չ ուժեղ ուժը․ գործում է միայն թույլ ուժն իր չնչին շառավղով, և փոխազդեցության հավանականությունն այնքան փոքր է, որ նեյտրինոյի ազատ վազքի միջին երկարությունը կապարում լուսային տարիներ է։

**Օրինակ 6։** Ինչո՞ւ են ուժեղ փոխազդեցությամբ տրոհվող հադրոններն ապրում մոտ $10^{-23}$ վ։

Դա լույսի կողմից հադրոնն անցնելու ժամանակն է․ $10^{-15}$ մ $/ 3 \\cdot 10^8$ մ/վ $\\approx 3 \\cdot 10^{-24}$ վ։ Ուժեղ փոխազդեցությունը գործում է այնքան արագ, որքան թույլ է տալիս մասնիկի չափը։

**Օրինակ 7։** Ազատ նեյտրոնն ապրում է մոտ $15$ րոպե, չեզոք պիոնը՝ $10^{-16}$ վ, ռո մեզոնը՝ $10^{-23}$ վ։ Ո՞ր փոխազդեցությունն է կառավարում յուրաքանչյուր տրոհումը։

Նեյտրոն․ թույլ (երկար կյանք)․ չեզոք պիոն․ էլեկտրամագնիսական (տրոհվում է երկու ֆոտոնի)․ ռո․ ուժեղ։

**Օրինակ 8։** $1$ մ հեռավորության վրա գտնվող երկու էլեկտրոնի միջև փոխանակվող վիրտուալ ֆոտոնը․ որքա՞ն կարող է այն գոյություն ունենալ։

$\\Delta t = 1/c = 3{,}3 \\cdot 10^{-9}$ վ․ քանի որ ֆոտոնն անզանգված է, պարտք վերցված էներգիան կարող է կամայականորեն փոքր լինել, ուստի շառավիղն անսահմանափակ է։

## Վարժություններ

1. Թվարկեք չորս փոխազդեցություններն ուժի նվազման կարգով և անվանեք դրանց կրողները։
2. Ինչո՞ւ է գրավիտացիոն ուժը տարրական մասնիկների միջև անտեսելի, բայց գալակտիկաների համար վճռորոշ։
3. Գնահատեք այն կրողի զանգվածը (ՄէՎ-ով), որը կտար $10^{-16}$ մ շառավղով ուժ։
4. Ո՞ր փոխազդեցությունն է պահում էլեկտրոններն ատոմում։ Ո՞րն է պահում պրոտոնները միջուկում՝ չնայած դրանց վանողությանը։
5. Ինչո՞ւ է միջուկային ուժը հագենում և կարճ շառավիղ ունենում, եթե գլյուոններն անզանգված են։
6. Ո՞ր փոխազդեցությունն է պատասխանատու մյուոնի տրոհման համար ($\\mu^- \\to e^- + \\bar\\nu_e + \\nu_\\mu$)։ Բացատրեք։
7. Անվանեք չորս փոխազդեցություններից երկուսը միավորած տեսությունը, նրա հեղինակներին և փորձնական հաստատումը։
8. Առօրյա կյանքից բերեք չորս փոխազդեցություններից յուրաքանչյուրի մեկական օրինակ (ուժեղի և թույլի համար բացատրեք, թե որտեղ են դրանք անուղղակիորեն գործում)։

### Պատասխաններ

1. Ուժեղ (գլյուոններ), էլեկտրամագնիսական (ֆոտոն), թույլ ($W^\\pm$, $Z^0$), գրավիտացիոն (գրավիտոն)։
2. Այն էլեկտրական ուժերից $10^{36}$ անգամ թույլ է, բայց միշտ ձգող․ մեծ մարմինների էլեկտրական լիցքերը փոխհատուցվում են, իսկ զանգվածները գումարվում են։
3. $mc^2 = \\hbar c / R = 197 / 0{,}1$ ՄէՎ $\\approx 2000$ ՄէՎ։
4. Էլեկտրամագնիսական․ ուժեղ։
5. Նուկլոնների միջև ուժը բանտարկված քվարկների միջև գունային ուժի մնացորդն է, ինչպես վան դեր Վաալսի ուժը չեզոք ատոմների միջև․ այն արդյունավետորեն փոխանցվում է զանգված ունեցող պիոններով։
6. Թույլ․ հայտնվում են նեյտրինոներ, և կյանքի տևողությունն երկար է ($2{,}2$ մկվ)։
7. Էլեկտրաթույլ տեսություն, Գլեշոու, Վայնբերգ, Սալամ (1967–1968)․ $W$ և $Z$ բոզոնների հայտնաբերումը ՑԵՌՆ-ում 1983 թ․։
8. Գրավիտացիա․ ընկնող մարմիններ․ էլեկտրամագնիսական․ շփում, լույս, քիմիա․ ուժեղ․ Արեգակի և ատոմակայանների էներգիան․ թույլ․ ռադիոածխածնային թվագրման մեջ օգտագործվող բետա տրոհումը և արեգակնային սինթեզի առաջին քայլը։`,
        ru: `## Четыре силы в основе всего

Всё многообразие сил в природе (трение, упругость, химические связи, давление) сводится к **четырём фундаментальным взаимодействиям**:

| Взаимодействие | Действует на | Переносчик | Радиус | Относительная сила |
|---|---|---|---|---|
| Сильное | кварки, а значит адроны | глюоны (8), безмассовые | $10^{-15}$ м | 1 |
| Электромагнитное | все заряженные частицы | фотон, безмассовый | бесконечный | $10^{-2}$ |
| Слабое | все кварки и лептоны | $W^+$, $W^-$, $Z^0$, массы $80$–$91$ ГэВ | $10^{-18}$ м | $10^{-6}$ |
| Гравитационное | всё, что имеет энергию | гравитон (гипотетический) | бесконечный | $10^{-39}$ |

Силы сравниваются для двух протонов на ядерных расстояниях. Гравитация между частицами нелепо слаба и важна лишь потому, что всегда притягивает и складывается на огромных массах планет и звёзд.

## Обменная картина

В квантовой теории поля сила возникает из **обмена частицами-переносчиками**: два конькобежца, перебрасывающие друг другу мяч, отталкиваются. Переносчики **виртуальны**: они существуют время $\\Delta t$, допускаемое соотношением неопределённостей $\\Delta E \\cdot \\Delta t \\approx \\hbar$. Переносчик массы $m$ занимает энергию $\\Delta E = mc^2$, живёт $\\Delta t \\approx \\hbar / mc^2$ и пролетает не больше

$$R \\approx c\\, \\Delta t = \\dfrac{\\hbar}{mc}.$$

> Безмассовый переносчик (фотон, гравитон) даёт бесконечный радиус; массивный — короткий. По радиусу ядерных сил Юкава в 1935 г. предсказал переносчик массой около $140$ МэВ, пион, найденный в 1947 г.

Диаграммы Фейнмана изображают эти обмены: две электронные линии, соединённые волнистой фотонной, представляют кулоновское отталкивание двух электронов.

## Сильное взаимодействие

Сильное взаимодействие связывает **кварки** в протоны и нейтроны обменом **глюонами**, которые несут «цветовой заряд» и взаимодействуют друг с другом; в результате сила между кварками не убывает с расстоянием, и кварки нельзя вытащить из адрона (**конфайнмент**). Ядерная сила между нуклонами — остаточный эффект этого, как силы Ван-дер-Ваальса между нейтральными атомами, поэтому она короткодействующая и насыщается. Сильная сила отвечает за связь ядер, деление, синтез и быстрые распады адронов ($10^{-23}$ с).

## Электромагнитное взаимодействие

Переносится фотонами между всеми заряженными частицами: удерживает электроны в атомах и атомы в молекулах и твёрдых телах, порождает всю химию, трение, свет и обычные силы повседневной жизни. Его теория, **квантовая электродинамика**, — самая точно проверенная теория в физике (совпадение в 12 знаках для магнитного момента электрона).

## Слабое взаимодействие

Слабое взаимодействие меняет тип (аромат) кварков и лептонов. Оно отвечает за **бета-распад** ($n \\to p + e^- + \\bar\\nu$, где d-кварк превращается в u-кварк, испуская $W^-$), за первый шаг протон-протонной цепочки на Солнце ($p + p \\to d + e^+ + \\nu$) и за все процессы с нейтрино, которые чувствуют только слабую силу и могут пройти сквозь всю Землю, не взаимодействуя. Его переносчики почти в $100$ раз тяжелее протона, поэтому радиус равен $10^{-18}$ м, а слабые распады медленны (от $10^{-10}$ с до минут). В 1967–1968 гг. Глэшоу, Вайнберг и Салам объединили электромагнитное и слабое взаимодействия в **электрослабую** теорию, подтверждённую открытием $W$- и $Z$-бозонов в 1983 г.

## Гравитация

Всемирное притяжение между всеми формами энергии, описываемое общей теорией относительности Эйнштейна как кривизна пространства-времени. Она господствует на астрономических масштабах (планеты, звёзды, галактики, чёрные дыры, расширение Вселенной), а её волны впервые зарегистрированы в 2015 г. на LIGO. Квантовая теория гравитации и её объединение с тремя остальными остаются нерешёнными задачами.

## Разобранные примеры

**Пример 1.** Радиус силы, переносимой пионом ($m c^2 = 140$ МэВ).

$R = \\dfrac{\\hbar c}{mc^2} = \\dfrac{197}{140}$ фм $\\approx 1{,}4$ фм $= 1{,}4 \\cdot 10^{-15}$ м (здесь $\\hbar c = 197$ МэВ·фм), ровно дальность ядерных сил.

**Пример 2.** Радиус слабой силы, переносимой $W$-бозоном ($80{,}4$ ГэВ).

$R = \\dfrac{197}{80\\,400}$ фм $\\approx 2{,}5 \\cdot 10^{-3}$ фм $= 2{,}5 \\cdot 10^{-18}$ м, тысячная доля размера протона.

**Пример 3.** Отношение электрической и гравитационной сил между двумя протонами.

$\\dfrac{F_e}{F_g} = \\dfrac{k e^2}{G m_p^2} = \\dfrac{9 \\cdot 10^9 \\cdot (1{,}6 \\cdot 10^{-19})^2}{6{,}67 \\cdot 10^{-11} \\cdot (1{,}67 \\cdot 10^{-27})^2} \\approx 1{,}2 \\cdot 10^{36}$, независимо от расстояния.

**Пример 4.** Какое взаимодействие отвечает за: (а) обращение Земли вокруг Солнца; (б) химическую связь; (в) альфа-распад урана; (г) бета-распад углерода-14; (д) синтез на Солнце?

(а) гравитационное; (б) электромагнитное; (в) сильное (плюс электромагнитное отталкивание осколков); (г) слабое; (д) сильное для самого синтеза, слабое для первого шага $p + p \\to d + e^+ + \\nu$.

**Пример 5.** Почему нейтрино так трудно обнаружить?

У него нет ни заряда, ни цвета, поэтому оно не чувствует ни электромагнитной, ни сильной силы; действует лишь слабая с её крошечным радиусом, и вероятность взаимодействия так мала, что длина свободного пробега нейтрино в свинце составляет световые годы.

**Пример 6.** Почему адроны, распадающиеся за счёт сильного взаимодействия, живут около $10^{-23}$ с?

Это время, за которое свет пересекает адрон: $10^{-15}$ м $/ 3 \\cdot 10^8$ м/с $\\approx 3 \\cdot 10^{-24}$ с. Сильное взаимодействие действует так быстро, как позволяет размер частицы.

**Пример 7.** Свободный нейтрон живёт около $15$ минут, нейтральный пион — $10^{-16}$ с, ро-мезон — $10^{-23}$ с. Какое взаимодействие управляет каждым распадом?

Нейтрон: слабое (большое время жизни); нейтральный пион: электромагнитное (распадается на два фотона); ро: сильное.

**Пример 8.** Виртуальный фотон, которым обмениваются два электрона на расстоянии $1$ м: как долго он может существовать?

$\\Delta t = 1/c = 3{,}3 \\cdot 10^{-9}$ с; поскольку фотон безмассовый, занятая энергия может быть сколь угодно малой, поэтому радиус неограничен.

## Упражнения

1. Перечислите четыре взаимодействия в порядке убывания силы и назовите их переносчики.
2. Почему гравитационная сила пренебрежимо мала между элементарными частицами, но решающа для галактик?
3. Оцените массу (в МэВ) переносчика, который давал бы силу с радиусом $10^{-16}$ м.
4. Какое взаимодействие удерживает электроны в атоме? Какое удерживает протоны в ядре, несмотря на их отталкивание?
5. Почему ядерная сила насыщается и имеет короткий радиус, если глюоны безмассовые?
6. Какое взаимодействие отвечает за распад мюона ($\\mu^- \\to e^- + \\bar\\nu_e + \\nu_\\mu$)? Объясните.
7. Назовите теорию, объединившую два из четырёх взаимодействий, её авторов и экспериментальное подтверждение.
8. Приведите по одному примеру из повседневной жизни для каждого из четырёх взаимодействий (для сильного и слабого объясните, где они действуют косвенно).

### Ответы

1. Сильное (глюоны), электромагнитное (фотон), слабое ($W^\\pm$, $Z^0$), гравитационное (гравитон).
2. Она в $10^{36}$ раз слабее электрических сил, но всегда притягивает; электрические заряды больших тел компенсируются, а массы складываются.
3. $mc^2 = \\hbar c / R = 197 / 0{,}1$ МэВ $\\approx 2000$ МэВ.
4. Электромагнитное; сильное.
5. Сила между нуклонами — остаток цветовой силы между запертыми кварками, как сила Ван-дер-Ваальса между нейтральными атомами; эффективно она переносится массивными пионами.
6. Слабое: появляются нейтрино, и время жизни велико ($2{,}2$ мкс).
7. Электрослабая теория, Глэшоу, Вайнберг, Салам (1967–1968); открытие $W$- и $Z$-бозонов в ЦЕРН в 1983 г.
8. Гравитация: падение тел; электромагнитное: трение, свет, химия; сильное: энергия Солнца и АЭС; слабое: бета-распад, используемый в радиоуглеродном датировании, и первый шаг солнечного синтеза.`,
      },
      [
        q(t("The carrier of the electromagnetic interaction is…", "Էլեկտրամագնիսական փոխազդեցության կրողն է…", "Переносчик электромагнитного взаимодействия…"), [t("the photon", "ֆոտոնը", "фотон"), t("the gluon", "գլյուոնը", "глюон"), t("the W boson", "W բոզոնը", "W-бозон")], 0),
        q(t("The strong interaction acts between…", "Ուժեղ փոխազդեցությունը գործում է…", "Сильное взаимодействие действует между…"), [t("quarks (and hence nucleons)", "քվարկների (հետևաբար նուկլոնների) միջև", "кварками (а значит, нуклонами)"), t("electrons", "էլեկտրոնների միջև", "электронами"), t("neutrinos", "նեյտրինոների միջև", "нейтрино")], 0),
        q(t("Beta decay is caused by the…", "Բետա տրոհումն առաջացնում է…", "Бета-распад вызывается…"), [t("weak interaction", "թույլ փոխազդեցությունը", "слабым взаимодействием"), t("strong interaction", "ուժեղ փոխազդեցությունը", "сильным взаимодействием"), t("gravitational interaction", "գրավիտացիոն փոխազդեցությունը", "гравитационным взаимодействием")], 0),
        q(t("A massive carrier particle gives an interaction with…", "Զանգված ունեցող կրող մասնիկը տալիս է փոխազդեցություն…", "Массивная частица-переносчик даёт взаимодействие с…"), [t("a short range", "կարճ շառավղով", "коротким радиусом"), t("an infinite range", "անվերջ շառավղով", "бесконечным радиусом"), t("no range at all", "առանց շառավղի", "нулевым радиусом")], 0),
        q(t("The weakest of the four interactions between particles is…", "Մասնիկների միջև չորս փոխազդեցություններից ամենաթույլն է…", "Самое слабое из четырёх взаимодействий между частицами…"), [t("gravitational", "գրավիտացիոնը", "гравитационное"), t("weak", "թույլը", "слабое"), t("electromagnetic", "էլեկտրամագնիսականը", "электромагнитное")], 0),
        q(t("The W and Z bosons were discovered in…", "W և Z բոզոնները հայտնաբերվել են…", "W- и Z-бозоны были открыты в…"), [t("1983", "1983 թ․", "1983 г."), t("1932", "1932 թ․", "1932 г."), t("2012", "2012 թ․", "2012 г.")], 0),
      ],
    ),
    lesson(
      "quarks-standard-model",
      ["Quarks, leptons, the Standard Model; accelerators", "Քվարկներ, լեպտոններ, Ստանդարտ մոդել, արագացուցիչներ", "Кварки, лептоны, Стандартная модель; ускорители"],
      {
        en: ["List the six quarks and six leptons with their charges and generations, and build the proton, neutron and pions from quarks", "Describe the Standard Model: matter particles, force carriers, the Higgs boson, and the open questions it leaves", "Explain how linear accelerators, cyclotrons, synchrotrons and colliders work and why collider energy matters"],
        hy: ["Թվարկել վեց քվարկները և վեց լեպտոնները՝ լիցքերով և սերունդներով, և քվարկներից կառուցել պրոտոնը, նեյտրոնը և պիոնները", "Նկարագրել Ստանդարտ մոդելը․ նյութի մասնիկներ, ուժերի կրողներ, Հիգսի բոզոն և նրա թողած բաց հարցերը", "Բացատրել, թե ինչպես են աշխատում գծային արագացուցիչները, ցիկլոտրոնները, սինխրոտրոնները և կոլայդերները և ինչու է կոլայդերի էներգիան կարևոր"],
        ru: ["Перечислять шесть кварков и шесть лептонов с их зарядами и поколениями и строить из кварков протон, нейтрон и пионы", "Описывать Стандартную модель: частицы вещества, переносчики сил, бозон Хиггса и оставленные ею открытые вопросы", "Объяснять, как работают линейные ускорители, циклотроны, синхротроны и коллайдеры и почему важна энергия коллайдера"],
      },
      {
        en: `## Quarks

In 1964 Gell-Mann and Zweig showed that the hundreds of hadrons can be built from a few **quarks**, particles with fractional electric charge. Today six are known, in three **generations**:

| Generation | Quark | Charge | Mass (approx.) |
|---|---|---|---|
| 1 | up $u$ | $+\\frac{2}{3}e$ | $2$ MeV |
| 1 | down $d$ | $-\\frac{1}{3}e$ | $5$ MeV |
| 2 | charm $c$ | $+\\frac{2}{3}e$ | $1{.}3$ GeV |
| 2 | strange $s$ | $-\\frac{1}{3}e$ | $95$ MeV |
| 3 | top $t$ | $+\\frac{2}{3}e$ | $173$ GeV |
| 3 | bottom $b$ | $-\\frac{1}{3}e$ | $4{.}2$ GeV |

Each quark also carries one of three **colour charges**, and each has an antiquark. Quarks are never seen free (**confinement**); they form two kinds of **hadrons**:

> - **Baryons**: three quarks. Proton $= uud$ (charge $\\frac{2}{3} + \\frac{2}{3} - \\frac{1}{3} = 1$), neutron $= udd$ (charge $0$), lambda $= uds$.
> - **Mesons**: a quark and an antiquark. $\\pi^+ = u\\bar d$, $\\pi^- = d\\bar u$, $\\pi^0 = (u\\bar u - d\\bar d)/\\sqrt{2}$, $K^+ = u\\bar s$.

Ordinary matter needs only $u$, $d$ and the electron; the heavier generations appear in cosmic rays and accelerators and decay quickly into the first.

## Leptons

**Leptons** do not feel the strong force. There are six, again in three generations: the electron $e^-$, muon $\\mu^-$ and tau $\\tau^-$ (charge $-e$, masses $0{.}511$ MeV, $106$ MeV, $1777$ MeV) and their three **neutrinos** $\\nu_e$, $\\nu_\\mu$, $\\nu_\\tau$ (neutral, masses tiny but not zero, as neutrino oscillations showed in 1998). Each has an antiparticle. The number of leptons minus antileptons is conserved in every reaction, which is why beta decay produces an antineutrino together with the electron.

## The Standard Model

> The **Standard Model** (completed in the 1970s) describes all known particles and three of the four interactions: 12 matter particles (6 quarks, 6 leptons, all spin $\\frac{1}{2}$, **fermions**), the force carriers (photon, 8 gluons, $W^\\pm$, $Z^0$, all spin 1, **bosons**) and the **Higgs boson** (spin 0), whose field gives the $W$, $Z$, quarks and leptons their masses.

The Higgs boson, predicted in 1964, was found at the Large Hadron Collider (LHC) in 2012 with a mass of $125$ GeV. The Standard Model has passed every precision test, yet it leaves big questions open: it does not include gravity; it does not explain **dark matter** and **dark energy**, which make up $95\\%$ of the Universe; it does not explain why there is more matter than antimatter, why there are exactly three generations, or the values of the masses.

## Accelerators

Only accelerators supply the energies needed to create heavy particles ($E = mc^2$) and to probe small distances ($\\lambda = h/p$).

| Type | Principle | Example |
|---|---|---|
| Linear accelerator | particles pass a line of electrodes with alternating voltage | SLAC, $3$ km, $50$ GeV electrons |
| Cyclotron (Lawrence, 1931) | a magnetic field bends the path into a spiral; an alternating voltage between two D-shaped electrodes gives a kick every half-turn | medical cyclotrons, $10$–$250$ MeV |
| Synchrotron | ring of fixed radius; the magnetic field grows with the energy | Dubna, Fermilab, LHC |
| Collider | two beams moving in opposite directions collide head-on, so all the energy is available for new particles | LHC: $27$ km ring, $6{.}8$ TeV per proton, $13{.}6$ TeV collisions |

In a cyclotron the period of revolution $T = \\dfrac{2\\pi m}{qB}$ does not depend on the speed (for $v \\ll c$), so a fixed frequency works; at relativistic speeds the mass grows and the synchrotron, which raises $B$ in step, is needed. Charged particles moving in circles radiate (**synchrotron radiation**), which limits circular electron machines but is itself a precious source of X-rays for materials science and biology.

## Worked examples

**Example 1.** Charge of the baryon $uus$ and of the meson $d\\bar s$.

$uus$: $\\frac{2}{3} + \\frac{2}{3} - \\frac{1}{3} = +1$ (the $\\Sigma^+$). $d\\bar s$: $-\\frac{1}{3} + \\frac{1}{3} = 0$ (the $K^0$).

**Example 2.** Express beta decay in terms of quarks.

$n(udd) \\to p(uud) + e^- + \\bar\\nu_e$: one $d$ quark turns into a $u$ quark, $d \\to u + W^-$, $W^- \\to e^- + \\bar\\nu_e$.

**Example 3.** Why are there no baryons with charge $+3$?

The maximum is three $u$ quarks: $uuu$ has charge $+2$ (the $\\Delta^{++}$). With three quarks of at most $+\\frac{2}{3}$ each, $+3$ is impossible.

**Example 4.** Radius of the orbit of a $10$ MeV proton in a cyclotron with $B = 1{.}5$ T.

$v = \\sqrt{2E/m} = \\sqrt{2 \\cdot 1{.}6 \\cdot 10^{-12} / 1{.}67 \\cdot 10^{-27}} = 4{.}4 \\cdot 10^7$ m/s; $r = \\dfrac{mv}{qB} = \\dfrac{1{.}67 \\cdot 10^{-27} \\cdot 4{.}4 \\cdot 10^7}{1{.}6 \\cdot 10^{-19} \\cdot 1{.}5} \\approx 0{.}31$ m.

**Example 5.** Frequency of the alternating voltage for that cyclotron.

$f = \\dfrac{qB}{2\\pi m} = \\dfrac{1{.}6 \\cdot 10^{-19} \\cdot 1{.}5}{2\\pi \\cdot 1{.}67 \\cdot 10^{-27}} \\approx 2{.}3 \\cdot 10^7$ Hz $= 23$ MHz.

**Example 6.** Magnetic field needed to hold $6{.}8$ TeV protons in a ring of radius $4{.}3$ km (the LHC).

For ultrarelativistic particles $p \\approx E/c$: $B = \\dfrac{p}{qr} = \\dfrac{6{.}8 \\cdot 10^{12} \\cdot 1{.}6 \\cdot 10^{-19} / 3 \\cdot 10^8}{1{.}6 \\cdot 10^{-19} \\cdot 4300} \\approx 5{.}3$ T on average; the superconducting magnets reach $8{.}3$ T over the bending sections.

**Example 7.** How many Higgs bosons (125 GeV) could in principle be made from the energy of one LHC collision ($13{.}6$ TeV)?

$13\\,600 / 125 \\approx 108$; in practice almost all the energy is carried off by the fragments, and a Higgs appears in about one collision in a billion.

**Example 8.** The de Broglie wavelength of a $7$ TeV proton.

$\\lambda = \\dfrac{hc}{pc} \\approx \\dfrac{1{.}24 \\cdot 10^{-6}\\ \\text{eV·m}}{7 \\cdot 10^{12}\\ \\text{eV}} \\approx 1{.}8 \\cdot 10^{-19}$ m, ten thousand times smaller than the proton; that is how the LHC "sees" quarks.

## Exercises

1. Write the quark content of the proton, the neutron, $\\pi^+$ and $\\pi^-$ and verify their charges.
2. Which quarks make up the $\\Omega^-$ baryon of charge $-1$ built from three identical quarks?
3. Name the three charged leptons and their neutrinos. Which of them are stable?
4. What is the Higgs boson's role in the Standard Model, and when and where was it discovered?
5. Why can a cyclotron work with a fixed frequency, and why does it fail at high energies?
6. A deuteron ($m = 3{.}34 \\cdot 10^{-27}$ kg) moves in a cyclotron with $B = 1$ T. Find its period of revolution.
7. Why do colliders give far more useful energy than hitting a fixed target with the same beam?
8. Name three questions that the Standard Model does not answer.

### Answers

1. $uud$ ($+1$), $udd$ ($0$), $u\\bar d$ ($+1$), $d\\bar u$ ($-1$).
2. $sss$: $3 \\cdot (-\\frac{1}{3}) = -1$.
3. Electron, muon, tau; $\\nu_e$, $\\nu_\\mu$, $\\nu_\\tau$. Only the electron and the neutrinos are stable.
4. Its field gives mass to the $W$, $Z$ bosons, quarks and leptons; found in 2012 at the LHC (CERN).
5. The period $2\\pi m / qB$ does not depend on speed while $v \\ll c$; at relativistic speeds the mass increases and the particles fall out of step.
6. $T = 2\\pi m / qB = 2\\pi \\cdot 3{.}34 \\cdot 10^{-27} / (1{.}6 \\cdot 10^{-19} \\cdot 1) \\approx 1{.}3 \\cdot 10^{-7}$ s.
7. In a fixed-target collision most of the energy must remain as kinetic energy of the centre of mass; in head-on collisions the total momentum is zero and all the energy can create new particles.
8. Gravity, dark matter and dark energy, matter–antimatter asymmetry, the number of generations, the origin of the mass values, neutrino masses.`,
        hy: `## Քվարկներ

1964 թ․ Գել-Մանը և Ցվայգը ցույց տվեցին, որ հարյուրավոր հադրոններ կարելի է կառուցել մի քանի **քվարկից**՝ կոտորակային էլեկտրական լիցքով մասնիկներից։ Այսօր հայտնի է վեցը՝ երեք **սերնդում**․

| Սերունդ | Քվարկ | Լիցք | Զանգված (մոտ․) |
|---|---|---|---|
| 1 | վերին $u$ | $+\\frac{2}{3}e$ | $2$ ՄէՎ |
| 1 | ներքին $d$ | $-\\frac{1}{3}e$ | $5$ ՄէՎ |
| 2 | հմայիչ $c$ | $+\\frac{2}{3}e$ | $1{,}3$ ԳէՎ |
| 2 | տարօրինակ $s$ | $-\\frac{1}{3}e$ | $95$ ՄէՎ |
| 3 | գագաթային $t$ | $+\\frac{2}{3}e$ | $173$ ԳէՎ |
| 3 | գեղեցիկ $b$ | $-\\frac{1}{3}e$ | $4{,}2$ ԳէՎ |

Յուրաքանչյուր քվարկ կրում է նաև երեք **գունային լիցքերից** մեկը, և յուրաքանչյուրն ունի հակաքվարկ։ Քվարկներն երբեք ազատ չեն երևում (**բանտարկում**)․ դրանք կազմում են երկու տեսակի **հադրոն**․

> - **Բարիոններ**․ երեք քվարկ։ Պրոտոն $= uud$ (լիցքը $\\frac{2}{3} + \\frac{2}{3} - \\frac{1}{3} = 1$), նեյտրոն $= udd$ (լիցքը $0$), լամբդա $= uds$։
> - **Մեզոններ**․ քվարկ և հակաքվարկ։ $\\pi^+ = u\\bar d$, $\\pi^- = d\\bar u$, $\\pi^0 = (u\\bar u - d\\bar d)/\\sqrt{2}$, $K^+ = u\\bar s$։

Սովորական նյութին պետք են միայն $u$-ն, $d$-ն և էլեկտրոնը․ ավելի ծանր սերունդները հայտնվում են տիեզերական ճառագայթներում և արագացուցիչներում և արագ տրոհվում են առաջինի։

## Լեպտոններ

**Լեպտոնները** ուժեղ ուժը չեն զգում։ Դրանք վեցն են՝ դարձյալ երեք սերնդում․ էլեկտրոն $e^-$, մյուոն $\\mu^-$ և տաու $\\tau^-$ (լիցքը $-e$, զանգվածները $0{,}511$ ՄէՎ, $106$ ՄէՎ, $1777$ ՄէՎ) և դրանց երեք **նեյտրինոները** $\\nu_e$, $\\nu_\\mu$, $\\nu_\\tau$ (չեզոք, զանգվածները չնչին են, բայց ոչ զրո, ինչպես 1998 թ․ ցույց տվեցին նեյտրինոյի տատանումները)։ Յուրաքանչյուրն ունի հակամասնիկ։ Լեպտոնների թիվը հանած հակալեպտոնների թիվը պահպանվում է ամեն ռեակցիայում, ահա թե ինչու բետա տրոհումն էլեկտրոնի հետ հականեյտրինո է տալիս։

## Ստանդարտ մոդել

> **Ստանդարտ մոդելը** (ավարտվել է 1970-ականներին) նկարագրում է բոլոր հայտնի մասնիկները և չորս փոխազդեցություններից երեքը․ նյութի 12 մասնիկ (6 քվարկ, 6 լեպտոն, բոլորը $\\frac{1}{2}$ սպինով՝ **ֆերմիոններ**), ուժերի կրողները (ֆոտոն, 8 գլյուոն, $W^\\pm$, $Z^0$, բոլորը 1 սպինով՝ **բոզոններ**) և **Հիգսի բոզոնը** (սպինը 0), որի դաշտը $W$-ին, $Z$-ին, քվարկներին և լեպտոններին զանգված է տալիս։

1964 թ․ կանխատեսված Հիգսի բոզոնը գտնվեց Մեծ հադրոնային կոլայդերում (ՄՀԿ) 2012 թ․՝ $125$ ԳէՎ զանգվածով։ Ստանդարտ մոդելն անցել է բոլոր ճշգրիտ ստուգումները, սակայն մեծ հարցեր բաց է թողնում․ այն չի ներառում գրավիտացիան․ չի բացատրում **մութ նյութը** և **մութ էներգիան**, որոնք կազմում են Տիեզերքի $95\\%$-ը․ չի բացատրում, թե ինչու է նյութն ավելի շատ, քան հականյութը, ինչու կա ճիշտ երեք սերունդ, կամ զանգվածների արժեքները։

## Արագացուցիչներ

Միայն արագացուցիչներն են տալիս ծանր մասնիկներ ստեղծելու ($E = mc^2$) և փոքր հեռավորություններ զննելու ($\\lambda = h/p$) համար անհրաժեշտ էներգիաները։

| Տեսակ | Սկզբունք | Օրինակ |
|---|---|---|
| Գծային արագացուցիչ | մասնիկներն անցնում են փոփոխական լարումով էլեկտրոդների շարքով | SLAC, $3$ կմ, $50$ ԳէՎ էլեկտրոններ |
| Ցիկլոտրոն (Լոուրենս, 1931) | մագնիսական դաշտը հետագիծը ծալում է պարույրի․ երկու D-աձև էլեկտրոդների միջև փոփոխական լարումը յուրաքանչյուր կես պտույտին հրում է տալիս | բժշկական ցիկլոտրոններ, $10$–$250$ ՄէՎ |
| Սինխրոտրոն | հաստատուն շառավղով օղակ․ մագնիսական դաշտն աճում է էներգիայի հետ | Դուբնա, Ֆերմիլաբ, ՄՀԿ |
| Կոլայդեր | հակառակ ուղղություններով շարժվող երկու փունջ ճակատային բախվում են, ուստի ամբողջ էներգիան հասանելի է նոր մասնիկների համար | ՄՀԿ․ $27$ կմ օղակ, $6{,}8$ ՏէՎ մեկ պրոտոնին, $13{,}6$ ՏէՎ բախումներ |

Ցիկլոտրոնում պտույտի պարբերությունը $T = \\dfrac{2\\pi m}{qB}$ կախված չէ արագությունից ($v \\ll c$ դեպքում), ուստի հաստատուն հաճախությունն աշխատում է․ ռելյատիվիստական արագությունների դեպքում զանգվածն աճում է, և պետք է սինխրոտրոն, որը $B$-ն բարձրացնում է համաքայլ։ Շրջանագծով շարժվող լիցքավորված մասնիկները ճառագայթում են (**սինխրոտրոնային ճառագայթում**), ինչը սահմանափակում է շրջանային էլեկտրոնային մեքենաները, բայց ինքնին ռենտգենյան ճառագայթների թանկարժեք աղբյուր է նյութագիտության և կենսաբանության համար։

## Լուծված օրինակներ

**Օրինակ 1։** $uus$ բարիոնի և $d\\bar s$ մեզոնի լիցքը։

$uus$․ $\\frac{2}{3} + \\frac{2}{3} - \\frac{1}{3} = +1$ ($\\Sigma^+$-ը)։ $d\\bar s$․ $-\\frac{1}{3} + \\frac{1}{3} = 0$ ($K^0$-ն)։

**Օրինակ 2։** Արտահայտեք բետա տրոհումը քվարկներով։

$n(udd) \\to p(uud) + e^- + \\bar\\nu_e$․ մեկ $d$ քվարկ վերածվում է $u$ քվարկի, $d \\to u + W^-$, $W^- \\to e^- + \\bar\\nu_e$։

**Օրինակ 3։** Ինչո՞ւ չկան $+3$ լիցքով բարիոններ։

Առավելագույնն երեք $u$ քվարկ է․ $uuu$-ն ունի $+2$ լիցք ($\\Delta^{++}$-ը)։ Երեք քվարկով, որոնցից յուրաքանչյուրն առավելագույնը $+\\frac{2}{3}$ է, $+3$-ն անհնար է։

**Օրինակ 4։** $10$ ՄէՎ պրոտոնի ուղեծրի շառավիղը $B = 1{,}5$ Տ ցիկլոտրոնում։

$v = \\sqrt{2E/m} = \\sqrt{2 \\cdot 1{,}6 \\cdot 10^{-12} / 1{,}67 \\cdot 10^{-27}} = 4{,}4 \\cdot 10^7$ մ/վ․ $r = \\dfrac{mv}{qB} = \\dfrac{1{,}67 \\cdot 10^{-27} \\cdot 4{,}4 \\cdot 10^7}{1{,}6 \\cdot 10^{-19} \\cdot 1{,}5} \\approx 0{,}31$ մ։

**Օրինակ 5։** Այդ ցիկլոտրոնի փոփոխական լարման հաճախությունը։

$f = \\dfrac{qB}{2\\pi m} = \\dfrac{1{,}6 \\cdot 10^{-19} \\cdot 1{,}5}{2\\pi \\cdot 1{,}67 \\cdot 10^{-27}} \\approx 2{,}3 \\cdot 10^7$ Հց $= 23$ ՄՀց։

**Օրինակ 6։** $4{,}3$ կմ շառավղով օղակում (ՄՀԿ) $6{,}8$ ՏէՎ պրոտոններ պահելու համար անհրաժեշտ մագնիսական դաշտը։

Գերռելյատիվիստական մասնիկների համար $p \\approx E/c$․ $B = \\dfrac{p}{qr} = \\dfrac{6{,}8 \\cdot 10^{12} \\cdot 1{,}6 \\cdot 10^{-19} / 3 \\cdot 10^8}{1{,}6 \\cdot 10^{-19} \\cdot 4300} \\approx 5{,}3$ Տ միջինում․ գերհաղորդիչ մագնիսները ծռող հատվածներում հասնում են $8{,}3$ Տ-ի։

**Օրինակ 7։** Քանի՞ Հիգսի բոզոն (125 ԳէՎ) կարելի է սկզբունքորեն ստեղծել ՄՀԿ-ի մեկ բախման էներգիայից ($13{,}6$ ՏէՎ)։

$13\\,600 / 125 \\approx 108$․ գործնականում գրեթե ամբողջ էներգիան տանում են բեկորները, և Հիգսը հայտնվում է մոտ մեկ միլիարդ բախումից մեկում։

**Օրինակ 8։** $7$ ՏէՎ պրոտոնի դը Բրոյլի ալիքի երկարությունը։

$\\lambda = \\dfrac{hc}{pc} \\approx \\dfrac{1{,}24 \\cdot 10^{-6}}{7 \\cdot 10^{12}}$ մ $\\approx 1{,}8 \\cdot 10^{-19}$ մ ($hc = 1{,}24 \\cdot 10^{-6}$ էՎ·մ), պրոտոնից տասը հազար անգամ փոքր․ ահա թե ինչպես է ՄՀԿ-ն «տեսնում» քվարկները։

## Վարժություններ

1. Գրեք պրոտոնի, նեյտրոնի, $\\pi^+$-ի և $\\pi^-$-ի քվարկային բաղադրությունը և ստուգեք դրանց լիցքերը։
2. Ո՞ր քվարկներից է կազմված $-1$ լիցքով $\\Omega^-$ բարիոնը, որը բաղկացած է երեք նույնական քվարկից։
3. Անվանեք երեք լիցքավորված լեպտոնները և դրանց նեյտրինոները։ Դրանցից որո՞նք են կայուն։
4. Ո՞րն է Հիգսի բոզոնի դերը Ստանդարտ մոդելում, և ե՞րբ ու որտե՞ղ է այն հայտնաբերվել։
5. Ինչո՞ւ կարող է ցիկլոտրոնն աշխատել հաստատուն հաճախությամբ, և ինչո՞ւ է այն ձախողվում բարձր էներգիաներում։
6. Դեյտրոնը ($m = 3{,}34 \\cdot 10^{-27}$ կգ) շարժվում է $B = 1$ Տ ցիկլոտրոնում։ Գտեք նրա պտույտի պարբերությունը։
7. Ինչո՞ւ են կոլայդերները շատ ավելի օգտակար էներգիա տալիս, քան նույն փնջով անշարժ թիրախին հարվածելը։
8. Նշեք երեք հարց, որոնց Ստանդարտ մոդելը չի պատասխանում։

### Պատասխաններ

1. $uud$ ($+1$), $udd$ ($0$), $u\\bar d$ ($+1$), $d\\bar u$ ($-1$)։
2. $sss$․ $3 \\cdot (-\\frac{1}{3}) = -1$։
3. Էլեկտրոն, մյուոն, տաու․ $\\nu_e$, $\\nu_\\mu$, $\\nu_\\tau$։ Կայուն են միայն էլեկտրոնը և նեյտրինոները։
4. Նրա դաշտը զանգված է տալիս $W$, $Z$ բոզոններին, քվարկներին և լեպտոններին․ գտնվել է 2012 թ․ ՄՀԿ-ում (ՑԵՌՆ)։
5. $2\\pi m / qB$ պարբերությունը կախված չէ արագությունից, քանի դեռ $v \\ll c$․ ռելյատիվիստական արագությունների դեպքում զանգվածն աճում է, և մասնիկները դուրս են ընկնում համաքայլությունից։
6. $T = 2\\pi m / qB = 2\\pi \\cdot 3{,}34 \\cdot 10^{-27} / (1{,}6 \\cdot 10^{-19} \\cdot 1) \\approx 1{,}3 \\cdot 10^{-7}$ վ։
7. Անշարժ թիրախի հետ բախման ժամանակ էներգիայի մեծ մասը պետք է մնա զանգվածների կենտրոնի կինետիկ էներգիա․ ճակատային բախումների ժամանակ լրիվ իմպուլսը զրո է, և ամբողջ էներգիան կարող է նոր մասնիկներ ստեղծել։
8. Գրավիտացիա, մութ նյութ և մութ էներգիա, նյութ-հականյութ անհամաչափություն, սերունդների թիվը, զանգվածների արժեքների ծագումը, նեյտրինոների զանգվածները։`,
        ru: `## Кварки

В 1964 г. Гелл-Манн и Цвейг показали, что сотни адронов можно построить из нескольких **кварков** — частиц с дробным электрическим зарядом. Сегодня известно шесть, в трёх **поколениях**:

| Поколение | Кварк | Заряд | Масса (прибл.) |
|---|---|---|---|
| 1 | верхний $u$ | $+\\frac{2}{3}e$ | $2$ МэВ |
| 1 | нижний $d$ | $-\\frac{1}{3}e$ | $5$ МэВ |
| 2 | очарованный $c$ | $+\\frac{2}{3}e$ | $1{,}3$ ГэВ |
| 2 | странный $s$ | $-\\frac{1}{3}e$ | $95$ МэВ |
| 3 | истинный $t$ | $+\\frac{2}{3}e$ | $173$ ГэВ |
| 3 | прелестный $b$ | $-\\frac{1}{3}e$ | $4{,}2$ ГэВ |

Каждый кварк несёт ещё один из трёх **цветовых зарядов**, и у каждого есть антикварк. Кварки никогда не наблюдаются свободными (**конфайнмент**); они образуют два вида **адронов**:

> - **Барионы**: три кварка. Протон $= uud$ (заряд $\\frac{2}{3} + \\frac{2}{3} - \\frac{1}{3} = 1$), нейтрон $= udd$ (заряд $0$), лямбда $= uds$.
> - **Мезоны**: кварк и антикварк. $\\pi^+ = u\\bar d$, $\\pi^- = d\\bar u$, $\\pi^0 = (u\\bar u - d\\bar d)/\\sqrt{2}$, $K^+ = u\\bar s$.

Обычному веществу нужны лишь $u$, $d$ и электрон; более тяжёлые поколения появляются в космических лучах и ускорителях и быстро распадаются в первое.

## Лептоны

**Лептоны** не чувствуют сильной силы. Их шесть, снова в трёх поколениях: электрон $e^-$, мюон $\\mu^-$ и тау $\\tau^-$ (заряд $-e$, массы $0{,}511$ МэВ, $106$ МэВ, $1777$ МэВ) и три их **нейтрино** $\\nu_e$, $\\nu_\\mu$, $\\nu_\\tau$ (нейтральные, массы крошечные, но не нулевые, как показали нейтринные осцилляции в 1998 г.). У каждого есть античастица. Число лептонов минус число антилептонов сохраняется в любой реакции, поэтому бета-распад даёт вместе с электроном антинейтрино.

## Стандартная модель

> **Стандартная модель** (завершена в 1970-х) описывает все известные частицы и три из четырёх взаимодействий: 12 частиц вещества (6 кварков, 6 лептонов, все со спином $\\frac{1}{2}$, **фермионы**), переносчики сил (фотон, 8 глюонов, $W^\\pm$, $Z^0$, все со спином 1, **бозоны**) и **бозон Хиггса** (спин 0), поле которого даёт массы $W$, $Z$, кваркам и лептонам.

Бозон Хиггса, предсказанный в 1964 г., найден на Большом адронном коллайдере (БАК) в 2012 г. с массой $125$ ГэВ. Стандартная модель прошла все точные проверки, но оставляет большие вопросы: она не включает гравитацию; не объясняет **тёмную материю** и **тёмную энергию**, составляющие $95\\%$ Вселенной; не объясняет, почему вещества больше, чем антивещества, почему ровно три поколения, и значения масс.

## Ускорители

Только ускорители дают энергии, нужные для рождения тяжёлых частиц ($E = mc^2$) и зондирования малых расстояний ($\\lambda = h/p$).

| Тип | Принцип | Пример |
|---|---|---|
| Линейный ускоритель | частицы проходят ряд электродов с переменным напряжением | SLAC, $3$ км, электроны $50$ ГэВ |
| Циклотрон (Лоуренс, 1931) | магнитное поле сворачивает путь в спираль; переменное напряжение между двумя D-образными электродами подталкивает каждые полоборота | медицинские циклотроны, $10$–$250$ МэВ |
| Синхротрон | кольцо постоянного радиуса; магнитное поле растёт вместе с энергией | Дубна, Фермилаб, БАК |
| Коллайдер | два пучка, летящие навстречу, сталкиваются лоб в лоб, так что вся энергия доступна для новых частиц | БАК: кольцо $27$ км, $6{,}8$ ТэВ на протон, столкновения $13{,}6$ ТэВ |

В циклотроне период обращения $T = \\dfrac{2\\pi m}{qB}$ не зависит от скорости (при $v \\ll c$), поэтому работает постоянная частота; при релятивистских скоростях масса растёт, и нужен синхротрон, который повышает $B$ в такт. Заряженные частицы, движущиеся по окружности, излучают (**синхротронное излучение**), что ограничивает кольцевые электронные машины, но само по себе служит ценным источником рентгеновских лучей для материаловедения и биологии.

## Разобранные примеры

**Пример 1.** Заряд бариона $uus$ и мезона $d\\bar s$.

$uus$: $\\frac{2}{3} + \\frac{2}{3} - \\frac{1}{3} = +1$ (это $\\Sigma^+$). $d\\bar s$: $-\\frac{1}{3} + \\frac{1}{3} = 0$ (это $K^0$).

**Пример 2.** Выразите бета-распад через кварки.

$n(udd) \\to p(uud) + e^- + \\bar\\nu_e$: один $d$-кварк превращается в $u$-кварк, $d \\to u + W^-$, $W^- \\to e^- + \\bar\\nu_e$.

**Пример 3.** Почему нет барионов с зарядом $+3$?

Максимум — три $u$-кварка: $uuu$ имеет заряд $+2$ ($\\Delta^{++}$). С тремя кварками не более $+\\frac{2}{3}$ каждый заряд $+3$ невозможен.

**Пример 4.** Радиус орбиты протона с энергией $10$ МэВ в циклотроне с $B = 1{,}5$ Тл.

$v = \\sqrt{2E/m} = \\sqrt{2 \\cdot 1{,}6 \\cdot 10^{-12} / 1{,}67 \\cdot 10^{-27}} = 4{,}4 \\cdot 10^7$ м/с; $r = \\dfrac{mv}{qB} = \\dfrac{1{,}67 \\cdot 10^{-27} \\cdot 4{,}4 \\cdot 10^7}{1{,}6 \\cdot 10^{-19} \\cdot 1{,}5} \\approx 0{,}31$ м.

**Пример 5.** Частота переменного напряжения этого циклотрона.

$f = \\dfrac{qB}{2\\pi m} = \\dfrac{1{,}6 \\cdot 10^{-19} \\cdot 1{,}5}{2\\pi \\cdot 1{,}67 \\cdot 10^{-27}} \\approx 2{,}3 \\cdot 10^7$ Гц $= 23$ МГц.

**Пример 6.** Магнитное поле, нужное, чтобы удержать протоны $6{,}8$ ТэВ в кольце радиусом $4{,}3$ км (БАК).

Для ультрарелятивистских частиц $p \\approx E/c$: $B = \\dfrac{p}{qr} = \\dfrac{6{,}8 \\cdot 10^{12} \\cdot 1{,}6 \\cdot 10^{-19} / 3 \\cdot 10^8}{1{,}6 \\cdot 10^{-19} \\cdot 4300} \\approx 5{,}3$ Тл в среднем; сверхпроводящие магниты на поворотных участках дают $8{,}3$ Тл.

**Пример 7.** Сколько бозонов Хиггса (125 ГэВ) можно было бы в принципе создать из энергии одного столкновения на БАК ($13{,}6$ ТэВ)?

$13\\,600 / 125 \\approx 108$; на деле почти всю энергию уносят осколки, и Хиггс появляется примерно в одном столкновении из миллиарда.

**Пример 8.** Длина волны де Бройля протона с энергией $7$ ТэВ.

$\\lambda = \\dfrac{hc}{pc} \\approx \\dfrac{1{,}24 \\cdot 10^{-6}}{7 \\cdot 10^{12}}$ м $\\approx 1{,}8 \\cdot 10^{-19}$ м ($hc = 1{,}24 \\cdot 10^{-6}$ эВ·м), в десять тысяч раз меньше протона; так БАК «видит» кварки.

## Упражнения

1. Запишите кварковый состав протона, нейтрона, $\\pi^+$ и $\\pi^-$ и проверьте их заряды.
2. Из каких кварков состоит барион $\\Omega^-$ с зарядом $-1$, построенный из трёх одинаковых кварков?
3. Назовите три заряженных лептона и их нейтрино. Какие из них стабильны?
4. Какова роль бозона Хиггса в Стандартной модели и когда и где он был открыт?
5. Почему циклотрон может работать на постоянной частоте и почему он не годится при высоких энергиях?
6. Дейтрон ($m = 3{,}34 \\cdot 10^{-27}$ кг) движется в циклотроне с $B = 1$ Тл. Найдите его период обращения.
7. Почему коллайдеры дают гораздо больше полезной энергии, чем удар тем же пучком по неподвижной мишени?
8. Назовите три вопроса, на которые Стандартная модель не отвечает.

### Ответы

1. $uud$ ($+1$), $udd$ ($0$), $u\\bar d$ ($+1$), $d\\bar u$ ($-1$).
2. $sss$: $3 \\cdot (-\\frac{1}{3}) = -1$.
3. Электрон, мюон, тау; $\\nu_e$, $\\nu_\\mu$, $\\nu_\\tau$. Стабильны только электрон и нейтрино.
4. Его поле даёт массу $W$-, $Z$-бозонам, кваркам и лептонам; найден в 2012 г. на БАК (ЦЕРН).
5. Период $2\\pi m / qB$ не зависит от скорости, пока $v \\ll c$; при релятивистских скоростях масса растёт, и частицы выпадают из такта.
6. $T = 2\\pi m / qB = 2\\pi \\cdot 3{,}34 \\cdot 10^{-27} / (1{,}6 \\cdot 10^{-19} \\cdot 1) \\approx 1{,}3 \\cdot 10^{-7}$ с.
7. При ударе по неподвижной мишени большая часть энергии должна остаться кинетической энергией центра масс; при лобовых столкновениях полный импульс равен нулю, и вся энергия может пойти на рождение новых частиц.
8. Гравитация, тёмная материя и тёмная энергия, асимметрия вещества и антивещества, число поколений, происхождение значений масс, массы нейтрино.`,
      },
      [
        q(t("The proton consists of the quarks…", "Պրոտոնը բաղկացած է … քվարկներից։", "Протон состоит из кварков…"), [t("uud", "uud", "uud"), t("udd", "udd", "udd"), t("uds", "uds", "uds")], 0),
        q(t("The electric charge of the up quark is…", "Վերին քվարկի էլեկտրական լիցքն է…", "Электрический заряд верхнего кварка равен…"), [t("+2/3 e", "+2/3 e", "+2/3 e"), t("−1/3 e", "−1/3 e", "−1/3 e"), t("+1 e", "+1 e", "+1 e")], 0),
        q(t("A meson is made of…", "Մեզոնը կազմված է…", "Мезон состоит из…"), [t("a quark and an antiquark", "քվարկից և հակաքվարկից", "кварка и антикварка"), t("three quarks", "երեք քվարկից", "трёх кварков"), t("two leptons", "երկու լեպտոնից", "двух лептонов")], 0),
        q(t("Leptons do not take part in the…", "Լեպտոնները չեն մասնակցում…", "Лептоны не участвуют в…"), [t("strong interaction", "ուժեղ փոխազդեցությանը", "сильном взаимодействии"), t("weak interaction", "թույլ փոխազդեցությանը", "слабом взаимодействии"), t("gravitational interaction", "գրավիտացիոն փոխազդեցությանը", "гравитационном взаимодействии")], 0),
        q(t("The Higgs boson was discovered in 2012 at…", "Հիգսի բոզոնը 2012 թ․ հայտնաբերվել է…", "Бозон Хиггса открыт в 2012 г. на…"), [t("the Large Hadron Collider", "Մեծ հադրոնային կոլայդերում", "Большом адронном коллайдере"), t("the Byurakan observatory", "Բյուրականի աստղադիտարանում", "Бюраканской обсерватории"), t("the Armenian NPP", "Հայկական ԱԷԿ-ում", "Армянской АЭС")], 0),
        q(t("In a cyclotron the particles are bent into a spiral by…", "Ցիկլոտրոնում մասնիկները պարույրով են շարժվում…", "В циклотроне частицы движутся по спирали благодаря…"), [t("a magnetic field", "մագնիսական դաշտի շնորհիվ", "магнитному полю"), t("gravity", "ձգողականության շնորհիվ", "гравитации"), t("a vacuum", "վակուումի շնորհիվ", "вакууму")], 0),
      ],
    ),
  ],
};
