import type { Challenge, LanguageConfig } from "./types";

declare global {
  interface Window {
    loadPyodide?: () => Promise<any>;
  }
}

let pyodidePromise: Promise<any> | null = null;

export function getPyodide() {
  if (!pyodidePromise) {
    pyodidePromise = (window as any).loadPyodide();
  }
  return pyodidePromise;
}

export function buildPythonHarness(
  challenge: Challenge,
  lang: LanguageConfig,
  userCode: string
): string {
  const testsPy = JSON.stringify(
    challenge.tests.map(t => [t.input, t.expected])
  );

  return `
${userCode}

def __run_tests():
    tests = ${testsPy}

    try:
        func = ${lang.requiredFunction}
    except NameError:
        return "ERROR: function '${lang.requiredFunction}' is not defined"

    results = []
    passed = 0

    for args, expected in tests:
        try:
            got = func(*args)
        except Exception as e:
            results.append(f"[ERROR] {args!r} -> {e}")
            continue

        if got == expected:
            passed += 1
            results.append(f"[OK]   {args!r} -> {got!r}")
        else:
            results.append(
                f"[FAIL] {args!r}: expected {expected!r}, got {got!r}"
            )

    summary = f"Passed {passed}/{len(tests)} tests"
    return "\\n".join(results + ["", summary])

__run_tests()
`;
}

export async function runPythonChallenge(
  challenge: Challenge,
  lang: LanguageConfig,
  userCode: string
): Promise<string> {
  const pyodide = await getPyodide();
  const harness = buildPythonHarness(challenge, lang, userCode);
  return pyodide.runPythonAsync(harness) as Promise<string>;
}
