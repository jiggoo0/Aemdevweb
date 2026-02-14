/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.9.110 (ULTIMATE_OPTIMIZED)
 * [STRATEGY]: Aggressive Image Caching | Compiler Hardening | Termux Resource Guard
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
  // [OPTIMIZATION]: เร่งความเร็ว Core Web Vitals
  reactStrictMode: true,
  compress: true,

  // [COMPILER_HARDENING]: กำจัด Unused JS (Console Logs) เพื่อลด Payload 12-51KB
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  experimental: {
    scrollRestoration: true,
    // [TERMUX_HARDENING]: ป้องกัน Android Kill Process ในสภาพแวดล้อมทรัพยากรจำกัด
    workerThreads: false,
    cpus: isVercel ? undefined : 1,

    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-slot",
      "tailwindcss-animate",
      "date-fns",
      "clsx",
      "tailwind-merge",
    ],
    mdxRs: isVercel,
  },

  images: {
    // [MOBILE_LCP]: Breakpoints ที่ละเอียดขึ้นสำหรับความคมชัดระดับ Retina
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // [FIXED]: ปูฐานราก Cache 1 ปี
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    remotePatterns: [
      {
        protocol: "https",
        hostname: "aemdevweb.com",
      },
    ],
  },

  // [SEO_ARCHITECTURE]: Headers Management
  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ];

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
      // [OPTIMIZED_IMAGE_CACHE]: บังคับ Cache รูปภาพที่ผ่านการรีไซส์ (แก้ปัญหา TTL 1 ชม. ใน PageSpeed)
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // [STATIC_ASSET_CACHE]: บังคับ Cache ไฟล์ดิบและฟอนต์
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
    if (!isVercel) {
      config.cache = false;
    }
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
