/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v18.0.0 (STABLE_HYBRID)
 * [STRATEGY]: environment-Aware Optimization | Build Stability | SSR Guard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import nextMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

const isVercel = process.env.VERCEL === "1";
const isProd = process.env.NODE_ENV === "production";

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

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  compiler: {
    // ลบ Console เฉพาะใน Production แต่เก็บ Error/Warn ไว้ Debug
    removeConsole: isProd ? { exclude: ["error", "warn"] } : false,
  },

  experimental: {
    scrollRestoration: true,
    // [TERMUX_GUARD]: ใช้ CPU 1 ตัวเฉพาะตอนไม่ได้รันบน Vercel (Local Build)
    workerThreads: isVercel, 
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
    // ปิด mdxRs ไว้ก่อนเพื่อความเสถียรของ Client-side hydration
    mdxRs: false,
  },

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "https", hostname: "aemdevweb.com" },
      { protocol: "https", hostname: "www.aemdevweb.com" }, // [FIX]: เพิ่ม WWW Support
      { protocol: "https", hostname: "vercel.com" },
    ],
  },

  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/(about|services|areas|blog|case-studies)",
        headers: [
          {
            key: "Cache-Control",
            // [OPTIMIZED]: s-maxage 1 ปี, revalidate ทุก 1 ชม. เพื่อความเสถียรของ Hydration
            value: "public, max-age=0, s-maxage=31536000, stale-while-revalidate=3600",
          },
        ],
      },
      {
        source: "/(images|fonts|_next/static)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    // [MEMORY_GUARD]: ปิด Cache บน Local (Termux) เพื่อป้องกันแรมเต็มตอน Build
    if (!isVercel) {
      config.cache = false;
    }
    
    // จัดการระบบ Watch ไฟล์สำหรับ Termux
    if (!isVercel && process.env.NODE_ENV === "development") {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
