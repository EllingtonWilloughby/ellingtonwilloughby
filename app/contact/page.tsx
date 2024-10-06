'use client';
import React from 'react';
import Link from 'next/link';
import { House } from '@phosphor-icons/react';
import SocialIcons from '@/contact/SocialIcons';
export default function ContactPage() {
  return (
    <div className="min-h-full w-full sm:max-w-96 md:max-w-screen-sm lg:max-w-screen-md mx-auto">
      <section className="relative max-h-40 w-full">
        <Link href="/" className="home-link-container absolute top-4 left-4">
          <House weight="duotone" size={32} />
          <div className="home-link-label">Home</div>
        </Link>
        <h2 className="min-h-20 w-full text-center text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-12">
          Contact
        </h2>
      </section>
      <section className="w-full max-w-screen-md mx-auto grid grid-rows-2 grid-cols-1 auto-cols-auto">
        <div className="row-start-1 row-span-2">
          <div className="text-center text-sm sm:text-base md:text-lg lg:text-xl leading-9 subpixel-antialiased p-6">
            <p className="grid-rows-1 rows-span-1 p-6">
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
          <div className="min-h-20 row-span-1 row-start-2 flex items-end p-2 m-4 ">
            <SocialIcons />
          </div>
        </div>
      </section>
    </div>
  );
}
