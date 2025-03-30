import { NextConfig } from "next";

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ["tsx", "mdx", "ts"],
  images: {
    domains: [
      "photos.xgroovy.com",
      "zhxgfmufsictclfvuenk.supabase.co",
      "coverhentify.s3.us-east-1.amazonaws.com",
      "cdn.sanity.io",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.xgroovy.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
} satisfies NextConfig;

export default nextConfig;
