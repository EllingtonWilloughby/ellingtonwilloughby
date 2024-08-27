'use client'
import React from 'react'
import { PiMoon, PiMoonStars } from 'react-icons/pi'
import { useDarkMode } from '../../lib/context/ColorSchemeContext'

export default function DarkModeButton() {
  const { showText, darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      onClick={toggleDarkMode}
      className={
        `absolute bottom-12 left-24 sm:left-32 md:left-40 lg:left-64 hover:cursor-pointer flex flex-col items-start p-2`
      }
    >
      {darkMode
        ? <PiMoon size={32} />
        : <PiMoonStars size={32} />}

      <div className="h-8 w-40 text-xs/5">
        {showText && (
          <span className="text-lg">{darkMode ? 'Chill Mode' : 'Party Time'}</span>
        )}
      </div>
    </div>
  )
}
