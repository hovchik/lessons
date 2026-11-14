import type { RuLesson } from "../../ru-overlay";

export const enExtra10: Record<string, RuLesson> = {
  "cell-theory-microscopy": {
    objectives: ["Describe how the cell theory came about", "State the points of the modern cell theory", "Work out a microscope's magnification and an object's real size", "Compare light and electron microscopes"],
    content: `## How the cell was discovered

| Year | Scientist | What they did |
|---|---|---|
| 1665 | **Robert Hooke** (England) | looked at a thin slice of cork with a home-made microscope, saw "little rooms" like a honeycomb and called them **cells** |
| 1670s | **Antonie van Leeuwenhoek** (Holland) | with lenses magnifying up to 270 times, was the first to see bacteria, protists, red blood cells and sperm |
| 1831 | **Robert Brown** (Scotland) | described the **nucleus** in plant cells |
| 1838–1839 | **Matthias Schleiden** and **Theodor Schwann** (Germany) | Schleiden showed that all plants are made of cells, Schwann proved the same for animals: the **cell theory** was born |
| 1855 | **Rudolf Virchow** (Germany) | stated: "**Every cell comes from a cell**" (*Omnis cellula e cellula*) |

Hooke saw only the walls of **dead** cells. It took two hundred years for scientists to realise that a cell is a living unit with a life of its own inside.

## The modern cell theory

1. **The cell is the basic unit of structure, function and development of living things:** there is no living system smaller than a cell.
2. **The cells of all organisms are alike** in chemistry, structure and metabolism.
3. **New cells arise only by the division of existing cells.**
4. **In a many-celled organism cells are specialised** and form tissues, organs and systems.
5. The likeness of cells shows that all living things share a **common origin**.

**An exception?** Viruses are not made of cells, but they can reproduce only **inside someone else's cell**, so they too depend on cells.

## Units of size

Cells are very small, so special units are used:

- 1 mm = 1,000 **µm** (micrometres),
- 1 µm = 1,000 **nm** (nanometres).

| Object | Approximate size |
|---|---|
| human egg cell | 120 µm (0.12 mm, just visible to the eye) |
| plant cell | 20–100 µm |
| red blood cell | 7–8 µm |
| bacterium | 1–5 µm |
| mitochondrion | 1–2 µm |
| virus | 20–300 nm |
| ribosome | 20–30 nm |
| width of the DNA helix | 2 nm |

The human eye can tell apart two points about 0.1 mm (100 µm) apart. To see smaller details we need a microscope.

## The light microscope

A light microscope has two lens systems: the **eyepiece** (near the eye) and the **objective** (near the specimen).

**Total magnification = eyepiece magnification · objective magnification.**

For example, with a 10× eyepiece and a 40× objective the magnification is 10 · 40 = 400 times.

**Real size = image size : magnification.**

For example, in a photo at 400× a cell is 20 mm long. Its real size is 20 : 400 = 0.05 mm = 50 µm.

**Magnification and resolution.** You can enlarge a picture without end, but after a point it just gets blurry. What matters is **resolution**, the smallest distance between two points at which they can still be seen as separate. The resolution of a light microscope is about **0.2 µm**, because the wavelength of light is about 0.4–0.7 µm. So a light microscope shows the nucleus and chloroplasts, but not ribosomes or viruses.

See-through cells are coloured with **stains**: iodine turns starch blue, for example, and methylene blue stains the nucleus.

## The electron microscope

In 1931 the German engineers **Ernst Ruska** and **Max Knoll** built the **electron microscope** (Ruska received the Nobel Prize in 1986). Instead of light it uses a **beam of electrons**, whose wavelength is thousands of times shorter, and instead of glass lenses it uses **magnets**.

| | Light | Electron |
|---|---|---|
| What it "lights" with | light | electrons |
| Resolution | about 0.2 µm | about 0.1–1 nm |
| Greatest useful magnification | about 1,500 times | millions of times |
| Living specimens | can be viewed | no: the specimen must be in a vacuum |
| Colour | in colour | black and white (colour is added by computer) |

- A **transmission** electron microscope sends electrons through an ultra-thin slice and shows the inside of organelles.
- A **scanning** electron microscope "feels" the surface and gives a 3D picture, for example of a mosquito's head or a pollen grain.

Thanks to the electron microscope, ribosomes, the endoplasmic reticulum and the structure of the membrane were discovered, and viruses were seen.

## Exercises

1. What did Robert Hooke see in 1665, and why was that not yet the cell theory?
2. State three points of the cell theory.
3. A microscope has a 15× eyepiece and a 40× objective. What is the magnification?
4. In a photo at 1,000× a bacterium is 3 mm long. What is its real size in µm?
5. Why can a virus not be seen with a light microscope?
6. Give one advantage and one disadvantage of the electron microscope.

## Answers

1. The walls of dead cork cells. He did not know that the cell is a living unit or that all organisms are made of cells.
2. The cell is the basic unit of life; the cells of all organisms are alike; new cells arise only by division of cells.
3. 15 · 40 = 600 times.
4. 3 mm : 1,000 = 0.003 mm = 3 µm.
5. A virus (20–300 nm) is smaller than the resolution of a light microscope (about 200 nm).
6. Advantage: very high resolution. Disadvantage: living specimens cannot be viewed.`,
    quiz: [
      ["Who first used the word \"cell\"?", ["Leeuwenhoek", "Robert Hooke", "Schwann", "Virchow"]],
      ["Who stated \"Every cell comes from a cell\"?", ["Robert Brown", "Matthias Schleiden", "Rudolf Virchow", "Charles Darwin"]],
      ["What magnification do a 10× eyepiece and a 100× objective give?", ["110", "100", "1,000", "10,000"]],
      ["How many micrometres are in 1 millimetre?", ["10", "100", "1,000", "1,000,000"]],
      ["What gives the electron microscope its very high resolution?", ["A bright lamp", "The short wavelength of electrons", "Coloured filters", "A stronger eyepiece"]],
    ],
  },

  "dna-replication": {
    objectives: ["Explain the semi-conservative replication of DNA", "Describe the Meselson–Stahl experiment", "Name the enzymes of replication and what they do", "Explain leading and lagging strands, telomeres and DNA repair"],
    content: `## Why DNA must be copied

Every time a cell divides, each of the two daughter cells must get a **complete and exact** copy of the DNA. So before division, in the **S phase of interphase**, the cell copies all of its DNA. This is called **replication**. A human cell has to copy about 6 billion base pairs (about 3 billion from each parent).

In 1953, describing the structure of DNA, Watson and Crick wrote: "It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material." Since A always pairs with T and G with C, each strand is a template for a new one.

## Semi-conservative replication

There were three hypotheses:

| Hypothesis | What happens |
|---|---|
| **Conservative** | the old double helix stays whole and a completely new one is built beside it |
| **Semi-conservative** | the helix splits, and each new molecule has **one old and one new** strand |
| **Dispersive** | old and new pieces are mixed in both strands |

**The Meselson–Stahl experiment (1958).** Matthew Meselson and Franklin Stahl grew *E. coli* for a long time on heavy nitrogen (¹⁵N), so all its DNA became "heavy". Then they moved the bacteria to ordinary, light nitrogen (¹⁴N). In a centrifuge heavy DNA sinks lower and light DNA stays higher.

- **First generation:** all the DNA had **intermediate** density. This ruled out the conservative hypothesis, which would have given one heavy and one light band.
- **Second generation:** half the DNA was intermediate and half light. This ruled out the dispersive hypothesis and confirmed the **semi-conservative** one.

It is called "the most beautiful experiment in biology", because one simple result answered the question clearly.

## The enzymes of replication

| Enzyme | What it does |
|---|---|
| **Helicase** | "unzips" the double helix by breaking the hydrogen bonds between bases, forming a **replication fork** |
| **Primase** | builds a short RNA **primer** where the polymerase can start |
| **DNA polymerase** | adds new nucleotides by base pairing and checks its own work |
| **Ligase** | "stitches" separate pieces of DNA into one strand |

## Leading and lagging strands

The two strands of DNA are **antiparallel**: one runs 5′ → 3′, the other 3′ → 5′. DNA polymerase can extend a new strand **in one direction only**: 5′ → 3′.

- The **leading strand** is built **continuously**, following the opening fork.
- The **lagging strand** is built in **short pieces**, working away from the fork. These pieces are named after their discoverer: **Okazaki fragments** (about 1,000–2,000 nucleotides in bacteria, 100–200 in humans). Then the RNA primers are removed, the gaps are filled, and ligase joins the pieces.

**Speed.** In bacteria the polymerase adds about 1,000 nucleotides a second. In humans it is only about 50, but replication starts at **tens of thousands of points** at once, so the whole genome is copied in about 8 hours.

## Accuracy and repair

DNA polymerase sometimes makes a mistake (about once every 100,000 nucleotides), but it at once **checks and corrects** its errors. After further repair systems, about **one error per billion nucleotides** remains. These rare errors are one source of mutations.

DNA is also damaged from outside. **Ultraviolet light**, for example, "glues" neighbouring thymines together. Special enzymes cut out the damaged piece and build a new one. People in whom this system does not work (an inherited disease, *xeroderma pigmentosum*) cannot go out in the sun without protection.

## Telomeres

After the very last primer on the lagging strand is removed, the end of the chromosome cannot be fully copied. So with each division the chromosome gets a little **shorter**. The ends of chromosomes carry **telomeres**: thousands of repeats of a short sequence (TTAGGG in humans) that protect the genes, like the plastic tip on a shoelace.

When telomeres get too short, the cell stops dividing. This is one cause of ageing. Stem cells and sex cells use the enzyme **telomerase**, which lengthens telomeres again. Its discoverers, Elizabeth Blackburn, Carol Greider and Jack Szostak, won the Nobel Prize in 2009. Most cancer cells also have active telomerase, which is why they divide without end.

## Exercises

1. When does a cell copy its DNA?
2. What does "semi-conservative" replication mean?
3. What DNA would the first generation of the Meselson–Stahl experiment have shown if replication were conservative?
4. One strand of DNA reads A-T-G-C-C-A. Write the new strand built on it.
5. Why is the lagging strand built in pieces?
6. What are telomeres, and why do they get shorter?

## Answers

1. In the S phase of interphase, before division.
2. Each new molecule has one old (parent) strand and one new strand.
3. One heavy band (old DNA) and one light band (new DNA).
4. T-A-C-G-G-T.
5. The polymerase can build only in the 5′ → 3′ direction, and this strand is antiparallel and opens the opposite way.
6. Repeated sequences at the ends of chromosomes that protect the genes. At each division the very end cannot be fully copied.`,
    quiz: [
      ["Which enzyme unzips the DNA double helix?", ["Ligase", "Helicase", "Polymerase", "Amylase"]],
      ["What did the Meselson–Stahl experiment prove?", ["DNA has two strands", "Replication is semi-conservative", "DNA is a protein", "Genes are on chromosomes"]],
      ["What are the short pieces of the lagging strand called?", ["Telomeres", "Okazaki fragments", "Primers", "Codons"]],
      ["Which enzyme joins pieces of DNA into one strand?", ["Ligase", "Helicase", "Primase", "Telomerase"]],
      ["What happens to telomeres at each cell division if there is no telomerase?", ["They get longer", "They get shorter", "They do not change", "They vanish at once"]],
    ],
  },
};
