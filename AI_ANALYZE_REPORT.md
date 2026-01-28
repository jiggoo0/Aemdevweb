---
title: Precision Bundle & Configuration Analysis
generated_at: Wed Jan 28 07:54:07 +07 2026
project: AEMDEVWEB
status: Technical Audit Verified
---
# สรุปข้อมูลโครงสร้างระบบและค่าสถิติภายในฉบับแม่นยำ

## 1. สถิติขนาดไฟล์จริง (Parsed & Gzip Total)
| Report File | Report Size | Total Parsed Size | Total Gzipped Size |
|-------------|-------------|-------------------|--------------------|
| client.html | 572K | 1.07 MB | 328.09 KB |
| edge.html | 274K | 0.10 MB | 33.05 KB |
| nodejs.html | 699K | 1.70 MB | 512.39 KB |

## 2. รายการชุดคำสั่ง (package.json)
```json
{
  "name": "aemdevweb.com",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --webpack",
    "build": "next build --webpack",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "analyze": "ANALYZE=true next build --webpack"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@img/sharp-wasm32": "^0.34.5",
    "@next/mdx": "16.1.3",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@swc/core": "^1.15.10",
    "@types/mdx": "^2.0.13",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.29.0",
    "gray-matter": "^4.0.3",
    "knip": "^5.82.1",
    "lucide-react": "^0.562.0",
    "next": "16.1.3",
    "next-mdx-remote": "^5.0.0",
    "next-themes": "^0.4.6",
    "nextjs-toploader": "^3.9.17",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.1",
    "server-only": "^0.0.1",
    "sharp": "^0.34.5",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.2",
    "@next/bundle-analyzer": "^16.1.4",
    "@next/eslint-plugin-next": "^16.1.4",
    "@tailwindcss/postcss": "^4.1.18",
    "@types/node": "^24.10.9",
    "@types/react": "^19.2.9",
    "@types/react-dom": "^19.2.3",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.2",
    "eslint-config-next": "16.1.3",
    "postcss": "^8.5.6",
    "prettier": "^3.8.1",
    "prettier-plugin-tailwindcss": "^0.6.14",
    "tailwindcss": "^4.1.18",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.53.1"
  }
}
```

## 3. การตั้งค่าระบบงาน (next.config.mjs)
```javascript
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
```

## 4. รายการตรวจสอบงานเทคนิค
- [x] Next.js 16 Structure: Verified
- [x] Precision Node-based Extraction: Enabled
- [x] Bundle Weight Analysis: Ready
