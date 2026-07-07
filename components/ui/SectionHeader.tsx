'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'center' | 'right' | 'left';
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const SectionHeader = ({
  badge,
  title,
  description,
  className = '',
  align = 'center',
  badgeClassName = '',
  titleClassName = '',
  descriptionClassName = '',
}: SectionHeaderProps) => {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    right: 'text-right mr-auto',
    left: 'text-left ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        'max-w-3xl',
        alignmentClasses[align],
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            'inline-block px-4 py-2 text-sm font-medium rounded-full mb-4',
            badgeClassName || 'bg-primary/10 text-primary'
          )}
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight',
          titleClassName || 'text-foreground'
        )}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            'mt-4 text-lg leading-relaxed',
            descriptionClassName || 'text-muted-foreground'
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};