import { ArrowRight } from "lucide-react";
import Image from "next/image";

export  default function  MacBookPro(){
    return(
        <div className="mb-12 -mx-4 md:mx-0">
            <div className="bg-[#FFF5E6] rounded-none md:rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 lg:p-16">
                    {/* Left Content */}
                    <div className="space-y-6 max-w-md">
                        <span className="inline-flex items-center justify-center rounded-md border w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 bg-[#0989FF] text-white text-xs font-semibold uppercase px-3 py-1">
                            SAVE UP TO $200.00
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Macbook Pro</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
                        </p>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive py-2 has-[>svg]:px-3 bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white gap-2 h-12 px-6">
                            SHOP NOW
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Right Content - MacBook Image with Price Badge */}
                    <div className="relative flex-shrink-0">
                        <span className="px-2 py-0.5 whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-primary/90 absolute -top-4 -left-4 md:top-0 md:left-0 bg-[#FFF5E6] border-4 border-white text-foreground text-2xl font-bold w-20 h-20 rounded-full flex items-center justify-center shadow-lg z-10">
                            $1999
                        </span>
                        <Image
                            src="/images/mac.png"
                            alt="MacBook Pro"
                            className="w-full md:w-[500px] lg:w-[424px] h-auto object-contain"
                            width={536}
                            height={424}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}