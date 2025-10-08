'use client';
import {ArrowRight} from 'lucide-react';
import React from 'react';

export default function NewsLetter() {
    return (
        <div className="-mx-4 md:mx-0">
            <div
                className="bg-gradient-to-r from-[#1B6392] to-[#1B6392] text-white py-16 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-3">Subscribe to our newsletter</h2>
                    <p className="text-white/90 mb-8 text-sm leading-relaxed">
                        Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non
                        quam urna.
                        Quisque vitae porta ipsum.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-[36rem] mx-auto">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex-1 bg-white text-black border-0 h-12 placeholder:text-gray-400"
                        />
                        <button
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive py-2 has-[>svg]:px-3 bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white h-12 px-8 gap-2 whitespace-nowrap">
                            SUBSCRIBE
                            <ArrowRight className="h-4 w-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
