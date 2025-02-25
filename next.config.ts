import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'listings-prod.tcimg.net',
        port: '',
        pathname: '**',
        search: '',
      },
    ]
  }
};

export default nextConfig;
