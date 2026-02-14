/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Resource Resiliency | Next.js 16.1+ Compliance | Node-Termux Hardening
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
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
   * [TYPED_ROUTES]: Next.js 16.1+ Compliance
   * [FIXED]: ย้ายออกจาก experimental เพื่อรองรับฟีเจอร์ที่ Stable แล้ว
   */
  typedRoutes: true,

  // [DEBUGGING]: ระบบติดตามการดึงข้อมูลเพื่อตรวจสอบประสิทธิภาพ
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  experimental: {
    scrollRestoration: true,
    // [TERMUX_HARDENING]: จำกัดการใช้ Thread เพื่อไม่ให้ Android Kill Process
    workerThreads: false,
    cpus: isVercel ? undefined : 1,

    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-slot",
      "tailwindcss-animate",
    ],
    // ใช้ Rust-based compiler เฉพาะบน Vercel เพื่อความเร็วในการ Build บน Cloud
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
    // [MEMORY_MANAGEMENT]: ปิด Cache บน Local เพื่อรักษาพื้นที่ Storage ของมือถือ
    if (!isVercel) {
      config.cache = false;
    }

    // [DEV_OPTIMIZATION]: เพิ่มประสิทธิภาพการ Watch ไฟล์บน Android Filesystem (Polling)
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
