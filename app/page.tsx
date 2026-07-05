import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import WhyAutomation from '@/components/home/WhyAutomation';
import Services from '@/components/home/Services';
import CaseStudies from '@/components/home/CaseStudies';
import Process from '@/components/home/Process';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'نوآوران دیجیتال پارس | خدمات برنامه‌نویسی سازمانی',
  description: 'طراحی وب، توسعه اپلیکیشن native، نرم‌افزار اختصاصی و بومی‌سازی فارسی برای شرکت‌های B2B، استارتاپ‌ها، سازمان‌ها و نهادهای دولتی.',
  openGraph: {
    title: 'نوآوران دیجیتال پارس',
    description: 'آژانس دیجیتال B2B برای طراحی وب، اپلیکیشن native موبایل و نرم‌افزار اختصاصی سازمانی با UX فارسی.',
    type: 'website'
  }
};

const navLinks = [
  { label: 'خانه', href: '#home' },
  { label: 'خدمات', href: '#services' },
  { label: 'نمونه‌کارها', href: '#proof' },
  { label: 'فرآیند', href: '#process' },
  { label: 'درباره ما', href: '#about' }
];

export default function Home() {
  return (
    <>
      <Navbar logo="نوآوران دیجیتال پارس" links={navLinks} ctaText="رزرو جلسه مشاوره" ctaHref="#contact" />
      <main className="bg-[#080808] text-white">
        <Hero />
        <WhyAutomation />
        <Services />
        <CaseStudies />
        <Process />
        <About />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
