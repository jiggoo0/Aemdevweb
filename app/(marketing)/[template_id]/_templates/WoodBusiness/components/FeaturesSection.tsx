/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS FEATURES SECTION (SUKHOTHAI)
// Identity: Service Capabilities (จุดแข็งของโรงไม้ - ส่งไว คัดเกรด ราคามิตรภาพ)
// ----------------------------------------------------

"use client"

import React from "react"
import { Truck, ShieldCheck, HardHat } from "lucide-react"

interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

interface FeaturesSectionProps {
  features?: Feature[]
  themeColor?: string
}

export default function FeaturesSection({
  features = [],
  themeColor = "#7B3F00",
}: FeaturesSectionProps) {
  // 🛠️ ICON_PICKER: แปลงค่า String จาก Config ให้เป็น Components ไอคอนสายงานช่าง
  const renderIcon = (iconName: string) => {
    const props = {
      size: 42,
      strokeWidth: 1.5, // ปรับเส้นให้บางลงดูแพงแบบ Modern Minimal
      style: { color: themeColor },
      className: "transition-all duration-500",
    }

    // Logic การเลือกไอคอนให้เข้ากับ Keyword ใน starterConfig
    switch (iconName) {
      case "Zap":
        return <Truck {...props} /> // ส่งด่วนทั่วสุโขทัย
      case "Smartphone":
        return <ShieldCheck {...props} /> // คัดคุณภาพโดยช่างไม้
      case "MessageCircle":
        return <HardHat {...props} /> // ปรึกษาและประเมินหน้างาน
      default:
        return <HardHat {...props} />
    }
  }

  return (
    <section id="features" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        {/* 🏗️ HEADER_CELL: ส่วนหัวเรื่องที่เน้นความมั่นใจ */}
        <div className="border-b border-slate-200 bg-slate-50/30 p-10 md:p-20">
          <div className="flex flex-col gap-4">
            <span
              className="inline-block text-[11px] font-black uppercase tracking-[0.5em]"
              style={{ color: themeColor }}
            >
              Professional_Timber_Solutions
            </span>
            <h2 className="text-4xl font-black uppercase leading-[1.1] tracking-tighter text-slate-900 md:text-7xl">
              มาตรฐานที่ทำให้ <br className="hidden md:block" />
              ช่างสุโขทัย <span style={{ color: themeColor }}>ไว้วางใจ</span>
            </h2>
          </div>
        </div>

        {/* 📦 FEATURES_GRID: ระบบ Grid สไตล์ Brutalist Design */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.length > 0 ? (
            features.map((feature, idx) => {
              // แยกข้อความ Prefix (เช่น LOCAL_PRIDE) ออกจากเนื้อหาหลัก
              const [prefix, mainTitle] = feature.title.includes(": ")
                ? feature.title.split(": ")
                : ["SERVICE", feature.title]

              return (
                <div
                  key={feature.id}
                  className={`group relative flex flex-col justify-between overflow-hidden border-b border-slate-200 p-10 transition-all duration-500 hover:bg-slate-50 md:border-b-0 md:p-16 ${
                    idx !== features.length - 1 ? "md:border-r" : ""
                  }`}
                >
                  <div className="relative z-10">
                    {/* ICON_CONTAINER: กล่องไอคอนที่มีเงาแบบ Hard-Shadow */}
                    <div className="mb-12 inline-block border border-slate-200 bg-white p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[10px_10px_0px_0px_#0f172a]">
                      {renderIcon(feature.icon)}
                    </div>

                    {/* TEXT_CONTENT */}
                    <div className="space-y-4">
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                        {prefix}
                      </span>

                      <h3 className="text-2xl font-black uppercase leading-none tracking-tight text-slate-900">
                        {mainTitle}
                      </h3>

                      <p className="text-base font-medium leading-relaxed text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* DECORATIVE_STAMP: ตัวเลขลำดับจางๆ สไตล์โรงงาน */}
                  <span className="absolute -bottom-4 -right-2 select-none font-mono text-8xl font-black text-slate-100/50 transition-all duration-500 group-hover:scale-110 group-hover:text-slate-200">
                    0{idx + 1}
                  </span>

                  {/* BOTTOM_ACCENT_LINE: เส้นสีแบรนด์ที่จะวิ่งจากซ้ายไปขวาเมื่อ Hover */}
                  <div
                    className="absolute bottom-0 left-0 h-2 w-0 transition-all duration-700 ease-in-out group-hover:w-full"
                    style={{ backgroundColor: themeColor }}
                  />
                </div>
              )
            })
          ) : (
            <div className="col-span-3 p-20 text-center font-mono text-xs uppercase tracking-widest text-slate-400">
              [ Waiting_For_System_Configuration ]
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
