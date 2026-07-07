import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ Enable static export
  output: 'export',
  basePath: '/noavaran-site',
  assetPrefix: '/noavaran-site',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;