/** @format */

import React from "react"
import { ShieldCheck, Zap, MessageCircle } from "lucide-react"
import Link from "next/link"

/**
 * ShopFooter - ส่วนท้ายหน้าร้าน Shops.
 * แนวคิด: ยืนยันมาตรฐานความเนี้ยบและความโปร่งใสในสไตล์ Specialist
 * โดย: นายเอ็มซ่ามากส์ (AEM Engine 2026)
 */
export const ShopFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-50 bg-slate-50/50 py-20 lg:py-32">
      {/* ลายตารางจางๆ เบื้องหลัง เพื่อโชว์ความเนี้ยบของงานระบบ */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 text-center">
          {/* [ส่วนที่ 1]: การยืนยันมาตรฐาน (Trust Badge) */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-white text-emerald-500 shadow-2xl ring-1 shadow-emerald-500/10 ring-slate-100 transition-transform hover:scale-110">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-3xl font-black tracking-tighter text-slate-950 uppercase italic">
                นายเอ็มซ่ามากส์ Shops<span className="text-emerald-500">.</span>
              </h3>
              <p className="font-body mx-auto max-w-md text-base leading-relaxed font-bold text-slate-500">
                เครื่องจักรทำเงินในรูปแบบเว็บไซต์สำเร็จรูปที่เนี้ยบและซิ่งที่สุด
                ออนไลน์ธุรกิจของคุณให้แซงคู่แข่งใน 24 ชั่วโมงครับ
              </p>
            </div>
          </div>

          {/* [ส่วนที่ 2]: ลิงก์ด่วนและการติดต่อ (Quick Connect) */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://line.me/ti/p/@aemdevweb"
              className="group flex items-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 text-white transition-all active:scale-95"
            >
              <MessageCircle size={18} className="text-emerald-500" />
              <span className="font-heading text-[10px] font-black tracking-widest uppercase italic">
                คุยงานกับนายเอ็ม
              </span>
            </Link>
            <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-slate-950 shadow-sm ring-1 ring-slate-100">
              <Zap size={18} className="text-emerald-500" />
              <span className="font-heading text-[10px] font-black tracking-widest uppercase italic">
                AEM Engine v2026
              </span>
            </div>
          </div>

          {/* [ส่วนที่ 3]: ลิขสิทธิ์และมาตรฐานงาน (Copyright) */}
          <div className="w-full max-w-4xl border-t border-slate-200 pt-12 opacity-40">
            <p className="font-heading text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
              © {currentYear} AEMDEVWEB • Specialist Site Engine • No Robot
              Language Inside
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
