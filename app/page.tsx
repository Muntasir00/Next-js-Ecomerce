import Payments from '@/components/custom/Payments';
import BestDeals from '@/components/module/best-deals';
import Footer from '@/components/module/footer';
import Header from '@/components/module/header';
import HomeSlide from '@/components/module/hero/HomeSlide';
import NewsLetter from '@/components/module/newsletters';

export default function Home() {
  return (
    <>
      <Header />
      <HomeSlide />
      <Payments />
      <BestDeals />
      <NewsLetter />
      <Footer />
    </>
  );
}
