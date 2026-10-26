import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Levels of organisation, water and mineral salts, carbohydrates, lipids, proteins, nucleic acids and ATP.",
    "Cell theory, the membrane, organelles, prokaryotes and viruses.",
    "Energy metabolism, photosynthesis, protein synthesis, mitosis and the cell cycle.",
  ],
  lessons: {
    "levels-of-life": {
      objectives: ["List the properties of living systems", "Put the levels of organisation of life in order", "Name the methods of general biology", "Explain what an open system is"],
      content: `## Life as a system

A living organism is an **open system**: it constantly exchanges matter and energy with its environment. If the exchange stops, the organism dies.

Properties of living systems: a common chemical composition (C, H, O and N make up about 98%), metabolism, self-reproduction, heredity and variation, irritability, growth and development, self-regulation.

## Levels

| Level | What is studied | Science |
|---|---|---|
| molecular | proteins, DNA, enzymes | biochemistry, molecular biology |
| cellular | structure and life of the cell | cytology |
| organism | structure and activity of the organism | anatomy, physiology |
| population-species | groups of individuals of one species | evolutionary theory |
| ecosystem | interaction of living and non-living nature | ecology |
| biosphere | the whole living layer of the Earth | the study of the biosphere |

Each level has new properties that the level below does not have. For example, a population has a size and an age structure that a single individual does not have.

## Methods

- **observation** and **description**,
- **comparison**,
- **experiment** with a control group and a test group,
- **modelling**, for example a DNA model or a computer model,
- **microscopy** (light and electron microscopes).

## Exercises

1. Why is a living organism called an open system?
2. Put in order: ecosystem, cellular, molecular, organism.
3. Which science studies the cell?
4. Why does an experiment need a control group?
5. Name a property that a population has but a single individual does not.

## Answers

1. It constantly exchanges matter and energy with its environment.
2. Molecular, cellular, organism, ecosystem.
3. Cytology.
4. To compare and make sure the result is caused by the factor being studied.
5. For example, population size or age structure.`,
      quiz: [
        ["Which elements make up about 98% of living matter?", ["Fe, Cu, Zn, I", "C, H, O, N", "Na, K, Cl, Ca", "S, P, Mg, Si"]],
        ["Which level does cytology study?", ["Molecular", "Cellular", "Ecosystem", "Biosphere"]],
        ["Which level is the highest?", ["Population-species", "Ecosystem", "Biosphere", "Organism"]],
        ["A living organism is:", ["a closed system", "an open system", "an isolated system", "not a system"]],
        ["Which method includes a control group?", ["Description", "Experiment", "Observation", "Comparison"]],
      ],
    },
    "water-minerals": {
      objectives: ["Distinguish macroelements and microelements", "Explain the properties of water linked to the polarity of its molecule", "List the functions of water in the cell", "Name the role of important ions"],
      content: `## Elements

| Group | Content | Examples |
|---|---|---|
| **macroelements** | more than 0.01% | O, C, H, N, P, S, K, Ca, Mg, Na, Cl, Fe |
| **microelements** | less than 0.01% | I, Zn, Cu, Co, Mn, F, Se |

There is little of the microelements, but they are essential: **iodine** is part of the thyroid hormone, **zinc** and **copper** are part of many enzymes, **fluorine** is part of tooth enamel.

## Water

About 70–80% of a cell is water. The water molecule is **polar**: the oxygen side carries a partial negative charge and the hydrogen side a partial positive charge. The molecules are linked by **hydrogen bonds**. This gives water its properties:

| Property | Biological significance |
|---|---|
| good solvent for polar substances | reactions take place in solutions, substances are transported |
| high heat capacity | protects the cell from sudden temperature changes |
| high heat of evaporation | sweating and evaporation from leaves cool |
| almost incompressible | keeps the cell's shape (turgor) |
| ice is lighter than water | bodies of water do not freeze to the bottom |

Substances that dissolve well in water are **hydrophilic** (salts, sugars), and insoluble ones are **hydrophobic** (fats).

## Ions

- **K⁺** and **Na⁺**: generating the nerve impulse, membrane potential.
- **Ca²⁺**: bones, muscle contraction, blood clotting.
- **Mg²⁺**: part of chlorophyll.
- **Fe²⁺**: part of haemoglobin.
- **PO₄³⁻**: DNA, ATP, bones.
- **HCO₃⁻**: keeps blood pH at about 7.4.

## Exercises

1. Which element is a macroelement: iodine or calcium?
2. Why is the water molecule polar?
3. Why is the high heat capacity of water important for the body?
4. Which ion is part of chlorophyll?
5. What are hydrophobic substances? Give an example.

## Answers

1. Calcium.
2. Oxygen attracts electrons more strongly, so the charges are distributed unevenly.
3. It protects against sudden temperature changes.
4. Mg²⁺.
5. Substances that do not dissolve in water, for example fats.`,
      quiz: [
        ["Which of these elements is a microelement?", ["Carbon", "Iodine", "Oxygen", "Potassium"]],
        ["Roughly what percentage of a cell is water?", ["10–20%", "30–40%", "70–80%", "99%"]],
        ["What bonds form between water molecules?", ["Ionic", "Hydrogen", "Metallic", "Peptide"]],
        ["Which ion is needed for blood clotting?", ["Na⁺", "Ca²⁺", "Mg²⁺", "Cl⁻"]],
        ["Which substance is hydrophobic?", ["Table salt", "Glucose", "Fat", "Sugar"]],
      ],
    },
    "carbohydrates-lipids": {
      objectives: ["Classify carbohydrates", "Name the functions of carbohydrates", "Describe the structure and kinds of lipids", "Compare the energy value of carbohydrates and fats"],
      content: `## Carbohydrates

**Carbohydrates** consist of C, H and O atoms.

| Group | Examples | Where |
|---|---|---|
| **monosaccharides** | glucose, fructose, ribose, deoxyribose | fruit, honey, RNA, DNA |
| **disaccharides** | sucrose, lactose, maltose | sugar beet, milk |
| **polysaccharides** | starch, glycogen, cellulose, chitin | potatoes, liver, plant cell walls, insect skeletons |

Functions:

- **energy**: breaking down 1 g of carbohydrate releases about **17.6 kJ**,
- **storage**: **starch** in plants, **glycogen** in animals and fungi,
- **structural**: **cellulose** and **chitin**,
- part of nucleic acids (ribose, deoxyribose).

## Lipids

**Lipids** are substances that do not dissolve in water. **Fats** are compounds of glycerol and three fatty acids. Animal fats are usually solid (saturated acids), plant oils are liquid (unsaturated acids).

**Phospholipids** have a hydrophilic "head" and two hydrophobic "tails". In water they line up in a **bilayer**, which is the basis of all cell membranes. Lipids also include **cholesterol** and the sex hormones.

| Function | Example |
|---|---|
| energy | 1 g of fat gives about **38.9 kJ** |
| storage | fatty tissue, a camel's hump |
| heat insulation | fat under the skin (seals, penguins) |
| source of water | oxidising 1 g of fat produces about 1.1 g of water |
| structural | phospholipids in the membrane |

## Exercises

1. Which carbohydrate is the storage substance in animals?
2. What is the plant cell wall made of?
3. Roughly how many times more energy does fat give than carbohydrate?
4. Why do phospholipids form a bilayer in water?
5. How does a camel get water from fat?

## Answers

1. Glycogen.
2. Cellulose.
3. About 2 times (38.9 / 17.6 ≈ 2.2).
4. The hydrophilic heads face the water and the hydrophobic tails are hidden inside.
5. Water forms when the fat in the hump is oxidised.`,
      quiz: [
        ["Which is a monosaccharide?", ["Starch", "Sucrose", "Glucose", "Cellulose"]],
        ["Which polysaccharide forms the skeleton of insects?", ["Glycogen", "Chitin", "Starch", "Cellulose"]],
        ["How much energy is released when 1 g of fat is broken down?", ["4 kJ", "17.6 kJ", "38.9 kJ", "100 kJ"]],
        ["What is the basis of the cell membrane?", ["Starch", "A phospholipid bilayer", "Cellulose", "DNA"]],
        ["Which carbohydrate is part of DNA?", ["Ribose", "Deoxyribose", "Glucose", "Fructose"]],
      ],
    },
    "proteins-enzymes": {
      objectives: ["Describe the structure of an amino acid and the peptide bond", "Distinguish the four levels of protein structure", "List the functions of proteins", "Explain how enzymes work and what denaturation is"],
      content: `## Amino acids

Proteins are **polymers** whose **monomers** are amino acids. There are **20** amino acids found in proteins. Each has an amino group (−NH₂), a carboxyl group (−COOH) and a side group (R). Two amino acids join by a **peptide bond** (−CO−NH−), and a molecule of water is released.

Amino acids that the human body cannot make are called **essential**, and they must come from food.

## Four levels

| Level | What it is | What holds it |
|---|---|---|
| primary | the sequence of amino acids in the chain | peptide bonds |
| secondary | a helix (α-helix) or a pleated sheet | hydrogen bonds |
| tertiary | the 3D "ball" of the chain (globule) | disulfide, ionic, hydrophobic bonds |
| quaternary | several chains together | the same weak bonds |

For example, haemoglobin consists of four chains.

**Denaturation** is the destruction of a protein's natural structure by high temperature, acids or salts of heavy metals. When an egg is boiled, the protein denatures. If the primary structure is kept, **renaturation** is sometimes possible.

## Functions

| Function | Example |
|---|---|
| structural | collagen, keratin |
| catalytic | enzymes (pepsin, amylase) |
| transport | haemoglobin |
| protective | antibodies, fibrinogen |
| regulatory | insulin |
| movement | actin and myosin in muscles |
| energy | 1 g gives about 17.6 kJ (used last) |

## Enzymes

**Enzymes** are biological catalysts. They have an **active site** that fits the **substrate** like a key fits a lock. That is why each enzyme is **specific**. Enzymes work best at a certain temperature and pH: in humans at about 37 °C, pepsin in an acidic environment (pH ≈ 2).

## Exercises

1. What joins amino acids together?
2. What holds the secondary structure?
3. What is denaturation? Give an everyday example.
4. Why does amylase not break down proteins?
5. Why is high temperature dangerous for enzymes?

## Answers

1. A peptide bond.
2. Hydrogen bonds.
3. The destruction of a protein's natural structure, for example when an egg is boiled.
4. An enzyme is specific; its active site fits only its own substrate (starch).
5. High temperature denatures the enzyme and destroys its active site.`,
      quiz: [
        ["How many amino acids are used to build proteins?", ["4", "20", "64", "100"]],
        ["Which structure is the sequence of amino acids?", ["Primary", "Secondary", "Tertiary", "Quaternary"]],
        ["Which protein has a transport function?", ["Keratin", "Haemoglobin", "Myosin", "Collagen"]],
        ["What is the part of an enzyme that binds the substrate called?", ["The active site", "A peptide", "A side group", "A coenzyme"]],
        ["In what environment does pepsin work?", ["Acidic", "Alkaline", "Neutral", "Any"]],
      ],
    },
    "nucleic-acids-atp": {
      objectives: ["Describe the structure of a nucleotide", "Apply the principle of complementarity", "Compare DNA and RNA", "Explain the role of ATP"],
      content: `## The nucleotide

Nucleic acids are polymers whose monomer is the **nucleotide**. A nucleotide has three parts: a **nitrogenous base**, a **sugar** (ribose or deoxyribose) and a **phosphate group**.

## DNA

The structure of DNA was worked out in 1953 by J. Watson and F. Crick (based on X-ray images by R. Franklin). DNA is a **double helix**: two strands whose bases are joined by hydrogen bonds according to the principle of **complementarity**:

- **A — T** (adenine — thymine, 2 hydrogen bonds),
- **G — C** (guanine — cytosine, 3 hydrogen bonds).

This gives **Chargaff's rule**: A = T and G = C.

**Example.** A section of one strand: A-T-G-C-C-A. The complementary strand: T-A-C-G-G-T.

**Example.** Adenine makes up 20% of a DNA molecule. So T = 20% and G + C = 60%, that is G = C = 30%.

## DNA and RNA

| Feature | DNA | RNA |
|---|---|---|
| strands | 2 | 1 |
| sugar | deoxyribose | ribose |
| bases | A, T, G, C | A, **U** (uracil), G, C |
| where | nucleus, mitochondria, chloroplasts | nucleus, cytoplasm, ribosomes |
| function | stores hereditary information | takes part in protein synthesis (mRNA, tRNA, rRNA) |

## ATP

**ATP** (adenosine triphosphate) is the cell's universal source of energy. It contains adenine, ribose and three phosphates. The bonds between the phosphates are **high-energy** bonds. When ATP turns into **ADP** (one phosphate fewer), about 40 kJ/mol of energy is released, which is used for muscle contraction, synthesis and transport of substances.

## Exercises

1. What parts does a nucleotide consist of?
2. Write the complementary strand for the section G-G-A-T-C-A.
3. Cytosine makes up 15% of a DNA molecule. How much adenine is there?
4. Which nitrogenous base is found in RNA but not in DNA?
5. Why is ATP called the cell's "energy currency"?

## Answers

1. A nitrogenous base, a sugar and a phosphate group.
2. C-C-T-A-G-T.
3. G = C = 15%, A + T = 70%, A = 35%.
4. Uracil (U).
5. It stores energy and hands it to all the cell's processes.`,
      quiz: [
        ["Which base is complementary to adenine in DNA?", ["Guanine", "Cytosine", "Thymine", "Uracil"]],
        ["In DNA G = 25%. How much A is there?", ["25%", "50%", "75%", "12.5%"]],
        ["Which sugar is part of RNA?", ["Deoxyribose", "Ribose", "Glucose", "Sucrose"]],
        ["How many hydrogen bonds are there between G and C?", ["1", "2", "3", "4"]],
        ["Who proposed the double-helix model of DNA?", ["Mendel", "Watson and Crick", "Pavlov", "Darwin"]],
      ],
    },
    "cell-membrane": {
      objectives: ["State the principles of cell theory", "Describe the fluid mosaic structure of the membrane", "Distinguish passive and active transport", "Explain phagocytosis and pinocytosis"],
      content: `## Cell theory

In 1665 R. Hooke saw "cells" of cork under a microscope. In 1838–1839 M. Schleiden and T. Schwann formulated **cell theory**, and R. Virchow added that "every cell comes from a cell".

Modern principles:

1. The cell is the unit of structure, life activity and development of living organisms.
2. The cells of all organisms are similar in structure and chemical composition.
3. New cells arise by division of a parent cell.
4. The cells of a multicellular organism are specialised and form tissues.

## The membrane

The cell membrane is a **phospholipid bilayer** in which **proteins** "float". This model is called the **fluid mosaic** model. The membrane is **selectively permeable**: it lets some substances through and not others. On the outer side of an animal cell's membrane there is a **glycocalyx**, which lets cells "recognise" each other.

## Transport

| Method | Energy | Example |
|---|---|---|
| **diffusion** | none used | O₂, CO₂ |
| **osmosis** (diffusion of water) | none used | water enters a root cell |
| **facilitated diffusion** | none used, with carrier proteins | glucose |
| **active transport** | ATP is used | the sodium-potassium pump |
| **phagocytosis** | ATP is used | a white blood cell engulfs a bacterium |
| **pinocytosis** | ATP is used | taking in a droplet of liquid |

Passive transport goes **down the concentration gradient**, from higher to lower, and active transport goes against it.

**Example.** A red blood cell in distilled water swells and bursts because water enters it by osmosis. In a strong salt solution it shrivels because water leaves. Physiological saline (0.9% NaCl) does not change the cell's shape.

## Exercises

1. Who formulated cell theory?
2. Why is the membrane model called fluid mosaic?
3. How does active transport differ from diffusion?
4. What will happen to a red blood cell in distilled water? Why?
5. Why do pickled cucumbers shrivel?

## Answers

1. M. Schleiden and T. Schwann.
2. Proteins "float" in the liquid phospholipid layer like pieces of a mosaic.
3. Active transport uses ATP and goes against the concentration gradient.
4. It will swell and burst because water enters the cell by osmosis.
5. In the brine, water leaves the cells by osmosis.`,
      quiz: [
        ["Who said that \"every cell comes from a cell\"?", ["R. Hooke", "R. Virchow", "T. Schwann", "G. Mendel"]],
        ["Which method of transport needs ATP?", ["Diffusion", "Osmosis", "The sodium-potassium pump", "Facilitated diffusion"]],
        ["What is phagocytosis?", ["Taking in solid particles", "Diffusion of water", "Diffusion of gases", "Cell division"]],
        ["How does a red blood cell change in a strong salt solution?", ["It swells", "It shrivels", "It does not change", "It divides"]],
        ["What is the basis of the membrane made of?", ["Cellulose", "Phospholipids", "Starch", "DNA"]],
      ],
    },
    organelles: {
      objectives: ["Describe the structure of the nucleus", "Distinguish single-membrane, double-membrane and non-membrane organelles", "Link each organelle to its function", "Compare plant, animal and fungal cells"],
      content: `## The nucleus

The **nucleus** is covered by a double-membrane **nuclear envelope** with pores. Inside is **chromatin** (DNA and proteins), which coils into **chromosomes** during division, and the **nucleolus**, where ribosomes are assembled. The nucleus stores hereditary information and controls the life of the cell.

## Organelles

| Group | Organelle | Function |
|---|---|---|
| double-membrane | **mitochondrion** | ATP synthesis, the "power station", has its own DNA |
| double-membrane | **chloroplast** | photosynthesis, has chlorophyll and its own DNA |
| single-membrane | **endoplasmic reticulum** | rough: protein synthesis; smooth: synthesis of lipids and carbohydrates |
| single-membrane | **Golgi apparatus** | "packaging" and export of substances, forming lysosomes |
| single-membrane | **lysosome** | breaks down substances and old organelles with enzymes |
| single-membrane | **vacuole** | in plants, cell sap and turgor |
| non-membrane | **ribosome** | protein synthesis |
| non-membrane | **centrosome** | helps form the spindle |

Mitochondria and chloroplasts have their own DNA and ribosomes. This supports the **endosymbiosis** hypothesis: they were free-living bacteria that entered a larger cell.

## Comparison

| Feature | Plant | Animal | Fungal |
|---|---|---|---|
| cell wall | cellulose | none | chitin |
| plastids | present | absent | absent |
| large vacuole | present | absent | present |
| storage carbohydrate | starch | glycogen | glycogen |
| centrosome | absent in higher plants | present | present |

## Exercises

1. Which organelles have their own DNA?
2. Why does a muscle cell have many mitochondria?
3. Where are proteins made?
4. Why are lysosomes called the cell's "digestive system"?
5. Name two features that distinguish a plant cell from an animal cell.

## Answers

1. Mitochondria and chloroplasts (and the nucleus).
2. Muscle uses a lot of energy, and mitochondria produce ATP.
3. In the ribosomes.
4. Their enzymes break down nutrients and old structures.
5. For example, a cell wall made of cellulose and plastids.`,
      quiz: [
        ["Which organelle is called the \"power station\"?", ["The ribosome", "The mitochondrion", "The lysosome", "The Golgi apparatus"]],
        ["Which organelle has no membrane?", ["The lysosome", "The ribosome", "The mitochondrion", "The vacuole"]],
        ["What is the fungal cell wall made of?", ["Cellulose", "Chitin", "Starch", "They have no cell wall"]],
        ["Which organelle \"packages\" and exports substances?", ["The Golgi apparatus", "The nucleolus", "The chloroplast", "The centrosome"]],
        ["Where are ribosomes assembled?", ["In the nucleolus", "In the vacuole", "In the lysosome", "In the cell wall"]],
      ],
    },
    "prokaryotes-viruses": {
      objectives: ["Compare prokaryotic and eukaryotic cells", "Describe the reproduction of bacteria and spore formation", "Explain the structure and reproduction of a virus", "Distinguish the role of antibiotics and vaccines"],
      content: `## Prokaryotes

**Prokaryotes** (bacteria, cyanobacteria) have no true nucleus. Their DNA is circular and lies in the cytoplasm (the **nucleoid**). They have no mitochondria, chloroplasts, ER or Golgi apparatus. Their ribosomes are smaller. Many have **plasmids**, small rings of DNA.

| Feature | Prokaryotes | Eukaryotes |
|---|---|---|
| nucleus | absent | present |
| DNA | circular, in the cytoplasm | linear chromosomes in the nucleus |
| membrane organelles | absent | present |
| size | 1–10 µm | 10–100 µm |

Bacteria reproduce by **binary fission**, in good conditions every 20 minutes. In unfavourable conditions they form **spores**, which survive boiling and drought.

**Example.** If a bacterium divides every 20 minutes, in 2 hours (6 divisions) one bacterium will give 2⁶ = 64 bacteria.

## Viruses

**Viruses** have no cellular structure. A virus consists of a **nucleic acid** (DNA or RNA) and a protein coat, the **capsid**. Some also have an outer lipid envelope. Viruses were discovered by D. Ivanovsky in 1892 while studying tobacco mosaic disease.

A virus reproduces only inside a host cell:

1. it attaches to the cell,
2. its nucleic acid enters the cell,
3. the cell starts producing the virus's nucleic acids and proteins,
4. new viruses are assembled,
5. the viruses leave, and the cell often dies.

Viruses that infect bacteria are called **bacteriophages**.

## Treatment and prevention

**Antibiotics** (the first was penicillin, A. Fleming, 1928) destroy bacteria but **do not work on viruses**. So antibiotics are useless for flu or a cold, and using them without need breeds resistant bacteria. The best protection against viruses is **vaccination**.

## Exercises

1. Why are bacteria called prokaryotes?
2. How many bacteria will one give in 1 hour if it divides every 20 minutes?
3. What does a virus consist of?
4. Why can't a virus reproduce in water or air?
5. Why is it pointless to treat flu with an antibiotic?

## Answers

1. They have no true nucleus.
2. 3 divisions: 2³ = 8.
3. A nucleic acid and a protein capsid.
4. A virus has no metabolism of its own; it uses the host cell's systems.
5. Flu is a viral disease, and antibiotics do not work on viruses.`,
      quiz: [
        ["Which of these is a prokaryote?", ["Yeast", "Amoeba", "E. coli", "An alga"]],
        ["Where is a bacterium's DNA?", ["In the nucleus", "In the cytoplasm (nucleoid)", "In a mitochondrion", "It has no DNA"]],
        ["Who discovered viruses?", ["A. Fleming", "D. Ivanovsky", "L. Pasteur", "R. Hooke"]],
        ["What are viruses that infect bacteria called?", ["Bacteriophages", "Plasmids", "Spores", "Capsids"]],
        ["What do antibiotics act on?", ["Viruses", "Bacteria", "All germs equally", "Nothing"]],
      ],
    },
    "cellular-respiration": {
      objectives: ["Name the three stages of energy metabolism", "Explain glycolysis and fermentation", "Describe the oxygen stage in the mitochondrion", "Calculate the ATP yield from breaking down glucose"],
      content: `## Three stages

| Stage | Where | What happens | ATP |
|---|---|---|---|
| **preparatory** | digestive tract, lysosomes | polymers are broken down into monomers, energy is lost as heat | 0 |
| **oxygen-free** (glycolysis) | cytoplasm | 1 glucose → 2 pyruvic acid (pyruvate) | 2 |
| **oxygen** stage | mitochondria | pyruvate → CO₂ + H₂O | 36 |

Overall equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP.

## Fermentation

If there is no oxygen, pyruvate is turned into other substances:

- **lactic acid fermentation**: pyruvate → lactic acid (lactic acid bacteria, muscles during hard work),
- **alcoholic fermentation**: pyruvate → ethanol + CO₂ (yeast).

Fermentation gives only 2 ATP per glucose. So aerobic respiration is 19 times more efficient.

Matsun, cheese and sauerkraut are made by lactic acid fermentation, and bread dough rises from the CO₂ of alcoholic fermentation.

## The oxygen stage

The inner membrane of the mitochondrion forms folds, the **cristae**, which increase its surface. In the inner space (the **matrix**) pyruvate is oxidised to CO₂, while hydrogen atoms go to the cristae, where they combine with oxygen to form water and most of the ATP is made.

## Problem

**Example.** In a muscle 5 mol of glucose were broken down: 2 mol completely and 3 mol only by glycolysis. How many moles of ATP were formed?

Solution: 2 · 38 + 3 · 2 = 76 + 6 = **82 mol ATP**.

## Exercises

1. Where does glycolysis take place?
2. How much ATP forms when 1 glucose is broken down completely?
3. Why do muscles ache after hard training?
4. Which gas makes bread dough rise?
5. 4 mol of glucose were broken down completely. How many moles of CO₂ formed?

## Answers

1. In the cytoplasm.
2. 38 ATP.
3. Because of a lack of oxygen, lactic acid builds up in the muscles.
4. Carbon dioxide (CO₂).
5. 4 · 6 = 24 mol CO₂.`,
      quiz: [
        ["How much ATP does glycolysis make from one glucose?", ["0", "2", "36", "38"]],
        ["Where does the oxygen stage take place?", ["In the cytoplasm", "In the mitochondria", "In the ribosomes", "In the nucleus"]],
        ["What forms in alcoholic fermentation?", ["Lactic acid", "Ethanol and CO₂", "Glucose", "Oxygen"]],
        ["What are the folds of the inner mitochondrial membrane called?", ["Thylakoids", "Cristae", "Nucleoli", "Vacuoles"]],
        ["How many moles of ATP form when 3 mol of glucose are broken down completely?", ["6", "38", "76", "114"]],
      ],
    },
    photosynthesis: {
      objectives: ["Write the overall equation of photosynthesis", "Describe the structure of the chloroplast", "Distinguish the light and dark stages", "Explain the importance of photosynthesis for the planet"],
      content: `## What photosynthesis is

**Photosynthesis** is the synthesis of organic substances from inorganic ones using the energy of light.

6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light, chlorophyll)

Organisms that photosynthesise are **autotrophs** (plants, algae, cyanobacteria). Those that feed on ready-made organic substances are **heterotrophs** (animals, fungi, most bacteria).

## The chloroplast

The chloroplast is a double-membrane organelle. Inside are **thylakoids**, flat sacs piled in stacks called **grana**. **Chlorophyll** is in the thylakoid membrane. The fluid between the grana is the **stroma**.

## Two stages

| Stage | Where | What happens |
|---|---|---|
| **light** stage | thylakoid membrane | chlorophyll absorbs light, water is split (**photolysis**), O₂ is released, ATP and NADPH are made |
| **dark** stage (Calvin cycle) | stroma | using the energy of ATP and NADPH, glucose is made from CO₂ |

The dark stage does not need light, but it depends on the products of the light stage. Important: **the oxygen of photosynthesis comes from water**, not from CO₂.

## What it depends on

The rate of photosynthesis depends on **light intensity**, **CO₂ concentration** and **temperature**. In greenhouses yields are raised with extra lighting and a higher CO₂ concentration.

## Importance

- It creates almost all the organic matter on Earth.
- It enriches the atmosphere with **oxygen**, from which the **ozone layer** forms.
- It absorbs CO₂, which strengthens the greenhouse effect.
- Coal, oil and gas are products of ancient photosynthesis.

The Russian scientist K. Timiryazev proved that red and blue rays are the most effective for photosynthesis.

## Exercises

1. Write the equation of photosynthesis.
2. Where does the light stage take place?
3. Which substance does the oxygen of photosynthesis come from?
4. Why does adding CO₂ in greenhouses raise yields?
5. Why are green plants green?

## Answers

1. 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.
2. In the thylakoid membrane.
3. From water (photolysis).
4. CO₂ is the raw material of photosynthesis; more of it speeds up photosynthesis.
5. Chlorophyll absorbs red and blue light and reflects green.`,
      quiz: [
        ["Which organisms are autotrophs?", ["Fungi", "Green plants", "Animals", "Viruses"]],
        ["Which substance does the oxygen of photosynthesis come from?", ["From CO₂", "From water", "From glucose", "From chlorophyll"]],
        ["Where does the Calvin cycle take place?", ["In the thylakoids", "In the stroma", "In the mitochondrion", "In the nucleus"]],
        ["What is photolysis?", ["Breaking down glucose", "Splitting water by light", "Absorbing CO₂", "Breaking down ATP"]],
        ["Which rays are the most effective for photosynthesis?", ["Green", "Red and blue", "Ultraviolet", "Infrared"]],
      ],
    },
    "protein-synthesis": {
      objectives: ["Explain the properties of the genetic code", "Describe transcription", "Describe translation on the ribosome", "Solve DNA → mRNA → protein problems"],
      content: `## The gene and the code

A **gene** is a section of DNA that carries information about one protein. An amino acid is coded by three nucleotides, a **triplet** (codon).

Properties of the genetic code:

- **triplet**: 1 amino acid = 3 nucleotides,
- **degenerate**: 64 triplets and 20 amino acids, so many amino acids have several codons,
- **unambiguous**: one triplet codes for only one amino acid,
- **universal**: the same in all organisms,
- there are **stop codons** (UAA, UAG, UGA) that end synthesis. The start is AUG.

## Transcription

In the nucleus, **mRNA** (messenger RNA) is made on one of the DNA strands according to the principle of complementarity. A in DNA corresponds to U, T to A, G to C, C to G.

**Example.** DNA: T-A-C-G-G-A → mRNA: A-U-G-C-C-U.

## Translation

1. The mRNA leaves for the cytoplasm and attaches to a **ribosome**.
2. **tRNA** (transfer RNA) molecules bring amino acids. Each tRNA has an **anticodon** complementary to an mRNA codon.
3. The ribosome moves along the mRNA triplet by triplet and joins the amino acids with peptide bonds.
4. When it reaches a stop codon, the protein is released.

## Problems

**Example 1.** A protein consists of 150 amino acids. How many nucleotides are in the coding section of the mRNA, and how many nucleotides are in the DNA gene (in both strands)?

Solution: mRNA: 150 · 3 = **450** nucleotides, DNA: 450 · 2 = **900** nucleotides.

**Example 2.** An mRNA codon is GCA. Find the DNA triplet and the tRNA anticodon.

Solution: DNA: **CGT**, anticodon: **CGU**.

## Exercises

1. How many nucleotides code one amino acid?
2. What does "the code is degenerate" mean?
3. DNA: A-T-G-C-T-A. Write the mRNA.
4. Where does translation take place?
5. A gene (in one strand) contains 600 nucleotides. How many amino acids will the protein have?

## Answers

1. Three.
2. One amino acid can have several codons.
3. U-A-C-G-A-U.
4. In the cytoplasm, on the ribosomes.
5. 600 / 3 = 200 amino acids.`,
      quiz: [
        ["Which codon is the start codon?", ["UAA", "AUG", "UGA", "GGG"]],
        ["Where does transcription take place in eukaryotes?", ["On the ribosome", "In the nucleus", "In the lysosome", "In the vacuole"]],
        ["A DNA triplet is AGC. What is the mRNA codon?", ["TCG", "UCG", "AGC", "UGC"]],
        ["What brings amino acids to the ribosome?", ["mRNA", "tRNA", "DNA", "ATP"]],
        ["A protein has 100 amino acids. How many nucleotides are in the coding section of the mRNA?", ["100", "200", "300", "600"]],
      ],
    },
    "mitosis-cell-cycle": {
      objectives: ["Describe the cell cycle and interphase", "List the phases of mitosis and their events", "Explain the biological importance of mitosis", "Calculate the number of chromosomes and amount of DNA at different stages of the cycle"],
      content: `## The cell cycle

The **cell cycle** is the life of a cell from one division to the next. It consists of **interphase** and **division**.

During interphase the cell grows, makes proteins and **doubles its DNA**. Each chromosome becomes two **chromatids** joined at the **centromere**.

Let n be the set of chromosomes and c the amount of DNA. A human body cell is **diploid**: 2n = 46.

| Stage | Chromosomes | DNA |
|---|---|---|
| interphase, before doubling | 2n | 2c |
| interphase, after doubling | 2n | 4c |

## Phases of mitosis

| Phase | What happens |
|---|---|
| **prophase** | chromosomes coil and become visible, the nuclear envelope breaks down, the spindle forms |
| **metaphase** | chromosomes line up on the cell's equator and are clearly visible (they are counted in this phase) |
| **anaphase** | chromatids move apart to the poles |
| **telophase** | two nuclei form, the cytoplasm divides |

As a result, one cell gives **two genetically identical** cells, 2n2c.

In anaphase the cell temporarily has 4n4c, because each chromatid becomes a separate chromosome.

## Importance

- **Growth**: a multicellular organism grows by multiplying its cells.
- **Repair**: healing of wounds, renewal of skin and blood cells.
- **Asexual reproduction**: vegetative reproduction, budding.
- Genetic stability: daughter cells have the same set of chromosomes.

If the control of division breaks down, cells start dividing uncontrollably and a **tumour** may form.

## Exercises

1. Why is interphase important for division?
2. In which phase do chromosomes line up on the equator?
3. How many chromosomes will a daughter cell have after mitosis of a human skin cell?
4. Write the formula for chromosomes and DNA in anaphase.
5. How does mitosis help wounds heal?

## Answers

1. During it the DNA doubles and the cell prepares for division.
2. In metaphase.
3. 46.
4. 4n4c.
5. In the damaged area cells divide by mitosis and replace the lost ones.`,
      quiz: [
        ["At which stage does DNA double?", ["In prophase", "In interphase", "In anaphase", "In telophase"]],
        ["In which phase do chromatids move apart to the poles?", ["Prophase", "Metaphase", "Anaphase", "Telophase"]],
        ["How many cells result from one mitosis?", ["1", "2", "4", "8"]],
        ["How many chromosomes are in a human body cell?", ["23", "46", "48", "92"]],
        ["Which is not a purpose of mitosis?", ["Growth", "Healing of wounds", "Forming sex cells", "Vegetative reproduction"]],
      ],
    },
  },
};
