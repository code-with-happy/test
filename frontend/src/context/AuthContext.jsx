import { createContext, useEffect, useMemo, useState } from 'react';
import { authService } from '../services/authService';
import { STORAGE_KEYS } from '../constants';
import { getStoredItem, removeStoredItem, setStoredItem } from '../utils/storage';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getStoredItem(STORAGE_KEYS.user));
  const [token, setToken] = useState(() => getStoredItem(STORAGE_KEYS.token));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setStoredItem(STORAGE_KEYS.user, user);
    } else {
      removeStoredItem(STORAGE_KEYS.user);
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      setStoredItem(STORAGE_KEYS.token, token);
    } else {
      removeStoredItem(STORAGE_KEYS.token);
    }
  }, [token]);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await authService.login(credentials);
      setUser(response.user);
      setToken(response.token);
      return response;
    } finally {
      setLoading(false);
    }
  };

  const register = async (payload) => {
    setLoading(true);
    try {
      const response = await authService.register(payload);
      setUser(response.user);
      setToken(response.token);
      return response;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      isAuthenticated: Boolean(user && token),
      login,
      register,
      logout,
    }),
    [user, token, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
