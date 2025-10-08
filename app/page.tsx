import Payments from '@/components/custom/Payments';
import BestDeals from '@/components/module/best-deals';
import Header from '@/components/module/header';
import HomeSlide from '@/components/module/hero/HomeSlide';

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSlide />
      <Payments />
      <BestDeals />
    </div>
  );
}
