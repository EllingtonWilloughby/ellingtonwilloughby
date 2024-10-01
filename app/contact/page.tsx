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
        <h2 className="text-center font-normal text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-16">
          Contact
        </h2>
      </section>

      <section className="min-h-96 w-full border-2 border-red-400 max-w-screen-lg mx-auto flex flex-col justify-around items-center p-2">
        <h3 className="text-center leading-7 font-normal text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased">
          Reach out to Ellington Willoughby & the Mythical Squid by emailing us
          at{' '}
          <Link
            href="mailto:ellingtonwilloughby@gmail.com"
            className="font-semibold subpixel-antialiased"
          >
            this link
          </Link>
          , or on our socials through any of the links below:
        </h3>
        <div className="flex justify-center items-center p-2">
          <article className="link-container">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/EllingtonWilloughby"
            >
              <FacebookLogo weight="duotone" size="32" />
            </Link>
            <label className="link-label">Facebook</label>
          </article>

          <article className="link-container">
            <Link target="_blank" rel="noopener noreferrer" href="#">
              <InstagramLogo weight="duotone" size="32" />
            </Link>
            <label className="link-label">Instagram</label>
          </article>

          <article className="link-container">
            <Link target="_blank" rel="noopener noreferrer" href="#">
              <SpotifyLogo weight="duotone" size="32" />
            </Link>
            <label className="link-label">Spotify</label>
          </article>
        </div>
      </section>
    </div>
  );
}
