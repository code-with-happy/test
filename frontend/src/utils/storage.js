export const getStoredItem = (key, fallback = null) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export const setStoredItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeStoredItem = (key) => {
  localStorage.removeItem(key);
};
