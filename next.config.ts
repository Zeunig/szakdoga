import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'listings-prod.tcimg.net',
        pathname: '**',
      },
    ]
  }
};

export default nextConfig;
