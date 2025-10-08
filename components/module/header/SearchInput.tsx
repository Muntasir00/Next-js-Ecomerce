'use client';

import { Badge } from '@/components/custom/Badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { m } from 'framer-motion';
import axios from 'axios';
import { TypeProductModel } from '@/types/models';

export default function SearchInput({ className }: { className?: string }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [data, setData] = useState<TypeProductModel[]>([]);
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.currentTarget.value;
    if (search.length > 1) {
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + '/api/public/products', {
          params: {
            search: search,
          },
        })
        .then(response => {
          setData(response.data.data || []);
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {});
    }
  };
  return (
    <div className={cn('px-2 relative z-50', className)}>
      <Input
        className='border-none shadow-none focus:ring-white'
        placeholder='Search for anything'
        onMouseDown={() => setOpenDropdown(!openDropdown)}
        onInput={handleSearch}
      />
      <Button variant='icon'>
        <Search />
      </Button>
      {/* search dropdown */}
      <m.div
        onMouseLeave={() => setOpenDropdown(false)}
        initial={{ y: -15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -15, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'hidden h-[610px] absolute w-full top-12 bg-white border overflow-auto backdrop-filter shadow-gray-700 shadow-md left-0',
          openDropdown && 'flex'
        )}
      >
        <m.div className='flex flex-col gap-y-6 w-full'>
          {data?.map((item: TypeProductModel, idx) => (
            <Link
              key={idx}
              href=''
              className='flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700'
            >
              <Image
                src={item.images[0].url}
                width={100}
                height={0}
                alt='product image'
              />
              <div className='flex flex-col gap-1'>
                <h3>{item.name}</h3>
                <Badge className='' variant='warning'>
                  - {item.discount} %
                </Badge>
                <h3>{item.price}$</h3>
              </div>
            </Link>
          ))}
        </m.div>
      </m.div>
    </div>
  );
}
