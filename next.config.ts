import type { NextConfig } from "next";

const isTermux = process.env.TERMUX_VERSION !== undefined || process.env.SHELL?.includes("termux");

const nextConfig: NextConfig = {
  /* 🚀 Hybrid Architecture Strategy */
  reactStrictMode: true,

  // [MAX_SPEED]: ปิดการใช้ Console.log ใน Production เพื่อความคลีนและเบาที่สุด
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // [NEW]: Next.js 16 - High-Performance Caching
  experimental: {
    mdxRs: true,
    // [PPR]: Partial Prerendering ใน Next.js 16 - เปิดใช้งานผ่าน cacheComponents
    cacheComponents: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    // [SECURITY_OPTIMIZED]: ระบุ Hostname ของ Vercel Blob ให้แม่นยำ
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
    // ใน Termux เราอาจไม่มี Sharp Library ที่สมบูรณ์ จึงอนุญาตให้รันแบบ unoptimized ได้หากจำเป็น
    unoptimized: isTermux,
  },

  // ปรับแต่งการสร้าง Static Page ให้เหมาะสมกับทรัพยากร (Android/Termux)
  staticPageGenerationTimeout: 180,

  webpack: (config, { isServer }) => {
    if (!isServer && isTermux) {
      config.parallelism = 1;
      config.optimization = {
        ...config.optimization,
        minimize: true,
      };
      config.cache = {
        type: "filesystem",
        allowCollectingMemory: true,
        maxMemoryGenerations: 1,
      };
    }
    return config;
  },

  // ปิดการส่งออกข้อมูล Header ที่ไม่จำเป็นเพื่อความปลอดภัย
  poweredByHeader: false,

  // รองรับการทำ Compression เพื่อความเร็วสูงสุด
  compress: true,
};

export default nextConfig;
