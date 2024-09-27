import { useDarkMode } from '@/app/lib/context/ColorSchemeContext';
import React from 'react';
import darkBg from '@/public/images/dk_bg.png';
import lightBg from '@/public/images/bgmain.svg';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  const { darkMode } = useDarkMode();
  return (
    <main
      className="w-full max-w-screen-2xl mx-auto"
      style={{
        backgroundImage: `url(${darkMode ? darkBg.src : lightBg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `center top`,
        width: '100dvw',
        height: '100dvh'
      }}
    >
      <div className="">{children}</div>
    </main>
  );
}
