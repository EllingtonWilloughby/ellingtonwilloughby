import React from 'react';
import NavLink from './NavLink';

export default function Navigation() {
  return (
    <nav className="max-w-screen-md flex justify-between">
      <NavLink href="/">home</NavLink>
      <NavLink href="/about">about</NavLink>
      <NavLink href="/music">music</NavLink>
      <NavLink href="/shows">shows</NavLink>
      <NavLink href="/contact">contact</NavLink>
    </nav>
  );
}
