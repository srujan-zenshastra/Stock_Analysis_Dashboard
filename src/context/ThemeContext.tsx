import React, { useEffect, useState, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';
type ThemeColor = 'blue' | 'purple' | 'green' | 'orange';

interface ThemeContextType {
  theme: Theme;
  themeColor: ThemeColor;
  toggleTheme: () => void;
  setThemeColor: (color: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    // Check system preference if no stored theme
    if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return (savedTheme as Theme) || 'light';
  });
  
  const [themeColor, setThemeColor] = useState<ThemeColor>('blue');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      themeColor,
      toggleTheme,
      setThemeColor
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
