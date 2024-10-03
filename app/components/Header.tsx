'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { INavigationLink } from '@/types';
import { navlinks } from '@/data';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full h-1/5 p-8">
      <nav className="w-full h-full p-2">
        <ul className="flex justify-between items-center p-2">
          {navlinks
            .filter((navlink: INavigationLink) => navlink.href !== pathname)
            .map((navlink: INavigationLink) => (
              <li key={navlink.href}>
                <Link
                  href={navlink.href}
                  title={navlink.title}
                  className="text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased"
                >
                  {navlink.title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
