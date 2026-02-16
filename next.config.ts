/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.9.121 (PATCHED)
 * [STRATEGY]: Edge-Network Caching | Compiler Hardening | Termux Resource Guard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import nextMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

const isVercel = process.env.VERCEL === "1";
const isProduction = process.env.NODE_ENV === "production";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
    // [PERFORMANCE]: บังคับใช้ Rust compiler สำหรับ MDX ถ้าอยู่บน Vercel
    // บน Termux (ARM) บางครั้ง JS compiler เสถียรกว่า ให้ Test ดูครับ
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // [OPTIMIZATION]: Core Web Vitals Acceleration
  reactStrictMode: true,
  compress: true, // Gzip/Brotli

  // [COMPILER_HARDENING]: Drop Console in Production
  compiler: {
    removeConsole: isProduction ? { exclude: ["error"] } : false,
  },

  productionBrowserSourceMaps: false, // ปิดเพื่อลดขนาด Build และซ่อน Source code
  poweredByHeader: false, // Security: ซ่อน X-Powered-By: Next.js

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  experimental: {
    scrollRestoration: true,
    // [TERMUX_HARDENING]: ป้องกัน Android Kill Process (OOM Killer prevention)
    workerThreads: false,
    cpus: isVercel ? undefined : 1, // บังคับ Single Core บน Local เพื่อเสถียรภาพ
    
    // [TREE_SHAKING]: Optimize Libs
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-slot",
      "tailwindcss-animate",
      "date-fns",
      "clsx",
      "tailwind-merge",
    ],
    // เปิด MDX Rust Compiler เฉพาะบน Vercel เพื่อเลี่ยงปัญหา Binary บน Android/Termux
    mdxRs: isVercel, 
  },

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 Year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.aemdevweb.com", // [FIXED]: Added dot
      },
      {
        protocol: "https",
        hostname: "aemdevweb.com", // [ADDED]: Support naked domain
      },
    ],
  },

  // [SEO_ARCHITECTURE]: Headers Management
  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" }, // [ADDED]: Prevent Clickjacking
    ];

    if (!isProduction) {
      securityHeaders.push({
        key: "X-Robots-Tag",
        value: "noindex, nofollow",
      });
    }

    const cachingGroup = "(about|services|areas|blog|case-studies|privacy|terms)";

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // [EDGE_CACHE_ROOT]: สำหรับหน้าหลักของ section
      {
        source: `/:slug${cachingGroup}`,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=31536000, stale-while-revalidate=60",
          },
        ],
      },
      // [EDGE_CACHE_DEEP]: [FIXED] สำหรับหน้าลูก (เช่น /blog/post-1)
      {
        source: `/:slug${cachingGroup}/:path*`,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=31536000, stale-while-revalidate=60",
          },
        ],
      },
      // [OPTIMIZED_IMAGE_CACHE]: สำหรับรูปภาพ Next/Image
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // [STATIC_ASSET_CACHE]: สำหรับไฟล์ใน public/images และ fonts
      {
        source: "/(images|fonts)/:path*", 
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack: (config, { dev }) => {
    // [TERMUX_OPTIMIZATION]: Memory Management
    if (!isVercel) {
       // ปิด Cache webpack บน Termux เพื่อลดการเขียนไฟล์ขยะมหาศาล (แลกกับ build ช้าลงนิดหน่อยแต่เครื่องไม่ค้าง)
      config.cache = false; 
    }
    
    if (dev && !isVercel) {
      config.watchOptions = {
        poll: 1000, // Check changes every 1s
        aggregateTimeout: 500, // [TUNED]: รอ 500ms หลัง save ก่อน rebuild เพื่อลด load
        ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**", "**/structure.txt"],
      };
    }
    return config;
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
