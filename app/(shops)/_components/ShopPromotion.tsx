/** @format */

import React from "react"
// [FIXED]: เพิ่ม Gauge เข้ามาในชุดไอคอนให้ครบทุกพิกัดแล้วครับ
import { Zap, Rocket, ShieldCheck, Gauge } from "lucide-react"

/**
 * ShopPromotion - แบนเนอร์แจ้งสิทธิพิเศษและมาตรฐานระบบงาน
 * แนวคิด: สร้างความมั่นใจให้ลูกค้าตัดสินใจ "จูนเครื่อง" ธุรกิจได้ทันที
 * โดย: นายเอ็มซ่ามากส์ (AEM Engine 2026)
 */
export const ShopPromotion = () => {
  return (
    <section className="relative overflow-hidden rounded-[3rem] bg-slate-950 px-8 py-20 text-center lg:py-32">
      {/* ลายตารางจางๆ เบื้องหลัง (System Grid) โชว์ความเนี้ยบของงานดีไซน์ */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      {/* แสงเรืองแสงสีมรกต (Soft Glow) เพิ่มความแพงให้หน้าโชว์รูม */}
      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* ป้ายสถานะโปรแกรมการทำงาน */}
        <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-2">
          <Rocket size={16} className="text-emerald-500" />
          <span className="font-heading text-[10px] font-black tracking-[0.4em] text-emerald-400 uppercase italic">
            Fast Track Business 2026
          </span>
        </div>

        <h2 className="font-heading mb-8 text-5xl font-black tracking-tighter text-white uppercase italic md:text-7xl lg:text-8xl">
          ออนไลน์ธุรกิจ <br />
          <span className="bg-gradient-to-r from-emerald-400 via-white to-emerald-400 bg-clip-text text-transparent">
            ให้ซิ่งแซงหน้าแรก
          </span>
        </h2>

        <p className="font-body mx-auto mb-16 max-w-2xl text-lg font-bold text-slate-400 md:text-xl">
          เลือกแบบที่ชอบวันนี้ พร้อมจูนระบบให้เสร็จภายใน 24 ชม.
          ดูแลครบทั้งงานเทคนิคและพื้นฐาน SEO ให้คุณพร้อมปิดยอดขายได้ทันทีครับ
        </p>

        {/* รายการยืนยันมาตรฐานความแรง */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: <Zap size={18} />, label: "จูนเครื่องแรงฟรี" },
            { icon: <ShieldCheck size={18} />, label: "ปลอดภัย 100%" },
            { icon: <Gauge size={18} />, label: "LCP < 0.8 วินาที" },
          ].map((item, i) => (
            <div
              key={`promo-feat-${i}`}
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-6 py-5 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="text-emerald-500">{item.icon}</div>
              <span className="font-heading text-[11px] font-black tracking-widest text-white uppercase italic">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
