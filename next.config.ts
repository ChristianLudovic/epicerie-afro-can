import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['ykypeavcxdblwsrisrfy.supabase.co'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
};

export default nextConfig;