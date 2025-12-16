import { Challenge } from "../types";

export const mathChallenges: Challenge[] = [
  {
    id: "sum-positive",
    title: "Sum of Positive Numbers",
    category: "math",
    description: "Return the sum of all positive numbers in the list.",
    requiredFunction: "sum_positive",
    starterCode: `def sum_positive(nums: list[int]) -> int:
    # TODO: implement
    return 0
`,
    tests: [
      { input: [[1, -2, 3]], expected: 4 },
      { input: [[0, 0, 0]],  expected: 0 },
      { input: [[-5, -1]],   expected: 0 },
      { input: [[5]],        expected: 5 },
      { input: [[1, 2, 3]],  expected: 6 },
    ],
    timeLimitSeconds: 300,
  },
  // add more list challenges here...
  
];
