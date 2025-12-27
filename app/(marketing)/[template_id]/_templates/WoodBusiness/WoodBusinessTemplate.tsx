/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS TEMPLATE (SUKHOTHAI EDITION)
// Identity: โรงไม้แปรรูป & วัสดุก่อสร้าง (โครงสร้างระดับโปร)
// Function: จัดการเลย์เอาต์หลักและดึงข้อมูลจาก Config มาแสดงผล
// ----------------------------------------------------

"use client"

import React from "react"
import styles from "./WoodStyle.module.css"

// นำเข้า Components จากโฟลเดอร์ภายใน (Refactored Names)
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import PerformanceSection from "./components/PerformanceSection"
import CartSection from "./components/CartSection"
import FAQSection from "./components/FAQSection"
import SuccessSection from "./components/SuccessSection"
import Footer from "./components/Footer"

interface WoodBusinessTemplateProps {
  data: any // รับข้อมูลจาก config.ts
}

export default function WoodBusinessTemplate({
  data,
}: WoodBusinessTemplateProps) {
  // Safe Destructuring: ป้องกัน Error หากข้อมูลบางส่วนหายไป
  // โดยดึงข้อมูลจาก config.ts ที่เราตั้งค่าไว้สำหรับ "สุโขทัยค้าไม้"
  const {
    content = {},
    themeColor = "#7B3F00", // Default: สีน้ำตาลไม้
    contact = {},
    pricing = { starter: { price: "สอบถามราคา" } },
    products = [],
  } = data

  return (
    <div className={styles.container}>
      {/* 1. ส่วนหัวเว็บไซต์: เน้นชื่อร้านและเบอร์โทรติดต่อคนสุโขทัย */}
      <Header themeColor={themeColor} contact={contact} />

      <main className="relative">
        {/* 2. ส่วนต้อนรับ (HERO): แสดงพาดหัว "ไม้ดีเมืองเก่า" และรูปโรงไม้ */}
        <HeroSection
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          themeColor={themeColor}
          price={pricing.starter?.price}
          // สามารถเพิ่มรูปภาพจาก products[0].image มาแสดงเป็นพื้นหลังได้
          image={products[0]?.image}
        />

        {/* 3. จุดเด่นของโรงไม้ (FEATURES): ส่งไวทั่วสุโขทัย / คัดไม้เกรด A */}
        <FeaturesSection features={content.features} themeColor={themeColor} />

        {/* 4. สถิติความเชื่อมั่น (PERFORMANCE): ประสบการณ์ 25 ปี / 9 อำเภอ */}
        <PerformanceSection />

        {/* 5. ตารางราคาและบริการ (PRICING): แยกกลุ่มช่างและกลุ่มลูกค้าปลีก */}
        <CartSection pricing={pricing} themeColor={themeColor} />

        {/* 6. คำถามพบบ่อย (FAQ): ตอบเรื่องการส่งสินค้าในพื้นที่ จ.สุโขทัย */}
        <FAQSection />

        {/* 7. ส่วนปิดการขาย (SUCCESS CTA): ปุ่มทัก LINE สีเขียวเด่นชัด */}
        <SuccessSection themeColor={themeColor} contact={contact} />
      </main>

      {/* 8. ส่วนท้าย (FOOTER): ที่อยู่ร้านในกงไกรลาศ และแผนที่ */}
      <Footer contact={contact} />
    </div>
  )
}
