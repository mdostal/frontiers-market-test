/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: false },
  swcMinify: false // it should be false by default 

};

module.exports = nextConfig;
