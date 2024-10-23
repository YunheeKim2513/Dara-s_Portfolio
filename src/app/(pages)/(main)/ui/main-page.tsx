import { ProfileCard } from '@/widgets/profile-card';
import * as mainStyles from './main-page.css';

export const MainPage = () => {
  return (
    <main className={mainStyles.mainStyle}>
      <ProfileCard />
    </main>
  );
};
