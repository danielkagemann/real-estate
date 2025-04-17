export const useLocalStorage = (key: string) => {
  return {
    get: () => JSON.parse(localStorage.getItem(key) ?? ""),
    set: (value: any) => localStorage.setItem(key, JSON.stringify(value)),
    clear: localStorage.removeItem(key),
  };
};
