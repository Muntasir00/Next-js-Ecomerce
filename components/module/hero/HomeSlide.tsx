'use client';

import Container from '@/components/custom/Container';
import React from 'react';

export default function HomeSlide() {
  return (
    <section className='my-[24px]'>
      <Container>
        {/* wrapper */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-[24px]'>
          <div className='col-span-8 h-[520px] w-full xl:w-[872px] bg-[url(/images/hero/slide_left.png)]'></div>

          <div className='hidden lg:col-span-4 lg:grid grid-cols-1 gap-y-[24px]'>
            <div className='h-[248px] bg-[url(/images/hero/right_top.png)]'></div>
            <div className='h-[248px] bg-[url(/images/hero/right_down.png)]'></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
