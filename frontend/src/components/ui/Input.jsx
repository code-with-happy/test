import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Input = forwardRef(function Input(
  { label, error, className, id, helperText, ...props },
  ref
) {
  const inputId = id || props.name;

  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium text-slate-200">
          {label}
        </label>
      ) : null}
      <input
        ref={ref}
        id={inputId}
        className={cn(
          'w-full rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20',
          error && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20',
          className
        )}
        {...props}
      />
      {helperText ? <p className="text-xs text-slate-400">{helperText}</p> : null}
      {error ? <p className="text-xs text-rose-400">{error.message || error}</p> : null}
    </div>
  );
});

export default Input;
