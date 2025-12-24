/** @format */
"use client"

import React from "react"
import { ConstructionTemplateProps } from "@/app/landing/[template-id]/types"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// ✅ Shared Components (AEM DEV Layer)
import Section from "@/app/landing/[template-id]/shared/Section"
import ServiceInclusionSection from "@/app/landing/[template-id]/shared/ServiceInclusionSection"

// 🧱 Local Components (Business Content Layer)
import ProjectGallery from "./components/ProjectGallery"
import StepWork from "./components/StepWork"

export default function ConstructionTemplate({
  data,
}: {
  data: ConstructionTemplateProps
}) {
  if (!data) return null

  // ✅ Helper จัดการภาษา
  const t = (content: any): string => {
    if (!content) return ""
    if (typeof content === "string") return content
    const lang = data.defaultLanguage || "th"
    return content[lang] || content["th"] || ""
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F8F8]">
      <Navbar
        brandName={t(data.name)}
        primaryColor={data.primaryColor || "#ca8a04"}
        lineId={data.lineId}
        phone={data.phone}
      />

      <main className="flex-grow">
        {/* 🏗️ 1. Hero Section (Industrial Theme) */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-slate-900 py-32 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
            <div className="max-w-4xl">
              <div className="mb-6 inline-block bg-[#ca8a04] px-4 py-1 text-xs font-black uppercase tracking-widest text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                Industrial Standard
              </div>
              <h1 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
                {t(data.hero?.title)}
              </h1>
              <p className="max-w-2xl border-l-4 border-[#ca8a04] pl-6 text-xl font-bold opacity-80 md:text-2xl">
                {t(data.hero?.subtitle)}
              </p>
            </div>
          </div>
        </section>

        {/* 🏗️ 2. Projects Gallery (Content Layer) */}
        <Section
          id="projects"
          title={
            data.defaultLanguage === "en"
              ? "Featured Projects"
              : "ผลงานที่ผ่านมา"
          }
          config={{ primaryColor: data.primaryColor || "#ca8a04" }}
        >
          <ProjectGallery
            projects={(data.projects || []).map((p) => ({
              ...p,
              title: t(p.title),
              category: t(p.category),
            }))}
          />
        </Section>

        {/* 🏗️ 3. Execution Process (Content Layer) */}
        <Section
          id="steps"
          title={
            data.defaultLanguage === "en"
              ? "Execution Process"
              : "ขั้นตอนการดำเนินงาน"
          }
          className="bg-white"
          config={{ primaryColor: "#000" }}
        >
          <StepWork
            steps={(data.steps || []).map((s) => ({
              ...s,
              title: t(s.title),
              description: t(s.description),
            }))}
          />
        </Section>

        {/* 🟢 4. AEM DEV INCLUSION (Engineering Layer) 🟢 */}
        {/* ส่วนนี้จะแทรกมาตรฐานเว็บที่คุณทำให้ลูกค้าเข้าไป */}
        <ServiceInclusionSection
          data={data.aemService}
          lang={data.defaultLanguage === "en" ? "en" : "th"}
        />
      </main>

      <Footer data={data} />
    </div>
  )
}
