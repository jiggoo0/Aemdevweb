/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { HotelResortData } from "./data"
// [FIXED]: ตัด Mail และ Menu ออกเพื่อให้ผ่านการตรวจสอบ ESLint
import { Wifi, Coffee, Waves, Sparkles, MapPin, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap = {
  wifi: <Wifi size={24} />,
  coffee: <Coffee size={24} />,
  pool: <Waves size={24} />,
  spa: <Sparkles size={24} />,
}

export const HotelResortTemplate = ({ data }: { data: HotelResortData }) => {
  const { navbar, hero, about, amenities, footer } = data
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="thai-font-smoothing w-full bg-white font-sans text-stone-900">
      {/* 1. Navbar: ปรับการแสดงผลตามการเลื่อนหน้าจอ */}
      <nav
        className={cn(
          "fixed top-0 z-[100] w-full py-4 transition-all duration-300",
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div
            className={cn(
              "font-prompt text-lg font-black tracking-tighter",
              isScrolled ? "text-stone-900" : "text-white"
            )}
          >
            {navbar.logo}
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {navbar.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={cn(
                  "text-[10px] font-bold tracking-widest uppercase transition-colors hover:text-emerald-500",
                  isScrolled ? "text-stone-500" : "text-white/80"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. Hero: ส่วนแสดงภาพลักษณ์หลักของที่พัก */}
      <section className="relative h-[550px] w-full md:h-[700px]">
        <Image
          src={hero.bgImage}
          alt="Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="font-prompt max-w-4xl text-4xl leading-[1.1] font-black tracking-tight uppercase md:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base opacity-90 md:text-lg">
            {hero.subtitle}
          </p>
          <button className="mt-8 bg-emerald-500 px-10 py-4 text-[10px] font-black tracking-widest text-white uppercase transition hover:bg-emerald-600">
            {hero.cta}
          </button>
        </div>
      </section>

      {/* 3. About: ข้อมูลรายละเอียดเบื้องต้น */}
      <section id="about" className="container mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <h2 className="font-prompt text-4xl leading-tight font-black text-stone-950 md:text-5xl">
              {about.heading}
            </h2>
            <p className="mt-6 text-lg text-stone-600">{about.description}</p>
            <div className="mt-10 flex gap-8">
              {about.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-emerald-600">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-stone-200 shadow-xl lg:w-1/2">
            <Image
              src={about.image}
              alt="About"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Amenities: สิ่งอำนวยความสะดวก */}
      <section id="amenities" className="bg-stone-950 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-prompt mb-16 text-3xl font-black md:text-5xl">
            {amenities.title}
          </h2>
          <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {amenities.items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-stone-800 p-8 transition-colors hover:bg-stone-900"
              >
                <div className="mb-6 text-emerald-500">
                  {iconMap[item.icon as keyof typeof iconMap]}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-stone-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer: ข้อมูลการติดต่อท้ายหน้า */}
      <footer id="contact" className="bg-stone-50 py-20 text-stone-600">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-prompt text-xl font-black text-stone-900">
              {navbar.logo}
            </h3>
            <p className="text-sm">{footer.description}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black tracking-widest text-stone-900 uppercase">
              ติดต่อเรา
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="text-emerald-600" />{" "}
                {footer.contact.address}
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-emerald-600" />{" "}
                {footer.contact.phone}
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black tracking-widest text-stone-900 uppercase">
              ติดตามเรา
            </h4>
            <div className="flex gap-4">
              {footer.socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="text-[10px] font-black tracking-widest uppercase hover:text-emerald-600"
                >
                  {s.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
