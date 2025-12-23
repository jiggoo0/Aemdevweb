/** @format */
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // ✅ 1. ตั้งค่าความปลอดภัยสำหรับไฟล์ SVG (จำเป็นสำหรับ Dicebear/Logos)
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // ✅ 2. กำหนด Format ที่ทันสมัยเพื่อลดขนาดไฟล์ภาพ (WebP/AVIF)
    formats: ["image/avif", "image/webp"],

    // ✅ 3. ลงทะเบียน Remote Hostnames (ป้องกัน Error: hostname is not configured)
    remotePatterns: [
      {
        // Supabase Storage (แหล่งเก็บรูปภาพหลักของโปรเจกต์)
        protocol: "https",
        hostname: "dpgmfbnzyhnhwzyozoxe.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        // Unsplash (สำหรับรูปภาพ Portfolio และภาพประกอบ)
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        // Avatars / Mockup Logos
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
      {
        // Production Domain
        protocol: "https",
        hostname: "www.aemdevweb.com",
        pathname: "/**",
      },
    ],
  },

  // ✅ 4. Performance Tuning (ลดขนาด Bundle Size)
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // ✅ 5. ลบ Error ลำดับความสำคัญต่ำในช่วง Build
  typescript: {
    ignoreBuildErrors: false, // แนะนำเป็น false เพื่อความ Sharp ของโค้ด
  },
}

export default nextConfig
