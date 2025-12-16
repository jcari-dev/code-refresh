import { NavLink } from "react-router-dom";
import { challenges } from "../challenges";

const labelMap: Record<string, string> = {
  "strings": "Strings",
  "lists": "Lists",
  "math": "Math",
  "code-reading": "Code Reading",
};

export default function Sidebar() {
  const categories = [...new Set(challenges.map(c => c.category))];

  const counts = categories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat as string] = challenges.filter(c => c.category === cat).length;
    return acc;
  }, {});

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col px-4 py-5">
      {/* App identity */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 text-sm font-bold">
            CW
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight">
              CodeWarmups
            </div>
            <div className="text-[11px] text-slate-400">
              Tiny coding reps
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="text-[11px] font-semibold text-slate-400 uppercase mb-2">
        Practice lanes
      </div>

      <nav className="space-y-1 flex-1">
        {categories.map(cat => (
          <NavLink
            key={cat as string}
            to={`/category/${cat}`}
            className={({ isActive }) =>
              [
                "flex items-center justify-between rounded-md px-3 py-2 text-sm transition",
                isActive
                  ? "bg-slate-800 text-emerald-200 border border-emerald-400/40"
                  : "text-slate-200 border border-slate-800 hover:bg-slate-900",
              ].join(" ")
            }
          >
            <span>{labelMap[cat as string] ?? cat}</span>
            <span className="text-[10px] text-slate-400">
              {counts[cat as string] ?? 0} tasks
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Tiny stats footer */}
      <div className="mt-4 rounded-md border border-slate-800 bg-slate-900/60 p-3 text-[11px] text-slate-300">
        <div className="font-semibold mb-1">Today</div>
        <div className="flex justify-between">
          <span>Warmups</span>
          <span className="text-emerald-300 font-semibold">0 / 3</span>
        </div>
        <div className="flex justify-between">
          <span>Streak</span>
          <span>0 days</span>
        </div>
      </div>
    </aside>
  );
}
