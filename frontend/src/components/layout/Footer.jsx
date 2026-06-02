export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Frontend. Built for production-ready foundations.</p>
        <p>React 19, Vite, Tailwind CSS, and a clean modular architecture.</p>
      </div>
    </footer>
  );
}
