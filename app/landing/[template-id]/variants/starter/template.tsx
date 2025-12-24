/** @format */
"use client"

import React from "react"
import {
  StarterTemplateProps,
  MultiLangText,
} from "@/app/landing/[template-id]/types"

// ✅ UI Framework & Structure
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// 🛡️ Shared Components (AEM DEV & Layout Layer)
import Section from "@/app/landing/[template-id]/shared/Section"
import ServiceInclusionSection from "@/app/landing/[template-id]/shared/ServiceInclusionSection"

// 🧱 Local Components (Business Content Layer)
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

  // ✅ Helper จัดการภาษา (Centralized Logic)
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
        {/* 🚀 1. Hero Starter Section */}
        <HeroStarter
          {...(data.hero || {})}
          title={data.hero?.title || ""}
          subtitle={data.hero?.subtitle || ""}
          primaryColor={data.primaryColor || "#000000"}
          t={t}
        />

        {/* 🚀 2. Feature Highlights (Content Layer) */}
        <Section
          id="features"
          title={
            data.defaultLanguage === "en" ? "Our Services" : "บริการของเรา"
          }
          config={{ primaryColor: data.primaryColor }}
        >
          <FeatureHighlights
            features={data.features || []}
            primaryColor={data.primaryColor || "#000000"}
            t={t}
          />
        </Section>

        {/* 🚀 3. Social Proof & Testimonials (Content Layer) */}
        <Section
          id="reviews"
          title={
            data.defaultLanguage === "en" ? "Client Success" : "เสียงจากลูกค้า"
          }
          className="bg-slate-50"
          config={{ primaryColor: data.primaryColor }}
        >
          <SocialProof testimonials={data.socialProof || []} t={t} />
        </Section>

        {/* 🟢 4. AEM DEV ENGINEERING INCLUSION (Infrastructure Layer) 🟢 */}
        {/* แทรกส่วนมาตรฐานทางเทคนิคของ AEM เพื่อปิดการขายความมั่นคงของระบบ */}
        <ServiceInclusionSection
          data={data.aemService}
          lang={data.defaultLanguage === "en" ? "en" : "th"}
        />

        {/* 🚀 5. Conversion Form (Action Layer) */}
        <Section
          id="contact"
          title={
            data.defaultLanguage === "en" ? "Get Started" : "เริ่มต้นใช้งาน"
          }
          config={{ primaryColor: data.primaryColor }}
        >
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
