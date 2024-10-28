import Image from 'next/image';
import { ButtonLinks } from '@/features/button-links';
import { AboutMeData } from '../types';
import * as profileCardStyles from './profile-card.css';

const getAboutData = async (): Promise<AboutMeData> => {
  return {
    name: 'Dara',
    title: 'Front-End Engineer',
    details: ['소프트웨어학과 공학사', 'Front-End 8년 차'],
    shareLinks: {
      Github: 'https://github.com/YunheeKim2513',
      Linkedin:
        'https://www.linkedin.com/in/%EC%9C%A4%ED%9D%AC-%EA%B9%80-668a57320/',
    },
  };
};

export const ProfileCard = async () => {
  const { name, title, details, shareLinks } = await getAboutData();

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
          <br />
          <ButtonLinks shareLinks={shareLinks} />
        </div>
      </div>
    </section>
  );
};