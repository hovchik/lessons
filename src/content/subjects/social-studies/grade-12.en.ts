import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The basic questions of philosophy, kinds of knowledge, criteria of truth.",
    "Global problems, international organisations, sustainable development, Armenia in the world, choosing a path in life.",
  ],
  lessons: {
    "philosophy-intro": {
      objectives: ["Explain what philosophy studies", "Name the main branches of philosophy", "Present the ideas of ancient philosophers", "Get to know figures of Armenian philosophical thought"],
      content: `## The love of wisdom

The word **philosophy** is Greek and means "love of wisdom". It studies the most general questions, which cannot be answered by experience alone:

- What is the world and how did it come about?
- What is a human being, and do we have free will?
- Can we know the world?
- What are goodness, justice and beauty?
- What is the meaning of life?

## Branches

| Branch | Questions |
|---|---|
| **Ontology** (the study of being) | what being is, what the world is made of |
| **Epistemology** (the theory of knowledge) | how we know, what truth is |
| **Ethics** | what is good, how we should live |
| **Aesthetics** | what is beautiful, art |
| **Logic** | how to reason correctly |
| **Social philosophy** | what society is, what a just state is |

## Ancient philosophers

| Philosopher | Idea |
|---|---|
| **Socrates** (5th century BC) | "I know that I know nothing". He sought truth through conversation and questions |
| **Plato** | **ideas** are real, and the world we see is their shadow (the allegory of the cave) |
| **Aristotle** | knowledge begins with observation; he founded logic as a science; "man is a political animal" |

## Armenian philosophical thought

- **Eznik of Kolb** (5th century): "Refutation of the Sects", questions of the origin of evil and free will,
- **David the Invincible** (5th–6th centuries): commented on the works of Aristotle and Porphyry, "Definitions of Philosophy". Tradition says he was called "the Invincible" for his victories in debates,
- **Hovhannes Imastaser** (11th–12th centuries), **Grigor Tatevatsi** (14th–15th centuries): a famous teacher at the University of Tatev, theologian and philosopher.

## Why we need philosophy

It teaches **critical thinking**: asking questions, testing arguments, understanding different points of view, forming your own worldview.

## Exercises

1. What does the word "philosophy" mean?
2. Which branch of philosophy studies good and evil?
3. What is the idea of Plato's allegory of the cave?
4. To whom is the saying "I know that I know nothing" attributed?
5. Who wrote "Definitions of Philosophy"?

## Answers

1. Love of wisdom.
2. Ethics.
3. People see only shadows of the real world (of ideas) and must free themselves from illusions.
4. Socrates.
5. David the Invincible.`,
      quiz: [
        ["Which branch of philosophy studies knowledge?", ["Epistemology", "Aesthetics", "Ethics", "Ontology"]],
        ["Who founded logic as a science?", ["Aristotle", "Socrates", "Democritus", "Pythagoras"]],
        ["Which Armenian philosopher was called \"the Invincible\"?", ["David", "Eznik", "Grigor Tatevatsi", "Movses Khorenatsi"]],
        ["What was Socrates' method?", ["Conversation and questions", "Laboratory experiments", "Mathematical calculations", "Silent meditation"]],
        ["What does philosophy teach above all?", ["Critical thinking", "Programming", "Accounting", "Physical exercise"]],
      ],
    },
    "knowledge-and-truth": {
      objectives: ["Distinguish sensory and rational knowledge", "Name kinds of knowledge", "Explain the criteria of truth", "Describe the scientific method"],
      content: `## Stages of knowledge

| Stage | Forms | Example |
|---|---|---|
| **Sensory** | sensation, perception, mental image | I see a red, round, sweet apple |
| **Rational** (by reason) | concept, judgement, inference | "All fruits contain vitamins; an apple is a fruit, so an apple contains vitamins" |

**Empiricists** (John Locke) held that the main source of knowledge is experience; **rationalists** (René Descartes, "I think, therefore I am") held that it is reason. Modern science uses both.

## Kinds of knowledge

| Kind | Feature |
|---|---|
| **Everyday** | gained from life experience ("it is cloudy, it may rain") |
| **Scientific** | justified, testable, systematic |
| **Artistic** | expressed in the images of art |
| **Religious** | based on faith |
| **Folk wisdom** | proverbs, sayings |

## Truth

**Truth** is the correspondence of knowledge to reality.

- **Absolute** truth is complete, final knowledge (some facts: "Napoleon died in 1821"),
- **Relative** truth is incomplete and can be refined (Newton's mechanics holds for ordinary speeds, but Einstein's theory added to it).

**Criteria of truth**: **practice** (testing by experience), logical consistency, agreement with other tested knowledge.

A **mistake** is an unintentional error; a **lie** is an intentional one.

## The scientific method

1. **Observation**: we notice a phenomenon,
2. **Question**: why does it happen,
3. **Hypothesis**: a possible explanation,
4. **Experiment**: we test the hypothesis,
5. **Analysis**: we compare the results with what was expected,
6. **Conclusion**: the hypothesis is confirmed or rejected.

The philosopher **Karl Popper** argued that a scientific theory must be **falsifiable**: if no experience could show the theory to be wrong, it is not scientific.

## Exercises

1. How is sensory knowledge different from rational knowledge?
2. Who said "I think, therefore I am"?
3. Why is Newton's mechanics an example of relative truth?
4. How is a mistake different from a lie?
5. What does it mean that a theory must be falsifiable?

## Answers

1. Sensory knowledge is based on the sense organs; rational knowledge on thinking (concepts, judgements).
2. René Descartes.
3. It holds under certain conditions but was added to by Einstein's theory.
4. A mistake is an unintentional error; a lie is intentional.
5. There must be a possible experience that could show it to be wrong.`,
      quiz: [
        ["Which is a form of rational knowledge?", ["Inference", "Sensation", "Perception", "Mental image"]],
        ["What is the main criterion of truth?", ["Practice", "The majority's opinion", "The author's fame", "Advertising"]],
        ["What is the third step of the scientific method (observation, question, ...)?", ["Hypothesis", "Conclusion", "Experiment", "Analysis"]],
        ["Who was an empiricist?", ["John Locke", "René Descartes", "Plato", "Pythagoras"]],
        ["Who proposed the principle of falsifiability?", ["Karl Popper", "Aristotle", "Kant", "Socrates"]],
      ],
    },
    "global-problems": {
      objectives: ["Define global problems", "Classify them", "Analyse climate change and the problem of war and peace", "Suggest solutions at the personal and international level"],
      content: `## What are global problems

**Global problems** are problems that:

- affect the whole of humanity,
- threaten humanity's future,
- can be solved only by **joint** efforts.

## Classification

| Group | Problems |
|---|---|
| **International** | war and peace, nuclear weapons, terrorism |
| **People and nature** | climate change, pollution, deforestation, loss of biodiversity, water shortage |
| **People and society** | poverty and hunger, demographic problems, epidemics, illiteracy |

## War and peace

In the 20th century two world wars took tens of millions of lives. After the atomic bombing of Hiroshima and Nagasaki in 1945 it became clear that a nuclear war could destroy civilisation.

The **Treaty on the Non-Proliferation of Nuclear Weapons** (1968) limits the spread of these weapons. Even today there are armed conflicts in the world that cause casualties and refugees.

## Climate change

- Burning fuel (coal, oil, gas) releases **carbon dioxide** into the air, which strengthens the **greenhouse effect**,
- The planet's average temperature has risen by about 1.1–1.2 °C since the late 19th century,
- Consequences: melting glaciers, rising sea levels, droughts, floods, heatwaves,
- The **Paris Agreement** (2015): the aim is to keep warming well below 2 °C, aiming for 1.5 °C.

In Armenia climate change affects water resources, agriculture and Lake Sevan.

## Demographic problems

In 2022 the world's population passed **8 billion**. In some countries the population is growing fast; in others (Europe, Japan, Armenia) it is **ageing** and shrinking because of falling birth rates and emigration.

## What I can do

- Save electricity and water,
- Sort rubbish, use reusable bags,
- Walk, cycle, use public transport,
- Take part in tree planting and clean-up campaigns,
- Stay informed and support peaceful solutions.

## Exercises

1. Which problems are considered global?
2. Name three groups of global problems.
3. What causes the strengthening of the greenhouse effect?
4. What is the aim of the Paris Agreement?
5. Name three things you can do to protect nature.

## Answers

1. Problems that affect the whole of humanity, threaten its future and can be solved only by joint efforts.
2. International, people and nature, people and society.
3. Emissions of carbon dioxide and other greenhouse gases from burning fuel.
4. To keep warming well below 2 °C, aiming for 1.5 °C.
5. For example, save energy, sort rubbish, use public transport.`,
      quiz: [
        ["Which is a global problem?", ["Climate change", "A broken window at school", "A rubbish bin in the courtyard", "The score of a football match"]],
        ["Which gas mainly strengthens the greenhouse effect?", ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"]],
        ["In which year was the Paris Agreement signed?", ["2015", "1997", "2005", "2021"]],
        ["In which year did the world's population pass 8 billion?", ["2022", "2000", "2011", "2030"]],
        ["Why do global problems need joint efforts?", ["They are not limited to one country", "They are always small", "They concern only rich countries", "They have already been solved"]],
      ],
    },
    "international-organisations": {
      objectives: ["Describe the structure and aims of the UN", "Present regional organisations", "Explain the basic principles of international law", "Name the rules of international humanitarian law"],
      content: `## The United Nations

The **UN** was created in **1945**, after the Second World War, to keep the peace. Its headquarters is in **New York**. Today it has 193 member states.

| Body | Role |
|---|---|
| **General Assembly** | all member states, each with one vote |
| **Security Council** | 15 members, 5 of them permanent (USA, Russia, China, United Kingdom, France) with a veto |
| **Secretariat** | headed by the Secretary-General |
| **International Court of Justice** | The Hague; settles disputes between states |

**Specialised agencies**: UNESCO (education, science, culture), UNICEF (children), WHO (the World Health Organization), UNHCR (refugees), WFP (the World Food Programme).

## Regional organisations

| Organisation | Aim | Link with Armenia |
|---|---|---|
| **Council of Europe** | human rights, democracy | member since 2001 |
| **OSCE** | security, election observation | member |
| **European Union** | economic and political union | partner (CEPA) |
| **EAEU** | economic union | member since 2015 |
| **CIS** | cooperation of former Soviet countries | member |

## International law

**International law** regulates relations between states. The main principles of the UN Charter:

- the **sovereign equality** of states,
- no use of **force** or threat of force,
- the **peaceful** settlement of disputes,
- non-interference in internal affairs,
- the right of **peoples to self-determination**,
- the **territorial integrity** of states,
- respect for human rights,
- fulfilling obligations in good faith.

Sometimes principles can contradict each other (for example, self-determination and territorial integrity), which makes conflicts harder to resolve.

## International humanitarian law

Even in war there are rules (the **Geneva Conventions**, 1949):

- **Civilians** and hospitals must not be attacked,
- **Prisoners of war** must be treated humanely,
- Torture and some kinds of weapons (chemical, biological) are banned,
- The **Red Cross** and **Red Crescent** are protected emblems.

The most serious crimes (genocide, war crimes, crimes against humanity) are dealt with by the **International Criminal Court** (The Hague).

## Exercises

1. When and why was the UN created?
2. Who are the permanent members of the UN Security Council?
3. Which regional organisations is Armenia a member of?
4. Name three principles of international law.
5. What rules apply in wartime?

## Answers

1. In 1945, after the Second World War, to keep the peace.
2. The USA, Russia, China, the United Kingdom, France.
3. The Council of Europe, the OSCE, the EAEU, the CIS.
4. For example, no use of force, peaceful settlement of disputes, respect for human rights.
5. The Geneva Conventions: protection of civilians and prisoners of war, a ban on some kinds of weapons.`,
      quiz: [
        ["In which year was the UN created?", ["1945", "1919", "1955", "1991"]],
        ["Where is the UN headquarters?", ["New York", "Geneva", "Paris", "London"]],
        ["How many permanent members does the Security Council have?", ["5", "15", "10", "7"]],
        ["Which agency deals with children's rights?", ["UNICEF", "OSCE", "IMF", "NATO"]],
        ["Which documents protect prisoners of war?", ["The Geneva Conventions", "The Paris Agreement", "The Kyoto Protocol", "The Maastricht Treaty"]],
      ],
    },
    "sustainable-development": {
      objectives: ["Define sustainable development", "Describe the three pillars of sustainable development", "Present the UN's 17 goals", "Analyse examples of sustainable development in Armenia"],
      content: `## Definition

In 1987 a UN commission report (**"Our Common Future"**) gave this definition:

**Sustainable development** is development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs.

## Three pillars

| Pillar | Aim |
|---|---|
| **Economic** | growth, jobs, prosperity |
| **Social** | fairness, education, health, equal opportunities |
| **Environmental** | careful use of resources, protecting nature |

Only a solution that takes all three into account together is sustainable. For example, a factory may create jobs, but if it pollutes a river, the development is not sustainable.

## The UN Sustainable Development Goals

In 2015 all UN members adopted **17 goals** to be reached by **2030**. Some of them:

1. No poverty,
2. Zero hunger,
3. Good health and well-being,
4. Quality education,
5. Gender equality,
6. Clean water and sanitation,
7. Affordable and clean energy,

... and also decent work, sustainable cities, responsible consumption, climate action, life below water and on land, peace and justice, partnership.

## The circular economy

The traditional **linear** model: take → make → use → throw away. The **circular** model: reduce, reuse, recycle, repair.

## Examples in Armenia

- **Solar energy**: rapid growth of solar power stations and rooftop panels (Armenia has many sunny days a year),
- Efforts to restore the level of **Lake Sevan**,
- Reforestation programmes,
- **Ecotourism** and agritourism in the provinces,
- National parks and reserves (Dilijan, the Khosrov Forest).

## Exercises

1. How is sustainable development defined?
2. Name the three pillars of sustainable development.
3. How many goals did the UN adopt in 2015, and for which year?
4. How is a linear economy different from a circular one?
5. Give an example of sustainable development in Armenia.

## Answers

1. Development that meets present needs without compromising the ability of future generations.
2. Economic, social, environmental.
3. 17 goals, for 2030.
4. In a linear economy a product is thrown away after use; in a circular one it is reused and recycled.
5. For example, the development of solar energy.`,
      quiz: [
        ["How many sustainable development goals did the UN adopt?", ["17", "10", "8", "25"]],
        ["By which year should the goals be reached?", ["2030", "2020", "2050", "2100"]],
        ["Which is a pillar of sustainable development?", ["Environmental", "Military", "Sporting", "Advertising"]],
        ["Which is a principle of the circular economy?", ["Recycling", "Use and throw away", "Produce as much as possible", "Never repair"]],
        ["Which kind of energy is developing fast in Armenia?", ["Solar", "Coal", "Oil", "Peat"]],
      ],
    },
    "armenia-modern-world": {
      objectives: ["Analyse Armenia's geopolitical position", "Name the main challenges and opportunities for the country's development", "Explain the role of Armenia–diaspora ties", "Discuss the citizen's role in the country's future"],
      content: `## Geopolitical position

Armenia is a small landlocked country in the South Caucasus, at the crossroads of Europe and Asia. It borders Georgia, Iran, Turkey and Azerbaijan. The borders with Turkey and Azerbaijan were closed for many years, which limited transport links.

Armenia's foreign policy seeks to balance relations with different powers and organisations. In recent years there have been big changes in the region (the 2020 war, the forced displacement of the Armenian population of Nagorno-Karabakh in 2023, the peace process). For up-to-date and accurate information about events, follow reliable sources.

## Challenges

| Sphere | Challenge |
|---|---|
| **Security** | border security, establishing peace |
| **Demography** | emigration, falling birth rate, ageing population |
| **Economy** | dependence on foreign markets, the development gap between the provinces and Yerevan |
| **Environment** | preserving Lake Sevan, the impact of mining |
| **Institutions** | fighting corruption, independence of the judiciary |

## Opportunities

- **Educated** human capital and a fast-growing **IT industry**,
- **Tourism**: historical monuments, nature, cuisine,
- **Renewable energy**,
- The **diaspora**: investment, knowledge, connections,
- High-value farm products (wine, brandy, dried fruit).

## Armenia and the diaspora

Most of the world's Armenians live outside Armenia, in Russia, the USA, France, the Middle East and elsewhere. The diaspora supports Armenian schools, churches and cultural centres, and helps Armenia through charity and investment. There are **repatriation** programmes.

## The citizen's role

The country's future depends on its citizens:

- Getting a good education and becoming a specialist,
- Taking part in elections and public life,
- Preserving the Armenian language, culture and historical memory,
- Respecting the law and fighting corruption,
- Being tolerant and ready for dialogue.

## Exercises

1. Which countries does Armenia border?
2. Name two challenges to Armenia's development.
3. Name two opportunities for the country's development.
4. How does the diaspora support Armenia?
5. How can a young person contribute to the country's development?

## Answers

1. Georgia, Iran, Turkey, Azerbaijan.
2. For example, emigration and security.
3. For example, the IT industry and tourism.
4. Through charity, investment, knowledge and connections.
5. Through education, professional work, taking part in public life.`,
      quiz: [
        ["In which region is Armenia?", ["The South Caucasus", "Central Asia", "The Balkans", "Mesopotamia"]],
        ["Which is a demographic challenge for Armenia?", ["Emigration", "Very fast population growth", "A sharp rise in the birth rate", "A younger population"]],
        ["Which is an economic opportunity for Armenia?", ["The IT industry", "Oil reserves", "Sea ports", "Diamond mines"]],
        ["Which country does not border Armenia?", ["Russia", "Georgia", "Iran", "Turkey"]],
        ["How does the diaspora help?", ["Through investment and charity", "By closing borders", "By raising taxes", "It does not"]],
      ],
    },
    "choosing-life-path": {
      objectives: ["Analyse the factors in choosing a profession", "Set personal goals using the SMART method", "Get to know the educational paths after school", "Assess consumer rights and responsible decisions"],
      content: `## Choosing a profession

A good choice lies where three questions meet:

| Question | What to do |
|---|---|
| **What I want** | interests, values, dreams |
| **What I can do** | abilities, marks, skills |
| **What is needed** | demand in the labour market, pay, prospects |

**Mistakes**: choosing only what your friends choose, only what your parents want, only for "prestige", or without knowing what that specialist actually does.

What helps: career guidance tests, talking to specialists, internships, volunteering, open days at universities and colleges.

## Paths after school

- **University**: in Armenia admission is mainly based on the results of the unified exams; there are free (state-funded) and fee-paying places,
- **College**: secondary vocational education, a quicker route into work,
- **Vocational** schools,
- **Studying abroad**: scholarships, exchange programmes,
- **Military service**: in Armenia it is compulsory for young men aged 18–27; in some cases it can be deferred for study.

## SMART goals

| Letter | Meaning | Example |
|---|---|---|
| **S**pecific | specific | get into the faculty of informatics |
| **M**easurable | measurable | score 18 points or more in the maths exam |
| **A**chievable | achievable | I have a good enough foundation and time |
| **R**elevant | important to me | linked to my dream |
| **T**ime-bound | with a deadline | by next summer |

## Consumer rights

Once you are an adult, you will sign contracts and buy goods and services yourself. Armenia has the Law "On Consumer Rights Protection":

- You have the right to receive goods that are of good **quality** and **safe**,
- You have the right to **information** about a product's price, ingredients and maker,
- Faulty goods can be **exchanged** or returned (keep the receipt),
- Read a contract before signing it.

## Responsible decisions

Coming of age also means **responsibility** for your own decisions: health, money, relationships, civic duty. It is worth remembering that learning from mistakes is also part of the journey, and a choice can always be adjusted.

## Exercises

1. Which three questions help you choose a profession?
2. Name two mistakes in choosing a profession.
3. Write one SMART goal for yourself.
4. What rights does a consumer have?
5. Why is it important to keep the receipt for a purchase?

## Answers

1. What do I want, what can I do, what does the market need?
2. For example, choosing only what your friends choose, or without knowing what the profession involves.
3. For example: "Reach level B2 in English by June by studying for 30 minutes a day".
4. The right to good-quality, safe goods, to information, and to exchange or return faulty goods.
5. It proves the purchase, which is needed to exchange or return faulty goods.`,
      quiz: [
        ["What does the letter T in SMART stand for?", ["Time-bound", "Technical", "Theoretical", "Team"]],
        ["Which is a mistake in choosing a profession?", ["Choosing only what your friends choose", "Talking to specialists", "Doing an internship", "Studying the labour market"]],
        ["Which institution gives secondary vocational education?", ["A college", "A nursery", "A primary school", "Postgraduate study"]],
        ["What does a consumer have the right to?", ["Information about a product", "Free goods", "Always returning any product for no reason", "Setting the price themselves"]],
        ["Why read a contract before signing it?", ["To know your rights and duties", "Because it looks nice", "To pass the time", "There is no need to read it"]],
      ],
    },
  },
};
