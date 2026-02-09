/**
 * [SYSTEM CORE]: NEXT.JS INFRASTRUCTURE CONFIG v17.3.0 (STABILIZED_PATCH)
 * [DNA MANDATE]: Zero-Jitter | Termux Optimized | Vivid Image Optimization | ARM Stability
 * [STRATEGY]: "Atomic Transpilation" & "High-Fidelity Image Support"
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import nextMDX from "@next/mdx";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

// --- 1. MDX ENGINE CONFIGURATION ---
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
});

// --- 2. MAIN INFRASTRUCTURE CONFIG ---
const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,

  experimental: {
    scrollRestoration: true,
    // [RESOURCE CONTROL]: ปรับจูนให้เข้ากับขีดจำกัดของ CPU บน Android (Zero-Freeze)
    workerThreads: false,
    cpus: 1,
    optimizePackageImports: ["lucide-react", "framer-motion", "@radix-ui/react-slot"],
    mdxRs: false,
  },

  transpilePackages: ["next-mdx-remote", "lucide-react"],

  /**
   * [IMAGE_OPTIMIZATION_HUB]: ระบบจัดการรูปภาพ
   */
  images: {
    // [FIXED]: เพิ่ม 80 เพื่อรองรับ Local Nodes Assets และป้องกัน Build Error ตามแจ้งเตือน
    qualities: [75, 80, 85, 90],

    // [FORMATS]: รองรับ Next-Gen Formats เพื่อคะแนน LCP ที่ดีที่สุด
    formats: ["image/avif", "image/webp"],

    // หากรันบน Termux แล้วติดปัญหา Sharp (libvips)
    // ให้เปลี่ยน unoptimized เป็น true (ภาพจะไม่ถูกบีบอัดแต่รันได้แน่นอน)
    unoptimized: false,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  /**
   * [WEBPACK_ENGINE]: ปรับแต่งให้รองรับ Android File System (Termux Compatibility)
   */
  webpack: (config, { dev }) => {
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
