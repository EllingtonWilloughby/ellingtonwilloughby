'use client'
import { useEffect, useState } from 'react';
import darkLogo from '../../public/images/ew_logo_dk.svg'
import lightLogo from '../../public/images/ew_logo.svg'
import Image from 'next/image';
import { LogoProps } from '../../lib/types'

export default function Logo({ height, width }: LogoProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
  return (
    <div>
      <Image
        src={isDarkMode ? darkLogo : lightLogo}
        alt="ellington willoughby logo"
        height={height}
        width={width}
        priority={true}
      />
    </div>
  )
}
