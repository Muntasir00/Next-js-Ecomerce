import {ArrowRight, Badge} from "lucide-react";
import Image from 'next/image';

export default function PromotionalBanners() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Apple HomePod Mini Card */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="space-y-4 max-w-xs">
                        <span data-slot="badge"
                              className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-[#0989FF] text-white text-xs font-semibold uppercase">INTRODUCING</span>
                        <h3 className="text-3xl font-bold text-foreground">New Apple Homepod Mini</h3>
                        <p className="text-sm text-muted-foreground">
                            Jam-packed with innovation, HomePod mini delivers unexpectedly.
                        </p>
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3 bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white gap-2">
                            SHOP NOW
                            <ArrowRight className="h-4 w-4"/>
                        </button>
                    </div>
                    <div className="relative flex-shrink-0">
                        <Image
                            width={240} height={240}
                            src="/images/PromotionalBanners/white-apple-homepod-mini-smart-speaker.jpg"
                            alt="Apple HomePod Mini"
                            className="w-48 h-48 object-contain"/>
                    </div>
                </div>
            </div>

            {/* Xiaomi Mi 11 Ultra Card */}
            <div className="p-8 bg-black text-white relative overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="space-y-4 max-w-xs">
                        <span data-slot="badge"
                              className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-[#FFD700] text-black text-xs font-semibold uppercase">INTRODUCING NEW</span>
                        <h3 className="text-3xl font-bold">Xiaomi Mi 11 Ultra 12GB+256GB</h3>
                        <p className="text-sm ">*Data provided by internal laboratories. Industry
                            measurement.</p>
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3 bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white gap-2">
                            SHOP NOW
                            <ArrowRight className="h-4 w-4"/>
                        </button>
                    </div>
                    <div className="relative flex-shrink-0">
                        <span data-slot="badge"
                              className="border px-2 py-0.5 whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 absolute -top-4 -right-4 bg-[#0989FF] text-white text-xl font-bold w-16 h-16 rounded-full flex items-center justify-center">$590</span>
                        <Image src="/images/PromotionalBanners/black-xiaomi-mi-11-ultra-smartphone-with-camera-ar.jpg"
                               width={312} height={349}
                               alt="Xiaomi Mi 11 Ultra"
                               className="w-48 h-64 object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    )
}