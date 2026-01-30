/** @format */

"use client"

import React from "react"
import Image from "next/image"
import { CleaningServiceData } from "./schema"
import { cn } from "@/lib/utils"
import {
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  MapPin,
  Menu,
  ShieldCheck,
  Zap,
} from "lucide-react"

/**
 * CleaningProTemplate - วางระบบเว็บไซต์บริการทำความสะอาดรุ่นโปร
 * แนวคิด: เน้นความสะอาดที่สั่งได้จริง เข้าถึงง่าย และโหลดไวระดับปีศาจ
 * [FIXED]: เปลี่ยนพิกัดการส่งออกเป็น Export Default เพื่อล้าง Error ใน Registry
 * [FIXED]: เปลี่ยนพิกัด Link '#' เป็น Button เพื่อรักษา Link Integrity
 */
const CleaningProTemplate: React.FC<{ data: CleaningServiceData }> = ({
  data,
}) => {
  const { navigation, hero, highlights, services, trustPoints, footer } = data

  return (
    <div className="cleaning-pro-template bg-white text-left font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Navigation: แถบเมนูพิกัดความคล่องตัว */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2 text-xl font-black tracking-tighter text-blue-600 uppercase italic">
            <Zap size={24} className="fill-blue-600" />
            {footer.companyName}
          </div>

          <div className="hidden items-center gap-10 md:flex">
            {navigation.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-xs font-black tracking-widest text-slate-500 uppercase transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
            <button className="rounded-xl bg-blue-600 px-8 py-3 text-[10px] font-black tracking-widest text-white uppercase transition-all hover:bg-slate-950 hover:shadow-xl active:scale-95">
              {navigation.cta}
            </button>
          </div>

          <button className="text-slate-900 md:hidden" aria-label="Open Menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* 2. Hero Section: ส่วนหยุดสายตา วางพิกัดข้อมูลชัดเจน */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
        <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-blue-700 uppercase italic">
                Active & Ready to Service
              </span>
            </div>

            <h1 className="font-heading text-5xl leading-[1.1] font-black tracking-tighter text-slate-950 md:text-7xl lg:text-8xl">
              {hero.title}
            </h1>

            <p className="max-w-lg text-lg leading-relaxed font-bold text-slate-500 md:text-xl">
              {hero.description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-3 bg-blue-600 px-10 py-5 text-[11px] font-black tracking-widest text-white uppercase shadow-2xl shadow-blue-200 transition-all hover:bg-slate-950 hover:shadow-none active:scale-95">
                {hero.cta}
                <CheckCircle2
                  size={16}
                  className="transition-transform group-hover:rotate-12"
                />
              </button>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white px-6 py-4 shadow-sm">
                <Clock className="text-blue-600" size={20} />
                <span className="text-xs font-black tracking-wider text-slate-600 uppercase italic">
                  จองพิกัดงานไวใน 5 นาที
                </span>
              </div>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-[4rem] border-[12px] border-slate-50 shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:rotate-0 lg:rotate-3">
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* ส่วนตกแต่งพื้นหลัง */}
        <div className="absolute top-0 right-0 -z-0 h-full w-1/3 translate-x-1/3 rounded-full bg-blue-50/50 blur-[120px]" />
      </section>

      {/* 3. Trust Section: วางระบบความเชื่อมั่นก่อนดูพิกัดราคา */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {trustPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-5 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-transform hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black tracking-tight text-slate-900 uppercase italic">
                    {point.title}
                  </h4>
                  <p className="text-xs font-bold text-slate-400">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Section: รายการระบบงานที่คัดมาเพื่อธุรกิจ */}
      <section id="services" className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20 max-w-2xl border-l-8 border-blue-600 pl-8">
            <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase italic">
              {highlights.tag}
            </span>
            <h2 className="font-heading mt-6 text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl">
              {highlights.title}
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className={cn(
                  "relative flex flex-col rounded-[3.5rem] border p-12 transition-all duration-500",
                  service.isPopular
                    ? "shadow-3xl scale-105 border-slate-950 bg-slate-950 text-white"
                    : "border-slate-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5"
                )}
              >
                {service.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-6 py-2 text-[9px] font-black tracking-[0.2em] text-white uppercase italic shadow-lg">
                    ยอดนิยมที่สุด
                  </span>
                )}

                <h3 className="font-heading mb-4 text-3xl font-black tracking-tight italic">
                  {service.title}
                </h3>

                <div className="mb-10 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "text-4xl font-black italic",
                      service.isPopular ? "text-blue-400" : "text-blue-600"
                    )}
                  >
                    {service.price}
                  </span>
                </div>

                <ul className="mb-12 flex-1 space-y-5">
                  {service.features.map((feat, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-4 text-sm leading-snug font-bold opacity-90"
                    >
                      <CheckCircle2
                        size={18}
                        className={cn(
                          "shrink-0",
                          service.isPopular ? "text-blue-400" : "text-blue-500"
                        )}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  className={cn(
                    "w-full rounded-2xl py-5 text-[10px] font-black tracking-[0.3em] uppercase transition-all active:scale-95",
                    service.isPopular
                      ? "bg-white text-slate-950 shadow-xl hover:bg-blue-50"
                      : "bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white"
                  )}
                >
                  เลือกพิกัดงานนี้
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer: พิกัดข้อมูลติดต่อที่เข้าถึงง่าย */}
      <footer className="border-t border-slate-800 bg-slate-950 py-24 text-slate-400">
        <div className="container mx-auto px-6">
          <div className="mb-20 grid gap-16 lg:grid-cols-4">
            <div className="space-y-8 lg:col-span-2">
              <div className="flex items-center gap-2 text-2xl font-black tracking-tighter text-white uppercase italic">
                <Zap size={28} className="fill-blue-500 text-blue-500" />
                {footer.companyName}
              </div>
              <p className="max-w-md text-lg leading-relaxed font-bold text-slate-500">
                {footer.about}
              </p>
            </div>

            <div className="space-y-8 text-left">
              <h4 className="text-[10px] font-black tracking-[0.4em] text-white uppercase italic">
                Direct Contact
              </h4>
              <ul className="space-y-6">
                <li className="group flex cursor-pointer items-center gap-4 text-sm font-bold transition-colors hover:text-white">
                  <Phone
                    size={18}
                    className="text-blue-500 transition-transform group-hover:scale-110"
                  />{" "}
                  {footer.contact.phone}
                </li>
                <li className="group flex cursor-pointer items-center gap-4 text-sm font-bold transition-colors hover:text-white">
                  <MessageCircle
                    size={18}
                    className="text-blue-500 transition-transform group-hover:scale-110"
                  />{" "}
                  {footer.contact.line}
                </li>
              </ul>
            </div>

            <div className="space-y-8 text-left">
              <h4 className="text-[10px] font-black tracking-[0.4em] text-white uppercase italic">
                Service Area
              </h4>
              <div className="flex items-start gap-4 text-sm leading-relaxed font-bold">
                <MapPin size={18} className="shrink-0 text-blue-500" />{" "}
                {footer.contact.address}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-900 pt-10 text-[9px] font-black tracking-[0.3em] uppercase italic md:flex-row">
            <p>© 2026 {footer.companyName} • วางระบบโดย AEM Engine</p>
            <div className="flex gap-8">
              {/* [FIXED]: เปลี่ยนจาก <a> เป็น <button> เพื่อหยุดการ Refresh หน้า (Link Integrity) */}
              <button
                type="button"
                className="cursor-pointer transition-colors hover:text-white"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className="cursor-pointer transition-colors hover:text-white"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ส่งออกพิกัดหลักเพื่อให้ระบบ Registry ดึงไปใช้ได้แบบ Dynamic 100%
export default CleaningProTemplate
