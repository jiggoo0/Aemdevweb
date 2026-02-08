/**
 * [SYSTEM CORE]: NEXT.JS INFRASTRUCTURE CONFIG v17.0.1 (STABILIZED_PATCH)
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
  // [ROUTING]: รองรับ Page Extensions สำหรับระบบ Hybrid (TSX + MDX)
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  // [REACT CORE]: Stability Settings
  reactStrictMode: true,

  // [NOTE]: React Compiler ถูกปิดเป็น Default อยู่แล้วในเวอร์ชั่นนี้ 
  // การประกาศใน experimental จะทำให้เกิด Config Error จึงลบออกเพื่อความเสถียร
  
  experimental: {
    scrollRestoration: true,
    
    // [RESOURCE CONTROL]: ปรับจูนให้เข้ากับขีดจำกัดของ CPU บน Android (Zero-Freeze)
    workerThreads: false,
    cpus: 1,
    
    // [OPTIMIZATION]: ลด Bundle Size โดยเลือก Import เฉพาะส่วนที่ใช้
    optimizePackageImports: ["lucide-react", "framer-motion", "@radix-ui/react-slot"],
    
    // [COMPILER]: ใช้ JS Compiler แทน Rust เพื่อความเสถียรบนระบบไฟล์ Termux
    mdxRs: false,
  },

  // [TRANSPILATION]: ป้องกัน React Development Properties Mismatch ใน Next.js 16+
  transpilePackages: ["next-mdx-remote", "lucide-react"],

  /**
   * [IMAGE_OPTIMIZATION_HUB]: ระบบจัดการรูปภาพ
   */
  images: {
    // [FIX]: อนุญาตให้ประมวลผลความคมชัดที่ 75 (Default) และ 90 (High-Fidelity)
    qualities: [75, 90],
    
    // [FORMATS]: รองรับ Next-Gen Formats
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
   * [WEBPACK_ENGINE]: ปรับแต่งให้รองรับ Android File System
   */
  webpack: (config, { dev }) => {
    // Termux/Android File System Polling Strategy
    if (dev) {
      config.watchOptions = {
        poll: 1000, // ใช้ระบบ Polling เพื่อความแม่นยำในการตรวจจับไฟล์บน Termux
        aggregateTimeout: 300,
        ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**"],
      };
    }
    return config;
  },
};

// Export Configuration with MDX Wrapper
export default withMDX(nextConfig);
