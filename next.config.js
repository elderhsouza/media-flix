/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['artworks.thetvdb.com']
  },
  experimental: {
    appDir: true,
  }
};

module.exports = nextConfig;
