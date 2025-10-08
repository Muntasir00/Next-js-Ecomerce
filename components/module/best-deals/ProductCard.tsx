'use client';

import {Eye, Heart, ShoppingCart, Star} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function ProductCard({cardHeight}: { className?: string, cardHeight?: string }) {
    const imageHeight:number = cardHeight ? 268 : 216;
    const cardHeight1:string = cardHeight ? cardHeight : '[296px]';
    return (
        <>
            <div
                className={` h-${cardHeight1}  border border-gray-100 p-4 `}>
                <div className="relative mb-3">
                    <Image
                        src='/images/products/product_1.svg'
                        alt='product'
                        className="w-full object-contain group-hover:scale-105 transition-transform"
                        width={216}
                        height={imageHeight}
                    />
                </div>

                {/* Star Rating */}
                {cardHeight && (
                    <div className="flex items-center gap-1 mb-2">
                        {Array.from({length: 5}).map((_, i) => (
                            <Star
                                key={i}
                                className="h-3 w-3  fill-[#FFD700] text-[#FFD700]"
                            />
                        ))}
                        {/*{reviewCount && <span className="text-xs text-muted-foreground ml-1">({reviewCount.toLocaleString()})</span>}*/}
                    </div>
                )}

                <h3 className="text-sm font-medium mb-2 line-clamp-2 min-h-[2.5rem]">
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                </h3>

                {
                    cardHeight && (
                        <div className="gap-3">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-sm text-muted-foreground line-through">$2000</span>
                                <span className="text-[#0989FF] font-bold text-lg">$2300</span>
                            </div>
                            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                                Games built using the Xbox Series X|S development kit showcase unparalleled load times,
                                visuals.
                            </p>

                            <div className="flex items-center justify-between gap-2 mt-4">
                                <button className="cursor-pointer p-3 bg-orange-50 rounded-md hover:bg-orange-100 transition">
                                    <Heart className="w-5 h-5" />
                                </button>
                                <button className="cursor-pointer flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-2 py-3 rounded-md transition">
                                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                                </button>
                                <button className="cursor-pointer p-3 bg-orange-50 rounded-md hover:bg-orange-100 transition">
                                    <Eye className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )
                }

                {
                    !cardHeight && (
                        <div className="flex items-center gap-2">
                            <span className="text-[#0989FF] font-bold">$2300</span>
                        </div>
                    )
                }

            </div>
            {/*<div*/}
            {/*    className='border border-gray-100 w-full sm:w-[280px] md:w-[255px] lg:w-[249px] p-4 hover:border-primary-500 cursor-pointer'>*/}
            {/*    <div className=''>*/}
            {/*        <Image*/}
            {/*            src='/images/products/product_1.svg'*/}
            {/*            alt='product'*/}
            {/*            width={216}*/}
            {/*            height={188}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className='flex flex-col gap-[8px] items-start'>*/}
            {/*        <p className='text-body-sm-400 text-black'>*/}
            {/*            Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...*/}
            {/*        </p>*/}
            {/*        <span className='text-secondary-500'>$2300</span>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>
    );
}
