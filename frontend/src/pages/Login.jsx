import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { LogIn } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import ErrorMessage from '../components/ui/ErrorMessage';
import { ROUTES } from '../constants';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTES.dashboard;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      await login(values);
      toast.success('Logged in successfully');
      navigate(from, { replace: true });
    } catch (error) {
      setError('root', { message: error.message });
    }
  };

  return (
    <section className="mx-auto flex min-h-[calc(100vh-160px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl lg:grid-cols-2 lg:p-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Access
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Welcome back.</h1>
          <p className="max-w-md text-slate-300">
            Sign in to continue into the protected dashboard and verify the end-to-end flow.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {errors.root ? <ErrorMessage message={errors.root.message} /> : null}
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            error={errors.email}
            {...register('email', { required: 'Email is required' })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            error={errors.password}
            {...register('password', { required: 'Password is required' })}
          />
          <Button type="submit" className="w-full" isLoading={loading}>
            <LogIn size={16} />
            Sign in
          </Button>
          <p className="text-sm text-slate-400">
            New here?{' '}
            <Link
              to={ROUTES.register}
              className="font-medium text-cyan-300 hover:text-cyan-200"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
