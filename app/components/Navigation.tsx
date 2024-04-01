import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-full flex justify-between items-end mx-2 p-2">
      <Link href="/" className={pathname === '/' ? 'active' : ''}>home</Link>
      <Link href="/about" className={pathname === '/about' ? 'active' : ''}>about</Link>
      <Link href="/music" className={pathname === '/music' ? 'active' : ''}>music</Link>
      <Link href="/shows" className={pathname === '/shows' ? 'active' : ''}>shows</Link>
      <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>contact</Link>
    </nav>
  );
}
