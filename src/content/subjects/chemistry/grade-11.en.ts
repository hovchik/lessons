import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Amines, amino acids, proteins, nucleic acids, plastics and fibres.",
    "Electron configurations, chemical bonding and crystal lattices.",
    "Factors affecting reaction rate, chemical equilibrium and Le Chatelier's principle, pH and hydrolysis, electrolysis.",
  ],
  lessons: {
    amines: {
      objectives: ["Recognise the amino group", "Explain the basic properties of amines", "Write the preparation of aniline (Zinin reaction)", "Know the uses of aniline"],
      content: `## Structure

**Amines** are derivatives of ammonia in which hydrogen atoms are replaced by hydrocarbon groups.

- methylamine: CH₃–NH₂ (primary)
- dimethylamine: (CH₃)₂NH (secondary)
- trimethylamine: (CH₃)₃N (tertiary)
- **aniline** (phenylamine): C₆H₅–NH₂

The lower amines are gases that smell of ammonia and fish.

## Basic properties

The nitrogen atom has a lone pair of electrons, which it uses to take an H⁺ ion, so amines are **organic bases**:

- CH₃NH₂ + H₂O ⇄ CH₃NH₃⁺ + OH⁻ (litmus turns blue)
- CH₃NH₂ + HCl → [CH₃NH₃]⁺Cl⁻ (a salt)

Aliphatic amines are **stronger** bases than ammonia, while aniline is a **weak** one (the benzene ring draws away the nitrogen's electrons). Aniline does not change the colour of litmus, but it forms salts with acids.

Aniline gives a white precipitate with bromine water (like phenol).

## Preparation

**The Zinin reaction** (1842), the reduction of nitrobenzene: C₆H₅NO₂ + 6[H] → C₆H₅NH₂ + 2H₂O.

## Uses

Aniline is used to make **dyes** (aniline dyes), medicines (sulfonamides) and plastics. Aniline is poisonous.

## Exercises

1. Write the formula of ethylamine and its reaction with hydrochloric acid.
2. Arrange in order of increasing basic strength: NH₃, CH₃NH₂, C₆H₅NH₂.
3. Why are amines bases?
4. How many grams of aniline form from 24.6 g of nitrobenzene?
5. Which substance is an amine: CH₃OH, CH₃NH₂, CH₃COOH?

## Answers

1. C₂H₅NH₂ + HCl → [C₂H₅NH₃]Cl.
2. C₆H₅NH₂ < NH₃ < CH₃NH₂.
3. The lone pair on nitrogen takes up H⁺.
4. n = 0.2 mol, m = 0.2 · 93 = 18.6 g.
5. CH₃NH₂.`,
      quiz: [
        ["The functional group of amines is:", ["–OH", "–NH₂", "–COOH", "–CHO"]],
        ["Amines show:", ["acidic properties", "basic properties", "only oxidising properties", "no properties"]],
        ["Aniline is made by:", ["hydrogenating benzene", "reducing nitrobenzene", "oxidising phenol", "from acetylene"]],
        ["Which base is stronger?", ["Aniline", "Ammonia", "Methylamine", "Water"]],
        ["Aniline is mainly used to make:", ["fertilisers", "dyes", "fuel", "sugar"]],
      ],
    },
    "amino-acids-proteins": {
      objectives: ["Describe the structure of amino acids and why they are amphoteric", "Explain how a peptide bond forms", "Describe the levels of protein structure", "Carry out the tests for proteins"],
      content: `## Amino acids

The molecule has both an **amino group**, –NH₂, and a **carboxyl group**, –COOH. The simplest is **glycine**, H₂N–CH₂–COOH; **alanine** is CH₃–CH(NH₂)–COOH.

Proteins are made of **20 amino acids**. Some of them (for example lysine and tryptophan) cannot be made by the human body and must come from food: these are the **essential** amino acids.

**Amphoteric behaviour**: amino acids react with both acids and bases:

- H₂N–CH₂–COOH + HCl → [H₃N–CH₂–COOH]Cl
- H₂N–CH₂–COOH + NaOH → H₂N–CH₂–COONa + H₂O

## The peptide bond

The –COOH group of one amino acid and the –NH₂ group of another join, splitting off water:

H₂N–CH₂–COOH + H₂N–CH₂–COOH → H₂N–CH₂–**CO–NH**–CH₂–COOH + H₂O

The –CO–NH– group is the **peptide bond**. Many amino acids joined together form a **polypeptide** (a protein).

## Protein structure

1. **Primary**: the sequence of amino acids in the chain.
2. **Secondary**: a helix or a pleated sheet (hydrogen bonds).
3. **Tertiary**: how the helix folds in space (a globule).
4. **Quaternary**: several chains joined together (haemoglobin).

**Denaturation** is the destruction of the structure by heat, acids, alcohol or heavy metals (egg white sets when it is cooked).

## Test reactions

- **Biuret test**: alkali + CuSO₄ gives a violet colour (peptide bonds).
- **Xanthoproteic test**: concentrated HNO₃ gives a yellow colour (aromatic amino acids).

## Roles

Proteins act as **enzymes** (speed up reactions), **hormones** (insulin), **carriers** (haemoglobin), **structural** proteins (collagen, keratin) and **protective** proteins (antibodies).

## Exercises

1. Write the reaction of alanine with NaOH.
2. Write the formation of the dipeptide glycylalanine.
3. Why does egg white set when it is cooked?
4. How can you prove that milk contains protein?
5. Why should our diet be varied?

## Answers

1. CH₃–CH(NH₂)–COOH + NaOH → CH₃–CH(NH₂)–COONa + H₂O.
2. H₂N–CH₂–COOH + H₂N–CH(CH₃)–COOH → H₂N–CH₂–CO–NH–CH(CH₃)–COOH + H₂O.
3. Heat denatures the protein.
4. With the biuret test (violet colour).
5. So that the body gets all the essential amino acids.`,
      quiz: [
        ["Amino acids contain:", ["only –NH₂", "only –COOH", "both –NH₂ and –COOH", "–OH and –CHO"]],
        ["The peptide bond is:", ["–CO–O–", "–CO–NH–", "–C=C–", "–O–H"]],
        ["How many amino acids are found in proteins?", ["5", "10", "20", "100"]],
        ["The biuret test gives:", ["a yellow colour", "a violet colour", "a blue precipitate", "a white precipitate"]],
        ["What is denaturation?", ["Making a protein", "Destroying a protein's natural structure", "Joining amino acids", "How an enzyme works"]],
      ],
    },
    "nucleic-acids": {
      objectives: ["Describe what a nucleotide is made of", "Compare DNA and RNA", "Explain the principle of complementarity", "Know the biological role of nucleic acids"],
      content: `## Nucleotides

**Nucleic acids** are biopolymers whose monomers are **nucleotides**. A nucleotide consists of:

1. a **nitrogenous base** (adenine A, guanine G, cytosine C, thymine T or uracil U),
2. a **sugar** (deoxyribose or ribose),
3. a **phosphate group**.

## DNA and RNA

| | DNA | RNA |
|---|---|---|
| sugar | deoxyribose | ribose |
| bases | A, G, C, T | A, G, C, U |
| structure | double helix | single strand |
| where | in the nucleus (and mitochondria) | in the nucleus and cytoplasm |
| role | storing hereditary information | making proteins |

## The double helix

In 1953 **J. Watson and F. Crick** (using X-ray data from R. Franklin and M. Wilkins) proposed the double-helix model of DNA.

**Complementarity**: a base on one strand pairs with a particular base on the other strand through hydrogen bonds: **A–T** (2 bonds) and **G–C** (3 bonds). So the sequence of one strand tells you the other.

**Example**: the strand A–T–G–C–C–A pairs with T–A–C–G–G–T.

In DNA the amount of A equals the amount of T, and G equals C (Chargaff's rule).

## Role

DNA stores the **genetic code**: three nucleotides (a triplet) code for one amino acid. When a cell divides, its DNA **is copied**. Genetic engineering, DNA tests and vaccines are based on the chemistry of nucleic acids.

## Exercises

1. Write the complementary strand: G–G–A–T–C–T.
2. Adenine makes up 20 % of a DNA molecule. Find the percentages of the other bases.
3. Which base is in RNA but not in DNA?
4. How many nucleotides code for a protein of 100 amino acids (not counting the stop triplet)?
5. Which sugar is part of DNA?

## Answers

1. C–C–T–A–G–A.
2. T 20 %, G 30 %, C 30 %.
3. Uracil.
4. 300.
5. Deoxyribose.`,
      quiz: [
        ["The monomers of nucleic acids are:", ["amino acids", "nucleotides", "glucose", "fatty acids"]],
        ["In DNA, adenine pairs with:", ["guanine", "cytosine", "thymine", "uracil"]],
        ["Which base is found only in RNA?", ["Adenine", "Thymine", "Uracil", "Guanine"]],
        ["The double-helix model of DNA was proposed by:", ["Mendeleev and Butlerov", "Watson and Crick", "Darwin and Mendel", "Pasteur and Koch"]],
        ["How many nucleotides code for one amino acid?", ["1", "2", "3", "4"]],
      ],
    },
    polymers: {
      objectives: ["Define monomer, polymer and degree of polymerisation", "Distinguish addition polymerisation and condensation polymerisation", "Describe the main plastics and fibres", "Assess why recycling plastic matters"],
      content: `## Key ideas

A **polymer** is a high-molecular compound made of repeating units. A **monomer** is the small molecule a polymer is made from. **n**, the **degree of polymerisation**, shows the number of units.

## How polymers are made

- **Addition polymerisation**: monomers join with no by-products: n CH₂=CH₂ → (–CH₂–CH₂–)ₙ
- **Condensation polymerisation**: monomers join, splitting off a small molecule (water). Nylon, polyester and phenol-formaldehyde resins are made this way, and in nature proteins and starch form like this.

## Plastics

| Polymer | Monomer | Uses |
|---|---|---|
| polyethylene (PE) | ethylene | bags, film, bottles |
| polypropylene (PP) | propene | pipes, containers |
| polyvinyl chloride (PVC) | vinyl chloride | windows, wire insulation |
| polystyrene (PS) | styrene | foam, disposable tableware |
| Teflon (PTFE) | tetrafluoroethylene | non-stick pans |
| polyethylene terephthalate (PET) | | drinks bottles |

**Thermoplastics** soften when heated and can be reshaped (PE, PVC). **Thermosets** do not soften when heated (phenol-formaldehyde resins).

## Fibres

- **natural**: cotton, linen (cellulose), wool, silk (protein),
- **artificial**: viscose, acetate (from natural cellulose),
- **synthetic**: nylon, polyester, acrylic.

## Environment

Plastic takes hundreds of years to break down in nature, and tiny particles (microplastics) get into water and food. Solutions: **sorting and recycling** (the number in the triangle shows the type of plastic), reusable bags, biodegradable polymers.

## Exercises

1. Write the equation for making polypropylene.
2. How does condensation polymerisation differ from addition polymerisation?
3. The molar mass of a polyethylene is 28000 g/mol. Find n.
4. Which fibre is a natural protein: cotton, silk or nylon?
5. Why is burning PVC dangerous?

## Answers

1. n CH₂=CH–CH₃ → (–CH₂–CH(CH₃)–)ₙ.
2. In condensation polymerisation a small molecule (water) is split off.
3. 28000 / 28 = 1000.
4. Silk.
5. Poisonous chlorine compounds (HCl and others) are given off.`,
      quiz: [
        ["The monomer of polyethylene is:", ["acetylene", "ethylene", "ethane", "benzene"]],
        ["In which process is water given off?", ["Addition polymerisation", "Condensation polymerisation", "Hydrogenation", "Cracking"]],
        ["Which fibre is synthetic?", ["Cotton", "Silk", "Nylon", "Wool"]],
        ["Teflon is used:", ["in non-stick pans", "in bags", "in tyres", "in paints"]],
        ["When heated, thermoplastics:", ["soften", "explode", "harden for good", "do not change"]],
      ],
    },
    "electron-configurations": {
      objectives: ["Describe s, p and d orbitals", "Write the electron configurations of the first 36 elements", "Apply the Pauli principle and Hund's rule", "Link the configuration to the place in the table"],
      content: `## Energy levels and sublevels

An electron in an atom moves in an **orbital**: a region of space where it is very likely to be found.

| Sublevel | Orbital shape | Number of orbitals | Maximum e⁻ |
|---|---|---|---|
| s | sphere | 1 | 2 |
| p | figure of eight (dumbbell) | 3 | 6 |
| d | complex | 5 | 10 |
| f | complex | 7 | 14 |

The n-th level has n sublevels and holds no more than 2n² electrons.

## Filling rules

1. **Lowest energy first**: sublevels fill in order of increasing energy: 1s 2s 2p 3s 3p **4s 3d** 4p 5s 4d 5p…
2. **Pauli principle**: an orbital holds no more than 2 electrons, with opposite spins (↑↓).
3. **Hund's rule**: on a p or d sublevel, electrons first occupy all the orbitals singly.

## Examples

- ₆C: 1s² 2s² 2p²
- ₈O: 1s² 2s² 2p⁴
- ₁₁Na: 1s² 2s² 2p⁶ 3s¹
- ₁₇Cl: 1s² 2s² 2p⁶ 3s² 3p⁵
- ₂₀Ca: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s²
- ₂₆Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²
- ₂₉Cu: … 3d¹⁰ 4s¹ (an electron "drops" in to give a stable d¹⁰)

## Blocks in the table

**s-block**: IA, IIA; **p-block**: IIIA–VIIIA; **d-block**: the B subgroups (transition metals); **f-block**: lanthanides and actinides.

## Exercises

1. Write the electron configurations: N, Mg, S, K.
2. How many unpaired electrons does an oxygen atom have?
3. Which element has the configuration 1s² 2s² 2p⁶ 3s² 3p³?
4. Why does 4s fill before 3d?
5. Which block does zinc belong to?

## Answers

1. N: 1s² 2s² 2p³, Mg: 1s² 2s² 2p⁶ 3s², S: 1s² 2s² 2p⁶ 3s² 3p⁴, K: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹.
2. Two.
3. Phosphorus (15).
4. 4s has a lower energy.
5. The d-block.`,
      quiz: [
        ["How many electrons can a p sublevel hold?", ["2", "6", "10", "14"]],
        ["What is the maximum number of electrons in one orbital?", ["1", "2", "6", "8"]],
        ["Which element has the configuration 1s² 2s² 2p⁶ 3s¹?", ["Na", "Mg", "Ne", "K"]],
        ["Which fills first?", ["3d", "4s", "4p", "4d"]],
        ["Which block do the halogens belong to?", ["s", "p", "d", "f"]],
      ],
    },
    "bonding-and-crystals": {
      objectives: ["Compare the types of bond", "Explain hydrogen bonding", "Distinguish the types of crystal lattice", "Predict a substance's properties from its lattice type"],
      content: `## Types of bond (review and more depth)

- **Covalent**: shared electron pairs (by sharing or by the donor-acceptor mechanism: in NH₄⁺ the fourth N–H bond forms from nitrogen's lone pair).
- **Ionic**: a large difference in electronegativity (NaCl, CaF₂).
- **Metallic**: a "gas" of free electrons.
- **Hydrogen bond**: a weak bond between a hydrogen atom and a strongly electronegative atom (F, O, N) of another molecule.

Hydrogen bonds explain water's high boiling point, the low density of ice, how DNA strands join and the secondary structure of proteins.

## Crystal lattices

| Lattice | At the points | Bond | Properties | Examples |
|---|---|---|---|---|
| ionic | ions | ionic | hard, high melting point, solution conducts | NaCl, CaO |
| atomic | atoms | covalent | very hard, very high melting point, insoluble | diamond, SiO₂, Si |
| molecular | molecules | intermolecular | soft, volatile, low melting point | ice, I₂, CO₂ (dry ice), sugar |
| metallic | atoms and ions | metallic | lustre, malleability, conductivity | Fe, Cu, Al |

**Amorphous** substances (glass, resin) have no ordered lattice and melt over a range of temperatures.

## Examples

- Iodine **sublimes** when heated (turns straight into vapour) because it has a molecular lattice.
- Quartz (SiO₂) and dry ice (CO₂) have similar formulas but different lattices, so quartz melts at 1700 °C while CO₂ turns to gas at −78 °C.

## Exercises

1. What lattice do KCl, graphite, naphthalene and copper have?
2. Why does HF boil at 20 °C and HCl at −85 °C?
3. Why does a salt solution conduct electricity while a sugar solution does not?
4. How does the fourth bond in the NH₄⁺ ion form?
5. Why is ice lighter than water?

## Answers

1. Ionic, atomic, molecular, metallic.
2. There are hydrogen bonds between HF molecules.
3. Salt dissociates into ions; sugar does not.
4. By the donor-acceptor mechanism: nitrogen's lone pair and the empty orbital of H⁺.
5. Hydrogen bonds in ice make a lattice with gaps.`,
      quiz: [
        ["Which substance has an atomic crystal lattice?", ["NaCl", "Diamond", "Ice", "Iodine"]],
        ["Substances with a molecular lattice usually:", ["are very hard", "have a low melting point", "conduct electricity", "are malleable"]],
        ["Hydrogen bonding explains:", ["the high boiling point of water", "the lustre of metals", "the taste of salt", "the hardness of diamond"]],
        ["What lattice does table salt have?", ["Molecular", "Atomic", "Ionic", "Metallic"]],
        ["Iodine sublimes when heated because:", ["it has a molecular lattice", "it has an ionic lattice", "it is a metal", "it has an atomic lattice"]],
      ],
    },
    "reaction-rate": {
      objectives: ["Define reaction rate", "List the factors that affect the rate", "Apply van 't Hoff's rule", "Explain the role of catalysts and enzymes"],
      content: `## Definition

The **rate of reaction** is the change in concentration of a substance per unit time: v = ΔC / Δt (mol/(L·s)).

## Factors

1. **Nature of the substances**: potassium reacts violently with water, iron very slowly.
2. **Concentration**: the **law of mass action**: for a reaction aA + bB → … v = k·[A]ᵃ·[B]ᵇ (for simple reactions). Wood burns faster in oxygen than in air.
3. **Temperature**: **van 't Hoff's rule**: raising the temperature by 10 °C makes the rate 2–4 times greater. Food spoils slowly in the fridge.
4. **Surface area** (for solids): a powder reacts faster. Flour dust and coal dust in the air can explode.
5. **Catalyst**: a substance that speeds up a reaction but is not used up itself. An **inhibitor** slows a reaction down (corrosion inhibitors).

## Example: van 't Hoff's rule

The temperature coefficient γ = 3. The temperature was raised from 20 °C to 50 °C. The rate becomes 3³ = **27 times** greater.

## Catalysis

- 2H₂O₂ → 2H₂O + O₂ (MnO₂)
- 2SO₂ + O₂ ⇄ 2SO₃ (V₂O₅)
- N₂ + 3H₂ ⇄ 2NH₃ (Fe)

**Enzymes** are biological catalysts (proteins). Amylase in saliva starts breaking down starch, and catalase in the liver breaks down H₂O₂. **Catalytic converters** in cars make CO and nitrogen oxides harmless.

## Exercises

1. Why does food keep longer in the fridge?
2. γ = 2 and the temperature was raised by 40 °C. How many times greater is the rate?
3. How does the rate of 2NO + O₂ → 2NO₂ change if the concentration of NO is doubled?
4. Why is firewood split into small logs?
5. How does a catalyst differ from an inhibitor?

## Answers

1. At a low temperature the spoiling reactions go slowly.
2. 2⁴ = 16 times.
3. v = k[NO]²[O₂], so it becomes 4 times greater.
4. The area in contact with oxygen grows.
5. A catalyst speeds a reaction up, an inhibitor slows it down.`,
      quiz: [
        ["By van 't Hoff's rule, heating by 10 °C makes the rate:", ["1.5 times greater", "2–4 times greater", "10 times greater", "100 times greater"]],
        ["What is a catalyst?", ["A substance that slows a reaction", "A substance that speeds up a reaction and is not used up", "A product of the reaction", "A solvent"]],
        ["Biological catalysts are called:", ["hormones", "enzymes", "vitamins", "inhibitors"]],
        ["γ = 3 and the temperature was raised by 20 °C. The rate becomes:", ["3 times greater", "6 times greater", "9 times greater", "27 times greater"]],
        ["Why does a powder react faster?", ["It is heavier", "It has a larger surface area", "It is warmer", "There is less of it"]],
      ],
    },
    "chemical-equilibrium": {
      objectives: ["Distinguish reversible and irreversible reactions", "Define chemical equilibrium", "Apply Le Chatelier's principle", "Choose the best conditions for an industrial process"],
      content: `## Reversible reactions

**Reversible** reactions go in both directions at once: N₂ + 3H₂ ⇄ 2NH₃. **Irreversible** reactions go to completion (burning, forming a precipitate or a gas).

## Equilibrium

Over time the rate of the forward reaction falls and that of the reverse reaction rises. When they become equal, **chemical equilibrium** is reached: the concentrations no longer change, although both reactions go on (**dynamic equilibrium**).

## Le Chatelier's principle (1884)

If a system at equilibrium is disturbed from outside, the equilibrium shifts in the direction that weakens the disturbance.

| Change | Shift |
|---|---|
| more of a starting substance | towards the products (→) |
| removing a product | → |
| raising the temperature | towards the endothermic reaction |
| raising the pressure (gases) | towards fewer moles of gas |
| catalyst | no shift; equilibrium is just reached faster |

## Example: making ammonia

N₂ + 3H₂ ⇄ 2NH₃ + Q (exothermic)

- Raising the pressure (4 mol of gas → 2 mol of gas): **→**, the yield of ammonia rises.
- Raising the temperature: **←**, the yield falls. But at a low temperature the reaction is too slow, so a moderate temperature (450–500 °C), high pressure and a catalyst are chosen, and the ammonia is removed continuously.

## Exercises

Which way does the equilibrium shift:

1. 2SO₂ + O₂ ⇄ 2SO₃ + Q when the pressure is raised?
2. In the same reaction when the temperature is raised?
3. N₂ + O₂ ⇄ 2NO − Q when the pressure is raised?
4. CaCO₃ ⇄ CaO + CO₂ − Q when CO₂ is removed?
5. Why does a catalyst not increase the yield?

## Answers

1. → (3 mol of gas become 2 mol).
2. ← (the forward reaction is exothermic).
3. It does not shift (2 mol = 2 mol).
4. →.
5. It speeds up the forward and reverse reactions equally.`,
      quiz: [
        ["At chemical equilibrium:", ["the reactions stop", "the forward and reverse rates are equal", "only the forward reaction goes on", "the products disappear"]],
        ["N₂ + 3H₂ ⇄ 2NH₃ + Q. When the pressure is raised, the equilibrium:", ["shifts to the right", "shifts to the left", "does not shift", "disappears"]],
        ["In an exothermic reaction, raising the temperature shifts the equilibrium:", ["→", "←", "nowhere", "to a stop"]],
        ["A catalyst:", ["shifts the equilibrium to the right", "shifts it to the left", "does not shift the equilibrium", "stops the reaction"]],
        ["Who stated the principle of shifting equilibrium?", ["Le Chatelier", "van 't Hoff", "Arrhenius", "Avogadro"]],
      ],
    },
    "ph-and-hydrolysis": {
      objectives: ["Explain the dissociation of water and the idea of pH", "Tell the medium from the pH", "Predict the medium of a salt solution", "Write ionic equations for hydrolysis"],
      content: `## Dissociation of water and pH

Water dissociates very slightly: H₂O ⇄ H⁺ + OH⁻. At 25 °C [H⁺] = [OH⁻] = 10⁻⁷ mol/L.

**pH = −lg[H⁺]**

| pH | Medium | Examples |
|---|---|---|
| 0–2 | strongly acidic | gastric juice (1.5–2) |
| 3–6 | acidic | lemon juice (≈2.5), coffee (≈5) |
| 7 | neutral | distilled water |
| 7.4 | slightly alkaline | blood |
| 8–14 | alkaline | soda solution (≈8.5), soap (≈10), NaOH |

**Example**: in 0.01 mol/L HCl, [H⁺] = 10⁻² → pH = 2.

## Hydrolysis of salts

**Hydrolysis** is the reaction of a salt's ions with water that changes the medium.

| Salt made from | Example | Hydrolysis | Medium |
|---|---|---|---|
| strong base + strong acid | NaCl, KNO₃ | none | neutral |
| strong base + weak acid | Na₂CO₃, CH₃COONa | of the anion | alkaline |
| weak base + strong acid | NH₄Cl, CuSO₄, AlCl₃ | of the cation | acidic |
| weak base + weak acid | CH₃COONH₄ | of both | close to neutral |

**Equations**

- CO₃²⁻ + H₂O ⇄ HCO₃⁻ + OH⁻ (alkaline, which is why soda feels soapy and removes grease)
- NH₄⁺ + H₂O ⇄ NH₃·H₂O + H⁺ (acidic)
- Cu²⁺ + H₂O ⇄ CuOH⁺ + H⁺ (acidic)

## Uses

Soil pH matters for plants (acid soils are limed), the pH of pool water is monitored, and there is "pH-neutral" soap for the skin.

## Exercises

1. Find the pH of 0.001 mol/L HNO₃.
2. What is the medium of solutions of K₂S, ZnCl₂, Na₂SO₄?
3. Write the ionic equation for the hydrolysis of CH₃COONa.
4. Why are greasy dishes washed with soda solution?
5. What colour does litmus turn in NH₄Cl solution?

## Answers

1. 3.
2. Alkaline, acidic, neutral.
3. CH₃COO⁻ + H₂O ⇄ CH₃COOH + OH⁻.
4. Hydrolysis makes the medium alkaline, and alkali breaks down fats.
5. Red.`,
      quiz: [
        ["What is the medium at pH = 7?", ["Acidic", "Neutral", "Alkaline", "Strongly acidic"]],
        ["Which salt gives an alkaline solution?", ["NaCl", "NH₄Cl", "Na₂CO₃", "CuSO₄"]],
        ["Which salt is not hydrolysed?", ["KNO₃", "AlCl₃", "K₂CO₃", "NH₄NO₃"]],
        ["The pH of 0.01 mol/L HCl is:", ["1", "2", "7", "12"]],
        ["The pH of human blood is about:", ["2", "5", "7.4", "12"]],
      ],
    },
    electrolysis: {
      objectives: ["Define electrolysis", "Write schemes for the electrolysis of melts", "Predict the products of electrolysis of aqueous solutions", "Know the uses of electrolysis"],
      content: `## What is electrolysis

**Electrolysis** is a redox process that happens at the electrodes when a direct current passes through a melt or a solution of an electrolyte.

- **Cathode** (−): **reduction** (cations gain electrons).
- **Anode** (+): **oxidation** (anions lose electrons).

## Electrolysis of melts

**Molten NaCl**: cathode: Na⁺ + e → Na, anode: 2Cl⁻ − 2e → Cl₂. Overall: 2NaCl → 2Na + Cl₂.

Active metals (Na, K, Ca, Mg) and aluminium (Al₂O₃ melted in cryolite) are produced this way.

## Electrolysis of aqueous solutions

**At the cathode**
- cations of active metals from Li to Al are not reduced; water is reduced instead: 2H₂O + 2e → H₂ + 2OH⁻
- metals of medium activity from Mn to H give the metal and hydrogen together
- metals to the right of H (Cu, Ag, Au) give only the metal: Cu²⁺ + 2e → Cu

**At the anode** (inert electrode)
- oxygen-free residues (Cl⁻, Br⁻, I⁻, S²⁻) are oxidised: 2Cl⁻ − 2e → Cl₂
- with oxygen-containing residues (SO₄²⁻, NO₃⁻), water is oxidised: 2H₂O − 4e → O₂ + 4H⁺

**Examples**

- NaCl solution: H₂ at the cathode, Cl₂ at the anode, NaOH in the solution (the industrial route to chlorine and alkali)
- CuSO₄ solution: Cu at the cathode, O₂ at the anode, H₂SO₄ in the solution
- Na₂SO₄ solution: in effect the electrolysis of water, giving H₂ and O₂

## Uses

Producing and purifying metals (refining copper), **electroplating** (chrome, gold and nickel plating), making chlorine, alkalis and hydrogen, electroforming.

## Exercises

1. Write the scheme for the electrolysis of molten KBr.
2. What forms at the electrodes during electrolysis of AgNO₃ solution?
3. What forms during electrolysis of KI solution?
4. Why is Na obtained from a melt and not from a solution?
5. How can you coat an iron object with copper by electrolysis?

## Answers

1. Cathode: K⁺ + e → K, anode: 2Br⁻ − 2e → Br₂.
2. Ag at the cathode, O₂ at the anode, HNO₃ in the solution.
3. H₂ at the cathode, I₂ at the anode, KOH in the solution.
4. In a solution, water is reduced at the cathode instead of sodium.
5. Connect the object to the cathode and a copper plate to the anode, with CuSO₄ as the electrolyte.`,
      quiz: [
        ["At the cathode there is:", ["oxidation", "reduction", "neutralisation", "hydrolysis"]],
        ["In electrolysis of molten NaCl, the cathode gives:", ["Cl₂", "H₂", "Na", "O₂"]],
        ["In electrolysis of NaCl solution, the cathode gives:", ["Na", "H₂", "Cl₂", "O₂"]],
        ["In electrolysis of CuSO₄ solution, the inert anode gives:", ["SO₂", "Cu", "O₂", "H₂"]],
        ["Aluminium is obtained by:", ["electrolysis of AlCl₃ solution", "electrolysis of molten Al₂O₃", "reduction with coal", "reduction with hydrogen"]],
      ],
    },
  },
};
