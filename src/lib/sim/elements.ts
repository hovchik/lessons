/**
 * The 118 chemical elements: symbol, names in English, Russian and Armenian, relative atomic mass,
 * family and Pauling electronegativity (blank when not defined). Used by the periodic table,
 * the atom builder and the formula calculator.
 */
export type Family =
  | "alkali" | "alkaline" | "transition" | "post" | "metalloid" | "nonmetal" | "halogen" | "noble" | "lanthanide" | "actinide" | "unknown";

export type Element = {
  z: number;
  sym: string;
  name: { en: string; hy: string; ru: string };
  mass: number;
  family: Family;
  en?: number;
  row: number; // display row 1–7, 9–10 for the f-block
  col: number; // display column 1–18
  period: number;
  group?: number;
};

const RAW = `1|H|Hydrogen|Водород|Ջրածին|1.008|nonmetal|2.20
2|He|Helium|Гелий|Հելիում|4.003|noble|
3|Li|Lithium|Литий|Լիթիում|6.94|alkali|0.98
4|Be|Beryllium|Бериллий|Բերիլիում|9.012|alkaline|1.57
5|B|Boron|Бор|Բոր|10.81|metalloid|2.04
6|C|Carbon|Углерод|Ածխածին|12.011|nonmetal|2.55
7|N|Nitrogen|Азот|Ազոտ|14.007|nonmetal|3.04
8|O|Oxygen|Кислород|Թթվածին|15.999|nonmetal|3.44
9|F|Fluorine|Фтор|Ֆտոր|18.998|halogen|3.98
10|Ne|Neon|Неон|Նեոն|20.180|noble|
11|Na|Sodium|Натрий|Նատրիում|22.990|alkali|0.93
12|Mg|Magnesium|Магний|Մագնեզիում|24.305|alkaline|1.31
13|Al|Aluminium|Алюминий|Ալյումին|26.982|post|1.61
14|Si|Silicon|Кремний|Սիլիցիում|28.085|metalloid|1.90
15|P|Phosphorus|Фосфор|Ֆոսֆոր|30.974|nonmetal|2.19
16|S|Sulfur|Сера|Ծծումբ|32.06|nonmetal|2.58
17|Cl|Chlorine|Хлор|Քլոր|35.45|halogen|3.16
18|Ar|Argon|Аргон|Արգոն|39.948|noble|
19|K|Potassium|Калий|Կալիում|39.098|alkali|0.82
20|Ca|Calcium|Кальций|Կալցիում|40.078|alkaline|1.00
21|Sc|Scandium|Скандий|Սկանդիում|44.956|transition|1.36
22|Ti|Titanium|Титан|Տիտան|47.867|transition|1.54
23|V|Vanadium|Ванадий|Վանադիում|50.942|transition|1.63
24|Cr|Chromium|Хром|Քրոմ|51.996|transition|1.66
25|Mn|Manganese|Марганец|Մանգան|54.938|transition|1.55
26|Fe|Iron|Железо|Երկաթ|55.845|transition|1.83
27|Co|Cobalt|Кобальт|Կոբալտ|58.933|transition|1.88
28|Ni|Nickel|Никель|Նիկել|58.693|transition|1.91
29|Cu|Copper|Медь|Պղինձ|63.546|transition|1.90
30|Zn|Zinc|Цинк|Ցինկ|65.38|transition|1.65
31|Ga|Gallium|Галлий|Գալիում|69.723|post|1.81
32|Ge|Germanium|Германий|Գերմանիում|72.630|metalloid|2.01
33|As|Arsenic|Мышьяк|Արսեն|74.922|metalloid|2.18
34|Se|Selenium|Селен|Սելեն|78.971|nonmetal|2.55
35|Br|Bromine|Бром|Բրոմ|79.904|halogen|2.96
36|Kr|Krypton|Криптон|Կրիպտոն|83.798|noble|3.00
37|Rb|Rubidium|Рубидий|Ռուբիդիում|85.468|alkali|0.82
38|Sr|Strontium|Стронций|Ստրոնցիում|87.62|alkaline|0.95
39|Y|Yttrium|Иттрий|Իտրիում|88.906|transition|1.22
40|Zr|Zirconium|Цирконий|Ցիրկոնիում|91.224|transition|1.33
41|Nb|Niobium|Ниобий|Նիոբիում|92.906|transition|1.6
42|Mo|Molybdenum|Молибден|Մոլիբդեն|95.95|transition|2.16
43|Tc|Technetium|Технеций|Տեխնեցիում|98|transition|1.9
44|Ru|Ruthenium|Рутений|Ռութենիում|101.07|transition|2.2
45|Rh|Rhodium|Родий|Ռոդիում|102.91|transition|2.28
46|Pd|Palladium|Палладий|Պալադիում|106.42|transition|2.20
47|Ag|Silver|Серебро|Արծաթ|107.87|transition|1.93
48|Cd|Cadmium|Кадмий|Կադմիում|112.41|transition|1.69
49|In|Indium|Индий|Ինդիում|114.82|post|1.78
50|Sn|Tin|Олово|Անագ|118.71|post|1.96
51|Sb|Antimony|Сурьма|Ծարիր|121.76|metalloid|2.05
52|Te|Tellurium|Теллур|Տելուր|127.60|metalloid|2.1
53|I|Iodine|Иод|Յոդ|126.90|halogen|2.66
54|Xe|Xenon|Ксенон|Քսենոն|131.29|noble|2.6
55|Cs|Caesium|Цезий|Ցեզիում|132.91|alkali|0.79
56|Ba|Barium|Барий|Բարիում|137.33|alkaline|0.89
57|La|Lanthanum|Лантан|Լանթան|138.91|lanthanide|1.10
58|Ce|Cerium|Церий|Ցերիում|140.12|lanthanide|1.12
59|Pr|Praseodymium|Празеодим|Պրազեոդիմ|140.91|lanthanide|1.13
60|Nd|Neodymium|Неодим|Նեոդիմ|144.24|lanthanide|1.14
61|Pm|Promethium|Прометий|Պրոմեթիում|145|lanthanide|
62|Sm|Samarium|Самарий|Սամարիում|150.36|lanthanide|1.17
63|Eu|Europium|Европий|Եվրոպիում|151.96|lanthanide|
64|Gd|Gadolinium|Гадолиний|Գադոլինիում|157.25|lanthanide|1.20
65|Tb|Terbium|Тербий|Տերբիում|158.93|lanthanide|
66|Dy|Dysprosium|Диспрозий|Դիսպրոզիում|162.50|lanthanide|1.22
67|Ho|Holmium|Гольмий|Հոլմիում|164.93|lanthanide|1.23
68|Er|Erbium|Эрбий|Էրբիում|167.26|lanthanide|1.24
69|Tm|Thulium|Тулий|Թուլիում|168.93|lanthanide|1.25
70|Yb|Ytterbium|Иттербий|Իտերբիում|173.05|lanthanide|
71|Lu|Lutetium|Лютеций|Լյուտեցիում|174.97|lanthanide|1.27
72|Hf|Hafnium|Гафний|Հաֆնիում|178.49|transition|1.3
73|Ta|Tantalum|Тантал|Տանտալ|180.95|transition|1.5
74|W|Tungsten|Вольфрам|Վոլֆրամ|183.84|transition|2.36
75|Re|Rhenium|Рений|Ռենիում|186.21|transition|1.9
76|Os|Osmium|Осмий|Օսմիում|190.23|transition|2.2
77|Ir|Iridium|Иридий|Իրիդիում|192.22|transition|2.20
78|Pt|Platinum|Платина|Պլատին|195.08|transition|2.28
79|Au|Gold|Золото|Ոսկի|196.97|transition|2.54
80|Hg|Mercury|Ртуть|Սնդիկ|200.59|transition|2.00
81|Tl|Thallium|Таллий|Թալիում|204.38|post|1.62
82|Pb|Lead|Свинец|Կապար|207.2|post|2.33
83|Bi|Bismuth|Висмут|Բիսմութ|208.98|post|2.02
84|Po|Polonium|Полоний|Պոլոնիում|209|post|2.0
85|At|Astatine|Астат|Աստատ|210|halogen|2.2
86|Rn|Radon|Радон|Ռադոն|222|noble|
87|Fr|Francium|Франций|Ֆրանսիում|223|alkali|0.7
88|Ra|Radium|Радий|Ռադիում|226|alkaline|0.9
89|Ac|Actinium|Актиний|Ակտինիում|227|actinide|1.1
90|Th|Thorium|Торий|Թորիում|232.04|actinide|1.3
91|Pa|Protactinium|Протактиний|Պրոտակտինիում|231.04|actinide|1.5
92|U|Uranium|Уран|Ուրան|238.03|actinide|1.38
93|Np|Neptunium|Нептуний|Նեպտունիում|237|actinide|1.36
94|Pu|Plutonium|Плутоний|Պլուտոնիում|244|actinide|1.28
95|Am|Americium|Америций|Ամերիցիում|243|actinide|1.3
96|Cm|Curium|Кюрий|Կյուրիում|247|actinide|1.3
97|Bk|Berkelium|Берклий|Բերկլիում|247|actinide|1.3
98|Cf|Californium|Калифорний|Կալիֆորնիում|251|actinide|1.3
99|Es|Einsteinium|Эйнштейний|Այնշտայնիում|252|actinide|1.3
100|Fm|Fermium|Фермий|Ֆերմիում|257|actinide|1.3
101|Md|Mendelevium|Менделевий|Մենդելևիում|258|actinide|1.3
102|No|Nobelium|Нобелий|Նոբելիում|259|actinide|1.3
103|Lr|Lawrencium|Лоуренсий|Լոուրենսիում|266|actinide|
104|Rf|Rutherfordium|Резерфордий|Ռեզերֆորդիում|267|transition|
105|Db|Dubnium|Дубний|Դուբնիում|268|transition|
106|Sg|Seaborgium|Сиборгий|Սիբորգիում|269|transition|
107|Bh|Bohrium|Борий|Բորիում|270|transition|
108|Hs|Hassium|Хассий|Հասիում|269|transition|
109|Mt|Meitnerium|Мейтнерий|Մայտներիում|278|unknown|
110|Ds|Darmstadtium|Дармштадтий|Դարմշտադտիում|281|unknown|
111|Rg|Roentgenium|Рентгений|Ռենտգենիում|282|unknown|
112|Cn|Copernicium|Коперниций|Կոպեռնիկիում|285|transition|
113|Nh|Nihonium|Нихоний|Նիհոնիում|286|unknown|
114|Fl|Flerovium|Флеровий|Ֆլերովիում|289|unknown|
115|Mc|Moscovium|Московий|Մոսկովիում|290|unknown|
116|Lv|Livermorium|Ливерморий|Լիվերմորիում|293|unknown|
117|Ts|Tennessine|Теннессин|Թենեսին|294|unknown|
118|Og|Oganesson|Оганесон|Օգանեսոն|294|unknown|`;

