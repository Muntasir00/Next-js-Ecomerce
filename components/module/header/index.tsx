'use client';

import React from 'react';
import SocialMenu from '@/components/module/header/SocialMenu';
import MainMenu from '@/components/module/header/MainMenu';
import Menus from '@/components/module/header/Menus';

export default function Header() {
  return (
    <div>
      <SocialMenu className='hidden lg:block' />
      <MainMenu />
      <Menus className='hidden lg:block' />
    </div>
  );
}
