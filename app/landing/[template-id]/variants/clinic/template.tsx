/** @format */
"use client"

import React from "react"
import {
  ClinicTemplateProps,
  MultiLangText,
} from "@/app/landing/[template-id]/types"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Section from "@/app/landing/[template-id]/shared/Section"
import Testimonials from "@/app/landing/[template-id]/shared/Testimonials"

// 🧱 Local Components
import BeforeAfter from "./components/BeforeAfter"
import DoctorProfile from "./components/DoctorProfile"

export default function ClinicTemplate({
  data,
}: {
  data: ClinicTemplateProps
}) {
  if (!data) return null

  // ✅ ฟังก์ชันแปลง MultiLangText เป็น string
  const t = (content: any): string => {
    if (!content) return ""
    if (typeof content === "string") return content
    const lang = data.defaultLanguage || "th"
    return content[lang] || content["th"] || ""
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar
        brandName={t(data.name)}
        primaryColor={data.primaryColor || "#0f172a"}
        lineId={data.lineId}
        phone={data.phone}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-b-8 border-slate-900 bg-white py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-6xl">
                {t(data.hero?.title)}
              </h1>
              <p className="mb-8 text-lg text-slate-600">
                {t(data.hero?.subtitle)}
              </p>
            </div>
          </div>
        </section>

        {/* ✅ จุดที่เกิด Error: ต้องจัดการข้อมูล label ให้เป็น string ก่อนส่งเข้า BeforeAfter */}
        <Section
          id="results"
          title="Success Stories"
          config={{ primaryColor: data.primaryColor }}
        >
          <BeforeAfter
            beforeAfter={(data.beforeAfter || []).map((item) => ({
              ...item,
              label: t(item.label), // แปลง Object {th, en} ให้เป็น String ที่นี่เลย
            }))}
          />
        </Section>

        <Section
          id="doctors"
          title="Medical Experts"
          className="bg-slate-50"
          config={{ primaryColor: data.primaryColor }}
        >
          <DoctorProfile
            doctors={(data.doctors || []).map((doc) => ({
              ...doc,
              name: t(doc.name), // แปลงเป็น string
              specialty: t(doc.specialty), // แปลงเป็น string
            }))}
          />
        </Section>

        <Testimonials
          reviews={(data.socialProof || []).map((review) => ({
            ...review,
            content: t(review.content), // ป้องกัน Error ใน Testimonials ด้วย
          }))}
          primaryColor={data.primaryColor}
        />
      </main>

      <Footer data={data} />
    </div>
  )
}
