import Image from 'next/image';
import { AboutMeData } from '../types';
import * as profileCardStyles from './profile-card.css';

const getAboutData = async (): Promise<AboutMeData> => {
  return {
    name: 'Dara',
    title: 'Front-End Engineer',
    details: ['소프트웨어학과 공학사', 'Front-End 8년 차'],
  };
};

export const ProfileCard = async () => {
  const { name, title, details } = await getAboutData();

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
          <h1 className={profileCardStyles.profileCardName}>{name}</h1>
          <h3 className={profileCardStyles.profileCardTitle}>{title}</h3>
          <ul className={profileCardStyles.profileCardDetails}>
            {details.map((details, index) => (
              <li key={`${index}_${details}`}>- {details}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
