/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { CleaningProData } from "./data"
import {
  Home,
  Building2,
  Sparkles,
  Clock,
  Phone,
  MapPin,
  MessageCircle,
  Mail,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"

// จัดกลุ่มไอคอนเพื่อเรียกใช้งานผ่านก้อนข้อมูล
const iconMap = {
  home: <Home size={28} />,
  building: <Building2 size={28} />,
  sparkles: <Sparkles size={28} />,
  clock: <Clock size={28} />,
}

export const CleaningProTemplate = ({ data }: { data: CleaningProData }) => {
  const { navbar, hero, services, stats, footer } = data
  const [isScrolled, setIsScrolled] = useState(false)

  // ระบบตรวจจับการเลื่อนหน้าจอเพื่อปรับเปลี่ยนหน้าตา Navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="thai-font-smoothing w-full bg-white font-sans text-slate-900">
      {/* 1. ส่วนแถบนำทาง (Navbar) */}
      <nav
        className={cn(
          "fixed top-0 z-[100] w-full transition-all duration-300",
          isScrolled ? "bg-white py-3 shadow-lg" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div
            className={cn(
              "text-2xl font-black tracking-tighter",
              isScrolled ? "text-blue-600" : "text-white"
            )}
          >
            {navbar.logo}
          </div>
          <div className="hidden items-center gap-8 lg:flex">
            {navbar.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={cn(
                  "text-sm font-bold transition-colors hover:text-blue-500",
                  isScrolled ? "text-slate-600" : "text-white/90"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${navbar.phone}`}
              className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white shadow-lg hover:bg-blue-700"
            >
              <Phone size={16} /> {navbar.phone}
            </a>
          </div>
          <button
            className={cn(
              "lg:hidden",
              isScrolled ? "text-slate-900" : "text-white"
            )}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* 2. ส่วนเปิดตัว (Hero Section) */}
      <section className="relative flex h-[600px] items-center overflow-hidden bg-slate-900 md:h-[750px]">
        <Image
          src={hero.image}
          alt="Cleaning Service Hero"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-prompt text-5xl leading-tight font-black text-white md:text-7xl lg:text-8xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg text-slate-200 md:text-xl lg:max-w-xl">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {/* ปรับแก้ Tag ปิดให้ถูกต้องเพื่อป้องกัน Error โครงสร้าง */}
              <button className="rounded-full bg-blue-600 px-10 py-4 text-sm font-black tracking-widest text-white uppercase transition hover:bg-blue-700 active:scale-95">
                {hero.cta}
              </button>
              <button className="rounded-full border-2 border-white px-10 py-4 text-sm font-black tracking-widest text-white uppercase backdrop-blur-sm transition hover:bg-white/10">
                ดูผลงานของเรา
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. แถบข้อมูลสถิติ (Stats Bar) */}
      <div className="relative z-10 mx-auto -mt-12 max-w-5xl px-6">
        <div className="grid grid-cols-1 divide-y divide-slate-100 rounded-3xl bg-white p-8 shadow-2xl md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat, i) => (
            <div key={i} className="py-6 text-center md:py-0">
              <p className="text-4xl font-black text-blue-600">{stat.value}</p>
              <p className="mt-1 text-xs font-bold tracking-widest text-slate-400 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. รายการบริการ (Services Section) */}
      <section id="services" className="container mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="font-prompt text-4xl font-black text-slate-900 md:text-5xl">
            {services.title}
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-blue-600" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item, i) => (
            <div
              key={i}
              className="group rounded-[2.5rem] bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                {iconMap[item.icon as keyof typeof iconMap]}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                {item.desc}
              </p>
              <p className="mt-6 text-sm font-black text-blue-600">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ส่วนท้าย (Footer) */}
      <footer id="contact" className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            <div>
              <div className="text-2xl font-black tracking-tighter text-blue-500">
                {navbar.logo}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">
                {footer.about}
              </p>
            </div>
            <div>
              <h4 className="font-prompt text-lg font-bold">ติดต่อเรา</h4>
              <ul className="mt-6 space-y-4 text-sm text-slate-400">
                <li className="flex gap-4">
                  <MapPin size={18} className="shrink-0 text-blue-500" />{" "}
                  {footer.contact.address}
                </li>
                <li className="flex gap-4">
                  <MessageCircle size={18} className="shrink-0 text-blue-500" />{" "}
                  LINE: {footer.contact.line}
                </li>
                <li className="flex gap-4">
                  <Mail size={18} className="shrink-0 text-blue-500" />{" "}
                  {footer.contact.email}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-prompt text-lg font-bold">เวลาทำการ</h4>
              <p className="mt-6 text-sm text-slate-400">
                เปิดให้บริการทุกวัน จันทร์ - อาทิตย์: 08.00 - 18.00 น.
              </p>
            </div>
          </div>
          <div className="mt-20 border-t border-slate-900 pt-8 text-center text-[10px] font-bold tracking-widest text-slate-600 uppercase">
            © 2026 {navbar.logo}. All rights reserved. | รากฐานดิจิทัลโดย
            AEMDEVWEB
          </div>
        </div>
      </footer>
    </div>
  )
}
