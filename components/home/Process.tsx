"use client";

import { motion } from 'framer-motion';
import { ClipboardCheck, LifeBuoy, Map, Rocket, type LucideIcon } from 'lucide-react';

interface ProcessStep {
    icon: LucideIcon;
    title: string;
    tag: string;
}

const steps: ProcessStep[] = [
    { icon: ClipboardCheck, title: 'کشف نیاز و ممیزی فنی', tag: 'Discovery' },
    { icon: Map, title: 'معماری محصول و نقشه راه', tag: 'Blueprint' },
    { icon: Rocket, title: 'توسعه، تست و استقرار', tag: 'Launch' },
    { icon: LifeBuoy, title: 'پشتیبانی، رشد و بهینه‌سازی', tag: 'Scale' }
];

export default function Process() {
    return (
        <section id="process" className="bg-[#080808] py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#eab308]">فرآیند همکاری</p>
                        <h2 className="font-display text-5xl font-black tracking-tight text-white md:text-6xl">از جلسه اول تا محصول آماده رشد</h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-white/40">یک مسیر شفاف برای تیم‌های فنی و مدیریتی؛ با خروجی قابل سنجش در هر مرحله.</p>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div key={step.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className="group grid gap-6 py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-12 md:items-center">
                                <span className="font-mono text-5xl font-black text-white/10 transition-colors group-hover:text-white/20 md:col-span-2">0{index + 1}</span>
                                <div className="flex items-center gap-5 md:col-span-5">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                                        <Icon className="h-7 w-7 text-[#eab308]" />
                                    </div>
                                    <h3 className="font-display text-2xl font-black tracking-tight text-white">{step.title}</h3>
                                </div>
                                <span className="text-xs uppercase tracking-[0.25em] text-white/40 md:col-span-3">{step.tag}</span>
                                <div className="hidden h-px bg-gradient-to-l from-[#eab308] to-transparent md:col-span-2 md:block" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}