import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-bucket-name.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "your-custom-domain.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
