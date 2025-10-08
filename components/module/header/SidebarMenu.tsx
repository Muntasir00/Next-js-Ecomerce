'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function SidebarMenu({ className }: { className?: string }) {
  const [show, setshow] = useState(false);
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger>
          <MenuIcon className='text-white' size={32} />
        </SheetTrigger>
        <SheetContent>
          <Tabs>
            <TabsList>
              <TabsTrigger value='category'>Categories</TabsTrigger>
              <TabsTrigger value='pages'>Pages</TabsTrigger>
            </TabsList>
            <TabsContent value='category'>
              <div className='flex items-center justify-between'>
                <span className='capitalize hover:text-primary-500 cursor-pointer'>
                  Category 1
                </span>
                <ArrowRightIcon
                  className='h-5 w-5 cursor-pointer'
                  onClick={() => setshow(!show)}
                />
              </div>
            </TabsContent>

            <TabsContent value='pages'>
              <div className='flex items-center justify-between'>
                <span className='capitalize hover:text-primary-500 cursor-pointer'>
                  Homepage
                </span>
              </div>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>

      <Sheet open={show} onOpenChange={setshow}>
        <SheetTrigger></SheetTrigger>
        <SheetContent>
          <div>
            <Button onClick={() => setshow(!show)} variant='ghost'>
              <ArrowLeftIcon />
            </Button>
            <div>
              <Link href='/'>sub category</Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
