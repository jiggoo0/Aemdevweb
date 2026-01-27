/** @format */

import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  Globe,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site-config"

/**
 * Hero Component - พิกัดต้อนรับหลัก (Samaks Performance Edition)
 * แนวทาง: เน้นความไวและโหลดเร็ว (Lightweight) โดยใช้ระนาบสีและตัวอักษรเป็นตัวนำ
 * ยุทธศาสตร์: ใช้ text-gradient เพื่อสร้างความโดดเด่นให้แบรนด์ นายเอ็มซ่ามากส์
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export default function Hero() {
  return (
    <section className="bg-background relative overflow-hidden pt-24 pb-16 lg:pt-48 lg:pb-32">
      {/* พิกัดตารางพื้นหลังแบบจาง: รีดสมรรถนะด้วย CSS Grid แทนไฟล์ภาพ 
         ช่วยให้ First Paint ไวขึ้นมาก ไม่เป็นภาระต่อระบบ
      */}
      <div
        className="bg-grid-subtle pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-20 lg:flex-row lg:items-center">
          {/* [PART 1] - Strategic Messaging: พิกัดเนื้อหาที่เน้นความแรง */}
          <div className="flex-1 space-y-10 text-left">
            <div className="font-prompt border-border bg-surface-subtle text-muted-foreground inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[10px] font-black tracking-[0.2em] uppercase italic">
              <Sparkles size={14} className="text-primary" />
              Trusted Digital Growth Partner
            </div>

            {/* พาดหัว: นายเอ็มซ่ามากส์ 
                ใช้ text-gradient ที่เราตั้งค่าไว้ใน globals.css เพื่อความซ่าแบบพรีเมียม
            */}
            <h1 className="text-gradient font-prompt text-6xl leading-[1] font-black tracking-tighter uppercase italic md:text-8xl lg:text-[9.5rem]">
              นายเอ็ม <br />
              ซ่ามากส์.
            </h1>

            <p className="font-body text-muted-foreground max-w-xl text-lg leading-relaxed font-bold md:text-xl">
              สร้างความได้เปรียบให้ธุรกิจ SME ด้วยระบบเว็บไซต์ที่รวมเอา
              "งานดีไซน์ที่สะอาดตา" และ "ลำดับข้อมูลที่กริบ" เข้าไว้ด้วยกัน
              เพื่อให้ทุกการเข้าชมเปลี่ยนเป็นโอกาสทางธุรกิจที่วัดผลได้จริง
            </p>

            {/* กลุ่มปุ่มดำเนินการหลัก (CTA Hub) */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                className="shadow-aurora font-prompt bg-primary h-16 rounded-2xl px-10 text-base font-black tracking-widest text-white uppercase italic transition-all hover:bg-slate-950 active:scale-95"
              >
                <Link href="/services" className="flex items-center gap-3">
                  Start Your Project
                  <ArrowRight size={18} strokeWidth={3} />
                </Link>
              </Button>

              <Button
                variant="ghost"
                asChild
                className="font-prompt text-muted-foreground hover:bg-surface-subtle hover:text-primary h-16 rounded-2xl px-10 text-base font-black tracking-widest uppercase italic transition-colors"
              >
                <Link href="/templates">View Structures</Link>
              </Button>
            </div>

            {/* พิกัดยืนยันคุณภาพงานระบบ (Technical Registry) */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="font-prompt text-muted-foreground flex items-center gap-2 text-[10px] font-black tracking-[0.1em] uppercase italic">
                <CheckCircle size={14} className="text-primary" />
                Technical SEO Optimized
              </div>
              <div className="font-prompt text-muted-foreground flex items-center gap-2 text-[10px] font-black tracking-[0.1em] uppercase italic">
                <Globe size={14} className="text-primary" />
                Core Web Vitals Ready
              </div>
            </div>
          </div>

          {/* [PART 2] - Expert Insight: ส่วนพรีเมียมที่เน้นความเสถียร */}
          <div className="hidden flex-1 lg:block">
            <div className="relative mx-auto max-w-sm">
              {/* ระบบแสงฟุ้ง (Aurora Glow) เพิ่มมิติโดยไม่ใช้รูปภาพหนักๆ */}
              <div className="bg-primary/5 absolute -inset-10 rounded-full blur-[100px]" />

              <div className="depth-card relative p-12 transition-transform duration-700 hover:-translate-y-2">
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <div className="font-prompt text-primary text-[9px] font-black tracking-[0.3em] uppercase italic">
                      Consultant Insight
                    </div>
                    <MessageSquare size={20} className="text-slate-100" />
                  </div>

                  <p className="font-body text-foreground text-lg leading-relaxed font-bold">
                    "เว็บไซต์ที่ทำงานได้จริง ต้องทำหน้าที่เป็นพนักงานขายที่เก่ง
                    และพร้อมให้ข้อมูลลูกค้าตลอด 24 ชั่วโมง"
                  </p>

                  <div className="bg-border/50 h-px" />

                  <div className="flex items-center gap-5">
                    <div className="font-prompt bg-primary flex h-12 w-12 items-center justify-center rounded-2xl text-[10px] font-black text-white italic">
                      AEM
                    </div>
                    <div>
                      <div className="font-prompt text-foreground text-sm font-black uppercase italic">
                        {siteConfig.expert.name}
                      </div>
                      <div className="font-prompt text-muted-foreground text-[9px] font-black tracking-widest uppercase italic">
                        Lead Marketing Consultant
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
