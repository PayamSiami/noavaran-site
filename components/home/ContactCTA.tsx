"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, CalendarDays, CheckCircle2, Mail, User } from 'lucide-react';
import Button from '@/components/ui/Button';

interface FormData {
    name: string;
    email: string;
    company: string;
}

const timeSlots = ['سه‌شنبه ۱۰:۰۰', 'چهارشنبه ۱۴:۳۰', 'پنجشنبه ۰۹:۰۰'];

export default function ContactCTA() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', company: '' });
    const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="relative overflow-hidden bg-[#0d0d0d] py-24">
            <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#eab308]/10 blur-[120px]" />
            <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
                <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#eab308]">شروع همکاری</p>
                    <h2 className="font-display mb-6 text-5xl font-black tracking-tight text-white md:text-7xl">جلسه مشاوره فنی رزرو کنید</h2>
                    <p className="font-body mb-10 max-w-lg text-base leading-relaxed text-gray-300">نیاز محصول، محدودیت‌های فنی، اهداف بازار فارسی و معیارهای موفقیت را بررسی می‌کنیم و مسیر پیشنهادی را شفاف ارائه می‌دهیم.</p>
                    <div className="grid gap-3 sm:grid-cols-3">
                        {timeSlots.map((slot) => (
                            <button key={slot} onClick={() => setSelectedSlot(slot)} className={`min-h-[48px] rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${selectedSlot === slot ? 'border-[#eab308] bg-[#eab308] text-gray-900' : 'border-white/[0.08] bg-white/[0.03] text-gray-300 hover:border-white/[0.14]'}`} aria-pressed={selectedSlot === slot}>
                                {slot}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl md:p-8">
                    {submitted ? (
                        <div className="flex min-h-[420px] flex-col items-center justify-center text-center" aria-live="polite">
                            <CheckCircle2 className="mb-6 h-16 w-16 text-[#eab308]" />
                            <h3 className="font-display mb-3 text-3xl font-black text-white">درخواست ثبت شد</h3>
                            <p className="max-w-sm text-sm leading-relaxed text-gray-300">دعوت‌نامه جلسه برای {selectedSlot} ارسال خواهد شد.</p>
                            <Button onClick={() => setSubmitted(false)} variant="on-dark" className="mt-8">
                                ثبت درخواست دیگر
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">نام و نام خانوادگی</label>
                                <div className="relative">
                                    <User className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                    <input id="name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="علی رضایی" className="w-full rounded-xl border border-slate-700 bg-slate-800 py-4 pl-4 pr-12 text-white placeholder:text-gray-400 focus:border-[#eab308] focus:outline-none focus:ring-2 focus:ring-[#eab308]/40" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">ایمیل کاری</label>
                                <div className="relative">
                                    <Mail className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                    <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="team@company.com" dir="ltr" className="w-full rounded-xl border border-slate-700 bg-slate-800 py-4 pl-4 pr-12 text-left text-white placeholder:text-gray-400 focus:border-[#eab308] focus:outline-none focus:ring-2 focus:ring-[#eab308]/40" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="company" className="mb-2 block text-sm font-semibold text-white">شرکت یا سازمان</label>
                                <div className="relative">
                                    <Building2 className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                    <input id="company" name="company" type="text" required value={formData.company} onChange={(event) => setFormData({ ...formData, company: event.target.value })} placeholder="نام شرکت" className="w-full rounded-xl border border-slate-700 bg-slate-800 py-4 pl-4 pr-12 text-white placeholder:text-gray-400 focus:border-[#eab308] focus:outline-none focus:ring-2 focus:ring-[#eab308]/40" />
                                </div>
                            </div>
                            <div className="rounded-2xl border border-white/[0.08] bg-[#080808] p-4">
                                <p className="text-xs uppercase tracking-widest text-gray-400">زمان انتخاب‌شده</p>
                                <p className="mt-2 text-lg font-bold text-white">{selectedSlot}</p>
                            </div>
                            <Button type="submit" variant="on-dark" size="lg" className="w-full">
                                <CalendarDays className="h-5 w-5" /> رزرو جلسه مشاوره
                            </Button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
