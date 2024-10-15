import * as styles from './common-header.css';

export const CommonHeader = () => {
  return (
    <header className={styles.headerStyle}>
      <div className={styles.logoStyle} aria-level={1}>
        My Portfolio
      </div>
    </header>
  );
};
