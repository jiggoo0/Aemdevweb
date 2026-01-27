/** @format */

import React from "react"
import { Users, TrendingUp, ShieldCheck, Globe } from "lucide-react"

/**
 * ImpactStats: คอมโพเนนต์แสดงพิกัดความสำเร็จเชิงประจักษ์
 * ยุทธศาสตร์: ใช้ตัวเลขจริงยืนยันพิกัดมาตรฐานงาน เพื่อเปลี่ยนความลังเลเป็นความมั่นใจ
 */
export const ImpactStats = () => {
  const stats = [
    {
      label: "Success Projects",
      value: "150+",
      desc: "พิกัดงานที่ส่งมอบแล้วเสร็จ",
      icon: ShieldCheck,
    },
    {
      label: "Sales Growth",
      value: "45%",
      desc: "พิกัดการเติบโตของยอดขายลูกค้า",
      icon: TrendingUp,
    },
    {
      label: "Happy Clients",
      value: "120+",
      desc: "ฐานธุรกิจที่วางระบบร่วมกัน",
      icon: Users,
    },
    {
      label: "Global Reach",
      value: "12",
      desc: "พิกัดประเทศที่ระบบรองรับ",
      icon: Globe,
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* พิกัดไอคอนและการตกแต่งจางๆ */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-emerald-50 group-hover:text-emerald-500">
                <stat.icon size={24} />
              </div>

              {/* พิกัดตัวเลขสำคัญ */}
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
                  {stat.value}
                </span>
                <span className="text-[11px] font-black tracking-widest text-emerald-600 uppercase italic">
                  {stat.label}
                </span>
              </div>

              {/* พิกัดคำอธิบายงานระบบ */}
              <p className="mt-4 text-[13px] leading-relaxed font-bold text-slate-400">
                {stat.desc}
              </p>

              {/* เส้นแบ่งพิกัดงานสำหรับ Desktop */}
              {index !== stats.length - 1 && (
                <div className="absolute top-1/2 -right-6 hidden h-12 w-[1px] -translate-y-1/2 bg-slate-100 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
