const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
