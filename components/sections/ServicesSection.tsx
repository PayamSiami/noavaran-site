'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Code, 
  Users,
  ArrowLeft,
  Sparkles,
  Braces,
  Terminal,
  GitBranch,
  Server,
  Layout,
  Palette,
  Cpu,
  Network,
  Binary,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';

// Service Data
const services = [
  {
    id: 1,
    icon: Globe,
    title: 'طراحی وب‌سایت',
    description: 'طراحی و توسعه وب‌سایت‌های حرفه‌ای، ریسپانسیو و بهینه‌سازی شده برای موتورهای جستجو با تجربه کاربری بی‌نظیر',
    features: ['React/Next.js', 'Tailwind CSS', 'TypeScript', 'SEO Optimized'],
    gradient: 'from-indigo-500 to-cyan-500',
    bgGradient: 'from-indigo-600/20 to-cyan-600/20',
    iconBg: 'from-indigo-500/20 to-cyan-500/20',
    stats: { projects: 45, satisfaction: 98 },
    tags: ['سایت شرکتی', 'فروشگاهی', 'پرتال'],
    color: 'text-cyan-400'
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'اپلیکیشن موبایل',
    description: 'توسعه اپلیکیشن‌های بومی اندروید و iOS با تجربه کاربری عالی، عملکرد بالا و امنیت پیشرفته',
    features: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-600/20 to-pink-600/20',
    iconBg: 'from-purple-500/20 to-pink-500/20',
    stats: { projects: 30, satisfaction: 96 },
    tags: ['اندروید', 'iOS', 'کراس پلتفرم'],
    color: 'text-pink-400'
  },
  {
    id: 3,
    icon: Database,
    title: 'نرم‌افزار سازمانی',
    description: 'پیاده‌سازی سیستم‌های مدیریت سازمانی، ERP و راه‌حل‌های اختصاصی برای کسب‌وکارهای بزرگ',
    features: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-600/20 to-teal-600/20',
    iconBg: 'from-emerald-500/20 to-teal-500/20',
    stats: { projects: 25, satisfaction: 94 },
    tags: ['ERP', 'CRM', 'سیستم مدیریت'],
    color: 'text-emerald-400'
  },
  {
    id: 4,
    icon: Cloud,
    title: 'زیرساخت ابری',
    description: 'استقرار و مدیریت زیرساخت‌های ابری، مهاجرت به فضای ابری و بهینه‌سازی عملکرد با بهترین روش‌ها',
    features: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-600/20 to-orange-600/20',
    iconBg: 'from-amber-500/20 to-orange-500/20',
    stats: { projects: 20, satisfaction: 97 },
    tags: ['Cloud', 'DevOps', 'مقیاس‌پذیری'],
    color: 'text-amber-400'
  },
  {
    id: 5,
    icon: Code,
    title: 'توسعه API',
    description: 'طراحی و پیاده‌سازی APIهای امن، مقیاس‌پذیر و مستند با بهترین روش‌های صنعتی و معماری مدرن',
    features: ['REST', 'GraphQL', 'gRPC', 'OpenAPI'],
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-600/20 to-pink-600/20',
    iconBg: 'from-rose-500/20 to-pink-500/20',
    stats: { projects: 35, satisfaction: 95 },
    tags: ['REST API', 'GraphQL', 'Microservices'],
    color: 'text-rose-400'
  },
  {
    id: 6,
    icon: Users,
    title: 'مشاوره فنی',
    description: 'ارائه مشاوره تخصصی در حوزه معماری نرم‌افزار، انتخاب تکنولوژی، بهینه‌سازی و تحول دیجیتال',
    features: ['Microservices', 'DevOps', 'Agile', 'Scrum'],
    gradient: 'from-violet-500 to-indigo-500',
    bgGradient: 'from-violet-600/20 to-indigo-600/20',
    iconBg: 'from-violet-500/20 to-indigo-500/20',
    stats: { projects: 50, satisfaction: 99 },
    tags: ['مشاوره', 'معماری', 'تحول دیجیتال'],
    color: 'text-violet-400'
  },
];

// Tech Icons for decoration
const techIcons = [
  Braces, Terminal, GitBranch, Server, 
  Layout, Palette, Cpu, Network, Binary, Layers
];

// ✅ Generate static positions at module level (runs once)
const TECH_POSITIONS = techIcons.map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  rotate: Math.random() * 360,
  size: 30 + Math.random() * 40,
  duration: 40 + Math.random() * 20,
  yDuration: 15 + Math.random() * 10,
  opacity: 0.03 + Math.random() * 0.03
}));

 const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0f0c29 0%, #1a1a3e 50%, #24243e 100%)'
      }}
    >
      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05]"
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
               backgroundSize: '60px 60px'
             }} 
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-3xl" />

      {/* ✅ Tech Icons - Using static positions, no animations on load */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techIcons.map((Icon, i) => {
          const pos = TECH_POSITIONS[i];
          return (
            <div
              key={i}
              className="absolute text-white/5"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                fontSize: `${pos.size}px`,
                opacity: pos.opacity,
                transform: `rotate(${pos.rotate}deg)`
              }}
            >
              <Icon />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <SectionHeader
          badge="خدمات ما"
          title="راه‌حل‌های دیجیتال جامع"
          description="ما با استفاده از جدیدترین تکنولوژی‌ها و روش‌های توسعه، راه‌حل‌های سفارشی و کارآمدی برای کسب‌وکار شما ارائه می‌دهیم"
          align="center"
          className="text-white"
          badgeClassName="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/20"
          titleClassName="text-white"
          descriptionClassName="text-white/60"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="relative h-full group"
                style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-indigo-500/10" />
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Card Content */}
                <div className="relative p-6 md:p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.iconBg} flex items-center justify-center mb-5 border border-white/10`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white/90 mb-2 font-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                    <div className="text-center p-2 rounded-lg bg-white/5">
                      <div className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.stats.projects}+
                      </div>
                      <div className="text-[10px] text-white/40">پروژه</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-white/5">
                      <div className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.stats.satisfaction}%
                      </div>
                      <div className="text-[10px] text-white/40">رضایت</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] text-white/30 bg-white/5 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-white w-full justify-center mt-4"
                    icon={<ArrowLeft className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    بیشتر بدانید
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 md:px-8 md:py-5">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white/10 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-right">
                <div className="text-sm text-white/90 font-medium">+۵۰ پروژه موفق</div>
                <div className="text-xs text-white/40">با تیم متخصص ما</div>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <Button
              variant="gradient"
              size="lg"
              className="bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20"
              icon={<Sparkles className="w-4 h-4" />}
            >
              دریافت مشاوره رایگان
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection