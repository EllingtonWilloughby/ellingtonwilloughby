import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
      <nav className="w-full flex justify-around">
        <Link href="/" className="">home</Link>
        <Link href="/about" className="">about</Link>
        <Link href="/music" className="">music</Link>
        <Link href="/shows" className="">shows</Link>
        <Link href="/contact" className="">contact</Link>
      </nav>
  );
};
