import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { UserPlus } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import ErrorMessage from '../components/ui/ErrorMessage';
import { ROUTES } from '../constants';
import { useAuth } from '../hooks/useAuth';

export default function Register() {
  const { register: registerUser, loading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      await registerUser(values);
      toast.success('Account created successfully');
      navigate(ROUTES.dashboard, { replace: true });
    } catch (error) {
      setError('root', { message: error.message });
    }
  };

  return (
    <section className="mx-auto flex min-h-[calc(100vh-160px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl lg:grid-cols-2 lg:p-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Start here
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Create your account.</h1>
          <p className="max-w-md text-slate-300">
            The form uses React Hook Form and is ready for future validation and API wiring.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {errors.root ? <ErrorMessage message={errors.root.message} /> : null}
          <Input
            label="Full name"
            placeholder="Jane Doe"
            error={errors.name}
            {...register('name', { required: 'Name is required' })}
          />
          <Input
            label="Email"
            type="email"
            placeholder="jane@example.com"
            error={errors.email}
            {...register('email', { required: 'Email is required' })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Create a secure password"
            error={errors.password}
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
          />
          <Input
            label="Confirm password"
            type="password"
            placeholder="Repeat password"
            error={errors.confirmPassword}
            {...register('confirmPassword', {
              validate: (value) => value === watch('password') || 'Passwords do not match',
            })}
          />
          <Button type="submit" className="w-full" isLoading={loading}>
            <UserPlus size={16} />
            Create account
          </Button>
          <p className="text-sm text-slate-400">
            Already have an account?{' '}
            <Link to={ROUTES.login} className="font-medium text-cyan-300 hover:text-cyan-200">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
