'use client';
import Link from 'next/link';
import { House } from '@phosphor-icons/react';

export default function ShowsPage() {
  return (
    <div className="relative min-h-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col justify-center items-center flex-1 text-center z-10 p-4">
      <section className="relative min-h-24 w-full flex justify-center items-center p-4">
        <div className="home-link-container">
          <Link href="/" className="home-link">
            <House weight="duotone" size={32} />
            <div className="home-link-label">Home</div>
          </Link>
        </div>
        <h2 className="page-title">Shows</h2>
      </section>
      <div className="w-full max-w-screen-md mx-auto flex flex-col justify-between items-center flex-auto p-8">
        Coming Soon...
      </div>
    </div>
  );
}
