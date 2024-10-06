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
    <div className="mx-auto flex justify-center items-start max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg">
      <Image
        src={darkMode ? '/images/logo_i_dark.svg' : '/images/logo_i_light.svg'}
        alt="Ellington Willoughby & the Mythical Squid band logo"
        width={500}
        height={500}
        className="w-full min-w-96"
        priority
      />
    </div>
  );
}
