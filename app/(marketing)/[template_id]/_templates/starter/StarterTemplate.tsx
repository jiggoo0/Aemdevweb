/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: PRODUCTION PROFESSIONAL MASTER LAYOUT (REFACTORED)
// Path: starter/StarterTemplate.tsx
// ----------------------------------------------------

"use client"

import React from "react"
import styles from "./StarterStyle.module.css"

// นำเข้า Components
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import PerformanceSection from "./components/PerformanceSection"
import CartSection from "./components/CartSection"
import FAQSection from "./components/FAQSection"
import SuccessSection from "./components/SuccessSection"
import Footer from "./components/Footer"

// 🏗️ นำเข้า Marketing Components
import { TechStackBadge } from "@/components/marketing/TechStackBadge"
import { ReviewTrustLayer } from "@/components/marketing/ReviewTrustLayer"

// ✅ นำเข้า Mock Data เพื่อใช้เป็นค่า Default สำหรับ Starter Template
import { reviews } from "@/data/reviews"

interface StarterTemplateProps {
  data: any
}

export default function StarterTemplate({ data }: StarterTemplateProps) {
  // 🛡️ Safe Destructuring พร้อมกำหนดค่าเริ่มต้นที่แข็งแกร่ง
  const {
    content = {},
    themeColor = "#1e40af", // สีน้ำเงินมาตรฐานสำหรับ Starter (ความน่าเชื่อถือแบบ Tech)
    contact = {},
    pricing = { starter: { price: "0" } },
  } = data || {}

  return (
    <div className={styles.container}>
      {/* 1. HEADER: สไตล์มาตรฐานแบบ Nav-Centered */}
      <Header themeColor={themeColor} contact={contact} />

      <main className="relative">
        {/* 2. HERO SECTION: เน้นความชัดเจนของ Value Proposition */}
        <HeroSection
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          themeColor={themeColor}
          price={pricing.starter?.price}
        />

        {/* 🚀 LAYER 1: Tech Stack Authority */}
        <div className="container relative z-30 mx-auto -mt-10 px-6">
          <TechStackBadge />
        </div>

        {/* 3. FEATURES */}
        <FeaturesSection features={content.features} themeColor={themeColor} />

        {/* 4. PERFORMANCE: แสดงสถิติมาตรฐานแบบ Grid 3 คอลัมน์ */}
        <PerformanceSection />

        {/* 🚀 LAYER 2: Social Proof
            ✅ แก้ไข TS2741: ส่ง reviews และกำหนด variant เป็น "industrial" 
            เพื่อให้ Starter Template ดูมีความเป็น Tech/Startup (เส้นหนา, สีสด) 
            ซึ่งจะตรงข้ามกับ Wood Business ที่ใช้ "minimal" */}
        <ReviewTrustLayer
          reviews={reviews}
          variant="industrial"
          accentColor={themeColor}
        />

        {/* 5. PRICING */}
        <CartSection pricing={pricing} themeColor={themeColor} />

        {/* 6. FAQ */}
        <FAQSection />

        {/* 7. SUCCESS CTA */}
        <SuccessSection themeColor={themeColor} contact={contact} />
      </main>

      {/* 8. FOOTER */}
      <Footer contact={contact} />
    </div>
  )
}
