import * as React from 'react';
import * as buttonLinksStyles from './button-links.css';

interface ButtonLinksProps {
  children: React.ReactNode;
  className?: string;
  linkURL: string;
}

export const ButtonLinks = ({
  children,
  className,
  linkURL,
}: ButtonLinksProps) => (
  <a
    href={linkURL}
    target="_blank"
    rel="noreferrer"
    className={`${buttonLinksStyles.linkButton} ${className}`}
  >
    {children}
  </a>
);
