"use client";

import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Clock, GitPullRequest, type LucideIcon } from 'lucide-react';

const benefits: { icon: LucideIcon; text: string }[] = [
    { icon: CheckCircle2, text: 'کاهش ریسک فنی با معماری قابل تست و مستندسازی دقیق.' },
    { icon: Clock, text: 'تحویل سریع‌تر MVP، نسخه سازمانی و قابلیت‌های کلیدی محصول.' },
    { icon: GitPullRequest, text: 'هم‌راستایی تیم فنی، محصول و کسب‌وکار در یک مسیر شفاف.' }
];

export default function WhyAutomation() {
    return (
        <section className="bg-[#0d0d0d] py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
                <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }} className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8">
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#eab308]/15 blur-3xl" />
                    <AlertTriangle className="mb-8 h-12 w-12 text-[#eab308]" />
                    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">چالش سازمان‌ها</p>
                    <h2 className="font-display max-w-xl text-[clamp(2.2rem,5vw,4.2rem)] font-black leading-tight tracking-tight text-white">
                        محصول دیجیتال ضعیف، رشد کسب‌وکار را کند می‌کند.
                    </h2>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }} className="lg:pr-10">
                    <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mb-4 text-xs uppercase tracking-[0.25em] text-[#eab308]">تغییر مسیر</motion.p>
                    <motion.h2 variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="font-display mb-10 text-4xl font-black tracking-tight text-white md:text-5xl">
                        ساخت محصول با استاندارد CTOها
                    </motion.h2>
                    <div className="space-y-4">
                        {benefits.map((benefit) => {
                            const Icon = benefit.icon;

                            return (
                                <motion.div key={benefit.text} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.06]">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eab308]/10">
                                        <Icon className="h-6 w-6 text-[#eab308]" />
                                    </div>
                                    <p className="font-body text-base text-gray-300">{benefit.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}