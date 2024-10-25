import Image from 'next/image';
import { AboutData } from '../types';
import * as profileCardStyles from './profile-card.css';

interface ProfileCardProps {
  aboutData: AboutData;
}

export const ProfileCard = ({ aboutData }: ProfileCardProps) => {
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
          <h2 className={profileCardStyles.profileCardName}>
            {aboutData.name}
          </h2>
          <h4 className={profileCardStyles.profileCardTitle}>
            {aboutData.title}
          </h4>
        </div>
      </div>
    </section>
  );
};
