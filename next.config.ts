/** @format */
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // ✅ 1. แก้ไข Warning: ลงทะเบียนค่า Quality ที่อนุญาตให้ใช้งาน
    // วิธีนี้จะช่วยให้ Build ผ่านโดยไม่มีข้อความเตือนใน Console
    qualities: [25, 50, 75, 90],

    // อนุญาตให้ใช้ SVG เพื่อความยืดหยุ่นของ Icon/Logo
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // รองรับฟอร์แมตสมัยใหม่เพื่อความเร็ว (High Performance)
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "dpgmfbnzyhnhwzyozoxe.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.aemdevweb.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    // เพิ่มความเร็วในการรัน Dev mode
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig
