import type { RuLesson } from "../../ru-overlay";

export const enExtra8: Record<string, RuLesson> = {
  "equation-calculations": {
    objectives: ["Explain what the coefficients of an equation show", "Find the mass of a product from the mass of a reactant", "Find the volume of a gas from an equation", "Use the four steps of a calculation"],
    content: `## What the coefficients say

The equation **2H₂ + O₂ → 2H₂O** can be read in three ways:

- 2 molecules of hydrogen + 1 molecule of oxygen → 2 molecules of water;
- **2 mol** H₂ + **1 mol** O₂ → **2 mol** H₂O;
- 4 g H₂ + 32 g O₂ → 36 g H₂O (mass is conserved).

The coefficients give the ratio of **moles**, not of grams. So every calculation goes through moles.

## Four steps

1. Write and balance the equation.
2. Turn the mass (or volume) of the given substance into moles: n = m / M or n = V / 22.4.
3. Use the coefficients to find the moles of the substance you want.
4. Turn moles into mass (m = n · M) or volume (V = n · 22.4).

## Worked examples

**1. Mass to mass.** How much calcium oxide comes from 50 g of limestone?

CaCO₃ → CaO + CO₂. n(CaCO₃) = 50 / 100 = 0.5 mol. The coefficients are 1 : 1, so n(CaO) = 0.5 mol. m(CaO) = 0.5 · 56 = **28 g**.

**2. Mass to volume.** What volume of hydrogen (STP) is given off when 5.4 g of aluminium dissolves in hydrochloric acid?

2Al + 6HCl → 2AlCl₃ + 3H₂. n(Al) = 5.4 / 27 = 0.2 mol. The ratio Al : H₂ = 2 : 3, so n(H₂) = 0.2 · 3 / 2 = 0.3 mol. V = 0.3 · 22.4 = **6.72 L**.

**3. Volume to mass.** How much water forms when 11.2 L (STP) of methane burns?

CH₄ + 2O₂ → CO₂ + 2H₂O. n(CH₄) = 11.2 / 22.4 = 0.5 mol, n(H₂O) = 2 · 0.5 = 1 mol, m = **18 g**.

## Why grams cannot be compared

A wrong argument: "2Al gives 3H₂, so 5.4 g of aluminium gives 5.4 · 3 / 2 = 8.1 g of hydrogen." The coefficients are about particles, and an aluminium atom is 13.5 times heavier than a hydrogen molecule. The right answer is 0.3 mol · 2 g/mol = 0.6 g.

## Exercises

1. How much copper is obtained when 8 g of CuO is reduced by hydrogen (CuO + H₂ → Cu + H₂O)?
2. What volume of oxygen (STP) is needed to burn 12 g of carbon?
3. How much water forms when 4 g of hydrogen burns?
4. How much zinc is needed to make 4.48 L of hydrogen (STP) (Zn + 2HCl → ZnCl₂ + H₂)?
5. What volume of CO₂ (STP) is given off when 10 g of CaCO₃ decomposes?

## Answers

1. n(CuO) = 8 / 80 = 0.1 mol, m(Cu) = 0.1 · 64 = 6.4 g.
2. n(C) = 1 mol = n(O₂), V = 22.4 L.
3. n(H₂) = 2 mol = n(H₂O), m = 36 g.
4. n(H₂) = 0.2 mol = n(Zn), m = 0.2 · 65 = 13 g.
5. n = 0.1 mol, V = 2.24 L.`,
    quiz: [
      ["What do the coefficients of an equation show?", ["The ratio of the masses", "The ratio of the amounts (moles)", "The densities", "The rate of the reaction"]],
      ["CaCO₃ → CaO + CO₂. How many moles of CaO come from 2 mol of CaCO₃?", ["1", "2", "4", "0.5"]],
      ["2Al + 6HCl → 2AlCl₃ + 3H₂. How many moles of H₂ come from 0.2 mol of Al?", ["0.2", "0.3", "0.6", "0.1"]],
      ["What volume does 0.5 mol of hydrogen take up (STP)?", ["5.6 L", "11.2 L", "22.4 L", "44.8 L"]],
      ["What is the first step of a calculation?", ["Write and balance the equation", "Add up the masses", "Multiply by 22.4", "Find the density"]],
    ],
  },

  "crystal-hydrates": {
    objectives: ["Read a solubility curve", "Calculate how much substance crystallises on cooling", "Explain what crystal hydrates are", "Find the share of water in a crystal hydrate"],
    content: `## The solubility curve

**Solubility** (S) shows how many grams of a substance can dissolve in **100 g of water** at a given temperature. A graph with temperature along the bottom and S up the side is a **solubility curve**.

| Substance | 0 °C | 20 °C | 40 °C | 60 °C | 80 °C |
|---|---|---|---|---|---|
| KNO₃ | 13 | 32 | 64 | 110 | 169 |
| NaCl | 35.7 | 35.9 | 36.4 | 37.1 | 38.0 |
| CuSO₄ | 14 | 20 | 29 | 40 | 55 |

The curve for KNO₃ climbs steeply, the curve for NaCl is almost flat.

## Crystallising by cooling

When a hot saturated solution is cooled, the solubility falls and the "extra" substance comes out as crystals. This is how substances are purified (**recrystallisation**): impurities are few and stay in the solution.

**Example.** At 60 °C, 110 g of KNO₃ is dissolved in 100 g of water (saturated). It is cooled to 20 °C. Only 32 g can stay dissolved, so 110 − 32 = **78 g** of KNO₃ crystallises.

NaCl cannot be purified like this, because its solubility hardly changes; salt is obtained by **evaporating** the water (in salt pans of sea water).

## Crystal hydrates

Some substances crystallise together with water molecules, which become part of the crystal. These are **crystal hydrates**, and the water is **water of crystallisation**.

- **CuSO₄·5H₂O**: blue copper sulfate crystals. Anhydrous CuSO₄ is a white powder.
- **Na₂CO₃·10H₂O**: washing soda.
- **CaSO₄·2H₂O**: gypsum.

Blue copper sulfate turns white when heated: CuSO₄·5H₂O → CuSO₄ + 5H₂O. Add water to the white powder and it turns blue again; this is a test for water in organic liquids. So the blue colour comes not from copper itself but from the copper ion surrounded by water.

## The share of water in a crystal hydrate

M(CuSO₄·5H₂O) = 160 + 5 · 18 = 250 g/mol. ω(H₂O) = 90 / 250 = 0.36 = **36 %**.

**How much blue copper sulfate is needed to make 200 g of an 8 % CuSO₄ solution?** We need m(CuSO₄) = 200 · 0.08 = 16 g. In the crystals the share of CuSO₄ is 160 / 250 = 0.64, so we need 16 / 0.64 = **25 g** of crystals and 175 g of water.

## Exercises

1. Using the table: how much KNO₃ dissolves in 200 g of water at 40 °C?
2. A solution saturated at 80 °C (100 g of water + 169 g of KNO₃) is cooled to 40 °C. How much salt crystallises?
3. Why is table salt not purified by cooling?
4. Why does blue copper sulfate turn white when heated?
5. Find the mass fraction of water in gypsum, CaSO₄·2H₂O.

## Answers

1. 2 · 64 = 128 g.
2. 169 − 64 = 105 g.
3. Its solubility hardly depends on temperature.
4. It loses its water of crystallisation, and anhydrous CuSO₄ is white.
5. M = 136 + 36 = 172, ω = 36 / 172 ≈ 20.9 %.`,
    quiz: [
      ["What does solubility show?", ["How many grams dissolve in 100 g of water at a given temperature", "How many minutes a substance takes to dissolve", "The mass of the solution", "The colour of the solution"]],
      ["Whose solubility depends most on temperature?", ["NaCl", "KNO₃", "Water", "Sand"]],
      ["What is CuSO₄·5H₂O called?", ["Limestone", "Blue copper sulfate (blue vitriol)", "Gypsum", "Soda"]],
      ["Why does blue copper sulfate turn white when heated?", ["It burns", "It loses its water of crystallisation", "Copper separates out", "It takes in oxygen"]],
      ["What is the share of water in CuSO₄·5H₂O?", ["5 %", "18 %", "36 %", "64 %"]],
    ],
  },

  "amphoteric-hydroxides": {
    objectives: ["Define amphoterism", "Write the reactions of Al(OH)₃ and Zn(OH)₂ with acids and alkalis", "Make an amphoteric hydroxide and explain why the alkali is added drop by drop", "Explain amphoterism by the element's place in the periodic table"],
    content: `## What amphoterism is

**Amphoteric** (Greek for "both") oxides and hydroxides react **with both acids and alkalis**. With an acid they behave as a base, with an alkali as an acid.

The oxides and hydroxides of **aluminium, zinc, beryllium** and **chromium(III)** are amphoteric: Al₂O₃, Al(OH)₃, ZnO, Zn(OH)₂, BeO, Cr₂O₃.

## Making an amphoteric hydroxide

An alkali is added **drop by drop** to a solution of an aluminium salt:

AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl

A white jelly-like precipitate forms. If too much alkali is added, the precipitate dissolves again (see below). That is why the alkali is added carefully.

## Reactions with acids (as a base)

- Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O
- Zn(OH)₂ + 2HNO₃ → Zn(NO₃)₂ + 2H₂O
- ZnO + 2HCl → ZnCl₂ + H₂O

## Reactions with alkalis (as an acid)

**In solution** complex salts form:

- Al(OH)₃ + NaOH → Na[Al(OH)₄] (sodium tetrahydroxoaluminate)
- Zn(OH)₂ + 2NaOH → Na₂[Zn(OH)₄]

**When fused** ordinary salts and water form:

- Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O (sodium aluminate)
- ZnO + 2NaOH → Na₂ZnO₂ + H₂O (sodium zincate)

A trick for the acid side: Al(OH)₃ can be written as H₃AlO₃, and after losing water as HAlO₂. The salts of this "acid" are the aluminates.

## Why these elements are amphoteric

Amphoterism is the border between metals and non-metals. In the periodic table amphoteric elements sit near the line that separates metals from non-metals (Be, Al, Zn, Ge...). Their bond with oxygen is neither fully ionic nor fully covalent, so the oxide can "play" for both sides.

Alkaline solutions (for example hot soda solution) must not be kept in aluminium pans: the protective oxide film dissolves in the alkali and the metal starts to corrode.

## Exercises

1. What is amphoterism? Name three amphoteric oxides.
2. Write the reaction of Al(OH)₃ with sulfuric acid.
3. Write the reaction of Zn(OH)₂ with NaOH solution.
4. Why is the alkali added drop by drop when Al(OH)₃ is made?
5. Why must an alkaline solution not be kept in an aluminium pan?

## Answers

1. The ability to react with both acids and alkalis: Al₂O₃, ZnO, BeO (or Cr₂O₃).
2. 2Al(OH)₃ + 3H₂SO₄ → Al₂(SO₄)₃ + 6H₂O.
3. Zn(OH)₂ + 2NaOH → Na₂[Zn(OH)₄].
4. Excess alkali would dissolve the precipitate, forming Na[Al(OH)₄].
5. The alkali dissolves the protective film of aluminium oxide.`,
    quiz: [
      ["Which hydroxide is amphoteric?", ["NaOH", "Ca(OH)₂", "Al(OH)₃", "KOH"]],
      ["What forms in solution in the reaction Al(OH)₃ + NaOH?", ["Al₂O₃", "Na[Al(OH)₄]", "AlCl₃", "Al"]],
      ["What happens to an Al(OH)₃ precipitate if excess alkali is added?", ["It dissolves", "It turns black", "It explodes", "Nothing"]],
      ["What forms when ZnO is fused with NaOH?", ["Zn(OH)₂", "Na₂ZnO₂ and water", "ZnCl₂", "Zn and Na₂O"]],
      ["Where are amphoteric elements in the periodic table?", ["Next to the noble gases", "Near the line between metals and non-metals", "Only in group 1", "Only in the last period"]],
    ],
  },

  "crystal-lattices": {
    objectives: ["Name the four types of crystal lattice", "Link the type of lattice to the type of bond", "Predict a substance's lattice from its properties", "Explain why metals are malleable and salts brittle"],
    content: `## What a crystal lattice is

In most solids the particles are arranged in a strict, regular three-dimensional order. This order is called a **crystal lattice**, and the places of the particles are its **lattice points**. Depending on which particles sit at the lattice points, there are four types.

| Lattice | At the points | Bond between points | Examples |
|---|---|---|---|
| ionic | positive and negative ions | ionic | NaCl, CaO, KNO₃ |
| atomic (giant covalent) | atoms | covalent | diamond, silicon, SiO₂ (sand, quartz) |
| molecular | molecules | weak forces between molecules | ice, iodine, sugar, dry ice (CO₂) |
| metallic | metal ions and free electrons | metallic | Fe, Cu, Al |

## Properties by lattice

- **Atomic**: every atom is bonded firmly to its neighbours, and the whole crystal is one giant "molecule". Very hard, melt at very high temperatures (quartz about 1700 °C, diamond above 3500 °C), do not dissolve in water.
- **Ionic**: hard but brittle, high melting points (NaCl 801 °C), many dissolve in water, melts and solutions conduct electricity.
- **Molecular**: the bonds inside molecules are strong, but those between molecules are weak. So they melt easily, evaporate easily and often smell (iodine turns straight to vapour on heating, mothballs have a smell).
- **Metallic**: lustre, conduct heat and electricity, malleable.

## Why a metal bends and a salt shatters

In a metal the positive ions "float" in a "sea" of free electrons. When a metal is hammered, the layers of ions slide, but the electron sea keeps holding them: the metal changes shape without breaking.

In a salt crystal positive and negative ions alternate. If a layer shifts by one ion, like charges end up face to face, repel each other, and the crystal cracks.

## How to guess the lattice

**Example.** A white substance melts at 770 °C, dissolves in water, and its solution conducts electricity. High melting point + conducting solution → **ionic** lattice (it is KCl).

**Example.** A substance melts at 114 °C and gives violet vapour on heating. Low melting point, volatile → **molecular** lattice (it is iodine).

## Exercises

1. What lattice does each have: a) table salt, b) ice, c) diamond, d) copper?
2. Why does dry ice (solid CO₂) turn to gas at −78 °C, while quartz (SiO₂) melts at about 1700 °C?
3. Why does solid NaCl not conduct electricity, while its solution does?
4. A substance is very hard, melts above 2000 °C, does not dissolve in water and does not conduct electricity. What lattice does it have?
5. Why does copper wire bend while a salt crystal crumbles?

## Answers

1. a) ionic, b) molecular, c) atomic, d) metallic.
2. In dry ice the CO₂ molecules are held by weak forces; in quartz all the atoms are joined by strong covalent bonds.
3. In a solid crystal the ions cannot move; in solution they can.
4. Atomic.
5. In a metal layers of ions slide while the electron sea holds them; in a salt a shift puts like charges face to face.`,
    quiz: [
      ["What lattice does table salt have?", ["Atomic", "Ionic", "Molecular", "Metallic"]],
      ["Which substance has an atomic lattice?", ["Ice", "Iodine", "Quartz, SiO₂", "Sugar"]],
      ["Why do substances with a molecular lattice melt easily?", ["The forces between molecules are weak", "They are light", "They have no bonds", "They are metals"]],
      ["Why is a metal malleable?", ["Its atoms are very small", "Layers of ions slide while the electron sea holds them", "It contains water", "Its lattice is molecular"]],
      ["A substance melts at 801 °C and its solution conducts electricity. What is its lattice?", ["Ionic", "Molecular", "Atomic", "Metallic"]],
    ],
  },

  "element-families": {
    objectives: ["Describe the shared properties of alkali metals, halogens and noble gases", "Explain why the reactivity of alkali metals increases down the group", "Explain why the reactivity of halogens decreases down the group", "Predict the properties of an unknown element of a group"],
    content: `## Why elements form "families"

Elements of one group have the **same** number of electrons in the outer shell, so they react alike. At the same time the atom gets bigger down the group, and the properties change in a **regular** way. Three families show this most clearly.

## Alkali metals (group 1): Li, Na, K, Rb, Cs

- One outer electron, easily given away; always +1 in compounds.
- Soft (cut with a knife), light, shiny only on a fresh cut. Kept under paraffin oil because they oxidise quickly in air.
- With water they give an alkali and hydrogen: 2Na + 2H₂O → 2NaOH + H₂↑.

| Metal | With water |
|---|---|
| Li | fizzes steadily |
| Na | races about on the surface, melts into a ball |
| K | catches fire with a lilac flame |
| Cs | explodes |

**Why reactivity increases.** Down the group electron shells are added; the outer electron is further and further from the nucleus and is "shielded" from its pull by the inner shells. It is held more weakly and lost more easily.

## Halogens (group 7): F, Cl, Br, I

- Seven outer electrons, one short: they easily gain an electron and form salts with metals ("halogen" means "salt-maker").
- Diatomic molecules: F₂, Cl₂, Br₂, I₂. Down the group the colour darkens and the state changes: F₂ and Cl₂ are gases, Br₂ a liquid, I₂ a solid.

**Why reactivity decreases.** A halogen has to **gain** an electron. In a small atom (F) the new electron is close to the nucleus and strongly attracted; in a large one (I), weakly. So fluorine is the most reactive non-metal and iodine the weakest of the four. An experiment shows it: a more reactive halogen displaces a less reactive one from its salt: Cl₂ + 2KBr → 2KCl + Br₂ (the solution turns yellow-brown), while I₂ does not react with KBr.

## Noble gases (group 0): He, Ne, Ar, Kr, Xe

The outer shell is full, so they hardly react at all. They are used where an "unreactive" atmosphere is needed: argon in filament lamps and in welding, helium in airships and balloons (it does not burn, unlike hydrogen), neon in advertising lights.

## Prediction

Rubidium (Rb) lies below potassium. We can predict: more reactive than K, it will react explosively with water, its hydroxide RbOH is a strong alkali and its chloride is RbCl. All of this is true.

## Exercises

1. Why are alkali metals kept under paraffin oil?
2. Why is potassium more reactive than sodium?
3. Will these reactions happen: a) Br₂ + 2KI, b) I₂ + 2KCl? Write them if so.
4. Why is fluorine the most reactive non-metal?
5. Predict the state and colour of astatine (At).

## Answers

1. In air they react quickly with oxygen and moisture.
2. Its outer electron is further from the nucleus and held more weakly.
3. a) Yes: Br₂ + 2KI → 2KBr + I₂; b) no, iodine is less reactive than chlorine.
4. Its atom is the smallest in the group, and the electron it gains is strongly attracted by the nucleus.
5. Solid and dark (almost black), because the colour darkens down the group and iodine is already a solid.`,
    quiz: [
      ["How many outer electrons do halogens have?", ["1", "2", "7", "8"]],
      ["Which of these alkali metals is the most reactive?", ["Li", "Na", "K", "Cs"]],
      ["Why does the reactivity of alkali metals increase down the group?", ["The outer electron is further from the nucleus and held more weakly", "The atoms get lighter", "The number of outer electrons grows", "The nuclear charge falls"]],
      ["Which reaction will happen?", ["I₂ + 2KCl", "Cl₂ + 2KBr", "Br₂ + 2KCl", "I₂ + 2KBr"]],
      ["Why do noble gases hardly react?", ["They are very heavy", "Their outer shell is full", "They are metals", "They dissolve in water"]],
    ],
  },
};
