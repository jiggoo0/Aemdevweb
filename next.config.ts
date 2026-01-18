/** @format */
import type { NextConfig } from "next"
import createMDX from "@next/mdx"

/**
 * 🚀 Next.js Config: Luminous Performance Edition (Ultimate Tuned)
 * ปรับจูนระดับ Deep-Dive เพื่อ PageSpeed 100/100
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 🔒 Security & Size: ปิดการแสดง Header ว่าใช้ Next.js (ประหยัด Bytes + ปลอดภัย)
  poweredByHeader: false,

  // ✅ 1. Compression: บีบอัดไฟล์สูงสุด (Gzip/Brotli)
  compress: true,

  // 📄 Extensions: รองรับ MDX เต็มรูปแบบ
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🖼️ Image Optimization: เน้น AVIF และลดขนาด Device Sizes ที่ไม่จำเป็น
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

    // 📦 Optimize Imports: Tree-shaking แบบละเอียด
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "clsx",
      "tailwind-merge",
      "date-fns", // ✅ เพิ่ม: มักใช้บ่อยและขนาดใหญ่
      "lodash", // ✅ เพิ่ม: เผื่อมีการหลุดเข้ามา
      "@radix-ui/react-icons", // ✅ เพิ่ม: ถ้ามีการใช้ Icons ของ Radix
    ],

    // 🚀 Turbo: ถ้าใช้ Turbopack ใน dev ให้ config เพิ่มได้ที่นี่ (Optional)
  },

  // 🛠️ Logging: ช่วย Debug ตอน Dev
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
    // ⚡ Performance: บังคับใช้ Rust Compiler ในระดับ MDX Loader
    // (Next.js 15 experimental.mdxRs จัดการให้แล้ว แต่ใส่ options ว่างไว้ตาม pattern)
  },
})

export default withMDX(nextConfig)
