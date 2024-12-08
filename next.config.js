/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: false },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost','*.localhost'],
    },
  },
};

module.exports = nextConfig;
