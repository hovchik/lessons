import { t, unit, type CourseSeed } from "../../types";
import { physicsGrade7 } from "./grade-7";
import { physicsGrade8 } from "./grade-8";
import { physicsGrade9 } from "./grade-9";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const physics: CourseSeed[] = [
  physicsGrade7,
  physicsGrade8,
  physicsGrade9,
  {
    subject: "physics",
    grade: 10,
    title: t("Physics · Grade 10", "Ֆիզիկա · 10-րդ դասարան", "Физика · 10 класс"),
    description: t("Mechanics in depth, molecular physics and thermodynamics, electrostatics and direct current.", "Մեխանիկա խորությամբ, մոլեկուլային ֆիզիկա և թերմոդինամիկա, էլեկտրաստատիկա և հաստատուն հոսանք։", "Углублённая механика, молекулярная физика и термодинамика, электростатика и постоянный ток."),
    curriculumNotes: notes(
      ["Armenia grade 10 (2–4 h/week by stream): kinematics and dynamics with vectors, statics, conservation laws, molecular-kinetic theory, ideal gas laws, thermodynamics, electrostatics, direct current, current in different media.", "Հայաստան, 10-րդ դասարան (2–4 ժ/շաբ. հոսքից կախված)՝ կինեմատիկա և դինամիկա վեկտորներով, ստատիկա, պահպանման օրենքներ, մոլեկուլային-կինետիկ տեսություն, իդեալական գազի օրենքներ, թերմոդինամիկա, էլեկտրաստատիկա, հաստատուն հոսանք, հոսանքը տարբեր միջավայրերում։", "Армения, 10 класс (2–4 ч/нед. по потоку): кинематика и динамика с векторами, статика, законы сохранения, молекулярно-кинетическая теория, газовые законы, термодинамика, электростатика, постоянный ток, ток в различных средах."],
      ["Russia grade 10 (ФГОС СОО, base 2 h / advanced 5 h; Мякишев textbook tradition): mechanics, molecular physics and thermodynamics, electrodynamics (electrostatics, DC, current in media).", "Ռուսաստան, 10-րդ դասարան (ФГОС СОО, հիմնական 2 ժ / խորացված 5 ժ, Մյակիշևի դասագրքեր)՝ մեխանիկա, մոլեկուլային ֆիզիկա և թերմոդինամիկա, էլեկտրադինամիկա (էլեկտրաստատիկա, հաստատուն հոսանք, հոսանքը միջավայրերում)։", "Россия, 10 класс (ФГОС СОО, база 2 ч / углублённый 5 ч; учебники Мякишева): механика, молекулярная физика и термодинамика, электродинамика (электростатика, постоянный ток, ток в средах)."],
    ),
    hoursPerWeek: { armenia: 3, russia: 2 },
    units: [
      unit(t("Kinematics and dynamics", "Կինեմատիկա և դինամիկա", "Кинематика и динамика"), t("Vector description of motion, projectile motion, Newton's laws applied, forces in nature, statics.", "Շարժման վեկտորային նկարագրություն, նետված մարմնի շարժում, Նյուտոնի օրենքների կիրառում, ուժերը բնության մեջ, ստատիկա։", "Векторное описание движения, движение брошенного тела, применение законов Ньютона, силы в природе, статика."), [
        ["vector-kinematics", "Vectors in kinematics; projection method", "Վեկտորները կինեմատիկայում, պրոյեկցիաների եղանակ", "Векторы в кинематике; метод проекций"],
        ["projectile-motion", "Motion of a body thrown at an angle", "Անկյան տակ նետված մարմնի շարժում", "Движение тела, брошенного под углом к горизонту"],
        ["newtons-laws-problems", "Newton's laws: solving problems", "Նյուտոնի օրենքներ․ խնդիրների լուծում", "Законы Ньютона: решение задач"],
        ["forces-in-nature", "Gravitation, elasticity, friction in depth", "Ձգողություն, առաձգականություն, շփում խորությամբ", "Силы тяготения, упругости, трения углублённо"],
        ["statics", "Statics: equilibrium, moment of force", "Ստատիկա․ հավասարակշռություն, ուժի մոմենտ", "Статика: равновесие, момент силы"],
        ["conservation-laws-problems", "Momentum and energy conservation: problems", "Իմպուլսի և էներգիայի պահպանում․ խնդիրներ", "Законы сохранения импульса и энергии: задачи"],
      ]),
      unit(t("Molecular physics", "Մոլեկուլային ֆիզիկա", "Молекулярная физика"), t("Molecular-kinetic theory, ideal gas, temperature, gas laws, saturated vapour, liquids and solids.", "Մոլեկուլային-կինետիկ տեսություն, իդեալական գազ, ջերմաստիճան, գազի օրենքներ, հագեցած գոլորշի, հեղուկներ և պինդ մարմիններ։", "Молекулярно-кинетическая теория, идеальный газ, температура, газовые законы, насыщенный пар, жидкости и твёрдые тела."), [
        ["mkt-basics", "Basic statements of MKT; mass and size of molecules", "ՄԿՍ հիմնական դրույթներ, մոլեկուլների զանգված և չափ", "Основные положения МКТ; масса и размеры молекул"],
        ["ideal-gas-equation", "Ideal gas; basic MKT equation; temperature", "Իդեալական գազ, ՄԿՏ հիմնական հավասարում, ջերմաստիճան", "Идеальный газ; основное уравнение МКТ; температура"],
        ["gas-laws", "Equation of state; isoprocesses", "Վիճակի հավասարում, իզոպրոցեսներ", "Уравнение состояния; изопроцессы"],
        ["saturated-vapour-humidity", "Saturated vapour; boiling; humidity", "Հագեցած գոլորշի, եռում, խոնավություն", "Насыщенный пар; кипение; влажность"],
        ["liquids-solids", "Surface tension; crystalline and amorphous bodies", "Մակերևութային լարվածություն, բյուրեղային և ամորֆ մարմիններ", "Поверхностное натяжение; кристаллические и аморфные тела"],
      ]),
      unit(t("Thermodynamics", "Թերմոդինամիկա", "Термодинамика"), t("Internal energy, work, first law, adiabatic process, second law, heat engines.", "Ներքին էներգիա, աշխատանք, առաջին օրենք, ադիաբատ պրոցես, երկրորդ օրենք, ջերմային շարժիչներ։", "Внутренняя энергия, работа, первый закон, адиабатный процесс, второй закон, тепловые двигатели."), [
        ["internal-energy-work", "Internal energy of an ideal gas; work in thermodynamics", "Իդեալական գազի ներքին էներգիա, աշխատանքը թերմոդինամիկայում", "Внутренняя энергия идеального газа; работа в термодинамике"],
        ["first-law", "First law of thermodynamics; applications to isoprocesses", "Թերմոդինամիկայի առաջին օրենք, իզոպրոցեսներ", "Первый закон термодинамики; применение к изопроцессам"],
        ["second-law-engines", "Irreversibility; second law; Carnot efficiency", "Անդարձելիություն, երկրորդ օրենք, Կարնոյի ՕԳԳ", "Необратимость; второй закон; КПД Карно"],
      ]),
      unit(t("Electrostatics", "Էլեկտրաստատիկա", "Электростатика"), t("Coulomb's law, electric field strength, potential, capacitors.", "Կուլոնի օրենք, էլեկտրական դաշտի լարվածություն, պոտենցիալ, կոնդենսատորներ։", "Закон Кулона, напряжённость электрического поля, потенциал, конденсаторы."), [
        ["coulombs-law", "Charge conservation; Coulomb's law", "Լիցքի պահպանում, Կուլոնի օրենք", "Закон сохранения заряда; закон Кулона"],
        ["field-strength", "Electric field strength; field lines", "Էլեկտրական դաշտի լարվածություն, դաշտի գծեր", "Напряжённость электрического поля; силовые линии"],
        ["conductors-dielectrics", "Conductors and dielectrics in a field", "Հաղորդիչներ և դիէլեկտրիկներ դաշտում", "Проводники и диэлектрики в электрическом поле"],
        ["potential", "Potential and potential difference", "Պոտենցիալ և պոտենցիալների տարբերություն", "Потенциал и разность потенциалов"],
        ["capacitors", "Capacitance; capacitors; energy of a charged capacitor", "Ունակություն, կոնդենսատորներ, լիցքավորված կոնդենսատորի էներգիա", "Электроёмкость; конденсаторы; энергия заряженного конденсатора"],
      ]),
      unit(t("Direct current", "Հաստատուն հոսանք", "Законы постоянного тока"), t("Ohm's law for a complete circuit, EMF, Kirchhoff's rules basics, current in metals, electrolytes, gases, semiconductors.", "Օհմի օրենք լրիվ շղթայի համար, ԷլՇՈւ, Կիրխհոֆի կանոնների հիմունքներ, հոսանքը մետաղներում, էլեկտրոլիտներում, գազերում, կիսահաղորդիչներում։", "Закон Ома для полной цепи, ЭДС, основы правил Кирхгофа, ток в металлах, электролитах, газах, полупроводниках."), [
        ["ohm-full-circuit", "EMF; Ohm's law for a complete circuit", "ԷլՇՈւ, Օհմի օրենք լրիվ շղթայի համար", "ЭДС; закон Ома для полной цепи"],
        ["circuits-analysis", "Analysing circuits; measuring instruments", "Շղթաների վերլուծություն, չափիչ սարքեր", "Расчёт цепей; измерительные приборы"],
        ["current-in-metals", "Current in metals; superconductivity", "Հոսանքը մետաղներում, գերհաղորդականություն", "Электрический ток в металлах; сверхпроводимость"],
        ["semiconductors", "Semiconductors; diode and transistor", "Կիսահաղորդիչներ, դիոդ և տրանզիստոր", "Полупроводники; диод и транзистор"],
        ["current-electrolytes-gases", "Current in electrolytes, gases and vacuum", "Հոսանքը էլեկտրոլիտներում, գազերում և վակուումում", "Ток в электролитах, газах и вакууме"],
      ]),
    ],
  },
  {
    subject: "physics",
    grade: 11,
    title: t("Physics · Grade 11", "Ֆիզիկա · 11-րդ դասարան", "Физика · 11 класс"),
    description: t("Magnetism and induction, oscillations and waves (mechanical and electromagnetic), optics, special relativity, quantum physics.", "Մագնիսականություն և ինդուկցիա, տատանումներ և ալիքներ (մեխանիկական և էլեկտրամագնիսական), օպտիկա, հարաբերականության հատուկ տեսություն, քվանտային ֆիզիկա։", "Магнетизм и индукция, колебания и волны (механические и электромагнитные), оптика, специальная теория относительности, квантовая физика."),
    curriculumNotes: notes(
      ["Armenia grade 11 (2–4 h/week): magnetic field and electromagnetic induction, electromagnetic oscillations and AC, electromagnetic waves and radio, geometric and wave optics, elements of special relativity, light quanta and photoelectric effect, atomic physics.", "Հայաստան, 11-րդ դասարան (2–4 ժ/շաբ.)՝ մագնիսական դաշտ և էլեկտրամագնիսական ինդուկցիա, էլեկտրամագնիսական տատանումներ և փոփոխական հոսանք, էլեկտրամագնիսական ալիքներ և ռադիո, երկրաչափական և ալիքային օպտիկա, հարաբերականության հատուկ տեսության տարրեր, լույսի քվանտներ և ֆոտոէֆեկտ, ատոմի ֆիզիկա։", "Армения, 11 класс (2–4 ч/нед.): магнитное поле и электромагнитная индукция, электромагнитные колебания и переменный ток, электромагнитные волны и радио, геометрическая и волновая оптика, элементы СТО, кванты света и фотоэффект, физика атома."],
      ["Russia grade 11 (ФГОС СОО, final year): electrodynamics continued (magnetic field, induction), oscillations and waves, optics, relativity, quantum physics, atomic and nuclear physics, astronomy elements. Ends with ЕГЭ.", "Ռուսաստան, 11-րդ դասարան (ФГОС СОО, ավարտական)՝ էլեկտրադինամիկայի շարունակություն (մագնիսական դաշտ, ինդուկցիա), տատանումներ և ալիքներ, օպտիկա, հարաբերականություն, քվանտային ֆիզիկա, ատոմի և միջուկի ֆիզիկա, աստղագիտություն։ Ավարտվում է ЕГЭ-ով։", "Россия, 11 класс (ФГОС СОО, выпускной): продолжение электродинамики (магнитное поле, индукция), колебания и волны, оптика, СТО, квантовая физика, физика атома и ядра, элементы астрономии. Завершается ЕГЭ."],
    ),
    hoursPerWeek: { armenia: 3, russia: 2 },
    units: [
      unit(t("Magnetic field and induction", "Մագնիսական դաշտ և ինդուկցիա", "Магнитное поле и электромагнитная индукция"), t("Magnetic induction vector, Ampère and Lorentz forces, Faraday's law, self-induction, magnetic field energy.", "Մագնիսական ինդուկցիայի վեկտոր, Ամպերի և Լորենցի ուժեր, Ֆարադեյի օրենք, ինքնաինդուկցիա, մագնիսական դաշտի էներգիա։", "Вектор магнитной индукции, силы Ампера и Лоренца, закон Фарадея, самоиндукция, энергия магнитного поля."), [
        ["magnetic-induction-vector", "Magnetic induction vector; Ampère force", "Մագնիսական ինդուկցիայի վեկտոր, Ամպերի ուժ", "Вектор магнитной индукции; сила Ампера"],
        ["lorentz-force", "Lorentz force; charged particles in fields", "Լորենցի ուժ, լիցքավորված մասնիկները դաշտերում", "Сила Лоренца; движение заряженных частиц в полях"],
        ["faraday-law", "Magnetic flux; Faraday's law of induction", "Մագնիսական հոսք, Ֆարադեյի ինդուկցիայի օրենք", "Магнитный поток; закон электромагнитной индукции"],
        ["self-induction", "Self-induction; inductance; field energy", "Ինքնաինդուկցիա, ինդուկտիվություն, դաշտի էներգիա", "Самоиндукция; индуктивность; энергия магнитного поля"],
      ]),
      unit(t("Oscillations and alternating current", "Տատանումներ և փոփոխական հոսանք", "Колебания и переменный ток"), t("Harmonic oscillations, pendulums, oscillating circuit, AC, resonance, transformer, power transmission.", "Հարմոնիկ տատանումներ, ճոճանակներ, տատանողական կոնտուր, փոփոխական հոսանք, ռեզոնանս, տրանսֆորմատոր, էներգիայի հաղորդում։", "Гармонические колебания, маятники, колебательный контур, переменный ток, резонанс, трансформатор, передача энергии."), [
        ["harmonic-oscillations", "Harmonic oscillations: equation, energy", "Հարմոնիկ տատանումներ․ հավասարում, էներգիա", "Гармонические колебания: уравнение, энергия"],
        ["oscillating-circuit", "Oscillating circuit; Thomson's formula", "Տատանողական կոնտուր, Թոմսոնի բանաձև", "Колебательный контур; формула Томсона"],
        ["ac-circuit-elements", "AC; resistor, capacitor, inductor in AC circuit", "Փոփոխական հոսանք, ռեզիստոր, կոնդենսատոր, կոճ", "Переменный ток; резистор, конденсатор, катушка в цепи"],
        ["ac-resonance-power", "Resonance; power in AC; transformer; power lines", "Ռեզոնանս, հզորություն, տրանսֆորմատոր, հոսանքագծեր", "Резонанс; мощность переменного тока; трансформатор; ЛЭП"],
      ]),
      unit(t("Waves", "Ալիքներ", "Механические и электромагнитные волны"), t("Wave properties, sound, electromagnetic waves, radio, interference and diffraction.", "Ալիքների հատկություններ, ձայն, էլեկտրամագնիսական ալիքներ, ռադիո, ինտերֆերենց և դիֆրակցիա։", "Свойства волн, звук, электромагнитные волны, радио, интерференция и дифракция."), [
        ["wave-equation", "Wave equation; speed, wavelength, frequency", "Ալիքի հավասարում, արագություն, երկարություն, հաճախություն", "Уравнение волны; скорость, длина волны, частота"],
        ["em-waves-maxwell", "Electromagnetic waves; Maxwell and Hertz", "Էլեկտրամագնիսական ալիքներ, Մաքսվել և Հերց", "Электромагнитные волны; Максвелл и Герц"],
        ["radio", "Principles of radio; modulation; radar; mobile communication", "Ռադիոյի սկզբունքներ, մոդուլյացիա, ռադար, շարժական կապ", "Принципы радиосвязи; модуляция; радиолокация; мобильная связь"],
      ]),
      unit(t("Optics", "Օպտիկա", "Оптика"), t("Reflection and refraction laws, total internal reflection, lenses and optical instruments, dispersion, interference, diffraction, polarisation.", "Անդրադարձման և բեկման օրենքներ, լրիվ ներքին անդրադարձում, ոսպնյակներ և օպտիկական սարքեր, դիսպերսիա, ինտերֆերենց, դիֆրակցիա, բևեռացում։", "Законы отражения и преломления, полное внутреннее отражение, линзы и оптические приборы, дисперсия, интерференция, дифракция, поляризация."), [
        ["light-speed-reflection-refraction", "Speed of light; laws of reflection and refraction", "Լույսի արագություն, անդրադարձման և բեկման օրենքներ", "Скорость света; законы отражения и преломления"],
        ["total-internal-reflection", "Total internal reflection; optical fibre", "Լրիվ ներքին անդրադարձում, օպտիկամանրաթել", "Полное внутреннее отражение; световоды"],
        ["thin-lens-formula", "Thin lens formula; magnification; instruments", "Բարակ ոսպնյակի բանաձև, խոշորացում, սարքեր", "Формула тонкой линзы; увеличение; оптические приборы"],
        ["dispersion-interference", "Dispersion; interference of light", "Դիսպերսիա, լույսի ինտերֆերենց", "Дисперсия; интерференция света"],
        ["diffraction-polarisation", "Diffraction; diffraction grating; polarisation", "Դիֆրակցիա, դիֆրակցիոն ցանց, բևեռացում", "Дифракция; дифракционная решётка; поляризация"],
      ]),
      unit(t("Relativity and quantum physics", "Հարաբերականություն և քվանտային ֆիզիկա", "СТО и квантовая физика"), t("Postulates of special relativity, mass–energy, photoelectric effect, photons, Bohr's atom, lasers.", "Հարաբերականության հատուկ տեսության պոստուլատներ, զանգված–էներգիա, ֆոտոէֆեկտ, ֆոտոններ, Բորի ատոմ, լազերներ։", "Постулаты СТО, масса и энергия, фотоэффект, фотоны, атом Бора, лазеры."), [
        ["sto-postulates", "Postulates of special relativity; relativity of time and length", "ՀՏ պոստուլատներ, ժամանակի և երկարության հարաբերականություն", "Постулаты СТО; относительность времени и длины"],
        ["mass-energy", "Relativistic momentum and energy; E = mc²", "Ռելյատիվիստական իմպուլս և էներգիա, E = mc²", "Релятивистские импульс и энергия; E = mc²"],
        ["photoelectric-effect", "Photoelectric effect; Einstein's equation", "Ֆոտոէֆեկտ, Էյնշտեյնի հավասարում", "Фотоэффект; уравнение Эйнштейна"],
        ["photons", "Photons; pressure of light; wave–particle duality", "Ֆոտոններ, լույսի ճնշում, ալիք–մասնիկ երկվություն", "Фотоны; давление света; корпускулярно-волновой дуализм"],
        ["bohr-atom-lasers", "Bohr's postulates; spectra; lasers", "Բորի պոստուլատներ, սպեկտրներ, լազերներ", "Постулаты Бора; спектры; лазеры"],
      ]),
    ],
  },
  {
    subject: "physics",
    grade: 12,
    title: t("Physics · Grade 12", "Ֆիզիկա · 12-րդ դասարան", "Физика · 12 класс"),
    description: t("Final Armenian year: nuclear and particle physics, astrophysics and cosmology, modern technology, and systematic review for the unified exam.", "Հայաստանի ավարտական տարի՝ միջուկի և տարրական մասնիկների ֆիզիկա, աստղաֆիզիկա և կոսմոլոգիա, ժամանակակից տեխնոլոգիաներ, միասնական քննության համակարգված ամփոփում։", "Выпускной год в Армении: физика ядра и элементарных частиц, астрофизика и космология, современные технологии, системное повторение к единому экзамену."),
    curriculumNotes: notes(
      ["Armenia grade 12 (2–4 h/week): atomic nucleus, radioactivity and nuclear reactions, nuclear energy (incl. the Armenian NPP context), elementary particles, astrophysics (Sun, stars, galaxies, cosmology), modern technologies, physics in Armenia (Byurakan observatory, Alikhanian institute), full review for the unified exam.", "Հայաստան, 12-րդ դասարան (2–4 ժ/շաբ.)՝ ատոմի միջուկ, ռադիոակտիվություն և միջուկային ռեակցիաներ, միջուկային էներգետիկա (այդ թվում Հայկական ԱԷԿ-ի համատեքստը), տարրական մասնիկներ, աստղաֆիզիկա (Արև, աստղեր, գալակտիկաներ, կոսմոլոգիա), ժամանակակից տեխնոլոգիաներ, ֆիզիկան Հայաստանում (Բյուրականի աստղադիտարան, Ալիխանյանի ինստիտուտ), միասնական քննության ամփոփում։", "Армения, 12 класс (2–4 ч/нед.): атомное ядро, радиоактивность и ядерные реакции, ядерная энергетика (включая контекст Армянской АЭС), элементарные частицы, астрофизика (Солнце, звёзды, галактики, космология), современные технологии, физика в Армении (Бюраканская обсерватория, институт Алиханяна), полное повторение к единому экзамену."],
      ["No Russian grade 12: this material corresponds to the nuclear/particle/astronomy chapters at the end of Russian grade 11 and ЕГЭ review.", "Ռուսաստանում 12-րդ դասարան չկա․ նյութը համապատասխանում է ռուսական 11-րդ դասարանի միջուկային/մասնիկների/աստղագիտության գլուխներին և ЕГЭ ամփոփմանը։", "В России 12 класса нет: материал соответствует главам о ядре, частицах и астрономии в конце 11 класса и повторению к ЕГЭ."],
    ),
    hoursPerWeek: { armenia: 3, russia: null },
    units: [
      unit(t("Nuclear physics", "Միջուկային ֆիզիկա", "Физика атомного ядра"), t("Structure of the nucleus, binding energy, radioactive decay law, nuclear reactions, fission and fusion, dosimetry.", "Միջուկի կառուցվածք, կապի էներգիա, ռադիոակտիվ տրոհման օրենք, միջուկային ռեակցիաներ, տրոհում և սինթեզ, դոզիմետրիա։", "Строение ядра, энергия связи, закон радиоактивного распада, ядерные реакции, деление и синтез, дозиметрия."), [
        ["binding-energy", "Nuclear forces; mass defect; binding energy", "Միջուկային ուժեր, զանգվածի պակասորդ, կապի էներգիա", "Ядерные силы; дефект массы; энергия связи"],
        ["decay-law", "Law of radioactive decay; half-life", "Ռադիոակտիվ տրոհման օրենք, կիսատրոհման պարբերություն", "Закон радиоактивного распада; период полураспада"],
        ["nuclear-reactions-12", "Nuclear reactions; energy yield", "Միջուկային ռեակցիաներ, էներգիայի ելք", "Ядерные реакции; энергетический выход"],
        ["fission-reactors", "Fission; nuclear reactors; Armenian NPP", "Տրոհում, միջուկային ռեակտորներ, Հայկական ԱԷԿ", "Деление ядер; ядерные реакторы; Армянская АЭС"],
        ["fusion", "Thermonuclear fusion; stars and ITER", "Թերմոմիջուկային սինթեզ, աստղեր և ITER", "Термоядерный синтез; звёзды и ITER"],
        ["dosimetry-12", "Biological effect of radiation; dosimetry", "Ճառագայթման կենսաբանական ազդեցություն, դոզիմետրիա", "Биологическое действие излучения; дозиметрия"],
      ]),
      unit(t("Elementary particles", "Տարրական մասնիկներ", "Элементарные частицы"), t("Discovery of particles, antiparticles, fundamental interactions, quarks and the Standard Model.", "Մասնիկների հայտնաբերում, հակամասնիկներ, հիմնարար փոխազդեցություններ, քվարկներ և Ստանդարտ մոդել։", "Открытие частиц, античастицы, фундаментальные взаимодействия, кварки и Стандартная модель."), [
        ["particles-discovery", "Three stages of particle physics; antiparticles", "Մասնիկների ֆիզիկայի երեք փուլ, հակամասնիկներ", "Три этапа развития физики частиц; античастицы"],
        ["fundamental-interactions", "Four fundamental interactions", "Չորս հիմնարար փոխազդեցություն", "Четыре фундаментальных взаимодействия"],
        ["quarks-standard-model", "Quarks, leptons, the Standard Model; accelerators", "Քվարկներ, լեպտոններ, Ստանդարտ մոդել, արագացուցիչներ", "Кварки, лептоны, Стандартная модель; ускорители"],
      ]),
      unit(t("Astrophysics and cosmology", "Աստղաֆիզիկա և կոսմոլոգիա", "Астрофизика и космология"), t("Solar system, the Sun, stars and their evolution, galaxies, expanding Universe, Big Bang.", "Արեգակնային համակարգ, Արև, աստղեր և դրանց էվոլյուցիա, գալակտիկաներ, ընդարձակվող Տիեզերք, Մեծ պայթյուն։", "Солнечная система, Солнце, звёзды и их эволюция, галактики, расширяющаяся Вселенная, Большой взрыв."), [
        ["solar-system", "Solar system; Kepler's laws", "Արեգակնային համակարգ, Կեպլերի օրենքներ", "Солнечная система; законы Кеплера"],
        ["sun-stars", "The Sun; stars: classification and evolution", "Արև, աստղեր․ դասակարգում և էվոլյուցիա", "Солнце; звёзды: классификация и эволюция"],
        ["galaxies-byurakan", "Galaxies; Byurakan observatory and V. Ambartsumian", "Գալակտիկաներ, Բյուրականի աստղադիտարան և Վ․ Համբարձումյան", "Галактики; Бюраканская обсерватория и В. Амбарцумян"],
        ["cosmology", "Expanding Universe; Big Bang; dark matter and energy", "Ընդարձակվող Տիեզերք, Մեծ պայթյուն, մութ նյութ և էներգիա", "Расширяющаяся Вселенная; Большой взрыв; тёмная материя и энергия"],
      ]),
      unit(t("Physics and technology", "Ֆիզիկա և տեխնոլոգիա", "Физика и технологии"), t("Semiconductor electronics, lasers and fibre optics, renewable energy, physics of the modern world.", "Կիսահաղորդչային էլեկտրոնիկա, լազերներ և օպտիկամանրաթել, վերականգնվող էներգիա, ժամանակակից աշխարհի ֆիզիկա։", "Полупроводниковая электроника, лазеры и оптоволокно, возобновляемая энергия, физика современного мира."), [
        ["electronics", "From transistor to microchip", "Տրանզիստորից միկրոսխեմա", "От транзистора к микросхеме"],
        ["renewable-energy", "Renewable energy: solar, wind, hydro in Armenia", "Վերականգնվող էներգիա․ արև, քամի, հիդրո Հայաստանում", "Возобновляемая энергетика: солнце, ветер, гидро в Армении"],
        ["physics-everyday-tech", "Physics in everyday technology: GPS, MRI, smartphones", "Ֆիզիկան ամենօրյա տեխնոլոգիայում․ GPS, ՄՈՌ, սմարթֆոն", "Физика в повседневной технике: GPS, МРТ, смартфоны"],
      ]),
      unit(t("Exam review", "Քննական ամփոփում", "Повторение к экзамену"), t("Systematic review of mechanics, thermodynamics, electrodynamics, optics and quantum physics.", "Մեխանիկայի, թերմոդինամիկայի, էլեկտրադինամիկայի, օպտիկայի և քվանտային ֆիզիկայի համակարգված ամփոփում։", "Системное повторение механики, термодинамики, электродинамики, оптики и квантовой физики."), [
        ["review-mechanics", "Review: mechanics", "Ամփոփում․ մեխանիկա", "Повторение: механика"],
        ["review-thermo", "Review: molecular physics and thermodynamics", "Ամփոփում․ մոլեկուլային ֆիզիկա և թերմոդինամիկա", "Повторение: молекулярная физика и термодинамика"],
        ["review-electrodynamics", "Review: electrodynamics", "Ամփոփում․ էլեկտրադինամիկա", "Повторение: электродинамика"],
        ["review-optics-quantum", "Review: optics and quantum physics", "Ամփոփում․ օպտիկա և քվանտային ֆիզիկա", "Повторение: оптика и квантовая физика"],
        ["physics-mock-exam", "Mock exam", "Փորձնական քննություն", "Пробный экзамен"],
      ]),
    ],
  },
];
