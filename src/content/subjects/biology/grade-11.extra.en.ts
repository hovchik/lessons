import type { RuLesson } from "../../ru-overlay";

export const enExtra11: Record<string, RuLesson> = {
  "gene-interaction": {
    objectives: ["Explain incomplete dominance and codominance", "Work out how blood groups are inherited with multiple alleles", "Recognise complementary genes and epistasis from the ratios", "Explain polygenic inheritance and quantitative traits"],
    content: `## How alleles of one gene interact

In Mendel's pea traits one allele completely "hid" the other. But in nature alleles can interact in other ways.

**Incomplete dominance.** The heterozygote has an **intermediate** phenotype. In the four o'clock flower (or snapdragon), red (AA) × white (aa) → all of F₁ are **pink** (Aa). In F₂ the ratio is **1 : 2 : 1** for both genotype and phenotype (1 red : 2 pink : 1 white), because the heterozygote looks different from both homozygotes.

**Codominance.** In the heterozygote **both alleles show fully**, without blending. For example, a person with blood group AB has both A and B antigens on their red blood cells.

## Multiple alleles and blood groups

A gene can have **more** than two alleles, but each person carries only two of them. The ABO blood groups are set by three alleles of the **I** gene:

- **Iᴬ** and **Iᴮ** are codominant with each other,
- both are dominant over **i**.

| Blood group | Genotype |
|---|---|
| O (I) | ii |
| A (II) | IᴬIᴬ or Iᴬi |
| B (III) | IᴮIᴮ or Iᴮi |
| AB (IV) | IᴬIᴮ |

**Example.** The mother is group A (Iᴬi), the father group B (Iᴮi). Gametes: Iᴬ, i and Iᴮ, i. The children can have any of the **four** groups: IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B), ii (O), each with a 25% chance.

That is why blood groups can **rule out** a father but cannot prove fatherhood. For example, a parent with group AB cannot have a child with group O.

## How different genes interact

Sometimes one trait is controlled by two genes on **different chromosomes**. In the F₂ of a dihybrid cross (AaBb × AaBb) there are 16 combinations, but the 9 : 3 : 3 : 1 classes can merge:

| Interaction | What happens | F₂ ratio | Example |
|---|---|---|---|
| **Complementary genes** | the trait appears only when both dominant genes are present (A_B_) | **9 : 7** | purple flowers of the sweet pea |
| **Epistasis** (recessive) | the recessive homozygote of one gene (aa) blocks the other gene | **9 : 3 : 4** | mouse coat colour: aa is white whatever B is |
| **Epistasis** (dominant) | the dominant allele of one gene (A) blocks the other gene | **12 : 3 : 1** | fruit colour in squash |
| **Polygenic inheritance** | several genes each add a little to the same trait | a smooth range | human skin colour, height, wheat grain colour |

**Making sense of 9 : 7.** The flower is purple if the cell has two enzymes that make the pigment in turn: gene A codes for the first, gene B for the second. The A_B_ class (9/16) is coloured, while A_bb (3/16), aaB_ (3/16) and aabb (1/16) are white, because the chain is broken somewhere. 3 + 3 + 1 = 7.

## Polygenic and quantitative traits

Height, body mass, skin colour and a cow's milk yield are **quantitative** traits: they do not fall into clear classes but form a smooth range. That is because they are controlled by **many genes**, each adding a little, and the environment (food, sun) also has an effect.

If both parents are of average height, most of their children will be of average height too, and very tall or very short children will be rare. The spread of phenotypes looks like a "bell".

**One gene, many traits (pleiotropy).** Sometimes one gene affects several traits. For example, the sickle-cell gene changes the shape of red blood cells, causes anaemia and pain, and at the same time protects against malaria.

## Exercises

1. A pink four o'clock flower is crossed with a white one. What offspring will there be?
2. How is codominance different from incomplete dominance?
3. What blood groups can the children of parents with groups O and AB have?
4. A child has blood group O and the mother group A. Could the father have group AB?
5. F₂ gave 180 purple and 140 white flowers. Which type of interaction is this?
6. Why does human height vary smoothly rather than in clear classes?

## Answers

1. Aa × aa → 1 pink (Aa) : 1 white (aa).
2. With incomplete dominance the heterozygote is in between; with codominance both alleles show fully.
3. ii × IᴬIᴮ → Iᴬi (A) and Iᴮi (B), 50% each.
4. No. A child with group O is ii and must get i from both parents. A father with group AB (IᴬIᴮ) has no i allele.
5. 180 : 140 ≈ 9 : 7, so complementary genes.
6. It is controlled by many genes (polygenic) and by the environment, and each gene adds only a little.`,
    quiz: [
      ["What phenotype ratio appears in F₂ with incomplete dominance?", ["3 : 1", "1 : 2 : 1", "9 : 7", "1 : 1"]],
      ["What is the genotype of a person with blood group AB?", ["ii", "Iᴬi", "IᴬIᴮ", "IᴮIᴮ"]],
      ["Which ratio is typical of complementary genes?", ["9 : 3 : 3 : 1", "9 : 7", "12 : 3 : 1", "3 : 1"]],
      ["What is it called when several genes each add to the same trait?", ["Epistasis", "Polygenic inheritance", "Codominance", "Linkage"]],
      ["Parents are group A (Iᴬi) and group B (Iᴮi). What is the chance of a child with group O?", ["0%", "25%", "50%", "100%"]],
    ],
  },

  "gene-regulation": {
    objectives: ["Explain why not all genes work in every cell at once", "Describe how the lac operon works", "Explain cell differentiation through gene regulation", "Describe epigenetic changes and why they matter"],
    content: `## One genome, many kinds of cell

Almost every cell in your body has **the same DNA**. Yet a nerve cell looks nothing like a skin or muscle cell. The reason is that in each cell only some genes work (are **expressed**). Of the roughly 20,000 human genes, only a share is active in any one cell at a time.

- **Housekeeping genes** work in every cell (for example, enzymes for respiration, ribosome proteins).
- **Specialised genes** work only in certain cells: the insulin gene in the pancreas, the haemoglobin gene in cells that become red blood cells.

A gene's activity can be controlled at many stages, but the most important is the start of **transcription**: is the gene copied into mRNA or not?

## The lac operon

The first control mechanism was described in 1961 by the French scientists **François Jacob** and **Jacques Monod** (Nobel Prize 1965), working on the gut bacterium *E. coli*.

*E. coli* usually feeds on glucose. To break down lactose (milk sugar) it needs special enzymes, but there is no point making them if there is no lactose. The genes for these enzymes lie side by side and are read together: such a group is called an **operon**.

| Part | Role |
|---|---|
| **Promoter** | the stretch of DNA where RNA polymerase binds to start transcription |
| **Operator** | a "switch" between the promoter and the genes |
| **Structural genes** | code for the enzymes that break down lactose |
| **Repressor** | a protein that can sit on the operator and block the way |

- **No lactose.** The repressor sits on the operator, RNA polymerase cannot get past, and the genes are **off**. The cell does not waste energy on enzymes it does not need.
- **Lactose present.** A lactose molecule binds to the repressor and changes its shape. The repressor falls off the operator, RNA polymerase gets through, the genes turn **on**, and the bacterium starts digesting lactose.
- When the lactose runs out, the repressor sits on the operator again.

This is an example of **feedback**: the cell adjusts its own work to its surroundings.

## Differentiation

A fertilised egg (zygote) is **totipotent**: every cell of the body can come from it. During development cells gradually **differentiate**, that is, specialise, because some genes switch on in them and others switch off for good.

- **Stem cells** have not yet differentiated and can turn into different kinds of cell. Stem cells in the bone marrow make blood cells all through life.
- **Dolly the sheep**, cloned in 1996, proved that the nucleus of an adult cell still holds the whole genome, which can be "restarted".
- In 2006 the Japanese scientist **Shinya Yamanaka** showed that switching on just four control genes can turn a skin cell back into a stem cell (Nobel Prize 2012).

## Epigenetics

**Epigenetics** studies changes in how genes work that **do not change the sequence of DNA bases**.

- **DNA methylation.** Methyl groups (−CH₃) attach to some cytosines in the DNA, and the gene is "silenced".
- **Histone changes.** DNA is wound around histone proteins. If it is wound tightly, the gene cannot be read; if loosely, it can.

Epigenetic marks can change with diet, stress, smoking and other factors in the environment. This partly explains why **identical twins**, who have the same DNA, become more and more different in health and looks as they grow older.

**Why it matters.** Faults in gene control can cause disease. In cancer, for example, genes that stop cell division are often silenced, while genes that drive division are over-active.

## Exercises

1. Why are nerve cells and skin cells different if they have the same DNA?
2. What is an operon? Name the parts of the lac operon.
3. What happens in the lac operon when lactose appears?
4. How are stem cells different from differentiated cells?
5. What is an epigenetic change? Give two examples.
6. Why do identical twins become more different as they age?

## Answers

1. Different genes are working in them.
2. A group of genes that are read together and controlled together. The promoter, the operator and the structural genes; the repressor is made by a separate gene.
3. Lactose binds to the repressor, the repressor leaves the operator, and the enzyme genes start being read.
4. They have not yet specialised and can turn into different kinds of cell.
5. A change in how a gene works without a change in the DNA sequence. DNA methylation, histone changes.
6. Different lifestyles and surroundings change their epigenetic marks.`,
    quiz: [
      ["Who described the lac operon?", ["Mendel", "Jacob and Monod", "Watson and Crick", "Morgan"]],
      ["What does the repressor do when there is no lactose?", ["Breaks down lactose", "Sits on the operator and blocks transcription", "Speeds up transcription", "Destroys the DNA"]],
      ["What are unspecialised cells that can turn into different cells called?", ["Gametes", "Stem cells", "Red blood cells", "Neurons"]],
      ["What happens in DNA methylation?", ["The base sequence changes", "The gene is silenced without changing the sequence", "The DNA doubles", "A new chromosome appears"]],
      ["In which year was Dolly the sheep cloned?", ["1953", "1961", "1996", "2012"]],
    ],
  },

  "dna-technologies": {
    objectives: ["Explain how the polymerase chain reaction (PCR) works", "Explain gel electrophoresis and DNA fingerprinting", "Describe genome sequencing and the Human Genome Project", "Explain CRISPR and discuss the ethical questions it raises"],
    content: `## PCR: a photocopier for DNA

Often there is very little DNA: one hair, a drop of saliva, an ancient bone. To study it we need millions of copies. In 1983 the American **Kary Mullis** invented the **polymerase chain reaction** (PCR) (Nobel Prize 1993).

Each cycle has three steps:

1. **Denaturing** (about 95 °C): the two DNA strands separate.
2. **Annealing** (about 55–65 °C): short man-made pieces of DNA, **primers**, attach to the ends of the stretch we want.
3. **Extension** (about 72 °C): a heat-resistant **DNA polymerase** builds new strands by base pairing.

Each cycle **doubles** the amount of DNA: 1 → 2 → 4 → 8 … So after n cycles one molecule becomes 2ⁿ molecules. After 30 cycles that is 2³⁰ ≈ 1 billion copies, and the whole run takes about two hours.

The heat-resistant polymerase comes from a bacterium living in **hot springs** (*Thermus aquaticus*), which is not destroyed at 95 °C. PCR is used to diagnose infections (for example, COVID-19 tests), to test fatherhood and to study ancient DNA.

## Gel electrophoresis and DNA fingerprints

DNA has a **negative** charge (because of its phosphate groups). If we put pieces of DNA into a jelly-like gel and switch on an electric current, they move towards the **positive** pole. **Short** pieces slip through the pores of the gel more easily and travel further; **long** ones stay closer. The result is a "barcode" of bands.

99.9% of our DNA is the same in everyone, but there are stretches where a short sequence is repeated a different number of times (short tandem repeats). These numbers are unique to each person (except identical twins). In 1984 the English scientist **Alec Jeffreys** invented **DNA fingerprinting**.

**Uses:** forensics (identifying a criminal from traces), paternity testing, identifying victims of disasters, tracing family links.

## Sequencing genomes

**Sequencing** means reading the order of bases in DNA. In 1977 **Frederick Sanger** developed the first practical method.

The international **Human Genome Project** (1990–2003) read the roughly 3 billion base pairs of human DNA for the first time. It took 13 years and cost about 3 billion dollars. Today a human genome can be read in a day or two for a few hundred dollars.

The results surprised scientists: humans have only about **20,000** protein-coding genes, far fewer than expected, and only about **1–2%** of our DNA codes directly for proteins. Much of the rest controls genes or is still being studied.

## CRISPR: editing genes

Bacteria defend themselves against viruses with a special system: they keep a "mugshot" of the virus's DNA and cut that DNA with the enzyme **Cas9** when the virus attacks again. In 2012 **Emmanuelle Charpentier** and **Jennifer Doudna** showed that the system can be "programmed" to cut **any** chosen stretch of DNA (Nobel Prize in Chemistry 2020).

**How it works:**

1. Scientists make a **guide RNA** that matches a stretch of the target gene.
2. The guide RNA leads Cas9 to exactly that spot, and Cas9 cuts both strands of the DNA.
3. The cell repairs the cut: the gene can be switched off, or a new, correct piece can be put in.

**Uses.** In 2023 a CRISPR-based treatment for **sickle-cell disease** was approved for the first time. Crops that resist drought and disease are being developed.

**Ethical questions:**

- Is it acceptable to change the genes of an embryo if the change will pass to all later generations? Many countries ban it.
- Who decides which trait is a "disease" and which is simply a difference?
- How can people's genetic data be kept private?

## Exercises

1. Name the three steps of a PCR cycle and their temperatures.
2. How many DNA molecules come from one molecule after 10 cycles of PCR?
3. Why does PCR need a heat-resistant polymerase?
4. Why do short pieces of DNA travel further in electrophoresis?
5. Why can identical twins not be told apart by DNA fingerprinting?
6. What do the guide RNA and Cas9 do in CRISPR?

## Answers

1. Denaturing (about 95 °C), annealing (about 55–65 °C), extension (about 72 °C).
2. 2¹⁰ = 1,024 molecules.
3. Each cycle heats the mixture to 95 °C, which would destroy an ordinary enzyme.
4. They slip through the pores of the gel more easily.
5. They have the same DNA.
6. The guide RNA finds the right stretch of DNA and Cas9 cuts it.`,
    quiz: [
      ["What does PCR do?", ["Destroys DNA", "Makes many copies of a chosen stretch of DNA", "Stains chromosomes", "Makes protein"]],
      ["How does the amount of DNA change in each PCR cycle?", ["It goes up by 1", "It doubles", "It triples", "It stays the same"]],
      ["Towards which pole do DNA pieces move in electrophoresis?", ["The negative pole", "The positive pole", "They stay put", "Both equally"]],
      ["In which year was the Human Genome Project completed?", ["1953", "1983", "2003", "2020"]],
      ["Which enzyme cuts DNA in the CRISPR system?", ["Amylase", "Cas9", "Pepsin", "Lipase"]],
    ],
  },
};
