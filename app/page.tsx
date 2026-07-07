'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, lazy, Suspense } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { ArrowUp, Loader2 } from 'lucide-react';

// Lazy load sections
const HeroSection = lazy(() => import('@/components/sections/HeroSection'));
const ServicesSection = lazy(() => import('@/components/sections/ServicesSection'));
const CTASection = lazy(() => import('@/components/sections/CTASection'));
const FloatingNav = lazy(() => import('@/components/layout/FloatingNav'));

// Loading component
const SectionLoader = () => (
  <div className="min-h-100 flex items-center justify-center">
    <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
  </div>
);

export default function Home() {
  const scrollProgress = useScrollProgress();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Simple scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          scaleX: scrollProgress,
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6)'
        }}
      />

      {/* Navigation */}
      <Suspense fallback={<div className="h-16" />}>
        <FloatingNav />
      </Suspense>

      {/* Hero Section */}
      <Suspense fallback={<SectionLoader />}>
        <section id="home">
          <HeroSection />
        </section>
      </Suspense>

      {/* Services Section */}
      <Suspense fallback={<SectionLoader />}>
        <motion.section
          id="services"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ServicesSection />
        </motion.section>
      </Suspense>

      {/* CTA Section */}
      <Suspense fallback={<SectionLoader />}>
        <motion.section
          id="cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <CTASection />
        </motion.section>
      </Suspense>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-6 z-50 p-3 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}