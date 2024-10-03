'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useColorSchemeContext } from '@/app/lib/context/ColorSchemeContext';
import { PiHouseFill } from 'react-icons/pi';

export default function Music() {
  const { colorScheme } = useColorSchemeContext();

  const musicTitle = colorScheme ? '/images/music_dk.svg' : '/images/music.svg';

  return (
    <div className="relative min-h-screen max-w-screen-md w-full mx-auto flex flex-col justify-start items-center p-6">
      <Image
        src={musicTitle}
        height={500}
        width={500}
        alt="music heading"
        className="-mt-20 -mb-20 pt-6"
      />

      <Link href="/">
        <span className="absolute top-8 left-8 text-sm">
          <PiHouseFill size={24} />
        </span>
      </Link>

      <div className="container flex flex-col justify-start items-center mt-6">
        <div className="album-container">
          <Link href="https://ellingtonwilloughby.bandcamp.com/album/safari-danger">
            <Image
              src="/images/safaridanger.jpg"
              height={240}
              width={240}
              className="album-image"
              alt="safari danger"
            />
            <span className="album-name">
              Safari Danger
              <p className="caption">released October 20, 2021</p>
            </span>
          </Link>
        </div>

        <div className="album-container">
          <Link href="https://ellingtonwilloughby.bandcamp.com/album/danger-safari">
            <Image
              src="/images/safaridanger.jpg"
              height={240}
              width={240}
              className="album-image"
              alt="danger safari"
            />
            <span className="album-name">
              Danger Safari
              <p className="caption">released May 27, 2020</p>
            </span>
          </Link>
        </div>

        <div className="album-container">
          <Link
            href="https://ellingtonwilloughby.bandcamp.com/album/moonflower"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/moonflower.jpg"
              layout="responsive"
              width={240}
              height={240}
              className="album-image"
              alt="moonflower"
            />
            <span className="album-name">
              Moonflower
              <p className="caption">released September 23, 2016</p>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
