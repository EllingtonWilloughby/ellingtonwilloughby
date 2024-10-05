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
          <House weight="duotone" size={32} />
          <div className="link-label">Home</div>
        </Link>
        <h2 className="min-h-12 w-full text-center text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-16">
          Contact
        </h2>
      </section>

      <section className="w-full max-w-screen-md mx-auto grid grid-rows-2">
        <div className="flex flex-col items-between">
          <div className="text-center leading-7 text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased">
            <p className="grid-rows-1 rows-span-1 p-8">
              Reach out to Ellington Willoughby & the Mythical Squid by emailing
              us at{' '}
              <Link
                href="mailto:ellingtonwilloughby@gmail.com"
                className="min-h-72 this-link font-bold subpixel-antialiased"
              >
                this link
              </Link>
              , or on our socials through any of the links below:
            </p>
          </div>
          <div className="min-h-96 row-span-1 row-start-2 flex items-end ">
            <SocialIcons />
          </div>
        </div>
      </section>
    </div>
  );
}
