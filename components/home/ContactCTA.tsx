'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle2, Mail, User, Send, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export const ContactCTA = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setIsSuccess(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/10 mb-6">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            تماس با ما
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
                            آماده همکاری با
                            <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent block">
                                تیم ما هستید؟
                            </span>
                        </h2>

                        <p className="mt-4 text-lg text-white/70 leading-relaxed">
                            با پر کردن فرم تماس، ما در اسرع وقت با شما تماس خواهیم گرفت.
                            تیم ما آماده پاسخگویی به سوالات شماست.
                        </p>

                        <div className="mt-8 space-y-4">
                            {[
                                { icon: Phone, text: '۰۲۱-۱۲۳۴۵۶۷۸', label: 'تلفن' },
                                { icon: Mail, text: 'info@noavaran.ir', label: 'ایمیل' },
                                { icon: MapPin, text: 'تهران، خیابان ولیعصر', label: 'آدرس' },
                                { icon: Clock, text: 'شنبه تا پنجشنبه ۹ الی ۱۸', label: 'ساعات کاری' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex items-center gap-3 text-white/60 hover:text-white/80 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm">{item.text}</div>
                                        <div className="text-xs text-white/30">{item.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm text-white/60 mb-1">نام و نام خانوادگی</label>
                                <div className="relative">
                                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-11 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        placeholder="نام خود را وارد کنید"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-white/60 mb-1">ایمیل</label>
                                <div className="relative">
                                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-11 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        placeholder="ایمیل خود را وارد کنید"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-white/60 mb-1">پیام</label>
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                                        placeholder="پیام خود را وارد کنید"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                variant="gradient"
                                className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 text-lg"
                                loading={isSubmitting}
                                icon={<Send className="w-5 h-5" />}
                                iconPosition="left"
                            >
                                {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
                            </Button>

                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 px-4 py-2 rounded-lg"
                                >
                                    <CheckCircle2 className="w-4 h-4" />
                                    پیام شما با موفقیت ارسال شد
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};