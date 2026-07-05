import Link from 'next/link';

const columns = [
    {
        heading: 'خدمات',
        links: [
            { label: 'توسعه وب', href: '#services' },
            { label: 'اپلیکیشن موبایل', href: '#services' },
            { label: 'نرم‌افزار اختصاصی', href: '#services' }
        ]
    },
    {
        heading: 'شرکت',
        links: [
            { label: 'نمونه‌کارها', href: '#proof' },
            { label: 'فرآیند همکاری', href: '#process' },
            { label: 'تماس و مشاوره', href: '#contact' }
        ]
    }
];

export default function Footer() {
    return (
        <footer className="border-t border-white/[0.06] bg-[#080808] pt-16 pb-10">
            <div className="mx-auto mb-16 grid max-w-7xl gap-12 px-8 md:grid-cols-12">
                <div className="md:col-span-5">
                    <p className="mb-3 text-lg font-bold text-white">نوآوران دیجیتال پارس</p>
                    <p className="max-w-xs text-sm leading-relaxed text-white/40">شریک فنی سازمان‌ها برای طراحی وب، اپلیکیشن native، نرم‌افزار اختصاصی و بومی‌سازی فارسی.</p>
                </div>
                <div className="grid gap-8 md:col-span-7 md:grid-cols-2">
                    {columns.map((column) => (
                        <div key={column.heading}>
                            <p className="mb-5 text-xs uppercase tracking-widest text-white/40">{column.heading}</p>
                            <ul className="flex flex-col gap-3">
                                {column.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm text-white/50 transition-colors duration-200 hover:text-white">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/[0.06] px-8 pt-8 sm:flex-row">
                <p className="text-xs text-white/30">© ۲۰۲۵ نوآوران دیجیتال پارس. همه حقوق محفوظ است.</p>
                <div className="flex items-center gap-5">
                    <a href="https://github.com" aria-label="GitHub" className="text-white/30 transition-colors duration-200 hover:text-white/70">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-white/30 transition-colors duration-200 hover:text-white/70">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
