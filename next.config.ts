/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.9.100 (LCP_OPTIMIZED)
 * [STRATEGY]: Retina-Ready Images | Termux Resource Safety | Aggressive Caching
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import nextMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

const isVercel = process.env.VERCEL === "1";
// const isProductionDomain = process.env.NEXT_PUBLIC_SITE_URL === "https://aemdevweb.com";

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
  // [OPTIMIZATION]: ลดภาระการ Compile และเร่งความเร็ว LCP
  reactStrictMode: true,
  compress: true,

  // [SECURITY]: ปิด Source Maps บน Prod เพื่อความปลอดภัยและลดขนาด (Hardened)
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  experimental: {
    scrollRestoration: true,
    // [TERMUX_HARDENING]: ป้องกัน Android Kill Process (สำคัญมาก)
    workerThreads: false,
    cpus: isVercel ? undefined : 1, // จำกัด CPU บน Local (Termux) แต่ปล่อยเต็มที่บน Cloud

    // [TREE_SHAKING]: บังคับ Optimize Library หนักๆ
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-slot",
      "tailwindcss-animate",
      "date-fns",
      "clsx",
      "tailwind-merge",
    ],
    // ใช้ Rust Compiler เฉพาะบน Vercel เพื่อความเร็ว (Termux ใช้ WASM/JS fallback)
    mdxRs: isVercel,
  },

  images: {
    // [MOBILE_LCP]: จูน Breakpoints ให้ละเอียดขึ้นสำหรับ Retina Display
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // เพิ่ม 750/828 สำหรับ iPhone Models
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // [FIXED]: เพิ่ม 256, 384 เพื่อปิดช่องว่างระหว่าง Thumbnail กับ Full Width

    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // Cache 1 ปี (Aggressive Strategy)
    dangerouslyAllowSVG: true, // อนุญาต SVG สำหรับ Vector Graphics
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    remotePatterns: [
      {
        protocol: "https",
        hostname: "aemdevweb.com",
      },
      // [STRICT]: ไม่อนุญาต Wildcard (**) เพื่อความปลอดภัยสูงสุด
    ],
  },

  // [SEO_ARCHITECTURE]: Headers Management
  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ];

    // ป้องกัน Indexing บน Environment ที่ไม่ใช่ Production
    if (process.env.VERCEL_ENV !== "production") {
      securityHeaders.push({
        key: "X-Robots-Tag",
        value: "noindex, nofollow",
      });
    }

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // [CACHE_POLICY]: Force Cache Static Assets 1 Year
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  webpack: (config, { dev }) => {
    // [STORAGE_SAVER]: ปิด Webpack Cache บน Termux เพื่อประหยัดพื้นที่ Storage
    if (!isVercel) {
      config.cache = false;
    }
    // [DEV_DX]: Polling สำหรับ File System ของ Android (แก้ปัญหา Hot Reload ไม่ติด)
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

// Wrap Config ด้วย Plugins ตามลำดับ
export default withBundleAnalyzer(withMDX(nextConfig));
