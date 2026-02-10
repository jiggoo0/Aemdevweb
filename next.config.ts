/**
 * [SYSTEM CORE]: NEXT.JS INFRASTRUCTURE CONFIG v17.5.5 (IDENTITY_LOCKED)
 * [STRATEGY]: INP Reduction | Zero-Jitter | Termux Optimized | ARM Stability
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
  // [PERFORMANCE]: บังคับใช้การบีบอัดข้อมูลเพื่อลดขนาด Payload (ลด LCP)
  compress: true, 

  experimental: {
    scrollRestoration: true,
    // [INP FIX]: ปรับจูนเพื่อคืนทรัพยากรให้ Main Thread บน Android (Zero-Freeze)
    workerThreads: false,
    cpus: 1,
    optimizePackageImports: [
      "lucide-react", 
      "framer-motion", 
      "@radix-ui/react-slot",
      "tailwindcss-animate" // [FIX]: ป้องกัน Build Error ใน Termux
    ],
    mdxRs: false,
  },

  // [INP FIX]: บังคับ Transpile แพ็กเกจที่อาจทำให้เกิด Long Tasks
  transpilePackages: ["next-mdx-remote", "lucide-react", "tailwindcss-animate"],

  /**
   * [IMAGE_OPTIMIZATION_HUB]: ระบบจัดการรูปภาพเพื่อกู้คะแนน LCP
   */
  images: {
    // [STRATEGY]: กำหนด Sizes ให้สอดคล้องกับ vercel.json (CLS Mitigation)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    unoptimized: false, // รันบน Vercel ควรเป็น false เพื่อใช้พลังของ Edge Image Optimization

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  /**
   * [WEBPACK_ENGINE]: ปรับแต่งเพื่อลดค่า Interaction to Next Paint (INP)
   */
  webpack: (config, { dev, isServer }) => {
    // [INP FIX]: เพิ่มการทำ Tree Shaking ที่รัดกุมขึ้นในฝั่ง Client
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
