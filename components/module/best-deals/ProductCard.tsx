'use client';

import Image from 'next/image';
import React from 'react';

export default function ProductCard() {
  return (
    <div className='border border-gray-100 w-full sm:w-[280px] md:w-[255px] lg:w-[249px] p-4 hover:border-primary-500 cursor-pointer'>
      <div className=''>
        <Image
          src='/images/products/product_1.svg'
          alt='product'
          width={216}
          height={188}
        />
      </div>
      <div className='flex flex-col gap-[8px] items-start'>
        <p className='text-body-sm-400 text-black'>
          Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
        </p>
        <span className='text-secondary-500'>$2300</span>
      </div>
    </div>
  );
}
