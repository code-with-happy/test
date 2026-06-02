export default function Loader({ label = 'Loading' }) {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4 shadow-glow">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
        <span className="text-sm text-slate-300">{label}</span>
      </div>
    </div>
  );
}
