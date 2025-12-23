/** @format */

import React from "react"
import { LandingData, MultiLangText } from "./types"

/**
 * 🛠️ normalizeData: ฟังก์ชันสำหรับจัดการข้อมูลดิบ (Raw Data) ให้กลายเป็นข้อมูลที่พร้อมใช้งาน
 * - ป้องกัน Error จากค่าที่ขาดหายไป (Missing Fields)
 * - เติมค่า Default พื้นฐาน
 * - รักษาโครงสร้าง Multi-language ไว้สำหรับ Template ย่อย
 */
export function normalizeData(data: any): LandingData {
  if (!data) return {} as LandingData

  // 1. จัดการข้อมูลโซเชียลมีเดีย (รองรับโครงสร้างที่หลากหลาย)
  const socials = {
    facebook: data.socials?.facebook || data.facebook || "",
    lineId: data.socials?.lineId || data.lineId || "",
    instagram: data.socials?.instagram || data.instagram || "",
  }

  // 2. จัดการข้อมูลการติดต่อ
  const contact = {
    phone: data.contact?.phone || data.phone || "08x-xxx-xxxx",
    email: data.contact?.email || data.email || "contact@example.com",
    address: data.contact?.address || data.address || "",
  }

  // 3. จัดการโครงสร้างข้อมูลพื้นฐาน (Defaults)
  return {
    ...data,
    // ส่ง name และ description ไปทั้งก้อน (สลับเป็น string หรือ Object ตามต้นฉบับ)
    // เพื่อให้ Template แต่ละตัวใช้ Logic ของตัวเองในการเลือกภาษา
    name: data.name || "Business Name",
    description: data.description || "",

    variant: data.variant || "starter",

    theme: {
      primary: data.theme?.primary || "#2563eb",
      secondary: data.theme?.secondary || "#0f172a",
      accent: data.theme?.accent || "#fbbf24",
      ...data.theme,
    },

    contact,
    socials,

    // ตรวจสอบ Array เพื่อป้องกัน Error .map() is not a function
    services: Array.isArray(data.services) ? data.services : [],
    features: Array.isArray(data.features) ? data.features : [],
    testimonials: Array.isArray(data.testimonials) ? data.testimonials : [],
    gallery: Array.isArray(data.gallery) ? data.gallery : [],
    faqs: Array.isArray(data.faqs) ? data.faqs : [],
    socialProof: Array.isArray(data.socialProof) ? data.socialProof : [],
  }
}

/**
 * 🎨 NormalizeWrapper: คอมโพเนนต์สำหรับควบคุม Layout พื้นฐานของหน้า Landing
 * - ล้างค่า Style ที่อาจตกค้างจาก Layout หลัก
 * - กำหนดพื้นหลังและ Antialiased ให้เทมเพลตดูคมชัด
 */
export function NormalizeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="landing-template-wrapper relative min-h-screen w-full bg-white font-sans antialiased">
      {/* Container นี้จะช่วยให้เทมเพลตทำงานเป็นเอกเทศ 
         ไม่โดน CSS จากหน้า Home เข้ามารบกวน 
      */}
      {children}
    </div>
  )
}
