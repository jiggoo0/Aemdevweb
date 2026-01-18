/** @format */
import type { NextConfig } from "next"
import createMDX from "@next/mdx"

/**
 * 🚀 Next.js Config: Luminous Performance Edition (Ultimate Tuned)
 * ปรับจูนระดับ Deep-Dive เพื่อ PageSpeed 100/100
 * เน้นลด TBT (Total Blocking Time) และ JS Execution Time
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 🔒 Security & Size: ปิดการแสดง Header ว่าใช้ Next.js (ประหยัด Bytes + ปลอดภัย)
  poweredByHeader: false,

  // ✅ 1. Compression: บีบอัดไฟล์สูงสุด (Gzip/Brotli)
  compress: true,

  // 📄 Extensions: รองรับ MDX เต็มรูปแบบ
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🖼️ Image Optimization: เน้น AVIF และลดขนาด Device Sizes
  images: {
    formats: ["image/avif", "image/webp"],
    // ⚠️ Tips: ตัดขนาดที่ไม่ได้ใช้ออก เพื่อลดภาระ Server ในการ Generate รูป
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96], // ตัด 128+ ออกถ้าใช้ deviceSizes คุมแล้ว
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
    // ⚡ Cache: เพิ่มเวลา Cache รูปภาพให้นานขึ้น (ลดการโหลดซ้ำ)
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // 🛠️ Compiler Options: หัวใจสำคัญของการลด TBT
  compiler: {
    // 🚀 Remove Console: ลบ console.log ใน Production เพื่อคืน Main Thread ให้ Browser
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"], // เก็บ console.error ไว้ debug
          }
        : false,
  },

  // ⚡ Experimental Features: ขีดสุดของความเร็ว Next.js 15
  experimental: {
    mdxRs: true, // 🦀 Rust Compiler สำหรับ MDX (Build ไวขึ้น 5x)

    // 📦 Optimize Imports: Tree-shaking แบบละเอียด (สำคัญมากสำหรับ TBT)
    // Next.js จะโหลดเฉพาะ Module ที่ใช้จริง ไม่โหลดมาทั้งก้อน
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "clsx",
      "tailwind-merge",
      "date-fns",
      "lodash",
      "@radix-ui/react-icons",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-tabs",
      "@radix-ui/react-slot",
      "@radix-ui/react-label",
      "@/components/ui", // ช่วย Tree-shake UI components ภายในโปรเจกต์
    ],
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
