import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The history of AI, machine learning, neural networks, bias.",
    "Project planning, software design, IT careers and Armenia's IT industry.",
  ],
  lessons: {
    "ai-intro": {
      objectives: ["Define artificial intelligence", "Describe the main stages in the development of AI", "Distinguish narrow and general AI", "Give examples of AI in everyday life"],
      content: `## Definition

**Artificial intelligence** (AI) is a field of computer science that creates programs to carry out tasks that usually need a human mind: recognising images, understanding speech, translating, playing games, making decisions.

## History

| Year | Event |
|---|---|
| 1950 | **Alan Turing** proposes the "Turing test": can a machine be indistinguishable from a person in conversation |
| 1956 | The Dartmouth conference: the term "artificial intelligence" is used for the first time (John McCarthy) |
| 1970s, 1980s | expectations were not met and funding was cut ("AI winters") |
| 1997 | IBM's **Deep Blue** beats world chess champion Garry Kasparov |
| 2012 | deep neural networks sharply improve image recognition |
| 2016 | **AlphaGo** beats Lee Sedol, one of the champions of the game of Go |
| 2020s | large language models that write texts and code and answer questions |

## Kinds

- **Narrow AI** does one particular thing well (translation, face recognition). All of today's systems are of this type or close to it.
- **General AI** could, like a person, learn any task. It does not exist yet, and scientists argue about when and how it might appear.

## Two approaches

| Approach | How it works | Example |
|---|---|---|
| **Rules** | a programmer writes "if... then..." rules | expert systems, simple chatbots |
| **Learning from data** | the program finds patterns in examples by itself | spam filter, voice assistants |

## AI in everyday life

Search engines, recommendations on YouTube and in shops, voice assistants, machine translation, spam filters, photo enhancement on phones, analysis of medical scans, self-driving cars.

## Limitations

AI systems can be **confidently wrong**, "make up" facts and repeat the bias in their data. For important decisions (medicine, courts) human oversight is essential. When you use text created by AI, check the facts and say that you used AI.

## Exercises

1. What does the Turing test check?
2. In which year was the term "artificial intelligence" first used?
3. How is narrow AI different from general AI?
4. Name three applications of AI that you use.
5. Why do you need to check the facts that AI gives?

## Answers

1. Whether a machine can answer in a conversation so that it cannot be told apart from a person.
2. 1956
3. Narrow AI solves one particular task; general AI could learn any task (it does not exist yet).
4. For example, a translator, video recommendations, a spam filter.
5. AI can confidently give wrong or made-up information.`,
      quiz: [
        ["Who proposed a test of machine \"thinking\" in 1950?", ["Alan Turing", "John von Neumann", "Charles Babbage", "Bill Gates"]],
        ["Which system beat Kasparov in 1997?", ["Deep Blue", "AlphaGo", "Watson", "Siri"]],
        ["What are today's AI systems mostly?", ["Narrow", "General", "Superintelligent", "Biological"]],
        ["Which is an application of AI?", ["A spam filter", "An ordinary calculator", "A floodlight", "A paper map"]],
        ["Which is a limitation of AI?", ["It can be confidently wrong", "It cannot run on a computer", "It is always right", "It only works in chess"]],
      ],
    },
    "machine-learning": {
      objectives: ["Explain how a model learns from data", "Distinguish supervised, unsupervised and reinforcement learning", "Split data into training and test sets", "Explain overfitting"],
      content: `## The idea

In an ordinary program a person writes the **rules**. In **machine learning** (ML) we give **examples**, and the algorithm finds the rules itself. The result is called a **model**.

An example is a spam filter: we give it thousands of emails labelled "spam" or "not spam", and the model learns to tell them apart.

## Kinds of learning

| Kind | Data | Example |
|---|---|---|
| **Supervised** | examples with the correct answers (labels) | classifying emails, predicting a flat's price |
| **Unsupervised** | no labels | grouping customers by similarity |
| **Reinforcement** | rewards and penalties for actions | games, robots |

Two tasks of supervised learning:

- **Classification**: the answer is a category (cat/dog),
- **Regression**: the answer is a number (a price).

## A simple example: nearest neighbour

There are fruits (mass in grams, colour from 0 to 10): apples (150, 8), (170, 7) and pears (180, 3), (200, 2). A new fruit is (160, 7): which does it look more like?

\`\`\`python
data = [((150, 8), "apple"), ((170, 7), "apple"),
        ((180, 3), "pear"), ((200, 2), "pear")]

def predict(x):
    best = None
    best_d = float("inf")
    for (w, c), label in data:
        d = ((w - x[0]) / 10) ** 2 + (c - x[1]) ** 2
        if d < best_d:
            best_d, best = d, label
    return best

print(predict((160, 7)))   # apple
\`\`\`

This is the **k-nearest neighbours** algorithm (k-NN) with k = 1. We divided the mass by 10 so that both features are on a similar scale.

## Training and testing

We split the data into:

- A **training** set (about 80%): the model learns from it,
- A **test** set (about 20%): we check it on new, unseen examples.

**Accuracy** = correct answers / all answers.

## Overfitting

**Overfitting** is when a model "learns by rote" the training data but works badly on new data: like a pupil who memorised the answers but did not understand the topic. More data and simpler models help.

## Exercises

1. How is ML different from ordinary programming?
2. What kind of task is predicting flat prices from past sales?
3. Why is the data split into training and test sets?
4. A model correctly guessed 85 out of 100 test examples. What is its accuracy?
5. What is overfitting?

## Answers

1. In ML the rules are found by the algorithm from examples, not written by a person.
2. Supervised learning, regression.
3. To check how the model works on new data.
4. 85%
5. When the model works well on the training data but badly on new data.`,
      quiz: [
        ["What does an ML model learn from?", ["Examples (data)", "Only rules written by a person", "Random numbers", "Electric current"]],
        ["Which kind of learning uses labelled data?", ["Supervised", "Unsupervised", "Reinforcement", "None"]],
        ["What is overfitting?", ["The model learns the training data by rote", "The model is very fast", "There is a lot of data", "The model does not work"]],
        ["Which is a classification task?", ["Cat or dog in a photo", "Tomorrow's temperature as a number", "The price of a flat", "The speed of a car"]],
        ["Where is reinforcement learning used?", ["In games and robots", "Only in spreadsheets", "In text editors", "In printers"]],
      ],
    },
    "neural-networks": {
      objectives: ["Describe how an artificial neuron works", "Explain layers and weights", "Describe learning by reducing error", "Give examples of deep learning applications"],
      content: `## The artificial neuron

It is inspired by the neurons of the brain, but is much simpler. A neuron:

1. receives inputs x₁, x₂, ...,
2. multiplies each by its own **weight** w₁, w₂, ...,
3. adds them up and adds a **bias** b,
4. passes the result through an **activation function**.

output = f(w₁·x₁ + w₂·x₂ + b)

## Example

Should we go for a walk? x₁ = sunny (1/0), x₂ = homework done (1/0). Weights: w₁ = 2, w₂ = 3, b = −4. Activation: if the sum > 0, the answer is "yes".

| x₁ | x₂ | sum | decision |
|---|---|---|---|
| 0 | 0 | −4 | no |
| 1 | 0 | −2 | no |
| 0 | 1 | −1 | no |
| 1 | 1 | 1 | yes |

This neuron works like AND.

\`\`\`python
def neuron(x1, x2, w1=2, w2=3, b=-4):
    s = w1 * x1 + w2 * x2 + b
    return 1 if s > 0 else 0
\`\`\`

## The network

Neurons are arranged in **layers**:

- The **input** layer: the data (for example, the pixels of a picture),
- **Hidden** layers: calculations,
- The **output** layer: the answer ("cat" 0.92, "dog" 0.08).

Networks with many hidden layers are called **deep**, and training them is called **deep learning**.

## How a network learns

1. The network gives an answer,
2. We compare it with the correct one and calculate the **error**,
3. We change the weights slightly in the direction that reduces the error (**gradient descent**),
4. We repeat for millions of examples.

The method of passing the error back from the output to the input is called **backpropagation**.

## Applications

| Kind of network | What for |
|---|---|
| Convolutional (CNN) | images, medical scans |
| Recurrent (RNN) | sequences (an older approach) |
| Transformers | text, translation, language models |

Large networks have billions of weights and are trained on huge amounts of data on powerful computers.

## Exercises

1. What is a weight in a neuron?
2. Calculate the output of the neuron above with x₁ = 1, x₂ = 1, b = −6.
3. What is a deep neural network?
4. What does gradient descent do?
5. Which networks are used for image recognition?

## Answers

1. A number that shows how important an input is.
2. 2 + 3 − 6 = −1, output 0 (no).
3. A network with many hidden layers.
4. It changes the weights in small steps to reduce the error.
5. Convolutional (CNN).`,
      quiz: [
        ["What does a neuron do with its inputs?", ["Multiplies them by weights and adds them up", "Deletes them", "Sorts them", "Saves them to a file"]],
        ["Which layer gives the network's answer?", ["The output layer", "The input layer", "A hidden layer", "The first layer"]],
        ["What is deep learning?", ["Training networks with many layers", "Exploring the sea", "Learning without data", "Programming by hand"]],
        ["How does a network learn?", ["It changes its weights to reduce the error", "It adds new computers", "It deletes data", "It gives random answers"]],
        ["Which architecture underlies modern language models?", ["The transformer", "The half adder", "RLE", "The stack"]],
      ],
    },
    "ai-ethics-bias": {
      objectives: ["Explain how bias gets into data", "Analyse examples of unfair decisions", "Discuss the risks to privacy and of fake content", "Set out the principles of responsible AI"],
      content: `## Bias

A model learns from the data we give it. If the data is **biased**, the model will repeat and even amplify that bias.

| Source | Example |
|---|---|
| **Unrepresentative data** | a face recognition system trained mainly on photos of one group works badly for others |
| **Historical injustice** | a hiring model learned from old decisions in which one group was accepted less often |
| **The wrong goal** | a network optimises the number of views and promotes sensational, fake content |

A well-known case is a large company's experimental CV-scoring system which, according to media reports, gave lower scores to women's CVs and was shut down (2018).

## How to reduce it

- Check what the data contains: are all groups represented?
- Measure accuracy **separately** for each group.
- Keep human oversight in important decisions.
- Explain why the model made a decision (**explainability**).

## Privacy

AI systems need a lot of data. The questions are: who agreed to their photos and texts being used, how are they protected, can they be deleted?

## Fake content

**Deepfakes** are fake videos, voices or images created by AI in which a real person "says" something they never said. How to check:

- Find the original source and check it in reliable media,
- Look out for unnatural details (hands, shadows, lip movements),
- Be suspicious of very emotional messages that rush you.

## Responsible AI

In 2024 the European Union adopted the **AI Act**, which divides systems by level of risk and sets strict requirements for high-risk uses.

The main principles: **fairness**, **transparency**, **privacy**, **safety**, **human oversight**, **accountability**.

## Exercises

1. How can a model become biased?
2. Why is it important to measure accuracy separately for each group?
3. What is a deepfake?
4. Name two ways to spot a fake video.
5. List three principles of responsible AI.

## Answers

1. By learning from biased or unrepresentative data.
2. A high overall accuracy can hide the fact that the model works badly for some group.
3. A fake video, voice or image created by AI.
4. Check the original source, notice unnatural details.
5. For example, fairness, transparency, human oversight.`,
      quiz: [
        ["Where does AI bias often come from?", ["The training data", "The colour of the screen", "The keyboard", "The internet speed"]],
        ["What is a deepfake?", ["A fake video or voice created by AI", "A kind of virus", "A compression format", "A database"]],
        ["Which is a principle of responsible AI?", ["Transparency", "Secret decisions", "No checking", "Only speed"]],
        ["What did the EU adopt in 2024?", ["The AI Act", "A new programming language", "A ban on the internet", "A new processor"]],
        ["Why is human oversight needed in important decisions?", ["AI can be wrong or unfair", "AI is very slow", "The law bans computers", "It is cheaper"]],
      ],
    },
    "project-planning": {
      objectives: ["State the problem and the target user", "Write requirements and user stories", "Divide the work into tasks and estimate time", "Choose a minimum viable product (MVP)"],
      content: `## The final project

In these lessons you will plan and design your own program: a website, a game, a mobile app, a data analysis or a bot. The main thing is to solve a **real problem**.

## 1. The problem

A good problem is specific: "My class often forgets homework deadlines", not "I want to make an app".

Answer:

- **Who** it is for (the target user),
- **What** their problem is,
- **How** they solve it now,
- **Why** your solution will be better.

## 2. Requirements

A **user story**: "As a [who], I want [what], so that [why]".

- As a pupil, I want to see all the assignments for this week, so that I do not forget anything.
- As a teacher, I want to add an assignment, so that everyone sees it.

## 3. MVP

A **Minimum Viable Product** is the simplest version that is already useful. Start with it, then add more.

| Must have (MVP) | Nice to have | Later |
|---|---|---|
| list of assignments | reminders | mobile app |
| add/delete | filter by subject | link to the school website |

## 4. Tasks and time

Break the work into small steps (each no more than a few hours) and lay them out on a **Kanban** board: "To do", "In progress", "Done".

When estimating time, add a margin: almost every project takes longer than expected.

## 5. Risks

| Risk | What to do |
|---|---|
| I do not know the technology I need | start with a small trial project |
| There will not be enough time | cut back to the MVP |
| A teammate falls ill | keep the code in git, keep notes |

## Exercises

1. State one problem in your school or neighbourhood that a program could solve.
2. Write three user stories for this problem.
3. What is an MVP?
4. Why divide the work into small tasks?
5. Name one risk in your project and a way of dealing with it.

## Answers

1. For example: "In the school library it is hard to find out which books are available".
2. For example: "As a pupil, I want to search for a book by title, so that I can find out whether it is available".
3. The simplest version that already solves the main problem.
4. To make it easier to estimate time, track progress and share out the work.
5. For example: "I will not finish in time", solution: "I will stick to the MVP".`,
      quiz: [
        ["What is an MVP?", ["A minimum viable product", "The most expensive version", "The final version with every feature", "A programming language"]],
        ["How does a user story begin?", ["\"As a [who], I want...\"", "\"The program must...\"", "\"The code is written...\"", "\"The server works...\""]],
        ["Which columns does a simple Kanban board have?", ["To do, In progress, Done", "Red, Green, Blue", "Monday, Tuesday", "A, B, C"]],
        ["Why is it good to start a project from a problem rather than a technology?", ["The result will be useful to real people", "The code will be shorter", "There is no need to test", "No plan is needed"]],
        ["What should you do if there is not enough time?", ["Cut back to the MVP", "Abandon the project", "Add new features", "Skip testing"]],
      ],
    },
    "capstone-design": {
      objectives: ["Create interface sketches (wireframes)", "Design the data structure", "Choose an architecture and technologies", "Plan testing and the presentation"],
      content: `## Interface sketch

A **wireframe** is a simple diagram of a page without colours or pictures: where the heading, the list and the buttons go. You can draw it on paper or in Figma or Excalidraw.

Rules of a good interface:

- **Simplicity**: one screen, one main action,
- **Consistency**: the same buttons look the same everywhere,
- **Feedback**: the program shows that an action has been done,
- **Accessibility**: enough contrast, font size, works with the keyboard.

## Data structure

An example for an assignments app:

| Table | Fields |
|---|---|
| users | id, name, role (pupil/teacher) |
| subjects | id, name |
| tasks | id, subject_id, title, due_date, created_by |
| done | user_id, task_id |

\`subject_id\` and \`created_by\` are foreign keys. The \`done\` table links users and assignments (many-to-many).

## Architecture

\`\`\`
Browser (HTML, CSS, JS)
        ↕  HTTP / JSON
Server (Python or JavaScript)
        ↕  SQL
Database (SQLite, PostgreSQL)
\`\`\`

| Part | Called | Example technologies |
|---|---|---|
| What the user sees | **frontend** | HTML, CSS, JavaScript, React |
| Logic and data | **backend** | Python (Flask, Django), Node.js |
| Storage | **database** | SQLite, PostgreSQL |

For a simpler project, one HTML page and JS that stores the data in the browser are enough.

## API design

| Method | Path | Meaning |
|---|---|---|
| GET | /tasks | all assignments |
| POST | /tasks | add one |
| DELETE | /tasks/5 | delete number 5 |

## Testing

- Tests for the important functions,
- Trying it out with 3–5 real users: watch where they struggle,
- Checking on different devices (phone, computer).

## Presentation

1. The problem (30 seconds),
2. Demonstration (a live demo),
3. How it works,
4. What the difficulties were and what you learned,
5. Next steps.

## Exercises

1. What is a wireframe?
2. Name two rules of a good interface.
3. How is the frontend different from the backend?
4. Why is the \`done\` table needed?
5. Which HTTP method and path would you use to add a new assignment?

## Answers

1. A simple diagram of a page showing where the elements go, without design details.
2. For example, simplicity and feedback.
3. The frontend is what the user sees; the backend is the server's logic and data.
4. It stores which user has completed which assignment (a many-to-many relationship).
5. POST /tasks`,
      quiz: [
        ["What is the frontend?", ["What the user sees", "The database", "The server's disk", "A network cable"]],
        ["Which is a rule of a good interface?", ["Consistency", "Lots of colours everywhere", "Hidden buttons", "Tiny letters"]],
        ["Which tool is handy for interface sketches?", ["Figma", "SQLite", "git", "Python"]],
        ["Which method gets all the assignments?", ["GET /tasks", "POST /tasks", "DELETE /tasks", "PUT /users"]],
        ["Why test with real users?", ["To see where they struggle", "To shorten the code", "To delete the database", "There is no need"]],
      ],
    },
    "it-careers-armenia": {
      objectives: ["Describe the main IT professions", "Tell the history of Armenian computing", "Name the features of Armenia's IT industry", "Plan your own educational path"],
      content: `## Professions

| Profession | What they do |
|---|---|
| **Frontend developer** | interfaces of websites and apps |
| **Backend developer** | servers, APIs, databases |
| **Mobile developer** | apps for Android and iOS |
| **QA engineer** | testing and quality assurance |
| **DevOps engineer** | servers, cloud systems, automation |
| **Data analyst / data scientist** | conclusions from data, ML models |
| **ML / AI engineer** | artificial intelligence systems |
| **Cybersecurity specialist** | protection against attacks |
| **UX/UI designer** | convenient and attractive interfaces |
| **Product manager** | decides what to build and why |
| **Chip designer** | designing microchips |

For all of them **soft skills** matter too: teamwork, communication, English, the ability to keep learning.

## Armenia and computing

- In 1956 the **Yerevan Research Institute of Mathematical Machines** (YerNIIMM) was founded in Yerevan; its first director was the mathematician **Sergey Mergelyan**.
- The institute created the **Razdan** and **Nairi** series of computers, which were used all over the USSR.
- In Soviet times Armenia was one of the important centres of military and civilian electronics.

## The industry today

- International companies have development centres here (for example, **Synopsys**, which has worked in Armenia since 2004 and trains specialists together with universities).
- Companies founded in Armenia or with Armenian founders include **Picsart**, **Krisp** and **ServiceTitan**.
- The **TUMO** Center for Creative Technologies (2011) offers teenagers free programmes: programming, animation, game making, robotics.
- In recent years the industry has grown fast, and IT has become one of the country's important export sectors. Look for the latest figures in official statistics (armstat.am).

## Where to study

- **Universities**: YSU (Faculty of Informatics and Applied Mathematics), the National Polytechnic University of Armenia, the American University of Armenia, the Russian-Armenian University and others.
- **Outside school**: TUMO, programming clubs, online courses.
- **Competitions**: informatics olympiads (including the international IOI), hackathons.
- **Portfolio**: your own projects on GitHub often matter more than marks.

## Exercises

1. What does a QA engineer's work consist of?
2. Who was the first director of the Yerevan Institute of Mathematical Machines?
3. Name two series of computers created in Yerevan.
4. What is TUMO?
5. Why is a portfolio important?

## Answers

1. Testing programs and assuring their quality.
2. Sergey Mergelyan.
3. Razdan and Nairi.
4. A centre for creative technologies for teenagers (founded in 2011).
5. It shows your real skills to employers and universities.`,
      quiz: [
        ["Who designs how easy a website's interface is to use?", ["A UX/UI designer", "A DevOps engineer", "A chip designer", "An accountant"]],
        ["In which year was the Yerevan Institute of Mathematical Machines founded?", ["1956", "1991", "1921", "2001"]],
        ["Which computers were created in Yerevan?", ["Nairi", "Elbrus", "ENIAC", "Apple II"]],
        ["What is TUMO?", ["A centre for creative technologies for teenagers", "A bank", "A programming language", "An operating system"]],
        ["Which is a soft skill?", ["Teamwork", "SQL", "Python", "HTML"]],
      ],
    },
  },
};
