'use client';
import React from 'react';
import { IAlbum } from '../types.d';
import { albums } from '@/data';
import Link from 'next/link';
import Image from 'next/image';
import { House } from '@phosphor-icons/react';

export default function MusicPage() {
  return (
    <div className="relative min-h-screen w-full max-w-screen-xl mx-auto p-2">
      <section className="w-full relative max-h-40">
        <div className="link-container relative flex flex-col justify-center items-center p-2">
          <Link href="/" className="absolute top-4 left-0">
            <House weight="duotone" size={24} />
          </Link>
          <span className="link-label absolute top-2 left-5">Home</span>
        </div>
        <h2 className="font-normal text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-16">
          Music
        </h2>
      </section>

      <ul className="max-w-xs mx-auto p-2">
        {albums.map((album: IAlbum) => (
          <div
            key={album.src}
            className="link-container w-full flex flex-col justify-center items-center p-2"
          >
            <li className="flex flex-col justify-center items-center p-6">
              <Link href={album.link} className="text-center">
                <Image
                  src={album.src}
                  alt={album.alt}
                  width={500}
                  height={500}
                  priority
                />
                <label className="link-label">{album.title}</label>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
