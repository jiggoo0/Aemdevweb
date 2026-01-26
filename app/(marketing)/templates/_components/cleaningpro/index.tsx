/** @format */

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
} from "lucide-react"

export const CleaningProTemplate: React.FC<{ data: CleaningServiceData }> = ({
  data,
}) => {
  // ลบ trustPoints ออกจากโครงสร้างเนื่องจากไม่ได้ถูกเรียกใช้งานใน JSX
  const { navigation, hero, highlights, services, footer } = data

  return (
    <div className="cleaning-pro-template bg-white text-left font-sans text-slate-900 selection:bg-blue-100">
      {/* 1. Navbar: เน้นความกระชับและปุ่ม CTA ที่โดดเด่น */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="text-xl font-black tracking-tighter text-blue-600 uppercase italic">
            {footer.companyName}
          </div>
          <div className="hidden items-center gap-10 text-left md:flex">
            {navigation.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-xs font-bold tracking-widest text-slate-500 uppercase transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
            <button className="rounded-xl bg-blue-600 px-8 py-3 text-[10px] font-black tracking-widest text-white uppercase transition-all hover:bg-blue-700">
              {navigation.cta}
            </button>
          </div>
          <Menu className="text-slate-900 md:hidden" size={24} />
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20 text-left">
        <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
              </span>
              <span className="text-[10px] font-black tracking-widest text-blue-700 uppercase">
                พร้อมให้บริการทุกวัน
              </span>
            </div>
            <h1 className="font-prompt text-5xl leading-[1.1] font-black tracking-tighter md:text-7xl">
              {hero.title}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed font-light text-slate-500">
              {hero.description}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="bg-blue-600 px-10 py-5 text-[11px] font-black tracking-widest text-white uppercase shadow-xl shadow-blue-200 transition-all hover:bg-blue-700">
                {hero.cta}
              </button>
              <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 px-6 py-4">
                <Clock className="text-blue-600" size={20} />
                <span className="text-xs font-bold text-slate-600">
                  จองด่วนใน 5 นาที
                </span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[4rem] border-[12px] border-slate-50 shadow-2xl transition-transform duration-700 hover:rotate-0 lg:rotate-3">
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 -z-0 h-full w-1/3 translate-x-1/3 rounded-full bg-blue-50/50 blur-3xl" />
      </section>

      {/* 3. Services Grid */}
      <section id="services" className="bg-white py-24 text-left lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20 max-w-2xl border-l-8 border-blue-600 pl-8">
            <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase">
              {highlights.tag}
            </span>
            <h2 className="font-prompt mt-6 text-4xl font-black tracking-tight uppercase italic md:text-5xl">
              {highlights.title}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className={cn(
                  "relative rounded-[3rem] border p-12 transition-all duration-500",
                  service.isPopular
                    ? "scale-105 border-slate-950 bg-slate-950 text-white shadow-2xl"
                    : "border-slate-100 bg-white hover:border-blue-200"
                )}
              >
                {service.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-6 py-1.5 text-[10px] font-black tracking-widest text-white uppercase">
                    ยอดนิยม
                  </span>
                )}
                <h3 className="font-prompt mb-4 text-2xl font-black">
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "mb-10 text-3xl font-black italic",
                    service.isPopular ? "text-blue-400" : "text-blue-600"
                  )}
                >
                  {service.price}
                </p>
                <ul className="mb-12 space-y-5">
                  {service.features.map((feat, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-4 text-sm leading-snug font-medium opacity-80"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-blue-500"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  className={cn(
                    "w-full rounded-2xl py-5 text-[10px] font-black tracking-widest uppercase transition-all",
                    service.isPopular
                      ? "bg-white text-slate-950 hover:bg-blue-50"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                >
                  ดูรายละเอียด
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer: ข้อมูลบริษัทและการติดต่อ */}
      <footer className="border-t border-slate-800 bg-slate-900 py-24 text-left text-slate-400">
        <div className="container mx-auto px-6">
          <div className="mb-20 grid gap-16 lg:grid-cols-4">
            <div className="space-y-8 lg:col-span-2">
              <div className="text-2xl font-black tracking-tighter text-white uppercase italic">
                {footer.companyName}
              </div>
              <p className="max-w-md leading-relaxed font-light text-slate-500">
                {footer.about}
              </p>
            </div>
            <div className="space-y-8">
              <h4 className="text-xs font-black tracking-widest text-white uppercase">
                Contact
              </h4>
              <ul className="space-y-6">
                <li className="flex cursor-pointer items-center gap-4 text-sm transition-colors hover:text-white">
                  <Phone size={18} className="text-blue-500" />{" "}
                  {footer.contact.phone}
                </li>
                <li className="flex cursor-pointer items-center gap-4 text-sm transition-colors hover:text-white">
                  <MessageCircle size={18} className="text-blue-500" />{" "}
                  {footer.contact.line}
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-xs font-black tracking-widest text-white uppercase">
                Location
              </h4>
              <div className="flex list-none items-start gap-4 text-sm">
                <MapPin size={18} className="shrink-0 text-blue-500" />{" "}
                {footer.contact.address}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-10 text-[10px] font-bold tracking-widest uppercase md:flex-row">
            <p>© 2026 {footer.companyName}. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
