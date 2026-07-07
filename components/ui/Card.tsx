'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'glass' | 'gradient' | 'premium';
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hover = true, children, className, ...props }, ref) => {
    const variants = {
      default: 'bg-card border border-border',
      glass: 'glass border border-white/10',
      gradient: 'bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/10',
      premium: 'bg-card border border-primary/10 shadow-premium',
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          'relative rounded-2xl p-6 transition-all duration-300',
          variants[variant],
          hover && 'hover:shadow-xl hover:-translate-y-1',
          className
        )}
        whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
        {...props}
      >
        {/* Premium Corner Decorations */}
        {variant === 'premium' && (
          <>
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />
          </>
        )}
        
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';