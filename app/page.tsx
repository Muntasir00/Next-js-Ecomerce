import Payments from '@/components/custom/Payments';
import BestDeals from '@/components/module/best-deals';
import Footer from '@/components/module/footer';
import Header from '@/components/module/header';
import HomeSlide from '@/components/module/hero/HomeSlide';
import NewsLetter from '@/components/module/newsletters';
import PromotionalBanners from '@/components/custom/PromotionalBanners';
import News from '@/components/custom/News';
import Sale from '@/components/custom/Sale';
import MacBookPro from '@/components/custom/MacBookPro';

export default function Home() {
  return (
    <>
      <Header />
      <div className='container h-full w-full mx-auto'>
        <HomeSlide />

        {/* <section className='grid place-items-center grid-cols-1 md:grid-cols-4 gap-4 mt-6 p-4 bg-white border border-gray-100 p-[16px]'>
          <div className='w-[300px] sm:w-full p-[16px] flex gap-2  md:justify-start align-center lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-gray-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='currentColor'
              viewBox='0 0 256 256'
            >
              <path d='M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z'></path>
            </svg>
            <div className=''>
              <p className='font-semibold'>FASTED DELIVERY</p>
              <p className='text-gray-500 text-sm'>Delivery in 24/H</p>
            </div>
          </div>
          <div className='w-[300px] sm:w-full p-[16px] flex gap-2  md:justify-start align-center lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-gray-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='currentColor'
              viewBox='0 0 256 256'
            >
              <path d='M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z'></path>
            </svg>
            <div className=''>
              <p className='font-semibold'>24 HOURS RETURN</p>
              <p className='text-gray-500 text-sm'>100% money-back guarantee</p>
            </div>
          </div>
          <div className='w-[300px] sm:w-full p-[16px] flex gap-2  md:justify-start align-center lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-gray-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='currentColor'
              viewBox='0 0 256 256'
            >
              <path d='M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z'></path>
            </svg>
            <div className=''>
              <p className='font-semibold'>SECURE PAYMENT</p>
              <p className='text-gray-500 text-sm'>Your money is safe</p>
            </div>
          </div>
          <div className='w-[300px] sm:w-full p-[16px] flex gap-2  md:justify-start align-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='currentColor'
              viewBox='0 0 256 256'
            >
              <path d='M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,40h.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24Z'></path>
            </svg>
            <div className=''>
              <p className='font-semibold'>SUPPORT 24/7</p>
              <p className='text-gray-500 text-sm'>Live contact/message</p>
            </div>
          </div>
        </section> */}

        <Payments />
        <BestDeals />

        <PromotionalBanners />
        <MacBookPro />
        <Sale />
      </div>

      <News />
      <NewsLetter />
      <Footer />
    </>
  );
}
