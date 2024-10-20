'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import * as headerStyles from './common-header.css';

export const CommonHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={headerStyles.headerStyle}>
      <div className={headerStyles.logoStyle} aria-level={1}>
        <Image
          src="/images/header_logo.jpg"
          alt="Logo"
          className={headerStyles.logoImageStyle}
          width={40}
          height={40}
        />
        Dara's Portfolio
      </div>
      <button
        className={headerStyles.menuButtonStyle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="navigation"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav
        className={`${headerStyles.navStyle} ${menuOpen ? headerStyles.navOpenStyle : ''}`}
        id="navigation"
      >
        <ul className={headerStyles.navListStyle}>
          {['/', '/project'].map((path, index) => (
            <li key={index} className={headerStyles.navItemStyle}>
              <Link href={path} className={headerStyles.linkStyle}>
                {path === '/' ? 'ABOUT ME' : path.substring(1).toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
