import type { RuLesson } from "../../ru-overlay";

export const enExtra7: Record<string, RuLesson> = {
  "history-of-chemistry": {
    objectives: ["Tell how chemistry became a science", "Describe what Boyle, Lavoisier, Dalton and Mendeleev contributed", "Tell a guess from knowledge tested by experiment", "Give examples of chemical processes in ancient Armenia"],
    content: `## From craft to science

People used chemical changes long before the word "chemistry" existed. Cooking over a fire, firing clay, smelting metal from ore, making wine and vinegar, tanning leather: all of these are chemical reactions. The Armenian Highlands were one of the oldest centres of metalworking: workshops for smelting bronze and iron have been excavated at Metsamor, and the Areni-1 cave holds one of the oldest known wineries in the world (about 6,100 years old). Craftsmen knew **what** to do, but not **why** it worked.

## Alchemy

In the Middle Ages **alchemists** tried to turn cheap metals into gold and to find the "philosopher's stone". The goal was impossible, because in a reaction one element never turns into another. But alchemists invented ways to distil, crystallise and filter, made acids and alcohol, and created much of the laboratory glassware we still use.

## Chemistry becomes a science

| Scientist | Year | What they did |
|---|---|---|
| R. Boyle | 1661 | demanded that every claim be tested by experiment; gave the first scientific definition of an element |
| M. Lomonosov, A. Lavoisier | 1748, 1789 | law of conservation of mass; explained burning with oxygen |
| J. Dalton | 1803 | atomic theory, relative masses of atoms |
| J. Berzelius | 1813 | the modern system of element symbols |
| D. Mendeleev | 1869 | the periodic law and the table of elements |

The most important change was **measurement**. An alchemist described colour and smell; Lavoisier weighed everything. Numbers made it possible to test ideas and throw out mistakes.

## What a scientific law is

A scientific **law** describes what always happens (mass is conserved). A **theory** explains why (atoms are neither created nor destroyed). A theory stands as long as it agrees with every experiment; if a fact contradicts it, the theory is changed, as happened to the phlogiston theory.

## Worked example

**Question.** An alchemist claimed that lead "ripens" into gold if it is heated for a long time. How would Lavoisier have tested this?

**Answer.** Weigh the lead, heat it in a closed vessel, weigh it again and test the properties of the product (density, colour, solubility in acid). He would find lead oxide, not gold: the extra mass comes from oxygen.

## Exercises

1. Name three crafts that use chemical reactions.
2. Why could alchemists not make gold from lead?
3. How did Lavoisier's approach differ from the alchemists'?
4. What is the difference between a law and a theory? Give an example.
5. Who created the periodic table of elements, and when?

## Answers

1. For example: metalworking, pottery (firing clay), winemaking, tanning, soap making.
2. In a chemical reaction atoms are only rearranged; one element does not turn into another.
3. He weighed everything, gases included, and drew conclusions from measurements.
4. A law describes what always happens; a theory explains why. The law of conservation of mass is explained by atomic theory.
5. D. Mendeleev, in 1869.`,
    quiz: [
      ["Who put forward atomic theory in 1803?", ["Lavoisier", "Dalton", "Boyle", "Mendeleev"]],
      ["Why could alchemists not turn lead into gold?", ["They lacked a high enough temperature", "In a reaction one element does not turn into another", "Lead was too expensive", "Gold dissolves in water"]],
      ["What was the main novelty in Lavoisier's work?", ["Accurate weighing, gases included", "The search for the philosopher's stone", "Tasting substances", "Watching the stars"]],
      ["Which is correct?", ["A theory describes, a law explains", "A law describes what happens, a theory explains why", "A law and a theory are the same", "A theory never changes"]],
      ["When did Mendeleev discover the periodic law?", ["1661", "1789", "1803", "1869"]],
    ],
  },

  "particles-in-motion": {
    objectives: ["Explain diffusion by the motion of particles", "Describe solids, liquids and gases with the particle model", "Explain why diffusion speeds up on heating", "Explain gas pressure by the impacts of particles"],
    content: `## Diffusion

Open a bottle of perfume in one corner of a room and within minutes the smell reaches every corner. Sugar dropped into tea sweetens all of it in time, even without stirring. Substances mixing by themselves is called **diffusion**.

Diffusion proves two things: substances are made of **particles**, and those particles are **always moving**. If matter were continuous, or the particles stood still, there would be nothing to make them mix.

## How fast diffusion is

- **In gases**: fast (minutes), because there is a lot of free space between the particles.
- **In liquids**: slow (hours, days), because the particles are close together and keep colliding.
- **In solids**: very slow (years): plates of gold and lead pressed together grow into each other by about 1 mm in a few years.

**Heating** speeds diffusion up, because temperature is a measure of how fast particles move: the warmer, the faster. A tea bag colours hot water in seconds and cold water in minutes.

## The particle model

| | Solid | Liquid | Gas |
|---|---|---|---|
| arrangement | close, regular | close, irregular | very far apart |
| motion | vibrate in place | slide past each other | fly about freely |
| shape | keeps it | takes the shape of the container | fills the whole container |
| volume | keeps it | keeps it | fills the whole container |
| compressibility | hardly compresses | hardly compresses | compresses easily |

A gas is easy to squeeze because most of its volume is empty space: in air the molecules themselves take up only about 0.1 % of the volume.

## Why a gas presses

Gas molecules hit the walls of their container billions of times a second. Each hit is tiny, but together they produce **pressure**. Heat the gas and the molecules hit harder and more often: the pressure rises. That is why a closed can must never be heated on a fire, and why car tyre pressure goes up on a hot summer day.

## Brownian motion

In 1827 the botanist R. Brown saw under a microscope that tiny particles released from pollen in water jiggle without stopping. They are being hit by invisible water molecules, unevenly from different sides. In 1905 A. Einstein worked out the mathematics of this motion, and experiments confirmed it: one of the strongest proofs that molecules exist.

## Exercises

1. Why does the smell of cooking reach the other rooms?
2. Where will a crystal of potassium permanganate colour the water faster: in cold water or in hot? Why?
3. Why is a gas easy to compress, but water is not?
4. Why does a ball go slightly soft in frosty weather?
5. What causes Brownian motion?

## Answers

1. Diffusion: the molecules of the smelly substance move and mix with the air.
2. In hot water, because there the particles move faster.
3. There is a lot of empty space between gas particles, while in a liquid the particles almost touch.
4. In the cold the molecules move more slowly and hit the walls less hard, so the pressure drops.
5. Uneven hits of water molecules on the particle from different sides.`,
    quiz: [
      ["What is diffusion?", ["The melting of a substance", "Substances mixing by themselves because their particles move", "The squeezing of a gas", "The breaking down of a substance"]],
      ["Where is diffusion fastest?", ["In solids", "In liquids", "In gases", "The same everywhere"]],
      ["Why does diffusion speed up on heating?", ["The particles get bigger", "The particles move faster", "The number of particles grows", "The particles stick together"]],
      ["What causes gas pressure?", ["Molecules hitting the walls of the container", "The weight of the gas", "Attraction between molecules", "The colour of the container"]],
      ["Which state keeps its volume but takes the shape of its container?", ["Solid", "Liquid", "Gas", "None"]],
    ],
  },

  allotropy: {
    objectives: ["Define allotropy", "Explain the different properties of diamond and graphite by their structure", "Compare oxygen and ozone", "Explain the role of the ozone layer"],
    content: `## One element, several simple substances

The same chemical element can form several simple substances. This is called **allotropy**, and the substances are **allotropes** of the element. They are made of the same atoms but differ in **structure** or in the **make-up of the molecule**.

## Carbon: diamond and graphite

| | Diamond | Graphite |
|---|---|---|
| appearance | transparent, sparkling | dark grey, greasy to touch |
| hardness | the hardest natural substance | soft, leaves a mark on paper |
| electrical conductivity | does not conduct | conducts |
| structure | every atom bonded to 4 neighbours in a 3D network | atoms in flat layers, each with 3 neighbours |

**Why they are so different.** In diamond every atom is bonded firmly to four neighbours in all directions: the network would have to be broken everywhere, so diamond is the hardest. In graphite atoms are bonded firmly only within a layer, while the layers are held together weakly and slide easily. That is why a pencil writes: layers stay behind on the paper. In graphite one electron of each atom is "free" and can move along the layer, so graphite conducts electricity.

Diamond burns in oxygen just like coal: C + O₂ → CO₂. This proves that diamond is carbon. Other forms of carbon are the **fullerenes** (the molecule C₆₀ looks like a football) and **graphene**, a layer of graphite one atom thick, which won a Nobel Prize in 2010.

## Oxygen and ozone

| | Oxygen O₂ | Ozone O₃ |
|---|---|---|
| colour, smell | colourless, odourless | bluish, with a sharp smell |
| reactivity | reactive | far more reactive, a strong oxidising agent |
| effect on people | needed for breathing | poisonous in large amounts |

Ozone forms under lightning and ultraviolet light: 3O₂ → 2O₃. The "fresh" smell of air after a thunderstorm is the smell of ozone.

The **ozone layer**, 20–30 km up, absorbs most of the Sun's dangerous ultraviolet rays. Without it, life on land would be very hard. Last century some refrigerants (CFCs) destroyed ozone; the Montreal Protocol of 1987 banned them, and the layer is slowly recovering.

## Exercises

1. What is allotropy? Give examples for two elements.
2. Why is graphite soft and diamond hard, if both are carbon?
3. How can you prove that diamond is carbon?
4. How do the molecules of oxygen and ozone differ?
5. Why is the ozone layer important?

## Answers

1. One element forming several simple substances: carbon (diamond, graphite), oxygen (O₂, O₃).
2. In diamond each atom is bonded firmly to 4 neighbours in all directions; the layers of graphite are held together weakly and slide.
3. Burn it in oxygen: only carbon dioxide, CO₂, forms.
4. An oxygen molecule has two atoms (O₂), an ozone molecule three (O₃).
5. It absorbs most of the Sun's dangerous ultraviolet rays.`,
    quiz: [
      ["What is allotropy?", ["A mixture of several elements", "One element forming several simple substances", "The melting of a substance", "A reaction of two compounds"]],
      ["Why does graphite conduct electricity?", ["It contains metal impurities", "One electron of each atom can move along the layer", "It is wet", "It is transparent"]],
      ["What forms when diamond burns in oxygen?", ["Water", "Graphite", "Carbon dioxide", "Ozone"]],
      ["What is the formula of ozone?", ["O", "O₂", "O₃", "CO₂"]],
      ["What does the ozone layer absorb?", ["Most of the ultraviolet rays", "Carbon dioxide", "All light", "Water vapour"]],
    ],
  },

  "constant-composition": {
    objectives: ["State the law of constant composition", "Find the mass ratio of elements from a formula", "Calculate how much of each element is needed to make a compound", "Explain the law with atomic and molecular theory"],
    content: `## The law

In 1799 the French chemist **J. Proust** showed that natural copper carbonate and copper carbonate made in the laboratory have exactly the same composition. This gave the **law of constant composition**:

> Every pure substance, however it is made, has a constant qualitative and quantitative composition.

Water from rain, from the sea or from burning hydrogen always contains 11.1 % hydrogen and 88.9 % oxygen by mass.

## An argument that lasted eight years

Proust's opponent **C. Berthollet** argued that composition could vary with the amounts taken. The dispute was settled when it turned out that Berthollet had often been dealing with **mixtures** or with **different compounds** of the same elements (for example FeO and Fe₂O₃). Each individual compound has its own constant composition.

Today we know that some solids (some metal oxides and sulfides, for example) really do vary a little in composition. But for substances made of molecules the law always holds.

## Why the law is true

Every molecule of a compound is built from the same number of the same atoms. Every water molecule has 2 hydrogen atoms and 1 oxygen atom, so the ratio of masses is always 2 : 16 = 1 : 8.

## What a formula tells us

From the formula **H₂SO₄** we learn:

1. **What it is made of**: hydrogen, sulfur, oxygen.
2. **The number of atoms** in a molecule: 2 H, 1 S, 4 O, 7 atoms in all.
3. **Mr = 98**.
4. **The mass ratio**: m(H) : m(S) : m(O) = 2 : 32 : 64 = 1 : 16 : 32.
5. **The mass fractions**: ω(S) = 32 / 98 ≈ 32.7 %.

## Worked example

**How much sulfur is needed to make 22 g of iron sulfide, FeS?**

Mr(FeS) = 56 + 32 = 88. The share of sulfur is 32 / 88. m(S) = 22 · 32 / 88 = 8 g, and iron 14 g.

If we take 14 g of iron and 10 g of sulfur, only 8 g of sulfur reacts and 2 g is left over. Constant composition means the "extra" does not go into the compound.

## Exercises

1. State the law of constant composition.
2. What can you learn from the formula CO₂? Write five things.
3. Find the ratio m(Ca) : m(O) in CaO.
4. How much copper and oxygen are needed to make 40 g of CuO?
5. 7 g of iron was heated with 6 g of sulfur. Which substance is left over, and how much?

## Answers

1. Every pure substance, however it is made, has a constant composition.
2. Made of C and O; atoms: 1 C and 2 O; Mr = 44; m(C) : m(O) = 12 : 32 = 3 : 8; ω(C) ≈ 27.3 %.
3. 40 : 16 = 5 : 2.
4. Mr(CuO) = 80; m(Cu) = 40 · 64 / 80 = 32 g, m(O) = 8 g.
5. 7 g of Fe reacts with 4 g of S (ratio 7 : 4), so 2 g of sulfur is left over.`,
    quiz: [
      ["Who stated the law of constant composition?", ["Lavoisier", "Proust", "Dalton", "Berthollet"]],
      ["What is the ratio m(H) : m(O) in water?", ["2 : 1", "1 : 16", "1 : 8", "1 : 2"]],
      ["How many atoms are in a molecule of H₂SO₄?", ["3", "5", "6", "7"]],
      ["14 g of iron reacts with 8 g of sulfur. What happens if you take 14 g of iron and 10 g of sulfur?", ["FeS₂ forms", "2 g of sulfur is left over", "No reaction happens", "24 g of FeS forms"]],
      ["Why is the composition of water always the same?", ["Water is always taken from the same place", "Every molecule has the same number of the same atoms", "Water is a mixture", "Water contains salts"]],
    ],
  },

  "air-composition": {
    objectives: ["State the composition of air", "Describe the experiment that finds the share of oxygen in air", "Explain where the main air pollutants come from", "Suggest ways to protect the air"],
    content: `## Air is a mixture

**Air** is a mixture of gases. Dry air by volume:

| Gas | Share by volume |
|---|---|
| nitrogen N₂ | about 78 % |
| oxygen O₂ | about 21 % |
| argon Ar | about 0.93 % |
| carbon dioxide CO₂ | about 0.04 % |
| other noble gases, hydrogen, etc. | very little |

Air also contains water vapour (from 0 to 4 %), dust and other impurities.

Air is a mixture, not a compound: its composition varies slightly from place to place, and its parts can be separated by physical methods. In industry air is cooled to −200 °C, it becomes a liquid, and when it is slowly warmed nitrogen boils off first (−196 °C), then oxygen (−183 °C).

## How to find the share of oxygen

A burning candle stands in a bowl of water and a glass jar is put over it. After a while the candle goes out and water rises into the jar. In a more accurate experiment red phosphorus is burned in a closed vessel: 4P + 5O₂ → 2P₂O₅. The P₂O₅ formed is a solid that dissolves in water, so water rises and fills about **1/5** of the volume. So air is about 21 % oxygen.

## The discovery of the noble gases

In 1892 Lord Rayleigh noticed that "nitrogen" taken from air was slightly heavier than nitrogen made from chemical compounds (the difference was about 0.5 %). From this small mismatch Rayleigh and W. Ramsay discovered a new element, **argon**, and then neon, krypton and xenon. Once again a careful measurement led to a discovery.

## Air pollution

| Pollutant | Source | Harm |
|---|---|---|
| dust, soot | roads, building sites, stoves | breathing diseases |
| carbon monoxide CO | car exhaust | poisonous; stops blood carrying oxygen |
| sulfur dioxide SO₂ | burning coal and fuel oil | acid rain |
| nitrogen oxides | engines | acid rain, smog |
| excess CO₂ | burning any fuel | strengthens the greenhouse effect |

**Ways to protect the air**: filters at factories, catalytic converters in cars, public transport and cycling, green spaces, and moving from fuel to solar and wind power.

## Exercises

1. Which two gases make up about 99 % of air?
2. Why is air a mixture and not a compound?
3. Why does water rise into the vessel after phosphorus is burned? How far?
4. How was argon discovered?
5. Name three air pollutants and their sources.

## Answers

1. Nitrogen (78 %) and oxygen (21 %).
2. Its composition can vary, and its parts are separated by a physical method (distilling liquid air).
3. Oxygen is used up and P₂O₅ dissolves in the water; the water fills about 1/5 of the volume.
4. Nitrogen from air was slightly heavier than nitrogen from compounds, and this difference led to the discovery of a new gas.
5. For example: CO (cars), SO₂ (burning coal), dust (building sites).`,
    quiz: [
      ["Which gas is most abundant in air?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"]],
      ["How much oxygen is in air by volume?", ["About 78 %", "About 50 %", "About 21 %", "About 1 %"]],
      ["Why is air a mixture?", ["Its parts can be separated by a physical method", "It has a formula", "It is solid", "It never changes"]],
      ["Which pollutant causes acid rain?", ["Nitrogen N₂", "Oxygen O₂", "Sulfur dioxide SO₂", "Argon"]],
      ["What helped to discover argon?", ["The slightly greater mass of nitrogen taken from air", "Argon's bright colour", "Argon's sharp smell", "An argon explosion"]],
    ],
  },
};
