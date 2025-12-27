/** @format */

"use client"

import React from "react"
// 🏗️ นำเข้าสไตล์ที่แยกอัตลักษณ์ (Isolation Style)
import styles from "./WoodStyle.module.css"

import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import PerformanceSection from "./components/PerformanceSection"
import CartSection from "./components/CartSection"
import FAQSection from "./components/FAQSection"
import SuccessSection from "./components/SuccessSection"
import Footer from "./components/Footer"

import { TechStackBadge } from "@/components/marketing/TechStackBadge"
import { ReviewTrustLayer } from "@/components/marketing/ReviewTrustLayer"

// นำเข้าข้อมูลรีวิว (Mock data หรือจาก Data source)
import { reviews } from "@/data/reviews"

interface WoodBusinessTemplateProps {
  data: any
}

export default function WoodBusinessTemplate({
  data,
}: WoodBusinessTemplateProps) {
  const {
    content = {},
    themeColor = "#7B3F00", // สีหลักของแบรนด์โรงไม้
    contact = {},
    pricing = {},
    products = [],
  } = data || {}

  return (
    // 🛡️ ครอบด้วย Wrapper เพื่อ Scope ดีไซน์ไม่ให้หลุดไปหาเว็บหลัก
    <div
      className={styles.woodThemeWrapper}
      style={{ "--primary-wood": themeColor } as React.CSSProperties}
    >
      <Header themeColor={themeColor} contact={contact} />

      <main className="relative bg-white">
        {/* 1. HERO SECTION */}
        <HeroSection
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          themeColor={themeColor}
          price={products[0]?.price || pricing.starter?.price}
          image={content.heroImage || products[0]?.image}
          contact={contact}
        />

        {/* 🚀 Tech Badge Area */}
        <div className="relative z-30 -mt-12 mb-12 flex justify-center">
          <TechStackBadge />
        </div>

        {/* 2. FEATURES & PROOF */}
        <FeaturesSection features={content.features} themeColor={themeColor} />
        <PerformanceSection themeColor={themeColor} />

        {/* 🌟 REVIEW LAYER (Shared Component)
            ส่ง variant="minimal" เพื่อให้สไตล์นุ่มนวลตามแบบ SME ไทย
            สไตล์เส้นขอบและเงาจะถูกคุมผ่าน CSS Module อีกชั้นหนึ่ง */}
        <ReviewTrustLayer
          reviews={reviews}
          themeColor="#1e293b"
          accentColor={themeColor}
          variant="minimal"
        />

        {/* 3. TRANSACTION & SUPPORT */}
        <CartSection
          pricing={pricing}
          themeColor={themeColor}
          products={products}
        />

        <FAQSection themeColor={themeColor} />

        {/* 4. CLOSING SECTION */}
        <SuccessSection themeColor={themeColor} contact={contact} />
      </main>

      <Footer themeColor={themeColor} contact={contact} />
    </div>
  )
}
