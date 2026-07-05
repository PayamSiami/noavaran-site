import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Vazirmatn, Unbounded, DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-unbounded',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'نوآوران دیجیتال پارس | طراحی وب، اپلیکیشن موبایل و نرم‌افزار سازمانی',
    template: '%s | نوآوران دیجیتال پارس'
  },
  description: 'آژانس دیجیتال B2B برای طراحی وب، اپلیکیشن‌های native موبایل، نرم‌افزار اختصاصی و بومی‌سازی فارسی',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn(
        vazirmatn.variable,
        unbounded.variable,
        dmSans.variable,
        'bg-[hsl(var(--background))] text-[hsl(var(--foreground))]'
      )}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}