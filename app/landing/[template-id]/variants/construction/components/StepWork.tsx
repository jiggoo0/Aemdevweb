/** @format */
import React from "react"

/**
 * 🟢 ปรับ Interface ให้ยืดหยุ่น (Flexible Interface)
 * รองรับทั้ง 'detail' และ 'description' เพื่อแก้ปัญหา TS2322
 */
export interface Step {
  id?: string | number
  title: string
  detail?: string // รองรับข้อมูลที่ส่งจาก Template (data.steps)
  description?: string // รองรับข้อมูลสำรอง
}

export interface StepWorkProps {
  steps: Step[]
  primaryColor?: string
}

export default function StepWork({
  steps = [],
  primaryColor = "#0f172a",
}: StepWorkProps) {
  if (!steps.length) return null

  return (
    <section className="py-16">
      <div className="mb-16 flex items-center gap-4">
        <div className="h-12 w-3" style={{ backgroundColor: primaryColor }} />
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
          Our Process
        </h2>
      </div>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => (
          <div key={step.id || idx} className="group relative">
            {/* Step Number Badge */}
            <div className="mb-6 flex items-baseline gap-2">
              <span
                className="text-6xl font-black italic leading-none opacity-10 transition-opacity group-hover:opacity-100"
                style={{ color: primaryColor }}
              >
                0{idx + 1}
              </span>
              <div
                className="h-2 w-8"
                style={{ backgroundColor: primaryColor }}
              />
            </div>

            {/* Content Card */}
            <div className="relative border-l-4 border-slate-900 pl-6 transition-transform group-hover:translate-x-2">
              <h3 className="mb-4 text-xl font-black uppercase tracking-tight text-slate-900">
                {step.title}
              </h3>

              <p className="text-sm font-bold leading-relaxed text-slate-500">
                {step.detail ||
                  step.description ||
                  "Project phase details arriving soon."}
              </p>
            </div>

            {/* Connecting Line (Desktop Only) */}
            {idx < steps.length - 1 && (
              <div className="absolute right-0 top-8 hidden h-[2px] w-12 bg-slate-100 lg:block" />
            )}
          </div>
        ))}
      </div>

      {/* Industrial Footer Decor */}
      <div className="mt-16 border-t-2 border-slate-900 pt-8">
        <div className="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          <span>Phase: Planning</span>
          <span>Phase: Execution</span>
          <span>Phase: Quality Control</span>
          <span>Status: Verified</span>
        </div>
      </div>
    </section>
  )
}
