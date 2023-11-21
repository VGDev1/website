/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  swcMinify: true,
  output: 'standalone',
  images: {
    unoptimized: true
}
}

module.exports = nextConfig
