/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.9.120 (ULTIMATE_OPTIMIZED)
 * [STRATEGY]: Edge-Network Caching | Compiler Hardening | Termux Resource Guard
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

  // [COMPILER_HARDENING]: กำจัด Unused JS เพื่อลด Payload
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  experimental: {
    scrollRestoration: true,
    // [TERMUX_HARDENING]: ป้องกัน Android Kill Process
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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
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
      // [NEW: EDGE_HTML_CACHE]: บังคับให้ Edge Network เก็บหน้าหลักไว้ถาวรจนกว่าจะมีการ Revalidate
      {
        source: "/(about|services|areas|blog|case-studies|privacy|terms)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=31536000, stale-while-revalidate=60",
          },
        ],
      },
      // [OPTIMIZED_IMAGE_CACHE]: สำหรับรูปภาพที่รีไซส์แล้ว
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // [STATIC_ASSET_CACHE]: สำหรับไฟล์ดิบใน public/
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
