import { useParams, Link } from "react-router-dom";
import { challenges } from "../challenges";
import ChallengeEditor from "../components/ChallengeEditor";

const labelMap: Record<string, string> = {
  "strings": "Strings",
  "lists": "Lists",
  "code-reading": "Code Reading",
};

export default function ChallengePage() {
  const { challengeId } = useParams();
  const challenge = challenges.find(c => c.id === challengeId);

  if (!challenge) {
    return <div>Challenge not found.</div>;
  }

  const categoryLabel = labelMap[challenge.category] ?? challenge.category;

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link to="/" className="hover:text-emerald-300">
          Home
        </Link>
        <span>/</span>
        <Link
          to={`/category/${challenge.category}`}
          className="hover:text-emerald-300"
        >
          {categoryLabel}
        </Link>
        <span>/</span>
        <span className="text-slate-200">{challenge.title}</span>
      </div>

      {/* Two-column layout */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)]">
        {/* Problem panel */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3">
          <h1 className="text-xl font-bold text-slate-50">
            {challenge.title}
          </h1>
          <p className="text-sm text-slate-300">{challenge.description}</p>

          <div className="mt-3">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
              Examples & Test Cases
            </h2>
            <ul className="space-y-1 text-sm text-slate-200">
              {challenge.tests.slice(0, 5).map((t, i) => (
                <li key={i} className="font-mono text-xs bg-slate-900/80 border border-slate-800 rounded px-2 py-1">
                  {challenge.requiredFunction}
                  ({JSON.stringify(t.input).slice(1, -1)}) =&gt;{" "}
                  {JSON.stringify(t.expected)}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {Math.round(challenge.timeLimitSeconds / 60)} min warmup
            </span>
            <span>built-ins · fundamentals</span>
          </div>
        </section>

        {/* Editor panel */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-3">
          <ChallengeEditor challenge={challenge} />
        </section>
      </div>
    </div>
  );
}
