/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.9.0 (STABILIZED_FINAL)
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
    
    // [STABILITY]: บังคับปิดเพื่อป้องกัน DataCloneError ใน Proot/Termux Environments
    workerThreads: false, 
    
    // [RESOURCE]: จำกัดการใช้ CPU เพื่อความเสถียรบนโมบายฮาร์ดแวร์
    cpus: isVercel ? undefined : 1,

    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-slot",
      "tailwindcss-animate",
    ],
    
    // [COMPILER]: เปิดใช้งาน Rust-based compiler เมื่ออยู่บน Vercel เท่านั้น
    mdxRs: isVercel,
  },

  transpilePackages: ["next-mdx-remote", "lucide-react", "tailwindcss-animate"],

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],

    // [FIDELITY]: อนุญาตค่า Quality เฉพาะที่กำหนดใน Components เพื่อประสิทธิภาพสูงสุด
    qualities: [75, 85, 90],

    minimumCacheTTL: 86400,
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // [ADVISORY]: พิจารณาเจาะจง Hostname เมื่อขึ้น Production จริง
      },
    ],
  },

  /**
   * [HEADERS]: กำหนดนโยบายการทำ Caching สำหรับ Static Assets
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

  /**
   * [WEBPACK]: ปรับแต่งการทำ Bundling และระบบ File Watching ใน Termux
   */
  webpack: (config, { dev, isServer }) => {
    // ปิดการใช้ Disk Cache ใน Termux เพื่อป้องกันปัญหา File System Lock
    if (!isVercel) {
      config.cache = false;
    }

    if (!isServer) {
      config.optimization.usedExports = true;
    }

    // [TERMINAL OPS]: แก้ไขปัญหา Hot Reload ไม่ทำงานบน Android Filesystem
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
