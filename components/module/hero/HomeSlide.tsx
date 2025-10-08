'use client';

import Container from '@/components/custom/Container';
import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import {
    ArrowRight
} from "lucide-react"

export default function HomeSlide() {
    return (
        <section className='my-[24px]'>
            <Container>
                {/* wrapper */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-[24px]'>
                    <div
                        className='col-span-8 h-[520px] w-full xl:w-[872px] bg-[url(/images/hero/slide_left.png)]'></div>

                    <div className='hidden lg:col-span-4 lg:grid grid-cols-1 gap-y-[24px]'>
                        <div className='h-[248px] bg-[url(/images/hero/right_top.png)]'></div>
                        <div className='h-[248px] bg-[url(/images/hero/right_down.png)]'></div>
                    </div>
                </div>

              {/*  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">*/}
              {/*      /!* Hero Slider Section *!/*/}
              {/*      <div className="lg:col-span-2">*/}
              {/*          <div className="p-0 relative overflow-hidden border-2">*/}
              {/*              <Swiper*/}
              {/*                  modules={[Pagination, Autoplay]}*/}
              {/*                  pagination={{*/}
              {/*                      clickable: true,*/}
              {/*                      bulletClass: "swiper-pagination-bullet !bg-gray-300",*/}
              {/*                      bulletActiveClass: "swiper-pagination-bullet-active !bg-[#0989FF]",*/}
              {/*                  }}*/}
              {/*                  autoplay={{*/}
              {/*                      delay: 5000,*/}
              {/*                      disableOnInteraction: false,*/}
              {/*                  }}*/}
              {/*                  loop={true}*/}
              {/*                  className="hero-swiper"*/}
              {/*              >*/}
              {/*                  /!* Slide 1 - Xbox Consoles *!/*/}
              {/*                  <SwiperSlide>*/}
              {/*                      <div*/}
              {/*                          className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 min-h-[400px] flex items-center">*/}
              {/*                          <div*/}
              {/*                              className="flex flex-col md:flex-row items-center justify-between w-full gap-6">*/}
              {/*                              <div className="space-y-4 max-w-md">*/}
              {/*          <span className="bg-[#0989FF] text-white text-xs font-semibold uppercase">*/}
              {/*            THE BEST PLACE TO PLAY*/}
              {/*          </span>*/}
              {/*                                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">Xbox*/}
              {/*                                      Consoles</h2>*/}
              {/*                                  <p className="text-muted-foreground">*/}
              {/*                                      Save up to 50% on select Xbox games. Get 3 months of PC Game Pass*/}
              {/*                                      for $2 USD.*/}
              {/*                                  </p>*/}
              {/*                                  <button className="bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white gap-2">*/}
              {/*                                      SHOP NOW*/}
              {/*                                      <ArrowRight className="h-4 w-4"/>*/}
              {/*                                  </button>*/}
              {/*                              </div>*/}
              {/*                              <div className="relative flex-shrink-0">*/}
              {/*                                  <img*/}
              {/*                                      src="/xbox-console-with-controller.jpg"*/}
              {/*                                      alt="Xbox Console"*/}
              {/*                                      className="w-64 md:w-80 h-64 md:h-80 object-contain"*/}
              {/*                                  />*/}
              {/*                                  <span*/}
              {/*                                      className="absolute top-4 right-4 bg-[#0989FF] text-white text-xl font-bold px-4 py-2 rounded-full">*/}
              {/*            $299*/}
              {/*          </span>*/}
              {/*                              </div>*/}
              {/*                          </div>*/}
              {/*                      </div>*/}
              {/*                  </SwiperSlide>*/}

              {/*                  /!* Slide 2 - PlayStation 5 *!/*/}
              {/*                  <SwiperSlide>*/}
              {/*                      <div*/}
              {/*                          className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 min-h-[400px] flex items-center">*/}
              {/*                          <div*/}
              {/*                              className="flex flex-col md:flex-row items-center justify-between w-full gap-6">*/}
              {/*                              <div className="space-y-4 max-w-md">*/}
              {/*          <span className="bg-[#0989FF] text-white text-xs font-semibold uppercase">*/}
              {/*            NEXT-GEN GAMING*/}
              {/*          </span>*/}
              {/*                                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">PlayStation*/}
              {/*                                      5</h2>*/}
              {/*                                  <p className="text-muted-foreground">*/}
              {/*                                      Experience lightning-fast loading with an ultra-high speed SSD,*/}
              {/*                                      deeper immersion with support*/}
              {/*                                      for haptic feedback.*/}
              {/*                                  </p>*/}
              {/*                                  <button className="bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white gap-2">*/}
              {/*                                      SHOP NOW*/}
              {/*                                      <ArrowRight className="h-4 w-4"/>*/}
              {/*                                  </button>*/}
              {/*                              </div>*/}
              {/*                              <div className="relative flex-shrink-0">*/}
              {/*                                  <img*/}
              {/*                                      src="/playstation-5-console-with-controller.jpg"*/}
              {/*                                      alt="PlayStation 5"*/}
              {/*                                      className="w-64 md:w-80 h-64 md:h-80 object-contain"*/}
              {/*                                  />*/}
              {/*                                  <span*/}
              {/*                                      className="absolute top-4 right-4 bg-[#0989FF] text-white text-xl font-bold px-4 py-2 rounded-full">*/}
              {/*            $499*/}
              {/*          </span>*/}
              {/*                              </div>*/}
              {/*                          </div>*/}
              {/*                      </div>*/}
              {/*                  </SwiperSlide>*/}

              {/*                  /!* Slide 3 - Wireless Headphones *!/*/}
              {/*                  <SwiperSlide>*/}
              {/*                      <div*/}
              {/*                          className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 md:p-12 min-h-[400px] flex items-center">*/}
              {/*                          <div*/}
              {/*                              className="flex flex-col md:flex-row items-center justify-between w-full gap-6">*/}
              {/*                              <div className="space-y-4 max-w-md">*/}
              {/*                                  <span*/}
              {/*                                      className="bg-[#0989FF] text-white text-xs font-semibold uppercase">PREMIUM AUDIO</span>*/}
              {/*                                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">Wireless*/}
              {/*                                      Headphones</h2>*/}
              {/*                                  <p className="text-muted-foreground">*/}
              {/*                                      Industry-leading noise cancellation with premium sound quality. Up*/}
              {/*                                      to 30 hours of battery*/}
              {/*                                      life.*/}
              {/*                                  </p>*/}
              {/*                                  <button className="bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white gap-2">*/}
              {/*                                      SHOP NOW*/}
              {/*                                      <ArrowRight className="h-4 w-4"/>*/}
              {/*                                  </button>*/}
              {/*                              </div>*/}
              {/*                              <div className="relative flex-shrink-0">*/}
              {/*                                  <img*/}
              {/*                                      src="/wireless-headphones-premium.jpg"*/}
              {/*                                      alt="Wireless Headphones"*/}
              {/*                                      className="w-64 md:w-80 h-64 md:h-80 object-contain"*/}
              {/*                                  />*/}
              {/*                                  <span*/}
              {/*                                      className="absolute top-4 right-4 bg-[#0989FF] text-white text-xl font-bold px-4 py-2 rounded-full">*/}
              {/*            $349*/}
              {/*          </span>*/}
              {/*                              </div>*/}
              {/*                          </div>*/}
              {/*                      </div>*/}
              {/*                  </SwiperSlide>*/}
              {/*              </Swiper>*/}
              {/*          </div>*/}
              {/*      </div>*/}

              {/*      /!* Sidebar Promotions *!/*/}
              {/*      <div className="space-y-4">*/}
              {/*          <div className="p-6 bg-black text-white relative overflow-hidden min-h-[280px]">*/}
              {/*<span className="absolute top-3 right-3 bg-[#FFD700] text-black text-xs font-bold uppercase px-2 py-1">*/}
              {/*  29% OFF*/}
              {/*</span>*/}
              {/*              <div className="relative z-10">*/}
              {/*                  <p className="text-xs text-[#FFD700] mb-2 uppercase font-bold tracking-wide">SUMMER*/}
              {/*                      SALES</p>*/}
              {/*                  <h3 className="text-2xl font-bold mb-4 max-w-[140px]">New Google Pixel 9 Pro</h3>*/}
              {/*                  <button className="bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white gap-2">*/}
              {/*                      SHOP NOW*/}
              {/*                      <ArrowRight className="h-4 w-4"/>*/}
              {/*                  </button>*/}
              {/*              </div>*/}
              {/*              <img*/}
              {/*                  src="/google-pixel-smartphone-with-display.jpg"*/}
              {/*                  alt="Google Pixel 9 Pro"*/}
              {/*                  className="absolute bottom-0 right-0 w-48 h-56 object-contain"*/}
              {/*              />*/}
              {/*          </div>*/}

              {/*          <div className="p-5 bg-gray-50">*/}
              {/*              <div className="flex items-center gap-4">*/}
              {/*                  <div*/}
              {/*                      className="flex-shrink-0 w-28 h-28 bg-white rounded-lg flex items-center justify-center p-2">*/}
              {/*                      <img src="/wireless-earbuds.png" alt="Xiaomi FlipBuds Pro"*/}
              {/*                           className="w-full h-full object-contain"/>*/}
              {/*                  </div>*/}
              {/*                  <div className="flex-1">*/}
              {/*                      <h3 className="font-bold text-base mb-1">Xiaomi FlipBuds Pro</h3>*/}
              {/*                      <p className="text-[#0989FF] font-bold text-xl mb-3">$299 USD</p>*/}
              {/*                      <button className="bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white w-full gap-2 h-10">*/}
              {/*                          SHOP NOW*/}
              {/*                          <ArrowRight className="h-4 w-4"/>*/}
              {/*                      </button>*/}
              {/*                  </div>*/}
              {/*              </div>*/}
              {/*          </div>*/}
              {/*      </div>*/}
              {/*  </div>*/}


            </Container>
        </section>
    );
}
