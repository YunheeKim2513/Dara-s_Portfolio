import { FC } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import * as buttonLinksStyles from './button-links.css';

interface ButtonLinksProps {
  shareLinks: { [key: string]: string };
}

export const ButtonLinks: FC<ButtonLinksProps> = ({ shareLinks }) => {
  return (
    <div className={buttonLinksStyles.buttonContainer}>
      {Object.keys(shareLinks).map((key, index) => {
        const buttonClass =
          key === 'Github'
            ? buttonLinksStyles.githubButton
            : buttonLinksStyles.baseButton;

        return (
          <a
            key={`${key}_${index}`}
            href={shareLinks[key]}
            target="_blank"
            rel="noreferrer"
            className={`${buttonLinksStyles.linkButton} ${buttonClass}`}
          >
            {key === 'Github' && <FaGithub />}
            {key === 'Linkedin' && <FaLinkedin />}
            {key}
          </a>
        );
      })}
    </div>
  );
};
