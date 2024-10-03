import Link from 'next/link';
import {
  FacebookLogo,
  InstagramLogo,
  SpotifyLogo
} from '@phosphor-icons/react';

export default function SocialIcons() {
  return (
    <div className="w-full flex justify-around items-center p-2">
      <article className="link-container">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/EllingtonWilloughby"
        >
          <FacebookLogo weight="duotone" size="40" />
        </Link>
        <label className="link-label">Facebook</label>
      </article>

      <article className="link-container">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/ellingtonwilloughby/"
        >
          <InstagramLogo weight="duotone" size="40" />
        </Link>
        <label className="link-label">Instagram</label>
      </article>

      <article className="link-container">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/artist/4Uv5Mvl5OKP5oK6uFDp7TZ"
        >
          <SpotifyLogo weight="duotone" size="40" />
        </Link>
        <label className="link-label">Spotify</label>
      </article>
    </div>
  );
}
