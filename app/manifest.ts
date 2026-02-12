/**
 * [SYSTEM CONFIG]: PWA_MANIFEST_NODE v17.9.9 (STABILIZED)
 * [STRATEGY]: High-Fidelity PWA Integration | Site_Config Sync
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next"; // [FIXED]: ใช้ import type ตามกฎ @typescript-eslint/consistent-type-imports
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @function manifest
 * @description สร้างไฟล์ manifest.json สำหรับคุณสมบัติ PWA (Progressive Web App)
 * [ENGINEERING]: เชื่อมโยงค่า Identity โดยตรงจาก SITE_CONFIG (Single Source of Truth)
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.brandName,
    short_name: SITE_CONFIG.brandName,
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050505", // Deep Black Background
    theme_color: "#050505", // Status Bar Sync
    orientation: "portrait",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    // [STRATEGY]: Shortcuts เพื่อการเข้าถึง Funnel สำคัญได้รวดเร็ว
    shortcuts: [
      {
        name: "วิเคราะห์บริการ",
        short_name: "Services",
        description: "ดูบริการด้าน Technical SEO และ Web Architecture",
        url: "/services",
        icons: [{ src: "/android-chrome-192x192.png", sizes: "192x192" }],
      },
      {
        name: "เริ่มวางกลยุทธ์",
        short_name: "Consult",
        description: "ติดต่อปรึกษานายเอ็มซ่ามากส์",
        url: SITE_CONFIG.links.line,
        icons: [{ src: "/android-chrome-192x192.png", sizes: "192x192" }],
      },
    ],
    // [HARDENING]: Screenshots สำหรับแสดงผลใน App Store/Install Prompt
    screenshots: [
      {
        src: "/images/og-main.webp",
        sizes: "1200x630",
        type: "image/webp",
        form_factor: "wide",
        label: "AEMDEVWEB Specialist Architecture",
      },
    ],
  };
}
