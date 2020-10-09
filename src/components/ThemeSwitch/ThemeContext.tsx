import React, { createContext, FunctionComponent, useState } from 'react';
import { Theme } from '../../theme';

const LOCAL_STORAGE_THEME = 'theme';

interface ThemeContextState {
  theme: Theme;
  setTheme(theme: Theme): void;
}

export const ThemeContext = createContext<ThemeContextState>({
  theme: Theme.DARK,
  setTheme: () => undefined
});

const isTheme = (theme: string): theme is Theme => {
  return Object.values(Theme).includes(theme as Theme);
};

const getDefaultTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    if (window.localStorage) {
      const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME);
      if (storedTheme && isTheme(storedTheme)) {
        return storedTheme;
      }
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return Theme.LIGHT;
    }
  }

  return Theme.DARK;
};

export const ThemeContextProvider: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getDefaultTheme());

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
    }
  };

  return <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>{children}</ThemeContext.Provider>;
};
