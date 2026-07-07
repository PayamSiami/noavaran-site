'use client';

import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { Button } from '@/components/ui/Button';
import { 
  ArrowLeft, 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Zap,
  ChevronDown,
  Code2,
  Smartphone,
  Globe,
  Star,
  Users,
  Clock,
  CheckCircle2
} from 'lucide-react';

const HeroSection = () => {
  // Typewriter effect - only active animation
  const { text, isDeleting } = useTypewriter({
    words: [
      'طراحی وب حرفه‌ای',
      'توسعه اپلیکیشن موبایل',
      'نرم‌افزارهای سازمانی',
      'راه‌حل‌های دیجیتال'
    ],
    loop: true,
    speed: 80,
    delay: 2000,
  });

  const stats = [
    { label: 'پروژه موفق', value: '۵۰+', icon: TrendingUp },
    { label: 'مشتری راضی', value: '۳۰+', icon: Users },
    { label: 'سال تجربه', value: '۵', icon: Clock },
    { label: 'تیم متخصص', value: '۱۵+', icon: Star },
  ];

  const features = [
    { icon: Code2, title: 'توسعه مدرن' },
    { icon: Globe, title: 'حضور بین‌المللی' },
    { icon: Smartphone, title: 'اپلیکیشن بومی' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f0c29] via-[#1a1a3e] to-[#24243e]">
      {/* ============================================
          SIMPLE BACKGROUND - CSS Only
      ============================================ */}
      
      {/* Static Grid Pattern - No animation */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />
      
      {/* Gradient Orbs - CSS animated */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* ============================================
          MAIN CONTENT
      ============================================ */}
      
      <div className="relative z-10 container-custom py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ============================================
              LEFT COLUMN - TEXT CONTENT
          ============================================ */}
          
          <div className="text-right space-y-6">
            {/* Badge - Static */}
            <div className="inline-flex items-center gap-2 bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium border border-indigo-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              آماده همکاری با شما
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>

            {/* Title with Typewriter */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
              <span className="text-white/90">تحول دیجیتال</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {text}
              </span>
              <span className={`inline-block w-1 h-10 md:h-12 bg-gradient-to-b from-indigo-400 to-purple-400 ml-2 rounded-full ${
                isDeleting ? 'animate-blink' : 'animate-pulse'
              }`} />
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed">
              با تیم متخصص ما، ایده‌های خود را به محصولات دیجیتال موفق تبدیل کنید.
              از طراحی وب تا توسعه اپلیکیشن‌های موبایل بومی و نرم‌افزارهای سازمانی.
            </p>

            {/* Features - Simple */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                  <feature.icon className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs text-white/60">{feature.title}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                variant="gradient"
                icon={<ArrowLeft className="w-5 h-5" />}
                iconPosition="right"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
              >
                شروع همکاری
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                مشاهده نمونه کارها
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/5">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['from-indigo-500 to-purple-500', 'from-pink-500 to-rose-500', 'from-emerald-500 to-teal-500', 'from-amber-500 to-orange-500'].map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} border-2 border-white/10 flex items-center justify-center text-white text-[10px] font-bold`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>بیش از ۳۰ کسب‌وکار همکار</span>
              </div>
            </div>
          </div>

          {/* ============================================
              RIGHT COLUMN - SIMPLE CARD (No heavy animations)
          ============================================ */}
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl p-8 border border-white/10"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
              }}
            >
              {/* Corner Decorations - Static */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-500/30 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-pink-500/30 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-indigo-500/30 rounded-br-3xl" />

              {/* Icon */}
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-20" />
                <div className="relative w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white/90 mb-2 font-display">
                چرا نوآوران دیجیتال پارس؟
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                ما با ترکیب خلاقیت و تکنولوژی، راه‌حل‌های دیجیتال منحصر‌به‌فردی برای کسب‌وکار شما ارائه می‌دهیم.
              </p>

              {/* Features - Static */}
              <div className="space-y-3">
                {[
                  { icon: Users, text: 'تیم متخصص و با تجربه' },
                  { icon: Code2, text: 'استفاده از جدیدترین تکنولوژی‌ها' },
                  { icon: Clock, text: 'پشتیبانی ۲۴/۷' },
                  { icon: Shield, text: 'تضمین کیفیت و زمان تحویل' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-white/70">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-white/40">۴.۹ از ۵</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  آنلاین
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Simple */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-xs">اسکرول</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection