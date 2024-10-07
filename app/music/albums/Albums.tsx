import Link from 'next/link';
import Image from 'next/image';
import { IAlbum } from '@/types';
import { albums } from '@/data';
import './Albums.css';

export default function Albums() {
  return (
    <ul className="w-full flex flex-col justify-center items-center space-y-8">
      {' '}
      {/* Add space between items */}
      {albums.map((album: IAlbum) => (
        <li
          key={album.src}
          className="album-link w-full flex flex-col justify-center items-center rounded-lg"
        >
          <Link
            href={album.link}
            className="relative w-full flex flex-col justify-center items-center"
          >
            <Image
              src={album.src}
              alt={album.alt}
              width={200}
              height={200}
              className="rounded-lg shadow-lg h-auto max-w-60 sm:max-w-72 md:max-w-80 lg:max-w-96 z-20"
              priority
            />
            {/* <label className="absolute bottom-4 text-lg font-semibold px-2 py-1 rounded-lg"> */}
            <label className="p-2 font-semibold text-center subpixel-antialiased">
              {album.title}
            </label>
          </Link>
        </li>
      ))}
    </ul>
  );
}
