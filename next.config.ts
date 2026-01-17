/** @format */
import type { NextConfig } from "next"
import createMDX from "@next/mdx"

/**
 * 🚀 Next.js Config: Luminous Performance Edition (Tuned for 90+ Score)
 * ปรับแต่งเพื่อลด TBT และ JavaScript Execution Time ตามรายงาน PageSpeed
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ 1. เปิดระบบบีบอัดไฟล์ระดับสูงเพื่อลดขนาดการโอนถ่ายข้อมูล
  compress: true,

  // 📄 รองรับไฟล์หลากหลายนามสกุลสำหรับระบบ Content & Sales Hub
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🖼️ Image Optimization: ใช้ AVIF เป็น Priority เพื่อขนาดไฟล์ที่เล็กกว่า WebP อีก 20%
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lin.ee",
      },
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // ⚡ Experimental Features: ขีดสุดของความเร็วระดับ Unlink-TH
  experimental: {
    mdxRs: true, // 🦀 Rust Compiler สำหรับ MDX
    // ✅ เพิ่มการ Optimize Package ที่ใช้ใน UI และ Animation ทั้งหมด
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "clsx",
      "tailwind-merge",
    ],
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
 */
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
