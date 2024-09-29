import React from 'react';
import Link from 'next/link';
import {
  FacebookLogo,
  InstagramLogo,
  SpotifyLogo
} from '@phosphor-icons/react';
export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full max-w-screen-xl mx-auto p-2">
      <h2 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased">
        Contact
      </h2>
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
