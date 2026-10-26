import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Dynamic programming and Dijkstra's algorithm.",
    "JavaScript, HTTP and APIs, cryptography.",
    "Software engineering, ethics and law.",
  ],
  lessons: {
    "dynamic-programming": {
      objectives: ["Explain the idea of overlapping subproblems", "Use memoisation", "Solve a problem with a bottom-up table", "Solve the staircase and coin problems"],
      content: `## The problem

Recall the recursive Fibonacci function. \`fib(5)\` calls \`fib(4)\` and \`fib(3)\`, and \`fib(4)\` calls \`fib(3)\` again... The same subproblems are solved many times, and the time grows exponentially.

**Dynamic programming** (DP) solves each subproblem **once** and **remembers** the result.

## Memoisation (top-down)

\`\`\`python
memo = {}
def fib(n):
    if n < 2:
        return n
    if n not in memo:
        memo[n] = fib(n - 1) + fib(n - 2)
    return memo[n]

print(fib(80))   # fast
\`\`\`

## Table (bottom-up)

\`\`\`python
def fib(n):
    dp = [0, 1]
    for i in range(2, n + 1):
        dp.append(dp[i - 1] + dp[i - 2])
    return dp[n]
\`\`\`

In both cases the complexity is **O(n)** instead of O(2ⁿ).

## The staircase problem

In how many ways can you climb n steps if each time you go up 1 or 2 steps?

The last move is either 1 or 2: **ways(n) = ways(n − 1) + ways(n − 2)**, ways(1) = 1, ways(2) = 2.

| n | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| ways | 1 | 2 | 3 | 5 | 8 |

## The coin problem

What is the smallest number of coins that makes 6 units, if there are coins of 1, 3 and 4?

The "greedy" approach (always take the largest) gives 4 + 1 + 1 = 3 coins, but the correct answer is 3 + 3 = **2**. DP finds the correct one:

\`\`\`python
def min_coins(coins, amount):
    INF = float("inf")
    dp = [0] + [INF] * amount
    for s in range(1, amount + 1):
        for c in coins:
            if c <= s and dp[s - c] + 1 < dp[s]:
                dp[s] = dp[s - c] + 1
    return dp[amount]

print(min_coins([1, 3, 4], 6))   # 2
\`\`\`

## When to use DP

1. The problem breaks down into **overlapping** subproblems.
2. The best solution is built from the best solutions of the subproblems.

## Exercises

1. Why is the simple recursive Fibonacci function slow?
2. What is memoisation?
3. In how many ways can you climb 6 steps (in steps of 1 or 2)?
4. Why does the "greedy" approach go wrong for coins of 1, 3, 4?
5. What is the complexity of Fibonacci with DP?

## Answers

1. It calculates the same subproblems many times.
2. Storing results already calculated, so as not to calculate them again.
3. 13
4. For 6 it gives 3 coins (4+1+1), while the best option is 2 (3+3).
5. O(n)`,
      quiz: [
        ["What does dynamic programming do?", ["Stores the results of subproblems", "Solves the problem at random", "Removes recursion", "Sorts data"]],
        ["In how many ways can you climb 4 steps in steps of 1 or 2?", ["5", "4", "3", "8"]],
        ["What is the smallest number of coins needed for 6 (1, 3, 4)?", ["2", "3", "1", "6"]],
        ["What is memoisation?", ["Storing calculated results", "Compressing a file", "Encryption", "Removing a loop"]],
        ["What is the complexity of Fibonacci with DP?", ["O(n)", "O(2ⁿ)", "O(n²)", "O(1)"]],
      ],
    },
    "dijkstra": {
      objectives: ["Explain the shortest path problem in a weighted graph", "Run Dijkstra's algorithm by hand", "Implement it in Python with heapq", "Name applications (navigation, networks)"],
      content: `## The problem

In a weighted graph the edges have a **length** (km, minutes, price). BFS counts the number of edges, but we need the minimum **total length**.

**Edsger Dijkstra** (the Netherlands) invented an algorithm in 1956 that works in graphs with **non-negative** weights.

## The idea

1. The distance to the starting vertex is 0; to all the others it is ∞.
2. Choose the nearest of the **unvisited** vertices.
3. Update the distances to its neighbours: if \`dist[v] + w < dist[u]\`, then \`dist[u] = dist[v] + w\`.
4. Mark the vertex as visited and repeat.

## Example

Edges: A–B 4, A–C 1, C–B 2, B–D 1, C–D 5.

| Step | Chosen | A | B | C | D |
|---|---|---|---|---|---|
| start | | 0 | ∞ | ∞ | ∞ |
| 1 | A | 0 | 4 | 1 | ∞ |
| 2 | C | 0 | **3** | 1 | 6 |
| 3 | B | 0 | 3 | 1 | **4** |
| 4 | D | 0 | 3 | 1 | 4 |

The shortest path from A to D: A → C → B → D, length 4.

## Python

\`\`\`python
import heapq

def dijkstra(graph, start):
    dist = {v: float("inf") for v in graph}
    dist[start] = 0
    heap = [(0, start)]
    while heap:
        d, v = heapq.heappop(heap)
        if d > dist[v]:
            continue
        for u, w in graph[v]:
            if d + w < dist[u]:
                dist[u] = d + w
                heapq.heappush(heap, (dist[u], u))
    return dist

graph = {
    "A": [("B", 4), ("C", 1)],
    "B": [("A", 4), ("C", 2), ("D", 1)],
    "C": [("A", 1), ("B", 2), ("D", 5)],
    "D": [("B", 1), ("C", 5)],
}
print(dijkstra(graph, "A"))   # A 0, B 3, C 1, D 4
\`\`\`

\`heapq\` is a **heap** (priority queue), which quickly gives the smallest element. The complexity is O((V + E) log V).

## Applications

Map navigation (Google Maps, Yandex Maps), routing packets on the internet (the OSPF protocol), logistics, moving characters in games (the A* algorithm is a development of Dijkstra's algorithm).

## Exercises

1. Why does BFS not find the shortest path in a weighted graph?
2. With what weights does Dijkstra's algorithm work incorrectly?
3. What does \`heapq.heappop\` do?
4. If the edge C–D in the example above were 1, what would the distance from A to D be?
5. Name two applications of Dijkstra's algorithm.

## Answers

1. BFS counts the number of edges, not the sum of their lengths.
2. With negative weights.
3. It takes the smallest element out of the heap.
4. 2 (A → C → D)
5. For example, map navigation and network routing.`,
      quiz: [
        ["What does Dijkstra's algorithm find?", ["Shortest paths in a weighted graph", "The longest path", "The number of vertices in a graph", "A sorted list"]],
        ["With which weights does Dijkstra's algorithm not work?", ["Negative", "Positive", "Whole numbers", "Decimals"]],
        ["Which vertex is chosen at each step?", ["The nearest unvisited one", "The farthest", "A random one", "The last in the list"]],
        ["Which structure speeds up Dijkstra's algorithm?", ["A heap (priority queue)", "A stack", "An ordinary queue", "A set"]],
        ["Who invented this algorithm?", ["Edsger Dijkstra", "Alan Turing", "Guido van Rossum", "Tony Hoare"]],
      ],
    },
    "javascript-basics": {
      objectives: ["Connect JavaScript to an HTML page", "Use variables, conditions and functions in JS", "Find elements in the DOM", "Handle a button click event"],
      content: `## JavaScript

**JavaScript** (JS) is a programming language that runs in the browser. It was created in 1995 (by Brendan Eich). HTML is the structure, CSS is the styling, JS is the **behaviour**: buttons, forms, games, animations. Despite the similar name, it is not related to the Java language.

## Connecting it

\`\`\`html
<button id="btn">Click me</button>
<p id="out"></p>
<script src="app.js"></script>
\`\`\`

## Basics

\`\`\`javascript
let count = 0;            // a variable that can change
const name = "Anya";      // a constant
console.log("Hello, " + name);

if (count > 5) {
  console.log("Lots");
} else {
  console.log("Few");
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

function square(x) {
  return x * x;
}
\`\`\`

| Python | JavaScript |
|---|---|
| \`print(x)\` | \`console.log(x)\` |
| indentation | curly braces \`{ }\` |
| \`and\`, \`or\`, \`not\` | \`&&\`, \`||\`, \`!\` |
| \`==\` | \`===\` (strict equality) |
| \`list\` | \`Array\` |
| \`dict\` | \`Object\` |

## The DOM and events

The **DOM** (Document Object Model) is the page's tree, which JS can change.

\`\`\`javascript
const btn = document.getElementById("btn");
const out = document.getElementById("out");
let clicks = 0;

btn.addEventListener("click", function () {
  clicks++;
  out.textContent = "You clicked " + clicks + " times";
});
\`\`\`

\`addEventListener\` links a function to an **event**: \`click\`, \`input\`, \`keydown\`, \`mouseover\`...

## Developer tools

In the browser, the F12 key opens **DevTools**: in the Console tab you can see errors and try out code.

## Exercises

1. What are the roles of HTML, CSS and JS?
2. How is \`let\` different from \`const\`?
3. What is the DOM?
4. How do you find the element \`id="title"\` in JS?
5. Which event happens when a button is clicked?

## Answers

1. HTML is the structure, CSS the styling, JS the behaviour.
2. A variable declared with \`let\` can be given a new value; one declared with \`const\` cannot.
3. The tree of the page's elements, which JS can read and change.
4. \`document.getElementById("title")\`
5. \`click\``,
      quiz: [
        ["Where does JavaScript usually run?", ["In the browser", "Only in a printer", "In the BIOS", "Only in Excel"]],
        ["What is the JS equivalent of print?", ["console.log", "echo", "printf", "write"]],
        ["What does addEventListener do?", ["Links a function to an event", "Adds CSS", "Deletes an element", "Opens a new page"]],
        ["Which operator means \"and\" in JS?", ["&&", "and", "||", "&"]],
        ["In which year was JavaScript created?", ["1995", "1975", "2005", "1985"]],
      ],
    },
    "http-apis-json": {
      objectives: ["Describe the request–response model", "Explain HTTP methods and status codes", "Read and write JSON", "Get data from an API in Python"],
      content: `## Client and server

When you open a website, your browser (the **client**) sends a **request** to the **server**, and the server sends back a **response**. The language they "speak" is **HTTP**. **HTTPS** is the same, but encrypted.

## URL

\`https://api.example.com/weather?city=Yerevan\`

| Part | Meaning |
|---|---|
| \`https\` | protocol |
| \`api.example.com\` | domain (server) |
| \`/weather\` | path (resource) |
| \`?city=Yerevan\` | parameters |

## Methods

| Method | Meaning |
|---|---|
| **GET** | get data |
| **POST** | send new data |
| **PUT** / **PATCH** | change |
| **DELETE** | delete |

## Status codes

| Code | Meaning |
|---|---|
| 200 | OK, all is well |
| 301 | the page has moved |
| 404 | not found |
| 403 | access forbidden |
| 500 | server error |

## API

An **API** (Application Programming Interface) is a "door" for programs: instead of a page for a person, the server returns **data**. Weather, exchange rate and map services have APIs.

## JSON

**JSON** is a text format for exchanging data, very similar to Python dictionaries and lists:

\`\`\`json
{
  "city": "Yerevan",
  "temp": 24,
  "sunny": true,
  "days": ["Mon", "Tue"]
}
\`\`\`

## In Python

\`\`\`python
import json
import urllib.request

url = "https://api.example.com/weather?city=Yerevan"
with urllib.request.urlopen(url) as r:
    data = json.loads(r.read())
print(data["city"], data["temp"])

text = json.dumps({"name": "Anya", "score": 9}, ensure_ascii=False)
\`\`\`

(The address is only an example: when working with a real API, read its documentation.) Many APIs require a **key** (an API key): it must not be published.

## Exercises

1. How is HTTP different from HTTPS?
2. Which method is used to get data?
3. What does the code 404 mean?
4. What is an API?
5. Write JSON describing a book: title, author and year.

## Answers

1. HTTPS encrypts the connection.
2. GET
3. The resource was not found.
4. An interface through which programs exchange data.
5. \`{"title": "Daredevils of Sassoun", "author": "folk epic", "year": 1873}\` (1873 is the year it was first written down).`,
      quiz: [
        ["What does the code 200 mean?", ["Success", "Not found", "Server error", "Forbidden"]],
        ["Which method deletes a resource?", ["DELETE", "GET", "POST", "PUT"]],
        ["What is JSON?", ["A text data format", "A programming language", "A browser", "A server"]],
        ["Who sends the request?", ["The client", "The server", "The printer", "The monitor"]],
        ["Why must you not publish an API key?", ["Others will use it in your name", "It will be deleted", "It is big", "It is ugly"]],
      ],
    },
    "cryptography": {
      objectives: ["Encrypt and decrypt with the Caesar cipher", "Distinguish symmetric and asymmetric encryption", "Explain hash functions", "Describe the idea of HTTPS and digital signatures"],
      content: `## The Caesar cipher

Julius Caesar replaced each letter with the letter 3 places further on in the alphabet: A → D, B → E...

\`HELLO\` → \`KHOOR\`

\`\`\`python
def caesar(text, k):
    result = ""
    for ch in text:
        if "A" <= ch <= "Z":
            result += chr((ord(ch) - 65 + k) % 26 + 65)
        else:
            result += ch
    return result

print(caesar("HELLO", 3))    # KHOOR
print(caesar("KHOOR", -3))   # HELLO
\`\`\`

Its weakness: there are only 25 keys, and they can all be tried. Besides, **frequency analysis** gives away the most frequent letter.

## Symmetric encryption

**The same key** is used to encrypt and decrypt. The modern standard is **AES**. It is fast, but there is a problem: how do you pass on the key safely?

## Asymmetric encryption

Each person has **two keys**:

- The **public** key is given to everyone; it is used to **encrypt**,
- The **private** key belongs only to the owner; it is used to **decrypt**.

Like a postbox: anyone can drop a letter in, but only the key holder can open it. A well-known algorithm is **RSA** (1977), based on how hard it is to break large numbers into prime factors.

## HTTPS

The browser and the server use the asymmetric method to agree on a **symmetric** key, and then quickly encrypt the whole connection. The padlock icon in the address bar shows that the connection is encrypted (but does not guarantee that the site is honest).

## Hash functions

A **hash** calculates a fixed-length "fingerprint" from data. The data cannot be recovered from the hash, and a small change completely changes the hash.

\`\`\`python
import hashlib
print(hashlib.sha256("password123".encode()).hexdigest())
\`\`\`

Websites store password **hashes** (with salt), not the passwords themselves.

## Digital signature

The sender signs the message's hash with their **private** key; the recipient uses the **public** key to check that it really came from them and has not been changed. In Armenia, electronic documents can be signed with an ID card.

## Exercises

1. Encrypt the word \`CAT\` with the Caesar cipher, k = 3.
2. Why is the Caesar cipher weak?
3. In an asymmetric system, which key do you encrypt with when you want to send a secret message?
4. Why do websites store password hashes?
5. What does a digital signature prove?

## Answers

1. \`FDW\`
2. There are only 25 keys, and letter frequencies are preserved.
3. The recipient's public key.
4. If the database is stolen, the passwords do not become known straight away.
5. That the message was sent by the key's owner and has not been changed.`,
      quiz: [
        ["What does the letter A become in the Caesar cipher with k = 3?", ["D", "C", "B", "Z"]],
        ["Which algorithm is symmetric?", ["AES", "RSA", "SHA-256", "HTTP"]],
        ["Which key must be kept secret?", ["The private key", "The public key", "Both are public", "Neither"]],
        ["What is a hash function?", ["A fixed-length fingerprint of data", "A compression algorithm", "A programming language", "A password"]],
        ["What does the padlock in the address bar show?", ["The connection is encrypted", "The site is always honest", "The site is free", "The page is fast"]],
      ],
    },
    "software-engineering": {
      objectives: ["Describe the software life cycle", "Use the basic git commands", "Write simple tests", "Explain teamwork methods (Agile)"],
      content: `## The software life cycle

1. **Requirements**: what the program must do,
2. **Design**: structure, data, interface,
3. **Implementation**: the code,
4. **Testing**: finding bugs,
5. **Deployment**: making it available to users,
6. **Maintenance**: fixes and new features.

## Agile

In the old "waterfall" model the stages happened once, one after another. In the **Agile** method the team works in short **sprints** (1–4 weeks): after each sprint there is a working version, and the customer can change the plan. Well-known forms are **Scrum** and **Kanban**.

## Version control: git

**Git** stores the history of every change to the code and lets many people work together. It was created by **Linus Torvalds** in 2005.

| Command | Meaning |
|---|---|
| \`git init\` | create a repository |
| \`git add file.py\` | stage a change |
| \`git commit -m "Description"\` | save a step in the history |
| \`git log\` | view the history |
| \`git branch new-feature\` | create a branch |
| \`git merge new-feature\` | merge a branch |
| \`git push\` / \`git pull\` | send to / get from a remote repository (GitHub) |

Branches let you try a new idea without breaking the working version.

## Testing

A **unit test** checks one function.

\`\`\`python
def average(a):
    return sum(a) / len(a)

def test_average():
    assert average([2, 4]) == 3
    assert average([5]) == 5

test_average()
print("All tests passed")
\`\`\`

What happens with \`average([])\`? Division by zero. Good tests also check **edge cases**: an empty list, negative numbers, very large data.

## Clean code

- Clear names (\`total_price\`, not \`tp\`),
- Short functions, each doing one job,
- Comments explain **why**, not what,
- Code review by colleagues.

## Exercises

1. List at least four stages of the software life cycle.
2. What is the main difference between Agile and the waterfall model?
3. Which command saves a change in the git history?
4. Why are branches needed?
5. Write an edge case for the \`average\` function.

## Answers

1. Requirements, design, implementation, testing, deployment, maintenance.
2. Work happens in short repeated cycles, and the plan can change.
3. \`git commit\`
4. To develop new features without breaking the main version.
5. An empty list: \`average([])\`.`,
      quiz: [
        ["What is git?", ["A version control system", "A programming language", "A browser", "A database"]],
        ["Which command creates a new branch?", ["git branch", "git commit", "git log", "git init"]],
        ["What is a sprint in Agile?", ["A short work cycle", "A fast computer", "A program bug", "A kind of test"]],
        ["What does a unit test check?", ["One function or part", "The whole internet", "Only the design", "Only the server"]],
        ["Who created git?", ["Linus Torvalds", "Bill Gates", "Guido van Rossum", "Tim Berners-Lee"]],
      ],
    },
    "digital-ethics-law": {
      objectives: ["Explain copyright and licences", "Describe personal data protection", "Recognise cybercrimes", "Discuss questions of digital ethics"],
      content: `## Copyright

Programs, music, photos and texts are **works** protected by law. Copying or distributing them without permission is **piracy**.

| Kind of licence | Meaning |
|---|---|
| **Proprietary** | paid or restricted use (Windows, Photoshop) |
| **Freeware** | free, but the code is closed |
| **Open source** | the code is open and can be changed (GPL, MIT, Apache) |
| **Creative Commons** | texts, pictures, music on stated conditions (for example, credit the author) |
| **Public domain** | free use (old works) |

When quoting, always give the source. Passing off someone else's work as your own is **plagiarism**.

## Personal data

Personal data means a name, address, phone number, photo, health information, location. Armenia has the Law "On the Protection of Personal Data" (2015), and Europe has the **GDPR** (2018).

The main principles:

- data is collected **with consent** and for a specific purpose,
- a person has the right to know what data about them is stored,
- data must be protected.

## Cybercrimes

| Offence | Example |
|---|---|
| Unauthorised access | hacking someone else's account |
| Fraud | phishing, fake shops |
| Spreading malware | viruses, ransomware |
| Cyberbullying | insults, threats, sharing personal photos |

All of this is punishable by law, even if it is done "as a joke". If you are cyberbullied, keep the evidence (screenshots), block the bully and go to an adult.

## Ethical questions

- **The digital divide**: not everyone has the internet and devices.
- **Digital footprint**: what is published stays for a long time.
- **Fairness of algorithms**: programs can be unfair if they were trained on biased data.
- **The environment**: data centres use a lot of energy, and electronic waste is dangerous.

## Exercises

1. What is an open-source licence?
2. Can you use a photo found on the internet in an advert without permission?
3. What is the GDPR?
4. What should you do if you or a friend are being cyberbullied?
5. What is plagiarism?

## Answers

1. A licence that allows you to view, change and distribute a program's code.
2. No, unless the licence allows it.
3. The European Union regulation on the protection of personal data.
4. Keep the evidence, block, go to an adult or the police.
5. Passing off someone else's work as your own.`,
      quiz: [
        ["Which licence is open?", ["GPL", "The Windows licence", "A closed contract", "A postage stamp"]],
        ["Which of these is personal data?", ["A phone number", "A weather forecast", "A maths formula", "A city's population"]],
        ["What is software piracy?", ["Illegal copying and distribution", "Buying a program", "Updating a program", "Deleting a program"]],
        ["What is cyberbullying?", ["Insults and threats online", "A programming method", "Data compression", "A network protocol"]],
        ["What does a Creative Commons licence often require?", ["Crediting the author", "Paying every time", "Deleting the file", "Never using it"]],
      ],
    },
  },
};
