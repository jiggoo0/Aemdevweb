/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS FEATURES SECTION (SUKHOTHAI)
// Identity: Service Capabilities (จุดแข็งของโรงไม้)
// ----------------------------------------------------

"use client"

import React from "react"
import { Truck, ShieldCheck, HardHat } from "lucide-react" // ✅ ลบ Zap, Smartphone, MessageCircle ออกเพื่อแก้ Warning

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
  // 🛠️ ICON_PICKER: เลือกไอคอนที่เหมาะสมกับธุรกิจไม้แปรรูป
  const renderIcon = (iconName: string) => {
    const props = { size: 36, strokeWidth: 1.5, style: { color: themeColor } }
    switch (iconName) {
      case "Zap":
        return <Truck {...props} /> // เปลี่ยน Zap เป็นรถบรรทุก (ส่งไว)
      case "Smartphone":
        return <ShieldCheck {...props} /> // เปลี่ยน Smartphone เป็นโล่ (ไม้คัดเกรด)
      case "MessageCircle":
        return <HardHat {...props} /> // เปลี่ยน Message เป็นหมวกช่าง (ปรึกษาฟรี)
      default:
        // ✅ เปลี่ยนจาก Zap เป็น HardHat เพื่อให้สอดคล้องกับไอคอนที่มีอยู่จริง
        return <HardHat {...props} />
    }
  }

  return (
    <section id="features" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        {/* 🏗️ HEADER_CELL: หัวข้อหลักของโรงไม้ */}
        <div className="border-b border-slate-200 p-10 md:p-16">
          <span
            className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em]"
            style={{ color: themeColor }}
          >
            Sukhothai_Timber_Service
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-5xl">
            ทำไมต้องเลือก <br className="md:hidden" />
            <span style={{ color: themeColor }}>สุโขทัยค้าไม้?</span>
          </h2>
        </div>

        {/* 📦 FEATURES_GRID: ตารางจุดเด่น 3 ช่อง */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features &&
            features.map((feature, idx) => (
              <div
                key={feature.id}
                className={`group border-b border-slate-200 p-10 transition-all duration-300 hover:bg-slate-50 md:border-b-0 md:p-14 ${
                  idx !== features.length - 1 ? "md:border-r" : ""
                }`}
              >
                {/* ICON_CONTAINER */}
                <div className="mb-10 transition-transform duration-500 group-hover:scale-110">
                  {renderIcon(feature.icon)}
                </div>

                {/* TEXT_CONTENT */}
                <div className="space-y-4">
                  <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
                    {feature.title.split(": ")[0] || "QUALITY_ASSURED"}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                    {feature.title.split(": ")[1] || feature.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </div>

                {/* DECORATIVE_LINE */}
                <div
                  className="mt-8 h-1 w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: themeColor }}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
