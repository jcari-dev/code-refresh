import { Link } from "react-router-dom";
import { challenges } from "../challenges";

export default function Home() {
  const first = challenges[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
      {/* Quick start card */}
      <section className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Ready to warm up?</h2>
        <p className="text-slate-300 mb-4">
          Pick a lane and solve a tiny challenge in under 5 minutes.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to={`/challenge/${first.id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-400"
          >
            Start a random warmup
          </Link>

          <Link
            to="/category/strings"
            className="text-sm text-emerald-200 hover:underline"
          >
            Browse string challenges →
          </Link>
        </div>
      </section>

      {/* Little dashboard */}
      <section className="space-y-4">
        <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
          <h3 className="text-sm font-semibold mb-1">Today&apos;s plan</h3>
          <p className="text-xs text-slate-400 mb-3">
            Do 3 quick reps from any category.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="h-2 w-16 rounded-full bg-slate-700 overflow-hidden">
              <span className="block h-full w-4 bg-emerald-400" />
            </span>
            <span className="text-slate-200">1 / 3 done (placeholder)</span>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
          <h3 className="text-sm font-semibold mb-2">Categories</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <Link
              to="/category/strings"
              className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 hover:border-emerald-400"
            >
              <div className="font-semibold">Strings</div>
              <div className="text-slate-400">Text, slicing, parsing</div>
            </Link>
            <Link
              to="/category/lists"
              className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 hover:border-emerald-400"
            >
              <div className="font-semibold">Lists</div>
              <div className="text-slate-400">Filtering, sums, indices</div>
            </Link>
            <Link
              to="/category/math"
              className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 hover:border-emerald-400"
            >
              <div className="font-semibold">Math</div>
              <div className="text-slate-400">Filtering, sums, indices</div>
            </Link>
            <Link
              to="/category/code-reading"
              className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 hover:border-emerald-400"
            >
              <div className="font-semibold">Code reading</div>
              <div className="text-slate-400">“What does this do?”</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
