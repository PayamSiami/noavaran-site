"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface NavLink {
    label: string;
    href: string;
}

interface NavbarProps {
    logo: string;
    links: NavLink[];
    ctaText: string;
    ctaHref: string;
}

export default function Navbar({ logo, links, ctaText, ctaHref }: NavbarProps) {
    const [open, setOpen] = useState(false);

    return (
        <nav 
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl" 
            aria-label="ناوبری اصلی"
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="shrink-0 text-base font-black tracking-tight text-white md:text-lg">
                    {logo}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA Button - ✅ Wrapped in Link */}
                <div className="hidden md:block">
                    <Link href={ctaHref}>
                        <Button 
                            variant="gradient"
                            size="sm"
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500"
                        >
                            {ctaText}
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="min-h-[44px] min-w-[44px] p-2 text-white/70 transition-colors hover:text-white md:hidden"
                    aria-label="باز و بسته کردن منو"
                    aria-expanded={open}
                >
                    {open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="flex flex-col gap-5 border-t border-white/[0.06] bg-[#0a0a0a]/95 px-6 py-5 backdrop-blur-xl md:hidden">
                    {links.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className="text-sm text-white/50 transition-colors duration-200 hover:text-white" 
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* ✅ Mobile CTA Button wrapped in Link */}
                    <Link href={ctaHref} className="w-fit">
                        <Button 
                            variant="gradient"
                            size="sm" 
                            className="w-fit bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500"
                        >
                            {ctaText}
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    );
}