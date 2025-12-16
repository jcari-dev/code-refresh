import { Challenge } from "../types";

export const codeReadingChallenges: Challenge[] = [
  {
    id: "count-lowercase-letters",
    title: "What Does This Code Do?",
    category: "code-reading",
    description:
`The original code looked like this:

    count = 0
    for ch in s:
        if ch.islower():
            count += 1
    return count

Re-implement the same behavior in a function count_lowercase(s).`,
    requiredFunction: "count_lowercase",
    starterCode: `def count_lowercase(s: str) -> int:
    # TODO: make this behave like the snippet above
    return 0
`,
    tests: [
      { input: ["abc"],        expected: 3 },
      { input: ["ABC"],        expected: 0 },
      { input: ["aBcDe"],      expected: 3 },
      { input: [""],           expected: 0 },
      { input: ["Hello 123"],  expected: 4 },
    ],
    timeLimitSeconds: 300,
  },
  // more code-reading-style challenges later...
];
