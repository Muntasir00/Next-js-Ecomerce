'use client';

import Logo from '@/components/custom/Logo';
import React from 'react';
import SearchInput from './SearchInput';
import IconsGroup from './IconsGroup';
import Container from '@/components/custom/Container';
import SidebarMenu from './SidebarMenu';
import MobileSocialMenu from './MobileSocialMenu';

export default function MainMenu() {
  return (
    <div className='bg-secondary-700 h-[88px] border-t-[1px] border-white border-opacity-20'>
      <Container className='flex items-center h-full justify-between'>
        <SidebarMenu className='block lg:hidden' />
        <Logo className='hidden lg:block' />
        <SearchInput className='hidden lg:flex items-center gap-4 flex-1 max-w-[646px] bg-white h-[48px]' />
        <IconsGroup className='flex gap-6 item-center' />
        <MobileSocialMenu className='lg:hidden' />
      </Container>
    </div>
  );
}
