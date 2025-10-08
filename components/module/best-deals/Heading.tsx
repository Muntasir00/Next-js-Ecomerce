'use client';

import CountDown from '@/components/custom/CountDown';
import { ArrowRightIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

export default function Heading() {
  return (
    <div className='flex items-center flex-wrap justify-between'>
      <div className='flex items-center justify-between gap-[24px]'>
        <h3>Best Deals</h3>
        <span className='text-body-sm-400'>Deals ends in</span>
        <CountDown
          className='bg-warning-300 text-block text-body-md-400
        p-[12px] py-[6px]'
          endDate='Oct30,2025 23:59:00'
        />
      </div>
      <div className='flex'>
        <Link href='/products' className='py-[6px] flex items-center gap-[8px]'>
          <span className='text-body-sm-600 text-secondary-500'>
            Browse All Product
          </span>
          <ArrowRightIcon size={20} className='text-secondary-500' />
        </Link>
      </div>
    </div>
  );
}
