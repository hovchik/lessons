import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Signs of living things, kingdoms, cell structure, the microscope, plant tissues.",
    "Root, shoot and stem, leaf and photosynthesis, flower and pollination, fruit and seed.",
    "Bacteria and viruses, fungi and lichens, algae, mosses, ferns, seed plants and the flora of Armenia.",
  ],
  lessons: {
    "living-things-kingdoms": {
      objectives: ["List the signs of living things", "Tell living from non-living", "Name the kingdoms of living nature", "Explain what biology studies"],
      content: `## What is biology

**Biology** (from Greek bios, life, and logos, study) is the science of living organisms, their structure, life processes and links with their surroundings. Its branches include **botany**, **zoology**, **microbiology**, **human anatomy**, **genetics** and **ecology**.

## Signs of living things

1. **Made of cells**: all organisms consist of cells.
2. **Nutrition**: they take in substances and energy.
3. **Respiration**: they break down food to release energy.
4. **Excretion**: they get rid of waste.
5. **Growth and development**.
6. **Reproduction**: they produce offspring.
7. **Sensitivity**: they respond to changes around them (a sunflower turns towards the Sun).
8. **Heredity and variation**.

Non-living things can show some of these signs (a crystal "grows"), but only living organisms have them all.

## Kingdoms

| Kingdom | Features | Examples |
|---|---|---|
| bacteria | cell with no nucleus | E. coli, lactic acid bacteria |
| fungi | no chlorophyll, feed on ready-made substances | cep, yeast, mould |
| plants | photosynthesis, cell wall of cellulose | mosses, ferns, flowering plants |
| animals | feed on ready-made substances, move about | insects, fish, birds, mammals |

Viruses are not made of cells and reproduce only inside other cells.

## Exercises

1. List 5 signs of living things.
2. Which sign is shown when a plant leans towards a window?
3. Which kingdom do yeasts belong to?
4. Why are fungi not plants?
5. What does botany study?

## Answers

1. For example: made of cells, nutrition, respiration, growth, reproduction.
2. Sensitivity.
3. Fungi.
4. They have no chlorophyll and do not photosynthesise.
5. Plants.`,
      quiz: [
        ["Which is not a sign of living things?", ["Growth", "Reproduction", "Hardness", "Respiration"]],
        ["The cells of which kingdom have no nucleus?", ["Plants", "Animals", "Bacteria", "Fungi"]],
        ["What does zoology study?", ["Plants", "Animals", "Fungi", "Rocks"]],
        ["Which organisms photosynthesise?", ["Fungi", "Plants", "Animals", "Viruses"]],
        ["Viruses:", ["are made of cells", "reproduce only inside other cells", "are plants", "are fungi"]],
      ],
    },
    "plant-cell": {
      objectives: ["Describe the parts of a light microscope", "Prepare a slide of onion skin", "Name the parts of a plant cell and their functions", "Compare plant and animal cells"],
      content: `## The microscope

Cells are so small that we see them through a **microscope**. In 1665 **R. Hooke** saw little "rooms" in a slice of cork and called them cells.

**Parts of a light microscope**: eyepiece, tube, objective lenses, stage, mirror or lamp, focusing knobs. **Magnification** = eyepiece magnification × objective magnification (10 × 40 = 400 times).

## Making a slide

1. Put a drop of water on a glass slide.
2. Peel a thin, see-through skin from an onion scale with tweezers.
3. Lay it in the drop of water and cover it with a cover slip.
4. You can stain it with weak iodine solution so the nucleus shows up well.

## Parts of a plant cell

| Part | Function |
|---|---|
| **cell wall** (of cellulose) | strength, shape |
| **cell membrane** | lets substances in and out |
| **cytoplasm** | the inside of the cell, always moving |
| **nucleus** | stores hereditary information, controls the cell |
| **vacuole** with cell sap | storage, pressure |
| **plastids** | chloroplasts (green, photosynthesis), chromoplasts (red, yellow), leucoplasts (colourless, starch) |

## Plant and animal cells

An animal cell has **no** cellulose cell wall, no chloroplasts and no large vacuole.

## Exercises

1. The eyepiece is 10× and the objective 20×. What is the magnification?
2. Why is a slide stained with iodine?
3. Which plastids make a tomato red?
4. Which parts does a plant cell have that an animal cell lacks?
5. Who first used the word "cell"?

## Answers

1. 200 times.
2. So that the nucleus and other parts of the cell can be seen clearly.
3. Chromoplasts.
4. The cell wall, chloroplasts, a large vacuole.
5. Robert Hooke.`,
      quiz: [
        ["In which organelle does photosynthesis take place?", ["Nucleus", "Vacuole", "Chloroplast", "Leucoplast"]],
        ["Eyepiece 10× and objective 40×. The magnification is:", ["50", "400", "4000", "14"]],
        ["What stores hereditary information?", ["Cytoplasm", "Nucleus", "Vacuole", "Cell wall"]],
        ["What does an animal cell lack?", ["A nucleus", "Cytoplasm", "A chloroplast", "A cell membrane"]],
        ["Who first described cells?", ["Darwin", "Hooke", "Mendel", "Pasteur"]],
      ],
    },
    "plant-tissues": {
      objectives: ["Define a tissue", "List the types of plant tissue", "Link the structure of a tissue to its function", "Find tissues in the organs of a plant"],
      content: `## What is a tissue

A **tissue** is a group of cells that are similar in structure and do the same job.

## Types of tissue

| Tissue | Structure | Function | Where |
|---|---|---|---|
| **meristem** (growing tissue) | small, tightly packed, constantly dividing cells | growth | at the tips of root and stem, cambium |
| **dermal** (covering) | tightly joined cells, epidermis, cork | protection | on the surface of leaves and stems |
| **ground** (parenchyma) | thin-walled cells | photosynthesis, storage | leaf flesh, tubers |
| **vascular** (transport) | vessels, sieve tubes | carrying substances | veins, wood, phloem |
| **mechanical** | thick-walled cells | strength | stem, fruit stone |

Water and mineral salts rise from the root to the leaves in **vessels**, while organic substances move from the leaves to other organs in **sieve tubes**.

**Stomata**: the leaf epidermis has slits, each surrounded by a pair of guard cells; gas exchange and water evaporation happen through them.

## Organs

Different tissues together form an **organ**: root, stem, leaf, flower. The root, stem and leaf are **vegetative** organs; the flower, fruit and seed are **reproductive** organs.

## Exercises

1. Which tissue makes a root grow longer?
2. Why are the cells of dermal tissue tightly joined?
3. What do water and mineral salts travel through?
4. What happens through stomata?
5. List the vegetative organs of a plant.

## Answers

1. Meristem.
2. To protect the inner tissues from drying out and damage.
3. Vessels.
4. Gas exchange and water evaporation.
5. Root, stem, leaf.`,
      quiz: [
        ["Which tissue provides growth?", ["Dermal", "Meristem", "Mechanical", "Vascular"]],
        ["Water rises from the root to the leaf through:", ["sieve tubes", "vessels", "stomata", "hairs"]],
        ["Which organ is reproductive?", ["Root", "Leaf", "Flower", "Stem"]],
        ["Stomata are:", ["slits in the leaf epidermis for gas exchange", "root hairs", "rings in the stem", "parts of a flower"]],
        ["What is a tissue?", ["A single cell", "A group of similar cells with a common function", "A whole organism", "A group of organs"]],
      ],
    },
    root: {
      objectives: ["Distinguish tap root and fibrous root systems", "Describe the zones of a root", "Explain what roots do", "Give examples of modified roots"],
      content: `## What roots do

- anchor the plant in the soil,
- take in water and mineral salts,
- store food,
- vegetative reproduction (blackberry, raspberry).

## Root systems

- **Tap root**: a well-developed main root (bean, sunflower, apple tree, carrot). Typical of **dicots**.
- **Fibrous root**: no main root stands out, there are many adventitious roots (wheat, maize, onion). Typical of **monocots**.

## Zones of a root

1. **Root cap**: protects the root tip.
2. **Zone of division**: growing tissue.
3. **Zone of elongation**: the cells get longer.
4. **Zone of absorption**: **root hairs** that take in water. They make the absorbing surface dozens of times bigger.
5. **Zone of conduction**: substances move up to the stem.

## Feeding from the soil

Plants need nitrogen, phosphorus, potassium and other elements. **Fertilisers** can be organic (manure, peat) or mineral. Roots breathe, so the soil needs loosening.

## Modified roots

- **Root vegetables**: carrot, beetroot, radish (storage).
- **Root tubers**: dahlia.
- **Aerial roots**: orchids.
- **Clinging roots**: ivy.

## Exercises

1. What root system does wheat have?
2. Which zone are the root hairs in?
3. Why should the soil be loosened?
4. Give two examples of root vegetables.
5. Why are seedlings transplanted with a ball of soil?

## Answers

1. Fibrous.
2. The zone of absorption.
3. So that air reaches the roots.
4. Carrot, beetroot.
5. So as not to damage the root hairs.`,
      quiz: [
        ["What root system does a bean have?", ["Fibrous", "Tap root", "Aerial", "Clinging roots"]],
        ["Water is taken in by:", ["the root cap", "the root hairs", "the zone of division", "the zone of conduction"]],
        ["Which is a root vegetable?", ["Potato", "Carrot", "Onion", "Apple"]],
        ["What protects the root tip?", ["The root cap", "Hairs", "Vessels", "Cambium"]],
        ["A fibrous root system is typical of:", ["dicots", "monocots", "mosses", "ferns"]],
      ],
    },
    "shoot-and-stem": {
      objectives: ["Describe the structure of a shoot", "Distinguish leaf buds and flower buds", "Describe the inside of a tree stem", "Explain how annual rings form"],
      content: `## The shoot

A **shoot** is a stem with leaves and buds. The point on the stem where leaves grow is a **node**, and the part between nodes is an **internode**.

A **bud** is an undeveloped shoot. A **leaf bud** grows into a shoot with leaves, and a **flower bud** into a flower or a flower cluster. Buds can be **terminal** or **lateral**.

## What the stem does

- holds leaves and flowers up to the light,
- carries substances,
- stores food,
- is used for vegetative reproduction.

## Inside a tree stem (from outside in)

1. **Bark**: epidermis or cork (protection) and **phloem** (sieve tubes carrying organic substances down).
2. **Cambium**: growing tissue that makes the stem thicker.
3. **Wood** (xylem): vessels (carrying water up) and mechanical tissue.
4. **Pith**: storage.

**Annual rings**: in spring the cambium makes large cells (a light layer), in autumn small ones (a dark layer). Counting the rings tells you the age of a tree.

## Modified shoots

- **Rhizome**: couch grass, lily of the valley (underground).
- **Tuber**: potato (it has "eyes", which are buds).
- **Bulb**: onion, garlic, tulip.
- **Climbing shoots**, **runners**: grapevine, strawberry.

## Exercises

1. Why is a potato tuber a shoot and not a root?
2. A tree section has 25 annual rings. How old is the tree?
3. Which tissue makes the stem thicker?
4. Why can a tree die if a ring of bark is stripped off?
5. Give two examples of modified shoots.

## Answers

1. It has buds ("eyes") and traces of modified leaves.
2. About 25 years.
3. Cambium.
4. The phloem is damaged, and organic substances cannot reach the roots.
5. A potato tuber, an onion bulb.`,
      quiz: [
        ["What is a bud?", ["An undeveloped shoot", "Part of a flower", "The tip of a root", "A fruit"]],
        ["Which tissue forms annual rings?", ["Phloem", "Cambium", "Pith", "Cork"]],
        ["Water and salts rise up the stem:", ["in the phloem", "in the vessels of the wood", "in the pith", "in the bark"]],
        ["A potato tuber is:", ["a modified root", "a modified shoot", "a fruit", "a seed"]],
        ["Where do organic substances move down from the leaves?", ["In the wood", "In the phloem", "In the pith", "In the cambium"]],
      ],
    },
    "leaf-photosynthesis": {
      objectives: ["Describe the outside and inside structure of a leaf", "Write the overall equation of photosynthesis", "Explain why photosynthesis matters", "Explain water evaporation and leaf fall"],
      content: `## Structure of a leaf

**Outside**: the leaf blade, the leaf stalk (petiole), sometimes stipules. Leaves can be **simple** (one blade: apple, birch) or **compound** (several leaflets: rose, acacia). **Venation**: net-like (dicots), parallel or arc-shaped (monocots).

**Inside**:

- **upper and lower epidermis** (stomata are mostly on the lower side),
- **palisade layer** with many chloroplasts,
- **spongy layer** with air spaces,
- **veins**: vessels and sieve tubes.

## Photosynthesis

Using the energy of light, green plants make organic substances from carbon dioxide and water and give off oxygen:

**6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂** (light, chlorophyll)

**Experiment**: a leaf from a houseplant kept in the dark for a few days does not turn blue with iodine (there is no starch), but a leaf from a plant kept in the light does.

**Why it matters**: almost all the food and oxygen on Earth comes from photosynthesis. Plants also take in CO₂.

Alongside photosynthesis, plants **respire** (day and night), taking in oxygen and giving off CO₂.

## Evaporation and leaf fall

A leaf **gives off water vapour** through its stomata. This stops the plant overheating and keeps water moving up from the root. One big tree can give off hundreds of litres of water a day.

**Leaf fall** in autumn protects the plant in winter from losing water and from the weight of snow.

## Exercises

1. Write the equation of photosynthesis.
2. Why are the stomata mostly on the underside of the leaf?
3. How can you prove that photosynthesis needs light?
4. Why is it cool in the shade of trees in summer?
5. Why do plants shed their leaves?

## Answers

1. 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.
2. So that less water evaporates in direct sunlight.
3. Cover part of a leaf with black paper, then test for starch with iodine.
4. The leaves give off water and cool the air.
5. To lose less water in winter and to protect the branches from the weight of snow.`,
      quiz: [
        ["Photosynthesis gives off:", ["carbon dioxide", "oxygen", "nitrogen", "hydrogen"]],
        ["Photosynthesis takes place:", ["in the nucleus", "in chloroplasts", "in the vacuole", "in the root"]],
        ["Parallel venation is found in:", ["dicots", "monocots", "fungi", "mosses"]],
        ["Plants respire:", ["only by day", "only at night", "both by day and at night", "never"]],
        ["Starch made by photosynthesis is detected with:", ["limewater", "iodine", "phenolphthalein", "soda"]],
      ],
    },
    "flower-pollination": {
      objectives: ["Describe the structure of a flower", "Distinguish self-pollination and cross-pollination", "Describe how insect-pollinated and wind-pollinated plants are adapted", "Explain double fertilisation"],
      content: `## Structure of a flower

A **flower** is a modified, shortened shoot used for sexual reproduction.

- **flower stalk** and **receptacle**,
- **perianth**: the **calyx** (green sepals) and the **corolla** (coloured petals),
- **stamens**: the filament and the **anther**, where **pollen** forms,
- **pistil**: the **stigma**, the **style** and the **ovary**, which holds the **ovules**.

The stamens and pistil are the main parts of the flower. **Bisexual** flowers have both stamens and a pistil (apple), **unisexual** flowers have only one of them (cucumber, maize).

**Flower clusters**: raceme (bird cherry), spike (wheat), head (sunflower, chamomile), umbel (dill, carrot).

## Pollination

The transfer of pollen from an anther to a stigma.

- **Self-pollination**: within the same flower (pea, bean, wheat).
- **Cross-pollination**: from a flower on another plant:
  - **by insects**: bright petals, scent, nectar, sticky pollen (apple, apricot),
  - **by wind**: dull flowers, very light pollen, long stamens (maize, birch, walnut).

Bees pollinate most fruit trees, so beekeeping matters for fruit growing.

## Fertilisation

Pollen on the stigma grows a **pollen tube**, down which two **sperm cells** reach the ovule. One joins with the **egg cell** (forming the **embryo**), the other with the **central cell** (forming the **endosperm**, a food store). This is **double fertilisation**, discovered by S. Navashin (1898). The ovule develops into a **seed** and the ovary into a **fruit**.

## Exercises

1. List the main parts of a flower.
2. How do insect-pollinated and wind-pollinated flowers differ?
3. What does a fruit develop from?
4. Why is double fertilisation called "double"?
5. What kind of flower cluster does a sunflower have?

## Answers

1. The stamens and the pistil.
2. Insect-pollinated flowers have bright petals, scent and nectar; wind-pollinated ones have dull flowers and light pollen.
3. From the ovary.
4. Two sperm cells join with two different cells.
5. A head.`,
      quiz: [
        ["Pollen forms:", ["in the stigma", "in the anther", "in the ovary", "in the corolla"]],
        ["A fruit develops:", ["from the ovary", "from the stigma", "from the calyx", "from a stamen"]],
        ["Which plant is wind-pollinated?", ["Apple", "Maize", "Rose", "Apricot"]],
        ["Who discovered double fertilisation?", ["Darwin", "Navashin", "Mendel", "Timiryazev"]],
        ["The main parts of a flower are:", ["calyx and corolla", "stamens and pistil", "flower stalk and receptacle", "leaf and stem"]],
      ],
    },
    "fruits-seeds": {
      objectives: ["Classify fruits", "Describe the structure of monocot and dicot seeds", "Name the ways fruits and seeds are spread", "List the conditions seeds need to germinate"],
      content: `## Types of fruit

| Type | Examples |
|---|---|
| **fleshy**: berry | grape, tomato, currant |
| fleshy: drupe (stone fruit) | apricot, cherry, plum, peach |
| fleshy: pome | apple, pear, quince |
| pepo | pumpkin, cucumber, watermelon |
| **dry**: pod (legume) | bean, pea |
| dry: capsule | poppy, hemp |
| dry: nut | hazelnut, acorn |
| dry: grain | wheat, maize |
| dry: achene | sunflower |

The **apricot** (Prunus armeniaca, the "Armenian plum") is one of the symbols of Armenia.

## Structure of a seed

- **Dicot** (bean): seed coat, an embryo with two **cotyledons** (food store), the embryonic root, stem and bud.
- **Monocot** (wheat): fruit wall, **endosperm** (food store), an embryo with one cotyledon.

## How seeds are spread

- **by wind**: dandelion "parachutes", maple wings,
- **by animals**: hooks (burdock), fleshy fruits (birds digest the flesh, and the seed passes out),
- **by water**: coconut,
- **by the plant itself**: pods bursting open (bean, acacia).

## Conditions for germination

1. **Water** (the seed swells).
2. **Air** (oxygen for respiration).
3. **Warmth** (wheat germinates from 1–2 °C, beans from 10–12 °C).
4. **A living embryo**.

Light is not needed for germination. Seeds are sown at a certain depth so that they get enough water and air.

## Exercises

1. What type of fruit is an apricot?
2. Where is the food store in a bean seed, and where in wheat?
3. How is the dandelion spread?
4. Why don't seeds that are fully under water germinate?
5. Which fruit is a berry: tomato or cherry?

## Answers

1. A drupe.
2. In a bean it is in the cotyledons, in wheat in the endosperm.
3. By wind.
4. They get no oxygen.
5. Tomato.`,
      quiz: [
        ["What type of fruit is an apricot?", ["Berry", "Drupe", "Pod", "Nut"]],
        ["In a wheat seed the food store is:", ["in the cotyledons", "in the endosperm", "in the embryonic root", "in the seed coat"]],
        ["Which is not essential for germination?", ["Water", "Air", "Warmth", "Light"]],
        ["The fruit of a bean is:", ["a pod", "a berry", "a pome", "a grain"]],
        ["Burdock fruits are spread:", ["by wind", "by water", "by animals", "by the plant itself"]],
      ],
    },
    "bacteria-viruses": {
      objectives: ["Describe the structure of a bacterial cell", "Explain the role of bacteria in nature and in human life", "List ways of protecting against bacterial diseases", "Describe the features of viruses"],
      content: `## Bacteria

Single-celled organisms whose cell **has no true nucleus**. They measure 0.5–10 µm. **A. Leeuwenhoek** was the first to see them (17th century).

**Shapes**: round (cocci), rod-shaped (bacilli), comma-shaped (vibrios), spiral (spirilla).

They reproduce by **dividing**, in good conditions every 20–30 minutes. In bad conditions they form **spores**, which survive boiling and drought.

## Their role

**Useful**

- **decay bacteria** break down dead organisms and enrich the soil,
- **nodule bacteria** in the roots of legumes fix nitrogen from the air,
- **lactic acid** bacteria are used to make **matsun**, cheese and pickled vegetables. Armenian matsun is known for its special starter culture,
- gut bacteria help digestion.

**Harmful**

- they cause diseases: tonsillitis, tuberculosis, cholera, tetanus,
- they spoil food.

**Protection**: washing hands, storing food properly (fridge, cooking, pasteurisation, salt and sugar), vaccinations, antibiotics (only when a doctor prescribes them).

## Viruses

A non-cellular form of life: they consist of a **nucleic acid** and a **protein coat**. They reproduce only inside living cells. They cause flu, measles, chickenpox and COVID-19. Antibiotics do not work on viruses. Viruses were discovered by **D. Ivanovsky** (1892, tobacco mosaic disease).

## Exercises

1. How does a bacterial cell differ from a plant cell?
2. Why is matsun good for you?
3. Why is milk pasteurised?
4. Why do bacteria form spores?
5. Why don't antibiotics cure flu?

## Answers

1. It has no true nucleus.
2. It contains useful lactic acid bacteria.
3. To kill harmful bacteria.
4. To survive bad conditions.
5. Flu is a viral disease.`,
      quiz: [
        ["A bacterial cell:", ["has a nucleus", "has no true nucleus", "has chloroplasts", "is multicellular"]],
        ["Matsun is made with the help of:", ["yeast", "lactic acid bacteria", "mould", "viruses"]],
        ["Who discovered viruses?", ["Leeuwenhoek", "Ivanovsky", "Pasteur", "Hooke"]],
        ["Bacteria reproduce:", ["by seeds", "by dividing", "by flowers", "only by spores"]],
        ["Which bacteria fix nitrogen from the air?", ["Decay bacteria", "Nodule bacteria", "Lactic acid bacteria", "Gut bacteria"]],
      ],
    },
    "fungi-lichens": {
      objectives: ["Describe the structure of a mushroom", "Tell edible from poisonous mushrooms", "Describe moulds and yeasts", "Explain the structure and role of a lichen"],
      content: `## Features of fungi

Fungi are a separate kingdom: they have no chlorophyll (like animals, they feed on ready-made organic substances), but they grow all their lives and have a cell wall (like plants). The body is made of thin threads called **hyphae**, which together form the **mycelium**.

## Mushrooms

Structure: the **mycelium** in the soil and the **fruiting body**, a stalk and a cap. Under the cap are gills or tubes where **spores** form.

Many fungi form **mycorrhiza** with tree roots: the fungus gives the tree water and salts, and the tree gives the fungus organic substances (the birch bolete under a birch).

| Edible | Poisonous |
|---|---|
| cep, field mushroom, birch bolete, chanterelle | **death cap** (deadly), fly agaric, false honey fungus |

**Rule**: never pick or eat mushrooms you don't know. The death cap looks like a field mushroom, but it has a "sac" at the base of the stalk, and its gills are white.

## Moulds and yeasts

- **Mucor**: white mould on bread.
- **Penicillium**: green mould, from which the antibiotic **penicillin** is made.
- **Yeasts**: single-celled, reproduce by budding, carry out alcoholic fermentation (bread, wine).
- **Parasitic fungi**: rusts, smuts (pests of cereals), potato blight.

## Lichens

A **lichen** is a partnership (**symbiosis**) of a fungus and an alga (or a cyanobacterium): the alga photosynthesises, and the fungus provides water and protection. Lichens grow on rocks and tree bark and are the first to settle bare rock, preparing the soil. They are indicators of clean air: they do not grow in polluted cities.

## Exercises

1. Why are fungi not counted as plants?
2. What is mycorrhiza?
3. Which fungus is penicillin made from?
4. Why are lichens called indicators of clean air?
5. How does dough "rise"?

## Answers

1. They have no chlorophyll and do not photosynthesise.
2. A partnership between a fungus and the roots of a tree.
3. Penicillium (green mould).
4. They do not grow in polluted air.
5. Yeast gives off carbon dioxide.`,
      quiz: [
        ["The body of a fungus is made of:", ["leaves", "hyphae", "roots", "flowers"]],
        ["Which mushroom is deadly poisonous?", ["Field mushroom", "Cep", "Death cap", "Chanterelle"]],
        ["Penicillin is made from:", ["mucor", "penicillium", "yeast", "field mushroom"]],
        ["A lichen is a partnership of:", ["a fungus and an alga", "a bacterium and a virus", "a moss and a fern", "two fungi"]],
        ["Yeasts reproduce by:", ["seeds", "budding", "rhizomes", "tubers"]],
      ],
    },
    "algae-mosses-ferns": {
      objectives: ["Describe the features of algae", "Describe the structure of mosses and ferns", "Explain reproduction by spores", "Assess the role of these plants in nature"],
      content: `## Algae

Lower plants: they have no root, stem or leaves. The body is called a **thallus**. They live in water and in damp places.

- **Single-celled**: Chlamydomonas (moves with flagella), Chlorella.
- **Multicellular**: Spirogyra (thread-like), sea kelp (up to several tens of metres).
- By colour: green, red and brown algae.

Algae in the ocean produce a large share of the oxygen in the atmosphere and are food for water animals. Kelp ("sea cabbage") is eaten as food.

## Mosses

The simplest of the higher plants. They have a stem and leaves but **no true roots**: they hold on to the soil with **rhizoids**. They have no vessels.

- **Haircap moss**: a green moss in forests.
- **Peat moss** (Sphagnum): takes up 20 times its own mass of water, forms bogs and **peat**.

They reproduce by **spores**, which form in a **capsule**. Fertilisation needs water.

## Ferns

They have **roots, a stem (often a rhizome) and large leaves**, as well as **vascular tissue**. **Sporangia** with spores form on the underside of the leaves. A spore grows into a small **prothallus**, where fertilisation takes place (when there is water), and a new fern develops.

Horsetails and clubmosses are spore plants too. **Coal** formed from ancient tree ferns.

## Exercises

1. How do algae differ from higher plants?
2. What do mosses use to hold on to the soil?
3. Where do fern spores form?
4. Why do mosses and ferns need water for fertilisation?
5. How did coal form?

## Answers

1. They have no organs (root, stem, leaf) and no tissues.
2. Rhizoids.
3. In sporangia on the underside of the leaves.
4. The sperm cells swim in water.
5. From the remains of ancient fern-like plants.`,
      quiz: [
        ["The body of an alga is called:", ["a mycelium", "a thallus", "a shoot", "a rhizome"]],
        ["Mosses hold on to the soil with:", ["roots", "rhizoids", "tubers", "a rhizome"]],
        ["Ferns reproduce by:", ["seeds", "spores", "fruits", "flowers"]],
        ["Peat is formed by:", ["Spirogyra", "Sphagnum", "horsetail", "kelp"]],
        ["Which plants did coal form from?", ["Ancient fern-like plants", "Flowering plants", "Fungi", "Algae"]],
      ],
    },
    "seed-plants-flora-armenia": {
      objectives: ["Compare gymnosperms and angiosperms", "Distinguish the monocot and dicot classes", "Name important families of flowering plants", "Know the features of Armenia's flora and the Red Book"],
      content: `## Gymnosperms

Their seeds are uncovered: they lie on the scales of **cones**, and there are no fruits. Most are evergreen trees with needle-like leaves: **pine, spruce, juniper, thuja, cedar**. A pine cone takes about 1.5 years to ripen. Gymnosperms give us timber, resin and turpentine.

## Angiosperms (flowering plants)

They have a **flower** and a **fruit**, inside which the seeds are protected. This is the most varied group (about 300 thousand species).

| Feature | Monocots | Dicots |
|---|---|---|
| cotyledons | 1 | 2 |
| root system | fibrous | tap root |
| venation | parallel, arc-shaped | net-like |
| flower parts | in threes | in fours or fives |
| families | grasses, lilies | rose, cabbage, legume, daisy, nightshade |

**Important families**

- **Rose family**: apricot, apple, pear, dog rose, strawberry.
- **Grass family**: wheat, barley, maize, rice.
- **Legume family**: bean, pea, lentil, chickpea, alfalfa.
- **Nightshade family**: potato, tomato, pepper, aubergine.
- **Daisy family**: sunflower, chamomile, dandelion.

## The flora of Armenia

About **3800** species of vascular plants grow in Armenia's small territory, thanks to its many climate zones and altitudes (from semi-desert to alpine meadows). Armenia is one of the oldest centres of cultivated wheat and grapes. The wild ancestors of wheat grow here.

**The Red Book**: endangered species are protected. Examples: orchids of the Ararat Valley, some tulips of Sevan and Ararat, endemics described by A. Grossheim. Protected areas: the Khosrov Forest Reserve, Dilijan and Sevan National Parks, the Shikahogh Reserve.

## Exercises

1. How do gymnosperms differ from angiosperms?
2. Name the class: 5 petals, net-like veins, a tap root.
3. Which family does the apricot belong to?
4. Name two protected areas in Armenia.
5. Why is Armenia's flora so varied?

## Answers

1. They have no flower or fruit; their seeds lie uncovered on cones.
2. Dicots.
3. The rose family.
4. The Khosrov Forest Reserve, Dilijan National Park.
5. Because of the great differences in altitude and climate.`,
      quiz: [
        ["Which plant is a gymnosperm?", ["Apricot", "Pine", "Wheat", "Rose"]],
        ["Angiosperms have:", ["cones", "a flower and a fruit", "only spores", "rhizoids"]],
        ["Which plant is a monocot?", ["Bean", "Sunflower", "Maize", "Apple"]],
        ["The potato belongs to the:", ["rose family", "nightshade family", "grass family", "legume family"]],
        ["Roughly how many species of vascular plants are there in Armenia?", ["300", "1000", "3800", "30000"]],
      ],
    },
  },
};
