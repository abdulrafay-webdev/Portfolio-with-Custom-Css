// next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Yahan experimental options add kar sakte hain agar zaroorat ho
  },

  typescript: {
    ignoreBuildErrors: false, // TypeScript errors build ko rokenge
  },

  webpack: (config) => {
    config.cache =false;
    return config;
  },
  
  images: {
    domains: ['yourdomain.com'], // Sirf authorized domains se images load ho sakti hain
  },

  reactStrictMode: false,
};

export default nextConfig;
