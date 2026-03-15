import type { NextConfig } from "next";

/**
 * [AEMZA_HYBRID_CONFIG v18.5.3]: NEXTJS_NUDDLE SMART INFRASTRUCTURE
 * [STRATEGY]: Pure Webpack Enforcement (WASM-Binding Compatible) | Vercel Optimized
 * [MAINTAINER]: AEMDEVWEB (Technical Infrastructure Specialist)
 */

const isTermux = process.env.TERMUX_VERSION !== undefined || process.env.SHELL?.includes("termux");
const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  /* 🚀 Hybrid Architecture Strategy */
  reactStrictMode: true,
  cacheComponents: true,

  // [COMPILER]: ใช้ SWC สำหรับการ Minify สูงสุด
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // [INFRA]: Next.js 16 - High-Performance Configuration
  output: "standalone",
  poweredByHeader: false,
  compress: true,

  experimental: {
    mdxRs: true,
    authInterrupts: true,
  },

  // [IMAGE_ENGINE]: แยกส่วน Local Assets และ Vercel Blob
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fme2ovv5az8x4yqg.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // [SMART_LOAD]: ใช้ unoptimized เฉพาะใน Termux Dev เพื่อประหยัด CPU
    unoptimized: (process.env.NODE_ENV === "development" && isTermux) || !isVercel,
  },

  // [SMART_BUNDLER]: บังคับใช้ Webpack 100% ในทุกสภาวะแวดล้อมที่จำกัด
  webpack: (config, { isServer, dev }) => {
    // 1. ปรับแต่ง parallelism และ cache สำหรับสภาพแวดล้อม Android/Termux
    if (isTermux) {
      config.parallelism = 1;
      config.cache = {
        type: "filesystem",
        allowCollectingMemory: true,
        maxMemoryGenerations: 1,
      };
    }

    // 2. Production Optimizations เมื่ออยู่บน Vercel (รีดศักยภาพ Webpack สูงสุด)
    if (!dev && !isServer && isVercel) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 30,
          minSize: 20000,
        },
      };
    }

    return config;
  },

  // ปรับแต่งการสร้าง Static Page (Android/Termux ต้องการเวลามากกว่าปกติ)
  staticPageGenerationTimeout: 300,

  // [DEBUGGING]: เปิด Log Fetches เฉพาะบน Vercel
  logging: {
    fetches: {
      fullUrl: isVercel,
    },
  },
};

export default nextConfig;
