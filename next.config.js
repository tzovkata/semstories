/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'via.placeholder.com',
      'images.unsplash.com',
      'picsum.photos'
    ],
    unoptimized: true
  },
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig