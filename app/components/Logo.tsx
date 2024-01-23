'use client'
import darkLogo from '../../public/images/ew_logo_dk.svg'
import lightLogo from '../../public/images/ew_logo.svg'
import Image from 'next/image';
import { LogoProps } from '../../lib/types'
import { useDarkMode } from '@/lib/context/ColorSchemeContext';

export default function Logo({ height, width }: LogoProps) {
  const { darkMode } = useDarkMode()
  
  return (
    <div>
      <Image
        src={darkMode ? darkLogo : lightLogo}
        alt="ellington willoughby logo"
        height={height}
        width={width}
        priority={true}
      />
    </div>
  )
}
