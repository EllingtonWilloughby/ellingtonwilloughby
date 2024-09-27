'use client';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react';
import { IThemeContext } from '../types';

const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a provider');
  }
  return context;
};
