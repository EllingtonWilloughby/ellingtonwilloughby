import Link from 'next/link';
import Image from 'next/image';
import { IAlbum } from '@/types';
import { albums } from '@/data';
import './Albums.css';

export default function Albums() {
  return (
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
                className="rounded-lg shadow-lg"
                priority
              />
              <label className="album-link-label">{album.title}</label>
            </Link>
          </li>
        </div>
      ))}
    </ul>
  );
}
