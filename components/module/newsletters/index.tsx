'use client';

import Container from '@/components/custom/Container';
import { RectangleButton } from '@/components/custom/RectangleButton';
import { Input } from '@mui/material';
import { Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function NewsLetter() {
  return (
    <section className='bg-secondary-700 py-[72px]'>
      <Container>
        <div className='w-full flex flex-col items-center justify-center gap-[32px]'>
          <div className='flex flex-col gap-[12px] items-center'>
            <h1 className='text-white text-center'>
              Subscribe to our newsletter
            </h1>
            <p className='text-body-md-400 text-center text-white'>
              Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
              libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
            </p>
          </div>

          {/* forms */}
          <div className='flex justify-center bg-white w-full lg:w-[624px]  p-[12px] gap-2 mx-auto'>
            <Input
              placeholder='Enter your email'
              className='flex-1 text-black placeholder-gray-500 
                placeholder:text-body-md-400 border-none focus-visible:ring-0'
            />
            <RectangleButton
              icon='after'
              size='sm'
              variant='primary'
              className=''
            >
              <Loader2Icon className='hidden mr-2 h-6 w-6 animate-spin' />
              <span className='p-3'>subscribe</span>
            </RectangleButton>
          </div>

          <div className='flex flex-wrap justify-center gap-[48px]'>
            <Image
              src='/images/logo/Google.png'
              width={72}
              height={23}
              alt='image-logo'
            />
            <Image
              src='/images/logo/amazon.png'
              width={72}
              height={23}
              alt='image-logo'
            />
            <Image
              src='/images/logo/philips.png'
              width={72}
              height={23}
              alt='image-logo'
            />
            <Image
              src='/images/logo/toshiba.png'
              width={72}
              height={23}
              alt='image-logo'
            />
            <Image
              src='/images/logo/samsung.png'
              width={72}
              height={23}
              alt='image-logo'
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
