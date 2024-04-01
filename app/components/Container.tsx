import { useDarkMode } from '@/lib/context/ColorSchemeContext'
import Image from 'next/image'
import React from 'react'
import darkBg from '../../public/gif/loop_75.gif'
import lightBg from '../../public/images/prim.svg'

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  const { darkMode } = useDarkMode()
  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${darkMode ? darkBg.src : lightBg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: 'auto'
      }}>
      <div className="z-40 max-w-screen-md mx-auto p-6">{children}</div>
    </div>
  )
}
