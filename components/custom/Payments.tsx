'use client';

import React from 'react';
import Container from './Container';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  CreditCardIcon,
  HeadphonesIcon,
  PackageIcon,
  TrophyIcon,
} from '@phosphor-icons/react';

export default function Payment() {
  return (
    <section className='p-[16px]'>
      <Container>
        <Swiper
          style={{ width: '100%' }} // ensure container width
          breakpoints={{
            320: { spaceBetween: 28, slidesPerView: 1 },
            575: { spaceBetween: 28, slidesPerView: 2 },
            1024: { spaceBetween: 28, slidesPerView: 3 },
            1440: { spaceBetween: 28, slidesPerView: 4 },
          }}
          //   spaceBetween={28}
          //   slidesPerView={3}
          navigation={false}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          //   onSlideChange={() => console.log('slide change')}
          //   onSwiper={swiper => console.log(swiper)}
          className='p-[16px] border border-gray-100 flex items-center '
        >
          <SwiperSlide className='py-4'>
            <div className='flex items-center gap-[16px] p-[16px] justify-center lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-gray-100'>
              <PackageIcon size={40} />
              <div className='flex flex-col gap-[16px]'>
                <h6 className='text-label3 text-black uppercase'>
                  Fasted Delivery
                </h6>

                <span className='text-body-sm-400 text-gray-600'>
                  Delivery in 24/H
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-4'>
            <div className='flex items-center gap-[16px] p-[16px] justify-center lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-gray-100'>
              <TrophyIcon size={40} />
              <div className='flex flex-col gap-[16px]'>
                <h6 className='text-label3 text-black uppercase'>
                  24 Hours Return
                </h6>

                <span className='text-body-sm-400 text-gray-600'>
                  100% money-back guarantee
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-4'>
            <div className='flex items-center gap-[16px] p-[16px] justify-center lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-gray-100'>
              <CreditCardIcon size={40} />
              <div className='flex flex-col gap-[16px]'>
                <h6 className='text-label3 text-black uppercase'>
                  Secure Payment
                </h6>

                <span className='text-body-sm-400 text-gray-600'>
                  our money is safe
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-4'>
            <div className='flex items-center gap-[16px] p-[16px] justify-center lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-gray-100'>
              <HeadphonesIcon size={40} />
              <div className='flex flex-col gap-[16px]'>
                <h6 className='text-label3 text-black uppercase'>
                  Support 24/7
                </h6>

                <span className='text-body-sm-400 text-gray-600'>
                  Live contact/message
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}
