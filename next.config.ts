import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip problematic pages during build
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.hotjar.com https://static.hotjar.com https://script.hotjar.com https://www.googletagmanager.com https://www.google-analytics.com",
              "connect-src 'self' https://*.hotjar.com https://*.hotjar.io wss://*.hotjar.com https://www.google-analytics.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://analytics.google.com",
              "img-src 'self' data: https: blob: https://*.hotjar.com",
              "style-src 'self' 'unsafe-inline' https://*.hotjar.com",
              "font-src 'self' data: https://*.hotjar.com",
              "frame-src 'self' https://*.hotjar.com",
              "worker-src 'self' blob:",
              "child-src 'self' blob:"
            ].join('; ')
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://insights.hotjar.com'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
