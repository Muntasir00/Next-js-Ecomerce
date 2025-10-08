import React from 'react';
// import SocialMenu from '@/components/module/header/SocialMenu';
import MainMenu from '@/components/module/header/MainMenu';
import Menus from '@/components/module/header/Menus';
import { getCategories } from '@/action/category';
import { getProducts } from '@/action/product';
import { getCampaigns } from '@/action/campaign';
import { getPages } from '@/action/page';
import {
  Badge,
  ChevronDown,
  Heart,
  Search,
  ShoppingCart,
  User,
} from 'lucide-react';
import Icons from '@/components/custom/Icons';
import Image from 'next/image';

import { RotateCcw, Headphones, Phone, MapPin, Info } from 'lucide-react';

export default async function Header() {
  const categories = await getCategories();
  const products = await getProducts();
  const campaigns = await getCampaigns('homepage-product-base-deal-section');
  const pages = await getPages();
  return (
    <header>
      <div className='bg-black text-white py-2.5 px-4'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            {/*<Badge className="bg-white text-black hover:bg-white font-semibold px-2 py-0.5">Black</Badge>*/}
            <Image
              src='/images/Black.png'
              alt='Black'
              width={70}
              height={40}
              className='w-[70px] h-[40px]  object-cover'
            />
            <span className='font-medium'>Friday</span>
          </div>
          <div className='flex items-center gap-3'>
            <span className='text-sm'>Up to</span>
            <span className='text-[#FFD700] text-2xl font-bold'>59%</span>
            <span className='text-sm'>OFF</span>
          </div>
          <button className='bg-[#FFD700] text-black hover:bg-[#FFD700]/90 font-semibold px-4 py-1 h-auto text-sm'>
            SHOP NOW
          </button>
        </div>
      </div>
      <div className='bg-[#0989FF] text-white py-2.5 px-4'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='text-sm'>
            Welcome to Orion online eCommerce store.
          </div>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-3'>
              <span className='text-sm'>Follow us:</span>
              <div className='flex items-center gap-2'>
                <Icons />
              </div>
            </div>
            <div className='flex items-center gap-4 text-sm'>
              <button className='flex items-center gap-1 hover:opacity-80 transition-opacity'>
                Eng
                <ChevronDown className='h-3 w-3' />
              </button>
              <button className='flex items-center gap-1 hover:opacity-80 transition-opacity'>
                USD
                <ChevronDown className='h-3 w-3' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className='bg-[#0989FF] text-white border-t-[1px] border-t-white'>
        <div className='max-w-7xl mx-auto py-4'>
          <div className='flex items-center justify-between gap-6'>
            {/* Logo */}
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                <div className='w-5 h-5 border-3 border-[#0989FF] rounded-full' />
              </div>
              <h1 className='text-xl font-bold whitespace-nowrap'>
                JADEED GADGETS
              </h1>
            </div>

            {/* Search Bar */}
            <div className='flex-1 max-w-md'>
              <div className='relative'>
                <input
                  placeholder='Search for anything...'
                  className='file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input min-w-0 rounded-md px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-full bg-white text-black border-0 pr-12 h-11 placeholder:text-gray-400'
                />
                <button className='absolute right-1 top-1 text-gray-600 hover:text-gray-900 hover:bg-transparent h-9 w-9'>
                  <Search className='h-5 w-5' />
                </button>
              </div>
            </div>

            {/* Right Section - Icons */}
            <div className='flex items-center gap-4'>
              {/* Cart with Badge */}
              <button className='relative hover:opacity-80 transition-opacity'>
                <ShoppingCart className='h-6 w-6' />
                <span className='rounded-md font-medium whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-primary/90 absolute -top-2 -right-2 bg-[#FF8A00] text-white h-5 w-5 flex items-center justify-center p-0 text-xs border-2 border-[#0989FF]'>
                  2
                </span>
              </button>

              {/* Wishlist/Heart Icon */}
              <button className='hover:opacity-80 transition-opacity'>
                <Heart className='h-6 w-6' />
              </button>

              {/* User/Account Icon */}
              <button className='hover:opacity-80 transition-opacity'>
                <User className='h-6 w-6' />
              </button>
            </div>
          </div>
        </div>
      </section>

      <nav className='bg-white border-b'>
        <div className='max-w-7xl mx-auto px-4 py-3'>
          <Menus
            className='hidden lg:block'
            categories={categories}
            products={products}
            campaigns={campaigns}
            pages={pages}
          />
        </div>
      </nav>
    </header>
  );
}
