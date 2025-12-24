/** @format */
"use client"

import React from "react"
import * as Icons from "lucide-react"
import { MultiLangText } from "@/app/landing/[template-id]/types"

interface TrustBadge {
  icon: string
  title: string | MultiLangText
  description: string | MultiLangText
}

interface TrustBadgesProps {
  badges?: TrustBadge[]
  primaryColor?: string
  t: (content: string | MultiLangText | undefined) => string
}

const TrustBadges: React.FC<TrustBadgesProps> = ({
  badges,
  primaryColor = "#000000",
  t,
}) => {
  // Default Badges กรณีใน Mock ไม่มีส่งมา
  const defaultBadges: TrustBadge[] = [
    {
      icon: "ShieldCheck",
      title: { th: "ปลอดภัยและน่าเชื่อถือ", en: "Secure & Reliable" },
      description: {
        th: "เว็บไซต์ถูกออกแบบตามมาตรฐานความปลอดภัยระดับสากล",
        en: "Built with global security standards and best practices.",
      },
    },
    {
      icon: "Zap",
      title: { th: "ประสิทธิภาพสูง", en: "High Performance" },
      description: {
        th: "โหลดเร็วด้วย Next.js 15 และ Edge Network",
        en: "Ultra-fast loading powered by Next.js 15 and Edge Network.",
      },
    },
    {
      icon: "Smartphone",
      title: { th: "รองรับทุกอุปกรณ์", en: "Fully Responsive" },
      description: {
        th: "แสดงผลสวยงามบนมือถือ แท็บเล็ต และคอมพิวเตอร์",
        en: "Optimized for seamless experience on any screen size.",
      },
    },
  ]

  const displayBadges = badges || defaultBadges

  const renderIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName] || Icons.ShieldCheck
    return <LucideIcon size={32} strokeWidth={2.5} />
  }

  return (
    <div className="w-full">
      <div className="grid gap-8 md:grid-cols-3">
        {displayBadges.map((badge, index) => (
          <div
            key={index}
            className="group flex flex-col items-center border-4 border-slate-900 bg-white p-8 text-center transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_#0f172a]"
          >
            {/* 🏗️ Icon Box */}
            <div
              className="mb-6 flex h-16 w-16 items-center justify-center border-4 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] transition-colors group-hover:bg-slate-900 group-hover:text-white"
              style={{ color: primaryColor }}
            >
              {renderIcon(badge.icon)}
            </div>

            {/* 🏗️ Content */}
            <h3 className="mb-3 text-xl font-black uppercase italic tracking-tighter text-slate-900">
              {t(badge.title)}
            </h3>

            <div
              className="mb-4 h-1 w-10"
              style={{ backgroundColor: primaryColor }}
            />

            <p className="font-bold leading-relaxed text-slate-500">
              {t(badge.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBadges
