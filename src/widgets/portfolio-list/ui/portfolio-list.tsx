import { PortfolioData } from '../types';
import { portfolioGrid } from './portfolio-list.css';

const getPortfolioList = async (): Promise<PortfolioData[]> => {
  return [
    {
      logoImage: '/images/mobile_cnc_logo.png',
      companyName: 'mobile c&c',
      role: 'Front-End',
      link: 'https://www.mcnc.co.kr/html/HOM0100.html',
    },
  ];
};

export const PortfolioList = async () => {
  const portfolioList = await getPortfolioList();
  return (
    <section>
      <h2>Project | Portfolio</h2>
      <p>Major of Education, Work Experience and Club Activities</p>
      <div className={portfolioGrid}>
        {portfolioList.map((portfolio) => (
          <div key={portfolio.companyName}>{portfolio.companyName}</div>
        ))}
      </div>
    </section>
  );
};
