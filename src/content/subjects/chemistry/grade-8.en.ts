import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Amount of substance, molar mass, Avogadro's law, molar volume, solutions and the mass fraction of a solute.",
    "Oxides, bases, acids and salts: their names, preparation, properties and the links between them.",
    "Mendeleev's periodic law, the structure of the table, the nucleus and electron shells, types of chemical bond, oxidation state.",
  ],
  lessons: {
    "amount-of-substance": {
      objectives: ["Define amount of substance and the mole", "Use the Avogadro constant", "Calculate molar mass", "Solve problems of the form n = m / M"],
      content: `## Why we need the mole

In reactions substances combine in definite numbers of particles, but particles cannot be counted. So we use a quantity called the **amount of substance**, **n**, measured in **moles**.

**1 mole** is the amount of substance that contains **6.02·10²³** particles (atoms, molecules, ions). This number is called the **Avogadro constant**: Nₐ = 6.02·10²³ mol⁻¹.

## Molar mass

**Molar mass** (M) is the mass of 1 mole of a substance, measured in g/mol. It is numerically equal to Mr: M(H₂O) = 18 g/mol, M(CO₂) = 44 g/mol.

## Main formulas

- n = m / M
- m = n · M
- N = n · Nₐ (number of particles)

## Worked examples

**1.** How many moles are in 90 g of water? n = 90 / 18 = 5 mol.

**2.** What is the mass of 0.5 mol of NaOH? M = 23 + 16 + 1 = 40 g/mol, m = 0.5 · 40 = 20 g.

**3.** How many molecules are in 2 mol of oxygen? N = 2 · 6.02·10²³ = 1.204·10²⁴.

**4.** How many oxygen atoms are in 1 mol of CO₂? Each molecule has 2 atoms, so there are 2 mol of atoms: 1.204·10²⁴.

## Exercises

1. Find M: H₂SO₄, CaCO₃, Fe₂O₃.
2. How many moles are in 128 g of oxygen, O₂?
3. What is the mass of 3 mol of salt, NaCl?
4. How many molecules are in 36 g of water?
5. Which is heavier: 1 mol of water or 1 mol of carbon dioxide?

## Answers

1. 98, 100, 160 g/mol.
2. 128 / 32 = 4 mol.
3. 3 · 58.5 = 175.5 g.
4. 36 / 18 = 2 mol, N = 1.204·10²⁴.
5. Carbon dioxide: 44 g > 18 g.`,
      quiz: [
        ["How many particles are in 1 mole?", ["6.02·10²³", "6.02·10²⁰", "22.4", "1000"]],
        ["What is M(CO₂)?", ["28 g/mol", "32 g/mol", "44 g/mol", "56 g/mol"]],
        ["How many moles are in 36 g of water?", ["1", "2", "3", "18"]],
        ["What is the mass of 2 mol of NaOH?", ["40 g", "60 g", "80 g", "20 g"]],
        ["Which formula is correct?", ["n = M / m", "n = m · M", "n = m / M", "n = m + M"]],
      ],
    },
    "molar-volume-of-gases": {
      objectives: ["State Avogadro's law", "Use the molar volume at standard conditions", "Calculate the volume and mass of a gas", "Calculate the relative density of a gas"],
      content: `## Avogadro's law

At the same temperature and pressure, equal volumes of different gases contain **the same number of molecules** (A. Avogadro, 1811).

## Molar volume

At standard conditions (STP: 0 °C and 101.3 kPa) 1 mole of any gas takes up **22.4 L**. This is the **molar volume**: Vₘ = 22.4 L/mol.

- n = V / Vₘ
- V = n · Vₘ

## Worked examples

**1.** What volume do 3 mol of nitrogen take up (STP)? V = 3 · 22.4 = 67.2 L.

**2.** What is the mass of 11.2 L of CO₂? n = 11.2 / 22.4 = 0.5 mol, m = 0.5 · 44 = 22 g.

**3.** How many litres of hydrogen form from 13 g of zinc: Zn + 2HCl → ZnCl₂ + H₂? n(Zn) = 13 / 65 = 0.2 mol = n(H₂), V = 0.2 · 22.4 = 4.48 L.

## Relative density

The density of one gas relative to another: D = M₁ / M₂. Relative to air: D = M / 29. Carbon dioxide is heavier than air: 44 / 29 ≈ 1.52, while hydrogen is lighter: 2 / 29 ≈ 0.07.

## Exercises

1. What volume do 64 g of oxygen take up (STP)?
2. How many moles are in 44.8 L of methane?
3. What is the mass of 5.6 L of nitrogen?
4. Find the density of chlorine (Cl₂) relative to air.
5. Which gases are lighter than air: H₂, CO₂, CH₄, O₂?

## Answers

1. 64 / 32 = 2 mol, 44.8 L.
2. 2 mol.
3. 0.25 · 28 = 7 g.
4. 71 / 29 ≈ 2.45.
5. H₂ (2) and CH₄ (16).`,
      quiz: [
        ["What is the molar volume of gases at STP?", ["11.2 L/mol", "22.4 L/mol", "6.02 L/mol", "1 L/mol"]],
        ["What volume do 2 mol of hydrogen take up (STP)?", ["2 L", "22.4 L", "44.8 L", "11.2 L"]],
        ["How many moles are in 11.2 L of gas (STP)?", ["0.5", "1", "2", "11.2"]],
        ["Which gas is heavier than air?", ["H₂", "CH₄", "CO₂", "He"]],
        ["By Avogadro's law, equal volumes of different gases under the same conditions have the same:", ["mass", "number of molecules", "density", "colour"]],
      ],
    },
    "solutions-mass-fraction": {
      objectives: ["Define solution, solvent and solute", "Explain solubility and how it depends on temperature", "Calculate the mass fraction of a solute", "Solve problems on making and diluting solutions"],
      content: `## What is a solution

A **solution** is a homogeneous mixture made of a **solvent** and a **solute**. The most common solvent is water.

**Solubility** shows how much of a substance can dissolve in 100 g of water at a given temperature. The solubility of most solids **increases** on heating, while that of gases **decreases** (warm fizzy water quickly goes flat).

Solutions can be **unsaturated**, **saturated** (no more dissolves) and **supersaturated**.

## Mass fraction

ω = m(solute) / m(solution), m(solution) = m(solute) + m(water).

## Worked examples

**1.** 20 g of salt was dissolved in 180 g of water. m(solution) = 200 g, ω = 20 / 200 = 0.1 = 10 %.

**2.** How much sugar and water are needed for 300 g of a 15 % solution? m(sugar) = 300 · 0.15 = 45 g, m(water) = 255 g.

**3.** 50 g of water was added to 200 g of a 10 % solution. m(solute) = 20 g, the new mass is 250 g, ω = 20 / 250 = 8 %.

**4.** 20 g of water was evaporated from 100 g of a 20 % solution. ω = 20 / 80 = 25 %.

## Exercises

1. 15 g of a substance was dissolved in 135 g of water. Find ω.
2. How many grams of salt are in 500 g of 0.9 % saline solution?
3. 50 g of water was added to 150 g of a 20 % solution. Find the new ω.
4. Why is warming the water dangerous for fish?
5. How do you make 50 g of a 4 % baking soda solution?

## Answers

1. 15 / 150 = 10 %.
2. 4.5 g.
3. 30 / 200 = 15 %.
4. Little oxygen dissolves in warm water.
5. 2 g of baking soda and 48 g of water.`,
      quiz: [
        ["What is a solution?", ["A heterogeneous mixture", "A homogeneous mixture", "A pure substance", "A simple substance"]],
        ["10 g of salt was dissolved in 90 g of water. ω is:", ["9 %", "10 %", "11 %", "90 %"]],
        ["On heating, the solubility of gases in water:", ["increases", "decreases", "does not change", "becomes zero"]],
        ["How many grams of solute are in 200 g of a 5 % solution?", ["5 g", "10 g", "20 g", "40 g"]],
        ["When water is added, the mass fraction of the solute:", ["increases", "decreases", "does not change", "doubles"]],
      ],
    },
    oxides: {
      objectives: ["Name oxides", "Distinguish basic, acidic and amphoteric oxides", "Write the typical reactions of oxides", "Give examples of oxides in everyday life"],
      content: `## Names

An oxide is a compound of an element with oxygen. The name is "element + oxide"; when the valency varies, it is shown in brackets: CuO is copper(II) oxide, Fe₂O₃ is iron(III) oxide, SO₂ is sulfur(IV) oxide.

## Classification

| Type | Formed by | Examples | Hydrate |
|---|---|---|---|
| basic | metals with valency I–II | Na₂O, CaO, CuO, MgO | base |
| acidic | non-metals, metals V–VII | CO₂, SO₂, SO₃, P₂O₅, N₂O₅ | acid |
| amphoteric | Al, Zn, Be, Cr(III) | Al₂O₃, ZnO | show both properties |
| non-salt-forming | | CO, NO, N₂O | |

## Properties

**Basic oxides**
- oxides of active metals react with water: CaO + H₂O → Ca(OH)₂
- with acids: CuO + 2HCl → CuCl₂ + H₂O
- with acidic oxides: CaO + CO₂ → CaCO₃

**Acidic oxides**
- with water (except SiO₂): SO₃ + H₂O → H₂SO₄
- with bases: CO₂ + 2NaOH → Na₂CO₃ + H₂O

**Amphoteric oxides** react with both acids and bases: ZnO + 2HCl → ZnCl₂ + H₂O, ZnO + 2NaOH → Na₂ZnO₂ + H₂O (when fused).

## In everyday life

Water H₂O, sand SiO₂, quicklime CaO, carbon dioxide CO₂, rust (mostly Fe₂O₃), carbon monoxide CO (poisonous).

## Exercises

1. Name: MgO, SO₃, Fe₂O₃, N₂O₅.
2. Classify: K₂O, P₂O₅, ZnO, CO₂, BaO.
3. Complete: Na₂O + H₂O → ?, CO₂ + Ca(OH)₂ → ?
4. Which oxide does not react with water: SO₂, CaO, SiO₂?
5. Why is incomplete burning of fuel in a stove in a closed room dangerous?

## Answers

1. Magnesium oxide, sulfur(VI) oxide, iron(III) oxide, nitrogen(V) oxide.
2. Basic: K₂O, BaO; acidic: P₂O₅, CO₂; amphoteric: ZnO.
3. 2NaOH; CaCO₃ + H₂O.
4. SiO₂.
5. Poisonous carbon monoxide, CO, forms.`,
      quiz: [
        ["Which oxide is basic?", ["SO₃", "CaO", "CO₂", "P₂O₅"]],
        ["Which oxide is acidic?", ["Na₂O", "MgO", "SO₂", "CuO"]],
        ["Which oxide is amphoteric?", ["ZnO", "K₂O", "CO₂", "BaO"]],
        ["SO₃ + H₂O → ?", ["H₂SO₃", "H₂SO₄", "H₂S", "SO₂"]],
        ["Which oxide does not react with water?", ["CaO", "SO₃", "SiO₂", "Na₂O"]],
      ],
    },
    bases: {
      objectives: ["Define bases and name them", "Distinguish alkalis and insoluble bases", "Detect a base with indicators", "Write the typical reactions of bases"],
      content: `## Composition and names

**Bases** are compounds made of a metal atom and one or more **hydroxide groups**, OH (valency I). The name is "metal hydroxide": NaOH is sodium hydroxide, Ca(OH)₂ is calcium hydroxide, Fe(OH)₃ is iron(III) hydroxide.

## Classification

- **Alkalis** (soluble in water): LiOH, NaOH, KOH, Ca(OH)₂ (slightly soluble), Ba(OH)₂.
- **Insoluble bases**: Cu(OH)₂ (blue), Fe(OH)₃ (brown), Mg(OH)₂.

Alkalis burn skin and fabric, so wear goggles and gloves when using them.

## Indicators

| Indicator | Neutral | Alkali | Acid |
|---|---|---|---|
| phenolphthalein | colourless | crimson | colourless |
| litmus | purple | blue | red |
| methyl orange | orange | yellow | pink |

## Properties

- **Neutralisation** with acids: NaOH + HCl → NaCl + H₂O
- Alkalis react with acidic oxides: 2NaOH + CO₂ → Na₂CO₃ + H₂O
- Alkalis react with salts if a precipitate forms: 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄
- Insoluble bases decompose on heating: Cu(OH)₂ → CuO + H₂O

## Preparation

An active metal or its oxide + water: 2Na + 2H₂O → 2NaOH + H₂, CaO + H₂O → Ca(OH)₂. Insoluble bases: salt + alkali.

## Exercises

1. Name: KOH, Ba(OH)₂, Fe(OH)₂.
2. What colour does phenolphthalein turn in limewater?
3. Write the reaction of potassium hydroxide with sulfuric acid.
4. How can you get Fe(OH)₃ from FeCl₃?
5. Why does limewater turn cloudy when you blow into it?

## Answers

1. Potassium hydroxide, barium hydroxide, iron(II) hydroxide.
2. Crimson.
3. 2KOH + H₂SO₄ → K₂SO₄ + 2H₂O.
4. FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl.
5. The CO₂ you breathe out forms insoluble CaCO₃ with Ca(OH)₂.`,
      quiz: [
        ["Which substance is an alkali?", ["Cu(OH)₂", "Fe(OH)₃", "NaOH", "Mg(OH)₂"]],
        ["In an alkali solution phenolphthalein turns:", ["red", "crimson", "blue", "colourless"]],
        ["What forms in a neutralisation reaction?", ["Salt and water", "An oxide and hydrogen", "An acid and a base", "A metal and oxygen"]],
        ["On heating, Cu(OH)₂ decomposes into:", ["Cu and H₂O", "CuO and H₂O", "Cu and O₂", "CuO and H₂"]],
        ["What is the valency of the OH group?", ["I", "II", "III", "IV"]],
      ],
    },
    acids: {
      objectives: ["Define acids and recognise acid residues", "Classify acids by basicity and by whether they contain oxygen", "Write the properties of acids", "Use the reactivity series of metals"],
      content: `## Composition

**Acids** are compounds made of hydrogen atoms and an **acid residue**.

| Acid | Formula | Residue | Valency | Salts |
|---|---|---|---|---|
| hydrochloric | HCl | Cl | I | chlorides |
| nitric | HNO₃ | NO₃ | I | nitrates |
| sulfuric | H₂SO₄ | SO₄ | II | sulfates |
| sulfurous | H₂SO₃ | SO₃ | II | sulfites |
| hydrosulfuric | H₂S | S | II | sulfides |
| carbonic | H₂CO₃ | CO₃ | II | carbonates |
| phosphoric | H₃PO₄ | PO₄ | III | phosphates |

**Classification**: oxyacids (H₂SO₄) and oxygen-free acids (HCl, H₂S); monobasic (HCl), dibasic (H₂SO₄), tribasic (H₃PO₄).

## Properties

1. They change the colour of indicators (litmus turns red).
2. They react with metals to the left of hydrogen in the reactivity series: Zn + H₂SO₄ → ZnSO₄ + H₂↑. Copper does not react with hydrochloric acid.
3. With basic oxides: MgO + 2HNO₃ → Mg(NO₃)₂ + H₂O
4. With bases (neutralisation): Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O
5. With salts, if a gas or precipitate forms: Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑

**Reactivity series of metals**: K Ca Na Mg Al Zn Fe Ni Sn Pb (H) Cu Hg Ag Au

## In everyday life

Citric acid, acetic acid, hydrochloric acid in gastric juice (about 0.5 %), sulfuric acid in car batteries.

## Exercises

1. Classify: H₂SO₃, HNO₃, H₃PO₄, H₂S.
2. Which metals react with hydrochloric acid: Mg, Cu, Fe, Ag?
3. Complete: Al + HCl → ?, CuO + H₂SO₄ → ?
4. Why does baking soda fizz when you pour vinegar on it?
5. Name the salts: Na₂SO₄, KNO₃, CaCO₃.

## Answers

1. Oxyacids: H₂SO₃, HNO₃, H₃PO₄; oxygen-free: H₂S. Monobasic: HNO₃; dibasic: H₂SO₃, H₂S; tribasic: H₃PO₄.
2. Mg, Fe.
3. 2Al + 6HCl → 2AlCl₃ + 3H₂, CuO + H₂SO₄ → CuSO₄ + H₂O.
4. Carbon dioxide is given off.
5. Sodium sulfate, potassium nitrate, calcium carbonate.`,
      quiz: [
        ["Which acid is dibasic?", ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"]],
        ["Which metal does not react with hydrochloric acid?", ["Zn", "Mg", "Fe", "Cu"]],
        ["In an acid, litmus turns:", ["blue", "red", "crimson", "yellow"]],
        ["Salts of nitric acid are called:", ["sulfates", "nitrates", "chlorides", "phosphates"]],
        ["In the reaction Na₂CO₃ + 2HCl the gas given off is:", ["H₂", "O₂", "CO₂", "Cl₂"]],
      ],
    },
    salts: {
      objectives: ["Name salts", "Write the formulas of salts", "Use the solubility table", "Write the properties and preparation of salts"],
      content: `## Composition and names

**Salts** are compounds made of metal atoms and acid residues. The name is "metal + residue name": CuSO₄ is copper(II) sulfate, AgNO₃ is silver nitrate, Na₃PO₄ is sodium phosphate.

**Writing a formula**: Al(III) and SO₄(II) give Al₂(SO₄)₃.

## Solubility table

All sodium and potassium salts and all nitrates are soluble. Insoluble ones include AgCl, BaSO₄, CaCO₃, and the carbonates and phosphates of most metals.

## Properties

1. **With a metal**: a more active metal displaces a less active one: Fe + CuSO₄ → FeSO₄ + Cu
2. **With an acid**: BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl
3. **With an alkali**: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄
4. **With a salt**: AgNO₃ + NaCl → AgCl↓ + NaNO₃ (a white precipitate, the test for chlorides)
5. Some salts decompose on heating: CaCO₃ → CaO + CO₂

Exchange reactions go to completion if a **precipitate, a gas or water** forms.

## Preparation

metal + acid, basic oxide + acid, base + acid, base + acidic oxide, salt + salt, metal + non-metal (2Na + Cl₂ → 2NaCl).

## In everyday life

Table salt NaCl, baking soda NaHCO₃, chalk and marble CaCO₃, gypsum CaSO₄·2H₂O, blue vitriol CuSO₄·5H₂O.

## Exercises

1. Write the formulas: calcium phosphate, iron(III) chloride, magnesium nitrate.
2. Do these reactions take place: Cu + ZnSO₄, Zn + CuSO₄?
3. How can you prove that a solution contains chloride ions?
4. Write three ways of making NaCl.
5. Does the reaction KNO₃ + NaCl take place?

## Answers

1. Ca₃(PO₄)₂, FeCl₃, Mg(NO₃)₂.
2. The first does not, the second does (zinc is more active than copper).
3. Add AgNO₃; a white precipitate forms.
4. Na + Cl₂, NaOH + HCl, Na₂O + HCl.
5. No: no precipitate, gas or water forms.`,
      quiz: [
        ["What is CuSO₄ called?", ["Copper(II) sulfide", "Copper(II) sulfate", "Copper(II) sulfite", "Copper nitrate"]],
        ["Which salt is insoluble in water?", ["NaCl", "KNO₃", "BaSO₄", "Na₂SO₄"]],
        ["Which reaction takes place?", ["Cu + FeSO₄", "Fe + CuSO₄", "Ag + ZnCl₂", "Cu + MgCl₂"]],
        ["The test reagent for chloride ions is:", ["BaCl₂", "AgNO₃", "NaOH", "HCl"]],
        ["The formula of aluminium sulfate is:", ["AlSO₄", "Al₂SO₄", "Al₂(SO₄)₃", "Al(SO₄)₂"]],
      ],
    },
    "genetic-relationships": {
      objectives: ["Build the genetic series of a metal and a non-metal", "Carry out chains of conversions", "Link classes of compounds by reactions", "Solve conversion problems"],
      content: `## Genetic series

The classes of compounds are linked: one class can be made from another.

**Series of a metal**: metal → basic oxide → base → salt

Ca → CaO → Ca(OH)₂ → CaCl₂

1. 2Ca + O₂ → 2CaO
2. CaO + H₂O → Ca(OH)₂
3. Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O

**Series of a non-metal**: non-metal → acidic oxide → acid → salt

P → P₂O₅ → H₃PO₄ → Na₃PO₄

1. 4P + 5O₂ → 2P₂O₅
2. P₂O₅ + 3H₂O → 2H₃PO₄
3. H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O

## A series with an insoluble base

Cu → CuO → CuCl₂ → Cu(OH)₂ → CuO

CuO does not react with water, so the base is made from a salt:

1. 2Cu + O₂ → 2CuO
2. CuO + 2HCl → CuCl₂ + H₂O
3. CuCl₂ + 2NaOH → Cu(OH)₂↓ + 2NaCl
4. Cu(OH)₂ → CuO + H₂O (on heating)

## Exercises

Carry out the conversions:

1. S → SO₂ → H₂SO₃ → K₂SO₃
2. Mg → MgO → MgSO₄ → Mg(OH)₂
3. C → CO₂ → Na₂CO₃ → CaCO₃ → CO₂
4. In the chain Fe → X → FeCl₃, which class does X belong to if it was made by burning?

## Answers

1. S + O₂ → SO₂, SO₂ + H₂O → H₂SO₃, H₂SO₃ + 2KOH → K₂SO₃ + 2H₂O.
2. 2Mg + O₂ → 2MgO, MgO + H₂SO₄ → MgSO₄ + H₂O, MgSO₄ + 2NaOH → Mg(OH)₂↓ + Na₂SO₄.
3. C + O₂ → CO₂, CO₂ + 2NaOH → Na₂CO₃ + H₂O, Na₂CO₃ + CaCl₂ → CaCO₃↓ + 2NaCl, CaCO₃ → CaO + CO₂.
4. An oxide (Fe₂O₃ or Fe₃O₄), which gives a salt with an acid.`,
      quiz: [
        ["The correct order of the genetic series of a metal is:", ["metal → acid → salt", "metal → basic oxide → base → salt", "metal → acidic oxide → acid", "metal → salt → oxide"]],
        ["P₂O₅ + H₂O → ?", ["H₃PO₄", "PH₃", "P₂O₃", "H₂P"]],
        ["How can you get Cu(OH)₂?", ["CuO + H₂O", "CuCl₂ + NaOH", "Cu + H₂O", "Cu + NaOH"]],
        ["In the chain C → CO₂ → X → CaCO₃, X can be:", ["H₂CO₃ or Na₂CO₃", "CH₄", "CO", "C₂H₂"]],
        ["In the series of a non-metal, the acidic oxide is followed by:", ["a base", "an acid", "a metal", "an amphoteric oxide"]],
      ],
    },
    "periodic-law": {
      objectives: ["State the periodic law", "Find your way around periods and groups", "Describe an element from its place in the table", "Explain how properties change across periods and down groups"],
      content: `## History

In 1869 **D. I. Mendeleev** arranged the 63 elements then known in order of increasing atomic mass and noticed that their properties repeat periodically. He left gaps for undiscovered elements and predicted their properties (gallium, scandium, germanium).

**Modern statement**: the properties of elements and their compounds depend periodically on the charge of the atomic nucleus (the atomic number).

## Structure of the table

- The **atomic number** equals the nuclear charge and the number of electrons.
- **Period** (7 horizontal rows): its number shows the number of electron shells. Periods 1–3 are short, 4–7 are long.
- **Group** (8 vertical columns): for elements of the main (A) subgroups, the number equals the number of outer electrons and the highest valency.

## Trends

| Direction | Metallic character | Atomic radius |
|---|---|---|
| across a period, left to right | decreases | decreases |
| down a group | increases | increases |

The most active metals are in the bottom left corner (Cs, Fr); the most active non-metal, fluorine, is in the top right.

**Families of the main subgroups**: IA alkali metals, IIA alkaline earth metals (Ca, Sr, Ba), VIIA halogens, VIIIA noble gases.

## Exercises

1. Which period and group is sulfur (No. 16) in?
2. Which metal is more active: Na or K? Why?
3. Which has the stronger non-metallic character: Cl or S?
4. What is the highest valency of phosphorus? Write its highest oxide.
5. Why could Mendeleev's table be used to make predictions?

## Answers

1. Period 3, group VIA.
2. K, because metallic character increases down a group.
3. Cl (it is further right in the period).
4. V, P₂O₅.
5. Mendeleev left empty cells and described undiscovered elements, which were later found.`,
      quiz: [
        ["Who created the periodic table?", ["Lomonosov", "Mendeleev", "Butlerov", "Dalton"]],
        ["What does the period number show?", ["The number of electrons", "The number of electron shells", "The valency", "The atomic mass"]],
        ["Down a group, metallic character:", ["decreases", "increases", "does not change", "disappears"]],
        ["What is group VIIA called?", ["Alkali metals", "Noble gases", "Halogens", "Alkaline earth metals"]],
        ["The atomic number equals:", ["the number of neutrons", "the nuclear charge", "the number of shells", "the group number"]],
      ],
    },
    "atomic-structure": {
      objectives: ["Describe what the nucleus is made of", "Calculate the numbers of protons, neutrons and electrons", "Define isotopes", "Write the electron arrangement by shells for elements 1–20"],
      content: `## Nucleus and electrons

An atom consists of a positively charged **nucleus** and negative **electrons**. The nucleus contains **protons** (p⁺, charge +1, mass 1) and **neutrons** (n⁰, charge 0, mass 1). An electron is about 1840 times lighter than a proton.

- number of protons = atomic number Z
- number of electrons = Z (in a neutral atom)
- number of neutrons N = A − Z, where A is the mass number (Ar rounded)

**Example.** ²³Na: p = 11, e = 11, n = 23 − 11 = 12.

## Isotopes

Atoms of the same element that differ in the number of neutrons: ¹H (protium), ²H (deuterium), ³H (tritium), ³⁵Cl and ³⁷Cl. The Ar of chlorine, 35.5, comes from the mixture of isotopes.

## Electron shells

The maximum number of electrons in a shell is 2n²: 2 in the 1st shell, 8 in the 2nd, 18 in the 3rd (for the first 20 elements the outer shell holds no more than 8).

| Element | Z | Shells |
|---|---|---|
| H | 1 | 1 |
| C | 6 | 2, 4 |
| O | 8 | 2, 6 |
| Ne | 10 | 2, 8 |
| Na | 11 | 2, 8, 1 |
| Cl | 17 | 2, 8, 7 |
| Ar | 18 | 2, 8, 8 |
| Ca | 20 | 2, 8, 8, 2 |

The outer electrons determine the chemical properties: metals easily **give** them away, non-metals **gain** electrons up to 8. A complete shell of 8 electrons is stable (noble gases).

## Exercises

1. Find p, n, e: ¹⁶O, ²⁷Al, ⁴⁰Ca.
2. Write the arrangement by shells: N, Mg, S.
3. How do ³⁵Cl and ³⁷Cl differ?
4. How many outer electrons does phosphorus have?
5. Why do sodium and potassium have similar properties?

## Answers

1. O: 8, 8, 8; Al: 13, 14, 13; Ca: 20, 20, 20.
2. N: 2, 5; Mg: 2, 8, 2; S: 2, 8, 6.
3. In the number of neutrons (18 and 20).
4. 5.
5. Both have 1 electron in the outer shell.`,
      quiz: [
        ["How many neutrons are in an atom of ²³Na?", ["11", "12", "23", "34"]],
        ["What are isotopes?", ["Atoms of different elements", "Atoms of one element with different numbers of neutrons", "Atoms with the same mass", "Ions"]],
        ["How are the electrons arranged in a chlorine atom?", ["2, 8, 7", "2, 7", "2, 8, 8", "8, 8, 1"]],
        ["What is the maximum number of electrons in the 2nd shell?", ["2", "8", "18", "32"]],
        ["The outer shell of magnesium has:", ["1 electron", "2 electrons", "3 electrons", "8 electrons"]],
      ],
    },
    "chemical-bond-oxidation-state": {
      objectives: ["Distinguish covalent, ionic and metallic bonds", "Define electronegativity", "Identify the type of bond in a compound", "Calculate oxidation states"],
      content: `## Why atoms join

Atoms tend to get a stable outer shell (8 electrons, 2 for hydrogen). They can do this by sharing or transferring electrons.

**Electronegativity** is the ability of an atom to attract shared electrons. Fluorine is the most electronegative, then oxygen.

## Types of bond

| Bond | Between | How | Examples |
|---|---|---|---|
| non-polar covalent | atoms of the same non-metal | the shared pair is in the middle | H₂, O₂, N₂, Cl₂ |
| polar covalent | different non-metals | the pair is shifted | H₂O, HCl, NH₃, CO₂ |
| ionic | a metal and a non-metal | an electron is transferred | NaCl, CaO, KF |
| metallic | in metals | free electrons | Fe, Cu, Al |

**Ions** are charged particles: Na − e → Na⁺, Cl + e → Cl⁻. Na⁺ and Cl⁻ ions attract each other and form an ionic crystal.

## Oxidation state

The charge an atom would have if all its bonds were ionic.

**Rules**
1. In simple substances it is 0 (H₂, Fe, O₂).
2. H is +1 (−1 with metals), O is −2 (exceptions: peroxides and OF₂).
3. The sum in a molecule is 0.
4. Metals of IA are +1, IIA +2, Al +3.

**Example.** H₂SO₄: 2·(+1) + x + 4·(−2) = 0 → x = +6.

**Example.** KMnO₄: +1 + x − 8 = 0 → x = +7.

## Exercises

1. Identify the type of bond: N₂, KCl, H₂S, Mg, CaF₂.
2. Find the oxidation states: SO₂, HNO₃, NH₃, Fe₂O₃.
3. How does the bond in MgO form?
4. Which molecule has the more polar bond: HCl or HF?
5. Find the oxidation state of chlorine in KClO₃.

## Answers

1. Non-polar covalent, ionic, polar covalent, metallic, ionic.
2. S +4; N +5; N −3; Fe +3.
3. Mg gives 2 electrons to O: Mg²⁺ and O²⁻.
4. HF (fluorine is more electronegative).
5. +1 + x − 6 = 0 → +5.`,
      quiz: [
        ["Which substance has an ionic bond?", ["H₂O", "Cl₂", "NaCl", "CO₂"]],
        ["Which substance has a non-polar covalent bond?", ["HCl", "N₂", "KF", "NH₃"]],
        ["What is the oxidation state of sulfur in H₂SO₄?", ["+4", "+6", "−2", "+2"]],
        ["Which element is the most electronegative?", ["O", "Cl", "F", "N"]],
        ["The oxidation state in simple substances is:", ["+1", "−1", "0", "+2"]],
      ],
    },
  },
};
