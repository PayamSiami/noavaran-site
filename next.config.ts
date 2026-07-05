import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ Enable static export
  output: 'export',
  
  // ✅ Fix asset paths for GitHub Pages
  // If your repo is at https://username.github.io/repo-name/
  // Use: basePath: '/repo-name'
  basePath: '/noavaran-site', // ← Replace with your repo name
  
  // ✅ Or if using custom domain, leave empty
  
  // ✅ Ensure asset prefix matches basePath
  assetPrefix: '/noavaran-site', // ← Same as basePath
  
  // ✅ Disable image optimization for static export
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  
  // ✅ Add trailing slashes for GitHub Pages
  trailingSlash: true,
  
  // ✅ Disable x-powered-by header
  poweredByHeader: false,
  
  // ✅ React strict mode
  reactStrictMode: true,
  
  // ✅ Compression
  compress: true,
};

export default nextConfig;