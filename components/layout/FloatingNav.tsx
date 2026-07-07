'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Globe, Code, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navItems = [
  { label: 'خانه', href: '#home' },
  { label: 'خدمات', href: '#services' },
  { label: 'تماس', href: '#cta' },
];

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Track active section
  useEffect(() => {
    const sections = ['home', 'services', 'cta'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isHidden ? -100 : 0,
        opacity: 1
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4"
    >
      <div className="relative rounded-2xl border border-white/10 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl"
           style={{
             background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
           }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative flex items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </motion.div>
            <span className="text-xl font-bold font-display bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              نوآوران دیجیتال
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`text-sm transition-colors relative ${
                    isActive ? 'text-white' : 'text-white/50 hover:text-white/80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="sm"
              variant="gradient"
              className="text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
            >
              شروع همکاری
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/80 p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-1 px-4 pb-4 pt-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white' 
                      : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                  }`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: isOpen ? 0 : -20,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              );
            })}
            <Button
              variant="gradient"
              className="mt-2 w-full bg-linear-to-r from-indigo-600 to-purple-600"
              onClick={() => setIsOpen(false)}
            >
              شروع همکاری
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
