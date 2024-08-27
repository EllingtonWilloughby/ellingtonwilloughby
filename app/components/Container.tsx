import { useDarkMode } from '@/lib/context/ColorSchemeContext'
import React from 'react'
import darkBg from '@/public/gif/loop_75.gif'
import lightBg from '@/public/images/bgmain.svg'

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  const { darkMode } = useDarkMode()
  return (
    <main
      style={{
        backgroundImage: `url(${darkMode ? darkBg.src : lightBg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `center top`,
        width: '100dvw',
        height: '100dvh',
        opacity: `${darkMode ? '1' : '0.8'}`
      }}>
      <div className="">{children}</div>
    </main>
  )
}
