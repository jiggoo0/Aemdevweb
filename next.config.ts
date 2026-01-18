/** @format */
import type { NextConfig } from "next"
import createMDX from "@next/mdx"

/**
 * 🚀 Next.js Config: Luminous Performance Edition (Ultimate Tuned)
 * ปรับจูนระดับ Deep-Dive เพื่อ PageSpeed 100/100
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 🔒 Security & Size: ปิดการแสดง Header ว่าใช้ Next.js
  poweredByHeader: false,

  // ✅ 1. Compression: บีบอัดไฟล์สูงสุด
  compress: true,

  // 📄 Extensions: รองรับ MDX เต็มรูปแบบ
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🖼️ Image Optimization: เน้น AVIF และลดขนาด Device Sizes
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96],
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
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true, // อนุญาต SVG (ถ้าจำเป็น) แต่ต้องระวัง
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // 🛠️ Compiler Options
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"],
          }
        : false,
  },

  // ⚡ Experimental Features: ขีดสุดของความเร็ว Next.js 15
  experimental: {
    mdxRs: true, // 🦀 Rust Compiler สำหรับ MDX
    
    // 📦 Optimize Imports: Tree-shaking แบบละเอียด (เพิ่ม List ให้ครบ)
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
      "@/components/ui",
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
