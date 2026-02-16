/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.9.121 (STABLE_RELEASE)
 * [STRATEGY]: Diagnostic Mode - Bypass Security & Optimization Logic
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
  },
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  experimental: {
    scrollRestoration: true,
    workerThreads: false,
    cpus: isVercel ? undefined : 1,
    optimizePackageImports: [
      "lucide-react", "framer-motion", "@radix-ui/react-slot",
      "tailwindcss-animate", "date-fns", "clsx", "tailwind-merge",
    ],
    mdxRs: isVercel,
  },

  images: {
    // [TEST_OPTION]: หากแก้แล้วรูปยังไม่ขึ้น ให้เปลี่ยน false เป็น true 
    // เพื่อข้ามระบบ Optimize ของ Vercel ทั้งหมด (จะรู้ทันทีว่าปัญหาอยู่ที่ Quota หรือ Path)
    unoptimized: false, 

    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    
    // [FIXED]: ลบ sandbox; ออกเพื่อป้องกัน Browser Block การเรนเดอร์รูป
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; img-src 'self' data: https: blob:;",
    remotePatterns: [],
  },

  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
    ];

    if (!isProduction) {
      securityHeaders.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    }

    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default bundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(withMDX(nextConfig));
