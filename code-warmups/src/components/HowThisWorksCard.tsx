export default function HowThisWorksCard() {
  return (
    <section className="rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-lg">
      <h3 className="text-sm font-semibold text-slate-100">How this works</h3>

      <div className="mt-4 grid gap-3 text-sm">
        <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-3">
          <div className="mt-1 font-semibold text-slate-100">
            Select a practice lane
          </div>
          <div className="mt-1 text-slate-300">
            Choose a category from the sidebar, or start a random warmup.
          </div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-3">
          <div className="mt-1 font-semibold text-slate-100">
            Solve in your language
          </div>
          <div className="mt-1 text-slate-300">
            Write a solution in Python or JavaScript. Keep it simple.
          </div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-3">
          <div className="mt-1 font-semibold text-slate-100">
            Your progress stays here
          </div>
          <div className="mt-1 text-slate-300">
            Progress is saved locally in your browser. No accounts.
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900/40 p-3">
        <div className="text-xs text-slate-400">Coming soon</div>
        <div className="mt-1 text-sm text-slate-300">
          Offline mode, so you can warm up without a connection.
        </div>
      </div>
    </section>
  );
}
