/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: PRODUCTION PROFESSIONAL MASTER LAYOUT (REFACTORED)
// Identity: Dynamic Data Injection, Stable Grid Architecture
// Function: รับ Data Props จาก Registry เพื่อแสดงผลตาม Template ID
// ----------------------------------------------------

"use client"

import React from "react"
import styles from "./StarterStyle.module.css"

// นำเข้า Components ที่ได้รับการ Refactor แล้ว (ย้ายจาก Folder ภายในมาใช้งาน)
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import PerformanceSection from "./components/PerformanceSection"
import CartSection from "./components/CartSection"
import FAQSection from "./components/FAQSection"
import SuccessSection from "./components/SuccessSection"
import Footer from "./components/Footer"

interface StarterTemplateProps {
  data: any // รับข้อมูล config ทั้งหมดมาจาก MarketingPage (page.tsx)
}

export default function StarterTemplate({ data }: StarterTemplateProps) {
  // Safe Destructuring: ดึงข้อมูลจาก Data Props
  // หากไม่มีข้อมูล ให้ใช้ค่าจากโครงสร้างที่เตรียมไว้ป้องกัน Error
  const {
    content = {},
    themeColor = "#1e40af",
    contact = {},
    pricing = { starter: { price: "0" } },
  } = data

  return (
    <div className={styles.container}>
      {/* 1. HEADER: ล็อกตำแหน่งบนสุด และรองรับ Theme Color จาก Config */}
      <Header themeColor={themeColor} contact={contact} />

      <main className="relative">
        {/* 2. HERO: ส่งผ่านข้อมูลพาดหัวและราคาเริ่มต้น */}
        <HeroSection
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          themeColor={themeColor}
          price={pricing.starter?.price}
        />

        {/* 3. FEATURES: ระบบตารางที่เปลี่ยน Content ตามธุรกิจ */}
        <FeaturesSection features={content.features} themeColor={themeColor} />

        {/* 4. PERFORMANCE: แสดงสถิติความเร็ว (Static หรือ Dynamic ก็ได้) */}
        <PerformanceSection />

        {/* 5. PRICING: ตารางราคาที่เชื่อมต่อกับระบบการตัดสินใจซื้อ */}
        <CartSection pricing={pricing} themeColor={themeColor} />

        {/* 6. FAQ: ช่วยลดภาระฝ่ายแอดมินด้วยคำถามที่พบบ่อย */}
        <FAQSection />

        {/* 7. SUCCESS CTA: ส่วนปิดการขายที่ดึง Contact ไปใช้งานจริง */}
        <SuccessSection themeColor={themeColor} contact={contact} />
      </main>

      {/* 8. FOOTER: แสดงข้อมูลบริษัทและช่องทางโซเชียล */}
      <Footer contact={contact} />
    </div>
  )
}
