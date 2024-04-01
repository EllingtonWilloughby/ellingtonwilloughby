import React from 'react';
import NavLink from './NavLink';

export default function Navigation() {
  return (
    <nav className="w-full h-full flex justify-between items-end mx-2 p-2">
      <NavLink href="/">home</NavLink>
      <NavLink href="/about">about</NavLink>
      <NavLink href="/music">music</NavLink>
      <NavLink href="/shows">shows</NavLink>
      <NavLink href="/contact">contact</NavLink>
    </nav>
  );
}
