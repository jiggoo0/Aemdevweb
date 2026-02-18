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
  reactStrictMode: true,
  compress: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  // [SEO_REDIRECTS_ENGINE]: จัดการหน้าเก่า (Legacy) ตามรายงาน Audit
  async redirects() {
    return [
      // 1. [FORCE_WWW]: บังคับ non-www ไปที่ www ทันที (SEO Canonicalization)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'aemdevweb.com' }],
        destination: 'https://www.aemdevweb.com/:path*',
        permanent: true,
      },
      // 2. [LEGACY_MAPPING]: เปลี่ยนจาก Underscore (_) เป็น Hyphen (-) และโครงสร้างเก่า
      { source: '/services/corporate_pro', destination: '/services/corporate', permanent: true },
      { source: '/services/corporate_lite', destination: '/services/corporate', permanent: true },
      { source: '/services/seo_agency', destination: '/services/seo-agency', permanent: true },
      { source: '/services/local_service', destination: '/services/local-authority', permanent: true },
      { source: '/services/local', destination: '/services/local-authority', permanent: true },
      { source: '/services/event_magic', destination: '/services/salepage', permanent: true },
      { source: '/seo/advanced-schema-markup', destination: '/blog/advanced-schema-markup', permanent: true },
      { source: '/seo/core-web-vitals-speed', destination: '/blog/core-web-vitals-speed', permanent: true },
      { source: '/seo/technical-structure-audit', destination: '/blog/technical-audit-protocol', permanent: true },
      { source: '/blog/technical-seo-guide', destination: '/blog/technical-audit-protocol', permanent: true },
      { source: '/blog/technical-structure-audit', destination: '/blog/technical-audit-protocol', permanent: true },
      { source: '/case-studies/project-01', destination: '/case-studies', permanent: true },
      { source: '/templates/:path*', destination: '/services', permanent: true },
    ];
  },

  experimental: {
    scrollRestoration: true,
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
        hostname: "www.aemdevweb.com", // ปรับเป็น www
      },
    ],
  },

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
      {
        source: "/(about|services|areas|blog|case-studies|privacy|terms)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=31536000, stale-while-revalidate=60",
          },
        ],
      },
      {
        source: "/_next/image/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/(images|fonts)/:path*",
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
