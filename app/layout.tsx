import './globals.css';
import { Vazirmatn, Unbounded, DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';

// ✅ Optimized font loading
const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazirmatn',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-unbounded',
  display: 'swap',
  preload: false,
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: false,
});

export const metadata = {
  metadataBase: new URL('https://payamsiami.github.io/noavaran-site'),
  title: {
    default: 'نوآوران دیجیتال پارس | طراحی وب، اپلیکیشن موبایل و نرم‌افزار سازمانی',
    template: '%s | نوآوران دیجیتال پارس'
  },
  description: 'آژانس دیجیتال پیشرو در طراحی وب، توسعه اپلیکیشن‌های موبایل بومی و نرم‌افزارهای سازمانی',
  keywords: 'طراحی وب, توسعه اپلیکیشن موبایل, نرم افزار سازمانی, آژانس دیجیتال',
  openGraph: {
    title: 'نوآوران دیجیتال پارس',
    description: 'آژانس دیجیتال پیشرو در طراحی وب، توسعه اپلیکیشن موبایل و نرم‌افزار سازمانی',
    url: 'https://payamsiami.github.io/noavaran-site',
    siteName: 'نوآوران دیجیتال پارس',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'نوآوران دیجیتال پارس',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نوآوران دیجیتال پارس',
    description: 'آژانس دیجیتال پیشرو در طراحی وب، توسعه اپلیکیشن موبایل و نرم‌افزار سازمانی',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://payamsiami.github.io/noavaran-site',
  },
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
        'scroll-smooth'
      )}
      suppressHydrationWarning
    >
      <head>
        {/* ✅ Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          {children}
          <Toaster 
            position="top-center"
            toastOptions={{
              className: 'rtl',
              duration: 4000,
            }}
          />
        </div>
      </body>
    </html>
  );
}