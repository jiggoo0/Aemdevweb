/** @format */
"use client"

import React from "react"
import Image from "next/image" // 🛡️ นำเข้า Image เพื่อแก้ Warning เรื่อง LCP/Performance
import styles from "./RealEstateStyle.module.css"
import { cn } from "@/lib/utils"

interface Props {
  data: any
}

export default function RealEstateTemplate({ data }: Props) {
  // 🛡️ Defensive Programming: ป้องกันกรณี data หรือ content ว่าง
  const { content } = data || {}

  if (!content) return null

  return (
    <div className={styles.wrapper}>
      {/* 🏙️ Hero Section: High-End Agency Vibe */}
      <section className={styles.hero}>
        <div className="z-10 max-w-5xl">
          <div className="mx-auto mb-8 h-1 w-20 bg-[#c2a35d]"></div>
          <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>
          <div className="mt-12 flex flex-col justify-center gap-6 md:flex-row">
            <button className="bg-[#c2a35d] px-10 py-4 font-black uppercase italic text-white shadow-[4px_4px_0px_0px_#fff] transition-all hover:shadow-none">
              Search_Properties
            </button>
            <button className="border-2 border-[#c2a35d] bg-white/5 px-10 py-4 font-black uppercase italic text-[#c2a35d] backdrop-blur-sm">
              List_Your_Asset
            </button>
          </div>
        </div>
      </section>

      {/* 🧭 Category Navigation: ย้าย 'group' ออกจาก CSS มาใส่ตรงนี้ */}
      <section className={styles.categoryGrid}>
        {content.categories?.map((cat: any) => (
          <div key={cat.id} className={cn(styles.catItem, "group")}>
            <span className={styles.catLabel}>{cat.label}</span>
            <span className={styles.catCount}>{cat.count} AVAILABLE</span>
          </div>
        ))}
      </section>

      {/* 💎 Featured Highlight: Showcase Section */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col items-start gap-16 md:flex-row">
          <div className="sticky top-32 md:w-1/3">
            <h2 className={styles.sectionTitle}>CURATED_UNITS</h2>
            <p className="mb-8 font-bold italic text-slate-500">
              {
                "เราคัดสรรยูนิตพิเศษที่คุ้มค่าที่สุด ทั้งด้านราคาและทำเลเพื่อคุณโดยเฉพาะ"
              }
            </p>
            <div className="space-y-4">
              {content.highlights?.map((h: any, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border-2 border-slate-100 bg-white p-4 font-bold italic"
                >
                  <div className="h-2 w-2 rotate-45 bg-[#c2a35d]"></div>
                  {h.detail}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:w-2/3 md:grid-cols-2">
            {/* 🛡️ Property Card 1: เปลี่ยนเป็น Next.js Image เพื่อลด Warning */}
            <div className={cn(styles.propertyCard, "group")}>
              <Image
                src="/images/projects/real-estate.jpg"
                alt="Condo"
                width={600}
                height={800}
                className="h-full w-full scale-110 object-cover grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
              />
              <div className={styles.propertyOverlay}>
                <h3 className="text-2xl font-black uppercase italic text-white">
                  THE_ULTIMATE_SUITE
                </h3>
                <p className="mb-4 text-sm font-bold text-[#c2a35d]">
                  Starting at 12.5M THB
                </p>
                <button className="w-full bg-white py-2 text-xs font-black uppercase italic text-slate-900">
                  View_Listing
                </button>
              </div>
            </div>

            {/* 🛡️ Property Card 2 */}
            <div className={cn(styles.propertyCard, "group")}>
              <Image
                src="/images/projects/real-estate.jpg"
                alt="Penthouse"
                width={600}
                height={800}
                className="h-full w-full scale-110 object-cover grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
              />
              <div className={styles.propertyOverlay}>
                <h3 className="text-2xl font-black uppercase italic text-white">
                  SKY_GARDEN_VILLA
                </h3>
                <p className="mb-4 text-sm font-bold text-[#c2a35d]">
                  Starting at 24.0M THB
                </p>
                <button className="w-full bg-white py-2 text-xs font-black uppercase italic text-slate-900">
                  View_Listing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💼 Business Partnership Callout */}
      <section className="border-y-8 border-[#c2a35d] bg-slate-900 px-8 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-5xl font-black uppercase italic leading-none text-white">
            WANT_TO_PARTNER?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg font-bold italic text-slate-400">
            {
              "ไม่ว่าคุณจะเป็นนักลงทุนอิสระ หรือบริษัทพัฒนาอสังหาริมทรัพย์ Aemdevweb พร้อมเชื่อมต่อคุณกับเครือข่ายลูกค้าคุณภาพของเรา"
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Consulting", "Marketing Solution", "Lead Generation"].map(
              (label) => (
                <div
                  key={label}
                  className="border border-white/20 bg-white/10 px-8 py-3 font-mono text-[10px] uppercase tracking-widest text-white"
                >
                  {label}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
