'use client';

import React from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Phone,
    Mail,
    MapPin,
} from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Column 1 - Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-[#FF8A00] rounded-full flex items-center justify-center">
                                <div className="w-5 h-5 border-3 border-white rounded-full"/>
                            </div>
                            <h3 className="text-xl font-bold">ORION</h3>
                        </div>
                        <div className="space-y-3 text-sm text-gray-300">
                            <p className="text-white font-medium">Customer Supports:</p>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 flex-shrink-0"/>
                                <span>(629) 555-0129</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5"/>
                                <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 flex-shrink-0"/>
                                <span>info@kinbo.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Top Category */}
                    <div>
                        <h4 className="text-base font-semibold mb-4 uppercase">Top Category</h4>
                        <ul className="space-y-2.5 text-sm text-gray-300">
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    Computer & Laptop
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    SmartPhone
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    Headphone
                                </Link>
                            </li>
                            <li>
                                <Link href="#"
                                      className="hover:text-[#FF8A00] transition-colors border-b border-gray-600 pb-0.5">
                                    Accessories
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    Camera & Photo
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    TV & Homes
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link
                                    href="#"
                                    className="text-[#FFD700] hover:text-[#FFD700]/80 transition-colors flex items-center gap-1 font-medium"
                                >
                                    Browse All Product
                                    <ArrowRight className="h-3.5 w-3.5"/>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Quick Links */}
                    <div>
                        <h4 className="text-base font-semibold mb-4 uppercase">Quick Links</h4>
                        <ul className="space-y-2.5 text-sm text-gray-300">
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    Shop Product
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    Shoping Cart
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    Compare
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    Track Order
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    Customer Help
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FF8A00] transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 - Download App */}
                    <div>
                        <h4 className="text-base font-semibold mb-4 uppercase">Download App</h4>
                        <div className="space-y-3">
                            <Link
                                href="#"
                                className="flex items-center gap-3 bg-[#2a2a2a] hover:bg-[#333333] transition-colors rounded-lg p-3 border border-gray-700"
                            >
                                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                </svg>
                                <div className="text-left">
                                    <p className="text-xs text-gray-400">Get it now</p>
                                    <p className="text-sm font-semibold">Google Play</p>
                                </div>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 bg-[#2a2a2a] hover:bg-[#333333] transition-colors rounded-lg p-3 border border-gray-700"
                            >
                                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                                </svg>
                                <div className="text-left">
                                    <p className="text-xs text-gray-400">Get it now</p>
                                    <p className="text-sm font-semibold">App Store</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Column 5 - Popular Tags */}
                    <div>
                        <h4 className="text-base font-semibold mb-4 uppercase">Popular Tag</h4>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Game",
                                "iPhone",
                                "TV",
                                "Asus Laptops",
                                "SSD",
                                "Graphics Card",
                                "Power Bank",
                                "Smart TV",
                                "Speaker",
                                "Tablet",
                                "Microwave",
                                "Samsung",
                            ].map((tag) => (
                                <Link
                                    key={tag}
                                    href="#"
                                    className="px-3 py-1.5 text-xs bg-[#2a2a2a] hover:bg-[#FF8A00] transition-colors rounded border border-gray-700 hover:border-[#FF8A00]"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    <p>Orion -eCommerce Template © 2025. Design by SylvainCodes</p>
                </div>
            </div>
        </footer>
    );
}
