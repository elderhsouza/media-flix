/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['artworks.thetvdb.com']
  }
}

module.exports = nextConfig
