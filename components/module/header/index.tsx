import React from 'react';
import SocialMenu from '@/components/module/header/SocialMenu';
import MainMenu from '@/components/module/header/MainMenu';
import Menus from '@/components/module/header/Menus';
import { getCategories } from '@/action/category';
import { getProducts } from '@/action/product';
import { getCampaigns } from '@/action/campaign';
import { getPages } from '@/action/page';

export default async function Header() {
  const categories = await getCategories();
  const products = await getProducts();
  const campaigns = await getCampaigns('homepage-product-base-deal-section');
  const pages = await getPages();
  return (
    <header>
      <SocialMenu className='hidden lg:block' />
      <MainMenu />
      <Menus
        className='hidden lg:block'
        categories={categories}
        products={products}
        campaigns={campaigns}
        pages={pages}
      />
    </header>
  );
}
