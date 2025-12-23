/** @format */
"use client"

import React from "react"
import {
  ConstructionTemplateProps,
  MultiLangText,
} from "@/app/landing/[template-id]/types"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// ✅ Direct Import จาก Shared
import Section from "@/app/landing/[template-id]/shared/Section"

// 🧱 Local Components
import ProjectGallery from "./components/ProjectGallery"
import StepWork from "./components/StepWork"

export default function ConstructionTemplate({
  data,
}: {
  data: ConstructionTemplateProps
}) {
  if (!data) return null

  // ✅ ฟังก์ชันจัดการภาษา (ป้องกัน Runtime Error จาก Object {th, en})
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
        {/* ─── Hero Section ─── */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-slate-900 py-32 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
            <div className="max-w-4xl">
              <div className="mb-6 inline-block bg-[#ca8a04] px-4 py-1 text-xs font-black uppercase tracking-widest text-black">
                Industrial Standard
              </div>
              <h1 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
                {t(data.hero?.title)}
              </h1>
              <p className="max-w-2xl border-l-4 border-[#ca8a04] pl-6 text-xl opacity-80 md:text-2xl">
                {t(data.hero?.subtitle)}
              </p>
            </div>
          </div>
        </section>

        {/* ─── Projects Section ─── */}
        <Section
          id="projects"
          title="Featured Projects"
          config={{ primaryColor: data.primaryColor || "#ca8a04" }}
        >
          <ProjectGallery
            projects={(data.projects || []).map((p) => ({
              ...p,
              title: t(p.title), // แปลง Object เป็น String
              category: t(p.category), // แปลง Object เป็น String
            }))}
          />
        </Section>

        {/* ─── Execution Process Section ─── */}
        <Section
          id="steps"
          title="Execution Process"
          className="bg-white"
          config={{ primaryColor: "#000" }}
        >
          <StepWork
            steps={(data.steps || []).map((s) => ({
              ...s,
              title: t(s.title), // แปลง Object เป็น String
              description: t(s.description), // แปลง Object เป็น String
            }))}
          />
        </Section>
      </main>

      <Footer data={data} />
    </div>
  )
}
