'use server';
import * as footerStyles from './common-footer.css';

export const CommonFooter = async () => {
  return (
    <footer className={footerStyles.footerStyle} role="contentinfo">
      <p>
        &copy; {new Date().getFullYear()} Dara's Portfolio. All rights reserved.
      </p>
    </footer>
  );
};
