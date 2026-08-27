const lessonsData = [
  {
    number: "01",
    title: "Foundations of Data Structures",
    lessons: [
      {
        title: "Arrays & Strings",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/dsa-icon1.svg",
        content: `Understand the building blocks of linear data.

📘 Learn:
- Array declaration, memory layout
- Common operations: insert, delete, traverse
- String immutability and manipulation

🔗 Practice:
- https://leetcode.com/problemset/all/?topicSlugs=array
- https://www.hackerrank.com/domains/tutorials/10-days-of-javascript`,
      },
      {
        title: "Linked Lists",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/dsa-icon2.svg",
        content: `Explore dynamic memory with singly and doubly linked lists.

🔍 Topics:
- Node creation, traversal, reversal
- Circular lists, dummy heads
- When to use over arrays

🔗 Visualize:
- https://visualgo.net/en/list
- https://www.geeksforgeeks.org/data-structures/linked-list/`,
      },
      {
        title: "Stacks & Queues",
        lesson: "Lesson 03",
        duration: "50 Minutes",
        icon: "/assets/dsa-icon3.svg",
        content: `Learn LIFO and FIFO data structures with real-world use.

🧠 Concepts:
- Stack: browser history, recursion
- Queue: print tasks, buffers
- Implementations with arrays and linked lists

🔗 Tools:
- https://visualgo.net/en/list
- https://leetcode.com/problemset/?topicSlugs=stack,queue`,
      },
    ],
  },
  {
    number: "02",
    title: "Trees and Graphs",
    lessons: [
      {
        title: "Binary Trees & BSTs",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/dsa-icon4.svg",
        content: `Understand tree hierarchies and ordered binary search trees.

🌳 Learn:
- Tree traversals (pre, in, post)
- Binary Search Tree operations
- Recursion with trees

🔗 Practice:
- https://leetcode.com/tag/tree/
- https://visualgo.net/en/bst`,
      },
      {
        title: "Heaps & Priority Queues",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/dsa-icon5.svg",
        content: `Handle dynamic order with heaps.

⚙️ Topics:
- Min heap vs max heap
- Heapify, insert, extract
- Priority Queue use in Dijkstra’s Algorithm

🔗 Tools:
- https://www.cs.usfca.edu/~galles/visualization/Heap.html`,
      },
      {
        title: "Graph Representation & Traversal",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/dsa-icon6.svg",
        content: `Learn how graphs are stored and explored.

🕸️ Methods:
- Adjacency matrix vs list
- DFS & BFS algorithms
- Real-world: maps, networks

🔗 Visualize:
- https://visualgo.net/en/graphds`,
      },
    ],
  },
  {
    number: "03",
    title: "Algorithms & Problem Solving Techniques",
    lessons: [
      {
        title: "Recursion & Backtracking",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/dsa-icon7.svg",
        content: `Tackle complex problems with divide-and-conquer.

🔁 Learn:
- Base & recursive cases
- Backtracking: N-Queens, Sudoku
- Call stack behavior

🔗 Practice:
- https://leetcode.com/tag/backtracking/
- https://visualgo.net/en/recursion`,
      },
      {
        title: "Sorting Algorithms",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/dsa-icon8.svg",
        content: `Master common sorting techniques.

🧮 Techniques:
- Bubble, Selection, Insertion Sort
- Merge Sort and Quick Sort (Divide & Conquer)
- Time/Space complexity analysis

🔗 Tools:
- https://www.toptal.com/developers/sorting-algorithms`,
      },
      {
        title: "Searching Techniques",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/dsa-icon9.svg",
        content: `Search efficiently through datasets.

🔎 Focus:
- Linear vs Binary Search
- Binary search on answer
- Search in rotated sorted arrays

🔗 Practice:
- https://leetcode.com/tag/binary-search/`,
      },
    ],
  },
  {
    number: "04",
    title: "Greedy, Divide & Conquer, and Dynamic Programming",
    lessons: [
      {
        title: "Greedy Algorithms",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/dsa-icon10.svg",
        content: `Make locally optimal choices for global solutions.

💡 Use Cases:
- Activity selection
- Fractional knapsack
- Interval scheduling

🔗 Practice:
- https://www.geeksforgeeks.org/greedy-algorithms/`,
      },
      {
        title: "Divide & Conquer",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/dsa-icon11.svg",
        content: `Solve problems by breaking them into subproblems.

📌 Learn:
- Merge Sort, Quick Sort
- Binary Search
- Closest Pair of Points

🔗 Visuals:
- https://www.cs.usfca.edu/~galles/visualization/`,
      },
      {
        title: "Dynamic Programming Basics",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/dsa-icon12.svg",
        content: `Optimize overlapping subproblems with memoization & tabulation.

🔁 Problems:
- Fibonacci, Coin Change
- Longest Common Subsequence
- Knapsack Problem

🔗 Practice:
- https://leetcode.com/tag/dynamic-programming/`,
      },
    ],
  },
  {
    number: "05",
    title: "Advanced DSA Topics & Real-World Practice",
    lessons: [
      {
        title: "Tries & Hashing",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/dsa-icon13.svg",
        content: `Speed up search with prefix trees and hash tables.

🔠 Topics:
- Trie insert/search/delete
- Hash maps, sets, collision handling
- Applications: autocomplete, dictionary lookup

🔗 Practice:
- https://leetcode.com/tag/trie/
- https://visualgo.net/en/hashtable`,
      },
      {
        title: "Sliding Window & Two Pointers",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/dsa-icon14.svg",
        content: `Use smart iteration techniques to optimize space/time.

🔍 Scenarios:
- Longest substring without repeats
- Subarray with target sum
- Palindromic substrings

🔗 Practice:
- https://leetcode.com/tag/sliding-window/`,
      },
      {
        title: "Mock Interviews & Competitive Practice",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/dsa-icon15.svg",
        content: `Simulate real coding interviews and contests.

🧠 Prep:
- Timed LeetCode contests
- Mock sessions on Pramp/Interviewing.io
- Read editorials & optimize solutions

🔗 Tools:
- https://leetcode.com/contest/
- https://interviewing.io/`,
      },
    ],
  },
];

export default lessonsData;
