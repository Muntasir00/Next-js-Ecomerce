'use client';

import {
    TypeCategoryModel,
    TypeProductModel,
    TypeSlideModel,
    TypeSubCategoryModel,
} from '@/types/models';
import {CaretRightIcon} from '@phosphor-icons/react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import {cn} from '@/lib/utils';

export default function CategoryList({
                                         categories,
                                         products,
                                         campaigns,
                                         showcat,
                                         setShowCat,
                                     }: {
    categories: TypeCategoryModel[];
    products: TypeProductModel[];
    campaigns: TypeSlideModel[];
    showcat: boolean;
    setShowCat: (v: boolean) => void;
}) {
    const router = useRouter();
    console.log(products);
    // const filterProducts = products?.filter(item => item.featured == true);
    const filterProducts = [];
    return (
        <div
            className={cn(
                ' hidden absolute h-[436px] w-[240px] shadow-xl top-[64px] border',
                showcat && 'block'
            )}
        >
            <ul>
                {categories?.map((item, idx) => (
                    <li
                        onClick={() => router.push(`/categories/${item.slug}/products`)}
                        key={idx}
                        className='h-[36px] w-full flex items-center justify-between px-4 group hover:bg-gray-50 cursor-pointer'
                    >
            <span className='text-body-sm-400 text-gray-600 group-hover:text-gray-900 capitalize'>
              {item.name}
            </span>

                        {item.subCategory.length > 0 && (
                            <>
                                <CaretRightIcon
                                    size={12}
                                    className='group-hover:text-gray-900'
                                />
                                <div
                                    className='hidden group-hover:grid absolute h-full lg:w-[740px] xl:w-[868px] bg-white shadow-xl border  top-0 left-[250px] p-5 grid-cols-[100px_1fr_1fr] xl:grid-cols-[164px_1fr_1fr]  gap-5'>
                                    <div className=''>
                                        <ul>
                                            {item.subCategory.map(
                                                (itemSub: TypeSubCategoryModel, idx_sub) => (
                                                    <li
                                                        onClick={() =>
                                                            router.push(`/categories/${item.slug}/products`)
                                                        }
                                                        key={idx_sub}
                                                        className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'
                                                    >
                            <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                              {itemSub.name}
                            </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className=''>
                                        <div className='flex flex-col gap-4'>
                      <span className='text-body-md-600 uppercase'>
                        featured products
                      </span>

                                            {filterProducts
                                                .slice(0, 3)
                                                .map((itemFilter, idxFilter) => (
                                                    <div
                                                        key={idxFilter}
                                                        className='flex item-center gap-3 border p-3'
                                                    >
                                                        <Image
                                                            src={itemFilter.images[0].url ?? ''}
                                                            alt='card image'
                                                            width={80}
                                                            height={0}
                                                            className='h-[80px] object-scale-down'
                                                        />
                                                        <div className='flex flex-col gap-2'>
                              <span className='text-body-sm-400'>
                                {itemFilter.name}
                              </span>
                                                            <span className='text-body-sm-600 text-secondary-500'>
                                {itemFilter.price}$
                              </span>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>

                                    {/*campaigns */}
                                    {campaigns.length > 0 ? (
                                        <div
                                            className='border bg-center bg-cover bg-no-repeat'
                                            style={{backgroundImage: `url(${campaigns[0].image})`}}
                                        ></div>
                                    ) : (
                                        <div
                                            className="border bg-[url('/images/banner_subcategory.svg')] bg-cover bg-center bg-no-repeat"></div>
                                    )}
                                </div>
                            </>
                        )}

                        {/* sub category menu */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
