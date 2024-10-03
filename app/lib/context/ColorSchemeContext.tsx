'use client';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

import { IColorSchemeContext } from '../types';

const ColorSchemeContext = createContext<IColorSchemeContext | null>(null);

export function ColorSchemeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [colorScheme, setColorScheme] = useState<boolean>(false);
  const [controlText, setControlText] = useState<boolean>(false);

  function checkLocalStorage() {
    // check if color scheme preference is in localStorage
    const localColorScheme = localStorage.getItem('colorScheme');
    if (localColorScheme !== null) {
      return JSON.parse(localColorScheme);
    } else {
      return null;
    }
  }

  const setLocalColorScheme = useCallback(() => {
    const cs = checkLocalStorage();
    if (typeof cs === 'boolean') {
      setColorScheme(cs);
    } else {
      const scheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setColorScheme(scheme);
      localStorage.setItem('colorScheme', JSON.stringify(scheme));
    }
  }, []);

  // toggle the color scheme and store the new value in localStorage
  const toggleColorScheme = () => {
    setColorScheme((prev) => {
      const newColorScheme = !prev;
      localStorage.setItem('colorScheme', JSON.stringify(newColorScheme));
      // set or remove class on body element
      if (newColorScheme) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }

      setControlText(true);
      setTimeout(() => {
        setControlText(false);
      }, 2000);
      return newColorScheme;
    });
  };

  useEffect(() => {
    setLocalColorScheme();
  }, [setLocalColorScheme]);

  const value: IColorSchemeContext = {
    controlText,
    colorScheme,
    toggleColorScheme
  };

  return (
    <ColorSchemeContext.Provider value={value}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export function useColorSchemeContext() {
  const context = useContext(ColorSchemeContext);
  if (!context) {
    throw new Error('useColorSchemeContext must be used within a provider');
  }
  return context;
}
