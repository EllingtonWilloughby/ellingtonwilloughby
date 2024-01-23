import { useDarkMode } from '@/lib/context/ColorSchemeContext'
import Image, { StaticImageData } from 'next/image'
import darkBg from '../../public/images/loop.gif'
import lightBg from '../../public/images/prim.png'
import React from 'react'

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
