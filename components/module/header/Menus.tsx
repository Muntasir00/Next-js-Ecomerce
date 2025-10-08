'use client';

import Container from '@/components/custom/Container';
import { RectangleButton } from '@/components/custom/RectangleButton';
import { cn } from '@/lib/utils';
import { ArrowDownIcon, PhoneCallIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CategoryList from './CategoryList';
import {
  TypeCategoryModel,
  TypePageModel,
  TypeProductModel,
  TypeSlideModel,
} from '@/types/models';

export default function Menus({
  className,
  categories,
  products,
  campaigns,
  pages,
}: {
  className?: string;
  categories: TypeCategoryModel[];
  products: TypeProductModel[];
  campaigns: TypeSlideModel[];
  pages: TypePageModel[];
}) {
  const [showcat, setShowCat] = useState<boolean>(false);

  return (
    <div className={cn('h-[80px] bg-white border-b', className)}>
      <Container>
        <div className='flex items-center justify-between h-full'>
          <div className='flex item-center gap-[24px]'>
            <div className='relative'>
              <RectangleButton
                className='capitalize h-[48px] w-[240px] bg-gray-50 text-black hover:bg-gray-100'
                icon='none'
                onClick={() => {
                  setShowCat(!showcat);
                }}
              >
                all categories <ArrowDownIcon />
              </RectangleButton>
              <CategoryList
                categories={categories}
                products={products}
                campaigns={campaigns}
                showcat={showcat}
                setShowCat={setShowCat}
              />
            </div>

            <div className='flex item-center gap-[24px]'>
              {pages?.map((item, idx) => (
                <Link
                  href={`/${item.slug}`}
                  className='flex gap-[6px] items-center'
                  key={idx}
                >
                  <Image src={item.image} alt='' width={24} height={24} />
                  <span className='text-body-sm-400 txt-gray-600'>
                    {item.name}
                  </span>
                </Link>
              ))}
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
