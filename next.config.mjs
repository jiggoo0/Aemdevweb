/** @format */

import createMDX from "@next/mdx"
import withBundleAnalyzer from "@next/bundle-analyzer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Core System: เน้นความเสถียรและความปลอดภัย
  reactStrictMode: true,
  poweredByHeader: false, // ปิดเพื่อไม่ให้คนภายนอกรู้พิกัดเทคโนโลยีหลังบ้าน
  compress: true,

  // 2. Content Support: รองรับการวางระบบเนื้อหาผ่าน MDX
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 3. Database & External Infrastructure
  serverExternalPackages: ["@libsql/client"],

  // 4. Image Optimization System (พิกัดงานที่ต้องกริบที่สุด)
  images: {
    formats: ["image/avif", "image/webp"],
    // [FIXED]: เพิ่มระบบ Fallback สำหรับ Sharp บน Android/Termux
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      { protocol: "https", hostname: "lin.ee" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // 5. Experimental Performance (พิกัดการรีดความเร็ว)
  experimental: {
    mdxRs: true,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "lucide-react",
    ],
  },

  // 6. Webpack Configuration: ปรับแต่งการจัดการหน่วยความจำบน Termux
  webpack: (config) => {
    config.cache = false // ป้องกันพิกัด Memory เต็มในสภาพแวดล้อมจำกัด
    return config
  },
}

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const withMDX = createMDX({
  // เพิ่มพิกัดการรองรับ Plugins สำหรับ MDX ได้ที่นี่ในอนาคต
})

export default withAnalyzer(withMDX(nextConfig))
