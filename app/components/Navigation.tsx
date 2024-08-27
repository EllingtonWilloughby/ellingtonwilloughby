import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PiHouseFill } from 'react-icons/pi';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="text-lg/5 sm:text-xl/6 md:text-2xl/7 lg:text-3xl/8 flex justify-between items-center pt-8 px-8">
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/music">music</Link>
      <Link href="/shows">shows</Link>
      <Link href="/contact">contact</Link>
    </nav>
  );
}
