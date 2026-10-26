import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Classes and objects, stacks and queues, merge sort and quicksort, graphs.",
    "Logic gates, the processor, operating systems, compression.",
  ],
  lessons: {
    "oop-classes": {
      objectives: ["Explain the difference between a class and an object", "Create a class with an __init__ method", "Write methods and use self", "Explain inheritance and encapsulation"],
      content: `## The idea

**Object-oriented programming** (OOP) builds a program out of **objects** that combine **data** (properties) and **actions** (methods).

- A **class** is a design, like the blueprint of a house.
- An **object** is a particular instance of a class, like a house that has been built.

## A class in Python

\`\`\`python
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
        self.scores = []

    def add_score(self, s):
        self.scores.append(s)

    def average(self):
        if not self.scores:
            return 0
        return sum(self.scores) / len(self.scores)

anya = Student("Anya", 10)
anya.add_score(9)
anya.add_score(10)
print(anya.name, anya.average())   # Anya 9.5
\`\`\`

- \`__init__\` is the **constructor**; it is called when an object is created,
- \`self\` is a reference to this object,
- \`self.name\` is a **property** of the object.

## Principles of OOP

| Principle | Meaning |
|---|---|
| **Encapsulation** | internal data is hidden; we work through methods |
| **Inheritance** | a new class gets the properties of an existing class |
| **Polymorphism** | different classes have a method with the same name but different behaviour |
| **Abstraction** | we show only what matters |

## Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
    def sound(self):
        return "..."

class Dog(Animal):
    def sound(self):
        return "Woof"

class Cat(Animal):
    def sound(self):
        return "Miaow"

for a in [Dog("Rex"), Cat("Tiddles")]:
    print(a.name, a.sound())
\`\`\`

This is also an example of polymorphism: \`sound()\` works differently.

## Exercises

1. How is a class different from an object?
2. When is \`__init__\` called?
3. What does \`self\` refer to?
4. Create a class \`Rectangle\` with the properties \`width\`, \`height\` and a method \`area()\`.
5. Which principle does Dog(Animal) show?

## Answers

1. A class is a design; an object is a particular instance of it.
2. When a new object is created.
3. The object whose method was called.
4. \`class Rectangle:\`, in \`__init__(self, w, h)\` write \`self.width = w\`, \`self.height = h\`, and \`def area(self): return self.width * self.height\`.
5. Inheritance.`,
      quiz: [
        ["What is an object?", ["A particular instance of a class", "A file name", "A kind of loop", "Only a variable type"]],
        ["Which method is the constructor in Python?", ["__init__", "__main__", "start", "new"]],
        ["What is inheritance?", ["A new class gets the properties of an existing class", "Deleting an object", "Copying a file", "Repeating a loop"]],
        ["Which principle hides internal data?", ["Encapsulation", "Polymorphism", "Inheritance", "Recursion"]],
        ["What is a function defined inside a class called?", ["A method", "A module", "A package", "A pointer"]],
      ],
    },
    "stack-and-queue": {
      objectives: ["Explain the LIFO and FIFO principles", "Implement a stack with a list", "Implement a queue with deque", "Give examples of applications"],
      content: `## Stack

**LIFO**: last in, first out. Like a pile of plates: we take from the top.

| Operation | Meaning |
|---|---|
| **push** | put on top |
| **pop** | take from the top |
| **peek** | look at the top element |

\`\`\`python
stack = []
stack.append("a")    # push
stack.append("b")
stack.append("c")
print(stack.pop())   # c
print(stack[-1])     # b (peek)
\`\`\`

**Applications**: the browser's "Back" button, "Ctrl+Z" (undo), the function call stack, checking brackets.

## Checking brackets

\`\`\`python
def balanced(s):
    pairs = {")": "(", "]": "[", "}": "{"}
    st = []
    for ch in s:
        if ch in "([{":
            st.append(ch)
        elif ch in pairs:
            if not st or st.pop() != pairs[ch]:
                return False
    return not st

print(balanced("(a[b]c)"))   # True
print(balanced("(]"))        # False
\`\`\`

## Queue

**FIFO**: first in, first out. Like a queue in a shop.

| Operation | Meaning |
|---|---|
| **enqueue** | add to the end |
| **dequeue** | take from the front |

\`\`\`python
from collections import deque
q = deque()
q.append("Anya")
q.append("Aram")
q.append("Lilit")
print(q.popleft())   # Anya
\`\`\`

We use \`deque\` because \`list.pop(0)\` is slow (O(n)), while \`popleft()\` is O(1).

**Applications**: a printer's job queue, requests to a server, breadth-first search in a graph.

## Exercises

1. What does LIFO mean?
2. We push 1, 2, 3 onto a stack in turn, then pop. What do we get?
3. We add 1, 2, 3 to a queue, then dequeue. What do we get?
4. Which structure suits an "Undo" function?
5. Is the string "([)]" balanced?

## Answers

1. Last In, First Out.
2. 3
3. 1
4. A stack.
5. No.`,
      quiz: [
        ["Which principle does a queue work on?", ["FIFO", "LIFO", "At random", "By size"]],
        ["Which operation takes the top element of a stack?", ["pop", "push", "enqueue", "append"]],
        ["Which structure does the browser's \"Back\" button use?", ["A stack", "A queue", "A set", "A dictionary"]],
        ["Why is deque better than list for a queue?", ["popleft() is fast", "It looks nicer", "It stores only numbers", "It sorts itself"]],
        ["Which example is a queue?", ["Printer jobs", "A pile of plates", "Ctrl+Z", "Function calls"]],
      ],
    },
    "efficient-sorting": {
      objectives: ["Explain the divide-and-conquer approach", "Describe merge sort", "Describe quicksort", "Compare sorting algorithms"],
      content: `## Divide and conquer

We **divide** a big problem into small parts, solve them (often recursively) and **combine** the results.

## Merge sort

1. Divide the list into two halves.
2. Sort each half recursively.
3. **Merge** the two sorted halves.

\`\`\`python
def merge_sort(a):
    if len(a) <= 1:
        return a
    mid = len(a) // 2
    left = merge_sort(a[:mid])
    right = merge_sort(a[mid:])
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    return result + left[i:] + right[j:]
\`\`\`

\`[5, 2, 4, 1]\` → \`[5, 2]\` and \`[4, 1]\` → \`[2, 5]\` and \`[1, 4]\` → \`[1, 2, 4, 5]\`

Its complexity is always **O(n log n)**, but it needs extra memory.

## Quicksort

1. Choose a **pivot** element.
2. Put the smaller ones on the left and the larger ones on the right.
3. Repeat for the parts.

\`\`\`python
def quick_sort(a):
    if len(a) <= 1:
        return a
    p = a[len(a) // 2]
    less = [x for x in a if x < p]
    equal = [x for x in a if x == p]
    more = [x for x in a if x > p]
    return quick_sort(less) + equal + quick_sort(more)
\`\`\`

On average O(n log n), but with a poor choice of pivot O(n²). In practice it is very fast. The algorithm was invented by **Tony Hoare** in 1959–1960.

## Comparison

| Algorithm | Average | Worst | Extra memory |
|---|---|---|---|
| Bubble | O(n²) | O(n²) | O(1) |
| Insertion | O(n²) | O(n²) | O(1) |
| Merge | O(n log n) | O(n log n) | O(n) |
| Quick | O(n log n) | O(n²) | O(log n) |

Python's \`sorted()\` uses **Timsort**, a mix of merge sort and insertion sort.

## Exercises

1. What is the divide-and-conquer approach?
2. What is the complexity of merge sort?
3. What is a pivot?
4. When is quicksort slow?
5. Merge the lists \`[1, 4, 7]\` and \`[2, 3, 9]\`.

## Answers

1. Divide the problem into parts, solve them and combine the results.
2. O(n log n)
3. The element around which the list is split.
4. When the pivot is always the smallest or the largest element: O(n²).
5. \`[1, 2, 3, 4, 7, 9]\``,
      quiz: [
        ["What is the complexity of merge sort?", ["O(n log n)", "O(n²)", "O(1)", "O(n)"]],
        ["What is the pivot in quicksort?", ["The element the list is split around", "The last index", "The length of the list", "An extra list"]],
        ["Which algorithm uses divide and conquer?", ["Merge sort", "Bubble sort", "Linear search", "None"]],
        ["Which algorithm is O(n²) in the worst case but fast in practice?", ["Quicksort", "Merge sort", "Binary search", "Timsort"]],
        ["Which algorithm does Python's sorted() use?", ["Timsort", "Bubble sort", "Quicksort", "Selection sort"]],
      ],
    },
    "graphs-bfs": {
      objectives: ["Define a graph, a vertex and an edge", "Represent a graph with an adjacency list", "Implement breadth-first search (BFS)", "Find the shortest path by number of edges"],
      content: `## Graph

A **graph** consists of **vertices** (points) and **edges** (lines that connect them).

| Example | Vertices | Edges |
|---|---|---|
| Roads | cities | roads |
| Social network | people | friendships |
| Internet | pages | links |
| Metro | stations | track sections |

A graph can be **directed** (connections go one way) or **undirected**, and **weighted** (edges have a length) or not.

## Adjacency list

\`\`\`python
graph = {
    "Yerevan": ["Ashtarak", "Abovyan", "Artashat"],
    "Ashtarak": ["Yerevan", "Gyumri"],
    "Abovyan": ["Yerevan", "Sevan"],
    "Artashat": ["Yerevan"],
    "Gyumri": ["Ashtarak"],
    "Sevan": ["Abovyan"],
}
\`\`\`

(This is a simplified diagram, not an accurate road map.)

## Breadth-first search (BFS)

BFS goes through the graph in **layers**: first all the neighbours, then the neighbours' neighbours. It uses a **queue**.

\`\`\`python
from collections import deque

def bfs(graph, start):
    dist = {start: 0}
    q = deque([start])
    while q:
        v = q.popleft()
        for u in graph[v]:
            if u not in dist:
                dist[u] = dist[v] + 1
                q.append(u)
    return dist

print(bfs(graph, "Yerevan"))
\`\`\`

The result is each city's distance from Yerevan **in edges**: Gyumri 2, Sevan 2, Ashtarak 1.

BFS finds the **shortest path** in an unweighted graph. Its complexity is O(V + E) (vertices + edges).

## Depth-first search (DFS)

DFS goes as deep as possible, then comes back. It uses a **stack** or recursion. It is handy for solving mazes and finding connected components.

## Exercises

1. What are the vertices and edges in a social network?
2. Which data structure does BFS use?
3. What does BFS find in an unweighted graph?
4. How many edges are there from Artashat to Sevan in the graph above?
5. What is the main difference between BFS and DFS?

## Answers

1. People and their friendships.
2. A queue.
3. The shortest path (by number of edges).
4. 3 (Artashat → Yerevan → Abovyan → Sevan).
5. BFS goes in layers (a queue); DFS goes deep first (a stack).`,
      quiz: [
        ["What is an edge in a graph?", ["A connection between two vertices", "The name of a vertex", "The size of the graph", "An element of a queue"]],
        ["Which structure does BFS use?", ["A queue", "A stack", "Only a set", "A file"]],
        ["What does BFS find in an unweighted graph?", ["The shortest path", "The longest path", "The sum of the vertices", "A sorted list"]],
        ["Which structure does DFS use?", ["A stack or recursion", "Only a queue", "Only a dictionary", "A table"]],
        ["What kind of graph is the network of links between websites?", ["Directed", "Undirected", "Empty", "Only a tree"]],
      ],
    },
    "logic-gates-architecture": {
      objectives: ["Describe the AND, OR, NOT and XOR gates", "Build a half adder", "Explain the von Neumann architecture", "Describe the processor's cycle"],
      content: `## Logic gates

Inside a computer everything is built from **transistors** connected into **logic gates**. 1 means there is current, 0 means there is none.

| A | B | AND | OR | XOR |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 |

**NOT** inverts: NOT 0 = 1, NOT 1 = 0. All the other gates can be built from the **NAND** gate (NOT AND).

## Half adder

It adds two bits:

- **Sum** = A XOR B
- **Carry** = A AND B

1 + 1 = 10₂: sum 0, carry 1. The arithmetic units of a processor are made of many similar circuits.

## The von Neumann architecture

In 1945 **John von Neumann** described a computer design that is still used today: the program and the data are stored in **the same memory**.

| Part | Role |
|---|---|
| **Processor (CPU)** | carries out instructions |
| — Control unit | reads and decodes instructions |
| — ALU | arithmetic and logic operations |
| — Registers | very fast, small memory inside the processor |
| **Main memory (RAM)** | programs and data while running |
| **Input and output devices** | keyboard, screen, disk |
| **Buses** | paths for transferring data |

## The instruction cycle

1. **Fetch** an instruction from memory,
2. **Decode** it: work out what to do,
3. **Execute** it,
4. Move on to the next instruction.

A processor's **clock speed** (for example, 3 GHz) shows how many billion cycles are performed per second. Modern processors have several **cores** working in parallel.

## Memory hierarchy

Registers → cache → RAM → SSD → HDD: the faster, the more expensive and the smaller.

## Exercises

1. What does 1 XOR 1 give?
2. What does a half adder calculate for the inputs 1 and 0?
3. What is the main idea of the von Neumann architecture?
4. List the three steps of the instruction cycle.
5. Which is faster: cache or an SSD?

## Answers

1. 0
2. Sum 1, carry 0.
3. The program and the data are stored in the same memory.
4. Fetch, decode, execute.
5. Cache.`,
      quiz: [
        ["What does 1 AND 0 give?", ["0", "1", "10", "2"]],
        ["What does 0 OR 1 give?", ["1", "0", "01", "2"]],
        ["Which part performs arithmetic operations?", ["The ALU", "RAM", "The disk", "The screen"]],
        ["What is the first step of the instruction cycle?", ["Fetch", "Execute", "Decode", "Store"]],
        ["From which gate can all the other logic gates be built?", ["NAND", "XOR", "OR", "Only NOT"]],
      ],
    },
    "operating-systems": {
      objectives: ["Explain the role of an operating system", "Describe processes and multitasking", "Explain the file system and access permissions", "Compare Windows, macOS, Linux, Android, iOS"],
      content: `## What is an OS

An **operating system** is a program that manages the computer's resources and acts as a go-between for the hardware and the programs. Without an OS, every program would have to "talk" to the disk, the screen and the printer itself.

## Main functions

| Function | What it does |
|---|---|
| **Process management** | decides which program uses the processor, and when |
| **Memory management** | gives each program its own part of RAM |
| **File system** | organises files in folders |
| **Device management** | works with devices through **drivers** |
| **Security** | users, passwords, access permissions |
| **Interface** | graphical (windows) or command line |

## Processes

A **process** is a running program. Although there are few cores, the OS switches between processes very quickly (thousands of times a second), so it seems that they all run at once. This is **multitasking**.

You can see the processes in "Task Manager" (Windows) or "Activity Monitor" (macOS).

## File system

Files are organised as a **tree**. A path: the Users folder on drive \`C:\` (Windows) or \`/home/ani/docs/report.txt\` (Linux).

Examples of file systems: NTFS, FAT32, ext4, APFS.

## Access permissions

In Linux every file has permissions to read (r), write (w) and execute (x), for the owner, the group and everyone else. An **administrator** can do anything, so an ordinary account is safer for everyday work.

## Common operating systems

| OS | Where | Feature |
|---|---|---|
| Windows | computers | the most widespread on desktop computers |
| macOS | Apple computers | based on Unix |
| Linux | servers, supercomputers | open source, free |
| Android | phones | built on the Linux kernel |
| iOS | iPhone | Apple |

The code of an **open-source** program is available to everyone: anyone can study and improve it.

## Exercises

1. Why do we need an operating system?
2. What is a process?
3. What is a driver?
4. Which OS is built on the Linux kernel and used in phones?
5. Why is it safer not to work under an administrator account?

## Answers

1. It manages resources and acts as a go-between for the hardware and the programs.
2. A running program.
3. A program through which the OS works with a particular device.
4. Android.
5. Malware will not be able to change system files.`,
      quiz: [
        ["Which of these is an operating system?", ["Linux", "Excel", "Chrome", "Python"]],
        ["What is a process?", ["A running program", "A file on a disk", "Part of the processor", "A folder"]],
        ["What does a driver do?", ["Lets the OS work with a device", "Removes viruses", "Prints files", "Connects to the internet"]],
        ["Which OS is open source?", ["Linux", "Windows", "iOS", "macOS"]],
        ["What is multitasking?", ["Several programs running at once", "Several screens", "Several users", "Several disks"]],
      ],
    },
    "data-compression": {
      objectives: ["Explain why data is compressed", "Distinguish lossless and lossy compression", "Apply the RLE algorithm", "Explain the idea of Huffman coding"],
      content: `## Why compress

Compression makes a file smaller, so that it takes up less space and travels faster over a network. For example, an uncompressed 4K film would take up dozens of times more space.

## Two kinds

| Kind | Meaning | Examples |
|---|---|---|
| **Lossless** | exactly the same thing is restored | ZIP, PNG, FLAC |
| **Lossy** | some detail is lost | JPEG, MP3, MP4 (H.264) |

Text and programs are compressed **only losslessly**: an error in one bit would ruin the file. In photos and music, what the human eye or ear hardly notices is removed.

## RLE (Run-Length Encoding)

Repeated characters are replaced by **the count and the character**:

\`AAAABBBCCD\` → \`4A3B2C1D\`

\`\`\`python
def rle(s):
    result = ""
    i = 0
    while i < len(s):
        j = i
        while j < len(s) and s[j] == s[i]:
            j += 1
        result += str(j - i) + s[i]
        i = j
    return result

print(rle("AAAABBBCCD"))   # 4A3B2C1D
\`\`\`

RLE works well on simple pictures (large areas of one colour), but it can make a file **bigger** if there are no repeats: \`ABCD\` → \`1A1B1C1D\`.

## Huffman coding

In 1952 **David Huffman** proposed giving **frequent** characters **short** codes and rare ones long codes.

For example, in the text "AAAABBC":

| Character | Frequency | Code |
|---|---|---|
| A | 4 | 0 |
| B | 2 | 10 |
| C | 1 | 11 |

In total: 4·1 + 2·2 + 1·2 = **10 bits**, whereas equal 2-bit codes would need 14 bits. No code is the beginning of another, so decoding is unambiguous.

Morse code has a similar idea: the most frequent letter in English, E, is a single dot.

## Compression ratio

**Ratio** = original size / compressed size. 10 MB → 2 MB: a ratio of 5.

## Exercises

1. How is lossless compression different from lossy compression?
2. Compress the string \`WWWWWBBW\` using RLE.
3. Why is JPEG unsuitable for a text document?
4. What is the idea of Huffman coding?
5. A 50 MB file was compressed to 10 MB. What is the ratio?

## Answers

1. Lossless compression restores exactly the same data; lossy does not.
2. \`5W2B1W\`
3. It is lossy, so letters can become blurry (and text is better stored as text).
4. Give frequent characters short codes and rare ones long codes.
5. 5`,
      quiz: [
        ["Which format uses lossy compression?", ["JPEG", "PNG", "ZIP", "FLAC"]],
        ["What does RLE give for the string AAABB?", ["3A2B", "A3B2", "AB", "5AB"]],
        ["What does Huffman coding do?", ["Gives frequent characters short codes", "Gives everything equal codes", "Removes rare characters", "Encrypts text"]],
        ["How should a program file be compressed?", ["Only losslessly", "Lossily", "It cannot be compressed", "As JPEG"]],
        ["When can RLE make a file bigger?", ["When there are no repeats", "When all the characters are the same", "When the file is small", "Never"]],
      ],
    },
  },
};
