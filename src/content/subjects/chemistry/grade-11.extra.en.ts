import type { RuLesson } from "../../ru-overlay";

export const enExtra11: Record<string, RuLesson> = {
  "enzymes-vitamins-hormones": {
    objectives: ["Explain how enzymes speed up reactions", "Name the factors that affect enzyme activity", "Describe the role of vitamins, with examples", "Explain what hormones are, using insulin and adrenaline as examples"],
    content: `## Enzymes: biological catalysts

**Enzymes** are proteins that speed up reactions in living cells millions of times. One molecule of the enzyme catalase breaks down tens of millions of hydrogen peroxide molecules every second.

Each enzyme has an **active site**, a small pocket whose shape and charges fit one particular substance (the substrate). This is the "lock and key" model (E. Fischer, 1894). The substrate binds to the active site, an enzyme–substrate complex forms, the product is released, and the enzyme is free to work again.

Features of enzymes:

- **Specificity**: amylase breaks down starch but not cellulose.
- They work under **mild conditions**: 37 °C and ordinary pressure.
- They depend on **temperature**: human enzymes work best at about 37 °C and are denatured above 45 °C.
- They depend on **pH**: pepsin in the stomach works at pH 1.5–2, trypsin in the intestine at about 8.

| Enzyme | Where | What it does |
|---|---|---|
| amylase | saliva | starch → maltose |
| pepsin | stomach | proteins → peptides |
| lipase | intestine | fats → glycerol + fatty acids |
| catalase | liver | 2H₂O₂ → 2H₂O + O₂ |

Enzymes are used in washing powders (against protein and grease stains), in cheese-making and to clarify fruit juices.

## Vitamins

**Vitamins** are small organic molecules that the body needs in tiny amounts but cannot make itself (or makes too little of). Many of them are parts of enzymes.

| Vitamin | Sources | Lack causes |
|---|---|---|
| A | carrots, liver | night blindness |
| B₁ | whole grains | beriberi |
| C | citrus fruit, rose hips, peppers | scurvy (bleeding gums) |
| D | fish oil; made in the skin in sunlight | rickets |
| K | green vegetables | poor blood clotting |

**Water-soluble** vitamins (B, C) are not stored, so we need them every day. **Fat-soluble** vitamins (A, D, E, K) are stored, and too much of them can be harmful. Vitamin C (ascorbic acid) is destroyed by long cooking and storage.

## Hormones

**Hormones** are chemical messengers made by glands and carried by the blood. Tiny amounts act on organs far away.

- **Insulin** (pancreas; a protein of 51 amino acids) lowers the level of glucose in the blood. A lack of it causes diabetes. Since the 1980s insulin has been made by genetically modified bacteria.
- **Adrenaline** (adrenal glands; an amine) is the "fight or flight" hormone: it speeds up the heart and raises blood glucose.
- **Thyroxine** (thyroid gland; contains iodine) sets the rate of metabolism. Without enough iodine the thyroid swells (goitre), which is why salt is iodised in mountain areas far from the sea.

## Exercises

1. Why does the protein-digesting enzyme of the stomach stop working in the intestine?
2. What does the "lock and key" model mean?
3. Why can you not take vitamin C once a month?
4. Why is salt iodised?
5. Why is there little vitamin C left in cabbage that has been boiled for a long time?

## Answers

1. The pH in the intestine is about 8, and pepsin works only in an acidic medium.
2. The shape of the active site fits only one particular substrate, as a lock fits a key.
3. It is water-soluble and is not stored in the body.
4. Iodine is part of thyroxine; without it the thyroid gland does not work properly.
5. Vitamin C is destroyed by heating.`,
    quiz: [
      ["What kind of substances are enzymes chemically?", ["Proteins", "Fats", "Carbohydrates", "Mineral salts"]],
      ["What happens to most human enzymes above 45 °C?", ["They are denatured and stop working", "They work faster for ever", "They turn into vitamins", "Nothing"]],
      ["A lack of vitamin C causes…", ["rickets", "scurvy", "night blindness", "goitre"]],
      ["Which hormone lowers the level of glucose in the blood?", ["Adrenaline", "Insulin", "Thyroxine", "Pepsin"]],
      ["Which element does thyroxine contain?", ["Iron", "Iodine", "Calcium", "Sulfur"]],
    ],
  },
  "complex-compounds": {
    objectives: ["Describe the structure of a complex compound (central ion, ligands, coordination number, inner and outer spheres)", "Work out the charge of a complex ion", "Write equations for how complexes form and dissociate", "Give examples of complexes from nature and the lab"],
    content: `## A new kind of bond

If ammonia solution is added to the blue precipitate of copper(II) hydroxide, the precipitate dissolves and the solution turns deep blue:

Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄](OH)₂

Each ammonia molecule gives its lone pair of electrons to the Cu²⁺ ion, and the ion provides an empty orbital. This is the **donor–acceptor** mechanism, the same as in NH₄⁺.

## Structure (A. Werner, 1893)

Take K₃[Fe(CN)₆] as an example:

- the **central ion** is Fe³⁺;
- the **ligands**, the particles around it, are CN⁻;
- the **coordination number**, the number of ligands, is 6;
- the **inner sphere**, in square brackets, is [Fe(CN)₆]³⁻;
- the **outer sphere** is 3K⁺.

Charge of the complex ion = charge of the central ion + the sum of the ligand charges: +3 + 6 · (−1) = −3.

Common coordination numbers are 2 (Ag⁺: [Ag(NH₃)₂]⁺), 4 (Cu²⁺, Zn²⁺) and 6 (Fe³⁺, Al³⁺). Werner received the Nobel Prize in 1913.

## Dissociation

The outer sphere separates completely, as in a strong electrolyte:

K₄[Fe(CN)₆] → 4K⁺ + [Fe(CN)₆]⁴⁻

The inner sphere hardly breaks up at all. That is why "yellow prussiate of potash", K₄[Fe(CN)₆], is not poisonous although it contains cyanide: the CN⁻ ions are held firmly around the iron. It is even an approved food additive (E536).

## Amphoteric hydroxides become complexes

This is how amphoteric hydroxides "dissolve" in alkalis:

- Al(OH)₃ + NaOH → Na[Al(OH)₄]
- Zn(OH)₂ + 2NaOH → Na₂[Zn(OH)₄]

## Complexes in life and in the lab

- **Haemoglobin**: Fe²⁺ sits in the centre of a ring (haem), and O₂ binds as a ligand. CO binds about 200 times more strongly, which is why carbon monoxide is deadly: haemoglobin can no longer carry oxygen.
- **Chlorophyll**: Mg²⁺ in the centre.
- **Vitamin B₁₂**: cobalt in the centre.
- **Tollens' reagent**, [Ag(NH₃)₂]OH, for the silver mirror test.
- **Prussian blue**: Fe³⁺ ions with K₄[Fe(CN)₆] give a dark blue precipitate, the test for Fe³⁺.

## Exercises

1. In [Cu(NH₃)₄]SO₄ name the central ion, the ligands, the coordination number and the charge of the complex ion.
2. Write the equation for the dissociation of K₄[Fe(CN)₆].
3. Why is yellow prussiate of potash not poisonous?
4. Write the equation for the reaction of Al(OH)₃ with NaOH solution.
5. Why is carbon monoxide deadly?

## Answers

1. Cu²⁺, NH₃, 4, +2.
2. K₄[Fe(CN)₆] → 4K⁺ + [Fe(CN)₆]⁴⁻.
3. The CN⁻ ions are held firmly in the inner sphere and are not released.
4. Al(OH)₃ + NaOH → Na[Al(OH)₄].
5. CO binds to the iron of haemoglobin much more strongly than O₂, so the blood stops carrying oxygen.`,
    quiz: [
      ["What is the central ion in K₃[Fe(CN)₆]?", ["K⁺", "Fe³⁺", "CN⁻", "Fe²⁺"]],
      ["What is the coordination number in [Cu(NH₃)₄]²⁺?", ["2", "4", "6", "1"]],
      ["Which metal ion is in the centre of haemoglobin?", ["Mg²⁺", "Fe²⁺", "Co²⁺", "Cu²⁺"]],
      ["What forms when Al(OH)₃ dissolves in NaOH solution?", ["Na[Al(OH)₄]", "Al₂O₃", "AlCl₃", "Al"]],
      ["How does a ligand bond to the central ion?", ["It gives its lone pair of electrons", "It takes electrons", "Only by an ionic bond", "By a metallic bond"]],
    ],
  },
  "dispersed-systems": {
    objectives: ["Classify dispersed systems by particle size", "Tell a true solution from a colloid (the Tyndall effect)", "Explain coagulation and why colloids are stable", "Give everyday examples of dispersed systems"],
    content: `## Dispersed systems

When one substance (the **dispersed phase**) is broken up and spread through another (the **dispersion medium**), we get a **dispersed system**. Such systems differ in the size of their particles.

| Kind | Particle size | Examples | Settles? | Clear? |
|---|---|---|---|---|
| true solution | less than 1 nm (molecules, ions) | salt water, sugar syrup | never | yes |
| colloid | 1–100 nm | egg white in water, fog, smoke, starch paste | not for a very long time | not always |
| coarse | more than 100 nm | muddy water (suspension), oil shaken with water (emulsion) | settles or separates quickly | no |

Colloid particles pass through filter paper, but the particles of a suspension stay on it.

## The Tyndall effect

A beam of light passing through a colloid shows up as a bright path, because the particles scatter the light. In a true solution no path is seen. You can see this when a sunbeam crosses a dusty room or headlights shine through fog. A simple experiment: shine a laser pointer through salt water and through starch paste.

## Why colloid particles do not stick together

Each particle adsorbs ions of one charge on its surface, so the particles repel each other. Protein molecules are also helped by the layer of water around them.

## Coagulation

If an electrolyte is added to a colloid, ions of the opposite charge neutralise the charge on the particles. The particles stick together, form flakes and settle. This is **coagulation**.

- At a river mouth, where fresh water meets the salty sea, silt settles out and a delta forms.
- In water treatment aluminium sulfate is added: flakes of Al(OH)₃ trap the dirt and carry it to the bottom.
- In lactic fermentation the pH falls and the milk proteins coagulate: this is how matsun (yogurt) is made.
- Heating also causes coagulation: a boiled egg.

A **gel** is a colloid that has set, holding liquid inside it: jelly, gelatine, matsun. Over time a gel shrinks and releases liquid: that is the whey that collects on top of matsun.

**Emulsions** are stabilised by emulsifiers: lecithin from egg yolk in mayonnaise, proteins around the fat droplets in milk.

## Exercises

1. Classify: sugar in water, milk, muddy water.
2. How can you tell starch paste from salt water without tasting them?
3. Why do deltas form at river mouths?
4. Why is aluminium sulfate added in water treatment?
5. What is the liquid that collects on top of matsun?

## Answers

1. A true solution, a colloid (an emulsion), a suspension.
2. With a beam of light: in the paste a bright path is seen (the Tyndall effect).
3. The salts in sea water make the colloid particles of river silt coagulate.
4. The flakes of Al(OH)₃ trap the dirt and settle.
5. Whey, which the gel releases as it shrinks.`,
    quiz: [
      ["What size are colloid particles?", ["Smaller than 1 nm", "1–100 nm", "Larger than 1 mm", "Exactly 1 nm"]],
      ["What is the Tyndall effect?", ["A bright path of light in a colloid", "Boiling", "Settling", "A colour change"]],
      ["Which of these is a true solution?", ["Milk", "Fog", "Salt water", "Muddy water"]],
      ["What does adding an electrolyte to a colloid cause?", ["Coagulation", "Evaporation", "Crystallisation", "Nothing"]],
      ["Mayonnaise is an example of…", ["an emulsion", "a suspension", "a true solution", "a gas"]],
    ],
  },
  thermochemistry: {
    objectives: ["Write thermochemical equations", "Calculate heat from the amount of substance and back", "Use Hess's law", "Calculate the heat of a reaction from heats of formation"],
    content: `## Thermochemical equations

A **thermochemical equation** also shows the heat of the reaction:

C + O₂ → CO₂ + 393 kJ

It can also be written with the enthalpy change: ΔH = −393 kJ. The two are linked: Q = −ΔH.

- An **exothermic** reaction gives out heat (Q > 0, ΔH < 0).
- An **endothermic** reaction takes in heat: N₂ + O₂ → 2NO − 180 kJ (ΔH = +180 kJ).

The states of the substances matter:

- 2H₂ + O₂ → 2H₂O(l) + 572 kJ
- 2H₂ + O₂ → 2H₂O(g) + 484 kJ

The difference of 88 kJ is the heat released when 2 mol of steam condenses.

## Calculations with a thermochemical equation

**How much heat is released when 6 g of carbon burns?**
n(C) = 6 / 12 = 0.5 mol, Q = 0.5 · 393 = 196.5 kJ.

**Burning methane released 445 kJ. How much methane burned?**
CH₄ + 2O₂ → CO₂ + 2H₂O + 890 kJ, n(CH₄) = 445 / 890 = 0.5 mol, that is 8 g or 11.2 L (at normal conditions).

## Hess's law (G. Hess, 1840)

The heat of a reaction depends only on the starting and final states, not on the route.

- Direct route: C + O₂ → CO₂ + 393.5 kJ
- In two steps: C + ½O₂ → CO + 110.5 kJ, then CO + ½O₂ → CO₂ + 283 kJ

110.5 + 283 = 393.5 kJ. The law lets us find the heat of reactions that cannot be measured directly: you cannot turn carbon into pure CO, because some CO₂ always forms too.

## Heats of formation

The **heat of formation** is the heat released when 1 mol of a compound forms from simple substances. For simple substances (O₂, H₂, C, Fe…) it is 0.

| Substance | ΔH of formation, kJ/mol |
|---|---|
| CO₂ | −393.5 |
| H₂O (l) | −285.8 |
| CH₄ | −74.8 |
| C₂H₅OH (l) | −277.7 |
| CaCO₃ | −1207 |
| CaO | −635 |

ΔH(reaction) = ΣΔH(products) − ΣΔH(reactants)

**Example 1.** CH₄ + 2O₂ → CO₂ + 2H₂O(l)
ΔH = (−393.5 + 2 · (−285.8)) − (−74.8) = −890.3 kJ.

**Example 2.** CaCO₃ → CaO + CO₂
ΔH = (−635 − 393.5) − (−1207) = +178.5 kJ: the reaction is endothermic, which is why limestone must be strongly heated.

## Exercises

1. How much heat is released when 2 mol of hydrogen burns to give liquid water?
2. How much heat is released when 4 g of methane burns?
3. Find the heat of C + ½O₂ → CO, given C + O₂ → CO₂ + 393 kJ and CO + ½O₂ → CO₂ + 283 kJ.
4. Use the table to calculate ΔH for C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O(l).
5. Is the decomposition of CaCO₃ exothermic or endothermic?

## Answers

1. 572 kJ.
2. n = 0.25 mol, Q = 0.25 · 890 = 222.5 kJ.
3. 393 − 283 = 110 kJ.
4. ΔH = (2 · (−393.5) + 3 · (−285.8)) − (−277.7) ≈ −1367 kJ.
5. Endothermic (ΔH = +178.5 kJ).`,
    quiz: [
      ["A reaction with ΔH < 0 is…", ["exothermic", "endothermic", "impossible", "at equilibrium"]],
      ["C + O₂ → CO₂ + 393 kJ. How much heat comes from 24 g of C?", ["393 kJ", "786 kJ", "196.5 kJ", "24 kJ"]],
      ["According to Hess's law, the heat of a reaction depends on…", ["only the starting and final states", "the route", "the catalyst", "the time"]],
      ["What is the heat of formation of a simple substance such as O₂?", ["0", "393 kJ/mol", "1 kJ/mol", "It depends on the conditions"]],
      ["CaCO₃ → CaO + CO₂, ΔH = +178 kJ. This means that…", ["heat is taken in", "heat is given out", "there is no heat", "it explodes"]],
    ],
  },
  "redox-balancing": {
    objectives: ["Find oxidation states and identify the oxidising and reducing agents", "Balance reactions by the electron balance method", "Predict the products of KMnO₄ in different media", "Balance redox reactions involving organic substances"],
    content: `## Electron balance in five steps

Example: Cu + HNO₃(concentrated) → Cu(NO₃)₂ + NO₂ + H₂O

1. Find the oxidation states that change: Cu⁰ → Cu⁺², N⁺⁵ → N⁺⁴.
2. Write the half-reactions:
   - Cu⁰ − 2e → Cu⁺² | × 1 (reducing agent, it is oxidised)
   - N⁺⁵ + 1e → N⁺⁴ | × 2 (oxidising agent, it is reduced)
3. Coefficients: 1 in front of Cu, 2 in front of NO₂.
4. Count the nitrogen: 2 atoms in Cu(NO₃)₂ + 2 atoms in NO₂, so 4 in front of HNO₃.
5. Balance H and O: 4H → 2H₂O.

Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂ + 2H₂O

Check the oxygen: 12 on the left, 6 + 4 + 2 = 12 on the right. Note that nitric acid plays two parts here: 2 molecules are the oxidising agent and 2 form the salt.

## The medium decides the product: KMnO₄

Mn⁺⁷ is reduced in different ways:

| Medium | Product | What we see |
|---|---|---|
| acidic | Mn²⁺ | the purple solution loses its colour |
| neutral | MnO₂ | a brown precipitate |
| alkaline | MnO₄²⁻ | a green solution |

Example (acidic medium):

2KMnO₄ + 5Na₂SO₃ + 3H₂SO₄ → 2MnSO₄ + 5Na₂SO₄ + K₂SO₄ + 3H₂O

- Mn⁺⁷ + 5e → Mn⁺² | × 2
- S⁺⁴ − 2e → S⁺⁶ | × 5

## Potassium dichromate

Orange K₂Cr₂O₇ in an acidic medium is reduced to green Cr³⁺:

K₂Cr₂O₇ + 6KI + 7H₂SO₄ → Cr₂(SO₄)₃ + 3I₂ + 4K₂SO₄ + 7H₂O

- 2Cr⁺⁶ + 6e → 2Cr⁺³ | × 1
- 2I⁻ − 2e → I₂ | × 3

## Organic substances

The oxidation state of a carbon atom in an organic molecule is found from its bonds: +1 for each bond to O, −1 for each bond to H. In ethanol the carbon of –CH₂OH is −1; in ethanal it is +1.

3C₂H₅OH + K₂Cr₂O₇ + 4H₂SO₄ → 3CH₃CHO + Cr₂(SO₄)₃ + K₂SO₄ + 7H₂O

- C⁻¹ − 2e → C⁺¹ | × 3
- 2Cr⁺⁶ + 6e → 2Cr⁺³ | × 1

This is exactly the reaction the first breathalysers used.

## Exercises

1. Balance: Al + O₂ → Al₂O₃.
2. Balance: Cu + HNO₃(dilute) → Cu(NO₃)₂ + NO + H₂O.
3. What does KMnO₄ give in a neutral medium?
4. What is the oxidising agent in the reaction of K₂Cr₂O₇ with KI?
5. In the reaction from exercise 2, how many HNO₃ molecules act as the oxidising agent?

## Answers

1. 4Al + 3O₂ → 2Al₂O₃.
2. 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O.
3. MnO₂ (a brown precipitate).
4. Cr⁺⁶ (the dichromate).
5. 2 out of 8.`,
    quiz: [
      ["What is the oxidising agent in Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂ + 2H₂O?", ["Cu", "N⁺⁵ in HNO₃", "H⁺", "O"]],
      ["In an acidic medium KMnO₄ is reduced to…", ["Mn²⁺", "MnO₂", "MnO₄²⁻", "Mn"]],
      ["How many electrons does Mn⁺⁷ gain when it becomes Mn²⁺?", ["2", "3", "5", "7"]],
      ["What is the brown precipitate KMnO₄ gives in a neutral medium?", ["MnO₂", "Mn(OH)₂", "MnSO₄", "K₂MnO₄"]],
      ["Orange K₂Cr₂O₇ turns green because this forms:", ["Cr³⁺", "Cr⁺⁶", "metallic Cr", "CrO₄²⁻"]],
    ],
  },
};
