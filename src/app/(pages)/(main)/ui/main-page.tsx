import { ProfileCard } from '@/widgets/profile-card';
import * as mainStyles from './main-page.css';
import { AboutData } from '@/widgets/profile-card/types';

const getAboutData = async (): Promise<AboutData> => {
  return {
    name: 'Dara',
    title: 'Front-End Engineer',
    description:
      'I am a passionate web developer with a focus on modern, stylish web applications.',
    details: ['소프트웨어학과 학사', 'Front-End 7년 이상 경력'],
  };
};

export const MainPage = async () => {
  const aboutData = await getAboutData();

  return (
    <main className={mainStyles.mainStyle}>
      <ProfileCard aboutData={aboutData} />
    </main>
  );
};
