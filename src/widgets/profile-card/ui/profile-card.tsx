import Image from 'next/image';
import * as profileCardStyles from './profile-card.css';

export const ProfileCard = () => {
  return (
    <section className={profileCardStyles.profileCardSection}>
      <div className={profileCardStyles.profileCardContainer}>
        <div className={profileCardStyles.profileCardImageWrapper}>
          <Image
            src="/images/header_logo.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            style={{ borderRadius: '50%' }}
          />
        </div>
        <div className={profileCardStyles.profileCardContent}>
          <h2 className={profileCardStyles.profileCardName}>Dara</h2>
          <h4 className={profileCardStyles.profileCardTitle}>
            Front-End Engineer
          </h4>
        </div>
      </div>
    </section>
  );
};
