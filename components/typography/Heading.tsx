import { cn } from '@/lib/utils';
import { getFontClass } from '@/lib/fonts';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  font?: 'farsi' | 'display' | 'english';
}

export const Heading = ({
  as: Tag = 'h1',
  children,
  className,
  font = 'display',
}: HeadingProps) => {
  return (
    <Tag
      className={cn(
        getFontClass(font),
        'text-gray-900 dark:text-white',
        {
          'text-4xl md:text-5xl lg:text-6xl font-bold': Tag === 'h1',
          'text-3xl md:text-4xl lg:text-5xl font-bold': Tag === 'h2',
          'text-2xl md:text-3xl lg:text-4xl font-semibold': Tag === 'h3',
          'text-xl md:text-2xl lg:text-3xl font-semibold': Tag === 'h4',
          'text-lg md:text-xl font-semibold': Tag === 'h5',
          'text-base md:text-lg font-medium': Tag === 'h6',
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};