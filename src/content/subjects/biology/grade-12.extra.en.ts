import type { RuLesson } from "../../ru-overlay";

export const enExtra12: Record<string, RuLesson> = {
  "population-genetics": {
    objectives: ["List the conditions for Hardy–Weinberg equilibrium", "Work out how common carriers of a recessive disease are", "Explain why harmful recessive alleles stay in a population", "Judge the effects of founders, bottlenecks and marriages between relatives"],
    content: `## When allele frequencies do not change

By the Hardy–Weinberg law, p + q = 1 and p² + 2pq + q² = 1, where p is the frequency of the dominant allele and q that of the recessive allele. But this balance holds only in an **ideal** population:

1. the population is very **large**,
2. mating is **random**,
3. there are no **mutations**,
4. there is no **migration** (no individuals come or go),
5. there is no **natural selection**; all genotypes survive equally well.

In real populations at least one of these conditions is always broken. So the Hardy–Weinberg law is a "zero point": if real frequencies drift away from the expected ones, some force of evolution is at work.

## How many people are carriers

**Phenylketonuria** (PKU) is a recessive inherited disease (aa). In Europe it affects about one newborn in 10,000.

- q² = 1/10,000 = 0.0001, so q = 0.01.
- p = 1 − 0.01 = 0.99.
- Carriers (Aa): 2pq = 2 · 0.99 · 0.01 ≈ **0.02**, about 2%, or **one person in 50**.

One in 10,000 is ill, but one in 50 is a carrier: carriers are **200 times** more common. Most recessive alleles are "hidden" in healthy heterozygotes. So even if people with the disease had no children, the allele would fall only very slowly.

**Worth knowing.** In Armenia and many other countries, babies with PKU are found from a drop of blood taken in the maternity ward (**newborn screening**). On a special diet the child grows up healthy.

## Why "bad" alleles survive

- **Hiding:** a recessive allele does not show in a heterozygote, so selection "cannot see" it.
- **New mutations:** mutation keeps making the allele again.
- **Heterozygote advantage:** in malarial parts of Africa the sickle-cell allele is common because **heterozygotes** (Aa) resist malaria better than AA people. Selection keeps both alleles: this is **balancing selection**.

## Small populations

In a small population chance plays a big part (**genetic drift**).

- **Founder effect.** When a few individuals settle a new area, their chance set of alleles becomes the basis of the whole new population. For example, in the Amish community of Pennsylvania (USA), which descends from a small number of settlers, some rare inherited diseases are much more common.
- **Bottleneck.** When a disaster suddenly shrinks a population, many alleles are lost. **Cheetahs** went through such a bottleneck about 10,000 years ago, and today they are so alike genetically that skin from one cheetah can be grafted onto another without rejection. This makes them vulnerable to disease.

**Inbreeding.** Relatives share ancestors, so they are more likely to carry the same recessive allele. In their children, recessive diseases show up more often. That is why marriage between close relatives is banned in many countries, and why zoos keep "studbooks" for their animals to avoid inbreeding.

## Exercises

1. List the five conditions of an ideal population.
2. In a population 1% show a recessive trait. Find q, p and the share of heterozygotes.
3. Why are carriers of a recessive disease much more common than people who have it?
4. Why is the sickle-cell allele common in malarial regions?
5. How is the founder effect different from a bottleneck?
6. Why are recessive diseases more common in children of related parents?

## Answers

1. A large population, random mating, no mutations, no migration, no selection.
2. q² = 0.01, q = 0.1, p = 0.9, 2pq = 2 · 0.9 · 0.1 = 0.18, that is 18%.
3. Most recessive alleles are in healthy heterozygotes.
4. Heterozygotes resist malaria better and survive more often.
5. In the founder effect a few individuals start a new population; in a bottleneck an existing population is suddenly cut down by a disaster.
6. Relatives more often carry the same recessive allele, inherited from a shared ancestor.`,
    quiz: [
      ["Which is a condition of an ideal population?", ["Strong natural selection", "A very large size", "Frequent mutations", "Lots of migration"]],
      ["If q² = 0.04, what is q?", ["0.02", "0.2", "0.4", "0.8"]],
      ["If q = 0.01, roughly one person in how many is a carrier?", ["One in 10", "One in 50", "One in 1,000", "One in 10,000"]],
      ["Why does the sickle-cell allele survive in malarial regions?", ["There are no mutations", "Heterozygotes resist malaria better", "The population is very small", "There is no migration"]],
      ["Why are cheetahs so alike genetically?", ["There are very many of them", "They went through a bottleneck", "They live on different continents", "They mutate often"]],
    ],
  },

  "biogeochemical-cycles": {
    objectives: ["Describe the carbon stores and the fast and slow carbon cycles", "Explain every stage of the nitrogen cycle and the part bacteria play", "Explain the phosphorus cycle and what causes eutrophication", "Judge how people affect the biogeochemical cycles"],
    content: `## Biogeochemical cycles

Energy flows through an ecosystem **one way**, from the Sun to plants to animals, and in the end is lost as heat. But **matter** moves **in circles**: the same atoms pass thousands of times from living things to the non-living world and back. Vladimir Vernadsky called these processes **biogeochemical cycles**. The carbon atoms in your body may once have been in a dinosaur or an ancient tree.

## Carbon

**Where carbon is stored:**

| Store | Approximate amount |
|---|---|
| Rocks (limestone, marble) | the largest store: tens of millions of gigatonnes |
| The ocean (dissolved CO₂ and carbonates) | about 38,000 gigatonnes |
| Fossil fuels (coal, oil, gas) | a few thousand gigatonnes |
| Soil | about 1,500–2,400 gigatonnes |
| The atmosphere (CO₂) | about 900 gigatonnes |
| Living plants | about 450–650 gigatonnes |

**The fast cycle (years to decades):** plants take in CO₂ in photosynthesis → carbon enters the food chain → all living things breathe out CO₂ → decomposers break down remains.

**The slow cycle (millions of years):** the chalky shells of sea creatures settle on the sea floor and become **limestone**. Plants buried in swamps turn into **coal**, and sea plankton into **oil** and **gas**. Volcanoes return carbon to the air.

**Human impact.** By burning fossil fuels we are returning to the air, in a few hundred years, carbon that built up over millions of years. Before the Industrial Revolution the air held about 280 ppm (parts per million) of CO₂; today it is over 420 ppm. The ocean soaks up some of the extra, but it becomes more **acidic**, and corals and shellfish find it harder to build their skeletons.

## Nitrogen

Nitrogen is needed for **proteins** and **nucleic acids**. Air is 78% nitrogen (N₂), but plants and animals cannot use it: the atoms in N₂ are held by a very strong **triple bond**. Only some bacteria can break it.

| Stage | What happens | Who does it |
|---|---|---|
| **Nitrogen fixation** | N₂ → NH₃ (ammonia) | nodule bacteria in the roots of legumes (peas, alfalfa, clover), free-living bacteria and cyanobacteria; lightning also fixes a little |
| **Ammonification** | proteins in remains → NH₃ | decomposer bacteria and fungi |
| **Nitrification** | NH₃ → nitrites (NO₂⁻) → nitrates (NO₃⁻) | nitrifying bacteria (chemosynthesis) |
| **Uptake** | plants take up nitrates and ammonium through their roots and make proteins | plants |
| **Denitrification** | nitrates → N₂, which returns to the air | denitrifying bacteria (where oxygen is short) |

**Why farmers sow alfalfa.** The bacteria in legume nodules give the plant nitrogen, and the plant gives them sugars. When alfalfa is ploughed into the soil, the soil gains nitrogen, and next year's wheat grows better. This is **crop rotation**.

**Human impact.** In 1909–1913 **Fritz Haber** and **Carl Bosch** developed an industrial way to make ammonia from nitrogen in the air. Today artificial fertilisers feed about half of humanity, but extra nitrates wash into rivers and lakes.

## Phosphorus

Phosphorus is needed for **DNA**, **ATP**, cell membranes and **bones**. Unlike carbon and nitrogen, phosphorus **has no gas form**, so its cycle does not pass through the air:

rocks → weathering → phosphates in soil → plants → animals → remains and droppings → soil → rivers → sea-floor sediments → (millions of years later) new rocks

That is why phosphorus is often a **limiting factor**: too little of it holds back plant growth.

## Eutrophication

When fertilisers washed off fields (nitrates, phosphates) and untreated sewage reach a lake:

1. the water gets rich in nutrients and algae grow wildly (an "algal bloom"),
2. the water turns murky and plants on the bottom get no light,
3. bacteria breaking down the dead algae use up the oxygen dissolved in the water,
4. fish suffocate, and hydrogen sulphide builds up on the bottom.

Lake Sevan and the Caspian Sea suffer from this. The remedies are treating sewage, using fertiliser sparingly, and belts of trees along the shores that soak up extra nutrients.

## Exercises

1. Why does energy flow through an ecosystem one way while matter moves in circles?
2. How is the fast carbon cycle different from the slow one?
3. Why can plants not use nitrogen from the air?
4. List the stages of the nitrogen cycle in order.
5. Why does wheat grow well after alfalfa?
6. How is the phosphorus cycle different from the carbon and nitrogen cycles?
7. Why does the water run short of oxygen during eutrophication?

## Answers

1. At each level some energy is lost as heat and cannot be used again, but atoms do not disappear and are used again and again.
2. The fast cycle (photosynthesis, respiration, decay) takes years; the slow one (forming limestone, coal, oil) takes millions of years.
3. The N₂ molecule has a very strong triple bond that only some bacteria can break.
4. Fixation, ammonification, nitrification, uptake by plants, denitrification.
5. The nodule bacteria of alfalfa enrich the soil with nitrogen.
6. Phosphorus has no gas form, so its cycle goes through rocks, soil and water, not the air.
7. The bacteria breaking down dead algae use up the dissolved oxygen.`,
    quiz: [
      ["Which process takes CO₂ out of the air?", ["Respiration", "Photosynthesis", "Burning", "Decay"]],
      ["Who fixes nitrogen in the roots of legumes?", ["Fungi", "Nodule bacteria", "Worms", "Root hairs"]],
      ["What is the change of nitrates into N₂ called?", ["Nitrification", "Ammonification", "Denitrification", "Fixation"]],
      ["Which element's cycle has no gas stage?", ["Carbon", "Nitrogen", "Phosphorus", "Oxygen"]],
      ["What causes eutrophication of lakes?", ["Too little salt in the water", "Extra nitrates and phosphates", "Too many fish", "Low temperature"]],
    ],
  },

  "phylogeny": {
    objectives: ["Explain two-part names and the ranks of classification", "Read a phylogenetic tree and find a common ancestor", "Explain how DNA and proteins show relationships", "Describe the three domains of life and the endosymbiosis theory"],
    content: `## Names and ranks

In the 18th century the Swedish scientist **Carl Linnaeus** introduced **binomial naming**: every species has a two-word Latin name made of its **genus** and **species**. For example, humans are *Homo sapiens* and the apricot is *Prunus armeniaca* (literally "Armenian plum").

Species are grouped into larger and larger groups: **species → genus → family → order → class → phylum (division) → kingdom → domain**.

| Rank | Human | Apricot |
|---|---|---|
| Domain | Eukaryotes | Eukaryotes |
| Kingdom | Animals | Plants |
| Phylum / division | Chordates | Flowering plants |
| Class | Mammals | Dicots |
| Order | Primates | Rosales |
| Family | Hominids | Rose family |
| Genus | *Homo* | *Prunus* |
| Species | *Homo sapiens* | *Prunus armeniaca* |

Linnaeus grouped living things by **how they look**. After Darwin, scientists realised that true classification should show **descent**: who came from whom.

## Phylogenetic trees

A **phylogenetic tree** is a diagram that shows how species branched off from common ancestors.

- The **tips** of the branches are species living today.
- Each **branching point** is a common ancestor from which two or more groups arose.
- Two species are **more closely related** the **closer** their common ancestor is to the tips.

**A common mistake.** The tree does not show that humans "came from chimpanzees". Humans and chimpanzees share a **common ancestor** that lived about 6–7 million years ago and was neither a human nor a chimpanzee. Both branches have evolved since then.

**Birds and crocodiles.** A crocodile looks like a lizard, but on the tree it is closer to **birds**: both come from the archosaurs, and birds are the living descendants of dinosaurs.

## Molecular evidence

The most precise evidence comes from **DNA** and **proteins**. The earlier two species split, the more mutations have built up in their DNA and the more their sequences differ.

| Species | DNA similarity with humans (approx.) |
|---|---|
| chimpanzee | about 98–99% |
| gorilla | about 98% |
| mouse | about 85% in protein-coding genes |

**Cytochrome c.** This protein is needed for respiration and is found in all eukaryotes. Human and chimpanzee cytochrome c are identical; human and horse differ in about 12 places (out of 104 amino acids); human and yeast differ in about 40–45.

**The molecular clock.** If mutations build up at a roughly steady rate, the number of differences shows **when** two species split. The results often agree with the age of fossils.

**One genetic code.** All living things, from bacteria to humans, use **the same** genetic code and the same 20 amino acids. This is one of the strongest pieces of evidence that all life has **one common ancestor**.

## Three domains of life

In 1977 the American **Carl Woese** compared ribosomal RNA in different organisms and found that prokaryotes are really two very different groups. Today life is divided into three **domains**:

| Domain | Cell | Examples |
|---|---|---|
| **Bacteria** | no nucleus | *E. coli*, cyanobacteria, nodule bacteria |
| **Archaea** | no nucleus, but in many DNA-handling proteins closer to eukaryotes | dwellers in hot springs, salt lakes and marshes, methane makers |
| **Eukaryotes** | with a nucleus | protists, algae, fungi, plants, animals |

## Endosymbiosis

How did the eukaryotic cell arise? **Lynn Margulis** (1967) championed the **endosymbiosis theory**: about 2 billion years ago a large cell swallowed an oxygen-breathing bacterium but did not digest it. The bacterium lived on inside and became the **mitochondrion**. Later, the ancestors of plants swallowed a photosynthesising cyanobacterium in the same way, and it became the **chloroplast**.

**Evidence:** mitochondria and chloroplasts have **their own ring-shaped DNA** (like bacteria), their own **small ribosomes**, **two membranes**, and they reproduce by splitting.

## Exercises

1. Why is the apricot's Latin name *Prunus armeniaca*? Which word is the genus and which the species?
2. Why is it wrong to say humans came from chimpanzees?
3. How can DNA show which two species are more closely related?
4. What is the molecular clock?
5. Which three domains are recognised today?
6. Give three pieces of evidence that mitochondria were once free-living bacteria.

## Answers

1. Linnaeus believed the apricot came from Armenia. *Prunus* is the genus (plum), *armeniaca* the species.
2. Humans and chimpanzees share an ancestor that was neither, and both branches have evolved.
3. Compare the sequences: the fewer the differences, the closer the relationship and the common ancestor.
4. Estimating when species split from the number of differences built up in their DNA or proteins.
5. Bacteria, archaea, eukaryotes.
6. Their own ring-shaped DNA, small ribosomes, two membranes (and reproducing by splitting).`,
    quiz: [
      ["Who introduced binomial naming?", ["Darwin", "Linnaeus", "Mendel", "Woese"]],
      ["What does a branching point on a phylogenetic tree show?", ["A living species", "A common ancestor", "Extinct fungi", "A geographical area"]],
      ["Which animal is more closely related to the crocodile?", ["A lizard", "A bird", "A snake", "A turtle"]],
      ["Which scientist identified the three domains of life?", ["Carl Linnaeus", "Carl Woese", "Lynn Margulis", "Charles Darwin"]],
      ["Which organelle came from a swallowed cyanobacterium?", ["The mitochondrion", "The chloroplast", "The nucleus", "The ribosome"]],
    ],
  },
};
