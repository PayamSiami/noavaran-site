"use client";

import { motion } from 'framer-motion';
import { Code2, Globe2, Layers3, Smartphone, type LucideIcon } from 'lucide-react';

type Service = {
    icon: LucideIcon;
    title: string;
    body: string;
    detail: string;
};

const services: Service[] = [
    { icon: Code2, title: 'توسعه وب سازمانی', body: 'وب‌سایت‌ها و پلتفرم‌های سریع، امن و آماده رشد برای تیم‌های B2B.', detail: 'Next.js، معماری مقیاس‌پذیر، SEO فنی و اتصال به CRM/ERP.' },
    { icon: Smartphone, title: 'اپلیکیشن native موبایل', body: 'تجربه موبایل دقیق برای کاربران iOS و Android با کیفیت محصولی.', detail: 'طراحی مسیر کاربر، توسعه native، تست، انتشار و نگهداری.' },
    { icon: Layers3, title: 'نرم‌افزار اختصاصی', body: 'سامانه‌های داخلی، داشبوردهای مدیریتی و اتوماسیون فرآیندهای پیچیده.', detail: 'تحلیل نیاز، طراحی معماری، API، امنیت و گزارش‌گیری سازمانی.' },
    { icon: Globe2, title: 'بومی‌سازی فارسی و بین‌المللی', body: 'محصولات جهانی را برای بازار فارسی‌زبان قابل اعتماد و قابل استفاده می‌کنیم.', detail: 'RTL، ترجمه محصول، UX فارسی، استانداردهای فرهنگی و محتوایی.' }
];

export default function Services() {
    return (
        <section id="services" className="bg-[#080808] py-24">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 flex items-end justify-between gap-8">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#eab308]">خدمات تخصصی</p>
                        <h2 className="font-display text-5xl font-black tracking-tight text-white md:text-6xl">راهکارهای برنامه‌نویسی برای کسب‌وکارهای جدی</h2>
                    </div>
                    <p className="hidden max-w-xs text-sm leading-relaxed text-white/40 md:block">از ایده تا محصول پایدار؛ با تمرکز بر امنیت، سرعت، SEO و تجربه کاربری فارسی.</p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="grid gap-4 md:grid-cols-2">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.article key={service.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className="group relative min-h-[260px] overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.045] to-transparent p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#eab308]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                <div className="relative z-10 flex h-full flex-col justify-between">
                                    <div>
                                        <div className="mb-8 flex items-center justify-between">
                                            <Icon className="h-10 w-10 text-[#eab308]" />
                                            <span className="font-mono text-sm text-white/20">0{index + 1}</span>
                                        </div>
                                        <h3 className="font-display mb-3 text-3xl font-black tracking-tight text-white">{service.title}</h3>
                                        <p className="font-body max-w-sm text-sm leading-relaxed text-gray-400">{service.body}</p>
                                    </div>
                                    <p className="mt-8 translate-y-4 text-sm text-gray-300 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">{service.detail}</p>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}