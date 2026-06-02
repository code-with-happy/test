import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-160px)] max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 text-center shadow-glow backdrop-blur-xl sm:px-10">
        <p className="text-7xl font-bold text-cyan-300">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Page not found</h1>
        <p className="mt-3 text-slate-300">
          The route you requested does not exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to={ROUTES.home}>
            <span className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-400">
              Go home
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
