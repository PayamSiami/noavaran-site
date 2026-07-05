'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowLeft, Code2, ShieldCheck, Smartphone, type LucideIcon } from 'lucide-react';
import type { MouseEvent } from 'react';
import Button from '@/components/ui/Button';

const metrics = [
    { value: '۳۵٪', label: 'کاهش زمان عرضه محصول' },
    { value: '۹۹.۹٪', label: 'پایداری زیرساخت سازمانی' },
    { value: '۲۴/۷', label: 'پشتیبانی برای تیم‌های حساس' }
];

const deliveryItems: { icon: LucideIcon; label: string }[] = [
    { icon: Code2, label: 'طراحی معماری و توسعه وب' },
    { icon: Smartphone, label: 'اپلیکیشن native برای iOS و Android' },
    { icon: ShieldCheck, label: 'امنیت، تست و استقرار سازمانی' }
];

const ambientParticles = [
    { top: '18%', right: '8%', delay: 0, size: 'h-2 w-2' },
    { top: '28%', right: '78%', delay: 0.7, size: 'h-1.5 w-1.5' },
    { top: '68%', right: '12%', delay: 1.2, size: 'h-2.5 w-2.5' },
    { top: '74%', right: '62%', delay: 1.8, size: 'h-1.5 w-1.5' },
    { top: '44%', right: '48%', delay: 2.4, size: 'h-2 w-2' }
];

