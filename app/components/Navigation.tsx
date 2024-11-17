"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { INavigationLink } from "@/lib/types";
import { navlinks } from "@/lib/navlinks";

export default function Navigation() {
  const pathname = usePathname();

  const normalizePath = (path: string) => path.replace(/\/$/, "");

  return (
    <nav className="w-full max-w-screen-md mx-auto py-8 px-6 md:py-8 md:px-12 md:mt-8">
      <ul className="flex justify-between items-center gap-x-4 p-2">
        {navlinks
          .filter(
            (navlink: INavigationLink) =>
              normalizePath(navlink.href) !== normalizePath(pathname)
          )
          .map((navlink: INavigationLink) => (
            <li key={navlink.href} className="gap-x-2">
              <Link
                href={navlink.href}
                title={navlink.title}
                className="text-base md:text-lg lg:text-xl subpixel-antialiased focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-opacity-75 transition"
              >
                {navlink.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
