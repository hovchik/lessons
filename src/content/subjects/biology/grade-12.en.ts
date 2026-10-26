import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "History of evolutionary ideas, population and species, the driving forces of evolution, adaptation, the origin of life and of humans.",
    "Ecological factors, populations and communities, ecosystems and succession, the biosphere and sustainable development.",
  ],
  lessons: {
    "evolutionary-ideas": {
      objectives: ["Compare the explanations of Lamarck and Darwin", "List the main principles of Darwin's theory", "Explain what the modern synthesis added", "Give evidence for evolution"],
      content: `## Early ideas

C. Linnaeus (18th century) created a system for classifying living organisms and **two-part names** (for example, *Homo sapiens*), but he believed that species do not change.

J.-B. **Lamarck** (1809) was the first to propose a complete theory of evolution. In his view, an organ that is exercised develops, an unused one weakens, and these changes are inherited. For example, the giraffe stretched its neck, and the neck got longer from generation to generation. Today we know that changes acquired during life **are not inherited**.

## Darwin's theory

C. **Darwin**, after a voyage round the world on the ship *Beagle*, published *On the Origin of Species* (1859).

1. Organisms show **heritable variation**.
2. Organisms produce **more** offspring than can survive.
3. This leads to a **struggle for existence**: competition for food, territory and mates, and struggle against unfavourable conditions.
4. The better adapted survive and reproduce: **natural selection**.
5. Over generations useful traits accumulate and new species arise.

Using the giraffe as an example: giraffes with longer necks reached more leaves, survived better and left more offspring.

## The modern synthesis

In the 20th century Darwin's ideas were combined with genetics. Now we know that:

- the sources of variation are **mutations** and **combinative** variation,
- the elementary unit of evolution is the **population**,
- the elementary evolutionary event is a change in the population's **gene pool**.

## Evidence

| Evidence | Example |
|---|---|
| palaeontological | fossils, the series of the horse's ancestors |
| comparative anatomy | homologous organs, **vestigial organs** (the human coccyx), **atavisms** (a human born with a tail) |
| embryological | similarity of vertebrate embryos |
| molecular | a single genetic code, similarity of DNA |
| biogeographical | the marsupials of Australia |

## Exercises

1. Why is Lamarck's explanation wrong?
2. Why is the struggle for existence inevitable?
3. What is the elementary unit of evolution according to the modern synthesis?
4. What is a vestigial organ? Give an example.
5. How would Darwin have explained the white colour of the polar bear?

## Answers

1. Traits acquired during life are not inherited.
2. More individuals are born than the environment can feed.
3. The population.
4. An organ that has lost its purpose, for example the human coccyx or appendix.
5. Lighter-coloured bears were less visible on the snow, hunted more successfully and left more offspring.`,
      quiz: [
        ["Who wrote *On the Origin of Species*?", ["Lamarck", "Darwin", "Linnaeus", "Mendel"]],
        ["According to Lamarck, the cause of evolution is:", ["natural selection", "exercise of organs and inheritance of acquired traits", "mutations", "genetic drift"]],
        ["What is the elementary unit of evolution?", ["The individual", "The population", "The species", "The ecosystem"]],
        ["The human coccyx is:", ["an atavism", "a vestigial organ", "homologous to a wing", "analogous to a fin"]],
        ["Which is not a principle of Darwin's theory?", ["Heritable variation", "Struggle for existence", "Natural selection", "Inheritance of acquired traits"]],
      ],
    },
    "population-species": {
      objectives: ["List the criteria of a species", "Define a population and its characteristics", "Explain what a gene pool is", "Apply the Hardy–Weinberg law to a simple problem"],
      content: `## The species

A **species** is a set of individuals that are similar in structure, live in a certain area, interbreed freely and produce **fertile** offspring.

| Criterion | Essence |
|---|---|
| morphological | similarity of external and internal structure |
| physiological | similarity of life processes, fertile offspring |
| genetic | the same set of chromosomes (karyotype) |
| ecological | similar environmental conditions and food |
| geographical | a certain area, the **range** |

No single criterion is enough on its own. For example, a horse and a donkey can interbreed, but the mule is **sterile**, so they are different species.

## The population

A **population** is a group of individuals of one species that live in a certain area for a long time and interbreed with each other more often than with other groups. For example, the different forms of the Sevan trout spawned in different rivers and at different times.

Characteristics of a population: **size**, **density**, **age** and **sex structure**, **birth rate** and **death rate**.

## The gene pool

The **gene pool** is the set of genes of all the individuals in a population. If allele frequencies in the gene pool change, evolution is taking place.

**The Hardy–Weinberg law**: in a large population with no mutation, selection or migration, allele frequencies stay constant. If the frequency of allele A is p and of a is q (p + q = 1), the genotypes will be:

AA = p², Aa = 2pq, aa = q².

**Example.** In a population 16% of individuals have a recessive trait (aa). So q² = 0.16, q = 0.4, p = 0.6. Heterozygotes: 2pq = 2 · 0.6 · 0.4 = **0.48**, that is 48%.

## Exercises

1. Why are the horse and the donkey different species?
2. What is a range?
3. What is a gene pool?
4. Why is the morphological criterion alone not enough? Give an example.
5. aa individuals make up 4%. Find the frequency of allele a and the percentage of heterozygotes.

## Answers

1. Their offspring, the mule, is sterile.
2. The area over which a species is found.
3. The set of all the genes of a population.
4. There are different species that look very alike (sibling species) and very different-looking individuals of one species (dog breeds).
5. q = 0.2, p = 0.8, 2pq = 0.32, that is 32%.`,
      quiz: [
        ["Which criterion defines the area where a species is found?", ["Morphological", "Geographical", "Genetic", "Physiological"]],
        ["The mule is:", ["a separate species", "a sterile hybrid", "a breed of horse", "a population of donkeys"]],
        ["What is a gene pool?", ["The genes of one individual", "All the genes of a population", "Only dominant genes", "A set of chromosomes"]],
        ["If q = 0.3, what is p?", ["0.3", "0.7", "0.09", "0.49"]],
        ["If p = 0.5, what percentage are heterozygotes?", ["25%", "50%", "75%", "100%"]],
      ],
    },
    "forces-of-evolution": {
      objectives: ["List the factors of evolution", "Distinguish the forms of natural selection", "Explain genetic drift and isolation", "Give examples of selection today"],
      content: `## Factors

| Factor | What it does |
|---|---|
| **mutation** | creates new alleles |
| **population waves** | swings in numbers change frequencies by chance |
| **genetic drift** | random change in allele frequencies in small populations |
| **isolation** | prevents populations from interbreeding |
| **natural selection** | the only **directed** factor, keeps the well adapted |

Only natural selection creates **adaptation**; the other factors act by chance.

## Forms of selection

| Form | What it keeps | When | Example |
|---|---|---|---|
| **directional** | one of the extreme values of a trait | the environment changes | the spread of the dark form of the **peppered moth** in industrial cities in England |
| **stabilising** | the average value | the environment is constant | average birth weight, a flower size that matches its pollinator |
| **disruptive** | both extreme values | conditions differ in different parts of the area | summer and autumn forms in plants |

## Genetic drift

In a small population chance can remove or spread an allele without selection. For example, when a few individuals settle an island, the new population carries only their genes (the **founder effect**).

## Isolation

- **Geographical**: mountains, rivers, seas.
- **Biological**: different spawning times, different courtship behaviour, different structure.

## Today

Natural selection can be seen even now: **antibiotic resistance in bacteria**, pesticide resistance in insects. When a course of antibiotics is not finished, the most resistant bacteria survive.

## Exercises

1. Which factor is the only directed factor of evolution?
2. Which selection does the peppered moth example illustrate?
3. Why is genetic drift stronger in small populations?
4. Give an example of biological isolation.
5. Why must you finish a course of antibiotics?

## Answers

1. Natural selection.
2. Directional.
3. In a small group chance has a big effect on frequencies.
4. For example, spawning at different times, as in the forms of the Sevan trout.
5. Otherwise the most resistant bacteria will survive and the disease will become hard to treat.`,
      quiz: [
        ["Which selection acts in a constant environment?", ["Directional", "Stabilising", "Disruptive", "Artificial"]],
        ["Which factor of evolution is the only directed one?", ["Mutation", "Genetic drift", "Natural selection", "Population waves"]],
        ["The spread of the dark form of the peppered moth is an example of:", ["stabilising selection", "directional selection", "genetic drift", "modification"]],
        ["What is the founder effect?", ["A new population carries only the genes of a few founding individuals", "The stability of a large population", "The absence of mutations", "Artificial selection"]],
        ["Which is geographical isolation?", ["Different courtship behaviour", "A mountain range", "Different spawning times", "Different chromosomes"]],
      ],
    },
    "adaptation-speciation": {
      objectives: ["Give examples of kinds of adaptation", "Explain why adaptation is relative", "Distinguish geographical and ecological speciation", "Distinguish aromorphosis, idioadaptation and general degeneration"],
      content: `## Adaptations

| Kind | Example |
|---|---|
| **protective colouring** | the green colour of a grasshopper, the white ptarmigan in winter |
| **warning colouring** | the bright red colour of the poisonous ladybird |
| **mimicry** | a harmless fly looks like a wasp |
| **camouflage** | the stick insect, which looks like a twig |
| **behavioural** | bird migration, the bear's winter sleep |
| **physiological** | the camel's fat, water storage in desert plants |

Every adaptation is **relative**: it is useful only in certain conditions. A white hare is invisible on snow but very visible after the snow melts.

## Speciation

1. **Geographical**: parts of a species are separated by a barrier (a mountain, a stretch of water), and in different conditions they gradually diverge until they can no longer interbreed. Example: Darwin's **finches** on the Galápagos Islands.
2. **Ecological**: in the same area populations take up different habitats or timings. Example: the forms of the Sevan trout that spawned at different times and in different places.

## Macroevolution

**Macroevolution** is the formation of groups above the species (genus, family, class). A. Severtsov identified three paths.

| Path | Essence | Example |
|---|---|---|
| **aromorphosis** | a general rise in organisation | the four-chambered heart, warm-bloodedness, the seed, the flower |
| **idioadaptation** | a particular adaptation without a rise in organisation | the mole's digging paws, the variety of bird beaks |
| **general degeneration** | simplification of organisation | the tapeworm has lost its digestive system |

## Exercises

1. What is mimicry? Give an example.
2. Why is adaptation relative?
3. How did the species of Galápagos finches arise?
4. Is warm-bloodedness an aromorphosis or an idioadaptation?
5. Why is the tapeworm's simplification degeneration and not a decline for the species?

## Answers

1. The resemblance of a harmless species to a dangerous one, for example a fly that looks like a wasp.
2. It is useful only in certain conditions.
3. Populations isolated on different islands adapted to different food and became separate species.
4. An aromorphosis.
5. The simplification is an adaptation to a parasitic way of life, and the species survives and reproduces successfully.`,
      quiz: [
        ["The bright colour of the poisonous ladybird is:", ["protective", "warning", "mimicry", "camouflage"]],
        ["Which is an aromorphosis?", ["The mole's digging paws", "The appearance of the flower", "The tapeworm losing its digestive system", "A change in beak shape"]],
        ["How did the species of Galápagos finches arise?", ["By geographical speciation", "By artificial selection", "By cloning", "By modification"]],
        ["Who identified the three paths of macroevolution?", ["A. Severtsov", "N. Vavilov", "C. Darwin", "G. Mendel"]],
        ["Why is adaptation relative?", ["It is useful only in certain conditions", "It is not inherited", "It is always harmful", "It arises at will"]],
      ],
    },
    "origin-of-life": {
      objectives: ["Talk about hypotheses of the origin of life", "Describe Oparin's ideas and Miller's experiment", "Put the geological eras in order", "Name major events in the history of life"],
      content: `## Hypotheses

- The idea of **spontaneous generation** (for example, mice from dirty linen) was disproved by F. Redi and L. **Pasteur**. In Pasteur's "swan-neck" flask the broth did not go bad, because germs could not get into it.
- **Panspermia**: life was brought from space. It does not explain how life arose in the first place.
- **Biochemical evolution** (A. Oparin, J. Haldane): life arose from inorganic substances through chemical evolution.

## Oparin and Miller

According to Oparin, the early Earth's atmosphere had no free oxygen, and with energy from lightning, ultraviolet light and volcanoes, organic molecules formed from simple substances (CH₄, NH₃, H₂, H₂O). They built up in the ocean, the **"primordial soup"**, and formed **coacervates**, droplets surrounded by a boundary layer.

In 1953 S. **Miller** recreated these conditions in a flask with electric sparks and obtained **amino acids**.

Today scientists think the first self-copying molecule may have been **RNA**, which both stores information and can speed up reactions.

## History of the Earth

| Era | How long ago | Events |
|---|---|---|
| **Archean** | 4–2.5 billion years | first prokaryotes, photosynthesis by cyanobacteria |
| **Proterozoic** | 2.5 billion – 541 million | oxygen in the atmosphere, eukaryotes, multicellular life |
| **Palaeozoic** | 541–252 million | life moves onto land, fish, amphibians, fern forests (coal), reptiles |
| **Mesozoic** | 252–66 million | dinosaurs, first mammals and birds, flowering plants |
| **Cenozoic** | 66 million – now | rise of mammals and birds, appearance of humans |

At the end of the Mesozoic, about 66 million years ago, the dinosaurs died out after a large asteroid struck.

## Exercises

1. How did Pasteur prove that germs do not arise spontaneously?
2. Why were organic substances not oxidised on the early Earth?
3. What did Miller obtain in his experiment?
4. In which era did flowering plants appear?
5. How did oxygen appear in the atmosphere?

## Answers

1. In the "swan-neck" flask the broth stayed clean because germs could not get inside.
2. There was no free oxygen in the atmosphere.
3. Amino acids.
4. In the Mesozoic.
5. Through photosynthesis by cyanobacteria and then plants.`,
      quiz: [
        ["Who disproved the spontaneous generation of germs with a \"swan-neck\" flask?", ["S. Miller", "L. Pasteur", "A. Oparin", "C. Darwin"]],
        ["What was obtained in Miller's experiment?", ["DNA", "Amino acids", "Bacteria", "Oxygen"]],
        ["In which era did dinosaurs live?", ["Archean", "Palaeozoic", "Mesozoic", "Cenozoic"]],
        ["What are Oparin's droplets surrounded by a boundary layer called?", ["Coacervates", "Ribosomes", "Mitochondria", "Blastulas"]],
        ["Which organisms first filled the atmosphere with oxygen?", ["Fungi", "Cyanobacteria", "Fish", "Dinosaurs"]],
      ],
    },
    "human-evolution": {
      objectives: ["Place humans in the system of the animal world", "List the stages of human evolution", "Explain the role of biological and social factors", "Talk about traces of ancient people in Armenia"],
      content: `## The place of humans

| Rank | Humans |
|---|---|
| phylum | chordates |
| class | mammals |
| order | primates |
| family | hominids |
| genus | *Homo* |
| species | *Homo sapiens* (wise human) |

Our closest relatives are the **chimpanzee** and the **bonobo**, with whom we share a common ancestor. Humans did **not** descend from modern apes; we share a common ancestor with them that lived about 6–7 million years ago.

## Stages

| Group | Time | Features |
|---|---|---|
| **australopithecines** | 4–2 million years ago | walked on two legs, small brain |
| **handy man** (*Homo habilis*) | about 2.5–1.5 million | first stone tools |
| **upright man** (*Homo erectus*) | about 1.9 million – 100 thousand | used fire, left Africa |
| **Neanderthal** | about 400–40 thousand | large brain, buried the dead |
| **wise human** (*Homo sapiens*) | about 300 thousand years ago to today | art, language, complex society |

## Factors

**Biological** factors are heritable variation and natural selection. **Social** factors are **work**, **articulate speech**, **consciousness** and **life in a group**. Walking upright freed the hands for work, and work and speech helped the brain develop.

## In Armenia

Traces of ancient people are found in many places in Armenia. Near **Satani Dar** and **Arzni** some of the oldest stone tools have been found. At **Nor Geghi** archaeologists found obsidian tools made about 300 thousand years ago, which show an advanced technology. In the **Areni-1** cave, one of the oldest known leather shoes in the world (about 5,500 years old) and traces of the oldest winemaking were found.

## Races

Humanity is one species. Differences in skin colour, eye shape and other outward features are adaptations to climate (for example, dark skin protects against strong sun). Genetic differences within groups are bigger than between groups, and **the idea of "higher" or "lower" races is scientifically wrong**.

## Exercises

1. Which order do humans belong to?
2. Is it true that humans descended from chimpanzees? Explain.
3. Which human was the first to use fire?
4. How did walking upright help human development?
5. Why is the Areni-1 cave important?

## Answers

1. Primates.
2. No, humans and chimpanzees share a common ancestor.
3. *Homo erectus* (upright man).
4. It freed the hands for making tools and working.
5. One of the oldest leather shoes and traces of the oldest winemaking were found there.`,
      quiz: [
        ["Which class do humans belong to?", ["Reptiles", "Mammals", "Birds", "Amphibians"]],
        ["Who made the first stone tools?", ["Australopithecus", "*Homo habilis*", "The Neanderthal", "*Homo sapiens*"]],
        ["The common ancestor of humans and chimpanzees lived roughly:", ["10 thousand years ago", "6–7 million years ago", "100 million years ago", "1 billion years ago"]],
        ["Which is a social factor?", ["Mutation", "Natural selection", "Articulate speech", "Genetic drift"]],
        ["Where was one of the oldest leather shoes in the world found?", ["In the Areni-1 cave", "In Garni", "In Zvartnots", "In Erebuni"]],
      ],
    },
    "ecological-factors": {
      objectives: ["Classify ecological factors", "Explain the law of the limiting factor", "Describe the influence of light, heat and water", "Distinguish forms of relationships between organisms"],
      content: `## Factors

**Ecology** (E. Haeckel, 1866) is the science of the relationships between organisms and their environment.

| Group | Examples |
|---|---|
| **abiotic** (non-living nature) | light, temperature, humidity, soil, wind |
| **biotic** (living organisms) | competition, predation, parasitism, symbiosis |
| **anthropogenic** (human activity) | felling forests, pollution, irrigation, hunting |

## The limiting factor

Each factor has an **optimum** and **limits of tolerance**. **The law of the limiting factor** (J. Liebig, V. Shelford): the life of an organism is limited by the factor that deviates most from the optimum, even if the others are favourable. For example, in a desert with plenty of light and heat, plant growth is limited by water.

## Light, heat, water

- With respect to light, plants can be **light-loving** (sunflower) or **shade-tolerant** (fern, wood sorrel).
- **Photoperiodism** is the response to changes in day length: leaf fall, migration, flowering.
- With respect to heat, animals can be **cold-blooded** or **warm-blooded**. Warm-blooded animals are larger in cold climates (Bergmann's rule).
- With respect to water, plants can be aquatic, moisture-loving or **drought-resistant** (cactus, camelthorn).

## Biotic relationships

| Form | Who gains | Example |
|---|---|---|
| **predation** | + / − | wolf and hare |
| **parasitism** | + / − | flea and dog |
| **competition** | − / − | weeds and crops |
| **mutually beneficial symbiosis** (mutualism) | + / + | lichen, legumes and nodule bacteria |
| **commensalism** | + / 0 | the remora attaches itself to a shark |

## Exercises

1. Name two abiotic and two anthropogenic factors.
2. State the law of the limiting factor.
3. Which factor is limiting in the Ararat Valley in summer without irrigation?
4. How does parasitism differ from predation?
5. What is the relationship between the fungus and the alga in a lichen?

## Answers

1. Abiotic: light, temperature; anthropogenic: felling forests, pollution.
2. Life is limited by the factor that deviates most from the optimum.
3. Water.
4. A parasite usually does not kill its host and lives at its expense for a long time; a predator kills and eats its prey.
5. Mutually beneficial symbiosis.`,
      quiz: [
        ["Which factor is abiotic?", ["Competition", "Temperature", "Felling forests", "Parasitism"]],
        ["Which is mutually beneficial symbiosis?", ["Wolf and hare", "A legume and nodule bacteria", "Flea and dog", "A weed and wheat"]],
        ["Who introduced the term \"ecology\"?", ["E. Haeckel", "C. Darwin", "V. Vernadsky", "N. Vavilov"]],
        ["What is the response to day length called?", ["Photosynthesis", "Photoperiodism", "Photolysis", "Phagocytosis"]],
        ["In competition:", ["both sides gain", "both sides suffer", "one gains and the other is unaffected", "no one suffers"]],
      ],
    },
    "ecosystems-food-chains": {
      objectives: ["Describe the structure of an ecosystem", "Build food chains", "Apply the 10% rule of the ecological pyramid", "Explain succession"],
      content: `## The ecosystem

An **ecosystem** (A. Tansley) is a single system of organisms and their environment in which matter cycles and energy flows. Russian literature often uses the term **biogeocoenosis** (V. Sukachev). Examples: Lake Sevan, the Dilijan forest, a meadow, even an aquarium.

## Groups

| Group | Role | Examples |
|---|---|---|
| **producers** | make organic matter by photosynthesis | plants, algae |
| **consumers** | feed on ready-made substances | herbivores, predators |
| **decomposers** | break down remains into inorganic substances | bacteria, fungi, earthworms |

## The food chain

**grass → grasshopper → frog → snake → eagle**

Food chains intertwine and form a **food web**.

## The 10% rule

Only about **10%** of the energy passes from one level to the next; the rest is used in respiration and lost as heat. That is why chains are usually no longer than 4–5 links.

**Example.** How many kilograms of grass are needed to grow 1 kg of eagle in the chain grass → hare → fox → eagle?

Solution: eagle 1 kg ← fox 10 kg ← hare 100 kg ← grass **1,000 kg**.

## Succession

**Succession** is the gradual replacement of one ecosystem by another.

- **Primary**: in a place without soil (rock, volcanic lava): lichens → mosses → grasses → shrubs → forest.
- **Secondary**: after a fire or felling, when the soil has survived. It goes faster.

The final stable community is called the **climax**.

## Exercises

1. Why are decomposers necessary in an ecosystem?
2. Build a 4-link food chain for Lake Sevan.
3. Why can't a food chain have 10 links?
4. How many kilograms of phytoplankton are needed to get 2 kg of trout in the chain phytoplankton → zooplankton → trout?
5. Which succession goes faster, primary or secondary? Why?

## Answers

1. They break down remains and return inorganic substances to plants.
2. For example: algae → zooplankton → whitefish → cormorant.
3. About 90% of the energy is lost at each level, and no energy would be left for the last links.
4. 2 · 10 · 10 = 200 kg.
5. Secondary, because the soil and seeds are already there.`,
      quiz: [
        ["Which is a producer in an ecosystem?", ["A wolf", "A fungus", "A green plant", "An earthworm"]],
        ["Roughly what percentage of energy passes to the next level?", ["1%", "10%", "50%", "90%"]],
        ["Which is a decomposer?", ["An eagle", "A grasshopper", "A bacterium", "Grass"]],
        ["What does primary succession on rock begin with?", ["Forest", "Lichens", "Shrubs", "Grasses"]],
        ["How many kilograms of plants are needed to grow 1 kg of a predator (3rd level)?", ["10", "100", "1000", "3"]],
      ],
    },
    "biosphere-sustainability": {
      objectives: ["Describe the boundaries of the biosphere and Vernadsky's teaching", "Explain the carbon and nitrogen cycles", "Analyse global environmental problems", "Discuss Armenia's environmental problems and ways to solve them"],
      content: `## The biosphere

The **biosphere** is the layer of the Earth inhabited by life. It includes the lower part of the atmosphere (up to the ozone layer, about 20–25 km), the whole hydrosphere and the upper part of the lithosphere (a few km).

V. **Vernadsky** created the study of the biosphere. He showed that **living matter** is one of the most powerful geological forces on Earth: it created the oxygen atmosphere, soil, limestone and coal. Vernadsky also introduced the idea of the **noosphere** (sphere of reason), in which humans become the decisive force in the development of the biosphere and are responsible for it.

## Cycles of matter

**Carbon**: plants absorb CO₂ in photosynthesis, animals eat plants, all organisms release CO₂ in respiration, and decomposers break down remains. Humans burn coal, oil and gas and release a lot of CO₂ into the atmosphere, which strengthens the **greenhouse effect**.

**Nitrogen**: nitrogen from the air is fixed by **nitrogen-fixing bacteria** (including those in the root nodules of legumes), plants absorb nitrates, and decomposers return nitrogen from remains to the soil and atmosphere.

## Global problems

| Problem | Cause | Solution |
|---|---|---|
| climate warming | CO₂ and other greenhouse gases | renewable energy, forests |
| ozone layer depletion | CFCs | the Montreal Protocol (1987) |
| loss of biodiversity | destruction of habitats | protected areas |
| plastic pollution | single-use plastic | recycling, reuse |

## In Armenia

- The level of **Lake Sevan** fell by about 19 metres in the 20th century because its water was used for irrigation and energy. Now the level is gradually being raised, but the lake suffers from **algal blooms**, an excess of algae caused by sewage and flooded forests.
- Forests cover only about 10–11% of the territory, so tree planting and preventing illegal felling are important.
- **Tailings dams** of mining companies can pollute rivers with heavy metals.
- **Solar energy** is growing fast in Armenia because there are many sunny days.

**Sustainable development** is development that meets the needs of today without taking away the opportunities of future generations.

## Exercises

1. What does the biosphere include?
2. What is the noosphere?
3. How do legumes enrich the soil with nitrogen?
4. Why does Lake Sevan "bloom"?
5. Suggest two steps for your school that will help sustainable development.

## Answers

1. The lower part of the atmosphere, the hydrosphere and the upper part of the lithosphere.
2. The sphere of reason, in which humans become the decisive force in the development of the biosphere.
3. Bacteria living in the nodules on their roots fix nitrogen from the air.
4. Sewage and rotting plant matter enrich the water with nutrients, and algae multiply quickly.
5. For example: separate collection of paper and plastic, planting trees.`,
      quiz: [
        ["Who created the study of the biosphere?", ["V. Vernadsky", "E. Haeckel", "A. Tansley", "N. Vavilov"]],
        ["Which bacteria fix nitrogen from the air?", ["Lactic acid bacteria", "Nitrogen-fixing bacteria", "E. coli", "Cyanobacteria cannot"]],
        ["Which gas from human activity strengthens the greenhouse effect most?", ["O₂", "N₂", "CO₂", "Ar"]],
        ["Which document protects the ozone layer?", ["The Montreal Protocol", "The Red Book", "The Kyoto Protocol", "The Ramsar Convention"]],
        ["Roughly how many metres did the level of Lake Sevan fall in the 20th century?", ["2", "8", "19", "50"]],
      ],
    },
  },
};
