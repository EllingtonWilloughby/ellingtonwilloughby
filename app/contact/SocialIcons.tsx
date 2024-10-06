import Link from 'next/link';
import {
  FacebookLogo,
  InstagramLogo,
  SpotifyLogo
} from '@phosphor-icons/react';
import './SocialIcons.css';

export default function SocialIcons() {
  return (
    <div className="w-full flex justify-around items-center">
      <article className="social-link-container">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/EllingtonWilloughby"
          className="flex justify-center items-center text-center"
        >
          <FacebookLogo weight="duotone" size="40" className="social-icon" />
        </Link>
        <label className="social-link-label">Facebook</label>
      </article>

      <article className="social-link-container">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/ellingtonwilloughby/"
        >
          <InstagramLogo weight="duotone" size="40" className="social-icon"/>
        </Link>
        <label className="social-link-label">Instagram</label>
      </article>

      <article className="social-link-container">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/artist/4Uv5Mvl5OKP5oK6uFDp7TZ"
        >
          <SpotifyLogo weight="duotone" size="40" className="social-icon" />
        </Link>
        <label className="social-link-label">Spotify</label>
      </article>
    </div>
  );
}
