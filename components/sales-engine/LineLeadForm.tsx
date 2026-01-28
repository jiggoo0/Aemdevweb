/** @format */

"use client"

import React from "react"
import { ArrowRight, ShieldCheck, Zap, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

/**
 * [TYPE DEFINITIONS]: กำหนดรูปแบบข้อมูลพิกัดงาน
 */
interface LineLeadFormProps {
  variant?: "button" | "form"
  label?: string
  className?: string
}

/**
 * LineLeadForm - ระบบเริ่มต้นโปรเจกต์และพิกัดการติดต่อ
 * แนวคิด: สื่อสารอย่างชัดเจน จริงใจ เข้าใจง่ายสำหรับพิกัดธุรกิจทุกระดับ
 * มาตรฐาน: โหลดไว เสถียรสูง วางระบบบน Next.js 16
 * [FIX]: ล้างพิกัด Warning Unused 'mounted' เพื่อความกริบของระบบงาน
 */
export default function LineLeadForm({
  variant = "form",
  label = "ปรึกษาฟรีผ่าน LINE",
  className,
}: LineLeadFormProps) {
  const handleLineRedirect = () => {
    if (siteConfig.contact.line) {
      window.open(siteConfig.contact.line, "_blank", "noopener,noreferrer")
    }
  }

  /**
   * [MODE 1]: รูปแบบปุ่มกด (Inline Action)
   * สำหรับแทรกในพิกัดเนื้อหาบทความหรือส่วนท้ายของแต่ละส่วนในหน้าเพจ
   */
  if (variant === "button") {
    return (
      <Button
        onClick={handleLineRedirect}
        className={cn(
          "group h-14 rounded-2xl bg-emerald-600 px-8 text-[11px] font-black tracking-widest text-white uppercase italic shadow-2xl shadow-emerald-900/10 transition-all hover:bg-slate-950 active:scale-95",
          className
        )}
      >
        <MessageSquare size={16} className="mr-3" />
        {label}
        <ArrowRight
          size={16}
          className="ml-3 transition-transform group-hover:translate-x-1"
        />
      </Button>
    )
  }

  /**
   * [MODE 2]: รูปแบบฟอร์มเต็ม (Conversion Hub)
   * วางพิกัดเป็นจุดตัดสินใจหลักของลูกค้าเพื่อให้เริ่มระบบงานได้ง่ายที่สุด
   */
  return (
    <section
      className={cn(
        "shadow-3xl relative overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-8 shadow-slate-200/40 md:p-16 lg:p-20",
        className
      )}
    >
      {/* วางพิกัดพื้นหลังลายตาราง (Grid Surface) เพื่อความเนี้ยบ */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        {/* ส่วนพิกัดเนื้อหานำเสนอ (Content Side) */}
        <div className="max-w-xl space-y-10 text-left">
          <div className="inline-flex items-center gap-3 rounded-full bg-emerald-50 px-6 py-2.5 text-[10px] font-black tracking-[0.3em] text-emerald-700 uppercase italic">
            <Zap size={14} className="fill-emerald-600" />
            พร้อมเริ่มพิกัดงานทันที
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl leading-[1] font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl lg:text-7xl">
              เริ่มสร้างระบบ <br />
              <span className="text-emerald-500">เว็บไซต์ธุรกิจ.</span>
            </h2>

            <p className="font-body text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              ทักคุยพิกัดงานกับเราวันนี้
              เปลี่ยนหน้าเว็บให้เป็นระบบงานหาลูกค้าที่ทำงานแทนคุณ 24 ชม.
            </p>
          </div>

          <div className="flex flex-col gap-5 pt-6">
            <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <ShieldCheck size={18} />
              </div>
              เราดูแลพิกัดข้อมูลของคุณอย่างปลอดภัยตามมาตรฐานปี 2026
            </div>
          </div>
        </div>

        {/* ส่วนรับพิกัดข้อมูลเบื้องต้น (Lead Intake Side) */}
        <div className="w-full max-w-md rounded-[3rem] bg-slate-50 p-10 shadow-inner ring-1 ring-slate-100 md:p-12">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 text-left">
              <Label
                htmlFor="biz-name"
                className="ml-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic"
              >
                ชื่อธุรกิจหรือแบรนด์ของคุณ
              </Label>
              <Input
                id="biz-name"
                placeholder="ระบุชื่อธุรกิจ"
                className="h-16 rounded-2xl border-none bg-white px-8 font-bold shadow-sm ring-1 ring-slate-200 transition-all placeholder:text-slate-300 focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
            </div>

            <div className="grid gap-4 text-left">
              <Label
                htmlFor="biz-tel"
                className="ml-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic"
              >
                เบอร์โทรศัพท์ติดต่อ
              </Label>
              <Input
                id="biz-tel"
                type="tel"
                placeholder="0XX-XXX-XXXX"
                className="h-16 rounded-2xl border-none bg-white px-8 font-bold shadow-sm ring-1 ring-slate-200 transition-all placeholder:text-slate-300 focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
            </div>

            <Button
              type="button"
              onClick={handleLineRedirect}
              className="group h-16 w-full rounded-2xl bg-slate-950 text-[11px] font-black tracking-[0.4em] text-white uppercase italic shadow-2xl shadow-slate-900/20 transition-all hover:bg-emerald-600 hover:text-white"
            >
              {label}
              <ArrowRight
                size={18}
                className="ml-3 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </form>

          {/* ส่วนท้ายพิกัดระบบฟอร์ม */}
          <div className="mt-10 flex flex-col items-center gap-3 border-t border-slate-200 pt-10">
            <p className="text-[9px] font-black tracking-[0.5em] text-slate-300 uppercase italic">
              System by AEMDEVWEB 2026
            </p>
            <div className="h-1 w-10 rounded-full bg-emerald-500/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
