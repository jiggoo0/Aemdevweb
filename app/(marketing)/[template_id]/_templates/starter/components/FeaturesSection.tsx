/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: ELITE BUSINESS & THAI-USER EXPERIENCE
// Identity: Production Professional (Seamless Grid Cell)
// ----------------------------------------------------

"use client"

import React from "react"
import { Zap, Smartphone, MessageCircle } from "lucide-react"

interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

interface FeaturesSectionProps {
  features: Feature[]
  themeColor: string
}

export default function FeaturesSection({
  features,
  themeColor,
}: FeaturesSectionProps) {
  // ฟังก์ชันเลือก Icon ให้ตรงกับข้อมูล
  const renderIcon = (iconName: string) => {
    const props = { size: 32, strokeWidth: 1.5, style: { color: themeColor } }
    switch (iconName) {
      case "Zap":
        return <Zap {...props} />
      case "Smartphone":
        return <Smartphone {...props} />
      case "MessageCircle":
        return <MessageCircle {...props} />
      default:
        return <Zap {...props} />
    }
  }

  return (
    <section id="features" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        {/* HEADER_CELL: หัวข้อในกรอบตาราง */}
        <div className="border-b border-slate-200 p-10 md:p-16">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
            Service_Capabilities
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tighter">
            คุณสมบัติที่ธุรกิจคุณจะได้รับ
          </h2>
        </div>

        {/* FEATURES_GRID: ตาราง 3 ช่องแบบไร้รอยต่อ */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`border-b border-slate-200 p-10 transition-colors hover:bg-slate-50 md:border-b-0 md:p-14 ${
                idx !== features.length - 1 ? "md:border-r" : ""
              }`}
            >
              <div className="mb-8">{renderIcon(feature.icon)}</div>

              <h3 className="mb-4 text-xl font-black uppercase tracking-tight">
                {feature.title}
              </h3>

              <p className="font-medium leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
