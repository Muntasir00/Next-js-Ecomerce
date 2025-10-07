'use client';

import Container from '@/components/custom/Container';
import { RectangleButton } from '@/components/custom/RectangleButton';
import { cn } from '@/lib/utils';
import { ArrowDownIcon, PhoneCallIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CategoryList from './CategoryList';

export default function Menus({ className }: { className?: string }) {
  return (
    <div className={cn('h-[80px] bg-white border-b', className)}>
      <Container>
        <div className='flex items-center justify-between h-full'>
          <div className='flex item-center gap-[24px]'>
            <div className='relative'>
              <RectangleButton
                className='capitalize h-[48px] w-[240px] bg-gray-50 text-black hover:bg-gray-100'
                icon='none'
              >
                all categories <ArrowDownIcon />
              </RectangleButton>
              <CategoryList />
            </div>

            <div className='flex item-center gap-[24px]'>
              <Link href='/' className='flex gap-[6px] items-center'>
                <Image
                  src='/icons/MapPinLine.svg'
                  alt=''
                  width={24}
                  height={24}
                />
                <span className='text-body-sm-400 txt-gray-600'>
                  Track Order
                </span>
              </Link>

              <Link href='/' className='flex gap-[6px] items-center'>
                <Image
                  src='/icons/ArrowsCounterClockwise.svg'
                  alt=''
                  width={24}
                  height={24}
                />
                <span className='text-body-sm-400 txt-gray-600'>Compare</span>
              </Link>

              <Link href='/' className='flex gap-[6px] items-center'>
                <Image
                  src='/icons/Headphones.svg'
                  alt=''
                  width={24}
                  height={24}
                />
                <span className='text-body-sm-400 txt-gray-600'>
                  Customer Support
                </span>
              </Link>

              <Link href='/' className='flex gap-[6px] items-center'>
                <Image src='/icons/Info.svg' alt='' width={24} height={24} />
                <span className='text-body-sm-400 txt-gray-600'>Need Help</span>
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <PhoneCallIcon size={32} />
            <p className='text-gray-900'>+1-202-555-0104</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
