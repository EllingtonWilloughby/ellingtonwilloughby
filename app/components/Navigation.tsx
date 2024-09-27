'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../modules/navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav
      className="flex justify-between items-center p-8"
      aria-label="Main Navigation"
    >
      <div className={styles.navcontainer}>
        <button
          type="button"
          title="Navigation Menu"
          onClick={toggleMenu}
          className={styles.toggle}
          aria-label="Navigation Menu"
        >
          ☰
        </button>
        <ul className={`${styles.navlinks} ${isMenuOpen ? styles.show : ''}`}>
          <li>
            <Link href="home" title="Link to the home page">
              home
            </Link>
          </li>
          <li>
            <Link href="about" title="Link to the about page">
              about
            </Link>
          </li>
          <li>
            <Link href="music" title="Link to the music page">
              music
            </Link>
          </li>
          <li>
            <Link href="shows" title="Link to the shows page">
              shows
            </Link>
          </li>
          <li>
            <Link href="contact" title="Link to the contact page">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
