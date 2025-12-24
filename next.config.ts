/** @format */
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // ✅ ตั้งค่าความปลอดภัยสำหรับไฟล์ SVG
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // ✅ กำหนด Format ที่ทันสมัยเพื่อลดขนาดไฟล์ภาพ
    formats: ["image/avif", "image/webp"],

    // ✅ ลงทะเบียน Remote Hostnames
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com", // 🔴 แก้ไข Error จากการโหลดรูป Avatar
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "dpgmfbnzyhnhwzyozoxe.supabase.co",
        pathname: "/storage/v1/object/public/**",
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
    ],
  },

  // ✅ Performance Tuning
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig
