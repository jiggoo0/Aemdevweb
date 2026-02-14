/**
 * [SYSTEM CORE]: PWA_MANIFEST_NODE v17.9.96 (ULTIMATE_STABLE)
 * [STRATEGY]: High-Fidelity PWA | SSOT Sync | Enhanced UX
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @function manifest
 * @description สร้างไฟล์ manifest สำหรับคุณสมบัติ PWA แบบ Zero-Defect
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    // [UX]: ดึงข้อมูลจาก SSOT โดยตรงเพื่อความสม่ำเสมอของแบรนด์
    name: SITE_CONFIG.project.title,
    short_name: SITE_CONFIG.brandName,
    description: SITE_CONFIG.description,

    start_url: "/",
    display: "standalone",

    // [SYNCED]: ใช้สีจาก Brand Theme ที่กำหนดไว้ใน Config
    background_color: SITE_CONFIG.themeColor,
    theme_color: SITE_CONFIG.themeColor,

    orientation: "portrait",
    categories: ["business", "productivity", "technology", "developer"],

    // [ASSETS]: กำหนดไอคอนให้ครอบคลุมทุก Platform
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable", // [CRITICAL]: ป้องกันไอคอนเบี้ยวบน Android
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],

    // [ENGAGEMENT]: Shortcuts ช่วยข้าม Funnel ไปยังจุดปิดการขายได้ทันที
    shortcuts: [
      {
        name: "วิเคราะห์บริการ",
        short_name: "Services",
        description: "ดูโซลูชันด้าน Technical SEO และ Web Architecture",
        url: "/services",
        icons: [{ src: "/android-chrome-192x192.png", sizes: "192x192" }],
      },
      {
        name: "ปรึกษานายเอ็มซ่ามากส์",
        short_name: "Consult",
        description: "ติดต่อวางแผนกลยุทธ์ระบบดิจิทัล",
        url: SITE_CONFIG.links.line,
        icons: [{ src: "/android-chrome-192x192.png", sizes: "192x192" }],
      },
    ],

    // [HARDENING]: screenshots สำหรับ "Rich Install UI" (แนะนำให้ใส่ทั้ง Wide และ Narrow)
    screenshots: [
      {
        src: SITE_CONFIG.ogImage,
        sizes: "1200x630",
        type: "image/webp",
        form_factor: "wide",
        label: "AEMDEVWEB Professional Dashboard",
      },
      {
        src: "/images/og-main.webp", // สามารถเปลี่ยนเป็นภาพแนวตั้งของ Mobile UI ได้
        sizes: "1200x630",
        type: "image/webp",
        form_factor: "narrow",
        label: "Mobile Optimization Experience",
      },
    ],
  };
}
