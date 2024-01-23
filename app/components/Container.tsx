import { useDarkMode } from '@/lib/context/ColorSchemeContext'
import Image, { StaticImageData } from 'next/image'
import darkBg from '../../public/images/surt.gif'
import lightBg from '../../public/images/prim.png'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  const { darkMode } = useDarkMode()

  const imageStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: -1,
  };
  
  return (
    <div className="background-container">
        <Image src={darkMode ? darkBg : lightBg} alt="background image" style={imageStyle} />
      <div className="z-20">{children}</div>
    </div>
  )
}
