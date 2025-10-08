'use client';

import Container from '@/components/custom/Container';
import Logo from '@/components/custom/Logo';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <section className='bg-gray-900'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-[24px] py-[72px] px-[150px]'>
          <div className='flex flex-col gap-[24px]'>
            <Logo />
            <ul className='flex flex-col gap-[12px]'>
              <li className='flex flex-col gap-[12px]'>
                <span className='text-body-sm-400 text-gray-500'>
                  Customer Supports:
                </span>
                <span className='text-body-l-500 text-white'>
                  (629) 555-0129
                </span>
              </li>

              <li className='flex flex-col gap-[12px]'>
                <span className='text-body-sm-400 text-gray-500'>
                  4517 Washington Ave. Manchester, Kentucky 39495
                </span>
                <span className='text-body-md-500 text-white'>
                  info@kinbo.com
                </span>
              </li>
            </ul>
          </div>
          {/* </div> */}
          <div className='flex flex-col gap-[12px]'>
            <p className='text-label2 uppercase'>Top Category</p>
            <ul className='flex flex-col'>
              <li>
                <Link href='/' className='text-body-sm-500 text-gray-400'>
                  Computer & Laptop
                </Link>
              </li>
              <li>
                <Link href='/' className='text-body-sm-500 text-gray-400'>
                  SmartPhone
                </Link>
              </li>
              <li>
                <Link href='/' className='text-body-sm-500 text-gray-400'>
                  Headphone
                </Link>
              </li>

              <li className='relative'>
                <Link
                  href='/'
                  className='text-body-sm-500 before:absolute before:h-1 before:w-[24px] before:bg-warning-500 before:top-3 before:rounded-md'
                >
                  <span>Accessories</span>
                </Link>
              </li>

              <li>
                <Link href='/' className='text-body-sm-500 text-gray-400'>
                  Camera & Photo
                </Link>
              </li>
              <li>
                <Link href='/' className='text-body-sm-500 text-gray-400'>
                  TV & Homes
                </Link>
              </li>

              <li>
                <Link href='/' className='text-body-sm-500 text-gray-400'>
                  <span>Browse all products</span>
                  <ArrowRightIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
