export default function Navbar() {
  return (
    <nav className="h-12 flex items-center justify-between bg-slate-900 border-b border-slate-800 px-6">
      <div className="text-sm font-semibold tracking-tight">
        CodeWarmups
      </div>
      <div className="text-xs text-slate-400">
        Daily warmups · 5 min each
      </div>
    </nav>
  );
}