function place(z: number): { row: number; col: number; period: number; group?: number } {
  if (z >= 57 && z <= 71) return { row: 9, col: 3 + (z - 57), period: 6 };
  if (z >= 89 && z <= 103) return { row: 10, col: 3 + (z - 89), period: 7 };
  const starts = [1, 3, 11, 19, 37, 55, 87];
  let period = 1;
  for (let i = 0; i < starts.length; i++) if (z >= starts[i]) period = i + 1;
  const k = z - starts[period - 1]; // index inside the period
  let col: number;
  if (period === 1) col = z === 1 ? 1 : 18;
  else if (period <= 3) col = k < 2 ? k + 1 : k + 11;
  else if (period <= 5) col = k + 1;
  else col = k < 2 ? k + 1 : k - 13; // the 14 f-block elements sit in their own rows, so Hf (k = 17) is in group 4
  return { row: period, col, period, group: col };
}

export const ELEMENTS: Element[] = RAW.split("\n").map((line) => {
  const [z, sym, en, ru, hy, mass, family, eneg] = line.split("|");
  const n = Number(z);
  return { z: n, sym, name: { en, hy, ru }, mass: Number(mass), family: family as Family, en: eneg ? Number(eneg) : undefined, ...place(n) };
});

export const BY_SYMBOL: Record<string, Element> = Object.fromEntries(ELEMENTS.map((e) => [e.sym, e]));

