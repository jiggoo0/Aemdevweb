/** @format */

import createMDX from "@next/mdx"
import withBundleAnalyzer from "@next/bundle-analyzer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // [1. CORE SECURITY]: พิกัดความปลอดภัยระดับอุตสาหกรรม
  reactStrictMode: true,
  poweredByHeader: false, // ปิดเพื่อไม่ให้บอทสแกนหาช่องโหว่จากเวอร์ชันเทคโนโลยี
  compress: true, // บีบอัดพิกัดข้อมูลที่ส่งออกจาก Server ทุกก้อน

  // [2. FILE EXTENSION PROTOCOL]: รองรับการวางโครงข่ายเนื้อหา (Markdown)
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // [3. DATABASE INFRASTRUCTURE]: ป้องกันพิกัด Error จาก Native Module
  serverExternalPackages: ["@libsql/client"],

  // [4. IMAGE OPTIMIZATION]: พิกัดการจัดการรูปภาพ (Critical for LCP < 0.8s)
  images: {
    formats: ["image/avif", "image/webp"], // ใช้ AVIF สำหรับบราวเซอร์ยุคใหม่
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // [TERMUX FIX]: หากรันบน Termux แล้ว Sharp มีปัญหา ให้เปิด unoptimized ใน dev mode
    unoptimized: process.env.NODE_ENV === "development",

    remotePatterns: [
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lin.ee" },
    ],
  },

  // [5. PERFORMANCE TURBO]: รีดพลังแฝงของ Next.js 16
  experimental: {
    mdxRs: true, // ใช้ Rust Compiler สำหรับ MDX (ไวกว่าเดิม 3 เท่า)
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "clsx",
      "tailwind-merge",
    ],
  },

  // [6. HARDWARE ADAPTATION]: ปรับแต่งพิกัด Webpack สำหรับสภาพแวดล้อมจำกัด
  webpack: (config, { dev, isServer }) => {
    // ป้องกันพิกัด Memory Leak ในระบบ Android/Termux
    if (dev && !isServer) {
      config.cache = false
    }
    return config
  },
}

// ระบบวิเคราะห์พิกัดขนาดไฟล์ (Run: ANALYZE=true npm run build)
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withAnalyzer(withMDX(nextConfig))
