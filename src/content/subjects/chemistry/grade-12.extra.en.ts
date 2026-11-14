import type { RuLesson } from "../../ru-overlay";

export const enExtra12: Record<string, RuLesson> = {
  "nuclear-chemistry": {
    objectives: ["Explain what isotopes are", "Write equations for α and β decay", "Calculate how much of a substance remains using the half-life", "Name uses of radioactive isotopes and ways to protect against radiation"],
    content: `## Isotopes

Atoms of one element have the same number of protons but can have different numbers of neutrons. These are **isotopes**.

| Isotope | Protons | Neutrons |
|---|---|---|
| ¹H (protium) | 1 | 0 |
| ²H (deuterium) | 1 | 1 |
| ³H (tritium) | 1 | 2 |
| ¹²C | 6 | 6 |
| ¹⁴C | 6 | 8 |

Isotopes have almost the same chemical properties, because chemistry is decided by the electrons. The nuclei of some isotopes are unstable and break up by themselves: this is **radioactivity** (H. Becquerel, 1896; Marie and Pierre Curie).

## Kinds of decay

- **α decay**: the nucleus throws out a helium nucleus (⁴He). The mass number falls by 4 and the charge by 2: ²³⁸U → ²³⁴Th + ⁴He.
- **β decay**: a neutron turns into a proton and an electron flies out. The mass number stays the same and the charge rises by 1: ¹⁴C → ¹⁴N + e⁻.
- **γ radiation**: high-energy photons that often come with α and β decay.

In nuclear equations the mass numbers and the charges must add up to the same totals on both sides.

## Half-life

The **half-life** (T) is the time in which half of the nuclei decay:

m = m₀ · (1/2)^(t / T)

| Isotope | T |
|---|---|
| ¹³¹I | 8 days |
| ¹⁴C | 5730 years |
| ²³⁸U | 4.5 billion years |

**Example:** an old piece of wood has 25 % of its original ¹⁴C left, so two half-lives have passed: 2 · 5730 ≈ 11 460 years. This is how **radiocarbon dating** works.

## Uses

- **Medicine**: ¹³¹I treats diseases of the thyroid gland, and radioactive "labels" are used to take pictures of organs.
- **Energy**: a ²³⁵U nucleus that absorbs a neutron splits into two fragments, releasing 2–3 new neutrons and a lot of energy. Splitting 1 g of ²³⁵U gives as much energy as burning about 3 tonnes of coal. The Armenian nuclear power plant (Metsamor) produces about a third of Armenia's electricity.
- **Science**: an ¹⁸O label revealed the mechanism of esterification, and ¹⁵N showed how DNA is copied.

## Protection

- α particles are stopped by a sheet of paper or by the skin, but they are very dangerous inside the body.
- β particles are stopped by a few millimetres of aluminium.
- γ rays need lead or thick concrete.

## Exercises

1. How do the isotopes ¹²C and ¹⁴C differ?
2. Complete: ²²⁶Ra → ? + ⁴He.
3. How much of 80 mg of ¹³¹I will remain after 16 days?
4. A piece of wood has 12.5 % of its ¹⁴C left. How old is it?
5. Why is an α emitter especially dangerous inside the body?

## Answers

1. In the number of neutrons (6 and 8).
2. ²²²Rn (radon).
3. Two half-lives: 80 → 40 → 20 mg.
4. Three half-lives: 3 · 5730 ≈ 17 190 years.
5. Outside, the skin stops it; inside, it gives all its energy to the neighbouring cells.`,
    quiz: [
      ["What is an α particle?", ["A helium nucleus, ⁴He", "An electron", "A photon", "A neutron"]],
      ["How does the mass number change in α decay?", ["It falls by 4", "It rises by 1", "It does not change", "It falls by 1"]],
      ["The half-life of ¹³¹I is 8 days. What share is left after 24 days?", ["1/2", "1/4", "1/8", "0"]],
      ["Which isotope is used to find the age of old wood?", ["¹⁴C", "²³⁸U", "¹³¹I", "²H"]],
      ["What stops γ rays best?", ["Lead or thick concrete", "Paper", "Clothing", "Air"]],
    ],
  },
  "energy-chemistry": {
    objectives: ["Explain how a lead–acid battery works", "Describe a lithium-ion battery", "Explain how a fuel cell produces electricity", "Compare ways of making hydrogen"],
    content: `## The lead–acid battery

A car battery has six cells of about 2 V each, 12 V in total. The electrodes are lead (Pb) and lead(IV) oxide (PbO₂), and the electrolyte is sulfuric acid:

Pb + PbO₂ + 2H₂SO₄ ⇄ 2PbSO₄ + 2H₂O

Left to right is discharging (it gives current); right to left is charging (electrolysis). As the battery discharges, sulfuric acid is used up and the density of the electrolyte falls: mechanics check how charged a battery is by measuring that density.

## The lithium-ion battery

In the batteries of phones, laptops and electric cars, Li⁺ ions "travel" between two electrodes: graphite and a metal oxide such as LiCoO₂. During charging the ions go into the graphite; during use they come back, while electrons flow through the outside circuit. One cell gives about 3.7 V.

| Battery | Energy per 1 kg |
|---|---|
| lead–acid | 30–40 Wh |
| lithium-ion | 150–250 Wh |

Lithium is the lightest metal and one of the most reactive, so it gives a lot of energy for little mass.

## The fuel cell

In a **fuel cell** hydrogen and oxygen react without burning, and the energy of the reaction turns directly into electricity:

- anode: H₂ − 2e → 2H⁺
- cathode: O₂ + 4H⁺ + 4e → 2H₂O
- overall: 2H₂ + O₂ → 2H₂O

The only product is water. A fuel cell can reach an efficiency of 60 %, while a petrol engine manages about 25–30 %: in an engine the energy first becomes heat, and most of that heat is lost. Fuel cells powered the Apollo spacecraft, and the astronauts drank the water they produced.

## Hydrogen as a fuel

Hydrogen gives about 143 kJ per gram (three times more than petrol) and produces no CO₂. But how do we get it?

- **"Grey" hydrogen** from methane: CH₄ + 2H₂O → CO₂ + 4H₂. Cheap, but it releases CO₂.
- **"Green" hydrogen** by electrolysis of water using solar or wind electricity. Clean, but still expensive.

The problem is storage: hydrogen is a very light gas, and it must be compressed to 700 atm or liquefied at −253 °C.

## Exercises

1. How many cells are needed for a 12 V lead–acid battery?
2. Why is the electrolyte density low in a flat battery?
3. What moves between the electrodes of a lithium-ion battery?
4. Why is a fuel cell more efficient than an engine?
5. How does "green" hydrogen differ from "grey"?

## Answers

1. Six (6 · 2 V = 12 V).
2. Sulfuric acid is used up to form PbSO₄ and water.
3. Li⁺ ions.
4. It turns chemical energy directly into electricity, without heat as a middle step.
5. Green hydrogen is made by electrolysis of water with renewable energy and no CO₂; grey hydrogen is made from methane and releases CO₂.`,
    quiz: [
      ["Roughly what voltage does one cell of a lead–acid battery give?", ["2 V", "12 V", "1.5 V", "230 V"]],
      ["What forms in a hydrogen fuel cell?", ["Water", "CO₂", "Ozone", "Nothing"]],
      ["What moves between the electrodes inside a lithium-ion battery?", ["Li⁺ ions", "Hydrogen gas", "Lead", "Oxygen"]],
      ["How is \"green\" hydrogen made?", ["By electrolysis of water using renewable electricity", "From methane", "From coal", "From oil"]],
      ["Why do fuel cells waste less energy than engines?", ["They turn chemical energy directly into electricity, without burning", "They are bigger", "They run on petrol", "They are cold"]],
    ],
  },
  "new-materials": {
    objectives: ["Explain why nanoparticles have different properties", "Describe new forms of carbon: fullerene, nanotubes, graphene", "Explain the doping of semiconductors", "Give examples of composites and smart materials"],
    content: `## The nano world

A nanometre (nm) is a billionth of a metre, 10⁻⁹ m, roughly a row of ten atoms. In particles 1–100 nm across, a large share of the atoms is on the surface, so their properties change:

- gold nanoparticles are not yellow but red (glassmakers used them to make ruby glass centuries ago);
- silver nanoparticles kill bacteria and are used in wound dressings;
- titanium(IV) oxide nanoparticles absorb ultraviolet light in sunscreens.

## New forms of carbon

| Substance | Structure | Discovered |
|---|---|---|
| fullerene, C₆₀ | a ball of 60 atoms, like a football | 1985 (Nobel Prize 1996) |
| nanotubes | a cylinder rolled from a carbon sheet | 1991 |
| graphene | a single layer of carbon atoms in a hexagonal net | 2004 (A. Geim and K. Novoselov, Nobel Prize 2010) |

Graphene is only one atom thick, almost transparent, conducts electricity and heat extremely well, and is far stronger than steel of the same thickness. It was first made from graphite by peeling off layers with ordinary sticky tape.

## Semiconductors

Computers and solar panels are built on silicon. Pure silicon conducts poorly, but adding a tiny amount of phosphorus atoms (5 valence electrons) gives free electrons (n-type), while adding boron (3 electrons) gives electron "holes" (p-type). The boundary between these two layers does the work in a diode, a transistor and a solar cell. Silicon for chips must be 99.9999999 % pure.

## Composites

A **composite** is a material made of two or more materials that combines their best properties:

- **reinforced concrete**: concrete is strong in compression, steel bars in tension;
- **fibreglass**: glass fibres in a polymer (boats, pipes);
- **carbon fibre**: carbon threads in a polymer, stronger than steel and several times lighter (aircraft, bicycles).

## Smart materials

- **Shape-memory alloys** (nickel–titanium): a bent wire returns to its original shape when heated.
- **Liquid crystals**: in an electric field they change their arrangement and how much light they let through; screens work this way.

## Exercises

1. Why do nanoparticles behave differently from a large piece of the same substance?
2. What is the formula of fullerene?
3. What is graphene?
4. What must be added to silicon to make an n-type semiconductor?
5. Why is reinforced concrete a composite?

## Answers

1. A large share of their atoms is on the surface.
2. C₆₀.
3. A single layer of carbon atoms in a hexagonal net.
4. Phosphorus (or another element with 5 valence electrons).
5. It combines the strength of concrete in compression with the strength of steel in tension.`,
    quiz: [
      ["What is graphene?", ["A single layer of carbon atoms", "A metal alloy", "A polymer", "A glass"]],
      ["What is the formula of fullerene?", ["C₆₀", "C₆H₆", "CO₂", "SiO₂"]],
      ["How much is 1 nm?", ["10⁻⁹ m", "10⁻³ m", "10⁻⁶ m", "10⁻¹² m"]],
      ["What is a composite?", ["A material made of two or more materials that combines their properties", "A pure element", "A solution", "A gas"]],
      ["What is added to silicon to make an n-type semiconductor?", ["Phosphorus", "Boron", "Oxygen", "Carbon"]],
    ],
  },
  "gas-problems": {
    objectives: ["Use the molar volume and the ideal gas equation", "Calculate the average molar mass of a gas mixture", "Find volume fractions from relative density", "Solve problems with reactions between gases"],
    content: `## Molar volume and the ideal gas equation

At normal conditions (0 °C, 101.3 kPa) 1 mol of any gas takes up **22.4 L**. For other conditions we use the Mendeleev–Clapeyron (ideal gas) equation:

pV = nRT, where R = 8.314 J/(mol·K) and T is in kelvins (T = t + 273).

If p is in kPa and V in litres, the formula can be used without converting units.

**Example 1.** The volume of 1 mol of gas at 25 °C and 101.3 kPa: V = 8.314 · 298 / 101.3 ≈ 24.5 L.

**Example 2.** What is the mass of 5 L of CO₂ at 27 °C and 200 kPa?
n = pV / (RT) = 200 · 5 / (8.314 · 300) ≈ 0.401 mol, m = 0.401 · 44 ≈ 17.6 g.

## Gas mixtures

By Avogadro's law the **volume fraction** φ of a gas equals its mole fraction. The **average molar mass** of a mixture is

M(average) = φ₁M₁ + φ₂M₂ + …

Air (78 % N₂, 21 % O₂, 1 % Ar): M = 0.78 · 28 + 0.21 · 32 + 0.01 · 40 ≈ 29 g/mol. That is where the number 29 for air comes from.

**Example 3.** A mixture of H₂ and O₂ has a density of 10 relative to hydrogen. Find the volume fraction of O₂.
M = 2 · 10 = 20. Let φ(O₂) = x: 32x + 2(1 − x) = 20, 30x = 18, x = 0.6, that is 60 %.

## Reactions in gas mixtures

For gases, volumes follow the coefficients.

**Example 4.** A mixture of 10 L of H₂ and 10 L of O₂ was exploded and cooled (the water is liquid). What is left?
2H₂ + O₂ → 2H₂O: 10 L of H₂ needs 5 L of O₂, so 5 L of O₂ is left.

## Exercises

1. What volume does 0.5 mol of N₂ take up at normal conditions?
2. Find the average molar mass of a mixture of 50 % CO₂ and 50 % N₂ by volume.
3. A mixture of CO and CO₂ has a density of 18 relative to hydrogen. Find the volume fraction of CO.
4. What is the volume of 1 mol of gas at 27 °C and 100 kPa?
5. 6 L of H₂ and 2 L of O₂ reacted. Which gas is left, and how much?

## Answers

1. 0.5 · 22.4 = 11.2 L.
2. 0.5 · 44 + 0.5 · 28 = 36 g/mol.
3. M = 36, 28x + 44(1 − x) = 36, x = 0.5, that is 50 %.
4. V = 8.314 · 300 / 100 ≈ 24.9 L.
5. 2 L of O₂ needs 4 L of H₂, so 2 L of H₂ is left.`,
    quiz: [
      ["What volume does 1 mol of gas take up at normal conditions?", ["22.4 L", "1 L", "6.02 L", "100 L"]],
      ["What is the average molar mass of air?", ["29 g/mol", "32 g/mol", "28 g/mol", "18 g/mol"]],
      ["In a gas mixture, the volume fraction equals…", ["the mole fraction", "the mass fraction", "the density", "the temperature"]],
      ["In pV = nRT, the temperature T is measured in…", ["kelvins", "degrees Celsius", "degrees Fahrenheit", "seconds"]],
      ["4 L of H₂ and 4 L of O₂ reacted to give liquid water. Which gas is left?", ["2 L of O₂", "2 L of H₂", "Nothing", "4 L of O₂"]],
    ],
  },
  "ion-identification": {
    objectives: ["Know the tests for the main cations", "Know the tests for the main anions", "Identify metals by flame colour", "Plan how to identify unknown solutions"],
    content: `## The idea

A **test reaction** gives a visible sign: a precipitate, a colour, a gas or a smell. The reagent is chosen so that only the ion we are looking for gives that sign.

## Cations

| Ion | Reagent | Sign |
|---|---|---|
| H⁺ | litmus, methyl orange | red, pink |
| NH₄⁺ | alkali, heating | smell of ammonia; damp litmus turns blue |
| Cu²⁺ | alkali | blue precipitate, Cu(OH)₂ |
| Fe²⁺ | alkali | greenish precipitate that turns brown in air |
| Fe³⁺ | alkali, thiocyanate (SCN⁻) | brown precipitate Fe(OH)₃; blood-red colour |
| Al³⁺ | alkali (drop by drop) | white precipitate that dissolves in excess alkali |
| Ag⁺ | Cl⁻ | white curdy precipitate, AgCl |
| Ba²⁺ | SO₄²⁻ | white precipitate, BaSO₄ |
| Ca²⁺ | CO₃²⁻ | white precipitate, CaCO₃ |

## Flame colours

| Metal | Li | Na | K | Ca | Ba | Cu |
|---|---|---|---|---|---|---|
| Colour | red | yellow | violet | brick red | yellow-green | blue-green |

In a flame the electrons are excited, and as they fall back they give out light of a colour typical of each element. Fireworks get their colours the same way.

## Anions

| Ion | Reagent | Sign |
|---|---|---|
| Cl⁻ | AgNO₃ | white precipitate, AgCl |
| Br⁻ | AgNO₃ | pale yellow precipitate, AgBr |
| I⁻ | AgNO₃ | yellow precipitate, AgI |
| SO₄²⁻ | BaCl₂ | white precipitate that does not dissolve in acids |
| CO₃²⁻ | acid | a gas that turns limewater cloudy (CO₂) |
| S²⁻ | Pb²⁺ or acid | black precipitate PbS, or a rotten-egg smell (H₂S) |
| PO₄³⁻ | AgNO₃ | yellow precipitate, Ag₃PO₄ |
| OH⁻ | phenolphthalein | crimson |

## A plan: four unknown bottles

The bottles contain solutions of NaCl, Na₂CO₃, Na₂SO₄ and NaOH. How can you tell them apart, taking a small sample from each?

1. Add hydrochloric acid to all of them: bubbles mean **Na₂CO₃**.
2. Add BaCl₂ to the rest: a white precipitate means **Na₂SO₄**.
3. Add phenolphthalein to the last two: crimson means **NaOH**, colourless means **NaCl**.

The order matters: if you started with phenolphthalein, Na₂CO₃ would turn pink too, because of hydrolysis.

## Exercises

1. How can you tell a solution of NaCl from a solution of NaI?
2. How can Fe³⁺ ions be detected?
3. How can you prove that a salt is an ammonium salt?
4. Why is a BaSO₄ precipitate checked with acid?
5. What colour does a potassium salt give to a flame?

## Answers

1. With AgNO₃: NaCl gives a white precipitate, NaI a yellow one.
2. With alkali (a brown precipitate) or with thiocyanate (a blood-red colour).
3. Heat it with alkali: you smell ammonia, and damp litmus turns blue.
4. To tell it from other white precipitates that dissolve in acids (for example BaCO₃).
5. Violet.`,
    quiz: [
      ["Which reagent detects Cl⁻ ions?", ["AgNO₃", "BaCl₂", "NaOH", "Phenolphthalein"]],
      ["How are Ba²⁺ ions detected?", ["With SO₄²⁻ ions: a white precipitate", "With Cl⁻ ions", "With NO₃⁻ ions", "With Na⁺ ions"]],
      ["A blue precipitate with alkali shows…", ["Cu²⁺", "Fe³⁺", "Fe²⁺", "Al³⁺"]],
      ["Which gas turns limewater cloudy when acid is added to a carbonate?", ["CO₂", "H₂", "O₂", "NH₃"]],
      ["What colour does sodium give to a flame?", ["Yellow", "Violet", "Brick red", "Green"]],
    ],
  },
};
