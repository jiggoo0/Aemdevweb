/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Resource Resiliency | Next.js 16.1+ Compliance | Node-Termux Hardening
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import nextMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
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

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  compress: true,

  /**
   * [TYPED_ROUTES]: Next.js 16 Compliance
   * [FIXED]: ย้ายออกจาก experimental ตามคำเตือนใน Build Log
   */
  typedRoutes: true,

  // [DEBUGGING]: เปิดการตรวจสอบ Logging ของข้อมูลที่ดึงจาก Server
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  experimental: {
    scrollRestoration: true,
    // [TERMUX_HARDENING]: ป้องกันการใช้ CPU/RAM เกินขีดจำกัดบน Android
    workerThreads: false,
    cpus: isVercel ? undefined : 1,

    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-slot",
      "tailwindcss-animate",
    ],
    // ใช้ Rust-based compiler เฉพาะบน Vercel (Cloud)
    mdxRs: isVercel,
  },

  transpilePackages: ["next-mdx-remote", "lucide-react", "tailwindcss-animate"],

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },

  webpack: (config, { dev }) => {
    // [MEMORY_MANAGEMENT]: ปิด Cache บน Local (Termux) เพื่อประหยัดพื้นที่ Storage
    if (!isVercel) {
      config.cache = false;
    }

    // [DEV_OPTIMIZATION]: เพิ่มประสิทธิภาพการ Watch ไฟล์บน Android Filesystem
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

export default withBundleAnalyzer(withMDX(nextConfig));
