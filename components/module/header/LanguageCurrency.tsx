'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { SelectTrigger } from '@/components/ui/select';
import Image from 'next/image';

export default function LanguageCurrency({
  className,
}: {
  className?: string;
}) {
  const switchlocals = (val: string) => {};

  const switchcurrency = (val: string) => {};

  return (
    <div
      className={cn(className, 'flex flex-wrap justify-center gap-x-2 w-auto')}
    >
      <Select onValueChange={val => switchlocals(val)} defaultValue='en'>
        <SelectTrigger
          className={cn(className, 'focus:ring-0 focus:ring-offset-0')}
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value='en'>
            <div className='flex items-center justify-center gap-4 capitalize'>
              <Image
                src='https://cdn-icons-png.flaticon.com/128/555/555417.png'
                height={20}
                width={20}
                alt='en'
              />
              en
            </div>
          </SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={val => switchcurrency(val)} defaultValue='usd'>
        <SelectTrigger
          className={cn(className, 'focus:ring-0 focus:ring-offset-0')}
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value='usd'>
            <div className='flex items-center justify-center gap-4 capitalize'>
              usd
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
