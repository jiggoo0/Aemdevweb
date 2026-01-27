/** @format */

import React from "react"
import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react"

/**
 * WorkProcess: คอมโพเนนต์แสดงพิกัดขั้นตอนการวางระบบ
 * ยุทธศาสตร์: สร้างความมั่นใจผ่านกระบวนการทำงานที่เป็นมาตรฐานและตรวจสอบได้ทุกขั้นตอน
 */
export default function WorkProcess() {
  const steps = [
    {
      title: "Strategic Discovery",
      desc: "เจาะพิกัดโจทย์ธุรกิจและพฤติกรรมลูกค้า เพื่อวางโครงสร้างที่แม่นยำที่สุด",
      icon: Search,
      color: "bg-blue-500",
    },
    {
      title: "Core Architecture",
      desc: "ร่างพิกัดดีไซน์และระบบการเข้าถึงข้อมูล เน้นความง่ายและกริบของเลเยอร์งาน",
      icon: PenTool,
      color: "bg-emerald-500",
    },
    {
      title: "High-Speed Build",
      desc: "ประกอบโครงสร้างด้วยมาตรฐาน Clean Code เพื่อพิกัดความเร็วระดับสากล",
      icon: Code2,
      color: "bg-indigo-500",
    },
    {
      title: "Final Deployment",
      desc: "ตรวจสอบพิกัดความเรียบร้อยรอบสุดท้าย พร้อมรันระบบงานจริงให้ธุรกิจเดินหน้า",
      icon: Rocket,
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="my-20 w-full">
      <div className="grid gap-1 bg-slate-100 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative flex flex-col bg-white p-10 transition-all hover:z-10 hover:shadow-2xl hover:shadow-slate-200"
          >
            {/* เลเยอร์ลำดับขั้นตอน (Step Number) */}
            <div className="mb-8 flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg ${step.color} shadow-${step.color.split("-")[1]}-500/20`}
              >
                <step.icon size={22} />
              </div>
              <span className="text-4xl font-black text-slate-50 opacity-0 transition-opacity group-hover:opacity-100">
                0{index + 1}
              </span>
            </div>

            {/* พิกัดเนื้อหาขั้นตอนงาน */}
            <div className="flex flex-1 flex-col">
              <h3 className="mb-4 text-xl font-black tracking-tighter text-slate-950 uppercase italic">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed font-bold text-slate-500">
                {step.desc}
              </p>
            </div>

            {/* สัญลักษณ์พิกัดทางเชื่อม (Connector) */}
            {index !== steps.length - 1 && (
              <div className="absolute top-1/2 -right-4 z-20 hidden -translate-y-1/2 md:block">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                  <ArrowRight size={14} className="text-slate-300" />
                </div>
              </div>
            )}

            {/* แถบสีจางๆ ด้านล่างเมื่อ Hover */}
            <div
              className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${step.color}`}
            />
          </div>
        ))}
      </div>

      {/* คำบรรยายพิกัดมาตรฐานงานท้ายขั้นตอน */}
      <div className="mt-12 text-center">
        <p className="text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
          Professional Infrastructure Deployment Framework • 2026
        </p>
      </div>
    </div>
  )
}
