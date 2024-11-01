import { ProfileCard } from '@/widgets/profile-card';
import { PortfolioList } from '@/widgets/portfolio-list';
import * as mainStyles from './main-page.css';

export const MainPage = async () => {
  return (
    <main className={mainStyles.mainStyle}>
      <ProfileCard />
      <PortfolioList />
    </main>
  );
};
