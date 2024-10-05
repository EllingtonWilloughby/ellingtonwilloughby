'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Logo() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) =>
      setDarkMode(event.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="max-w-screen-sm mx-auto flex justify-center items-start">
      {darkMode ? (
        <Image src="/gif/bg_dark.gif" alt="logo" width={800} height={800} />
      ) : (
        <Image
          src="/images/logo_i_light.svg"
          alt="logo"
          width={800}
          height={800}
          priority
        />
      )}
    </div>
  );
}
