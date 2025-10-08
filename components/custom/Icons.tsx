'use client';
import {
    FacebookLogoIcon,
    InstagramLogoIcon,
    PinterestLogoIcon,
    RedditLogoIcon,
    TwitterLogoIcon,
    YoutubeLogoIcon,
} from '@phosphor-icons/react';
import Link from "next/link";
import React from "react";

export default function Icons () {
    return (
        <>
            <Link href='/' target='_blank' className="hover:opacity-80 transition-opacity">
                <TwitterLogoIcon weight='fill' size={16} />
            </Link>
            <Link href='/' target='_blank' className="hover:opacity-80 transition-opacity">
                <FacebookLogoIcon weight='fill' size={16} />
            </Link>
            <Link href='/' target='_blank' className="hover:opacity-80 transition-opacity">
                <PinterestLogoIcon weight='fill' size={16} />
            </Link>
            <Link href='/' target='_blank' className="hover:opacity-80 transition-opacity">
                <RedditLogoIcon weight='fill' size={16} />
            </Link>
            <Link href='/' target='_blank' className="hover:opacity-80 transition-opacity">
                <YoutubeLogoIcon weight='fill' size={16} />
            </Link>
            <Link href='/' target='_blank' className="hover:opacity-80 transition-opacity">
                <InstagramLogoIcon weight='fill' size={16} />
            </Link>
        </>
    );
};