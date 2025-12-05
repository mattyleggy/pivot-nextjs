import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable image optimization cache in development
    ...(process.env.NODE_ENV === "development" && {
      unoptimized: false,
      // This will prevent aggressive caching during development
      minimumCacheTTL: 0,
    }),
  },
};

export default nextConfig;
