/** @format */
import createMDX from "@next/mdx"

/**
 * การตั้งค่า Next.js - AEMDEVWEB Professional v2026
 * มุ่งเน้น: การส่งรูปภาพประสิทธิภาพสูง, การทำงานร่วมกับสภาพแวดล้อมจำกัด และ Next.js 16
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  /* ย้ายมาอยู่ระดับบนใน Next.js 16: แพ็กเกจที่ระบบไม่ควรนำไปมัดรวมในฝั่งเซิร์ฟเวอร์ */
  serverExternalPackages: ["@libsql/client"],

  /* รากฐานระบบการจัดการรูปภาพ */
  images: {
    formats: ["image/avif", "image/webp"],
    // รองรับหน้าจอขนาดกว้างและอุปกรณ์ความละเอียดสูง
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // กำหนดขนาดรูปภาพย่อยเพื่อให้ค่า LCP ออกมาดีที่สุด
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // แก้ไขปัญหาการเรียกใช้คุณภาพรูปภาพที่ 100%
    qualities: [75, 100],
    remotePatterns: [
      { protocol: "https", hostname: "lin.ee" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  /* ฟีเจอร์สำหรับการทดลองและเร่งความเร็วในการประกอบไฟล์ */
  experimental: {
    // ปิดการใช้ Rust Compiler ใน MDX เพื่อความเสถียรบนสภาพแวดล้อมเฉพาะทาง
    mdxRs: false,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "@radix-ui/react-dialog",
      "@radix-ui/react-tabs",
      "@radix-ui/react-dropdown-menu",
    ],
  },

  /* ตัวช่วยประมวลผลสำหรับการปรับจูนหน้าเว็บ */
  compiler: {
    // ลบการแสดงผลข้อความตรวจสอบ (Console) ในหน้าใช้งานจริง ยกเว้นการแจ้งเตือนปัญหา
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
}

const withMDX = createMDX({})
export default withMDX(nextConfig)
