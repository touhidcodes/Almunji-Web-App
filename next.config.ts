import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: { unoptimized: true },
  reactStrictMode: false,
  compress: true,
};

export default nextConfig;
