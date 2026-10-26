import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Electrolytic dissociation, ion exchange reactions and redox reactions.",
    "Halogens, sulfur and its compounds, nitrogen and ammonia, nitric acid and fertilisers, carbon and silicon.",
    "General properties of metals, alkali and alkaline earth metals, aluminium and iron.",
  ],
  lessons: {
    "electrolytic-dissociation": {
      objectives: ["Distinguish electrolytes and non-electrolytes", "State the main ideas of Arrhenius's theory", "Write dissociation equations for acids, bases and salts", "Distinguish strong and weak electrolytes"],
      content: `## Electrolytes

Substances whose solutions or melts conduct electricity are called **electrolytes**: acids, alkalis, soluble salts. **Non-electrolytes** include sugar, alcohol and oxygen.

## Arrhenius's theory (1887)

1. When dissolved in water, electrolytes break up into **ions**: positive (**cations**) and negative (**anions**).
2. When a current flows, cations move to the cathode (−) and anions to the anode (+).
3. Dissociation is a reversible process.

## Dissociation equations

- **Acids** give H⁺ cations: HCl → H⁺ + Cl⁻, H₂SO₄ → 2H⁺ + SO₄²⁻
- **Bases** give OH⁻ anions: NaOH → Na⁺ + OH⁻, Ba(OH)₂ → Ba²⁺ + 2OH⁻
- **Salts** give metal cations and acid-residue anions: Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻

The common properties of acids are due to H⁺ ions, and those of bases to OH⁻ ions.

## Strong and weak electrolytes

The **degree of dissociation** (α) is the fraction of molecules that have broken up. **Strong**: α is close to 1 (HCl, HNO₃, H₂SO₄, alkalis, soluble salts). **Weak**: α ≪ 1 (H₂S, H₂CO₃, CH₃COOH, NH₃·H₂O, water).

## Exercises

1. Pick out the electrolytes: KOH, C₁₂H₂₂O₁₁ (sugar), HNO₃, O₂, CuCl₂.
2. Write the dissociation equations: KNO₃, Ca(OH)₂, Fe₂(SO₄)₃.
3. How many ions form when 1 mol of Na₃PO₄ dissociates completely?
4. Why does distilled water conduct electricity poorly, while tap water conducts better?
5. Which ions do all acids have in common?

## Answers

1. KOH, HNO₃, CuCl₂.
2. KNO₃ → K⁺ + NO₃⁻, Ca(OH)₂ → Ca²⁺ + 2OH⁻, Fe₂(SO₄)₃ → 2Fe³⁺ + 3SO₄²⁻.
3. 4 mol (3Na⁺ + PO₄³⁻).
4. Tap water contains dissolved salts, which are electrolytes.
5. H⁺.`,
      quiz: [
        ["Which substance is an electrolyte?", ["Sugar", "Alcohol", "NaCl", "O₂"]],
        ["Where do cations move?", ["To the anode", "To the cathode", "They do not move", "To both electrodes"]],
        ["What forms when H₂SO₄ dissociates?", ["2H⁺ + SO₄²⁻", "H₂⁺ + SO₄⁻", "2H⁻ + SO₄²⁺", "H⁺ + HSO₄²⁻"]],
        ["Which substance is a weak electrolyte?", ["HCl", "NaOH", "CH₃COOH", "KNO₃"]],
        ["The common properties of bases are due to:", ["H⁺ ions", "OH⁻ ions", "metal atoms", "water molecules"]],
      ],
    },
    "ionic-equations": {
      objectives: ["Write full and net ionic equations", "Decide whether an ion exchange reaction takes place", "Explain test reactions", "Identify ions in a solution"],
      content: `## How to write an ionic equation

**Example.** BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl

1. The **molecular** equation is above.
2. **Full ionic**: write strong electrolytes as ions; write precipitates, gases, water and weak electrolytes as molecules:
Ba²⁺ + 2Cl⁻ + 2Na⁺ + SO₄²⁻ → BaSO₄↓ + 2Na⁺ + 2Cl⁻
3. **Net ionic**: cancel the ions that did not change:
**Ba²⁺ + SO₄²⁻ → BaSO₄↓**

## When the reaction takes place

Ion exchange goes to completion if one of these forms:

- a **precipitate**: Ag⁺ + Cl⁻ → AgCl↓
- a **gas**: CO₃²⁻ + 2H⁺ → H₂O + CO₂↑
- **water** (or a weak electrolyte): H⁺ + OH⁻ → H₂O

All neutralisation reactions have the same net equation: H⁺ + OH⁻ → H₂O.

## Test reactions

| Ion | Reagent | Result |
|---|---|---|
| Cl⁻ | Ag⁺ (AgNO₃) | white curdy precipitate |
| SO₄²⁻ | Ba²⁺ (BaCl₂) | white precipitate |
| CO₃²⁻ | H⁺ (acid) | a gas that turns limewater cloudy |
| Cu²⁺ | OH⁻ | blue precipitate |
| Fe³⁺ | OH⁻ | brown precipitate |
| NH₄⁺ | OH⁻, heating | smell of ammonia |

## Exercises

Write the molecular, full ionic and net ionic equations:

1. AgNO₃ + KCl
2. Na₂CO₃ + HNO₃
3. CuSO₄ + KOH
4. Does the reaction NaNO₃ + KCl take place?
5. How can you tell solutions of Na₂SO₄ and NaCl apart?

## Answers

1. Ag⁺ + Cl⁻ → AgCl↓
2. CO₃²⁻ + 2H⁺ → H₂O + CO₂↑
3. Cu²⁺ + 2OH⁻ → Cu(OH)₂↓
4. No, all the ions stay in solution.
5. With BaCl₂: Na₂SO₄ gives a white precipitate.`,
      quiz: [
        ["What is the net ionic equation of neutralisation?", ["H⁺ + OH⁻ → H₂O", "Na⁺ + Cl⁻ → NaCl", "2H⁺ + O²⁻ → H₂O", "H₂ + O₂ → H₂O"]],
        ["When does ion exchange go to completion?", ["If only soluble salts form", "If a precipitate, gas or water forms", "Always", "Never"]],
        ["Ba²⁺ + SO₄²⁻ → ?", ["BaS", "BaSO₄↓", "BaO", "Ba(OH)₂"]],
        ["Which reagent detects chloride ions?", ["BaCl₂", "NaOH", "AgNO₃", "HCl"]],
        ["The Cu²⁺ ion with an alkali gives:", ["a white precipitate", "a blue precipitate", "a gas", "a red solution"]],
      ],
    },
    "redox-reactions": {
      objectives: ["Define oxidation and reduction", "Find the oxidising and reducing agents", "Draw up an electron balance", "Balance equations by the electron balance method"],
      content: `## Key ideas

**Redox** reactions are reactions in which the oxidation states of elements change.

- **Oxidation** is the loss of electrons; the oxidation state rises: Zn⁰ − 2e → Zn⁺²
- **Reduction** is the gain of electrons; the oxidation state falls: Cu⁺² + 2e → Cu⁰
- The **reducing agent** gives electrons (and is itself oxidised); the **oxidising agent** takes them (and is itself reduced).

## Electron balance

**Example.** Al + O₂ → Al₂O₃

1. Oxidation states: Al⁰ → Al⁺³, O⁰ → O⁻².
2. Al⁰ − 3e → Al⁺³ | 4 (reducing agent)
   O₂⁰ + 4e → 2O⁻² | 3 (oxidising agent)
3. The common multiple is 12. Coefficients: 4Al + 3O₂ → 2Al₂O₃.

**Example.** CuO + H₂ → Cu + H₂O

Cu⁺² + 2e → Cu⁰ (oxidising agent CuO), H₂⁰ − 2e → 2H⁺¹ (reducing agent H₂). All coefficients are 1.

**Example.** Cu + HNO₃(dil.) → Cu(NO₃)₂ + NO + H₂O

Cu⁰ − 2e → Cu⁺² | 3, N⁺⁵ + 3e → N⁺² | 2. 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O (8 = 2 reduced + 6 in the salt).

## Where we meet them

Burning, breathing, photosynthesis, metal smelting, batteries, rusting.

## Exercises

1. Which reactions are redox reactions: CaO + H₂O → Ca(OH)₂, Zn + 2HCl → ZnCl₂ + H₂, 2Na + Cl₂ → 2NaCl?
2. Draw up the balance: Fe + Cl₂ → FeCl₃.
3. Find the oxidising and reducing agents: Fe₂O₃ + 3CO → 2Fe + 3CO₂.
4. Draw up the balance: H₂S + O₂ → SO₂ + H₂O.

## Answers

1. The second and third.
2. Fe⁰ − 3e → Fe⁺³ | 2, Cl₂ + 2e → 2Cl⁻ | 3, 2Fe + 3Cl₂ → 2FeCl₃.
3. Oxidising agent Fe₂O₃ (Fe⁺³), reducing agent CO (C⁺²).
4. S⁻² − 6e → S⁺⁴ | 2, O₂ + 4e → 2O⁻² | 3, 2H₂S + 3O₂ → 2SO₂ + 2H₂O.`,
      quiz: [
        ["What is oxidation?", ["Gain of electrons", "Loss of electrons", "Release of oxygen", "Formation of water"]],
        ["A reducing agent:", ["takes electrons", "gives electrons", "does not change its oxidation state", "is always oxygen"]],
        ["Which reaction is a redox reaction?", ["NaOH + HCl → NaCl + H₂O", "CaCO₃ → CaO + CO₂", "Zn + CuSO₄ → ZnSO₄ + Cu", "BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl"]],
        ["In CuO + H₂ → Cu + H₂O the oxidising agent is:", ["H₂", "CuO", "Cu", "H₂O"]],
        ["How many electrons does an aluminium atom give in Al⁰ → Al⁺³?", ["1", "2", "3", "6"]],
      ],
    },
    halogens: {
      objectives: ["Describe the elements of group VIIA", "Describe the properties and uses of chlorine", "Describe how hydrochloric acid is made and its properties", "Compare the reactivity of the halogens"],
      content: `## The family

The **halogens** are F, Cl, Br, I, At. They have 7 outer electrons and gain 1 electron: oxidation state −1. The simple substances are diatomic molecules.

| Substance | State | Colour |
|---|---|---|
| F₂ | gas | pale yellow |
| Cl₂ | gas | yellow-green |
| Br₂ | liquid | red-brown |
| I₂ | solid | dark violet crystals |

Reactivity decreases down the group: a more reactive halogen displaces a less reactive one: Cl₂ + 2KBr → 2KCl + Br₂.

## Chlorine

A poisonous gas with a sharp smell, heavier than air. It was used as a chemical weapon in the First World War.

- with metals: 2Na + Cl₂ → 2NaCl, 2Fe + 3Cl₂ → 2FeCl₃
- with hydrogen: H₂ + Cl₂ → 2HCl (explosively in light)
- with water: Cl₂ + H₂O ⇄ HCl + HClO (HClO disinfects and bleaches)

**Uses**: disinfecting drinking water, bleaches, polyvinyl chloride (PVC), hydrochloric acid.

## Hydrogen chloride and hydrochloric acid

HCl gas dissolves well in water, and the solution is **hydrochloric acid**. Lab preparation: NaCl (s) + H₂SO₄ (conc.) → NaHSO₄ + HCl↑. Hydrochloric acid is strong: it reacts with metals, oxides, bases and salts. Gastric juice contains hydrochloric acid, which helps digestion.

**Iodine**: a solution of iodine in alcohol is an antiseptic; iodine is important for the thyroid gland, which is why iodised salt is used.

## Exercises

1. Write the reactions of chlorine with calcium and with hydrogen.
2. Does the reaction Br₂ + KCl take place?
3. Why is chlorinated water safe to drink?
4. How can you prove that a solution is hydrochloric acid?
5. What is the oxidation state of chlorine in HClO?

## Answers

1. Ca + Cl₂ → CaCl₂, H₂ + Cl₂ → 2HCl.
2. No, bromine is less reactive than chlorine.
3. HClO kills microbes, and the amount of chlorine is controlled.
4. Litmus turns red (H⁺), and AgNO₃ gives a white precipitate (Cl⁻).
5. +1.`,
      quiz: [
        ["Which halogen is a liquid under normal conditions?", ["Fluorine", "Chlorine", "Bromine", "Iodine"]],
        ["How many outer electrons do halogens have?", ["1", "5", "7", "8"]],
        ["Which reaction takes place?", ["I₂ + KCl", "Br₂ + KCl", "Cl₂ + KBr", "I₂ + KBr"]],
        ["Why is water chlorinated?", ["To improve the taste", "To disinfect it", "To give it colour", "To heat it"]],
        ["What colour is chlorine?", ["Colourless", "Yellow-green", "Red-brown", "Violet"]],
      ],
    },
    "sulfur-and-compounds": {
      objectives: ["Describe the properties of sulfur", "Describe the compounds H₂S, SO₂ and SO₃", "Describe the properties and production of sulfuric acid", "Know the rules for handling concentrated acid"],
      content: `## Sulfur

An element of group VIA (2, 8, 6). A yellow, brittle solid that does not dissolve in water and is not wetted by it. Oxidation states: −2, 0, +4, +6.

- with metals (oxidising agent): Fe + S → FeS, Hg + S → HgS (cleaning up mercury)
- with oxygen (reducing agent): S + O₂ → SO₂ (blue flame)

## Compounds

- **H₂S**, hydrogen sulfide, is a poisonous gas that smells of rotten eggs. Its solution is a weak acid. Some mineral springs in Armenia (Jermuk, Arzni) contain sulfur compounds.
- **SO₂** is a gas with a sharp smell, an acidic oxide: SO₂ + H₂O ⇄ H₂SO₃. In the air it causes **acid rain**.
- **SO₃** reacts violently with water to form H₂SO₄.

## Sulfuric acid

**Production** (contact process):

1. 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂ (roasting pyrite) or S + O₂ → SO₂
2. 2SO₂ + O₂ ⇄ 2SO₃ (V₂O₅ catalyst, 450 °C)
3. SO₃ is absorbed in concentrated H₂SO₄, which is then diluted.

**Properties**: a colourless, oily liquid, almost twice as heavy as water. Mixing it with water gives off a lot of heat, so **acid is poured into water**. The concentrated acid chars organic substances (sugar turns black) and makes iron and aluminium passive in the cold.

**The dilute acid** is a typical acid: Zn + H₂SO₄ → ZnSO₄ + H₂. The test for sulfate ions: Ba²⁺ + SO₄²⁻ → BaSO₄↓.

**Uses**: fertilisers, dyes, batteries, refining oil.

## Exercises

1. Write the reactions of sulfur with aluminium and with oxygen, and state the role of sulfur.
2. Why is SO₂ dangerous for the environment?
3. Carry out the conversions: S → SO₂ → SO₃ → H₂SO₄ → BaSO₄.
4. Why must you not pour water into concentrated sulfuric acid?

## Answers

1. 2Al + 3S → Al₂S₃ (oxidising agent), S + O₂ → SO₂ (reducing agent).
2. It causes acid rain, which harms plants and buildings.
3. S + O₂ → SO₂, 2SO₂ + O₂ → 2SO₃, SO₃ + H₂O → H₂SO₄, H₂SO₄ + BaCl₂ → BaSO₄↓ + 2HCl.
4. The water will boil and the acid will spatter.`,
      quiz: [
        ["What colour is sulfur?", ["White", "Yellow", "Red", "Black"]],
        ["Which gas smells of rotten eggs?", ["SO₂", "H₂S", "SO₃", "O₂"]],
        ["In making sulfuric acid, SO₂ is oxidised to:", ["H₂S", "S", "SO₃", "H₂SO₃"]],
        ["How should concentrated sulfuric acid be diluted?", ["Pour water into the acid", "Pour the acid into water in a thin stream", "Heat it", "Add salt"]],
        ["Which oxide causes acid rain?", ["CaO", "SO₂", "Na₂O", "Al₂O₃"]],
      ],
    },
    "nitrogen-ammonia": {
      objectives: ["Describe the properties of nitrogen", "Explain why the nitrogen molecule is so stable", "Describe the preparation and properties of ammonia", "Identify ammonium salts"],
      content: `## Nitrogen

An element of group VA (2, 5), oxidation states from −3 to +5. About **78 %** of the volume of air is nitrogen, N₂. The molecule has a triple bond (N≡N), so nitrogen is unreactive under normal conditions.

- at high temperature with a catalyst, with hydrogen: N₂ + 3H₂ ⇄ 2NH₃
- in an electric discharge (lightning): N₂ + O₂ → 2NO
- with lithium at room temperature: 6Li + N₂ → 2Li₃N

Nitrogen is part of proteins, and liquid nitrogen (−196 °C) is used for cooling.

## Ammonia NH₃

A colourless gas with a sharp smell (as in smelling salts), lighter than air, very soluble in water (about 700 volumes in 1 volume of water).

**Industrial preparation** (Haber process): N₂ + 3H₂ ⇄ 2NH₃ (iron catalyst, 450–500 °C, high pressure).

**Lab preparation**: 2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2NH₃↑ + 2H₂O

**Properties**

- with water it is a weak base: NH₃ + H₂O ⇄ NH₄⁺ + OH⁻ (phenolphthalein turns crimson)
- with acids it gives ammonium salts: NH₃ + HCl → NH₄Cl (white "smoke")
- it burns in oxygen: 4NH₃ + 3O₂ → 2N₂ + 6H₂O

**Test for the ammonium ion**: heated with an alkali, it gives off the smell of ammonia, and damp litmus turns blue.

## Exercises

1. Why is nitrogen unreactive?
2. Write the reaction of ammonia with sulfuric acid.
3. How is ammonia collected: container mouth up or mouth down?
4. How can you tell solid NH₄Cl from NaCl?
5. Find the oxidation state of nitrogen in NH₃, NO, NO₂, N₂.

## Answers

1. The molecule has a strong triple bond.
2. 2NH₃ + H₂SO₄ → (NH₄)₂SO₄.
3. Mouth down (it is lighter than air).
4. Add an alkali and heat: NH₄Cl gives the smell of ammonia.
5. −3, +2, +4, 0.`,
      quiz: [
        ["Roughly what part of the volume of air is nitrogen?", ["21 %", "50 %", "78 %", "1 %"]],
        ["Why is nitrogen unreactive?", ["The molecule has a triple bond", "It is a metal", "It dissolves in water", "It is heavy"]],
        ["A solution of ammonia in water is:", ["a strong acid", "a weak base", "neutral", "a strong oxidising agent"]],
        ["NH₃ + HCl → ?", ["NH₄Cl", "N₂ + HCl", "NCl₃", "NH₂Cl"]],
        ["The oxidation state of nitrogen in ammonia is:", ["+3", "−3", "+5", "0"]],
      ],
    },
    "nitric-acid-phosphorus": {
      objectives: ["Describe the properties of nitric acid", "Explain how it reacts with metals", "Describe phosphorus and phosphoric acid", "Distinguish nitrogen, phosphorus and potassium fertilisers"],
      content: `## Nitric acid HNO₃

A colourless liquid, a strong acid and a strong **oxidising agent** (N⁺⁵). It partly decomposes in light, so it is kept in dark bottles.

When it reacts with metals **no hydrogen is given off**; nitrogen oxides form instead:

- Cu + 4HNO₃(conc.) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O (a brown gas)
- 3Cu + 8HNO₃(dil.) → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O

The concentrated acid makes Fe, Al and Cr passive in the cold; it does not dissolve gold or platinum.

**Production**: 4NH₃ + 5O₂ → 4NO + 6H₂O, 2NO + O₂ → 2NO₂, 4NO₂ + O₂ + 2H₂O → 4HNO₃.

**Nitrates** are all soluble in water. KNO₃, NaNO₃ and NH₄NO₃ are known as saltpetres.

## Phosphorus

An element of group VA (2, 8, 5). **White phosphorus** is poisonous, glows in the dark and catches fire by itself in air (it is stored under water). **Red phosphorus** is stable and is used on the striking surface of a matchbox.

4P + 5O₂ → 2P₂O₅, P₂O₅ + 3H₂O → 2H₃PO₄ (phosphoric acid, of medium strength). Phosphorus makes up the main part of bones and teeth as Ca₃(PO₄)₂.

## Fertilisers

| Type | What it gives the plant | Examples |
|---|---|---|
| nitrogen | leaf growth | NH₄NO₃, (NH₄)₂SO₄, urea CO(NH₂)₂ |
| phosphorus | roots, fruit | Ca(H₂PO₄)₂ (superphosphate) |
| potassium | hardiness | KCl, K₂SO₄, wood ash |

Too much fertiliser pollutes rivers and lakes (algae grow wildly), so the doses must be followed.

## Exercises

1. Why does nitric acid not give hydrogen with metals?
2. Which fertiliser has the larger mass fraction of nitrogen: NH₄NO₃ or (NH₄)₂SO₄?
3. Why is white phosphorus stored under water?
4. Carry out: P → P₂O₅ → H₃PO₄ → Ca₃(PO₄)₂.

## Answers

1. The oxidising agent is N⁺⁵, not H⁺, so it is the nitrogen that is reduced.
2. NH₄NO₃: 28 / 80 = 35 %, (NH₄)₂SO₄: 28 / 132 ≈ 21 %. The first.
3. It catches fire by itself in air.
4. 4P + 5O₂ → 2P₂O₅, P₂O₅ + 3H₂O → 2H₃PO₄, 2H₃PO₄ + 3Ca(OH)₂ → Ca₃(PO₄)₂ + 6H₂O.`,
      quiz: [
        ["Which gas is given off when copper reacts with concentrated nitric acid?", ["H₂", "NO₂", "O₂", "N₂"]],
        ["Why is nitric acid kept in dark bottles?", ["It decomposes in light", "So it does not freeze", "So it does not evaporate", "So it does not change colour"]],
        ["Which fertiliser is a potassium fertiliser?", ["NH₄NO₃", "KCl", "Ca(H₂PO₄)₂", "CO(NH₂)₂"]],
        ["Which form of phosphorus is used on a matchbox striking surface?", ["White", "Red", "Black", "Yellow"]],
        ["Which element, together with phosphorus, mainly makes up bones?", ["Sodium", "Calcium", "Iron", "Potassium"]],
      ],
    },
    "carbon-silicon": {
      objectives: ["Describe the allotropes of carbon", "Describe the oxides CO and CO₂", "Describe carbonates and the carbon cycle", "Know the uses of silicon compounds"],
      content: `## Carbon

An element of group IVA (2, 4). **Allotropes**:

- **diamond**: the hardest natural substance, transparent, does not conduct electricity,
- **graphite**: soft, black, conducts electricity (pencils, electrodes),
- **fullerenes, graphene, nanotubes**.

**Activated charcoal** has a large porous surface and **adsorbs** (takes up) gases and dyes (filters, gas masks, tablets).

Carbon is a reducing agent: C + O₂ → CO₂, 2CuO + C → 2Cu + CO₂.

## Carbon oxides

| | CO | CO₂ |
|---|---|---|
| name | carbon monoxide | carbon dioxide |
| property | odourless, very poisonous | does not support burning, heavier than air |
| type | non-salt-forming | acidic |
| uses | reducing metals | fire extinguishers, fizzy drinks, dry ice |

CO binds to haemoglobin in the blood and stops it carrying oxygen. When a stove is burning in a closed room, the room must be aired.

CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O (limewater turning cloudy is the test for CO₂).

## Carbonates

CaCO₃ is chalk, marble and limestone. Armenia has the Ararat cement plant and travertine deposits. Carbonates fizz with acids, giving off CO₂. Baking soda is NaHCO₃.

**The carbon cycle**: plants take in CO₂ during photosynthesis, animals give it off when they breathe, and burning fuel raises the amount of CO₂ in the atmosphere (the greenhouse effect).

## Silicon

The second most common element in the Earth's crust after oxygen. **SiO₂** is sand and quartz. Silicon is a semiconductor (microchips, solar panels). Silicates are used to make **glass, cement and ceramics**. Armenian tuff and perlite are silicate rocks of volcanic origin.

## Exercises

1. Why do diamond and graphite have different properties?
2. How can you tell CO₂ from N₂?
3. Write the reaction of chalk with hydrochloric acid.
4. Why is carbon monoxide dangerous?
5. What is glass made from?

## Answers

1. The atoms are arranged differently in the crystal.
2. With limewater: CO₂ turns it cloudy.
3. CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂.
4. It binds to haemoglobin and blocks the transport of oxygen.
5. From sand (SiO₂), soda and limestone.`,
      quiz: [
        ["Which of these is an allotrope of carbon?", ["Quartz", "Graphite", "Chalk", "Sand"]],
        ["Which gas turns limewater cloudy?", ["CO", "CO₂", "O₂", "N₂"]],
        ["What is CO called?", ["Carbon dioxide", "Carbon monoxide", "Dry ice", "Methane"]],
        ["Activated charcoal is used because it:", ["conducts electricity well", "adsorbs gases and substances", "is very hard", "dissolves in water"]],
        ["The main component of sand is:", ["CaCO₃", "SiO₂", "Al₂O₃", "NaCl"]],
      ],
    },
    "metals-general": {
      objectives: ["Explain metallic bonding and the physical properties of metals", "Write the chemical properties of metals", "Describe how metals are obtained", "Explain corrosion and how to prevent it"],
      content: `## Position and structure

About 80 % of the elements are metals. They have few outer electrons (1–3), which they give away easily, acting as **reducing agents**.

## Physical properties

Thanks to metallic bonding (free electrons in the crystal), metals have **lustre**, **electrical and thermal conductivity** and **malleability**. The best conductor is silver, then copper. Mercury is a liquid; tungsten melts at 3410 °C (lamp filaments). Light metals include Li, Na and Al; heavy ones include Pb, Au and Os.

## Chemical properties

- with non-metals: 2Mg + O₂ → 2MgO, Fe + S → FeS
- active metals with water: Ca + 2H₂O → Ca(OH)₂ + H₂
- metals to the left of hydrogen with acids: Fe + 2HCl → FeCl₂ + H₂
- with salt solutions, a more active metal displaces a less active one

## Obtaining metals

- **pyrometallurgy**: reduction with coal, CO or aluminium at high temperature: Fe₂O₃ + 3CO → 2Fe + 3CO₂
- **hydrometallurgy**: from solutions, for example CuSO₄ + Fe → FeSO₄ + Cu
- **electrometallurgy**: electrolysis of melts (Na, Al)

Armenia is rich in copper-molybdenum ores (Kajaran, Agarak) and also has gold deposits (Sotk).

## Corrosion

**Corrosion** is the destruction of metals by their surroundings (rust). Iron rusts when oxygen and moisture are present.

**Protection**: painting and varnishing, coating with another metal (galvanising, chrome plating), stainless steel, attaching a more active metal (a "sacrificial" anode).

## Exercises

1. Why do metals conduct electricity?
2. Which metals react with water under normal conditions: K, Cu, Ca, Fe?
3. Write the reduction of copper(II) oxide with hydrogen.
4. List three ways of protecting against corrosion.
5. Why does a galvanised bucket take a long time to rust?

## Answers

1. The crystal has free electrons.
2. K, Ca.
3. CuO + H₂ → Cu + H₂O.
4. Painting, coating with another metal, a stainless alloy.
5. Zinc is more active and is oxidised itself, protecting the iron.`,
      quiz: [
        ["Which metal is a liquid under normal conditions?", ["Lead", "Mercury", "Sodium", "Tin"]],
        ["Which metal is the best conductor?", ["Copper", "Aluminium", "Silver", "Iron"]],
        ["In chemical reactions, metals are mainly:", ["oxidising agents", "reducing agents", "catalysts", "neutral"]],
        ["What is corrosion?", ["Melting of a metal", "Destruction of a metal by its surroundings", "Casting a metal", "Making an alloy"]],
        ["In industry, aluminium is obtained:", ["by reduction with coal", "by electrolysis of a melt", "from a solution using iron", "by heating in air"]],
      ],
    },
    "alkali-alkaline-earth": {
      objectives: ["Describe the metals of groups IA and IIA", "Write the reactions of sodium and calcium", "Know the uses of important compounds", "Explain water hardness and how to remove it"],
      content: `## Alkali metals (IA)

Li, Na, K, Rb, Cs, Fr. They have 1 outer electron, oxidation state +1. They are soft (can be cut with a knife), light and very reactive. They are stored under kerosene. Reactivity increases down the group.

- 2Na + 2H₂O → 2NaOH + H₂↑ (sodium darts about on the surface of the water)
- 2Na + Cl₂ → 2NaCl
- they colour a flame: Na yellow, K violet, Li red

**Compounds**: NaCl is table salt, NaOH is caustic soda (soap, paper), Na₂CO₃ is washing soda (glass), KCl is a fertiliser. Potassium and sodium are important for nerve impulses.

## Alkaline earth metals (IIA)

Be, Mg, Ca, Sr, Ba, Ra. They have 2 outer electrons, oxidation state +2.

- Ca + 2H₂O → Ca(OH)₂ + H₂ (Mg reacts with hot water)
- 2Mg + O₂ → 2MgO (bright light, fireworks)

**Calcium compounds**: CaCO₃ is chalk and marble; CaO is quicklime; Ca(OH)₂ is slaked lime (building); CaSO₄·2H₂O is gypsum (medicine). Calcium is essential for bones, and magnesium is part of chlorophyll.

## Water hardness

Water containing Ca²⁺ and Mg²⁺ ions is **hard**: soap lathers poorly and kettles get limescale.

- **Temporary** hardness (hydrogencarbonates) is removed by boiling: Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂
- **Permanent** hardness (sulfates, chlorides) is removed with washing soda: CaSO₄ + Na₂CO₃ → CaCO₃↓ + Na₂SO₄, or with ion-exchange filters.

Limescale can be removed with vinegar or citric acid.

## Exercises

1. Why is sodium stored under kerosene?
2. Write the reaction of potassium with water.
3. How can you tell NaCl and KCl apart by flame colour?
4. How do you remove temporary hardness?
5. Why is limescale harmful?

## Answers

1. In air it oxidises quickly and reacts with moisture.
2. 2K + 2H₂O → 2KOH + H₂.
3. Na gives yellow, K violet.
4. By boiling.
5. It conducts heat poorly, wastes energy and damages appliances.`,
      quiz: [
        ["How many outer electrons do alkali metals have?", ["1", "2", "3", "7"]],
        ["What colour does sodium give a flame?", ["Red", "Yellow", "Violet", "Green"]],
        ["Which ions cause water hardness?", ["Na⁺ and K⁺", "Ca²⁺ and Mg²⁺", "Cl⁻ and SO₄²⁻", "H⁺ and OH⁻"]],
        ["Temporary hardness is removed by:", ["cooling", "boiling", "adding salt", "oxygen"]],
        ["Which substance is called quicklime?", ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"]],
      ],
    },
    aluminium: {
      objectives: ["Describe aluminium from its place in the table", "Explain why aluminium is stable in air", "Write the amphoteric properties of aluminium and its compounds", "Know how aluminium is obtained and used"],
      content: `## The element

Al: period 3, group IIIA (2, 8, 3), oxidation state +3. The most common metal in the Earth's crust (about 8 %). In nature it is found only in compounds: **bauxite** (Al₂O₃·nH₂O), alumina, nepheline.

## Physical properties

Silvery white, light (2.7 g/cm³), malleable (it is made into foil), a good conductor.

## Chemical properties

Aluminium is a reactive metal, but it is covered with a thin, tough **film of Al₂O₃** that protects it.

- 4Al + 3O₂ → 2Al₂O₃ (the powder burns with a bright flame)
- 2Al + 6HCl → 2AlCl₃ + 3H₂
- with water once the film is removed
- **aluminothermy**, reducing metals: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe (thermite, welding rails)

## Amphoteric behaviour

Al₂O₃ and Al(OH)₃ react with both acids and alkalis:

- Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O
- Al(OH)₃ + NaOH → Na[Al(OH)₄] (in solution)

Aluminium itself also dissolves in alkalis, giving off hydrogen. That is why alkaline or acidic food should not be stored in aluminium pans.

## Production and uses

**Electrolysis** of Al₂O₃ melted in cryolite (950 °C): 2Al₂O₃ → 4Al + 3O₂. Making aluminium takes a lot of electricity, so **recycling** (cans, foil) pays off well. Armenia has an aluminium foil plant.

Uses: aircraft (the alloy duralumin), wires, cookware, packaging, building structures.

## Exercises

1. Why do aluminium objects not rust?
2. Write the reaction of aluminium with sulfuric acid.
3. Prove with equations that Al(OH)₃ is amphoteric.
4. How many grams of aluminium are needed to get 112 g of iron by aluminothermy?
5. Why is recycling aluminium useful?

## Answers

1. They are covered with a protective Al₂O₃ film.
2. 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂.
3. Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O, Al(OH)₃ + NaOH → Na[Al(OH)₄].
4. n(Fe) = 2 mol = n(Al), m = 2 · 27 = 54 g.
5. It saves electricity and natural resources.`,
      quiz: [
        ["Which metal is the most common in the Earth's crust?", ["Iron", "Aluminium", "Copper", "Calcium"]],
        ["Why is aluminium stable in air?", ["It is a passive metal", "It is covered with an Al₂O₃ film", "It does not react with oxygen", "It is nobler than gold"]],
        ["Aluminium hydroxide is:", ["only a base", "only an acid", "amphoteric", "a salt"]],
        ["What is aluminothermy?", ["Melting aluminium", "Reducing metals with aluminium", "Electrolysis of aluminium", "Painting aluminium"]],
        ["Aluminium is obtained:", ["from bauxite", "from pyrite", "from chalk", "from sand"]],
      ],
    },
    iron: {
      objectives: ["Describe iron from its place in the table", "Write the reactions of iron", "Distinguish compounds of Fe²⁺ and Fe³⁺", "Describe how cast iron and steel are made"],
      content: `## The element

Fe: period 4, the B subgroup of group VIII, Z = 26, oxidation states +2, +3. The second most common metal in the Earth's crust. **Ores**: magnetite Fe₃O₄, haematite Fe₂O₃, limonite, pyrite FeS₂. Armenia has the Hrazdan and Abovyan iron deposits.

## Properties

A silvery grey, malleable metal that is attracted by a magnet and melts at 1539 °C.

- 3Fe + 2O₂ → Fe₃O₄ (burning)
- 2Fe + 3Cl₂ → 2FeCl₃ (a strong oxidising agent gives Fe⁺³)
- Fe + S → FeS (a weak oxidising agent gives Fe⁺²)
- Fe + 2HCl → FeCl₂ + H₂
- Fe + CuSO₄ → FeSO₄ + Cu
- rusting: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃

## Fe²⁺ and Fe³⁺

| | Fe(OH)₂ | Fe(OH)₃ |
|---|---|---|
| colour | white with a greenish tinge | brown |
| in air | turns brown as it oxidises to Fe(OH)₃ | stable |

Fe²⁺ + 2OH⁻ → Fe(OH)₂↓, Fe³⁺ + 3OH⁻ → Fe(OH)₃↓. The Fe³⁺ ion is also detected with potassium thiocyanate (blood-red colour).

## Cast iron and steel

**Cast iron** (2–4 % carbon) is made in a **blast furnace**: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Cast iron is hard but brittle.

**Steel** (less than 2 % carbon) is made from cast iron by burning off the excess carbon. It is strong and malleable. Adding chromium and nickel gives **stainless steel**.

## Biological role

Iron is part of haemoglobin, which carries oxygen. A lack of iron causes anaemia. Meat, liver, beans and pomegranate are rich in iron.

## Exercises

1. Why does iron give FeCl₃ with chlorine but FeCl₂ with hydrochloric acid?
2. Carry out the conversions: Fe → FeCl₃ → Fe(OH)₃ → Fe₂O₃.
3. How does cast iron differ from steel?
4. How can you tell solutions of FeCl₂ and FeCl₃ apart?
5. How many grams of iron are in 320 g of Fe₂O₃?

## Answers

1. Chlorine is a strong oxidising agent, and H⁺ is a weak one.
2. 2Fe + 3Cl₂ → 2FeCl₃, FeCl₃ + 3NaOH → Fe(OH)₃ + 3NaCl, 2Fe(OH)₃ → Fe₂O₃ + 3H₂O.
3. In carbon content (2–4 % versus less than 2 %).
4. With an alkali: a greenish-white and a brown precipitate.
5. 320 · 0.7 = 224 g.`,
      quiz: [
        ["What is the atomic number of iron?", ["20", "24", "26", "56"]],
        ["The reaction Fe + Cl₂ forms:", ["FeCl₂", "FeCl₃", "Fe₂Cl", "FeCl"]],
        ["What colour is Fe(OH)₃?", ["Blue", "White", "Brown", "Green"]],
        ["Cast iron is made:", ["in a blast furnace", "by electrolysis", "from a solution", "by aluminothermy"]],
        ["Which substance contains iron?", ["Chlorophyll", "Haemoglobin", "Insulin", "Starch"]],
      ],
    },
  },
};
