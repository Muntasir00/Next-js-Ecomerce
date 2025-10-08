'use client';

import Container from '@/components/custom/Container';
import React from 'react';
import Heading from './Heading';
import LeftBanner from './LeftBanner';
import ProductCard from './ProductCard';

export default function BestDeals() {
    return (
        <section className='py-[72px]'>
            <Container>

                <div className='flex flex-col gap-[24px]'>
                    <Heading/>

                    <div className='flex flex-wrap'>


                        <div className="grid grid-cols-5 grid-rows-2 gap-0 parent">
                            <div className="row-span-2  flex items-center justify-center">
                                <ProductCard cardHeight="full"/>
                                {/*<LeftBanner/>*/}
                            </div>
                            <div className=" flex items-center justify-center">
                                <ProductCard/>
                            </div>
                            <div className=" flex items-center justify-center">
                                <ProductCard/>
                            </div>
                            <div className=" flex items-center justify-center">
                                <ProductCard/>
                            </div>
                            <div className=" flex items-center justify-center">
                                <ProductCard/>
                            </div>
                            <div className="col-start-2  flex items-center justify-center">
                                <ProductCard/>
                            </div>
                            <div className="col-start-3  flex items-center justify-center">
                                <ProductCard/>
                            </div>
                            <div className="col-start-4  flex items-center justify-center">
                                <ProductCard/>
                            </div>
                            <div className="col-start-5  flex items-center justify-center">
                                <ProductCard/>
                            </div>
                        </div>

                        {/*<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 flex-1'>*/}
                        {/*  <ProductCard/>*/}
                        {/*  <ProductCard/>*/}
                        {/*  <ProductCard/>*/}
                        {/*  <ProductCard/>*/}
                        {/*  <ProductCard/>*/}
                        {/*  <ProductCard/>*/}
                        {/*  <ProductCard/>*/}
                        {/*  <ProductCard/>*/}
                        {/*</div>*/}


                    </div>
                </div>
            </Container>
        </section>
    );
}
