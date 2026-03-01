import type { NextConfig } from "next";

const isTermux = process.env.TERMUX_VERSION !== undefined || process.env.SHELL?.includes("termux");

const nextConfig: NextConfig = {
  /* 🚀 Hybrid Architecture Strategy */
  reactStrictMode: true,
  reactCompiler: true,
  cacheComponents: true,

  // ใช้ Standalone เพื่อประสิทธิภาพสูงสุดบน Vercel และประหยัดพื้นที่ใน Termux
  output: "standalone",

  // เปิดใช้งานฟีเจอร์ขั้นสูงสำหรับ React 19 และ Next 16
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
    // ปรับแต่งการระบุประเภทไฟล์สำหรับ MDX และไฟล์เทคนิค
    mdxRs: true,
  },

  // การจัดการรูปภาพ (Hybrid Optimization)
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // ใน Termux เราอาจไม่มี Sharp Library ที่สมบูรณ์ จึงอนุญาตให้รันแบบ unoptimized ได้หากจำเป็น
    unoptimized: isTermux,
  },

  // 🛠️ Environment Specific Tuning (Surgical Fix for Termux/Android)
  webpack: (config, { isServer }) => {
    if (isTermux && !isServer) {
      // ลดจำนวน Worker ลงเพื่อไม่ให้ RAM ของมือถือเต็มระหว่าง Build
      config.parallelism = 2;

      // จัดการปัญหา Watcher ในระดับ Kernel ของ Android
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
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
