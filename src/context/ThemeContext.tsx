import { createContext, ReactNode, useEffect, useState } from 'react';

export interface ThemeContextProperties {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const getTheme = () => localStorage.getItem('theme') ?? 'light';

export const themeContext = createContext<ThemeContextProperties>({
  theme: getTheme(),
  toggleTheme: () => {},
});

function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContextProvider;
