"use client";

import { motion } from 'framer-motion';

const team = [
    { name: 'علی رضایی', role: 'معمار نرم‌افزار', line: 'ساخت سیستم‌هایی که زیر فشار هم پایدار می‌مانند', avatar: 'https://i.pravatar.cc/300?img=12' },
    { name: 'سمیرا نژاد', role: 'مدیر محصول دیجیتال', line: 'ترجمه نیاز کسب‌وکار به محصول قابل اجرا', avatar: 'https://i.pravatar.cc/300?img=32' },
    { name: 'نیما فرهادی', role: 'مهندس موبایل native', line: 'تجربه موبایل سریع، امن و دقیق', avatar: 'https://i.pravatar.cc/300?img=15' },
    { name: 'لیلا مرادی', role: 'طراح UX فارسی', line: 'بومی‌سازی بدون از دست دادن کیفیت جهانی', avatar: 'https://i.pravatar.cc/300?img=47' }
];

export default function About() {
    return (
        <section id="about" className="bg-[#0d0d0d] py-24">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-16 max-w-4xl text-center">
                    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#eab308]">درباره ما</p>
                    <h2 className="font-display mb-6 text-5xl font-black tracking-tight text-white md:text-6xl">تیمی برای پروژه‌های حساس، مقیاس‌پذیر و بین‌المللی</h2>
                    <p className="font-body mx-auto max-w-2xl text-base leading-relaxed text-gray-300">نوآوران دیجیتال پارس یک آژانس فنی B2B است که برای استارتاپ‌ها، شرکت‌های enterprise، نهادهای دولتی و برندهای بین‌المللی نیازمند تجربه فارسی، محصول دیجیتال می‌سازد.</p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="grid gap-4 md:grid-cols-4">
                    {team.map((member) => (
                        <motion.article key={member.name} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img src={member.avatar} alt={`${member.name}، ${member.role}`} className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" loading="lazy" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-display text-xl font-black text-white">{member.name}</h3>
                                <p className="mt-1 text-sm text-gray-400">{member.role}</p>
                                <p className="mt-4 text-sm text-[#eab308]">«{member.line}»</p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
