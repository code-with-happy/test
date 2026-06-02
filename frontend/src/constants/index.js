export const STORAGE_KEYS = {
  user: 'frontend_user',
  token: 'frontend_token',
};

export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
};

export const NAV_LINKS = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Dashboard', to: ROUTES.dashboard, protected: true },
];
