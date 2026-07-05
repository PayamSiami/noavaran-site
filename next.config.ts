import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // ✅ Ensure trailing slashes for GitHub Pages
  trailingSlash: true,

  // ✅ Other optimizations
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
