/** @format */

import React from "react"
import { Users, TrendingUp, ShieldCheck, Globe, LucideIcon } from "lucide-react"

/**
 * [TYPE DEFINITIONS]: กำหนดรูปแบบข้อมูลเพื่อความแม่นยำของระบบงาน
 */
interface StatItem {
  label: string
  value: string
  desc: string
  icon: LucideIcon
}

/**
 * ImpactStats - ส่วนแสดงผลตัวเลขความสำเร็จและมาตรฐานระบบงาน
 * แนวคิด: เน้นความชัดเจนของข้อมูลที่จับต้องได้จริง (Data Transparency)
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const ImpactStats = () => {
  /** * ชุดข้อมูลสถิติ:
   * ใช้ภาษาที่เข้าใจง่าย ตรงไปตรงมา เพื่อความน่าเชื่อถือระดับมืออาชีพ
   */
  const stats: StatItem[] = [
    {
      label: "System Delivered",
      value: "150+",
      desc: "ส่งมอบระบบงานและเว็บไซต์พิกัดเสร็จสมบูรณ์",
      icon: ShieldCheck,
    },
    {
      label: "Plan Growth",
      value: "45%",
      desc: "อัตราการเติบโตเฉลี่ยของแผนงานลูกค้า",
      icon: TrendingUp,
    },
    {
      label: "Business Partners",
      value: "120+",
      desc: "เจ้าของธุรกิจที่เลือกวางระบบงานกับเรา",
      icon: Users,
    },
    {
      label: "Market Coverage",
      value: "12",
      desc: "กลุ่มธุรกิจที่ระบบของเรารองรับพิกัดได้ทันที",
      icon: Globe,
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 antialiased lg:py-32">
      {/* พื้นหลังลายตาราง (Grid): 
         ช่วยให้หน้าเว็บดูมีระเบียบและดูเป็นงานระบบที่เนี้ยบระดับ Specialist
      */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={`stat-item-${index}`}
              className="group flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* ส่วนแสดงพิกัดไอคอน: 
                  เน้นความสะอาดและมีการตอบสนองที่ลื่นไหล
              */}
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-50 text-slate-400 ring-1 ring-slate-100 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-emerald-600/30 group-hover:ring-emerald-500">
                <stat.icon size={30} strokeWidth={1.2} />
              </div>

              {/* ส่วนตัวเลขสำคัญ: 
                  ใช้ฟอนต์ตัวหนาและเอียง (Black Italic) สื่อถึงความรวดเร็วและแม่นยำ
              */}
              <div className="flex flex-col gap-2">
                <span className="font-heading text-5xl font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl lg:text-7xl">
                  {stat.value}
                </span>
                <span className="font-heading text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase italic">
                  {stat.label}
                </span>
              </div>

              {/* รายละเอียดอธิบายผลงาน: 
                  สั้น กระชับ และสื่อความหมายชัดเจนตามพิกัดงานจริง
              */}
              <p className="font-body mt-6 max-w-[200px] text-sm leading-relaxed font-bold text-slate-500">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
