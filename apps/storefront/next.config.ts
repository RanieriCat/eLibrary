import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@metodo-a/ui', '@metodo-a/commerce'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'picsum.photos' }]
  }
};

export default nextConfig;
