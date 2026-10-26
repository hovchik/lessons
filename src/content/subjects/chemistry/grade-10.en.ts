import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The theory of structure of organic compounds, alkanes, alkenes, alkynes, aromatic hydrocarbons, oil and gas.",
    "Alcohols, phenol, aldehydes, carboxylic acids, esters and fats, carbohydrates.",
  ],
  lessons: {
    "structure-theory": {
      objectives: ["Explain what organic chemistry studies", "State the main ideas of the theory of structure", "Write structural formulas", "Define isomers and homologues"],
      content: `## What is organic chemistry

**Organic chemistry** is the chemistry of carbon compounds (except CO, CO₂, carbonates and a few other simple compounds). More than 100 million organic compounds are known. In 1828 F. Wöhler made urea from an inorganic substance and showed that organic substances can be synthesised.

## Butlerov's theory (1861)

1. The atoms in a molecule are joined in a definite order according to their valency. In organic compounds **carbon is always tetravalent**.
2. The properties of a substance depend not only on its composition but also on its **chemical structure**.
3. The atoms in a molecule influence each other.

Carbon atoms can join to each other, forming **chains** (straight, branched, closed).

## Formulas

For butane, C₄H₁₀:

- molecular: C₄H₁₀
- condensed structural: CH₃–CH₂–CH₂–CH₃

## Isomers and homologues

**Isomers** have the same molecular formula but a different structure and properties:

- n-butane: CH₃–CH₂–CH₂–CH₃ (boils at −0.5 °C)
- isobutane (2-methylpropane): CH₃–CH(CH₃)–CH₃ (boils at −12 °C)

The formula C₂H₆O fits both ethanol, CH₃–CH₂–OH (a liquid), and dimethyl ether, CH₃–O–CH₃ (a gas).

**Homologues** differ by one or more **CH₂** groups and have similar properties (methane, ethane, propane…).

## Exercises

1. Which substances are organic: CH₄, CaCO₃, C₂H₅OH, CO₂?
2. Write condensed formulas for three isomers of pentane, C₅H₁₂.
3. Are CH₄ and C₂H₆ isomers or homologues?
4. Why do ethanol and dimethyl ether have different properties?
5. How many bonds does a carbon atom form in an organic molecule?

## Answers

1. CH₄, C₂H₅OH.
2. CH₃–CH₂–CH₂–CH₂–CH₃, CH₃–CH(CH₃)–CH₂–CH₃, C(CH₃)₄.
3. Homologues.
4. They have different structures.
5. Four.`,
      quiz: [
        ["Who created the theory of structure of organic compounds?", ["Mendeleev", "Butlerov", "Lomonosov", "Wöhler"]],
        ["In organic compounds carbon is:", ["monovalent", "divalent", "tetravalent", "hexavalent"]],
        ["Isomers have:", ["different molecular formulas", "the same molecular formula and a different structure", "the same structure", "only a different colour"]],
        ["Homologues differ by:", ["a CH₂ group", "an O atom", "an OH group", "only temperature"]],
        ["Which substance is not organic?", ["CH₄", "C₂H₅OH", "CaCO₃", "C₆H₁₂O₆"]],
      ],
    },
    alkanes: {
      objectives: ["Write the general formula of alkanes and name the first ten", "Name alkanes by international nomenclature", "Write substitution and combustion reactions", "Know the uses of methane"],
      content: `## Structure

**Alkanes** (saturated hydrocarbons, paraffins) contain only single C–C bonds. Their general formula is **CₙH₂ₙ₊₂**.

| n | Name | Formula | State |
|---|---|---|---|
| 1 | methane | CH₄ | gas |
| 2 | ethane | C₂H₆ | gas |
| 3 | propane | C₃H₈ | gas |
| 4 | butane | C₄H₁₀ | gas |
| 5 | pentane | C₅H₁₂ | liquid |
| 6 | hexane | C₆H₁₄ | liquid |
| 7 | heptane | C₇H₁₆ | liquid |
| 8 | octane | C₈H₁₈ | liquid |

From C₁₆ onwards they are solids (paraffin wax). The methane molecule is a tetrahedron with a bond angle of 109.5°.

## Names (IUPAC)

1. Choose the longest chain.
2. Number it from the end nearer to the branch.
3. Give the position and name of the substituent (methyl, ethyl), then the name of the chain.

CH₃–CH(CH₃)–CH₂–CH₃ is **2-methylbutane**.

## Chemical properties

- **Combustion**: CH₄ + 2O₂ → CO₂ + 2H₂O + heat
- **Substitution** (in light): CH₄ + Cl₂ → CH₃Cl + HCl
- **Thermal decomposition**: CH₄ → C + 2H₂ (1000 °C); cracking: C₈H₁₈ → C₄H₁₀ + C₄H₈
- **Isomerisation**

Alkanes do not decolourise bromine water or potassium permanganate solution.

## Methane

The main component of natural gas (up to 98 %). It also forms in swamps and landfills. Uses: fuel, making hydrogen, carbon black and methanol. A mixture of methane and air can explode, so a strong-smelling substance is added to household gas.

## Exercises

1. Write the formula of nonane (n = 9).
2. Name: CH₃–CH(CH₃)–CH(CH₃)–CH₃.
3. Write the equation for burning propane.
4. How many litres of oxygen are needed to burn 10 L of methane?
5. Why is household gas given a smell?

## Answers

1. C₉H₂₀.
2. 2,3-dimethylbutane.
3. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.
4. 20 L (volume ratio 1 : 2).
5. So that a leak can be noticed by its smell and an explosion prevented.`,
      quiz: [
        ["The general formula of alkanes is:", ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₋₆"]],
        ["The main component of natural gas is:", ["Ethane", "Propane", "Methane", "Butane"]],
        ["The typical reaction of alkanes with chlorine in light is:", ["addition", "substitution", "polymerisation", "hydration"]],
        ["What is C₃H₈ called?", ["Ethane", "Propane", "Butane", "Pentane"]],
        ["Alkanes and bromine water:", ["decolourise it", "do not decolourise it", "turn it red", "make it cloudy"]],
      ],
    },
    alkenes: {
      objectives: ["Write the general formula of alkenes", "Explain the double bond and addition reactions", "Detect unsaturated compounds with bromine water", "Write the polymerisation of ethylene"],
      content: `## Structure

**Alkenes** have one C=C double bond. Their general formula is **CₙH₂ₙ**. Their names end in "-ene": ethene (ethylene) CH₂=CH₂, propene CH₂=CH–CH₃, but-1-ene CH₂=CH–CH₂–CH₃.

A double bond consists of one strong σ bond and one weaker π bond, which breaks easily. That is why alkenes are more reactive than alkanes.

## Addition reactions

- **Hydrogenation**: CH₂=CH₂ + H₂ → CH₃–CH₃ (Ni catalyst)
- **Adding bromine**: CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br; **bromine water is decolourised** (the test for unsaturation)
- **Adding a hydrogen halide**: CH₂=CH₂ + HCl → CH₃–CH₂Cl
- **Hydration**: CH₂=CH₂ + H₂O → CH₃–CH₂OH (the industrial route to ethanol)

Alkenes also decolourise purple KMnO₄ solution.

## Polymerisation

Many small molecules (**monomers**) join into one large molecule (a **polymer**):

n CH₂=CH₂ → (–CH₂–CH₂–)ₙ, **polyethylene**

Polypropylene is made from propene, and polyvinyl chloride from vinyl chloride, CH₂=CHCl.

## Ethylene

A colourless gas with a faint sweetish smell. It speeds up the ripening of fruit (that is why bananas are kept next to apples). It is made by cracking oil and by dehydrating ethanol: C₂H₅OH → CH₂=CH₂ + H₂O (H₂SO₄, 170 °C).

## Exercises

1. Write the formula of pentene.
2. How can you tell ethane from ethylene?
3. Write the reaction of propene with bromine.
4. Why is polyethylene a problem for the environment?
5. How many grams of bromine add to 5.6 L of ethylene (STP)?

## Answers

1. C₅H₁₀.
2. With bromine water: ethylene decolourises it.
3. CH₂=CH–CH₃ + Br₂ → CH₂Br–CHBr–CH₃.
4. It breaks down very slowly in nature, so it has to be recycled.
5. n = 0.25 mol, m(Br₂) = 0.25 · 160 = 40 g.`,
      quiz: [
        ["The general formula of alkenes is:", ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"]],
        ["Which reaction is typical of alkenes?", ["Addition", "Only substitution", "Neutralisation", "Electrolysis"]],
        ["The test for unsaturation is:", ["limewater turning cloudy", "bromine water being decolourised", "phenolphthalein turning red", "a precipitate of AgCl"]],
        ["Polyethylene is made from:", ["methane", "ethylene", "benzene", "ethanol"]],
        ["Hydration of ethylene gives:", ["ethane", "ethanol", "acetic acid", "acetylene"]],
      ],
    },
    "alkynes-dienes-rubber": {
      objectives: ["Write the general formulas of alkynes and alkadienes", "Describe the preparation and properties of acetylene", "Explain how rubber is made", "Compare saturated and unsaturated hydrocarbons"],
      content: `## Alkynes

They have one C≡C triple bond. Their general formula is **CₙH₂ₙ₋₂**. The simplest is **acetylene** (ethyne): HC≡CH.

**Preparation**: CaC₂ + 2H₂O → HC≡CH↑ + Ca(OH)₂ (from calcium carbide), and also by thermal decomposition of methane.

**Properties**

- addition, in two stages: HC≡CH + 2Br₂ → CHBr₂–CHBr₂ (decolourises bromine water)
- hydration (Kucherov reaction): HC≡CH + H₂O → CH₃–CHO (Hg²⁺)
- it burns with a very hot flame (up to 3000 °C in oxygen): 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O

An oxy-acetylene flame is used to **weld and cut metals**.

## Alkadienes

They have two double bonds; their general formula is **CₙH₂ₙ₋₂** (they are isomers of alkynes). Important ones are **buta-1,3-diene**, CH₂=CH–CH=CH₂, and **isoprene**, CH₂=C(CH₃)–CH=CH₂.

## Natural and vulcanised rubber

**Natural rubber** is a polymer of isoprene, obtained from the sap of the rubber tree. **Synthetic rubber** was first made by S. Lebedev from butadiene (1932).

Heating raw rubber with sulfur (**vulcanisation**) gives tough, elastic **vulcanised rubber** (tyres, hoses). With more sulfur you get hard **ebonite**. Armenia had the Nairit plant, which produced chloroprene rubber.

## Comparison

| Class | Bond | Formula | Bromine water |
|---|---|---|---|
| alkanes | C–C | CₙH₂ₙ₊₂ | not decolourised |
| alkenes | C=C | CₙH₂ₙ | decolourised |
| alkynes | C≡C | CₙH₂ₙ₋₂ | decolourised |

## Exercises

1. Write the structural formula of propyne.
2. How many litres of acetylene form from 128 g of CaC₂ (STP)?
3. Why is acetylene used for welding?
4. How does vulcanised rubber differ from raw rubber?
5. Which substances decolourise bromine water: C₂H₆, C₂H₂, C₃H₆, C₃H₈?

## Answers

1. HC≡C–CH₃.
2. M(CaC₂) = 64, n = 2 mol, V = 44.8 L.
3. It gives a very high temperature when it burns.
4. It has been vulcanised, so it is tougher and more elastic.
5. C₂H₂ and C₃H₆.`,
      quiz: [
        ["The formula of acetylene is:", ["C₂H₆", "C₂H₄", "C₂H₂", "C₆H₆"]],
        ["Acetylene is made:", ["from CaCO₃", "from CaC₂ and water", "from ethanol", "from benzene"]],
        ["What is vulcanisation?", ["Heating raw rubber with sulfur", "Polymerisation of ethylene", "Distillation of oil", "Burning coal"]],
        ["Natural rubber is a polymer of which monomer?", ["Ethylene", "Isoprene", "Acetylene", "Benzene"]],
        ["The general formula of alkynes is:", ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₋₆"]],
      ],
    },
    "benzene-arenes": {
      objectives: ["Describe the structure of the benzene molecule", "Write the substitution reactions of benzene", "Know the uses of toluene and benzene", "Know the dangers of aromatic substances"],
      content: `## Structure

**Benzene**, C₆H₆, is a flat ring of six carbon atoms. In 1865 A. Kekulé proposed a formula with alternating double bonds; today we know that **6 electrons of the ring are shared equally** by all the atoms (an aromatic system). That is why the ring is drawn as a hexagon with a circle inside.

The general formula is **CₙH₂ₙ₋₆** (homologues of benzene). Toluene is C₆H₅–CH₃.

## Physical properties

A colourless liquid with a characteristic smell, lighter than water, insoluble in water, boils at 80 °C. It is **poisonous** and carcinogenic, so it is not used in school labs.

## Chemical properties

The aromatic ring is stable, so benzene **does not decolourise bromine water** or KMnO₄. Its typical reactions are **substitutions**:

- bromination (FeBr₃): C₆H₆ + Br₂ → C₆H₅Br + HBr
- nitration (H₂SO₄): C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O (nitrobenzene)

Under harsh conditions addition also happens: C₆H₆ + 3H₂ → C₆H₁₂ (cyclohexane). It burns with a smoky flame.

## Uses

Dyes, medicines, plastics (polystyrene), explosives (TNT from toluene), solvents.

## Exercises

1. Why does benzene not decolourise bromine water, even though its formula seems to have double bonds?
2. Write the equation for burning benzene.
3. How many grams of nitrobenzene form from 39 g of benzene?
4. Why does benzene burn with a smoky flame?
5. Which substance is a homologue of benzene: C₇H₈, C₇H₁₆, C₆H₁₂?

## Answers

1. The ring's electrons form a stable aromatic system.
2. 2C₆H₆ + 15O₂ → 12CO₂ + 6H₂O.
3. n = 0.5 mol, M(C₆H₅NO₂) = 123, m = 61.5 g.
4. The molecule has a large share of carbon; some of it does not burn and forms soot.
5. C₇H₈ (toluene).`,
      quiz: [
        ["The formula of benzene is:", ["C₆H₁₂", "C₆H₆", "C₆H₁₄", "C₂H₂"]],
        ["Typical reactions of benzene are:", ["only additions", "substitutions", "neutralisations", "none at all"]],
        ["Benzene and bromine water:", ["decolourises it", "does not decolourise it", "turns it blue", "makes it cloudy"]],
        ["Nitration of benzene gives:", ["bromobenzene", "nitrobenzene", "toluene", "cyclohexane"]],
        ["Who proposed the ring formula of benzene?", ["Butlerov", "Kekulé", "Mendeleev", "Lebedev"]],
      ],
    },
    "oil-gas-coal": {
      objectives: ["Describe the composition of natural gas and oil", "Explain oil distillation and cracking", "Know the octane number of petrol", "Assess the environmental impact of fuels"],
      content: `## Natural gas and associated gas

**Natural gas** is mostly methane (80–98 %) with some ethane, propane and butane. **Associated petroleum gas** has more propane and butane. Gas cylinders are filled with a propane-butane mixture. Armenia imports gas from Russia and Iran.

## Oil

A dark, oily liquid, lighter than water. It is a mixture of hundreds of hydrocarbons.

**Distillation** (fractional distillation): oil is heated and separated into fractions by boiling point:

| Fraction | Boiling point | Carbon atoms | Uses |
|---|---|---|---|
| gases | up to 40 °C | C₁–C₄ | fuel |
| petrol | 40–200 °C | C₅–C₁₁ | cars |
| kerosene | 150–250 °C | C₁₀–C₁₆ | aircraft |
| diesel | 200–350 °C | C₁₂–C₂₀ | lorries |
| fuel oil | above 350 °C | C₂₀ and more | lubricating oils, paraffin wax, asphalt |

**Cracking** breaks heavy hydrocarbons into lighter ones to increase the yield of petrol: C₁₆H₃₄ → C₈H₁₈ + C₈H₁₆.

The **octane number** shows how well petrol resists knocking (92, 95): it is higher for branched alkanes.

## Coal

**Coking** (heating without air at 1000 °C) gives coke (for metallurgy), coal tar (benzene, phenol, naphthalene) and coke-oven gas.

## Environment

Burning fuel raises CO₂ levels (climate change), and incomplete burning gives CO and soot. Sulfur compounds cause acid rain. Alternatives: solar power (Armenia has about 2700 hours of sunshine a year), wind and hydropower.

## Exercises

1. What is oil distillation based on?
2. Why is cracking carried out?
3. What does petrol rated 95 mean?
4. What does coking coal give?
5. Name three environmental effects of burning fuel.

## Answers

1. The difference in the boiling points of its components.
2. To increase the yield of petrol.
3. Petrol with an octane number of 95.
4. Coke, coal tar, coke-oven gas.
5. More CO₂, emissions of CO and soot, acid rain.`,
      quiz: [
        ["What is oil distillation based on?", ["Colour", "Difference in boiling points", "Density", "Solubility"]],
        ["Which fraction has the lowest boiling point?", ["Fuel oil", "Kerosene", "Petrol", "Diesel"]],
        ["What is cracking for?", ["Cleaning oil", "Breaking heavy hydrocarbons to get petrol", "Liquefying gas", "Removing sulfur"]],
        ["Coke is made from:", ["oil", "coal", "natural gas", "wood"]],
        ["How well petrol resists knocking is shown by:", ["its boiling point", "its octane number", "its density", "its colour"]],
      ],
    },
    alcohols: {
      objectives: ["Recognise the hydroxyl group as a functional group", "Name monohydric alcohols", "Write the properties of alcohols", "Know that methanol is poisonous and how ethanol acts on the body"],
      content: `## Structure

**Alcohols** are derivatives of hydrocarbons in which a hydrogen atom is replaced by a **hydroxyl group, –OH**. The general formula of saturated monohydric alcohols is **CₙH₂ₙ₊₁OH**.

| Name | Formula |
|---|---|
| methanol | CH₃OH |
| ethanol | C₂H₅OH |
| propan-1-ol | CH₃–CH₂–CH₂OH |
| propan-2-ol | CH₃–CH(OH)–CH₃ |

**Hydrogen bonds** form between alcohol molecules, so their boiling points are higher than those of hydrocarbons (ethanol 78 °C, ethane −89 °C). The first alcohols mix with water in any ratio.

## Chemical properties

- with active metals: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑
- combustion: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O (a bluish flame)
- with a hydrogen halide: C₂H₅OH + HBr → C₂H₅Br + H₂O
- dehydration: at 170 °C it gives ethylene, at lower temperatures diethyl ether
- oxidation by CuO to an aldehyde: C₂H₅OH + CuO → CH₃CHO + Cu + H₂O

## Preparation and uses

Ethanol is made by **fermentation** (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂) and by hydration of ethylene. It is used as a solvent, an antiseptic, a fuel, and in making medicines and perfumes.

**Methanol is very poisonous**: 10 mL can cause blindness and 30 mL death. **Ethanol** in large amounts damages the liver, brain and nervous system, and it is especially dangerous for teenagers.

## Exercises

1. Write the formula of butan-1-ol.
2. Why does ethanol boil at a higher temperature than propane, although their molar masses are close?
3. Write the equation for burning propan-1-ol.
4. How many litres of hydrogen are given off when 46 g of ethanol reacts with sodium?
5. Why is methanol dangerous?

## Answers

1. CH₃–CH₂–CH₂–CH₂OH.
2. There are hydrogen bonds between ethanol molecules.
3. 2C₃H₇OH + 9O₂ → 6CO₂ + 8H₂O.
4. n = 1 mol, H₂ 0.5 mol, 11.2 L.
5. It is very poisonous: even a small amount can destroy sight and kill.`,
      quiz: [
        ["The functional group of alcohols is:", ["–CHO", "–COOH", "–OH", "–NH₂"]],
        ["The formula of ethanol is:", ["CH₃OH", "C₂H₅OH", "C₂H₆", "CH₃COOH"]],
        ["Why do alcohols boil at a high temperature?", ["Because of hydrogen bonds between molecules", "They are metals", "They are ionic", "They are polymers"]],
        ["Which alcohol is very poisonous?", ["Ethanol", "Glycerol", "Methanol", "Propanol"]],
        ["Ethanol is made from glucose by:", ["burning", "fermentation", "electrolysis", "nitration"]],
      ],
    },
    "polyols-phenol": {
      objectives: ["Recognise ethylene glycol and glycerol", "Carry out the test for polyhydric alcohols", "Describe phenol and its acidic properties", "Know the uses and dangers of phenol"],
      content: `## Polyhydric alcohols

The molecule has several –OH groups.

- **Ethylene glycol** (ethane-1,2-diol): HO–CH₂–CH₂–OH. A sweet-tasting **poisonous** liquid. It is used in **antifreeze** to lower the freezing point.
- **Glycerol** (propane-1,2,3-triol): HO–CH₂–CH(OH)–CH₂–OH. A thick, sweet, non-poisonous liquid. It is used in cosmetics, pharmaceuticals and for making nitroglycerine.

**Test reaction**: polyhydric alcohols dissolve a fresh blue precipitate of Cu(OH)₂, giving a **bright blue** solution. Monohydric alcohols do not give this reaction.

## Phenol

In **phenol**, C₆H₅OH, the –OH group is joined directly to the benzene ring. It is a colourless crystalline substance with a characteristic smell; it is **poisonous** and burns the skin.

Because of the ring, the hydrogen of the –OH group is more mobile than in alcohols, so phenol is a weak acid ("carbolic acid"):

- C₆H₅OH + NaOH → C₆H₅ONa + H₂O (alcohols do not react with alkalis like this)
- with bromine water it gives a white precipitate (2,4,6-tribromophenol), the test for phenol
- with FeCl₃ it gives a violet colour

**Uses**: phenol-formaldehyde resins (plastics), medicines (aspirin), dyes. A dilute solution of phenol was once used as an antiseptic in surgery.

## Exercises

1. How can you tell ethanol from glycerol?
2. Why does phenol react with an alkali while ethanol does not?
3. Why is ethylene glycol put into a car's cooling system?
4. How can you detect phenol in water?
5. How many –OH groups does a glycerol molecule have?

## Answers

1. With Cu(OH)₂: glycerol gives a bright blue solution.
2. The benzene ring makes the hydrogen of the –OH group more mobile.
3. It lowers the freezing point of the water.
4. With bromine water (white precipitate) or FeCl₃ (violet colour).
5. Three.`,
      quiz: [
        ["How many –OH groups does a glycerol molecule have?", ["1", "2", "3", "4"]],
        ["The test reagent for polyhydric alcohols is:", ["AgNO₃", "Cu(OH)₂", "BaCl₂", "KOH"]],
        ["Phenol with bromine water gives:", ["a blue solution", "a white precipitate", "a gas", "a red colour"]],
        ["Which substance is used in antifreeze?", ["Glycerol", "Ethylene glycol", "Phenol", "Methane"]],
        ["Phenol reacts with an alkali because it is:", ["a strong base", "a weak acid", "a salt", "a metal"]],
      ],
    },
    aldehydes: {
      objectives: ["Recognise the carbonyl and aldehyde groups", "Name aldehydes", "Carry out the silver mirror test", "Know the uses of formaldehyde and acetone"],
      content: `## Structure

**Aldehydes** have the functional group **–CHO**. The general formula of saturated aldehydes is **CₙH₂ₙO**.

| Name | Formula |
|---|---|
| methanal (formaldehyde) | HCHO |
| ethanal (acetaldehyde) | CH₃CHO |
| propanal | C₂H₅CHO |

In **ketones** the carbonyl group C=O is in the middle of the chain: acetone (propanone) CH₃–CO–CH₃. Aldehydes and ketones are isomers of different classes.

## Preparation

Oxidation of alcohols: CH₃OH + CuO → HCHO + Cu + H₂O. Hydration of acetylene (Kucherov).

## Chemical properties

**Oxidation** (aldehydes are easily oxidised to acids):

- **The silver mirror test**: R–CHO + Ag₂O → R–COOH + 2Ag↓ (in ammonia solution). A silver mirror forms on the walls of the test tube.
- **Heating with Cu(OH)₂** gives a red precipitate of Cu₂O: R–CHO + 2Cu(OH)₂ → R–COOH + Cu₂O↓ + 2H₂O

These two reactions are the tests for the aldehyde group. Ketones do not give them.

**Reduction** to an alcohol: CH₃CHO + H₂ → C₂H₅OH.

## Uses

- **Formaldehyde** is a poisonous gas with a sharp smell. Its 40 % solution in water, **formalin**, preserves biological specimens. Phenol-formaldehyde resins are made from it.
- **Acetone** is a solvent (varnishes, paints, glue, nail polish remover).

## Exercises

1. Write the formula of butanal.
2. How can you tell ethanol from ethanal?
3. Write the silver mirror reaction for acetaldehyde.
4. How many grams of silver form from 0.2 mol of ethanal?
5. Are propanal and acetone isomers?

## Answers

1. C₃H₇CHO (CH₃–CH₂–CH₂–CHO).
2. With the silver mirror test or by heating with Cu(OH)₂: only ethanal reacts.
3. CH₃CHO + Ag₂O → CH₃COOH + 2Ag↓.
4. 0.4 mol · 108 = 43.2 g.
5. Yes, both are C₃H₆O.`,
      quiz: [
        ["The functional group of aldehydes is:", ["–OH", "–CHO", "–COOH", "–NH₂"]],
        ["The silver mirror test is a test for:", ["alcohols", "aldehydes", "alkanes", "phenol"]],
        ["Formalin is:", ["a 40 % solution of formaldehyde in water", "solid formaldehyde", "its polymer", "its alcohol"]],
        ["Acetone belongs to the:", ["aldehydes", "ketones", "alcohols", "acids"]],
        ["Aldehydes heated with Cu(OH)₂ give:", ["a blue solution", "a red precipitate", "a white precipitate", "a gas"]],
      ],
    },
    "carboxylic-acids": {
      objectives: ["Recognise the carboxyl group", "Name the main carboxylic acids", "Write the acidic properties of carboxylic acids", "Know the role of carboxylic acids in everyday life"],
      content: `## Structure

**Carboxylic acids** contain the **–COOH** (carboxyl) group. The general formula of saturated monobasic acids is **CₙH₂ₙ₊₁COOH**.

| Name | Formula | Where it occurs |
|---|---|---|
| formic | HCOOH | ants, nettles |
| acetic | CH₃COOH | vinegar (3–9 %) |
| butyric | C₃H₇COOH | rancid butter |
| palmitic | C₁₅H₃₁COOH | fats |
| stearic | C₁₇H₃₅COOH | fats, candles |
| oleic | C₁₇H₃₃COOH | vegetable oils (unsaturated) |

There are also dibasic acids (oxalic, HOOC–COOH) and aromatic acids (benzoic, C₆H₅COOH). Citric and malic acids are found in fruit.

## Acidic properties

Carboxylic acids are weak electrolytes: CH₃COOH ⇄ CH₃COO⁻ + H⁺. They:

- change the colour of indicators,
- react with active metals: 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂↑
- with basic oxides and bases: CH₃COOH + NaOH → CH₃COONa + H₂O
- with carbonates: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑ (they are stronger than carbonic acid)
- with alcohols: **esterification** (next lesson)

## Preparation

- oxidation of alcohols and aldehydes,
- acetic fermentation (vinegar from wine),
- in industry, oxidation of butane.

## Uses

The food industry (acetic acid, citric acid E330), preserving, medicines, dyes, artificial fibre (acetate).

## Exercises

1. Write the reaction of propanoic acid (C₂H₅COOH) with calcium hydroxide.
2. How can you prove that acetic acid is stronger than carbonic acid?
3. How many grams of acetic acid are needed to neutralise 8 g of NaOH?
4. Why do nettles sting?
5. Which acid is unsaturated: stearic or oleic?

## Answers

1. 2C₂H₅COOH + Ca(OH)₂ → (C₂H₅COO)₂Ca + 2H₂O.
2. Acetic acid drives CO₂ out of soda.
3. n(NaOH) = 0.2 mol, m = 0.2 · 60 = 12 g.
4. Nettle hairs contain formic acid.
5. Oleic (C₁₇H₃₃COOH).`,
      quiz: [
        ["The functional group of carboxylic acids is:", ["–CHO", "–OH", "–COOH", "–NH₂"]],
        ["The formula of acetic acid is:", ["HCOOH", "CH₃COOH", "C₂H₅OH", "CH₃CHO"]],
        ["Which acid is found in ants and nettles?", ["Acetic", "Formic", "Citric", "Stearic"]],
        ["Acetic acid with soda gives off:", ["H₂", "O₂", "CO₂", "CH₄"]],
        ["Which acid is unsaturated?", ["Palmitic", "Stearic", "Oleic", "Acetic"]],
      ],
    },
    "esters-fats-soap": {
      objectives: ["Write the esterification reaction", "Describe the composition and properties of fats", "Explain hydrogenation and hydrolysis of fats", "Explain how soap cleans"],
      content: `## Esters

The reaction of an acid with an alcohol is called **esterification** (catalyst: concentrated H₂SO₄):

CH₃COOH + C₂H₅OH ⇄ CH₃COOC₂H₅ + H₂O

**Ethyl acetate** forms. The reaction is reversible; the reverse process is **hydrolysis**.

Many esters smell pleasant and are used as flavourings and fragrances: isoamyl acetate smells of pear (banana), ethyl butyrate of pineapple.

## Fats

**Fats** are esters of glycerol and higher carboxylic acids (**triglycerides**).

- **Animal fats** (beef, pork) are solid: they contain saturated acids (palmitic, stearic).
- **Vegetable oils** (sunflower, olive) are liquid: they contain unsaturated acids (oleic, linoleic). Exceptions are fish oil (animal but liquid) and palm oil (vegetable but solid).

**Hydrogenation of fats**: adding hydrogen to liquid oils gives a solid fat, **margarine**.

**Hydrolysis**: fat + 3H₂O → glycerol + 3 acids (in the body, with the help of enzymes). Fats are an important source of energy: 1 g of fat gives about 38 kJ.

## Soap

**Alkaline hydrolysis** of fats (**saponification**): fat + 3NaOH → glycerol + 3RCOONa. **Sodium salts** make hard soap, **potassium salts** liquid soap.

**How soap cleans**: a soap molecule has a water-loving part (–COO⁻Na⁺) and a fat-loving part (a long hydrocarbon chain). The fatty part goes into the dirt, the ionic part stays in the water, and the dirt is washed away. In hard water soap lathers poorly because insoluble calcium salts form. **Synthetic detergents** work in hard water too.

## Exercises

1. Write the esterification of formic acid and methanol.
2. Why are vegetable oils liquid?
3. How is margarine made?
4. Why does soap lather poorly in hard water?
5. Why does soap wash off greasy dirt?

## Answers

1. HCOOH + CH₃OH ⇄ HCOOCH₃ + H₂O (methyl formate).
2. They contain residues of unsaturated acids.
3. By hydrogenating vegetable oils.
4. Ca²⁺ and Mg²⁺ ions form insoluble salts with soap.
5. One part of the soap molecule binds to the grease and the other to water.`,
      quiz: [
        ["The reaction of an acid with an alcohol is called:", ["neutralisation", "esterification", "hydrogenation", "polymerisation"]],
        ["Fats are esters of which alcohol?", ["Ethanol", "Methanol", "Glycerol", "Ethylene glycol"]],
        ["Why are vegetable oils mostly liquid?", ["They contain unsaturated acids", "They contain water", "They are not esters", "They contain salt"]],
        ["Margarine is made from oils by:", ["hydrolysis", "hydrogenation", "burning", "distillation"]],
        ["Hard soap is made of which salts of higher acids?", ["Potassium", "Sodium", "Calcium", "Magnesium"]],
      ],
    },
    carbohydrates: {
      objectives: ["Classify carbohydrates", "Describe the structure and properties of glucose", "Compare starch and cellulose", "Carry out the test for starch"],
      content: `## Classification

The general formula of **carbohydrates** is Cₙ(H₂O)ₘ. Plants make them during **photosynthesis**: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light, chlorophyll).

| Group | Examples | Formula |
|---|---|---|
| monosaccharides | glucose, fructose | C₆H₁₂O₆ |
| disaccharides | sucrose, lactose, maltose | C₁₂H₂₂O₁₁ |
| polysaccharides | starch, cellulose, glycogen | (C₆H₁₀O₅)ₙ |

## Glucose

A white, crystalline, sweet substance that dissolves well in water ("grape sugar"). Its molecule has **five –OH groups and one aldehyde group**, so glucose is an **aldehyde alcohol**:

- as a polyhydric alcohol, it gives a blue solution with Cu(OH)₂,
- as an aldehyde, it gives the silver mirror test,
- fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (alcoholic), C₆H₁₂O₆ → 2CH₃–CH(OH)–COOH (lactic: matsun, sauerkraut).

In the body glucose is oxidised to give energy: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. Its normal level in blood is about 0.1 %. **Fructose** is an isomer of glucose and is sweeter (honey, fruit).

## Sucrose

Ordinary sugar (from sugar beet and sugar cane). It is hydrolysed to glucose and fructose. It does not give the silver mirror test.

## Starch and cellulose

| | Starch | Cellulose (fibre) |
|---|---|---|
| where | potatoes, grain | plant cell walls, cotton, wood |
| in water | swells in hot water (paste) | does not dissolve |
| role | food store | support |
| digested by humans | yes | no (but good for the gut) |

**The test for starch**: with iodine it gives a **blue** colour. Cellulose is used to make paper, artificial silk (viscose) and explosives, and hydrolysis turns it into glucose.

## Exercises

1. How can you prove that a potato contains starch?
2. Why is glucose called an aldehyde alcohol?
3. How many grams of ethanol does alcoholic fermentation of 360 g of glucose give?
4. How are starch and cellulose alike and how do they differ?
5. Write the equation for photosynthesis.

## Answers

1. With iodine: the cut surface turns blue.
2. It has both –OH groups and an aldehyde group.
3. n = 2 mol, C₂H₅OH 4 mol · 46 = 184 g.
4. They have the same general formula, (C₆H₁₀O₅)ₙ, but a different structure and properties.
5. 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.`,
      quiz: [
        ["The formula of glucose is:", ["C₁₂H₂₂O₁₁", "C₆H₁₂O₆", "(C₆H₁₀O₅)ₙ", "C₂H₅OH"]],
        ["The test reagent for starch is:", ["Cu(OH)₂", "iodine", "AgNO₃", "BaCl₂"]],
        ["Which carbohydrate is a polysaccharide?", ["Glucose", "Fructose", "Sucrose", "Cellulose"]],
        ["Hydrolysis of sucrose gives:", ["glucose and fructose", "only glucose", "starch", "ethanol"]],
        ["Matsun is made by:", ["alcoholic fermentation", "lactic fermentation", "esterification", "hydrogenation"]],
      ],
    },
  },
};
