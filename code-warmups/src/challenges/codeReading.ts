import type { Challenge } from "../types";

export const codeReadingChallenges: Challenge[] = [
  {
    id: "cr-list-mutation",
    title: "Code Reading Warmup: 1",
    category: "code-reading",
    description: "What is the final value of `items`?",
    paramNames: [""],
    codeSnippet: {
      python: `items = [1, 2, 3]
items.append(items.pop(0))
return items`,
      javascript: `const items = [1, 2, 3];
items.push(items.shift());
return items;`,
    },
    languages: [
      {
        id: "python",
        requiredFunction: "solution",
        starterCode: `def solution():
    # TODO: return the final value of items
    return None
`,
      },
      {
        id: "javascript",
        requiredFunction: "solution",
        starterCode: `function solution() {
  // TODO: return the final value of items
  return null;
}
`,
      },
    ],
    tests: [{ input: [], expected: [2, 3, 1] }],
  },
  {
    id: "cr-bool-to-int",
    title: "Code Reading Warmup: 2",
    category: "code-reading",
    description: "What is the value of x?",
    paramNames: [""],
    codeSnippet: {
      python: `x = [int(True), int(False)]`,
      javascript: `const x = [Number(true), Number(false)];`,
    },
    languages: [
      {
        id: "python",
        requiredFunction: "solution",
        starterCode: `def solution():
    # TODO: return the value of x
    return None
`,
      },
      {
        id: "javascript",
        requiredFunction: "solution",
        starterCode: `function solution() {
  // TODO: return the value of x
  return null;
}
`,
      },
    ],
    tests: [{ input: [], expected: [1, 0] }],
  },
];
