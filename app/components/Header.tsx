'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { INavigationLink } from '@/types';
import { navlinks } from '@/data';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="max-w-screen-md mx-auto w-full h-1/5">
      <nav className="w-full flex flex-col items-center p-4">
        <ul className="w-full flex justify-between items-center">
          {navlinks
            .filter((navlink: INavigationLink) => navlink.href !== pathname)
            .map((navlink: INavigationLink) => (
              <li key={navlink.href}>
                <Link href={navlink.href} title={navlink.title}>
                  {navlink.title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
