import { useEffect, useState } from 'react';
import { CalendarDays, ShieldCheck, User } from 'lucide-react';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useAuth } from '../hooks/useAuth';
import { authService } from '../services/authService';
import { formatDate } from '../utils/formatDate';

export default function Dashboard() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadProfile = async () => {
      try {
        const data = await authService.getProfile();
        if (mounted) setProfile(data);
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadProfile();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <Loader label="Loading dashboard" />;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Protected area
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Dashboard overview
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            This route is wrapped in a protected structure and hydrates profile data through the
            service layer.
          </p>

          {error ? <div className="mt-6"><ErrorMessage message={error} /></div> : null}

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'User', value: user?.name || profile?.name, icon: User },
              {
                label: 'Role',
                value: profile?.role || 'Member',
                icon: ShieldCheck,
              },
              {
                label: 'Joined',
                value: profile?.createdAt ? formatDate(profile.createdAt, 'PP') : 'Recently',
                icon: CalendarDays,
              },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <Icon className="text-cyan-300" size={18} />
                <p className="mt-3 text-sm text-slate-400">{label}</p>
                <p className="mt-1 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/15 to-slate-900/60 p-6 shadow-glow">
          <h2 className="text-xl font-semibold text-white">Ready for real backend integration</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>• API client lives in `services/api.js`.</li>
            <li>• Auth calls live in `services/authService.js`.</li>
            <li>• Environment variables are read from `import.meta.env`.</li>
            <li>• Protected routes redirect unauthenticated users to login.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
