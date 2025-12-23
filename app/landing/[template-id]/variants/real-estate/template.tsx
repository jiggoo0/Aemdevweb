/** @format */
"use client"

import React from "react"
import Image from "next/image"
import { RealEstateTemplateProps } from "@/app/landing/[template-id]/types"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Section from "@/app/landing/[template-id]/shared/Section"

// 🧱 Local Components
import LocationInsight from "./components/LocationInsight"
import RoomTypeCards from "./components/RoomTypeCards"

export default function RealEstateTemplate({
  data,
}: {
  data: RealEstateTemplateProps
}) {
  if (!data) return null

  // Helper สำหรับจัดการข้อความหลายภาษา
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
        primaryColor={data.primaryColor || "#1e293b"}
        lineId={data.lineId}
        phone={data.phone}
      />

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="relative h-screen overflow-hidden bg-slate-900">
          {data.hero?.image && (
            /* ✅ แก้ไข: ใช้ Next.js Image พร้อม priority สำหรับ Hero Section */
            <Image
              src={data.hero.image}
              alt="Luxury Property Hero"
              fill
              priority // ช่วยให้รูปภาพหลักโหลดทันที ลดค่า LCP (Largest Contentful Paint)
              className="object-cover"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 pb-32">
            <div className="mx-auto w-full max-w-7xl px-6 text-white">
              <h1 className="mb-6 text-6xl font-extralight uppercase tracking-[0.2em] md:text-9xl">
                {t(data.hero?.title)}
              </h1>
              <p className="text-xl font-medium uppercase tracking-[0.4em] text-[#C5A059] md:text-3xl">
                {t(data.hero?.subtitle)}
              </p>
            </div>
          </div>
        </section>

        {/* --- Residences / Room Types Section --- */}
        <Section
          id="rooms"
          title="The Residences"
          config={{ primaryColor: data.primaryColor }}
        >
          <RoomTypeCards
            rooms={(data.roomTypes || []).map((room: any) => ({
              ...room,
              name: t(room.name),
            }))}
          />
        </Section>

        {/* --- Location Insight Section --- */}
        <Section
          id="location"
          title="The Location"
          className="bg-slate-50"
          config={{ primaryColor: data.primaryColor }}
        >
          <LocationInsight
            insight={{
              ...data.locationInsight,
              title: t(data.locationInsight?.title),
              // ใช้ content แทน description เพื่อให้ตรงกับ Interface ของ LocationInsight
              content: t(
                data.locationInsight?.description ||
                  data.locationInsight?.content
              ),
              nearbyPlaces: (data.locationInsight?.nearbyPlaces || []).map(
                (place: any) => ({
                  ...place,
                  name: t(place.name),
                })
              ),
            }}
          />
        </Section>
      </main>

      <Footer data={data} />
    </div>
  )
}