export default function Hero() {
    const cursorX = useMotionValue(50);
    const cursorY = useMotionValue(50);
    const smoothX = useSpring(cursorX, { stiffness: 80, damping: 22, mass: 0.4 });
    const smoothY = useSpring(cursorY, { stiffness: 80, damping: 22, mass: 0.4 });
    const rotateY = useTransform(smoothX, [0, 100], [-8, 8]);
    const rotateX = useTransform(smoothY, [0, 100], [7, -7]);
    const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(234,179,8,0.24), rgba(234,179,8,0.07) 24%, transparent 48%)`;

    const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        cursorX.set(((event.clientX - rect.left) / rect.width) * 100);
        cursorY.set(((event.clientY - rect.top) / rect.height) * 100);
    };

    const resetPointer = () => {
        cursorX.set(50);
        cursorY.set(50);
    };

    return (
        <section id='home' onMouseMove={handlePointerMove} onMouseLeave={resetPointer} className='relative flex min-h-screen items-center overflow-hidden bg-[#080808] pt-16'>
            <img
                src='https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kfGVufDB8MHx8fDE3ODMyMzE4ODR8MA&ixlib=rb-4.1.0&q=80&w=1200&h=800'
                alt='پس‌زمینه سینمایی فناوری برای توسعه نرم‌افزار سازمانی'
                className='absolute inset-0 h-full w-full object-cover opacity-20'
            />
            <div className='absolute inset-0 bg-linear-to-br from-[#080808] via-[#080808]/90 to-[#0d0d0d]' />
            <motion.div className='pointer-events-none absolute inset-0 opacity-80' style={{ background: spotlightBackground }} />
            <div className='advanced-grid absolute inset-0 opacity-45' />
            <div className='absolute inset-x-0 top-0 h-px bg-linear-to-l from-transparent via-[#eab308]/70 to-transparent' />
            <div className='data-stream absolute left-0 top-24 h-px w-full opacity-60' />
            <div className='absolute -top-40 -right-40 h-150 w-150 rounded-full bg-[#eab308]/20 blur-[120px]' />
            <div className='absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-[#eab308]/10 blur-[110px]' />
            <motion.div className='energy-orb absolute right-[12%] top-[22%] h-28 w-28 rounded-full border border-[#eab308]/25' />
            <motion.div className='absolute left-1/2 top-1/2 hidden h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 lg:block' animate={{ rotate: 360 }} transition={{ duration: 42, repeat: Infinity, ease: 'linear' }} />
            {ambientParticles.map((particle) => (
                <motion.span
                    key={`${particle.top}-${particle.right}`}
                    className={`absolute rounded-full bg-[#eab308] shadow-[0_0_24px_rgba(234,179,8,0.65)] ${particle.size}`}
                    style={{ top: particle.top, right: particle.right }}
                    initial={{ opacity: 0, y: 18, scale: 0.4 }}
                    animate={{ opacity: [0.15, 0.9, 0.2], y: [-8, 12, -8], scale: [0.7, 1.25, 0.7] }}
                    transition={{ duration: 5.8, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
                />
            ))}

            <div className='relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2'>
                <motion.div initial='hidden' animate='visible' variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className='mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-sm text-white/60 shadow-[0_0_40px_rgba(234,179,8,0.08)] backdrop-blur-xl'>
                        <span className='h-1.5 w-1.5 rounded-full bg-[#eab308] animate-pulse' />
                        شریک فنی B2B برای محصولاتی که باید مقیاس‌پذیر، امن و فارسی‌پسند باشند.
                    </motion.div>
                    <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className='font-display mb-6 bg-linear-to-br from-white via-white to-white/45 bg-clip-text text-[clamp(3.1rem,7vw,6.4rem)] font-black leading-[1.05] tracking-tight text-transparent'>
                        توسعه نرم‌افزار سازمانی                     </motion.h1>
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className='font-body mb-10 max-w-xl text-lg leading-relaxed text-white/60'>
                        از وب‌سایت‌های enterprise و اپلیکیشن‌های native تا سامانه‌های اختصاصی و بومی‌سازی فارسی؛ تیم ما برای CTOها، مدیران محصول و مالکان کسب‌وکار راهکارهای قابل اتکا می‌سازد.
                    </motion.p>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className='flex flex-wrap items-center gap-4'>
                        <Button href='#services' variant='on-dark' size='lg'>
                            مشاهده خدمات <ArrowLeft className='h-5 w-5 text-gray-900' />
                        </Button>
                        <Button href='#proof' variant='outline' size='lg'>
                            دیدن نمونه‌کارها
                        </Button>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className='mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40'>
                        <span className='text-white/40'>طراحی برای سازمان‌ها</span><span className='text-white/20'>·</span><span className='text-white/40'>امنیت‌محور</span><span className='text-white/20'>·</span><span className='text-white/40'>آماده برای بازار فارسی</span>
                    </motion.div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -40, rotateY: 8 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className='perspective-1200 relative'>
                    <div className='absolute -inset-5 rounded-[2rem] bg-[#eab308]/15 blur-3xl' />
                    <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className='holographic-card relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-5 shadow-[0_0_60px_rgba(234,179,8,0.13)] backdrop-blur-xl'>
                        <div className='mb-5 flex items-center justify-between border-b border-white/[0.08] pb-4'>
                            <p className='text-xs uppercase tracking-widest text-white/40'>Enterprise delivery cockpit</p>
                            <div className='flex gap-2'>
                                <motion.span className='h-3 w-3 rounded-full bg-red-400' animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 2.4, repeat: Infinity }} />
                                <motion.span className='h-3 w-3 rounded-full bg-yellow-400' animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.35 }} />
                                <motion.span className='h-3 w-3 rounded-full bg-green-400' animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.7 }} />
                            </div>
                        </div>
                        <div className='grid gap-4 sm:grid-cols-3'>
                            {metrics.map((metric, index) => (
                                <motion.div key={metric.label} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.45 + index * 0.08 }} whileHover={{ y: -6, scale: 1.03 }} className='rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/80 p-5'>
                                    <p className='text-3xl font-black text-white'>{metric.value}</p>
                                    <p className='mt-2 text-xs uppercase tracking-widest text-gray-400'>{metric.label}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className='mt-4 rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/80 p-5'>
                            <div className='mb-5 flex items-center justify-between'>
                                <p className='font-mono text-xs text-gray-400'>product.delivery</p>
                                <motion.span className='rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300' animate={{ boxShadow: ['0 0 0 rgba(16,185,129,0)', '0 0 24px rgba(16,185,129,0.24)', '0 0 0 rgba(16,185,129,0)'] }} transition={{ duration: 2.8, repeat: Infinity }}>
                                    آماده اجرا
                                </motion.span>
                            </div>
                            <div className='space-y-3'>
                                {deliveryItems.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <motion.div key={item.label} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.65 + index * 0.1 }} whileHover={{ x: -8 }} className='flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] p-4'>
                                            <div className='flex items-center gap-3'>
                                                <Icon className='h-5 w-5 text-[#eab308]' />
                                                <span className='text-sm text-gray-300'>{item.label}</span>
                                            </div>
                                            <span className='text-xs text-gray-400'>تکمیل</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}