// Madelung order of subshells, with the usual exceptions up to gold.
const ORDER = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p"];
const CAP: Record<string, number> = { s: 2, p: 6, d: 10, f: 14 };
const EXCEPTIONS: Record<number, Record<string, number>> = {
  24: { "4s": 1, "3d": 5 },
  29: { "4s": 1, "3d": 10 },
  42: { "5s": 1, "4d": 5 },
  46: { "5s": 0, "4d": 10 },
  47: { "5s": 1, "4d": 10 },
  78: { "6s": 1, "5d": 9 },
  79: { "6s": 1, "5d": 10 },
};

/** Electron configuration as [subshell, electrons] pairs, e.g. [["1s",2],["2s",2],["2p",4]]. */
export function configuration(z: number): Array<[string, number]> {
  const out: Array<[string, number]> = [];
  let left = z;
  for (const s of ORDER) {
    if (left <= 0) break;
    const n = Math.min(left, CAP[s[1]]);
    out.push([s, n]);
    left -= n;
  }
  const ex = EXCEPTIONS[z];
  if (ex) for (const [s, n] of Object.entries(ex)) { const i = out.findIndex(([x]) => x === s); if (i >= 0) out[i] = [s, n]; }
  return out.filter(([, n]) => n > 0);
}

/** Electrons per shell (K, L, M, …) for the Bohr picture. */
export function shells(z: number): number[] {
  const sh: number[] = [];
  for (const [s, n] of configuration(z)) { const k = Number(s[0]) - 1; sh[k] = (sh[k] ?? 0) + n; }
  return Array.from(sh, (v) => v ?? 0);
}

