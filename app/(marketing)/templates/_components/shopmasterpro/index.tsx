/** @format */

"use client"

import React from "react"
import Image from "next/image"
import { ShopMasterData } from "./data"
import {
  ShoppingBag,
  Search,
  User,
  Heart,
  Star,
  ArrowRight,
} from "lucide-react"

export const ShopMasterTemplate = ({ data }: { data: ShopMasterData }) => {
  /**
   * แก้ไขจุดที่ 1: ลบ promo ออกจากการดึงตัวแปร (Destructuring)
   * เนื่องจากในส่วนแสดงผลด้านล่างไม่ได้มีการเรียกใช้งาน เพื่อเคลียร์ Error no-unused-vars
   */
  const { navbar, hero, trending, footer } = data

  return (
    <div className="thai-font-smoothing w-full bg-white font-sans text-slate-900">
      {/* 1. ส่วนหัวเว็บไซต์ (Header) */}
      <header className="sticky top-0 z-[100] border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="text-2xl font-black tracking-tighter text-orange-600">
            {navbar.logo}
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            {navbar.categories.map((cat, i) => (
              <a
                key={i}
                href="#"
                className="text-xs font-bold tracking-widest text-slate-500 uppercase hover:text-orange-600"
              >
                {cat}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <button className="text-slate-400 hover:text-slate-900">
              <Search size={20} />
            </button>
            <button className="text-slate-400 hover:text-slate-900">
              <User size={20} />
            </button>
            <button className="relative text-slate-400 hover:text-slate-900">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[8px] font-bold text-white">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. ส่วนโปรโมชั่นหลัก (Hero Section) */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-6">
          <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] md:h-[550px]">
            <Image
              src={hero.image}
              alt="Promotion"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-12 text-white md:px-24">
              <h1 className="font-prompt max-w-xl text-4xl leading-tight font-black md:text-7xl">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-md text-base opacity-90 md:text-lg">
                {hero.description}
              </p>
              <button className="mt-10 flex w-fit items-center gap-3 rounded-full bg-orange-600 px-10 py-4 text-xs font-black tracking-widest uppercase transition hover:bg-orange-700 active:scale-95">
                {hero.cta} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. รายการสินค้าที่น่าสนใจ (Trending Products) */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-prompt text-3xl font-black md:text-4xl">
              {trending.title}
            </h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-orange-600" />
          </div>
          <button className="text-xs font-bold tracking-widest text-slate-400 uppercase hover:text-orange-600">
            ดูทั้งหมด
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
          {trending.products.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {p.tag && (
                  <div className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-[10px] font-black tracking-widest text-orange-600 uppercase shadow-sm">
                    {p.tag}
                  </div>
                )}
                <button className="absolute right-4 bottom-4 flex h-10 w-10 translate-y-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-all group-hover:translate-y-0 hover:bg-orange-600 hover:text-white">
                  <Heart size={18} />
                </button>
              </div>
              <div className="mt-5 px-1">
                <div className="flex gap-1 text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <h3 className="mt-2 text-sm font-bold text-slate-700 transition-colors group-hover:text-orange-600">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-lg font-black text-slate-900">
                    ฿{p.price.toLocaleString()}
                  </span>
                  {p.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      ฿{p.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ส่วนท้ายเว็บไซต์ (Footer) */}
      <footer className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <div className="text-xl font-black tracking-tighter text-orange-600">
                {navbar.logo}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-500">
                {footer.about}
              </p>
            </div>
            <div>
              <h4 className="font-prompt text-sm font-black tracking-widest uppercase">
                ข้อมูลเพิ่มเติม
              </h4>
              <ul className="mt-6 space-y-4">
                {footer.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-orange-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-prompt text-sm font-black tracking-widest uppercase">
                ช่องทางชำระเงิน
              </h4>
              <p className="mt-6 text-sm text-slate-400">
                รองรับทั้งบัตรเครดิต, พร้อมเพย์ และการโอนเงินผ่านธนาคาร
              </p>
            </div>
          </div>
          <div className="mt-20 border-t border-slate-200 pt-8 text-center text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            © 2026 {navbar.logo} . ชุดคำสั่งโดย aemdevweb
          </div>
        </div>
      </footer>
    </div>
  )
}
