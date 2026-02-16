/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v18.0.1 (HYDRATION_SAFE)
 * [STRATEGY]: SSOT (Force WWW) | Edge-Ready Redirects | Termux Stability
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
  poweredByHeader: false,
  
  // [COMPILER_HARDENING]: กำจัด Payload ส่วนเกินใน Production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  experimental: {
    scrollRestoration: true,
    // [TERMUX_OPTIMIZATION]: ป้องกัน Android OOM Kill สำหรับสภาพแวดล้อมทรัพยากรต่ำ
    workerThreads: false,
    cpus: isVercel ? undefined : 1,
    optimizePackageImports: [
      "lucide-react", "framer-motion", "@radix-ui/react-slot", 
      "tailwindcss-animate", "date-fns", "clsx", "tailwind-merge"
    ],
    mdxRs: isVercel,
  },

  images: {
    // [FIXED]: ตัด 2048px ออกเพื่อแก้ปัญหา Hydration Mismatch บน Environment ที่จำกัด (Termux)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], 
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    remotePatterns: [
      { protocol: "https", hostname: "www.aemdevweb.com" },
      { protocol: "https", hostname: "aemdevweb.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" } // รองรับ Google Avatar
    ],
  },

  async redirects() {
    return [
      // [SEO_FORCE_WWW]: บังคับใช้ WWW ให้สอดคล้องกับ SITE_CONFIG เพื่อป้องกัน Duplicate Content
      {
        source: "/:path*",
        has: [{ type: "host", value: "aemdevweb.com" }],
        destination: "https://www.aemdevweb.com/:path*",
        permanent: true,
      },
      // [CONTENT_MIGRATION]: รักษาค่า Ranking จาก URL เก่า
      { source: "/areas/web-design-phang-nga-local-authority", destination: "/areas/phang-nga", permanent: true },
      { source: "/areas/undefined", destination: "/areas", permanent: true },
      {
        source: "/services/:path(corporate-lite|corporate-pro|corporate_lite|corporate_pro|starter_landing)",
        destination: "/services/corporate",
        permanent: true,
      },
      {
        source: "/templates/:path(event-magic|corporate-standard|event_magic|corporate_standard|restaurant_cafe|invert_image)",
        destination: "/services/corporate",
        permanent: true,
      },
      { source: "/templates/booking/hotel-resort-node", destination: "/services/hotelresort", permanent: true },
      {
        source: "/templates/:path(local-service|local_service|new-service-name|new_service_name)",
        destination: "/services/local-authority",
        permanent: true,
      },
      { source: "/services/seo", destination: "/services/seo-agency", permanent: true },
      { source: "/blog/seo-for-sme-2025", destination: "/blog/seo-2026-strategy", permanent: true },
      { source: "/seo/core-web-vitals-speed", destination: "/blog/core-web-vitals-speed", permanent: true },
      { source: "/seo/advanced-schema-markup", destination: "/blog/advanced-schema-markup", permanent: true },
      { source: "/:path(seo|blog)/technical-seo-guide", destination: "/blog/technical-audit-protocol", permanent: true },
      { source: "/seo/:path*", destination: "/blog/:path*", permanent: true },
      { source: "/old-service-path", destination: "/services", permanent: true },
    ];
  },

  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
    ];

    if (process.env.VERCEL_ENV !== "production") {
      securityHeaders.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    }

    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/(images|fonts|_next/static)/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  webpack: (config, { dev }) => {
    if (!isVercel) config.cache = false;
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
