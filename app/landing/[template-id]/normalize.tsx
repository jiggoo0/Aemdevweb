/** @format */

import React from "react"
import { LandingData, MultiLangText, isMultiLang } from "./types"

/**
 * 🛠️ normalizeData: ฟังก์ชันสำหรับจัดการข้อมูลดิบ (Raw Data) ให้กลายเป็นข้อมูลที่พร้อมใช้งาน
 * - ป้องกัน UI Crash จากค่า Null/Undefined
 * - รวม Layer ธุรกิจจำลอง และ Layer วิศวกรรมของ AEM DEV
 */
export function normalizeData(data: any): LandingData {
  if (!data) return {} as LandingData

  // 1. จัดการข้อมูลการติดต่อและโซเชียล (Flattening Data)
  const socials = {
    facebook: data.socials?.facebook || data.facebook || "",
    lineId: data.lineId || data.socials?.lineId || "",
    instagram: data.socials?.instagram || data.instagram || "",
    tiktok: data.socials?.tiktok || "",
  }

  const contact = {
    phone: data.phone || data.contact?.phone || "08x-xxx-xxxx",
    email: data.email || data.contact?.email || "contact@aemdev.com",
    address: data.address || data.contact?.address || "",
  }

  // 2. จัดการข้อมูล AEM Service Layer (Inclusion System)
  const aemService = {
    supportLevel: data.aemService?.supportLevel || "Direct Developer Support",
    infrastructure: {
      framework:
        data.aemService?.infrastructure?.framework || "Next.js 15 (App Router)",
      hosting:
        data.aemService?.infrastructure?.hosting || "Cloud-Native Vercel/Edge",
    },
    standardFeatures: Array.isArray(data.aemService?.standardFeatures)
      ? data.aemService.standardFeatures
      : [],
  }

  // 3. ปรับโครงสร้างข้อมูลคืนกลับไป (Layer Separation)
  return {
    ...data,
    id: data.id || "temp-id",
    variant: data.variant || "starter",
    defaultLanguage: data.defaultLanguage || "th",

    // รักษา MultiLangText ไว้เพื่อให้ Component ย่อยใช้ getText() จัดการเอง
    name: data.name || { th: "ชื่อธุรกิจ", en: "Business Name" },
    description: data.description || { th: "", en: "" },

    // Infrastructure Layer
    aemService,

    // Design Layer
    primaryColor: data.primaryColor || "#2563eb",
    theme: {
      primary: data.theme?.primary || data.primaryColor || "#2563eb",
      secondary: data.theme?.secondary || "#0f172a",
      accent: data.theme?.accent || "#fbbf24",
    },

    // Contact Layer
    phone: contact.phone,
    lineId: socials.lineId,
    address: contact.address,
    socials,

    // Content Array Protection
    services: Array.isArray(data.services) ? data.services : [],
    features: Array.isArray(data.features) ? data.features : [],
    testimonials: Array.isArray(data.testimonials) ? data.testimonials : [],
    gallery: Array.isArray(data.gallery) ? data.gallery : [],
    faqs: Array.isArray(data.faqs) ? data.faqs : [],
    socialProof: Array.isArray(data.socialProof) ? data.socialProof : [],
  }
}

/**
 * 🎨 NormalizeWrapper: คอมโพเนนต์สำหรับควบคุม Environment ของ Landing Page
 * - ป้องกัน Style Leakage จาก Main Site
 * - ตั้งค่า Smooth Scroll และ Anti-aliasing
 */
export function NormalizeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="landing-scope relative min-h-screen w-full overflow-x-hidden scroll-smooth bg-white font-sans text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      {/* CSS Isolation Tip: 
          คลาส 'landing-scope' สามารถใช้ใน globals.css เพื่อ reset style 
          เฉพาะหน้า landing ได้โดยไม่กระทบหน้าหลัก 
      */}
      {children}
    </div>
  )
}
