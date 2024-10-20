'use server';
import * as footerStyles from './common-footer.css';

export const CommonFooter = async () => {
  return (
    <footer className={footerStyles.footerStyle} role="contentinfo">
      <div className={footerStyles.footerContentStyle}>
        <p>
          &copy; {new Date().getFullYear()} Dara's Portfolio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
