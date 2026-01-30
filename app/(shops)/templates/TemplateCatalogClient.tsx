/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import { Gauge, SearchCode, Rocket, PackageSearch, Star } from "lucide-react"

import { templateRegistry } from "./_registry"
import { ShopNavbar } from "../_components/ShopNavbar"
import { ShopFooter } from "../_components/ShopFooter"
import { ShopCard } from "../_components/ShopCard"

import { getAllTemplatesMetadata } from "@/lib/template"
import { TemplateGrid } from "@/components/marketplace/template/TemplateGrid"
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * TemplateCatalogClient: ศูนย์รวมโซลูชันระบบเว็บไซต์สำเร็จรูป (Strategic Assets Hub)
 * -------------------------------------------------------------------------
 * มาตรฐาน: Ultra-Deep Level 7 | Tailwind 4 OKLCH | Zero Warning
 * ยุทธศาสตร์: การนำเสนอสินทรัพย์ดิจิทัลที่มุ่งเน้นประสิทธิภาพสูงสุด
 */
export default function TemplateCatalogClient() {
  // การคัดเลือกโซลูชันประสิทธิภาพสูงเพื่อแสดงผลในส่วนแนะนำ (Featured Nodes)
  const featuredSlugs = ["starter_landing", "shopmasterpro", "webrental"]

  const featuredUnits = featuredSlugs
    .map((slug) => templateRegistry[slug]?.metadata)
    .filter((unit): unit is NonNullable<typeof unit> => !!unit)

  const allThemes = getAllTemplatesMetadata()

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-emerald-500/10 dark:bg-[oklch(0.12_0.02_260)]">
      {/* 1. SCHEMA: การระบุโครงสร้างข้อมูลเพื่อรองรับมาตรฐานการค้นหาระดับสากล */}
      <JsonLd
        type="CollectionPage"
        data={{
          "@id": `${siteConfig.project.url}/templates/#webpage`,
          name: "โซลูชันเว็บไซต์ประสิทธิภาพสูง 2026 - AEMDEVWEB",
          description:
            "คลังรูปแบบเว็บไซต์ธุรกิจที่ผ่านการเพิ่มประสิทธิภาพระดับสูงสุด โครงสร้างแม่นยำ พร้อมดำเนินการภายใน 24 ชั่วโมง",
          url: `${siteConfig.project.url}/templates`,
        }}
      />

      <ShopNavbar />

      <main className="pt-20">
        {/* 2. HERO SECTION: ส่วนนำเสนอวิสัยทัศน์และมาตรฐานระบบ */}
        <section className="relative overflow-hidden bg-slate-50 pt-24 pb-20 lg:pt-40 lg:pb-32 dark:bg-[oklch(0.15_0.02_260)]">
          <div
            className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-[size:60px_60px] opacity-[0.04] dark:invert"
            aria-hidden="true"
          />

          <div className="container-za">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl space-y-12"
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand-primary h-1.5 w-12 rounded-full" />
                <span className="font-heading text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase italic">
                  Specialist Unit Solutions
                </span>
              </div>

              <h1 className="font-heading text-brand-depth text-7xl leading-[0.8] font-black tracking-tighter uppercase italic md:text-9xl lg:text-[12rem] dark:text-white">
                Catalog<span className="text-brand-primary animate-pulse">.</span>
              </h1>

              <div className="grid grid-cols-1 gap-16 border-t border-slate-200 pt-12 md:grid-cols-2 dark:border-white/5">
                <p className="font-body text-xl leading-relaxed font-bold text-slate-500 md:text-2xl dark:text-[oklch(0.7_0.02_260)]">
                  ยกระดับเว็บไซต์ธุรกิจให้เป็น <br />
                  <span className="text-brand-depth underline decoration-brand-primary decoration-4 underline-offset-8 dark:text-white">
                    "สินทรัพย์ดิจิทัลที่สร้างมูลค่า"
                  </span>{" "}
                  <br />
                  ด้วยรูปแบบระบบที่วางโครงสร้างมาเพื่อประสิทธิภาพการเข้าถึงข้อมูลสูงสุด
                </p>

                <div className="flex flex-wrap content-start gap-4">
                  {[
                    {
                      icon: <Gauge size={16} />,
                      label: "Performance Optimized",
                    },
                    {
                      icon: <Rocket size={16} />,
                      label: "Rapid Implementation",
                    },
                    {
                      icon: <SearchCode size={16} />,
                      label: "AI Strategy Ready",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="font-heading flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-[9px] font-black tracking-widest text-slate-950 uppercase shadow-xl ring-1 shadow-slate-900/[0.03] ring-slate-100 transition-all hover:scale-105 hover:ring-brand-primary dark:bg-white/5 dark:text-white dark:ring-white/10"
                    >
                      <span className="text-brand-primary">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. FEATURED SECTION: โซลูชันประสิทธิภาพสูงที่แนะนำสำหรับโครงการเริ่มต้น */}
        <section className="bg-brand-depth py-24 lg:py-40 dark:bg-[oklch(0.1_0.02_260)]">
          <div className="container-za">
            <div className="mb-20 space-y-6 text-center md:text-left">
              <div className="border-brand-primary/20 bg-brand-primary/10 inline-flex items-center gap-2 rounded-full px-4 py-2 border">
                <Star size={14} className="text-brand-primary fill-brand-primary" />
                <span className="font-heading text-brand-primary text-[10px] font-black tracking-[0.3em] uppercase italic">
                  Strategic Selection
                </span>
              </div>
              <h2 className="font-heading text-5xl font-black tracking-tighter text-white uppercase italic md:text-8xl">
                High <span className="text-brand-primary">Performance.</span>
              </h2>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {featuredUnits.map((unit, idx) => (
                <motion.div
                  key={unit.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ShopCard
                    id={unit.id}
                    name={unit.name}
                    category={unit.category}
                    image={unit.thumbnail}
                    slug={unit.slug}
                    isNew={unit.isNew}
                    priceLabel={unit.priceLabel || "1,990"}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MAIN CATALOG: คลังโซลูชันรูปแบบระบบทั้งหมด (Inventory Hub) */}
        <section className="py-24 lg:py-40">
          <div className="container-za">
            <div className="mb-20 flex flex-col items-start justify-between gap-10 border-b border-slate-100 pb-16 md:flex-row md:items-end dark:border-white/5">
              <div className="max-w-2xl space-y-6">
                <div className="bg-brand-depth h-1.5 w-16 rounded-full dark:bg-brand-primary" />
                <h2 className="font-heading text-brand-depth text-5xl font-black tracking-tighter uppercase italic md:text-7xl dark:text-white">
                  Strategic <span className="text-brand-primary">Inventory.</span>
                </h2>
              </div>
              <div className="font-heading bg-brand-depth flex items-center gap-5 rounded-[2rem] px-8 py-5 text-white shadow-2xl dark:bg-white/5">
                <PackageSearch size={20} className="text-brand-primary" />
                <span className="text-[12px] font-black tracking-[0.4em] uppercase italic">
                  Solutions Ready: {allThemes.length}
                </span>
              </div>
            </div>

            <TemplateGrid templates={allThemes} />
          </div>
        </section>
      </main>

      <ShopFooter />
    </div>
  )
}
