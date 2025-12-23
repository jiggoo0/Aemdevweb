/** @format */
"use client"

import React from "react"
import {
  StarterTemplateProps,
  MultiLangText,
} from "@/app/landing/[template-id]/types"

// ✅ Direct Import
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// 🛡️ Shared Components
import Section from "@/app/landing/[template-id]/shared/Section"

// 🧱 Local Components
import HeroStarter from "./components/HeroStarter"
import FeatureHighlights from "./components/FeatureHighlights"
import ConversionForm from "./components/ConversionForm"
import SocialProof from "./components/SocialProof"

export default function StarterTemplate({
  data,
}: {
  data: StarterTemplateProps
}) {
  if (!data) return null

  // Helper สำหรับจัดการข้อความหลายภาษา
  const t = (content: string | MultiLangText | undefined): string => {
    if (!content) return ""
    if (typeof content === "string") return content
    const lang = data.defaultLanguage || "th"
    return content[lang as keyof MultiLangText] || content["th"] || ""
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar
        brandName={t(data.name)}
        primaryColor={data.primaryColor || "#000000"}
        lineId={data.lineId}
        phone={data.phone}
      />

      <main className="flex-grow">
        {/* ✅ FIX TS2322: ส่ง title และ subtitle แบบ Explicit 
          เพื่อป้องกันค่า undefined และจัดการ Fallback ให้ตรงตาม HeroStarterProps
        */}
        <HeroStarter
          {...(data.hero || {})}
          title={data.hero?.title || ""}
          subtitle={data.hero?.subtitle || ""}
          primaryColor={data.primaryColor || "#000000"}
          t={t}
        />

        <Section
          id="features"
          title="Our Services"
          config={{ primaryColor: data.primaryColor }}
        >
          <FeatureHighlights
            features={data.features || []}
            primaryColor={data.primaryColor || "#000000"}
            t={t}
          />
        </Section>

        <Section
          id="reviews"
          title="Client Success"
          className="bg-slate-50"
          config={{ primaryColor: data.primaryColor }}
        >
          {/* ✅ data.socialProof มีอยู่แล้วใน BaseTemplateProps ที่เราเพิ่มไปก่อนหน้า */}
          <SocialProof testimonials={data.socialProof || []} t={t} />
        </Section>

        <Section
          id="contact"
          title="Get Started"
          config={{ primaryColor: data.primaryColor }}
        >
          {/* ✅ FIX: กระจายฟิลด์จาก data.form เข้าไปโดยตรง 
            เพื่อให้ตรงกับ IntrinsicAttributes & ConversionFormProps
          */}
          <ConversionForm
            {...(data.form || {})}
            primaryColor={data.primaryColor || "#000000"}
            t={t}
          />
        </Section>
      </main>

      <Footer data={data} />
    </div>
  )
}
