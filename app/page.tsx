'use client';
import { HorseIcon, HeartIcon, CubeIcon } from '@phosphor-icons/react';

export default function Home() {
  return (
    <div className='bg-cyan-500'>
      <div className='text-display1'>display1</div>
      <div className='text-display2'>display2</div>
      <h1 className='text-heading1'>heading 1</h1>
      <div className='text-heading2'>heading 2</div>

      <div>
        <HorseIcon />
        <HeartIcon color='#AE2983' weight='fill' size={32} />
        <CubeIcon color='teal' weight='duotone' />
      </div>
    </div>
  );
}
