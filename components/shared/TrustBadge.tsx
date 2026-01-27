/** @format */

import React from "react"
import { ShieldCheck, Zap, BarChart3, Globe2 } from "lucide-react"

/**
 * TrustBadge - Professional Standards Edition
 * พิกัด: ส่วนแสดงเครื่องหมายยืนยันความน่าเชื่อถือ เพื่อสร้างความมั่นใจก่อนปิดการขาย
 * ยุทธศาสตร์: เน้น "ผลลัพธ์" ที่เจ้าของธุรกิจต้องการเห็นจริง
 */
export default function TrustBadge() {
  const standards = [
    {
      icon: <ShieldCheck size={20} />,
      label: "System Safety",
      value: "Standard Grade",
    },
    {
      icon: <Zap size={20} />,
      label: "User Experience",
      value: "High Speed Score",
    },
    {
      icon: <BarChart3 size={20} />,
      label: "Market Visibility",
      value: "SEO Friendly",
    },
    {
      icon: <Globe2 size={20} />,
      label: "Modern Systems",
      value: "Latest Standard",
    },
  ]

  return (
    <div className="w-full border-y border-slate-100 bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-16">
          {standards.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center gap-5 text-center md:flex-row md:items-start md:text-left"
            >
              {/* พิกัดไอคอน: ปรับให้ดูภูมิฐานและเป็นมิตรด้วยมนสัมผัส (Soft Radius) */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-emerald-500/20">
                {item.icon}
              </div>

              <div className="space-y-1.5">
                {/* ฉลากกำกับ: ใช้ Font ตัวเล็กเน้นความเรียบหรู */}
                <div className="text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase italic">
                  {item.label}
                </div>
                {/* ค่าที่แสดงผล: เน้นความชัดเจนและตรงไปตรงมา */}
                <div className="text-lg font-black tracking-tight text-slate-900 italic transition-colors group-hover:text-emerald-600 md:text-xl">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
