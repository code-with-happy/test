import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { ROUTES } from '../constants';

export default function Home() {
  const cards = [
    'Modular folder structure',
    'Protected route ready',
    'Reusable UI primitives',
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <SectionHeading
            eyebrow="Production-ready React frontend"
            title="A clean, scalable foundation for modern web apps."
            description="This starter is organized for growth: routing, auth structure, API services, reusable UI, and Tailwind-driven styling all live in the right place."
          />

          <div className="flex flex-wrap gap-3">
            {cards.map((card) => (
              <span
                key={card}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {card}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to={ROUTES.register}>
              <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-400">
                Get Started
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link to={ROUTES.dashboard}>
              <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-slate-700">
                <ShieldCheck size={16} />
                Open Dashboard
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-300">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="text-sm text-slate-400">Foundation</p>
                <p className="text-lg font-semibold text-white">Ready for API integration</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ['Routes', 'Separated inside the routes folder'],
                ['Services', 'API client and auth service layer'],
                ['Auth', 'ProtectedRoute and AuthContext structure'],
              ].map(([label, text]) => (
                <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-sm font-medium text-white">{label}</p>
                  <p className="mt-1 text-sm text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
