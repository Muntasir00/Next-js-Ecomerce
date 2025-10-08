'use client';

import { Badge } from '@/components/custom/Badge';
import Image from 'next/image';
import React from 'react';
import { Rating } from '@mui/material';
import { RectangleButton } from '@/components/custom/RectangleButton';
import { ShoppingCartIcon } from '@phosphor-icons/react';

export default function LeftBanner() {
  return (
    <div className='border w-full lg:w-[328px] xl:w-[328px]  p-4 flex flex-wrap sm:flex-nowrap  lg:flex-wrap gap-4 h-fit'>
      <div className='relative w-max'>
        <Image
          src='/images/products/leftbanner.svg'
          width={280}
          height={268}
          alt=''
          className='w-full'
        />

        {/* discounts */}
        <div className='flex gap-2 flex-col absolute top-4 left-0'>
          <Badge variant='warning' className='text-black'>
            32% off
          </Badge>
          <Badge variant='danger' className='text-white uppercase'>
            hot
          </Badge>
        </div>
      </div>

      {/* content */}
      <div className='flex flex-col gap-[12px]'>
        <div className='flex flex-col gap-[6px]'>
          <div className='flex items-center gap-4'>
            <Rating readOnly name='hover-feedback' value={4} precision={0.5} />
            <span className='text-body-sm-400 text-gray-500'> (52,677)</span>
          </div>
          <h1 className='text-body-md-400 text-block'>
            Xbox Series S - 512GB SSD Console with Wireless Controller - EU
            Versio...
          </h1>
        </div>

        <div className='inline-flex items-center gap-[4px]'>
          <span className='text-gray-300 text-[16px]/24'>$855.99</span>
          <span className='text-secondary-500 text-body-l-600'>$442.99</span>
        </div>

        <p className='text-body-sm-400 text-gray-600 text-balance'>
          Games built using the Xbox Series X|S development kit showcase
          unparalleled load times, visuals.
        </p>
      </div>
      <div className='mt-4'>
        <RectangleButton variant='primary' icon='none' className='w-full'>
          <ShoppingCartIcon size={20} className='text-white' />
          <span>ADD TO CART</span>
        </RectangleButton>
      </div>
      <div>button</div>
    </div>
  );
}
