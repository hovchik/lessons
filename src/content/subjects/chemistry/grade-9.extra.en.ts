import type { RuLesson } from "../../ru-overlay";

export const enExtra9: Record<string, RuLesson> = {
  "galvanic-cells": {
    objectives: ["Explain how a redox reaction produces an electric current", "Describe the zinc–copper cell", "Use the reactivity series to tell which metal is the negative terminal", "Tell single-use batteries from rechargeable ones"],
    content: `## Electrons through a wire

A strip of zinc in copper sulfate solution gets coated with copper: Zn + Cu²⁺ → Zn²⁺ + Cu. Zinc gives electrons, copper ions take them. The electrons pass straight across at the surface of the strip, and the energy is released as heat.

But if we **separate** the zinc from the copper ions and make the electrons travel **through a wire**, we get a current. This is the idea of a **galvanic cell**.

## The zinc–copper (Daniell) cell

- A zinc strip in zinc sulfate solution: Zn − 2e → Zn²⁺ (zinc dissolves).
- A copper strip in copper sulfate solution: Cu²⁺ + 2e → Cu (copper is deposited).
- The strips are joined by a wire, and the solutions by a **salt bridge** (a strip of paper soaked in salt solution) through which ions move.

Electrons flow through the wire from zinc to copper. Zinc is the **negative terminal** (anode), copper the **positive** one (cathode). The voltage is about **1.1 V**.

## What sets the voltage

The **further apart** two metals are in the reactivity series, the larger the voltage. The more reactive metal is always the negative terminal.

| Pair | Approximate voltage |
|---|---|
| Zn – Cu | 1.1 V |
| Fe – Cu | 0.8 V |
| Mg – Cu | 2.7 V |
| Cu – Cu | 0 V |

Two identical metals give no voltage: one must give up electrons more readily than the other.

## A lemon battery

Push a galvanised nail and a copper coin into a lemon. The acidic juice is the electrolyte. One lemon gives about 0.9 V but only a tiny current; several lemons joined in series can light an LED.

## Batteries and accumulators

- **Single-use** (alkaline battery): the reaction runs one way, and the substances are used up.
- **Rechargeable** (a phone's lithium-ion battery, a car's lead–acid battery): an outside current drives the reaction backwards and the starting substances are restored.

Lithium is at the top of the reactivity series and very light, so lithium batteries give a high voltage for little mass. In 2019 the inventors of the lithium-ion battery received the Nobel Prize.

## Exercises

1. Why does zinc placed in copper sulfate solution not give us a current?
2. In a zinc–copper cell, which strip gets heavier and which lighter?
3. Which metal is the negative terminal in an iron–copper pair? Why?
4. Which pair gives a larger voltage: Mg–Cu or Fe–Cu?
5. How does a rechargeable battery differ from a single-use one?

## Answers

1. The electrons pass straight from the metal to the ions, not through a wire; the energy comes out as heat.
2. The copper strip gets heavier (copper is deposited), the zinc strip lighter (zinc dissolves).
3. Iron, because it is more reactive and gives up electrons more readily.
4. Mg–Cu, because magnesium is further from copper in the reactivity series.
5. Its reaction can be reversed by an outside current, restoring the starting substances.`,
    quiz: [
      ["What is a galvanic cell?", ["A device that turns the energy of a chemical reaction into electricity", "A lamp", "An alloy", "A measuring cylinder"]],
      ["Which electrode is negative in a zinc–copper cell?", ["Copper", "Zinc", "The salt bridge", "The solution"]],
      ["What happens at the copper strip?", ["Copper dissolves", "Copper ions take electrons and are deposited", "Oxygen is given off", "Nothing"]],
      ["Which pair gives the largest voltage?", ["Cu–Cu", "Fe–Cu", "Zn–Cu", "Mg–Cu"]],
      ["Why are lithium batteries light and powerful?", ["Lithium is very reactive and very light", "Lithium is expensive", "Lithium is a gas", "Lithium does not react"]],
    ],
  },

  "ammonium-salts": {
    objectives: ["Explain how the ammonium ion forms", "Write the reactions that make and decompose ammonium salts", "Identify the ammonium ion by a test", "Describe the uses of ammonium salts"],
    content: `## The ammonium ion

In the ammonia molecule, nitrogen has a **lone pair** of electrons. With this pair it can "catch" a hydrogen ion:

NH₃ + H⁺ → NH₄⁺

This is the **ammonium ion**. The fourth bond is made from nitrogen's pair, but once formed, all four N–H bonds are exactly alike. This kind of bond is called a **dative (donor–acceptor)** bond. The ammonium ion behaves like an alkali metal ion, so its salts resemble potassium salts.

## Making ammonium salts

Ammonia + an acid:

- NH₃ + HCl → NH₄Cl (ammonium chloride, sal ammoniac)
- 2NH₃ + H₂SO₄ → (NH₄)₂SO₄
- NH₃ + HNO₃ → NH₄NO₃ (ammonium nitrate)

Bring together two glass rods, one dipped in ammonia solution and one in hydrochloric acid, and a white "smoke" of tiny NH₄Cl crystals appears in the air.

## Properties

1. All ammonium salts **dissolve** in water.
2. Heated with alkalis they give off ammonia: NH₄Cl + NaOH → NaCl + NH₃↑ + H₂O. This is the **test** for the ammonium ion: ammonia is recognised by its smell and by turning damp red litmus blue.
3. They decompose on heating:
   - NH₄Cl → NH₃ + HCl (on cold walls they join again, so the salt seems to "sublime");
   - NH₄NO₃ → N₂O + 2H₂O;
   - (NH₄)₂CO₃ → 2NH₃ + CO₂ + H₂O (a raising agent for baking).

## Uses

| Salt | Use |
|---|---|
| NH₄NO₃ | nitrogen fertiliser (35 % N) |
| (NH₄)₂SO₄ | fertiliser |
| NH₄Cl | cleaning metal surfaces for soldering, batteries |
| NH₄HCO₃, (NH₄)₂CO₃ | raising agents for baking |

**Careful.** Ammonium fertilisers must not be mixed with lime or wood ash: these are alkaline, ammonia is released, and the nitrogen is lost to the air.

## Exercises

1. How does the ammonium ion form?
2. Write the reaction that makes ammonium sulfate.
3. How can you prove that a salt is an ammonium salt?
4. Why is ammonium carbonate used in baking?
5. Find the mass fraction of nitrogen in NH₄NO₃.

## Answers

1. The nitrogen of NH₃ uses its lone pair to attach H⁺.
2. 2NH₃ + H₂SO₄ → (NH₄)₂SO₄.
3. Heat it with an alkali: ammonia is given off (smell; damp red litmus turns blue).
4. On heating it breaks down completely into gases (NH₃, CO₂, H₂O), which make the dough rise.
5. M = 80, ω(N) = 28 / 80 = 35 %.`,
    quiz: [
      ["What is the formula of the ammonium ion?", ["NH₃", "NH₄⁺", "NO₃⁻", "N₂"]],
      ["How is the ammonium ion identified?", ["Add AgNO₃", "Heat with an alkali; ammonia is given off", "Add BaCl₂", "Dissolve it in water"]],
      ["What forms in the reaction NH₃ + HCl?", ["NH₄Cl", "N₂ and H₂", "NH₄OH", "NCl₃"]],
      ["Why must ammonium salts not be mixed with lime?", ["They explode", "Ammonia is released and the nitrogen is lost", "The limestone dissolves", "The salt changes colour"]],
      ["What is the share of nitrogen in NH₄NO₃?", ["17.5 %", "28 %", "35 %", "50 %"]],
    ],
  },

  silicates: {
    objectives: ["Describe the structure of silicates", "Explain how glass, ceramics and cement are made", "Explain why cement hardens with water", "Name Armenia's silicate raw materials"],
    content: `## The main material of the Earth's crust

About 90 % of the Earth's crust is **silicates** and SiO₂. In silicates every silicon atom is surrounded by four oxygen atoms (an **SiO₄ tetrahedron**), and the tetrahedra join through shared oxygen atoms into chains, sheets or 3D frameworks. The spaces between them hold metal ions (Na⁺, K⁺, Ca²⁺, Al³⁺). That is why silicate minerals are so varied, from soft, flaky mica to hard feldspar.

## The silicate industry

The silicate industry turns raw materials into the materials that building depends on.

**Glass.** Sand (SiO₂), soda (Na₂CO₃) and limestone (CaCO₃) are melted together at about 1500 °C:

Na₂CO₃ + CaCO₃ + 6SiO₂ → Na₂O·CaO·6SiO₂ + 2CO₂.

Glass is not a crystal: as it cools, its particles do not have time to line up and "freeze" in disorder, as in a liquid. So glass has no fixed melting point; it softens gradually on heating and can be shaped by blowing. Cobalt oxide colours glass blue, chromium oxide green.

**Ceramics.** Clay is mixed with water, shaped and fired at 900–1400 °C. Firing drives off the water, and the edges of the particles partly melt and fuse together: the result is a strong material that does not soften in water. Bricks, tiles, porcelain, clay jars.

**Cement.** Limestone and clay are fired at about 1450 °C and the resulting lumps (clinker) are ground to a powder. Mixed with water, cement **does not dry; it reacts with the water**: needle-like crystals of calcium silicate hydrates grow, interlock and bind everything into strong stone. That is why concrete hardens even under water and must be kept damp for its first days. Cement + sand + gravel + water = **concrete**.

## Armenia's silicate raw materials

Armenia is rich in volcanic rocks: **tuff** (pink Artik tuff is why Yerevan is called "the pink city"), **pumice**, **perlite** and **basalt**. Clay, limestone and sand are also used. Tuff is light and porous, so it keeps heat in well, and it is easy to cut.

## Exercises

1. How are silicates built?
2. What is ordinary glass made from? Write the reaction.
3. Why does glass have no fixed melting point?
4. Why does cement harden even under water?
5. Name three silicate building materials from Armenia.

## Answers

1. From SiO₄ tetrahedra joined through shared oxygen atoms, with metal ions between them.
2. Sand, soda and limestone: Na₂CO₃ + CaCO₃ + 6SiO₂ → Na₂O·CaO·6SiO₂ + 2CO₂.
3. It is not a crystal; its particles are disordered, so it softens gradually.
4. Cement does not dry; it reacts chemically with water, forming crystals of hydrates.
5. For example: tuff, pumice, basalt (or perlite).`,
    quiz: [
      ["What structural unit are silicates built from?", ["The SiO₄ tetrahedron", "The CO₂ molecule", "The NaCl cube", "The H₂O molecule"]],
      ["What is needed for ordinary glass?", ["Sand, soda, limestone", "Clay and water", "Iron and coal", "Sulfur and oxygen"]],
      ["Why does glass have no fixed melting point?", ["It is a metal", "Its particles are disordered", "It contains water", "It is a gas"]],
      ["What happens when cement hardens?", ["The water evaporates", "Cement reacts chemically with water", "Cement cools down", "Cement burns"]],
      ["Which building stone is typical of Armenia?", ["Marble", "Tuff", "Granite", "Chalk"]],
    ],
  },

  "metal-extraction": {
    objectives: ["Name the main ways of extracting metals", "Choose an extraction method from the reactivity series", "Describe the reactions in a blast furnace", "Explain what ore concentration is and why it is needed"],
    content: `## From ore to metal

An **ore** is a natural rock from which it pays to extract a metal. In ores the metal is usually present as oxides (Fe₂O₃, Fe₃O₄), sulfides (Cu₂S, ZnS, MoS₂) or carbonates. Extracting the metal means **reducing** its ions, that is, giving them electrons: Mⁿ⁺ + ne → M.

## Stages

1. **Concentration.** The useful mineral is often only a few per cent of the ore; the rest is waste rock. The ore is crushed and the useful part separated (for example by **froth flotation**: sulfide particles stick to air bubbles and rise with the froth, while waste rock sinks). The result is a **concentrate**.
2. **Roasting sulfides.** Sulfides are heated in air and turned into oxides: 2ZnS + 3O₂ → 2ZnO + 2SO₂. The SO₂ is made into sulfuric acid so that it does not escape into the air.
3. **Reduction.** The method depends on how reactive the metal is.

## Method by reactivity

| Metals | Method | Example |
|---|---|---|
| K, Na, Ca, Mg, Al | electrolysis of the melt | 2NaCl → 2Na + Cl₂ |
| Zn, Fe, Pb, Cu | reduction by carbon, CO, H₂ | ZnO + C → Zn + CO |
| Mo, W, Cr, Ti | reduction by hydrogen or a reactive metal | MoO₃ + 3H₂ → Mo + 3H₂O |
| Ag, Au, Pt | found native (as the metal) | panning gold-bearing sand |

Why does Al need electrolysis? Aluminium holds oxygen more firmly than carbon does, so carbon cannot "take it away". An electric current can supply any energy needed.

## The blast furnace

Iron is made in a blast furnace, a tower up to 30 m tall. Ore, coke (carbon) and limestone go in at the top; hot air is blown in at the bottom.

1. Coke burns: C + O₂ → CO₂, and higher up CO₂ + C → 2CO.
2. Carbon monoxide reduces the iron: Fe₂O₃ + 3CO → 2Fe + 3CO₂.
3. Limestone decomposes (CaCO₃ → CaO + CO₂), and CaO binds the sand: CaO + SiO₂ → CaSiO₃, **slag**, which floats on the molten iron and is tapped off separately.

What flows out is **pig iron** (2–4 % carbon), which is then made into steel.

## Metallurgy in Armenia

Armenia has large copper and molybdenum deposits (Kajaran, Agarak, Teghout) and gold mines (Sotk). The Kajaran ore is concentrated by flotation into copper and molybdenum concentrates. Molybdenum makes steel strong and heat-resistant.

## Exercises

1. What is an ore, and why is it concentrated?
2. Why is aluminium not extracted by reduction with carbon?
3. Write the reactions for getting zinc from ZnS (two steps).
4. What is the job of limestone in a blast furnace?
5. How is molybdenum obtained from MoO₃?

## Answers

1. A natural rock from which it pays to extract a metal; it is concentrated because there is little useful mineral and a lot of waste rock.
2. Aluminium holds oxygen more firmly than carbon, so electrolysis is needed.
3. 2ZnS + 3O₂ → 2ZnO + 2SO₂; ZnO + C → Zn + CO.
4. It becomes CaO, which binds the sand into slag.
5. By reduction with hydrogen: MoO₃ + 3H₂ → Mo + 3H₂O.`,
    quiz: [
      ["How is sodium obtained?", ["By reduction with carbon", "By electrolysis of molten NaCl", "By reduction with hydrogen", "It is found native"]],
      ["What reduces iron in a blast furnace?", ["Oxygen", "Carbon monoxide, CO", "Water", "Limestone"]],
      ["What is froth flotation?", ["A way to separate a useful mineral from waste rock", "Melting a metal", "Making an acid", "Electrolysis"]],
      ["Which metal is found native?", ["Sodium", "Aluminium", "Gold", "Iron"]],
      ["What is slag?", ["Pure iron", "Calcium silicate that binds the sand", "Coal", "Carbon dioxide"]],
    ],
  },

  alloys: {
    objectives: ["Define an alloy", "Explain why alloys are harder than pure metals", "Describe the make-up and uses of bronze, brass, duralumin and solder", "Choose an alloy for a given job"],
    content: `## What an alloy is

An **alloy** is a melted and solidified mixture of a metal with one or more other elements (metals or non-metals). Pure metals are used far less than alloys: cars, bridges, coins and aircraft are made of alloys.

## Why alloys are harder

In a pure metal all the atoms are alike and stacked in regular layers. Under a force the layers slide easily over one another, so the metal is soft and bends.

An alloy contains atoms of a **different size**. They become "obstacles", distort the layers, and the layers can no longer slide easily. So the alloy is **harder and stronger**. Pure copper is soft, for example, but adding 10 % tin gives bronze, which was used in ancient times for weapons and tools.

An alloy usually melts at a **lower** temperature than its components and conducts electricity less well: the foreign atoms also get in the way of moving electrons.

## Important alloys

| Alloy | Made of | Properties, uses |
|---|---|---|
| bronze | Cu + Sn | hard, does not rust; statues, bells, medals |
| brass | Cu + Zn | golden, easy to work; taps, musical instruments |
| steel | Fe + C (up to 2 %) | strong; bridges, cars, tools |
| stainless steel | Fe + Cr + Ni | does not rust; kitchens, medicine |
| duralumin | Al + Cu + Mg + Mn | light and strong; aircraft |
| solder | Sn + (Ag, Cu) | low melting point; soldering electronics |
| 585 gold | 58.5 % Au + Ag, Cu | harder than pure gold |

## The fineness of jewellery

Pure gold is so soft that a fingernail can scratch it, so jewellery is made of an alloy. **585 fineness** (14 carat) means 585 g of gold in 1000 g of alloy. A 5 g ring of 585 gold contains 5 · 0.585 ≈ 2.9 g of gold.

## Exercises

1. What is an alloy?
2. Why is bronze harder than pure copper?
3. Which alloy would you choose for an aircraft wing? Why?
4. How much gold is in a 4 g chain of 750 fineness?
5. Why are electric wires made of pure copper and not of brass?

## Answers

1. A melted and solidified mixture of a metal with other elements.
2. Tin atoms are a different size and stop the layers of copper atoms sliding.
3. Duralumin, because it is light and strong.
4. 4 · 0.75 = 3 g.
5. A pure metal conducts better; in an alloy the foreign atoms get in the way of the electrons.`,
    quiz: [
      ["What is bronze made of?", ["Cu + Zn", "Cu + Sn", "Fe + C", "Al + Mg"]],
      ["Why are alloys harder than pure metals?", ["Atoms of a different size stop the layers sliding", "They contain water", "They are heavier", "They have no free electrons"]],
      ["Which alloy is used in aircraft?", ["Brass", "Cast iron", "Duralumin", "Solder"]],
      ["What does 585 fineness mean for gold?", ["585 g of gold in 1000 g of alloy", "A melting point of 585 °C", "585 carats", "5.85 % gold"]],
      ["What does chromium give to steel?", ["Colour", "Resistance to rust", "Magnetism", "Lightness"]],
    ],
  },
};
