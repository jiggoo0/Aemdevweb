/** @format */
import createMDX from "@next/mdx"

/** * 🏗️ Next.js Configuration — AEMDEVWEB Professional v2026
 * Focus: High-Performance Image Serving & Termux Compatibility
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  /* 🖼️ Image Optimization Infrastructure */
  images: {
    formats: ["image/avif", "image/webp"],
    // ✅ เพิ่มการรองรับอุปกรณ์หน้าจอกว้างและ Mobile High DPI
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // ✅ เพิ่มขนาด 128px และ 256px เพื่อให้รูปโลโก้และไอคอนบนมือถือโหลดได้ไวที่สุด
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      { protocol: "https", hostname: "lin.ee" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },

  /* 🧪 Experimental & Build Performance Features */
  experimental: {
    // 🦀 [IMPORTANT]: ปิด mdxRs เพื่อให้สามารถ Build บน Termux ได้โดยไม่ติดปัญหา Rust Compiler
    mdxRs: false,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "@radix-ui/react-dialog",
      "@radix-ui/react-tabs",
    ],
  },
}

const withMDX = createMDX({})
export default withMDX(nextConfig)
