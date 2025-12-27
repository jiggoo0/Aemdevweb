/** @format */
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
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
        // ✅ ปรับเป็น /** เพื่อให้ครอบคลุมทุกโฟลเดอร์และแก้ปัญหาเรื่อง Case Sensitive
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
    // เพิ่มความเร็วในการรัน Dev mode โดยโหลดเฉพาะที่จำเป็น
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig
