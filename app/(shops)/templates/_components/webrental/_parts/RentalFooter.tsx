/** @format */

import React from "react"
import { Phone, MessageCircle } from "lucide-react" // [FIX]: ลบ Zap ที่ไม่ได้ใช้งานออก

/**
 * RentalFooterProps - กำหนดพิกัดรูปแบบข้อมูลสำหรับส่วนท้ายระบบงาน
 * เน้นความชัดเจนและรองรับการแสดงผลที่ลื่นไหลตามมาตรฐานงานระบบ
 */
interface RentalFooterProps {
  data: {
    brand: string
    tagline: string
    contact: {
      phone: string
      line: string
    }
  }
}

/**
 * RentalFooter - ส่วนท้ายของพิกัดระบบเช่าเว็บไซต์
 * แนวคิด: เน้นความน่าเชื่อถือและการติดต่อที่ง่ายที่สุดสำหรับพิกัดธุรกิจลูกค้า
 * วางระบบโดย: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export const RentalFooter = ({ data }: RentalFooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-slate-950 py-20 text-slate-400 lg:py-32">
      {/* วางพิกัดลายตารางพื้นหลังจางๆ เพิ่มมิติความเนี้ยบสไตล์งานระบบสมัยใหม่ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start">
          {/* [ส่วนที่ 1]: ข้อมูลแบรนด์และพิกัดงาน
              เน้นการสื่อสารตัวตนที่ชัดเจนและจดจำง่ายในพิกัดเดียว
          */}
          <div className="max-w-md text-center md:text-left">
            <h3 className="font-heading mb-4 text-3xl font-black tracking-tighter text-white uppercase italic">
              {data.brand}
              <span className="text-emerald-500">.</span>
            </h3>
            <p className="font-body text-base leading-relaxed font-bold text-slate-500">
              {data.tagline}
            </p>
          </div>

          {/* [ส่วนที่ 2]: พิกัดช่องทางติดต่อสื่อสาร
              รวมปุ่มติดต่อให้ลูกค้าทักหาพิกัดงานได้ในทันที
          */}
          <div className="flex flex-col gap-6 md:items-end">
            <h4 className="font-heading text-[10px] font-black tracking-[0.4em] text-white uppercase italic">
              Connect With Us
            </h4>

            <div className="flex flex-wrap justify-center gap-6 md:justify-end">
              <a
                href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-3 rounded-2xl bg-white/5 px-6 py-4 transition-all hover:bg-white/10 hover:text-white active:scale-95"
                aria-label="ติดต่อผ่านพิกัดเบอร์โทรศัพท์"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-500 transition-colors group-hover:bg-emerald-600 group-hover:text-slate-950">
                  <Phone size={16} />
                </div>
                <span className="font-body text-sm font-black">
                  {data.contact.phone}
                </span>
              </a>

              <a
                href={`https://line.me/ti/p/~${data.contact.line.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl bg-white/5 px-6 py-4 transition-all hover:bg-white/10 hover:text-white active:scale-95"
                aria-label="ติดต่อผ่านพิกัด LINE"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-500 transition-colors group-hover:bg-emerald-600 group-hover:text-slate-950">
                  <MessageCircle size={16} />
                </div>
                <span className="font-body text-sm font-black">
                  {data.contact.line}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* [ส่วนที่ 3]: ข้อมูลลิขสิทธิ์และมาตรฐานการผลิตระบบงาน */}
        <div className="mt-24 border-t border-white/5 pt-12 text-center md:flex md:items-center md:justify-between md:text-left">
          <p className="font-heading text-[9px] font-black tracking-[0.5em] text-slate-600 uppercase italic">
            © {currentYear} {data.brand} • High-Speed Specialist Site
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 md:mt-0">
            <div className="h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
            <p className="font-heading text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
              Powered by AEM Engine v2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
