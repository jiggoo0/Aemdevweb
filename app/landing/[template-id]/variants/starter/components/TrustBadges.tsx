/** @format */
"use client"

import React from "react"

interface TrustBadge {
  icon: string
  title: string
  description: string
}

interface TrustBadgesProps {
  badges?: TrustBadge[]
}

const TrustBadges: React.FC<TrustBadgesProps> = ({
  badges = [
    {
      icon: "ShieldCheck",
      title: "ปลอดภัยและน่าเชื่อถือ",
      description:
        "เว็บไซต์ถูกออกแบบตามมาตรฐานความปลอดภัย และรองรับการใช้งานบนทุกอุปกรณ์",
    },
    {
      icon: "Award",
      title: "คุณภาพสูง",
      description:
        "เราออกแบบ UI/UX ให้สวยงาม ดูมืออาชีพ และตอบโจทย์ธุรกิจ SME ไทย",
    },
    {
      icon: "Users",
      title: "รองรับลูกค้าจำนวนมาก",
      description:
        "เว็บไซต์โหลดเร็วและเสถียร รองรับจำนวนผู้ใช้งานพร้อมกันได้ดี",
    },
  ],
}) => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-12 text-center text-3xl font-black text-brand-navy md:text-4xl">
          ทำไมลูกค้าไว้ใจเรา
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="text-brand-primary mb-4 text-4xl">
                <i className={`icon-${badge.icon}`} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {badge.title}
              </h3>
              <p className="text-slate-700">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
