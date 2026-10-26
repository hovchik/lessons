import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "What chemistry studies, properties of substances, pure substances and mixtures, physical and chemical changes.",
    "Atomic and molecular theory, chemical elements, relative masses, simple and compound substances, valency, mass fraction.",
    "Chemical equations, conservation of mass, types of reactions, oxygen and combustion, hydrogen, water.",
  ],
  lessons: {
    "what-is-chemistry": {
      objectives: ["Explain what chemistry studies", "Tell an object from a substance", "Recognise basic laboratory equipment", "Know the safety rules of a chemistry lab"],
      content: `## What is chemistry

**Chemistry** is a natural science that studies **substances**: what they are made of, how they are built, their properties and how they change.

Everything around us is made of substances. A spoon is an **object**, and the metal it is made of is a **substance**.

| Object | Substance |
|---|---|
| nail | iron |
| glass (cup) | glass |
| pencil | wood, graphite |
| ice cube | water |

One substance can make different objects (glass makes a cup, a window, a bottle), and the same object can be made of different substances (a spoon can be steel, silver or wood).

## Where chemistry is needed

- making medicines and fertilisers,
- producing metals, plastics, paints,
- preserving food, purifying water,
- protecting the environment.

## Laboratory equipment

**Test tube, beaker, flask, funnel, spirit lamp, stand, test-tube holder, filter paper, measuring cylinder, porcelain dish**.

## Safety rules

1. Work only with the teacher's permission and as instructed.
2. Never taste substances or touch them with your hands.
3. To smell a substance, waft the vapour towards you with your hand; do not sniff straight from the container.
4. When heating, never point the mouth of a test tube at yourself or a neighbour.
5. Put out a spirit lamp only with its cap; never blow it out.
6. Pour acid into water, not water into acid.

## Exercises

1. Which of these are objects and which are substances: sugar, nail, aluminium, ball, rubber, table?
2. Name three objects made of glass.
3. Why must you never blow out a spirit lamp?
4. Which instrument measures the volume of a liquid?
5. Give two examples of chemistry at home.

## Answers

1. Objects: nail, ball, table. Substances: sugar, aluminium, rubber.
2. A cup, a bottle, a window pane.
3. The flame can get inside the lamp and cause a burn or a fire.
4. A measuring cylinder.
5. For example, removing limescale with soda or vinegar, washing with bleach, preserving food with salt.`,
      quiz: [
        ["What does chemistry study?", ["The motion of bodies", "Substances and their changes", "Living organisms", "The Earth's surface"]],
        ["Which of these is a substance?", ["A nail", "A cup", "Iron", "A ball"]],
        ["How should a spirit lamp be put out?", ["Blow it out", "Pour water on it", "Cover it with its cap", "Shake it"]],
        ["Which instrument measures the volume of a liquid?", ["Measuring cylinder", "Funnel", "Stand", "Test-tube holder"]],
        ["How do you dilute an acid with water?", ["Pour water into the acid", "Pour the acid into water", "Boil both liquids together", "The order does not matter"]],
      ],
    },
    "properties-of-substances": {
      objectives: ["List the physical properties of substances", "Describe the states of matter", "Compare substances by density, melting and boiling points", "Identify a substance by its properties"],
      content: `## What is a property of a substance

Every substance has features that distinguish it from others. These are called the **properties of the substance**.

## Physical properties

- **state**: solid, liquid, gas,
- **colour, smell, taste** (taste is never tested in the lab),
- **density**: the mass of 1 cm³ of the substance,
- **melting and boiling points**,
- **solubility in water**,
- **thermal and electrical conductivity**,
- **lustre, hardness, malleability**.

| Substance | State at 20 °C | Colour | Melting point | Boiling point | Soluble in water |
|---|---|---|---|---|---|
| water | liquid | colourless | 0 °C | 100 °C | — |
| table salt | solid | white | 801 °C | 1465 °C | yes |
| sugar | solid | white | ≈186 °C (decomposes) | — | yes |
| copper | solid | reddish brown | 1083 °C | 2567 °C | no |
| oxygen | gas | colourless | −219 °C | −183 °C | slightly |

## States of matter

The same substance can exist in different states. Below 0 °C water is **ice**, from 0 to 100 °C it is a **liquid**, above 100 °C it is **steam** (at normal pressure).

## How to identify a substance

Salt and sugar look alike, but sugar melts and turns black when heated, while salt does not change. Aluminium and silver have a similar lustre, but aluminium is much lighter (density 2.7 g/cm³, silver 10.5 g/cm³).

## Exercises

1. Describe the physical properties of water following the plan: state, colour, smell, melting and boiling points.
2. Which property can tell sugar from sand?
3. What state is oxygen in at −200 °C?
4. Why are electric wires made of copper?
5. A piece of metal with a volume of 10 cm³ has a mass of 27 g. Which metal is it: aluminium or silver?

## Answers

1. Liquid, colourless, odourless, melts at 0 °C, boils at 100 °C.
2. Solubility in water: sugar dissolves, sand does not.
3. Liquid (above −219 °C but below −183 °C).
4. Copper conducts electricity well and is malleable.
5. Density 27 / 10 = 2.7 g/cm³, so it is aluminium.`,
      quiz: [
        ["Which of these is a physical property?", ["Flammability", "Ability to rust", "Boiling point", "Reaction with acid"]],
        ["What is density?", ["The mass of 1 cm³ of a substance", "The temperature of a substance", "The colour of a substance", "The volume of an object"]],
        ["Water at 120 °C and normal pressure is:", ["solid", "liquid", "steam", "ice"]],
        ["How can you tell salt from sand?", ["By colour", "By solubility in water", "By state", "By mass"]],
        ["Which substance conducts electricity well?", ["Glass", "Rubber", "Copper", "Wood"]],
      ],
    },
    "mixtures-and-separation": {
      objectives: ["Tell a pure substance from a mixture", "Distinguish homogeneous and heterogeneous mixtures", "Choose a method to separate a mixture", "Describe filtration, evaporation and distillation"],
      content: `## Pure substance and mixture

A **pure substance** consists of only one substance and has constant properties (distilled water, sugar, copper).

A **mixture** consists of two or more substances that keep their own properties (air, sea water, milk, soil, granite).

## Kinds of mixtures

- **Heterogeneous**: the components can be seen by eye or under a microscope: sand in water, clay in water, iron powder and sulfur.
- **Homogeneous**: the components cannot be seen: salt solution, air, vinegar.

## Separation methods

| Method | Based on | Example |
|---|---|---|
| settling | difference in density | sand from water |
| filtration | particle size | clay from water |
| magnet | magnetic properties | iron powder from sulfur |
| evaporation | the solvent evaporates | salt from a solution |
| distillation | difference in boiling points | making distilled water |
| separating funnel | liquids that do not mix | vegetable oil from water |

## Example: a mixture of salt and sand

1. Pour the mixture into water; the salt dissolves.
2. Filter it; the sand stays on the filter.
3. Evaporate the filtrate to get the salt.

## Exercises

1. Which of these are pure substances and which are mixtures: air, distilled water, milk, gold, sea water?
2. How can you separate iron filings and sawdust?
3. How can you get salt from sea water?
4. How can you get drinking water from sea water?
5. Is a mixture of clay and water homogeneous or heterogeneous?

## Answers

1. Pure substances: distilled water, gold. Mixtures: air, milk, sea water.
2. With a magnet, or by pouring them into water, where the sawdust floats.
3. By evaporation.
4. By distillation.
5. Heterogeneous.`,
      quiz: [
        ["Which of these is a pure substance?", ["Air", "Milk", "Distilled water", "Sea water"]],
        ["Which mixture is homogeneous?", ["Sand in water", "Salt solution", "Clay in water", "Iron and sulfur"]],
        ["How do you separate water and vegetable oil?", ["With a magnet", "With a separating funnel", "By evaporation", "By filtration"]],
        ["What is distillation based on?", ["Difference in colour", "Difference in boiling points", "Magnetic properties", "Particle shape"]],
        ["Iron powder is separated from sulfur:", ["with a magnet", "by distillation", "by evaporation", "by settling"]],
      ],
    },
    "physical-and-chemical-changes": {
      objectives: ["Distinguish physical and chemical changes", "List the signs of a chemical reaction", "Name the conditions a reaction needs", "Give examples from everyday life"],
      content: `## Two kinds of change

In **physical changes** the shape, size or state of a substance changes, but no new substance forms: ice melting, water boiling, glass breaking, sugar dissolving.

In **chemical changes** (chemical reactions) a **new substance** forms: wood burning, iron rusting, milk turning sour, baking soda reacting with vinegar.

## Signs of a chemical reaction

- a change of colour (copper turns black when heated),
- a gas is given off (baking soda + vinegar),
- a precipitate forms,
- light and heat are given off (burning),
- a smell appears (a gas that smells of rotten eggs).

## Conditions for a reaction

- the substances must **touch** (grinding them speeds up the reaction),
- **heating** or ignition,
- sometimes a **catalyst** or light.

## Examples

| Change | Kind | Why |
|---|---|---|
| water freezes | physical | only the state changes |
| a candle burns | chemical | carbon dioxide and water form |
| a candle melts | physical | paraffin stays paraffin |
| a cut apple turns brown | chemical | substances react with oxygen in the air |

## Exercises

1. Sort these: water boiling, milk turning sour, salt dissolving, a match burning, lead melting.
2. What sign do you see when you pour vinegar on baking soda?
3. Why do small wood chips burn faster?
4. What kind of change is rusting?
5. Give two examples of chemical changes in the kitchen.

## Answers

1. Physical: water boiling, salt dissolving, lead melting. Chemical: milk turning sour, a match burning.
2. A gas is given off.
3. The area of contact with oxygen in the air is larger.
4. A chemical change.
5. For example, baking bread, boiling an egg, caramelising sugar.`,
      quiz: [
        ["Which change is chemical?", ["Ice melting", "Glass breaking", "Iron rusting", "Sugar dissolving"]],
        ["Which change is physical?", ["Wood burning", "Water boiling", "Milk turning sour", "A candle burning"]],
        ["Which is not a sign of a chemical reaction?", ["A gas is given off", "A precipitate forms", "A change of shape", "Heat is given off"]],
        ["Why are substances ground before a reaction?", ["To change their colour", "To increase the area of contact", "To reduce their mass", "To form a precipitate"]],
        ["When baking soda reacts with vinegar you see:", ["light given off", "a gas given off", "a precipitate", "melting"]],
      ],
    },
    "atoms-molecules-elements": {
      objectives: ["State the main ideas of atomic and molecular theory", "Define atom, molecule and chemical element", "Read element symbols", "Know the symbols and names of 15 important elements"],
      content: `## Atomic and molecular theory

1. Substances are made of particles: **molecules** or **atoms**.
2. The particles are always moving, and there are gaps between them.
3. Molecules are made of atoms.
4. In physical changes molecules are kept; in chemical changes they break apart and the atoms regroup.

An **atom** is the smallest chemically indivisible particle of a substance. A **molecule** is the smallest particle of a substance that keeps its chemical properties.

## Chemical element

A **chemical element** is a particular kind of atom. Today 118 elements are known. Each element has a **symbol**; J. Berzelius proposed these symbols, using the first letter or letters of the Latin name.

| Symbol | Latin name | Name |
|---|---|---|
| H | Hydrogenium | hydrogen |
| O | Oxygenium | oxygen |
| N | Nitrogenium | nitrogen |
| C | Carboneum | carbon |
| S | Sulfur | sulfur |
| P | Phosphorus | phosphorus |
| Cl | Chlorum | chlorine |
| Na | Natrium | sodium |
| K | Kalium | potassium |
| Ca | Calcium | calcium |
| Mg | Magnesium | magnesium |
| Al | Aluminium | aluminium |
| Fe | Ferrum | iron |
| Cu | Cuprum | copper |
| Zn | Zincum | zinc |

## Metals and non-metals

Elements are divided into **metals** (Na, Fe, Cu, Al) and **non-metals** (H, O, C, S, Cl). Metals are shiny and conduct heat and electricity well.

## Exercises

1. Write the symbols: iron, sulfur, sodium, carbon, copper.
2. Name the elements: Mg, Cl, P, Zn, K.
3. Which idea of atomic and molecular theory explains diffusion?
4. What happens to the molecules when water boils?
5. Pick out the metals: O, Al, S, Ca, N, Fe.

## Answers

1. Fe, S, Na, C, Cu.
2. Magnesium, chlorine, phosphorus, zinc, potassium.
3. The particles are always moving.
4. The molecules are kept; the distance between them grows.
5. Al, Ca, Fe.`,
      quiz: [
        ["What is the symbol for iron?", ["Ir", "Fe", "F", "Er"]],
        ["What is an atom?", ["The smallest chemically indivisible particle of a substance", "A group of molecules", "A particle found only in metals", "Part of a crystal"]],
        ["Which element has the symbol Cu?", ["Calcium", "Carbon", "Copper", "Chlorine"]],
        ["Which element is a non-metal?", ["Na", "Al", "S", "Zn"]],
        ["During a chemical reaction:", ["atoms are destroyed", "molecules are kept", "atoms regroup", "nothing changes"]],
      ],
    },
    "relative-masses": {
      objectives: ["Define relative atomic mass", "Find Ar in the periodic table", "Calculate the relative molecular mass of a substance", "Read a chemical formula"],
      content: `## Why relative

Atoms have very small masses (a hydrogen atom is about 1.67·10⁻²⁴ g), so we use the **relative atomic mass**, **Ar**. It shows how many times the mass of an atom is greater than 1/12 of the mass of a carbon-12 atom. Ar has no units.

| Element | Ar (rounded) |
|---|---|
| H | 1 |
| C | 12 |
| N | 14 |
| O | 16 |
| Na | 23 |
| Mg | 24 |
| Al | 27 |
| S | 32 |
| Cl | 35.5 |
| Ca | 40 |
| Fe | 56 |
| Cu | 64 |

## Chemical formula

The formula **H₂O** shows that a water molecule consists of 2 hydrogen atoms and 1 oxygen atom. The small lower number is the **subscript**. In **3H₂O** the number 3 is a **coefficient**: 3 molecules of water.

## Relative molecular mass

**Mr** is the sum of the Ar of all the atoms in a molecule.

**Example 1.** Mr(H₂O) = 2·1 + 16 = 18.

**Example 2.** Mr(CO₂) = 12 + 2·16 = 44.

**Example 3.** Mr(H₂SO₄) = 2·1 + 32 + 4·16 = 98.

**Example 4.** Mr(CaCO₃) = 40 + 12 + 3·16 = 100.

## Exercises

1. Calculate Mr: NaCl, O₂, NH₃, CH₄, Fe₂O₃.
2. What does 5O₂ mean?
3. How many atoms are in the formula Al₂(SO₄)₃?
4. Which has the larger Mr: CO₂ or SO₂?
5. What is Mr(HNO₃)?

## Answers

1. 58.5; 32; 17; 16; 160.
2. 5 molecules of oxygen, each made of 2 atoms.
3. 2 + 3·(1 + 4) = 17 atoms.
4. SO₂ (64 > 44).
5. 1 + 14 + 3·16 = 63.`,
      quiz: [
        ["What is Mr(H₂O)?", ["16", "17", "18", "20"]],
        ["What does a subscript in a formula show?", ["The number of molecules", "The number of atoms of that element in the molecule", "The mass of the element", "The valency"]],
        ["What is Mr(CO₂)?", ["28", "32", "44", "60"]],
        ["How many molecules does 4H₂ stand for?", ["2", "4", "6", "8"]],
        ["What is Mr(NaCl)?", ["23", "35.5", "58.5", "70"]],
      ],
    },
    "simple-complex-valence": {
      objectives: ["Distinguish simple substances and compounds", "Define valency", "Find the valency of an element from a formula", "Write the formula of a binary compound from valencies"],
      content: `## Simple substances and compounds

A **simple substance** is made of atoms of one element: O₂, H₂, Fe, Cu, S.

A **compound** is made of atoms of different elements: H₂O, NaCl, CO₂, CaCO₃.

An element and a simple substance are not the same thing: "oxygen is part of water" (the element), "oxygen is needed for breathing" (the simple substance O₂).

## Valency

**Valency** is the ability of an atom to join a certain number of other atoms. Hydrogen always has valency I, oxygen II. Valency is written in Roman numerals.

| Valency | Elements |
|---|---|
| I | H, Na, K, Cl (with hydrogen) |
| II | O, Mg, Ca, Zn, Ba |
| III | Al |
| variable | Fe (II, III), Cu (I, II), S (II, IV, VI), C (II, IV), N (I–V), P (III, V) |

## Finding valency

In a binary compound, the valency of one element times the number of its atoms equals the same product for the other element.

**Example.** Fe₂O₃. Oxygen: II · 3 = 6. Iron: 6 / 2 = III.

## Writing a formula

1. Write the symbols and valencies: Al(III) and O(II).
2. Find the lowest common multiple: 6.
3. Subscripts: 6 / 3 = 2 (Al), 6 / 2 = 3 (O).
4. Formula: **Al₂O₃**.

## Exercises

1. Sort into simple substances and compounds: N₂, NH₃, Zn, CuO, Cl₂, HCl.
2. Find the valency: CuO, SO₃, PH₃, CO₂.
3. Write the formulas: calcium and oxygen, aluminium and chlorine (I), sulfur (VI) and oxygen.
4. Which sentence is about the simple substance: "Iron is part of blood" or "Nails are made of iron"?

## Answers

1. Simple: N₂, Zn, Cl₂. Compounds: NH₃, CuO, HCl.
2. Cu(II), S(VI), P(III), C(IV).
3. CaO, AlCl₃, SO₃.
4. The second (nails are made of the substance iron).`,
      quiz: [
        ["Which substance is simple?", ["H₂O", "O₂", "CO₂", "NaCl"]],
        ["What is the valency of hydrogen?", ["I", "II", "III", "IV"]],
        ["What is the valency of sulfur in SO₂?", ["II", "IV", "VI", "I"]],
        ["The formula of aluminium oxide is:", ["AlO", "Al₂O", "AlO₃", "Al₂O₃"]],
        ["What is the valency of iron in FeCl₃?", ["I", "II", "III", "VI"]],
      ],
    },
    "mass-fraction-of-element": {
      objectives: ["Define the mass fraction of an element", "Calculate the mass fraction from a formula", "Give the answer as a percentage", "Compare how much of an element different compounds contain"],
      content: `## The formula

The **mass fraction of an element** (ω, "omega") shows what part of a compound's mass is due to that element.

ω(element) = n · Ar(element) / Mr(compound),

where n is the number of atoms of the element in the formula. Multiplying the result by 100 gives a percentage.

## Worked examples

**Example 1. Water H₂O**

Mr = 18. ω(H) = 2 / 18 ≈ 0.111 = 11.1 %. ω(O) = 16 / 18 ≈ 0.889 = 88.9 %. Check: 11.1 + 88.9 = 100 %.

**Example 2. Chalk CaCO₃**

Mr = 100. ω(Ca) = 40 %, ω(C) = 12 %, ω(O) = 48 %.

**Example 3. Which oxide contains more iron: FeO or Fe₂O₃**

FeO: Mr = 72, ω(Fe) = 56 / 72 ≈ 77.8 %.
Fe₂O₃: Mr = 160, ω(Fe) = 112 / 160 = 70 %.
FeO contains more iron.

## Uses

Mass fractions of elements are calculated when a metal is extracted from ore, when choosing a fertiliser (which has more nitrogen) and when assessing what food contains.

## Exercises

1. Calculate ω(O) in CO₂.
2. Calculate ω(Na) in NaCl.
3. Which contains more nitrogen: NH₃ or HNO₃?
4. Calculate ω(S) in SO₃.
5. How many grams of calcium are in 200 g of CaCO₃?

## Answers

1. 32 / 44 ≈ 72.7 %.
2. 23 / 58.5 ≈ 39.3 %.
3. NH₃: 14 / 17 ≈ 82.4 %, HNO₃: 14 / 63 ≈ 22.2 %. NH₃ has more.
4. 32 / 80 = 40 %.
5. 200 · 0.4 = 80 g.`,
      quiz: [
        ["What is the formula for the mass fraction of an element?", ["ω = Mr / Ar", "ω = n · Ar / Mr", "ω = Ar + Mr", "ω = Mr · n"]],
        ["What is ω(Ca) in CaCO₃?", ["12 %", "40 %", "48 %", "60 %"]],
        ["Roughly what is ω(O) in H₂O?", ["11 %", "50 %", "89 %", "16 %"]],
        ["What is ω(S) in SO₃?", ["32 %", "40 %", "50 %", "60 %"]],
        ["How many grams of carbon are in 100 g of CaCO₃?", ["12 g", "40 g", "48 g", "100 g"]],
      ],
    },
    "chemical-equations": {
      objectives: ["State the law of conservation of mass", "Read a chemical equation", "Balance simple equations", "Check an equation by counting atoms"],
      content: `## Law of conservation of mass

The mass of the substances that react equals the mass of the substances formed by the reaction. The law was discovered by **M. Lomonosov** (1748) and **A. Lavoisier** (1789).

The reason: in a reaction atoms are neither created nor destroyed; they only regroup.

## Chemical equation

It is a shorthand record of a reaction using formulas and coefficients.

**2H₂ + O₂ → 2H₂O**

Read it as: "two molecules of hydrogen react with one molecule of oxygen to form two molecules of water". On the left there are 4 H and 2 O, on the right 4 H and 2 O.

## How to balance an equation

**Example.** Al + O₂ → Al₂O₃

1. Oxygen: 2 on the left, 3 on the right. LCM = 6. Put 3 in front of O₂ and 2 in front of Al₂O₃.
2. Al + 3O₂ → 2Al₂O₃. There are 4 aluminium atoms on the right, so put 4 on the left.
3. **4Al + 3O₂ → 2Al₂O₃**. Check: Al 4 = 4, O 6 = 6.

**Never change the subscripts**; change only the coefficients.

## Exercises

Balance the equations:

1. Mg + O₂ → MgO
2. H₂ + Cl₂ → HCl
3. Fe + Cl₂ → FeCl₃
4. CH₄ + O₂ → CO₂ + H₂O
5. 12 g of carbon burned in 32 g of oxygen. How much carbon dioxide formed?

## Answers

1. 2Mg + O₂ → 2MgO
2. H₂ + Cl₂ → 2HCl
3. 2Fe + 3Cl₂ → 2FeCl₃
4. CH₄ + 2O₂ → CO₂ + 2H₂O
5. 12 + 32 = 44 g.`,
      quiz: [
        ["Who discovered the law of conservation of mass?", ["Mendeleev and Butlerov", "Lomonosov and Lavoisier", "Newton and Galileo", "Dalton and Avogadro"]],
        ["Which coefficients are correct: _H₂ + O₂ → _H₂O?", ["1 and 1", "2 and 2", "2 and 1", "1 and 2"]],
        ["What must you not change when balancing an equation?", ["Coefficients", "Subscripts", "The order of the substances", "The position of the arrow"]],
        ["10 g of substance A reacted completely with 5 g of substance B. The mass of the product is:", ["5 g", "10 g", "15 g", "50 g"]],
        ["How many oxygen atoms are on the right side of 4Al + 3O₂ → 2Al₂O₃?", ["3", "4", "6", "12"]],
      ],
    },
    "types-of-reactions": {
      objectives: ["Recognise combination, decomposition, displacement and exchange reactions", "Give an example of each type", "Distinguish exothermic and endothermic reactions", "Classify given equations"],
      content: `## Four main types

| Type | Pattern | Example |
|---|---|---|
| combination | A + B → AB | 2Mg + O₂ → 2MgO |
| decomposition | AB → A + B | 2H₂O → 2H₂ + O₂ (by electric current) |
| displacement | A + BC → AC + B | Fe + CuSO₄ → FeSO₄ + Cu |
| exchange | AB + CD → AD + CB | NaOH + HCl → NaCl + H₂O |

- **Combination**: two or more substances form one compound.
- **Decomposition**: one compound forms two or more substances, for example CaCO₃ → CaO + CO₂ (on heating).
- **Displacement**: the atoms of a simple substance replace one of the atoms in a compound. An iron nail in copper sulfate solution gets coated with red copper.
- **Exchange**: two compounds swap their parts.

## Heat of reaction

- **Exothermic** reactions give off heat (burning).
- **Endothermic** reactions take in heat (decomposition of chalk).

## Exercises

Name the type of reaction:

1. Zn + 2HCl → ZnCl₂ + H₂
2. CaO + H₂O → Ca(OH)₂
3. 2KMnO₄ → K₂MnO₄ + MnO₂ + O₂
4. BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl
5. Is the burning of methane exothermic or endothermic?

## Answers

1. Displacement.
2. Combination.
3. Decomposition.
4. Exchange.
5. Exothermic.`,
      quiz: [
        ["The reaction 2Mg + O₂ → 2MgO is:", ["decomposition", "combination", "displacement", "exchange"]],
        ["The reaction CaCO₃ → CaO + CO₂ is:", ["combination", "decomposition", "displacement", "exchange"]],
        ["The reaction Fe + CuSO₄ → FeSO₄ + Cu is:", ["displacement", "combination", "decomposition", "exchange"]],
        ["In which reactions is heat taken in?", ["Exothermic", "Endothermic", "Burning", "All of them"]],
        ["The reaction NaOH + HCl → NaCl + H₂O is:", ["combination", "decomposition", "displacement", "exchange"]],
      ],
    },
    "oxygen-and-combustion": {
      objectives: ["Describe the properties of oxygen", "Explain how oxygen is obtained", "Define combustion and oxides", "Know the conditions for burning and how to put out a fire"],
      content: `## Oxygen in nature

Oxygen is the most common element in the Earth's crust (about 49 % by mass). About **21 %** of the volume of air is oxygen, O₂. Plants release oxygen during **photosynthesis**.

## Properties

**Physical**: a colourless, odourless gas, slightly heavier than air, slightly soluble in water, liquefies at −183 °C (a pale blue liquid).

**Chemical**: reacts readily with simple substances and compounds:

- C + O₂ → CO₂
- S + O₂ → SO₂
- 4P + 5O₂ → 2P₂O₅
- 2Mg + O₂ → 2MgO (bright white light)
- 3Fe + 2O₂ → Fe₃O₄ (sparks)
- CH₄ + 2O₂ → CO₂ + 2H₂O

## Obtaining it in the lab

2KMnO₄ → K₂MnO₄ + MnO₂ + O₂ (on heating),
2H₂O₂ → 2H₂O + O₂ (with MnO₂ as a catalyst).

Oxygen is collected over water or by displacing air with the container held mouth up. It is identified with a **glowing splint**, which bursts into flame in oxygen.

## Combustion and oxides

**Combustion** is the reaction of a substance with oxygen that gives off light and heat. **Oxides** are binary compounds in which one of the elements is oxygen: CO₂, CuO, Al₂O₃, H₂O.

**Conditions for burning**: a fuel, oxygen and the ignition temperature. A fire is put out by cutting off oxygen (sand, a blanket, an extinguisher) or by cooling (water).

## Exercises

1. Write the equations for burning sulfur and carbon.
2. How can you prove that a container holds oxygen?
3. Why must burning electrical appliances not be put out with water?
4. Which substances are oxides: CO, H₂SO₄, MgO, NaCl, SO₃?
5. Why is oxygen collected with the container held mouth up?

## Answers

1. S + O₂ → SO₂, C + O₂ → CO₂.
2. A glowing splint bursts into flame.
3. Water conducts electricity.
4. CO, MgO, SO₃.
5. Oxygen is heavier than air.`,
      quiz: [
        ["Roughly what part of the volume of air is oxygen?", ["78 %", "21 %", "1 %", "50 %"]],
        ["How is oxygen identified?", ["With limewater", "A glowing splint bursts into flame", "By its smell", "By its colour"]],
        ["Which substance is an oxide?", ["H₂SO₄", "NaOH", "CuO", "KCl"]],
        ["Which is not a condition for burning?", ["A fuel", "Oxygen", "The ignition temperature", "Water"]],
        ["Which reaction is used to obtain oxygen in the lab?", ["2KMnO₄ → K₂MnO₄ + MnO₂ + O₂", "C + O₂ → CO₂", "Zn + 2HCl → ZnCl₂ + H₂", "CaO + H₂O → Ca(OH)₂"]],
      ],
    },
    "hydrogen-and-water": {
      objectives: ["Describe the properties and preparation of hydrogen", "Explain the danger of an explosive hydrogen–oxygen mixture", "Describe the composition and properties of water", "Know how water is purified"],
      content: `## Hydrogen

Hydrogen is the most common element in the Universe. On Earth it is mostly found in water. The simple substance **H₂** is the lightest gas (about 14.5 times lighter than air), colourless and odourless.

**Preparation in the lab**: Zn + 2HCl → ZnCl₂ + H₂↑

Hydrogen is collected with the container held mouth down.

**Chemical properties**

- It burns in oxygen: 2H₂ + O₂ → 2H₂O. A mixture of hydrogen and oxygen (2 : 1 by volume) is called **oxyhydrogen** and it explodes. That is why hydrogen is **tested for purity** before it is lit.
- It reduces metals from their oxides: CuO + H₂ → Cu + H₂O.

**Uses**: clean fuel (the product of burning is water), making ammonia and margarine, rocket fuel.

## Water

The water molecule is **H₂O**. About 71 % of the Earth's surface is covered by water, but fresh water makes up only about 2.5 %.

**Physical properties**: a colourless liquid with no smell or taste, freezes at 0 °C, boils at 100 °C. Water is densest at 4 °C, and ice is lighter than water, so lakes do not freeze to the bottom in winter.

**Chemical properties**

- with active metals: 2Na + 2H₂O → 2NaOH + H₂↑,
- with some oxides: CaO + H₂O → Ca(OH)₂, SO₃ + H₂O → H₂SO₄,
- it is decomposed by electric current: 2H₂O → 2H₂ + O₂.

**Water purification**: settling, filtration, chlorination or ozonation. Distilled water is a pure substance.

Lake Sevan is Armenia's largest store of fresh water, and it must be protected from pollution.

## Exercises

1. Write the equation for the reaction of zinc with hydrochloric acid.
2. Why is hydrogen collected with the container held mouth down?
3. Why is hydrogen considered a clean fuel?
4. Write the reaction of calcium oxide with water.
5. Why don't fish get frozen into the ice of a lake in winter?

## Answers

1. Zn + 2HCl → ZnCl₂ + H₂.
2. Hydrogen is lighter than air.
3. Burning it produces only water.
4. CaO + H₂O → Ca(OH)₂.
5. Ice is lighter than water and stays on top, and the water at the bottom is at 4 °C.`,
      quiz: [
        ["Which gas is the lightest?", ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"]],
        ["What is oxyhydrogen?", ["A mixture of hydrogen and oxygen", "Pure oxygen", "Carbon dioxide", "Air"]],
        ["What forms when hydrogen burns?", ["CO₂", "Water", "Soot", "SO₂"]],
        ["At what temperature is water densest?", ["0 °C", "4 °C", "20 °C", "100 °C"]],
        ["What forms when sodium reacts with water?", ["NaCl and O₂", "NaOH and H₂", "Na₂O and H₂", "Only hydrogen"]],
      ],
    },
  },
};
