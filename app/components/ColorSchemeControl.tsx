'use client';
import React from 'react';
import { PiMoon, PiMoonStars } from 'react-icons/pi';
import { useColorSchemeContext } from '../lib/context/ColorSchemeContext';

export default function ColorSchemeControl() {
  const { colorScheme, controlText, toggleColorScheme } =
    useColorSchemeContext();

  return (
    <button
      type="button"
      onClick={toggleColorScheme}
      className="hover:cursor-pointer flex flex-col items-start p-2"
      aria-label="Toggle color scheme"
    >
      {colorScheme ? <PiMoon size={32} /> : <PiMoonStars size={32} />}

      <div className="h-8 w-32 sm:w-40 text-xs leading-5 transition-opacity duration-300 ease-in-ou">
        {controlText && (
          <span>{colorScheme ? 'Chill mode' : 'Party Time'}</span>
        )}
      </div>
    </button>
  );
}
