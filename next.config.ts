import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/announcements/discover-before-you-commit", destination: "/product/trial-collection", permanent: true },
      { source: "/announcements", destination: "/news", permanent: true },
      { source: "/announcements/:slug", destination: "/news/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
