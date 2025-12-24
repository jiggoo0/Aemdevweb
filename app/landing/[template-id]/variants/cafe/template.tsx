/** @format */
"use client"

import React from "react"
import Image from "next/image"
import { CafeTemplateProps } from "@/app/landing/[template-id]/types"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Section from "@/app/landing/[template-id]/shared/Section"
import GoogleMap from "@/app/landing/[template-id]/shared/GoogleMap"

// ✅ Shared Components (AEM DEV Layer)
import ServiceInclusionSection from "@/app/landing/[template-id]/shared/ServiceInclusionSection"

// 🧱 Local Components (Business Content Layer)
import CafeGallery from "./components/CafeGallery"
import MenuHighlight from "./components/MenuHighlight"
import OpeningHours from "./components/OpeningHours"

export default function CafeTemplate({ data }: { data: CafeTemplateProps }) {
  if (!data) return null

  // Helper สำหรับจัดการข้อความหลายภาษา
  const t = (content: any): string => {
    if (!content) return ""
    if (typeof content === "string") return content
    const lang = data.defaultLanguage || "th"
    return content[lang] || content["th"] || ""
  }

  /**
   * 🛠️ แก้ไข: จัดการข้อมูล Menu ที่อาจมาเป็น Array หรือ Object with Categories
   * ช่วยแก้ปัญหา TS2339: Property 'map' does not exist on type...
   */
  const menuItems = Array.isArray(data.menu)
    ? data.menu
    : data.menu?.categories || []

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar
        brandName={t(data.name)}
        primaryColor={data.primaryColor || "#7c2d12"}
        lineId={data.lineId}
        phone={data.phone}
      />

      <main className="flex-grow">
        {/* ☕ 1. Hero Section (Cafe Atmosphere) */}
        <section className="relative flex h-[80vh] items-center justify-center overflow-hidden bg-slate-900 text-white">
          {data.hero?.image && (
            <Image
              src={data.hero.image}
              alt="Cafe Atmosphere"
              fill
              priority
              className="absolute inset-0 object-cover opacity-60"
              sizes="100vw"
            />
          )}
          <div className="relative z-10 px-6 text-center">
            <h1 className="mb-4 text-5xl font-black uppercase tracking-tighter md:text-7xl">
              {t(data.hero?.title)}
            </h1>
            <p className="text-xl font-medium italic opacity-90 md:text-2xl">
              {t(data.hero?.subtitle)}
            </p>
          </div>
        </section>

        {/* ☕ 2. Menu Section (Content Layer) */}
        <Section
          id="menu"
          title={data.defaultLanguage === "en" ? "Artisan Menu" : "เมนูแนะนำ"}
          config={{ primaryColor: data.primaryColor }}
        >
          <MenuHighlight
            items={menuItems.map((item: any) => ({
              ...item,
              name: t(item.name),
              description: t(item.description),
            }))}
            primaryColor={data.primaryColor}
          />
        </Section>

        {/* ☕ 3. Gallery (Content Layer) */}
        {data.gallery && data.gallery.length > 0 && (
          <Section id="gallery" title="Atmosphere" className="bg-slate-50">
            {/* ✅ แก้ปัญหาเรื่องการส่ง Prop images ให้ตรงตาม Interface ของ CafeGallery */}
            <CafeGallery images={data.gallery} />
          </Section>
        )}

        {/* ☕ 4. Opening Hours & Map (Business Info) */}
        <div className="grid gap-0 border-y-2 border-slate-900 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-white p-12">
            <OpeningHours
              hours={(data.openingHours || []).map((h: any) => ({
                ...h,
                day: t(h.day),
              }))}
              primaryColor={data.primaryColor}
            />
          </div>
          <div className="h-[400px]">
            <GoogleMap url={data.googleMapUrl || ""} />
          </div>
        </div>

        {/* 🟢 5. AEM DEV ENGINEERING INCLUSION (Engineering Layer) 🟢 */}
        <ServiceInclusionSection
          data={data.aemService}
          lang={data.defaultLanguage === "en" ? "en" : "th"}
        />
      </main>

      <Footer data={data} />
    </div>
  )
}
