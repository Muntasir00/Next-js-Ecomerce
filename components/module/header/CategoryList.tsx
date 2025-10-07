'use client';

import { CaretRightIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import React from 'react';

export default function CategoryList() {
  return (
    <div className='absolute h-[436px] w-[240px] shadow-xl top-[64px] border'>
      <ul>
        <li className='h-[36px] w-full flex items-center justify-between px-4 cursor-pointer hover:bg-gray-50'>
          <span className='text-body-sm-400 text-gray-600 capitalize'>
            computer & laptop
          </span>
        </li>

        <li className='h-[36px] w-full flex items-center justify-between x-4 cursor-pointer hover:bg-gray-50'>
          <span className='text-body-sm-400 text-gray-600 capitalize'>
            computer accessories
          </span>
        </li>

        <li className='h-[36px] w-full flex items-center justify-between x-4 hover:bg-gray-50 cursor-pointer'>
          <span className='text-body-sm-400 text-gray-600 group-hover:text-gray-900 capitalize'>
            smartphone
          </span>
          <CaretRightIcon size={12} className='group-hover:text-gray-900' />

          <div className='absolute h-full lg:w-[700px] xl:w-[868px] shadow-xl border bg-white top-0 left-[250px] p-5 grid grid-cols-[164px_1fr_1fr] gap-5'>
            <div className='border'>
              <ul>
                <li className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'>
                  <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                    all
                  </span>
                </li>

                <li className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'>
                  <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                    Iphone
                  </span>
                </li>

                <li className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'>
                  <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                    Samsung
                  </span>
                </li>

                <li className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'>
                  <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                    Realme
                  </span>
                </li>

                <li className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'>
                  <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                    Xiaomi
                  </span>
                </li>

                <li className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'>
                  <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                    Oppo
                  </span>
                </li>

                <li className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'>
                  <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                    Vivo
                  </span>
                </li>

                <li className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'>
                  <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                    OnePlus
                  </span>
                </li>

                <li className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'>
                  <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                    Huawei
                  </span>
                </li>

                <li className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'>
                  <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                    Infinix
                  </span>
                </li>

                <li className='group hover:bg-gray-50 h-[36px] px-4 flex items-center'>
                  <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                    Tecno
                  </span>
                </li>
              </ul>
            </div>
            <div className=''>
              <div className='flex flex-col gap-4'>
                <span className='text-body-md-600 uppercase'>
                  FEATURED PHONES
                </span>

                <div className='flex item-center gap-3 border p-3'>
                  <Image
                    src='/images/product_card.svg'
                    alt='card image'
                    width={80}
                    height={80}
                  />
                  <div className='flex flex-col gap-2'>
                    <span className='text-body-sm-400'>
                      Samsung Electronics Samsung Galaxy S21 5G{' '}
                    </span>
                    <span className='text-body-sm-600 text-secondary-500'>
                      160$
                    </span>
                  </div>
                </div>

                <div className='flex item-center gap-3 border p-3'>
                  <Image
                    src='/images/product_card.svg'
                    alt='card image'
                    width={80}
                    height={80}
                  />
                  <div className='flex flex-col gap-2'>
                    <span className='text-body-sm-400'>
                      Samsung Electronics Samsung Galaxy S21 5G{' '}
                    </span>
                    <span className='text-body-sm-600 text-secondary-500'>
                      160$
                    </span>
                  </div>
                </div>

                <div className='flex item-center gap-3 border p-3'>
                  <Image
                    src='/images/product_card.svg'
                    alt='card image'
                    width={80}
                    height={80}
                  />
                  <div className='flex flex-col gap-2'>
                    <span className='text-body-sm-400'>
                      Samsung Electronics Samsung Galaxy S21 5G{' '}
                    </span>
                    <span className='text-body-sm-600 text-secondary-500'>
                      160$
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='border'>col 1</div>
          </div>
        </li>

        <li className='h-[36px] w-full flex items-center justify-between x-4 cursor-pointer hover:bg-gray-50'>
          <span className='text-body-sm-400 text-gray-600 capitalize'>
            Headphone
          </span>
        </li>

        <li className='h-[36px] w-full flex items-center justify-between x-4 cursor-pointer hover:bg-gray-50'>
          <span className='text-body-sm-400 text-gray-600 capitalize'>
            mobile accessories
          </span>
        </li>

        <li className='h-[36px] w-full flex items-center justify-between x-4 cursor-pointer hover:bg-gray-50'>
          <span className='text-body-sm-400 text-gray-600 capitalize'>
            gaming console
          </span>
        </li>

        <li className='h-[36px] w-full flex items-center justify-between x-4 cursor-pointer hover:bg-gray-50'>
          <span className='text-body-sm-400 text-gray-600 capitalize'>
            Camera & photo
          </span>
        </li>

        <li className='h-[36px] w-full flex items-center justify-between x-4 cursor-pointer hover:bg-gray-50'>
          <span className='text-body-sm-400 text-gray-600 capitalize'>
            Tv & Home Appliances
          </span>
        </li>

        <li className='h-[36px] w-full flex items-center justify-between x-4 cursor-pointer hover:bg-gray-50'>
          <span className='text-body-sm-400 text-gray-600 capitalize'>
            Camera & photo
          </span>
        </li>

        <li className='h-[36px] w-full flex items-center justify-between x-4 cursor-pointer hover:bg-gray-50'>
          <span className='text-body-sm-400 text-gray-600 capitalize'>
            Watch & Wearables
          </span>
        </li>

        <li className='h-[36px] w-full flex items-center justify-between x-4 cursor-pointer hover:bg-gray-50'>
          <span className='text-body-sm-400 text-gray-600 capitalize'>
            Gps & navigation
          </span>
        </li>

        <li className='h-[36px] w-full flex items-center justify-between x-4 cursor-pointer hover:bg-gray-50'>
          <span className='text-body-sm-400 text-gray-600 capitalize'>
            Wearable technology
          </span>
        </li>
      </ul>
    </div>
  );
}
