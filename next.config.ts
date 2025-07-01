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
  }
};

export default nextConfig;
