import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PiHouseFill } from 'react-icons/pi';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-full flex justify-between items-end px-6">
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/music">music</Link>
      <Link href="/shows">shows</Link>
      <Link href="/contact">contact</Link>
    </nav>
  );
}
