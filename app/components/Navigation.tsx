'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { INavigationLink } from '@/types';
import { navlinks } from '@/data';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-full p-2">
      <ul className="flex justify-between items-center p-2">
        {navlinks
          .filter((navlink: INavigationLink) => navlink.href !== pathname)
          .map((navlink: INavigationLink) => (
            <li key={navlink.href} className="gap-x-2">
              <Link
                href={navlink.href}
                title={navlink.title}
                className="text-base md:text-lg lg:text-xl subpixel-antialiased focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {navlink.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
