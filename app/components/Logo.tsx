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
    <div className="w-full flex justify-center items-start p-2">
      {darkMode ? (
        <Image
          src="/images/logo_dark.svg"
          alt="logo"
          width={700}
          height={700}
        />
      ) : (
        <Image src="/images/logo.svg" alt="logo" width={700} height={700} />
      )}
    </div>
  );
}
