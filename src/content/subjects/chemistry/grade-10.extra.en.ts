import type { RuLesson } from "../../ru-overlay";

export const enExtra10: Record<string, RuLesson> = {
  "isomerism-types": {
    objectives: ["Tell structural isomerism from spatial isomerism", "Write chain, position and class isomers for a given formula", "Explain cis–trans and optical isomerism", "Count the isomers of small formulas"],
    content: `## Same atoms, different molecules

**Isomers** have the same molecular formula but a different structure, and therefore different properties. There are two big kinds of isomerism.

## Structural isomerism

The atoms are joined in a different order.

| Kind | What differs | Example |
|---|---|---|
| chain | the carbon skeleton | butane CH₃–CH₂–CH₂–CH₃ and 2-methylpropane CH₃–CH(CH₃)–CH₃ |
| position | where a group or multiple bond sits | propan-1-ol CH₃–CH₂–CH₂OH and propan-2-ol CH₃–CH(OH)–CH₃, but-1-ene and but-2-ene |
| class | the functional group itself | ethanol C₂H₅OH and dimethyl ether CH₃–O–CH₃, propanal and acetone |

Pairs of classes that share one general formula:

- CₙH₂ₙ: alkenes and cycloalkanes
- CₙH₂ₙ₋₂: alkynes and alkadienes
- CₙH₂ₙ₊₂O: alcohols and ethers
- CₙH₂ₙO: aldehydes and ketones
- CₙH₂ₙO₂: carboxylic acids and esters

## Spatial isomerism

The order of the atoms is the same, but their arrangement in space differs.

- **Cis–trans isomerism.** Around a double bond (or in a ring) groups cannot rotate. In cis-but-2-ene both CH₃ groups are on the same side; in the trans form they are on opposite sides. The condition: each carbon of the double bond must carry two different groups. Propene, CH₂=CH–CH₃, has no cis–trans isomers, because one of its carbons carries two identical H atoms.
- **Optical isomerism.** A carbon with four different groups (a chiral centre) gives two molecules that are mirror images of each other, like your left and right hands. Lactic acid, CH₃–CH(OH)–COOH, is an example. Mirror isomers melt at the same temperature, but they rotate polarised light in opposite directions and can act very differently in the body.

## How to find all the isomers of C₅H₁₂

1. The longest chain, 5 atoms: pentane.
2. A chain of 4 with one CH₃ branch: 2-methylbutane (a branch on carbon 3 is the same molecule numbered from the other end).
3. A chain of 3 with two branches: 2,2-dimethylpropane.

Answer: 3 isomers. Always check that a "new" structure is not an old one turned around.

## Exercises

1. What kind of isomers are butane and 2-methylpropane?
2. Write an isomer of a different class for propanal, CH₃CH₂CHO.
3. Does but-1-ene have cis–trans isomers? Why?
4. How many structural isomers does C₅H₁₂ have?
5. Which general formula do carboxylic acids and esters share?

## Answers

1. Chain isomers (a different skeleton).
2. Acetone, CH₃–CO–CH₃.
3. No: its first carbon carries two hydrogens, CH₂=.
4. Three: pentane, 2-methylbutane, 2,2-dimethylpropane.
5. CₙH₂ₙO₂.`,
    quiz: [
      ["What do isomers have in common?", ["The molecular formula", "The structure", "The properties", "The boiling point"]],
      ["What kind of isomers are ethanol and dimethyl ether?", ["Chain", "Position of a group", "Different classes", "Mirror"]],
      ["Which substance has cis–trans isomers?", ["Propene", "But-2-ene", "Ethene", "But-1-ene"]],
      ["Which class is isomeric with the alkenes?", ["Alkanes", "Alkynes", "Cycloalkanes", "Arenes"]],
      ["Which carbon atom makes a molecule chiral?", ["One carrying four different groups", "One in a double bond", "One in a ring", "One carrying three hydrogens"]],
    ],
  },
  cycloalkanes: {
    objectives: ["Know the general formula and names of cycloalkanes", "Explain ring strain using bond angles", "Compare the reactions of small and large rings", "Name some uses of cycloalkanes"],
    content: `## Closed chains

**Cycloalkanes** are saturated hydrocarbons whose carbon chain is closed into a ring. Their general formula is **CₙH₂ₙ**, the same as that of the alkenes, so the two classes are isomers.

| Name | Formula | Ring |
|---|---|---|
| cyclopropane | C₃H₆ | triangle |
| cyclobutane | C₄H₈ | square |
| cyclopentane | C₅H₁₀ | pentagon |
| cyclohexane | C₆H₁₂ | hexagon |

## Ring strain

A carbon atom with four single bonds "wants" an angle of 109.5°. In a flat triangle the angle is 60°, in a square 90°: the bonds are bent like a squeezed spring and store energy. In 1885 A. Baeyer called this **angle strain**. So cyclopropane and cyclobutane react like alkenes, opening the ring:

- C₃H₆ + H₂ → C₃H₈ (Ni, 80 °C)
- C₃H₆ + Br₂ → CH₂Br–CH₂–CH₂Br

Cyclohexane is not flat: it folds into a "chair" shape in which every angle is 109.5°. It has no strain and behaves like an alkane. Its typical reaction is substitution: C₆H₁₂ + Cl₂ → C₆H₁₁Cl + HCl (light).

## Evidence from heats of combustion

In long open-chain alkanes each CH₂ group gives about 658 kJ when it burns; in cyclohexane almost the same (653 kJ). In cyclopropane each CH₂ gives 697 kJ. The extra 39 kJ or so per CH₂ (about 115 kJ per molecule) is the strain energy stored in the bent bonds.

## Making and using them

- Cyclohexane is made from benzene: C₆H₆ + 3H₂ → C₆H₁₂ (Ni). It is a raw material for nylon.
- Cycloalkanes (naphthenes) make up a large part of some kinds of oil.
- Cyclopropane was once used as an anaesthetic.

## Exercises

1. What is the general formula of cycloalkanes? Cyclobutane is an isomer of which class?
2. Why does cyclopropane decolourise bromine water while cyclohexane does not?
3. Write the equation for the hydrogenation of cyclopropane.
4. What is the angle in a flat cyclobutane ring, and how far is it from 109.5°?
5. How can cyclohexane be made from benzene?

## Answers

1. CₙH₂ₙ; the alkenes (butenes).
2. The cyclopropane ring is highly strained and opens easily; cyclohexane has no strain.
3. C₃H₆ + H₂ → C₃H₈ (Ni, heating).
4. 90°, about 19.5° smaller.
5. By hydrogenation: C₆H₆ + 3H₂ → C₆H₁₂ (Ni).`,
    quiz: [
      ["What is the general formula of cycloalkanes?", ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₋₆"]],
      ["Which ring is the most strained?", ["Cyclopropane", "Cyclopentane", "Cyclohexane", "All are the same"]],
      ["In light, cyclohexane reacts with chlorine by…", ["addition", "substitution", "polymerisation", "hydration"]],
      ["Cyclobutane is an isomer of which substance?", ["Butane", "But-1-ene", "Butyne", "Benzene"]],
      ["Why does cyclohexane have no strain?", ["The ring folds into a \"chair\" and the angles are 109.5°", "It has double bonds", "It is flat", "It is aromatic"]],
    ],
  },
  "halogen-derivatives": {
    objectives: ["Name halogen derivatives and describe how they are made", "Write substitution and elimination reactions with alkali", "Explain how freons destroy ozone", "Name uses and dangers of halogen derivatives"],
    content: `## What they are

Replace a hydrogen in a hydrocarbon by a halogen, and you get a **halogen derivative**:

| Formula | Name |
|---|---|
| CH₃Cl | chloromethane |
| CH₂Cl₂ | dichloromethane |
| CHCl₃ | trichloromethane (chloroform) |
| CCl₄ | tetrachloromethane |
| C₂H₅Br | bromoethane |
| CH₂=CHCl | chloroethene (vinyl chloride) |

The C–Hal bond is polar: the halogen pulls the electrons, and the carbon gets a partial positive charge (δ+).

## How they are made

- from alkanes, by substitution in light: CH₄ + Cl₂ → CH₃Cl + HCl
- from alkenes, by addition: CH₂=CH₂ + HBr → C₂H₅Br
- from alcohols: C₂H₅OH + HBr → C₂H₅Br + H₂O
- from acetylene: HC≡CH + HCl → CH₂=CHCl

## Reactions

Because the carbon is δ+, the halogen can be replaced by an OH group. With an **aqueous solution of alkali**:

C₂H₅Br + NaOH → C₂H₅OH + NaBr (an alcohol)

When heated with an **alcoholic solution of alkali**, HBr is removed:

C₂H₅Br + KOH → CH₂=CH₂ + KBr + H₂O (an alkene)

Remember: water solution gives an alcohol, alcohol solution gives an alkene. The **Wurtz reaction** makes the chain longer: 2CH₃Br + 2Na → C₂H₆ + 2NaBr.

## Useful substances

- **Polyvinyl chloride** (PVC), made from vinyl chloride: pipes, window frames, floor coverings.
- **Teflon**, (–CF₂–CF₂–)ₙ: non-stick pans. The C–F bond is one of the strongest (485 kJ/mol), so nothing sticks to Teflon and almost nothing reacts with it.
- **Chloroform** was one of the first anaesthetics (1847), but it was later found to damage the liver.

## Freons and ozone

**Freons** (for example CF₂Cl₂) were ideal refrigerants: non-toxic, non-flammable and inert. Their inertness was the problem: they reached the stratosphere unchanged. There ultraviolet light knocks off a Cl atom, which starts a chain:

Cl· + O₃ → ClO· + O₂
ClO· + O → Cl· + O₂

One chlorine atom can destroy about 100 000 ozone molecules. The ozone hole over Antarctica was discovered in 1985, the Montreal Protocol (1987) banned freons, and the ozone layer is slowly recovering. It is the same kind of radical chain as in the chlorination of methane.

## Exercises

1. What forms when bromoethane reacts with an aqueous solution of NaOH?
2. What forms when bromoethane is heated with an alcoholic solution of KOH?
3. How can vinyl chloride be made from acetylene?
4. Why is Teflon non-stick and chemically stable?
5. Why can one chlorine atom destroy thousands of ozone molecules?

## Answers

1. Ethanol and NaBr.
2. Ethene, KBr and water.
3. HC≡CH + HCl → CH₂=CHCl.
4. The C–F bond is very strong.
5. The reaction is a chain: after each cycle the chlorine atom comes back.`,
    quiz: [
      ["What forms from C₂H₅Br with an aqueous solution of NaOH?", ["Ethanol", "Ethene", "Ethane", "Acetic acid"]],
      ["What forms when C₂H₅Br is heated with an alcoholic solution of KOH?", ["Ethanol", "Ethene", "Ethyne", "Butane"]],
      ["Which polymer is made from vinyl chloride?", ["Polyethylene", "Polyvinyl chloride", "Teflon", "Rubber"]],
      ["Why did freons destroy ozone?", ["Ultraviolet light knocks Cl atoms off them, and these start a chain", "They are poisonous", "They burn", "They are heavy"]],
      ["What is the formula of chloroform?", ["CH₃Cl", "CH₂Cl₂", "CHCl₃", "CCl₄"]],
    ],
  },
  "organic-formula-problems": {
    objectives: ["Find the simplest formula from mass fractions", "Find the molar mass from relative density or gas density", "Work out a formula from the products of combustion", "Check the answer"],
    content: `## Step 1: from mass fractions to the simplest formula

Example: a hydrocarbon contains 85.7 % C and 14.3 % H. In 100 g of it there are 85.7 g of C and 14.3 g of H.

- n(C) = 85.7 / 12 = 7.14 mol
- n(H) = 14.3 / 1 = 14.3 mol
- C : H = 7.14 : 14.3 = 1 : 2

The simplest formula is CH₂ (M = 14).

## Step 2: the true molar mass

- From relative density: M = D × M(reference gas). If D(H₂) = 21, then M = 21 × 2 = 42. For air, M = 29 × D(air).
- From the density of a gas at normal conditions: M = ρ × 22.4.

42 / 14 = 3, so the true formula is C₃H₆ (propene or cyclopropane).

## Step 3: from the products of combustion

Burning 2.9 g of a substance gave 8.8 g of CO₂ and 4.5 g of H₂O; its vapour density relative to air is 2.

- n(C) = n(CO₂) = 8.8 / 44 = 0.2 mol, m(C) = 2.4 g
- n(H) = 2 · n(H₂O) = 2 · 4.5 / 18 = 0.5 mol, m(H) = 0.5 g
- 2.4 + 0.5 = 2.9 g, the mass of the sample, so there is no oxygen.
- C : H = 0.2 : 0.5 = 2 : 5, simplest formula C₂H₅ (M = 29).
- M = 29 · 2 = 58, 58 / 29 = 2, so the formula is C₄H₁₀ (butane).

If the masses of C and H add up to less than the mass of the sample, the difference is the mass of oxygen.

## Step 4: check

In CₓHᵧ the number y must be even, and the degree of unsaturation D = (2x + 2 − y) / 2 must be a whole number that is not negative. C₂H₅ fails this test (an odd number of H atoms), which is why the formula had to be doubled.

## Exercises

1. A hydrocarbon contains 80 % C and 20 % H, and D(H₂) = 15. Find its formula.
2. The density of a gas at normal conditions is 1.25 g/L. What is its molar mass?
3. Burning 4.4 g of a hydrocarbon gave 13.2 g of CO₂ and 7.2 g of H₂O; D(H₂) = 22. Find its formula.
4. Burning 2.3 g of a substance gave 4.4 g of CO₂ and 2.7 g of H₂O; D(air) = 1.59. Find its formula.
5. Why can CH₃ not be the formula of a real substance?

## Answers

1. C : H = 6.67 : 20 = 1 : 3, CH₃, M = 30, C₂H₆.
2. M = 1.25 · 22.4 = 28 g/mol.
3. n(C) = 0.3, n(H) = 0.8, 3.6 + 0.8 = 4.4 g, C₃H₈ (M = 44).
4. m(C) = 1.2 g, m(H) = 0.3 g, m(O) = 0.8 g, C : H : O = 0.1 : 0.3 : 0.05 = 2 : 6 : 1, C₂H₆O (M = 46).
5. The number of hydrogen atoms is odd: a carbon would be left with a free valency. Doubling gives C₂H₆.`,
    quiz: [
      ["A hydrocarbon has D(H₂) = 14. What is its molar mass?", ["14", "28", "7", "56"]],
      ["Burning gave 0.3 mol of CO₂. How many moles of C were in the sample?", ["0.3", "0.6", "0.15", "0.9"]],
      ["Burning gave 0.4 mol of H₂O. How many moles of H were in the sample?", ["0.4", "0.2", "0.8", "1.2"]],
      ["The simplest formula is CH₂ and M = 56. What is the molecular formula?", ["C₂H₄", "C₃H₆", "C₄H₈", "C₅H₁₀"]],
      ["m(C) + m(H) is less than the mass of the sample. What does that mean?", ["The difference is the mass of oxygen in the substance", "The calculation is wrong", "The substance is a hydrocarbon", "Some of the water evaporated"]],
    ],
  },
  "organic-genetic-links": {
    objectives: ["Build the chain alkane → alkene → alcohol → aldehyde → acid → ester", "Name the reagent and conditions for each step", "Solve tasks on chains of conversions", "Explain how the oxidation state of carbon changes along the chain"],
    content: `## The main road

C₂H₆ → C₂H₄ → C₂H₅OH → CH₃CHO → CH₃COOH → CH₃COOC₂H₅

| Step | Reaction | Conditions |
|---|---|---|
| ethane → ethene | C₂H₆ → C₂H₄ + H₂ | Ni or Pt, heating (dehydrogenation) |
| ethene → ethanol | C₂H₄ + H₂O → C₂H₅OH | H₃PO₄, heating, pressure (hydration) |
| ethanol → ethanal | C₂H₅OH + CuO → CH₃CHO + Cu + H₂O | heating (oxidation) |
| ethanal → acetic acid | CH₃CHO + Ag₂O → CH₃COOH + 2Ag | ammonia solution (or O₂ with a catalyst) |
| acid → ester | CH₃COOH + C₂H₅OH ⇄ CH₃COOC₂H₅ + H₂O | concentrated H₂SO₄ (esterification) |

## Side roads

- From methane to acetylene: 2CH₄ → C₂H₂ + 3H₂ (1500 °C), and from acetylene to an aldehyde by Kucherov's reaction: C₂H₂ + H₂O → CH₃CHO (Hg²⁺).
- From an alcohol back to an alkene: C₂H₅OH → C₂H₄ + H₂O (H₂SO₄, 170 °C).
- From an alkene to a halogen derivative, then to an alcohol: C₂H₄ + HCl → C₂H₅Cl, C₂H₅Cl + NaOH → C₂H₅OH + NaCl.
- From glucose to alcohol: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (fermentation).
- From acetylene to benzene: 3C₂H₂ → C₆H₆ (activated carbon, 600 °C, Zelinsky's reaction).

## The carbon ladder

Along the main road the oxidation state of the carbon that carries the functional group goes up: −3 in ethane, −1 in ethanol, +1 in ethanal, +3 in acetic acid. Going up is oxidation (CuO, Ag₂O, KMnO₄); going down is reduction (H₂, Ni).

## How to solve chains

1. Write the formulas of all the substances you know.
2. For each arrow, compare what has been added or removed (H₂, H₂O, O, HHal). That tells you the type of reaction: dehydrogenation, hydration, oxidation, substitution.
3. An unknown X between two known substances must fit both arrows.

Example: CH₄ → X → CH₃CHO → Y. X is C₂H₂ (two carbons, a triple bond, and hydration gives an aldehyde). Y can be CH₃COOH (oxidation) or C₂H₅OH (reduction): look at the reagent written over the arrow.

## Exercises

1. Which reagent turns ethanol into ethanal?
2. Write the equation for ethene → ethanol.
3. C₂H₂ → X → CH₃COOH. Find X.
4. How can ethene be made from ethanol again?
5. What is the oxidation state of the carbon of the –COOH group in acetic acid?

## Answers

1. CuO, on heating.
2. C₂H₄ + H₂O → C₂H₅OH (H₃PO₄, heating).
3. X = CH₃CHO (Kucherov's reaction, then oxidation).
4. By dehydration: concentrated H₂SO₄, 170 °C.
5. +3.`,
    quiz: [
      ["Which reagent turns an aldehyde into an acid?", ["H₂", "Ag₂O in ammonia solution", "H₂O", "HCl"]],
      ["Ethene with water gives…", ["ethane", "ethanol", "ethanal", "acetic acid"]],
      ["CH₄ → X → CH₃CHO. What is X?", ["C₂H₆", "C₂H₄", "C₂H₂", "C₂H₅OH"]],
      ["What forms when acetic acid reacts with ethanol (H₂SO₄)?", ["Ethyl acetate", "Ethanal", "Diethyl ether", "Ethene"]],
      ["Going from alcohol to aldehyde to acid, the carbon is…", ["reduced", "oxidised", "unchanged", "hydrolysed"]],
    ],
  },
};
