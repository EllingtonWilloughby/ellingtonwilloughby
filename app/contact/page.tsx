'use client';
import React from 'react';
import Link from 'next/link';
import { House } from '@phosphor-icons/react';
import SocialIcons from '@/contact/SocialIcons';
export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full max-w-screen-xl mx-auto p-2">
      <section className="relative max-h-40 w-full">
        <Link href="/" className="link-container absolute top-4 left-4">
          <House weight="duotone" size={24} />
          <span className="link-label absolute top-4 left-6">Home</span>
        </Link>
        <h2 className="min-h-20 w-full text-center text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-10">
          Contact
        </h2>
      </section>

      <section className="min-h-96 w-full max-w-screen-lg mx-auto flex flex-col justify-around items-center p-2">
        <h3 className="text-center leading-7 font-normal text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased">
          Reach out to Ellington Willoughby & the Mythical Squid by emailing us
          at{' '}
          <Link
            href="mailto:ellingtonwilloughby@gmail.com"
            className="font-semibold subpixel-antialiased"
          >
            this link
          </Link>
          , or through any of the links below!
        </h3>
        <SocialIcons />
      </section>
    </div>
  );
}
