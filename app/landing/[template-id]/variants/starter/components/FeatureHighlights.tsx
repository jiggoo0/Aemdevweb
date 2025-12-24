/** @format */
"use client"

import React from "react"
import * as Icons from "lucide-react"
import { MultiLangText } from "@/app/landing/[template-id]/types"

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
  if (!features || features.length === 0) return null

  /**
   * 🛡️ Safe Icon Loader: ป้องกันแอปพังถ้าระบุชื่อ Icon ผิด
   */
  const renderIcon = (iconName: string | undefined) => {
    // ดึง Icon จาก library (ถ้าไม่มีให้ใช้ Zap เป็น fallback)
    const LucideIcon = (Icons as any)[iconName || ""] || Icons.Zap
    return <LucideIcon size={28} strokeWidth={2.5} />
  }

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={feature.id || idx}
            className="group relative flex flex-col items-start transition-all"
          >
            {/* 🏗️ Icon Box: Neobrutalism Design */}
            <div
              className="mb-8 flex h-16 w-16 items-center justify-center border-4 border-slate-900 bg-white transition-all group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:shadow-[8px_8px_0px_0px_#0f172a]"
              style={{ color: primaryColor, borderColor: "#0f172a" }}
            >
              {renderIcon(feature.icon)}
            </div>

            {/* 🏗️ Content Layer */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">
                {t(feature.title)}
              </h3>

              {/* Divider Line */}
              <div
                className="h-1.5 w-10 transition-all group-hover:w-20"
                style={{ backgroundColor: primaryColor }}
              />

              <p className="text-base font-bold leading-relaxed text-slate-500">
                {t(feature.description)}
              </p>
            </div>

            {/* Decoration: ลายเส้นอุตสาหกรรมเบาๆ ด้านหลัง (Optional) */}
            <div className="absolute -left-4 -top-4 -z-10 h-20 w-20 bg-[radial-gradient(#e2e8f0_2px,transparent_2px)] opacity-0 transition-opacity [bg-size:8px_8px] group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  )
}
