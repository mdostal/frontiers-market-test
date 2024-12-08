/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: false },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost','*.localhost','mdostal.com', '*.mdostal.com'],
    },
  },
};

module.exports = nextConfig;
