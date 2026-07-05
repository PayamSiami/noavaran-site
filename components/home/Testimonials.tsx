"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    { quote: 'نوآوران دیجیتال پارس توانست معماری محصول ما را برای رشد enterprise آماده کند.', name: 'سمیرا نژاد', role: 'CTO در TechFlow' },
    { quote: 'برای ورود به بازار فارسی به تیمی نیاز داشتیم که هم UX بفهمد هم تکنولوژی؛ دقیقاً همان را گرفتیم.', name: 'امید رحمانی', role: 'مدیر محصول در CloudNest' },
    { quote: 'داشبورد اختصاصی ما با استانداردهای امنیتی و گزارش‌گیری سازمانی تحویل شد.', name: 'دریا شمس', role: 'مدیر فناوری اطلاعات در FinCore' }
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActive((current) => (current + 1) % testimonials.length);
        }, 4200);

        return () => window.clearInterval(timer);
    }, []);

    const testimonial = testimonials[active];

    return (
        <section className="bg-[#080808] py-24">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#eab308]">اعتماد مشتریان</p>
                <h2 className="font-display mb-12 text-5xl font-black tracking-tight text-white md:text-6xl">انتخاب مدیرانی که کیفیت فنی برایشان حیاتی است</h2>
                <div className="relative mx-auto min-h-[300px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm md:p-14">
                    <AnimatePresence mode="wait">
                        <motion.div key={testimonial.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.35 }}>
                            <div className="mb-8 flex justify-center gap-1" aria-label="امتیاز پنج ستاره">
                                {[0, 1, 2, 3, 4].map((star) => (
                                    <span key={star} className="text-lg text-[#eab308]">★</span>
                                ))}
                            </div>
                            <blockquote className="font-display mx-auto max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
                                «{testimonial.quote}»
                            </blockquote>
                            <div className="mt-10">
                                <p className="text-base font-semibold text-white">{testimonial.name}</p>
                                <p className="mt-1 text-sm text-gray-400">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <div className="mt-10 flex justify-center gap-2">
                        {testimonials.map((item, index) => (
                            <button key={item.name} onClick={() => setActive(index)} className={`h-2.5 rounded-full transition-all ${active === index ? 'w-8 bg-[#eab308]' : 'w-2.5 bg-white/20'}`} aria-label={`نمایش نظر ${item.name}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
