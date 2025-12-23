/** @format */
import React from "react"
import * as Icons from "lucide-react"
import { MultiLangText } from "../../../types"

/**
 * 🟢 แก้ไข Interface: เพิ่ม primaryColor และระบุโครงสร้าง Feature ให้ชัดเจน
 * เพื่อแก้ปัญหา Property 'primaryColor' does not exist on type 'IntrinsicAttributes & FeatureHighlightsProps'
 */
export interface FeatureItem {
  id?: string | number
  title: string | MultiLangText
  description: string | MultiLangText
  icon?: string
}

export interface FeatureHighlightsProps {
  features: FeatureItem[]
  primaryColor?: string
  t: (content: string | MultiLangText | undefined) => string
}

export default function FeatureHighlights({
  features = [],
  primaryColor = "#000000",
  t,
}: FeatureHighlightsProps) {
  if (!features.length) return null

  /**
   * Helper: ดึง Icon จาก Lucide ตามชื่อที่ระบุใน Data
   */
  const getIcon = (iconName: string | undefined) => {
    const LucideIcon = (Icons as any)[iconName || "Zap"] || Icons.Zap
    return <LucideIcon size={24} />
  }

  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div
            className="mb-4 h-1.5 w-12"
            style={{ backgroundColor: primaryColor }}
          />
          <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
            Why Choose Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.id || idx}
              className="group relative flex flex-col items-start"
            >
              {/* Icon Box with Brutalist Shadow */}
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-slate-900 bg-white transition-all group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]"
                style={{ color: primaryColor }}
              >
                {getIcon(feature.icon)}
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
                  {t(feature.title)}
                </h3>
                <div
                  className="h-1 w-8 opacity-20"
                  style={{ backgroundColor: primaryColor }}
                />
                <p className="text-sm font-bold leading-relaxed text-slate-500">
                  {t(feature.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  )
}
