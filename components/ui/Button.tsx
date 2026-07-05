"use client";

import Link from 'next/link';
import type React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string;
    variant?: 'default' | 'secondary' | 'outline' | 'on-dark';
    size?: 'sm' | 'default' | 'lg';
    className?: string;
}

const variantClasses = {
    default: 'bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-900',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 border-2 border-gray-800',
    outline: 'border-2 border-white bg-white text-gray-900 hover:bg-gray-100',
    'on-dark': 'bg-white text-gray-900 hover:bg-gray-100 border-2 border-white'
};

const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    default: 'px-5 py-3 text-base min-h-[44px]',
    lg: 'px-7 py-4 text-base min-h-[48px]'
};

export default function Button({
    children,
    href,
    variant = 'default',
    size = 'default',
    className = '',
    type = 'button',
    ...props
}: ButtonProps) {
    const classes = `${variantClasses[variant]} ${sizeClasses[size]} inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#eab308] focus:ring-offset-2 focus:ring-offset-[#080808] ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} {...props}>
            {children}
        </button>
    );
}
