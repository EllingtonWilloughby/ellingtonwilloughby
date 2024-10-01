'use client';
import React from 'react';
import Link from 'next/link';
import {
  House,
  FacebookLogo,
  InstagramLogo,
  SpotifyLogo
} from '@phosphor-icons/react';
export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full max-w-screen-xl mx-auto p-2">
      <section className="relative w-full flex flex-col justify-start items-center flex-1 max-h-40">
        <div className="link-container absolute top-0 left-0 flex flex-col justify-center items-center p-2">
          <Link href="/" className="">
            <House weight="duotone" size={24} />
          </Link>
          <span className="link-label">Home</span>
        </div>
        <div className="text-center font-normal text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-16">
          Contact
        </div>
      </section>
      <h3>
        Reach out to Ellington Willoughby & the Mythical Squid by emailing us
        <Link href="mailto:ellingtonwilloughby@gmail.com">here</Link>, or on out
        socials through any of the links below:
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/EllingtonWilloughby"
        >
          <FacebookLogo weight="duotone" size="32" />
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href="#">
          <InstagramLogo weight="duotone" size="32" />
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href="#">
          <SpotifyLogo weight="duotone" size="32" />
        </Link>
        Spotify
      </h3>
    </div>
  );
}
