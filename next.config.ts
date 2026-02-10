/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.5.10 (IMAGE_PATCH)
 * [STRATEGY]: Whitelist Image Qualities | Resource Resiliency | Termux Optimized
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import nextMDX from "@next/mdx";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

const isVercel = process.env.VERCEL === "1";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  compress: true,

  experimental: {
    scrollRestoration: true,
    workerThreads: false, // [STABILITY]: บังคับปิดเพื่อป้องกัน DataCloneError ใน Termux
    cpus: isVercel ? undefined : 1,

    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-slot",
      "tailwindcss-animate",
    ],
    mdxRs: isVercel,
  },

  transpilePackages: ["next-mdx-remote", "lucide-react", "tailwindcss-animate"],

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],

    // [FIX]: เพิ่มการอนุญาตค่า Quality 85 และ 90 ตามที่ใช้ใน Components
    qualities: [75, 85, 90],

    minimumCacheTTL: 86400,
    unoptimized: false,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },

  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    if (!isVercel) {
      config.cache = false;
    }

    if (!isServer) {
      config.optimization.usedExports = true;
    }

    if (dev && !isVercel) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**"],
      };
    }

    return config;
  },
};

export default withMDX(nextConfig);
