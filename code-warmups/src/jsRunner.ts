import type { Challenge, LanguageConfig, TestCase } from "./types";

const workerSource = `
self.onmessage = (e) => {
  const { code, requiredFunction, tests } = e.data;

  let fn;
  try {
    // Wrap user code and return the function by name
    fn = new Function(code + "\\n; return " + requiredFunction + ";")();
    if (typeof fn !== "function") {
      self.postMessage("ERROR: function '" + requiredFunction + "' is not defined");
      return;
    }
  } catch (err) {
    self.postMessage("ERROR while loading function: " + err);
    return;
  }

  const lines = [];
  let passed = 0;

  for (const [args, expected] of tests) {
    try {
      const got = fn.apply(null, args);
      if (JSON.stringify(got) === JSON.stringify(expected)) {
        passed++;
        lines.push("[OK]   " + JSON.stringify(args) + " -> " + JSON.stringify(got));
      } else {
        lines.push("[FAIL] " + JSON.stringify(args) +
          ": expected " + JSON.stringify(expected) +
          ", got " + JSON.stringify(got));
      }
    } catch (err) {
      lines.push("[ERROR] " + JSON.stringify(args) + " -> " + err);
    }
  }

  const summary = "Passed " + passed + "/" + tests.length + " tests";
  lines.push("", summary);
  self.postMessage(lines.join("\\n"));
};
`;

let jsWorker: Worker | null = null;

function getWorker(): Worker {
  if (!jsWorker) {
    const blob = new Blob([workerSource], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    jsWorker = new Worker(url);
  }
  return jsWorker;
}

export function runJsChallenge(
  challenge: Challenge,
  lang: LanguageConfig,
  userCode: string
): Promise<string> {
  const worker = getWorker();

  const tests: [unknown[], unknown][] = challenge.tests.map(
    (t: TestCase) => [t.input, t.expected]
  );

  return new Promise(resolve => {
    const handler = (e: MessageEvent) => {
      worker.removeEventListener("message", handler);
      resolve(String(e.data));
    };

    worker.addEventListener("message", handler);
    worker.postMessage({
      code: userCode,
      requiredFunction: lang.requiredFunction,
      tests,
    });
  });
}
