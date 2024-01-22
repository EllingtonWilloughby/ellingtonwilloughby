'use client'
import React, { useEffect } from 'react'
import { PiMoon, PiMoonStars } from 'react-icons/pi'
import { useDarkMode } from '../../lib/context/ColorSchemeContext'

export default function DarkModeButton() {
  const { showText, darkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <div 
      onClick={toggleDarkMode}
      className={
        `hover: cursor-pointer flex flex-col items-start p-2`
      }
    >
      {darkMode 
        ? <PiMoon size={24} /> 
        : <PiMoonStars size={24} />}

      <div className="h-8 w-40 text-xs/5">
        {showText && (
          <span>{darkMode ? 'Click for Light Mode' : 'Click for Dark Mode'}</span>
        )}
      </div>
    </div>
  )
}
