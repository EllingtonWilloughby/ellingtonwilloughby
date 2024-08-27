import { useDarkMode } from '@/lib/context/ColorSchemeContext'
import React from 'react'
import darkBg from '@/public/gif/loop_75.gif'
import lightBg from '@/public/images/bg_main.svg'

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  const { darkMode } = useDarkMode()
  return (
    <main
      className="bg-gradient-to-t from-gray-900 to-gray-100"
      style={{
        backgroundImage: `url(${darkMode ? darkBg.src : lightBg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
        width: '100dvw',
        height: '100dvh',
        border: '1px solid red'
      }}>
      <div className="">{children}</div>
    </main>
  )
}
