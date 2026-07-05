import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export const metadata = {
  title: 'نوآوران دیجیتال پارس | طراحی وب، اپلیکیشن موبایل و نرم‌افزار سازمانی',
  description: 'آژانس دیجیتال B2B برای طراحی وب، اپلیکیشن‌های native موبایل، نرم‌افزار اختصاصی و بومی‌سازی فارسی برای استارتاپ‌ها، سازمان‌ها و نهادهای دولتی.',
  openGraph: {
    title: 'نوآوران دیجیتال پارس',
    description: 'آژانس دیجیتال B2B برای طراحی وب، اپلیکیشن‌های موبایل native و توسعه نرم‌افزارهای اختصاصی سازمانی با تجربه کاربری فارسی.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fa' dir='rtl' suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&family=Unbounded:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap' rel='stylesheet' />
        <meta name='description' content='آژانس دیجیتال B2B برای طراحی وب، اپلیکیشن‌های native موبایل، نرم‌افزار اختصاصی و بومی‌سازی فارسی برای سازمان‌ها و شرکت‌های بین‌المللی.' />
        <meta name='keywords' content='طراحی وب سازمانی, توسعه اپلیکیشن موبایل, نرم افزار اختصاصی, آژانس دیجیتال, بومی سازی فارسی, برنامه نویسی سازمانی' />
        <meta property='og:title' content='نوآوران دیجیتال پارس' />
        <meta property='og:description' content='آژانس دیجیتال B2B برای طراحی وب، اپلیکیشن‌های موبایل native و توسعه نرم‌افزارهای اختصاصی سازمانی با تجربه کاربری فارسی.' />
        <meta property='og:type' content='website' />
      </head>
      <body className='bg-background text-foreground antialiased min-h-screen'>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <div dangerouslySetInnerHTML={{ __html: `<div id="snapblock-badge" style="position:fixed;bottom:16px;right:16px;z-index:9999;background:#ffffff;border-radius:8px;padding:6px 12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;color:#333;box-shadow:0 2px 8px rgba(0,0,0,0.15);display:flex;align-items:center;gap:6px;"><img src="https://raw.githubusercontent.com/SnapBlock/SnapBlock-assets/main/snapblock-logo.png" alt="SnapBlock" style="width:16px;height:16px;object-fit:contain;flex-shrink:0;"> Built with <a href="https://snapblock.ai" target="_blank" rel="noopener" style="color:#6366f1;font-weight:600;text-decoration:none;">SnapBlock</a></div>` }} />
      </body>
    </html>
  );
}
