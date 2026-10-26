import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Asexual and sexual reproduction, meiosis, gamete formation, fertilisation, embryonic and post-embryonic development.",
    "Mendel's laws, solving problems, genetics of sex, linkage, variation, human genetics, breeding and biotechnology.",
  ],
  lessons: {
    meiosis: {
      objectives: ["Compare asexual and sexual reproduction", "Describe the two divisions of meiosis", "Explain synapsis and crossing over", "Compare mitosis and meiosis"],
      content: `## Forms of reproduction

| Form | How | Example | Offspring |
|---|---|---|---|
| **asexual** | one parent, mitosis | division of a bacterium, budding of the hydra, potatoes from tubers | a copy of the parent |
| **sexual** | two parents, gametes | animals, flowering plants | new combinations |

Sexual reproduction creates **genetic diversity**, which helps a species adapt to a changing environment.

## Meiosis

**Meiosis** is the division in which one diploid (2n) cell gives **four haploid (n)** cells. It consists of two divisions one after the other.

| Phase | Main event | Result |
|---|---|---|
| **prophase I** | homologous chromosomes pair up (**synapsis**) and exchange sections (**crossing over**) | new combinations of genes |
| **metaphase I** | pairs of homologues line up on the equator | |
| **anaphase I** | homologous chromosomes (whole, with two chromatids) move to the poles | |
| **telophase I** | two cells, n2c | the chromosome number has halved |
| **meiosis II** | runs like mitosis, the chromatids separate | four cells, nc |

Between the two divisions the DNA **does not double**.

## Comparison

| Feature | Mitosis | Meiosis |
|---|---|---|
| number of divisions | 1 | 2 |
| daughter cells | 2, 2n | 4, n |
| synapsis and crossing over | no | yes |
| hereditary information | the same | changes |
| where | body cells | forming sex cells |

## Sources of diversity

1. **Crossing over** in prophase I.
2. **Random separation** of homologous chromosomes in anaphase I. With 23 pairs of chromosomes, a human can form 2²³ ≈ 8 million different gametes.
3. **Random meeting** of gametes at fertilisation.

## Exercises

1. Why does sexual reproduction give varied offspring?
2. What happens in prophase I?
3. A cat's body cell has 38 chromosomes. How many will its gamete have?
4. Write the formula of a cell after telophase I.
5. How many types of gamete can form if 2n = 6 (without crossing over)?

## Answers

1. Because of crossing over and random separation of chromosomes in meiosis, and also the random meeting of gametes.
2. Synapsis and crossing over of homologous chromosomes.
3. 19.
4. n2c.
5. n = 3, 2³ = 8.`,
      quiz: [
        ["How many cells result from one meiosis?", ["1", "2", "4", "8"]],
        ["In which phase does crossing over happen?", ["Prophase I", "Metaphase II", "Anaphase II", "Interphase"]],
        ["A human gamete contains:", ["46 chromosomes", "23 chromosomes", "92 chromosomes", "44 chromosomes"]],
        ["In anaphase I, what moves to the poles?", ["chromatids", "homologous chromosomes", "ribosomes", "mitochondria"]],
        ["Which is asexual reproduction?", ["Fertilisation of fish eggs", "Budding of the hydra", "Pollination of a flower", "A frog laying spawn"]],
      ],
    },
    "gametes-fertilization": {
      objectives: ["Compare spermatogenesis and oogenesis", "Describe the structure of the sperm and the egg", "Explain fertilisation", "Describe double fertilisation in flowering plants"],
      content: `## Forming gametes

| Stage | Spermatogenesis | Oogenesis |
|---|---|---|
| multiplication | primary cells divide by mitosis | the same, but mainly before birth |
| growth | small | the cell grows a lot and stores nutrients |
| maturation (meiosis) | 1 cell → **4 sperm** | 1 cell → **1 egg** + 3 **polar bodies** |
| shaping | a flagellum forms | none |

In oogenesis the cytoplasm divides unevenly so that the egg gets almost all the nutrients.

## Structure of gametes

The **sperm** is small and mobile. It has a **head** (the nucleus and the **acrosome**, with enzymes that dissolve the egg's coat), a **midpiece** (mitochondria, for energy) and a **tail** (flagellum).

The **egg** is large and does not move; it contains a store of nutrients (**yolk**) and is covered with coats.

## Fertilisation

**Fertilisation** is the fusion of gametes, which forms a **zygote** (2n). This restores the diploid set of chromosomes, and the zygote gets hereditary information from both parents.

- **External** fertilisation happens in water (fish, amphibians). There are many gametes because many of them die.
- **Internal** fertilisation happens inside the female's body (reptiles, birds, mammals).

## Double fertilisation

In flowering plants (discovered by S. Navashin, 1898) the pollen tube brings **two sperm cells** to the ovule.

1. The first sperm cell fuses with the **egg cell**, forming the **embryo** (2n).
2. The second fuses with the **central cell** (2n), forming the **endosperm** (3n), the embryo's food store.

## Exercises

1. How many eggs form from one primary cell?
2. Why is the egg large and the sperm small?
3. What is the role of the acrosome?
4. Why do fish lay a lot of eggs?
5. A wheat body cell has 42 chromosomes. How many are in the endosperm?

## Answers

1. One.
2. The egg stores nutrients for the embryo, while the sperm has to be mobile.
3. Its enzymes dissolve the egg's coat.
4. Fertilisation is external, and many eggs and sperm die.
5. n = 21, endosperm 3n = 63.`,
      quiz: [
        ["How many sperm form from one primary cell?", ["1", "2", "4", "8"]],
        ["Where do sperm get energy for movement?", ["From the acrosome", "From mitochondria", "From yolk", "From the nucleus"]],
        ["What is a fertilised egg called?", ["A zygote", "A gamete", "A sperm cell", "Endosperm"]],
        ["What chromosome set does the endosperm of flowering plants have?", ["n", "2n", "3n", "4n"]],
        ["Who discovered double fertilisation?", ["S. Navashin", "G. Mendel", "T. Morgan", "C. Darwin"]],
      ],
    },
    ontogenesis: {
      objectives: ["List the stages of embryonic development", "Name the germ layers and the organs that form from them", "Distinguish direct and indirect post-embryonic development", "Explain the effect of external factors on the embryo"],
      content: `## Ontogenesis

**Ontogenesis** is the individual development of an organism from the zygote to death. It is divided into the **embryonic** and **post-embryonic** periods.

## Embryonic development

1. **Cleavage**: the zygote divides quickly by mitosis, and the cells do not grow. A **blastula**, a ball with a cavity, forms.
2. **Gastrulation**: the wall of the blastula folds inwards, giving a two-layered and then a three-layered embryo, the **gastrula**.
3. **Organogenesis**: the organs form. The **neural tube** forms first.

## Germ layers

| Layer | What forms |
|---|---|
| **ectoderm** (outer) | epidermis of the skin, nervous system, sense organs |
| **endoderm** (inner) | lining of the gut, liver, pancreas, lungs |
| **mesoderm** (middle) | muscles, skeleton, blood, heart, kidneys |

Parts of the embryo influence each other: one part "steers" the development of another. This is called **embryonic induction**.

## Post-embryonic development

| Type | Description | Example |
|---|---|---|
| **direct** | the newborn looks like the adult, only smaller | reptiles, birds, mammals |
| **indirect** (with metamorphosis) | the larva differs from the adult | frog, butterfly |

In indirect development the larva and the adult eat different food and do not compete with each other.

## The embryo and the environment

For a human embryo the most dangerous period is the first 8–12 weeks, when the organs form. Alcohol, nicotine, drugs, some medicines, radiation and viral infections (for example, rubella) can cause **birth defects**.

## Exercises

1. How does cleavage differ from ordinary mitosis?
2. What is a blastula?
3. Which layer does the nervous system form from?
4. Which layer does the heart form from?
5. Why are the first months of pregnancy the most dangerous?

## Answers

1. The cells divide without growing, so they get smaller and smaller.
2. A single-layered embryo, a ball with a cavity.
3. The ectoderm.
4. The mesoderm.
5. The organs form at this time, and harmful factors can cause defects.`,
      quiz: [
        ["What is a single-layered embryo with a cavity called?", ["A gastrula", "A blastula", "A zygote", "A neurula"]],
        ["Which layer does the liver form from?", ["The ectoderm", "The endoderm", "The mesoderm", "All of them"]],
        ["Which layer do muscles form from?", ["The ectoderm", "The endoderm", "The mesoderm", "None of them"]],
        ["Which animal has indirect development?", ["The dog", "The butterfly", "The pigeon", "The lizard"]],
        ["What is ontogenesis?", ["The historical development of a species", "The individual development of an organism", "Cell division", "Change in an ecosystem"]],
      ],
    },
    "mendel-monohybrid": {
      objectives: ["Use the basic terms of genetics", "State the laws of uniformity and segregation", "Draw a Punnett square for a monohybrid cross", "Solve test-cross problems"],
      content: `## Terms

| Term | Meaning |
|---|---|
| **gene** | unit of heredity, a section of DNA |
| **alleles** | different forms of one gene (A and a) |
| **dominant** | the allele that shows (A) |
| **recessive** | the allele that shows only in the aa state |
| **homozygote** | AA or aa, gives one type of gamete |
| **heterozygote** | Aa, gives two types of gamete |
| **genotype** | the set of genes |
| **phenotype** | the set of external and internal traits |

G. Mendel (1865) succeeded in his experiments with peas because he chose **pure lines**, studied **contrasting** traits and counted the offspring **mathematically**.

## The first law: uniformity

When two homozygous parents are crossed (AA × aa), **all the F₁ hybrids are the same**: Aa, with the dominant trait.

**Example.** Peas with yellow seeds (AA) × peas with green seeds (aa) → F₁: all yellow (Aa).

## The second law: segregation

When F₁ hybrids are crossed (Aa × Aa), the F₂ shows a **3 : 1** ratio by phenotype and **1 : 2 : 1** by genotype.

| ♀ / ♂ | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

Phenotype: 3 yellow : 1 green. Genotype: 1 AA : 2 Aa : 1 aa.

The **purity of gametes** hypothesis: each gamete carries only one allele of a given pair.

## The test cross

How can you tell whether a yellow pea is AA or Aa? Cross it with a recessive homozygote (aa).

- If all the offspring are yellow, the parent is **AA**.
- If yellow : green = **1 : 1**, the parent is **Aa**.

## Exercises

1. What is a heterozygote?
2. Black fur (B) is dominant over white (b). A cross Bb × Bb gave 16 young. Roughly how many will be white?
3. What offspring will a cross Aa × aa give?
4. Why is an aa parent used for a test cross?
5. A brown-eyed woman (Aa) married a blue-eyed man (aa). What is the probability that their child will have blue eyes?

## Answers

1. An individual with two different alleles of a gene (Aa).
2. About ¼, that is 4 young.
3. 1 Aa : 1 aa, by phenotype 1 : 1.
4. It gives only recessive gametes and does not "hide" the other parent's alleles.
5. 50%.`,
      quiz: [
        ["What phenotype ratio does the cross Aa × Aa give?", ["1 : 1", "3 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1"]],
        ["How many types of gamete does an AA individual give?", ["1", "2", "3", "4"]],
        ["What is the genotype of an individual with a recessive trait?", ["AA", "Aa", "aa", "Any"]],
        ["A test cross gave 1 : 1. What was the genotype of the parent being tested?", ["AA", "Aa", "aa", "It cannot be determined"]],
        ["What is a phenotype?", ["The set of genes", "The set of traits", "A pair of alleles", "A set of chromosomes"]],
      ],
    },
    "dihybrid-cross": {
      objectives: ["State Mendel's third law", "Find the types of gamete of a dihybrid individual", "Draw a 4 × 4 Punnett square", "Apply the rules of probability to inheritance problems"],
      content: `## The third law

When parents that differ in two or more pairs of traits are crossed, **genes and traits are inherited independently of each other**. The law holds when the genes are on **different** pairs of chromosomes.

## Gametes

An AaBb individual gives **4** types of gamete in equal numbers: AB, Ab, aB, ab. The general rule: with n heterozygous pairs the number of gamete types is **2ⁿ**.

## The cross

Peas: A yellow, a green, B smooth, b wrinkled. AaBb × AaBb.

| | AB | Ab | aB | ab |
|---|---|---|---|---|
| **AB** | AABB | AABb | AaBB | AaBb |
| **Ab** | AABb | AAbb | AaBb | Aabb |
| **aB** | AaBB | AaBb | aaBB | aaBb |
| **ab** | AaBb | Aabb | aaBb | aabb |

By phenotype: **9** yellow smooth : **3** yellow wrinkled : **3** green smooth : **1** green wrinkled.

## A shortcut with probability

Because the genes are independent, you can work out each pair separately and **multiply**.

**Example.** AaBb × AaBb. What is the probability of a green smooth (aaB_) offspring?

- aa: ¼,
- B_: ¾,
- total: ¼ · ¾ = **3/16**.

**Example.** AaBb × aabb (test cross). Offspring: AaBb : Aabb : aaBb : aabb = **1 : 1 : 1 : 1**.

## Exercises

1. How many types of gamete does an AaBbCc individual give?
2. Write the gametes of an AaBB individual.
3. AaBb × AaBb. What is the probability of an aabb offspring?
4. AaBb × aabb. What will the phenotype ratio be?
5. When does Mendel's third law not hold?

## Answers

1. 2³ = 8.
2. AB and aB.
3. ¼ · ¼ = 1/16.
4. 1 : 1 : 1 : 1.
5. When the genes are on the same chromosome (linked).`,
      quiz: [
        ["What phenotype ratio does the cross AaBb × AaBb give?", ["3 : 1", "1 : 1 : 1 : 1", "9 : 3 : 3 : 1", "1 : 2 : 1"]],
        ["How many types of gamete does AaBb give?", ["1", "2", "4", "8"]],
        ["Which gamete can an AABb individual not give?", ["AB", "Ab", "aB", "It can give all of them"]],
        ["AaBb × AaBb. What is the probability of AAbb?", ["1/16", "3/16", "9/16", "1/4"]],
        ["Mendel's third law holds when the genes are:", ["on the same chromosome", "on different pairs of chromosomes", "only on the X chromosome", "in the mitochondrion"]],
      ],
    },
    "sex-linkage": {
      objectives: ["Explain chromosomal sex determination", "Solve problems on X-linked inheritance", "State Morgan's law", "Explain why crossing over breaks linkage"],
      content: `## Sex determination

Of a human's 46 chromosomes, 44 are **autosomes** and 2 are **sex chromosomes**. A woman has **XX**, a man **XY**. A woman gives only X gametes, a man gives X and Y in equal numbers, so the chance of having a boy or a girl is **50%**.

In birds and butterflies, by contrast, the females have different sex chromosomes (ZW) and the males have ZZ.

## X-linked traits

Some genes are on the X chromosome, which has no partner on the Y. Examples: **colour blindness** (a disorder of colour vision) and **haemophilia** (blood that does not clot). Both traits are recessive.

| Genotype | Phenotype |
|---|---|
| XᴰXᴰ | healthy woman |
| XᴰXᵈ | healthy woman, **carrier** |
| XᵈXᵈ | colour-blind woman |
| XᴰY | healthy man |
| XᵈY | colour-blind man |

A man has only one X, so a recessive allele always shows in him. That is why colour blindness and haemophilia are much more common in men.

**Example.** A carrier woman (XᴰXᵈ) marries a healthy man (XᴰY).

| | Xᴰ | Y |
|---|---|---|
| **Xᴰ** | XᴰXᴰ | XᴰY |
| **Xᵈ** | XᴰXᵈ | XᵈY |

All the girls are healthy (half of them carriers), and **half** of the boys are colour-blind. Of all the children, ¼ are colour-blind.

## Linkage

T. Morgan and his students studied the fruit fly **Drosophila**. **Morgan's law**: genes on the same chromosome are inherited **together**, that is, linked. All the genes of one chromosome form a **linkage group**. A woman has 23 linkage groups and a man 24, because the X and Y chromosomes are different.

Linkage can be broken by **crossing over**. The further apart two genes are on a chromosome, the more often crossing over happens between them. A distance of 1 **centimorgan** is defined as 1% crossing over. This is how **genetic maps** of chromosomes are made.

## Exercises

1. Who determines the sex of a human child, the father or the mother? Why?
2. Why is haemophilia more common in men?
3. A colour-blind man (XᵈY) married a healthy woman who is not a carrier. What will the children be like?
4. What is a linkage group?
5. The crossing-over frequency between genes A and B is 12%. What is the distance between them?

## Answers

1. The father, because he gives an X or a Y gamete, while the mother gives only X.
2. A man has one X, and a recessive allele always shows.
3. All the children are healthy, and all the girls are carriers.
4. Genes that are on the same chromosome and are inherited together.
5. 12 centimorgans.`,
      quiz: [
        ["What sex chromosomes does a man have?", ["XX", "XY", "ZW", "YY"]],
        ["A woman XᴰXᵈ is:", ["colour-blind", "a healthy carrier", "a man", "ill with haemophilia"]],
        ["What percentage of the sons of a carrier mother and a healthy father will be colour-blind?", ["0%", "25%", "50%", "100%"]],
        ["Whose name does the law of linked inheritance carry?", ["Mendel's", "Morgan's", "Darwin's", "Vavilov's"]],
        ["What breaks gene linkage?", ["Mitosis", "Crossing over", "Fertilisation", "Transcription"]],
      ],
    },
    "variation-mutations": {
      objectives: ["Distinguish heritable and non-heritable variation", "Explain the norm of reaction", "Classify mutations", "List mutagenic factors"],
      content: `## Two kinds

| Variation | Cause | Inherited? | Example |
|---|---|---|---|
| **modification** (non-heritable) | influence of the environment | no | a suntan, trained muscles, a big yield from a well-fertilised plant |
| **combinative** | new combinations of genes in meiosis and fertilisation | yes | children differing from their parents |
| **mutational** | a change in DNA | yes | albinism, Down syndrome |

## Norm of reaction

The genotype does not set the exact value of a trait but the **limits** of its variation, the **norm of reaction**. A person's height depends on both genes and food. The norm of reaction for a cow's milk yield is wide, depending on feed and care, while eye colour hardly changes.

The fur of the mountain hare can grow back white or dark depending on the temperature. This is a modification and is not passed on to the offspring.

## Mutations

A **mutation** is a sudden change in the hereditary material. The term was introduced by H. de Vries.

| Kind | What changes | Example |
|---|---|---|
| **gene** | the sequence of nucleotides in one gene | sickle-cell anaemia |
| **chromosomal** | the structure of a chromosome (loss, duplication, inversion of a section) | cri du chat syndrome |
| **genomic** | the number of chromosomes | Down syndrome (47 chromosomes, the 21st is tripled), **polyploidy** in plants |

Most mutations are harmful or neutral, but some are useful, and these are the raw material of evolution.

Polyploid plants (wheat, potatoes, strawberries) are often larger and give bigger yields.

## Mutagens

- **physical**: X-rays and gamma rays, ultraviolet,
- **chemical**: some pesticides, substances in tobacco smoke,
- **biological**: some viruses.

That is why it is important to protect yourself from radiation, not to smoke and not to overdo sunbathing.

## Exercises

1. What kind of variation is a suntan? Is it inherited?
2. What is the norm of reaction?
3. What kind of mutation is Down syndrome?
4. Why are mutations important for evolution?
5. Name two physical mutagens.

## Answers

1. Modification; it is not inherited.
2. The limits of variation of a trait set by the genotype.
3. Genomic (a change in the number of chromosomes).
4. They create new heritable traits from which natural selection chooses.
5. X-rays and ultraviolet.`,
      quiz: [
        ["Which variation is non-heritable?", ["Mutational", "Combinative", "Modification", "Genomic"]],
        ["How many chromosomes does a person with Down syndrome have?", ["45", "46", "47", "92"]],
        ["What kind of mutation is polyploidy?", ["Gene", "Chromosomal", "Genomic", "Modification"]],
        ["Which is a chemical mutagen?", ["An X-ray", "Some substances in tobacco smoke", "Ultraviolet", "A virus"]],
        ["What sets the norm of reaction?", ["The environment", "The genotype", "Chance", "Age"]],
      ],
    },
    "human-genetics": {
      objectives: ["List the methods of human genetics", "Read and analyse a pedigree", "Give examples of hereditary diseases", "Explain the purpose of genetic counselling"],
      content: `## Why it is difficult

You cannot experiment on people, generations take a long time, and families have few children. So geneticists use special methods.

## Methods

| Method | What it does |
|---|---|
| **genealogical** (pedigree) | traces a trait in a family over several generations |
| **twin** | compares identical and non-identical twins to separate the roles of genes and environment |
| **cytogenetic** | studies chromosomes under a microscope (the **karyotype**) |
| **biochemical** | detects disorders of metabolism |
| **molecular** | reads DNA and finds mutations |

## The pedigree

In a pedigree a man is shown by a **square**, a woman by a **circle**, and a person with the trait by a **filled-in** symbol.

- **Autosomal dominant** inheritance: the trait appears in every generation, equally in both sexes. Example: **polydactyly** (an extra finger).
- **Autosomal recessive**: the trait can "skip" generations, and a child can be affected while the parents are healthy (both Aa). Examples: **albinism**, **phenylketonuria**.
- **X-linked recessive**: mainly men are affected, getting the allele from their mothers. Example: **haemophilia**.

**Example.** Two healthy parents had a child with albinism. So both parents are **Aa**, and the probability that the next child will have albinism is **¼**.

## Diseases and prevention

**Phenylketonuria** is a recessive disease: the body cannot break down the amino acid phenylalanine. If it is found early (newborn screening) and the child is given a special diet, the child will develop normally.

**Genetic counselling** helps families judge the risk of a hereditary disease. Marriages between relatives raise the risk of recessive diseases, because relatives may carry the same allele.

## Exercises

1. Why is the method of crossing not used in human genetics?
2. Why are identical twins useful for genetics?
3. How are a woman and a man shown in a pedigree?
4. Healthy parents had a child with phenylketonuria. What are the parents' genotypes?
5. Why are marriages between relatives risky?

## Answers

1. You cannot experiment on people, generations are long and there are few children.
2. They have the same genotype, so differences show the influence of the environment.
3. A woman by a circle, a man by a square.
4. Both Aa.
5. Relatives may have the same recessive allele, and the child may get aa.`,
      quiz: [
        ["Which method studies chromosomes under a microscope?", ["Genealogical", "Cytogenetic", "Twin", "Biochemical"]],
        ["How is a man shown in a pedigree?", ["By a circle", "By a square", "By a triangle", "By a star"]],
        ["Which disease is autosomal recessive?", ["Polydactyly", "Albinism", "Haemophilia", "Colour blindness"]],
        ["The probability that a child of Aa × Aa parents will be aa:", ["0", "¼", "½", "¾"]],
        ["How are the effects of phenylketonuria prevented?", ["With antibiotics", "With a special diet", "With surgery", "They cannot be prevented"]],
      ],
    },
    "breeding-biotech": {
      objectives: ["Explain the main methods of breeding", "Name N. Vavilov's contribution", "Describe the principle of genetic engineering", "Discuss the benefits and risks of cloning and GMOs"],
      content: `## Breeding

**Breeding** (selection) is the science of creating new plant **varieties**, animal **breeds** and **strains** of microorganisms.

| Method | Essence | Example |
|---|---|---|
| **artificial selection** | people choose individuals with the desired traits | high-yielding dairy cows |
| **hybridisation** | crossing different varieties or breeds | maize hybrids |
| **heterosis** | first-generation hybrids are stronger and give bigger yields | |
| **polyploidy** | increasing the chromosome set | strawberries with large fruit |
| **artificial mutagenesis** | getting new forms with mutagens | mould strains that produce antibiotics |

## N. Vavilov

N. Vavilov (1887–1943) assembled one of the world's largest collections of crop plants and discovered the **centres of origin** of cultivated plants. He considered Armenia an important centre of diversity of **wheat** species, part of the **Southwest Asian** centre. The apricot, whose Latin name is *Prunus armeniaca*, and many grape varieties also come from here.

Vavilov also formulated the **law of homologous series in hereditary variation**: closely related species show similar variation.

## Biotechnology

**Biotechnology** is the use of living organisms in production: bread, cheese, matsun, antibiotics, enzymes.

**Genetic engineering**: the desired gene is cut out with **restriction enzymes** and inserted into a bacterial **plasmid**, and the bacterium starts producing that protein. This is how human **insulin** is obtained from E. coli.

**Cloning** is producing genetically identical organisms. In 1996 **Dolly** the sheep was born, the first cloned mammal.

**Cell engineering**: healthy seedlings are grown in test tubes from plant tissues, for example virus-free planting material for potatoes.

## Debates

Genetically modified organisms (GMOs) can give bigger yields and resist pests better. At the same time people debate crossing with wild species, loss of diversity and proper testing. Many countries regulate GMOs with special laws and labelling.

## Exercises

1. How does a variety differ from a breed?
2. What is heterosis?
3. According to Vavilov, why is Armenia important for wheat?
4. How is human insulin obtained from bacteria?
5. What is a clone?

## Answers

1. A variety is for plants, a breed is for animals.
2. The extra vigour and higher yield of first-generation hybrids.
3. There is a great diversity of wheat species here; Armenia is part of the Southwest Asian centre of origin.
4. The human insulin gene is inserted into a bacterial plasmid, and the bacterium produces insulin.
5. A genetically identical organism or group of cells.`,
      quiz: [
        ["What are groups of plants created by people called?", ["Breeds", "Varieties", "Strains", "Populations"]],
        ["Who discovered the centres of origin of cultivated plants?", ["G. Mendel", "N. Vavilov", "T. Morgan", "C. Darwin"]],
        ["What is used in genetic engineering to carry a gene into a bacterium?", ["A ribosome", "A plasmid", "A lysosome", "A chloroplast"]],
        ["What was the first cloned mammal?", ["Dolly the sheep", "Laika the dog", "Felix the cat", "Jack the monkey"]],
        ["The Latin name of which fruit tree is linked to Armenia?", ["Apple", "Apricot", "Pear", "Cherry"]],
      ],
    },
  },
};
