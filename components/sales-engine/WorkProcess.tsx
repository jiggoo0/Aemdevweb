/** @format */

import React from "react"
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
  LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * [TYPE DEFINITIONS]: กำหนดรูปแบบข้อมูลขั้นตอนการทำงาน
 */
interface ProcessStep {
  title: string
  desc: string
  icon: LucideIcon
  color: string
  shadow: string
}

/**
 * WorkProcess: ขั้นตอนการสร้างเว็บไซต์และวางระบบดิจิทัล
 * แนวทาง: นำเสนอขั้นตอนที่ชัดเจนและเข้าใจง่ายในทุกกระบวนการ
 * ดูแลโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const WorkProcess = () => {
  /**
   * ข้อมูลขั้นตอนการทำงาน:
   * เน้นภาษาที่ตรงไปตรงมา สื่อถึงการลงมือทำจริงเพื่อให้ธุรกิจโตไว
   */
  const steps: ProcessStep[] = [
    {
      title: "Business Mapping",
      desc: "เจาะโจทย์ธุรกิจและคำค้นหาที่สร้างยอดขาย เพื่อวางแผนงานให้แม่นยำที่สุด",
      icon: Search,
      color: "bg-blue-600",
      shadow: "shadow-blue-500/20",
    },
    {
      title: "Interface Planning",
      desc: "จัดลำดับเนื้อหาและปุ่มกดสำคัญ เน้นระบบที่ปิดการขายได้จริง",
      icon: PenTool,
      color: "bg-emerald-600",
      shadow: "shadow-emerald-500/20",
    },
    {
      title: "Technical Build",
      desc: "เขียนโค้ดด้วยมาตรฐานความเร็วสูง ปรับจูนระบบให้พร้อมแข่งขันในตลาด",
      icon: Code2,
      color: "bg-indigo-600",
      shadow: "shadow-indigo-500/20",
    },
    {
      title: "System Launch",
      desc: "ตรวจสอบความเรียบร้อยรอบสุดท้าย พร้อมออนไลน์ให้ธุรกิจติดหน้าแรก Google",
      icon: Rocket,
      color: "bg-orange-600",
      shadow: "shadow-orange-500/20",
    },
  ]

  return (
    <section className="my-24 w-full px-6 antialiased lg:my-40">
      {/* ส่วนหัวข้อขั้นตอนการทำงาน */}
      <div className="mb-16 text-center md:text-left">
        <h2 className="font-heading text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl lg:text-6xl">
          ขั้นตอนการวางระบบ <br />
          <span className="text-emerald-500">Style นายเอ็ม.</span>
        </h2>
      </div>

      {/* รายการขั้นตอน: จัดวางในรูปแบบ Grid 4 คอลัมน์ */}
      <div className="grid gap-1 overflow-hidden rounded-[3rem] bg-slate-100 shadow-2xl md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={`process-step-${index}`}
            className="group hover:shadow-3xl relative flex flex-col bg-white p-10 transition-all duration-500 hover:z-10 hover:scale-[1.02] lg:p-12"
          >
            {/* สัญลักษณ์ลำดับขั้นตอน (Step Identity) */}
            <div className="mb-12 flex items-center justify-between">
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-xl transition-transform duration-500 group-hover:rotate-6",
                  step.color,
                  step.shadow
                )}
              >
                <step.icon size={24} strokeWidth={2} />
              </div>
              <span className="font-heading text-5xl font-black text-slate-50 transition-colors duration-500 group-hover:text-slate-100 lg:text-6xl">
                0{index + 1}
              </span>
            </div>

            {/* เนื้อหาอธิบายขั้นตอน */}
            <div className="flex flex-1 flex-col space-y-4">
              <h3 className="font-heading text-2xl font-black tracking-tighter text-slate-950 uppercase italic">
                {step.title}
              </h3>
              <p className="font-body text-base leading-relaxed font-bold text-slate-500">
                {step.desc}
              </p>
            </div>

            {/* ลูกศรเชื่อมต่อสำหรับหน้าจอขนาดใหญ่ */}
            {index !== steps.length - 1 && (
              <div className="absolute top-1/2 -right-5 z-20 hidden -translate-y-1/2 md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-slate-50">
                  <ArrowRight size={16} className="text-slate-300" />
                </div>
              </div>
            )}

            {/* แถบสีระบุสถานะเมื่อ Hover */}
            <div
              className={cn(
                "absolute bottom-0 left-0 h-2 w-0 transition-all duration-700 group-hover:w-full",
                step.color
              )}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      {/* มาตรฐานงานส่วนท้าย (System Status) */}
      <div className="mt-16 flex flex-col items-center gap-6 text-center">
        <div className="inline-flex items-center gap-3 rounded-full bg-slate-50 px-6 py-2 ring-1 ring-slate-100">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
            Deployment Standard: Verified 2026
          </span>
        </div>
        <p className="font-heading text-[11px] font-black tracking-[0.5em] text-slate-300 uppercase italic">
          High-Performance Infrastructure • AEMDEVWEB
        </p>
      </div>
    </section>
  )
}
