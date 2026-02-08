/**
 * [ROOT INFRASTRUCTURE]: PWA_MANIFEST_SYSTEM v17.0.2 (STABILIZED)
 * [STRATEGY]: App-Like Experience | Specialist Branding | Asset Resiliency
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @function manifest
 * @description เปลี่ยนเว็บไซต์ให้เป็น Progressive Web App (PWA)
 * รองรับการติดตั้งบนหน้าจอโฮม (Add to Home Screen) พร้อมไอคอนที่ถูกต้องตามมาตรฐาน Android/iOS
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    /* 1. IDENTITY ARCHITECTURE */
    name: `${SITE_CONFIG.brandName} | Web Infrastructure Specialist`,
    short_name: SITE_CONFIG.brandName,
    description: SITE_CONFIG.description,
    start_url: "/",
    id: "aemdevweb-specialist-node",
    scope: "/",

    /* 2. DISPLAY PHYSICS: การแสดงผลบนอุปกรณ์ */
    display: "standalone", 
    orientation: "portrait",
    categories: ["business", "productivity", "developer tools"],

    /* 3. CHROMA SYNC: ปรับสีให้ตรงกับ Brand Identity
       - background_color: #050505 (Midnight Aura)
       - theme_color: #050505 (เพื่อความกลมกลืนกับ Status Bar)
    */
    background_color: "#050505",
    theme_color: "#050505",

    /* 4. ASSET REGISTRY: ทะเบียนไอคอน (อ้างอิงไฟล์จาก /public/ โดยตรง) */
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png", // [CORRECTED]: ดึงจาก root ของ public ตามโครงสร้างจริง
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable", // รองรับการปรับรูปร่างไอคอนบน Android
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
