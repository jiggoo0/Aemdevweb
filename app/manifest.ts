/**
 * [ROOT INFRASTRUCTURE]: PWA_MANIFEST_SYSTEM v17.0.1 (STABILIZED)
 * [STRATEGY]: App-Like Experience | Specialist Branding | Asset Resiliency
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @function manifest
 * @description เปลี่ยนเว็บไซต์ให้เป็น Progressive Web App (PWA)
 * เพื่อให้ผู้ใช้สามารถติดตั้ง (Add to Home Screen) และเข้าถึงระบบได้เหมือนแอปพลิเคชันพื้นฐาน
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    /* 1. IDENTITY ARCHITECTURE */
    name: `${SITE_CONFIG.brandName} | Specialist Hub`,
    short_name: SITE_CONFIG.brandName,
    description: SITE_CONFIG.description,
    start_url: "/",
    id: "aemdevweb-specialist-node",
    scope: "/",

    /* 2. DISPLAY PHYSICS: การแสดงผลบนอุปกรณ์ */
    display: "standalone", // แสดงผลเต็มหน้าจอเหมือนแอปจริง
    orientation: "portrait",
    categories: ["business", "productivity", "developer tools"],

    /* 3. CHROMA SYNC: ปรับสีให้ตรงกับระบบ Dark Theme (globals.css)
       - background_color: #050505 (สีพื้นหลังหลัก)
       - theme_color: #22c55e (สีเขียว Brand Primary)
    */
    background_color: "#050505",
    theme_color: "#22c55e",

    /* 4. ASSET REGISTRY: ทะเบียนไอคอน (ตรวจสอบไฟล์ใน /public/images/ จริง) */
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable", // รองรับ Adaptive Icons (วงกลม/สี่เหลี่ยม)
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
