/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/auth/Signing'
      },
    ];
  },
}

module.exports = nextConfig
