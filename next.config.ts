/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.9.121 (STABLE_RELEASE)
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
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // [OPTIMIZATION]: Core Web Vitals & Stability
  reactStrictMode: true,
  compress: true, 

  // [COMPILER_HARDENING]: Cleaner Production Logs
  compiler: {
    removeConsole: isProduction ? { exclude: ["error"] } : false,
  },

  productionBrowserSourceMaps: false,
  poweredByHeader: false, 

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  experimental: {
    scrollRestoration: true,
    
    // [TERMUX_HARDENING]: ป้องกัน Android OOM Killer
    workerThreads: false,
    cpus: isVercel ? undefined : 1, 

    // [TREE_SHAKING]: Optimize Critical Libraries
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-slot",
      "tailwindcss-animate",
      "date-fns",
      "clsx",
      "tailwind-merge",
    ],
    
    // MDX Rust Compiler: เปิดเฉพาะบน Vercel เพื่อเลี่ยงปัญหาสถาปัตยกรรมบนมือถือ
    mdxRs: isVercel,
  },

  // [ASSET_OPTIMIZATION]: High-Performance Media Handling
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 Year Persistent Cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.aemdevweb.com",
      },
      {
        protocol: "https",
        hostname: "aemdevweb.com",
      },
    ],
  },

  // [SEO_ARCHITECTURE]: Security & Caching Orchestration
  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
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
      // [EDGE_CACHE]: Intelligent SWR for Dynamic Sections
      {
        source: `/:slug${cachingGroup}`,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=31536000, stale-while-revalidate=60",
          },
        ],
      },
      {
        source: `/:slug${cachingGroup}/:path*`,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=31536000, stale-while-revalidate=60",
          },
        ],
      },
      // [IMAGE_CACHE]: Optimized Asset Retention
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
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
    // [TERMUX_FS_ADAPTATION]: ระบบจัดการหน่วยความจำบน Android
    if (!isVercel) {
      config.cache = false; // ปิด Cache เพื่อป้องกัน Disk I/O Bottleneck บนมือถือ
    }

    if (dev && !isVercel) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 500,
        ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**", "**/structure.txt"],
      };
    }
    return config;
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
