/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Zap, MessageCircle, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/constants/site-config"

/**
 * ShopFooter - ส่วนฐานรากของระบบโซลูชันเชิงพาณิชย์ (The Strategic Foundation)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: "Strategic Trust & Performance Support"
 * เน้นการตอกย้ำมาตรฐานการบริหารจัดการโครงการและการเข้าถึงผู้เชี่ยวชาญในทันที
 */
export const ShopFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white pt-24 pb-12">
      {/* [LAYER 1]: รายละเอียดโครงสร้างเชิงระบบพร้อมรัศมีแสงนวลตา */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(circle_at_center,black,transparent)] opacity-[0.03]"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* [LAYER 2]: ส่วนยืนยันมาตรฐานความเชื่อมั่น (Authority Protocol) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16 space-y-8"
          >
            <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-0 animate-pulse rounded-[2rem] bg-emerald-500/10 blur-xl" />
              <div className="relative flex h-full w-full items-center justify-center rounded-[1.8rem] bg-slate-950 text-emerald-400 shadow-2xl ring-1 ring-white/10">
                <ShieldCheck size={36} strokeWidth={1.2} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
                AEM Strategic<span className="text-emerald-500">.</span> Logic
              </h3>
              <p className="font-body mx-auto max-w-xl text-lg leading-relaxed font-bold text-slate-500">
                รูปแบบเว็บไซต์สำเร็จรูปที่ผ่านการเพิ่มประสิทธิภาพความเร็วเพื่อ{" "}
                <br className="hidden md:block" />
                <span className="text-slate-950 underline decoration-emerald-500/30 decoration-4 underline-offset-8">
                  ยกระดับอัตราการเปลี่ยนผ่านกลุ่มเป้าหมายเชิงธุรกิจ
                </span>{" "}
                ภายใต้มาตรฐานระบบปี 2026
              </p>
            </div>
          </motion.div>

          {/* [LAYER 3]: จุดปฏิสัมพันธ์หลักและการเชื่อมต่อข้อมูล (Interaction Nodes) */}
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href={siteConfig.links.line}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-5 text-white shadow-xl shadow-emerald-500/10 transition-all hover:bg-slate-950 active:scale-95"
            >
              <MessageCircle size={20} fill="currentColor" />
              <span className="font-heading text-[11px] font-black tracking-[0.2em] uppercase italic">
                CONSULT WITH SPECIALIST
              </span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 px-8 py-5 text-slate-950 shadow-sm">
              <div className="relative flex h-2 w-2">
                <div className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <div className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <span className="font-heading text-[11px] font-black tracking-[0.2em] uppercase italic">
                Operational Status: Verified 2026
              </span>
            </div>
          </div>

          {/* [LAYER 4]: รายละเอียดลิขสิทธิ์และการยืนยันมาตรฐานทางเทคนิค */}
          <div className="mt-24 w-full border-t border-slate-100 pt-16">
            <div className="flex flex-col items-center justify-between gap-8 transition-opacity duration-500 md:flex-row md:opacity-40 md:hover:opacity-100">
              <p className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
                © {currentYear} {siteConfig.company.name} • Strategic Solution
                Engine
              </p>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-emerald-500" />
                  <span className="font-heading text-[10px] font-black tracking-widest text-slate-950 uppercase italic">
                    Performance Optimized
                  </span>
                </div>
                <div className="hidden h-4 w-px bg-slate-200 md:block" />
                <span className="font-heading text-[10px] font-black tracking-widest text-slate-300 uppercase italic">
                  Architected by {siteConfig.expert.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
