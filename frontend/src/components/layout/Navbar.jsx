import { Link, NavLink } from 'react-router-dom';
import { LogOut, Menu, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import { NAV_LINKS, ROUTES } from '../../constants';
import { useAuth } from '../../hooks/useAuth';
import { cn } from '../../utils/cn';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to={ROUTES.home} className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/30">
            <ShieldCheck size={18} />
          </span>
          <span className="text-base font-semibold tracking-tight text-white">
            Frontend
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.filter((link) => !link.protected || isAuthenticated).map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white',
                  isActive && 'bg-slate-800 text-white'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <div className="hidden text-right sm:block">
                <p className="text-xs text-slate-400">Welcome back</p>
                <p className="text-sm font-medium text-white">{user?.name}</p>
              </div>
              <Button variant="secondary" onClick={logout}>
                <LogOut size={16} />
                Logout
              </Button>
            </>
          ) : (
            <div className="hidden gap-2 sm:flex">
              <Link
                to={ROUTES.login}
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-700"
              >
                Login
              </Link>
              <Link
                to={ROUTES.register}
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                Register
              </Link>
            </div>
          )}
          <button className="rounded-xl border border-slate-800 p-2 text-slate-300 md:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
