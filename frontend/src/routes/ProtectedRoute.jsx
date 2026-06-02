import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/ui/Loader';
import { ROUTES } from '../constants';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader label="Checking access" />;
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.login} replace state={{ from: location }} />;
  }

  return children;
}
