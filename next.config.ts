/** @format */
import type { NextConfig } from "next"
import createMDX from "@next/mdx"

/**
 * 🚀 Next.js Config: Luminous Performance Edition
 * ปรับแต่งเพื่อความเร็วสูงสุดสำหรับโดเมน www.unlink-th.com
 * รองรับ Image Optimization และ MDX Rust-based Compiler
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 📄 รองรับไฟล์หลากหลายนามสกุลสำหรับระบบ Content & Sales Hub
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🖼️ Image Optimization: ยกระดับความเร็วด้วย AVIF และ WebP
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lin.ee", // สำหรับ Assets จาก Line Official
      },
      {
        protocol: "https",
        hostname: "**.supabase.co", // สำหรับ Database Assets จาก Supabase
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // สำหรับรูปประกอบชั่วคราว
      },
    ],
  },

  // ⚡ Experimental Features: ขีดสุดของความเร็วระดับ Unlink-TH
  experimental: {
    mdxRs: true, // 🦀 ใช้ Rust-based Compiler เพื่อความเร็วในการบิวด์ MDX
    optimizePackageImports: ["lucide-react", "framer-motion", "sonner"], // ลดขนาด Bundle Size อัตโนมัติ
  },

  // 🛠️ Logging & Performance Monitoring
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

/**
 * 📝 MDX Configuration
 * ติดตั้ง Plugin พื้นฐานเพื่อความลื่นไหลในการเขียน Content
 */
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
