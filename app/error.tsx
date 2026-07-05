'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log error to monitoring service
        console.error('Application Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center p-4" dir="rtl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center"
            >
                <div className="text-6xl mb-4">😅</div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    خطایی رخ داده است
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    متاسفانه مشکلی در بارگذاری صفحه وجود دارد. لطفاً دوباره تلاش کنید.
                </p>
                <button
                    onClick={reset}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    تلاش مجدد
                </button>
            </motion.div>
        </div>
    );
}