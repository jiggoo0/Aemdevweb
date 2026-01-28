/** @format */

import React from "react"
import { ShieldCheck, Zap, BarChart3, Cpu } from "lucide-react"

/**
 * TrustBadge - มาตรฐานความเชื่อมั่นปี 2026
 * แนวคิด: ยืนยันจุดแข็งเรื่องประสิทธิภาพและ SEO เพื่อสร้างความมั่นใจให้ลูกค้า
 * ตัวตน: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function TrustBadge() {
  const standards = [
    {
      icon: <Zap size={22} />,
      label: "Loading Performance",
      value: "LCP < 0.8s Speed",
    },
    {
      icon: <ShieldCheck size={22} />,
      label: "Infrastructure",
      value: "Next.js 16 Ready",
    },
    {
      icon: <BarChart3 size={22} />,
      label: "Visibility",
      value: "AI Search Ready",
    },
    {
      icon: <Cpu size={22} />,
      label: "Performance Score",
      value: "95-100 Google Grade",
    },
  ]

  return (
    <section className="w-full border-y border-slate-50 bg-white py-16 lg:py-20">
      <div className="container mx-auto px-6">
        {/* รายการมาตรฐานการทำงาน (Grid) */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">
          {standards.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center gap-6 text-center md:flex-row md:items-start md:text-left"
            >
              {/* ส่วนแสดงไอคอน: เน้นความคมชัดและการตอบสนองที่ลื่นไหล */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-slate-50 text-slate-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-emerald-500 group-hover:shadow-2xl group-hover:shadow-slate-950/20">
                {item.icon}
              </div>

              <div className="space-y-2">
                {/* ข้อมูลกำกับ: เน้นความทันสมัยสไตล์เทคนิคัล */}
                <div className="text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
                  {item.label}
                </div>
                {/* แสดงผลลัพธ์ที่พิสูจน์ได้จริง */}
                <div className="text-xl font-black tracking-tighter text-slate-900 italic transition-colors group-hover:text-emerald-600 lg:text-2xl">
                  {item.value}
                </div>
                {/* เส้นตกแต่งที่จะกางออกเมื่อนำเมาส์มาวาง */}
                <div className="h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full md:hidden lg:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
