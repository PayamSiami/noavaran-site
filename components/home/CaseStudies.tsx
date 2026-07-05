"use client";

import { motion } from 'framer-motion';
import { ArrowUpLeft } from 'lucide-react';

const cases = [
    {
        name: 'پلتفرم فروش B2B برای تولیدکننده صنعتی',
        metric: '۴۲٪',
        label: 'افزایش نرخ تبدیل لید',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwwfDB8fHwxNzgzMjMxODg0fDA&ixlib=rb-4.1.0&q=80&w=1200&h=800',
        quote: 'تیم فروش بالاخره یک مسیر دیجیتال قابل اندازه‌گیری پیدا کرد.'
    },
    {
        name: 'اپلیکیشن native خدمات میدانی',
        metric: '۳۰٪',
        label: 'کاهش زمان عملیات',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwwfDB8fHwxNzgzMTgxMDgzfDA&ixlib=rb-4.1.0&q=80&w=1200&h=800',
        quote: 'از نسخه آزمایشی تا انتشار، همه چیز با کنترل کامل پیش رفت.'
    },
    {
        name: 'داشبورد مدیریتی برای نهاد دولتی',
        metric: '۱۸۰K',
        label: 'رکورد داده پردازش‌شده',
        image: 'https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDB8MHx8fDE3ODMyMzE4ODR8MA&ixlib=rb-4.1.0&q=80&w=1200&h=800',
        quote: 'گزارش‌گیری سازمانی از چند روز به چند دقیقه رسید.'
    }
];

export default function CaseStudies() {
    return (
        <section id="proof" className="bg-[#0d0d0d] py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 grid gap-8 lg:grid-cols-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#eab308] lg:col-span-3">نمونه‌کارهای منتخب</p>
                    <h2 className="font-display text-5xl font-black tracking-tight text-white lg:col-span-9 md:text-6xl">نتیجه‌هایی که مدیران می‌توانند گزارش کنند</h2>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                    {cases.map((item, index) => (
                        <motion.article key={item.name} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className={`${index === 0 ? 'lg:col-span-7 lg:min-h-[520px]' : 'lg:col-span-5 lg:min-h-[250px]'} group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-black`}>
                            <img src={item.image} alt={`${item.name} - نمونه‌کار توسعه نرم‌افزار`} className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-end p-8">
                                <div className="mb-8 flex items-center justify-between">
                                    <div>
                                        <p className="text-5xl font-black text-white">{item.metric}</p>
                                        <p className="mt-2 text-xs uppercase tracking-widest text-gray-300">{item.label}</p>
                                    </div>
                                    <ArrowUpLeft className="h-8 w-8 text-white/50 transition-colors group-hover:text-[#eab308]" />
                                </div>
                                <h3 className="font-display text-3xl font-black tracking-tight text-white">{item.name}</h3>
                                <p className="mt-4 translate-y-3 text-sm text-gray-300 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">«{item.quote}»</p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
