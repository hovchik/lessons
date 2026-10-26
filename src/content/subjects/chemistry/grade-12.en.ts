import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Transition metals, chemistry and the environment, chemistry in everyday life.",
    "Calculations from equations, excess and limiting reactants, yield and impurities, solutions, deriving formulas, review of inorganic and organic chemistry.",
  ],
  lessons: {
    "transition-metals": {
      objectives: ["Describe the general features of d-block metals", "Write important reactions of copper and zinc", "Explain the colours and oxidising properties of chromium and manganese compounds", "Link Armenia's deposits to metals"],
      content: `## General features

d-block metals have variable oxidation states and often form coloured compounds. Compounds in low oxidation states are basic and those in high oxidation states are acidic (CrO is basic, Cr₂O₃ amphoteric, CrO₃ acidic).

## Copper Cu

A reddish, soft metal and a good conductor. Armenia is rich in copper-molybdenum ores (Kajaran, Agarak, Teghut), and the Alaverdi copper smelter has worked since the 18th century.

- 2Cu + O₂ → 2CuO (black)
- Cu + 2H₂SO₄(conc.) → CuSO₄ + SO₂ + 2H₂O
- in moist air it gets a green patina, (CuOH)₂CO₃
- alloys: **brass** (Cu + Zn), **bronze** (Cu + Sn)

## Zinc Zn

An amphoteric metal: Zn + 2NaOH + 2H₂O → Na₂[Zn(OH)₄] + H₂. It is used to protect iron (galvanising) and in batteries. ZnO is used in ointments and sunscreens.

## Chromium Cr

The hardest metal. Chrome plating protects against corrosion. K₂Cr₂O₇ (orange) is a strong oxidising agent in acid (Cr⁺⁶ → Cr⁺³, green).

## Manganese Mn

KMnO₄ (violet, "permanganate") is a strong oxidising agent and antiseptic. The reduction product depends on the medium: in acid Mn²⁺ (colourless), in neutral solution MnO₂ (a brown precipitate), in alkali MnO₄²⁻ (green).

## Exercises

1. Why does copper not dissolve in dilute hydrochloric acid but dissolve in nitric acid?
2. Prove that ZnO is amphoteric.
3. Why does KMnO₄ solution lose its colour when SO₂ is bubbled through it?
4. Which alloy is called brass?

## Answers

1. Copper is to the right of hydrogen in the reactivity series, and in HNO₃ the oxidising agent is N⁺⁵.
2. ZnO + 2HCl → ZnCl₂ + H₂O, ZnO + 2NaOH → Na₂ZnO₂ + H₂O (when fused).
3. SO₂ reduces MnO₄⁻ to colourless Mn²⁺.
4. An alloy of copper and zinc.`,
      quiz: [
        ["Which alloy is made of copper and tin?", ["Brass", "Bronze", "Steel", "Duralumin"]],
        ["Which metal is the hardest?", ["Iron", "Chromium", "Zinc", "Copper"]],
        ["In acid, KMnO₄ is reduced to:", ["MnO₂", "Mn²⁺", "MnO₄²⁻", "Mn"]],
        ["Zinc is:", ["reactive only with acids", "an amphoteric metal", "a noble metal", "a liquid"]],
        ["A large copper-molybdenum deposit in Armenia is:", ["Kajaran", "Jermuk", "Sevan", "Gyumri"]],
      ],
    },
    "chemistry-environment": {
      objectives: ["Explain the greenhouse effect, the ozone layer and acid rain", "Name the sources of water and soil pollution", "Explain the danger of heavy metals", "Suggest green chemistry solutions"],
      content: `## The atmosphere

- **Greenhouse effect**: CO₂, CH₄ and water vapour absorb the Earth's heat radiation. Since the start of the industrial age, CO₂ has risen from about 280 ppm to more than 420 ppm, which is warming the climate.
- **Ozone layer**: O₃ absorbs ultraviolet radiation. Freons (chlorofluorocarbons) destroy it, so the 1987 Montreal Protocol banned their production.
- **Acid rain**: SO₂ and NOₓ → H₂SO₄ and HNO₃ in rainwater (pH < 5.6).
- **Smog**: soot, CO, NOₓ, fine dust.

## Water

Sources of pollution: sewage, fertilisers, oil products, detergents, heavy metals. For **Lake Sevan** the danger is pollution with phosphates and nitrogen, which make algae grow in huge numbers (an algal bloom).

## Soil

Pesticides, too much fertiliser, industrial waste, tailings dams of mining companies.

## Heavy metals

Pb, Hg, Cd and As build up in the body and damage the nervous system and kidneys. That is why leaded petrol is banned, and mercury lamps and batteries must be taken to special collection points.

## Green chemistry

- reducing and recycling waste,
- safe solvents (water, CO₂),
- catalysts to save energy,
- renewable raw materials and energy,
- biodegradable materials.

## Exercises

1. Which gases cause the greenhouse effect?
2. Why were freons banned?
3. Write the stages by which sulfuric acid forms from SO₂ in the atmosphere.
4. Why are fertilisers dangerous for lakes?
5. Why must batteries not be thrown away with ordinary rubbish?

## Answers

1. CO₂, CH₄, water vapour, N₂O.
2. They destroy the ozone layer.
3. 2SO₂ + O₂ → 2SO₃, SO₃ + H₂O → H₂SO₄.
4. They make algae grow wildly and cause a lack of oxygen.
5. They contain heavy metals that pollute soil and water.`,
      quiz: [
        ["Which gas is mainly responsible for the stronger greenhouse effect?", ["O₂", "N₂", "CO₂", "Ar"]],
        ["The ozone layer is destroyed by:", ["freons", "nitrogen", "oxygen", "hydrogen"]],
        ["The pH of acid rain is:", ["above 7", "below 5.6", "exactly 7", "14"]],
        ["Which of these is a heavy metal?", ["Sodium", "Potassium", "Mercury", "Calcium"]],
        ["Which is not a principle of green chemistry?", ["Reducing waste", "Renewable raw materials", "Adding toxic solvents", "Using catalysts"]],
      ],
    },
    "chemistry-daily-life": {
      objectives: ["Recognise food additives", "Explain how the main medicines work", "Use household chemicals safely", "Read labels and hazard symbols"],
      content: `## Food

Food contains **proteins, fats, carbohydrates, vitamins, minerals and water**. Food additives are marked with an **E** code:

| Group | Codes | Examples |
|---|---|---|
| colours | E100–E199 | E160a (carotene) |
| preservatives | E200–E299 | E211 (sodium benzoate) |
| antioxidants | E300–E399 | E300 (vitamin C) |
| thickeners | E400–E499 | E440 (pectin) |
| flavour enhancers | E600–E699 | E621 (monosodium glutamate) |

Not all E additives are harmful: many are natural, but you should look at the amount and read the label.

## Medicines

- **Acetylsalicylic acid** (aspirin) lowers fever and relieves pain.
- **Paracetamol** lowers fever.
- **Antibiotics** (penicillin, A. Fleming, 1928) act on bacteria but not on viruses. They should be taken only when a doctor prescribes them, otherwise bacteria become resistant.
- **Antacids** (Mg(OH)₂, NaHCO₃) neutralise excess stomach acid.
- Iodine in alcohol, hydrogen peroxide (3 %) and brilliant green are antiseptics.

## Household chemicals

- **Detergents**: surfactants, enzymes, bleaches.
- **Chlorine bleaches** (NaClO): **never mix them** with acidic cleaners, because poisonous chlorine is given off.
- **Baking soda and vinegar** are safe cleaners.
- Aerosols are flammable and must not be heated.

**Hazard symbols** on labels: flammable, toxic, corrosive, dangerous for the environment. Keep chemicals out of children's reach and in their original packaging.

## Exercises

1. Why is vitamin C (E300) added to juices?
2. Why don't antibiotics help with flu?
3. Write the neutralisation of stomach hydrochloric acid with Mg(OH)₂.
4. Why must chlorine bleach not be mixed with an acidic cleaner?

## Answers

1. As an antioxidant: it stops the juice from spoiling.
2. Flu is a viral disease.
3. Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O.
4. Poisonous chlorine gas is given off.`,
      quiz: [
        ["E300 is:", ["a colour", "vitamin C", "a preservative", "a sugar substitute"]],
        ["Antibiotics act on:", ["viruses", "bacteria", "all diseases", "only fever"]],
        ["Which substance is an antacid?", ["HCl", "Mg(OH)₂", "H₂SO₄", "NaCl"]],
        ["Penicillin was discovered by:", ["Louis Pasteur", "Alexander Fleming", "Mendeleev", "Marie Curie"]],
        ["Mixing chlorine bleach with an acid gives off:", ["oxygen", "hydrogen", "chlorine", "carbon dioxide"]],
      ],
    },
    "calculations-by-equation": {
      objectives: ["Use mole ratios from an equation", "Calculate mass, volume and amount of substance from an equation", "Set out a solution clearly", "Check the answer"],
      content: `## Method

1. Write the equation and balance it.
2. Convert the mass or volume of the given substance to **moles**: n = m / M or n = V / 22.4.
3. Use the coefficients to find the amount of the substance you want.
4. Convert moles to the quantity asked for.

## Worked examples

**1.** How many grams of CaO form when 50 g of CaCO₃ decomposes?

CaCO₃ → CaO + CO₂. n(CaCO₃) = 50 / 100 = 0.5 mol = n(CaO). m(CaO) = 0.5 · 56 = **28 g**.

**2.** What volume of oxygen (STP) is needed to burn 6.2 g of phosphorus?

4P + 5O₂ → 2P₂O₅. n(P) = 6.2 / 31 = 0.2 mol, n(O₂) = 0.2 · 5 / 4 = 0.25 mol, V = 0.25 · 22.4 = **5.6 L**.

**3.** How many grams of NaOH are needed to neutralise 49 g of H₂SO₄ completely?

2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O. n(H₂SO₄) = 0.5 mol, n(NaOH) = 1 mol, m = **40 g**.

## Exercises

1. How many litres of H₂ (STP) are given off when 5.4 g of aluminium reacts with hydrochloric acid?
2. How many grams of water form when 8 g of hydrogen burns?
3. How many grams of AgCl precipitate form when 17 g of AgNO₃ reacts with excess NaCl?
4. What volume of CO₂ is given off when 21 g of NaHCO₃ reacts with excess acid?

## Answers

1. 2Al + 6HCl → 2AlCl₃ + 3H₂. n(Al) = 0.2, n(H₂) = 0.3, V = 6.72 L.
2. 2H₂ + O₂ → 2H₂O. n(H₂) = 4 = n(H₂O), m = 72 g.
3. n(AgNO₃) = 0.1, m(AgCl) = 0.1 · 143.5 = 14.35 g.
4. n = 21 / 84 = 0.25, V = 5.6 L.`,
      quiz: [
        ["How many moles of CO₂ form when 2 mol of CaCO₃ decomposes?", ["1", "2", "3", "4"]],
        ["How many grams of CaO form from 100 g of CaCO₃?", ["28 g", "44 g", "56 g", "100 g"]],
        ["2H₂ + O₂ → 2H₂O. 1 mol of oxygen reacts with:", ["1 mol of H₂", "2 mol of H₂", "0.5 mol of H₂", "4 mol of H₂"]],
        ["What volume do 0.5 mol of CO₂ take up (STP)?", ["5.6 L", "11.2 L", "22.4 L", "44 L"]],
        ["What is the first step in solving a problem?", ["Write the answer", "Write the equation and balance it", "Add up the masses", "Measure the volume"]],
      ],
    },
    "excess-and-limiting": {
      objectives: ["Decide which substance is in excess", "Calculate from the limiting reactant", "Find how much of the excess is left", "Solve combined problems"],
      content: `## The idea

If a problem gives the amounts of **two starting substances**, you need to find which one is **limiting** (used up completely). The amount of product is calculated from the **limiting** reactant.

## Method

1. Find the amounts (moles) of both substances.
2. Divide the amount of each by its coefficient.
3. The substance with the smaller result is limiting.
4. Calculate the product from it.

## Worked example

**7.3 g of HCl was added to 10 g of NaOH. How many grams of salt formed, and what is the medium of the solution?**

NaOH + HCl → NaCl + H₂O

n(NaOH) = 10 / 40 = 0.25 mol, n(HCl) = 7.3 / 36.5 = 0.2 mol.

HCl is limiting (0.2 < 0.25). n(NaCl) = 0.2 mol, m = 0.2 · 58.5 = **11.7 g**. 0.05 mol of NaOH is left over, so the medium is **alkaline**.

**Second example.** 4 g of hydrogen and 40 g of oxygen were mixed and exploded. How many grams of water formed?

2H₂ + O₂ → 2H₂O. n(H₂) = 2, n(O₂) = 1.25. 2 / 2 = 1 < 1.25 / 1, so H₂ is limiting. n(H₂O) = 2 mol, m = **36 g**. 0.25 mol of O₂ (8 g) is left in excess.

## Exercises

1. 0.3 mol of HCl was added to 13 g of zinc. How many litres of H₂ (STP) were given off?
2. 11.2 g of iron was heated with 8 g of sulfur. How many grams of FeS formed?
3. 9.8 g of H₂SO₄ was added to 20.8 g of BaCl₂. How many grams of precipitate formed?
4. A mixture of 5 L of H₂ and 2 L of Cl₂ was exposed to light. What volume of HCl formed, and which gas was left?

## Answers

1. n(Zn) = 0.2, 0.4 mol of HCl is needed but there is 0.3 → HCl is limiting. n(H₂) = 0.15, V = 3.36 L.
2. n(Fe) = 0.2, n(S) = 0.25 → Fe is limiting. m(FeS) = 0.2 · 88 = 17.6 g.
3. n(BaCl₂) = 0.1, n(H₂SO₄) = 0.1 → m(BaSO₄) = 0.1 · 233 = 23.3 g.
4. Cl₂ is limiting, 4 L of HCl formed, 3 L of H₂ was left.`,
      quiz: [
        ["The amount of product is calculated from:", ["the substance in excess", "the limiting reactant", "any substance", "water"]],
        ["0.3 mol of NaOH and 0.2 mol of HCl. Which is limiting?", ["NaOH", "HCl", "Both", "Neither"]],
        ["The medium of the solution in the previous question will be:", ["acidic", "neutral", "alkaline", "uncertain"]],
        ["What is left in excess when 2 mol of H₂ react with 2 mol of O₂?", ["1 mol of H₂", "1 mol of O₂", "nothing", "2 mol of O₂"]],
        ["How do you find the limiting reactant?", ["Compare the masses", "Compare the amounts divided by the coefficients", "Compare the colours", "It is always the first substance"]],
      ],
    },
    "yield-and-impurities": {
      objectives: ["Find the actual yield of a product", "Calculate the percentage yield", "Solve problems with impure substances", "Combine both types of problem"],
      content: `## Yield

In real processes the amount of product is often less than the theoretical amount: there are losses, side reactions and incomplete conversion.

**η = m(actual) / m(theoretical) · 100 %**

## Impurities

If the starting substance contains impurities, first find the mass of the **pure substance**: m(pure) = m(sample) · ω(pure).

## Worked examples

**1.** 504 g of CaO was obtained from 1 kg of limestone (CaCO₃). Find the yield.

m(theoretical) = 1000 / 100 · 56 = 560 g, η = 504 / 560 = **90 %**.

**2.** 200 g of limestone containing 10 % impurities was decomposed. What volume of CO₂ was given off?

m(CaCO₃) = 200 · 0.9 = 180 g, n = 1.8 mol, V = 1.8 · 22.4 = **40.32 L**.

**3.** 22.4 g of ethylene was obtained from 46 g of ethanol. Find the yield.

n(C₂H₅OH) = 1 mol, the theoretical amount of ethylene is 28 g, η = 22.4 / 28 = **80 %**.

## Exercises

1. 200 g of Fe₂O₃ was used to obtain 112 g of iron. Find the yield.
2. How many grams of Zn are needed to get 6.72 L of H₂ (STP) with a 75 % yield?
3. What volume of acetylene can be obtained from 30 g of technical calcium carbide (80 % CaC₂)?
4. How many kilograms of SO₂ can theoretically be obtained from 1 t of pyrite ore (60 % FeS₂)?

## Answers

1. Theoretical: 200 / 160 · 2 · 56 = 140 g, η = 112 / 140 = 80 %.
2. Theoretical H₂: 6.72 / 0.75 = 8.96 L = 0.4 mol, m(Zn) = 26 g.
3. m(CaC₂) = 24 g, n = 0.375 mol, V = 8.4 L.
4. m(FeS₂) = 600 kg, n = 5 kmol, SO₂: 10 kmol · 64 = 640 kg.`,
      quiz: [
        ["What does the yield show?", ["The mass of the starting substance", "The ratio of the actual amount to the theoretical amount", "The rate of reaction", "The fraction of impurities"]],
        ["The theoretical amount is 50 g and 40 g was obtained. The yield is:", ["40 %", "50 %", "80 %", "125 %"]],
        ["100 g of a substance contains 20 % impurities. The pure substance is:", ["20 g", "80 g", "100 g", "120 g"]],
        ["Can the yield be more than 100 %?", ["Yes, always", "No, if the product is pure and dry", "Only for gases", "Only in solutions"]],
        ["In a problem with impurities, you first find:", ["the mass of the pure substance", "the mass of water", "the yield", "the pressure"]],
      ],
    },
    "solution-problems": {
      objectives: ["Solve problems on mixing solutions", "Calculate molar concentration", "Convert mass fraction to molar concentration", "Solve problems on reactions in solution"],
      content: `## Mixing

When two solutions are mixed, the masses of the solutes add up and so do the masses of the solutions:

ω = (m₁ω₁ + m₂ω₂) / (m₁ + m₂)

**Example**: 200 g of a 10 % solution was mixed with 300 g of a 20 % solution. ω = (20 + 60) / 500 = **16 %**.

## Molar concentration

**C = n / V** (mol/L), where V is the volume of the solution in litres.

**Example**: 4 g of NaOH was dissolved to give 500 mL of solution. n = 0.1 mol, C = 0.1 / 0.5 = **0.2 mol/L**.

**From ω to C**: C = 1000 · ρ · ω / M (ρ in g/mL). For 20 % HCl with ρ = 1.1 g/mL: C = 1000 · 1.1 · 0.2 / 36.5 ≈ **6 mol/L**.

## A reaction in solution

**Example**: excess BaCl₂ was added to 200 g of a 9.8 % H₂SO₄ solution. How many grams of precipitate formed?

m(H₂SO₄) = 19.6 g, n = 0.2 mol = n(BaSO₄), m = 0.2 · 233 = **46.6 g**.

## Exercises

1. 50 g of a 10 % solution was added to 150 g of a 30 % solution. Find ω.
2. What masses of 40 % and 10 % solutions must be mixed to get 300 g of a 20 % solution?
3. How many grams of NaCl are in 250 mL of a 0.4 mol/L solution?
4. Excess NaOH was added to 100 g of a 16 % CuSO₄ solution. How many grams of precipitate formed?

## Answers

1. (45 + 5) / 200 = 25 %.
2. 40x + 10(300 − x) = 6000 → x = 100 g (40 %) and 200 g (10 %).
3. n = 0.1 mol, m = 5.85 g.
4. m(CuSO₄) = 16 g, n = 0.1 mol, Cu(OH)₂: 0.1 · 98 = 9.8 g.`,
      quiz: [
        ["100 g of a 10 % solution was mixed with 100 g of a 30 % solution. ω is:", ["15 %", "20 %", "25 %", "40 %"]],
        ["The formula for molar concentration is:", ["C = m / V", "C = n / V", "C = V / n", "C = n · V"]],
        ["0.5 mol of a substance is dissolved in 2 L of solution. C is:", ["0.25 mol/L", "0.5 mol/L", "1 mol/L", "2.5 mol/L"]],
        ["When solutions are mixed, what adds up?", ["only the percentages", "the masses of the solutes and the masses of the solutions", "only the masses of water", "the densities"]],
        ["How many grams of NaOH are needed for 1 L of a 0.1 mol/L solution?", ["0.4 g", "4 g", "40 g", "10 g"]],
      ],
    },
    "deriving-formulas": {
      objectives: ["Find a formula from the mass fractions of elements", "Find a formula from combustion products", "Use relative density to find molar mass", "Check the formula you get"],
      content: `## From mass fractions

1. Assume you have 100 g of the substance: the percentages become grams.
2. Divide the mass of each element by its Ar (this gives moles).
3. Turn the mole ratio into whole numbers.

**Example**: a substance contains 40 % C, 6.67 % H, 53.33 % O.

C: 40 / 12 = 3.33, H: 6.67 / 1 = 6.67, O: 53.33 / 16 = 3.33. The ratio is 1 : 2 : 1, so the empirical formula is **CH₂O**. If M = 180 g/mol, then 180 / 30 = 6, and the molecular formula is **C₆H₁₂O₆**.

## From density

M = D · M(reference gas). Relative to hydrogen M = 2D, relative to air M = 29D.

## From combustion products

**Example**: burning 2.2 g of a hydrocarbon gave 6.6 g of CO₂ and 3.6 g of H₂O. Its density relative to hydrogen is 22.

- n(C) = n(CO₂) = 6.6 / 44 = 0.15 mol
- n(H) = 2n(H₂O) = 2 · 3.6 / 18 = 0.4 mol
- Check: 0.15 · 12 + 0.4 = 2.2 g, so there is no oxygen.
- C : H = 0.15 : 0.4 = 3 : 8 → C₃H₈.
- M = 2 · 22 = 44, Mr(C₃H₈) = 44 ✓

Answer: **propane, C₃H₈**.

## Exercises

1. A hydrocarbon contains 85.7 % C. Its density relative to hydrogen is 21. Find the formula.
2. A substance contains 52.2 % C, 13 % H, 34.8 % O. Find the empirical formula.
3. Burning 4.4 g of a substance gave 13.2 g of CO₂ and 7.2 g of H₂O. Its density relative to air is 1.52. Find the formula.
4. A salt contains 32.4 % Na, 22.5 % S, 45.1 % O. Find the formula.

## Answers

1. C : H = 7.14 : 14.3 = 1 : 2, CH₂, M = 42, C₃H₆.
2. C: 4.35, H: 13, O: 2.17 → 2 : 6 : 1, C₂H₆O.
3. n(C) = 0.3, n(H) = 0.8, m = 3.6 + 0.8 = 4.4 g, C₃H₈, M = 44 ✓.
4. Na: 1.41, S: 0.70, O: 2.82 → 2 : 1 : 4, Na₂SO₄.`,
      quiz: [
        ["The density relative to hydrogen is 8. M is:", ["8", "16", "29", "32"]],
        ["The amount of carbon from combustion products is found from:", ["n(H₂O)", "n(CO₂)", "n(O₂)", "the mass"]],
        ["The amount of hydrogen equals:", ["n(H₂O)", "2 · n(H₂O)", "n(H₂O) / 2", "n(CO₂)"]],
        ["A substance with the empirical formula CH₂O has M = 60. Its molecular formula is:", ["CH₂O", "C₂H₄O₂", "C₃H₆O₃", "C₆H₁₂O₆"]],
        ["The density relative to air is 2. M is:", ["29", "44", "58", "64"]],
      ],
    },
    "inorganic-review": {
      objectives: ["Classify substances quickly", "Predict whether two substances can react", "Identify ions by test reactions", "Use strategies for multiple-choice tests"],
      content: `## Classification table

| Class | How to recognise it | Example |
|---|---|---|
| oxide | two elements, one of them O | CO₂, Fe₂O₃ |
| base | metal + OH | KOH, Fe(OH)₃ |
| acid | H + acid residue | HNO₃, H₂S |
| salt | metal (or NH₄) + residue | K₂SO₄, NH₄Cl |

## What reacts with what

- **Basic oxide** ↔ acid, acidic oxide, water (if an alkali forms)
- **Acidic oxide** ↔ base, basic oxide, water
- **Acid** ↔ metal (left of H), basic oxide, base, salt (if a gas or precipitate forms)
- **Alkali** ↔ acid, acidic oxide, salt (precipitate), amphoteric substances
- **Salt** ↔ metal (more active), acid, alkali, salt (if a precipitate forms)

**No reaction**: an oxide with an oxide of the same type (CaO + Na₂O), an acid with an acidic oxide (HCl + CO₂), a base with a basic oxide.

## Summary of test reactions

| Ion/substance | Reagent | Sign |
|---|---|---|
| H⁺ | litmus | red |
| OH⁻ | phenolphthalein | crimson |
| Cl⁻ | Ag⁺ | white precipitate |
| SO₄²⁻ | Ba²⁺ | white precipitate |
| CO₃²⁻ | H⁺ | gas |
| NH₄⁺ | OH⁻, heat | smell of ammonia |
| Fe³⁺ | OH⁻ | brown precipitate |
| Cu²⁺ | OH⁻ | blue precipitate |
| CO₂ | limewater | turns cloudy |
| O₂ | glowing splint | bursts into flame |
| H₂ | burning splint | squeaky pop |

## Test strategies

1. First rule out the clearly wrong options.
2. In a calculation, write the equation first, then calculate.
3. Check the units (g, L, mol) and STP.
4. Check the answer by working backwards or with the conservation of mass.
5. Manage your time: do the easy questions first.

## Exercises

1. Which pairs react: CaO + CO₂, HCl + SO₂, NaOH + Al(OH)₃, Cu + FeSO₄?
2. How can you tell apart three colourless solutions: HCl, NaOH, NaCl?
3. Carry out the conversions: Ca → CaO → Ca(OH)₂ → CaCO₃ → Ca(HCO₃)₂.

## Answers

1. CaO + CO₂, NaOH + Al(OH)₃.
2. With litmus: red for HCl, blue for NaOH, purple for NaCl.
3. 2Ca + O₂ → 2CaO, CaO + H₂O → Ca(OH)₂, Ca(OH)₂ + CO₂ → CaCO₃ + H₂O, CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂.`,
      quiz: [
        ["Which pair does not react?", ["CaO + HCl", "HCl + CO₂", "NaOH + SO₃", "Zn + HCl"]],
        ["The Fe³⁺ ion with an alkali gives:", ["a blue precipitate", "a brown precipitate", "a white precipitate", "a gas"]],
        ["Which substance does not change the colour of litmus (neutral)?", ["HCl", "NaOH", "NaCl", "H₂SO₄"]],
        ["CO₂ is identified with:", ["a glowing splint", "limewater", "phenolphthalein", "AgNO₃"]],
        ["Which substance is a salt?", ["HNO₃", "KOH", "NH₄Cl", "SO₂"]],
      ],
    },
    "organic-review": {
      objectives: ["Link the classes of organic substances in one scheme", "Carry out chains of organic conversions", "Identify functional groups by test reactions", "Use nomenclature"],
      content: `## The main scheme

alkane → alkene → alcohol → aldehyde → carboxylic acid → ester

C₂H₆ → C₂H₄ → C₂H₅OH → CH₃CHO → CH₃COOH → CH₃COOC₂H₅

1. C₂H₆ → C₂H₄ + H₂ (dehydrogenation, heat, Pt)
2. C₂H₄ + H₂O → C₂H₅OH (H₃PO₄, heat)
3. C₂H₅OH + CuO → CH₃CHO + Cu + H₂O
4. CH₃CHO + Ag₂O → CH₃COOH + 2Ag
5. CH₃COOH + C₂H₅OH ⇄ CH₃COOC₂H₅ + H₂O (H₂SO₄)

## Other important links

- CaC₂ → C₂H₂ → C₆H₆ (trimerisation of acetylene, activated charcoal, 600 °C)
- C₆H₆ → C₆H₅NO₂ → C₆H₅NH₂ (Zinin)
- starch → glucose → ethanol → ethylene → polyethylene
- CH₄ → CH₃Cl → CH₃OH → HCHO

## Tests for functional groups

| Class | Reagent | Sign |
|---|---|---|
| C=C, C≡C | bromine water, KMnO₄ | decolourised |
| polyhydric alcohol | Cu(OH)₂ | bright blue solution |
| phenol | FeCl₃ / bromine water | violet colour / white precipitate |
| aldehyde | Ag₂O (NH₃) / Cu(OH)₂, heat | silver mirror / red precipitate |
| carboxylic acid | Na₂CO₃ | CO₂ gas |
| starch | iodine | blue colour |
| protein | CuSO₄ + NaOH | violet colour |

## Exercises

Carry out the conversions:

1. CH₄ → C₂H₂ → CH₃CHO → C₂H₅OH
2. C₂H₅OH → C₂H₄ → C₂H₄Br₂
3. (C₆H₁₀O₅)ₙ → C₆H₁₂O₆ → C₂H₅OH → CH₃COOC₂H₅
4. How can you tell glycerol, ethanal and acetic acid apart?

## Answers

1. 2CH₄ → C₂H₂ + 3H₂ (1500 °C), C₂H₂ + H₂O → CH₃CHO (Hg²⁺), CH₃CHO + H₂ → C₂H₅OH.
2. C₂H₅OH → C₂H₄ + H₂O (H₂SO₄, 170 °C), C₂H₄ + Br₂ → C₂H₄Br₂.
3. Hydrolysis, fermentation, esterification with acetic acid.
4. With Cu(OH)₂: glycerol gives a bright blue solution without heating, ethanal gives a red precipitate on heating, and acetic acid dissolves the precipitate to give a pale blue solution (a salt). Acetic acid can also be identified with soda (a gas is given off).`,
      quiz: [
        ["Oxidising ethanol with CuO gives:", ["ethane", "ethanal", "ethylene", "ethyl acetate"]],
        ["The product of esterification is:", ["CH₃CHO", "CH₃COOC₂H₅", "C₂H₄", "C₂H₅OH"]],
        ["Trimerisation of acetylene gives:", ["ethane", "benzene", "polyethylene", "ethanol"]],
        ["Aldehydes are identified by:", ["iodine", "the silver mirror test", "limewater", "BaCl₂"]],
        ["Hydrolysis of starch gives:", ["sucrose", "glucose", "ethanol", "glycerol"]],
      ],
    },
  },
};
