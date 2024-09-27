'use client';
import darkLogo from '../../public/images/ew_logo_dk.svg';
import lightLogo from '../../public/images/ew_logo.svg';
import Image from 'next/image';
import { LogoProps } from '../lib/types';
import { useDarkMode } from '@/app/lib/context/ColorSchemeContext';

export default function Logo({ height, width }: LogoProps) {
  const { darkMode } = useDarkMode();

  return (
    <Image
      src={darkMode ? darkLogo : lightLogo}
      alt="ellington willoughby & the mythical squid"
      height={height}
      width={width}
      priority={true}
      className="size-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto"
    />
  );
}
