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
  reactStrictMode: true,
  compress: true,

  compiler: {
    removeConsole: isProduction ? { exclude: ["error"] } : false,
  },

  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

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

  // [ASSET_ARCHITECTURE]: Optimized for Local FS & Edge Caching
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,

    // [SECURITY]: Restricted to Self + Base64 + Trusted Protocols
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; img-src 'self' data: https: blob:; sandbox;",

    // [REMOTE_PATTERNS]: Removed self-referencing domains to avoid Internal Fetch overhead
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

    const cachingGroup = "(about|services|areas|blog|case-studies|privacy|terms)";

    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: `/:slug${cachingGroup}`,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=31536000, stale-while-revalidate=60",
          },
        ],
      },
      // [EDGE_IMAGE_OPTIMIZATION]: Long-term retention for optimized assets
      {
        source: "/_next/image/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  webpack: (config, { dev }) => {
    // [RESOURCE_GUARD]: Disable caching on Termux/Mobile to prevent storage bloat
    if (!isVercel) {
      config.cache = false;
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
