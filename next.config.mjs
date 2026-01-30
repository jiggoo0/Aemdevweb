/** @format */

// พิกัดข้อมูล: next.config.mjs
// หน้าที่: ปรับแต่งเอนจิ้นสำหรับสภาพแวดล้อม Termux (Android)
// มาตรฐาน: Ultra-Deep Level 7 | Specialist Optimization
// ควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์

import nextMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import remarkFrontmatter from "remark-frontmatter"

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // [ROUTING PROTOCOL]: รองรับพิกัดไฟล์ที่หลากหลาย
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,

  // [COMPILER STRATEGY]: รีดสมรรถนะรหัสในระดับการ Compile
  compiler: {
    // ลบ console.log ใน production เพื่อประหยัดพื้นที่และเพิ่มความปลอดภัย
    removeConsole: process.env.NODE_ENV === "production",
  },

  // [WEBPACK SPECIALIST CONFIG]: ปรับแต่งเพื่อความเสถียรบน Termux
  webpack: (config, { dev, isServer }) => {
    // แก้ไขปัญหา File Watching ใน Android Filesystem โดยใช้ Polling
    if (dev) {
      config.watchOptions = {
        poll: 1000, // ตรวจจับการเปลี่ยนแปลงทุก 1 วินาที
        aggregateTimeout: 300,
      }
    }

    // [CACHE LOGIC]: จัดการหน่วยความจำให้เหมาะสมกับทรัพยากรจำกัด
    if (dev && !isServer) {
      config.cache = {
        type: "filesystem",
        allowCollectingMemory: true,
        compression: "gzip", // บีบอัด cache เพื่อประหยัดพื้นที่ storage ใน Termux
      }
    }

    return config
  },

  // [IMAGE PROTOCOL]: ปรับจูนพิกัดภาพเพื่อลดภาระ CPU (Sharp Optimization)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // [EXPERIMENTAL]: เปิดใช้งานฟีเจอร์ใหม่เพื่อความลื่นไหลของระบบ
  experimental: {
    mdxRs: true, // ใช้ Rust-based compiler สำหรับ MDX เพื่อความรวดเร็ว
    scrollRestoration: true,
  },
}

export default withMDX(nextConfig)
