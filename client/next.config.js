/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.orca.com',
        port: '',
        pathname: '/uploads/microsites/**',
      },
      {
        protocol: 'https',
        hostname: 'www.orca.com',
        port: '',
        pathname: '/uploads/products/large/**',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*'
      }
    ]
  },
}
