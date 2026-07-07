'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Clock, 
  Shield, 
  Zap,
  Users,
  TrendingUp,
  Award,
  Rocket,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

// ✅ Generate particles function (pure)
const generateParticles = () => {
  return Array.from({ length: 15 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 5,
  }));
};

const CTASection = () => {
  // ✅ Initialize with generated particles directly
  const [particles] = useState(() => generateParticles());
  const isMounted = useRef(true);

  // ✅ No useEffect needed - particles are ready on first render

  const features = [
    { icon: Shield, text: 'تضمین کیفیت', color: 'text-emerald-400' },
    { icon: Clock, text: 'تحویل سریع', color: 'text-amber-400' },
    { icon: Users, text: 'تیم متخصص', color: 'text-indigo-400' },
    { icon: Zap, text: 'پشتیبانی ۲۴/۷', color: 'text-purple-400' },
  ];

  const stats = [
    { label: 'پروژه موفق', value: '۵۰+', icon: TrendingUp },
    { label: 'مشتری راضی', value: '۳۰+', icon: Users },
    { label: 'سال تجربه', value: '۵', icon: Award },
    { label: 'تیم متخصص', value: '۱۵+', icon: Rocket },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
      
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />

      {/* ✅ Floating Particles - No useEffect needed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
            }}
            animate={{
              y: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium border border-white/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              آماده همکاری با شما
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight"
            >
              آماده شروع{' '}
              <span className="bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                همکاری
              </span>
              {' '}هستید؟
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              با تیم متخصص ما تماس بگیرید و ایده‌های خود را به واقعیت تبدیل کنید.
              ما آماده‌ایم تا در مسیر تحول دیجیتال همراه شما باشیم.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <stat.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <feature.icon className={`w-4 h-4 ${feature.color}`} />
                <span className="text-sm text-white/80">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            <Button
              size="lg"
              variant="gradient"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 px-8 py-4 text-lg group relative overflow-hidden"
              icon={<ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              iconPosition="right"
            >
              شروع همکاری
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              />
            </Button>
            
            <Button
              size="lg"
              variant="glass"
              className="text-white border-white/20 hover:bg-white/10 px-8 py-4 text-lg"
              icon={<Mail className="w-5 h-5" />}
            >
              تماس با ما
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10"
          >
            {[
              { icon: Phone, text: '۰۲۱-۱۲۳۴۵۶۷۸', label: 'تلفن' },
              { icon: Mail, text: 'info@noavaran.ir', label: 'ایمیل' },
              { icon: MapPin, text: 'تهران، خیابان ولیعصر', label: 'آدرس' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="flex items-center justify-center gap-3 text-white/60 hover:text-white/80 transition-colors"
              >
                <item.icon className="w-4 h-4 text-indigo-400" />
                <div>
                  <div className="text-sm">{item.text}</div>
                  <div className="text-xs text-white/30">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-white/60">۴.۹ از ۵</span>
            </div>

            <div className="w-px h-6 bg-white/10" />

            <div className="flex items-center gap-2 text-sm text-white/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>بیش از ۳۰ کسب‌وکار همکار</span>
            </div>

            <div className="w-px h-6 bg-white/10" />

            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>آنلاین</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
