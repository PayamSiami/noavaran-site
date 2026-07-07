'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    loading = false,
    icon,
    iconPosition = 'left',
    children, 
    className, 
    ...props 
  }, ref) => {
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
      ghost: 'text-foreground hover:bg-secondary/50',
      gradient: 'bg-gradient-to-r from-primary via-secondary to-primary text-white hover:shadow-xl hover:shadow-primary/25 bg-[length:200%] hover:bg-[100%] transition-all duration-500',
      glass: 'glass text-foreground hover:bg-white/20 dark:hover:bg-black/20',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'px-6 py-3 text-base gap-2.5',
      lg: 'px-8 py-4 text-lg gap-3',
      xl: 'px-10 py-5 text-xl gap-3.5',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          variants[variant],
          sizes[size],
          'overflow-hidden',
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        {...props}
      >
        {/* Ripple Effect */}
        <motion.span
          className="absolute inset-0 bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 2, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ borderRadius: '50%' }}
        />
        
        {/* Loading State */}
        {loading && (
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
        )}
        
        {/* Icon */}
        {icon && iconPosition === 'left' && !loading && (
          <span className="inline-flex">{icon}</span>
        )}
        
        {/* Content */}
        <span className="relative z-10">
          {children}
        </span>
        
        {/* Icon Right */}
        {icon && iconPosition === 'right' && !loading && (
          <span className="inline-flex">{icon}</span>
        )}
        
        {/* Shimmer Effect for Gradient Button */}
        {variant === 'gradient' && (
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';