/** Molar mass of a formula like H2SO4, Ca(OH)2 or CuSO4·5H2O. Returns null for an unknown symbol. */
export function parseFormula(f: string): Record<string, number> | null {
  const parts = f.replace(/\s/g, "").split(/[·*.]/);
  const total: Record<string, number> = {};
  for (const part of parts) {
    const m = part.match(/^(\d*)(.*)$/)!;
    const mult = m[1] ? Number(m[1]) : 1;
    const stack: Array<Record<string, number>> = [{}];
    const re = /([A-Z][a-z]?)(\d*)|(\()|(\))(\d*)/g;
    let mm: RegExpExecArray | null;
    let consumed = 0;
    while ((mm = re.exec(m[2]))) {
      consumed += mm[0].length;
      if (mm[1]) {
        if (!BY_SYMBOL[mm[1]]) return null;
        const top = stack[stack.length - 1];
        top[mm[1]] = (top[mm[1]] ?? 0) + (mm[2] ? Number(mm[2]) : 1);
      } else if (mm[3]) stack.push({});
      else if (mm[4]) {
        const g = stack.pop();
        if (!g || !stack.length) return null;
        const k = mm[5] ? Number(mm[5]) : 1;
        const top = stack[stack.length - 1];
        for (const [s, n] of Object.entries(g)) top[s] = (top[s] ?? 0) + n * k;
      }
    }
    if (consumed !== m[2].length || stack.length !== 1) return null;
    for (const [s, n] of Object.entries(stack[0])) total[s] = (total[s] ?? 0) + n * mult;
  }
  return total;
}

export function molarMass(f: string): number | null {
  const c = parseFormula(f);
  if (!c) return null;
  return Object.entries(c).reduce((s, [sym, n]) => s + BY_SYMBOL[sym].mass * n, 0);
}
