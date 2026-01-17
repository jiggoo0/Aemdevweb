/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CaseStudyCard } from "@/components/shared/CaseStudyCard"
// ✅ Fixed: Removed unused 'BlogCard' import to clear ESLint error
// import { BlogCard } from "@/components/shared/BlogCard";
import { ArrowRight, Trophy, BookOpen, Sparkles } from "lucide-react"

/**
 * 💡 InsightsSection: Luminous Edition
 * จัดการส่วนผลงานและความรู้ให้ดูสว่าง นวลตา และน่าดึงดูด
 */
export function InsightsSection() {
  return (
    <section className="bg-background relative overflow-hidden py-32">
      {/* 🌌 Luminous Decor: แสงออโรร่าที่สว่างนวลตา */}
      <div className="aurora-bg top-1/2 left-1/4 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]" />
      <div className="bg-aurora-violet/10 animate-aurora pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full blur-[140px]" />

      <div className="relative z-10 container mx-auto px-4">
        <Tabs defaultValue="cases" className="w-full">
          {/* Header & Controller Area */}
          <div className="mb-24 flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-end">
            <div className="max-w-3xl text-center lg:text-left">
              <div className="text-aurora-cyan shadow-aurora-glow mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Latest
                Success Stories
              </div>
              <h2 className="text-luminous mb-8 text-5xl uppercase md:text-8xl">
                Success <span className="text-slate-600">&</span> <br />
                <span className="text-aurora-emerald">Knowledge</span>
              </h2>
              <p className="font-anuphan max-w-xl text-xl leading-relaxed font-medium text-slate-400 opacity-90 md:text-2xl">
                เจาะลึกกลยุทธ์เบื้องหลังความสำเร็จและบทความแบ่งปันความรู้เพื่อยกระดับธุรกิจของคุณ
              </p>
            </div>

            {/* 🍬 Luminous Tabs Controller */}
            <TabsList className="shadow-luminous h-auto rounded-4xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-3xl">
              <TabsTrigger
                value="cases"
                className="data-[state=active]:shadow-aurora-glow rounded-full px-12 py-5 text-[10px] font-black tracking-[0.2em] uppercase transition-all data-[state=active]:bg-white data-[state=active]:text-slate-950"
              >
                <Trophy className="mr-2 h-4 w-4" /> Case Studies
              </TabsTrigger>
              <TabsTrigger
                value="blog"
                className="data-[state=active]:shadow-aurora-glow rounded-full px-12 py-5 text-[10px] font-black tracking-[0.2em] uppercase transition-all data-[state=active]:bg-white data-[state=active]:text-slate-950"
              >
                <BookOpen className="mr-2 h-4 w-4" /> Articles
              </TabsTrigger>
            </TabsList>
          </div>

          {/* 📦 Content Area: จังหวะ Fade ที่นุ่มนวล */}
          <TabsContent
            value="cases"
            className="animate-in fade-in slide-in-from-bottom-12 cubic-bezier(0.16, 1, 0.3, 1) mt-0 duration-1000"
          >
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <CaseStudyCard
                title="Unlink TH - ศูนย์กู้ข้อมูลอันดับ 1"
                slug="unlink-th"
                category="Performance Service"
                image="/images/showcase/unlink-th.webp"
                stats={{ label: "Speed Score", value: "99/100" }}
              />
              <CaseStudyCard
                title="Sushi Master Omakase"
                slug="sushi-omakase"
                category="Premium Food"
                image="/images/showcase/project-01.webp"
                stats={{ label: "Conversion", value: "+240%" }}
                themeColor="aurora-emerald"
              />
            </div>
          </TabsContent>

          <TabsContent
            value="blog"
            className="animate-in fade-in slide-in-from-bottom-12 cubic-bezier(0.16, 1, 0.3, 1) mt-0 duration-1000"
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* ✅ ส่วนนี้รอพี่เอ็มดึงข้อมูล Blog มา Map ใส่ BlogCard ครับ */}
              <div className="col-span-full py-20 text-center">
                <p className="font-anuphan text-slate-500">
                  บทความใหม่กำลังเตรียมการผลิต...
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* View All Action */}
        <div className="mt-28 text-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-6 text-[11px] font-black tracking-[0.4em] text-slate-500 uppercase transition-all hover:text-white"
          >
            Explore Full Archive
            <div className="group-hover:border-aurora-cyan group-hover:bg-aurora-cyan shadow-luminous flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:text-slate-950">
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
