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
      <section className="relative max-h-40 w-full">
        <Link href="/" className="link-container absolute top-4 left-4">
          <House weight="duotone" size={24} />
          <span className="link-label absolute top-4 left-6">Home</span>
        </Link>
        <h2 className="min-h-20 w-full text-center text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-10">
          Music
        </h2>
      </section>

      <section className="w-full">
        <ul className="w-full">
          {albums.map((album: IAlbum) => (
            <div
              key={album.src}
              className="album-link-container w-full flex flex-col justify-center items-center p-2"
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
                  <label className="album-link-label">{album.title}</label>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
}
