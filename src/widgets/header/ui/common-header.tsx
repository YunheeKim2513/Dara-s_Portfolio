'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import * as styles from './common-header.css';

export const CommonHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={styles.headerStyle}>
      <div className={styles.logoStyle} aria-level={1}>
        <Image
          src="/images/header_logo.jpg"
          alt="Logo"
          className={styles.logoImageStyle}
          width={40}
          height={40}
        />
        Dara's Portfolio
      </div>
      <button
        className={styles.menuButtonStyle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="navigation"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`${styles.navStyle} ${menuOpen ? styles.navOpenStyle : ''}`} id="navigation">
        <ul className={styles.navListStyle}>
          {['/'].map((path, index) => (
            <li key={index} className={styles.navItemStyle}>
              <Link href={path}></Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
