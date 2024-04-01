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
    <div className="background-container">
      <Image src={darkMode ? darkBg : lightBg} alt="background image" className="background-image" />
      <div className="z-40">{children}</div>
    </div>
  )
}
