import React from 'react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="h-32 sm:h-40 max-w-screen sm:max-w-full p-4">
      <Navigation />
    </header>
  )
}

