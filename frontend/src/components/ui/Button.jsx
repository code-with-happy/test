import { cn } from '../../utils/cn';

const variants = {
  primary:
    'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-[0_10px_30px_rgba(34,211,238,0.25)]',
  secondary:
    'bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700',
  ghost: 'bg-transparent text-slate-200 hover:bg-slate-800 border border-transparent',
};

export default function Button({
  children,
  className,
  variant = 'primary',
  isLoading = false,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
