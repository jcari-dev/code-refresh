import { Challenge } from "../types";

export const stringsChallenges: Challenge[] = [
  {
    id: "capitalize-string",
    title: "Capitalize String",
    category: "strings",
    description: "Return the string with only the first character capitalized.",
    languages: [
      {
        id: "python",
        requiredFunction: "capitalize_string",
        starterCode: `def capitalize_string(s: str) -> str:
    if not s:
        return s
    # TODO: implement
    return s
`,
      },
      {
        id: "javascript",
        requiredFunction: "capitalizeString",
        starterCode: `function capitalizeString(s) {
  if (!s) return s;
  // TODO: implement
  return s;
}
`,
      },
    ],
    tests: [
      { input: ["aaaa"],       expected: "Aaaa" },
      { input: ["hello"],      expected: "Hello" },
      { input: ["x"],          expected: "X" },
      { input: [""],           expected: "" },
      { input: ["maccha latte"], expected: "Maccha Latte" },
    ],
    timeLimitSeconds: 300,
  },
  // other challenges...
];
