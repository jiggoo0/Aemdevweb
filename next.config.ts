/**
 * [SYSTEM CORE]: NEXT.JS INFRASTRUCTURE CONFIG v17.5.5 (STABILIZED)
 * [STRATEGY]: INP Reduction | Resource Resiliency | SEO High-Fidelity
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import nextMDX from "@next/mdx";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

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
    workerThreads: false,
    cpus: 1,
    optimizePackageImports: [
      "lucide-react", 
      "framer-motion", 
      "@radix-ui/react-slot",
      "tailwindcss-animate"
    ],
    mdxRs: false,
  },

  transpilePackages: ["next-mdx-remote", "lucide-react", "tailwindcss-animate"],

  /**
   * [IMAGE_OPTIMIZATION_HUB]: ปรับจูนเพื่อความเสถียรของ Bot
   */
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    
    // [FIX]: เพิ่ม TTL เป็น 24 ชั่วโมง เพื่อลดการ Optimize รูปใหม่บ่อยๆ จน CPU Spike
    minimumCacheTTL: 86400, 
    
    unoptimized: false, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  /**
   * [ASSET_RESILIENCY]: ป้องกัน Bot เจอ Error 404 เวลาไฟล์ CSS เก่าหายหลัง Deploy
   */
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.optimization.usedExports = true;
    }

    if (dev) {
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
