import { api } from './api';

const mockDelay = (payload) => new Promise((resolve) => setTimeout(() => resolve(payload), 800));

const buildMockAuthResponse = ({ name, email }) =>
  mockDelay({
    token: `mock-token-${Date.now()}`,
    user: {
      id: Date.now(),
      name,
      email,
      role: 'Member',
      createdAt: new Date().toISOString(),
    },
  });

const shouldUseMockMode = !import.meta.env.VITE_API_BASE_URL;

export const authService = {
  login: async ({ email, password }) => {
    if (shouldUseMockMode) {
      return buildMockAuthResponse({
        name: email.split('@')[0],
        email,
        password,
      });
    }

    const { data } = await api.post('/auth/login', { email, password });
    return data;
  },
  register: async ({ name, email, password }) => {
    if (shouldUseMockMode) {
      return buildMockAuthResponse({ name, email, password });
    }

    const { data } = await api.post('/auth/register', { name, email, password });
    return data;
  },
  getProfile: async () => {
    if (shouldUseMockMode) {
      return mockDelay({
        id: 1,
        name: 'Frontend User',
        email: 'user@example.com',
        role: 'Member',
      });
    }

    const { data } = await api.get('/auth/me');
    return data;
  },
};
