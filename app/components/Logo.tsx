'use client';
import Image from 'next/image';
import { ILogo } from '../lib/types';
import { useColorSchemeContext } from '../lib/context/ColorSchemeContext';

export default function Logo({ height, width }: ILogo) {
  const { colorScheme } = useColorSchemeContext();

  return (
    <Image
      src={colorScheme ? '/images/ew_logo_dk.svg' : '/images/ew_logo.svg'}
      alt="ellington willoughby & the mythical squid"
      height={height}
      width={width}
      priority={true}
      className="size-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto"
    />
  );
}
